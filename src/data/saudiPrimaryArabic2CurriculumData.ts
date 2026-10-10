import type { Lecture, LectureDiagram, LectureDiagramStep, Question } from '../types';

export const SAUDI_G2_PRIMARY_ARABIC_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-lang.pdf';

const sourceNoteAr =
  `المصدر: كتاب «لغتي» للصف الثاني الابتدائي، الجزء الأول من المقرر. يذكر الغلاف طبعة 1448هـ/2026م، ويذكر سجل النشر الداخلي في PDF ص 2 سنة 1446هـ؛ أُظهر الاختلاف دون حسمه. طوبقت عناوين المكونات وصفحاتها مع الفهرس المطبوع في PDF ص 6، وروجعت مطالع الدروس الرئيسة في الصفحات المطبوعة 27، 36، 60، 71، 94، 105، 126، 137. لم يُراجع الكتاب كاملًا؛ الشروح والأمثلة والأنشطة والرسوم والأسئلة هنا أصلية من إعداد المنصة وليست نقلًا من الكتاب أو صوره. رابط الكتاب: ${SAUDI_G2_PRIMARY_ARABIC_TEXTBOOK_URL}.`;
const sourceNoteEn =
  `Source: Grade 2 Lughati, Part One of the curriculum. The cover states 1448 AH/2026 CE, while the internal publication record on PDF p. 2 states 1446 AH; the discrepancy is disclosed without resolving it. Component titles and page references were checked against the printed contents on PDF p. 6, and main lesson openings on printed pp. 27, 36, 60, 71, 94, 105, 126, and 137 were reviewed. The full textbook was not reviewed; explanations, examples, activities, diagrams, and questions are original platform material, not copied from the textbook or its images. Book: ${SAUDI_G2_PRIMARY_ARABIC_TEXTBOOK_URL}.`;

interface ArabicComponent {
  titleAr: string;
  page: number;
}

interface ArabicLesson {
  titleAr: string;
  titleEn: string;
  page: number;
  focusAr: string;
  focusEn: string;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
}

interface ArabicUnit {
  titleAr: string;
  titleEn: string;
  guidePage: number;
  introduction: ArabicComponent[];
  lessons: [ArabicLesson, ArabicLesson];
  assessmentPage: number;
  question: Question;
}

const makeQuestion = (
  id: string,
  textAr: string,
  textEn: string,
  correctAr: string,
  correctEn: string,
  incorrectAr: [string, string, string],
  incorrectEn: [string, string, string],
  conceptAr: string,
  conceptEn: string,
  explanationAr: string,
  explanationEn: string
): Question => ({
  id,
  textAr,
  textEn,
  optionsAr: [correctAr, ...incorrectAr],
  optionsEn: [correctEn, ...incorrectEn],
  correctIndex: 0,
  conceptTestedAr: conceptAr,
  conceptTestedEn: conceptEn,
  explanationAr,
  explanationEn,
  difficulty: 'easy',
});

const units: ArabicUnit[] = [
  {
    titleAr: 'أقاربي',
    titleEn: 'My Relatives',
    guidePage: 18,
    introduction: [
      { titleAr: 'نشاطات التهيئة', page: 19 },
      { titleAr: 'أنجز مشروعي', page: 21 },
      { titleAr: 'نص الاستماع', page: 22 },
      { titleAr: 'النشيد: جدتي', page: 26 },
    ],
    lessons: [
      {
        titleAr: 'الدرس الأول: صلة الرحم',
        titleEn: 'Lesson 1: Maintaining Family Ties',
        page: 27,
        focusAr: 'تأمل مواقف التواصل مع الأقارب، وتدرب على التعبير عن الاهتمام بهم واختيار كلمات لطيفة عند الحديث معهم.',
        focusEn: 'Consider ways to stay connected with relatives and practise showing care and speaking kindly with them.',
        stepsAr: ['أتعرف الشخصيات والموقف', 'ألاحظ مشاعر الأقارب', 'أختار كلمة لطيفة', 'أقترح طريقة للتواصل'],
        stepsEn: ['Identify the people and situation', 'Notice relatives’ feelings', 'Choose kind words', 'Suggest a way to stay in touch'],
      },
      {
        titleAr: 'الدرس الثاني: عذرًا يا جدي',
        titleEn: 'Lesson 2: I’m Sorry, Grandfather',
        page: 36,
        focusAr: 'تتبع الحوار وموقف الاعتذار، وتعرف كيف نُصغي إلى الكبير ونعتذر بصدق عندما نخطئ.',
        focusEn: 'Follow a dialogue about apologizing, listening to an older family member, and making a sincere apology after a mistake.',
        stepsAr: ['أحدد ما حدث', 'أستمع إلى النصيحة', 'أعتذر بوضوح', 'أختار تصرفًا يصلح الموقف'],
        stepsEn: ['Identify what happened', 'Listen to the advice', 'Apologize clearly', 'Choose an action to make things right'],
      },
    ],
    assessmentPage: 47,
    question: makeQuestion(
      'sa-g2-arabic-u1-q1',
      'ما التصرف الذي يساعد على صلة الرحم؟',
      'Which action helps maintain family ties?',
      'أتواصل مع أقاربي وأعاملهم بلطف',
      'Stay in touch with relatives and treat them kindly',
      ['أتجاهلهم دائمًا', 'أقاطع حديثهم', 'أستخدم كلمات جارحة'],
      ['Always ignore them', 'Interrupt them', 'Use hurtful words'],
      'صلة الرحم',
      'Maintaining family ties',
      'التواصل اللطيف والاهتمام يساعدان على تقوية العلاقة بالأقارب.',
      'Kind communication and care help strengthen relationships with relatives.',
    ),
  },
  {
    titleAr: 'أصدقائي وجيراني',
    titleEn: 'My Friends and Neighbors',
    guidePage: 54,
    introduction: [
      { titleAr: 'نشاطات التهيئة', page: 55 },
      { titleAr: 'أنجز مشروعي', page: 55 },
      { titleAr: 'نص الاستماع', page: 56 },
      { titleAr: 'النشيد: الجار والصديق', page: 59 },
    ],
    lessons: [
      {
        titleAr: 'الدرس الأول: الصديقان',
        titleEn: 'Lesson 1: The Two Friends',
        page: 60,
        focusAr: 'اقرأ عن موقف بين صديقين، واستنتج كيف يساعد التعاون والإنصات على حل موقف مشترك.',
        focusEn: 'Read about two friends and infer how cooperation and listening can help resolve a shared situation.',
        stepsAr: ['أتعرف الصديقين', 'أحدد المشكلة', 'أستمع إلى الرأيين', 'أقترح حلًا منصفًا'],
        stepsEn: ['Identify the friends', 'Find the problem', 'Listen to both views', 'Suggest a fair solution'],
      },
      {
        titleAr: 'الدرس الثاني: الجار الصغير',
        titleEn: 'Lesson 2: The Young Neighbor',
        page: 71,
        focusAr: 'تأمل مواقف الجوار، وتدرب على التحية والمساعدة والمحافظة على الهدوء واحترام خصوصية الآخرين.',
        focusEn: 'Consider neighborly situations and practise greeting, helping, keeping the peace, and respecting others’ privacy.',
        stepsAr: ['ألاحظ موقف الجوار', 'أتعرف حاجة الجار', 'أختار مساعدة مناسبة', 'أحترم راحته وخصوصيته'],
        stepsEn: ['Notice the neighborly situation', 'Recognize a neighbor’s need', 'Choose suitable help', 'Respect their comfort and privacy'],
      },
    ],
    assessmentPage: 82,
    question: makeQuestion(
      'sa-g2-arabic-u2-q1',
      'كيف يكون التعامل الطيب مع الجار؟',
      'What is a kind way to treat a neighbor?',
      'أحييه وأساعده مع احترام خصوصيته',
      'Greet and help them while respecting their privacy',
      ['أزعجه في وقت راحته', 'أدخل مكانه دون إذن', 'أتجاهل حاجته إلى المساعدة'],
      ['Disturb them while they rest', 'Enter their space without permission', 'Ignore their need for help'],
      'حسن الجوار',
      'Being a good neighbor',
      'حسن الجوار يجمع بين اللطف والمساعدة واحترام الخصوصية.',
      'Good neighborly conduct combines kindness, help, and respect for privacy.',
    ),
  },
  {
    titleAr: 'وطني السعودية',
    titleEn: 'My Country, Saudi Arabia',
    guidePage: 88,
    introduction: [
      { titleAr: 'نشاطات التهيئة', page: 89 },
      { titleAr: 'أنجز مشروعي', page: 90 },
      { titleAr: 'نص الاستماع', page: 91 },
      { titleAr: 'النشيد: وطني السعودية', page: 93 },
    ],
    lessons: [
      {
        titleAr: 'الدرس الأول: مدينتان مقدستان',
        titleEn: 'Lesson 1: Two Holy Cities',
        page: 94,
        focusAr: 'اقرأ عن مكة المكرمة والمدينة المنورة، واستخرج معلومات من النص وأجب عن الأسئلة مستندًا إلى ما قرأت.',
        focusEn: 'Read about Makkah and Madinah, find information in the passage, and answer questions using what you read.',
        stepsAr: ['أتعرف المدينتين', 'أقرأ الفكرة', 'أبحث عن معلومة', 'أجيب بدليل من النص'],
        stepsEn: ['Identify the two cities', 'Read for the main idea', 'Find a detail', 'Answer with evidence from the text'],
      },
      {
        titleAr: 'الدرس الثاني: علم بلادي',
        titleEn: 'Lesson 2: My Country’s Flag',
        page: 105,
        focusAr: 'تعرف إلى علم المملكة بوصفه رمزًا وطنيًا، ولاحظ معلومات النص وتحدث عن احترام الرموز الوطنية.',
        focusEn: 'Learn about the Kingdom’s flag as a national symbol, find details in the text, and discuss respect for national symbols.',
        stepsAr: ['ألاحظ الرمز الوطني', 'أقرأ المعلومات', 'أستخرج وصفًا من النص', 'أعبر عن الاحترام'],
        stepsEn: ['Notice the national symbol', 'Read the information', 'Find a description in the text', 'Express respect'],
      },
    ],
    assessmentPage: 114,
    question: makeQuestion(
      'sa-g2-arabic-u3-q1',
      'ما المدينتان المقدستان اللتان يتناولهما الدرس؟',
      'Which two holy cities does the lesson discuss?',
      'مكة المكرمة والمدينة المنورة',
      'Makkah and Madinah',
      ['الرياض وجدة', 'الدمام وأبها', 'تبوك والطائف'],
      ['Riyadh and Jeddah', 'Dammam and Abha', 'Tabuk and Taif'],
      'مدن المملكة',
      'Cities of the Kingdom',
      'يتناول الدرس مكة المكرمة والمدينة المنورة، ويطلب فهم المعلومات الواردة في النص.',
      'The lesson discusses Makkah and Madinah and asks learners to understand information in the passage.',
    ),
  },
  {
    titleAr: 'محاصيل من بلادي',
    titleEn: 'Crops from My Country',
    guidePage: 120,
    introduction: [
      { titleAr: 'نشاطات التهيئة', page: 121 },
      { titleAr: 'أنجز مشروعي', page: 122 },
      { titleAr: 'نص الاستماع', page: 123 },
      { titleAr: 'النشيد: هيا نزرع', page: 125 },
    ],
    lessons: [
      {
        titleAr: 'الدرس الأول: رحلة حبة قمح',
        titleEn: 'Lesson 1: The Journey of a Wheat Grain',
        page: 126,
        focusAr: 'تتبع مراحل رحلة حبة القمح من الزراعة إلى الاستفادة منها، ورتب الأحداث اعتمادًا على النص.',
        focusEn: 'Follow a wheat grain’s journey from planting to its use and put the events in order using the text.',
        stepsAr: ['أتعرف بداية الرحلة', 'أرتب مراحل النمو', 'أتابع الحصاد', 'أذكر كيف ننتفع بالمحصول'],
        stepsEn: ['Identify how the journey begins', 'Order the growing stages', 'Follow the harvest', 'Describe how the crop is used'],
      },
      {
        titleAr: 'الدرس الثاني: من أنا؟',
        titleEn: 'Lesson 2: Who Am I?',
        page: 137,
        focusAr: 'اقرأ الوصف وابحث عن الكلمات والقرائن التي تساعدك على معرفة المقصود، ثم اشرح كيف وصلت إلى إجابتك.',
        focusEn: 'Read a description, find clues that help identify what it describes, and explain how you reached your answer.',
        stepsAr: ['أقرأ الوصف', 'أحدد الكلمات الدالة', 'أقارن القرائن', 'أستنتج المقصود'],
        stepsEn: ['Read the description', 'Find clue words', 'Compare the clues', 'Infer what is described'],
      },
    ],
    assessmentPage: 147,
    question: makeQuestion(
      'sa-g2-arabic-u4-q1',
      'ما الخطوة التي تساعد على فهم رحلة حبة القمح؟',
      'What helps you understand the journey of a wheat grain?',
      'ترتيب مراحلها بالاستعانة بالنص',
      'Order its stages using the passage',
      ['تجاهل ترتيب الأحداث', 'اختيار إجابة بلا دليل', 'حذف الكلمات الدالة'],
      ['Ignore the order of events', 'Choose an answer without evidence', 'Remove the clue words'],
      'ترتيب الأحداث',
      'Sequencing events',
      'ترتيب المراحل يساعد على فهم انتقال حبة القمح من الزراعة إلى الاستفادة منها.',
      'Sequencing stages helps explain how a wheat grain moves from planting to use.',
    ),
  },
];

export const SAUDI_G2_PRIMARY_ARABIC_UNIT_COUNT = units.length;
export const SAUDI_G2_PRIMARY_ARABIC_LESSON_COUNT = units.reduce(
  (count, unit) => count + unit.lessons.length,
  0
);

export const SAUDI_G2_PRIMARY_ARABIC_TABLE_OF_CONTENTS = [
  { unitTitleAr: 'التهيئة', titleAr: 'مراجعة مكتسباتي السابقة', page: 7 },
  { unitTitleAr: 'التهيئة', titleAr: 'أتعلم فن الخط', page: 16 },
  ...units.flatMap((unit) => [
    { unitTitleAr: unit.titleAr, titleAr: 'دليل الوحدة', page: unit.guidePage },
    ...unit.introduction.map((component) => ({
      unitTitleAr: unit.titleAr,
      titleAr: component.titleAr,
      page: component.page,
    })),
    ...unit.lessons.map((lesson) => ({
      unitTitleAr: unit.titleAr,
      titleAr: lesson.titleAr,
      page: lesson.page,
    })),
    {
      unitTitleAr: unit.titleAr,
      titleAr: `التقويم التجميعي (${units.indexOf(unit) + 1})`,
      page: unit.assessmentPage,
    },
  ]),
  { unitTitleAr: 'الملحق', titleAr: 'أنا أقرأ', page: 151 },
];

const makeDiagram = (
  id: string,
  titleAr: string,
  titleEn: string,
  labelsAr: string[],
  labelsEn: string[]
): LectureDiagram => ({
  id,
  figureNumberAr: 'شكل تعليمي',
  figureNumberEn: 'Learning diagram',
  titleAr,
  titleEn,
  captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
  captionEn: 'An original platform-created learning diagram, not an image from the textbook.',
  diagramType: 'arabic_learning_map',
  visualSteps: labelsAr.map((labelAr, index): LectureDiagramStep => ({
    labelAr,
    labelEn: labelsEn[index],
  })),
});

const preparationId = 'sa-primary-arabic-g2-1448-preparation';
const preparationLecture: Lecture = {
  id: preparationId,
  order: 1,
  titleAr: 'التهيئة: مراجعة المكتسبات السابقة وفن الخط',
  titleEn: 'Preparation: Reviewing Prior Skills and Handwriting',
  subtitleAr: 'راجع ما تعلمته وتدرب على الخط قبل بدء وحدات لغتي.',
  subtitleEn: 'Review prior learning and practise handwriting before starting Lughati units.',
  descriptionAr: `${sourceNoteAr}\n\nمرجع الفهرس: مراجعة المكتسبات السابقة ص 7، وأتعلم فن الخط ص 16.`,
  descriptionEn: `${sourceNoteEn}\n\nContents references: prior-learning review p. 7; handwriting p. 16.`,
  durationMinutes: 20,
  isLocked: false,
  isCompleted: false,
  passingScoreRequired: 80,
  country: 'SA',
  subject: 'PRIMARY_ARABIC',
  gradeLevel: 'G2',
  educationType: 'PUBLIC',
  educationTrack: 'GENERAL',
  gradeLevelNameAr: 'الصف الثاني الابتدائي — لغتي، الجزء الأول',
  gradeLevelNameEn: 'Grade 2 Primary — Lughati, Part One',
  termAr: 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
  termEn: 'Part One of the curriculum — 1448 AH/2026 cover edition',
  unitTitleAr: 'التهيئة',
  unitTitleEn: 'Preparation',
  lessonNumberAr: 'تهيئة قبل الوحدة الأولى',
  lessonNumberEn: 'Preparation before Unit 1',
  warmupHookAr: 'ما المهارة التي تتذكرها من تعلمك السابق، وما الذي تريد تحسينه في خطك؟',
  warmupHookEn: 'Which prior skill do you remember, and what would you like to improve in your handwriting?',
  learningOutcomesAr: ['أراجع مهارة سابقة وأحدد هدفًا للتعلم.', 'ألاحظ شكل الحرف وأكتبه بوضوح على السطر.'],
  learningOutcomesEn: ['Review a prior skill and set a learning goal.', 'Notice a letter form and write it clearly on the line.'],
  keyConceptsAr: ['مراجعة المكتسبات السابقة (ص 7)', 'أتعلم فن الخط (ص 16)'],
  keyConceptsEn: ['Prior-learning review (p. 7)', 'Handwriting practice (p. 16)'],
  summaryAr: 'استرجاع المهارات السابقة والتدرب على الخط قبل بدء وحدات الكتاب.',
  summaryEn: 'Recall prior skills and practise handwriting before beginning the textbook units.',
  sections: [
    {
      titleAr: 'مراجعة المكتسبات السابقة',
      titleEn: 'Reviewing Prior Skills',
      contentAr: 'أحل أنشطة قصيرة لأتذكر ما تعلمته، وأحدد مهارة أحتاج إلى مراجعتها.\n\nمرجع الكتاب: ص 7.',
      contentEn: 'Complete short activities to recall prior learning and identify a skill to revisit.\n\nTextbook reference: p. 7.',
      diagram: makeDiagram(
        `${preparationId}-review`,
        'خطوات المراجعة',
        'Review Steps',
        ['أتذكر', 'أجيب', 'أتحقق', 'أحدد هدفًا'],
        ['Recall', 'Answer', 'Check', 'Set a goal']
      ),
    },
    {
      titleAr: 'أتعلم فن الخط',
      titleEn: 'Learning Handwriting',
      contentAr: 'ألاحظ نموذج الحرف، وأتتبع اتجاهه، ثم أكتبه على السطر وأراجع وضوحه.\n\nمرجع الكتاب: ص 16.',
      contentEn: 'Observe a letter model, follow its direction, write it on the line, and check its clarity.\n\nTextbook reference: p. 16.',
      diagram: makeDiagram(
        `${preparationId}-handwriting`,
        'أتدرب على الخط',
        'Handwriting Practice',
        ['ألاحظ النموذج', 'أتتبع الاتجاه', 'أكتب على السطر', 'أراجع'],
        ['Observe the model', 'Follow the direction', 'Write on the line', 'Review']
      ),
    },
  ],
  assessment: {
    id: `${preparationId}-check`,
    lectureId: preparationId,
    titleAr: 'تحقق من الاستعداد',
    titleEn: 'Preparation Check',
    passingScore: 80,
    questions: [{
      id: 'sa-g2-arabic-preparation-q1',
      textAr: 'ما الخطوة المناسبة بعد كتابة الحرف؟',
      textEn: 'What is a helpful step after writing a letter?',
      optionsAr: ['أراجع وضوحه وموقعه على السطر', 'أتركه دون ملاحظة', 'أغير اتجاه الكتابة', 'أحذف الكلمة'],
      optionsEn: ['Check its clarity and placement on the line', 'Leave it unchecked', 'Change the writing direction', 'Delete the word'],
      correctIndex: 0,
      conceptTestedAr: 'مراجعة الكتابة',
      conceptTestedEn: 'Reviewing handwriting',
      explanationAr: 'تساعد المراجعة على ملاحظة شكل الحرف وموضعه وتحسين الكتابة.',
      explanationEn: 'Review helps check letter shape and placement and improve handwriting.',
      difficulty: 'easy',
    }],
  },
};

const unitLectures: Lecture[] = units.map((unit, unitIndex) => {
  const order = unitIndex + 2;
  const lectureId = `sa-primary-arabic-g2-1448-unit-${unitIndex + 1}`;
  const unitNumberAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'][unitIndex];
  const componentReferencesAr = [
    `دليل الوحدة (ص ${unit.guidePage})`,
    ...unit.introduction.map((component) => `${component.titleAr} (ص ${component.page})`),
    ...unit.lessons.map((lesson) => `${lesson.titleAr} (ص ${lesson.page})`),
    `التقويم التجميعي (${unitIndex + 1}) (ص ${unit.assessmentPage})`,
  ];
  const introductionPages = unit.introduction.map((component) => component.page).join('، ');
  const sections = [
    {
      titleAr: `مدخل الوحدة: ${unit.titleAr}`,
      titleEn: `Unit Introduction: ${unit.titleEn}`,
      contentAr: `يضم مدخل الوحدة أنشطة التهيئة والمشروع ونص الاستماع والنشيد في الصفحات ${introductionPages}. استعد للموضوع، وأنصت، وشارك أفكارك، ثم اربط ما تعلمته بمواقف الحياة.\n\n${sourceNoteAr}`,
      contentEn: `The unit opening includes preparation activities, a project, a listening text, and a chant on pp. ${introductionPages}. Preview the topic, listen, share ideas, and connect learning to everyday situations.\n\n${sourceNoteEn}`,
      diagram: makeDiagram(
        `${lectureId}-introduction`,
        `خريطة تعلم: ${unit.titleAr}`,
        `Learning Map: ${unit.titleEn}`,
        ['أتهيأ للموضوع', 'أستمع وألاحظ', 'أقرأ وأفهم', 'أشارك وأعبّر'],
        ['Preview the topic', 'Listen and notice', 'Read and understand', 'Share and express']
      ),
    },
    ...unit.lessons.map((lesson, lessonIndex) => ({
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص ${lesson.page}. هذا شرح وتطبيق أصليان مبنيان على عنوان الدرس ومطلع صفحته، وليس نقلًا من متن الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.page}. This original explanation and practice are based on the lesson heading and opening page, not copied from the textbook text.`,
      diagram: makeDiagram(
        `${lectureId}-lesson-${lessonIndex + 1}`,
        `تصور بصري: ${lesson.titleAr}`,
        `Visual Guide: ${lesson.titleEn}`,
        lesson.stepsAr,
        lesson.stepsEn
      ),
    })),
    {
      titleAr: 'التقويم التجميعي',
      titleEn: 'Cumulative Review',
      contentAr: `تدرب على استرجاع أفكار الوحدة وتطبيقها، ثم راجع إجابتك.\n\nمرجع الكتاب: التقويم التجميعي (${unitIndex + 1}) ص ${unit.assessmentPage}.`,
      contentEn: `Practise recalling and applying unit ideas, then review your answer.\n\nTextbook reference: cumulative review (${unitIndex + 1}), p. ${unit.assessmentPage}.`,
      diagram: makeDiagram(
        `${lectureId}-review`,
        'أراجع تعلمي',
        'Reviewing Learning',
        ['أسترجع الفكرة', 'أبحث عن دليل', 'أجيب', 'أراجع'],
        ['Recall the idea', 'Find evidence', 'Answer', 'Review']
      ),
    },
  ];

  return {
    id: lectureId,
    order,
    titleAr: `الوحدة ${unitNumberAr}: ${unit.titleAr}`,
    titleEn: `Unit ${unitIndex + 1}: ${unit.titleEn}`,
    subtitleAr: 'لغتي — الصف الثاني الابتدائي — الجزء الأول',
    subtitleEn: 'Lughati — Grade 2 Primary — Part One',
    descriptionAr: `${sourceNoteAr}\n\nمكونات الوحدة وصفحاتها: ${componentReferencesAr.join('؛ ')}.`,
    descriptionEn: `${sourceNoteEn}\n\nUnit components and pages: ${componentReferencesAr.join('; ')}.`,
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'الصف الثاني الابتدائي — لغتي',
    gradeLevelNameEn: 'Grade 2 Primary — Lughati',
    ministryAr: 'وزارة التعليم السعودية — كتاب لغتي',
    ministryEn: 'Saudi Ministry of Education — Lughati textbook',
    termAr: 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Part One of the curriculum — 1448 AH/2026 cover edition',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `${unit.titleAr} — درسان`,
    lessonNumberEn: `${unit.titleEn} — 2 lessons`,
    warmupHookAr: `ما الكلمات أو المواقف التي تعرفها عن «${unit.titleAr}»؟`,
    warmupHookEn: `What words or situations do you already know about “${unit.titleEn}”?`,
    learningOutcomesAr: unit.lessons.map((lesson) => lesson.focusAr),
    learningOutcomesEn: unit.lessons.map((lesson) => lesson.focusEn),
    keyConceptsAr: componentReferencesAr,
    keyConceptsEn: componentReferencesAr,
    summaryAr: `${unit.lessons.map((lesson) => lesson.focusAr).join(' ')}\n\n${sourceNoteAr}`,
    summaryEn: `${unit.lessons.map((lesson) => lesson.focusEn).join(' ')}\n\n${sourceNoteEn}`,
    sections,
    assessment: {
      id: `${lectureId}-assessment`,
      lectureId,
      titleAr: `تقويم الوحدة ${unitNumberAr}: ${unit.titleAr}`,
      titleEn: `Unit ${unitIndex + 1} Check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question],
    },
  };
});

export const SAUDI_G2_PRIMARY_ARABIC_LECTURES: Lecture[] = [
  preparationLecture,
  ...unitLectures,
];
