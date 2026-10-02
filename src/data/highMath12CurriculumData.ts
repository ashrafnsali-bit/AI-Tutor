import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL MATHEMATICS — GRADE 12 (رياضيات الصف الثالث الثانوي - الثانوية العامة ومدارس اللغات)
// Official Grade 12 / Secondary 3 National Egyptian Ministry Curriculum Alignment (Pure & Applied Math):
// Lecture 1: Calculus: Derivatives of Trig/Exp/Log Functions, Related Time Rates & Curve Sketching
// Lecture 2: Calculus: Integration Techniques (Substitution & Parts), Areas & Volumes of Revolution
// Lecture 3: Solid Geometry: 3D Vectors, Dot/Cross Products, Line and Plane Equations in Space
// Lecture 4: Algebra: Permutations, Combinations, Binomial Theorem, Complex Numbers (De Moivre) & Matrices
// Lecture 5: Mechanics: Statics (Friction, Moments & Equilibrium) & Dynamics (Newton's Laws, Impulse, Energy & Power)
// ============================================================================

export const HIGH_MATH_G12_LECTURES: Lecture[] = [
  // ── LECTURE 1: CALCULUS: DERIVATIVES, TIME RATES & CURVE SKETCHING ──
  {
    id: 'h12-m-1',
    order: 1,
    titleAr: 'المحاضرة 1: التفاضل: اشتقاق الدوال المثلثية والأسية واللوغاريتمية، معدلات التغير الزمنية، ورسم المنحنيات',
    titleEn: 'Lecture 1: Calculus: Advanced Differentiation, Related Time Rates & Curve Sketching Analysis',
    subtitleAr: 'مشتقات الدوال المثلثية والدائرية، مشتقات الدوال الأسية واللوغاريتمية الطبيعية، الاشتقاق الضمني والبارامتري، معادلات المماس والعمودي، المعدلات الزمنية المرتبطة، التزايد والتناقص، نقط الانقلاب والتحدب ورسم المنحنيات',
    subtitleEn: 'Master derivatives of trigonometric, exponential (eˣ, aˣ) and logarithmic (ln x, log_a x) functions, implicit/parametric differentiation, tangent/normal lines, related time rates, critical points, extrema, inflection points & curve sketching.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Mathematics (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الفرع الأول: حساب التفاضل والتكامل (التفاضل وتطبيقاته)',
    unitTitleEn: 'Branch 1: Calculus (Differentiation & Applications)',
    lessonNumberAr: 'الدرس 1: قواعد الاشتقاق المتقدمة والمعدلات الزمنية ورسم المنحنيات',
    lessonNumberEn: 'Lesson 1: Advanced Derivatives, Time Rates & Curve Analysis',

    keyConceptsAr: [
      'مشتقات الدوال المثلثية: $\\frac{d}{dx}(\\sec x) = \\sec x \\tan x$ ، $\\frac{d}{dx}(\\csc x) = -\\csc x \\cot x$ ، $\\frac{d}{dx}(\\cot x) = -\\csc^2 x$',
      'مشتقات الدوال الأسية واللوغاريتمية: $\\frac{d}{dx}(e^{f(x)}) = f\'(x) \\cdot e^{f(x)}$ ، $\\frac{d}{dx}(a^{f(x)}) = f\'(x) \\cdot a^{f(x)} \\ln a$ ، $\\frac{d}{dx}(\\ln f(x)) = \\frac{f\'(x)}{f(x)}$',
      'الاشتقاق الضمني والبارامتري: $\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta}$ ، ومعادلة المماس $y - y_1 = m(x - x_1)$ والعمودي $y - y_1 = -\\frac{1}{m}(x - x_1)$',
      'المعدلات الزمنية المرتبطة (Related Time Rates): صياغة العلاقات الهندسية وحساب $\\frac{dx}{dt}, \\frac{dy}{dt}, \\frac{dV}{dt}$',
      'سلوك الدالة: النقط الحرجة ($f\'(x) = 0$ أو غير معرفة)، فترات التزايد والتناقص، القيم العظمى والصغرى المحلية والمطلقة، التحدب لأعلى ولأسفل ($f\'\'(x)$)، ونقط الانقلاب'
    ],
    keyConceptsEn: [
      'Derivatives of higher trigonometric functions: sec x, csc x, cot x',
      'Exponential and logarithmic derivatives: d/dx(e^f(x)) = f\'(x) e^f(x), d/dx(ln f(x)) = f\'(x)/f(x), d/dx(a^f(x)) = f\'(x) a^f(x) ln a',
      'Implicit & parametric differentiation, equations of tangents and normals',
      'Related time rates modeling geometric expansion, fluid draining, and ladder sliding',
      'Curve analysis: critical points (f\'=0), increasing/decreasing intervals, local/absolute extrema, concavity and inflection points (f\'\'=0)'
    ],

    conceptMapAr: [
      'الدالة $f(x)$ ➔ المشتقة الأولى $f\'(x)$ (تحدد الميل، التزايد، التناقص، والنقط الحرجة والعظمى/الصغرى)',
      'المشتقة الثانية $f\'\'(x)$ ➔ (تحدد التحدب لأعلى ولأسفل ونقط الانقلاب)',
      'المعدلات الزمنية ➔ رسم المسألة ➔ إيجاد العلاقة الهندسية ➔ الاشتقاق بالنسبة للزمن $t$'
    ],
    conceptMapEn: [
      'Function f(x) ➔ 1st Derivative f\'(x) (Slope, Monotonicity, Critical Points, Local Extrema)',
      '2nd Derivative f\'\'(x) ➔ (Concavity Up/Down and Inflection Points)',
      'Related Rates ➔ Model geometry ➔ Differentiate with respect to time t ➔ Solve unknown rate'
    ],

    learningOutcomesAr: [
      'إيجاد المشتقات الأولى والعليا للدوال المثلثية والأسية واللوغاريتمية والدوال البارامترية.',
      'حل مسائل المعدلات الزمنية المرتبطة الفيزيائية والهندسية بدقة متناهية.',
      'تطبيق اختبارات المشتقة الأولى والثانية لتحديد النقط الحرجة وفترات التحدب ورسم المنحنيات البيانية.'
    ],
    learningOutcomesEn: [
      'Compute first and higher-order derivatives for trigonometric, exponential, logarithmic, and parametric functions.',
      'Solve geometric and physical related time rates word problems.',
      'Apply first and second derivative tests to identify critical points, concavity, inflection points, and sketch function curves.'
    ],

    vocabulary: [
      { termAr: 'النقطة الحرجة', termEn: 'Critical Point', definitionAr: 'نقطة تنتمي لمجال الدالة تجعل المشتقة الأولى مساوية للصفر $f\'(x) = 0$ أو غير معرفة، وتكون مرشحة لتكون قيمة عظمى أو صغرى محلية.' },
      { termAr: 'نقطة الانقلاب', termEn: 'Inflection Point', definitionAr: 'نقطة على منحنى الدالة يتغير عندها اتجاه التحدب من أعلى لأسفل أو العكس، وتفصل بين فترتي تحدب مختلفتين وتكون المشتقة الثانية عندها $f\'\'(x) = 0$ أو غير معرفة.' }
    ],

    warmupHookAr: 'عندما يرتكز سلم طوله 10 أمتار على حائط رأسي وأرض أفقية، ويبدأ طرفه السفلي بالانزلاق مبتعداً عن الحائط بسرعة $2\\text{ m/s}$؛ بأي سرعة يهبط طرفه العلوي عندما يكون على بعد 8 أمتار من الأرض؟ عبر علم التفاضل والمعدلات الزمنية المرتبطة نجد أن سرعة هبوط الطرف العلوي تساوي $-1.5\\text{ m/s}$!',
    warmupHookEn: 'A 10-meter ladder rests against a vertical wall. If the bottom slides away at 2 m/s, how fast does the top slide down when it is 8 meters high? Related time rates application yields exactly -1.5 m/s.',

    mainContentAr: `
### 1. قواعد اشتقاق الدوال الخاصة (Advanced Derivative Rules)
1. **مشتقات الدوال المثلثية:**
   * $\\frac{d}{dx}(\\sec u) = (\\sec u \\tan u) \\cdot u'$
   * $\\frac{d}{dx}(\\csc u) = -(\\csc u \\cot u) \\cdot u'$
   * $\\frac{d}{dx}(\\cot u) = -(\\csc^2 u) \\cdot u'$
2. **مشتقات الدوال الأسية واللوغاريتمية:**
   * $\\frac{d}{dx}(e^u) = e^u \\cdot u'$
   * $\\frac{d}{dx}(a^u) = a^u \\cdot u' \\cdot \\ln a$
   * $\\frac{d}{dx}(\\ln u) = \\frac{u'}{u}$
   * $\\frac{d}{dx}(\\log_a u) = \\frac{u'}{u \\cdot \\ln a}$

---

### 2. المعدلات الزمنية المرتبطة (Related Time Rates)
* **خطوات الحل:**
  1. رسم شكل توضيحي وتسمية المتغيرات التي تتغير مع الزمن ($x(t), y(t), \\theta(t), V(t)$).
  2. إيجاد علاقة رياضية تربط المتغيرات (فيثاغورس، تشابه مثلثات، قوانين الحجوم والمساحات).
  3. اشتقاق طرفي العلاقة بالنسبة للزمن $t$.
  4. التعويض بالقيم اللحظية المعطاة وإيجاد المعدل المجهول.

---

### 3. رسم المنحنيات وسلوك الدالة (Curve Sketching)
* **التزايد والتناقص:** $f\'(x) > 0 \\implies$ تزايدية، $f\'(x) < 0 \\implies$ تناقصية.
* **التحدب ونقط الانقلاب:**
  * $f\'\'(x) > 0 \\implies$ المنحنى محدب لأسفل $\\cup$.
  * $f\'\'(x) < 0 \\implies$ المنحنى محدب لأعلى $\\cap$.
  * نقطة الانقلاب: تتغير عندها إشارة $f\'\'(x)$ وتكون الدالة متصلة ولها مماس عندها.
    `,
    mainContentEn: `
### 1. Special Derivatives
* $(e^u)' = u' e^u$, $(\\ln u)' = u'/u$, $(\\sec u)' = u' \\sec u \\tan u$, $(\\cot u)' = -u' \\csc^2 u$.

### 2. Related Time Rates
* Model geometric constraints and differentiate with respect to $t$.

### 3. Curve Analysis
* $f'(x)$ sign determines monotonicity and local extrema.
* $f''(x)$ sign determines concavity and inflection points.
    `,

    diagramType: 'calculus_curve_diagram',
    diagramData: {
      type: 'curve_inflection_extrema',
      title: 'رسم منحنى الدالة وتوضيح النقط الحرجة والعظمى ونقطة الانقلاب والتحدب',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="180" x2="380" y2="180" stroke="#64748b" stroke-width="2" />
        <line x1="60" y1="20" x2="60" y2="200" stroke="#64748b" stroke-width="2" />
        <path d="M 50 170 Q 120 20 200 100 T 350 30" stroke="#38bdf8" stroke-width="3" fill="none" />
        <circle cx="120" cy="55" r="5" fill="#f43f5e" />
        <text x="110" y="40" fill="#f43f5e" font-size="11">عظمى محلية (f'=0)</text>
        <circle cx="200" cy="100" r="5" fill="#fbbf24" />
        <text x="210" y="105" fill="#fbbf24" font-size="11">نقطة انقلاب (f''=0)</text>
        <circle cx="280" cy="145" r="5" fill="#34d399" />
        <text x="260" y="165" fill="#34d399" font-size="11">صغرى محلية (f'=0)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: إيجاد معادلة المماس والعمودي لمنحنى دالة لوغاريتمية',
        titleEn: 'Example: Tangent and Normal Equation for Logarithmic Curve',
        problemAr: 'أوجد معادلتي المماس والعمودي للمنحنى $y = x \\ln x$ عند النقطة الواقعة عليه والتي إحداثيها السيني $x = e$.',
        problemEn: 'Find the tangent and normal lines to y = x ln x at x = e.',
        stepsAr: [
          'نحسب الإحداثي الصادي للنقطة: $y = e \\ln e = e \\times 1 = e$. فالنقطة هي $(e, e)$.',
          'نشتق الدالة لحساب ميل المماس $m$: $\\frac{dy}{dx} = (1)(\\ln x) + x (\\frac{1}{x}) = \\ln x + 1$.',
          'نعوض عن $x = e$: $m = \\ln e + 1 = 1 + 1 = 2$.',
          'معادلة المماس: $y - e = 2(x - e) \\implies y = 2x - e$.',
          'معادلة العمودي (ميله $-\\frac{1}{2}$): $y - e = -\\frac{1}{2}(x - e) \\implies 2y + x = 3e$.'
        ],
        stepsEn: [
          'Point coordinates: y = e ln e = e ⟹ (e, e).',
          'Derivative: dy/dx = ln x + 1.',
          'Slope at x = e: m = ln e + 1 = 2.',
          'Tangent equation: y - e = 2(x - e) ⟹ y = 2x - e.',
          'Normal equation: y - e = -1/2(x - e) ⟹ 2y + x = 3e.'
        ],
        finalAnswerAr: 'معادلة المماس: $y = 2x - e$ ، ومعادلة العمودي: $2y + x = 3e$',
        finalAnswerEn: 'Tangent: y = 2x - e; Normal: 2y + x = 3e'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12m-1',
        problemAr: 'إذا كان $x = 2\\cos^3 \\theta$ و $y = 2\\sin^3 \\theta$، أوجد $\\frac{dy}{dx}$ عند $\\theta = \\frac{\\pi}{4}$.',
        problemEn: 'If x = 2 cos^3 θ and y = 2 sin^3 θ, find dy/dx at θ = π/4.',
        solutionStepsAr: [
          'اشتقاق بارامتري:',
          '$\\frac{dx}{d\\theta} = 6\\cos^2 \\theta (-\\sin \\theta) = -6\\cos^2 \\theta \\sin \\theta$.',
          '$\\frac{dy}{d\\theta} = 6\\sin^2 \\theta (\\cos \\theta) = 6\\sin^2 \\theta \\cos \\theta$.',
          '$\\frac{dy}{dx} = \\frac{dy/d\\theta}{dx/d\\theta} = \\frac{6\\sin^2 \\theta \\cos \\theta}{-6\\cos^2 \\theta \\sin \\theta} = -\\frac{\\sin \\theta}{\\cos \\theta} = -\\tan \\theta$.',
          'عند $\\theta = \\frac{\\pi}{4}$: $\\frac{dy}{dx} = -\\tan(\\frac{\\pi}{4}) = -1$.'
        ],
        finalAnswerAr: '$\\frac{dy}{dx} = -1$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12m-1',
        questionAr: 'مشتقة الدالة $y = e^{\\tan x}$ بالنسبة إلى $x$ هي:',
        questionEn: 'The derivative of y = e^(tan x) with respect to x is:',
        optionsAr: ['$\\sec^2 x \\cdot e^{\\tan x}$', '$\\tan x \\cdot e^{\\tan x}$', '$e^{\\sec^2 x}$', '$\\sec x \\tan x \\cdot e^{\\tan x}$'],
        optionsEn: ['sec^2 x * e^(tan x)', 'tan x * e^(tan x)', 'e^(sec^2 x)', 'sec x tan x * e^(tan x)'],
        correctIndex: 0,
        explanationAr: 'مشتقة $e^{f(x)}$ هي $f\'(x) \\cdot e^{f(x)}$؛ وبما أن مشتقة $\\tan x$ هي $\\sec^2 x$، فإن الناتج هو $\\sec^2 x \\cdot e^{\\tan x}$.',
        explanationEn: 'd/dx(e^f(x)) = f\'(x) e^f(x) = sec^2 x * e^(tan x).'
      }
    ],

    assessment: {
      id: 'quiz-h12-m1',
      titleAr: 'اختبار إتقان التفاضل وسلوك الدوال والمعدلات الزمنية',
      titleEn: 'Mastery Quiz: Differentiation & Curve Analysis',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-m1-1',
          textAr: 'إذا كانت $y = \\ln(\\sec x + \\tan x)$، فإن $\\frac{dy}{dx}$ تساوي:',
          textEn: 'If y = ln(sec x + tan x), then dy/dx equals:',
          optionsAr: ['$\\sec x$', '$\\tan x$', '$\\sec x \\tan x$', '$\\sec^2 x$'],
          optionsEn: ['sec x', 'tan x', 'sec x tan x', 'sec^2 x'],
          correctIndex: 0,
          conceptTestedAr: 'اشتقاق الدالة اللوغاريتمية للدوال المثلثية',
          conceptTestedEn: 'Logarithmic derivative of trigonometric sum',
          explanationAr: '$\\frac{dy}{dx} = \\frac{\\sec x \\tan x + \\sec^2 x}{\\sec x + \\tan x} = \\frac{\\sec x(\\tan x + \\sec x)}{\\sec x + \\tan x} = \\sec x$.',
          explanationEn: 'Factoring sec x from numerator yields sec x identically.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-m1-2',
          textAr: 'منحنى الدالة $f(x) = x^3 - 3x^2 + 5$ يكون محدباً لأعلى ($\\cap$) في الفترة:',
          textEn: 'The curve of f(x) = x^3 - 3x^2 + 5 is concave downward on the interval:',
          optionsAr: ['$(-\\infty, 1)$', '$(1, \\infty)$', '$(0, 2)$', '$\\mathbb{R}$'],
          optionsEn: ['(-∞, 1)', '(1, ∞)', '(0, 2)', 'R'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد فترات التحدب باستخدام المشتقة الثانية',
          conceptTestedEn: 'Concavity determination via second derivative',
          explanationAr: '$f\'(x) = 3x^2 - 6x \\implies f\'\'(x) = 6x - 6$. نضع $f\'\'(x) < 0 \\implies 6x < 6 \\implies x < 1$ أي الفترة $(-\\infty, 1)$.',
          explanationEn: 'f\'\'(x) = 6x - 6 < 0 ⟹ x < 1 ⟹ interval (-∞, 1).',
          difficulty: 'easy'
        },
        {
          id: 'qh12-m1-3',
          textAr: 'نقطة الانقلاب لمنحنى الدالة $f(x) = x^3 - 3x + 2$ هي:',
          textEn: 'The inflection point of the curve f(x) = x^3 - 3x + 2 is:',
          optionsAr: ['$(0, 2)$', '$(1, 0)$', '$(-1, 4)$', '$(0, 0)$'],
          optionsEn: ['(0, 2)', '(1, 0)', '(-1, 4)', '(0, 0)'],
          correctIndex: 0,
          conceptTestedAr: 'حساب نقطة الانقلاب',
          conceptTestedEn: 'Calculating inflection point coordinates',
          explanationAr: '$f\'\'(x) = 6x = 0 \\implies x = 0$. بالتعويض في الدالة: $f(0) = 2$، فالنقطة هي $(0, 2)$.',
          explanationEn: 'f\'\'(x) = 6x = 0 ⟹ x = 0; f(0) = 2 ⟹ (0, 2).',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: CALCULUS: INTEGRATION TECHNIQUES & APPLICATIONS ──
  {
    id: 'h12-m-2',
    order: 2,
    titleAr: 'المحاضرة 2: التكامل: طرق التكامل بالتعويض والتجزئة، تكامل الدوال الأسية واللوغاريتمية، والمساحات والحجوم الدورانية',
    titleEn: 'Lecture 2: Calculus: Integration by Substitution & Parts, Definite Integrals, Areas & Volumes of Revolution',
    subtitleAr: 'قواعد تكامل الدوال الأسية واللوغاريتمية والمثلثية، التكامل بالتعويض والتكامل بالتجزئة [∫ u dv = uv - ∫ v du]، خواص التكامل المحدد، حساب المساحة المستوية بين منحنيين، وحساب حجوم الأجسام الدورانية حول المحاور',
    subtitleEn: 'Master integration of exponential, logarithmic and trigonometric functions, integration by substitution, integration by parts (∫ u dv = uv - ∫ v du), definite integral properties, bounded plane areas, and solid volumes of revolution.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Mathematics (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الفرع الأول: حساب التفاضل والتكامل (التكامل وتطبيقاته)',
    unitTitleEn: 'Branch 1: Calculus (Integration & Applications)',
    lessonNumberAr: 'الدرس 2: طرق التكامل المتقدمة والمساحات والحجوم الدورانية',
    lessonNumberEn: 'Lesson 2: Integration by Parts, Areas & Volumes',

    keyConceptsAr: [
      'تكامل الدوال الأسية والكسرية: $\\int e^{ax+b} dx = \\frac{1}{a} e^{ax+b} + C$ ، $\\int \\frac{f\'(x)}{f(x)} dx = \\ln|f(x)| + C$',
      'التكامل بالتعويض (Integration by Substitution) لتحويل التكامل المعقد إلى صيغة قياسية بسيطة',
      'التكامل بالتجزئة (Integration by Parts): $\\int u \\, dv = u \\cdot v - \\int v \\, du$ لدوال حاصل ضرب جبرية في أسية أو لوغاريتمية',
      'حساب المساحة بين منحنيين: $\\text{Area} = \\int_a^b [y_1 - y_2] dx$',
      'حساب حجم الجسم الدوراني الناشئ عن دوران منطقة مستوية دورة كاملة حول محور السينات $V = \\pi \\int_a^b y^2 dx$ وحول محور الصادات $V = \\pi \\int_c^d x^2 dy$'
    ],
    keyConceptsEn: [
      'Exponential and rational integrals: ∫ e^(ax+b) dx = (1/a) e^(ax+b) + C, ∫ (f\'(x)/f(x)) dx = ln|f(x)| + C',
      'Integration by Substitution transforming composite functions into standard forms',
      'Integration by Parts formula: ∫ u dv = u*v - ∫ v du (LIATE priority rule for u)',
      'Plane areas bounded between curves: Area = ∫ (y_top - y_bottom) dx',
      'Volumes of solids of revolution: V_x = π ∫ y² dx (about X-axis) and V_y = π ∫ x² dy (about Y-axis)'
    ],

    conceptMapAr: [
      'البسط مشتقة المقام ➔ $\\int \\frac{f\'(x)}{f(x)} dx = \\ln|f(x)| + c$',
      'حاصل ضرب دالتين مختلفتين ➔ التكامل بالتجزئة $\\int u \\, dv = uv - \\int v \\, du$',
      'التطبيقات الهندسية ➔ المساحة $= \\int (y_1 - y_2) dx$ ➔ الحجم الدوراني $= \\pi \\int y^2 dx$'
    ],
    conceptMapEn: [
      'Numerator is derivative of denominator ➔ ∫ f\'/f dx = ln|f| + C',
      'Product of algebraic and transcendental functions ➔ Integration by Parts ∫ u dv = uv - ∫ v du',
      'Applications ➔ Area = ∫ (y1 - y2) dx ➔ Volume of Revolution = π ∫ y² dx'
    ],

    learningOutcomesAr: [
      'تطبيق طريقتي التكامل بالتعويض والتكامل بالتجزئة لحل المسائل التكاملية المتقدمة.',
      'حساب التكاملات المحددة واستخدام خواص التماثل للدوال الفردية والزوجية.',
      'حساب المساحات المحصورة بين المنحنيات وحجوم الأجسام الدورانية حول المحاور الإحداثية.'
    ],
    learningOutcomesEn: [
      'Solve complex integrals using substitution and integration by parts.',
      'Evaluate definite integrals using symmetry properties for even and odd functions.',
      'Calculate exact bounded plane areas and solid volumes of revolution.'
    ],

    vocabulary: [
      { termAr: 'التكامل بالتجزئة', termEn: 'Integration by Parts', definitionAr: 'طريقة تكامل تعتمد على قاعدة مشتقة حاصل ضرب دالتين وتستخدم لحساب تكامل حاصل ضرب دالتين مختلفتين كدالة جبرية مع دالة أسية أو مثلثية.' },
      { termAr: 'حجم الجسم الدوراني', termEn: 'Volume of Revolution', definitionAr: 'الحجم الفراغي الناشئ من دوران منطقة مستوية محصورة بين منحنيين دورة كاملة ($360^\\circ$) حول أحد محاور الإحداثيات.' }
    ],

    warmupHookAr: 'كيف يحسب مهندسو تصميم هياكل الصواريخ الفضائية وأقمار الاتصالات الحجم الدقيق لخزان الوقود الانسيابي المنحني والوزن الصافي للمعادن اللازمة لصناعته؟ عبر التكامل المحدد وحساب "الحجوم الدورانية" $V = \\pi \\int y^2 dx$ التي تحول منحنى ثنائي الأبعاد إلى مجسم هندسي ثلاثي الأبعاد فائق الدقة!',
    warmupHookEn: 'How do aerospace engineers determine the precise volume and mass of aerodynamic curved rocket fuel tanks? Through definite integration and solids of revolution V = π ∫ y² dx converting 2D curve profiles into exact 3D physical volumes.',

    mainContentAr: `
### 1. التكامل بالتجزئة (Integration by Parts)
$$\\int u \\, dv = u \\cdot v - \\int v \\, du$$
* **قاعدة اختيار الدالة $u$ (أولوية LIATE):**
  1. اللوغاريتمية ($\\ln x$).
  2. الجبرية ($x^n$).
  3. المثلثية والأسية ($e^x, \\sin x$).
* **مثال شهير:** $\\int x e^x dx \\implies u = x, dv = e^x dx \\implies du = dx, v = e^x \\implies \\int x e^x dx = x e^x - \\int e^x dx = x e^x - e^x + C$.

---

### 2. تطبيقات التكامل: المساحات المستوية (Areas)
* المساحة المحصورة بين المنحنى $y = f(x)$ ومحور السينات في الفترة $[a, b]$:
  $$\\text{Area} = \\int_a^b |y| \\, dx$$
* المساحة المحصورة بين منحنيين $y_1$ و $y_2$:
  $$\\text{Area} = \\int_a^b (y_1 - y_2) \\, dx \\quad (\\text{حيث } y_1 \\ge y_2)$$

---

### 3. تطبيقات التكامل: الحجوم الدورانية (Volumes of Revolution)
* **الدوران دورة كاملة حول محور السينات ($x$-axis):**
  $$V = \\pi \\int_a^b y^2 \\, dx = \\pi \\int_a^b [f(x)]^2 \\, dx$$
* **الدوران دورة كاملة حول محور الصادات ($y$-axis):**
  $$V = \\pi \\int_c^d x^2 \\, dy = \\pi \\int_c^d [g(y)]^2 \\, dy$$
    `,
    mainContentEn: `
### 1. Integration by Parts Formula
$$\\int u \\, dv = u v - \\int v \\, du$$

### 2. Bounded Plane Area
$$\\text{Area} = \\int_a^b (y_{\\text{top}} - y_{\\text{bottom}}) \\, dx$$

### 3. Volumes of Revolution
* About X-axis: $V_x = \\pi \\int_a^b y^2 \\, dx$
* About Y-axis: $V_y = \\pi \\int_c^d x^2 \\, dy$
    `,

    diagramType: 'solid_revolution_diagram',
    diagramData: {
      type: 'volume_of_revolution',
      title: 'حجم الجسم الدوراني الناشئ عن دوران المنحنى y = f(x) حول محور السينات',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="100" x2="380" y2="100" stroke="#64748b" stroke-width="2" />
        <line x1="80" y1="20" x2="80" y2="180" stroke="#64748b" stroke-width="2" />
        <path d="M 120 40 Q 220 50 300 20 L 300 180 Q 220 150 120 160 Z" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" stroke-width="2" />
        <ellipse cx="300" cy="100" rx="20" ry="80" fill="none" stroke="#38bdf8" stroke-width="2" />
        <ellipse cx="120" cy="100" rx="10" ry="60" fill="none" stroke="#38bdf8" stroke-dasharray="3" />
        <text x="325" y="105" fill="#38bdf8" font-size="12">V = π ∫ y² dx</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حساب حجم الجسم الدوراني',
        titleEn: 'Example: Volume of Revolution Calculation',
        problemAr: 'أوجد حجم الجسم الدوراني الناشئ من دوران المنطقة المحصورة بالمنحنى $y = \\sqrt{x}$ ومحور السينات والمستقيمين $x = 0$ و $x = 4$ دورة كاملة حول محور السينات.',
        problemEn: 'Find the volume of solid formed by revolving y = sqrt(x) from x = 0 to x = 4 about the x-axis.',
        stepsAr: [
          'نطبق قانون الحجم الدوراني حول محور السينات: $V = \\pi \\int_a^b y^2 dx$.',
          'بما أن $y = \\sqrt{x} \\implies y^2 = (\\sqrt{x})^2 = x$.',
          'حدود التكامل من $a = 0$ إلى $b = 4$.',
          '$V = \\pi \\int_0^4 x \\, dx = \\pi [\\frac{x^2}{2}]_0^4 = \\pi [\\frac{4^2}{2} - 0] = \\pi [\\frac{16}{2}] = 8\\pi$ وحدة حجم.'
        ],
        stepsEn: [
          'Apply Vx = π ∫ y² dx.',
          'y² = (sqrt(x))² = x.',
          'Evaluate: π ∫_0^4 x dx = π [x²/2]_0^4 = π (16/2) = 8π cubic units.'
        ],
        finalAnswerAr: 'الحجم يساوي $8\\pi$ وحدة حجم مكعبة.',
        finalAnswerEn: 'Volume = 8π cubic units'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12m-2',
        problemAr: 'احسب قيمة التكامل: $\\int \\ln x \\, dx$.',
        problemEn: 'Evaluate the integral: ∫ ln x dx.',
        solutionStepsAr: [
          'نستخدم التكامل بالتجزئة: نضع $u = \\ln x$ و $dv = dx$.',
          'إذن $du = \\frac{1}{x} dx$ و $v = x$.',
          'نطبق القانون: $\\int u \\, dv = uv - \\int v \\, du = x \\ln x - \\int x (\\frac{1}{x}) dx = x \\ln x - \\int 1 \\, dx = x \\ln x - x + C$.'
        ],
        finalAnswerAr: '$\\int \\ln x \\, dx = x \\ln x - x + C$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12m-2',
        questionAr: 'قيمة التكامل $\\int \\frac{2x + 3}{x^2 + 3x + 5} \\, dx$ تساوي:',
        questionEn: 'The value of the integral ∫ (2x + 3)/(x^2 + 3x + 5) dx is:',
        optionsAr: ['$\\ln|x^2 + 3x + 5| + C$', '$\\frac{1}{x^2 + 3x + 5} + C$', '$(x^2 + 3x + 5)^2 + C$', '$2\\ln|2x + 3| + C$'],
        optionsEn: ['ln|x^2 + 3x + 5| + C', '1/(x^2 + 3x + 5) + C', '(x^2 + 3x + 5)^2 + C', '2 ln|2x + 3| + C'],
        correctIndex: 0,
        explanationAr: 'بما أن البسط $(2x + 3)$ هو المشتقة التامة للمقام $(x^2 + 3x + 5)$، فإن ناتج التكامل هو لوغاريتم القيمة المطلقة للمقام $\\ln|\\text{المقام}| + C$.',
        explanationEn: 'Numerator is the exact derivative of denominator, hence result is ln|denominator| + C.'
      }
    ],

    assessment: {
      id: 'quiz-h12-m2',
      titleAr: 'اختبار إتقان التكامل وتطبيقات المساحات والحجوم',
      titleEn: 'Mastery Quiz: Integration & Geometric Applications',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-m2-1',
          textAr: 'قيمة التكامل المحدد $\\int_{-2}^2 x^5 \\cos x \\, dx$ تساوي:',
          textEn: 'The value of the definite integral ∫_{-2}^2 (x^5 cos x) dx is:',
          optionsAr: ['0', '$2\\int_0^2 x^5 \\cos x \\, dx$', '$\\pi$', '16'],
          optionsEn: ['0', '2 ∫_0^2 x^5 cos x dx', 'π', '16'],
          correctIndex: 0,
          conceptTestedAr: 'تكامل الدوال الفردية على فترة متماثلة',
          conceptTestedEn: 'Definite integral of odd functions on symmetric intervals',
          explanationAr: 'الدالة $f(x) = x^5 \\cos x$ دالة فردية ($f(-x) = -f(x)$) والتكامل على فترة متماثلة $[-a, a]$ يساوي صفراً دائماً.',
          explanationEn: 'x^5 cos x is an odd function integrated over symmetric [-2, 2], which identically equals 0.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-m2-2',
          textAr: 'قيمة التكامل $\\int x \\cos x \\, dx$ باستخدام التكامل بالتجزئة تساوي:',
          textEn: 'The integral ∫ x cos x dx via integration by parts is:',
          optionsAr: ['$x \\sin x + \\cos x + C$', '$x \\sin x - \\cos x + C$', '$-x \\cos x + \\sin x + C$', '$\\frac{1}{2} x^2 \\sin x + C$'],
          optionsEn: ['x sin x + cos x + C', 'x sin x - cos x + C', '-x cos x + sin x + C', '1/2 x^2 sin x + C'],
          correctIndex: 0,
          conceptTestedAr: 'التكامل بالتجزئة للدوال المثلثية',
          conceptTestedEn: 'Integration by parts with trigonometric functions',
          explanationAr: 'نضع $u = x, dv = \\cos x dx \\implies du = dx, v = \\sin x$. الناتج $= x \\sin x - \\int \\sin x dx = x \\sin x + \\cos x + C$.',
          explanationEn: '∫ x cos x dx = x sin x - ∫ sin x dx = x sin x + cos x + C.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-m2-3',
          textAr: 'المساحة المحصورة بين المنحنى $y = 3x^2$ ومحور السينات في الفترة $[0, 2]$ تساوي:',
          textEn: 'The area bounded by y = 3x^2 and the x-axis on [0, 2] is:',
          optionsAr: ['8', '12', '24', '4'],
          optionsEn: ['8', '12', '24', '4'],
          correctIndex: 0,
          conceptTestedAr: 'حساب المساحة المستوية بالتكامل المحدد',
          conceptTestedEn: 'Plane area evaluation via definite integral',
          explanationAr: '$\\text{Area} = \\int_0^2 3x^2 \\, dx = [x^3]_0^2 = 2^3 - 0 = 8$ وحدات مربعة.',
          explanationEn: 'Area = ∫_0^2 3x^2 dx = [x^3]_0^2 = 8 square units.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: SOLID ANALYTICAL GEOMETRY & 3D VECTORS ──
  {
    id: 'h12-m-3',
    order: 3,
    titleAr: 'المحاضرة 3: الهندسة الفراغية: الإحداثيات والمتجهات في الفراغ ثلاثي الأبعاد، معادلة الكرة، ومعادلتا المستقيم والمستوى',
    titleEn: 'Lecture 3: Solid Geometry: 3D Coordinate Space, Vectors, Dot & Cross Products, Sphere, Line & Plane Equations',
    subtitleAr: 'نظام الإحداثيات المتعامد ثلاثي الأبعاد، معادلة الكرة في الفراغ، متجهات الموضع وجيوب تمام الاتجاه، الضرب القياسي والضرب الاتجاهي والضرب الثلاثي القياسي، والصور المختلفة لمعادلة الخط المستقيم ومعادلة المستوى في الفراغ',
    subtitleEn: 'Master 3D Cartesian coordinates, sphere equations, direction cosines, dot product, cross product, scalar triple product (volume of parallelepiped), vector/parametric/Cartesian equations of lines and planes in 3D space.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Mathematics (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الفرع الثاني: الهندسة الفراغية (المتجهات والخط والمستوى)',
    unitTitleEn: 'Branch 2: Solid Geometry (3D Vectors, Line & Plane)',
    lessonNumberAr: 'الدرس 3: المتجهات ثلاثية الأبعاد ومعادلات الخط والمستوى والكرة',
    lessonNumberEn: 'Lesson 3: 3D Vectors, Sphere, Lines & Planes',

    keyConceptsAr: [
      'نظام الإحداثيات ثلاثي الأبعاد $(x, y, z)$، ومعادلة الكرة في الفراغ: $(x - a)^2 + (y - b)^2 + (z - c)^2 = r^2$',
      'جيوب تمام الاتجاه لمتجه: $\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1$ ومتجه الوحدة في اتجاه $\\vec{A}$',
      'الضرب القياسي (Dot Product): $\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z = \\|\\vec{A}\\| \\|\\vec{B}\\| \\cos \\theta$ (شرط التعامد $\\vec{A} \\cdot \\vec{B} = 0$)',
      'الضرب الاتجاهي (Cross Product): $\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix}$ (مساحة متوازي الأضلاع $\\|=\\|\\vec{A} \\times \\vec{B}\\|$ وشرط التوازي $\\vec{A} \\times \\vec{B} = \\vec{0}$)',
      'الضرب الثلاثي القياسي $\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})$ لحساب حجم متوازي السطوح',
      'معادلة الخط المستقيم في الفراغ: $\\vec{r} = \\vec{r}_0 + t \\vec{d}$، ومعادلة المستوى في الفراغ: $\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{r}_0$'
    ],
    keyConceptsEn: [
      '3D Cartesian coordinate system and standard Sphere equation (x-a)^2 + (y-b)^2 + (z-c)^2 = r^2',
      'Direction angles and cosines identity: cos^2(alpha) + cos^2(beta) + cos^2(gamma) = 1, unit vectors',
      'Dot product: A . B = ||A|| ||B|| cos(theta) = Ax Bx + Ay By + Az Bz (perpendicular orthogonality condition A . B = 0)',
      'Cross product: A x B determinant formulation (parallelogram area = ||A x B||, parallelism condition A x B = 0)',
      'Scalar triple product A . (B x C) representing volume of a parallelepiped in 3D',
      'Vector, parametric, and Cartesian equations of straight lines and planes in 3D space'
    ],

    conceptMapAr: [
      'الفراغ ثلاثي الأبعاد ➔ $(x, y, z)$ ➔ معادلة الكرة بمركز $(a, b, c)$ ونصف قطر $r$',
      'الضرب ➔ قياسي ($\\vec{A} \\cdot \\vec{B} = 0 \\implies$ تعامد) / اتجاهي ($\\vec{A} \\times \\vec{B} = \\vec{0} \\implies$ توازي)',
      'معادلة المستوى ➔ $\\vec{n} \\cdot \\vec{r} = d$ حيث $\\vec{n} = (a, b, c)$ هو المتجه العمودي على المستوى'
    ],
    conceptMapEn: [
      '3D Coordinates ➔ (x, y, z) ➔ Sphere with center (a,b,c) and radius r',
      'Vector Multiplications ➔ Dot Product (A.B=0 ⟹ Perpendicular) / Cross Product (AxB=0 ⟹ Parallel)',
      'Plane Equation ➔ n . r = d where n=(a,b,c) is normal vector'
    ],

    learningOutcomesAr: [
      'كتابة معادلة الكرة في الفراغ واستخراج مركزها ونصف قطرها من الصورة العامة.',
      'تطبيق الضرب القياسي والاتجاهي لحساب الزوايا بين المتجهات والمستويات ومساحات المثلثات وحجوم متوازي السطوح.',
      'صياغة معادلات المستقيم والمستوى في الفراغ بالصورة المتجهة والبارامترية والكارتيزية.'
    ],
    learningOutcomesEn: [
      'Formulate general and standard sphere equations, identifying center coordinates and radius.',
      'Utilize dot, cross, and scalar triple products to calculate angles, areas, and parallelepiped volumes.',
      'Construct vector, parametric, and Cartesian equations of lines and planes in 3D space.'
    ],

    vocabulary: [
      { termAr: 'جيوب تمام الاتجاه', termEn: 'Direction Cosines', definitionAr: 'قيم جيوب تمام الزوايا التي يصنعها المتجه مع محاور الإحداثيات الموجبة الثلاثة ($X, Y, Z$) وتحقق $\\cos^2 \\alpha + \\cos^2 \\beta + \\cos^2 \\gamma = 1$.' },
      { termAr: 'المتجه العمودي على المستوى', termEn: 'Normal Vector (n)', definitionAr: 'متجه غير صفري يكون عمودياً على أي خط مستقيم أو متجه يقع داخل المستوى، ويحدد اتجاه المستوى في الفراغ.' }
    ],

    warmupHookAr: 'كيف ترسم ألعاب الفيديو ثلاثية الأبعاد (مثل FIFA و Fortnite) وبرامج الرسوم المتحركة مجسمات اللاعبين والملاعب والظل والإضاءة في فضاء ثلاثي الأبعاد؟ عبر علم "الهندسة الفراغية والمتجهات ثلاثية الأبعاد" والضرب الاتجاهي والقياسي الذي يعالج ملايين الإحداثيات $(x, y, z)$ في كل إطار في الثانية!',
    warmupHookEn: 'How do 3D game engines render realistic player motion, lighting, and camera perspectives in virtual space? Through 3D solid geometry vectors, normal vectors, and dot/cross product matrix transformations executing millions of (x, y, z) calculations per second.',

    mainContentAr: `
### 1. المتجهات والضرب القياسي والاتجاهي (3D Vectors)
* **الضرب القياسي (Dot Product):**
  $$\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z = \\|\\vec{A}\\| \\|\\vec{B}\\| \\cos \\theta$$
  * شرط تعامد متجهين غير صفريين: $\\vec{A} \\cdot \\vec{B} = 0$.
  * زاوية بين متجهين: $\\cos \\theta = \\frac{\\vec{A} \\cdot \\vec{B}}{\\|\\vec{A}\\| \\|\\vec{B}\\|}$.
* **الضرب الاتجاهي (Cross Product):**
  $$\\vec{A} \\times \\vec{B} = \\begin{vmatrix} \\hat{i} & \\hat{j} & \\hat{k} \\\\ A_x & A_y & A_z \\\\ B_x & B_y & B_z \\end{vmatrix}$$
  * مساحة متوازي الأضلاع المتكون من المتجهين: $\\text{Area} = \\|\\vec{A} \\times \\vec{B}\\|$.
  * مساحة المثلث: $\\text{Area} = \\frac{1}{2} \\|\\vec{A} \\times \\vec{B}\\|$.

---

### 2. معادلة الخط المستقيم في الفراغ (3D Line Equations)
يمر بالنقطة $\\vec{r}_0 = (x_1, y_1, z_1)$ ومتجه اتجاهه $\\vec{d} = (a, b, c)$:
1. **الصورة المتجهة:** $\\vec{r} = \\vec{r}_0 + t \\vec{d}$.
2. **الصور البارامترية:** $x = x_1 + at \\, , \\, y = y_1 + bt \\, , \\, z = z_1 + ct$.
3. **الصورة الكارتيزية (الإحداثية):** $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$.

---

### 3. معادلة المستوى في الفراغ (3D Plane Equations)
يمر بالنقطة $\\vec{r}_0 = (x_1, y_1, z_1)$ ومتجهه العمودي $\\vec{n} = (a, b, c)$:
* **الصورة القياسية المتجهة:** $\\vec{n} \\cdot \\vec{r} = \\vec{n} \\cdot \\vec{r}_0 = d$.
* **الصورة العامة الكارتيزية:** $a x + b y + c z + D = 0$.
    `,
    mainContentEn: `
### 1. Vector Operations
* Dot Product: $\\vec{A} \\cdot \\vec{B} = A_x B_x + A_y B_y + A_z B_z$ (Orthogonality: $\\vec{A} \\cdot \\vec{B} = 0$).
* Cross Product: $\\vec{A} \\times \\vec{B}$ determinant. Parallelogram area = $\\|\\vec{A} \\times \\vec{B}\\|$.

### 2. Line Equations in 3D
* Vector: $\\vec{r} = \\vec{r}_0 + t \\vec{d}$
* Cartesian: $\\frac{x - x_1}{a} = \\frac{y - y_1}{b} = \\frac{z - z_1}{c}$

### 3. Plane Equation in 3D
* $a x + b y + c z + D = 0$ where $\\vec{n} = (a, b, c)$ is normal vector.
    `,

    diagramType: 'solid_geometry_diagram',
    diagramData: {
      type: '3d_axes_vectors',
      title: 'محاور الفراغ ثلاثي الأبعاد X, Y, Z والضرب الاتجاهي والمتجه العمودي',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <line x1="200" y1="120" x2="350" y2="120" stroke="#64748b" stroke-width="2" />
        <text x="360" y="125" fill="#94a3b8" font-size="12">Y</text>
        <line x1="200" y1="120" x2="200" y2="20" stroke="#64748b" stroke-width="2" />
        <text x="205" y="25" fill="#94a3b8" font-size="12">Z</text>
        <line x1="200" y1="120" x2="90" y2="190" stroke="#64748b" stroke-width="2" />
        <text x="75" y="200" fill="#94a3b8" font-size="12">X</text>
        <line x1="200" y1="120" x2="290" y2="70" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)" />
        <text x="300" y="70" fill="#38bdf8" font-size="12">A</text>
        <line x1="200" y1="120" x2="140" y2="150" stroke="#34d399" stroke-width="3" marker-end="url(#arrow)" />
        <text x="125" y="160" fill="#34d399" font-size="12">B</text>
        <line x1="200" y1="120" x2="170" y2="40" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow)" />
        <text x="140" y="45" fill="#f43f5e" font-size="12">A × B (عمودي)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: إيجاد قياس الزاوية بين مستويين في الفراغ',
        titleEn: 'Example: Angle Between Two Planes in 3D Space',
        problemAr: 'أوجد قياس الزاوية الصغرى بين المستويين: $2x - y + 2z - 5 = 0$ و $x + y + 2 = 0$.',
        problemEn: 'Find the acute angle between planes 2x - y + 2z - 5 = 0 and x + y + 2 = 0.',
        stepsAr: [
          'نستخرج المتجه العمودي للمستوى الأول: $\\vec{n}_1 = (2, -1, 2)$.',
          'نستخرج المتجه العمودي للمستوى الثاني: $\\vec{n}_2 = (1, 1, 0)$.',
          'نحسب الضرب القياسي: $\\vec{n}_1 \\cdot \\vec{n}_2 = (2)(1) + (-1)(1) + (2)(0) = 2 - 1 + 0 = 1$.',
          'نحسب المعايير: $\\|\\vec{n}_1\\| = \\sqrt{2^2 + (-1)^2 + 2^2} = \\sqrt{4+1+4} = \\sqrt{9} = 3$.',
          '\\|\\vec{n}_2\\| = \\sqrt{1^2 + 1^2 + 0^2} = \\sqrt{2}$.',
          '$\\cos \\theta = \\frac{|\\vec{n}_1 \\cdot \\vec{n}_2|}{\\|\\vec{n}_1\\| \\|\\vec{n}_2\\|} = \\frac{1}{3\\sqrt{2}} \\approx 0.2357 \\implies \\theta = \\cos^{-1}(0.2357) \\approx 76.37^\\circ$.'
        ],
        stepsEn: [
          'n1 = (2, -1, 2), n2 = (1, 1, 0).',
          'n1 . n2 = 2 - 1 + 0 = 1.',
          '||n1|| = 3, ||n2|| = sqrt(2).',
          'cos θ = 1 / (3*sqrt(2)) ⟹ θ ≈ 76° 22\'.'
        ],
        finalAnswerAr: 'قياس الزاوية بين المستويين $\\theta \\approx 76^\\circ 22\'$',
        finalAnswerEn: 'Angle between planes θ ≈ 76.37°'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12m-3',
        problemAr: 'أوجد مركز ونصف قطر الكرة التي معادلتها: $x^2 + y^2 + z^2 - 4x + 6y - 8z + 4 = 0$.',
        problemEn: 'Find center and radius of sphere x^2 + y^2 + z^2 - 4x + 6y - 8z + 4 = 0.',
        solutionStepsAr: [
          'المركز $(a, b, c) = (-\\frac{\\text{معامل } x}{2}, -\\frac{\\text{معامل } y}{2}, -\\frac{\\text{معامل } z}{2}) = (-\\frac{-4}{2}, -\\frac{6}{2}, -\\frac{-8}{2}) = (2, -3, 4)$.',
          'نصف القطر $r = \\sqrt{a^2 + b^2 + c^2 - D} = \\sqrt{2^2 + (-3)^2 + 4^2 - 4} = \\sqrt{4 + 9 + 16 - 4} = \\sqrt{25} = 5$ وحدات طول.'
        ],
        finalAnswerAr: 'المركز هو $(2, -3, 4)$ ونصف القطر $r = 5$ وحدات طول.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12m-3',
        questionAr: 'إذا كان المتجهان $\\vec{A} = (2, m, -4)$ و $\\vec{B} = (3, 2, 1)$ متعامدين في الفراغ، فإن قيمة $m$ تساوي:',
        questionEn: 'If vectors A = (2, m, -4) and B = (3, 2, 1) are orthogonal, then m equals:',
        optionsAr: ['-1', '1', '2', '-2'],
        optionsEn: ['-1', '1', '2', '-2'],
        correctIndex: 0,
        explanationAr: 'شرط التعامد: $\\vec{A} \\cdot \\vec{B} = 0 \\implies (2)(3) + (m)(2) + (-4)(1) = 0 \\implies 6 + 2m - 4 = 0 \\implies 2 + 2m = 0 \\implies m = -1$.',
        explanationEn: 'Dot product orthogonality: 6 + 2m - 4 = 0 ⟹ 2m = -2 ⟹ m = -1.'
      }
    ],

    assessment: {
      id: 'quiz-h12-m3',
      titleAr: 'اختبار إتقان الهندسة الفراغية والمتجهات ثلاثية الأبعاد',
      titleEn: 'Mastery Quiz: Solid Geometry & 3D Vectors',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-m3-1',
          textAr: 'إذا كانت زوايا اتجاه متجه في الفراغ هي $(60^\\circ, 45^\\circ, \\theta)$، فإن إحدى قيم $\\theta$ الممكنة هي:',
          textEn: 'If direction angles of a 3D vector are (60°, 45°, θ), a possible value for θ is:',
          optionsAr: ['$60^\\circ$', '$30^\\circ$', '$90^\\circ$', '$45^\\circ$'],
          optionsEn: ['60°', '30°', '90°', '45°'],
          correctIndex: 0,
          conceptTestedAr: 'قانون جيوب تمام الاتجاه في الفراغ',
          conceptTestedEn: 'Direction cosines identity',
          explanationAr: '$\\cos^2 60^\\circ + \\cos^2 45^\\circ + \\cos^2 \\theta = 1 \\implies (0.5)^2 + (\\frac{1}{\\sqrt{2}})^2 + \\cos^2 \\theta = 1 \\implies 0.25 + 0.5 + \\cos^2 \\theta = 1 \\implies \\cos^2 \\theta = 0.25 \\implies \\cos \\theta = 0.5 \\implies \\theta = 60^\\circ$.',
          explanationEn: 'cos^2(60) + cos^2(45) + cos^2(θ) = 1 ⟹ 0.25 + 0.5 + cos^2(θ) = 1 ⟹ cos(θ) = 0.5 ⟹ θ = 60°.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-m3-2',
          textAr: 'معادلة المستوى المار بالنقطة $(1, 2, 3)$ ويوازي المستوى الإحداثي $XY$ هي:',
          textEn: 'The equation of the plane passing through (1, 2, 3) and parallel to the XY coordinate plane is:',
          optionsAr: ['$z = 3$', '$x = 1$', '$y = 2$', '$x + y = 3$'],
          optionsEn: ['z = 3', 'x = 1', 'y = 2', 'x + y = 3'],
          correctIndex: 0,
          conceptTestedAr: 'معادلات المستويات الموازية للمستويات الإحداثية',
          conceptTestedEn: 'Planes parallel to coordinate planes',
          explanationAr: 'المستوى الموازي لـ $XY$ يكون عمودياً على محور $Z$ ومعادلته $z = c$، وبما أنه يمر بالنقطة $(1, 2, 3)$ فإن معادلته هي $z = 3$.',
          explanationEn: 'Plane parallel to XY plane has form z = constant, hence z = 3.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-m3-3',
          textAr: 'حجم متوازي السطوح الذي فيه ثلاثة أحرف متجاورة يمثلها المتجهات $\\vec{A} = (1, 0, 0)$ و $\\vec{B} = (0, 2, 0)$ و $\\vec{C} = (0, 0, 3)$ يساوي:',
          textEn: 'The volume of the parallelepiped formed by vectors A=(1,0,0), B=(0,2,0), C=(0,0,3) is:',
          optionsAr: ['6 وحدات حجم', '5 وحدات حجم', '1 وحدة حجم', '0'],
          optionsEn: ['6 cubic units', '5 cubic units', '1 cubic unit', '0'],
          correctIndex: 0,
          conceptTestedAr: 'حساب حجم متوازي السطوح بالضرب الثلاثي القياسي',
          conceptTestedEn: 'Scalar triple product for parallelepiped volume',
          explanationAr: 'الحجم يساوي القيمة المطلقة للمحدد: $|\\vec{A} \\cdot (\\vec{B} \\times \\vec{C})| = \\begin{vmatrix} 1 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 3 \\end{vmatrix} = 1(6 - 0) = 6$ وحدات حجم.',
          explanationEn: 'Determinant of diagonal matrix = 1 * 2 * 3 = 6 cubic units.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: ALGEBRA: COMBINATORICS, BINOMIAL THEOREM & COMPLEX NUMBERS ──
  {
    id: 'h12-m-4',
    order: 4,
    titleAr: 'المحاضرة 4: الجبر: مبدأ العد والتباديل والتوافيق، نظرية ذات الحدين، والأعداد المركبة (ديموافر وأوميجا) والمحددات والمصفوفات',
    titleEn: 'Lecture 4: Algebra: Combinatorics, Binomial Theorem, Complex Numbers (De Moivre & Omega) & Matrix Systems',
    subtitleAr: 'مبدأ العد والتباديل والتوافيق وخواصها، مفكوك ذات الحدين والحد العام والرتبة، الأعداد المركبة والصور المثلثية والأسية ونظرية ديموافر والجذور التكعيبية للواحد (1, ω, ω²)، والمحددات وحل المعادلات المصفوفية بـ كرامر والمعكوس الضربي',
    subtitleEn: 'Master Permutations, Combinations, Binomial Theorem expansion & ratio of consecutive terms, Complex Numbers trigonometric/exponential forms, De Moivre\'s theorem, Cube roots of unity (1, ω, ω²), and Matrix inversion/Cramer\'s rule systems.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Mathematics (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الفرع الثاني: الجبر الخطي والأعداد المركبة',
    unitTitleEn: 'Branch 2: Linear Algebra & Complex Numbers',
    lessonNumberAr: 'الدرس 4: التوافيق وذات الحدين والأعداد المركبة والمصفوفات',
    lessonNumberEn: 'Lesson 4: Combinatorics, Binomial, Complex Numbers & Matrices',

    keyConceptsAr: [
      'مبدأ العد الأساسي وقوانين التباديل ($^n P_r = \\frac{n!}{(n-r)!}$) والتوافيق ($^n C_r = \\frac{n!}{r!(n-r)!}$)',
      'نظرية ذات الحدين بأُس صحيح موجب: الحد العام $T_{r+1} = \\, ^n C_r \\cdot x^{n-r} \\cdot a^r$ وقانون النسبة $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{\\text{الحد الثاني}}{\\text{الحد الأول}}$',
      'الأعداد المركبة في الصورة المثلثية والأسية (أويلر): $z = r(\\cos \\theta + i \\sin \\theta) = r e^{i\\theta}$ ونظرية ديموافر والجذور النونية',
      'الجذور التكعيبية للواحد الصحيح ($1, \\omega, \\omega^2$) وخواصها: $1 + \\omega + \\omega^2 = 0$ و $\\omega^3 = 1$ و $\\omega - \\omega^2 = \\pm i \\sqrt{3}$',
      'خواص المحددات، والمعكوس الضربي للمصفوفة $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$، وحل أنظمة المعادلات الخطية بطريقة كرامر وبالمصفوفات'
    ],
    keyConceptsEn: [
      'Fundamental counting principle, Permutations nPr = n!/(n-r)! and Combinations nCr = n!/(r!(n-r)!)',
      'Binomial Theorem expansion, General term T_{r+1} = nCr * x^(n-r) * a^r, and consecutive ratio formula',
      'Complex Numbers: Trigonometric and Euler exponential forms z = r(cos θ + i sin θ) = r e^(iθ), De Moivre\'s theorem',
      'Cube roots of unity (1, ω, ω²) fundamental identities: 1 + ω + ω² = 0, ω³ = 1, and (ω - ω²) = ± i sqrt(3)',
      'Properties of determinants, Adjugate matrix inversion A^(-1) = (1/|A|) adj(A), and Cramer\'s linear system solver'
    ],

    conceptMapAr: [
      'الجبر ➔ مبدأ العد (ترتيب وتكرار) ➔ التباديل $^n P_r$ والتوافيق $^n C_r$ ➔ مفكوك ذات الحدين $(x+a)^n$',
      'الأعداد المركبة ➔ المقياس $r$ والسعة $\\theta$ ➔ صورة ديموافر $z^n = r^n(\\cos n\\theta + i \\sin n\\theta)$ ➔ جذور الواحد $\\omega$',
      'المصفوفات ➔ المحددات ➔ رتبة المصفوفة ➔ حل أنظمة المعادلات الخطية $A X = B$'
    ],
    conceptMapEn: [
      'Algebra ➔ Counting Principle ➔ Permutations nPr & Combinations nCr ➔ Binomial Theorem (x+a)^n',
      'Complex Numbers ➔ Modulus r & Argument θ ➔ De Moivre\'s z^n = r^n cis(nθ) ➔ Cube roots of unity ω',
      'Matrices ➔ Determinants ➔ Matrix rank ➔ Solving linear systems AX = B via A^(-1)'
    ],

    learningOutcomesAr: [
      'تطبيق مبدأ العد وقوانين التباديل والتوافيق في حل مسائل التوزيع والاختيار الحياتية.',
      'إيجاد الحد المشتمل على $x^k$ أو الحد الخالي من $x$ والحدود الوسطى في مفكوك ذات الحدين.',
      'استخدام نظرية ديموافر وخواص جذور الواحد $\\omega$ لتبسيط المقادير الجبرية المعقدة.',
      'حل منظومة معادلات خطية من الدرجة الأولى باستخدام المعكوس الضربي للمصفوفة وقاعدة كرامر.'
    ],
    learningOutcomesEn: [
      'Solve practical combinatorics counting and arrangement problems using nPr and nCr.',
      'Calculate specific term coefficients (x-independent term, middle terms) in binomial expansions.',
      'Apply De Moivre\'s theorem and cube roots of unity identities (ω) to simplify complex algebraic expressions.',
      'Solve systems of 3 linear equations using Cramer\'s determinant rule and inverse matrices.'
    ],

    vocabulary: [
      { termAr: 'نظرية ديموافر', termEn: 'De Moivre\'s Theorem', definitionAr: 'نظرية رياضية تنص على أنه لأي عدد مركب $z = r(\\cos \\theta + i \\sin \\theta)$ وأي عدد صحيح $n$ فإن: $z^n = r^n (\\cos n\\theta + i \\sin n\\theta)$.' },
      { termAr: 'الجذور التكعيبية للواحد (ω)', termEn: 'Cube Roots of Unity (ω)', definitionAr: 'الجذور الثلاثة للمعادلة $z^3 = 1$ وهي: الواحد الصحيح، و $\\omega = -\\frac{1}{2} + i\\frac{\\sqrt{3}}{2}$، و $\\omega^2 = -\\frac{1}{2} - i\\frac{\\sqrt{3}}{2}$.' }
    ],

    warmupHookAr: 'كيف يعالج مهندسو الاتصالات وتوليد الطاقة الكهربائية المترددة إشارات التيار والجهد المتناوب المعقدة التي تتغير 50 مرة في الثانية دون أن تنفجر المحولات؟ بتحويل الموجات الجيبية إلى "أعداد مركبة" وصيغة أويلر وديموافر $z = r e^{i\\theta}$، مما يحول أعقد معادلات الفيزياء إلى عمليات جمع وضرب جبرية بسيطة!',
    warmupHookEn: 'How do electrical grid engineers analyze multi-phase AC power networks alternating 60 times per second? By modeling oscillatory voltages as complex numbers and Euler phasors z = r e^(iθ), turning differential equations into simple algebra.',

    mainContentAr: `
### 1. نظرية ذات الحدين (The Binomial Theorem)
$$(x + a)^n = \\sum_{r=0}^n \\, ^n C_r \\, x^{n-r} \\, a^r$$
* **الحد العام ذو الرتبة $(r+1)$:**
  $$T_{r+1} = \\, ^n C_r \\cdot x^{n-r} \\cdot a^r$$
* **النسبة بين حدين متتاليين:**
  $$\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{a}{x}$$
* **إيجاد الحد الخالي من $x$:** نضع أُس المتغير $x$ مساوياً للصفر ونوجد قيمة $r$.

---

### 2. الأعداد المركبة ونظرية ديموافر (Complex Numbers & De Moivre)
* **الصورة المثلثية:** $z = r(\\cos \\theta + i \\sin \\theta)$ حيث $r = \\sqrt{x^2 + y^2}$ والسعة الأساسية $\\theta \\in (-\\pi, \\pi]$.
* **نظرية ديموافر:**
  $$[r(\\cos \\theta + i \\sin \\theta)]^n = r^n (\\cos n\\theta + i \\sin n\\theta)$$
* **خواص الجذور التكعيبية للواحد الصحيح ($1, \\omega, \\omega^2$):**
  * $1 + \\omega + \\omega^2 = 0$
  * $\\omega^3 = 1 \\quad , \\quad \\omega^{3k+r} = \\omega^r$
  * $\\omega + \\omega^2 = -1 \\quad , \\quad 1 + \\omega = -\\omega^2$
  * $(\\omega - \\omega^2)^2 = -3 \\implies \\omega - \\omega^2 = \\pm i \\sqrt{3}$

---

### 3. المحددات والمصفوفات (Matrices & Systems of Equations)
* **المعكوس الضربي للمصفوفة مربعة $A$:**
  $$A^{-1} = \\frac{1}{|A|} \\cdot \\text{adj}(A) \\quad (\\text{يشترط } |A| \\ne 0)$$
* **حل النظام الخطي $A X = B \\implies X = A^{-1} B$.**
    `,
    mainContentEn: `
### 1. Binomial Theorem
* General Term: $T_{r+1} = \\, ^n C_r \\, x^{n-r} \\, a^r$
* Ratio: $\\frac{T_{r+1}}{T_r} = \\frac{n - r + 1}{r} \\cdot \\frac{\\text{2nd}}{\\text{1st}}$

### 2. Complex Numbers & De Moivre
* $z = r(\\cos \\theta + i \\sin \\theta) = r e^{i\\theta}$
* $z^n = r^n (\\cos n\\theta + i \\sin n\\theta)$
* Cube roots of unity: $1 + \\omega + \\omega^2 = 0, \\, \\omega^3 = 1$.

### 3. Matrix Inverse
* $A^{-1} = \\frac{1}{|A|} \\text{adj}(A)$.
    `,

    diagramType: 'complex_plane_diagram',
    diagramData: {
      type: 'argand_roots_of_unity',
      title: 'مخطط أرجاند للجذور التكعيبية للواحد الصحيح (1, ω, ω²)',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="100" r="70" fill="none" stroke="#64748b" stroke-dasharray="3" />
        <line x1="100" y1="100" x2="300" y2="100" stroke="#64748b" stroke-width="2" />
        <line x1="200" y1="20" x2="200" y2="180" stroke="#64748b" stroke-width="2" />
        <circle cx="270" cy="100" r="5" fill="#38bdf8" />
        <text x="280" y="105" fill="#38bdf8" font-size="12" font-weight="bold">1</text>
        <circle cx="165" cy="40" r="5" fill="#34d399" />
        <text x="145" y="35" fill="#34d399" font-size="12" font-weight="bold">ω (120°)</text>
        <circle cx="165" cy="160" r="5" fill="#fbbf24" />
        <text x="140" y="175" fill="#fbbf24" font-size="12" font-weight="bold">ω² (240°)</text>
        <polygon points="270,100 165,40 165,160" fill="rgba(56, 189, 248, 0.1)" stroke="#38bdf8" />
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: إيجاد الحد الخالي من x في مفكوك ذات الحدين',
        titleEn: 'Example: Finding Term Independent of x in Binomial Expansion',
        problemAr: 'أوجد قيمة الحد الخالي من $x$ في مفكوك $(x^2 + \\frac{1}{x})^9$ حسب قوى $x$ التنازلية.',
        problemEn: 'Find the term independent of x in (x^2 + 1/x)^9.',
        stepsAr: [
          'نكتب صيغة الحد العام: $T_{r+1} = \\, ^9 C_r (x^2)^{9-r} (\\frac{1}{x})^r$.',
          'نبسط قوى $x$: $T_{r+1} = \\, ^9 C_r \\cdot x^{18 - 2r} \\cdot x^{-r} = \\, ^9 C_r \\cdot x^{18 - 3r}$.',
          'للحد الخالي من $x$ نساوي الأُس بالصفر: $18 - 3r = 0 \\implies 3r = 18 \\implies r = 6$.',
          'إذن الحد الخالي من $x$ هو الحد السابع ($T_7$): $T_7 = \\, ^9 C_6 = \\frac{9 \\times 8 \\times 7}{3 \\times 2 \\times 1} = 84$.'
        ],
        stepsEn: [
          'General term: T_{r+1} = 9Cr * (x^2)^(9-r) * (x^-1)^r = 9Cr * x^(18 - 3r).',
          'For independent term: 18 - 3r = 0 ⟹ r = 6.',
          'Term is T7: T7 = 9C6 = 84.'
        ],
        finalAnswerAr: 'الحد الخالي من $x$ هو الحد السابع $T_7 = 84$.',
        finalAnswerEn: 'Independent term is T7 = 84'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12m-4',
        problemAr: 'احسب قيمة المقدار: $(1 - \\frac{1}{\\omega} + \\omega^2)^5$.',
        problemEn: 'Evaluate the expression: (1 - 1/ω + ω^2)^5.',
        solutionStepsAr: [
          'نعلم أن $\\frac{1}{\\omega} = \\omega^2$ لأن $\\omega^3 = 1$.',
          'المقدار يصبح: $(1 - \\omega^2 + \\omega^2)^5 = (1)^5 = 1$.',
          'أو بالصيغة الأخرى: $( (1 + \\omega^2) - \\frac{1}{\\omega} )^5 = (-\\omega - \\omega^2)^5 = (-(-1))^5 = (1)^5 = 1$.'
        ],
        finalAnswerAr: 'قيمة المقدار تساوي $1$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12m-4',
        questionAr: 'إذا كان $^n C_3 = 35$، فإن قيمة $n$ تساوي:',
        questionEn: 'If nC3 = 35, then n equals:',
        optionsAr: ['7', '5', '6', '8'],
        optionsEn: ['7', '5', '6', '8'],
        correctIndex: 0,
        explanationAr: '$^7 C_3 = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35$؛ إذن $n = 7$.',
        explanationEn: '7C3 = (7 * 6 * 5) / 6 = 35 ⟹ n = 7.'
      }
    ],

    assessment: {
      id: 'quiz-h12-m4',
      titleAr: 'اختبار إتقان الجبر ونظرية ذات الحدين والأعداد المركبة',
      titleEn: 'Mastery Quiz: Combinatorics, Binomial & Complex Numbers',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-m4-1',
          textAr: 'قيمة المقدار $(1 + \\omega)^8$ في أبسط صورة تساوي:',
          textEn: 'The value of (1 + ω)^8 in simplest form is:',
          optionsAr: ['$\\omega$', '$\\omega^2$', '1', '-1'],
          optionsEn: ['ω', 'ω^2', '1', '-1'],
          correctIndex: 0,
          conceptTestedAr: 'خواص الجذور التكعيبية للواحد الصحيح',
          conceptTestedEn: 'Cube roots of unity identities',
          explanationAr: 'بما أن $1 + \\omega = -\\omega^2$، فإن: $(-\\omega^2)^8 = \\omega^{16} = \\omega^{15} \\cdot \\omega = (1) \\cdot \\omega = \\omega$.',
          explanationEn: '(1 + ω)^8 = (-ω^2)^8 = ω^16 = (ω^3)^5 * ω = ω.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-m4-2',
          textAr: 'العدد المركب $z = -1 + i\\sqrt{3}$ في الصورة المثلثية القياسية يُكتب كـ:',
          textEn: 'The complex number z = -1 + i*sqrt(3) in standard trigonometric form is:',
          optionsAr: ['$2(\\cos \\frac{2\\pi}{3} + i \\sin \\frac{2\\pi}{3})$', '$2(\\cos \\frac{\\pi}{3} + i \\sin \\frac{\\pi}{3})$', '$2(\\cos \\frac{5\\pi}{6} + i \\sin \\frac{5\\pi}{6})$', '$4(\\cos \\pi + i \\sin \\pi)$'],
          optionsEn: ['2(cos(2π/3) + i sin(2π/3))', '2(cos(π/3) + i sin(π/3))', '2(cos(5π/6) + i sin(5π/6))', '4(cos π + i sin π)'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل للصورة المثلثية للعدد المركب',
          conceptTestedEn: 'Trigonometric polar form of complex numbers',
          explanationAr: '$r = \\sqrt{(-1)^2 + (\\sqrt{3})^2} = 2$. النقطة $(-1, \\sqrt{3})$ في الربع الثاني؛ $\\theta = 180^\\circ - 60^\\circ = 120^\\circ = \\frac{2\\pi}{3}$.',
          explanationEn: 'Modulus r = 2. Second quadrant angle θ = 180° - 60° = 120° = 2π/3 rad.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-m4-3',
          textAr: 'عدد طرق اختيار لجنة مكونة من 3 طلاب من بين 8 طلاب يساوي:',
          textEn: 'The number of ways to select a committee of 3 students from 8 students is:',
          optionsAr: ['56', '336', '24', '11'],
          optionsEn: ['56', '336', '24', '11'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق التوافيق في مسائل الاختيار دون ترتيب',
          conceptTestedEn: 'Combinations nCr for committee selection',
          explanationAr: 'الاختيار دون اشتراط الترتيب يُحسب بالتوافيق: $^8 C_3 = \\frac{8 \\times 7 \\times 6}{3 \\times 2 \\times 1} = 56$ طريقة.',
          explanationEn: '8C3 = (8 * 7 * 6) / 6 = 56 ways.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: APPLIED MATHEMATICS: STATICS & DYNAMICS ──
  {
    id: 'h12-m-5',
    order: 5,
    titleAr: 'المحاضرة 5: الميكانيكا التطبيقية: الاستاتيكا (الاحتكاك، العزوم، والاتزان العام) والديناميكا (قوانين نيوتن، الدفع والطاقة)',
    titleEn: 'Lecture 5: Applied Mathematics & Mechanics: Statics (Friction, Moments & Equilibrium) & Dynamics (Newton\'s Laws, Impulse & Energy)',
    subtitleAr: 'الاحتكاك على المستويات الأفقية والمائلة، عزوم القوى في 2D و 3D، الاتزان العام للجسم الجاسئ، قوانين نيوتن الثلاثة للحركة، حركة البكرات، الدفع وكمية الحركة، ومبدأ الشغل والطاقة والقدرة',
    subtitleEn: 'Master Statics (limiting friction, 2D/3D moments, parallel forces, general rigid body equilibrium & couples) and Dynamics (Newton\'s laws of motion, pulleys on inclined planes, impulse-momentum theorem, work-energy theorem, and power).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Mathematics (Thanawya Amma - Math Section)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الفرع الثالث: الميكانيكا (الاستاتيكا والديناميكا)',
    unitTitleEn: 'Branch 3: Mechanics (Statics & Dynamics)',
    lessonNumberAr: 'الدرس 5: الاستاتيكا والاتزان العام والديناميكا وقوانين الحركة',
    lessonNumberEn: 'Lesson 5: Statics, Equilibrium & Dynamics Laws',

    keyConceptsAr: [
      'الاستاتيكا - الاحتكاك: قوة الاحتكاك السكوني النهائي $F_s = \\mu_s R$ ورد الفعل المحصل $R\' = R \\sqrt{1 + \\mu_s^2}$ وزاوية الاحتكاك $\\lambda$',
      'الاستاتيكا - العزوم والاتزان العام: عزم القوة $\\vec{M}_O = \\vec{r} \\times \\vec{F}$، وشروط الاتزان العام لجسم جاسئ: $\\sum F_x = 0, \\, \\sum F_y = 0, \\, \\sum \\vec{M}_O = \\vec{0}$',
      'الاستاتيكا - الازدواجات (Couples): قوتان متساويتان في المقدار ومتضادتان في الاتجاه ولا يجمعهما خط عمل واحد ($M = F \\cdot d$)',
      'الديناميكا - قوانين نيوتن: القانون الأول (القصور الذاتي $\\sum \\vec{F} = \\vec{0}$)، القانون الثاني ($\vec{F} = m \\vec{a}$ أو $\\vec{F} = \\frac{d\\vec{p}}{dt}$)، وحركة الأجسام على المستويات المائلة وحركة البكرات البسيطة',
      'الديناميكا - الدفع وكمية الحركة: الدفع $\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p} = m(v_2 - v_1)$',
      'الديناميكا - الشغل والطاقة والقدرة: الشغل $W = \\vec{F} \\cdot \\vec{s}$، طاقة الحركة $T = \\frac{1}{2}mv^2$، مبدأ الشغل والطاقة $\\Delta T = W$، والقدرة اللحظية $P = \\vec{F} \\cdot \\vec{v}$'
    ],
    keyConceptsEn: [
      'Statics Friction: limiting friction Fs = μs * R, resultant reaction R\' = R sqrt(1 + μs²), angle of friction λ',
      'Statics Moments & Rigid Body General Equilibrium: M_O = r x F, Equilibrium conditions (ΣFx = 0, ΣFy = 0, ΣM_O = 0)',
      'Statics Couples: two equal, opposite, non-collinear forces with moment M = F * d',
      'Dynamics Newton\'s Laws: 1st Law inertia, 2nd Law F = m*a (or d(mv)/dt), motion on inclined planes & Atwood pulley machines',
      'Dynamics Impulse & Momentum: Impulse I = F * Δt = Δp = m(v2 - v1)',
      'Dynamics Work, Energy & Power: Work W = F . s, Kinetic Energy T = 1/2 m v², Work-Energy theorem ΔT = W, and Instantaneous Power P = F . v'
    ],

    conceptMapAr: [
      'الاستاتيكا (سكون) ➔ محصلة القوى صفر $\\sum \\vec{F} = 0$ + محصلة العزوم صفر $\\sum \\vec{M} = 0$',
      'الديناميكا (حركة) ➔ قانون نيوتن الثاني $\\vec{F} = m\\vec{a}$ ➔ الدفع $\\vec{I} = \\Delta \\vec{p}$',
      'الطاقة والقدرة ➔ الشغل المبذول $=$ التغير في طاقة الحركة ($W = \\Delta T$) ➔ القدرة $= \\vec{F} \\cdot \\vec{v}$'
    ],
    conceptMapEn: [
      'Statics (Rest) ➔ Resultant Force = 0 & Resultant Moment = 0',
      'Dynamics (Motion) ➔ Newton\'s 2nd Law F = ma ➔ Impulse I = Δp = m Δv',
      'Work-Energy ➔ Work Done = Change in Kinetic Energy (W = ΔT) ➔ Power = F . v'
    ],

    learningOutcomesAr: [
      'حل مسائل اتزان الأجسام الصلبة والقضبان المنتظمة على المستويات الخشنة والأوتاد.',
      'تطبيق شروط الاتزان العام وإيجاد ردود أفعال المفصلات ونقط الارتكاز.',
      'تطبيق قوانين نيوتن للحركة على مجموعات البكرات والمستويات المائلة وحساب العجلة والشد في الخيوط.',
      'استخدام مبدأ الشغل وطاقة الحركة ونظرية الدفع في حل مسائل التصادم وحركة المقذوفات والسيارات.'
    ],
    learningOutcomesEn: [
      'Solve static equilibrium problems for uniform rods and ladders on rough inclined surfaces.',
      'Apply general rigid body equilibrium conditions (forces and moments balance) to determine hinge reactions.',
      'Apply Newton\'s laws to pulley systems and inclined planes to calculate acceleration and string tensions.',
      'Utilize impulse-momentum and work-energy theorems to analyze collisions and automotive dynamics.'
    ],

    vocabulary: [
      { termAr: 'معامل الاحتكاك السكوني', termEn: 'Coefficient of Static Friction (μs)', definitionAr: 'النسبة الثابتة بين قوة الاحتكاك السكوني النهائي ورد الفعل العمودي، وتساوي ظل زاوية الاحتكاك $\\mu_s = \\tan \\lambda$.' },
      { termAr: 'الدفع (Impulse)', termEn: 'Impulse (I)', definitionAr: 'حاصل ضرب القوة المؤثرة في زمن تأثيرها، ويساوي التغير الحادث في كمية حركة الجسم $\\vec{I} = \\vec{F} \\cdot \\Delta t = \\Delta \\vec{p}$.' }
    ],

    warmupHookAr: 'عندما تدوس على فرامل سيارة مسرعة بكتلة 1.5 طن تسير بسرعة $100\\text{ km/h}$ لتتوقف تماماً قبل الاصطدام، كيف يحسب مهندسو أمان السيارات المسافة الآمنة للتوقف وقوة الفرامل اللازمة؟ بتطبيق مبدأ "الشغل وطاقة الحركة" للديناميكا $W = \\Delta T = \\frac{1}{2}m(v_2^2 - v_1^2)$ في أجزاء من الثانية!',
    warmupHookEn: 'When slamming the brakes on a 1.5-ton car cruising at 100 km/h, how do automotive engineers determine stopping distance and required braking force? By solving the Dynamics Work-Energy theorem W = ΔT = 1/2 m(v2² - v1²).',

    mainContentAr: `
### 1. الاستاتيكا: الاحتكاك والاتزان العام (Statics Equilibrium)
* **الاحتكاك على مستوى أفقي أو مائل:**
  * قوة الاحتكاك النهائي: $F_s = \\mu_s R$.
  * رد الفعل المحصل: $R\' = \\sqrt{R^2 + F_s^2} = R \\sqrt{1 + \\mu_s^2} = R \\sec \\lambda$.
* **شروط الاتزان العام للجسم الجاسئ:**
  1. المركبات الأفقية للقوى متزنة: $\\sum F_x = 0$.
  2. المركبات الرأسية للقوى متزنة: $\\sum F_y = 0$.
  3. المجموع الجبري لعزوم القوى حول أي نقطة في المستوى يساوي صفراً: $\\sum M_{\\text{Point}} = 0$.

---

### 2. الديناميكا: قوانين نيوتن للحركة (Newton's Laws)
* **قانون نيوتن الثاني:**
  $$\\vec{F} = m \\vec{a} \\quad (\\text{عند ثبوت الكتلة } m)$$
  $$\\vec{F} = \\frac{d}{dt}(m \\vec{v}) \\quad (\\text{إذا كانت الكتلة متغيرة مع الزمن})$$
* **حركة جسم على مستوى مائل أملس يميل بزاوية $\\theta$:**
  $$m a = m g \\sin \\theta \\implies a = g \\sin \\theta$$

---

### 3. الدفع والشغل والطاقة والقدرة (Impulse, Work & Power)
* **الدفع وكمية الحركة:**
  $$\\vec{I} = \\vec{F} \\cdot \\Delta t = m(v_2 - v_1)$$
* **مبدأ الشغل وطاقة الحركة:**
  $$W = \\Delta T = T_2 - T_1 = \\frac{1}{2} m v_2^2 - \\frac{1}{2} m v_1^2$$
* **القدرة (Power):**
  $$\\text{Power} = \\vec{F} \\cdot \\vec{v} \\quad (1\\text{ Horsepower} = 735\\text{ Watts} = 75\\text{ kg.m/s})$$
    `,
    mainContentEn: `
### 1. Statics Equilibrium
* Limiting friction: $F_s = \\mu_s R$ and $R' = R \\sqrt{1 + \\mu_s^2}$.
* Rigid body equilibrium: $\\sum F_x = 0$, $\\sum F_y = 0$, $\\sum M_O = 0$.

### 2. Dynamics Newton's Laws
* $F = m a$ (constant mass) or $F = d(mv)/dt$.

### 3. Impulse, Energy & Power
* Impulse: $I = F \\cdot \\Delta t = m(v_2 - v_1)$.
* Work-Energy Principle: $W = \\Delta T = \\frac{1}{2} m v_2^2 - \\frac{1}{2} m v_1^2$.
* Power: $P = F \\cdot v$ (1 HP = 75 kg.m/s = 735 Watts).
    `,

    diagramType: 'mechanics_free_body_diagram',
    diagramData: {
      type: 'rigid_body_forces',
      title: 'مخطط القوى والاتزان لقضيب يرتكز على أرض وحائط خشنين',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <line x1="60" y1="20" x2="60" y2="180" stroke="#64748b" stroke-width="4" />
        <line x1="60" y1="180" x2="360" y2="180" stroke="#64748b" stroke-width="4" />
        <line x1="60" y1="40" x2="280" y2="180" stroke="#fbbf24" stroke-width="6" stroke-linecap="round" />
        <line x1="60" y1="40" x2="110" y2="40" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
        <text x="115" y="45" fill="#38bdf8" font-size="11">R₂</text>
        <line x1="280" y1="180" x2="280" y2="130" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
        <text x="285" y="135" fill="#38bdf8" font-size="11">R₁</text>
        <line x1="170" y1="110" x2="170" y2="160" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow)" />
        <text x="175" y="150" fill="#f43f5e" font-size="11">W (الوزن)</text>
        <line x1="280" y1="180" x2="220" y2="180" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)" />
        <text x="210" y="175" fill="#34d399" font-size="11">μ₁ R₁</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تطبيق قانون نيوتن الثاني ومبدأ الدفع',
        titleEn: 'Example: Newton\'s 2nd Law and Impulse Calculation',
        problemAr: 'أثرت قوة أفقية ثابتة مقدارها $20\\text{ N}$ على جسم كتلته $5\\text{ kg}$ ساكن وموضوع على أرض أفقية ملساء لمدة $6\\text{ s}$. احسب: 1) مقدار الدفع، 2) سرعة الجسم في نهاية تلك الفترة.',
        problemEn: 'A constant horizontal force of 20 N acts on a stationary 5 kg mass on a smooth plane for 6 s. Calculate 1) Impulse, 2) Final velocity.',
        stepsAr: [
          '1) حساب الدفع: $I = F \\cdot \\Delta t = 20 \\times 6 = 120\\text{ N.s}$ (نيوتن.ثانية).',
          '2) حساب السرعة: الدفع يساوي التغير في كمية الحركة: $I = m(v - v_0)$.',
          'بما أن الجسم كان ساكناً ($v_0 = 0$): $120 = 5(v - 0) \\implies 5v = 120 \\implies v = \\frac{120}{5} = 24\\text{ m/s}$.'
        ],
        stepsEn: [
          '1) Impulse: I = F * Δt = 20 * 6 = 120 N.s.',
          '2) Final velocity: I = m(v - 0) ⟹ 120 = 5v ⟹ v = 24 m/s.'
        ],
        finalAnswerAr: 'الدفع $= 120\\text{ N.s}$ ، والسرعة النهائية $= 24\\text{ m/s}$.',
        finalAnswerEn: 'Impulse = 120 N.s; Final velocity = 24 m/s'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12m-5',
        problemAr: 'جسم وزنه 30 نيوتن موضوع على مستوى أفقي خشن، وكان معامل الاحتكاك السكوني بين الجسم والمستوى 1/3. احسب مقدار القوة الأفقية التي تجعل الجسم على وشك الحركة.',
        problemEn: 'A 30 N body rests on a rough horizontal plane with μs = 1/3. Find the horizontal force to make it on the verge of motion.',
        solutionStepsAr: [
          'في الاتجاه الرأسي: رد الفعل العمودي $R = W = 30\\text{ N}$.',
          'لكي يكون الجسم على وشك الحركة، يجب أن تتزن القوة الأفقية $P$ مع قوة الاحتكاك السكوني النهائي $F_s$.',
          '$P = F_s = \\mu_s R = \\frac{1}{3} \\times 30 = 10\\text{ N}$.'
        ],
        finalAnswerAr: 'القوة الأفقية اللازمة $P = 10\\text{ N}$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12m-5',
        questionAr: 'إذا كانت زاوية الاحتكاك بين جسم ومستوى خشن هي λ = 30°، فإن معامل الاحتكاك السكوني μs يساوي:',
        questionEn: 'If the angle of friction is λ = 30°, the coefficient of static friction μs is:',
        optionsAr: ['$\\frac{1}{\\sqrt{3}}$ (أو $\\frac{\\sqrt{3}}{3}$)', '$\\sqrt{3}$', '$\\frac{1}{2}$', '1'],
        optionsEn: ['1/sqrt(3)', 'sqrt(3)', '1/2', '1'],
        correctIndex: 0,
        explanationAr: 'معامل الاحتكاك السكوني $\\mu_s = \\tan \\lambda = \\tan 30^\\circ = \\frac{1}{\\sqrt{3}}$.',
        explanationEn: 'μs = tan(λ) = tan(30°) = 1/sqrt(3).'
      }
    ],

    assessment: {
      id: 'quiz-h12-m5',
      titleAr: 'اختبار إتقان الميكانيكا (الاستاتيكا والديناميكا)',
      titleEn: 'Mastery Quiz: Applied Mechanics',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-m5-1',
          textAr: 'وحدة قياس "القدرة" في النظام الدولي للوحدات هي:',
          textEn: 'The SI unit of Power is:',
          optionsAr: ['الوات (Watt = Joule/s)', 'الجول (Joule)', 'النيوتن (Newton)', 'الداين (Dyne)'],
          optionsEn: ['Watt (J/s)', 'Joule', 'Newton', 'Dyne'],
          correctIndex: 0,
          conceptTestedAr: 'وحدات قياس القدرة والشغل',
          conceptTestedEn: 'Units of Power in SI system',
          explanationAr: 'القدرة هي معدل بذل الشغل وتقاس بالوات (جول/ثانية).',
          explanationEn: 'Power is rate of work done measured in Watts (Joules per second).',
          difficulty: 'easy'
        },
        {
          id: 'qh12-m5-2',
          textAr: 'عزم الازدواج المكون من قوتين مقدار كل منهما $15\\text{ N}$ وطول ذراع الازدواج بينهما $40\\text{ cm}$ يساوي:',
          textEn: 'The couple moment formed by two 15 N forces separated by a 40 cm arm is:',
          optionsAr: ['$6\\text{ N.m}$', '$600\\text{ N.m}$', '$0.375\\text{ N.m}$', '$60\\text{ N.m}$'],
          optionsEn: ['6 N.m', '600 N.m', '0.375 N.m', '60 N.m'],
          correctIndex: 0,
          conceptTestedAr: 'حساب عزم الازدواج بالوحدات الدولية',
          conceptTestedEn: 'Couple moment calculation',
          explanationAr: 'نحول السنتيمتر لمتر: $d = \\frac{40}{100} = 0.4\\text{ m}$. عزم الازدواج $M = F \\times d = 15 \\times 0.4 = 6\\text{ N.m}$.',
          explanationEn: 'M = F * d = 15 N * 0.4 m = 6 N.m.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-m5-3',
          textAr: 'سيارة تتحرك بسرعة منتظمة ثابتة المقدار والاتجاه تحت تأثير قوة المحرك $F$ والمقاومة $R$، فإن العلاقة بينهما حسب قانون نيوتن الأول تكون:',
          textEn: 'A car moving at constant uniform velocity under engine force F and total resistance R satisfies:',
          optionsAr: ['$F = R$', '$F > R$', '$F < R$', '$F = m a$'],
          optionsEn: ['F = R', 'F > R', 'F < R', 'F = m a'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون نيوتن الأول في الحركة بسرعة منتظمة',
          conceptTestedEn: 'Newton\'s First Law at constant velocity',
          explanationAr: 'السرعة المنتظمة تعني أن العجلة $a = 0$ ومحصلة القوى تساوي صفراً $\\sum F = 0 \\implies F - R = 0 \\implies F = R$.',
          explanationEn: 'Uniform velocity implies acceleration is zero; therefore engine force equals resistance F = R.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
