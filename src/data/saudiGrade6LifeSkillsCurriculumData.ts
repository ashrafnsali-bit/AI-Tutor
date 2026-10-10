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

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K06-SM1-tfml.pdf';
const sourceNoteAr =
  'المصدر: كتاب المهارات الحياتية والأسرية للصف السادس الابتدائي، التعليم العام، طبعة الغلاف 1448هـ/2026م. طوبقت الوحدات والدروس وصفحاتها مع فهرس الكتاب (PDF ص 7)، وتؤكد صفحة PDF 6 أن المحتوى من الجزء الأول. يسجل بيان النشر الداخلي في PDF ص 2 سنة 1446هـ؛ أُظهر هذا الاختلاف عن سنة الغلاف. روجعت بدايات الدروس في الصفحات المطبوعة 11 و17 و23 و37 و55 و69 و83 و87، ولم تراجع صفحات الكتاب كاملة. دليل الأسرة وأنشطته صفحات مساندة وليست دروسًا مرقمة. الشروح والأنشطة والرسوم والتقويمات هنا أصلية من إعداد المنصة وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Source: the Grade 6 general-education Life and Family Skills textbook, whose cover states 1448 AH/2026. Unit and lesson titles and page references were checked against the contents (PDF p. 7), and PDF p. 6 identifies this as Part One. The internal publication data on PDF p. 2 records 1446 AH; this difference from the cover is disclosed. Lesson openings on printed pp. 11, 17, 23, 37, 55, 69, 83, and 87 were reviewed; the full textbook was not. The family guide and its activities are supplementary pages, not numbered lessons. Explanations, activities, diagrams, and assessments here are original platform material, not copied from the textbook.';

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
        titleAr: 'بشرتي',
        titleEn: 'My Skin',
        page: 11,
        focusAr: 'تعرّف إلى أنواع البشرة ووظيفة الجلد في حماية الجسم، واختر عادات عناية ونظافة تلائم احتياج بشرتك.',
        focusEn: 'Explore skin types and the skin’s protective role, then choose hygiene and care habits appropriate to your needs.',
        visualSteps: [
          ['البشرة ووظيفتها', 'Skin and its role'],
          ['تمييز النوع', 'Identify skin type'],
          ['ملاحظة الاحتياج', 'Notice what it needs'],
          ['عناية مناسبة', 'Choose suitable care'],
        ],
      },
      {
        titleAr: 'العناية بشعري وأظفاري',
        titleEn: 'Caring for My Hair and Nails',
        page: 17,
        focusAr: 'تعرّف إلى أجزاء الشعر والأظفار، واربط العناية اليومية بالنظافة والغذاء المتوازن وطلب المشورة عند الحاجة.',
        focusEn: 'Identify parts of hair and nails, and connect everyday care with hygiene, balanced nutrition, and asking for help when needed.',
        visualSteps: [
          ['ملاحظة الشعر والأظفار', 'Notice hair and nails'],
          ['نظافة يومية', 'Daily hygiene'],
          ['غذاء متوازن', 'Balanced nutrition'],
          ['عناية آمنة', 'Safe care'],
        ],
      },
      {
        titleAr: 'التعامل مع الأجهزة الإلكترونية',
        titleEn: 'Using Electronic Devices',
        page: 23,
        focusAr: 'ميّز الاتصال الإلكتروني وبعض خدمات الإنترنت، ونظّم استخدام الأجهزة بما يحفظ الوقت والخصوصية والسلامة.',
        focusEn: 'Explore electronic communication and internet services, and manage device use to protect time, privacy, and safety.',
        visualSteps: [
          ['اختيار الخدمة', 'Choose a service'],
          ['استخدام مسؤول', 'Use responsibly'],
          ['حماية الخصوصية', 'Protect privacy'],
          ['موازنة الوقت', 'Balance screen time'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ls6-q1',
      'ما التصرف الأنسب عند استخدام خدمة إلكترونية؟',
      'What is the most appropriate way to use an online service?',
      'استخدامها بمسؤولية مع حماية الخصوصية وتنظيم الوقت',
      'Use it responsibly while protecting privacy and managing time',
      ['مشاركة المعلومات الشخصية مع أي مستخدم', 'استخدام الجهاز دون توقف', 'فتح الروابط المجهولة'],
      ['Share personal information with anyone', 'Use the device without breaks', 'Open unknown links'],
      'السلامة والاستخدام المسؤول',
      'Safety and responsible use',
      'الاستخدام المسؤول يوازن الاستفادة من التقنية مع الخصوصية والسلامة.',
      'Responsible use balances the benefits of technology with privacy and safety.',
    ),
  },
  {
    titleAr: 'مسكني',
    titleEn: 'My Home',
    lessons: [
      {
        titleAr: 'الحوادث داخل المنزل',
        titleEn: 'Accidents at Home',
        page: 37,
        focusAr: 'تعرّف إلى أخطار الحوادث المنزلية، وفكّر في الوقاية والاستعداد للطوارئ وإبلاغ شخص بالغ موثوق.',
        focusEn: 'Recognize household hazards and consider prevention, emergency readiness, and notifying a trusted adult.',
        visualSteps: [
          ['لاحظ مصدر الخطر', 'Notice a hazard'],
          ['ابتعد عن الخطر', 'Move away'],
          ['أبلغ شخصًا بالغًا', 'Tell a trusted adult'],
          ['اتبع خطة الطوارئ', 'Follow the safety plan'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ls6-q2',
      'ماذا تفعل أولًا إذا لاحظت خطرًا أو حادثًا في المنزل؟',
      'What should you do first if you notice a hazard or accident at home?',
      'ابتعد عن الخطر وأبلغ شخصًا بالغًا موثوقًا',
      'Move away from danger and tell a trusted adult',
      ['تلمس مصدر الخطر', 'تخفي الأمر عن الجميع', 'تجرب إصلاحه وحدك'],
      ['Touch the hazard', 'Hide it from everyone', 'Try to repair it alone'],
      'الاستعداد للحوادث المنزلية',
      'Household accident readiness',
      'الابتعاد وإبلاغ شخص بالغ يساعدان على تقليل الخطر وطلب المساعدة المناسبة.',
      'Moving away and alerting a trusted adult help reduce danger and get appropriate assistance.',
    ),
  },
  {
    titleAr: 'ملبسي',
    titleEn: 'My Clothing',
    lessons: [
      {
        titleAr: 'اختيار الملابس',
        titleEn: 'Choosing Clothes',
        page: 55,
        focusAr: 'قارن خصائص الملابس، واختر ما يلائم الطقس والمناسبة ويحترم الاحتشام والراحة والسلامة.',
        focusEn: 'Compare clothing features and choose items suited to the weather and occasion while supporting modesty, comfort, and safety.',
        visualSteps: [
          ['حدّد المناسبة', 'Consider the occasion'],
          ['راعِ الطقس', 'Consider the weather'],
          ['تحقق من الراحة', 'Check comfort'],
          ['اختر بأمان', 'Choose safely'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ls6-q3',
      'ما الذي ينبغي مراعاته عند اختيار الملابس؟',
      'What should you consider when choosing clothes?',
      'المناسبة والطقس والراحة والاحتشام',
      'The occasion, weather, comfort, and modesty',
      ['اللون وحده', 'رأي شخص واحد فقط', 'اختيار ملابس غير مناسبة للطقس'],
      ['Color alone', 'Only one person’s opinion', 'Choosing clothes unsuited to the weather'],
      'اختيار الملابس الملائمة',
      'Choosing suitable clothing',
      'الاختيار الملائم يراعي ظروف الاستخدام وراحة الشخص وسلامته.',
      'A suitable choice considers the situation, comfort, and safety.',
    ),
  },
  {
    titleAr: 'بيئتي',
    titleEn: 'My Environment',
    lessons: [
      {
        titleAr: 'التخلص من النفايات الصلبة',
        titleEn: 'Disposing of Solid Waste',
        page: 69,
        focusAr: 'ميّز المواد القابلة لإعادة الاستخدام أو التدوير، وشارك في فرز النفايات والتخلص منها بطريقة تحافظ على البيئة.',
        focusEn: 'Identify materials that can be reused or recycled, and help sort and dispose of waste in an environmentally responsible way.',
        visualSteps: [
          ['قلّل الاستهلاك', 'Reduce consumption'],
          ['فرز المواد', 'Sort materials'],
          ['إعادة الاستخدام', 'Reuse items'],
          ['إعادة التدوير', 'Recycle'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ls6-q4',
      'أي ممارسة تساعد على الحد من أثر النفايات الصلبة؟',
      'Which practice helps reduce the impact of solid waste?',
      'فرز المواد وإعادة استخدام ما يصلح منها',
      'Sort materials and reuse suitable items',
      ['خلط جميع المواد ورميها في مكان غير مخصص', 'زيادة المواد أحادية الاستخدام', 'ترك النفايات في البيئة'],
      ['Mix everything and dump it in an unsuitable place', 'Use more single-use materials', 'Leave waste in the environment'],
      'الحد من النفايات',
      'Reducing waste',
      'الفرز وإعادة الاستخدام يساعدان على تقليل النفايات والمحافظة على الموارد.',
      'Sorting and reuse help reduce waste and conserve resources.',
    ),
  },
  {
    titleAr: 'غذائي',
    titleEn: 'My Food',
    lessons: [
      {
        titleAr: 'القهوة',
        titleEn: 'Coffee',
        page: 83,
        focusAr: 'استكشف القهوة بوصفها مشروبًا اجتماعيًا، وتعرّف إلى بعض مراحل إعدادها وثقافة تقديمها، مع مراعاة الاعتدال.',
        focusEn: 'Explore coffee as a social drink, learn about some preparation stages and serving customs, and consider moderation.',
        visualSteps: [
          ['حبوب البن', 'Coffee beans'],
          ['تحميص وطحن', 'Roast and grind'],
          ['إعداد القهوة', 'Prepare coffee'],
          ['تقديم واعتدال', 'Serve in moderation'],
        ],
      },
      {
        titleAr: 'التمر',
        titleEn: 'Dates',
        page: 87,
        focusAr: 'تعرّف إلى التمر ومراحل نضجه وقيمته الغذائية، واستكشف طرق حفظه واستخدامه ومشاركة الأسرة في إعداد الأطعمة.',
        focusEn: 'Explore dates, their ripening stages and nutritional value, and consider storage, uses, and family participation in food preparation.',
        visualSteps: [
          ['مراحل نضج التمر', 'Date ripening stages'],
          ['قيمة غذائية', 'Nutritional value'],
          ['حفظ مناسب', 'Suitable storage'],
          ['مشاركة الأسرة', 'Family participation'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ls6-q5',
      'أي وصف يعبّر عن اختيار واعٍ للغذاء؟',
      'Which choice reflects informed food habits?',
      'التعرّف إلى الغذاء وحفظه واستهلاكه باعتدال',
      'Understand the food, store it properly, and consume it in moderation',
      ['إهمال طريقة الحفظ', 'الاعتماد على صنف واحد دائمًا', 'الإسراف في الاستهلاك'],
      ['Ignore storage practices', 'Always rely on only one food', 'Consume excessively'],
      'الغذاء والاستهلاك المسؤول',
      'Food and responsible consumption',
      'المعرفة بالغذاء وحفظه والاعتدال تدعم عادات استهلاك أفضل.',
      'Food knowledge, proper storage, and moderation support better consumption habits.',
    ),
  },
];

const arabicUnitNumbers = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'] as const;

export const SAUDI_G6_LIFE_SKILLS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G6_LIFE_SKILLS_UNIT_COUNT = units.length;
export const SAUDI_G6_LIFE_SKILLS_LESSON_COUNT = units.reduce(
  (total, unit) => total + unit.lessons.length,
  0
);
export const SAUDI_G6_LIFE_SKILLS_TABLE_OF_CONTENTS = units.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    unitTitleAr: unit.titleAr,
    titleAr: lesson.titleAr,
    page: lesson.page,
  }))
);

export const SAUDI_G6_LIFE_SKILLS_LECTURES: Lecture[] = units.map((unit, unitIndex) => {
  const order = unitIndex + 1;
  const titleAr = `الوحدة ${arabicUnitNumbers[unitIndex]}: ${unit.titleAr}`;
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
        id: `saudi-g6-life-skills-1448-unit-${order}-lesson-${lessonIndex + 1}`,
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

  const lectureId = `saudi-g6-life-skills-1448-unit-${order}`;
  const lessonReferencesAr = unit.lessons.map((lesson) => `${lesson.titleAr} (ص ${lesson.page})`);
  const lessonReferencesEn = unit.lessons.map((lesson) => `${lesson.titleEn} (p. ${lesson.page})`);

  return {
    id: lectureId,
    order,
    titleAr,
    titleEn,
    subtitleAr: `الجزء الأول من المقرر — الصف السادس الابتدائي — فهرس PDF ص 7`,
    subtitleEn: `Part One — Grade 6 — PDF contents p. 7`,
    descriptionAr: `${sourceNoteAr}\n\nتضم الوحدة ${unit.lessons.length} دروسًا مفهرسة. الشروح والرسوم والأسئلة من إعداد المنصة.`,
    descriptionEn: `${sourceNoteEn}\n\nThis unit contains ${unit.lessons.length} indexed lessons. Explanations, visuals, and questions are original platform material.`,
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'LIFE_SKILLS',
    gradeLevel: 'G6',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب المهارات الحياتية والأسرية',
    ministryEn: 'Saudi Ministry of Education — Life and Family Skills textbook',
    gradeLevelNameAr: 'الصف السادس الابتدائي',
    gradeLevelNameEn: 'Grade 6',
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
      titleAr: `تقويم الوحدة ${arabicUnitNumbers[unitIndex]}: ${unit.titleAr}`,
      titleEn: `Unit ${order} Check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question],
    },
  };
});
