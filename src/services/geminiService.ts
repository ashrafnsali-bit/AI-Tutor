import type { ChatMessage, Lecture, Question, StudentProfile } from '../types';
import { getCountryInfo, TRACK_LABELS, EDUCATION_TYPE_LABELS } from '../data/curriculumCountries';
import { ensureFourExamplesForLecture } from './lectureExampleEnricher';

export interface GeminiEvaluationResponse {
  score: number;
  passed: boolean;
  qualitativeFeedback: string;
  conceptAdvice: { concept: string; isCorrect: boolean; advice: string }[];
}

export const GEMINI_CANDIDATE_MODELS = [
  'gemini-3.1-pro-preview',
  'gemini-2.0-flash',
  'gemini-1.5-flash',
  'gemini-1.5-pro',
  'gemini-2.0-flash-lite',
  'gemini-2.5-flash'
];

let cachedWorkingModel: string | null = null;

export interface GeminiCallPayload {
  contents: any[];
  generationConfig?: {
    temperature?: number;
    maxOutputTokens?: number;
    responseMimeType?: string;
  };
}

/**
 * Universal Gemini API caller with automatic model fallback & intelligent error handling
 */
export async function callGeminiApiWithFallback(
  apiKey: string,
  payload: GeminiCallPayload
): Promise<{ text: string; modelUsed: string } | { error: string }> {
  const activeKey = apiKey.trim();
  if (!activeKey) return { error: 'NO_API_KEY' };

  // Prioritize cached working model to avoid redundant fallback iterations
  const modelsToTry = cachedWorkingModel
    ? [cachedWorkingModel, ...GEMINI_CANDIDATE_MODELS.filter(m => m !== cachedWorkingModel)]
    : [...GEMINI_CANDIDATE_MODELS];

  let lastError = '';

  for (const modelName of modelsToTry) {
    try {
      const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${activeKey}`;
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        const data = await response.json();
        const candidate = data.candidates?.[0];
        const text = candidate?.content?.parts?.[0]?.text;
        if (text && text.trim().length > 0) {
          cachedWorkingModel = modelName;
          console.log(`[Gemini API] Successfully generated with model: ${modelName}`);
          return { text, modelUsed: modelName };
        } else {
          lastError = `Model ${modelName} returned empty text (finishReason: ${candidate?.finishReason || 'unknown'})`;
          console.warn(`[Gemini API] ${lastError}`);
        }
      } else {
        const errText = await response.text();
        lastError = errText;
        console.warn(`[Gemini API] Model ${modelName} returned ${response.status}:`, errText);
      }
    } catch (e) {
      lastError = e instanceof Error ? e.message : 'Network error';
      console.warn(`[Gemini API] Model ${modelName} network error:`, lastError);
    }
  }

  // Fallback: If responseMimeType: 'application/json' caused rejection across candidate models, retry without responseMimeType
  if (payload.generationConfig?.responseMimeType) {
    const fallbackPayload = {
      ...payload,
      generationConfig: {
        ...payload.generationConfig,
        responseMimeType: undefined
      }
    };
    for (const modelName of ['gemini-3.1-pro-preview', 'gemini-2.0-flash', 'gemini-1.5-flash']) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${activeKey}`;
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fallbackPayload)
        });
        if (response.ok) {
          const data = await response.json();
          const candidate = data.candidates?.[0];
          const text = candidate?.content?.parts?.[0]?.text;
          if (text && text.trim().length > 0) {
            cachedWorkingModel = modelName;
            console.log(`[Gemini API] Successfully generated without responseMimeType using: ${modelName}`);
            return { text, modelUsed: modelName };
          }
        }
      } catch { /* continue */ }
    }
  }

  return { error: lastError || 'All candidate Gemini models failed' };
}

/**
 * Ask Google Gemini in strict Socratic Tutor mode (Localized by Country & National Curriculum)
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

  const cInfo = getCountryInfo(profile.country);
  const trackInfo = profile.educationTrack ? TRACK_LABELS[profile.educationTrack] : undefined;
  const typeInfo = profile.educationType ? EDUCATION_TYPE_LABELS[profile.educationType] : undefined;

  const lectureTitle = isEn ? lecture.titleEn : lecture.titleAr;
  const keyConcepts = isEn ? lecture.keyConceptsEn.join(', ') : lecture.keyConceptsAr.join('، ');

  const systemInstruction = isEn
    ? `
You are the certified AI Socratic Tutor assigned to student: ${profile.name}.
Country & Ministry: ${cInfo.nameEn} (${cInfo.ministryEn}).
National Standard: ${cInfo.systemNameEn}.
Education Type: ${typeInfo ? typeInfo.en : 'National Public Standard'}.
Track / Specialization: ${trackInfo ? trackInfo.en : profile.specialization}.
Grade: ${profile.gradeLevel} - Subject: ${profile.subject}.
Active Lecture being studied: "${lectureTitle}".
Key Concepts: ${keyConcepts}.

Strict Pedagogical Directives:
1. Adhere strictly to the official educational standards, pedagogical terminologies, and textbook conventions of ${cInfo.nameEn}.
2. NEVER PROVIDE DIRECT ANSWERS OR RAW FINAL VALUES to exercises, homework, or equations!
3. Follow the Socratic Method: ask ONE guiding micro-question or provide ONE targeted conceptual hint per turn.
4. Strictly confine discussions to this active lecture. If student asks off-topic questions, gently guide them back: "Let's first master the concepts in ${lectureTitle} so you can pass the mandatory assessment!".
5. Keep explanations concise, encouraging, and clear (max 3 short paragraphs).
6. Always converse in English.
    `.trim()
    : `
أنت "المعلم الذكي" (AI Socratic Tutor) المعتمد والمخصص لمساعدة الطالب: ${profile.name}.
الدولة والوزارة المعنية: ${cInfo.nameAr} (${cInfo.ministryAr}).
المنهج والمعيار الوطني: ${cInfo.systemNameAr}.
نوع التعليم: ${typeInfo ? typeInfo.ar : 'تعليم حكومي معتمد'}.
مسار التعليم والتخصص: ${trackInfo ? trackInfo.ar : profile.specialization}.
المرحلة والصف الدراسي: ${profile.gradeLevel} - المادة: ${profile.subject}.
المحاضرة الحالية التي يدرسها الطالب الآن: "${lectureTitle}".
المفاهيم الأساسية للمحاضرة: ${keyConcepts}.

القواعد التربوية الإلزامية الصارمة:
1. التزم بالمصطلحات العلمية والرموز الرياضية والقواعد المعتمدة رسمياً في مناهج ${cInfo.nameAr}.
2. ممنوع منعاً باتاً إعطاء الحلول المباشرة أو الأرقام النهائية للمسائل والواجبات!
3. اتبع المنهج السقراطي: اسأل الطالب سؤالاً استرشادياً صغيراً واحداً في كل رد يقوده للتفكير الذاتي.
4. التزم حصرياً بنطاق المحاضرة الحالية؛ إذا سأل الطالب عن مواضيع خارجية، وجهه بلطف للتركيز على إتقان ${lectureTitle}.
5. استخدم لغة عربية فصحى مشجعة، ووضح الرموز الرياضية خطوة بخطوة.
6. لا تتجاوز 3 فقرات قصيرة لكل إجابة.
    `.trim();

  // If API Key is present, call Gemini API with fallback
  if (activeKey && activeKey.trim() !== '') {
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

    const result = await callGeminiApiWithFallback(activeKey, {
      contents,
      generationConfig: {
        temperature: 0.35,
        maxOutputTokens: 600
      }
    });

    if ('text' in result && result.text) {
      return {
        text: result.text,
        scaffoldingType: 'socratic_question'
      };
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

    const result = await callGeminiApiWithFallback(activeKey, {
      contents: [{ role: 'user', parts: [{ text: prompt }] }],
      generationConfig: { temperature: 0.3, maxOutputTokens: 350 }
    });

    if ('text' in result && result.text) {
      return { score, passed, qualitativeFeedback: result.text, conceptAdvice };
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

export interface GenerateCurriculumParams {
  profile: StudentProfile;
  lectureNumber: number;
  unitTitle?: string;
  lessonTopic?: string;
  apiKey?: string;
}

export async function generateCurriculumLecture(
  params: GenerateCurriculumParams,
  existingTitles: string[] = []
): Promise<{ lecture: Lecture | null; error?: string }> {
  const { profile, lectureNumber, unitTitle, lessonTopic, apiKey } = params;
  const activeKey = apiKey || (import.meta as unknown as { env: Record<string, string> }).env?.VITE_GEMINI_API_KEY;

  if (!activeKey || activeKey.trim() === '') {
    return { lecture: null, error: 'Gemini API key is required to generate curriculum lessons.' };
  }

  const cInfo = getCountryInfo(profile.country);
  const prompt = `You are a Senior National Curriculum Author, Pedagogical Expert, and Textbook Lead for ${cInfo.nameAr} (${cInfo.ministryAr}).
Generate an authentic, high-caliber, comprehensive academic lesson strictly aligned with national standards for:
- Country & Standard: ${cInfo.nameAr} (${cInfo.systemNameAr}) [Country Code: ${profile.country}]
- Grade Level: ${profile.gradeLevel}
- Educational Track / Specialization: ${profile.educationTrack || profile.specialization}
- Subject: ${profile.subject}
- Sequence Order / Lecture Number: ${lectureNumber}
${unitTitle ? `- Unit: ${unitTitle}` : ''}
${lessonTopic ? `- Focus Topic: ${lessonTopic}` : ''}
${existingTitles.length > 0 ? `- Already covered topics (DO NOT duplicate): ${existingTitles.join(' | ')}` : ''}

CRITICAL RULES:
1. Adhere strictly to the official educational guidelines, scientific terms, and symbols of ${cInfo.nameAr}.
2. The lecture MUST contain strictly 4 distinct, comprehensive sections, and EACH section MUST contain a step-by-step interactive worked example (interactiveExample) with detailed solution steps, equations/rules, and a golden takeaway. That is strictly 4 worked examples in total (4 أمثلة توضيحية تفاعلية محلولة خطوة بخطوة لتوصيل المعلومة وترسيخ الفهم للطالب).
3. Provide a full, rich lesson with a real-world warmup hook, targeted learning outcomes, scientific vocabulary, 4 in-depth explanation sections with formative checks and 4 step-by-step interactive examples, a concept map summary, guided textbook exercises with detailed solutions, and a 3-question assessment with a passing threshold of 80%.
4. Return ONLY a valid JSON object strictly matching this schema with NO markdown fences, no explanatory preambles:

{
  "id": "gen-${profile.subject.toLowerCase()}-${lectureNumber}-${Date.now()}",
  "order": ${lectureNumber},
  "titleAr": "المحاضرة ${lectureNumber}: عنوان الدرس الدقيق بالعربية",
  "titleEn": "Lecture ${lectureNumber}: Exact Lesson Title in English",
  "subtitleAr": "وصف مفاهيمي موجز وواضح للدرس بالعربية",
  "subtitleEn": "Concise pedagogical subtitle in English",
  "durationMinutes": 30,
  "isLocked": ${lectureNumber > 1 ? 'true' : 'false'},
  "isCompleted": false,
  "passingScoreRequired": 80,
  "country": "${profile.country}",
  "ministryAr": "${cInfo.ministryAr}",
  "ministryEn": "${cInfo.ministryEn}",
  "gradeLevelNameAr": "المرحلة التعليمية - ${profile.gradeLevel}",
  "gradeLevelNameEn": "Grade ${profile.gradeLevel}",
  "termAr": "${cInfo.termDefaultAr}",
  "termEn": "${cInfo.termDefaultEn}",
  "unitTitleAr": "${unitTitle ? unitTitle : 'الوحدة الدراسية المقررة'}",
  "unitTitleEn": "${unitTitle ? unitTitle : 'Curriculum Unit'}",
  "lessonNumberAr": "الدرس ${lectureNumber}",
  "lessonNumberEn": "Lesson ${lectureNumber}",
  "warmupHookAr": "فقرة تهيئة ذهنية مشوقة تربط مفهوم الدرس بالحياة اليومية والتطبيقات العملية المعاصرة (3-4 أسطر)",
  "warmupHookEn": "Engaging real-world connection and hook (3-4 lines)",
  "learningOutcomesAr": [
    "أن يتعرف الطالب على...",
    "أن يطبق القواعد في حل...",
    "أن يستنتج العلاقة بين..."
  ],
  "learningOutcomesEn": [
    "Identify core principles of...",
    "Apply equations and rules to solve...",
    "Analyze the relationships between..."
  ],
  "vocabulary": [
    {
      "termAr": "المصطلح 1 (بالعربية)",
      "termEn": "Term 1 (English)",
      "definitionAr": "التعريف العلمي الدقيق للمصطلح بالعربية",
      "definitionEn": "Precise scientific definition in English"
    },
    {
      "termAr": "المصطلح 2",
      "termEn": "Term 2",
      "definitionAr": "التعريف العلمي",
      "definitionEn": "Scientific definition"
    }
  ],
  "keyConceptsAr": ["المفهوم الرئيسي 1", "المفهوم الرئيسي 2", "المفهوم الرئيسي 3"],
  "keyConceptsEn": ["Key Concept 1", "Key Concept 2", "Key Concept 3"],
  "summaryAr": "ملخص مفاهيمي شامل وشائق لأبرز ما تم تعمله في المحاضرة",
  "summaryEn": "Comprehensive pedagogical summary of the lecture",
  "sections": [
    {
      "titleAr": "1. الشرح المفاهيمي والأساس العلمي",
      "titleEn": "1. Conceptual Explanation & Principles",
      "contentAr": "شرح تفصيلي متعمق مدعم بالقوانين والخطوات التوضيحية باللغة العربية الفصحى...",
      "contentEn": "Detailed in-depth conceptual explanation in English...",
      "interactiveExample": {
        "titleAr": "تطبيق عملي محلول خطوة بخطوة",
        "titleEn": "Step-by-Step Interactive Example",
        "equation": "المعادلة أو المسألة الرئيسية",
        "steps": [
          { "stepNumber": 1, "textAr": "الخطوة الأولى للحل", "textEn": "Step 1 of solution", "noteAr": "ملاحظة توضيحية", "noteEn": "Explanation note" },
          { "stepNumber": 2, "textAr": "الخطوة الثانية", "textEn": "Step 2", "noteAr": "ملاحظة", "noteEn": "Note" }
        ],
        "takeawayAr": "الفائدة الذهبية المستخلصة من المثال",
        "takeawayEn": "Key takeaway from this example"
      },
      "formativeCheck": {
        "id": "fc-gen-${lectureNumber}-1",
        "questionAr": "سؤال تحقق فوري من فهم الفكرة؟",
        "questionEn": "Instant formative check question?",
        "optionsAr": ["الخيار أ", "الخيار ب (الصحيح)", "الخيار ج", "الخيار د"],
        "optionsEn": ["Option A", "Option B (Correct)", "Option C", "Option D"],
        "correctIndex": 1,
        "explanationAr": "تفسير تربوي علمي واضح لسبب صحة الخيار",
        "explanationEn": "Clear explanation of the correct choice",
        "hintAr": "تلميح استرشادي يساعد الطالب على التفكير",
        "hintEn": "Guiding hint for student reflection"
      },
      "tipsAr": ["نصيحة ذهبية لتجنب الأخطاء الشائعة"],
      "tipsEn": ["Pro tip to avoid common pitfalls"]
    }
  ],
  "conceptMapAr": [
    "الركيزة 1: القاعدة الأساسية وتطبيقها",
    "الركيزة 2: الشروط والخصائص الرياضية/العلمية",
    "الركيزة 3: خطوة التحقق والتأكد من صحة النتائج"
  ],
  "conceptMapEn": [
    "Pillar 1: Core rule & application",
    "Pillar 2: Conditions and mathematical properties",
    "Pillar 3: Verification & error checking"
  ],
  "textbookExercises": [
    {
      "id": "ex-gen-${lectureNumber}-1",
      "questionAr": "مسألة تدريبية من أنشطة الكتاب الوزاري المقرر:",
      "questionEn": "Official textbook practice problem:",
      "solutionStepsAr": ["الخطوة الأولى: تحديد المعطيات", "الخطوة الثانية: تطبيق القانون", "الخطوة الثالثة: الناتج النهائي"],
      "solutionStepsEn": ["Step 1: Identify given parameters", "Step 2: Apply formula", "Step 3: Final verified result"],
      "answerAr": "الناتج المعتمد النهائي",
      "answerEn": "Final confirmed answer"
    }
  ],
  "assessment": {
    "id": "quiz-gen-${lectureNumber}",
    "lectureId": "gen-${profile.subject.toLowerCase()}-${lectureNumber}",
    "titleAr": "الاختبار الإلزامي: تقييم إتقان المحاضرة",
    "titleEn": "Mandatory Assessment: Lecture Mastery",
    "passingScore": 80,
    "questions": [
      {
        "id": "q1",
        "textAr": "السؤال الأول (مستوى سهل إلى متوسط)",
        "textEn": "Question 1 in English",
        "optionsAr": ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
        "optionsEn": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "correctIndex": 0,
        "conceptTestedAr": "المفهوم المختبر",
        "conceptTestedEn": "Concept tested",
        "explanationAr": "توضيح الإجابة الصحيحة",
        "explanationEn": "Explanation of correct answer",
        "difficulty": "easy"
      },
      {
        "id": "q2",
        "textAr": "السؤال الثاني (مستوى متوسط إلى متقدم)",
        "textEn": "Question 2 in English",
        "optionsAr": ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
        "optionsEn": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "correctIndex": 1,
        "conceptTestedAr": "المفهوم المختبر",
        "conceptTestedEn": "Concept tested",
        "explanationAr": "توضيح الإجابة الصحيحة",
        "explanationEn": "Explanation of correct answer",
        "difficulty": "medium"
      },
      {
        "id": "q3",
        "textAr": "السؤال الثالث (مسألة تطبيقية)",
        "textEn": "Question 3 in English",
        "optionsAr": ["خيار 1", "خيار 2", "خيار 3", "خيار 4"],
        "optionsEn": ["Option 1", "Option 2", "Option 3", "Option 4"],
        "correctIndex": 2,
        "conceptTestedAr": "المفهوم المختبر",
        "conceptTestedEn": "Concept tested",
        "explanationAr": "توضيح الإجابة الصحيحة",
        "explanationEn": "Explanation of correct answer",
        "difficulty": "hard"
      }
    ]
  }
}`;

  const apiResult = await callGeminiApiWithFallback(activeKey, {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature: 0.35,
      maxOutputTokens: 5000,
      responseMimeType: 'application/json'
    }
  });

  if ('error' in apiResult) {
    let cleanMsg = apiResult.error;
    try {
      const parsed = JSON.parse(apiResult.error);
      if (parsed?.error?.message) {
        cleanMsg = parsed.error.message;
      }
    } catch { /* raw text */ }
    return { lecture: null, error: `Gemini API Error: ${cleanMsg}` };
  }

  const rawText = apiResult.text;

  try {

    const cleaned = rawText.replace(/^```json\s*/i, '').replace(/\s*```$/i, '').trim();
    const rawParsed = JSON.parse(cleaned);

    // Normalize and strictly guarantee all required schema fields
    const lecture: Lecture = {
      id: rawParsed.id || `gen-${profile.subject.toLowerCase()}-${lectureNumber}-${Date.now()}`,
      order: lectureNumber,
      titleAr: rawParsed.titleAr || `المحاضرة ${lectureNumber}: درس جديد`,
      titleEn: rawParsed.titleEn || `Lecture ${lectureNumber}: New Curriculum Topic`,
      subtitleAr: rawParsed.subtitleAr || rawParsed.titleAr || '',
      subtitleEn: rawParsed.subtitleEn || rawParsed.titleEn || '',
      durationMinutes: Number(rawParsed.durationMinutes) || 30,
      isLocked: lectureNumber > 1 ? (rawParsed.isLocked ?? true) : false,
      isCompleted: false,
      passingScoreRequired: 80,
      country: profile.country,
      ministryAr: cInfo.ministryAr,
      ministryEn: cInfo.ministryEn,
      gradeLevelNameAr: rawParsed.gradeLevelNameAr || `المرحلة التعليمية - ${profile.gradeLevel}`,
      gradeLevelNameEn: rawParsed.gradeLevelNameEn || `Grade ${profile.gradeLevel}`,
      termAr: cInfo.termDefaultAr,
      termEn: cInfo.termDefaultEn,
      unitTitleAr: rawParsed.unitTitleAr || unitTitle || 'الوحدة الدراسية المقررة',
      unitTitleEn: rawParsed.unitTitleEn || unitTitle || 'Curriculum Unit',
      lessonNumberAr: rawParsed.lessonNumberAr || `الدرس ${lectureNumber}`,
      lessonNumberEn: rawParsed.lessonNumberEn || `Lesson ${lectureNumber}`,
      warmupHookAr: rawParsed.warmupHookAr || '',
      warmupHookEn: rawParsed.warmupHookEn || '',
      learningOutcomesAr: rawParsed.learningOutcomesAr || rawParsed.learningObjectivesAr || [],
      learningOutcomesEn: rawParsed.learningOutcomesEn || rawParsed.learningObjectivesEn || [],
      vocabulary: Array.isArray(rawParsed.vocabulary) ? rawParsed.vocabulary : [],
      keyConceptsAr: Array.isArray(rawParsed.keyConceptsAr) ? rawParsed.keyConceptsAr : [],
      keyConceptsEn: Array.isArray(rawParsed.keyConceptsEn) ? rawParsed.keyConceptsEn : [],
      summaryAr: rawParsed.summaryAr || '',
      summaryEn: rawParsed.summaryEn || '',
      sections: Array.isArray(rawParsed.sections) ? rawParsed.sections : [],
      conceptMapAr: Array.isArray(rawParsed.conceptMapAr) ? rawParsed.conceptMapAr : [],
      conceptMapEn: Array.isArray(rawParsed.conceptMapEn) ? rawParsed.conceptMapEn : [],
      textbookExercises: Array.isArray(rawParsed.textbookExercises) ? rawParsed.textbookExercises : [],
      assessment: {
        id: rawParsed.assessment?.id || `quiz-gen-${lectureNumber}`,
        lectureId: rawParsed.id || `gen-${profile.subject.toLowerCase()}-${lectureNumber}`,
        titleAr: rawParsed.assessment?.titleAr || 'الاختبار الإلزامي: تقييم إتقان المحاضرة',
        titleEn: rawParsed.assessment?.titleEn || 'Mandatory Assessment: Lecture Mastery',
        passingScore: 80,
        questions: Array.isArray(rawParsed.assessment?.questions) ? rawParsed.assessment.questions.map((q: any, i: number) => ({
          id: q.id || `q-${i + 1}`,
          textAr: q.textAr || q.questionAr || '',
          textEn: q.textEn || q.questionEn || '',
          optionsAr: Array.isArray(q.optionsAr) ? q.optionsAr : [],
          optionsEn: Array.isArray(q.optionsEn) ? q.optionsEn : [],
          correctIndex: typeof q.correctIndex === 'number' ? q.correctIndex : 0,
          conceptTestedAr: q.conceptTestedAr || q.conceptAr || 'المفهوم الأساسي',
          conceptTestedEn: q.conceptTestedEn || q.conceptEn || 'Core Concept',
          explanationAr: q.explanationAr || '',
          explanationEn: q.explanationEn || '',
          difficulty: (['easy', 'medium', 'hard'].includes(q.difficulty?.toLowerCase()) ? q.difficulty.toLowerCase() : 'medium') as 'easy' | 'medium' | 'hard'
        })) : []
      }
    };

    return { lecture: ensureFourExamplesForLecture(lecture) };
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown generation error';
    return { lecture: null, error: message };
  }
}


