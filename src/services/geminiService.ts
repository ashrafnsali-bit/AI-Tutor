import type { ChatMessage, Lecture, Question, StudentProfile } from '../types';
import { getCountryInfo } from '../data/curriculumCountries';

export interface GeminiEvaluationResponse {
  score: number;
  passed: boolean;
  qualitativeFeedback: string;
  conceptAdvice: { concept: string; isCorrect: boolean; advice: string }[];
}

/**
 * Ask Google Gemini in strict Socratic Tutor mode (Localized in Arabic or English)
 */
export async function askGeminiTutor(
  lecture: Lecture,
  studentQuery: string,
  history: ChatMessage[],
  profile: StudentProfile,
  apiKey?: string
): Promise<{ text: string; scaffoldingType: 'hint' | 'socratic_question' | 'encouragement' }> {
  const activeKey = apiKey || (import.meta as unknown as { env: Record<string, string> }).env?.VITE_GEMINI_API_KEY;
  const isEn = profile.language === 'en';
  const countryInfo = getCountryInfo(profile.country);

  const lectureTitle = isEn ? lecture.titleEn : lecture.titleAr;
  const keyConcepts = isEn ? lecture.keyConceptsEn.join(', ') : lecture.keyConceptsAr.join('، ');

  const systemInstruction = isEn
    ? `
You are the certified AI Socratic Tutor assigned to student: ${profile.name}.
Country & Ministry: ${countryInfo.nameEn} (${countryInfo.ministryEn}) - ${countryInfo.systemNameEn}.
Grade: ${profile.gradeLevel} - Specialization: ${profile.specialization} - Subject: ${profile.subject}.
Active Lesson being studied: "${lectureTitle}".
Key Concepts: ${keyConcepts}.

Strict Pedagogical Directives:
1. NEVER PROVIDE DIRECT ANSWERS OR RAW FINAL VALUES to exercises, homework, or equations!
2. Follow the Socratic Method: ask ONE guiding micro-question or provide ONE targeted conceptual hint per turn.
3. Align terminology and standards strictly with the student's official national curriculum (${countryInfo.nameEn}).
4. Strictly confine discussions to this active lecture. If student asks off-topic or out-of-specialization questions, gently guide them back: "Let's first master the concepts in ${lectureTitle} so you can pass the mandatory assessment!".
5. Keep explanations concise, encouraging, and clear (max 3 short paragraphs).
6. Always converse in English.
    `.trim()
    : `
أنت "المعلم الذكي" (AI Socratic Tutor) المعتمد والمخصص لمساعدة الطالب: ${profile.name}.
دولة المنهج والوزارة: ${countryInfo.nameAr} (${countryInfo.ministryAr}) - ${countryInfo.systemNameAr}.
المرحلة والصف الدراسي: ${profile.gradeLevel} - التخصص: ${profile.specialization} - المادة: ${profile.subject}.
الدرس والمحاضرة الحالية المقررة: "${lectureTitle}".
المفاهيم الأساسية للدرس: ${keyConcepts}.

القواعد التربوية الإلزامية الصارمة:
1. ممنوع منعاً باتاً إعطاء الحلول المباشرة أو الأرقام النهائية للمسائل والواجبات!
2. التزم التزاماً كاملاً بنواتج التعلم ومصطلحات المنهج الدراسي المقرر في دولة الطالب (${countryInfo.nameAr}).
3. اتبع المنهج السقراطي: اسأل الطالب سؤالاً استرشادياً صغيراً واحداً في كل رد يقوده للتفكير الذاتي.
4. التزم حصرياً بنطاق المحاضرة الحالية؛ إذا سأل الطالب عن مواضيع خارجية أو تخصصات أخرى، قل بلطف: "دعنا نركز أولاً على إتقان مفاهيم ${lectureTitle} لاجتياز اختبارها بنجاح!".
5. استخدم لغة عربية فصحى مشجعة، ووضح الرموز الرياضية خطوة بخطوة.
6. لا تتجاوز 3 فقرات قصيرة لكل إجابة.
    `.trim();� للتفكير.
3. التزم حصرياً بنطاق المحاضرة الحالية؛ إذا سأل الطالب عن مواضيع خارجية أو تخصصات أخرى، قل بلطف: "دعنا نركز أولاً على إتقان مفاهيم ${lectureTitle} لاجتياز اختبارها!".
4. استخدم لغة عربية فصحى مشجعة، وضح الرموز الرياضية خطوة بخطوة.
5. لا تتجاوز 3 فقرات قصيرة لكل إجابة.
    `.trim();

  // If API Key is present, call Gemini API
  if (activeKey && activeKey.trim() !== '') {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey.trim()}`;

      const contents = [
        {
          role: 'user',
          parts: [{ text: `System Instruction:\n${systemInstruction}` }]
        },
        ...history.slice(-6).map((msg) => ({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        })),
        {
          role: 'user',
          parts: [{ text: studentQuery }]
        }
      ];

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents,
          generationConfig: {
            temperature: 0.35,
            maxOutputTokens: 600
          }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidate) {
          return {
            text: candidate,
            scaffoldingType: 'socratic_question'
          };
        }
      }
    } catch (err) {
      console.error('Error invoking Gemini API:', err);
    }
  }

  // Bilingual Simulation Fallback
  return generateSimulatedSocraticResponse(studentQuery, lecture, isEn);
}

/**
 * Evaluate student post-lecture assessment submission with Gemini
 */
export async function evaluateAssessmentWithGemini(
  lecture: Lecture,
  questions: Question[],
  selectedAnswers: Record<string, number>,
  profile: StudentProfile,
  apiKey?: string
): Promise<GeminiEvaluationResponse> {
  const isEn = profile.language === 'en';
  let correctCount = 0;
  const conceptAdvice: { concept: string; isCorrect: boolean; advice: string }[] = [];

  questions.forEach((q) => {
    const isCorrect = selectedAnswers[q.id] === q.correctIndex;
    if (isCorrect) correctCount++;

    const conceptName = isEn ? q.conceptTestedEn : q.conceptTestedAr;
    const explanation = isEn ? q.explanationEn : q.explanationAr;

    conceptAdvice.push({
      concept: conceptName,
      isCorrect,
      advice: isCorrect
        ? (isEn ? `Excellent! Demonstrated firm grasp of ${conceptName}.` : `ممتاز! أظهرت استيعاباً قوياً لمفهوم (${conceptName}).`)
        : (isEn ? `Needs review: ${explanation}` : `يحتاج لمراجعة: ${explanation}`)
    });
  });

  const score = Math.round((correctCount / questions.length) * 100);
  const passed = score >= lecture.passingScoreRequired;
  const lectureTitle = isEn ? lecture.titleEn : lecture.titleAr;

  const activeKey = apiKey || (import.meta as unknown as { env: Record<string, string> }).env?.VITE_GEMINI_API_KEY;

  if (activeKey && activeKey.trim() !== '') {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey.trim()}`;

      const prompt = isEn
        ? `
You are the academic Socratic advisor to student ${profile.name} (${profile.gradeLevel}).
The student just completed the mandatory assessment for lecture "${lectureTitle}".
Score achieved: ${score}% (${correctCount} of ${questions.length} questions correct).
Passing threshold to unlock next lecture: ${lecture.passingScoreRequired}%.
Status: ${passed ? 'PASSED - Next lecture unlocked' : 'NOT PASSED - Next lecture remains locked'}.

Concept Mastery:
${conceptAdvice.map((c) => `- Concept "${c.concept}": ${c.isCorrect ? 'Correct' : 'Incorrect - ' + c.advice}`).join('\n')}

Task:
Write a concise, motivating 3-4 sentence Socratic evaluation directly addressing the student in English. Summarize their performance and give actionable guidance on what they should do next.
        `.trim()
        : `
أنت الموجه التربوي الأكاديمي للطالب ${profile.name} في ${profile.gradeLevel}.
أجرى الطالب الاختبار الإلزامي لمحاضرة "${lectureTitle}".
النتيجة المحققة: ${score}% (${correctCount} من أصل ${questions.length} أسئلة صحيحة).
الحد الأدنى لفتح المحاضرة التالية: ${lecture.passingScoreRequired}%.
حالة الانتقال: ${passed ? 'ناجح وتم فتح المحاضرة التالية' : 'لم يبلغ حد الاجتياز والمحاضرة التالية تظل مغلقة'}.

تفاصيل المفاهيم:
${conceptAdvice.map((c) => `- مفهوم "${c.concept}": ${c.isCorrect ? 'إجابة صحيحة' : 'خطأ - ' + c.advice}`).join('\n')}

المطلوب:
اكتب فقرة تقييم وتشجيع تربوية قصيرة ومباشرة (3 إلى 4 جمل فقط) موجهة للطالب بالعربية، توضح له ملخص أدائه وماذا يجب أن يفعل الآن بالتحديد بروح محفزة وسقراطية.
        `.trim();

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: prompt }] }],
          generationConfig: { temperature: 0.3, maxOutputTokens: 350 }
        })
      });

      if (response.ok) {
        const data = await response.json();
        const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (candidate) {
          return { score, passed, qualitativeFeedback: candidate, conceptAdvice };
        }
      }
    } catch (e) {
      console.error('Error generating Gemini evaluation:', e);
    }
  }

  // Default Bilingual Fallback Text
  const defaultFeedback = isEn
    ? passed
      ? `🎉 Outstanding work, ${profile.name}! You scored ${score}% and successfully mastered "${lectureTitle}". The gate has officially unlocked the next lecture—proceed with confidence!`
      : `💪 Good effort, ${profile.name}, but you attained ${score}% while the unlock threshold is ${lecture.passingScoreRequired}%. Review the concept tips below, and retake the quiz to conquer this gate!`
    : passed
      ? `🎉 أداء استثنائي يا ${profile.name}! لقد أحرزت ${score}% واجتزت بنجاح اختبار إتقان "${lectureTitle}". تم فك القفل عن المحاضرة المقبلة لتنطلق إلى المستوى التالي بكل ثقة!`
      : `💪 بداية جيدة يا ${profile.name}، لكنك حققت ${score}% بينما شرط فتح المحاضرة المقبلة هو ${lecture.passingScoreRequired}%. راجع المفاهيم الموضحة أدناه وخاصة العمليات العكسية، ثم أعد المحاولة لتتجاوز التحدي بنجاح!`;

  return {
    score,
    passed,
    qualitativeFeedback: defaultFeedback,
    conceptAdvice
  };
}

/**
 * Bilingual Socratic simulation generator
 */
function generateSimulatedSocraticResponse(query: string, lecture: Lecture, isEn: boolean) {
  const lower = query.toLowerCase();
  const lectureTitle = isEn ? lecture.titleEn : lecture.titleAr;

  if (isEn) {
    if (lower.includes('solve') || lower.includes('answer') || lower.includes('result') || lower.includes('what is x')) {
      return {
        text: `Welcome! Remember that my mission is to train you into an independent problem solver—I won't hand out direct answers 💡.\n\nLet's break this down step-by-step: what arithmetic operation is currently acting on the variable in your problem? And what is its inverse operation?`,
        scaffoldingType: 'socratic_question' as const
      };
    }

    if (lower.includes('subtract') || lower.includes('add') || lower.includes('inverse')) {
      return {
        text: `Spot-on mathematical logic! Inverting addition via subtraction (or vice-versa) applies the fundamental Balance Property of Equality.\n\nIf you apply this operation to one side of the scale, what must you do to the other side to keep it balanced?`,
        scaffoldingType: 'hint' as const
      };
    }

    return {
      text: `Great inquiry related to "${lectureTitle}"! 🌟\n\nRemember the foundational rule of algebra: treat the '=' sign like a precision scale. To isolate variable x, what term do you want to eliminate first, and which inverse operation will you choose?`,
      scaffoldingType: 'socratic_question' as const
    };
  }

  // Arabic
  if (lower.includes('حل') || lower.includes('الجواب') || lower.includes('النتيجة') || lower.includes('كم تساوي')) {
    return {
      text: `أهلاً بك! تذكر أن هدفي هو تدريبك لتصبح خبيراً يحل بنفسه، ولن أعطيك الجواب جاهزاً 💡.\n\nدعنا نبدأ خطوة بخطوة: ما هي العملية الرياضية المطبقة حالياً على المتغير في مسألتك؟ وما هي العملية المعاكسة لها؟`,
      scaffoldingType: 'socratic_question' as const
    };
  }

  return {
    text: `سؤال رائع في صميم موضوع "${lectureTitle}"! 🌟\n\nتذكر القاعدة الأساسية في الجبر: نتعامل مع علامة (=) مثل كفتي ميزان حساس. لعزل المتغير x، ما هو الحد الأول الذي تريد نقله، وما هي العملية العكسية التي ستستخدمها؟`,
    scaffoldingType: 'socratic_question' as const
  };
}

/**
 * ====================================================================
 * CURRICULUM-ALIGNED FULL LECTURE GENERATOR
 * Generates a complete lesson from the official national curriculum
 * for the student's registered grade, subject, and country.
 * ====================================================================
 */

export interface CurriculumLectureGenerationParams {
  profile: StudentProfile;
  lectureNumber: number; // e.g. 1, 2, 3...
  unitTitle?: string;
  lessonTopic?: string; // optional override; if blank, Gemini picks from curriculum
  apiKey?: string;
}

export interface GeneratedLectureResult {
  lecture: Lecture | null;
  error?: string;
}

/** Map subject codes to readable names for the prompt */
const SUBJECT_NAMES: Record<string, { ar: string; en: string }> = {
  PRIMARY_MATH:      { ar: 'الرياضيات - المرحلة الابتدائية', en: 'Primary Mathematics' },
  PRIMARY_ARABIC:    { ar: 'اللغة العربية - المرحلة الابتدائية', en: 'Primary Arabic Language' },
  PRIMARY_SCIENCE:   { ar: 'العلوم - المرحلة الابتدائية', en: 'Primary Science' },
  ISLAMIC_STUDIES:   { ar: 'التربية الإسلامية', en: 'Islamic Studies' },
  MATH:              { ar: 'الرياضيات', en: 'Mathematics' },
  PHYSICS:           { ar: 'الفيزياء', en: 'Physics' },
  CHEMISTRY:         { ar: 'الكيمياء', en: 'Chemistry' },
  BIOLOGY:           { ar: 'الأحياء', en: 'Biology' },
  ARABIC_LIT:        { ar: 'الأدب العربي والبلاغة', en: 'Arabic Literature & Rhetoric' },
  ARABIC_LANG:       { ar: 'اللغة العربية', en: 'Arabic Language' },
  GENERAL_SCIENCE:   { ar: 'العلوم العامة', en: 'General Science' },
  COMPUTER_SCIENCE:  { ar: 'الحاسب الآلي وتقنية المعلومات', en: 'Computer Science & IT' },
};

const GRADE_NAMES: Record<string, { ar: string; en: string }> = {
  G1:  { ar: 'الصف الأول الابتدائي', en: 'Grade 1 - Primary' },
  G2:  { ar: 'الصف الثاني الابتدائي', en: 'Grade 2 - Primary' },
  G3:  { ar: 'الصف الثالث الابتدائي', en: 'Grade 3 - Primary' },
  G4:  { ar: 'الصف الرابع الابتدائي', en: 'Grade 4 - Primary' },
  G5:  { ar: 'الصف الخامس الابتدائي', en: 'Grade 5 - Primary' },
  G6:  { ar: 'الصف السادس الابتدائي', en: 'Grade 6 - Primary' },
  G7:  { ar: 'الصف الأول المتوسط', en: 'Grade 7 - Middle School' },
  G8:  { ar: 'الصف الثاني المتوسط', en: 'Grade 8 - Middle School' },
  G9:  { ar: 'الصف الثالث المتوسط', en: 'Grade 9 - Middle School' },
  G10: { ar: 'الصف الأول الثانوي', en: 'Grade 10 - High School' },
  G11: { ar: 'الصف الثاني الثانوي', en: 'Grade 11 - High School' },
  G12: { ar: 'الصف الثالث الثانوي', en: 'Grade 12 - High School' },
};

/**
 * Generates a full curriculum-aligned lecture using Gemini API.
 * The lecture follows the official national curriculum of the student's registered country and grade.
 */
export async function generateCurriculumLecture(
  params: CurriculumLectureGenerationParams,
  existingLectureTitles: string[] = []
): Promise<GeneratedLectureResult> {
  const { profile, lectureNumber, unitTitle, lessonTopic, apiKey } = params;
  const activeKey = apiKey || (import.meta as unknown as { env: Record<string, string> }).env?.VITE_GEMINI_API_KEY;

  if (!activeKey || activeKey.trim() === '') {
    return { lecture: null, error: 'NO_API_KEY' };
  }

  const { getCountryInfo } = await import('../data/curriculumCountries');
  const countryInfo = getCountryInfo(profile.country);

  const subjectName = SUBJECT_NAMES[profile.subject] || { ar: profile.subject, en: profile.subject };
  const gradeName = GRADE_NAMES[profile.gradeLevel] || { ar: profile.gradeLevel, en: profile.gradeLevel };

  const existingTopicsNote = existingLectureTitles.length > 0
    ? `\nAlready covered topics (do NOT repeat these):\n${existingLectureTitles.map((t, i) => `${i + 1}. ${t}`).join('\n')}`
    : '';

  const specificTopicNote = lessonTopic
    ? `\nSpecific lesson topic requested: "${lessonTopic}". Use this exact topic.`
    : `\nPick the most appropriate next sequential lesson from the official ${countryInfo.nameEn} ${gradeName.en} ${subjectName.en} curriculum.`;

  const unitNote = unitTitle ? `\nUnit/Chapter: "${unitTitle}"` : '';

  const prompt = `
You are an expert curriculum designer for the ${countryInfo.nameEn} official national education system (${countryInfo.ministryEn}).

Generate a COMPLETE, DETAILED, CURRICULUM-ALIGNED lecture for:
- Country: ${countryInfo.nameEn} (${countryInfo.nameAr})
- Ministry: ${countryInfo.ministryEn}
- Grade: ${gradeName.en} (${gradeName.ar})
- Subject: ${subjectName.en} (${subjectName.ar})
- Specialization: ${profile.specialization}
- Lecture Number in sequence: ${lectureNumber}
${unitNote}
${specificTopicNote}
${existingTopicsNote}

STRICT REQUIREMENTS:
1. The lecture content MUST align 100% with the ${countryInfo.nameEn} official national curriculum standards for ${gradeName.en}.
2. Lesson depth and vocabulary must be appropriate for ${gradeName.en} students.
3. All examples must use culturally relevant context from ${countryInfo.nameEn}.
4. Include ALL sections: warm-up hook, learning outcomes, vocabulary, main content sections with examples, formative checks, textbook exercises, summary, concept map, and assessment questions.

Respond ONLY with a valid JSON object (no markdown fences, no extra text) with this EXACT structure:
{
  "titleAr": "عنوان الدرس بالعربية",
  "titleEn": "Lesson Title in English",
  "subtitleAr": "وصف موجز بالعربية",
  "subtitleEn": "Brief subtitle in English",
  "durationMinutes": 30,
  "unitTitleAr": "اسم الوحدة بالعربية",
  "unitTitleEn": "Unit Title in English",
  "lessonNumberAr": "الدرس ${lectureNumber}: ...",
  "lessonNumberEn": "Lesson ${lectureNumber}: ...",
  "termAr": "الفصل الدراسي الأول",
  "termEn": "First Semester / Term 1",
  "gradeLevelNameAr": "${gradeName.ar}",
  "gradeLevelNameEn": "${gradeName.en}",
  "warmupHookAr": "سؤال تشويقي أو موقف من الحياة اليومية يربط الدرس بالواقع",
  "warmupHookEn": "An engaging real-world hook or question that connects the lesson to daily life",
  "learningOutcomesAr": ["بنهاية الدرس، سيكون الطالب قادراً على ...1", "...2", "...3", "...4"],
  "learningOutcomesEn": ["By end of lesson, student will be able to ...1", "...2", "...3", "...4"],
  "vocabulary": [
    { "termAr": "مصطلح 1", "termEn": "Term 1", "definitionAr": "تعريف واضح بالعربية", "definitionEn": "Clear definition in English" },
    { "termAr": "مصطلح 2", "termEn": "Term 2", "definitionAr": "تعريف واضح بالعربية", "definitionEn": "Clear definition in English" },
    { "termAr": "مصطلح 3", "termEn": "Term 3", "definitionAr": "تعريف واضح بالعربية", "definitionEn": "Clear definition in English" }
  ],
  "keyConceptsAr": ["المفهوم الأول", "المفهوم الثاني", "المفهوم الثالث", "المفهوم الرابع"],
  "keyConceptsEn": ["Concept 1", "Concept 2", "Concept 3", "Concept 4"],
  "summaryAr": "ملخص شامل للدرس بالعربية في فقرة واحدة",
  "summaryEn": "Comprehensive lesson summary in English in one paragraph",
  "sections": [
    {
      "titleAr": "1. عنوان القسم الأول",
      "titleEn": "1. First Section Title",
      "contentAr": "شرح تفصيلي وافٍ للمحتوى بالعربية (3-4 فقرات على الأقل)...",
      "contentEn": "Detailed comprehensive explanation of the content in English (3-4 paragraphs minimum)...",
      "interactiveExample": {
        "titleAr": "مثال محلول: ...",
        "titleEn": "Worked Example: ...",
        "equation": "optional: formula or equation string",
        "steps": [
          { "stepNumber": 1, "textAr": "الخطوة الأولى...", "textEn": "Step one..." },
          { "stepNumber": 2, "textAr": "الخطوة الثانية...", "textEn": "Step two..." },
          { "stepNumber": 3, "textAr": "الخطوة الثالثة...", "textEn": "Step three..." }
        ],
        "takeawayAr": "الخلاصة الرئيسية من هذا المثال",
        "takeawayEn": "Key takeaway from this example"
      },
      "tipsAr": ["نصيحة تعليمية مهمة 1", "نصيحة 2"],
      "tipsEn": ["Important tip 1", "Tip 2"],
      "formativeCheck": {
        "id": "fc-gen-${lectureNumber}-1",
        "questionAr": "سؤال تقييم مرحلي للتحقق من الفهم؟",
        "questionEn": "Formative check question to verify understanding?",
        "optionsAr": ["الخيار أ", "الخيار ب", "الخيار ج", "الخيار د"],
        "optionsEn": ["Option A", "Option B", "Option C", "Option D"],
        "correctIndex": 0,
        "explanationAr": "شرح سبب صحة الإجابة",
        "explanationEn": "Explanation of why the answer is correct",
        "hintAr": "تلميح للطالب إذا أخطأ",
        "hintEn": "Hint for student if incorrect"
      }
    },
    {
      "titleAr": "2. عنوان القسم الثاني",
      "titleEn": "2. Second Section Title",
      "contentAr": "شرح تفصيلي للقسم الثاني...",
      "contentEn": "Detailed explanation of second section...",
      "tipsAr": ["نصيحة 1"],
      "tipsEn": ["Tip 1"]
    }
  ],
  "conceptMapAr": ["المفهوم الرئيسي → المفهوم الفرعي 1", "المفهوم الرئيسي → المفهوم الفرعي 2", "ربط المفاهيم 3"],
  "conceptMapEn": ["Main Concept → Sub-concept 1", "Main Concept → Sub-concept 2", "Concept link 3"],
  "textbookExercises": [
    {
      "id": "ex-gen-${lectureNumber}-1",
      "questionAr": "تمرين من الكتاب المدرسي ...",
      "questionEn": "Textbook exercise ...",
      "solutionStepsAr": ["خطوة 1: ...", "خطوة 2: ...", "خطوة 3: ..."],
      "solutionStepsEn": ["Step 1: ...", "Step 2: ...", "Step 3: ..."],
      "answerAr": "الإجابة النهائية",
      "answerEn": "Final answer"
    },
    {
      "id": "ex-gen-${lectureNumber}-2",
      "questionAr": "تمرين ثانٍ ...",
      "questionEn": "Second exercise ...",
      "solutionStepsAr": ["خطوة 1: ..."],
      "solutionStepsEn": ["Step 1: ..."],
      "answerAr": "الإجابة",
      "answerEn": "Answer"
    }
  ],
  "assessment": {
    "id": "quiz-gen-${lectureNumber}",
    "lectureId": "gen-lec-${lectureNumber}",
    "titleAr": "تقييم الدرس ${lectureNumber}",
    "titleEn": "Lecture ${lectureNumber} Assessment",
    "passingScore": 80,
    "questions": [
      {
        "id": "qg${lectureNumber}-1",
        "textAr": "سؤال اختيار من متعدد 1 - يقيس الفهم العميق للمفهوم...",
        "textEn": "MCQ 1 - measures deep understanding...",
        "optionsAr": ["أ) ...", "ب) ...", "ج) ...", "د) ..."],
        "optionsEn": ["A) ...", "B) ...", "C) ...", "D) ..."],
        "correctIndex": 0,
        "conceptTestedAr": "المفهوم المُقيَّم",
        "conceptTestedEn": "Concept being tested",
        "explanationAr": "شرح الإجابة الصحيحة",
        "explanationEn": "Explanation of correct answer",
        "difficulty": "medium"
      },
      {
        "id": "qg${lectureNumber}-2",
        "textAr": "سؤال اختيار من متعدد 2...",
        "textEn": "MCQ 2...",
        "optionsAr": ["أ) ...", "ب) ...", "ج) ...", "د) ..."],
        "optionsEn": ["A) ...", "B) ...", "C) ...", "D) ..."],
        "correctIndex": 1,
        "conceptTestedAr": "مفهوم آخر",
        "conceptTestedEn": "Another concept",
        "explanationAr": "شرح الإجابة",
        "explanationEn": "Answer explanation",
        "difficulty": "easy"
      },
      {
        "id": "qg${lectureNumber}-3",
        "textAr": "سؤال تطبيقي متقدم...",
        "textEn": "Advanced application question...",
        "optionsAr": ["أ) ...", "ب) ...", "ج) ...", "د) ..."],
        "optionsEn": ["A) ...", "B) ...", "C) ...", "D) ..."],
        "correctIndex": 2,
        "conceptTestedAr": "التطبيق",
        "conceptTestedEn": "Application",
        "explanationAr": "شرح الإجابة",
        "explanationEn": "Answer explanation",
        "difficulty": "hard"
      }
    ]
  }
}
`.trim();

  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${activeKey.trim()}`;

    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ role: 'user', parts: [{ text: prompt }] }],
        generationConfig: {
          temperature: 0.4,
          maxOutputTokens: 8192,
          responseMimeType: 'application/json'
        }
      })
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error('Gemini API error:', errBody);
      return { lecture: null, error: `API_ERROR: ${response.status}` };
    }

    const data = await response.json();
    const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!rawText) {
      return { lecture: null, error: 'EMPTY_RESPONSE' };
    }

    // Strip markdown fences if present
    const cleaned = rawText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    const parsed = JSON.parse(cleaned);

    const lectureId = `gen-lec-${profile.country}-${profile.gradeLevel}-${profile.subject}-${lectureNumber}-${Date.now()}`;

    const lecture: Lecture = {
      id: lectureId,
      order: lectureNumber,
      titleAr: parsed.titleAr || `درس ${lectureNumber}`,
      titleEn: parsed.titleEn || `Lesson ${lectureNumber}`,
      subtitleAr: parsed.subtitleAr || '',
      subtitleEn: parsed.subtitleEn || '',
      durationMinutes: parsed.durationMinutes || 30,
      isLocked: false,
      isCompleted: false,
      passingScoreRequired: 80,

      // Curriculum metadata
      country: profile.country,
      ministryAr: countryInfo.ministryAr,
      ministryEn: countryInfo.ministryEn,
      gradeLevelNameAr: parsed.gradeLevelNameAr || gradeName.ar,
      gradeLevelNameEn: parsed.gradeLevelNameEn || gradeName.en,
      termAr: parsed.termAr || countryInfo.termDefaultAr,
      termEn: parsed.termEn || countryInfo.termDefaultEn,
      unitTitleAr: parsed.unitTitleAr || '',
      unitTitleEn: parsed.unitTitleEn || '',
      lessonNumberAr: parsed.lessonNumberAr || `الدرس ${lectureNumber}`,
      lessonNumberEn: parsed.lessonNumberEn || `Lesson ${lectureNumber}`,

      warmupHookAr: parsed.warmupHookAr || '',
      warmupHookEn: parsed.warmupHookEn || '',
      learningOutcomesAr: parsed.learningOutcomesAr || [],
      learningOutcomesEn: parsed.learningOutcomesEn || [],
      vocabulary: parsed.vocabulary || [],
      keyConceptsAr: parsed.keyConceptsAr || [],
      keyConceptsEn: parsed.keyConceptsEn || [],
      summaryAr: parsed.summaryAr || '',
      summaryEn: parsed.summaryEn || '',
      sections: parsed.sections || [],
      conceptMapAr: parsed.conceptMapAr || [],
      conceptMapEn: parsed.conceptMapEn || [],
      textbookExercises: parsed.textbookExercises || [],
      assessment: parsed.assessment || {
        id: `quiz-gen-${lectureNumber}`,
        lectureId,
        titleAr: `تقييم الدرس ${lectureNumber}`,
        titleEn: `Lesson ${lectureNumber} Assessment`,
        passingScore: 80,
        questions: []
      }
    };

    return { lecture };
  } catch (err) {
    console.error('Error generating curriculum lecture:', err);
    return { lecture: null, error: err instanceof Error ? err.message : 'PARSE_ERROR' };
  }
}
