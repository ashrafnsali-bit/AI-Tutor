import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_GEOGRAPHY_G3_BOOK = {
  title: 'الجغرافيا — الصف الثالث من مرحلة التعليم الأساسي',
  edition: 'الطبعة الأولى 2016م',
  units: [
    { titleAr: 'البيئة من حولنا', titleEn: 'The Environment Around Us', firstPage: 1, lastPage: 52 },
    { titleAr: 'بيئتي المدرسية', titleEn: 'My School Environment', firstPage: 53, lastPage: 74 },
    { titleAr: 'بيئتي الأسرية', titleEn: 'My Family Environment', firstPage: 75, lastPage: 124 }
  ]
} as const;

interface GeographyLesson {
  unit: number;
  page: number;
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

const lessons: GeographyLesson[] = [
  {
    unit: 1, page: 2, titleAr: 'مفهوم الجغرافيا والبيئة', titleEn: 'Geography and the Environment',
    focusAr: 'يتعرف معنى الجغرافيا والبيئة، ويلاحظ عناصر البيئة الطبيعية والبشرية وعلاقة الإنسان بالمكان المحيط به.',
    focusEn: 'Learn what geography and environment mean, observe natural and human features, and consider how people relate to places around them.',
    questionAr: 'ما البيئة؟', questionEn: 'What is the environment?',
    optionsAr: ['المكان الذي تعيش فيه الكائنات الحية', 'اسم خريطة فقط', 'حالة الجو في ساعة واحدة'],
    optionsEn: ['The place where living things live', 'Only the name of a map', 'The weather for one hour'],
    visualStepsAr: ['الإنسان', 'الحيوان', 'النبات', 'المكان المحيط'],
    visualStepsEn: ['People', 'Animals', 'Plants', 'Surroundings']
  },
  {
    unit: 1, page: 11, titleAr: 'الأرض والشمس', titleEn: 'Earth and the Sun',
    focusAr: 'يتعرف الأرض بوصفها موطنًا للإنسان والحيوان والنبات، ويميز شكلها الكروي ودور الشمس في توفير الضوء والحرارة.',
    focusEn: 'Recognize Earth as the home of people, animals, and plants; identify its round shape and the Sun’s role in providing light and heat.',
    questionAr: 'ماذا تمد الشمس الأرض؟', questionEn: 'What does the Sun provide to Earth?',
    optionsAr: ['الضوء والحرارة', 'الماء والتربة', 'الجبال والأنهار'],
    optionsEn: ['Light and heat', 'Water and soil', 'Mountains and rivers'],
    visualStepsAr: ['الشمس', 'ضوء وحرارة', 'الأرض', 'الحياة'],
    visualStepsEn: ['Sun', 'Light and heat', 'Earth', 'Life']
  },
  {
    unit: 1, page: 18, titleAr: 'الأرض اليابسة والماء', titleEn: 'Land and Water on Earth',
    focusAr: 'يميز بين اليابسة والماء على سطح الأرض، ويتعرف القارات بوصفها كتلًا كبيرة من اليابسة والمحيطات بوصفها مساحات واسعة من الماء.',
    focusEn: 'Distinguish land from water on Earth and learn that continents are large landmasses and oceans are vast areas of water.',
    questionAr: 'ما الاسم الذي يطلق على الكتل الكبيرة من اليابسة؟', questionEn: 'What are large landmasses called?',
    optionsAr: ['قارات', 'محيطات', 'جهات'],
    optionsEn: ['Continents', 'Oceans', 'Directions'],
    visualStepsAr: ['سطح الأرض', 'يابسة', 'ماء', 'قارات ومحيطات'],
    visualStepsEn: ['Earth’s surface', 'Land', 'Water', 'Continents and oceans']
  },
  {
    unit: 1, page: 21, titleAr: 'شروق الشمس وغروبها والليل والنهار', titleEn: 'Sunrise, Sunset, Day, and Night',
    focusAr: 'يربط شروق الشمس بالشرق وبداية النهار، وغروبها بالغرب وبداية الليل، ويتعرف تعاقب الليل والنهار ودوران الأرض حول محورها.',
    focusEn: 'Connect sunrise in the east with the beginning of day and sunset in the west with the beginning of night; learn that Earth’s rotation brings day and night.',
    questionAr: 'في أي جهة تشرق الشمس؟', questionEn: 'In which direction does the Sun rise?',
    optionsAr: ['الشرق', 'الغرب', 'الشمال'],
    optionsEn: ['East', 'West', 'North'],
    visualStepsAr: ['الشروق شرقًا', 'نهار', 'الغروب غربًا', 'ليل'],
    visualStepsEn: ['Sunrise in the east', 'Day', 'Sunset in the west', 'Night']
  },
  {
    unit: 1, page: 32, titleAr: 'الفصول الأربعة', titleEn: 'The Four Seasons',
    focusAr: 'يتعرف الفصول الأربعة ويربط حدوثها بدوران الأرض حول الشمس خلال السنة، ويميز تغيرات الطقس المصاحبة لها.',
    focusEn: 'Name the four seasons, relate them to Earth’s yearly orbit around the Sun, and notice weather changes associated with them.',
    questionAr: 'كم فصلًا في السنة؟', questionEn: 'How many seasons are there in a year?',
    optionsAr: ['أربعة', 'اثنان', 'ستة'],
    optionsEn: ['Four', 'Two', 'Six'],
    visualStepsAr: ['الربيع', 'الصيف', 'الخريف', 'الشتاء'],
    visualStepsEn: ['Spring', 'Summer', 'Autumn', 'Winter']
  },
  {
    unit: 1, page: 38, titleAr: 'الاتجاهات الأصلية والفرعية', titleEn: 'Cardinal and Intermediate Directions',
    focusAr: 'يسمي الجهات الأصلية والفرعية، ويستعملها لوصف مواقع الأشياء والأماكن القريبة في المنزل والمدرسة والحي.',
    focusEn: 'Name cardinal and intermediate directions and use them to describe where nearby objects and places are located.',
    questionAr: 'ما الجهة المقابلة للشرق؟', questionEn: 'Which direction is opposite east?',
    optionsAr: ['الغرب', 'الشمال', 'الجنوب الشرقي'],
    optionsEn: ['West', 'North', 'Southeast'],
    visualStepsAr: ['الشمال', 'الشرق', 'الجنوب', 'الغرب'],
    visualStepsEn: ['North', 'East', 'South', 'West']
  },
  {
    unit: 1, page: 46, titleAr: 'الخريطة وعناصرها', titleEn: 'Maps and Their Elements',
    focusAr: 'يتعرف الخريطة بوصفها رسمًا مبسطًا للمكان، ويقرأ عنوانها ومفتاح الرموز والاتجاهات ليستدل على المواقع.',
    focusEn: 'Understand a map as a simplified drawing of a place and use its title, symbol key, and directions to locate features.',
    questionAr: 'ما فائدة مفتاح الخريطة؟', questionEn: 'What is the purpose of a map key?',
    optionsAr: ['تفسير الرموز', 'تحديد حالة الطقس', 'عدّ أيام السنة'],
    optionsEn: ['Explain the symbols', 'Describe the weather', 'Count the days in a year'],
    visualStepsAr: ['عنوان الخريطة', 'رموز', 'مفتاح', 'اتجاه'],
    visualStepsEn: ['Map title', 'Symbols', 'Key', 'Direction']
  },

  {
    unit: 2, page: 54, titleAr: 'فصلي: النظافة والتنظيم', titleEn: 'My Classroom: Cleanliness and Order',
    focusAr: 'يصف الفصل بوصفه بيئة تعلم صغيرة، ويشارك في المحافظة على نظافته وتنظيمه بالتعاون مع زملائه.',
    focusEn: 'Describe the classroom as a small learning environment and help keep it clean and organized with classmates.',
    questionAr: 'كيف نحافظ على بيئة الفصل؟', questionEn: 'How can we care for our classroom environment?',
    optionsAr: ['بالتعاون على النظافة والترتيب', 'بترك المخلفات على الأرض', 'بإتلاف أدواته'],
    optionsEn: ['Work together to keep it clean and tidy', 'Leave litter on the floor', 'Damage its materials'],
    visualStepsAr: ['فصل نظيف', 'ترتيب الأدوات', 'تعاون التلاميذ', 'بيئة تعلم'],
    visualStepsEn: ['Clean classroom', 'Organized materials', 'Class cooperation', 'Learning environment']
  },
  {
    unit: 2, page: 56, titleAr: 'فصلي: الراحة والتهوية والإضاءة', titleEn: 'My Classroom: Comfort, Air, and Light',
    focusAr: 'يلاحظ أثر النوافذ والباب والإضاءة والهواء في راحة التلاميذ، ويتعرف كيف يهيئ الفصل للتعلم.',
    focusEn: 'Notice how windows, doors, light, and fresh air support comfort, and learn how to make the classroom ready for learning.',
    questionAr: 'ما الذي يساعد على تهوية الفصل؟', questionEn: 'What helps ventilate a classroom?',
    optionsAr: ['النوافذ والباب المناسبان', 'إغلاق جميع النوافذ', 'تغطية مصادر الضوء'],
    optionsEn: ['Suitable windows and a door', 'Closing every window', 'Covering the sources of light'],
    visualStepsAr: ['نوافذ', 'هواء متجدد', 'ضوء كافٍ', 'راحة'],
    visualStepsEn: ['Windows', 'Fresh air', 'Enough light', 'Comfort']
  },
  {
    unit: 2, page: 61, titleAr: 'مدرستي ومكوناتها', titleEn: 'My School and Its Features',
    focusAr: 'يحدد أجزاء المدرسة ومرافقها ويصف بيئتها، ويقترح طرقًا مناسبة للمحافظة عليها.',
    focusEn: 'Identify parts and facilities of the school, describe its environment, and suggest ways to care for it.',
    questionAr: 'أي مكان من الآتي قد يكون من مكونات المدرسة؟', questionEn: 'Which of these may be part of a school?',
    optionsAr: ['الفصل', 'المحيط', 'القارة'],
    optionsEn: ['Classroom', 'Ocean', 'Continent'],
    visualStepsAr: ['فصول', 'ساحة', 'مرافق', 'مدرسة'],
    visualStepsEn: ['Classrooms', 'Playground', 'Facilities', 'School']
  },
  {
    unit: 2, page: 64, titleAr: 'المحافظة على بيئة المدرسة', titleEn: 'Caring for the School Environment',
    focusAr: 'يربط المحافظة على الفصل بالمحافظة على بقية مكونات المدرسة، ويطبق سلوكًا مسؤولًا تجاه البيئة المدرسية.',
    focusEn: 'Connect caring for the classroom with caring for the whole school and practise responsible behavior in the school environment.',
    questionAr: 'ما السلوك الذي يحافظ على المدرسة؟', questionEn: 'Which behavior helps care for the school?',
    optionsAr: ['المحافظة على مرافقها', 'إتلاف المقاعد', 'رمي النفايات في الساحة'],
    optionsEn: ['Taking care of its facilities', 'Damaging the desks', 'Dropping rubbish in the yard'],
    visualStepsAr: ['الفصل', 'الساحة', 'المرافق', 'مدرسة محفوظة'],
    visualStepsEn: ['Classroom', 'Yard', 'Facilities', 'Cared-for school']
  },
  {
    unit: 2, page: 65, titleAr: 'مدرستي وجيرانها', titleEn: 'My School and Its Neighbours',
    focusAr: 'يلاحظ المباني والمنازل المحيطة بالمدرسة، ويصف الجوار والتعاون والتواصل بين أفراد البيئة القريبة.',
    focusEn: 'Observe buildings and homes around the school and describe the neighborhood and cooperation among nearby people.',
    questionAr: 'ماذا يمكن أن يحيط بالمدرسة؟', questionEn: 'What may be found around a school?',
    optionsAr: ['مبانٍ ومنازل', 'كواكب فقط', 'أمواج المحيط'],
    optionsEn: ['Buildings and homes', 'Only planets', 'Ocean waves'],
    visualStepsAr: ['المدرسة', 'منازل قريبة', 'جيران', 'تواصل'],
    visualStepsEn: ['School', 'Nearby homes', 'Neighbours', 'Communication']
  },
  {
    unit: 2, page: 67, titleAr: 'تطبيقات الاتجاهات ورسم الخريطة', titleEn: 'Applying Directions and Drawing Maps',
    focusAr: 'يطبق الجهات الأصلية على خريطة الفصل والمدرسة، ويصف موقع الأشياء ويرسم طريقًا بسيطًا إلى مكان محدد.',
    focusEn: 'Apply cardinal directions to classroom and school maps, describe locations, and draw a simple route to a place.',
    questionAr: 'ما الأداة التي تساعد على وصف موقع مكان على الخريطة؟', questionEn: 'What helps describe the location of a place on a map?',
    optionsAr: ['الاتجاهات', 'الفصول الأربعة', 'حالة الطقس'],
    optionsEn: ['Directions', 'The four seasons', 'Weather conditions'],
    visualStepsAr: ['خريطة الفصل', 'تحديد الجهات', 'رسم الطريق', 'الوصول للمكان'],
    visualStepsEn: ['Classroom map', 'Mark directions', 'Draw the route', 'Reach the place']
  },
  {
    unit: 2, page: 73, titleAr: 'الزيارات الخيالية وقراءة المسار', titleEn: 'Imaginary Visits and Following a Route',
    focusAr: 'يتتبع مسارًا على رسم أو خريطة مبسطة، ويستخدم الاتجاهات والمواقع لتخيل زيارة أماكن متتابعة.',
    focusEn: 'Follow a route on a simple drawing or map and use directions and locations to imagine visiting places in sequence.',
    questionAr: 'ما الذي يساعد على تتبع زيارة أماكن متعددة؟', questionEn: 'What helps follow a visit to several places?',
    optionsAr: ['مسار على خريطة', 'قائمة ألوان فقط', 'جدول الفصول'],
    optionsEn: ['A route on a map', 'A list of colours only', 'A seasons chart'],
    visualStepsAr: ['نقطة البداية', 'مسار', 'أماكن الزيارة', 'نقطة الوصول'],
    visualStepsEn: ['Starting point', 'Route', 'Places to visit', 'Destination']
  },

  {
    unit: 3, page: 76, titleAr: 'مفهوم الأسرة', titleEn: 'The Meaning of Family',
    focusAr: 'يتعرف معنى الأسرة بوصفها جماعة تربط أفرادها صلات قرابة ورعاية، ويتحدث عن أسرته باحترام.',
    focusEn: 'Understand a family as a group whose members are connected through kinship and care, and speak about family respectfully.',
    questionAr: 'ما الذي يميز الأسرة؟', questionEn: 'What characterizes a family?',
    optionsAr: ['ترابط أفرادها ورعايتهم بعضهم', 'اجتماع أشخاص بلا أي علاقة', 'مكان تجتمع فيه المركبات'],
    optionsEn: ['Members are connected and care for one another', 'Unrelated people gathering', 'A place where vehicles meet'],
    visualStepsAr: ['أفراد الأسرة', 'صلة القرابة', 'رعاية متبادلة', 'أسرة مترابطة'],
    visualStepsEn: ['Family members', 'Kinship', 'Mutual care', 'Connected family']
  },
  {
    unit: 3, page: 80, titleAr: 'دور الفرد في الأسرة', titleEn: 'Each Person’s Role in the Family',
    focusAr: 'يلاحظ أدوار أفراد الأسرة ومسؤولياتهم المناسبة، ويقدر التعاون والمشاركة في شؤون البيت.',
    focusEn: 'Notice suitable roles and responsibilities of family members and value cooperation in household life.',
    questionAr: 'ما التصرف الذي يعبر عن المشاركة في الأسرة؟', questionEn: 'Which action shows participation in family life?',
    optionsAr: ['المساعدة في الأعمال المناسبة', 'ترك كل المسؤوليات للآخرين', 'إهمال حاجات الأسرة'],
    optionsEn: ['Helping with suitable tasks', 'Leaving every responsibility to others', 'Ignoring the family’s needs'],
    visualStepsAr: ['مسؤولية مناسبة', 'مساعدة', 'تعاون', 'أسرة متعاونة'],
    visualStepsEn: ['Suitable responsibility', 'Helping', 'Cooperation', 'Cooperative family']
  },
  {
    unit: 3, page: 86, titleAr: 'العلاقات في أسرتي', titleEn: 'Relationships in My Family',
    focusAr: 'يصف علاقات الاحترام والرحمة والتعاون بين أفراد الأسرة، ويذكر سلوكًا يقوي هذه الروابط.',
    focusEn: 'Describe respect, compassion, and cooperation among family members and name behavior that strengthens these bonds.',
    questionAr: 'أي سلوك يقوي العلاقات الأسرية؟', questionEn: 'Which behavior strengthens family relationships?',
    optionsAr: ['التعاون والاحترام', 'التخاصم المستمر', 'رفض الاستماع'],
    optionsEn: ['Cooperation and respect', 'Constant arguing', 'Refusing to listen'],
    visualStepsAr: ['احترام', 'رحمة', 'تعاون', 'علاقات طيبة'],
    visualStepsEn: ['Respect', 'Compassion', 'Cooperation', 'Good relationships']
  },
  {
    unit: 3, page: 97, titleAr: 'بيت أسرتي', titleEn: 'My Family’s Home',
    focusAr: 'يتعرف البيت بوصفه مكانًا للسكن، ويلاحظ اختلاف المساكن وملاءمتها لحاجات من يعيش فيها.',
    focusEn: 'Understand a home as a place to live and notice that homes differ while meeting the needs of their inhabitants.',
    questionAr: 'ما اسم المكان الذي تسكن فيه الأسرة؟', questionEn: 'What do we call the place where a family lives?',
    optionsAr: ['البيت', 'المحيط', 'الخريطة'],
    optionsEn: ['Home', 'Ocean', 'Map'],
    visualStepsAr: ['مأوى', 'غرف', 'أفراد الأسرة', 'بيت'],
    visualStepsEn: ['Shelter', 'Rooms', 'Family members', 'Home']
  },
  {
    unit: 3, page: 106, titleAr: 'مكان السكن والمجتمع', titleEn: 'Where We Live and Our Community',
    focusAr: 'يتعرف المجتمع بوصفه أسرًا وروابط متعددة، ويميز أمثلة لمجتمعات الحي والقرية والمدينة والولاية والدولة.',
    focusEn: 'Understand a community as families connected in different ways and identify neighborhood, village, town, state, and country communities.',
    questionAr: 'أي ترتيب ينتقل من مجتمع أصغر إلى أكبر؟', questionEn: 'Which sequence moves from a smaller to a larger community?',
    optionsAr: ['حي، قرية، مدينة', 'دولة، غرفة، حي', 'قارة، فصل، منزل'],
    optionsEn: ['Neighborhood, village, town', 'Country, room, neighborhood', 'Continent, classroom, home'],
    visualStepsAr: ['أسرة', 'حي', 'قرية أو مدينة', 'ولاية ودولة'],
    visualStepsEn: ['Family', 'Neighbourhood', 'Village or town', 'State and country']
  },
  {
    unit: 3, page: 110, titleAr: 'المرافق العامة في الحي', titleEn: 'Public Facilities in the Neighbourhood',
    focusAr: 'يتعرف مرافق الحي أو القرية ووظائفها، ويقدر دورها في خدمة السكان والمحافظة عليها.',
    focusEn: 'Identify neighborhood or village facilities and their purposes, and value their service to residents and the need to care for them.',
    questionAr: 'ما فائدة المرافق العامة؟', questionEn: 'What is the purpose of public facilities?',
    optionsAr: ['خدمة سكان الحي أو القرية', 'إغلاق الطرق أمام السكان', 'تغيير الفصول'],
    optionsEn: ['Serve neighborhood or village residents', 'Block roads for residents', 'Change the seasons'],
    visualStepsAr: ['مرفق عام', 'خدمة', 'سكان', 'حي'],
    visualStepsEn: ['Public facility', 'Service', 'Residents', 'Neighbourhood']
  },
  {
    unit: 3, page: 122, titleAr: 'حركة المرور المحلية والسلامة', titleEn: 'Local Traffic and Safety',
    focusAr: 'يميز وسائل الحركة في الشوارع وبعض مشكلاتها، ويتعرف علامات التحذير والإرشاد والإشارات الضوئية وقواعد العبور الآمن.',
    focusEn: 'Recognize local road users and common traffic problems, and learn warning signs, information signs, traffic lights, and safe crossing.',
    questionAr: 'ماذا يعني الضوء الأحمر في الإشارة؟', questionEn: 'What does a red traffic light mean?',
    optionsAr: ['التوقف', 'الاستعداد للتحرك', 'التحرك'],
    optionsEn: ['Stop', 'Get ready to move', 'Go'],
    visualStepsAr: ['رصيف آمن', 'انظر للطريق', 'إشارة المرور', 'عبور عند الأمان'],
    visualStepsEn: ['Safe pavement', 'Look at the road', 'Traffic signal', 'Cross when safe']
  }
];

export const SUDAN_PRIMARY_GEOGRAPHY_G3_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_GEOGRAPHY_G3_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-geography-g3-${order}`;
  const unit = SUDAN_PRIMARY_GEOGRAPHY_G3_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `الجغرافيا — الصف الثالث الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 3 Geography — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'GEOGRAPHY',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثالث من مرحلة التعليم الأساسي',
    gradeLevelNameEn: 'Grade 3 Basic Level',
    termAr: 'الجغرافيا — الصف الثالث',
    termEn: 'Grade 3 Geography',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل مكانًا من بيئتك يرتبط بموضوع «${lesson.titleAr}»، ثم صف ما تلاحظه.`,
    warmupHookEn: `Think of a place around you connected to “${lesson.titleEn}” and describe what you notice.`,
    learningOutcomesAr: [lesson.focusAr, 'يصف مثالًا من البيئة المحيطة ويستخدم المفردات الجغرافية المناسبة.'],
    learningOutcomesEn: [lesson.focusEn, 'Describe an example from the surrounding environment using suitable geography vocabulary.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط بصري: اقرأ المخطط، ثم حدد عناصره واربطها بمثال تراه في بيئتك.`,
      contentEn: `${lesson.focusEn}\n\nVisual activity: Read the diagram, identify its parts, and connect them to an example from your surroundings.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `تصور بصري: ${lesson.titleAr}`,
        titleEn: `Visual Guide: ${lesson.titleEn}`,
        captionAr: `مخطط تعليمي مبسط لعناصر «${lesson.titleAr}».`,
        captionEn: `A simple educational diagram of “${lesson.titleEn}.”`,
        diagramType: 'primary_geography_g3',
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
    topicEn: `p. ${lesson.page}`
  };
});
