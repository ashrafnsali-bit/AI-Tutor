import type { Lecture, LectureDiagramStep } from '../types';

export const SAUDI_G11_HISTORY_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1488-GE-CBM-GNRL-TRC2-SM1-HIS.pdf';
export const SAUDI_G11_HISTORY_LESSON_COUNT = 37;
export const SAUDI_G11_HISTORY_UNIT_REVIEW_COUNT = 6;

interface HistoryLesson {
  titleAr: string;
  titleEn: string;
  page: number;
}

interface HistoryUnit {
  titleAr: string;
  titleEn: string;
  visualSteps: LectureDiagramStep[];
  lessons: HistoryLesson[];
  reviewPage: number;
}

const units: HistoryUnit[] = [
  {
    titleAr: 'الوحدة الأولى: علم التاريخ',
    titleEn: 'Unit 1: The Discipline of History',
    visualSteps: [
      { labelAr: 'سؤال تاريخي', labelEn: 'Historical question' },
      { labelAr: 'مصادر وشواهد', labelEn: 'Sources and evidence' },
      { labelAr: 'نقد ومقارنة', labelEn: 'Critique and comparison' },
      { labelAr: 'استنتاج موثق', labelEn: 'Evidence-based conclusion' }
    ],
    lessons: [
      { titleAr: 'مفهوم التاريخ ومصادره', titleEn: 'The Concept and Sources of History', page: 12 },
      { titleAr: 'نشأة التدوين التاريخي عند المسلمين', titleEn: 'The Beginnings of Historical Writing among Muslims', page: 16 },
      { titleAr: 'نماذج مختارة من مؤلفات المؤرخين المسلمين', titleEn: 'Selected Works by Muslim Historians', page: 20 },
      { titleAr: 'منهج تدوين التاريخ عند المسلمين', titleEn: 'Methods of Historical Writing among Muslims', page: 23 },
      { titleAr: 'مهارات التفكير في التاريخ', titleEn: 'Historical Thinking Skills', page: 25 },
      { titleAr: 'مصادر التاريخ الوطني', titleEn: 'Sources of National History', page: 29 }
    ],
    reviewPage: 35
  },
  {
    titleAr: 'الوحدة الثانية: المملكة العربية السعودية: العمق الحضاري',
    titleEn: 'Unit 2: Saudi Arabia—Civilizational Depth',
    visualSteps: [
      { labelAr: 'الموقع', labelEn: 'Location' },
      { labelAr: 'الشواهد التاريخية', labelEn: 'Historical evidence' },
      { labelAr: 'الحضارات والممالك', labelEn: 'Civilizations and kingdoms' },
      { labelAr: 'امتداد الأثر', labelEn: 'Continuing legacy' }
    ],
    lessons: [
      { titleAr: 'الموقع', titleEn: 'Geographic Location', page: 42 },
      { titleAr: 'الآثار والمصادر الكلاسيكية', titleEn: 'Archaeological Evidence and Classical Sources', page: 45 },
      { titleAr: 'الكتابة والشعر', titleEn: 'Writing and Poetry', page: 48 },
      { titleAr: 'أسواق العرب', titleEn: 'Arabian Markets', page: 51 },
      { titleAr: 'الشخصية العربية', titleEn: 'Arabian Identity', page: 53 },
      { titleAr: 'الممالك العربية القديمة', titleEn: 'Ancient Arabian Kingdoms', page: 56 },
      { titleAr: 'معالم تاريخية إسلامية', titleEn: 'Islamic Historical Landmarks', page: 59 }
    ],
    reviewPage: 64
  },
  {
    titleAr: 'الوحدة الثالثة: التاريخ الوطني: الدولة السعودية الأولى',
    titleEn: 'Unit 3: National History—The First Saudi State',
    visualSteps: [
      { labelAr: 'الجذور التاريخية', labelEn: 'Historical roots' },
      { labelAr: 'التأسيس والدرعية', labelEn: 'Founding and Diriyah' },
      { labelAr: 'التوحيد والدفاع', labelEn: 'Unification and defense' },
      { labelAr: 'النهاية والآثار الحضارية', labelEn: 'End and civilizational legacy' }
    ],
    lessons: [
      { titleAr: 'جذور تأسيس الدولة السعودية: استقرار بني حنيفة', titleEn: 'Roots of the Saudi State: Banu Hanifa Settlement', page: 70 },
      { titleAr: 'جذور تأسيس الدولة السعودية: نشأة المدن', titleEn: 'Roots of the Saudi State: The Rise of Towns', page: 73 },
      { titleAr: 'إمارة الدرعية', titleEn: 'The Emirate of Diriyah', page: 75 },
      { titleAr: 'الدولة السعودية الأولى: التأسيس', titleEn: 'The First Saudi State: Founding', page: 78 },
      { titleAr: 'الدولة السعودية الأولى: المرحلة الأولى لتوحيد البلاد', titleEn: 'The First Saudi State: First Phase of Unification', page: 82 },
      { titleAr: 'الدولة السعودية الأولى: المرحلة الثانية لتوحيد البلاد', titleEn: 'The First Saudi State: Second Phase of Unification', page: 85 },
      { titleAr: 'الدولة السعودية الأولى: مواجهة حملات الأعداء', titleEn: 'The First Saudi State: Confronting Campaigns', page: 87 },
      { titleAr: 'الدولة السعودية الأولى: بعض معارك الدفاع 1226–1229هـ', titleEn: 'The First Saudi State: Defensive Battles, 1226–1229 AH', page: 91 },
      { titleAr: 'الدولة السعودية الأولى: بعض معارك الدفاع 1230–1233هـ', titleEn: 'The First Saudi State: Defensive Battles, 1230–1233 AH', page: 94 },
      { titleAr: 'الدولة السعودية الأولى: نهاية الدولة', titleEn: 'The First Saudi State: The End of the State', page: 96 },
      { titleAr: 'الدولة السعودية الأولى: الجوانب الحضارية', titleEn: 'The First Saudi State: Civilizational Aspects', page: 98 }
    ],
    reviewPage: 101
  },
  {
    titleAr: 'الوحدة الرابعة: التاريخ الوطني: الدولة السعودية الثانية',
    titleEn: 'Unit 4: National History—The Second Saudi State',
    visualSteps: [
      { labelAr: 'إعادة التأسيس', labelEn: 'Re-establishment' },
      { labelAr: 'بناء الاستقرار', labelEn: 'Building stability' },
      { labelAr: 'الدفاع عن الدولة', labelEn: 'Defending the state' },
      { labelAr: 'تحولات الدولة', labelEn: 'State transformations' }
    ],
    lessons: [
      { titleAr: 'الدولة السعودية الثانية: التأسيس', titleEn: 'The Second Saudi State: Founding', page: 106 },
      { titleAr: 'الدولة السعودية الثانية: الاستقرار', titleEn: 'The Second Saudi State: Stability', page: 109 },
      { titleAr: 'الدولة السعودية الثانية: الدفاع عن الدولة', titleEn: 'The Second Saudi State: Defending the State', page: 112 },
      { titleAr: 'الدولة السعودية الثانية: نهاية الدولة', titleEn: 'The Second Saudi State: The End of the State', page: 115 }
    ],
    reviewPage: 117
  },
  {
    titleAr: 'الوحدة الخامسة: التاريخ الوطني: المملكة العربية السعودية',
    titleEn: 'Unit 5: National History—The Kingdom of Saudi Arabia',
    visualSteps: [
      { labelAr: 'التأسيس', labelEn: 'Founding' },
      { labelAr: 'توحيد البلاد', labelEn: 'Unification' },
      { labelAr: 'بناء مؤسسات الدولة', labelEn: 'Building state institutions' },
      { labelAr: 'التنمية وخدمة الحرمين', labelEn: 'Development and service of the Two Holy Mosques' }
    ],
    lessons: [
      { titleAr: 'المملكة العربية السعودية: التأسيس', titleEn: 'The Kingdom of Saudi Arabia: Founding', page: 122 },
      { titleAr: 'المملكة العربية السعودية: توحيد البلاد', titleEn: 'The Kingdom of Saudi Arabia: Unification', page: 127 },
      { titleAr: 'المملكة العربية السعودية: أسس الدولة', titleEn: 'The Kingdom of Saudi Arabia: Foundations of the State', page: 135 },
      { titleAr: 'المملكة العربية السعودية: عهود الملوك', titleEn: 'The Kingdom of Saudi Arabia: Reigns of the Kings', page: 137 },
      { titleAr: 'المملكة العربية السعودية: عمارة الحرمين الشريفين', titleEn: 'The Kingdom of Saudi Arabia: Expansion of the Two Holy Mosques', page: 144 }
    ],
    reviewPage: 146
  },
  {
    titleAr: 'الوحدة السادسة: الشخصيات التاريخية',
    titleEn: 'Unit 6: Historical Figures',
    visualSteps: [
      { labelAr: 'الشخصية وسياقها', labelEn: 'Figure and context' },
      { labelAr: 'مواقف وأعمال', labelEn: 'Actions and contributions' },
      { labelAr: 'شواهد تاريخية', labelEn: 'Historical evidence' },
      { labelAr: 'الأثر والإرث', labelEn: 'Impact and legacy' }
    ],
    lessons: [
      { titleAr: 'الإمام محمد بن سعود', titleEn: 'Imam Muhammad bin Saud', page: 151 },
      { titleAr: 'الإمام تركي بن عبدالله بن محمد بن سعود', titleEn: 'Imam Turki bin Abdullah bin Muhammad bin Saud', page: 156 },
      { titleAr: 'الملك عبدالعزيز بن عبدالرحمن آل سعود', titleEn: 'King Abdulaziz bin Abdulrahman Al Saud', page: 159 },
      { titleAr: 'خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز آل سعود', titleEn: 'King Salman bin Abdulaziz Al Saud, Custodian of the Two Holy Mosques', page: 163 }
    ],
    reviewPage: 169
  }
];

const sourceNoteAr =
  'عنوان الدرس ورقم الصفحة مطابقان لفهرس كتاب التاريخ للصف الثاني الثانوي، نظام المسارات، طبعة 1448هـ/2026م. الشرح والرسم والتقويم من إعداد المنصة، وليست مقتبسة من الكتاب.';
const sourceNoteEn =
  'The lesson title and page match the contents of the Grade 11 Pathways History textbook, 1448 AH/2026 edition. The explanation, diagram, and assessment are original platform material, not copied from the textbook.';

function createLecture(
  unit: HistoryUnit,
  unitIndex: number,
  lesson: HistoryLesson | undefined,
  order: number,
  textbookLessonNumber: number
): Lecture {
  const isReview = !lesson;
  const lessonNumber = textbookLessonNumber;
  const unitNameAr = unit.titleAr.replace(/^الوحدة [^:]+:\s*/, '');
  const unitNameEn = unit.titleEn.replace(/^Unit \d+:\s*/, '');
  const titleAr = lesson
    ? `الدرس ${lessonNumber}: ${lesson.titleAr}`
    : `تقويم الوحدة ${unitIndex + 1}: ${unitNameAr}`;
  const titleEn = lesson
    ? `Lesson ${lessonNumber}: ${lesson.titleEn}`
    : `Unit ${unitIndex + 1} Review: ${unitNameEn}`;
  const page = lesson?.page ?? unit.reviewPage;
  const id = lesson
    ? `sa-g11-history-lesson-${lessonNumber}`
    : `sa-g11-history-unit-${unitIndex + 1}-review`;
  const studyFocusAr = lesson
    ? `يركز الدرس على «${lesson.titleAr}». يدرس المتعلم الموضوع في سياقه الزمني والمكاني، ويميز بين الشاهد التاريخي وتفسيره، ثم يبني استنتاجًا تسنده الأدلة.`
    : `يجمع التقويم مفاهيم ${unitNameAr}، ويتيح مراجعة تسلسل موضوعات الوحدة ومصادرها وشواهدها قبل الانتقال إلى الوحدة التالية.`;
  const studyFocusEn = lesson
    ? `This lesson focuses on “${lesson.titleEn}.” Learners place the topic in its time and place, distinguish historical evidence from interpretation, and build conclusions supported by evidence.`
    : `This review consolidates the topics, chronology, sources, and evidence in ${unitNameEn} before moving to the next unit.`;

  return {
    id,
    order,
    subject: 'HISTORY',
    gradeLevel: 'G11',
    country: 'SA',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'المملكة العربية السعودية – الصف الثاني الثانوي – نظام المسارات',
    gradeLevelNameEn: 'Kingdom of Saudi Arabia – Grade 11 – Pathways System',
    ministryAr: 'وزارة التعليم – المملكة العربية السعودية',
    ministryEn: 'Ministry of Education – Kingdom of Saudi Arabia',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First semester',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: lesson
      ? `الدرس ${lessonNumber} – ص ${page}`
      : `تقويم الوحدة ${unitIndex + 1} – ص ${page}`,
    lessonNumberEn: lesson ? `Lesson ${lessonNumber} – p. ${page}` : `Unit ${unitIndex + 1} review – p. ${page}`,
    titleAr,
    titleEn,
    subtitleAr: unit.titleAr,
    subtitleEn: unit.titleEn,
    descriptionAr: `${studyFocusAr}\n\n${sourceNoteAr}`,
    descriptionEn: `${studyFocusEn}\n\n${sourceNoteEn}`,
    durationMinutes: isReview ? 20 : 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: `ما الدليل الذي يساعد على فهم موضوع «${lesson?.titleAr ?? unit.titleAr}» في سياقه التاريخي؟`,
    warmupHookEn: `What evidence helps explain “${lesson?.titleEn ?? unit.titleEn}” in its historical context?`,
    learningOutcomesAr: [
      'أن يحدد المتعلم الفكرة الرئيسة للدرس ويربطها بوحدتها التاريخية.',
      'أن يستند إلى الشواهد والسياق الزمني والمكاني عند تفسير الموضوع.'
    ],
    learningOutcomesEn: [
      'Identify the lesson’s central idea and connect it to its historical unit.',
      'Use evidence and historical context when interpreting the topic.'
    ],
    keyConceptsAr: [lesson?.titleAr ?? unit.titleAr, 'السياق التاريخي', 'الشواهد والأدلة'],
    keyConceptsEn: [lesson?.titleEn ?? unit.titleEn, 'Historical context', 'Evidence'],
    summaryAr: `${studyFocusAr}\n\n${sourceNoteAr}`,
    summaryEn: `${studyFocusEn}\n\n${sourceNoteEn}`,
    sections: [{
      titleAr: lesson?.titleAr ?? unit.titleAr,
      titleEn: lesson?.titleEn ?? unit.titleEn,
      contentAr: `${studyFocusAr}\n\nتدريب مقترح: صغ سؤالًا تاريخيًا عن موضوع الدرس، وحدد نوع المصدر الذي قد يجيب عنه، ثم اذكر ما يلزم للتحقق من دلالته.\n\n${sourceNoteAr}`,
      contentEn: `${studyFocusEn}\n\nSuggested practice: formulate a historical question about the topic, identify a source that could address it, and state how its evidence should be assessed.\n\n${sourceNoteEn}`,
      diagram: {
        id: `${id}-diagram`,
        figureNumberAr: `شكل (${order})`,
        figureNumberEn: `Figure (${order})`,
        titleAr: `رسم تعليمي أصلي: ${lesson?.titleAr ?? unit.titleAr}`,
        titleEn: `Original learning diagram: ${lesson?.titleEn ?? unit.titleEn}`,
        captionAr: 'مخطط مفاهيمي تعليمي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
        captionEn: 'An instructional concept diagram created by the platform, not an image from the textbook.',
        diagramType: 'social_studies',
        visualSteps: unit.visualSteps
      }
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم: ${lesson?.titleAr ?? unit.titleAr}`,
      titleEn: `Check: ${lesson?.titleEn ?? unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `${id}-question`,
        textAr: `ما الممارسة التي تدعم فهم موضوع «${lesson?.titleAr ?? unit.titleAr}» فهمًا تاريخيًا منضبطًا؟`,
        textEn: `Which practice supports a well-grounded historical understanding of “${lesson?.titleEn ?? unit.titleEn}”?`,
        optionsAr: [
          'ربط الشواهد بسياقها الزمني والمكاني ومقارنة دلالاتها',
          'اعتماد رواية واحدة دون فحص مصدرها',
          'إغفال التسلسل الزمني عند تفسير الأحداث',
          'إصدار حكم بلا دليل تاريخي'
        ],
        optionsEn: [
          'Place evidence in its time and place and compare its implications',
          'Accept one account without examining its source',
          'Ignore chronology when interpreting events',
          'Make a judgment without historical evidence'
        ],
        correctIndex: 0,
        conceptTestedAr: 'السياق التاريخي ونقد الشواهد',
        conceptTestedEn: 'Historical context and evidence evaluation',
        explanationAr: 'تفسير الموضوع التاريخي يتطلب فحص الشواهد وربطها بزمانها ومكانها، لا قبول الرواية بلا نقد أو إصدار أحكام بلا دليل.',
        explanationEn: 'Historical interpretation requires examining evidence in its time and place rather than accepting accounts uncritically or making unsupported judgments.',
        difficulty: 'easy'
      }]
    }
  };
}

export const SAUDI_G11_HISTORY_LECTURES: Lecture[] = units.flatMap((unit, unitIndex) => {
  const firstLessonNumber = units
    .slice(0, unitIndex)
    .reduce((count, previousUnit) => count + previousUnit.lessons.length, 0);
  const firstOrder = units
    .slice(0, unitIndex)
    .reduce((count, previousUnit) => count + previousUnit.lessons.length + 1, 0);
  const lessons = unit.lessons.map((lesson, lessonIndex) =>
    createLecture(
      unit,
      unitIndex,
      lesson,
      firstOrder + lessonIndex + 1,
      firstLessonNumber + lessonIndex + 1
    )
  );
  const review = createLecture(
    unit,
    unitIndex,
    undefined,
    firstOrder + lessons.length + 1,
    firstLessonNumber + lessons.length + 1
  );
  return [...lessons, review];
});

export const SAUDI_G11_HISTORY_TEXTBOOK_LESSONS = units.flatMap((unit, unitIndex) =>
  unit.lessons.map((lesson, lessonIndex) => ({
    unitNumber: unitIndex + 1,
    lessonNumber: lessonIndex + 1,
    titleAr: lesson.titleAr,
    page: lesson.page
  }))
);
