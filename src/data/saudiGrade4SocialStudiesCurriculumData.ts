import type { Lecture, LectureDiagramStep } from '../types';

interface SocialStudiesLesson {
  titleAr: string;
  titleEn: string;
  page: number;
  focusAr: string;
  focusEn: string;
}

interface SocialStudiesUnit {
  titleAr: string;
  titleEn: string;
  page: number;
  reviewPage: number;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
  activityAr: string;
  activityEn: string;
  lessons: SocialStudiesLesson[];
}

export const SAUDI_G4_SOCIAL_STUDIES_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-EJTSM.pdf';

const sourceNoteAr =
  'المرجع: كتاب الدراسات الاجتماعية للصف الرابع الابتدائي؛ الغلاف يذكر طبعة 1448هـ/2026م، وسجل النشر الداخلي في صفحة PDF 2 يذكر 1446هـ. عناوين الوحدات والدروس وأرقام صفحاتها مطابقة لفهرسي الجزأين في صفحتي PDF 9 و111. لم تراجع صفحات الدروس تفصيليًا؛ الشروح والأنشطة والرسوم والتقويمات في المنصة مواد أصلية مساندة وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Source: the Grade 4 Social Studies textbook. The cover states the 1448 AH/2026 edition, while the internal publication record on PDF page 2 states 1446 AH. Unit and lesson titles and page references match the contents for both parts on PDF pages 9 and 111. Lesson pages were not reviewed in detail; platform explanations, activities, diagrams, and assessments are original supplementary material, not copied from the textbook.';

const units: SocialStudiesUnit[] = [
  {
    titleAr: 'المواطنة',
    titleEn: 'Citizenship',
    page: 10,
    reviewPage: 34,
    stepsAr: ['الإنسان والمجتمع', 'الهوية الوطنية', 'نظام الحكم', 'الرموز الوطنية'],
    stepsEn: ['People and society', 'National identity', 'System of government', 'National symbols'],
    activityAr: 'صمّم بطاقة مصوّرة عن',
    activityEn: 'Create an illustrated card about',
    lessons: [
      {
        titleAr: 'الدراسات الاجتماعية',
        titleEn: 'Social Studies',
        page: 12,
        focusAr: 'تدرس الدراسات الاجتماعية الإنسان وسلوكه وقيمه واحتياجاته، وعلاقته بالبيئة والمجتمع والوطن.',
        focusEn: 'Social studies explores people, their behavior, values, and needs, and their relationships with the environment, community, and country.',
      },
      {
        titleAr: 'الهوية الوطنية',
        titleEn: 'National Identity',
        page: 16,
        focusAr: 'تتعرف مكونات الهوية الوطنية السعودية، ومنها الدين واللغة والتاريخ والقيم المشتركة.',
        focusEn: 'Identify elements of Saudi national identity, including religion, language, history, and shared values.',
      },
      {
        titleAr: 'نظام الحكم',
        titleEn: 'System of Government',
        page: 20,
        focusAr: 'تتعرف أن نظام الحكم في المملكة ملكي، وأنه يستند إلى كتاب الله وسنة رسوله.',
        focusEn: 'Learn that the Kingdom has a monarchical system of government based on the Qur’an and the Prophet’s Sunnah.',
      },
      {
        titleAr: 'الرموز الوطنية',
        titleEn: 'National Symbols',
        page: 24,
        focusAr: 'تتعرف الرموز الوطنية السعودية، مثل العلم والشعار والنشيد، وتحترم دلالاتها.',
        focusEn: 'Recognize Saudi national symbols, such as the flag, emblem, and anthem, and respect their meanings.',
      },
    ],
  },
  {
    titleAr: 'التاريخ',
    titleEn: 'History',
    page: 38,
    reviewPage: 58,
    stepsAr: ['الحدث الماضي', 'المصدر التاريخي', 'السبب والنتيجة', 'الترتيب الزمني'],
    stepsEn: ['Past event', 'Historical source', 'Cause and effect', 'Chronological order'],
    activityAr: 'أنشئ مخططًا أو خطًا زمنيًا مبسطًا عن',
    activityEn: 'Create a simple diagram or timeline about',
    lessons: [
      {
        titleAr: 'مفهوم التاريخ',
        titleEn: 'The Concept of History',
        page: 40,
        focusAr: 'يفهم التاريخ بوصفه دراسة أحداث الماضي، ويربط الأحداث بأزمنتها وأماكنها.',
        focusEn: 'Understand history as the study of past events and connect events to their times and places.',
      },
      {
        titleAr: 'المصادر',
        titleEn: 'Sources',
        page: 43,
        focusAr: 'يميز مصادر المعلومات التاريخية، ويرجع إلى الشواهد المناسبة للتحقق من أحداث الماضي.',
        focusEn: 'Recognize sources of historical information and use suitable evidence to check accounts of the past.',
      },
      {
        titleAr: 'السبب والنتيجة',
        titleEn: 'Cause and Effect',
        page: 47,
        focusAr: 'يربط بين سبب الحدث التاريخي ونتيجته مستندًا إلى المعلومات والشواهد المتاحة.',
        focusEn: 'Connect a historical event’s cause and effect using the available information and evidence.',
      },
      {
        titleAr: 'الترتيب الزمني',
        titleEn: 'Chronological Order',
        page: 51,
        focusAr: 'يرتب الأحداث بحسب زمن وقوعها، ويمثل تسلسلها على خط زمني واضح.',
        focusEn: 'Order events by when they occurred and represent their sequence on a clear timeline.',
      },
    ],
  },
  {
    titleAr: 'الجغرافيا',
    titleEn: 'Geography',
    page: 62,
    reviewPage: 85,
    stepsAr: ['الجغرافيا', 'الموقع', 'المكان والبيئة', 'الحركة'],
    stepsEn: ['Geography', 'Location', 'Place and environment', 'Movement'],
    activityAr: 'ارسم مخططًا مبسطًا أو خريطة ذهنية عن',
    activityEn: 'Draw a simple diagram or mind map about',
    lessons: [
      {
        titleAr: 'مفهوم الجغرافيا',
        titleEn: 'The Concept of Geography',
        page: 64,
        focusAr: 'تدرس الجغرافيا سطح الأرض والمواقع والأماكن والبيئات، والعلاقات بينها وبين الإنسان.',
        focusEn: 'Geography studies Earth’s surface, locations, places, and environments, and their relationships with people.',
      },
      {
        titleAr: 'الموقع',
        titleEn: 'Location',
        page: 69,
        focusAr: 'يحدد الموقع ويصفه باستخدام أسماء الأماكن والاتجاهات والخرائط المناسبة.',
        focusEn: 'Identify and describe a location using place names, directions, and suitable maps.',
      },
      {
        titleAr: 'المكان',
        titleEn: 'Place',
        page: 72,
        focusAr: 'يصف خصائص المكان الطبيعية والبشرية، ويميز ما يجعله مختلفًا عن غيره.',
        focusEn: 'Describe the natural and human features of a place and distinguish what makes it different.',
      },
      {
        titleAr: 'البيئة',
        titleEn: 'Environment',
        page: 75,
        focusAr: 'يتعرف عناصر البيئة الطبيعية والبشرية، ويبين أهمية المحافظة على البيئة.',
        focusEn: 'Recognize natural and human elements of the environment and explain why it should be protected.',
      },
      {
        titleAr: 'الحركة',
        titleEn: 'Movement',
        page: 79,
        focusAr: 'يستكشف حركة الناس والسلع والأفكار، ودور وسائل النقل والاتصال في ربط الأماكن.',
        focusEn: 'Explore the movement of people, goods, and ideas and how transport and communication connect places.',
      },
    ],
  },
  {
    titleAr: 'الاقتصاد',
    titleEn: 'Economics',
    page: 90,
    reviewPage: 106,
    stepsAr: ['الموارد', 'الإنتاج', 'الاستهلاك', 'التبادل التجاري'],
    stepsEn: ['Resources', 'Production', 'Consumption', 'Trade'],
    activityAr: 'صنّف أمثلة مرتبطة بموضوع',
    activityEn: 'Classify examples related to',
    lessons: [
      {
        titleAr: 'مفهوم الاقتصاد',
        titleEn: 'The Concept of Economics',
        page: 92,
        focusAr: 'يتعرف مفاهيم اقتصادية أولية، مثل الموارد والسلع والخدمات والإنتاج والاستهلاك.',
        focusEn: 'Explore basic economic concepts such as resources, goods, services, production, and consumption.',
      },
      {
        titleAr: 'الموارد والاستهلاك',
        titleEn: 'Resources and Consumption',
        page: 95,
        focusAr: 'يميز الموارد ويصنفها، ويطبق سلوكًا مسؤولًا في استخدام السلع وترشيد الاستهلاك.',
        focusEn: 'Recognize and classify resources and use goods responsibly while avoiding wasteful consumption.',
      },
      {
        titleAr: 'التبادل التجاري',
        titleEn: 'Trade',
        page: 99,
        focusAr: 'يفهم التبادل التجاري بوصفه تبادلًا للسلع والخدمات، ويميز أمثلة البيع والشراء والمقايضة.',
        focusEn: 'Understand trade as the exchange of goods and services and recognize examples of buying, selling, and barter.',
      },
    ],
  },
  {
    titleAr: 'الأرض والخريطة',
    titleEn: 'Earth and the Map',
    page: 112,
    reviewPage: 137,
    stepsAr: ['الأرض', 'أشكال سطحها', 'حركات الأرض والقمر', 'الخريطة'],
    stepsEn: ['Earth', 'Landforms', 'Earth and Moon motions', 'The map'],
    activityAr: 'ارسم شكلًا مبسطًا يوضح',
    activityEn: 'Draw a simple labeled illustration showing',
    lessons: [
      {
        titleAr: 'الأرض',
        titleEn: 'Earth',
        page: 114,
        focusAr: 'يحدد موقع الأرض ضمن المجموعة الشمسية، ويتعرف شكلها الكروي.',
        focusEn: 'Locate Earth in the Solar System and recognize its spherical shape.',
      },
      {
        titleAr: 'أشكال سطح الأرض',
        titleEn: 'Landforms',
        page: 117,
        focusAr: 'يتعرف أشكالًا رئيسة لسطح الأرض، مثل الجبال والسهول والهضاب والأودية.',
        focusEn: 'Recognize major landforms, such as mountains, plains, plateaus, and valleys.',
      },
      {
        titleAr: 'دوران الأرض',
        titleEn: 'Earth’s Rotation',
        page: 123,
        focusAr: 'يفهم دوران الأرض حول محورها ويربطه بتعاقب الليل والنهار.',
        focusEn: 'Understand Earth’s rotation on its axis and relate it to the alternation of day and night.',
      },
      {
        titleAr: 'دوران القمر حول الأرض',
        titleEn: 'The Moon’s Orbit around Earth',
        page: 126,
        focusAr: 'يتعرف دوران القمر حول الأرض، ويربط تغير أوجهه بالشهر القمري.',
        focusEn: 'Explore the Moon’s orbit around Earth and relate its changing phases to the lunar month.',
      },
      {
        titleAr: 'الخريطة',
        titleEn: 'The Map',
        page: 130,
        focusAr: 'يقرأ خريطة مبسطة، ويستفيد من عنوانها ورموزها واتجاهاتها لفهم المعلومات المكانية.',
        focusEn: 'Read a simple map and use its title, symbols, and directions to understand spatial information.',
      },
    ],
  },
  {
    titleAr: 'المواطنة المسؤولة',
    titleEn: 'Responsible Citizenship',
    page: 142,
    reviewPage: 156,
    stepsAr: ['الأسرة والمجتمع', 'الحقوق', 'المسؤوليات', 'العمل الجماعي'],
    stepsEn: ['Family and community', 'Rights', 'Responsibilities', 'Teamwork'],
    activityAr: 'مثّل موقفًا من الأسرة أو المدرسة يوضح',
    activityEn: 'Represent a family or school situation that demonstrates',
    lessons: [
      {
        titleAr: 'الأسرة والمجتمع',
        titleEn: 'Family and Society',
        page: 144,
        focusAr: 'يبين دور الأسرة في المجتمع، وأهمية التعاون والاحترام بين أفرادها وأفراد المجتمع.',
        focusEn: 'Explain the family’s role in society and the value of cooperation and respect among people.',
      },
      {
        titleAr: 'الحقوق والمسؤوليات',
        titleEn: 'Rights and Responsibilities',
        page: 147,
        focusAr: 'يميز بعض الحقوق والمسؤوليات في الأسرة والمدرسة والمجتمع، ويربط بينهما.',
        focusEn: 'Recognize some rights and responsibilities at home, school, and in society and relate them to one another.',
      },
      {
        titleAr: 'العمل الجماعي',
        titleEn: 'Teamwork',
        page: 150,
        focusAr: 'يشارك في العمل الجماعي، ويحترم الأدوار، ويتعاون مع الآخرين لتحقيق هدف مشترك.',
        focusEn: 'Take part in teamwork, respect different roles, and cooperate to achieve a shared goal.',
      },
    ],
  },
  {
    titleAr: 'شبه الجزيرة العربية',
    titleEn: 'The Arabian Peninsula',
    page: 160,
    reviewPage: 180,
    stepsAr: ['الموقع', 'الحضارة', 'السكان', 'القبلة والآثار'],
    stepsEn: ['Location', 'Civilization', 'Population', 'Qibla and antiquities'],
    activityAr: 'أنشئ بطاقة مكانية أو مخططًا مبسطًا عن',
    activityEn: 'Create a location card or simple diagram about',
    lessons: [
      {
        titleAr: 'شبه الجزيرة العربية: الموقع والحضارة',
        titleEn: 'The Arabian Peninsula: Location and Civilization',
        page: 162,
        focusAr: 'يحدد موقع شبه الجزيرة العربية، ويتعرف جوانب من تاريخها وحضاراتها.',
        focusEn: 'Locate the Arabian Peninsula and explore aspects of its history and civilizations.',
      },
      {
        titleAr: 'شبه الجزيرة العربية: السكان وأحوالهم',
        titleEn: 'The Arabian Peninsula: People and Ways of Life',
        page: 166,
        focusAr: 'يصف جوانب من حياة السكان في شبه الجزيرة العربية، ويربطها بالمكان والموارد.',
        focusEn: 'Describe aspects of life in the Arabian Peninsula and relate them to place and resources.',
      },
      {
        titleAr: 'قِبْلَة المسلمين',
        titleEn: 'The Qibla of Muslims',
        page: 170,
        focusAr: 'يتعرف مكة المكرمة والكعبة المشرفة قبلةً للمسلمين، ويدرك مكانتهما.',
        focusEn: 'Recognize Makkah and the Kaaba as the Qibla of Muslims and understand their significance.',
      },
      {
        titleAr: 'الآثار',
        titleEn: 'Antiquities',
        page: 174,
        focusAr: 'يتعرف الآثار شواهد على الماضي، ويبين أهمية المحافظة عليها والتعامل معها بمسؤولية.',
        focusEn: 'Understand antiquities as evidence of the past and explain why they should be responsibly preserved.',
      },
    ],
  },
  {
    titleAr: 'الأنبياء',
    titleEn: 'The Prophets',
    page: 184,
    reviewPage: 198,
    stepsAr: ['آدم ونوح عليهما السلام', 'أولو العزم من الرسل', 'الرسالة', 'العبرة'],
    stepsEn: ['Adam and Noah, peace be upon them', 'The Messengers of Firm Resolve', 'The message', 'A lesson to learn'],
    activityAr: 'رتّب المعلومات الأساسية في مخطط عن',
    activityEn: 'Organize key information in a diagram about',
    lessons: [
      {
        titleAr: 'آدم ونوح عليهما السلام',
        titleEn: 'Adam and Noah, Peace Be upon Them',
        page: 186,
        focusAr: 'يتعرف نبوة آدم ونوح عليهما السلام، ويستخلص من سيرتهما معنى مناسبًا من المقرر.',
        focusEn: 'Learn about the prophethood of Adam and Noah, peace be upon them, and identify an appropriate lesson from their stories.',
      },
      {
        titleAr: 'أولو العزم من الرسل',
        titleEn: 'The Messengers of Firm Resolve',
        page: 189,
        focusAr: 'يتعرف أولو العزم من الرسل، ويستخلص من سيرهم معاني الصبر والثبات.',
        focusEn: 'Recognize the Messengers of Firm Resolve and draw lessons about patience and steadfastness from their lives.',
      },
    ],
  },
  {
    titleAr: 'السِّيْرَة النبوية',
    titleEn: 'The Prophet’s Biography',
    page: 202,
    reviewPage: 225,
    stepsAr: ['النسب والنشأة', 'البعثة', 'الهجرة', 'الغزوات'],
    stepsEn: ['Lineage and upbringing', 'Prophethood', 'Migration', 'Campaigns'],
    activityAr: 'أنشئ خطًا زمنيًا مبسطًا يوضح محطة',
    activityEn: 'Create a simple timeline showing the milestone',
    lessons: [
      {
        titleAr: 'نَسَبُ النبي محمد ﷺ ونشأته',
        titleEn: 'The Lineage and Early Life of Prophet Muhammad ﷺ',
        page: 204,
        focusAr: 'يتعرف نسب النبي محمد ﷺ ونشأته كما يعرضهما المقرر، ويربطهما ببيئته في مكة المكرمة.',
        focusEn: 'Learn about Prophet Muhammad’s ﷺ lineage and early life as presented in the textbook and relate them to his environment in Makkah.',
      },
      {
        titleAr: 'بِعْثَة النبي محمد ﷺ',
        titleEn: 'The Prophethood of Muhammad ﷺ',
        page: 208,
        focusAr: 'يتعرف بعثة النبي محمد ﷺ وبداية الدعوة، ويرتب المعلومات الأساسية بحسب تسلسلها.',
        focusEn: 'Learn about Prophet Muhammad’s ﷺ prophethood and the beginning of the call, and order key information chronologically.',
      },
      {
        titleAr: 'الهجرة إلى المدينة المنورة',
        titleEn: 'The Migration to Madinah',
        page: 212,
        focusAr: 'يتتبع الهجرة من مكة المكرمة إلى المدينة المنورة، ويفهم مكانتها في السيرة النبوية.',
        focusEn: 'Trace the migration from Makkah to Madinah and understand its place in the Prophet’s biography.',
      },
      {
        titleAr: 'غَزَوَات النبي محمد ﷺ',
        titleEn: 'The Campaigns of Prophet Muhammad ﷺ',
        page: 218,
        focusAr: 'يتعرف موضوع غزوات النبي محمد ﷺ في سياق السيرة، ويرتب المعلومات كما يعرضها المقرر.',
        focusEn: 'Study the campaigns of Prophet Muhammad ﷺ in the context of his biography and sequence information as presented in the textbook.',
      },
    ],
  },
];

const lessonNumbersAr = [
  'الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس', 'السابع',
  'الثامن', 'التاسع', 'العاشر', 'الحادي عشر', 'الثاني عشر', 'الثالث عشر',
  'الرابع عشر', 'الخامس عشر', 'السادس عشر', 'السابع عشر', 'الثامن عشر',
  'التاسع عشر', 'العشرون', 'الحادي والعشرون', 'الثاني والعشرون',
  'الثالث والعشرون', 'الرابع والعشرون', 'الخامس والعشرون',
  'السادس والعشرون', 'السابع والعشرون', 'الثامن والعشرون',
  'التاسع والعشرون', 'الثلاثون', 'الحادي والثلاثون',
  'الثاني والثلاثون', 'الثالث والثلاثون', 'الرابع والثلاثون',
];

const lessons = units.flatMap((unit, unitIndex) =>
  unit.lessons.map((lesson) => ({ ...lesson, unit, unitIndex }))
);

export const SAUDI_G4_SOCIAL_STUDIES_UNIT_COUNT = units.length;
export const SAUDI_G4_SOCIAL_STUDIES_LESSON_COUNT = lessons.length;
export const SAUDI_G4_SOCIAL_STUDIES_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  unitNumber: lesson.unitIndex + 1,
  unitTitleAr: lesson.unit.titleAr,
  unitPage: lesson.unit.page,
  titleAr: lesson.titleAr,
  page: lesson.page,
  reviewPage: lesson.unit.lessons[lesson.unit.lessons.length - 1].titleAr === lesson.titleAr
    ? lesson.unit.reviewPage
    : undefined,
  lessonNumber: index + 1,
}));

export const SAUDI_G4_SOCIAL_STUDIES_CURRICULUM: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const unitNumber = lesson.unitIndex + 1;
  const partNumber = unitNumber <= 4 ? 1 : 2;
  const isLastLessonInUnit =
    lesson.unit.lessons[lesson.unit.lessons.length - 1].titleAr === lesson.titleAr;
  const lectureId = `sa-social-g4-1448-lesson-${String(order).padStart(2, '0')}`;
  const visualSteps: LectureDiagramStep[] = lesson.unit.stepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.unit.stepsEn[stepIndex],
  }));
  const activityAr = `${lesson.unit.activityAr} «${lesson.titleAr}»، ثم اكتب معلومة أساسية ومثالًا مناسبًا من الدرس.`;
  const activityEn = `${lesson.unit.activityEn} “${lesson.titleEn},” then write one key fact and a suitable lesson example.`;

  return {
    id: lectureId,
    order,
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn,
    subtitleAr: `الوحدة ${unitNumber} — ص ${lesson.page}`,
    subtitleEn: `Unit ${unitNumber} — p. ${lesson.page}`,
    descriptionAr: sourceNoteAr,
    descriptionEn: sourceNoteEn,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'SAUDI_SOCIAL_STUDIES',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم — كتاب الدراسات الاجتماعية',
    ministryEn: 'Ministry of Education — Social Studies textbook',
    gradeLevelNameAr: 'الصف الرابع الابتدائي — الدراسات الاجتماعية',
    gradeLevelNameEn: 'Grade 4 — Social Studies',
    termAr: `الجزء ${partNumber === 1 ? 'الأول' : 'الثاني'} من المقرر — طبعة الغلاف 1448هـ/2026م`,
    termEn: `Part ${partNumber} — cover edition 1448 AH/2026`,
    unitTitleAr: `الوحدة ${unitNumber}: ${lesson.unit.titleAr}`,
    unitTitleEn: `Unit ${unitNumber}: ${lesson.unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonNumbersAr[index]} — ص ${lesson.page}`,
    lessonNumberEn: `Lesson ${order} — p. ${lesson.page}`,
    warmupHookAr: `ما الذي تعرفه عن «${lesson.titleAr}»؟ وما المثال الذي يساعدك على فهمه؟`,
    warmupHookEn: `What do you know about “${lesson.titleEn},” and what example could help you understand it?`,
    learningOutcomesAr: [
      lesson.focusAr,
      'ينظم المعلومات، ويستخدم مثالًا أو مصدرًا مناسبًا للتحقق منها.',
    ],
    learningOutcomesEn: [
      lesson.focusEn,
      'Organize information and use a suitable example or source to check it.',
    ],
    keyConceptsAr: [
      lesson.focusAr,
      `عنوان الدرس وصفحته في الفهرس: ص ${lesson.page}.`,
      ...(isLastLessonInUnit ? [`تقويم الوحدة في الكتاب: ص ${lesson.unit.reviewPage}.`] : []),
    ],
    keyConceptsEn: [
      lesson.focusEn,
      `Lesson heading and contents reference: p. ${lesson.page}.`,
      ...(isLastLessonInUnit ? [`Textbook unit review: p. ${lesson.unit.reviewPage}.`] : []),
    ],
    summaryAr: `${lesson.focusAr}\n\nمرجع الفهرس: ص ${lesson.page}.${isLastLessonInUnit ? ` تقويم الوحدة: ص ${lesson.unit.reviewPage}.` : ''}\n\n${sourceNoteAr}`,
    summaryEn: `${lesson.focusEn}\n\nContents reference: p. ${lesson.page}.${isLastLessonInUnit ? ` Unit review: p. ${lesson.unit.reviewPage}.` : ''}\n\n${sourceNoteEn}`,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط من إعداد المنصة: ${activityAr}\n\nمرجع الفهرس: ص ${lesson.page}.${isLastLessonInUnit ? ` تقويم الوحدة: ص ${lesson.unit.reviewPage}.` : ''}\n\n${sourceNoteAr}`,
      contentEn: `${lesson.focusEn}\n\nOriginal platform activity: ${activityEn}\n\nContents reference: p. ${lesson.page}.${isLastLessonInUnit ? ` Unit review: p. ${lesson.unit.reviewPage}.` : ''}\n\n${sourceNoteEn}`,
      diagram: {
        id: `${lectureId}-diagram`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `مخطط مفاهيمي أصلي: ${lesson.titleAr}`,
        titleEn: `Original concept diagram: ${lesson.titleEn}`,
        captionAr: 'مخطط مفاهيمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
        captionEn: 'An original platform concept diagram, not an image from the textbook.',
        diagramType: 'social_studies',
        visualSteps,
      },
    }],
    assessment: {
      id: `${lectureId}-assessment`,
      lectureId,
      titleAr: `تقويم مساند: ${lesson.titleAr}`,
      titleEn: `Supplementary check: ${lesson.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `${lectureId}-question`,
        textAr: `أي عبارة تلخص الفكرة الرئيسة لدرس «${lesson.titleAr}»؟`,
        textEn: `Which statement summarizes the main idea of “${lesson.titleEn}”?`,
        optionsAr: [
          lesson.focusAr,
          'معلومة لا ترتبط بموضوع الدرس',
          'تخمين لا يستند إلى مثال أو مصدر',
        ],
        optionsEn: [
          lesson.focusEn,
          'Information unrelated to the lesson topic',
          'A guess unsupported by an example or source',
        ],
        correctIndex: 0,
        conceptTestedAr: lesson.titleAr,
        conceptTestedEn: lesson.titleEn,
        explanationAr: 'هذا السؤال من إعداد المنصة للتدريب، وليس سؤالًا منقولًا من تقويم الكتاب.',
        explanationEn: 'This platform-authored practice question is not copied from the textbook assessment.',
        difficulty: 'easy',
      }],
    },
  };
});
