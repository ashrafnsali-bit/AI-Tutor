import type { Lecture, LectureDiagramStep, Question } from '../types';

type SupplementaryLesson = {
  id: string;
  titleAr: string;
  titleEn: string;
  unitAr: string;
  unitEn: string;
  page?: number;
  contentsPdfPages?: string;
  conceptsAr: string[];
  conceptsEn: string[];
  visualSteps: [string, string][];
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  answer: number;
  explanationAr: string;
  explanationEn: string;
};

export const SAUDI_PRIMARY_DIGITAL_SKILLS_TEXTBOOK_URLS = {
  G4: 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K04-SM1-mcomp.pdf',
  G5: 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-mcomp.pdf'
} as const;

type Grade4DigitalSkillsLesson = SupplementaryLesson & {
  unitNumber: 1 | 2 | 3 | 4;
  page: number;
  contentsPdfPages: string;
};

type Grade4DigitalSkillsLessonDraft = Omit<
  Grade4DigitalSkillsLesson,
  'id' | 'unitAr' | 'unitEn' | 'optionsAr' | 'optionsEn' | 'answer'
> & {
  correctAnswerAr: string;
  correctAnswerEn: string;
  incorrectAnswersAr: [string, string, string];
  incorrectAnswersEn: [string, string, string];
};

const grade4DigitalSkillsUnits = [
  { titleAr: 'تعلم الأساسيات', titleEn: 'Learning the Basics' },
  { titleAr: 'العمل على النص', titleEn: 'Working with Text' },
  { titleAr: 'عالمي المتصل', titleEn: 'My Connected World' },
  { titleAr: 'العمل مع البرمجة باستخدام سكراتش', titleEn: 'Working with Programming Using Scratch' }
] as const;

const createGrade4DigitalSkillsLesson = (
  lesson: Grade4DigitalSkillsLessonDraft
): Grade4DigitalSkillsLesson => {
  const unit = grade4DigitalSkillsUnits[lesson.unitNumber - 1];
  const {
    correctAnswerAr,
    correctAnswerEn,
    incorrectAnswersAr,
    incorrectAnswersEn,
    ...lessonContent
  } = lesson;

  return {
    ...lessonContent,
    id: `sa-ds4-u${lesson.unitNumber}-p${lesson.page}`,
    unitAr: unit.titleAr,
    unitEn: unit.titleEn,
    optionsAr: [correctAnswerAr, ...incorrectAnswersAr],
    optionsEn: [correctAnswerEn, ...incorrectAnswersEn],
    answer: 0
  };
};

const grade4LessonDrafts: Grade4DigitalSkillsLessonDraft[] = [
  {
    unitNumber: 1,
    page: 14,
    contentsPdfPages: '7',
    titleAr: 'الحاسب',
    titleEn: 'The Computer',
    conceptsAr: ['تمييز الحاسب المكتبي ومكوناته الرئيسة والأجهزة الملحقة', 'اختيار الجهاز الملحق المناسب للإدخال أو الإخراج والطباعة'],
    conceptsEn: ['Identify desktop computers, their main parts, and peripherals', 'Choose peripherals for input, output, and printing'],
    visualSteps: [['أدخل البيانات', 'Input data'], ['يعالجها الحاسب', 'The computer processes it'], ['اعرض النتيجة', 'Display the result'], ['اطبع عند الحاجة', 'Print when needed']],
    questionAr: 'أي جهاز يُستخدم لإدخال النص إلى الحاسب؟',
    questionEn: 'Which device is used to enter text into a computer?',
    correctAnswerAr: 'لوحة المفاتيح',
    correctAnswerEn: 'Keyboard',
    incorrectAnswersAr: ['الشاشة', 'السماعات', 'الطابعة'],
    incorrectAnswersEn: ['Monitor', 'Speakers', 'Printer'],
    explanationAr: 'لوحة المفاتيح جهاز إدخال، أما الشاشة والسماعات والطابعة فمن أجهزة الإخراج.',
    explanationEn: 'A keyboard is an input device; a monitor, speakers, and printer are output devices.'
  },
  {
    unitNumber: 1,
    page: 20,
    contentsPdfPages: '7',
    titleAr: 'سطح المكتب',
    titleEn: 'The Desktop',
    conceptsAr: ['التعامل مع الملفات وأسمائها وامتداداتها وعمليات فتحها ونقلها ونسخها', 'تنظيم الملفات داخل مجلدات واستخدام البرامج وأدوات المساعدة'],
    conceptsEn: ['Work with files, names, extensions, opening, moving, and copying', 'Organize files in folders and use programs and help tools'],
    visualSteps: [['أنشئ الملف', 'Create a file'], ['سمّه بوضوح', 'Give it a clear name'], ['ضعه في مجلد مناسب', 'Place it in a suitable folder'], ['افتحه أو انقله عند الحاجة', 'Open or move it when needed']],
    questionAr: 'ما الفرق بين نقل ملف ونسخه؟',
    questionEn: 'What is the difference between moving and copying a file?',
    correctAnswerAr: 'النقل يغيّر مكان الملف، والنسخ ينشئ نسخة إضافية',
    correctAnswerEn: 'Moving changes the file location; copying creates an additional copy',
    incorrectAnswersAr: ['كلاهما يحذف الملف', 'النسخ يغيّر الاسم فقط', 'النقل يطبع الملف'],
    incorrectAnswersEn: ['Both delete the file', 'Copying only changes its name', 'Moving prints the file'],
    explanationAr: 'يبقى الملف المنقول في موقعه الجديد، بينما تتيح عملية النسخ وجود نسخة أخرى.',
    explanationEn: 'A moved file is kept at its new location, while copying creates another instance.'
  },
  {
    unitNumber: 1,
    page: 33,
    contentsPdfPages: '7',
    titleAr: 'إعدادات جهاز الحاسب',
    titleEn: 'Computer Settings',
    conceptsAr: ['ضبط التاريخ والوقت وإعدادات الشاشة', 'تغيير مظهر سطح المكتب والتعرف على أصوات النظام'],
    conceptsEn: ['Set the date, time, and display settings', 'Change desktop appearance and recognize system sounds'],
    visualSteps: [['افتح الإعدادات', 'Open settings'], ['اختر الإعداد المطلوب', 'Choose a setting'], ['عدّل القيمة أو المظهر', 'Adjust the value or appearance'], ['تحقق من النتيجة', 'Check the result']],
    questionAr: 'أين تغيّر مظهر سطح المكتب؟',
    questionEn: 'Where can you change the desktop appearance?',
    correctAnswerAr: 'من إعدادات التخصيص أو المظهر',
    correctAnswerEn: 'In the personalization or appearance settings',
    incorrectAnswersAr: ['من سلة المحذوفات', 'بتغيير امتداد ملف', 'من أداة الطباعة'],
    incorrectAnswersEn: ['In the recycle bin', 'By changing a file extension', 'In the print tool'],
    explanationAr: 'تتضمن إعدادات الجهاز خيارات لتخصيص الشاشة ومظهر سطح المكتب.',
    explanationEn: 'Computer settings include options for the display and desktop appearance.'
  },
  {
    unitNumber: 2,
    page: 44,
    contentsPdfPages: '8',
    titleAr: 'لوحة المفاتيح',
    titleEn: 'The Keyboard',
    conceptsAr: ['استخدام لوحة المفاتيح لكتابة الأرقام والنصوص بالعربية والإنجليزية', 'استخدام مفتاح Enter لبدء سطر جديد'],
    conceptsEn: ['Use the keyboard to type numbers and Arabic or English text', 'Use Enter to start a new line'],
    visualSteps: [['اختر لغة الكتابة', 'Select the input language'], ['اكتب النص أو الرقم', 'Type text or numbers'], ['استخدم Enter لسطر جديد', 'Press Enter for a new line'], ['راجع ما كتبته', 'Review what you typed']],
    questionAr: 'أي مفتاح يبدأ سطرًا جديدًا في المستند؟',
    questionEn: 'Which key starts a new line in a document?',
    correctAnswerAr: 'Enter',
    correctAnswerEn: 'Enter',
    incorrectAnswersAr: ['Shift', 'Caps Lock', 'Esc'],
    incorrectAnswersEn: ['Shift', 'Caps Lock', 'Esc'],
    explanationAr: 'ينقل مفتاح Enter مؤشر الكتابة إلى سطر جديد.',
    explanationEn: 'Enter moves the text cursor to a new line.'
  },
  {
    unitNumber: 2,
    page: 53,
    contentsPdfPages: '8',
    titleAr: 'تحرير النص',
    titleEn: 'Editing Text',
    conceptsAr: ['حذف الأحرف أو النص المحدد باستخدام Backspace وDelete', 'إضافة المسافات وتحريك المؤشر وتحديد النص بلوحة المفاتيح والفأرة'],
    conceptsEn: ['Delete characters or selected text with Backspace and Delete', 'Insert spaces, move the cursor, and select text with the keyboard and mouse'],
    visualSteps: [['حدد موضع التحرير', 'Choose where to edit'], ['حرّك المؤشر أو حدد النص', 'Move the cursor or select text'], ['أضف أو احذف', 'Insert or delete'], ['راجع النص المعدّل', 'Review the edited text']],
    questionAr: 'ما فائدة تحديد جزء من النص قبل حذفه؟',
    questionEn: 'Why select part of the text before deleting it?',
    correctAnswerAr: 'لحذف الجزء المقصود دون حذف بقية النص',
    correctAnswerEn: 'To delete the intended part without removing the rest',
    incorrectAnswersAr: ['لطباعة المستند تلقائيًا', 'لتغيير لغة الجهاز', 'لإغلاق البرنامج'],
    incorrectAnswersEn: ['To print the document automatically', 'To change the device language', 'To close the program'],
    explanationAr: 'يتيح التحديد تطبيق الحذف أو التعديل على الجزء المقصود فقط.',
    explanationEn: 'Selection lets you apply deletion or editing only to the intended text.'
  },
  {
    unitNumber: 2,
    page: 66,
    contentsPdfPages: '8',
    titleAr: 'تنسيق النص',
    titleEn: 'Formatting Text',
    conceptsAr: ['إنشاء عنوان واضح والبحث عن نص داخل المستند', 'التراجع عن إجراء وحفظ العمل وتكبير العرض أو تصغيره'],
    conceptsEn: ['Create a clear heading and find text in a document', 'Undo an action, save work, and zoom in or out'],
    visualSteps: [['حدد النص', 'Select text'], ['طبّق التنسيق المناسب', 'Apply suitable formatting'], ['راجع وضوح المستند', 'Check document readability'], ['احفظ التغييرات', 'Save your changes']],
    questionAr: 'ما الإجراء المناسب للاحتفاظ بالتعديلات التي أجريتها؟',
    questionEn: 'What should you do to keep the edits you made?',
    correctAnswerAr: 'حفظ المستند',
    correctAnswerEn: 'Save the document',
    incorrectAnswersAr: ['إغلاقه دون حفظ', 'حذف الملف', 'إعادة تشغيل الحاسب'],
    incorrectAnswersEn: ['Close it without saving', 'Delete the file', 'Restart the computer'],
    explanationAr: 'يحفظ الأمر حفظ التعديلات في المستند.',
    explanationEn: 'The Save command stores the document edits.'
  },
  {
    unitNumber: 2,
    page: 74,
    contentsPdfPages: '8',
    titleAr: 'تنسيق الفقرة',
    titleEn: 'Formatting Paragraphs',
    conceptsAr: ['محاذاة النص واستخدام الحدود والتظليل', 'تنظيم العناصر بالتعداد النقطي أو الترقيم وإدراج الرموز'],
    conceptsEn: ['Align text and use borders and shading', 'Organize items with bullets or numbering and insert symbols'],
    visualSteps: [['اختر الفقرة', 'Select a paragraph'], ['حدد المحاذاة', 'Set alignment'], ['أضف تعدادًا أو حدودًا', 'Add bullets or borders'], ['تحقق من التنسيق', 'Review the formatting']],
    questionAr: 'أي خيار يناسب عرض قائمة عناصر غير مرتبة؟',
    questionEn: 'Which option suits a list of items with no required order?',
    correctAnswerAr: 'التعداد النقطي',
    correctAnswerEn: 'Bullets',
    incorrectAnswersAr: ['تغيير امتداد الملف', 'تكبير الشاشة فقط', 'حذف الفقرة'],
    incorrectAnswersEn: ['Changing the file extension', 'Only zooming in', 'Deleting the paragraph'],
    explanationAr: 'يساعد التعداد النقطي على عرض عناصر القائمة دون ترتيب رقمي.',
    explanationEn: 'Bullets present list items without a numbered sequence.'
  },
  {
    unitNumber: 3,
    page: 88,
    contentsPdfPages: '9',
    titleAr: 'الموقع الإلكتروني',
    titleEn: 'Websites',
    conceptsAr: ['التعرف على الإنترنت ومتصفح المواقع الإلكترونية', 'زيارة موقع وقراءة معلومات الصفحة والانتقال عبر الروابط'],
    conceptsEn: ['Understand the internet and web browsers', 'Visit a website, read its page, and follow links'],
    visualSteps: [['افتح المتصفح', 'Open a browser'], ['أدخل عنوان الموقع', 'Enter a website address'], ['اقرأ محتوى الصفحة', 'Read the page'], ['افتح رابطًا مناسبًا', 'Open a relevant link']],
    questionAr: 'ما وظيفة متصفح المواقع الإلكترونية؟',
    questionEn: 'What is the purpose of a web browser?',
    correctAnswerAr: 'زيارة صفحات المواقع الإلكترونية وعرضها',
    correctAnswerEn: 'To visit and display website pages',
    incorrectAnswersAr: ['تنظيم مجلدات الجهاز فقط', 'طباعة الصور دون فتحها', 'تغيير وقت الحاسب'],
    incorrectAnswersEn: ['Only organizing device folders', 'Printing images without opening them', 'Changing the computer clock'],
    explanationAr: 'يتيح المتصفح فتح المواقع والانتقال بين صفحاتها.',
    explanationEn: 'A browser opens websites and lets users navigate their pages.'
  },
  {
    unitNumber: 3,
    page: 94,
    contentsPdfPages: '9',
    titleAr: 'البحث في الإنترنت',
    titleEn: 'Searching the Internet',
    conceptsAr: ['استخدام أدوات المتصفح للوصول إلى المعلومات', 'اختيار كلمات بحث واضحة ومناسبة'],
    conceptsEn: ['Use browser tools to find information', 'Choose clear and relevant search terms'],
    visualSteps: [['حدد السؤال', 'Define the question'], ['اكتب كلمات مفتاحية', 'Enter keywords'], ['راجع النتائج', 'Review the results'], ['افتح النتيجة الملائمة', 'Open a relevant result']],
    questionAr: 'ما الذي يساعد على الحصول على نتائج بحث أقرب إلى المطلوب؟',
    questionEn: 'What helps produce search results closer to what you need?',
    correctAnswerAr: 'استخدام كلمات مفتاحية دقيقة',
    correctAnswerEn: 'Using precise keywords',
    incorrectAnswersAr: ['كتابة رموز عشوائية', 'فتح كل النتائج دون قراءة', 'مشاركة كلمة المرور'],
    incorrectAnswersEn: ['Typing random symbols', 'Opening every result without reading', 'Sharing a password'],
    explanationAr: 'تصف الكلمات المفتاحية الدقيقة الموضوع الذي تبحث عنه.',
    explanationEn: 'Precise keywords describe the topic you are looking for.'
  },
  {
    unitNumber: 3,
    page: 100,
    contentsPdfPages: '9',
    titleAr: 'مصادر المعلومات',
    titleEn: 'Information Sources',
    conceptsAr: ['تمييز المعلومات الموثوقة والتحقق من حداثتها', 'احترام عمل الآخرين وعدم نسخ المعلومات دون مراعاة مصدرها'],
    conceptsEn: ['Recognize reliable information and check that it is current', 'Respect others’ work and consider sources when using information'],
    visualSteps: [['اعثر على المعلومة', 'Find the information'], ['تحقق من المصدر', 'Check the source'], ['راجع تاريخها', 'Check its date'], ['اذكر المصدر واحترم الحقوق', 'Credit the source and respect rights']],
    questionAr: 'ما التصرف الأفضل قبل استخدام معلومة من موقع إلكتروني؟',
    questionEn: 'What is best to do before using information from a website?',
    correctAnswerAr: 'التحقق من موثوقية المصدر وحداثة المعلومة',
    correctAnswerEn: 'Check the source reliability and information date',
    incorrectAnswersAr: ['نسخها فورًا دون مراجعة', 'إخفاء اسم الموقع', 'افتراض أن كل المواقع موثوقة'],
    incorrectAnswersEn: ['Copy it immediately without review', 'Hide the website name', 'Assume every website is reliable'],
    explanationAr: 'يساعد فحص المصدر وتاريخ النشر على تقويم موثوقية المعلومات وملاءمتها.',
    explanationEn: 'Checking the source and publication date helps assess reliability and relevance.'
  },
  {
    unitNumber: 3,
    page: 107,
    contentsPdfPages: '9',
    titleAr: 'السلامة على الإنترنت',
    titleEn: 'Internet Safety',
    conceptsAr: ['اتباع أخلاقيات التواصل والحذر أثناء استخدام الإنترنت', 'التعرف على الفيروسات وطلب المساعدة عند وجود خطر'],
    conceptsEn: ['Follow communication etiquette and stay cautious online', 'Recognize viruses and ask for help when there is a risk'],
    visualSteps: [['توقف عند الطلب المريب', 'Pause at a suspicious request'], ['لا تشارك بياناتك', 'Do not share personal data'], ['تجنب الروابط المشبوهة', 'Avoid suspicious links'], ['أبلغ شخصًا موثوقًا', 'Tell a trusted adult']],
    questionAr: 'ماذا تفعل عند تلقي رابط مريب يطلب معلوماتك؟',
    questionEn: 'What should you do if a suspicious link asks for your information?',
    correctAnswerAr: 'لا تفتحه ولا تشارك بياناتك وأخبر شخصًا بالغًا موثوقًا',
    correctAnswerEn: 'Do not open it or share data; tell a trusted adult',
    incorrectAnswersAr: ['أرسل كلمة مرورك', 'أعد إرسال الرابط للجميع', 'عطّل الحماية'],
    incorrectAnswersEn: ['Send your password', 'Forward the link to everyone', 'Disable protection'],
    explanationAr: 'الحذر وحماية البيانات وإبلاغ شخص موثوق من ممارسات السلامة الرقمية.',
    explanationEn: 'Caution, data protection, and telling a trusted person are safe digital practices.'
  },
  {
    unitNumber: 4,
    page: 120,
    contentsPdfPages: '9–10',
    titleAr: 'أساسيات سكراتش',
    titleEn: 'Scratch Basics',
    conceptsAr: ['تمثيل الحل بخوارزمية وخطوات مرتبة', 'التعرف على الكائن والمنصة والخلفية ومنطقة البرمجة وحفظ المشروع'],
    conceptsEn: ['Represent a solution as an ordered algorithm', 'Identify sprites, the stage, backdrops, the coding area, and how to save a project'],
    visualSteps: [['حدد المهمة', 'Define the task'], ['رتب خطوات الحل', 'Order the solution steps'], ['اختر الكائن والخلفية', 'Choose a sprite and backdrop'], ['اختبر المشروع واحفظه', 'Test and save the project']],
    questionAr: 'ما الخوارزمية؟',
    questionEn: 'What is an algorithm?',
    correctAnswerAr: 'خطوات مرتبة لحل مشكلة أو تنفيذ مهمة',
    correctAnswerEn: 'Ordered steps for solving a problem or completing a task',
    incorrectAnswersAr: ['صورة خلفية للمشروع', 'اسم الكائن فقط', 'ملف صوتي'],
    incorrectAnswersEn: ['A project backdrop', 'Only a sprite name', 'An audio file'],
    explanationAr: 'تصف الخوارزمية خطوات الحل بترتيب واضح قبل أو أثناء تنفيذها.',
    explanationEn: 'An algorithm describes the solution steps in a clear order.'
  },
  {
    unitNumber: 4,
    page: 130,
    contentsPdfPages: '10',
    titleAr: 'استخدام اللبنات البرمجية',
    titleEn: 'Using Code Blocks',
    conceptsAr: ['اختيار اللبنات من لوحة اللبنات وربطها في مقطع برمجي', 'استخدام لبنات التحدث والحركة والصوت'],
    conceptsEn: ['Choose blocks from the block palette and connect them in a script', 'Use speech, movement, and sound blocks'],
    visualSteps: [['اختر لبنة', 'Choose a block'], ['اسحبها إلى منطقة البرمجة', 'Drag it to the coding area'], ['اربط اللبنات', 'Connect the blocks'], ['شغّل المقطع واختبره', 'Run and test the script']],
    questionAr: 'أين ترتب اللبنات لتكوين مقطع برمجي؟',
    questionEn: 'Where do you arrange blocks to build a script?',
    correctAnswerAr: 'منطقة البرمجة',
    correctAnswerEn: 'The coding area',
    incorrectAnswersAr: ['قائمة الملفات', 'شريط عنوان المتصفح', 'إعدادات الشاشة'],
    incorrectAnswersEn: ['The file list', 'The browser address bar', 'Display settings'],
    explanationAr: 'تُرتب اللبنات وتُوصل في منطقة البرمجة لتكوين تعليمات للكائن.',
    explanationEn: 'Blocks are arranged and connected in the coding area to give a sprite instructions.'
  },
  {
    unitNumber: 4,
    page: 141,
    contentsPdfPages: '10',
    titleAr: 'التكرارات في سكراتش',
    titleEn: 'Loops in Scratch',
    conceptsAr: ['استخدام لبنة كرّر لتنفيذ التعليمات عدة مرات', 'تنظيم التكرار مع لبنة الانتظار وتجميع اللبنات'],
    conceptsEn: ['Use a repeat block to run instructions multiple times', 'Combine loops with wait blocks and other instructions'],
    visualSteps: [['ابدأ التكرار', 'Start the loop'], ['نفذ التعليمات', 'Run the instructions'], ['كرر العدد المحدد', 'Repeat the chosen number of times'], ['تابع بقية البرنامج', 'Continue the rest of the program']],
    questionAr: 'متى تكون لبنة كرّر مفيدة؟',
    questionEn: 'When is a repeat block useful?',
    correctAnswerAr: 'عند تنفيذ التعليمات نفسها عدة مرات',
    correctAnswerEn: 'When the same instructions need to run several times',
    incorrectAnswersAr: ['لتغيير اسم الملف', 'لطباعة المستند', 'لإغلاق المشروع دون حفظ'],
    incorrectAnswersEn: ['To rename a file', 'To print a document', 'To close a project without saving'],
    explanationAr: 'تختصر لبنة كرّر إعادة كتابة التعليمات نفسها.',
    explanationEn: 'A repeat block avoids rewriting the same instructions.'
  },
  {
    unitNumber: 4,
    page: 147,
    contentsPdfPages: '10',
    titleAr: 'الرسم بواسطة سكراتش',
    titleEn: 'Drawing with Scratch',
    conceptsAr: ['إضافة أداة القلم واستخدامها في الرسم', 'تغيير اللون والحجم واستخدام لبنات رسم الأشكال والطباعة'],
    conceptsEn: ['Add and use the pen extension for drawing', 'Change color and size and use blocks to draw and stamp shapes'],
    visualSteps: [['أضف أداة القلم', 'Add the pen extension'], ['اختر اللون والحجم', 'Choose color and size'], ['حرّك الكائن للرسم', 'Move the sprite to draw'], ['اطبع الشكل وراجعه', 'Stamp and review the shape']],
    questionAr: 'ما الأداة التي تتيح للكائن رسم خط أثناء حركته؟',
    questionEn: 'Which tool lets a sprite draw a line as it moves?',
    correctAnswerAr: 'أداة القلم',
    correctAnswerEn: 'The pen tool',
    incorrectAnswersAr: ['أداة حذف الملفات', 'لوحة المفاتيح', 'أداة تكبير النص'],
    incorrectAnswersEn: ['The file-delete tool', 'The keyboard', 'The text zoom tool'],
    explanationAr: 'ترسم أداة القلم على المنصة أثناء تحرك الكائن وفق البرنامج.',
    explanationEn: 'The pen tool draws on the stage as the sprite moves according to its script.'
  }
];

const grade4Lessons: Grade4DigitalSkillsLesson[] =
  grade4LessonDrafts.map(createGrade4DigitalSkillsLesson);

export const SAUDI_G4_DIGITAL_SKILLS_LESSON_COUNT = grade4Lessons.length;
export const SAUDI_G4_DIGITAL_SKILLS_TABLE_OF_CONTENTS = grade4Lessons.map((lesson) => ({
  unitNumber: lesson.unitNumber,
  unitTitleAr: lesson.unitAr,
  titleAr: lesson.titleAr,
  page: lesson.page,
  contentsPdfPages: lesson.contentsPdfPages
}));

const primaryLessons: Record<'G4' | 'G5', SupplementaryLesson[]> = {
  G4: grade4Lessons,
  G5: [
    {
      id: 'sa-ds5-documents',
      titleAr: 'إنشاء مستند رقمي منظم',
      titleEn: 'Creating an Organized Digital Document',
      unitAr: 'إنتاج المحتوى الرقمي',
      unitEn: 'Creating Digital Content',
      conceptsAr: ['تنظيم العنوان والفقرات', 'إدراج صورة ملائمة وحفظ نسخة من العمل'],
      conceptsEn: ['Organize a title and paragraphs', 'Insert a relevant image and save a copy of your work'],
      visualSteps: [['حدد الفكرة', 'Choose an idea'], ['اكتب العنوان والنص', 'Add a title and text'], ['أدرج صورة مناسبة', 'Insert a relevant image'], ['راجع واحفظ', 'Review and save']],
      questionAr: 'ما الذي يجعل الصورة مناسبة لمستند مدرسي؟',
      questionEn: 'What makes an image appropriate for a school document?',
      optionsAr: ['أن ترتبط بالموضوع ويُسمح باستخدامها', 'أن تكون كبيرة فقط', 'أن تحل محل جميع المعلومات', 'أن تُضاف دون مراجعة'],
      optionsEn: ['It relates to the topic and is permitted to use', 'It is only large', 'It replaces all information', 'It is added without review'],
      answer: 0,
      explanationAr: 'ينبغي أن تخدم الصورة موضوع المستند مع احترام حقوق استخدامها.',
      explanationEn: 'An image should support the document topic and respect usage rights.'
    },
    {
      id: 'sa-ds5-data',
      titleAr: 'تنظيم البيانات وتمثيلها',
      titleEn: 'Organizing and Representing Data',
      unitAr: 'البيانات الرقمية',
      unitEn: 'Digital Data',
      conceptsAr: ['ترتيب البيانات في صفوف وأعمدة', 'اختيار مخطط يسهّل مقارنة القيم'],
      conceptsEn: ['Arrange data in rows and columns', 'Choose a chart that makes values easy to compare'],
      visualSteps: [['اجمع البيانات', 'Collect data'], ['نظمها في جدول', 'Organize a table'], ['اختر مخططًا مناسبًا', 'Choose a suitable chart'], ['فسر النتائج', 'Interpret results']],
      questionAr: 'أي تمثيل يساعد غالبًا على مقارنة قيم عدة فئات؟',
      questionEn: 'Which representation commonly helps compare values across categories?',
      optionsAr: ['مخطط الأعمدة', 'فقرة بلا أرقام', 'اسم ملف', 'صورة خلفية'],
      optionsEn: ['A bar chart', 'A paragraph without numbers', 'A file name', 'A background image'],
      answer: 0,
      explanationAr: 'يساعد مخطط الأعمدة على مقارنة القيم بين الفئات بصريًا.',
      explanationEn: 'A bar chart visually supports comparisons between categories.'
    }
  ]
};

const secondaryLessons: Record<'G10' | 'G11' | 'G12', SupplementaryLesson[]> = {
  G10: [
    {
      id: 'sa-dt10-computational-thinking',
      titleAr: 'تحليل المشكلات والخوارزميات',
      titleEn: 'Problem Analysis and Algorithms',
      unitAr: 'التفكير الحاسوبي',
      unitEn: 'Computational Thinking',
      conceptsAr: ['تحديد المدخلات والمعالجة والمخرجات', 'تمثيل الحل بخطوات قابلة للاختبار'],
      conceptsEn: ['Identify inputs, processing, and outputs', 'Represent a solution as testable steps'],
      visualSteps: [['حلل المسألة', 'Analyze the problem'], ['حدد المدخلات', 'Identify inputs'], ['صمم الخطوات', 'Design the steps'], ['اختبر المخرجات', 'Test outputs']],
      questionAr: 'ما الذي ينبغي تحديده أولًا عند تحليل مشكلة حاسوبية؟',
      questionEn: 'What should be identified first when analyzing a computing problem?',
      optionsAr: ['المطلوب والمدخلات والمخرجات', 'لون واجهة البرنامج', 'اسم الجهاز فقط', 'مكان حفظ صورة الخلفية'],
      optionsEn: ['The goal, inputs, and outputs', 'The program interface color', 'Only the device name', 'Where a background image is saved'],
      answer: 0,
      explanationAr: 'تحديد المطلوب والمدخلات والمخرجات يوضح نطاق الحل قبل تصميمه.',
      explanationEn: 'Identifying the goal, inputs, and outputs clarifies the problem before designing a solution.'
    },
    {
      id: 'sa-dt10-programming',
      titleAr: 'البرمجة والاختبار',
      titleEn: 'Programming and Testing',
      unitAr: 'بناء الحلول الرقمية',
      unitEn: 'Building Digital Solutions',
      conceptsAr: ['استخدام المتغيرات والشروط والتكرار في حل بسيط', 'اختبار حالات مختلفة ومعالجة الأخطاء'],
      conceptsEn: ['Use variables, conditions, and repetition in a simple solution', 'Test different cases and correct errors'],
      visualSteps: [['صمم الخوارزمية', 'Design an algorithm'], ['اكتب التعليمات', 'Write instructions'], ['اختبر حالات متعددة', 'Test multiple cases'], ['صحح الخطأ', 'Fix errors']],
      questionAr: 'لماذا نختبر البرنامج بمدخلات مختلفة؟',
      questionEn: 'Why test a program with different inputs?',
      optionsAr: ['للتأكد من صحة النتائج في حالات متعددة', 'لتغيير لون الشاشة', 'لزيادة حجم الملف فقط', 'لتجنب معرفة المخرجات'],
      optionsEn: ['To check that results are correct across cases', 'To change the screen color', 'Only to increase file size', 'To avoid seeing outputs'],
      answer: 0,
      explanationAr: 'تساعد حالات الاختبار المتنوعة على كشف الأخطاء والتحقق من صحة الحل.',
      explanationEn: 'Multiple test cases help uncover errors and verify the solution.'
    }
  ],
  G11: [
    {
      id: 'sa-dt11-data',
      titleAr: 'إدارة البيانات وتحليلها',
      titleEn: 'Managing and Analyzing Data',
      unitAr: 'البيانات والمعلومات',
      unitEn: 'Data and Information',
      conceptsAr: ['تنظيم السجلات والتحقق من جودة البيانات', 'تلخيص البيانات واختيار تمثيل بصري مناسب'],
      conceptsEn: ['Organize records and check data quality', 'Summarize data and choose a suitable visualization'],
      visualSteps: [['اجمع البيانات', 'Collect data'], ['نظف السجلات', 'Clean records'], ['حلل الأنماط', 'Analyze patterns'], ['اعرض النتيجة', 'Present results']],
      questionAr: 'ما أهمية التحقق من البيانات قبل تحليلها؟',
      questionEn: 'Why validate data before analyzing it?',
      optionsAr: ['لتقليل أثر القيم الخاطئة أو الناقصة', 'لزيادة التكرار في السجلات', 'لإخفاء مصدر البيانات', 'لمنع المقارنة'],
      optionsEn: ['To reduce the effect of incorrect or missing values', 'To duplicate records', 'To hide the data source', 'To prevent comparison'],
      answer: 0,
      explanationAr: 'البيانات غير الدقيقة قد تؤدي إلى استنتاجات مضللة.',
      explanationEn: 'Inaccurate data can lead to misleading conclusions.'
    },
    {
      id: 'sa-dt11-networks',
      titleAr: 'الشبكات والأمن الرقمي',
      titleEn: 'Networks and Digital Security',
      unitAr: 'الاتصال الآمن',
      unitEn: 'Secure Connectivity',
      conceptsAr: ['تفسير دور الأجهزة والخدمات في الشبكة', 'تطبيق المصادقة والتحديثات والنسخ الاحتياطي'],
      conceptsEn: ['Explain the role of devices and services on a network', 'Apply authentication, updates, and backups'],
      visualSteps: [['اتصل بالشبكة', 'Connect to the network'], ['تحقق من الهوية', 'Verify identity'], ['احمِ البيانات', 'Protect data'], ['راقب التحديثات', 'Maintain updates']],
      questionAr: 'أي ممارسة تقلل مخاطر اختراق الحساب؟',
      questionEn: 'Which practice reduces the risk of account compromise?',
      optionsAr: ['استخدام مصادقة متعددة العوامل', 'إعادة استخدام كلمة المرور', 'مشاركة رمز التحقق', 'تعطيل التحديثات'],
      optionsEn: ['Use multi-factor authentication', 'Reuse a password', 'Share verification codes', 'Disable updates'],
      answer: 0,
      explanationAr: 'تضيف المصادقة متعددة العوامل طبقة تحقق إضافية للحساب.',
      explanationEn: 'Multi-factor authentication adds another verification layer to an account.'
    }
  ],
  G12: [
    {
      id: 'sa-dt12-ai',
      titleAr: 'الذكاء الاصطناعي والبيانات',
      titleEn: 'Artificial Intelligence and Data',
      unitAr: 'تطبيقات التقنية الحديثة',
      unitEn: 'Emerging Technology Applications',
      conceptsAr: ['شرح مبسط لتدريب النموذج على أمثلة', 'مراجعة الدقة والتحيز والخصوصية في المخرجات'],
      conceptsEn: ['Explain model training with examples at a high level', 'Review accuracy, bias, and privacy in outputs'],
      visualSteps: [['حدد المهمة', 'Define the task'], ['جهز بيانات مناسبة', 'Prepare suitable data'], ['اختبر النموذج', 'Test the model'], ['راجع الإنصاف والخصوصية', 'Review fairness and privacy']],
      questionAr: 'ما الإجراء المسؤول عند استخدام مخرجات الذكاء الاصطناعي؟',
      questionEn: 'What is a responsible action when using AI-generated output?',
      optionsAr: ['التحقق من الدقة ومراعاة الخصوصية', 'اعتبارها صحيحة دائمًا', 'إدخال بيانات شخصية حساسة', 'نشرها دون مراجعة'],
      optionsEn: ['Check accuracy and consider privacy', 'Assume it is always correct', 'Enter sensitive personal data', 'Publish without review'],
      answer: 0,
      explanationAr: 'قد تخطئ المخرجات أو تتحيز؛ لذا يلزم التحقق وحماية البيانات.',
      explanationEn: 'Outputs can be inaccurate or biased, so verification and data protection matter.'
    },
    {
      id: 'sa-dt12-capstone',
      titleAr: 'تخطيط مشروع تقني وعرضه',
      titleEn: 'Planning and Presenting a Technology Project',
      unitAr: 'المشروع التطبيقي',
      unitEn: 'Applied Project',
      conceptsAr: ['تحديد حاجة المستخدم ونطاق المشروع', 'تطوير نموذج أولي واختباره وتوثيق مصادره'],
      conceptsEn: ['Identify a user need and project scope', 'Build and test a prototype and document its sources'],
      visualSteps: [['حدد الحاجة', 'Identify a need'], ['خطط الحل', 'Plan a solution'], ['أنشئ نموذجًا أوليًا', 'Build a prototype'], ['اختبر واعرض', 'Test and present']],
      questionAr: 'ما الخطوة المناسبة قبل تعميم حل تقني جديد؟',
      questionEn: 'What is a suitable step before deploying a new technology solution widely?',
      optionsAr: ['اختبار النموذج مع مستخدمين والتحقق من المخاطر', 'نشره دون تجربة', 'حذف توثيق المصادر', 'تجاهل ملاحظات المستخدمين'],
      optionsEn: ['Test the prototype with users and check risks', 'Deploy it without testing', 'Delete source documentation', 'Ignore user feedback'],
      answer: 0,
      explanationAr: 'يساعد الاختبار المبكر على تحسين الحل واكتشاف المشكلات قبل التوسع.',
      explanationEn: 'Early testing improves the solution and reveals issues before wider deployment.'
    }
  ]
};

const createLecture = (
  lesson: SupplementaryLesson,
  index: number,
  gradeLevel: 'G4' | 'G5' | 'G6' | 'G10' | 'G11' | 'G12',
  stage: 'primary' | 'secondary'
): Lecture => {
  const lectureId = `${lesson.id}-lecture`;
  const question: Question = {
    id: `${lesson.id}-question`,
    textAr: lesson.questionAr,
    textEn: lesson.questionEn,
    optionsAr: lesson.optionsAr,
    optionsEn: lesson.optionsEn,
    correctIndex: lesson.answer,
    conceptTestedAr: lesson.unitAr,
    conceptTestedEn: lesson.unitEn,
    explanationAr: lesson.explanationAr,
    explanationEn: lesson.explanationEn,
    difficulty: 'easy'
  };
  const visualSteps: LectureDiagramStep[] = lesson.visualSteps.map(([labelAr, labelEn]) => ({ labelAr, labelEn }));
  const stageNoteAr = gradeLevel === 'G4'
    ? 'مواءمة عناوين الدروس وصفحاتها مع الجزء الأول من كتاب المهارات الرقمية للصف الرابع؛ طوبقت مع فهرس PDF ص 7–10. الغلاف يذكر 1448هـ/2026م، فيما يذكر بيان النشر الداخلي في PDF ص 2 عام 1447هـ. الشروح والأنشطة والرسوم والتقويمات من إعداد المنصة وليست منقولة من الكتاب، ولم تراجع صفحات متن الدروس.'
    : stage === 'primary'
      ? 'دروس مهارية مساندة أصلية، وليست نقلًا حرفيًا لفهرس كتاب الوزارة. أضيف رابطا كتابَي الصفين الرابع والخامس عند توفرهما؛ ولم يتسن التحقق من فهرس طبعة الصف السادس.'
      : 'محتوى تقني مساند للمسار التخصصي، وليس ادعاءً بمطابقة كتاب مقرر سعودي أو طبعة محددة؛ يلزم مراجعته مع خطة المسار والكتاب المعتمد في المدرسة.';
  const stageNoteEn = gradeLevel === 'G4'
    ? 'Lesson titles and page references are aligned to Part One of the Grade 4 Digital Skills textbook and checked against PDF contents pp. 7–10. The cover states 1448 AH/2026; internal publication data on PDF p. 2 states 1447 AH. Explanations, activities, diagrams, and assessments are original platform material, not copied from the book; lesson pages were not reviewed.'
    : stage === 'primary'
      ? 'Original supplementary skills lessons, not a verbatim Ministry textbook outline. Links to the available Grade 4 and 5 books are provided; the Grade 6 edition contents could not be verified.'
      : 'Supplementary technical content, not a claim of alignment to a specific Saudi textbook or edition; check against the school’s approved track plan and book.';
  const gradeBookUrl = gradeLevel === 'G4' || gradeLevel === 'G5'
      ? SAUDI_PRIMARY_DIGITAL_SKILLS_TEXTBOOK_URLS[gradeLevel]
      : undefined;
  const primaryBookNoteAr = gradeLevel === 'G4' && lesson.page && lesson.contentsPdfPages
    ? `\n\nمرجع الكتاب: ص ${lesson.page}. صفحة الفهرس في PDF: ${lesson.contentsPdfPages}. ${gradeBookUrl}`
    : gradeBookUrl
      ? `\n\nكتاب وزارة التعليم للاطلاع (لم تتم مطابقة هذا الدرس على فهرسه): ${gradeBookUrl}`
      : '';
  const primaryBookNoteEn = gradeLevel === 'G4' && lesson.page && lesson.contentsPdfPages
    ? `\n\nTextbook reference: p. ${lesson.page}. PDF contents page: ${lesson.contentsPdfPages}. ${gradeBookUrl}`
    : gradeBookUrl
      ? `\n\nMinistry textbook for reference (this lesson has not been cross-checked against its contents): ${gradeBookUrl}`
      : '';

  return {
    id: lectureId,
    order: index + 1,
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn,
    subtitleAr: lesson.unitAr,
    subtitleEn: lesson.unitEn,
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    gradeLevelNameAr: `الصف ${gradeLevel.slice(1)} – ${stage === 'primary' ? 'المهارات الرقمية (مساندة)' : 'تقنية رقمية (مساندة)'}`,
    gradeLevelNameEn: `Grade ${gradeLevel.slice(1)} – Supplementary Digital Skills`,
    termAr: gradeLevel === 'G4' ? 'الجزء الأول — طبعة الغلاف 1448هـ/2026م' : 'محتوى تدريبي مساند',
    termEn: gradeLevel === 'G4' ? 'Part One — 1448 AH/2026 cover edition' : 'Supplementary learning content',
    unitTitleAr: lesson.unitAr,
    unitTitleEn: lesson.unitEn,
    lessonNumberAr: `الدرس ${index + 1}`,
    lessonNumberEn: `Lesson ${index + 1}`,
    keyConceptsAr: lesson.conceptsAr,
    keyConceptsEn: lesson.conceptsEn,
    summaryAr: `${lesson.conceptsAr.join(' ')}\n\nتنبيه المنهج: ${stageNoteAr}${primaryBookNoteAr}`,
    summaryEn: `${lesson.conceptsEn.join(' ')}\n\nCurriculum note: ${stageNoteEn}${primaryBookNoteEn}`,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.conceptsAr.join('\n')}\n\n${stageNoteAr}${primaryBookNoteAr}`,
      contentEn: `${lesson.conceptsEn.join('\n')}\n\n${stageNoteEn}${primaryBookNoteEn}`,
      diagram: {
        id: `${lesson.id}-diagram`,
        figureNumberAr: `شكل (${index + 1})`,
        figureNumberEn: `Figure (${index + 1})`,
        titleAr: `رسم تعليمي: ${lesson.titleAr}`,
        titleEn: `Learning diagram: ${lesson.titleEn}`,
        captionAr: 'رسم توضيحي أصلي من المنصة، وليس صورة من كتاب الوزارة.',
        captionEn: 'An original platform illustration, not an image from a Ministry textbook.',
        diagramType: 'digital_skills',
        visualSteps
      }
    }],
    assessment: {
      id: `${lectureId}-assessment`,
      lectureId,
      titleAr: `تقويم: ${lesson.titleAr}`,
      titleEn: `Assessment: ${lesson.titleEn}`,
      passingScore: 80,
      questions: [question]
    }
  };
};

const createGrade = (
  lessons: SupplementaryLesson[],
  gradeLevel: 'G4' | 'G5' | 'G6' | 'G10' | 'G11' | 'G12',
  stage: 'primary' | 'secondary'
): Lecture[] => lessons.map((lesson, index) => createLecture(lesson, index, gradeLevel, stage));

export const SAUDI_PRIMARY_DIGITAL_SKILLS_SUPPLEMENTARY = {
  G4: createGrade(primaryLessons.G4, 'G4', 'primary'),
  G5: createGrade(primaryLessons.G5, 'G5', 'primary')
};

export const SAUDI_SECONDARY_DIGITAL_TECHNOLOGY_SUPPLEMENTARY = {
  G10: createGrade(secondaryLessons.G10, 'G10', 'secondary'),
  G11: createGrade(secondaryLessons.G11, 'G11', 'secondary'),
  G12: createGrade(secondaryLessons.G12, 'G12', 'secondary')
};
