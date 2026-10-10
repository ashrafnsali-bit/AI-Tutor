import type { Lecture } from '../types';

interface VisualArtsTopic {
  titleAr: string;
  titleEn: string;
  pageStart: number;
  pageEnd: number;
  focusAr: string;
  focusEn: string;
  activityAr: string;
  activityEn: string;
}

interface VisualArtsUnit {
  number: 1 | 2 | 3 | 4;
  titleAr: string;
  titleEn: string;
  reviewPage: number;
  topics: VisualArtsTopic[];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

export const SAUDI_G3_VISUAL_ARTS_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books//1448-GE-PE-K03-SM1-tart-part1.pdf';

const sourceNoteAr =
  `المصدر: كتاب التربية الفنية للصف الثالث الابتدائي، الجزء الأول من المقرر. رابط مورد عين: ${SAUDI_G3_VISUAL_ARTS_TEXTBOOK_URL}. الغلاف (PDF ص 1) يذكر طبعة 1448هـ/2026م والجزء الأول، وبيانات النشر الداخلية (PDF ص 2) تذكر 1446هـ. طوبقت الوحدات الأربعة وعناوين الموضوعات وصفحاتها مع قائمة المحتويات (PDF ص 8): الرسم ص 10–26، الزخرفة ص 28–58، الطباعة ص 60–80، والنسيج ص 82–93. فُحص الغلاف وبيانات النشر والفهرس؛ لم تراجع جميع صفحات الدروس الداخلية. محاور الشرح والأنشطة والرسوم وأسئلة المنصة مواد أصلية مساندة مستلهمة من عناوين الموضوعات، وليست صورًا أو نصوصًا منقولة من الكتاب. تستخدم خامات آمنة، وتكون الأنشطة العملية بإشراف معلم التربية الفنية.`;
const sourceNoteEn =
  `Source: Grade 3 Art Education textbook, Part One of the curriculum. IEN resource: ${SAUDI_G3_VISUAL_ARTS_TEXTBOOK_URL}. The cover (PDF p. 1) states Part One and 1448 AH/2026 CE; internal publication data (PDF p. 2) states 1446 AH. The four units, topic titles, and page references were checked against the contents (PDF p. 8): drawing pp. 10–26, ornamentation pp. 28–58, printing pp. 60–80, and textiles pp. 82–93. The cover, publication data, and contents were checked; not all internal lesson pages were reviewed. Platform explanations, activities, illustrations, and questions are original supplementary materials inspired by the topic headings, not copied text or images from the book. Use safe materials and complete practical activities under the art teacher’s supervision.`;

const units: VisualArtsUnit[] = [
  {
    number: 1,
    titleAr: 'مجال الرسم',
    titleEn: 'Drawing',
    reviewPage: 26,
    topics: [
      {
        titleAr: 'عناصر التصميم',
        titleEn: 'Elements of Design',
        pageStart: 10,
        pageEnd: 17,
        focusAr: 'لاحظ كيف تتعاون الخطوط والأشكال والمساحات والألوان في تكوين صورة واضحة ومتوازنة.',
        focusEn: 'Notice how lines, shapes, spaces, and colors work together to create a clear, balanced picture.',
        activityAr: 'رتب قصاصات ورقية بأشكال وأحجام مختلفة داخل إطار، ثم غيّر مواقعها لتبرز عنصرًا تختاره.',
        activityEn: 'Arrange paper cut-outs of different shapes and sizes in a frame, then move them to emphasize an element of your choice.',
      },
      {
        titleAr: 'التخطيط الأولي (الاسكتش)',
        titleEn: 'Initial Sketching',
        pageStart: 18,
        pageEnd: 25,
        focusAr: 'ابدأ العمل بخطوط خفيفة لتجريب أماكن الأشكال وأحجامها قبل إضافة التفاصيل.',
        focusEn: 'Begin with light lines to try the placement and size of shapes before adding details.',
        activityAr: 'اختر شيئًا بسيطًا في الصف، وارسم له اسكتشين صغيرين بتوزيع مختلف قبل اختيار أحدهما للتطوير.',
        activityEn: 'Choose a simple classroom object and make two small sketches with different layouts before developing one.',
      },
    ],
    questionAr: 'ما فائدة التخطيط الأولي قبل إكمال الرسم؟',
    questionEn: 'Why make an initial sketch before completing a drawing?',
    optionsAr: ['لتجريب ترتيب الأشكال وتعديلها', 'لإخفاء جميع الخطوط', 'لإضافة اللون قبل اختيار التكوين'],
    optionsEn: ['To try and adjust the arrangement of shapes', 'To hide every line', 'To add color before choosing a composition'],
  },
  {
    number: 2,
    titleAr: 'مجال الزخرفة',
    titleEn: 'Ornamentation',
    reviewPage: 58,
    topics: [
      {
        titleAr: 'الزخرفة البدائية والشعبية',
        titleEn: 'Early and Folk Ornament',
        pageStart: 28,
        pageEnd: 45,
        focusAr: 'تأمل وحدات الزخرفة وتكرارها، ولاحظ كيف يصنع ترتيب الأشكال إيقاعًا بصريًا.',
        focusEn: 'Observe decorative motifs and their repetition, and notice how arranging shapes creates visual rhythm.',
        activityAr: 'ابتكر وحدة زخرفية بسيطة من أشكال هندسية، وكررها في شريط ورقي مع تبديل لون واحد.',
        activityEn: 'Create a simple geometric motif and repeat it in a paper border, changing one color.',
      },
      {
        titleAr: 'الزخارف الشعبية السعودية',
        titleEn: 'Saudi Folk Ornaments',
        pageStart: 46,
        pageEnd: 57,
        focusAr: 'استكشف تنوع الزخارف الشعبية السعودية، ولاحظ الأشكال والألوان والتكرار في النماذج الفنية.',
        focusEn: 'Explore the variety of Saudi folk ornaments and notice shapes, colors, and repetition in art examples.',
        activityAr: 'صمم نمطًا زخرفيًا أصليًا مستلهمًا من الأشكال الهندسية والألوان، مع توضيح الوحدة التي كررتها.',
        activityEn: 'Design an original ornament inspired by geometric shapes and colors, identifying the motif you repeated.',
      },
    ],
    questionAr: 'ما الذي يساعد على إظهار الإيقاع في الزخرفة؟',
    questionEn: 'What helps create rhythm in an ornament?',
    optionsAr: ['تكرار وحدة بترتيب واضح', 'تغيير جميع الأشكال بلا نمط', 'إخفاء المسافات بين الوحدات'],
    optionsEn: ['Repeating a motif in a clear arrangement', 'Changing every shape without a pattern', 'Hiding the spaces between motifs'],
  },
  {
    number: 3,
    titleAr: 'مجال الطباعة',
    titleEn: 'Printing',
    reviewPage: 80,
    topics: [
      {
        titleAr: 'أطبع بوحداتي الهندسية',
        titleEn: 'Printing with Geometric Motifs',
        pageStart: 60,
        pageEnd: 65,
        focusAr: 'استخدم وحدة هندسية آمنة وجاهزة لصنع بصمات متكررة، ولاحظ أثر ترتيبها في التكوين.',
        focusEn: 'Use a safe, ready-made geometric block to make repeated prints and observe how their arrangement affects the composition.',
        activityAr: 'باستخدام قالب إسفنجي جاهز وحبر مائي قابل للغسل، اطبع وحدة هندسية عدة مرات على ورقة.',
        activityEn: 'With a ready-made sponge block and washable water-based ink, print a geometric motif several times on paper.',
      },
      {
        titleAr: 'تكوينات وملامس مطبوعة',
        titleEn: 'Printed Compositions and Textures',
        pageStart: 66,
        pageEnd: 71,
        focusAr: 'قارن بين بصمات مطبوعة مختلفة، ونظمها لتكوين مساحة يظهر فيها تنوع الملامس.',
        focusEn: 'Compare different printed marks and arrange them into a composition that shows varied textures.',
        activityAr: 'اطبع بعناصر صفية آمنة وجاهزة ذات ملامس مختلفة، ثم رتب البصمات في مجموعات متقاربة أو متباينة.',
        activityEn: 'Print with safe, ready-made classroom items of different textures, then group the marks by similarity or contrast.',
      },
      {
        titleAr: 'طباعة وحدات ذات ملامس مختلفة',
        titleEn: 'Printing Motifs with Different Textures',
        pageStart: 72,
        pageEnd: 79,
        focusAr: 'لاحظ كيف يغيّر ملمس القالب شكل البصمة، وجرب تكرار بصمات متنوعة في تصميم واحد.',
        focusEn: 'Notice how a block’s texture changes its print, and try repeating varied marks in one design.',
        activityAr: 'قارن بصمتين لقالبين جاهزين مختلفي الملمس، ثم أنشئ ترتيبًا بسيطًا يوضح الفرق بينهما.',
        activityEn: 'Compare prints from two ready-made blocks with different textures, then arrange them to show the difference.',
      },
    ],
    questionAr: 'كيف تصنع بصمات متكررة بخامة آمنة؟',
    questionEn: 'How can you make repeated prints with a safe material?',
    optionsAr: ['باستخدام قالب جاهز وحبر قابل للغسل', 'باستعمال أداة حادة دون إشراف', 'بالضغط على الورق بقلم جاف فقط'],
    optionsEn: ['Use a ready-made block and washable ink', 'Use a sharp tool without supervision', 'Press a dry pen against the paper'],
  },
  {
    number: 4,
    titleAr: 'مجال النسيج',
    titleEn: 'Textiles',
    reviewPage: 93,
    topics: [
      {
        titleAr: 'النسيج البسيط الملون',
        titleEn: 'Simple Colored Weave',
        pageStart: 82,
        pageEnd: 92,
        focusAr: 'تعرّف تداخل الشرائط في النسيج البسيط، ولاحظ كيف ينتج ترتيب الألوان نمطًا متكررًا.',
        focusEn: 'Explore how strips interlace in a simple weave and how arranging colors creates a repeating pattern.',
        activityAr: 'استخدم قاعدة ورقية مشقوقة مسبقًا وشرائط ورق عريضة، ثم مررها بالتبادل فوق القاعدة وتحتها.',
        activityEn: 'Use a pre-slit paper base and wide paper strips, weaving them alternately over and under the base.',
      },
    ],
    questionAr: 'كيف تتداخل شرائط الورق في النسيج البسيط؟',
    questionEn: 'How do paper strips interlace in a simple weave?',
    optionsAr: ['بالتبادل فوق شريط وتحت الذي يليه', 'بوضع الشرائط متوازية دون تداخل', 'بلف الشرائط في كرات'],
    optionsEn: ['Alternately over one strip and under the next', 'By laying strips parallel without interlacing', 'By rolling strips into balls'],
  },
];

export const SAUDI_G3_VISUAL_ARTS_UNIT_COUNT = units.length;
export const SAUDI_G3_VISUAL_ARTS_TOPIC_COUNT = units.reduce(
  (count, unit) => count + unit.topics.length,
  0
);
export const SAUDI_G3_VISUAL_ARTS_TABLE_OF_CONTENTS = units.map((unit) => ({
  unitNumber: unit.number,
  titleAr: unit.titleAr,
  titleEn: unit.titleEn,
  page: unit.topics[0].pageStart,
  reviewPage: unit.reviewPage,
  topics: unit.topics.map(({ titleAr, titleEn, pageStart, pageEnd }) => ({
    titleAr,
    titleEn,
    pageStart,
    pageEnd,
  })),
}));

const unitNumbersAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'] as const;

export const SAUDI_G3_VISUAL_ARTS_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const unitTitleAr = `الجزء الأول — الوحدة ${unitNumbersAr[index]}: ${unit.titleAr}`;
  const unitTitleEn = `Part One — Unit ${unit.number}: ${unit.titleEn}`;

  return {
    id: `saudi-g3-visual-arts-1448-part-1-unit-${unit.number}`,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `التربية الفنية — الصف الثالث — الجزء الأول — ص ${unit.topics[0].pageStart}`,
    subtitleEn: `Art Education — Grade 3 — Part One — p. ${unit.topics[0].pageStart}`,
    descriptionAr: `${sourceNoteAr}\n\nالأنشطة والرسوم المقترحة أصلية ومساندة لدراسة الفهرس. تُنفذ التطبيقات بخامات آمنة، ويستخدم المعلم الأدوات التي يجهزها للدرس.`,
    descriptionEn: `${sourceNoteEn}\n\nSuggested activities and illustrations are original supplements to the indexed topics. Use safe materials, and let the teacher prepare any tools needed.`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب التربية الفنية',
    ministryEn: 'Ministry of Education — Art Education textbook',
    gradeLevelNameAr: 'الصف الثالث الابتدائي — التربية الفنية',
    gradeLevelNameEn: 'Grade 3 — Art Education',
    termAr: 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Part One of the curriculum — 1448 AH/2026 cover edition',
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `${unitTitleAr} — ${unit.topics.length} موضوعات`,
    lessonNumberEn: `${unitTitleEn} — ${unit.topics.length} topics`,
    warmupHookAr: `ما الأشكال أو الأنماط التي تلاحظها في «${unit.titleAr}»؟`,
    warmupHookEn: `What shapes or patterns do you notice in ${unit.titleEn.toLowerCase()}?`,
    learningOutcomesAr: [
      `يتعرف موضوعات ${unit.titleAr} الواردة في الفهرس: ${unit.topics.map((topic) => topic.titleAr).join('؛ ')}.`,
      'يجرب نشاطًا فنيًا أصليًا ويصف اختيارًا بصريًا واحدًا.',
      'يستخدم خامات آمنة وينفذ التطبيق العملي بإشراف معلم المادة.',
    ],
    learningOutcomesEn: [
      `Identify the ${unit.titleEn.toLowerCase()} topics listed in the contents: ${unit.topics.map((topic) => topic.titleEn).join('; ')}.`,
      'Try an original art activity and describe one visual choice.',
      'Use safe materials and complete practical work under the art teacher’s supervision.',
    ],
    keyConceptsAr: [
      ...unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.pageStart}–${topic.pageEnd})`),
      `تقويم الوحدة (ص ${unit.reviewPage})`,
    ],
    keyConceptsEn: [
      ...unit.topics.map((topic) => `${topic.titleEn} (pp. ${topic.pageStart}–${topic.pageEnd})`),
      `Unit review (p. ${unit.reviewPage})`,
    ],
    summaryAr: `${unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.pageStart}–${topic.pageEnd})`).join('\n')}\nتقويم الوحدة (ص ${unit.reviewPage})\n\n${sourceNoteAr}`,
    summaryEn: `${unit.topics.map((topic) => `${topic.titleEn} (pp. ${topic.pageStart}–${topic.pageEnd})`).join('\n')}\nUnit review (p. ${unit.reviewPage})\n\n${sourceNoteEn}`,
    sections: [
      ...unit.topics.map((topic, topicIndex) => ({
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${topic.focusAr}\n\nنشاط فني أصلي: ${topic.activityAr}\n\nمرجع الفهرس: ص ${topic.pageStart}–${topic.pageEnd}.\n\n${sourceNoteAr}`,
        contentEn: `${topic.focusEn}\n\nOriginal art activity: ${topic.activityEn}\n\nContents reference: pp. ${topic.pageStart}–${topic.pageEnd}.\n\n${sourceNoteEn}`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g3-visual-arts-map-${unit.number}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${unit.titleAr}`,
            titleEn: `Original learning illustration: ${unit.titleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created illustration, not an image from the textbook.',
            diagramType: unit.number === 4 ? 'arabic_learning_map' as const : 'visual_arts' as const,
            visualSteps: unit.number === 4
              ? [
                { labelAr: 'مرر الشريط فوق القاعدة', labelEn: 'Pass the strip over the base' },
                { labelAr: 'مرره تحت الشريط التالي', labelEn: 'Pass it under the next strip' },
                { labelAr: 'كرر التداخل بالتبادل', labelEn: 'Repeat the alternating weave' },
                { labelAr: 'لاحظ ترتيب الألوان', labelEn: 'Observe the color pattern' },
              ]
              : unit.topics.map((item) => ({
                labelAr: item.titleAr,
                labelEn: item.titleEn,
              })),
          },
        } : {}),
      })),
      {
        titleAr: 'تقويم الوحدة',
        titleEn: 'Unit Review',
        contentAr: `راجع موضوعات الوحدة، ثم أجب عن تقويمها في الكتاب.\n\nمرجع الفهرس: ص ${unit.reviewPage}.\n\n${sourceNoteAr}`,
        contentEn: `Review the unit topics, then complete its textbook review.\n\nContents reference: p. ${unit.reviewPage}.\n\n${sourceNoteEn}`,
      },
    ],
    assessment: {
      id: `saudi-g3-visual-arts-assessment-${unit.number}`,
      lectureId: `saudi-g3-visual-arts-1448-part-1-unit-${unit.number}`,
      titleAr: `تقويم الوحدة: ${unit.titleAr}`,
      titleEn: `Unit check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g3-visual-arts-question-${unit.number}`,
        textAr: unit.questionAr,
        textEn: unit.questionEn,
        optionsAr: [...unit.optionsAr],
        optionsEn: [...unit.optionsEn],
        correctIndex: 0,
        conceptTestedAr: unit.titleAr,
        conceptTestedEn: unit.titleEn,
        explanationAr: 'تراجع الإجابة فكرة المجال وعناوين الوحدة؛ تُراجع تفاصيل التطبيق العملي مع معلم المادة.',
        explanationEn: 'The answer reviews the art field and unit topics; practical details should be discussed with the art teacher.',
        difficulty: 'easy',
      }],
    },
  };
});
