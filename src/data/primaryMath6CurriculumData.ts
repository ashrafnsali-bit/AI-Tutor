import type { Lecture } from '../types';

// PRIMARY MATHEMATICS — GRADE 6 (رياضيات الصف السادس الابتدائي - منهج التعليم 2.0 والمسارات المعتمدة)
// ============================================================================
// Based on official Egyptian Ministry of Education Edu 2.0 & Saudi Ministry of Education G6 standards.
// Covers:
// 1. Rational Numbers, Number Line & Absolute Value (مجموعة الأعداد النسبية والقيمة المطلقة)
// 2. Algebraic Expressions, Exponents & One-Step Equations (المقادير الجبرية والمعادلات)
// 3. Ratio, Rate, Unit Rate & Percentage Applications (النسبة والمعدل والنسبة المئوية)
// 4. Statistics, Measures of Center & Data Representations (الإحصاء، مقاييس النزعة المركزية والمدرج التكراري)

export const PRIMARY_MATH_G6_LECTURES: Lecture[] = [
  // ── LECTURE 1: RATIONAL NUMBERS & ABSOLUTE VALUE ──
  {
    id: 'pmath-g6-1',
    order: 1,
    titleAr: 'المحاضرة 1: مجموعة الأعداد النسبية، خط الأعداد، والقيمة المطلقة',
    titleEn: 'Lecture 1: Set of Rational Numbers, Number Line, and Absolute Value',
    subtitleAr: 'استكشاف الأعداد الصحيحة الموجبة والسالبة والكسور كأعداد نسبية، وتحديدها على خط الأعداد وحساب القيمة المطلقة ومقارنتها.',
    subtitleEn: 'Explore positive and negative integers, fractions as rational numbers, and calculate absolute values.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - الرياضيات المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: مجموعة الأعداد النسبية',
    unitTitleEn: 'Unit 1: The Set of Rational Numbers',
    lessonNumberAr: 'الدرس 1: استخدام الأعداد النسبية والقيمة المطلقة',
    lessonNumberEn: 'Lesson 1: Rational Numbers & Absolute Value',

    warmupHookAr: 'إذا كانت درجة الحرارة في قمة جبل سانت كاترين تنخفض إلى 5 درجات تحت الصفر (-5°)، بينما في مدينة أسوان ترتفع إلى 25 درجة مئوية فوق الصفر (+25°). كيف نعبر عن هذه المواقف رياضياً؟ وكيف نحسب المسافة الحقيقية للعدد عن نقطة الصفر بغض النظر عن اتجاهه؟ هذا هو عالم الأعداد النسبية والقيمة المطلقة!',
    warmupHookEn: 'If temperatures drop to -5°C on mountain peaks while reaching +25°C in sunny cities, how do we express these mathematically? How do we calculate the pure distance from zero regardless of sign? That is the power of rational numbers and absolute value!',

    learningOutcomesAr: [
      'أن يعرف الطالب العدد النسبي كأي عدد يمكن كتابته على صورة كسر (أ/ب) حيث ب لا تساوي صفراً.',
      'أن يمثل الطالب الأعداد الصحيحة والنسبية الموجبة والسالبة على خط الأعداد بدقة.',
      'أن يوضح مفهوم المعكوس الجمعي (العدد المقابل) والعدد المحايد الجمعي (الصفر).',
      'أن يحسب القيمة المطلقة لأي عدد نسبي ويفسر معناها كمسافة موجبة دائماً من الصفر على خط الأعداد.',
      'أن يقارن ويرتب مجموعة من الأعداد النسبية تصاعدياً وتنازلياً.'
    ],
    learningOutcomesEn: [
      'Define a rational number as any number that can be expressed as a/b where b is not zero.',
      'Represent positive and negative integers and rational numbers on a number line.',
      'Understand additive inverses (opposite numbers) and the neutral additive element (zero).',
      'Calculate the absolute value of rational numbers as non-negative distance from zero.',
      'Compare and order rational numbers in ascending and descending orders.'
    ],

    vocabulary: [
      {
        termAr: 'العدد النسبي (Rational Number)',
        termEn: 'Rational Number',
        definitionAr: 'كل عدد يمكن التعبير عنه في صورة كسر بسطه ومقامه عددان صحيحان ومقامه لا يساوي الصفر (أ/ب، ب ≠ 0).',
        definitionEn: 'Any number that can be written as a quotient or fraction a/b of two integers, with non-zero denominator.'
      },
      {
        termAr: 'القيمة المطلقة (Absolute Value)',
        termEn: 'Absolute Value |x|',
        definitionAr: 'المسافة بين موضع العدد والصفر على خط الأعداد، وهي دائماً قيمة موجبة أو تساوي صفراً، وتُكتب |س|.',
        definitionEn: 'The distance between a number and zero on the number line, always non-negative, written as |x|.'
      },
      {
        termAr: 'المعكوس الجمعي (Additive Inverse)',
        termEn: 'Additive Inverse / Opposite',
        definitionAr: 'عدد يقع على الجانب الآخر من الصفر على خط الأعداد وبنفس المسافة، وحاصل جمعهما دائماً يساوي صفراً (مثل: -7 و +7).',
        definitionEn: 'A number situated symmetrically across zero; their sum is always zero (e.g., -7 and +7).'
      }
    ],

    keyConceptsAr: [
      'جميع الأعداد الصحيحة والطبيعية والكسور الاعتيادية والعشرية والنسب المئوية تنتمي لمجموعة الأعداد النسبية (Q).',
      'القيمة المطلقة لأي عدد تكون موجبة دائماً: |-8| = 8، و|8| = 8، بينما |0| = 0.',
      'عند المقارنة: أي عدد موجب أكبر من أي عدد سالب؛ وكلما ابتعد العدد السالب جهة اليسار عن الصفر صغرت قيمته (مثال: -2 أكبر من -10).'
    ],
    keyConceptsEn: [
      'Natural numbers, integers, fractions, and decimals are all subsets of rational numbers (Q).',
      'Absolute value is strictly non-negative: |-8| = 8, |8| = 8, and |0| = 0.',
      'Every positive number exceeds any negative number; for negative numbers, greater distance from zero means smaller value (-2 > -10).'
    ],

    summaryAr: 'تعلمنا في هذا الدرس مفهوم الأعداد النسبية وتحديدها على خط الأعداد، وفهمنا القيمة المطلقة كمسافة موجبة، وأتقنا المقارنة والترتيب بين الأعداد الموجبة والسالبة والكسور.',
    summaryEn: 'We mastered rational numbers on the number line, understood absolute value as non-negative distance, and ordered positive and negative values.',

    mainContentAr: `
### 1. مفهوم مجموعة الأعداد النسبية (Rational Numbers)
- **تعريف العدد النسبي:** هو أي عدد يمكن كتابته على صورة $\\frac{a}{b}$ حيث $a, b$ عددان صحيحان و $b \\neq 0$.
- **أمثلة للأعداد النسبية:**
  - الأعداد الصحيحة: $5 = \\frac{5}{1}$، $-3 = \\frac{-3}{1}$، $0 = \\frac{0}{1}$.
  - الكسور الاعتيادية: $\\frac{3}{4}$، $-\\frac{2}{5}$، $2\\frac{1}{2} = \\frac{5}{2}$.
  - الكسور العشرية: $0.75 = \\frac{75}{100}$، $-1.4 = -\\frac{14}{10}$.
  - النسب المئوية: $25\\% = \\frac{25}{100}$.

---

### 2. خط الأعداد والمعكوس الجمعي (العدد المقابل)
- **الصفر:** يفصل بين الأعداد الموجبة (جهة اليمين) والأعداد السالبة (جهة اليسار).
- **المعكوس الجمعي:** هو نفس العدد ولكن بإشارة معاكسة؛ فالمعكوس الجمعي للعدد $4$ هو $-4$، والمعكوس الجمعي للعدد $-2.5$ هو $+2.5$، والمعكوس الجمعي للصفر هو الصفر نفسه.
- **القاعدة الذهبية:** مجموع أي عدد ومعكوسه الجمعي يساوي صفراً: $a + (-a) = 0$.

---

### 3. القيمة المطلقة (Absolute Value)
- **الرمز والتعريف:** يُرمز لها بالرمز $|x|$، وتعبر هندسياً عن المسافة بين العدد والصفر على خط الأعداد.
- بما أن المسافة لا يمكن أن تكون سالبة، فإن ناتج القيمة المطلقة دائماً موجب أو صفر:
  - $|-6| = 6$
  - $|+6| = 6$
  - $|0| = 0$
  - $-|-9| = -9$ (لأن إشارة السالب خارج علامة القيمة المطلقة).

---

### 4. مقارنة وترتيب الأعداد النسبية
- أي عدد نسبي موجب أكبر تماماً من الصفر ومن أي عدد نسبي سالب: $+3 > -100$.
- الصفر أكبر من أي عدد نسبي سالب: $0 > -5$.
- بين عددين سالبين: العدد الأقرب إلى الصفر (الأصغر في القيمة المطلقة) هو الأكبر:
  - $-3 > -7$ لأن $-3$ يقع على يمين $-7$ على خط الأعداد.
  - $-\\frac{1}{2} > -\\frac{3}{4}$.
`,
    assessment: {
      id: 'assess-math6-1',
      titleAr: 'تقييم المحاضرة 1: الأعداد النسبية والقيمة المطلقة',
      titleEn: 'Assessment 1: Rational Numbers & Absolute Value',
      passingScore: 80,
      questions: [
        {
          id: 'q-m6-1-1',
          textAr: 'ما قيمة المقدار: $|-15| + |7|$؟',
          textEn: 'What is the value of: |-15| + |7|?',
          optionsAr: ['8', '22', '-22', '-8'],
          optionsEn: ['8', '22', '-22', '-8'],
          correctIndex: 1,
          conceptTestedAr: 'حساب القيمة المطلقة والجمع',
          conceptTestedEn: 'Absolute Value Calculation & Addition',
          difficulty: 'easy',
          explanationAr: 'القيمة المطلقة للعدد |-15| هي 15، وللعدد |7| هي 7، فيكون الناتج: 15 + 7 = 22.',
          explanationEn: '|-15| = 15 and |7| = 7, so 15 + 7 = 22.'
        },
        {
          id: 'q-m6-1-2',
          textAr: 'أي من المقارنات التالية صحيحة؟',
          textEn: 'Which of the following comparisons is correct?',
          optionsAr: ['-8 > -2', '-5 > 0', '-4.5 > -9.2', '-1 > 3'],
          optionsEn: ['-8 > -2', '-5 > 0', '-4.5 > -9.2', '-1 > 3'],
          correctIndex: 2,
          conceptTestedAr: 'مقارنة الأعداد السالبة',
          conceptTestedEn: 'Comparing Negative Numbers',
          difficulty: 'medium',
          explanationAr: 'في الأعداد السالبة، العدد الأقرب للصفر هو الأكبر، وبالتالي -4.5 أكبر من -9.2.',
          explanationEn: 'For negative numbers, the number closer to zero is greater; hence -4.5 > -9.2.'
        },
        {
          id: 'q-m6-1-3',
          textAr: 'ما المعكوس الجمعي للعدد النسبي -3/5؟',
          textEn: 'What is the additive inverse of the rational number -3/5?',
          optionsAr: ['5/3', '-5/3', '3/5', '0'],
          optionsEn: ['5/3', '-5/3', '3/5', '0'],
          correctIndex: 2,
          conceptTestedAr: 'المعكوس الجمعي',
          conceptTestedEn: 'Additive Inverse',
          difficulty: 'easy',
          explanationAr: 'المعكوس الجمعي للعدد السالب هو نفس العدد بإشارة موجبة (+3/5).',
          explanationEn: 'The additive inverse of -3/5 is +3/5.'
        }
      ]
    }
  },

  // ── LECTURE 2: ALGEBRAIC EXPRESSIONS & ONE-STEP EQUATIONS ──
  {
    id: 'pmath-g6-2',
    order: 2,
    titleAr: 'المحاضرة 2: المقادير الجبرية والأسس، وتكوينها وحل المعادلات',
    titleEn: 'Lecture 2: Algebraic Expressions, Exponents, and Solving One-Step Equations',
    subtitleAr: 'التمييز بين الثوابت والمتغيرات والمعاملات، إيجاد القيمة العددية، والأسس، وحل المعادلات والمتباينات من الدرجة الأولى.',
    subtitleEn: 'Identify variables, coefficients and constants, evaluate expressions with exponents, and solve linear equations.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - الرياضيات المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: المقادير الجبرية والمعادلات',
    unitTitleEn: 'Unit 2: Algebraic Expressions & Equations',
    lessonNumberAr: 'الدرس 2: استكشاف المقادير الجبرية وحل المعادلات',
    lessonNumberEn: 'Lesson 2: Algebraic Expressions & Equations',

    warmupHookAr: 'إذا ذهبت إلى متجر لشراء عدد غير محدد من الدفاتر بسعر 5 جنيهات للدفتر الواحد، بالإضافة إلى قلم واحد بسعر 3 جنيهات. كيف نكتب علاقة رياضية تحسب التكلفة الإجمالية لأي عدد تشتريه من الدفاتر؟ نكتب: (5س + 3)! هذا التعبير الرياضي الأنيق يسمى "المقدار الجبري".',
    warmupHookEn: 'If notebooks cost $5 each plus a single $3 pen, how do we write an equation for total cost of any quantity x? We write: (5x + 3)! This powerful representation is an algebraic expression.',

    learningOutcomesAr: [
      'أن يفرق الطالب بين التعبير العددي والمقدار الجبري والمتغير والمعامل والحد الثابت.',
      'أن يحسب القيمة العددية لمقدار جبري بالتعويض عن قيمة المتغير وترتيب العمليات الحسابية والأسس.',
      'أن يحل معادلات الدرجة الأولى في متغير واحد باستخدام العمليات العكسية وميزان المعادلات.',
      'أن يمثل المتباينات البسيطة (س > أ أو س < أ) على خط الأعداد ويحدد مجموعة حلها.'
    ],
    learningOutcomesEn: [
      'Distinguish numerical from algebraic expressions, variables, coefficients, and constants.',
      'Evaluate algebraic expressions by substitution adhering to order of operations and exponents.',
      'Solve one-step linear equations using inverse operations.',
      'Represent simple inequalities on the number line.'
    ],

    vocabulary: [
      {
        termAr: 'المتغير (Variable)',
        termEn: 'Variable',
        definitionAr: 'رمز أو حرف (مثل س أو x أو ص) يمثل قيمة مجهولة أو قابلة للتغير.',
        definitionEn: 'A symbol or letter representing an unknown or changing quantity.'
      },
      {
        termAr: 'المعامل (Coefficient)',
        termEn: 'Coefficient',
        definitionAr: 'العدد المضروب في المتغير داخل الحد الجبري (في المقدار 4س، العدد 4 هو المعامل).',
        definitionEn: 'The numerical factor multiplied by the variable in an algebraic term (in 4x, 4 is the coefficient).'
      },
      {
        termAr: 'الحد الثابت (Constant Term)',
        termEn: 'Constant',
        definitionAr: 'عدد بمفرده لا يحتوي على متغيرات وله قيمة عددية محددة وثابتة.',
        definitionEn: 'A standalone number with a fixed value containing no variable.'
      },
      {
        termAr: 'المعادلة (Equation)',
        termEn: 'Equation',
        definitionAr: 'جملة رياضية تتضمن علامة التساوي (=) بين طرفين متكافئين، وتحتوي على متغير.',
        definitionEn: 'A mathematical statement showing equality between two expressions, separated by an equal sign.'
      }
    ],

    keyConceptsAr: [
      'في المقدار الجبري 3س + 7: (س) متغير، (3) معامل، و(7) حد ثابت.',
      'لإيجاد القيمة العددية، نعوض عن المتغير بقيمته ثم نتبع ترتيب العمليات: الأقواس، الأسس، الضرب والقسمة، الجمع والطرح.',
      'لحل المعادلة، نستخدم العملية العكسية للحفاظ على توازن طرفي المعادلة (عكس الجمع طرح، وعكس الضرب قسمة).'
    ],
    keyConceptsEn: [
      'In the expression 3x + 7: x is the variable, 3 is the coefficient, and 7 is the constant.',
      'Evaluate expressions using order of operations (PEMDAS): Parentheses, Exponents, Multiply/Divide, Add/Subtract.',
      'Solve equations by inverse operations to maintain balance (addition pairs with subtraction, multiplication with division).'
    ],

    summaryAr: 'شرحنا في هذا الدرس تكوين المقادير الجبرية، وحساب قيمتها بالتعويض والأسس، وخطوات حل معادلات ومتباينات الدرجة الأولى باستخدام العمليات العكسية.',
    summaryEn: 'We explored writing algebraic expressions, evaluating them via substitution and PEMDAS, and solving one-step linear equations and inequalities.',

    mainContentAr: `
### 1. مكونات المقدار الجبري (Parts of an Algebraic Expression)
- **المقدار الجبري:** جملة رياضية تتكون من حدود جبرية تفصل بينها إشارات الجمع أو الطرح، مثل: $4x + 9$.
- **أركان المقدار:**
  - **المتغير:** الحرف المجهول مثل $x$ أو $y$.
  - **المعامل:** الرقم المضروب في المتغير (في $4x$ المعامل هو $4$). إذا كُتب $x$ بمفرده فمعامله هو $1$.
  - **الحد الثابت:** العدد المجرد من الحروف (في $4x + 9$ الثابت هو $9$).
  - **الحدود المتشابهة:** حدود لها نفس المتغير ونفس الأس، مثل $3x$ و $5x$، ويمكن جمعها: $3x + 5x = 8x$.

---

### 2. إيجاد القيمة العددية وترتيب العمليات مع الأسس
- **الأسس:** $2^3 = 2 \\times 2 \\times 2 = 8$.
- **خطوات ترتيب العمليات الرياضية (PEMDAS):**
  1. فك الأقواس الداخلية أولاً.
  2. حساب الأسس والقوى.
  3. الضرب والقسمة بالترتيب من اليسار إلى اليمين (أو من اليمين لليسار حسب لغة المعادلة).
  4. الجمع والطرح بالترتيب.
- **مثال:** أوجد قيمة المقدار $3x^2 + 5$ عندما $x = 2$:
  - نعوض: $3(2)^2 + 5$
  - نحسب الأس أولاً: $2^2 = 4$
  - نضرب: $3 \\times 4 = 12$
  - نجمع: $12 + 5 = 17$.

---

### 3. حل معادلات الدرجة الأولى (Solving One-Step Equations)
المعادلة تشبه الميزان ذي الكفتين؛ ما نفعله في الطرف الأيمن يجب فعله في الطرف الأيسر:
- **معادلات الجمع والطرح (نستخدم العملية العكسية):**
  - $x + 6 = 15 \\implies x = 15 - 6 \\implies x = 9$.
  - $y - 4 = 11 \\implies y = 11 + 4 \\implies y = 15$.
- **معادلات الضرب والقسمة:**
  - $3m = 21 \\implies m = \\frac{21}{3} \\implies m = 7$.
  - $\\frac{k}{4} = 5 \\implies k = 5 \\times 4 \\implies k = 20$.
`,
    assessment: {
      id: 'assess-math6-2',
      titleAr: 'تقييم المحاضرة 2: المقادير الجبرية والمعادلات',
      titleEn: 'Assessment 2: Algebraic Expressions & Equations',
      passingScore: 80,
      questions: [
        {
          id: 'q-m6-2-1',
          textAr: 'في المقدار الجبري 7س + 12، ما هو معامل المتغير س؟',
          textEn: 'In the algebraic expression 7x + 12, what is the coefficient of x?',
          optionsAr: ['12', 'س', '7', '19'],
          optionsEn: ['12', 'x', '7', '19'],
          correctIndex: 2,
          conceptTestedAr: 'تحديد المعامل الجبري',
          conceptTestedEn: 'Identifying Algebraic Coefficient',
          difficulty: 'easy',
          explanationAr: 'المعامل هو العدد المضروب في المتغير، وهو هنا 7.',
          explanationEn: 'The coefficient is the numerical factor multiplied by the variable, which is 7.'
        },
        {
          id: 'q-m6-2-2',
          textAr: 'ما حل المعادلة: 4س = 28؟',
          textEn: 'What is the solution to the equation: 4x = 28?',
          optionsAr: ['س = 24', 'س = 7', 'س = 32', 'س = 112'],
          optionsEn: ['x = 24', 'x = 7', 'x = 32', 'x = 112'],
          correctIndex: 1,
          conceptTestedAr: 'حل معادلات الضرب',
          conceptTestedEn: 'Solving Multiplication Equations',
          difficulty: 'easy',
          explanationAr: 'بقسمة الطرفين على 4: س = 28 ÷ 4 = 7.',
          explanationEn: 'Dividing both sides by 4 gives x = 28 / 4 = 7.'
        },
        {
          id: 'q-m6-2-3',
          textAr: 'إذا كانت ص = 3، فما القيمة العددية للمقدار: 2ص² - 5؟',
          textEn: 'If y = 3, what is the numerical value of: 2y² - 5?',
          optionsAr: ['1', '7', '13', '31'],
          optionsEn: ['1', '7', '13', '31'],
          correctIndex: 2,
          conceptTestedAr: 'التعويض وترتيب العمليات والأسس',
          conceptTestedEn: 'Evaluating Expressions & Exponents',
          difficulty: 'medium',
          explanationAr: 'نحسب الأس أولاً: 3² = 9، ثم نضرب: 2 × 9 = 18، ثم نطرح: 18 - 5 = 13.',
          explanationEn: 'Exponents first: 3² = 9, multiply: 2 × 9 = 18, subtract: 18 - 5 = 13.'
        }
      ]
    }
  },

  // ── LECTURE 3: RATIO, RATE, UNIT RATE & PERCENTAGES ──
  {
    id: 'pmath-g6-3',
    order: 3,
    titleAr: 'المحاضرة 3: النسبة والمعدل ومعدل الوحدة والنسبة المئوية وتطبيقاتها الحياتية',
    titleEn: 'Lecture 3: Ratio, Rate, Unit Rate, and Percent Applications',
    subtitleAr: 'مفهوم النسبة والنسب المتكافئة، معدل الوحدة ومقارنة الأسعار، تحويل النسب المئوية وحساب التخفيضات والفوائد.',
    subtitleEn: 'Understand ratios, equivalent ratios, unit rates for price comparisons, and percentage applications.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - الرياضيات المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: النسبة والمعدل وتطبيقاتهما',
    unitTitleEn: 'Unit 3: Ratio, Rate & Applications',
    lessonNumberAr: 'الدرس 3: النسبة ومعدل الوحدة والنسب المئوية',
    lessonNumberEn: 'Lesson 3: Ratio, Unit Rate & Percentages',

    warmupHookAr: 'إذا كان متجر يبيع 3 علب عصير بسعر 15 جنيهاً، ومتجر آخر يبيع 5 علب من نفس العصير بسعر 20 جنيهاً، كيف تعرف أي المتجرين يقدم الصفقة الأفضل والوفر الأكبر؟ هنا نلجأ إلى "معدل الوحدة" لنعرف سعر العلبة الواحدة في كل متجر!',
    warmupHookEn: 'If Store A sells 3 juice boxes for $15 and Store B sells 5 boxes for $20, which store offers the best deal? We use "unit rate" to discover the single-box price in each store!',

    learningOutcomesAr: [
      'أن يوضح الطالب معنى النسبة كالمقارنة بين كميتين من نفس النوع والوحدة باستخدام القسمة.',
      'أن يكتب النسب بصيغ مختلفة (أ إلى ب، أ : ب، أ/ب) ويوجد نسباً متكافئة بالضرب أو القسمة.',
      'أن يميز بين النسبة والمعدل، ويحسب معدل الوحدة (قيمة الوحدة الواحدة) لمقارنة الخيارات.',
      'أن يربط النسبة المئوية بالكسور الاعتيادية والعشرية، ويحسب قيمة النسبة المئوية من كمية معينة في سياقات حياتية كالتخفيضات والضرائب.'
    ],
    learningOutcomesEn: [
      'Explain ratio as a comparison of two quantities of the same unit using division.',
      'Write ratios in various forms and generate equivalent ratios by multiplication or division.',
      'Distinguish ratio from rate, and calculate unit rate to compare options.',
      'Relate percentages to fractions and decimals, calculating discounts and sales values.'
    ],

    vocabulary: [
      {
        termAr: 'النسبة (Ratio)',
        termEn: 'Ratio',
        definitionAr: 'مقارنة بين كميتين من نفس النوع ولهما نفس وحدات القياس، وتُكتب في أبسط صورة.',
        definitionEn: 'A comparison of two quantities of the same kind and unit, expressed in simplest form.'
      },
      {
        termAr: 'المعدل (Rate)',
        termEn: 'Rate',
        definitionAr: 'مقارنة بين كميتين لهما وحدات قياس مختلفة (مثل: كمية المسافة المقطوعة بالكيلومتر مقابل الزمن بالساعات).',
        definitionEn: 'A ratio comparing two quantities having different units of measurement.'
      },
      {
        termAr: 'معدل الوحدة (Unit Rate)',
        termEn: 'Unit Rate',
        definitionAr: 'معدل تكون فيه الكمية الثانية مساوية لوحدة واحدة فقط (مثل: 60 كم/ساعة أو 4 جنيهات لكل قطعة).',
        definitionEn: 'A rate simplified so that the second quantity equals exactly one unit.'
      },
      {
        termAr: 'النسبة المئوية (Percentage)',
        termEn: 'Percentage (%)',
        definitionAr: 'نسبة حدها الثاني (مقامها) دائماً يساوي 100، ويُرمز لها بالرمز %.',
        definitionEn: 'A ratio whose denominator is always 100, symbolized by %.'
      }
    ],

    keyConceptsAr: [
      'النسبة لا تميز بوحدات (ليس لها تمييز) لأنها بين كميتين من نفس الوحدة.',
      'لإيجاد معدل الوحدة، نقسم الكمية الأولى على الكمية الثانية ليصبح المقام 1.',
      'لحساب النسبة المئوية من عدد: نضرب العدد في الكسر المعبر عن النسبة المئوية (مثال: 20% من 150 = 0.20 × 150 = 30).'
    ],
    keyConceptsEn: [
      'Ratios do not carry units because identical units cancel out.',
      'To find unit rate, divide the first quantity by the second quantity so the denominator becomes 1.',
      'To find percent of a quantity: multiply by the decimal/fraction equivalent (20% of 150 = 0.20 × 150 = 30).'
    ],

    summaryAr: 'أتقنا في هذا الدرس التمييز بين النسبة والمعدل، وحساب معدل الوحدة واستخدامه في قرارات الشراء الذكية، وتطبيقات النسبة المئوية في حساب التخفيضات والخصومات.',
    summaryEn: 'We mastered ratios, rates, unit rate comparisons for smart purchasing decisions, and practical percentage calculations.',

    mainContentAr: `
### 1. النسبة والنسب المتكافئة (Ratio & Equivalent Ratios)
- **صيغ كتابة النسبة:** المقارنة بين 3 تفاحات و 5 برتقالات:
  - بالكلمات: 3 إلى 5.
  - بالنقطتين: $3 : 5$.
  - ككسر اعتيادي: $\\frac{3}{5}$.
- **النسب المتكافئة:** تنتج بضرب حدي النسبة أو قسمتهما على نفس العدد (غير الصفر):
  - $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$.

---

### 2. المعدل ومعدل الوحدة (Rate & Unit Rate)
- **الفرق بين النسبة والمعدل:**
  - النسبة: بين كميتين متماثلتين (مثل طول إلى طول).
  - المعدل: بين كميتين مختلفتين (مثل: قطع قطار 240 كم في 3 ساعات).
- **حساب معدل الوحدة:**
  - $\\text{معدل الوحدة} = \\frac{240 \\text{ كم}}{3 \\text{ ساعات}} = 80 \\text{ كم/ساعة}$.
- **تطبيق المقارنة بين الأسعار:**
  - عرض (أ): 6 زجاجات مياه بـ 18 جنيهاً $\\implies$ سعر الزجاجة $= 18 \\div 6 = 3$ جنيهات.
  - عرض (ب): 10 زجاجات بـ 25 جنيهاً $\\implies$ سعر الزجاجة $= 25 \\div 10 = 2.5$ جنيه.
  - إذن العرض (ب) هو الأوفر والأفضل!

---

### 3. النسبة المئوية وتطبيقاتها الحياتية
- **التحويل بين الصيغ:**
  - كسر إلى نسبة مئوية: $\\frac{3}{4} = \\frac{75}{100} = 75\\%$.
  - نسبة مئوية إلى كسر عشري: $40\\% = 0.40 = 0.4$.
- **تطبيقات الخصومات والتخفيضات:**
  - قميص سعره 200 جنيه وعليه خصم $15\\%$:
    - قيمة الخصم $= 200 \\times \\frac{15}{100} = 30$ جنيهاً.
    - السعر بعد الخصم $= 200 - 30 = 170$ جنيهاً.
`,
    assessment: {
      id: 'assess-math6-3',
      titleAr: 'تقييم المحاضرة 3: النسبة والمعدل والنسبة المئوية',
      titleEn: 'Assessment 3: Ratio, Unit Rate & Percentages',
      passingScore: 80,
      questions: [
        {
          id: 'q-m6-3-1',
          textAr: 'سيارة تستهلك 20 لتراً من البنزين لقطع مسافة 240 كيلومتراً، فما معدل استهلاك البنزين لكل كيلومتر (معدل الوحدة)؟',
          textEn: 'A car consumes 20 liters to travel 240 km. How many km per liter does it achieve?',
          optionsAr: ['10 كم/لتر', '12 كم/لتر', '15 كم/لتر', '8 كم/لتر'],
          optionsEn: ['10 km/L', '12 km/L', '15 km/L', '8 km/L'],
          correctIndex: 1,
          conceptTestedAr: 'حساب معدل الوحدة',
          conceptTestedEn: 'Calculating Unit Rate',
          difficulty: 'medium',
          explanationAr: 'نقسم المسافة على عدد اللترات: 240 ÷ 20 = 12 كم/لتر.',
          explanationEn: 'Divide 240 by 20 to get 12 km per liter.'
        },
        {
          id: 'q-m6-3-2',
          textAr: 'ما قيمة 25% من العدد 160؟',
          textEn: 'What is 25% of 160?',
          optionsAr: ['40', '30', '50', '25'],
          optionsEn: ['40', '30', '50', '25'],
          correctIndex: 0,
          conceptTestedAr: 'حساب النسبة المئوية من كمية',
          conceptTestedEn: 'Calculating Percentage of a Quantity',
          difficulty: 'easy',
          explanationAr: '25% تمثل الربع (1/4)، وربع الـ 160 = 160 ÷ 4 = 40.',
          explanationEn: '25% is equivalent to 1/4; 160 / 4 = 40.'
        },
        {
          id: 'q-m6-3-3',
          textAr: 'ما الصورة المبسطة للنسبة 18 : 24؟',
          textEn: 'What is the simplified form of the ratio 18 : 24?',
          optionsAr: ['9 : 12', '2 : 3', '3 : 4', '6 : 8'],
          optionsEn: ['9 : 12', '2 : 3', '3 : 4', '6 : 8'],
          correctIndex: 2,
          conceptTestedAr: 'تبسيط النسب للحد الأدنى',
          conceptTestedEn: 'Simplifying Ratios to Lowest Terms',
          difficulty: 'easy',
          explanationAr: 'بقسمة حدي النسبة على العامل المشترك الأكبر (6): 18 ÷ 6 = 3، و24 ÷ 6 = 4، فالنسبة 3 : 4.',
          explanationEn: 'Divide both terms by GCD (6): 18/6 = 3, 24/6 = 4, resulting in 3 : 4.'
        }
      ]
    }
  },

  // ── LECTURE 4: STATISTICS & DATA REPRESENTATIONS ──
  {
    id: 'pmath-g6-4',
    order: 4,
    titleAr: 'المحاضرة 4: استكشاف البيانات والإحصاء (المقاييس الإحصائية والمدرج التكراري ومخطط الصندوق)',
    titleEn: 'Lecture 4: Data Exploration & Statistics (Measures of Center & Box Plots)',
    subtitleAr: 'حساب الوسط الحسابي (المتوسط)، الوسيط، المنوال، والمدى، وقراءة المدرج التكراري ومخطط الصندوق (Box Plot).',
    subtitleEn: 'Calculate mean, median, mode, and range, and analyze histograms and box-and-whisker plots.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - الرياضيات المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'الوحدة الرابعة: الإحصاء واستكشاف البيانات',
    unitTitleEn: 'Unit 4: Statistics & Data Representations',
    lessonNumberAr: 'الدرس 4: مقاييس النزعة المركزية وتمثيل البيانات',
    lessonNumberEn: 'Lesson 4: Measures of Central Tendency & Data Plots',

    warmupHookAr: 'إذا حصلت في اختباراتك الشهرية على الدرجات: 18، 20، 19، 20، 18. كيف يعبر معلمك عن مستواك العام برقم واحد فقط يلخص درجاتك؟ يستخدم "الوسط الحسابي" أو "الوسيط"! وإذا أردنا مقارنة أداء فصول المدرسة كاملة نستخدم المدرج التكراري أو مخطط الصندوق.',
    warmupHookEn: 'If your test scores are 18, 20, 19, 20, 18, how can a teacher summarize your performance in a single number? By using the Mean or Median! And to compare entire classrooms, we use Histograms or Box Plots.',

    learningOutcomesAr: [
      'أن يحسب الطالب الوسط الحسابي (المتوسط) لمجموعة بيانات بجمع القيم والقسمة على عددها.',
      'أن يحدد الوسيط بعد ترتيب البيانات تصاعدياً، والمنوال (القيمة الأكثر تكراراً)، والمدى (الفرق بين أكبر وأصغر قيمة).',
      'أن يوضح تأثير القيم المتطرفة (Outliers) على الوسط الحسابي ويفضل الوسيط في وجودها.',
      'أن يقرأ ويفسر البيانات من المدرج التكراري ومخطط الصندوق والربيعات الخمسة (أدنى قيمة، Q1، الوسيط Q2، Q3، أقصى قيمة).'
    ],
    learningOutcomesEn: [
      'Calculate the mean (average) by summing values and dividing by count.',
      'Determine median (middle value after sorting), mode (most frequent), and range (max minus min).',
      'Understand the impact of outliers on the mean and when median is preferable.',
      'Interpret histograms and the five-number summary on box plots (Min, Q1, Median, Q3, Max).'
    ],

    vocabulary: [
      {
        termAr: 'الوسط الحسابي (Mean / Average)',
        termEn: 'Mean (Average)',
        definitionAr: 'نقطة التوازن لمجموعة البيانات، وتُحسب بقسمة مجموع القيم على عددها.',
        definitionEn: 'The balance point of a dataset, calculated as the sum of all values divided by count.'
      },
      {
        termAr: 'الوسيط (Median)',
        termEn: 'Median',
        definitionAr: 'القيمة التي تقع في المنتصف تماماً بعد ترتيب البيانات تصاعدياً أو تنازلياً.',
        definitionEn: 'The middle value in an ordered dataset dividing the upper half from the lower half.'
      },
      {
        termAr: 'المنوال (Mode)',
        termEn: 'Mode',
        definitionAr: 'القيمة أو القيم الأكثر تكراراً وشيوعاً بين مفردات البيانات.',
        definitionEn: 'The value that appears most frequently in a data set.'
      },
      {
        termAr: 'مخطط الصندوق (Box Plot)',
        termEn: 'Box Plot / Box-and-Whisker',
        definitionAr: 'تمثيل بياني يلخص البيانات باستخدام 5 قيم إحصائية: الحد الأدنى، الربع الأول (Q1)، الوسيط (Q2)، الربع الثالث (Q3)، والحد الأقصى.',
        definitionEn: 'A graphical summary of data based on the five-number summary: Min, Q1, Median, Q3, and Max.'
      }
    ],

    keyConceptsAr: [
      'الوسط الحسابي = (مجموع القيم) ÷ (عدد القيم).',
      'لحساب الوسيط: رتّب أولاً! إذا كان عدد القيم فردياً فالوسيط هو القيمة الوسطى، وإذا كان زوجياً نجمع القيمتين الوسطيين ونقسم على 2.',
      'المدى = أكبر قيمة - أصغر قيمة، ويقيس مدى تشتت وتباعد البيانات.',
      'القيم المتطرفة تؤثر بشدة على الوسط الحسابي، بينما يظل الوسيط مقياساً دقيقاً ومقاوماً للقيم الشاذة.'
    ],
    keyConceptsEn: [
      'Mean = (Sum of values) / (Total count).',
      'For Median: sort first! If odd count, pick center; if even count, average the two middle values.',
      'Range = Maximum value - Minimum value, measuring data dispersion.',
      'Outliers skew the mean significantly, making the median a more robust measure.'
    ],

    summaryAr: 'تعلمنا في هذا الدرس كيفية تلخيص مجموعات البيانات الإحصائية باستخدام مقاييس النزعة المركزية (الوسط والوسيط والمنوال) والمدى، وفهم قراءة وتفسير المدرجات التكرارية ومخططات الصندوق.',
    summaryEn: 'We mastered summarizing data sets using mean, median, mode, and range, alongside interpreting histograms and box plots.',

    mainContentAr: `
### 1. مقاييس النزعة المركزية (Measures of Center)
- **الوسط الحسابي (Mean):**
  - القانون: $\\text{الوسط الحسابي} = \\frac{\\text{مجموع القيم}}{\\text{عددها}}$.
  - مثال: الأعداد $4, 6, 8, 10, 12$:
    - المجموع $= 4 + 6 + 8 + 10 + 12 = 40$.
    - العدد $= 5$.
    - الوسط الحسابي $= 40 \\div 5 = 8$.

- **الوسيط (Median):**
  - الخطوة الأولى الإلزامية: **ترتيب الأعداد تصاعدياً**.
  - في البيانات الفردية: $3, 5, \\mathbf{7}, 9, 11 \\implies$ الوسيط هو $7$.
  - في البيانات الزوجية: $2, 4, \\mathbf{6}, \\mathbf{8}, 10, 12 \\implies$ الوسيط $= \\frac{6 + 8}{2} = 7$.

- **المنوال (Mode):**
  - القيمة الأكثر تكراراً. في المجموعة $\\{3, 7, 7, 8, 9\\}$ المنوال هو $7$. قد لا يوجد منوال إذا لم يتكرر أي عدد، وقد يوجد أكثر من منوال.

---

### 2. مقياس التشتت: المدى والقيم المتطرفة (Range & Outliers)
- **المدى (Range):** $\\text{المدى} = \\text{أكبر قيمة} - \\text{أصغر قيمة}$.
  - يقيس مدى تقارب أو تباعد البيانات عن بعضها.
- **القيمة المتطرفة (Outlier):** قيمة أكبر بكثير أو أصغر بكثير من بقية البيانات.
  - مثال: الدرجات $\\{15, 16, 15, 17, \\mathbf{50}\\}$ فالعدد 50 قيمة متطرفة ترفع الوسط الحسابي بصورة غير دقيقة، لذلك يفضل الاعتماد على الوسيط.

---

### 3. التمثيل البياني: المدرج التكراري ومخطط الصندوق
- **المدرج التكراري (Histogram):** أعمدة متلاصقة تعرض التكرارات في صورة **فترات متساوية** (مثل: الفئة من 10 إلى 19، ومن 20 إلى 29).
- **مخطط الصندوق (Box Plot):** يعتمد على ملخص الأعداد الخمسة:
  1. **الحد الأدنى (Min):** أصغر قيمة.
  2. **الربيع الأول ($Q_1$):** وسيط النصف الأدنى للبيانات.
  3. **الوسيط ($Q_2$):** وسيط جميع البيانات.
  4. **الربيع الثالث ($Q_3$):** وسيط النصف الأعلى للبيانات.
  5. **الحد الأقصى (Max):** أكبر قيمة.
`,
    assessment: {
      id: 'assess-math6-4',
      titleAr: 'تقييم المحاضرة 4: الإحصاء واستكشاف البيانات',
      titleEn: 'Assessment 4: Statistics & Data Representations',
      passingScore: 80,
      questions: [
        {
          id: 'q-m6-4-1',
          textAr: 'ما هو وسيط مجموعة البيانات التالية: 9، 3، 7، 2، 11؟',
          textEn: 'What is the median of the following dataset: 9, 3, 7, 2, 11?',
          optionsAr: ['3', '7', '9', '6.4'],
          optionsEn: ['3', '7', '9', '6.4'],
          correctIndex: 1,
          conceptTestedAr: 'حساب الوسيط بعد الترتيب',
          conceptTestedEn: 'Calculating Median after Sorting',
          difficulty: 'medium',
          explanationAr: 'نرتب البيانات تصاعدياً أولاً: 2، 3، 7، 9، 11. القيمة التي في المنتصف تماماً هي 7.',
          explanationEn: 'Sort the dataset first: 2, 3, 7, 9, 11. The center value is 7.'
        },
        {
          id: 'q-m6-4-2',
          textAr: 'إذا كانت درجات طالب هي: 8، 9، 10، فما وسطه الحسابي؟',
          textEn: 'If a student\'s grades are: 8, 9, 10, what is their mean score?',
          optionsAr: ['8', '9', '10', '27'],
          optionsEn: ['8', '9', '10', '27'],
          correctIndex: 1,
          conceptTestedAr: 'حساب الوسط الحسابي',
          conceptTestedEn: 'Calculating Mean',
          difficulty: 'easy',
          explanationAr: 'الوسط الحسابي = (8 + 9 + 10) ÷ 3 = 27 ÷ 3 = 9.',
          explanationEn: 'Mean = (8 + 9 + 10) / 3 = 27 / 3 = 9.'
        },
        {
          id: 'q-m6-4-3',
          textAr: 'ما هو المدى لمجموعة القيم التالية: 12، 25، 7، 30، 18؟',
          textEn: 'What is the range of the following values: 12, 25, 7, 30, 18?',
          optionsAr: ['23', '18', '7', '30'],
          optionsEn: ['23', '18', '7', '30'],
          correctIndex: 0,
          conceptTestedAr: 'حساب المدى',
          conceptTestedEn: 'Calculating Range',
          difficulty: 'easy',
          explanationAr: 'المدى = أكبر قيمة (30) - أصغر قيمة (7) = 23.',
          explanationEn: 'Range = Maximum (30) - Minimum (7) = 23.'
        }
      ]
    }
  }
];
