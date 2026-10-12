import type { Lecture, LectureDiagram, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ENGLISH_G4_BOOK = {
  title: 'SMILE Series Book 2, Pupil’s Book',
  edition: 'November 2016 series',
  grade: 'Grade 4: Basic Level',
  unitsPerBook: 12,
  lessonsPerUnit: 8,
  unitOnePurpose: 'Consolidates learning from Book 1',
  unitTwelvePurpose: 'Reviews learning from the previous units',
  units: [
    { title: 'Welcome Back to English', titleAr: 'مرحبًا بعودتكم إلى الإنجليزية', page: 1, lastPage: 8 },
    { title: 'Family and Community', titleAr: 'الأسرة والمجتمع', page: 9, lastPage: 16 },
    { title: 'People, Plants and Numbers', titleAr: 'الناس والنباتات والأعداد', page: 17, lastPage: 24 },
    { title: 'Sports and Games', titleAr: 'الرياضة والألعاب', page: 25, lastPage: 32 },
    { title: 'Places in Sudan', titleAr: 'أماكن في السودان', page: 33, lastPage: 40 },
    { title: 'Amazing Animals', titleAr: 'حيوانات مدهشة', page: 41, lastPage: 48 },
    { title: 'Time and Weather', titleAr: 'الوقت والطقس', page: 49, lastPage: 56 },
    { title: 'Money and Home', titleAr: 'النقود والمنزل', page: 57, lastPage: 64 },
    { title: 'Here to There', titleAr: 'من هنا إلى هناك', page: 65, lastPage: 72 },
    { title: 'Machines', titleAr: 'الآلات', page: 73, lastPage: 80 },
    { title: 'Free Time Fun', titleAr: 'متعة وقت الفراغ', page: 81, lastPage: 88 },
    { title: 'A Second Look', titleAr: 'نظرة ثانية', page: 89, lastPage: 96 }
  ],
  bookMap: { firstPage: 97, lastPage: 106 },
  listeningScripts: { firstPage: 107 }
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
  correctIndex: number;
}

const lessonData: EnglishLesson[] = [
  {
    titleAr: 'التعارف والترحيب وتحديد المواقع',
    titleEn: 'Introductions, Greetings, and Positions',
    focusAr: 'يقدم زميلًا جديدًا ويرحب به، ثم يصف مكان جلوسه باستخدام next to وin front of وbehind وضمائر الملكية.',
    focusEn: 'Introduce and welcome a new classmate, then describe where the pupil sits using next to, in front of, behind, and possessive words.',
    questionAr: 'أي عبارة تحدد موقع شخص بجوار آخر؟',
    questionEn: 'Which phrase places one person beside another?',
    optionsAr: ['next to', 'under the desk', 'across the river'],
    optionsEn: ['next to', 'under the desk', 'across the river'],
    correctIndex: 0
  },
  {
    titleAr: 'أيام الأسبوع والأنشطة المعتادة',
    titleEn: 'Days of the Week and Regular Activities',
    focusAr: 'يسمي أيام الأسبوع، ويسأل عما يفعله الناس في يوم معين، ويميز بين يوم الدراسة ويوم العطلة.',
    focusEn: 'Name the days of the week, ask about activities on a particular day, and distinguish a school day from a free day.',
    questionAr: 'أي سؤال يساعدك على معرفة نشاط شخص يوم الثلاثاء؟',
    questionEn: 'Which question asks about someone’s Tuesday activity?',
    optionsAr: ['What do you do on Tuesday?', 'How tall is the tree?', 'Where is the kettle?'],
    optionsEn: ['What do you do on Tuesday?', 'How tall is the tree?', 'Where is the kettle?'],
    correctIndex: 0
  },
  {
    titleAr: 'اتباع التعليمات والعناية بالكتاب',
    titleEn: 'Following Instructions and Caring for a Book',
    focusAr: 'يتبع تعليمات صفية قصيرة ويستخدم أفعال الأمر لفتح الصفحة والنظر والعناية بالكتاب والمحافظة عليه.',
    focusEn: 'Follow short classroom directions and use imperatives to open a page, look carefully, and take care of a book.',
    questionAr: 'أي فعل أمر يطلب المحافظة على الكتاب؟',
    questionEn: 'Which imperative asks you to care for a book?',
    optionsAr: ['Look after it.', 'Drop it on the floor.', 'Forget the page.'],
    optionsEn: ['Look after it.', 'Drop it on the floor.', 'Forget the page.'],
    correctIndex: 0
  },
  {
    titleAr: 'قواعد صف اللغة الإنجليزية',
    titleEn: 'English Classroom Rules',
    focusAr: 'يقرأ قواعد الصف، ويميز السلوك المناسب، ويستخدم don’t لصياغة نهي بسيط مع مفردات الصف والملعب.',
    focusEn: 'Read classroom rules, identify considerate behaviour, and use don’t to state simple prohibitions about the classroom and playground.',
    questionAr: 'أي جملة تمنع سلوكًا غير مناسب في الصف؟',
    questionEn: 'Which sentence gives a classroom prohibition?',
    optionsAr: ['We don’t run in class.', 'We play outside after school.', 'We read a story together.'],
    optionsEn: ['We don’t run in class.', 'We play outside after school.', 'We read a story together.'],
    correctIndex: 0
  },
  {
    titleAr: 'التعلم والقدرات والأعداد',
    titleEn: 'Learning, Abilities, and Numbers',
    focusAr: 'يتحدث عن مهارات يتعلمها الأطفال ويجيب باستخدام can وcan’t، ويربط مفردات التعلم بالأعداد والأسعار البسيطة.',
    focusEn: 'Talk about skills children learn, answer with can and can’t, and connect learning words with simple numbers and prices.',
    questionAr: 'أي جملة تصف قدرة يمكن تعلمها في المدرسة؟',
    questionEn: 'Which sentence describes a skill that can be learned at school?',
    optionsAr: ['We can learn to read.', 'We can fly over the school.', 'We can sleep through every lesson.'],
    optionsEn: ['We can learn to read.', 'We can fly over the school.', 'We can sleep through every lesson.'],
    correctIndex: 0
  },
  {
    titleAr: 'الطلبات المهذبة للأدوات المدرسية',
    titleEn: 'Polite Requests for School Supplies',
    focusAr: 'يمثل حوارًا في متجر، ويسأل عن ثمن الأدوات ويطلبها بأدب باستخدام Can I have…? وI’d like… please.',
    focusEn: 'Act out a shop conversation, ask the price of supplies, and request them politely with Can I have…? and I’d like… please.',
    questionAr: 'أي تعبير يمثل طلبًا مهذبًا؟',
    questionEn: 'Which expression is a polite request?',
    optionsAr: ['I’d like a notebook, please.', 'Give me everything now.', 'I never use a pencil.'],
    optionsEn: ['I’d like a notebook, please.', 'Give me everything now.', 'I never use a pencil.'],
    correctIndex: 0
  },
  {
    titleAr: 'الأشياء التي نحبها ونستعيرها',
    titleEn: 'Things We Like and Borrow',
    focusAr: 'يعبر عن الإعجاب وعدم الإعجاب بأنشطة وأشياء مألوفة، ويتدرب على أسماء الأشخاص والأشياء وطلب استعارة غرض بأدب.',
    focusEn: 'Express likes and dislikes about familiar activities and objects, name people and belongings, and practise asking to borrow something.',
    questionAr: 'ماذا تقول قبل أن تستعير قلم زميلك؟',
    questionEn: 'What can you say before borrowing a classmate’s pen?',
    optionsAr: ['May I borrow your pen, please?', 'This pen is my classroom.', 'I am behind the pencil.'],
    optionsEn: ['May I borrow your pen, please?', 'This pen is my classroom.', 'I am behind the pencil.'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة العودة إلى الإنجليزية',
    titleEn: 'Reviewing the Return to English',
    focusAr: 'يراجع التعارف وأيام الأسبوع وقواعد الصف والقدرات والطلبات والملكية، ويستخدم الكلمات في أسئلة وأجوبة قصيرة.',
    focusEn: 'Review introductions, weekdays, classroom rules, abilities, requests, and ownership through short questions and answers.',
    questionAr: 'أي جملة تجمع بين يوم الأسبوع ونشاط مألوف؟',
    questionEn: 'Which sentence combines a weekday with a familiar activity?',
    optionsAr: ['I go to school on Monday.', 'The cup can sing loudly.', 'Behind is a day of the week.'],
    optionsEn: ['I go to school on Monday.', 'The cup can sing loudly.', 'Behind is a day of the week.'],
    correctIndex: 0
  },

  {
    titleAr: 'أفراد الأسرة وأسماؤهم',
    titleEn: 'Family Members and Their Names',
    focusAr: 'يسمي أفراد الأسرة ويصف صلات القرابة باستخدام my وhis وher والملكية بـ apostrophe s، ويجيب عن أسئلة who وwhat وhow.',
    focusEn: 'Name family members and describe relationships with my, his, her, and apostrophe-s ownership; answer who, what, and how questions.',
    questionAr: 'أي كلمة تشير إلى أخت الأب؟',
    questionEn: 'Which word names your father’s sister?',
    optionsAr: ['aunt', 'cousin', 'granddad'],
    optionsEn: ['aunt', 'cousin', 'granddad'],
    correctIndex: 0
  },
  {
    titleAr: 'ما يفعله أفراد الأسرة الآن',
    titleEn: 'What Family Members Are Doing Now',
    focusAr: 'يفهم وصف أحداث جارية في البيت والمجتمع، ويستخدم المضارع المستمر وأسئلة what وwho وwhere وwhy.',
    focusEn: 'Understand descriptions of events happening at home and in the community, using the present continuous and what, who, where, and why questions.',
    questionAr: 'أي جملة تصف فعلًا يحدث الآن؟',
    questionEn: 'Which sentence describes an action happening now?',
    optionsAr: ['She is reading a story.', 'She reads yesterday.', 'She can a story.'],
    optionsEn: ['She is reading a story.', 'She reads yesterday.', 'She can a story.'],
    correctIndex: 0
  },
  {
    titleAr: 'تتابع الأحداث في قصة الأسرة',
    titleEn: 'Sequencing Events in a Family Story',
    focusAr: 'يتابع أحداث قصة قصيرة ويرتب أفعال الشخصيات، ثم يصف ما يفعله كل شخص باستخدام أفعال المضارع المستمر.',
    focusEn: 'Follow a short story, put characters’ actions in order, and describe what each person is doing with the present continuous.',
    questionAr: 'ما أفضل طريقة لفهم ترتيب أحداث القصة؟',
    questionEn: 'What is a useful way to understand the order of a story?',
    optionsAr: ['Notice what happens first and next.', 'Mix every event together.', 'Ignore the characters’ actions.'],
    optionsEn: ['Notice what happens first and next.', 'Mix every event together.', 'Ignore the characters’ actions.'],
    correctIndex: 0
  },
  {
    titleAr: 'أفراد الأسرة والحيوانات القريبة',
    titleEn: 'Family Members and Familiar Animals',
    focusAr: 'يستخدم this وthat وthese وthose للإشارة إلى أشخاص وأشياء قريبة أو بعيدة، ويسمي أفراد الأسرة وبعض الحيوانات.',
    focusEn: 'Use this, that, these, and those for near and far people or things, and name family members and familiar animals.',
    questionAr: 'أي كلمة إشارة تناسب حيوانات متعددة قريبة؟',
    questionEn: 'Which demonstrative fits several animals nearby?',
    optionsAr: ['these', 'that', 'this'],
    optionsEn: ['these', 'that', 'this'],
    correctIndex: 0
  },
  {
    titleAr: 'الأعمال والخدمات في المجتمع',
    titleEn: 'Work and Services in the Community',
    focusAr: 'يصف أفراد المجتمع وما يفعلونه، ويستخدم many وsome وlots of مع الأسماء والجمل عن العمل والتعليم.',
    focusEn: 'Describe community members and their work, using many, some, and lots of with nouns and sentences about work and teaching.',
    questionAr: 'أي تعبير يدل على عدد كبير من الكتب؟',
    questionEn: 'Which phrase means a large number of books?',
    optionsAr: ['lots of books', 'one book only', 'no books at all'],
    optionsEn: ['lots of books', 'one book only', 'no books at all'],
    correctIndex: 0
  },
  {
    titleAr: 'السؤال عن الطريق ووصف المواقع',
    titleEn: 'Asking for Directions and Describing Places',
    focusAr: 'يسأل عن مواقع في المدينة ويعطي اتجاهات بسيطة باستخدام left وright وstraight on وnext to.',
    focusEn: 'Ask where places are in a town and give simple directions using left, right, straight on, and next to.',
    questionAr: 'أي عبارة تطلب معرفة مكان العيادة؟',
    questionEn: 'Which question asks where the clinic is?',
    optionsAr: ['Where is the clinic?', 'How many weeks are there?', 'What is your favourite sport?'],
    optionsEn: ['Where is the clinic?', 'How many weeks are there?', 'What is your favourite sport?'],
    correctIndex: 0
  },
  {
    titleAr: 'المهن في البلدة',
    titleEn: 'Jobs in the Town',
    focusAr: 'يسمي مهنًا مثل الخباز والطاهي وطبيب الأسنان والممرضة، ويصف بإيجاز من يعمل في كل مهنة.',
    focusEn: 'Name jobs such as baker, chef, dentist, and nurse, and briefly describe who does each kind of work.',
    questionAr: 'من يخبز الخبز؟',
    questionEn: 'Who bakes bread?',
    optionsAr: ['A baker', 'A dentist', 'A nurse'],
    optionsEn: ['A baker', 'A dentist', 'A nurse'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة الأسرة والمجتمع',
    titleEn: 'Reviewing Family and Community',
    focusAr: 'يراجع صلات الأسرة والأحداث الجارية والإشارة والاتجاهات والمهن، ويقدم وصفًا موجزًا لشخص أو مكان.',
    focusEn: 'Review family relationships, current actions, demonstratives, directions, and jobs; give a brief description of a person or place.',
    questionAr: 'أي جملة تصف موقعًا في البلدة؟',
    questionEn: 'Which sentence describes a place in town?',
    optionsAr: ['The clinic is next to the bakery.', 'The clinic is a weekday.', 'The bakery is swimming now.'],
    optionsEn: ['The clinic is next to the bakery.', 'The clinic is a weekday.', 'The bakery is swimming now.'],
    correctIndex: 0
  },

  {
    titleAr: 'العد بالعشرات حتى مئة',
    titleEn: 'Counting by Tens to One Hundred',
    focusAr: 'يعد بالعشرات من ثلاثين إلى مئة، ويميز أسماء الأعداد ويصف أشخاصًا ونباتات في صور وأنشطة صفية.',
    focusEn: 'Count by tens from thirty to one hundred, recognize number words, and describe people and plants in classroom scenes.',
    questionAr: 'ما العدد الذي يأتي بعد سبعين عند العد بالعشرات؟',
    questionEn: 'Which number comes after seventy when counting by tens?',
    optionsAr: ['eighty', 'sixty', 'ninety-nine'],
    optionsEn: ['eighty', 'sixty', 'ninety-nine'],
    correctIndex: 0
  },
  {
    titleAr: 'زراعة البذور واتباع الخطوات',
    titleEn: 'Planting Seeds and Following Steps',
    focusAr: 'يتبع تعليمات زراعة بذرة، ويسمي التربة والأصيص والحفرة، ويرتب الأفعال من تجهيز الوعاء إلى وضع البذرة.',
    focusEn: 'Follow steps for planting a seed, name soil, a pot, and a hole, and order actions from preparing the container to placing the seed.',
    questionAr: 'أين توضع البذرة عند زراعتها؟',
    questionEn: 'Where should a seed be placed when planting?',
    optionsAr: ['In a small hole in the soil', 'On top of a classroom desk', 'Inside a cup of paint'],
    optionsEn: ['In a small hole in the soil', 'On top of a classroom desk', 'Inside a cup of paint'],
    correctIndex: 0
  },
  {
    titleAr: 'الفصول والطقس',
    titleEn: 'Seasons and Weather',
    focusAr: 'يصف تغير الطقس والفصول بكلمات مثل warm وcool وsnow وshine، ويستخدم المضارع المستمر للحديث عما يحدث.',
    focusEn: 'Describe seasonal weather with words such as warm, cool, snow, and shine, and use the present continuous for changing conditions.',
    questionAr: 'أي كلمة تصف جوًا ليس حارًا ولا شديد البرودة؟',
    questionEn: 'Which word describes weather that is neither hot nor very cold?',
    optionsAr: ['warm', 'heavy', 'hungry'],
    optionsEn: ['warm', 'heavy', 'hungry'],
    correctIndex: 0
  },
  {
    titleAr: 'السؤال عن الطول والوزن',
    titleEn: 'Asking About Height and Weight',
    focusAr: 'يسأل عن طول الأشخاص ووزنهم باستخدام How tall وHow much، ويمارس الأعداد ووحدات القياس بطريقة مناسبة.',
    focusEn: 'Ask about people’s height and weight with How tall and How much, practising numbers and measurement words appropriately.',
    questionAr: 'أي سؤال يسأل عن طول شخص؟',
    questionEn: 'Which question asks about someone’s height?',
    optionsAr: ['How tall are you?', 'How heavy is the rain?', 'How many days tall?'],
    optionsEn: ['How tall are you?', 'How heavy is the rain?', 'How many days tall?'],
    correctIndex: 0
  },
  {
    titleAr: 'وصف الأفعال الجارية بين الناس والحيوانات',
    titleEn: 'Describing Actions Happening Among People and Animals',
    focusAr: 'يصف صورًا لأشخاص وحيوانات تتحرك أو تسحب أو تعطي شيئًا، ويستخدم المضارع المستمر وضمائر الملكية.',
    focusEn: 'Describe pictures of people and animals moving, pulling, or giving something, using the present continuous and possessive adjectives.',
    questionAr: 'أي جملة تصف فعلًا يجري الآن؟',
    questionEn: 'Which sentence describes an action in progress?',
    optionsAr: ['The donkey is pulling a cart.', 'The donkey pull yesterday.', 'A donkey are blue.'],
    optionsEn: ['The donkey is pulling a cart.', 'The donkey pull yesterday.', 'A donkey are blue.'],
    correctIndex: 0
  },
  {
    titleAr: 'العادات الصحية والروتين اليومي',
    titleEn: 'Healthy Habits and Daily Routines',
    focusAr: 'يصف عادات صحية صباحًا ومساءً باستخدام always، ويرتب تعليمات بسيطة مثل غسل اليدين وتنظيف الأسنان.',
    focusEn: 'Describe healthy morning and evening routines with always, and sequence simple directions such as washing hands and brushing teeth.',
    questionAr: 'أي عبارة تصف عادة صحية يومية؟',
    questionEn: 'Which phrase describes a healthy daily habit?',
    optionsAr: ['I always wash my hands.', 'I never drink any water.', 'I sleep in the playground.'],
    optionsEn: ['I always wash my hands.', 'I never drink any water.', 'I sleep in the playground.'],
    correctIndex: 0
  },
  {
    titleAr: 'الحديث عن أحداث ماضية',
    titleEn: 'Talking About Past Events',
    focusAr: 'يميز بين الماضي والحاضر في أوصاف بسيطة، ويستخدم was وwere وcould للحديث عن أشخاص أو أفعال سابقة.',
    focusEn: 'Distinguish past from present in simple descriptions and use was, were, and could to talk about earlier people or actions.',
    questionAr: 'أي كلمة تساعد على وصف حالة في الماضي؟',
    questionEn: 'Which word helps describe a past state?',
    optionsAr: ['was', 'will be tomorrow', 'is now'],
    optionsEn: ['was', 'will be tomorrow', 'is now'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة الناس والنباتات والأعداد',
    titleEn: 'Reviewing People, Plants, and Numbers',
    focusAr: 'يراجع الأعداد والزرع والطقس والقياس والعادات والأحداث الماضية، ويطبق المفردات في وصف قصير.',
    focusEn: 'Review numbers, planting, weather, measurement, healthy habits, and past events through short descriptions.',
    questionAr: 'أي مجموعة كلمات تناسب نشاط زراعة؟',
    questionEn: 'Which group of words fits a planting activity?',
    optionsAr: ['soil, pot, seed', 'ticket, train, station', 'kettle, mirror, smoke'],
    optionsEn: ['soil, pot, seed', 'ticket, train, station', 'kettle, mirror, smoke'],
    correctIndex: 0
  },

  {
    titleAr: 'الرياضات والتفضيلات',
    titleEn: 'Sports and Preferences',
    focusAr: 'يسمي رياضات مثل كرة السلة والكاراتيه وتنس الطاولة، ويعبر عن الإعجاب وعدم الإعجاب باستخدام like وenjoy.',
    focusEn: 'Name sports such as basketball, karate, and table tennis, and express preferences with like and enjoy.',
    questionAr: 'أي جملة تعبر عن تفضيل رياضي؟',
    questionEn: 'Which sentence expresses a sports preference?',
    optionsAr: ['I enjoy playing basketball.', 'I am a basketball.', 'I behind the ball.'],
    optionsEn: ['I enjoy playing basketball.', 'I am a basketball.', 'I behind the ball.'],
    correctIndex: 0
  },
  {
    titleAr: 'الحركة والمواقع',
    titleEn: 'Movement and Locations',
    focusAr: 'ينفذ أفعالًا حركية ويتبع الاتجاهات، ويفهم حروف الجر التي تصف الحركة حول الأشياء أو خلفها أو فوقها وعبرها.',
    focusEn: 'Perform movement actions and follow directions, understanding prepositions for moving around, behind, over, or through objects.',
    questionAr: 'أي كلمة تصف الحركة من خلال نفق؟',
    questionEn: 'Which word describes moving from one side of a tunnel to the other?',
    optionsAr: ['through', 'behind', 'down'],
    optionsEn: ['through', 'behind', 'down'],
    correctIndex: 0
  },
  {
    titleAr: 'ألعاب الأطفال والعد',
    titleEn: 'Children’s Games and Counting',
    focusAr: 'يسمي ألعابًا مثل الحجلة والكرات والاختباء، ويسأل How many ليعد المشاركين ويصف ما يفعلونه الآن.',
    focusEn: 'Name games such as hopscotch, marbles, and hide-and-seek; ask How many to count players and describe what they are doing.',
    questionAr: 'أي سؤال يسأل عن عدد اللاعبين؟',
    questionEn: 'Which question asks for the number of players?',
    optionsAr: ['How many children are playing?', 'Where is the weather?', 'How old is the football?'],
    optionsEn: ['How many children are playing?', 'Where is the weather?', 'How old is the football?'],
    correctIndex: 0
  },
  {
    titleAr: 'كم مرة نمارس النشاط؟',
    titleEn: 'How Often Do We Do an Activity?',
    focusAr: 'يستخدم sometimes وoften وnever لبيان تكرار الرياضة واللعب، ويجيب عن أسئلة بسيطة عن عاداته.',
    focusEn: 'Use sometimes, often, and never to describe how frequently sports and games happen, and answer questions about personal habits.',
    questionAr: 'أي كلمة تعني أن النشاط يحدث أحيانًا؟',
    questionEn: 'Which word means an activity happens from time to time?',
    optionsAr: ['sometimes', 'never', 'behind'],
    optionsEn: ['sometimes', 'never', 'behind'],
    correctIndex: 0
  },
  {
    titleAr: 'لعبة المسار والعد حتى ثلاثين',
    titleEn: 'A Path Game and Counting to Thirty',
    focusAr: 'يلعب لعبة مسار بالأعداد إلى ثلاثين، ويتبع تعليمات التقدم والرجوع وتفويت الدور، ويحترم أدوار زملائه.',
    focusEn: 'Play a number path game to thirty, follow directions to move forward, go back, or miss a turn, and take turns fairly.',
    questionAr: 'ما العدد الأعلى الذي يتدرب عليه اللاعبون؟',
    questionEn: 'What is the highest number players practise counting to?',
    optionsAr: ['30', '12', '1000'],
    optionsEn: ['30', '12', '1000'],
    correctIndex: 0
  },
  {
    titleAr: 'اللياقة والعادات الصحية',
    titleEn: 'Fitness and Healthy Habits',
    focusAr: 'يتحدث عن الرياضة والطعام والماء، ويميز العادات التي تساعد الجسم على النشاط باستخدام أسئلة عن الحاضر والماضي.',
    focusEn: 'Talk about exercise, food, and water, identify habits that help the body stay active, and ask about present and past routines.',
    questionAr: 'أي عادة تساعد على المحافظة على اللياقة؟',
    questionEn: 'Which habit helps a person stay fit?',
    optionsAr: ['Exercise regularly and drink water.', 'Avoid moving all day.', 'Eat sweets instead of meals.'],
    optionsEn: ['Exercise regularly and drink water.', 'Avoid moving all day.', 'Eat sweets instead of meals.'],
    correctIndex: 0
  },
  {
    titleAr: 'وصف الرياضات ومعداتها',
    titleEn: 'Describing Sports and Equipment',
    focusAr: 'يستدل على اسم الرياضة من عدد اللاعبين وطريقة اللعب والمعدات، ويسمي السلة والشبكة واللاعب والنتيجة.',
    focusEn: 'Identify sports from the number of players, how they play, and their equipment; name baskets, nets, players, and scores.',
    questionAr: 'في أي رياضة يرمي اللاعبون الكرة نحو سلة؟',
    questionEn: 'In which sport do players throw a ball toward a basket?',
    optionsAr: ['basketball', 'swimming', 'running'],
    optionsEn: ['basketball', 'swimming', 'running'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة الرياضات والألعاب',
    titleEn: 'Reviewing Sports and Games',
    focusAr: 'يراجع أسماء الرياضات وأفعال الحركة وأسئلة العدد وكلمات التكرار واللياقة، ويكتب جملة عن نشاطه المفضل.',
    focusEn: 'Review sports, movement, number questions, frequency words, and fitness; write a sentence about a favourite activity.',
    questionAr: 'أي إجابة تناسب سؤال How often do you play?',
    questionEn: 'Which answer fits the question “How often do you play?”',
    optionsAr: ['I play twice a week.', 'I am a play yesterday.', 'The net is behind Tuesday.'],
    optionsEn: ['I play twice a week.', 'I am a play yesterday.', 'The net is behind Tuesday.'],
    correctIndex: 0
  },

  {
    titleAr: 'الاتجاهات في السودان',
    titleEn: 'Directions in Sudan',
    focusAr: 'يحدد المواقع في شمال السودان ووسطه وجنوبه وشرقه وغربه، ويسأل ويجيب عن مكان مدينة أو منطقة على خريطة.',
    focusEn: 'Locate places in the north, middle, south, east, and west of Sudan, asking and answering where a town or region is on a map.',
    questionAr: 'أي كلمة تصف الجهة المقابلة للشمال؟',
    questionEn: 'Which direction is opposite north?',
    optionsAr: ['south', 'east', 'middle'],
    optionsEn: ['south', 'east', 'middle'],
    correctIndex: 0
  },
  {
    titleAr: 'السفر والأماكن عند الماء',
    titleEn: 'Travel and Places by the Water',
    focusAr: 'يصف السفر إلى بحيرة أو جزيرة ويستخدم by وfrom وto في جمل عن التنقل والصيد والأماكن القريبة من الماء.',
    focusEn: 'Describe travel to a lake or island and use by, from, and to in sentences about journeys, fishing, and places near water.',
    questionAr: 'أي جملة تصف وسيلة السفر؟',
    questionEn: 'Which sentence describes a way of travelling?',
    optionsAr: ['We travel by boat.', 'We travel by a cloud.', 'We travel by a spoon.'],
    optionsEn: ['We travel by boat.', 'We travel by a cloud.', 'We travel by a spoon.'],
    correctIndex: 0
  },
  {
    titleAr: 'حقائق عن السلاحف والأماكن',
    titleEn: 'Facts About Turtles and Their Places',
    focusAr: 'يقرأ حقائق عن السلاحف والحيوانات، ويستخدم ضمائر المفعول مثل it وthem وus لربط الأفعال بالأشخاص والأشياء.',
    focusEn: 'Read facts about turtles and other animals, using object pronouns such as it, them, and us to connect actions with people and things.',
    questionAr: 'أي ضمير مفعول يناسب الحديث عن سلحفاة واحدة؟',
    questionEn: 'Which object pronoun can refer to one turtle?',
    optionsAr: ['it', 'them', 'we'],
    optionsEn: ['it', 'them', 'we'],
    correctIndex: 0
  },
  {
    titleAr: 'وصف الحيوانات والأشياء',
    titleEn: 'Describing Animals and Objects',
    focusAr: 'يصف حجم الحيوان وشكله بصفات مثل tiny وlarge وhuge، ويختار كلمات دقيقة لتوضيح ما يراه.',
    focusEn: 'Describe an animal’s size and appearance with adjectives such as tiny, large, and huge, choosing precise words for visible features.',
    questionAr: 'أي صفة تعني صغيرًا جدًا؟',
    questionEn: 'Which adjective means very small?',
    optionsAr: ['tiny', 'huge', 'wide'],
    optionsEn: ['tiny', 'huge', 'wide'],
    correctIndex: 0
  },
  {
    titleAr: 'الحياة في الماضي والحاضر',
    titleEn: 'Life in the Past and Present',
    focusAr: 'يقارن بين ما يوجد الآن وما كان موجودًا في الماضي باستخدام there is/are وthere was/were وحروف المكان.',
    focusEn: 'Compare what is present now with what existed in the past using there is/are, there was/were, and place prepositions.',
    questionAr: 'أي جملة تصف أشياء كانت موجودة في الماضي؟',
    questionEn: 'Which sentence describes things that existed in the past?',
    optionsAr: ['There were trees near the lake.', 'There are trees tomorrow.', 'There is were a lake.'],
    optionsEn: ['There were trees near the lake.', 'There are trees tomorrow.', 'There is were a lake.'],
    correctIndex: 0
  },
  {
    titleAr: 'الكائنات البحرية والكميات',
    titleEn: 'Sea Creatures and Quantities',
    focusAr: 'يسمي كائنات بحرية مثل الدلفين والأخطبوط وسمك القرش، ويميز بين How many وHow much عند السؤال عن الكمية.',
    focusEn: 'Name sea creatures such as dolphins, octopuses, and sharks, and distinguish How many from How much when asking about quantity.',
    questionAr: 'أي سؤال يناسب عدّ أسماك القرش؟',
    questionEn: 'Which question is suitable for counting sharks?',
    optionsAr: ['How many sharks?', 'How much sharks?', 'How old sharks?'],
    optionsEn: ['How many sharks?', 'How much sharks?', 'How old sharks?'],
    correctIndex: 0
  },
  {
    titleAr: 'الماء والمطر والواحات',
    titleEn: 'Water, Rain, and Oases',
    focusAr: 'يسأل عن كميات الماء والمطر ويصف أماكن وجود الماء، مستخدمًا How much وHow many ومفردات الواحة والمكان.',
    focusEn: 'Ask about amounts of water and rain and describe where water can be found, using How much, How many, oasis, and place words.',
    questionAr: 'أي سؤال يناسب كمية الماء؟',
    questionEn: 'Which question is suitable for an amount of water?',
    optionsAr: ['How much water is there?', 'How many water is there?', 'How tall water is there?'],
    optionsEn: ['How much water is there?', 'How many water is there?', 'How tall water is there?'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة الأماكن في السودان',
    titleEn: 'Reviewing Places in Sudan',
    focusAr: 'يراجع الاتجاهات والسفر والحقائق عن الحيوانات والصفات والماضي والكميات لوصف أماكن مألوفة في السودان.',
    focusEn: 'Review directions, travel, animal facts, adjectives, past descriptions, and quantities to describe familiar places in Sudan.',
    questionAr: 'أي جملة تصف موقعًا واتجاهًا؟',
    questionEn: 'Which sentence describes a place and direction?',
    optionsAr: ['The lake is in the south.', 'The lake is a number.', 'The south is drinking a book.'],
    optionsEn: ['The lake is in the south.', 'The lake is a number.', 'The south is drinking a book.'],
    correctIndex: 0
  },

  {
    titleAr: 'تصنيف الحيوانات',
    titleEn: 'Classifying Animals',
    focusAr: 'يتعرف إلى مجموعات من الحيوانات مثل الثدييات والزواحف والفراشات، ويسمي أفرادها ويتحدث عن خصائصها العامة.',
    focusEn: 'Recognize animal groups such as mammals and reptiles, name familiar examples, and talk about their general features.',
    questionAr: 'إلى أي مجموعة ينتمي التمساح؟',
    questionEn: 'Which animal group does a crocodile belong to?',
    optionsAr: ['reptiles', 'mammals', 'birds'],
    optionsEn: ['reptiles', 'mammals', 'birds'],
    correctIndex: 0
  },
  {
    titleAr: 'أجزاء جسم الحيوان وصفاته',
    titleEn: 'Animal Body Parts and Features',
    focusAr: 'يصف أجزاء جسم الحيوان مثل الريش والفراء والجلد والعمود الفقري، ويقارن بين صفات حيوانات مألوفة.',
    focusEn: 'Describe animal body features such as feathers, fur, skin, and backbone, comparing familiar animals.',
    questionAr: 'أي حيوان يغطي جسمه الريش؟',
    questionEn: 'Which animal has feathers covering its body?',
    optionsAr: ['a bird', 'a fish', 'a worm'],
    optionsEn: ['a bird', 'a fish', 'a worm'],
    correctIndex: 0
  },
  {
    titleAr: 'عدّ الحشرات والكائنات الصغيرة',
    titleEn: 'Counting Insects and Small Creatures',
    focusAr: 'يعد بالأعداد من واحد وثلاثين إلى تسعة وخمسين، ويسأل How many عن البعوض والعناكب والديدان.',
    focusEn: 'Count from thirty-one to fifty-nine and ask How many about mosquitoes, spiders, and worms.',
    questionAr: 'ما العدد الذي يأتي بعد تسعة وأربعين؟',
    questionEn: 'Which number comes after forty-nine?',
    optionsAr: ['fifty', 'forty', 'sixty-nine'],
    optionsEn: ['fifty', 'forty', 'sixty-nine'],
    correctIndex: 0
  },
  {
    titleAr: 'اقتراحات لحماية الحيوانات',
    titleEn: 'Making Suggestions to Protect Animals',
    focusAr: 'يقدم اقتراحات بسيطة باستخدام let’s، ويصف حركة الحيوانات ويختار سلوكًا آمنًا يحافظ على الكائنات البرية.',
    focusEn: 'Make simple suggestions with let’s, describe animal movement, and choose safe behaviour that protects wildlife.',
    questionAr: 'أي جملة تقدم اقتراحًا للصف؟',
    questionEn: 'Which sentence makes a suggestion to the class?',
    optionsAr: ['Let’s help protect the rhino.', 'The rhino is a Monday.', 'Let’s never look at animals.'],
    optionsEn: ['Let’s help protect the rhino.', 'The rhino is a Monday.', 'Let’s never look at animals.'],
    correctIndex: 0
  },
  {
    titleAr: 'نصائح للوقاية من لدغات الحشرات',
    titleEn: 'Advice for Preventing Insect Bites',
    focusAr: 'يقدم نصائح باستخدام should عن الوقاية من البعوض والملاريا، ويختار ملابس وتدابير مناسبة للحد من اللدغات.',
    focusEn: 'Give advice with should about preventing mosquitoes and malaria, choosing suitable clothing and steps to reduce bites.',
    questionAr: 'أي نصيحة تساعد على الوقاية من لدغات البعوض؟',
    questionEn: 'Which advice can help prevent mosquito bites?',
    optionsAr: ['You should use a mosquito net.', 'You should leave every window open at night.', 'You should touch wild insects.'],
    optionsEn: ['You should use a mosquito net.', 'You should leave every window open at night.', 'You should touch wild insects.'],
    correctIndex: 0
  },
  {
    titleAr: 'تغير اليرقة خلال الأسابيع',
    titleEn: 'A Caterpillar’s Changes Over Time',
    focusAr: 'يتحدث عن تغير اليرقة عبر الزمن، ويربط الأفعال والأسابيع في تسلسل يوضح نمو الحيوان.',
    focusEn: 'Talk about how a caterpillar changes over time and connect actions and weeks in a sequence showing an animal’s growth.',
    questionAr: 'ماذا يصف تسلسل مراحل نمو اليرقة؟',
    questionEn: 'What does a sequence of a caterpillar’s stages describe?',
    optionsAr: ['Changes as it grows', 'A map of the town', 'A list of sports equipment'],
    optionsEn: ['Changes as it grows', 'A map of the town', 'A list of sports equipment'],
    correctIndex: 0
  },
  {
    titleAr: 'قدرات الحيوانات وأجزاء الجسم',
    titleEn: 'Animal Abilities and Body Parts',
    focusAr: 'يتحدث عما يستطيع الناس والحيوانات فعله باستخدام can وcan’t، ويصف أعضاء مثل الدماغ والقلب بعبارات بسيطة.',
    focusEn: 'Talk about what people and animals can and cannot do, using can and can’t, and describe parts such as the brain and heart.',
    questionAr: 'أي جملة تصف قدرة حيوان؟',
    questionEn: 'Which sentence describes an animal’s ability?',
    optionsAr: ['A bird can fly.', 'A bird can a feather.', 'A bird is can flying yesterday.'],
    optionsEn: ['A bird can fly.', 'A bird can a feather.', 'A bird is can flying yesterday.'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة عالم الحيوانات',
    titleEn: 'Reviewing the Animal World',
    focusAr: 'يراجع مجموعات الحيوانات وأجزاء الجسم والأعداد والاقتراحات والنصائح والقدرات، ويشرح صفة أو سلوكًا لحيوان.',
    focusEn: 'Review animal groups, body parts, numbers, suggestions, advice, and abilities; explain an animal feature or behaviour.',
    questionAr: 'أي جملة تقدم نصيحة لحماية حيوان؟',
    questionEn: 'Which sentence gives advice to protect an animal?',
    optionsAr: ['You should keep a safe distance.', 'You should chase it for fun.', 'You should leave rubbish near it.'],
    optionsEn: ['You should keep a safe distance.', 'You should chase it for fun.', 'You should leave rubbish near it.'],
    correctIndex: 0
  },

  {
    titleAr: 'قراءة الساعة والأوقات',
    titleEn: 'Reading Clocks and Times',
    focusAr: 'يقرأ الساعة ويقول الوقت عند الساعة الكاملة والنصف والربع، ويستخدم مفردات clock وhalf وquarter.',
    focusEn: 'Read a clock and tell time to the hour, half hour, and quarter hour using clock, half, and quarter.',
    questionAr: 'كيف نقول 3:30 بالإنجليزية؟',
    questionEn: 'How do we say 3:30 in English?',
    optionsAr: ['half past three', 'quarter to three', 'half past four'],
    optionsEn: ['half past three', 'quarter to three', 'half past four'],
    correctIndex: 0
  },
  {
    titleAr: 'الوقت والملكية والكسور',
    titleEn: 'Time, Possession, and Fractions',
    focusAr: 'يقرأ مواعيد وأجزاء الساعة، ويستخدم ضمائر الملكية لتحديد صاحب المقعد أو الشيء في مشاهد يومية.',
    focusEn: 'Read schedules and parts of an hour, and use possessive words to identify whose seat or object it is in everyday scenes.',
    questionAr: 'أي عبارة توضح أن المقعد يعود إلى حسن؟',
    questionEn: 'Which phrase shows that the seat belongs to Hassan?',
    optionsAr: ['Hassan’s seat', 'Hassan seat’s', 'seat Hassan are'],
    optionsEn: ['Hassan’s seat', 'Hassan seat’s', 'seat Hassan are'],
    correctIndex: 0
  },
  {
    titleAr: 'المهن والروتين اليومي',
    titleEn: 'Jobs and Daily Routines',
    focusAr: 'يسمي سائقًا ومزارعًا، ويصف أوقات بداية العمل ويستخدم at وduring وin للتحدث عن الروتين.',
    focusEn: 'Name a driver and a farmer, describe when work starts, and use at, during, and in to talk about routines.',
    questionAr: 'أي مهنة يقود صاحبها سيارة أجرة؟',
    questionEn: 'Which worker drives a taxi?',
    optionsAr: ['a driver', 'a farmer', 'a clockmaker'],
    optionsEn: ['a driver', 'a farmer', 'a clockmaker'],
    correctIndex: 0
  },
  {
    titleAr: 'وصف المطر والرياح',
    titleEn: 'Describing Rain and Wind',
    focusAr: 'يصف أحوال الجو بأفعال وصفات مثل rain وblow وwet وwindy، ويستخدم المضارع للتعبير عن الطقس.',
    focusEn: 'Describe weather with verbs and adjectives such as rain, blow, wet, and windy, using the present simple for conditions.',
    questionAr: 'أي صفة تصف يومًا تهب فيه الرياح؟',
    questionEn: 'Which adjective describes a day with moving air?',
    optionsAr: ['windy', 'sleepy', 'silvery'],
    optionsEn: ['windy', 'sleepy', 'silvery'],
    correctIndex: 0
  },
  {
    titleAr: 'مواعيد المدرسة ونهاية الأسبوع',
    titleEn: 'School Times and the Weekend',
    focusAr: 'يقرأ جدولًا يوميًا ويتحدث عن وقت الاستيقاظ والوصول إلى المدرسة وعطلة نهاية الأسبوع باستخدام الملكية والمضارع.',
    focusEn: 'Read a daily timetable and talk about waking up, arriving at school, and the weekend using possessives and the present simple.',
    questionAr: 'أي سؤال يساعد على معرفة موعد الوصول؟',
    questionEn: 'Which question helps find out an arrival time?',
    optionsAr: ['When do you arrive?', 'How many are you?', 'Where does the wind sleep?'],
    optionsEn: ['When do you arrive?', 'How many are you?', 'Where does the wind sleep?'],
    correctIndex: 0
  },
  {
    titleAr: 'الشهور والفصول والمحاصيل',
    titleEn: 'Months, Seasons, and Crops',
    focusAr: 'يسمي شهور السنة ويربط مواسم الزراعة بمحاصيل مثل الذرة والسمسم والقمح، ويجيب عن أسئلة when وwhy.',
    focusEn: 'Name the months and connect farming seasons with crops such as maize, sesame, and wheat, answering when and why questions.',
    questionAr: 'أي مجموعة تتكون من أسماء محاصيل؟',
    questionEn: 'Which group contains crop names?',
    optionsAr: ['maize, sesame, wheat', 'clock, quarter, minute', 'ticket, train, plane'],
    optionsEn: ['maize, sesame, wheat', 'clock, quarter, minute', 'ticket, train, plane'],
    correctIndex: 0
  },
  {
    titleAr: 'نصائح عند العواصف الرملية',
    titleEn: 'Advice for Sandstorm Weather',
    focusAr: 'يقدم نصائح باستخدام should وshouldn’t للتصرف بأمان في العواصف الرملية، ويميز بين البقاء داخل المنزل وخارجه.',
    focusEn: 'Give advice with should and shouldn’t for staying safe in sandstorms, distinguishing between being indoors and outdoors.',
    questionAr: 'ما التصرف الأنسب أثناء عاصفة رملية؟',
    questionEn: 'What is a sensible action during a sandstorm?',
    optionsAr: ['You should stay inside.', 'You should play outside in the dust.', 'You should turn on a fan outdoors.'],
    optionsEn: ['You should stay inside.', 'You should play outside in the dust.', 'You should turn on a fan outdoors.'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة الوقت والطقس',
    titleEn: 'Reviewing Time and Weather',
    focusAr: 'يراجع الساعة والملكية والوظائف والطقس والمواعيد والشهور والنصائح، وينظم وصفًا قصيرًا ليوم مألوف.',
    focusEn: 'Review clock time, possession, jobs, weather, schedules, months, and advice to organize a short description of a familiar day.',
    questionAr: 'أي جملة تجمع الطقس مع الوقت؟',
    questionEn: 'Which sentence combines weather with a time?',
    optionsAr: ['It is windy in the afternoon.', 'The afternoon is a coin.', 'Windy is at a quarter.'],
    optionsEn: ['It is windy in the afternoon.', 'The afternoon is a coin.', 'Windy is at a quarter.'],
    correctIndex: 0
  },

  {
    titleAr: 'النقود والأعداد الترتيبية',
    titleEn: 'Money and Ordinal Numbers',
    focusAr: 'يتعرف إلى أسماء العملات ويستخدم first وsecond وthird لترتيب الأشياء، ويربط الأعداد الترتيبية بمواقف التسوق.',
    focusEn: 'Recognize currency names and use first, second, and third to order items, connecting ordinal numbers with shopping situations.',
    questionAr: 'ما العدد الترتيبي الذي يأتي بعد first؟',
    questionEn: 'Which ordinal number comes after first?',
    optionsAr: ['second', 'fifth', 'tenth'],
    optionsEn: ['second', 'fifth', 'tenth'],
    correctIndex: 0
  },
  {
    titleAr: 'ترتيب العملات وحل المسائل',
    titleEn: 'Ordering Coins and Solving Problems',
    focusAr: 'يرتب الأعداد من الأول إلى الخامس ويحل مسألة حسابية بسيطة باستخدام مفردات coin وadd وpiaster.',
    focusEn: 'Order items from first to fifth and solve a simple number problem using coin, add, and piaster vocabulary.',
    questionAr: 'أي عدد ترتيبي يساوي المرتبة الرابعة؟',
    questionEn: 'Which ordinal number names position four?',
    optionsAr: ['fourth', 'third', 'fifth'],
    optionsEn: ['fourth', 'third', 'fifth'],
    correctIndex: 0
  },
  {
    titleAr: 'السؤال عن الأسعار والكميات',
    titleEn: 'Asking About Prices and Amounts',
    focusAr: 'يسأل عن سعر العسل أو الطعام وكميته، ويميز بين how much وhow many مع الأسماء المعدودة وغير المعدودة.',
    focusEn: 'Ask about the price and amount of honey or food, distinguishing how much and how many with uncountable and countable nouns.',
    questionAr: 'أي سؤال يناسب سعر مرطبان عسل؟',
    questionEn: 'Which question asks the price of a jar of honey?',
    optionsAr: ['How much is the honey?', 'How many is the honey?', 'How old is the honey?'],
    optionsEn: ['How much is the honey?', 'How many is the honey?', 'How old is the honey?'],
    correctIndex: 0
  },
  {
    titleAr: 'الطلب من البائع والعد',
    titleEn: 'Making a Shop Request and Counting',
    focusAr: 'يمثل حوارًا مع بائع ويطلب غرضًا بأدب باستخدام would like، ويمارس العد حتى مئة في مواقف المتجر.',
    focusEn: 'Act out a conversation with a shopkeeper, request an item politely with would like, and practise counting to one hundred in shop situations.',
    questionAr: 'أي عبارة تطلب غرضًا من البائع بأدب؟',
    questionEn: 'Which phrase politely asks a shopkeeper for an item?',
    optionsAr: ['I’d like a jar, please.', 'You give jar me.', 'I am a shopkeeper yesterday.'],
    optionsEn: ['I’d like a jar, please.', 'You give jar me.', 'I am a shopkeeper yesterday.'],
    correctIndex: 0
  },
  {
    titleAr: 'تكرار أعمال المنزل',
    titleEn: 'How Often We Do Household Chores',
    focusAr: 'يسأل ويجيب عن تكرار تنظيف الأطباق وترتيب المنزل، ويستخدم always وsometimes وnever مع المضارع.',
    focusEn: 'Ask and answer how often people wash dishes and tidy the home, using always, sometimes, and never with the present simple.',
    questionAr: 'أي سؤال يسأل عن تكرار ترتيب الغرفة؟',
    questionEn: 'Which question asks how often someone tidies a room?',
    optionsAr: ['How often do you tidy your room?', 'How much is your room?', 'When did your room weigh?'],
    optionsEn: ['How often do you tidy your room?', 'How much is your room?', 'When did your room weigh?'],
    correctIndex: 0
  },
  {
    titleAr: 'قصة الكنز والأحداث الماضية',
    titleEn: 'A Treasure Story and Past Events',
    focusAr: 'يتابع قصة عن مفاجأة وكنز، ويصف ما كان موجودًا وما استطاعت الشخصيات فعله باستخدام was وwere وcould.',
    focusEn: 'Follow a story about a surprise and treasure, describing what existed and what characters could do with was, were, and could.',
    questionAr: 'أي كلمة تناسب وصف ما استطاع شخص فعله في الماضي؟',
    questionEn: 'Which word fits describing what someone was able to do in the past?',
    optionsAr: ['could', 'can tomorrow', 'does yesterday'],
    optionsEn: ['could', 'can tomorrow', 'does yesterday'],
    correctIndex: 0
  },
  {
    titleAr: 'وصف مشهد يتحرك الآن',
    titleEn: 'Describing a Scene in Progress',
    focusAr: 'يصف أشخاصًا وأشياء تتحرك في مشهد باستخدام المضارع المستمر، ويربط أوصافها بكلمات مثل or للاختيار.',
    focusEn: 'Describe people and things moving in a scene with the present continuous, linking alternatives with or.',
    questionAr: 'أي جملة تصف مشهدًا يحدث الآن؟',
    questionEn: 'Which sentence describes a scene happening now?',
    optionsAr: ['The children are looking for the treasure.', 'The children were a coin.', 'The treasure is yesterday.'],
    optionsEn: ['The children are looking for the treasure.', 'The children were a coin.', 'The treasure is yesterday.'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة النقود والمنزل والقياس',
    titleEn: 'Reviewing Money, Home, and Measurement',
    focusAr: 'يراجع الأعداد الترتيبية والأسعار والطلبات وأعمال المنزل والقصص الماضية والقياس في أنشطة متكاملة.',
    focusEn: 'Review ordinal numbers, prices, requests, household routines, past stories, and measurement through connected activities.',
    questionAr: 'أي سؤال يساعد على معرفة سعر شيء؟',
    questionEn: 'Which question helps find out the price of an item?',
    optionsAr: ['How much is it?', 'How many is it tall?', 'Where often is it?'],
    optionsEn: ['How much is it?', 'How many is it tall?', 'Where often is it?'],
    correctIndex: 0
  },

  {
    titleAr: 'وسائل النقل والقدرات',
    titleEn: 'Transport and Abilities',
    focusAr: 'يسمي الطائرة والقطار والريكشا ووسائل النقل الأخرى، ويصف ما يستطيع الناس فعله وكيف ينتقلون من مكان لآخر.',
    focusEn: 'Name planes, trains, rickshaws, and other transport, describing what people can do and how they travel from place to place.',
    questionAr: 'أي وسيلة تسير على قضبان؟',
    questionEn: 'Which form of transport runs on rails?',
    optionsAr: ['a train', 'a rickshaw', 'a boat'],
    optionsEn: ['a train', 'a rickshaw', 'a boat'],
    correctIndex: 0
  },
  {
    titleAr: 'التذاكر والأعداد الترتيبية',
    titleEn: 'Tickets and Ordinal Numbers',
    focusAr: 'يقرأ أعدادًا ترتيبية من السادس إلى العاشر، ويستخرج اليوم والوقت والمكان والتكلفة من تفاصيل تذكرة.',
    focusEn: 'Read ordinal numbers from sixth to tenth and find the day, time, place, and price from ticket details.',
    questionAr: 'ما العدد الترتيبي الذي يأتي بعد seventh؟',
    questionEn: 'Which ordinal number comes after seventh?',
    optionsAr: ['eighth', 'sixth', 'tenth'],
    optionsEn: ['eighth', 'sixth', 'tenth'],
    correctIndex: 0
  },
  {
    titleAr: 'مقارنة الحجم والسرعة والقوة',
    titleEn: 'Comparing Size, Speed, and Strength',
    focusAr: 'يقارن بين أشخاص أو أشياء بصفات مثل small وslow وyoung وstrong، ويستخدم and وbut وor للربط.',
    focusEn: 'Compare people or things with adjectives such as small, slow, young, and strong, linking ideas with and, but, and or.',
    questionAr: 'أي صفة تعني أن الشيء ليس سريعًا؟',
    questionEn: 'Which adjective means that something is not fast?',
    optionsAr: ['slow', 'young', 'bright'],
    optionsEn: ['slow', 'young', 'bright'],
    correctIndex: 0
  },
  {
    titleAr: 'حل مشكلات السفر والالتزام بالوقت',
    titleEn: 'Solving Travel Problems and Being on Time',
    focusAr: 'يفهم مشكلة بسيطة أثناء التنقل، ويتبع تعليمات مثبتة بـ don’t، ويستخدم أسئلة وأجوبة عن الروتين والمواعيد.',
    focusEn: 'Understand a simple travel problem, follow instructions using don’t, and ask and answer about routines and schedules.',
    questionAr: 'ماذا ينبغي أن تفعل إذا أوشكت على التأخر؟',
    questionEn: 'What should you do if you are nearly late?',
    optionsAr: ['Check the time and follow the route.', 'Ignore the timetable.', 'Stop in the middle of the road.'],
    optionsEn: ['Check the time and follow the route.', 'Ignore the timetable.', 'Stop in the middle of the road.'],
    correctIndex: 0
  },
  {
    titleAr: 'نصائح السلامة على الطريق',
    titleEn: 'Road Safety Advice',
    focusAr: 'يقدم نصائح باستخدام should وshouldn’t عن ارتداء الخوذة وعبور الطريق بأمان والانتباه إلى إشارات المرور.',
    focusEn: 'Give advice with should and shouldn’t about wearing a helmet, crossing safely, and noticing traffic signals.',
    questionAr: 'أي نصيحة تساعد راكب الدراجة على السلامة؟',
    questionEn: 'Which advice helps a cyclist stay safe?',
    optionsAr: ['You should wear a helmet.', 'You should ride without looking.', 'You should cross between moving cars.'],
    optionsEn: ['You should wear a helmet.', 'You should ride without looking.', 'You should cross between moving cars.'],
    correctIndex: 0
  },
  {
    titleAr: 'المهن والمرور وطلب المساعدة',
    titleEn: 'Jobs, Traffic, and Asking for Help',
    focusAr: 'يتعرف إلى شرطي المرور ومفردات الرخصة والعبور، ويطلب المساعدة أو يسأل عن شخص ومكان باستخدام can.',
    focusEn: 'Learn about traffic police, licences, and crossing, and ask for help or information about a person and place with can.',
    questionAr: 'من يساعد على تنظيم حركة المرور؟',
    questionEn: 'Who helps control traffic?',
    optionsAr: ['a police officer', 'a baker', 'a painter'],
    optionsEn: ['a police officer', 'a baker', 'a painter'],
    correctIndex: 0
  },
  {
    titleAr: 'وصف الذات وإرسال رسالة',
    titleEn: 'Describing Yourself and Sending a Message',
    focusAr: 'يكتب معلومات بسيطة عن نفسه ومظهره، ويسأل ويجيب عن الأشخاص والأماكن، ويتدرب على مفردات البريد الإلكتروني.',
    focusEn: 'Write simple information about yourself and your appearance, ask about people and places, and practise email vocabulary.',
    questionAr: 'أي معلومة تناسب رسالة تعريفية عن نفسك؟',
    questionEn: 'Which detail belongs in a short email introducing yourself?',
    optionsAr: ['My name is Amina, and I am in Grade 4.', 'My name is a train station.', 'I am a ticket at the weekend.'],
    optionsEn: ['My name is Amina, and I am in Grade 4.', 'My name is a train station.', 'I am a ticket at the weekend.'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة وسائل النقل والسلامة',
    titleEn: 'Reviewing Transport and Safety',
    focusAr: 'يراجع وسائل النقل والتذاكر والأعداد الترتيبية والمقارنة وتعليمات السلامة ووصف الذات في مواقف تنقل يومية.',
    focusEn: 'Review transport, tickets, ordinal numbers, comparisons, safety directions, and self-description in everyday travel situations.',
    questionAr: 'أي جملة تصف وسيلة نقل آمنة؟',
    questionEn: 'Which sentence describes a safe travel choice?',
    optionsAr: ['Wear a helmet when riding a bike.', 'Read a ticket while crossing the road.', 'Ride quickly through a crowd.'],
    optionsEn: ['Wear a helmet when riding a bike.', 'Read a ticket while crossing the road.', 'Ride quickly through a crowd.'],
    correctIndex: 0
  },

  {
    titleAr: 'التعرف إلى الآلات المنزلية',
    titleEn: 'Identifying Household Machines',
    focusAr: 'يسمي آلات وأشياء منزلية مثل الغسالة، ويسأل What’s this? وWhat am I? ليتعرف إلى غرض من وصفه.',
    focusEn: 'Name household machines such as a washing machine and ask What’s this? or What am I? to identify an object from clues.',
    questionAr: 'أي آلة تساعد على غسل الملابس؟',
    questionEn: 'Which machine helps wash clothes?',
    optionsAr: ['a washing machine', 'a mirror', 'a notebook'],
    optionsEn: ['a washing machine', 'a mirror', 'a notebook'],
    correctIndex: 0
  },
  {
    titleAr: 'أدوات المطبخ وأفعالها',
    titleEn: 'Kitchen Objects and Their Uses',
    focusAr: 'يسمي أدوات مثل الغلاية والسكين والطباخ، ويصف استعمالها بكلمات heat وdry وضمائر المفعول.',
    focusEn: 'Name objects such as a kettle, knife, and cooker, and describe their uses with heat, dry, and object pronouns.',
    questionAr: 'أي غرض يُستخدم لتسخين الماء؟',
    questionEn: 'Which object is used to heat water?',
    optionsAr: ['a kettle', 'a stamp', 'a helmet'],
    optionsEn: ['a kettle', 'a stamp', 'a helmet'],
    correctIndex: 0
  },
  {
    titleAr: 'المخترعون والحديث عن الماضي',
    titleEn: 'Inventors and Talking About the Past',
    focusAr: 'يتحدث عن مخترعين واختراعات سابقة مستخدمًا was وwere وcould، ويطرح أسئلة عن أحداث وشخصيات الماضي.',
    focusEn: 'Talk about inventors and earlier inventions using was, were, and could, and ask questions about people and events in the past.',
    questionAr: 'أي كلمة تناسب القدرة في الماضي؟',
    questionEn: 'Which word expresses ability in the past?',
    optionsAr: ['could', 'can yesterday', 'was can'],
    optionsEn: ['could', 'can yesterday', 'was can'],
    correctIndex: 0
  },
  {
    titleAr: 'القدرات والاقتراحات',
    titleEn: 'Abilities and Suggestions',
    focusAr: 'يصف ما يستطيع الناس فعله باستخدام can، ويقترح حلًا بسيطًا باستخدام let’s في مواقف خيالية عن الاختراعات.',
    focusEn: 'Describe what people can do with can and suggest a simple solution with let’s in imaginative situations about inventions.',
    questionAr: 'أي عبارة تقدم اقتراحًا؟',
    questionEn: 'Which expression makes a suggestion?',
    optionsAr: ['Let’s test the small machine.', 'The machine is a Tuesday.', 'I can yesterday the motor.'],
    optionsEn: ['Let’s test the small machine.', 'The machine is a Tuesday.', 'I can yesterday the motor.'],
    correctIndex: 0
  },
  {
    titleAr: 'الطلبات ووصف السرعة والسهولة',
    titleEn: 'Requests and Describing Speed and Difficulty',
    focusAr: 'يطلب ما يحتاج إليه باستخدام would like، ويقارن بين آلة سريعة أو بطيئة ومهمة سهلة أو صعبة.',
    focusEn: 'Request what is needed with would like and compare a fast or slow machine and an easy or difficult task.',
    questionAr: 'أي صفتين متضادتان تصفان سرعة آلة؟',
    questionEn: 'Which pair of opposites describes a machine’s speed?',
    optionsAr: ['fast and slow', 'hot and hungry', 'early and noisy'],
    optionsEn: ['fast and slow', 'hot and hungry', 'early and noisy'],
    correctIndex: 0
  },
  {
    titleAr: 'الطاقة الشمسية والأشياء اليومية',
    titleEn: 'Solar Energy and Everyday Objects',
    focusAr: 'يتعرف إلى مرآة وسطح ومصدر حرارة، ويتحدث عن الطاقة الشمسية مستخدمًا أسئلة النفي وأدوات الاستفهام.',
    focusEn: 'Identify a mirror, a surface, and a source of heat, and talk about solar energy using negative questions and question words.',
    questionAr: 'ما مصدر الطاقة الذي يأتي من الشمس؟',
    questionEn: 'Which source of energy comes from the sun?',
    optionsAr: ['solar energy', 'sound energy', 'moonlight from a kettle'],
    optionsEn: ['solar energy', 'sound energy', 'moonlight from a kettle'],
    correctIndex: 0
  },
  {
    titleAr: 'الاختراعات والسنوات',
    titleEn: 'Inventions and Years',
    focusAr: 'يتحدث عن تاريخ اختراع وأحداث مرتبطة بسنة، ويستخدم was وwere وcould والأعداد لقراءة التواريخ.',
    focusEn: 'Talk about the history of an invention and events in a particular year, using was, were, could, and numbers for dates.',
    questionAr: 'أي معلومة تساعد على وضع اختراع في الزمن؟',
    questionEn: 'Which detail helps place an invention in time?',
    optionsAr: ['the year it was made', 'the colour of a nearby chair', 'the name of a weekday only'],
    optionsEn: ['the year it was made', 'the colour of a nearby chair', 'the name of a weekday only'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة الآلات والاختراعات',
    titleEn: 'Reviewing Machines and Inventions',
    focusAr: 'يراجع أسماء الآلات وأدوات المنزل والقدرات والطلبات والطاقة الشمسية والاختراعات الماضية في وصف متكامل.',
    focusEn: 'Review machine names, household tools, abilities, requests, solar energy, and past inventions in a connected description.',
    questionAr: 'أي عبارة تصف غرضًا واستخدامه؟',
    questionEn: 'Which phrase names an object and what it does?',
    optionsAr: ['A kettle heats water.', 'A kettle is a month.', 'A mirror cooks the sun.'],
    optionsEn: ['A kettle heats water.', 'A kettle is a month.', 'A mirror cooks the sun.'],
    correctIndex: 0
  },

  {
    titleAr: 'العطلات والنزهات وما نفضله',
    titleEn: 'Holidays, Picnics, and Preferences',
    focusAr: 'يتحدث عن العطلة والنزهة وما يفضله، ويربط الأفكار باستخدام and وbut وor ويطلب ما يحتاج إليه بأدب.',
    focusEn: 'Talk about holidays, picnics, and preferences, connect ideas with and, but, and or, and politely request what is needed.',
    questionAr: 'أي كلمة تربط خيارين؟',
    questionEn: 'Which word can connect two alternatives?',
    optionsAr: ['or', 'under', 'heavy'],
    optionsEn: ['or', 'under', 'heavy'],
    correctIndex: 0
  },
  {
    titleAr: 'أنشطة العطلة الجارية الآن',
    titleEn: 'Holiday Activities Happening Now',
    focusAr: 'يصف أشخاصًا يسبحون أو يصطادون أو يتحدثون في الهاتف، ويستخدم المضارع المستمر وحروف الجر للمكان والوقت.',
    focusEn: 'Describe people swimming, fishing, or talking on the phone with the present continuous and prepositions for place and time.',
    questionAr: 'أي جملة تصف نشاطًا يحدث الآن؟',
    questionEn: 'Which sentence describes an activity happening now?',
    optionsAr: ['They are fishing by the river.', 'They fish last week now.', 'They are a summer camp.'],
    optionsEn: ['They are fishing by the river.', 'They fish last week now.', 'They are a summer camp.'],
    correctIndex: 0
  },
  {
    titleAr: 'اقتراح نشاط لوقت الفراغ',
    titleEn: 'Suggesting a Free-Time Activity',
    focusAr: 'يقترح أنشطة مثل التسلق وركوب الخيل والرسم باستخدام Let’s وHow about…?، ويستجيب لاقتراح زميله.',
    focusEn: 'Suggest activities such as climbing, horse riding, and painting with Let’s and How about…?, then respond to a partner’s idea.',
    questionAr: 'أي عبارة تقترح نشاطًا؟',
    questionEn: 'Which phrase suggests an activity?',
    optionsAr: ['How about painting?', 'How many is painting?', 'Painting is behind a week.'],
    optionsEn: ['How about painting?', 'How many is painting?', 'Painting is behind a week.'],
    correctIndex: 0
  },
  {
    titleAr: 'الهوايات والأشياء التي نمتلكها',
    titleEn: 'Hobbies and Things We Own',
    focusAr: 'يتحدث عن هوايات مثل جمع الطوابع وألعاب الحاسوب، ويستخدم صفات الإشارة وضمائر الملكية لوصف الأغراض.',
    focusEn: 'Talk about hobbies such as collecting stamps and computer games, using demonstratives and possessive adjectives to describe belongings.',
    questionAr: 'أي عبارة توضح أن هذه الطوابع تخصها؟',
    questionEn: 'Which phrase shows that these stamps belong to her?',
    optionsAr: ['These are her stamps.', 'This are his stamp.', 'Those stamps is we.'],
    optionsEn: ['These are her stamps.', 'This are his stamp.', 'Those stamps is we.'],
    correctIndex: 0
  },
  {
    titleAr: 'العمل في المزرعة والتعليمات',
    titleEn: 'Farm Work and Instructions',
    focusAr: 'يتبع تعليمات عن أعمال المزرعة والحيوانات والمحاصيل، ويستخدم أفعال الأمر والنفي للتمييز بين ما ينبغي فعله وما لا ينبغي.',
    focusEn: 'Follow directions about farm work, animals, and crops, using affirmative and negative imperatives to distinguish what to do and avoid.',
    questionAr: 'أي جملة تعطي تعليمات واضحة؟',
    questionEn: 'Which sentence gives a clear instruction?',
    optionsAr: ['Feed the ducks carefully.', 'The duck is a month.', 'I feeding yesterday the maize.'],
    optionsEn: ['Feed the ducks carefully.', 'The duck is a month.', 'I feeding yesterday the maize.'],
    correctIndex: 0
  },
  {
    titleAr: 'الحيوانات والعمل اليومي',
    titleEn: 'Animals and Everyday Work',
    focusAr: 'يسمي حيوانات المزرعة ويصف أعمالًا يومية، ويستخدم المضارع والنفي وتعليمات بسيطة للتحدث عن العمل والراحة.',
    focusEn: 'Name farm animals and describe daily tasks, using the present simple, negatives, and simple instructions to talk about work and rest.',
    questionAr: 'أي حيوان من حيوانات المزرعة؟',
    questionEn: 'Which is a farm animal?',
    optionsAr: ['a sheep', 'a computer game', 'a ticket'],
    optionsEn: ['a sheep', 'a computer game', 'a ticket'],
    correctIndex: 0
  },
  {
    titleAr: 'العادات والهوايات المتكررة',
    titleEn: 'Regular Habits and Hobbies',
    focusAr: 'يتحدث عن هواياته وما يفعله عادة أو أحيانًا، ويستخدم always وusually وsometimes مع كلمات الزمن.',
    focusEn: 'Talk about hobbies and what someone does usually or sometimes, using always, usually, and sometimes with time expressions.',
    questionAr: 'أي كلمة تعني أن الفعل يحدث في معظم الأوقات؟',
    questionEn: 'Which word means an action happens on most occasions?',
    optionsAr: ['usually', 'never', 'yesterday'],
    optionsEn: ['usually', 'never', 'yesterday'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة متعة وقت الفراغ',
    titleEn: 'Reviewing Free-Time Fun',
    focusAr: 'يراجع التفضيلات والأنشطة الجارية والاقتراحات والهوايات والملكية وأعمال المزرعة والعادات في حوار قصير.',
    focusEn: 'Review preferences, ongoing activities, suggestions, hobbies, ownership, farm work, and habits in a short conversation.',
    questionAr: 'أي عبارة مناسبة لقبول اقتراح للرسم؟',
    questionEn: 'Which response can accept a suggestion to paint?',
    optionsAr: ['That sounds fun. Let’s paint.', 'A paint is a weekday.', 'I am painting yesterday.'],
    optionsEn: ['That sounds fun. Let’s paint.', 'A paint is a weekday.', 'I am painting yesterday.'],
    correctIndex: 0
  },

  {
    titleAr: 'مراجعة الوقت والمواد الدراسية',
    titleEn: 'Reviewing Time and School Subjects',
    focusAr: 'يراجع التعبير عن التفضيلات والمواد الدراسية وأجزاء الساعة، ويصف ما يحبه ووقت درسه باستخدام الملكية.',
    focusEn: 'Review preferences, school subjects, and parts of the clock; describe what you enjoy and when a lesson takes place.',
    questionAr: 'أي عبارة تعبر عن تفضيل لمادة دراسية؟',
    questionEn: 'Which sentence expresses a preference for a school subject?',
    optionsAr: ['I enjoy Islamic Studies.', 'I enjoy a quarter past.', 'My subject is between a clock.'],
    optionsEn: ['I enjoy Islamic Studies.', 'I enjoy a quarter past.', 'My subject is between a clock.'],
    correctIndex: 0
  },
  {
    titleAr: 'أماكن البلدة ومواقعها',
    titleEn: 'Town Places and Locations',
    focusAr: 'يصف مواقع في البلدة باستخدام there is وthere are وحروف المكان مثل between وopposite وnext to وoutside.',
    focusEn: 'Describe places in a town with there is and there are and prepositions such as between, opposite, next to, and outside.',
    questionAr: 'أي جملة تصف موقعًا بين مكانين؟',
    questionEn: 'Which sentence describes a place between two others?',
    optionsAr: ['The shop is between the school and the clinic.', 'The shop is a number.', 'The clinic is raining between.'],
    optionsEn: ['The shop is between the school and the clinic.', 'The shop is a number.', 'The clinic is raining between.'],
    correctIndex: 0
  },
  {
    titleAr: 'مقارنة الماضي بالحاضر',
    titleEn: 'Comparing the Past with the Present',
    focusAr: 'يتحدث عما استطاع أو لم يستطع فعله في الماضي، ويقارن ذلك بأنشطة الحاضر باستخدام النفي البسيط.',
    focusEn: 'Talk about what someone could or could not do in the past and compare it with present activities using simple negatives.',
    questionAr: 'أي جملة تنفي قدرة في الماضي؟',
    questionEn: 'Which sentence expresses a negative ability in the past?',
    optionsAr: ['I couldn’t shop alone then.', 'I can’t yesterday shop.', 'I didn’t could shop.'],
    optionsEn: ['I couldn’t shop alone then.', 'I can’t yesterday shop.', 'I didn’t could shop.'],
    correctIndex: 0
  },
  {
    titleAr: 'الأعداد الترتيبية والسباقات',
    titleEn: 'Ordinal Numbers and Races',
    focusAr: 'يراجع الأعداد الترتيبية من الأول إلى العاشر، ويستخدمها لتحديد ترتيب المتسابقين أو الميداليات والدول.',
    focusEn: 'Review ordinal numbers from first to tenth and use them to identify the order of racers, medals, or countries.',
    questionAr: 'أي عدد ترتيبي يدل على المركز العاشر؟',
    questionEn: 'Which ordinal number means position ten?',
    optionsAr: ['tenth', 'sixth', 'third'],
    optionsEn: ['tenth', 'sixth', 'third'],
    correctIndex: 0
  },
  {
    titleAr: 'وصف خصائص الحيوانات',
    titleEn: 'Describing Animal Features',
    focusAr: 'يصف حيوانات بصفات مثل dangerous وloud وfast وlong، ويستخدم this وthese للإشارة إلى حيوان أو مجموعة.',
    focusEn: 'Describe animals with adjectives such as dangerous, loud, fast, and long, using this and these to refer to one or several.',
    questionAr: 'أي صفة تصف حيوانًا يتحرك بسرعة؟',
    questionEn: 'Which adjective describes an animal that moves quickly?',
    optionsAr: ['fast', 'loud', 'small'],
    optionsEn: ['fast', 'loud', 'small'],
    correctIndex: 0
  },
  {
    titleAr: 'الطقس والغيوم والحيوانات',
    titleEn: 'Weather, Clouds, and Animals',
    focusAr: 'يصف الطقس وما يحدث الآن، ويربطه بحيوانات مثل الوعل في موطنه، مستخدمًا المضارع المستمر وأوصاف الماضي.',
    focusEn: 'Describe weather and what is happening now, connecting it with animals such as an ibex in its habitat and past descriptions.',
    questionAr: 'أي جملة تصف الطقس الآن؟',
    questionEn: 'Which sentence describes the weather now?',
    optionsAr: ['Clouds are moving across the sky.', 'The cloud was a ticket.', 'The sky is between two books.'],
    optionsEn: ['Clouds are moving across the sky.', 'The cloud was a ticket.', 'The sky is between two books.'],
    correctIndex: 0
  },
  {
    titleAr: 'تقديم النصائح للحيوانات',
    titleEn: 'Giving Advice About Animals',
    focusAr: 'يقدم نصائح لحماية الحيوانات باستخدام should، ويصوغ تعليمات قصيرة مثل عدم تحميل الحيوان أكثر من طاقته.',
    focusEn: 'Give advice to protect animals with should and form short instructions such as not overloading a working animal.',
    questionAr: 'أي نصيحة تراعي سلامة الحيوان؟',
    questionEn: 'Which advice considers an animal’s welfare?',
    optionsAr: ['You should give the animal water and rest.', 'You should make it carry too much.', 'You should frighten it for fun.'],
    optionsEn: ['You should give the animal water and rest.', 'You should make it carry too much.', 'You should frighten it for fun.'],
    correctIndex: 0
  },
  {
    titleAr: 'مراجعة ثانية لما تعلمناه',
    titleEn: 'A Second Look at What We Have Learned',
    focusAr: 'يراجع موضوعات الكتاب: الوقت والمواقع والماضي والأعداد والحيوانات والطقس والنصيحة، ويجمع الكلمات والتراكيب في أنشطة قصيرة.',
    focusEn: 'Review the book’s themes of time, locations, the past, numbers, animals, weather, and advice, bringing vocabulary and patterns together in short tasks.',
    questionAr: 'أي مجموعة تجمع موضوعات من وحدات مختلفة في الكتاب؟',
    questionEn: 'Which group brings together topics from different units of the book?',
    optionsAr: ['clock time, town places, animal features', 'only one colour and one letter', 'kitchen objects with no action words'],
    optionsEn: ['clock time, town places, animal features', 'only one colour and one letter', 'kitchen objects with no action words'],
    correctIndex: 0
  }
];

export const SUDAN_PRIMARY_ENGLISH_G4_TABLE_OF_CONTENTS = lessonData.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: Math.floor(index / 8) + 1,
  lessonInUnit: (index % 8) + 1,
  page: Math.floor(index / 8) * 8 + (index % 8) + 1,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ENGLISH_G4_LECTURES: Lecture[] = lessonData.map((lesson, index) => {
  const unitNumber = Math.floor(index / 8) + 1;
  const lessonInUnit = (index % 8) + 1;
  const order = index + 1;
  const page = Math.floor(index / 8) * 8 + lessonInUnit;
  const correctIndex = index % 3;
  const optionRotation = (3 - correctIndex) % 3;
  const rotateOptions = (options: [string, string, string]) => [
    ...options.slice(optionRotation),
    ...options.slice(0, optionRotation)
  ];
  const optionsAr = rotateOptions(lesson.optionsAr);
  const optionsEn = rotateOptions(lesson.optionsEn);
  const unit = SUDAN_PRIMARY_ENGLISH_G4_BOOK.units[unitNumber - 1];
  const id = `sd-primary-english-g4-${order}`;
  const titleAr = `الوحدة ${unitNumber}، الدرس ${lessonInUnit}: ${lesson.titleAr}`;
  const titleEn = `Unit ${unitNumber}, Lesson ${lessonInUnit}: ${lesson.titleEn}`;
  const visualSteps: LectureDiagramStep[] = [
    { labelAr: `تأمل صورة أو موقفًا عن ${lesson.titleAr}`, labelEn: `Look at a picture or situation about ${lesson.titleEn}` },
    { labelAr: `لاحظ الكلمات أو العلامات المرتبطة بالموضوع`, labelEn: `Notice the words or clues connected with the topic` },
    { labelAr: `تدرب على المهارة والتعبير الواردين في الهدف`, labelEn: `Practise the skill and language in the learning focus` },
    { labelAr: `استخدم ما تعلمته للإجابة أو الوصف`, labelEn: `Use what you learned to answer or describe` }
  ];
  const diagram = {
    id: `${id}-visual`,
    figureNumberAr: `تسلسل بصري (${unitNumber}-${lessonInUnit})`,
    figureNumberEn: `Visual Sequence (${unitNumber}-${lessonInUnit})`,
    titleAr: `خطوات بصرية: ${lesson.titleAr}`,
    titleEn: `Visual Steps: ${lesson.titleEn}`,
    captionAr: `تدرب على هدف الدرس عبر أربع خطوات بصرية.`,
    captionEn: `Practise the lesson focus through four visual steps.`,
    diagramType: 'primary_lesson_sequence',
    visualSteps
  } as unknown as LectureDiagram;

  return {
    id,
    order,
    titleAr,
    titleEn,
    subtitleAr: `اللغة الإنجليزية — الصف الرابع الأساسي — ${unit.titleAr}`,
    subtitleEn: `SMILE Series Book 2 — Unit ${unitNumber}: ${unit.title}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ENGLISH',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الرابع الأساسي — جمهورية السودان',
    gradeLevelNameEn: 'Grade 4 Basic Level — Republic of the Sudan',
    termAr: 'كتاب التلميذ — SMILE Series Book 2',
    termEn: 'Pupil’s Book — SMILE Series Book 2',
    unitTitleAr: unit.titleAr,
    unitTitleEn: `Unit ${unitNumber}: ${unit.title}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل موقفًا من حياتك يرتبط بموضوع «${lesson.titleAr}»، وشارك كلمة أو جملة تعرفها.`,
    warmupHookEn: `Think of a moment from your life connected with “${lesson.titleEn},” then share a word or sentence you already know.`,
    learningOutcomesAr: [lesson.focusAr, 'يستخدم مفردات الدرس وتراكيبه في جملة أو حوار قصير.'],
    learningOutcomesEn: [lesson.focusEn, 'Use the lesson vocabulary and patterns in a short sentence or conversation.'],
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
      contentAr: `${lesson.focusAr}\n\nنشاط بصري: اتبع الخطوات الأربع، وسمِّ ما تراه، ثم استخدم كلمات الدرس في إجابة قصيرة.`,
      contentEn: `${lesson.focusEn}\n\nVisual activity: Follow the four steps, name what you see, then use the lesson language in a short response.`,
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
