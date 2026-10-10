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
  contentsPdfPage: number;
  lessons: DigitalSkillsLesson[];
  question: Question;
  aiEnrichment?: boolean;
}

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K06-SM1-mcomp.pdf';

const sourceNoteAr =
  'المصدر: كتاب المهارات الرقمية للصف السادس الابتدائي، طبعة الغلاف 1448هـ/2026م، وزارة التعليم والمركز الوطني للمناهج. طوبقت أسماء الوحدات والدروس وأرقام صفحاتها مع فهرس الأجزاء (صفحة PDF 5)، وفهارس الجزأين (صفحات PDF 7–9 و205–207). يسجل بيان النشر الداخلي في PDF 2 سنة 1447هـ؛ لذلك أُظهر اختلاف السنة عن الغلاف. فُحص الغلاف وبيانات النشر والفهارس فقط، ولم تراجع صفحات الدروس الداخلية. الشروح والأنشطة والرسوم والتقويمات من إعداد المنصة، وليست منقولة من الكتاب.';
const sourceNoteEn =
  'Source: the Saudi Ministry of Education and National Center for Curriculum Grade 6 Digital Skills textbook, whose cover states 1448 AH/2026. Unit and lesson titles and page references were checked against the part listing (PDF p. 5) and the two contents sections (PDF pp. 7–9 and 205–207). The internal publication data on PDF p. 2 records 1447 AH; this difference from the cover is disclosed. Only the cover, publication data, and contents were checked; lesson pages were not reviewed. Explanations, activities, diagrams, and assessments are original platform material, not copied from the textbook.';

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
    titleAr: 'التصميم ثلاثي الأبعاد',
    titleEn: 'Three-Dimensional Design',
    page: 10,
    contentsPdfPage: 7,
    lessons: [
      {
        titleAr: 'مقدمة إلى النمذجة ثلاثية الأبعاد',
        titleEn: 'Introduction to 3D Modeling',
        page: 12,
        focusAr: 'تعرّف إلى النمذجة ثلاثية الأبعاد وتطبيقاتها، وميّز الأشكال ثنائية الأبعاد من الأشكال ثلاثية الأبعاد، ثم استكشف إنشاء تصميم في تينكركاد.',
        focusEn: 'Explore 3D modeling and its applications, distinguish two-dimensional from three-dimensional shapes, and try creating a design in Tinkercad.',
        visualSteps: [
          ['تطبيقات النمذجة', 'Modeling applications'],
          ['تمييز الأبعاد', 'Compare dimensions'],
          ['استكشاف تينكركاد', 'Explore Tinkercad'],
          ['إنشاء تصميم', 'Create a design'],
        ],
      },
      {
        titleAr: 'معالجة الأشكال ثلاثية الأبعاد',
        titleEn: 'Manipulating 3D Shapes',
        page: 37,
        focusAr: 'طبّق أدوات معالجة الأشكال ثلاثية الأبعاد لبناء تصميم حامل المستلزمات المكتبية.',
        focusEn: 'Use 3D shape-manipulation tools to build a design for an office-supplies holder.',
        visualSteps: [
          ['اختيار الأشكال', 'Choose shapes'],
          ['معالجة المجسمات', 'Manipulate 3D shapes'],
          ['ترتيب المكونات', 'Arrange components'],
          ['تصميم حامل', 'Design a holder'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q1',
      'ما الذي يميز النموذج ثلاثي الأبعاد عن الشكل ثنائي الأبعاد؟',
      'What distinguishes a 3D model from a 2D shape?',
      'له طول وعرض وارتفاع',
      'It has length, width, and height',
      ['يعرض طولًا فقط', 'يتكون من نص فقط', 'لا يمكن عرضه على شاشة'],
      ['It shows only length', 'It consists only of text', 'It cannot be displayed on a screen'],
      'الأشكال ثنائية وثلاثية الأبعاد',
      'Two- and three-dimensional shapes',
      'يتضمن النموذج ثلاثي الأبعاد الطول والعرض والارتفاع.',
      'A three-dimensional model has length, width, and height.',
    ),
  },
  {
    part: 1,
    number: 2,
    titleAr: 'جداول البيانات',
    titleEn: 'Spreadsheets',
    page: 58,
    contentsPdfPage: 7,
    lessons: [
      {
        titleAr: 'تنفيذ العمليات الحسابية',
        titleEn: 'Performing Calculations',
        page: 61,
        focusAr: 'استخدم أولوية العمليات والأقواس والأسس والنسب المئوية عند كتابة المعادلات وتنفيذها في برنامج إكسل.',
        focusEn: 'Use operation precedence, parentheses, exponents, and percentages when writing and calculating formulas in Excel.',
        visualSteps: [
          ['أولوية العمليات', 'Operation order'],
          ['كتابة المعادلة', 'Enter a formula'],
          ['استخدام الأقواس', 'Use parentheses'],
          ['تحقق من الناتج', 'Check the result'],
        ],
      },
      {
        titleAr: 'المخططات البيانية',
        titleEn: 'Charts',
        page: 79,
        focusAr: 'اختر مخططًا مناسبًا لبياناتك، وأدرجه في ورقة العمل، ثم نسّق تسميات البيانات واتجاه الصفحة قبل الطباعة.',
        focusEn: 'Choose a suitable chart, insert it in a worksheet, then format data labels and page orientation before printing.',
        visualSteps: [
          ['تنظيم البيانات', 'Organize data'],
          ['اختيار المخطط', 'Choose a chart'],
          ['إظهار التسميات', 'Show labels'],
          ['إعداد الطباعة', 'Prepare to print'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q2',
      'ما الاستخدام المناسب للمخطط البياني في جدول البيانات؟',
      'What is an appropriate use of a chart in a spreadsheet?',
      'عرض البيانات بصريًا ومقارنة القيم',
      'Display data visually and compare values',
      ['حذف البيانات من الجدول', 'استبدال جميع الصيغ بصورة', 'تغيير كلمة مرور الجهاز'],
      ['Delete the data in the table', 'Replace every formula with a picture', 'Change the device password'],
      'المخططات البيانية',
      'Charts',
      'يساعد المخطط البياني على عرض البيانات ومقارنة قيمها.',
      'A chart helps display data and compare its values.',
    ),
  },
  {
    part: 1,
    number: 3,
    titleAr: 'قواعد البيانات',
    titleEn: 'Databases',
    page: 94,
    contentsPdfPage: 8,
    lessons: [
      {
        titleAr: 'مقدمة عن قواعد البيانات',
        titleEn: 'Introduction to Databases',
        page: 97,
        focusAr: 'تعرّف إلى أنواع البيانات وبنية قاعدة البيانات، وميّز الجدول والسجل والحقل.',
        focusEn: 'Explore data types and database structure, and distinguish a table, a record, and a field.',
        visualSteps: [
          ['أنواع البيانات', 'Data types'],
          ['قاعدة البيانات', 'Database'],
          ['الجدول', 'Table'],
          ['السجل والحقل', 'Record and field'],
        ],
      },
      {
        titleAr: 'إنشاء قاعدة بيانات',
        titleEn: 'Creating a Database',
        page: 108,
        focusAr: 'أنشئ حقول قاعدة البيانات، وأضف السجلات بطريقة منظمة، ثم راجع اتساق المدخلات.',
        focusEn: 'Create database fields, add records in an organized way, then review the consistency of the entries.',
        visualSteps: [
          ['إنشاء الحقول', 'Create fields'],
          ['تحديد نوع البيانات', 'Set data types'],
          ['إضافة السجلات', 'Add records'],
          ['مراجعة المدخلات', 'Review entries'],
        ],
      },
      {
        titleAr: 'الفرز والتصفية',
        titleEn: 'Sorting and Filtering',
        page: 118,
        focusAr: 'رتّب سجلات البيانات بمعيار مناسب، واستخدم التصفية لإظهار السجلات التي تحقق شرطًا محددًا.',
        focusEn: 'Sort records using a suitable criterion and filter the data to show records that meet a selected condition.',
        visualSteps: [
          ['تحديد المعيار', 'Choose a criterion'],
          ['فرز السجلات', 'Sort records'],
          ['تحديد شرط', 'Set a condition'],
          ['عرض النتائج', 'View results'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q3',
      'في قاعدة البيانات، ما الجزء الذي يصف نوعًا واحدًا من المعلومات في الجدول؟',
      'In a database, which part describes one type of information in a table?',
      'الحقل',
      'A field',
      ['السجل كاملًا', 'المخطط البياني', 'اتجاه الصفحة'],
      ['An entire record', 'A chart', 'Page orientation'],
      'الجدول والسجل والحقل',
      'Tables, records, and fields',
      'يمثل الحقل نوعًا محددًا من البيانات في الجدول.',
      'A field represents one specific type of data in a table.',
    ),
  },
  {
    part: 1,
    number: 4,
    titleAr: 'البرمجة باستخدام سكراتش',
    titleEn: 'Programming with Scratch',
    page: 130,
    contentsPdfPage: 8,
    lessons: [
      {
        titleAr: 'التكرار في سكراتش',
        titleEn: 'Repetition in Scratch',
        page: 134,
        focusAr: 'استخدم لبنة «كرّر حتى» لتكرار الأوامر إلى أن يتحقق شرط، وجرّبها في لعبة المتاهة.',
        focusEn: 'Use a repeat-until block to repeat instructions until a condition is met, and try it in a maze game.',
        visualSteps: [
          ['اختيار شرط', 'Choose a condition'],
          ['إضافة كرّر حتى', 'Add repeat-until'],
          ['تحريك الكائن', 'Move the sprite'],
          ['اختبار المتاهة', 'Test the maze'],
        ],
      },
      {
        titleAr: 'برمجة العمليات الحسابية',
        titleEn: 'Programming Arithmetic Operations',
        page: 142,
        focusAr: 'مثّل العمليات الحسابية في سكراتش، واستخدم المتغيرات والعدادات لتنفيذها والتحقق من النتيجة.',
        focusEn: 'Represent arithmetic operations in Scratch and use variables and counters to calculate and check a result.',
        visualSteps: [
          ['اختيار العملية', 'Choose an operation'],
          ['إنشاء متغير', 'Create a variable'],
          ['تنفيذ الحساب', 'Calculate'],
          ['عرض النتيجة', 'Show the result'],
        ],
      },
      {
        titleAr: 'اتخاذ القرارات',
        titleEn: 'Making Decisions',
        page: 153,
        focusAr: 'استخدم شرط «إذا» و«وإلا» لبناء مقطع برمجي يختار إجراءً بحسب تحقق الشرط.',
        focusEn: 'Use an if/else condition to build a program that chooses an action based on whether a condition is met.',
        visualSteps: [
          ['اختبار الشرط', 'Test a condition'],
          ['اختيار إذا', 'Choose if'],
          ['تحديد وإلا', 'Set else'],
          ['مقارنة النتيجة', 'Compare outcomes'],
        ],
      },
      {
        titleAr: 'الإحداثيات في سكراتش',
        titleEn: 'Coordinates in Scratch',
        page: 160,
        focusAr: 'استخدم نظام الإحداثيات لتحريك الكائن وتوضيح موضعه، وجرّب التحكم فيه باستخدام لوحة المفاتيح.',
        focusEn: 'Use coordinates to move a sprite and describe its position, then try controlling it with the keyboard.',
        visualSteps: [
          ['تحديد المحورين', 'Identify the axes'],
          ['قراءة الإحداثيات', 'Read coordinates'],
          ['تحريك الكائن', 'Move the sprite'],
          ['اختبار لوحة المفاتيح', 'Test keyboard control'],
        ],
      },
      {
        titleAr: 'القرارات المركبة في سكراتش',
        titleEn: 'Compound Decisions in Scratch',
        page: 172,
        focusAr: 'ركّب الشروط باستخدام المعاملات المنطقية ولبنات الانتظار، ثم اختبر القرارات في البرنامج.',
        focusEn: 'Combine conditions with logical operators and wait blocks, then test the decisions in the program.',
        visualSteps: [
          ['اختيار المعامل', 'Choose an operator'],
          ['تركيب الشروط', 'Combine conditions'],
          ['إضافة الانتظار', 'Add a wait block'],
          ['اختبار القرار', 'Test the decision'],
        ],
      },
      {
        titleAr: 'الألعاب في سكراتش',
        titleEn: 'Games in Scratch',
        page: 180,
        focusAr: 'أنشئ لعبة المركبة الفضائية، وجرّب تقنيات الرسوم المتحركة وبرمجة الكائن لكسب النقاط أو خسارتها.',
        focusEn: 'Create a space-ship game, try animation techniques, and program a sprite to gain or lose points.',
        visualSteps: [
          ['إنشاء اللعبة', 'Create the game'],
          ['تحريك الكائنات', 'Animate sprites'],
          ['إدارة النقاط', 'Manage points'],
          ['اختبار اللعب', 'Test the game'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q4',
      'متى تنفذ لبنة «كرّر حتى» الأوامر الموجودة بداخلها؟',
      'When does a repeat-until block execute the instructions inside it?',
      'تكررها إلى أن يتحقق الشرط',
      'It repeats them until the condition is met',
      ['تنفذها مرة واحدة دائمًا', 'تحذفها قبل تشغيل البرنامج', 'تغير اسم الكائن فقط'],
      ['It always runs them once', 'It deletes them before the program runs', 'It only renames the sprite'],
      'التكرار في سكراتش',
      'Repetition in Scratch',
      'تستمر لبنة «كرّر حتى» في التكرار إلى أن يتحقق الشرط المحدد.',
      'A repeat-until block continues repeating until its condition is met.',
    ),
  },
  {
    part: 2,
    number: 1,
    titleAr: 'التصميم المتقدم للمستندات',
    titleEn: 'Advanced Document Design',
    page: 208,
    contentsPdfPage: 205,
    lessons: [
      {
        titleAr: 'إنشاء الجداول وتنسيقها',
        titleEn: 'Creating and Formatting Tables',
        page: 211,
        focusAr: 'أنشئ جدولًا في مستند، ثم نسّق صفوفه وأعمدته بما يدعم وضوح المعلومات.',
        focusEn: 'Create a table in a document, then format its rows and columns to make information clear.',
        visualSteps: [
          ['إنشاء الجدول', 'Create a table'],
          ['إضافة المحتوى', 'Add content'],
          ['تنسيق الخلايا', 'Format cells'],
          ['مراجعة الوضوح', 'Check readability'],
        ],
      },
      {
        titleAr: 'تحرير الجداول',
        titleEn: 'Editing Tables',
        page: 219,
        focusAr: 'حرّر بنية الجدول بإضافة الصفوف والأعمدة وضبط حجمها، ثم استخدم التحديد والمحاذاة والبحث.',
        focusEn: 'Edit a table by adding and resizing rows and columns, then use selection, alignment, and search tools.',
        visualSteps: [
          ['إضافة الصفوف', 'Add rows'],
          ['ضبط الحجم', 'Resize the table'],
          ['محاذاة النص', 'Align text'],
          ['البحث والاستبدال', 'Find and replace'],
        ],
      },
      {
        titleAr: 'التنسيق المتقدم',
        titleEn: 'Advanced Formatting',
        page: 228,
        focusAr: 'نسّق المستند باستخدام الأعمدة والمسافة البادئة والرؤوس والتذييلات والرموز وأنماط العرض وفواصل الصفحات.',
        focusEn: 'Format a document with columns, indents, headers and footers, symbols, styles, and page breaks.',
        visualSteps: [
          ['تنظيم الأعمدة', 'Arrange columns'],
          ['إضافة الرؤوس', 'Add headers'],
          ['اختيار نمط', 'Apply a style'],
          ['إعداد الصفحات', 'Set up pages'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q5',
      'أي أداة تساعد على تنظيم معلومات متعددة في مستند؟',
      'Which tool helps organize multiple pieces of information in a document?',
      'جدول منسق',
      'A formatted table',
      ['تكرار المسافات بلا تنظيم', 'حذف العناوين', 'إخفاء النص في رأس الصفحة'],
      ['Unstructured spaces', 'Deleting headings', 'Hiding text in the page header'],
      'إنشاء الجداول وتنسيقها',
      'Creating and formatting tables',
      'يساعد الجدول المنظم على ترتيب المعلومات في صفوف وأعمدة.',
      'An organized table arranges information in rows and columns.',
    ),
  },
  {
    part: 2,
    number: 2,
    titleAr: 'تصميم المواقع الإلكترونية',
    titleEn: 'Website Design',
    page: 250,
    contentsPdfPage: 205,
    lessons: [
      {
        titleAr: 'تصميم صفحة إلكترونية',
        titleEn: 'Designing a Web Page',
        page: 252,
        focusAr: 'ميّز الشبكة والموقع والصفحة الإلكترونية، ثم أنشئ موقعًا وصفحة باستخدام أداة إنشاء مواقع مناسبة.',
        focusEn: 'Distinguish a network, website, and web page, then create a site and page with a suitable site-building tool.',
        visualSteps: [
          ['فكرة الموقع', 'Website purpose'],
          ['إنشاء الصفحة', 'Create a page'],
          ['تنسيق النص', 'Format text'],
          ['إضافة الصور', 'Add images'],
        ],
      },
      {
        titleAr: 'إضافة الصفحات',
        titleEn: 'Adding Pages',
        page: 272,
        focusAr: 'أضف صفحات إلى الموقع، ونظّمها، واضبط تخطيطها، واربط بينها بروابط تشعبية مناسبة.',
        focusEn: 'Add pages to a website, organize them, set their layouts, and connect them with suitable hyperlinks.',
        visualSteps: [
          ['تخطيط الصفحات', 'Plan pages'],
          ['إضافة صفحة', 'Add a page'],
          ['تنظيم الصفحات', 'Organize pages'],
          ['إضافة رابط', 'Add a link'],
        ],
      },
      {
        titleAr: 'نشر الموقع الإلكتروني',
        titleEn: 'Publishing a Website',
        page: 283,
        focusAr: 'أضف أيقونات التواصل، وعاين التغييرات، ثم انشر الموقع وشاركه عبر الإنترنت.',
        focusEn: 'Add social-media icons, preview changes, then publish and share the website online.',
        visualSteps: [
          ['إضافة الأيقونات', 'Add icons'],
          ['معاينة التغييرات', 'Preview changes'],
          ['نشر الموقع', 'Publish the site'],
          ['مشاركة الرابط', 'Share the link'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q6',
      'ما الخطوة المناسبة قبل مشاركة موقع إلكتروني؟',
      'What is an appropriate step before sharing a website?',
      'معاينة التغييرات والتحقق من الصفحات',
      'Preview changes and check the pages',
      ['حذف جميع الروابط', 'إزالة المحتوى دون مراجعته', 'تغيير إعدادات جهاز شخص آخر'],
      ['Delete all links', 'Remove content without reviewing it', 'Change another person’s device settings'],
      'نشر الموقع الإلكتروني',
      'Publishing a website',
      'تساعد المعاينة على مراجعة الموقع قبل نشره ومشاركته.',
      'Previewing helps you review a website before publishing and sharing it.',
    ),
  },
  {
    part: 2,
    number: 3,
    titleAr: 'تصميم ألعاب جهاز الحاسب',
    titleEn: 'Designing Computer Games',
    page: 294,
    contentsPdfPage: 206,
    lessons: [
      {
        titleAr: 'تخطيط وتصميم ألعاب جهاز الحاسب',
        titleEn: 'Planning and Designing Computer Games',
        page: 296,
        focusAr: 'تعرّف إلى مكونات اللعبة، وخطّط لوصفها، ثم أنشئ لعبة باستخدام مختبر لعبة كودو.',
        focusEn: 'Explore game components, plan a game description, then create a game using Kodu Game Lab.',
        visualSteps: [
          ['تحديد فكرة اللعبة', 'Choose a game idea'],
          ['وصف اللعبة', 'Describe the game'],
          ['إضافة الكائنات', 'Add objects'],
          ['حفظ المشروع', 'Save the project'],
        ],
      },
      {
        titleAr: 'برمجة ألعاب جهاز الحاسب',
        titleEn: 'Programming Computer Games',
        page: 314,
        focusAr: 'برمج الكائنات ونظام الفوز بالنقاط، واختبر اللعبة وتأكد من تحقق شروط الفوز.',
        focusEn: 'Program game objects and the scoring system, then test that the winning conditions work.',
        visualSteps: [
          ['برمجة الكائن', 'Program an object'],
          ['إعداد النقاط', 'Set up scoring'],
          ['اختبار اللعبة', 'Test the game'],
          ['التحقق من الفوز', 'Check the win condition'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q7',
      'لماذا نختبر اللعبة بعد برمجتها؟',
      'Why test a game after programming it?',
      'للتحقق من عمل الأوامر ونظام الفوز بالنقاط',
      'To check the instructions and scoring system',
      ['لمنع تشغيلها', 'لحذف جميع الكائنات', 'لتغيير عنوان الكتاب'],
      ['To prevent it from running', 'To delete every object', 'To change the textbook title'],
      'برمجة ألعاب جهاز الحاسب',
      'Programming computer games',
      'يكشف الاختبار ما إذا كانت الأوامر والنقاط تعمل كما خُطط لها.',
      'Testing reveals whether instructions and scoring work as intended.',
    ),
  },
  {
    part: 2,
    number: 4,
    titleAr: 'المستشعرات في علم الروبوت',
    titleEn: 'Sensors in Robotics',
    page: 330,
    contentsPdfPage: 207,
    lessons: [
      {
        titleAr: 'مستشعرات الروبوت',
        titleEn: 'Robot Sensors',
        page: 334,
        focusAr: 'تعرّف إلى مستشعرات الروبوت ولبناتها، ومنها مستشعرا الموجات فوق الصوتية والألوان، واختبر البرنامج وشخّص الأخطاء.',
        focusEn: 'Explore robot sensors and their blocks, including ultrasonic and color sensors, then test the program and diagnose errors.',
        visualSteps: [
          ['قراءة المستشعر', 'Read a sensor'],
          ['اختيار لبنة', 'Choose a block'],
          ['فحص اللون أو المسافة', 'Check color or distance'],
          ['تشخيص الخطأ', 'Diagnose an error'],
        ],
      },
      {
        titleAr: 'اتخاذ القرارات',
        titleEn: 'Making Decisions',
        page: 348,
        focusAr: 'برمج الروبوت لاتخاذ قرار اعتمادًا على المستشعرات، ثم اختبر استجابته للموقف.',
        focusEn: 'Program a robot to make a decision using sensor input, then test its response to a situation.',
        visualSteps: [
          ['قراءة المدخلات', 'Read input'],
          ['فحص الشرط', 'Check a condition'],
          ['اختيار الحركة', 'Choose an action'],
          ['اختبار الاستجابة', 'Test the response'],
        ],
      },
      {
        titleAr: 'إنشاء الخرائط',
        titleEn: 'Creating Maps',
        page: 363,
        focusAr: 'أضف العوائق ولوّن المساحات، ثم أنشئ خريطة للمسار واختبرها.',
        focusEn: 'Add obstacles and color areas, then create a route map and test it.',
        visualSteps: [
          ['تحديد المساحة', 'Define the area'],
          ['إضافة العوائق', 'Add obstacles'],
          ['إنشاء الخريطة', 'Create a map'],
          ['اختبار المسار', 'Test the route'],
        ],
      },
    ],
    question: makeQuestion(
      'sa-ds6-q8',
      'كيف يستفيد الروبوت من المستشعر عند اتخاذ قرار؟',
      'How can a robot use a sensor when making a decision?',
      'يستخدم قراءة المستشعر للتحقق من شرط واختيار استجابة',
      'It uses sensor input to check a condition and choose a response',
      ['يتجاهل المدخلات دائمًا', 'يغيّر عنوان المشروع فقط', 'يوقف قراءة جميع المستشعرات'],
      ['It always ignores input', 'It only changes the project title', 'It stops reading every sensor'],
      'المستشعرات واتخاذ القرارات',
      'Sensors and decision-making',
      'تتيح قراءة المستشعر استخدام شرط لتحديد استجابة مناسبة.',
      'Sensor input can be used with a condition to choose an appropriate response.',
    ),
    aiEnrichment: true,
  },
];

const enrichmentLabels: [string, string][] = [
  ['أهداف التعلم', 'Learning objectives'],
  ['الذكاء الاصطناعي في الواقع', 'AI in real life'],
  ['الأخلاقيات والتحقق', 'Ethics and verification'],
  ['مهمة تطبيقية', 'Applied task'],
];

export const SAUDI_G6_DIGITAL_SKILLS_TEXTBOOK_URL = textbookUrl;
export const SAUDI_G6_DIGITAL_SKILLS_UNIT_COUNT = units.length;
export const SAUDI_G6_DIGITAL_SKILLS_LESSON_COUNT = units.reduce(
  (total, unit) => total + unit.lessons.length,
  0
);
export const SAUDI_G6_DIGITAL_SKILLS_TABLE_OF_CONTENTS = units.flatMap((unit) =>
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
      id: `saudi-g6-digital-skills-1448-part-${unit.part}-unit-${unit.number}-lesson-${lessonOrder}`,
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

export const SAUDI_G6_DIGITAL_SKILLS_LECTURES: Lecture[] = units.map((unit, index) => {
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
      contentAr: 'يعرض الفهرس أهداف التعلم، والذكاء الاصطناعي في الواقع العملي وتقنياته وأمثلة ومهنًا مرتبطة به، وأخلاقياته والتحقق من إجاباته، ومهمة لإنشاء الصور. هذا قسم إثرائي مستقل وليس درسًا مرقمًا. مرجع الفهرس: ص 379–386.',
      contentEn: 'The contents list learning objectives, AI in practice and its techniques, examples and related careers, ethics and checking AI answers, and an image-creation task. This is a separate enrichment section, not a numbered lesson. Contents reference: pp. 379–386.',
      diagram: {
        id: 'saudi-g6-digital-skills-1448-ai-enrichment',
        figureNumberAr: 'إثراء بصري',
        figureNumberEn: 'Enrichment visual',
        titleAr: 'الذكاء الاصطناعي: استخدام واعٍ وتحقق',
        titleEn: 'Artificial Intelligence: Responsible Use and Verification',
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        captionEn: 'An original platform-created illustration, not an image from the textbook.',
        diagramType: 'digital_skills' as const,
        visualSteps,
      },
    });
  }

  return {
    id: `saudi-g6-digital-skills-1448-part-${unit.part}-unit-${unit.number}`,
    order,
    titleAr: unitTitleAr,
    titleEn: unitTitleEn,
    subtitleAr: `${partLabelAr} — الصف السادس الابتدائي — ص ${unit.page} — فهرس PDF ص ${unit.contentsPdfPage}`,
    subtitleEn: `${partLabelEn} — Grade 6 — p. ${unit.page} — PDF contents p. ${unit.contentsPdfPage}`,
    descriptionAr: `${sourceNoteAr}\n\nتضم الوحدة ${unit.lessons.length} دروس مرقمة. الشرح والأنشطة والرسوم والأسئلة من إعداد المنصة ومساندة لدراسة الكتاب.`,
    descriptionEn: `${sourceNoteEn}\n\nThis unit contains ${unit.lessons.length} numbered lessons. Explanations, activities, diagrams, and assessments are original supplementary platform material.`,
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G6',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم السعودية — كتاب المهارات الرقمية',
    ministryEn: 'Saudi Ministry of Education — Digital Skills textbook',
    gradeLevelNameAr: 'الصف السادس الابتدائي',
    gradeLevelNameEn: 'Grade 6',
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
      id: `saudi-g6-digital-skills-1448-part-${unit.part}-unit-${unit.number}-assessment`,
      lectureId: `saudi-g6-digital-skills-1448-part-${unit.part}-unit-${unit.number}`,
      titleAr: `تقويم الوحدة ${arabicUnitNumbers[unit.number - 1]}: ${unit.titleAr}`,
      titleEn: `Unit ${unit.number} Check: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question],
    },
  };
});
