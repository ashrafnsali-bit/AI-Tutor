import type { Lecture, LectureDiagram, LectureDiagramStep, Question } from '../types';

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-lang-part1.pdf';
const sourceNoteAr =
  `المصدر: كتاب «لغتي» للصف الثالث الابتدائي، الجزء الأول من المقرر، طبعة الغلاف 1448هـ/2026م. رابط الكتاب: ${textbookUrl}. طوبقت عناوين المكونات وصفحاتها مع الفهرس المطبوع في PDF ص 6. يذكر سجل النشر الداخلي في PDF ص 2 سنة 1446هـ؛ وقد وُثّق اختلافه عن سنة الغلاف. روجعت مطالع الدروس الرئيسة في الصفحات المطبوعة 22، 34، 62، 72، 102، 115، 140، 151. لم يُراجع الكتاب كاملًا؛ الشروح والأمثلة والأنشطة والرسوم والأسئلة هنا أصلية من إعداد المنصة وليست نقلًا من الكتاب.`;
const sourceNoteEn =
  `Source: Grade 3 Lughati, Part One of the curriculum, whose cover states 1448 AH/2026. Book: ${textbookUrl}. Component titles and page references were checked against the printed contents in PDF p. 6. The internal publication record on PDF p. 2 states 1446 AH; this difference from the cover is disclosed. Openings of the main lessons on printed pp. 22, 34, 62, 72, 102, 115, 140, and 151 were reviewed. The full textbook was not reviewed; explanations, examples, activities, diagrams, and questions here are original platform material, not copied from the textbook.`;

interface ArabicComponent {
  titleAr: string;
  pages: string;
}

interface ArabicLesson {
  indexTitleAr: string;
  titleEn: string;
  pages: string;
  focusAr: string;
  focusEn: string;
  stepsAr: [string, string, string, string];
  stepsEn: [string, string, string, string];
  exampleAr: string;
  exampleEn: string;
}

interface ArabicUnit {
  titleAr: string;
  titleEn: string;
  guidePage: string;
  introduction: ArabicComponent[];
  lessons: [ArabicLesson, ArabicLesson];
  testPage: string;
  assessmentPage: string;
  question: Question;
}

const units: ArabicUnit[] = [
  {
    titleAr: 'التواصل مع الآخرين',
    titleEn: 'Communicating with Others',
    guidePage: '14',
    introduction: [
      { titleAr: 'أنشطة تمهيدية', pages: '15' },
      { titleAr: 'أُنجز مشروعي', pages: '15' },
      { titleAr: 'نص الاستماع', pages: '16' },
      { titleAr: 'النشيد', pages: '21' },
    ],
    lessons: [
      {
        indexTitleAr: 'الدرس الأول: عادل في الطائرة',
        titleEn: 'Lesson 1: Adil on the Plane',
        pages: '22',
        focusAr: 'اقرأ القصة لتتعرف إلى مواقف السفر، واستنتج من تصرفات الشخصيات كيف يظهر الاحترام ومراعاة الآخرين.',
        focusEn: 'Read a travel story and infer how the characters show respect and consideration for others.',
        stepsAr: ['أتعرف الشخصيات والمكان', 'أتابع أحداث السفر', 'ألاحظ تصرفات الشخصيات', 'أستدل على السلوك المناسب'],
        stepsEn: ['Identify the characters and setting', 'Follow the travel events', 'Notice the characters’ actions', 'Infer appropriate behavior'],
        exampleAr: 'أصف موقفًا في رحلة يحتاج فيه أحد المسافرين إلى المساعدة، وأقترح تصرفًا مهذبًا.',
        exampleEn: 'Describe a travel situation where someone needs help and suggest a considerate response.',
      },
      {
        indexTitleAr: 'الدرس الثاني: عام دراسي جديد',
        titleEn: 'Lesson 2: A New School Year',
        pages: '34',
        focusAr: 'استخرج من الحوار أفكارًا عن بداية العام الدراسي، وعبّر عن أهدافك وتعاونك مع زملائك في الصف.',
        focusEn: 'Find ideas about the start of a school year in a dialogue, then express learning goals and ways to cooperate with classmates.',
        stepsAr: ['أحدد المتحدثين', 'أستمع إلى أفكارهم', 'أصوغ هدفًا دراسيًا', 'أشارك زملائي باحترام'],
        stepsEn: ['Identify the speakers', 'Listen to their ideas', 'Set a learning goal', 'Share respectfully with classmates'],
        exampleAr: 'أذكر هدفًا أريد تحقيقه هذا العام، وخطوة أبدأ بها، وطريقة أساند بها زميلي.',
        exampleEn: 'Name a goal for the school year, a first step, and one way to support a classmate.',
      },
    ],
    testPage: '44',
    assessmentPage: '48',
    question: {
      id: 'sa-g3-arabic-u1-q1',
      textAr: 'ما التصرف الذي يدل على مراعاة الآخرين في موقف سفر؟',
      textEn: 'Which action shows consideration for others while travelling?',
      optionsAr: ['أفسح المجال لمن يحتاج إلى المساعدة', 'أزاحم المسافرين', 'أتجاهل تعليمات السلامة', 'أرفع صوتي لإزعاج الآخرين'],
      optionsEn: ['Make room for someone who needs help', 'Push through other travellers', 'Ignore safety instructions', 'Raise my voice to disturb others'],
      correctIndex: 0,
      conceptTestedAr: 'الاحترام ومراعاة الآخرين',
      conceptTestedEn: 'Respect and consideration',
      explanationAr: 'مراعاة الآخرين تظهر في التصرف بلطف ومساعدتهم عند الحاجة.',
      explanationEn: 'Consideration means behaving kindly and offering help when needed.',
      difficulty: 'easy',
    },
  },
  {
    titleAr: 'ربوع من بلادي',
    titleEn: 'Regions of My Country',
    guidePage: '54',
    introduction: [
      { titleAr: 'أنشطة تمهيدية', pages: '55' },
      { titleAr: 'أُنجز مشروعي', pages: '57' },
      { titleAr: 'نص الاستماع', pages: '58' },
      { titleAr: 'النشيد', pages: '61' },
    ],
    lessons: [
      {
        indexTitleAr: 'الدرس الأول: الرياض والملك الشجاع',
        titleEn: 'Lesson 1: Riyadh and the Brave King',
        pages: '62',
        focusAr: 'اقرأ النص للتعرف إلى مدينة الرياض والملك عبد العزيز، واستخرج معلومات وتفاصيل تدعم فهمك للنص.',
        focusEn: 'Read about Riyadh and King Abdulaziz, finding information and details that support your understanding.',
        stepsAr: ['أتعرف موضوع النص', 'أحدد الشخصيات والأماكن', 'أجمع التفاصيل', 'أجيب مستندًا إلى النص'],
        stepsEn: ['Identify the topic', 'Find the people and places', 'Gather details', 'Answer using the text'],
        exampleAr: 'أحدد معلومة عن مدينة وردت في نص، ثم أذكر العبارة التي ساعدتني على معرفتها.',
        exampleEn: 'Find a fact about a city in a passage and point to the detail that helped identify it.',
      },
      {
        indexTitleAr: 'الدرس الثاني: مصايفنا',
        titleEn: 'Lesson 2: Our Summer Resorts',
        pages: '72',
        focusAr: 'تتبع وصف المصايف السعودية في النص، واستخرج أسماء الأماكن وبعض خصائصها، ثم عبّر عن مكان تود زيارته.',
        focusEn: 'Follow descriptions of Saudi summer resorts, identify places and some of their features, and describe a place you would like to visit.',
        stepsAr: ['أحدد المكان الموصوف', 'أستخرج صفاته', 'أقارن بين الأماكن', 'أصف مكانًا بأسلوبي'],
        stepsEn: ['Identify the place described', 'Find its features', 'Compare places', 'Describe a place in my own words'],
        exampleAr: 'أصف مكانًا طبيعيًا في بلادي، وأختار من النص كلمات تساعد على توضيح الوصف.',
        exampleEn: 'Describe a natural place in my country and choose words that make the description clear.',
      },
    ],
    testPage: '82',
    assessmentPage: '87',
    question: {
      id: 'sa-g3-arabic-u2-q1',
      textAr: 'كيف تجيب عن سؤال يطلب معلومة من نص قرائي؟',
      textEn: 'How should you answer a question asking for information from a reading passage?',
      optionsAr: ['أبحث عن دليل في النص', 'أختار إجابة لا ترتبط بالنص', 'أتجاهل السؤال', 'أعتمد على التخمين فقط'],
      optionsEn: ['Find evidence in the passage', 'Choose an answer unrelated to the passage', 'Ignore the question', 'Rely only on guessing'],
      correctIndex: 0,
      conceptTestedAr: 'استخراج المعلومات من النص',
      conceptTestedEn: 'Finding information in a text',
      explanationAr: 'الرجوع إلى النص يساعد على اختيار إجابة تستند إلى المعلومات المقروءة.',
      explanationEn: 'Referring back to the passage helps ground an answer in what was read.',
      difficulty: 'easy',
    },
  },
  {
    titleAr: 'أخلاق المسلم',
    titleEn: 'A Muslim’s Good Character',
    guidePage: '94',
    introduction: [
      { titleAr: 'أنشطة تمهيدية', pages: '95' },
      { titleAr: 'أُنجز مشروعي', pages: '96' },
      { titleAr: 'نص الاستماع', pages: '97' },
      { titleAr: 'النشيد', pages: '101' },
    ],
    lessons: [
      {
        indexTitleAr: 'الدرس الأول: التعاون',
        titleEn: 'Lesson 1: Cooperation',
        pages: '102',
        focusAr: 'تابع حوار التلاميذ عن تحسين بيئة المدرسة، وحدد كيف يساعد التعاون على إنجاز عمل مشترك.',
        focusEn: 'Follow a dialogue about improving the school environment and identify how cooperation helps complete shared work.',
        stepsAr: ['أحدد الهدف المشترك', 'أستمع إلى الاقتراحات', 'أوزع الأدوار', 'أراجع ما أنجزناه'],
        stepsEn: ['Identify a shared goal', 'Listen to suggestions', 'Share the tasks', 'Review what was completed'],
        exampleAr: 'أقترح مهمة بسيطة لتحسين الصف، وأشرح كيف يمكن لزملائي التعاون لإنجازها.',
        exampleEn: 'Suggest a simple way to improve the classroom and explain how classmates can work together.',
      },
      {
        indexTitleAr: 'الدرس الثاني: الإيثار',
        titleEn: 'Lesson 2: Altruism',
        pages: '115',
        focusAr: 'اقرأ القصة، واستنتج معنى الإيثار من مواقف شخصياتها، ثم ميّز بين المساعدة والعطاء عن رضا.',
        focusEn: 'Infer the meaning of altruism from a story and distinguish willing generosity from other forms of help.',
        stepsAr: ['أتابع أحداث القصة', 'ألاحظ اختيارات الشخصيات', 'أستنتج معنى الإيثار', 'أقترح موقفًا مماثلًا'],
        stepsEn: ['Follow the story events', 'Notice the characters’ choices', 'Infer the meaning of altruism', 'Suggest a similar situation'],
        exampleAr: 'أذكر طريقة أشارك بها أداة أو وقتًا مع زميل، مع المحافظة على الاحترام.',
        exampleEn: 'Give an example of sharing a resource or time with a classmate respectfully.',
      },
    ],
    testPage: '125',
    assessmentPage: '129',
    question: {
      id: 'sa-g3-arabic-u3-q1',
      textAr: 'أي موقف يعبّر عن التعاون؟',
      textEn: 'Which situation shows cooperation?',
      optionsAr: ['يتقاسم التلاميذ الأدوار لإنجاز عمل نافع', 'يمنع كل طالب زملاءه من المشاركة', 'يترك الجميع المهمة لزميل واحد', 'يتجاهل الفريق هدفه المشترك'],
      optionsEn: ['Students share roles to complete useful work', 'Each student prevents others from helping', 'Everyone leaves the task to one classmate', 'The team ignores its shared goal'],
      correctIndex: 0,
      conceptTestedAr: 'التعاون والعمل المشترك',
      conceptTestedEn: 'Cooperation and shared work',
      explanationAr: 'يتعاون أفراد الفريق عندما يشاركون في العمل لتحقيق هدف مشترك.',
      explanationEn: 'Team members cooperate when they contribute toward a shared goal.',
      difficulty: 'easy',
    },
  },
  {
    titleAr: 'وسائل الاتصالات',
    titleEn: 'Communication Technologies',
    guidePage: '134',
    introduction: [
      { titleAr: 'أنشطة تمهيدية', pages: '135' },
      { titleAr: 'أُنجز مشروعي', pages: '136' },
      { titleAr: 'نص الاستماع', pages: '137' },
      { titleAr: 'النشيد', pages: '139' },
    ],
    lessons: [
      {
        indexTitleAr: 'الدرس الأول: الهاتف المحمول',
        titleEn: 'Lesson 1: The Mobile Phone',
        pages: '140',
        focusAr: 'اقرأ النص والحوار عن استخدام الهاتف المحمول، وحدد لماذا ينبغي مراعاة تعليمات المكان وحاجة الآخرين.',
        focusEn: 'Read about mobile-phone use and identify why a place’s instructions and other people’s needs should be respected.',
        stepsAr: ['أحدد مكان الاستخدام', 'أقرأ التعليمات', 'أوازن الحاجة والأثر', 'أختار تصرفًا مسؤولًا'],
        stepsEn: ['Identify the setting', 'Read the instructions', 'Consider needs and effects', 'Choose a responsible action'],
        exampleAr: 'أفكر قبل تشغيل الهاتف في مكان عام، وأتبع التعليمات التي تحافظ على سلامة الموجودين.',
        exampleEn: 'Before using a phone in a public place, follow instructions that help protect the people there.',
      },
      {
        indexTitleAr: 'الدرس الثاني: الأقمار الصناعية',
        titleEn: 'Lesson 2: Satellites',
        pages: '151',
        focusAr: 'تعرف إلى الأقمار الصناعية ودورها في نقل الصور والمعلومات، واربط الفكرة باستخدامات الاتصال والطقس.',
        focusEn: 'Learn how satellites relay images and information and connect the idea to communication and weather uses.',
        stepsAr: ['أتعرف القمر الصناعي', 'ألاحظ مداره', 'أتتبع انتقال المعلومات', 'أحدد استخدامًا'],
        stepsEn: ['Identify a satellite', 'Notice its orbit', 'Trace how information travels', 'Name a use'],
        exampleAr: 'أرسم مسارًا يوضح انتقال صورة من قمر صناعي إلى محطة ثم إلى جهاز يستقبلها.',
        exampleEn: 'Sketch how an image can travel from a satellite to a station and then to a receiving device.',
      },
    ],
    testPage: '162',
    assessmentPage: '165',
    question: {
      id: 'sa-g3-arabic-u4-q1',
      textAr: 'أي مما يأتي من الاستخدامات التي تساعد فيها الأقمار الصناعية؟',
      textEn: 'Which is a use supported by satellites?',
      optionsAr: ['نقل الصور والمعلومات', 'زراعة النباتات مباشرة', 'تنظيف الشوارع', 'إيقاف حركة الطائرات'],
      optionsEn: ['Relaying images and information', 'Growing plants directly', 'Cleaning streets', 'Stopping aircraft'],
      correctIndex: 0,
      conceptTestedAr: 'وسائل الاتصال والأقمار الصناعية',
      conceptTestedEn: 'Communication and satellites',
      explanationAr: 'تساعد الأقمار الصناعية على نقل الصور والمعلومات إلى أجهزة ومحطات استقبال.',
      explanationEn: 'Satellites help relay images and information to receiving stations and devices.',
      difficulty: 'easy',
    },
  },
];

const introductoryComponents: ArabicComponent[] = [
  { titleAr: 'مراجعة المكتسبات السابقة', pages: '7' },
  { titleAr: 'أتعلم فن الخط', pages: '12' },
];

export const SAUDI_G3_PRIMARY_ARABIC_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G3_PRIMARY_ARABIC_UNIT_COUNT = units.length;
export const SAUDI_G3_PRIMARY_ARABIC_LESSON_COUNT = units.reduce(
  (count, unit) => count + unit.lessons.length,
  0
);
export const SAUDI_G3_PRIMARY_ARABIC_TABLE_OF_CONTENTS = [
  ...introductoryComponents.map((component) => ({
    unitTitleAr: 'التهيئة',
    titleAr: component.titleAr,
    pages: component.pages,
  })),
  ...units.flatMap((unit, unitIndex) => [
    { unitTitleAr: unit.titleAr, titleAr: 'دليل الوحدة', pages: unit.guidePage },
    ...unit.introduction.map((component) => ({
      unitTitleAr: unit.titleAr,
      titleAr: component.titleAr,
      pages: component.pages,
    })),
    ...unit.lessons.map((lesson) => ({
      unitTitleAr: unit.titleAr,
      titleAr: lesson.indexTitleAr,
      pages: lesson.pages,
    })),
    { unitTitleAr: unit.titleAr, titleAr: `نموذج اختبار (${unitIndex + 1})`, pages: unit.testPage },
    { unitTitleAr: unit.titleAr, titleAr: `التقويم التجميعي (${unitIndex + 1})`, pages: unit.assessmentPage },
  ]),
];

const makeDiagram = (
  id: string,
  titleAr: string,
  titleEn: string,
  captionAr: string,
  captionEn: string,
  labelsAr: string[],
  labelsEn: string[]
): LectureDiagram => ({
  id,
  figureNumberAr: 'شكل تعليمي',
  figureNumberEn: 'Learning diagram',
  titleAr,
  titleEn,
  captionAr,
  captionEn,
  diagramType: 'arabic_learning_map',
  visualSteps: labelsAr.map((labelAr, index): LectureDiagramStep => ({
    labelAr,
    labelEn: labelsEn[index],
  })),
});

const prefaceLecture: Lecture = {
  id: 'sa-primary-arabic-g3-1448-preparation',
  order: 1,
  titleAr: 'التهيئة: مراجعة المكتسبات السابقة وفن الخط',
  titleEn: 'Preparation: Reviewing Prior Skills and Handwriting',
  subtitleAr: 'استعد لدراسة الوحدات الأربع بتهيئة المهارات السابقة والتدرب على الخط.',
  subtitleEn: 'Prepare for the four units by reviewing prior skills and practising handwriting.',
  descriptionAr: `${sourceNoteAr}\n\nمرجع الفهرس: مراجعة المكتسبات السابقة ص 7، وأتعلم فن الخط ص 12.`,
  descriptionEn: `${sourceNoteEn}\n\nContents references: prerequisite review p. 7; handwriting p. 12.`,
  durationMinutes: 20,
  isLocked: false,
  isCompleted: false,
  passingScoreRequired: 80,
  country: 'SA',
  subject: 'PRIMARY_ARABIC',
  gradeLevel: 'G3',
  educationType: 'PUBLIC',
  educationTrack: 'GENERAL',
  gradeLevelNameAr: 'الصف الثالث الابتدائي — لغتي، الجزء الأول',
  gradeLevelNameEn: 'Grade 3 Primary — Lughati, Part One',
  termAr: 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
  termEn: 'Part One of the curriculum — 1448 AH/2026 cover edition',
  unitTitleAr: 'التهيئة',
  unitTitleEn: 'Preparation',
  lessonNumberAr: 'تهيئة قبل الوحدة الأولى',
  lessonNumberEn: 'Preparation before Unit 1',
  warmupHookAr: 'ما المهارة التي تتذكرها من العام الماضي، وما الذي تريد تحسينه في خطك؟',
  warmupHookEn: 'Which skill do you remember from last year, and what would you like to improve in your handwriting?',
  learningOutcomesAr: ['أراجع مهارات سابقة وأحدد هدفًا للتعلم.', 'ألاحظ شكل الحروف واتجاه الكتابة على السطر.'],
  learningOutcomesEn: ['Review prior skills and set a learning goal.', 'Notice letter forms and writing direction on the line.'],
  keyConceptsAr: introductoryComponents.map(({ titleAr, pages }) => `${titleAr} (ص ${pages})`),
  keyConceptsEn: ['Prerequisite review (p. 7)', 'Handwriting practice (p. 12)'],
  summaryAr: 'مراجعة المهارات السابقة والتدرب على الخط قبل بدء وحدات الكتاب.',
  summaryEn: 'Review prior skills and practise handwriting before beginning the textbook units.',
  sections: [
    {
      titleAr: 'مراجعة المكتسبات السابقة',
      titleEn: 'Reviewing Prior Skills',
      contentAr: 'أحل أنشطة قصيرة لأتذكر ما تعلمته، وأحدد مهارة أحتاج إلى مراجعتها.\n\nمرجع الكتاب: ص 7.',
      contentEn: 'Complete short activities to recall prior learning and identify a skill to revisit.\n\nTextbook reference: p. 7.',
      diagram: makeDiagram(
        'sa-g3-arabic-1448-preparation-review',
        'خطوات المراجعة',
        'Review Steps',
        'مخطط أصلي من إعداد المنصة.',
        'An original platform-created diagram.',
        ['أتذكر', 'أجيب', 'أتحقق', 'أحدد هدفًا'],
        ['Recall', 'Answer', 'Check', 'Set a goal']
      ),
    },
    {
      titleAr: 'أتعلم فن الخط',
      titleEn: 'Learning Handwriting',
      contentAr: 'ألاحظ نموذج الحرف، وأتتبع اتجاهه، ثم أكتبه على السطر وأراجع وضوحه.\n\nمرجع الكتاب: ص 12.',
      contentEn: 'Observe a letter model, follow its direction, write it on the line, and check its clarity.\n\nTextbook reference: p. 12.',
      diagram: makeDiagram(
        'sa-g3-arabic-1448-preparation-handwriting',
        'أتدرب على الخط',
        'Handwriting Practice',
        'خطوات تدريبية أصلية من إعداد المنصة.',
        'Original practice steps created by the platform.',
        ['ألاحظ النموذج', 'أتتبع الاتجاه', 'أكتب على السطر', 'أراجع'],
        ['Observe the model', 'Follow the direction', 'Write on the line', 'Review']
      ),
    },
  ],
  assessment: {
    id: 'sa-primary-arabic-g3-1448-preparation-check',
    lectureId: 'sa-primary-arabic-g3-1448-preparation',
    titleAr: 'تحقق من الاستعداد',
    titleEn: 'Preparation Check',
    passingScore: 80,
    questions: [{
      id: 'sa-g3-arabic-preparation-q1',
      textAr: 'ما الخطوة المناسبة بعد كتابة الحرف؟',
      textEn: 'What is a helpful step after writing a letter?',
      optionsAr: ['أراجع وضوحه وموقعه على السطر', 'أتركه دون ملاحظة', 'أغير اتجاه الكتابة', 'أحذف الكلمة'],
      optionsEn: ['Check its clarity and placement on the line', 'Leave it unchecked', 'Change the writing direction', 'Delete the word'],
      correctIndex: 0,
      conceptTestedAr: 'مراجعة الكتابة',
      conceptTestedEn: 'Reviewing handwriting',
      explanationAr: 'المراجعة تساعد على ملاحظة شكل الحرف وموضعه وتحسين الكتابة.',
      explanationEn: 'Review helps check letter shape and placement and improve handwriting.',
      difficulty: 'easy',
    }],
  },
};

const unitLectures: Lecture[] = units.map((unit, unitIndex) => {
  const order = unitIndex + 2;
  const lectureId = `sa-primary-arabic-g3-1448-unit-${unitIndex + 1}`;
  const unitNumberAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'][unitIndex];
  const componentReferencesAr = [
    `دليل الوحدة (ص ${unit.guidePage})`,
    ...unit.introduction.map((component) => `${component.titleAr} (ص ${component.pages})`),
    ...unit.lessons.map((lesson) => `${lesson.indexTitleAr} (ص ${lesson.pages})`),
    `نموذج الاختبار (ص ${unit.testPage})`,
    `التقويم التجميعي (ص ${unit.assessmentPage})`,
  ];
  const introductionPages = unit.introduction.map((component) => component.pages).join('، ');
  const sections = [
    {
      titleAr: `مدخل الوحدة: ${unit.titleAr}`,
      titleEn: `Unit Introduction: ${unit.titleEn}`,
      contentAr: `يعرض مدخل الوحدة أنشطتها التمهيدية والمشروع ونص الاستماع والنشيد في الصفحات ${introductionPages}. استعد للموضوع، وأنصت، وشارك أفكارك، ثم اربط ما تعلمته بمواقف الحياة.\n\n${sourceNoteAr}`,
      contentEn: `The unit introduction includes its opening activities, project, listening text, and chant on pp. ${introductionPages}. Preview the topic, listen, share ideas, and connect learning to everyday situations.\n\n${sourceNoteEn}`,
      diagram: makeDiagram(
        `${lectureId}-introduction`,
        `خريطة تعلم: ${unit.titleAr}`,
        `Learning Map: ${unit.titleEn}`,
        'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        'An original platform-created diagram, not an image from the textbook.',
        ['أتهيأ للموضوع', 'أستمع وألاحظ', 'أقرأ وأفهم', 'أشارك وأعبّر'],
        ['Preview the topic', 'Listen and notice', 'Read and understand', 'Share and express']
      ),
    },
    ...unit.lessons.map((lesson, lessonIndex) => ({
      titleAr: lesson.indexTitleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص ${lesson.pages}. هذا شرح وتطبيق أصليان مبنيان على عنوان الدرس ومطلع صفحته، وليس نقلًا من متن الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.pages}. This original explanation and practice are based on the lesson heading and opening page, not copied from the textbook text.`,
      diagram: makeDiagram(
        `${lectureId}-lesson-${lessonIndex + 1}`,
        `تصور بصري: ${lesson.indexTitleAr}`,
        `Visual Guide: ${lesson.titleEn}`,
        'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        'An original platform-created diagram, not an image from the textbook.',
        lesson.stepsAr,
        lesson.stepsEn
      ),
    })),
    {
      titleAr: 'نموذج الاختبار والتقويم التجميعي',
      titleEn: 'Test Model and Cumulative Assessment',
      contentAr: `تدرّب على استرجاع أفكار الوحدة وتطبيقها، ثم راجع إجابتك.\n\nمرجع الكتاب: نموذج الاختبار ص ${unit.testPage}، والتقويم التجميعي ص ${unit.assessmentPage}.`,
      contentEn: `Practise recalling and applying unit ideas, then review your answer.\n\nTextbook references: test model p. ${unit.testPage}; cumulative assessment p. ${unit.assessmentPage}.`,
      diagram: makeDiagram(
        `${lectureId}-review`,
        'أراجع تعلمي',
        'Reviewing Learning',
        'تسلسل مراجعة أصلي من إعداد المنصة.',
        'An original platform-created review sequence.',
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
    subtitleAr: `لغتي — الصف الثالث الابتدائي — الجزء الأول`,
    subtitleEn: 'Lughati — Grade 3 Primary — Part One',
    descriptionAr: `${sourceNoteAr}\n\nمكونات الوحدة وصفحاتها: ${componentReferencesAr.join('؛ ')}.`,
    descriptionEn: `${sourceNoteEn}\n\nUnit components and pages: ${componentReferencesAr.join('; ')}.`,
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'الصف الثالث الابتدائي — لغتي',
    gradeLevelNameEn: 'Grade 3 Primary — Lughati',
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

export const SAUDI_G3_PRIMARY_ARABIC_LECTURES: Lecture[] = [
  prefaceLecture,
  ...unitLectures,
];
