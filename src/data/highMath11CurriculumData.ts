import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL MATHEMATICS & ALGEBRA — GRADE 11 (رياضيات الصف الثاني الثانوي)
// Official Egyptian & Arab National Grade 11 Curriculum:
// Lecture 1: Real Functions, Domain & Range, Symmetries & Absolute Value Functions
// Lecture 2: Exponential and Logarithmic Functions & Equation Solving
// Lecture 3: Limits of Algebraic Functions, Conjugates & Law 4 Form
// Lecture 4: Trigonometric Limits & Function Continuity
// Lecture 5: Triangle Trigonometry: The Sine Rule & Cosine Rule Applications
// ============================================================================

export const HIGH_MATH_G11_LECTURES: Lecture[] = [
  // ── LECTURE 1: REAL FUNCTIONS & ABSOLUTE VALUE ──
  {
    id: 'h11-m1',
    order: 1,
    titleAr: 'المحاضرة 1: الدوال الحقيقية، المجال والمدى، ودوال المقياس والقيمة المطلقة',
    titleEn: 'Lecture 1: Real Functions, Domain & Range, Symmetries & Absolute Value Functions',
    subtitleAr: 'تحديد المجال والمدى بيانياً وجبرياً، اطراد الدوال (تزايدية، تناقصية، ثابتة)، التماثل (دوال زوجية وفردية)، والتحويلات الهندسية لمعادلات ودوال المقياس',
    subtitleEn: 'Master domain & range, function monotonicity, parity (even/odd), geometric transformations, and absolute value functions & equations.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الجبر والعلاقات والدوال الحقيقية',
    unitTitleEn: 'Unit 1: Algebra, Relations & Real Functions',
    lessonNumberAr: 'الدرس 1: الدوال الحقيقية ودوال المقياس',
    lessonNumberEn: 'Lesson 1: Real Functions & Absolute Value',

    keyConceptsAr: [
      'مجال الدوال الكسرية والجذرية والحدوديات',
      'اطراد الدوال: التزايد، التناقص، والثبوت على الفترات',
      'الدوال الزوجية $f(-x) = f(x)$ والدوال الفردية $f(-x) = -f(x)$ وتماثل المنحنيات',
      'دالة المقياس $f(x) = |x|$ وإعادة تعريفها وحل معادلات ومتباينات القيمة المطلقة $|x - a| \\le r$'
    ],
    keyConceptsEn: [
      'Domain & range of polynomial, rational, and radical functions',
      'Monotonicity: increasing, decreasing, and constant intervals',
      'Even functions f(-x) = f(x), Odd functions f(-x) = -f(x), and graphical symmetry',
      'Absolute value functions f(x) = |x|, piecewise definitions, and solving |x - a| ≤ r'
    ],

    conceptMapAr: [
      'الدالة الحقيقية ➔ فحص المجال والمدى ➔ اختبار الخط الرأسي',
      'دراسة التماثل ➔ حول محور الصادات (زوجية) / حول نقطة الأصل (فردية)',
      'التحويلات الهندسية ➔ الإزاحة الأفقية والرأسية والانعكاس في المحاور',
      'معادلات المقياس ➔ فك المقياس لقيمتين موجبة وسالبة والتحقق من مجموعة الحل'
    ],
    conceptMapEn: [
      'Real Function ➔ Check Domain & Range ➔ Vertical Line Test',
      'Symmetry Test ➔ Y-axis Reflection (Even) / Origin Point (Odd)',
      'Geometric Shifts ➔ Horizontal/Vertical shifts and reflections',
      'Absolute Value Equations ➔ Split into ± cases and verify solutions'
    ],

    learningOutcomesAr: [
      'تعيين مجال ومدى الدوال الكسرية ودوال الجذور التربيعية والتكعيبية بدقة جبرية وبيانية.',
      'التمييز بين الدوال الزوجية والفردية والأحادية (One-to-One) جبرياً وبيانياً.',
      'رسم منحنيات الدوال الأساسية بعد إجراء التحويلات الهندسية (الإزاحات والانعكاسات والتمدد).',
      'حل المعادلات والمتباينات المشتملة على مقياس مثل $|2x - 3| = 5$ و $|x - 2| < 4$.'
    ],
    learningOutcomesEn: [
      'Find domain and range of rational, radical, and composite functions algebraically and graphically.',
      'Distinguish even, odd, and one-to-one functions algebraically.',
      'Sketch transformations of parent functions (translations, reflections, vertical stretches).',
      'Solve absolute value equations and inequalities algebraically and graphically.'
    ],

    vocabulary: [
      { termAr: 'المجال والمدى', termEn: 'Domain and Range', definitionAr: 'مجموعة قيم المدخلات (x) المسموح بها رياضياً، ومجموعة مخرجات الدالة (y) المقابلة.' },
      { termAr: 'الدالة الزوجية', termEn: 'Even Function', definitionAr: 'دالة متماثلة تماماً حول محور الصادات تحقق $f(-x) = f(x)$ لكل عنصر في المجال.' },
      { termAr: 'دالة المقياس', termEn: 'Absolute Value Function', definitionAr: 'دالة تعطي القيمة الموجبة دائماً للمقدار، وتعرف بـ $f(x) = x$ عندما $x \\ge 0$ و $-x$ عندما $x < 0$.' }
    ],

    warmupHookAr: 'إذا كانت درجة حرارة غرفة العمليات في المستشفى يجب أن تكون $22^\\circ\\text{C}$ مع سماحية خطأ لا تتجاوز $1.5^\\circ\\text{C}$ فقط، كيف يمكن لمهندس أجهزة التكييف صياغة هذه العلاقة في متباينة مقياس وحساب أقصى وأدنى درجة مسموحة؟ نكتب $|T - 22| \\le 1.5$ مما يعني $20.5^\\circ\\text{C} \\le T \\le 23.5^\\circ\\text{C}$.',
    warmupHookEn: 'If a hospital operating theatre must be maintained at 22°C with a tolerance of at most 1.5°C, engineers model this as |T - 22| ≤ 1.5, guaranteeing temperatures stay strictly between 20.5°C and 23.5°C.',

    mainContentAr: `
### 1. تحديد المجال للدوال الحقيقية (Domain of Real Functions)
* **الدوال كثيرة الحدود (Polynomials):** مجالها دائماً هو $\\mathbb{R}$ (جميع الأعداد الحقيقية).
* **الدوال الكسرية (Rational Functions):** مجالها $\\mathbb{R} - \\{\\text{أصفار المقام}\\}$.
  * مثال: الدالة $f(x) = \\frac{2x + 1}{x^2 - 9}$، نضع المقام مساوياً للصفر $x^2 - 9 = 0 \\implies x = \\pm 3$. إذن المجال $= \\mathbb{R} - \\{-3, 3\\}$.
* **الدوال الجذرية (Radical Functions):**
  * إذا كان دليل الجذر زوجياً (جذر تربيعي $\\sqrt{g(x)}$): يجب أن يكون ما تحت الجذر $\\ge 0$.
  * إذا كان في المقام: ما تحت الجذر $> 0$.

---

### 2. التماثل: الدوال الزوجية والفردية (Even & Odd Functions)
* **الدالة الزوجية (Even):** $f(-x) = f(x)$، وتكون متماثلة حول **محور الصادات (y-axis)**.
  * أمثلة: $f(x) = x^2$ ، $f(x) = \\cos x$ ، $f(x) = |x|$.
* **الدالة الفردية (Odd):** $f(-x) = -f(x)$، وتكون متماثلة حول **نقطة الأصل (Origin $(0,0)$)**.
  * أمثلة: $f(x) = x^3$ ، $f(x) = \\sin x$ ، $f(x) = \\frac{1}{x}$.

---

### 3. خواص دالة المقياس وحل المعادلات (Absolute Value)
* **التعريف الرياضي:**
  $$|x| = \\begin{cases} x & x \\ge 0 \\\\ -x & x < 0 \\end{cases}$$
* **حل معادلات المقياس:**
  * $|f(x)| = a$ (حيث $a > 0$) $\\implies f(x) = a$ أو $f(x) = -a$.
* **حل متباينات المقياس:**
  * $|f(x)| \\le a \\iff -a \\le f(x) \\le a$ (فترة مغلقة).
  * $|f(x)| \\ge a \\iff f(x) \\ge a \\text{ أو } f(x) \\le -a$ (اتحاد فترتين $\\mathbb{R} - (-a, a)$).
    `,
    mainContentEn: `
### 1. Domain Determination
* **Polynomials:** Domain is all real numbers $\\mathbb{R}$.
* **Rational Functions:** $\\mathbb{R} \\setminus \\{\\text{zeros of denominator}\\}$.
* **Square Root Functions $\\sqrt{g(x)}$:** Require $g(x) \\ge 0$.

### 2. Parity & Symmetry
* **Even Function:** $f(-x) = f(x)$ (symmetric about y-axis).
* **Odd Function:** $f(-x) = -f(x)$ (symmetric about origin).

### 3. Absolute Value Equations & Inequalities
* $|x - a| \\le r \\iff a - r \\le x \\le a + r$.
    `,

    diagramType: 'math_graph',
    diagramData: {
      type: 'piecewise_graph',
      title: 'منحنى دالة المقياس والتحويلات الهندسية f(x) = |x - 2| + 1',
      svgSnippet: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="200" x2="380" y2="200" stroke="#64748b" stroke-width="2" />
        <line x1="120" y1="20" x2="120" y2="220" stroke="#64748b" stroke-width="2" />
        <path d="M 40 50 L 200 170 L 360 50" stroke="#38bdf8" stroke-width="3" fill="none" />
        <circle cx="200" cy="170" r="5" fill="#f43f5e" />
        <text x="210" y="175" fill="#f8fafc" font-size="12">رأس المنحنى (2, 1)</text>
        <text x="365" y="205" fill="#94a3b8" font-size="12">x</text>
        <text x="125" y="30" fill="#94a3b8" font-size="12">y</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال 1: تعيين مجال الدالة الكسرية الجذرية',
        titleEn: 'Example 1: Domain of Rational Radical Function',
        problemAr: 'أوجد مجال الدالة: $f(x) = \\frac{\\sqrt{x - 3}}{x - 5}$.',
        problemEn: 'Find the domain of f(x) = sqrt(x - 3) / (x - 5).',
        stepsAr: [
          'شرط البسط: ما تحت الجذر التربيعي يجب أن يكون غير سالب: $x - 3 \\ge 0 \\implies x \\ge 3$ أي الفتره $[3, \\infty)$.',
          'شرط المقام: المقام لا يساوي الصفر: $x - 5 = 0 \\implies x = 5$.',
          'مجال الدالة هو تقاطع شرط البسط مستبعداً منه أصفار المقام: $[3, \\infty) - \\{5\\}$.'
        ],
        stepsEn: [
          'Numerator radical condition: x - 3 ≥ 0 ⟹ x ≥ 3 (interval [3, ∞)).',
          'Denominator zero exclusion: x - 5 = 0 ⟹ x = 5.',
          'Overall Domain is [3, ∞) \\ {5}.'
        ],
        finalAnswerAr: 'مجال الدالة هو $[3, \\infty) - \\{5\\}$',
        finalAnswerEn: 'Domain = [3, ∞) \\ {5}'
      },
      {
        titleAr: 'مثال 2: حل متباينة مقياس',
        titleEn: 'Example 2: Absolute Value Inequality',
        problemAr: 'أوجد مجموعة حل المتباينة في $\\mathbb{R}$: $|2x - 5| \\le 7$.',
        problemEn: 'Solve |2x - 5| ≤ 7 in R.',
        stepsAr: [
          'نفك متباينة المقياس (أصغر من أو يساوي): $-7 \\le 2x - 5 \\le 7$.',
          'بإضافة 5 لجميع أطراف المتباينة: $-7 + 5 \\le 2x \\le 7 + 5 \\implies -2 \\le 2x \\le 12$.',
          'بالقسمة على 2: $-1 \\le x \\le 6$.'
        ],
        stepsEn: [
          'Expand inequality: -7 ≤ 2x - 5 ≤ 7.',
          'Add 5 to all sides: -2 ≤ 2x ≤ 12.',
          'Divide by 2: -1 ≤ x ≤ 6.'
        ],
        finalAnswerAr: 'مجموعة الحل هي الفترة المغلقة $[-1, 6]$',
        finalAnswerEn: 'Solution set is [-1, 6]'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11m-1',
        problemAr: 'أوجد مجموعة حل المعادلة $|x - 3| = 2x - 1$ وتحقق من صحة الحل.',
        problemEn: 'Solve |x - 3| = 2x - 1 and verify solutions.',
        solutionStepsAr: [
          'نعيد تعريف المقياس: عندما $x \\ge 3 \\implies x - 3 = 2x - 1 \\implies x = -2$ (مرفوض لأنه ليس $\\ge 3$).',
          'عندما $x < 3 \\implies -(x - 3) = 2x - 1 \\implies -x + 3 = 2x - 1 \\implies 3x = 4 \\implies x = \\frac{4}{3}$ (مقبول لأنه $< 3$).'
        ],
        finalAnswerAr: 'مجموعة الحل هي $\\{\\frac{4}{3}\\}$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11m-1',
        questionAr: 'أي من الدوال الآتية تمثل دالة زوجية متماثلة حول محور الصادات؟',
        questionEn: 'Which of the following functions is an even function symmetric about the y-axis?',
        optionsAr: ['$f(x) = x^3 + x$', '$f(x) = x^2 + \\cos x$', '$f(x) = \\sin x$', '$f(x) = 2x - 1$'],
        optionsEn: ['f(x) = x^3 + x', 'f(x) = x^2 + cos x', 'f(x) = sin x', 'f(x) = 2x - 1'],
        correctIndex: 1,
        explanationAr: 'الدالة $f(x) = x^2 + \\cos x$ زوجية لأن $f(-x) = (-x)^2 + \\cos(-x) = x^2 + \\cos x = f(x)$.',
        explanationEn: 'f(-x) = (-x)^2 + cos(-x) = x^2 + cos(x) = f(x), fulfilling even function symmetry.'
      }
    ],

    assessment: {
      id: 'quiz-h11-m1',
      titleAr: 'اختبار إتقان الدوال الحقيقية ودوال المقياس',
      titleEn: 'Mastery Quiz: Real Functions & Absolute Value',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-m1-1',
          textAr: 'مجال الدالة $f(x) = \\frac{1}{\\sqrt{x - 4}}$ في مجموعة الأعداد الحقيقية هو:',
          textEn: 'The domain of f(x) = 1 / sqrt(x - 4) in R is:',
          optionsAr: ['$[4, \\infty)$', '$(4, \\infty)$', '$(-\\infty, 4)$', '$\\mathbb{R} - \\{4\\}$'],
          optionsEn: ['[4, ∞)', '(4, ∞)', '(-∞, 4)', 'R \\ {4}'],
          correctIndex: 1,
          conceptTestedAr: 'مجال الجذر التربيعي في المقام',
          conceptTestedEn: 'Domain of square root in denominator',
          explanationAr: 'بما أن الجذر في المقام، يجب أن يكون ما تحت الجذر موجباً تماماً قطعيًا: $x - 4 > 0 \\implies x > 4$ أي الفترة المفتوحة $(4, \\infty)$.',
          explanationEn: 'Denominator square root requires strictly x - 4 > 0 ⟹ x > 4, giving open interval (4, ∞).',
          difficulty: 'medium'
        },
        {
          id: 'qh11-m1-2',
          textAr: 'إذا كانت الدالة $f$ فردية ومجالها $\\mathbb{R}$، وكان منحنى الدالة يمر بالنقطة $(3, -5)$، فإن المنحنى يمر حتماً بالنقطة:',
          textEn: 'If f is an odd function on R passing through (3, -5), it must also pass through:',
          optionsAr: ['$(3, 5)$', '$(-3, 5)$', '$(-3, -5)$', '$(5, 3)$'],
          optionsEn: ['(3, 5)', '(-3, 5)', '(-3, -5)', '(5, 3)'],
          correctIndex: 1,
          conceptTestedAr: 'خواص الدالة الفردية وتماثلها حول نقطة الأصل',
          conceptTestedEn: 'Odd function symmetry about the origin',
          explanationAr: 'للدالة الفردية $f(-x) = -f(x)$؛ إذن $f(-3) = -f(3) = -(-5) = 5$، فالنقطة هي $(-3, 5)$.',
          explanationEn: 'For an odd function, f(-3) = -f(3) = -(-5) = 5, hence passing through (-3, 5).',
          difficulty: 'easy'
        },
        {
          id: 'qh11-m1-3',
          textAr: 'مجموعة حل المتباينة $|x - 1| > 3$ في $\\mathbb{R}$ هي:',
          textEn: 'The solution set of |x - 1| > 3 in R is:',
          optionsAr: ['$(-2, 4)$', '$[-2, 4]$', '$\\mathbb{R} - [-2, 4]$', '$\\mathbb{R} - (-2, 4)$'],
          optionsEn: ['(-2, 4)', '[-2, 4]', 'R \\ [-2, 4]', 'R \\ (-2, 4)'],
          correctIndex: 2,
          conceptTestedAr: 'متباينات المقياس مع علامة أكبر من',
          conceptTestedEn: 'Absolute value inequalities with greater-than',
          explanationAr: '$x - 1 > 3 \\implies x > 4$ أو $x - 1 < -3 \\implies x < -2$، ومجموعة الحل هي $(-\\infty, -2) \\cup (4, \\infty) = \\mathbb{R} - [-2, 4]$.',
          explanationEn: 'x > 4 or x < -2, which equals R \\ [-2, 4].',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: EXPONENTIAL & LOGARITHMIC FUNCTIONS ──
  {
    id: 'h11-m2',
    order: 2,
    titleAr: 'المحاضرة 2: الدوال الأسية واللوغاريتمية وحل المعادلات والنمو والتضاؤل',
    titleEn: 'Lecture 2: Exponential & Logarithmic Functions, Equation Solving & Real Applications',
    subtitleAr: 'الدالة الأسية f(x) = aˣ وخواصها، مفهوم اللوغاريتم كدالة عكسية، قوانين اللوغاريتمات وحل المعادلات الأسية واللوغاريتمية',
    subtitleEn: 'Master exponential functions, logarithms as inverse functions, logarithm laws, and solving exponential & logarithmic equations.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: الأسس واللوغاريتمات',
    unitTitleEn: 'Unit 2: Exponents & Logarithms',
    lessonNumberAr: 'الدرس 2: الدوال الأسية واللوغاريتمية',
    lessonNumberEn: 'Lesson 2: Exponential & Log Functions',

    keyConceptsAr: [
      'الدالة الأسية $f(x) = a^x$ (حيث $a > 0, a \\ne 1$) والنمو الأسي والتضاؤل',
      'التحويل بين الصورة الأسية واللوغاريتمية: $a^y = x \\iff \\log_a x = y$',
      'قوانين اللوغاريتمات: لوغاريتم الضرب والقسمة والقوى وتغيير الأساس $\\log_b a = \\frac{\\log a}{\\log b}$',
      'حل المعادلات الأسية ذات الأساسات المختلفة باستخدام اللوغاريتمات'
    ],
    keyConceptsEn: [
      'Exponential functions f(x) = a^x and growth/decay models',
      'Equivalence between exponential and logarithmic forms: a^y = x ⟺ log_a(x) = y',
      'Logarithm laws: product, quotient, power, and change of base formula',
      'Solving complex exponential equations using natural/common logarithms'
    ],

    conceptMapAr: [
      'الدالة الأسية $a^x$ ➔ مجالها $\\mathbb{R}$ ومداها $(0, \\infty)$',
      'الدالة العكسية ➔ اللوغاريتم $\\log_a x$ مجاله $(0, \\infty)$ ومداه $\\mathbb{R}$',
      'تطبيق القوانين ➔ $\\log(xy) = \\log x + \\log y$ و $\\log(x^n) = n\\log x$',
      'حل المعادلات ➔ أخذ $\\log$ للطرفين عند اختلاف الأساسات'
    ],
    conceptMapEn: [
      'Exponential a^x ➔ Domain R, Range (0, ∞)',
      'Inverse Logarithm log_a(x) ➔ Domain (0, ∞), Range R',
      'Laws ➔ log(xy) = log x + log y and log(x^n) = n log x',
      'Solving ➔ Take log of both sides when bases differ'
    ],

    learningOutcomesAr: [
      'تمثيل الدوال الأسية واللوغاريتمية بيانياً وتحديد التقارب والمجال والمدى.',
      'تطبيق قوانين اللوغاريتمات لاختصار المقادير وتبسيطها بدقة رياضية.',
      'حل المعادلات الأسية مثل $3^{x+1} = 5^{x-2}$ باستخدام اللوغاريتم العشري.',
      'نمذجة مسائل النمو السكاني وحساب الفائدة المركبة والتضاؤل الإشعاعي.'
    ],
    learningOutcomesEn: [
      'Graph exponential and logarithmic curves and determine asymptotes, domain, and range.',
      'Apply logarithm laws to simplify and evaluate algebraic expressions.',
      'Solve exponential equations with unequal bases using common logarithms.',
      'Model real-world population growth, compound interest, and radioactive decay.'
    ],

    vocabulary: [
      { termAr: 'الدالة الأسية', termEn: 'Exponential Function', definitionAr: 'دالة يكون فيها المتغير في الأس: $f(x) = a^x$ حيث الأساس ثابت موجب لا يساوي 1.' },
      { termAr: 'اللوغاريتم', termEn: 'Logarithm', definitionAr: 'الأس الذي يجب أن يرفع إليه الأساس $a$ ليعطي العدد $x$: $\\log_a x = y \\iff a^y = x$.' }
    ],

    warmupHookAr: 'في علم الزلازل، يُقاس مقياس ريختر بـ $R = \\log_{10}(\\frac{I}{I_0})$. هذا يعني أن زلزالاً بقوة 7 درجات ليس أقوى بدرجة واحدة من زلزال بقوة 6 درجات، بل هو أقوى بـ 10 أضعاف في السعة و 32 ضعفاً في الطاقة المتحررة!',
    warmupHookEn: 'On the Richter earthquake scale R = log10(I/I0), a magnitude 7 earthquake is not just 1 unit higher than magnitude 6—it is 10 times more intense in amplitude and releases 31.6 times more energy!',

    mainContentAr: `
### 1. قوانين اللوغاريتمات الأساسية (Laws of Logarithms)
لكل $x, y > 0$ والأساس $a > 0, a \\ne 1$:
1. **لوغاريتم الواحد والأساس:** $\\log_a 1 = 0$ ، $\\log_a a = 1$.
2. **قانون الضرب:** $\\log_a (x \\cdot y) = \\log_a x + \\log_a y$.
3. **قانون القسمة:** $\\log_a (\\frac{x}{y}) = \\log_a x - \\log_a y$.
4. **قانون القوى:** $\\log_a (x^n) = n \\cdot \\log_a x$.
5. **تغيير الأساس:** $\\log_a x = \\frac{\\log_b x}{\\log_b a} = \\frac{\\ln x}{\\ln a}$.
6. **المعكوس:** $a^{\\log_a x} = x$.
    `,
    mainContentEn: `
### Laws of Logarithms
* $\\log_a(xy) = \\log_a x + \\log_a y$
* $\\log_a(x/y) = \\log_a x - \\log_a y$
* $\\log_a(x^n) = n \\log_a x$
* Change of Base: $\\log_a x = \\frac{\\log x}{\\log a}$
    `,

    diagramType: 'math_graph',
    diagramData: {
      type: 'inverse_curves',
      title: 'تماثل الدالة الأسية والدالة اللوغاريتمية حول المستقيم y = x',
      svgSnippet: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="200" x2="380" y2="200" stroke="#64748b" stroke-width="2" />
        <line x1="200" y1="20" x2="200" y2="220" stroke="#64748b" stroke-width="2" />
        <line x1="40" y1="220" x2="360" y2="40" stroke="#94a3b8" stroke-dasharray="4" stroke-width="1.5" />
        <path d="M 40 195 Q 180 190 260 40" stroke="#38bdf8" stroke-width="3" fill="none" />
        <path d="M 205 220 Q 210 180 360 140" stroke="#34d399" stroke-width="3" fill="none" />
        <text x="270" y="45" fill="#38bdf8" font-size="12">y = 2ˣ</text>
        <text x="340" y="160" fill="#34d399" font-size="12">y = log₂ x</text>
        <text x="340" y="35" fill="#94a3b8" font-size="12">y = x</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حل معادلة أسية مختلفة الأساسات',
        titleEn: 'Example: Exponential Equation with Unequal Bases',
        problemAr: 'أوجد قيمة $x$ في المعادلة: $2^{x-1} = 5^x$.',
        problemEn: 'Solve 2^(x-1) = 5^x.',
        stepsAr: [
          'نأخذ اللوغاريتم العشري ($\\log$) للطرفين: $\\log(2^{x-1}) = \\log(5^x)$.',
          'بتطبيق قانون القوة: $(x - 1) \\log 2 = x \\log 5$.',
          'فك الأقواس وتجميع حدود $x$: $x \\log 2 - \\log 2 = x \\log 5 \\implies x(\\log 2 - \\log 5) = \\log 2$.',
          'إذن: $x = \\frac{\\log 2}{\\log 2 - \\log 5} = \\frac{\\log 2}{\\log(2/5)} = \\frac{\\log 2}{\\log 0.4} \\approx -0.756$.'
        ],
        stepsEn: [
          'Take common log of both sides: log(2^(x-1)) = log(5^x).',
          'Apply power law: (x - 1) log 2 = x log 5.',
          'Isolate x: x(log 2 - log 5) = log 2.',
          'x = log 2 / log(2/5) ≈ -0.756.'
        ],
        finalAnswerAr: '$x = \\frac{\\log 2}{\\log 2 - \\log 5} \\approx -0.756$',
        finalAnswerEn: 'x = log 2 / (log 2 - log 5) ≈ -0.756'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11m-2',
        problemAr: 'أوجد قيمة المقدار: $\\log_2 3 \\cdot \\log_3 4 \\cdot \\log_4 5 \\cdot \\dots \\cdot \\log_{31} 32$.',
        problemEn: 'Evaluate log_2(3) * log_3(4) * ... * log_31(32).',
        solutionStepsAr: [
          'نحول جميع اللوغاريتمات باستخدام قانون تغيير الأساس: $\\frac{\\log 3}{\\log 2} \\cdot \\frac{\\log 4}{\\log 3} \\cdot \\frac{\\log 5}{\\log 4} \\dots \\frac{\\log 32}{\\log 31}$.',
          'تختصر جميع البسوط والمقامات المتتالية، يتبقى: $\\frac{\\log 32}{\\log 2} = \\log_2 32 = \\log_2 (2^5) = 5$.'
        ],
        finalAnswerAr: 'قيمة المقدار تساوي $5$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11m-2',
        questionAr: 'إذا كان $\\log_3 (x - 2) = 4$، فإن قيمة $x$ تساوي:',
        questionEn: 'If log_3(x - 2) = 4, then x equals:',
        optionsAr: ['14', '81', '83', '12'],
        optionsEn: ['14', '81', '83', '12'],
        correctIndex: 2,
        explanationAr: 'بالتحويل للصورة الأسية: $x - 2 = 3^4 = 81 \\implies x = 81 + 2 = 83$.',
        explanationEn: 'x - 2 = 3^4 = 81 ⟹ x = 83.'
      }
    ],

    assessment: {
      id: 'quiz-h11-m2',
      titleAr: 'اختبار إتقان الدوال الأسية واللوغاريتمات',
      titleEn: 'Mastery Quiz: Exponents & Logarithms',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-m2-1',
          textAr: 'قيمة المقدار $\\log_5 25 + \\log_2 8 - \\log_3 81$ تساوي:',
          textEn: 'The value of log_5(25) + log_2(8) - log_3(81) is:',
          optionsAr: ['1', '2', '0', '-1'],
          optionsEn: ['1', '2', '0', '-1'],
          correctIndex: 0,
          conceptTestedAr: 'حساب قيم اللوغاريتمات الأساسية',
          conceptTestedEn: 'Evaluating basic logarithms',
          explanationAr: '$\\log_5(5^2) + \\log_2(2^3) - \\log_3(3^4) = 2 + 3 - 4 = 1$.',
          explanationEn: '2 + 3 - 4 = 1.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-m2-2',
          textAr: 'مجال الدالة $f(x) = \\log(x - 3)$ هو:',
          textEn: 'The domain of f(x) = log(x - 3) is:',
          optionsAr: ['$[3, \\infty)$', '$(3, \\infty)$', '$\\mathbb{R} - \\{3\\}$', '$(-\\infty, 3)$'],
          optionsEn: ['[3, ∞)', '(3, ∞)', 'R \\ {3}', '(-∞, 3)'],
          correctIndex: 1,
          conceptTestedAr: 'مجال الدالة اللوغاريتمية',
          conceptTestedEn: 'Domain of logarithmic function',
          explanationAr: 'يشترط للوغاريتم أن يكون المدخل موجباً قطعيًا: $x - 3 > 0 \\implies x > 3$ أي $(3, \\infty)$.',
          explanationEn: 'Log input must be strictly positive: x - 3 > 0 ⟹ x > 3 (3, ∞).',
          difficulty: 'easy'
        },
        {
          id: 'qh11-m2-3',
          textAr: 'إذا كان $2^x = 3$ و $3^y = 4$، فإن قيمة $x \\cdot y$ تساوي:',
          textEn: 'If 2^x = 3 and 3^y = 4, then x * y equals:',
          optionsAr: ['2', '6', '12', '1'],
          optionsEn: ['2', '6', '12', '1'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين الأسس واللوغاريتمات المتتابعة',
          conceptTestedEn: 'Chained exponential powers',
          explanationAr: 'بالتعويض: $4 = 3^y = (2^x)^y = 2^{xy}$. وبما أن $2^2 = 2^{xy} \\implies xy = 2$.',
          explanationEn: '(2^x)^y = 2^(xy) = 4 = 2^2 ⟹ xy = 2.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── LECTURE 3: CALCULUS: LIMITS OF ALGEBRAIC FUNCTIONS ──
  {
    id: 'h11-m3',
    order: 3,
    titleAr: 'المحاضرة 3: التفاضل: حساب نهايات الدوال جبرياً، الضرب في المرافق، ونظرية القانون 4',
    titleEn: 'Lecture 3: Calculus: Limits of Algebraic Functions, Conjugate Multiplication & Law 4 Form',
    subtitleAr: 'التعويض المباشر، حالات عدم التعيين (0/0)، التحليل، الضرب في المرافق الجذري، نظرية القانون 4 [(xⁿ - aⁿ)/(xᵐ - aᵐ)] والنهايات عند اللانهاية',
    subtitleEn: 'Master direct substitution, indeterminate form 0/0, factoring, conjugate radical multiplication, Law 4 limit formula, and limits at infinity.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: حساب التفاضل والتكامل (نهايات الدوال)',
    unitTitleEn: 'Unit 3: Calculus (Limits of Functions)',
    lessonNumberAr: 'الدرس 3: نهايات الدوال جبرياً',
    lessonNumberEn: 'Lesson 3: Algebraic Limits',

    keyConceptsAr: [
      'مفهوم النهاية $\\lim_{x \\to a} f(x) = L$ وتعيين الكميات غير المعينة ($\\frac{0}{0}$)',
      'إزالة العامل الصفري $(x - a)$ بواسطة التحليل أو القسمة المطولة/التركيبية',
      'الضرب في المرافق للجذور التربيعية والتكعيبية للتخلص من الصفر في المقام',
      'صيغة القانون 4 المباشرة: $\\lim_{x \\to a} \\frac{x^n - a^n}{x^m - a^m} = \\frac{n}{m} a^{n-m}$',
      'النهايات عند اللانهاية $\\lim_{x \\to \\infty} \\frac{f(x)}{g(x)}$ والقسمة على أعلى أس للمقام'
    ],
    keyConceptsEn: [
      'Concept of limit lim f(x) = L and indeterminate forms 0/0',
      'Eliminating zero factor (x - a) via algebraic factoring or synthetic division',
      'Multiplying by conjugate for square and cube root expressions',
      'Law 4 theorem formula: lim (x^n - a^n)/(x^m - a^m) = (n/m) * a^(n-m)',
      'Limits at infinity and dividing by highest power of x in denominator'
    ],

    conceptMapAr: [
      'تعويض مباشر ➔ ناتج حقيقي (انتهت) أو كمية غير معينة $\\frac{0}{0}$',
      'إذا كانت $\\frac{0}{0}$ ➔ تحليل / ضرب في المرافق / تطبيق القانون 4',
      'صيغة القانون 4 ➔ $\\lim_{x \\to a} \\frac{x^n - a^n}{x - a} = n a^{n-1}$',
      'النهاية عند اللانهاية $\\infty$ ➔ مقارنة درجة البسط والمقام'
    ],
    conceptMapEn: [
      'Direct substitution ➔ Real value (Done) or 0/0 indeterminate',
      'If 0/0 ➔ Factoring / Conjugate / Law 4 Theorem',
      'Law 4 ➔ lim (x^n - a^n)/(x - a) = n * a^(n-1)',
      'Limits at Infinity ➔ Compare numerator vs denominator degrees'
    ],

    learningOutcomesAr: [
      'حساب نهايات الدوال الكسرية الجبرية وإزالة العامل الصفري بالتحليل والمرافق.',
      'تطبيق نظرية القانون 4 ونتيجتها لحساب النهايات المعقدة في خطوة واحدة.',
      'إيجاد نهايات الدوال عند اللانهاية وتحديد خطوط التقارب الأفقية.'
    ],
    learningOutcomesEn: [
      'Calculate algebraic rational limits by canceling zero factors.',
      'Apply Law 4 limit theorem directly to evaluate complex radical and polynomial powers.',
      'Evaluate limits at infinity and identify horizontal asymptotes.'
    ],

    vocabulary: [
      { termAr: 'كمية غير معينة', termEn: 'Indeterminate Form', definitionAr: 'صيغة رياضية ناتجة مثل $\\frac{0}{0}$ أو $\\frac{\\infty}{\\infty}$ تتطلب تبسيطاً جبرياً لتعيين قيمتها الحقيقية.' },
      { termAr: 'العامل الصفري', termEn: 'Zero Factor', definitionAr: 'المقدار $(x - a)$ الذي يجعل البسط والمقام مساوياً للصفر عندما $x \\to a$.' }
    ],

    warmupHookAr: 'عند حساب السرعة اللحظية لسيارة سباق في لحظة زمنية محددة تماماً $\\Delta t = 0$، تظهر المعادلة كـ $\\frac{0}{0}$. علم التفاضل والنهايات هو الأداة الرياضية التي مكنت نيوتن ولايبنتز من حساب السرعة اللحظية وقوانين الفيزياء الحديثة بدقة متناهية!',
    warmupHookEn: 'Calculating instantaneous speed at an exact instant Δt = 0 leads to 0/0. Calculus and limits are the mathematical engine invented to resolve 0/0 and compute exact real-time velocity and acceleration.',

    mainContentAr: `
### 1. استراتيجيات حل النهايات الجبرية $\\frac{0}{0}$
1. **التحليل إلى عوامل (Factoring):**
   $$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x - 2)(x + 2)}{x - 2} = \\lim_{x \\to 2} (x + 2) = 4$$
2. **الضرب في المرافق (Conjugate):**
   $$\\lim_{x \\to 0} \\frac{\\sqrt{x + 4} - 2}{x} \\cdot \\frac{\\sqrt{x + 4} + 2}{\\sqrt{x + 4} + 2} = \\lim_{x \\to 0} \\frac{(x + 4) - 4}{x(\\sqrt{x + 4} + 2)} = \\frac{1}{4}$$

---

### 2. نظرية القانون 4 (Law 4 Formula)
$$\\lim_{x \\to a} \\frac{x^n - a^n}{x^m - a^m} = \\frac{n}{m} \\cdot a^{n - m}$$
* **النتيجة الهامة:** $\\lim_{x \\to 0} \\frac{(x + a)^n - a^n}{x} = n \\cdot a^{n - 1}$.

---

### 3. النهاية عند اللانهاية (Limits at Infinity)
* إذا كانت درجة البسط = درجة المقام $\\implies$ النهاية = معامل أعلى أس بالبسط / معامل أعلى أس بالمقام.
* إذا كانت درجة البسط < درجة المقام $\\implies$ النهاية $= 0$.
* إذا كانت درجة البسط > درجة المقام $\\implies$ النهاية $= \\pm \\infty$.
    `,
    mainContentEn: `
### Limit Strategies for 0/0
1. **Factoring & Cancellation**
2. **Conjugate Multiplication**
3. **Law 4 Formula:** $\\lim_{x \\to a} \\frac{x^n - a^n}{x^m - a^m} = \\frac{n}{m} a^{n - m}$
4. **Limits at Infinity:** Divide by highest power of x in denominator.
    `,

    diagramType: 'math_graph',
    diagramData: {
      type: 'limit_hole',
      title: 'النهاية عند نقطة وجود ثقب في المنحنى lim (x²-4)/(x-2) = 4',
      svgSnippet: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="200" x2="380" y2="200" stroke="#64748b" stroke-width="2" />
        <line x1="100" y1="20" x2="100" y2="220" stroke="#64748b" stroke-width="2" />
        <line x1="40" y1="200" x2="320" y2="60" stroke="#38bdf8" stroke-width="3" />
        <circle cx="180" cy="130" r="5" fill="#0f172a" stroke="#f43f5e" stroke-width="2.5" />
        <line x1="180" y1="130" x2="180" y2="200" stroke="#f43f5e" stroke-dasharray="3" />
        <line x1="180" y1="130" x2="100" y2="130" stroke="#f43f5e" stroke-dasharray="3" />
        <text x="175" y="215" fill="#f8fafc" font-size="12">x = 2</text>
        <text x="65" y="135" fill="#f8fafc" font-size="12">L = 4</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تطبيق نظرية القانون 4',
        titleEn: 'Example: Applying Law 4 Formula',
        problemAr: 'احسب: $\\lim_{x \\to 2} \\frac{x^5 - 32}{x^3 - 8}$.',
        problemEn: 'Evaluate lim_{x->2} (x^5 - 32)/(x^3 - 8).',
        stepsAr: [
          'التعويض المباشر يعطي $\\frac{2^5 - 32}{2^3 - 8} = \\frac{0}{0}$ (كمية غير معينة).',
          'نكتب المقدار على صورة القانون: $\\lim_{x \\to 2} \\frac{x^5 - 2^5}{x^3 - 2^3}$.',
          'نطبق صيغة القانون: $\\frac{n}{m} a^{n - m} = \\frac{5}{3} \\cdot 2^{5 - 3} = \\frac{5}{3} \\cdot 2^2 = \\frac{5}{3} \\cdot 4 = \\frac{20}{3}$.'
        ],
        stepsEn: [
          'Direct substitution yields 0/0.',
          'Rewrite in Law 4 format: lim_{x->2} (x^5 - 2^5)/(x^3 - 2^3).',
          'Apply theorem: (5/3) * 2^(5-3) = (5/3) * 4 = 20/3.'
        ],
        finalAnswerAr: 'قيمة النهاية هي $\\frac{20}{3}$',
        finalAnswerEn: 'Limit = 20/3'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11m-3',
        problemAr: 'احسب: $\\lim_{x \\to \\infty} \\frac{5x^3 - 2x + 1}{2x^3 + 7x^2 - 4}$.',
        problemEn: 'Evaluate lim_{x->inf} (5x^3 - 2x + 1)/(2x^3 + 7x^2 - 4).',
        solutionStepsAr: [
          'بما أن النهاية عند $\\infty$ ودرجة البسط (3) تساوي درجة المقام (3).',
          'نقسم كل حد في البسط والمقام على $x^3$: $\\lim_{x \\to \\infty} \\frac{5 - \\frac{2}{x^2} + \\frac{1}{x^3}}{2 + \\frac{7}{x} - \\frac{4}{x^3}} = \\frac{5 - 0 + 0}{2 + 0 - 0} = \\frac{5}{2}$.'
        ],
        finalAnswerAr: 'الناتج يساوي $\\frac{5}{2}$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11m-3',
        questionAr: 'قيمة النهاية $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$ تساوي:',
        questionEn: 'The value of lim_{x->3} (x^2 - 9)/(x - 3) is:',
        optionsAr: ['0', '3', '6', 'غير موجودة'],
        optionsEn: ['0', '3', '6', 'Does not exist'],
        correctIndex: 2,
        explanationAr: '$\\lim_{x \\to 3} \\frac{(x - 3)(x + 3)}{x - 3} = \\lim_{x \\to 3} (x + 3) = 3 + 3 = 6$.',
        explanationEn: '(x - 3)(x + 3)/(x - 3) simplifies to x + 3 = 3 + 3 = 6.'
      }
    ],

    assessment: {
      id: 'quiz-h11-m3',
      titleAr: 'اختبار إتقان نهايات الدوال الجبرية',
      titleEn: 'Mastery Quiz: Algebraic Limits',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-m3-1',
          textAr: 'قيمة النهاية $\\lim_{x \\to 1} \\frac{x^7 - 1}{x^4 - 1}$ تساوي:',
          textEn: 'The value of lim_{x->1} (x^7 - 1)/(x^4 - 1) is:',
          optionsAr: ['$\\frac{7}{4}$', '$\\frac{4}{7}$', '$1$', '$7$'],
          optionsEn: ['7/4', '4/7', '1', '7'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق نظرية القانون 4',
          conceptTestedEn: 'Application of Law 4 Formula',
          explanationAr: 'حسب القانون 4: $\\frac{7}{4} (1)^{7-4} = \\frac{7}{4}$.',
          explanationEn: '(7/4) * (1)^(7-4) = 7/4.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-m3-2',
          textAr: 'قيمة النهاية $\\lim_{x \\to \\infty} \\frac{3x^2 - 5}{4x^3 + 1}$ تساوي:',
          textEn: 'The value of lim_{x->inf} (3x^2 - 5)/(4x^3 + 1) is:',
          optionsAr: ['$\\frac{3}{4}$', '$\\infty$', '$0$', '$-\\frac{5}{1}$'],
          optionsEn: ['3/4', '∞', '0', '-5/1'],
          correctIndex: 2,
          conceptTestedAr: 'النهاية عند اللانهاية عندما تكون درجة البسط أقل من المقام',
          conceptTestedEn: 'Limits at infinity with numerator degree < denominator degree',
          explanationAr: 'بما أن درجة البسط (2) أقل من درجة المقام (3)، فإن النهاية تؤول إلى الصفر ($0$).',
          explanationEn: 'Numerator degree 2 < denominator degree 3 ⟹ limit is 0.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-m3-3',
          textAr: 'قيمة $\\lim_{x \\to 0} \\frac{\\sqrt{x + 9} - 3}{x}$ تساوي:',
          textEn: 'The value of lim_{x->0} (sqrt(x + 9) - 3)/x is:',
          optionsAr: ['$\\frac{1}{3}$', '$\\frac{1}{6}$', '$6$', '$0$'],
          optionsEn: ['1/3', '1/6', '6', '0'],
          correctIndex: 1,
          conceptTestedAr: 'الضرب في المرافق لإزالة العامل الصفري',
          conceptTestedEn: 'Conjugate multiplication for radical limits',
          explanationAr: 'بالضرب في المرافق $\\frac{\\sqrt{x+9}+3}{\\sqrt{x+9}+3}$ نحصل على $\\frac{x}{x(\\sqrt{x+9}+3)} = \\frac{1}{\\sqrt{9}+3} = \\frac{1}{6}$.',
          explanationEn: 'Multiplying by conjugate gives 1 / (sqrt(0 + 9) + 3) = 1/6.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: TRIGONOMETRIC LIMITS & CONTINUITY ──
  {
    id: 'h11-m4',
    order: 4,
    titleAr: 'المحاضرة 4: نهايات الدوال المثلثية، وبحث اتصال الدالة عند نقطة وعلى فترة',
    titleEn: 'Lecture 4: Trigonometric Limits & Function Continuity at Points & Intervals',
    subtitleAr: 'نظريات نهايات الجيب والظل [lim sin(ax)/bx = a/b]، شروط الاتصال الثلاثة f(a) = lim f(x)، وبحث الاتصال للدوال المعرفة بأكثر من قاعدة',
    subtitleEn: 'Master trig limits lim sin(ax)/bx = a/b, lim tan(ax)/bx = a/b, 3 continuity conditions f(a) = lim f(x), and piecewise continuity.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: حساب التفاضل (نهايات الدوال والاتصال)',
    unitTitleEn: 'Unit 3: Calculus (Trig Limits & Continuity)',
    lessonNumberAr: 'الدرس 4: نهايات الدوال المثلثية والاتصال',
    lessonNumberEn: 'Lesson 4: Trig Limits & Continuity',

    keyConceptsAr: [
      'نظرية نهايات الدوال المثلثية بالتقدير الدائري: $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$',
      'نتيجة الظل: $\\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}$ و $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$',
      'شروط اتصال الدالة عند $x = a$: 1) $f(a)$ معرفة، 2) $\\lim_{x \\to a} f(x)$ موجودة، 3) $\\lim_{x \\to a} f(x) = f(a)$',
      'اتصال الدوال متعددة القواعد ومفهوم النهاية اليمنى واليسرى $f(a^+) = f(a^-) = f(a)$'
    ],
    keyConceptsEn: [
      'Trig limit fundamental theorem in radians: lim_{x->0} sin(ax)/bx = a/b',
      'Tangent corollary: lim_{x->0} tan(ax)/bx = a/b and lim_{x->0} (1 - cos x)/x = 0',
      '3 Continuity conditions at x = a: f(a) is defined, lim exists, and lim f(x) = f(a)',
      'Piecewise continuity requiring left limit = right limit = function value'
    ],

    conceptMapAr: [
      'نهايات الدوال المثلثية ➔ الزاوية بالراديان ➔ $\\frac{\\sin ax}{bx} \\to \\frac{a}{b}$',
      'فحص الاتصال ➔ 1) القيمة $f(a)$ ➔ 2) النهاية $\\lim f(x)$ ➔ 3) التطابق',
      'عدم الاتصال ➔ قابل للإزالة (ثقب) / قفزي (نهاية يمنى $\\ne$ يسرى) / لا نهائي'
    ],
    conceptMapEn: [
      'Trig Limits ➔ Radians required ➔ sin(ax)/bx ➔ a/b',
      'Continuity Test ➔ 1) Defined value ➔ 2) Limit exists ➔ 3) Equality',
      'Discontinuities ➔ Removable (hole) / Jump / Infinite'
    ],

    learningOutcomesAr: [
      'حساب نهايات الدوال المثلثية المشتملة على $\\sin, \\tan$ بدقة بالتقدير الدائري.',
      'التحقق من اتصال الدالة عند نقطة محددة وتحديد نوع عدم الاتصال إن وجد.',
      'إيجاد قيم الثوابت المجهولة التي تجعل الدالة متصلة على مجالها.'
    ],
    learningOutcomesEn: [
      'Evaluate trigonometric limits using fundamental radian theorems.',
      'Test continuity of algebraic and piecewise functions at specific points.',
      'Determine unknown constants that enforce function continuity.'
    ],

    vocabulary: [
      { termAr: 'الاتصال عند نقطة', termEn: 'Continuity at a Point', definitionAr: 'تكون الدالة متصلة عند $x=a$ إذا أمكن رسم منحناها دون رفع القلم عن الورقة، أي أن النهاية تساوي قيمة الدالة.' },
      { termAr: 'التقدير الدائري', termEn: 'Radian Measure', definitionAr: 'نظام قياس الزوايا المشترط في نظريات نهايات وتفاضل الدوال المثلثية.' }
    ],

    warmupHookAr: 'في تصميم مسارات قطار الموت (Roller Coaster) وهندسة الجسور المعلقة، يجب أن تكون منحنيات المسارات متصلة تماماً (Continuous) وخالية من أي قفزات مفاجئة لضمان سلامة الركاب وعدم حدوث انقطاع في القوى المؤثرة!',
    warmupHookEn: 'Rollercoaster track and suspension bridge engineering strictly require smooth mathematical continuity to guarantee zero abrupt force transitions and passenger structural safety.',

    mainContentAr: `
### 1. نظريات نهايات الدوال المثلثية (Trigonometric Limits)
* **القاعدة 1:** $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$.
* **القاعدة 2:** $\\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}$.
* **القاعدة 3:** $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$.
* *تنبيه هام:* $\\lim_{x \\to 0} \\frac{\\cos x}{x} = \\frac{1}{0}$ (غير معينة / غير موجودة)، بينما $\\lim_{x \\to 0} \\cos x = 1$.

---

### 2. شروط اتصال الدالة عند $x = a$ (Continuity Conditions)
تكون الدالة $f$ متصلة عند $x = a$ إذا وفقط إذا تحققت الشروط الثلاثة معاً:
1. $f(a)$ معرفة ولها قيمة حقيقية.
2. $\\lim_{x \\to a} f(x)$ موجودة (أي النهاية اليمنى $f(a^+) =$ النهاية اليسرى $f(a^-)$).
3. $\\lim_{x \\to a} f(x) = f(a)$.
    `,
    mainContentEn: `
### Trig Limit Theorems
* $\\lim_{x \\to 0} \\frac{\\sin ax}{bx} = \\frac{a}{b}$
* $\\lim_{x \\to 0} \\frac{\\tan ax}{bx} = \\frac{a}{b}$
* $\\lim_{x \\to 0} \\frac{1 - \\cos x}{x} = 0$

### Continuity Test at x = a
1. $f(a)$ is defined.
2. $\\lim_{x \\to a} f(x)$ exists ($f(a^+) = f(a^-)$).
3. $\\lim_{x \\to a} f(x) = f(a)$.
    `,

    diagramType: 'math_graph',
    diagramData: {
      type: 'continuity_cases',
      title: 'مقارنة بين دالة متصلة ودالة غير متصلة (عدم اتصال قفزي)',
      svgSnippet: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="200" x2="380" y2="200" stroke="#64748b" stroke-width="2" />
        <line x1="200" y1="20" x2="200" y2="220" stroke="#64748b" stroke-width="2" />
        <path d="M 40 160 Q 120 150 200 120" stroke="#34d399" stroke-width="3" fill="none" />
        <circle cx="200" cy="120" r="5" fill="#34d399" />
        <path d="M 200 70 Q 280 60 360 40" stroke="#38bdf8" stroke-width="3" fill="none" />
        <circle cx="200" cy="70" r="5" fill="#0f172a" stroke="#38bdf8" stroke-width="2.5" />
        <text x="210" y="100" fill="#f43f5e" font-size="12">قفزة (عدم اتصال قفزي)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: إيجاد قيمة ثابت لجعل الدالة متصلة',
        titleEn: 'Example: Finding Constant for Continuity',
        problemAr: 'أوجد قيمة $k$ التي تجعل الدالة $f$ متصلة عند $x = 0$ حيث: $f(x) = \\begin{cases} \\frac{\\sin 4x}{2x} & x \\ne 0 \\\\ k & x = 0 \\end{cases}$.',
        problemEn: 'Find k such that f is continuous at x = 0.',
        stepsAr: [
          'نحسب نهاية الدالة عندما $x \\to 0$: $\\lim_{x \\to 0} f(x) = \\lim_{x \\to 0} \\frac{\\sin 4x}{2x} = \\frac{4}{2} = 2$.',
          'قيمة الدالة عند الصفر: $f(0) = k$.',
          'لتحقيق شرط الاتصال يجب أن يكون $\\lim_{x \\to 0} f(x) = f(0) \\implies 2 = k$.'
        ],
        stepsEn: [
          'Calculate limit: lim_{x->0} sin(4x)/(2x) = 4/2 = 2.',
          'Function value: f(0) = k.',
          'For continuity: lim f(x) = f(0) ⟹ k = 2.'
        ],
        finalAnswerAr: 'قيمة الثابت $k = 2$',
        finalAnswerEn: 'k = 2'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11m-4',
        problemAr: 'احسب: $\\lim_{x \\to 0} \\frac{\\sin 3x + \\tan 5x}{4x}$.',
        problemEn: 'Evaluate lim_{x->0} (sin 3x + tan 5x)/(4x).',
        solutionStepsAr: [
          'نوزع البسط على المقام: $\\lim_{x \\to 0} [\\frac{\\sin 3x}{4x} + \\frac{\\tan 5x}{4x}]$.',
          'نطبق نظريات النهايات المثلثية: $\\frac{3}{4} + \\frac{5}{4} = \\frac{8}{4} = 2$.'
        ],
        finalAnswerAr: 'الناتج يساوي $2$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11m-4',
        questionAr: 'قيمة النهاية $\\lim_{x \\to 0} \\frac{\\tan^2 3x}{x^2}$ تساوي:',
        questionEn: 'The value of lim_{x->0} (tan^2 3x)/x^2 is:',
        optionsAr: ['3', '6', '9', '0'],
        optionsEn: ['3', '6', '9', '0'],
        correctIndex: 2,
        explanationAr: '$\\lim_{x \\to 0} (\\frac{\\tan 3x}{x})^2 = (3)^2 = 9$.',
        explanationEn: '(tan(3x)/x)^2 = 3^2 = 9.'
      }
    ],

    assessment: {
      id: 'quiz-h11-m4',
      titleAr: 'اختبار إتقان النهايات المثلثية والاتصال',
      titleEn: 'Mastery Quiz: Trig Limits & Continuity',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-m4-1',
          textAr: 'قيمة $\\lim_{x \\to 0} \\frac{1 - \\cos 2x}{x}$ تساوي:',
          textEn: 'The value of lim_{x->0} (1 - cos 2x)/x is:',
          optionsAr: ['2', '0', '1', 'غير موجودة'],
          optionsEn: ['2', '0', '1', 'Does not exist'],
          correctIndex: 1,
          conceptTestedAr: 'نتيجة جيب التمام في النهايات',
          conceptTestedEn: 'Cosine limit result',
          explanationAr: 'حسب النتيجة الأساسية: $\\lim_{x \\to 0} \\frac{1 - \\cos(kx)}{x} = 0$.',
          explanationEn: 'Fundamental limit rule gives 0.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-m4-2',
          textAr: 'إذا كانت الدالة $f(x) = \\begin{cases} x^2 + 1 & x \\ge 2 \\\\ 3x - 1 & x < 2 \\end{cases}$، فإن الدالة عند $x = 2$ تكون:',
          textEn: 'For the piecewise function at x = 2, f(x) is:',
          optionsAr: ['متصلة', 'غير متصلة لوجود قفزة', 'غير معرفة', 'لها نهاية غير موجودة'],
          optionsEn: ['Continuous', 'Discontinuous with jump', 'Undefined', 'Limit does not exist'],
          correctIndex: 0,
          conceptTestedAr: 'بحث اتصال الدالة متعددة القواعد',
          conceptTestedEn: 'Continuity of piecewise functions',
          explanationAr: 'النهاية اليمنى $f(2^+) = 2^2 + 1 = 5$، والنهاية اليسرى $f(2^-) = 3(2) - 1 = 5$، وقيمة الدالة $f(2) = 5$. إذن متصلة.',
          explanationEn: 'Left limit = 5, Right limit = 5, f(2) = 5 ⟹ Function is continuous.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-m4-3',
          textAr: 'قيمة $\\lim_{x \\to 0} \\frac{\\sin 5x}{\\sin 2x}$ تساوي:',
          textEn: 'The value of lim_{x->0} sin(5x)/sin(2x) is:',
          optionsAr: ['$\\frac{5}{2}$', '$\\frac{2}{5}$', '$1$', '$0$'],
          optionsEn: ['5/2', '2/5', '1', '0'],
          correctIndex: 0,
          conceptTestedAr: 'قسمة البسط والمقام على x في نهايات الجيب',
          conceptTestedEn: 'Evaluating quotient of sine limits',
          explanationAr: 'بقسمة البسط والمقام على $x$: $\\frac{\\frac{\\sin 5x}{x}}{\\frac{\\sin 2x}{x}} = \\frac{5}{2}$.',
          explanationEn: 'Dividing numerator and denominator by x yields 5/2.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: SINE RULE & COSINE RULE TRIGONOMETRY ──
  {
    id: 'h11-m5',
    order: 5,
    titleAr: 'المحاضرة 5: حساب المثلثات: قاعدة الجيب وقاعدة جيب التمام وحل المثلث وتطبيقات الزوايا',
    titleEn: 'Lecture 5: Triangle Trigonometry: The Sine Rule, Cosine Rule & Geometric Applications',
    subtitleAr: 'قانون الجيب [a/sin A = b/sin B = c/sin C = 2R] ونصف قطر الدائرة المارة برؤوس المثلث، قانون جيب التمام، حساب مساحة المثلث، وزوايا الارتفاع والانخفاض',
    subtitleEn: 'Master Law of Sines a/sin A = b/sin B = c/sin C = 2R, circumcircle radius, Law of Cosines, triangle area formulas, and angles of elevation & depression.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: حساب المثلثات وتطبيقاتها',
    unitTitleEn: 'Unit 4: Trigonometry & Applications',
    lessonNumberAr: 'الدرس 5: قاعدتا الجيب وجيب التمام',
    lessonNumberEn: 'Lesson 5: Sine & Cosine Rules',

    keyConceptsAr: [
      'قاعدة الجيب في أي مثلث $ABC$: $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$ (حيث $R$ نصف قطر الدائرة الخارجة)',
      'قاعدة جيب التمام لحساب ضلع بمعلومية ضلعين وزاوية محصورة: $a^2 = b^2 + c^2 - 2bc \\cos A$',
      'قاعدة جيب التمام لحساب قياس زاوية بمعلومية أطوال الأضلاع الثلاثة: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$',
      'مساحة المثلث: $\\text{Area} = \\frac{1}{2} ab \\sin C = \\frac{1}{2} bc \\sin A = \\frac{1}{2} ac \\sin B$',
      'تطبيقات زوايا الارتفاع والانخفاض والملاحة وتحديد أبعاد الأجرام'
    ],
    keyConceptsEn: [
      'Law of Sines: a/sin A = b/sin B = c/sin C = 2R (R is circumradius)',
      'Law of Cosines for side length: a^2 = b^2 + c^2 - 2bc cos A',
      'Law of Cosines for angle calculation: cos A = (b^2 + c^2 - a^2) / (2bc)',
      'Triangle Area formula: Area = 1/2 * a * b * sin C',
      'Real-world elevation/depression angles, navigation vectors, and surveying'
    ],

    conceptMapAr: [
      'المعطيات: زاويتان وضلع (AAS / ASA) ➔ تطبيق قاعدة الجيب فوراً $\\frac{a}{\\sin A} = 2R$',
      'المعطيات: ضلعان وزاوية محصورة (SAS) ➔ تطبيق قاعدة جيب التمام $a^2 = b^2 + c^2 - 2bc \\cos A$',
      'المعطيات: ثلاثة أضلاع (SSS) ➔ تطبيق صيغة جيب التمام لحساب أكبر وأصغر زاوية',
      'حساب محيط ومساحة الدائرة المارة برؤوس المثلث ➔ $R = \\frac{a}{2\\sin A}$'
    ],
    conceptMapEn: [
      'Given: Two angles & one side (AAS/ASA) ➔ Use Law of Sines a/sin A = 2R',
      'Given: Two sides & included angle (SAS) ➔ Use Law of Cosines',
      'Given: Three sides (SSS) ➔ Use Cosine formula for angles',
      'Circumcircle radius calculation ➔ R = a / (2 sin A)'
    ],

    learningOutcomesAr: [
      'استخدام قاعدة الجيب لحل المثلث وإيجاد نصف قطر الدائرة المارة برؤوسه $R$.',
      'استخدام قاعدة جيب التمام لإيجاد أطوال الأضلاع وقياسات الزوايا لأي مثلث غير قائم.',
      'حساب مساحة المثلث ومساحة ومحيط الدائرة المحيطة به بدقة.',
      'حل مسائل حياتية تتضمن زوايا الارتفاع والانخفاض وتحديد المسافات الوعرة.'
    ],
    learningOutcomesEn: [
      'Solve non-right triangles using the Law of Sines and determine circumradius R.',
      'Solve triangles using the Law of Cosines given SAS or SSS configurations.',
      'Calculate triangle areas and circumcircle parameters.',
      'Solve practical surveying and navigation problems involving elevation and depression angles.'
    ],

    vocabulary: [
      { termAr: 'قاعدة الجيب', termEn: 'Law of Sines', definitionAr: 'علاقة تناسب بين أطوال أضلاع المثلث وجيوب الزوايا المقابلة لها تساوي قطر الدائرة المارة برؤوسه.' },
      { termAr: 'نصف قطر الدائرة الخارجة', termEn: 'Circumradius (R)', definitionAr: 'نصف قطر الدائرة التي تمر بجميع رؤوس المثلث الثلاثة وتحقق $2R = \\frac{a}{\\sin A}$.' }
    ],

    warmupHookAr: 'كيف يحدد نظام تحديد المواقع العالمي (GPS) وسفن الملاحة البحرية موقعك في عرض البحر دون لمس اليابسة؟ عبر قياس زوايا الإشارات اللاسلكية وتطبيق قانوني الجيب وجيب التمام (Triangulation) لحساب الإحداثيات بدقة السنتيمتر!',
    warmupHookEn: 'How do GPS satellites pinpoint an exact location in open ocean? By measuring arrival angles from multiple orbital beacons and solving triangle geometry using the Sine and Cosine laws (Triangulation).',

    mainContentAr: `
### 1. قاعدة الجيب (The Law of Sines)
في أي مثلث $ABC$:
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$
* حيث $R$ هو نصف قطر الدائرة المارة برؤوس المثلث.
* **استخداماتها:** تُستخدم عند معرفة:
  1. قياس زاويتين وطول أي ضلع (AAS أو ASA).
  2. طول ضلعين وقياس زاوية مقابلة لأحدهما (الحالة المبهمة SSA).

---

### 2. قاعدة جيب التمام (The Law of Cosines)
* **لحساب طول ضلع:**
  $$a^2 = b^2 + c^2 - 2bc \\cos A$$
  $$b^2 = a^2 + c^2 - 2ac \\cos B$$
  $$c^2 = a^2 + b^2 - 2ab \\cos C$$
* **لحساب قياس زاوية:**
  $$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$

---

### 3. مساحة المثلث (Area of a Triangle)
$$\\text{Area} = \\frac{1}{2} a b \\sin C = \\frac{1}{2} b c \\sin A = \\frac{1}{2} a c \\sin B$$
    `,
    mainContentEn: `
### Law of Sines
$$\\frac{a}{\\sin A} = \\frac{b}{\\sin B} = \\frac{c}{\\sin C} = 2R$$

### Law of Cosines
$$a^2 = b^2 + c^2 - 2bc \\cos A$$
$$\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$$

### Area of Triangle
$$\\text{Area} = \\frac{1}{2} ab \\sin C$$
    `,

    diagramType: 'triangle_geometry',
    diagramData: {
      type: 'circumcircle_triangle',
      title: 'المثلث والدائرة المارة برؤوسه ونصف القطر R',
      svgSnippet: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="120" r="90" stroke="#38bdf8" stroke-width="2" fill="none" stroke-dasharray="4" />
        <polygon points="200,30 115,165 285,165" stroke="#34d399" stroke-width="3" fill="rgba(52, 211, 153, 0.1)" />
        <circle cx="200" cy="120" r="4" fill="#fbbf24" />
        <line x1="200" y1="120" x2="200" y2="30" stroke="#fbbf24" stroke-width="2" />
        <text x="195" y="20" fill="#f8fafc" font-size="13" font-weight="bold">A</text>
        <text x="95" y="180" fill="#f8fafc" font-size="13" font-weight="bold">B</text>
        <text x="295" y="180" fill="#f8fafc" font-size="13" font-weight="bold">C</text>
        <text x="210" y="80" fill="#fbbf24" font-size="12">R (نصف القطر)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حساب نصف قطر الدائرة الخارجة للمثلث',
        titleEn: 'Example: Circumcircle Radius Calculation',
        problemAr: 'في المثلث $ABC$، إذا كان $a = 10\\text{ cm}$ و $m(\\angle A) = 30^\\circ$، احسب نصف قطر الدائرة المارة برؤوس المثلث ومساحة الدائرة.',
        problemEn: 'In triangle ABC, a = 10 cm and angle A = 30°. Find the circumradius R and circumcircle area.',
        stepsAr: [
          'نطبق قاعدة الجيب: $\\frac{a}{\\sin A} = 2R$.',
          '$\\frac{10}{\\sin 30^\\circ} = 2R \\implies \\frac{10}{0.5} = 20 = 2R \\implies R = 10\\text{ cm}$.',
          'مساحة الدائرة $= \\pi R^2 = \\pi (10)^2 = 100\\pi \\approx 314.16\\text{ cm}^2$.'
        ],
        stepsEn: [
          'Apply Law of Sines: a / sin A = 2R.',
          '10 / sin 30° = 10 / 0.5 = 20 = 2R ⟹ R = 10 cm.',
          'Circle Area = π R^2 = 100π ≈ 314.16 cm^2.'
        ],
        finalAnswerAr: 'نصف القطر $R = 10\\text{ cm}$ ومساحة الدائرة $= 100\\pi\\text{ cm}^2$',
        finalAnswerEn: 'R = 10 cm, Circle Area = 100π cm^2'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11m-5',
        problemAr: 'في المثلث $ABC$، إذا كانت أطوال الأضلاع $a = 5\\text{ cm}, b = 6\\text{ cm}, c = 7\\text{ cm}$، احسب قياس الزاوية $A$.',
        problemEn: 'In triangle ABC with a = 5, b = 6, c = 7, calculate angle A.',
        solutionStepsAr: [
          'نطبق قانون جيب التمام: $\\cos A = \\frac{b^2 + c^2 - a^2}{2bc}$.',
          '$\\cos A = \\frac{6^2 + 7^2 - 5^2}{2(6)(7)} = \\frac{36 + 49 - 25}{84} = \\frac{60}{84} = \\frac{5}{7} \\approx 0.7143$.',
          '$m(\\angle A) = \\cos^{-1}(\\frac{5}{7}) \\approx 44.42^\\circ$.'
        ],
        finalAnswerAr: '$m(\\angle A) \\approx 44^\\circ 25\'$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11m-5',
        questionAr: 'في أي مثلث $ABC$، المقدار $\\frac{a \\sin B}{b \\sin A}$ يساوي دائماً:',
        questionEn: 'In any triangle ABC, the expression (a sin B) / (b sin A) always equals:',
        optionsAr: ['1', '2', 'R', '0.5'],
        optionsEn: ['1', '2', 'R', '0.5'],
        correctIndex: 0,
        explanationAr: 'من قاعدة الجيب $\\frac{a}{\\sin A} = \\frac{b}{\\sin B} \\implies a \\sin B = b \\sin A$؛ وبالتالي حاصل قسمتهما يساوي $1$.',
        explanationEn: 'By Law of Sines a sin B = b sin A, hence their ratio is identically 1.'
      }
    ],

    assessment: {
      id: 'quiz-h11-m5',
      titleAr: 'اختبار إتقان حساب المثلثات وقاعدتي الجيب وجيب التمام',
      titleEn: 'Mastery Quiz: Law of Sines & Cosines',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-m5-1',
          textAr: 'في المثلث $ABC$ متساوي الأضلاع الذي طول ضلعه $6\\sqrt{3}\\text{ cm}$، يكون طول قطر الدائرة المارة برؤوسه مساوياً:',
          textEn: 'In an equilateral triangle with side length 6*sqrt(3) cm, the diameter of circumcircle (2R) is:',
          optionsAr: ['12 cm', '6 cm', '18 cm', '24 cm'],
          optionsEn: ['12 cm', '6 cm', '18 cm', '24 cm'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قاعدة الجيب في المثلث متساوي الأضلاع',
          conceptTestedEn: 'Law of Sines on equilateral triangle',
          explanationAr: 'في المثلث متساوي الأضلاع زواياه $60^\\circ$. $2R = \\frac{a}{\\sin 60^\\circ} = \\frac{6\\sqrt{3}}{\\frac{\\sqrt{3}}{2}} = 12\\text{ cm}$.',
          explanationEn: '2R = (6*sqrt(3)) / sin(60°) = (6*sqrt(3)) / (sqrt(3)/2) = 12 cm.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-m5-2',
          textAr: 'مساحة المثلث $ABC$ الذي فيه $a = 8\\text{ cm}, b = 10\\text{ cm}, m(\\angle C) = 30^\\circ$ تساوي:',
          textEn: 'The area of triangle ABC with a = 8 cm, b = 10 cm, angle C = 30° is:',
          optionsAr: ['20 cm²', '40 cm²', '80 cm²', '10 cm²'],
          optionsEn: ['20 cm²', '40 cm²', '80 cm²', '10 cm²'],
          correctIndex: 0,
          conceptTestedAr: 'قانون مساحة المثلث باستخدام جيب الزاوية',
          conceptTestedEn: 'Triangle area using sine formula',
          explanationAr: '$\\text{Area} = \\frac{1}{2} a b \\sin C = \\frac{1}{2} (8)(10) \\sin 30^\\circ = 40 \\times 0.5 = 20\\text{ cm}^2$.',
          explanationEn: 'Area = 0.5 * 8 * 10 * sin(30°) = 20 cm².',
          difficulty: 'easy'
        },
        {
          id: 'qh11-m5-3',
          textAr: 'في المثلث $ABC$، إذا كان $a^2 = b^2 + c^2 + bc$، فإن قياس الزاوية $A$ يساوي:',
          textEn: 'In triangle ABC, if a^2 = b^2 + c^2 + bc, then angle A equals:',
          optionsAr: ['$60^\\circ$', '$120^\\circ$', '$150^\\circ$', '$30^\\circ$'],
          optionsEn: ['60°', '120°', '150°', '30°'],
          correctIndex: 1,
          conceptTestedAr: 'المطابقة مع قانون جيب التمام لإيجاد الزاوية المنفرجة',
          conceptTestedEn: 'Matching Cosine Law for obtuse angle',
          explanationAr: 'بمقارنة $a^2 = b^2 + c^2 - 2bc \\cos A$ مع المعطى $a^2 = b^2 + c^2 + bc$، نجد أن $-2\\cos A = 1 \\implies \\cos A = -0.5 \\implies m(\\angle A) = 120^\\circ$.',
          explanationEn: '-2 cos A = 1 ⟹ cos A = -0.5 ⟹ angle A = 120°.',
          difficulty: 'hard'
        }
      ]
    }
  }
];
