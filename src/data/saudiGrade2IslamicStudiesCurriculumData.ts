import type { Lecture, LectureDiagramStep } from '../types';

type IslamicArea = 'QURAN' | 'TAWHEED' | 'FIQH';

interface IslamicTopic {
  unitTitleAr: string;
  unitTitleEn: string;
  titleAr: string;
  titleEn: string;
  page: number;
}

interface IslamicCourseSection {
  area: IslamicArea;
  topics: IslamicTopic[];
}

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-ISLM.pdf';
const sourceNoteAr =
  `المصدر: كتاب الدراسات الإسلامية للصف الثاني الابتدائي، الجزء الأول من المقرر. يذكر الغلاف طبعة 1448هـ/2026م، ويذكر سجل النشر الداخلي في PDF ص 2 سنة 1446هـ؛ أُظهر الاختلاف دون حسمه. طوبقت خطة مقرر القرآن وعناوين الدروس وصفحاتها مع فهرسي PDF ص 6–7، ورُوجع الغلاف والمقدمة ومحتوى مختار من صفحات PDF 22، 24، 25، 27، 29، 33، 35، 39، 41، 45، 49، 53، 59، 65، 67، 71، 75، 81. لم تراجع جميع صفحات الكتاب. الأنشطة والرسوم والأسئلة في المنصة أصلية ومساندة وليست منقولة من الكتاب أو صوره، ولا تحل محل دراسة الدرس أو توجيه المعلم. خطة القرآن للتعريف بالخطة فقط؛ التلاوة والحفظ والتطبيق العملي تكون مع المعلم. رابط الكتاب: ${textbookUrl}`;
const sourceNoteEn =
  `Source: Saudi Grade 2 Islamic Studies, Part One of the curriculum. The cover states 1448 AH/2026 CE, while the internal publication record on PDF p. 2 states 1446 AH; the discrepancy is disclosed without resolving it. The Quran course plan, lesson titles, and pages were checked against the contents on PDF pp. 6–7. The cover, introduction, and selected content on PDF pp. 22, 24, 25, 27, 29, 33, 35, 39, 41, 45, 49, 53, 59, 65, 67, 71, 75, and 81 were reviewed. The full textbook was not reviewed. Platform activities, diagrams, and questions are original supplementary material, not copied from the book or its images, and do not replace lesson study or teacher guidance. The Quran entry introduces the plan only; recitation, memorization, and practical work are for teacher-guided study. Textbook: ${textbookUrl}`;

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
    topics: [{
      unitTitleAr: 'مقرر القرآن الكريم',
      unitTitleEn: 'Holy Quran Course',
      titleAr: 'خطة مقرر القرآن الكريم',
      titleEn: 'Holy Quran Course Plan',
      page: 11,
    }],
  },
  {
    area: 'TAWHEED',
    topics: [
      { unitTitleAr: 'أسماء الله وصفاته', unitTitleEn: 'The Names and Attributes of Allah', titleAr: 'الله الواحد', titleEn: 'Allah, the One', page: 14 },
      { unitTitleAr: 'أسماء الله وصفاته', unitTitleEn: 'The Names and Attributes of Allah', titleAr: 'الله الرحمن الرحيم', titleEn: 'Allah, the Most Compassionate, the Most Merciful', page: 16 },
      { unitTitleAr: 'أسماء الله وصفاته', unitTitleEn: 'The Names and Attributes of Allah', titleAr: 'الله السميع البصير', titleEn: 'Allah, the All-Hearing, the All-Seeing', page: 18 },
      { unitTitleAr: 'أسماء الله وصفاته', unitTitleEn: 'The Names and Attributes of Allah', titleAr: 'لماذا خلقنا الله؟', titleEn: 'Why Did Allah Create Us?', page: 22 },
      { unitTitleAr: 'العبادة وما يضادها من الشرك', unitTitleEn: 'Worship and What Opposes It', titleAr: 'العبادة', titleEn: 'Worship', page: 24 },
      { unitTitleAr: 'العبادة وما يضادها من الشرك', unitTitleEn: 'Worship and What Opposes It', titleAr: 'عبادة الله وحده', titleEn: 'Worshipping Allah Alone', page: 28 },
      { unitTitleAr: 'العبادة وما يضادها من الشرك', unitTitleEn: 'Worship and What Opposes It', titleAr: 'عبادة غير الله شرك', titleEn: 'Worshipping Other Than Allah Is Shirk', page: 30 },
    ],
  },
  {
    area: 'FIQH',
    topics: [
      { unitTitleAr: 'التعامل مع الناس', unitTitleEn: 'Dealing with Others', titleAr: 'الآداب (1)', titleEn: 'Etiquette (1)', page: 34 },
      { unitTitleAr: 'التعامل مع الناس', unitTitleEn: 'Dealing with Others', titleAr: 'الآداب (2)', titleEn: 'Etiquette (2)', page: 36 },
      { unitTitleAr: 'التعامل مع الناس', unitTitleEn: 'Dealing with Others', titleAr: 'الآداب (3)', titleEn: 'Etiquette (3)', page: 42 },
      { unitTitleAr: 'الأذكار والأدعية', unitTitleEn: 'Remembrance and Supplications', titleAr: 'أذكار الصباح والمساء', titleEn: 'Morning and Evening Remembrance', page: 46 },
      { unitTitleAr: 'الأذكار والأدعية', unitTitleEn: 'Remembrance and Supplications', titleAr: 'أذكار العطاس والنوم', titleEn: 'Remembrance for Sneezing and Before Sleep', page: 50 },
      { unitTitleAr: 'آداب النظافة', unitTitleEn: 'Cleanliness Etiquette', titleAr: 'نظافة البدن', titleEn: 'Personal Cleanliness', page: 54 },
      { unitTitleAr: 'آداب النظافة', unitTitleEn: 'Cleanliness Etiquette', titleAr: 'نظافة الملابس والمكان', titleEn: 'Cleanliness of Clothes and Places', page: 60 },
      { unitTitleAr: 'آداب الأكل والشرب', unitTitleEn: 'Etiquette of Eating and Drinking', titleAr: 'آداب الأكل والشرب (1)', titleEn: 'Etiquette of Eating and Drinking (1)', page: 66 },
      { unitTitleAr: 'آداب الأكل والشرب', unitTitleEn: 'Etiquette of Eating and Drinking', titleAr: 'آداب الأكل والشرب (2)', titleEn: 'Etiquette of Eating and Drinking (2)', page: 68 },
      { unitTitleAr: 'المحافظة على الممتلكات', unitTitleEn: 'Taking Care of Property', titleAr: 'المحافظة على الممتلكات الخاصة وحقوق الآخرين', titleEn: 'Taking Care of Personal Property and Others’ Rights', page: 72 },
      { unitTitleAr: 'المحافظة على الممتلكات', unitTitleEn: 'Taking Care of Property', titleAr: 'المحافظة على البيئة', titleEn: 'Taking Care of the Environment', page: 76 },
      { unitTitleAr: 'المحافظة على الممتلكات', unitTitleEn: 'Taking Care of Property', titleAr: 'المحافظة على الممتلكات العامة', titleEn: 'Taking Care of Public Property', page: 82 },
    ],
  },
];

const courseVisualSteps: Record<IslamicArea, LectureDiagramStep[]> = {
  QURAN: [
    { labelAr: 'أتعرف الخطة', labelEn: 'Explore the plan' },
    { labelAr: 'أراجع المطلوب', labelEn: 'Review assigned work' },
    { labelAr: 'أستعين بمعلمي', labelEn: 'Work with my teacher' },
    { labelAr: 'أتابع تقدمي', labelEn: 'Track my progress' },
  ],
  TAWHEED: [
    { labelAr: 'أقرأ عنوان الدرس', labelEn: 'Read the lesson heading' },
    { labelAr: 'أراجع الكتاب', labelEn: 'Review the textbook' },
    { labelAr: 'أنظم ما تعلمت', labelEn: 'Organize what I learned' },
    { labelAr: 'أناقش مع معلمي', labelEn: 'Discuss with my teacher' },
  ],
  FIQH: [
    { labelAr: 'أقرأ عنوان الدرس', labelEn: 'Read the lesson heading' },
    { labelAr: 'أتعرف موضوعه', labelEn: 'Identify its topic' },
    { labelAr: 'أراجع تطبيق الكتاب', labelEn: 'Review the textbook activity' },
    { labelAr: 'أتحقق مع معلمي', labelEn: 'Check with my teacher' },
  ],
};

export const SAUDI_G2_ISLAMIC_STUDIES_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G2_ISLAMIC_STUDIES_SECTION_COUNT = courseSections.length;
export const SAUDI_G2_ISLAMIC_STUDIES_LESSON_COUNT = courseSections
  .filter((section) => section.area !== 'QURAN')
  .reduce((count, section) => count + section.topics.length, 0);
export const SAUDI_G2_ISLAMIC_STUDIES_TABLE_OF_CONTENTS = courseSections.flatMap(
  (section) =>
    section.topics.map((topic) => ({
      area: section.area,
      unitTitleAr: topic.unitTitleAr,
      unitTitleEn: topic.unitTitleEn,
      titleAr: topic.titleAr,
      page: topic.page,
    }))
);

const makeQuestion = (
  id: string,
  topic: IslamicTopic,
  distractors: IslamicTopic[]
) => {
  const options = [
    topic,
    ...distractors.filter((item) => item.titleAr !== topic.titleAr).slice(0, 2),
  ];
  return {
    id,
    textAr: `أي عنوان يطابق موضوع الفهرس في الصفحة ${topic.page}؟`,
    textEn: `Which heading matches the contents entry on page ${topic.page}?`,
    optionsAr: options.map((item) => item.titleAr),
    optionsEn: options.map((item) => item.titleEn),
    correctIndex: 0,
    conceptTestedAr: 'قراءة فهرس الكتاب',
    conceptTestedEn: 'Reading the textbook contents',
    explanationAr: `يعرض الفهرس عنوان «${topic.titleAr}» في الصفحة ${topic.page}. راجع الدرس في الكتاب ومعلم المادة.`,
    explanationEn: `The contents list “${topic.titleEn}” on page ${topic.page}. Review the lesson in the textbook with your teacher.`,
    difficulty: 'easy' as const,
  };
};

export const SAUDI_G2_ISLAMIC_STUDIES_CURRICULUM: Lecture[] = courseSections.map(
  (section, index) => {
    const order = index + 1;
    const areaLabelAr = areaLabelsAr[section.area];
    const areaLabelEn = areaLabelsEn[section.area];
    const firstTopic = section.topics[0];
    const visualSteps = courseVisualSteps[section.area];
    const distractors = courseSections
      .filter((candidate) => candidate.area !== section.area)
      .flatMap((candidate) => candidate.topics);
    const lectureId = `saudi-g2-islamic-studies-1448-${order}`;
    const isQuranPlan = section.area === 'QURAN';
    const unitTitles = [...new Set(section.topics.map((topic) => topic.unitTitleAr))];

    return {
      id: lectureId,
      order,
      titleAr: areaLabelAr,
      titleEn: areaLabelEn,
      subtitleAr: `الصف الثاني الابتدائي — ${isQuranPlan ? 'خطة المقرر' : 'الجزء الأول'} — ص ${firstTopic.page}`,
      subtitleEn: `Grade 2 — ${isQuranPlan ? 'Course Plan' : 'Part One'} — p. ${firstTopic.page}`,
      descriptionAr: `${sourceNoteAr}\n\nفهرس هذا القسم متحقق منه في صفحة PDF ${section.area === 'FIQH' ? 7 : 6}. وحداته: ${unitTitles.join('، ')}. الإرشادات والأنشطة والرسوم والأسئلة مواد أصلية مساندة من إعداد المنصة، وليست نقلًا أو شرحًا تفصيليًا لمتن الدرس.`,
      descriptionEn: `${sourceNoteEn}\n\nThis section’s contents were checked on PDF page ${section.area === 'FIQH' ? 7 : 6}. Units: ${unitTitles.join(', ')}. Guidance, activities, diagrams, and questions are original supplementary platform material, not copied or presented as detailed explanations of the lesson text.`,
      durationMinutes: 20,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SA',
      subject: 'ISLAMIC_STUDIES',
      gradeLevel: 'G2',
      educationType: 'PUBLIC',
      educationTrack: 'GENERAL',
      ministryAr: 'وزارة التعليم السعودية — كتاب الدراسات الإسلامية',
      ministryEn: 'Saudi Ministry of Education — Islamic Studies textbook',
      gradeLevelNameAr: 'الصف الثاني الابتدائي — الدراسات الإسلامية',
      gradeLevelNameEn: 'Grade 2 — Islamic Studies',
      termAr: isQuranPlan
        ? 'خطة مقرر القرآن الكريم — الجزء الأول'
        : 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
      termEn: isQuranPlan
        ? 'Holy Quran Course Plan — Part One'
        : 'Part One of the curriculum — 1448 AH/2026 cover edition',
      unitTitleAr: areaLabelAr,
      unitTitleEn: areaLabelEn,
      lessonNumberAr: `${section.topics.length} ${isQuranPlan ? 'خطة' : 'موضوعًا في الفهرس'}`,
      lessonNumberEn: `${section.topics.length} ${isQuranPlan ? 'plan entry' : 'contents entries'}`,
      warmupHookAr: isQuranPlan
        ? 'كيف تتابع خطة مقرر القرآن مع معلمك؟'
        : `ما الذي تعرفه عن عنوان «${firstTopic.titleAr}»؟ ابدأ بقراءة الدرس في الكتاب.`,
      warmupHookEn: isQuranPlan
        ? 'How can you follow the Quran course plan with your teacher?'
        : `What do you know about “${firstTopic.titleEn}”? Start by reading the lesson in the textbook.`,
      learningOutcomesAr: [
        `يتعرف عناوين ${areaLabelAr} الواردة في الجزء الأول ويربطها بصفحات الكتاب.`,
        isQuranPlan
          ? 'يتعرف خطة مقرر القرآن، ويراجع التلاوة والحفظ والتطبيق العملي مع معلمه.'
          : 'يراجع شرح الدروس وتطبيقاتها من الكتاب ومعلم المادة؛ إذ لم تراجع جميع صفحات المتن.',
      ],
      learningOutcomesEn: [
        `Identify the ${areaLabelEn} headings in Part One and match them to textbook pages.`,
        isQuranPlan
          ? 'Review the Quran course plan and practise recitation, memorization, and practical work with a teacher.'
          : 'Study lesson explanations and applications from the textbook and teacher; not all lesson pages were reviewed.',
      ],
      keyConceptsAr: section.topics.map((topic) =>
        `${topic.unitTitleAr}: ${topic.titleAr} (ص ${topic.page})`
      ),
      keyConceptsEn: section.topics.map((topic) =>
        `${topic.unitTitleEn}: ${topic.titleEn} (p. ${topic.page})`
      ),
      summaryAr: `${section.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`).join('\n')}\n\n${sourceNoteAr}`,
      summaryEn: `${section.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`).join('\n')}\n\n${sourceNoteEn}`,
      sections: section.topics.map((topic, topicIndex) => ({
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: isQuranPlan
          ? `تعرف إلى خطة مقرر القرآن في الكتاب، وراجع المطلوب مع معلمك. التلاوة والحفظ والتطبيق العملي تكون بتوجيه المعلم؛ وهذا المسار لا يقدم تدريبًا تفصيليًا عليها.\n\nمرجع الفهرس: ص ${topic.page}.`
          : `اقرأ درس «${topic.titleAr}» في الكتاب، ولاحظ فكرته وكلماته الرئيسة، ثم ناقش فهمك وتطبيقه مع معلم المادة. نشاط أصلي من إعداد المنصة: أنشئ بطاقة مراجعة لعنوان الدرس وصفحته، واعرضها على معلمك للتحقق من فهمك.\n\nمرجع الفهرس: ص ${topic.page}.`,
        contentEn: isQuranPlan
          ? `Use the textbook to review the Quran course plan and assigned work with your teacher. Recitation, memorization, and practical work require teacher guidance; this course does not provide detailed training in them.\n\nContents reference: p. ${topic.page}.`
          : `Read “${topic.titleEn}” in the textbook, notice its main idea and key words, then discuss your understanding and its application with the subject teacher. Original platform activity: Make a review card for the lesson heading and page, then show it to your teacher.\n\nContents reference: p. ${topic.page}.`,
        ...((topicIndex === 0 ||
          (section.area === 'FIQH' &&
            topic.unitTitleAr !== section.topics[topicIndex - 1]?.unitTitleAr)) ? {
          diagram: {
            id: `${lectureId}-map-${topicIndex + 1}`,
            figureNumberAr: 'شكل تعليمي',
            figureNumberEn: 'Learning diagram',
            titleAr: `خريطة تعليمية أصلية: ${topic.unitTitleAr}`,
            titleEn: `Original learning map: ${topic.unitTitleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original learning illustration created by the platform, not an image from the textbook.',
            diagramType: 'arabic_learning_map' as const,
            visualSteps,
            keyLabels: [
              { tagAr: 'القسم', tagEn: 'Section', descAr: areaLabelAr, descEn: areaLabelEn },
              { tagAr: 'مرجع الفهرس', tagEn: 'Contents reference', descAr: `ص ${topic.page}`, descEn: `p. ${topic.page}` },
            ],
          },
        } : {}),
      })),
      assessment: {
        id: `${lectureId}-assessment`,
        lectureId,
        titleAr: `تحقق من فهرس ${areaLabelAr}`,
        titleEn: `Contents check: ${areaLabelEn}`,
        passingScore: 80,
        questions: section.topics.slice(0, 3).map((topic, topicIndex) =>
          makeQuestion(`${lectureId}-assessment-question-${topicIndex + 1}`, topic, distractors)
        ),
      },
    };
  }
);
