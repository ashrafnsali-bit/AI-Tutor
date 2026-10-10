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
  pageEnd?: number;
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

const sourceNoteAr =
  'مرجع أسماء الفصول والدروس وأرقام الصفحات: غلاف وفهرس كتاب الرياضيات للصف السادس الابتدائي، الجزء الأول من المقرر، طبعة 1448هـ/2026م، صفحات PDF 1 و6–7. جرى التحقق من الغلاف والفهرس فقط، ولم تراجع صفحات الدروس الداخلية. الشرح والأنشطة والرسوم والأسئلة هنا من إعداد المنصة وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Chapter and lesson titles and page references are based on the cover and contents of the Grade 6 Mathematics textbook, Part One, 1448 AH/2026 edition, PDF pages 1 and 6–7. Only the cover and contents were checked; lesson pages were not reviewed. Explanations, activities, diagrams, and questions here are original platform material, not copied from the textbook.';

const chapters: MathChapter[] = [
  {
    titleAr: 'الجبر: الأنماط العددية والدوال',
    titleEn: 'Algebra: Number Patterns and Functions',
    focusAr: 'استخدم الأنماط والجداول والعبارات لتمثيل العلاقات، ونفّذ العمليات بترتيبها، ثم تحقق من حلول المعادلات بالتعويض.',
    focusEn: 'Represent relationships with patterns, tables, and expressions; apply operation order; and check equation solutions by substitution.',
    activityAr: 'أنشئ نمطًا عدديًا من اختيارك، وسجّل حدوده في جدول، ثم اكتب قاعدة تصف العلاقة.',
    activityEn: 'Create a number pattern, record its terms in a table, and write a rule describing the relationship.',
    questionAr: 'ما الخطوة المناسبة للتحقق من حل معادلة؟',
    questionEn: 'What is an appropriate way to check a solution to an equation?',
    optionsAr: ['التعويض عن المتغير في المعادلة الأصلية', 'تغيير طرف واحد فقط', 'حذف المتغير دون إجراء العملية نفسها على الطرفين'],
    optionsEn: ['Substitute the value into the original equation', 'Change only one side', 'Remove the variable without applying the same operation to both sides'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 11 },
      { kind: 'lesson', titleAr: 'الخطوات الأربع لحل المسألة', titleEn: 'The Four Steps for Solving a Problem', page: 12 },
      { kind: 'lesson', titleAr: 'العوامل الأولية', titleEn: 'Prime Factors', page: 17 },
      { kind: 'lesson', titleAr: 'القوى والأسس', titleEn: 'Powers and Exponents', page: 22 },
      { kind: 'lesson', titleAr: 'ترتيب العمليات', titleEn: 'Order of Operations', page: 27 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 32 },
      { kind: 'lesson', titleAr: 'الجبر: المتغيرات والعبارات', titleEn: 'Algebra: Variables and Expressions', page: 33 },
      { kind: 'lesson', titleAr: 'الجبر: الدوال', titleEn: 'Algebra: Functions', page: 38 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: التخمين والتحقق', titleEn: 'Problem-Solving Plan: Guess and Check', page: 43 },
      { kind: 'lesson', titleAr: 'الجبر: المعادلات', titleEn: 'Algebra: Equations', page: 45 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 49 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (1)', titleEn: 'Cumulative Test (1)', page: 50, pageEnd: 51 },
    ],
  },
  {
    titleAr: 'الإحصاء والتمثيلات البيانية',
    titleEn: 'Statistics and Graphs',
    focusAr: 'نظّم البيانات في جداول، واختر تمثيلًا بيانيًا مناسبًا، ثم اقرأه واستنتج ما توضحه مقاييس المركز والمدى.',
    focusEn: 'Organize data in tables, choose a suitable graph, and interpret it using measures of center and range.',
    activityAr: 'اجمع بيانات بسيطة من الصف، وضعها في جدول تكراري، ثم اختر طريقة واضحة لعرضها.',
    activityEn: 'Collect a small set of classroom data, organize it in a frequency table, and choose a clear way to display it.',
    questionAr: 'أي مقياس يمثل مجموع القيم مقسومًا على عددها؟',
    questionEn: 'Which measure is the sum of the values divided by the number of values?',
    optionsAr: ['المتوسط الحسابي', 'المدى', 'المنوال'],
    optionsEn: ['Mean', 'Range', 'Mode'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 53 },
      { kind: 'lesson', titleAr: 'إنشاء جدول', titleEn: 'Making a Table', page: 54 },
      { kind: 'lesson', titleAr: 'التمثيل بالأعمدة وبالخطوط', titleEn: 'Bar Graphs and Line Graphs', page: 56 },
      { kind: 'extension', titleAr: 'توسع: التمثيل بالأعمدة وبالخطوط', titleEn: 'Extension: Bar Graphs and Line Graphs', page: 61 },
      { kind: 'lesson', titleAr: 'التمثيل بالنقاط', titleEn: 'Dot Plots', page: 63 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 69 },
      { kind: 'lesson', titleAr: 'المتوسط الحسابي', titleEn: 'Mean', page: 70 },
      { kind: 'lesson', titleAr: 'الوسيط والمنوال والمدى', titleEn: 'Median, Mode, and Range', page: 75 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 81 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (2)', titleEn: 'Cumulative Test (2)', page: 82, pageEnd: 83 },
    ],
  },
  {
    titleAr: 'العمليات على الكسور العشرية',
    titleEn: 'Operations with Decimals',
    focusAr: 'اعتمد القيمة المكانية في قراءة الكسور العشرية ومقارنتها، وقدّر الناتج قبل إجراء العمليات للتحقق من معقوليته.',
    focusEn: 'Use place value to read and compare decimals, and estimate results before calculating to check whether they are reasonable.',
    activityAr: 'اكتب عددًا عشريًا بطرائق تمثيل مختلفة، ثم قدّر ناتج عملية عليه قبل حساب الناتج بدقة.',
    activityEn: 'Represent a decimal in different ways, then estimate the result of an operation before calculating it precisely.',
    questionAr: 'ما فائدة تقدير الناتج قبل إجراء عملية على الكسور العشرية؟',
    questionEn: 'Why estimate before calculating with decimals?',
    optionsAr: ['للتحقق من معقولية الناتج', 'لإلغاء الحاجة إلى فهم القيمة المكانية', 'لتغيير ترتيب الأرقام'],
    optionsEn: ['To check whether the result is reasonable', 'To avoid understanding place value', 'To change the order of the digits'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 85 },
      { kind: 'lesson', titleAr: 'تمثيل الكسور العشرية', titleEn: 'Representing Decimals', page: 86 },
      { kind: 'lesson', titleAr: 'مقارنة الكسور العشرية وترتيبها', titleEn: 'Comparing and Ordering Decimals', page: 90 },
      { kind: 'lesson', titleAr: 'تقريب الكسور العشرية', titleEn: 'Rounding Decimals', page: 94 },
      { kind: 'lesson', titleAr: 'تقدير ناتج جمع الكسور العشرية وطرحها', titleEn: 'Estimating Decimal Sums and Differences', page: 98 },
      { kind: 'exploration', titleAr: 'استكشاف: جمع الكسور العشرية وطرحها باستعمال النماذج', titleEn: 'Explore: Adding and Subtracting Decimals with Models', page: 103 },
      { kind: 'lesson', titleAr: 'جمع الكسور العشرية وطرحها', titleEn: 'Adding and Subtracting Decimals', page: 104 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 109 },
      { kind: 'exploration', titleAr: 'استكشاف: ضرب الكسور العشرية في أعداد كلية', titleEn: 'Explore: Multiplying Decimals by Whole Numbers', page: 110 },
      { kind: 'lesson', titleAr: 'ضرب الكسور العشرية في أعداد كلية', titleEn: 'Multiplying Decimals by Whole Numbers', page: 111 },
      { kind: 'exploration', titleAr: 'استكشاف: ضرب الكسور العشرية', titleEn: 'Explore: Multiplying Decimals', page: 115 },
      { kind: 'lesson', titleAr: 'ضرب الكسور العشرية', titleEn: 'Multiplying Decimals', page: 117 },
      { kind: 'lesson', titleAr: 'قسمة الكسور العشرية على أعداد كلية', titleEn: 'Dividing Decimals by Whole Numbers', page: 121 },
      { kind: 'exploration', titleAr: 'استكشاف: القسمة على كسر عشري', titleEn: 'Explore: Dividing by a Decimal', page: 125 },
      { kind: 'lesson', titleAr: 'القسمة على كسر عشري', titleEn: 'Dividing by a Decimal', page: 127 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: التحقق من معقولية الإجابة', titleEn: 'Problem-Solving Plan: Checking Whether an Answer Is Reasonable', page: 133 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 135 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (3)', titleEn: 'Cumulative Test (3)', page: 136, pageEnd: 137 },
    ],
  },
  {
    titleAr: 'الكسور الاعتيادية والكسور العشرية',
    titleEn: 'Fractions and Decimals',
    focusAr: 'استخدم العوامل والمضاعفات المشتركة لتبسيط الكسور ومقارنتها، واربط بين صور الكسر الاعتيادي والكسر العشري.',
    focusEn: 'Use common factors and multiples to simplify and compare fractions, and connect fractional and decimal forms.',
    activityAr: 'مثّل كسرين بنموذجين متكافئين، ثم استخدمهما لتفسير المقارنة أو التحويل.',
    activityEn: 'Represent two fractions with equivalent models, then use the models to explain a comparison or conversion.',
    questionAr: 'كيف تساعد الكسور المتكافئة على مقارنة كسرين؟',
    questionEn: 'How do equivalent fractions help compare two fractions?',
    optionsAr: ['تحويلهما إلى مقام مشترك يسهل المقارنة', 'تغيير قيمة أحد الكسرين', 'مقارنة البسطين فقط دائمًا'],
    optionsEn: ['Rewrite them with a common denominator', 'Change the value of one fraction', 'Always compare only the numerators'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 139 },
      { kind: 'lesson', titleAr: 'القاسم المشترك الأكبر', titleEn: 'Greatest Common Factor', page: 140 },
      { kind: 'exploration', titleAr: 'استكشاف: الكسور المتكافئة', titleEn: 'Explore: Equivalent Fractions', page: 145 },
      { kind: 'lesson', titleAr: 'تبسيط الكسور الاعتيادية', titleEn: 'Simplifying Fractions', page: 147 },
      { kind: 'lesson', titleAr: 'الأعداد الكسرية والكسور غير الفعلية', titleEn: 'Mixed Numbers and Improper Fractions', page: 152 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: إنشاء قائمة منظمة', titleEn: 'Problem-Solving Plan: Making an Organized List', page: 156 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 158 },
      { kind: 'lesson', titleAr: 'المضاعف المشترك الأصغر', titleEn: 'Least Common Multiple', page: 159 },
      { kind: 'lesson', titleAr: 'مقارنة الكسور الاعتيادية وترتيبها', titleEn: 'Comparing and Ordering Fractions', page: 163 },
      { kind: 'lesson', titleAr: 'كتابة الكسور العشرية في صورة كسور اعتيادية', titleEn: 'Writing Decimals as Fractions', page: 168 },
      { kind: 'lesson', titleAr: 'كتابة الكسور الاعتيادية في صورة كسور عشرية', titleEn: 'Writing Fractions as Decimals', page: 172 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 177 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (4)', titleEn: 'Cumulative Test (4)', page: 178, pageEnd: 179 },
    ],
  },
  {
    titleAr: 'القياس: الطول والكتلة والسعة',
    titleEn: 'Measurement: Length, Mass, and Capacity',
    focusAr: 'اختر الوحدة المترية المناسبة للصفة المقاسة، واستخدم مرجعًا تقديريًا، ثم حوّل بين الوحدات للتحقق من القياس.',
    focusEn: 'Choose an appropriate metric unit, use a reference estimate, and convert between units to check a measurement.',
    activityAr: 'قدّر طول غرض أو كتلته أو سعته، ثم قسه بوحدة مترية مناسبة وقارن التقدير بالقياس.',
    activityEn: 'Estimate an object’s length, mass, or capacity, measure it with a suitable metric unit, and compare the estimate with the measurement.',
    questionAr: 'ما الأداة أو الوحدة الأنسب لقياس طول قلم؟',
    questionEn: 'Which unit is suitable for measuring the length of a pencil?',
    optionsAr: ['السنتيمتر', 'اللتر', 'الكيلوغرام'],
    optionsEn: ['Centimeter', 'Liter', 'Kilogram'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 181 },
      { kind: 'exploration', titleAr: 'استكشاف: النظام المتري', titleEn: 'Explore: The Metric System', page: 182 },
      { kind: 'lesson', titleAr: 'الطول في النظام المتري', titleEn: 'Length in the Metric System', page: 184 },
      { kind: 'lesson', titleAr: 'الكتلة والسعة في النظام المتري', titleEn: 'Mass and Capacity in the Metric System', page: 189 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 195 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: استعمال مقياس مرجعي', titleEn: 'Problem-Solving Skill: Using a Reference Measure', page: 196 },
      { kind: 'lesson', titleAr: 'التحويل بين الوحدات في النظام المتري', titleEn: 'Converting Metric Units', page: 198 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 203 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (5)', titleEn: 'Cumulative Test (5)', page: 204, pageEnd: 205 },
    ],
  },
];

const chapterNumbersAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس'];

const guidanceForKind = (
  kind: MathContentsKind,
  chapter: MathChapter,
  topic: MathContentsEntry
): { ar: string; en: string } => {
  if (kind === 'preparation') {
    return {
      ar: `تهيئة للفصل: استرجع ما تعرفه عن ${chapter.titleAr}، وسجّل سؤالًا تريد الإجابة عنه.`,
      en: `Chapter preparation: recall what you know about ${chapter.titleEn} and write one question you want to answer.`,
    };
  }
  if (kind === 'exploration') {
    return {
      ar: `استكشاف تمهيدي لموضوع «${topic.titleAr}»: جرّب نموذجًا أو مثالًا، وسجّل ما تلاحظه قبل تعميم القاعدة.`,
      en: `Preliminary exploration of “${topic.titleEn}”: try a model or example and record what you notice before generalizing a rule.`,
    };
  }
  if (kind === 'extension') {
    return {
      ar: `نشاط توسع في «${topic.titleAr}»: طبّق التمثيل البياني على مجموعة بيانات أخرى، ثم قارن ما تكشفه.`,
      en: `Extension activity for “${topic.titleEn}”: apply the graphing method to another data set and compare what it reveals.`,
    };
  }
  if (kind === 'midterm' || kind === 'chapterReview' || kind === 'cumulative') {
    const reviewText = kind === 'cumulative'
      ? 'استرجع المفاهيم المتراكمة، وبيّن خطوات الحل، ثم تحقق من معقولية الإجابات.'
      : 'راجع دروس الفصل، وحل مسائل متنوعة، وحدد خطوة تحتاج إلى مراجعة.';
    const reviewTextEn = kind === 'cumulative'
      ? 'Review the accumulated concepts, show your working, and check whether your answers are reasonable.'
      : 'Review the chapter lessons, solve varied problems, and identify any step that needs further practice.';
    return {
      ar: `${reviewText} هذا عنوان مراجعة في الفهرس وليس نص أسئلة الاختبار. مرجع الفهرس: ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.`,
      en: `${reviewTextEn} This is a contents heading, not the test questions. Contents reference: p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.`,
    };
  }
  return {
    ar: `${chapter.focusAr} في هذا الموضوع «${topic.titleAr}»، اكتب خطوات الحل واربط كل خطوة بتمثيل أو تقدير مناسب.`,
    en: `${chapter.focusEn} For “${topic.titleEn},” write out the solution steps and connect each step to a suitable representation or estimate.`,
  };
};

export const SAUDI_G6_PRIMARY_MATH_CURRICULUM: Lecture[] = chapters.map((chapter, index) => {
  const order = index + 1;
  const firstPage = chapter.topics[0].page;
  const chapterTitleAr = `الفصل ${chapterNumbersAr[index]}: ${chapter.titleAr}`;
  const chapterTitleEn = `Chapter ${order}: ${chapter.titleEn}`;
  const visualSteps = [
    { labelAr: chapter.titleAr, labelEn: chapter.titleEn },
    ...chapter.topics.slice(1, 4).map((topic) => ({
      labelAr: topic.titleAr,
      labelEn: topic.titleEn,
    })),
  ];

  return {
    id: `saudi-g6-primary-math-1448-${order}`,
    order,
    titleAr: chapterTitleAr,
    titleEn: chapterTitleEn,
    subtitleAr: `الرياضيات — الصف السادس — ص ${firstPage}`,
    subtitleEn: `Mathematics — Grade 6 — p. ${firstPage}`,
    descriptionAr: `${sourceNoteAr}\n\nالشرح والأنشطة مساندة ومعدة من المنصة؛ تُراجع تفاصيل الحل والأمثلة في الكتاب ومعلم المادة.`,
    descriptionEn: `${sourceNoteEn}\n\nExplanations and activities are supplementary original platform material; consult the textbook and teacher for worked examples and details.`,
    durationMinutes: 35,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G6',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب الرياضيات',
    ministryEn: 'Ministry of Education — Mathematics textbook',
    gradeLevelNameAr: 'الصف السادس الابتدائي — الرياضيات',
    gradeLevelNameEn: 'Grade 6 — Mathematics',
    termAr: 'الجزء الأول من المقرر — طبعة 1448هـ/2026م',
    termEn: 'Part One — 1448 AH/2026 edition',
    unitTitleAr: chapterTitleAr,
    unitTitleEn: chapterTitleEn,
    lessonNumberAr: `${chapterTitleAr} (ص ${firstPage})`,
    lessonNumberEn: `${chapterTitleEn} (p. ${firstPage})`,
    warmupHookAr: `تأمل موقفًا يوميًا يرتبط بـ${chapter.titleAr}: ما المعلومات التي تعرفها، وكيف تمثلها رياضيًا؟`,
    warmupHookEn: `Think of a daily situation related to ${chapter.titleEn}: what information do you know, and how could you represent it mathematically?`,
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
    keyConceptsAr: chapter.topics.map((topic) =>
      `${topic.titleAr} (ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ),
    keyConceptsEn: chapter.topics.map((topic) =>
      `${topic.titleEn} (p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ),
    summaryAr: `${chapter.topics.map((topic) =>
      `${topic.titleAr} (ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ).join('\n')}\n\n${sourceNoteAr}`,
    summaryEn: `${chapter.topics.map((topic) =>
      `${topic.titleEn} (p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ).join('\n')}\n\n${sourceNoteEn}`,
    sections: chapter.topics.map((topic, topicIndex) => {
      const guidance = guidanceForKind(topic.kind, chapter, topic);
      return {
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${guidance.ar}\n\nمرجع الفهرس: ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.\n\n${sourceNoteAr}`,
        contentEn: `${guidance.en}\n\nContents reference: p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.\n\n${sourceNoteEn}`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g6-primary-math-diagram-${order}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${chapter.titleAr}`,
            titleEn: `Original learning diagram: ${chapter.titleEn}`,
            captionAr: 'رسم توضيحي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created learning diagram, not an image from the textbook.',
            diagramType: 'primary_math_unit' as const,
            visualSteps,
          },
        } : {}),
      };
    }),
    assessment: {
      id: `saudi-g6-primary-math-assessment-${order}`,
      lectureId: `saudi-g6-primary-math-1448-${order}`,
      titleAr: `تقويم الفصل: ${chapter.titleAr}`,
      titleEn: `Chapter check: ${chapter.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g6-primary-math-question-${order}`,
        textAr: chapter.questionAr,
        textEn: chapter.questionEn,
        optionsAr: [...chapter.optionsAr],
        optionsEn: [...chapter.optionsEn],
        correctIndex: 0,
        conceptTestedAr: chapter.titleAr,
        conceptTestedEn: chapter.titleEn,
        explanationAr: 'تقويم المنصة أصلي ومساند، ولا يمثل أسئلة الاختبار الواردة في الكتاب.',
        explanationEn: 'This original platform check is supplementary and does not reproduce the textbook test questions.',
        difficulty: 'easy',
      }],
    },
  };
});
