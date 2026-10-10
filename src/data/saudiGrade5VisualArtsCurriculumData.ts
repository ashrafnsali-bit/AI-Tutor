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
  part: 1 | 2;
  number: number;
  titleAr: string;
  titleEn: string;
  reviewPage: number;
  topics: VisualArtsTopic[];
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-tart.pdf';

const sourceNoteAr =
  'المصدر: كتاب التربية الفنية للصف الخامس الابتدائي، وزارة التعليم والمركز الوطني للمناهج. تذكر طبعة الغلاف 1448هـ/2026م، بينما تذكر بيانات النشر الداخلية (PDF ص 2) 1446هـ؛ وقد أُظهر اختلاف السنتين. طوبقت عناوين الوحدات والموضوعات وأرقام صفحاتها مع فهرس الجزء الأول (PDF ص 10) وفهرس الجزء الثاني (PDF ص 115–116). فُحص الغلاف وبيانات النشر والفهارس فقط، ولم تراجع صفحات الدروس الداخلية. الشروح والأنشطة والرسوم والتقويمات من إعداد المنصة وليست منقولة من الكتاب.';

const sourceNoteEn =
  'Source: the Ministry of Education and National Center for Curriculum Grade 5 Art Education textbook. The cover states 1448 AH/2026, while the internal publication data (PDF p. 2) states 1446 AH; this difference is disclosed. Unit and topic titles and page references were checked against the Part One contents (PDF p. 10) and Part Two contents (PDF pp. 115–116). Only the cover, publication data, and contents were checked; lesson pages were not reviewed. Explanations, activities, illustrations, and assessments are original platform material, not copied from the textbook.';

const units: VisualArtsUnit[] = [
  {
    part: 1,
    number: 1,
    titleAr: 'مجال الرسم',
    titleEn: 'Drawing',
    reviewPage: 40,
    topics: [
      {
        titleAr: 'الخامات المختلفة والمنظور والنسب والتناسب',
        titleEn: 'Materials, Perspective, Proportion, and Scale',
        page: 12,
        contentAr: 'تؤثر الخامة وموضع النظر في طريقة تمثيل الأشكال والمسافات. قارن أحجام العناصر ومواقعها في المشهد، واستخدم خطوطًا إرشادية خفيفة لملاحظة التناسب والمنظور قبل إضافة التفاصيل.',
        contentEn: 'Materials and viewpoint affect how forms and distances are represented. Compare the sizes and positions of elements in a scene, and use light guide lines to observe proportion and perspective before adding details.',
        activityAr: 'ارسم ثلاثة أشياء من الصف بأحجام متناسبة، ثم غيّر موضع أحدها لتوضيح أثر المنظور.',
        activityEn: 'Draw three classroom objects in proportion, then move one to show how viewpoint affects perspective.',
      },
      {
        titleAr: 'المآذن والقبب في العمارة الإسلامية',
        titleEn: 'Minarets and Domes in Islamic Architecture',
        page: 19,
        contentAr: 'تعرّف إلى تنوع أشكال المآذن والقبب وعلاقتها بتكوين المبنى. لاحظ التوازن بين الكتل والخطوط، واستلهم هيئة معمارية في رسم مبسط من دون نسخ مبنى بعينه.',
        contentEn: 'Explore the variety of minaret and dome forms and how they relate to a building’s composition. Notice the balance of masses and lines, then use an architectural form as inspiration for a simplified drawing without copying a particular building.',
        activityAr: 'صمّم واجهة خيالية تجمع شكلًا رأسيًا وقبة، مع توازن واضح بين الجانبين.',
        activityEn: 'Design an imaginary façade with a vertical form and a dome, keeping both sides visually balanced.',
      },
      {
        titleAr: 'الحرف الشعبية',
        titleEn: 'Folk Crafts',
        page: 33,
        contentAr: 'تعكس الحرف الشعبية خبرات المجتمع وموارده المحلية، وتتنوع في خاماتها وأنماطها. استكشف شكلًا أو زخرفة من بيئتك، وعبّر عنها بالرسم مع احترام اختلاف الممارسات بين المناطق.',
        contentEn: 'Folk crafts reflect community knowledge and local resources, and vary in materials and patterns. Explore a form or motif from your surroundings and represent it in a drawing while respecting regional differences.',
        activityAr: 'ارسم أداة أو منتجًا حرفيًا تعرفه، وأضف تسميتين توضحان خامته واستعماله.',
        activityEn: 'Draw a craft object you know and add two labels describing its material and use.',
      },
    ],
    questionAr: 'ما فائدة مقارنة أحجام العناصر ومواقعها قبل إضافة تفاصيل الرسم؟',
    questionEn: 'Why compare the sizes and positions of objects before adding drawing details?',
    optionsAr: ['لإظهار التناسب والمنظور في التكوين', 'لإخفاء جميع الأشكال', 'لجعل كل العناصر بالحجم نفسه'],
    optionsEn: ['To show proportion and perspective in the composition', 'To hide all the forms', 'To make every object the same size'],
  },
  {
    part: 1,
    number: 2,
    titleAr: 'مجال الزخرفة',
    titleEn: 'Ornamentation',
    reviewPage: 55,
    topics: [
      {
        titleAr: 'تجريد وحدة زخرفية نباتية',
        titleEn: 'Abstracting a Botanical Decorative Motif',
        page: 42,
        contentAr: 'يبدأ تجريد الوحدة النباتية بملاحظة اتجاهاتها وأجزائها المميزة، ثم تبسيطها إلى خطوط وأشكال قابلة للتكرار. احتفظ بسمات تذكّر بالأصل مع ابتكار صياغة جديدة.',
        contentEn: 'Abstracting a botanical motif begins by observing its directions and distinctive parts, then simplifying them into repeatable lines and shapes. Retain features that suggest the source while creating a new interpretation.',
        activityAr: 'اختر ورقة نبات مرسومة أو متخيلة، واختزلها إلى ثلاثة أشكال ثم رتّبها كوحدة زخرفية.',
        activityEn: 'Choose a drawn or imagined leaf and simplify it into three shapes, then arrange them as a decorative motif.',
      },
      {
        titleAr: 'التوريق في الزخارف الإسلامية',
        titleEn: 'Foliation in Islamic Ornament',
        page: 49,
        contentAr: 'تُظهر الزخارف النباتية تنوعًا في الأوراق والسيقان والتفرعات. لاحظ اتجاه النمو وتوازن الفراغات، ثم كوّن ترتيبًا متناسقًا مستلهمًا من التوريق من دون نقل زخرفة منشورة.',
        contentEn: 'Plant ornament displays varied leaves, stems, and branching forms. Notice growth direction and the balance of open spaces, then create a harmonious arrangement inspired by foliation without reproducing a published design.',
        activityAr: 'أنشئ شريطًا زخرفيًا من وحدتين نباتيتين مبسطتين، وغيّر اتجاه إحداهما لصنع إيقاع.',
        activityEn: 'Create an ornamental band from two simplified botanical motifs, turning one to establish a rhythm.',
      },
    ],
    questionAr: 'ما الذي يساعد على تحويل شكل نباتي إلى وحدة زخرفية قابلة للتكرار؟',
    questionEn: 'What helps turn a plant form into a repeatable decorative motif?',
    optionsAr: ['تبسيط أجزائه مع الاحتفاظ بسمات مميزة', 'إضافة تفاصيل عشوائية بلا تنظيم', 'إخفاء اتجاهات الشكل'],
    optionsEn: ['Simplifying its parts while retaining distinctive features', 'Adding random, unorganized details', 'Hiding the form’s directions'],
  },
  {
    part: 1,
    number: 3,
    titleAr: 'مجال الطباعة',
    titleEn: 'Printing',
    reviewPage: 78,
    topics: [
      {
        titleAr: 'مطبوعات بالتفريغ',
        titleEn: 'Stencil Prints',
        page: 58,
        contentAr: 'يعتمد التفريغ على توزيع المساحات المفتوحة والمغطاة في قالب أو حاجز طباعي. جرّب تصميمًا واضحًا، وثبّت الورق والقالب، واختبر أثر اللون على ورقة منفصلة قبل العمل النهائي.',
        contentEn: 'Stencil printing relies on the arrangement of open and covered areas in a printing mask. Try a clear design, secure the paper and stencil, and test the color on a separate sheet before the final print.',
        activityAr: 'اصنع قالبًا ورقيًا بسيطًا بقصّ ينجزه المعلم أو باستخدام أشكال جاهزة آمنة، ثم اطبع وحدة على ورقة تجريبية.',
        activityEn: 'Use a simple paper stencil prepared by the teacher or safe ready-made shapes, then print one motif on a test sheet.',
      },
      {
        titleAr: 'طباعة زخرفية بالتفريغ',
        titleEn: 'Decorative Stencil Printing',
        page: 69,
        contentAr: 'تتكون الطباعة الزخرفية من تكرار الوحدة مع ضبط المسافات واتجاه القالب. خطط لتتابع الوحدات أولًا، ثم راجع انتظام اللون والفراغات بعد كل طبعة.',
        contentEn: 'Decorative stencil printing repeats a motif while controlling spacing and stencil direction. Plan the sequence first, then check the color and open spaces after each print.',
        activityAr: 'رتّب ثلاث طبعات لوحدة واحدة لتكوين شريط، وجرّب تغيير المسافة بين كل طبعة وأخرى.',
        activityEn: 'Arrange three prints of one motif to form a band, and experiment with the spacing between them.',
      },
    ],
    questionAr: 'ما الخطوة التي تساعد على تحسين الطباعة قبل تنفيذ العمل النهائي؟',
    questionEn: 'Which step can improve a print before making the final artwork?',
    optionsAr: ['اختبار القالب واللون على ورقة منفصلة', 'تحريك القالب أثناء الطباعة', 'إهمال توزيع المساحات'],
    optionsEn: ['Test the stencil and color on a separate sheet', 'Move the stencil while printing', 'Ignore the arrangement of spaces'],
  },
  {
    part: 1,
    number: 4,
    titleAr: 'مجال الخزف',
    titleEn: 'Ceramics',
    reviewPage: 102,
    topics: [
      {
        titleAr: 'زخارف بارزة على المسطحات الطينية',
        titleEn: 'Raised Decoration on Clay Surfaces',
        page: 80,
        contentAr: 'يمكن بناء سطح زخرفي بارز بإضافة أشكال طينية صغيرة إلى قاعدة مسطحة. وزّع العناصر بتوازن، وجرّب ترتيبها على نموذج لين قبل تثبيتها وفق إرشاد المعلم.',
        contentEn: 'A raised decorative surface can be built by adding small clay forms to a flat base. Balance the elements and test their arrangement on soft clay before attaching them as directed by the teacher.',
        activityAr: 'رتّب وحدات هندسية من صلصال آمن على بطاقة أو عينة تدريبية، مع ترك مسافات متقاربة.',
        activityEn: 'Arrange geometric forms made from safe modeling clay on a card or practice sample, keeping the spacing consistent.',
      },
      {
        titleAr: 'تشكيل المجسم بطريقة الشرائح الطينية',
        titleEn: 'Building a Form with Clay Slabs',
        page: 92,
        contentAr: 'تُستخدم الشرائح الطينية لتكوين جوانب وأسطح متصلة. يساعد رسم مخطط مبسط للأجزاء على تقدير شكل المجسم وثبات قاعدته؛ وتُنفّذ التطبيقات بخامات وأدوات صفية يحددها المعلم.',
        contentEn: 'Clay slabs can form connected sides and surfaces. A simple plan of the parts helps estimate the finished form and stabilize its base; classroom materials and tools should be selected by the teacher.',
        activityAr: 'ارسم مخططًا لمجسم بسيط من ثلاثة أوجه، ثم كوّن نموذجًا ورقيًا تجريبيًا قبل استخدام الطين.',
        activityEn: 'Draw a plan for a simple three-sided form, then make a paper mock-up before working with clay.',
      },
    ],
    questionAr: 'ما فائدة تخطيط أجزاء المجسم قبل تشكيله بالشرائح؟',
    questionEn: 'Why plan the parts of a form before building it with slabs?',
    optionsAr: ['للتأكد من اتصال الأوجه وثبات القاعدة', 'لزيادة سمك كل جزء بلا حاجة', 'لإخفاء شكل المجسم'],
    optionsEn: ['To check that the sides connect and the base is stable', 'To make every part unnecessarily thick', 'To hide the form'],
  },
  {
    part: 2,
    number: 1,
    titleAr: 'مجال الرسم',
    titleEn: 'Drawing',
    reviewPage: 148,
    topics: [
      {
        titleAr: 'الفنون الإسلامية',
        titleEn: 'Islamic Arts',
        page: 118,
        contentAr: 'تتجلى الفنون الإسلامية في مجالات وأساليب متعددة، ومنها تنظيم الخطوط والأشكال والزخارف. قارن أمثلة متنوعة، ولاحظ كيف تخدم العناصر فكرة العمل ومساحته.',
        contentEn: 'Islamic arts include varied fields and approaches, including organized lines, forms, and ornament. Compare different examples and notice how their elements serve the idea and space of each work.',
        activityAr: 'أنشئ لوحة ملاحظة صغيرة ترسم فيها أشكالًا هندسية عامة وتكتب بجانبها صفة بصرية مثل التكرار أو التوازن.',
        activityEn: 'Create a small observation sheet with general geometric forms and label a visual quality such as repetition or balance.',
      },
      {
        titleAr: 'الرسم من الطبيعة، أو الخيال',
        titleEn: 'Drawing from Nature or Imagination',
        page: 127,
        contentAr: 'يمكن أن يبدأ الرسم بملاحظة عنصر طبيعي أو بتخيل مشهد جديد. حدّد نقطة التركيز والعلاقات بين الأشكال، ثم اختر خطوطًا وألوانًا تدعم فكرتك.',
        contentEn: 'A drawing can begin with observing a natural object or imagining a new scene. Identify a focal point and relationships between forms, then choose lines and colors that support your idea.',
        activityAr: 'امزج شكلًا طبيعيًا تلاحظه مع عنصر متخيل في مشهد واحد، وبيّن الفرق بينهما بخط أو لون.',
        activityEn: 'Combine an observed natural form with an imagined element in one scene, distinguishing them with a line or color choice.',
      },
      {
        titleAr: 'رسم الإيقاعات الحركية في الألعاب الرياضية',
        titleEn: 'Drawing Movement Rhythms in Sports',
        page: 139,
        contentAr: 'يوضح تتابع الوضعيات والإشارات الحركية اتجاه الحركة وسرعتها. لاحظ مراحل حركة رياضية بسيطة، ثم اختر خطوطًا واتجاهات تساعد على التعبير عنها من دون الحاجة إلى رسم تفاصيل دقيقة.',
        contentEn: 'A sequence of poses and movement cues can show the direction and pace of action. Observe the stages of a simple sports movement, then choose lines and directions that express it without needing detailed anatomy.',
        activityAr: 'ارسم ثلاث وضعيات متتابعة لحركة رياضية مألوفة، واستخدم خطوطًا خفيفة للإشارة إلى اتجاهها.',
        activityEn: 'Draw three successive poses from a familiar sports movement and use light lines to indicate its direction.',
      },
    ],
    questionAr: 'كيف يمكن إظهار الحركة في رسم رياضي؟',
    questionEn: 'How can movement be suggested in a sports drawing?',
    optionsAr: ['بترتيب وضعيات متتابعة وخطوط اتجاه', 'بتثبيت جميع الأشكال في وضع واحد', 'بإخفاء اتجاه الحركة'],
    optionsEn: ['By arranging successive poses and directional lines', 'By keeping every form in one pose', 'By hiding the direction of movement'],
  },
  {
    part: 2,
    number: 2,
    titleAr: 'مجال الزخرفة',
    titleEn: 'Ornamentation',
    reviewPage: 164,
    topics: [
      {
        titleAr: 'تحوير الوحدة الزخرفية النباتية',
        titleEn: 'Transforming a Botanical Decorative Motif',
        page: 150,
        contentAr: 'يحافظ التحوير على فكرة الوحدة النباتية مع تعديل اتجاهها أو تفاصيلها أو إيقاعها. قارن النسخة الأولى بالتعديل، وحدد ما بقي من ملامح الأصل وما أضافه التغيير.',
        contentEn: 'A transformation retains the idea of a botanical motif while changing its direction, details, or rhythm. Compare the first version with the revision and identify what remains from the source and what the change contributes.',
        activityAr: 'ارسم وحدة نباتية مبسطة مرتين، وغيّر في النسخة الثانية اتجاه ورقة أو حجمها مع الحفاظ على الترابط.',
        activityEn: 'Draw a simplified botanical motif twice, changing a leaf’s direction or size in the second version while keeping the design coherent.',
      },
      {
        titleAr: 'تكوينات جمالية مبتكرة من الوحدات الزخرفية النباتية',
        titleEn: 'Creative Compositions from Botanical Motifs',
        page: 158,
        contentAr: 'يساعد تكرار الوحدات وتحريكها وتغيير أحجامها على إنشاء تكوينات جديدة. جرّب محورًا أو شبكة بسيطة، ووازن بين كثافة الزخرفة والفراغ المحيط بها.',
        contentEn: 'Repeating, rotating, and resizing motifs can create new compositions. Try a simple axis or grid, and balance the density of the ornament with the surrounding open space.',
        activityAr: 'كوّن نمطًا من وحدتين نباتيتين على شبكة، ثم عدّل موضع وحدة واحدة لتغيير الإيقاع.',
        activityEn: 'Build a pattern from two botanical motifs on a grid, then move one motif to change the rhythm.',
      },
    ],
    questionAr: 'ما الذي يميز تحوير الوحدة الزخرفية عن نسخها كما هي؟',
    questionEn: 'What distinguishes transforming a decorative motif from copying it unchanged?',
    optionsAr: ['تطوير بعض خصائصها مع بقاء الفكرة الأساسية', 'تكرارها دون أي تغيير', 'إزالة العلاقة بين عناصرها'],
    optionsEn: ['Developing some of its features while retaining the basic idea', 'Repeating it without any change', 'Removing the relationship between its elements'],
  },
  {
    part: 2,
    number: 3,
    titleAr: 'مجال أشغال المعادن',
    titleEn: 'Metalwork',
    reviewPage: 193,
    topics: [
      {
        titleAr: 'التشكيل بالشرائح المعدنية بطريقة الثني والربط',
        titleEn: 'Shaping Metal Strips by Bending and Joining',
        page: 166,
        contentAr: 'يمكن للشرائح المرنة أن تكوّن خطوطًا وأشكالًا فراغية عند ثنيها وربطها. خطط للشكل ومناطق الاتصال أولًا، وتعامل مع خامات صفية آمنة ذات حواف ملساء يجهزها المعلم.',
        contentEn: 'Flexible strips can form lines and three-dimensional shapes when bent and joined. Plan the form and connection points first, and use teacher-prepared classroom materials with smooth edges.',
        activityAr: 'صمّم نموذجًا ورقيًا لهيكل بسيط، وحدد بالقلم مواضع الثني والربط قبل العمل بخامة تدريب آمنة.',
        activityEn: 'Design a paper mock-up of a simple structure and mark its bend and join points before using safe practice material.',
      },
      {
        titleAr: 'تكوين مجسمات جمالية بالعلب المعدنية',
        titleEn: 'Creating Sculptural Forms from Metal Cans',
        page: 180,
        contentAr: 'تُستكشف المجسمات من خلال ملاحظة الأشكال والأحجام والعلاقات بينها. استخدم في التخطيط صورًا أو نماذج ورقية، ولا تُستعمل علب أو حواف معدنية حادة؛ يحدد المعلم بدائل آمنة للتطبيق.',
        contentEn: 'Sculptural forms can be explored by observing shapes, sizes, and their relationships. Use pictures or paper models for planning; do not handle cans or sharp metal edges, and let the teacher select safe materials for practice.',
        activityAr: 'رتّب أشكالًا ورقية أسطوانية ومسطحة في رسم تخطيطي لمجسم متوازن، ثم سمّ أجزاءه.',
        activityEn: 'Arrange paper cylinders and flat shapes in a sketch for a balanced sculpture, then label its parts.',
      },
    ],
    questionAr: 'ما الإجراء المناسب قبل تكوين مجسم من شرائح أو خامات معدنية؟',
    questionEn: 'What is appropriate before constructing a form from metal strips or materials?',
    optionsAr: ['تخطيط الشكل واستخدام خامة صفية آمنة يحددها المعلم', 'التعامل مع حواف حادة دون إشراف', 'إهمال مواضع الاتصال'],
    optionsEn: ['Plan the form and use safe classroom material selected by the teacher', 'Handle sharp edges without supervision', 'Ignore the connection points'],
  },
  {
    part: 2,
    number: 4,
    titleAr: 'مجال أشغال الخشب',
    titleEn: 'Woodwork',
    reviewPage: 214,
    topics: [
      {
        titleAr: 'الحفر على الخشب - الإعداد',
        titleEn: 'Wood Carving — Preparation',
        page: 196,
        contentAr: 'يبدأ إعداد العمل بتحديد الفكرة والخامة المناسبة ورسم حدود الزخرفة على نموذج. تُنفذ الأنشطة المدرسية بخامات وأدوات يجهزها المعلم، ولا تستخدم أدوات حادة إلا بإشراف مباشر ووفق تعليمات السلامة.',
        contentEn: 'Preparation begins by choosing an idea and suitable material and sketching the design on a model. Classroom activities should use teacher-prepared materials and tools; sharp tools must only be handled under direct supervision and safety instructions.',
        activityAr: 'خطط لوحدة زخرفية على بطاقة سميكة، وحدد اتجاه خطوطها كما لو كانت ستنقل إلى سطح خشبي.',
        activityEn: 'Plan an ornamental motif on thick card and mark the direction of its lines as if transferring it to a wooden surface.',
      },
      {
        titleAr: 'الحفر على الخشب - التنفيذ',
        titleEn: 'Wood Carving — Execution',
        page: 204,
        contentAr: 'يرتبط تنفيذ التصميم بمراعاة اتجاه الخطوط وثبات التكوين ومراجعة النتيجة تدريجيًا. يمكن دراسة الخطوات بالرسم أو بمحاكاة آمنة على خامة لينة، على أن تكون الأدوات الفعلية تحت إشراف المعلم.',
        contentEn: 'Carrying out a design involves considering line direction, composition stability, and reviewing the result gradually. Steps can be studied through drawing or safe simulation on soft material; actual tools remain under teacher supervision.',
        activityAr: 'حاكِ ترتيب خطوط زخرفية على صلصال لين أو ورق، ثم اشرح كيف يغيّر اتجاهها مظهر النمط.',
        activityEn: 'Simulate the arrangement of ornamental lines on soft clay or paper, then explain how their direction changes the pattern.',
      },
    ],
    questionAr: 'ما أفضل طريقة آمنة للتدرب على تصميم الحفر قبل استخدام الأدوات؟',
    questionEn: 'What is a safe way to practise a carving design before using tools?',
    optionsAr: ['محاكاة التخطيط على ورق أو خامة لينة', 'استخدام أداة حادة دون معلم', 'البدء قبل تحديد التصميم'],
    optionsEn: ['Simulate the design on paper or soft material', 'Use a sharp tool without the teacher', 'Start before choosing a design'],
  },
  {
    part: 2,
    number: 5,
    titleAr: 'مجال النسيج',
    titleEn: 'Textiles',
    reviewPage: 239,
    topics: [
      {
        titleAr: 'إعداد النول وتسديته',
        titleEn: 'Preparing and Warping the Loom',
        page: 216,
        contentAr: 'يتطلب إعداد النول تنظيم خيوط السدى وتثبيتها بتباعد مناسب قبل تمرير خيوط اللحمة. يساعد الرسم التخطيطي على فهم اتجاه الخيوط وتسلسلها قبل تنفيذ النسيج.',
        contentEn: 'Preparing a loom involves arranging and securing warp threads at suitable intervals before passing the weft threads. A diagram helps explain thread directions and sequence before weaving.',
        activityAr: 'مثّل السدى واللحمة بخطوط متقاطعة على شبكة ورقية، واستخدم لونين لتمييز اتجاه كل منهما.',
        activityEn: 'Represent warp and weft with crossing lines on a paper grid, using two colors to distinguish their directions.',
      },
      {
        titleAr: 'النسيج الشعبي',
        titleEn: 'Traditional Weaving',
        page: 228,
        contentAr: 'تتنوع أنماط النسيج الشعبي بحسب الخامات والألوان والتقاليد المحلية. لاحظ التكرار وتجاور الألوان، وقدّر العمل الحرفي من دون تعميم نمط واحد على جميع المناطق.',
        contentEn: 'Traditional weaving patterns vary with materials, colors, and local traditions. Notice repetition and neighboring colors, and appreciate craft knowledge without treating one pattern as representative of every region.',
        activityAr: 'ابتكر شريطًا منسوجًا على شبكة ورقية مستلهمًا لونين أو ثلاثة من بيئتك، واكتب وصفًا قصيرًا لنمطك.',
        activityEn: 'Create a woven band on a paper grid inspired by two or three colors from your surroundings, then briefly describe your pattern.',
      },
    ],
    questionAr: 'ما وظيفة تنظيم خيوط السدى عند إعداد النول؟',
    questionEn: 'What is the purpose of arranging warp threads when preparing a loom?',
    optionsAr: ['تهيئة أساس منتظم لمرور خيوط اللحمة', 'تغيير ألوان الخيوط فقط', 'إخفاء اتجاه النسيج'],
    optionsEn: ['To create an even foundation for passing the weft', 'Only to change thread colors', 'To hide the direction of the weave'],
  },
];

const unitNumbersAr = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة'];

export const SAUDI_G5_VISUAL_ARTS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G5_VISUAL_ARTS_UNIT_COUNT = units.length;
export const SAUDI_G5_VISUAL_ARTS_TOPIC_COUNT = units.reduce(
  (total, unit) => total + unit.topics.length,
  0
);
export const SAUDI_G5_VISUAL_ARTS_TABLE_OF_CONTENTS = units.flatMap((unit) =>
  unit.topics.map((topic) => ({
    part: unit.part,
    unitNumber: unit.number,
    unitTitleAr: unit.titleAr,
    titleAr: topic.titleAr,
    page: topic.page,
  }))
);

export const SAUDI_G5_VISUAL_ARTS_CURRICULUM: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const partLabelAr = unit.part === 1 ? 'الجزء الأول' : 'الجزء الثاني';
  const partLabelEn = unit.part === 1 ? 'Part One' : 'Part Two';
  const unitTitleAr = `${partLabelAr} — الوحدة ${unitNumbersAr[unit.number - 1]}: ${unit.titleAr}`;
  const unitTitleEn = `${partLabelEn} — Unit ${unit.number}: ${unit.titleEn}`;

  return {
    id: `saudi-g5-visual-arts-1448-part-${unit.part}-unit-${unit.number}`,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `التربية الفنية — الصف الخامس — ${partLabelAr} — ص ${unit.topics[0].page}`,
    subtitleEn: `Art Education — Grade 5 — ${partLabelEn} — p. ${unit.topics[0].page}`,
    descriptionAr: `${sourceNoteAr}\n\nالأنشطة والرسوم المقترحة من إعداد المنصة ومساندة لدراسة المقرر. تُنفذ التطبيقات العملية بخامات صفية آمنة ووفق توجيه معلم المادة.`,
    descriptionEn: `${sourceNoteEn}\n\nSuggested activities and illustrations are original supplementary platform material. Complete practical work with safe classroom materials and the art teacher’s guidance.`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'VISUAL_ARTS',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم — كتاب التربية الفنية',
    ministryEn: 'Ministry of Education — Art Education textbook',
    gradeLevelNameAr: 'الصف الخامس الابتدائي — التربية الفنية',
    gradeLevelNameEn: 'Grade 5 — Art Education',
    termAr: `${partLabelAr} — طبعة الغلاف 1448هـ/2026م`,
    termEn: `${partLabelEn} — 1448 AH/2026 cover edition`,
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `${unitTitleAr} — ${unit.topics.length} موضوعات`,
    lessonNumberEn: `${unitTitleEn} — ${unit.topics.length} topics`,
    warmupHookAr: `ما الاختيار الفني الذي يساعدك على استكشاف «${unit.titleAr}»؟`,
    warmupHookEn: `What artistic choice could help you explore ${unit.titleEn.toLowerCase()}?`,
    learningOutcomesAr: [
      `يتعرف موضوعات ${unit.titleAr} الواردة في الفهرس: ${unit.topics.map((topic) => topic.titleAr).join('؛ ')}.`,
      'يخطط تكوينًا فنيًا ويشرح أثر أحد اختياراته.',
      'ينفذ نشاطًا فنيًا مساندًا بخامات صفية آمنة.',
    ],
    learningOutcomesEn: [
      `Identify the ${unit.titleEn.toLowerCase()} topics listed in the contents: ${unit.topics.map((topic) => topic.titleEn).join('; ')}.`,
      'Plan an artwork and explain the effect of one artistic choice.',
      'Complete a supplementary art activity using safe classroom materials.',
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
            id: `saudi-g5-visual-arts-map-${unit.part}-${unit.number}`,
            figureNumberAr: `شكل توضيحي (${order})`,
            figureNumberEn: `Illustration (${order})`,
            titleAr: `رسم تعليمي أصلي: ${unit.titleAr}`,
            titleEn: `Original learning illustration: ${unit.titleEn}`,
            captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب المدرسي.',
            captionEn: 'An original platform-created illustration, not an image from the textbook.',
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
        contentAr: `راجع موضوعات الوحدة، ثم أجب عن تقويمها في الكتاب.\n\nمرجع الفهرس: ص ${unit.reviewPage}.\n\n${sourceNoteAr}`,
        contentEn: `Review the unit topics, then complete its textbook review.\n\nContents reference: p. ${unit.reviewPage}.\n\n${sourceNoteEn}`,
      },
    ],
    assessment: {
      id: `saudi-g5-visual-arts-assessment-${unit.part}-${unit.number}`,
      lectureId: `saudi-g5-visual-arts-1448-part-${unit.part}-unit-${unit.number}`,
      titleAr: `تقويم الوحدة: ${unit.titleAr}`,
      titleEn: `Unit check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `saudi-g5-visual-arts-question-${unit.part}-${unit.number}`,
        textAr: unit.questionAr,
        textEn: unit.questionEn,
        optionsAr: [...unit.optionsAr],
        optionsEn: [...unit.optionsEn],
        correctIndex: 0,
        conceptTestedAr: unit.titleAr,
        conceptTestedEn: unit.titleEn,
        explanationAr: 'تراجع الإجابة الفكرة الفنية العامة وعناوين الوحدة؛ تُراجع تفاصيل التطبيق العملي مع معلم المادة.',
        explanationEn: 'The answer reviews the general artistic idea and unit topics; practical details should be discussed with the art teacher.',
        difficulty: 'easy',
      }],
    },
  };
});
