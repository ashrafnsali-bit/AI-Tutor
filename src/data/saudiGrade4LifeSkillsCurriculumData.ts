import type { Lecture, LectureDiagramStep, Question } from '../types';

interface LifeSkillsLesson {
  titleAr: string;
  titleEn: string;
  page: number;
  focusAr: string;
  focusEn: string;
  visualSteps: [string, string][];
}

interface LifeSkillsUnit {
  titleAr: string;
  titleEn: string;
  lessons: LifeSkillsLesson[];
  question: Question;
}

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-tfml.pdf';
const sourceNoteAr =
  'المصدر: كتاب المهارات الحياتية والأسرية للصف الرابع الابتدائي، التعليم العام، طبعة الغلاف 1448هـ/2026م. طوبقت الوحدات والدروس والصفحات المطبوعة مع فهرس الكتاب (PDF ص 7)، وتؤكد صفحة PDF 6 أن هذا الجزء الأول. يذكر سجل النشر الداخلي في PDF ص 2 سنة 1446هـ؛ وقد أُظهر هذا الاختلاف عن سنة الغلاف. روجعت مطالع الدروس في الصفحات المطبوعة 11 و18 و27 و43 و47 و61 و73 و78 و93 و101. دليل الأسرة مادة مساندة وليس درسًا مفهرسًا. الشروح والأنشطة والرسوم والتقويمات هنا أصلية من إعداد المنصة وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Source: the Grade 4 general-education Life and Family Skills textbook, whose cover states 1448 AH/2026. Unit and lesson titles and printed page references were checked against the contents (PDF p. 7), and PDF p. 6 identifies this as Part One. The internal publication record on PDF p. 2 states 1446 AH; this difference from the cover is disclosed. Lesson openings on printed pp. 11, 18, 27, 43, 47, 61, 73, 78, 93, and 101 were reviewed. The family guide is supplementary, not an indexed lesson. Explanations, activities, diagrams, and assessments here are original platform material, not copied from the textbook.';

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

const units: LifeSkillsUnit[] = [
  {
    titleAr: 'صحتي وسلامتي',
    titleEn: 'My Health and Safety',
    lessons: [
      {
        titleAr: 'نظافة الجسم والسلامة أثناء الاستحمام',
        titleEn: 'Body Hygiene and Safety While Bathing',
        page: 11,
        focusAr: 'رتب خطوات النظافة الشخصية عند الاستحمام، وانتبه إلى سلامة المكان واطلب مساعدة شخص بالغ عند الحاجة.',
        focusEn: 'Sequence personal-hygiene steps while bathing, keep the area safe, and ask an adult for help when needed.',
        visualSteps: [
          ['جهز أدوات النظافة', 'Prepare hygiene items'],
          ['تحقق من سلامة المكان', 'Check that the area is safe'],
          ['نظف الجسم بلطف', 'Wash gently'],
          ['جفف الجسم ورتب الأدوات', 'Dry off and put items away'],
        ],
      },
      {
        titleAr: 'سلامة العينين والأذنين',
        titleEn: 'Eye and Ear Safety',
        page: 18,
        focusAr: 'تعرف عادات تحافظ على العينين والأذنين، وتجنب إدخال الأدوات أو الأجسام فيهما وأخبر شخصًا بالغًا عن أي مشكلة.',
        focusEn: 'Practise habits that protect eyes and ears, never insert objects into them, and tell an adult about any problem.',
        visualSteps: [
          ['حافظ على النظافة', 'Keep them clean'],
          ['ابتعد عن الأجسام والأصوات المؤذية', 'Avoid harmful objects and noise'],
          ['لا تدخل أدوات فيهما', 'Do not insert objects'],
          ['أخبر شخصًا بالغًا عند الانزعاج', 'Tell an adult if something feels wrong'],
        ],
      },
      {
        titleAr: 'العناية بالفم والأسنان',
        titleEn: 'Caring for the Mouth and Teeth',
        page: 27,
        focusAr: 'اتبع روتينًا منتظمًا للعناية بالفم والأسنان، واختر عادات نظافة مناسبة واستعن بولي الأمر أو طبيب الأسنان عند الحاجة.',
        focusEn: 'Follow a regular mouth- and tooth-care routine, choose good hygiene habits, and ask a parent or dentist for help when needed.',
        visualSteps: [
          ['استخدم فرشاة مناسبة', 'Choose a suitable toothbrush'],
          ['نظف الأسنان بانتظام', 'Brush regularly'],
          ['اعتن بنظافة الفم', 'Maintain mouth hygiene'],
          ['اطلب المشورة عند الحاجة', 'Seek advice when needed'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g4-life-skills-q1',
      'ما السلوك الآمن عند الاستحمام؟',
      'Which is a safe habit while bathing?',
      'التأكد من سلامة المكان وطلب المساعدة عند الحاجة',
      'Check that the area is safe and ask for help when needed',
      ['العبث بأدوات الكهرباء قرب الماء', 'استخدام أدوات غير آمنة وحدك', 'ترك الأرض مبتلة دون تنبيه'],
      ['Handle electrical items near water', 'Use unsafe items alone', 'Leave the floor wet without warning anyone'],
      'النظافة والسلامة الشخصية',
      'Personal hygiene and safety',
      'الانتباه إلى سلامة المكان والاستعانة بشخص بالغ يساعدان على الوقاية من الحوادث.',
      'Checking the area and asking an adult for help can prevent accidents.',
    ),
  },
  {
    titleAr: 'مهاراتي في الحياة',
    titleEn: 'My Life Skills',
    lessons: [
      {
        titleAr: 'كيف تنظم وقتك؟',
        titleEn: 'How Do You Organize Your Time?',
        page: 43,
        focusAr: 'حدد ما تريد إنجازه، ورتب الأعمال بحسب أهميتها، وخصص وقتًا للدراسة والراحة والأنشطة اليومية.',
        focusEn: 'Set goals, order tasks by importance, and make time for study, rest, and daily activities.',
        visualSteps: [
          ['اكتب المهام', 'List the tasks'],
          ['رتب الأولويات', 'Set priorities'],
          ['خصص وقتًا لكل مهمة', 'Allow time for each task'],
          ['راجع خطتك وعدلها', 'Review and adjust your plan'],
        ],
      },
      {
        titleAr: 'كيف تكون مجتهدًا في الصف؟',
        titleEn: 'How Can You Be a Diligent Student in Class?',
        page: 47,
        focusAr: 'استعد للتعلم، وأنصت للشرح، وشارك باحترام، وأنجز ما يطلب منك ثم راجع عملك.',
        focusEn: 'Prepare to learn, listen, participate respectfully, complete assigned work, and review it.',
        visualSteps: [
          ['استعد للدرس', 'Get ready for class'],
          ['أنصت وركز', 'Listen and focus'],
          ['شارك باحترام', 'Participate respectfully'],
          ['أنجز العمل وراجعه', 'Complete and review your work'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g4-life-skills-q2',
      'ما الذي يساعد على تنظيم الوقت؟',
      'What helps you organize your time?',
      'ترتيب المهام وتخصيص وقت مناسب لها',
      'Order tasks and allow suitable time for them',
      ['تأجيل كل الأعمال', 'البدء دون معرفة المطلوب', 'ترك وقت الراحة والواجبات بلا تنظيم'],
      ['Put off every task', 'Start without knowing what is needed', 'Leave rest and homework unplanned'],
      'تنظيم الوقت',
      'Time management',
      'تحديد المهام وترتيبها يساعدان على توزيع الوقت بوضوح.',
      'Listing and prioritizing tasks makes it easier to plan time.',
    ),
  },
  {
    titleAr: 'مسكني',
    titleEn: 'My Home',
    lessons: [
      {
        titleAr: 'غرفتي',
        titleEn: 'My Room',
        page: 61,
        focusAr: 'حافظ على ترتيب غرفتك ونظافتها، وضع الأغراض في أماكنها، واتبع إرشادات الأسرة للسلامة.',
        focusEn: 'Keep your room tidy and clean, put belongings away, and follow family safety guidance.',
        visualSteps: [
          ['رتب الأغراض', 'Put belongings in order'],
          ['نظف المكان', 'Clean the room'],
          ['أعد كل غرض إلى مكانه', 'Return each item to its place'],
          ['تحقق من خلو الممرات', 'Keep walkways clear'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g4-life-skills-q3',
      'ما العادة التي تساعد على سلامة الغرفة؟',
      'Which habit helps keep a room safe?',
      'إبعاد الأغراض عن الممرات وإعادتها إلى أماكنها',
      'Keep walkways clear and return belongings to their places',
      ['ترك الأشياء على الأرض', 'إخفاء الأدوات في أماكن يصعب الوصول إليها', 'تكديس الأغراض قرب الباب'],
      ['Leave things on the floor', 'Hide items in hard-to-reach places', 'Pile belongings by the door'],
      'ترتيب المسكن والسلامة',
      'Home organization and safety',
      'ترتيب الأغراض وإبقاء الممرات خالية يقللان التعثر ويسهلان الحركة.',
      'Putting things away and keeping walkways clear helps prevent trips and makes it easier to move around.',
    ),
  },
  {
    titleAr: 'ملبسي',
    titleEn: 'My Clothing',
    lessons: [
      {
        titleAr: 'الملابس المدرسية والملابس الداخلية',
        titleEn: 'School and Undergarments',
        page: 73,
        focusAr: 'اختر ملابس نظيفة ومناسبة، واعتن بترتيبها ونظافتها، وحافظ على الخصوصية عند تغيير الملابس.',
        focusEn: 'Choose clean, suitable clothes, care for them, and maintain privacy when changing.',
        visualSteps: [
          ['اختر لباسًا مناسبًا', 'Choose suitable clothing'],
          ['تحقق من النظافة', 'Check cleanliness'],
          ['ارتدِ الملابس بخصوصية', 'Change with privacy'],
          ['رتب الملابس بعد الاستخدام', 'Put clothes away after use'],
        ],
      },
      {
        titleAr: 'الجوارب والحذاء',
        titleEn: 'Socks and Shoes',
        page: 78,
        focusAr: 'اختر الجوارب والحذاء الملائمين، واعتن بنظافتهما، وارتد الحذاء واربطه بطريقة تساعد على ثبات القدم.',
        focusEn: 'Choose suitable socks and shoes, keep them clean, and wear and fasten shoes securely.',
        visualSteps: [
          ['اختر المقاس المناسب', 'Choose the right size'],
          ['ارتدِ الجوارب النظيفة', 'Put on clean socks'],
          ['ارتدِ الحذاء وأحكم ربطه', 'Wear and fasten shoes securely'],
          ['نظفهما واحفظهما', 'Clean and store them'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g4-life-skills-q4',
      'ما الاختيار المناسب للملابس والأحذية؟',
      'Which is a suitable choice for clothes and shoes?',
      'أن تكون نظيفة ومناسبة للمقاس والاستخدام',
      'They should be clean and suitable in size and use',
      ['ارتداء حذاء غير ثابت', 'إهمال نظافة الملابس', 'اختيار لباس لا يناسب النشاط'],
      ['Wear shoes that do not fit securely', 'Ignore clothing cleanliness', 'Choose clothes unsuited to the activity'],
      'العناية بالملابس والقدمين',
      'Clothing and foot care',
      'الملابس النظيفة والحذاء المناسب يدعمان النظافة والراحة والسلامة.',
      'Clean clothing and suitable shoes support hygiene, comfort, and safety.',
    ),
  },
  {
    titleAr: 'غذائي',
    titleEn: 'My Food',
    lessons: [
      {
        titleAr: 'الخضراوات',
        titleEn: 'Vegetables',
        page: 93,
        focusAr: 'تعرف أنواعًا من الخضراوات، وراعِ غسلها جيدًا واختيارها وإعدادها بطريقة صحية بإشراف شخص بالغ.',
        focusEn: 'Identify different vegetables, wash them well, and choose and prepare them safely with adult supervision.',
        visualSteps: [
          ['تعرف أنواع الخضراوات', 'Identify different vegetables'],
          ['اختر الخضار السليم', 'Choose fresh vegetables'],
          ['اغسلها جيدًا', 'Wash them well'],
          ['تناولها ضمن غذاء متنوع', 'Include them in a varied diet'],
        ],
      },
      {
        titleAr: 'الفواكه',
        titleEn: 'Fruits',
        page: 101,
        focusAr: 'تعرف تنوع الفواكه، واغسلها قبل تناولها، واحفظها بطريقة مناسبة بمساعدة الأسرة.',
        focusEn: 'Explore a variety of fruits, wash them before eating, and store them appropriately with family help.',
        visualSteps: [
          ['تعرف أنواع الفاكهة', 'Identify different fruits'],
          ['اختر الثمرة المناسبة', 'Choose suitable fruit'],
          ['اغسلها قبل الأكل', 'Wash it before eating'],
          ['احفظها بطريقة مناسبة', 'Store it appropriately'],
        ],
      },
    ],
    question: makeQuestion(
      'saudi-g4-life-skills-q5',
      'ما الخطوة المناسبة قبل تناول الخضراوات أو الفواكه؟',
      'What should you do before eating vegetables or fruit?',
      'غسلها جيدًا بالماء',
      'Wash them well with water',
      ['تركها دون تنظيف', 'تخزينها وهي متسخة', 'تذوقها قبل غسلها'],
      ['Leave them unwashed', 'Store them while dirty', 'Taste them before washing'],
      'نظافة الغذاء',
      'Food hygiene',
      'غسل الخضراوات والفواكه قبل تناولها من عادات النظافة الغذائية.',
      'Washing vegetables and fruit before eating is an important food-hygiene habit.',
    ),
  },
];

const unitNumbersAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'] as const;

export const SAUDI_G4_LIFE_SKILLS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G4_LIFE_SKILLS_UNIT_COUNT = units.length;
export const SAUDI_G4_LIFE_SKILLS_LESSON_COUNT = units.reduce(
  (total, unit) => total + unit.lessons.length,
  0
);
export const SAUDI_G4_LIFE_SKILLS_TABLE_OF_CONTENTS = units.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    unitTitleAr: unit.titleAr,
    titleAr: lesson.titleAr,
    page: lesson.page,
  }))
);

export const SAUDI_G4_LIFE_SKILLS_LECTURES: Lecture[] = units.map((unit, unitIndex) => {
  const order = unitIndex + 1;
  const titleAr = `الوحدة ${unitNumbersAr[unitIndex]}: ${unit.titleAr}`;
  const titleEn = `Unit ${order}: ${unit.titleEn}`;
  const sections = unit.lessons.map((lesson, lessonIndex) => {
    const visualSteps: LectureDiagramStep[] = lesson.visualSteps.map(([labelAr, labelEn]) => ({
      labelAr,
      labelEn,
    }));

    return {
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص ${lesson.page}. هذا شرح إرشادي أصلي مبني على فهرس الدرس ومطلع صفحته، وليس نقلًا من متن الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.page}. This original guidance is based on the lesson heading and opening page, not copied from the textbook text.`,
      diagram: {
        id: `saudi-g4-life-skills-1448-unit-${order}-lesson-${lessonIndex + 1}`,
        figureNumberAr: `شكل (${order}-${lessonIndex + 1})`,
        figureNumberEn: `Figure (${order}-${lessonIndex + 1})`,
        titleAr: `تصور بصري: ${lesson.titleAr}`,
        titleEn: `Visual guide: ${lesson.titleEn}`,
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        captionEn: 'An original platform-created visual, not an image from the textbook.',
        diagramType: 'life_skills' as const,
        visualSteps,
      },
    };
  });

  const lectureId = `saudi-g4-life-skills-1448-unit-${order}`;
  const lessonReferencesAr = unit.lessons.map((lesson) => `${lesson.titleAr} (ص ${lesson.page})`);
  const lessonReferencesEn = unit.lessons.map((lesson) => `${lesson.titleEn} (p. ${lesson.page})`);

  return {
    id: lectureId,
    order,
    titleAr,
    titleEn,
    subtitleAr: `الجزء الأول من المقرر — الصف الرابع الابتدائي — فهرس PDF ص 7`,
    subtitleEn: 'Part One — Grade 4 — PDF contents p. 7',
    descriptionAr: `${sourceNoteAr}\n\nتضم الوحدة ${unit.lessons.length} دروس مفهرسة. الشروح والأنشطة والرسوم والأسئلة من إعداد المنصة.`,
    descriptionEn: `${sourceNoteEn}\n\nThis unit contains ${unit.lessons.length} indexed lessons. Explanations, activities, visuals, and questions are original platform material.`,
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'LIFE_SKILLS',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب المهارات الحياتية والأسرية',
    ministryEn: 'Saudi Ministry of Education — Life and Family Skills textbook',
    gradeLevelNameAr: 'الصف الرابع الابتدائي',
    gradeLevelNameEn: 'Grade 4',
    termAr: 'الجزء الأول — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Part One — 1448 AH/2026 cover edition',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `${titleAr} — ${unit.lessons.length} دروس`,
    lessonNumberEn: `${titleEn} — ${unit.lessons.length} lessons`,
    warmupHookAr: `كيف تساعدك المهارات الحياتية في موقف يومي مرتبط بموضوع «${unit.titleAr}»؟`,
    warmupHookEn: `How can life skills help you in an everyday situation related to “${unit.titleEn}”?`,
    learningOutcomesAr: [
      `يتعرف عناوين دروس الوحدة «${unit.titleAr}» ويربطها بصفحات الكتاب.`,
      'يطبق عادات عملية آمنة ومسؤولة مرتبطة بموضوعات الوحدة.',
    ],
    learningOutcomesEn: [
      `Identify the lessons in “${unit.titleEn}” and match them to the textbook pages.`,
      'Apply practical, safe, and responsible habits related to the unit topics.',
    ],
    keyConceptsAr: lessonReferencesAr,
    keyConceptsEn: lessonReferencesEn,
    summaryAr: `${lessonReferencesAr.join('\n')}\n\n${sourceNoteAr}`,
    summaryEn: `${lessonReferencesEn.join('\n')}\n\n${sourceNoteEn}`,
    sections,
    assessment: {
      id: `${lectureId}-assessment`,
      lectureId,
      titleAr: `تقويم الوحدة ${unitNumbersAr[unitIndex]}: ${unit.titleAr}`,
      titleEn: `Unit ${order} Check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question],
    },
  };
});
