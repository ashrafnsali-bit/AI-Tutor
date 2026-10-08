import type { Lecture, LectureDiagramStep, Question } from '../types';

type Lesson = {
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  visualSteps: [string, string][];
};

type Unit = {
  id: string;
  titleAr: string;
  titleEn: string;
  lessons: Lesson[];
  question: Question;
};

const textbookUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-ME-K09-SM1-mcomp.pdf';

const units: Unit[] = [
  {
    id: 'sa-ds9-part1-unit1',
    titleAr: 'الأمن السيبراني',
    titleEn: 'Cybersecurity',
    lessons: [
      {
        titleAr: 'مقدمة في الأمن السيبراني',
        titleEn: 'Introduction to Cybersecurity',
        focusAr: 'التعرف على الأمن السيبراني والتهديدات الرقمية الأساسية ووسائل الوقاية منها.',
        focusEn: 'Understand cybersecurity, common digital threats, and basic ways to prevent them.',
        visualSteps: [['تعرّف على التهديد', 'Identify a threat'], ['قيّم الخطر', 'Assess the risk'], ['اختر الحماية', 'Choose protection'], ['تحقق من الأمان', 'Check security']]
      },
      {
        titleAr: 'حماية جهاز الحاسب الشخصي',
        titleEn: 'Protecting a Personal Computer',
        focusAr: 'اتباع ممارسات تحمي الحاسب وبياناته، مثل التحديثات وكلمات المرور والنسخ الاحتياطي.',
        focusEn: 'Protect a computer and its data with practices such as updates, passwords, and backups.',
        visualSteps: [['تحديث النظام', 'Update the system'], ['استخدم كلمة مرور قوية', 'Use a strong password'], ['احمِ الملفات', 'Protect files'], ['أنشئ نسخة احتياطية', 'Back up data']]
      }
    ],
    question: {
      id: 'sa-ds9-q1',
      textAr: 'أي ممارسة تساعد على حماية جهاز الحاسب الشخصي؟',
      textEn: 'Which practice helps protect a personal computer?',
      optionsAr: ['تثبيت التحديثات الأمنية', 'مشاركة كلمة المرور', 'فتح مرفقات مجهولة', 'تعطيل وسائل الحماية'],
      optionsEn: ['Install security updates', 'Share your password', 'Open unknown attachments', 'Disable protection'],
      correctIndex: 0,
      conceptTestedAr: 'حماية الحاسب الشخصي',
      conceptTestedEn: 'Personal computer protection',
      explanationAr: 'تساعد التحديثات الأمنية على معالجة الثغرات المعروفة وحماية الجهاز.',
      explanationEn: 'Security updates help address known vulnerabilities and protect the device.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds9-part1-unit2',
    titleAr: 'قواعد البيانات',
    titleEn: 'Databases',
    lessons: [
      {
        titleAr: 'إنشاء قواعد البيانات',
        titleEn: 'Creating Databases',
        focusAr: 'تنظيم البيانات في جداول وحقول وسجلات وإنشاء قاعدة بيانات مناسبة.',
        focusEn: 'Organize data into tables, fields, and records and create a suitable database.',
        visualSteps: [['حدد البيانات', 'Identify data'], ['أنشئ جدولًا', 'Create a table'], ['أضف الحقول', 'Add fields'], ['أدخل السجلات', 'Enter records']]
      },
      {
        titleAr: 'الاستعلام في قاعدة البيانات',
        titleEn: 'Querying a Database',
        focusAr: 'استخدام الاستعلامات لتحديد سجلات قاعدة البيانات واسترجاع معلومات محددة.',
        focusEn: 'Use queries to select database records and retrieve specific information.',
        visualSteps: [['اختر الجدول', 'Choose a table'], ['حدد الحقول', 'Select fields'], ['أضف معيارًا', 'Add a criterion'], ['اعرض النتائج', 'View results']]
      },
      {
        titleAr: 'التقارير في قواعد البيانات',
        titleEn: 'Database Reports',
        focusAr: 'تنظيم نتائج قاعدة البيانات في تقارير واضحة قابلة للعرض والطباعة.',
        focusEn: 'Organize database results into clear reports for viewing and printing.',
        visualSteps: [['حدد مصدر البيانات', 'Choose data source'], ['رتب السجلات', 'Sort records'], ['نسق التقرير', 'Format the report'], ['اعرض أو اطبع', 'View or print']]
      }
    ],
    question: {
      id: 'sa-ds9-q2',
      textAr: 'ما الأداة المناسبة لاستخراج سجلات تطابق شرطًا من قاعدة البيانات؟',
      textEn: 'Which tool retrieves database records that match a condition?',
      optionsAr: ['الاستعلام', 'التقرير فقط', 'مخطط العرض', 'محرر الصور'],
      optionsEn: ['A query', 'A report only', 'A chart view', 'An image editor'],
      correctIndex: 0,
      conceptTestedAr: 'الاستعلامات',
      conceptTestedEn: 'Queries',
      explanationAr: 'يحدد الاستعلام السجلات والحقول وفق معايير تختارها.',
      explanationEn: 'A query selects records and fields according to chosen criteria.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds9-part1-unit3',
    titleAr: 'التجارة الإلكترونية',
    titleEn: 'E-Commerce',
    lessons: [
      {
        titleAr: 'مقدمة في التجارة الإلكترونية',
        titleEn: 'Introduction to E-Commerce',
        focusAr: 'التعرف على مفهوم التجارة الإلكترونية ومكوناتها ومزاياها وممارسات الشراء الآمن.',
        focusEn: 'Explore e-commerce, its components and benefits, and safe online shopping practices.',
        visualSteps: [['ابحث عن المنتج', 'Find a product'], ['تحقق من المتجر', 'Check the store'], ['قارن الخيارات', 'Compare options'], ['اتخذ قرارًا آمنًا', 'Make a safe choice']]
      },
      {
        titleAr: 'التعاملات عبر الإنترنت',
        titleEn: 'Online Transactions',
        focusAr: 'فهم خطوات التعاملات الإلكترونية والمحافظة على سرية بيانات الدفع والحساب.',
        focusEn: 'Understand online transactions and keep payment and account details private.',
        visualSteps: [['اختر خدمة موثوقة', 'Choose a trusted service'], ['أدخل البيانات المطلوبة', 'Enter required details'], ['تحقق من العملية', 'Review the transaction'], ['احتفظ بالتأكيد', 'Keep confirmation']]
      }
    ],
    question: {
      id: 'sa-ds9-q3',
      textAr: 'ما الإجراء الأكثر أمانًا قبل إدخال بيانات الدفع؟',
      textEn: 'What is the safest step before entering payment details?',
      optionsAr: ['التحقق من موثوقية المتجر والاتصال الآمن', 'إرسال البيانات في رسالة عامة', 'استخدام شبكة مجهولة دون تحقق', 'مشاركة رمز التحقق مع الآخرين'],
      optionsEn: ['Verify the store and secure connection', 'Post details in a public message', 'Use an unknown network without checking', 'Share the verification code'],
      correctIndex: 0,
      conceptTestedAr: 'التعاملات الإلكترونية الآمنة',
      conceptTestedEn: 'Safe online transactions',
      explanationAr: 'يقلل التحقق من موثوقية المتجر والاتصال من خطر كشف بيانات الدفع.',
      explanationEn: 'Checking the store and connection reduces the risk of exposing payment data.',
      difficulty: 'easy'
    }
  },
  {
    id: 'sa-ds9-part1-unit4',
    titleAr: 'البرمجة مع بايثون',
    titleEn: 'Programming with Python',
    lessons: [
      {
        titleAr: 'القوائم وصفوف البيانات',
        titleEn: 'Lists and Tuples',
        focusAr: 'تخزين مجموعة من القيم والتعامل معها باستخدام القوائم وصفوف البيانات في بايثون.',
        focusEn: 'Store collections of values and work with them using Python lists and tuples.',
        visualSteps: [['أنشئ مجموعة قيم', 'Create a collection'], ['اختر list أو tuple', 'Choose list or tuple'], ['استخدم الفهرس', 'Use an index'], ['اقرأ العناصر', 'Read items']]
      },
      {
        titleAr: 'المكتبات البرمجية',
        titleEn: 'Programming Libraries',
        focusAr: 'استيراد مكتبات بايثون والاستفادة من الدوال الجاهزة لتنفيذ مهام برمجية.',
        focusEn: 'Import Python libraries and use their built-in functions to perform programming tasks.',
        visualSteps: [['حدد المهمة', 'Identify a task'], ['اختر المكتبة', 'Choose a library'], ['استوردها', 'Import it'], ['استخدم الدالة', 'Use a function']]
      },
      {
        titleAr: 'بناء الواجهات الرسومية بلغة البايثون',
        titleEn: 'Building Graphical Interfaces with Python',
        focusAr: 'إنشاء واجهة رسومية أساسية تضم عناصر تفاعل مناسبة للمستخدم.',
        focusEn: 'Build a basic graphical interface with suitable interactive elements.',
        visualSteps: [['أنشئ نافذة', 'Create a window'], ['أضف عناصر', 'Add widgets'], ['اربط الأحداث', 'Connect events'], ['جرّب الواجهة', 'Test the interface']]
      },
      {
        titleAr: 'القواميس والقوائم المتداخلة والملفات',
        titleEn: 'Dictionaries, Nested Lists, and Files',
        focusAr: 'تنظيم البيانات في قواميس وقوائم متداخلة، وقراءة البيانات من الملفات أو حفظها فيها.',
        focusEn: 'Organize data with dictionaries and nested lists, and read from or write to files.',
        visualSteps: [['نظم أزواج المفتاح والقيمة', 'Organize key-value pairs'], ['رتب البيانات المتداخلة', 'Structure nested data'], ['افتح الملف', 'Open a file'], ['اقرأ أو احفظ', 'Read or save']]
      }
    ],
    question: {
      id: 'sa-ds9-q4',
      textAr: 'أي بنية بيانات تخزن عناصر مرتبطة بمفاتيح وقيم؟',
      textEn: 'Which data structure stores items as key-value pairs?',
      optionsAr: ['القاموس', 'العدد الصحيح', 'التعليق البرمجي', 'عامل المقارنة'],
      optionsEn: ['A dictionary', 'An integer', 'A code comment', 'A comparison operator'],
      correctIndex: 0,
      conceptTestedAr: 'القواميس في بايثون',
      conceptTestedEn: 'Python dictionaries',
      explanationAr: 'يخزن القاموس البيانات في أزواج من المفاتيح والقيم.',
      explanationEn: 'A dictionary stores data as key-value pairs.',
      difficulty: 'easy'
    }
  }
];

function createLecture(unit: Unit, order: number): Lecture {
  return {
    id: unit.id,
    order,
    titleAr: `الجزء الأول: ${unit.titleAr}`,
    titleEn: `Part One: ${unit.titleEn}`,
    subtitleAr: `${unit.lessons.length} دروس من كتاب المهارات الرقمية للصف الثالث المتوسط`,
    subtitleEn: `${unit.lessons.length} lessons from the Grade 9 Digital Skills textbook`,
    descriptionAr: `خريطة تعليمية أصلية مبنية على عناوين دروس الجزء الأول من كتاب المهارات الرقمية للصف الثالث المتوسط، طبعة 1448–2026. الشروح والرسوم من إعداد المنصة وليست نقلًا من الكتاب. المصدر: ${textbookUrl}`,
    descriptionEn: `An original learning guide based on lesson titles in Part One of the 1448–2026 Grade 9 Digital Skills textbook. Explanations and illustrations are platform-authored, not reproduced from the book. Source: ${textbookUrl}`,
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'COMPUTER_SCIENCE',
    gradeLevel: 'G9',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: 'وزارة التعليم بالمملكة العربية السعودية',
    ministryEn: 'Ministry of Education, Saudi Arabia',
    gradeLevelNameAr: 'الصف الثالث المتوسط',
    gradeLevelNameEn: 'Third Intermediate (Grade 9)',
    termAr: 'الجزء الأول من المقرر',
    termEn: 'Part One',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `دروس الجزء الأول`,
    lessonNumberEn: 'Part One lessons',
    warmupHookAr: `تتناول هذه الوحدة ${unit.titleAr} من خلال عناوين الدروس الواردة في كتاب المهارات الرقمية للصف الثالث المتوسط.`,
    warmupHookEn: `This unit explores ${unit.titleEn.toLowerCase()} through lessons listed in the Grade 9 Digital Skills textbook.`,
    learningOutcomesAr: unit.lessons.map((lesson) => lesson.focusAr),
    learningOutcomesEn: unit.lessons.map((lesson) => lesson.focusEn),
    keyConceptsAr: unit.lessons.map((lesson) => lesson.titleAr),
    keyConceptsEn: unit.lessons.map((lesson) => lesson.titleEn),
    summaryAr: `تضم هذه الوحدة ${unit.lessons.length} دروس في الجزء الأول من المقرر. الشروح والرسوم التعليمية أصلية من إعداد المنصة.`,
    summaryEn: `This unit contains ${unit.lessons.length} lessons in Part One. Explanations and teaching illustrations are original platform content.`,
    sections: unit.lessons.map((lesson, lessonIndex) => ({
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nهذا شرح أصلي موجز من إعداد المنصة، مستند إلى عنوان الدرس، وليس نقلًا لنص الكتاب.`,
      contentEn: `${lesson.focusEn}\n\nThis is a brief original platform explanation based on the lesson title, not reproduced textbook text.`,
      diagram: {
        id: `${unit.id}-lesson-${lessonIndex + 1}-illustration`,
        figureNumberAr: `شكل (${order}-${lessonIndex + 1})`,
        figureNumberEn: `Figure (${order}-${lessonIndex + 1})`,
        titleAr: `تصور بصري: ${lesson.titleAr}`,
        titleEn: `Visual guide: ${lesson.titleEn}`,
        captionAr: 'رسم تعليمي أصلي من إعداد المنصة لتوضيح فكرة الدرس، وليس صورة من الكتاب.',
        captionEn: 'An original platform-created teaching illustration, not an image copied from the textbook.',
        diagramType: 'digital_skills',
        visualSteps: lesson.visualSteps.map(([labelAr, labelEn]): LectureDiagramStep => ({ labelAr, labelEn }))
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

// The lesson titles are mapped to the official IEN-hosted 1448–2026 Part One book.
export const SAUDI_G9_DIGITAL_SKILLS_LECTURES: Lecture[] = units.map(createLecture);
export const SAUDI_G9_DIGITAL_SKILLS_LESSON_COUNT = units.reduce(
  (count, unit) => count + unit.lessons.length,
  0
);
export const SAUDI_G9_DIGITAL_SKILLS_TEXTBOOK_URL = textbookUrl;
