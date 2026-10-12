import type { Lecture, LectureDiagram, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ENGLISH_G5_BOOK = {
  title: 'SMILE Series Book 3 (A), Pupil’s Book',
  edition: 'SMILE Series Book 3 (A)',
  grade: 'Grade 5: Basic Level',
  unitsPerBook: 6,
  lessonsPerUnit: 8,
  units: [
    { title: 'Back to School', titleAr: 'العودة إلى المدرسة', page: 1, lastPage: 8 },
    { title: 'The Earth, the Sun and Space', titleAr: 'الأرض والشمس والفضاء', page: 9, lastPage: 16 },
    { title: 'Clothes', titleAr: 'الملابس', page: 17, lastPage: 24 },
    { title: 'Animal Partners', titleAr: 'الحيوانات الشريكة', page: 25, lastPage: 32 },
    { title: 'Helping Hands', titleAr: 'أيادٍ متعاونة', page: 33, lastPage: 40 },
    { title: 'Travel and Holidays', titleAr: 'السفر والعطلات', page: 41, lastPage: 48 }
  ]
} as const;

interface EnglishLesson {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

const lessonData: EnglishLesson[] = [
  {
    titleAr: 'المواد الدراسية والجدول المدرسي',
    titleEn: 'School Subjects and the Timetable',
    focusAr: 'يسمي مواد دراسية، ويسأل ويجيب عن يوم ووقت الحصة مستعينًا بجدول أسبوعي.',
    focusEn: 'Name school subjects and ask and answer when a class meets by reading a weekly timetable.',
    questionAr: 'إذا بدأت العلوم عند 09:30، فمتى تبدأ؟',
    questionEn: 'If Science starts at 09:30, when does it begin?',
    optionsAr: ['At half past nine', 'At eight o’clock', 'At quarter to eight'],
    optionsEn: ['At half past nine', 'At eight o’clock', 'At quarter to eight']
  },
  {
    titleAr: 'وصف العطلة الماضية',
    titleEn: 'Describing a Past Holiday',
    focusAr: 'يتحدث عن مكان قضى فيه عطلة، ومن رافقه، وكيف كانت باستخدام was وwere وصفات بسيطة.',
    focusEn: 'Describe where someone spent a holiday, who was there, and how it felt using was, were, and simple adjectives.',
    questionAr: 'أي سؤال يسأل عن مكان قضيت فيه العطلة؟',
    questionEn: 'Which question asks where you spent a holiday?',
    optionsAr: ['Where were you?', 'What is your favourite subject?', 'How many planets are there?'],
    optionsEn: ['Where were you?', 'What is your favourite subject?', 'How many planets are there?']
  },
  {
    titleAr: 'السودان ومواضع الطبيعة',
    titleEn: 'Sudan and Its Natural Places',
    focusAr: 'يصف حقائق عن السودان والحيوانات والنباتات مستخدمًا المضارع البسيط وأفعالًا مثل grow وswim وfly.',
    focusEn: 'Describe facts about Sudan, its animals, and plants with the present simple and verbs such as grow, swim, and fly.',
    questionAr: 'أي جملة تصف حقيقة عن حيوان؟',
    questionEn: 'Which sentence states a fact about an animal?',
    optionsAr: ['Camels walk across the desert.', 'A camel is a timetable.', 'Birds swim above the mountains.'],
    optionsEn: ['Camels walk across the desert.', 'A camel is a timetable.', 'Birds swim above the mountains.']
  },
  {
    titleAr: 'حقائق عن طائر السكرتير',
    titleEn: 'Facts About the Secretary Bird',
    focusAr: 'يستمع إلى معلومات عن طائر السكرتير، ويطرح أسئلة عن صفاته ويستخدم المقارنة في وصف الطيور.',
    focusEn: 'Listen for facts about the secretary bird, ask about its features, and use comparisons when describing birds.',
    questionAr: 'ما نوع المعلومة التي تساعد على وصف طول الطائر؟',
    questionEn: 'Which kind of information helps describe a bird’s height?',
    optionsAr: ['A measurement', 'A weekday', 'A travel ticket'],
    optionsEn: ['A measurement', 'A weekday', 'A travel ticket']
  },
  {
    titleAr: 'حكاية القرد والتمساح',
    titleEn: 'A Monkey and a Crocodile Story',
    focusAr: 'يتابع حكاية خيالية عن قرد وتمساح، ويرتب أحداثها ويستدل على مشاعر الشخصيات من أفعالها.',
    focusEn: 'Follow an imaginative story about a monkey and a crocodile, order events, and infer feelings from actions.',
    questionAr: 'ما المهارة التي تساعد على فهم تسلسل الحكاية؟',
    questionEn: 'Which skill helps you understand a story’s sequence?',
    optionsAr: ['Putting events in time order', 'Listing unrelated colours', 'Counting school subjects'],
    optionsEn: ['Putting events in time order', 'Listing unrelated colours', 'Counting school subjects']
  },
  {
    titleAr: 'حل ذكي لمشكلة في الحكاية',
    titleEn: 'A Clever Solution in the Story',
    focusAr: 'يسترجع أحداث الحكاية ويستخدم الماضي البسيط وأفعال الطلب بـCan في حوار قصير.',
    focusEn: 'Recall the story events and use the past simple and Can-requests in a short dialogue.',
    questionAr: 'أي سؤال يطلب الإذن بطريقة مباشرة؟',
    questionEn: 'Which question asks for permission directly?',
    optionsAr: ['Can we cross the river?', 'We crossed the river yesterday.', 'The river is very wide.'],
    optionsEn: ['Can we cross the river?', 'We crossed the river yesterday.', 'The river is very wide.']
  },
  {
    titleAr: 'يوم الاستقلال في السودان',
    titleEn: 'Sudan’s Independence Day',
    focusAr: 'يستخرج التاريخ والطقس والأشخاص والأفعال من خبر قصير، ويصف ما يفعله الناس في مشهد عام.',
    focusEn: 'Find the date, weather, people, and actions in a short report, then describe what people are doing in a public scene.',
    questionAr: 'أي سؤال يساعد على معرفة ما يفعله الناس الآن؟',
    questionEn: 'Which question helps find out what people are doing now?',
    optionsAr: ['What are the people doing?', 'Where were you on holiday?', 'Which planet is the coldest?'],
    optionsEn: ['What are the people doing?', 'Where were you on holiday?', 'Which planet is the coldest?']
  },
  {
    titleAr: 'مراجعة المدرسة والسودان',
    titleEn: 'Reviewing School and Sudan',
    focusAr: 'يراجع المواد الدراسية والجدول ووصف العطلة وحقائق السودان والطيور وتسلسل الحكايات.',
    focusEn: 'Review school subjects, timetables, holiday descriptions, facts about Sudan and birds, and story sequences.',
    questionAr: 'أي مجموعة كلمات تلائم موضوع المدرسة؟',
    questionEn: 'Which group of words fits the school theme?',
    optionsAr: ['History, Science, timetable', 'Falcon, desert, feather', 'Ticket, airport, journey'],
    optionsEn: ['History, Science, timetable', 'Falcon, desert, feather', 'Ticket, airport, journey']
  },
  {
    titleAr: 'الشمس وقواعد السلامة',
    titleEn: 'The Sun and Safety Rules',
    focusAr: 'يتعرف إلى دور الشمس في الضوء والحرارة ونمو النبات، ويصوغ نواهي للسلامة باستخدام mustn’t.',
    focusEn: 'Recognize how the sun provides light and warmth and supports plant growth, and state safety prohibitions with mustn’t.',
    questionAr: 'أي عبارة تنصح بالسلامة في ضوء الشمس؟',
    questionEn: 'Which sentence gives a safety rule for sunshine?',
    optionsAr: ['You mustn’t look straight at the sun.', 'You must look at the sun for a long time.', 'You must stand outside all day.'],
    optionsEn: ['You mustn’t look straight at the sun.', 'You must look at the sun for a long time.', 'You must stand outside all day.']
  },
  {
    titleAr: 'الكواكب ومقارنتها',
    titleEn: 'Planets and Comparisons',
    focusAr: 'يسمي الكواكب ويرتبها بالنسبة إلى الشمس، ويقارن بينها باستخدام صفات مثل hotter وcolder.',
    focusEn: 'Name the planets and describe their positions in relation to the sun, comparing them with words such as hotter and colder.',
    questionAr: 'أي كوكب يبعد عن الشمس أكثر من الأرض؟',
    questionEn: 'Which planet is farther from the sun than Earth?',
    optionsAr: ['Neptune', 'Mercury', 'Venus'],
    optionsEn: ['Neptune', 'Mercury', 'Venus']
  },
  {
    titleAr: 'حكاية النجم والزهرة',
    titleEn: 'The Star and the Flower',
    focusAr: 'يفهم حوارًا خياليًا عن نجم يبحث عن مكان، ويصف رغبات الشخصيات وتغير أحوالها.',
    focusEn: 'Understand an imaginative dialogue about a star seeking a home and describe the characters’ wishes and changing situations.',
    questionAr: 'ما السؤال الذي يساعد على معرفة رغبة شخصية؟',
    questionEn: 'Which question helps discover a character’s wish?',
    optionsAr: ['What does the star want?', 'How many desks are in class?', 'What colour is your coat?'],
    optionsEn: ['What does the star want?', 'How many desks are in class?', 'What colour is your coat?']
  },
  {
    titleAr: 'ترتيب أحداث حكاية النجم',
    titleEn: 'Sequencing the Star’s Story',
    focusAr: 'يرتب أحداث الحكاية بعبارات زمنية مثل first وafter that وfinally، ويربط السبب بالنتيجة.',
    focusEn: 'Sequence story events with time phrases such as first, after that, and finally, and connect reasons with results.',
    questionAr: 'أي كلمة تشير إلى الحدث الأخير؟',
    questionEn: 'Which word signals the final event?',
    optionsAr: ['finally', 'between', 'smallest'],
    optionsEn: ['finally', 'between', 'smallest']
  },
  {
    titleAr: 'شرح كسوف الشمس بالنماذج',
    titleEn: 'Modelling a Solar Eclipse',
    focusAr: 'يشرح موضع القمر والأرض والشمس في نموذج بسيط، ويستخدم مفردات الترتيب والحجم والموقع.',
    focusEn: 'Explain the positions of the moon, Earth, and sun in a simple model, using words for order, size, and location.',
    questionAr: 'أي جسم يقع بين الأرض والشمس أثناء كسوف الشمس؟',
    questionEn: 'Which object comes between Earth and the sun during a solar eclipse?',
    optionsAr: ['The moon', 'A planet outside the solar system', 'A cloud on Earth'],
    optionsEn: ['The moon', 'A planet outside the solar system', 'A cloud on Earth']
  },
  {
    titleAr: 'حقائق عن الأرض',
    titleEn: 'Facts About Earth',
    focusAr: 'يصف دوران الأرض حول الشمس، ويذكر معلومات عن اليوم والسنة والماء مستخدمًا جملًا واضحة.',
    focusEn: 'Describe Earth’s orbit around the sun and state facts about a day, a year, and water in clear sentences.',
    questionAr: 'كم ساعة في اليوم الواحد؟',
    questionEn: 'How many hours are there in one day?',
    optionsAr: ['Twenty-four', 'Twelve hundred', 'Three hundred and sixty-five'],
    optionsEn: ['Twenty-four', 'Twelve hundred', 'Three hundred and sixty-five']
  },
  {
    titleAr: 'رحلة أبولو 11 إلى القمر',
    titleEn: 'Apollo 11’s Journey to the Moon',
    focusAr: 'يرتب مراحل رحلة فضائية تاريخية من الانطلاق إلى العودة، ويستخدم أفعال الماضي لعرض الوقائع.',
    focusEn: 'Order the stages of a historic space journey from launch to return, using past-tense verbs to report events.',
    questionAr: 'ما الخطوة التي تسبق عودة رواد الفضاء إلى الأرض؟',
    questionEn: 'Which step happens before the astronauts return to Earth?',
    optionsAr: ['They complete their work on the moon.', 'They begin another school term.', 'They pack winter clothes.'],
    optionsEn: ['They complete their work on the moon.', 'They begin another school term.', 'They pack winter clothes.']
  },
  {
    titleAr: 'مراجعة الأرض والفضاء',
    titleEn: 'Reviewing Earth and Space',
    focusAr: 'يراجع قواعد السلامة من الشمس، ومقارنة الكواكب، ومراحل الكسوف والرحلات الفضائية.',
    focusEn: 'Review sun-safety rules, planet comparisons, eclipse stages, and space journeys.',
    questionAr: 'أي مجموعة تنتمي إلى موضوع الفضاء؟',
    questionEn: 'Which group belongs to the space theme?',
    optionsAr: ['Earth, moon, orbit', 'Cotton, scarf, boots', 'Guide dog, falcon, donkey'],
    optionsEn: ['Earth, moon, orbit', 'Cotton, scarf, boots', 'Guide dog, falcon, donkey']
  },
  {
    titleAr: 'أسماء الملابس',
    titleEn: 'Naming Clothes',
    focusAr: 'يسمي قطع الملابس المألوفة، ويميز بين المفرد والجمع باستخدام this is وthese are.',
    focusEn: 'Name familiar clothes and distinguish singular from plural with this is and these are.',
    questionAr: 'أي بداية تناسب الحديث عن زوج من الأحذية؟',
    questionEn: 'Which opening fits a pair of shoes?',
    optionsAr: ['These are my shoes.', 'This are my shoe.', 'There is my shoes.'],
    optionsEn: ['These are my shoes.', 'This are my shoe.', 'There is my shoes.']
  },
  {
    titleAr: 'الملكية وملابس الآخرين',
    titleEn: 'Possession and Other People’s Clothes',
    focusAr: 'يسأل لمن تعود قطعة ملابس ويجيب باستخدام whose وmine وyours وhis وhers.',
    focusEn: 'Ask who owns an item of clothing and answer with whose, mine, yours, his, and hers.',
    questionAr: 'أي كلمة تجيب عن سؤال: لمن هذا القميص؟',
    questionEn: 'Which word can answer “Whose shirt is this?”',
    optionsAr: ['Mine', 'Yesterday', 'Cotton'],
    optionsEn: ['Mine', 'Yesterday', 'Cotton']
  },
  {
    titleAr: 'مواد صنع الملابس',
    titleEn: 'Materials Used to Make Clothes',
    focusAr: 'يربط الملابس بموادها مثل القطن والصوف والجلد والحرير، ويستخرج معلومات مباشرة من نص وصفي.',
    focusEn: 'Match clothes with materials such as cotton, wool, leather, and silk, and find explicit facts in a description.',
    questionAr: 'من أي نبات نحصل على القطن؟',
    questionEn: 'Which plant gives us cotton?',
    optionsAr: ['A cotton plant', 'A wool tree', 'A leather flower'],
    optionsEn: ['A cotton plant', 'A wool tree', 'A leather flower']
  },
  {
    titleAr: 'اختيار الملابس حسب الطقس',
    titleEn: 'Choosing Clothes for the Weather',
    focusAr: 'يختار ما يلائم الطقس البارد أو الحار أو الماطر، ويقدم نصيحة بسيطة باستخدام should.',
    focusEn: 'Choose suitable clothes for cold, hot, or wet weather and give simple advice with should.',
    questionAr: 'ماذا ينبغي أن ترتدي في طقس بارد ومثلج؟',
    questionEn: 'What should you wear in cold, snowy weather?',
    optionsAr: ['A scarf and gloves', 'Sandals and a swimsuit', 'A light T-shirt only'],
    optionsEn: ['A scarf and gloves', 'Sandals and a swimsuit', 'A light T-shirt only']
  },
  {
    titleAr: 'حكاية قطف القطن',
    titleEn: 'A Cotton-Picking Story',
    focusAr: 'يتتبع يومًا في موسم قطف القطن، ويرتب أحداث العمل والراحة مستخدمًا أفعال الماضي.',
    focusEn: 'Follow a day during cotton-picking season and sequence work and rest using past-tense verbs.',
    questionAr: 'أي عبارة تدل على أن الحدث وقع في الماضي؟',
    questionEn: 'Which phrase shows that an event happened in the past?',
    optionsAr: ['We walked to the fields.', 'We walk to the fields now.', 'We are walking tomorrow.'],
    optionsEn: ['We walked to the fields.', 'We walk to the fields now.', 'We are walking tomorrow.']
  },
  {
    titleAr: 'حكاية بائع القبعات',
    titleEn: 'The Hat Seller’s Story',
    focusAr: 'يروي أحداثًا متتابعة عن بائع قبعات وقرود، مستخدمًا أفعالًا ماضية لوصف ما فعله كل طرف.',
    focusEn: 'Retell a sequence about a hat seller and monkeys, using past-tense verbs for each character’s actions.',
    questionAr: 'ما الذي يساعد على إعادة سرد الحكاية؟',
    questionEn: 'What helps you retell the story?',
    optionsAr: ['Remembering the order of actions', 'Changing every verb to the future', 'Naming unrelated planets'],
    optionsEn: ['Remembering the order of actions', 'Changing every verb to the future', 'Naming unrelated planets']
  },
  {
    titleAr: 'المهن والزي المناسب',
    titleEn: 'Jobs and Suitable Uniforms',
    focusAr: 'يتحدث عن مهن مثل الطبيب ورجل الإطفاء والشرطي والميكانيكي، ويربط الزي بعمل صاحبه.',
    focusEn: 'Talk about jobs such as doctor, firefighter, police officer, and mechanic, and link each uniform to its work.',
    questionAr: 'لماذا يرتدي رجل الإطفاء ملابس واقية؟',
    questionEn: 'Why does a firefighter wear protective clothes?',
    optionsAr: ['To protect against heat and fire', 'To travel to the moon', 'To pick cotton in the rain'],
    optionsEn: ['To protect against heat and fire', 'To travel to the moon', 'To pick cotton in the rain']
  },
  {
    titleAr: 'مراجعة الملابس والمواد والقصص',
    titleEn: 'Reviewing Clothes, Materials, and Stories',
    focusAr: 'يراجع أسماء الملابس وموادها واختيارها للطقس، ويسترجع أفعال الماضي في القصص.',
    focusEn: 'Review clothing words, materials, weather choices, and past-tense actions in stories.',
    questionAr: 'أي مادة تستخدم كثيرًا لصنع القمصان؟',
    questionEn: 'Which material is often used to make shirts?',
    optionsAr: ['Cotton', 'Moonlight', 'Sand'],
    optionsEn: ['Cotton', 'Moonlight', 'Sand']
  },
  {
    titleAr: 'الحيوانات التي تساعد الناس',
    titleEn: 'Animals That Help People',
    focusAr: 'يسمي حيوانات نافعة مثل الجمل والحمار والفيل وكلب الإرشاد، ويصف الخدمة التي يقدمها كل حيوان.',
    focusEn: 'Name helpful animals such as camels, donkeys, elephants, and guide dogs, and describe the service each provides.',
    questionAr: 'أي حيوان يمكن أن يساعد شخصًا على التنقل بأمان؟',
    questionEn: 'Which animal can help a person move around safely?',
    optionsAr: ['A guide dog', 'A sheep', 'A falcon feather'],
    optionsEn: ['A guide dog', 'A sheep', 'A falcon feather']
  },
  {
    titleAr: 'يوم مميز مع الحمار',
    titleEn: 'A Special Day with a Donkey',
    focusAr: 'يقرأ عن يوم ماضٍ مع حمار، ويجيب عن أسئلة تبدأ بـDid مستخدمًا إجابات قصيرة.',
    focusEn: 'Read about a past day with a donkey and answer Did-questions with short responses.',
    questionAr: 'كيف تجيب بإيجاب عن سؤال: هل استيقظ إدريس مبكرًا؟',
    questionEn: 'How do you answer yes to “Did Idris wake up early?”',
    optionsAr: ['Yes, he did.', 'Yes, he does yesterday.', 'Yes, he waking.'],
    optionsEn: ['Yes, he did.', 'Yes, he does yesterday.', 'Yes, he waking.']
  },
  {
    titleAr: 'الصقر وصاحبه',
    titleEn: 'A Falcon and Its Owner',
    focusAr: 'يتتبع مراحل تدريب الصقر والصيد والراحة، ويصف صاحبه بجملة توضح صفته أو عمله.',
    focusEn: 'Follow a falcon’s training, hunting, and rest, and describe its owner with a sentence that adds information.',
    questionAr: 'لماذا يرتدي صاحب الصقر قفازًا جلديًا؟',
    questionEn: 'Why does a falcon’s owner wear a leather glove?',
    optionsAr: ['To protect his hand', 'To keep the bird asleep', 'To make the desert colder'],
    optionsEn: ['To protect his hand', 'To keep the bird asleep', 'To make the desert colder']
  },
  {
    titleAr: 'العناية بالحيوانات وقواعدها',
    titleEn: 'Animal Care and Rules',
    focusAr: 'يضع قواعد للعناية بالصقر باستخدام must وmustn’t، ويستخرج المكان والتاريخ والعدد من معلومة قصيرة.',
    focusEn: 'Set falcon-care rules with must and mustn’t, and find a place, date, and number in a short factual text.',
    questionAr: 'أي قاعدة مناسبة للعناية بصقر؟',
    questionEn: 'Which rule is suitable for caring for a falcon?',
    optionsAr: ['You must be kind to the bird.', 'You must give it cake every hour.', 'You must leave it without water.'],
    optionsEn: ['You must be kind to the bird.', 'You must give it cake every hour.', 'You must leave it without water.']
  },
  {
    titleAr: 'حيوانات المزرعة والنصيحة',
    titleEn: 'Farm Animals and Advice',
    focusAr: 'يفهم أسباب تربية حيوانات المزرعة، ويقترح ما ينبغي فعله باستخدام should مع because.',
    focusEn: 'Understand why farm animals are kept and suggest what someone should do using should and because.',
    questionAr: 'أي جملة تقدم نصيحة مع سبب؟',
    questionEn: 'Which sentence gives advice with a reason?',
    optionsAr: ['You should give the animals clean water.', 'The planet is colder than Mars.', 'Whose coat is this?'],
    optionsEn: ['You should give the animals clean water.', 'The planet is colder than Mars.', 'Whose coat is this?']
  },
  {
    titleAr: 'تعاون طائر البلشون والماشية',
    titleEn: 'Cattle Egrets and Grazing Animals',
    focusAr: 'يشرح كيف يستفيد طائر البلشون والماشية بعضهما من بعض، ويميز ما يستطيع فعله الطائر عما لا يناسب الإنسان.',
    focusEn: 'Explain how cattle egrets and grazing animals help one another, and distinguish what the bird can do from what is unsafe for people.',
    questionAr: 'كيف يستفيد البلشون من وجوده قرب الحيوانات؟',
    questionEn: 'How does an egret benefit from staying near animals?',
    optionsAr: ['It finds insects to eat.', 'It carries the animals to town.', 'It makes the grass disappear.'],
    optionsEn: ['It finds insects to eat.', 'It carries the animals to town.', 'It makes the grass disappear.']
  },
  {
    titleAr: 'رسالة عن مهرجان الفيلة',
    titleEn: 'A Letter About an Elephant Festival',
    focusAr: 'يقرأ رسالة عن زيارة مهرجان، ويستخرج من فيها وماذا حدث وأين ومتى، ثم يرتب الأنشطة.',
    focusEn: 'Read a letter about a festival visit, identify who did what, where, and when, then order the activities.',
    questionAr: 'أي سؤال يطلب مكان إقامة المهرجان؟',
    questionEn: 'Which question asks where the festival takes place?',
    optionsAr: ['Where is the festival?', 'Who is wearing a coat?', 'How many hours are in a day?'],
    optionsEn: ['Where is the festival?', 'Who is wearing a coat?', 'How many hours are in a day?']
  },
  {
    titleAr: 'مراجعة الشراكة مع الحيوانات',
    titleEn: 'Reviewing Animal Partnerships',
    focusAr: 'يراجع خدمات الحيوانات ورعايتها والحديث عن أحداث ماضية، ويصف علاقة نافعة بين كائنات حية.',
    focusEn: 'Review animal services and care, past events, and a helpful relationship between living things.',
    questionAr: 'أي فعل يصف ما فعله إدريس بالأمس؟',
    questionEn: 'Which verb describes something Idris did yesterday?',
    optionsAr: ['He gave the donkey water.', 'He gives water tomorrow.', 'He is a planet.'],
    optionsEn: ['He gave the donkey water.', 'He gives water tomorrow.', 'He is a planet.']
  },
  {
    titleAr: 'العمل معًا لبناء المستقبل',
    titleEn: 'Working Together for the Future',
    focusAr: 'يتحدث عن عادات وأعمال تفيد المجتمع، ويميز بين ما يمكن أن يفعله التلاميذ وما لا ينبغي فعله.',
    focusEn: 'Talk about habits and actions that benefit a community, distinguishing what pupils can do from what they should avoid.',
    questionAr: 'أي فعل يساعد على بناء مستقبل أفضل؟',
    questionEn: 'Which action helps build a better future?',
    optionsAr: ['Study and learn together.', 'Arrive late every day.', 'Waste useful food.'],
    optionsEn: ['Study and learn together.', 'Arrive late every day.', 'Waste useful food.']
  },
  {
    titleAr: 'مبادرات مساعدة الآخرين',
    titleEn: 'Ways to Help Other People',
    focusAr: 'يصف مبادرات مجتمعية مثل التبرع أو إصلاح مدرسة، ويسأل لماذا تساعد مجموعةٌ فئةً معينة.',
    focusEn: 'Describe community efforts such as donating or improving a school, and ask why a group helps a particular community.',
    questionAr: 'لماذا قد يضع الناس المال في صندوق خيري؟',
    questionEn: 'Why might people put money in a charity box?',
    optionsAr: ['To help people in need', 'To buy a planet', 'To change the weather'],
    optionsEn: ['To help people in need', 'To buy a planet', 'To change the weather']
  },
  {
    titleAr: 'وصف الكميات والاحتياجات',
    titleEn: 'Describing Amounts and Needs',
    focusAr: 'يصف ما هو متوفر أو قليل في مكان ما باستخدام تراكيب الكمية للأسماء المعدودة وغير المعدودة.',
    focusEn: 'Describe what is plentiful or scarce in a place using quantity phrases with countable and uncountable nouns.',
    questionAr: 'أي جملة تستخدم تركيبًا مناسبًا مع اسم جمع معدود؟',
    questionEn: 'Which sentence uses a suitable quantity phrase with a plural countable noun?',
    optionsAr: ['There are a lot of trees.', 'There are much water.', 'There is many chairs.'],
    optionsEn: ['There are a lot of trees.', 'There are much water.', 'There is many chairs.']
  },
  {
    titleAr: 'الطعام الصحي والعادات الجيدة',
    titleEn: 'Healthy Food and Good Habits',
    focusAr: 'يعبر عن التفضيلات الغذائية، ويناقش السلوك الصحي في الصف مستخدمًا should وshouldn’t.',
    focusEn: 'Express food preferences and discuss healthy classroom habits using should and shouldn’t.',
    questionAr: 'أي نصيحة تشجع على عادة صفية جيدة؟',
    questionEn: 'Which piece of advice encourages a good classroom habit?',
    optionsAr: ['Pupils should keep the classroom tidy.', 'Pupils should throw rubbish on the floor.', 'Pupils shouldn’t drink clean water.'],
    optionsEn: ['Pupils should keep the classroom tidy.', 'Pupils should throw rubbish on the floor.', 'Pupils shouldn’t drink clean water.']
  },
  {
    titleAr: 'قصة علي ومساعدة الأسرة',
    titleEn: 'Ali’s Story and Helping His Family',
    focusAr: 'يفهم قصة قصيرة عن طفل يساعد أسرته، ويجيب عن أسئلة الماضي ويقترح مساعدة عادلة.',
    focusEn: 'Understand a short story about a child helping his family, answer past-tense questions, and suggest fair support.',
    questionAr: 'أي اقتراح يجمع بين التعليم والمساندة؟',
    questionEn: 'Which suggestion combines education with support?',
    optionsAr: ['Help Ali continue school and support his family.', 'Ask Ali to stop learning forever.', 'Ignore the family’s needs.'],
    optionsEn: ['Help Ali continue school and support his family.', 'Ask Ali to stop learning forever.', 'Ignore the family’s needs.']
  },
  {
    titleAr: 'حكاية الدجاجة الصغيرة والعمل الجماعي',
    titleEn: 'The Little Hen and Teamwork',
    focusAr: 'يتابع مراحل زراعة المحصول وجمعه وإعداده في حكاية، ويقارن بين التعاون ورفض المساعدة.',
    focusEn: 'Follow the stages of growing, gathering, and preparing a crop in a story, and compare cooperation with refusing to help.',
    questionAr: 'ما الترتيب المنطقي لإعداد محصول؟',
    questionEn: 'What is a logical order for preparing a crop?',
    optionsAr: ['Plant, harvest, then prepare it.', 'Prepare it, plant it, then harvest it.', 'Harvest it before planting.'],
    optionsEn: ['Plant, harvest, then prepare it.', 'Prepare it, plant it, then harvest it.', 'Harvest it before planting.']
  },
  {
    titleAr: 'المشاركة في أعمال المجتمع',
    titleEn: 'Taking Part in Community Work',
    focusAr: 'يصف أفعالًا جارية في مشروعات نافعة، ويستخدم كلمات الكمية والنصيحة لاقتراح تحسينات عملية.',
    focusEn: 'Describe ongoing actions in helpful projects and use quantity language and advice to suggest practical improvements.',
    questionAr: 'أي فعل يمثل مشاركة إيجابية في مشروع؟',
    questionEn: 'Which action shows positive participation in a project?',
    optionsAr: ['Helping to improve a shared space', 'Leaving tools scattered', 'Stopping others from learning'],
    optionsEn: ['Helping to improve a shared space', 'Leaving tools scattered', 'Stopping others from learning']
  },
  {
    titleAr: 'مراجعة التعاون والمساعدة',
    titleEn: 'Reviewing Cooperation and Helping',
    focusAr: 'يراجع العمل الجماعي ومبادرات المساعدة والكمية والطعام الصحي والنصيحة في مواقف يومية.',
    focusEn: 'Review teamwork, helping efforts, quantity expressions, healthy food, and advice in everyday situations.',
    questionAr: 'أي جملة تقدم اقتراحًا مناسبًا لمجموعة؟',
    questionEn: 'Which sentence gives a suitable suggestion to a group?',
    optionsAr: ['We should work together.', 'We should waste our food.', 'We shouldn’t help anyone.'],
    optionsEn: ['We should work together.', 'We should waste our food.', 'We shouldn’t help anyone.']
  },
  {
    titleAr: 'وسائل السفر والوجهات',
    titleEn: 'Ways to Travel and Destinations',
    focusAr: 'يسمي وسائل النقل والوجهات، ويتحدث عما يود زيارته وكيف يرغب في الوصول إليه.',
    focusEn: 'Name transport and destinations, and say where someone would like to go and how they would travel.',
    questionAr: 'أي عبارة توضح وسيلة سفر؟',
    questionEn: 'Which phrase names a way to travel?',
    optionsAr: ['By train', 'Because it is sunny', 'At half past nine'],
    optionsEn: ['By train', 'Because it is sunny', 'At half past nine']
  },
  {
    titleAr: 'أسباب السفر',
    titleEn: 'Reasons for Travelling',
    focusAr: 'يذكر أسبابًا متنوعة للسفر مثل زيارة الأقارب أو التعلم أو قضاء العطلة، ويشرح اختيارًا شخصيًا.',
    focusEn: 'Give different reasons for travel, such as visiting relatives, studying, or taking a holiday, and explain a personal choice.',
    questionAr: 'أي جملة تذكر سببًا للسفر؟',
    questionEn: 'Which sentence gives a reason for travelling?',
    optionsAr: ['People travel to visit family.', 'The scarf is green.', 'There are twenty-four hours in a day.'],
    optionsEn: ['People travel to visit family.', 'The scarf is green.', 'There are twenty-four hours in a day.']
  },
  {
    titleAr: 'رسالة عن رحلة إلى بورتسودان',
    titleEn: 'A Message About a Journey to Port Sudan',
    focusAr: 'يقرأ رسالة عن رحلة بالحافلة ويجيب عن أسئلة المكان والوقت والمدة والسبب باستخدام أدوات الاستفهام.',
    focusEn: 'Read a message about a bus journey and answer where, when, how long, and why questions.',
    questionAr: 'أي سؤال يسأل عن مدة التوقف؟',
    questionEn: 'Which question asks how long a stop lasted?',
    optionsAr: ['How long did the bus stop?', 'Where would you like to travel?', 'Who made the clothes?'],
    optionsEn: ['How long did the bus stop?', 'Where would you like to travel?', 'Who made the clothes?']
  },
  {
    titleAr: 'اقتراح أماكن للزيارة في السودان',
    titleEn: 'Suggesting Places to Visit in Sudan',
    focusAr: 'يقترح أنشطة وأماكن للزيارة في السودان باستخدام Let’s وHow about، ثم يسأل عن التفضيلات وأسبابها.',
    focusEn: 'Suggest activities and places to visit in Sudan with Let’s and How about, then ask about preferences and reasons.',
    questionAr: 'أي تعبير يقدم اقتراحًا للزيارة؟',
    questionEn: 'Which expression makes a suggestion about a visit?',
    optionsAr: ['How about exploring the park?', 'I explored it last year.', 'Where did the bus stop?'],
    optionsEn: ['How about exploring the park?', 'I explored it last year.', 'Where did the bus stop?']
  },
  {
    titleAr: 'شراء تذكرة سفر',
    titleEn: 'Buying a Travel Ticket',
    focusAr: 'يمثل حوارًا مهذبًا في مكتب سفر لطلب تذكرة، ويشرح الحاجة أو الغرض باستخدام so وbecause.',
    focusEn: 'Act out a polite travel-office conversation to request a ticket and explain needs or purpose with so and because.',
    questionAr: 'أي كلمة تربط الحاجة بالغاية؟',
    questionEn: 'Which word can connect a need with its purpose?',
    optionsAr: ['so', 'whose', 'between'],
    optionsEn: ['so', 'whose', 'between']
  },
  {
    titleAr: 'سيرة كاتب ومغامرة خيالية',
    titleEn: 'A Writer’s Life and an Imagined Adventure',
    focusAr: 'يستخرج تواريخ من سيرة قصيرة، ويميز أحداث الماضي في قصة رحلة ومغامرة حول العالم.',
    focusEn: 'Find dates in a short biography and identify past events in a story of a journey around the world.',
    questionAr: 'أي سؤال يسأل عن سنة ميلاد شخص؟',
    questionEn: 'Which question asks for someone’s year of birth?',
    optionsAr: ['When was he born?', 'Where would you like to go?', 'How many bags are there?'],
    optionsEn: ['When was he born?', 'Where would you like to go?', 'How many bags are there?']
  },
  {
    titleAr: 'الاستعداد للسفر عبر المطار',
    titleEn: 'Preparing to Travel Through an Airport',
    focusAr: 'يتعرف إلى مفردات المطار وإجراءاته، ويرتب خطوات المسافر من تسجيل الوصول حتى المغادرة.',
    focusEn: 'Learn airport words and procedures, and order a traveller’s steps from check-in to departure.',
    questionAr: 'أي شيء يحتاجه المسافر عند نقطة مراقبة الجوازات؟',
    questionEn: 'What does a traveller need at passport control?',
    optionsAr: ['A passport', 'A cotton scarf only', 'A planet map'],
    optionsEn: ['A passport', 'A cotton scarf only', 'A planet map']
  },
  {
    titleAr: 'مراجعة السفر والعطلات',
    titleEn: 'Reviewing Travel and Holidays',
    focusAr: 'يراجع الوجهات ووسائل النقل وأسباب السفر والرسائل والاقتراحات والشراء وإجراءات المطار.',
    focusEn: 'Review destinations, transport, reasons for travel, messages, suggestions, purchases, and airport procedures.',
    questionAr: 'أي مجموعة ترتبط بالسفر عبر المطار؟',
    questionEn: 'Which group is connected with travelling through an airport?',
    optionsAr: ['Passport, check-in, departure gate', 'Cotton, wool, leather', 'Soil, seed, flower'],
    optionsEn: ['Passport, check-in, departure gate', 'Cotton, wool, leather', 'Soil, seed, flower']
  }
];

export const SUDAN_PRIMARY_ENGLISH_G5_TABLE_OF_CONTENTS = lessonData.map((lesson, index) => {
  const unit = Math.floor(index / 8) + 1;
  const lessonInUnit = (index % 8) + 1;
  return {
    lessonNumber: index + 1,
    unit,
    lessonInUnit,
    page: (unit - 1) * 8 + lessonInUnit,
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn
  };
});

export const SUDAN_PRIMARY_ENGLISH_G5_LECTURES: Lecture[] = lessonData.map((lesson, index) => {
  const unitNumber = Math.floor(index / 8) + 1;
  const lessonInUnit = (index % 8) + 1;
  const order = index + 1;
  const page = (unitNumber - 1) * 8 + lessonInUnit;
  const correctIndex = index % 3;
  const optionRotation = (3 - correctIndex) % 3;
  const rotateOptions = (options: [string, string, string]) => [
    ...options.slice(optionRotation),
    ...options.slice(0, optionRotation)
  ];
  const optionsAr = rotateOptions(lesson.optionsAr);
  const optionsEn = rotateOptions(lesson.optionsEn);
  const unit = SUDAN_PRIMARY_ENGLISH_G5_BOOK.units[unitNumber - 1];
  const id = `sd-primary-english-g5-${order}`;
  const titleAr = `الوحدة ${unitNumber}، الدرس ${lessonInUnit}: ${lesson.titleAr}`;
  const titleEn = `Unit ${unitNumber}, Lesson ${lessonInUnit}: ${lesson.titleEn}`;
  const visualSteps: LectureDiagramStep[] = [
    { labelAr: `لاحظ موقفًا يرتبط بموضوع «${lesson.titleAr}».`, labelEn: `Notice a situation connected with “${lesson.titleEn}.”` },
    { labelAr: 'حدد الكلمات أو المعلومات الأساسية في الموقف.', labelEn: 'Identify the key words or information in the situation.' },
    { labelAr: 'تدرّب على التعبير أو المهارة بجملة قصيرة.', labelEn: 'Practise the language or skill in a short sentence.' },
    { labelAr: 'طبّق ما تعلمته لتجيب أو تصف بثقة.', labelEn: 'Apply what you learned to answer or describe with confidence.' }
  ];
  const diagram = {
    id: `${id}-visual`,
    figureNumberAr: `تسلسل بصري (${unitNumber}-${lessonInUnit})`,
    figureNumberEn: `Visual Sequence (${unitNumber}-${lessonInUnit})`,
    titleAr: `خطوات بصرية: ${lesson.titleAr}`,
    titleEn: `Visual Steps: ${lesson.titleEn}`,
    captionAr: 'تدرّب على هدف الدرس عبر أربع خطوات بصرية.',
    captionEn: 'Practise the lesson focus through four visual steps.',
    diagramType: 'primary_lesson_sequence',
    visualSteps
  } as unknown as LectureDiagram;

  return {
    id,
    order,
    titleAr,
    titleEn,
    subtitleAr: `اللغة الإنجليزية — الصف الخامس الأساسي — ${unit.titleAr}`,
    subtitleEn: `SMILE Series Book 3 (A) — Unit ${unitNumber}: ${unit.title}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ENGLISH',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الخامس الأساسي — جمهورية السودان',
    gradeLevelNameEn: 'Grade 5 Basic Level — Republic of the Sudan',
    termAr: 'كتاب التلميذ — SMILE Series Book 3 (A)',
    termEn: 'Pupil’s Book — SMILE Series Book 3 (A)',
    unitTitleAr: unit.titleAr,
    unitTitleEn: `Unit ${unitNumber}: ${unit.title}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في موقف من حياتك يرتبط بموضوع «${lesson.titleAr}»، واذكر كلمة تعرفها عنه.`,
    warmupHookEn: `Think of a moment from your life connected with “${lesson.titleEn},” and name a word you already know.`,
    learningOutcomesAr: [lesson.focusAr, 'يستخدم مفردات الدرس في إجابة أو حوار قصير.'],
    learningOutcomesEn: [lesson.focusEn, 'Use lesson vocabulary in a short answer or conversation.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    diagramType: 'primary_lesson_sequence',
    diagramData: {
      titleAr: `خطوات بصرية: ${lesson.titleAr}`,
      titleEn: `Visual Steps: ${lesson.titleEn}`,
      visualSteps
    },
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nنشاط: اتبع الخطوات الأربع، ثم استخدم كلمات الدرس في وصف أو إجابة قصيرة.`,
      contentEn: `${lesson.focusEn}\n\nActivity: Follow the four steps, then use the lesson language in a short description or answer.`,
      diagram
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
        optionsAr,
        optionsEn,
        correctIndex,
        conceptTestedAr: lesson.titleAr,
        conceptTestedEn: lesson.titleEn,
        explanationAr: `الإجابة الصحيحة: ${optionsAr[correctIndex]}.`,
        explanationEn: `Correct answer: ${optionsEn[correctIndex]}.`,
        difficulty: 'easy'
      }]
    },
    topicAr: `ص ${page}`,
    topicEn: `Unit ${unitNumber}, Lesson ${lessonInUnit} — p. ${page}`
  };
});
