import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL COMPUTER SCIENCE & ICT — GRADE 10 (حاسب آلي وتكنولوجيا المعلومات 1 ثانوي)
// Official Grade 10 / Secondary 1 National Ministry & Language School Curriculum Alignment:
// Unit 1: Problem Solving, Algorithms & Flowcharts (Steps of problem solving, standard flowchart symbols)
// Unit 2: Python Programming Fundamentals (Variables, Data Types: int, float, str, bool, Input/Output)
// Unit 3: Conditional Statements & Control Flow (if, if-else, nested if, relational & logical operators)
// Unit 4: Loops & Iterations (for loops with range(), while loops, loop counters & accumulators)
// Unit 5: Data Structures, Cybersecurity & Databases (Lists, Dictionaries, Functions, Cyber Safety & Data Privacy)
// ============================================================================

export const HIGH_COMP_G10_LECTURES: Lecture[] = [
  // ── LECTURE 1: PROBLEM SOLVING, ALGORITHMS & FLOWCHARTS ──
  {
    id: 'h10-cs-1',
    order: 1,
    titleAr: 'المحاضرة 1: حل المشكلات، الخوارزميات، وخرائط التدفق (Flowcharts)',
    titleEn: 'Lecture 1: Problem Solving, Algorithms & Flowchart Design',
    subtitleAr: 'مراحل حل المشكلات الخمس، كتابة الخوارزميات المنطقية، والرموز القياسية لرسم خرائط التدفق المتتابعة والتفرعية',
    subtitleEn: 'Master the 5 problem-solving stages, pseudocode algorithms, and standard flowchart shapes for sequential and branching decision logic.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School ICT & Computer Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: حل المشكلات والتفكير الحوسبي',
    unitTitleEn: 'Unit 1: Problem Solving & Computational Thinking',
    lessonNumberAr: 'الدرس 1: الخوارزميات وخرائط التدفق',
    lessonNumberEn: 'Lesson 1: Algorithms & Flowcharts',

    warmupHookAr: 'قبل أن يكتب مبرمج أي سطر من الشيفرة البرمجية لتطبيق مثل WhatsApp أو Google Maps، يجب عليه أولاً تحليل المشكلة خطوة بخطوة ورسم مسار منطقي واضح! خريطة التدفق (Flowchart) هي اللغة المرئية العالمية التي تحول الأفكار المعقدة إلى مخططات تدفق هندسية تمهيداً لكتابة البرامج بأي لغة برمجة في العالم!',
    warmupHookEn: 'Before writing software code, engineers design logical blueprints through algorithmic flowcharts. Mastering systematic problem decomposition is the universal cornerstone of all computer programming.',

    learningOutcomesAr: [
      'أن يعدد الطالب مراحل حل المشكلة الخمس: تحديد المشكلة، إعداد خطوات الحل (الخوارزمية)، تصميم البرنامج، اختبار صحة البرنامج، وتوثيق البرنامج',
      'أن يكتب خوارزمية (Algorithm) مرتبة منطقياً لحل مشكلة معينة',
      'أن يستخدم الرموز القياسية لخرائط التدفق: البداية/النهاية (Terminal)، الإدخال/الإخراج (Parallelogram)، العمليات الحسابية (Rectangle)، واتخاذ القرار (Diamond)',
      'أن يرسم خرائط تدفق للمسائل البسيطة المتتابعة ومسائل اتخاذ القرار والتفرع (Branching Decisions)'
    ],
    learningOutcomesEn: [
      'Identify the 5 problem-solving phases: definition, algorithm formulation, coding, debugging, and documentation',
      'Formulate structured step-by-step algorithms for computational tasks',
      'Apply standard flowchart symbols: Terminal, I/O Parallelogram, Process Rectangle, and Decision Diamond',
      'Construct sequential and branching conditional flowcharts'
    ],

    vocabulary: [
      {
        termAr: 'الخوارزمية (Algorithm)',
        termEn: 'Algorithm',
        definitionAr: 'مجموعة من الإجراءات والخطوات المرتبة ترتيباً منطقياً والتي يتم اتباعها للوصول إلى حل مشكلة معينة (سُميت نسبة للعالم المسلم الخوارزمي).',
        definitionEn: 'A finite sequence of well-defined, logically ordered steps for solving a specific computational problem.'
      },
      {
        termAr: 'خريطة التدفق (Flowchart)',
        termEn: 'Flowchart',
        definitionAr: 'تمثيل تخطيطي يعتمد على الرسم بأشكال هندسية قياسية لتوضيح ترتيب العمليات اللازمة لحل مسألة محددة.',
        definitionEn: 'A graphical representation using standardized geometric symbols to depict the procedural flow of an algorithm.'
      },
      {
        termAr: 'توثيق البرنامج (Program Documentation)',
        termEn: 'Program Documentation',
        definitionAr: 'تسجيل جميع خطوات حل المشكلة، المدخلات، المخرجات، خريطة التدفق، لغة البرمجة، وتاريخ الإنشاء لحفظ وتحديث البرنامج مستقبلاً.',
        definitionEn: 'The recorded repository of algorithm design, flowchart, codebase comments, and testing logs for software maintenance.'
      }
    ],

    keyConceptsAr: [
      'مراحل حل المشكلة: 1) تحديد المشكلة (المدخلات والمخرجات والحل)، 2) إعداد الخوارزمية، 3) كتابة الكود، 4) الاختبار وتصحيح الأخطاء، 5) التوثيق',
      'رموز خرائط التدفق: الشكل البيضاوي (Start/End)، متوازي الأضلاع (Input/Output)، المستطيل (Process / Calculation)، والمعين (Decision مع خطوط نعم/لا)',
      'تفرع القرار (Decision): عند وجود شرط منطقي (مثل $x > 50$) ينتج عنه مساران (True / False)',
      'فوائد خرائط التدفق: تيسير قراءة وفهم المشكلة، توثيق أفضل للبرامج الكبيرة، وسهولة شرح البرنامج للمطورين الآخرين'
    ],
    keyConceptsEn: [
      'Five problem-solving stages: Problem definition, Algorithm, Coding, Debugging, Documentation',
      'Flowchart symbols: Oval (Terminal), Parallelogram (I/O), Rectangle (Processing), Diamond (Decision/Branching)',
      'Conditional branching: Evaluates boolean expressions yielding True/False logic branches',
      'Flowchart advantages: Simplifies logic communication, enhances code maintainability, and clarifies decision trees'
    ],

    summaryAr: 'تغطي المحاضرة الأولى من حاسب أولى ثانوي المنهج الرسمي لحل المشكلات: خطوات التفكير الحوسبي، صياغة الخوارزميات، واستخدام الأشكال القياسية لخرائط التدفق للمسائل الحسابية والتفرعية.',
    summaryEn: 'Comprehensive Grade 10 computer science lecture: structured problem solving, algorithmic formulation, and flowchart drafting with standard I/O, process, and decision shapes.',

    sections: [
      {
        titleAr: '1. مراحل حل المشكلات وصياغة الخوارزميات',
        titleEn: '1. Problem Solving Lifecycle & Algorithms',
        contentAr: '1) مراحل حل المشكلة الخمس:\n- 1. تحديد المشكلة (Problem Definition): تحديد المخرجات المطلوبة، المدخلات المتوفرة، وعمليات المعالجة الحسابية والمنطقية.\n- 2. إعداد خطوات الحل الخوارزمية (Algorithm Formulation): كتابة خطوات منطقية متسلسلة باستخدام لغة مبسطة ورسم خريطة التدفق.\n- 3. تصميم البرنامج على الحاسوب (Coding): تحويل خريطة التدفق إلى شيفرة برمجية بإحدى لغات البرمجة كـ Python.\n- 4. اختبار صحة البرنامج وتصحيح الأخطاء (Testing & Debugging): إدخال بيانات معروفة النتائج مسبقاً لمطابقة المخرجات واكتشاف أي خطأ برمجي.\n- 5. توثيق البرنامج (Documentation): كتابة دليل شامل لكل ما يتعلق بالبرنامج والمشاركين في تصميمه لتسهيل التعديل المستقبلي.',
        contentEn: 'Problem-solving lifecycle encompasses problem definition, algorithmic logic, computer coding, debugging verification, and comprehensive documentation.'
      },
      {
        titleAr: '2. الرموز القياسية لخرائط التدفق والتفرع',
        titleEn: '2. Standard Flowchart Notations & Decision Logic',
        contentAr: '1) الرموز الهندسية القياسية:\n- الشكل البيضاوي (Oval): البداية (Start) والنهاية (End).\n- متوازي الأضلاع (Parallelogram): الإدخال (Input / Read) والإخراج (Print / Output).\n- المستطيل (Rectangle): المعالجة والعمليات الحسابية (مثل $Sum = A + B$).\n- المعين (Diamond): اتخاذ القرار والمقارنة (Decision) وله مدخل واحد ويخرج منه اتجاهان على الأقل (Yes / No).\n- خطوط الاتجاه (Flow Lines): أسهم توضح اتجاه سير تدفق التعليمات.',
        contentEn: 'Standard notation: Oval for terminal points, Parallelogram for I/O, Rectangle for computations, Diamond for conditional branching, and arrows for directional flow.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-cs1-1',
        questionAr: 'اكتب الخوارزمية وارسم خريطة التدفق لقراءة درجة طالب (Score)، وطباعة كلمة "ناجح" (Passed) إذا كانت الدرجة $\\ge 50$، وطباعة "راسب" (Failed) إذا كانت أقل من 50؟',
        questionEn: 'Write algorithm steps and describe the flowchart to read a student\'s Score and print "Passed" if Score ≥ 50, otherwise print "Failed"?',
        solutionStepsAr: [
          'الخطوة 1: (Start) بداية البرنامج في شكل بيضاوي.',
          'الخطوة 2: (Input Score) إدخال درجة الطالب في متوازي أضلاع.',
          'الخطوة 3: (Decision) في شكل معين نختبر الشرط: هل Score >= 50؟',
          'الخطوة 4: إذا كانت الإجابة نعم (Yes)، ننتقل لمتوازي أضلاع ونطبع (Print "Passed").',
          'الخطوة 5: إذا كانت الإجابة لا (No)، ننتقل لمتوازي أضلاع ونطبع (Print "Failed").',
          'الخطوة 6: (End) نصل لنهاية البرنامج في شكل بيضاوي.'
        ],
        solutionStepsEn: [
          'Step 1: Start (Oval).',
          'Step 2: Read Score (Parallelogram).',
          'Step 3: Is Score >= 50? (Diamond Decision).',
          'Step 4: If Yes -> Print "Passed" (Parallelogram).',
          'Step 5: If No -> Print "Failed" (Parallelogram).',
          'Step 6: End (Oval).'
        ],
        answerAr: 'الخوارزمية: 1) ابدأ، 2) اقرأ Score، 3) إذا كان Score >= 50 اطبع "ناجح" وإلا اطبع "راسب"، 4) النهاية.',
        answerEn: 'Algorithm: 1) Start, 2) Read Score, 3) If Score >= 50 Print "Passed" Else Print "Failed", 4) End.'
      }
    ],

    assessment: {
      id: 'quiz-h10-cs-1',
      lectureId: 'h10-cs-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: حل المشكلات وخرائط التدفق (1 ثانوي)',
      titleEn: 'Mastery Quiz 1: Problem Solving & Flowcharts (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-cs1-1',
          textAr: 'في خرائط التدفق (Flowcharts)، الشكل الهندسي المستخدم لإجراء عمليات اتخاذ القرار والمقارنة الشرطية (Decision) هو:',
          textEn: 'In flowcharts, the standard geometric symbol used for decision making and conditional branching is the:',
          optionsAr: ['المعين (Diamond)', 'المستطيل (Rectangle)', 'متوازي الأضلاع (Parallelogram)', 'الشكل البيضاوي (Oval)'],
          optionsEn: ['Diamond', 'Rectangle', 'Parallelogram', 'Oval'],
          correctIndex: 0,
          conceptTestedAr: 'رمز اتخاذ القرار في خريطة التدفق',
          conceptTestedEn: 'Flowchart decision diamond symbol',
          explanationAr: 'المعين (Diamond) يمثل اتخاذ القرار (Decision) ويحتوي على سؤال منطقي يخرج منه فرعان (Yes/No).',
          explanationEn: 'The diamond shape evaluates conditional branching criteria with multiple outbound flow paths.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs1-2',
          textAr: 'المرحلة التي يتم فيها إدخال بيانات معروفة النتائج مسبقاً لاكتشاف الأخطاء وتصحيحها في البرنامج تسمى مرحلة:',
          textEn: 'The stage where predefined test data is supplied to detect and correct software bugs is called:',
          optionsAr: [
            'اختبار صحة البرنامج وتصحيح الأخطاء (Testing & Debugging)',
            'توثيق البرنامج (Documentation)',
            'تحديد المشكلة (Problem Definition)',
            'رسم خرائط التدفق'
          ],
          optionsEn: [
            'Program Testing & Debugging',
            'Program Documentation',
            'Problem Definition',
            'Flowchart drafting'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مرحلة اختبار وتصحيح أخطاء البرنامج',
          conceptTestedEn: 'Testing and debugging problem-solving phase',
          explanationAr: 'مرحلة اختبار صحة البرنامج تتضمن تشغيل الكود مع بيانات معلومة النتائج مسبقاً لاكتشاف وتصحيح أي أخطاء منطقية أو لغوية.',
          explanationEn: 'Testing and debugging validates execution output against expected benchmark outcomes.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs1-3',
          textAr: 'الشكل الهندسي القياسي المستخدم للتعبير عن عمليات إدخال وقراءة البيانات (Input / Read) أو إخراج النتائج (Output / Print) هو:',
          textEn: 'The standard geometric symbol representing input/read or output/print operations in flowcharts is the:',
          optionsAr: ['متوازي الأضلاع (Parallelogram)', 'المستطيل', 'المعين', 'الدائرة'],
          optionsEn: ['Parallelogram', 'Rectangle', 'Diamond', 'Circle'],
          correctIndex: 0,
          conceptTestedAr: 'رمز الإدخال والإخراج في خرائط التدفق',
          conceptTestedEn: 'Input/Output parallelogram notation',
          explanationAr: 'متوازي الأضلاع هو الرمز المخصص لعمليات الإدخال (Input / Read / Enter) والإخراج (Output / Print / Display).',
          explanationEn: 'Parallelograms designate all external input/output operations in flowchart modeling.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs1-4',
          textAr: 'تُعرف "الخوارزمية" (Algorithm) في علوم الحاسوب بأنها:',
          textEn: 'An Algorithm in computer science is defined as:',
          optionsAr: [
            'مجموعة من الخطوات والإجراءات المرتبة ترتيباً منطقياً لحل مشكلة معينة',
            'جهاز حاسوب فائق السرعة',
            'شاشة العرض الرقمية للمستخدم',
            'الفيروسات وبرامج التجسس الضارة'
          ],
          optionsEn: [
            'A structured sequence of logically ordered steps to solve a problem',
            'A high-speed hardware processing unit',
            'The digital graphical user display monitor',
            'Malicious computer spyware and viruses'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف الخوارزمية',
          conceptTestedEn: 'Definition of an algorithm',
          explanationAr: 'الخوارزمية هي تسلسل منطقي محدد ومنته من الخطوات والتعليمات المصممة لحل مشكلة معينة.',
          explanationEn: 'An algorithm is an ordered, step-by-step procedural logic specification.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs1-5',
          textAr: 'المرحلة الأخيرة في خطوات حل المشكلة والتي يتم فيها تدوين وحفظ جميع تفاصيل التصميم والكود تسمى:',
          textEn: 'The final phase of the problem-solving lifecycle where design specifications and code are archived is:',
          optionsAr: ['توثيق البرنامج (Documentation)', 'تحديد المشكلة', 'ترجمة الكود', 'تثبيت نظام التشغيل'],
          optionsEn: ['Program Documentation', 'Problem Definition', 'Code Compilation', 'OS Installation'],
          correctIndex: 0,
          conceptTestedAr: 'مرحلة توثيق البرنامج',
          conceptTestedEn: 'Program documentation phase',
          explanationAr: 'توثيق البرنامج يضمن حفظ خريطة التدفق، لغة البرمجة، تعليمات الاستخدام، وتاريخ التعديل لتمكين الصيانة والتطوير.',
          explanationEn: 'Documentation records algorithmic structures and code comments for ongoing maintenance.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: PYTHON PROGRAMMING FUNDAMENTALS ──
  {
    id: 'h10-cs-2',
    order: 2,
    titleAr: 'المحاضرة 2: أساسيات لغة البرمجة بايثون (Python): المتغيرات، أنواع البيانات، وجمل الإدخال والإخراج',
    titleEn: 'Lecture 2: Python Programming: Variables, Data Types & I/O Operations',
    subtitleAr: 'بيئة بايثون، المتغيرات وقواعد تسميتها، أنواع البيانات الأساسية (int, float, str, bool)، دالة الطباعة print() ودالة الإدخال input() والتحويل بين الأنواع',
    subtitleEn: 'Master Python environment, identifier naming rules, primary data types (int, float, str, bool), print() formatting, input() casting, and arithmetic operators.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School ICT & Computer Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: أساسيات البرمجة بلغة بايثون',
    unitTitleEn: 'Unit 2: Python Programming Fundamentals',
    lessonNumberAr: 'الدرس 1: المتغيرات وأنواع البيانات والإدخال والإخراج',
    lessonNumberEn: 'Lesson 1: Python Variables, Types & I/O',

    warmupHookAr: 'تعتبر لغة بايثون (Python) اليوم اللغة الأكثر شعبية في العالم، وتستخدمها شركات عملاقة مثل Google و NASA و YouTube لبناء تطبيقات الويب، وتحليل البيانات الضخمة، والذكاء الاصطناعي! بفضل بساطة تركيبتها المشابهة للغة الإنجليزية الطبيعية، أصبحت بايثون لغة البرمجة القياسية المعتمدة لطلاب المرحلة الثانوية حول العالم!',
    warmupHookEn: 'Python powers NASA astrophysics, Google search indexing, and YouTube backend servers. Its clean, English-like syntax makes it the premier modern programming language for secondary education.',

    learningOutcomesAr: [
      'أن يطبق الطالب قواعد تسمية المتغيرات (Variables) في بايثون ويميز الكلمات المحجوزة (Reserved Keywords)',
      'أن يتعامل مع أنواع البيانات الأساسية: الأعداد الصحيحة (int)، العشرية (float)، النصوص (str)، والقيم المنطقية (bool)',
      'أن يستخدم دالة الإخراج `print()` ودالة الإدخال `input()` مع تحويل الأنواع (Type Casting) باستخدام `int()` و `float()`',
      'أن يجري العمليات الحسابية الأساسية: الجمع (+)، الطرح (-)، الضرب (*)، القسمة الحقيقية (/)، قسمة الأعداد الصحيحة (//)، باقي القسمة (%)، والأسس (**)'
    ],
    learningOutcomesEn: [
      'Apply Python variable naming identifier rules and avoid reserved language keywords',
      'Manipulate core data types: integers (int), floating-point (float), strings (str), and booleans (bool)',
      'Utilize print() output and input() console prompts with explicit type casting int() and float()',
      'Perform arithmetic calculations: addition (+), subtraction (-), multiplication (*), division (/), floor division (//), modulo (%), and power (**)'
    ],

    vocabulary: [
      {
        termAr: 'المتغير (Variable)',
        termEn: 'Variable',
        definitionAr: 'مكان محجوز في ذاكرة الوصول العشوائي (RAM) لتخزين قيمة قابلة للتغيير أثناء تشغيل البرنامج وله اسم ونوع بيانات وقيمة.',
        definitionEn: 'A designated memory location in RAM holding a changeable value associated with a symbolic identifier name.'
      },
      {
        termAr: 'تحويل نوع البيانات (Type Casting)',
        termEn: 'Type Casting',
        definitionAr: 'تحويل قيمة من نوع بيانات إلى نوع آخر، مثل تحويل النص المدخل من دالة input() إلى عدد صحيح باستخدام `int("25") ⟹ 25`.',
        definitionEn: 'Explicitly converting a value from one data type to another (e.g. converting string input to integer using int()).'
      }
    ],

    keyConceptsAr: [
      'قواعد تسمية المتغيرات: تبدأ بحرف أو شرطة سفلية (_)، لا تبدأ برقم، لا تحتوي على رموز خاصة مثل (@, $, %)، وتراعي حالة الأحرف (Case-Sensitive)',
      'دالة الإدخال `input()`: ترجع دائماً قيمة نصية (String)، لذا يجب تحويلها عند التعامل مع الأرقام: `age = int(input("Enter age: "))`',
      'معاملات بايثون الحسابية المميزة: `7 // 2 = 3` (قسمة صحيحة بدون كسور)، `7 % 2 = 1` (باقي القسمة)، و `2 ** 3 = 8` (الأسس)',
      'التعليقات (Comments): تبدأ بالرمز `#` ويتجاهلها المترجم وتستخدم لشرح وتوثيق الكود'
    ],
    keyConceptsEn: [
      'Variable identifier rules: letters/digits/underscores only, cannot start with numbers, case-sensitive',
      'input() returns text strings; requires explicit casting: age = int(input())',
      'Arithmetic operators: // for integer floor division, % for modulus remainder, ** for exponentiation',
      'Single-line comments are designated with # symbol'
    ],

    summaryAr: 'تغطي المحاضرة الثانية أساسيات بايثون لصف أولى ثانوي: المتغيرات وتسميتها، أنواع البيانات الأساسية، التفاعل عبر دوال الإدخال والإخراج، وتحويل النصوص لأعداد مع تطبيق العمليات الحسابية.',
    summaryEn: 'Covers Python fundamentals: variables, naming conventions, core data types (int, float, str, bool), I/O functions with type casting, and arithmetic operators.',

    sections: [
      {
        titleAr: '1. المتغيرات وأنواع البيانات في بايثون',
        titleEn: '1. Variables & Primary Data Types',
        contentAr: '1) أنواع البيانات في بايثون:\n- `int`: الأعداد الصحيحة (مثل: $x = 10$).\n- `float`: الأعداد العشرية (مثل: $pi = 3.14$).\n- `str`: النصوص بين علامات اقتباس (مثل: $name = "Ahmed"$).\n- `bool`: القيم المنطقية ($True$ أو $False$).\n\n2) معرفة نوع المتغير:\n- نستخدم الدالة `type()`: مثلاً `type(10)` يعطي `<class \'int\'>`.',
        contentEn: 'Core types include int, float, str, and bool. Built-in type() function inspects runtime data types.'
      },
      {
        titleAr: '2. دوال الإدخال والإخراج والعمليات الحسابية',
        titleEn: '2. I/O Operations & Arithmetic Operators',
        contentAr: '1) دالة الإدخال والطباعة:\n```python\n# قراءة اسم المستخدم وعمره\nname = input("Enter your name: ")\nage = int(input("Enter your age: "))\nprint("Welcome", name, "Next year you will be", age + 1)\n```\n\n2) العمليات الحسابية في بايثون:\n- الجمع: `5 + 3 = 8`\n- الطرح: `10 - 4 = 6`\n- الضرب: `4 * 3 = 12`\n- القسمة الحقيقية: `10 / 4 = 2.5`\n- قسمة الأعداد الصحيحة: `10 // 4 = 2`\n- باقي القسمة: `10 % 3 = 1`\n- الأسس: `2 ** 4 = 16`',
        contentEn: 'input() captures user entries; print() formats display. Arithmetic supports //, %, and ** exponentiation.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-cs2-1',
        questionAr: 'اكتب برنامجاً بلغة بايثون يطلب من المستخدم إدخال طول وعرض مستطيل، ثم يحسب ويطبع مساحته (Area) ومحيطه (Perimeter)؟',
        questionEn: 'Write a Python program that prompts the user to enter the length and width of a rectangle, then calculates and prints its Area and Perimeter?',
        solutionStepsAr: [
          'الخطوة 1: قراءة الطول كعدد عشري: length = float(input("Enter length: "))',
          'الخطوة 2: قراءة العرض كعدد عشري: width = float(input("Enter width: "))',
          'الخطوة 3: حساب المساحة: area = length * width',
          'الخطوة 4: حساب المحيط: perimeter = 2 * (length + width)',
          'الخطوة 5: طباعة النتائج: print("Area =", area) و print("Perimeter =", perimeter)'
        ],
        solutionStepsEn: [
          'Step 1: length = float(input("Enter length: "))',
          'Step 2: width = float(input("Enter width: "))',
          'Step 3: area = length * width',
          'Step 4: perimeter = 2 * (length + width)',
          'Step 5: print("Area =", area, "Perimeter =", perimeter)'
        ],
        answerAr: 'برنامج بايثون:\nlength = float(input("Length: "))\nwidth = float(input("Width: "))\nprint("Area:", length * width)\nprint("Perimeter:", 2 * (length + width))',
        answerEn: 'Python code:\nlength = float(input("Length: "))\nwidth = float(input("Width: "))\nprint("Area:", length * width)\nprint("Perimeter:", 2 * (length + width))'
      }
    ],

    assessment: {
      id: 'quiz-h10-cs-2',
      lectureId: 'h10-cs-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: أساسيات بايثون والمتغيرات (1 ثانوي)',
      titleEn: 'Mastery Quiz 2: Python Variables & I/O (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-cs2-1',
          textAr: 'أي من أسماء المتغيرات التالية يعتبر اسماً صحيحاً ومقبولاً في لغة بايثون (Python)؟',
          textEn: 'Which of the following variable identifier names is valid in Python?',
          optionsAr: ['student_score', '2nd_score', 'student-score', 'class'],
          optionsEn: ['student_score', '2nd_score', 'student-score', 'class'],
          correctIndex: 0,
          conceptTestedAr: 'شروط وقواعد تسمية المتغيرات في بايثون',
          conceptTestedEn: 'Valid Python variable identifiers',
          explanationAr: '`student_score` صحيح لأنه يبدأ بحرف ويحتوي على شرطة سفلية، بينما لا يجوز البدء برقم (2nd)، ولا استخدام رمز الطرح (-)، ولا الكلمات المحجوزة (class).',
          explanationEn: '`student_score` follows naming rules: starts with a letter, contains underscore, and is not a reserved keyword.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs2-2',
          textAr: 'ما هي نتيجة تنفيذ التعبير الحسابي التالي في بايثون: `17 // 5` ؟',
          textEn: 'What is the evaluated result of the Python expression: 17 // 5 ?',
          optionsAr: ['3', '3.4', '2', '17'],
          optionsEn: ['3', '3.4', '2', '17'],
          correctIndex: 0,
          conceptTestedAr: 'معامل قسمة الأعداد الصحيحة // في بايثون',
          conceptTestedEn: 'Python floor division operator //',
          explanationAr: 'المعامل `//` هو قسمة الأعداد الصحيحة (Floor Division) التي ترجع الجزء الصحيح فقط وتتجاهل الكسور: 17 // 5 = 3.',
          explanationEn: 'The // operator performs floor division, truncating the fractional part to return integer 3.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs2-3',
          textAr: 'القيمة الناتجة عن دالة الإدخال القياسية `input()` في بايثون تكون دائماً من نوع البيانات:',
          textEn: 'The value returned by the default Python input() function is always of type:',
          optionsAr: ['str (نصي)', 'int (عدد صحيح)', 'float (عدد عشري)', 'bool (منطقي)'],
          optionsEn: ['str (String)', 'int (Integer)', 'float (Float)', 'bool (Boolean)'],
          correctIndex: 0,
          conceptTestedAr: 'نوع البيانات المرجعة من دالة input()',
          conceptTestedEn: 'Python input() return type is string',
          explanationAr: 'دالة `input()` تقرأ مدخلات المستخدم كبيانات نصية (`str`) دائماً، وللتعامل معها حسابياً يلزم تحويلها بواسطة `int()` أو `float()`.',
          explanationEn: 'input() always captures data as a string (str), necessitating explicit casting for numeric operations.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs2-4',
          textAr: 'ما هي نتيجة تنفيذ العملية الحسابية `2 ** 3` في لغة بايثون؟',
          textEn: 'What is the evaluated output of the Python expression 2 ** 3?',
          optionsAr: ['8', '6', '5', '9'],
          optionsEn: ['8', '6', '5', '9'],
          correctIndex: 0,
          conceptTestedAr: 'معامل الأسس ** في بايثون',
          conceptTestedEn: 'Exponentiation operator ** in Python',
          explanationAr: 'المعامل `**` يمثل الأسس: $2^3 = 2 \\times 2 \\times 2 = 8$.',
          explanationEn: 'The ** operator performs exponentiation: 2³ = 8.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-cs2-5',
          textAr: 'لكتابة تعليق توضيحي بسطر واحد يتجاهله مفسر بايثون، نستخدم الرمز:',
          textEn: 'To write a single-line comment ignored by the Python interpreter, we use the symbol:',
          optionsAr: ['#', '//', '/*', '<!--'],
          optionsEn: ['#', '//', '/*', '<!--'],
          correctIndex: 0,
          conceptTestedAr: 'رمز التعليقات في بايثون',
          conceptTestedEn: 'Python single-line comment syntax #',
          explanationAr: 'في بايثون، تبدأ التعليقات الفردية برمز الشباك `#`.',
          explanationEn: 'The # character denotes single-line comments in Python.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
