import type { Lecture } from '../types';

// PRIMARY MATHEMATICS — GRADE 5 (رياضيات الصف الخامس الابتدائي - منهج التعليم 2.0 والمسارات المعتمدة)
// ============================================================================
// Based on official Egyptian Ministry of Education Edu 2.0 & Saudi Ministry of Education G5 standards.
// Covers:
// 1. Decimals to Thousandths: Place Value, Comparison & Rounding (الكسور العشرية والتقريب)
// 2. Decimal Operations: Addition, Subtraction, Multiplication & Division (عمليات الكسور العشرية)
// 3. Unlike Denominator Fractions: LCM, Addition, Subtraction & Division (الكسور الاعتيادية وم.م.أ)
// 4. Geometry & Measurement: Volume of Rectangular Prisms & Coordinate Plane (الحجم والمستوى الإحداثي)

export const PRIMARY_MATH_G5_LECTURES: Lecture[] = [
  // ── LECTURE 1: DECIMALS TO THOUSANDTHS ──
  {
    id: 'pmath-g5-1',
    order: 1,
    titleAr: 'المحاضرة 1: الكسور العشرية حتى الجزء من ألف (القيمة المكانية والتقريب والمقارنة)',
    titleEn: 'Lecture 1: Decimals to Thousandths (Place Value, Rounding & Ordering)',
    subtitleAr: 'استكشاف الأجزاء من عشرة ومئة وألف، قراءة وكتابة الأعداد العشرية، والتقريب لأقرب جزء، والمقارنة والترتيب.',
    subtitleEn: 'Explore tenths, hundredths and thousandths, read and write decimals in standard/expanded forms, and round.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - الرياضيات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Mathematics (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: القيمة المكانية للأعداد العشرية',
    unitTitleEn: 'Unit 1: Decimal Place Value',
    lessonNumberAr: 'الدرس 1: الكسور العشرية حتى الجزء من ألف',
    lessonNumberEn: 'Lesson 1: Thousandths & Decimals',

    warmupHookAr: 'في سباقات الجري الأولمبية للمسافات القصيرة (100 متر)، يُحسم الفوز بالذهب بفارق أجزاء من الألف من الثانية (مثل: 9.815 ثانية مقابل 9.818 ثانية)! كيف نقرأ هذه الأجزاء الدقيقة جداً من الواحد الصحيح؟ وكيف نقارن بينها بدقة لا تحتمل الخطأ؟',
    warmupHookEn: 'In Olympic sprints, victory is decided by thousandths of a second (e.g. 9.815s vs 9.818s)! How do we read and order these tiny fractional parts of a whole with supreme precision?',

    learningOutcomesAr: [
      'أن يقرأ الطالب ويكتب الكسور والأعداد العشرية حتى الجزء من ألف بالصيغ المختلفة (القياسية، اللفظية، والممتدة).',
      'أن يحدد القيمة المكانية وقيمة الرقم في الأعداد العشرية بدقة.',
      'أن يقارن بين كسرين عشريين ويرتب مجموعة أعداد عشرية تصاعدياً وتنازلياً بمساواة الأجزاء العشرية.',
      'أن يقرب الأعداد العشرية لأقرب وحدة، أو جزء من عشرة، أو جزء من مئة بقواعد التقريب الصحيحة.'
    ],
    learningOutcomesEn: [
      'Read and write decimals to thousandths in standard, word, and expanded forms.',
      'Identify place value and numerical value of any decimal digit.',
      'Compare and order decimals by aligning decimal places.',
      'Round decimals to the nearest whole, tenth, or hundredth.'
    ],

    vocabulary: [
      {
        termAr: 'الجزء من ألف (Thousandth)',
        termEn: 'Thousandth (0.001)',
        definitionAr: 'تقسيم الواحد الصحيح إلى 1000 جزء متساوٍ، ويمثل الخانة الثالثة على يمين العلامة العشرية.',
        definitionEn: 'One part in a thousand equal parts, occupying the third position right of the decimal point.'
      },
      {
        termAr: 'الصيغة الممتدة (Expanded Form)',
        termEn: 'Expanded Form',
        definitionAr: 'كتابة العدد في صورة مجموع قيم أرقامه (مثال: 5.342 = 5 + 0.3 + 0.04 + 0.002).',
        definitionEn: 'Expressing a number as the sum of the values of each individual digit.'
      },
      {
        termAr: 'قواعد التقريب (Rounding Rules)',
        termEn: 'Rounding Rules',
        definitionAr: 'إذا كان الرقم على يمين الخانة المستهدفة 5 فأكثر نضيف 1 للخانة، وإذا كان أقل من 5 نحذفه دون زيادة.',
        definitionEn: 'If the subsequent digit is 5 or greater round up; if less than 5 maintain the target digit.'
      }
    ],

    keyConceptsAr: [
      'العلامة العشرية تفصل بين الأعداد الصحيحة (يساراً) والأجزاء العشرية (يميناً).',
      'إضافة أصفار على يمين آخر رقم في الكسر العشري لا يغير من قيمته: 0.5 = 0.50 = 0.500.',
      'عند مقارنة الكسور العشرية: نساوي أولاً عدد الخانات بوضع أصفار على اليمين ثم نقارن من اليسار إلى اليمين.'
    ],
    keyConceptsEn: [
      'The decimal point separates whole numbers on the left from fractional parts on the right.',
      'Trailing zeroes after decimal digits do not change value: 0.5 = 0.50 = 0.500.',
      'Align decimal places with placeholder zeroes before comparing digits from left to right.'
    ],

    summaryAr: 'أتقنا في هذا الدرس مفهوم الكسور العشرية حتى الجزء من ألف، والتحويل بين الصيغ العددية، وتطبيقات التقريب والمقارنة الحياتية.',
    summaryEn: 'We mastered decimals to thousandths, expanded representations, comparison strategies, and rounding algorithms.',

    mainContentAr: `
### 1. جدول القيمة المكانية للأعداد العشرية
يتكون العدد العشري من:
- **أعداد صحيحة (يسار العلامة):** أحاد، عشرات، مئات، ألوف...
- **العلامة العشرية:** تفصل بين الصحيح والأجزاء.
- **الأجزاء العشرية (يمين العلامة):**
  - الخانة الأولى: **جزء من عشرة** ($\\frac{1}{10} = 0.1$).
  - الخانة الثانية: **جزء من مئة** ($\\frac{1}{100} = 0.01$).
  - الخانة الثالثة: **جزء من ألف** ($\\frac{1}{1000} = 0.001$).
- **مثال:** العدد $24.785$:
  - $2$: عشرات (قيمته 20).
  - $4$: أحاد (قيمته 4).
  - $7$: جزء من عشرة (قيمته 0.7).
  - $8$: جزء من مئة (قيمته 0.08).
  - $5$: جزء من ألف (قيمته 0.005).

---

### 2. مقارنة وترتيب الكسور العشرية
لمقارنة $0.6$ و $0.45$:
1. نساوي عدد الخانات العشرية بإضافة صفر على يمين $0.6$ ليصبح $0.60$.
2. الآن نقارن: $60$ جزءاً من مئة أكبر من $45$ جزءاً من مئة $\\implies 0.6 > 0.45$.

---

### 3. تقريب الكسور العشرية
- **لأقرب جزء من عشرة:** ننظر لخانة الجزء من مئة:
  - $3.47 \\implies$ الرقم 7 كريم ($\\ge 5$) $\\implies$ يقرب إلى $3.5$.
  - $6.82 \\implies$ الرقم 2 بخيل ($< 5$) $\\implies$ يقرب إلى $6.8$.
- **لأقرب جزء من مئة:** ننظر لخانة الجزء من ألف:
  - $9.146 \\implies$ يقرب إلى $9.15$.
`,
    assessment: {
      id: 'assess-math5-1',
      titleAr: 'تقييم المحاضرة 1: الكسور العشرية والتقريب',
      titleEn: 'Assessment 1: Decimals & Rounding',
      passingScore: 80,
      questions: [
        {
          id: 'q-m5-1-1',
          textAr: 'ما قيمة الرقم 7 في العدد العشري: 15.372؟',
          textEn: 'What is the value of digit 7 in 15.372?',
          optionsAr: ['7', '0.7', '0.07', '0.007'],
          optionsEn: ['7', '0.7', '0.07', '0.007'],
          correctIndex: 2,
          conceptTestedAr: 'تحديد قيمة الرقم في الكسر العشري',
          conceptTestedEn: 'Identifying Decimal Digit Value',
          difficulty: 'easy',
          explanationAr: 'الرقم 7 يقع في خانة الجزء من مئة، فقيمته العددية هي 0.07.',
          explanationEn: 'Digit 7 sits in the hundredths place, with a numerical value of 0.07.'
        },
        {
          id: 'q-m5-1-2',
          textAr: 'عند تقريب العدد 8.468 لأقرب جزء من مئة، يكون الناتج:',
          textEn: 'Rounding 8.468 to the nearest hundredth yields:',
          optionsAr: ['8.46', '8.47', '8.5', '8.469'],
          optionsEn: ['8.46', '8.47', '8.5', '8.469'],
          correctIndex: 1,
          conceptTestedAr: 'التقريب لأقرب جزء من مئة',
          conceptTestedEn: 'Rounding to Nearest Hundredth',
          difficulty: 'medium',
          explanationAr: 'خانة الجزء من ألف بها 8 (أكبر من 5)، فنضيف 1 لخانة الجزء من مئة (6 + 1 = 7) فيصبح 8.47.',
          explanationEn: 'The thousandth digit is 8 (>=5), rounding 6 up to 7, resulting in 8.47.'
        },
        {
          id: 'q-m5-1-3',
          textAr: 'أي العلاقات الرياضية التالية صحيحة؟',
          textEn: 'Which comparison statement is mathematically correct?',
          optionsAr: ['0.35 > 0.4', '0.7 = 0.07', '0.8 > 0.79', '0.05 > 0.5'],
          optionsEn: ['0.35 > 0.4', '0.7 = 0.07', '0.8 > 0.79', '0.05 > 0.5'],
          correctIndex: 2,
          conceptTestedAr: 'مقارنة الكسور العشرية',
          conceptTestedEn: 'Comparing Decimals',
          difficulty: 'easy',
          explanationAr: '0.8 تساوي 0.80، و0.80 أكبر من 0.79.',
          explanationEn: '0.8 equals 0.80, which is strictly greater than 0.79.'
        }
      ]
    }
  },

  // ── LECTURE 2: DECIMAL OPERATIONS ──
  {
    id: 'pmath-g5-2',
    order: 2,
    titleAr: 'المحاضرة 2: العمليات الحسابية على الأعداد العشرية (الجمع والطرح والضرب والقسمة)',
    titleEn: 'Lecture 2: Decimal Operations (Addition, Subtraction, Multiplication & Division)',
    subtitleAr: 'استراتيجيات جمع وطرح الكسور العشرية بالمحاذاة الرأسية، وضرب الكسور العشرية، وقسمتها على قوى العدد 10.',
    subtitleEn: 'Master vertical decimal addition and subtraction, multiplication algorithms, and division by powers of 10.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - الرياضيات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Mathematics (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: العمليات على الأعداد العشرية',
    unitTitleEn: 'Unit 2: Operations on Decimals',
    lessonNumberAr: 'الدرس 2: جمع وطرح وضرب وقسمة الكسور العشرية',
    lessonNumberEn: 'Lesson 2: Decimal Computation',

    warmupHookAr: 'إذا اشتريت وجبة طعام بسعر 45.75 جنيهاً ومشروباً بسعر 12.50 جنيهاً، ودفعت للبائع ورقة فئة 100 جنيه. كيف يحسب البائع إجمالي الحساب بدقة؟ وكم جنيهاً سيعيد لك كباقٍ؟ هذه العمليات اليومية تعتمد كلياً على جمع وطرح الكسور العشرية!',
    warmupHookEn: 'If a meal costs $45.75 and a drink costs $12.50, and you pay with a $100 bill, how do you compute total cost and change? Decimal addition and subtraction power everyday commerce!',

    learningOutcomesAr: [
      'أن ينفذ الطالب عمليات جمع وطرح الكسور والأعداد العشرية بمحاذاة العلامات العشرية واستخدام الأصفار لحفظ المنازل.',
      'أن يضرب الكسور العشرية في قوى العدد 10 (10، 100، 1000) بتحريك العلامة لليمين، والقسمة بتحريكها لليسار.',
      'أن يطبق خوارزمية ضرب كسرين عشريين بعد المنازل العشرية في العوامل ووضع العلامة في الناتج.',
      'أن يحل مسائل كلامية متعددة الخطوات تتضمن نقوداً وقياسات عشرية.'
    ],
    learningOutcomesEn: [
      'Execute vertical decimal addition and subtraction by aligning points and utilizing placeholder zeroes.',
      'Multiply and divide decimals by powers of 10 by shifting the decimal point right or left.',
      'Apply standard decimal multiplication by summing decimal places in the product.',
      'Solve multi-step word problems involving decimals and currencies.'
    ],

    vocabulary: [
      {
        termAr: 'محاذاة العلامات (Aligning Decimals)',
        termEn: 'Aligning Decimal Points',
        definitionAr: 'ترتيب الأعداد رأسياً بحيث تكون كل علامة عشرية تحت الأخرى مباشرة قبل الجمع أو الطرح.',
        definitionEn: 'Arranging numbers vertically so that decimal points line up directly before calculation.'
      },
      {
        termAr: 'الضرب في قوى 10 (Multiplication by Powers of 10)',
        termEn: 'Multiplication by Powers of 10',
        definitionAr: 'تحريك العلامة العشرية جهة اليمين بعدد أصفار القوة (حركة واحدة عند الضرب في 10، حركتان في 100، 3 حركات في 1000).',
        definitionEn: 'Shifting the decimal point to the right according to the number of zeroes.'
      }
    ],

    keyConceptsAr: [
      'عند الجمع والطرح: ضع العلامة فوق العلامة وساوِ الخانات بالأصفار.',
      'عند ضرب كسرين عشريين: اضرب كأنك تضرب أعداداً صحيحة ثم عد الخانات العشرية في العددين معاً وضع العلامة في الناتج.',
      'عند القسمة على 10 أو 100 أو 1000: تتحرك العلامة العشرية جهة اليسار.'
    ],
    keyConceptsEn: [
      'For addition/subtraction: align decimal points vertically and balance missing places with zeroes.',
      'For decimal multiplication: multiply as integers, then insert the decimal point counting total decimal digits from both factors.',
      'Dividing by 10, 100, or 1000 shifts the decimal point leftward.'
    ],

    summaryAr: 'تعلمنا في هذا الدرس خوارزميات العمليات الحسابية الأربع على الكسور العشرية، وقواعد تحريك العلامة العشرية مع قوى العشرة، وحل المسائل اللفظية.',
    summaryEn: 'We mastered all four operations with decimals, decimal point shifting rules with powers of 10, and real-world word problems.',

    mainContentAr: `
### 1. جمع وطرح الكسور العشرية
- **الخطوة الذهبية:** محاذاة العلامات العشرية فوق بعضها تماماً ومساواة عدد الخانات بالأصفار.
- **مثال جمع:** $14.6 + 5.85$:
  \`\`\`
    14.60
  + 05.85
  --------
    20.45
  \`\`\`
- **مثال طرح:** $20 - 7.34$:
  \`\`\`
    20.00
  - 07.34
  --------
    12.66
  \`\`\`

---

### 2. الضرب والقسمة في قوى العدد 10
- **عند الضرب:** تتحرك العلامة جهة **اليمين**:
  - $3.45 \\times 10 = 34.5$
  - $0.62 \\times 100 = 62$
  - $1.5 \\times 1000 = 1500$ (نضع أصفاراً عند نفاد الأرقام).
- **عند القسمة:** تتحرك العلامة جهة **اليسار**:
  - $45.8 \\div 10 = 4.58$
  - $230 \\div 100 = 2.3$

---

### 3. خوارزمية ضرب كسرين عشريين
اضرب كأنه لا توجد علامات، ثم عد إجمالي المنازل العشرية:
- احسب: $0.3 \\times 0.04$:
  - نضرب الأرقام المجردة: $3 \\times 4 = 12$.
  - عدد الخانات العشرية: خانة واحدة في $0.3$ وخانتان في $0.04$ $\\implies 1 + 2 = 3$ خانات.
  - نضع العلامة بعد 3 أرقام: $0.012$.
`,
    assessment: {
      id: 'assess-math5-2',
      titleAr: 'تقييم المحاضرة 2: عمليات الكسور العشرية',
      titleEn: 'Assessment 2: Decimal Operations',
      passingScore: 80,
      questions: [
        {
          id: 'q-m5-2-1',
          textAr: 'ما ناتج جمع: 4.25 + 3.8؟',
          textEn: 'What is 4.25 + 3.8?',
          optionsAr: ['7.33', '8.05', '7.05', '8.1'],
          optionsEn: ['7.33', '8.05', '7.05', '8.1'],
          correctIndex: 1,
          conceptTestedAr: 'جمع الكسور العشرية بمحاذاة العلامات',
          conceptTestedEn: 'Adding Decimals with Alignment',
          difficulty: 'easy',
          explanationAr: '4.25 + 3.80 = 8.05.',
          explanationEn: '4.25 + 3.80 = 8.05.'
        },
        {
          id: 'q-m5-2-2',
          textAr: 'ما حاصل ضرب: 0.6 × 0.5؟',
          textEn: 'What is 0.6 × 0.5?',
          optionsAr: ['3.0', '0.3', '0.03', '30'],
          optionsEn: ['3.0', '0.3', '0.03', '30'],
          correctIndex: 1,
          conceptTestedAr: 'ضرب الكسور العشرية',
          conceptTestedEn: 'Multiplying Decimals',
          difficulty: 'medium',
          explanationAr: '6 × 5 = 30، ولدينا خانتان عشريتان فيكون الناتج 0.30 أي 0.3.',
          explanationEn: '6 × 5 = 30; with two decimal places it becomes 0.30 = 0.3.'
        },
        {
          id: 'q-m5-2-3',
          textAr: 'ما ناتج: 42.5 ÷ 100؟',
          textEn: 'What is 42.5 / 100?',
          optionsAr: ['425', '4.25', '0.425', '0.0425'],
          optionsEn: ['425', '4.25', '0.425', '0.0425'],
          correctIndex: 2,
          conceptTestedAr: 'القسمة على 100 وتحريك العلامة لليسار',
          conceptTestedEn: 'Dividing by 100 & Leftward Shift',
          difficulty: 'easy',
          explanationAr: 'عند القسمة على 100 تتحرك العلامة خطوتين لليسار فيصبح الناتج 0.425.',
          explanationEn: 'Dividing by 100 shifts the decimal point two places left: 0.425.'
        }
      ]
    }
  },

  // ── LECTURE 3: UNLIKE DENOMINATOR FRACTIONS & LCM ──
  {
    id: 'pmath-g5-3',
    order: 3,
    titleAr: 'المحاضرة 3: جمع وطرح الكسور الاعتيادية غير متحدة المقام والمضاعف المشترك الأصغر (م.م.أ)',
    titleEn: 'Lecture 3: Fractions with Unlike Denominators & LCM',
    subtitleAr: 'توحيد المقامات باستخدام المضاعف المشترك الأصغر (م.م.أ)، جمع وطرح الكسور والأعداد الكسرية، وضرب وقسمة الكسور.',
    subtitleEn: 'Finding common denominators with LCM, adding and subtracting unlike fractions, and fraction multiplication.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - الرياضيات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Mathematics (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'الوحدة الثالثة: جمع وطرح الكسور الاعتيادية',
    unitTitleEn: 'Unit 3: Operations on Common Fractions',
    lessonNumberAr: 'الدرس 3: جمع وطرح الكسور غير متحدة المقام',
    lessonNumberEn: 'Lesson 3: Unlike Denominator Fractions',

    warmupHookAr: 'إذا أكلت نصف فطيرة بيتزا (1/2)، وأكل صديقك ثلث الفطيرة (1/3)، كم أكلتما معاً؟ لا يمكنك جمع 1+1 على 2+3 مباشرة! لأن قطع البيتزا ليست متساوية الحجم! كيف نوحد المقامات لنجمع قطعهما معاً؟ باستخدام السلاح الرياضي السحري: المضاعف المشترك الأصغر (م.م.أ)!',
    warmupHookEn: 'If you ate 1/2 of a pizza and your friend ate 1/3, how much did you eat together? You cannot add numerators directly because slice sizes differ! How do we unite denominators? Using the LCM!',

    learningOutcomesAr: [
      'أن يجد الطالب المضاعف المشترك الأصغر (م.م.أ) لمقامين مختلفين لتوحيد المقامات.',
      'أن يعيد كتابة الكسور الاعتيادية بمقام مشترك مكافئ.',
      'أن يجري عمليتي جمع وطرح الكسور والأعداد الكسرية غير متحدة المقام ويضع الناتج في أبسط صورة.',
      'أن يضرب الكسور الاعتيادية (بسط × بسط ومقام × مقام) ويقسم كسر على عدد صحيح.'
    ],
    learningOutcomesEn: [
      'Find the Least Common Multiple (LCM) of differing denominators.',
      'Rewrite fractions using a shared common denominator.',
      'Add and subtract fractions and mixed numbers with unlike denominators, simplifying answers.',
      'Multiply fractions and divide fractions by whole numbers.'
    ],

    vocabulary: [
      {
        termAr: 'المضاعف المشترك الأصغر (م.م.أ - LCM)',
        termEn: 'Least Common Multiple (LCM)',
        definitionAr: 'أصغر عدد صحيح موجب يقبل القسمة على كلا المقامين دون باقٍ، ويستخدم لتوحيد المقامات.',
        definitionEn: 'The smallest positive integer divisible by both denominators without remainder.'
      },
      {
        termAr: 'الكسور المتكافئة (Equivalent Fractions)',
        termEn: 'Equivalent Fractions',
        definitionAr: 'كسور تمثل نفس القيمة رغم اختلاف البسط والمقام (مثل: 1/2 = 2/4 = 3/6).',
        definitionEn: 'Fractions representing identical values despite having different numerators and denominators.'
      }
    ],

    keyConceptsAr: [
      'لا يمكن جمع أو طرح كسرين إلا إذا كان لهما نفس المقام (أجزاء متساوية الحجم).',
      'لجمع 1/2 + 1/3: م.م.أ للعددين 2 و 3 هو 6. نحول: 1/2 = 3/6، و 1/3 = 2/6، ثم نجمع: 3/6 + 2/6 = 5/6.',
      'ضرب الكسور: نضرب البسط في البسط، والمقام في المقام، ونبسط الناتج إن أمكن.'
    ],
    keyConceptsEn: [
      'Fractions cannot be added or subtracted unless their denominators are identical.',
      'To add 1/2 + 1/3: LCM(2, 3) = 6. Equivalent fractions: 3/6 + 2/6 = 5/6.',
      'Multiplying fractions: multiply numerators together, denominators together, and simplify.'
    ],

    summaryAr: 'شرحنا في هذا الدرس طريقة إيجاد م.م.أ لتوحيد المقامات، وخطوات جمع وطرح الكسور الاعتيادية غير متحدة المقام، وعمليات ضرب الكسور وتبسيطها.',
    summaryEn: 'We learned how to calculate LCM to establish common denominators, add/subtract unlike fractions, and multiply fractions.',

    mainContentAr: `
### 1. إيجاد المقام المشترك الأصغر (م.م.أ)
لجمع كسرين مثل $\\frac{1}{4} + \\frac{2}{3}$:
1. مضاعفات الـ 4: 4، 8، **12**، 16...
2. مضاعفات الـ 3: 3، 6، 9، **12**، 15...
3. إذن م.م.أ للمقامين هو **12**.
4. تحويل الكسور:
   - $\\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$
   - $\\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$
5. نجمع: $\\frac{3}{12} + \\frac{8}{12} = \\frac{11}{12}$.

---

### 2. ضرب الكسور الاعتيادية
قاعدة الضرب بسيطة ومباشرة ولا تحتاج لتوحيد المقامات:
$$\\frac{a}{b} \\times \\frac{c}{d} = \\frac{a \\times c}{b \\times d}$$
- **مثال:** $\\frac{2}{5} \\times \\frac{3}{4} = \\frac{2 \\times 3}{5 \\times 4} = \\frac{6}{20} = \\frac{3}{10}$.

---

### 3. قسمة الكسور الاعتيادية
نستخدم قاعدة "ثَبّت، غَيّر، اقلِب" (Keep, Change, Flip):
$$\\frac{1}{2} \\div 3 = \\frac{1}{2} \\times \\frac{1}{3} = \\frac{1}{6}$$
`,
    assessment: {
      id: 'assess-math5-3',
      titleAr: 'تقييم المحاضرة 3: الكسور الاعتيادية وم.م.أ',
      titleEn: 'Assessment 3: Unlike Fractions & LCM',
      passingScore: 80,
      questions: [
        {
          id: 'q-m5-3-1',
          textAr: 'ما ناتج جمع: 1/2 + 1/4؟',
          textEn: 'What is 1/2 + 1/4?',
          optionsAr: ['2/6', '3/4', '2/4', '1/6'],
          optionsEn: ['2/6', '3/4', '2/4', '1/6'],
          correctIndex: 1,
          conceptTestedAr: 'جمع الكسور بتوحيد المقامات',
          conceptTestedEn: 'Adding Unlike Fractions',
          difficulty: 'easy',
          explanationAr: 'نوحد المقام إلى 4: 1/2 = 2/4، فيكون 2/4 + 1/4 = 3/4.',
          explanationEn: 'Convert 1/2 to 2/4: 2/4 + 1/4 = 3/4.'
        },
        {
          id: 'q-m5-3-2',
          textAr: 'ما حاصل ضرب: 3/5 × 2/7؟',
          textEn: 'What is 3/5 × 2/7?',
          optionsAr: ['6/35', '5/12', '6/12', '1/2'],
          optionsEn: ['6/35', '5/12', '6/12', '1/2'],
          correctIndex: 0,
          conceptTestedAr: 'ضرب الكسور الاعتيادية',
          conceptTestedEn: 'Multiplying Common Fractions',
          difficulty: 'easy',
          explanationAr: 'نضرب البسط في البسط (3 × 2 = 6) والمقام في المقام (5 × 7 = 35) فيكون 6/35.',
          explanationEn: 'Multiply numerators (3×2=6) and denominators (5×7=35) = 6/35.'
        },
        {
          id: 'q-m5-3-3',
          textAr: 'ما هو المضاعف المشترك الأصغر (م.م.أ) للمقامين 6 و 8؟',
          textEn: 'What is the LCM of denominators 6 and 8?',
          optionsAr: ['48', '14', '24', '12'],
          optionsEn: ['48', '14', '24', '12'],
          correctIndex: 2,
          conceptTestedAr: 'إيجاد م.م.أ',
          conceptTestedEn: 'Finding LCM',
          difficulty: 'medium',
          explanationAr: 'أصغر مضاعف مشترك بين 6 و 8 هو 24 (6×4=24، 8×3=24).',
          explanationEn: 'The smallest shared multiple of 6 and 8 is 24.'
        }
      ]
    }
  },

  // ── LECTURE 4: VOLUME & COORDINATE PLANE ──
  {
    id: 'pmath-g5-4',
    order: 4,
    titleAr: 'المحاضرة 4: القياس والهندسة (حجم متوازي المستطيلات والمكعب، والمستوى الإحداثي)',
    titleEn: 'Lecture 4: Geometry & Measurement (Volume of Prisms & Coordinate Plane)',
    subtitleAr: 'استكشاف الأشكال ثلاثية الأبعاد، حساب الحجم بوحدات السنتيمتر المكعب، وقراءة الأزواج المرتبة (س، ص) على المستوى الإحداثي.',
    subtitleEn: 'Calculate volumes of rectangular prisms and cubes (L×W×H), and plot ordered pairs on coordinate grids.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - الرياضيات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Mathematics (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'الوحدة الرابعة: الحجم والمستوى الإحداثي',
    unitTitleEn: 'Unit 4: Volume & Coordinate Geometry',
    lessonNumberAr: 'الدرس 4: الحجم والمستوى الإحداثي',
    lessonNumberEn: 'Lesson 4: Volume & Coordinate Grids',

    warmupHookAr: 'إذا أردت معرفة كمية المياه التي تلزم لملء حوض سمك زجاجي بالكامل، أو كم صندوقاً صغيراً يمكن رصه داخل شاحنة نقل عملاقة، ما الخاصية الهندسية التي تقيس الحيز الداخلي ثلاثي الأبعاد؟ إنه "الحجم"! وكيف تحدد سفينة موقعها الدقيق في عرض البحر؟ باستخدام "المستوى الإحداثي" والأزواج المرتبة!',
    warmupHookEn: 'How do you determine the water capacity of an aquarium or how many boxes fit in a cargo ship? Through Volume! And how do ships pinpoint their coordinates at sea? Using Coordinate Grids and ordered pairs!',

    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم الحجم كمقدار الحيز ثلاثي الأبعاد الذي يشغله الجسم.',
      'أن يحسب حجم متوازي المستطيلات باستخدام القانون: (الحجم = الطول × العرض × الارتفاع) أو (مساحة القاعدة × الارتفاع).',
      'أن يحسب حجم المكعب باستخدام القانون: (الحجم = طول الحرف × نفسه × نفسه).',
      'أن يحدد النقاط ويمثل الأزواج المرتبة (x, y) في الربع الأول من المستوى الإحداثي بدقة.'
    ],
    learningOutcomesEn: [
      'Define volume as the 3D space occupied by an object in cubic units.',
      'Calculate rectangular prism volume using: Volume = Length × Width × Height = Base Area × Height.',
      'Calculate cube volume using: Volume = Edge × Edge × Edge.',
      'Plot and read ordered pairs (x, y) in the first quadrant of the coordinate plane.'
    ],

    vocabulary: [
      {
        termAr: 'الحجم (Volume)',
        termEn: 'Volume',
        definitionAr: 'مقدار الحيز من الفراغ ثلاثي الأبعاد الذي يشغله مجسم، ويقاس بالوحدات المكعبة (سم³ أو م³).',
        definitionEn: 'The amount of 3-dimensional space an object occupies, measured in cubic units.'
      },
      {
        termAr: 'المستوى الإحداثي (Coordinate Plane)',
        termEn: 'Coordinate Plane',
        definitionAr: 'شبكة تتكون من تقاطع خطي أعداد متعامدين: المحور الأفقي (x) والمحور الرأسي (y) عند نقطة الأصل (0، 0).',
        definitionEn: 'A grid formed by the perpendicular intersection of horizontal x-axis and vertical y-axis at the origin (0,0).'
      },
      {
        termAr: 'الزوج المرتب (Ordered Pair)',
        termEn: 'Ordered Pair (x, y)',
        definitionAr: 'زوج من الأعداد يحدد موقع نقطة على المستوى الإحداثي؛ الأول يمثل الإحداثي الأفقي والثاني الإحداثي الرأسي.',
        definitionEn: 'A pair of numbers (x, y) identifying a point\'s exact coordinate position.'
      }
    ],

    keyConceptsAr: [
      'حجم متوازي المستطيلات = الطول × العرض × الارتفاع ($V = L \\times W \\times H$).',
      'حجم المكعب = طول الحرف في نفسه في نفسه ($V = s \\times s \\times s$).',
      'في الزوج المرتب (x, y): نبدأ دائماً من نقطة الأصل (0، 0)، نتحرك أفقياً بمقدار x، ثم رأسياً بمقدار y.'
    ],
    keyConceptsEn: [
      'Volume of a rectangular prism = Length × Width × Height.',
      'Volume of a cube = edge length cubed (s³).',
      'For ordered pairs (x, y): start at the origin (0, 0), move horizontally x units, then vertically y units.'
    ],

    summaryAr: 'تعلمنا في هذا الدرس قوانين حساب حجم المجسمات (المكعب ومتوازي المستطيلات) بوحدات التكعيب، وتحديد وتمثيل النقاط على شبكة المستوى الإحداثي.',
    summaryEn: 'We mastered volume calculation for cubes and prisms, and plotting coordinate points in the first quadrant.',

    mainContentAr: `
### 1. حساب حجم متوازي المستطيلات والمكعب
- **متوازي المستطيلات (Rectangular Prism):**
  - القانون العام: $\\text{الحجم} = \\text{الطول} \\times \\text{العرض} \\times \\text{الارتفاع}$.
  - صيغة مساحة القاعدة: $\\text{الحجم} = \\text{مساحة القاعدة} \\times \\text{الارتفاع}$.
  - **مثال:** علبة أبعادها $5$ سم، $4$ سم، $10$ سم:
    $$\\text{الحجم} = 5 \\times 4 \\times 10 = 200 \\text{ سم}^3$$
- **المكعب (Cube):**
  - جميع أطوال أحرفه متساوية.
  - القانون: $\\text{الحجم} = \\text{طول الحرف} \\times \\text{طول الحرف} \\times \\text{طول الحرف}$.
  - **مثال:** مكعب طول حرفه $3$ سم:
    $$\\text{الحجم} = 3 \\times 3 \\times 3 = 27 \\text{ سم}^3$$

---

### 2. المستوى الإحداثي والأزواج المرتبة
- يتكون المستوى من:
  1. **المحور الأفقي (X):** يمتد من اليسار إلى اليمين.
  2. **المحور الرأسي (Y):** يمتد من الأسفل إلى الأعلى.
  3. **نقطة الأصل (Origin):** نقطة تقاطع المحورين $(0, 0)$.
- **تحديد النقطة $A(4, 3)$:**
  - نقف عند الصفر $(0, 0)$.
  - نتحرك $4$ وحدات يميناً على المحور الأفقي $X$.
  - نصعد $3$ وحدات لأعلى على المحور الرأسي $Y$ ونضع النقطة.
`,
    assessment: {
      id: 'assess-math5-4',
      titleAr: 'تقييم المحاضرة 4: الحجم والمستوى الإحداثي',
      titleEn: 'Assessment 4: Volume & Coordinates',
      passingScore: 80,
      questions: [
        {
          id: 'q-m5-4-1',
          textAr: 'ما حجم متوازي مستطيلات أبعاده: الطول = 6 سم، العرض = 3 سم، الارتفاع = 2 سم؟',
          textEn: 'What is the volume of a rectangular prism with length=6cm, width=3cm, height=2cm?',
          optionsAr: ['11 سم³', '36 سم³', '18 سم³', '24 سم³'],
          optionsEn: ['11 cm³', '36 cm³', '18 cm³', '24 cm³'],
          correctIndex: 1,
          conceptTestedAr: 'قانون حجم متوازي المستطيلات',
          conceptTestedEn: 'Rectangular Prism Volume',
          difficulty: 'easy',
          explanationAr: 'الحجم = الطول × العرض × الارتفاع = 6 × 3 × 2 = 36 سم³.',
          explanationEn: 'Volume = L × W × H = 6 × 3 × 2 = 36 cm³.'
        },
        {
          id: 'q-m5-4-2',
          textAr: 'ما حجم مكعب طول حرفه 4 سم؟',
          textEn: 'What is the volume of a cube with edge length 4 cm?',
          optionsAr: ['16 سم³', '12 سم³', '64 سم³', '48 سم³'],
          optionsEn: ['16 cm³', '12 cm³', '64 cm³', '48 cm³'],
          correctIndex: 2,
          conceptTestedAr: 'قانون حجم المكعب',
          conceptTestedEn: 'Cube Volume',
          difficulty: 'easy',
          explanationAr: 'حجم المكعب = 4 × 4 × 4 = 64 سم³.',
          explanationEn: 'Volume of cube = 4 × 4 × 4 = 64 cm³.'
        },
        {
          id: 'q-m5-4-3',
          textAr: 'في الزوج المرتب (5، 2)، ما العدد الذي يمثل الإحداثي الرأسي Y؟',
          textEn: 'In the ordered pair (5, 2), which number represents the y-coordinate?',
          optionsAr: ['5', '2', '7', '10'],
          optionsEn: ['5', '2', '7', '10'],
          correctIndex: 1,
          conceptTestedAr: 'مكونات الزوج المرتب',
          conceptTestedEn: 'Ordered Pair Components',
          difficulty: 'easy',
          explanationAr: 'في الزوج المرتب (x, y)، العدد الأول هو x (5) والعدد الثاني هو y (2).',
          explanationEn: 'In (x, y), the first value is horizontal x (5) and the second is vertical y (2).'
        }
      ]
    }
  }
];
