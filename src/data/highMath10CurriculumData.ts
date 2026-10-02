import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL MATHEMATICS — GRADE 10 (رياضيات الصف الأول الثانوي - لغات وعربي)
// Official Grade 10 / Secondary 1 National Ministry & Language School Curriculum Alignment:
// Unit 1: Algebra (Complex Numbers i, Nature of Quadratic Roots via Discriminant, Sign of Functions, Quadratic Inequalities)
// Unit 2: Trigonometry (Directed Angles, Radian & Degree Measure, Unit Circle, Related Angles, General Solutions)
// Unit 3: Geometry (Similarity of Polygons & Triangles, Ratio of Areas, Power of a Point)
// Unit 4: Proportionality in Triangles & Thales Theorem (Interior/Exterior Angle Bisectors, Thales Theorem)
// Unit 5: 2D Vectors & Analytic Geometry (Vectors in 2D, Division of Line Segment, Vector & Cartesian Line Equations, Perpendicular Distance)
// ============================================================================

export const HIGH_MATH_G10_LECTURES: Lecture[] = [
  // ── LECTURE 1: ALGEBRA: COMPLEX NUMBERS & QUADRATIC ROOTS ──
  {
    id: 'h10-math-1',
    order: 1,
    titleAr: 'المحاضرة 1: الأعداد المركبة، وتحديد نوع جذري المعادلة التربيعية، وبحث إشارة الدالة',
    titleEn: 'Lecture 1: Complex Numbers (i), Nature of Quadratic Roots (Discriminant) & Sign of Functions',
    subtitleAr: 'العدد التخيلي $i$ والعمليات على الأعداد المركبة، المميز $\\Delta = b^2 - 4ac$، العلاقة بين جذري المعادلة والمعاملات، وإشارة الدوال والمتباينات التربيعية',
    subtitleEn: 'Master imaginary unit i, complex numbers arithmetic, quadratic discriminant nature of roots, sum/product of roots, sign of linear/quadratic functions, and quadratic inequalities.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الجبر والعلاقات والدوال التربيعية',
    unitTitleEn: 'Unit 1: Algebra, Complex Numbers & Quadratic Functions',
    lessonNumberAr: 'الدرس 1: الأعداد المركبة والمميز وإشارة الدالة',
    lessonNumberEn: 'Lesson 1: Complex Numbers, Discriminant & Function Sign',

    warmupHookAr: 'عندما حاول علماء الرياضيات القدماء حل المعادلة $x^2 + 1 = 0$، اصطدموا باستحالة إيجاد جذر تربيعي لعدد سالب في الأعداد الحقيقية $\\mathbb{R}$. لكن في القرن السادس عشر، ابتكر العلماء العدد التخيلي $i = \\sqrt{-1}$، مما فتح الباب أمام "الأعداد المركبة" $\\mathbb{C}$ التي أصبحت العمود الفقري لهندسة الدوائر الكهربائية ومعالجة الإشارات الرقمية ورسومات ألعاب الفيديو ثلاثية الأبعاد!',
    warmupHookEn: 'Solving x² + 1 = 0 led to the discovery of imaginary unit i = √(-1) and complex numbers ℂ, which now power modern electrical AC circuit analysis, quantum physics, and computer graphics!',

    learningOutcomesAr: [
      'أن يبسط الطالب قوى العدد التخيلي $i^n$ ويجري العمليات الحسابية الأساسية (الجمع، الطرح، الضرب، والقسمة بالضرب في المرافق) على الأعداد المركبة',
      'أن يحدد نوع جذري المعادلة التربيعية $ax^2 + bx + c = 0$ باستخدام المميز $\\Delta = b^2 - 4ac$ (حقيقيان مختلفان، حقيقيان متساويان، أو مركبان مترافقان غير حقيقيين)',
      'أن يكون المعادلة التربيعية بمعلومية جذريها $L, M$ باستخدام العلاقة: $x^2 - (L + M)x + LM = 0$',
      'أن يبحث إشارة الدالة الثابتة، الخطية، والتربيعية، ويحل المتباينات التربيعية بيانياً وجبرياً'
    ],
    learningOutcomesEn: [
      'Simplify powers of imaginary unit i^n and perform complex arithmetic (addition, multiplication, division via conjugates)',
      'Determine nature of quadratic roots using the discriminant Δ = b² - 4ac (two distinct real, two equal real, or two complex conjugates)',
      'Construct quadratic equations from roots L and M via: x² - (L + M)x + LM = 0',
      'Analyze sign of linear and quadratic functions and solve quadratic inequalities analytically'
    ],

    vocabulary: [
      {
        termAr: 'العدد التخيلي (Imaginary Unit - i)',
        termEn: 'Imaginary Unit (i)',
        definitionAr: 'العدد الذي مربعه يساوي $-1$، أي $i^2 = -1$. وقوى $i$ دورية كل 4 درجات ($i^1=i, i^2=-1, i^3=-i, i^4=1$).',
        definitionEn: 'The number defined such that i² = -1. Powers of i repeat in a cycle of 4: i, -1, -i, 1.'
      },
      {
        termAr: 'العدد المركب والمرافق (Complex Number & Conjugate)',
        termEn: 'Complex Number & Conjugate',
        definitionAr: 'العدد بالصورة $z = a + bi$ (حيث $a, b \\in \\mathbb{R}$). مرافقه هو $\\bar{z} = a - bi$، وحاصل ضربهما عدد حقيقي موجب: $(a+bi)(a-bi) = a^2 + b^2$.',
        definitionEn: 'A number of form z = a + bi (a, b ∈ ℝ). Its complex conjugate is z̄ = a - bi, and their product is a² + b².'
      },
      {
        termAr: 'المميز (The Discriminant - Δ)',
        termEn: 'The Discriminant (Δ)',
        definitionAr: 'المقدار $\\Delta = b^2 - 4ac$ في المعادلة $ax^2 + bx + c = 0$. يحدد نوع وعدد الجذور.',
        definitionEn: 'The expression Δ = b² - 4ac determining root nature in quadratic equations.'
      }
    ],

    keyConceptsAr: [
      'إذا كان $\\Delta > 0$: الجذران حقيقيان مختلفان (المنحنى يقطع محور السينات في نقطتين)',
      'إذا كان $\\Delta = 0$: الجذران حقيقيان متساويان (المنحنى يمس محور السينات في نقطة واحدة رأس المنحنى)',
      'إذا كان $\\Delta < 0$: الجذران مركبان مترافقان غير حقيقيين (المنحنى لا يقطع محور السينات)',
      'مجموع الجذرين $L + M = -\\frac{b}{a}$ ، وحاصل ضرب الجذرين $L \\cdot M = \\frac{c}{a}$',
      'إشارة الدالة التربيعية $f(x) = ax^2 + bx + c$ بين الجذرين تخالف إشارة $a$، وخارج الجذرين توافق إشارة $a$'
    ],
    keyConceptsEn: [
      'Δ > 0: Two distinct real roots (parabola intersects x-axis at 2 points)',
      'Δ = 0: Two equal real roots (parabola touches x-axis at 1 vertex point)',
      'Δ < 0: Two complex conjugate non-real roots (parabola does not intersect x-axis)',
      'Sum of roots L + M = -b/a; Product of roots L · M = c/a',
      'Quadratic sign: opposite sign of a between roots, same sign of a outside roots'
    ],

    summaryAr: 'تغطي المحاضرة الأولى الجبر لصف الأول الثانوي: الأعداد المركبة وقوى $i$ والعمليات عليها بالضرب في المرافق، استخدام المميز لتحديد طبيعة الجذور، تكوين المعادلات من جذورها، وبحث إشارة الدوال لحل المتباينات.',
    summaryEn: 'Comprehensive Grade 10 algebra: complex numbers arithmetic, discriminant root classification, root-coefficient formulas, and quadratic inequality sign analysis.',

    sections: [
      {
        titleAr: '1. الأعداد المركبة وقوى العدد التخيلي i',
        titleEn: '1. Complex Numbers & Powers of i',
        contentAr: '1) قوى العدد التخيلي $i$:\n- $i^1 = i$\n- $i^2 = -1$\n- $i^3 = i^2 \\cdot i = -i$\n- $i^4 = 1$\n- لقسمة أسس $i$: نقسم الأس على 4 ونأخذ باقي القسمة: $i^{26} = i^2 = -1$ ، $i^{43} = i^3 = -i$ ، $i^{100} = 1$.\n\n2) قسمة الأعداد المركبة (الضرب في المرافق):\n- لحساب $\\frac{2 + 3i}{1 - i}$، نضرب البسط والمقام في مرافق المقام وهو $(1 + i)$:\n  * البسط: $(2 + 3i)(1 + i) = 2 + 2i + 3i + 3i^2 = 2 + 5i - 3 = -1 + 5i$.\n  * المقام: $(1 - i)(1 + i) = 1^2 + 1^2 = 2$.\n  * الناتج النهائي: $-\\frac{1}{2} + \\frac{5}{2}i$.',
        contentEn: 'Powers of i repeat mod 4. Division is computed by multiplying numerator and denominator by the denominator\'s complex conjugate.'
      },
      {
        titleAr: '2. المميز وإشارة الدالة التربيعية والمتباينات',
        titleEn: '2. Discriminant, Function Signs & Inequalities',
        contentAr: '1) تحديد نوع الجذور بالمميز $\\Delta = b^2 - 4ac$:\n- في المعادلة $x^2 - 6x + 9 = 0$: $a=1, b=-6, c=9$ ⟹ $\\Delta = (-6)^2 - 4(1)(9) = 36 - 36 = 0$ (جذران حقيقيان متساويان $x = 3$).\n- في المعادلة $x^2 - 4x + 13 = 0$: $\\Delta = 16 - 52 = -36 < 0$ (جذران مركبان مترافقان: $x = \\frac{4 \\pm \\sqrt{-36}}{2} = 2 \\pm 3i$).\n\n2) حل المتباينة التربيعية $x^2 - 5x + 6 \\le 0$:\n- نساوي الدالة بالصفر: $(x - 2)(x - 3) = 0$ ⟹ الجذران $x = 2, x = 3$.\n- إشارة الدالة بين الجذرين سالبة (عكس معامل $x^2$ الموجب)، وخارجهما موجبة.\n- بما أن المطلوب $\\le 0$، فإن مجموعة الحل هي الفترة المغلقة $[2, 3]$.',
        contentEn: 'Discriminant determines real vs complex roots. Solving quadratic inequalities involves finding roots and checking sign intervals.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-math1-1',
        questionAr: 'إذا كان $L$ و $M$ هما جذرا المعادلة $x^2 - 7x + 3 = 0$، أوجد قيمة المقدار $L^2 + M^2$؟',
        questionEn: 'If L and M are roots of x² - 7x + 3 = 0, find the value of L² + M²?',
        solutionStepsAr: [
          'الخطوة 1: من المعادلة المعطاة: مجموع الجذرين L + M = -(-7)/1 = 7.',
          'الخطوة 2: حاصل ضرب الجذرين L · M = 3/1 = 3.',
          'الخطوة 3: نستخدم المتطابقة الجبرية: L² + M² = (L + M)² - 2LM.',
          'الخطوة 4: بالتعويض: L² + M² = (7)² - 2(3) = 49 - 6 = 43.'
        ],
        solutionStepsEn: [
          'Step 1: Sum of roots L + M = 7.',
          'Step 2: Product of roots LM = 3.',
          'Step 3: Identity: L² + M² = (L + M)² - 2LM.',
          'Step 4: Calculation: L² + M² = 7² - 2(3) = 49 - 6 = 43.'
        ],
        answerAr: 'قيمة المقدار L² + M² = 43.',
        answerEn: 'L² + M² = 43.'
      }
    ],

    assessment: {
      id: 'quiz-h10-math-1',
      lectureId: 'h10-math-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الأعداد المركبة والمميز وإشارة الدالة (1 ثانوي)',
      titleEn: 'Mastery Quiz 1: Complex Numbers, Discriminant & Quadratic Roots (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-m1-1',
          textAr: 'ما هي أبسط صورة للعدد التخيلي $i^{45}$؟',
          textEn: 'What is the simplest form of the imaginary power i⁴⁵?',
          optionsAr: ['i', '-1', '-i', '1'],
          optionsEn: ['i', '-1', '-i', '1'],
          correctIndex: 0,
          conceptTestedAr: 'تبسيط قوى العدد التخيلي i',
          conceptTestedEn: 'Powers of imaginary unit i',
          explanationAr: '45 = (4 × 11) + 1، إذن باقي القسمة هو 1، فتكون $i^{45} = i^1 = i$.',
          explanationEn: '45 mod 4 = 1, so i⁴⁵ = i¹ = i.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m1-2',
          textAr: 'نوع جذري المعادلة التربيعية $2x^2 - 3x + 5 = 0$ هو:',
          textEn: 'The nature of the roots of 2x² - 3x + 5 = 0 is:',
          optionsAr: ['مركبان مترافقان غير حقيقيين', 'حقيقيان مختلفان', 'حقيقيان متساويان', 'صحيحان موجبان'],
          optionsEn: ['Two complex conjugate non-real roots', 'Two distinct real roots', 'Two equal real roots', 'Two positive integers'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد نوع الجذور بالمميز',
          conceptTestedEn: 'Nature of quadratic roots via discriminant',
          explanationAr: 'المميز $\\Delta = b^2 - 4ac = (-3)^2 - 4(2)(5) = 9 - 40 = -31 < 0$. بما أن المميز سالب، فالجذران مركبان مترافقان غير حقيقيين.',
          explanationEn: 'Δ = (-3)² - 4(2)(5) = 9 - 40 = -31 < 0, indicating complex conjugate roots.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-m1-3',
          textAr: 'المعادلة التربيعية التي جذراها هما $(2 + i)$ و $(2 - i)$ هي:',
          textEn: 'The quadratic equation whose roots are (2 + i) and (2 - i) is:',
          optionsAr: ['x² - 4x + 5 = 0', 'x² + 4x + 5 = 0', 'x² - 4x - 5 = 0', 'x² - 5x + 4 = 0'],
          optionsEn: ['x² - 4x + 5 = 0', 'x² + 4x + 5 = 0', 'x² - 4x - 5 = 0', 'x² - 5x + 4 = 0'],
          correctIndex: 0,
          conceptTestedAr: 'تكوين المعادلة التربيعية من جذريها',
          conceptTestedEn: 'Forming quadratic equation from conjugate roots',
          explanationAr: 'مجموع الجذرين = (2 + i) + (2 - i) = 4. حاصل ضربهما = (2)² + (1)² = 5. المعادلة هي: $x^2 - 4x + 5 = 0$.',
          explanationEn: 'Sum = 4, Product = 2² + 1² = 5. Equation: x² - 4x + 5 = 0.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-m1-4',
          textAr: 'مجموعة حل المتباينة $x^2 - 4 < 0$ في $\\mathbb{R}$ هي:',
          textEn: 'The solution set of the inequality x² - 4 < 0 in ℝ is:',
          optionsAr: ['الفترة المفتوحة (-2, 2)', 'الفترة المغلقة [-2, 2]', 'ℝ ما عدا [-2, 2]', '(-∞, -2)'],
          optionsEn: ['Open interval (-2, 2)', 'Closed interval [-2, 2]', 'ℝ \\ [-2, 2]', '(-∞, -2)'],
          correctIndex: 0,
          conceptTestedAr: 'حل المتباينات التربيعية وبحث الإشارة',
          conceptTestedEn: 'Quadratic inequality interval solving',
          explanationAr: 'جذرا المعادلة $x^2 - 4 = 0$ هما $x = -2, x = 2$. إشارة الدالة سالبة بين الجذرين، إذن مجموعة الحل للقيم الأصغر من الصفر هي $(-2, 2)$.',
          explanationEn: 'Roots are ±2. The parabola is negative strictly between roots on (-2, 2).',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m1-5',
          textAr: 'مرافق العدد المركب $z = 3 - 4i$ هو:',
          textEn: 'The complex conjugate of z = 3 - 4i is:',
          optionsAr: ['3 + 4i', '-3 - 4i', '-3 + 4i', '4 - 3i'],
          optionsEn: ['3 + 4i', '-3 - 4i', '-3 + 4i', '4 - 3i'],
          correctIndex: 0,
          conceptTestedAr: 'مرافق العدد المركب',
          conceptTestedEn: 'Complex conjugate definition',
          explanationAr: 'مرافق العدد المركب ينتج عن تغيير إشارة الجزء التخيلي فقط: مرافق $3 - 4i$ هو $3 + 4i$.',
          explanationEn: 'Conjugate is formed by inverting the sign of the imaginary component: 3 + 4i.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: TRIGONOMETRY: DIRECTED ANGLES & RELATED ANGLES ──
  {
    id: 'h10-math-2',
    order: 2,
    titleAr: 'المحاضرة 2: حساب المثلثات: الزوايا الموجهة، القياس الدائري والستيني، والزوايا المنتسبة',
    titleEn: 'Lecture 2: Trigonometry: Directed Angles, Radian/Degree Measure & Related Angles',
    subtitleAr: 'الوضع القياسي للزاوية الموجهة، طول القوس $l = r\\theta^{\\text{rad}}$، دائرة الوحدة والنسب المثلثية الأساسية، والزوايا المنتسبة ($90^\\circ \\pm \\theta, 180^\\circ \\pm \\theta$)',
    subtitleEn: 'Master directed angles in standard position, radian-degree conversion, arc length formula l = rθ, unit circle coordinates, and related angles reduction.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: حساب المثلثات',
    unitTitleEn: 'Unit 2: Trigonometry',
    lessonNumberAr: 'الدرس 1: الزاوية الموجهة والقياس الدائري ودائرة الوحدة',
    lessonNumberEn: 'Lesson 1: Directed Angles & Unit Circle Trigonometry',

    warmupHookAr: 'عندما تدور ريشة التوربين الهوائي لتوليد الكهرباء أو يتحرك ذراع روبوت صناعي، لا تكتفي الحواسيب بقياس الزاوية بالدرجات الستينية القديمة، بل تستخدم "القياس الدائري بالراديان" (Radian) الذي يربط مباشرة بين زاوية الدوران وطول المسافة المقطوعة على القوس $l = r\\theta$! حساب المثلثات لصف أولى ثانوي هو لغة الحركة الدورانية والموجات الصوتية والكهرومغناطيسية!',
    warmupHookEn: 'Robotics and turbine engineers use radian angular measure to directly relate angle to arc distance via l = rθ. High school trigonometry unlocks rotational kinematics, wave harmonics, and navigation.',

    learningOutcomesAr: [
      'أن يحدد الطالب الضلع الابتدائي والنهائي للزاوية الموجهة في الوضع القياسي ويحدد الربع الذي تقع فيه',
      'أن يحول بين القياس الستيني والقياس الدائري: $\\frac{D^\\circ}{180^\\circ} = \\frac{\\theta^{\\text{rad}}}{\\pi}$ ويحسب طول القوس $l = r\\theta^{\\text{rad}}$ ومساحة القطاع الدائري',
      'أن يستنتج إحداثيات نقطة تقاطع الضلع النهائي مع دائرة الوحدة $(x, y) = (\\cos\\theta, \\sin\\theta)$ ومقلوباتها ($\\sec\\theta, \\csc\\theta, \\cot\\theta$)',
      'أن يبسط المقادير المثلثية باستخدام إشارات الأرباع وقواعد الزوايا المنتسبة ($180^\\circ \\pm \\theta, 360^\\circ - \\theta, 90^\\circ \\pm \\theta$)'
    ],
    learningOutcomesEn: [
      'Identify initial/terminal sides of directed angles in standard position and assign quadrants',
      'Convert between degrees and radians via D°/180° = θ_rad / π and compute arc length l = rθ',
      'Determine unit circle intersection coordinates (cos θ, sin θ) and reciprocal ratios (sec, csc, cot)',
      'Simplify trigonometric expressions using ASTC quadrant signs and related angle reductions'
    ],

    vocabulary: [
      {
        termAr: 'الزاوية الموجهة في الوضع القياسي (Standard Position)',
        termEn: 'Directed Angle in Standard Position',
        definitionAr: 'زاوية موجهة رأسها نقطة الأصل $(0,0)$ وضلعها الابتدائي ينطبق على الجزء الموجب لمحور السينات ($Ox$). ويكون قياسها موجباً إذا كان الدوران عكس عقارب الساعة، وسالباً مع عقارب الساعة.',
        definitionEn: 'An angle whose vertex is at (0,0) and initial side on positive x-axis. Counterclockwise rotation is positive, clockwise is negative.'
      },
      {
        termAr: 'الراديان (Radian Measure)',
        termEn: 'Radian Measure',
        definitionAr: 'قياس الزاوية المركزية التي تحصر قوساً طوله يساوي نصف قطر دائرته ($l = r$). والزاوية نصف القطرية $\\pi\\text{ rad} = 180^\\circ$.',
        definitionEn: 'The subtended angle where arc length equals radius (l = r). π radians = 180°.'
      },
      {
        termAr: 'الزوايا المنتسبة (Related Angles)',
        termEn: 'Related Angles',
        definitionAr: 'زوايا يكون الفرق بين قياسها أو مجموعهما يساوي عدداً صحيحاً من القوائم ($90^\\circ, 180^\\circ, 270^\\circ, 360^\\circ$). والزوايا مع $90^\\circ$ و $270^\\circ$ تحول الدالة المثلثية إلى متممتها (الجا تتحول إلى جتا).',
        definitionEn: 'Angles whose sum or difference is a multiple of 90°. 90° and 270° transformations switch co-functions (sin ↔ cos, tan ↔ cot).'
      }
    ],

    keyConceptsAr: [
      'قانون التحويل: $\\theta^{\\text{rad}} = D^\\circ \\times \\frac{\\pi}{180^\\circ}$ و $D^\\circ = \\theta^{\\text{rad}} \\times \\frac{180^\\circ}{\\pi}$',
      'قانون طول القوس: $l = r \\cdot \\theta^{\\text{rad}}$ حيث $r$ نصف القطر و $\\theta$ بالراديان',
      'دائرة الوحدة ($x^2 + y^2 = 1$): $\\cos\\theta = x$ ، $\\sin\\theta = y$ ، $\\tan\\theta = \\frac{y}{x}$',
      'إشارات الأرباع (ASTC): الربع الأول (الكل موجب All)، الثاني (الجا $\\sin$ ومقلوبها قتا)، الثالث (الظا $\\tan$ ومقلوبها ظتا)، الرابع (الجتا $\\cos$ ومقلوبها قا)',
      'الزوايا المنتسبة: $\\sin(180^\\circ - \\theta) = \\sin\\theta$ ، $\\cos(180^\\circ - \\theta) = -\\cos\\theta$ ، $\\sin(90^\\circ - \\theta) = \\cos\\theta$'
    ],
    keyConceptsEn: [
      'Conversion: θ_rad = D° × (π/180°) and D° = θ_rad × (180°/π)',
      'Arc length formula: l = r · θ_rad',
      'Unit circle: x = cos θ, y = sin θ, tan θ = y/x, cos²θ + sin²θ = 1',
      'ASTC rule: Q1 (All +), Q2 (Sin +), Q3 (Tan +), Q4 (Cos +)',
      'Related angles: sin(180° - θ) = sin θ; cos(180° - θ) = -cos θ; sin(90° - θ) = cos θ'
    ],

    summaryAr: 'تغطي المحاضرة حساب المثلثات لصف أولى ثانوي: الزوايا الموجهة، التحويل بين التقدير الدائري والستيني، حساب طول القوس، دائرة الوحدة، وقواعد الزوايا المنتسبة وإشارات الأرباع.',
    summaryEn: 'Comprehensive Grade 10 trigonometry: directed angles, radian-degree conversion, arc lengths, unit circle relations, and ASTC related angles reductions.',

    sections: [
      {
        titleAr: '1. القياس الدائري والستيني وطول القوس',
        titleEn: '1. Radian & Degree Systems and Arc Length',
        contentAr: '1) التحويل بين القياسين:\n- لتحويل $60^\\circ$ إلى راديان: $\\theta^{\\text{rad}} = 60 \\times \\frac{\\pi}{180} = \\frac{\\pi}{3}\\text{ rad}$.\n- لتحويل $\\frac{3\\pi}{4}\\text{ rad}$ إلى درجات: $D^\\circ = \\frac{3 \\times 180}{4} = 135^\\circ$.\n\n2) حساب طول القوس $l = r\\theta^{\\text{rad}}$:\n- أوجد طول القوس المقابل لزاوية مركزية قياسها $120^\\circ$ في دائرة نصف قطرها $6\\text{ cm}$:\n  * نحول الزاوية إلى راديان: $\\theta = 120 \\times \\frac{\\pi}{180} = \\frac{2\\pi}{3}\\text{ rad}$.\n  * طول القوس $l = 6 \\times \\frac{2\\pi}{3} = 4\\pi \\approx 12.57\\text{ cm}$.',
        contentEn: 'Convert using π/180°. Arc length l = r · θ (with θ strictly in radians).'
      },
      {
        titleAr: '2. دائرة الوحدة والزوايا المنتسبة',
        titleEn: '2. Unit Circle & Related Angle Identities',
        contentAr: '1) دائرة الوحدة:\n- نقطة التقاطع $(x, y) = (\\cos\\theta, \\sin\\theta)$.\n- المتطابقة الأساسية: $\\sin^2\\theta + \\cos^2\\theta = 1$.\n- المقلوبات: $\\sec\\theta = \\frac{1}{\\cos\\theta}$ ، $\\csc\\theta = \\frac{1}{\\sin\\theta}$ ، $\\cot\\theta = \\frac{1}{\\tan\\theta}$.\n\n2) تبسيط الزوايا المنتسبة:\n- احسب قيمة $\\cos(150^\\circ)$ بدون آلة حاسبة:\n  * $150^\\circ = 180^\\circ - 30^\\circ$ (الربع الثاني، حيث الجتا سالبة).\n  * $\\cos(150^\\circ) = \\cos(180^\\circ - 30^\\circ) = -\\cos(30^\\circ) = -\\frac{\\sqrt{3}}{2}$.',
        contentEn: 'Unit circle coordinates give (cos θ, sin θ). Angle reductions use quadrant ASTC signs.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-math2-1',
        questionAr: 'إذا كانت الزاوية $\\theta$ في الوضع القياسي ويمر ضلعها النهائي بالنقطة $P(-\\frac{3}{5}, \\frac{4}{5})$ على دائرة الوحدة، أوجد قيم النسب المثلثية الست للزاوية $\\theta$؟',
        questionEn: 'If terminal side of angle θ in standard position passes through P(-3/5, 4/5) on unit circle, find all 6 trig ratios?',
        solutionStepsAr: [
          'الخطوة 1: من إحداثيات دائرة الوحدة: cos θ = x = -3/5 ، sin θ = y = 4/5.',
          'الخطوة 2: حساب الظل: tan θ = y / x = (4/5) / (-3/5) = -4/3.',
          'الخطوة 3: حساب مقلوب الجيب (قتا): csc θ = 1 / sin θ = 5/4.',
          'الخطوة 4: حساب مقلوب جيب التمام (قا): sec θ = 1 / cos θ = -5/3.',
          'الخطوة 5: حساب مقلوب الظل (ظتا): cot θ = 1 / tan θ = -3/4.'
        ],
        solutionStepsEn: [
          'Step 1: cos θ = -3/5, sin θ = 4/5.',
          'Step 2: tan θ = (4/5) / (-3/5) = -4/3.',
          'Step 3: csc θ = 5/4.',
          'Step 4: sec θ = -5/3.',
          'Step 5: cot θ = -3/4.'
        ],
        answerAr: 'sin θ = 4/5, cos θ = -3/5, tan θ = -4/3, csc θ = 5/4, sec θ = -5/3, cot θ = -3/4.',
        answerEn: 'sin θ = 4/5, cos θ = -3/5, tan θ = -4/3, csc θ = 5/4, sec θ = -5/3, cot θ = -3/4.'
      }
    ],

    assessment: {
      id: 'quiz-h10-math-2',
      lectureId: 'h10-math-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: حساب المثلثات والزوايا المنتسبة (1 ثانوي)',
      titleEn: 'Mastery Quiz 2: Directed Angles, Radians & Related Angles (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-m2-1',
          textAr: 'القياس الدائري بالراديان للزاوية التي قياسها الستيني $135^\\circ$ هو:',
          textEn: 'The radian measure of angle 135° is:',
          optionsAr: ['3π / 4', '2π / 3', '5π / 6', 'π / 4'],
          optionsEn: ['3π / 4', '2π / 3', '5π / 6', 'π / 4'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل من درجات إلى راديان',
          conceptTestedEn: 'Degree to radian conversion',
          explanationAr: '$\\theta = 135 \\times \\frac{\\pi}{180} = \\frac{3\\pi}{4}\\text{ rad}$.',
          explanationEn: '135 × (π/180) = 3π/4 rad.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m2-2',
          textAr: 'طول القوس في دائرة نصف قطرها $10\\text{ cm}$ والمقابل لزاوية مركزية قياسها $1.5\\text{ rad}$ يساوي:',
          textEn: 'The arc length in a circle of radius 10 cm subtended by a central angle of 1.5 rad is:',
          optionsAr: ['15 cm', '7.5 cm', '15π cm', '6.67 cm'],
          optionsEn: ['15 cm', '7.5 cm', '15π cm', '6.67 cm'],
          correctIndex: 0,
          conceptTestedAr: 'حساب طول القوس بالراديان',
          conceptTestedEn: 'Arc length calculation l = rθ',
          explanationAr: 'طول القوس $l = r \\cdot \\theta = 10 \\times 1.5 = 15\\text{ cm}$.',
          explanationEn: 'l = r · θ = 10 · 1.5 = 15 cm.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m2-3',
          textAr: 'إذا كانت $\\sin\\theta < 0$ و $\\tan\\theta > 0$، فإن الزاوية $\\theta$ تقع في الربع:',
          textEn: 'If sin θ < 0 and tan θ > 0, angle θ lies in quadrant:',
          optionsAr: ['الربع الثالث (Quadrant III)', 'الربع الثاني (Quadrant II)', 'الربع الأول (Quadrant I)', 'الربع الرابع (Quadrant IV)'],
          optionsEn: ['Quadrant III', 'Quadrant II', 'Quadrant I', 'Quadrant IV'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد الأرباع بإشارات الدوال المثلثية',
          conceptTestedEn: 'Trigonometric quadrant signs ASTC',
          explanationAr: 'الظل موجب في الربعين الأول والثالث، والجيب سالب في الربعين الثالث والرابع، إذن الشرطان يتحققان معاً في الربع الثالث.',
          explanationEn: 'tan > 0 in Q1 & Q3; sin < 0 in Q3 & Q4. Overlap is Quadrant III.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-m2-4',
          textAr: 'قيمة المقدار $\\sin(90^\\circ - \\theta)$ تكافئ دائماً:',
          textEn: 'The expression sin(90° - θ) is identically equivalent to:',
          optionsAr: ['cos θ', '-cos θ', 'sin θ', '-sin θ'],
          optionsEn: ['cos θ', '-cos θ', 'sin θ', '-sin θ'],
          correctIndex: 0,
          conceptTestedAr: 'الزوايا المنتسبة للمتممة 90',
          conceptTestedEn: 'Cofunction identity sin(90° - θ)',
          explanationAr: 'الزاوية $(90^\\circ - \\theta)$ تقع في الربع الأول حيث جميع النسب موجبة، وتتحول دالة الجيب إلى جيب التمام: $\\sin(90^\\circ - \\theta) = \\cos\\theta$.',
          explanationEn: 'sin(90° - θ) = cos θ via cofunction identity.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m2-5',
          textAr: 'الزاوية الموجهة التي قياسها $-120^\\circ$ تكافئ زاوية موجبة في الوضع القياسي قياسها:',
          textEn: 'The directed angle measuring -120° is equivalent to a positive angle measuring:',
          optionsAr: ['240°', '60°', '120°', '300°'],
          optionsEn: ['240°', '60°', '120°', '300°'],
          correctIndex: 0,
          conceptTestedAr: 'الزوايا المتكافئة بإضافة دورة كاملة 360',
          conceptTestedEn: 'Equivalent coterminal angles',
          explanationAr: 'نضيف دورة كاملة $360^\\circ$: $-120^\\circ + 360^\\circ = 240^\\circ$.',
          explanationEn: '-120° + 360° = 240° coterminal angle.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: GEOMETRY: SIMILARITY OF POLYGONS & TRIANGLES ──
  {
    id: 'h10-math-3',
    order: 3,
    titleAr: 'المحاضرة 3: الهندسة: تشابه المضلعات والمثلثات، النسبة بين المساحات، وقوة نقطة بالنسبة لدائرة',
    titleEn: 'Lecture 3: Geometry: Similarity of Polygons & Triangles, Area Ratios & Power of a Point',
    subtitleAr: 'حالات تشابه المثلثات (AA, SAS, SSS)، النسبة بين المحيطات والمساحات للمضلعات المتشابهة، ونظرية الأوتار المتقاطعة وقوة نقطة بالنسبة لدائرة $P_M(A)$',
    subtitleEn: 'Master polygon & triangle similarity criteria (AA, SAS, SSS), perimeter/area ratios (Area₁/Area₂ = (s₁/s₂)²), intersecting secants/chords, and Power of a Point.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: التشابه في الهندسة المستوية',
    unitTitleEn: 'Unit 3: Similarity & Geometry Applications',
    lessonNumberAr: 'الدرس 1: تشابه المضلعات والمثلثات وتطبيقات الدائرة',
    lessonNumberEn: 'Lesson 1: Triangle Similarity & Power of a Point',

    warmupHookAr: 'عندما ترسم خريطة جغرافية بمقياس رسم $1:100,000$ أو تصمم نموذجاً معمارياً لناطحة سحاب، فإن جميع الزوايا تظل متطابقة والأطوال تتناسب بنفس النسبة، وتسمى هذه الخاصية بـ "التشابه الهندسي". لكن المثير هو أن النسبة بين مساحات المباني لا تتضاعف بنفس النسبة، بل تتضاعف مع مربع مقياس الرسم ($k^2$)! هندسة التشابه هي الأساس لكل التصاميم المعمارية والجرافيكس!',
    warmupHookEn: 'Architectural scale models and GPS maps rely on geometric similarity. Angles are preserved while lengths scale by factor k and areas scale by factor k²! Geometric similarity underlies all CAD modeling and computer vision.',

    learningOutcomesAr: [
      'أن يثبت الطالب تشابه مثلثين باستخدام حالات التشابه الثلاث: تطابق زاويتين (AA)، تناسب الأضلاع الثلاثة (SSS)، وتناسب ضلعين وتطابق الزاوية المحصورة بينهما (SAS)',
      'أن يطبق العلاقة بين مساحات المضلعات المتشابهة: $\\frac{\\text{مساحة المضلع 1}}{\\text{مساحة المضلع 2}} = \\left(\\frac{\\text{طول الضلع 1}}{\\text{طول الضلع 2}}\\right)^2$',
      'أن يطبق نظرية تقاطع وترين أو قاطعين داخل وخارج الدائرة: $EA \\cdot EB = EC \\cdot ED$',
      'أن يحسب قوة نقطة بالنسبة لدائرة $P_M(A) = MA^2 - r^2$ ويحدد موضع النقطة بالنسبة للدائرة (خارج، على، أو داخل الدائرة)'
    ],
    learningOutcomesEn: [
      'Prove triangle similarity using AA, SSS, and SAS criteria',
      'Apply the area ratio property: Area₁ / Area₂ = (side₁ / side₂)² = k²',
      'Apply intersecting chord and secant-tangent theorems: EA · EB = EC · ED = ET²',
      'Calculate Power of a Point P_M(A) = MA² - r² to determine whether a point lies inside, on, or outside a circle'
    ],

    vocabulary: [
      {
        termAr: 'معامل التشابه / مقياس الرسم (Similarity Ratio - k)',
        termEn: 'Similarity Ratio (k)',
        definitionAr: 'النسبة الثابتة بين طولي أي ضلعين متناظرين في مضلعين متشابهين ($k = \\frac{a_1}{a_2}$). إذا كان $k > 1$ تكبير، $0 < k < 1$ تصغير، و $k = 1$ تطابق.',
        definitionEn: 'The constant ratio between lengths of corresponding sides of two similar polygons.'
      },
      {
        termAr: 'قوة نقطة بالنسبة لدائرة (Power of a Point)',
        termEn: 'Power of a Point',
        definitionAr: 'المقدار العددي $P_M(A) = MA^2 - r^2$ حيث $MA$ البعد بين النقطة $A$ ومركز الدائرة $M$، و $r$ نصف القطر. إذا كانت موجبة فالنقطة خارج الدائرة، صفر على الدائرة، وسالبة داخل الدائرة.',
        definitionEn: 'The scalar value P_M(A) = MA² - r². Positive means outside circle, zero on circle, negative inside circle.'
      }
    ],

    keyConceptsAr: [
      'شروط تشابه مضلعين: 1) تطابق الزوايا المتناظرة، 2) تناسب أطوال الأضلاع المتناظرة',
      'النسبة بين محيطي مضلعين متشابهين = النسبة بين طولي ضلعين متناظرين ($k$)',
      'النسبة بين مساحتي مضلعين متشابهين = مربع النسبة بين طولي ضلعين متناظرين ($k^2$)',
      'تقاطع وترين داخل دائرة: $EA \\cdot EB = EC \\cdot ED$',
      'تقاطع قاطعين أو مماس وقاطع خارج دائرة: $EA \\cdot EB = EC \\cdot ED = ET^2$ حيث $ET$ قطعة مماسة'
    ],
    keyConceptsEn: [
      'Similarity requires corresponding angles equal and sides proportional',
      'Perimeter ratio = side ratio k; Area ratio = (side ratio)² = k²',
      'Intersecting chords inside circle: EA · EB = EC · ED',
      'Secant-tangent from external point E: EA · EB = EC · ED = ET² (tangent length squared)',
      'Power of point: P_M(A) = MA² - r² = ET²'
    ],

    summaryAr: 'تتناول المحاضرة هندسة التشابه لصف أولى ثانوي: حالات تشابه المثلثات، النسب بين المحيطات والمساحات ($k$ و $k^2$)، وتطبيقات التشابه في الدائرة ونظرية قوة نقطة.',
    summaryEn: 'Covers geometric similarity criteria for triangles, area scaling theorems, circle secant/tangent applications, and the power of a point.',

    sections: [
      {
        titleAr: '1. حالات تشابه المثلثات والنسبة بين المساحات',
        titleEn: '1. Triangle Similarity & Area Ratios',
        contentAr: '1) حالات تشابه المثلثات:\n- الحالة 1 (AA): إذا تطابقت زاويتان في مثلث مع زاويتين في آخر.\n- الحالة 2 (SSS): إذا تناسبت أطوال الأضلاع المتناظرة: $\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{AC}{DF}$.\n- الحالة 3 (SAS): إذا تناسب طولا ضلعين وتطابقت الزاوية المحصورة بينهما.\n\n2) النسبة بين المساحات:\n- إذا كان $\\triangle ABC \\sim \\triangle DEF$ ومعامل التشابه $\\frac{AB}{DE} = \\frac{3}{5}$:\n  * النسبة بين المحيطين $= \\frac{3}{5}$.\n  * النسبة بين المساحتين $= \\left(\\frac{3}{5}\\right)^2 = \\frac{9}{25}$.',
        contentEn: 'Triangles are similar via AA, SSS, or SAS. Area ratio equals square of side ratio: (s₁/s₂)².'
      },
      {
        titleAr: '2. تطبيقات التشابه في الدائرة وقوة نقطة',
        titleEn: '2. Circle Proportionality & Power of a Point',
        contentAr: '1) نظرية الأوتار والقواطع:\n- إذا تقاطع الوتران $AB$ و $CD$ في النقطة $E$ داخل الدائرة: فإن $EA \\cdot EB = EC \\cdot ED$.\n- إذا تقاطع القاطعان خارج الدائرة عند النقطة $E$: فإن $EA \\cdot EB = EC \\cdot ED = ET^2$ (حيث $ET$ مماس).\n\n2) قوة نقطة بالنسبة لدائرة $P_M(A)$:\n- $P_M(A) = MA^2 - r^2$.\n- مثال: نقطة $A$ تبعد $13\\text{ cm}$ عن مركز دائرة نصف قطرها $5\\text{ cm}$:\n  * $P_M(A) = 13^2 - 5^2 = 169 - 25 = 144 > 0$ (النقطة تقع خارج الدائرة).\n  * طول القطعة المماسة المرسومة من $A$ هو $\\sqrt{P_M(A)} = \\sqrt{144} = 12\\text{ cm}$.',
        contentEn: 'Chords and secants intersect according to product rule EA · EB = EC · ED = ET². Power of point P_M(A) = MA² - r².'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-math3-1',
        questionAr: 'مثلثان متشابهان النسبة بين طولي ضلعين متناظرين فيهما هي $2 : 3$. إذا كانت مساحة المثلث الأصغر $24\\text{ cm}^2$، احسب مساحة المثلث الأكبر؟',
        questionEn: 'Two similar triangles have side ratio 2:3. If the smaller triangle has area 24 cm², find the area of the larger triangle?',
        solutionStepsAr: [
          'الخطوة 1: النسبة بين مساحتي المثلثين تساوي مربع النسبة بين الضلعين المتناظرين: (مساحة 1 / مساحة 2) = (2 / 3)² = 4 / 9.',
          'الخطوة 2: مساحة المثلث الأصغر = 24 cm².',
          'الخطوة 3: 24 / مساحة المثلث الأكبر = 4 / 9.',
          'الخطوة 4: مساحة المثلث الأكبر = (24 × 9) / 4 = 6 × 9 = 54 cm².'
        ],
        solutionStepsEn: [
          'Step 1: Area ratio = (2/3)² = 4/9.',
          'Step 2: 24 / Area_large = 4 / 9.',
          'Step 3: Area_large = (24 · 9) / 4 = 54 cm².'
        ],
        answerAr: 'مساحة المثلث الأكبر = 54 cm².',
        answerEn: 'Area of larger triangle = 54 cm².'
      }
    ],

    assessment: {
      id: 'quiz-h10-math-3',
      lectureId: 'h10-math-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: التشابه وقوة نقطة بالنسبة لدائرة (1 ثانوي)',
      titleEn: 'Mastery Quiz 3: Similarity, Area Scaling & Power of a Point',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-m3-1',
          textAr: 'إذا كانت النسبة بين محيطي مضلعين متشابهين هي $4 : 7$، فإن النسبة بين مساحتيهما هي:',
          textEn: 'If the perimeter ratio of two similar polygons is 4:7, their area ratio is:',
          optionsAr: ['16 : 49', '4 : 7', '8 : 14', '2 : √7'],
          optionsEn: ['16 : 49', '4 : 7', '8 : 14', '2 : √7'],
          correctIndex: 0,
          conceptTestedAr: 'النسبة بين مساحات المضلعات المتشابهة',
          conceptTestedEn: 'Area ratio scaling theorem (k²)',
          explanationAr: 'النسبة بين المساحات تساوي مربع النسبة بين المحيطين: $(4/7)^2 = 16 / 49$.',
          explanationEn: 'Area ratio = (perimeter ratio)² = (4/7)² = 16/49.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m3-2',
          textAr: 'وتران $AB$ و $CD$ يتقاطعان في نقطة $E$ داخل دائرة. إذا كان $EA = 3\\text{ cm}, EB = 8\\text{ cm}, EC = 4\\text{ cm}$، فإن طول $ED$ يساوي:',
          textEn: 'Chords AB and CD intersect at internal point E. If EA=3, EB=8, EC=4, what is ED?',
          optionsAr: ['6 cm', '8 cm', '4 cm', '12 cm'],
          optionsEn: ['6 cm', '8 cm', '4 cm', '12 cm'],
          correctIndex: 0,
          conceptTestedAr: 'نظرية الأوتار المتقاطعة داخل دائرة',
          conceptTestedEn: 'Intersecting chord theorem',
          explanationAr: '$EA \\cdot EB = EC \\cdot ED \\implies 3 \\times 8 = 4 \\times ED \\implies 24 = 4 \\cdot ED \\implies ED = 6\\text{ cm}$.',
          explanationEn: 'EA · EB = EC · ED => 3 · 8 = 4 · ED => ED = 24/4 = 6 cm.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m3-3',
          textAr: 'إذا كانت قوة النقطة $A$ بالنسبة لدائرة $M$ هي $P_M(A) = -25$，فإن النقطة $A$ تقع:',
          textEn: 'If the power of point A with respect to circle M is P_M(A) = -25, point A lies:',
          optionsAr: ['داخل الدائرة (Inside the circle)', 'خارج الدائرة (Outside the circle)', 'على محيط الدائرة (On the circle)', 'عند مركز الدائرة'],
          optionsEn: ['Inside the circle', 'Outside the circle', 'On the circle', 'At circle center'],
          correctIndex: 0,
          conceptTestedAr: 'موقع النقطة بالنسبة للدائرة من إشارة قوة النقطة',
          conceptTestedEn: 'Point location from sign of power of point',
          explanationAr: 'عندما تكون قوة النقطة سالبة ($P_M(A) < 0$)، فإن بعد النقطة عن المركز يكون أقل من نصف القطر ($MA < r$)، لذا تقع داخل الدائرة.',
          explanationEn: 'Negative power implies MA² - r² < 0 => MA < r, so the point is strictly inside the circle.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m3-4',
          textAr: 'من نقطة $E$ خارج دائرة، رُسم مماس $ET$ طوله $8\\text{ cm}$ وقاطع يقطع الدائرة في $A$ و $B$ حيث $EA = 4\\text{ cm}$. فإن طول $AB$ يساوي:',
          textEn: 'From external point E, tangent ET = 8 cm and secant EAB has EA = 4 cm. What is length AB?',
          optionsAr: ['12 cm', '16 cm', '8 cm', '10 cm'],
          optionsEn: ['12 cm', '16 cm', '8 cm', '10 cm'],
          correctIndex: 0,
          conceptTestedAr: 'نظرية المماس والقاطع',
          conceptTestedEn: 'Secant-tangent theorem',
          explanationAr: '$EA \\cdot EB = ET^2 \\implies 4 \\cdot EB = 8^2 = 64 \\implies EB = 16\\text{ cm}$. إذن $AB = EB - EA = 16 - 4 = 12\\text{ cm}$.',
          explanationEn: 'EA · EB = ET² => 4 · EB = 64 => EB = 16 cm. Thus AB = 16 - 4 = 12 cm.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-m3-5',
          textAr: 'يتشابه المثلثان إذا تطابقت زاويتان في أحدهما مع زاويتين في الآخر وفق حالة:',
          textEn: 'Two triangles are similar if two angles of one are congruent to two angles of the other by criterion:',
          optionsAr: ['AA (تطابق زاويتين)', 'SSS', 'SAS', 'RHS'],
          optionsEn: ['AA (Angle-Angle)', 'SSS', 'SAS', 'RHS'],
          correctIndex: 0,
          conceptTestedAr: 'حالة تشابه المثلثات AA',
          conceptTestedEn: 'AA similarity criterion',
          explanationAr: 'حالة AA تنص على أنه إذا تساوى قياس زاويتين في مثلث مع زاويتين في مثلث آخر، فإن المثلثين متشابهان.',
          explanationEn: 'AA criterion guarantees similarity when 2 corresponding angle pairs are congruent.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: PROPORTIONALITY & THALES THEOREM ──
  {
    id: 'h10-math-4',
    order: 4,
    titleAr: 'المحاضرة 4: التناسب في المثلث، نظرية طاليس، ومنصفات زوايا المثلث',
    titleEn: 'Lecture 4: Proportionality in Triangles, Thales\' Theorem & Angle Bisectors',
    subtitleAr: 'المستقيم الموازي لأحد أضلاع مثلث، نظرية طاليس العامة والخاصة، ونظرية منصف الزاوية للداخل والخارج $\\frac{AB}{AC} = \\frac{BD}{DC}$',
    subtitleEn: 'Master parallel line proportionality, General & Special Thales Theorems, and Interior/Exterior Triangle Angle Bisector Theorems.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: التناسب ونظرية طاليس والمنصفات',
    unitTitleEn: 'Unit 4: Proportionality & Thales Theorem',
    lessonNumberAr: 'الدرس 1: نظرية طاليس ومنصفات الزوايا',
    lessonNumberEn: 'Lesson 1: Thales Theorem & Angle Bisectors',

    warmupHookAr: 'قبل أكثر من 2500 عام، استطاع الفيلسوف والعالم اليوناني "طاليس" قياس الارتفاع الشاهق لأهرامات الجيزة بدقة مذهلة دون تسلقها! كيف فعل ذلك؟ فقط باستخدام ظل عصا مغروسة في الرمال ومقارنة نسبة طول العصا إلى ظلها مع نسبة ارتفاع الهرم إلى ظله مستخدماً نظرية المستقيمات المتوازية والتناسب! نظرية طاليس والمنصفات هي سر حساب المسافات المجهولة في المساحة والخرائط!',
    warmupHookEn: 'Thales calculated the Great Pyramid\'s height 2500 years ago using parallel sun rays and proportion ratios. The Angle Bisector and Thales theorems remain fundamental in surveying and geospatial measurement.',

    learningOutcomesAr: [
      'أن يطبق الطالب نظرية التناسب في المثلث: إذا وازى مستقيم أحد أضلاع مثلث وقطع الضلعين الآخرين فإنه يقسمهما إلى قطع متناسبة $\\frac{AD}{DB} = \\frac{AE}{EC}$',
      'أن يطبق نظرية طاليس العامة والخاصة لعدة مستقيمات متوازية تقطع قاطعين',
      'أن يطبق نظرية منصف زاوية المثلث من الداخل ومن الخارج: $\\frac{AB}{AC} = \\frac{BD}{DC}$',
      'أن يحسب أطوال القطع المستقيمة ومنصف الزاوية الداخلي والخارجي جبرياً'
    ],
    learningOutcomesEn: [
      'Apply triangle proportionality theorem: parallel transversal divides sides proportionally AD/DB = AE/EC',
      'Apply General and Special Thales Theorems for multiple parallel lines intersecting transversals',
      'Apply Interior and Exterior Angle Bisector Theorems: AB / AC = BD / DC',
      'Calculate segment lengths and lengths of angle bisectors'
    ],

    vocabulary: [
      {
        termAr: 'نظرية طاليس العامة (Thales\' Theorem)',
        termEn: 'Thales\' Theorem',
        definitionAr: 'إذا قطعت عدة مستقيمات متوازية قاطعين، فإن أطوال القطع الناتجة على أحد القاطعين تكون متناسبة مع أطوال القطع المناظرة لها على القاطع الآخر.',
        definitionEn: 'If parallel lines intersect two transversals, they divide the transversals into proportional segments.'
      },
      {
        termAr: 'منصف زاوية المثلث (Triangle Angle Bisector)',
        termEn: 'Triangle Angle Bisector',
        definitionAr: 'القطعة المستقيمة التي تقسم زاوية رأس المثلث إلى زاويتين متطابقتين، وتقسم القاعدة من الداخل أو الخارج إلى جزأين النسبة بين طوليهما تساوي النسبة بين طولي الضلعين الآخرين.',
        definitionEn: 'A ray/segment dividing a triangle angle equally; it divides the opposite base such that AB/AC = BD/DC.'
      }
    ],

    keyConceptsAr: [
      'الموازي لضلع في مثلث: إذا كان $DE \\parallel BC$ في $\\triangle ABC$، فإن $\\frac{AD}{DB} = \\frac{AE}{EC}$ و $\\frac{AD}{AB} = \\frac{AE}{AC} = \\frac{DE}{BC}$',
      'نظرية طاليس الخاصة: إذا كانت القطع على أحد القاطعين متساوية في الطول، فإن القطع المناظرة على أي قاطع آخر تكون متساوية في الطول أيضاً',
      'منصف الزاوية الداخلي: $\\frac{AB}{AC} = \\frac{BD}{DC}$ وطول المنصف الداخلي $AD = \\sqrt{AB \\cdot AC - BD \\cdot DC}$',
      'منصف الزاوية الخارجي: $\\frac{AB}{AC} = \\frac{BD}{DC}$ وطول المنصف الخارجي $AD = \\sqrt{BD \\cdot DC - AB \\cdot AC}$',
      'المنصفان الداخلي والخارجي لنفس الزاوية في المثلث متعامدان دائماً (الزاوية بينهما $90^\\circ$)'
    ],
    keyConceptsEn: [
      'Triangle parallel transversal: AD/DB = AE/EC and AD/AB = AE/AC = DE/BC',
      'Special Thales Theorem: Equal segments on one transversal imply equal segments on all transversals',
      'Interior bisector: AB/AC = BD/DC; Bisector length = √(AB · AC - BD · DC)',
      'Exterior bisector: AB/AC = BD/DC; Bisector length = √(BD · DC - AB · AC)',
      'Interior and exterior bisectors of the same vertex angle are always perpendicular (90°)'
    ],

    summaryAr: 'تغطي المحاضرة الرابعة نظريات التناسب وطاليس ومنصفات زوايا المثلث للداخل والخارج، مع حساب أطوال القطع ومنصفات الزوايا والخواص الهندسية المتعامدة للمنصفات.',
    summaryEn: 'Covers triangle proportionality, General/Special Thales theorems, interior/exterior angle bisector proportions, and orthogonal bisector properties.',

    sections: [
      {
        titleAr: '1. نظرية التناسب في المثلث ونظرية طاليس',
        titleEn: '1. Triangle Proportionality & Thales Theorem',
        contentAr: '1) التناسب في المثلث:\n- في $\\triangle ABC$، إذا رسم $DE \\parallel BC$ حيث $D \\in AB$ و $E \\in AC$:\n  * فإن $\\frac{AD}{DB} = \\frac{AE}{EC}$.\n  * مثال: إذا كان $AD = 4\\text{ cm}, DB = 6\\text{ cm}, AE = 6\\text{ cm}$، احسب $EC$:\n    $\\frac{4}{6} = \\frac{6}{EC} \\implies 4 \\cdot EC = 36 \\implies EC = 9\\text{ cm}$.\n\n2) نظرية طاليس:\n- إذا كانت $L_1 \\parallel L_2 \\parallel L_3$ وقطعتين قاطعين $M_1, M_2$، فإن أجزاء القاطعين متناسبة.',
        contentEn: 'Parallel lines create proportional intercepts. In triangles, AD/DB = AE/EC.'
      },
      {
        titleAr: '2. منصفات زوايا المثلث للداخل وللخارج',
        titleEn: '2. Interior & Exterior Angle Bisectors',
        contentAr: '1) منصف الزاوية الداخلي:\n- إذا كان $AD$ ينصف $\\angle A$ في $\\triangle ABC$ ويقطع $BC$ في $D$:\n  * فإن $\\frac{AB}{AC} = \\frac{BD}{DC}$.\n  * مثال: $AB = 8\\text{ cm}, AC = 6\\text{ cm}, BC = 7\\text{ cm}$:\n    نفرض $BD = x$ فيكون $DC = 7 - x$.\n    $\\frac{8}{6} = \\frac{x}{7 - x} \\implies 4(7 - x) = 3x \\implies 28 - 4x = 3x \\implies 7x = 28 \\implies x = 4\\text{ cm}$ (إذن $BD = 4\\text{ cm}, DC = 3\\text{ cm}$).\n\n2) خاصية تعامد المنصفين:\n- المنصف الداخلي والمنصف الخارجي لنفس الزاوية في أي مثلث يكونان متعامدين تماماً.',
        contentEn: 'Angle bisector theorem sets AB/AC = BD/DC. Interior and exterior bisectors at the same vertex are perpendicular.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-math4-1',
        questionAr: 'في $\\triangle ABC$، $AB = 10\\text{ cm}, AC = 6\\text{ cm}, BC = 8\\text{ cm}$. رُسم $AD$ منصفاً لزاوية $A$ من الداخل ليقطع $BC$ في $D$. احسب كلاً من $BD, DC$ وطول المنصف $AD$؟',
        questionEn: 'In ΔABC, AB=10, AC=6, BC=8. AD bisects angle A internally intersecting BC at D. Find BD, DC, and length of AD?',
        solutionStepsAr: [
          'الخطوة 1: من نظرية منصف الزاوية: AB / AC = BD / DC ⟹ 10 / 6 = 5 / 3.',
          'الخطوة 2: بما أن BC = 8 cm ⟹ BD = (5/8) × 8 = 5 cm ، و DC = (3/8) × 8 = 3 cm.',
          'الخطوة 3: قانون طول المنصف الداخلي: AD = √(AB · AC - BD · DC).',
          'الخطوة 4: التعويض: AD = √(10 × 6 - 5 × 3) = √(60 - 15) = √45 = 3√5 cm ≈ 6.71 cm.'
        ],
        solutionStepsEn: [
          'Step 1: AB/AC = 10/6 = 5/3 = BD/DC.',
          'Step 2: BD = 5 cm, DC = 3 cm.',
          'Step 3: AD = √(AB · AC - BD · DC).',
          'Step 4: AD = √(60 - 15) = √45 = 3√5 cm.'
        ],
        answerAr: 'BD = 5 cm, DC = 3 cm, AD = 3√5 cm.',
        answerEn: 'BD = 5 cm, DC = 3 cm, AD = 3√5 cm.'
      }
    ],

    assessment: {
      id: 'quiz-h10-math-4',
      lectureId: 'h10-math-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: التناسب وطاليس والمنصفات (1 ثانوي)',
      titleEn: 'Mastery Quiz 4: Thales Theorem & Angle Bisectors (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-m4-1',
          textAr: 'الزاوية المحصورة بين المنصف الداخلي والمنصف الخارجي لنفس الزاوية في المثلث قياسها:',
          textEn: 'The angle between the interior and exterior bisectors of the same triangle vertex is:',
          optionsAr: ['90° (متعامدان)', '180°', '45°', '60°'],
          optionsEn: ['90° (Perpendicular)', '180°', '45°', '60°'],
          correctIndex: 0,
          conceptTestedAr: 'تعامد المنصف الداخلي والخارجي',
          conceptTestedEn: 'Orthogonality of interior and exterior bisectors',
          explanationAr: 'مجموع الزاويتين المتجاورتين على خط مستقيم هو 180°، وبأخذ نصف كل منهما يكون قياس الزاوية بين المنصفين = 180° / 2 = 90°.',
          explanationEn: 'Half of supplementary linear pair sum: 180°/2 = 90°.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m4-2',
          textAr: 'في $\\triangle ABC$، $D \\in AB$ و $E \\in AC$ بحيث $DE \\parallel BC$. إذا كان $AD = 3\\text{ cm}, DB = 6\\text{ cm}, AE = 4\\text{ cm}$، فإن طول $AC$ يساوي:',
          textEn: 'In ΔABC with DE || BC: AD=3, DB=6, AE=4. What is length AC?',
          optionsAr: ['12 cm', '8 cm', '6 cm', '10 cm'],
          optionsEn: ['12 cm', '8 cm', '6 cm', '10 cm'],
          correctIndex: 0,
          conceptTestedAr: 'التناسب في المثلث وإيجاد الطول الكلي',
          conceptTestedEn: 'Triangle proportionality total side calculation',
          explanationAr: '$\\frac{AD}{AB} = \\frac{AE}{AC} \\implies \\frac{3}{3+6} = \\frac{4}{AC} \\implies \\frac{3}{9} = \\frac{4}{AC} \\implies \\frac{1}{3} = \\frac{4}{AC} \\implies AC = 12\\text{ cm}$.',
          explanationEn: 'AD/AB = AE/AC => 3/9 = 4/AC => AC = 12 cm.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m4-3',
          textAr: 'في $\\triangle ABC$، $AD$ منصف داخلي لزاوية $A$ يقطع $BC$ في $D$. إذا كان $AB = 6\\text{ cm}, AC = 9\\text{ cm}, BD = 4\\text{ cm}$، فإن $DC$ يساوي:',
          textEn: 'In ΔABC, AD bisects angle A internally. If AB=6, AC=9, BD=4, what is DC?',
          optionsAr: ['6 cm', '4 cm', '8 cm', '5 cm'],
          optionsEn: ['6 cm', '4 cm', '8 cm', '5 cm'],
          correctIndex: 0,
          conceptTestedAr: 'نظرية منصف الزاوية الداخلي',
          conceptTestedEn: 'Interior angle bisector theorem',
          explanationAr: '$\\frac{AB}{AC} = \\frac{BD}{DC} \\implies \\frac{6}{9} = \\frac{4}{DC} \\implies \\frac{2}{3} = \\frac{4}{DC} \\implies 2 \\cdot DC = 12 \\implies DC = 6\\text{ cm}$.',
          explanationEn: 'AB/AC = BD/DC => 6/9 = 4/DC => DC = 6 cm.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m4-4',
          textAr: 'تنص نظرية طاليس الخاصة على أنه إذا كانت القطع الناتجة على أحد القواطع متساوية في الطول، فإن:',
          textEn: 'Special Thales Theorem states that if segments on one transversal are equal, then:',
          optionsAr: [
            'القطع الناتجة على أي قاطع آخر تكون متساوية في الطول أيضاً',
            'جميع المستقيمات المتوازية تكون متعامدة',
            'المساحة بين المستقيمات تساوي صفراً',
            'نسبة التناسب تساوي 100 دائماً'
          ],
          optionsEn: [
            'Corresponding segments on any other transversal are also equal in length',
            'All parallel lines are perpendicular',
            'Area between parallel lines is zero',
            'Similarity ratio is always 100'
          ],
          correctIndex: 0,
          conceptTestedAr: 'نص نظرية طاليس الخاصة',
          conceptTestedEn: 'Special Thales Theorem equal segments',
          explanationAr: 'إذا تساوت أطوال القطع على أحد القواطع، فإن القطع المقابلة لها على أي قاطع آخر تكون متساوية في الطول أيضاً.',
          explanationEn: 'Equal intercepts on one transversal guarantee equal intercepts on all transversals.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m4-5',
          textAr: 'طول المنصف الداخلي $AD$ لزاوية $A$ في $\\triangle ABC$ يُحسب بالقانون:',
          textEn: 'The length of interior angle bisector AD in ΔABC is computed by formula:',
          optionsAr: ['AD = √(AB · AC - BD · DC)', 'AD = √(BD · DC - AB · AC)', 'AD = (AB + AC) / 2', 'AD = √(AB² + AC²)'],
          optionsEn: ['AD = √(AB · AC - BD · DC)', 'AD = √(BD · DC - AB · AC)', 'AD = (AB + AC) / 2', 'AD = √(AB² + AC²)'],
          correctIndex: 0,
          conceptTestedAr: 'قانون طول المنصف الداخلي',
          conceptTestedEn: 'Interior angle bisector length formula',
          explanationAr: 'طول المنصف الداخلي هو $AD = \\sqrt{AB \\cdot AC - BD \\cdot DC}$.',
          explanationEn: 'Interior bisector length = √(AB · AC - BD · DC).',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: 2D VECTORS, LINE EQUATIONS & ANALYTIC GEOMETRY ──
  {
    id: 'h10-math-5',
    order: 5,
    titleAr: 'المحاضرة 5: المتجهات في المستوى الإحداثي، تقسيم قطعة مستقيمة، ومعادلات الخط المستقيم',
    titleEn: 'Lecture 5: 2D Vectors, Division of a Line Segment & Straight Line Equations',
    subtitleAr: 'المتجه في بعدين $2D$، معيار وزاوية اتجاه المتجه، شرط التوازي والتعامد، التقسيم من الداخل والخارج، والصور المختلفة لمعادلة الخط المستقيم وطول العمود',
    subtitleEn: 'Master 2D vector algebra, magnitude/polar form, parallel & perpendicular conditions, internal/external segment division, vector/parametric/cartesian line equations, and perpendicular distance.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الخامسة: المتجهات والهندسة التحليلية في المستوى',
    unitTitleEn: 'Unit 5: 2D Vectors & Analytic Geometry',
    lessonNumberAr: 'الدرس 1: المتجهات والتقسيم ومعادلات الخط المستقيم',
    lessonNumberEn: 'Lesson 1: 2D Vectors, Segment Division & Line Equations',

    warmupHookAr: 'عندما ترسل سفينة نداء استغاثة في عرض البحر، يحدد قبطان خفر السواحل متجه الموضع وسرعة الرياح كمتجهات في المستوى ثنائي الأبعاد ($2D$)، ويحسب نقطة التقاء مسار القارب مع السفينة باستخدام تقسيم القطعة المستقيمة ومعادلة المسار الخطي! الهندسة التحليلية والمتجهات هي الأساس الرياضي لأنظمة التموضع العالمي (GPS) والرادارات البحرية والجوية!',
    warmupHookEn: 'Coast guard navigation and GPS tracking compute 2D position vectors, relative velocities, segment division points, and perpendicular standoff distances using 2D vector analytic geometry.',

    learningOutcomesAr: [
      'أن يمثل الطالب المتجه في الصورة الإحداثية $\\vec{A} = (x, y)$ والصورة القطبية $(|\\vec{A}|, \\theta)$ وبدلالة متجهي الوحدة الأساسيين $\\hat{i}, \\hat{j}$',
      'أن يطبق شرط توازي متجهين ($x_1 y_2 - x_2 y_1 = 0$) وشرط تعامد متجهين ($x_1 x_2 + y_1 y_2 = 0$)',
      'أن يجد إحداثيات نقطة تقسيم قطعة مستقيمة $AB$ بنسبة $m_1 : m_2$ من الداخل ومن الخارج: $\\vec{r} = \\frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2}{m_1 + m_2}$',
      'أن يكتب معادلة الخط المستقيم في المستوى بجميع صورها (المتجهة $\\vec{r} = \\vec{A} + k\\vec{u}$، البارامترية، والكارتيزية $ax + by + c = 0$) ويحسب طول العمود الساقط من نقطة على مستقيم $d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}$'
    ],
    learningOutcomesEn: [
      'Represent 2D vectors in Cartesian (x, y), standard basis i, j, and polar form (|A|, θ)',
      'Apply 2D vector parallelism (x₁y₂ - x₂y₁ = 0) and perpendicularity (x₁x₂ + y₁y₂ = 0)',
      'Compute coordinates dividing segment AB internally or externally in ratio m₁:m₂',
      'Formulate line equations (Vector r = A + ku, Parametric, Cartesian ax + by + c = 0) and calculate perpendicular distance from a point'
    ],

    vocabulary: [
      {
        termAr: 'المتجه في بعدين (2D Vector)',
        termEn: '2D Vector',
        definitionAr: 'قطعة مستقيمة موجهة لها نقطة بداية ونقطة نهاية ومقدار واتجاه، وتكتب إحداثياً $\\vec{A} = (x, y) = x\\hat{i} + y\\hat{j}$. معيارها $|\\vec{A}| = \\sqrt{x^2 + y^2}$ وزاوية اتجاهها $\\tan\\theta = \\frac{y}{x}$.',
        definitionEn: 'A directed line segment in 2D space with magnitude |A| = √(x² + y²) and direction angle θ = arctan(y/x).'
      },
      {
        termAr: 'تقسيم قطعة مستقيمة (Segment Division)',
        termEn: 'Segment Division',
        definitionAr: 'إيجاد إحداثيات نقطة $C$ تقسم القطعة $AB$ بنسبة $m_1 : m_2$. إذا كان التقسيم من الداخل تكون النسبة موجبة، وإذا كان من الخارج تكون النسبة سالبة.',
        definitionEn: 'Finding coordinates of point C dividing segment AB in ratio m₁:m₂ internally (positive) or externally (negative).'
      },
      {
        termAr: 'طول العمود الساقط من نقطة على مستقيم (Perpendicular Distance)',
        termEn: 'Perpendicular Distance',
        definitionAr: 'أقصر مسافة عمودية من النقطة $(x_1, y_1)$ إلى المستقيم $ax + by + c = 0$، وتعطى بالقانون: $d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}$.',
        definitionEn: 'The shortest distance from point (x₁, y₁) to line ax + by + c = 0: d = |ax₁ + by₁ + c| / √(a² + b²).'
      }
    ],

    keyConceptsAr: [
      'الصورة القطبية إلى إحداثية: $x = |\\vec{A}| \\cos\\theta$ و $y = |\\vec{A}| \\sin\\theta$',
      'شرط توازي متجهين $\\vec{A} \\parallel \\vec{B}$: الميلين متساويان أي $\\frac{y_1}{x_1} = \\frac{y_2}{x_2} \\implies x_1 y_2 - x_2 y_1 = 0$',
      'شرط تعامد متجهين $\\vec{A} \\perp \\vec{B}$: حاصل ضرب الميلين $-1$ أي $x_1 x_2 + y_1 y_2 = 0$',
      'المعادلة المتجهة للمستقيم: $\\vec{r} = (x_0, y_0) + k(a, b)$ حيث $(a, b)$ هو متجه اتجاه المستقيم $\\vec{u}$ وميله $m = \\frac{b}{a}$',
      'طول العمود الساقط من نقطة: $d = \\frac{|ax_1 + by_1 + c|}{\\sqrt{a^2 + b^2}}$'
    ],
    keyConceptsEn: [
      'Polar to Cartesian: x = |A| cos θ, y = |A| sin θ',
      'Parallel vectors condition: x₁y₂ - x₂y₁ = 0',
      'Perpendicular vectors condition: x₁x₂ + y₁y₂ = 0',
      'Vector line equation: r = r₀ + k · u; slope m = b/a for direction vector u = (a, b)',
      'Perpendicular distance from point to line: d = |ax₁ + by₁ + c| / √(a² + b²)'
    ],

    summaryAr: 'تختتم المحاضرة الخامسة منهج رياضيات أولى ثانوي بالهندسة التحليلية والمتجهات في بعدين: العمليات على المتجهات وشروط التوازي والتعامد، تقسيم القطعة المستقيمة، وصور معادلات الخط المستقيم وطول العمود.',
    summaryEn: 'Concludes Grade 10 math with 2D vector algebra, parallelism/perpendicularity, internal/external segment division, vector/cartesian line equations, and perpendicular distance.',

    sections: [
      {
        titleAr: '1. المتجهات في المستوى وشروط التوازي والتعامد',
        titleEn: '1. 2D Vectors, Parallelism & Orthogonality',
        contentAr: '1) معيار المتجه والتحويل بين الصور:\n- إذا كان $\\vec{A} = (6, 8)$:\n  * المعيار $|\\vec{A}| = \\sqrt{6^2 + 8^2} = \\sqrt{100} = 10$.\n  * الاتجاه: $\\tan\\theta = \\frac{8}{6} = \\frac{4}{3} \\implies \\theta \\approx 53.13^\\circ$.\n\n2) شروط التوازي والتعامد:\n- إذا كان $\\vec{u} = (2, -3)$ و $\\vec{v} = (6, k)$ متوازيين:\n  * $x_1 y_2 - x_2 y_1 = 0 \\implies 2(k) - (-3)(6) = 0 \\implies 2k + 18 = 0 \\implies k = -9$.\n- إذا كانا متعامدين:\n  * $x_1 x_2 + y_1 y_2 = 0 \\implies 2(6) + (-3)(k) = 0 \\implies 12 - 3k = 0 \\implies k = 4$.',
        contentEn: 'Magnitude |A| = √(x² + y²). Parallelism requires cross difference = 0; perpendicularity requires dot sum = 0.'
      },
      {
        titleAr: '2. تقسيم قطعة مستقيمة ومعادلات الخط المستقيم',
        titleEn: '2. Segment Division & Line Equations',
        contentAr: '1) تقسيم قطعة مستقيمة:\n- أوجد إحداثيات النقطة $C$ التي تقسم $AB$ من الداخل بنسبة $1 : 2$ حيث $A(1, 4), B(4, 1)$:\n  * $x = \\frac{m_1 x_1 + m_2 x_2}{m_1 + m_2} = \\frac{2(1) + 1(4)}{2 + 1} = \\frac{6}{3} = 2$.\n  * $y = \\frac{2(4) + 1(1)}{2 + 1} = \\frac{9}{3} = 3$.\n  * إذن النقطة $C = (2, 3)$.\n\n2) طول العمود الساقط من نقطة على مستقيم:\n- احسب طول العمود الساقط من النقطة $(1, 2)$ على المستقيم $3x + 4y - 1 = 0$:\n  * $d = \\frac{|3(1) + 4(2) - 1|}{\\sqrt{3^2 + 4^2}} = \\frac{|3 + 8 - 1|}{\\sqrt{25}} = \\frac{10}{5} = 2\\text{ units}$.',
        contentEn: 'Segment division formula r = (m₁r₁ + m₂r₂)/(m₁ + m₂). Perpendicular distance d = |ax₁ + by₁ + c| / √(a² + b²).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-math5-1',
        questionAr: 'أوجد الصورة العامة لمعادلة الخط المستقيم المار بالنقطة $A(2, -3)$ ومتجه اتجاهه $\\vec{u} = (3, 4)$، ثم احسب بعد النقطة $P(5, 1)$ عن هذا المستقيم؟',
        questionEn: 'Find the general equation of the line passing through A(2, -3) with direction vector u=(3, 4), then calculate the distance from P(5, 1) to this line?',
        solutionStepsAr: [
          'الخطوة 1: ميل المستقيم m = b / a = 4 / 3.',
          'الخطوة 2: معادلة المستقيم الكارتيزية: y - y₁ = m(x - x₁) ⟹ y - (-3) = (4/3)(x - 2).',
          'الخطوة 3: 3(y + 3) = 4(x - 2) ⟹ 3y + 9 = 4x - 8 ⟹ 4x - 3y - 17 = 0 (الصورة العامة).',
          'الخطوة 4: حساب طول العمود من P(5, 1): d = |4(5) - 3(1) - 17| / √(4² + (-3)²) = |20 - 3 - 17| / √25 = 0 / 5 = 0.',
          'الخطوة 5: بما أن البعد يساوي 0، فإن النقطة P(5, 1) تقع تماماً على الخط المستقيم.'
        ],
        solutionStepsEn: [
          'Step 1: Slope m = 4/3.',
          'Step 2: Line equation: y + 3 = (4/3)(x - 2).',
          'Step 3: General equation: 4x - 3y - 17 = 0.',
          'Step 4: Distance from P(5, 1): d = |4(5) - 3(1) - 17| / √(16 + 9) = |20 - 20| / 5 = 0.',
          'Step 5: Since distance is 0, point P lies directly on the line.'
        ],
        answerAr: 'المعادلة: 4x - 3y - 17 = 0 ، وبعد النقطة d = 0 (النقطة تنتمي للمستقيم).',
        answerEn: 'Line: 4x - 3y - 17 = 0, distance d = 0 (P lies on the line).'
      }
    ],

    assessment: {
      id: 'quiz-h10-math-5',
      lectureId: 'h10-math-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: المتجهات ومعادلات المستقيم (1 ثانوي)',
      titleEn: 'Mastery Quiz 5: 2D Vectors & Analytic Line Geometry (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-m5-1',
          textAr: 'إذا كان المتجهان $\\vec{A} = (3, 4)$ و $\\vec{B} = (k, -6)$ متعامدين، فإن قيمة $k$ تساوي:',
          textEn: 'If vectors A = (3, 4) and B = (k, -6) are perpendicular, the value of k is:',
          optionsAr: ['8', '-8', '4.5', '-4.5'],
          optionsEn: ['8', '-8', '4.5', '-4.5'],
          correctIndex: 0,
          conceptTestedAr: 'شرط تعامد متجهين في بعدين',
          conceptTestedEn: '2D vector orthogonality condition',
          explanationAr: 'شرط التعامد: $x_1 x_2 + y_1 y_2 = 0 \\implies 3k + 4(-6) = 0 \\implies 3k - 24 = 0 \\implies 3k = 24 \\implies k = 8$.',
          explanationEn: '3k + 4(-6) = 0 => 3k = 24 => k = 8.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m5-2',
          textAr: 'طول العمود الساقط من نقطة الأصل $(0, 0)$ على المستقيم $6x + 8y - 30 = 0$ يساوي:',
          textEn: 'The perpendicular distance from origin (0, 0) to line 6x + 8y - 30 = 0 is:',
          optionsAr: ['3 units', '5 units', '30 units', '10 units'],
          optionsEn: ['3 units', '5 units', '30 units', '10 units'],
          correctIndex: 0,
          conceptTestedAr: 'طول العمود الساقط من نقطة الأصل',
          conceptTestedEn: 'Distance from origin to straight line',
          explanationAr: '$d = \\frac{|6(0) + 8(0) - 30|}{\\sqrt{6^2 + 8^2}} = \\frac{|-30|}{\\sqrt{100}} = \\frac{30}{10} = 3\\text{ units}$.',
          explanationEn: 'd = |-30| / √(36 + 64) = 30 / 10 = 3 units.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m5-3',
          textAr: 'إذا كانت النقطة $C$ تقسم القطعة $AB$ من الخارج بنسبة $2 : 1$ حيث $A(1, 2), B(3, 4)$، فإن إحداثيات $C$ هي:',
          textEn: 'If point C divides segment AB externally in ratio 2:1 with A(1, 2), B(3, 4), coordinates of C are:',
          optionsAr: ['(5, 6)', '(2, 3)', '(4, 5)', '(7, 8)'],
          optionsEn: ['(5, 6)', '(2, 3)', '(4, 5)', '(7, 8)'],
          correctIndex: 0,
          conceptTestedAr: 'تقسيم قطعة مستقيمة من الخارج',
          conceptTestedEn: 'External line segment division',
          explanationAr: 'في التقسيم من الخارج نأخذ $m_1 = -1, m_2 = 2$: $x = \\frac{-1(1) + 2(3)}{-1 + 2} = \\frac{-1 + 6}{1} = 5$ ، $y = \\frac{-1(2) + 2(4)}{1} = \\frac{-2 + 8}{1} = 6$. النقطة $(5, 6)$.',
          explanationEn: 'External division gives x = (-1 + 6)/1 = 5, y = (-2 + 8)/1 = 6, point (5, 6).',
          difficulty: 'medium'
        },
        {
          id: 'qh10-m5-4',
          textAr: 'معيار المتجه $\\vec{v} = 5\\hat{i} - 12\\hat{j}$ يساوي:',
          textEn: 'The magnitude of vector v = 5i - 12j is:',
          optionsAr: ['13', '17', '7', '169'],
          optionsEn: ['13', '17', '7', '169'],
          correctIndex: 0,
          conceptTestedAr: 'حساب معيار المتجه',
          conceptTestedEn: 'Vector magnitude calculation',
          explanationAr: '$|\\vec{v}| = \\sqrt{5^2 + (-12)^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$.',
          explanationEn: '|v| = √(25 + 144) = √169 = 13.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-m5-5',
          textAr: 'ميل الخط المستقيم الذي معادلته المتجهة $\\vec{r} = (1, 2) + k(3, -6)$ يساوي:',
          textEn: 'The slope of the line with vector equation r = (1, 2) + k(3, -6) is:',
          optionsAr: ['-2', '2', '-0.5', '3'],
          optionsEn: ['-2', '2', '-0.5', '3'],
          correctIndex: 0,
          conceptTestedAr: 'إيجاد ميل المستقيم من متجه الاتجاه',
          conceptTestedEn: 'Slope from direction vector u = (a, b)',
          explanationAr: 'متجه الاتجاه هو $\\vec{u} = (a, b) = (3, -6)$. الميل $m = \\frac{b}{a} = \\frac{-6}{3} = -2$.',
          explanationEn: 'Direction vector u = (3, -6) gives slope m = b/a = -6/3 = -2.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
