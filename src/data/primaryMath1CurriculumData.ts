import type { Lecture } from '../types';

// ============================================================================
// PRIMARY MATH — GRADE 1 (ماث الصف الأول الابتدائي - لمدارس اللغات والتعليم العام Edu 2.0)
// Official Grade 1 / Primary 1 Egyptian Ministry Curriculum Alignment (Language Schools Math):
// Lecture 1: Numbers 0 to 20, Ten-Frames, Counting & Comparing (> , < , =)
// Lecture 2: Basic Addition & Subtraction within 20, Number Bonds & Problem Solving
// Lecture 3: 2D & 3D Geometric Shapes, Attributes (Sides/Vertices) & Picture/Bar Graphs
// Lecture 4: Numbers up to 99, Place Value (Tens & Ones), Measurement, Time & Money
// ============================================================================

export const PRIMARY_MATH_G1_LECTURES: Lecture[] = [
  // ── LECTURE 1: NUMBERS 0 TO 20, TEN FRAMES & COMPARING ──
  {
    id: 'p1-m-1',
    order: 1,
    titleAr: 'المحاضرة 1: الأعداد من 0 إلى 20، إطار العشرة خانات، والعد والمقارنة (> ، < ، =)',
    titleEn: 'Lecture 1: Numbers 0 to 20, Ten-Frames, Counting & Comparing (> , < , =)',
    subtitleAr: 'العد التصاعدي والتنازلي من 0 إلى 20، تمثيل الأعداد بنماذج إطار خانات العشرة (Ten Frames)، ومقارنة الأعداد باستخدام رموز أكبر من وأصغر من ويساوي',
    subtitleEn: 'Master counting 0 to 20 forward & backward, representing numbers on Ten-Frames, and comparing quantities with >, <, and = symbols.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Math (Language Schools Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 / First Semester',
    unitTitleAr: 'الوحدة الأولى: الأعداد حتى 20 والمقارنة',
    unitTitleEn: 'Unit 1: Numbers 0 to 20 & Comparing',
    lessonNumberAr: 'الدرس 1: الأعداد وإطار العشرة والمقارنة',
    lessonNumberEn: 'Lesson 1: Numbers, Ten-Frames & Comparison',

    keyConceptsAr: [
      'العد التصاعدي (0, 1, 2, ... 20) والعد التنازلي (20, 19, 18, ... 0).',
      'إطار العشر خانات (Ten-Frame): نموذج مستطيل من 10 مربعات لتمثيل الأعداد بصرياً كـ خمسات وعشرات.',
      'مقارنة الأعداد باستخدام الرموز: أكبر من ($>$ Greater than)، أصغر من ($<$ Less than)، ويساوي ($=$ Equal to).',
      'ترتيب الأعداد: من الأصغر إلى الأكبر (Ascending order) ومن الأكبر إلى الأصغر (Descending order).'
    ],
    keyConceptsEn: [
      'Forward counting (0 to 20) and backward counting (20 down to 0).',
      'Ten-Frame Model: A 2x5 grid helping kids visualize numbers relative to 5 and 10.',
      'Comparing quantities using symbols: Greater than (>), Less than (<), and Equal to (=).',
      'Ordering numbers: Least to Greatest (Ascending) and Greatest to Least (Descending).'
    ],

    conceptMapAr: [
      'العد (0 ➔ 20) ➔ تمثيل بالنقاط في إطار العشرة (Ten-Frame) ➔ مقارنة الكميات (> ، < ، =) ➔ الترتيب التصاعدي والتنازلي'
    ],
    conceptMapEn: [
      'Counting (0 to 20) ➔ Visualizing with Ten-Frames ➔ Comparing Quantities (>, <, =) ➔ Ascending & Descending Order'
    ],

    learningOutcomesAr: [
      'أن يعد التلميذ ويكتب الأرقام من 0 إلى 20 بطلاقة باللغة الإنجليزية.',
      'أن يمثل أي عدد حتى 20 باستخدام إطار خانات العشرة (Ten-Frame).',
      'أن يقارن بين عددين باستخدام الرموز الرياضية الصحيحة ($>$ أو $<$ أو $=$).'
    ],
    learningOutcomesEn: [
      'Count, read, and write numbers from 0 to 20 accurately in English.',
      'Represent numbers up to 20 using single and double Ten-Frames.',
      'Compare two numbers using comparison symbols (>, <, =).'
    ],

    vocabulary: [
      {
        termAr: 'إطار العشرة (Ten-Frame)',
        termEn: 'Ten-Frame',
        definitionAr: 'شبكة مستطيلة مكونة من 10 خانات (صفان من 5) تساعد الطفل على إدراك الأعداد بصرياً.',
        definitionEn: 'A 2-by-5 rectangular frame used to develop number sense and subitizing.'
      },
      {
        termAr: 'أكبر من (Greater Than)',
        termEn: 'Greater Than ( > )',
        definitionAr: 'رمز رياضي فمه مفتوح نحو العدد الأكبر (مثل: $8 > 5$).',
        definitionEn: 'Symbol showing that the first number has a larger quantity than the second (e.g. 8 > 5).'
      },
      {
        termAr: 'أصغر من (Less Than)',
        termEn: 'Less Than ( < )',
        definitionAr: 'رمز رياضي يشير طرفه المدبب إلى العدد الأصغر (مثل: $4 < 9$).',
        definitionEn: 'Symbol showing that the first number is smaller in value (e.g. 4 < 9).'
      },
      {
        termAr: 'يساوي (Equal To)',
        termEn: 'Equal To ( = )',
        definitionAr: 'رمز يدل على أن الكميتين متطابقتان تماماً (مثل: $7 = 7$).',
        definitionEn: 'Symbol indicating both numbers have identical value.'
      }
    ],

    warmupHookAr: 'أهلاً ببطل الماث في الصف الأول الابتدائي! 🌟 تخيل أن لديك 8 تفاحات لذيذة ولديك صديق لديه 5 تفاحات؛ من يمتلك تفاحاً أكثر؟ نفتح فم التمساح الجائع دائماً نحو العدد الأكبر: $8 > 5$! تعال لنتعلم كيف نعد حتى 20 ونمثل الأعداد في إطار العشرة!',
    warmupHookEn: 'Welcome Grade 1 Math hero! If you have 8 apples and your friend has 5, who has more? The hungry alligator always opens its mouth toward the bigger number: 8 > 5! Let us count and play with Ten-Frames!',

    mainContentAr: `
### 1. Counting Numbers 0 to 20 (العد من 0 إلى 20)
* **0 (Zero), 1 (One), 2 (Two), 3 (Three), 4 (Four), 5 (Five)**
* **6 (Six), 7 (Seven), 8 (Eight), 9 (Nine), 10 (Ten)**
* **11 (Eleven), 12 (Twelve), 13 (Thirteen), 14 (Fourteen), 15 (Fifteen)**
* **16 (Sixteen), 17 (Seventeen), 18 (Eighteen), 19 (Nineteen), 20 (Twenty)**

---

### 2. The Ten-Frame Model (إطار العشر خانات)
* إطار العشرة يساعدنا على رؤية العدد فوراً:
  * العدد **5** يملأ الصف العلوي كاملاً.
  * العدد **10** يملأ الإطار بالكامل (Full Ten-Frame).
  * العدد **14** يملأ إطاراً كاملاً من 10 + 4 نقاط في الإطار الثاني ($10 + 4 = 14$).

---

### 3. Comparing Numbers: > , < , = (المقارنة)
* **Rule of Hungry Alligator:** فم التمساح يأكل العدد الأكبر دائماً!
  * **$9 > 6$** (Nine is greater than Six).
  * **$4 < 12$** (Four is less than Twelve).
  * **$15 = 15$** (Fifteen is equal to Fifteen).
    `,
    mainContentEn: `
### 1. Counting & Number Names (0 to 20)
* 0 (zero), 1 (one), 2 (two), 3 (three), 4 (four), 5 (five)
* 6 (six), 7 (seven), 8 (eight), 9 (nine), 10 (ten)
* 11 (eleven), 12 (twelve), 13 (thirteen), 14 (fourteen), 15 (fifteen)
* 16 (sixteen), 17 (seventeen), 18 (eighteen), 19 (nineteen), 20 (twenty)

### 2. Ten-Frames
* A full Ten-Frame has **10 dots**.
* Number **13** = 1 full Ten-Frame (10) + 3 extra dots = $10 + 3 = 13$.

### 3. Comparing Symbols
* **$8 > 3$** (8 is Greater than 3)
* **$7 < 15$** (7 is Less than 15)
* **$10 = 10$** (10 is Equal to 10)
    `,

    diagramType: 'ten_frame_diagram',
    diagramData: {
      type: 'ten_frame_comparison',
      title: 'نموذج إطار العشرة ومقارنة الأعداد (Ten-Frames & Comparing)',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <!-- Ten Frame 1: Number 7 -->
        <g transform="translate(30, 25)">
          <rect width="140" height="60" fill="none" stroke="#38bdf8" stroke-width="2" rx="6"/>
          <line x1="0" y1="30" x2="140" y2="30" stroke="#38bdf8" stroke-width="1.5"/>
          <line x1="28" y1="0" x2="28" y2="60" stroke="#38bdf8" stroke-width="1"/>
          <line x1="56" y1="0" x2="56" y2="60" stroke="#38bdf8" stroke-width="1"/>
          <line x1="84" y1="0" x2="84" y2="60" stroke="#38bdf8" stroke-width="1"/>
          <line x1="112" y1="0" x2="112" y2="60" stroke="#38bdf8" stroke-width="1"/>
          <!-- 7 Dots -->
          <circle cx="14" cy="15" r="9" fill="#f43f5e"/>
          <circle cx="42" cy="15" r="9" fill="#f43f5e"/>
          <circle cx="70" cy="15" r="9" fill="#f43f5e"/>
          <circle cx="98" cy="15" r="9" fill="#f43f5e"/>
          <circle cx="126" cy="15" r="9" fill="#f43f5e"/>
          <circle cx="14" cy="45" r="9" fill="#f43f5e"/>
          <circle cx="42" cy="45" r="9" fill="#f43f5e"/>
          <text x="70" y="80" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">Number 7</text>
        </g>

        <!-- Greater Than Symbol in Center -->
        <text x="200" y="65" fill="#fbbf24" font-size="32" font-weight="bold" text-anchor="middle">&gt;</text>

        <!-- Ten Frame 2: Number 4 -->
        <g transform="translate(230, 25)">
          <rect width="140" height="60" fill="none" stroke="#34d399" stroke-width="2" rx="6"/>
          <line x1="0" y1="30" x2="140" y2="30" stroke="#34d399" stroke-width="1.5"/>
          <line x1="28" y1="0" x2="28" y2="60" stroke="#34d399" stroke-width="1"/>
          <line x1="56" y1="0" x2="56" y2="60" stroke="#34d399" stroke-width="1"/>
          <line x1="84" y1="0" x2="84" y2="60" stroke="#34d399" stroke-width="1"/>
          <line x1="112" y1="0" x2="112" y2="60" stroke="#34d399" stroke-width="1"/>
          <!-- 4 Dots -->
          <circle cx="14" cy="15" r="9" fill="#34d399"/>
          <circle cx="42" cy="15" r="9" fill="#34d399"/>
          <circle cx="70" cy="15" r="9" fill="#34d399"/>
          <circle cx="98" cy="15" r="9" fill="#34d399"/>
          <text x="70" y="80" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Number 4</text>
        </g>

        <!-- Summary text banner -->
        <rect x="40" y="120" width="320" height="40" rx="8" fill="rgba(251, 191, 36, 0.12)" stroke="#fbbf24" stroke-width="1"/>
        <text x="200" y="145" fill="#fde047" font-size="13" font-weight="bold" text-anchor="middle">7 is Greater than 4  ( 7 &gt; 4 )</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال تفصيلي: مقارنة عددين بنموذج إطار العشرة',
        titleEn: 'Example: Comparing Two Numbers on Ten-Frames',
        problemAr: 'قارن بين العددين 14 و 9 باستخدام الرمز المناسب ($>$ أو $<$ أو $=$).',
        problemEn: 'Compare 14 and 9 using the correct symbol (>, <, or =).',
        stepsAr: [
          'العدد 14 يمثل إطاراً كاملاً ممتلئاً (10) و 4 نقاط إضافية.',
          'العدد 9 يمثل إطاراً ينقصه نقطة واحدة (أقل من 10).',
          'بما أن 14 أكبر من 9، نفتح فم التمساح نحو 14: $14 > 9$.'
        ],
        stepsEn: [
          'Number 14 is 1 full Ten-Frame (10) plus 4 dots.',
          'Number 9 is less than a full Ten-Frame (9 < 10).',
          'Therefore: 14 is greater than 9 (14 > 9).'
        ],
        finalAnswerAr: '$14 > 9$ (14 أكبر من 9)',
        finalAnswerEn: '14 > 9 (Fourteen is greater than Nine)'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1m1-1',
        problemAr: 'رتب الأعداد التالية تصاعدياً من الأصغر إلى الأكبر (From least to greatest): 15 , 8 , 19 , 3',
        problemEn: 'Order from least to greatest: 15, 8, 19, 3.',
        solutionStepsAr: [
          'أصغر عدد هو: 3',
          'العدد التالي: 8',
          'ثم: 15',
          'أكبر عدد هو: 19',
          'الترتيب: 3 , 8 , 15 , 19'
        ],
        finalAnswerAr: 'الترتيب التصاعدي: 3 , 8 , 15 , 19'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1m1-1',
        questionAr: 'اختر الرمز الصحيح للمقارنة: 12 ...... 16',
        questionEn: 'Choose the correct comparison symbol: 12 ...... 16',
        optionsAr: ['< (أصغر من)', '> (أكبر من)', '= (يساوي)', '+ (زائد)'],
        optionsEn: ['< (Less than)', '> (Greater than)', '= (Equal to)', '+ (Plus)'],
        correctIndex: 0,
        explanationAr: 'العدد 12 أصغر من 16، إذن نكتب: $12 < 16$.',
        explanationEn: '12 is smaller than 16, so: 12 < 16.'
      }
    ],

    assessment: {
      id: 'quiz-p1-m1',
      titleAr: 'اختبار بطل الماث: الأعداد حتى 20 والمقارنة',
      titleEn: 'Math Mastery Quiz: Numbers 0 to 20 & Comparing',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-m1-1',
          textAr: 'ما هو العدد الممثل بـ إطار عشرة كامل + 6 نقاط إضافية؟',
          textEn: 'What number is represented by 1 full Ten-Frame + 6 dots?',
          optionsAr: ['16', '6', '10', '14'],
          optionsEn: ['16 (Sixteen)', '6 (Six)', '10 (Ten)', '14 (Fourteen)'],
          correctIndex: 0,
          conceptTestedAr: 'تمثيل الأعداد بنموذج إطار العشرة',
          conceptTestedEn: 'Ten-Frame Number Representation',
          explanationAr: 'إطار كامل = 10 + 6 نقاط = 16.',
          explanationEn: '10 + 6 = 16 (Sixteen).',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m1-2',
          textAr: 'أي من المقارنات التالية صحيحة؟',
          textEn: 'Which comparison is correct?',
          optionsAr: ['18 > 11', '5 > 13', '9 = 19', '14 < 7'],
          optionsEn: ['18 > 11', '5 > 13', '9 = 19', '14 < 7'],
          correctIndex: 0,
          conceptTestedAr: 'مقارنة الأعداد باستخدام الرموز',
          conceptTestedEn: 'Number Comparison with Symbols',
          explanationAr: '18 أكبر من 11 ($18 > 11$) هي العبارة الصحيحة.',
          explanationEn: '18 is greater than 11 (18 > 11).',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m1-3',
          textAr: 'ما هو العدد التالي مباشرة (Next number) بعد العدد 19؟',
          textEn: 'What number comes immediately after 19?',
          optionsAr: ['20', '18', '21', '10'],
          optionsEn: ['20 (Twenty)', '18 (Eighteen)', '21 (Twenty-one)', '10 (Ten)'],
          correctIndex: 0,
          conceptTestedAr: 'العد التسلسلي حتى 20',
          conceptTestedEn: 'Counting Sequence up to 20',
          explanationAr: 'العدد الذي يلي 19 في العد هو 20.',
          explanationEn: 'After 19 comes 20.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: BASIC ADDITION & SUBTRACTION WITHIN 20 & NUMBER BONDS ──
  {
    id: 'p1-m-2',
    order: 2,
    titleAr: 'المحاضرة 2: الجمع والطرح البسيط ضمن العدد 20 ومخطط تكوين الأعداد (Number Bonds)',
    titleEn: 'Lecture 2: Basic Addition & Subtraction within 20, Number Bonds & Word Problems',
    subtitleAr: 'مفهوم الجمع كضم مجموعتين (+ و =)، مفهوم الطرح كأخذ وحذف (-)، مكونات العدد 10 (Pairs to 10)، ومسائل لفظية مصورة بسيطة',
    subtitleEn: 'Master addition (joining groups), subtraction (taking away), Number Bonds to 10, and simple visual word problems within 20.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Math (Language Schools Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 / First Semester',
    unitTitleAr: 'الوحدة الثانية: عمليات الجمع والطرح البسيطة',
    unitTitleEn: 'Unit 2: Basic Addition & Subtraction',
    lessonNumberAr: 'الدرس 2: الجمع والطرح ومكونات الأعداد',
    lessonNumberEn: 'Lesson 2: Addition, Subtraction & Number Bonds',

    keyConceptsAr: [
      'مفهوم الجمع ($+$ Plus): ضم مجموعتين معاً لإيجاد المجموع الكلي (Total / Sum) مثل: $4 + 3 = 7$.',
      'مفهوم الطرح ($-$ Minus): أخذ كمية من مجموعة أو حذف عناصر لإيجاد المتبقي (Difference) مثل: $9 - 4 = 5$.',
      'مكونات العدد 10 (Friends of 10): $0+10, 1+9, 2+8, 3+7, 4+6, 5+5$.',
      'مخطط الأجزاء والكل (Part-Part-Whole / Number Bonds): الجزء + الجزء = الكل ($3 + 5 = 8$).',
      'خاصية الإبدال في الجمع: $2 + 6 = 6 + 2 = 8$.'
    ],
    keyConceptsEn: [
      'Addition (+): Joining two groups to find the sum/total (e.g. 5 + 3 = 8).',
      'Subtraction (-): Taking away from a group to find the difference (e.g. 7 - 2 = 5).',
      'Number Bonds to 10 (Friends of 10): 1+9, 2+8, 3+7, 4+6, 5+5.',
      'Part-Part-Whole Model: Part + Part = Whole.',
      'Commutative Property of Addition: 4 + 2 = 2 + 4 = 6.'
    ],

    conceptMapAr: [
      'الجمع (ضم المجموعات +) ➔ الطرح (الأخذ والحذف -) ➔ مكونات العدد 10 (Number Bonds) ➔ حل المسائل اللفظية البسيطة'
    ],
    conceptMapEn: [
      'Addition (Joining +) ➔ Subtraction (Take Away -) ➔ Number Bonds to 10 ➔ Simple Story Problems'
    ],

    learningOutcomesAr: [
      'أن يجري التلميذ عمليات الجمع البسيطة حتى 20 باستخدام أصابع اليد والنماذج المصورة.',
      'أن يجري عمليات الطرح البسيطة ضمن العدد 20 بثقة.',
      'أن يسترجع مكونات العدد 10 بسرعة وطلاقة.',
      'أن يحل مسائل لفظية مصورة من خطوة واحدة تعبر عن مواقف حياتية.'
    ],
    learningOutcomesEn: [
      'Add numbers within 20 using counters, fingers, and pictures.',
      'Subtract numbers within 20 accurately.',
      'Recall pairs of numbers that make 10 (Number Bonds).',
      'Solve one-step illustrated word problems in everyday contexts.'
    ],

    vocabulary: [
      {
        termAr: 'جمع (Addition +)',
        termEn: 'Addition ( + )',
        definitionAr: 'عملية حسابية لضم مجموعتين معاً ورمزها علامة الزائد (+).',
        definitionEn: 'Combining two or more quantities into a single total.'
      },
      {
        termAr: 'طرح (Subtraction -)',
        termEn: 'Subtraction ( - )',
        definitionAr: 'عملية حسابية لحذف أو أخذ عناصر من مجموعة ورمزها علامة الناقص (-).',
        definitionEn: 'Taking one quantity away from another to find what remains.'
      },
      {
        termAr: 'مخطط تكوين الأعداد (Number Bond)',
        termEn: 'Number Bond',
        definitionAr: 'رسم يوضح كيف يتكون العدد الكلي (Whole) من جزأين (Parts).',
        definitionEn: 'A visual diagram showing the part-part-whole relationship of numbers.'
      }
    ],

    warmupHookAr: 'إذا كان على الشجرة 6 عصافير مغردة، وجاء 3 عصافير أخرى وانضمت إليها؛ كم عصفوراً على الشجرة الآن؟ نجمع: $6 + 3 = 9$ عصافير! وإذا طار منهم 2؟ نطرح: $9 - 2 = 7$! الرياضيات لعبة ممتعة مع الأرقام!',
    warmupHookEn: 'If 6 birds sit on a tree and 3 more join them, how many birds are there? We add: 6 + 3 = 9! If 2 fly away, we subtract: 9 - 2 = 7! Math is fun!',

    mainContentAr: `
### 1. Basic Addition (+ Plus)
* **Count On Strategy (العد التنازلي للأمام):** نضع العدد الأكبر في عقلنا ونعد على أصابعنا:
  * لإيجاد $7 + 4$: نضع 7 في عقلنا، ونعد 4 خطوات للأمام: 8, 9, 10, **11** ➔ $7 + 4 = 11$.

---

### 2. Basic Subtraction (- Minus)
* **Count Back Strategy (العد التنازلي للخلف):**
  * لإيجاد $9 - 3$: نضع 9 في عقلنا ونرجع 3 خطوات للخلف: 8, 7, **6** ➔ $9 - 3 = 6$.

---

### 3. Number Bonds to 10 (أصدقاء العشرة السحريون)
* $0 + 10 = 10$
* $1 + 9 = 10$
* $2 + 8 = 10$
* $3 + 7 = 10$
* $4 + 6 = 10$
* $5 + 5 = 10$
    `,
    mainContentEn: `
### 1. Addition Strategies
* **Count On:** Put the bigger number in your head and count forward.
  * $8 + 5$: Start at 8, count 5 more: 9, 10, 11, 12, **13** ⟹ $8 + 5 = 13$.

### 2. Subtraction Strategies
* **Count Back:** Start from the first number and count backwards.
  * $10 - 4$: Start at 10, step back 4: 9, 8, 7, **6** ⟹ $10 - 4 = 6$.

### 3. Friends of 10 (Pairs that make 10)
* $1 + 9 = 10$  |  $2 + 8 = 10$  |  $3 + 7 = 10$  |  $4 + 6 = 10$  |  $5 + 5 = 10$
    `,

    diagramType: 'number_bond_diagram',
    diagramData: {
      type: 'number_bond_part_whole',
      title: 'مخطط تكوين الأعداد (Number Bonds to 10)',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <!-- Number Bond Tree -->
        <!-- Whole Circle (10) -->
        <circle cx="200" cy="45" r="28" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="200" y="52" fill="#38bdf8" font-size="20" font-weight="bold" text-anchor="middle">10</text>
        <text x="200" y="18" fill="#94a3b8" font-size="10" text-anchor="middle">Whole (الكل)</text>

        <!-- Connecting Lines -->
        <line x1="180" y1="65" x2="110" y2="115" stroke="#64748b" stroke-width="2"/>
        <line x1="220" y1="65" x2="290" y2="115" stroke="#64748b" stroke-width="2"/>

        <!-- Part 1 (6) -->
        <circle cx="100" cy="135" r="24" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" stroke-width="2"/>
        <text x="100" y="142" fill="#f43f5e" font-size="18" font-weight="bold" text-anchor="middle">6</text>
        <text x="100" y="170" fill="#94a3b8" font-size="10" text-anchor="middle">Part (جزء)</text>

        <!-- Plus Sign -->
        <text x="200" y="140" fill="#fbbf24" font-size="22" font-weight="bold" text-anchor="middle">+</text>

        <!-- Part 2 (4) -->
        <circle cx="300" cy="135" r="24" fill="rgba(52, 211, 153, 0.2)" stroke="#34d399" stroke-width="2"/>
        <text x="300" y="142" fill="#34d399" font-size="18" font-weight="bold" text-anchor="middle">4</text>
        <text x="300" y="170" fill="#94a3b8" font-size="10" text-anchor="middle">Part (جزء)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال تفصيلي: حل مسألة كلامية بالجمع',
        titleEn: 'Word Problem: Addition Story',
        problemAr: 'لدى مريم 7 بالونات حمراء، واشترت 5 بالونات زرقاء. كم بالوناً مع مريم الآن؟',
        problemEn: 'Mariam has 7 red balloons and buys 5 blue balloons. How many balloons does she have now?',
        stepsAr: [
          'الخطوة 1: نحدد المعطيات ➔ 7 بالونات و 5 بالونات.',
          'الخطوة 2: بما أنها اشترت بالونات جديدة، إذن العملية هي الجمع (+).',
          'الخطوة 3: نعد للأمام من 7: $7 + 5 = 12$ بالوناً.'
        ],
        stepsEn: [
          'Step 1: Given 7 and 5 balloons.',
          'Step 2: Buying more means Addition (+).',
          'Step 3: 7 + 5 = 12 balloons.'
        ],
        finalAnswerAr: '$7 + 5 = 12$ بالوناً',
        finalAnswerEn: '7 + 5 = 12 balloons'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1m2-1',
        problemAr: 'أوجد ناتج العمليات التالية: 1) 9 + 5 = ....   2) 14 - 4 = ....',
        problemEn: 'Calculate: 1) 9 + 5 = ...  2) 14 - 4 = ...',
        solutionStepsAr: [
          '1) 9 + 5 = 14',
          '2) 14 - 4 = 10'
        ],
        finalAnswerAr: '1) 14  •  2) 10'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1m2-1',
        questionAr: 'ما العدد الناقص لتكوين 10: $7 + ..... = 10$؟',
        questionEn: 'What is the missing number to make 10: 7 + ... = 10?',
        optionsAr: ['3', '2', '4', '5'],
        optionsEn: ['3', '2', '4', '5'],
        correctIndex: 0,
        explanationAr: 'مكمل العدد 7 للوصول إلى 10 هو 3 ($7 + 3 = 10$).',
        explanationEn: '7 + 3 = 10 (Friends of 10).'
      }
    ],

    assessment: {
      id: 'quiz-p1-m2',
      titleAr: 'اختبار بطل الماث: الجمع والطرح ومكونات الأعداد',
      titleEn: 'Addition & Subtraction Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-m2-1',
          textAr: 'ناتج جمع $8 + 6$ يساوي:',
          textEn: 'What is 8 + 6?',
          optionsAr: ['14', '12', '13', '15'],
          optionsEn: ['14 (Fourteen)', '12', '13', '15'],
          correctIndex: 0,
          conceptTestedAr: 'الجمع حتى 20',
          conceptTestedEn: 'Addition within 20',
          explanationAr: '8 + 6 = 14.',
          explanationEn: '8 + 6 = 14.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m2-2',
          textAr: 'ناتج طرح $15 - 5$ يساوي:',
          textEn: 'What is 15 - 5?',
          optionsAr: ['10', '9', '11', '8'],
          optionsEn: ['10 (Ten)', '9', '11', '8'],
          correctIndex: 0,
          conceptTestedAr: 'الطرح البسيط ضمن 20',
          conceptTestedEn: 'Subtraction within 20',
          explanationAr: '15 - 5 = 10.',
          explanationEn: '15 - 5 = 10.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m2-3',
          textAr: 'كان في الطبق 10 تفاحات، أكل عمر 4 تفاحات. كم تفاحة تبقت؟',
          textEn: 'There were 10 apples. Omar ate 4. How many apples are left?',
          optionsAr: ['6 تفاحات', '5 تفاحات', '7 تفاحات', '4 تفاحات'],
          optionsEn: ['6 apples', '5 apples', '7 apples', '4 apples'],
          conceptTestedAr: 'مسائل لفظية على الطرح',
          conceptTestedEn: 'Subtraction Word Problems',
          correctIndex: 0,
          explanationAr: '10 - 4 = 6 تفاحات.',
          explanationEn: '10 - 4 = 6 apples remaining.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: 2D & 3D GEOMETRIC SHAPES & PICTURE/BAR GRAPHS ──
  {
    id: 'p1-m-3',
    order: 3,
    titleAr: 'المحاضرة 3: الأشكال الهندسية ثنائية وثلاثية الأبعاد (2D & 3D Shapes) والرسوم البيانية المصورة (Graphing)',
    titleEn: 'Lecture 3: 2D & 3D Geometric Shapes, Sides/Vertices & Picture/Bar Graphs',
    subtitleAr: 'التعرف على الأشكال المستوية (Circle, Square, Triangle, Rectangle)، الأشكال المجسمة (Cube, Sphere, Cone, Cylinder)، وجمع البيانات بالرسم البياني',
    subtitleEn: 'Explore 2D shapes, 3D solids, sides, vertices (corners), and interpreting simple picture and bar graphs.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Math (Language Schools Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 / First Semester',
    unitTitleAr: 'الوحدة الثالثة: الهندسة والرسوم البيانية',
    unitTitleEn: 'Unit 3: Geometry & Data Graphing',
    lessonNumberAr: 'الدرس 3: الأشكال الهندسية والرسوم البيانية',
    lessonNumberEn: 'Lesson 3: 2D & 3D Shapes and Graphs',

    keyConceptsAr: [
      'الأشكال ثنائية الأبعاد (2D Shapes): أشكال مستوية مسطحة لها أضلاع (Sides) ورؤوس/زوايا (Vertices/Corners).',
      'Circle (دائرة): شكل منحني ليس له أضلاع مستقيمة ولا رؤوس (0 sides, 0 vertices).',
      'Triangle (مثلث): له 3 أضلاع و 3 رؤوس (3 sides, 3 vertices).',
      'Square (مربع): له 4 أضلاع متساوية تماماً و 4 رؤوس (4 equal sides, 4 vertices).',
      'Rectangle (مستطيل): له 4 أضلاع (كل ضلعين متقابلين متساويان) و 4 رؤوس.',
      'الأشكال ثلاثية الأبعاد (3D Solids): Cube (مكعب), Sphere (كرة), Cylinder (أسطوانة), Cone (مخروط).',
      'الرسم البياني المصور (Picture Graph) والرسم البياني بالأعمدة (Bar Graph): قراءة ومقارنة البيانات.'
    ],
    keyConceptsEn: [
      '2D Shapes (Flat): Circle (0 sides, 0 vertices), Triangle (3 sides, 3 vertices), Square (4 equal sides), Rectangle (4 sides).',
      '3D Solids: Cube (box), Sphere (ball), Cylinder (can), Cone (party hat).',
      'Attributes: Counting straight Sides and Vertices (corners).',
      'Data Representation: Reading Picture Graphs and Bar Graphs.'
    ],

    conceptMapAr: [
      'الأشكال ثنائية الأبعاد (2D Flat) ➔ الأشكال ثلاثية الأبعاد (3D Solids) ➔ عد الأضلاع والرؤوس ➔ التمثيل البياني للبيانات'
    ],
    conceptMapEn: [
      '2D Flat Shapes ➔ 3D Solids ➔ Counting Sides & Vertices ➔ Picture & Bar Graph Interpretation'
    ],

    learningOutcomesAr: [
      'أن يسمي التلميذ الأشكال ثنائية الأبعاد وثلاثية الأبعاد باللغة الإنجليزية.',
      'أن يحدد عدد الأضلاع والرؤوس في المثلث والمربع والمستطيل والدائرة.',
      'أن يقرأ رسماً بيانياً مصوراً ويجيب عن أسئلة المقارنة البسيطة (أكثر وأقل).'
    ],
    learningOutcomesEn: [
      'Identify and name 2D and 3D shapes in English.',
      'Count straight sides and vertices on flat geometric shapes.',
      'Read and interpret simple picture and bar graphs.'
    ],

    vocabulary: [
      {
        termAr: 'شكل ثنائي الأبعاد (2D Shape)',
        termEn: '2D Shape (Flat)',
        definitionAr: 'شكل هندسي مسطح مثل الدائرة والمثلث والمربع والمستطيل.',
        definitionEn: 'A flat plane figure with length and width.'
      },
      {
        termAr: 'ضلع (Side)',
        termEn: 'Side',
        definitionAr: 'الخط المستقيم الذي يشكل أحد حدود الشكل الهندسي.',
        definitionEn: 'A straight line segment forming the boundary of a 2D shape.'
      },
      {
        termAr: 'رأس / زاوية (Vertex)',
        termEn: 'Vertex / Corner',
        definitionAr: 'النقطة التي يلتقي فيها ضلعان مستقيمان.',
        definitionEn: 'The corner point where two sides meet.'
      },
      {
        termAr: 'رسم بياني مصور (Picture Graph)',
        termEn: 'Picture Graph',
        definitionAr: 'طريقة لتمثيل البيانات باستخدام الصور والرموز.',
        definitionEn: 'A graph displaying data using pictures and symbols.'
      }
    ],

    warmupHookAr: 'انظر حولك في الغرفة! باب الغرفة مستطيل (Rectangle)، وساعتك الحائطية دائرية (Circle)، وكرة القدم مجسم كروي (Sphere)، وعلبة الهدية مكعب (Cube)! الرياضيات والهندسة تملأ كل مكان في عالمنا الجميل!',
    warmupHookEn: 'Look around! The door is a Rectangle, the wall clock is a Circle, the soccer ball is a Sphere, and the gift box is a Cube! Geometry is all around us!',

    mainContentAr: `
### 1. 2D Flat Shapes (الأشكال ثنائية الأبعاد)
* **Circle (دائرة):** 0 Sides , 0 Vertices (شكل دائري منحني).
* **Triangle (مثلث):** 3 Sides , 3 Vertices.
* **Square (مربع):** 4 Equal Sides , 4 Vertices (أضلاعه الأربعة متساوية).
* **Rectangle (مستطيل):** 4 Sides , 4 Vertices (ضلعان طويلان وضلعان قصيران).

---

### 2. 3D Solid Shapes (المجسمات ثلاثية الأبعاد)
* **Cube (مكعب):** يشبه حجر النرد وصندوق الهدية.
* **Sphere (كرة):** تشبه كرة القدم والبرتقالة (تتدحرج بسهولة).
* **Cylinder (أسطوانة):** تشبه علبة العصير والأنبوب.
* **Cone (مخروط):** يشبه قبعة عيد الميلاد وقمع الآيس كريم.

---

### 3. Graphs (الرسوم البيانية)
* في الرسم البياني المصور: نعد الصور لنعرف عدد الأشخاص الذين يفضلون كل نوع فاكهة أو لون.
    `,
    mainContentEn: `
### 1. 2D Flat Shapes
* **Circle:** 0 sides, 0 corners.
* **Triangle:** 3 straight sides, 3 corners.
* **Square:** 4 equal sides, 4 corners.
* **Rectangle:** 4 sides (2 long, 2 short), 4 corners.

### 2. 3D Solids
* **Cube:** Like a dice or box.
* **Sphere:** Like a ball or globe.
* **Cylinder:** Like a soup can.
* **Cone:** Like an ice cream cone.

### 3. Picture Graphs
* Count the pictures to see which category has the **most** or **least**.
    `,

    diagramType: 'geometric_shapes_diagram',
    diagramData: {
      type: '2d_3d_shapes_chart',
      title: 'الأشكال الهندسية ثنائية وثلاثية الأبعاد (2D & 3D Shapes)',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <!-- 2D Shapes -->
        <!-- Circle -->
        <circle cx="50" cy="50" r="25" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
        <text x="50" y="90" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Circle</text>

        <!-- Triangle -->
        <polygon points="135,25 110,75 160,75" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
        <text x="135" y="90" fill="#f43f5e" font-size="11" font-weight="bold" text-anchor="middle">Triangle</text>

        <!-- Square -->
        <rect x="200" y="28" width="45" height="45" fill="none" stroke="#34d399" stroke-width="2.5"/>
        <text x="222" y="90" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Square</text>

        <!-- Rectangle -->
        <rect x="285" y="35" width="65" height="38" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
        <text x="317" y="90" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Rectangle</text>

        <!-- 3D Banner Row -->
        <rect x="30" y="115" width="340" height="48" rx="8" fill="rgba(192, 132, 252, 0.15)" stroke="#c084fc" stroke-width="1.5"/>
        <text x="200" y="135" fill="#e9d5ff" font-size="12" font-weight="bold" text-anchor="middle">3D Solids: Cube 📦 • Sphere ⚽ • Cylinder 🥫 • Cone 🍦</text>
        <text x="200" y="152" fill="#cbd5e1" font-size="10" text-anchor="middle">المجسمات ثلاثية الأبعاد تشغل حيزاً في الفراغ ولها وجوه</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'نشاط تدريبي: تحديد عدد الأضلاع والرؤوس',
        titleEn: 'Example: Counting Sides and Vertices',
        problemAr: 'كم عدد أضلاع ورؤوس المثلث (Triangle)؟',
        problemEn: 'How many sides and vertices does a Triangle have?',
        stepsAr: [
          'المثلث شكل هندسي مستوٍ يتكون من 3 خطوط مستقيمة ➔ 3 أضلاع (3 sides).',
          'تلتقي الأضلاع في 3 زوايا/رؤوس مدببة ➔ 3 رؤوس (3 vertices).'
        ],
        stepsEn: [
          'A triangle has 3 straight boundary lines = 3 sides.',
          'The lines meet at 3 corners = 3 vertices.'
        ],
        finalAnswerAr: 'المثلث له 3 أضلاع و 3 رؤوس (3 Sides & 3 Vertices)',
        finalAnswerEn: 'Triangle has 3 Sides and 3 Vertices'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1m3-1',
        problemAr: 'صل كل مجسم باسمه الصحيح: 1) كرة القدم  2) حجر النرد  3) علبة العصير',
        problemEn: 'Match object to 3D shape name: 1) Soccer ball 2) Dice 3) Soda can',
        solutionStepsAr: [
          '1) كرة القدم ➔ Sphere (كرة)',
          '2) حجر النرد ➔ Cube (مكعب)',
          '3) علبة العصير ➔ Cylinder (أسطوانة)'
        ],
        finalAnswerAr: 'كرة القدم (Sphere) • حجر النرد (Cube) • علبة العصير (Cylinder)'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1m3-1',
        questionAr: 'أي من الأشكال الآتية ليس له أي أضلاع مستقيمة (0 straight sides)؟',
        questionEn: 'Which shape has 0 straight sides?',
        optionsAr: ['Circle (الدائرة)', 'Square (المربع)', 'Triangle (المثلث)', 'Rectangle (المستطيل)'],
        optionsEn: ['Circle', 'Square', 'Triangle', 'Rectangle'],
        correctIndex: 0,
        explanationAr: 'الدائرة شكل منحني مغلق ليس له أضلاع مستقيمة (0 sides).',
        explanationEn: 'A Circle is curved and has 0 straight sides.'
      }
    ],

    assessment: {
      id: 'quiz-p1-m3',
      titleAr: 'اختبار بطل الماث: الأشكال الهندسية والرسوم البيانية',
      titleEn: 'Geometry & Graphing Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-m3-1',
          textAr: 'كم عدد أضلاع المربع (Square)؟',
          textEn: 'How many sides does a Square have?',
          optionsAr: ['4 أضلاع متساوية', '3 أضلاع', '0 أضلاع', '5 أضلاع'],
          optionsEn: ['4 equal sides', '3 sides', '0 sides', '5 sides'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص المربع',
          conceptTestedEn: 'Square Attributes',
          explanationAr: 'المربع له 4 أضلاع مستقيمة متساوية في الطول.',
          explanationEn: 'A Square has 4 equal straight sides.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m3-2',
          textAr: 'قبعة عيد الميلاد (Party hat) تمثل مجسماً ثلاثي الأبعاد يُسمى:',
          textEn: 'A party hat represents which 3D solid shape?',
          optionsAr: ['Cone (مخروط)', 'Cube (مكعب)', 'Sphere (كرة)', 'Cylinder (أسطوانة)'],
          optionsEn: ['Cone', 'Cube', 'Sphere', 'Cylinder'],
          correctIndex: 0,
          conceptTestedAr: 'التعرف على المجسمات ثلاثية الأبعاد',
          conceptTestedEn: '3D Solid Shape Identification',
          explanationAr: 'قبعة الحفلات تمثل شكلاً مخروطياً (Cone).',
          explanationEn: 'A party hat is shaped like a Cone.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m3-3',
          textAr: 'كم رأس (Vertex/Corner) في المستطيل (Rectangle)؟',
          textEn: 'How many vertices (corners) does a Rectangle have?',
          optionsAr: ['4', '3', '0', '6'],
          optionsEn: ['4', '3', '0', '6'],
          correctIndex: 0,
          conceptTestedAr: 'عد رؤوس الأشكال المستوية',
          conceptTestedEn: 'Counting Vertices on 2D Shapes',
          explanationAr: 'المستطيل له 4 رؤوس.',
          explanationEn: 'A rectangle has 4 corners/vertices.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: NUMBERS UP TO 99, PLACE VALUE (TENS & ONES), TIME & MONEY ──
  {
    id: 'p1-m-4',
    order: 4,
    titleAr: 'المحاضرة 4: الأعداد حتى 99، القيمة المكانية (الآحاد والعشرات Tens & Ones)، الوقت والنقود والقياس',
    titleEn: 'Lecture 4: Numbers up to 99, Place Value (Tens & Ones), 2-Digit Operations, Time & Money',
    subtitleAr: 'العد حتى 99، تحليل الأعداد إلى آحاد وعشرات، جمع وطرح عددين بدون إعادة تجميع (32 + 15)، قراءة الساعة بالكامل ونصف، والنقود المصرية (1, 5, 10, 20 جنيه)',
    subtitleEn: 'Master numbers to 99, Tens and Ones place value, 2-digit addition/subtraction without regrouping, telling time (o clock & half past), and Egyptian currency.',
    durationMinutes: 22,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Math (Language Schools Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 / Second Semester',
    unitTitleAr: 'الوحدة الرابعة: الأعداد حتى 99 والقيمة المكانية والقياس',
    unitTitleEn: 'Unit 4: Numbers to 99, Place Value, Time & Money',
    lessonNumberAr: 'الدرس 4: الآحاد والعشرات والوقت والنقود',
    lessonNumberEn: 'Lesson 4: Tens, Ones, Time, Money & Measurement',

    keyConceptsAr: [
      'الأعداد حتى 99: تتكون من خانتين (منزلتين): الآحاد (Ones) والعشرات (Tens).',
      'القيمة المكانية (Place Value): في العدد $47$ ➔ $4\\text{ Tens} = 40$ و $7\\text{ Ones} = 7$ ($40 + 7 = 47$).',
      'الجمع والطرح لرقمين بدون إعادة تجميع: نجمع الآحاد مع الآحاد والعشرات مع العشرات ($32 + 15 = 47$).',
      'الوقت والساعة (Telling Time): عقرب الساعات القصير وعقرب الدقائق الطويل (الساعة بالكامل: $4:00$ 4 o\'clock، والساعة والنصف: $4:30$ Half past 4).',
      'النقود المصرية (Egyptian Money): التعرف على فئات $1\\text{ Pound}, 5\\text{ Pounds}, 10\\text{ Pounds}, 20\\text{ Pounds}$.',
      'القياس بأدوات غير قياسية: قياس أطوال الأشياء بعدد مشابك الورق أو المكعبات.'
    ],
    keyConceptsEn: [
      'Numbers up to 99 composed of Ones and Tens.',
      'Place Value breakdown: e.g. 58 = 5 Tens (50) + 8 Ones (8).',
      '2-digit addition and subtraction without regrouping: Add ones to ones, tens to tens (e.g. 34 + 21 = 55).',
      'Telling Time: Hour hand (short) and minute hand (long) for O\'clock (:00) and Half Past (:30).',
      'Egyptian Currency: 1 LE, 5 LE, 10 LE, 20 LE notes.',
      'Non-standard measurement using paperclips and unit cubes.'
    ],

    conceptMapAr: [
      'الأعداد حتى 99 ➔ خانة الآحاد وخانة العشرات ➔ الجمع والطرح البسيط (آحاد+آحاد / عشرات+عشرات) ➔ قراءة الساعة والنقود'
    ],
    conceptMapEn: [
      'Numbers to 99 ➔ Tens & Ones Place Value ➔ 2-Digit Simple Operations ➔ Clock Time & Currency'
    ],

    learningOutcomesAr: [
      'أن يحلل التلميذ الأعداد حتى 99 إلى آحاد وعشرات بدقة.',
      'أن يجمع ويطرح أعداداً مكونة من رقمين بدون حمل أو استلاف ($43 + 24 = 67$).',
      'أن يقرأ الساعة العقربية والرقمية بالكامل (o\'clock) وبالنصف (half past).',
      'أن يتعرف على الفئات النقدية المصرية (1 و 5 و 10 و 20 جنيهاً) ويجري عمليات شراء بسيطة.'
    ],
    learningOutcomesEn: [
      'Decompose 2-digit numbers into Tens and Ones.',
      'Add and subtract 2-digit numbers without carrying/borrowing.',
      'Read analog and digital clocks to the hour and half-hour.',
      'Identify Egyptian banknotes (1, 5, 10, 20 LE) and calculate simple totals.'
    ],

    vocabulary: [
      {
        termAr: 'الآحاد (Ones)',
        termEn: 'Ones',
        definitionAr: 'الخانة الأولى على اليمين في العدد وتمثل الوحدات المفردة (من 0 إلى 9).',
        definitionEn: 'The single units place value position on the right.'
      },
      {
        termAr: 'العشرات (Tens)',
        termEn: 'Tens',
        definitionAr: 'الخانة الثانية وتمثل مجموعات من 10 (10, 20, 30, ... 90).',
        definitionEn: 'The place value position representing bundles of 10.'
      },
      {
        termAr: 'الساعة (Clock / Time)',
        termEn: 'Clock / O\'clock',
        definitionAr: 'أداة قياس الوقت، ولها عقرب قصير للساعات وعقرب طويل للدقائق.',
        definitionEn: 'An instrument used to measure and tell time.'
      },
      {
        termAr: 'الجنيه المصري (Pound - LE)',
        termEn: 'Egyptian Pound (LE)',
        definitionAr: 'العملة الرسمية المستخدمة في مصر لشراء الأشياء.',
        definitionEn: 'The official currency of Egypt used for transactions.'
      }
    ],

    warmupHookAr: 'إذا كان معك ورقة نقدية بـ 10 جنيهات وورقة بـ 5 جنيهات، كم جنيهاً معك؟ معك $10 + 5 = 15$ جنيهاً! وإذا نظرت إلى الساعة ووجدت العقرب الصغير عند 3 والطويل عند 12، فالساعة الآن الثالثة تماماً (3 o\'clock)! تعال نصبح أبطالاً في الآحاد والعشرات والساعة والنقود!',
    warmupHookEn: 'If you have a 10-Pound note and a 5-Pound note, you have 15 Pounds! When the short hand points to 3 and the long hand to 12, it is 3 o\'clock! Let us master Tens, Ones, Time, and Money!',

    mainContentAr: `
### 1. Place Value: Tens & Ones (الآحاد والعشرات)
* كل عدد مكون من رقمين ينقسم إلى:
  * **الآحاد (Ones):** على اليمين (وحدات مفردة).
  * **العشرات (Tens):** على اليسار (حزم من 10).
  * **مثال:** في العدد **$63$**:
    * $3\\text{ Ones} = 3$
    * $6\\text{ Tens} = 60$
    * $63 = 60 + 3$

---

### 2. 2-Digit Addition & Subtraction (دون إعادة تجميع)
* **الجمع:** نجمع الآحاد أولاً، ثم نجمع العشرات:
  $$\\begin{matrix} 32 \\\\ + \\; 15 \\\\ \\hline 47 \\end{matrix} \\quad (2+5=7 , 3+1=4)$$
* **الطرح:** نطرح الآحاد أولاً، ثم العشرات:
  $$\\begin{matrix} 58 \\\\ - \\; 23 \\\\ \\hline 35 \\end{matrix} \\quad (8-3=5 , 5-2=3)$$

---

### 3. Telling Time (قراءة الساعة)
* **O'clock (الساعة تماماً):** يشير العقرب الطويل إلى 12 ➔ $5:00$ (5 o'clock).
* **Half past (الساعة والنصف):** يشير العقرب الطويل إلى 6 ➔ $5:30$ (Half past 5).

---

### 4. Egyptian Money (النقود المصرية)
* فئات النقود: **$1\\text{ LE} , 5\\text{ LE} , 10\\text{ LE} , 20\\text{ LE}$**.
* $10\\text{ LE} = 5\\text{ LE} + 5\\text{ LE}$.
    `,
    mainContentEn: `
### 1. Place Value: Tens & Ones
* Number **74**:
  * 4 Ones = 4
  * 7 Tens = 70
  * $74 = 70 + 4$

### 2. 2-Digit Addition without Regrouping
* $41 + 25$:
  * Ones: $1 + 5 = 6$
  * Tens: $4 + 2 = 6$
  * Result: **66**

### 3. Telling Time
* Minute hand on **12** = **O'clock** (e.g. 2:00)
* Minute hand on **6** = **Half past** (e.g. 2:30)

### 4. Money (Egyptian Pounds - LE)
* Banknotes: 1 LE, 5 LE, 10 LE, 20 LE.
    `,

    diagramType: 'place_value_clock_diagram',
    diagramData: {
      type: 'tens_ones_clock_chart',
      title: 'الآحاد والعشرات وقراءة الساعة والنقود (Tens, Ones, Time & Money)',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <!-- Tens & Ones Block -->
        <g transform="translate(25, 20)">
          <rect width="160" height="70" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="1.5"/>
          <text x="80" y="25" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">Place Value: 53</text>
          <text x="45" y="50" fill="#f43f5e" font-size="14" font-weight="bold">5 Tens</text>
          <text x="45" y="65" fill="#94a3b8" font-size="10">( = 50 )</text>
          <text x="115" y="50" fill="#34d399" font-size="14" font-weight="bold">3 Ones</text>
          <text x="115" y="65" fill="#94a3b8" font-size="10">( = 3 )</text>
        </g>

        <!-- Analog Clock -->
        <g transform="translate(290, 55)">
          <circle cx="0" cy="0" r="32" fill="none" stroke="#fbbf24" stroke-width="2.5"/>
          <circle cx="0" cy="0" r="3" fill="#fbbf24"/>
          <!-- 12, 3, 6, 9 marks -->
          <line x1="0" y1="-30" x2="0" y2="-24" stroke="#fbbf24" stroke-width="2"/>
          <line x1="0" y1="30" x2="0" y2="24" stroke="#fbbf24" stroke-width="2"/>
          <line x1="30" y1="0" x2="24" y2="0" stroke="#fbbf24" stroke-width="2"/>
          <line x1="-30" y1="0" x2="-24" y2="0" stroke="#fbbf24" stroke-width="2"/>
          <!-- Hands: 4:00 (Short to 4, Long to 12) -->
          <line x1="0" y1="0" x2="0" y2="-22" stroke="#38bdf8" stroke-width="2.5"/>
          <line x1="0" y1="0" x2="14" y2="12" stroke="#f43f5e" stroke-width="3"/>
          <text x="0" y="48" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">4:00 (4 o'clock)</text>
        </g>

        <!-- Money Banner -->
        <rect x="25" y="110" width="350" height="50" rx="8" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1.5"/>
        <text x="200" y="132" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">Egyptian Money (النقود): 1 LE • 5 LE • 10 LE • 20 LE</text>
        <text x="200" y="150" fill="#cbd5e1" font-size="11" text-anchor="middle">10 LE + 5 LE + 1 LE = 16 LE (ستة عشر جنيهاً)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال تفصيلي: جمع عددين من رقمين بدون إعادة تجميع',
        titleEn: 'Example: 2-Digit Addition without Regrouping',
        problemAr: 'احسب ناتج: $43 + 24$.',
        problemEn: 'Calculate: 43 + 24.',
        stepsAr: [
          'الخطوة 1: نجمع الآحاد أولاً ➔ $3 + 4 = 7$ في خانة الآحاد.',
          'الخطوة 2: نجمع العشرات ثانياً ➔ $4 + 2 = 6$ في خانة العشرات.',
          'الخطوة 3: الناتج الكلي هو **67**.'
        ],
        stepsEn: [
          'Step 1: Add the Ones: 3 + 4 = 7.',
          'Step 2: Add the Tens: 4 + 2 = 6.',
          'Step 3: Total is 67.'
        ],
        finalAnswerAr: '$43 + 24 = 67$',
        finalAnswerEn: '43 + 24 = 67'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1m4-1',
        problemAr: 'حدد القيمة المكانية للرقم 8 في العدد 85.',
        problemEn: 'What is the place value of digit 8 in 85?',
        solutionStepsAr: [
          'الرقم 5 في خانة الآحاد (5).',
          'الرقم 8 في خانة العشرات وقيمته 80 (8 Tens = 80).'
        ],
        finalAnswerAr: 'الرقم 8 في خانة العشرات (Tens) وقيمته 80.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1m4-1',
        questionAr: 'عندما يشير عقرب الساعات الصغير إلى 6 والعقرب الطويل إلى 12، فإن الساعة تكون:',
        questionEn: 'When the short hand points to 6 and the long hand to 12, the time is:',
        optionsAr: ['6:00 (6 o\'clock)', '12:00 (12 o\'clock)', '6:30 (Half past 6)', '12:30'],
        optionsEn: ['6:00 (6 o\'clock)', '12:00 (12 o\'clock)', '6:30 (Half past 6)', '12:30'],
        correctIndex: 0,
        explanationAr: 'العقرب الصغير على 6 والطويل على 12 تعني الساعة السادسة تماماً (6:00).',
        explanationEn: 'Short hand on 6 and long hand on 12 indicates exactly 6 o\'clock.'
      }
    ],

    assessment: {
      id: 'quiz-p1-m4',
      titleAr: 'اختبار بطل الماث: الآحاد والعشرات والساعة والنقود',
      titleEn: 'Grade 1 Place Value, Time & Money Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-m4-1',
          textAr: 'العدد المكون من 7 عشرات (7 Tens) و 2 آحاد (2 Ones) هو:',
          textEn: 'The number with 7 Tens and 2 Ones is:',
          optionsAr: ['72', '27', '70', '20'],
          optionsEn: ['72 (Seventy-two)', '27', '70', '20'],
          correctIndex: 0,
          conceptTestedAr: 'تكوين العدد من الآحاد والعشرات',
          conceptTestedEn: 'Building 2-Digit Numbers from Tens and Ones',
          explanationAr: '7 عشرات (70) + 2 آحاد (2) = 72.',
          explanationEn: '7 Tens (70) + 2 Ones (2) = 72.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m4-2',
          textAr: 'ناتج طرح $65 - 23$ يساوي:',
          textEn: 'What is 65 - 23?',
          optionsAr: ['42', '45', '32', '48'],
          optionsEn: ['42 (Forty-two)', '45', '32', '48'],
          correctIndex: 0,
          conceptTestedAr: 'طرح عددين من رقمين بدون إعادة تجميع',
          conceptTestedEn: '2-Digit Subtraction without Regrouping',
          explanationAr: 'الآحاد: 5 - 3 = 2. العشرات: 6 - 2 = 4. الناتج = 42.',
          explanationEn: 'Ones: 5 - 3 = 2. Tens: 6 - 2 = 4. Total = 42.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-m4-3',
          textAr: 'مع أحمد ورقة 10 جنيهات وورقة 5 جنيهات وقطعة 1 جنيه. كم جنيهاً معه؟',
          textEn: 'Ahmed has 10 LE + 5 LE + 1 LE. How much money does he have?',
          optionsAr: ['16 جنيهاً (16 LE)', '15 جنيهاً', '17 جنيهاً', '20 جنيهاً'],
          optionsEn: ['16 LE', '15 LE', '17 LE', '20 LE'],
          correctIndex: 0,
          conceptTestedAr: 'حساب النقود البسيطة',
          conceptTestedEn: 'Counting Egyptian Currency Notes',
          explanationAr: '10 + 5 + 1 = 16 جنيهاً.',
          explanationEn: '10 + 5 + 1 = 16 LE.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
