import type { Lecture, Question } from '../types';

type Lesson = {
  titleAr: string;
  titleEn: string;
  page: number;
  focusAr: string;
  focusEn: string;
};

type Unit = {
  id: string;
  titleAr: string;
  titleEn: string;
  partAr: string;
  partEn: string;
  page: number;
  outcomesAr: string[];
  outcomesEn: string[];
  lessons: Lesson[];
  question: Question;
};

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-ME-K07-SM1-mcomp.pdf';

const units: Unit[] = [
  {
    id: 'sa-ds7-unit-1',
    titleAr: 'تعلم الأساسيات',
    titleEn: 'Learn the Basics',
    partAr: 'الجزء الأول',
    partEn: 'Part One',
    page: 12,
    outcomesAr: [
      'التعرف على أنواع الحاسب ومكوناته الرئيسة والأجهزة الطرفية ووسائط التخزين.',
      'فهم دور نظام التشغيل واستخدامه في إدارة الملفات والمجلدات.',
      'تطبيق إعدادات أساسية لسطح المكتب ونظام التشغيل.'
    ],
    outcomesEn: [
      'Identify computer types, main components, peripherals, and storage media.',
      'Understand the operating system and use it to manage files and folders.',
      'Apply basic desktop and operating-system settings.'
    ],
    lessons: [
      { titleAr: 'أجهزة الحاسب', titleEn: 'Computer Devices', page: 14, focusAr: 'التعرف على أنواع أجهزة الحاسب ومكوناتها وأجهزتها الطرفية ووسائط التخزين.', focusEn: 'Explore computer types, their components, peripherals, and storage media.' },
      { titleAr: 'نظام التشغيل', titleEn: 'The Operating System', page: 24, focusAr: 'فهم وظيفة نظام التشغيل والتعامل مع الملفات والمجلدات وتنظيمها.', focusEn: 'Understand operating-system functions and organize files and folders.' },
      { titleAr: 'إعدادات نظام التشغيل الأساسية', titleEn: 'Basic Operating-System Settings', page: 41, focusAr: 'تطبيق إعدادات أساسية على النظام وسطح المكتب بما يلائم حاجة المستخدم.', focusEn: 'Apply basic operating-system and desktop settings for the user’s needs.' }
    ],
    question: {
      id: 'sa-ds7-q1', textAr: 'ما الدور الرئيس لنظام التشغيل؟', textEn: 'What is the main role of an operating system?',
      optionsAr: ['إدارة موارد الحاسب وتوفير واجهة للتعامل معه', 'إنشاء اتصال بالإنترنت فقط', 'تصميم الصور فقط', 'استبدال وحدات التخزين'],
      optionsEn: ['Manage computer resources and provide an interface', 'Only connect to the internet', 'Only edit images', 'Replace storage devices'],
      correctIndex: 0, conceptTestedAr: 'وظيفة نظام التشغيل', conceptTestedEn: 'Operating-system role',
      explanationAr: 'ينظم نظام التشغيل موارد الحاسب ويتيح للمستخدم تشغيل البرامج وإدارة الملفات.', explanationEn: 'The operating system manages computer resources and lets users run software and manage files.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds7-unit-2',
    titleAr: 'معالجة النصوص المتقدمة',
    titleEn: 'Advanced Word Processing',
    partAr: 'الجزء الأول',
    partEn: 'Part One',
    page: 58,
    outcomesAr: [
      'تطبيق تنسيقات متقدمة للنصوص والفقرات وإدراج الصور.',
      'استخدام دمج المراسلات لإعداد مراسلات وأظرف مخصصة لمستلمين متعددين.'
    ],
    outcomesEn: [
      'Apply advanced text and paragraph formatting and insert images.',
      'Use mail merge to prepare personalized correspondence and envelopes for multiple recipients.'
    ],
    lessons: [
      { titleAr: 'التنسيق المتقدم', titleEn: 'Advanced Formatting', page: 60, focusAr: 'تنسيق النصوص والفقرات وإضافة الصور عبر الإنترنت إلى المستند.', focusEn: 'Format text and paragraphs and add online images to a document.' },
      { titleAr: 'دمج المراسلات', titleEn: 'Mail Merge', page: 68, focusAr: 'إعداد مستند رئيس ومصدر بيانات لدمج معلومات المستلمين في مراسلات مخصصة.', focusEn: 'Prepare a main document and data source to personalize correspondence.' },
      { titleAr: 'إتمام عملية الدمج', titleEn: 'Completing the Merge', page: 78, focusAr: 'مراجعة نتائج الدمج وإتمام المستندات والملصقات أو الأظرف للمستلمين.', focusEn: 'Review merge results and complete personalized documents or envelopes.' }
    ],
    question: {
      id: 'sa-ds7-q2', textAr: 'متى يكون دمج المراسلات مفيدًا؟', textEn: 'When is mail merge useful?',
      optionsAr: ['عند إنشاء نسخ مخصصة كثيرة من مستند باستخدام قائمة بيانات', 'عند تغيير خلفية سطح المكتب', 'عند ضغط ملف فيديو', 'عند إعادة تشغيل الحاسب'],
      optionsEn: ['When producing many personalized documents from a data list', 'When changing the desktop background', 'When compressing a video', 'When restarting a computer'],
      correctIndex: 0, conceptTestedAr: 'استخدام دمج المراسلات', conceptTestedEn: 'Purpose of mail merge',
      explanationAr: 'يربط دمج المراسلات مستندًا بمصدر بيانات لإنتاج نسخ تتغير فيها بيانات المستلمين.', explanationEn: 'Mail merge combines a document with a data source to create recipient-specific copies.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds7-unit-3',
    titleAr: 'التنسيق المتقدم والدوال',
    titleEn: 'Advanced Formatting and Functions',
    partAr: 'الجزء الأول',
    partEn: 'Part One',
    page: 92,
    outcomesAr: [
      'تنسيق بيانات جدول البيانات وإدراج الصور والرموز وتنسيقها.',
      'استخدام دوال التاريخ والوقت والدوال النصية والرقمية المتقدمة.'
    ],
    outcomesEn: [
      'Format spreadsheet data and insert and format images and icons.',
      'Use date/time and advanced text and numeric functions.'
    ],
    lessons: [
      { titleAr: 'التنسيق المتقدم', titleEn: 'Advanced Formatting', page: 94, focusAr: 'تنسيق بيانات جداول البيانات وتحسين عرضها وإضافة الصور والرموز.', focusEn: 'Format spreadsheet data and improve its presentation with images and icons.' },
      { titleAr: 'الدوال المتقدمة', titleEn: 'Advanced Functions', page: 104, focusAr: 'اختيار دوال مناسبة للتعامل مع التاريخ والوقت والنصوص والقيم الرقمية.', focusEn: 'Choose suitable functions for dates, times, text, and numeric values.' }
    ],
    question: {
      id: 'sa-ds7-q3', textAr: 'أي نوع من الدوال يساعد على إجراء عملية حسابية على قيم جدول البيانات؟', textEn: 'Which type of function helps perform a calculation on spreadsheet values?',
      optionsAr: ['دالة رقمية', 'تأثير انتقال للشرائح', 'إعداد طابعة', 'تنسيق بريد إلكتروني'],
      optionsEn: ['A numeric function', 'A slide transition', 'A printer setting', 'Email formatting'],
      correctIndex: 0, conceptTestedAr: 'الدوال في جداول البيانات', conceptTestedEn: 'Spreadsheet functions',
      explanationAr: 'تُستخدم الدوال الرقمية لمعالجة القيم وإجراء العمليات الحسابية في جدول البيانات.', explanationEn: 'Numeric functions process values and perform calculations in a spreadsheet.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds7-unit-4',
    titleAr: 'البرمجة مع بايثون',
    titleEn: 'Programming with Python',
    partAr: 'الجزء الأول',
    partEn: 'Part One',
    page: 120,
    outcomesAr: [
      'تحليل المشكلات إلى خطوات واستخدام الخوارزميات والمخططات.',
      'استخدام المتغيرات والثوابت وإدخال البيانات وأنواعها والمعاملات في بايثون.',
      'إنشاء رسومات برمجية بسيطة.'
    ],
    outcomesEn: [
      'Break problems into steps and use algorithms and flowcharts.',
      'Use Python variables, constants, input, data types, and operators.',
      'Create simple programmatic drawings.'
    ],
    lessons: [
      { titleAr: 'ما البرنامج', titleEn: 'What Is a Program?', page: 121, focusAr: 'فهم البرنامج بوصفه تعليمات مرتبة، والتخطيط للحل باستخدام الخوارزميات والمخططات.', focusEn: 'Understand a program as ordered instructions and plan solutions with algorithms and flowcharts.' },
      { titleAr: 'المتغيرات والثوابت', titleEn: 'Variables and Constants', page: 130, focusAr: 'استخدام المتغيرات والثوابت لتسمية القيم التي يحتاجها البرنامج.', focusEn: 'Use variables and constants to name values used by a program.' },
      { titleAr: 'إدخال البيانات', titleEn: 'Entering Data', page: 140, focusAr: 'استقبال البيانات من المستخدم والتعامل مع أنواع البيانات في برنامج بسيط.', focusEn: 'Receive user input and work with data types in a simple program.' },
      { titleAr: 'المعاملات في بايثون', titleEn: 'Operators in Python', page: 146, focusAr: 'اختيار المعاملات المناسبة لتنفيذ عمليات على القيم والتعبيرات.', focusEn: 'Choose appropriate operators to work with values and expressions.' },
      { titleAr: 'الرسم باستخدام البرمجة', titleEn: 'Drawing with Programming', page: 152, focusAr: 'استخدام أوامر برمجية لإنشاء رسومات بسيطة والتحكم في خطوات الرسم.', focusEn: 'Use program instructions to create simple drawings and control drawing steps.' }
    ],
    question: {
      id: 'sa-ds7-q4', textAr: 'ما الاستخدام الشائع للمتغير في البرنامج؟', textEn: 'What is a common use of a variable in a program?',
      optionsAr: ['الاحتفاظ بقيمة يمكن للبرنامج استخدامها', 'تنسيق رسالة بريدية', 'توصيل جهاز عرض', 'حفظ إعدادات الطابعة فقط'],
      optionsEn: ['Store a value for the program to use', 'Format an email', 'Connect a projector', 'Only save printer settings'],
      correctIndex: 0, conceptTestedAr: 'المتغيرات', conceptTestedEn: 'Variables',
      explanationAr: 'يُستخدم المتغير لتسمية قيمة والاحتفاظ بها أثناء تنفيذ البرنامج.', explanationEn: 'A variable names and stores a value while a program runs.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds7-unit-5',
    titleAr: 'الاتصال بالإنترنت',
    titleEn: 'Communicating Online',
    partAr: 'الجزء الثاني',
    partEn: 'Part Two',
    page: 180,
    outcomesAr: [
      'استخدام الإنترنت للبحث عن المعلومات.',
      'إرسال البريد الإلكتروني واستقباله وتنظيمه.',
      'اتباع قواعد الاستخدام الآمن للإنترنت والبريد الإلكتروني.'
    ],
    outcomesEn: [
      'Use the internet to find information.',
      'Send, receive, and organize email.',
      'Follow safe-use practices for the internet and email.'
    ],
    lessons: [
      { titleAr: 'شبكة الإنترنت', titleEn: 'The Internet', page: 182, focusAr: 'استخدام الإنترنت للوصول إلى المعلومات والتعرف على أساليب البحث المناسبة.', focusEn: 'Use the internet to access information and apply suitable search approaches.' },
      { titleAr: 'إرسال واستقبال رسائل البريد الإلكتروني', titleEn: 'Sending and Receiving Email', page: 194, focusAr: 'كتابة رسالة بريد إلكتروني وإرسالها واستقبالها وفق الغرض والمستلم.', focusEn: 'Compose, send, and receive email appropriate to its purpose and recipient.' },
      { titleAr: 'تنظيم البريد الإلكتروني', titleEn: 'Organizing Email', page: 208, focusAr: 'تنظيم الرسائل باستخدام أدوات البريد الإلكتروني المتاحة.', focusEn: 'Organize messages with available email tools.' },
      { titleAr: 'الاستخدام الآمن للإنترنت', titleEn: 'Safe Internet Use', page: 218, focusAr: 'التعرف على المخاطر الشائعة وحماية الخصوصية والتصرف الآمن عند تلقي رسائل أو روابط مشبوهة.', focusEn: 'Recognize common risks, protect privacy, and respond safely to suspicious messages or links.' }
    ],
    question: {
      id: 'sa-ds7-q5', textAr: 'كيف تتصرف عند وصول رسالة أو رابط غير متوقع يطلب معلوماتك الشخصية؟', textEn: 'What should you do with an unexpected message or link asking for personal information?',
      optionsAr: ['لا تشارك المعلومات، وتحقق من المصدر وأخبر شخصًا موثوقًا عند الحاجة', 'أرسل كلمة المرور فورًا', 'أعد توجيه الرابط للجميع', 'عطّل إعدادات الأمان'],
      optionsEn: ['Do not share information; verify the source and ask a trusted adult if needed', 'Send your password immediately', 'Forward the link to everyone', 'Disable security settings'],
      correctIndex: 0, conceptTestedAr: 'الاستخدام الآمن للإنترنت', conceptTestedEn: 'Safe internet use',
      explanationAr: 'الحذر من الروابط والطلبات غير المتوقعة يحمي الخصوصية والحسابات.', explanationEn: 'Caution with unexpected links and requests helps protect privacy and accounts.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds7-unit-6',
    titleAr: 'الدوال المنطقية والمخططات',
    titleEn: 'Logical Functions and Charts',
    partAr: 'الجزء الثاني',
    partEn: 'Part Two',
    page: 232,
    outcomesAr: [
      'استخدام الدالة IF لتنفيذ عمليات تعتمد على شرط.',
      'إدراج المخططات الخطية والدائرية وتنسيقها.'
    ],
    outcomesEn: [
      'Use the IF function for conditional tasks.',
      'Insert and format line and pie charts.'
    ],
    lessons: [
      { titleAr: 'الدوال المنطقية', titleEn: 'Logical Functions', page: 235, focusAr: 'استخدام الدالة IF لاختيار نتيجة تعتمد على تحقق شرط.', focusEn: 'Use the IF function to return a result based on whether a condition is met.' },
      { titleAr: 'تنسيق المخططات', titleEn: 'Formatting Charts', page: 245, focusAr: 'اختيار مخطط خطي أو دائري مناسب ثم تنسيقه لعرض البيانات بوضوح.', focusEn: 'Choose a suitable line or pie chart and format it to communicate data clearly.' }
    ],
    question: {
      id: 'sa-ds7-q6', textAr: 'ما الذي تتيحه الدالة IF في جدول البيانات؟', textEn: 'What does the IF function allow in a spreadsheet?',
      optionsAr: ['إرجاع نتيجة بناءً على تحقق شرط', 'إرسال بريد إلكتروني تلقائيًا', 'تغيير نوع جهاز الحاسب', 'رسم صورة دون بيانات'],
      optionsEn: ['Return a result depending on a condition', 'Automatically send email', 'Change the computer type', 'Draw an image without data'],
      correctIndex: 0, conceptTestedAr: 'الدوال المنطقية', conceptTestedEn: 'Logical functions',
      explanationAr: 'تختبر IF شرطًا وتختار نتيجة عند تحققه وأخرى عند عدم تحققه.', explanationEn: 'IF tests a condition and selects a result depending on whether it is true.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds7-unit-7',
    titleAr: 'عرض الأفكار من خلال العرض التقديمي',
    titleEn: 'Presenting Ideas',
    partAr: 'الجزء الثاني',
    partEn: 'Part Two',
    page: 256,
    outcomesAr: [
      'إنشاء عروض تقديمية باستخدام تخطيطات الشرائح والنصوص والصور.',
      'استخدام تأثيرات الوسائط المتعددة والحركة والصوت.',
      'إضافة المخططات البيانية وتحسين طريقة عرض الأفكار.'
    ],
    outcomesEn: [
      'Create presentations with slide layouts, text, and images.',
      'Use multimedia, animation, and audio effects.',
      'Add charts and improve how ideas are presented.'
    ],
    lessons: [
      { titleAr: 'الشرائح والنصوص والصور', titleEn: 'Slides, Text, and Images', page: 259, focusAr: 'إنشاء شرائح منظمة وإضافة النصوص والصور بما يخدم الفكرة المعروضة.', focusEn: 'Create organized slides and use text and images to support the message.' },
      { titleAr: 'تأثيرات الوسائط المتعددة المتقدمة', titleEn: 'Advanced Multimedia Effects', page: 271, focusAr: 'إضافة تأثيرات الحركة والوسائط المتعددة والصوت بصورة مناسبة للعرض.', focusEn: 'Use animation, multimedia, and audio effects appropriately in a presentation.' },
      { titleAr: 'المخططات البيانية ونصائح لعرض متميز', titleEn: 'Charts and Tips for an Effective Presentation', page: 284, focusAr: 'عرض البيانات بمخطط مناسب وتنظيم العرض ليكون واضحًا ومتميزًا.', focusEn: 'Present data with an appropriate chart and organize slides for clarity.' }
    ],
    question: {
      id: 'sa-ds7-q7', textAr: 'ما المبدأ الأفضل عند إضافة الحركة والصوت إلى عرض تقديمي؟', textEn: 'What is the best principle when adding animation and audio to a presentation?',
      optionsAr: ['استخدامهما لدعم الفكرة دون تشتيت الجمهور', 'إضافتهما إلى كل عنصر دائمًا', 'استخدام صوت أعلى من الكلام', 'إخفاء عنوان العرض'],
      optionsEn: ['Use them to support the message without distracting the audience', 'Add them to every object by default', 'Make audio louder than speech', 'Hide the presentation title'],
      correctIndex: 0, conceptTestedAr: 'تصميم العرض التقديمي', conceptTestedEn: 'Presentation design',
      explanationAr: 'تخدم التأثيرات الفكرة عندما تستخدم باعتدال ووضوح.', explanationEn: 'Effects support a message when used purposefully and clearly.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds7-unit-8',
    titleAr: 'برمجة الروبوت الافتراضي',
    titleEn: 'Programming the Virtual Robot',
    partAr: 'الجزء الثاني',
    partEn: 'Part Two',
    page: 302,
    outcomesAr: [
      'استخدام بيئة VEXcode VR والتعرف على أدوات الروبوت الافتراضي وحساساته.',
      'توظيف الإحداثيات والأوامر البرمجية للتحكم في حركة الروبوت والرسم.',
      'استخدام منطق القرار والتحكم في حركة الروبوت.'
    ],
    outcomesEn: [
      'Use VEXcode VR and explore the virtual robot’s tools and sensors.',
      'Use coordinates and program instructions to control robot movement and drawing.',
      'Apply decision logic to robot behavior.'
    ],
    lessons: [
      { titleAr: 'الروبوتات الافتراضية', titleEn: 'Virtual Robots', page: 303, focusAr: 'التعرف على بيئة الروبوت الافتراضي وأدوات التحكم والحساسات.', focusEn: 'Explore the virtual-robot environment, controls, and sensors.' },
      { titleAr: 'الإحداثيات في البرمجة', titleEn: 'Coordinates in Programming', page: 319, focusAr: 'استخدام الإحداثيات لتحديد موقع الروبوت وتخطيط حركته أو مساره.', focusEn: 'Use coordinates to locate the robot and plan its movement or path.' },
      { titleAr: 'الحركة التلقائية', titleEn: 'Automated Movement', page: 332, focusAr: 'برمجة حركة الروبوت اعتمادًا على الأوامر وأدوات التحكم والمنطق الشرطي.', focusEn: 'Program robot movement with instructions, controls, and conditional logic.' }
    ],
    question: {
      id: 'sa-ds7-q8', textAr: 'ما فائدة استخدام الإحداثيات عند برمجة روبوت افتراضي؟', textEn: 'Why use coordinates when programming a virtual robot?',
      optionsAr: ['تحديد موقعه وتخطيط الحركة على ساحة العمل', 'تنسيق رسالة بريد إلكتروني', 'ضغط ملف صورة', 'تغيير لغة لوحة المفاتيح'],
      optionsEn: ['Locate it and plan movement in the work area', 'Format an email', 'Compress an image', 'Change the keyboard language'],
      correctIndex: 0, conceptTestedAr: 'الإحداثيات في برمجة الروبوت', conceptTestedEn: 'Coordinates in robot programming',
      explanationAr: 'تساعد الإحداثيات على تحديد المواقع وتوجيه الروبوت في ساحة العمل.', explanationEn: 'Coordinates identify positions and guide a robot around its workspace.',
      difficulty: 'easy'
    }
  }
];

function createLecture(unit: Unit, order: number): Lecture {
  const lectureId = unit.id;
  return {
    id: lectureId,
    order,
    titleAr: `الوحدة ${order}: ${unit.titleAr}`,
    titleEn: `Unit ${order}: ${unit.titleEn}`,
    subtitleAr: `${unit.lessons.length} دروس من كتاب المهارات الرقمية للصف الأول المتوسط`,
    subtitleEn: `${unit.lessons.length} lessons from the Grade 7 Digital Skills textbook`,
    descriptionAr: `خريطة تعليمية أصلية مبنية على عناوين الدروس وأهداف الوحدة المنشورة في الكتاب الرسمي (أهداف الوحدة ص. ${unit.page})؛ الشرح والأنشطة من إعداد المنصة وليست نص الكتاب. المصدر: ${textbookUrl}`,
    descriptionEn: `An original learning guide based on official textbook lesson titles and unit objectives (unit outcomes p. ${unit.page}); explanations and activities are platform-authored, not textbook text. Source: ${textbookUrl}`,
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G7',
    educationType: 'PUBLIC',
    ministryAr: 'وزارة التعليم بالمملكة العربية السعودية',
    ministryEn: 'Ministry of Education, Saudi Arabia',
    gradeLevelNameAr: 'الصف الأول المتوسط',
    gradeLevelNameEn: 'First Intermediate (Grade 7)',
    termAr: unit.partAr,
    termEn: unit.partEn,
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `دروس الوحدة ${order}`,
    lessonNumberEn: `Unit ${order} lessons`,
    warmupHookAr: `تتناول هذه الوحدة ${unit.titleAr} من خلال المهارات المحددة في كتاب المهارات الرقمية للصف الأول المتوسط.`,
    warmupHookEn: `This unit explores ${unit.titleEn.toLowerCase()} through the skills listed in the Grade 7 Digital Skills textbook.`,
    learningOutcomesAr: unit.outcomesAr,
    learningOutcomesEn: unit.outcomesEn,
    keyConceptsAr: unit.lessons.map((lesson) => lesson.titleAr),
    keyConceptsEn: unit.lessons.map((lesson) => lesson.titleEn),
    summaryAr: `تضم هذه الوحدة ${unit.lessons.length} دروس. الأهداف المعروضة هنا أهداف الوحدة كما لُخصت من الكتاب، وليست أهدافًا منفصلة منسوبة لكل درس.`,
    summaryEn: `This unit contains ${unit.lessons.length} lessons. The outcomes shown are unit-level summaries, not separately stated objectives for each lesson.`,
    sections: unit.lessons.map((lesson) => ({
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص. ${lesson.page}. هذا شرح أصلي موجز للمنصة مبني على عنوان الدرس وأهداف الوحدة، وليس نقلًا لنص الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.page}. This is a brief original platform explanation based on the lesson title and unit objectives, not reproduced textbook text.`,
    })),
    assessment: {
      id: `${lectureId}-assessment`,
      lectureId,
      titleAr: `تقويم الوحدة ${order}: ${unit.titleAr}`,
      titleEn: `Unit ${order} Assessment: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question]
    }
  };
}

// Lesson titles, unit names, and printed page references were checked against
// the MOE-copyrighted 1448–2026 book (contents pp. 7–10, 177–179).
export const SAUDI_G7_DIGITAL_SKILLS_LECTURES: Lecture[] = units.map(createLecture);
SAUDI_G7_DIGITAL_SKILLS_LECTURES[7].sections?.push({
  titleAr: 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)',
  titleEn: 'Artificial Intelligence Section (Enrichment; not a numbered lesson)',
  contentAr: 'يعرض الكتاب موضوعات الذكاء الاصطناعي والذكاء الاصطناعي التوليدي، والإنصاف والخصوصية وحقوق النشر، وكتابة الموجهات. هذا قسم إثرائي إضافي وليس واحدًا من الدروس الخمسة والعشرين المرقمة.',
  contentEn: 'The book includes artificial intelligence and generative AI, fairness, privacy, copyright, and prompt writing. This is an additional enrichment section, not one of the 25 numbered lessons.'
});
export const SAUDI_G7_DIGITAL_SKILLS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G7_DIGITAL_SKILLS_LESSON_COUNT = units.reduce((count, unit) => count + unit.lessons.length, 0);
