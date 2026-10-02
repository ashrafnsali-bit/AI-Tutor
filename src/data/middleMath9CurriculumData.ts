import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL MATHEMATICS & PREP 3 (رياضيات الصف الثالث الإعدادي / لغات وعربي)
// Official Grade 9 / Prep 3 National Ministry & Language School Curriculum Alignment:
// Unit 1: Cartesian Product, Relations, Functions, Polynomial Functions & Variation
// Unit 2: Trigonometry: Basic Trigonometric Ratios (sin, cos, tan) & Special Angles
// Unit 3: Analytic Geometry: Distance, Midpoint, Slope, Parallel/Perpendicular Lines & Line Equation
// Unit 4: Advanced Algebra: Systems of Equations, Quadratic Formula & Algebraic Fractions
// Unit 5: Circle Geometry: Arcs, Central/Inscribed Angles, Tangents & Cyclic Quadrilaterals
// ============================================================================

export const MIDDLE_MATH_G9_LECTURES: Lecture[] = [
  // ── LECTURE 1: CARTESIAN PRODUCT, RELATIONS, FUNCTIONS & VARIATION ──
  {
    id: 'm9-math-1',
    order: 1,
    titleAr: 'المحاضرة 1: الحاصل الديكارتي، العلاقات والدوال، والدوال كثيرات الحدود والتغير',
    titleEn: 'Lecture 1: Cartesian Product, Relations, Functions, Polynomial Graphs & Variation',
    subtitleAr: 'دراسة الحاصل الديكارتي X × Y، شروط الدالة ومداها، تمثيل الدوال الخطية والثابتة والتربيعية بيانياً، والتغير الطردي والعكسي',
    subtitleEn: 'Master Cartesian product X × Y, relation to function criteria, domain/codomain/range, graphing linear, constant & quadratic functions, and direct & inverse variation.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: العلاقات والدوال والتناسب',
    unitTitleEn: 'Unit 1: Relations, Functions & Variation',
    lessonNumberAr: 'الدرس 1: الحاصل الديكارتي والدوال والتغير',
    lessonNumberEn: 'Lesson 1: Cartesian Product & Function Graphs',

    // Real-world hook
    warmupHookAr: 'عندما يقوم مبرمجو الذكاء الاصطناعي بربط ملايين الحسابات البنكية ببيانات المستخدمين أو نمذجة مسار طائرة دون طيار باستخدام دالة تربيعية f(x) = ax² + bx + c، فإنهم يعتمدون على مفهوم "الحاصل الديكارتي" و"الدوال الرياضية"! الدالة هي أرقى لغة تربط بين المدخلات والمخرجات بعلاقة رياضية أحادية دقيقة تقود كل تطبيقات التكنولوجيا الحديثة!',
    warmupHookEn: 'Databases connecting user records and machine learning models predicting trajectories rely on Cartesian Products and polynomial mappings. Mastering functions bridges abstract algebra and modern computational algorithms!',

    // Targeted Learning Outcomes
    learningOutcomesAr: [
      'أن يجد الطالب الحاصل الديكارتي لمجموعتين منتهيتين X × Y ويمثله بمخطط سهمي ومخطط بياني',
      'أن يميز متى تكون العلاقة دالة: إذا خرج من كل عنصر من عناصر X سهم واحد فقط (أو ظهر كمسقط أول مرة واحدة)',
      'أن يحدد مجال الدالة والمجال المقابل ومداها (Range)',
      'أن يمثل بيانياً الدالة الخطية والدالة الثابتة والدالة التربيعية ويحدد رأس المنحنى ومعادلة محور التماثل والقيمة العظمى/الصغرى',
      'أن يفرق بين التغير الطردي (y = mx) والتغير العكسي (xy = m) ويحسب ثابت التناسب ويحل المسائل التطبيقية'
    ],
    learningOutcomesEn: [
      'Evaluate Cartesian product of finite sets X × Y and plot arrow/Cartesian diagrams',
      'Verify function criteria: every element in X has exactly one unique image in Y',
      'Identify Domain, Codomain, and Range of functions',
      'Graph linear, constant, and quadratic polynomial functions, determining vertex, axis of symmetry and extrema',
      'Distinguish direct variation (y = mx) and inverse variation (xy = m), finding constant of variation'
    ],

    // Vocabulary
    vocabulary: [
      {
        termAr: 'الحاصل الديكارتي (Cartesian Product - X × Y)',
        termEn: 'Cartesian Product (X × Y)',
        definitionAr: 'مجموعة جميع الأزواج المرتبة (a, b) حيث المسقط الأول a ينتمي للمجموعة الأولى X والمسقط الثاني b ينتمي للمجموعة الثانية Y.',
        definitionEn: 'The set of all ordered pairs (a, b) such that a ∈ X and b ∈ Y.'
      },
      {
        termAr: 'الدالة (Function / Mapping)',
        termEn: 'Function (Mapping)',
        definitionAr: 'علاقة من المجموعة X إلى المجموعة Y يظهر فيها كل عنصر من عناصر X كمسقط أول مرة واحدة فقط في الأزواج المرتبة.',
        definitionEn: 'A relation where each input from domain X corresponds to exactly one output in codomain Y.'
      },
      {
        termAr: 'مدى الدالة (Range of Function)',
        termEn: 'Range of Function',
        definitionAr: 'مجموعة صور عناصر المجال X في المجال المقابل Y (مجموعة المساقط الثانية للأزواج المرتبة للدالة)، وهو مجموعة جزئية من المجال المقابل.',
        definitionEn: 'The set of all actual output values (images of domain elements), which is a subset of the codomain.'
      },
      {
        termAr: 'التغير الطردي والعكسي (Direct & Inverse Variation)',
        termEn: 'Direct & Inverse Variation',
        definitionAr: 'التغير الطردي: y تتناسب طردياً مع x (y = mx حيث m ≠ 0 ويمثلها خط مستقيم يمر بالأصل). التغير العكسي: y تتناسب عكسياً مع x (y = m/x ⟺ xy = m).',
        definitionEn: 'Direct: y ∝ x (y = mx, line passing through origin). Inverse: y ∝ 1/x (xy = m).'
      }
    ],

    keyConceptsAr: [
      'تساوي زوجين مرتبين: (a, b) = (x, y) ⟹ a = x و b = y',
      'عدد عناصر الحاصل الديكارتي: n(X × Y) = n(X) × n(Y)',
      'الدالة: كل عنصر من المجال يخرج منه سهم واحد فقط، ومداها هو صور العناصر',
      'الدالة التربيعية f(x) = ax² + bx + c: رأس المنحنى x = -b / 2a، وإذا كان a > 0 المنحنى مفتوح لأعلى وله قيمة صغرى',
      'التغير الطردي: y₁/y₂ = x₁/x₂ | التغير العكسي: y₁/y₂ = x₂/x₁'
    ],
    keyConceptsEn: [
      'Ordered pair equality: (a, b) = (x, y) ⟹ a = x and b = y',
      'Cartesian product cardinality: n(X × Y) = n(X) · n(Y)',
      'Function test: each domain element has exactly one image; Range ⊆ Codomain',
      'Quadratic vertex formula x = -b / (2a); parabola opens upward if a > 0',
      'Direct variation: y₁/y₂ = x₁/x₂; Inverse variation: y₁/y₂ = x₂/x₁'
    ],

    summaryAr: 'في هذه المحاضرة الشاملة، ندرس الحاصل الديكارتي للأزواج المرتبة، شروط كون العلاقة دالة ومداها، تمثيل الدوال الخطية والتربيعية بيانياً واستنتاج خواص المنحنى، وقوانين التغير الطردي والعكسي وتطبيقاتها.',
    summaryEn: 'Comprehensive Grade 9 lecture covering Cartesian products, relations to functions, polynomial function graphing (linear & quadratic parabolas), and direct & inverse variation models.',

    sections: [
      {
        titleAr: '1. الحاصل الديكارتي وتساوي الأزواج المرتبة',
        titleEn: '1. Cartesian Product & Ordered Pairs Equality',
        contentAr: '1) تساوي زوجين مرتبين: إذا كان (a, b) = (x, y) فإن المسقط الأول = الأول (a = x) والمسقط الثاني = الثاني (b = y).\nمثال: إذا كان (x - 2, 3) = (5, y + 1) فإن: x - 2 = 5 ⟹ x = 7 ، و y + 1 = 3 ⟹ y = 2.\n2) الحاصل الديكارتي X × Y: هو مجموعة كل الأزواج المرتبة التي مسقطها الأول من X ومسقطها الثاني من Y.\nإذا كانت X = {1, 2} و Y = {3, 4, 5}:\nX × Y = {(1, 3), (1, 4), (1, 5), (2, 3), (2, 4), (2, 5)}.\nعدد العناصر: n(X × Y) = n(X) × n(Y) = 2 × 3 = 6 عناصر.',
        contentEn: 'Ordered pair equality: (a, b) = (x, y) ⟹ a = x and b = y. Cartesian product X × Y pairs every element in X with every element in Y, with total elements n(X × Y) = n(X) · n(Y).'
      },
      {
        titleAr: '2. العلاقات والدوال والدوال كثيرات الحدود (التربيعية)',
        titleEn: '2. Relations, Functions & Quadratic Graphs',
        contentAr: '1) العلاقة والدالة: العلاقة R من X إلى Y تكون دالة (Function) إذا وفقط إذا ظهر كل عنصر من عناصر المجموعة X كمسقط أول مرة واحدة فقط في بيان العلاقة، أو خرج منه سهم واحد فقط في المخطط السهمي.\n- المجال: المجموعة X.\n- المجال المقابل: المجموعة Y.\n- المدى (Range): مجموعة صور عناصر X، وهو مجموعة جزئية من Y.\n2) الدالة التربيعية f(x) = ax² + bx + c:\n- رأس المنحنى (Vertex): الإحداثي السيني هو x = -b / 2a، والإحداثي الصادي هو f(-b/2a).\n- معادلة محور التماثل: المستقيم x = -b / 2a.\n- القيمة العظمى أو الصغرى: إذا كان a > 0 يكون للمنحنى قيمة صغرى = f(-b/2a)، وإذا كان a < 0 يكون للمنحنى قيمة عظمى.',
        contentEn: 'A relation is a function iff every domain element maps to exactly one image. Quadratic function f(x) = ax² + bx + c forms a parabola with vertex at x = -b/(2a) and vertical axis of symmetry.'
      },
      {
        titleAr: '3. التناسب والتغير الطردي والتغير العكسي',
        titleEn: '3. Direct & Inverse Variation Proportions',
        contentAr: '1) التغير الطردي (y ∝ x):\n- العلاقة الرياضية: y = mx (حيث m ثابت لا يساوي صفراً).\n- ثابت التناسب: m = y / x.\n- التناسب: y₁ / y₂ = x₁ / x₂.\n- التمثيل البياني: خط مستقيم يمر بنقطة الأصل (0, 0).\n\n2) التغير العكسي (y ∝ 1/x):\n- العلاقة الرياضية: y = m / x ⟺ xy = m (حيث m ثابت ≠ 0).\n- التناسب: y₁ / y₂ = x₂ / x₁.\n- إذا زادت x نقصت y بحيث يظل حاصل ضربهما ثابتاً.',
        contentEn: 'Direct variation: y = mx with y₁/y₂ = x₁/x₂ (linear line through origin). Inverse variation: xy = m with y₁/y₂ = x₂/x₁ (hyperbolic curve).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-math-1',
        questionAr: 'إذا كانت X = {1, 2, 3} و Y = {1, 4, 9, 10}، وكانت R علاقة من X إلى Y حيث (a R b) تعني "a² = b" لكل a ∈ X و b ∈ Y.\n1) اكتب بيان R ومثلها بمخطط سهمي.\n2) بيّن هل R دالة أم لا مع ذكر السبب، واذكر مداها إن كانت دالة.',
        questionEn: 'Let X = {1, 2, 3}, Y = {1, 4, 9, 10}, with relation a R b meaning "a² = b". 1) Write relation R and draw arrow diagram. 2) Determine if R is a function, state reason and Range.',
        solutionStepsAr: [
          '1) نحسب مربع كل عنصر في X: 1² = 1 ∈ Y ، 2² = 4 ∈ Y ، 3² = 9 ∈ Y.\nبيان R = {(1, 1), (2, 4), (3, 9)}.',
          '2) نعم، العلاقة R دالة لأن كل عنصر من عناصر المجموعة X ظهر كمسقط أول مرة واحدة فقط (خرج منه سهم واحد فقط).',
          '3) المدى (Range) = {1, 4, 9}.'
        ],
        solutionStepsEn: [
          '1) Calculate squares: 1²=1, 2²=4, 3²=9. R = {(1, 1), (2, 4), (3, 9)}.',
          '2) R is a function because every element in X appears as a first coordinate exactly once.',
          '3) Range = {1, 4, 9}.'
        ],
        answerAr: 'بيان R = {(1, 1), (2, 4), (3, 9)} • R دالة لأن كل عنصر ظهر كمسقط أول مرة واحدة • المدى = {1, 4, 9}',
        answerEn: 'R = {(1, 1), (2, 4), (3, 9)} • R is a function • Range = {1, 4, 9}'
      },
      {
        id: 'tb-m9-math-2',
        questionAr: 'إذا كانت y تتغير طردياً مع x، وكانت y = 14 عندما x = 42.\n1) أوجد العلاقة بين y و x.\n2) أوجد قيمة y عندما x = 60.',
        questionEn: 'If y varies directly with x, and y = 14 when x = 42: 1) Find the relation between y and x. 2) Find y when x = 60.',
        solutionStepsAr: [
          '1) بما أن التغير طردي: y = mx ⟹ m = y / x = 14 / 42 = 1 / 3.\nإذن العلاقة هي: y = (1/3) x.',
          '2) عندما x = 60: نعوض في العلاقة: y = (1/3) × 60 = 20.'
        ],
        solutionStepsEn: [
          '1) Direct variation: y = mx ⟹ m = 14/42 = 1/3. Relation: y = (1/3)x.',
          '2) When x = 60: y = (1/3)(60) = 20.'
        ],
        answerAr: 'العلاقة: y = 1/3 x • قيمة y = 20',
        answerEn: 'Relation: y = (1/3)x • y = 20'
      }
    ],

    assessment: {
      id: 'quiz-m9-math-1',
      lectureId: 'm9-math-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الحاصل الديكارتي والدوال والتغير',
      titleEn: 'Mastery Assessment 1: Cartesian Product, Functions & Variation',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-math-1',
          textAr: 'إذا كان n(X) = 3 و n(X × Y) = 12، فإن n(Y) تساوي:',
          textEn: 'If n(X) = 3 and n(X × Y) = 12, then n(Y) equals:',
          optionsAr: ['4', '36', '9', '15'],
          optionsEn: ['4', '36', '9', '15'],
          correctIndex: 0,
          conceptTestedAr: 'عدد عناصر الحاصل الديكارتي',
          conceptTestedEn: 'Cartesian Product Cardinality',
          explanationAr: 'n(X × Y) = n(X) × n(Y) ⟹ 12 = 3 × n(Y) ⟹ n(Y) = 12 / 3 = 4.',
          explanationEn: 'n(X × Y) = n(X) · n(Y) ⟹ 12 = 3 · n(Y) ⟹ n(Y) = 4.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-math-1',
          textAr: 'النقطة (-3, 4) تقع في الربع:',
          textEn: 'The point (-3, 4) lies in quadrant:',
          optionsAr: ['الثاني', 'الأول', 'الثالث', 'الرابع'],
          optionsEn: ['Second Quadrant', 'First Quadrant', 'Third Quadrant', 'Fourth Quadrant'],
          correctIndex: 0,
          conceptTestedAr: 'أرباع الشبكة التربيعية',
          conceptTestedEn: 'Cartesian Quadrants',
          explanationAr: 'الربع الثاني يتميز بأن السين سالبة (x < 0) والصاد موجبة (y > 0)، والنقطة (-3, 4) تحقق ذلك.',
          explanationEn: 'The second quadrant has x < 0 and y > 0, matching point (-3, 4).',
          difficulty: 'easy'
        },
        {
          id: 'q3-m9-math-1',
          textAr: 'معادلة محور التماثل لمنحنى الدالة التربيعية f(x) = x² - 4x + 3 هي:',
          textEn: 'The axis of symmetry for quadratic function f(x) = x² - 4x + 3 is:',
          optionsAr: ['x = 2', 'x = -2', 'x = 4', 'y = -1'],
          optionsEn: ['x = 2', 'x = -2', 'x = 4', 'y = -1'],
          correctIndex: 0,
          conceptTestedAr: 'معادلة محور تماثل الدالة التربيعية',
          conceptTestedEn: 'Axis of Symmetry of Quadratic Function',
          explanationAr: 'معادلة محور التماثل هي: x = -b / (2a) = -(-4) / (2 × 1) = 4 / 2 = 2.',
          explanationEn: 'Axis of symmetry: x = -b/(2a) = 4/2 = 2.',
          difficulty: 'medium'
        },
        {
          id: 'q4-m9-math-1',
          textAr: 'إذا كانت y تتغير عكسياً مع x، وكانت y = 3 عندما x = 2، فإن ثابت التناسب m يساوي:',
          textEn: 'If y varies inversely with x, and y = 3 when x = 2, the constant of variation m is:',
          optionsAr: ['6', '1.5', '2/3', '5'],
          optionsEn: ['6', '1.5', '2/3', '5'],
          correctIndex: 0,
          conceptTestedAr: 'ثابت التغير العكسي',
          conceptTestedEn: 'Inverse Variation Constant',
          explanationAr: 'في التغير العكسي: m = x × y = 2 × 3 = 6.',
          explanationEn: 'In inverse variation: m = x · y = 2 · 3 = 6.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: TRIGONOMETRY & BASIC TRIGONOMETRIC RATIOS ──
  {
    id: 'm9-math-2',
    order: 2,
    titleAr: 'المحاضرة 2: حساب المثلثات: النسب المثلثية الأساسية للزاوية الحادة والزوايا الخاصة',
    titleEn: 'Lecture 2: Trigonometry: Primary Ratios (sin, cos, tan) & Special Angles',
    subtitleAr: 'دراسة جيب الزاوية (sin)، جيب التمام (cos)، ظل الزاوية (tan)، النسب المثلثية للزوايا الخاصة (30°، 60°، 45°)، والعلاقة بين الزاويتين المتتامتين وتطبيقات حل المثلث القائم',
    subtitleEn: 'Master sine, cosine, tangent trigonometric ratios in right triangles, exact values for 30°, 60°, 45° special angles, complementary angle identities, and right triangle solving.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: حساب المثلثات (النسب المثلثية الأساسية)',
    unitTitleEn: 'Unit 2: Trigonometry: Primary Trigonometric Ratios',
    lessonNumberAr: 'الدرس 2: النسب المثلثية للزوايا الحادة والخاصة',
    lessonNumberEn: 'Lesson 2: Acute & Special Angle Trigonometry',

    warmupHookAr: 'كيف يقيس المهندسون ارتفاع برج خليفة الشاهق أو عرض نهر النيل دون تسلق البرج أو السباحة في النهر؟ الإجابة السحرية هي "حساب المثلثات" (Trigonometry)! بمعرفة زاوية رؤية قمة البرج والمسافة الأفقية، تحسب النسبة المثلثية (tan θ) الارتفاع الدقيق في ثوانٍ. واليوم تُبنى كل رسوميات ألعاب الـ 3D والملاحة الفضائية على حساب المثلثات!',
    warmupHookEn: 'Surveyors measuring the height of mountains or skyscrapers without climbing use trigonometry ratios (tan θ = opposite / adjacent). Modern 3D graphics rendering and satellite guidance systems rely entirely on trigonometry algorithms!',

    learningOutcomesAr: [
      'أن يعرّف الطالب النسب المثلثية الأساسية للزاوية الحادة في المثلث القائم: جا (sin)، جتا (cos)، ظا (tan)',
      'أن يطبق القوانين: sin θ = المقابل / الوتر ، cos θ = المجاور / الوتر ، tan θ = المقابل / المجاور = sin θ / cos θ',
      'أن يبرهن ويطبق خاصية الزاويتين المتتامتين: إذا كان A + B = 90° فإن sin A = cos B و tan A × tan B = 1',
      'أن يستنتج القيم الدقيقة للنسب المثلثية للزوايا الخاصة (30°، 60°، 45°) دون استخدام الآلة الحاسبة',
      'أن يستخدم الآلة الحاسبة لحساب النسب المثلثية وإيجاد قياس الزاوية بمعلومية إحدى نسبها (sin⁻¹, cos⁻¹, tan⁻¹)'
    ],
    learningOutcomesEn: [
      'Define primary trigonometric ratios in right triangles: sine (sin), cosine (cos), and tangent (tan)',
      'Apply standard formulas: sin θ = opp/hyp, cos θ = adj/hyp, tan θ = opp/adj = sin θ / cos θ',
      'Apply complementary identities: if A + B = 90°, then sin A = cos B and tan A · tan B = 1',
      'Evaluate exact trigonometric values for special angles 30°, 60°, and 45° without calculator',
      'Use inverse trigonometric calculator functions to find unknown acute angle measures'
    ],

    vocabulary: [
      {
        termAr: 'جيب الزاوية (Sine - جا / sin)',
        termEn: 'Sine (sin)',
        definitionAr: 'نسبة طول الضلع المقابل للزاوية الحادة إلى طول الوتر في المثلث القائم الزاوية: sin θ = المقابل / الوتر.',
        definitionEn: 'The ratio of the length of the opposite leg to the hypotenuse in a right triangle.'
      },
      {
        termAr: 'جيب تمام الزاوية (Cosine - جتا / cos)',
        termEn: 'Cosine (cos)',
        definitionAr: 'نسبة طول الضلع المجاور للزاوية الحادة إلى طول الوتر في المثلث القائم الزاوية: cos θ = المجاور / الوتر.',
        definitionEn: 'The ratio of the length of the adjacent leg to the hypotenuse in a right triangle.'
      },
      {
        termAr: 'ظل الزاوية (Tangent - ظا / tan)',
        termEn: 'Tangent (tan)',
        definitionAr: 'نسبة طول الضلع المقابل إلى طول الضلع المجاور للزاوية الحادة: tan θ = المقابل / المجاور = sin θ / cos θ.',
        definitionEn: 'The ratio of the opposite leg to the adjacent leg in a right triangle.'
      },
      {
        termAr: 'الزاويتان المتتامتان (Complementary Angles)',
        termEn: 'Complementary Angles',
        definitionAr: 'زاويتان مجموع قياسهما 90°، وجيب أي زاوية يساوي جيب تمام الزاوية المتممة لها: sin A = cos(90° - A).',
        definitionEn: 'Two angles summing to 90°; the sine of an angle equals the cosine of its complement.'
      }
    ],

    keyConceptsAr: [
      'في المثلث القائم: sin² θ + cos² θ = 1 دائماً',
      'إذا كان sin A = cos B فإن الزاويتين متتامتان: m(∠A) + m(∠B) = 90°',
      'قيم الزوايا الخاصة:\n- sin 30° = 1/2 | cos 30° = √3/2 | tan 30° = 1/√3 = √3/3\n- sin 60° = √3/2 | cos 60° = 1/2 | tan 60° = √3\n- sin 45° = 1/√2 | cos 45° = 1/√2 | tan 45° = 1',
      'إيجاد قياس الزاوية بالآلة: إذا كان sin x = 0.5 نضغط Shift + sin (0.5) ⟹ x = 30°'
    ],
    keyConceptsEn: [
      'Fundamental Pythagorean identity: sin² θ + cos² θ = 1',
      'Complementary rule: sin A = cos B ⟺ A + B = 90°',
      'Exact special angle values (30°, 60°, 45°)',
      'Inverse trigonometric functions: x = sin⁻¹(0.5) = 30°'
    ],

    summaryAr: 'تتناول هذه المحاضرة حساب المثلثات الأساسي: تعريف النسب المثلثية (جا، جتا، ظا)، قيم الزوايا الخاصة (30°، 60°، 45°)، العلاقات بين الزوايا المتتامة، وإيجاد قياسات الزوايا وأطوال الأضلاع المجهولة.',
    summaryEn: 'Comprehensive Grade 9 trigonometry lecture: primary trigonometric ratios in right triangles, exact special angle values, complementary angle identities, and inverse trigonometric solving.',

    sections: [
      {
        titleAr: '1. النسب المثلثية الأساسية للزاوية الحادة في المثلث القائم',
        titleEn: '1. Primary Trigonometric Ratios in Right Triangles',
        contentAr: 'في △ABC القائم الزاوية في B:\n- الوتر (Hypotenuse): الضلع AC المقابل للزاوية القائمة 90°.\n- بالنسبة للزاوية الحادة C:\n  * المقابل (Opposite) = الضلع AB.\n  * المجاور (Adjacent) = الضلع BC.\n\nالقوانين الأساسية الثلاثة:\n1) جيب الزاوية: sin C = المقابل / الوتر = AB / AC.\n2) جيب تمام الزاوية: cos C = المجاور / الوتر = BC / AC.\n3) ظل الزاوية: tan C = المقابل / المجاور = AB / BC = sin C / cos C.\n\n* خاصية الزاويتين الحادتين المتتامتين (A + C = 90°):\n- sin A = cos C\n- cos A = sin C\n- tan A = 1 / tan C ⟹ tan A × tan C = 1.',
        contentEn: 'In right △ABC right-angled at B: sin C = AB/AC, cos C = BC/AC, tan C = AB/BC. Complementary identity: sin A = cos C and cos A = sin C since A + C = 90°.'
      },
      {
        titleAr: '2. النسب المثلثية للزوايا الخاصة (30°، 60°، 45°)',
        titleEn: '2. Exact Values for Special Angles (30°, 60°, 45°)',
        contentAr: 'من خلال المثلث الثلاثيني الستيني (أطوال أضلاعه 1 ، √3 ، 2) والمثلث المتساوي الساقين القائم (1 ، 1 ، √2):\n1) زاوية 30°:\n- sin 30° = 1/2 = 0.5\n- cos 30° = √3 / 2\n- tan 30° = 1 / √3 = √3 / 3\n\n2) زاوية 60°:\n- sin 60° = √3 / 2\n- cos 60° = 1/2 = 0.5\n- tan 60° = √3\n\n3) زاوية 45°:\n- sin 45° = 1 / √2 = √2 / 2\n- cos 45° = 1 / √2 = √2 / 2\n- tan 45° = 1\n\n* إثبات المتطابقات: لإثبات صحة متطابقة، نحسب الطرف الأيمن (R.H.S) والطرف الأيسر (L.H.S) ونبين تساويهما.',
        contentEn: 'Special angles derived from 30°-60°-90° and 45°-45°-90° standard triangles: sin 30° = cos 60° = 1/2; sin 60° = cos 30° = √3/2; tan 45° = 1.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-math-3',
        questionAr: 'في △ABC قائم الزاوية في C، فيه AC = 6 سم، BC = 8 سم.\n1) احسب طول الوتر AB.\n2) أوجد قيمة كلاً من: sin A ، cos A ، tan A.\n3) أثبت أن: sin² A + cos² A = 1.',
        questionEn: 'In △ABC right-angled at C, AC = 6cm, BC = 8cm: 1) Find hypotenuse AB. 2) Evaluate sin A, cos A, tan A. 3) Prove sin² A + cos² A = 1.',
        solutionStepsAr: [
          '1) باستخدام نظرية فيثاغورس: AB² = AC² + BC² = 6² + 8² = 36 + 64 = 100 ⟹ AB = √100 = 10 سم.',
          '2) بالنسبة للزاوية A (المقابل BC = 8 سم، المجاور AC = 6 سم، الوتر AB = 10 سم):\n• sin A = المقابل / الوتر = 8 / 10 = 4 / 5 = 0.8\n• cos A = المجاور / الوتر = 6 / 10 = 3 / 5 = 0.6\n• tan A = المقابل / المجاور = 8 / 6 = 4 / 3',
          '3) إثبات المتطابقة: الطرف الأيمن = sin² A + cos² A = (4/5)² + (3/5)² = 16/25 + 9/25 = 25/25 = 1 (وهو المطلوب).'
        ],
        solutionStepsEn: [
          '1) Pythagoras: AB = √(6² + 8²) = 10cm.',
          '2) sin A = 8/10 = 4/5; cos A = 6/10 = 3/5; tan A = 8/6 = 4/3.',
          '3) sin² A + cos² A = (4/5)² + (3/5)² = 16/25 + 9/25 = 25/25 = 1.'
        ],
        answerAr: 'AB = 10 سم • sin A = 4/5 • cos A = 3/5 • tan A = 4/3 • تم إثبات أن sin² A + cos² A = 1',
        answerEn: 'AB = 10cm • sin A = 4/5 • cos A = 3/5 • tan A = 4/3 • Proved: sin² A + cos² A = 1'
      },
      {
        id: 'tb-m9-math-4',
        questionAr: 'أوجد قيمة الزاوية الحادة x إذا كان:\n2 sin x = tan² 60° - 2 tan 45°',
        questionEn: 'Find acute angle x if: 2 sin x = tan² 60° - 2 tan 45°.',
        solutionStepsAr: [
          'نعوض بقيم الزوايا الخاصة:\n• tan 60° = √3 ⟹ tan² 60° = (√3)² = 3\n• tan 45° = 1 ⟹ 2 tan 45° = 2 × 1 = 2',
          'إذن: 2 sin x = 3 - 2 = 1',
          'نقسم على 2: sin x = 1/2',
          'الزاوية الحادة التي جيبها 1/2 هي: x = 30°.'
        ],
        solutionStepsEn: [
          'Substitute special values: tan 60° = √3 ⟹ tan² 60° = 3; tan 45° = 1 ⟹ 2 tan 45° = 2.',
          '2 sin x = 3 - 2 = 1 ⟹ sin x = 1/2.',
          'Therefore, x = 30°.'
        ],
        answerAr: 'x = 30°',
        answerEn: 'x = 30°'
      }
    ],

    assessment: {
      id: 'quiz-m9-math-2',
      lectureId: 'm9-math-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: حساب المثلثات',
      titleEn: 'Mastery Assessment 2: Trigonometry & Ratios',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-math-2',
          textAr: 'إذا كان sin x = cos 60° حيث x زاوية حادة، فإن قياس زاوية x يساوي:',
          textEn: 'If sin x = cos 60° where x is an acute angle, then m(∠x) equals:',
          optionsAr: ['30°', '60°', '45°', '90°'],
          optionsEn: ['30°', '60°', '45°', '90°'],
          correctIndex: 0,
          conceptTestedAr: 'تساوي الجا والجتا للزاويتين المتتامتين',
          conceptTestedEn: 'Complementary Angle Equality',
          explanationAr: 'إذا كان sin A = cos B فإن الزاويتين متتامتان: x + 60° = 90° ⟹ x = 30°.',
          explanationEn: 'sin A = cos B implies complementary angles: x + 60° = 90° ⟹ x = 30°.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-math-2',
          textAr: 'قيمة المقدار: sin 30° cos 60° + cos 30° sin 60° تساوي:',
          textEn: 'The value of: sin 30° cos 60° + cos 30° sin 60° equals:',
          optionsAr: ['1', '0.5', '√3/2', '0'],
          optionsEn: ['1', '0.5', '√3/2', '0'],
          correctIndex: 0,
          conceptTestedAr: 'حساب النسب المثلثية للزوايا الخاصة',
          conceptTestedEn: 'Evaluating Special Trigonometric Expressions',
          explanationAr: '= (1/2 × 1/2) + (√3/2 × √3/2) = 1/4 + 3/4 = 4/4 = 1.',
          explanationEn: '= (1/2 · 1/2) + (√3/2 · √3/2) = 1/4 + 3/4 = 1.',
          difficulty: 'medium'
        },
        {
          id: 'q3-m9-math-2',
          textAr: 'في أي مثلث قائم الزاوية، حاصل ضرب tan A × tan C (حيث A و C زاويتان حادتان) يساوي:',
          textEn: 'In any right triangle, the product tan A · tan C (where A and C are acute angles) equals:',
          optionsAr: ['1', '0', '0.5', '2'],
          optionsEn: ['1', '0', '0.5', '2'],
          correctIndex: 0,
          conceptTestedAr: 'حاصل ضرب ظلي الزاويتين المتتامتين',
          conceptTestedEn: 'Product of Complementary Tangents',
          explanationAr: 'بما أن A و C زاويتان متتامتان (A + C = 90°)، فإن tan A = 1 / tan C ⟹ tan A × tan C = 1.',
          explanationEn: 'Complementary angles satisfy tan A · tan C = 1.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: ANALYTIC GEOMETRY: DISTANCE, MIDPOINT, SLOPE & LINE EQUATION ──
  {
    id: 'm9-math-3',
    order: 3,
    titleAr: 'المحاضرة 3: الهندسة التحليلية: البعد بين نقطتين، المنتصف، الميل ومعادلة الخط المستقيم',
    titleEn: 'Lecture 3: Analytic Geometry: Distance, Midpoint, Slope & Straight Line Equation',
    subtitleAr: 'قانون البعد d = √((x₂ - x₁)² + (y₂ - y₁)²)، إحداثيا منتصف القطعة المستقيمة، شرطا التوازي (m₁ = m₂) والتعامد (m₁ × m₂ = -1)، ومعادلة المستقيم y = mx + c',
    subtitleEn: 'Master distance formula, midpoint coordinates, slope relations (parallel m₁=m₂, perpendicular m₁m₂=-1), and standard straight line equation y = mx + c with geometric proofs.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: الهندسة التحليلية في المستوى الإحداثي',
    unitTitleEn: 'Unit 3: Cartesian Analytic Geometry',
    lessonNumberAr: 'الدرس 3: البعد والمنتصف والميل ومعادلة الخط المستقيم',
    lessonNumberEn: 'Lesson 3: Analytic Metrics & Straight Line Equation',

    warmupHookAr: 'عندما ترسل موقعك الجغرافي (GPS Coordinates) عبر هاتفك الذكي، يقوم خادم الخرائط فوراً برسم خط افتراضي وحساب أقصر مسافة ونقطة الالتقاء بينك وبين وجهتك. هذا السحر التقني يعتمد على "الهندسة التحليلية" التي ابتكرها العالم رينيه ديكارت للربط بين الجبر والهندسة؛ فتحولت الخطوط والأشكال إلى معادلات وإحداثيات رقمية دقيقة!',
    warmupHookEn: 'Navigation apps computing distances and routes convert Cartesian (x, y) coordinates into vector metrics. Analytic geometry transforms geometric concepts into algebraic equations driving robotics, GPS tracking, and spatial computing!',

    learningOutcomesAr: [
      'أن يحسب الطالب البعد بين نقطتين في المستوى الإحداثي: d = √((x₂ - x₁)² + (y₂ - y₁)²)',
      'أن يستخدم قانون البعد لإثبات نوع المثلث (متساوي الساقين، متساوي الأضلاع، مختلف)، أو إثبات أن الشكل مربع أو مستطيل أو معين أو متوازي أضلاع',
      'أن يعين إحداثيي منتصف قطعة مستقيمة: M = ((x₁ + x₂) / 2 , (y₁ + y₂) / 2)',
      'أن يطبق شرط توازي مستقيمين (m₁ = m₂) وشرط تعامد مستقيمين (m₁ × m₂ = -1 ⟺ m₂ = -1/m₁)',
      'أن يكون معادلة الخط المستقيم: y = mx + c بمعلومية ميله m والجزء المقطوع من محور الصادات c'
    ],
    learningOutcomesEn: [
      'Calculate distance between two Cartesian points: d = √((x₂ - x₁)² + (y₂ - y₁)²)',
      'Apply distance metrics to prove geometric shapes (triangles, quadrilaterals, circles)',
      'Find midpoint coordinates M = ((x₁ + x₂)/2, (y₁ + y₂)/2)',
      'Apply slope conditions: parallel lines (m₁ = m₂) and perpendicular lines (m₁ · m₂ = -1)',
      'Construct linear equations y = mx + c given slope and y-intercept or passing coordinates'
    ],

    vocabulary: [
      {
        termAr: 'البعد بين نقطتين (Distance Formula)',
        termEn: 'Distance Formula',
        definitionAr: 'طول القطعة المستقيمة الواصلة بين النقطتين (x₁, y₁) و (x₂, y₂): d = √((x₂ - x₁)² + (y₂ - y₁)²).',
        definitionEn: 'The Euclidean distance between two points: d = √((x₂ - x₁)² + (y₂ - y₁)²).'
      },
      {
        termAr: 'إحداثيا منتصف القطعة (Midpoint Coordinates)',
        termEn: 'Midpoint Coordinates',
        definitionAr: 'النقطة التي تنصف القطعة المستقيمة الواصلة بين A و B: M = ((x₁ + x₂) / 2 , (y₁ + y₂) / 2).',
        definitionEn: 'The point bisecting segment AB: M = ((x₁ + x₂)/2, (y₁ + y₂)/2).'
      },
      {
        termAr: 'معادلة الخط المستقيم (Slope-Intercept Equation)',
        termEn: 'Slope-Intercept Equation',
        definitionAr: 'الصورة العامة لمعادلة الخط المستقيم بمعلومية ميله m والجزء المقطوع من محور الصادات c هي: y = mx + c.',
        definitionEn: 'Linear straight line equation: y = mx + c where m is slope and c is y-intercept.'
      }
    ],

    keyConceptsAr: [
      'قانون البعد: d = √((x₂ - x₁)² + (y₂ - y₁)²)',
      'إحداثيا المنتصف: M = ((x₁ + x₂)/2 , (y₁ + y₂)/2)',
      'المستقيمان المتوازيان: m₁ = m₂ | المستقيمان المتعامدان: m₁ × m₂ = -1',
      'معادلة المستقيم: y = mx + c (حيث c = الجزء المقطوع من محور الصادات عند x = 0)'
    ],
    keyConceptsEn: [
      'Distance formula between two points',
      'Midpoint coordinate averaging',
      'Parallel (m₁ = m₂) and perpendicular (m₁m₂ = -1) slope relationships',
      'Line equation: y = mx + c'
    ],

    summaryAr: 'تغطي هذه المحاضرة ركائز الهندسة التحليلية للصف الثالث الإعدادي: قوانين البعد والمنتصف، شروط التوازي والتعامد للمستقيمات، وتكوين معادلة الخط المستقيم.',
    summaryEn: 'Covers core Grade 9 analytic geometry: distance metrics, segment bisection, parallel/perpendicular slope criteria, and line equation construction.',

    sections: [
      {
        titleAr: '1. البعد بين نقطتين وإحداثيا منتصف قطعة مستقيمة',
        titleEn: '1. Distance Formula & Midpoint Coordinates',
        contentAr: '1) قانون البعد: طول القطعة AB = √((x₂ - x₁)² + (y₂ - y₁)²).\nتطبيقات البعد:\n- إثبات استقامة النقاط: إذا كان طول أكبر قطعة = مجموع طولي القطعتين الأخريين (AB = AC + CB).\n- تحديد نوع المثلث بالنسبة لأضلاعه (متساوي الساقين أو متساوي الأضلاع أو مختلف).\n- إثبات أن النقط A, B, C تقع على دائرة مركزها M: نحسب MA و MB و MC، إذا كانت متساوية فإنها أنصاف أقطار (r).\n2) إحداثيا منتصف القطعة: النقطة M التي تقسم AB من المنتصف هي:\nM = ((x₁ + x₂) / 2 , (y₁ + y₂) / 2).\nتطبيق هام: في متوازي الأضلاع ABCD، القطspec القطران ينصف كل منهما الآخر، إذن: منتصف AC = منتصف BD.',
        contentEn: 'Distance d = √((Δx)² + (Δy)²). Midpoint M = (Average of x, Average of y). In parallelograms, diagonals bisect each other: Midpoint(AC) = Midpoint(BD).'
      },
      {
        titleAr: '2. ميل الخط المستقيم ومعادلة الخط المستقيم (y = mx + c)',
        titleEn: '2. Slope, Parallel/Perpendicular Lines & Equation',
        contentAr: '1) صور حساب الميل (m):\n- بنقطتين: m = (y₂ - y₁) / (x₂ - x₁).\n- بزاوية موجبة مع محور السينات: m = tan θ.\n- من المعادلة ax + by + c = 0: الميل = - معامل x / معامل y = -a / b.\n2) علاقات الميول:\n- توازي: L₁ ∥ L₂ ⟺ m₁ = m₂.\n- تعامد: L₁ ⊥ L₂ ⟺ m₁ × m₂ = -1 (أي m₂ = -1 / m₁ مقلوب معكوس الإشارة).\n3) معادلة الخط المستقيم: y = mx + c.\n- m: ميل الخط المستقيم.\n- c: الجزء المقطوع من محور الصادات (يمر بالنقطة (0, c)).\n- لإيجاد c: نعوض بأي نقطة (x, y) يمر بها المستقيم في المعادلة.',
        contentEn: 'Slope m = Δy/Δx = tan θ = -a/b. Parallel: m₁ = m₂. Perpendicular: m₁m₂ = -1. Straight line equation: y = mx + c where c is y-intercept.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-math-5',
        questionAr: 'أوجد معادلة الخط المستقيم المار بالنقطة (2, 5) وموازياً للمستقيم الذي معادلته: 2x - y + 7 = 0.',
        questionEn: 'Find the equation of the straight line passing through (2, 5) and parallel to the line: 2x - y + 7 = 0.',
        solutionStepsAr: [
          '1) نحسب ميل المستقيم المعطى: m₁ = - معامل x / معامل y = -2 / -1 = 2.',
          '2) بما أن المستقيمين متوازيان: إذن ميل المستقيم المطلوب m = m₁ = 2.',
          '3) صورة معادلة المستقيم: y = mx + c ⟹ y = 2x + c.',
          '4) المستقيم يمر بالنقطة (2, 5)، نعوض بـ x = 2 و y = 5 لإيجاد c:\n5 = 2(2) + c ⟹ 5 = 4 + c ⟹ c = 5 - 4 = 1.',
          '5) إذن معادلة الخط المستقيم هي: y = 2x + 1 (أو 2x - y + 1 = 0).'
        ],
        solutionStepsEn: [
          '1) Given line slope: m₁ = -2/(-1) = 2.',
          '2) Parallel slope: m = 2.',
          '3) Equation: y = 2x + c.',
          '4) Pass through (2, 5): 5 = 2(2) + c ⟹ c = 1.',
          '5) Required equation: y = 2x + 1.'
        ],
        answerAr: 'معادلة الخط المستقيم هي: y = 2x + 1',
        answerEn: 'Line equation: y = 2x + 1'
      },
      {
        id: 'tb-m9-math-6',
        questionAr: 'إذا كانت النقطة C(6, -4) هي منتصف القطعة المستقيمة AB، وكانت A(5, -3)، فأوجد إحداثيي النقطة B.',
        questionEn: 'If point C(6, -4) is the midpoint of segment AB, and A(5, -3), find the coordinates of point B.',
        solutionStepsAr: [
          'نفرض أن إحداثيي النقطة B هما (x, y).\nبما أن C هي المنتصف: C = ((x_A + x_B) / 2 , (y_A + y_B) / 2)\n(6, -4) = ((5 + x) / 2 , (-3 + y) / 2)',
          'نساوي المسقط الأول بالأول:\n(5 + x) / 2 = 6 ⟹ 5 + x = 12 ⟹ x = 12 - 5 = 7.',
          'نساوي المسقط الثاني بالثاني:\n(-3 + y) / 2 = -4 ⟹ -3 + y = -8 ⟹ y = -8 + 3 = -5.',
          'إذن إحداثيا النقطة B هما: (7, -5).'
        ],
        solutionStepsEn: [
          'Let B = (x, y). Midpoint (6, -4) = ((5 + x)/2, (-3 + y)/2).',
          '(5 + x)/2 = 6 ⟹ x = 7.',
          '(-3 + y)/2 = -4 ⟹ y = -5.',
          'Coordinates of B = (7, -5).'
        ],
        answerAr: 'إحداثيا النقطة B هما (7, -5)',
        answerEn: 'B = (7, -5)'
      }
    ],

    assessment: {
      id: 'quiz-m9-math-3',
      lectureId: 'm9-math-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: الهندسة التحليلية',
      titleEn: 'Mastery Assessment 3: Analytic Geometry',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-math-3',
          textAr: 'البعد بين النقطة (3, -4) ونقطة الأصل (0, 0) يساوي:',
          textEn: 'The distance between point (3, -4) and the origin (0, 0) is:',
          optionsAr: ['5 وحدات طول', '7 وحدات طول', '1 وحدة طول', '25 وحدة طول'],
          optionsEn: ['5 units', '7 units', '1 unit', '25 units'],
          correctIndex: 0,
          conceptTestedAr: 'حساب البعد عن نقطة الأصل',
          conceptTestedEn: 'Distance from Origin',
          explanationAr: 'd = √(x² + y²) = √(3² + (-4)²) = √(9 + 16) = √25 = 5 وحدات طول.',
          explanationEn: 'd = √(3² + (-4)²) = √25 = 5 units.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-math-3',
          textAr: 'إذا كان المستقيمان اللذان ميلهما -2/3 و k/2 متعامدين، فإن قيمة k تساوي:',
          textEn: 'If two lines with slopes -2/3 and k/2 are perpendicular, the value of k is:',
          optionsAr: ['3', '-3', '4/3', '-4/3'],
          optionsEn: ['3', '-3', '4/3', '-4/3'],
          correctIndex: 0,
          conceptTestedAr: 'شرط تعامد مستقيمين',
          conceptTestedEn: 'Perpendicular Slopes Condition',
          explanationAr: 'شرط التعامد: m₁ × m₂ = -1 ⟹ (-2/3) × (k/2) = -1 ⟹ -2k / 6 = -1 ⟹ -k / 3 = -1 ⟹ k = 3.',
          explanationEn: 'm₁ · m₂ = -1 ⟹ (-2/3)(k/2) = -1 ⟹ -k/3 = -1 ⟹ k = 3.',
          difficulty: 'medium'
        },
        {
          id: 'q3-m9-math-3',
          textAr: 'الجزء المقطوع من محور الصادات للمستقيم الذي معادلته 3x + 2y - 6 = 0 هو:',
          textEn: 'The y-intercept of the line 3x + 2y - 6 = 0 is:',
          optionsAr: ['3 وحدات طول', '2 وحدات طول', '-6 وحدات طول', '-3 وحدات طول'],
          optionsEn: ['3 units', '2 units', '-6 units', '-3 units'],
          correctIndex: 0,
          conceptTestedAr: 'إيجاد الجزء المقطوع من محور الصادات',
          conceptTestedEn: 'Finding Y-Intercept',
          explanationAr: 'نضع x = 0 في المعادلة: 2y - 6 = 0 ⟹ 2y = 6 ⟹ y = 3 وحدات طول.',
          explanationEn: 'Set x = 0: 2y - 6 = 0 ⟹ y = 3.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: ADVANCED ALGEBRA: QUADRATIC FORMULA & EQUATION SYSTEMS ──
  {
    id: 'm9-math-4',
    order: 4,
    titleAr: 'المحاضرة 4: الجبر المتقدم: القانون العام لحل المعادلات التربيعية ونظم المعادلات',
    titleEn: 'Lecture 4: Advanced Algebra: The General Quadratic Formula & Systems of Equations',
    subtitleAr: 'حل معادلات الدرجة الثانية في متغيّر واحد باستخدام القانون العام x = (-b ± √(b² - 4ac)) / 2a، حل نظام معادلتين خطيتين بيانياً وجبرياً، وحل معادلة خطية مع معادلة تربيعية',
    subtitleEn: 'Master solving quadratic equations via the General Formula, solving simultaneous linear equations (elimination & substitution), and linear-quadratic simultaneous systems.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: المعادلات والكسور الجبرية',
    unitTitleEn: 'Unit 4: Equations & Algebraic Fractions',
    lessonNumberAr: 'الدرس 4: القانون العام ونظم المعادلات في R',
    lessonNumberEn: 'Lesson 4: General Quadratic Formula & Linear Systems',

    warmupHookAr: 'عندما تطلق وكالة ناسا مسباراً فضائياً، تتشابك مسارات الحركة والسرعة في نظام معادلات معقد، وتحدد نقاط الالتقاء بالمعادلات التربيعية. عندما يصعب تحليل المعادلة بالطرق التقليدية، يتدخل "القانون العام" (The General Formula) كأداة رياضية قاطعة تحل أي معادلة تربيعية في الكون في خطوة واحدة!',
    warmupHookEn: 'Orbital mechanics and engineering stress analysis rely on the General Quadratic Formula when factoring fails. Solving simultaneous systems provides exact intersection coordinates for robotics and aeronautics!',

    learningOutcomesAr: [
      'أن يحل الطالب معادلات الدرجة الثانية في مجهول واحد في R باستخدام القانون العام: x = (-b ± √(b² - 4ac)) / (2a)',
      'أن يحسب المميز (Discriminant = b² - 4ac) لتحديد عدد الحلول في R (حلان حقيقيان، حل وحيد، لا توجد حلول حقيقية)',
      'أن يحل نظاماً من معادلتين من الدرجة الأولى في متغيرين بيانياً وجبرياً بطريقتي الحذف والتعويض',
      'أن يحل نظاماً من معادلتين في متغيرين إحداهما من الدرجة الأولى والأخرى من الدرجة الثانية في R × R'
    ],
    learningOutcomesEn: [
      'Solve quadratic equations ax² + bx + c = 0 in R using the General Quadratic Formula',
      'Evaluate Discriminant (Δ = b² - 4ac) to determine number of real roots',
      'Solve simultaneous linear equations in two variables graphically and algebraically (elimination and substitution)',
      'Solve systems of one linear and one quadratic equation in R × R'
    ],

    vocabulary: [
      {
        termAr: 'القانون العام (The General Quadratic Formula)',
        termEn: 'General Quadratic Formula',
        definitionAr: 'صيغة جبرية لحل أي معادلة تربيعية ax² + bx + c = 0 في R: x = (-b ± √(b² - 4ac)) / (2a).',
        definitionEn: 'Universal formula for quadratic roots: x = (-b ± √(b² - 4ac)) / (2a).'
      },
      {
        termAr: 'المميز (The Discriminant - Δ)',
        termEn: 'The Discriminant (Δ)',
        definitionAr: 'المقدار الواقع تحت الجذر التربيعي في القانون العام (b² - 4ac)، ويحدد نوع وعدد الجذور الحقيقية للمعادلة.',
        definitionEn: 'The value Δ = b² - 4ac under the radical determining root multiplicity and reality.'
      }
    ],

    keyConceptsAr: [
      'القانون العام: x = (-b ± √(b² - 4ac)) / (2a)',
      'المميز b² - 4ac:\n- إذا كان > 0: يوجد حلان حقيقيان مختلفان\n- إذا كان = 0: يوجد حل حقيقي وحيد (جذر مكرر)\n- إذا كان < 0: لا توجد حلول في R (مجموعة الحل = ∅)',
      'حل نظام معادلتين خطيتين بطريقة الحذف: مساواة المعاملات والجمع أو الطرح',
      'نظام خطي + تربيعي: التعويض من معادلة الدرجة الأولى في معادلة الدرجة الثانية'
    ],
    keyConceptsEn: [
      'Quadratic formula execution steps',
      'Discriminant analysis (positive = 2 roots, zero = 1 root, negative = no real roots)',
      'Linear system elimination method',
      'Linear-quadratic substitution technique'
    ],

    summaryAr: 'تغطي هذه المحاضرة حل معادلات الدرجة الثانية بالقانون العام ودراسة المميز، وحل نظم المعادلات الخطية والتربيعية بيانياً وجبرياً في مجموعة الأعداد الحقيقية.',
    summaryEn: 'Covers the General Quadratic Formula, discriminant criteria, simultaneous linear systems solving, and linear-quadratic simultaneous systems in R.',

    sections: [
      {
        titleAr: '1. حل معادلة الدرجة الثانية في متغيّر واحد بالقانون العام',
        titleEn: '1. Solving Quadratic Equations via the General Formula',
        contentAr: 'المعادلة على الصورة القياسية: ax² + bx + c = 0 (حيث a ≠ 0).\nصيغة القانون العام:\nx = (-b ± √(b² - 4ac)) / (2a).\nخطوات الحل:\n1) ترتيب المعادلة وجعل الطرف الأيمن يساوي صفراً.\n2) استخراج المعاملات: a (معامل x²)، b (معامل x)، c (الحد المطلق).\n3) حساب المميز: Δ = b² - 4ac.\n   - إذا كان Δ > 0: المعادلة لها حلان حقيقيان.\n   - إذا كان Δ = 0: المعادلة لها حل وحيد.\n   - إذا كان Δ < 0: ليس للمعادلة حلول حقيقية ومجموعة الحل S.S = ∅.\n4) التعويض في القانون العام وإيجاد قيمتي x (مع التقريب لأقرب رقم عشري إن طُلب).',
        contentEn: 'Standard form ax² + bx + c = 0. Quadratic formula yields roots x = (-b ± √(b² - 4ac))/(2a). Discriminant Δ determines number of real solutions.'
      },
      {
        titleAr: '2. حل نظم المعادلات الخطية والتربيعية في R × R',
        titleEn: '2. Solving Systems of Linear & Quadratic Equations',
        contentAr: '1) نظام معادلتين من الدرجة الأولى في متغيرين (ax + by = c):\n- طريقة الحذف (Elimination): نضرب إحدى المعادلتين في عدد يجعل معاملي أحد المتغيرين معكوسين جمعيين، ثم نجمع المعادلتين للتخلص من متغير وإيجاد الآخر.\n- طريقة التعويض (Substitution): نعزل x أو y في طرف ونعوض به في المعادلة الأخرى.\n2) نظام معادلتين إحداهما خطية والأخرى تربيعية:\n- خطوة 1: من المعادلة الخطية نكتب x بدلالة y (أو العكس): x = ky + m.\n- خطوة 2: نعوض في المعادلة التربيعية لنحصل على معادلة في متغير واحد من الدرجة الثانية.\n- خطوة 3: نحل المعادلة الناتجة بالتحليل أو بالقانون العام.\n- خطوة 4: نوجد قيمة المتغير الآخر ونكتب مجموعة الحل في صورة أزواج مرتبة S.S = {(x₁, y₁), (x₂, y₂)}.',
        contentEn: 'Linear systems solved by elimination/substitution. Linear-quadratic systems solved by isolating a variable in the linear equation and substituting into the quadratic equation.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-math-7',
        questionAr: 'باستخدام القانون العام، أوجد مجموعة الحل للمعادلة الآتية في R مقرباً الناتج لأقرب رقمين عشريين:\n2x² - 5x + 1 = 0',
        questionEn: 'Using the General Formula, solve in R to 2 decimal places: 2x² - 5x + 1 = 0.',
        solutionStepsAr: [
          'المعاملات: a = 2 ، b = -5 ، c = 1.',
          'المميز: b² - 4ac = (-5)² - 4(2)(1) = 25 - 8 = 17 (موجب ⟹ يوجد حلان حقيقيان).',
          'القانون العام: x = [-(-5) ± √17] / [2(2)] = (5 ± √17) / 4.',
          'الحل الأول: x₁ = (5 + 4.123) / 4 = 9.123 / 4 ≈ 2.28',
          'الحل الثاني: x₂ = (5 - 4.123) / 4 = 0.877 / 4 ≈ 0.22',
          'مجموعة الحل S.S = {2.28 , 0.22}.'
        ],
        solutionStepsEn: [
          'a = 2, b = -5, c = 1. Discriminant = 25 - 8 = 17.',
          'x = (5 ± √17) / 4.',
          'x₁ ≈ 2.28, x₂ ≈ 0.22.',
          'S.S = {2.28, 0.22}.'
        ],
        answerAr: 'مجموعة الحل S.S = {2.28 , 0.22}',
        answerEn: 'S.S = {2.28, 0.22}'
      },
      {
        id: 'tb-m9-math-8',
        questionAr: 'أوجد مجموعة الحل في R × R لنظام المعادلتين الآتي:\nx - y = 1  ،  x² + y² = 25',
        questionEn: 'Solve the system in R × R: x - y = 1, x² + y² = 25.',
        solutionStepsAr: [
          'من المعادلة الأولى: x = y + 1.',
          'نعوض في المعادلة الثانية: (y + 1)² + y² = 25\ny² + 2y + 1 + y² = 25 ⟹ 2y² + 2y + 1 - 25 = 0\n2y² + 2y - 24 = 0 (نقسم على 2)\ny² + y - 12 = 0',
          'بالتحليل: (y + 4)(y - 3) = 0\n- إما y = 3 ⟹ x = 3 + 1 = 4 ⟹ الزوج المرتب (4, 3)\n- أو y = -4 ⟹ x = -4 + 1 = -3 ⟹ الزوج المرتب (-3, -4)',
          'مجموعة الحل S.S = {(4, 3) , (-3, -4)}.'
        ],
        solutionStepsEn: [
          'From linear: x = y + 1.',
          'Substitute: (y + 1)² + y² = 25 ⟹ 2y² + 2y - 24 = 0 ⟹ y² + y - 12 = 0.',
          'Factor: (y + 4)(y - 3) = 0 ⟹ y = 3 (x = 4) or y = -4 (x = -3).',
          'S.S = {(4, 3), (-3, -4)}.'
        ],
        answerAr: 'مجموعة الحل S.S = {(4, 3) , (-3, -4)}',
        answerEn: 'S.S = {(4, 3), (-3, -4)}'
      }
    ],

    assessment: {
      id: 'quiz-m9-math-4',
      lectureId: 'm9-math-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: القانون العام ونظم المعادلات',
      titleEn: 'Mastery Assessment 4: Quadratic Formula & Equation Systems',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-math-4',
          textAr: 'إذا كان مميز المعادلة التربيعية b² - 4ac < 0 (سالباً)، فإن عدد حلول المعادلة في R يساوي:',
          textEn: 'If the discriminant b² - 4ac < 0, the number of solutions in R is:',
          optionsAr: ['صفر (لا توجد حلول حقيقية)', 'حل وحيد', 'حلان حقيقيان', 'عدد لا نهائي'],
          optionsEn: ['Zero (no real solutions)', 'One solution', 'Two real solutions', 'Infinite solutions'],
          correctIndex: 0,
          conceptTestedAr: 'دلالة المميز السالب',
          conceptTestedEn: 'Negative Discriminant Meaning',
          explanationAr: 'إذا كان المميز سالباً، لا يمكن أخذ جذر تربيعي لعدد سالب في R، فتكون مجموعة الحل ∅ (صفر من الحلول الحقيقية).',
          explanationEn: 'Negative discriminant has no real square root, yielding zero real roots (S.S = ∅).',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-math-4',
          textAr: 'حل نظام المعادلتين: x + y = 5 و x - y = 1 هو الزوج المرتب:',
          textEn: 'The solution to the system: x + y = 5 and x - y = 1 is:',
          optionsAr: ['(3, 2)', '(2, 3)', '(4, 1)', '(5, 0)'],
          optionsEn: ['(3, 2)', '(2, 3)', '(4, 1)', '(5, 0)'],
          correctIndex: 0,
          conceptTestedAr: 'حل نظام معادلتين خطيتين بالجمع',
          conceptTestedEn: 'Solving Linear System by Addition',
          explanationAr: 'بجمع المعادلتين: 2x = 6 ⟹ x = 3. نعوض: 3 + y = 5 ⟹ y = 2. الزوج هو (3, 2).',
          explanationEn: 'Add equations: 2x = 6 ⟹ x = 3. 3 + y = 5 ⟹ y = 2. Solution: (3, 2).',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: CIRCLE GEOMETRY: PROPERTIES, ANGLES, TANGENTS & CYCLIC QUADS ──
  {
    id: 'm9-math-5',
    order: 5,
    titleAr: 'المحاضرة 5: هندسة الدائرة: الأوتار، الزوايا المحيطية والمركزية، والمماسات والشكل الرباعي الدائري',
    titleEn: 'Lecture 5: Circle Geometry: Arcs, Central/Inscribed Angles, Tangents & Cyclic Quadrilaterals',
    subtitleAr: 'دراسة نتائج الأوتار والمركز، العلاقة بين الزاوية المحيطية والمركزية المشتركة في القوس (المحيطية = 1/2 المركزية)، خواص وحالات الشكل الرباعي الدائري، ونظريات المماسات والزاوية المماسية',
    subtitleEn: 'Master chords/radii theorems, central vs inscribed angles (inscribed = 1/2 central), inscribed right angle in semicircle, cyclic quadrilateral properties and proofs, and tangent theorems with tangent angles.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الخامسة: الهندسة المستوية (الدائرة ونظرياتها)',
    unitTitleEn: 'Unit 5: Plane Geometry: Circle Theorems',
    lessonNumberAr: 'الدرس 5: الزوايا والأقواس والمماسات والرباعي الدائري',
    lessonNumberEn: 'Lesson 5: Inscribed Angles, Tangents & Cyclic Quads',

    warmupHookAr: 'منذ اختراع العجلة التي أحدثت ثورة في تاريخ البشرية وحتى تصميم التروس الميكانيكية ومحركات الطائرات النفاثة، تُعد "الدائرة" أكمل وأروع شكل هندسي في الكون! نظريات الزوايا المحيطية والمماسات والأوتار هي التي تضمن دوران التروس بتزامن مثالي، وتستخدمها خوارزميات الذكاء الاصطناعي في تمييز ملامح العين وحدقة الكاميرا بدقة فائقة!',
    warmupHookEn: 'From high-speed mechanical gears to AI iris recognition and radar circular scans, circle geometry theorems govern perfect curvature, tangent intersections, and cyclic stability!',

    learningOutcomesAr: [
      'أن يطبق الطالب نتائج المستقيم المار بمركز الدائرة وبمنتصف وتر (يكون عمودياً على الوتر وينصف القوس المقابل)',
      'أن يبرهن ويطبق نظرية: قياس الزاوية المحيطية يساوي نصف قياس الزاوية المركزية المشتركة معها في نفس القوس (أو نصف قياس القوس)',
      'أن يستنتج أن الزاوية المحيطية المرسومة في نصف دائرة تكون قائمة (90°)',
      'أن يحدد خواص الشكل الرباعي الدائري: 1) كل زاويتين متقابلتين متكاملتان (مجموعهما 180°)، 2) قياس الزاوية الخارجة = قياس المقابلة للمجاورة لها، 3) زاويتان مرسومتان على قاعدة واحدة متساويتان في القياس',
      'أن يطبق نظرية المماسين: القطعتان المماستان المرسومتان من نقطة خارج الدائرة متساويتان في الطول (AB = AC)، وقياس الزاوية المماسية = قياس المحيطية المشتركة معها في القوس'
    ],
    learningOutcomesEn: [
      'Apply circle chord-radius perpendicular bisector theorems',
      'Prove and calculate: Inscribed angle measure equals half the central angle subtending the same arc',
      'Apply theorem: Inscribed angle subtended by a semicircle is a right angle (90°)',
      'Apply cyclic quadrilateral properties (supplementary opposite angles, exterior angle theorem, equal angles on common chord)',
      'Apply tangent theorems (equal tangent segments from external point AB = AC, and angle of tangency = inscribed angle)'
    ],

    vocabulary: [
      {
        termAr: 'الزاوية المركزية (Central Angle)',
        termEn: 'Central Angle',
        definitionAr: 'زاوية رأسها مركز الدائرة، ويحمل كل من ضلعيها نصف قطر في الدائرة، وقياسها يساوي قياس القوس المقابل لها.',
        definitionEn: 'An angle whose vertex is the circle center and whose legs are radii, with measure equal to its intercepted arc.'
      },
      {
        termAr: 'الزاوية المحيطية (Inscribed Angle)',
        termEn: 'Inscribed Angle',
        definitionAr: 'زاوية رأسها يقع على محيط الدائرة، ويحمل كل من ضلعيها وتراً في الدائرة، وقياسها يساوي نصف قياس الزاوية المركزية المشتركة معها في نفس القوس.',
        definitionEn: 'An angle with vertex on the circle circumference and legs as chords, measuring half its intercepted arc.'
      },
      {
        termAr: 'الشكل الرباعي الدائري (Cyclic Quadrilateral)',
        termEn: 'Cyclic Quadrilateral',
        definitionAr: 'شكل رباعي تمر برؤوسه الأربعة دائرة واحدة، ومن خواصه أن كل زاويتين متقابلتين فيه متكاملتان (مجموعهما 180°).',
        definitionEn: 'A 4-sided polygon with all four vertices on a single circle circumference; opposite angles sum to 180°.'
      },
      {
        termAr: 'الزاوية المماسية (Angle of Tangency)',
        termEn: 'Angle of Tangency',
        definitionAr: 'الزاوية المحصورة بين مماس الدائرة ووتر يمر بنقطة التماس، وقياسها يساوي قياس الزاوية المحيطية المشتركة معها في نفس القوس.',
        definitionEn: 'An angle formed between a tangent and a chord at point of contact, measuring half the intercepted arc.'
      }
    ],

    keyConceptsAr: [
      'المستقيم المار بالمركز ومنتصف وتر يكون عمودياً عليه (والعكس صحيح)',
      'قياس الزاوية المحيطية = 1/2 قياس الزاوية المركزية = 1/2 قياس القوس',
      'المحيطية في نصف دائرة = 90° (قائمة)',
      'خواص الرباعي الدائري: كل زاويتين متقابلتين مجموعهما 180° | الزاوية الخارجة = المقابلة للمجاورة لها',
      'المماسان من نقطة خارج دائرة: AB = AC | الزاوية المماسية = المحيطية المشتركة معها في القوس'
    ],
    keyConceptsEn: [
      'Chord-center perpendicular bisector relationship',
      'Inscribed angle = 1/2 Central angle = 1/2 Arc measure',
      'Inscribed angle in a semicircle is always 90°',
      'Cyclic quad: opposite angles sum to 180°; exterior angle equals interior opposite',
      'Equal tangent segments AB = AC from external point'
    ],

    summaryAr: 'تختتم هذه المحاضرة منهج الهندسة للصف الثالث الإعدادي بأشمل نظريات الدائرة: الزوايا المركزية والمحيطية، إثباتات وخواص الشكل الرباعي الدائري، ونظريات المماسات والزوايا المماسية بالبراهين الهندسية الدقيقة.',
    summaryEn: 'Concludes Grade 9 Euclidean geometry with comprehensive circle theorems: central/inscribed angles, cyclic quadrilateral proofs, and tangent segments & angles.',

    sections: [
      {
        titleAr: '1. الزاوية المركزية والمحيطية وقياس الأقواس',
        titleEn: '1. Central & Inscribed Angles & Arc Measures',
        contentAr: '1) قياس القوس: قياس الدائرة كلها = 360°، وقياس نصف الدائرة = 180°.\n- طول القوس = (قياس القوس / 360°) × محيط الدائرة (2πr).\n2) العلاقة بين الزاوية المحيطية والمركزية:\n- نظرية: قياس الزاوية المحيطية يساوي نصف قياس الزاوية المركزية المشتركة معها في نفس القوس: m(∠المحيطية) = 1/2 m(∠المركزية).\n- الزوايا المحيطية التي تحصر نفس القوس في الدائرة الواحدة تكون متساوية في القياس.\n- نتيجة هامة: الزاوية المحيطية المرسومة في نصف دائرة (تقابل قطراً) تكون قائمة (قياسها 90°).',
        contentEn: 'Full circle = 360°. Arc length = (Arc°/360°) · 2πr. Inscribed angle = 1/2 Central angle subtending same arc. Inscribed angle in a semicircle is a right angle (90°).'
      },
      {
        titleAr: '2. الشكل الرباعي الدائري ونظريات المماسات',
        titleEn: '2. Cyclic Quadrilaterals & Tangent Theorems',
        contentAr: '1) الشكل الرباعي الدائري (Cyclic Quad):\nيكون الشكل الرباعي ABCD دائرياً إذا تحقق أحد الشروط الآتية:\n- مجموع قياسي أي زاويتين متقابلتين = 180° (m(∠A) + m(∠C) = 180°).\n- قياس الزاوية الخارجة عند أي رأس يساوي قياس الزاوية الداخلة المقابلة للمجاورة لها.\n- وُجدت زاويتان مرسومتان على قاعدة واحدة وفي جهة واحدة منها متساويتان في القياس (مثل: m(∠DAC) = m(∠DBC)).\n\n2) نظريات المماسات:\n- المماس لدائرة يكون عمودياً على نصف القطر المرسوم من نقطة التماس.\n- نظرية: القطعتان المماستان المرسومتان لدائرة من نقطة خارجها متساويتان في الطول (إذا كان AB و AC مماسين للدائرة من A، فإن AB = AC، والمثلث ABC متساوي الساقين).\n- الزاوية المماسية: قياس الزاوية المماسية يساوي قياس الزاوية المحيطية المشتركة معها في نفس القوس.',
        contentEn: 'A quadrilateral is cyclic if: opposite angles sum to 180°, exterior angle equals interior opposite, or two angles on same base chord are congruent. Tangent is perpendicular to radius at contact point; two tangents from an external point are equal in length.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-math-9',
        questionAr: 'في الشكل المقابل: AB قطر في دائرة مركزها M، و C نقطة على الدائرة بحيث m(∠ABC) = 35°. احسب بالبرهان قياس كلاً من:\n1) ∠ACB\n2) ∠BAC\n3) القوس AC',
        questionEn: 'In a circle with center M, AB is a diameter, and C is on the circle with m(∠ABC) = 35°. Compute with formal proof: 1) ∠ACB, 2) ∠BAC, 3) Arc AC.',
        solutionStepsAr: [
          '1) بما أن AB قطر في الدائرة M، إذن ∠ACB زاوية محيطية مرسومة في نصف دائرة:\nإذن: m(∠ACB) = 90°.',
          '2) في △ABC القائم في C: مجموع زوايا المثلث 180°:\nm(∠BAC) = 180° - (90° + 35°) = 180° - 125° = 55°.',
          '3) قياس القوس AC المقابل للزاوية المحيطية ∠ABC:\nقياس القوس = 2 × قياس الزاوية المحيطية المقابلة له = 2 × m(∠ABC) = 2 × 35° = 70°.'
        ],
        solutionStepsEn: [
          '1) AB is diameter ⟹ Inscribed ∠ACB in semicircle = 90°.',
          '2) In right △ABC: m(∠BAC) = 180° - (90° + 35°) = 55°.',
          '3) Arc AC = 2 × Inscribed ∠ABC = 2 × 35° = 70°.'
        ],
        answerAr: '1) m(∠ACB) = 90° • 2) m(∠BAC) = 55° • 3) قياس القوس AC = 70°',
        answerEn: '1) m(∠ACB) = 90° • 2) m(∠BAC) = 55° • 3) Arc AC = 70°'
      },
      {
        id: 'tb-m9-math-10',
        questionAr: 'في الشكل المقابل: AB و AC قطعتان مماستان لدائرة من النقطة A، فإذا كان m(∠A) = 70°، احسب بالبرهان قياس كلاً من: 1) ∠ABC  2) الزاوية المركزية ∠BMC (حيث M مركز الدائرة).',
        questionEn: 'AB and AC are tangents to circle M from point A, with m(∠A) = 70°. Find with proof: 1) ∠ABC, 2) Central ∠BMC.',
        solutionStepsAr: [
          '1) بما أن AB و AC قطعتان مماستان مرسومتان من النقطة A:\nإذن: AB = AC (المثلث ABC متساوي الساقين وفيه m(∠A) = 70°).\nزاويتا القاعدة متساويتان: m(∠ABC) = m(∠ACB) = (180° - 70°) / 2 = 110° / 2 = 55°.',
          '2) في الشكل الرباعي ABMC:\nبما أن المماس عمودي على نصف القطر ⟹ m(∠ABM) = 90° و m(∠ACM) = 90°.\nإذن الشكل ABMC رباعي دائري، وكل زاويتين متقابلتين متكاملتان:\nm(∠BMC) = 180° - m(∠A) = 180° - 70° = 110°.'
        ],
        solutionStepsEn: [
          '1) Tangents AB = AC ⟹ Isosceles △ABC. m(∠ABC) = (180° - 70°)/2 = 55°.',
          '2) Radii perpendicular to tangents: ∠ABM = ∠ACM = 90°. Cyclic quad ABMC ⟹ Central ∠BMC = 180° - 70° = 110°.'
        ],
        answerAr: '1) m(∠ABC) = 55° • 2) m(∠BMC) = 110°',
        answerEn: '1) m(∠ABC) = 55° • 2) m(∠BMC) = 110°'
      }
    ],

    assessment: {
      id: 'quiz-m9-math-5',
      lectureId: 'm9-math-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: هندسة الدائرة',
      titleEn: 'Mastery Assessment 5: Circle Geometry',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-math-5',
          textAr: 'الزاوية المحيطية المرسومة في نصف دائرة تكون:',
          textEn: 'An inscribed angle in a semicircle is:',
          optionsAr: ['قائمة (90°)', 'حادة', 'منفرجة', 'مستقيمة'],
          optionsEn: ['Right angle (90°)', 'Acute angle', 'Obtuse angle', 'Straight angle'],
          correctIndex: 0,
          conceptTestedAr: 'الزاوية المحيطية في نصف دائرة',
          conceptTestedEn: 'Inscribed Angle in Semicircle',
          explanationAr: 'الزاوية المحيطية المرسومة في نصف دائرة تقابل قوساً قياسه 180° (نصف الدائرة)، ونصف الـ 180° هو 90° (زاوية قائمة).',
          explanationEn: 'The intercepted arc of a semicircle is 180°, so the inscribed angle = 180°/2 = 90° (right angle).',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-math-5',
          textAr: 'في الشكل الرباعي الدائري ABCD، إذا كان m(∠A) = 70°، فإن قياس الزاوية المقابلة لها m(∠C) يساوي:',
          textEn: 'In a cyclic quadrilateral ABCD, if m(∠A) = 70°, then the opposite angle m(∠C) equals:',
          optionsAr: ['110°', '70°', '20°', '90°'],
          optionsEn: ['110°', '70°', '20°', '90°'],
          correctIndex: 0,
          conceptTestedAr: 'تكامل الزاويتين المتقابلتين في الرباعي الدائري',
          conceptTestedEn: 'Opposite Angles in Cyclic Quadrilateral',
          explanationAr: 'في الشكل الرباعي الدائري، كل زاويتين متقابلتين متكاملتان (مجموعهما 180°): m(∠C) = 180° - 70° = 110°.',
          explanationEn: 'Opposite angles in a cyclic quad sum to 180°: m(∠C) = 180° - 70° = 110°.',
          difficulty: 'easy'
        },
        {
          id: 'q3-m9-math-5',
          textAr: 'إذا كانت الزاوية المركزية لقياس قوس في دائرة هي 100°، فإن قياس الزاوية المحيطية المشتركة معها في نفس القوس يساوي:',
          textEn: 'If a central angle measures 100°, the inscribed angle subtending the same arc measures:',
          optionsAr: ['50°', '100°', '200°', '25°'],
          optionsEn: ['50°', '100°', '200°', '25°'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين الزاوية المحيطية والمركزية',
          conceptTestedEn: 'Inscribed vs Central Angle Ratio',
          explanationAr: 'قياس الزاوية المحيطية = 1/2 قياس الزاوية المركزية المشتركة معها في القوس = 100° / 2 = 50°.',
          explanationEn: 'Inscribed angle = 1/2 Central angle = 100° / 2 = 50°.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
