import type { Lecture } from '../types';

type MathContentsKind =
  | 'preparation'
  | 'exploration'
  | 'lesson'
  | 'extension'
  | 'midterm'
  | 'chapterReview'
  | 'cumulative';

interface MathContentsEntry {
  kind: MathContentsKind;
  titleAr: string;
  titleEn: string;
  page: number;
}

interface MathChapter {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  activityAr: string;
  activityEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
  topics: MathContentsEntry[];
}

export const SAUDI_G3_PRIMARY_MATH_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-math-part1.pdf';

const sourceNoteAr =
  `المصدر: كتاب الرياضيات للصف الثالث الابتدائي، الجزء الأول من المقرر. رابط مورد عين: ${SAUDI_G3_PRIMARY_MATH_TEXTBOOK_URL}. يذكر الغلاف (PDF ص 1) طبعة 1448هـ/2026م، بينما تذكر بيانات النشر الداخلية (PDF ص 2) عام 1446هـ؛ وقد أُظهر اختلاف التاريخين. طوبقت الفصول الخمسة وجميع عناوين الدروس وأرقام صفحاتها مع فهرسي الكتاب (PDF ص 6–7). روجعت مطالع الفصول المطبوعة ص 10 و52 و80 و110 و142، ولم تراجع جميع صفحات الدروس. الشرح والأنشطة والرسوم والأسئلة من إعداد المنصة وليست منقولة من الكتاب المدرسي.`;
const sourceNoteEn =
  `Source: Grade 3 Mathematics textbook, Part One of the curriculum. IEN resource: ${SAUDI_G3_PRIMARY_MATH_TEXTBOOK_URL}. The cover (PDF p. 1) states 1448 AH/2026 CE, while the internal publication record (PDF p. 2) states 1446 AH; this discrepancy is disclosed. All five chapters, lesson titles, and page numbers were checked against the two contents pages (PDF pp. 6–7). Chapter openings on printed pp. 10, 52, 80, 110, and 142 were reviewed; not all lesson pages were reviewed. Explanations, activities, diagrams, and questions are original platform material, not copied from the textbook.`;

const chapters: MathChapter[] = [
  {
    titleAr: 'القيمة المنزلية',
    titleEn: 'Place Value',
    focusAr: 'اكتشف الأنماط العددية، واقرأ الأعداد ضمن عشرات الألوف واكتبها، وحدد قيمة أرقامها، ثم قارن الأعداد ورتبها وقربها.',
    focusEn: 'Explore number patterns, read and write numbers through the ten-thousands, identify digit values, then compare, order, and round numbers.',
    activityAr: 'كوّن أعدادًا من بطاقات أرقام، ومثلها في جدول القيمة المنزلية، ثم قارن عددين وقرب أحدهما إلى منزلة تختارها.',
    activityEn: 'Build numbers from digit cards, show them in a place-value chart, compare two numbers, and round one to a chosen place.',
    questionAr: 'ما قيمة الرقم ٦ في العدد ٣٦٢١٤؟',
    questionEn: 'What is the value of 6 in 36,214?',
    optionsAr: ['٦٠٠٠', '٦٠٠', '٦٠'],
    optionsEn: ['6,000', '600', '60'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 12 },
      { kind: 'lesson', titleAr: 'الجبر: الأنماط العددية', titleEn: 'Algebra: Number Patterns', page: 13 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: استعمال الخطوات الأربع', titleEn: 'Problem-Solving Skill: Use the Four Steps', page: 16 },
      { kind: 'exploration', titleAr: 'استكشف القيمة المنزلية', titleEn: 'Explore Place Value', page: 18 },
      { kind: 'lesson', titleAr: 'القيمة المنزلية ضمن الألوف', titleEn: 'Place Value Through the Thousands', page: 20 },
      { kind: 'lesson', titleAr: 'القيمة المنزلية ضمن عشرات الألوف', titleEn: 'Place Value Through the Ten-Thousands', page: 24 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 28 },
      { kind: 'lesson', titleAr: 'مقارنة الأعداد', titleEn: 'Comparing Numbers', page: 29 },
      { kind: 'lesson', titleAr: 'ترتيب الأعداد', titleEn: 'Ordering Numbers', page: 33 },
      { kind: 'lesson', titleAr: 'التقريب إلى أقرب عشرة وإلى أقرب مئة', titleEn: 'Rounding to the Nearest Ten and Hundred', page: 37 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 40 },
      { kind: 'lesson', titleAr: 'التقريب إلى أقرب ألف', titleEn: 'Rounding to the Nearest Thousand', page: 41 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 45 },
      { kind: 'cumulative', titleAr: 'اختبار تراكمي (1)', titleEn: 'Cumulative Test (1)', page: 46 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 48 },
    ],
  },
  {
    titleAr: 'الجمع',
    titleEn: 'Addition',
    focusAr: 'استعمل خصائص الجمع والتقدير، واجمع أعدادًا من رقمين وثلاثة أرقام مع إعادة التجميع عند الحاجة.',
    focusEn: 'Use addition properties and estimation, and add two- and three-digit numbers, regrouping when needed.',
    activityAr: 'مثل عددين بقطع القيمة المنزلية، ثم اجمعهما واشرح متى تحتاج إلى إعادة التجميع.',
    activityEn: 'Represent two numbers with place-value pieces, add them, and explain when regrouping is needed.',
    questionAr: 'ما ناتج ٣٤٧ + ٢٨٦؟',
    questionEn: 'What is 347 + 286?',
    optionsAr: ['٦٣٣', '٦٢٣', '٦٤٣'],
    optionsEn: ['633', '623', '643'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 52 },
      { kind: 'lesson', titleAr: 'الجبر: خصائص الجمع', titleEn: 'Algebra: Addition Properties', page: 53 },
      { kind: 'lesson', titleAr: 'تقدير نواتج الجمع', titleEn: 'Estimating Sums', page: 56 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: الجواب الدقيق أم التقديري', titleEn: 'Problem-Solving Skill: Exact or Estimated Answer', page: 60 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 62 },
      { kind: 'lesson', titleAr: 'جمع الأعداد المكونة من رقمين', titleEn: 'Adding Two-Digit Numbers', page: 63 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: استعمال الخطوات الأربع', titleEn: 'Problem-Solving Skill: Use the Four Steps', page: 66 },
      { kind: 'exploration', titleAr: 'استكشف جمع الأعداد المكونة من ثلاثة أرقام', titleEn: 'Explore Adding Three-Digit Numbers', page: 68 },
      { kind: 'lesson', titleAr: 'جمع الأعداد المكونة من ثلاثة أرقام', titleEn: 'Adding Three-Digit Numbers', page: 70 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 75 },
      { kind: 'cumulative', titleAr: 'اختبار تراكمي (2)', titleEn: 'Cumulative Test (2)', page: 76 },
    ],
  },
  {
    titleAr: 'الطرح',
    titleEn: 'Subtraction',
    focusAr: 'قدر نواتج الطرح، واطرح أعدادًا من رقمين أو ثلاثة أرقام، وتدرب على إعادة التجميع والطرح مع وجود الأصفار.',
    focusEn: 'Estimate differences, subtract two- and three-digit numbers, and practise regrouping and subtraction with zeros.',
    activityAr: 'استخدم لوحة المئات لتمثيل عملية طرح، ثم قدر الناتج وتحقق منه بالجمع.',
    activityEn: 'Use a hundreds chart to model a subtraction, estimate the difference, and check it with addition.',
    questionAr: 'ما ناتج ٥٠٣ − ١٧٨؟',
    questionEn: 'What is 503 − 178?',
    optionsAr: ['٣٢٥', '٣٣٥', '٤٢٥'],
    optionsEn: ['325', '335', '425'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 80 },
      { kind: 'lesson', titleAr: 'طرح الأعداد المكونة من رقمين', titleEn: 'Subtracting Two-Digit Numbers', page: 81 },
      { kind: 'lesson', titleAr: 'تقدير نواتج الطرح', titleEn: 'Estimating Differences', page: 84 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: معقولية الجواب', titleEn: 'Problem-Solving Skill: Reasonableness of an Answer', page: 88 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 90 },
      { kind: 'exploration', titleAr: 'استكشف طرح الأعداد المكونة من ثلاثة أرقام، مع إعادة التجميع', titleEn: 'Explore Subtracting Three-Digit Numbers with Regrouping', page: 91 },
      { kind: 'lesson', titleAr: 'طرح الأعداد المكونة من ثلاثة أرقام، مع إعادة التجميع', titleEn: 'Subtracting Three-Digit Numbers with Regrouping', page: 93 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 97 },
      { kind: 'lesson', titleAr: 'الطرح مع وجود الأصفار', titleEn: 'Subtraction with Zeros', page: 98 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 103 },
      { kind: 'cumulative', titleAr: 'اختبار تراكمي (3)', titleEn: 'Cumulative Test (3)', page: 104 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 106 },
    ],
  },
  {
    titleAr: 'الضرب (1)',
    titleEn: 'Multiplication (1)',
    focusAr: 'افهم الضرب بوصفه جمعًا متكررًا، واستعمل الشبكات لتمثيله، وتدرب على حقائق الضرب في ٢ و٤ و٥ و١٠.',
    focusEn: 'Understand multiplication as repeated addition, represent it with arrays, and practise the 2, 4, 5, and 10 facts.',
    activityAr: 'رتب أشياء صفية في صفوف متساوية، واكتب جملة جمع متكرر وجملة ضرب تصف الترتيب.',
    activityEn: 'Arrange classroom objects in equal rows, then write a repeated-addition sentence and a multiplication sentence for the array.',
    questionAr: 'ما ناتج ٤ × ٦؟',
    questionEn: 'What is 4 × 6?',
    optionsAr: ['٢٤', '٢٠', '١٠'],
    optionsEn: ['24', '20', '10'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 110 },
      { kind: 'exploration', titleAr: 'استكشف معنى الضرب', titleEn: 'Explore the Meaning of Multiplication', page: 111 },
      { kind: 'lesson', titleAr: 'الشبكات وعملية الضرب', titleEn: 'Arrays and Multiplication', page: 113 },
      { kind: 'lesson', titleAr: 'الضرب في ٢', titleEn: 'Multiplying by 2', page: 116 },
      { kind: 'lesson', titleAr: 'الضرب في ٤', titleEn: 'Multiplying by 4', page: 119 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: تحديد المعطيات الزائدة والناقصة', titleEn: 'Problem-Solving Skill: Identify Extra or Missing Information', page: 122 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 124 },
      { kind: 'lesson', titleAr: 'الضرب في ٥', titleEn: 'Multiplying by 5', page: 125 },
      { kind: 'lesson', titleAr: 'الضرب في ١٠', titleEn: 'Multiplying by 10', page: 128 },
      { kind: 'exploration', titleAr: 'استقصاء حل المسألة', titleEn: 'Problem-Solving Investigation', page: 131 },
      { kind: 'lesson', titleAr: 'الضرب في الصفر وفي الواحد', titleEn: 'Multiplying by Zero and One', page: 133 },
      { kind: 'extension', titleAr: 'تدريبات على حقائق الضرب', titleEn: 'Multiplication Facts Practice', page: 136 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 137 },
      { kind: 'cumulative', titleAr: 'اختبار تراكمي (4)', titleEn: 'Cumulative Test (4)', page: 138 },
    ],
  },
  {
    titleAr: 'الضرب (2)',
    titleEn: 'Multiplication (2)',
    focusAr: 'استكمل تعلم حقائق الضرب في ٣ و٦ و٧ و٨ و٩، وتعرف الخاصية التجميعية للضرب.',
    focusEn: 'Continue learning the 3, 6, 7, 8, and 9 multiplication facts, and explore the associative property of multiplication.',
    activityAr: 'أنشئ بطاقات لحقائق الضرب، وصنفها إلى حقائق تعرفها وأخرى تريد التدرب عليها، ثم تحقق باستعمال الشبكات أو الجمع المتكرر.',
    activityEn: 'Make multiplication-fact cards, sort them into facts you know and want to practise, then check with arrays or repeated addition.',
    questionAr: 'ما ناتج ٧ × ٨؟',
    questionEn: 'What is 7 × 8?',
    optionsAr: ['٥٦', '٤٨', '٥٤'],
    optionsEn: ['56', '48', '54'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 142 },
      { kind: 'exploration', titleAr: 'استكشف جداول الضرب', titleEn: 'Explore Multiplication Tables', page: 143 },
      { kind: 'lesson', titleAr: 'الضرب في ٣', titleEn: 'Multiplying by 3', page: 145 },
      { kind: 'lesson', titleAr: 'الضرب في ٦', titleEn: 'Multiplying by 6', page: 147 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 151 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: البحث عن نمط', titleEn: 'Problem-Solving Plan: Look for a Pattern', page: 152 },
      { kind: 'lesson', titleAr: 'الضرب في ٧', titleEn: 'Multiplying by 7', page: 154 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 157 },
      { kind: 'lesson', titleAr: 'الضرب في ٨', titleEn: 'Multiplying by 8', page: 158 },
      { kind: 'lesson', titleAr: 'الضرب في ٩', titleEn: 'Multiplying by 9', page: 161 },
      { kind: 'lesson', titleAr: 'الجبر: الخاصية التجميعية للضرب', titleEn: 'Algebra: Associative Property of Multiplication', page: 164 },
      { kind: 'extension', titleAr: 'تدريبات على حقائق الضرب', titleEn: 'Multiplication Facts Practice', page: 168 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 169 },
      { kind: 'cumulative', titleAr: 'اختبار تراكمي (5)', titleEn: 'Cumulative Test (5)', page: 170 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 172 },
    ],
  },
];

const chapterNumbersAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس'] as const;

const guidanceForKind = (
  chapter: MathChapter,
  topic: MathContentsEntry
): { ar: string; en: string } => {
  if (topic.kind === 'preparation') {
    return {
      ar: `تهيئة أصلية من المنصة لفصل «${chapter.titleAr}»: استرجع فكرة رياضية مرتبطة به، واشرح كيف تساعدك في التعلم.`,
      en: `Original platform preparation for “${chapter.titleEn}”: recall a related mathematical idea and explain how it supports your learning.`,
    };
  }
  if (topic.kind === 'exploration') {
    return {
      ar: `نشاط استكشافي أصلي حول «${topic.titleAr}»: جرب نموذجًا أو مثالًا، وسجل ما تلاحظه قبل تعميم القاعدة.`,
      en: `Original platform exploration for “${topic.titleEn}”: try a model or example and record observations before generalizing a rule.`,
    };
  }
  if (topic.kind === 'extension') {
    return {
      ar: `نشاط تفاعلي مساند حول «${topic.titleAr}»: حل مسألة قصيرة باستخدام فكرة الفصل، ثم تحقق من الناتج.`,
      en: `A supplementary interactive activity for “${topic.titleEn}”: solve a short problem using the chapter idea, then check the result.`,
    };
  }
  if (topic.kind === 'midterm' || topic.kind === 'chapterReview' || topic.kind === 'cumulative') {
    return {
      ar: `تقويم ومراجعة من إعداد المنصة لفصل «${chapter.titleAr}». هذا عنوان في الفهرس وليس نص أسئلة الاختبار. مرجع الفهرس: ص ${topic.page}.`,
      en: `An original platform review for “${chapter.titleEn}.” This is a contents heading, not the test questions. Contents reference: p. ${topic.page}.`,
    };
  }
  return {
    ar: `${chapter.focusAr} في موضوع «${topic.titleAr}»، اكتب خطوات الحل واربطها بتمثيل أو تقدير مناسب.`,
    en: `${chapter.focusEn} For “${topic.titleEn},” show the solution steps and connect them to a suitable representation or estimate.`,
  };
};

export const SAUDI_G3_PRIMARY_MATH_UNIT_COUNT = chapters.length;
export const SAUDI_G3_PRIMARY_MATH_TOPIC_COUNT = chapters.reduce(
  (count, chapter) => count + chapter.topics.length,
  0
);
export const SAUDI_G3_PRIMARY_MATH_TABLE_OF_CONTENTS = chapters.flatMap((chapter, chapterIndex) =>
  chapter.topics.map((topic) => ({
    unitNumber: chapterIndex + 1,
    unitTitleAr: chapter.titleAr,
    titleAr: topic.titleAr,
    titleEn: topic.titleEn,
    kind: topic.kind,
    page: topic.page,
  }))
);

export const SAUDI_G3_PRIMARY_MATH_CURRICULUM: Lecture[] = chapters.map((chapter, chapterIndex) => {
  const order = chapterIndex + 1;
  const chapterTitleAr = `الفصل ${chapterNumbersAr[chapterIndex]}: ${chapter.titleAr}`;
  const chapterTitleEn = `Chapter ${order}: ${chapter.titleEn}`;
  const visualSteps = chapter.topics.slice(0, 4).map((topic) => ({
    labelAr: topic.titleAr,
    labelEn: topic.titleEn,
  }));
  const lectureId = `saudi-g3-primary-math-1448-${order}`;

  return {
    id: lectureId,
    order,
    titleAr: chapterTitleAr,
    titleEn: chapterTitleEn,
    subtitleAr: `الرياضيات — الصف الثالث — ص ${chapter.topics[0].page}`,
    subtitleEn: `Mathematics — Grade 3 — p. ${chapter.topics[0].page}`,
    descriptionAr: `${sourceNoteAr}\n\nالشرح والأنشطة مساندة ومعدة من المنصة؛ تُراجع تفاصيل الحل والأمثلة في الكتاب ومعلم المادة.`,
    descriptionEn: `${sourceNoteEn}\n\nExplanations and activities are original supplementary platform material; consult the textbook and teacher for worked examples and details.`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب الرياضيات',
    ministryEn: 'Ministry of Education — Mathematics textbook',
    gradeLevelNameAr: 'الصف الثالث الابتدائي — الرياضيات',
    gradeLevelNameEn: 'Grade 3 — Mathematics',
    termAr: 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Part One — 1448 AH/2026 cover edition',
    unitTitleAr: chapterTitleAr,
    unitTitleEn: chapterTitleEn,
    lessonNumberAr: `${chapterTitleAr} (ص ${chapter.topics[0].page})`,
    lessonNumberEn: `${chapterTitleEn} (p. ${chapter.topics[0].page})`,
    warmupHookAr: `ما المعلومات التي تعرفها عن ${chapter.titleAr}، وكيف تمثلها رياضيًا؟`,
    warmupHookEn: `What do you know about ${chapter.titleEn}, and how could you represent it mathematically?`,
    learningOutcomesAr: [
      `يتعرف موضوعات الفصل المثبتة في الفهرس: ${chapter.topics.map((topic) => topic.titleAr).join('؛ ')}.`,
      chapter.focusAr,
      'يكتب خطوات الحل، ويستخدم التقدير أو التمثيل للتحقق من معقولية النتيجة.',
    ],
    learningOutcomesEn: [
      `Identify the chapter topics verified in the contents: ${chapter.topics.map((topic) => topic.titleEn).join('; ')}.`,
      chapter.focusEn,
      'Show solution steps and use estimation or a representation to check whether a result is reasonable.',
    ],
    keyConceptsAr: chapter.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`),
    keyConceptsEn: chapter.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`),
    summaryAr: `${chapter.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`).join('\n')}\n\n${sourceNoteAr}`,
    summaryEn: `${chapter.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`).join('\n')}\n\n${sourceNoteEn}`,
    sections: chapter.topics.map((topic, topicIndex) => {
      const guidance = guidanceForKind(chapter, topic);
      return {
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${guidance.ar}\n\nمرجع الفهرس: ص ${topic.page}.\n\n${sourceNoteAr}`,
        contentEn: `${guidance.en}\n\nContents reference: p. ${topic.page}.\n\n${sourceNoteEn}`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g3-primary-math-diagram-${order}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${chapter.titleAr}`,
            titleEn: `Original learning diagram: ${chapter.titleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created learning diagram, not an image from the textbook.',
            diagramType: 'primary_math_g3_unit' as const,
            visualSteps,
          },
        } : {}),
      };
    }),
    assessment: {
      id: `saudi-g3-primary-math-assessment-${order}`,
      lectureId,
      titleAr: `تقويم الفصل: ${chapter.titleAr}`,
      titleEn: `Chapter check: ${chapter.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g3-primary-math-question-${order}`,
        textAr: chapter.questionAr,
        textEn: chapter.questionEn,
        optionsAr: [...chapter.optionsAr],
        optionsEn: [...chapter.optionsEn],
        correctIndex: 0,
        explanationAr: 'تقويم المنصة أصلي ومساند، ولا يمثل أسئلة الاختبار الواردة في الكتاب.',
        explanationEn: 'This original platform check is supplementary and does not reproduce textbook test questions.',
        conceptTestedAr: chapter.titleAr,
        conceptTestedEn: chapter.titleEn,
        difficulty: 'easy',
      }],
    },
  };
});
