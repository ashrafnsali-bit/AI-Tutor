import type { Lecture, LectureDiagramStep } from '../types';

type IslamicArea = 'QURAN' | 'TAWHEED' | 'HADITH' | 'FIQH';

interface IslamicTopic {
  titleAr: string;
  titleEn: string;
  page: number;
}

interface IslamicSection {
  area: IslamicArea;
  part: 0 | 1 | 2;
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

const sourceNoteAr =
  'المصدر: كتاب الدراسات الإسلامية للصف الرابع الابتدائي؛ الغلاف يذكر طبعة 1448هـ/2026م، وسجل النشر الداخلي في صفحة PDF 2 يذكر 1446هـ. طوبقت خطة القرآن وعناوين الموضوعات وأرقام الصفحات مع الفهرس العام (PDF ص 5)، والصفحات التمهيدية للقرآن (PDF ص 6–8)، وفهارس الجزء الأول (PDF ص 10–12) والجزء الثاني (PDF ص 126–129). لم تراجع جميع صفحات الدروس تفصيليًا. الشروح والأنشطة والرسوم والتقويمات في المنصة مواد أصلية مساندة وليست منقولة من الكتاب؛ وقسم القرآن هنا تعريفي ولا يقدم تدريبًا تفصيليًا على التلاوة أو الحفظ أو التجويد.';
const sourceNoteEn =
  'Source: the Grade 4 Islamic Studies textbook. The cover states the 1448 AH/2026 edition, while the internal publication record on PDF page 2 states 1446 AH. The Quran plan, topic headings, and page references were checked against the general contents (PDF p. 5), Quran introductory pages (PDF pp. 6–8), and the contents for Part One (PDF pp. 10–12) and Part Two (PDF pp. 126–129). Lesson pages were not reviewed in detail. Platform guidance, activities, diagrams, and assessments are original supplementary material, not copied from the textbook; the Quran section is introductory and does not provide detailed recitation, memorization, or Tajweed practice.';

const sections: IslamicSection[] = [
  {
    area: 'QURAN',
    part: 0,
    topics: [
      { titleAr: 'مقرر القرآن الكريم', titleEn: 'Holy Quran Course', page: 6 },
      { titleAr: 'أهداف مقرر القرآن الكريم', titleEn: 'Objectives of the Holy Quran Course', page: 7 },
      { titleAr: 'خطة التعليم العام للقرآن الكريم', titleEn: 'General Education Quran Plan', page: 8 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 1,
    topics: [
      { titleAr: 'التوحيد وأنواعه', titleEn: 'Tawheed and Its Types', page: 16 },
      { titleAr: 'توحيد الربوبية والإقرار به', titleEn: 'Tawheed of Lordship and Affirming It', page: 20 },
      { titleAr: 'التعريف بتوحيد الألوهية', titleEn: 'Introduction to Tawheed of Divinity', page: 23 },
      { titleAr: 'أهمية توحيد الألوهية وموقف المشركين منه', titleEn: 'The Importance of Tawheed of Divinity and the Polytheists’ Position', page: 27 },
      { titleAr: 'العبادة', titleEn: 'Worship', page: 32 },
      { titleAr: 'أنواع العبادة', titleEn: 'Types of Worship', page: 34 },
      { titleAr: 'شروط قبول العبادة', titleEn: 'Conditions for the Acceptance of Worship', page: 36 },
    ],
  },
  {
    area: 'HADITH',
    part: 1,
    topics: [
      { titleAr: 'أتعلم سيرة النبي ﷺ', titleEn: 'Learning about the Prophet’s Biography ﷺ', page: 42 },
      { titleAr: 'نسب النبي ﷺ', titleEn: 'The Prophet’s Lineage ﷺ', page: 45 },
      { titleAr: 'أوصاف النبي ﷺ', titleEn: 'The Prophet’s Characteristics ﷺ', page: 47 },
      { titleAr: 'النبي ﷺ أفضل الناس', titleEn: 'The Prophet ﷺ Is the Best of People', page: 50 },
      { titleAr: 'من فضائل النبي ﷺ', titleEn: 'Some Virtues of the Prophet ﷺ', page: 54 },
      { titleAr: 'عيش النبي ﷺ', titleEn: 'The Prophet’s Way of Life ﷺ', page: 57 },
      { titleAr: 'بيت النبي ﷺ', titleEn: 'The Prophet’s Household ﷺ', page: 62 },
      { titleAr: 'أم المؤمنين خديجة بنت خويلد', titleEn: 'The Mother of the Believers Khadijah bint Khuwaylid', page: 65 },
      { titleAr: 'أم المؤمنين عائشة بنت أبي بكر الصديق', titleEn: 'The Mother of the Believers Aishah bint Abi Bakr Al-Siddiq', page: 68 },
      { titleAr: 'أم المؤمنين حفصة بنت عمر بن الخطاب', titleEn: 'The Mother of the Believers Hafsah bint Umar ibn Al-Khattab', page: 72 },
      { titleAr: 'أولاد النبي ﷺ وأهل بيته', titleEn: 'The Prophet’s Children and Household ﷺ', page: 74 },
      { titleAr: 'معاملة النبي ﷺ لأزواجه', titleEn: 'The Prophet’s Treatment of His Wives ﷺ', page: 78 },
      { titleAr: 'حسن تعامله ﷺ مع أهله', titleEn: 'The Prophet’s Kind Treatment of His Family ﷺ', page: 80 },
      { titleAr: 'حسن تعامله ﷺ مع القائمين على قضاء حوائجه', titleEn: 'The Prophet’s Kind Treatment of Those Who Served Him ﷺ', page: 82 },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    topics: [
      { titleAr: 'نعمة الماء', titleEn: 'The Blessing of Water', page: 88 },
      { titleAr: 'الماء الطهور', titleEn: 'Purifying Water', page: 91 },
      { titleAr: 'الماء النجس', titleEn: 'Impure Water', page: 94 },
      { titleAr: 'فضل الطهارة', titleEn: 'The Virtue of Purification', page: 98 },
      { titleAr: 'الوضوء', titleEn: 'Ablution (Wudu)', page: 103 },
      { titleAr: 'فروض الوضوء', titleEn: 'Obligatory Acts of Wudu', page: 107 },
      { titleAr: 'سنن الوضوء', titleEn: 'Recommended Practices of Wudu', page: 110 },
      { titleAr: 'نواقض الوضوء', titleEn: 'What Invalidates Wudu', page: 115 },
      { titleAr: 'الخف والجورب', titleEn: 'Leather Socks and Socks', page: 118 },
      { titleAr: 'مدة المسح', titleEn: 'The Duration of Wiping', page: 121 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 2,
    topics: [
      { titleAr: 'توحيد الأسماء والصفات وأثره في حياة المسلم', titleEn: 'Tawheed of the Names and Attributes and Its Effect on a Muslim’s Life', page: 132 },
      { titleAr: 'أسماء الله الحسنى', titleEn: 'The Most Beautiful Names of Allah', page: 136 },
      { titleAr: 'معاني أسماء الله الحسنى (1)', titleEn: 'Meanings of the Most Beautiful Names of Allah (1)', page: 139 },
      { titleAr: 'معاني أسماء الله الحسنى (2)', titleEn: 'Meanings of the Most Beautiful Names of Allah (2)', page: 142 },
      { titleAr: 'أثر الإيمان بأسماء الله وصفاته في حياتنا', titleEn: 'How Belief in Allah’s Names and Attributes Affects Our Lives', page: 146 },
    ],
  },
  {
    area: 'HADITH',
    part: 2,
    topics: [
      { titleAr: 'نظافة النبي ﷺ', titleEn: 'The Prophet’s Cleanliness ﷺ', page: 152 },
      { titleAr: 'لباس النبي ﷺ', titleEn: 'The Prophet’s Clothing ﷺ', page: 156 },
      { titleAr: 'الاقتداء بالهدي النبوي في اللباس', titleEn: 'Following the Prophet’s Guidance in Dress', page: 158 },
      { titleAr: 'أكل النبي ﷺ وشربه', titleEn: 'The Prophet’s Eating and Drinking ﷺ', page: 162 },
      { titleAr: 'نوم النبي ﷺ', titleEn: 'The Prophet’s Sleep ﷺ', page: 166 },
      { titleAr: 'سلام النبي ﷺ', titleEn: 'The Prophet’s Greeting ﷺ', page: 172 },
      { titleAr: 'فضل السلام', titleEn: 'The Virtue of Greeting Others with Peace', page: 174 },
      { titleAr: 'استئذان النبي ﷺ', titleEn: 'The Prophet’s Practice of Seeking Permission ﷺ', page: 177 },
      { titleAr: 'من آداب الاستئذان', titleEn: 'Etiquette of Seeking Permission', page: 180 },
      { titleAr: 'صفة كلام النبي ﷺ', titleEn: 'The Prophet’s Manner of Speaking ﷺ', page: 182 },
      { titleAr: 'صفة استماع النبي ﷺ', titleEn: 'The Prophet’s Manner of Listening ﷺ', page: 184 },
      { titleAr: 'البعد عن الكلام السيئ', titleEn: 'Avoiding Bad Speech', page: 187 },
      { titleAr: 'صفة ضحك النبي ﷺ', titleEn: 'The Prophet’s Manner of Laughing ﷺ', page: 190 },
      { titleAr: 'صفة مزاح النبي ﷺ', titleEn: 'The Prophet’s Manner of Joking ﷺ', page: 193 },
      { titleAr: 'الصدق في المزاح', titleEn: 'Truthfulness When Joking', page: 195 },
    ],
  },
  {
    area: 'FIQH',
    part: 2,
    topics: [
      { titleAr: 'التيمم', titleEn: 'Dry Ablution (Tayammum)', page: 200 },
      { titleAr: 'منزلة الصلاة', titleEn: 'The Status of Prayer', page: 204 },
      { titleAr: 'التبكير إلى الصلاة', titleEn: 'Going Early to Prayer', page: 208 },
      { titleAr: 'أوقات الصلوات المفروضة', titleEn: 'Times of the Obligatory Prayers', page: 210 },
      { titleAr: 'صلاة الجماعة', titleEn: 'Congregational Prayer', page: 212 },
      { titleAr: 'قضاء الصلاة الفائتة', titleEn: 'Making Up a Missed Prayer', page: 214 },
      { titleAr: 'آداب المسجد', titleEn: 'Mosque Etiquette', page: 217 },
      { titleAr: 'أركان الصلاة', titleEn: 'Pillars of Prayer', page: 222 },
      { titleAr: 'واجبات الصلاة', titleEn: 'Obligatory Acts of Prayer', page: 227 },
      { titleAr: 'فضل سورة الفاتحة وتفسيرها', titleEn: 'The Virtue and Explanation of Surat Al-Fatihah', page: 231 },
      { titleAr: 'الذكر بعد الصلاة', titleEn: 'Remembrance after Prayer', page: 238 },
    ],
  },
];

function getContentsPage(section: IslamicSection): string {
  if (section.area === 'QURAN') return 'صفحات PDF 6–8';
  if (section.part === 1) {
    return section.area === 'TAWHEED'
      ? 'صفحة PDF 10'
      : section.area === 'HADITH'
        ? 'صفحة PDF 11'
        : 'صفحة PDF 12';
  }
  return section.area === 'TAWHEED'
    ? 'صفحة PDF 126'
    : section.area === 'HADITH'
      ? 'صفحة PDF 127'
      : 'صفحتا PDF 128–129';
}

function getAssessmentDistractors(section: IslamicSection): [IslamicTopic, IslamicTopic] {
  const distractors = sections
    .filter((candidate) => candidate.area !== section.area)
    .flatMap((candidate) => candidate.topics)
    .slice(0, 2);
  return [distractors[0], distractors[1]];
}

function getLessonGuidance(section: IslamicSection, topic: IslamicTopic): { ar: string; en: string } {
  if (section.area === 'QURAN') {
    return {
      ar: topic.page === 8
        ? 'راجع خطة القرآن الكريم المخصصة للتعليم العام، ولاحظ أن التدريب التفصيلي على التلاوة والحفظ والتجويد يُدرس بالممارسة ولا يقدمه هذا المسار.'
        : 'تعرّف إلى مقرر القرآن وأهدافه في الصفحات التمهيدية، واستعن بمعلمك للتدريب العملي على التلاوة والحفظ.',
      en: topic.page === 8
        ? 'Review the Quran plan for general education; detailed recitation, memorization, and Tajweed practice requires guided practice and is not provided in this course.'
        : 'Review the Quran course and its objectives in the introductory pages, and work with your teacher on practical recitation and memorization.',
    };
  }

  const areaGuidance: Record<Exclude<IslamicArea, 'QURAN'>, { ar: string; en: string }> = {
    TAWHEED: {
      ar: 'اقرأ الموضوع في الكتاب، واستخرج فكرته ومفرداته الرئيسة، ثم راجع فهمك مع معلم المادة.',
      en: 'Read the topic in the textbook, identify its main idea and key terms, then review your understanding with the teacher.',
    },
    HADITH: {
      ar: 'راجع الموضوع في الكتاب، وحدد الخُلُق أو المعنى الذي يشير إليه عنوانه، ثم ناقش تطبيقًا مناسبًا مع معلمك.',
      en: 'Review the textbook topic, identify the character trait or meaning in its heading, then discuss an appropriate application with your teacher.',
    },
    FIQH: {
      ar: 'راجع موضوع الدرس وأحكامه من صفحات الكتاب، ونظّم النقاط الرئيسة في ملخص بإشراف معلم المادة.',
      en: 'Review the topic and its rulings in the textbook, then organize the main points in a summary with your teacher’s guidance.',
    },
  };
  return areaGuidance[section.area];
}

export const SAUDI_G4_ISLAMIC_STUDIES_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-ISLM.pdf';

export const SAUDI_G4_ISLAMIC_STUDIES_SECTION_COUNT = sections.length;
export const SAUDI_G4_ISLAMIC_STUDIES_LESSON_COUNT = sections
  .filter((section) => section.area !== 'QURAN')
  .reduce((count, section) => count + section.topics.length, 0);

export const SAUDI_G4_ISLAMIC_STUDIES_TABLE_OF_CONTENTS = sections.flatMap((section) =>
  section.topics.map((topic) => ({
    area: section.area,
    part: section.part,
    titleAr: topic.titleAr,
    page: topic.page,
  }))
);

export const SAUDI_G4_ISLAMIC_STUDIES_CURRICULUM: Lecture[] = sections.map((section, index) => {
  const order = index + 1;
  const areaLabelAr = areaLabelsAr[section.area];
  const areaLabelEn = areaLabelsEn[section.area];
  const firstTopic = section.topics[0];
  const partLabelAr = section.part === 0
    ? 'الخطة العامة'
    : section.part === 1 ? 'الجزء الأول' : 'الجزء الثاني';
  const partLabelEn = section.part === 0
    ? 'General Plan'
    : section.part === 1 ? 'Part One' : 'Part Two';
  const sectionTitleAr = section.part === 0 ? areaLabelAr : `${areaLabelAr} — ${partLabelAr}`;
  const sectionTitleEn = section.part === 0 ? areaLabelEn : `${areaLabelEn} — ${partLabelEn}`;
  const sourceContentsPages = getContentsPage(section);
  const visualSteps: LectureDiagramStep[] = section.topics.slice(0, 4).map((topic) => ({
    labelAr: topic.titleAr,
    labelEn: topic.titleEn,
  }));
  while (visualSteps.length < 4) {
    const fallbackStepsAr = ['عنوان الموضوع', 'مراجعة الكتاب', 'حوار مع المعلم', 'تطبيق تربوي'];
    const fallbackStepsEn = ['Topic heading', 'Textbook review', 'Teacher discussion', 'Learning application'];
    visualSteps.push({
      labelAr: fallbackStepsAr[visualSteps.length],
      labelEn: fallbackStepsEn[visualSteps.length],
    });
  }
  const [firstDistractor, secondDistractor] = getAssessmentDistractors(section);
  const assessmentQuestionAr = section.area === 'QURAN'
    ? 'أي عنوان ورد في الصفحات التمهيدية لمقرر القرآن الكريم؟'
    : `أي عنوان موضوع يرد في فهرس قسم «${areaLabelAr}»؟`;
  const assessmentQuestionEn = section.area === 'QURAN'
    ? 'Which heading appears in the introductory pages of the Holy Quran course?'
    : `Which topic heading appears in the contents for “${areaLabelEn}”?`;
  const lectureId = `saudi-g4-islamic-studies-1448-${order}`;

  return {
    id: lectureId,
    order,
    titleAr: sectionTitleAr,
    titleEn: sectionTitleEn,
    subtitleAr: `الصف الرابع الابتدائي — ${partLabelAr} — ص ${firstTopic.page}`,
    subtitleEn: `Grade 4 — ${partLabelEn} — p. ${firstTopic.page}`,
    descriptionAr: `${sourceNoteAr}\n\nفهرس هذا القسم متحقق منه في ${sourceContentsPages}. الإرشادات والأنشطة والرسوم والأسئلة من إعداد المنصة، ولا تمثل نقلًا أو شرحًا تفصيليًا لمتن الدرس.`,
    descriptionEn: `${sourceNoteEn}\n\nThis section’s contents were checked on ${sourceContentsPages}. Guidance, activities, diagrams, and questions are original platform material, not copied or presented as detailed explanations of the lesson text.`,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب الدراسات الإسلامية',
    ministryEn: 'Saudi Ministry of Education — Islamic Studies textbook',
    gradeLevelNameAr: 'الصف الرابع الابتدائي — الدراسات الإسلامية',
    gradeLevelNameEn: 'Grade 4 — Islamic Studies',
    termAr: section.part === 0
      ? 'مقرر القرآن الكريم — التعليم العام'
      : `${partLabelAr} — طبعة الغلاف 1448هـ/2026م`,
    termEn: section.part === 0
      ? 'Holy Quran Course — General Education'
      : `${partLabelEn} — 1448 AH/2026 cover edition`,
    unitTitleAr: sectionTitleAr,
    unitTitleEn: sectionTitleEn,
    lessonNumberAr: `${section.topics.length} عنوانًا في الفهرس`,
    lessonNumberEn: `${section.topics.length} contents headings`,
    warmupHookAr: section.area === 'QURAN'
      ? 'استعرض أهداف مقرر القرآن وخطته العامة، واستعن بمعلمك في التدريب العملي.'
      : `ابدأ بتحديد عناوين قسم «${areaLabelAr}» في فهرس الكتاب، ثم راجع صفحات الموضوعات مع معلمك.`,
    warmupHookEn: section.area === 'QURAN'
      ? 'Review the Quran course objectives and general plan, and work with your teacher on practical study.'
      : `Locate the “${areaLabelEn}” headings in the textbook contents, then review the topic pages with your teacher.`,
    learningOutcomesAr: [
      `يتعرف عناوين موضوعات ${areaLabelAr} الواردة في ${partLabelAr} ويربطها بأرقام صفحاتها.`,
      section.area === 'QURAN'
        ? 'يميز بين الخطة العامة لمقرر القرآن والتدريب العملي التفصيلي على التلاوة أو التجويد.'
        : 'يراجع شرح الموضوعات وتطبيقاتها من الكتاب ومعلم المادة؛ إذ لم تراجع صفحات المتن كاملة.',
    ],
    learningOutcomesEn: [
      `Identify the ${areaLabelEn} topic headings in ${partLabelEn} and match them to their page references.`,
      section.area === 'QURAN'
        ? 'Distinguish the general Quran plan from detailed practical recitation or Tajweed instruction.'
        : 'Study topic explanations and applications from the textbook and teacher; lesson pages were not comprehensively reviewed.',
    ],
    keyConceptsAr: section.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`),
    keyConceptsEn: section.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`),
    summaryAr: `${section.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`).join('\n')}\n\n${sourceNoteAr}`,
    summaryEn: `${section.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`).join('\n')}\n\n${sourceNoteEn}`,
    sections: section.topics.map((topic, topicIndex) => {
      const guidance = getLessonGuidance(section, topic);
      return {
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${guidance.ar}\n\nنشاط من إعداد المنصة: أنشئ بطاقة أو خريطة ذهنية مبسطة لموضوع «${topic.titleAr}»، ثم راجعها مع معلمك.\n\nمرجع الفهرس: ص ${topic.page}.`,
        contentEn: `${guidance.en}\n\nOriginal platform activity: Create a simple card or mind map for “${topic.titleEn},” then review it with your teacher.\n\nContents reference: p. ${topic.page}.`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g4-islamic-studies-map-${order}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `خريطة تعليمية أصلية: ${sectionTitleAr}`,
            titleEn: `Original learning map: ${sectionTitleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'Original learning illustration created by the platform; not an image from the textbook.',
            diagramType: 'arabic_learning_map' as const,
            visualSteps,
            keyLabels: [
              { tagAr: 'القسم', tagEn: 'Section', descAr: areaLabelAr, descEn: areaLabelEn },
              { tagAr: 'المرجع', tagEn: 'Reference', descAr: `ص ${firstTopic.page}`, descEn: `p. ${firstTopic.page}` },
            ],
          },
        } : {}),
      };
    }),
    assessment: {
      id: `saudi-g4-islamic-studies-assessment-${order}`,
      lectureId,
      titleAr: `تحقق من الفهرس: ${sectionTitleAr}`,
      titleEn: `Contents check: ${sectionTitleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g4-islamic-studies-question-${order}`,
        textAr: assessmentQuestionAr,
        textEn: assessmentQuestionEn,
        optionsAr: [firstTopic.titleAr, firstDistractor.titleAr, secondDistractor.titleAr],
        optionsEn: [firstTopic.titleEn, firstDistractor.titleEn, secondDistractor.titleEn],
        correctIndex: 0,
        conceptTestedAr: areaLabelAr,
        conceptTestedEn: areaLabelEn,
        explanationAr: 'هذا السؤال للتحقق من مطابقة عنوان الفهرس للقسم، ولا يغني عن دراسة صفحات الدرس في الكتاب.',
        explanationEn: 'This question checks the contents heading for the section and does not replace studying the textbook pages.',
        difficulty: 'easy',
      }],
    },
  };
});
