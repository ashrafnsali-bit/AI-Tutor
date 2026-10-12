import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ART_G4_BOOK = {
  title: 'التربية الفنية — الصف الرابع الابتدائي',
  titleEn: 'Art Education — Grade 4 Primary',
  edition: 'جمهورية السودان — وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
  units: [
    { titleAr: 'الرسم', titleEn: 'Drawing', firstPage: 2, lastPage: 10 },
    { titleAr: 'التصميم والزخرفة', titleEn: 'Design and Ornament', firstPage: 11, lastPage: 29 },
    { titleAr: 'التشكيل والتركيب', titleEn: 'Forming and Construction', firstPage: 30, lastPage: 41 }
  ]
} as const;

interface ArtLesson {
  unit: number;
  page: number;
  lastPage?: number;
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
  visualStepsAr: [string, string, string, string];
  visualStepsEn: [string, string, string, string];
}

const lessons: ArtLesson[] = [
  {
    unit: 1, page: 4, titleAr: 'دراسة الأشكال البسيطة', titleEn: 'Studying Simple Shapes',
    focusAr: 'ابدأ برسم أشياء مألوفة بأشكال بسيطة؛ فالدائرة تساعد على رسم ثمرة مستديرة، ويمكن جمع شكلين أو أكثر لتكوين رسم أوضح. جرّب بقلم رصاص على ورقة، ثم أضف الألوان بعد أن ترضى عن الخطوط.',
    focusEn: 'Begin by drawing familiar objects with simple shapes: a circle can help form a round fruit, and two or more shapes can be combined to make a clearer drawing. Sketch in pencil, then add color when you are happy with the lines.',
    questionAr: 'أي شكل بسيط يفيد عند رسم ثمرة مستديرة؟', questionEn: 'Which simple shape can help you draw a round fruit?',
    optionsAr: ['الدائرة', 'المثلث فقط', 'خط مستقيم'], optionsEn: ['A circle', 'Only a triangle', 'A straight line'],
    visualStepsAr: ['اختر شيئًا مألوفًا', 'لاحظ شكله العام', 'ارسمه بأشكال بسيطة', 'أضف التفاصيل والألوان'],
    visualStepsEn: ['Choose a familiar object', 'Notice its overall shape', 'Sketch with simple shapes', 'Add details and color']
  },
  {
    unit: 1, page: 5, titleAr: 'الضوء والظلال', titleEn: 'Light and Shadows',
    focusAr: 'يساعد الضوء على إظهار شكل الجسم وأجزائه المضيئة والمظللة. ضع جسمًا بسيطًا أمام مصدر ضوء آمن، ولاحظ اتجاه الظل، ثم ارسمه بتدرجات قلم الرصاص من الفاتح إلى الداكن. لا تنظر مباشرة إلى الشمس أو إلى مصباح قوي.',
    focusEn: 'Light helps show an object’s shape and its bright and shaded areas. Place a simple object near a safe light source, notice the shadow’s direction, and draw tonal values from light to dark. Never look directly at the sun or a powerful lamp.',
    questionAr: 'كيف نُظهر المناطق المظللة في رسم بقلم الرصاص؟', questionEn: 'How can you show shaded areas in a pencil drawing?',
    optionsAr: ['بتدرجات من الفاتح إلى الداكن', 'بمسح كل الخطوط', 'بتلوين كل المساحات باللون نفسه'], optionsEn: ['With tones from light to dark', 'By erasing every line', 'By making every area the same color'],
    visualStepsAr: ['ضع جسمًا أمام ضوء آمن', 'لاحظ اتجاه الضوء والظل', 'ارسم الشكل بخفة', 'ظلّل بتدرجات مختلفة'],
    visualStepsEn: ['Place an object by safe light', 'Observe light and shadow direction', 'Sketch the shape lightly', 'Shade with varied tones']
  },
  {
    unit: 1, page: 6, titleAr: 'رسم النبات', titleEn: 'Drawing a Plant',
    focusAr: 'تأمل نباتًا أو غصنًا من مكانك ولاحظ اتجاه الساق وتنوع الأوراق. ارسم الخطوط الرئيسة برفق، ثم أضف الأوراق والظلال. اختر نباتًا لا يحتاج إلى اقتلاعه، وارسمه من دون إتلافه.',
    focusEn: 'Observe a plant or branch where it grows and notice the stem’s direction and the variety of its leaves. Lightly sketch the main lines, then add leaves and shadows. Choose a plant that can be drawn without picking or damaging it.',
    questionAr: 'ما الذي يساعدك على رسم أوراق النبات؟', questionEn: 'What helps you draw a plant’s leaves?',
    optionsAr: ['ملاحظة اتجاهاتها وأشكالها', 'اقتلاع النبات أولًا', 'رسم كل الأوراق بالحجم نفسه'], optionsEn: ['Observing their directions and shapes', 'Pulling up the plant first', 'Drawing every leaf the same size'],
    visualStepsAr: ['اختر نباتًا ولاحظه', 'حدد اتجاه الساق', 'ارسم أشكال الأوراق', 'أضف الظل واللون'],
    visualStepsEn: ['Choose and observe a plant', 'Mark the stem direction', 'Draw the leaf shapes', 'Add shade and color']
  },
  {
    unit: 1, page: 7, titleAr: 'التكوين الفني', titleEn: 'Artistic Composition',
    focusAr: 'التكوين هو ترتيب عناصر الصورة في مساحة العمل. ارسم منظرًا من البيئة يضم عناصر قريبة وأخرى بعيدة، ووزّع الأشكال والمساحات والألوان بحيث تبدو الصورة متوازنة وواضحة.',
    focusEn: 'Composition is the arrangement of picture elements within the working space. Draw a scene from your surroundings with near and far objects, and arrange shapes, spaces, and colors so the picture looks balanced and clear.',
    questionAr: 'ماذا يعني التكوين الفني؟', questionEn: 'What does artistic composition mean?',
    optionsAr: ['ترتيب عناصر الصورة', 'تلوين الورقة بلون واحد', 'قص الورقة إلى قطع صغيرة'], optionsEn: ['Arranging the parts of a picture', 'Coloring the page one color', 'Cutting the page into small pieces'],
    visualStepsAr: ['اختر موضوعًا للرسم', 'وزّع العناصر في المساحة', 'وازن القريب والبعيد', 'راجع الصورة وأكملها'],
    visualStepsEn: ['Choose a subject', 'Arrange elements in the space', 'Balance near and far objects', 'Review and finish the picture']
  },
  {
    unit: 2, page: 13, titleAr: 'عناصر التصميم الفني', titleEn: 'Elements of Artistic Design',
    focusAr: 'يتكون التصميم من عناصر مثل الخط والشكل والملمس والاتجاه واللون. اصنع لوحة صغيرة تجمع خطوطًا وأشكالًا مختلفة، ثم استخدم لونين أو أكثر لتوضيح الفروق بينها.',
    focusEn: 'A design uses elements such as line, shape, texture, direction, and color. Make a small picture with varied lines and shapes, then use two or more colors to show their differences.',
    questionAr: 'أيٌّ مما يأتي من عناصر التصميم الفني؟', questionEn: 'Which of these is an element of artistic design?',
    optionsAr: ['الخط', 'المقص', 'دفتر الرسم'], optionsEn: ['Line', 'Scissors', 'A sketchbook'],
    visualStepsAr: ['ارسم خطوطًا متنوعة', 'كوّن أشكالًا', 'أضف ملمسًا واتجاهًا', 'اختر ألوانًا مناسبة'],
    visualStepsEn: ['Draw different lines', 'Create shapes', 'Add texture and direction', 'Choose suitable colors']
  },
  {
    unit: 2, page: 18, titleAr: 'أسس التصميم الفني', titleEn: 'Principles of Artistic Design',
    focusAr: 'يساعد التكرار والإيقاع والتضاد على تنظيم التصميم وجذب النظر. كرر وحدة بسيطة في صف، ثم جرّب تغيير لونها أو حجمها لعمل تباين واضح من غير ازدحام.',
    focusEn: 'Repetition, rhythm, and contrast help organize a design and guide the eye. Repeat a simple motif in a row, then vary its color or size to create clear contrast without crowding the page.',
    questionAr: 'ما الأسلوب الذي ينشئ نمطًا من تكرار وحدة؟', questionEn: 'Which method creates a pattern by repeating a motif?',
    optionsAr: ['التكرار', 'المحو', 'الطي العشوائي'], optionsEn: ['Repetition', 'Erasing', 'Random folding'],
    visualStepsAr: ['اختر وحدة بسيطة', 'كررها بانتظام', 'غيّر لونًا أو حجمًا', 'لاحظ الإيقاع والتباين'],
    visualStepsEn: ['Choose a simple motif', 'Repeat it regularly', 'Vary a color or size', 'Notice rhythm and contrast']
  },
  {
    unit: 2, page: 20, titleAr: 'التراث الفني السوداني', titleEn: 'Sudanese Artistic Heritage',
    focusAr: 'يظهر التراث الفني في الأدوات والزخارف والأشكال المرتبطة بحياة الناس وبيئتهم. لاحظ شكلًا أو أداة مألوفة في محيطك، ثم ارسمها باحترام واذكر الألوان والخطوط التي تميزها.',
    focusEn: 'Artistic heritage can be seen in objects, ornaments, and forms connected with people’s lives and surroundings. Observe a familiar object or pattern around you, draw it respectfully, and identify its distinctive colors and lines.',
    questionAr: 'ما الذي يمكن أن نتأمله عند رسم عنصر من التراث الفني؟', questionEn: 'What can we observe when drawing an element of artistic heritage?',
    optionsAr: ['أشكاله وألوانه وخطوطه', 'وزنه وحده', 'اسمه فقط'], optionsEn: ['Its shapes, colors, and lines', 'Only its weight', 'Only its name'],
    visualStepsAr: ['تأمل عنصرًا من البيئة', 'لاحظ تفاصيله وزخارفه', 'ارسمه باحترام', 'اختر ألوانًا معبرة'],
    visualStepsEn: ['Observe an element nearby', 'Notice its details and patterns', 'Draw it respectfully', 'Choose expressive colors']
  },
  {
    unit: 2, page: 21, titleAr: 'الزخرفة الهندسية', titleEn: 'Geometric Ornament',
    focusAr: 'تتكون الزخرفة الهندسية من وحدات وأشكال يمكن تكرارها لتكوين نمط. ارسم وحدة هندسية بسيطة، وكررها في كراسة الرسم، ثم لوّنها مع ترك مسافات واضحة بين الأشكال.',
    focusEn: 'Geometric ornament uses shapes and motifs that can be repeated to make a pattern. Draw a simple geometric motif, repeat it in your sketchbook, and color it while leaving clear spaces between shapes.',
    questionAr: 'كيف نحول وحدة هندسية إلى زخرفة؟', questionEn: 'How can a geometric motif become an ornament?',
    optionsAr: ['بتكرارها في ترتيب واضح', 'بإخفائها تحت الورقة', 'بتمزيقها إلى أجزاء'], optionsEn: ['By repeating it in an orderly way', 'By hiding it under the page', 'By tearing it into pieces'],
    visualStepsAr: ['اختر شكلًا هندسيًا', 'ارسم وحدة زخرفية', 'كرر الوحدة بانتظام', 'لوّن النمط المكتمل'],
    visualStepsEn: ['Choose a geometric shape', 'Draw an ornamental motif', 'Repeat the motif regularly', 'Color the finished pattern']
  },
  {
    unit: 2, page: 24, titleAr: 'الزخرفة الكتابية', titleEn: 'Written Ornament',
    focusAr: 'يمكن أن يصبح الحرف العربي وحدة زخرفية عندما يتكرر في ترتيب جميل. اختر حرفًا تعرف كتابته، وارسمه بالقلم الرصاص عدة مرات في مسار واضح، ثم أضف لونًا خفيفًا. اكتب بهدوء من دون ضغط على القلم.',
    focusEn: 'An Arabic letter can become an ornamental motif when repeated in an attractive arrangement. Choose a letter you can write, sketch it several times along a clear path, and add light color. Write gently without pressing hard.',
    questionAr: 'ما الذي يجعل الحرف جزءًا من زخرفة كتابية؟', questionEn: 'What can make a letter part of a written ornament?',
    optionsAr: ['تكراره في ترتيب جميل', 'إخفاؤه داخل شكل', 'كتابته بلا مسافات على الصفحة'], optionsEn: ['Repeating it in an attractive arrangement', 'Hiding it inside a shape', 'Writing it with no spacing across the page'],
    visualStepsAr: ['اختر حرفًا واضحًا', 'اكتبه بخفة', 'كرر الحرف بترتيب', 'أضف لونًا مناسبًا'],
    visualStepsEn: ['Choose a clear letter', 'Write it lightly', 'Repeat it in an arrangement', 'Add a suitable color']
  },
  {
    unit: 2, page: 25, lastPage: 26, titleAr: 'الخط العربي', titleEn: 'Arabic Calligraphy',
    focusAr: 'الخط العربي عناية بجمال الحروف وتناسقها ووضوحها. تأمل نماذج خطي النسخ والرقعة، ثم اكتب حرفًا أو كلمة قصيرة بكل منهما بقلم رصاص. قارن شكل الحروف والمسافات، واستخدم أدوات كتابة آمنة وتجنب الأقلام ذات الرؤوس الحادة.',
    focusEn: 'Arabic calligraphy gives attention to the beauty, balance, and clarity of letters. Observe examples of Naskh and Ruq’ah, then write a letter or short word in each using a pencil. Compare letter forms and spacing; use safe writing tools and avoid sharp-pointed pens.',
    questionAr: 'ما النشاط الذي يساعد على ملاحظة الفرق بين النسخ والرقعة؟', questionEn: 'Which activity helps you notice the difference between Naskh and Ruq’ah?',
    optionsAr: ['مقارنة شكل الحرف في الخطين', 'تلوين الورقة كاملة', 'قص الكلمات من الصفحة'], optionsEn: ['Comparing a letter in both scripts', 'Coloring the whole page', 'Cutting words from the page'],
    visualStepsAr: ['تأمل نموذجي النسخ والرقعة', 'اختر حرفًا أو كلمة قصيرة', 'اكتبها بكل خط بأمان', 'قارن الوضوح وشكل الحروف'],
    visualStepsEn: ['Observe Naskh and Ruq’ah examples', 'Choose a letter or short word', 'Write it in both scripts safely', 'Compare clarity and letter forms']
  },
  {
    unit: 3, page: 30, titleAr: 'الطين والخزف', titleEn: 'Clay and Ceramics',
    focusAr: 'يمكن تشكيل الطين إلى أشكال مسطحة أو مجسمة، كما يمكن لفه على هيئة حبال وبناء جدار إناء صغير. استخدم طينًا آمنًا ونظيفًا فوق سطح مغطى، وشكّل نموذجًا بيديك فقط؛ لا تحرقه ولا تستخدم مواد تلميع.',
    focusEn: 'Clay can be formed into flat or three-dimensional shapes, or rolled into coils to build the wall of a small pot. Use clean, safe clay on a covered surface and shape it by hand; do not fire it or use polish.',
    questionAr: 'كيف يمكن بناء جدار إناء صغير من الطين؟', questionEn: 'How can you build the wall of a small clay pot?',
    optionsAr: ['لف حبال الطين ووضعها فوق القاعدة', 'حرق الطين قبل تشكيله', 'استخدام مقص لقص الطين'], optionsEn: ['Roll clay coils and place them on a base', 'Fire the clay before shaping it', 'Cut the clay with scissors'],
    visualStepsAr: ['نظف الطين وافرده', 'كوّن قاعدة صغيرة', 'لف حبالًا من الطين', 'رتب الحبال لبناء الشكل'],
    visualStepsEn: ['Clean and soften the clay', 'Make a small base', 'Roll coils of clay', 'Stack the coils to build a form']
  },
  {
    unit: 3, page: 32, titleAr: 'أعمال المخلفات المنزلية', titleEn: 'Art from Household Recyclables',
    focusAr: 'يمكن إعادة استخدام علبة أو صندوق نظيف لصنع عمل فني نافع. اختر عبوة ورقية أو بلاستيكية آمنة، وزيّنها بقصاصات ورق. لا تستخدم الزجاج أو العلب المعدنية الحادة أو المواد المتسخة، واطلب مساعدة معلمك عند الحاجة إلى القص.',
    focusEn: 'A clean box or container can be reused to make a useful artwork. Choose a safe paper or plastic package and decorate it with paper scraps. Do not use glass, sharp metal cans, or dirty materials, and ask your teacher for help if cutting is needed.',
    questionAr: 'أي مادة مناسبة وآمنة لعمل فني من المخلفات؟', questionEn: 'Which material is suitable and safe for a recycled-art project?',
    optionsAr: ['صندوق ورقي نظيف', 'زجاج مكسور', 'علبة معدنية حادة'], optionsEn: ['A clean paper box', 'Broken glass', 'A sharp metal can'],
    visualStepsAr: ['اختر عبوة نظيفة وآمنة', 'خطط لشكل العمل', 'زيّنها بقصاصات الورق', 'استخدمها أو اعرضها'],
    visualStepsEn: ['Choose a clean, safe package', 'Plan the artwork’s shape', 'Decorate it with paper scraps', 'Use or display your artwork']
  },
  {
    unit: 3, page: 34, titleAr: 'الطباعة اليدوية', titleEn: 'Hand Printing',
    focusAr: 'تُنتج الطباعة اليدوية أشكالًا متكررة على الورق أو القماش. جرّب بصمة ورقة نبات أو إسفنجة باستخدام ألوان مائية قابلة للغسل. اعمل فوق سطح مغطى واغسل يديك بعد النشاط؛ لا تستخدم سكينًا أو أداة حادة لصنع قالب.',
    focusEn: 'Hand printing makes repeated images on paper or fabric. Try printing with a leaf or sponge using washable watercolors. Work on a covered surface and wash your hands afterward; do not use a knife or sharp tool to make a printing block.',
    questionAr: 'ما طريقة آمنة لتجربة الطباعة اليدوية؟', questionEn: 'What is a safe way to try hand printing?',
    optionsAr: ['ضغط ورقة نبات مدهونة بلون قابل للغسل', 'حفر قالب بسكين حاد', 'استخدام طلاء مجهول الرائحة'], optionsEn: ['Pressing a painted leaf with washable color', 'Carving a block with a sharp knife', 'Using paint with an unknown odor'],
    visualStepsAr: ['غطِّ سطح العمل', 'ضع لونًا قابلًا للغسل', 'اضغط الورقة أو الإسفنجة', 'ارفعها ولاحظ البصمة'],
    visualStepsEn: ['Cover the work surface', 'Apply washable color', 'Press a leaf or sponge', 'Lift it and observe the print']
  },
  {
    unit: 3, page: 36, titleAr: 'النسيج والأعمال الورقية', titleEn: 'Weaving and Paper Crafts',
    focusAr: 'يمكن صنع نسيج ورقي بإدخال شرائط ملونة بالتناوب فوق شرائط القاعدة وتحتها. حضّر الشرائط مسبقًا أو اطلب مساعدة المعلم في قصها، ثم نسّق الألوان بهدوء حتى يكتمل النمط.',
    focusEn: 'Make a paper weave by passing colored strips alternately over and under the base strips. Prepare the strips ahead or ask your teacher to help cut them, then arrange the colors carefully until the pattern is complete.',
    questionAr: 'كيف تتشابك شرائط النسيج الورقي؟', questionEn: 'How do the strips interlace in paper weaving?',
    optionsAr: ['فوق شريط وتحت الشريط التالي', 'كلها فوق بعضها', 'تُجمع من دون تشابك'], optionsEn: ['Over one strip and under the next', 'All on top of each other', 'Collected without interlacing'],
    visualStepsAr: ['رتب شرائط القاعدة', 'مرر شريطًا فوقها وتحتها', 'بدّل ترتيب الشريط التالي', 'نسّق الألوان وأكمل النسيج'],
    visualStepsEn: ['Arrange the base strips', 'Pass a strip over and under', 'Reverse the next strip’s order', 'Arrange colors and finish weaving']
  },
  {
    unit: 3, page: 38, titleAr: 'التشكيل بالورق', titleEn: 'Paper Construction',
    focusAr: 'حوّل قصاصات الورق الملون والنظيف إلى لوحة أو شكل مسطح، ورتب القطع قبل لصقها لتجربة أكثر من تكوين. استخدم مقصًا مدرسيًا غير حاد بإشراف المعلم، وكمية قليلة من مادة لاصقة آمنة.',
    focusEn: 'Turn clean, colored paper scraps into a picture or flat shape. Arrange the pieces before gluing to try different compositions. Use blunt school scissors with teacher supervision and only a small amount of safe glue.',
    questionAr: 'ما الخطوة التي تساعد على تحسين العمل قبل لصق قصاصات الورق؟', questionEn: 'What helps improve the artwork before gluing paper pieces?',
    optionsAr: ['ترتيب القصاصات وتجربة تكوينها أولًا', 'لصقها عشوائيًا فورًا', 'قص الورق بأداة حادة'], optionsEn: ['Arrange the scraps and try a layout first', 'Glue them randomly at once', 'Cut the paper with a sharp tool'],
    visualStepsAr: ['اختر قصاصات نظيفة', 'رتبها لتكوين شكل', 'الصقها بإشراف آمن', 'اترك اللوحة تجف'],
    visualStepsEn: ['Choose clean paper scraps', 'Arrange them into a design', 'Glue them safely with supervision', 'Let the picture dry']
  }
];

export const SUDAN_PRIMARY_ART_G4_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage ?? lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ART_G4_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-art-g4-${order}`;
  const unit = SUDAN_PRIMARY_ART_G4_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));

  return {
    id,
    order,
    titleAr: `المجال ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Field ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `التربية الفنية — الصف الرابع الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 4 Art Education — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان — التربية الفنية — الصف الرابع الابتدائي',
    gradeLevelNameEn: 'Republic of Sudan — Grade 4 Primary Art Education',
    ministryAr: 'وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
    ministryEn: 'Ministry of Education — National Center for Curricula and Educational Research — Bakht Al-Ruda',
    termAr: 'التربية الفنية — الصف الرابع',
    termEn: 'Grade 4 Art Education',
    unitTitleAr: `المجال ${lesson.unit}: ${unit.titleAr}`,
    unitTitleEn: `Field ${lesson.unit}: ${unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل شيئًا من حولك يرتبط بموضوع «${lesson.titleAr}». ما الأشكال أو الألوان أو الخامات التي تلاحظها؟`,
    warmupHookEn: `Observe something around you connected to “${lesson.titleEn}.” What shapes, colors, or materials do you notice?`,
    learningOutcomesAr: [
      lesson.focusAr,
      `ينفذ نشاطًا فنيًا آمنًا مرتبطًا بموضوع «${lesson.titleAr}».`,
      `يشرح اختياره الفني ويجيب عن سؤال قصير حول «${lesson.titleAr}».`
    ],
    learningOutcomesEn: [
      lesson.focusEn,
      `Complete a safe art activity connected to “${lesson.titleEn}.”`,
      `Explain an artistic choice and answer a short question about “${lesson.titleEn}.”`
    ],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنفّذ النشاط خطوة خطوة، ثم تأمل عملك واشرح ما تعلمته بكلماتك.`,
      contentEn: `${lesson.focusEn}\n\nComplete the activity step by step, then look at your work and explain what you learned in your own words.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `مخطط: ${lesson.titleAr}`,
        titleEn: `Diagram: ${lesson.titleEn}`,
        captionAr: `أربع خطوات بصرية لنشاط «${lesson.titleAr}».`,
        captionEn: `Four visual steps for the “${lesson.titleEn}” activity.`,
        diagramType: 'primary_lesson_sequence',
        visualSteps
      }
    }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم عملي: ${lesson.titleAr}`,
      titleEn: `Hands-on Check: ${lesson.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `${id}-q1`,
        textAr: lesson.questionAr,
        textEn: lesson.questionEn,
        optionsAr: [...lesson.optionsAr],
        optionsEn: [...lesson.optionsEn],
        correctIndex: 0,
        conceptTestedAr: lesson.titleAr,
        conceptTestedEn: lesson.titleEn,
        explanationAr: `الإجابة الصحيحة: ${lesson.optionsAr[0]}. جرّب الفكرة في نشاطك الفني.`,
        explanationEn: `Correct answer: ${lesson.optionsEn[0]}. Try the idea in your art activity.`,
        difficulty: 'easy'
      }]
    },
    topicAr: `ص ${lesson.page}`,
    topicEn: lesson.lastPage && lesson.lastPage > lesson.page
      ? `pp. ${lesson.page}–${lesson.lastPage}`
      : `p. ${lesson.page}`
  };
});
