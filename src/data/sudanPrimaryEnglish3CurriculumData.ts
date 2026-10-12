import type { Lecture, LectureDiagram, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ENGLISH_G3_BOOK = {
  title: 'SMILE Book 3, Pupil’s Book',
  edition: '2nd Edition',
  grade: 'Grade 3: Basic Level',
  units: [
    { title: 'Welcome Back to English', titleAr: 'مرحبًا بعودتكم إلى اللغة الإنجليزية', page: 1, lastPage: 8, activityPage: 49 },
    { title: 'Our Environment', titleAr: 'بيئتنا', page: 9, lastPage: 16, activityPage: 57 },
    { title: 'Eid El Fitr', titleAr: 'عيد الفطر', page: 17, lastPage: 24, activityPage: 65 },
    { title: 'Family and Community', titleAr: 'الأسرة والمجتمع', page: 25, lastPage: 32, activityPage: 73 },
    { title: 'People, Plants and Numbers', titleAr: 'الناس والنباتات والأعداد', page: 33, lastPage: 40, activityPage: 81 },
    { title: 'Sports and Games', titleAr: 'الرياضة والألعاب', page: 41, lastPage: 48, activityPage: 89 }
  ],
  activities: { firstPage: 49, lastPage: 96 },
  bookMap: { firstPage: 97, lastPage: 100 }
} as const;

interface EnglishLesson {
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

const lessons: EnglishLesson[] = [
  {
    unit: 1, page: 1, titleAr: 'الترحيب بتلميذ جديد وتحديد المواقع', titleEn: 'Welcoming a New Pupil and Describing Positions',
    focusAr: 'يقرأ حوار الترحيب بحسن، ويتدرب على تقديم زميل جديد ووصف مكان جلوسه باستخدام next to وin front of وbehind.',
    focusEn: 'Read Hassan’s welcome dialogue, introduce a new classmate, and describe where he sits using “next to,” “in front of,” and “behind.”',
    questionAr: 'أين يجلس حسن بالنسبة إلى أحمد؟', questionEn: 'Where does Hassan sit in relation to Ahmed?',
    optionsAr: ['بجوار أحمد', 'داخل المكتبة', 'خلف المدرسة'],
    optionsEn: ['Next to Ahmed', 'Inside the library', 'Behind the school'],
    visualStepsAr: ['تلميذ جديد', 'ترحيب في الصف', 'تحديد مقعد حسن', 'وصف الموقع بجوار أحمد'],
    visualStepsEn: ['A new pupil', 'A classroom welcome', 'Find Hassan’s seat', 'Describe his place next to Ahmed']
  },
  {
    unit: 1, page: 2, titleAr: 'أيام الأسبوع وأيام الدراسة', titleEn: 'Days of the Week and School Days',
    focusAr: 'يسمي أيام الأسبوع ويربطها بالأنشطة المعتادة، ويسأل ويجيب عما يفعله في يوم معين مع التمييز بين يوم الدراسة ويوم العطلة.',
    focusEn: 'Name the days of the week, connect them with familiar activities, and ask or answer what you do on a particular school or free day.',
    questionAr: 'ما اليوم الذي يذكره الدرس بوصفه يوم عطلة؟', questionEn: 'Which day is described as a free day in the lesson?',
    optionsAr: ['الجمعة', 'الثلاثاء', 'الأربعاء'],
    optionsEn: ['Friday', 'Tuesday', 'Wednesday'],
    visualStepsAr: ['أيام الأسبوع السبعة', 'اختيار يوم', 'سؤال: ماذا تفعل؟', 'الإجابة: أذهب إلى المدرسة أو أستريح'],
    visualStepsEn: ['The seven days', 'Choose a day', 'Ask: What do you do?', 'Answer: go to school or have a free day']
  },
  {
    unit: 1, page: 3, titleAr: 'التعرف إلى كتاب SMILE وصنع غلاف', titleEn: 'Getting to Know the SMILE Book and Making a Cover',
    focusAr: 'يتبع تعليمات صفية بسيطة للتعرف إلى كتاب SMILE، ويربط صورة الغلاف بالكتاب ثم يصمم غلافًا خاصًا به.',
    focusEn: 'Follow simple classroom instructions to explore the SMILE book, connect its cover with the book, and design a cover of your own.',
    questionAr: 'ماذا يصنع التلميذ في النشاط؟', questionEn: 'What does the pupil make in the activity?',
    optionsAr: ['غلافًا لكتابه', 'خريطة للمدينة', 'طبقًا من الطعام'],
    optionsEn: ['A cover for a book', 'A town map', 'A plate of food'],
    visualStepsAr: ['انظر إلى كتاب SMILE', 'استمع إلى التعليمات', 'اختر صورًا وألوانًا', 'صمم غلاف كتابك'],
    visualStepsEn: ['Look at the SMILE book', 'Listen to the instructions', 'Choose pictures and colours', 'Design your book cover']
  },
  {
    unit: 1, page: 4, titleAr: 'قواعد صف اللغة الإنجليزية', titleEn: 'Rules for the English Classroom',
    focusAr: 'يقرأ قواعد الصف ويقارن بين السلوك المناسب وغير المناسب، ويستخدم النفي مع don’t للتعبير عن قواعد مثل عدم الركض أو رمي القمامة.',
    focusEn: 'Read classroom rules, distinguish helpful from unhelpful behaviour, and use “don’t” for rules such as not running or dropping rubbish.',
    questionAr: 'أي جملة تذكر قاعدة تمنع سلوكًا؟', questionEn: 'Which sentence states a rule against an action?',
    optionsAr: ['لا نركض في الصف.', 'نساعد التلاميذ.', 'نتحدث عن الطقس.'],
    optionsEn: ['We don’t run in the classroom.', 'We help other pupils.', 'We talk about the weather.'],
    visualStepsAr: ['اقرأ قاعدة الصف', 'لاحظ السلوك في الصورة', 'اختر قاعدة مناسبة', 'قل القاعدة باستخدام don’t'],
    visualStepsEn: ['Read a class rule', 'Notice the pictured behaviour', 'Choose a suitable rule', 'Say it with “don’t”']
  },
  {
    unit: 1, page: 5, titleAr: 'التعلم والقدرات في المدرسة', titleEn: 'Learning and Abilities at School',
    focusAr: 'يفهم حوارًا عن فائدة الذهاب إلى المدرسة، ويستخدم can وcan’t للحديث عن قدرات مثل القراءة والسباحة والتحدث بالإنجليزية.',
    focusEn: 'Understand a dialogue about why children go to school and use “can” and “can’t” to talk about reading, swimming, and speaking English.',
    questionAr: 'أي مهارة يتعلمها الأطفال في المدرسة بحسب الحوار؟', questionEn: 'Which skill can children learn at school in the dialogue?',
    optionsAr: ['القراءة والجمع', 'قيادة الحافلة وحدها', 'الطيران فوق الأشجار'],
    optionsEn: ['Reading and adding', 'Driving a bus alone', 'Flying above trees'],
    visualStepsAr: ['اسأل: لماذا نذهب إلى المدرسة؟', 'اذكر ما نتعلمه', 'تحدث عن قدرة باستخدام can', 'أجب عن قدرة لا نملكها بـ can’t'],
    visualStepsEn: ['Ask why we go to school', 'Name things we learn', 'Say an ability with “can”', 'Say what you cannot do with “can’t”']
  },
  {
    unit: 1, page: 6, titleAr: 'شراء أدوات مدرسية بأدب', titleEn: 'Buying School Supplies Politely',
    focusAr: 'يمثل حوارًا قصيرًا في متجر، ويسأل عن السعر ويطلب أدوات مدرسية بأدب باستخدام Can I have…? وI’d like… please.',
    focusEn: 'Act out a short shop dialogue, ask about prices, and politely request school supplies with “Can I have…?” and “I’d like… please.”',
    questionAr: 'أي عبارة تمثل طلبًا مهذبًا؟', questionEn: 'Which phrase is a polite request?',
    optionsAr: ['أريد بعض الصمغ من فضلك.', 'أعطني الآن بلا سؤال.', 'أنا أسبح في الصف.'],
    optionsEn: ['I’d like some glue, please.', 'Give it to me now.', 'I swim in the classroom.'],
    visualStepsAr: ['اختر أداة مدرسية', 'اسأل عن ثمنها', 'اطلبها بأدب', 'ادفع واشكر البائع'],
    visualStepsEn: ['Choose a school item', 'Ask how much it costs', 'Request it politely', 'Pay and thank the shopkeeper']
  },
  {
    unit: 1, page: 7, titleAr: 'روتين الصباح في المدرسة', titleEn: 'A Morning Routine at School',
    focusAr: 'يقرأ وصفًا لمدرسة هدى ويلاحظ قربها من منزلها، ثم يردد نشيدًا عن حمل الحقيبة وفتح الكتاب والغناء مع الزملاء.',
    focusEn: 'Read about Huda’s school and how near it is to her home, then chant about carrying a bag, opening a book, and singing with classmates.',
    questionAr: 'كيف تصل هدى إلى المدرسة؟', questionEn: 'How does Huda get to school?',
    optionsAr: ['تمشي لأنها قريبة من منزلها', 'تسافر بالقارب كل صباح', 'تذهب وحدها إلى المزرعة'],
    optionsEn: ['She walks because it is near her home.', 'She travels by boat every morning.', 'She goes alone to a farm.'],
    visualStepsAr: ['المنزل قريب من المدرسة', 'تمشي هدى صباحًا', 'تقابل صديقاتها', 'تحمل الحقيبة وتفتح الكتاب'],
    visualStepsEn: ['Home is near the school', 'Huda walks in the morning', 'She meets her friends', 'She carries her bag and opens her book']
  },
  {
    unit: 1, page: 8, titleAr: 'مراجعة التحيات والقواعد وتهجئة الكلمات', titleEn: 'Reviewing Greetings, Rules, and Spelling',
    focusAr: 'يراجع التحيات وأسماء أيام الأسبوع وأدوات المدرسة وقواعد الصف، ويمارس التهجئة وطلب استعارة دفتر والتعبير عن الشكر.',
    focusEn: 'Review greetings, days, school items, and class rules while practising spelling, borrowing a notebook, and saying thank you.',
    questionAr: 'ماذا تقول بعد أن يساعدك زميل؟', questionEn: 'What can you say after a classmate helps you?',
    optionsAr: ['شكرًا.', 'إلى أين تطير؟', 'كم يزن؟'],
    optionsEn: ['Thanks.', 'Where does it fly?', 'How much does it weigh?'],
    visualStepsAr: ['حيِّ زميلك', 'اطلب استعارة دفتر', 'قل شكرًا', 'راجع الكلمات والقواعد'],
    visualStepsEn: ['Greet a classmate', 'Ask to borrow a notebook', 'Say thank you', 'Review words and class rules']
  },
  {
    unit: 2, page: 9, titleAr: 'أماكن في البلدة وطلب الاتجاه', titleEn: 'Places in Town and Asking for Directions',
    focusAr: 'يتعرف أماكن عامة مثل المتحف والسوق والمستشفى، ويسأل بأدب عن موقعها ويفهم وصفًا بسيطًا لمكان قريب من المدرسة.',
    focusEn: 'Recognize town places such as a museum, market, and hospital; politely ask where one is and understand a simple location description.',
    questionAr: 'أين يقع المتحف في الحوار؟', questionEn: 'Where is the museum in the dialogue?',
    optionsAr: ['في شارع النيل قرب المدرسة', 'داخل حديقة الحيوانات', 'بجوار النهر البعيد'],
    optionsEn: ['On Nile Street near the school', 'Inside the zoo', 'Beside a distant river'],
    visualStepsAr: ['اختر مكانًا في البلدة', 'اسأل عن موقعه بأدب', 'استمع إلى اسم الشارع', 'اعثر عليه قرب المدرسة'],
    visualStepsEn: ['Choose a place in town', 'Ask where it is politely', 'Listen for the street name', 'Locate it near the school']
  },
  {
    unit: 2, page: 10, titleAr: 'الأماكن وما نفعله فيها', titleEn: 'Places and What We Do There',
    focusAr: 'يربط بين المكان ونشاطه المعتاد؛ فيذكر القراءة في المكتبة، ورؤية الطبيب في المستشفى، واللعب في الحديقة.',
    focusEn: 'Match places with familiar activities, such as reading in a library, seeing a doctor at a hospital, and playing in a park.',
    questionAr: 'ماذا نفعل عادة في المكتبة؟', questionEn: 'What do we usually do in a library?',
    optionsAr: ['نقرأ الكتب', 'نصنع الخبز', 'نزرع الطماطم'],
    optionsEn: ['Read books', 'Make bread', 'Grow tomatoes'],
    visualStepsAr: ['سمِّ المكان', 'لاحظ ما يفعله الناس', 'اربط الفعل بالمكان', 'قل: نستطيع القراءة في المكتبة'],
    visualStepsEn: ['Name a place', 'Notice what people do', 'Match the action to its place', 'Say: We can read in a library']
  },
  {
    unit: 2, page: 11, titleAr: 'أنشطة الحديقة والقدرات', titleEn: 'Park Activities and Abilities',
    focusAr: 'يتحدث عن أنشطة آمنة في الحديقة باستخدام can، ويردد نشيدًا يصف اللعب والقفز والجلوس مع الأصدقاء في مكان نظيف.',
    focusEn: 'Talk about safe park activities with “can” and chant about playing, jumping, and sitting with friends in a clean place.',
    questionAr: 'أي نشاط يمكن أن نفعله في الحديقة؟', questionEn: 'Which activity can we do in a park?',
    optionsAr: ['نقفز ونلعب', 'نرمي القمامة في العشب', 'نطبخ داخل المكتبة'],
    optionsEn: ['We can jump and play.', 'We can drop rubbish on the grass.', 'We can cook inside the library.'],
    visualStepsAr: ['اذهب إلى الحديقة', 'لاحظ السماء والعشب والأشجار', 'اختر نشاطًا مناسبًا', 'صف ما نستطيع فعله بـ can'],
    visualStepsEn: ['Go to the park', 'Notice the sky, grass, and trees', 'Choose a suitable activity', 'Describe what we can do with “can”']
  },
  {
    unit: 2, page: 12, titleAr: 'المحافظة على نظافة الحديقة', titleEn: 'Keeping the Park Clean',
    focusAr: 'يميز بين السلوك الذي يحافظ على الحديقة والسلوك الذي يضرها، ويستخدم Don’t لإعطاء تعليمات مثل عدم قطف الأزهار أو رمي القمامة.',
    focusEn: 'Distinguish actions that care for a park from those that harm it, and use “Don’t” to say not to pick flowers or drop rubbish.',
    questionAr: 'أي تعليمات تساعد على إبقاء الحديقة نظيفة؟', questionEn: 'Which instruction helps keep the park clean?',
    optionsAr: ['لا ترمِ القمامة.', 'اقطف كل الأزهار.', 'اترك المخلفات على الأرض.'],
    optionsEn: ['Don’t drop rubbish.', 'Pick all the flowers.', 'Leave litter on the ground.'],
    visualStepsAr: ['لاحظ القمامة أو الأزهار', 'حدد السلوك المؤذي', 'اختر قاعدة حماية', 'قل التعليمات بصيغة Don’t'],
    visualStepsEn: ['Notice litter or flowers', 'Identify harmful behaviour', 'Choose a care rule', 'Give the rule with “Don’t”']
  },
  {
    unit: 2, page: 13, titleAr: 'جمع القمامة وإعادة ترتيب المكان', titleEn: 'Picking Up Rubbish and Tidying a Place',
    focusAr: 'يكمل نشيدًا عن القمامة في الصف، ويتعلم أسماء أشياء مثل الورق والعلب، ثم يتبع تعليمات جمعها ووضعها في السلة.',
    focusEn: 'Complete a chant about litter in the classroom, name items such as paper and cans, and follow directions to put them in a bin.',
    questionAr: 'أين نضع الورق الذي نجمعه من الأرض؟', questionEn: 'Where should we put paper picked up from the floor?',
    optionsAr: ['في سلة المهملات', 'على كرسي المعلم', 'داخل حقيبة الطعام'],
    optionsEn: ['In the rubbish bin', 'On the teacher’s chair', 'Inside a lunch bag'],
    visualStepsAr: ['لاحظ المخلفات على الأرض', 'اجمع الورق والعلب', 'امشِ إلى سلة المهملات', 'ضع المخلفات في السلة'],
    visualStepsEn: ['Notice litter on the floor', 'Pick up paper and cans', 'Walk to a rubbish bin', 'Put the litter in the bin']
  },
  {
    unit: 2, page: 14, titleAr: 'ملصق لحماية الحديقة والحيوانات', titleEn: 'A Poster to Protect the Park and Animals',
    focusAr: 'ينصت إلى تعليمات العناية بالبيئة، ثم يصمم ملصقًا يشجع على وضع القمامة في السلة وعدم إيذاء الحيوانات.',
    focusEn: 'Listen to environmental care instructions, then make a poster encouraging people to use bins and avoid hurting animals.',
    questionAr: 'ما الرسالة المناسبة لملصق يحمي الحيوانات؟', questionEn: 'Which message belongs on a poster that protects animals?',
    optionsAr: ['لا تؤذِ الحيوانات.', 'أزعج الحيوانات.', 'اترك القمامة قربها.'],
    optionsEn: ['Don’t hurt animals.', 'Hurt the animals.', 'Leave rubbish beside them.'],
    visualStepsAr: ['اختر سلوكًا لحماية البيئة', 'ارسم حديقة أو حيوانًا', 'اكتب رسالة قصيرة', 'اعرض الملصق وقل نصيحته'],
    visualStepsEn: ['Choose an environmental care action', 'Draw a park or animal', 'Write a short message', 'Show the poster and say its advice']
  },
  {
    unit: 2, page: 15, titleAr: 'وصف الأشجار والبيئة النظيفة', titleEn: 'Describing Trees and a Clean Environment',
    focusAr: 'يتعلم صفات بسيطة مثل سعيد وحزين ونظيف ومتسخ، ويصف شجرة أو مكانًا باستخدام كلمات مألوفة مثل lots of وno leaves.',
    focusEn: 'Learn simple describing words such as happy, sad, clean, and dirty, and describe a tree or place using “lots of” and “no leaves.”',
    questionAr: 'أي وصف يدل على أن الشجرة تحتاج إلى العناية؟', questionEn: 'Which description shows a tree needs care?',
    optionsAr: ['الشجرة حزينة ولا أوراق عليها.', 'الشجرة سعيدة ومليئة بالأوراق.', 'الشجرة كتاب جديد.'],
    optionsEn: ['The tree is sad and has no leaves.', 'The tree is happy and full of leaves.', 'The tree is a new book.'],
    visualStepsAr: ['انظر إلى شكل الشجرة', 'لاحظ الأوراق وحالة المكان', 'اختر صفة مناسبة', 'صف ما تراه بكلمات إنجليزية'],
    visualStepsEn: ['Look at the tree', 'Notice its leaves and surroundings', 'Choose a suitable describing word', 'Describe what you see in English']
  },
  {
    unit: 2, page: 16, titleAr: 'أصوات oo ووصف ما نراه', titleEn: 'The “oo” Sound and Describing What We See',
    focusAr: 'يتدرب على قراءة كلمات فيها الصوت oo مثل school وzoo، ثم يصف عناصر مألوفة في صورة مستخدمًا مفردات الأماكن والطعام.',
    focusEn: 'Practise reading words with the “oo” sound, such as “school” and “zoo,” then describe familiar places and food in a picture.',
    questionAr: 'أي كلمة تحتوي على الصوت oo في الدرس؟', questionEn: 'Which word contains the “oo” sound practised here?',
    optionsAr: ['school', 'chair', 'shirt'],
    optionsEn: ['school', 'chair', 'shirt'],
    visualStepsAr: ['استمع إلى صوت oo', 'اقرأ كلمة school أو zoo', 'ابحث عن الشيء في الصورة', 'صف ما تراه'],
    visualStepsEn: ['Listen for the “oo” sound', 'Read “school” or “zoo”', 'Find the item in the picture', 'Say what you can see']
  },
  {
    unit: 3, page: 17, titleAr: 'ملابس العيد ووصف ألوانها', titleEn: 'Eid Clothes and Their Colours',
    focusAr: 'يقرأ نشيدًا عن ملابس منشورة في الحديقة، ويسمي قطعًا مألوفة مثل القميص والجلباب والسروال ويسأل عن ألوانها.',
    focusEn: 'Read a chant about clothes on a garden line, name familiar items such as a shirt, jalabeya, and trousers, and ask about their colours.',
    questionAr: 'أي قطعة ملابس يذكرها نشيد العيد؟', questionEn: 'Which item of clothing is named in the Eid chant?',
    optionsAr: ['جلباب', 'ملعقة', 'كرة قدم'],
    optionsEn: ['A jalabeya', 'A spoon', 'A football'],
    visualStepsAr: ['انظر إلى الملابس', 'سمِّ القطعة', 'اسأل عن لونها', 'أجب بوصف اللون'],
    visualStepsEn: ['Look at the clothes', 'Name an item', 'Ask what colour it is', 'Answer with a colour']
  },
  {
    unit: 3, page: 18, titleAr: 'الملكية والسؤال عن صاحب الشيء', titleEn: 'Possession and Asking Who Owns an Item',
    focusAr: 'يلاحظ الأشخاص والأشياء في الصور، ويستخدم صيغة الملكية مع أسماء مثل Cathy’s flower للإجابة عن سؤال Whose…?',
    focusEn: 'Look at people and objects in pictures, use possessive names such as “Cathy’s flower,” and answer “Whose…?” questions.',
    questionAr: 'كيف نقول إن الزهرة تخص كاثي؟', questionEn: 'How do we say that the flower belongs to Cathy?',
    optionsAr: ['It’s Cathy’s flower.', 'It’s flower Cathy.', 'Cathy flower it.'],
    optionsEn: ['It’s Cathy’s flower.', 'It’s flower Cathy.', 'Cathy flower it.'],
    visualStepsAr: ['لاحظ الشيء في الصورة', 'حدد صاحبه', 'أضف ’s إلى الاسم', 'أجب: إنها زهرة كاثي'],
    visualStepsEn: ['Notice the object in the picture', 'Identify its owner', 'Add ’s to the name', 'Answer: It is Cathy’s flower']
  },
  {
    unit: 3, page: 19, titleAr: 'تهاني العيد وملابس جديدة', titleEn: 'Eid Greetings and New Clothes',
    focusAr: 'يستمع إلى حوار عائلي عن العيد، ويتبادل تهاني Eid Mubarak، ويسأل ويجيب عن امتلاك ملابس جديدة باستخدام have got.',
    focusEn: 'Listen to a family conversation about Eid, exchange “Eid Mubarak” greetings, and ask or answer about new clothes with “have got.”',
    questionAr: 'ماذا يقول أفراد الأسرة لبعضهم في العيد؟', questionEn: 'What do family members say to one another at Eid?',
    optionsAr: ['Eid Mubarak', 'Good night, library', 'How many windows?'],
    optionsEn: ['Eid Mubarak', 'Good night, library', 'How many windows?'],
    visualStepsAr: ['تجتمع الأسرة في العيد', 'يتبادل الجميع التهاني', 'يسأل طفل عن الملابس', 'يصف الطفل ما يملكه'],
    visualStepsEn: ['The family gathers for Eid', 'Everyone exchanges greetings', 'A child asks about clothes', 'The child says what they have']
  },
  {
    unit: 3, page: 20, titleAr: 'زيارة حديقة الحيوانات والعد', titleEn: 'Visiting the Zoo and Counting',
    focusAr: 'يصف صورة زيارة حديقة الحيوانات، ويميز بين There is وThere are ثم يجيب عن أسئلة عدد الأشخاص والحيوانات.',
    focusEn: 'Describe a zoo visit picture, distinguish “There is” from “There are,” and answer questions about how many people and animals are shown.',
    questionAr: 'أي صيغة تناسب الحديث عن حيوانات متعددة؟', questionEn: 'Which form is used to talk about several animals?',
    optionsAr: ['There are animals.', 'There is animals.', 'Animals is there.'],
    optionsEn: ['There are animals.', 'There is animals.', 'Animals is there.'],
    visualStepsAr: ['تأمل صورة حديقة الحيوانات', 'لاحظ المفرد والجمع', 'عدّ الحيوانات أو الأشخاص', 'أجب باستخدام There is أو There are'],
    visualStepsEn: ['Study the zoo picture', 'Notice singular and plural', 'Count animals or people', 'Answer with “There is” or “There are”']
  },
  {
    unit: 3, page: 21, titleAr: 'حركة الأشياء والنظر عبر النافذة', titleEn: 'Movement and Looking Through a Window',
    focusAr: 'يفهم تعليمات حركة بسيطة مثل out of وpast وover وthrough، ويطابق صورة كل حركة مع العبارة التي تصفها.',
    focusEn: 'Understand simple movement phrases such as “out of,” “past,” “over,” and “through,” and match each phrase to a picture.',
    questionAr: 'أي كلمة تصف النظر من جهة إلى أخرى عبر النافذة؟', questionEn: 'Which word describes looking from one side to the other through a window?',
    optionsAr: ['through', 'under', 'between'],
    optionsEn: ['through', 'under', 'between'],
    visualStepsAr: ['ابدأ عند النافذة', 'حدد اتجاه الحركة', 'تتبع المسار في الصورة', 'اختر كلمة الحركة المناسبة'],
    visualStepsEn: ['Start at the window', 'Find the direction of movement', 'Trace the path in the picture', 'Choose the matching movement word']
  },
  {
    unit: 3, page: 22, titleAr: 'ترتيب خطوات إعداد كعكة العيد', titleEn: 'Sequencing Steps for an Eid Cake',
    focusAr: 'يقرأ تعليمات إعداد كعكة ويرتبها زمنيًا، من غسل اليدين وخلط المكونات إلى وضع الخليط في القالب وطبخه.',
    focusEn: 'Read cake-making instructions and put them in order, from washing hands and mixing ingredients to filling the tin and cooking.',
    questionAr: 'ماذا نفعل بعد خلط الدقيق والزيت والحليب؟', questionEn: 'What do we do after mixing the flour, oil, and milk?',
    optionsAr: ['نضيف البيض ونخلط.', 'نضع الخليط على الشجرة.', 'نرسم خريطة للحديقة.'],
    optionsEn: ['Add the eggs and mix.', 'Put the mixture on a tree.', 'Draw a map of the park.'],
    visualStepsAr: ['اغسل يديك وجهز المكونات', 'ضع المكونات في وعاء واخلط', 'أضف البيض ثم اسكب الخليط في القالب', 'اطبخ الكعكة بأمان مع شخص بالغ'],
    visualStepsEn: ['Wash hands and prepare ingredients', 'Put ingredients in a bowl and mix', 'Add eggs and pour into the tin', 'Cook the cake safely with an adult']
  },
  {
    unit: 3, page: 23, titleAr: 'الاستيقاظ والتهنئة في صباح العيد', titleEn: 'Waking Up and Sharing Eid Greetings',
    focusAr: 'يرتب مشاهد صباح العيد، ويستخدم عبارات بسيطة عن الاستيقاظ في وقت معين وزيارة أفراد الأسرة وقول Eid Mubarak.',
    focusEn: 'Sequence scenes from Eid morning and use simple phrases about waking at a time, visiting family members, and saying “Eid Mubarak.”',
    questionAr: 'ماذا تفعل الأسرة في صباح عيد الفطر؟', questionEn: 'What does the family do on Eid El Fitr morning?',
    optionsAr: ['تستيقظ وتزور أفراد الأسرة', 'تذهب إلى المدرسة ليلًا', 'تترك التهاني حتى نهاية العام'],
    optionsEn: ['They wake up and visit family members.', 'They go to school at night.', 'They wait until the end of the year to greet people.'],
    visualStepsAr: ['استيقظ في صباح العيد', 'ارتدِ ملابس العيد', 'زر أفراد الأسرة', 'قل Eid Mubarak بمحبة'],
    visualStepsEn: ['Wake up on Eid morning', 'Put on Eid clothes', 'Visit family members', 'Say “Eid Mubarak” warmly']
  },
  {
    unit: 3, page: 24, titleAr: 'هدايا العيد والاختيار بين السلوك الجيد والسيئ', titleEn: 'Eid Gifts and Choosing Helpful Behaviour',
    focusAr: 'يقرأ عبارات عن أنشطة العيد، ويميز ما هو جيد مثل زيارة الأسرة ومشاركة التهاني عما هو غير مناسب مثل إيذاء الزهور.',
    focusEn: 'Read about Eid activities and distinguish helpful choices, such as visiting family, from unkind actions, such as damaging flowers.',
    questionAr: 'أي نشاط يعد تصرفًا جيدًا في العيد؟', questionEn: 'Which is a good thing to do at Eid?',
    optionsAr: ['زيارة الأسرة والأصدقاء', 'قطف الأزهار من الحدائق', 'إيذاء الحيوانات'],
    optionsEn: ['Visit family and friends.', 'Pick flowers in parks.', 'Hurt animals.'],
    visualStepsAr: ['اقرأ النشاط المقترح', 'فكر في أثره على الآخرين', 'صنفه جيدًا أو سيئًا', 'اختر هدية وعبارة مهذبة'],
    visualStepsEn: ['Read the suggested activity', 'Think about its effect on others', 'Sort it as good or unhelpful', 'Choose a gift and a polite phrase']
  },
  {
    unit: 4, page: 25, titleAr: 'شجرة الأسرة واختلاف الأسماء', titleEn: 'A Family Tree and Different Naming Patterns',
    focusAr: 'يقرأ شجرة أسرة أحمد، ويسمي أفرادها وصلاتهم، ويقارن بين ترتيب الأسماء في السودان والمملكة المتحدة باحترام.',
    focusEn: 'Read Ahmed’s family tree, name relatives and their relationships, and respectfully compare naming patterns in Sudan and the UK.',
    questionAr: 'من هو والد والد أحمد في شجرة الأسرة؟', questionEn: 'Who is Ahmed’s grandfather in the family tree?',
    optionsAr: ['محمد', 'إيدي هاريس', 'تاجا'],
    optionsEn: ['Mohamed', 'Eddie Harris', 'Taja'],
    visualStepsAr: ['ابدأ باسم أحمد', 'اصعد إلى اسم والده خالد', 'حدد جده محمد', 'صف صلات القرابة'],
    visualStepsEn: ['Start with Ahmed’s name', 'Move up to his father Khalid', 'Find his grandfather Mohamed', 'Describe the family relationships']
  },
  {
    unit: 4, page: 26, titleAr: 'أنشطة أفراد الأسرة الآن', titleEn: 'What Family Members Are Doing Now',
    focusAr: 'يقرأ عن أنشطة أحمد وداليا خارج المنزل، ويصف ما يفعله الأشخاص الآن باستخدام المضارع المستمر مثل watching وvisiting وreading.',
    focusEn: 'Read about Ahmed and Dalia’s activities away from home and describe what people are doing now with forms such as “watching,” “visiting,” and “reading.”',
    questionAr: 'ماذا تفعل جدة داليا؟', questionEn: 'What is Dalia’s grandmother doing?',
    optionsAr: ['تقرأ قصة.', 'تلعب كرة السلة.', 'تزرع شجرة في الحديقة.'],
    optionsEn: ['She is reading a story.', 'She is playing basketball.', 'She is planting a tree in the park.'],
    visualStepsAr: ['انظر إلى الشخص في الصورة', 'حدد الفعل الجاري الآن', 'استخدم is مع الفعل المنتهي بـ ing', 'قل جملة عما يفعله'],
    visualStepsEn: ['Look at the person in the picture', 'Identify the action happening now', 'Use “is” with a verb ending in “-ing”', 'Say what the person is doing']
  },
  {
    unit: 4, page: 27, titleAr: 'حكاية الجديان والثعلب', titleEn: 'The Story of the Baby Goats and the Fox',
    focusAr: 'يتابع أحداث حكاية الجديان والثعلب، ويرتب أفعال الشخصيات مثل الطرق على الباب وفتحه والذهاب إلى المتاجر.',
    focusEn: 'Follow the baby goats and fox story and sequence character actions such as knocking at the door, opening it, and going to the shops.',
    questionAr: 'ماذا تقول الأم للصغار قبل أن تغادر؟', questionEn: 'What does the mother tell the children before she leaves?',
    optionsAr: ['ابقوا هنا ولا تفتحوا الباب.', 'افتحوا الباب للثعلب.', 'اذهبوا إلى النهر وحدكم.'],
    optionsEn: ['Stay here and don’t open the door.', 'Open the door for the fox.', 'Go to the river alone.'],
    visualStepsAr: ['تغادر الأم إلى المتاجر', 'يطرق الثعلب الباب', 'تنتظر الجديان ولا تفتح', 'تعود الأم وتحمي صغارها'],
    visualStepsEn: ['Mother goat goes to the shops', 'The fox knocks at the door', 'The baby goats wait and do not open it', 'Mother goat returns and protects them']
  },
  {
    unit: 4, page: 28, titleAr: 'أفعال تنتهي بـ ing', titleEn: 'Actions Ending in “-ing”',
    focusAr: 'يستمع إلى أوصاف صور لأشخاص يقومون بأفعال، ويلاحظ صيغة ing في كلمات مثل singing وswinging وwatching وopening.',
    focusEn: 'Listen to descriptions of people doing actions and notice the “-ing” form in words such as “singing,” “swinging,” “watching,” and “opening.”',
    questionAr: 'أي كلمة تصف فعلًا يحدث الآن؟', questionEn: 'Which word describes an action happening now?',
    optionsAr: ['watching', 'window', 'winter'],
    optionsEn: ['watching', 'window', 'winter'],
    visualStepsAr: ['لاحظ فعل الشخص', 'اختر الفعل الأساسي', 'أضف ing للفعل', 'صف الصورة بجملة قصيرة'],
    visualStepsEn: ['Notice the person’s action', 'Choose the base verb', 'Add “-ing” to the verb', 'Describe the picture in a short sentence']
  },
  {
    unit: 4, page: 29, titleAr: 'تاجا تساعد مجتمع قريتها', titleEn: 'Taja Helps Her Village Community',
    focusAr: 'يقرأ عن تاجا وأعمالها في قريتها، مثل إعداد الطعام لكبار السن وتعليم الأطفال، ويصف كيف يعمل الناس معًا لخدمة مجتمعهم.',
    focusEn: 'Read about Taja’s work in her village, including cooking for older people and teaching children, and describe how people help their community.',
    questionAr: 'كيف تساعد تاجا الأطفال؟', questionEn: 'How does Taja help the children?',
    optionsAr: ['تعلمهم القراءة والكتابة', 'تمنعهم من اللعب دائمًا', 'تطلب منهم مغادرة القرية'],
    optionsEn: ['She teaches them to read and write.', 'She never lets them play.', 'She asks them to leave the village.'],
    visualStepsAr: ['تعرف إلى تاجا وقريتها', 'لاحظ عملها مع كبار السن', 'شاهدها تعلم الأطفال', 'اربط العمل بخدمة المجتمع'],
    visualStepsEn: ['Meet Taja and her village', 'Notice her work with older people', 'See her teaching children', 'Connect helping work with community service']
  },
  {
    unit: 4, page: 30, titleAr: 'الأماكن وإعطاء الاتجاهات', titleEn: 'Places and Giving Directions',
    focusAr: 'يتعرف أماكن في البلدة مثل العيادة والمخبز والمكتبة، ويستمع إلى طلب الاتجاهات ثم يصف طريقًا من الحديقة إلى مكان آخر.',
    focusEn: 'Identify town places such as a clinic, bakery, and library; listen to a request for directions and describe a route from the park.',
    questionAr: 'ما المعلومات التي تساعد على إعطاء الاتجاه؟', questionEn: 'What information helps someone give directions?',
    optionsAr: ['اسم المكان والطريق إليه', 'لون وجبة الغداء', 'عدد أوراق الشجرة'],
    optionsEn: ['The place name and route to it', 'The colour of lunch', 'The number of leaves on a tree'],
    visualStepsAr: ['ابدأ من الحديقة على الخريطة', 'حدد الوجهة المطلوبة', 'تتبع الشارع المناسب', 'اذكر الاتجاهات بوضوح'],
    visualStepsEn: ['Start at the park on the map', 'Find the requested destination', 'Trace the correct street', 'Give the directions clearly']
  },
  {
    unit: 4, page: 31, titleAr: 'المهن وأماكن العمل', titleEn: 'Jobs and Workplaces',
    focusAr: 'يقرأ أوصافًا لمهن في البلدة، ويربط الخباز بالمخبز والمعلم بالمدرسة ومساعد الطبيب بالمستشفى، ثم يصف وظيفة بسيطة.',
    focusEn: 'Read job clues around town, match a baker with a bakery, a teacher with a school, and a hospital assistant with a hospital, then describe a job.',
    questionAr: 'أين يعمل الخباز؟', questionEn: 'Where does a baker work?',
    optionsAr: ['في المخبز', 'في المحطة', 'في حديقة الحيوانات'],
    optionsEn: ['In a bakery', 'At a bus station', 'At a zoo'],
    visualStepsAr: ['اقرأ وصف المهمة', 'حدد المهنة', 'اربط المهنة بمكان العمل', 'قل ما الذي يصنعه أو يقدمه العامل'],
    visualStepsEn: ['Read the job clue', 'Identify the worker', 'Match the job to a workplace', 'Say what the worker makes or does']
  },
  {
    unit: 4, page: 32, titleAr: 'مراجعة الأسرة والمهن والاتجاهات', titleEn: 'Reviewing Family, Jobs, and Directions',
    focusAr: 'يراجع أسماء أفراد الأسرة والمهن وألفاظ الاتجاهات، ويكتب جملًا عن أسرته ومكان سكنه ويشارك في حوار قصير.',
    focusEn: 'Review family words, jobs, and direction language; write about family and home, then take part in a short dialogue.',
    questionAr: 'أي عبارة تساعد على وصف طريق في الشارع؟', questionEn: 'Which phrase can help describe a route along a street?',
    optionsAr: ['على يميني أرى…', 'أنا أتناول الكعكة الآن.', 'إنها زهرتك.'],
    optionsEn: ['On my right, I can see…', 'I am eating cake now.', 'It is your flower.'],
    visualStepsAr: ['سمِّ فردًا من الأسرة', 'اختر مهنة ومكانها', 'تتبع شارعًا على الخريطة', 'اكتب جملة عن بيتك أو أسرتك'],
    visualStepsEn: ['Name a family member', 'Choose a job and workplace', 'Follow a street on the map', 'Write a sentence about home or family']
  },
  {
    unit: 5, page: 33, titleAr: 'الأعداد بالعشرات وقراءة الأعمار', titleEn: 'Counting by Tens and Reading Ages',
    focusAr: 'يردد الأعداد بالعشرات حتى مئة، ويميز بين السؤال عن عمر شخص واحد والسؤال عن أعمار عدة أشخاص.',
    focusEn: 'Chant the tens up to one hundred and distinguish asking about one person’s age from asking about several people’s ages.',
    questionAr: 'ما العدد الذي يأتي بعد 70 عند العد بالعشرات؟', questionEn: 'Which number comes after 70 when counting by tens?',
    optionsAr: ['80', '75', '60'],
    optionsEn: ['80', '75', '60'],
    visualStepsAr: ['ابدأ بالعدد 10', 'أضف عشرة في كل مرة', 'واصل حتى 100', 'اسأل عن عمر شخص أو أشخاص'],
    visualStepsEn: ['Start at 10', 'Add ten each time', 'Continue to 100', 'Ask the age of one person or a group']
  },
  {
    unit: 5, page: 34, titleAr: 'خطوات زراعة بذرة طماطم', titleEn: 'Steps for Growing a Tomato Seed',
    focusAr: 'يرتب تعليمات زراعة الطماطم في أصيص، من تجهيز التربة ووضع البذرة إلى تغطيتها وسقيها ووضع الأصيص قرب النافذة.',
    focusEn: 'Sequence instructions for growing a tomato in a pot, from preparing soil and placing the seed to covering, watering, and setting the pot near a window.',
    questionAr: 'ماذا نفعل بالبذرة بعد وضعها في الحفرة؟', questionEn: 'What do we do with the seed after placing it in the hole?',
    optionsAr: ['نغطيها بالتربة', 'نضعها في حقيبة المدرسة', 'نتركها على الطريق'],
    optionsEn: ['Cover it with soil.', 'Put it in a school bag.', 'Leave it on the road.'],
    visualStepsAr: ['جهز الأصيص والتربة', 'اصنع حفرة وضع البذرة', 'غطِّ البذرة واسقها', 'ضع الأصيص قرب النافذة وانتظر النمو'],
    visualStepsEn: ['Prepare the pot and soil', 'Make a hole and place the seed', 'Cover and water the seed', 'Put the pot by a window and wait for growth']
  },
  {
    unit: 5, page: 35, titleAr: 'الفصول والطقس ونمو النباتات', titleEn: 'Seasons, Weather, and Plant Growth',
    focusAr: 'يسمي الفصول الأربعة ويربطها بصفات الطقس، ويستخدم أفعالًا منتهية بـ ing لوصف تساقط الثلج ولمعان الشمس ونمو النباتات.',
    focusEn: 'Name the four seasons and connect them with weather; use “-ing” verbs to describe falling snow, shining sun, and growing plants.',
    questionAr: 'أي فصل تنمو فيه نباتات جديدة بحسب النشيد؟', questionEn: 'In which season do new plants grow in the chant?',
    optionsAr: ['الربيع', 'الشتاء', 'الخريف'],
    optionsEn: ['Spring', 'Winter', 'Autumn'],
    visualStepsAr: ['اختر فصلًا من السنة', 'لاحظ الطقس فيه', 'اختر فعلًا يصف ما يحدث', 'قل جملة عن النباتات أو الشمس'],
    visualStepsEn: ['Choose a season', 'Notice its weather', 'Choose a verb for what is happening', 'Say a sentence about plants or the sun']
  },
  {
    unit: 5, page: 36, titleAr: 'العمر والطول والوزن', titleEn: 'Age, Height, and Weight',
    focusAr: 'يقرأ معلومات عن أشخاص ويطابقها مع صورهم، ثم يسأل ويجيب عن العمر والطول والوزن بوحدات مناسبة.',
    focusEn: 'Read facts about people and match them to pictures, then ask and answer about age, height, and weight using suitable units.',
    questionAr: 'بأي وحدة يذكر الدرس وزن الشخص؟', questionEn: 'Which unit is used for a person’s weight in the lesson?',
    optionsAr: ['الكيلوغرام', 'المتر', 'اللتر'],
    optionsEn: ['Kilograms', 'Metres', 'Litres'],
    visualStepsAr: ['اقرأ العمر', 'لاحظ الطول بالمتر', 'لاحظ الوزن بالكيلوغرام', 'طابق المعلومات مع الشخص'],
    visualStepsEn: ['Read the age', 'Notice the height in metres', 'Notice the weight in kilograms', 'Match the facts to the person']
  },
  {
    unit: 5, page: 37, titleAr: 'قصة حبة البطاطا الكبيرة', titleEn: 'The Story of the Big Potato',
    focusAr: 'يتابع قصة عبدالله وأسرته وهم يعتنون بنبتة البطاطا ويحصدونها، ويصف أحداث القصة باستخدام المضارع المستمر وأيام الأسبوع.',
    focusEn: 'Follow Abdullah and his family caring for and harvesting a potato plant, and describe the story with present continuous actions and days of the week.',
    questionAr: 'ماذا تفعل أسرة عبدالله في القصة؟', questionEn: 'What does Abdullah’s family do in the story?',
    optionsAr: ['تسحب البطاطا من الأرض ثم تطهوها', 'تضع البطاطا في النهر', 'تأخذها إلى المدرسة لتلعب بها'],
    optionsEn: ['They pull the potato from the ground and cook it.', 'They put the potato in a river.', 'They take it to school to play with it.'],
    visualStepsAr: ['اسقِ النبتة وهي تنمو', 'راقب أوراقها وتغيرها', 'اسحب البطاطا مع الأسرة', 'اطهها وتناولها معًا'],
    visualStepsEn: ['Water the growing plant', 'Watch its leaves and changes', 'Pull up the potato with the family', 'Cook and share it together']
  },
  {
    unit: 5, page: 38, titleAr: 'عادات تساعدنا على الصحة', titleEn: 'Habits That Help Us Stay Healthy',
    focusAr: 'يتعرف عادات يومية صحية مثل غسل اليدين والأسنان، وتناول الفاكهة والخضروات، وشرب الماء والنوم الكافي وممارسة الرياضة.',
    focusEn: 'Learn everyday healthy habits: washing hands and teeth, eating fruit and vegetables, drinking water, sleeping enough, and exercising.',
    questionAr: 'أي عادة تساعد على بقاء الجسم صحيًا؟', questionEn: 'Which habit helps keep the body healthy?',
    optionsAr: ['شرب الماء وممارسة الرياضة', 'عدم تنظيف الأسنان', 'النوم ساعتين فقط كل ليلة'],
    optionsEn: ['Drink water and exercise.', 'Do not clean your teeth.', 'Sleep for only two hours each night.'],
    visualStepsAr: ['حافظ على النظافة', 'اختر طعامًا صحيًا', 'اشرب الماء وتحرك', 'نم ساعات كافية'],
    visualStepsEn: ['Keep clean', 'Choose healthy food', 'Drink water and move', 'Get enough sleep']
  },
  {
    unit: 5, page: 39, titleAr: 'القدرات الآن وفي الماضي', titleEn: 'Abilities Now and in the Past',
    focusAr: 'يقارن بين ما كانت وردة تستطيع فعله وهي رضيعة وما تستطيع فعله الآن، مستخدمًا can للحاضر وcould أو couldn’t للماضي.',
    focusEn: 'Compare what Warda could do as a baby with what she can do now, using “can” for the present and “could” or “couldn’t” for the past.',
    questionAr: 'ما الذي لم تستطع وردة فعله عندما كان عمرها ستة أشهر؟', questionEn: 'What couldn’t Warda do when she was six months old?',
    optionsAr: ['لم تستطع المشي أو الكلام', 'لم تستطع النوم أبدًا', 'لم تستطع الابتسام'],
    optionsEn: ['She couldn’t walk or talk.', 'She could never sleep.', 'She couldn’t smile.'],
    visualStepsAr: ['تأمل صورة وردة وهي رضيعة', 'اذكر ما لم تستطع فعله', 'تأملها وهي أكبر سنًا', 'قارن باستخدام can وcouldn’t'],
    visualStepsEn: ['Look at Warda as a baby', 'Say what she could not do', 'Look at her when she is older', 'Compare using “can” and “couldn’t”']
  },
  {
    unit: 5, page: 40, titleAr: 'مراجعة الفصول والأعداد والصحة', titleEn: 'Reviewing Seasons, Numbers, and Healthy Habits',
    focusAr: 'يراجع أسماء الفصول والأعداد وخطوات زراعة النبات والعادات الصحية، ويتدرب على سؤال زميل عن طوله ووزنه.',
    focusEn: 'Review seasons, numbers, plant-growing steps, and healthy habits, then practise asking a classmate about height and weight.',
    questionAr: 'أي سؤال نستخدمه لمعرفة طول شخص؟', questionEn: 'Which question can we use to ask someone’s height?',
    optionsAr: ['How tall are you?', 'How old is the tree’s colour?', 'Where is the football?'],
    optionsEn: ['How tall are you?', 'How old is the tree’s colour?', 'Where is the football?'],
    visualStepsAr: ['سمِّ فصلًا وصف طقسه', 'راجع أعداد العشرات', 'اذكر عادة صحية', 'اسأل عن الطول أو الوزن'],
    visualStepsEn: ['Name a season and its weather', 'Review the tens', 'Name a healthy habit', 'Ask about height or weight']
  },
  {
    unit: 6, page: 41, titleAr: 'الرياضات والهوايات المفضلة', titleEn: 'Favourite Sports and Activities',
    focusAr: 'يسمي رياضات وأنشطة مثل كرة السلة والسباحة والكاراتيه، ويعبر عما يحبه أو لا يحبه مستخدمًا like وdon’t like.',
    focusEn: 'Name sports and activities such as basketball, swimming, and karate, and say what you like or do not like with “like” and “don’t like.”',
    questionAr: 'أي جملة تعبر عن تفضيل رياضي؟', questionEn: 'Which sentence expresses a sports preference?',
    optionsAr: ['I like playing basketball.', 'I am a basketball.', 'I behind the swimming.'],
    optionsEn: ['I like playing basketball.', 'I am a basketball.', 'I behind the swimming.'],
    visualStepsAr: ['شاهد صور الرياضات', 'سمِّ النشاط', 'اختر ما تحبه أو لا تحبه', 'كوّن جملة عن تفضيلك وصديقك'],
    visualStepsEn: ['Look at the sports pictures', 'Name an activity', 'Choose what you like or dislike', 'Make a sentence about your and a friend’s preferences']
  },
  {
    unit: 6, page: 42, titleAr: 'أفعال الحركة والاتجاهات', titleEn: 'Movement Actions and Directions',
    focusAr: 'ينفذ تعليمات حركية بسيطة مثل الوقوف والتصفيق والدوران، ويفهم كلمات الاتجاه والموقع مثل around وbehind وin front وover.',
    focusEn: 'Follow movement instructions such as standing, clapping, and turning around, and understand direction words such as “around,” “behind,” and “over.”',
    questionAr: 'أي كلمة تعني أن الشيء يقع خلف شخص؟', questionEn: 'Which word means that something is at the back of a person?',
    optionsAr: ['behind', 'over', 'around'],
    optionsEn: ['behind', 'over', 'around'],
    visualStepsAr: ['استمع إلى فعل الحركة', 'قف أو صفق كما تسمع', 'حدد الاتجاه بالنسبة إلى جسمك', 'أعد التعليمات مع زميل'],
    visualStepsEn: ['Listen to the movement verb', 'Stand or clap as instructed', 'Find the direction in relation to yourself', 'Repeat the instructions with a partner']
  },
  {
    unit: 6, page: 43, titleAr: 'ألعاب الأطفال وما يفعلونه', titleEn: 'Children’s Games and What They Are Doing',
    focusAr: 'يصف صور ألعاب مثل الحجلة والكرات والأرجوحة والاختباء، ويسأل عما يفعله شخص أو كم طفلًا يشارك في اللعب.',
    focusEn: 'Describe pictures of games such as hopscotch, marbles, swings, and hide-and-seek; ask what someone is doing or how many children are playing.',
    questionAr: 'أي سؤال نسأله لمعرفة عدد الأطفال الذين يلعبون؟', questionEn: 'Which question asks how many children are playing?',
    optionsAr: ['How many children are playing?', 'What colour is the weather?', 'Where is your grandmother?'],
    optionsEn: ['How many children are playing?', 'What colour is the weather?', 'Where is your grandmother?'],
    visualStepsAr: ['لاحظ لعبة الأطفال', 'عدّ المشاركين', 'صف فعلهم', 'مثل حركة لعبة بالتخمين'],
    visualStepsEn: ['Notice the children’s game', 'Count the players', 'Describe what they are doing', 'Mime a game for others to guess']
  },
  {
    unit: 6, page: 44, titleAr: 'كم مرة نمارس الرياضة؟', titleEn: 'How Often Do We Play Sports?',
    focusAr: 'يستمع إلى حوار عن لعب كرة السلة، ويستخدم sometimes وoften وnever لوصف عدد مرات ممارسة نشاط مألوف.',
    focusEn: 'Listen to a conversation about basketball and use “sometimes,” “often,” and “never” to describe how frequently an activity happens.',
    questionAr: 'أي كلمة تعني أن الفعل يحدث أحيانًا؟', questionEn: 'Which word means that an action happens from time to time?',
    optionsAr: ['sometimes', 'never', 'behind'],
    optionsEn: ['sometimes', 'never', 'behind'],
    visualStepsAr: ['اختر رياضة', 'اسأل: كم مرة تلعب؟', 'اختر often أو sometimes أو never', 'أجب بجملة عن عادتك'],
    visualStepsEn: ['Choose a sport', 'Ask how often someone plays', 'Choose “often,” “sometimes,” or “never”', 'Answer with a sentence about a habit']
  },
  {
    unit: 6, page: 45, titleAr: 'لعبة العد والتحرك على المسار', titleEn: 'A Counting and Movement Board Game',
    focusAr: 'يلعب لعبة مسار تعليمية، ويقرأ تعليمات مثل التقدم أو الرجوع أو تفويت الدور، ويمارس العد حتى ثلاثين واحترام دور الآخرين.',
    focusEn: 'Play a board-path game, read directions to move forward, go back, or miss a turn, count to thirty, and take turns fairly.',
    questionAr: 'إلى أي عدد يعد التلاميذ في النشاط؟', questionEn: 'Up to which number do pupils count in the activity?',
    optionsAr: ['30', '12', '1000'],
    optionsEn: ['30', '12', '1000'],
    visualStepsAr: ['ضع القطعة عند البداية', 'اقرأ تعليمات المربع', 'عدّ التحرك للأمام أو الخلف', 'انتظر دورك حتى تصل إلى النهاية'],
    visualStepsEn: ['Place a counter at the start', 'Read the square’s instruction', 'Count moves forward or back', 'Wait for your turn and reach the finish']
  },
  {
    unit: 6, page: 46, titleAr: 'اللياقة والطعام الصحي', titleEn: 'Fitness and Healthy Food',
    focusAr: 'يقرأ حوار مها عن تحسن لياقتها، ويتحدث عن الرياضة والطعام والماء، ويجيب بنعم أو لا عن عادات صحية مألوفة.',
    focusEn: 'Read Maha’s conversation about becoming fitter, talk about exercise, food, and water, and answer yes/no questions about healthy habits.',
    questionAr: 'ما النشاط الذي تفعله مها كل يوم؟', questionEn: 'What does Maha do every day?',
    optionsAr: ['تمشي وتجري وأحيانًا تسبح', 'تأكل الحلوى وتشرب الكولا فقط', 'تنام طوال اليوم'],
    optionsEn: ['She walks, runs, and sometimes swims.', 'She only eats sweets and drinks cola.', 'She sleeps all day.'],
    visualStepsAr: ['تأمل نشاط الجسم', 'اختر طعامًا وشرابًا صحيين', 'تحدث عن عادة يومية', 'أجب عن سؤال اللياقة بنعم أو لا'],
    visualStepsEn: ['Notice the body in action', 'Choose healthy food and drink', 'Talk about a daily habit', 'Answer a fitness question yes or no']
  },
  {
    unit: 6, page: 47, titleAr: 'وصف الألعاب والرياضات', titleEn: 'Describing Games and Sports',
    focusAr: 'يقرأ أوصافًا لرياضات جماعية وفردية، ويستدل على اسم الرياضة من عدد اللاعبين والمعدات وطريقة اللعب.',
    focusEn: 'Read descriptions of team and individual sports and identify each sport from its players, equipment, and way of playing.',
    questionAr: 'ما الرياضة التي تلعب فيها الفرق بكرة تُرمى في سلة؟', questionEn: 'Which sport uses a ball thrown into a basket by teams?',
    optionsAr: ['كرة السلة', 'الكرة الطائرة', 'الركض'],
    optionsEn: ['Basketball', 'Volleyball', 'Running'],
    visualStepsAr: ['اقرأ عدد اللاعبين', 'لاحظ الكرة أو الشبكة أو السلة', 'حدد طريقة اللعب', 'طابق الوصف مع اسم الرياضة'],
    visualStepsEn: ['Read the number of players', 'Notice the ball, net, or basket', 'Identify how the game is played', 'Match the clues to a sport']
  },
  {
    unit: 6, page: 48, titleAr: 'مراجعة الرياضات واللعب والتكرار', titleEn: 'Reviewing Sports, Games, and Frequency',
    focusAr: 'يراجع أسماء الرياضات والألعاب وكلمات التكرار، ويكتب عن نشاط يحبه ثم يسأل زميلًا عن الرياضات وعدد مرات ممارستها.',
    focusEn: 'Review sports, games, and frequency words, write about an activity you enjoy, and ask a classmate what sports they play and how often.',
    questionAr: 'كيف تجيب عن سؤال: How often do you play? إذا كنت تلعب كل يوم؟', questionEn: 'How can you answer “How often do you play?” if you play every day?',
    optionsAr: ['I play every day.', 'I am a playing.', 'I never yesterday.'],
    optionsEn: ['I play every day.', 'I am a playing.', 'I never yesterday.'],
    visualStepsAr: ['اختر رياضة أو لعبة تحبها', 'اكتب جملة عنها', 'اسأل زميلك كم مرة يلعب', 'تبادل الإجابات بأدب'],
    visualStepsEn: ['Choose a sport or game you enjoy', 'Write a sentence about it', 'Ask a classmate how often they play', 'Exchange answers politely']
  }
];

export const SUDAN_PRIMARY_ENGLISH_G3_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ENGLISH_G3_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const unit = SUDAN_PRIMARY_ENGLISH_G3_BOOK.units[lesson.unit - 1];
  const lessonInUnit = ((index % 8) + 1);
  const order = index + 1;
  const id = `sd-primary-english-g3-${order}`;
  const titleAr = `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`;
  const titleEn = `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));
  const diagram = {
    id: `${id}-visual`,
    figureNumberAr: `تسلسل بصري (${lesson.unit}-${lessonInUnit})`,
    figureNumberEn: `Visual Sequence (${lesson.unit}-${lessonInUnit})`,
    titleAr: `خطوات بصرية: ${lesson.titleAr}`,
    titleEn: `Visual Steps: ${lesson.titleEn}`,
    captionAr: `تسلسل مصور مبسط للتدرب على ${lesson.titleAr}.`,
    captionEn: `A simple visual sequence for practising ${lesson.titleEn}.`,
    diagramType: 'primary_lesson_sequence',
    visualSteps
  } as unknown as LectureDiagram;

  return {
    id,
    order,
    titleAr,
    titleEn,
    subtitleAr: `اللغة الإنجليزية — الصف الثالث الأساسي — ${unit.titleAr}`,
    subtitleEn: `SMILE Book 3 — Unit ${lesson.unit}: ${unit.title}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 20,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'ENGLISH',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثالث الأساسي — جمهورية السودان',
    gradeLevelNameEn: 'Grade 3 Basic Level — Republic of the Sudan',
    termAr: 'كتاب التلميذ — SMILE Book 3',
    termEn: 'Pupil’s Book — SMILE Book 3',
    unitTitleAr: unit.titleAr,
    unitTitleEn: `Unit ${lesson.unit}: ${unit.title}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل صورة أو موقفًا من حياتك يرتبط بموضوع «${lesson.titleAr}»، ثم شارك كلمة أو جملة تعرفها.`,
    warmupHookEn: `Think of a picture or a moment from your life connected with “${lesson.titleEn},” then share a word or sentence you already know.`,
    learningOutcomesAr: [lesson.focusAr, 'يستخدم كلمات وتراكيب الدرس في جملة قصيرة أو حوار مع زميل.'],
    learningOutcomesEn: [lesson.focusEn, 'Use the lesson words and patterns in a short sentence or partner conversation.'],
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
      contentAr: `${lesson.focusAr}\n\nنشاط بصري: اتبع الخطوات الأربع، وسمِّ ما تراه، ثم استخدم مفردات الدرس في حديث قصير.`,
      contentEn: `${lesson.focusEn}\n\nVisual activity: Follow the four steps, name what you see, and use the lesson vocabulary in a short conversation.`,
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
    topicEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit} — p. ${lesson.page}`
  };
});
