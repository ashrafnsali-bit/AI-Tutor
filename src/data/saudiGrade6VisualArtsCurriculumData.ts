import type { Lecture } from '../types';

interface VisualArtsTopic {
  titleAr: string;
  titleEn: string;
  page: number;
  contentAr: string;
  contentEn: string;
  activityAr: string;
  activityEn: string;
}

interface VisualArtsUnit {
  titleAr: string;
  titleEn: string;
  topics: VisualArtsTopic[];
  reviewPage: number;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

const sourceNoteAr =
  'مرجع أسماء الوحدات والموضوعات وأرقام الصفحات: غلاف وفهرس كتاب التربية الفنية للصف السادس الابتدائي، طبعة 1448هـ/2026م، صفحات PDF 1 و8. جرى التحقق من الغلاف والفهرس فقط، ولم تراجع صفحات الدروس الداخلية. الشروح والأنشطة والرسوم التوضيحية هنا من إعداد المنصة وليست منقولة من الكتاب؛ يُرجع للكتاب ومعلم المادة لتفاصيل التنفيذ.';
const sourceNoteEn =
  'Unit and topic titles and page references are based on the cover and contents of the Grade 6 Art Education textbook, 1448 AH/2026 edition, PDF pages 1 and 8. Only the cover and contents were checked; lesson pages were not reviewed. The explanations, activities, and illustrations here are original platform material, not copied from the textbook; consult the textbook and teacher for implementation details.';

const units: VisualArtsUnit[] = [
  {
    titleAr: 'جمال الرسم',
    titleEn: 'The Beauty of Drawing',
    reviewPage: 32,
    topics: [
      {
        titleAr: 'أسس التصميم في الرسم',
        titleEn: 'Design Principles in Drawing',
        page: 10,
        contentAr: 'يساعد تنظيم الخطوط والأشكال والمساحات على توجيه نظر المشاهد داخل العمل الفني. جرّب موازنة العناصر، وكرّر شكلًا صغيرًا لإظهار الإيقاع، واترك مساحة هادئة حول العنصر الأبرز.',
        contentEn: 'Arranging lines, shapes, and spaces helps guide the viewer through an artwork. Try balancing the elements, repeating a small shape to create rhythm, and leaving quiet space around the focal element.',
        activityAr: 'ارسم مشهدًا بسيطًا بثلاثة أشكال هندسية، ثم غيّر أحجامها ومواضعها لتجعل عنصرًا واحدًا أكثر بروزًا.',
        activityEn: 'Draw a simple scene with three geometric shapes, then vary their size and position to make one element stand out.',
      },
      {
        titleAr: 'الرسم بالألوان الزيتية',
        titleEn: 'Drawing with Oil Colors',
        page: 15,
        contentAr: 'تتيح الألوان الزيتية بناء مساحات لونية وطبقات وملامس مختلفة. خطّط لتوزيع اللون قبل البدء، واستخدم أدوات الصف المخصصة، واتبع تعليمات المعلم للتهوية والتنظيف والسلامة.',
        contentEn: 'Oil colors can build layered areas of color and varied textures. Plan the color layout first, use classroom-approved materials, and follow the teacher’s instructions for ventilation, cleanup, and safety.',
        activityAr: 'أنشئ بطاقة لونية صغيرة تجمع لونًا أساسيًا مع لونين قريبين منه، ودوّن أثر اختلاف سماكة اللون على الملمس.',
        activityEn: 'Make a small color study using one main color and two neighboring colors, and note how changing the paint thickness affects texture.',
      },
      {
        titleAr: 'التجريدية في الرسم',
        titleEn: 'Abstraction in Drawing',
        page: 26,
        contentAr: 'في الرسم التجريدي يمكن تبسيط هيئة الشيء إلى خطوط ومساحات وألوان، مع التركيز على العلاقات بينها بدل نقل كل تفاصيل المشهد. قدّم تفسيرك للعمل مستندًا إلى اختياراتك البصرية.',
        contentEn: 'In abstract drawing, a subject can be simplified into lines, areas, and colors, emphasizing their relationships rather than reproducing every detail. Explain your interpretation by referring to your visual choices.',
        activityAr: 'اختر عنصرًا مألوفًا، ثم مثّله بأشكال وألوان مختزلة من دون رسم تفاصيله الواقعية.',
        activityEn: 'Choose a familiar object and represent it with simplified shapes and colors instead of realistic details.',
      },
    ],
    questionAr: 'أي ممارسة تساعد على إبراز عنصر رئيس في التكوين؟',
    questionEn: 'Which practice can help emphasize a focal element in a composition?',
    optionsAr: ['موازنة العناصر وترك مساحة هادئة حوله', 'توزيع جميع العناصر بالحجم واللون نفسيهما', 'ملء كل المساحات بتفاصيل متساوية'],
    optionsEn: ['Balance the elements and leave quiet space around it', 'Give every element the same size and color', 'Fill every space with equal detail'],
  },
  {
    titleAr: 'جمال الزخرفة',
    titleEn: 'The Beauty of Ornamentation',
    reviewPage: 57,
    topics: [
      {
        titleAr: 'التشكيل الزخرفي من نقطة',
        titleEn: 'Decorative Composition from a Point',
        page: 34,
        contentAr: 'تتحول النقطة إلى عنصر زخرفي عندما تُنظّم وتُكرّر بتباعد أو أحجام مقصودة. جرّب ترتيب النقاط في صفوف أو حول مركز، ولاحظ كيف يصنع اختلاف الكثافة إيقاعًا بصريًا.',
        contentEn: 'A point becomes a decorative element when it is deliberately arranged and repeated with chosen spacing or sizes. Try rows or a radial arrangement, and notice how changing density creates visual rhythm.',
        activityAr: 'صمّم وحدة زخرفية بالنقاط فقط، وكرّرها مع تغيير المسافات لتكوين نمط.',
        activityEn: 'Design an ornament using only dots, then repeat it with varied spacing to form a pattern.',
      },
      {
        titleAr: 'التشكيل الزخرفي على أسطح متنوعة',
        titleEn: 'Decorative Composition on Varied Surfaces',
        page: 46,
        contentAr: 'يتأثر شكل الزخرفة بمساحة السطح واتجاهه وملمسه. راعِ حدود السطح عند توزيع الوحدة الزخرفية، واختبر تكرارها على خامة تدريب مناسبة بإشراف المعلم.',
        contentEn: 'An ornament’s appearance is affected by a surface’s area, direction, and texture. Respect the surface boundaries when placing a motif, and test repetition on a suitable practice material under teacher guidance.',
        activityAr: 'ارسم وحدة زخرفية واحدة، ثم جرّب توزيعها داخل شكلين مختلفين مع الحفاظ على وضوح النمط.',
        activityEn: 'Draw one decorative motif, then arrange it inside two different shapes while keeping the pattern clear.',
      },
    ],
    questionAr: 'ما الذي ينبغي مراعاته عند نقل الزخرفة إلى سطح مختلف؟',
    questionEn: 'What should be considered when adapting an ornament to a different surface?',
    optionsAr: ['حدود السطح واتجاهه وملمسه', 'اسم الأداة فقط', 'تجاهل مساحة السطح'],
    optionsEn: ['The surface boundaries, direction, and texture', 'Only the tool’s name', 'Ignore the surface area'],
  },
  {
    titleAr: 'جمال الطباعة',
    titleEn: 'The Beauty of Printing',
    reviewPage: 86,
    topics: [
      {
        titleAr: 'الحفر والطباعة بالقوالب (الإعداد والتنفيذ)',
        titleEn: 'Relief and Block Printing (Preparation and Execution)',
        page: 60,
        contentAr: 'تقوم الطباعة بالقالب على إعداد سطح يحمل أجزاءً بارزة تنقل اللون إلى الورق. رتّب التصميم أولًا، وجرّب أثره على ورقة اختبار؛ تستخدم الأنشطة المدرسية أدوات آمنة مناسبة للعمر وتحت إشراف المعلم.',
        contentEn: 'Block printing uses a prepared surface with raised areas to transfer color to paper. Plan the design first and test an impression; classroom activities should use age-appropriate safe tools under teacher supervision.',
        activityAr: 'أنشئ قالبًا تدريبيًا آمنًا من إسفنج أو فوم منخفض الكثافة، واطبع به وحدة بسيطة بعد اختبار كمية اللون.',
        activityEn: 'Make a safe practice stamp from sponge or soft foam, then print a simple motif after testing the amount of color.',
      },
    ],
    questionAr: 'ما الخطوة المناسبة قبل الطباعة النهائية بالقالب؟',
    questionEn: 'What is a useful step before making a final block print?',
    optionsAr: ['اختبار أثر القالب على ورقة تجريبية', 'إهمال ترتيب التصميم', 'استخدام أداة حادة بلا إشراف'],
    optionsEn: ['Test the block on a practice sheet', 'Skip planning the design', 'Use a sharp tool without supervision'],
  },
  {
    titleAr: 'جمال الخزف',
    titleEn: 'The Beauty of Ceramics',
    reviewPage: 118,
    topics: [
      {
        titleAr: 'تشكيل آنية خزفية منتظمة الشكل',
        titleEn: 'Shaping a Regularly Formed Ceramic Vessel',
        page: 88,
        contentAr: 'يساعد التخطيط للمقطع الجانبي والقاعدة على صنع آنية متوازنة. قارن جانبي الشكل حول محور تخيلي، وحافظ على سماكة مناسبة، مستخدمًا خامة التشكيل التي يحددها المعلم.',
        contentEn: 'Planning the side profile and base helps create a balanced vessel. Compare both sides around an imagined axis, keep a suitable thickness, and use the modeling material selected by the teacher.',
        activityAr: 'صمّم مقطعًا جانبيًا لآنية، ثم شكّل نموذجًا تدريبيًا صغيرًا وراجع توازن القاعدة.',
        activityEn: 'Design a vessel’s side profile, make a small practice model, and check that its base is balanced.',
      },
      {
        titleAr: 'تكوينات زخرفية غائرة على أسطح الطينة المتجلدة',
        titleEn: 'Recessed Decorative Compositions on Leather-Hard Clay Surfaces',
        page: 107,
        contentAr: 'يمكن إظهار الزخرفة الغائرة بضغط خطوط أو وحدات في سطح الطينة بعد أن يصبح متماسكًا وفق المرحلة التي يحددها المعلم. وزّع العلامات بتأنٍ، واستخدم أدوات تشكيل آمنة غير حادة.',
        contentEn: 'Recessed decoration can be made by pressing lines or motifs into clay once it has firmed to the stage specified by the teacher. Space marks carefully and use safe, non-sharp modeling tools.',
        activityAr: 'جرّب ضغط وحدتين زخرفيتين متكررتين على عينة تدريبية، مع الحفاظ على مسافة منتظمة بينهما.',
        activityEn: 'Press two repeated decorative motifs into a practice sample, keeping a consistent distance between them.',
      },
      {
        titleAr: 'أهداف المشروع الفني',
        titleEn: 'Objectives of the Art Project',
        page: 119,
        contentAr: 'يجمع المشروع الفني بين الفكرة والتخطيط والتنفيذ والمراجعة. اختر هدفًا واضحًا، ودوّن المواد المناسبة، ثم اعرض عملك موضحًا قرارًا فنيًا اتخذته أثناء الإنجاز.',
        contentEn: 'An art project brings together an idea, planning, making, and reflection. Choose a clear goal, list suitable materials, then present your work and explain one artistic decision you made.',
        activityAr: 'اكتب بطاقة مشروع من ثلاثة أسطر: الفكرة، والخامة التي اختارها المعلم، وخطوة ستراجعها بعد التجربة.',
        activityEn: 'Write a three-line project card: your idea, the material selected by the teacher, and one step you will review after testing.',
      },
    ],
    questionAr: 'كيف تساعد مراجعة العمل الفني على تطوير المشروع؟',
    questionEn: 'How can reviewing an artwork help improve a project?',
    optionsAr: ['تكشف ما يحتاج إلى تعديل في الفكرة أو التنفيذ', 'تمنع التخطيط قبل التنفيذ', 'تجعل اختيار الخامة غير مهم'],
    optionsEn: ['It reveals what may need adjustment in the idea or execution', 'It prevents planning before making', 'It makes material choice irrelevant'],
  },
];

const unitNumbersAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'];

export const SAUDI_G6_VISUAL_ARTS_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const unitTitleAr = `الوحدة ${unitNumbersAr[index]}: ${unit.titleAr}`;
  const unitTitleEn = `Unit ${order}: ${unit.titleEn}`;
  const firstTopic = unit.topics[0];

  return {
    id: `saudi-g6-visual-arts-1448-${order}`,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `التربية الفنية — الصف السادس — ص ${firstTopic.page}`,
    subtitleEn: `Art Education — Grade 6 — p. ${firstTopic.page}`,
    descriptionAr: `${sourceNoteAr}\n\nالأنشطة المقترحة مساندة؛ تُنفّذ عمليًا وفق أدوات الصف وتعليمات معلم المادة.`,
    descriptionEn: `${sourceNoteEn}\n\nSuggested activities are supplementary; complete practical work using classroom materials and the teacher’s guidance.`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G6',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب التربية الفنية',
    ministryEn: 'Ministry of Education — Art Education textbook',
    gradeLevelNameAr: 'الصف السادس الابتدائي — التربية الفنية',
    gradeLevelNameEn: 'Grade 6 — Art Education',
    termAr: 'طبعة 1448هـ/2026م',
    termEn: '1448 AH/2026 edition',
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `${unitTitleAr} (ص ${firstTopic.page})`,
    lessonNumberEn: `${unitTitleEn} (p. ${firstTopic.page})`,
    warmupHookAr: 'انظر إلى رسم أو زخرفة حولك: كيف يوجّه ترتيب الخطوط والأشكال والألوان نظرك؟',
    warmupHookEn: 'Look at a drawing or ornament nearby: how does the arrangement of lines, shapes, and colors guide your attention?',
    learningOutcomesAr: [
      `يتعرف موضوعات الوحدة الواردة في الفهرس: ${unit.topics.map((topic) => topic.titleAr).join('؛ ')}.`,
      'يجرّب توظيف عناصر التكوين والخامة بطريقة آمنة ومناسبة.',
      'يشرح اختيارًا فنيًا واحدًا في عمله ويراجع أثره.',
    ],
    learningOutcomesEn: [
      `Identify the unit topics listed in the contents: ${unit.topics.map((topic) => topic.titleEn).join('; ')}.`,
      'Experiment with composition elements and materials safely and appropriately.',
      'Explain one artistic choice and reflect on its effect.',
    ],
    keyConceptsAr: [
      ...unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`),
      `تقويم الوحدة (ص ${unit.reviewPage})`,
    ],
    keyConceptsEn: [
      ...unit.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`),
      `Unit review (p. ${unit.reviewPage})`,
    ],
    summaryAr: `${unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.page})`).join('\n')}\nتقويم الوحدة (ص ${unit.reviewPage})\n\n${sourceNoteAr}`,
    summaryEn: `${unit.topics.map((topic) => `${topic.titleEn} (p. ${topic.page})`).join('\n')}\nUnit review (p. ${unit.reviewPage})\n\n${sourceNoteEn}`,
    sections: [
      ...unit.topics.map((topic, topicIndex) => ({
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${topic.contentAr}\n\nنشاط مقترح: ${topic.activityAr}\n\nمرجع الفهرس: ص ${topic.page}.\n\n${sourceNoteAr}`,
        contentEn: `${topic.contentEn}\n\nSuggested activity: ${topic.activityEn}\n\nContents reference: p. ${topic.page}.\n\n${sourceNoteEn}`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g6-visual-arts-map-${order}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${unit.titleAr}`,
            titleEn: `Original learning illustration: ${unit.titleEn}`,
            captionAr: 'رسم متجهي تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created vector illustration, not an image from the textbook.',
            diagramType: 'visual_arts' as const,
            visualSteps: unit.topics.map((topic) => ({
              labelAr: topic.titleAr,
              labelEn: topic.titleEn,
            })),
          },
        } : {}),
      })),
      {
        titleAr: 'تقويم الوحدة',
        titleEn: 'Unit Review',
        contentAr: `راجع المهارات الفنية التي تدربت عليها في موضوعات الوحدة، ثم أجب عن تقويمها في الكتاب.\n\nمرجع الفهرس: ص ${unit.reviewPage}.\n\n${sourceNoteAr}`,
        contentEn: `Review the art skills practised in this unit, then complete its textbook review.\n\nContents reference: p. ${unit.reviewPage}.\n\n${sourceNoteEn}`,
      },
    ],
    assessment: {
      id: `saudi-g6-visual-arts-assessment-${order}`,
      lectureId: `saudi-g6-visual-arts-1448-${order}`,
      titleAr: `تقويم الوحدة: ${unit.titleAr}`,
      titleEn: `Unit check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g6-visual-arts-question-${order}`,
        textAr: unit.questionAr,
        textEn: unit.questionEn,
        optionsAr: [...unit.optionsAr],
        optionsEn: [...unit.optionsEn],
        correctIndex: 0,
        conceptTestedAr: unit.titleAr,
        conceptTestedEn: unit.titleEn,
        explanationAr: 'تراجع الإجابة المفهوم الفني العام وعنوان الوحدة؛ تُراجع خطوات الكتاب العملية مع معلم المادة.',
        explanationEn: 'The answer reviews the general art concept and unit topic; practical textbook steps should be checked with the teacher.',
        difficulty: 'easy',
      }],
    },
  };
});
