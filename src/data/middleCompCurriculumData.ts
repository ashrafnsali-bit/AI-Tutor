import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL ICT & COMPUTER SCIENCE (حاسب آلي وتكنولوجيا المعلومات - الصف الأول الإعدادي / Prep 1)
// Official Grade 7 / Prep 1 National Curriculum Alignment (Language & Public Schools):
// Unit 1: Basics of Computer System (Hardware, Software, Storage Units, Data & Information)
// Unit 2: Operating Systems & File Management (GUI, Files, Folders, Extensions)
// Unit 3: Computer Networks, Internet & Cloud Services (LAN/WAN, Cyber Safety, Cloud Storage)
// Unit 4: Computational Thinking, Algorithms & Visual Programming (Scratch / Logic)
// Unit 5: Multimedia & Image Processing (GIMP / Raster vs Vector, Layers, Digital Production)
// ============================================================================

export const MIDDLE_COMPUTER_SCIENCE_LECTURES: Lecture[] = [
  // ── LECTURE 1: BASICS OF COMPUTER SYSTEM & STORAGE UNITS ──
  {
    id: 'm-comp-1',
    order: 1,
    titleAr: 'المحاضرة 1: أساسيات نظام الكمبيوتر ووحدات التخزين والبيانات والمعلومات',
    titleEn: 'Lecture 1: Basics of Computer System: Hardware, Software, Storage Units & Data Processing',
    subtitleAr: 'الفرق بين البيانات والمعلومات، مكونات نظام الكمبيوتر (المادية والبرمجية)، وحدات التخزين وسرعة المعالج، وأنواع البرمجيات',
    subtitleEn: 'Master data vs information, hardware (CPU, RAM, ROM, I/O), storage measurement (Bit to TB), processor clock speeds, and software classification.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School ICT & Computer Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الأولى: أساسيات نظام الكمبيوتر (Basics of Computer System)',
    unitTitleEn: 'Unit 1: Fundamentals of Computer Systems & Hardware',
    lessonNumberAr: 'الدرس 1: البيانات والمعلومات ووحدات قياس الذاكرة',
    lessonNumberEn: 'Lesson 1: Computer Hardware, Storage Units & Software Taxonomy',

    warmupHookAr: 'عندما تلتقط صورة بهاتفك الذكي بدقة 4K أو تشاهد مقطع فيديو على يوتيوب، كيف يستطيع الحاسوب تحويل هذه الألوان والأصوات إلى مجرد أرقام ثنائية (0 و 1)؟ وكيف تحسب سعة كارت الذاكرة عندما يقال لك إنه 64 Gigabyte؟ في هذا الدرس نكتشف أسرار لغة الآلة، وكيف تعمل وحدة المعالجة المركزية (CPU) كعقل مدبر للحاسوب!',
    warmupHookEn: 'Every digital photo, game, and app boils down to binary digits (0 and 1). Discover the computer processing cycle (Input -> Processing -> Output), the architecture of the CPU, and how storage units scale from 1 Bit to Terabytes!',

    learningOutcomesAr: [
      'أن يفرّق الطالب بين البيانات (Data كحقائق خام) والمعلومات (Information كمعرفة منظمة بعد المعالجة)',
      'أن يحدد العناصر الأساسية لنظام الكمبيوتر: المكونات المادية (Hardware)، البرمجيات (Software)، العنصر البشري (Humanware)، والبيانات والمعلومات',
      'أن يصنف وحدات الإدخال والإخراج ووحدات الإدخال والإخراج معاً (مثل شاشة اللمس Touch Screen)',
      'أن يتقن التحويل بين وحدات قياس سعة التخزين: Bit, Byte, KB, MB, GB, TB',
      'أن يميز بين الذاكرة المؤقتة العشوائية (RAM) والذاكرة الدائمة للقراءة فقط (ROM)'
    ],
    learningOutcomesEn: [
      'Differentiate between raw data and processed structured information',
      'Identify the 4 components of computer systems: Hardware, Software, Humanware, and Data',
      'Classify peripheral input/output devices and dual-purpose devices (Touchscreens)',
      'Perform storage capacity conversions across Byte, KB, MB, GB, and TB hierarchies',
      'Distinguish volatile RAM from non-volatile BIOS/ROM firmware'
    ],

    vocabulary: [
      {
        termAr: 'البيانات (Data)',
        termEn: 'Data',
        definitionAr: 'مجموعة من الحقائق الخام المجردة (نصوص، أرقام، صور، أصوات) التي تم جمعها دون معالجة.',
        definitionEn: 'Raw, unprocessed facts, numbers, images, or audio signals.'
      },
      {
        termAr: 'المعلومات (Information)',
        termEn: 'Information',
        definitionAr: 'البيانات بعد أن تم تصنيفها وتنظيمها ومعالجتها لتصبح ذات معنى وفائدة للمستخدم لاتخاذ القرار.',
        definitionEn: 'Processed and organized data that conveys meaningful insights to the user.'
      },
      {
        termAr: 'البايت (Byte)',
        termEn: 'Byte',
        definitionAr: 'وحدة قياس سعة التخزين وتتكون من 8 بت (8 Bits) وتكفي لتمثيل حرف أو رقم أو رمز واحد في ذاكرة الحاسوب.',
        definitionEn: 'A storage unit of 8 bits representing a single alphanumeric character.'
      },
      {
        termAr: 'وحدة المعالجة المركزية (CPU)',
        termEn: 'Central Processing Unit (CPU)',
        definitionAr: 'عقل الحاسوب والمسؤول عن تنفيذ العمليات الحسابية والمنطقية والتحكم في كافة أجزاء الجهاز، وتقاس سرعته بالجيجاهرتز (GHz).',
        definitionEn: 'The core processor handling arithmetic, logic, and system control, clocked in GHz.'
      }
    ],

    keyConceptsAr: [
      'دورة عمل الكمبيوتر: إدخال بيانات (Input) ← معالجة وتخزين (Processing & Storage) ← إخراج معلومات (Output)',
      'الذاكرة: RAM ذاكرة وصول عشوائي مؤقتة تفقد محتواها بانقطاع التيار | ROM ذاكرة قراءة فقط دائمة لا تفقد محتواها',
      'جدول التحويلات التخزينية: 1 Byte = 8 Bits | 1 KB = 1024 Bytes | 1 MB = 1024 KB | 1 GB = 1024 MB | 1 TB = 1024 GB',
      'تصنيف البرمجيات: أنظمة تشغيل (OS)، برامج تطبيقية (Apps)، لغات برمجة، وبرمجيات خدمية',
      'المصدر: برمجيات مغلقة المصدر (Closed Source) vs برمجيات مفتوحة المصدر (Open Source)'
    ],
    keyConceptsEn: [
      'Computer Cycle: Input -> Processing -> Output',
      'RAM (Volatile main memory) vs ROM (Non-volatile BIOS memory)',
      'Storage hierarchy: Byte = 8 bits, KB = 1024 B, MB = 1024 KB, GB = 1024 MB, TB = 1024 GB',
      'Software taxonomy: Operating Systems, Applications, Programming Languages, Utilities',
      'Licensing: Closed source proprietary vs Open source'
    ],
    summaryAr: 'تأسيس علمي شامل في الحاسب الآلي: فهم بنية الهاردوير والسوفت وير، ووحدات الإدخال والإخراج، والتفرقة بين RAM و ROM، والتحويلات الرياضية بين وحدات قياس سعة التخزين (KB, MB, GB, TB).',
    summaryEn: 'Comprehensive Grade 7 ICT foundation: Hardware architecture, input/output peripherals, RAM vs ROM, storage unit conversions (Byte to TB), and software licensing.',

    sections: [
      {
        titleAr: '1. البيانات والمعلومات ودورة المعالجة في الحاسب',
        titleEn: '1. Data vs Information & The Computer Processing Cycle',
        contentAr: 'الكمبيوتر هو جهاز إلكتروني يقوم باستقبال البيانات (Data) عبر وحدات الإدخال، ثم يقوم بتخزينها ومعالجتها (Processing) رياضياً ومنطقياً عبر وحدة المعالجة المركزية (CPU)، وأخيراً يُخرجها على هيئة معلومات مفيدة ومنظمة (Information) عبر وحدات الإخراج. البيانات هي المادة الخام (مثل أرقام درجات الطلاب)، والمعلومات هي الناتج المفيد (مثل شهادة الدرجات وترتيب الأوائل ونسبة النجاح).',
        contentEn: 'A computer receives raw data via input units, processes and calculates using the CPU, and outputs structured information. Data represents raw observations; Information represents processed, actionable insights.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: التمييز العملي بين البيانات والمعلومات ومسار المعالجة',
          titleEn: 'Worked Example 1: Classifying Data vs Information in School System',
          equation: 'بيانات خام (Data)  -->  معالجة بالـ CPU  -->  معلومات مفيدة (Information)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المدخلات (البيانات الخام): إدخال درجات طالب في 5 مواد: 20 ، 18 ، 19 ، 17 ، 20.',
              textEn: 'Input (Raw Data): Student scores: 20, 18, 19, 17, 20.',
              noteAr: 'بيانات خام غير معالجة'
            },
            {
              stepNumber: 2,
              textAr: 'المعالجة (Processing): يقوم الحاسوب بحساب المجموع = 94 من 100، وحساب النسبة المئوية = 94%، ومقارنة النتيجة بجدول التقديرات.',
              textEn: 'Processing: CPU sums scores (94/100) and calculates percentage (94%).',
              noteAr: 'عمليات حسابية ومنطقية'
            },
            {
              stepNumber: 3,
              textAr: 'المخرجات (المعلومات): طباعة تقرير النتيجة: "الطالب ناجح بتقدير ممتاز، وترتيبه الأول على الفصل".',
              textEn: 'Output (Information): Final report card: "Passed with Distinction - Rank 1".',
              noteAr: 'معلومات منظمة ذات فائدة'
            }
          ],
          takeawayAr: 'البيانات هي المدخلات الخام، والمعلومات هي المخرجات بعد المعالجة، والكمبيوتر هو أداة التحويل بينهما.',
          takeawayEn: 'Data is the raw input, information is the processed output, and computing is the transformation engine.'
        },
        formativeCheck: {
          id: 'fc-mcomp1-1',
          questionAr: 'أي من العناصر التالية يُعد "معلومات" (Information) وليس بيانات خام؟',
          questionEn: 'Which of the following represents processed "Information" rather than raw data?',
          optionsAr: [
            'تقرير إحصائي يوضح نسب النجاح ومخطط أوائل المدرسة',
            'مجموعة أرقام عشوائية مسجلة في ملف نصي',
            'صوت نقرات لوحة المفاتيح',
            'حروف متفرقة غير مرتبة'
          ],
          optionsEn: [
            'A structured statistical report showing school pass rates and rankings',
            'A random list of numbers in a text file',
            'Keystroke audio clicks',
            'Unordered scattered letters'
          ],
          correctIndex: 0,
          explanationAr: 'التقرير الإحصائي المنظم هو ناتج معالجة وتلخيص البيانات فأصبح معلومة مفيدة.',
          explanationEn: 'A structured statistical report is processed, organized, and provides meaningful insight.',
          hintAr: 'ابحث عن الخيار الذي يعطي معنى وفائدة واضحة بعد المعالجة.'
        },
        tipsAr: [
          'شاشة اللمس (Touch Screen) تعتبر وحدة إدخال وإخراج معاً لأنها تستقبل اللمس وتُعرض الصور.',
          'الماسح الضوئي (Scanner) وحدة إدخال صور، بينما الطابعة (Printer) وحدة إخراج ورقي.'
        ],
        tipsEn: [
          'Touchscreens are dual-purpose I/O devices.',
          'Scanners are input devices; printers are output devices.'
        ]
      },
      {
        titleAr: '2. المكونات المادية: المعالج، والذاكرة RAM و ROM',
        titleEn: '2. Computer Hardware: CPU, RAM vs ROM, and Motherboard',
        contentAr: 'المكونات المادية (Hardware) هي الأجزاء الفعلية الملموسة. أهمها داخل وحدة النظام (System Unit): 1) المعالج (CPU): يتكون من وحدة الحساب والمنطق (ALU) ووحدة التحكم (Control Unit). 2) الذاكرة الرئيسية: تنقسم إلى: أ) RAM (Random Access Memory): ذاكرة الوصول العشوائي المؤقتة (تسمى الذاكرة المتطايرة Volatile) لأنها تفقد جميع محتوياتها فور انقطاع الكهرباء وتُخزن فيها البرامج قيد التشغيل. ب) ROM (Read Only Memory): ذاكرة القراءة فقط الدائمة، يُخزن عليها برنامج الإقلاع الذاتي (BIOS) من الشركة المصنعة ولا تفقد بياناتها عند إغلاق الجهاز ولا يمكن للمستخدم الكتابة عليها بسهولة.',
        contentEn: 'Hardware components comprise physical circuitry. The CPU contains the ALU and Control Unit. Main memory splits into volatile temporary RAM (lost upon shutdown) and non-volatile permanent ROM (storing BIOS boot routines).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: المقارنة العلمية الشاملة بين الذاكرة RAM والذاكرة ROM',
          titleEn: 'Worked Example 2: Comprehensive RAM vs ROM Comparison',
          equation: 'ذاكرة مؤقتة RAM (متطايرة) vs ذاكرة قراءة فقط ROM (دائمة)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'وجه المقارنة (التطاير): RAM تفقد محتوياتها بانقطاع التيار الكهربائي (مؤقتة)، بينما ROM تحتفظ بمحتوياتها بشكل دائم.',
              textEn: 'Volatility: RAM loses data when powered off; ROM permanently retains data.',
              noteAr: 'خاصية التطاير'
            },
            {
              stepNumber: 2,
              textAr: 'وجه المقارنة (وظيفة كل منهما): RAM تستخدم لتشغيل نظام التشغيل والبرامج المفتوحة حالياً، بينما ROM تحتوي على إعدادات بدء تشغيل الحاسوب الأساسية (BIOS).',
              textEn: 'Function: RAM holds active apps and OS buffers; ROM holds BIOS boot instructions.',
              noteAr: 'الوظيفة والاستخدام'
            },
            {
              stepNumber: 3,
              textAr: 'وجه المقارنة (القراءة والكتابة): RAM يمكن للمستخدم والقراءة والكتابة عليها وتعديلها، بينما ROM للقراءة فقط ولا يستطيع المستخدم العادي التعديل عليها.',
              textEn: 'Read/Write: RAM is read/write accessible; ROM is strictly read-only for users.',
              noteAr: 'إمكانية التعديل'
            }
          ],
          takeawayAr: 'زيادة سعة ذاكرة RAM تجعل الحاسوب أسرع في تشغيل البرامج الثقيلة المتعددة في نفس الوقت.',
          takeawayEn: 'Higher RAM capacity allows more simultaneous active applications without system slowdown.'
        },
        formativeCheck: {
          id: 'fc-mcomp1-2',
          questionAr: 'الذاكرة التي تحتفظ ببيانات بدء التشغيل الأساسية (BIOS) ولا تفقد محتوياتها عند انقطاع الكهرباء هي:',
          questionEn: 'The non-volatile memory storing BIOS startup firmware without losing data on power loss is:',
          optionsAr: ['ذاكرة القراءة فقط (ROM)', 'ذاكرة الوصول العشوائي (RAM)', 'القرص الصلب (Hard Disk)', 'وحدة المعالجة (CPU)'],
          optionsEn: ['Read Only Memory (ROM)', 'Random Access Memory (RAM)', 'Hard Disk', 'CPU'],
          correctIndex: 0,
          explanationAr: 'ROM هي الذاكرة الدائمة المخصصة لتعليمات بدء التشغيل BIOS ولا تتأثر بانقطاع التيار.',
          explanationEn: 'ROM is permanent non-volatile memory storing boot firmware.',
          hintAr: 'ابحث عن الذاكرة التي تسمى "ذاكرة القراءة فقط".'
        },
        tipsAr: [
          'سرعة المعالج تقاس بوحدة الهرتز (Hz) ومضاعفاتها مثل الجيجاهرتز (GHz = 1000,000,000 هرتز).',
          'كلما زاد عدد الأنوية (Cores) في المعالج، زادت قدرته على تنفيذ مهام متعددة في آن واحد.'
        ],
        tipsEn: [
          'CPU clock speed is measured in Gigahertz (GHz).',
          'Multi-core CPUs execute parallel computing tasks efficiently.'
        ]
      },
      {
        titleAr: '3. وحدات قياس سعة التخزين والتحويلات الرياضية',
        titleEn: '3. Storage Measurement Units & Mathematical Conversions',
        contentAr: 'أصغر وحدة تخزين في الحاسوب هي (البت Bit) وتمثل إما 0 أو 1. وحدة التخزين الأساسية هي (البايت Byte = 8 Bits). ولتخزين الملفات الكبيرة نستخدم المضاعفات: الكيلوبايت (1 KB = 1024 Bytes)، الميجابايت (1 MB = 1024 KB)، الجيجابايت (1 GB = 1024 MB)، والتيرابايت (1 TB = 1024 GB). للتحويل من وحدة أكبر إلى أصغر نضرب في 1024، وللتحويل من وحدة أصغر إلى أكبر نقسم على 1024.',
        contentEn: 'The fundamental storage unit is the Bit (0 or 1). 1 Byte = 8 Bits. Multipliers scale by 1024 (2¹⁰): KB, MB, GB, TB. Multiply by 1024 to convert down; divide by 1024 to convert up.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: حساب سعة فلاش ميموري وعدد الصور التي يمكن تخزينها عليها',
          titleEn: 'Worked Example 3: Storage Capacity Math & File Allocation',
          equation: '1 GB = 1024 MB  |  1 MB = 1024 KB  |  1 Byte = 8 Bits',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المسألة: لديك فلاشة سعتها 4 GB، وتريد تخزين ملفات صور حجم كل صورة 2 MB. كم صورة يمكن تخزينها؟',
              textEn: 'Problem: 4 GB flash drive holding 2 MB photo files. How many photos fit?',
              noteAr: 'معطيات المسألة'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: تحويل سعة الفلاشة من GB إلى MB بالضرب في 1024: 4 × 1024 = 4096 MB.',
              textEn: 'Step 1: Convert flash capacity to MB: 4 × 1024 = 4096 MB.',
              noteAr: 'سعة الفلاشة = 4096 MB'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2: قسمة السعة الكلية على حجم الصورة الواحدة: 4096 ÷ 2 = 2048 صورة.',
              textEn: 'Step 2: Total count = 4096 / 2 = 2048 photos.',
              noteAr: 'الناتج = 2048 صورة'
            }
          ],
          takeawayAr: 'للتحويل بين وحدات السعة المتجاورة نستخدم الرقم 1024 (الذي يمثل 2¹⁰ في النظام الثنائي).',
          takeawayEn: 'Adjacent binary storage units transition by factors of 1024 (2¹⁰).'
        },
        formativeCheck: {
          id: 'fc-mcomp1-3',
          questionAr: '3 كيلو بايت (3 KB) تحتوي على كم بايت؟',
          questionEn: 'How many bytes are in 3 Kilobytes (3 KB)?',
          optionsAr: ['3072 بايت (3 × 1024)', '3000 بايت', '24 بايت', '1024 بايت'],
          optionsEn: ['3072 Bytes (3 × 1024)', '3000 Bytes', '24 Bytes', '1024 Bytes'],
          correctIndex: 0,
          explanationAr: 'للتحويل من KB إلى Byte نضرب في 1024: 3 × 1024 = 3072 بايت.',
          explanationEn: '3 × 1024 = 3072 Bytes.',
          hintAr: 'اضرب عدد الكيلوبايت في 1024.'
        },
        tipsAr: [
          'كلمة "EGYPT" تتكون من 5 حروف، وبالتالي تستهلك 5 بايت في الذاكرة (أي 5 × 8 = 40 بت).',
          'الترتيب التصاعدي لوحدات السعة: Bit < Byte < KB < MB < GB < TB.'
        ],
        tipsEn: [
          'Each ASCII character consumes 1 Byte (8 Bits).',
          'Storage order: Bit < Byte < KB < MB < GB < TB.'
        ]
      },
      {
        titleAr: '4. تصنيف البرمجيات وتراخيص البرامج وحقوق الملكية',
        titleEn: '4. Software Taxonomy, Licensing & Intellectual Property',
        contentAr: 'البرمجيات (Software) هي مجموعة التعليمات والأوامر التي توجه الهاردوير. تنقسم البرمجيات حسب طبيعتها إلى: 1) أنظمة تشغيل (مثل Windows و Linux). 2) برمجيات خدمية (مثل برامج مكافحة الفيروسات والصيانة). 3) لغات برمجة (مثل Python و Scratch). 4) برامج تطبيقية (مثل Word و Photoshop). وتنقسم حسب حقوق الملكية إلى: أ) برمجيات مغلقة المصدر (Closed Source): الكود المصدري محمي ولا يمكن تعديله (مثل MS Office). ب) برمجيات مفتوحة المصدر (Open Source): الكود متاح مجاناً للجميع للتعديل والتطوير (مثل Linux و GIMP و LibreOffice). ج) البرامج المجانية (Freeware) والتجريبية (Shareware).',
        contentEn: 'Software includes Operating Systems, Utilities, Programming Languages, and Applications. Licensing splits into Closed Source (proprietary source code) and Open Source (publicly editable code), with Freeware, Shareware, and Commercial licensing models.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: تصنيف البرامج الشائعة حسب نوع المصدر ونوع الترخيص',
          titleEn: 'Worked Example 4: Classifying Software by License & Source Code',
          equation: 'مفتوح المصدر (Open Source) vs مغلق المصدر (Closed Source)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'نظام التشغيل Linux وبرنامج معالجة الصور GIMP: برمجيات مفتوحة المصدر (Open Source) كودها متاح ومجانية بالكامل.',
              textEn: 'Linux OS & GIMP: Open Source software with publicly accessible source code.',
              noteAr: 'مفتوح المصدر'
            },
            {
              stepNumber: 2,
              textAr: 'نظام التشغيل Windows وبرنامج Adobe Photoshop: برمجيات تجارية مغلقة المصدر (Closed Source) لا يُسمح بتعديل كودها.',
              textEn: 'Windows OS & Photoshop: Closed Source commercial proprietary software.',
              noteAr: 'مغلق المصدر'
            },
            {
              stepNumber: 3,
              textAr: 'البرمجيات التجريبية (Shareware): برامج تقدم فترة تجريبية مجانية (مثلاً 30 يوماً) ثم تتطلب الشراء.',
              textEn: 'Shareware: Trial software providing temporary free usage before purchase.',
              noteAr: 'برمجيات تجريبية'
            }
          ],
          takeawayAr: 'استخدام البرمجيات الأصلية المرخصة يحمي جهازك من الفيروسات ويحترم حقوق الملكية الفكرية للمطورين.',
          takeawayEn: 'Using genuine licensed software ensures cybersecurity and respects intellectual property.'
        },
        formativeCheck: {
          id: 'fc-mcomp1-4',
          questionAr: 'أي من البرمجيات التالية يُعد تطبيقاً "مفتوح المصدر" (Open Source)؟',
          questionEn: 'Which of the following software applications is "Open Source"?',
          optionsAr: ['برنامج معالجة الصور GIMP', 'نظام Windows 11', 'حزمة Microsoft Office', 'برنامج Adobe Illustrator'],
          optionsEn: ['GIMP Image Editor', 'Windows 11', 'Microsoft Office', 'Adobe Illustrator'],
          correctIndex: 0,
          explanationAr: 'برنامج GIMP هو البديل المجاني المفتوح المصدر الشهير لبرنامج فوتوشوب، ويتيح الكود المصدري للجميع.',
          explanationEn: 'GIMP is an open-source image manipulation program with accessible source code.',
          hintAr: 'ابحث عن البرنامج الشهير المجاني لتعديل الصور في منهج الصف الأول الإعدادي.'
        },
        tipsAr: [
          'القرصنة (Software Piracy) هي نسخ البرمجيات المغلقة واستخدامها دون ترخيص، وهي مخالفة قانونية وأخلاقية.',
          'البرامج المجانية (Freeware) مجانية مدى الحياة لكن لا يُسمح لك بتعديل كودها المصدري.'
        ],
        tipsEn: [
          'Software piracy compromises security and violates copyright laws.',
          'Freeware is free to use but its source code remains closed.'
        ]
      }
    ],

    conceptMapAr: [
      'نظام الكمبيوتر: هاردوير + سوفت وير + عنصر بشري + بيانات ومعلومات',
      'دورة المعالجة: مدخلات (Input) ← معالجة وتخزين (CPU/RAM) ← مخرجات (Output)',
      'الذاكرة: RAM مؤقتة متطايرة | ROM دائمة BIOS',
      'وحدات التخزين: Bit (0/1) ← Byte (8 bits) ← KB (1024 B) ← MB ← GB ← TB',
      'تراخيص البرمجيات: مفتوحة المصدر (GIMP/Linux) vs مغلقة المصدر (Windows/Office)'
    ],
    conceptMapEn: [
      'Computer System: Hardware, Software, Humanware, Data/Info',
      'Cycle: Input -> CPU Processing -> Output',
      'Memory: Volatile RAM vs Permanent ROM',
      'Storage Hierarchy: Bit -> Byte -> KB -> MB -> GB -> TB',
      'Licensing: Open Source vs Closed Source Proprietary'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp1-1',
        questionAr: 'صنف الوحدات الآتية إلى (وحدات إدخال - وحدات إخراج - وحدات إدخال وإخراج معاً): 1) الفأرة (Mouse) 2) السماعات (Speakers) 3) شاشة اللمس (Touch Screen) 4) الماسح الضوئي (Scanner) 5) شاشة العرض (Monitor).',
        questionEn: 'Classify as Input, Output, or Dual I/O: 1) Mouse 2) Speakers 3) Touchscreen 4) Scanner 5) Monitor.',
        solutionStepsAr: [
          '1) الفأرة (Mouse): وحدة إدخال.',
          '2) السماعات (Speakers): وحدة إخراج صوتي.',
          '3) شاشة اللمس (Touch Screen): وحدة إدخال وإخراج معاً.',
          '4) الماسح الضوئي (Scanner): وحدة إدخال صور ومستندات.',
          '5) شاشة العرض (Monitor): وحدة إخراج مرئي.'
        ],
        solutionStepsEn: [
          '1) Mouse: Input.',
          '2) Speakers: Output.',
          '3) Touchscreen: Dual Input/Output.',
          '4) Scanner: Input.',
          '5) Monitor: Output.'
        ],
        answerAr: 'إدخال: الفأرة، الماسح الضوئي • إخراج: السماعات، شاشة العرض • إدخال وإخراج معاً: شاشة اللمس.',
        answerEn: 'Input: Mouse, Scanner • Output: Speakers, Monitor • Dual I/O: Touchscreen.'
      },
      {
        id: 'ex-mcomp1-2',
        questionAr: 'احسب عدد الكيلوبايت (KB) الموجودة في ملف حجمه 5 ميجابايت (5 MB).',
        questionEn: 'Calculate the number of Kilobytes (KB) in a 5 Megabyte (5 MB) file.',
        solutionStepsAr: [
          'الخطوة 1: للتحويل من MB إلى KB (من وحدة أكبر إلى أصغر) نضرب في 1024.',
          'الخطوة 2: الحساب: 5 × 1024 = 5120 كيلوبايت (5120 KB).'
        ],
        solutionStepsEn: [
          'Step 1: Multiply by 1024.',
          'Step 2: 5 × 1024 = 5120 KB.'
        ],
        answerAr: 'حجم الملف = 5120 كيلوبايت (KB).',
        answerEn: 'File size = 5120 KB.'
      },
      {
        id: 'ex-mcomp1-3',
        questionAr: 'قارن بين البرمجيات مفتوحة المصدر (Open Source) والبرمجيات مغلقة المصدر (Closed Source) مع ذكر مثالين لكل منهما.',
        questionEn: 'Compare Open Source and Closed Source software with two examples each.',
        solutionStepsAr: [
          '1) مفتوحة المصدر: الكود البرمجي متاح مجاناً للتعديل والتطوير وإعادة التوزيع. أمثلة: نظام Linux ، برنامج GIMP.',
          '2) مغلقة المصدر: الكود البرمجي محمي ومملوك للشركة المصنعة ولا يمكن الاطلاع عليه أو تعديله. أمثلة: نظام Windows 11 ، برنامج Microsoft Word.'
        ],
        solutionStepsEn: [
          '1) Open Source: Editable source code. Examples: Linux, GIMP.',
          '2) Closed Source: Protected proprietary code. Examples: Windows, MS Word.'
        ],
        answerAr: 'مفتوحة المصدر: كود متاح للجميع (Linux, GIMP) • مغلقة المصدر: كود محمي ومملوك تجارياً (Windows, MS Office).',
        answerEn: 'Open Source: Public code (Linux, GIMP) • Closed Source: Proprietary code (Windows, MS Office).'
      },
      {
        id: 'ex-mcomp1-4',
        questionAr: 'علل لما يأتي: 1) تُسمى ذاكرة RAM بالذاكرة المتطايرة. 2) لا يمكن للمستخدم العادي التعديل على ذاكرة ROM.',
        questionEn: 'Explain: 1) Why RAM is called volatile memory. 2) Why users cannot edit ROM.',
        solutionStepsAr: [
          '1) تسمى RAM متطايرة لأنها تفقد جميع محتوياتها فور انقطاع التيار الكهربائي عن الجهاز.',
          '2) لا يمكن التعديل على ROM لأنها ذاكرة قراءة فقط مبرمجة مسبقاً من الشركة المصنعة لحفظ برنامج بدء التشغيل الأساسي (BIOS) لحماية الحاسوب من التلف.'
        ],
        solutionStepsEn: [
          '1) RAM is volatile because its stored data is wiped when electrical power is cut.',
          '2) ROM is read-only to preserve critical BIOS firmware written by the hardware manufacturer.'
        ],
        answerAr: '1) لأنها تفقد بياناتها بانقطاع الكهرباء • 2) لأنها مخصصة لبرنامج الإقلاع BIOS من الشركة المصنعة للقراءة فقط.',
        answerEn: '1) Data vanishes upon power off • 2) Dedicated to manufacturer BIOS firmware.'
      }
    ],

    assessment: {
      id: 'quiz-m-comp-1',
      lectureId: 'm-comp-1',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 1: أساسيات نظام الكمبيوتر ووحدات التخزين',
      titleEn: 'Mastery Assessment 1: Computer Fundamentals, Hardware & Storage Units',
      passingScore: 80,
      questions: [
        {
          id: 'qc1-1',
          textAr: 'الوحدة المسؤولة عن إجراء كافة العمليات الحسابية والمنطقية في الكمبيوتر هي:',
          textEn: 'The unit responsible for all arithmetic and logical operations in a computer is:',
          optionsAr: ['وحدة الحساب والمنطق (ALU)', 'الذاكرة المؤقتة (RAM)', 'القرص الصلب (Hard Disk)', 'وحدة الإمداد بالطاقة'],
          optionsEn: ['Arithmetic & Logic Unit (ALU)', 'RAM', 'Hard Drive', 'Power Supply'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة وحدة الحساب والمنطق في المعالج',
          conceptTestedEn: 'ALU function in CPU',
          explanationAr: 'وحدة الحساب والمنطق ALU داخل المعالج CPU هي المسؤولة عن العمليات الرياضية (الجمع، الطرح) والمنطقية (المقارنات).',
          explanationEn: 'The ALU executes mathematical calculations and logical comparisons.',
          difficulty: 'easy'
        },
        {
          id: 'qc1-2',
          textAr: 'البايت الواحد (1 Byte) يتكون من:',
          textEn: '1 Byte consists of:',
          optionsAr: ['8 بت (8 Bits)', '1024 بت', '4 بت', '16 بت'],
          optionsEn: ['8 Bits', '1024 Bits', '4 Bits', '16 Bits'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين البايت والبت',
          conceptTestedEn: 'Byte to Bit relationship',
          explanationAr: '1 Byte = 8 Bits ويكفي لتخزين حرف أبجدي واحد.',
          explanationEn: '1 Byte = 8 Bits.',
          difficulty: 'easy'
        },
        {
          id: 'qc1-3',
          textAr: 'أي من الذاكرات التالية تفقد بياناتها فور إغلاق جهاز الكمبيوتر؟',
          textEn: 'Which memory loses all its contents immediately when the computer shuts down?',
          optionsAr: ['ذاكرة الوصول العشوائي (RAM)', 'ذاكرة القراءة فقط (ROM)', 'الفلاش ميموري (Flash Memory)', 'القرص الصلب (HDD)'],
          optionsEn: ['RAM (Random Access Memory)', 'ROM (Read Only Memory)', 'Flash Memory', 'Hard Disk Drive'],
          correctIndex: 0,
          conceptTestedAr: 'تطاير الذاكرة RAM',
          conceptTestedEn: 'RAM Volatility',
          explanationAr: 'RAM هي ذاكرة مؤقتة متطايرة تفقد جميع بياناتها عند انقطاع الكهرباء.',
          explanationEn: 'RAM is volatile temporary memory cleared upon power loss.',
          difficulty: 'easy'
        },
        {
          id: 'qc1-4',
          textAr: '2 جيجابايت (2 GB) تساوي كام ميجابايت (MB)؟',
          textEn: '2 Gigabytes (2 GB) equals how many Megabytes (MB)?',
          optionsAr: ['2048 MB', '2000 MB', '1024 MB', '512 MB'],
          optionsEn: ['2048 MB', '2000 MB', '1024 MB', '512 MB'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل بين الجيجابايت والميجابايت',
          conceptTestedEn: 'GB to MB Conversion',
          explanationAr: '2 × 1024 = 2048 MB.',
          explanationEn: '2 × 1024 = 2048 MB.',
          difficulty: 'medium'
        },
        {
          id: 'qc1-5',
          textAr: 'تتميز البرمجيات مفتوحة المصدر (Open Source) بأنها:',
          textEn: 'Open Source software is characterized by:',
          optionsAr: ['كودها المصدري متاح للجميع للتعديل والتطوير', 'كودها المصدري محمي وممنوع الاطلاع عليه', 'تعمل لفترة تجريبية 30 يوماً فقط', 'لا يمكن تثبيتها إلا بمقابل مالي باهظ'],
          optionsEn: ['Source code is publicly available for modification and development', 'Source code is strictly proprietary and hidden', 'Works for a 30-day trial only', 'Requires high licensing fees'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم البرمجيات مفتوحة المصدر',
          conceptTestedEn: 'Open Source Definition',
          explanationAr: 'البرامج مفتوحة المصدر تتيح شفرتها البرمجية المصدرية لجميع المطورين والمستخدمين مجاناً.',
          explanationEn: 'Open source software provides public access to source code for enhancement.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: OPERATING SYSTEMS & FILE MANAGEMENT ──
  {
    id: 'm-comp-2',
    order: 2,
    titleAr: 'المحاضرة 2: أنظمة التشغيل وإدارة الملفات والمجلدات',
    titleEn: 'Lecture 2: Operating Systems (OS), GUI & File/Folder Management',
    subtitleAr: 'وظائف نظام التشغيل وواجهة المستخدم الرسومية (GUI)، مقارنة أنظمة التشغيل، وإدارة الملفات والامتدادات والمجلدات وسلة المحذوفات',
    subtitleEn: 'Master OS roles, graphical user interfaces, Windows/Linux comparison, file extensions (.docx, .jpg, .pdf), folder hierarchy, and trash management.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-comp-1',
    prerequisiteTitleAr: 'المحاضرة 1: أساسيات نظام الكمبيوتر ووحدات التخزين',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School ICT & Computer Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الثانية: أنظمة التشغيل وإدارة الملفات (Operating Systems & Files)',
    unitTitleEn: 'Unit 2: Operating Systems & File Management',
    lessonNumberAr: 'الدرس 2: نظام التشغيل والواجهة الرسومية والملفات',
    lessonNumberEn: 'Lesson 2: OS Architecture, GUI & Directory Management',

    warmupHookAr: 'تخيل أن لديك أحدث حاسوب في العالم بكل قطعه المادية، ولكن بدون نظام تشغيل (Operating System) مثبت عليه؛ فلن تتمكن حتى من تشغيل الشاشة أو الضغط على زر! نظام التشغيل هو "المدير التنفيذي" والوسيط السحري بينك وبين عتاد الكمبيوتر. كيف يدير نظامك آلاف الملفات والمجلدات في ثوانٍ معدودة؟',
    warmupHookEn: 'Without an Operating System (OS), even the most powerful supercomputer is lifeless metal. The OS acts as the master coordinator managing hardware resources, files, and running applications through intuitive Graphical User Interfaces (GUI)!',

    learningOutcomesAr: [
      'أن يشرح الطالب وظائف نظام التشغيل (OS) كوسيط بين المستخدم والبرمجيات والمكونات المادية',
      'أن يقارن بين واجهة سطر الأوامر (CLI) وواجهة المستخدم الرسومية (GUI)',
      'أن يفرّق بين أنظمة تشغيل أجهزة الكمبيوتر (Windows, Linux, macOS) وأنظمة تشغيل الهواتف الذكية (Android, iOS)',
      'أن يميز بين أنواع الملفات المختلفة بناءً على امتداداتها (.txt, .docx, .jpg, .mp3, .mp4, .pdf)',
      'أن ينشئ مجلدات جديدة (Folders) ويعيد تسميتها وينسخها ويحذفها ويسترجعها من سلة المحذوفات'
    ],
    learningOutcomesEn: [
      'Explain core OS roles in managing hardware, memory, files, and process execution',
      'Contrast Command Line Interface (CLI) with Graphical User Interface (GUI)',
      'Compare desktop OS (Windows, Linux, macOS) and mobile OS (Android, iOS)',
      'Classify file formats by extensions (.docx, .jpg, .mp3, .mp4, .pdf)',
      'Manage hierarchical folder directories, file operations, and recycle bin recovery'
    ],

    vocabulary: [
      {
        termAr: 'نظام التشغيل (Operating System - OS)',
        termEn: 'Operating System (OS)',
        definitionAr: 'البرنامج الأساسي المسؤول عن تشغيل وإدارة المكونات المادية وتنسيق عمل التطبيقات وتوفير واجهة تفاعل للمستخدم.',
        definitionEn: 'System software managing hardware resources and providing UI for applications.'
      },
      {
        termAr: 'واجهة المستخدم الرسومية (GUI)',
        termEn: 'Graphical User Interface (GUI)',
        definitionAr: 'واجهة بصرية تعرض النوافذ والأيقونات والقوائم ومربعات الحوار وتعتمد على الفأرة واللمس بدلاً من كتابة الأوامر النصية.',
        definitionEn: 'Visual interface featuring windows, icons, menus, and pointers (WIMP).'
      },
      {
        termAr: 'امتداد الملف (File Extension)',
        termEn: 'File Extension',
        definitionAr: 'حروف (غالباً 3 أو 4) تلي اسم الملف وتفصل بينها نقطة، وتحدد نوع الملف والبرنامج المناسب لتشغيله (مثل report.docx).',
        definitionEn: 'Suffix attached to filenames indicating format and associated application.'
      }
    ],

    keyConceptsAr: [
      'أهم وظائف نظام التشغيل: إدارة الذاكرة، إدارة وحدات التخزين والملفات، إدارة المعالج والعمليات، وتأمين النظام',
      'أنظمة كمبيوتر مغلقة: Windows و macOS | أنظمة كمبيوتر مفتوحة: Linux (مثل Ubuntu و Fedora)',
      'أنظمة هواتف: Android (مفتوح المصدر مبني على لينكس) و iOS (مغلق المصدر خاص بأجهزة Apple)',
      'تكوين اسم الملف: (الاسم الأصلي . الامتداد) مثل: School_Project.pdf',
      'الفرق بين القص (Cut) والنسخ (Copy): القص ينقل الملف من مكانه، بينما النسخ يصنع نسخة مكررة'
    ],
    keyConceptsEn: [
      'Core OS duties: Memory management, file systems, process scheduling, user authorization',
      'Desktop OS: Windows/macOS (Proprietary) vs Linux (Open Source)',
      'Mobile OS: Android (Open source Linux-based) vs iOS (Proprietary Apple)',
      'File name structure: filename.extension',
      'Cut (Move) vs Copy (Duplicate) directory operations'
    ],
    summaryAr: 'دراسة أنظمة التشغيل ودور الواجهة الرسومية GUI، وفهم هيكلية الملفات والمجلدات وتصنيف الامتدادات، وإتقان مهارات النسخ والقص والحذف والاسترجاع في أنظمة Windows و Linux.',
    summaryEn: 'Master operating systems, GUI components, file extensions taxonomy, directory tree structures, and recycle bin management.',

    sections: [
      {
        titleAr: '1. مفهوم نظام التشغيل ووظائفه والواجهة الرسومية (GUI)',
        titleEn: '1. OS Functions & Graphical User Interface (GUI)',
        contentAr: 'نظام التشغيل هو الجسر والوسيط بين المستخدم وعتاد الحاسوب وتطبيقاته. بدون نظام تشغيل لا يمكن لأي برنامج أن يعمل. قديماً كان يتم التعامل مع الكمبيوتر عبر واجهة سطر الأوامر (Command Line Interface - CLI) بكتابة أوامر نصية معقدة. أما اليوم فتعتمد جميع الأنظمة الحديثة على واجهة المستخدم الرسومية (GUI) التي تحتوي على: النوافذ (Windows)، الأيقونات (Icons)، القوائم (Menus)، ومؤشر الفأرة (Pointer)، مما جعل استخدام الحاسوب سهلاً وممتعاً للجميع.',
        contentEn: 'The OS bridges user intent and raw hardware. Modern systems employ Graphical User Interfaces (GUI) with windows, icons, menus, and pointers replacing archaic text-only Command Line Interfaces (CLI).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: تتبع مسار تنفيذ أمر حفظ ملف عبر نظام التشغيل',
          titleEn: 'Worked Example 1: Tracing File Save Command via OS Layer',
          equation: 'المستخدم ← واجهة البرنامج (GUI) ← نظام التشغيل (OS) ← القرص الصلب (Hardware)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المستخدم: يضغط على زر "حفظ باسم" في برنامج معالج الكلمات Word.',
              textEn: 'User clicks "Save As" in Word application.',
              noteAr: 'طلب من طبقة التطبيق'
            },
            {
              stepNumber: 2,
              textAr: 'نظام التشغيل (OS): يستقبل الطلب، ويتحقق من وجود مساحة كافية على القرص الصلب، ويحدد المسار وقطاعات التخزين المتاحة.',
              textEn: 'OS receives request, checks disk space, and assigns storage sectors.',
              noteAr: 'إدارة الموارد والتخزين'
            },
            {
              stepNumber: 3,
              textAr: 'المكون المادي (Hard Disk): يكتب البيانات المغناطيسية/الرقمية ويسجل اسم الملف في جدول نظام الملفات.',
              textEn: 'Hard Drive writes bits and updates file allocation table.',
              noteAr: 'التخزين الفعلي على الهاردوير'
            }
          ],
          takeawayAr: 'نظام التشغيل هو المسؤول الحصري عن التخاطب مع الهاردوير لحفظ واسترجاع بيانات التطبيقات.',
          takeawayEn: 'The OS orchestrates all low-level hardware interactions on behalf of user applications.'
        },
        formativeCheck: {
          id: 'fc-mcomp2-1',
          questionAr: 'الواجهة التي تعتمد على النوافذ والقوائم والأيقونات وتستخدم الفأرة تسمى:',
          questionEn: 'An interface relying on windows, menus, icons, and mouse interaction is called:',
          optionsAr: ['واجهة المستخدم الرسومية (GUI)', 'واجهة سطر الأوامر (CLI)', 'وحدة التحكم (CU)', 'الذاكرة العشوائية (RAM)'],
          optionsEn: ['Graphical User Interface (GUI)', 'Command Line Interface (CLI)', 'Control Unit (CU)', 'RAM'],
          correctIndex: 0,
          explanationAr: 'GUI هي اختصار Graphical User Interface وهي الواجهة الرسومية البصرية الحديثة.',
          explanationEn: 'GUI stands for Graphical User Interface.',
          hintAr: 'ابحث عن المصطلح المكون من الحروف GUI.'
        },
        tipsAr: [
          'أشهر أنظمة التشغيل المكتبية: Windows من شركة Microsoft، ونظام macOS من شركة Apple.',
          'نظام التشغيل هو أول برنامج يُحمل في ذاكرة RAM عند بدء تشغيل الكمبيوتر.'
        ],
        tipsEn: [
          'Leading desktop operating systems include Microsoft Windows and Apple macOS.',
          'The OS is the very first software loaded into RAM during boot.'
        ]
      },
      {
        titleAr: '2. إدارة الملفات وأنواع الامتدادات الشائعة',
        titleEn: '2. File Management & Common File Extensions',
        contentAr: 'الملف (File) هو مجموعة من البيانات المخزنة تحت اسم معين. يتكون اسم الملف من جزأين: 1) الاسم الأصلي (Name) يختاره المستخدم ويعبر عن محتواه. 2) الامتداد (Extension) يتكون غالباً من 3 إلى 4 حروف ويحدد نوع الملف. من أشهر الامتدادات: • الملفات النصية: .txt و .docx و .pdf • ملفات الصور: .jpg و .png و .gif • ملفات الصوت: .mp3 و .wav • ملفات الفيديو: .mp4 و .avi • الملفات التنفيذية: .exe.',
        contentEn: 'A file name consists of a user-defined name and a format extension (.docx, .pdf, .jpg, .mp3, .mp4). Extensions signal the file type to the OS and determine which application opens it.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: التعرف على أنواع الملفات والبرنامج المشغل المناسب لكل منها',
          titleEn: 'Worked Example 2: Matching File Extensions to Proper Applications',
          equation: 'اسم_الملف . الامتداد  -->  تحديد نوع المحتوى والبرنامج الافتراضي',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الملف: "Science_Project.docx" ← الامتداد .docx يدل على أنه مستند نصي يفتح ببرنامج Microsoft Word أو LibreOffice Writer.',
              textEn: 'Science_Project.docx: Word processing document opened by MS Word.',
              noteAr: 'مستند نصي منسق'
            },
            {
              stepNumber: 2,
              textAr: 'الملف: "Family_Photo.jpg" ← الامتداد .jpg يدل على أنه ملف صورة نقطية يفتح ببرامج عارض الصور أو برنامج GIMP.',
              textEn: 'Family_Photo.jpg: Raster image opened by Photo Viewer or GIMP.',
              noteAr: 'ملف صورة رقمية'
            },
            {
              stepNumber: 3,
              textAr: 'الملف: "Lesson_Audio.mp3" ← الامتداد .mp3 يدل على ملف صوتي مضغوط يفتح بمشغلات الصوت مثل VLC أو Windows Media Player.',
              textEn: 'Lesson_Audio.mp3: Audio file opened by media players.',
              noteAr: 'ملف صوتي'
            }
          ],
          takeawayAr: 'تغيير امتداد الملف بالخطأ قد يجعل نظام التشغيل غير قادر على فتحه بالبرنامج الصحيح.',
          takeawayEn: 'Altering a file extension may cause application association errors in the OS.'
        },
        formativeCheck: {
          id: 'fc-mcomp2-2',
          questionAr: 'الملف الذي يحمل الامتداد ".mp4" هو ملف من نوع:',
          questionEn: 'A file with extension ".mp4" is of type:',
          optionsAr: ['ملف فيديو (فيديو وصوت)', 'ملف مستند نصي', 'ملف صورة ثابتة', 'ملف قاعدة بيانات'],
          optionsEn: ['Video file (Audio & Video)', 'Text document', 'Static image', 'Database'],
          correctIndex: 0,
          explanationAr: '.mp4 هو أشهر امتدادات ملفات الفيديو الرقمية عالية الجودة.',
          explanationEn: '.mp4 is a standard multimedia digital video container format.',
          hintAr: 'امتداد MP4 مخصص لمقاطع الفيديو.'
        },
        tipsAr: [
          'الملفات المضغوطة (مثل .zip و .rar) تقلل حجم الملفات وتجمع ملفات متعددة في أرشيف واحد لتسهيل إرسالها.',
          'ملفات .pdf تحافظ على نفس التنسيق والشكل عند فتحها على أي جهاز كمبيوتر أو هاتف.'
        ],
        tipsEn: [
          'Archive formats (.zip, .rar) compress file sizes for easier sharing.',
          'PDF formats guarantee consistent visual layouts across all operating systems.'
        ]
      },
      {
        titleAr: '3. إدارة المجلدات وسلة المحذوفات والبحث المتقدم',
        titleEn: '3. Folder Hierarchies, Directory Trees & Recycle Bin Operations',
        contentAr: 'المجلد (Folder / Directory) هو وعاء رقمي يُستخدم لتنظيم وتخزين الملفات ومجلدات فرعية أخرى بداخله في شكل شجرة هرمية (Directory Tree). العمليات الأساسية على المجلدات: 1) إنشاء مجلد جديد (New Folder). 2) إعادة التسمية (Rename). 3) النسخ (Copy) لعمل نسخة أخرى. 4) القص (Cut) لنقل المجلد إلى مكان جديد. 5) الحذف المؤقت (Delete) يرسل الملفات إلى سلة المحذوفات (Recycle Bin / Trash) حيث يمكن استعادتها (Restore)، بينما الحذف النهائي (Shift + Delete) يحذفها نهائياً من القرص دون المرور بالسلة.',
        contentEn: 'Folders organize files in hierarchical directory trees. Core operations include create, rename, copy, cut (move), temporary delete (to Recycle Bin for restore), and permanent delete (Shift+Delete).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: إنشاء هيكل مجلدات مدرسي منظم وتنفيذ عمليات النسخ والقص',
          titleEn: 'Worked Example 3: Building a Hierarchical School Folder Structure',
          equation: 'المجلد الرئيسي (المدرسة)  -->  مجلدات فرعية (المواد)  -->  الملفات',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: إنشاء مجلد رئيسي على سطح المكتب باسم "دراستي 2026".',
              textEn: 'Step 1: Create root folder "My Studies 2026".',
              noteAr: 'المجلد الأب (Root Folder)'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: إنشاء مجلدات فرعية داخله: مجلد "الرياضيات"، مجلد "العلوم"، ومجلد "الحاسب الآلي".',
              textEn: 'Step 2: Create subfolders: Math, Science, and ICT.',
              noteAr: 'تنظيم شجري هرمي'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نقل ملف "بحث_الخلية.docx" بقصه (Cut) من سطح المكتب ولصقه (Paste) داخل مجلد "العلوم".',
              textEn: 'Step 3: Cut file from desktop and paste into Science folder.',
              noteAr: 'نقل الملف لمكانه الصحيح'
            }
          ],
          takeawayAr: 'التنظيم الشجري للمجلدات يسهل العثور على الملفات ويوفر الوقت ويمنع تراكم الملفات العشوائية.',
          takeawayEn: 'Hierarchical folder trees streamline file discovery and maintain clean workspaces.'
        },
        formativeCheck: {
          id: 'fc-mcomp2-3',
          questionAr: 'لاستعادة ملف تم حذفه مؤقتاً إلى سلة المحذوفات (Recycle Bin)، نضغط بالزر الأيمن على الملف ونختار:',
          questionEn: 'To recover a temporarily deleted file from the Recycle Bin, right-click and choose:',
          optionsAr: ['استعادة (Restore)', 'قص (Cut)', 'تفريغ السلة (Empty)', 'إعادة تسمية (Rename)'],
          optionsEn: ['Restore', 'Cut', 'Empty Bin', 'Rename'],
          correctIndex: 0,
          explanationAr: 'أمر Restore يعيد الملف المحذوف فوراً إلى مكانه الأصلي الذي تم حذفه منه.',
          explanationEn: 'Restore recovers the deleted file back to its original directory.',
          hintAr: 'ابحث عن أمر "استعادة".'
        },
        tipsAr: [
          'يمكن استخدام شريط البحث (Search Box) للبحث عن ملف بكتابة اسمه أو امتداده مثل: *.pdf.',
          'الضغط على مفتاحي Ctrl + C يعني نسخ، و Ctrl + X يعني قص، و Ctrl + V يعني لصق.'
        ],
        tipsEn: [
          'Use wildcard search (*.pdf) to locate specific file extensions.',
          'Keyboard shortcuts: Ctrl+C (Copy), Ctrl+X (Cut), Ctrl+V (Paste).'
        ]
      },
      {
        titleAr: '4. إعدادات لوحة التحكم وتخصيص بيئة نظام التشغيل',
        titleEn: '4. System Settings, Control Panel & Desktop Customization',
        contentAr: 'يوفر نظام التشغيل أداة متخصصة لإدارة الإعدادات والتحكم في النظام (تسمى Settings أو Control Panel في Windows و System Settings في Linux). من خلالها يمكن للمستخدم: 1) ضبط التاريخ والوقت والمنطقة الزمنية. 2) إضافة وتغيير لغات لوحة المفاتيح (عربي/إنجليزي). 3) تخصيص خلفية سطح المكتب والألوان وشاشات التوقف. 4) إدارة الطابعات والأجهزة المتصلة. 5) إزالة وتثبيت البرامج والتطبيقات (Programs & Features) بأمان دون ترك مخلفات ضارة.',
        contentEn: 'Settings / Control Panel configures system date/time, keyboard languages, desktop themes, connected hardware, and secure software installation/uninstallation.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: خطوات إضافة لغة جديدة للوحة المفاتيح وإزالة برنامج غير مرغوب فيه',
          titleEn: 'Worked Example 4: Adding Keyboard Languages & Safe App Uninstall',
          equation: 'لوحة التحكم (Settings / Control Panel)  -->  تخصيص النظام',
          steps: [
            {
              stepNumber: 1,
              textAr: 'إضافة لغة: الدخول إلى الإعدادات (Settings) ← الوقت واللغة (Time & Language) ← إضافة لغة العربية (مصر).',
              textEn: 'Add Language: Settings -> Time & Language -> Add Arabic (Egypt).',
              noteAr: 'التبديل عبر Alt + Shift'
            },
            {
              stepNumber: 2,
              textAr: 'إزالة برنامج بأمان: الدخول إلى التطبيقات (Apps & Features) ← اختيار البرنامج ← الضغط على "إلغاء التثبيت Uninstall".',
              textEn: 'Uninstall App: Settings -> Apps -> Select App -> Uninstall.',
              noteAr: 'إلغاء تثبيت نظامي سليم'
            },
            {
              stepNumber: 3,
              textAr: 'تغيير الخلفية: النقر بالزر الأيمن على سطح المكتب ← تخصيص (Personalize) ← اختيار صورة الخلفية المفضلة.',
              textEn: 'Background: Right-click desktop -> Personalize -> Choose wallpaper.',
              noteAr: 'تخصيص المظهر'
            }
          ],
          takeawayAr: 'حذف اختصار البرنامج من سطح المكتب لا يعني إزالة البرنامج؛ يجب إزالة تثبيته من لوحة التحكم.',
          takeawayEn: 'Deleting a desktop shortcut does not uninstall software; use Control Panel/Settings.'
        },
        formativeCheck: {
          id: 'fc-mcomp2-4',
          questionAr: 'للتبديل السريع بين لغات الكتابة (عربي / إنجليزي) من لوحة المفاتيح نضغط على:',
          questionEn: 'To quickly switch keyboard typing languages (Arabic/English), press:',
          optionsAr: ['Alt + Shift', 'Ctrl + Alt + Delete', 'Ctrl + S', 'Windows + L'],
          optionsEn: ['Alt + Shift', 'Ctrl + Alt + Delete', 'Ctrl + S', 'Windows + L'],
          correctIndex: 0,
          explanationAr: 'مفتاحا Alt + Shift يقومان بالتبديل بين اللغات المثبتة في شريط المهام.',
          explanationEn: 'Alt + Shift toggles active keyboard input languages.',
          hintAr: 'مفتاح Alt مع مفتاح Shift.'
        },
        tipsAr: [
          'قفل شاشة الكمبيوتر بسرعة لحماية الخصوصية: اضغط على مفتاح (Windows + L).',
          'مدير المهام (Task Manager) يُفتح بـ Ctrl + Shift + Esc لإغلاق البرامج المعلقة التي لا تستجيب.'
        ],
        tipsEn: [
          'Press Windows+L to instantly lock screen.',
          'Ctrl+Shift+Esc launches Task Manager to close unresponsive frozen programs.'
        ]
      }
    ],

    conceptMapAr: [
      'نظام التشغيل OS: وسيط بين المستخدم والهاردوير والتطبيقات',
      'الواجهة الرسومية GUI: نوافذ + أيقونات + قوائم + مؤشر الفأرة',
      'الملفات والامتدادات: .docx (نصوص)، .jpg (صور)، .mp4 (فيديو)، .mp3 (صوت)',
      'المجلدات: تنظيم شجري هرمي، وسلة المحذوفات للاسترجاع (Restore)',
      'لوحة التحكم Settings: إدارة اللغات، إزالة البرامج Uninstall، وضبط الوقت'
    ],
    conceptMapEn: [
      'OS Role: Coordinator between users, apps, and hardware',
      'GUI Elements: Windows, Icons, Menus, Pointer',
      'File Formats: .docx (Text), .jpg (Images), .mp4 (Video), .mp3 (Audio)',
      'Folder Structures: Hierarchy and Recycle Bin restoration',
      'Settings/Control Panel: Language options, app uninstallation, display themes'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp2-1',
        questionAr: 'ما الفرق بين واجهة سطر الأوامر (CLI) وواجهة المستخدم الرسومية (GUI)؟',
        questionEn: 'What is the difference between Command Line Interface (CLI) and Graphical User Interface (GUI)?',
        solutionStepsAr: [
          '1) واجهة سطر الأوامر (CLI): واجهة نصية قديمة تتطلب من المستخدم حفظ وكتابة أوامر نصية محددة عبر لوحة المفاتيح لتنفيذ المهام (مثل نظام MS-DOS).',
          '2) واجهة المستخدم الرسومية (GUI): واجهة بصرية حديثة وسهلة تعرض الأيقونات والنوافذ والقوائم وتعتمد على التوجيه بالفأرة واللمس (مثل أنظمة Windows و macOS و Android).'
        ],
        solutionStepsEn: [
          '1) CLI: Text-based interface requiring typed commands (MS-DOS).',
          '2) GUI: Visual interface utilizing windows, icons, menus, and pointers (Windows, macOS).'
        ],
        answerAr: 'CLI تعتمد على كتابة الأوامر النصية • GUI تعتمد على النوافذ والأيقونات والفأرة.',
        answerEn: 'CLI requires typed text commands • GUI uses visual icons, windows, and mouse.'
      },
      {
        id: 'ex-mcomp2-2',
        questionAr: 'صل كل امتداد ملف بالنوع المناسب له: 1) summary.pdf  2) holiday.jpg  3) anthem.mp3  4) tutorial.mp4  5) setup.exe',
        questionEn: 'Match extensions: 1) summary.pdf 2) holiday.jpg 3) anthem.mp3 4) tutorial.mp4 5) setup.exe',
        solutionStepsAr: [
          '1) summary.pdf ← ملف مستند نصي محمول (PDF Document).',
          '2) holiday.jpg ← ملف صورة رقمية ثابتة (Image).',
          '3) anthem.mp3 ← ملف مقطع صوتي (Audio).',
          '4) tutorial.mp4 ← ملف مقطع فيديو متحرك (Video).',
          '5) setup.exe ← ملف تطبيق تنفيذي (Executable Application).'
        ],
        solutionStepsEn: [
          '1) .pdf: Document.',
          '2) .jpg: Image.',
          '3) .mp3: Audio.',
          '4) .mp4: Video.',
          '5) .exe: Executable.'
        ],
        answerAr: 'pdf (مستند) • jpg (صورة) • mp3 (صوت) • mp4 (فيديو) • exe (برنامج تنفيذي).',
        answerEn: 'pdf (Doc) • jpg (Image) • mp3 (Audio) • mp4 (Video) • exe (App).'
      },
      {
        id: 'ex-mcomp2-3',
        questionAr: 'ما الفرق بين عملية "نسخ ملف Copy" وعملية "قص ملف Cut"؟',
        questionEn: 'What is the difference between copying a file and cutting a file?',
        solutionStepsAr: [
          '1) نسخ الملف (Copy): ينشئ نسخة مطابقة جديدة من الملف في الموقع المستهدف، مع بقاء الملف الأصلي في مكانه دون حذف (Ctrl + C ثم Ctrl + V).',
          '2) قص الملف (Cut): ينقل الملف الأصلي بالكامل من موقعه الحالي إلى الموقع الجديد دون ترك نسخة في المكان القديم (Ctrl + X ثم Ctrl + V).'
        ],
        solutionStepsEn: [
          '1) Copy duplicates file in target while keeping original.',
          '2) Cut moves the file entirely to the new location.'
        ],
        answerAr: 'النسخ يصنع نسخة إضافية ويبقى الأصل • القص ينقل الملف من مكانه الأصلي تماماً.',
        answerEn: 'Copy duplicates • Cut moves the original file.'
      },
      {
        id: 'ex-mcomp2-4',
        questionAr: 'كيف تسترجع ملفاً قمت بحذفه بالخطأ من سلة المحذوفات؟ وهل يمكن استرجاع ملف حُذف باستخدام (Shift + Delete)؟',
        questionEn: 'How do you restore a file from the Recycle Bin? Can Shift+Delete files be restored easily?',
        solutionStepsAr: [
          '1) الاسترجاع من السلة: نفتح سلة المحذوفات (Recycle Bin)، ثم ننقر بالزر الأيمن على الملف المحذوف ونختار "استعادة Restore" فيعود لمكانه الأصلي.',
          '2) الحذف بـ (Shift + Delete): هو حذف نهائي مباشر من القرص الصلب دون المرور بسلة المحذوفات، ولا يمكن استرجاعه بالطرق العادية من النظام.'
        ],
        solutionStepsEn: [
          '1) Open Recycle Bin, right-click file, select Restore.',
          '2) Shift+Delete permanently deletes the file bypassing the recycle bin.'
        ],
        answerAr: 'نفتح سلة المحذوفات ونختار Restore • الحذف بـ Shift+Delete نهائي ولا يذهب للسلة.',
        answerEn: 'Right-click in bin and click Restore • Shift+Delete bypasses the bin permanently.'
      }
    ],

    assessment: {
      id: 'quiz-m-comp-2',
      lectureId: 'm-comp-2',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 2: أنظمة التشغيل والملفات والمجلدات',
      titleEn: 'Mastery Assessment 2: Operating Systems, File Extensions & Directory Structures',
      passingScore: 80,
      questions: [
        {
          id: 'qc2-1',
          textAr: 'البرنامج المسؤول عن إدارة المكونات المادية والتطبيقات في الحاسوب هو:',
          textEn: 'The software managing hardware resources and applications is:',
          optionsAr: ['نظام التشغيل (Operating System)', 'متصفح الإنترنت', 'برنامج الرسام', 'لوحة المفاتيح'],
          optionsEn: ['Operating System (OS)', 'Web Browser', 'Paint App', 'Keyboard'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف نظام التشغيل',
          conceptTestedEn: 'Operating System Role',
          explanationAr: 'نظام التشغيل OS هو البرنامج الأساسي لإدارة كل الهاردوير والسوفت وير.',
          explanationEn: 'The OS is master system software managing all computing resources.',
          difficulty: 'easy'
        },
        {
          id: 'qc2-2',
          textAr: 'أي من أنظمة التشغيل الآتية يُعد نظاماً مفتوح المصدر (Open Source)؟',
          textEn: 'Which of the following is an Open Source Operating System?',
          optionsAr: ['نظام لينكس (Linux)', 'نظام Windows 11', 'نظام Apple macOS', 'نظام Apple iOS'],
          optionsEn: ['Linux OS', 'Windows 11', 'macOS', 'Apple iOS'],
          correctIndex: 0,
          conceptTestedAr: 'أنظمة التشغيل مفتوحة المصدر',
          conceptTestedEn: 'Open Source Operating Systems',
          explanationAr: 'نظام Linux هو أشهر نظام تشغيل مفتوح المصدر ومجاني.',
          explanationEn: 'Linux is a renowned open-source desktop and server OS.',
          difficulty: 'easy'
        },
        {
          id: 'qc2-3',
          textAr: 'امتداد الملف هو الذي يحدد:',
          textEn: 'The file extension determines:',
          optionsAr: ['نوع الملف والبرنامج المناسب لتشغيله', 'سعر جهاز الكمبيوتر', 'سرعة الإنترنت', 'حجم شاشة العرض'],
          optionsEn: ['File type and associated default application', 'Computer cost', 'Internet speed', 'Monitor display size'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة امتداد الملف',
          conceptTestedEn: 'File Extension Purpose',
          explanationAr: 'امتداد الملف (مثل .docx أو .jpg) يحدد لنظام التشغيل نوع المحتوى والتطبيق المشغل له.',
          explanationEn: 'Extensions tell the OS which program opens the file format.',
          difficulty: 'easy'
        },
        {
          id: 'qc2-4',
          textAr: 'لحذف ملف حذفاً نهائياً ومباشراً دون إرساله إلى سلة المحذوفات نضغط على:',
          textEn: 'To permanently delete a file bypassing the Recycle Bin, press:',
          optionsAr: ['Shift + Delete', 'Ctrl + C', 'Ctrl + V', 'Alt + F4'],
          optionsEn: ['Shift + Delete', 'Ctrl + C', 'Ctrl + V', 'Alt + F4'],
          correctIndex: 0,
          conceptTestedAr: 'الحذف النهائي للملفات',
          conceptTestedEn: 'Permanent File Deletion Shortcut',
          explanationAr: 'مفتاحا Shift + Delete يحذفان الملف نهائياً من وحدة التخزين دون حفظه في سلة المحذوفات.',
          explanationEn: 'Shift+Delete performs instant permanent deletion.',
          difficulty: 'medium'
        },
        {
          id: 'qc2-5',
          textAr: 'الذاكرة التي تحتوي على برنامج الإقلاع الذاتي (BIOS) وتكون للقراءة فقط هي:',
          textEn: 'The read-only memory containing BIOS firmware is:',
          optionsAr: ['ROM', 'RAM', 'Cache Memory', 'Flash Disk'],
          optionsEn: ['ROM', 'RAM', 'Cache Memory', 'Flash Disk'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص ذاكرة ROM',
          conceptTestedEn: 'ROM Characteristics',
          explanationAr: 'ROM هي ذاكرة القراءة فقط الدائمة التي تحافظ على برمجيات الإقلاع BIOS.',
          explanationEn: 'ROM retains permanent startup instructions.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: COMPUTER NETWORKS, INTERNET & CYBER SAFETY ──
  {
    id: 'm-comp-3',
    order: 3,
    titleAr: 'المحاضرة 3: شبكات الكمبيوتر والإنترنت والحوسبة السحابية والأمان الرقمي',
    titleEn: 'Lecture 3: Computer Networks (LAN/WAN), Internet Services, Cloud Computing & Cyber Safety',
    subtitleAr: 'أنواع الشبكات (LAN vs WAN)، مفاهيم الإنترنت والويب ومتصفحات الإنترنت، خدمات التخزين السحابي (Cloud)، وقواعد الأمان الرقمي وحماية الخصوصية',
    subtitleEn: 'Master network topologies, LAN vs WAN, Web URLs, search syntax, Google Drive/OneDrive cloud storage, cyber threats, phishing, and password hygiene.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-comp-2',
    prerequisiteTitleAr: 'المحاضرة 2: أنظمة التشغيل وإدارة الملفات والمجلدات',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School ICT & Computer Science',
    termAr: 'الفصل الدراسي الأول والثاني',
    termEn: 'Term 1 & Term 2 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الثالثة: شبكات الكمبيوتر والإنترنت والأمان الرقمي (Networks & Cybersecurity)',
    unitTitleEn: 'Unit 3: Computer Networks, Cloud Computing & Cyber Safety',
    lessonNumberAr: 'الدرس 3: الشبكات والإنترنت والحوسبة السحابية والأمن السيبراني',
    lessonNumberEn: 'Lesson 3: Networks, Web Protocols, Cloud Storage & Digital Safety',

    warmupHookAr: 'عندما ترسل رسالة عبر واتساب أو ترفع ملف واجب على Google Drive، كيف تنتقل بياناتك عبر القارات في أجزاء من الثانية؟ وكيف تحمي نفسك من الروابط الاحتيالية (Phishing) والمخترقين؟ الشبكات والحوسبة السحابية جعلت العالم قرية صغيرة، والأمان الرقمي هو درعك الحصين لحماية هويتك ومعلوماتك على الإنترنت!',
    warmupHookEn: 'Cloud computing and fiber networks span oceans to deliver instant data transfers. Learn how LAN and WAN topologies connect computers worldwide, explore cloud services, and build bulletproof cyber safety habits against phishing and malware!',

    learningOutcomesAr: [
      'أن يعرّف الطالب شبكة الكمبيوتر وأهميتها في مشاركة الموارد (طابعات، ملفات، إنترنت)',
      'أن يفرّق بين الشبكة المحلية المحدودة (LAN) والشبكة واسعة المدى العالمية (WAN)',
      'أن يحلل مكونات عنوان موقع الويب (URL) والبروتوكول الآمن (HTTPS)',
      'أن يوضح مفهوم الحوسبة السحابية (Cloud Computing) وفوائد التخزين السحابي والنسخ الاحتياطي',
      'أن يطبق قواعد الأمان الرقمي: كلمات المرور القوية، التوثيق الثنائي، والحذر من التصيد الاحتيالي (Phishing)'
    ],
    learningOutcomesEn: [
      'Define computer networks and resource sharing benefits (printers, data, internet)',
      'Contrast Local Area Networks (LAN) with Wide Area Networks (WAN / Internet)',
      'Deconstruct Uniform Resource Locators (URL) and secure HTTPS protocols',
      'Explain cloud computing architecture, online storage, and collaborative backups',
      'Apply cyber hygiene: complex passwords, 2FA, and anti-phishing defense strategies'
    ],

    vocabulary: [
      {
        termAr: 'الشبكة المحلية (Local Area Network - LAN)',
        termEn: 'Local Area Network (LAN)',
        definitionAr: 'شبكة تربط أجهزة الكمبيوتر في نطاق جغرافي محدود ومغلق (مثل معمل المدرسة، مبنى، أو منزل).',
        definitionEn: 'Network connecting devices within a limited geographical area (school lab, home).'
      },
      {
        termAr: 'الشبكة الواسعة (Wide Area Network - WAN)',
        termEn: 'Wide Area Network (WAN)',
        definitionAr: 'شبكة تربط الأجهزة عبر مسافات جغرافية شاسعة بين مدن ودول وقارات، وأكبرها شبكة الإنترنت العالمية.',
        definitionEn: 'Network spanning across cities, countries, and continents; the Internet is the ultimate WAN.'
      },
      {
        termAr: 'الحوسبة السحابية (Cloud Computing)',
        termEn: 'Cloud Computing',
        definitionAr: 'توفير خدمات الحوسبة (تخزين ملفات، معالجة، برمجيات) عبر الإنترنت دون الحاجة لتخزينها على جهازك الشخصي.',
        definitionEn: 'On-demand delivery of storage, computing power, and software via the Internet.'
      },
      {
        termAr: 'التصيد الاحتيالي (Phishing)',
        termEn: 'Phishing',
        definitionAr: 'حيلة خبيثة لإرسال رسائل أو روابط مزيفة تشبه المواقع الرسمية لسرقة كلمات المرور والبيانات الشخصية للمستخدم.',
        definitionEn: 'Fraudulent attempts to steal sensitive credentials via deceptive emails or fake websites.'
      }
    ],

    keyConceptsAr: [
      'فوائد الشبكات: مشاركة الأجهزة (طابعات وأقراص)، مشاركة البيانات، وسرعة التواصل',
      'مكونات الـ URL: البروتوكول (https://) + اسم النطاق (www.moe.gov.eg) + مسار الصفحة',
      'الحوسبة السحابية: الوصول للملفات من أي مكان وفي أي وقت، والنسخ الاحتياطي التلقائي',
      'كلمة المرور القوية: لا تقل عن 8 خانات وتحتوي على (حروف كبيرة A-Z، حروف صغيرة a-z، أرقام 0-9، ورموز خاصة مثل @#$%)',
      'برامج الحماية: تحديث برامج مكافحة الفيروسات (Antivirus) وجدار الحماية (Firewall)'
    ],
    keyConceptsEn: [
      'Network benefits: Hardware sharing (printers), data exchange, instant messaging',
      'URL structure: Protocol (https) + Domain name + Directory path',
      'Cloud advantages: Universal access, collaborative editing, automated backups',
      'Strong password rule: >= 8 characters with mixed uppercase, lowercase, numbers, and symbols',
      'Cyber defense: Regular Antivirus updates and Firewall protection'
    ],
    summaryAr: 'فهم متكامل لشبكات الكمبيوتر وأنواعها (LAN و WAN)، والتعامل مع الإنترنت والخدمات السحابية، والتحلي بالمواطنة الرقمية الصالحة وإجراءات الأمن السيبراني لحماية الخصوصية.',
    summaryEn: 'Comprehensive network fundamentals: LAN vs WAN, URL parsing, cloud storage workflows, and vital cybersecurity defenses against phishing and malware.',

    sections: [
      {
        titleAr: '1. شبكات الكمبيوتر وأنواعها (LAN vs WAN) ومشاركة الموارد',
        titleEn: '1. Computer Networks, Topologies & Resource Sharing (LAN vs WAN)',
        contentAr: 'شبكة الكمبيوتر هي ربط جهازين أو أكثر معاً عبر وسائط سلكية (كابلات) أو لاسلكية (Wi-Fi) بهدف تبادل البيانات ومشاركة الموارد المادية والبرمجية. تنقسم الشبكات حسب المساحة الجغرافية إلى نوعين رئيسيين: 1) الشبكة المحلية (LAN): تغطي مساحة صغيرة مثل معمل الحاسب بالمدرسة أو المنزل، وتتميز بالسرعة العالية ومشاركة طابعة واحدة بين 20 جهازاً. 2) الشبكة واسعة المدى (WAN): تغطي مساحات شاسعة تربط فروع بنك في مدن مختلفة أو أجهزة عبر قارات العالم، وشبكة الإنترنت هي أكبر مثال على شبكات WAN.',
        contentEn: 'Computer networks connect devices via wired or wireless media. Local Area Networks (LAN) span single buildings to share hardware like printers. Wide Area Networks (WAN), culminating in the global Internet, span countries and continents.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: تخطيط شبكة محلية (LAN) لمعمل حاسب آلي بمدرسة',
          titleEn: 'Worked Example 1: Planning a School Computer Lab LAN Architecture',
          equation: '20 جهاز حاسوب + موجه Switch + طابعة شبكية مشتركة واحدة  -->  شبكة LAN',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الهدف: تمكين 20 طالباً من طباعة أبحاثهم المدرسية دون الحاجة لشراء 20 طابعة منفصلة.',
              textEn: 'Goal: Enable 20 students to print to a single shared network printer.',
              noteAr: 'توفير التكاليف ومشاركة الموارد'
            },
            {
              stepNumber: 2,
              textAr: 'التوصيل: توصيل الأجهزة الـ 20 والطابعة بجهاز الموزع/المبدل (Switch) عبر كابلات شبكية (Ethernet).',
              textEn: 'Hardware: Connect all computers and printer to a network Switch via Ethernet.',
              noteAr: 'بناء شبكة محلية LAN'
            },
            {
              stepNumber: 3,
              textAr: 'المشاركة: تفعيل خاصية "مشاركة الطابعة Printer Sharing"؛ فيستطيع أي طالب إرسال أمر الطباعة وتستقبله نفس الطابعة فوراً.',
              textEn: 'Software: Enable network printer sharing across the workgroup subnet.',
              noteAr: 'مشاركة موارد الأجهزة بنجاح'
            }
          ],
          takeawayAr: 'أعظم فائدة لشبكات LAN هي خفض التكاليف ومشاركة الموارد باحترافية وسهولة.',
          takeawayEn: 'Resource sharing across LANs dramatically cuts hardware costs and optimizes workflows.'
        },
        formativeCheck: {
          id: 'fc-mcomp3-1',
          questionAr: 'شبكة الكمبيوتر التي تربط الأجهزة داخل معمل مدرسة أو مبنى واحد تسمى:',
          questionEn: 'A network connecting computers inside a single school lab or building is a:',
          optionsAr: ['شبكة محلية (LAN)', 'شبكة واسعة (WAN)', 'شبكة الإنترنت', 'شبكة الأقمار الصناعية'],
          optionsEn: ['Local Area Network (LAN)', 'Wide Area Network (WAN)', 'Internet', 'Satellite Network'],
          correctIndex: 0,
          explanationAr: 'LAN هي الشبكة المحلية المحدودة جغرافياً داخل مبنى أو معمل.',
          explanationEn: 'LAN stands for Local Area Network.',
          hintAr: 'ابحث عن اختصار Local Area Network (LAN).'
        },
        tipsAr: [
          'الإنترنت (Internet) هو اختصار International Network وهي أضخم شبكة WAN في العالم.',
          'الشبكة اللاسلكية في المنزل تسمى WLAN وتعتمد على موجات الراديو (Wi-Fi).'
        ],
        tipsEn: [
          'Internet stands for International Network (the global WAN).',
          'Home wireless networks are designated WLAN utilizing Wi-Fi radio frequencies.'
        ]
      },
      {
        titleAr: '2. مفاهيم الإنترنت والويب ومكونات عنوان الموقع (URL)',
        titleEn: '2. Web Concepts, Browsers & URL Anatomy',
        contentAr: 'شبكة الويب العالمية (World Wide Web - WWW) هي نظام من المستندات المرتبطة بروابط تشعبية وتُعرض عبر متصفحات الإنترنت (مثل Google Chrome و Edge و Firefox). لكل موقع وصفحة عنوان فريد على الويب يسمى (URL - Uniform Resource Locator). يتكون عنوان URL النموذجي من: 1) البروتوكول: مثل (https://) ويدل حرف S على الأمان والتشفير (Secure). 2) اسم النطاق (Domain Name): مثل (www.moe.gov.eg) حيث .gov تعني حكومي و .eg تعني مصر. 3) مسار الملف (Path): مثل (/curriculum/prep1.html).',
        contentEn: 'The World Wide Web (WWW) is navigated via web browsers. Every page features a unique URL (Uniform Resource Locator) consisting of protocol (https:// for encrypted transport), domain host, and directory resource path.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: تحليل وتفكيك عنوان موقع وزارة التربية والتعليم',
          titleEn: 'Worked Example 2: Deconstructing an Official Ministry Website URL',
          equation: 'https://www.moe.gov.eg/prep1/math.html',
          steps: [
            {
              stepNumber: 1,
              textAr: 'البروتوكول (https://): بروتوكول نقل النص التشعبي الآمن والمشفر (Hypertext Transfer Protocol Secure).',
              textEn: 'Protocol: https:// indicates encrypted secure communication.',
              noteAr: 'البروتوكول الآمن HTTPS'
            },
            {
              stepNumber: 2,
              textAr: 'اسم النطاق (www.moe.gov.eg): moe (اسم الوزارة)، gov (جهة حكومية Government)، eg (رمز دولة مصر Egypt).',
              textEn: 'Domain: moe (Ministry), .gov (Government agency), .eg (Egypt country code).',
              noteAr: 'النطاق الجغرافي والنوعي'
            },
            {
              stepNumber: 3,
              textAr: 'مسار الملف (/prep1/math.html): المسار داخل خادم الموقع المؤدي لصفحة رياضيات أولى إعدادي.',
              textEn: 'Path: /prep1/math.html leads directly to the specific curriculum webpage.',
              noteAr: 'اسم الصفحة والمجلد'
            }
          ],
          takeawayAr: 'وجود القفل وكلمة https يعني أن اتصالك بالموقع مشفر وآمن ولا يمكن التجسس على بياناتك أثناء الإرسال.',
          takeawayEn: 'The padlock icon and HTTPS protocol confirm active TLS encryption safeguarding web traffic.'
        },
        formativeCheck: {
          id: 'fc-mcomp3-2',
          questionAr: 'في عنوان الموقع "https://www.oxford.edu"، يدل الاختصار ".edu" على أن الموقع:',
          questionEn: 'In "https://www.oxford.edu", the extension ".edu" signifies an:',
          optionsAr: ['موقع تعليمي أو جامعة (Educational)', 'موقع تجاري (Commercial)', 'موقع حكومي (Government)', 'موقع عسكري (Military)'],
          optionsEn: ['Educational institution / university', 'Commercial store', 'Government agency', 'Military site'],
          correctIndex: 0,
          explanationAr: '.edu هي اختصار Educational وتخصص للمؤسسات التعليمية والجامعات والمدارس.',
          explanationEn: '.edu is reserved for accredited educational universities and academies.',
          hintAr: 'edu هي اختصار لكمة Education (تعليم).'
        },
        tipsAr: [
          '.com = موقع تجاري (Commercial) ، .org = منظمة غير ربحية (Organization) ، .gov = جهة حكومية (Government).',
          'محرك البحث (Search Engine) مثل Google يبحث في مليارات الصفحات ويعرض النتائج المناسبة لكلماتك الدلالية.'
        ],
        tipsEn: [
          '.com: Commercial, .org: Non-profit Organization, .gov: Government.',
          'Search engines index web pages against keywords and relevancy algorithms.'
        ]
      },
      {
        titleAr: '3. الحوسبة السحابية وخدمات التخزين والمشاركة',
        titleEn: '3. Cloud Computing & Collaborative Online Storage',
        contentAr: 'الحوسبة السحابية (Cloud Computing) تعني استخدام خوادم عملاقة متصلة بالإنترنت لتخزين ملفاتك وتشغيل التطبيقات دون الحاجة لتثبيتها أو تخزينها محلياً على جهازك. من أشهر خدمات التخزين السحابي: Google Drive و Microsoft OneDrive و Dropbox. أهم فوائد السحابة: 1) إمكانية الوصول لملفاتك وصورك من أي جهاز (كمبيوتر، تابلت، موبايل) بمجرد تسجيل الدخول بحسابك. 2) العمل المشترك والتعاون في تعديل نفس الملف مع زملائك في نفس الوقت. 3) النسخ الاحتياطي التلقائي لحماية بياناتك في حال تعطل جهازك.',
        contentEn: 'Cloud Computing provides online storage and applications via web infrastructure (Google Drive, OneDrive). It delivers universal cross-device access, real-time team collaboration, and automated backup redundancy.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: مشاركة بحث مدرسي جماعي عبر التخزين السحابي Google Drive / OneDrive',
          titleEn: 'Worked Example 3: Collaborative School Project via Cloud Storage',
          equation: 'رفع ملف على السحابة  -->  إنشاء رابط مشاركة  -->  تعاون في التحرير المباشر',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: يرفع الطالب ملف العرض التقديمي "مشروع_البيئة.pptx" إلى حسابه في Google Drive أو OneDrive.',
              textEn: 'Step 1: Upload presentation file to Google Drive/OneDrive.',
              noteAr: 'تخزين سحابي آمن'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: يقوم بمشاركة الملف عبر البريد الإلكتروني مع زملائه الثلاثة في المجموعة ومنحهم صلاحية التحرير (Editor).',
              textEn: 'Step 2: Share link with team members granting Edit permissions.',
              noteAr: 'ضبط صلاحيات المشاركة'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: يعمل الطلاب الأربعة معاً في نفس اللحظة ويكتب كل طالب الجزء الخاص به، ويقوم النظام بالحفظ التلقائي.',
              textEn: 'Step 3: All 4 students edit simultaneously with real-time autosave.',
              noteAr: 'العمل الجماعي المتزامن'
            }
          ],
          takeawayAr: 'السحابة تلغي الحاجة لتبادل الفلاش ميموري وتنقل الملفات فورياً بين الطلاب والمعلمين.',
          takeawayEn: 'Cloud collaboration eliminates flash drive swapping and enables seamless real-time learning.'
        },
        formativeCheck: {
          id: 'fc-mcomp3-3',
          questionAr: 'من أهم مميزات خدمات التخزين السحابي (مثل Google Drive و OneDrive):',
          questionEn: 'A primary benefit of cloud storage services like Google Drive and OneDrive is:',
          optionsAr: ['إمكانية الوصول للملفات من أي مكان وجهاز متصل بالإنترنت', 'أنها تعمل بدون الحاجة لإنترنت نهائياً', 'أنها تزيد من سعة شاشة العرض', 'أنها تحذف الملفات تلقائياً بعد 24 ساعة'],
          optionsEn: ['Accessing files from any internet-connected device anywhere', 'Working strictly offline without internet', 'Expanding monitor resolution', 'Deleting files after 24 hours'],
          correctIndex: 0,
          explanationAr: 'التخزين السحابي يتيح لك فتح وتعديل ملفاتك أينما كنت ومن أي هاتف أو حاسوب عبر حسابك.',
          explanationEn: 'Cloud storage offers device-agnostic, location-independent universal access.',
          hintAr: 'السحابة تعني أن ملفاتك محفوظة على الإنترنت ومتاحة من أي مكان.'
        },
        tipsAr: [
          'احرص دائماً على عدم منح صلاحية "تعديل Editor" إلا لمن تثق بهم، واستخدم صلاحية "عرض Viewer" للمشاهدة فقط.',
          'النسخ الاحتياطي السحابي التلقائي يحمي صورك وذكرياتك حتى لو ضاع هاتفك أو تعرض للتلف.'
        ],
        tipsEn: [
          'Use "Viewer" permissions when sharing sensitive docs publicly.',
          'Automated cloud backups preserve critical files during device failure.'
        ]
      },
      {
        titleAr: '4. الأمان الرقمي وحماية الخصوصية ومكافحة التصيد',
        titleEn: '4. Cybersecurity, Privacy Protection & Anti-Phishing Hygiene',
        contentAr: 'الأمان الرقمي (Cybersecurity) هو حماية أجهزتك وحساباتك وبياناتك الشخصية من الاختراق والسرقة والبرمجيات الخبيثة (Malware). القواعد الذهبية للأمان الرقمي: 1) إنشاء كلمات مرور قوية (Strong Passwords) لا تقل عن 8 خانات وتحتوي على حروف كبيرة وصغيرة وأرقام ورموز. 2) تفعيل ميزة التوثيق ذي العاملين (2-Factor Authentication - 2FA). 3) الحذر من روابط ورسائل التصيد الاحتيالي (Phishing) وعدم إدخال كلمات المرور في صفحات غير موثوقة. 4) عدم نشر البيانات الشخصية الحساسة (مثل العنوان ورقم الهاتف والصور الخاصة) للغرباء على وسائل التواصل الاجتماعي.',
        contentEn: 'Cybersecurity safeguards data and devices from digital attacks and malware. Master the core rules: Complex unique passwords, Two-Factor Authentication (2FA), recognizing phishing email scams, updating antivirus programs, and safeguarding personal data.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: كشف رسالة تصيد احتيالي (Phishing) ومقارنة كلمة مرور ضعيفة وقوية',
          titleEn: 'Worked Example 4: Spotting Phishing Scams & Building Strong Passwords',
          equation: 'كلمة مرور قوية = 8+ خانات (حروف A-Z + a-z + أرقام 0-9 + رموز @#$)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'كشف التصيد: وصلتك رسالة "مبروك لقد ربحت هاتف آيفون! اضغط هنا وسجل بريدك وكلمة المرور لاستلام الجائزة". هذه رسالة تصيد خبيثة (Phishing) لسرقة حسابك ويجب حذفها فوراً!',
              textEn: 'Phishing Detection: "You won an iPhone, click here to enter password" is a scam to steal credentials.',
              noteAr: 'احذر من الروابط المشبوهة'
            },
            {
              stepNumber: 2,
              textAr: 'كلمة مرور ضعيفة سهلة الاختراق: "123456" أو "ahmed2010" (تعتمد على أرقام متتالية أو اسم وتاريخ ميلاد).',
              textEn: 'Weak Password: "123456" or birthdates (cracked in milliseconds).',
              noteAr: 'كلمة مرور غير آمنة'
            },
            {
              stepNumber: 3,
              textAr: 'كلمة مرور قوية آمنة: "Ah#97!mEd$26" (تحتوي على حروف كبيرة وصغيرة وأرقام ورموز خاصة ويستحيل تخمينها).',
              textEn: 'Strong Password: "Ah#97!mEd$26" combines mixed case, numbers, and symbols.',
              noteAr: 'كلمة مرور قوية وآمنة'
            }
          ],
          takeawayAr: 'لا تشارك كلمة المرور الخاصة بك مع أي شخص، ولا تستخدم نفس كلمة المرور لجميع حساباتك.',
          takeawayEn: 'Never share passwords or reuse identical passwords across multiple online accounts.'
        },
        formativeCheck: {
          id: 'fc-mcomp3-4',
          questionAr: 'أي من كلمات المرور التالية تُعد كلمة مرور "قوية وآمنة" يصعب اختراقها؟',
          questionEn: 'Which of the following is a "strong and secure" password?',
          optionsAr: ['K@rim#2026$Win', '12345678', 'karim123', 'password'],
          optionsEn: ['K@rim#2026$Win', '12345678', 'karim123', 'password'],
          correctIndex: 0,
          explanationAr: 'K@rim#2026$Win تحتوي على أكثر من 8 خانات وتجمع بين حروف كبيرة وصغيرة وأرقام ورموز خاصة متنوعة.',
          explanationEn: 'K@rim#2026$Win meets all criteria: length, uppercase, lowercase, digits, and special characters.',
          hintAr: 'اختر كلمة المرور التي تحتوي على رموز وأرقام وحروف كبيرة وصغيرة معاً.'
        },
        tipsAr: [
          'لا تقم بتنزيل ملفات أو ألعاب مقرصنة من مواقع مجهولة لأنها غالباً ما تحتوي على فيروسات تجسس وفدية.',
          'خاصية التوثيق الثنائي (2FA) ترسل رمز تحقق لهاتفك لمنع أي شخص من فتح حسابك حتى لو عرف كلمة المرور.'
        ],
        tipsEn: [
          'Avoid downloading pirated software which often bundles trojans and spyware.',
          'Two-Factor Authentication (2FA) requires phone SMS/app verification stopping unauthorized logins.'
        ]
      }
    ],

    conceptMapAr: [
      'شبكات الكمبيوتر: LAN محلية (مبنى/معمل) vs WAN واسعة (الإنترنت)',
      'عنوان الويب URL: بروتوكول مشفر https + اسم النطاق .gov/.edu/.com + مسار الصفحة',
      'الحوسبة السحابية: تخزين سحابي (Google Drive / OneDrive) + مشاركة وتعاون فوري',
      'الأمان الرقمي: كلمة مرور قوية (8+ خانات ورموز) + توثيق ثنائي 2FA',
      'مكافحة المخاطر: تجنب روابط التصيد الاحتيالي Phishing وبرامج مكافحة الفيروسات'
    ],
    conceptMapEn: [
      'Networks: Local LAN vs Global WAN (Internet)',
      'URL Structure: HTTPS secure protocol, Domain extensions, Resource path',
      'Cloud Storage: Universal access and real-time multi-user editing',
      'Cybersecurity: Strong passwords, 2FA authorization',
      'Threat Defense: Anti-phishing vigilance and active Antivirus shields'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp3-1',
        questionAr: 'قارن بين الشبكة المحلية (LAN) والشبكة الواسعة (WAN) من حيث: المساحة الجغرافية، والسرعة، ومثال عملي لكل منهما.',
        questionEn: 'Compare LAN and WAN in terms of geographical area, speed, and real-world examples.',
        solutionStepsAr: [
          '1) الشبكة المحلية (LAN): تغطي مساحة جغرافية صغيرة محدودة (مثل معمل المدرسة أو المنزل)، وتتميز بالسرعة العالية جداً لنقل البيانات. مثال: شبكة معمل الحاسب الآلي.',
          '2) الشبكة الواسعة (WAN): تغطي مساحات جغرافية كبيرة جداً (بين المدن والدول والقارات)، وتعتمد على خطوط الاتصال والأقمار الصناعية. مثال: شبكة الإنترنت العالمية أو شبكة فروع البنوك الدولية.'
        ],
        solutionStepsEn: [
          '1) LAN: Small local area, high speed. Example: School computer lab.',
          '2) WAN: Expansive global territory. Example: The World Wide Web / Internet.'
        ],
        answerAr: 'LAN: مساحة محدودة وسرعة عالية (معمل مدرسة) • WAN: مساحة عالمية شاسعة (الإنترنت).',
        answerEn: 'LAN: Local fast area (Lab) • WAN: Global territory (Internet).'
      },
      {
        id: 'ex-mcomp3-2',
        questionAr: 'اشرح مكونات عنوان موقع الويب التالي: https://www.ekb.eg',
        questionEn: 'Explain components of URL: https://www.ekb.eg',
        solutionStepsAr: [
          '1) https:// : بروتوكول نقل النص التشعبي الآمن والمشفر (Hypertext Transfer Protocol Secure).',
          '2) www : خادم الشبكة العنكبوتية العالمية (World Wide Web).',
          '3) ekb : اسم الموقع (بنك المعرفة المصري Egyptian Knowledge Bank).',
          '4) .eg : النطاق الجغرافي لجمهورية مصر العربية (Egypt).'
        ],
        solutionStepsEn: [
          '1) https:// : Secure transfer protocol.',
          '2) www : World Wide Web server.',
          '3) ekb : Egyptian Knowledge Bank domain.',
          '4) .eg : Egypt national country code.'
        ],
        answerAr: 'بروتوكول آمن HTTPS + خادم WWW + اسم موقع بنك المعرفة EKB + نطاق دولة مصر .eg.',
        answerEn: 'HTTPS protocol + WWW + EKB domain + .eg country code.'
      },
      {
        id: 'ex-mcomp3-3',
        questionAr: 'ما هو "التصيد الاحتيالي" (Phishing)؟ وكيف تحمي نفسك منه عند تصفح الإنترنت؟',
        questionEn: 'What is Phishing? How do you protect yourself online?',
        solutionStepsAr: [
          '1) المفهوم: هو محاولة احتيالية من مخترقين يرسلون رسائل بريد أو روابط مزيفة تشبه المواقع الرسمية لخداع المستخدم ليدخل كلمة مروره أو بياناته البنكية لسرقتها.',
          '2) طرق الحماية: • عدم فتح أي رابط مجهول أو مشبوه • التأكد من وجود بروتوكول https:// وعلامة القفل • عدم إرسال كلمات المرور عبر البريد أو الرسائل إطلاقاً • تفعيل برامج مكافحة الفيروسات وتحديث المتصفح.'
        ],
        solutionStepsEn: [
          '1) Phishing is a social engineering attack using fake websites to steal passwords.',
          '2) Defense: Check HTTPS padlocks, avoid clicking untrusted links, never share passwords.'
        ],
        answerAr: 'حيلة لسرقة كلمات المرور بصفحات مزيفة • الحماية بعدم الضغط على الروابط والتأكد من HTTPS.',
        answerEn: 'Credential theft scam via fake sites • Protect by verifying HTTPS and avoiding suspicious links.'
      },
      {
        id: 'ex-mcomp3-4',
        questionAr: 'اذكر 3 شروط أساسية لإنشاء كلمة مرور قوية يصعب على برامج الاختراق تخمينها.',
        questionEn: 'State 3 essential rules for creating a strong, uncrackable password.',
        solutionStepsAr: [
          '1) ألا يقل طول كلمة المرور عن 8 إلى 12 خانة.',
          '2) أن تشتمل على مزيج متنوع من: الحروف الكبيرة (A-Z)، الحروف الصغيرة (a-z)، الأرقام (0-9)، والرموز الخاصة (@, #, $, %, &).',
          '3) ألا تعتمد على معلومات شخصية يسهل تخمينها (مثل الاسم، تاريخ الميلاد، رقم الهاتف، أو تسلسلات مثل 123456).'
        ],
        solutionStepsEn: [
          '1) Minimum length of 8 to 12 characters.',
          '2) Combination of uppercase, lowercase, numbers, and special symbols.',
          '3) No easily guessable personal info (names, birthdates, sequences).'
        ],
        answerAr: '1) طول 8+ خانات 2) مزيج من الحروف الكبيرة والصغيرة والأرقام والرموز 3) خلوها من الأسماء والتواريخ الشخصية.',
        answerEn: '1) 8+ characters 2) Mixed case, digits & symbols 3) No personal identifiable info.'
      }
    ],

    assessment: {
      id: 'quiz-m-comp-3',
      lectureId: 'm-comp-3',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 3: شبكات الكمبيوتر والحوسبة السحابية والأمن الرقمي',
      titleEn: 'Mastery Assessment 3: Networks, Cloud Services & Cybersecurity',
      passingScore: 80,
      questions: [
        {
          id: 'qc3-1',
          textAr: 'تعتبر شبكة الإنترنت العالمية أكبر مثال على شبكات:',
          textEn: 'The global Internet is the largest example of:',
          optionsAr: ['الشبكات واسعة المدى (WAN)', 'الشبكات المحلية (LAN)', 'الشبكات المنزلية المغلقة', 'الشبكات السلكية فقط'],
          optionsEn: ['Wide Area Networks (WAN)', 'Local Area Networks (LAN)', 'Closed Home Networks', 'Wired only networks'],
          correctIndex: 0,
          conceptTestedAr: 'تصنيف شبكة الإنترنت كشبكة WAN',
          conceptTestedEn: 'Internet as a WAN',
          explanationAr: 'الإنترنت يربط ملايين الأجهزة عبر قارات العالم فهو شبكة واسعة WAN.',
          explanationEn: 'The global Internet is a worldwide Wide Area Network (WAN).',
          difficulty: 'easy'
        },
        {
          id: 'qc3-2',
          textAr: 'حرف "S" في بروتوكول الويب "https://" يرمز إلى كلمة:',
          textEn: 'The letter "S" in "https://" stands for:',
          optionsAr: ['Secure (آمن ومشفر)', 'Simple (بسيط)', 'Server (خادم)', 'Speed (سرعة)'],
          optionsEn: ['Secure (Encrypted)', 'Simple', 'Server', 'Speed'],
          correctIndex: 0,
          conceptTestedAr: 'معنى بروتوكول HTTPS الآمن',
          conceptTestedEn: 'HTTPS Protocol Meaning',
          explanationAr: 'S تعني Secure وتؤكد أن الموقع يستخدم تشفير التوصيل الآمن لحماية البيانات.',
          explanationEn: 'S stands for Secure, indicating active TLS encryption.',
          difficulty: 'easy'
        },
        {
          id: 'qc3-3',
          textAr: 'خدمات التخزين السحابي مثل Google Drive و OneDrive تتيح لك:',
          textEn: 'Cloud storage like Google Drive and OneDrive enables users to:',
          optionsAr: ['حفظ الملفات على الإنترنت والوصول لها من أي جهاز', 'طباعة المستندات بدون ورق', 'زيادة سرعة معالج الكمبيوتر', 'تشغيل الكمبيوتر بدون كهرباء'],
          optionsEn: ['Store files online and access from any device', 'Print paperless', 'Overclock CPU', 'Run without power'],
          correctIndex: 0,
          conceptTestedAr: 'فائدة التخزين السحابي',
          conceptTestedEn: 'Cloud Storage Utility',
          explanationAr: 'التخزين السحابي يوفر مساحة تخزين آمنة على الإنترنت تفتح من أي جهاز في أي وقت.',
          explanationEn: 'Cloud storage provides remote, device-independent file hosting and synchronization.',
          difficulty: 'easy'
        },
        {
          id: 'qc3-4',
          textAr: 'إرسال رسالة بريد مزيفة تنتحل صفة بنك لطلب كلمة المرور الخاصة بك يُسمى:',
          textEn: 'Sending fake emails impersonating a bank to steal your password is called:',
          optionsAr: ['التصيد الاحتيالي (Phishing)', 'النسخ الاحتياطي (Backup)', 'التخزين السحابي (Cloud)', 'الترقية (Upgrade)'],
          optionsEn: ['Phishing Attack', 'Data Backup', 'Cloud Storage', 'System Upgrade'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم التصيد الاحتيالي',
          conceptTestedEn: 'Phishing Attack Concept',
          explanationAr: 'Phishing هو هجوم احتيالي لخداع المستخدم وسرقة بياناته السرية.',
          explanationEn: 'Phishing deceives victims into revealing sensitive credentials.',
          difficulty: 'medium'
        },
        {
          id: 'qc3-5',
          textAr: 'لتأمين حسابك بشكل فائق حتى لو عرف شخص كلمة مرورك، ينصح بتفعيل:',
          textEn: 'To secure accounts even if someone discovers your password, enable:',
          optionsAr: ['التوثيق ذو العاملين (2-Factor Authentication)', 'إيقاف جدار الحماية', 'حفظ كلمة المرور في ملف نصي', 'مشاركة الحساب مع الأصدقاء'],
          optionsEn: ['Two-Factor Authentication (2FA)', 'Disable Firewall', 'Store password in text file', 'Share credentials with friends'],
          correctIndex: 0,
          conceptTestedAr: 'أهمية التوثيق الثنائي 2FA',
          conceptTestedEn: 'Two-Factor Authentication Importance',
          explanationAr: 'خاصية 2FA ترسل رمز تحقق إلى هاتفك المحمول فتمنع الدخول بدون إذنك حتى لو عُرفت كلمة المرور.',
          explanationEn: '2FA adds a critical second verification layer preventing unauthorized access.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: ALGORITHMS & VISUAL PROGRAMMING WITH SCRATCH ──
  {
    id: 'm-comp-4',
    order: 4,
    titleAr: 'المحاضرة 4: التفكير الخوارزمي وخرائط التدفق والبرمجة المرئية بـ Scratch',
    titleEn: 'Lecture 4: Computational Thinking, Algorithms, Flowcharts & Scratch Visual Programming',
    subtitleAr: 'مفهوم الخوارزمية (Algorithm)، رسم خرائط التدفق (Flowcharts)، بيئة برنامج Scratch (المنصة، الكائنات، اللبنات البرمجية)، التكرار والشروط والمتغيرات',
    subtitleEn: 'Master algorithmic problem solving, flowchart symbols (Start, Input, Decision, Process), Scratch IDE (Stage, Sprites, Blocks), Loops, Conditionals, and Variables.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-comp-3',
    prerequisiteTitleAr: 'المحاضرة 3: شبكات الكمبيوتر والإنترنت والحوسبة السحابية والأمان الرقمي',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School ICT & Computer Science',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الرابعة: البرمجة والتفكير المنطقي ببرنامج سكراتش (Programming with Scratch)',
    unitTitleEn: 'Unit 4: Computational Logic, Flowcharts & Scratch Block Programming',
    lessonNumberAr: 'الدرس 4: الخوارزميات والبرمجة المرئية بسكراتش',
    lessonNumberEn: 'Lesson 4: Algorithmic Logic, Flowcharts & Sprite Animation',

    warmupHookAr: 'عندما ترتب خطوات إعداد كوب من الشاي، أو خطوات ارتداء ملابسك والذهاب للمدرسة، فأنت في الحقيقة تقوم بتأليف "خوارزمية" مرتبة منطقياً! الكمبيوتر آلة ذكية وسريعة ولكنه يحتاج لتعليمات واضحة ودقيقة خطوة بخطوة. كيف نحول أفكارنا الإبداعية إلى ألعاب تفاعلية وقصص متحركة ممتعة باستخدام لبنات سكراتش الملونة؟',
    warmupHookEn: 'Every computer game, mobile app, and robot operates on Algorithms: precise, step-by-step instructions. Explore visual block coding in Scratch, master sequential logic, loops, conditionals, and variables to build your own interactive games!',

    learningOutcomesAr: [
      'أن يعرّف الطالب الخوارزمية (Algorithm) كخطوات منطقية متسلسلة لحل مشكلة محددة',
      'أن يرسم خرائط التدفق (Flowcharts) باستخدام الرموز القياسية (البداية/النهاية، الإدخال/الإخراج، العمليات، واتخاذ القرار)',
      'أن يتعرف على واجهة برنامج Scratch (المنصة Stage، منطقة الكائنات Sprites، لوحة اللبنات Blocks Palette، ومنطقة المقاطع البرمجية Scripts)',
      'أن يبرمج حركة الكائنات والأصوات وتغيير المظاهر (Costumes) والتفاعل مع الأحداث (Events)',
      'أن يطبق هياكل التكرار (Repeat / Forever) والشروط (If...Then) والمتغيرات (Variables) لإنشاء لعبة بسيطة'
    ],
    learningOutcomesEn: [
      'Define algorithms as ordered step-by-step procedural problem-solving logic',
      'Construct standard flowcharts using terminals, process rectangles, input parallelograms, and decision diamonds',
      'Navigate Scratch interface: Stage, Sprites, Blocks Palette, and Scripts Area',
      'Program sprite animations, audio cues, costume switching, and event listeners',
      'Implement loops (Repeat/Forever), conditional branching (If-Then), and variables in mini-games'
    ],

    vocabulary: [
      {
        termAr: 'الخوارزمية (Algorithm)',
        termEn: 'Algorithm',
        definitionAr: 'مجموعة من الخطوات المنطقية المرتبة ترتيباً متسلسلاً لحل مسألة أو إنجاز مهمة محددة (منسوبة للعالم المسلم الخوارزمي).',
        definitionEn: 'A sequence of logical, unambiguous instructions designed to solve a specific problem.'
      },
      {
        termAr: 'خريطة التدفق (Flowchart)',
        termEn: 'Flowchart',
        definitionAr: 'تمثيل تخطيطي ورسم بصري يوضح تسلسل خطوات الخوارزمية باستخدام أشكال هندسية قياسية متصلة بأسهم اتجاه.',
        definitionEn: 'A graphical diagram illustrating an algorithm sequence via standard geometric symbols.'
      },
      {
        termAr: 'الكائن (Sprite)',
        termEn: 'Sprite',
        definitionAr: 'الشخصية أو العنصر الرسومي في برنامج Scratch الذي يتحرك وينفذ الأوامر البرمجية على المنصة.',
        definitionEn: 'An interactive graphical character or object controlled by code scripts in Scratch.'
      },
      {
        termAr: 'اللبنة البرمجية (Code Block)',
        termEn: 'Code Block',
        definitionAr: 'كتلة رسومية ملونة تمثل أمراً برمجياً في سكراتش، تتركب مع غيرها كقطع البازل لبناء مقطع برمجيات كامل.',
        definitionEn: 'A color-coded visual command snapped together puzzle-style to form script routines.'
      }
    ],

    keyConceptsAr: [
      'رموز خريطة التدفق: بيضاوي (بداية/نهاية) | متوازي أضلاع (إدخال/إخراج) | مستطيل (عملية حسابية) | معين (اتخاذ قرار وشرط) | أسهم (خطوط اتجاه)',
      'مجموعات لبنات سكراتش: الحركة (Motion زرقة) | الهيئة (Looks بنفسجية) | الصوت (Sound زهرية) | الأحداث (Events صفراء) | التحكم (Control برتقالية)',
      'بدء البرنامج: لبنة "عند النقر على العلم الأخضر When Green Flag Clicked"',
      'التكرار: لبنة (repeat 10) للتكرار لعدد محدد | لبنة (forever) للتكرار اللانهائي المستمر',
      'الشرط: لبنة (if <شرط> then) لتنفيذ أوامر عند تحقق الشرط فقط'
    ],
    keyConceptsEn: [
      'Flowchart symbols: Oval (Terminal), Parallelogram (I/O), Rectangle (Process), Diamond (Decision)',
      'Scratch categories: Motion (Blue), Looks (Purple), Sound (Pink), Events (Yellow), Control (Orange)',
      'Trigger event: "When Green Flag Clicked"',
      'Iteration blocks: Repeat (n times) vs Forever (infinite loop)',
      'Conditionals: If <condition> Then branching blocks'
    ],
    summaryAr: 'بناء التفكير المنطقي والخوارزمي ورسم خرائط التدفق القياسية، والانطلاق في عالم البرمجة المرئية الشيقة ببرنامج Scratch لتصميم قصص تفاعلية وألعاب حاسوبية ذكية.',
    summaryEn: 'Build algorithmic problem-solving skills, diagram flowcharts, and create interactive animations and games using Scratch visual block programming.',

    sections: [
      {
        titleAr: '1. الخوارزميات وخرائط التدفق (Flowcharts) ورموزها القياسية',
        titleEn: '1. Algorithmic Thinking & Standard Flowchart Diagrams',
        contentAr: 'الخوارزمية (Algorithm) هي الترتيب المنطقي للخطوات اللازمة لحل أي مشكلة. ولتوضيح الخوارزمية بصرياً نستخدم خريطة التدفق (Flowchart). الأشكال الهندسية القياسية لخرائط التدفق: 1) الشكل البيضاوي (Oval): للبداية (Start) والنهاية (End). 2) متوازي الأضلاع (Parallelogram): لعمليات الإدخال (Input / Read) والإخراج (Output / Print). 3) المستطيل (Rectangle): للعمليات الحسابية والمعالجة (Process مثل الجمع والضرب). 4) المعين (Diamond): لاتخاذ القرار والمقارنات والشرط (Decision مثل: هل x > 0؟ ويخرج منه اتجاهان: نعم Yes ولا No). 5) خطوط الاتجاه (Flow lines): أسهم توضح مسار تنفيذ الخريطة.',
        contentEn: 'Algorithms outline logical step sequences. Flowcharts represent algorithms graphically using standard geometric symbols: Ovals for Terminals, Parallelograms for Input/Output, Rectangles for Processing, and Diamonds for Decision branching.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: رسم خريطة تدفق لجمع عددين وطباعة الناتج',
          titleEn: 'Worked Example 1: Constructing a Flowchart to Add Two Numbers',
          equation: 'البداية  -->  إدخال A و B  -->  حساب Sum = A + B  -->  طباعة Sum  -->  النهاية',
          steps: [
            {
              stepNumber: 1,
              textAr: '1) البداية (Start) في شكل بيضاوي.',
              textEn: '1) Start terminal in an oval symbol.',
              noteAr: 'بداية الخريطة'
            },
            {
              stepNumber: 2,
              textAr: '2) إدخال (اقرأ العددين A و B) في متوازي أضلاع.',
              textEn: '2) Input: "Read A and B" in a parallelogram.',
              noteAr: 'مدخلات'
            },
            {
              stepNumber: 3,
              textAr: '3) معالجة (احسب الناتج: Sum = A + B) في شكل مستطيل. ثم إخراج (اطبع Sum) في متوازي أضلاع. ثم (النهاية End) في شكل بيضاوي.',
              textEn: '3) Process: Sum = A + B in a rectangle -> Output: Print Sum in parallelogram -> End in oval.',
              noteAr: 'عملية حسابية وإخراج ونهاية'
            }
          ],
          takeawayAr: 'خرائط التدفق توضح فكرة البرنامج وتسهل كتابة الكود البرمجي واكتشاف الأخطاء المنطقية.',
          takeawayEn: 'Flowcharts clarify algorithmic logic and simplify subsequent coding implementation.'
        },
        formativeCheck: {
          id: 'fc-mcomp4-1',
          questionAr: 'في خرائط التدفق (Flowcharts)، يُستخدم الشكل "المعين" (Diamond) للتعبير عن:',
          questionEn: 'In flowcharts, the "Diamond" symbol represents:',
          optionsAr: ['اتخاذ القرار والشرط (Decision)', 'بداية أو نهاية الخريطة', 'إدخال البيانات وقراءتها', 'العمليات الحسابية المجردة'],
          optionsEn: ['Decision / Conditional branching', 'Start/End terminal', 'Input / Read operations', 'Arithmetic processing'],
          correctIndex: 0,
          explanationAr: 'شكل المعين مخصص للشروط واتخاذ القرارات التي يخرج منها تفرعان (نعم / لا).',
          explanationEn: 'The diamond symbol handles decision logic branching into Yes and No paths.',
          hintAr: 'المعين يُستخدم عند وجود سؤال أو مقارنة شرطية.'
        },
        tipsAr: [
          'يجب أن تبدأ خريطة التدفق برمز بيضاوي واحد للبداية (Start) وتنتهي برمز بيضاوي للنهاية (End).',
          'تسير خطوط الاتجاه في خريطة التدفق عادة من أعلى إلى أسفل أو من اليسار إلى اليمين.'
        ],
        tipsEn: [
          'Flowcharts must feature clear Start and End terminals.',
          'Flow lines generally progress from top to bottom or left to right.'
        ]
      },
      {
        titleAr: '2. بيئة برنامج Scratch والمنصة والكائنات والمظاهر',
        titleEn: '2. Scratch IDE Workspace: Stage, Sprites, Costumes & Blocks',
        contentAr: 'برنامج Scratch هو لغة برمجة مرئية رسومية صُممت لتعليم البرمجة بطريقة سهلة وممتعة. تتكون واجهة سكراتش من: 1) المنصة (Stage): المساحة البيضاء التي يُعرض عليها ناتج العمل وحركة الكائنات، وأبعادها (العرض 480 نقطة من x: -240 إلى +240، والارتفاع 360 نقطة من y: -180 إلى +180). 2) الكائن (Sprite): الشخصية الافتراضية هي القط (Cat). 3) منطقة المقاطع البرمجية (Scripts Area): المساحة التي نسحب إليها اللبنات لتركيب الأوامر. 4) لوحة اللبنات (Blocks Palette): تضم مجموعات اللبنات الملونة. 5) تبويب المظاهر (Costumes): لتغيير شكل وحركة الكائن لصنع رسوم متحركة (Animation).',
        contentEn: 'Scratch workspace comprises the Stage (480x360 coordinate plane), Sprites pane, Blocks Palette, Scripts coding area, and Costumes editor for crafting frame-by-frame animations.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: برمجة حركة قط سكراتش ليتحرك ويصدر صوتاً عند النقر على العلم الأخضر',
          titleEn: 'Worked Example 2: Programming Sprite Motion and Sound upon Event Click',
          equation: 'When Green Flag Clicked  -->  Move 10 steps  -->  Play Sound Meow',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نسحب لبنة الحدث "عند النقر على العلم الأخضر" من مجموعة الأحداث (Events الصفراء).',
              textEn: 'Step 1: Drag "When green flag clicked" from Events (Yellow).',
              noteAr: 'لبنة بدء التشغيل'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نركب تحتها لبنة "تحرك 10 خطوات move 10 steps" من مجموعة الحركة (Motion الزرقاء).',
              textEn: 'Step 2: Snap "move 10 steps" from Motion (Blue).',
              noteAr: 'أمر حركة'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نركب لبنة "شغل صوت المواء play sound Meow until done" من مجموعة الصوت (Sound). عند الضغط على العلم الأخضر يتحرك الكائن ويصدر صوته فوراً.',
              textEn: 'Step 3: Snap "play sound Meow until done". Press green flag to test.',
              noteAr: 'تنفيذ المقطع البرمجي بنجاح'
            }
          ],
          takeawayAr: 'تبدأ جميع المقاطع البرمجية التفاعلية في سكراتش بلبنة أحداث ذات قمة مقوسة (مثل النقر على العلم أو الضغط على مفتاح).',
          takeawayEn: 'All Scratch script routines initiate with curved-top Event trigger blocks.'
        },
        formativeCheck: {
          id: 'fc-mcomp4-2',
          questionAr: 'أبعاد منصة العرض (Stage) في برنامج Scratch هي:',
          questionEn: 'The coordinate dimensions of the Stage in Scratch are:',
          optionsAr: ['عرض 480 نقطة × ارتفاع 360 نقطة', 'عرض 800 نقطة × ارتفاع 600 نقطة', 'عرض 100 نقطة × ارتفاع 100 نقطة', 'عرض 1920 نقطة × ارتفاع 1080 نقطة'],
          optionsEn: ['Width 480 x Height 360 px', 'Width 800 x Height 600 px', 'Width 100 x Height 100 px', 'Width 1920 x Height 1080 px'],
          correctIndex: 0,
          explanationAr: 'أبعاد منصة سكراتش القياسية هي: محور x من -240 إلى +240 (العرض 480) ومحور y من -180 إلى +180 (الارتفاع 360).',
          explanationEn: 'Scratch Stage is a Cartesian grid measuring 480 px width by 360 px height.',
          hintAr: 'مركز المنصة هو النقطة (x: 0, y: 0) وعرضها 480 وارتفاعها 360.'
        },
        tipsAr: [
          'مركز المنصة تماماً هو نقطة الأصل (x: 0, y: 0).',
          'للتبديل بين مظاهر الكائن لصنع حركة واقعية للأقدام نستخدم لبنة (next costume).'
        ],
        tipsEn: [
          'Stage center is at coordinates (x: 0, y: 0).',
          'Use "next costume" inside a loop to simulate walking animation frames.'
        ]
      },
      {
        titleAr: '3. هياكل التحكم: التكرار (Loops) والشروط (Conditionals)',
        titleEn: '3. Control Structures: Iteration Loops & Conditional Branching',
        contentAr: 'هياكل التحكم تنظم مسار تنفيذ التعليمات البرمجية: 1) التكرار المحدد (repeat 10): يكرر اللبنات الموجودة بداخله لعدد محدد من المرات ثم يتوقف. 2) التكرار المستمر اللانهائي (forever): يكرر اللبنات بداخله بلا توقف حتى يتم إيقاف البرنامج بالزر الأحمر. 3) الشروط البسيطة (if <شرط> then): يتحقق من الشرط (مثل ملامسة حافة المنصة أو ملامسة كائن آخر) فإذا تحقق ينفذ ما بداخله. 4) الشروط المزدوجة (if...then...else): إذا تحقق الشرط ينفذ الأمر الأول، وإلا ينفذ الأمر البديل.',
        contentEn: 'Control structures manage execution flow: "repeat n" runs fixed iterations, "forever" loops continuously, and "if-then" / "if-then-else" conditionals execute branches based on Boolean sensing checks.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: برمجة كائن يتحرك باستمرار ويرتد إذا وصل لحافة الشاشة',
          titleEn: 'Worked Example 3: Programming Infinite Movement with Edge Bounce in Scratch',
          equation: 'forever [ move 10 steps , next costume , if on edge bounce , wait 0.1 secs ]',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نسحب لبنة التكرار المستمر (forever) ونضعها تحت لبنة (When green flag clicked).',
              textEn: 'Step 1: Place "forever" loop beneath "When green flag clicked".',
              noteAr: 'تكرار مستمر'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نضع داخل التكرار: لبنة (move 10 steps) ولبنة (next costume) ولبنة (wait 0.1 seconds) لضبط سرعة الحركة.',
              textEn: 'Step 2: Add "move 10 steps", "next costume", and "wait 0.1 secs" inside loop.',
              noteAr: 'حركة ورسوم متحركة'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نضيف لبنة "ارتد إذا كنت عند الحافة if on edge, bounce" من مجموعة الحركة حتى لا يخرج الكائن خارج الشاشة.',
              textEn: 'Step 3: Add "if on edge, bounce" from Motion blocks.',
              noteAr: 'الارتداد التلقائي'
            }
          ],
          takeawayAr: 'لبنة (if on edge, bounce) تضمن بقاء الكائن داخل حدود المنصة وتغير اتجاه حركته تلقائياً.',
          takeawayEn: '"If on edge, bounce" maintains sprites within visible Stage boundaries automatically.'
        },
        formativeCheck: {
          id: 'fc-mcomp4-3',
          questionAr: 'اللبنة البرمجية المسؤولة عن تكرار الأوامر بشكل مستمر لا نهائي دون توقف هي:',
          questionEn: 'The block executing instructions continuously in an infinite loop is:',
          optionsAr: ['لبنة (forever)', 'لبنة (repeat 10)', 'لبنة (if...then)', 'لبنة (wait 1 secs)'],
          optionsEn: ['forever block', 'repeat 10 block', 'if...then block', 'wait 1 secs block'],
          correctIndex: 0,
          explanationAr: 'لبنة forever تكرر الأوامر بداخلها بلا توقف حتى يضغط المستخدم على زر الإيقاف الأحمر.',
          explanationEn: '"forever" is the infinite loop control block in Scratch.',
          hintAr: 'forever تعني "للأبد / باستمرار".'
        },
        tipsAr: [
          'لجعل الكائن لا ينقلب رأساً على عقب عند الارتداد، نضبط نمط الدوران إلى (left-right) باستخدام لبنة (set rotation style left-right).',
          'لبنات التحسس (Sensing الفاتحة) تفحص ملامسة الفأرة أو الألوان أو الكائنات الأخرى.'
        ],
        tipsEn: [
          'Set rotation style to "left-right" to prevent inverted upside-down sprites on bounce.',
          'Sensing blocks detect collisions with colors, edges, or other sprites.'
        ]
      },
      {
        titleAr: '4. المتغيرات (Variables) وتطوير لعبة تفاعلية بسيطة',
        titleEn: '4. Variables, Operators & Building a Score-Tracking Interactive Game',
        contentAr: 'المتغير (Variable) هو مكان محجوز في ذاكرة الحاسوب لتخزين قيمة قابلة للتغيير أثناء تشغيل البرنامج (مثل نقاط اللاعب Score أو الوقت المتبقي Timer أو عدد المحاولات). لإنشاء متغير في سكراتش: 1) نذهب لمجموعة المتغيرات (Variables البرتقالية). 2) نضغط على (Make a Variable) ونسميه مثلاً "Score". 3) نستخدم لبنة (set Score to 0) لتصفير النقاط في بداية اللعبة. 4) نستخدم لبنة (change Score by 1) لزيادة النقاط كلما التقط الكائن هدفاً أو تفادى عقبة.',
        contentEn: 'Variables hold dynamic memory values such as Game Score or Timer. Create a variable via Variables category, initialize with "set Score to 0", and increment using "change Score by 1" upon collision events.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: برمجة نظام تسجيل النقاط (Score) في لعبة جمع التفاح',
          titleEn: 'Worked Example 4: Programming a Game Score System with Collision Events',
          equation: 'if <touching Apple?> then [ change Score by 1 , play sound Pop , go to random position ]',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: إنشاء متغير باسم "Score" وتعيين قيمته الابتدائية إلى صفر عند النقر على العلم الأخضر: (set Score to 0).',
              textEn: 'Step 1: Create variable "Score" and initialize: set Score to 0.',
              noteAr: 'تصفير النقاط'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: داخل حلقة التكرار المستمر (forever) نضيف شرط التحسس: (if <touching Apple?> then).',
              textEn: 'Step 2: Inside forever loop: if <touching Apple?> then.',
              noteAr: 'التحسس والملامسة'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: عند تحقق اللمس: نزيد النقاط بمقدار 1: (change Score by 1)، ونشغل صوت (play sound Pop)، وننقل التفاحة لمكان عشوائي (go to random position).',
              textEn: 'Step 3: Upon touch: change Score by 1, play sound Pop, and go to random position.',
              noteAr: 'زيادة النقاط وتكرار الهدف'
            }
          ],
          takeawayAr: 'المتغيرات هي العمود الفقري لأي لعبة تفاعلية لتتبع حالة اللاعب ومستواه ورصيد النقاط.',
          takeawayEn: 'Variables are essential in gaming to track scores, health, and player states dynamically.'
        },
        formativeCheck: {
          id: 'fc-mcomp4-4',
          questionAr: 'لزيادة رصيد نقاط اللاعب بمقدار نقطة واحدة في لعبة سكراتش، نستخدم اللبنة:',
          questionEn: 'To increment the player score by 1 point in Scratch, we use:',
          optionsAr: ['change Score by 1', 'set Score to 0', 'hide variable Score', 'show variable Score'],
          optionsEn: ['change Score by 1', 'set Score to 0', 'hide variable Score', 'show variable Score'],
          correctIndex: 0,
          explanationAr: 'لبنة change Score by 1 تضيف 1 إلى القيمة الحالية للمتغير، بينما set تضع قيمة ثابتة.',
          explanationEn: '"change Score by 1" increments the existing variable value.',
          hintAr: 'ابحث عن اللبنة التي تبدأ بكلمة change (غيّر بمقدار).'
        },
        tipsAr: [
          'لبنات العمليات (Operators الخضراء) تحتوي على المقارنات الرياضية (< ، > ، =) والعمليات (+ ، - ، × ، ÷).',
          'يمكن إضافة مؤقت تنازلي (Timer) للعبة باستخدام متغير وزر الانتظار (wait 1 sec).'
        ],
        tipsEn: [
          'Operators category contains math arithmetic (+, -, *, /) and comparison logic (<, >, =).',
          'Create countdown timers by decrementing a variable with 1-second delays.'
        ]
      }
    ],

    conceptMapAr: [
      'الخوارزميات: خطوات منطقية متسلسلة لحل مشكلة',
      'خرائط التدفق: بيضاوي (بداية/نهاية) + متوازي (إدخال/إخراج) + مستطيل (عملية) + معين (شرط)',
      'بيئة سكراتش: المنصة Stage (480x360) + الكائنات Sprites + المقاطع البرمجية Scripts',
      'هياكل التحكم: تكرار (repeat / forever) + شروط (if...then)',
      'المتغيرات: تخزين النقاط والوقت والتفاعل في الألعاب'
    ],
    conceptMapEn: [
      'Algorithms: Logical procedural solution steps',
      'Flowcharts: Standard geometric flowchart notation',
      'Scratch Workspace: Stage (480x360), Sprites, Code Blocks',
      'Control Logic: Loops (repeat/forever), Conditionals (if-then)',
      'Variables: Scoreboards, Timers & Game mechanics'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp4-1',
        questionAr: 'ارسم خريطة تدفق (Flowchart) لحساب متوسط ثلاثة أعداد A و B و C وطباعة الناتج Average.',
        questionEn: 'Draw a flowchart to compute the average of three numbers A, B, and C.',
        solutionStepsAr: [
          '1) شكل بيضاوي: بداية (Start).',
          '2) شكل متوازي أضلاع: إدخال الأعداد (Read A, B, C).',
          '3) شكل مستطيل: حساب المتوسط الحسابي بالقانون: Average = (A + B + C) / 3.',
          '4) شكل متوازي أضلاع: إخراج وطباعة النتيجة (Print Average).',
          '5) شكل بيضاوي: نهاية (End).'
        ],
        solutionStepsEn: [
          '1) Oval: Start.',
          '2) Parallelogram: Read A, B, C.',
          '3) Rectangle: Average = (A + B + C) / 3.',
          '4) Parallelogram: Print Average.',
          '5) Oval: End.'
        ],
        answerAr: 'Start (بيضاوي) → Read A, B, C (متوازي) → Average = (A+B+C)/3 (مستطيل) → Print Average (متوازي) → End (بيضاوي).',
        answerEn: 'Start (Oval) -> Read A,B,C (Parallelogram) -> Average=(A+B+C)/3 (Rect) -> Print (Parallelogram) -> End (Oval).'
      },
      {
        id: 'ex-mcomp4-2',
        questionAr: 'ما وظيفة كل لبنة من لبنات سكراتش الآتية؟ 1) When Green Flag Clicked  2) move 10 steps  3) next costume  4) if on edge, bounce',
        questionEn: 'State function of Scratch blocks: 1) When Green Flag Clicked 2) move 10 steps 3) next costume 4) if on edge bounce.',
        solutionStepsAr: [
          '1) When Green Flag Clicked: لبنة حدث لبدء تشغيل المقطع البرمجي عند الضغط على العلم الأخضر.',
          '2) move 10 steps: تحريك الكائن للأمام في اتجاهه الحالي بمقدار 10 خطوات (نقاط).',
          '3) next costume: التبديل إلى المظهر التالي للكائن لمحاكاة الرسوم المتحركة.',
          '4) if on edge, bounce: فحص موضع الكائن؛ إذا لمس حافة المنصة يرتد ويغير اتجاه حركته.'
        ],
        solutionStepsEn: [
          '1) When Green Flag Clicked: Starts script execution.',
          '2) move 10 steps: Moves sprite forward by 10 px.',
          '3) next costume: Cycles sprite costume for animation.',
          '4) if on edge bounce: Reverses direction when touching boundaries.'
        ],
        answerAr: '1) بدء التشغيل 2) حركة للأمام 10 نقاط 3) تبديل مظهر الكائن 4) الارتداد عند حواف الشاشة.',
        answerEn: '1) Execution trigger 2) 10px forward motion 3) Frame costume switch 4) Boundary bounce.'
      },
      {
        id: 'ex-mcomp4-3',
        questionAr: 'قارن بين لبنة التكرار (repeat 10) ولبنة التكرار (forever) في برنامج سكراتش.',
        questionEn: 'Compare "repeat 10" and "forever" blocks in Scratch.',
        solutionStepsAr: [
          '1) لبنة (repeat 10): تكرار محدد ينفذ اللبنات بداخله 10 مرات فقط ثم يخرج من الحلقة وينتقل للبنة التالية.',
          '2) لبنة (forever): تكرار لانهائي مستمر ينفذ اللبنات بداخله بلا توقف طوال فترة تشغيل اللعبة ولا يتوقف إلا بالزر الأحمر.'
        ],
        solutionStepsEn: [
          '1) repeat 10: Definite loop executing 10 times then stopping.',
          '2) forever: Infinite continuous loop running until program termination.'
        ],
        answerAr: 'repeat 10: تكرار بعدد محدد يتوقف بعده • forever: تكرار لانهائي مستمر طوال تشغيل البرنامج.',
        answerEn: 'repeat 10: Fixed count loop • forever: Unbounded continuous loop.'
      },
      {
        id: 'ex-mcomp4-4',
        questionAr: 'ما المقصود بـ "المتغير" (Variable) في البرمجة؟ واذكر مثالين لاستخدامه في لعبة حاسوبية.',
        questionEn: 'What is a Variable in programming? Give two examples in a game.',
        solutionStepsAr: [
          '1) المفهوم: المتغير هو مكان محجوز في ذاكرة الحاسوب باسم معين يُخزن قيمة عددية أو نصية قابلة للتغيير أثناء تشغيل البرنامج.',
          '2) أمثلة في الألعاب: أ) متغير النقاط (Score) لزيادة رصيد اللاعب كلما فاز بهدف. ب) متغير مؤقت الوقت (Timer) للعد التنازلي لزمن المرحلة.'
        ],
        solutionStepsEn: [
          '1) A variable is a named memory location storing dynamic data values.',
          '2) Game examples: Player Score counter, Level Countdown Timer.'
        ],
        answerAr: 'مكان بالذاكرة لتخزين قيمة متغيرة • أمثلة: رصيد النقاط (Score) ومؤقت الوقت (Timer).',
        answerEn: 'Named memory storage for dynamic values • Examples: Score counter and Timer.'
      }
    ],

    assessment: {
      id: 'quiz-m-comp-4',
      lectureId: 'm-comp-4',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 4: الخوارزميات والبرمجة ببرنامج Scratch',
      titleEn: 'Mastery Assessment 4: Algorithms, Flowcharts & Scratch Programming',
      passingScore: 80,
      questions: [
        {
          id: 'qc4-1',
          textAr: 'الخطوات المنطقية المرتبة ترتيباً متسلسلاً لحل مشكلة معينة تُسمى:',
          textEn: 'An ordered sequence of logical steps to solve a problem is called:',
          optionsAr: ['خوارزمية (Algorithm)', 'معالج (CPU)', 'ملف تنفيذي (.exe)', 'ذاكرة القراءة (ROM)'],
          optionsEn: ['Algorithm', 'CPU', 'Executable File', 'ROM'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف الخوارزمية',
          conceptTestedEn: 'Algorithm Definition',
          explanationAr: 'الخوارزمية هي مجموعة الخطوات المنطقية المتسلسلة لحل المشكلة.',
          explanationEn: 'An algorithm is a step-by-step procedural problem-solving logic.',
          difficulty: 'easy'
        },
        {
          id: 'qc4-2',
          textAr: 'في خرائط التدفق (Flowchart)، يُستخدم الشكل "متوازي الأضلاع" للتعبير عن:',
          textEn: 'In flowcharts, the "Parallelogram" symbol represents:',
          optionsAr: ['الإدخال والإخراج (Input / Output)', 'البداية والنهاية', 'اتخاذ القرار والشرط', 'خطوط الاتجاه'],
          optionsEn: ['Input / Output operations', 'Terminals', 'Decision condition', 'Flow lines'],
          correctIndex: 0,
          conceptTestedAr: 'رمز متوازي الأضلاع في خرائط التدفق',
          conceptTestedEn: 'Parallelogram Flowchart Symbol',
          explanationAr: 'متوازي الأضلاع مخصص لعمليات الإدخال (Read/Input) والإخراج (Print/Output).',
          explanationEn: 'Parallelograms represent data input and output operations.',
          difficulty: 'easy'
        },
        {
          id: 'qc4-3',
          textAr: 'نقطة الأصل ومركز منصة العرض (Stage) في برنامج سكراتش تكون عند الإحداثيات:',
          textEn: 'The center origin of the Scratch Stage is located at coordinates:',
          optionsAr: ['(x: 0, y: 0)', '(x: 240, y: 180)', '(x: 480, y: 360)', '(x: -240, y: -180)'],
          optionsEn: ['(x: 0, y: 0)', '(x: 240, y: 180)', '(x: 480, y: 360)', '(x: -240, y: -180)'],
          correctIndex: 0,
          conceptTestedAr: 'إحداثيات مركز منصة سكراتش',
          conceptTestedEn: 'Scratch Stage Coordinate Center',
          explanationAr: 'مركز المنصة في سكراتش هو النقطة (x: 0, y: 0).',
          explanationEn: 'The Stage center is Cartesian origin (0,0).',
          difficulty: 'easy'
        },
        {
          id: 'qc4-4',
          textAr: 'لتكرار حركة كائن 15 مرة فقط ثم التوقف، نستخدم لبنة:',
          textEn: 'To execute a sprite motion exactly 15 times then stop, use block:',
          optionsAr: ['repeat 15', 'forever', 'if on edge, bounce', 'when green flag clicked'],
          optionsEn: ['repeat 15', 'forever', 'if on edge, bounce', 'when green flag clicked'],
          correctIndex: 0,
          conceptTestedAr: 'التكرار المحدد repeat',
          conceptTestedEn: 'Definite Loop block',
          explanationAr: 'لبنة repeat 15 تكرر الأوامر بداخلها 15 مرة ثم تخرج وتتوقف.',
          explanationEn: '"repeat 15" iterates exactly 15 times.',
          difficulty: 'medium'
        },
        {
          id: 'qc4-5',
          textAr: 'المكان المحجوز في ذاكرة الحاسوب لتخزين قيمة قابلة للتغيير (مثل نقاط اللعبة Score) يسمى:',
          textEn: 'A named memory container storing a dynamic value like score is called a:',
          optionsAr: ['متغير (Variable)', 'كائن (Sprite)', 'مظهر (Costume)', 'منصة (Stage)'],
          optionsEn: ['Variable', 'Sprite', 'Costume', 'Stage'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم المتغيرات في البرمجة',
          conceptTestedEn: 'Programming Variable Concept',
          explanationAr: 'المتغير هو مساحة بالذاكرة باسم محدد لتخزين قيمة ديناميكية تتغير أثناء اللعب.',
          explanationEn: 'A variable holds mutable data during program execution.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: MULTIMEDIA & IMAGE PROCESSING WITH GIMP ──
  {
    id: 'm-comp-5',
    order: 5,
    titleAr: 'المحاضرة 5: معالجة الصور والوسائط المتعددة والإنتاج الرقمي ببرنامج GIMP',
    titleEn: 'Lecture 5: Multimedia & Digital Image Processing using GIMP Open Source',
    subtitleAr: 'الفرق بين الصور النقطية (Raster) والمتجهة (Vector)، واجهة برنامج GIMP وأدوات التحديد، والطبقات (Layers) والتأثيرات وصيغ التصدير (.jpg, .png, .gif, .xcf)',
    subtitleEn: 'Master Raster vs Vector graphics, GIMP workspace & selection tools, layer management, color correction, opacity, filters, and export formats (.jpg, .png, .xcf).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-comp-4',
    prerequisiteTitleAr: 'المحاضرة 4: التفكير الخوارزمي وخرائط التدفق والبرمجة بـ Scratch',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School ICT & Computer Science',
    termAr: 'الفصل الدراسي الأول والثاني',
    termEn: 'Term 1 & Term 2 Official ICT Curriculum',
    unitTitleAr: 'الوحدة الخامسة: معالجة الصور الرقمية وتصميم الجرافيك (Image Editing with GIMP)',
    unitTitleEn: 'Unit 5: Digital Graphics, Layers & Image Editing in GIMP',
    lessonNumberAr: 'الدرس 5: برنامج GIMP وتعديل الصور والطبقات والتصدير',
    lessonNumberEn: 'Lesson 5: GIMP Tools, Layer Composition & Digital Export',

    warmupHookAr: 'هل لاحظت من قبل أنه عند تكبير بعض الصور تصبح مشوشة وتظهر مربعات صغيرة (Pixels)، بينما شعارات الشركات والخطوط تظل حادة وواضحة مهما قمت بتكبيرها؟ ما الفرق بين الصور النقطية والصور المتجهة؟ وكيف يستخدم المصممون المحترفون برنامج GIMP مفتوح المصدر لقص الصور وإضافة التأثيرات الساحرة والطبقات (Layers) لإنتاج تصاميم مذهلة؟',
    warmupHookEn: 'Why do zooming raster photos pixelate into squares while vector logos stay infinitely crisp? Dive into GIMP (GNU Image Manipulation Program), master selection tools, multi-layer compositing, color correction filters, and digital export formats (.png, .jpg, .xcf)!',

    learningOutcomesAr: [
      'أن يفرّق الطالب بين الصور النقطية (Raster/Bitmap المكونة من Pixels وتتأثر بالتكبير) والصور المتجهة (Vector المكونة من معادلات ولا تتأثر بالتكبير)',
      'أن يتعرف على واجهة برنامج GIMP (صندوق الأدوات Toolbox، نافذة الصورة Image Window، ولوحة الطبقات Layers)',
      'أن يتقن استخدام أدوات التحديد: المستطيل (Rectangle)، البيضاوي (Ellipse)، الحر (Lasso)، والعصا السحرية (Fuzzy Select)',
      'أن يشرح مفهوم الطبقات (Layers) وكيفية ترتيبها وتغيير شفافيتها (Opacity) وإضافة طبقات جديدة',
      'أن يفرّق بين حفظ المشروع بصيغة المصدر (.xcf) لتعديله لاحقاً، وتصديره بصيغ الصور النهائية (.jpg, .png, .gif)'
    ],
    learningOutcomesEn: [
      'Contrast Raster bitmap graphics (pixel-based, resolution dependent) with Vector graphics (mathematical curves, resolution independent)',
      'Navigate GIMP workspace: Toolbox, Canvas, Tool Options, and Layers dialog',
      'Utilize selection tools: Rectangle, Ellipse, Free Select Lasso, and Fuzzy Wand Select',
      'Manage multi-layer compositions: Layer hierarchy, visibility, and opacity blend modes',
      'Differentiate native project files (.xcf) from final exported distribution formats (.jpg, .png, .gif)'
    ],

    vocabulary: [
      {
        termAr: 'البكسل (Pixel)',
        termEn: 'Pixel',
        definitionAr: 'أصغر وحدة بنائية مجهرية في الصورة الرقمية النقطية وتحمل قيمة لونية واحدة.',
        definitionEn: 'The smallest addressable picture element in a raster digital image.'
      },
      {
        termAr: 'الصور النقطية (Raster / Bitmap)',
        termEn: 'Raster / Bitmap Images',
        definitionAr: 'صور مكونة من شبكة من البكسلات الملونة، وتتميز بتدرج ألوان غني ولكن تفقد وضوحها وتشوش (Pixelate) عند التكبير (مثل صور الكاميرات والموبايل .jpg).',
        definitionEn: 'Grid of colored pixels; rich in photographic detail but degrades when scaled up.'
      },
      {
        termAr: 'الصور المتجهة (Vector Graphics)',
        termEn: 'Vector Graphics',
        definitionAr: 'صور مبنية على معادلات ومنحنيات رياضية هندسية، وتتميز بحجم ملف صغير وثبات جودتها ونقائها مهما تم تكبيرها أو تصغيرها (مثل الشعارات والخطوط .svg).',
        definitionEn: 'Graphics defined by mathematical formulas; infinitely scalable without quality loss.'
      },
      {
        termAr: 'الطبقات (Layers)',
        termEn: 'Layers',
        definitionAr: 'شرائح شفافة فوق بعضها في برنامج التصميم، يتيح كل منها تعديل جزء من الصورة (مثل نص أو خلفية) بشكل مستقل دون التأثير على باقي الأجزاء.',
        definitionEn: 'Stacked transparent sheets enabling isolated editing of distinct design components.'
      }
    ],

    keyConceptsAr: [
      'الصور النقطية (Raster) vs المتجهة (Vector): النقطية للبكسل والصور الفوتوغرافية | المتجهة للشعارات ثنائية وثلاثية الأبعاد',
      'أدوات التحديد في GIMP: التحديد الحر (Lasso) للمساحات غير المنتظمة | العصا السحرية (Fuzzy) للمساحات ذات اللون الموحد',
      'صيغة ملف مشروع GIMP: .xcf (تحتفظ بالطبقات ومراحل العمل وتفتح في GIMP فقط)',
      'صيغ التصدير: .png تدعم الخلفيات الشفافة | .jpg جودة عالية وحجم ملف صغير | .gif تدعم الرسوم المتحركة',
      'أدوات التحويل (Transform Tools): التحجيم (Scale)، التدوير (Rotate)، والانعكاس (Flip)'
    ],
    keyConceptsEn: [
      'Raster (Pixel grid, photographic) vs Vector (Geometric math, scalable logos)',
      'GIMP Selection: Lasso (Freeform), Fuzzy Wand (Color threshold matching)',
      'GIMP native project format: .xcf (preserves layer stack and edit history)',
      'Export formats: PNG (Transparency), JPG (Compressed photos), GIF (Animation)',
      'Transform Tools: Scale, Rotate, Flip, and Crop'
    ],
    summaryAr: 'إتقان فنون الجرافيك والوسائط الرقمية: التمييز بين الصور النقطية والمتجهة، واستخدام أدوات التحديد والتحويل في GIMP، والتعامل الاحترافي مع الطبقات (Layers) وتصدير التصاميم بصيغ .png و .jpg و .xcf.',
    summaryEn: 'Master digital graphic design: Raster vs Vector theory, GIMP selection & transform tools, non-destructive layer compositing, and multi-format exports (.png, .jpg, .xcf).',

    sections: [
      {
        titleAr: '1. أنواع الصور الرقمية (الصور النقطية Raster vs الصور المتجهة Vector)',
        titleEn: '1. Digital Graphics Theory: Raster Bitmaps vs Vector Curves',
        contentAr: 'تنقسم الصور الرقمية إلى نوعين رئيسيين: 1) الصور النقطية (Raster / Bitmap): تتكون من شبكة من النقاط الملونة تسمى البكسلات (Pixels). دقتها تعتمد على عدد البكسلات في البوصة (Resolution). من أهم مميزاتها: تمثيل الألوان الواقعية والظلال في الصور الفوتوغرافية الملتقطة بالكاميرات، ولكن عيبها أنها تفقد جودتها وتشوش وتظهر الحواف الخشنة (Pixelated) عند تكبيرها. أشهر صيغها: .jpg و .png و .bmp. 2) الصور المتجهة (Vector): مبنية على خطوط ومنحنيات ومعادلات رياضية. من مميزاتها: لا تفقد جودتها إطلاقاً وتبقى حادة جداً مهما قمت بتكبيرها وحجم ملفها صغير، وتستخدم في تصميم الشعارات (Logos) والرموز والخطوط. أشهر صيغها: .svg و .ai.',
        contentEn: 'Digital graphics divide into Raster Bitmaps (pixel arrays, photo-realistic but resolution-dependent) and Vector Graphics (mathematical vectors, resolution-independent scalability for logos and icons).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: مقارنة سلوك تكبير صورة نقطية مقابل شعار متجه 10 أضعاف',
          titleEn: 'Worked Example 1: 10x Zoom Comparison: Raster Photo vs Vector Logo',
          equation: 'Raster (بكسلات مربعة تتشوه) vs Vector (معادلات تظل حادة تماماً)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'تكبير الصورة النقطية (Raster .jpg) بمقدار 10x: تكبر مربعات البكسل وتصبح الصورة ضبابية ومكسرة وتفقد التفاصيل الدقيقة.',
              textEn: 'Raster 10x Zoom: Pixels enlarge into visible square blocks, blurring fine details.',
              noteAr: 'تشوه الصورة النقطية'
            },
            {
              stepNumber: 2,
              textAr: 'تكبير الشعار المتجه (Vector .svg) بمقدار 10x: يقوم الحاسوب بإعادة حساب المعادلات الرياضية للمنحنيات فوراً فتظل الخطوط فائقة النعومة والحواف نقية 100%.',
              textEn: 'Vector 10x Zoom: Curves recompute dynamically, retaining razor-sharp precision.',
              noteAr: 'نقاء وثبات الصور المتجهة'
            },
            {
              stepNumber: 3,
              textAr: 'الاستخدام: الصور النقطية تناسب صور الأشخاص والطبيعة، بينما الصور المتجهة تناسب شعارات الشركات واللافتات الإعلانية الضخمة.',
              textEn: 'Application: Raster for photography; Vector for branding, logos, and billboards.',
              noteAr: 'مجال الاستخدام الأمثل'
            }
          ],
          takeawayAr: 'صمم الشعارات دائماً بالصور المتجهة (Vector) لتتمكن من طباعتها على كارت صغير أو لافتة عملاقة بنفس الجودة.',
          takeawayEn: 'Always design brand logos in Vector formats for seamless scaling from business cards to billboards.'
        },
        formativeCheck: {
          id: 'fc-mcomp5-1',
          questionAr: 'الصور التي تتميز بأنها لا تفقد جودتها ونقائها إطلاقاً مهما تم تكبيرها هي:',
          questionEn: 'Graphics that retain 100% sharp quality and never pixelate upon zoom are:',
          optionsAr: ['الصور المتجهة (Vector Graphics)', 'الصور النقطية (Raster Images)', 'الصور المتحركة (GIF)', 'ملفات الفيديو (MP4)'],
          optionsEn: ['Vector Graphics', 'Raster Bitmap Images', 'Animated GIF', 'Video files'],
          correctIndex: 0,
          explanationAr: 'الصور المتجهة Vector مبنية على معادلات رياضية فلا تتأثر بالتكبير أو التصغير.',
          explanationEn: 'Vector graphics scale infinitely without resolution loss due to mathematical curves.',
          hintAr: 'ابحث عن الصور "المتجهة".'
        },
        tipsAr: [
          'دقة الصورة (Image Resolution) تقاس بعدد البكسل في البوصة (PPI أو DPI).',
          'كلما زادت أبعاد الصورة بالبكسل (مثل 4000x3000)، زاد وضوحها وكبر حجم ملفها في الذاكرة.'
        ],
        tipsEn: [
          'Resolution is measured in Pixels Per Inch (PPI/DPI).',
          'Higher pixel counts enhance visual clarity at the expense of larger file sizes.'
        ]
      },
      {
        titleAr: '2. واجهة برنامج GIMP وأدوات التحديد والتحويل',
        titleEn: '2. GIMP Workspace Layout, Selection Tools & Transform Controls',
        contentAr: 'برنامج GIMP (GNU Image Manipulation Program) هو برنامج مجاني ومفتوح المصدر لمعالجة وتعديل الصور. واجهة البرنامج تحتوي على: 1) صندوق الأدوات (Toolbox): يضم أدوات التحديد، الرسم، والتعديل. 2) نافذة الصورة (Image Window): مساحة العمل وعرض الصورة. 3) خيارات الأداة (Tool Options): تظهر أسفل الصندوق لضبط حجم وخصائص الأداة المختارة. 4) لوحة الطبقات (Layers Dialog). أدوات التحديد الأساسية: • Rectangle Select: لتحديد مساحة مستطيلة. • Ellipse Select: لتحديد مساحة بيضاوية أو دائرية. • Free Select (Lasso): للتحديد الحر باليد للمساحات المتعرجة. • Fuzzy Select (Magic Wand): لتحديد مساحات متجاورة لها نفس درجة اللون بنقرة واحدة.',
        contentEn: 'GIMP workspace features the Toolbox, Image Canvas, Tool Options, and Layers pane. Selection suite includes Rectangle, Ellipse, Freehand Lasso, and Fuzzy Color Wand selectors.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: قص خلفية بيضاء من صورة منتج باستخدام أداة العصا السحرية (Fuzzy Select)',
          titleEn: 'Worked Example 2: Isolating Product Background via Fuzzy Wand Selection',
          equation: 'Fuzzy Select (نقر على الخلفية البيضاء)  -->  Delete  -->  خلفية شفافة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نختار أداة التحديد الضبابي (Fuzzy Select Tool) من صندوق الأدوات.',
              textEn: 'Step 1: Select Fuzzy Select (Magic Wand) tool in Toolbox.',
              noteAr: 'أداة التحديد اللوني'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: ننقر نقرة واحدة فوق الخلفية البيضاء المتجانسة، فيقوم البرنامج بتحديد كل المساحة البيضاء تلقائياً بخطوط متحركة متقطعة.',
              textEn: 'Step 2: Single click on solid white background to select contiguous color region.',
              noteAr: 'تحديد المساحة اللونية'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نضغط على مفتاح Delete من لوحة المفاتيح؛ تُحذف الخلفية البيضاء وتتحول إلى خلفية شفافة تظهر على شكل مربعات رمادية وبيضاء.',
              textEn: 'Step 3: Press Delete key to remove background and reveal transparent alpha checkerboard.',
              noteAr: 'عزل المنتج بنجاح'
            }
          ],
          takeawayAr: 'أداة Fuzzy Select هي أسرع وسيلة لعزل وتفريغ الكائنات من الصور ذات الخلفيات اللونية الموحدة.',
          takeawayEn: 'Fuzzy Wand selection is the fastest method to isolate subjects against uniform backgrounds.'
        },
        formativeCheck: {
          id: 'fc-mcomp5-2',
          questionAr: 'أداة التحديد في برنامج GIMP المناسبة لتحديد مساحة حرة غير منتظمة باليد هي:',
          questionEn: 'The GIMP selection tool for tracing freehand irregular contours is:',
          optionsAr: ['أداة التحديد الحر (Free Select / Lasso)', 'أداة التحديد المستطيل (Rectangle)', 'أداة التحجيم (Scale)', 'أداة دلو الطلاء (Bucket Fill)'],
          optionsEn: ['Free Select (Lasso) Tool', 'Rectangle Select', 'Scale Tool', 'Bucket Fill Tool'],
          correctIndex: 0,
          explanationAr: 'أداة Free Select (حبل اللاسو) تتيح للمستخدم رسم خط التحديد الحر بالماوس حول أي شكل غير منتظم.',
          explanationEn: 'Free Select (Lasso) allows manual freehand tracing of irregular shapes.',
          hintAr: 'Lasso هي أداة التحديد الحر باليد.'
        },
        tipsAr: [
          'لإلغاء التحديد في أي وقت في برنامج GIMP: اضغط على القائمة (Select ← None) أو اختصار (Ctrl + Shift + A).',
          'أداة التحجيم (Scale Tool) تكبر وتصغر الصورة أو الطبقة مع الحفاظ على نسبة الطول إلى العرض.'
        ],
        tipsEn: [
          'Clear active selection in GIMP via Select -> None (Ctrl+Shift+A).',
          'Scale tool resizes images and layers proportionally.'
        ]
      },
      {
        titleAr: '3. التعامل مع الطبقات (Layers) وتعديل الشفافية والترتيب',
        titleEn: '3. Layer Stacking, Visibility, Opacity & Non-Destructive Editing',
        contentAr: 'الطبقات (Layers) هي أهم مفهوم في برامج الجرافيك والتصميم. يمكنك تخيل الطبقات على أنها ألواح زجاجية شفافة متراصة فوق بعضها: الطبقة العليا تحجب ما تحتها، والمساحات الشفافة في الطبقة تظهر ما تحتها. أهم مهارات الطبقات: 1) إضافة طبقة جديدة (New Layer). 2) ترتيب الطبقات: رفع طبقة لأعلى أو إنزالها لأسفل يغير ترتيب ظهور العناصر. 3) التحكم في الشفافية (Opacity): بقيمة من 0% (شفافة تماماً غير مرئية) إلى 100% (معتمة تماماً). 4) إظهار وإخفاء الطبقة: بالنقر على أيقونة العين (Eye icon) بجانب اسم الطبقة.',
        contentEn: 'Layers behave like stacked transparent sheets. Top layers obscure lower layers, transparent sections reveal bottom layers. Master layer creation, stacking order, eye-icon visibility, and opacity blend percentages (0-100%).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: تصميم غلاف مجلة مدرسية باستخدام 3 طبقات منفصلة في GIMP',
          titleEn: 'Worked Example 3: Designing a School Magazine Cover with 3-Layer Stack',
          equation: 'الطبقة 3 (النص والعنوان)  -->  الطبقة 2 (صورة الطالب مفرغة)  -->  الطبقة 1 (الخلفية الملونة)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الطبقة 1 (في الأسفل): طبقة الخلفية (Background) بلون متدرج أزرق داكن.',
              textEn: 'Layer 1 (Bottom): Solid background with blue gradient.',
              noteAr: 'طبقة الخلفية'
            },
            {
              stepNumber: 2,
              textAr: 'الطبقة 2 (في المنتصف): صورة طالب مبتسم معزولة بدون خلفية وشفافيتها 100%.',
              textEn: 'Layer 2 (Middle): Cutout student photo with transparent alpha.',
              noteAr: 'طبقة العنصر الأساسي'
            },
            {
              stepNumber: 3,
              textAr: 'الطبقة 3 (في الأعلى): طبقة نصية مكتوب عليها "مجلة المبتكر الصغير 2026". يمكن تحريك وتعديل النص دون التأثير على صورة الطالب أو الخلفية!',
              textEn: 'Layer 3 (Top): Text headline. Text can be edited independently without altering underlying layers.',
              noteAr: 'طبقة النص المستقلة'
            }
          ],
          takeawayAr: 'استخدام الطبقات يتيح لك تعديل أي جزء في التصميم بحرية تامة دون إتلاف باقي أجزاء الصورة.',
          takeawayEn: 'Layers enable non-destructive editing: modify one element without damaging others.'
        },
        formativeCheck: {
          id: 'fc-mcomp5-3',
          questionAr: 'في لوحة الطبقات (Layers) ببرنامج GIMP، النقر على "أيقونة العين" المجاورة للطبقة يقوم بـ:',
          questionEn: 'In GIMP Layers dialog, clicking the "Eye Icon" next to a layer toggles:',
          optionsAr: ['إظهار أو إخفاء الطبقة على مساحة العمل', 'حذف الطبقة نهائياً', 'تصدير الطبقة كصورة', 'تغيير حجم أبعاد الطبقة'],
          optionsEn: ['Layer Visibility (Show / Hide)', 'Permanent Layer Deletion', 'Exporting single layer', 'Resizing layer bounds'],
          correctIndex: 0,
          explanationAr: 'أيقونة العين تتحكم في رؤية وظهور الطبقة؛ إخفاؤها يجعلها غير مرئية دون حذفها.',
          explanationEn: 'The eye icon toggles layer visibility on canvas without deleting content.',
          hintAr: 'العين ترمز للرؤية والإظهار.'
        },
        tipsAr: [
          'لدمج طبقتين معاً في طبقة واحدة: انقر بالزر الأيمن على الطبقة العليا واختر (Merge Down).',
          'طبقات النصوص في GIMP تظل قابلة لتعديل الخط والحجم واللون ما لم يتم دمجها مع طبقة عادية.'
        ],
        tipsEn: [
          'Merge Down fuses an active layer with the layer directly beneath it.',
          'Text layers remain vector-editable until flattened into raster layers.'
        ]
      },
      {
        titleAr: '4. حفظ وتصدير الصور ومقارنة صيغ الملفات (.xcf, .png, .jpg, .gif)',
        titleEn: '4. Project Saving vs Image Exporting: File Format Comparison',
        contentAr: 'في برنامج GIMP توجد عمليتان مختلفتان تماماً للتعامل مع حفظ الملفات: 1) الحفظ (Save): عبر قائمة (File ← Save) ويحفظ العمل بصيغة (.xcf). هذه الصيغة خاصة ببرنامج GIMP وتحتفظ بجميع الطبقات والتحديدات ومراحل العمل لإكمال التعديل عليها لاحقاً، ولا يمكن فتحها كصورة عادية في البرامج الأخرى. 2) التصدير (Export): عبر قائمة (File ← Export As) لتحويل التصميم إلى صورة نهائية قابلة للمشاركة والطباعة. مقارنة صيغ التصدير: • .png: تدعم الخلفيات الشفافة (Transparency) وتتميز بجودة فائقة. • .jpg: جودة جيدة وحجم ملف صغير ومناسبة للصور الفوتوغرافية ومواقع الإنترنت (لا تدعم الشفافية). • .gif: تدعم الرسوم المتحركة البسيطة والشفافية وتستخدم 256 لوناً.',
        contentEn: 'GIMP distinguishes native Project Saving (.xcf: multi-layer editable archive) from Final Image Exporting (.png: transparency support, .jpg: compressed photos, .gif: lightweight animations).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: اختيار الصيغة المناسبة لتصميم شعار موقع مقابل صورة فوتوغرافية',
          titleEn: 'Worked Example 4: Selecting Optimal Export Formats for Real-World Scenarios',
          equation: 'مشروع للتعديل (.xcf) | شعار شفاف (.png) | صورة طبيعية (.jpg) | رسم متحرك (.gif)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'السيناريو 1: تصميم شعار مفرغ لوضعه فوق فيديوهات يوتيوب بدون خلفية بيضاء ← نصدره بصيغة (.png) لأنها تدعم الشفافية.',
              textEn: 'Scenario 1: Transparent logo for video overlay -> Export as .png.',
              noteAr: 'صيغة PNG للشفافية'
            },
            {
              stepNumber: 2,
              textAr: 'السيناريو 2: صورة رحلة مدرسية تحتوي على ملايين الألوان ونريد رفعها على موقع المدرسة بسرعة ← نصدرها بصيغة (.jpg) لصغر حجمها.',
              textEn: 'Scenario 2: School trip photo album -> Export as .jpg for compact size.',
              noteAr: 'صيغة JPG للصور الطبيعية'
            },
            {
              stepNumber: 3,
              textAr: 'السيناريو 3: حفظ التصميم بالطبقات لإكمال العمل غداً في حصة الحاسب ← نحفظه بصيغة (.xcf) من قائمة Save.',
              textEn: 'Scenario 3: Save multi-layer project for tomorrow edit session -> Save as .xcf.',
              noteAr: 'صيغة XCF لمشروع GIMP'
            }
          ],
          takeawayAr: 'احفظ دائماً نسخة .xcf للتعديل المستقبلي، ثم صدّر نسخة .png أو .jpg للنشر والمشاركة.',
          takeawayEn: 'Always retain a master .xcf editable project alongside exported distribution formats.'
        },
        formativeCheck: {
          id: 'fc-mcomp5-4',
          questionAr: 'الامتداد الافتراضي لحفظ ملفات مشروع برنامج GIMP مع الاحتفاظ بجميع الطبقات هو:',
          questionEn: 'The native default file extension for GIMP projects retaining full layer stack is:',
          optionsAr: ['.xcf', '.jpg', '.mp4', '.docx'],
          optionsEn: ['.xcf', '.jpg', '.mp4', '.docx'],
          correctIndex: 0,
          explanationAr: '.xcf هو الامتداد الرسمي لمشاريع GIMP الذي يحتفظ بجميع الطبقات والتأثيرات للتعديل المستقبلي.',
          explanationEn: '.xcf is GIMP native file format preserving all project layer metadata.',
          hintAr: 'ابحث عن الامتداد المكون من الحروف الثلاثة xcf.'
        },
        tipsAr: [
          'صيغة JPG تحول أي خلفية شفافة إلى لون أبيض تلقائياً، لذا استخدم PNG إذا كنت بحاجة لشفافية.',
          'يمكن تقليل حجم صورة JPG أثناء التصدير بضبط شريط الجودة (Quality) بين 80% و 90% دون فقدان ملحوظ في الوضوح.'
        ],
        tipsEn: [
          'JPG replaces transparent regions with white; use PNG to preserve alpha transparency.',
          'Exporting JPG at 85% quality maintains high fidelity with dramatically lower file sizes.'
        ]
      }
    ],

    conceptMapAr: [
      'أنواع الصور: نقطية Raster (بكسل، تتشوه بالتكبير) vs متجهة Vector (معادلات، نقية دائماً)',
      'برنامج GIMP: مفتوح المصدر لمعالجة الصور وتصميم الجرافيك',
      'أدوات التحديد: المستطيل، البيضاوي، اللاسو الحر، والعصا السحرية Fuzzy Select',
      'الطبقات Layers: شرائح شفافة تتيح التعديل الحر المستقل وترتيب العناصر والشفافية Opacity',
      'حفظ وتصدير: .xcf (مشروع GIMP بالطبقات) | .png (شفافية) | .jpg (مضغوط) | .gif (متحرك)'
    ],
    conceptMapEn: [
      'Image Types: Raster (Pixels) vs Vector (Mathematical curves)',
      'GIMP: Free open-source photo editing software',
      'Selection Tools: Rectangle, Ellipse, Freehand Lasso, Fuzzy Wand',
      'Layers: Non-destructive transparent stacking with opacity controls',
      'File Formats: .xcf (GIMP project), .png (Transparency), .jpg (Photos), .gif (Animation)'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp5-1',
        questionAr: 'قارن بين الصور النقطية (Raster) والصور المتجهة (Vector) من حيث: التكوين، التأثر بالتكبير، وصيغتين شائعتين لكل منهما.',
        questionEn: 'Compare Raster and Vector graphics in terms of composition, scaling behavior, and two common formats.',
        solutionStepsAr: [
          '1) الصور النقطية (Raster): تتكون من شبكة من النقاط الملونة (Pixels). تتأثر بالتكبير وتشوش وتفقد وضوحها (Pixelated). من صيغها: .jpg و .png.',
          '2) الصور المتجهة (Vector): تتكون من خطوط ومنحنيات مبنية على معادلات رياضية. لا تتأثر بالتكبير إطلاقاً وتبقى حادة ونقية بأي مقاس. من صيغها: .svg و .ai.'
        ],
        solutionStepsEn: [
          '1) Raster: Composed of pixel grids, loses quality on zoom (pixelates). Formats: .jpg, .png.',
          '2) Vector: Composed of mathematical curves, infinitely scalable without quality loss. Formats: .svg, .ai.'
        ],
        answerAr: 'Raster: بكسل يتشوه بالتكبير (.jpg, .png) • Vector: معادلات لا تفقد نقاءها إطلاقاً (.svg, .ai).',
        answerEn: 'Raster: Pixel grid, pixelates on zoom (.jpg) • Vector: Math curves, scalable (.svg).'
      },
      {
        id: 'ex-mcomp5-2',
        questionAr: 'ما الفرق بين أمر "حفظ الصورة Save" وأمر "تصدير الصورة Export As" في برنامج GIMP؟',
        questionEn: 'What is the difference between "Save" and "Export As" in GIMP?',
        solutionStepsAr: [
          '1) أمر Save (حفظ): يحفظ ملف العمل بصيغة مشروع GIMP الافتراضية (.xcf) محتفظاً بكافة الطبقات والأدوات والتعديلات للعودة إليها مستقبلاً ولا يمكن استخدامها كصورة عادية.',
          '2) أمر Export As (تصدير): يحول العمل ويدمجه في صورة نهائية بصيغ قياسية مثل (.png أو .jpg أو .gif) لنشرها ومشاركتها واستخدامها في البرامج والمواقع الأخرى.'
        ],
        solutionStepsEn: [
          '1) Save: Saves native editable multi-layer project (.xcf).',
          '2) Export As: Renders flattened final image (.png, .jpg, .gif) for distribution.'
        ],
        answerAr: 'Save يحفظ مشروع للتعديل بالطبقات (.xcf) • Export As يصدر صورة نهائية للمشاركة (.jpg, .png).',
        answerEn: 'Save creates .xcf multi-layer project • Export As produces final .jpg/.png images.'
      },
      {
        id: 'ex-mcomp5-3',
        questionAr: 'اشرح أهمية استخدام "الطبقات" (Layers) في برامج تصميم ومعالجة الصور.',
        questionEn: 'Explain the importance of using Layers in image editing software.',
        solutionStepsAr: [
          '1) التعديل غير الهدام: تمكين المصمم من تعديل أو تحريك أو مسح أو تطبيق فلاتر على عنصر واحد (مثل كتابة نص أو تعديل وجه) دون إتلاف الخلفية أو باقي العناصر.',
          '2) التحكم في الترتيب: إعادة ترتيب ظهور العناصر بتقديم طبقة للأمام أو تأخيرها للخلف بسهولة.',
          '3) الشفافية والتأثيرات: ضبط شفافية (Opacity) كل طبقة على حدة لصنع تركيبات بصرية مذهلة ومحترفة.'
        ],
        solutionStepsEn: [
          '1) Non-destructive isolated editing of individual design elements.',
          '2) Flexible reordering of visual components.',
          '3) Independent control over transparency (opacity) and blending effects.'
        ],
        answerAr: 'تتيح تعديل وتحريك كل عنصر في التصميم بشكل مستقل دون إتلاف باقي أجزاء الصورة.',
        answerEn: 'Enables independent non-destructive editing of design elements.'
      },
      {
        id: 'ex-mcomp5-4',
        questionAr: 'حدد الصيغة المناسبة (.png أو .jpg أو .gif) لكل استخدام من الاستخدامات الآتية مع ذكر السبب: 1) شعار شركة شفاف يوضع على خلفيات ملونة مختلفة  2) صورة فوتوغرافية لمعلم سياحي تحتوي على تفاصيل وظلال دقيقة  3) رسم كرتوني متحرك قصير يتكرر كحلقة.',
        questionEn: 'Choose the best format (.png, .jpg, .gif) for: 1) Transparent company logo 2) High-detail tourist photo 3) Short looping animation.',
        solutionStepsAr: [
          '1) شعار الشركة الشفاف: نختار صيغة (.png) لأنها تدعم الشفافية وتحافظ على حواف الشعار حادة ونقية.',
          '2) الصورة الفوتوغرافية: نختار صيغة (.jpg) لأنها تدعم ملايين الألوان وتضغط حجم الملف بذكاء لسهولة النشر.',
          '3) الرسم الكرتوني المتحرك: نختار صيغة (.gif) لأنها الصيغة القياسية التي تدعم تتابع الإطارات المتحركة.'
        ],
        solutionStepsEn: [
          '1) Transparent logo: .png (supports alpha transparency).',
          '2) Scenic photo: .jpg (rich photographic color compression).',
          '3) Looping animation: .gif (frame sequence support).'
        ],
        answerAr: '1) الشعار الشفاف: .png  • 2) الصورة الفوتوغرافية: .jpg  • 3) الرسم المتحرك: .gif.',
        answerEn: '1) Transparent logo: .png • 2) Photo: .jpg • 3) Animation: .gif.'
      }
    ],

    assessment: {
      id: 'quiz-m-comp-5',
      lectureId: 'm-comp-5',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 5: معالجة الصور الرقمية وتصميم الجرافيك بـ GIMP',
      titleEn: 'Mastery Assessment 5: Digital Image Editing, Layers & Graphic Design in GIMP',
      passingScore: 80,
      questions: [
        {
          id: 'qc5-1',
          textAr: 'أصغر وحدة بنائية للصور النقطية الرقمية (Raster) وتحدد درجة وضوحها تُسمى:',
          textEn: 'The smallest picture element in a raster digital image is called a:',
          optionsAr: ['بكسل (Pixel)', 'بايت (Byte)', 'طبقة (Layer)', 'منحنى (Vector)'],
          optionsEn: ['Pixel', 'Byte', 'Layer', 'Vector curve'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف البكسل في الصور النقطية',
          conceptTestedEn: 'Pixel Definition in Raster Graphics',
          explanationAr: 'البكسل Pixel هو أصغر نقطة ملونة في تكوين الصورة الرقمية النقطية.',
          explanationEn: 'A pixel is the smallest addressable unit of a digital raster image.',
          difficulty: 'easy'
        },
        {
          id: 'qc5-2',
          textAr: 'أداة التحديد في GIMP التي تقوم بتحديد مساحة لونية متجانسة بنقرة واحدة تُسمى:',
          textEn: 'The GIMP selection tool selecting contiguous color regions with a single click is:',
          optionsAr: ['أداة العصا السحرية (Fuzzy Select)', 'أداة التحديد المستطيل (Rectangle)', 'أداة التدوير (Rotate)', 'أداة الممحاة (Eraser)'],
          optionsEn: ['Fuzzy Select (Magic Wand)', 'Rectangle Select', 'Rotate Tool', 'Eraser Tool'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة أداة Fuzzy Select',
          conceptTestedEn: 'Fuzzy Wand Tool Function',
          explanationAr: 'أداة Fuzzy Select تحدد المساحات ذات الدرجة اللونية المتقاربة والمتجانسة بنقرة واحدة.',
          explanationEn: 'Fuzzy Select highlights matching contiguous color thresholds.',
          difficulty: 'easy'
        },
        {
          id: 'qc5-3',
          textAr: 'الامتداد الذي يدعم حفظ الصور بخلفيات شفافة (Transparency) بجودة عالية هو:',
          textEn: 'The image file extension supporting high-quality alpha transparency is:',
          optionsAr: ['.png', '.jpg', '.mp3', '.txt'],
          optionsEn: ['.png', '.jpg', '.mp3', '.txt'],
          correctIndex: 0,
          conceptTestedAr: 'دعم الشفافية في صيغة PNG',
          conceptTestedEn: 'PNG Transparency Support',
          explanationAr: '.png هي أشهر صيغ الصور التي تدعم الشفافية التامة ونقاء الحواف.',
          explanationEn: '.png supports 24-bit transparent alpha channels.',
          difficulty: 'easy'
        },
        {
          id: 'qc5-4',
          textAr: 'امتداد ملف مشروع برنامج GIMP الذي يحتفظ بجميع الطبقات ومراحل العمل هو:',
          textEn: 'The native GIMP project file format preserving all layer edits is:',
          optionsAr: ['.xcf', '.pdf', '.docx', '.jpg'],
          optionsEn: ['.xcf', '.pdf', '.docx', '.jpg'],
          correctIndex: 0,
          conceptTestedAr: 'امتداد مشروع برنامج GIMP',
          conceptTestedEn: 'GIMP Native Project Format',
          explanationAr: '.xcf هو الامتداد الرسمي لمشاريع برنامج GIMP متعددة الطبقات.',
          explanationEn: '.xcf is GIMP multi-layer project container format.',
          difficulty: 'easy'
        },
        {
          id: 'qc5-5',
          textAr: 'الصور المتجهة (Vector Graphics) تتميز عن الصور النقطية (Raster) بأنها:',
          textEn: 'Vector graphics differ from raster bitmaps because they:',
          optionsAr: ['لا تفقد جودتها إطلاقاً وتبقى حادة عند تكبيرها بأي مقاس', 'تفقد وضوحها وتتشوه عند التكبير', 'تتكون من بكسلات مربعة ملونة', 'لا يمكن فتحها على أجهزة الكمبيوتر'],
          optionsEn: ['Never lose quality and stay crisp at any zoom scale', 'Lose clarity and pixelate upon zoom', 'Are composed of square pixel blocks', 'Cannot be opened on computers'],
          correctIndex: 0,
          conceptTestedAr: 'ميزة الصور المتجهة Vector',
          conceptTestedEn: 'Vector Graphic Scalability',
          explanationAr: 'الصور المتجهة مبنية على معادلات رياضية هندسية فتظل نقية وحادة مهما تم تكبيرها.',
          explanationEn: 'Vector math equations ensure infinite scalability without pixelation.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
