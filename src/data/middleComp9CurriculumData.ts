import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL COMPUTER SCIENCE & ICT (حاسب آلي وتكنولوجيا المعلومات - الصف الثالث الإعدادي / الشهادة الإعدادية / Prep 3)
// Official Grade 9 / Prep 3 National Curriculum Alignment:
// Unit 1: Problem Solving & Computational Thinking (حل المشكلات والتفكير الخوارزمي)
// Unit 2: Flowcharts & Algorithmic Logic (خرائط التدفق: التتابعية، اتخاذ القرار، والتكرار)
// Unit 3: Visual & Object-Oriented Programming (البرمجة كائنية التوجه ومفاهيم بيئة التطوير)
// Unit 4: Data Types, Variables, Constants & Conditional Logic (المتغيرات والشروط البرمجية)
// Unit 5: Cyber Safety, Digital Footprint, Ethical Hacking Awareness & AI Ethics (أمن المعلومات والذكاء الاصطناعي)
// ============================================================================

export const MIDDLE_COMPUTER_SCIENCE_G9_LECTURES: Lecture[] = [
  // ── LECTURE 1: أسلوب حل المشكلات والتفكير الخوارزمي ──
  {
    id: 'm-comp9-1',
    order: 1,
    titleAr: 'المحاضرة 1: أسلوب حل المشكلات (Problem Solving) وخطوات بناء الخوارزميات',
    titleEn: 'Lecture 1: Problem Solving Methodology & Algorithmic Thinking Foundations',
    subtitleAr: 'المراحل الخمس لحل أي مشكلة حاسوبية: تحديد المشكلة، إعداد الخوارزمية، كتابة البرنامج، اختباره، وتوثيقه',
    subtitleEn: 'Master the 5 systematic stages of software problem solving from formulation to documentation.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي / المتوسط (الشهادة الإعدادية) - الحاسب وتكنولوجيا المعلومات',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Computer Science & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الأولى: مفاهيم حل المشكلات وخرائط التدفق',
    unitTitleEn: 'Unit 1: Problem Solving & Flowcharts',
    lessonNumberAr: 'الدرس 1: خطوات حل المشكلات والخوارزميات',
    lessonNumberEn: 'Lesson 1: Problem Solving Methodology',

    warmupHookAr: 'حين يطلب منك إعداد وصفة كعكة شهية أو حساب مساحة قطعة أرض مثلثة، أنت لا تبدأ بالطهي أو الحساب العشوائي، بل تتبع خطوات مرتبة بدقة تفضي لنتيجة محددة! في علم الحاسوب، الحاسوب جهاز فائق السرعة لكنه يحتاج إلى خريطة تفكير منطقية واضحة لحل أي معضلة. هذه الخريطة تسمى "الخوارزمية" نسبة للعالم المسلم العبقري الخوارزمي!',
    warmupHookEn: 'Computers cannot solve problems spontaneously without systematic logical steps called algorithms, named after the pioneering mathematician Al-Khwarizmi. Learn how software engineers decompose complex challenges into solvable steps.',

    learningOutcomesAr: [
      'أن يعرف الطالب مفهوم المشكلة (Problem) والحل (Problem Solving) في علوم الحاسوب',
      'أن يرتب الطالب المراحل الخمس لحل المشكلات: تحديد المشكلة، إعداد خطوات الحل الخوارزمية، تصميم البرنامج، اختبار صحة البرنامج وتصحيح الأخطاء، وتوثيق البرنامج',
      'أن يحلل مدخلات ومخرجات وعمليات المعالجة الحسابية والمنطقية لأي مسألة برمجية',
      'أن يوضح أهمية مرحلة التوثيق (Documentation) في تطوير البرمجيات وصيانتها وحفظ حقوق الملكية',
      'أن يكتب خطوات خوارزمية (Algorithm) مرتبة منطقياً لحل مسائل حسابية واقعية'
    ],
    learningOutcomesEn: [
      'Define computational problem and problem solving methodology',
      'Sequence the 5 stages: Problem Definition, Algorithm formulation, Coding, Testing/Debugging, and Documentation',
      'Analyze inputs, outputs, and processing steps (arithmetic and logical) for computational scenarios',
      'Explain the significance of software documentation for maintenance and collaborative engineering',
      'Author sequentially ordered algorithms to solve real-world mathematical tasks'
    ],

    vocabulary: [
      {
        termAr: 'المشكلة (Problem)',
        termEn: 'Problem',
        definitionAr: 'موقف أو مسألة تتطلب إيجاد حل والوصول إلى هدف محدد عبر اتباع سلسلة خطوات مرتبة.',
        definitionEn: 'A situation or task requiring a specific goal achieved through ordered computational operations.'
      },
      {
        termAr: 'الخوارزمية (Algorithm)',
        termEn: 'Algorithm',
        definitionAr: 'مجموعة من الإجراءات والخطوات المرتبة ترتيباً منطقياً تؤدي عند تنفيذها إلى حل المسألة.',
        definitionEn: 'A finite set of well-defined sequential instructions designed to perform a specific computational task.'
      }
    ],

    sections: [
      {
        titleAr: '1. المراحل الخمس لحل المشكلات البرمجية',
        titleEn: '1. The 5 Systematic Stages of Problem Solving',
        contentAr: `تمر أي مشكلة برمجية بخمس خطوات متتابعة إلزامية:
1. **تحديد المشكلة (Problem Definition)**: تحديد المخرجات المطلوبة أولاً، ثم المدخلات المتاحة، ثم عمليات المعالجة (الحسابية أو المنطقية).
2. **إعداد خطوات الحل الخوارزمية (Algorithm & Flowcharts)**: كتابة الخطوات المرتبة منطقياً وتمثيلها رسومياً بخرائط التدفق.
3. **تصميم البرنامج على الحاسوب (Coding)**: ترجمة الخريطة إلى إحدى لغات البرمجة (مثل Python أو VB.Net).
4. **اختبار صحة البرنامج وتصحيح الأخطاء (Testing & Debugging)**: إدخال بيانات معروفة النتائج مسبقاً لاكتشاف أخطاء الحساب أو المنطق.
5. **توثيق البرنامج (Documentation)**: كتابة سجل كامل للمشروع (المبرمجون، تاريخ الإنشاء، المدخلات، المخرجات، ولغات البرمجة المستخدمة).`,
        contentEn: `Solving computational problems involves 5 essential phases:
1. Problem Definition: Identifying outputs, required inputs, and processing arithmetic/logic.
2. Algorithm & Flowcharting: Visualizing step-by-step logic.
3. Coding / Programming: Translating logic into programming syntax.
4. Testing & Debugging: Validating outputs against known test cases.
5. Documentation: Maintaining complete project metadata for future maintenance.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-mcomp9-1',
      titleAr: 'اختبار مفاهيم حل المشكلات',
      titleEn: 'Problem Solving Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما هي أولى خطوات حل المشكلات الحاسوبية؟',
          textEn: 'What is the very first step in solving a computational problem?',
          optionsAr: ['توثيق البرنامج', 'تحديد المشكلة (المخرجات والمدخلات والمعالجة)', 'اختبار صحة البرنامج', 'كتابة الكود البرمجي'],
          optionsEn: ['Documentation', 'Problem Definition (Outputs, Inputs & Processing)', 'Testing & Debugging', 'Writing source code'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'تحديد المشكلة هو الخطوة الأولى وتتضمن تحديد المخرجات المطلوبة والمدخلات المتاحة وعمليات المعالجة.',
          explanationEn: 'Problem definition is step 1, requiring identification of target outputs, available inputs, and processing operations.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: خرائط التدفق (Flowcharts) ──
  {
    id: 'm-comp9-2',
    order: 2,
    titleAr: 'المحاضرة 2: خرائط التدفق (Flowcharts) - الرموز المعيارية والتفرع والتكرار',
    titleEn: 'Lecture 2: Standard Flowcharts - Sequential, Decision Branches & Loops',
    subtitleAr: 'الرموز القياسية الاصطلاحية لخرائط التدفق وتطبيق التفرع (Decision) وحلقات التكرار (Loops)',
    subtitleEn: 'Master ANSI standard flowchart symbols, conditional branching, and iterative loops.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي / المتوسط (الشهادة الإعدادية) - الحاسب وتكنولوجيا المعلومات',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Computer Science & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الأولى: مفاهيم حل المشكلات وخرائط التدفق',
    unitTitleEn: 'Unit 1: Problem Solving & Flowcharts',
    lessonNumberAr: 'الدرس 2: الرموز القياسية لخرائط التدفق',
    lessonNumberEn: 'Lesson 2: Flowchart Symbols & Decision Logic',

    warmupHookAr: 'يقول المثل الإنجليزي: "الصورة تساوي ألف كلمة". في عالم البرمجة، خريطة التدفق هي الرسم الهندسي الذي يتيح لأي مبرمج في العالم - أياً كانت لغته - فهم تسلسل البرنامج في ثوانٍ معدودة! كيف تميز بين متوازي الأضلاع والمستطيل والمعين؟ وكيف تمثل قراراً شرطياً بحجم "هل الطالب ناجح أم راسب"؟',
    warmupHookEn: 'Flowcharts represent programming logic universally through standardized geometric symbols. Learn how shapes distinguish between user inputs, computations, and conditional decisions.',

    learningOutcomesAr: [
      'أن يعدد الطالب الرموز القياسية المعيارية لخرائط التدفق واستخدام كل رمز',
      'أن يستخدم الشكل البيضاوي (Terminal) للبداية والنهاية، ومتوازي الأضلاع (Parallelogram) للإدخال والإخراج',
      'أن يستخدم المستطيل (Rectangle) للعمليات الحسابية والمعالجة، والمعين (Rhombus/Diamond) لاتخاذ القرار والتفرع',
      'أن يرسم خريطة تدفق بسيطة لحساب جمع رقمين أو مساحة دائرة',
      'أن يرسم خريطة تدفق تشتمل على تفرع شرطي (Decision) وحلقات تكرارية (Loops) لطباعة أرقام متسلسلة'
    ],
    learningOutcomesEn: [
      'List standard flowchart symbols and their designated logical functions',
      'Apply oval terminals for Start/End, and parallelograms for Input/Output operations',
      'Apply rectangles for computational processing, and diamonds for decision/branching logic',
      'Draw sequential flowcharts calculating sum of numbers or geometric area',
      'Construct branching and looping flowcharts implementing counter increments and exit conditions'
    ],

    vocabulary: [
      {
        termAr: 'خريطة التدفق (Flowchart)',
        termEn: 'Flowchart',
        definitionAr: 'تمثيل تخطيطي يعتمد على الرسم بأشكال قياسية لتوضيح ترتيب العمليات اللازمة لحل مشكلة ما.',
        definitionEn: 'A graphical diagram utilizing standardized shapes to depict the step-by-step sequence of operations.'
      },
      {
        termAr: 'اتخاذ القرار / التفرع (Decision / Branching)',
        termEn: 'Decision',
        definitionAr: 'رمز المعين في خريطة التدفق ويكون له مدخل واحد ومخرجان أو أكثر (Yes/No) بناءً على شرط منطقي.',
        definitionEn: 'A diamond shape evaluating a Boolean conditional test yielding multiple execution paths.'
      }
    ],

    sections: [
      {
        titleAr: '1. الرموز القياسية لخرائط التدفق',
        titleEn: '1. Standard Flowchart Geometric Symbols',
        contentAr: `تعتمد خرائط التدفق على رموز هندسية قياسية ثابتة:
- **الشكل البيضاوي (Terminal)**: يمثل نقطة البداية (Start) أو النهاية (End).
- **متوازي الأضلاع (Input / Output)**: يمثل إدخال البيانات (مثل Read, Enter, Input) أو إخراج النتائج (مثل Print, Output).
- **المستطيل (Process)**: يمثل عملية حسابية أو معالجة (مثل: Sum = A + B).
- **المعين (Decision)**: يمثل سؤالاً منطقياً له إجابتان (نعم / لا) أو (True / False)، ويتفرع منه خطوط تدفق متعددة.
- **خطوط الاتجاه والأسهم (Flow Lines)**: توضح اتجاه سير العمليات في الخريطة.`,
        contentEn: `Flowcharts use standard ANSI geometric symbols:
- Oval (Terminal): Start and End boundaries.
- Parallelogram: Input operations (Read/Enter) and Output operations (Print/Display).
- Rectangle (Process): Arithmetic calculations and state assignments.
- Diamond (Decision): Conditional evaluation branching into Yes/No paths.
- Flow Lines (Arrows): Direct the sequential flow of computational execution.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-mcomp9-2',
      titleAr: 'اختبار رموز خرائط التدفق',
      titleEn: 'Flowchart Symbols Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'أي من الأشكال الهندسية التالية يستخدم في خرائط التدفق لاتخاذ القرار والتفرع الشرطي؟',
          textEn: 'Which geometric shape is used in flowcharts for conditional decision making and branching?',
          optionsAr: ['المستطيل', 'المعين', 'متوازي الأضلاع', 'الشكل البيضاوي'],
          optionsEn: ['Rectangle', 'Diamond (Rhombus)', 'Parallelogram', 'Oval'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'شكل المعين (Decision) هو المخصص لاتخاذ القرار واختبار الشروط المنطقية وله مساران (Yes/No).',
          explanationEn: 'The diamond shape is specifically designated for decision logic and evaluating conditions with multiple exit paths.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: مفاهيم البرمجة كائنية التوجه وتصميم الواجهات ──
  {
    id: 'm-comp9-3',
    order: 3,
    titleAr: 'المحاضرة 3: مفاهيم البرمجة كائنية التوجه (OOP) وتصميم واجهات المستخدم',
    titleEn: 'Lecture 3: Object-Oriented Programming (OOP) & Graphical User Interfaces',
    subtitleAr: 'مفاهيم الكائنات، الخصائص، الوسائل، والأحداث (Properties, Methods & Events) وبيئة IDE',
    subtitleEn: 'Master Classes, Objects, GUI Controls, Properties, Event-Driven Programming & IDEs.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي / المتوسط (الشهادة الإعدادية) - الحاسب وتكنولوجيا المعلومات',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Computer Science & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الثانية: مقدمة في لغات البرمجة الحديثة وبيئة التطوير',
    unitTitleEn: 'Unit 2: Modern Programming & Development Environments',
    lessonNumberAr: 'الدرس 3: البرمجة الموجهة بالحدث والكائنات',
    lessonNumberEn: 'Lesson 3: Object-Oriented & Event-Driven Concepts',

    warmupHookAr: 'حين تنقر بزر الفأرة على زر "تسجيل الدخول" في أي تطبيق، ينفذ الحاسوب كوداً معيناً فوراً! هذا الزر في لغة البرمجة هو "كائن" له شكل ولون وخصائص، والضغط عليه يسمى "حدثاً" (Event). هذا النمط الحديث يسمى البرمجة الموجهة بالأحداث (Event-Driven Programming). كيف نصمم واجهة تفاعلية ونبرمج أزرارها؟',
    warmupHookEn: 'When you click a Login button, software responds via Event-Driven architecture. Discover how controls act as objects with visual properties, actionable methods, and event listeners.',

    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم البرمجة كائنية التوجه (Object-Oriented Programming)',
      'أن يميز بين العناصر الأربعة للكائن: الخصائص (Properties)، الوسائل (Methods)، والأحداث (Events)',
      'أن يتعرف على مكونات بيئة التطوير المتكاملة (IDE): نافذة النموذج (Form)، صندوق الأدوات (Toolbox)، نافذة الخصائص (Properties Window)، ومستكشف الحل (Solution Explorer)',
      'أن يضيف أدوات التحكم الأساسية على النموذج: الزر (Button)، العنوان (Label)، وصندوق النص (TextBox)',
      'أن يضبط خصائص الأدوات مثل (Name, Text, BackColor, Font, ForeColor)'
    ],
    learningOutcomesEn: [
      'Explain fundamental concepts of Object-Oriented and Event-Driven Programming',
      'Distinguish between object attributes: Properties, Methods, and Events',
      'Navigate key components of an IDE: Form Designer, Toolbox, Properties Window, and Solution Explorer',
      'Place foundational controls onto GUI forms: Button, Label, TextBox, and ListBox',
      'Configure essential control properties such as Name, Text, BackColor, and Font'
    ],

    vocabulary: [
      {
        termAr: 'الكائن (Object)',
        termEn: 'Object',
        definitionAr: 'كتلة بناء أساسية في لغات البرمجة الحديثة لها خصائص تميزها ووسائل وسلوكيات وأحداث تقع عليها.',
        definitionEn: 'An instance possessing defined attributes (properties), callable actions (methods), and triggerable events.'
      },
      {
        termAr: 'البرمجة الموجهة بالحدث (Event-Driven Programming)',
        termEn: 'Event-Driven Programming',
        definitionAr: 'نمط برمجي يتم فيه تنفيذ أوامر وكود معين استجابة لحدث يقوم به المستخدم (كالنقر بالفأرة).',
        definitionEn: 'A programming paradigm where script execution is determined by user events such as clicks and keystrokes.'
      }
    ],

    sections: [
      {
        titleAr: '1. أركان الكائن ومكونات بيئة IDE',
        titleEn: '1. Pillars of Objects & IDE Components',
        contentAr: `في البرمجة الحديثة، يتكون كل كائن (Object) من:
1. **الخصائص (Properties)**: تصف الكائن وتحدد شكله ومظهره (مثل: الحجم، اللون BackColor، النص Text، والاسم Name).
2. **الوسائل (Methods)**: وظائف وأفعال يقوم بها الكائن عند استدعائها.
3. **الأحداث (Events)**: فعل يقع على الكائن ويستجيب له بكتابة كود معالج للحدث (مثل: حدث Click عند نقر الزر).

**أهم أدوات التحكم الأساسية (Controls)**:
- **Button (الزر)**: ينقر عليه المستخدم لتنفيذ مهمة برمجية محددة.
- **Label (أداة العنوان)**: تعرض نصاً توضيحياً للمستخدم لا يمكنه تعديله مباشرة أثناء التشغيل.
- **TextBox (صندوق النص)**: يتيح للمستخدم إدخال نصوص أو أرقام إلى البرنامج.`,
        contentEn: `Every programming object consists of:
1. Properties: Visual and structural parameters (Name, Text, BackColor, Size).
2. Methods: Internal procedures callable by code.
3. Events: User-triggered stimuli (e.g., Click, DoubleClick, KeyPress).
Essential Controls:
- Button: Executes commands on click.
- Label: Displays informative non-editable text captions.
- TextBox: Accepts user textual or numerical input during runtime.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-mcomp9-3',
      titleAr: 'اختبار أدوات وخصائص البرمجة',
      titleEn: 'GUI Controls & Properties Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما الفرق بين خاصية (Name) وخاصية (Text) لأدوات التحكم؟',
          textEn: 'What is the distinction between the Name and Text properties of a GUI control?',
          optionsAr: ['لا يوجد أي فرق بينهما', 'خاصية Name تحدد اسم الأداة في الكود البرمجي، بينما Text هو النص الظاهر للمستخدم', 'خاصية Text تغير لون الخلفية وخاصية Name تغير حجم الخط', 'خاصية Name لا يمكن تغييرها أبداً'],
          optionsEn: ['No difference exists', 'Name defines control identifier in code; Text defines onscreen displayed caption', 'Text changes background; Name alters font size', 'Name can never be modified'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'خاصية Name هي المعرف البرمجي للأداة داخل الكود البرمجي، أما Text فهو النص الظاهر على وجه الأداة للمستخدم.',
          explanationEn: 'Name is the code identifier used by programmers; Text is the visible title presented on the user interface.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: المتغيرات والثوابت والشروط البرمجية ──
  {
    id: 'm-comp9-4',
    order: 4,
    titleAr: 'المحاضرة 4: المتغيرات والثوابت والشروط البرمجية (Variables, Constants & IF Conditions)',
    titleEn: 'Lecture 4: Data Types, Variables, Constants & Conditional Statements',
    subtitleAr: 'الإعلان عن المتغيرات وأنواع البيانات الرقمية والحرفية وقواعد تسميتها وجمل IF الشرطية',
    subtitleEn: 'Master variables declaration, data types, naming rules, and IF-THEN-ELSE logic.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي / المتوسط (الشهادة الإعدادية) - الحاسب وتكنولوجيا المعلومات',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Computer Science & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الثالثة: البناء البرمجي والمتغيرات والشروط',
    unitTitleEn: 'Unit 3: Variables, Data Types & Conditionals',
    lessonNumberAr: 'الدرس 4: المتغيرات وجمل الشرط والتفرع',
    lessonNumberEn: 'Lesson 4: Variables & Conditional Statements',

    warmupHookAr: 'حين تخزن درجات طالب أو عمره أو اسمه في برنامج المدرسة، أين تذهب هذه البيانات فيزيائياً؟ إنها تستقر في ذاكرة الوصول العشوائي (RAM) في عناوين محددة تسمى "متغيرات" (Variables)! ولماذا نحتاج للثوابت مثل قيمة النسبية التقريبية Pi = 3.14؟ وكيف يتخذ البرنامج قراراً ذكياً: "إذا كان المعدل >= 50 اكتب ناجح، وإلا اكتب راسب"؟',
    warmupHookEn: 'Variables allocate addressable slots in RAM to hold changing data, while Constants lock values that never change during execution. Discover conditional statements that give software real decision-making power.',

    learningOutcomesAr: [
      'أن يعرف الطالب المتغيرات (Variables) والثوابت (Constants) ومواقع تخزينها في ذاكرة RAM',
      'أن يصنف أنواع البيانات الشائعة: عددية صحيحة (Integer)، عددية عشرية (Single/Double)، حرفية (String)، ومنطقية (Boolean)',
      'أن يطبق قواعد تسمية المتغيرات (تبدأ بحرف، لا تحتوي على مسافات أو رموز خاصة، وليست كلمة محجوزة)',
      'أن يكتب جملة الإعلان عن متغير (Dim) وثابت (Const) وإعطائهما قيماً أولية',
      'أن يستخدم جملة الشرط (IF ... THEN ... ELSE) لاتخاذ القرارات البرمجية بناءً على الشروط المنطقية'
    ],
    learningOutcomesEn: [
      'Define Variables and Constants and explain their memory allocation in RAM',
      'Categorize data types: Integers, Floating-point numbers, Strings, and Booleans',
      'Apply standard variable naming conventions (alpha lead, no spaces, no reserved keywords)',
      'Author valid declaration statements for variables (Dim) and constants (Const)',
      'Implement conditional branching using IF ... THEN ... ELSE structures'
    ],

    vocabulary: [
      {
        termAr: 'المتغير (Variable)',
        termEn: 'Variable',
        definitionAr: 'مكان محجوز في ذاكرة الحاسوب (RAM) له اسم ونوع بيان وتتغير قيمته أثناء تشغيل البرنامج.',
        definitionEn: 'A named storage location in RAM holding a specific data type whose value can alter during execution.'
      },
      {
        termAr: 'جملة IF الشرطية (Conditional IF)',
        termEn: 'IF Statement',
        definitionAr: 'جملة برمجية لاختبار شرط منطقي؛ إذا تحقق (True) ينفذ مجموعة أوامر، وإذا لم يتحقق ينفذ أوامر بديلة.',
        definitionEn: 'A control flow statement executing code blocks conditionally based on Boolean evaluation.'
      }
    ],

    sections: [
      {
        titleAr: '1. أنواع البيانات وجمل الشرط في البرمجة',
        titleEn: '1. Data Types and Decision Structures',
        contentAr: `تنقسم أنواع البيانات الأساسية في لغات البرمجة إلى:
- **بيانات عددية (Numeric)**: صحيحة مثل (Integer) أو كسرية عشرية مثل (Single, Double).
- **بيانات حرفية (Character/String)**: نصوص وسلاسل حرفية تخزن بين علامات تنصيص.
- **بيانات منطقية (Boolean)**: تأخذ إحدى قيمتين فقط: (True أو False).
- **بيانات متنوعة**: مثل التاريخ (Date) والوقت.

**صيغة جملة IF الشرطية البسيطة والمركبة**:
\`\`\`
If Condition Then
    // أوامر تنفذ عند تحقق الشرط (True)
Else
    // أوامر تنفذ عند عدم تحقق الشرط (False)
End If
\`\`\``,
        contentEn: `Data types classify memory allocations:
- Numeric: Integers and Floating points (Single, Double).
- Textual: Strings and Characters enclosed in quotes.
- Boolean: Logical True or False.
- Temporal: Date and Time values.
IF conditional syntax executes specific blocks when boolean criteria evaluate to True or False.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-mcomp9-4',
      titleAr: 'اختبار المتغيرات وجمل الشرط',
      titleEn: 'Variables & Conditionals Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'أي من أسماء المتغيرات التالية يعتبر اسماً غير صحيح وفق قواعد لغات البرمجة؟',
          textEn: 'Which of the following variable names is INVALID according to standard programming rules?',
          optionsAr: ['student_age', 'totalScore', '2nd_number', 'userAddress'],
          optionsEn: ['student_age', 'totalScore', '2nd_number', 'userAddress'],
          correctIndex: 2,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'اسم المتغير (2nd_number) غير صحيح لأنه يبدأ برقم، وقواعد التسمية تشترط أن يبدأ بحرف هجائي أو شرطة سفلية.',
          explanationEn: '2nd_number is invalid because variable identifiers cannot begin with a numeric digit.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: الحلقات التكرارية وأمن المعلومات والذكاء الاصطناعي ──
  {
    id: 'm-comp9-5',
    order: 5,
    titleAr: 'المحاضرة 5: الحلقات التكرارية (Loops) وأمن المعلومات وأخلاقيات الذكاء الاصطناعي',
    titleEn: 'Lecture 5: Iterative Loops (For..Next), Cybersecurity, Digital Safety & AI Ethics',
    subtitleAr: 'تكرار الأوامر بحلقة For..Next والحماية من التهديدات السيبرانية والتصيد الاحتيالي والذكاء الاصطناعي الأخلاقي',
    subtitleEn: 'Master iterative programming counters, loop steps, cyber threats, phishing, and ethical AI principles.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي / المتوسط (الشهادة الإعدادية) - الحاسب وتكنولوجيا المعلومات',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Computer Science & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الرابعة: التكرار وأمن الفضاء الرقمي',
    unitTitleEn: 'Unit 4: Loops & Digital Security',
    lessonNumberAr: 'الدرس 5: التكرار وأمن المعلومات والذكاء الاصطناعي',
    lessonNumberEn: 'Lesson 5: Loops, Cyber Safety & AI Ethics',

    warmupHookAr: 'إذا طلب منك طباعة أرقام الهواتف لمليون طالب، هل ستكتب مليون سطر برمجي؟ بالطبع لا! بأسطر ثلاثة فقط في حلقة تكرارية (Loop) يمكنك إعطاء الأمر للحاسوب ليكرر المهمة في جزء من الثانية! ولكن مع هذا التطور الهائل وظهور الذكاء الاصطناعي، كيف تحمي بياناتك وهويتك الرقمية من الاختراق والتصيد الاحتيالي؟',
    warmupHookEn: 'Loops empower computers to iterate tasks millions of times within seconds. Alongside massive computing capability and Artificial Intelligence, understanding cybersecurity, phishing prevention, and ethical AI usage is critical.',

    learningOutcomesAr: [
      'أن يشرح الطالب فائدة الحلقات التكرارية (Loops) في اختصار الأكواد والوقت والجهد',
      'أن يطبق جملة التكرار (For ... Next) محدداً قيمة البداية وقيمة النهاية ومقدار الزيادة (Step)',
      'أن يحدد التهديدات السيبرانية الأكثر خطورة: الفيروسات (Viruses)، برامج الفدية (Ransomware)، والتصيد الاحتيالي (Phishing)',
      'أن يطبق إرشادات الأمان الرقمي: كلمات المرور القوية المعقدة، والتحقق بخطوتين (2FA)، وتجنب الروابط المشبوهة',
      'أن يوضح الأخلاقيات الأساسية للتعامل مع الذكاء الاصطناعي واحترام حقوق الملكية الفكرية والخصوصية'
    ],
    learningOutcomesEn: [
      'Explain the purpose and efficiency of loops in condensing code execution',
      'Construct For ... Next iterative loops specifying start value, end value, and step increment',
      'Identify major cyber threats: malware, ransomware, and social engineering / phishing attacks',
      'Implement essential cyber hygiene: complex passwords, Two-Factor Authentication (2FA), and link scrutiny',
      'Articulate ethical principles in deploying Artificial Intelligence, intellectual property, and data privacy'
    ],

    vocabulary: [
      {
        termAr: 'الحلقة التكرارية (Loop)',
        termEn: 'Loop / Iteration',
        definitionAr: 'بنية برمجية تسمح بتكرار تنفيذ كتلة من الأوامر عدداً محدداً من المرات أو طالما تحقق شرط معين.',
        definitionEn: 'A programming construct executing a block of instructions repeatedly until a terminating condition is met.'
      },
      {
        termAr: 'التصيد الاحتيالي (Phishing)',
        termEn: 'Phishing',
        definitionAr: 'محاولة خداع رقمية عبر رسائل أو مواقع وهمية مزيفة لسرقة بيانات المستخدم السرية وكلمات المرور.',
        definitionEn: 'Social engineering deception using fraudulent communications to illicitly capture sensitive credentials.'
      }
    ],

    sections: [
      {
        titleAr: '1. تركيب حلقة For..Next والحماية السيبرانية',
        titleEn: '1. For..Next Iteration Structure & Cybersecurity Rules',
        contentAr: `**1. حلقة For ... Next**:
تستخدم عندما يكون عدد مرات التكرار معروفاً مسبقاً.
\`\`\`
For Counter = Start To End [Step Increment]
    // أوامر تتكرر
Next
\`\`\`
إذا أردنا طباعة الأعداد الفردية من 1 إلى 9: نستخدم Step 2.
إذا كانت الزيادة 1 يمكن الاستغناء عن كتابة Step لأنها القيمة الافتراضية.

**2. إرشادات الأمان السيبراني والذكاء الاصطناعي**:
- **كلمة المرور القوية**: تتكون من 8 خانات على الأقل، وتجمع بين أحرف كبيرة وصغيرة وأرقام ورموز خاصة ($#@!).
- **التحقق بخطوتين (Two-Factor Authentication)**: إضافة طبقة أمان ثانية عبر رسالة للهاتف أو تطبيق المصادقة.
- **أخلاقيات الذكاء الاصطناعي (AI Ethics)**: عدم استخدام أدوات التوليد الآلي لانتحال شخصيات الآخرين أو نشر معلومات مضللة، وعزو الأعمال لأصحابها.`,
        contentEn: `1. The For ... Next loop executes when iteration bounds are known beforehand:
\`\`\`
For Counter = Start To End [Step Increment]
    ' Executable operations
Next
\`\`\`
2. Cyber hygiene rules:
- Strong passwords: 8+ characters combining uppercase, lowercase, numbers, and symbols.
- Two-Factor Authentication (2FA): Secondary verification token.
- AI Ethics: Respecting intellectual attribution, avoiding deceptive impersonation, and maintaining data privacy.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-mcomp9-5',
      titleAr: 'اختبار التكرار والأمان الرقمي',
      titleEn: 'Loops & Cybersecurity Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'كم مرة ستتكرر الأوامر داخل حلقة: For i = 1 To 5 Step 1؟',
          textEn: 'How many times will code execute inside the loop: For i = 1 To 5 Step 1?',
          optionsAr: ['3 مرات', '4 مرات', '5 مرات', '6 مرات'],
          optionsEn: ['3 times', '4 times', '5 times', '6 times'],
          correctIndex: 2,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'ستتكرر الحلقة 5 مرات لقيم i وهي: (1, 2, 3, 4, 5).',
          explanationEn: 'The loop will iterate exactly 5 times across counter values 1, 2, 3, 4, and 5.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
