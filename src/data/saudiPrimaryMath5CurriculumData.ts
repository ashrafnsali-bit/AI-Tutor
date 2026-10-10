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

export const SAUDI_G5_PRIMARY_MATH_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-math.pdf';

const sourceNoteAr =
  'مرجع أسماء الفصول والدروس وأرقام الصفحات: غلاف وفهرس كتاب الرياضيات للصف الخامس الابتدائي، الجزء الأول من المقرر، طبعة 1448هـ/2026م، صفحات PDF 1 و2 و6–7. جرى التحقق من الغلاف والفهرس فقط، ولم تراجع صفحات الدروس الداخلية. يذكر الغلاف طبعة 1448هـ/2026م بينما يذكر سجل النشر الداخلي 1446هـ؛ وقد أُظهر الاختلاف. الشرح والأنشطة والرسوم والأسئلة هنا من إعداد المنصة وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Chapter and lesson titles and page references are based on the cover and contents of the Grade 5 Mathematics textbook, Part One, 1448 AH/2026 edition, PDF pages 1, 2, and 6–7. Only the cover and contents were checked; lesson pages were not reviewed. The cover states 1448 AH/2026, while the internal publication record states 1446 AH; this discrepancy is disclosed. Explanations, activities, diagrams, and questions here are original platform material, not copied from the textbook.';

const chapters: MathChapter[] = [
  {
    titleAr: 'القيمة المنزلية',
    titleEn: 'Place Value',
    focusAr: 'اقرأ الأعداد الكبيرة والكسور العشرية باستخدام القيمة المنزلية، وقارنها ورتبها، وفسر قيمة الرقم بحسب موضعه.',
    focusEn: 'Read large numbers and decimals using place value, compare and order them, and interpret each digit by its position.',
    activityAr: 'كوّن عددًا من بطاقات أرقام، ثم مثّله في جدول القيمة المنزلية واكتب صورته التحليلية.',
    activityEn: 'Build a number from digit cards, represent it in a place-value chart, and write its expanded form.',
    questionAr: 'ما قيمة الرقم 7 في العدد 3,742,000,000؟',
    questionEn: 'What is the value of 7 in 3,742,000,000?',
    optionsAr: ['700,000,000', '70,000,000', '7,000,000'],
    optionsEn: ['700,000,000', '70,000,000', '7,000,000'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 12 },
      { kind: 'lesson', titleAr: 'القيمة المنزلية ضمن البلايين', titleEn: 'Place Value Through the Billions', page: 13 },
      { kind: 'lesson', titleAr: 'المقارنة بين الأعداد', titleEn: 'Comparing Numbers', page: 16 },
      { kind: 'exploration', titleAr: 'استكشاف: الكسور الاعتيادية والكسور العشرية', titleEn: 'Explore: Fractions and Decimals', page: 20 },
      { kind: 'lesson', titleAr: 'تمثيل الكسور العشرية', titleEn: 'Representing Decimals', page: 22 },
      { kind: 'lesson', titleAr: 'القيمة المنزلية ضمن أجزاء الألف', titleEn: 'Place Value Through Thousandths', page: 25 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 29 },
      { kind: 'lesson', titleAr: 'مقارنة الكسور العشرية', titleEn: 'Comparing Decimals', page: 30 },
      { kind: 'lesson', titleAr: 'ترتيب الأعداد والكسور العشرية', titleEn: 'Ordering Numbers and Decimals', page: 33 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: التخمين والتحقق', titleEn: 'Problem-Solving Plan: Guess and Check', page: 38 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 40 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 41 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (1)', titleEn: 'Cumulative Test (1)', page: 42 },
    ],
  },
  {
    titleAr: 'الجمع والطرح',
    titleEn: 'Addition and Subtraction',
    focusAr: 'قدّر نواتج جمع الأعداد والكسور العشرية وطرحها قبل الحساب، واستعمل القيمة المنزلية وخصائص الجمع للتحقق من النتائج.',
    focusEn: 'Estimate sums and differences of whole numbers and decimals before calculating, and use place value and addition properties to check results.',
    activityAr: 'قدّر مجموع قيمتين عشريتين، ثم اجمعهما بمحاذاة الفواصل العشرية وقارن الناتج بتقديرك.',
    activityEn: 'Estimate the sum of two decimals, add them by aligning decimal points, and compare the result with your estimate.',
    questionAr: 'ما الإجراء الذي يساعد على جمع عددين عشريين بدقة؟',
    questionEn: 'What helps add two decimals accurately?',
    optionsAr: ['محاذاة الفواصل العشرية', 'محاذاة الأرقام من جهة اليمين دون اعتبار المنازل', 'حذف الأصفار اللازمة قبل الجمع'],
    optionsEn: ['Align the decimal points', 'Align digits only from the right without regard to place value', 'Remove required placeholder zeros before adding'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 46 },
      { kind: 'lesson', titleAr: 'تقريب الأعداد والكسور العشرية', titleEn: 'Rounding Whole Numbers and Decimals', page: 47 },
      { kind: 'lesson', titleAr: 'تقدير نواتج الجمع والطرح', titleEn: 'Estimating Sums and Differences', page: 50 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: الحل عكسياً', titleEn: 'Problem-Solving Plan: Work Backward', page: 54 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 56 },
      { kind: 'exploration', titleAr: 'استكشاف: جمع الكسور العشرية وطرحها', titleEn: 'Explore: Adding and Subtracting Decimals', page: 57 },
      { kind: 'lesson', titleAr: 'جمع الكسور العشرية وطرحها', titleEn: 'Adding and Subtracting Decimals', page: 59 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 63 },
      { kind: 'lesson', titleAr: 'خصائص الجمع', titleEn: 'Properties of Addition', page: 64 },
      { kind: 'lesson', titleAr: 'الجمع والطرح ذهنياً', titleEn: 'Mental Addition and Subtraction', page: 67 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 71 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (2)', titleEn: 'Cumulative Test (2)', page: 72 },
    ],
  },
  {
    titleAr: 'الضرب',
    titleEn: 'Multiplication',
    focusAr: 'استخدم الأنماط وخصائص الضرب لتقدير النواتج وإيجادها، ونظّم خطوات الضرب في الأعداد متعددة الأرقام.',
    focusEn: 'Use patterns and multiplication properties to estimate and calculate products, and organize steps for multiplying multi-digit numbers.',
    activityAr: 'مثّل عملية ضرب بمصفوفة أو نموذج مساحة، ثم اكتب جملة عددية تشرح طريقة الحل.',
    activityEn: 'Represent a multiplication with an array or area model, then write a number sentence explaining the method.',
    questionAr: 'كيف يمكن تقدير ناتج الضرب قبل حسابه؟',
    questionEn: 'How can a product be estimated before calculating it?',
    optionsAr: ['تقريب العوامل إلى قيم مناسبة ثم ضربها', 'جمع العاملين دائماً', 'تغيير قيمة أحد العاملين دون تقدير'],
    optionsEn: ['Round factors to suitable values and multiply them', 'Always add the factors', 'Change a factor without estimating'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 76 },
      { kind: 'lesson', titleAr: 'أنماط الضرب', titleEn: 'Multiplication Patterns', page: 77 },
      { kind: 'exploration', titleAr: 'استكشاف: الضرب الذهني', titleEn: 'Explore: Mental Multiplication', page: 80 },
      { kind: 'lesson', titleAr: 'خاصية التوزيع', titleEn: 'The Distributive Property', page: 82 },
      { kind: 'lesson', titleAr: 'تقدير نواتج الضرب', titleEn: 'Estimating Products', page: 86 },
      { kind: 'lesson', titleAr: 'الضرب في عدد من رقم واحد', titleEn: 'Multiplying by a One-Digit Number', page: 90 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 94 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: رسم صورة', titleEn: 'Problem-Solving Plan: Draw a Picture', page: 95 },
      { kind: 'lesson', titleAr: 'الضرب في عدد من رقمين', titleEn: 'Multiplying by a Two-Digit Number', page: 97 },
      { kind: 'lesson', titleAr: 'خصائص الضرب', titleEn: 'Properties of Multiplication', page: 100 },
      { kind: 'lesson', titleAr: 'استقصاء حل المسألة', titleEn: 'Problem-Solving Investigation', page: 103 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 105 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (3)', titleEn: 'Cumulative Test (3)', page: 106 },
    ],
  },
  {
    titleAr: 'القسمة',
    titleEn: 'Division',
    focusAr: 'قدّر نواتج القسمة، واستعمل النماذج وخطوات القسمة المطولة، ثم فسّر باقي القسمة بحسب سياق المسألة.',
    focusEn: 'Estimate quotients, use models and long-division steps, and interpret remainders in the context of a problem.',
    activityAr: 'وزّع مجموعة من العناصر بالتساوي على مجموعات، وسجّل خارج القسمة والباقي ثم فسّر معناهما.',
    activityEn: 'Share a collection equally among groups, record the quotient and remainder, and explain what they mean.',
    questionAr: 'ماذا ينبغي أن نفعل بباقي القسمة في المسألة؟',
    questionEn: 'What should be done with a remainder in a word problem?',
    optionsAr: ['نفسره وفق معنى المسألة', 'نهمله في جميع الحالات', 'نضيفه إلى المقسوم عليه دائماً'],
    optionsEn: ['Interpret it according to the problem context', 'Ignore it in every case', 'Always add it to the divisor'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 110 },
      { kind: 'lesson', titleAr: 'أنماط القسمة', titleEn: 'Division Patterns', page: 111 },
      { kind: 'lesson', titleAr: 'تقدير نواتج القسمة', titleEn: 'Estimating Quotients', page: 114 },
      { kind: 'exploration', titleAr: 'استكشاف: القسمة باستعمال النماذج', titleEn: 'Explore: Division Using Models', page: 118 },
      { kind: 'lesson', titleAr: 'القسمة على عدد من رقم واحد', titleEn: 'Dividing by a One-Digit Number', page: 120 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 123 },
      { kind: 'lesson', titleAr: 'القسمة على عدد من رقمين', titleEn: 'Dividing by a Two-Digit Number', page: 124 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: تمثيل المعطيات', titleEn: 'Problem-Solving Plan: Represent the Data', page: 128 },
      { kind: 'exploration', titleAr: 'استكشاف: تفسير باقي القسمة', titleEn: 'Explore: Interpreting a Remainder', page: 130 },
      { kind: 'lesson', titleAr: 'تفسير باقي القسمة', titleEn: 'Interpreting a Remainder', page: 132 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 136 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 137 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (4)', titleEn: 'Cumulative Test (4)', page: 138 },
    ],
  },
  {
    titleAr: 'العبارات الجبرية والمعادلات',
    titleEn: 'Algebraic Expressions and Equations',
    focusAr: 'مثّل المواقف بعبارات جبرية وجداول دوال، وطبّق ترتيب العمليات، واستخدم النماذج لحل معادلات بسيطة والتحقق منها.',
    focusEn: 'Represent situations with algebraic expressions and function tables, apply order of operations, and use models to solve and check simple equations.',
    activityAr: 'حوّل قاعدة لفظية إلى جدول دالة، ثم اكتب عبارة جبرية تمثل العلاقة بين المدخل والمخرج.',
    activityEn: 'Turn a verbal rule into a function table, then write an algebraic expression for the input-output relationship.',
    questionAr: 'ما قيمة العبارة 3 × س + 2 عندما س = 4؟',
    questionEn: 'What is the value of 3 × x + 2 when x = 4?',
    optionsAr: ['14', '18', '20'],
    optionsEn: ['14', '18', '20'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 142 },
      { kind: 'lesson', titleAr: 'عبارات الجمع والطرح الجبرية', titleEn: 'Algebraic Addition and Subtraction Expressions', page: 143 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: حل مسألة أبسط', titleEn: 'Problem-Solving Plan: Solve a Simpler Problem', page: 146 },
      { kind: 'lesson', titleAr: 'عبارات الضرب والقسمة الجبرية', titleEn: 'Algebraic Multiplication and Division Expressions', page: 148 },
      { kind: 'lesson', titleAr: 'استقصاء حل المسألة', titleEn: 'Problem-Solving Investigation', page: 153 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 155 },
      { kind: 'exploration', titleAr: 'استكشاف: آلات الدوال', titleEn: 'Explore: Function Machines', page: 156 },
      { kind: 'lesson', titleAr: 'جداول الدوال', titleEn: 'Function Tables', page: 158 },
      { kind: 'lesson', titleAr: 'ترتيب العمليات', titleEn: 'Order of Operations', page: 162 },
      { kind: 'exploration', titleAr: 'استكشاف: تمثيل معادلات الجمع والطرح بنماذج', titleEn: 'Explore: Modeling Addition and Subtraction Equations', page: 166 },
      { kind: 'lesson', titleAr: 'معادلات الجمع والطرح', titleEn: 'Addition and Subtraction Equations', page: 168 },
      { kind: 'exploration', titleAr: 'استكشاف: تمثيل معادلات الضرب بنماذج', titleEn: 'Explore: Modeling Multiplication Equations', page: 172 },
      { kind: 'lesson', titleAr: 'معادلات الضرب', titleEn: 'Multiplication Equations', page: 174 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 177 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (5)', titleEn: 'Cumulative Test (5)', page: 178 },
    ],
  },
  {
    titleAr: 'الكسور الاعتيادية',
    titleEn: 'Common Fractions',
    focusAr: 'اربط القسمة بالكسور، وميّز الكسور غير الفعلية والأعداد الكسرية، وقارنها وقدّرها باستخدام النماذج والتمثيلات.',
    focusEn: 'Connect division to fractions, distinguish improper fractions from mixed numbers, and compare and estimate them using models and representations.',
    activityAr: 'مثّل كمية بكسر غير فعلي وبعدد كسري مكافئ، ثم قارن تمثيلك بنموذج بصري.',
    activityEn: 'Represent a quantity as an improper fraction and an equivalent mixed number, then compare your work with a visual model.',
    questionAr: 'ماذا يساوي الكسر غير الفعلي 7/4 على صورة عدد كسري؟',
    questionEn: 'What is 7/4 as a mixed number?',
    optionsAr: ['1 3/4', '1 1/4', '2 1/4'],
    optionsEn: ['1 3/4', '1 1/4', '2 1/4'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 182 },
      { kind: 'lesson', titleAr: 'القسمة والكسور الاعتيادية', titleEn: 'Division and Common Fractions', page: 183 },
      { kind: 'exploration', titleAr: 'استكشاف: تمثيل الأعداد الكسرية والكسور غير الفعلية بالنماذج', titleEn: 'Explore: Modeling Mixed Numbers and Improper Fractions', page: 186 },
      { kind: 'lesson', titleAr: 'الكسور غير الفعلية', titleEn: 'Improper Fractions', page: 188 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: التمثيل بأشكال فن', titleEn: 'Problem-Solving Plan: Use a Venn Diagram', page: 192 },
      { kind: 'lesson', titleAr: 'الأعداد الكسرية', titleEn: 'Mixed Numbers', page: 194 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 197 },
      { kind: 'lesson', titleAr: 'مقارنة الكسور الاعتيادية والأعداد الكسرية', titleEn: 'Comparing Common Fractions and Mixed Numbers', page: 198 },
      { kind: 'lesson', titleAr: 'تقريب الكسور', titleEn: 'Estimating Fractions', page: 201 },
      { kind: 'lesson', titleAr: 'استقصاء حل المسألة', titleEn: 'Problem-Solving Investigation', page: 205 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 207 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (6)', titleEn: 'Cumulative Test (6)', page: 208 },
    ],
  },
];

const chapterNumbersAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس'];

export const SAUDI_G5_PRIMARY_MATH_UNIT_COUNT = chapters.length;
export const SAUDI_G5_PRIMARY_MATH_TOPIC_COUNT = chapters.reduce(
  (total, chapter) => total + chapter.topics.length,
  0
);
export const SAUDI_G5_PRIMARY_MATH_TABLE_OF_CONTENTS = chapters.flatMap((chapter, chapterIndex) =>
  chapter.topics.map((topic) => ({
    unitNumber: chapterIndex + 1,
    unitTitleAr: chapter.titleAr,
    ...topic,
  }))
);

const guidanceForKind = (chapter: MathChapter, topic: MathContentsEntry) => {
  if (topic.kind === 'preparation') {
    return {
      ar: `تهيئة من إعداد المنصة لفصل «${chapter.titleAr}»: استدعِ فكرة رياضية سابقة ذات صلة، واشرح كيف تساعد على فهم موضوع الفصل.`,
      en: `Original platform preparation for “${chapter.titleEn}”: recall a related mathematical idea and explain how it helps with the chapter.`,
    };
  }
  if (topic.kind === 'exploration') {
    return {
      ar: `نشاط استكشافي من إعداد المنصة حول «${topic.titleAr}»: جرّب نموذجًا أو مثالًا، وسجّل ما تلاحظه قبل تعميم القاعدة.`,
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
    ar: `${chapter.focusAr} في موضوع «${topic.titleAr}»، اكتب خطوات الحل واربط كل خطوة بتمثيل أو تقدير مناسب.`,
    en: `${chapter.focusEn} For “${topic.titleEn},” show the solution steps and connect each step to a suitable representation or estimate.`,
  };
};

export const SAUDI_G5_PRIMARY_MATH_CURRICULUM: Lecture[] = chapters.map((chapter, chapterIndex) => {
  const order = chapterIndex + 1;
  const chapterTitleAr = `الفصل ${chapterNumbersAr[chapterIndex]}: ${chapter.titleAr}`;
  const chapterTitleEn = `Chapter ${order}: ${chapter.titleEn}`;
  const visualSteps = chapter.topics.slice(0, 4).map((topic) => ({
    labelAr: topic.titleAr,
    labelEn: topic.titleEn,
  }));
  const lectureId = `saudi-g5-primary-math-1448-${order}`;

  return {
    id: lectureId,
    order,
    titleAr: chapterTitleAr,
    titleEn: chapterTitleEn,
    subtitleAr: `الرياضيات — الصف الخامس — ص ${chapter.topics[0].page}`,
    subtitleEn: `Mathematics — Grade 5 — p. ${chapter.topics[0].page}`,
    descriptionAr: `${sourceNoteAr}\n\nالشرح والأنشطة مساندة ومعدة من المنصة؛ تُراجع تفاصيل الحل والأمثلة في الكتاب ومعلم المادة.`,
    descriptionEn: `${sourceNoteEn}\n\nExplanations and activities are original supplementary platform material; consult the textbook and teacher for worked examples and details.`,
    durationMinutes: 35,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب الرياضيات',
    ministryEn: 'Ministry of Education — Mathematics textbook',
    gradeLevelNameAr: 'الصف الخامس الابتدائي — الرياضيات',
    gradeLevelNameEn: 'Grade 5 — Mathematics',
    termAr: 'الجزء الأول من المقرر — طبعة 1448هـ/2026م',
    termEn: 'Part One — 1448 AH/2026 edition',
    unitTitleAr: chapterTitleAr,
    unitTitleEn: chapterTitleEn,
    lessonNumberAr: `${chapterTitleAr} (ص ${chapter.topics[0].page})`,
    lessonNumberEn: `${chapterTitleEn} (p. ${chapter.topics[0].page})`,
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
            id: `saudi-g5-primary-math-diagram-${order}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${chapter.titleAr}`,
            titleEn: `Original learning diagram: ${chapter.titleEn}`,
            captionAr: 'رسم توضيحي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created learning diagram, not an image from the textbook.',
            diagramType: 'primary_math_g5_unit' as const,
            visualSteps,
          },
        } : {}),
      };
    }),
    assessment: {
      id: `saudi-g5-primary-math-assessment-${order}`,
      lectureId,
      titleAr: `تقويم الفصل: ${chapter.titleAr}`,
      titleEn: `Chapter check: ${chapter.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g5-primary-math-question-${order}`,
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
