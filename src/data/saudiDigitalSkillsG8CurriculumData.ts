import type { Lecture, LectureDiagramStep, Question } from '../types';

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

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-ME-K08-SM1-mcomp.pdf';

const lessonIllustrations: Record<number, [string, string][]> = {
  12: [['صورة', 'Image'], ['صوت', 'Audio'], ['فيديو', 'Video'], ['استيراد الوسائط', 'Import media']],
  25: [['فكرة الفيلم', 'Film idea'], ['تخطيط المشاهد', 'Plan scenes'], ['تحرير المقاطع', 'Edit clips'], ['معاينة وتصدير', 'Preview and export']],
  48: [['إضافة نص', 'Add text'], ['تأثير بصري', 'Visual effect'], ['تحرير الصوت', 'Edit audio'], ['تصدير الفيلم', 'Export film']],
  69: [['جمع المعلومات', 'Gather information'], ['اختيار النوع', 'Choose a type'], ['تنظيم الأفكار', 'Organize ideas'], ['عرض بصري', 'Visual presentation']],
  90: [['اختيار قالب', 'Choose a template'], ['تخصيص العناصر', 'Customize elements'], ['حفظ التصميم', 'Save the design'], ['طباعة المخطط', 'Print the infographic']],
  112: [['إنشاء ملف', 'Create a file'], ['قيم ومعاملات', 'Values and operators'], ['مقارنة منطقية', 'Logical comparison'], ['قيمة صحيحة أو خاطئة', 'True or false']],
  122: [['كتابة شرط', 'Write a condition'], ['اختبار الشرط', 'Test the condition'], ['اختيار مسار', 'Choose a branch'], ['تنفيذ التعليمات', 'Run instructions']],
  129: [['إدخال البيانات', 'Enter data'], ['فحص if', 'Check if'], ['مسار else', 'Else branch'], ['إظهار النتيجة', 'Show the result']],
  138: [['شرط خارجي', 'Outer condition'], ['شرط داخلي', 'Inner condition'], ['تحديد المسار', 'Select a branch'], ['تنفيذ النتيجة', 'Run the result']],
  144: [['بدء الحلقة', 'Start the loop'], ['تنفيذ الأوامر', 'Run instructions'], ['تكرار الخطوات', 'Repeat steps'], ['شرط الإيقاف', 'Stop condition']],
  153: [['حلقة خارجية', 'Outer loop'], ['حلقة داخلية', 'Inner loop'], ['تكرار الصفوف', 'Repeat rows'], ['رسم النمط', 'Draw a pattern']],
  163: [['تعريف الدالة', 'Define a function'], ['تمرير المعاملات', 'Pass parameters'], ['استدعاء الدالة', 'Call the function'], ['إرجاع القيمة', 'Return a value']],
  172: [['فتح المصنف', 'Open workbook'], ['اختيار ورقة', 'Select a sheet'], ['قراءة الخلايا', 'Read cells'], ['تحديث البيانات', 'Update data']],
  203: [['جمع البيانات', 'Collect data'], ['تنظيم السجلات', 'Organize records'], ['إنشاء نموذج', 'Create a form'], ['استقبال الإجابات', 'Receive responses']],
  218: [['اختيار السجلات', 'Select records'], ['تصفية البيانات', 'Filter data'], ['فرز المستوى الأول', 'Sort level one'], ['فرز متعدد المستويات', 'Multilevel sort']],
  232: [['إدخال القيم', 'Enter values'], ['ترتيب العمليات', 'Order operations'], ['كتابة الصيغة', 'Write a formula'], ['حساب النتيجة', 'Calculate the result']],
  245: [['اختيار الخلايا', 'Select cells'], ['تحديد نوع المرجع', 'Set reference type'], ['تطبيق الدالة', 'Apply a function'], ['معالجة الخطأ', 'Handle an error']],
  273: [['حاسب مرسل', 'Sending computer'], ['اتصال بالشبكة', 'Network connection'], ['نقل البيانات', 'Transfer data'], ['جهاز مستقبِل', 'Receiving device']],
  284: [['تواصل باحترام', 'Communicate respectfully'], ['حماية الخصوصية', 'Protect privacy'], ['توثيق المصدر', 'Credit sources'], ['مشاركة مسؤولة', 'Share responsibly']],
  300: [['تحديد البيانات', 'Select data'], ['اختيار مخطط', 'Choose a chart'], ['مقارنة القيم', 'Compare values'], ['مخطط مصغر', 'Sparkline']],
  320: [['تحديد النطاق', 'Select a range'], ['تحليل سريع', 'Quick analysis'], ['إضافة سلسلة', 'Add a data series'], ['إنشاء SmartArt', 'Create SmartArt']],
  339: [['تعليمات الحركة', 'Movement commands'], ['استخدام متغير', 'Use a variable'], ['قرار أو تكرار', 'Decision or repeat'], ['تحريك الروبوت', 'Move the robot']],
  364: [['تقسيم المهمة', 'Divide the task'], ['إنشاء وحدة', 'Create a module'], ['إعادة الاستخدام', 'Reuse a module'], ['برنامج منظم', 'Organized program']]
};

const units: Unit[] = [
  {
    id: 'sa-ds8-part1-unit1',
    titleAr: 'إنتاج مقطع فيديو',
    titleEn: 'Producing a Video',
    partAr: 'الجزء الأول من المقرر',
    partEn: 'Part One',
    page: 10,
    outcomesAr: [
      'تمييز أنواع ملفات الوسائط واستيرادها إلى الحاسب.',
      'التخطيط للفيلم وإنشاؤه وتحرير مقاطعه وصوره وصوته.',
      'استخدام التأثيرات والمرشحات وحفظ المشروع وتصديره.'
    ],
    outcomesEn: [
      'Identify media-file types and import media to a computer.',
      'Plan and create a film and edit its clips, images, and audio.',
      'Use effects and filters, then save and export the project.'
    ],
    lessons: [
      { titleAr: 'الوسائط المتعددة', titleEn: 'Multimedia', page: 12, focusAr: 'التعرف على أنواع ملفات الصور والصوت والفيديو، واستيراد الوسائط وعرضها.', focusEn: 'Identify image, audio, and video formats and learn how to import and view media.' },
      { titleAr: 'إنشاء فيلم', titleEn: 'Creating a Film', page: 25, focusAr: 'التخطيط المسبق للفيلم وتجميع المقاطع والصور وتحريرها في مشروع فيديو.', focusEn: 'Plan a film and assemble and edit video clips and images in a project.' },
      { titleAr: 'التأثيرات البصرية', titleEn: 'Visual Effects', page: 48, focusAr: 'إضافة النصوص والتأثيرات البصرية والصوتية وتحرير الصوت ثم تصدير مقطع الفيديو.', focusEn: 'Add text and visual and audio effects, edit sound, and export the video.' }
    ],
    question: {
      id: 'sa-ds8-q1', textAr: 'ما الترتيب الأنسب لإعداد مشروع فيديو؟', textEn: 'What is a suitable workflow for a video project?',
      optionsAr: ['التخطيط، استيراد الوسائط، التحرير، ثم التصدير', 'التصدير قبل استيراد الوسائط', 'حذف المقاطع ثم حفظ المشروع', 'إضافة المؤثرات دون معاينة'],
      optionsEn: ['Plan, import media, edit, then export', 'Export before importing media', 'Delete clips and save', 'Add effects without previewing'],
      correctIndex: 0, conceptTestedAr: 'مراحل إنتاج الفيديو', conceptTestedEn: 'Video production workflow',
      explanationAr: 'يساعد التخطيط والاستيراد ثم التحرير والمعاينة قبل التصدير على إكمال مشروع الفيديو بصورة سليمة.', explanationEn: 'Planning, importing, editing, and previewing before export supports a complete video workflow.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds8-part1-unit2',
    titleAr: 'مخطط المعلومات البياني',
    titleEn: 'Infographics',
    partAr: 'الجزء الأول من المقرر',
    partEn: 'Part One',
    page: 68,
    outcomesAr: [
      'التعرف على مزايا مخطط المعلومات البياني وخصائصه وأنواعه.',
      'اتباع خطوات التصميم واختيار أداة مناسبة.',
      'تصميم المخطط وحفظه وفتحه وطباعته.'
    ],
    outcomesEn: [
      'Understand infographic benefits, characteristics, and types.',
      'Follow design steps and select an appropriate tool.',
      'Create, save, reopen, and print an infographic.'
    ],
    lessons: [
      { titleAr: 'مقدمة إلى مخطط المعلومات البياني', titleEn: 'Introduction to Infographics', page: 69, focusAr: 'استكشاف خصائص مخطط المعلومات وأنواعه وخطوات تصميمه وأدوات إنشائه.', focusEn: 'Explore infographic characteristics, types, design steps, and authoring tools.' },
      { titleAr: 'تخصيص التصميم', titleEn: 'Customizing a Design', page: 90, focusAr: 'تصميم مخطط معلومات في كانفا وتخصيص عناصره ثم حفظه وطباعته.', focusEn: 'Create and customize an infographic in Canva, then save and print it.' }
    ],
    question: {
      id: 'sa-ds8-q2', textAr: 'ما الغرض من مخطط المعلومات البياني؟', textEn: 'What is the purpose of an infographic?',
      optionsAr: ['عرض المعلومات بصريًا بطريقة منظمة', 'تشغيل مقطع صوتي فقط', 'كتابة أوامر الروبوت', 'فرز الملفات في نظام التشغيل'],
      optionsEn: ['Present information visually in an organized way', 'Only play audio', 'Write robot commands', 'Sort files in an operating system'],
      correctIndex: 0, conceptTestedAr: 'مخطط المعلومات البياني', conceptTestedEn: 'Infographics',
      explanationAr: 'ينظم مخطط المعلومات النصوص والعناصر البصرية لعرض المعلومات بوضوح.', explanationEn: 'An infographic organizes text and visual elements to communicate information clearly.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds8-part1-unit3',
    titleAr: 'البرمجة مع بايثون',
    titleEn: 'Programming with Python',
    partAr: 'الجزء الأول من المقرر',
    partEn: 'Part One',
    page: 108,
    outcomesAr: [
      'إنشاء برامج بايثون وتشغيلها في بيئة PyCharm.',
      'استخدام المعاملات الشرطية والمنطقية والجمل الشرطية لاتخاذ القرار.',
      'استخدام الحلقات والحلقات المتداخلة والدوال ومعاملاتها.',
      'معالجة جداول بيانات إكسل باستخدام تعليمات بايثون.'
    ],
    outcomesEn: [
      'Create and run Python programs in PyCharm.',
      'Use comparison and logical operators and conditional statements for decisions.',
      'Use loops, nested loops, functions, and function parameters.',
      'Process Excel spreadsheets with Python instructions.'
    ],
    lessons: [
      { titleAr: 'المعاملات الشرطية والمعاملات المنطقية في بايثون', titleEn: 'Conditional and Logical Operators in Python', page: 112, focusAr: 'التعرف على بيئة PyCharm وإنشاء ملف بايثون واستخدام المعاملات الشرطية والمنطقية.', focusEn: 'Explore PyCharm, create a Python file, and use comparison and logical operators.' },
      { titleAr: 'الجمل الشرطية في البايثون', titleEn: 'Conditional Statements in Python', page: 122, focusAr: 'اختيار الجمل الشرطية المناسبة وتنظيم العبارات والمسافة البادئة.', focusEn: 'Choose appropriate conditional statements and structure statements with indentation.' },
      { titleAr: 'اتخاذ القرارات', titleEn: 'Making Decisions', page: 129, focusAr: 'استخدام if و if...else لاتخاذ قرارات تعتمد على تحقق شرط.', focusEn: 'Use if and if...else to make decisions based on conditions.' },
      { titleAr: 'الشروط المتداخلة', titleEn: 'Nested Conditions', page: 138, focusAr: 'تنظيم جمل if المتداخلة والمسافات البادئة لتحليل شروط متعددة.', focusEn: 'Structure nested if statements and indentation to evaluate multiple conditions.' },
      { titleAr: 'الحلقات', titleEn: 'Loops', page: 144, focusAr: 'استخدام for و while والتكرار والمسافة البادئة وعبارة الإيقاف.', focusEn: 'Use for and while loops, indentation, repetition, and break.' },
      { titleAr: 'الحلقات المتداخلة', titleEn: 'Nested Loops', page: 153, focusAr: 'إنشاء حلقة داخل حلقة أخرى وتوظيف الحلقات المتداخلة في إنتاج الأنماط.', focusEn: 'Place one loop inside another and use nested loops to produce patterns.' },
      { titleAr: 'الدوال', titleEn: 'Functions', page: 163, focusAr: 'تعريف الدوال واستدعاؤها والتعامل مع المعاملات والوسائط وعبارة الإرجاع.', focusEn: 'Define and call functions and work with parameters, arguments, and return statements.' },
      { titleAr: 'جداول بيانات إكسل في بايثون', titleEn: 'Excel Spreadsheets in Python', page: 172, focusAr: 'استخدام مكتبة OpenPyXL للعمل مع المصنفات والخلايا وقراءة القيم وكتابتها.', focusEn: 'Use OpenPyXL to work with workbooks and cells and read and write values.' }
    ],
    question: {
      id: 'sa-ds8-q3', textAr: 'ما فائدة استخدام حلقة في برنامج بايثون؟', textEn: 'Why use a loop in a Python program?',
      optionsAr: ['تكرار مجموعة من التعليمات وفق عدد أو شرط', 'تنسيق مخطط في إكسل فقط', 'حفظ ملف فيديو', 'إنشاء نموذج إلكتروني دون بيانات'],
      optionsEn: ['Repeat a set of instructions a number of times or while a condition holds', 'Only format an Excel chart', 'Save a video file', 'Create an online form without data'],
      correctIndex: 0, conceptTestedAr: 'الحلقات في بايثون', conceptTestedEn: 'Python loops',
      explanationAr: 'تستخدم الحلقة لتكرار الأوامر عند الحاجة بدل إعادة كتابتها يدويًا.', explanationEn: 'A loop repeats instructions when needed instead of requiring them to be rewritten.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds8-part2-unit1',
    titleAr: 'جمع المعلومات',
    titleEn: 'Collecting Information',
    partAr: 'الجزء الثاني من المقرر',
    partEn: 'Part Two',
    page: 200,
    outcomesAr: [
      'إنشاء نماذج إلكترونية لجمع البيانات ومشاركتها وتصديرها.',
      'تصدير الاستجابات إلى إكسل وتنسيقها.',
      'تصفية السجلات وفرزها بطرق متعددة المستويات.'
    ],
    outcomesEn: [
      'Create, share, and export online data-collection forms.',
      'Export responses to Excel and format them.',
      'Filter and sort records, including multilevel sorting.'
    ],
    lessons: [
      { titleAr: 'قواعد البيانات والنماذج', titleEn: 'Databases and Forms', page: 203, focusAr: 'فهم البيانات والمعلومات وقواعد البيانات وإنشاء نماذج إلكترونية لجمع البيانات.', focusEn: 'Understand data, information, and databases and create online data-collection forms.' },
      { titleAr: 'التعامل مع قاعدة البيانات', titleEn: 'Working with a Database', page: 218, focusAr: 'استخدام عوامل التصفية والفرز وفرز البيانات متعدد المستويات في قاعدة البيانات.', focusEn: 'Use filters, sorting, and multilevel sorting with database records.' }
    ],
    question: {
      id: 'sa-ds8-q4', textAr: 'كيف تعرض السجلات التي تحقق شرطًا معينًا فقط؟', textEn: 'How can you display only records that meet a condition?',
      optionsAr: ['تطبيق عامل تصفية', 'إضافة تأثير صوتي', 'استخدام حلقة متداخلة', 'تغيير اسم المصنف'],
      optionsEn: ['Apply a filter', 'Add an audio effect', 'Use a nested loop', 'Rename the workbook'],
      correctIndex: 0, conceptTestedAr: 'تصفية البيانات', conceptTestedEn: 'Filtering data',
      explanationAr: 'يعرض عامل التصفية جزءًا من السجلات التي تطابق المعايير المحددة.', explanationEn: 'A filter displays the records that match specified criteria.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds8-part2-unit2',
    titleAr: 'تحليل البيانات',
    titleEn: 'Analyzing Data',
    partAr: 'الجزء الثاني من المقرر',
    partEn: 'Part Two',
    page: 230,
    outcomesAr: [
      'إجراء العمليات الحسابية المركبة باستخدام الصيغ في إكسل.',
      'استخدام مراجع الخلايا والدوال النصية.',
      'التعامل مع الأخطاء في العمليات الحسابية.'
    ],
    outcomesEn: [
      'Perform compound calculations using Excel formulas.',
      'Use cell references and text functions.',
      'Handle errors in calculations.'
    ],
    lessons: [
      { titleAr: 'العمليات الحسابية المركّبة', titleEn: 'Compound Calculations', page: 232, focusAr: 'استخدام أولوية العمليات والصيغ ومراجع الخلايا والنسب المئوية والقوى في إكسل.', focusEn: 'Use operator precedence, formulas, cell references, percentages, and powers in Excel.' },
      { titleAr: 'الدوال والمراجع', titleEn: 'Functions and References', page: 245, focusAr: 'استخدام الدوال النصية والمراجع النسبية والمطلقة والمختلطة ومعالجة أخطاء الصيغ.', focusEn: 'Use text functions and relative, absolute, and mixed references and handle formula errors.' }
    ],
    question: {
      id: 'sa-ds8-q5', textAr: 'ما فائدة استخدام مرجع خلية في صيغة إكسل؟', textEn: 'Why use a cell reference in an Excel formula?',
      optionsAr: ['استخدام قيمة الخلية في العملية الحسابية', 'إضافة انتقال للشريحة', 'إرسال نموذج عبر الإنترنت', 'تحريك روبوت افتراضي'],
      optionsEn: ['Use the cell value in a calculation', 'Add a slide transition', 'Submit an online form', 'Move a virtual robot'],
      correctIndex: 0, conceptTestedAr: 'مراجع الخلايا', conceptTestedEn: 'Cell references',
      explanationAr: 'يشير مرجع الخلية إلى قيمة يمكن للصيغة استخدامها في الحساب.', explanationEn: 'A cell reference points to a value that a formula can use in a calculation.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds8-part2-unit3',
    titleAr: 'التواصل عبر الإنترنت',
    titleEn: 'Communicating Online',
    partAr: 'الجزء الثاني من المقرر',
    partEn: 'Part Two',
    page: 272,
    outcomesAr: [
      'فهم مفهوم الشبكات وأنواعها ونماذجها وكيفية عمل الإنترنت.',
      'التعرف على أدوات التواصل والمدونات الصغيرة.',
      'التصرف كمواطن رقمي مسؤول وحماية الخصوصية وفهم الملكية الفكرية.'
    ],
    outcomesEn: [
      'Understand networks, their types and models, and how the internet works.',
      'Explore communication tools and microblogging.',
      'Act as a responsible digital citizen, protect privacy, and understand intellectual property.'
    ],
    lessons: [
      { titleAr: 'أساسيات الشبكات', titleEn: 'Network Basics', page: 273, focusAr: 'التعرف على الشبكات وهيكلياتها وأنواعها ونماذج الحاسب وتبادل المعلومات.', focusEn: 'Explore networks, topologies, types, computer-network models, and information exchange.' },
      { titleAr: 'أدوات التواصل والمواطنة الرقمية', titleEn: 'Communication Tools and Digital Citizenship', page: 284, focusAr: 'استخدام أدوات التواصل والمدونات الصغيرة بمسؤولية واحترام الخصوصية والملكية الفكرية.', focusEn: 'Use communication tools and microblogs responsibly and respect privacy and intellectual property.' }
    ],
    question: {
      id: 'sa-ds8-q6', textAr: 'أي ممارسة تعبّر عن المواطنة الرقمية المسؤولة؟', textEn: 'Which practice reflects responsible digital citizenship?',
      optionsAr: ['احترام الخصوصية والملكية الفكرية عند التواصل', 'مشاركة بيانات الآخرين دون إذن', 'نشر كلمات المرور علنًا', 'نسخ المحتوى ونسبه للنفس'],
      optionsEn: ['Respect privacy and intellectual property when communicating', 'Share others’ data without permission', 'Publish passwords publicly', 'Copy work and claim it as your own'],
      correctIndex: 0, conceptTestedAr: 'المواطنة الرقمية', conceptTestedEn: 'Digital citizenship',
      explanationAr: 'تتضمن المواطنة الرقمية التصرف بمسؤولية وحماية الخصوصية واحترام حقوق الآخرين.', explanationEn: 'Digital citizenship includes responsible behavior, privacy protection, and respect for others’ rights.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds8-part2-unit4',
    titleAr: 'المخططات البيانية',
    titleEn: 'Charts',
    partAr: 'الجزء الثاني من المقرر',
    partEn: 'Part Two',
    page: 298,
    outcomesAr: [
      'تمييز أنواع المخططات وإنشاء المخططات البيانية وتنسيقها.',
      'إنشاء المخططات المصغرة وتنسيقها واستخدام التحليل السريع.',
      'إضافة سلاسل البيانات واستخدام رسومات SmartArt.'
    ],
    outcomesEn: [
      'Identify chart types and create and format charts.',
      'Create and format sparklines and use Quick Analysis.',
      'Add data series and use SmartArt graphics.'
    ],
    lessons: [
      { titleAr: 'المخططات البيانية المتقدمة', titleEn: 'Advanced Charts', page: 300, focusAr: 'اختيار نوع المخطط وإنشاؤه وتنسيقه وإضافة المخططات المصغرة.', focusEn: 'Choose, create, and format chart types and add sparklines.' },
      { titleAr: 'التعامل مع المخططات البيانية', titleEn: 'Working with Charts', page: 320, focusAr: 'استخدام التحليل السريع وتعديل المخطط وإضافة سلسلة بيانات ورسومات SmartArt.', focusEn: 'Use Quick Analysis, modify charts, add data series, and use SmartArt graphics.' }
    ],
    question: {
      id: 'sa-ds8-q7', textAr: 'ما الذي يساعد المخطط البياني على توضيحه؟', textEn: 'What can a chart help communicate?',
      optionsAr: ['الأنماط والمقارنات في البيانات', 'كلمات المرور المخفية', 'خطوات تشغيل الفيديو فقط', 'تعريف الدالة في بايثون'],
      optionsEn: ['Patterns and comparisons in data', 'Hidden passwords', 'Only video playback steps', 'A Python function definition'],
      correctIndex: 0, conceptTestedAr: 'المخططات البيانية', conceptTestedEn: 'Charts',
      explanationAr: 'تحول المخططات البيانات إلى تمثيل بصري يسهل مقارنة القيم وفهمها.', explanationEn: 'Charts turn data into visual representations that make values easier to compare and understand.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds8-part2-unit5',
    titleAr: 'برمجة الروبوت',
    titleEn: 'Programming a Robot',
    partAr: 'الجزء الثاني من المقرر',
    partEn: 'Part Two',
    page: 336,
    outcomesAr: [
      'استخدام المتغيرات والعمليات الحسابية في VEXcode VR.',
      'التحكم في حركة الروبوت الافتراضي باستخدام التعليمات والقرارات والتكرار.',
      'تقسيم البرامج إلى وحدات برمجية قابلة لإعادة الاستخدام.'
    ],
    outcomesEn: [
      'Use variables and arithmetic in VEXcode VR.',
      'Control virtual-robot movement with instructions, decisions, and repetition.',
      'Break programs into reusable modules.'
    ],
    lessons: [
      { titleAr: 'التحكم في الروبوت', titleEn: 'Controlling the Robot', page: 339, focusAr: 'استخدام المتغيرات والعمليات الحسابية وأوامر التحكم لتحريك روبوت VEXcode VR.', focusEn: 'Use variables, arithmetic, and control instructions to move a VEXcode VR robot.' },
      { titleAr: 'البرمجة التركيبية', titleEn: 'Modular Programming', page: 364, focusAr: 'تقسيم المهام إلى وحدات برمجية وعناصر قابلة لإعادة الاستخدام في المشروع.', focusEn: 'Divide tasks into program modules and reusable blocks in a project.' }
    ],
    question: {
      id: 'sa-ds8-q8', textAr: 'ما فائدة تقسيم برنامج الروبوت إلى وحدات أصغر؟', textEn: 'Why divide a robot program into smaller modules?',
      optionsAr: ['إعادة استخدام أجزاء البرنامج وتنظيم المهام', 'زيادة عدد أخطاء البرنامج', 'منع استخدام المتغيرات', 'استبدال بيئة البرمجة'],
      optionsEn: ['Reuse program components and organize tasks', 'Increase program errors', 'Prevent use of variables', 'Replace the programming environment'],
      correctIndex: 0, conceptTestedAr: 'البرمجة التركيبية', conceptTestedEn: 'Modular programming',
      explanationAr: 'تساعد الوحدات البرمجية على تنظيم المهام وإعادة استخدام تسلسلات التعليمات.', explanationEn: 'Modules help organize tasks and reuse instruction sequences.',
      difficulty: 'easy'
    }
  }
];

function createLecture(unit: Unit, order: number): Lecture {
  return {
    id: unit.id,
    order,
    titleAr: `${unit.partAr}: ${unit.titleAr}`,
    titleEn: `${unit.partEn}: ${unit.titleEn}`,
    subtitleAr: `${unit.lessons.length} دروس من كتاب المهارات الرقمية للصف الثاني المتوسط`,
    subtitleEn: `${unit.lessons.length} lessons from the Grade 8 Digital Skills textbook`,
    descriptionAr: `خريطة تعليمية أصلية مبنية على عناوين الدروس وأهداف الوحدة المنشورة في الكتاب الرسمي (أهداف الوحدة ص. ${unit.page})؛ الشرح والأنشطة من إعداد المنصة وليست نص الكتاب. المصدر: ${textbookUrl}`,
    descriptionEn: `An original learning guide based on official textbook lesson titles and unit objectives (unit outcomes p. ${unit.page}); explanations and activities are platform-authored, not textbook text. Source: ${textbookUrl}`,
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G8',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم بالمملكة العربية السعودية',
    ministryEn: 'Ministry of Education, Saudi Arabia',
    gradeLevelNameAr: 'الصف الثاني المتوسط',
    gradeLevelNameEn: 'Second Intermediate (Grade 8)',
    termAr: unit.partAr,
    termEn: unit.partEn,
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `دروس ${unit.partAr}`,
    lessonNumberEn: `${unit.partEn} lessons`,
    warmupHookAr: `تتناول هذه الوحدة ${unit.titleAr} من خلال المهارات المحددة في كتاب المهارات الرقمية للصف الثاني المتوسط.`,
    warmupHookEn: `This unit explores ${unit.titleEn.toLowerCase()} through the skills listed in the Grade 8 Digital Skills textbook.`,
    learningOutcomesAr: unit.outcomesAr,
    learningOutcomesEn: unit.outcomesEn,
    keyConceptsAr: unit.lessons.map((lesson) => lesson.titleAr),
    keyConceptsEn: unit.lessons.map((lesson) => lesson.titleEn),
    summaryAr: `تضم هذه الوحدة ${unit.lessons.length} دروس. الأهداف المعروضة هنا أهداف الوحدة كما لُخصت من الكتاب، وليست أهدافًا منفصلة منسوبة لكل درس.`,
    summaryEn: `This unit contains ${unit.lessons.length} lessons. The outcomes shown are unit-level summaries, not separately stated objectives for each lesson.`,
    sections: unit.lessons.map((lesson, lessonIndex) => ({
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nمرجع الكتاب: ص. ${lesson.page}. هذا شرح أصلي موجز للمنصة مبني على عنوان الدرس وأهداف الوحدة، وليس نقلًا لنص الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nTextbook reference: p. ${lesson.page}. This is a brief original platform explanation based on the lesson title and unit objectives, not reproduced textbook text.`,
      diagram: {
        id: `${unit.id}-lesson-${lesson.page}-illustration`,
        figureNumberAr: `شكل (${order}-${lessonIndex + 1})`,
        figureNumberEn: `Figure (${order}-${lessonIndex + 1})`,
        titleAr: `تصور بصري: ${lesson.titleAr}`,
        titleEn: `Visual guide: ${lesson.titleEn}`,
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة لتوضيح فكرة الدرس، وليس صورة من الكتاب.',
        captionEn: 'An original platform-created teaching illustration, not an image copied from the textbook.',
        diagramType: 'digital_skills',
        visualSteps: (lessonIllustrations[lesson.page] || []).map(([labelAr, labelEn]): LectureDiagramStep => ({ labelAr, labelEn }))
      }
    })),
    assessment: {
      id: `${unit.id}-assessment`,
      lectureId: unit.id,
      titleAr: `تقويم الوحدة: ${unit.titleAr}`,
      titleEn: `Unit Assessment: ${unit.titleEn}`,
      passingScore: 80,
      questions: [unit.question]
    }
  };
}

// Lesson titles, unit names, and printed page references are cross-checked
// against the MOE-copyrighted 1448–2026 book (contents pp. 7–9, 195–199).
export const SAUDI_G8_DIGITAL_SKILLS_LECTURES: Lecture[] = units.map(createLecture);
SAUDI_G8_DIGITAL_SKILLS_LECTURES[7].sections?.push({
  titleAr: 'قسم الذكاء الاصطناعي (إثرائي، غير مرقم كدرس)',
  titleEn: 'Artificial Intelligence Section (Enrichment; not a numbered lesson)',
  contentAr: 'يتضمن الكتاب قسمًا إضافيًا عن الذكاء الاصطناعي في الواقع العملي، وكيفية تعلم الحاسب، وأخلاقيات الذكاء الاصطناعي، وإنشاء مخطط معلومات باستخدام كانفا المدعوم بالذكاء الاصطناعي. هذا قسم إثرائي وليس وحدة أو درسًا مرقمًا.',
  contentEn: 'The book includes an additional section on practical AI, how computers learn, AI ethics, and creating an infographic with Canva AI. This enrichment is not a numbered unit or lesson.',
  diagram: {
    id: 'sa-ds8-ai-enrichment-illustration',
    figureNumberAr: 'إثراء بصري',
    figureNumberEn: 'Enrichment visual',
    titleAr: 'من البيانات إلى استخدام مسؤول للذكاء الاصطناعي',
    titleEn: 'From data to responsible AI use',
    captionAr: 'رسم تعليمي أصلي يوجز عناصر قسم الإثراء، وليس صورة من الكتاب.',
    captionEn: 'An original teaching illustration summarizing the enrichment section, not an image copied from the textbook.',
    diagramType: 'digital_skills',
    visualSteps: [
      { labelAr: 'بيانات وأمثلة', labelEn: 'Data and examples' },
      { labelAr: 'تعلّم الحاسب', labelEn: 'Computer learning' },
      { labelAr: 'مراجعة الإنصاف', labelEn: 'Check fairness' },
      { labelAr: 'استخدام مسؤول', labelEn: 'Responsible use' }
    ]
  }
});

export const SAUDI_G8_DIGITAL_SKILLS_LESSON_COUNT = units.reduce((count, unit) => count + unit.lessons.length, 0);
export const SAUDI_G8_DIGITAL_SKILLS_TEXTBOOK_URL = textbookUrl;
