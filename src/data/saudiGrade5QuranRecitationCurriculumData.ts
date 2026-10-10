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
  topics: QuranContentsTopic[];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

export const SAUDI_G5_QURAN_RECITATION_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-tgwd.pdf';

const sourceNoteAr =
  'مرجع عناوين الوحدات والموضوعات وأرقام الصفحات: غلاف وسجل نشر وفهرس كتاب «تلاوة القرآن الكريم وتجويده» للصف الخامس الابتدائي، صفحات PDF 1–2 و8–10. يذكر الغلاف طبعة 1448هـ/2026م، بينما يذكر سجل النشر الداخلي 1446هـ؛ وقد أُظهر الاختلاف. الكتاب كامل غير مجزأ. جرى التحقق من الغلاف والفهرس فقط، ولم تراجع صفحات الدروس الداخلية. الشروح والرسوم والأسئلة أصلية ومساندة؛ ويكون تعلم التلاوة والحفظ بالتلقي والمشافهة مع معلم متقن.';
const sourceNoteEn =
  'Unit and topic titles and page references are based on the cover, publication record, and contents of “Recitation of the Holy Quran and Tajweed,” Grade 5, PDF pages 1–2 and 8–10. The cover states 1448 AH/2026, while the internal publication record states 1446 AH; this discrepancy is disclosed. The book is undivided. Only the cover and contents were checked; lesson pages were not reviewed. Explanations, diagrams, and questions are original supplementary platform material; recitation and memorization should be learned orally with a qualified teacher.';

const kindLabelAr: Record<QuranTopicKind, string> = {
  tajweed: 'التجويد',
  recitation: 'التلاوة',
  memorization: 'الحفظ',
};

const kindLabelEn: Record<QuranTopicKind, string> = {
  tajweed: 'Tajweed',
  recitation: 'Recitation',
  memorization: 'Memorization',
};

const units: QuranContentsUnit[] = [
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'آداب التعامل مع المصحف الشريف',
        titleEn: 'Etiquette for Handling the Holy Quran',
        page: 12,
        guidanceAr: 'يتناول عنوان الفهرس آداب التعامل مع المصحف الشريف. يُراجع تفصيل الدرس من الكتاب ومعلم المادة.',
        guidanceEn: 'The contents heading addresses etiquette for handling the Holy Quran. Consult the textbook and teacher for lesson details.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة الدخان من الآية (1) إلى الآية (42)',
        titleEn: 'Surah Ad-Dukhan, verses 1–42',
        page: 16,
        pageEnd: 18,
        guidanceAr: 'مقطع التلاوة المحدد في الفهرس؛ يستمع المتعلم إلى قراءة متقنة ويتدرب مع معلمه.',
        guidanceEn: 'The recitation passage listed in the contents; listen to a qualified reciter and practise with the teacher.',
      },
    ],
    questionAr: 'كيف يتدرب المتعلم على مقطع التلاوة؟',
    questionEn: 'How should a learner practise the recitation passage?',
    optionsAr: ['بالاستماع والتلقي مع معلم متقن', 'بتغيير الأداء دون الرجوع إلى معلم', 'بحفظ رقم الصفحة فقط'],
    optionsEn: ['By listening and practising with a qualified teacher', 'By changing the recitation without teacher guidance', 'By memorizing only the page number'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'معنى التجويد وفضله',
        titleEn: 'Meaning and Virtue of Tajweed',
        page: 20,
        guidanceAr: 'يركز موضوع الفهرس على معنى التجويد وفضله؛ تُراجع التعريفات والتطبيقات في الكتاب.',
        guidanceEn: 'The contents topic focuses on the meaning and virtue of Tajweed; consult the textbook for definitions and practice.',
      },
      {
        kind: 'recitation',
        titleAr: 'من الآية (43) من سورة الدخان إلى الآية (18) من سورة الزخرف',
        titleEn: 'From verse 43 of Surah Ad-Dukhan to verse 18 of Surah Az-Zukhruf',
        page: 23,
        pageEnd: 25,
        guidanceAr: 'مقطع التلاوة يعبر بين سورتين كما يحدده الفهرس؛ يتابع المتعلم موضع الانتقال في المصحف مع معلمه.',
        guidanceEn: 'The contents passage spans two surahs; follow the transition in the Quran with the teacher.',
      },
    ],
    questionAr: 'أين يراجع المتعلم تفاصيل معنى التجويد وتطبيقه؟',
    questionEn: 'Where should a learner review the meaning and application of Tajweed?',
    optionsAr: ['في الدرس ومع معلم متقن', 'بالاعتماد على عنوان الفهرس وحده', 'بتجاوز الأمثلة والتطبيق'],
    optionsEn: ['In the lesson and with a qualified teacher', 'From the contents heading alone', 'By skipping examples and practice'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'أحكام النون الساكنة والتنوين',
        titleEn: 'Rules of Noon Sakinah and Tanween',
        page: 28,
        guidanceAr: 'يسجل الفهرس أحكام النون الساكنة والتنوين موضوعًا للتجويد؛ تُدرس القواعد والأمثلة من صفحات الدرس.',
        guidanceEn: 'The contents list the rules of noon sakinah and tanween; study the rules and examples in the lesson.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة الزخرف من الآية (19) إلى الآية (45)',
        titleEn: 'Surah Az-Zukhruf, verses 19–45',
        page: 32,
        pageEnd: 34,
        guidanceAr: 'مقطع التلاوة المحدد في الوحدة؛ يطبق المتعلم ما يتلقاه من معلمه دون الاعتماد على الشرح المكتوب وحده.',
        guidanceEn: 'The recitation passage listed for this unit; follow oral instruction rather than relying on written guidance alone.',
      },
    ],
    questionAr: 'ما الذي يساعد على إتقان أحكام التجويد عمليًا؟',
    questionEn: 'What supports practical mastery of Tajweed rules?',
    optionsAr: ['التلقي والاستماع والتدرب مع المعلم', 'قراءة عنوان القاعدة دون تطبيق', 'التدرب دون تصحيح الأداء'],
    optionsEn: ['Oral instruction, listening, and practice with the teacher', 'Reading the rule heading without practice', 'Practising without feedback'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'الإظهار',
        titleEn: 'Izhar (Clear Pronunciation)',
        page: 36,
        guidanceAr: 'يذكر الفهرس الإظهار موضوعًا مستقلًا؛ يُرجع إلى الدرس ومعلم المادة في الحروف والأداء.',
        guidanceEn: 'The contents list izhar as a separate topic; consult the lesson and teacher for its letters and performance.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة الزخرف من الآية (46) إلى الآية (80)',
        titleEn: 'Surah Az-Zukhruf, verses 46–80',
        page: 40,
        pageEnd: 42,
        guidanceAr: 'المقطع الوارد في فهرس الوحدة الرابعة؛ يتدرب الطالب على التلاوة بالتلقي والمشافهة.',
        guidanceEn: 'The passage listed in Unit Four; practise reciting with oral instruction.',
      },
    ],
    questionAr: 'ما مرجع موضوع الإظهار وتطبيقه؟',
    questionEn: 'What is the reference for learning and applying izhar?',
    optionsAr: ['صفحة الدرس والتلقي مع المعلم', 'رقم الوحدة وحده', 'التخمين دون الاستماع'],
    optionsEn: ['The lesson page and teacher instruction', 'The unit number alone', 'Guessing without listening'],
  },
  {
    topics: [
      {
        kind: 'memorization',
        titleAr: 'سورة المعارج من الآية (1) إلى الآية (25)',
        titleEn: 'Surah Al-Ma’arij, verses 1–25',
        page: 44,
        guidanceAr: 'مقطع الحفظ كما ورد في الفهرس؛ يُحفظ بالتلقي الصحيح والمراجعة المتدرجة مع المعلم.',
        guidanceEn: 'The memorization passage listed in the contents; learn it through correct oral instruction and gradual review with the teacher.',
      },
    ],
    questionAr: 'ما الطريقة المناسبة لمراجعة مقطع الحفظ؟',
    questionEn: 'What is an appropriate way to review the memorization passage?',
    optionsAr: ['التسميع والمراجعة مع معلم متقن', 'حفظ أرقام الصفحات فقط', 'تجاوز المراجعة بعد أول قراءة'],
    optionsEn: ['Recite and review with a qualified teacher', 'Memorize only the page numbers', 'Skip review after the first reading'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'الإدغام',
        titleEn: 'Idgham (Merging)',
        page: 46,
        guidanceAr: 'الإدغام عنوان تجويدي في الفهرس؛ تراجع شروطه وحروفه وأداؤه من الدرس ومعلم متقن.',
        guidanceEn: 'Idgham is a Tajweed topic listed in the contents; review its conditions, letters, and delivery with the teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'من الآية (81) من سورة الزخرف إلى الآية (12) من سورة الشورى',
        titleEn: 'From verse 81 of Surah Az-Zukhruf to verse 12 of Surah Ash-Shura',
        page: 51,
        pageEnd: 53,
        guidanceAr: 'مقطع التلاوة يصل بين سورتين وفق الفهرس؛ يتتبع المتعلم موضعه في المصحف مع المعلم.',
        guidanceEn: 'This contents passage spans two surahs; locate it in the Quran with the teacher.',
      },
    ],
    questionAr: 'كيف يتحقق المتعلم من صحة تطبيق الإدغام؟',
    questionEn: 'How can a learner check the application of idgham?',
    optionsAr: ['بالتلقي والاستماع إلى أداء مصحح', 'بالاعتماد على التخمين', 'بإهمال الحرف التالي'],
    optionsEn: ['Through oral instruction and listening to corrected recitation', 'By guessing', 'By ignoring the following letter'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'الإدغام بغنة',
        titleEn: 'Idgham with Ghunnah',
        page: 56,
        guidanceAr: 'يسجل الفهرس الإدغام بغنة موضوعًا للتجويد؛ يضبط المتعلم الأداء بسماع النموذج وتصحيح المعلم.',
        guidanceEn: 'The contents list idgham with ghunnah as a Tajweed topic; learn the delivery by listening and teacher feedback.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة الشورى من الآية (13) إلى الآية (23)',
        titleEn: 'Surah Ash-Shura, verses 13–23',
        page: 60,
        pageEnd: 62,
        guidanceAr: 'مقطع التلاوة المخصص للوحدة السابعة؛ يراجع المتعلم أحكام القراءة بالتلقي.',
        guidanceEn: 'The passage assigned to Unit Seven; review recitation rules through oral instruction.',
      },
    ],
    questionAr: 'بماذا يراجع المتعلم أداء الإدغام بغنة؟',
    questionEn: 'How should a learner review idgham with ghunnah?',
    optionsAr: ['بالاستماع والتطبيق مع المعلم', 'بقراءة اسم الحكم فقط', 'بتغيير الأداء دون تصحيح'],
    optionsEn: ['By listening and practising with the teacher', 'By reading only the rule name', 'By changing the delivery without feedback'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'الإدغام بغير غنة',
        titleEn: 'Idgham without Ghunnah',
        page: 64,
        guidanceAr: 'يورد الفهرس الإدغام بغير غنة موضوعًا مستقلًا؛ تؤخذ تفاصيل الأداء من الكتاب والمعلم.',
        guidanceEn: 'The contents list idgham without ghunnah separately; learn the performance details from the textbook and teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة الشورى من الآية (24) إلى الآية (46)',
        titleEn: 'Surah Ash-Shura, verses 24–46',
        page: 68,
        pageEnd: 70,
        guidanceAr: 'مقطع التلاوة المحدد في فهرس الوحدة الثامنة؛ تُراجع القراءة مع معلم متقن.',
        guidanceEn: 'The passage listed for Unit Eight; review recitation with a qualified teacher.',
      },
    ],
    questionAr: 'أين يتلقى المتعلم تفاصيل الأداء في الإدغام؟',
    questionEn: 'Where should a learner receive guidance on idgham performance?',
    optionsAr: ['من الكتاب ومعلم متقن', 'من عنوان الوحدة فقط', 'من دون استماع أو تطبيق'],
    optionsEn: ['From the textbook and a qualified teacher', 'From the unit heading alone', 'Without listening or practice'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'الإقلاب',
        titleEn: 'Iqlab (Conversion)',
        page: 72,
        guidanceAr: 'الإقلاب عنوان تجويدي في الفهرس؛ يراجع الطالب ضابطه وأمثلتَه في الدرس ويطبقه مع معلمه.',
        guidanceEn: 'Iqlab is a Tajweed heading in the contents; review its rule and examples in the lesson and practise with the teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'من الآية (47) من سورة الشورى إلى الآية (8) من سورة فصلت',
        titleEn: 'From verse 47 of Surah Ash-Shura to verse 8 of Surah Fussilat',
        page: 76,
        pageEnd: 78,
        guidanceAr: 'يتبع المقطع المحدد في الفهرس انتقالًا بين سورتين؛ يرجع المتعلم إلى المصحف والمعلم لتحديد موضعه.',
        guidanceEn: 'The contents passage transitions between two surahs; use the Quran and teacher to locate it.',
      },
    ],
    questionAr: 'ما أفضل وسيلة لتثبيت تطبيق الإقلاب؟',
    questionEn: 'What is a good way to reinforce the application of iqlab?',
    optionsAr: ['التطبيق المسموع مع معلم متقن', 'حفظ عنوان الدرس دون تلاوة', 'التدرب من غير مراجعة'],
    optionsEn: ['Audible practice with a qualified teacher', 'Memorizing the lesson title without reciting', 'Practising without review'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'الإخفاء',
        titleEn: 'Ikhfa (Concealment)',
        page: 80,
        guidanceAr: 'يسجل الفهرس الإخفاء موضوعًا للتجويد؛ يتعلم الطالب تطبيقه من الدرس بالتلقي والاستماع.',
        guidanceEn: 'The contents list ikhfa as a Tajweed topic; learn its application from the lesson through oral instruction and listening.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة فصلت من الآية (9) إلى الآية (24)',
        titleEn: 'Surah Fussilat, verses 9–24',
        page: 84,
        pageEnd: 86,
        guidanceAr: 'مقطع التلاوة الوارد في الوحدة العاشرة؛ يتدرب المتعلم على القراءة مع معلمه.',
        guidanceEn: 'The passage listed in Unit Ten; practise reading it with the teacher.',
      },
    ],
    questionAr: 'كيف يدرس المتعلم الإخفاء عمليًا؟',
    questionEn: 'How should a learner study ikhfa in practice?',
    optionsAr: ['بالاستماع والتطبيق تحت إشراف المعلم', 'بتجاوز الأمثلة الصوتية', 'بالتخمين دون مراجعة'],
    optionsEn: ['By listening and practising under the teacher’s guidance', 'By skipping oral examples', 'By guessing without review'],
  },
  {
    topics: [
      {
        kind: 'memorization',
        titleAr: 'سورة المعارج من الآية (26) إلى نهاية السورة',
        titleEn: 'Surah Al-Ma’arij, verse 26 to the end',
        page: 88,
        guidanceAr: 'مقطع الحفظ المكمل لما ورد في الوحدة الخامسة؛ يراجع المتعلم ما حفظه بالتسميع مع المعلم.',
        guidanceEn: 'The continuation of the memorization passage from Unit Five; review it by reciting to the teacher.',
      },
    ],
    questionAr: 'ما الذي يساعد على تثبيت المحفوظ؟',
    questionEn: 'What helps reinforce memorized material?',
    optionsAr: ['المراجعة المتدرجة والتسميع', 'الاكتفاء بقراءة العنوان', 'ترك المراجعة بعد الحفظ الأول'],
    optionsEn: ['Gradual review and recitation to a teacher', 'Reading only the heading', 'Stopping review after the first memorization'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'حروف الإخفاء',
        titleEn: 'Letters of Ikhfa',
        page: 90,
        guidanceAr: 'يخصص الفهرس موضوعًا لحروف الإخفاء؛ تُراجع الحروف والأمثلة في الكتاب وتُتلقى طريقة الأداء عن المعلم.',
        guidanceEn: 'The contents dedicate a topic to the letters of ikhfa; review the letters and examples in the textbook and learn delivery from the teacher.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة فصلت من الآية (25) إلى الآية (40)',
        titleEn: 'Surah Fussilat, verses 25–40',
        page: 94,
        pageEnd: 96,
        guidanceAr: 'المقطع المحدد في فهرس الوحدة الثانية عشرة؛ يتابع المتعلم القراءة في المصحف مع معلمه.',
        guidanceEn: 'The passage listed for Unit Twelve; follow it in the Quran with the teacher.',
      },
    ],
    questionAr: 'أين يراجع المتعلم حروف الإخفاء وأمثلتها؟',
    questionEn: 'Where should a learner review the letters of ikhfa and their examples?',
    optionsAr: ['في صفحات الدرس مع المعلم', 'في رقم الوحدة وحده', 'دون الرجوع إلى الكتاب'],
    optionsEn: ['In the lesson pages with the teacher', 'From the unit number alone', 'Without consulting the textbook'],
  },
  {
    topics: [
      {
        kind: 'tajweed',
        titleAr: 'حروف الإخفاء',
        titleEn: 'Letters of Ikhfa',
        page: 98,
        guidanceAr: 'يتابع الفهرس موضوع حروف الإخفاء في هذه الوحدة؛ يُرجع إلى صفحات الدرس لتفاصيل الأمثلة والتطبيق.',
        guidanceEn: 'The contents continue the topic of ikhfa letters in this unit; consult the lesson pages for examples and practice.',
      },
      {
        kind: 'recitation',
        titleAr: 'سورة فصلت من الآية (41) إلى نهاية السورة',
        titleEn: 'Surah Fussilat, verse 41 to the end',
        page: 102,
        pageEnd: 104,
        guidanceAr: 'مقطع التلاوة الختامي المثبت في الفهرس؛ تكون المراجعة بالتلقي مع معلم متقن.',
        guidanceEn: 'The final recitation passage listed in the contents; review it through oral instruction with a qualified teacher.',
      },
    ],
    questionAr: 'ما الطريقة المناسبة لمراجعة المقطع الختامي؟',
    questionEn: 'What is an appropriate way to review the final passage?',
    optionsAr: ['التلاوة مع الاستماع والتصحيح', 'حفظ رقم الصفحة دون قراءة', 'تجاوز مراجعة الأداء'],
    optionsEn: ['Recite while listening and receiving correction', 'Memorize the page number without reading', 'Skip performance review'],
  },
];

const unitNumbersAr = [
  'الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة', 'السابعة',
  'الثامنة', 'التاسعة', 'العاشرة', 'الحادية عشرة', 'الثانية عشرة', 'الثالثة عشرة',
];

export const SAUDI_G5_QURAN_RECITATION_UNIT_COUNT = units.length;
export const SAUDI_G5_QURAN_RECITATION_TOPIC_COUNT = units.reduce(
  (total, unit) => total + unit.topics.length,
  0
);
export const SAUDI_G5_QURAN_RECITATION_TABLE_OF_CONTENTS = units.flatMap((unit, unitIndex) =>
  unit.topics.map((topic) => ({
    unitNumber: unitIndex + 1,
    unitTitleAr: `الوحدة ${unitNumbersAr[unitIndex]}`,
    ...topic,
  }))
);

const topicKindLabelAr: Record<QuranTopicKind, string> = kindLabelAr;
const topicKindLabelEn: Record<QuranTopicKind, string> = kindLabelEn;

export const SAUDI_G5_QURAN_RECITATION_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const firstTopic = unit.topics[0];
  const unitTitleAr = `الوحدة ${unitNumbersAr[index]}`;
  const unitTitleEn = `Unit ${order}`;
  const lectureTitleAr = `${unitTitleAr}: ${firstTopic.titleAr}`;
  const lectureTitleEn = `${unitTitleEn}: ${firstTopic.titleEn}`;
  const visualSteps = [
    { labelAr: topicKindLabelAr[firstTopic.kind], labelEn: topicKindLabelEn[firstTopic.kind] },
    { labelAr: firstTopic.titleAr, labelEn: firstTopic.titleEn },
    {
      labelAr: `مرجع الفهرس: ص ${firstTopic.page}`,
      labelEn: `Contents reference: p. ${firstTopic.page}`,
    },
    { labelAr: 'التطبيق بالتلقي عن معلم متقن', labelEn: 'Practise with qualified oral instruction' },
  ];
  const lectureId = `saudi-g5-quran-recitation-1448-${order}`;

  return {
    id: lectureId,
    order,
    titleAr: lectureTitleAr,
    titleEn: lectureTitleEn,
    subtitleAr: `تلاوة القرآن الكريم وتجويده — الصف الخامس — ص ${firstTopic.page}`,
    subtitleEn: `Quran Recitation and Tajweed — Grade 5 — p. ${firstTopic.page}`,
    descriptionAr: `${sourceNoteAr}\n\nشرح المنصة أصلي ومساند؛ يُرجع إلى الكتاب ومعلم المادة في تفاصيل الدرس.`,
    descriptionEn: `${sourceNoteEn}\n\nPlatform explanations are original and supplementary; consult the textbook and teacher for lesson details.`,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'QURAN_RECITATION',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب تلاوة القرآن الكريم وتجويده',
    ministryEn: 'Ministry of Education — Recitation of the Holy Quran and Tajweed textbook',
    gradeLevelNameAr: 'الصف الخامس الابتدائي — تلاوة القرآن الكريم وتجويده',
    gradeLevelNameEn: 'Grade 5 — Recitation of the Holy Quran and Tajweed',
    termAr: 'الكتاب كامل (غير مجزأ) — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Full undivided textbook — 1448 AH/2026 cover edition',
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `${lectureTitleAr} (ص ${firstTopic.page})`,
    lessonNumberEn: `${lectureTitleEn} (p. ${firstTopic.page})`,
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
          id: `saudi-g5-quran-recitation-map-${order}`,
          figureNumberAr: `شكل (${order})`,
          figureNumberEn: `Figure (${order})`,
          titleAr: `خريطة الوحدة: ${unitTitleAr}`,
          titleEn: `Unit map: ${unitTitleEn}`,
          captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
          captionEn: 'Original learning illustration created by the platform; not an image from the textbook.',
          diagramType: 'arabic_learning_map' as const,
          visualSteps,
          keyLabels: [
            { tagAr: 'الموضوع', tagEn: 'Topic', descAr: topicKindLabelAr[firstTopic.kind], descEn: topicKindLabelEn[firstTopic.kind] },
            { tagAr: 'تنبيه', tagEn: 'Note', descAr: 'التلاوة والحفظ بالتلقي والمشافهة', descEn: 'Recitation and memorization require oral instruction' },
          ],
        },
      } : {}),
    })),
    assessment: {
      id: `saudi-g5-quran-recitation-assessment-${order}`,
      lectureId,
      titleAr: `تقويم الوحدة: ${unitTitleAr}`,
      titleEn: `Unit check: ${unitTitleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g5-quran-recitation-question-${order}`,
        textAr: unit.questionAr,
        textEn: unit.questionEn,
        optionsAr: [...unit.optionsAr],
        optionsEn: [...unit.optionsEn],
        correctIndex: 0,
        conceptTestedAr: unitTitleAr,
        conceptTestedEn: unitTitleEn,
        explanationAr: 'الإجابة تراجع عنوان الفهرس ومرجع الوحدة؛ يُرجع إلى الكتاب ومعلم المادة في تفاصيل الأداء.',
        explanationEn: 'This checks the contents heading and unit reference; consult the textbook and teacher for performance details.',
        difficulty: 'easy',
      }],
    },
  };
});
