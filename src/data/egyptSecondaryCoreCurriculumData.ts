import type { EducationTrack, EducationType, Lecture, Subject } from '../types';

type LessonPlan = {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  activityAr: string;
  activityEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  vocabulary?: [string, string][];
};

type UnitPlan = {
  titleAr: string;
  titleEn: string;
  termAr: string;
  termEn: string;
  lessons: LessonPlan[];
};

const lesson = (
  titleAr: string,
  titleEn: string,
  focusAr: string,
  focusEn: string,
  activityAr: string,
  activityEn: string,
  questionAr: string,
  questionEn: string,
  optionsAr: string[],
  optionsEn: string[],
  vocabulary: [string, string][] = []
): LessonPlan => ({
  titleAr, titleEn, focusAr, focusEn, activityAr, activityEn,
  questionAr, questionEn, optionsAr, optionsEn, vocabulary
});

const egyptMathUnits: UnitPlan[] = [
  {
    titleAr: 'الجبر والعلاقات والدوال',
    titleEn: 'Algebra, Relations, and Functions',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('مقدمة عن الأعداد المركبة', 'Introduction to Complex Numbers',
        'التعرّف إلى مجموعة الأعداد المركبة وكتابة العدد في الصورة الجبرية، والتمييز بين الجزء الحقيقي والتخيلي.',
        'Explore complex numbers in algebraic form and distinguish their real and imaginary parts.',
        'اكتب عددين مركبين بالصورة الجبرية، ثم حدّد الجزء الحقيقي والتخيلي لكل منهما.',
        'Write two complex numbers in algebraic form and identify each real and imaginary part.',
        'في العدد المركب ٣ + ٢ت، ما الجزء التخيلي؟', 'In the complex number 3 + 2i, what is the imaginary part?',
        ['٢ت', '٣', '٥'], ['2i', '3', '5'], [['العدد المركب', 'complex number'], ['الجزء التخيلي', 'imaginary part']]),
      lesson('المعادلة التربيعية', 'Quadratic Equations',
        'صياغة معادلة تربيعية في مجهول واحد والتعرّف إلى معاملاتها وطرائق حلها.',
        'Write a quadratic equation in one variable, identify its coefficients, and select a method for solving it.',
        'حوّل مسألة قصيرة إلى معادلة تربيعية، ثم تحقّق من حلّها بالتعويض.',
        'Translate a short problem into a quadratic equation and check a solution by substitution.',
        'أي صورة تمثل معادلة تربيعية؟', 'Which form represents a quadratic equation?',
        ['س² + ٣س + ٢ = ٠', '٣س + ٢ = ٠', 'س³ + ١ = ٠'],
        ['x² + 3x + 2 = 0', '3x + 2 = 0', 'x³ + 1 = 0']),
      lesson('تحديد نوع جذري المعادلة', 'Nature of the Roots',
        'استخدام المميز لتحديد ما إذا كان للمعادلة التربيعية جذران حقيقيان مختلفان أو متساويان أو لا جذور حقيقية.',
        'Use the discriminant to determine whether a quadratic has two distinct real roots, equal real roots, or no real roots.',
        'احسب المميز لمعادلتين، وصنّف الجذور قبل حل المعادلة.',
        'Find the discriminant of two equations and classify their roots before solving.',
        'إذا كان مميز معادلة تربيعية سالبًا، فما طبيعة جذريها في مجموعة الأعداد الحقيقية؟',
        'If a quadratic has a negative discriminant, what is the nature of its roots in the real numbers?',
        ['لا جذور حقيقية', 'جذران حقيقيان متساويان', 'جذران حقيقيان مختلفان'],
        ['No real roots', 'Two equal real roots', 'Two distinct real roots']),
      lesson('العلاقة بين جذري المعادلة ومعاملاتها', 'Roots and Coefficients',
        'استنتاج مجموع جذري المعادلة التربيعية وحاصل ضربهما من معاملاتها، والتحقق من العلاقة جبريًا.',
        'Relate the sum and product of a quadratic’s roots to its coefficients and verify the relationship algebraically.',
        'استخدم معاملات معادلة معطاة لإيجاد مجموع الجذرين وحاصل ضربهما.',
        'Use the coefficients of a given equation to find the sum and product of its roots.',
        'في س² + ب س + ج = ٠، ما حاصل ضرب الجذرين؟',
        'For x² + bx + c = 0, what is the product of the roots?',
        ['ج', '−ب', 'ب + ج'], ['c', '−b', 'b + c']),
      lesson('متباينات الدرجة الثانية في مجهول واحد', 'Quadratic Inequalities in One Variable',
        'حل متباينات تربيعية بتحديد جذور الحدّية وتحليل إشارة المقدار على الفترات.',
        'Solve quadratic inequalities by finding boundary roots and analyzing signs over intervals.',
        'مثّل جذري متباينة على خط الأعداد، ثم اختبر إشارة المقدار في كل فترة.',
        'Plot the boundary roots on a number line and test the expression on each interval.',
        'ما الخطوة التي تسبق تحديد فترات حل المتباينة التربيعية؟',
        'What should you do before identifying the solution intervals of a quadratic inequality?',
        ['إيجاد جذور المقدار الحدّي', 'جمع طرفي المتباينة فقط', 'حذف إشارة المتباينة'],
        ['Find the roots of the boundary expression', 'Only add the two sides', 'Remove the inequality sign'])
    ]
  },
  {
    titleAr: 'التشابه',
    titleEn: 'Similarity',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('تشابه المثلثات', 'Similar Triangles',
        'التحقق من تشابه مثلثين باستخدام تناسب الأضلاع المناظرة وتساوي الزوايا المناظرة.',
        'Check whether two triangles are similar by comparing corresponding angles and proportional sides.',
        'حدّد زوجين من الأضلاع المناظرة في رسم، ثم اختبر نسبة التشابه.',
        'Identify corresponding side pairs in a diagram and test the similarity ratio.',
        'ما الذي يبقى متساويًا في مثلثين متشابهين؟', 'What remains equal in similar triangles?',
        ['الزوايا المتناظرة', 'الأضلاع المتناظرة دائمًا', 'المحيطان دائمًا'],
        ['Corresponding angles', 'All corresponding side lengths', 'Their perimeters in every case']),
      lesson('تشابه المضلعات', 'Similar Polygons',
        'تطبيق شرط تساوي الزوايا المتناظرة وتناسب أطوال الأضلاع المتناظرة في المضلعات.',
        'Apply equal corresponding angles and proportional corresponding side lengths to polygons.',
        'قارن مضلعين مناظرين، وسجّل الزوايا المتساوية ونسبة أطوال الأضلاع.',
        'Compare two corresponding polygons and record equal angles and side-length ratios.',
        'ما الشرطان الأساسيان لتشابه مضلعين؟', 'What are the two main conditions for polygon similarity?',
        ['تساوي الزوايا المتناظرة وتناسب الأضلاع', 'تساوي المساحتين فقط', 'تساوي ضلع واحد'],
        ['Equal corresponding angles and proportional sides', 'Only equal areas', 'One equal side']),
      lesson('العلاقة بين مساحتي مضلعين متشابهين', 'Areas of Similar Polygons',
        'ربط نسبة مساحتي مضلعين متشابهين بمربع نسبة أطوالهما المتناظرة.',
        'Relate the area ratio of similar polygons to the square of their corresponding side ratio.',
        'إذا عُرفت نسبة ضلعين متناظرين، احسب نسبة المساحتين وفسّر سبب تربيع النسبة.',
        'Given a corresponding side ratio, calculate the area ratio and explain why the ratio is squared.',
        'إذا كانت نسبة التشابه ٢ : ٣، فما نسبة المساحتين؟',
        'If the similarity ratio is 2:3, what is the area ratio?',
        ['٤ : ٩', '٢ : ٣', '٨ : ٢٧'], ['4:9', '2:3', '8:27']),
      lesson('تطبيقات التشابه في الدائرة', 'Similarity Applications in Circles',
        'استخدام التناسب والتشابه في مسائل تتصل بالأوتار والقواطع والعلاقات الهندسية في الدائرة.',
        'Use proportionality and similarity in geometric problems involving chords, secants, and circles.',
        'حل مسألة مرسومة لدائرة بتسمية القطع المناظرة وكتابة التناسب المناسب.',
        'Solve a circle diagram problem by naming corresponding segments and writing a proportion.',
        'ما الذي يساعد على بناء تناسب صحيح في مسألة دائرة؟',
        'What helps set up a valid proportion in a circle problem?',
        ['مطابقة القطع المتناظرة من الرسم والمعطيات', 'اختيار أي قطعتين عشوائيًا', 'استخدام محيط الدائرة دائمًا'],
        ['Match corresponding segments from the diagram and given data', 'Choose any two segments at random', 'Always use the circumference']),
      lesson('نظريات التناسب في المثلث', 'Proportionality Theorems in Triangles',
        'تطبيق نظريات التناسب على أضلاع المثلث عند وجود مستقيم موازٍ لأحد أضلاعه.',
        'Apply triangle proportionality theorems when a line is parallel to one side.',
        'قسّم أضلاع مثلث في رسم إلى أجزاء متناظرة، ثم أوجد طولًا مجهولًا بالتناسب.',
        'Mark corresponding segments in a triangle and find an unknown length using a proportion.',
        'عند قطع ضلعين من مثلث بمستقيم موازٍ للضلع الثالث، ما العلاقة بين الأجزاء؟',
        'When a line parallel to one side cuts the other two sides, how are the segments related?',
        ['تكون متناسبة', 'تكون متساوية دائمًا', 'لا توجد علاقة هندسية'],
        ['They are proportional', 'They are always equal', 'There is no geometric relationship']),
      lesson('المستقيمات المتوازية والأجزاء المتناسبة', 'Parallel Lines and Proportional Segments',
        'استخدام المستقيمات المتوازية لإثبات تناسب القطع المتناظرة وإيجاد أطوال مجهولة.',
        'Use parallel lines to establish proportional corresponding segments and find unknown lengths.',
        'أنشئ تناسبًا من أطوال أجزاء معلومة في شكل، ثم تحقّق من الناتج بوحداته.',
        'Set up a proportion from known segment lengths and check the result with units.',
        'ما الخاصية التي تبرر التناسب الناتج عن قواطع يقطعها متوازٍ؟',
        'What justifies the proportional segments created by a transversal and parallels?',
        ['نظرية التناسب للمستقيمات المتوازية', 'نظرية مجموع الزوايا فقط', 'قاعدة مساحة المستطيل'],
        ['The parallel-line proportionality theorem', 'Only the angle-sum theorem', 'The rectangle area rule']),
      lesson('منصفا الزاوية والأجزاء المتناسبة', 'Angle Bisectors and Proportional Segments',
        'الاستفادة من منصف الزاوية في المثلث لإثبات تناسب الأجزاء المقابلة وإيجاد أطوالها.',
        'Use an angle bisector in a triangle to establish proportional opposite segments and find their lengths.',
        'حدّد الأضلاع التي يقسمها منصف الزاوية، واكتب التناسب قبل التعويض بالأعداد.',
        'Identify the sides divided by an angle bisector and write the proportion before substituting values.',
        'ما الذي يقسمه منصف زاوية المثلث على الضلع المقابل؟',
        'What does a triangle angle bisector divide on the opposite side?',
        ['قطعتين بنسبة الضلعين المجاورين', 'قطعتين متساويتين دائمًا', 'الزاوية إلى ثلاثة أجزاء'],
        ['Two segments in the ratio of the adjacent sides', 'Two always-equal segments', 'The angle into three parts'])
    ]
  },
  {
    titleAr: 'حساب المثلثات',
    titleEn: 'Trigonometry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('الزوايا الموجهة', 'Directed Angles',
        'تمثيل الزاوية الموجهة وقياسها اعتمادًا على اتجاه الدوران والضلع الابتدائي والنهائي.',
        'Represent a directed angle using its initial and terminal sides and direction of rotation.',
        'ارسم زاوية موجبة وأخرى سالبة لهما ضلع نهائي مشترك، وقارن اتجاه الدوران.',
        'Draw a positive and a negative angle with the same terminal side and compare their rotations.',
        'بماذا نميّز الزاوية الموجهة عن قياس الزاوية غير الموجهة؟',
        'What distinguishes a directed angle from an unoriented angle measure?',
        ['اتجاه الدوران والضلع الابتدائي', 'طول القوس فقط', 'عدد أضلاع الشكل'],
        ['Direction of rotation and initial side', 'Arc length only', 'Number of sides in a shape']),
      lesson('القياس الستيني والدائري للزاوية', 'Degree and Radian Measure',
        'التحويل بين القياس الستيني والقياس الدائري للزوايا واختيار الوحدة الملائمة.',
        'Convert between degree and radian measures and select the appropriate unit.',
        'حوّل زاويتين بين الدرجات والراديان باستخدام العلاقة بين ١٨٠° وπ.',
        'Convert two angles between degrees and radians using the 180°–π relationship.',
        'ما قياس ١٨٠° بالراديان؟', 'What is 180° in radians?',
        ['π', 'π/2', '2π'], ['π', 'π/2', '2π']),
      lesson('الدوال المثلثية للزاوية', 'Trigonometric Functions of an Angle',
        'تحديد قيم النسب المثلثية الأساسية للزاوية وربطها بموضع ضلعها النهائي.',
        'Determine basic trigonometric ratios for an angle and relate them to its terminal side.',
        'مثّل زاوية على المستوى الإحداثي وحدّد إشارة الجيب وجيب التمام بحسب الربع.',
        'Plot an angle on the coordinate plane and determine the signs of sine and cosine by quadrant.',
        'في أي ربع يكون جيب الزاوية موجبًا وجيب تمامها سالبًا؟',
        'In which quadrant is sine positive and cosine negative?',
        ['الربع الثاني', 'الربع الأول', 'الربع الرابع'],
        ['Quadrant II', 'Quadrant I', 'Quadrant IV']),
      lesson('التمثيل البياني للدوال المثلثية', 'Graphs of Trigonometric Functions',
        'قراءة ورسم التمثيلات البيانية للدوال المثلثية الأساسية واستنتاج دوريتها وسعتها.',
        'Read and sketch basic trigonometric graphs and identify periodicity and amplitude.',
        'ارسم دورة واحدة تقريبية لدالة جيب التمام، وحدد نقاطها الرئيسة.',
        'Sketch one approximate cosine cycle and mark its key points.',
        'ما الخاصية التي تتكرر بانتظام في منحنى الدالة المثلثية الدورية؟',
        'What feature repeats regularly in a periodic trigonometric graph?',
        ['قيمها وشكلها بعد فترة ثابتة', 'قيمة واحدة لا تتغير', 'محورها يتغير عشوائيًا'],
        ['Its values and shape after a fixed period', 'One unchanging value', 'Its axis changes randomly']),
      lesson('إيجاد قياس زاوية بمعلومية إحدى نسبها', 'Finding an Angle from a Trigonometric Ratio',
        'إيجاد قياس زاوية من نسبة مثلثية معلومة، مع تحديد الربع ومراعاة المجال المطلوب.',
        'Find an angle from a known trigonometric ratio, accounting for its quadrant and required domain.',
        'استخدم قيمة نسبة مثلثية معلومة لإيجاد الزاوية المرجعية ثم حدّد الحلول في المجال.',
        'Use a known trigonometric ratio to find the reference angle, then identify solutions in the interval.',
        'ما الذي يجب معرفته إلى جانب النسبة المثلثية لتحديد الزاوية؟',
        'What else is needed, besides the ratio, to determine an angle?',
        ['الربع أو المجال المطلوب', 'محيط الدائرة', 'طول ضلع غير مرتبط'],
        ['The quadrant or required interval', 'The circle circumference', 'An unrelated side length'])
    ]
  }
];

const egyptHistoryUnits: UnitPlan[] = [
  {
    titleAr: 'مدخل لدراسة حضارة مصر والعالم القديم',
    titleEn: 'Introduction to the Civilizations of Egypt and the Ancient World',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [lesson('مدخل لدراسة حضارة مصر والعالم القديم', 'Studying the Civilizations of Egypt and the Ancient World',
      'تعريف مفهوم الحضارة، والتعرف إلى عوامل قيام الحضارات ومصادر دراستها وأهمية الآثار والوثائق.',
      'Define civilization and identify its foundations, sources, and the value of artefacts and documents.',
      'رتّب مصادر تاريخية من أنواع مختلفة، واذكر سؤالًا يمكن لكل مصدر أن يساعد على الإجابة عنه.',
      'Sort different kinds of historical sources and name one question each can help answer.',
      'أي مصدر يتيح للباحث دراسة أثر مادي من الماضي؟',
      'Which source lets a researcher study a physical trace from the past?',
      ['أثر أو نقش أثري', 'رأي بلا مصدر', 'توقع مستقبلي'],
      ['An artefact or inscription', 'An unsupported opinion', 'A future prediction'],
      [['الحضارة', 'civilization'], ['مصدر تاريخي', 'historical source']])]
  },
  {
    titleAr: 'حضارة مصر القديمة (الفرعونية)',
    titleEn: 'Ancient Egyptian Civilization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('الحياة السياسية والإدارية في مصر القديمة', 'Political and Administrative Life in Ancient Egypt',
        'تتبع مظاهر تنظيم الحكم والإدارة في مصر القديمة وربطها بوحدة البلاد وإدارة شؤونها.',
        'Examine government and administration in ancient Egypt and relate them to unity and governance.',
        'أنشئ مخططًا يبيّن مستويات الإدارة ودور كل مستوى كما يورده الدرس.',
        'Create a chart showing levels of administration and each level’s role.',
        'ما فائدة وجود تنظيم إداري للمناطق المختلفة؟',
        'What is one purpose of organizing administration across regions?',
        ['تنسيق إدارة شؤون البلاد', 'إلغاء التواصل بين المناطق', 'منع تسجيل القرارات'],
        ['Coordinate the governance of the country', 'End communication between regions', 'Prevent record keeping']),
      lesson('الحياة الاقتصادية في مصر القديمة', 'Economic Life in Ancient Egypt',
        'استكشاف أنشطة الإنتاج والتبادل وعلاقة النيل والموارد الطبيعية بمعاش المصريين القدماء.',
        'Explore production and exchange and how the Nile and natural resources shaped livelihoods.',
        'اربط موردًا طبيعيًا بنشاط اقتصادي، ثم اكتب أثره في حياة السكان.',
        'Connect a natural resource to an economic activity and describe its effect on people.',
        'كيف أسهم النيل في دعم الاستقرار الاقتصادي؟',
        'How did the Nile support economic stability?',
        ['وفّر الماء وساند الزراعة والنقل', 'منع نشوء التجمعات', 'أوقف تبادل السلع'],
        ['It supplied water and supported farming and transport', 'It prevented settlements', 'It stopped the exchange of goods']),
      lesson('الحياة الثقافية والفكرية في مصر القديمة', 'Cultural and Intellectual Life in Ancient Egypt',
        'التعرف إلى مظاهر الثقافة والمعرفة والفنون والكتابة، واستخدام الشواهد لفهم المجتمع القديم.',
        'Explore culture, knowledge, art, and writing and use evidence to understand ancient society.',
        'اختر شاهدًا ثقافيًا من الدرس واشرح ما يكشفه عن حياة الناس أو معتقداتهم.',
        'Choose a cultural source from the lesson and explain what it reveals about people or beliefs.',
        'ما فائدة دراسة النقوش والكتابات القديمة؟',
        'Why study ancient inscriptions and writing?',
        ['تقديم شواهد عن المجتمع وأفكاره', 'إثبات أحداث مستقبلية', 'استبدال كل المصادر الأخرى'],
        ['They provide evidence about society and its ideas', 'They prove future events', 'They replace every other source'])
    ]
  },
  {
    titleAr: 'حضارة بلاد العراق القديم وحضارة فينيقيا',
    titleEn: 'Ancient Mesopotamia and Phoenician Civilization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [lesson('حضارة بلاد العراق القديم وحضارة فينيقيا', 'Mesopotamia and Phoenician Civilization',
      'مقارنة مظاهر الحضارة في بلاد العراق القديم وفينيقيا، مع الانتباه إلى الموقع والأنشطة والإنجازات.',
      'Compare civilizations in Mesopotamia and Phoenicia, attending to place, activities, and achievements.',
      'أنشئ جدول مقارنة يربط الموقع الجغرافي بنشاط أو إنجاز تاريخي لكل حضارة.',
      'Create a comparison table connecting each civilization’s location to an activity or achievement.',
      'ما الطريقة الأنسب لمقارنة حضارتين تاريخيتين؟',
      'What is a useful way to compare two civilizations?',
      ['استخدام معايير مشتركة وشواهد', 'مقارنة حدث منفرد بلا سياق', 'الاكتفاء بتخمينات عامة'],
      ['Use shared criteria and evidence', 'Compare one event without context', 'Rely only on broad guesses'],
      [['بلاد الرافدين', 'Mesopotamia'], ['فينيقيا', 'Phoenicia']])]
  },
  {
    titleAr: 'حضارة اليونان والرومان',
    titleEn: 'Greek and Roman Civilizations',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('الحضارة اليونانية (الإغريقية)', 'Greek Civilization',
        'التعرف إلى ملامح الحضارة اليونانية واتصالها بالعالم القديم، وقراءة الشواهد في سياقها التاريخي.',
        'Explore features of Greek civilization and its connections with the ancient world through historical evidence.',
        'صنّف إنجازات أو مظاهر حضارية من الدرس إلى مجالاتها، واربط كلًا منها بسياقه.',
        'Classify achievements from the lesson by field and relate each to its context.',
        'ما الذي يجعل المقارنة التاريخية أكثر دقة؟',
        'What makes a historical comparison more accurate?',
        ['الاستناد إلى أدلة وسياق زمني', 'إهمال اختلاف الأزمنة', 'الخلط بين الرأي والوثيقة'],
        ['Using evidence and chronological context', 'Ignoring differences in time', 'Confusing opinion with a document']),
      lesson('مصر تحت حكم البطالمة', 'Egypt under the Ptolemies',
        'دراسة انتقال الحكم إلى البطالمة وأثر التفاعل بين مصر والعالم اليوناني في تاريخ البلاد.',
        'Study Ptolemaic rule and the interactions between Egypt and the Greek world.',
        'ارسم خطًا زمنيًا مختصرًا يوضح انتقال الحكم وأبرز تغير أو استمرار في المجتمع.',
        'Draw a short timeline showing the change in rule and one important change or continuity.',
        'ما الأداة التي تساعد على ترتيب تعاقب الحكام والأحداث؟',
        'What tool helps order rulers and events over time?',
        ['خط زمني', 'مخطط دائري للكسور', 'قائمة بلا تواريخ'],
        ['A timeline', 'A fraction circle', 'An undated list']),
      lesson('الحضارة الرومانية ومصر تحت حكم الرومان', 'Roman Civilization and Egypt under Roman Rule',
        'فهم دخول مصر تحت الحكم الروماني وتناول العلاقة بين الحكم المحلي والإمبراطورية.',
        'Understand Roman rule in Egypt and the relationship between local governance and empire.',
        'قارن بين شاهدين تاريخيين عن مصر في العصر الروماني وحدد ما يتفقان عليه.',
        'Compare two sources about Roman Egypt and identify what they agree on.',
        'كيف نتحقق من تفسير تاريخي عن فترة الحكم الروماني؟',
        'How can we check a historical interpretation of Roman rule?',
        ['مقارنة المصادر والسياق', 'الاعتماد على مصدر مجهول فقط', 'تجاهل الأدلة المخالفة'],
        ['Compare sources and context', 'Rely only on an unknown source', 'Ignore conflicting evidence'])
    ]
  }
];

const egyptIntegratedScienceUnits: UnitPlan[] = [
  {
    titleAr: 'النظام البيئي المائي',
    titleEn: 'Aquatic Ecosystems',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('الغلاف المائي على كوكب الأرض', 'Earth’s Hydrosphere',
        'تحديد مكونات الغلاف المائي وتوزيع المياه على الأرض وصلتها بالأنظمة البيئية.',
        'Identify the hydrosphere’s components, the distribution of Earth’s water, and links to ecosystems.',
        'أنشئ مخططًا يميز مصادر المياه المالحة والعذبة وموقعها في النظام المائي.',
        'Create a diagram distinguishing saltwater and freshwater sources in the hydrosphere.',
        'أي وصف يعبّر عن الغلاف المائي؟', 'Which description represents the hydrosphere?',
        ['مجموع المياه الموجودة على الأرض', 'الغازات في طبقات الجو فقط', 'الصخور في القشرة الأرضية فقط'],
        ['All water found on Earth', 'Only gases in the atmosphere', 'Only rocks in the crust']),
      lesson('الخواص الكيميائية للماء', 'Chemical Properties of Water',
        'دراسة تركيب الماء وبعض خواصه الكيميائية وعلاقتها بالتفاعلات في البيئات المائية.',
        'Study water’s composition and selected chemical properties and their role in aquatic processes.',
        'فسّر كيف ترتبط خاصية كيميائية للماء بدوره في نقل مواد مذابة.',
        'Explain how one chemical property of water relates to transporting dissolved substances.',
        'أي صيغة تمثل جزيء الماء؟', 'Which formula represents a water molecule?',
        ['H₂O', 'CO₂', 'O₂'], ['H₂O', 'CO₂', 'O₂']),
      lesson('الخواص الفيزيائية للماء', 'Physical Properties of Water',
        'ربط خواص الماء الفيزيائية، مثل الحرارة والكثافة، باستقرار البيئات المائية.',
        'Relate physical properties of water, such as heat and density, to aquatic stability.',
        'قارن استجابة الماء واليابسة للتسخين، واربط الاختلاف بأثره البيئي.',
        'Compare how water and land respond to heating and relate the difference to environmental effects.',
        'ما أهمية السعة الحرارية للماء للكائنات والبيئات المائية؟',
        'Why is water’s heat capacity important to aquatic organisms and ecosystems?',
        ['تساعد على اعتدال تغير الحرارة', 'تجعل الماء يفقد كل حرارته فورًا', 'تمنع وجود الكائنات'],
        ['It helps moderate temperature change', 'It makes water lose all heat instantly', 'It prevents organisms from living']),
      lesson('المحاليل المائية وخواصها', 'Aqueous Solutions and Their Properties',
        'التعرف إلى المحلول المائي والمذاب والمذيب، وقراءة أثر المواد الذائبة في الماء.',
        'Identify aqueous solutions, solutes, and solvents and consider the effects of dissolved substances.',
        'حدّد المذاب والمذيب في مثال مائي، ثم ناقش أثر زيادة تركيز المذاب.',
        'Identify the solute and solvent in an aqueous example and discuss increased concentration.',
        'في محلول ملح وماء، ما المذيب؟', 'In a salt-and-water solution, what is the solvent?',
        ['الماء', 'الملح', 'الوعاء'],
        ['Water', 'Salt', 'The container'], [['المذاب', 'solute'], ['المذيب', 'solvent']]),
      lesson('الأهمية البيولوجية للماء', 'Biological Importance of Water',
        'شرح دور الماء في العمليات الحيوية ونقل المواد والمحافظة على وظائف الكائنات.',
        'Explain water’s role in life processes, transport, and maintaining organism functions.',
        'اربط وظيفة حيوية واحدة بحاجة الكائن إلى الماء، واذكر مثالًا.',
        'Connect one life function to an organism’s need for water and give an example.',
        'لماذا تعتمد الكائنات الحية على الماء؟', 'Why do living organisms depend on water?',
        ['لدوره في العمليات الحيوية ونقل المواد', 'لأنه يحل محل الطاقة', 'لأنه يمنع كل التغيرات'],
        ['It supports life processes and transport', 'It replaces energy', 'It prevents all change']),
      lesson('التكيفات البيولوجية للكائنات الحية في البيئة المائية', 'Adaptations of Aquatic Organisms',
        'استكشاف تكيفات تركيبية أو سلوكية تساعد الكائنات على العيش في بيئات مائية مختلفة.',
        'Explore structural and behavioral adaptations that help organisms live in aquatic environments.',
        'اختر تكيفًا لكائن مائي واشرح كيف يساعده على البقاء في موطنه.',
        'Choose an aquatic adaptation and explain how it helps an organism survive in its habitat.',
        'ما المقصود بالتكيف البيولوجي؟', 'What is a biological adaptation?',
        ['صفة تساعد الكائن على البقاء والتكاثر في بيئته', 'تغير يومي مقصود في الطقس', 'خاصية لا ترتبط بالبيئة'],
        ['A trait that helps an organism survive and reproduce in its environment', 'A deliberate daily weather change', 'A feature unrelated to the environment']),
      lesson('تأثير غازات الهواء الجوي على البيئات المائية', 'Atmospheric Gases and Aquatic Environments',
        'بيان تبادل الغازات بين الهواء والماء وأثر الأكسجين وثاني أكسيد الكربون في الحياة المائية.',
        'Describe gas exchange between air and water and the roles of oxygen and carbon dioxide.',
        'ارسم أسهمًا توضح تبادل غازين بين الماء والهواء، ثم اشرح أثر أحدهما في الكائنات.',
        'Draw arrows showing two gases exchanged between air and water and explain one biological effect.',
        'أي غاز مذاب تحتاجه كثير من الكائنات المائية للتنفس؟',
        'Which dissolved gas do many aquatic organisms need for respiration?',
        ['الأكسجين', 'النيتروجين النقي فقط', 'الهيدروجين'],
        ['Oxygen', 'Pure nitrogen only', 'Hydrogen']),
      lesson('تأثير الضوء والإشعاع الشمسي على البيئات المائية', 'Light and Solar Radiation in Water',
        'فهم تغير شدة الضوء مع العمق وتأثيره في البناء الضوئي ودرجة حرارة البيئات المائية.',
        'Understand how light changes with depth and affects photosynthesis and aquatic temperatures.',
        'فسّر لماذا يتغير توزيع بعض الكائنات والنباتات مع عمق الماء.',
        'Explain why some organisms and plants are distributed differently with water depth.',
        'كيف يؤثر الضوء في الكائنات المنتجة داخل الماء؟',
        'How does light affect producers in water?',
        ['يوفر الطاقة اللازمة للبناء الضوئي', 'يمنع حدوث البناء الضوئي', 'يحوّل الماء إلى تربة'],
        ['It provides energy for photosynthesis', 'It prevents photosynthesis', 'It turns water into soil']),
      lesson('تأثير الضغط المائي على الكائنات الحية', 'Water Pressure and Living Organisms',
        'ربط ضغط الماء بالعمق وتفسير بعض التكيفات التي تمكّن الكائنات من العيش في أعماق مختلفة.',
        'Relate water pressure to depth and explain adaptations to different aquatic depths.',
        'قارن الضغط قرب السطح وفي عمق أكبر، ثم اقترح أثر ذلك في جسم كائن مائي.',
        'Compare pressure near the surface and at greater depth and suggest an effect on an aquatic organism.',
        'كيف يتغير ضغط الماء عادةً كلما ازداد العمق؟',
        'How does water pressure generally change as depth increases?',
        ['يزداد', 'يختفي', 'يبقى دائمًا صفرًا'],
        ['It increases', 'It disappears', 'It always remains zero']),
      lesson('التوازن البيئي ودور الإنسان في استدامة الحياة المائية', 'Ecological Balance and Human Stewardship',
        'تحليل العلاقات في النظام المائي ومناقشة إجراءات تحد من التلوث وتحافظ على استدامة الحياة.',
        'Analyze aquatic ecosystem relationships and discuss ways to reduce pollution and sustain life.',
        'صمم إجراءً واقعيًا للحد من ملوث مائي، وحدد مؤشرًا لملاحظة التحسن.',
        'Design a practical action to reduce an aquatic pollutant and name an indicator of improvement.',
        'أي إجراء يدعم استدامة النظام المائي؟',
        'Which action supports aquatic ecosystem sustainability?',
        ['الحد من التلوث ومراقبة جودة الماء', 'إلقاء المخلفات في المجاري المائية', 'إزالة كل الكائنات المنتجة'],
        ['Reduce pollution and monitor water quality', 'Dispose of waste in waterways', 'Remove all producers'])
    ]
  },
  {
    titleAr: 'الغلاف الجوي',
    titleEn: 'The Atmosphere',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('مكونات الغلاف الجوي وطبقاته', 'Composition and Layers of the Atmosphere',
        'التعرف إلى تركيب الغلاف الجوي وتقسيمه إلى طبقات، وربط خصائص الطبقات بالظواهر المختلفة.',
        'Identify atmospheric composition and layers and connect layer properties with phenomena.',
        'رتّب طبقات الغلاف الجوي في مخطط من سطح الأرض إلى الخارج.',
        'Arrange atmospheric layers in a diagram from Earth’s surface outward.',
        'ما الذي يميز الغلاف الجوي؟', 'What characterizes the atmosphere?',
        ['مزيج من الغازات يحيط بالأرض', 'طبقة من الماء السائل فقط', 'مجموعة من الصخور تحت السطح'],
        ['A mixture of gases surrounding Earth', 'Only a layer of liquid water', 'Rocks beneath the surface']),
      lesson('التفاعلات الكيميائية في الغلاف الجوي', 'Chemical Reactions in the Atmosphere',
        'دراسة تفاعلات كيميائية جوية وأثرها في تركيب الهواء والبيئة، والتمييز بين التحول الكيميائي والتغير الفيزيائي.',
        'Study atmospheric chemical reactions and their effects on air and the environment.',
        'مثّل تفاعلًا جويًا بسيطًا بمخطط يوضح المواد الداخلة والناتجة.',
        'Represent a simple atmospheric reaction with a diagram of reactants and products.',
        'ما علامة التفاعل الكيميائي؟', 'What is evidence of a chemical reaction?',
        ['تكوّن مواد جديدة', 'تغير موضع الجسم فقط', 'تغير شكل الوعاء'],
        ['New substances form', 'Only an object’s position changes', 'The container changes shape']),
      lesson('العوامل الفيزيائية وتأثيرها في الغلاف الجوي', 'Physical Factors Affecting the Atmosphere',
        'تحليل أثر عوامل فيزيائية مثل الحرارة والضغط وحركة الهواء في الظواهر الجوية.',
        'Analyze how physical factors such as temperature, pressure, and air movement affect atmospheric phenomena.',
        'فسّر بمخطط كيف ينتج اختلاف التسخين حركة للهواء.',
        'Use a diagram to explain how unequal heating can move air.',
        'ما العامل الذي يسهم في حركة الهواء بين مناطق الضغط المختلفة؟',
        'What contributes to air movement between regions of different pressure?',
        ['تدرج الضغط', 'تساوي جميع درجات الحرارة', 'انعدام الهواء'],
        ['A pressure gradient', 'Equal temperatures everywhere', 'The absence of air']),
      lesson('الغلاف الجوي ودور العلم في استدامته', 'Atmospheric Sustainability and the Role of Science',
        'بحث دور البيانات والرصد والابتكار العلمي في فهم تغيرات الغلاف الجوي وتقليل مصادر الضرر.',
        'Explore how data, monitoring, and scientific innovation help understand atmospheric change and reduce harm.',
        'اختر مصدرًا لتلوث الهواء واقترح حلًا مدعومًا بقياس أو بيانات.',
        'Choose an air-pollution source and propose a solution supported by measurement or data.',
        'كيف يدعم الرصد العلمي حماية الغلاف الجوي؟',
        'How does scientific monitoring support atmospheric protection?',
        ['يكشف التغيرات ويساعد على تقييم الإجراءات', 'يمنع جمع أي بيانات', 'يجعل مصادر التلوث غير قابلة للفهم'],
        ['It detects changes and helps evaluate actions', 'It prevents data collection', 'It makes pollution impossible to study'])
    ]
  }
];

const egyptPhilosophyUnits: UnitPlan[] = [
  {
    titleAr: 'الفلسفة: التفكير الإنساني',
    titleEn: 'Philosophy: Human Thought',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [lesson('التفكير الإنساني وتطبيقاته', 'Human Thought and Its Applications',
      'تعريف التفكير الإنساني وملاحظة أثره في تفسير المواقف وحل المشكلات وتمييز أساليب التفكير.',
      'Define human thought and examine its role in interpreting situations, solving problems, and distinguishing modes of thought.',
      'حلل موقفًا يوميًا، وحدد السؤال والمعلومات والبدائل التي تساعد على اتخاذ قرار.',
      'Analyze an everyday situation and identify the question, information, and options for a decision.',
      'ما الذي يميز التفكير المنظم؟', 'What characterizes organized thinking?',
      ['الاستناد إلى معلومات وفحص البدائل', 'إصدار حكم قبل فهم الموقف', 'تجاهل الأدلة'],
      ['Use information and examine alternatives', 'Judge before understanding the situation', 'Ignore evidence'],
      [['التفكير', 'thought'], ['الاستدلال', 'reasoning']])]
  },
  {
    titleAr: 'الفلسفة: طبيعة الفلسفة والموقف الفلسفي',
    titleEn: 'Philosophy: Nature of Philosophy and the Philosophical Attitude',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [lesson('طبيعة الفلسفة والموقف الفلسفي', 'Nature of Philosophy and the Philosophical Attitude',
      'التعرف إلى معنى الفلسفة وأسئلتها، وخصائص الموقف الفلسفي القائم على التساؤل والفحص والحوار.',
      'Explore philosophy’s questions and the philosophical attitude of inquiry, examination, and dialogue.',
      'صغ سؤالًا فلسفيًا حول قضية يومية، ثم اكتب رأيين وأحد أوجه الدليل لكل منهما.',
      'Form a philosophical question about an everyday issue and note two views with one reason each.',
      'أي ممارسة تعبّر عن الموقف الفلسفي؟', 'Which practice reflects a philosophical attitude?',
      ['طرح سؤال وفحص الحجج باحترام', 'رفض كل نقاش', 'اعتبار الرأي دليلًا كافيًا'],
      ['Ask a question and examine arguments respectfully', 'Reject every discussion', 'Treat an opinion as sufficient evidence'])]
  },
  {
    titleAr: 'المنطق: مبادئ المنطق (الحدود والقضايا)',
    titleEn: 'Logic: Terms and Propositions',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [lesson('مبادئ المنطق: الحدود والقضايا', 'Principles of Logic: Terms and Propositions',
      'التمييز بين الحد والقضية المنطقية وتحليل بنية عبارة يمكن الحكم عليها بالصدق أو الكذب.',
      'Distinguish logical terms from propositions and analyze statements that can be true or false.',
      'صنّف عبارات إلى حدود أو قضايا، وعلّل اختيارك بمعيار واضح.',
      'Classify expressions as terms or propositions and justify each choice with a clear criterion.',
      'أي عبارة تعد قضية منطقية؟', 'Which expression is a logical proposition?',
      ['الماء يتجمد عند درجة مناسبة', 'الماء', 'ما أجمل الطبيعة!'],
      ['Water freezes at a suitable temperature', 'Water', 'How beautiful nature is!'],
      [['الحد', 'term'], ['القضية', 'proposition']])]
  },
  {
    titleAr: 'المنطق: الاستدلال وأنواعه',
    titleEn: 'Logic: Inference and Its Types',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [lesson('الاستدلال: تعريفه وأنواعه', 'Inference: Definition and Types',
      'فهم الاستدلال بوصفه انتقالًا من مقدمات إلى نتيجة، ومقارنة صوره المباشرة وغير المباشرة.',
      'Understand inference as moving from premises to a conclusion and compare direct and indirect forms.',
      'حلل حجة قصيرة، وحدد المقدمة والنتيجة ونوع الانتقال بينهما.',
      'Analyze a short argument and identify its premise, conclusion, and form of reasoning.',
      'ما النتيجة في استدلال يتكون من مقدمتين وخاتمة؟',
      'What is the conclusion in an argument with premises and a final claim?',
      ['العبارة التي تدعمها المقدمات', 'أي كلمة مكررة', 'عنوان الموضوع'],
      ['The claim supported by the premises', 'Any repeated word', 'The topic heading'])]
  }
];

const egyptIslamicUnits: UnitPlan[] = [
  {
    titleAr: 'إيمان وإحسان',
    titleEn: 'Faith and Excellence',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('الإيمان بالله الواحد الأحد', 'Faith in Allah, the One',
        'ترسيخ دلالات الإيمان بوحدانية الله وربط الاعتقاد بالنصوص الشرعية والتأمل في دلائل الخلق.',
        'Explore belief in the oneness of Allah through religious sources and reflection on creation.',
        'اكتب معنى واحدًا للوحدانية، واربطه بدليل تعلمته في الدرس.',
        'Write one meaning of divine oneness and connect it to evidence studied in the lesson.',
        'ما المعنى الذي تؤكده سورة الإخلاص؟', 'What meaning is affirmed in Surah Al-Ikhlas?',
        ['وحدانية الله', 'تعدد الآلهة', 'إنكار الخلق'],
        ['The oneness of Allah', 'Multiple deities', 'Denial of creation']),
      lesson('النظافة من الإيمان', 'Cleanliness Is Part of Faith',
        'بيان قيمة الطهارة والنظافة في العبادة والحياة، والتعرف إلى أحكام التيمم والحكمة من مشروعيته.',
        'Explain cleanliness in worship and daily life and learn the purpose and rulings of tayammum.',
        'صنّف مواقف إلى ما يتطلب الوضوء أو التيمم وفق ما درسته، واذكر الحكمة.',
        'Classify situations requiring wudu or tayammum according to the lesson and state the purpose.',
        'متى تكون رخصة التيمم مشروعة؟', 'When is the concession of tayammum permitted?',
        ['عند تعذر استعمال الماء وفق ضوابطه', 'كلما رغب الشخص في ترك الطهارة', 'بدلًا دائمًا من الوضوء بلا سبب'],
        ['When water cannot be used under its conditions', 'Whenever someone wants to skip purification', 'Always instead of wudu without cause']),
      lesson('حكمة الرسول ورحمته', 'The Prophet’s Wisdom and Mercy',
        'التعرف إلى مواقف من سيرة الرسول في الرحمة والحكمة، واستنتاج أثر الرفق في التعامل.',
        'Study examples of prophetic mercy and wisdom and infer the value of gentleness.',
        'اكتب موقفًا يقتدي فيه الطالب بالرفق والحكمة في تعامله مع الآخرين.',
        'Describe a situation in which a student can follow the example of gentleness and wisdom.',
        'أي سلوك يجسد الرحمة في التعامل؟', 'Which behavior demonstrates mercy in dealing with others?',
        ['الرفق ومراعاة حال الآخرين', 'الإيذاء عند الاختلاف', 'السخرية من المخطئ'],
        ['Gentleness and consideration for others', 'Harm when disagreeing', 'Mocking someone who makes a mistake'])
    ]
  },
  {
    titleAr: 'الزواج في الإسلام',
    titleEn: 'Marriage in Islam',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [lesson('الزواج في الإسلام: مقاصده وحقوق الأسرة', 'Marriage in Islam: Purposes and Family Responsibilities',
      'دراسة توجيهات الكتاب حول الزواج في الإسلام، وما يتصل بالمودة والمسؤولية والحقوق وحسن المعاشرة.',
      'Study the textbook’s guidance on marriage, affection, responsibility, rights, and good family relations.',
      'أنشئ خريطة تربط قيمة أسرية بمسؤولية عملية وأثرها في استقرار الأسرة.',
      'Create a map linking a family value to a responsibility and its effect on family wellbeing.',
      'أي مبدأ يدعم استقرار الحياة الأسرية؟',
      'Which principle supports a stable family life?',
      ['المودة والقيام بالمسؤوليات', 'إهمال الحقوق', 'إلغاء الحوار'],
      ['Affection and fulfilling responsibilities', 'Ignoring rights', 'Ending dialogue'])]
  },
  {
    titleAr: 'الإسلام والعمل الصالح',
    titleEn: 'Islam and Righteous Deeds',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson('الاستعداد ليوم القيامة بالعمل الصالح', 'Preparing for the Hereafter through Good Deeds',
        'التأمل في المسؤولية عن العمل وربط الاستعداد للآخرة بالإيمان والسلوك الصالح.',
        'Reflect on accountability and connect preparation for the Hereafter with faith and good conduct.',
        'اختر عملًا صالحًا يوميًا، واكتب أثره المتوقع في الفرد والمجتمع.',
        'Choose a daily good deed and describe its expected effect on individuals and society.',
        'بماذا يكون الاستعداد ليوم القيامة؟', 'How does one prepare for the Day of Judgment?',
        ['بالإيمان والعمل الصالح', 'بالأماني وحدها', 'بتأجيل كل مسؤولية'],
        ['Through faith and righteous deeds', 'By wishes alone', 'By postponing all responsibility']),
      lesson('الصلاة والدعاء والتوكل على الله', 'Prayer, Supplication, and Reliance on Allah',
        'مراجعة موضوعات الصلاة والدعاء الواردة في الكتاب وفهم معاني التوجه إلى الله في الأحوال المختلفة.',
        'Review prayer and supplication as presented in the textbook and understand turning to Allah in different circumstances.',
        'ميّز بين الدعاء المشروع والعادة، ثم بيّن أدبًا من آداب الدعاء.',
        'Distinguish supplication from habit and identify one etiquette of making dua.',
        'ما الذي يعبّر عن دوام الصلة بالله؟', 'What expresses maintaining a connection with Allah?',
        ['المحافظة على العبادة والدعاء', 'ترك العبادة وقت الحاجة', 'الاعتماد على الأسباب مع نسيان الله'],
        ['Maintaining worship and supplication', 'Abandoning worship when in need', 'Relying on means while forgetting Allah']),
      lesson('صحبة الرسول وأصحابه', 'Companionship with the Prophet and His Companions',
        'التعرف إلى مواقف من صحبة أصحاب الرسول، وما يستفاد منها في الوفاء والتعاون وحسن الاقتداء.',
        'Study examples of the Prophet’s companions and lessons in loyalty, cooperation, and good example.',
        'استخرج قيمة من موقف في السيرة، ثم صغ تطبيقًا لها في المدرسة.',
        'Identify a value from a biographical account and apply it to a school situation.',
        'أي خلق يعكس الصحبة الصالحة؟', 'Which quality reflects good companionship?',
        ['النصح والتعاون على الخير', 'إفشاء السر والإيذاء', 'الإعانة على الخطأ'],
        ['Sincere advice and cooperation in good', 'Betraying trust and causing harm', 'Helping someone do wrong'])
    ]
  },
  {
    titleAr: 'الدين المعاملة',
    titleEn: 'Faith in Daily Dealings',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    lessons: [
      lesson('البيوع في الإسلام', 'Trade in Islam',
        'التعرف إلى مفهوم البيع وشروطه والتمييز بين المعاملة المباحة وبعض صور البيع المحرم.',
        'Explore sale contracts and their conditions and distinguish permissible trade from prohibited forms.',
        'حلل موقف بيع افتراضي وحدد شرطًا من شروط صحته أو سببًا يمنعه.',
        'Analyze a hypothetical sale and identify a validity condition or a reason it would be prohibited.',
        'أي شرط يدعم صحة عقد البيع؟', 'Which condition supports a valid sale?',
        ['التراضي ومعرفة المبيع والثمن', 'إخفاء العيب', 'إجبار أحد الطرفين'],
        ['Consent and clarity about goods and price', 'Hiding a defect', 'Coercing one party']),
      lesson('الزكاة ومصارفها', 'Zakat and Its Recipients',
        'فهم معنى الزكاة ومقاصدها الاجتماعية والتعرف إلى مصارفها وأثرها في التكافل.',
        'Understand zakat’s meaning and social purposes and learn its recipients and role in solidarity.',
        'صنّف أمثلة لمستحقين وفق الأصناف التي درستها.',
        'Classify examples of eligible recipients using the categories studied.',
        'ما أثر الزكاة في المجتمع؟', 'What is one social effect of zakat?',
        ['تعزيز التكافل ومساعدة المستحقين', 'زيادة احتكار المال', 'قطع التعاون'],
        ['Strengthen solidarity and support eligible people', 'Increase hoarding', 'End cooperation']),
      lesson('الرسول قائدًا', 'The Prophet as a Leader',
        'استنباط صفات القيادة والقدوة من سيرة الرسول ومواقفه في تنظيم الجماعة والتعامل معها.',
        'Infer leadership qualities from the Prophet’s life and his guidance of the community.',
        'اربط موقفًا قياديًا بصفة مثل الشورى أو الرحمة، واقترح تطبيقًا طلابيًا.',
        'Connect a leadership example to consultation or mercy and suggest a student application.',
        'ما السمة التي تعزز القيادة بالقدوة؟', 'Which quality strengthens leadership by example?',
        ['العدل وحسن التعامل', 'التعالي ورفض المشورة', 'نقض العهد'],
        ['Fairness and good conduct', 'Arrogance and rejecting advice', 'Breaking commitments'])
    ]
  },
  {
    titleAr: 'الإسلام منارة العلم',
    titleEn: 'Islam as a Beacon of Knowledge',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    lessons: [
      lesson('العلم في الإسلام', 'Knowledge in Islam',
        'بيان منزلة العلم والتعلم في الإسلام وربط طلب المعرفة بالمسؤولية والعمل النافع.',
        'Explore the value of knowledge and learning in Islam and connect study with responsibility and benefit.',
        'ضع خطة قصيرة لطلب علم نافع، وحدد مصدرًا موثوقًا وكيفية التحقق منه.',
        'Make a short plan to learn something beneficial and identify a reliable source and verification step.',
        'ما الذي يميز طلب العلم النافع؟', 'What characterizes seeking beneficial knowledge?',
        ['التثبت والعمل بما ينفع', 'نقل كل خبر بلا تحقق', 'التفاخر دون تعلم'],
        ['Verification and useful application', 'Repeating every claim without checking', 'Boasting without learning']),
      lesson('الإسلام والحضارات الأخرى', 'Islam and Other Civilizations',
        'دراسة التفاعل الحضاري وتبادل المعارف واحترام الإسهامات ضمن سياقها التاريخي.',
        'Study cultural interaction and exchange of knowledge while respecting contributions in historical context.',
        'مثّل انتقال معرفة أو فكرة بين الحضارات، واذكر أثر التبادل في تطورها.',
        'Map the transmission of an idea between civilizations and explain its effect.',
        'كيف يدرس المؤرخ التفاعل الحضاري؟', 'How does a historian study cultural exchange?',
        ['بتتبع الشواهد والاتصال التاريخي', 'بإنكار كل تأثير متبادل', 'بإطلاق أحكام بلا مصادر'],
        ['By tracing evidence and historical contact', 'By denying all mutual influence', 'By making unsupported judgments']),
      lesson('العلماء العرب وإسهاماتهم', 'Arab Scholars and Their Contributions',
        'التعرف إلى نماذج من العلماء العرب ومجالات إسهامهم وأهمية المنهج العلمي.',
        'Explore examples of Arab scholars, their fields, and the value of scientific method.',
        'اختر عالمًا من الدرس واكتب بطاقة عن سؤاله أو مجاله وإسهامه.',
        'Choose a scholar from the lesson and make a card describing a question, field, or contribution.',
        'ما أفضل طريقة لتقدير إسهام عالم؟', 'What is a useful way to understand a scholar’s contribution?',
        ['ربطه بمجاله وشواهده وسياقه', 'ذكر اسمه دون معرفة عمله', 'نسبة إنجاز غير موثق إليه'],
        ['Relate it to the field, evidence, and context', 'Mention a name without learning the work', 'Attribute an unverified achievement'])
    ]
  },
  {
    titleAr: 'من مظاهر التيسير في الإسلام',
    titleEn: 'Facilitation in Islam',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    lessons: [
      lesson('رحمة الله بعباده', 'Allah’s Mercy toward His Servants',
        'التعرف إلى صور الرحمة والتيسير في الأحكام، وفهم أثر مراعاة أحوال الناس في التكليف.',
        'Explore mercy and facilitation in religious guidance and the consideration of people’s circumstances.',
        'ناقش موقفًا يبرز التيسير، وميّز بين الرخصة المنضبطة والتساهل غير المستند.',
        'Discuss an example of facilitation and distinguish a valid concession from unsupported laxity.',
        'ما المقصود بالتيسير المنضبط؟', 'What is principled facilitation?',
        ['رفع الحرج وفق الأحكام والضوابط', 'ترك كل حكم بلا دليل', 'إيقاع المشقة عمدًا'],
        ['Removing undue hardship within established rulings', 'Ignoring every ruling without evidence', 'Deliberately causing hardship']),
      lesson('يسر الحج في الإسلام', 'Ease in the Hajj',
        'التعرف إلى صور التيسير المتعلقة بالحج كما يعرضها الكتاب، وربطها بأحكام المناسك.',
        'Explore facilitation in Hajj as presented in the book and connect it with pilgrimage rulings.',
        'رتب خطوات مبسطة من موضوع الدرس، وحدد موضع الرخصة التي درستها.',
        'Sequence selected steps from the lesson and identify a concession discussed.',
        'كيف يظهر التيسير في أحكام الحج؟', 'How is facilitation reflected in Hajj rulings?',
        ['برخص شرعية تراعي أحوال المكلفين', 'بإلغاء المناسك كلها', 'بتكليف الناس بما لا يستطيعون'],
        ['Through lawful concessions that consider people’s circumstances', 'By cancelling all rites', 'By requiring the impossible'])
    ]
  }
];

const ictTitles = [
  ['ما المعلومات؟ المعلومات والإعلام', 'What Is Information? Information and Media'],
  ['اللوائح والحقوق في مجتمع المعلومات', 'Regulations and Rights in the Information Society'],
  ['أمن المعلومات', 'Information Security'],
  ['تكنولوجيا المعلومات والمجتمع', 'Information Technology and Society'],
  ['الاتصال', 'Communication'],
  ['تصميم المعلومات', 'Information Design'],
  ['الحاسوب', 'Computers'],
  ['الشبكات', 'Networks'],
  ['قواعد البيانات', 'Databases'],
  ['تحليل البيانات', 'Data Analysis'],
  ['المحاكاة', 'Simulations'],
  ['البرمجة بلغة بايثون', 'Programming with Python'],
  ['برمجة الذكاء الاصطناعي وتطوير التطبيقات', 'AI Programming and Application Development']
] as const;

const ictSummaries = [
  ['فهم البيانات والمعلومات والمعرفة وأخلاقيات تداول المحتوى الإعلامي.', 'Distinguish data, information, and knowledge and consider information ethics.'],
  ['التعرف إلى البيانات الشخصية وحقوق الملكية الفكرية وضوابط استخدام المعلومات والإفصاح عنها.', 'Study personal information, intellectual-property rights, and responsible information use and disclosure.'],
  ['استكشاف التهديدات الرقمية ووسائل الوقاية واستخدام التقنية لدعم السلامة.', 'Explore digital threats, protective measures, and technology for safety.'],
  ['تتبع تطور تكنولوجيا المعلومات وأثرها في المجتمع.', 'Trace the development of information technology and its effect on society.'],
  ['دراسة تطور وسائل الاتصال وأشكالها وعلاقة الإنترنت بالتواصل.', 'Study communication methods, forms, and the role of the internet.'],
  ['تمثيل المعلومات تمثيلًا رقميًا وفهم الثنائي والسادس عشري والصوت والصور والفيديو.', 'Represent information digitally and explore binary, hexadecimal, sound, images, and video.'],
  ['التعرف إلى مكونات الحاسوب والبرمجيات والدوائر المنطقية.', 'Explore computer components, software, and logic circuits.'],
  ['فهم شبكات الحاسوب وعناوين IP وأسماء النطاقات والبروتوكولات وآليات نقل البيانات.', 'Study computer networks, IP addresses, domain names, protocols, and data transfer.'],
  ['فهم قواعد البيانات وإدارتها وبعض نظم المعلومات.', 'Understand databases, their management, and selected information systems.'],
  ['التعرف إلى أنواع البيانات وأساليب تحليلها وتفسير نتائجها.', 'Explore data types, analysis methods, and interpretation of results.'],
  ['بناء نماذج وتجارب محاكاة لفهم الأنظمة والصفوف.', 'Build models and simulations to study systems and queues.'],
  ['التدرج من الخوارزمية إلى أساسيات البرمجة والتطبيق باستخدام Python.', 'Progress from algorithms to Python programming fundamentals and applications.'],
  ['التعرف إلى الذكاء الاصطناعي التوليدي وبناء صفحات ويب وتطبيقات ومشروعات برمجية.', 'Explore generative AI and build web pages, applications, and programming projects.']
] as const;

const egyptIctUnits: UnitPlan[] = ictTitles.map(([titleAr, titleEn], index) => ({
  titleAr,
  titleEn,
  termAr: 'الفصل الدراسي الأول',
  termEn: 'First Semester',
  lessons: [lesson(
    titleAr,
    titleEn,
    ictSummaries[index][0],
    ictSummaries[index][1],
    'أنشئ مخططًا أو مثالًا عمليًا يشرح مفهوم الوحدة، ثم اذكر إجراءً للاستخدام المسؤول للتقنية.',
    'Create a diagram or practical example explaining a unit concept and identify a responsible technology practice.',
    'ما أفضل طريقة لفهم مفهوم تقني جديد؟',
    'What is a useful way to understand a new technology concept?',
    ['ربطه بمثال وتجربة والتحقق من النتيجة', 'حفظ المصطلح دون فهمه', 'مشاركة بيانات شخصية للتجربة'],
    ['Connect it to an example, test it, and check the result', 'Memorize a term without understanding it', 'Share personal data for practice']
  )]
}));

const curricula: Partial<Record<Subject, UnitPlan[]>> = {
  MATH: egyptMathUnits,
  HISTORY: egyptHistoryUnits,
  GENERAL_SCIENCE: egyptIntegratedScienceUnits,
  PHILOSOPHY: egyptPhilosophyUnits,
  ISLAMIC_STUDIES: egyptIslamicUnits,
  COMPUTER_SCIENCE: egyptIctUnits
};

const textbookMetadata: Partial<Record<Subject, { titleAr: string; titleEn: string }>> = {
  MATH: {
    titleAr: 'الرياضيات — كتاب الصف الأول الثانوي (النسخة العربية، الفصل الدراسي الأول)',
    titleEn: 'Mathematics — Secondary 1 Arabic edition, First Semester'
  },
  HISTORY: {
    titleAr: 'التاريخ — حضارة مصر والعالم القديم، الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'History — Civilization of Egypt and the Ancient World, Secondary 1, First Semester'
  },
  GENERAL_SCIENCE: {
    titleAr: 'العلوم المتكاملة — الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Integrated Science — Secondary 1, First Semester'
  },
  PHILOSOPHY: {
    titleAr: 'الفلسفة والمنطق — الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Philosophy and Logic — Secondary 1, First Semester'
  },
  ISLAMIC_STUDIES: {
    titleAr: 'التربية الدينية الإسلامية — الصف الأول الثانوي، الفصلان الدراسيان الأول والثاني',
    titleEn: 'Islamic Religious Education — Secondary 1, First and Second Semesters'
  },
  COMPUTER_SCIENCE: {
    titleAr: 'تكنولوجيا المعلومات والاتصالات (نسخة اللغة الإنجليزية) — الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Information and Communication Technology (English edition) — Secondary 1, First Semester'
  }
};

export function isEgyptG10BookCourseAvailable(
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): boolean {
  if (!curricula[subject]) return false;
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE' && educationType !== 'INTERNATIONAL') return false;
  return subject !== 'HISTORY' || ((educationType === 'PUBLIC' || educationType === 'INTERNATIONAL') && track === 'GENERAL');
}

export function getEgyptG10BookCurriculum(
  subject: Subject,
  educationType: EducationType,
  track: EducationTrack
): Lecture[] {
  if (!isEgyptG10BookCourseAvailable(subject, educationType, track)) return [];
  const units = curricula[subject];
  if (!units) return [];

  return units.flatMap((unit, unitIndex) =>
    unit.lessons.map((item, lessonIndex): Lecture => {
      const order = units.slice(0, unitIndex).reduce((count, previous) => count + previous.lessons.length, 0) + lessonIndex + 1;
      const id = `eg-${subject.toLowerCase()}-g10-${unit.termAr.includes('الثاني') ? 't2' : 't1'}-${order}`;
      const questions = [{
        id: `${id}-q1`,
        textAr: item.questionAr,
        textEn: item.questionEn,
        optionsAr: [...item.optionsAr],
        optionsEn: [...item.optionsEn],
        correctIndex: 0,
        conceptTestedAr: item.titleAr,
        conceptTestedEn: item.titleEn,
        explanationAr: 'تستند الإجابة إلى المفهوم الوارد في الدرس؛ راجع الشرح والنشاط للتحقق.',
        explanationEn: 'The answer follows the lesson concept; use the explanation and activity to check your reasoning.',
        difficulty: 'easy' as const
      }];

      return {
        id,
        order,
        titleAr: item.titleAr,
        titleEn: item.titleEn,
        subtitleAr: textbookMetadata[subject]?.titleAr ?? item.titleAr,
        subtitleEn: textbookMetadata[subject]?.titleEn ?? item.titleEn,
        descriptionAr: `شرح وأنشطة أصلية مساندة لموضوع الكتاب: ${item.focusAr}`,
        descriptionEn: `Original supplementary explanation and activities for the textbook topic: ${item.focusEn}`,
        topicAr: unit.titleAr,
        topicEn: unit.titleEn,
        durationMinutes: 30,
        isLocked: false,
        isCompleted: false,
        passingScoreRequired: 80,
        country: 'EG',
        subject,
        gradeLevel: 'G10',
        educationType,
        educationTrack: track,
        gradeLevelNameAr: educationType === 'INTERNATIONAL'
          ? 'الصف الأول الثانوي (مسار مدارس اللغات - التجريبية والرسمية)'
          : 'الصف الأول الثانوي (المسار العام العربي)',
        gradeLevelNameEn: educationType === 'INTERNATIONAL'
          ? 'Secondary 1 / Grade 10 (Language Schools Track - English Medium)'
          : 'Secondary 1 / Grade 10 (Egyptian National Curriculum)',
        termAr: unit.termAr,
        termEn: unit.termEn,
        unitTitleAr: `الوحدة ${['الأولى', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة'][unitIndex]}: ${unit.titleAr}`,
        unitTitleEn: `Unit ${unitIndex + 1}: ${unit.titleEn}`,
        lessonNumberAr: `الدرس ${lessonIndex + 1}`,
        lessonNumberEn: `Lesson ${lessonIndex + 1}`,
        warmupHookAr: `ما علاقة موضوع «${item.titleAr}» بما تلاحظه في العالم من حولك؟`,
        warmupHookEn: `How does “${item.titleEn}” connect to something you observe around you?`,
        learningOutcomesAr: [item.focusAr, `تطبيق المفهوم في موقف أو نشاط مرتبط بموضوع «${unit.titleAr}».`],
        learningOutcomesEn: [item.focusEn, `Apply the concept in an activity related to “${unit.titleEn}.”`],
        vocabulary: (item.vocabulary ?? []).map(([term, translation]) => ({
          termAr: `${translation} (${term})`,
          termEn: term,
          definitionAr: `مفهوم أساسي في موضوع «${item.titleAr}».`,
          definitionEn: `A key term in “${item.titleEn}.”`
        })),
        keyConceptsAr: [unit.titleAr, item.titleAr],
        keyConceptsEn: [unit.titleEn, item.titleEn],
        summaryAr: item.focusAr,
        summaryEn: item.focusEn,
        mainContentAr: `${item.focusAr}\n\nنشاط تطبيقي: ${item.activityAr}\n\nتذكّر أن هذا شرح أصلي مساعد، وليس بديلًا عن دراسة الكتاب كاملًا.`,
        mainContentEn: `${item.focusEn}\n\nPractice: ${item.activityEn}\n\nThis original lesson supports study and does not replace the complete textbook.`,
        sections: [{
          titleAr: 'الفكرة الرئيسة',
          titleEn: 'Key Idea',
          contentAr: item.focusAr,
          contentEn: item.focusEn,
          tipsAr: ['استند إلى الأدلة والأمثلة المناسبة للمادة.', 'تحقق من خطواتك ومفرداتك قبل اعتماد النتيجة.'],
          tipsEn: ['Use evidence and examples suited to the subject.', 'Check your steps and vocabulary before settling on a result.']
        }, {
          titleAr: 'نشاط تطبيقي',
          titleEn: 'Practice Activity',
          contentAr: item.activityAr,
          contentEn: item.activityEn
        }],
        formativeAssessment: [{
          id: `${id}-check`,
          questionAr: item.questionAr,
          questionEn: item.questionEn,
          optionsAr: [...item.optionsAr],
          optionsEn: [...item.optionsEn],
          correctIndex: 0,
          explanationAr: 'راجع المفهوم الأساسي في الدرس وقارنه بالبدائل.',
          explanationEn: 'Review the lesson’s key idea and compare it with the options.'
        }],
        assessment: {
          id: `${id}-assessment`,
          lectureId: id,
          titleAr: `تقويم: ${item.titleAr}`,
          titleEn: `Check: ${item.titleEn}`,
          passingScore: 80,
          questions
        }
      };
    })
  );
}
