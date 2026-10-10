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

export const SAUDI_G4_PRIMARY_MATH_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-math.pdf';

const sourceNoteAr =
  'مرجع أسماء الفصول والدروس وأرقام الصفحات: غلاف وفهرس كتاب الرياضيات للصف الرابع الابتدائي، الجزء الأول من المقرر، طبعة 1448هـ/2026م، صفحات PDF 1 و6–7. جرى التحقق من الغلاف والفهرس فقط، ولم تراجع صفحات الدروس الداخلية. يذكر سجل النشر في الصفحة الثانية 1446هـ؛ وقد أُظهر اختلافه عن الطبعة المطبوعة على الغلاف. الشرح والأنشطة والرسوم والأسئلة هنا من إعداد المنصة وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Chapter and lesson titles and page references are based on the cover and contents of the Grade 4 Mathematics textbook, Part One, 1448 AH/2026 edition, PDF pages 1 and 6–7. Only the cover and contents were checked; lesson pages were not reviewed. The publication record on PDF page 2 states 1446 AH, a discrepancy from the edition printed on the cover. Explanations, activities, diagrams, and questions here are original platform material, not copied from the textbook.';

const chapters: MathChapter[] = [
  {
    titleAr: 'القيمة المنزلية',
    titleEn: 'Place Value',
    focusAr: 'مثّل الأعداد إلى الملايين، وقارنها ورتبها وقرّبها، مستخدمًا قيمة الرقم وموقعه للتحقق من معقولية الإجابة.',
    focusEn: 'Represent numbers through the millions, compare, order, and round them, and use digit value and position to check whether an answer is reasonable.',
    activityAr: 'كوّن أعدادًا من بطاقات أرقام، ومثّلها في جدول القيمة المنزلية، ثم رتّبها وقرّبها إلى منزلة محددة.',
    activityEn: 'Build numbers from digit cards, show them in a place-value chart, then order and round them to a chosen place.',
    questionAr: 'ما قيمة الرقم 4 في العدد 542,381؟',
    questionEn: 'What is the value of 4 in 542,381?',
    optionsAr: ['40,000', '4,000', '400'],
    optionsEn: ['40,000', '4,000', '400'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 12 },
      { kind: 'lesson', titleAr: 'القيمة المنزلية ضمن مئات الألوف', titleEn: 'Place Value Through the Hundred Thousands', page: 13 },
      { kind: 'exploration', titleAr: 'إلى أي مدى يكون المليون كبيرًا؟', titleEn: 'How Large Is a Million?', page: 16 },
      { kind: 'lesson', titleAr: 'القيمة المنزلية ضمن الملايين', titleEn: 'Place Value Through the Millions', page: 18 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: استعمال الخطوات الأربع', titleEn: 'Problem-Solving Skill: Use the Four Steps', page: 22 },
      { kind: 'lesson', titleAr: 'المقارنة بين الأعداد', titleEn: 'Comparing Numbers', page: 24 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 28 },
      { kind: 'lesson', titleAr: 'ترتيب الأعداد', titleEn: 'Ordering Numbers', page: 29 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 32 },
      { kind: 'lesson', titleAr: 'تقريب الأعداد', titleEn: 'Rounding Numbers', page: 33 },
      { kind: 'exploration', titleAr: 'استقصاء حل المسألة: اختيار الخطة المناسبة', titleEn: 'Problem-Solving Investigation: Choose a Suitable Plan', page: 37 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 39 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (1)', titleEn: 'Cumulative Test (1)', page: 40, pageEnd: 41 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 42, pageEnd: 43 }
    ]
  },
  {
    titleAr: 'الجمع والطرح',
    titleEn: 'Addition and Subtraction',
    focusAr: 'استخدم القيمة المنزلية وخصائص الجمع وقواعد الطرح لتقدير المجاميع والفروق، وإجراء العمليات والتحقق من النتائج.',
    focusEn: 'Use place value, addition properties, and subtraction rules to estimate sums and differences, calculate, and check results.',
    activityAr: 'قدّر مجموع عددين ثم احسبه، واشرح كيف تساعدك المقارنة بين التقدير والناتج على اكتشاف الخطأ.',
    activityEn: 'Estimate and calculate a sum, then explain how comparing the estimate and result can reveal an error.',
    questionAr: 'ما الإجراء الأنسب لجمع عددين عشريين؟',
    questionEn: 'What is the best way to add two decimals?',
    optionsAr: ['محاذاة الفواصل العشرية ثم جمع المنازل المتناظرة', 'جمع الأرقام دون مراعاة منازلها', 'حذف الأصفار اللازمة قبل الجمع'],
    optionsEn: ['Align decimal points, then add corresponding place values', 'Add digits without considering place value', 'Remove needed placeholder zeros before adding'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 46 },
      { kind: 'lesson', titleAr: 'الجبر: خصائص الجمع وقواعد الطرح', titleEn: 'Algebra: Addition Properties and Subtraction Rules', page: 47 },
      { kind: 'lesson', titleAr: 'تقدير المجموع والفرق', titleEn: 'Estimating Sums and Differences', page: 50 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: التقدير أو الإجابة الدقيقة', titleEn: 'Problem-Solving Skill: Estimate or Find an Exact Answer', page: 54 },
      { kind: 'lesson', titleAr: 'الجمع', titleEn: 'Addition', page: 56 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 60 },
      { kind: 'exploration', titleAr: 'استكشاف الطرح', titleEn: 'Explore Subtraction', page: 61 },
      { kind: 'lesson', titleAr: 'الطرح', titleEn: 'Subtraction', page: 63 },
      { kind: 'extension', titleAr: 'هيا بنا نلعب', titleEn: 'Let’s Play', page: 66 },
      { kind: 'lesson', titleAr: 'الطرح مع وجود الأصفار', titleEn: 'Subtraction with Zeros', page: 67 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 71 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (2)', titleEn: 'Cumulative Test (2)', page: 72, pageEnd: 73 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 74, pageEnd: 75 }
    ]
  },
  {
    titleAr: 'تنظيم البيانات وعرضها وتفسيرها',
    titleEn: 'Organizing, Displaying, and Interpreting Data',
    focusAr: 'اجمع البيانات ونظّمها في جداول وتمثيلات مناسبة، ثم اقرأها واستعملها للاستدلال على النتائج والاحتمالات.',
    focusEn: 'Collect and organize data in suitable tables and displays, then interpret them to draw conclusions and reason about probability.',
    activityAr: 'اجمع بيانات بسيطة من الصف، ونظّمها في جدول، ثم اختر تمثيلًا بيانيًا مناسبًا واكتب استنتاجًا تدعمه البيانات.',
    activityEn: 'Collect simple classroom data, organize it in a table, choose a suitable graph, and write a data-supported conclusion.',
    questionAr: 'أي تمثيل يناسب إظهار تغير قيمة مع مرور الزمن؟',
    questionEn: 'Which display is useful for showing how a value changes over time?',
    optionsAr: ['التمثيل بالخطوط', 'التمثيل بالقطاعات الدائرية فقط', 'قائمة غير مرتبة من الأعداد'],
    optionsEn: ['A line graph', 'A pie chart only', 'An unordered list of numbers'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 78 },
      { kind: 'lesson', titleAr: 'جمع البيانات وتنظيمها', titleEn: 'Collecting and Organizing Data', page: 79 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: إنشاء جدول', titleEn: 'Problem-Solving Plan: Make a Table', page: 82 },
      { kind: 'lesson', titleAr: 'التمثيل بالأعمدة', titleEn: 'Bar Graphs', page: 84 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 86 },
      { kind: 'lesson', titleAr: 'التمثيل بالخطوط', titleEn: 'Line Graphs', page: 87 },
      { kind: 'lesson', titleAr: 'التمثيل بالقطاعات الدائرية', titleEn: 'Circle Graphs', page: 90 },
      { kind: 'lesson', titleAr: 'الاحتمال', titleEn: 'Probability', page: 93 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 97 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (3)', titleEn: 'Cumulative Test (3)', page: 98, pageEnd: 99 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 100, pageEnd: 101 }
    ]
  },
  {
    titleAr: 'الأنماط والجبر',
    titleEn: 'Patterns and Algebra',
    focusAr: 'اكتب العبارات والجمل العددية ومثّلها، واكتشف القواعد في الجداول، واستخدمها للتنبؤ بالقيم وحل المسائل.',
    focusEn: 'Write and represent numerical expressions and sentences, find rules in tables, and use them to predict values and solve problems.',
    activityAr: 'أنشئ نمطًا عدديًا وسجّله في جدول، ثم اكتب قاعدة تصف العلاقة وتنبأ بحد تالٍ.',
    activityEn: 'Create a number pattern and record it in a table, then write a rule for the relationship and predict a later term.',
    questionAr: 'ما قيمة العبارة 3 + 2 × 4 عند إجراء الضرب قبل الجمع؟',
    questionEn: 'What is the value of 3 + 2 × 4 when multiplication is done before addition?',
    optionsAr: ['11', '20', '14'],
    optionsEn: ['11', '20', '14'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 104 },
      { kind: 'exploration', titleAr: 'استكشاف تمثيل العبارات العددية', titleEn: 'Explore Representing Numerical Expressions', page: 105 },
      { kind: 'lesson', titleAr: 'العبارات والجمل العددية', titleEn: 'Numerical Expressions and Sentences', page: 107 },
      { kind: 'lesson', titleAr: 'تمثيل الجمل العددية وكتابتها', titleEn: 'Representing and Writing Numerical Sentences', page: 110 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: الاستدلال المنطقي', titleEn: 'Problem-Solving Plan: Logical Reasoning', page: 114 },
      { kind: 'lesson', titleAr: 'اكتشاف قاعدة من جدول', titleEn: 'Finding a Rule from a Table', page: 116 },
      { kind: 'lesson', titleAr: 'جداول الدوال: جداول الجمع والطرح', titleEn: 'Function Tables: Addition and Subtraction', page: 120 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 124 },
      { kind: 'lesson', titleAr: 'استقصاء حل المسألة: اختيار الخطة المناسبة', titleEn: 'Problem-Solving Investigation: Choose a Suitable Plan', page: 125 },
      { kind: 'lesson', titleAr: 'جداول الدوال: جداول الضرب والقسمة', titleEn: 'Function Tables: Multiplication and Division', page: 127 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 131 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (4)', titleEn: 'Cumulative Test (4)', page: 132, pageEnd: 133 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 134, pageEnd: 135 }
    ]
  },
  {
    titleAr: 'الضرب في عدد من رقم واحد',
    titleEn: 'Multiplication by a One-Digit Number',
    focusAr: 'استعمل العوامل والمضاعفات والتقدير والنماذج لإجراء الضرب في رقم واحد، مع تنظيم خطوات إعادة التجميع.',
    focusEn: 'Use factors, multiples, estimation, and models to multiply by a one-digit number, organizing regrouping steps when needed.',
    activityAr: 'مثّل عملية ضرب بمصفوفة أو نموذج مساحة، ثم اكتب خطوات الحساب وتحقق من الناتج بالتقدير.',
    activityEn: 'Model a multiplication with an array or area model, record the calculation steps, and check the result by estimating.',
    questionAr: 'ما ناتج 24 × 3؟',
    questionEn: 'What is 24 × 3?',
    optionsAr: ['72', '62', '82'],
    optionsEn: ['72', '62', '82'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 138 },
      { kind: 'lesson', titleAr: 'القواسم والمضاعفات', titleEn: 'Factors and Multiples', page: 139 },
      { kind: 'lesson', titleAr: 'الضرب في مضاعفات 10 و100 و1000', titleEn: 'Multiplying by Multiples of 10, 100, and 1,000', page: 142 },
      { kind: 'lesson', titleAr: 'مهارة حل المسألة: تقدير معقولية الإجابة', titleEn: 'Problem-Solving Skill: Estimate Answer Reasonableness', page: 145 },
      { kind: 'lesson', titleAr: 'تقدير نواتج الضرب', titleEn: 'Estimating Products', page: 147 },
      { kind: 'lesson', titleAr: 'ضرب عدد من رقمين في عدد من رقم واحد دون إعادة التجميع', titleEn: 'Multiplying a Two-Digit Number by a One-Digit Number without Regrouping', page: 151 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 154 },
      { kind: 'exploration', titleAr: 'استكشاف ضرب عدد من رقمين في عدد من رقم واحد مع إعادة التجميع', titleEn: 'Explore Multiplying a Two-Digit Number by a One-Digit Number with Regrouping', page: 155 },
      { kind: 'lesson', titleAr: 'ضرب عدد من رقمين في عدد من رقم واحد مع إعادة التجميع', titleEn: 'Multiplying a Two-Digit Number by a One-Digit Number with Regrouping', page: 157 },
      { kind: 'lesson', titleAr: 'استقصاء حل المسألة: اختيار الخطة المناسبة', titleEn: 'Problem-Solving Investigation: Choose a Suitable Plan', page: 161 },
      { kind: 'lesson', titleAr: 'ضرب عدد من ثلاثة أرقام في عدد من رقم واحد', titleEn: 'Multiplying a Three-Digit Number by a One-Digit Number', page: 163 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 168 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (5)', titleEn: 'Cumulative Test (5)', page: 170, pageEnd: 171 }
    ]
  },
  {
    titleAr: 'الضرب في عدد من رقمين',
    titleEn: 'Multiplication by a Two-Digit Number',
    focusAr: 'قدّر نواتج الضرب، ومثّل المسألة، ونظّم الضرب المطول لعددين من رقمين أو لضرب عدد من ثلاثة أرقام في عدد من رقمين.',
    focusEn: 'Estimate products, represent word problems, and organize multi-digit multiplication with two-digit factors.',
    activityAr: 'مثّل مسألة ضرب بنموذج مساحة، وقسّمها إلى نواتج جزئية، ثم اجمعها وتحقق من معقوليتها.',
    activityEn: 'Represent a multiplication problem with an area model, split it into partial products, add them, and check reasonableness.',
    questionAr: 'ما ناتج 23 × 14؟',
    questionEn: 'What is 23 × 14?',
    optionsAr: ['322', '312', '342'],
    optionsEn: ['322', '312', '342'],
    topics: [
      { kind: 'preparation', titleAr: 'التهيئة', titleEn: 'Chapter Preparation', page: 174 },
      { kind: 'lesson', titleAr: 'الضرب في مضاعفات العشرة', titleEn: 'Multiplying by Multiples of Ten', page: 175 },
      { kind: 'lesson', titleAr: 'تقدير نواتج الضرب', titleEn: 'Estimating Products', page: 179 },
      { kind: 'lesson', titleAr: 'خطة حل المسألة: تمثيل المسألة', titleEn: 'Problem-Solving Plan: Represent the Problem', page: 183 },
      { kind: 'midterm', titleAr: 'اختبار منتصف الفصل', titleEn: 'Mid-Chapter Check', page: 185 },
      { kind: 'exploration', titleAr: 'استكشاف ضرب عدد من رقمين في عدد من رقمين', titleEn: 'Explore Multiplying a Two-Digit Number by a Two-Digit Number', page: 186 },
      { kind: 'lesson', titleAr: 'ضرب عدد من رقمين في عدد من رقمين', titleEn: 'Multiplying a Two-Digit Number by a Two-Digit Number', page: 188 },
      { kind: 'lesson', titleAr: 'ضرب عدد من ثلاثة أرقام في عدد من رقمين', titleEn: 'Multiplying a Three-Digit Number by a Two-Digit Number', page: 191 },
      { kind: 'chapterReview', titleAr: 'اختبار الفصل', titleEn: 'Chapter Check', page: 195 },
      { kind: 'cumulative', titleAr: 'الاختبار التراكمي (6)', titleEn: 'Cumulative Test (6)', page: 196, pageEnd: 197 },
      { kind: 'cumulative', titleAr: 'اختبر نفسك', titleEn: 'Self-Test', page: 198, pageEnd: 199 }
    ]
  }
];

const chapterNumbersAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس'];

const guidanceForKind = (
  chapter: MathChapter,
  topic: MathContentsEntry
): { ar: string; en: string } => {
  if (topic.kind === 'preparation') {
    return {
      ar: `تهيئة أصلية من المنصة لفصل «${chapter.titleAr}»: استرجع فكرة رياضية مرتبطة به، واشرح كيف تساعدك في التعلم.`,
      en: `Original platform preparation for “${chapter.titleEn}”: recall a related mathematical idea and explain how it supports your learning.`
    };
  }
  if (topic.kind === 'exploration') {
    return {
      ar: `نشاط استكشافي أصلي حول «${topic.titleAr}»: جرّب نموذجًا أو مثالًا، وسجّل ما تلاحظه قبل تعميم القاعدة.`,
      en: `Original platform exploration for “${topic.titleEn}”: try a model or example and record observations before generalizing a rule.`
    };
  }
  if (topic.kind === 'extension') {
    return {
      ar: `نشاط تفاعلي مساند حول «${topic.titleAr}»: حل مسألة قصيرة باستخدام فكرة الفصل، ثم تحقق من الناتج.`,
      en: `A supplementary interactive activity for “${topic.titleEn}”: solve a short problem using the chapter idea, then check the result.`
    };
  }
  if (topic.kind === 'midterm' || topic.kind === 'chapterReview' || topic.kind === 'cumulative') {
    return {
      ar: `تقويم ومراجعة من إعداد المنصة لفصل «${chapter.titleAr}». هذا عنوان في الفهرس وليس نص أسئلة الاختبار. مرجع الفهرس: ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.`,
      en: `An original platform review for “${chapter.titleEn}.” This is a contents heading, not the test questions. Contents reference: pp. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.`
    };
  }
  return {
    ar: `${chapter.focusAr} في موضوع «${topic.titleAr}»، اكتب خطوات الحل واربط كل خطوة بتمثيل أو تقدير مناسب.`,
    en: `${chapter.focusEn} For “${topic.titleEn},” show the solution steps and connect them to a suitable representation or estimate.`
  };
};

export const SAUDI_G4_PRIMARY_MATH_UNIT_COUNT = chapters.length;
export const SAUDI_G4_PRIMARY_MATH_TOPIC_COUNT =
  chapters.reduce((count, chapter) => count + chapter.topics.length, 0);
export const SAUDI_G4_PRIMARY_MATH_TABLE_OF_CONTENTS = chapters.flatMap((chapter, chapterIndex) =>
  chapter.topics.map((topic) => ({
    unitNumber: chapterIndex + 1,
    unitTitleAr: chapter.titleAr,
    titleAr: topic.titleAr,
    page: topic.page,
    pageEnd: topic.pageEnd
  }))
);

export const SAUDI_G4_PRIMARY_MATH_CURRICULUM: Lecture[] = chapters.map((chapter, chapterIndex) => {
  const order = chapterIndex + 1;
  const chapterTitleAr = `الفصل ${chapterNumbersAr[chapterIndex]}: ${chapter.titleAr}`;
  const chapterTitleEn = `Chapter ${order}: ${chapter.titleEn}`;
  const visualSteps = chapter.topics.slice(0, 4).map((topic) => ({
    labelAr: topic.titleAr,
    labelEn: topic.titleEn
  }));
  const lectureId = `saudi-g4-primary-math-1448-${order}`;

  return {
    id: lectureId,
    order,
    titleAr: chapterTitleAr,
    titleEn: chapterTitleEn,
    subtitleAr: `الرياضيات — الصف الرابع — ص ${chapter.topics[0].page}`,
    subtitleEn: `Mathematics — Grade 4 — p. ${chapter.topics[0].page}`,
    descriptionAr: `${sourceNoteAr}\n\nالشرح والأنشطة مساندة ومعدة من المنصة؛ تُراجع تفاصيل الحل والأمثلة في الكتاب ومعلم المادة.`,
    descriptionEn: `${sourceNoteEn}\n\nExplanations and activities are original supplementary platform material; consult the textbook and teacher for worked examples and details.`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب الرياضيات',
    ministryEn: 'Ministry of Education — Mathematics textbook',
    gradeLevelNameAr: 'الصف الرابع الابتدائي — الرياضيات',
    gradeLevelNameEn: 'Grade 4 — Mathematics',
    termAr: 'الجزء الأول من المقرر — طبعة 1448هـ/2026م',
    termEn: 'Part One — 1448 AH/2026 edition',
    unitTitleAr: chapterTitleAr,
    unitTitleEn: chapterTitleEn,
    lessonNumberAr: `${chapterTitleAr} (ص ${chapter.topics[0].page})`,
    lessonNumberEn: `${chapterTitleEn} (p. ${chapter.topics[0].page})`,
    warmupHookAr: `ما المعلومات التي تعرفها عن ${chapter.titleAr}، وكيف تمثلها رياضيًا؟`,
    warmupHookEn: `What do you know about ${chapter.titleEn}, and how could you represent it mathematically?`,
    learningOutcomesAr: [
      `يتعرف موضوعات الفصل المثبتة في الفهرس: ${chapter.topics.map((topic) => topic.titleAr).join('؛ ')}.`,
      chapter.focusAr,
      'يكتب خطوات الحل، ويستخدم التقدير أو التمثيل للتحقق من معقولية النتيجة.'
    ],
    learningOutcomesEn: [
      `Identify the chapter topics verified in the contents: ${chapter.topics.map((topic) => topic.titleEn).join('; ')}.`,
      chapter.focusEn,
      'Show solution steps and use estimation or a representation to check whether a result is reasonable.'
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
      const guidance = guidanceForKind(chapter, topic);
      return {
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${guidance.ar}\n\nمرجع الفهرس: ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.\n\n${sourceNoteAr}`,
        contentEn: `${guidance.en}\n\nContents reference: p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.\n\n${sourceNoteEn}`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g4-primary-math-diagram-${order}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${chapter.titleAr}`,
            titleEn: `Original learning diagram: ${chapter.titleEn}`,
            captionAr: 'رسم توضيحي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created learning diagram, not an image from the textbook.',
            diagramType: 'primary_math_unit' as const,
            visualSteps
          }
        } : {})
      };
    }),
    assessment: {
      id: `saudi-g4-primary-math-assessment-${order}`,
      lectureId,
      titleAr: `تقويم الفصل: ${chapter.titleAr}`,
      titleEn: `Chapter check: ${chapter.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g4-primary-math-question-${order}`,
        textAr: chapter.questionAr,
        textEn: chapter.questionEn,
        optionsAr: [...chapter.optionsAr],
        optionsEn: [...chapter.optionsEn],
        correctIndex: 0,
        explanationAr: 'تقويم المنصة أصلي ومساند، ولا يمثل أسئلة الاختبار الواردة في الكتاب.',
        explanationEn: 'This original platform check is supplementary and does not reproduce textbook test questions.',
        conceptTestedAr: chapter.titleAr,
        conceptTestedEn: chapter.titleEn,
        difficulty: 'easy'
      }]
    }
  };
});
