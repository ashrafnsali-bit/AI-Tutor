import type { Lecture } from '../types';

type QuranTopicKind = 'tajweed' | 'recitation' | 'memorization';

interface QuranContentsTopic {
  kind: QuranTopicKind;
  titleAr: string;
  titleEn: string;
  page: number;
  pageEnd?: number;
  guidanceAr: string;
  guidanceEn: string;
}

interface QuranContentsUnit {
  titleAr: string;
  titleEn: string;
  topics: QuranContentsTopic[];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

const sourceNoteAr =
  'مرجع العناوين وأرقام الصفحات: فهرس كتاب «تلاوة القرآن الكريم وتجويده» للصف السادس الابتدائي، الجزء الأول، طبعة 1448هـ/2026م، صفحات PDF 6–8. جرى التحقق من الغلاف والفهرس فقط؛ لم تتم مراجعة صفحات الدروس الداخلية. الشروح والرسوم والأسئلة من إعداد المنصة، والتلاوة والحفظ يحتاجان إلى الاستماع والتلقي عن معلم متقن.';
const sourceNoteEn =
  'Titles and page references are based on the contents of “Recitation of the Holy Quran and Tajweed,” Grade 6, Part One, 1448 AH/2026 edition, PDF pages 6–8. Only the cover and contents were checked; the lesson pages were not reviewed. Platform explanations, diagrams, and questions are original. Recitation and memorization require listening and oral instruction from a qualified teacher.';

const topicKindLabelAr: Record<QuranTopicKind, string> = {
  tajweed: 'التجويد',
  recitation: 'التلاوة',
  memorization: 'الحفظ',
};

const topicKindLabelEn: Record<QuranTopicKind, string> = {
  tajweed: 'Tajweed',
  recitation: 'Recitation',
  memorization: 'Memorization',
};

const units: QuranContentsUnit[] = [
  {
    titleAr: 'فضل تلاوة القرآن الكريم',
    titleEn: 'The Virtue of Reciting the Holy Quran',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'فضل تلاوة القرآن الكريم',
        titleEn: 'The Virtue of Reciting the Holy Quran',
        page: 10,
        guidanceAr: 'يتناول عنوان الوحدة فضل التلاوة، ويُقرأ مع تطبيق أدب الاستماع والتلقي الصحيح.',
        guidanceEn: 'This unit introduces the virtue of recitation alongside attentive listening and correct oral learning.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة ص من الآية (1) إلى الآية (26)',
        titleEn: 'Surah Sad, verses 1–26',
        page: 13,
        pageEnd: 15,
        guidanceAr: 'مقطع التلاوة المحدد في الفهرس لهذه الوحدة؛ يُراجع لفظه وأداؤه مع المعلم.',
        guidanceEn: 'The recitation passage listed for this unit; review its wording and performance with the teacher.',
      },
    ],
    questionAr: 'ما الطريقة المناسبة للتدرّب على مقطع التلاوة؟',
    questionEn: 'What is an appropriate way to practise the recitation passage?',
    optionsAr: ['الاستماع لقارئ متقن والقراءة مع المعلم', 'تغيير النطق دون الرجوع إلى معلم', 'الاكتفاء بحفظ عنوان المقطع'],
    optionsEn: ['Listen to a qualified reciter and practise with the teacher', 'Change the pronunciation without teacher guidance', 'Memorize only the passage title'],
  },
  {
    titleAr: 'فضل حفظ القرآن الكريم',
    titleEn: 'The Virtue of Memorizing the Holy Quran',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'فضل حفظ القرآن الكريم',
        titleEn: 'The Virtue of Memorizing the Holy Quran',
        page: 18,
        guidanceAr: 'يربط عنوان الوحدة بين حفظ القرآن والعناية بتعلمه ومراجعته على وجه صحيح.',
        guidanceEn: 'The unit title connects memorization with careful learning and correct review.',
      },
      {
        kind: 'tajweed',
        titleAr: 'فضائل بعض سور القرآن الكريم',
        titleEn: 'Virtues of Selected Surahs of the Holy Quran',
        page: 22,
        guidanceAr: 'موضوع إضافي مدرج في الوحدة نفسها؛ يُدرس وفق ما يورده الكتاب ومعلم المادة.',
        guidanceEn: 'An additional topic listed in the same unit; study it as presented in the textbook and by the teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة ص من الآية (27) إلى الآية (66)',
        titleEn: 'Surah Sad, verses 27–66',
        page: 26,
        pageEnd: 28,
        guidanceAr: 'مقطع التلاوة المحدد في فهرس الوحدة؛ تُراعى المراجعة المتدرجة.',
        guidanceEn: 'The recitation passage listed in the unit contents; use gradual, repeated review.',
      },
    ],
    questionAr: 'أيّ عنوانين في هذه الوحدة يخصان موضوع التجويد؟',
    questionEn: 'Which two listed topics in this unit are Tajweed topics?',
    optionsAr: ['فضل حفظ القرآن وفضائل بعض السور', 'سورة ص من الآية 27 إلى 66 فقط', 'المد المتصل والمد المنفصل'],
    optionsEn: ['The virtue of memorization and virtues of selected surahs', 'Only Surah Sad, verses 27–66', 'Connected and separated madd'],
  },
  {
    titleAr: 'المد: تعريفه وحروفه',
    titleEn: 'Madd: Definition and Letters',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'المد (تعريفه - حروفه)',
        titleEn: 'Madd (definition and letters)',
        page: 30,
        guidanceAr: 'يركز عنوان الكتاب على تعريف المد وحروفه؛ يُراجع الشرح التفصيلي من صفحات الدرس مع المعلم.',
        guidanceEn: 'The textbook heading focuses on the definition of madd and its letters; study the full explanation with the teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'من الآية (67) من سورة ص إلى الآية (39) من سورة الصافات',
        titleEn: 'From verse 67 of Surah Sad to verse 39 of Surah As-Saffat',
        page: 34,
        pageEnd: 36,
        guidanceAr: 'مقطع التلاوة يعبر من سورة إلى أخرى كما هو مثبت في الفهرس.',
        guidanceEn: 'The listed recitation passage continues from one surah into another, as specified in the contents.',
      },
    ],
    questionAr: 'ما الموضوعان المحددان في عنوان درس المد؟',
    questionEn: 'Which two topics are named in the madd lesson heading?',
    optionsAr: ['تعريف المد وحروفه', 'الحفظ والتفسير', 'الوقف والابتداء فقط'],
    optionsEn: ['The definition and letters of madd', 'Memorization and tafsir', 'Stopping and starting only'],
  },
  {
    titleAr: 'أقسام المد الأصلي والفرعي',
    titleEn: 'Categories of Madd: Original and Secondary',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'أقسام المد (الأصلي - الفرعي)',
        titleEn: 'Categories of madd (original and secondary)',
        page: 38,
        guidanceAr: 'يتبع هذا الدرس تعريف المد وحروفه، ويعرض التقسيم المذكور في عنوان الفهرس.',
        guidanceEn: 'Following the definition and letters of madd, this lesson studies the two categories named in the contents.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة الصافات من الآية (40) إلى الآية (98)',
        titleEn: 'Surah As-Saffat, verses 40–98',
        page: 42,
        pageEnd: 44,
        guidanceAr: 'مقطع التلاوة المحدد في الوحدة الرابعة.',
        guidanceEn: 'The recitation passage listed for Unit Four.',
      },
    ],
    questionAr: 'ما القسمان المذكوران في عنوان درس أقسام المد؟',
    questionEn: 'Which two categories are named in the lesson heading?',
    optionsAr: ['الأصلي والفرعي', 'المتصل والمنفصل فقط', 'الكلمي والحرفي فقط'],
    optionsEn: ['Original and secondary', 'Connected and separated only', 'Word and letter only'],
  },
  {
    titleAr: 'حفظ سورة القلم من الآية (1) إلى الآية (32)',
    titleEn: 'Memorization: Surah Al-Qalam, verses 1–32',
    topics: [{
      kind: 'memorization',
      titleAr: 'سورة القلم من الآية (1) إلى الآية (32)',
      titleEn: 'Surah Al-Qalam, verses 1–32',
      page: 46,
      guidanceAr: 'مقدار الحفظ المحدد في الفهرس؛ يُقسّم إلى مقاطع قصيرة ويُسمّع للمعلم.',
      guidanceEn: 'The memorization assignment listed in the contents; divide it into short passages and recite it to the teacher.',
    }],
    questionAr: 'ما مقدار الحفظ المحدد في الوحدة الخامسة؟',
    questionEn: 'What memorization assignment is listed for Unit Five?',
    optionsAr: ['سورة القلم من الآية 1 إلى 32', 'سورة يس كاملة', 'سورة الصافات من الآية 99 إلى 157'],
    optionsEn: ['Surah Al-Qalam, verses 1–32', 'All of Surah Yasin', 'Surah As-Saffat, verses 99–157'],
  },
  {
    titleAr: 'أنواع المد الفرعي',
    titleEn: 'Types of Secondary Madd',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'أنواع المد الفرعي',
        titleEn: 'Types of secondary madd',
        page: 48,
        guidanceAr: 'يعرض الفهرس هذا الدرس بعد أقسام المد وقبل دروس أنواع المد المحددة.',
        guidanceEn: 'The contents place this lesson after the categories of madd and before the lessons on specific types.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة الصافات من الآية (99) إلى الآية (157)',
        titleEn: 'Surah As-Saffat, verses 99–157',
        page: 51,
        pageEnd: 53,
        guidanceAr: 'مقطع التلاوة المحدد في الوحدة السادسة.',
        guidanceEn: 'The recitation passage listed for Unit Six.',
      },
    ],
    questionAr: 'أين يقع درس أنواع المد الفرعي في تسلسل موضوعات المد؟',
    questionEn: 'Where does the lesson on secondary madd types appear in the sequence?',
    optionsAr: ['بعد أقسام المد وقبل أنواع المد التفصيلية', 'قبل تعريف المد وحروفه', 'بعد نهاية مقرر الصف السادس'],
    optionsEn: ['After madd categories and before the detailed types', 'Before the definition and letters of madd', 'After the Grade 6 course ends'],
  },
  {
    titleAr: 'المد المتصل',
    titleEn: 'Connected Madd',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'المد المتصل (تعريفه - حكمه - مقداره - أمثلته)',
        titleEn: 'Connected madd (definition, ruling, duration, and examples)',
        page: 56,
        guidanceAr: 'تغطي عناصر العنوان التعريف والحكم والمقدار والأمثلة؛ يضبط الأداء بالتلقي عن المعلم.',
        guidanceEn: 'The heading lists definition, ruling, duration, and examples; learn the recitation performance from a teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'من الآية (158) من سورة الصافات إلى الآية (19) من سورة يس',
        titleEn: 'From verse 158 of Surah As-Saffat to verse 19 of Surah Yasin',
        page: 59,
        pageEnd: 61,
        guidanceAr: 'مقطع التلاوة المحدد في فهرس الوحدة السابعة.',
        guidanceEn: 'The recitation passage listed in the contents for Unit Seven.',
      },
    ],
    questionAr: 'ما العناصر التي يذكرها عنوان درس المد المتصل؟',
    questionEn: 'Which elements are named in the connected-madd lesson heading?',
    optionsAr: ['تعريفه وحكمه ومقداره وأمثلته', 'تعريفه وحروفه فقط', 'أقسام المد اللازم فقط'],
    optionsEn: ['Its definition, ruling, duration, and examples', 'Only its definition and letters', 'Only categories of necessary madd'],
  },
  {
    titleAr: 'المد المنفصل',
    titleEn: 'Separated Madd',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'المد المنفصل (تعريفه - حكمه - مقداره - أمثلته)',
        titleEn: 'Separated madd (definition, ruling, duration, and examples)',
        page: 64,
        guidanceAr: 'يُدرس وفق عناصر العنوان مع الاستماع إلى القراءة الصحيحة ومراجعة الأداء مع المعلم.',
        guidanceEn: 'Study the listed elements while listening to correct recitation and reviewing performance with the teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة يس من الآية (20) إلى الآية (50)',
        titleEn: 'Surah Yasin, verses 20–50',
        page: 68,
        pageEnd: 70,
        guidanceAr: 'مقطع التلاوة المحدد في الوحدة الثامنة.',
        guidanceEn: 'The recitation passage listed for Unit Eight.',
      },
    ],
    questionAr: 'ما الذي ينبغي أن يراجعه الطالب في درس المد المنفصل؟',
    questionEn: 'What should the learner review in the separated-madd lesson?',
    optionsAr: ['التعريف والحكم والمقدار والأمثلة', 'الحفظ وحده دون التلاوة', 'أسماء السور دون أحكام'],
    optionsEn: ['Definition, ruling, duration, and examples', 'Memorization alone without recitation', 'Surah names without rules'],
  },
  {
    titleAr: 'المد العارض للسكون',
    titleEn: 'Madd Due to Temporary Sukūn',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'المد العارض للسكون (تعريفه - حكمه - مقداره - أمثلته)',
        titleEn: 'Madd due to temporary sukūn (definition, ruling, duration, and examples)',
        page: 74,
        guidanceAr: 'عنوان الدرس يحدد عناصر الدراسة؛ لا يغني الرسم أو الشرح النصي عن الاستماع والتلقي.',
        guidanceEn: 'The lesson heading identifies the study elements; diagrams and text do not replace listening and oral instruction.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة يس من الآية (51) إلى الآية (76)',
        titleEn: 'Surah Yasin, verses 51–76',
        page: 78,
        pageEnd: 80,
        guidanceAr: 'مقطع التلاوة المحدد في الوحدة التاسعة.',
        guidanceEn: 'The recitation passage listed for Unit Nine.',
      },
    ],
    questionAr: 'ما المرجع الأفضل لضبط الأداء في أحكام المد؟',
    questionEn: 'What is the best way to confirm recitation performance for madd rules?',
    optionsAr: ['التلقي والاستماع إلى قارئ متقن ومعلم', 'الاعتماد على الرسم وحده', 'تخمين مقدار المد'],
    optionsEn: ['Oral instruction and listening to a qualified reciter and teacher', 'Relying on a diagram alone', 'Guessing the madd duration'],
  },
  {
    titleAr: 'المد اللازم',
    titleEn: 'Necessary Madd',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'المد اللازم (تعريفه - أقسامه - حكمه - أمثلته)',
        titleEn: 'Necessary madd (definition, categories, ruling, and examples)',
        page: 82,
        guidanceAr: 'يغطي الدرس العناصر المذكورة في عنوانه، ثم تتدرج الوحدات اللاحقة إلى نوعيه الكلمي والحرفي.',
        guidanceEn: 'This lesson covers the elements in its heading; later units proceed to its word and letter forms.',
      },
      {
        kind: 'recitation',
        titleAr: 'من الآية (77) من سورة يس إلى الآية (11) من سورة فاطر',
        titleEn: 'From verse 77 of Surah Yasin to verse 11 of Surah Fatir',
        page: 86,
        pageEnd: 88,
        guidanceAr: 'مقطع التلاوة المحدد في الوحدة العاشرة.',
        guidanceEn: 'The recitation passage listed for Unit Ten.',
      },
    ],
    questionAr: 'ما التفريعات التي تذكرها الوحدات بعد درس المد اللازم؟',
    questionEn: 'Which subdivisions follow the general lesson on necessary madd?',
    optionsAr: ['المد اللازم الكلمي والحرفي', 'المد المتصل والمنفصل فقط', 'حروف المد الثلاثة فقط'],
    optionsEn: ['Necessary word madd and necessary letter madd', 'Connected and separated madd only', 'Only the three madd letters'],
  },
  {
    titleAr: 'حفظ سورة القلم من الآية (24) حتى نهاية السورة',
    titleEn: 'Memorization: Surah Al-Qalam, verse 24 to the end',
    topics: [{
      kind: 'memorization',
      titleAr: 'سورة القلم من الآية (24) حتى نهاية السورة',
      titleEn: 'Surah Al-Qalam, verse 24 to the end',
      page: 90,
      guidanceAr: 'مقدار الحفظ كما ورد في الفهرس؛ يراجع الطالب موضع البدء والنهاية مع معلمه.',
      guidanceEn: 'The memorization assignment as listed in the contents; confirm the starting and ending points with the teacher.',
    }],
    questionAr: 'من أين يبدأ مقدار الحفظ المحدد في الوحدة الحادية عشرة؟',
    questionEn: 'Where does the memorization assignment for Unit Eleven begin?',
    optionsAr: ['الآية 24 من سورة القلم', 'الآية 1 من سورة يس', 'الآية 77 من سورة فاطر'],
    optionsEn: ['Verse 24 of Surah Al-Qalam', 'Verse 1 of Surah Yasin', 'Verse 77 of Surah Fatir'],
  },
  {
    titleAr: 'المد اللازم الكلمي',
    titleEn: 'Necessary Word Madd',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'المد اللازم الكلمي (تعريفه - أنواعه - أمثلته)',
        titleEn: 'Necessary word madd (definition, types, and examples)',
        page: 92,
        guidanceAr: 'يخصص هذا الدرس النوع الكلمي، ويذكر الفهرس تعريفه وأنواعه وأمثلته.',
        guidanceEn: 'This lesson focuses on the word form; the contents list its definition, types, and examples.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة فاطر من الآية (12) إلى الآية (30)',
        titleEn: 'Surah Fatir, verses 12–30',
        page: 96,
        pageEnd: 98,
        guidanceAr: 'مقطع التلاوة المحدد في الوحدة الثانية عشرة.',
        guidanceEn: 'The recitation passage listed for Unit Twelve.',
      },
    ],
    questionAr: 'أي فرع من المد اللازم يدرسه عنوان الوحدة الثانية عشرة؟',
    questionEn: 'Which form of necessary madd is covered in Unit Twelve?',
    optionsAr: ['الكلمي', 'الحرفي', 'العارض للسكون'],
    optionsEn: ['Word madd', 'Letter madd', 'Temporary-sukūn madd'],
  },
  {
    titleAr: 'المد اللازم الحرفي',
    titleEn: 'Necessary Letter Madd',
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'المد اللازم الحرفي (تعريفه - أقسامه - أمثلته)',
        titleEn: 'Necessary letter madd (definition, categories, and examples)',
        page: 100,
        guidanceAr: 'تختتم عناوين المد في الجزء الأول بدراسة المد اللازم الحرفي وفق عناصر الفهرس.',
        guidanceEn: 'The Part One madd sequence concludes with necessary letter madd and the elements listed in the contents.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة فاطر من الآية (31) إلى نهاية السورة',
        titleEn: 'Surah Fatir, verse 31 to the end',
        page: 104,
        pageEnd: 106,
        guidanceAr: 'مقطع التلاوة الأخير المدرج في الوحدة الثالثة عشرة.',
        guidanceEn: 'The final recitation passage listed in Unit Thirteen.',
      },
    ],
    questionAr: 'ما الموضوع الذي يختتم دروس المد في هذا الجزء؟',
    questionEn: 'Which topic concludes the madd lessons in this part?',
    optionsAr: ['المد اللازم الحرفي', 'المد الأصلي', 'المد العارض للسكون'],
    optionsEn: ['Necessary letter madd', 'Original madd', 'Temporary-sukūn madd'],
  },
];

const unitNumbersAr = [
  'الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة', 'السابعة',
  'الثامنة', 'التاسعة', 'العاشرة', 'الحادية عشرة', 'الثانية عشرة', 'الثالثة عشرة',
];

export const SAUDI_G6_QURAN_RECITATION_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const unitTitleAr = `الوحدة ${unitNumbersAr[index]}: ${unit.titleAr}`;
  const unitTitleEn = `Unit ${order}: ${unit.titleEn}`;
  const firstTopic = unit.topics[0];
  const visualSteps = [
    { labelAr: topicKindLabelAr[firstTopic.kind], labelEn: topicKindLabelEn[firstTopic.kind] },
    { labelAr: firstTopic.titleAr, labelEn: firstTopic.titleEn },
    {
      labelAr: `مرجع الفهرس: ص ${firstTopic.page}`,
      labelEn: `Contents reference: p. ${firstTopic.page}`,
    },
    { labelAr: 'التطبيق بالتلقي عن معلم متقن', labelEn: 'Practise with qualified oral instruction' },
  ];

  return {
    id: `saudi-g6-quran-recitation-1448-${order}`,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `تلاوة القرآن الكريم وتجويده — الصف السادس — ص ${firstTopic.page}`,
    subtitleEn: `Quran Recitation and Tajweed — Grade 6 — p. ${firstTopic.page}`,
    descriptionAr: `${sourceNoteAr}\n\nشرح المنصة أصلي ومساند؛ يُرجع إلى الكتاب ومعلم المادة في تفاصيل الدرس.`,
    descriptionEn: `${sourceNoteEn}\n\nPlatform explanations are original and supplementary; consult the textbook and teacher for lesson details.`,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'QURAN_RECITATION',
    gradeLevel: 'G6',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب تلاوة القرآن الكريم وتجويده',
    ministryEn: 'Ministry of Education — Recitation of the Holy Quran and Tajweed textbook',
    gradeLevelNameAr: 'الصف السادس الابتدائي — تلاوة القرآن الكريم وتجويده',
    gradeLevelNameEn: 'Grade 6 — Recitation of the Holy Quran and Tajweed',
    termAr: 'الجزء الأول — طبعة 1448هـ/2026م',
    termEn: 'Part One — 1448 AH/2026 edition',
    unitTitleAr: `الوحدة ${unitNumbersAr[index]}`,
    unitTitleEn: `Unit ${order}`,
    lessonNumberAr: `${unitTitleAr} (ص ${firstTopic.page})`,
    lessonNumberEn: `${unitTitleEn} (p. ${firstTopic.page})`,
    warmupHookAr: 'ابدأ بالاستماع إلى قراءة متقنة للمقطع، ثم اتبع أهداف الوحدة في الكتاب ومعلمك.',
    warmupHookEn: 'Begin by listening to qualified recitation, then follow the unit objectives in the textbook with your teacher.',
    learningOutcomesAr: [
      `يتعرف المتعلم موضوعات الوحدة: ${unit.topics.map((topic) => topic.titleAr).join('؛ ')}.`,
      'يربط كل عنوان بموضعه في فهرس الكتاب ورقم صفحته.',
      'يمارس التلاوة والحفظ بالتلقي والمراجعة مع معلم متقن.',
    ],
    learningOutcomesEn: [
      `Identify the unit topics: ${unit.topics.map((topic) => topic.titleEn).join('; ')}.`,
      'Match each heading with its contents entry and page reference.',
      'Practise recitation and memorization with qualified oral instruction and review.',
    ],
    keyConceptsAr: unit.topics.map((topic) =>
      `${topicKindLabelAr[topic.kind]}: ${topic.titleAr} (ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ),
    keyConceptsEn: unit.topics.map((topic) =>
      `${topicKindLabelEn[topic.kind]}: ${topic.titleEn} (p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ),
    summaryAr: `${unit.topics.map((topic) =>
      `${topicKindLabelAr[topic.kind]}: ${topic.titleAr} (ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ).join('\n')}\n\n${sourceNoteAr}`,
    summaryEn: `${unit.topics.map((topic) =>
      `${topicKindLabelEn[topic.kind]}: ${topic.titleEn} (p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''})`
    ).join('\n')}\n\n${sourceNoteEn}`,
    sections: unit.topics.map((topic, topicIndex) => ({
      titleAr: `${topicKindLabelAr[topic.kind]}: ${topic.titleAr}`,
      titleEn: `${topicKindLabelEn[topic.kind]}: ${topic.titleEn}`,
      contentAr: `${topic.guidanceAr}\n\nمرجع الفهرس: ص ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.\n\n${sourceNoteAr}`,
      contentEn: `${topic.guidanceEn}\n\nContents reference: p. ${topic.page}${topic.pageEnd ? `–${topic.pageEnd}` : ''}.\n\n${sourceNoteEn}`,
      ...(topicIndex === 0 ? {
        diagram: {
          id: `saudi-g6-quran-recitation-map-${order}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          titleAr: `خريطة الوحدة: ${unit.titleAr}`,
          titleEn: `Unit map: ${unit.titleEn}`,
          captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
          captionEn: 'Original learning illustration created by the platform; not an image from the textbook.',
          diagramType: 'arabic_learning_map' as const,
          visualSteps,
          keyLabels: [
            { tagAr: 'المادة', tagEn: 'Course', descAr: topicKindLabelAr[topic.kind], descEn: topicKindLabelEn[topic.kind] },
            { tagAr: 'تنبيه', tagEn: 'Note', descAr: 'التلاوة بالتلقي والمشافهة', descEn: 'Recitation requires oral instruction' },
          ],
        },
      } : {}),
    })),
    assessment: {
      id: `saudi-g6-quran-recitation-assessment-${order}`,
      lectureId: `saudi-g6-quran-recitation-1448-${order}`,
      titleAr: `تقويم الوحدة: ${unit.titleAr}`,
      titleEn: `Unit check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g6-quran-recitation-question-${order}`,
        textAr: unit.questionAr,
        textEn: unit.questionEn,
        optionsAr: [...unit.optionsAr],
        optionsEn: [...unit.optionsEn],
        correctIndex: 0,
        conceptTestedAr: unit.titleAr,
        conceptTestedEn: unit.titleEn,
        explanationAr: 'الإجابة تراجع عنوان الفهرس ومحتوى الوحدة؛ يُرجع إلى الكتاب ومعلم المادة في تفاصيل الأداء.',
        explanationEn: 'This checks the contents heading and unit outline; consult the textbook and teacher for performance details.',
        difficulty: 'easy',
      }],
    },
  };
});

