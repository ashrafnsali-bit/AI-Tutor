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
  part: 1 | 2;
  number: 1 | 2 | 3 | 4 | 5;
  titleAr: string;
  titleEn: string;
  reviewPage: number;
  projectPage?: number;
  topics: VisualArtsTopic[];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

export const SAUDI_G4_VISUAL_ARTS_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-tart.pdf';

const sourceNoteAr =
  'المصدر: كتاب التربية الفنية للصف الرابع الابتدائي. تذكر طبعة الغلاف 1448هـ/2026م، بينما تذكر بيانات النشر في PDF ص 2 عام 1446هـ؛ وقد أُظهر اختلاف التاريخين. طوبقت عناوين الوحدات والموضوعات وصفحاتها مع فهرس الجزء الأول (PDF ص 8–9) والجزء الثاني (PDF ص 98–99). فُحص الغلاف وبيانات النشر والفهارس فقط، ولم تراجع صفحات الموضوعات الداخلية. الشروح والأنشطة والرسوم والتقويمات من إعداد المنصة وليست منقولة من الكتاب. تنفذ الأنشطة بخامات آمنة وتحت إشراف معلم المادة، ولا تغني عن تعليمات السلامة في الكتاب.';
const sourceNoteEn =
  'Source: the Grade 4 Art Education textbook. The cover states 1448 AH/2026, while the publication data on PDF p. 2 states 1446 AH; this difference is disclosed. Unit and topic titles and page ranges were checked against the Part One contents (PDF pp. 8–9) and Part Two contents (PDF pp. 98–99). Only the cover, publication data, and contents were reviewed; the internal topic pages were not. Explanations, activities, illustrations, and assessments are original platform material, not copied from the book. Activities use safe materials under the art teacher’s supervision and do not replace the textbook’s safety instructions.';

const units: VisualArtsUnit[] = [
  {
    part: 1,
    number: 1,
    titleAr: 'مجال الرسم',
    titleEn: 'Drawing',
    reviewPage: 36,
    topics: [
      {
        titleAr: 'مبادئ التكوين الفني',
        titleEn: 'Principles of Artistic Composition',
        pageStart: 15,
        pageEnd: 22,
        focusAr: 'نظّم الخطوط والأشكال والفراغات لتوجيه النظر داخل العمل، وجرّب التوازن والسيادة والتقسيم المساحي.',
        focusEn: 'Arrange lines, shapes, and spaces to guide the viewer’s eye; explore balance, emphasis, and division of space.',
        activityAr: 'رتّب قصاصات ورقية بأحجام مختلفة داخل إطار، وغيّر مواضعها حتى يظهر عنصر رئيس بوضوح.',
        activityEn: 'Arrange paper shapes of different sizes inside a frame and adjust their positions to emphasize one focal element.',
      },
      {
        titleAr: 'الضوء والظل والثمار',
        titleEn: 'Light, Shadow, and Fruit',
        pageStart: 23,
        pageEnd: 29,
        focusAr: 'لاحظ مصدر الضوء والسطوح الفاتحة والقاتمة والظل عند رسم ثمار بسيطة، واستخدم التدرج لإظهار الحجم.',
        focusEn: 'Observe the light source, light and dark surfaces, and cast shadows when drawing simple fruit; use gradual shading to suggest volume.',
        activityAr: 'رتّب ثمرة أو مجسمًا ورقيًا تحت إضاءة الصف، وارسمه بخطوط خفيفة مع تحديد جهة الضوء والظل.',
        activityEn: 'Place a fruit or paper form under classroom lighting and sketch it lightly, marking the light-facing side and shadow.',
      },
      {
        titleAr: 'رسم أوراق الشجر',
        titleEn: 'Drawing Leaves',
        pageStart: 30,
        pageEnd: 35,
        focusAr: 'تأمل شكل الورقة وحافتها واتجاه عروقها، ثم مثّل هذه السمات بخطوط وأشكال مبسطة.',
        focusEn: 'Observe a leaf’s outline, edge, and vein directions, then represent these features with simplified lines and shapes.',
        activityAr: 'ارسم ورقتين مختلفتين من الملاحظة أو الذاكرة، واستخدم خطًا خفيفًا لإظهار العرق الرئيس.',
        activityEn: 'Draw two different leaves from observation or memory, using a light line to show the main vein.',
      },
    ],
    questionAr: 'أي اختيار يساعد على إبراز عنصر رئيس في التكوين؟',
    questionEn: 'Which choice helps emphasize a focal element in a composition?',
    optionsAr: ['تنظيم العناصر والفراغ حوله بتوازن', 'توزيع كل العناصر بالحجم نفسه', 'ملء جميع الفراغات بتفاصيل متساوية'],
    optionsEn: ['Balance the elements and the space around it', 'Make every element the same size', 'Fill every space with equal detail'],
  },
  {
    part: 1,
    number: 2,
    titleAr: 'مجال الزخرفة',
    titleEn: 'Ornamentation',
    reviewPage: 51,
    topics: [
      {
        titleAr: 'الزخرفة الهندسية',
        titleEn: 'Geometric Ornament',
        pageStart: 39,
        pageEnd: 44,
        focusAr: 'كوّن زخرفة من أشكال هندسية وخطوط متكررة، مع ملاحظة النظام والإيقاع والتوازن بين الوحدات.',
        focusEn: 'Build an ornament from geometric forms and repeated lines, observing order, rhythm, and balance between motifs.',
        activityAr: 'صمّم وحدة من أشكال هندسية بسيطة وكرّرها على شبكة ورقية مع تغيير لون واحد.',
        activityEn: 'Design a motif from simple geometric shapes and repeat it on a paper grid, changing one color.',
      },
      {
        titleAr: 'الأقطار في الزخرفة الهندسية',
        titleEn: 'Diagonals in Geometric Ornament',
        pageStart: 45,
        pageEnd: 50,
        focusAr: 'استخدم أقطار الأشكال لتنظيم تقسيمات الزخرفة وتحديد نقاط التقاء الوحدات.',
        focusEn: 'Use shape diagonals to organize ornamental divisions and locate where motifs meet.',
        activityAr: 'ارسم شكلاً هندسيًا على ورق شبكي، ثم أضف أقطاره لتكوين تقسيمات تصلح لوحدة زخرفية.',
        activityEn: 'Draw a geometric shape on grid paper, then add its diagonals to create divisions for an ornamental motif.',
      },
    ],
    questionAr: 'ما فائدة تنظيم الوحدات الهندسية وتكرارها في الزخرفة؟',
    questionEn: 'Why organize and repeat geometric motifs in an ornament?',
    optionsAr: ['لإظهار النظام والإيقاع البصري', 'لإخفاء حدود التصميم', 'لجعل الوحدات غير مترابطة'],
    optionsEn: ['To create order and visual rhythm', 'To hide the design boundaries', 'To make the motifs unrelated'],
  },
  {
    part: 1,
    number: 3,
    titleAr: 'مجال الطباعة',
    titleEn: 'Printing',
    reviewPage: 69,
    topics: [
      {
        titleAr: 'الطباعة بقوالب مختلفة الخامات',
        titleEn: 'Printing with Blocks of Different Materials',
        pageStart: 55,
        pageEnd: 61,
        focusAr: 'استكشف أثر خامة القالب وملمسه في البصمة المطبوعة، وجرّب ترتيب البصمات في تكوين.',
        focusEn: 'Explore how a block’s material and texture affect its print, then arrange prints into a composition.',
        activityAr: 'استخدم خامات صفية آمنة يجهزها المعلم لصنع بصمات ورقية، وقارن أثر الملمس بين القوالب.',
        activityEn: 'Use safe, teacher-prepared classroom materials to make paper prints and compare the textures of different blocks.',
      },
      {
        titleAr: 'الطباعة بقوالب الشكل والأرضية',
        titleEn: 'Printing with Positive and Negative Shapes',
        pageStart: 62,
        pageEnd: 68,
        focusAr: 'ميّز بين مساحة الشكل المطبوعة والمساحة المحيطة بها، ووازن بين الموجب والسالب في التصميم.',
        focusEn: 'Distinguish the printed shape from the surrounding ground and balance positive and negative space.',
        activityAr: 'رتّب أشكالًا ورقية جاهزة على خلفية، ولاحظ كيف تتغير الصورة عند تبديل الشكل بالأرضية.',
        activityEn: 'Arrange pre-cut paper shapes on a background and notice how the image changes when shape and ground are exchanged.',
      },
    ],
    questionAr: 'ما الذي يؤثر مباشرة في ملمس البصمة عند الطباعة بالقالب؟',
    questionEn: 'What directly affects the texture of a block print?',
    optionsAr: ['خامة القالب وسطحه', 'عنوان العمل فقط', 'حجم الورقة دون القالب'],
    optionsEn: ['The block material and its surface', 'Only the artwork title', 'Paper size without the block'],
  },
  {
    part: 1,
    number: 4,
    titleAr: 'مجال الخزف',
    titleEn: 'Ceramics',
    reviewPage: 90,
    projectPage: 91,
    topics: [
      {
        titleAr: 'تشكيل أواني بطريقة الحبال',
        titleEn: 'Making Vessels with Coils',
        pageStart: 72,
        pageEnd: 80,
        focusAr: 'تعرّف إلى بناء شكل إناء بإضافة حبال طينية متتابعة مع تثبيت القاعدة والوصلات بإرشاد المعلم.',
        focusEn: 'Explore building a vessel by adding clay coils in sequence, securing the base and joins with teacher guidance.',
        activityAr: 'خطط على الورق لقاعدة وجدار إناء، ثم مثّل تتابع الحبال بخطوط قبل تجربة خامة تشكيل آمنة بإشراف المعلم.',
        activityEn: 'Plan a vessel base and wall on paper, sketching the coil sequence before trying a safe modeling material under teacher supervision.',
      },
      {
        titleAr: 'تشكيلات مبتكرة بطريقة الحبال',
        titleEn: 'Creative Forms Made with Coils',
        pageStart: 81,
        pageEnd: 89,
        focusAr: 'طوّر شكلًا خزفيًا من الحبال بتغيير ارتفاعه أو اتساعه أو ترتيبها، مع المحافظة على ثبات البناء.',
        focusEn: 'Develop a coiled form by varying its height, width, or coil arrangement while keeping the structure stable.',
        activityAr: 'ابتكر ثلاثة مخططات ورقية لأشكال مختلفة من الحبال، وحدد أيها أكثر اتزانًا قبل التنفيذ.',
        activityEn: 'Sketch three different coil forms on paper and identify the most stable plan before making anything.',
      },
    ],
    questionAr: 'ما الذي يساعد على ثبات الإناء المشكّل بالحبال؟',
    questionEn: 'What helps a coiled vessel remain stable?',
    optionsAr: ['تثبيت القاعدة والوصلات تدريجيًا', 'ترك الحبال منفصلة', 'زيادة الارتفاع دون تخطيط'],
    optionsEn: ['Gradually securing the base and joins', 'Leaving the coils disconnected', 'Increasing the height without planning'],
  },
  {
    part: 2,
    number: 1,
    titleAr: 'مجال الرسم',
    titleEn: 'Drawing',
    reviewPage: 112,
    topics: [
      {
        titleAr: 'التصوير من الطبيعة الصامتة',
        titleEn: 'Still-Life Drawing',
        pageStart: 103,
        pageEnd: 108,
        focusAr: 'رتّب أشياء ثابتة لملاحظتها، ووازن أحجامها ومواقعها، واستخدم التظليل لإظهار الشكل والعمق.',
        focusEn: 'Arrange still objects for observation, balance their sizes and positions, and use shading to suggest form and depth.',
        activityAr: 'ارسم ترتيبًا بسيطًا من شكلين أو ثلاثة، وبيّن أيها أقرب باستخدام الحجم والتظليل.',
        activityEn: 'Draw a simple arrangement of two or three objects and use size and shading to show which is closer.',
      },
      {
        titleAr: 'تصميم الجرافيك',
        titleEn: 'Graphic Design',
        pageStart: 109,
        pageEnd: 111,
        focusAr: 'اجمع بين النص والصورة واللون في تصميم واضح، وراعِ ترتيب المعلومات ووضوح الرسالة.',
        focusEn: 'Combine text, image, and color in a clear design, arranging information so the message is easy to understand.',
        activityAr: 'صمّم ملصقًا ورقيًا لإعلان مدرسي، مستخدمًا عنوانًا بارزًا وصورة مناسبة ومساحة مرتبة.',
        activityEn: 'Design a paper poster for a school announcement with a clear heading, a relevant image, and an orderly layout.',
      },
    ],
    questionAr: 'ما الذي يجعل تصميم الملصق سهل الفهم؟',
    questionEn: 'What makes a poster design easy to understand?',
    optionsAr: ['وضوح الرسالة وترتيب النص والصورة', 'استخدام أكبر عدد من الألوان', 'تكديس جميع العناصر في الوسط'],
    optionsEn: ['A clear message and organized text and image', 'Using as many colors as possible', 'Crowding every element in the center'],
  },
  {
    part: 2,
    number: 2,
    titleAr: 'مجال الزخرفة',
    titleEn: 'Ornamentation',
    reviewPage: 123,
    topics: [
      {
        titleAr: 'التماثل الكلي في زخارفنا الإسلامية',
        titleEn: 'Complete Symmetry in Islamic Ornament',
        pageStart: 115,
        pageEnd: 119,
        focusAr: 'لاحظ تكرار العناصر وتناظرها حول محور أو مركز في الزخارف الإسلامية، ووازن بين الوحدة والفراغ.',
        focusEn: 'Observe repeated elements and symmetry around an axis or center in Islamic ornament, balancing motifs and open space.',
        activityAr: 'اطو ورقة إلى نصفين، وارسم وحدة هندسية بسيطة على أحد الجانبين ثم كررها بتناظر إرشادي.',
        activityEn: 'Fold a sheet in half, draw a simple geometric motif on one side, then repeat it symmetrically as a guide.',
      },
      {
        titleAr: 'التماثل الكلي المتعاكس في زخارفنا',
        titleEn: 'Opposing Complete Symmetry in Ornament',
        pageStart: 120,
        pageEnd: 122,
        focusAr: 'قارن اتجاه الوحدات المتناظرة والمتعاكسة، وادرس أثر تعاكسها في اتزان النمط.',
        focusEn: 'Compare the directions of symmetrical and opposing motifs and consider how their opposition affects pattern balance.',
        activityAr: 'رتّب وحدتين هندسيتين متقابلتين على شبكة، ثم غيّر اتجاه إحداهما مع الحفاظ على التوازن.',
        activityEn: 'Place two geometric motifs opposite each other on a grid, then turn one while preserving balance.',
      },
    ],
    questionAr: 'ما الذي ينبغي ملاحظته عند تكوين زخرفة متماثلة؟',
    questionEn: 'What should be observed when making a symmetrical ornament?',
    optionsAr: ['العلاقة بين اتجاه الوحدات ومحور التماثل', 'تغيير كل وحدة بلا نظام', 'إهمال المسافات بين الأشكال'],
    optionsEn: ['How motif directions relate to the axis of symmetry', 'Changing every motif without a system', 'Ignoring the spaces between forms'],
  },
  {
    part: 2,
    number: 3,
    titleAr: 'مجال أشغال المعادن',
    titleEn: 'Metalwork',
    reviewPage: 138,
    topics: [
      {
        titleAr: 'لوحة فنية بالضغط على النحاس',
        titleEn: 'A Copper Artwork Made by Pressing',
        pageStart: 127,
        pageEnd: 132,
        focusAr: 'تعرّف إلى أثر الضغط في تشكيل خطوط بارزة على سطح النحاس، مع استخدام بدائل تدريبية آمنة تحت إشراف المعلم.',
        focusEn: 'Explore how pressure forms raised lines on copper, using safe practice alternatives under teacher supervision.',
        activityAr: 'ارسم تصميمًا بسيطًا على ورق مقوّى أو رقائق تدريب آمنة، واضغط بقلم غير حاد على الخطوط لإظهارها.',
        activityEn: 'Draw a simple design on card or safe practice foil and trace the lines with a blunt tool to make them visible.',
      },
      {
        titleAr: 'لوحة زخرفية باستخدام ألوان الزجاج على النحاس',
        titleEn: 'A Decorative Copper Panel with Glass Colors',
        pageStart: 133,
        pageEnd: 137,
        focusAr: 'لاحظ كيف تنظّم الحدود والمساحات اللونية في لوحة زخرفية، واستكشف أثر الألوان الشفافة في المظهر.',
        focusEn: 'Notice how outlines and colored areas are organized in a decorative panel and explore the appearance of translucent colors.',
        activityAr: 'لوّن نموذجًا ورقيًا مقسمًا بخطوط واضحة بأقلام تلوين، بوصفه محاكاة آمنة لتوزيع اللون.',
        activityEn: 'Color a clearly outlined paper design with pencils as a safe model for planning color areas.',
      },
    ],
    questionAr: 'ما الذي يحدد ترتيب الألوان في اللوحة الزخرفية؟',
    questionEn: 'What helps organize colors in a decorative panel?',
    optionsAr: ['توزيعها داخل مساحات التصميم وحدوده', 'وضعها عشوائيًا خارج الشكل', 'إخفاء الخطوط كلها'],
    optionsEn: ['Placing them within the design areas and outlines', 'Scattering them outside the design', 'Hiding all the outlines'],
  },
  {
    part: 2,
    number: 4,
    titleAr: 'مجال أشغال الخشب',
    titleEn: 'Woodwork',
    reviewPage: 152,
    topics: [
      {
        titleAr: 'تكوين جمالي مسطح بالخشب',
        titleEn: 'A Flat Wood Composition',
        pageStart: 141,
        pageEnd: 147,
        focusAr: 'رتّب قطعًا مسطحة لتكوين خطوط ومساحات متوازنة، ولاحظ أثر اللون والملمس في العمل.',
        focusEn: 'Arrange flat pieces to create balanced lines and areas, observing how color and texture affect the artwork.',
        activityAr: 'خطط على الورق لتكوين مسطح من أشكال ورقية تمثل قطع الخشب، مع إظهار التوازن بين المساحات.',
        activityEn: 'Plan a flat composition on paper using paper shapes to represent wood pieces, balancing the areas.',
      },
      {
        titleAr: 'تكوين جمالي مجسم بالخشب',
        titleEn: 'A Three-Dimensional Wood Composition',
        pageStart: 148,
        pageEnd: 151,
        focusAr: 'تعرّف إلى بناء تكوين مجسم من أجزاء مترابطة، مع ملاحظة الثبات والتوازن بين القاعدة والارتفاع.',
        focusEn: 'Explore building a three-dimensional composition from connected parts, considering stability and balance between its base and height.',
        activityAr: 'صمّم نموذجًا ورقيًا صغيرًا من أشكال مطوية، واختبر اتزانه دون استخدام أدوات قطع أو تثبيت حادة.',
        activityEn: 'Design a small folded-paper model and test its balance without sharp cutting or fastening tools.',
      },
    ],
    questionAr: 'ما الذي ينبغي مراعاته في التكوين الخشبي المجسم؟',
    questionEn: 'What should be considered in a three-dimensional wood composition?',
    optionsAr: ['ترابط الأجزاء وثبات القاعدة', 'إهمال مواضع الاتصال', 'جعل جميع الأجزاء معلقة بلا دعم'],
    optionsEn: ['Connected parts and a stable base', 'Ignoring where parts join', 'Leaving every part unsupported'],
  },
  {
    part: 2,
    number: 5,
    titleAr: 'مجال النسيج',
    titleEn: 'Textiles',
    reviewPage: 172,
    projectPage: 173,
    topics: [
      {
        titleAr: 'النسيج البسيط',
        titleEn: 'Plain Weave',
        pageStart: 155,
        pageEnd: 164,
        focusAr: 'تعرّف إلى تعامد خيوط السدى واللحمة في النسيج البسيط، وميّز ترتيب مرور الخيط فوق الآخر وتحته.',
        focusEn: 'Explore how warp and weft cross in a plain weave and notice the over-under sequence.',
        activityAr: 'استخدم شرائط ورقية عريضة على قاعدة مثقبة جاهزة لتجربة تداخل فوق وتحت.',
        activityEn: 'Use wide paper strips with a pre-prepared base to practise an over-under weave.',
      },
      {
        titleAr: 'تشكيلات متنوعة بالنسيج',
        titleEn: 'Varied Textile Compositions',
        pageStart: 165,
        pageEnd: 171,
        focusAr: 'غيّر ألوان الشرائط وترتيبها لإنتاج تشكيلات نسيجية، ولاحظ أثر التكرار والتباين في النمط.',
        focusEn: 'Vary strip colors and arrangement to create textile patterns, observing the effects of repetition and contrast.',
        activityAr: 'أنشئ نموذجًا ورقيًا من شرائط ملونة، وبدّل ترتيب لون واحد لمقارنة النمطين.',
        activityEn: 'Make a paper sample with colored strips, then change one color’s sequence to compare the patterns.',
      },
    ],
    questionAr: 'كيف تتداخل خيوط النسيج البسيط؟',
    questionEn: 'How do threads interlace in a plain weave?',
    optionsAr: ['فوق خيط وتحت الخيط الذي يليه بالتبادل', 'باتجاه واحد دون تقاطع', 'في عقد منفصلة فقط'],
    optionsEn: ['Alternately over one thread and under the next', 'In one direction without crossing', 'Only in separate knots'],
  },
];

const unitNumbersAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'] as const;

export const SAUDI_G4_VISUAL_ARTS_UNIT_COUNT = units.length;
export const SAUDI_G4_VISUAL_ARTS_TOPIC_COUNT = units.reduce(
  (count, unit) => count + unit.topics.length,
  0
);
export const SAUDI_G4_VISUAL_ARTS_TABLE_OF_CONTENTS = units.map((unit) => ({
  part: unit.part,
  unitNumber: unit.number,
  titleAr: unit.titleAr,
  page: unit.topics[0].pageStart,
  reviewPage: unit.reviewPage,
  topics: unit.topics.map(({ titleAr, pageStart, pageEnd }) => [titleAr, pageStart, pageEnd]),
  projectPage: unit.projectPage ?? null,
}));

export const SAUDI_G4_VISUAL_ARTS_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const partLabelAr = unit.part === 1 ? 'الجزء الأول' : 'الجزء الثاني';
  const partLabelEn = unit.part === 1 ? 'Part One' : 'Part Two';
  const unitTitleAr = `${partLabelAr} — الوحدة ${unitNumbersAr[unit.number - 1]}: ${unit.titleAr}`;
  const unitTitleEn = `${partLabelEn} — Unit ${unit.number}: ${unit.titleEn}`;
  const projectPageAr = unit.projectPage ? `\nالمشروع الفصلي (ص ${unit.projectPage})` : '';
  const projectPageEn = unit.projectPage ? `\nSemester project (p. ${unit.projectPage})` : '';

  return {
    id: `saudi-g4-visual-arts-1448-part-${unit.part}-unit-${unit.number}`,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `التربية الفنية — الصف الرابع — ${partLabelAr} — ص ${unit.topics[0].pageStart}`,
    subtitleEn: `Art Education — Grade 4 — ${partLabelEn} — p. ${unit.topics[0].pageStart}`,
    descriptionAr: `${sourceNoteAr}\n\nالأنشطة والرسوم المقترحة أصلية ومساندة لدراسة المقرر. تُنفذ التطبيقات العملية بخامات آمنة ووفق توجيه معلم المادة.`,
    descriptionEn: `${sourceNoteEn}\n\nSuggested activities and illustrations are original supplementary platform material. Complete practical work with safe materials and the art teacher’s guidance.`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب التربية الفنية',
    ministryEn: 'Ministry of Education — Art Education textbook',
    gradeLevelNameAr: 'الصف الرابع الابتدائي — التربية الفنية',
    gradeLevelNameEn: 'Grade 4 — Art Education',
    termAr: `${partLabelAr} — طبعة الغلاف 1448هـ/2026م`,
    termEn: `${partLabelEn} — 1448 AH/2026 cover edition`,
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `${unitTitleAr} — ${unit.topics.length} موضوعات`,
    lessonNumberEn: `${unitTitleEn} — ${unit.topics.length} topics`,
    warmupHookAr: `ما الفكرة الفنية التي تود استكشافها في «${unit.titleAr}»؟`,
    warmupHookEn: `What artistic idea would you like to explore in ${unit.titleEn.toLowerCase()}?`,
    learningOutcomesAr: [
      `يتعرف موضوعات ${unit.titleAr} الواردة في الفهرس: ${unit.topics.map((topic) => topic.titleAr).join('؛ ')}.`,
      'يخطط عملًا فنيًا ويشرح أثر أحد اختياراته.',
      'ينفذ نشاطًا فنيًا مساندًا بخامات آمنة وتوجيه المعلم.',
    ],
    learningOutcomesEn: [
      `Identify the ${unit.titleEn.toLowerCase()} topics listed in the contents: ${unit.topics.map((topic) => topic.titleEn).join('; ')}.`,
      'Plan an artwork and explain the effect of one artistic choice.',
      'Complete a supplementary art activity with safe materials and teacher guidance.',
    ],
    keyConceptsAr: [
      ...unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.pageStart}–${topic.pageEnd})`),
      `تقويم الوحدة (ص ${unit.reviewPage})`,
      ...(unit.projectPage ? [`المشروع الفصلي (ص ${unit.projectPage})`] : []),
    ],
    keyConceptsEn: [
      ...unit.topics.map((topic) => `${topic.titleEn} (pp. ${topic.pageStart}–${topic.pageEnd})`),
      `Unit review (p. ${unit.reviewPage})`,
      ...(unit.projectPage ? [`Semester project (p. ${unit.projectPage})`] : []),
    ],
    summaryAr: `${unit.topics.map((topic) => `${topic.titleAr} (ص ${topic.pageStart}–${topic.pageEnd})`).join('\n')}\nتقويم الوحدة (ص ${unit.reviewPage})${projectPageAr}\n\n${sourceNoteAr}`,
    summaryEn: `${unit.topics.map((topic) => `${topic.titleEn} (pp. ${topic.pageStart}–${topic.pageEnd})`).join('\n')}\nUnit review (p. ${unit.reviewPage})${projectPageEn}\n\n${sourceNoteEn}`,
    sections: [
      ...unit.topics.map((topic, topicIndex) => ({
        titleAr: topic.titleAr,
        titleEn: topic.titleEn,
        contentAr: `${topic.focusAr}\n\nنشاط مقترح: ${topic.activityAr}\n\nمرجع الفهرس: ص ${topic.pageStart}–${topic.pageEnd}.\n\n${sourceNoteAr}`,
        contentEn: `${topic.focusEn}\n\nSuggested activity: ${topic.activityEn}\n\nContents reference: pp. ${topic.pageStart}–${topic.pageEnd}.\n\n${sourceNoteEn}`,
        ...(topicIndex === 0 ? {
          diagram: {
            id: `saudi-g4-visual-arts-map-${unit.part}-${unit.number}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${unit.titleAr}`,
            titleEn: `Original learning illustration: ${unit.titleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created illustration, not an image from the textbook.',
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
        contentAr: `راجع موضوعات الوحدة، ثم أجب عن تقويمها في الكتاب.\n\nمرجع الفهرس: ص ${unit.reviewPage}.\n\n${sourceNoteAr}`,
        contentEn: `Review the unit topics, then complete its textbook review.\n\nContents reference: p. ${unit.reviewPage}.\n\n${sourceNoteEn}`,
      },
      ...(unit.projectPage ? [{
        titleAr: 'المشروع الفصلي',
        titleEn: 'Semester Project',
        contentAr: `خطط لمشروع فني يجمع خبراتك من مجالات المقرر، ثم نفذه بخامات آمنة وبإشراف معلم المادة.\n\nمرجع الفهرس: ص ${unit.projectPage}.\n\n${sourceNoteAr}`,
        contentEn: `Plan an artwork that brings together skills from the course, then make it with safe materials under the art teacher’s supervision.\n\nContents reference: p. ${unit.projectPage}.\n\n${sourceNoteEn}`,
      }] : []),
    ],
    assessment: {
      id: `saudi-g4-visual-arts-assessment-${unit.part}-${unit.number}`,
      lectureId: `saudi-g4-visual-arts-1448-part-${unit.part}-unit-${unit.number}`,
      titleAr: `تقويم الوحدة: ${unit.titleAr}`,
      titleEn: `Unit check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g4-visual-arts-question-${unit.part}-${unit.number}`,
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
