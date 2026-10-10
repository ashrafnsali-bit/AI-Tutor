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

export const SAUDI_G2_VISUAL_ARTS_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-tart.pdf';

const sourceNoteAr =
  `المصدر: كتاب التربية الفنية للصف الثاني الابتدائي، الجزء الأول من المقرر. رابط مورد عين: ${SAUDI_G2_VISUAL_ARTS_TEXTBOOK_URL}. الغلاف (PDF ص 1) يذكر طبعة 1448هـ/2026م والجزء الأول، وبيانات النشر الداخلية (PDF ص 2) تذكر 1446هـ. طوبقت أسماء المجالات الأربعة ونطاقات الصفحات وصفحات التقويم مع الفهرس (PDF ص 7–8): الرسم ص 10–26، الزخرفة ص 28–58، النسيج ص 60–80، والطباعة ص 82–116. روجعت بدايات الموضوعات في ص 10 و18 و28 و46 و60 و66 و72 و82 و90 و102. عناوين الشرح في المنصة أوصاف تعليمية للمحاور وليست نقلًا حرفيًا لعناوين الكتاب. الشروح والأنشطة والرسوم وأسئلة التقويم أصلية، ولا تستخدم صور الكتاب. تُستخدم خامات آمنة، وتنفذ التطبيقات بإشراف معلم التربية الفنية.`;
const sourceNoteEn =
  `Source: Grade 2 Art Education textbook, Part One of the curriculum. IEN resource: ${SAUDI_G2_VISUAL_ARTS_TEXTBOOK_URL}. The cover (PDF p. 1) states Part One and 1448 AH/2026 CE; internal publication data (PDF p. 2) states 1446 AH. The four art fields, page ranges, and review pages were checked against the contents (PDF pp. 7–8): drawing pp. 10–26, ornamentation pp. 28–58, textiles pp. 60–80, and printing pp. 82–116. The opening pages of topics on pp. 10, 18, 28, 46, 60, 66, 72, 82, 90, and 102 were reviewed. Platform lesson titles are descriptive learning labels, not verbatim textbook headings. Explanations, activities, illustrations, and review questions are original and do not use textbook images. Use safe materials and complete activities under the art teacher’s supervision.`;

const units: VisualArtsUnit[] = [
  {
    number: 1,
    titleAr: 'مجال الرسم',
    titleEn: 'Drawing',
    reviewPage: 26,
    topics: [
      {
        titleAr: 'الطبيعة في بلادي',
        titleEn: 'Nature in My Country',
        pageStart: 10,
        pageEnd: 17,
        focusAr: 'تأمل مشاهد من البيئة السعودية، ولاحظ كيف تساعد الخطوط والأشكال والألوان على التعبير عن المكان.',
        focusEn: 'Observe scenes from the Saudi environment and notice how lines, shapes, and colors express a place.',
        activityAr: 'ارسم مشهدًا طبيعيًا من الذاكرة أو من ملاحظة آمنة، ثم اختر لونين يبرزان إحساسك بالمكان.',
        activityEn: 'Draw a landscape from memory or safe observation, then choose two colors that express your impression of the place.',
      },
      {
        titleAr: 'التجريب بالرسم والخطوط',
        titleEn: 'Exploring Drawing and Lines',
        pageStart: 18,
        pageEnd: 25,
        focusAr: 'جرّب خطوطًا وأشكالًا بسيطة، ولاحظ كيف يؤدي تغيير اتجاهها وتكرارها إلى تكوينات مختلفة.',
        focusEn: 'Try simple lines and shapes, and notice how changing their direction and repetition creates different compositions.',
        activityAr: 'أنشئ ثلاث تكوينات صغيرة بخطوط مستقيمة ومتعرجة ومنحنية، ثم صف الاختلاف بينها.',
        activityEn: 'Create three small compositions with straight, wavy, and curved lines, then describe their differences.',
      },
    ],
    questionAr: 'ما الذي يساعد على التعبير عن مشهد طبيعي في الرسم؟',
    questionEn: 'What helps express a landscape in a drawing?',
    optionsAr: ['اختيار الخطوط والأشكال والألوان المناسبة', 'استخدام لون واحد دائمًا', 'ملء الورقة دون ملاحظة التكوين'],
    optionsEn: ['Choosing suitable lines, shapes, and colors', 'Always using one color', 'Filling the page without observing the composition'],
  },
  {
    number: 2,
    titleAr: 'مجال الزخرفة',
    titleEn: 'Ornamentation',
    reviewPage: 58,
    topics: [
      {
        titleAr: 'التكرار في الزخرفة الهندسية',
        titleEn: 'Repetition in Geometric Ornament',
        pageStart: 28,
        pageEnd: 45,
        focusAr: 'لاحظ الوحدات الهندسية المتكررة، وكيف ينظم التتابع والمسافات إيقاعًا بصريًا واضحًا.',
        focusEn: 'Observe repeated geometric motifs and how sequence and spacing create a clear visual rhythm.',
        activityAr: 'ابتكر وحدة من مثلثات أو مربعات ورقية كبيرة، وكررها في شريط مع المحافظة على مسافات متقاربة.',
        activityEn: 'Create a motif from large paper triangles or squares and repeat it in a border with even spacing.',
      },
      {
        titleAr: 'الزخارف الشعبية السعودية',
        titleEn: 'Saudi Folk Ornaments',
        pageStart: 46,
        pageEnd: 57,
        focusAr: 'تأمل نماذج من الزخارف الشعبية السعودية، وانتبه إلى أشكالها وألوانها وطرائق تكرارها.',
        focusEn: 'Study examples of Saudi folk ornament and notice their shapes, colors, and patterns of repetition.',
        activityAr: 'صمم زخرفة أصلية مستوحاة من الأشكال الهندسية والألوان التي تختارها، من دون نسخ نموذج جاهز.',
        activityEn: 'Design an original ornament inspired by geometric shapes and colors of your choice without copying a ready-made example.',
      },
    ],
    questionAr: 'كيف نصنع إيقاعًا بصريًا في شريط زخرفي؟',
    questionEn: 'How can we create visual rhythm in an ornamental border?',
    optionsAr: ['بتكرار وحدة بترتيب ومسافات واضحة', 'بتغيير جميع الوحدات بلا ترتيب', 'بوضع كل الأشكال فوق بعضها'],
    optionsEn: ['By repeating a motif with clear order and spacing', 'By changing every motif without order', 'By placing all shapes on top of one another'],
  },
  {
    number: 3,
    titleAr: 'مجال النسيج',
    titleEn: 'Textiles',
    reviewPage: 80,
    topics: [
      {
        titleAr: 'التداخل البسيط للخيوط',
        titleEn: 'Basic Interlacing of Threads',
        pageStart: 60,
        pageEnd: 65,
        focusAr: 'تعرّف فكرة مرور خيط فوق خيط وتحته، ولاحظ كيف يثبت التداخل أجزاء النسيج.',
        focusEn: 'Explore how one strand passes over and under another and how interlacing holds a textile together.',
        activityAr: 'استخدم شرائط ورقية عريضة وقاعدة أعدها المعلم مسبقًا، ومرر الشرائط بالتبادل فوق القاعدة وتحتها.',
        activityEn: 'Use wide paper strips and a base prepared by the teacher, passing the strips alternately over and under it.',
      },
      {
        titleAr: 'تكوين أشكال منسوجة',
        titleEn: 'Creating Woven Patterns',
        pageStart: 66,
        pageEnd: 71,
        focusAr: 'غيّر ترتيب الألوان واتجاه الشرائط لتكوين نمط نسيجي بسيط يمكن ملاحظته ومقارنته.',
        focusEn: 'Change color order and strip direction to create a simple woven pattern that can be observed and compared.',
        activityAr: 'كوّن مساحة منسوجة بلونين، ثم جرّب ترتيبًا ثانيًا وسجّل ما تغيّر في النمط.',
        activityEn: 'Weave a small area with two colors, then try a second arrangement and note how the pattern changes.',
      },
      {
        titleAr: 'الخامات والملامس النسيجية',
        titleEn: 'Textile Materials and Textures',
        pageStart: 72,
        pageEnd: 79,
        focusAr: 'قارن بين عينات نسيجية آمنة من حيث اللون والملمس وطريقة ترتيب الخيوط.',
        focusEn: 'Compare safe textile samples by color, texture, and the way their strands are arranged.',
        activityAr: 'رتب قصاصات قماش كبيرة ونظيفة حسب ملمسها، ثم ارسم رموزًا بسيطة توضح الفرق بينها.',
        activityEn: 'Sort large, clean fabric swatches by texture, then draw simple symbols to show how they differ.',
      },
    ],
    questionAr: 'ما الطريقة الأساسية لتكوين نسيج من شرائط ورقية؟',
    questionEn: 'What is the basic way to make a textile from paper strips?',
    optionsAr: ['تمرير الشرائط بالتبادل فوق القاعدة وتحتها', 'وضع كل الشرائط متوازية بلا تداخل', 'تجعيد الشرائط في كرات'],
    optionsEn: ['Passing strips alternately over and under the base', 'Laying all strips parallel without interlacing', 'Crumpling the strips into balls'],
  },
  {
    number: 4,
    titleAr: 'مجال الطباعة',
    titleEn: 'Printing',
    reviewPage: 116,
    topics: [
      {
        titleAr: 'الطباعة من الطبيعة',
        titleEn: 'Printing from Nature',
        pageStart: 82,
        pageEnd: 89,
        focusAr: 'لاحظ أثر الملامس والأشكال الطبيعية عند نقل طبعتها باستخدام لون مائي آمن.',
        focusEn: 'Observe the marks and shapes of natural textures when making a print with safe water-based color.',
        activityAr: 'بإشراف المعلم، اطبع ورقة نباتية ساقطة ونظيفة بلون قابل للغسل على ورق مخصص للنشاط.',
        activityEn: 'With teacher supervision, print a clean fallen leaf with washable color on activity paper.',
      },
      {
        titleAr: 'الطباعة بأشكال هندسية',
        titleEn: 'Printing with Geometric Shapes',
        pageStart: 90,
        pageEnd: 101,
        focusAr: 'استخدم أشكالًا هندسية كبيرة مجهزة مسبقًا، وجرّب ترتيبها لتكوين أثر مطبوع متوازن.',
        focusEn: 'Use large, pre-prepared geometric shapes and arrange them to create a balanced printed pattern.',
        activityAr: 'رتب أشكالًا إسفنجية مجهزة مسبقًا، واطبعها بلون قابل للغسل مع ترك فراغات منتظمة.',
        activityEn: 'Arrange pre-prepared foam shapes and print them with washable color, leaving regular spaces.',
      },
      {
        titleAr: 'طباعة زخارف هندسية',
        titleEn: 'Printing Geometric Ornaments',
        pageStart: 102,
        pageEnd: 115,
        focusAr: 'ادمج التكرار واللون في شريط مطبوع، ولاحظ أثر ثبات الوحدة والمسافة بين الطبعات.',
        focusEn: 'Combine repetition and color in a printed border, observing the effect of consistent motifs and spacing.',
        activityAr: 'خطط شريطًا زخرفيًا أصليًا بوحدة هندسية واحدة، ثم اطبعه بالتكرار على ورق النشاط.',
        activityEn: 'Plan an original ornamental border with one geometric motif, then print it repeatedly on activity paper.',
      },
    ],
    questionAr: 'ما الذي يساعد على انتظام الزخرفة المطبوعة؟',
    questionEn: 'What helps keep a printed ornament regular?',
    optionsAr: ['تكرار الوحدة مع ضبط اتجاهها والمسافة بينها', 'تغيير موضع الوحدة عشوائيًا في كل مرة', 'استخدام خامات غير آمنة'],
    optionsEn: ['Repeating the motif while controlling its direction and spacing', 'Moving the motif randomly each time', 'Using unsafe materials'],
  },
];

export const SAUDI_G2_VISUAL_ARTS_UNIT_COUNT = units.length;
export const SAUDI_G2_VISUAL_ARTS_TOPIC_COUNT = units.reduce(
  (count, unit) => count + unit.topics.length,
  0
);
export const SAUDI_G2_VISUAL_ARTS_TABLE_OF_CONTENTS = units.map((unit) => ({
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

export const SAUDI_G2_VISUAL_ARTS_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const unitTitleAr = `الجزء الأول — الوحدة ${unitNumbersAr[index]}: ${unit.titleAr}`;
  const unitTitleEn = `Part One — Unit ${unit.number}: ${unit.titleEn}`;
  const lectureId = `saudi-g2-visual-arts-1448-part-1-unit-${unit.number}`;

  return {
    id: lectureId,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `التربية الفنية — الصف الثاني — الجزء الأول — ص ${unit.topics[0].pageStart}`,
    subtitleEn: `Art Education — Grade 2 — Part One — p. ${unit.topics[0].pageStart}`,
    descriptionAr: `${sourceNoteAr}\n\nالرسوم التوضيحية في هذه المحاضرة مخططات أصلية من إعداد المنصة، وليست صورًا من الكتاب.`,
    descriptionEn: `${sourceNoteEn}\n\nThe illustrations in this lesson are original platform diagrams, not textbook images.`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب التربية الفنية',
    ministryEn: 'Ministry of Education — Art Education textbook',
    gradeLevelNameAr: 'الصف الثاني الابتدائي — التربية الفنية',
    gradeLevelNameEn: 'Grade 2 — Art Education',
    termAr: 'الجزء الأول من المقرر — طبعة الغلاف 1448هـ/2026م',
    termEn: 'Part One of the curriculum — 1448 AH/2026 cover edition',
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `${unitTitleAr} — ${unit.topics.length} موضوعات`,
    lessonNumberEn: `${unitTitleEn} — ${unit.topics.length} topics`,
    warmupHookAr: `ما الأشكال أو الأنماط التي تلاحظها في «${unit.titleAr}»؟`,
    warmupHookEn: `What shapes or patterns do you notice in ${unit.titleEn.toLowerCase()}?`,
    learningOutcomesAr: [
      `يتعرف محاور ${unit.titleAr} في نطاق الصفحات ${unit.topics[0].pageStart}–${unit.reviewPage - 1}.`,
      'يجرب نشاطًا فنيًا أصليًا ويصف اختيارًا بصريًا واحدًا.',
      'يستخدم خامات آمنة وينفذ التطبيق العملي بإشراف معلم المادة.',
    ],
    learningOutcomesEn: [
      `Identify the ${unit.titleEn.toLowerCase()} focus across pages ${unit.topics[0].pageStart}–${unit.reviewPage - 1}.`,
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
            id: `saudi-g2-visual-arts-map-${unit.number}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${unit.titleAr}`,
            titleEn: `Original learning illustration: ${unit.titleEn}`,
            captionAr: 'مخطط تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created learning diagram, not an image from the textbook.',
            diagramType: 'visual_arts' as const,
            visualSteps: unit.topics.map((item) => ({
              labelAr: item.titleAr,
              labelEn: item.titleEn,
            })),
          },
        } : {}),
      })),
      {
        titleAr: 'تقويم الوحدة',
        titleEn: 'Unit Review',
        contentAr: `راجع محاور الوحدة، ثم أجب عن تقويمها في الكتاب.\n\nمرجع الفهرس: ص ${unit.reviewPage}.\n\n${sourceNoteAr}`,
        contentEn: `Review the unit topics, then complete its textbook review.\n\nContents reference: p. ${unit.reviewPage}.\n\n${sourceNoteEn}`,
      },
    ],
    assessment: {
      id: `saudi-g2-visual-arts-assessment-${unit.number}`,
      lectureId,
      titleAr: `تقويم الوحدة: ${unit.titleAr}`,
      titleEn: `Unit check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g2-visual-arts-question-${unit.number}`,
        textAr: unit.questionAr,
        textEn: unit.questionEn,
        optionsAr: [...unit.optionsAr],
        optionsEn: [...unit.optionsEn],
        correctIndex: 0,
        conceptTestedAr: unit.titleAr,
        conceptTestedEn: unit.titleEn,
        explanationAr: 'تراجع الإجابة فكرة المجال الفني، ويُستكمل التطبيق العملي مع معلم المادة.',
        explanationEn: 'The answer reviews the art field; complete practical work with the subject teacher.',
        difficulty: 'easy',
      }],
    },
  };
});
