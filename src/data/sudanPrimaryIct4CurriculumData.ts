import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ICT_G4_BOOK = {
  title: 'تكنولوجيا المعلومات والاتصالات — الصف الرابع الابتدائي',
  titleEn: 'Information and Communication Technology — Grade 4 Primary',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'مدخل إلى تكنولوجيا المعلومات والاتصالات', titleEn: 'Introduction to Information and Communication Technology', firstPage: 1, lastPage: 15 },
    { titleAr: 'الحاسوب من حولنا', titleEn: 'The Computer Around Us', firstPage: 16, lastPage: 23 },
    { titleAr: 'أساسيات الحاسوب', titleEn: 'Computer Fundamentals', firstPage: 24, lastPage: 35 },
    { titleAr: 'الأمان في استخدام الحاسوب', titleEn: 'Safety When Using a Computer', firstPage: 36, lastPage: 41 },
    { titleAr: 'شبكات الحاسوب والإنترنت', titleEn: 'Computer Networks and the Internet', firstPage: 42, lastPage: 48 },
    { titleAr: 'التعامل مع لوحة المفاتيح والفأرة', titleEn: 'Using the Keyboard and Mouse', firstPage: 49, lastPage: 61 }
  ]
} as const;

interface IctLesson {
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

const lessons: IctLesson[] = [
  {
    unit: 1, page: 2, lastPage: 3, titleAr: 'مفهوم تكنولوجيا المعلومات والاتصالات', titleEn: 'The Meaning of Information and Communication Technology',
    focusAr: 'تجمع تكنولوجيا المعلومات والاتصالات بين أجهزة ووسائل تساعدنا على جمع المعلومات وتنظيمها وحفظها ومشاركتها. فالحاسوب والهاتف والراديو أمثلة لوسائل تستخدم المعلومات بطرق مختلفة.',
    focusEn: 'Information and communication technology brings together tools that help us collect, organize, store, and share information. Computers, phones, and radios are examples of tools that use information in different ways.',
    questionAr: 'أي أداة تساعد على كتابة المعلومات وحفظها إلكترونيًا؟', questionEn: 'Which tool can help write and store information electronically?',
    optionsAr: ['الحاسوب', 'الممحاة', 'المسطرة'], optionsEn: ['A computer', 'An eraser', 'A ruler'],
    visualStepsAr: ['نلاحظ معلومة', 'نستخدم أداة تقنية', 'نعالجها أو نحفظها', 'نشاركها بأمان'],
    visualStepsEn: ['Notice information', 'Use a technology tool', 'Process or store it', 'Share it safely']
  },
  {
    unit: 1, page: 4, lastPage: 8, titleAr: 'انتقال المعلومات', titleEn: 'How Information Travels',
    focusAr: 'تنتقل المعلومات من شخص إلى آخر بوسائل متعددة؛ فقد تصل بالكلام أو الكتابة أو الإشارات أو عبر أجهزة الاتصال. تساعدنا الوسيلة المناسبة على إيصال الرسالة بوضوح، مع احترام خصوصية الآخرين.',
    focusEn: 'Information travels from one person to another in many ways: through speech, writing, signals, or communication devices. Choosing a suitable method helps deliver a message clearly while respecting other people’s privacy.',
    questionAr: 'أي وسيلة تنقل رسالة مكتوبة إلى شخص قريب؟', questionEn: 'Which method can carry a written message to someone nearby?',
    optionsAr: ['ورقة مكتوبة', 'حجر', 'كرة'], optionsEn: ['A written note', 'A stone', 'A ball'],
    visualStepsAr: ['نكوّن رسالة', 'نختار وسيلة مناسبة', 'نرسلها للمستلم', 'يقرأها ويفهمها'],
    visualStepsEn: ['Create a message', 'Choose a suitable method', 'Send it to the receiver', 'They read and understand it']
  },
  {
    unit: 1, page: 9, lastPage: 9, titleAr: 'أهمية استخدام تطبيقات تكنولوجيا المعلومات', titleEn: 'Why Information Technology Applications Matter',
    focusAr: 'تسهل تطبيقات تكنولوجيا المعلومات بعض الأعمال مثل التعلم والكتابة والحساب وتنظيم المعلومات والتواصل. نختار التطبيق الملائم للمهمة، ونستخدم الأجهزة باعتدال وبإرشاد المعلم أو الأسرة.',
    focusEn: 'Information technology applications make tasks such as learning, writing, calculating, organizing information, and communicating easier. Choose an application suited to the task and use devices in moderation with guidance from a teacher or family member.',
    questionAr: 'أي تطبيق يناسب كتابة فقرة قصيرة؟', questionEn: 'Which application is suitable for writing a short paragraph?',
    optionsAr: ['برنامج كتابة', 'لعبة حركة', 'مشغل صوت فقط'], optionsEn: ['A word-processing application', 'An action game', 'An audio player only'],
    visualStepsAr: ['نحدد المهمة', 'نختار التطبيق', 'ننجز العمل', 'نراجع النتيجة'],
    visualStepsEn: ['Identify the task', 'Choose an application', 'Complete the work', 'Review the result']
  },
  {
    unit: 1, page: 10, lastPage: 15, titleAr: 'تطبيقات تكنولوجيا المعلومات في حياتنا', titleEn: 'Information Technology in Everyday Life',
    focusAr: 'تظهر تطبيقات التقنية في التعلم والتواصل والخدمات والأعمال اليومية. تساعدنا على إنجاز بعض المهام بسرعة، لكننا نتحقق من المعلومات ونتبع توجيهات شخص بالغ قبل استخدام خدمة أو مشاركة رسالة.',
    focusEn: 'Technology is used in learning, communication, services, and everyday work. It can help complete some tasks quickly, but we should check information and follow an adult’s guidance before using a service or sharing a message.',
    questionAr: 'ما التصرف الأفضل عند وصول معلومة غير مألوفة؟', questionEn: 'What is the best thing to do when unfamiliar information arrives?',
    optionsAr: ['أسأل معلمي أو أسرتي وأتحقق منها', 'أنشرها فورًا', 'أرسل بياناتي معها'], optionsEn: ['Ask my teacher or family and check it', 'Share it immediately', 'Send my personal details with it'],
    visualStepsAr: ['نحدد حاجة يومية', 'نختار تطبيقًا مناسبًا', 'نستخدمه لإنجاز المهمة', 'نتحقق ونحافظ على الخصوصية'],
    visualStepsEn: ['Identify an everyday need', 'Choose a suitable application', 'Use it to complete the task', 'Check and protect privacy']
  },
  {
    unit: 2, page: 17, lastPage: 17, titleAr: 'الحاسوب في المنزل', titleEn: 'The Computer at Home',
    focusAr: 'يمكن أن يساعد الحاسوب في المنزل على التعلم والكتابة ومشاهدة مواد مفيدة أو تنظيم بعض الأعمال. يستخدمه الطفل بإذن الأسرة، ويوازن بين وقت الشاشة والراحة واللعب والنشاط البدني.',
    focusEn: 'At home, a computer can support learning, writing, viewing helpful materials, and organizing tasks. Children should use it with family permission and balance screen time with rest, play, and physical activity.',
    questionAr: 'كيف يستخدم الطفل الحاسوب في المنزل؟', questionEn: 'How should a child use a computer at home?',
    optionsAr: ['بإذن الأسرة ولوقت مناسب', 'دون استراحة طوال اليوم', 'لتغيير إعدادات الجهاز دون سؤال'], optionsEn: ['With family permission for a suitable time', 'Without a break all day', 'By changing settings without asking'],
    visualStepsAr: ['نطلب الإذن', 'نختار عملًا مفيدًا', 'نستخدم الجهاز باعتدال', 'نغلقه بعد الانتهاء'],
    visualStepsEn: ['Ask permission', 'Choose a helpful activity', 'Use the device in moderation', 'Close it when finished']
  },
  {
    unit: 2, page: 18, lastPage: 18, titleAr: 'الحاسوب في المدرسة', titleEn: 'The Computer at School',
    focusAr: 'يساعد الحاسوب في المدرسة على عرض الدروس والبحث والتدرب على مهارات جديدة. نتبع تعليمات المعلم، ونتشارك الأجهزة بعناية، ولا نفتح برنامجًا أو ملفًا غير مطلوب.',
    focusEn: 'At school, computers can present lessons, support research, and help practise new skills. Follow the teacher’s instructions, share devices carefully, and do not open an unassigned program or file.',
    questionAr: 'ماذا تفعل قبل استخدام حاسوب المدرسة؟', questionEn: 'What should you do before using a school computer?',
    optionsAr: ['أتبع تعليمات المعلم', 'أفصل الأسلاك', 'أفتح أي ملف أجده'], optionsEn: ['Follow the teacher’s instructions', 'Disconnect the cables', 'Open any file I find'],
    visualStepsAr: ['نستمع للتعليمات', 'نجهز مكان العمل', 'ننجز نشاط الدرس', 'نعيد الجهاز مرتبًا'],
    visualStepsEn: ['Listen to instructions', 'Prepare the workspace', 'Complete the lesson activity', 'Leave the device tidy']
  },
  {
    unit: 2, page: 19, lastPage: 20, titleAr: 'الحاسوب في المستشفى', titleEn: 'The Computer in a Hospital',
    focusAr: 'تستخدم المستشفيات الحاسوب لتنظيم المواعيد وحفظ المعلومات التي يحتاج إليها العاملون ومساعدة الفرق الطبية في أداء مهامها. المعلومات الصحية خاصة، ولا يطلع عليها إلا الأشخاص المخولون.',
    focusEn: 'Hospitals use computers to organize appointments, store information needed by staff, and help medical teams do their work. Health information is private and should be accessed only by authorized people.',
    questionAr: 'من يحق له الاطلاع على المعلومات الصحية الخاصة؟', questionEn: 'Who should be allowed to view private health information?',
    optionsAr: ['الأشخاص المخولون', 'كل زائر', 'أي شخص يطلبها'], optionsEn: ['Authorized people', 'Every visitor', 'Anyone who asks'],
    visualStepsAr: ['يُسجل موعد', 'ينظم الحاسوب البيانات', 'يستخدمها المختصون', 'تبقى المعلومات خاصة'],
    visualStepsEn: ['An appointment is recorded', 'The computer organizes information', 'Professionals use it', 'The information stays private']
  },
  {
    unit: 2, page: 21, lastPage: 23, titleAr: 'الحاسوب في الأعمال المختلفة', titleEn: 'Computers in Different Businesses',
    focusAr: 'تستفيد أعمال كثيرة من الحاسوب في تسجيل الطلبات والحسابات وتنظيم السلع والتواصل. يختلف البرنامج المستخدم حسب العمل، ويساعد العامل على إنجاز المهام ومراجعة البيانات.',
    focusEn: 'Many businesses use computers to record orders and accounts, organize goods, and communicate. The application depends on the work and can help staff complete tasks and review information.',
    questionAr: 'أي عمل يمكن أن ينظمه الحاسوب في متجر؟', questionEn: 'Which task can a computer help organize in a shop?',
    optionsAr: ['تسجيل السلع والمبيعات', 'ري النباتات', 'كنس الأرض بنفسه'], optionsEn: ['Recording goods and sales', 'Watering plants', 'Sweeping the floor by itself'],
    visualStepsAr: ['تُسجل بيانات العمل', 'يرتبها البرنامج', 'يراجع العامل النتيجة', 'تُنجز الخدمة'],
    visualStepsEn: ['Work information is entered', 'An application organizes it', 'A worker checks the result', 'The service is completed']
  },
  {
    unit: 3, page: 25, lastPage: 27, titleAr: 'مفهوم الحاسوب', titleEn: 'What Is a Computer?',
    focusAr: 'الحاسوب جهاز إلكتروني يستقبل البيانات ويعالجها وفق تعليمات، ثم يعرض النتائج أو يحفظها. يحتاج إلى برنامج وتعليمات من المستخدم؛ فهو لا يفهم المطلوب من دون أوامر واضحة.',
    focusEn: 'A computer is an electronic device that receives data, processes it according to instructions, and displays or stores results. It needs software and instructions from a user; it cannot know what to do without clear commands.',
    questionAr: 'ماذا يفعل الحاسوب بالبيانات؟', questionEn: 'What does a computer do with data?',
    optionsAr: ['يعالجها وفق تعليمات', 'يحولها دائمًا إلى طعام', 'يعمل بلا طاقة أو أوامر'], optionsEn: ['Processes it according to instructions', 'Always turns it into food', 'Works without power or instructions'],
    visualStepsAr: ['ندخل بيانات', 'ينفذ الحاسوب تعليمات', 'يعالج البيانات', 'يعرض أو يحفظ نتيجة'],
    visualStepsEn: ['Enter data', 'The computer follows instructions', 'It processes the data', 'It displays or stores a result']
  },
  {
    unit: 3, page: 28, lastPage: 29, titleAr: 'مكونات الحاسوب', titleEn: 'Parts of a Computer',
    focusAr: 'يتكون الحاسوب من أجزاء مادية نراها ونلمسها، مثل الشاشة ولوحة المفاتيح والفأرة، وبرامج غير مادية توجه عمله. تتعاون هذه الأجزاء لاستقبال البيانات ومعالجتها وإظهار النتائج.',
    focusEn: 'A computer has physical parts we can see and touch, such as a screen, keyboard, and mouse, as well as software that directs its work. These parts work together to receive and process data and show results.',
    questionAr: 'أي مما يأتي جزء مادي من الحاسوب؟', questionEn: 'Which of these is a physical part of a computer?',
    optionsAr: ['الشاشة', 'برنامج الرسم', 'نظام التشغيل'], optionsEn: ['The screen', 'A drawing application', 'The operating system'],
    visualStepsAr: ['ندخل البيانات بلوحة المفاتيح', 'تعالجها وحدة الحاسوب', 'تظهر النتيجة على الشاشة', 'نستخدم الفأرة للاختيار'],
    visualStepsEn: ['Enter data with the keyboard', 'The computer unit processes it', 'The result appears on screen', 'Use the mouse to select']
  },
  {
    unit: 3, page: 30, lastPage: 31, titleAr: 'وحدات الإدخال', titleEn: 'Input Devices',
    focusAr: 'تُستخدم وحدات الإدخال لإرسال البيانات أو الأوامر إلى الحاسوب. تكتب لوحة المفاتيح الحروف والأرقام، وتساعد الفأرة على اختيار العناصر وتحريك المؤشر.',
    focusEn: 'Input devices send data or commands to a computer. A keyboard enters letters and numbers, while a mouse helps select items and move the pointer.',
    questionAr: 'أي وحدة نستخدمها لإدخال الحروف؟', questionEn: 'Which device do we use to enter letters?',
    optionsAr: ['لوحة المفاتيح', 'الشاشة', 'السماعة'], optionsEn: ['The keyboard', 'The screen', 'The speaker'],
    visualStepsAr: ['يختار المستخدم معلومة', 'يدخلها بوحدة إدخال', 'يستقبل الحاسوب الأمر', 'تبدأ المعالجة'],
    visualStepsEn: ['The user chooses information', 'Enter it with an input device', 'The computer receives the command', 'Processing begins']
  },
  {
    unit: 3, page: 32, lastPage: 35, titleAr: 'وحدات الإخراج', titleEn: 'Output Devices',
    focusAr: 'تعرض وحدات الإخراج نتائج عمل الحاسوب للمستخدم. تظهر الشاشة النصوص والصور، وتصدر السماعة الصوت، ويمكن للطابعة إنتاج نسخة ورقية عند الحاجة وبإذن المعلم.',
    focusEn: 'Output devices present a computer’s results to the user. A screen displays text and images, a speaker plays sound, and a printer can make a paper copy when needed and with a teacher’s permission.',
    questionAr: 'أي وحدة تعرض النصوص والصور؟', questionEn: 'Which device displays text and images?',
    optionsAr: ['الشاشة', 'الفأرة', 'لوحة المفاتيح'], optionsEn: ['The screen', 'The mouse', 'The keyboard'],
    visualStepsAr: ['يعالج الحاسوب البيانات', 'تجهز نتيجة', 'تعرضها وحدة إخراج', 'يراها المستخدم أو يسمعها'],
    visualStepsEn: ['The computer processes data', 'A result is prepared', 'An output device presents it', 'The user sees or hears it']
  },
  {
    unit: 4, page: 37, lastPage: 39, titleAr: 'كيف أفتح جهاز الحاسوب', titleEn: 'How to Turn On a Computer',
    focusAr: 'نشغل الحاسوب باتباع خطوات المعلم وباستخدام زر التشغيل، ثم ننتظر حتى يجهز نظام التشغيل. لا نلمس الأسلاك أو المقابس، ولا نغلق الجهاز بفصل الكهرباء؛ نستخدم أمر الإغلاق الذي نتعلمه.',
    focusEn: 'Turn on a computer by following the teacher’s steps and using its power button, then wait for the operating system to be ready. Do not touch cables or outlets or shut down by unplugging; use the shutdown command you have learned.',
    questionAr: 'ماذا نفعل بعد الضغط على زر التشغيل؟', questionEn: 'What should we do after pressing the power button?',
    optionsAr: ['ننتظر حتى يجهز الجهاز', 'نفصل سلك الكهرباء', 'نضغط الأزرار عشوائيًا'], optionsEn: ['Wait for the computer to be ready', 'Unplug the power cable', 'Press keys at random'],
    visualStepsAr: ['نتأكد من إذن المعلم', 'نضغط زر التشغيل', 'ننتظر بدء النظام', 'نبدأ العمل المطلوب'],
    visualStepsEn: ['Get the teacher’s permission', 'Press the power button', 'Wait for the system to start', 'Begin the assigned work']
  },
  {
    unit: 4, page: 40, lastPage: 41, titleAr: 'الجلسة الصحيحة', titleEn: 'The Proper Sitting Position',
    focusAr: 'نجلس جلسة مريحة أمام الحاسوب؛ يكون الظهر مستقيمًا والقدمان مستندتين، وتكون الشاشة على مسافة مناسبة. نريح العينين والجسم بين حين وآخر ونخبر بالغًا إذا شعرنا بألم.',
    focusEn: 'Sit comfortably at the computer with a straight back and supported feet, and keep the screen at a suitable distance. Rest your eyes and body from time to time and tell an adult if you feel discomfort.',
    questionAr: 'أي وضعية تساعد على استخدام الحاسوب براحة؟', questionEn: 'Which position helps us use a computer comfortably?',
    optionsAr: ['ظهر مستقيم وقدمان مستندتان', 'انحناء شديد نحو الشاشة', 'الجلوس على طرف المقعد'], optionsEn: ['Straight back and supported feet', 'Leaning very close to the screen', 'Sitting on the edge of the chair'],
    visualStepsAr: ['نضبط المقعد', 'نجلس باستقامة', 'نضع الشاشة على مسافة مناسبة', 'نأخذ استراحة قصيرة'],
    visualStepsEn: ['Adjust the chair', 'Sit upright', 'Keep the screen a suitable distance away', 'Take a short break']
  },
  {
    unit: 5, page: 45, lastPage: 46, titleAr: 'الشبكات', titleEn: 'Computer Networks',
    focusAr: 'الشبكة مجموعة من أجهزة متصلة لتبادل المعلومات أو مشاركة موارد مثل الطابعة. تُستخدم الشبكات في أماكن كثيرة، ويشرف عليها أشخاص مسؤولون عن إبقائها منظمة وآمنة.',
    focusEn: 'A network is a group of connected devices that exchange information or share resources such as a printer. Networks are used in many places and are managed by people responsible for keeping them organized and safe.',
    questionAr: 'ما فائدة ممكنة لشبكة الحاسوب في المدرسة؟', questionEn: 'What is one possible benefit of a computer network at school?',
    optionsAr: ['مشاركة طابعة بين أجهزة مصرح بها', 'تسخين الطعام', 'تشغيل الجهاز دون كهرباء'], optionsEn: ['Sharing a printer between authorized devices', 'Heating food', 'Running a device without electricity'],
    visualStepsAr: ['أجهزة متعددة', 'اتصال منظم بينها', 'تبادل بيانات أو موارد', 'استخدام بإشراف مسؤول'],
    visualStepsEn: ['Several devices', 'An organized connection', 'Share data or resources', 'Use under responsible supervision']
  },
  {
    unit: 5, page: 47, lastPage: 48, titleAr: 'الإنترنت', titleEn: 'The Internet',
    focusAr: 'الإنترنت شبكة واسعة تربط أجهزة وشبكات كثيرة وتتيح الوصول إلى معلومات وخدمات متنوعة. يستخدمه التلميذ بإذن وإشراف شخص بالغ، ولا يشارك اسمه الكامل أو عنوانه أو كلمة مروره.',
    focusEn: 'The internet is a large network connecting many devices and networks and providing access to varied information and services. A student should use it with an adult’s permission and supervision and never share a full name, address, or password.',
    questionAr: 'ما التصرف الآمن عند استخدام الإنترنت؟', questionEn: 'What is a safe action when using the internet?',
    optionsAr: ['أستخدمه بإشراف بالغ ولا أشارك بياناتي', 'أنشر كلمة مروري', 'أتحدث مع الغرباء عن عنواني'], optionsEn: ['Use it with adult supervision and keep personal details private', 'Post my password', 'Tell strangers my address'],
    visualStepsAr: ['نطلب إذن بالغ', 'نفتح خدمة مناسبة', 'نتصفح بحذر', 'نحفظ البيانات الشخصية'],
    visualStepsEn: ['Ask an adult’s permission', 'Open an appropriate service', 'Browse carefully', 'Keep personal information private']
  },
  {
    unit: 5, page: 49, lastPage: 49, titleAr: 'البحث عن المعلومات', titleEn: 'Searching for Information',
    focusAr: 'نبحث عن معلومة بكلمات واضحة ومناسبة، ثم نقارن ما وجدناه ونتحقق منه مع المعلم أو الأسرة. لا نضغط على إعلان أو رابط مجهول، ولا نكتب معلوماتنا الشخصية في مواقع البحث.',
    focusEn: 'Search for information with clear, suitable words, then compare what you find and check it with a teacher or family member. Do not click unknown ads or links, and never enter personal information into search sites.',
    questionAr: 'ما الخطوة الآمنة إذا ظهر رابط غير معروف؟', questionEn: 'What is the safe step if an unfamiliar link appears?',
    optionsAr: ['لا أفتحه وأسأل بالغًا', 'أضغط عليه فورًا', 'أدخل اسمي وعنواني'], optionsEn: ['Do not open it; ask an adult', 'Click it immediately', 'Enter my name and address'],
    visualStepsAr: ['نحدد ما نريد معرفته', 'نكتب كلمات بحث مناسبة', 'نراجع النتائج مع بالغ', 'نختار معلومة موثوقة وآمنة'],
    visualStepsEn: ['Decide what we want to know', 'Enter suitable search words', 'Review results with an adult', 'Choose reliable, safe information']
  },
  {
    unit: 6, page: 50, lastPage: 52, titleAr: 'نظام التشغيل ويندوز', titleEn: 'The Windows Operating System',
    focusAr: 'نظام التشغيل برنامج أساسي يدير عمل الحاسوب ويساعد على تشغيل البرامج. في بيئة ويندوز نتبع توجيهات المعلم للتعرف إلى سطح المكتب، ونستخدم أمر الإغلاق المناسب بدل فصل الطاقة.',
    focusEn: 'An operating system is essential software that manages a computer and helps run applications. In Windows, follow the teacher’s guidance to explore the desktop, and use the proper shutdown command instead of disconnecting power.',
    questionAr: 'ما وظيفة نظام التشغيل؟', questionEn: 'What does an operating system do?',
    optionsAr: ['يدير عمل الحاسوب', 'يطبع الورق وحده', 'يستبدل جميع أجزاء الجهاز'], optionsEn: ['Manages the computer’s work', 'Prints paper by itself', 'Replaces every device part'],
    visualStepsAr: ['نشغل الحاسوب بإذن', 'يبدأ نظام التشغيل', 'نرى سطح المكتب', 'نفتح البرنامج المطلوب'],
    visualStepsEn: ['Turn on the computer with permission', 'The operating system starts', 'The desktop appears', 'Open the assigned application']
  },
  {
    unit: 6, page: 53, lastPage: 53, titleAr: 'الفأرة', titleEn: 'The Mouse',
    focusAr: 'تحرك الفأرة المؤشر على الشاشة، ويُستخدم الزر لاختيار عنصر أو فتحه وفق تعليمات المعلم. نمسكها بلطف ونحركها على سطح مستوٍ، ولا نضغط بقوة أو نستخدمها لإزعاج الآخرين.',
    focusEn: 'A mouse moves the pointer on the screen, and its buttons select or open items as directed by the teacher. Hold it gently and move it on a flat surface; do not press hard or use it to disturb others.',
    questionAr: 'ماذا يحدث عند تحريك الفأرة؟', questionEn: 'What happens when you move the mouse?',
    optionsAr: ['يتحرك المؤشر على الشاشة', 'تكتب الفأرة فقرة', 'تطفئ الشاشة دائمًا'], optionsEn: ['The pointer moves on the screen', 'The mouse types a paragraph', 'The screen always turns off'],
    visualStepsAr: ['نضع الفأرة على سطح مستوٍ', 'نحركها بلطف', 'نتابع المؤشر', 'نختار العنصر المطلوب'],
    visualStepsEn: ['Place the mouse on a flat surface', 'Move it gently', 'Follow the pointer', 'Select the required item']
  },
  {
    unit: 6, page: 54, lastPage: 57, titleAr: 'لوحة المفاتيح', titleEn: 'The Keyboard',
    focusAr: 'تحتوي لوحة المفاتيح على مفاتيح للحروف والأرقام والمسافة وبعض الأوامر. نستخدمها لكتابة نص قصير، ونراجع ما كتبناه، ونحافظ على نظافة المفاتيح ونضغط عليها برفق.',
    focusEn: 'A keyboard has keys for letters, numbers, spaces, and commands. Use it to type a short text, review what you wrote, keep the keys clean, and press them gently.',
    questionAr: 'أي مفتاح يضيف فراغًا بين الكلمات؟', questionEn: 'Which key adds a space between words?',
    optionsAr: ['مفتاح المسافة', 'مفتاح التشغيل', 'زر الفأرة'], optionsEn: ['The space bar', 'The power button', 'The mouse button'],
    visualStepsAr: ['نحدد موضع الأصابع', 'نضغط المفاتيح برفق', 'نكتب الحروف والمسافات', 'نراجع النص'],
    visualStepsEn: ['Position your fingers', 'Press keys gently', 'Type letters and spaces', 'Review the text']
  },
  {
    unit: 6, page: 58, lastPage: 59, titleAr: 'برنامج المفكرة (Notepad)', titleEn: 'Notepad',
    focusAr: 'المفكرة برنامج بسيط لكتابة نص عادي. نفتحها وفق خطوات المعلم، ونكتب كلمات أو جملًا قصيرة، ثم نراجعها. لا نحفظ عملًا على جهاز مشترك إلا في المكان الذي يحدده المعلم.',
    focusEn: 'Notepad is a simple application for writing plain text. Open it using the teacher’s steps, type short words or sentences, and review them. On a shared computer, save work only in the place specified by the teacher.',
    questionAr: 'ما الاستخدام المناسب لبرنامج المفكرة؟', questionEn: 'What is a suitable use for Notepad?',
    optionsAr: ['كتابة نص قصير', 'تنظيف لوحة المفاتيح بالماء', 'تغيير أسلاك الحاسوب'], optionsEn: ['Writing a short text', 'Cleaning a keyboard with water', 'Changing computer cables'],
    visualStepsAr: ['نفتح المفكرة بإرشاد المعلم', 'نكتب نصًا قصيرًا', 'نراجع الكلمات', 'نحفظ العمل بإذن'],
    visualStepsEn: ['Open Notepad with teacher guidance', 'Type a short text', 'Review the words', 'Save work with permission']
  },
  {
    unit: 6, page: 60, lastPage: 61, titleAr: 'أساسيات الطباعة البسيطة', titleEn: 'Basic Typing Skills',
    focusAr: 'تتحسن الطباعة بالتدرب الهادئ على وضع اليدين والنظر إلى النص ومراجعة الأخطاء. نكتب ببطء في البداية، ونضغط المفاتيح برفق، ونأخذ استراحة قصيرة عند التعب.',
    focusEn: 'Typing improves with calm practice: position your hands, look at the text, and review mistakes. Start slowly, press keys gently, and take a short break when tired.',
    questionAr: 'كيف نتدرب على الطباعة بطريقة مريحة؟', questionEn: 'How can we practise typing comfortably?',
    optionsAr: ['نكتب بهدوء ونراجع النص', 'نضغط المفاتيح بعنف', 'نتجاهل التعب ونواصل بلا توقف'], optionsEn: ['Type calmly and review the text', 'Strike the keys forcefully', 'Ignore tiredness and continue without a break'],
    visualStepsAr: ['نجلس جلسة مريحة', 'نضع اليدين قرب المفاتيح', 'نكتب ببطء ودقة', 'نراجع ونستريح'],
    visualStepsEn: ['Sit comfortably', 'Place hands near the keys', 'Type slowly and carefully', 'Review and rest']
  }
];

export const SUDAN_PRIMARY_ICT_G4_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ICT_G4_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-ict-g4-${order}`;
  const unit = SUDAN_PRIMARY_ICT_G4_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));
  const pageRangeEn = lesson.lastPage === lesson.page ? `p. ${lesson.page}` : `pp. ${lesson.page}–${lesson.lastPage}`;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `تكنولوجيا المعلومات والاتصالات — الصف الرابع الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 4 Information and Communication Technology — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان — تكنولوجيا المعلومات والاتصالات — الصف الرابع الابتدائي',
    gradeLevelNameEn: 'Republic of Sudan — Grade 4 Primary Information and Communication Technology',
    ministryAr: 'وزارة التربية والتعليم',
    ministryEn: 'Ministry of Education',
    termAr: 'تكنولوجيا المعلومات والاتصالات — الصف الرابع',
    termEn: 'Grade 4 Information and Communication Technology',
    unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
    unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `أين ترى مثالًا على «${lesson.titleAr}» في حياتك اليومية؟ تحدث عنه مع معلمك أو أسرتك.`,
    warmupHookEn: `Where might you see an example of “${lesson.titleEn}” in everyday life? Discuss it with your teacher or family.`,
    learningOutcomesAr: [lesson.focusAr, `يجيب عن سؤال يوضح فهمه لموضوع «${lesson.titleAr}».`],
    learningOutcomesEn: [lesson.focusEn, `Answer a question to show understanding of “${lesson.titleEn}.”`],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nتأمل الخطوات الأربع، ثم اشرح الفكرة بكلماتك وطبّقها بأمان وبإرشاد معلمك أو أسرتك.`,
      contentEn: `${lesson.focusEn}\n\nReview the four steps, then explain the idea in your own words and practise safely with guidance from your teacher or family.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `مخطط: ${lesson.titleAr}`,
        titleEn: `Diagram: ${lesson.titleEn}`,
        captionAr: `أربع خطوات بصرية لتوضيح «${lesson.titleAr}».`,
        captionEn: `Four visual steps explaining “${lesson.titleEn}.”`,
        diagramType: 'primary_lesson_sequence',
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
