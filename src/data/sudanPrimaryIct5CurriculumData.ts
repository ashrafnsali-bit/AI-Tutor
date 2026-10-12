import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_ICT_G5_BOOK = {
  title: 'تكنولوجيا المعلومات والاتصالات — الصف الخامس الابتدائي',
  titleEn: 'Information and Communication Technology — Grade 5 Primary',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'معالجة وتخزين البيانات في الحاسوب', titleEn: 'Processing and Storing Data in a Computer', firstPage: 1, lastPage: 8 },
    { titleAr: 'نظام ويندوز لتشغيل الحاسوب', titleEn: 'Windows Operating System', firstPage: 9, lastPage: 23 },
    { titleAr: 'البرامج المساعدة', titleEn: 'Utility Programs', firstPage: 24, lastPage: 35 },
    { titleAr: 'البرامج التطبيقية (MS Word)', titleEn: 'Application Software (MS Word)', firstPage: 36, lastPage: 50 }
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
    unit: 1, page: 2, lastPage: 3, titleAr: 'العمليات الأساسية للحاسوب', titleEn: 'The Computer’s Basic Operations',
    focusAr: 'يتعامل الحاسوب مع البيانات عبر دورة مترابطة: إدخالها، ومعالجتها، وإظهار النتائج، ثم حفظها. فالدرجات مثلاً تصبح نتيجة مفهومة بعد ترتيبها ومعالجتها.',
    focusEn: 'A computer handles data through a connected cycle: input, processing, output, and storage. For example, marks become a useful result after they are organized and processed.',
    questionAr: 'ما الذي يأتي عادة بعد معالجة البيانات ليتمكن المستخدم من الاستفادة منها؟', questionEn: 'What usually follows data processing so a user can make use of the result?',
    optionsAr: ['إخراج المعلومات', 'حذف لوحة المفاتيح', 'إيقاف الشاشة'], optionsEn: ['Outputting information', 'Removing the keyboard', 'Turning off the screen'],
    visualStepsAr: ['ندخل بيانات مناسبة', 'يعالجها الحاسوب', 'تظهر معلومات مفيدة', 'نحفظ ما نحتاجه'],
    visualStepsEn: ['Enter useful data', 'The computer processes it', 'Useful information appears', 'Store what is needed']
  },
  {
    unit: 1, page: 4, lastPage: 5, titleAr: 'وحدة المعالجة المركزية', titleEn: 'The Central Processing Unit',
    focusAr: 'تفسر وحدة المعالجة المركزية التعليمات وتنسق عمل الحاسوب. وتشارك وحدة الحساب والمنطق في العمليات، وتوجه وحدة التحكم تنفيذها، بينما تحتفظ الذاكرة الرئيسية بالتعليمات والبيانات. تحفظ RAM البيانات مؤقتًا، أما ROM فتحتفظ بمحتواها عند انقطاع الكهرباء.',
    focusEn: 'The central processing unit interprets instructions and coordinates computer work. The arithmetic-logic unit handles calculations and logic, the control unit directs operations, and main memory holds instructions and data. RAM keeps data temporarily; ROM retains its contents when power is off.',
    questionAr: 'أي جزء يوجه تنفيذ العمليات داخل الحاسوب؟', questionEn: 'Which part directs operations inside the computer?',
    optionsAr: ['وحدة التحكم', 'سماعة الرأس', 'الطابعة'], optionsEn: ['The control unit', 'Headphones', 'The printer'],
    visualStepsAr: ['تصل التعليمات', 'تفسرها وحدة المعالجة', 'توجه وحدة التحكم العمل', 'تنتج النتيجة المطلوبة'],
    visualStepsEn: ['Instructions arrive', 'The processor interprets them', 'The control unit directs the work', 'The requested result is produced']
  },
  {
    unit: 1, page: 6, lastPage: 8, titleAr: 'وحدات التخزين في الحاسوب', titleEn: 'Computer Storage Devices',
    focusAr: 'تحتفظ وحدات التخزين بالملفات ليستطيع المستخدم الرجوع إليها. من أمثلتها القرص الصلب والأقراص المضغوطة وذاكرة الفلاش؛ وتختلف في السعة وطريقة الحمل، لذا نختار الوسيط الملائم بعناية.',
    focusEn: 'Storage devices keep files so a user can return to them. Examples include hard drives, CDs, and flash drives; they differ in capacity and portability, so choose a suitable device carefully.',
    questionAr: 'أي وسيط صغير يسهل حمله وتوصيله بمنفذ USB؟', questionEn: 'Which small storage device is easy to carry and connect to a USB port?',
    optionsAr: ['ذاكرة فلاش', 'شاشة العرض', 'الفأرة'], optionsEn: ['A flash drive', 'A display screen', 'A mouse'],
    visualStepsAr: ['نحدد الملفات المراد حفظها', 'نختار وسيط تخزين مناسبًا', 'نحفظ نسخة في المكان الصحيح', 'نتحقق من وجود الملفات'],
    visualStepsEn: ['Choose the files to keep', 'Select suitable storage', 'Save a copy in the right place', 'Check that the files are there']
  },
  {
    unit: 2, page: 10, lastPage: 14, titleAr: 'سطح المكتب', titleEn: 'The Desktop',
    focusAr: 'سطح المكتب هو الواجهة التي تظهر بعد تشغيل ويندوز، ويضم رموزًا وشريط مهام للوصول إلى الأدوات والملفات. تساعد معرفة رموز مثل هذا الكمبيوتر وسلة المحذوفات ولوحة التحكم على التنقل بأمان.',
    focusEn: 'The desktop is the screen shown after Windows starts. Its icons and taskbar provide access to tools and files. Recognizing items such as This PC, Recycle Bin, and Control Panel helps users navigate.',
    questionAr: 'أين يمكن أن نجد رموز الوصول إلى الملفات وبعض الأدوات بعد بدء ويندوز؟', questionEn: 'Where can we find icons for files and tools after Windows starts?',
    optionsAr: ['سطح المكتب', 'داخل مكبر الصوت', 'على ورقة مطبوعة'], optionsEn: ['On the desktop', 'Inside a speaker', 'On a printed sheet'],
    visualStepsAr: ['يبدأ تشغيل ويندوز', 'يظهر سطح المكتب', 'نحدد الرمز المطلوب', 'نفتح الأداة بإرشاد المعلم'],
    visualStepsEn: ['Windows starts', 'The desktop appears', 'Find the needed icon', 'Open the tool with a teacher’s guidance']
  },
  {
    unit: 2, page: 15, lastPage: 17, titleAr: 'المظهر العام لويندوز', titleEn: 'Windows Appearance',
    focusAr: 'تتيح إعدادات المظهر اختيار خلفية أو نسق يناسب المستخدم، كما يمكن ضبط شاشة التوقف. نغيّر هذه الخيارات بموافقة المعلم أو الأسرة، ونترك إعدادات الجهاز المهمة كما هي.',
    focusEn: 'Appearance settings let a user choose a background or theme and adjust the screen saver. Make these changes with a teacher’s or family member’s permission, and leave important device settings unchanged.',
    questionAr: 'ما التصرف المناسب قبل تغيير مظهر جهاز المدرسة؟', questionEn: 'What should you do before changing the look of a school computer?',
    optionsAr: ['أطلب إذن المعلم', 'أغيّر كل الإعدادات', 'أحذف ملفات زملائي'], optionsEn: ['Ask the teacher first', 'Change every setting', 'Delete classmates’ files'],
    visualStepsAr: ['نطلب الإذن', 'نفتح إعداد المظهر', 'نختار تغييرًا مناسبًا', 'نراجع الشكل ونعيد المطلوب'],
    visualStepsEn: ['Ask for permission', 'Open appearance settings', 'Choose a suitable change', 'Review the look and restore if asked']
  },
  {
    unit: 2, page: 18, lastPage: 20, titleAr: 'إدارة الملفات', titleEn: 'Managing Files',
    focusAr: 'الملف يحفظ معلومات، والمجلد يجمع ملفات أو مجلدات فرعية. تساعد الأسماء الواضحة على تنظيم العمل والعثور عليه؛ أنشئ مجلدًا أو أعد تسميته بعد التأكد من اختيار العنصر الصحيح.',
    focusEn: 'A file stores information, while a folder groups files or subfolders. Clear names make work easier to organize and find; create or rename a folder only after checking that it is the right item.',
    questionAr: 'لماذا نستخدم مجلدًا باسم واضح؟', questionEn: 'Why use a clearly named folder?',
    optionsAr: ['لترتيب الملفات والعثور عليها', 'لزيادة صوت الحاسوب', 'لتغيير لون لوحة المفاتيح'], optionsEn: ['To organize and find files', 'To make the computer louder', 'To change the keyboard color'],
    visualStepsAr: ['نحدد نوع العمل', 'ننشئ مجلدًا مناسبًا', 'نكتب اسمًا واضحًا', 'نراجع مكان الملف'],
    visualStepsEn: ['Identify the kind of work', 'Create a suitable folder', 'Give it a clear name', 'Check where the file is saved']
  },
  {
    unit: 2, page: 21, lastPage: 22, titleAr: 'التاريخ والوقت', titleEn: 'Date and Time',
    focusAr: 'يعرض شريط المهام تاريخ الجهاز ووقته. عند الحاجة إلى تصحيحهما، نطلب مساعدة شخص بالغ ونتأكد من اختيار القيم الصحيحة قبل اعتماد التغيير.',
    focusEn: 'The taskbar displays the computer’s date and time. If they need correction, ask an adult for help and check the values before applying any change.',
    questionAr: 'من الأفضل أن يساعدك عند تعديل وقت جهاز المدرسة؟', questionEn: 'Who should help when changing the time on a school computer?',
    optionsAr: ['المعلم', 'أي زائر غير معروف', 'لا أحد مع تغيير عشوائي'], optionsEn: ['The teacher', 'An unknown visitor', 'No one while changing it at random'],
    visualStepsAr: ['نلاحظ الوقت المعروض', 'نستأذن المسؤول', 'نتحقق من التاريخ والساعة', 'نطبق التعديل بإشرافه'],
    visualStepsEn: ['Notice the displayed time', 'Ask the responsible adult', 'Check the date and clock', 'Apply the change with supervision']
  },
  {
    unit: 3, page: 25, lastPage: 27, titleAr: 'الآلة الحاسبة', titleEn: 'The Calculator',
    focusAr: 'تساعد الآلة الحاسبة في إجراء الجمع والطرح والضرب والقسمة. أدخل الأعداد والعملية المطلوبة، ثم افحص الناتج بمقارنته بتقديرك أو بحل مكتوب.',
    focusEn: 'A calculator helps with addition, subtraction, multiplication, and division. Enter the numbers and operation, then check the result against an estimate or written solution.',
    questionAr: 'ما أفضل خطوة بعد ظهور ناتج العملية على الآلة الحاسبة؟', questionEn: 'What is a good step after a calculator shows an answer?',
    optionsAr: ['أتحقق من معقوليته', 'أضغط أزرارًا عشوائية', 'أشارك كلمة مروري'], optionsEn: ['Check whether it makes sense', 'Press random buttons', 'Share my password'],
    visualStepsAr: ['نحدد العملية والأعداد', 'ندخلها بهدوء', 'نقرأ الناتج', 'نراجعه بالتقدير'],
    visualStepsEn: ['Choose the operation and numbers', 'Enter them carefully', 'Read the answer', 'Check it with an estimate']
  },
  {
    unit: 3, page: 28, lastPage: 30, titleAr: 'الرسام', titleEn: 'Paint',
    focusAr: 'يوفر برنامج الرسام مساحة وأدوات لإنشاء رسومات بسيطة وتلوينها. بعد الانتهاء، اختر اسمًا ومكانًا مناسبين للحفظ، واستعن بمعلمك عند التعامل مع الملفات.',
    focusEn: 'Paint provides a canvas and tools for making and coloring simple drawings. When finished, choose a suitable file name and location, and ask a teacher for help with files.',
    questionAr: 'ماذا تفعل كي تستطيع الرجوع إلى رسمك لاحقًا؟', questionEn: 'What should you do so you can return to your drawing later?',
    optionsAr: ['أحفظه باسم مناسب', 'أغلق البرنامج دون حفظ', 'أمسح كل الألوان'], optionsEn: ['Save it with a suitable name', 'Close without saving', 'Erase every color'],
    visualStepsAr: ['نفتح مساحة رسم', 'نختار أداة ولونًا', 'نرسم ثم نراجع', 'نحفظ العمل'],
    visualStepsEn: ['Open a drawing area', 'Choose a tool and color', 'Draw and review', 'Save the work']
  },
  {
    unit: 3, page: 31, lastPage: 34, titleAr: 'الأشكال الأساسية', titleEn: 'Basic Shapes',
    focusAr: 'يمكن استخدام الأشكال الجاهزة لرسم عناصر مألوفة، ثم اختيار لون لملئها. جرّب أشكالًا بسيطة واحفظ الرسم بعد التأكد من أن الألوان والأجزاء في مواضعها.',
    focusEn: 'Ready-made shapes can create familiar objects, and a color can fill each shape. Try simple forms and save the drawing after checking that colors and parts are in place.',
    questionAr: 'ما الأداة التي تساعد على إضافة شكل هندسي جاهز إلى الرسم؟', questionEn: 'Which tool helps add a ready-made geometric shape to a drawing?',
    optionsAr: ['قائمة الأشكال', 'أداة الصوت', 'ساعة الجهاز'], optionsEn: ['The shapes menu', 'The sound tool', 'The computer clock'],
    visualStepsAr: ['نختار شكلًا', 'نرسمه بالحجم المناسب', 'نملأه بلون', 'نراجع الرسم ونحفظه'],
    visualStepsEn: ['Choose a shape', 'Draw it at a suitable size', 'Fill it with color', 'Review and save the drawing']
  },
  {
    unit: 4, page: 37, lastPage: 40, titleAr: 'الواجهة الرئيسة لبرنامج وورد', titleEn: 'The Main Word Interface',
    focusAr: 'يساعد برنامج وورد على إنشاء المستندات. تتضمن واجهته مساحة للكتابة، وشريط تبويبات وأدوات، وشريط عنوان؛ والتعرف إلى هذه الأجزاء يسهل اختيار الأمر المناسب.',
    focusEn: 'Word helps create documents. Its interface includes a writing area, tabs and tools, and a title bar; recognizing these parts makes it easier to choose the right command.',
    questionAr: 'أين نكتب الفقرة في مستند وورد؟', questionEn: 'Where do we type a paragraph in a Word document?',
    optionsAr: ['مساحة العمل', 'شريط العنوان فقط', 'زر تشغيل الشاشة'], optionsEn: ['The work area', 'The title bar only', 'The screen power button'],
    visualStepsAr: ['نفتح برنامج وورد', 'ننشئ مستندًا فارغًا', 'نتعرف إلى مساحة العمل', 'نبدأ الكتابة'],
    visualStepsEn: ['Open Word', 'Create a blank document', 'Find the work area', 'Begin typing']
  },
  {
    unit: 4, page: 41, lastPage: 44, titleAr: 'العمليات الأساسية في وورد', titleEn: 'Basic Operations in Word',
    focusAr: 'حسّن وضوح النص بتحديده ثم اختيار تنسيق مناسب مثل نوع الخط أو حجمه أو لونه أو جعله عريضًا أو مائلاً أو تحته خط. احفظ المستند بعد مراجعة التعديلات.',
    focusEn: 'Improve readability by selecting text and choosing a suitable font, size, or color, or applying bold, italics, or underline. Review your edits and save the document.',
    questionAr: 'ما الذي ينبغي فعله قبل تطبيق تنسيق على كلمة محددة؟', questionEn: 'What should you do before formatting a particular word?',
    optionsAr: ['تحديد الكلمة', 'إغلاق المستند', 'حذف لوحة المفاتيح'], optionsEn: ['Select the word', 'Close the document', 'Remove the keyboard'],
    visualStepsAr: ['نكتب النص', 'نحدد الجزء المطلوب', 'نختار تنسيقًا ملائمًا', 'نراجع ثم نحفظ'],
    visualStepsEn: ['Type the text', 'Select the part to change', 'Choose suitable formatting', 'Review and save']
  },
  {
    unit: 4, page: 45, lastPage: 46, titleAr: 'الجداول', titleEn: 'Tables',
    focusAr: 'تنظم الجداول المعلومات في صفوف وأعمدة. اختر عدد الصفوف والأعمدة الذي يلائم البيانات، ثم أضف محتوى واضحًا وتأكد من أن كل معلومة في الخلية المناسبة.',
    focusEn: 'Tables arrange information in rows and columns. Choose a number of rows and columns that suits the data, add clear content, and check that each item is in the right cell.',
    questionAr: 'كيف تعرض جدولًا صغيرًا أسماء أيام الأسبوع وأنشطتها؟', questionEn: 'How could you show weekdays and activities in a small table?',
    optionsAr: ['صفوف وأعمدة بعناوين واضحة', 'كلمات مبعثرة بلا ترتيب', 'صورة فارغة فقط'], optionsEn: ['Rows and columns with clear headings', 'Scattered, unordered words', 'An empty picture only'],
    visualStepsAr: ['نحدد المعلومات', 'نختار صفوفًا وأعمدة', 'نملأ الخلايا', 'نراجع ترتيب البيانات'],
    visualStepsEn: ['Identify the information', 'Choose rows and columns', 'Fill the cells', 'Check the data order']
  },
  {
    unit: 4, page: 47, lastPage: 48, titleAr: 'الأشكال والصور', titleEn: 'Shapes and Pictures',
    focusAr: 'يمكن إضافة شكل أو صورة إلى المستند لتوضيح فكرته. اختر عنصرًا مناسبًا للمحتوى، ثم راجع موضعه وألوانه حتى يدعم النص ولا يحجبه.',
    focusEn: 'A shape or picture can help explain a document’s idea. Choose an item that fits the content, then check its position and colors so it supports rather than hides the text.',
    questionAr: 'ما الذي يجعل الصورة مفيدة داخل المستند؟', questionEn: 'What makes a picture useful in a document?',
    optionsAr: ['أن توضح الفكرة وتناسب النص', 'أن تغطي كل الكلمات', 'أن تكون بلا صلة بالموضوع'], optionsEn: ['It explains the idea and fits the text', 'It covers every word', 'It is unrelated to the topic'],
    visualStepsAr: ['نحدد الفكرة التي نوضحها', 'نختار شكلًا أو صورة مناسبة', 'نضيفها وننسقها', 'نتأكد من وضوح النص'],
    visualStepsEn: ['Decide what idea to explain', 'Choose a suitable shape or picture', 'Insert and format it', 'Check that the text is clear']
  },
  {
    unit: 4, page: 49, lastPage: 49, titleAr: 'رأس وتذييل الصفحة', titleEn: 'Headers and Footers',
    focusAr: 'يساعد الرأس والتذييل على وضع معلومات متكررة في أعلى الصفحات أو أسفلها، ويمكن استخدام ترقيم الصفحات لتسهيل ترتيب المستند وقراءته.',
    focusEn: 'A header or footer places repeated information at the top or bottom of pages. Page numbers can help readers follow a document in order.',
    questionAr: 'أين يظهر التذييل عادة؟', questionEn: 'Where does a footer usually appear?',
    optionsAr: ['أسفل الصفحة', 'وسط كل كلمة', 'داخل اسم الملف فقط'], optionsEn: ['At the bottom of a page', 'Inside every word', 'Only in the file name'],
    visualStepsAr: ['نفتح قائمة الإدراج', 'نختار الرأس أو التذييل', 'نضيف النص أو رقم الصفحة', 'نراجع مواضعه'],
    visualStepsEn: ['Open the Insert menu', 'Choose header or footer', 'Add text or a page number', 'Review its placement']
  },
  {
    unit: 4, page: 50, lastPage: 50, titleAr: 'طباعة المستند', titleEn: 'Printing a Document',
    focusAr: 'قبل الطباعة، عاين شكل الصفحات وتأكد من وضوح المحتوى وإعدادات الطابعة. اطلب الإذن، ثم اطبع نسخة عند الحاجة فقط لتقليل هدر الورق.',
    focusEn: 'Before printing, preview the pages and check that the content and printer settings look right. Ask permission, and print only when needed to avoid wasting paper.',
    questionAr: 'ما الخطوة المفيدة قبل إرسال مستند للطباعة؟', questionEn: 'What is a useful step before sending a document to print?',
    optionsAr: ['معاينة الصفحات ومراجعتها', 'الطباعة مرات كثيرة دون فحص', 'تغيير إعدادات جهاز آخر'], optionsEn: ['Preview and review the pages', 'Print many copies without checking', 'Change another device’s settings'],
    visualStepsAr: ['نراجع المستند', 'نفتح معاينة الطباعة', 'نتحقق من الصفحات والإعدادات', 'نطبع بإذن عند الحاجة'],
    visualStepsEn: ['Review the document', 'Open print preview', 'Check pages and settings', 'Print with permission if needed']
  }
];

export const SUDAN_PRIMARY_ICT_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  lastPage: lesson.lastPage,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_ICT_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-ict-g5-${order}`;
  const unit = SUDAN_PRIMARY_ICT_G5_BOOK.units[lesson.unit - 1];
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
    subtitleAr: `تكنولوجيا المعلومات والاتصالات — الصف الخامس الابتدائي — ${unit.titleAr}`,
    subtitleEn: `Grade 5 Information and Communication Technology — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان — تكنولوجيا المعلومات والاتصالات — الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Republic of Sudan — Grade 5 Primary Information and Communication Technology',
    ministryAr: 'وزارة التربية والتعليم',
    ministryEn: 'Ministry of Education',
    termAr: 'تكنولوجيا المعلومات والاتصالات — الصف الخامس',
    termEn: 'Grade 5 Information and Communication Technology',
    unitTitleAr: `الوحدة ${lesson.unit}: ${unit.titleAr}`,
    unitTitleEn: `Unit ${lesson.unit}: ${unit.titleEn}`,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `اذكر موقفًا يوميًا قد تستفيد فيه من «${lesson.titleAr}»، وناقشه مع معلمك.`,
    warmupHookEn: `Describe an everyday situation where “${lesson.titleEn}” could help, and discuss it with your teacher.`,
    learningOutcomesAr: [lesson.focusAr, `يجيب عن سؤال يوضح فهمه لموضوع «${lesson.titleAr}».`],
    learningOutcomesEn: [lesson.focusEn, `Answer a question to show understanding of “${lesson.titleEn}.”`],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nتأمل الخطوات الأربع، ثم لخّص الفكرة بكلماتك وطبّقها بإشراف معلمك عند استخدام الجهاز.`,
      contentEn: `${lesson.focusEn}\n\nReview the four steps, then explain the idea in your own words and practise with a teacher’s guidance when using a device.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `مخطط: ${lesson.titleAr}`,
        titleEn: `Diagram: ${lesson.titleEn}`,
        captionAr: `أربع خطوات توضح «${lesson.titleAr}».`,
        captionEn: `Four steps illustrating “${lesson.titleEn}.”`,
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
