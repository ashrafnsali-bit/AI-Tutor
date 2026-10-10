import type { Lecture, LectureDiagramStep } from '../types';

type IslamicArea = 'QURAN' | 'TAWHEED' | 'HADITH' | 'FIQH';

interface IslamicTopic {
  titleAr: string;
  titleEn: string;
  page: number;
}

interface IslamicUnit {
  area: IslamicArea;
  part: 0 | 1 | 2;
  number: number;
  titleAr: string;
  titleEn: string;
  topics: IslamicTopic[];
}

const areaLabelsAr: Record<IslamicArea, string> = {
  QURAN: 'مقرر القرآن الكريم',
  TAWHEED: 'التوحيد',
  HADITH: 'الحديث والسيرة',
  FIQH: 'الفقه',
};

const areaLabelsEn: Record<IslamicArea, string> = {
  QURAN: 'Holy Quran Course',
  TAWHEED: 'Tawheed',
  HADITH: 'Hadith and Seerah',
  FIQH: 'Fiqh',
};

const unitNumbersAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'] as const;

const sourceNoteAr =
  'المصدر: كتاب الدراسات الإسلامية للصف السادس الابتدائي، طبعة الغلاف 1448هـ/2026م، من وزارة التعليم السعودية. طوبقت العناوين وأرقام الصفحات مع فهرس الكتاب العام (صفحة PDF 5)، وفهارس القرآن والتوحيد والحديث والسيرة والفقه (صفحات PDF 6–13 و138–141). صفحة البيانات الداخلية (PDF 2) تذكر 1446هـ؛ لذلك أُظهر اختلاف الطبعة بدل إخفائه. فُحصت صفحات الفهرس والبيانات فقط، ولم تراجع جميع صفحات الدروس. الشروح والأنشطة والرسوم والتقويمات في المنصة أصلية ومساندة وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Source: the Saudi Ministry of Education Grade 6 Islamic Studies textbook, whose cover states 1448 AH/2026. Headings and page references were checked against the book contents (PDF p. 5) and the Quran, Tawheed, Hadith and Seerah, and Fiqh contents pages (PDF pp. 6–13 and 138–141). The internal publication record on PDF p. 2 says 1446 AH; this discrepancy is disclosed. Contents and publication pages were checked, but lesson pages were not comprehensively reviewed. Platform explanations, activities, diagrams, and assessments are original supplementary material, not copied from the textbook.';

const units: IslamicUnit[] = [
  {
    area: 'QURAN',
    part: 0,
    number: 0,
    titleAr: 'مقرر القرآن الكريم',
    titleEn: 'Holy Quran Course',
    topics: [
      { titleAr: 'مقرر القرآن الكريم', titleEn: 'Holy Quran Course', page: 6 },
      { titleAr: 'أهداف مقرر القرآن الكريم', titleEn: 'Objectives of the Holy Quran Course', page: 7 },
      { titleAr: 'خطة التعليم العام للقرآن الكريم', titleEn: 'General Education Quran Plan', page: 8 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 1,
    number: 1,
    titleAr: 'الإيمان',
    titleEn: 'Faith',
    topics: [
      { titleAr: 'الإيمان', titleEn: 'Faith', page: 16 },
      { titleAr: 'شُعَب الإيمان', titleEn: 'Branches of Faith', page: 20 },
      { titleAr: 'نواقض الإيمان ومنقصاته', titleEn: 'Nullifiers and Deficiencies of Faith', page: 24 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 1,
    number: 2,
    titleAr: 'الشرك',
    titleEn: 'Shirk',
    topics: [
      { titleAr: 'معنى الشرك', titleEn: 'The Meaning of Shirk', page: 28 },
      { titleAr: 'أنواع الشرك', titleEn: 'Types of Shirk', page: 31 },
      { titleAr: 'مظاهر الشرك', titleEn: 'Manifestations of Shirk', page: 34 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 1,
    number: 3,
    titleAr: 'البدع والذنوب والمعاصي',
    titleEn: 'Religious Innovations, Sins, and Disobedience',
    topics: [
      { titleAr: 'البدع', titleEn: 'Religious Innovations', page: 38 },
      { titleAr: 'الذنوب والمعاصي', titleEn: 'Sins and Disobedience', page: 40 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 1,
    number: 4,
    titleAr: 'منهج أهل السنة والجماعة في العقيدة',
    titleEn: 'The Methodology of Ahl al-Sunnah wa al-Jamaah in Creed',
    topics: [
      {
        titleAr: 'منهج أهل السنة والجماعة في العقيدة',
        titleEn: 'The Methodology of Ahl al-Sunnah wa al-Jamaah in Creed',
        page: 44,
      },
    ],
  },
  {
    area: 'HADITH',
    part: 1,
    number: 1,
    titleAr: 'هدي النبي ﷺ في معاملة الصغار والأقارب والأصحاب والجيران',
    titleEn: 'The Prophet’s Guidance in Treating Children, Relatives, Companions, and Neighbours',
    topics: [
      { titleAr: 'رحمة النبي ﷺ للصغار وملاطفته لهم', titleEn: 'The Prophet’s Compassion and Gentleness toward Children', page: 50 },
      { titleAr: 'دعاؤه ﷺ للصغار وتشجيعهم على العمل', titleEn: 'The Prophet’s Prayers for Children and Encouragement of Their Deeds', page: 53 },
      { titleAr: 'الرحمة بالصغير وتقدير الكبير', titleEn: 'Showing Mercy to the Young and Respect to the Elderly', page: 55 },
      { titleAr: 'محبته ﷺ لذوي رحمه ودعوتهم للخير', titleEn: 'The Prophet’s Love for His Relatives and Invitation to Goodness', page: 57 },
      { titleAr: 'من فضائل صلة الرحم', titleEn: 'Virtues of Maintaining Family Ties', page: 61 },
      { titleAr: 'تواضعه ﷺ وبشاشته مع جلسائه', titleEn: 'The Prophet’s Humility and Cheerfulness with His Companions', page: 63 },
      { titleAr: 'من آداب المجلس', titleEn: 'Etiquette of Gatherings', page: 66 },
      { titleAr: 'هدي النبي ﷺ في تعامله مع جيرانه', titleEn: 'The Prophet’s Guidance in Treating His Neighbours', page: 68 },
    ],
  },
  {
    area: 'HADITH',
    part: 1,
    number: 2,
    titleAr: 'هدي النبي ﷺ في معاملة القائمين على قضاء حوائجه والعمال والضيوف',
    titleEn: 'The Prophet’s Guidance in Treating Assistants, Workers, and Guests',
    topics: [
      { titleAr: 'هدي النبي ﷺ في معاملة القائمين على قضاء حوائجه', titleEn: 'The Prophet’s Guidance in Treating Those Who Served His Needs', page: 72 },
      { titleAr: 'نهي النبي ﷺ عن منع الأجير أجره', titleEn: 'The Prophet’s Prohibition against Withholding a Worker’s Wages', page: 76 },
      { titleAr: 'هدي النبي ﷺ في التعامل مع الوفود والضيوف', titleEn: 'The Prophet’s Guidance in Welcoming Delegations and Guests', page: 79 },
    ],
  },
  {
    area: 'HADITH',
    part: 1,
    number: 3,
    titleAr: 'هدي النبي ﷺ مع غير المسلمين',
    titleEn: 'The Prophet’s Guidance in Relations with Non-Muslims',
    topics: [
      { titleAr: 'هدي النبي ﷺ في التعامل مع غير المسلمين', titleEn: 'The Prophet’s Guidance in Dealing with Non-Muslims', page: 84 },
      { titleAr: 'صلة الوالدين غير المسلمين', titleEn: 'Maintaining Ties with Non-Muslim Parents', page: 88 },
    ],
  },
  {
    area: 'HADITH',
    part: 1,
    number: 4,
    titleAr: 'هدي النبي ﷺ في التعامل مع الحيوان',
    titleEn: 'The Prophet’s Guidance in Treating Animals',
    topics: [
      { titleAr: 'إحسان النبي ﷺ إلى الحيوان', titleEn: 'The Prophet’s Kindness to Animals', page: 92 },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    number: 1,
    titleAr: 'صلاة الجمعة',
    titleEn: 'Friday Prayer',
    topics: [
      { titleAr: 'حكم صلاة الجمعة، وصفتها', titleEn: 'Ruling and Description of Friday Prayer', page: 100 },
      { titleAr: 'مستحبات الجمعة', titleEn: 'Recommended Practices on Friday', page: 103 },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    number: 2,
    titleAr: 'الحكمة من مشروعية العيد وصلاة العيدين',
    titleEn: 'The Wisdom behind Eid and the Two Eid Prayers',
    topics: [
      { titleAr: 'الحكمة من مشروعية العيد', titleEn: 'The Wisdom behind the Legislation of Eid', page: 108 },
      { titleAr: 'صلاة العيدين', titleEn: 'The Two Eid Prayers', page: 110 },
      { titleAr: 'سنن العيدين', titleEn: 'Sunnahs of the Two Eids', page: 114 },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    number: 3,
    titleAr: 'صلاة الاستسقاء',
    titleEn: 'Prayer for Rain',
    topics: [
      { titleAr: 'الاستسقاء', titleEn: 'Seeking Rain', page: 120 },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    number: 4,
    titleAr: 'صلاة الكسوف والخسوف',
    titleEn: 'Solar and Lunar Eclipse Prayer',
    topics: [
      { titleAr: 'الكسوف والخسوف', titleEn: 'Solar and Lunar Eclipses', page: 126 },
      { titleAr: 'صفة صلاة الكسوف والخسوف', titleEn: 'Description of the Eclipse Prayer', page: 129 },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    number: 5,
    titleAr: 'الصلاة على الميت',
    titleEn: 'Funeral Prayer',
    topics: [
      { titleAr: 'الصلاة على الميت', titleEn: 'Funeral Prayer', page: 134 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 2,
    number: 1,
    titleAr: 'اليوم الآخر',
    titleEn: 'The Last Day',
    topics: [
      { titleAr: 'الإيمان باليوم الآخر', titleEn: 'Belief in the Last Day', page: 144 },
      { titleAr: 'الجنة والنار', titleEn: 'Paradise and Hellfire', page: 146 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 2,
    number: 2,
    titleAr: 'حقوق الرسول ﷺ',
    titleEn: 'The Rights of the Messenger ﷺ',
    topics: [
      { titleAr: 'حقوق الرسول ﷺ ونتائج القيام بها', titleEn: 'The Messenger’s Rights and the Outcomes of Fulfilling Them', page: 152 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 2,
    number: 3,
    titleAr: 'حقوق أهل بيت النبي ﷺ وزوجاته',
    titleEn: 'The Rights of the Prophet’s Family and Wives',
    topics: [
      { titleAr: 'حقوق أهل بيت النبي ﷺ', titleEn: 'The Rights of the Prophet’s Family', page: 158 },
      { titleAr: 'حقوق زوجات النبي ﷺ', titleEn: 'The Rights of the Prophet’s Wives', page: 160 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 2,
    number: 4,
    titleAr: 'حقوق الصحابة والخلفاء الراشدين',
    titleEn: 'The Rights of the Companions and the Rightly Guided Caliphs',
    topics: [
      { titleAr: 'حقوق الصحابة', titleEn: 'The Rights of the Companions', page: 166 },
      { titleAr: 'حقوق الخلفاء الراشدين', titleEn: 'The Rights of the Rightly Guided Caliphs', page: 169 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 2,
    number: 5,
    titleAr: 'حقوق ولي الأمر',
    titleEn: 'The Rights of the Ruler',
    topics: [
      { titleAr: 'الواجب لولي الأمر', titleEn: 'Duties toward the Ruler', page: 176 },
    ],
  },
  {
    area: 'HADITH',
    part: 2,
    number: 1,
    titleAr: 'بركة النبي ﷺ',
    titleEn: 'Blessings through the Prophet ﷺ',
    topics: [
      { titleAr: 'تكثير الماء بين يدي النبي ﷺ', titleEn: 'The Increase of Water in the Prophet’s Presence', page: 182 },
      { titleAr: 'تكثير الطعام بين يدي النبي ﷺ', titleEn: 'The Increase of Food in the Prophet’s Presence', page: 184 },
      { titleAr: 'البركة في الطعام', titleEn: 'Blessing in Food', page: 187 },
    ],
  },
  {
    area: 'HADITH',
    part: 2,
    number: 2,
    titleAr: 'حفظ الله لنبيه ﷺ',
    titleEn: 'Allah’s Protection of His Prophet ﷺ',
    topics: [
      { titleAr: 'مواقف من حفظ الله لنبيه ﷺ', titleEn: 'Examples of Allah’s Protection of His Prophet', page: 190 },
      { titleAr: 'أسباب حفظ الله للإنسان', titleEn: 'Reasons for Allah’s Protection of a Person', page: 193 },
    ],
  },
  {
    area: 'HADITH',
    part: 2,
    number: 3,
    titleAr: 'النبي القدوة ﷺ',
    titleEn: 'The Prophet ﷺ as an Example',
    topics: [
      { titleAr: 'محبة النبي ﷺ', titleEn: 'Loving the Prophet ﷺ', page: 198 },
      { titleAr: 'التأسي بالنبي ﷺ وأمثلته', titleEn: 'Following the Prophet ﷺ and Examples of Doing So', page: 202 },
      { titleAr: 'التأسي بالنبي ﷺ في صلاته', titleEn: 'Following the Prophet’s Example in Prayer', page: 206 },
    ],
  },
  {
    area: 'HADITH',
    part: 2,
    number: 4,
    titleAr: 'الصلاة على النبي ﷺ',
    titleEn: 'Sending Blessings upon the Prophet ﷺ',
    topics: [
      { titleAr: 'الصلاة على النبي ﷺ: معناها، فضلها، صفتها', titleEn: 'Sending Blessings upon the Prophet: Meaning, Virtue, and Form', page: 210 },
      { titleAr: 'الصلاة على النبي ﷺ بعد الأذان', titleEn: 'Sending Blessings upon the Prophet after the Call to Prayer', page: 214 },
      { titleAr: 'الصلاة على النبي ﷺ عند الدعاء', titleEn: 'Sending Blessings upon the Prophet during Supplication', page: 217 },
    ],
  },
  {
    area: 'HADITH',
    part: 2,
    number: 5,
    titleAr: 'الصحابة وأهل بيت النبي ﷺ',
    titleEn: 'The Companions and the Prophet’s Family',
    topics: [
      { titleAr: 'وصية النبي ﷺ بأهل بيته', titleEn: 'The Prophet’s Counsel concerning His Family', page: 222 },
      { titleAr: 'محبة الصحابة لأهل بيت النبي ﷺ', titleEn: 'The Companions’ Love for the Prophet’s Family', page: 226 },
    ],
  },
  {
    area: 'FIQH',
    part: 2,
    number: 1,
    titleAr: 'الزكاة',
    titleEn: 'Zakah',
    topics: [
      { titleAr: 'حكم الزكاة ومكانتها', titleEn: 'The Ruling and Status of Zakah', page: 232 },
    ],
  },
  {
    area: 'FIQH',
    part: 2,
    number: 2,
    titleAr: 'زكاة الفطر وصدقة التطوع',
    titleEn: 'Zakat al-Fitr and Voluntary Charity',
    topics: [
      { titleAr: 'زكاة الفطر', titleEn: 'Zakat al-Fitr', page: 236 },
      { titleAr: 'صدقة التطوع', titleEn: 'Voluntary Charity', page: 238 },
    ],
  },
  {
    area: 'FIQH',
    part: 2,
    number: 3,
    titleAr: 'الصيام',
    titleEn: 'Fasting',
    topics: [
      { titleAr: 'الصيام (مكانته - حكمه)', titleEn: 'Fasting (Its Status and Ruling)', page: 242 },
      { titleAr: 'الذين يباح لهم الفطر في رمضان', titleEn: 'Those Permitted to Break the Fast in Ramadan', page: 246 },
      { titleAr: 'العشر الأواخر', titleEn: 'The Last Ten Days', page: 249 },
    ],
  },
  {
    area: 'FIQH',
    part: 2,
    number: 4,
    titleAr: 'الحج والعمرة',
    titleEn: 'Hajj and Umrah',
    topics: [
      { titleAr: 'الحج والعمرة ومنزلتهما', titleEn: 'Hajj and Umrah and Their Status', page: 252 },
      { titleAr: 'مواقيت الحج والعمرة', titleEn: 'Miqat of Hajj and Umrah', page: 255 },
      { titleAr: 'الإحرام', titleEn: 'Ihram', page: 257 },
      { titleAr: 'أركان العمرة وواجباتها', titleEn: 'Pillars and Obligations of Umrah', page: 260 },
      { titleAr: 'صفة العمرة', titleEn: 'Description of Umrah', page: 261 },
    ],
  },
];

const otherAreaDistractions: Record<Exclude<IslamicArea, 'QURAN'>, [IslamicTopic, IslamicTopic]> = {
  TAWHEED: [
    { titleAr: 'حكم الزكاة ومكانتها', titleEn: 'The Ruling and Status of Zakah', page: 232 },
    { titleAr: 'صلاة الجمعة', titleEn: 'Friday Prayer', page: 100 },
  ],
  HADITH: [
    { titleAr: 'شُعَب الإيمان', titleEn: 'Branches of Faith', page: 20 },
    { titleAr: 'الاستسقاء', titleEn: 'Seeking Rain', page: 120 },
  ],
  FIQH: [
    { titleAr: 'منهج أهل السنة والجماعة في العقيدة', titleEn: 'Methodology of Ahl al-Sunnah wa al-Jamaah in Creed', page: 44 },
    { titleAr: 'من آداب المجلس', titleEn: 'Etiquette of Gatherings', page: 66 },
  ],
};

function getAssessmentOptions(unit: IslamicUnit): [string, string, string, string, string, string] {
  if (unit.area === 'QURAN') {
    return [
      'التلاوة والحفظ وآداب التلاوة',
      'الزكاة والصيام والحج فقط',
      'التاريخ والجغرافيا',
      'Recitation, memorization, and recitation etiquette',
      'Zakah, fasting, and Hajj only',
      'History and geography',
    ];
  }

  const distractors = otherAreaDistractions[unit.area];
  return [
    unit.topics[0].titleAr,
    distractors[0].titleAr,
    distractors[1].titleAr,
    unit.topics[0].titleEn,
    distractors[0].titleEn,
    distractors[1].titleEn,
  ];
}

function getLessonGuidance(unit: IslamicUnit, topic: IslamicTopic): { ar: string; en: string } {
  if (unit.area === 'QURAN') {
    return {
      ar: topic.page === 8
        ? 'تعرّف إلى الخطة المخصصة للتعليم العام في الكتاب؛ وتبقى مقررات التلاوة والتجويد التفصيلية مسارات مستقلة في المنصة.'
        : 'تعرّف إلى مكوّن مقرر القرآن وأهدافه كما وردت في الصفحات التمهيدية، دون استبدال التدريب العملي على التلاوة والحفظ.',
      en: topic.page === 8
        ? 'Review the plan specified for general education; the detailed recitation and Tajweed courses remain separate platform courses.'
        : 'Review the Quran course component and its stated objectives in the introductory pages; this does not replace practical recitation or memorization.',
    };
  }

  const guidanceByArea: Record<Exclude<IslamicArea, 'QURAN'>, { ar: string; en: string }> = {
    TAWHEED: {
      ar: 'راجع عنوان الدرس في الكتاب، واستخرج المفاهيم والأدلة التي يشرحها، ثم ناقش فهمك مع معلم المادة.',
      en: 'Review the lesson heading in the textbook, identify the concepts and evidence it explains, and discuss your understanding with the teacher.',
    },
    HADITH: {
      ar: 'اقرأ الدرس من الكتاب، وحدد الفكرة والسلوك الذي يعرضه العنوان، ثم ناقش تطبيقًا مناسبًا مع المعلم.',
      en: 'Read the textbook lesson, identify the idea and conduct indicated by its heading, and discuss an appropriate application with the teacher.',
    },
    FIQH: {
      ar: 'راجع موضوع الدرس وأحكامه من صفحات الكتاب، ونظّم النقاط الرئيسة في ملخص بإشراف معلم المادة.',
      en: 'Review the topic and rulings in the textbook pages, then organize the main points in a summary with the teacher.',
    },
  };

  return guidanceByArea[unit.area];
}

export const SAUDI_G6_ISLAMIC_STUDIES_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K06-SM1-ISLM.pdf';

export const SAUDI_G6_ISLAMIC_STUDIES_UNIT_COUNT = units.length;
export const SAUDI_G6_ISLAMIC_STUDIES_LESSON_COUNT = units
  .filter((unit) => unit.area !== 'QURAN')
  .reduce((count, unit) => count + unit.topics.length, 0);

export const SAUDI_G6_ISLAMIC_STUDIES_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const firstTopic = unit.topics[0];
  const unitNumber = unit.number > 0 ? unitNumbersAr[unit.number - 1] : '';
  const unitLabelAr = unit.number > 0 ? `الوحدة ${unitNumber}: ${unit.titleAr}` : unit.titleAr;
  const unitLabelEn = unit.number > 0 ? `Unit ${unit.number}: ${unit.titleEn}` : unit.titleEn;
  const partLabelAr = unit.part > 0 ? `الجزء ${unit.part === 1 ? 'الأول' : 'الثاني'}` : 'الخطة العامة';
  const partLabelEn = unit.part > 0 ? `Part ${unit.part}` : 'General plan';
  const sourceContentsPages = unit.area === 'QURAN'
    ? 'صفحات PDF 6–8'
    : unit.part === 1
      ? unit.area === 'TAWHEED' ? 'صفحة PDF 10' : unit.area === 'HADITH' ? 'صفحة PDF 11' : 'صفحات PDF 12–13'
      : unit.area === 'TAWHEED' ? 'صفحات PDF 138–139' : unit.area === 'HADITH' ? 'صفحات PDF 139–140' : 'صفحة PDF 141';
  const visualSteps: LectureDiagramStep[] = unit.topics.slice(0, 4).map((topic) => ({
    labelAr: topic.titleAr,
    labelEn: topic.titleEn,
  }));
  while (visualSteps.length < 4) {
    visualSteps.push({
      labelAr: ['عنوان الوحدة', 'مراجعة الكتاب', 'حوار مع المعلم', 'تطبيق تربوي'][visualSteps.length],
      labelEn: ['Unit heading', 'Textbook review', 'Teacher discussion', 'Learning application'][visualSteps.length],
    });
  }
  const options = getAssessmentOptions(unit);
  const assessmentQuestionAr = unit.area === 'QURAN'
    ? 'ما الجوانب التي تذكرها أهداف مقرر القرآن الكريم في الصفحات التمهيدية؟'
    : `أي عنوان درس يرد في فهرس وحدة «${unit.titleAr}»؟`;
  const assessmentQuestionEn = unit.area === 'QURAN'
    ? 'Which aspects are named in the introductory objectives of the Holy Quran course?'
    : `Which lesson heading appears in the contents for “${unit.titleEn}”?`;

  return {
    id: `saudi-g6-islamic-studies-1448-${order}`,
    order,
    titleAr: `${areaLabelsAr[unit.area]} — ${unitLabelAr}`,
    titleEn: `${areaLabelsEn[unit.area]} — ${unitLabelEn}`,
    subtitleAr: `الصف السادس الابتدائي — ${partLabelAr} — ص ${firstTopic.page}`,
    subtitleEn: `Grade 6 — ${partLabelEn} — p. ${firstTopic.page}`,
    descriptionAr: `${sourceNoteAr}\n\nفهرس الوحدة متحقق منه في ${sourceContentsPages}. الشرح الإرشادي والأنشطة والرسوم والأسئلة من إعداد المنصة ولا تمثل نقلًا أو شرحًا تفصيليًا لمتن الدرس.`,
    descriptionEn: `${sourceNoteEn}\n\nThe unit contents were checked on ${sourceContentsPages}. Guidance, activities, diagrams, and questions are original platform material, not copied or presented as a detailed explanation of the lesson text.`,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G6',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب الدراسات الإسلامية',
    ministryEn: 'Saudi Ministry of Education — Islamic Studies textbook',
    gradeLevelNameAr: 'الصف السادس الابتدائي — الدراسات الإسلامية',
    gradeLevelNameEn: 'Grade 6 — Islamic Studies',
    termAr: unit.part > 0 ? `${partLabelAr} — طبعة الغلاف 1448هـ/2026م` : 'مقرر القرآن الكريم — التعليم العام',
    termEn: unit.part > 0 ? `${partLabelEn} — 1448 AH/2026 cover edition` : 'Holy Quran Course — General Education',
    unitTitleAr: unitLabelAr,
    unitTitleEn: unitLabelEn,
    lessonNumberAr: `${unitLabelAr} — ${unit.topics.length} موضوعات في الفهرس`,
    lessonNumberEn: `${unitLabelEn} — ${unit.topics.length} contents headings`,
    warmupHookAr: unit.area === 'QURAN'
      ? 'استعرض أهداف المقرر وخطته المخصصة للتعليم العام، ثم انتقل إلى تدريب التلاوة والحفظ في المسار المنفصل.'
      : `ابدأ بتحديد عنوان «${unit.titleAr}» في فهرس الكتاب، ثم راجع صفحات الدروس بالترتيب مع معلمك.`,
    warmupHookEn: unit.area === 'QURAN'
      ? 'Review the course objectives and the plan for general education, then use the separate course for recitation and memorization practice.'
      : `Locate “${unit.titleEn}” in the textbook contents, then review its lesson pages in order with your teacher.`,
    learningOutcomesAr: [
      `يتعرف عناوين الدروس الواردة في وحدة «${unit.titleAr}» ويربطها بأرقام صفحاتها.`,
      unit.area === 'QURAN'
        ? 'يميز بين خطة القرآن العامة هنا ومساري التلاوة والتجويد المنفصلين في المنصة.'
        : 'يراجع شرح الدروس وتطبيقاتها من الكتاب ومعلم المادة؛ إذ لم تُراجع صفحات المتن كاملة.',
    ],
    learningOutcomesEn: [
      `Identify the lesson headings in “${unit.titleEn}” and match them to their page references.`,
      unit.area === 'QURAN'
        ? 'Distinguish this general Quran plan from the separate recitation and Tajweed courses on the platform.'
        : 'Study detailed explanations and applications from the textbook and teacher; the lesson text was not comprehensively reviewed.',
    ],
    keyConceptsAr: unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`),
    keyConceptsEn: unit.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`),
    summaryAr: `${unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`).join('\n')}\n\n${sourceNoteAr}`,
    summaryEn: `${unit.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`).join('\n')}\n\n${sourceNoteEn}`,
    sections: unit.topics.map((topic, topicIndex) => {
      const guidance = getLessonGuidance(unit, topic);
      return {
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${guidance.ar}\n\nمرجع الفهرس: ص ${topic.page}.`,
        contentEn: `${guidance.en}\n\nContents reference: p. ${topic.page}.`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g6-islamic-studies-map-${order}`,
            figureNumberAr: `شكل (${order})`,
            figureNumberEn: `Figure (${order})`,
            titleAr: `خريطة تعليمية: ${unit.titleAr}`,
            titleEn: `Learning map: ${unit.titleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'Original learning illustration created by the platform; not an image from the textbook.',
            diagramType: 'arabic_learning_map' as const,
            visualSteps,
            keyLabels: [
              { tagAr: 'المادة', tagEn: 'Subject', descAr: areaLabelsAr[unit.area], descEn: areaLabelsEn[unit.area] },
              { tagAr: 'المرجع', tagEn: 'Reference', descAr: `ص ${firstTopic.page}`, descEn: `p. ${firstTopic.page}` },
            ],
          },
        } : {}),
      };
    }),
    assessment: {
      id: `saudi-g6-islamic-studies-assessment-${order}`,
      lectureId: `saudi-g6-islamic-studies-1448-${order}`,
      titleAr: `تحقق من الفهرس: ${unit.titleAr}`,
      titleEn: `Contents check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g6-islamic-studies-question-${order}`,
        textAr: assessmentQuestionAr,
        textEn: assessmentQuestionEn,
        optionsAr: options.slice(0, 3),
        optionsEn: options.slice(3),
        correctIndex: 0,
        conceptTestedAr: unit.titleAr,
        conceptTestedEn: unit.titleEn,
        explanationAr: 'هذا السؤال للتحقق من مطابقة عنوان الفهرس للوحدة، ولا يغني عن دراسة صفحات الدرس في الكتاب.',
        explanationEn: 'This question checks the contents heading for the unit and does not replace studying the textbook lesson pages.',
        difficulty: 'easy',
      }],
    },
  };
});
