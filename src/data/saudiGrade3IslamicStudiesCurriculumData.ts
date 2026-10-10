import type { Lecture, LectureDiagramStep } from '../types';

type IslamicArea = 'QURAN' | 'TAWHEED' | 'FIQH';
type IslamicPart = 0 | 1;

interface IslamicTopic {
  titleAr: string;
  titleEn: string;
  page: number;
}

interface IslamicCourseSection {
  area: IslamicArea;
  part: IslamicPart;
  topics: IslamicTopic[];
}

const textbookUrl =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K03-SM1-ISLM-part1.pdf';
const sourceNoteAr =
  `المصدر: كتاب الدراسات الإسلامية للصف الثالث الابتدائي، الجزء الأول من المقرر. يذكر الغلاف طبعة 1448هـ/2026م، بينما يذكر سجل النشر الداخلي في صفحة PDF 2 سنة 1446هـ. طوبقت خطة مقرر القرآن وعناوين الدروس وأرقام صفحاتها مع الفهرسين في صفحتي PDF 6–7، ورُوجع الغلاف والصفحة التمهيدية ومطالع مختارة من الدروس المطبوعة ص 14، 18، 42، 56، 60، 72، 78. لم تراجع جميع صفحات الكتاب. الأنشطة والرسوم والتقويمات في المنصة أصلية ومساندة وليست منقولة من الكتاب، ولا تحل محل دراسة الدرس أو توجيه المعلم. قسم القرآن هنا للتعريف بالخطة فقط، ولا يقدم تدريبًا عمليًا على التلاوة أو الحفظ أو التجويد. رابط الكتاب: ${textbookUrl}`;
const sourceNoteEn =
  `Source: Saudi Grade 3 Islamic Studies, Part One of the curriculum. The cover states 1448 AH/2026, while the internal publication record on PDF page 2 states 1446 AH. The Quran plan, lesson headings, and page references were checked against the contents on PDF pages 6–7; the cover, introductory page, and selected lesson openings at printed pp. 14, 18, 42, 56, 60, 72, and 78 were reviewed. The full textbook was not reviewed. Platform activities, diagrams, and assessments are original supplementary material, not copied from the book, and do not replace lesson study or teacher guidance. The Quran section introduces the plan only and does not provide practical recitation, memorization, or Tajweed instruction. Textbook: ${textbookUrl}`;

const areaLabelsAr: Record<IslamicArea, string> = {
  QURAN: 'مقرر القرآن الكريم',
  TAWHEED: 'التوحيد',
  FIQH: 'الفقه والسلوك',
};

const areaLabelsEn: Record<IslamicArea, string> = {
  QURAN: 'Holy Quran Course',
  TAWHEED: 'Tawheed',
  FIQH: 'Fiqh and Conduct',
};

const courseSections: IslamicCourseSection[] = [
  {
    area: 'QURAN',
    part: 0,
    topics: [
      {
        titleAr: 'خطة مقرر القرآن الكريم',
        titleEn: 'Holy Quran Course Plan',
        page: 11,
      },
    ],
  },
  {
    area: 'TAWHEED',
    part: 1,
    topics: [
      { titleAr: 'مراتب الدين', titleEn: 'Levels of the Religion', page: 14 },
      { titleAr: 'أركان الإسلام', titleEn: 'The Pillars of Islam', page: 18 },
      {
        titleAr: 'شهادة أن لا إله إلا الله',
        titleEn: 'The Testimony That There Is No God but Allah',
        page: 23,
      },
      {
        titleAr: 'شهادة أن محمدًا رسول الله',
        titleEn: 'The Testimony That Muhammad Is the Messenger of Allah',
        page: 26,
      },
      { titleAr: 'إقام الصلاة', titleEn: 'Establishing Prayer', page: 29 },
      { titleAr: 'إيتاء الزكاة', titleEn: 'Giving Zakah', page: 32 },
      { titleAr: 'صوم رمضان', titleEn: 'Fasting Ramadan', page: 35 },
      {
        titleAr: 'حج بيت الله الحرام',
        titleEn: 'Pilgrimage to the Sacred House of Allah',
        page: 37,
      },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    topics: [
      {
        titleAr: 'آداب قضاء الحاجة (1)',
        titleEn: 'Etiquette of Using the Restroom (1)',
        page: 42,
      },
      {
        titleAr: 'آداب قضاء الحاجة (2)',
        titleEn: 'Etiquette of Using the Restroom (2)',
        page: 45,
      },
      {
        titleAr: 'إزالة النجاسة عن البدن (الجسم)',
        titleEn: 'Removing Impurity from the Body',
        page: 48,
      },
      {
        titleAr: 'إزالة النجاسة عن الملابس ومكان الصلاة',
        titleEn: 'Removing Impurity from Clothes and the Place of Prayer',
        page: 52,
      },
      { titleAr: 'التيمم', titleEn: 'Tayammum', page: 56 },
      { titleAr: 'مكانة الصلاة', titleEn: 'The Status of Prayer', page: 60 },
      {
        titleAr: 'شروط الصلاة (1)',
        titleEn: 'Conditions of Prayer (1)',
        page: 63,
      },
      {
        titleAr: 'شروط الصلاة (2)',
        titleEn: 'Conditions of Prayer (2)',
        page: 66,
      },
      {
        titleAr: 'آداب دخول المسجد والخروج منه',
        titleEn: 'Etiquette of Entering and Leaving the Mosque',
        page: 72,
      },
      { titleAr: 'صلاة الجماعة', titleEn: 'Congregational Prayer', page: 78 },
    ],
  },
];

const courseVisualSteps: Record<IslamicArea, LectureDiagramStep[]> = {
  QURAN: [
    { labelAr: 'أتعرف الخطة', labelEn: 'Explore the plan' },
    { labelAr: 'أراجع المطلوب', labelEn: 'Review the assigned work' },
    { labelAr: 'أستعين بمعلمي', labelEn: 'Work with my teacher' },
    { labelAr: 'أتابع تقدمي', labelEn: 'Track my progress' },
  ],
  TAWHEED: [
    { labelAr: 'مراتب الدين', labelEn: 'Levels of the Religion' },
    { labelAr: 'أركان الإسلام', labelEn: 'Pillars of Islam' },
    { labelAr: 'الشهادتان', labelEn: 'The Two Testimonies' },
    { labelAr: 'أعمال العبادة', labelEn: 'Acts of Worship' },
  ],
  FIQH: [
    { labelAr: 'الطهارة والنظافة', labelEn: 'Purification and Cleanliness' },
    { labelAr: 'التيمم', labelEn: 'Tayammum' },
    { labelAr: 'الصلاة وشروطها', labelEn: 'Prayer and Its Conditions' },
    { labelAr: 'آداب المسجد والجماعة', labelEn: 'Mosque Etiquette and Congregation' },
  ],
};

function getContentsPage(area: IslamicArea): string {
  return area === 'FIQH' ? 'صفحة PDF 7' : 'صفحة PDF 6';
}

function getGuidance(area: IslamicArea, titleAr: string, titleEn: string): {
  ar: string;
  en: string;
} {
  if (area === 'QURAN') {
    return {
      ar: 'تعرّف إلى خطة مقرر القرآن في الكتاب، وراجع ما يلزمك مع معلمك. تتطلب التلاوة والحفظ والتجويد تدريبًا عمليًا بإشراف المعلم، ولا يقدم هذا المسار تدريبًا تفصيليًا عليها.',
      en: 'Use the textbook to review the Quran course plan with your teacher. Recitation, memorization, and Tajweed require supervised practice; this course does not provide detailed practical instruction.',
    };
  }
  if (area === 'TAWHEED') {
    return {
      ar: `راجع درس «${titleAr}» في الكتاب، وحدد الفكرة والكلمات الرئيسة، ثم ناقش فهمك مع معلم المادة.`,
      en: `Review “${titleEn}” in the textbook, identify its main idea and key words, then discuss your understanding with the teacher.`,
    };
  }
  return {
    ar: `اقرأ درس «${titleAr}» في الكتاب، ونظّم ما تعلمته في مخطط مبسط، ثم راجع التطبيق مع معلم المادة.`,
    en: `Read “${titleEn}” in the textbook, organize what you learned in a simple chart, then review its application with the teacher.`,
  };
}

export const SAUDI_G3_ISLAMIC_STUDIES_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G3_ISLAMIC_STUDIES_SECTION_COUNT = courseSections.length;
export const SAUDI_G3_ISLAMIC_STUDIES_LESSON_COUNT = courseSections
  .filter((section) => section.area !== 'QURAN')
  .reduce((count, section) => count + section.topics.length, 0);
export const SAUDI_G3_ISLAMIC_STUDIES_TABLE_OF_CONTENTS = courseSections.flatMap(
  (section) =>
    section.topics.map((topic) => ({
      area: section.area,
      part: section.part,
      titleAr: topic.titleAr,
      page: topic.page,
    }))
);

export const SAUDI_G3_ISLAMIC_STUDIES_CURRICULUM: Lecture[] = courseSections.map(
  (section, index) => {
    const order = index + 1;
    const areaLabelAr = areaLabelsAr[section.area];
    const areaLabelEn = areaLabelsEn[section.area];
    const sectionTitleAr = section.area === 'QURAN'
      ? areaLabelAr
      : `${areaLabelAr} — الجزء الأول`;
    const sectionTitleEn = section.area === 'QURAN'
      ? areaLabelEn
      : `${areaLabelEn} — Part One`;
    const firstTopic = section.topics[0];
    const visualSteps = courseVisualSteps[section.area];
    const distractors = courseSections
      .filter((candidate) => candidate.area !== section.area)
      .flatMap((candidate) => candidate.topics);
    const lectureId = `saudi-g3-islamic-studies-1448-${order}`;
    const isQuranPlan = section.area === 'QURAN';

    return {
      id: lectureId,
      order,
      titleAr: sectionTitleAr,
      titleEn: sectionTitleEn,
      subtitleAr: `الصف الثالث الابتدائي — ${isQuranPlan ? 'خطة المقرر' : 'الجزء الأول'} — ص ${firstTopic.page}`,
      subtitleEn: `Grade 3 — ${isQuranPlan ? 'Course Plan' : 'Part One'} — p. ${firstTopic.page}`,
      descriptionAr: `${sourceNoteAr}\n\nفهرس هذا القسم متحقق منه في ${getContentsPage(section.area)}. الإرشادات والأنشطة والرسوم والأسئلة مواد أصلية مساندة من إعداد المنصة، ولا تمثل نقلًا أو شرحًا تفصيليًا لمتن الدرس.`,
      descriptionEn: `${sourceNoteEn}\n\nThis section’s contents were checked on ${getContentsPage(section.area)}. Guidance, activities, diagrams, and questions are original supplementary platform material, not copied or presented as detailed explanations of the lesson text.`,
      durationMinutes: 20,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'ISLAMIC_STUDIES',
      gradeLevel: 'G3',
      educationType: 'PUBLIC',
      educationTrack: 'GENERAL',
      ministryAr: 'وزارة التعليم السعودية — كتاب الدراسات الإسلامية',
      ministryEn: 'Saudi Ministry of Education — Islamic Studies textbook',
      gradeLevelNameAr: 'الصف الثالث الابتدائي — الدراسات الإسلامية',
      gradeLevelNameEn: 'Grade 3 — Islamic Studies',
      termAr: isQuranPlan
        ? 'خطة مقرر القرآن الكريم — الجزء الأول'
        : 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
      termEn: isQuranPlan
        ? 'Holy Quran Course Plan — Part One'
        : 'Part One of the curriculum — 1448 AH/2026 cover edition',
      unitTitleAr: sectionTitleAr,
      unitTitleEn: sectionTitleEn,
      lessonNumberAr: `${section.topics.length} ${isQuranPlan ? 'خطة' : 'دروس'} في الفهرس`,
      lessonNumberEn: `${section.topics.length} ${isQuranPlan ? 'plan entry' : 'indexed lessons'}`,
      warmupHookAr: isQuranPlan
        ? 'ما الطريقة المناسبة لمتابعة مقرر القرآن مع معلمك؟'
        : `ما الذي تعرفه عن موضوع «${firstTopic.titleAr}»؟ ابدأ بقراءة عنوان الدرس وصفحته في الكتاب.`,
      warmupHookEn: isQuranPlan
        ? 'How can you follow the Quran course plan with your teacher?'
        : `What do you know about “${firstTopic.titleEn}”? Start by reading the lesson heading and page in the textbook.`,
      learningOutcomesAr: [
        `يتعرف عناوين ${areaLabelAr} الواردة في الجزء الأول ويربط كل عنوان بصفحة الكتاب.`,
        isQuranPlan
          ? 'يتعرف خطة مقرر القرآن ويراجع التدريب العملي مع معلمه دون استبدال الإشراف بالتعلم الذاتي.'
          : 'يراجع شرح الدروس وتطبيقاتها من الكتاب ومعلم المادة؛ إذ لم تراجع جميع صفحات المتن.',
      ],
      learningOutcomesEn: [
        `Identify the ${areaLabelEn} headings in Part One and match each heading to its textbook page.`,
        isQuranPlan
          ? 'Review the Quran plan and study practical skills with a teacher rather than substituting self-study for guidance.'
          : 'Study lesson explanations and applications from the textbook and teacher; not all lesson pages were reviewed.',
      ],
      keyConceptsAr: section.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`),
      keyConceptsEn: section.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`),
      summaryAr: `${section.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`).join('\n')}\n\n${sourceNoteAr}`,
      summaryEn: `${section.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`).join('\n')}\n\n${sourceNoteEn}`,
      sections: section.topics.map((topic, topicIndex) => {
        const guidance = getGuidance(section.area, topic.titleAr, topic.titleEn);
        return {
          titleAr: topic.titleAr,
          titleEn: topic.titleEn,
          contentAr: `${guidance.ar}\n\nنشاط من إعداد المنصة: أنشئ بطاقة مراجعة أو خريطة ذهنية بسيطة لعنوان الدرس، ثم اعرضها على معلمك للتحقق من فهمك.\n\nمرجع الفهرس: ص ${topic.page}.`,
          contentEn: `${guidance.en}\n\nOriginal platform activity: Create a simple review card or mind map for the lesson heading, then show it to your teacher to check your understanding.\n\nContents reference: p. ${topic.page}.`,
          ...(topicIndex === 0 ? {
            diagram: {
              id: `saudi-g3-islamic-studies-map-${order}`,
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
                { tagAr: 'مرجع الفهرس', tagEn: 'Contents reference', descAr: `ص ${firstTopic.page}`, descEn: `p. ${firstTopic.page}` },
              ],
            },
          } : {}),
        };
      }),
      assessment: {
        id: `saudi-g3-islamic-studies-assessment-${order}`,
        lectureId,
        titleAr: `تحقق من فهرس ${areaLabelAr}`,
        titleEn: `Contents check: ${areaLabelEn}`,
        passingScore: 80,
        questions: section.topics.slice(0, 3).map((topic, topicIndex) => {
          const fallbackDistractor = distractors[topicIndex % distractors.length];
          const alternatePage = section.topics.length > 1
            ? section.topics[(topicIndex + 1) % section.topics.length].page
            : distractors[(topicIndex + 1) % distractors.length].page;
          return {
            id: `${lectureId}-assessment-question-${topicIndex + 1}`,
            textAr: `في أي صفحة يبدأ درس «${topic.titleAr}» بحسب الفهرس؟`,
            textEn: `On which page does “${topic.titleEn}” begin according to the contents?`,
            optionsAr: [`ص ${topic.page}`, `ص ${fallbackDistractor.page}`, `ص ${alternatePage}`],
            optionsEn: [`p. ${topic.page}`, `p. ${fallbackDistractor.page}`, `p. ${alternatePage}`],
            correctIndex: 0,
            conceptTestedAr: 'مطابقة عنوان الدرس برقم الصفحة',
            conceptTestedEn: 'Matching a lesson heading to its page',
            explanationAr: `يبدأ هذا الموضوع في الصفحة ${topic.page} بحسب الفهرس المطبوع. هذا السؤال يتحقق من قراءة الفهرس ولا يغني عن دراسة الدرس مع المعلم.`,
            explanationEn: `The printed contents list this topic on page ${topic.page}. This checks contents navigation and does not replace studying the lesson with a teacher.`,
            difficulty: 'easy',
          };
        }),
      },
    };
  }
);
