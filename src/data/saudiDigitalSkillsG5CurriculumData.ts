import type { Lecture, LectureDiagramStep, Question } from '../types';

interface DigitalSkillsLesson {
  titleAr: string;
  titleEn: string;
  page: number;
  focusAr: string;
  focusEn: string;
  visualSteps: [string, string][];
}

interface DigitalSkillsUnit {
  part: 1 | 2;
  number: number;
  titleAr: string;
  titleEn: string;
  page: number;
  contentsPdfPages: string;
  lessons: DigitalSkillsLesson[];
  question: Question;
  aiEnrichment?: boolean;
}

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-mcomp.pdf';

const sourceNoteAr =
  'المصدر: كتاب المهارات الرقمية للصف الخامس الابتدائي، طبعة الغلاف 1448هـ/2026م، وزارة التعليم والمركز الوطني للمناهج. يذكر بيان النشر الداخلي في PDF 2 عام 1447هـ؛ لذلك أُظهر اختلاف السنة عن الغلاف. طوبقت أسماء الوحدات والدروس وأرقام صفحاتها مع فهرس الأجزاء (PDF ص 5)، وفهارس الجزء الأول (PDF ص 7–11) والجزء الثاني (PDF ص 239–241). فُحص الغلاف وبيانات النشر والفهارس فقط، ولم تراجع صفحات الدروس الداخلية. الشروح والأنشطة والرسوم والتقويمات من إعداد المنصة وليست منقولة من الكتاب.';

const sourceNoteEn =
  'Source: the Saudi Ministry of Education and National Center for Curriculum Grade 5 Digital Skills textbook, whose cover states 1448 AH/2026. The internal publication data on PDF p. 2 states 1447 AH; this difference from the cover is disclosed. Unit and lesson titles and page references were checked against the parts listing (PDF p. 5) and the Part One (PDF pp. 7–11) and Part Two (PDF pp. 239–241) contents. Only the cover, publication data, and contents were checked; lesson pages were not reviewed. Explanations, activities, diagrams, and assessments are original platform material, not copied from the textbook.';

const arabicUnitNumbers = ['الأولى', 'الثانية', 'الثالثة', 'الرابعة'] as const;

const makeQuestion = (
  id: string,
  textAr: string,
  textEn: string,
  correctAr: string,
  correctEn: string,
  incorrectAr: [string, string, string],
  incorrectEn: [string, string, string],
  conceptAr: string,
  conceptEn: string,
  explanationAr: string,
  explanationEn: string
): Question => ({
  id,
  textAr,
  textEn,
  optionsAr: [correctAr, ...incorrectAr],
  optionsEn: [correctEn, ...incorrectEn],
  correctIndex: 0,
  conceptTestedAr: conceptAr,
  conceptTestedEn: conceptEn,
  explanationAr,
  explanationEn,
  difficulty: 'easy',
});

const units: DigitalSkillsUnit[] = [
  {
    part: 1,
    number: 1,
    titleAr: 'تعلم الأساسيات',
    titleEn: 'Learning the Basics',
    page: 14,
    contentsPdfPages: '7',
    lessons: [
      {
        titleAr: 'أجهزة الحاسب',
        titleEn: 'Computer Devices',
        page: 15,
        focusAr: 'قارن أنواع أجهزة الحاسب بحسب الاستخدام والحجم وطريقة الحمل، واختر الجهاز الأنسب للمهمة.',
        focusEn: 'Compare computer devices by their uses, size, and portability, then choose one that suits a task.',
        visualSteps: [['حدد المهمة', 'Define the task'], ['قارن الأجهزة', 'Compare devices'], ['راجع المزايا', 'Review features'], ['اختر الجهاز', 'Choose a device']],
      },
      {
        titleAr: 'أجزاء الحاسب',
        titleEn: 'Computer Parts',
        page: 25,
        focusAr: 'تعرف إلى الأجزاء الرئيسة للحاسب وأجهزة الإدخال والإخراج والتخزين، واربط كل جزء بوظيفته.',
        focusEn: 'Identify the main computer parts and input, output, and storage devices, and match each part to its function.',
        visualSteps: [['أدخل البيانات', 'Enter data'], ['عالج المعلومات', 'Process information'], ['اعرض النتيجة', 'Display output'], ['احفظ الملفات', 'Store files']],
      },
      {
        titleAr: 'الملفات والمجلدات',
        titleEn: 'Files and Folders',
        page: 39,
        focusAr: 'نظّم الملفات والمجلدات، وأنشئ اختصارات، وتعرف إلى ضغط الملفات والتخزين السحابي وسلة المحذوفات.',
        focusEn: 'Organize files and folders, create shortcuts, and explore compression, cloud storage, and the recycle bin.',
        visualSteps: [['أنشئ ملفًا', 'Create a file'], ['سمّه ونظّمه', 'Name and organize it'], ['احفظ نسخة مناسبة', 'Choose where to save'], ['استرجع عند الحاجة', 'Restore when needed']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q1',
      'ما الفائدة من تنظيم الملفات في مجلدات ذات أسماء واضحة؟',
      'Why organize files in clearly named folders?',
      'لتسهيل العثور على الملفات لاحقًا',
      'To make files easier to find later',
      ['لإخفاء الملفات نهائيًا', 'لزيادة حجم الملف', 'لمنع حفظ التغييرات'],
      ['To permanently hide files', 'To increase file size', 'To prevent saving changes'],
      'إدارة الملفات والمجلدات',
      'Managing files and folders',
      'يساعد التنظيم والتسمية الواضحة على الوصول إلى الملفات واستعادتها.',
      'Clear naming and organization make files easier to locate and restore.',
    ),
  },
  {
    part: 1,
    number: 2,
    titleAr: 'التعامل مع المستندات',
    titleEn: 'Working with Documents',
    page: 58,
    contentsPdfPages: '7–8',
    lessons: [
      {
        titleAr: 'الصور والرسومات',
        titleEn: 'Images and Drawings',
        page: 62,
        focusAr: 'أدرج صورة من مصدر مناسب أو من جهازك، وعدّلها، واستخدم الأشكال لدعم معنى المستند مع مراعاة حقوق الاستخدام.',
        focusEn: 'Insert an image from an appropriate source or device, edit it, and use shapes to support a document while respecting usage rights.',
        visualSteps: [['حدد الحاجة للصورة', 'Choose an image purpose'], ['تحقق من المصدر', 'Check the source'], ['أدرج وعدّل', 'Insert and edit'], ['راجع الملاءمة', 'Check relevance']],
      },
      {
        titleAr: 'التنسيق المتقدم',
        titleEn: 'Advanced Formatting',
        page: 69,
        focusAr: 'حسّن وضوح المستند بحذف النص المحدد وتنسيق الفقرات وإظهار علامات التنسيق ومراجعة النص.',
        focusEn: 'Improve document readability by editing selected text, formatting paragraphs, displaying formatting marks, and reviewing the text.',
        visualSteps: [['حرر النص', 'Edit text'], ['نسق الفقرات', 'Format paragraphs'], ['أظهر العلامات', 'Show formatting marks'], ['راجع المظهر', 'Review appearance']],
      },
      {
        titleAr: 'إدراج الرسومات التوضيحية',
        titleEn: 'Inserting Illustrations',
        page: 81,
        focusAr: 'استخدم الرسومات التوضيحية وSmartArt لتمثيل العلاقات أو الخطوات، ثم نسّقها بما يخدم الفكرة.',
        focusEn: 'Use illustrations and SmartArt to represent relationships or steps, then format them to support the main idea.',
        visualSteps: [['حدد الفكرة', 'Choose an idea'], ['اختر نوع الرسم', 'Select a visual'], ['أدرج المعلومات', 'Add information'], ['نسق الرسم', 'Format the visual']],
      },
      {
        titleAr: 'التدقيق والطباعة',
        titleEn: 'Proofing and Printing',
        page: 90,
        focusAr: 'دقق الأخطاء، وابحث عن مرادفات ملائمة، ثم عاين المستند وإعدادات الصفحة قبل الطباعة.',
        focusEn: 'Check for errors, find suitable synonyms, then preview the document and page settings before printing.',
        visualSteps: [['راجع النص', 'Review the text'], ['صحح الأخطاء', 'Correct errors'], ['عاين الصفحة', 'Preview the page'], ['اطبع عند الحاجة', 'Print if needed']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q2',
      'ما الخطوة المناسبة قبل طباعة مستند مدرسي؟',
      'What is an appropriate step before printing a school document?',
      'مراجعة النص ومعاينة إعدادات الصفحة',
      'Review the text and preview page settings',
      ['حذف العنوان', 'إخفاء النص كله', 'إيقاف مراجعة المستند'],
      ['Delete the title', 'Hide all text', 'Skip document review'],
      'التدقيق والطباعة',
      'Proofing and printing',
      'تساعد المراجعة والمعاينة على اكتشاف الأخطاء قبل الطباعة.',
      'Review and preview help catch errors before printing.',
    ),
  },
  {
    part: 1,
    number: 3,
    titleAr: 'الوسائط المتعددة',
    titleEn: 'Multimedia',
    page: 100,
    contentsPdfPages: '8–9',
    lessons: [
      {
        titleAr: 'استخدام أجهزة الالتقاط وتحرير مقاطع الصوت',
        titleEn: 'Using Capture Devices and Editing Audio Clips',
        page: 103,
        focusAr: 'تعرّف إلى أجهزة التقاط الوسائط ومنافذها، وانقل الملفات، وميّز أحجامها وامتداداتها، ثم حرر مقطعًا صوتيًا واحفظه.',
        focusEn: 'Explore media capture devices and their ports, transfer files, compare file sizes and extensions, then edit and save an audio clip.',
        visualSteps: [['التقط الصوت', 'Capture audio'], ['انقل الملف', 'Transfer the file'], ['حرر المقطع', 'Edit the clip'], ['احفظ وصدّر', 'Save and export']],
      },
      {
        titleAr: 'البحث عن الوسائط المتعددة وإنشاء وتحرير مقاطع الفيديو',
        titleEn: 'Finding Multimedia and Creating and Editing Video Clips',
        page: 132,
        focusAr: 'ابحث عن صور ومقاطع فيديو مع احترام الملكية الفكرية، ثم أنشئ مقطعًا واحفظه وشاركه بطريقة مناسبة.',
        focusEn: 'Find images and videos while respecting intellectual property, then create, save, and share a clip appropriately.',
        visualSteps: [['حدد الوسائط المطلوبة', 'Define needed media'], ['تحقق من حقوق الاستخدام', 'Check usage rights'], ['حرر المقطع', 'Edit the clip'], ['احفظ وشارك بأمان', 'Save and share safely']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q3',
      'ما الذي ينبغي التحقق منه قبل استخدام صورة أو مقطع من الإنترنت؟',
      'What should you check before using an image or clip from the internet?',
      'ملاءمته وحقوق استخدامه',
      'Its relevance and usage rights',
      ['لونه فقط', 'حجم الشاشة', 'اسم المجلد المحلي'],
      ['Only its color', 'The screen size', 'The local folder name'],
      'حقوق استخدام الوسائط',
      'Media usage rights',
      'ينبغي اختيار وسائط مناسبة والتحقق من الإذن أو الترخيص قبل استخدامها.',
      'Choose relevant media and check its permission or licence before use.',
    ),
  },
  {
    part: 1,
    number: 4,
    titleAr: 'البرمجة والتفاعل في سكراتش',
    titleEn: 'Programming and Interaction in Scratch',
    page: 158,
    contentsPdfPages: '9–11',
    lessons: [
      {
        titleAr: 'كيفية تصميم برنامج',
        titleEn: 'How to Design a Program',
        page: 162,
        focusAr: 'حلل المهمة إلى خطوات مرتبة، وميّز التعليمات والمدخلات والمخرجات، ثم مثّل الخوارزمية بمخطط انسيابي.',
        focusEn: 'Break a task into ordered steps, identify instructions, inputs, and outputs, then represent the algorithm with a flowchart.',
        visualSteps: [['حدد المهمة', 'Define the task'], ['رتب التعليمات', 'Order instructions'], ['ارسم المخطط', 'Draw the flowchart'], ['اختبر الخطوات', 'Test the steps']],
      },
      {
        titleAr: 'الكائنات في سكراتش',
        titleEn: 'Sprites in Scratch',
        page: 170,
        focusAr: 'أضف كائنًا رسوميًا، وعدل مظهره وحركته، ثم استخدم التكرار والصوت لإثراء مشروع تفاعلي.',
        focusEn: 'Add a sprite, adjust its appearance and movement, then use repetition and sound in an interactive project.',
        visualSteps: [['اختر كائنًا', 'Choose a sprite'], ['عدّل مظهره', 'Edit its appearance'], ['برمج حركته', 'Program its movement'], ['أضف صوتًا واختبر', 'Add sound and test']],
      },
      {
        titleAr: 'المعاملات الشرطية',
        titleEn: 'Conditional Operators',
        page: 182,
        focusAr: 'استخدم السؤال والإجابة والشرط لاختيار استجابة للكائن، وتحقق من أن البرنامج ينفذ الفرع الصحيح.',
        focusEn: 'Use questions, answers, and conditions to select a sprite response, then check that the program follows the correct branch.',
        visualSteps: [['استقبل الإجابة', 'Receive an answer'], ['افحص الشرط', 'Check a condition'], ['اختر الفرع', 'Choose a branch'], ['اختبر النتيجة', 'Test the result']],
      },
      {
        titleAr: 'الحركة في سكراتش',
        titleEn: 'Movement in Scratch',
        page: 193,
        focusAr: 'برمج الحركة باستخدام الاتجاه والتكرار والارتداد عند الحافة، واختبر استجابة الكائن لمفتاح لوحة المفاتيح.',
        focusEn: 'Program movement with direction, repetition, and edge bouncing, then test a sprite’s response to a keyboard key.',
        visualSteps: [['حدد الاتجاه', 'Set a direction'], ['أضف التكرار', 'Add repetition'], ['تعامل مع الحافة', 'Handle the edge'], ['اختبر المفتاح', 'Test a key']],
      },
      {
        titleAr: 'رسائل البث',
        titleEn: 'Broadcast Messages',
        page: 207,
        focusAr: 'استخدم الأحداث ورسائل البث لتنسيق عمل مقاطع برمجية متعددة، ثم راجع تسلسل الاستجابة في مشروعك.',
        focusEn: 'Use events and broadcast messages to coordinate multiple scripts, then review the response sequence in your project.',
        visualSteps: [['ابدأ حدثًا', 'Start an event'], ['أرسل رسالة', 'Broadcast a message'], ['استقبل الرسالة', 'Receive the message'], ['نسق الاستجابة', 'Coordinate the response']],
      },
      {
        titleAr: 'الاستشعار',
        titleEn: 'Sensing',
        page: 217,
        focusAr: 'استخدم لبنات الاستشعار للتحقق من ملامسة لون أو مؤشر الفأرة، ثم اختبر الاستجابة وعالج الأخطاء.',
        focusEn: 'Use sensing blocks to check whether a sprite touches a color or the mouse pointer, then test the response and fix errors.',
        visualSteps: [['اختر لبنة استشعار', 'Choose a sensing block'], ['حدد ما يلامسه الكائن', 'Define what is sensed'], ['اربط بشرط', 'Connect a condition'], ['اختبر وصحح', 'Test and debug']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q4',
      'ما فائدة رسالة البث في مشروع سكراتش؟',
      'What is the purpose of a broadcast message in a Scratch project?',
      'تنسيق استجابة مقاطع برمجية مختلفة لحدث',
      'Coordinate responses from different scripts to an event',
      ['حذف الكائنات تلقائيًا', 'تغيير اسم الملف فقط', 'إيقاف جميع الأحداث دائمًا'],
      ['Automatically delete sprites', 'Only rename the file', 'Always stop all events'],
      'الأحداث ورسائل البث',
      'Events and broadcast messages',
      'تتيح رسائل البث لمقاطع متعددة أن تتفاعل مع الحدث نفسه.',
      'Broadcast messages let multiple scripts respond to the same event.',
    ),
  },
  {
    part: 2,
    number: 1,
    titleAr: 'أدوات البحث والاتصال ومشاركة الملفات',
    titleEn: 'Search, Communication, and File-Sharing Tools',
    page: 242,
    contentsPdfPages: '239',
    lessons: [
      {
        titleAr: 'الإنترنت والشبكة العنكبوتية',
        titleEn: 'The Internet and the World Wide Web',
        page: 245,
        focusAr: 'ميّز شبكة الحاسب والإنترنت والشبكة العنكبوتية، واستخدم محرك البحث وخصائصه للوصول إلى معلومات مناسبة.',
        focusEn: 'Distinguish computer networks, the internet, and the web, and use search engines and their features to find suitable information.',
        visualSteps: [['حدد سؤال البحث', 'Define a search question'], ['اختر كلمات دقيقة', 'Choose precise terms'], ['افحص النتائج', 'Review results'], ['احفظ مصدرًا مناسبًا', 'Save a suitable source']],
      },
      {
        titleAr: 'الإنترنت وأدوات التواصل',
        titleEn: 'The Internet and Communication Tools',
        page: 255,
        focusAr: 'تعرّف إلى البريد الإلكتروني والمحادثة ومجموعات التواصل والمكالمات الصوتية والمرئية، واختر وسيلة مناسبة وآمنة.',
        focusEn: 'Explore email, chat, communication groups, and audio and video calls, and choose an appropriate, safe tool.',
        visualSteps: [['اختر وسيلة التواصل', 'Choose a communication tool'], ['حدد المستلمين', 'Identify recipients'], ['اكتب رسالة مناسبة', 'Compose an appropriate message'], ['تواصل باحترام', 'Communicate respectfully']],
      },
      {
        titleAr: 'مشاركة الملفات',
        titleEn: 'Sharing Files',
        page: 269,
        focusAr: 'استخدم التخزين السحابي للوصول إلى الملفات ومشاركتها، واضبط صلاحيات الوصول وتحقق من المستلم قبل الإرسال.',
        focusEn: 'Use cloud storage to access and share files, set access permissions, and check recipients before sending.',
        visualSteps: [['اختر الملف', 'Choose a file'], ['حدد المستلم', 'Choose a recipient'], ['اضبط الصلاحيات', 'Set permissions'], ['تحقق من المشاركة', 'Verify sharing']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q5',
      'ما الإجراء الآمن عند مشاركة ملف عبر التخزين السحابي؟',
      'What is a safe action when sharing a file through cloud storage?',
      'التحقق من المستلم وضبط صلاحيات الوصول',
      'Verify the recipient and set access permissions',
      ['إتاحته للجميع دائمًا', 'مشاركة كلمة المرور', 'إرسال الرابط دون مراجعته'],
      ['Always make it public', 'Share the password', 'Send the link without checking it'],
      'مشاركة الملفات بأمان',
      'Sharing files safely',
      'مراجعة المستلمين والصلاحيات تقلل المشاركة غير المقصودة.',
      'Checking recipients and permissions helps prevent unintended sharing.',
    ),
  },
  {
    part: 2,
    number: 2,
    titleAr: 'جداول البيانات',
    titleEn: 'Spreadsheets',
    page: 284,
    contentsPdfPages: '239–240',
    lessons: [
      {
        titleAr: 'الصفوف والأعمدة',
        titleEn: 'Rows and Columns',
        page: 287,
        focusAr: 'نظم بيانات الجدول بتغيير عرض الأعمدة وارتفاع الصفوف، ودمج الخلايا والتفاف النص ومحاذاته.',
        focusEn: 'Organize spreadsheet data by changing column widths and row heights, merging cells, wrapping text, and aligning content.',
        visualSteps: [['أدخل البيانات', 'Enter data'], ['اضبط الصفوف والأعمدة', 'Adjust rows and columns'], ['نسق الخلايا', 'Format cells'], ['راجع القراءة', 'Check readability']],
      },
      {
        titleAr: 'العمليات الحسابية',
        titleEn: 'Calculations',
        page: 303,
        focusAr: 'استخدم الدوال الحسابية والتعبئة التلقائية، ونسق الأعداد العشرية، ثم تحقق من النتائج في الجدول.',
        focusEn: 'Use spreadsheet functions and autofill, format decimal numbers, and check the resulting values.',
        visualSteps: [['حدد نطاق البيانات', 'Select a data range'], ['استخدم دالة', 'Use a function'], ['املأ الخلايا', 'Autofill cells'], ['تحقق من الناتج', 'Check the result']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q6',
      'أي دالة تساعد على جمع مجموعة من القيم في جدول بيانات؟',
      'Which function helps add a set of values in a spreadsheet?',
      'دالة المجموع',
      'The sum function',
      ['دالة عرض الصور', 'دالة تغيير لون الشاشة', 'دالة حذف الأعمدة'],
      ['An image-display function', 'A screen-color function', 'A column-deletion function'],
      'الدوال الحسابية',
      'Spreadsheet functions',
      'تجمع دالة المجموع القيم المحددة في نطاق خلايا.',
      'The sum function adds the values in a selected cell range.',
    ),
  },
  {
    part: 2,
    number: 3,
    titleAr: 'وسائل التواصل الاجتماعي',
    titleEn: 'Social Media',
    page: 318,
    contentsPdfPages: '240–241',
    lessons: [
      {
        titleAr: 'وسائل التواصل الاجتماعي',
        titleEn: 'Social Media',
        page: 320,
        focusAr: 'تعرف إلى وسائل التواصل وقواعد الأمان على الإنترنت، واستخدم إعدادات الحماية للحفاظ على الجهاز والحساب.',
        focusEn: 'Explore social media and online safety rules, and use protection settings to safeguard devices and accounts.',
        visualSteps: [['اختر منصة مناسبة', 'Choose a suitable platform'], ['راجع الخصوصية', 'Review privacy'], ['احمِ الحساب والجهاز', 'Protect the account and device'], ['تواصل بمسؤولية', 'Communicate responsibly']],
      },
      {
        titleAr: 'التدوين',
        titleEn: 'Blogging',
        page: 326,
        focusAr: 'خطط تدوينة واضحة، وأنشئ مدونة وحررها، وأدرج صورًا أو مقاطع مناسبة، ثم عاين النشر وراجع التعليقات.',
        focusEn: 'Plan a clear post, create and edit a blog, add suitable images or clips, preview publication, and review comments.',
        visualSteps: [['خطط المحتوى', 'Plan the content'], ['أنشئ التدوينة', 'Create a post'], ['أدرج الوسائط', 'Add media'], ['عاين وانشر', 'Preview and publish']],
      },
      {
        titleAr: 'الملكية الفكرية',
        titleEn: 'Intellectual Property',
        page: 347,
        focusAr: 'احترم حقوق المؤلف، وتعرف إلى التراخيص مثل المشاع الإبداعي، وتجنب نسخ المواد أو نشرها دون إذن.',
        focusEn: 'Respect copyright, recognize licences such as Creative Commons, and avoid copying or publishing material without permission.',
        visualSteps: [['حدد صاحب العمل', 'Identify the creator'], ['تحقق من الترخيص', 'Check the licence'], ['اذكر المصدر', 'Credit the source'], ['استخدم بإذن', 'Use with permission']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q7',
      'ما التصرف المناسب قبل نشر صورة في مدونة؟',
      'What should you do before publishing an image on a blog?',
      'التحقق من حقوق استخدامها وذكر مصدرها عند الحاجة',
      'Check its usage rights and credit its source when required',
      ['إزالة اسم صاحبها', 'افتراض أن كل الصور مباحة', 'نشرها دون مراجعة'],
      ['Remove its creator’s name', 'Assume every image is free to use', 'Publish it without review'],
      'الملكية الفكرية',
      'Intellectual property',
      'يساعد التحقق من الترخيص ونسب العمل إلى صاحبه على احترام حقوق الاستخدام.',
      'Checking the licence and crediting the creator helps respect usage rights.',
    ),
  },
  {
    part: 2,
    number: 4,
    titleAr: 'برمجة الروبوت',
    titleEn: 'Robot Programming',
    page: 354,
    contentsPdfPages: '241',
    lessons: [
      {
        titleAr: 'الروبوتات في حياتنا اليومية',
        titleEn: 'Robots in Our Daily Lives',
        page: 359,
        focusAr: 'تعرف إلى ماهية الروبوت وأنواعه واستخداماته وآثاره، ثم خطط تعليمات تحركه لرسم شكل بسيط.',
        focusEn: 'Explore what robots are, their types, uses, and effects, then plan instructions for a robot to draw a simple shape.',
        visualSteps: [['حدد المهمة', 'Define a task'], ['تعرف إلى الروبوت', 'Identify the robot'], ['رتب الأوامر', 'Order instructions'], ['اختبر الحركة', 'Test movement']],
      },
      {
        titleAr: 'استخدام التكرارات',
        titleEn: 'Using Repetitions',
        page: 368,
        focusAr: 'استخدم التكرار لتقليل الأوامر المتشابهة، واختبر زوايا الحركة لرسم مثلث ومستطيل.',
        focusEn: 'Use repetition to reduce repeated instructions, and test movement angles to draw a triangle and rectangle.',
        visualSteps: [['حدد الحركة المتكررة', 'Identify repeated movement'], ['اضبط العدد والزاوية', 'Set count and angle'], ['شغل التكرار', 'Run the loop'], ['تحقق من الشكل', 'Check the shape']],
      },
      {
        titleAr: 'رسم مكعب',
        titleEn: 'Drawing a Cube',
        page: 383,
        focusAr: 'ركب أوامر الحركة والانعطاف والمؤثرات لتمثيل أشكال ومسارات، ثم اختبر البرنامج وعدل الخطوات عند الحاجة.',
        focusEn: 'Combine movement, turning, and output instructions to represent shapes and routes, then test and revise the program.',
        visualSteps: [['خطط للمسار', 'Plan a route'], ['رتب أوامر الحركة', 'Order movement commands'], ['أضف الاستجابة', 'Add output'], ['اختبر وصحح', 'Test and debug']],
      },
    ],
    question: makeQuestion(
      'saudi-g5-ds-q8',
      'كيف تساعد أوامر التكرار عند برمجة الروبوت؟',
      'How do repetition instructions help when programming a robot?',
      'تختصر تنفيذ مجموعة من التعليمات المتكررة',
      'They shorten the execution of repeated instructions',
      ['تمنع الروبوت من الحركة', 'تحذف البرنامج', 'تغير شكل الجهاز فقط'],
      ['They prevent the robot from moving', 'They delete the program', 'They only change the device’s appearance'],
      'التكرار في برمجة الروبوت',
      'Repetition in robot programming',
      'تساعد حلقة التكرار على تنفيذ حركة أو مجموعة أوامر عدة مرات.',
      'A repetition loop can execute a movement or group of commands multiple times.',
    ),
    aiEnrichment: true,
  },
];

const enrichmentLabels: [string, string][] = [
  ['أهداف التعلم', 'Learning objectives'],
  ['الاستخدام المسؤول', 'Responsible use'],
  ['التحقق من المخرجات', 'Verify outputs'],
  ['مهمة تطبيقية', 'Applied task'],
];

export const SAUDI_G5_DIGITAL_SKILLS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G5_DIGITAL_SKILLS_UNIT_COUNT = units.length;
export const SAUDI_G5_DIGITAL_SKILLS_LESSON_COUNT = units.reduce(
  (total, unit) => total + unit.lessons.length,
  0
);
export const SAUDI_G5_DIGITAL_SKILLS_TABLE_OF_CONTENTS = units.flatMap((unit) =>
  unit.lessons.map((lesson) => ({
    part: unit.part,
    unitTitleAr: unit.titleAr,
    titleAr: lesson.titleAr,
    page: lesson.page,
  }))
);

const createLessonSection = (
  unit: DigitalSkillsUnit,
  lesson: DigitalSkillsLesson,
  unitOrder: number,
  lessonOrder: number
) => {
  const visualSteps: LectureDiagramStep[] = lesson.visualSteps.map(([labelAr, labelEn]) => ({
    labelAr,
    labelEn,
  }));
  return {
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn,
    contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص ${lesson.page}. هذا شرح إرشادي أصلي مبني على عنوان الدرس والفهرس، وليس نقلًا من متن الكتاب.`,
    contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.page}. This original guidance is based on the lesson title and contents, not copied from the textbook text.`,
    diagram: {
      id: `saudi-g5-digital-skills-1448-part-${unit.part}-unit-${unit.number}-lesson-${lessonOrder}`,
      figureNumberAr: `شكل (${unitOrder}-${lessonOrder})`,
      figureNumberEn: `Figure (${unitOrder}-${lessonOrder})`,
      titleAr: `تصور بصري: ${lesson.titleAr}`,
      titleEn: `Visual guide: ${lesson.titleEn}`,
      captionAr: 'رسم تعليمي أصلي مرتبط بموضوع الدرس، من إعداد المنصة وليس صورة من الكتاب.',
      captionEn: 'An original platform-created visual related to the lesson, not an image from the textbook.',
      diagramType: 'digital_skills' as const,
      visualSteps,
    },
  };
};

export const SAUDI_G5_DIGITAL_SKILLS_LECTURES: Lecture[] = units.map((unit, index) => {
  const order = index + 1;
  const partLabelAr = unit.part === 1 ? 'الجزء الأول من المقرر' : 'الجزء الثاني من المقرر';
  const partLabelEn = unit.part === 1 ? 'Part One' : 'Part Two';
  const unitTitleAr = `الوحدة ${arabicUnitNumbers[unit.number - 1]}: ${unit.titleAr}`;
  const unitTitleEn = `Unit ${unit.number}: ${unit.titleEn}`;
  const sections = unit.lessons.map((lesson, lessonIndex) =>
    createLessonSection(unit, lesson, order, lessonIndex + 1)
  );

  if (unit.aiEnrichment) {
    const visualSteps: LectureDiagramStep[] = enrichmentLabels.map(([labelAr, labelEn]) => ({
      labelAr,
      labelEn,
    }));
    sections.push({
      titleAr: 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)',
      titleEn: 'Artificial Intelligence Section (Enrichment; not a numbered lesson)',
      contentAr: 'يسرد الفهرس أهداف التعلم، والذكاء الاصطناعي في الواقع العملي وتقنياته وأمثلة من الحياة اليومية، وأخلاقياته والتحقق من إجاباته، ومهمة تطبيقية عن مايكروسوفت كليبشامب. هذا قسم إثرائي منفصل وليس درسًا مرقمًا. مرجع الفهرس: ص 410–418.',
      contentEn: 'The contents list learning objectives, AI in practice and its technologies and daily-life examples, ethics and checking AI answers, and an applied task about Microsoft Clipchamp. This is a separate enrichment section, not a numbered lesson. Contents reference: pp. 410–418.',
      diagram: {
        id: 'saudi-g5-digital-skills-1448-ai-enrichment',
        figureNumberAr: 'إثراء بصري',
        figureNumberEn: 'Enrichment visual',
        titleAr: 'الذكاء الاصطناعي: استخدام مسؤول وتحقق',
        titleEn: 'Artificial Intelligence: Responsible Use and Verification',
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        captionEn: 'An original platform-created illustration, not an image from the textbook.',
        diagramType: 'digital_skills' as const,
        visualSteps,
      },
    });
  }

  return {
    id: `saudi-g5-digital-skills-1448-part-${unit.part}-unit-${unit.number}`,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `${partLabelAr} — الصف الخامس الابتدائي — ص ${unit.page} — فهرس PDF ص ${unit.contentsPdfPages}`,
    subtitleEn: `${partLabelEn} — Grade 5 — p. ${unit.page} — PDF contents p. ${unit.contentsPdfPages}`,
    descriptionAr: `${sourceNoteAr}\n\nتضم الوحدة ${unit.lessons.length} دروس مرقمة. الشرح والأنشطة والرسوم والأسئلة من إعداد المنصة ومساندة لدراسة الكتاب.`,
    descriptionEn: `${sourceNoteEn}\n\nThis unit contains ${unit.lessons.length} numbered lessons. Explanations, activities, diagrams, and assessments are original supplementary platform material.`,
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب المهارات الرقمية',
    ministryEn: 'Saudi Ministry of Education — Digital Skills textbook',
    gradeLevelNameAr: 'الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Grade 5',
    termAr: `${partLabelAr} — طبعة الغلاف 1448هـ/2026م`,
    termEn: `${partLabelEn} — 1448 AH/2026 cover edition`,
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `${unitTitleAr} — ${unit.lessons.length} دروس مرقمة`,
    lessonNumberEn: `${unitTitleEn} — ${unit.lessons.length} numbered lessons`,
    warmupHookAr: `ما المهارة الرقمية التي تحتاجها لإنجاز مهمة مرتبطة بـ«${unit.titleAr}»؟`,
    warmupHookEn: `Which digital skill would help you complete a task related to “${unit.titleEn}”?`,
    learningOutcomesAr: [
      `يتعرف عناوين الدروس الواردة في الوحدة «${unit.titleAr}» ويربطها بصفحاتها.`,
      'يطبق المهارات الرقمية الواردة في موضوعات الوحدة بالتدرب والمراجعة مع معلم المادة.',
    ],
    learningOutcomesEn: [
      `Identify the lesson headings in “${unit.titleEn}” and match them to their page references.`,
      'Practise the digital skills named in the unit with guidance from the teacher.',
    ],
    keyConceptsAr: unit.lessons.map((lesson) => `${lesson.titleAr} (ص ${lesson.page})`),
    keyConceptsEn: unit.lessons.map((lesson) => `${lesson.titleEn} (p. ${lesson.page})`),
    summaryAr: `${unit.lessons.map((lesson) => `${lesson.titleAr} (ص ${lesson.page})`).join('\n')}\n\n${unit.aiEnrichment ? 'يتبع دروس الوحدة قسم إثرائي عن الذكاء الاصطناعي، غير مرقم كدرس.\n\n' : ''}${sourceNoteAr}`,
    summaryEn: `${unit.lessons.map((lesson) => `${lesson.titleEn} (p. ${lesson.page})`).join('\n')}\n\n${unit.aiEnrichment ? 'The unit also includes an AI enrichment section that is not a numbered lesson.\n\n' : ''}${sourceNoteEn}`,
    sections,
    assessment: {
      id: `saudi-g5-digital-skills-1448-part-${unit.part}-unit-${unit.number}-assessment`,
      lectureId: `saudi-g5-digital-skills-1448-part-${unit.part}-unit-${unit.number}`,
      titleAr: `تقويم الوحدة ${arabicUnitNumbers[unit.number - 1]}: ${unit.titleAr}`,
      titleEn: `Unit ${unit.number} Check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question],
    },
  };
});
