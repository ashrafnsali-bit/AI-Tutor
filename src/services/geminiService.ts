import type { ChatMessage, Lecture, Question, StudentProfile } from '../types';

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

  const lectureTitle = isEn ? lecture.titleEn : lecture.titleAr;
  const keyConcepts = isEn ? lecture.keyConceptsEn.join(', ') : lecture.keyConceptsAr.join('، ');

  const systemInstruction = isEn
    ? `
You are the certified AI Socratic Tutor assigned to student: ${profile.name}.
Grade: ${profile.gradeLevel} - Specialization: ${profile.specialization} - Subject: ${profile.subject}.
Active Lecture being studied: "${lectureTitle}".
Key Concepts: ${keyConcepts}.

Strict Pedagogical Directives:
1. NEVER PROVIDE DIRECT ANSWERS OR RAW FINAL VALUES to exercises, homework, or equations!
2. Follow the Socratic Method: ask ONE guiding micro-question or provide ONE targeted conceptual hint per turn.
3. Strictly confine discussions to this active lecture. If student asks off-topic or out-of-specialization questions, gently guide them back: "Let's first master the concepts in ${lectureTitle} so you can pass the mandatory assessment!".
4. Keep explanations concise, encouraging, and clear (max 3 short paragraphs).
5. Always converse in English.
    `.trim()
    : `
أنت "المعلم الذكي" (AI Socratic Tutor) المعتمد والمخصص لمساعدة الطالب: ${profile.name}.
المرحلة الدراسية: ${profile.gradeLevel} - التخصص: ${profile.specialization} - المادة: ${profile.subject}.
المحاضرة الحالية التي يدرسها الطالب الآن: "${lectureTitle}".
المفاهيم الأساسية للمحاضرة: ${keyConcepts}.

القواعد التربوية الإلزامية الصارمة:
1. ممنوع منعاً باتاً إعطاء الحلول المباشرة أو الأرقام النهائية للمسائل والواجبات!
2. اتبع المنهج السقراطي: اسأل الطالب سؤالاً استرشادياً صغيراً واحداً في كل رد يقوده للتفكير.
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
