import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_SCIENCE_G5_BOOK = {
  title: 'العلوم الطبيعية — الصف الخامس الابتدائي',
  titleEn: 'Natural Science — Grade 5 Primary',
  edition: 'جمهورية السودان — الطبعة الأولى — 2021',
  units: [
    { titleAr: 'أجهزة جسم الإنسان', titleEn: 'The Human Body Systems', firstPage: 1, lastPage: 12 },
    { titleAr: 'تصنيف النباتات', titleEn: 'Classification of Plants', firstPage: 13, lastPage: 20 },
    { titleAr: 'تصنيف الحيوانات', titleEn: 'Classification of Animals', firstPage: 21, lastPage: 28 },
    { titleAr: 'الماء', titleEn: 'Water', firstPage: 29, lastPage: 38 },
    { titleAr: 'الحركة والقوى', titleEn: 'Motion and Forces', firstPage: 39, lastPage: 44 },
    { titleAr: 'الكهرباء', titleEn: 'Electricity', firstPage: 45, lastPage: 56 },
    { titleAr: 'المغناطيس', titleEn: 'Magnets', firstPage: 57, lastPage: 66 }
  ]
} as const;

interface ScienceLesson {
  unit: number;
  page: number;
  lastPage: number;
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

const lessons: ScienceLesson[] = [
  {
    unit: 1, page: 2, lastPage: 5, titleAr: 'الجهاز التنفسي', titleEn: 'The Respiratory System',
    focusAr: 'يدخل الهواء من الأنف حيث يُنقّى، ثم يمر بالبلعوم والحنجرة والقصبة الهوائية إلى الرئتين. في الشهيق يدخل الهواء، وفي الزفير يخرج؛ وتأخذ الرئتان الأكسجين وتطرحان ثاني أكسيد الكربون.',
    focusEn: 'Air enters through the nose, where it is filtered, then passes through the pharynx, larynx, and windpipe to the lungs. Inhalation brings air in and exhalation moves it out; the lungs take in oxygen and release carbon dioxide.',
    questionAr: 'ما الغاز الذي يأخذه الجسم من الهواء في الرئتين؟', questionEn: 'Which gas does the body take from the air in the lungs?',
    optionsAr: ['الأكسجين', 'ثاني أكسيد الكربون', 'بخار الماء'], optionsEn: ['Oxygen', 'Carbon dioxide', 'Water vapour'],
    visualStepsAr: ['يدخل الهواء من الأنف', 'يمر عبر القصبة الهوائية', 'يصل إلى الرئتين', 'يدخل الأكسجين ويخرج ثاني أكسيد الكربون'],
    visualStepsEn: ['Air enters through the nose', 'It passes down the windpipe', 'It reaches the lungs', 'Oxygen enters and carbon dioxide leaves']
  },
  {
    unit: 1, page: 6, lastPage: 12, titleAr: 'الجهاز الهضمي', titleEn: 'The Digestive System',
    focusAr: 'يحوّل الجهاز الهضمي الطعام إلى مواد أبسط يستفيد منها الجسم. يُمضغ الطعام في الفم، ويمر بالبلعوم والمريء إلى المعدة، ثم تكمل الأمعاء الدقيقة هضمه وتمتص الأمعاء الغليظة الماء من البقايا.',
    focusEn: 'The digestive system changes food into simpler substances the body can use. Food is chewed in the mouth, passes through the pharynx and oesophagus to the stomach, and is further digested in the small intestine; the large intestine absorbs water from the remains.',
    questionAr: 'أين يُمتص قدر كبير من الماء من بقايا الطعام؟', questionEn: 'Where is much of the water absorbed from food remains?',
    optionsAr: ['الأمعاء الغليظة', 'المريء', 'الفم'], optionsEn: ['The large intestine', 'The oesophagus', 'The mouth'],
    visualStepsAr: ['يمضغ الفم الطعام', 'ينقله المريء إلى المعدة', 'تُكمل الأمعاء الدقيقة الهضم', 'تمتص الأمعاء الغليظة الماء'],
    visualStepsEn: ['The mouth chews food', 'The oesophagus carries it to the stomach', 'The small intestine completes digestion', 'The large intestine absorbs water']
  },
  {
    unit: 2, page: 14, lastPage: 15, titleAr: 'تصنيف النباتات', titleEn: 'Classifying Plants',
    focusAr: 'تُصنّف النباتات بحسب صفاتها. فالنباتات التي لها أنابيب تنقل الماء والمواد الغذائية في الجذور والساق والأوراق وعائية، والتي لا تملك هذه الأنابيب غير وعائية.',
    focusEn: 'Plants are grouped by shared features. Plants with tubes that carry water and nutrients through roots, stems, and leaves are vascular; plants without these tubes are non-vascular.',
    questionAr: 'ما الصفة التي تميز النبات الوعائي؟', questionEn: 'What feature distinguishes a vascular plant?',
    optionsAr: ['وجود أنابيب لنقل الماء والمواد الغذائية', 'إنتاجه الأزهار دائمًا', 'عيشه في الماء فقط'], optionsEn: ['Tubes that carry water and nutrients', 'It always produces flowers', 'It lives only in water'],
    visualStepsAr: ['نلاحظ صفات النبات', 'نتحقق من وجود أنابيب نقل', 'نصنفه وعائيًا أو غير وعائي', 'نقارن أمثلة من كل مجموعة'],
    visualStepsEn: ['Observe the plant’s features', 'Check for transport tubes', 'Classify it as vascular or non-vascular', 'Compare examples from each group']
  },
  {
    unit: 2, page: 16, lastPage: 16, titleAr: 'النباتات الوعائية', titleEn: 'Vascular Plants',
    focusAr: 'للنباتات الوعائية جذور وساق وأوراق، وبها أنابيب تنقل الماء والمواد الغذائية. يختلف شكلها؛ فمنها نباتات عشبية ومنها شجرية.',
    focusEn: 'Vascular plants have roots, stems, and leaves, with tubes that transport water and nutrients. They vary in form and include both herbaceous plants and trees.',
    questionAr: 'ما الذي تنقله أنابيب النبات الوعائي؟', questionEn: 'What do the tubes of a vascular plant transport?',
    optionsAr: ['الماء والمواد الغذائية', 'الرمل والضوء', 'الهواء إلى التربة فقط'], optionsEn: ['Water and nutrients', 'Sand and light', 'Air to the soil only'],
    visualStepsAr: ['تمتص الجذور الماء', 'تحمله أنابيب الساق', 'يصل إلى الأوراق', 'يساعد النقل النبات على النمو'],
    visualStepsEn: ['Roots absorb water', 'Stem tubes carry it', 'It reaches the leaves', 'Transport helps the plant grow']
  },
  {
    unit: 2, page: 17, lastPage: 17, titleAr: 'النباتات البذرية', titleEn: 'Seed-Bearing Plants',
    focusAr: 'تنتج النباتات البذرية بذورًا، بخلاف النباتات غير البذرية مثل السرخسيات التي لا تكوّن بذورًا. وقد تتكون البذور في ثمار أو في مخاريط.',
    focusEn: 'Seed-bearing plants produce seeds, unlike non-seed plants such as ferns. Seeds may form in fruits or in cones.',
    questionAr: 'أي النباتات التالية لا ينتج بذورًا؟', questionEn: 'Which of these plants does not produce seeds?',
    optionsAr: ['السرخس', 'الطماطم', 'القمح'], optionsEn: ['A fern', 'A tomato plant', 'Wheat'],
    visualStepsAr: ['نبحث عن البذور', 'نجد بذورًا داخل ثمرة أو مخروط', 'نصنف النبات بذريًا', 'نميّزه عن السرخس غير البذري'],
    visualStepsEn: ['Look for seeds', 'Find seeds in a fruit or cone', 'Classify the plant as seed-bearing', 'Distinguish it from a seedless fern']
  },
  {
    unit: 2, page: 18, lastPage: 20, titleAr: 'النباتات الزهرية', titleEn: 'Flowering Plants',
    focusAr: 'من النباتات البذرية ما يكوّن أزهارًا تتحول إلى ثمار فيها بذور، ومنها ما يكوّن بذوره في مخاريط. وتُقسم النباتات الزهرية إلى ذوات فلقة واحدة وذوات فلقتين؛ وتختلف في صفات مثل شكل الأوراق والجذور وعدد الفلقات.',
    focusEn: 'Some seed plants form flowers that develop into fruits containing seeds; others form seeds in cones. Flowering plants are also grouped as monocots or dicots, which differ in features such as leaf shape, roots, and the number of seed leaves.',
    questionAr: 'أين تتكوّن بذور النباتات الزهرية غالبًا؟', questionEn: 'Where do flowering plants’ seeds usually form?',
    optionsAr: ['داخل الثمار', 'داخل الجذور', 'على الأوراق فقط'], optionsEn: ['Inside fruits', 'Inside roots', 'Only on leaves'],
    visualStepsAr: ['نلاحظ وجود الأزهار', 'تتكون ثمرة بعد الزهرة', 'تنمو البذور داخل الثمرة', 'نقارن الفلقة الواحدة بالفلقتين'],
    visualStepsEn: ['Observe the flowers', 'A fruit develops from a flower', 'Seeds grow inside the fruit', 'Compare one seed leaf with two']
  },
  {
    unit: 3, page: 22, lastPage: 22, titleAr: 'الحيوانات', titleEn: 'Animals',
    focusAr: 'يُصنّف العلماء الحيوانات بحسب وجود العمود الفقري. فالفقاريات لها عمود فقري، أما اللافقاريات فلا تملكه، ومنها الحشرات والعناكب والديدان.',
    focusEn: 'Scientists classify animals by whether they have a backbone. Vertebrates have one; invertebrates do not, and include insects, arachnids, and worms.',
    questionAr: 'إلى أي مجموعتين تُصنّف الحيوانات بحسب العمود الفقري؟', questionEn: 'Which two groups classify animals by whether they have a backbone?',
    optionsAr: ['فقاريات ولافقاريات', 'ثدييات وطيور فقط', 'حيوانات برية ومائية فقط'], optionsEn: ['Vertebrates and invertebrates', 'Mammals and birds only', 'Land and water animals only'],
    visualStepsAr: ['نلاحظ جسم الحيوان', 'نبحث عن عمود فقري', 'نصنفه فقاريًا أو لافقاريًا', 'نذكر مثالًا لكل مجموعة'],
    visualStepsEn: ['Observe the animal', 'Check for a backbone', 'Classify it as vertebrate or invertebrate', 'Give an example of each group']
  },
  {
    unit: 3, page: 23, lastPage: 25, titleAr: 'الحيوانات الفقارية', titleEn: 'Vertebrate Animals',
    focusAr: 'للفقاريات عمود فقري، وتشمل الثدييات والطيور والزواحف والبرمائيات والأسماك. تختلف هذه المجموعات في غطاء الجسم والتكاثر والتنفس والموطن؛ فالأسماك تعيش في الماء وتتنفس بالخياشيم، والثدييات ترضع صغارها.',
    focusEn: 'Vertebrates have a backbone and include mammals, birds, reptiles, amphibians, and fish. These groups differ in body covering, reproduction, breathing, and habitat: fish live in water and breathe with gills, while mammals feed their young milk.',
    questionAr: 'أي مجموعة من الفقاريات تتنفس بالخياشيم؟', questionEn: 'Which vertebrate group breathes with gills?',
    optionsAr: ['الأسماك', 'الثدييات', 'الطيور'], optionsEn: ['Fish', 'Mammals', 'Birds'],
    visualStepsAr: ['نتحقق من وجود العمود الفقري', 'نحدد مجموعة الفقاري', 'نقارن غطاء جسمه وتنفسه وموطنه', 'نربط الصفات بحياته'],
    visualStepsEn: ['Check for a backbone', 'Identify its vertebrate group', 'Compare its covering, breathing, and habitat', 'Relate those features to its way of life']
  },
  {
    unit: 3, page: 26, lastPage: 28, titleAr: 'الحيوانات اللافقارية', titleEn: 'Invertebrate Animals',
    focusAr: 'اللافقاريات حيوانات لا تملك عمودًا فقريًا. للحشرات ثلاثة أجزاء في الجسم وثلاثة أزواج من الأرجل غالبًا، وللعنكبوتيات أربعة أزواج من الأرجل، وتعيش أنواع من الديدان حرة أو متطفلة.',
    focusEn: 'Invertebrates are animals without a backbone. Insects usually have three body sections and three pairs of legs, arachnids have four pairs of legs, and some worms live freely while others are parasites.',
    questionAr: 'كم زوجًا من الأرجل للعنكبوتيات؟', questionEn: 'How many pairs of legs do arachnids have?',
    optionsAr: ['أربعة أزواج', 'ثلاثة أزواج', 'زوج واحد'], optionsEn: ['Four pairs', 'Three pairs', 'One pair'],
    visualStepsAr: ['نتأكد من غياب العمود الفقري', 'نلاحظ أجزاء الجسم والأرجل', 'نميز الحشرات عن العنكبوتيات', 'نقارنها بالديدان'],
    visualStepsEn: ['Confirm there is no backbone', 'Observe body sections and legs', 'Distinguish insects from arachnids', 'Compare them with worms']
  },
  {
    unit: 4, page: 30, lastPage: 30, titleAr: 'وجود الماء', titleEn: 'Where Water Is Found',
    focusAr: 'يوجد الماء على سطح الأرض وفي باطنها وفي الغلاف الجوي. تغطي المياه مساحات واسعة من سطح الأرض، وتحتاج إليها الكائنات الحية.',
    focusEn: 'Water is found on Earth’s surface, underground, and in the atmosphere. It covers a large part of Earth’s surface and is needed by living things.',
    questionAr: 'أين يوجد الماء على الأرض؟', questionEn: 'Where is water found on Earth?',
    optionsAr: ['على السطح وفي باطن الأرض والغلاف الجوي', 'في الأنهار فقط', 'في الغلاف الجوي فقط'], optionsEn: ['On the surface, underground, and in the atmosphere', 'Only in rivers', 'Only in the atmosphere'],
    visualStepsAr: ['نرى الماء في البحار والأنهار', 'نجده أيضًا تحت سطح الأرض', 'يوجد بخاره في الغلاف الجوي', 'تحتاج إليه الكائنات الحية'],
    visualStepsEn: ['See water in seas and rivers', 'Find it also beneath the ground', 'Its vapour is in the atmosphere', 'Living things need it']
  },
  {
    unit: 4, page: 31, lastPage: 31, titleAr: 'مصادر الماء', titleEn: 'Sources of Water',
    focusAr: 'من مصادر الماء المياه السطحية مثل الأنهار والبحيرات والبحار، والمياه الجوفية، وبخار الماء في الغلاف الجوي الذي يسهم في هطول الأمطار. الماء العذب صالح للشرب بعد التأكد من نظافته، أما ماء البحر فمالح.',
    focusEn: 'Water sources include surface water such as rivers, lakes, and seas, groundwater, and atmospheric water vapour that contributes to rainfall. Fresh water can be used for drinking when clean; seawater is salty.',
    questionAr: 'أي مصدر للماء يوجد تحت سطح الأرض؟', questionEn: 'Which water source is found beneath Earth’s surface?',
    optionsAr: ['المياه الجوفية', 'مياه البحار', 'السحب'], optionsEn: ['Groundwater', 'Seawater', 'Clouds'],
    visualStepsAr: ['تهطل الأمطار من الغلاف الجوي', 'تجري المياه على السطح', 'يتسرب بعضها إلى باطن الأرض', 'نميز الماء العذب من المالح'],
    visualStepsEn: ['Rain falls from the atmosphere', 'Water flows over the surface', 'Some seeps underground', 'Distinguish fresh water from salt water']
  },
  {
    unit: 4, page: 32, lastPage: 32, titleAr: 'استخدام الماء', titleEn: 'Uses of Water',
    focusAr: 'نستخدم الماء للشرب والطهي والغسل في المنزل، ولري المحاصيل في الزراعة، كما تستخدمه المصانع وتستفيد السدود من جريانه لتوليد الكهرباء.',
    focusEn: 'Water is used for drinking, cooking, and washing at home, for irrigating crops, and in factories. Dams can also use flowing water to generate electricity.',
    questionAr: 'أي استخدام للماء يرتبط بالزراعة؟', questionEn: 'Which use of water is linked to agriculture?',
    optionsAr: ['ري المحاصيل', 'غسل الأواني فقط', 'صنع الورق فقط'], optionsEn: ['Irrigating crops', 'Washing dishes only', 'Making paper only'],
    visualStepsAr: ['نأخذ ماءً من مصدر آمن', 'نستخدمه في البيت أو الزراعة', 'تستفيد منه المصانع والسدود', 'نحافظ عليه من الهدر'],
    visualStepsEn: ['Take water from a safe source', 'Use it at home or on farms', 'Factories and dams also use it', 'Avoid wasting it']
  },
  {
    unit: 4, page: 33, lastPage: 35, titleAr: 'خواص الماء', titleEn: 'Properties of Water',
    focusAr: 'الماء النقي سائل شفاف لا لون له ولا طعم ولا رائحة. حجمه ثابت وشكله يتغير بحسب الإناء. ويوجد في حالات صلبة كالجليد، وسائلة، وغازية كبخار الماء؛ وتغير الحرارة يسبب الانصهار والتجمد والتبخر والتكثف.',
    focusEn: 'Pure water is a clear liquid with no colour, taste, or smell. Its volume stays the same while its shape changes with its container. Water occurs as solid ice, liquid water, and gaseous vapour; temperature changes cause melting, freezing, evaporation, and condensation.',
    questionAr: 'ماذا يحدث لشكل الماء عند نقله إلى إناء مختلف؟', questionEn: 'What happens to water’s shape when it is moved to a different container?',
    optionsAr: ['يأخذ شكل الإناء', 'يبقى له شكل ثابت', 'يتحول دائمًا إلى جليد'], optionsEn: ['It takes the shape of the container', 'It keeps one fixed shape', 'It always becomes ice'],
    visualStepsAr: ['نلاحظ الماء السائل', 'نصبّه في إناء آخر فيتغير شكله', 'نسخنه أو نبرده فتتغير حالته', 'نميز الانصهار والتجمد والتبخر والتكثف'],
    visualStepsEn: ['Observe liquid water', 'Pour it into another container; its shape changes', 'Heat or cool it to change its state', 'Identify melting, freezing, evaporation, and condensation']
  },
  {
    unit: 4, page: 36, lastPage: 36, titleAr: 'دورة المياه في الطبيعة', titleEn: 'The Water Cycle in Nature',
    focusAr: 'تتحرك المياه باستمرار بين سطح الأرض والغلاف الجوي. تتبخر من المسطحات المائية، ثم يبرد بخارها ويتكثف مكوّنًا السحب، وبعدها يهطل المطر وتتكرر الدورة.',
    focusEn: 'Water moves continuously between Earth’s surface and the atmosphere. It evaporates from water bodies, then cools and condenses to form clouds. Rain falls and the cycle repeats.',
    questionAr: 'ما العملية التي تكوّن السحب من بخار الماء؟', questionEn: 'Which process forms clouds from water vapour?',
    optionsAr: ['التكثف', 'التجمد', 'الانصهار'], optionsEn: ['Condensation', 'Freezing', 'Melting'],
    visualStepsAr: ['تسخن الشمس المياه فتتبخر', 'يرتفع البخار ويبرد', 'يتكثف البخار وتتكون السحب', 'يهطل المطر وتبدأ الدورة من جديد'],
    visualStepsEn: ['Sunlight warms water and it evaporates', 'Vapour rises and cools', 'Vapour condenses into clouds', 'Rain falls and the cycle begins again']
  },
  {
    unit: 4, page: 36, lastPage: 37, titleAr: 'تلوث الماء', titleEn: 'Water Pollution',
    focusAr: 'يتلوث الماء عندما تختلط به مخلفات أو مواد تغيّر خواصه، مثل رمي القمامة أو تصريف مخلفات المصانع قرب مصادره. قد ينقل الماء الملوث أمراضًا؛ لذا نحمي المصادر من الفضلات ونستخدم أوعية نظيفة.',
    focusEn: 'Water is polluted when waste or other substances enter it and change its properties, for example by dumping rubbish or releasing factory waste near a source. Polluted water can spread disease, so keep waste away from water sources and use clean containers.',
    questionAr: 'أي سلوك يساعد على حماية مصادر الماء؟', questionEn: 'Which action helps protect water sources?',
    optionsAr: ['إبعاد الفضلات عن مصادر الماء', 'رمي القمامة في النهر', 'غسل الملابس في الماء الراكد'], optionsEn: ['Keeping waste away from water sources', 'Throwing rubbish into a river', 'Washing clothes in stagnant water'],
    visualStepsAr: ['تصل الفضلات إلى مصدر الماء', 'تتغير خواص الماء وقد يتلوث', 'قد تنتقل أمراض مع الماء الملوث', 'نمنع رمي الفضلات ونحافظ على النظافة'],
    visualStepsEn: ['Waste reaches a water source', 'The water’s properties change and it may be polluted', 'Polluted water can spread disease', 'Keep waste out and maintain cleanliness']
  },
  {
    unit: 5, page: 40, lastPage: 41, titleAr: 'الحركة', titleEn: 'Motion',
    focusAr: 'يكون الجسم متحركًا عندما يتغير موقعه بالنسبة إلى نقطة مرجعية. تساعد مقارنة المسافة والزمن على وصف الحركة والسرعة؛ وتتحرك الكرة على مسار مائل من موضع أعلى إلى موضع أدنى.',
    focusEn: 'An object is in motion when its position changes relative to a reference point. Comparing distance and time helps describe motion and speed; a ball rolls down a sloping path from a higher to a lower position.',
    questionAr: 'متى نقول إن جسمًا في حالة حركة؟', questionEn: 'When do we say an object is in motion?',
    optionsAr: ['عندما يتغير موقعه بالنسبة إلى نقطة مرجعية', 'عندما يتغير لونه', 'عندما يبقى في المكان نفسه'], optionsEn: ['When its position changes relative to a reference point', 'When its colour changes', 'When it stays in the same place'],
    visualStepsAr: ['نحدد نقطة مرجعية', 'نسجل موقع الجسم أولًا', 'نلاحظ تغير موقعه مع الزمن', 'نصف حركته بالمسافة والزمن'],
    visualStepsEn: ['Choose a reference point', 'Record the object’s starting position', 'Observe its position change over time', 'Describe its motion using distance and time']
  },
  {
    unit: 5, page: 42, lastPage: 44, titleAr: 'القوى', titleEn: 'Forces',
    focusAr: 'القوة دفع أو سحب يمكنه تحريك جسم ساكن أو تغيير سرعة جسم متحرك أو اتجاهه. الاحتكاك قوة تعيق الحركة، والجاذبية تسحب الأجسام نحو الأرض.',
    focusEn: 'A force is a push or pull that can move a stationary object or change a moving object’s speed or direction. Friction opposes motion, and gravity pulls objects toward Earth.',
    questionAr: 'أي قوة تسحب الأجسام نحو الأرض؟', questionEn: 'Which force pulls objects toward Earth?',
    optionsAr: ['الجاذبية', 'الاحتكاك', 'الدفع'], optionsEn: ['Gravity', 'Friction', 'A push'],
    visualStepsAr: ['نؤثر بدفع أو سحب', 'تتغير حركة الجسم', 'يقاوم الاحتكاك الحركة', 'تسحب الجاذبية الجسم نحو الأرض'],
    visualStepsEn: ['Apply a push or pull', 'The object’s motion changes', 'Friction opposes the motion', 'Gravity pulls the object toward Earth']
  },
  {
    unit: 6, page: 47, lastPage: 50, titleAr: 'الكهرباء الساكنة', titleEn: 'Static Electricity',
    focusAr: 'قد يؤدي دلك بعض المواد إلى تراكم شحنات كهربائية على سطحها؛ وتسمى هذه الكهرباء الساكنة. الشحنات المتشابهة تتنافر والمختلفة تتجاذب، وقد يحدث تفريغ عند انتقال الشحنات.',
    focusEn: 'Rubbing some materials can build electric charges on their surfaces; this is static electricity. Like charges repel and unlike charges attract, and a discharge can occur when charges move.',
    questionAr: 'كيف تتصرف الشحنات الكهربائية المتشابهة؟', questionEn: 'How do like electric charges behave?',
    optionsAr: ['تتنافر', 'تتجاذب', 'تختفي دائمًا'], optionsEn: ['They repel', 'They attract', 'They always disappear'],
    visualStepsAr: ['ندلك مادتين فتتجمع شحنات', 'تبقى الشحنات ساكنة على السطح', 'المتشابهة تتنافر والمختلفة تتجاذب', 'قد تنتقل الشحنات فيحدث تفريغ'],
    visualStepsEn: ['Rubbing materials builds charges', 'Charges remain on the surface', 'Like charges repel; unlike charges attract', 'Charges may move in a discharge']
  },
  {
    unit: 6, page: 51, lastPage: 51, titleAr: 'البرق والصواعق', titleEn: 'Lightning and Thunder',
    focusAr: 'تتراكم شحنات مختلفة في السحب، وقد يؤدي انتقالها إلى تفريغ كهربائي يظهر في صورة برق وصاعقة. أثناء العاصفة الرعدية نبتعد عن الأماكن المكشوفة والماء والأجسام المعدنية والأشجار العالية.',
    focusEn: 'Different charges can build up in clouds, and their movement may cause an electrical discharge seen as lightning. During a thunderstorm, stay away from open areas, water, metal objects, and tall trees.',
    questionAr: 'أين ينبغي الابتعاد أثناء العاصفة الرعدية؟', questionEn: 'What should you stay away from during a thunderstorm?',
    optionsAr: ['الأماكن المكشوفة والأجسام المعدنية', 'مبنى آمن مغلق', 'مكان منخفض بعيد عن الماء'], optionsEn: ['Open areas and metal objects', 'A safe enclosed building', 'A low place away from water'],
    visualStepsAr: ['تتجمع شحنات في السحب', 'يحدث تفريغ كهربائي', 'يظهر البرق وقد تحدث صاعقة', 'نلجأ إلى مكان آمن ونتجنب الخطر'],
    visualStepsEn: ['Charges build up in clouds', 'An electrical discharge occurs', 'Lightning appears and a strike may occur', 'Move to a safe place and avoid hazards']
  },
  {
    unit: 6, page: 52, lastPage: 52, titleAr: 'استخدامات الكهرباء الساكنة', titleEn: 'Uses of Static Electricity',
    focusAr: 'تستفيد أجهزة من الكهرباء الساكنة في عملها؛ فآلة تصوير الأوراق تستخدم الشحنات للمساعدة على نقل الحروف إلى الورق، وتساعد المرسبات الكهروستاتيكية على إزالة الغبار من الهواء.',
    focusEn: 'Some devices use static electricity: a photocopier uses charges to help transfer print to paper, while electrostatic precipitators help remove dust from air.',
    questionAr: 'أي جهاز يستخدم الكهرباء الساكنة لالتقاط دقائق الغبار من الهواء؟', questionEn: 'Which device uses static electricity to collect dust particles from air?',
    optionsAr: ['المرسب الكهروستاتيكي', 'المروحة اليدوية', 'المصباح العادي'], optionsEn: ['An electrostatic precipitator', 'A hand fan', 'An ordinary lamp'],
    visualStepsAr: ['تكتسب دقائق الغبار شحنة', 'تنجذب إلى سطح ذي شحنة مناسبة', 'تُجمع الدقائق من الهواء', 'يصبح الهواء أنظف'],
    visualStepsEn: ['Dust particles acquire a charge', 'They are attracted to a suitable charged surface', 'Particles are collected from the air', 'The air becomes cleaner']
  },
  {
    unit: 6, page: 53, lastPage: 53, titleAr: 'الكهرباء التيارية', titleEn: 'Current Electricity',
    focusAr: 'التيار الكهربائي حركة الشحنات الكهربائية في مسار مغلق. في الدائرة البسيطة يوفر مصدر الطاقة الشحنات، وتنقلها أسلاك التوصيل إلى المقاومة مثل المصباح.',
    focusEn: 'Electric current is the movement of electric charges along a closed path. In a simple circuit, a power source provides energy and connecting wires carry charges to a load such as a lamp.',
    questionAr: 'ما الشرط اللازم لمرور التيار الكهربائي في الدائرة؟', questionEn: 'What is needed for electric current to flow in a circuit?',
    optionsAr: ['أن يكون مسار الدائرة مغلقًا', 'أن يكون أحد الأسلاك مفصولًا', 'أن تكون الدائرة بلا مصدر طاقة'], optionsEn: ['The circuit path must be closed', 'One wire must be disconnected', 'The circuit must have no power source'],
    visualStepsAr: ['يوفر مصدر الطاقة الطاقة', 'تنقل الأسلاك الشحنات', 'يمر التيار عبر المقاومة', 'يعود عبر مسار مغلق'],
    visualStepsEn: ['The power source supplies energy', 'Wires carry the charges', 'Current passes through the load', 'It returns along a closed path']
  },
  {
    unit: 6, page: 54, lastPage: 55, titleAr: 'الدوائر الكهربائية المفتوحة والمغلقة', titleEn: 'Open and Closed Electric Circuits',
    focusAr: 'تكتمل الدائرة عندما تتصل أجزاؤها ويغلق المفتاح، فيمر التيار ويضيء المصباح. إذا فتح المفتاح انقطع المسار وتوقف التيار؛ والمفتاح يتحكم في فتح الدائرة وإغلاقها.',
    focusEn: 'A circuit is complete when its parts are connected and the switch is closed, allowing current to flow and light the lamp. Opening the switch breaks the path and stops the current; the switch controls the circuit.',
    questionAr: 'ماذا يحدث للتيار عند فتح المفتاح؟', questionEn: 'What happens to the current when the switch is open?',
    optionsAr: ['ينقطع التيار', 'يزداد التيار', 'يستمر المصباح مضيئًا دائمًا'], optionsEn: ['The current stops', 'The current increases', 'The lamp always stays lit'],
    visualStepsAr: ['نصل المصدر والأسلاك والمصباح', 'نغلق المفتاح فيكتمل المسار', 'يمر التيار فيضيء المصباح', 'نفتح المفتاح فينقطع التيار'],
    visualStepsEn: ['Connect the source, wires, and lamp', 'Close the switch to complete the path', 'Current flows and the lamp lights', 'Open the switch to stop the current']
  },
  {
    unit: 7, page: 59, lastPage: 59, titleAr: 'المغناطيس الطبيعي', titleEn: 'Natural Magnets',
    focusAr: 'المغناطيس مادة لها خاصية جذب الحديد. وقد توجد مغناطيسات طبيعية، كما يمكن تثبيت أشياء حديدية على لوحة مغناطيسية من دون صمغ.',
    focusEn: 'A magnet is a material that can attract iron. Natural magnets occur in nature, and iron objects can be held to a magnetic board without glue.',
    questionAr: 'أي مادة ينجذب إليها المغناطيس؟', questionEn: 'Which material is attracted to a magnet?',
    optionsAr: ['الحديد', 'الخشب', 'الورق'], optionsEn: ['Iron', 'Wood', 'Paper'],
    visualStepsAr: ['نقرب المغناطيس من أجسام مختلفة', 'ينجذب الجسم الحديدي', 'نلاحظ أن موادًا أخرى لا تنجذب', 'نستنتج خاصية جذب الحديد'],
    visualStepsEn: ['Bring a magnet near different objects', 'The iron object is attracted', 'Notice that some other materials are not', 'Identify the attraction of iron']
  },
  {
    unit: 7, page: 60, lastPage: 61, titleAr: 'المغناطيس والمواد المغناطيسية', titleEn: 'Magnets and Magnetic Materials',
    focusAr: 'تنجذب بعض المواد مثل الحديد إلى المغناطيس، بينما لا تنجذب إليه مواد أخرى مثل الخشب. ويكون جذب المغناطيس أقوى عند قطبيه.',
    focusEn: 'Some materials, such as iron, are attracted to a magnet, while others, such as wood, are not. A magnet’s attraction is strongest at its poles.',
    questionAr: 'أي المواد التالية مادة مغناطيسية؟', questionEn: 'Which of these is a magnetic material?',
    optionsAr: ['الحديد', 'الخشب', 'الورق'], optionsEn: ['Iron', 'Wood', 'Paper'],
    visualStepsAr: ['نختبر مواد مختلفة بالمغناطيس', 'نلاحظ أيها ينجذب', 'نصنف المواد إلى مغناطيسية وغير مغناطيسية', 'نحدد أقوى جذب عند القطبين'],
    visualStepsEn: ['Test different materials with a magnet', 'Observe which ones are attracted', 'Classify them as magnetic or non-magnetic', 'Find the strongest attraction at the poles']
  },
  {
    unit: 7, page: 62, lastPage: 64, titleAr: 'خصائص المغناطيس', titleEn: 'Properties of Magnets',
    focusAr: 'لكل مغناطيس قطبان. الأقطاب المتشابهة تتنافر والمختلفة تتجاذب، ويتركز الجذب عند القطبين؛ وتساعد هذه الملاحظات على وصف سلوك المغناطيس.',
    focusEn: 'Every magnet has two poles. Like poles repel and unlike poles attract, with attraction concentrated at the poles; these observations describe how magnets behave.',
    questionAr: 'ماذا يحدث عندما يتقابل قطبان مغناطيسيان مختلفان؟', questionEn: 'What happens when two unlike magnetic poles face each other?',
    optionsAr: ['يتجاذبان', 'يتنافران', 'يفقدان المغناطيسية فورًا'], optionsEn: ['They attract', 'They repel', 'They immediately lose magnetism'],
    visualStepsAr: ['نحدد قطبي كل مغناطيس', 'نقرب قطبين متشابهين فيتنافران', 'نقرب قطبين مختلفين فيتجاذبان', 'نقارن قوة الجذب عند القطبين'],
    visualStepsEn: ['Identify each magnet’s poles', 'Bring like poles together; they repel', 'Bring unlike poles together; they attract', 'Compare attraction at the poles']
  }
];

export const SUDAN_PRIMARY_SCIENCE_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_SCIENCE_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-science-g5-${order}`;
  const unit = SUDAN_PRIMARY_SCIENCE_G5_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));
  const pageRangeEn = lesson.lastPage === lesson.page ? `p. ${lesson.page}` : `pp. ${lesson.page}–${lesson.lastPage}`;

    const customImageUrl =
      lesson.titleAr === 'دورة المياه في الطبيعة' ? '/curriculum_images/water_cycle_nature.svg' :
      lesson.titleAr === 'خواص الماء' ? '/curriculum_images/states_of_matter_particles.svg' :
      lesson.titleAr === 'تصنيف النباتات' ? '/curriculum_images/photosynthesis_leaf_diagram.svg' :
      undefined;

    return {
      id,
      order,
      titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
      titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
      subtitleAr: `العلوم الطبيعية — الصف الخامس الابتدائي — ${unit.titleAr}`,
      subtitleEn: `Grade 5 Natural Science — ${unit.titleEn}`,
      descriptionAr: lesson.focusAr,
      descriptionEn: lesson.focusEn,
      durationMinutes: 25,
      isLocked: order > 1,
      isCompleted: false,
      passingScoreRequired: 80,
      country: 'SD',
      subject: 'PRIMARY_SCIENCE',
      gradeLevel: 'G5',
      educationType: 'PUBLIC',
      gradeLevelNameAr: 'جمهورية السودان — العلوم الطبيعية — الصف الخامس الابتدائي',
      gradeLevelNameEn: 'Republic of Sudan — Grade 5 Primary Natural Science',
      ministryAr: 'وزارة التربية والتعليم — المركز القومي للمناهج والبحث التربوي — بخت الرضا',
      ministryEn: 'Ministry of Education — National Center for Curricula and Educational Research — Bakht Al-Ruda',
      termAr: 'العلوم الطبيعية — الصف الخامس',
      termEn: 'Grade 5 Natural Science',
      unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
      unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
      lessonNumberAr: `الدرس ${lessonInUnit}`,
      lessonNumberEn: `Lesson ${lessonInUnit}`,
      warmupHookAr: `لاحظ شيئًا من حولك يرتبط بموضوع «${lesson.titleAr}». ما الذي تستطيع أن تكتشفه عنه؟`,
      warmupHookEn: `Notice something around you connected to “${lesson.titleEn}.” What can you discover about it?`,
      learningOutcomesAr: [lesson.focusAr, `يجيب عن سؤال يوضح فهمه لموضوع «${lesson.titleAr}».`],
      learningOutcomesEn: [lesson.focusEn, `Answer a question to show understanding of “${lesson.titleEn}.”`],
      keyConceptsAr: [lesson.titleAr],
      keyConceptsEn: [lesson.titleEn],
      summaryAr: lesson.focusAr,
      summaryEn: lesson.focusEn,
      sections: [{
        titleAr: lesson.titleAr,
        titleEn: lesson.titleEn,
        contentAr: customImageUrl 
          ? `${lesson.focusAr}\n\n![مخطط توضيحي: ${lesson.titleAr}](${customImageUrl})\n\nاقرأ المخطط خطوة خطوة، ثم اشرح ما تعلمته بكلماتك واربطه بمثال من بيئتك.`
          : `${lesson.focusAr}\n\nاقرأ المخطط خطوة خطوة، ثم اشرح ما تعلمته بكلماتك واربطه بمثال من بيئتك.`,
        contentEn: `${lesson.focusEn}\n\nRead the diagram one step at a time, then explain what you learned in your own words and connect it to an example around you.`,
        diagram: {
          id: `${id}-visual`,
          figureNumberAr: `شكل توضيحي (${order})`,
          figureNumberEn: `Illustration (${order})`,
          titleAr: `مخطط: ${lesson.titleAr}`,
          titleEn: `Diagram: ${lesson.titleEn}`,
          captionAr: `أربع خطوات بصرية لتوضيح «${lesson.titleAr}».`,
          captionEn: `Four visual steps explaining “${lesson.titleEn}.”`,
          diagramType: 'primary_lesson_sequence',
          imageUrl: customImageUrl,
          visualSteps
        }
      }],
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم: ${lesson.titleAr}`,
      titleEn: `Check: ${lesson.titleEn}`,
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
        explanationAr: `الإجابة الصحيحة: ${lesson.optionsAr[0]}.`,
        explanationEn: `Correct answer: ${lesson.optionsEn[0]}.`,
        difficulty: 'easy'
      }]
    },
    topicAr: `ص ${lesson.page}`,
    topicEn: pageRangeEn
  };
});
