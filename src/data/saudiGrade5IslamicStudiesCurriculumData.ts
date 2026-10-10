import type { Lecture, LectureDiagramStep } from '../types';

type IslamicArea = 'QURAN' | 'TAWHEED' | 'HADITH' | 'FIQH';

interface IslamicTopic {
  titleAr: string;
  titleEn: string;
  page: number;
}

interface IslamicSection {
  area: IslamicArea;
  part: 0 | 1;
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

const sourceNoteAr =
  'المصدر: كتاب الدراسات الإسلامية للصف الخامس الابتدائي، طبعة الغلاف 1448هـ/2026م، من وزارة التعليم السعودية. طوبقت العناوين وأرقام الصفحات مع الفهرس العام (صفحة PDF 5) وصفحات خطة القرآن وفهارس التوحيد والحديث والسيرة والفقه (صفحات PDF 6–13). جرى التحقق من الفهرس والصفحات التمهيدية، ولم تراجع جميع صفحات الدروس. الشروح والأنشطة والرسوم والتقويمات في المنصة أصلية ومساندة وليست منقولة من الكتاب. خطة القرآن هنا تمهيدية فقط؛ ولا يقدم هذا المسار دروسًا تفصيلية في التلاوة أو التجويد.';

const sourceNoteEn =
  'Source: the Saudi Ministry of Education Grade 5 Islamic Studies textbook, whose cover states 1448 AH/2026. Headings and page references were checked against the general contents (PDF p. 5) and the Quran plan and Tawheed, Hadith and Seerah, and Fiqh contents (PDF pp. 6–13). The contents and introductory pages were checked, but lesson pages were not comprehensively reviewed. Platform guidance, activities, diagrams, and assessments are original supplementary material, not copied from the textbook. The Quran section here is introductory only; this course does not include detailed recitation or Tajweed lessons.';

const sections: IslamicSection[] = [
  {
    area: 'QURAN',
    part: 0,
    titleAr: 'الخطة العامة',
    titleEn: 'General Plan',
    topics: [
      { titleAr: 'مقرر القرآن الكريم', titleEn: 'Holy Quran Course', page: 6 },
      { titleAr: 'أهداف مقرر القرآن الكريم', titleEn: 'Objectives of the Holy Quran Course', page: 7 },
      { titleAr: 'خطة التعليم العام للقرآن الكريم', titleEn: 'General Education Quran Plan', page: 8 },
    ],
  },
  {
    area: 'TAWHEED',
    part: 1,
    titleAr: 'موضوعات الجزء الأول',
    titleEn: 'Part One Topics',
    topics: [
      { titleAr: 'فضل العلم وأهميته', titleEn: 'The Virtue and Importance of Knowledge', page: 16 },
      { titleAr: 'العلم الذي يجب على كل مسلم تعلمه', titleEn: 'Knowledge Every Muslim Must Learn', page: 20 },
      { titleAr: 'العمل بالعلم الشرعي', titleEn: 'Acting upon Islamic Knowledge', page: 24 },
      { titleAr: 'الحنيفية السمحة', titleEn: 'The Upright and Tolerant Way', page: 27 },
      { titleAr: 'معرفة الرب', titleEn: 'Knowing the Lord', page: 30 },
      { titleAr: 'دلائل معرفة الرب عز وجل', titleEn: 'Evidence for Knowing Allah, the Almighty', page: 34 },
      { titleAr: 'استحقاق الله للعبادة', titleEn: 'Allah’s Right to Be Worshipped', page: 40 },
      { titleAr: 'الدعاء والاستعانة', titleEn: 'Supplication and Seeking Help', page: 45 },
      { titleAr: 'الاستعاذة والاستعانة', titleEn: 'Seeking Refuge and Help', page: 50 },
      { titleAr: 'الخوف والرجاء', titleEn: 'Fear and Hope', page: 52 },
      { titleAr: 'التوكل', titleEn: 'Reliance upon Allah', page: 56 },
      { titleAr: 'الخشوع والإنابة', titleEn: 'Humility and Turning to Allah', page: 59 },
      { titleAr: 'الذبح لله', titleEn: 'Sacrificing for Allah', page: 61 },
    ],
  },
  {
    area: 'HADITH',
    part: 1,
    titleAr: 'موضوعات الجزء الأول',
    titleEn: 'Part One Topics',
    topics: [
      { titleAr: 'هديه ﷺ في الطهارة', titleEn: 'The Prophet’s Guidance on Purification', page: 66 },
      { titleAr: 'هديه ﷺ في الصلاة', titleEn: 'The Prophet’s Guidance on Prayer', page: 70 },
      { titleAr: 'هديه ﷺ في يوم الجمعة', titleEn: 'The Prophet’s Guidance on Friday', page: 74 },
      { titleAr: 'هديه ﷺ في العيد', titleEn: 'The Prophet’s Guidance on Eid', page: 77 },
      { titleAr: 'هديه ﷺ في الزكاة والصدقة', titleEn: 'The Prophet’s Guidance on Zakah and Charity', page: 80 },
      { titleAr: 'هديه ﷺ في الصيام', titleEn: 'The Prophet’s Guidance on Fasting', page: 82 },
      { titleAr: 'هديه ﷺ في الحج', titleEn: 'The Prophet’s Guidance on Hajj', page: 86 },
      { titleAr: 'هديه ﷺ في العبادة', titleEn: 'The Prophet’s Guidance in Worship', page: 90 },
      { titleAr: 'هديه ﷺ في قراءة القرآن', titleEn: 'The Prophet’s Guidance in Reading the Quran', page: 94 },
      { titleAr: 'فضل تلاوة القرآن الكريم', titleEn: 'The Virtue of Reciting the Holy Quran', page: 97 },
      { titleAr: 'هديه ﷺ في الذكر', titleEn: 'The Prophet’s Guidance on Remembrance', page: 102 },
      { titleAr: 'فضل الذكر', titleEn: 'The Virtue of Remembrance', page: 104 },
      { titleAr: 'مكانة المسجد عند النبي ﷺ', titleEn: 'The Mosque’s Status in the Prophet’s Teachings', page: 108 },
      { titleAr: 'فضل بناء المساجد', titleEn: 'The Virtue of Building Mosques', page: 111 },
      { titleAr: 'تحية المسجد', titleEn: 'The Mosque Greeting Prayer', page: 114 },
    ],
  },
  {
    area: 'FIQH',
    part: 1,
    titleAr: 'موضوعات الجزء الأول',
    titleEn: 'Part One Topics',
    topics: [
      { titleAr: 'الأذان', titleEn: 'The Call to Prayer', page: 118 },
      { titleAr: 'سنن الأذان', titleEn: 'Recommended Practices of the Call to Prayer', page: 121 },
      { titleAr: 'معاني جمل الأذان', titleEn: 'Meanings of the Call to Prayer', page: 125 },
      { titleAr: 'الإقامة', titleEn: 'The Iqamah', page: 129 },
      { titleAr: 'آداب المشي إلى الصلاة', titleEn: 'Etiquette of Walking to Prayer', page: 134 },
      { titleAr: 'آداب انتظار الصلاة', titleEn: 'Etiquette of Waiting for Prayer', page: 138 },
      { titleAr: 'مكانة الصلاة', titleEn: 'The Status of Prayer', page: 142 },
      { titleAr: 'فرضية الصلاة', titleEn: 'The Obligation of Prayer', page: 144 },
      { titleAr: 'صفة الصلاة (1)', titleEn: 'How to Pray (1)', page: 148 },
      { titleAr: 'صفة الصلاة (2)', titleEn: 'How to Pray (2)', page: 152 },
      { titleAr: 'صفة الصلاة (3)', titleEn: 'How to Pray (3)', page: 158 },
      { titleAr: 'سنن الصلاة', titleEn: 'Recommended Practices of Prayer', page: 164 },
      { titleAr: 'مكروهات الصلاة', titleEn: 'Disliked Acts in Prayer', page: 168 },
      { titleAr: 'الخشوع في الصلاة', titleEn: 'Humility in Prayer', page: 171 },
    ],
  },
];

function getContentsPage(section: IslamicSection): string {
  switch (section.area) {
    case 'QURAN':
      return 'صفحات PDF 6–8';
    case 'TAWHEED':
      return 'صفحة PDF 10';
    case 'HADITH':
      return 'صفحتا PDF 11–12';
    case 'FIQH':
      return 'صفحتا PDF 12–13';
  }
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
        ? 'راجع خطة القرآن المخصصة للتعليم العام في الكتاب، ولاحظ أن التدريب التفصيلي على التلاوة والحفظ والتجويد خارج نطاق هذا المسار.'
        : 'تعرّف إلى مكوّن مقرر القرآن وأهدافه في الصفحات التمهيدية؛ وهذا العرض لا يستبدل التدريب العملي على التلاوة والحفظ.',
      en: topic.page === 8
        ? 'Review the Quran plan for general education; detailed recitation, memorization, and Tajweed practice are outside this course.'
        : 'Review the Quran course component and objectives in the introductory pages; this does not replace practical recitation or memorization.',
    };
  }

  const areaGuidance: Record<Exclude<IslamicArea, 'QURAN'>, { ar: string; en: string }> = {
    TAWHEED: {
      ar: 'اقرأ الدرس في الكتاب، واستخرج فكرته ومفرداته الرئيسة، ثم ناقش فهمك مع معلم المادة.',
      en: 'Read the lesson in the textbook, identify its main idea and terms, and discuss your understanding with the teacher.',
    },
    HADITH: {
      ar: 'راجع الدرس في الكتاب، وحدد السلوك أو المعنى الذي يشير إليه عنوانه، ثم ناقش تطبيقًا مناسبًا مع المعلم.',
      en: 'Review the textbook lesson, identify the conduct or meaning indicated by its heading, and discuss an appropriate application with the teacher.',
    },
    FIQH: {
      ar: 'راجع موضوع الدرس وأحكامه من صفحات الكتاب، ونظّم النقاط الرئيسة في ملخص بإشراف معلم المادة.',
      en: 'Review the topic and rulings in the textbook, then organize the main points in a summary with the teacher.',
    },
  };
  return areaGuidance[section.area];
}

export const SAUDI_G5_ISLAMIC_STUDIES_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-ISLM.pdf';

export const SAUDI_G5_ISLAMIC_STUDIES_UNIT_COUNT = sections.length;
export const SAUDI_G5_ISLAMIC_STUDIES_LESSON_COUNT = sections
  .filter((section) => section.area !== 'QURAN')
  .reduce((count, section) => count + section.topics.length, 0);

export const SAUDI_G5_ISLAMIC_STUDIES_CURRICULUM: Lecture[] = sections.map((section, index) => {
  const order = index + 1;
  const areaLabelAr = areaLabelsAr[section.area];
  const areaLabelEn = areaLabelsEn[section.area];
  const firstTopic = section.topics[0];
  const partLabelAr = section.part === 0 ? 'الخطة العامة' : 'الجزء الأول';
  const partLabelEn = section.part === 0 ? 'General plan' : 'Part One';
  const sourceContentsPages = getContentsPage(section);
  const visualSteps: LectureDiagramStep[] = section.topics.slice(0, 4).map((topic) => ({
    labelAr: topic.titleAr,
    labelEn: topic.titleEn,
  }));
  while (visualSteps.length < 4) {
    visualSteps.push({
      labelAr: ['عنوان الموضوع', 'مراجعة الكتاب', 'حوار مع المعلم', 'تطبيق تربوي'][visualSteps.length],
      labelEn: ['Topic heading', 'Textbook review', 'Teacher discussion', 'Learning application'][visualSteps.length],
    });
  }
  const [firstDistractor, secondDistractor] = getAssessmentDistractors(section);
  const assessmentQuestionAr = section.area === 'QURAN'
    ? 'أي بند ورد ضمن الصفحات التمهيدية لمقرر القرآن الكريم؟'
    : `أي عنوان درس يرد في فهرس قسم «${areaLabelAr}»؟`;
  const assessmentQuestionEn = section.area === 'QURAN'
    ? 'Which item appears in the introductory pages of the Holy Quran course?'
    : `Which lesson heading appears in the contents for “${areaLabelEn}”?`;

  return {
    id: `saudi-g5-islamic-studies-1448-${order}`,
    order,
    titleAr: areaLabelAr,
    titleEn: areaLabelEn,
    subtitleAr: `الصف الخامس الابتدائي — ${partLabelAr} — ص ${firstTopic.page}`,
    subtitleEn: `Grade 5 — ${partLabelEn} — p. ${firstTopic.page}`,
    descriptionAr: `${sourceNoteAr}\n\nفهرس هذا القسم متحقق منه في ${sourceContentsPages}. الإرشادات والأنشطة والرسوم والأسئلة من إعداد المنصة، ولا تمثل نقلًا أو شرحًا تفصيليًا لمتن الدرس.`,
    descriptionEn: `${sourceNoteEn}\n\nThis section’s contents were checked on ${sourceContentsPages}. Guidance, activities, diagrams, and questions are original platform material, not copied or presented as a detailed explanation of the lesson text.`,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'ISLAMIC_STUDIES',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب الدراسات الإسلامية',
    ministryEn: 'Saudi Ministry of Education — Islamic Studies textbook',
    gradeLevelNameAr: 'الصف الخامس الابتدائي — الدراسات الإسلامية',
    gradeLevelNameEn: 'Grade 5 — Islamic Studies',
    termAr: section.part === 0 ? 'مقرر القرآن الكريم — التعليم العام' : 'الجزء الأول — طبعة الغلاف 1448هـ/2026م',
    termEn: section.part === 0 ? 'Holy Quran Course — General Education' : 'Part One — 1448 AH/2026 cover edition',
    unitTitleAr: areaLabelAr,
    unitTitleEn: areaLabelEn,
    lessonNumberAr: `${section.topics.length} عنوانًا في الفهرس`,
    lessonNumberEn: `${section.topics.length} contents headings`,
    warmupHookAr: section.area === 'QURAN'
      ? 'استعرض أهداف مقرر القرآن وخطته العامة، وتحقق من مصدر مستقل قبل دراسة تفاصيل التلاوة أو التجويد.'
      : `ابدأ بتحديد عناوين قسم «${areaLabelAr}» في فهرس الكتاب، ثم راجع صفحات الدروس مع معلمك.`,
    warmupHookEn: section.area === 'QURAN'
      ? 'Review the Quran course objectives and general plan; consult a separate verified source for detailed recitation or Tajweed study.'
      : `Locate the “${areaLabelEn}” headings in the textbook contents, then review the lesson pages with your teacher.`,
    learningOutcomesAr: [
      `يتعرف عناوين دروس ${areaLabelAr} الواردة في فهرس الجزء الأول ويربطها بأرقام صفحاتها.`,
      section.area === 'QURAN'
        ? 'يميز بين خطة القرآن العامة ومحتوى التلاوة والتجويد التفصيلي غير المدرج هنا.'
        : 'يراجع شرح الدروس وتطبيقاتها من الكتاب ومعلم المادة؛ إذ لم تراجع صفحات المتن كاملة.',
    ],
    learningOutcomesEn: [
      `Identify the ${areaLabelEn} lesson headings in the Part One contents and match them to their page references.`,
      section.area === 'QURAN'
        ? 'Distinguish the general Quran plan from detailed recitation and Tajweed content, which is not included here.'
        : 'Study detailed explanations and applications from the textbook and teacher; lesson pages were not comprehensively reviewed.',
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
        contentAr: `${guidance.ar}\n\nمرجع الفهرس: ص ${topic.page}.`,
        contentEn: `${guidance.en}\n\nContents reference: p. ${topic.page}.`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g5-islamic-studies-map-${order}`,
            figureNumberAr: `شكل (${order})`,
            figureNumberEn: `Figure (${order})`,
            titleAr: `خريطة تعليمية: ${areaLabelAr}`,
            titleEn: `Learning map: ${areaLabelEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'Original learning illustration created by the platform; not an image from the textbook.',
            diagramType: 'arabic_learning_map' as const,
            visualSteps,
            keyLabels: [
              { tagAr: 'المادة', tagEn: 'Subject', descAr: areaLabelAr, descEn: areaLabelEn },
              { tagAr: 'المرجع', tagEn: 'Reference', descAr: `ص ${firstTopic.page}`, descEn: `p. ${firstTopic.page}` },
            ],
          },
        } : {}),
      };
    }),
    assessment: {
      id: `saudi-g5-islamic-studies-assessment-${order}`,
      lectureId: `saudi-g5-islamic-studies-1448-${order}`,
      titleAr: `تحقق من الفهرس: ${areaLabelAr}`,
      titleEn: `Contents check: ${areaLabelEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g5-islamic-studies-question-${order}`,
        textAr: assessmentQuestionAr,
        textEn: assessmentQuestionEn,
        optionsAr: [firstTopic.titleAr, firstDistractor.titleAr, secondDistractor.titleAr],
        optionsEn: [firstTopic.titleEn, firstDistractor.titleEn, secondDistractor.titleEn],
        correctIndex: 0,
        conceptTestedAr: areaLabelAr,
        conceptTestedEn: areaLabelEn,
        explanationAr: 'هذا السؤال للتحقق من مطابقة عنوان الفهرس للقسم، ولا يغني عن دراسة صفحات الدرس في الكتاب.',
        explanationEn: 'This question checks the contents heading for the section and does not replace studying the textbook lesson pages.',
        difficulty: 'easy',
      }],
    },
  };
});
