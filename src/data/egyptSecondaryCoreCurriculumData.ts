import type { CountryCode, EducationTrack, EducationType, GradeLevel, Lecture, Subject } from '../types';

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

const egyptGeographyUnits: UnitPlan[] = [
  {
    titleAr: 'مدخل لدراسة جغرافية مصر وموقعها ومظاهر السطح',
    titleEn: 'Introduction to Egypt Geography, Location, & Landforms',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'موقع مصر وأهميته الجغرافية والاستراتيجية',
        'Egypt Location and Strategic Importance',
        'دراسة الموقع الفلكي والجغرافي لمصر وحدودها السياسية البرية والبحرية، والأهمية الجيوسياسية لقناة السويس ودور مصر كبوابة لقارة إفريقيا.',
        'Study Egypt’s astronomical and geographic coordinates, terrestrial and maritime borders, Suez Canal geopolitical importance, and its role as Africa’s gateway.',
        'حدد على خريطة صماء لمصر إحداثيات الموقع والحدود السياسية الأربعة، واشرح أثر قناة السويس في حركة التجارة العالمية.',
        'Locate boundary coordinates and political borders on an outline map of Egypt and analyze the Suez Canal’s impact on global maritime logistics.',
        'ما المسطح المائي الذي يمثل الحد الشمالي الطبيعي لجمهورية مصر العربية؟',
        'Which body of water forms the natural northern boundary of Egypt?',
        ['البحر المتوسط', 'البحر الأحمر', 'خليج العقبة', 'بحيرة ناصر'],
        ['The Mediterranean Sea', 'The Red Sea', 'Gulf of Aqaba', 'Lake Nasser'],
        [['الموقع الفلكي', 'astronomical location'], ['الموقع الجغرافي', 'geographic location'], ['قناة السويس', 'Suez Canal']]
      ),
      lesson(
        'التكوينات الجيولوجية وعوامل تشكيل سطح مصر',
        'Geological Structure and Geomorphology of Egypt',
        'تصنيف صخور الأزمنة الجيولوجية (الآركي حتى الرابع) وأهميتها الاقتصادية، وتحديد العوامل الباطنية كالصدوع والالتواءات والخارجية كالتعرية المائية والهوائية.',
        'Classify geological periods (Archean to Quaternary) and economic mineral wealth, and identify internal faulting/folding and external water/wind erosion.',
        'ارسم جدولاً يربط كل زمن جيولوجي بنوع الصخور واستخداماتها الاقتصادية في مصر (الرخام والجرانيت، الفوسفات، الحجر الجيري، ورواسب البترول).',
        'Create a table connecting geological eras to rock types and economic applications in Egypt (granite, phosphates, limestone, petroleum).',
        'تعد تكوينات الحجر الرملي النوبي بالزمن الثاني مصدراً حيوياً لمصر لاحتوائها على خزانات ضخمة من:',
        'Nubian Sandstone formations from the Mesozoic Era serve as a vital resource in Egypt because they store:',
        ['المياه الجوفية العذبة والبترول', 'الرخام والجرانيت للزينة', 'الجبس والأسمنت فقط', 'الفحم الحجري الصلب'],
        ['Fresh groundwater aquifers and petroleum', 'Decorative granite and marble', 'Gypsum and cement only', 'Hard coal deposits'],
        [['الزمن الجيولوجي', 'geological era'], ['الحجر الرملي النوبي', 'Nubian Sandstone'], ['عوامل التعرية', 'erosion factors']]
      ),
      lesson(
        'تضاريس وادي النيل والدلتا ومنخفض الفيوم',
        'Landforms: Nile Valley, Delta, and Fayoum Depression',
        'تتبع نشأة نهر النيل ومنابعه الاستوائية والحبشية، والتعرف إلى الخصائص الطبوغرافية لوادي النيل والدلتا ومنخفض الفيوم وبحر يوسف.',
        'Trace the origins of the Nile River, its equatorial and Ethiopian sources, and topography of the Valley, Delta, and Fayoum Depression.',
        'تتبع على مجرى النيل المنابع الحبشية والاستوائية واشرح كيف يتصل منخفض الفيوم بنهر النيل جغرافياً.',
        'Trace the Ethiopian and Equatorial tributaries of the Nile and explain Fayoum’s geographic connection via Bahr Youssef.',
        'أي الروافد النهرية تمد مصر بأكبر نسبة من إيراد مياه الفيضان السنوي لنهر النيل؟',
        'Which river basin supplies the largest percentage of the Nile’s annual water yield to Egypt?',
        ['روافد هضبة الحبشة (النيل الأزرق وعطبرة والسوباط)', 'روافد هضبة البحيرات الاستوائية', 'بحر الغزال وحده', 'الأودية الجافة بالصحراء الشرقية'],
        ['Ethiopian plateau tributaries (Blue Nile, Atbara, Sobat)', 'Equatorial lake plateau tributaries', 'Bahr el Ghazal alone', 'Eastern desert dry wadis'],
        [['منابع النيل', 'Nile sources'], ['وادي النيل', 'Nile Valley'], ['منخفض الفيوم', 'Fayoum Depression']]
      ),
      lesson(
        'تضاريس الصحراء الغربية والشرقية وشبه جزيرة سيناء',
        'Topography: Western & Eastern Deserts and Sinai Peninsula',
        'مقارنة التضاريس الكبرى لمصر: الهضاب وبحر الرمال العظيم بالصحراء الغربية، سلاسل جبال البحر الأحمر بالصحراء الشرقية، والمثلث الجبلي والأودية في سيناء.',
        'Compare major regional relief: Western Desert plateaus and Great Sand Sea, Eastern Desert Red Sea ranges, and Sinai’s southern mountainous wedge.',
        'قارن بين الصحراء الغربية والشرقية من حيث وجود الواحات والمنخفضات مقابل الأودية الجافة وسلاسل الجبال الانكسارية.',
        'Contrast the Western and Eastern deserts regarding oases and depressions versus dry wadis and fault-block mountain ranges.',
        'تتميز الصحراء الغربية عن الصحراء الشرقية بوجود ظاهرة تضاريسية بارزة هي:',
        'The Western Desert is uniquely characterized compared to the Eastern Desert by the presence of:',
        ['المنخفضات الواسعة والواحات المأهولة', 'سلاسل الجبال الانكسارية الشاهقة', 'الأودية الجافة التي تنحدر نحو البحر', 'الرؤوس الأرضية والخلجان البحرية'],
        ['Expansive depressions and inhabited oases', 'Towering fault-block mountains', 'Dry wadis draining toward the sea', 'Maritime capes and bays'],
        [['الصحراء الغربية', 'Western Desert'], ['الصحراء الشرقية', 'Eastern Desert'], ['شبه جزيرة سيناء', 'Sinai Peninsula']]
      )
    ]
  },
  {
    titleAr: 'المناخ والنبات الطبيعي والحيوان البري في مصر',
    titleEn: 'Climate, Natural Vegetation, & Wildlife in Egypt',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'المناخ في مصر وفصول السنة',
        'Climate of Egypt and the Four Seasons',
        'تحليل عناصر المناخ في مصر (الحرارة والضغط الجوي والرياح والرطوبة والأمطار)، وتتبع التغيرات المناخية عبر فصول الصيف والخريف والشتاء والربيع.',
        'Analyze Egypt’s climatic elements (temperature, atmospheric pressure, winds, humidity, precipitation) and trace seasonal variations.',
        'حلل أسباب استقرار الخريف في مصر مقارنة بتقلبات الربيع ورياح الخماسين، وسجل الفروق الحرارية بين المناطق الساحلية والداخلية.',
        'Contrast Egypt’s autumn stability with spring Khamasin winds, and record temperature differences between coastal and continental zones.',
        'تعد رياح الخماسين التي تهب على مصر في فصل الربيع رياحاً محملة بـ:',
        'The spring Khamasin winds that blow across Egypt are characterized as being laden with:',
        ['الأتربة والرمال مع ارتفاع درجات الحرارة', 'الأمطار الغزيرة والثلوج', 'الرطوبة العالية والبرودة الشديدة', 'النسيم العليل والغيوم الركامية'],
        ['Dust, sand, and sharp heat spikes', 'Heavy rain and sleet', 'Extreme chill and humidity', 'Gentle breezes and cumulonimbus clouds'],
        [['رياح الخماسين', 'Khamasin winds'], ['فصول السنة', 'four seasons'], ['المدى الحراري', 'temperature range']]
      ),
      lesson(
        'الأقاليم المناخية في مصر والتغيرات المناخية',
        'Climatic Zones of Egypt and Climate Change',
        'التمييز بين الأقاليم المناخية بمصر: إقليم البحر المتوسط، شبه الصحراوي، الصحراوي، والمرتفعات، ودراسة ظاهرة الاحتباس الحراري والتغيرات المناخية.',
        'Differentiate Egyptian climate regions (Mediterranean, semi-desert, desert, mountain) and examine global warming impacts on coastlines and water.',
        'حدد خصائص كل إقليم مناخي على خريطة مصر، واقترح تدابير لمواجهة ارتفاع منسوب مياه البحر المتوسط في الدلتا.',
        'Mark each climate region on a map of Egypt and suggest protective measures against Mediterranean sea-level rise in the Nile Delta.',
        'أي الأقاليم المناخية التالية يعد الأكثر اعتدالاً وغزارة في كميات الأمطار الشتوية بمصر؟',
        'Which Egyptian climate region is the most temperate and receives the highest winter precipitation?',
        ['إقليم البحر المتوسط', 'الإقليم شبه الصحراوي', 'الإقليم الصحراوي الحار', 'إقليم المرتفعات بجنوب سيناء'],
        ['Mediterranean climate zone', 'Semi-desert zone', 'Hot arid desert zone', 'Southern Sinai highlands zone'],
        [['الأقاليم المناخية', 'climatic zones'], ['التغيرات المناخية', 'climate change'], ['الاحتباس الحراري', 'global warming']]
      ),
      lesson(
        'النبات الطبيعي والحيوان البري والمحميات الطبيعية',
        'Natural Vegetation, Wildlife, and Protected Reserves in Egypt',
        'توزيع النباتات الطبيعية والحشائش والغابات الشاطئية في الوادي والدلتا والصحاري، والتعرف إلى الحيوانات والطيور البرية وأهمية المحميات كـ (رأس محمد والبرلس).',
        'Map natural vegetation in the Nile basin, deserts, and Sinai, explore wildlife, and recognize nature reserves like Ras Muhammad and Burullus.',
        'اختر محمية طبيعية في مصر واكتب تقريراً موجزاً يوضح أهداف إنشائها ونوع التنوع الحيوي المحمي داخلها.',
        'Select an Egyptian nature reserve and write a brief report explaining its founding goals and the biodiversity protected within it.',
        'تهدف المحميات الطبيعية التي أنشأتها مصر مثل محمية رأس محمد ومحمية الزرانيق إلى:',
        'Nature reserves established in Egypt such as Ras Muhammad and Zaranik aim primarily to:',
        ['حماية التنوع الحيوي والكائنات المهددة بالانقراض والبحث العلمي', 'إقامة مشروعات التعدين الصناعية الثقيلة', 'توسيع الرقعة الزراعية المعتمدة على الري بالغمر', 'استخراج خامات الفوسفات والجرانيت'],
        ['Protect biodiversity, endangered species, and support research', 'Build heavy industrial mining plants', 'Expand flood-irrigated farmland', 'Extract phosphate and granite ores'],
        [['النبات الطبيعي', 'natural vegetation'], ['الحيوانات البرية', 'wildlife'], ['المحميات الطبيعية', 'nature reserves']]
      )
    ]
  },
  {
    titleAr: 'سكان مصر والعمران',
    titleEn: 'Population and Urbanization of Egypt',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'نمو وتركيب السكان في مصر',
        'Population Growth and Demographic Structure in Egypt',
        'دراسة تطور التعدادات السكانية بمصر، والتمييز بين الزيادة الطبيعية وغير الطبيعية (الهجرة)، وتحليل الهرم السكاني والتركيب النوعي والعمري والاقتصادي.',
        'Explore census trends, distinguish natural increase from migration, and analyze population pyramids, gender/age distributions, and workforce structure.',
        'حلل هرم مصر السكاني وحدد فئة صغار السن وفئة قوة العمل، واستنتج نسبة الإعالة الناتجة عن اتساع قاعدة الهرم.',
        'Analyze Egypt’s population pyramid, identify the young dependent base and productive labor force, and calculate the dependency ratio.',
        'تدل اتساع قاعدة الهرم السكاني في جمهورية مصر العربية على:',
        'A wide base on Egypt’s population pyramid primarily indicates:',
        ['ارتفاع نسبة صغار السن وارتفاع معدل الإعالة', 'انخفاض معدل المواليد وزيادة نسبة الشيوخ', 'نقص حاد في القوة العاملة الوطنية', 'تراجع النمو السكاني الطبيعي'],
        ['High proportion of children and high dependency ratio', 'Low birth rate and high elderly ratio', 'Severe shortage of national workforce', 'Declining natural population growth'],
        [['الهرم السكاني', 'population pyramid'], ['نسبة الإعالة', 'dependency ratio'], ['الزيادة الطبيعية', 'natural increase']]
      ),
      lesson(
        'توزيع السكان والكثافة السكانية في مصر',
        'Population Distribution and Density in Egypt',
        'تحليل التوزيع الجغرافي لسكان مصر والتركيز الشديد في الوادي والدلتا، والتمييز الجوهري بين الكثافة العامة والكثافة الحقيقية (الصافية).',
        'Analyze geographical concentration in the Nile Valley/Delta and contrast gross general density with net populated arable density.',
        'احسب الكثافة الحقيقية لمحافظة مصرية بقسمة عدد سكانها على المساحة المعمورة فعلياً، وقارنها بالكثافة الحسابية العامة.',
        'Calculate net density for an Egyptian governorate by dividing population by inhabited urban/arable area, and compare it with gross density.',
        'ما العامل الطبيعي الأكثر تأثيراً في تركز أكثر من 95% من سكان مصر في مساحة تقل عن 5% من أراضيها؟',
        'Which physical factor is most influential in concentrating over 95% of Egypt’s population in under 5% of its territory?',
        ['توافر موارد المياه العذبة وخصوبة التربة الطميية', 'غزارة سقوط الثلوج الشتوية', 'انتشار الغابات الاستوائية المطيرة', 'قرب كل المحافظات من مناجم الذهب'],
        ['Availability of freshwater resources and fertile alluvial soil', 'Heavy winter snowfall', 'Presence of tropical rain forests', 'Proximity to gold mines across all regions'],
        [['الكثافة السكانية العامة', 'gross density'], ['الكثافة الحقيقية المعمورة', 'net density'], ['التوزيع الجغرافي', 'geographic distribution']]
      ),
      lesson(
        'المشكلة السكانية والحلول التنموية في مصر',
        'The Population Problem and Developmental Solutions in Egypt',
        'تشخيص أبعاد المشكلة السكانية بمصر (عدم التوازن بين السكان والموارد، سوء التوزيع، والآثار كالأمية والبطالة والعشوائيات)، واستعراض الحلول القومية.',
        'Diagnose dimensions of the population challenge (resources mismatch, maldistribution, slums, unemployment) and review national development plans.',
        'اقترح ثلاثة حلول تنموية واقعية لامتصاص التكدس السكاني عبر المدن الذكية الجديدة ومشروعات الاستصلاح بالصحراء المصرية.',
        'Formulate three practical development solutions to absorb population congestion via new smart cities and desert reclamation.',
        'من الحلول الاستراتيجية الفعالة التي تنفذها مصر لإعادة توزيع السكان والحد من التكدس العمراني بالوادي والدلتا:',
        'Among the effective strategic solutions Egypt is executing to redistribute population and curb Nile Valley overcrowding:',
        ['إنشاء المدن الجديدة وتطوير مشروعات الاستصلاح الزراعي والصناعي بالصحاري', 'حصر كل السكان داخل حدود المحافظات التقليدية القديمة', 'وقف حركة النقل والمواصلات بين المحافظات', 'إلغاء التعليم الفني والمهني'],
        ['Building new smart cities and industrial/agricultural desert megaprojects', 'Confining all citizens inside traditional old governorate borders', 'Stopping inter-governorate transit routes', 'Canceling technical and vocational education'],
        [['المشكلة السكانية', 'population problem'], ['المدن الجديدة', 'new smart cities'], ['التنمية المستدامة', 'sustainable development']]
      )
    ]
  },
  {
    titleAr: 'الأنشطة الاقتصادية في مصر',
    titleEn: 'Economic Activities in Egypt',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'النشاط الزراعي والثروة الحيوانية والسمكية في مصر',
        'Agricultural, Livestock, and Fishery Production in Egypt',
        'دراسة العوامل المؤثرة في الزراعة المصرية، وشبكات الري والصرف، والمحاصيل الاستراتيجية (القمح والأرز والقطن والقصب)، وتنمية الإنتاج الحيواني والسمكي.',
        'Study factors influencing Egyptian farming, irrigation/drainage infrastructure, staple crops (wheat, rice, cotton, sugarcane), and fishery resources.',
        'قارن بين المساحة الزراعية والمساحة المحصولية في مصر، واشرح كيف تساهم مشروعات الصوب الحديثة والاستزراع السمكي في سد الفجوة الغذائية.',
        'Compare actual farmland area with cropped crop area, and examine how modern greenhouse projects and aquaculture address the food gap.',
        'ما الفرق بين المساحة الزراعية والمساحة المحصولية في مصر؟',
        'What is the difference between agricultural land area and cropped area in Egypt?',
        ['المساحة الزراعية هي الرقعة الفعلية بينما المحصولية هي مجموع مساحات المحاصيل في كافة المواسم الزراعية', 'المساحة المحصولية أكبر دائماً من مساحة مصر الإجمالية', 'لا يوجد أي فرق بين المصطلحين في الجغرافيا', 'المساحة الزراعية تخص الأراضي الصحراء فقط'],
        ['Agricultural area is actual arable acreage while cropped area counts all seasonal harvest cycles', 'Cropped area always exceeds Egypt’s total national land area', 'There is no distinction between the two concepts in geography', 'Agricultural area refers only to desert reclamation lands'],
        [['المساحة الزراعية', 'agricultural area'], ['المساحة المحصولية', 'cropped area'], ['الأمن الغذائي', 'food security']]
      ),
      lesson(
        'النشاط التعديني والصناعي ومصادر الطاقة في مصر',
        'Mining, Energy Resources, and Industrial Manufacturing in Egypt',
        'استكشاف حقول البترول والغاز الطبيعي ومصادر الطاقة المتجددة (الطاقة الشمسية وطاقة الرياح)، وتوزيع خامات الحديد والفوسفات والمنجنيز، ومقومات الصناعة المصرية.',
        'Survey oil/gas fields and renewable power (solar at Benban, wind at Zafarana), mineral distributions, and industrial manufacturing drivers.',
        'حدد على خريطة التعدين في مصر أهم حقول الغاز الطبيعي (حقل ظهر) والبترول، ومحطات الطاقة المتجددة الكبرى كبنبان والزعفرانة.',
        'Locate major energy assets on an Egyptian mining map (Zohr gas field, Gulf of Suez oil, and Benban/Zafarana renewable plants).',
        'يعد مشروع مجمع بنبان بمحافظة أسوان في صعيد مصر صرحاً عالمياً رائداً في توليد الطاقة من:',
        'The Benban complex in Aswan, Upper Egypt, is a world-class pioneering project generating power from:',
        ['الإشعاع الشمسي (الطاقة الشمسية)', 'الفحم الحجري المستورد', 'المفاعلات الحرارية الثقيلة', 'الأمواج وحركات المد البحري'],
        ['Solar radiation (solar energy)', 'Imported coal fuels', 'Heavy thermal fission plants', 'Ocean tidal surge currents'],
        [['حقل ظهر', 'Zohr gas field'], ['مجمع بنبان', 'Benban solar park'], ['الصناعات التحويلية', 'manufacturing industries']]
      ),
      lesson(
        'النقل والمواصلات والتجارة والسياحة في مصر',
        'Transportation, Logistics, Trade, and Tourism in Egypt',
        'تحليل شبكات النقل البري والسككي والنهري وقناة السويس والموانئ، وتطور الميزان التجاري، ومقومات الجذب السياحي وأنواع السياحة (الثقافية، الشاطئية، والعلاجية).',
        'Analyze road, rail, river, and maritime logistics, the national trade balance, and tourism drivers (cultural heritage, Red Sea beaches, ecotourism).',
        'صمم مساراً سياحياً ولوجستياً يربط المتحف المصري الكبير بالأهرامات وموانئ البحر المتوسط وقناة السويس.',
        'Design a tourism and logistics itinerary connecting the Grand Egyptian Museum and Giza Pyramids to Mediterranean ports and the Suez Canal.',
        'تعد قناة السويس الشريان الملاحي الأهم في التجارة العالمية لكونها:',
        'The Suez Canal serves as the most pivotal maritime corridor in global trade because it:',
        ['توفر أقصر طريق بحري ملاحي يربط بين الشرق والغرب وتستوعب سفن الحاويات العملاقة', 'تقتصر فقط على السفن السياحية الشراعية الصغيرة', 'تربط نهري الدجلة والفرات بالبحر الميت', 'تغلق أبوابها طوال فصل الشتاء لأسباب مناخية'],
        ['Offers the shortest maritime passage connecting East and West, hosting mega-container vessels', 'Restricts access solely to small leisure sailcraft', 'Connects Tigris and Euphrates to the Dead Sea', 'Shuts down completely during winter for seasonal weather'],
        [['قناة السويس', 'Suez Canal'], ['الميزان التجاري', 'trade balance'], ['السياحة الثقافية', 'cultural tourism']]
      )
    ]
  }
];

const egyptNationalEducationUnits: UnitPlan[] = [
  {
    titleAr: 'الشخصية المصرية وبناء المواطنة',
    titleEn: 'Egyptian Identity and Building Citizenship',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'الشخصية المصرية عبر التاريخ وسماتها الحضارية',
        'The Egyptian Personality Throughout History',
        'دراسة العوامل الجغرافية والتاريخية التي شكلت الشخصية المصرية، وسمات المصري الأصيلة كالتدين والتسامح والعدل والوطنية عبر مختلف العصور الحضارية.',
        'Explore geographic and historical foundations shaping Egyptian identity, and authentic traits such as faith, tolerance, justice, and civic patriotism.',
        'اكتب فقرة تحليلية توضح كيف أسهم نهر النيل في غرس قيم التعاون والصبر والوحدة الوطنية لدى المجتمع المصري القديم والحديث.',
        'Write an analytical paragraph detailing how the Nile fostered cooperation, perseverance, and national cohesion in ancient and modern Egypt.',
        'من أبرز السمات الأصيلة للشخصية المصرية التي رسخها استقرار الحضارة حول وادي النيل:',
        'Among the most salient authentic traits of Egyptian character fostered by Nile civilization stability:',
        ['التسامح والتدين والوحدة والارتباط بالأرض والوطن', 'الانعزال التام عن العالم ورفض العلم', 'الترحال الدائم وعدم الاستقرار في مكان', 'إهمال العمل الجماعي والتنظيم المجتمعي'],
        ['Tolerance, faith, unity, and deep attachment to homeland', 'Total isolationism and rejection of science', 'Constant nomadic wandering without permanent settlement', 'Disregard for communal work and societal order'],
        [['الشخصية المصرية', 'Egyptian character'], ['الوحدة الوطنية', 'national cohesion'], ['الهوية الثقافية', 'cultural identity']]
      ),
      lesson(
        'مفهوم المواطنة وواجبات وحقوق المواطن',
        'Concept of Citizenship, Citizen Rights, and Responsibilities',
        'تحديد مفهوم المواطنة وأبعادها (القانونية والسياسية والاجتماعية والاقتصادية)، والموازنة بين الحقوق المدنية والسياسية والواجبات الدستورية تجاه الوطن.',
        'Define citizenship and its legal, political, social, and economic dimensions, balancing civil/political rights with constitutional civic duties.',
        'صمم جدولاً يقارن بين حقوق المواطن التي يكفلها الدستور المصري وواجباته الوطنية، واذكر مثالاً على ممارسة المواطنة الصالحة في البيئة المدرسية.',
        'Create a table balancing constitutionally guaranteed citizen rights with civic duties, providing a practical example of good school citizenship.',
        'يقصد بالمواطنة في الدولة الدستورية الحديثة:',
        'In a modern constitutional state, citizenship means:',
        ['علاقة قانونية وسياسية متبادلة بين الفرد والدولة تتضمن حقوقاً دستورية وواجبات وطنية متساوية', 'الإقامة المؤقتة داخل حدود الدولة لغرض التجارة فقط', 'التمتع بالحقوق فقط دون تحمل أي التزامات أو واجبات', 'التمييز بين الأفراد وفق المكانة الاجتماعية والطبقية'],
        ['A mutual legal/political bond between individual and state guaranteeing equal rights and duties', 'Temporary border residency solely for commercial barter', 'Enjoying rights while rejecting any legal or civic responsibilities', 'Discrimination between citizens based on social or class distinctions'],
        [['المواطنة', 'citizenship'], ['الحقوق المدنية', 'civil rights'], ['الواجبات الدستورية', 'constitutional duties']]
      )
    ]
  },
  {
    titleAr: 'الدستور والقانون وسيادة الدولة',
    titleEn: 'Constitution, Law, and the Rule of Law',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'نشأة وتطور الدستور المصري وأهميته',
        'Evolution and Significance of the Egyptian Constitution',
        'تتبع نشأة وتطور القواعد الدستورية في مصر، وأهمية الدستور بوصفه القانون الأسمى في الدولة، والمبادئ الأساسية لدستور جمهورية مصر العربية.',
        'Trace the constitutional history of Egypt, recognize the constitution as the supreme law of the land, and explore core principles of Egypt’s constitution.',
        'لخص المراحل التاريخية لتطور الدساتير المصرية الحديثة، واشرح لماذا يعد الدستور قمة الهرم التشريعي في النظام القانوني.',
        'Summarize the historical evolution of modern Egyptian constitutions, explaining why the constitution tops the national legislative hierarchy.',
        'يعد الدستور في أي دولة قانونية حديثة هو:',
        'In any modern rule-of-law state, the constitution represents:',
        ['القانون الأسمى والأعلى الذي يحدد نظام الحكم وشكل الدولة ويضمن الحقوق والحريات', 'مجموعة لوائح إدارية داخلية خاصة بوزارة واحدة فقط', 'قرارات وقتية تنتهي صلاحيتها بانتهاء كل شهر', 'نصوص غير ملزمة للمؤسسات والأفراد'],
        ['The supreme law establishing the system of government and guaranteeing rights and liberties', 'A collection of internal ministerial administrative bylaws', 'Temporary notices that expire at the end of each month', 'Non-binding guidelines for institutions and individuals'],
        [['الدستور', 'constitution'], ['القانون الأسمى', 'supreme law'], ['فصل السلطات', 'separation of powers']]
      ),
      lesson(
        'سيادة القانون ودولة المؤسسات والعدالة',
        'Rule of Law, Institutional Governance, and Justice',
        'دراسة مبدأ سيادة القانون وخضوع الجميع لأحكامه، واستقلال القضاء، والفصل المرن بين السلطات الثلاث (التشريعية والتنفيذية والقضائية).',
        'Examine the rule of law, equality before the courts, judicial independence, and functional separation between legislative, executive, and judicial branches.',
        'ارسم مخططاً يوضح السلطات الدستورية الثلاث في مصر، ودور كل سلطة في حماية استقرار الوطن وحقوق المواطنين.',
        'Diagram the three constitutional authorities in Egypt and the functional role of each branch in protecting stability and justice.',
        'يتحقق مبدأ سيادة القانون في المجتمع عندما:',
        'The principle of the rule of law is fully realized when:',
        ['يخضع جميع الأفراد ومؤسسات الدولة دون استثناء لأحكام القانون وقضائه المستقل', 'يُعفى بعض المسؤولين من الالتزام بالقواعد المنظمة', 'تتولى سلطة واحدة جميع مهام التشريع والتنفيذ والقضاء معاً', 'تتغير القوانين يومياً دون استقرار أو إعلان رسمي'],
        ['All individuals and state authorities are equally accountable before independent courts', 'Certain officials are permanently exempt from legal rules', 'A single entity controls legislation, enforcement, and adjudication simultaneously', 'Laws fluctuate unpredictably on a daily basis without formal gazette notice'],
        [['سيادة القانون', 'rule of law'], ['استقلال القضاء', 'judicial independence'], ['دولة المؤسسات', 'institutional state']]
      )
    ]
  },
  {
    titleAr: 'الديمقراطية والمشاركة السياسية وحقوق الإنسان',
    titleEn: 'Democracy, Civic Participation, and Human Rights',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'مفهوم الديمقراطية ومبادئ المشاركة الإيجابية',
        'Concept of Democracy and Principles of Civic Participation',
        'فهم الديمقراطية ومقوماتها الأساسية كالتعددية والتداول السلمي والتعبير المسؤول، وأهمية المشاركة السياسية الواعية في الانتخابات وبناء المستقبل.',
        'Understand democratic governance, pluralism, peaceful transfer of authority, responsible expression, and active electoral participation.',
        'ناقش كيف تساهم المشاركة الإيجابية للشباب في الاستحقاقات الوطنية في ترسيخ مسيرة التنمية والتحديث في مصر.',
        'Discuss how positive youth engagement in civic processes supports sustainable national modernization in Egypt.',
        'تعد المشاركة الإيجابية في الانتخابات العامة والاستفتاءات الدستورية دليلاً على:',
        'Positive participation in general elections and constitutional referendums demonstrates:',
        ['النضج السياسي والوعي الوطني والشعور بالمسؤولية المجتمعية', 'عدم الاهتمام بالشأن العام ومستقبل الوطن', 'الخوف من المساءلة الشخصية فقط', 'السعي لتحقيق مصالح فردية ضيقة'],
        ['Political maturity, civic awareness, and societal responsibility', 'Apathy toward public welfare and national progress', 'Personal fear of administrative penalties', 'Narrow self-interest detached from the common good'],
        [['الديمقراطية', 'democracy'], ['المشاركة السياسية', 'civic participation'], ['التعددية', 'pluralism']]
      ),
      lesson(
        'تمكين الشباب والاستراتيجية الوطنية لحقوق الإنسان',
        'Youth Empowerment and the National Human Rights Strategy',
        'استعراض أهداف الاستراتيجية الوطنية لحقوق الإنسان بمصر، وحقوق المرأة والطفل وذوي الهمم، ودور القيادات الشبابية في التنمية وبناء الجمهورية الجديدة.',
        'Review Egypt’s National Human Rights Strategy goals, rights of women, children, and persons with disabilities, and youth leadership in national projects.',
        'اكتب ثلاث مبادرات شبابية مجتمعية تسهم في دعم الفئات الأكثر احتياجاً ورعاية البيئة ونشر الوعي بحقوق الإنسان.',
        'Propose three youth-led community initiatives to support vulnerable groups, environmental protection, and human rights literacy.',
        'ترتكز الاستراتيجية الوطنية الشاملة لحقوق الإنسان في مصر على مسارات متكاملة تشمل:',
        'Egypt’s comprehensive National Human Rights Strategy is built upon integrated pillars that encompass:',
        ['الحقوق المدنية والسياسية والاقتصادية والاجتماعية والثقافية وحقوق المرأة والشباب', 'التركيز على الجانب الاقتصادي فقط مع إهمال التعليم والصحة', 'استثناء فئات المجتمع من برامج التأهيل والتمكين', 'قصر الحقوق على المقيمين في العواصم الكبرى دون سائر المحافظات'],
        ['Civil, political, economic, social, cultural rights, alongside women and youth empowerment', 'Sole focus on commercial profit while neglecting health and schooling', 'Excluding demographic groups from developmental empowerment', 'Restricting human rights to metropolitan capitals only'],
        [['حقوق الإنسان', 'human rights'], ['تمكين الشباب', 'youth empowerment'], ['الاستراتيجية الوطنية', 'national strategy']]
      )
    ]
  }
];

const egyptPhysicsUnits: UnitPlan[] = [
  {
    titleAr: 'القياس الفيزيائي والكميات الفيزيائية',
    titleEn: 'Physical Measurement and Physical Quantities',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'عناصر القياس الفيزيائي والوحدات المعيارية وصيغة الأبعاد',
        'Physical Measurement, Standard Units, and Dimensional Formulae',
        'التمييز بين الكميات الأساسية والمشتقة، واستخدام أدوات القياس كالقدمة ذات الورنية والميكرومتر، ومعايير النظام الدولي للوحدات SI، والتحقق من صحة القوانين بصيغة الأبعاد.',
        'Distinguish fundamental and derived quantities, use vernier calipers/micrometers, apply SI units, and test equation validity using dimensional analysis.',
        'استنتج صيغة الأبعاد لكمية كمية التحرك أو القوة، واختبر صحة معادلة فيزيائية معطاة.',
        'Derive the dimensional formula for momentum or force, and test the dimensional homogeneity of a physical equation.',
        'أي من الكميات الفيزيائية التالية تعد كمية فيزيائية أساسية في النظام الدولي للوحدات؟',
        'Which of the following physical quantities is a fundamental SI base quantity?',
        ['الكتلة بالكيلوجرام (kg)', 'السرعة بالمتر لكل ثانية (m/s)', 'القوة بالنيوتن (N)', 'الشغل بالجول (J)'],
        ['Mass in kilograms (kg)', 'Velocity in meters per second (m/s)', 'Force in newtons (N)', 'Work in joules (J)'],
        [['الكميات الأساسية', 'fundamental quantities'], ['صيغة الأبعاد', 'dimensional formula'], ['القدمة ذات الورنية', 'vernier caliper']]
      ),
      lesson(
        'الخطأ في القياس والكميات القياسية والمتجهة',
        'Measurement Errors and Scalar versus Vector Quantities',
        'حساب الخطأ المطلق Δx والخطأ النسبي r في القياس المباشر وغير المباشر، والتمييز بين الكميات القياسية والمتجهة، ومحصلة المتجهات والضرب القياسي والاتجاهي.',
        'Calculate absolute error Δx and relative error r in direct/indirect measurements, compare scalar/vector quantities, and compute dot/cross vector products.',
        'احسب الخطأ النسبي والمطلق لقياس مساحة مستطيل أبعاده مقاسة بنسب خطأ محددة، واشرح لماذا يعد الخطأ النسبي أدق للحكم على جودة القياس.',
        'Calculate relative and absolute errors for a rectangle area calculation, explaining why relative error is more indicative of measurement precision.',
        'لماذا يعد حساب الخطأ النسبي أدق من الخطأ المطلق في الحكم على كفاءة عملية القياس الفيزيائي؟',
        'Why is relative error considered a more precise criterion than absolute error for evaluating measurement accuracy?',
        ['لأنه يقيس نسبة الخطأ مقارنة بالقيمة الحقيقية للمقدار المقاس', 'لأنه دائماً يساوي صفراً في كل القياسات', 'لأنه يقاس بوحدات الجول والنيوتن فقط', 'لأنه لا يرتبط بالقيمة الحقيقية إطلاقاً'],
        ['Because it evaluates error relative to the true magnitude of the measured quantity', 'Because it always equals zero in every measurement', 'Because it is measured solely in joules and newtons', 'Because it has no correlation with the true value'],
        [['الخطأ المطلق', 'absolute error'], ['الخطأ النسبي', 'relative error'], ['الضرب الاتجاهي', 'vector cross product']]
      )
    ]
  },
  {
    titleAr: 'الحركة الخطية وقوانين نيوتن',
    titleEn: 'Linear Motion and Newton Laws of Motion',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'الحركة في خط مستقيم والسرعة والعجلة',
        'Straight-Line Motion, Velocity, and Acceleration',
        'التمييز بين المسافة والإزاحة، والسرعة العددية والمتجهة واللحظية والمتوسطة، ومفهوم العجلة المنتظمة وحساب ميل منحنيات (الموقع-الزمن) و(السرعة-الزمن).',
        'Contrast distance and displacement, scalar speed and vector velocity, instantaneous and average values, and compute uniform acceleration from slopes.',
        'ارسم منحنى (السرعة-الزمن) لسيارة تتحرك بعجلة موجبة ثم سرعة منتظمة ثم تتباطأ حتى تتوقف، واحسب المسافة الكلية من المساحة تحت المنحنى.',
        'Plot a velocity-time graph for a car accelerating uniformly, cruising, and braking to a stop, calculating total displacement from the area under the curve.',
        'ما الكمية الفيزيائية التي يمثلها ميل المماس لمنحنى (الإزاحة - الزمن) عند لحظة معينة؟',
        'What physical quantity is represented by the slope of the tangent to a displacement-time graph at a specific instant?',
        ['السرعة المتجهة اللحظية', 'العجلة المتوسطة', 'المسافة الكلية المقطوعة', 'الكتلة القاصرة للجسم'],
        ['Instantaneous vector velocity', 'Average acceleration', 'Total distance covered', 'Inertial mass of the object'],
        [['السرعة اللحظية', 'instantaneous velocity'], ['العجلة المنتظمة', 'uniform acceleration'], ['الإزاحة', 'displacement']]
      ),
      lesson(
        'معادلات الحركة بعجلة منتظمة والسقوط الحر',
        'Uniform Acceleration Equations of Motion and Free Fall',
        'اشتقاق وتطبيق معادلات الحركة الثلاث لجسم يتحرك في خط مستقيم بعجلة منتظمة، وتحليل حركة السقوط الحر للأجسام تحت تأثير عجلة الجاذبية الأرضية g.',
        'Derive and apply the three kinematic equations for uniform linear acceleration, analyzing free fall under gravitational acceleration g.',
        'حل مسألة سقوط جسم من ارتفاع مبنى بدون سرعة ابتدائية، واحسب سرعته لحظة ملامسة الأرض وزمن وصوله باستخدام معادلات الحركة.',
        'Solve a free-fall problem for an object dropped from a tower, finding its terminal velocity upon ground contact and flight time.',
        'عند سقوط جسم سقوطاً حراً بإهمال مقاومة الهواء، فإن سرعته تتزايد بانتظام بمعدل يساوي:',
        'When an object falls freely in a vacuum, its velocity increases uniformly at a rate equal to:',
        ['عجلة الجاذبية الأرضية (g ≈ 9.8 m/s²)', 'الصفر المطلق طوال مدة السقوط', 'مربع المسافة المقطوعة', 'نصف سرعته الابتدائية'],
        ['Gravitational acceleration (g ≈ 9.8 m/s²)', 'Absolute zero throughout the entire fall', 'The square of the distance fallen', 'Half its initial starting speed'],
        [['معادلات الحركة', 'equations of motion'], ['السقوط الحر', 'free fall'], ['عجلة الجاذبية', 'gravitational acceleration']]
      ),
      lesson(
        'حركة المقذوفات وقوانين نيوتن للحركة',
        'Projectile Motion and Newton Laws of Dynamics',
        'تحليل حركة المقذوفات بزاوية إلى مركبتين أفقية ورأسية، وحساب أقصى ارتفاع والمدى الأفقي، واستيعاب قوانين نيوتن الثلاثة ومفهوم القصور الذاتي.',
        'Decompose angled projectile motion into horizontal and vertical components, computing peak height and horizontal range, and master Newton’s three laws of dynamics.',
        'حلل حركة مقذوف أُطلق بزاوية 45°، واستنتج العلاقة بين زاوية الإطلاق والمدى الأفقي الأقصى، وفسر قانون نيوتن الثالث في ارتداد المدفع عند الإطلاق.',
        'Analyze a projectile launched at 45°, explaining range optimization and applying Newton’s third law to cannon recoil reactions.',
        'ينص قانون نيوتن الأول على بقاء الجسم الساكن ساكناً والمتحرك بسرعة منتظمة في خط مستقيم ما لم:',
        'Newton’s First Law states that a body remains at rest or in uniform straight-line motion unless:',
        ['تؤثر عليه قوة محصلة خارجية تغير من حالته', 'تتساوى كتلته مع وزنه تماماً', 'تصل سرعته إلى سرعة الضوء', 'تنعدم مادة الجسم في الفضاء'],
        ['An external net resultant force acts upon it to change its state', 'Its mass becomes exactly equal to its weight', 'Its speed reaches the speed of light', 'The physical matter of the object ceases to exist in space'],
        [['حركة المقذوفات', 'projectile motion'], ['قانون نيوتن الأول', 'Newton first law'], ['القصور الذاتي', 'inertia']]
      )
    ]
  }
];

const egyptChemistryUnits: UnitPlan[] = [
  {
    titleAr: 'الكيمياء مركز العلوم وكيمياء النانو',
    titleEn: 'Chemistry the Central Science and Nanochemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'الكيمياء والقياس وأدوات المعمل الكيميائي',
        'Chemistry, Measurement, and Laboratory Equipment',
        'التعرف إلى فروع الكيمياء وتكاملها مع الفيزياء والبيولوجيا والطب والزراعة، واستخدامات أدوات المعمل كالمخبار والسحاحة والماصة والدوارق ومقياس الرقم الهيدروجيني pH.',
        'Explore chemical branches, integration with physics/biology/medicine/agriculture, and lab tools like graduated cylinders, burettes, pipettes, flasks, and pH meters.',
        'حدد الأداة المعملية الدقيقة المناسبة لكل من: تعيين حجم سائل بدقة، قياس كثافة جسم صلب غير منتظم، وإجراء عملية المعايرة الحجمية.',
        'Identify appropriate apparatus for precise liquid volume measurement, finding irregular solid density, and running titration assays.',
        'تستخدم السحاحة في معمل الكيمياء كأداة أساسية في إجراء تجارب:',
        'A burette is utilized in chemical laboratories as the primary apparatus for conducting experiments of:',
        ['المعايرة لتعيين تركيز محلول بدقة متناهية', 'تسخين المحاليل شديدة الاشتعال مباشرة باللهب', 'حفظ العينات الصلبة الجافة طوال العام', 'طحن المواد البلورية الصلبة إلى مسحوق ناعم'],
        ['Titration to determine solution concentrations with extreme accuracy', 'Heating flammable organic solvents directly over open flames', 'Storing dry solid specimens long term', 'Grinding crystalline rocks into fine powders'],
        [['علم الكيمياء', 'chemistry science'], ['أدوات المعمل', 'laboratory equipment'], ['المعايرة', 'titration']]
      ),
      lesson(
        'كيمياء النانو وتكنولوجيا المواد الفائقة',
        'Nanochemistry and Advanced Nanomaterials Technology',
        'استيعاب مقياس النانو والحجم النانوي الحرج والخواص الفائقة للمواد، والتمييز بين المواد أحادية البعد (كالأغشية الرقيقة) وثنائية البعد (أنابيب الكربون) وثلاثية البعد (كرات البوكي).',
        'Master the nanoscale and critical dimension thresholds, contrasting 1D thin films, 2D carbon nanotubes, and 3D buckyballs/nanoshells for medicine.',
        'قارن بين أنابيب الكربون النانوية والمعادن التقليدية في التوصيل الكهربائي والحراري والصلابة وخفة الوزن، وناقش تطبيقات النانو في علاج الأورام السرطانية.',
        'Compare carbon nanotubes with traditional metals in conductivity, strength, and lightweight structure, exploring targeted cancer drug delivery.',
        'تتميز المواد النانوية بظهور خواص فريدة وفائقة (كالتغير اللوني للذهب الفائق وزيادة التوصيل والصلابة) نتيجة لـ:',
        'Nanomaterials exhibit novel superior properties (such as color shifts in gold and enhanced conductivity) primarily due to:',
        ['الزيادة الكبيرة جداً في النسبة بين مساحة السطح إلى الحجم', 'زيادة كتلة الذرات المكونة للمادة بشكل مفاجئ', 'فقدان المادة لكل إلكتروناتها الداخلية', 'تحول المادة إلى غاز خامل كيميائياً'],
        ['The massive increase in the surface area to volume ratio', 'A sudden increase in the atomic mass of constituent elements', 'The total loss of all core electron shells', 'The complete transformation of matter into an inert noble gas'],
        [['كيمياء النانو', 'nanochemistry'], ['أنابيب الكربون النانوية', 'carbon nanotubes'], ['كرات البوكي', 'buckyballs']]
      )
    ]
  },
  {
    titleAr: 'الكيمياء الكمية والمول والحساب الكيميائي',
    titleEn: 'Quantitative Chemistry, The Mole, and Stoichiometry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'المول والمعادلة الكيميائية الموزونة والكتلة المولية',
        'The Mole, Balanced Chemical Equations, and Molar Mass',
        'كتابة وموازنة المعادلات الكيميائية والأيونية، ومفهوم المول كوحدة لكمية المادة وكتلته الجرامية (الكتلة المولية)، وحساب كتلة المواد المتفاعلة والناتجة.',
        'Write and balance chemical/ionic equations, master the mole as the unit of substance, calculate molar masses, and determine reactant/product yields.',
        'اكتب معادلة تفاعل هيدروكسيد الصوديوم مع حمض الهيدروكلوريك بالصيغة الرمزية والأيونية النهائية، واحسب كتلة ملح الطعام الناتجة من تفاعل مول واحد.',
        'Write balanced molecular and net ionic equations for NaOH + HCl, and calculate the mass of NaCl produced from one mole of reactants.',
        'ما المعنى الدقيق لمصطلح «الكتلة المولية» لمادة كيميائية نقية؟',
        'What is the precise definition of the term “molar mass” for a pure chemical substance?',
        ['مجموع الكتل الذرية للذرات المكونة للجزيء أو وحدة الصيغة معبراً عنها بالجرامات', 'كتلة لتر واحد من الماء المقطر عند درجة الغليان', 'حجم الغاز المنبعث من تفاعل كيميائي في الدقيقة', 'عدد البروتونات في نواة ذرة عنصر الأكسجين'],
        ['The sum of atomic masses in a molecule or formula unit expressed in grams', 'The mass of one liter of pure water at boiling point', 'The volume of gas evolved per minute from a reaction', 'The number of protons inside an oxygen nucleus'],
        [['المول', 'the mole'], ['الكتلة المولية', 'molar mass'], ['المعادلة الأيونية', 'ionic equation']]
      ),
      lesson(
        'المول وحجم الغاز وعدد أفوجادرو والنسب المئوية',
        'The Mole, Gas Volume, Avogadro Hypothesis, and Percentage Composition',
        'تطبيق عدد أفوجادرو (6.02 × 10²³)، وحساب حجم الغاز عند معدل الضغط ودرجة الحرارة (STP = 22.4 لتر)، وتحديد المادة المحددة للتفاعل والصيغ الأولية والجزيئية.',
        'Apply Avogadro’s number (6.02 × 10²³), compute gas volumes at STP (22.4 L/mol), identify limiting reagents, and calculate empirical and molecular formulae.',
        'احسب عدد الجزيئات وحجم الغاز في 44 جراماً من غاز ثاني أكسيد الكربون CO₂ عند م.ض.د (STP)، ثم احسب النسبة المئوية لعنصر الكربون فيه.',
        'Calculate molecules and volume for 44 g of CO₂ at STP, determining the carbon mass percentage in the compound.',
        'يشغل مول واحد من أي غاز مثالي في الظروف القياسية من الضغط ودرجة الحرارة (STP) حجماً ثابتاً مقداره:',
        'One mole of any ideal gas under standard temperature and pressure (STP) occupies a constant volume of:',
        ['22.4 لتراً', '10.5 لترات', '100 لتر', '1.0 لتر فقط'],
        ['22.4 liters', '10.5 liters', '100 liters', '1.0 liter only'],
        [['عدد أفوجادرو', 'Avogadro number'], ['الظروف القياسية STP', 'STP conditions'], ['العامل المحدد للتفاعل', 'limiting reagent']]
      )
    ]
  }
];

const egyptBiologyUnits: UnitPlan[] = [
  {
    titleAr: 'الأساس الكيميائي للحياة: الجزيئات البيولوجية الكبيرة',
    titleEn: 'Chemical Basis of Life: Biological Macromolecules',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'الكربوهيدرات والليپيدات في الكائنات الحية',
        'Carbohydrates and Lipids in Living Organisms',
        'دراسة التركيب الجزيئي للسكريات الأحادية والثنائية والمعقدة ودورها كمصدر سريع للطاقة، والتمييز بين الليپيدات البسيطة والمعقدة والمشتقة والكواشف الكيميائية.',
        'Study monosaccharides, disaccharides, and polysaccharides as energy sources, contrasting simple, complex, and derived lipids with Benedict and Sudan reagents.',
        'قارن بين النشا والجليكوجين والسليلوز من حيث أماكن التخزين والوظيفة البيولوجية، واشرح كيف يكشف محلول بندكت عن السكريات الأحادية في المعمل.',
        'Compare starch, glycogen, and cellulose storage and biological function, explaining how Benedict’s test detects reducing sugars.',
        'تعد الكربوهيدرات المصدر الأساسي والسريع للحصول على الطاقة في الخلية الحية لأنها:',
        'Carbohydrates serve as the primary rapid energy source in living cells because they:',
        ['تتحلل بيولوجياً بسرعة لتكوين جزيئات ATP اللازمة لكافة الأنشطة الخلوية', 'تحتوي على ذرات النيتروجين والحديد بكميات ضخمة', 'لا يمكن إذابتها في الماء إطلاقاً تحت أي ظرف', 'تستخدم فقط لبناء الجدران العظمية في الحيوان'],
        ['Are broken down rapidly to yield ATP molecules required for all cellular activities', 'Contain vast quantities of nitrogen and iron atoms', 'Cannot dissolve in aqueous solvents under any circumstances', 'Are strictly utilized to construct animal skeletal bones'],
        [['الكربوهيدرات', 'carbohydrates'], ['الليپيدات', 'lipids'], ['جزيئات ATP', 'ATP molecules']]
      ),
      lesson(
        'البروتينات والأحماض النووية DNA و RNA',
        'Proteins and Nucleic Acids: DNA and RNA',
        'استيعاب تركيب الأحماض الأمينية وتكوين الروابط الببتيدية وسلاسل عديد الببتيد، ومقارنة تركيب ووظيفة الأحماض النووية DNA و RNA في نقل الشفرة الوراثية وتخليق البروتينات.',
        'Understand amino acid structure, peptide bonds, and polypeptide chains, comparing DNA and RNA structure/function in genetic coding and protein biosynthesis.',
        'قارن في جدول بين DNA و RNA من حيث: نوع السكر الخماسي، القواعد النيتروجينية، عدد الأشرطة، والموقع في الخلية ووظيفته الحيوية.',
        'Create a table comparing DNA and RNA in pentose sugars, nitrogenous bases, strandedness, cellular location, and biological function.',
        'تتكون الأحماض النووية (DNA و RNA) من وحدات بنائية متكررة تسمى:',
        'Nucleic acids (DNA and RNA) are composed of repeating monomer subunits called:',
        ['النيوكليوتيدات', 'الأحماض الدهنية والجليسرول', 'الأحماض الأمينية فقط', 'السكريات الثنائية الحلقية'],
        ['Nucleotides', 'Fatty acids and glycerol', 'Amino acids only', 'Cyclic disaccharide sugars'],
        [['البروتينات', 'proteins'], ['الأحماض النووية', 'nucleic acids'], ['النيوكليوتيدة', 'nucleotide']]
      ),
      lesson(
        'الإنزيمات والتفاعلات الكيميائية الحيوية والأيض',
        'Enzymes, Biochemical Reactions, and Metabolism',
        'دراسة عمليات التمثيل الغذائي (الأيض: الهدم والبناء)، ودور الإنزيمات كعوامل مساعدة حيوية متخصصة تخفض طاقة التنشيط، والعوامل المؤثرة على نشاط الإنزيم (الحرارة و pH).',
        'Study metabolism (catabolism and anabolism), enzymes as specific biocatalysts lowering activation energy, and factors affecting enzyme activity (temperature and pH).',
        'فسر لماذا يتوقف عمل الإنزيم تماماً عند رفع درجة الحرارة فوق الحد المميت، بينما يثبط نشاطه فقط عند التبريد ويمكن أن يعود للعمل بالتدفئة.',
        'Explain why enzymes denature irreversibly at high temperatures while chilling reversibly inactivates them.',
        'تعمل الإنزيمات داخل الخلايا الحية على تسريع معدل التفاعلات الحيوية عن طريق:',
        'Enzymes inside living cells accelerate the rate of biochemical reactions by:',
        ['تقليل طاقة التنشيط اللازمة لبدء التفاعل الكيميائي', 'رفع درجة حرارة الخلية إلى أكثر من 100 درجة مئوية', 'استهلاك طاقة الخلية الحيوية وتحويلها لحرارة فقط', 'منع حدوث التفاعلات البيولوجية نهائياً'],
        ['Lowering the activation energy required to initiate the chemical reaction', 'Raising intracellular temperatures beyond 100 degrees Celsius', 'Depleting cellular ATP strictly into wasted heat', 'Permanently blocking biochemical pathways'],
        [['الإنزيمات', 'enzymes'], ['طاقة التنشيط', 'activation energy'], ['عمليات الأيض', 'metabolism']]
      )
    ]
  },
  {
    titleAr: 'الخلية: التركيب والوظيفة وتمايز الأنسجة',
    titleEn: 'The Cell: Structure, Function, and Tissue Differentiation',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    lessons: [
      lesson(
        'النظرية الخلوية والميكروسكوبات والتركيب الدقيق للخلية',
        'Cell Theory, Microscopy, and Cell Ultrastructure',
        'تتبع تطور النظرية الخلوية ومبادئها، ومقارنة الميكروسكوب الضوئي والإلكتروني (النافذ والماسح)، والتركيب الدقيق للجدار والغشاء الخلوي والنواة والمادة الوراثية.',
        'Trace the cell theory, compare light and transmission/scanning electron microscopes, and analyze cell walls, plasma membranes, and nuclei.',
        'قارن بين الغشاء البلازمي والجدار الخلوي من حيث التركيب والنفاذية الاختيارية والكائنات التي يتواجد بها كل منهما.',
        'Contrast plasma membranes with cell walls regarding lipid/protein composition, selective permeability, and presence across taxa.',
        'أي من المبادئ التالية يمثل ركناً أساسياً في النظرية الخلوية التي وضعها العلماء؟',
        'Which of the following principles constitutes a foundational pillar of the Cell Theory?',
        ['جميع الخلايا الحية تنشأ من خلايا كانت موجودة من قبل', 'الخلايا تتكون تلقائياً من مواد غير حية بالصدفة', 'جميع الكائنات الحية تتكون من معادن فلزية فقط', 'الخلية لا تستطيع القيام بأي وظيفة بيولوجية مستقلة'],
        ['All living cells arise from pre-existing living cells', 'Cells generate spontaneously from non-living matter by chance', 'All organisms are built exclusively from metallic elements', 'The cell cannot perform any independent biological function'],
        [['النظرية الخلوية', 'cell theory'], ['الغشاء البلازمي', 'plasma membrane'], ['المجهر الإلكتروني', 'electron microscope']]
      ),
      lesson(
        'عضيات الخلية السيتوبلازمية ووظائفها الحيوية',
        'Cytoplasmic Organelles and Their Vital Cellular Functions',
        'دراسة العضيات غير الغشائية (الريبوسومات والجسم المركزي/السنتروسوم) والعضيات الغشائية (الميتوكوندريا، جهاز جولجي، الشبكة الإندوبلازمية، الليزوسومات، والبلاستيدات).',
        'Study non-membranous organelles (ribosomes, centrosome) and membranous organelles (mitochondria, Golgi apparatus, ER, lysosomes, plastids).',
        'ارسم مخططاً يبين مسار تكوين وتصدير البروتين من الريبوسومات عبر الشبكة الإندوبلازمية وجهاز جولجي حتى خروجه في حويصلات إفرازية.',
        'Diagram the protein synthesis and transport pathway from ribosomes through the ER and Golgi apparatus into secretory vesicles.',
        'تعد الميتوكوندريا في الخلية الحية مستودعاً رئيسياً لإنتاج وتخزين مركبات الطاقة وتعرف بـ:',
        'Mitochondria inside living eukaryotic cells are the primary site for ATP production and are known as:',
        ['مراكز إنتاج الطاقة (مصانع الطاقة في الخلية)', 'مواقع تصنيع السليلوز الخارجي فقط', 'عضيات إفراز العصارات الهاضمة في الدم', 'أماكن تخزين الأحماض المعدنية السامة'],
        ['Powerhouses of the cell (cellular energy centers)', 'Sites for external cellulose synthesis only', 'Glands secreting digestive juices into blood', 'Storage compartments for toxic mineral acids'],
        [['الميتوكوندريا', 'mitochondria'], ['جهاز جولجي', 'Golgi apparatus'], ['الريبوسومات', 'ribosomes']]
      ),
      lesson(
        'تمايز الخلايا وتنوع الأنسجة النباتية والحيوانية',
        'Cell Differentiation: Plant and Animal Tissues',
        'التعرف إلى تمايز الخلايا وتنوع الأنسجة النباتية البسيطة (البارنشيمي والكولنشيمي والإسكلرنشيمي) والمركبة (الخشب واللحاء)، والأنسجة الحيوانية (الطلائية والضامة والعضلية والعصبية).',
        'Explore cell differentiation across simple/complex plant tissues (parenchyma, collenchyma, sclerenchyma, xylem, phloem) and animal tissues (epithelial, connective, muscular, nervous).',
        'قارن في جدول منظم بين نسيج الخشب ونسيج اللحاء في النبات من حيث الخلايا المكونة واتجاه ونوع المواد المنقولة في كل منهما.',
        'Compare xylem and phloem vascular tissues regarding cellular constituents, transport direction, and sap translocated.',
        'أي الأنسجة الوعائية النباتية التالية مسؤول عن نقل الماء والأملاح الذائبة من الجذور إلى الأوراق؟',
        'Which plant vascular tissue is responsible for transporting water and dissolved mineral solutes from roots up to leaves?',
        ['نسيج الخشب (الأوعية والقصيبات)', 'نسيج اللحاء (الأنابيب الغربالية)', 'النسيج البارنشيمي البرميلي', 'النسيج الطلائي الحرشفي'],
        ['Xylem tissue (vessels and tracheids)', 'Phloem tissue (sieve tubes)', 'Parenchyma storage tissue', 'Squamous epithelial tissue'],
        [['نسيج الخشب', 'xylem tissue'], ['نسيج اللحاء', 'phloem tissue'], ['تمايز الخلايا', 'cell differentiation']]
      )
    ]
  }
];

const curricula: Partial<Record<Subject, UnitPlan[]>> = {
  MATH: egyptMathUnits,
  HISTORY: egyptHistoryUnits,
  GEOGRAPHY: egyptGeographyUnits,
  GENERAL_SCIENCE: egyptIntegratedScienceUnits,
  PHYSICS: egyptPhysicsUnits,
  CHEMISTRY: egyptChemistryUnits,
  BIOLOGY: egyptBiologyUnits,
  PHILOSOPHY: egyptPhilosophyUnits,
  ISLAMIC_STUDIES: egyptIslamicUnits,
  COMPUTER_SCIENCE: egyptIctUnits,
  NATIONAL_EDUCATION: egyptNationalEducationUnits
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
  GEOGRAPHY: {
    titleAr: 'الجغرافيا — جغرافية مصر، الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Geography — Geography of Egypt, Secondary 1, First Semester'
  },
  GENERAL_SCIENCE: {
    titleAr: 'العلوم المتكاملة — الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Integrated Science — Secondary 1, First Semester'
  },
  PHYSICS: {
    titleAr: 'الفيزياء — الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Physics — Secondary 1, First Semester'
  },
  CHEMISTRY: {
    titleAr: 'الكيمياء — الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Chemistry — Secondary 1, First Semester'
  },
  BIOLOGY: {
    titleAr: 'الأحياء — الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Biology — Secondary 1, First Semester'
  },
  PHILOSOPHY: {
    titleAr: 'الفلسفة والمنطق — مبادئ التفكير الفلسفي والعلمي، الصف الأول الثانوي، الفصل الدراسي الأول',
    titleEn: 'Philosophy and Logic — Secondary 1, First Semester'
  },
  ISLAMIC_STUDIES: {
    titleAr: 'التربية الدينية الإسلامية — الصف الأول الثانوي، الفصلان الدراسيان الأول والثاني',
    titleEn: 'Islamic Religious Education — Secondary 1, First and Second Semesters'
  },
  COMPUTER_SCIENCE: {
    titleAr: 'تكنولوجيا المعلومات والاتصالات والحاسب الآلي — الصف الأول الثانوي',
    titleEn: 'Information and Communication Technology & Computer Science — Secondary 1'
  },
  NATIONAL_EDUCATION: {
    titleAr: 'التربية الوطنية والمواطنة — الصف الأول الثانوي',
    titleEn: 'National Education & Citizenship — Secondary 1'
  }
};

export const EGYPT_G10_SUBJECTS: Subject[] = [
  'ARABIC_LIT',
  'ENGLISH',
  'FRENCH',
  'GERMAN',
  'ITALIAN',
  'MATH',
  'GENERAL_SCIENCE',
  'PHYSICS',
  'CHEMISTRY',
  'BIOLOGY',
  'HISTORY',
  'GEOGRAPHY',
  'PHILOSOPHY',
  'ISLAMIC_STUDIES',
  'COMPUTER_SCIENCE',
  'NATIONAL_EDUCATION'
];

export function isEgyptG10BookCourseAvailable(
  subject: Subject,
  educationType: EducationType,
  _track: EducationTrack = 'GENERAL'
): boolean {
  if (!curricula[subject]) return false;
  return educationType === 'PUBLIC' || educationType === 'PRIVATE' || educationType === 'INTERNATIONAL';
}

export function getEgyptG10Subjects(
  _track: EducationTrack = 'GENERAL',
  educationType: EducationType = 'PUBLIC'
): Subject[] {
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE' && educationType !== 'INTERNATIONAL') {
    return [];
  }
  return [...EGYPT_G10_SUBJECTS];
}

export function isEgyptG10SubjectAvailable(
  subject: Subject,
  country: CountryCode = 'EG',
  gradeLevel: GradeLevel = 'G10',
  educationType: EducationType = 'PUBLIC',
  _track: EducationTrack = 'GENERAL'
): boolean {
  if (country !== 'EG' || gradeLevel !== 'G10') return false;
  if (educationType !== 'PUBLIC' && educationType !== 'PRIVATE' && educationType !== 'INTERNATIONAL') return false;
  return EGYPT_G10_SUBJECTS.includes(subject) || subject === 'ARABIC_LANG';
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
