import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL PHYSICS - GRADE 10 (الفيزياء - الصف الأول الثانوي / High School 1)
// Official Grade 10 National Curriculum Alignment (Masarat & National Egyptian/Arab Standards):
// Unit 1: Physical Measurements, Standard Units & Dimensional Analysis (القياس الفيزيائي والأبعاد)
// Unit 2: Scalars, Vectors, Vector Addition & Dot/Cross Products (المتجهات والكميات الفيزيائية)
// Unit 3: Linear Kinematics: Uniform Velocity, Acceleration & Kinematic Equations (الحركة المستقيمة)
// Unit 4: 2D Projectile Motion, Free Fall & Uniform Circular Motion (المقذوفات والحركة الدائرية)
// Unit 5: Newton's Laws, Linear Momentum & Universal Gravitation (قوانين نيوتن والجذب العام)
// ============================================================================

export const HIGH_PHYSICS_G10_LECTURES: Lecture[] = [
  // ── LECTURE 1: القياس الفيزيائي وصيغة الأبعاد ──
  {
    id: 'h-phys10-1',
    order: 1,
    titleAr: 'المحاضرة 1: القياس الفيزيائي والنظام الدولي للوحدات (SI) وصيغة الأبعاد',
    titleEn: 'Lecture 1: Physical Measurement, SI Base Units & Dimensional Analysis',
    subtitleAr: 'الكميات الفيزيائية الأساسية والمشتقة، أدوات القياس، وحساب صيغة الأبعاد واختبار صحة القوانين',
    subtitleEn: 'Master base vs derived quantities, standard SI units, dimensional formulas [M][L][T], and equation consistency.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الفيزياء العامة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - General Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Physics',
    unitTitleAr: 'الوحدة الأولى: الحركة والكميات الفيزيائية الأساسية',
    unitTitleEn: 'Unit 1: Physical Quantities & Measurements',
    lessonNumberAr: 'الدرس 1: عملية القياس الفيزيائي وصيغ الأبعاد',
    lessonNumberEn: 'Lesson 1: Physical Measurement & Dimensional Formulas',

    warmupHookAr: 'حين هبطت مركبة الفضاء التابعة لناسا (Mars Climate Orbiter) على المريخ عام 1999، تحطمت في الغلاف الجوي وخسر العلماء مئات الملايين من الدولارات! ما السبب الكارثي؟ مهندسون استخدموا نظام الوحدات الإنجليزية (الباوند والقدم) بينما برمج نظام الملاحة بالنظام الدولي المتري (النيوتن والمتر)! من هنا تبدأ أهمية علم القياس الفيزيائي الدقيق وصيغة الأبعاد التي لا غنى عنها لأي عالم أو مهندس في كوكبنا!',
    warmupHookEn: 'In 1999, NASA lost the $327 million Mars Climate Orbiter due to a metric conversion error between English and SI units. Discover why standardized measurement, base quantities, and dimensional analysis are crucial pillars of physics.',

    learningOutcomesAr: [
      'أن يوضح الطالب عناصر عملية القياس الثلاثة: (الكمية الفيزيائية، أداة القياس، ووحدة القياس المعيارية)',
      'أن يميز بين الكميات الفيزيائية الأساسية (الطول، الكتلة، الزمن) والكميات المشتقة (السرعة، العجلة، القوة، الشغل)',
      'أن يحدد الوحدات العيارية السبع في النظام الدولي للوحدات (SI): المتر، الكيلوجرام، الثانية، الكلفن، الأمبير، الشمعة، والمول',
      'أن يستنتج صيغة الأبعاد [M^a L^b T^c] للكميات الفيزيائية المختلفة',
      'أن يختبر مدى صحة القوانين والعلاقات الفيزيائية باستخدام مبدأ تجانس الأبعاد'
    ],
    learningOutcomesEn: [
      'Identify the three elements of measurement: physical quantity, measuring tool, and standard unit',
      'Differentiate base quantities (length, mass, time) from derived quantities (velocity, force, work)',
      'List the seven SI base units: meter (m), kilogram (kg), second (s), ampere (A), kelvin (K), candela (cd), and mole (mol)',
      'Derive dimensional formulas in terms of mass [M], length [L], and time [T]',
      'Verify equation consistency and physical validity using the principle of dimensional homogeneity'
    ],

    vocabulary: [
      {
        termAr: 'الكمية الأساسية (Base Quantity)',
        termEn: 'Base Physical Quantity',
        definitionAr: 'كمية فيزيائية معرفة بذاتها ولا يمكن اشتقاقها بدلالة كميات فيزيائية أخرى (مثل الكتلة، الطول، الزمن).',
        definitionEn: 'A fundamental quantity defined independently that cannot be derived from other physical quantities.'
      },
      {
        termAr: 'صيغة الأبعاد (Dimensional Formula)',
        termEn: 'Dimensional Formula',
        definitionAr: 'صيغة تعبر عن الكميات الفيزيائية المشتقة بدلالة أبعاد الكميات الأساسية (الكتلة M، الطول L، الزمن T) مرفوعة لأسس معينة.',
        definitionEn: 'An algebraic expression representing derived physical dimensions in terms of primary symbols [M], [L], and [T].'
      }
    ],

    sections: [
      {
        titleAr: '1. الكميات الأساسية وصيغة الأبعاد والتجانس',
        titleEn: '1. Base Quantities, Dimensional Formulas & Homogeneity',
        contentAr: `الكميات الفيزيائية إما:
1. **أساسية (Base)**: تعرف بذاتها كـ الطول (L) ووحدته المتر (m)، الكتلة (M) ووحدتها الكيلوجرام (kg)، والزمن (T) ووحدته الثانية (s).
2. **مشتقة (Derived)**: تشتق من الأساسية، مثل السرعة (v = d/t)، والعجلة (a = v/t)، والقوة (F = m · a).

**أمثلة على صيغ الأبعاد الشائعة**:
- **السرعة (v)**: [L · T⁻¹]
- **العجلة (a)**: [L · T⁻²]
- **القوة (F)**: [M · L · T⁻²]
- **الشغل والطاقة (W)**: [M · L² · T⁻²]

**مبدأ تجانس الأبعاد**:
لكي تكون أي معادلة فيزيائية صحيحة محتملة، يجب أن تكون أبعاد الطرف الأيمن مطابقة تماماً لأبعاد الطرف الأيسر، ولا يجوز جمع أو طرح كميتين إلا إذا كان لهما نفس صيغة الأبعاد ونفس وحدات القياس.`,
        contentEn: `Derived quantities are expressed via basic dimensions:
- Velocity: [L T⁻¹]
- Acceleration: [L T⁻²]
- Force: [M L T⁻²]
- Work / Energy: [M L² T⁻²]
Principle of Dimensional Homogeneity dictates that left and right sides of any valid physical equation must possess identical dimensional exponents.`
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
      id: 'quiz-hphys10-1',
      titleAr: 'اختبار القياس الفيزيائي وصيغ الأبعاد',
      titleEn: 'Measurement & Dimensional Analysis Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما هي صيغة الأبعاد الصحيحة لكمية القوة (Force = Mass × Acceleration)؟',
          textEn: 'What is the correct dimensional formula for Force (Mass × Acceleration)?',
          optionsAr: ['[M · L · T⁻¹]', '[M · L · T⁻²]', '[M · L² · T⁻²]', '[L · T⁻²]'],
          optionsEn: ['[M L T⁻¹]', '[M L T⁻²]', '[M L² T⁻²]', '[L T⁻²]'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'القوة = الكتلة [M] × العجلة [L · T⁻²] فتكون صيغة أبعادها [M · L · T⁻²].',
          explanationEn: 'Force equals Mass [M] times Acceleration [L T⁻²], yielding the dimensional formula [M L T⁻²].',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: الكميات القياسية والمتجهة وتحليل المتجهات ──
  {
    id: 'h-phys10-2',
    order: 2,
    titleAr: 'المحاضرة 2: الكميات القياسية والمتجهة وتحليل المتجهات وحاصل الضرب القياسي والاتجاهي',
    titleEn: 'Lecture 2: Scalar and Vector Quantities, Vector Resolution, Dot & Cross Products',
    subtitleAr: 'جمع المتجهات بيانياً وجبرياً، تحليل المتجه إلى مركبتين متعامدتين، والضرب القياسي والاتجاهي',
    subtitleEn: 'Master vector addition, rectangular component decomposition, scalar dot product, and vector cross product.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الفيزياء العامة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - General Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Physics',
    unitTitleAr: 'الوحدة الأولى: الحركة والكميات الفيزيائية الأساسية',
    unitTitleEn: 'Unit 1: Physical Quantities & Measurements',
    lessonNumberAr: 'الدرس 2: جبر المتجهات والضرب القياسي والاتجاهي',
    lessonNumberEn: 'Lesson 2: Vector Algebra, Resolution & Products',

    warmupHookAr: 'إذا هبت رياح بسرعة 50 كم/ساعة، هل يكفي هذا الرقم لقيادة طائرة بأمان؟ مستحيل! إذا هبت الرياح في ظهر الطائرة زادت سرعتها، وإذا هبت في مواجهتها عطلتها، وإذا هبت جانبياً حرفت مسارها عن المدرج! المقدار وحده لا يكفي؛ بل الاتجاه حاسم وضروري. هذا هو جوهر التمييز بين الكميات القياسية والكميات المتجهة في الكون الفيزيائي!',
    warmupHookEn: 'Wind speed of 50 km/h is meaningless to a pilot without heading. Tailwinds boost airspeed; headwinds reduce groundspeed; crosswinds cause lateral drift. Direction is essential in vector mechanics.',

    learningOutcomesAr: [
      'أن يفرق الطالب بين الكمية القياسية (المعرفة بالمقدار ووحدة القياس فقط) والمتجهة (المعرفة بالمقدار والاتجاه)',
      'أن يمثل المتجهات بيانياً بقطعة مستقيمة موجهة تحدد نقطة البداية والمقدار والزاوية',
      'أن يحلل أي متجه مائل إلى مركبتين متعامدتين: المركبة الأفقية (Ax = A cos θ) والرأسية (Ay = A sin θ)',
      'أن يحسب محصلة متجهين متعامدين بنظرية فيثاغورس: R = √(Ax² + Ay²)',
      'أن يحسب حاصل الضرب القياسي: A · B = A B cos θ، والضرب الاتجاهي: A × B = A B sin θ n̂'
    ],
    learningOutcomesEn: [
      'Differentiate scalar quantities (magnitude and unit only) from vector quantities (magnitude, unit, and direction)',
      'Represent vectors graphically as directed line segments with origin, magnitude, and azimuth angle',
      'Decompose vectors into rectangular components: horizontal Ax = A cos θ and vertical Ay = A sin θ',
      'Calculate resultant of orthogonal vectors using Pythagorean theorem R = √(Ax² + Ay²)',
      'Evaluate scalar dot product (A · B = A B cos θ) and vector cross product (A × B = A B sin θ n̂)'
    ],

    vocabulary: [
      {
        termAr: 'الكمية المتجهة (Vector Quantity)',
        termEn: 'Vector Quantity',
        definitionAr: 'كمية فيزيائية يلزم لتعريفها تماماً معرفة مقدارها ووحدة قياسها واتجاهها (مثل الإزاحة، السرعة المتجهة، القوة).',
        definitionEn: 'A physical quantity requiring magnitude, standard unit, and directional heading for complete definition.'
      },
      {
        termAr: 'الضرب الاتجاهي (Cross Product)',
        termEn: 'Vector Cross Product',
        definitionAr: 'حاصل ضرب متجهين ينتج عنه متجه ثالث عمودي على مستواهما ويحدد اتجاهه بقاعدة اليد اليمنى.',
        definitionEn: 'A vector multiplication operation resulting in a third vector perpendicular to both initial vectors.'
      }
    ],

    sections: [
      {
        titleAr: '1. تحليل المتجهات والضرب القياسي والاتجاهي',
        titleEn: '1. Vector Decomposition & Multiplications',
        contentAr: `**1. تحليل المتجه إلى مركبتين متعامدتين**:
إذا كان لدينا متجه A يصنع زاوية θ مع المحور الأفقي الأفقي (x):
- المركبة الأفقية: **Ax = A · cos(θ)**
- المركبة الرأسية: **Ay = A · sin(θ)**
- مقدار المتجه المحصل: **A = √(Ax² + Ay²)**
- اتجاه المتجه: **tan(θ) = Ay / Ax**

**2. نوعا ضرب المتجهات**:
- **الضرب القياسي (Dot Product)**:
  \`A · B = |A| |B| cos(θ)\`
  (الناتج كمية قياسية، ويكون أقصى ما يمكن عندما يكون المتجهان متوازيين θ = 0°، وينعدم عندما يتعامدان θ = 90°).
- **الضرب الاتجاهي (Cross Product)**:
  \`A × B = |A| |B| sin(θ) · n̂\`
  (الناتج كمية متجهة عمودية على المستوى المشترك، ويكون أقصى ما يمكن عند التعامد θ = 90°، وينعدم عند التوازي θ = 0°).`,
        contentEn: `Vector resolution breaks an arbitrary vector into orthogonal Cartesian coordinates:
- Ax = A cos(θ)
- Ay = A sin(θ)
Multiplication paradigms:
- Dot Product: A · B = |A| |B| cos(θ) (Scalar output; max at parallel 0°).
- Cross Product: A × B = |A| |B| sin(θ) n̂ (Vector output perpendicular via Right-Hand Rule; max at perpendicular 90°).`
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
      id: 'quiz-hphys10-2',
      titleAr: 'اختبار تحليل المتجهات والضرب',
      titleEn: 'Vectors & Products Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'متى يكون حاصل الضرب القياسي لمتجهين مساوياً للصفر تماماً؟',
          textEn: 'When is the scalar dot product of two non-zero vectors exactly equal to zero?',
          optionsAr: ['عندما يكون المتجهان متوازيين في نفس الاتجاه', 'عندما يكون المتجهان متعامدين (الزاوية 90°)', 'عندما تكون الزاوية بينهما 0°', 'عندما تكون الزاوية بينهما 180°'],
          optionsEn: ['When vectors are parallel in same direction', 'When vectors are orthogonal / perpendicular (90°)', 'When angle is 0°', 'When angle is 180°'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'ينعدم الضرب القياسي عند تعامد المتجهين لأن جيب تمام الزاوية القائمة cos(90°) = 0.',
          explanationEn: 'The dot product vanishes when vectors are perpendicular because cos(90°) = 0.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: الحركة في خط مستقيم ومعادلات الحركة بعجلة منتظمة ──
  {
    id: 'h-phys10-3',
    order: 3,
    titleAr: 'المحاضرة 3: الحركة الخطية والسرعة والعجلة ومعادلات الحركة الثلاث بعجلة منتظمة',
    titleEn: 'Lecture 3: Linear Kinematics: Velocity, Acceleration & The Three Kinematic Equations',
    subtitleAr: 'السرعة المتوسطة واللحظية، العجلة المنتظمة، واستنتاج معادلات الحركة الخطية الثلاث وتطبيقاتها',
    subtitleEn: 'Master uniform accelerated motion, kinematic derivations, and real-world kinematic calculations.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الفيزياء العامة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - General Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Physics',
    unitTitleAr: 'الوحدة الثانية: الحركة الخطية ومعادلات نيوتن للحركة',
    unitTitleEn: 'Unit 2: Linear Kinematics & Motion',
    lessonNumberAr: 'الدرس 3: معادلات الحركة في خط مستقيم بعجلة منتظمة',
    lessonNumberEn: 'Lesson 3: Kinematic Equations with Constant Acceleration',

    warmupHookAr: 'سيارة سباق فورمولا 1 تتسارع من السكون إلى 100 كم/ساعة في غضون 2.5 ثانية فقط! كيف يحسب المهندسون بدقة المسافة التي قطعتها السيارة خلال هذه الثواني؟ وكيف يتنبأ العلماء بالسرعة النهائية لقطار فائق السرعة قبل وصوله للمحطة؟ السر يكمن في معادلات الحركة الثلاث الخالدة التي صاغها إسحاق نيوتن وجاليليو!',
    warmupHookEn: 'Formula 1 cars reach 100 km/h in 2.5 seconds. Learn how kinematic equations predict stopping distances, final velocities, and elapsed times for any object moving under uniform acceleration.',

    learningOutcomesAr: [
      'أن يميز الطالب بين السرعة المتجهة المنتظمة وغير المنتظمة، وبين السرعة المتوسطة والسرعة اللحظية',
      'أن يعرف العجلة (التسارع) بأنها المعدل الزمني للتغير في السرعة المتجهة: a = Δv / Δt',
      'أن يحفظ ويطبق معادلة الحركة الأولى: vf = vi + a · t',
      'أن يحفظ ويطبق معادلة الحركة الثانية: d = vi · t + 0.5 · a · t²',
      'أن يحفظ ويطبق معادلة الحركة الثالثة الخالية من الزمن: vf² = vi² + 2 · a · d'
    ],
    learningOutcomesEn: [
      'Differentiate uniform from non-uniform velocity, and average velocity from instantaneous velocity',
      'Define acceleration as the time rate of change of velocity: a = Δv / Δt',
      'Derive and calculate using First Kinematic Equation: vf = vi + a t',
      'Derive and calculate using Second Kinematic Equation: d = vi t + 0.5 a t²',
      'Derive and calculate using Third Kinematic Equation: vf² = vi² + 2 a d'
    ],

    vocabulary: [
      {
        termAr: 'العجلة المنتظمة (Uniform Acceleration)',
        termEn: 'Uniform Acceleration',
        definitionAr: 'العجلة التي يتحرك بها الجسم عندما تتغير سرعته بمقادير متساوية في أزمنة متساوية.',
        definitionEn: 'The constant rate of velocity change occurring over equal intervals of time.'
      },
      {
        termAr: 'معادلات الحركة (Kinematic Equations)',
        termEn: 'Kinematic Equations',
        definitionAr: 'ثلاث علاقات رياضية تصف حركة الأجسام في خط مستقيم بعجلة منتظمة وتربط بين (vi, vf, a, t, d).',
        definitionEn: 'Three mathematical relations linking initial velocity, final velocity, acceleration, time, and displacement.'
      }
    ],

    sections: [
      {
        titleAr: '1. معادلات الحركة الثلاث بعجلة منتظمة',
        titleEn: '1. The Three Equations of Uniform Accelerated Motion',
        contentAr: `عند حركة جسم في خط مستقيم بعجلة منتظمة (a)، تتحدد حركته بالمعادلات الثلاث:

1. **المعادلة الأولى (تربط بين السرعة والزمن)**:
   \`vf = vi + a · t\`
   - تستخدم لإيجاد السرعة النهائية أو الزمن إذا لم تذكر المسافة d.

2. **المعادلة الثانية (تربط بين الإزاحة والزمن)**:
   \`d = vi · t + ½ · a · t²\`
   - تستخدم لإيجاد الإزاحة أو المسافة المقطوعة خلال زمن معين.

3. **المعادلة الثالثة (تربط بين السرعة والإزاحة - خالية من الزمن)**:
   \`vf² = vi² + 2 · a · d\`
   - تستخدم عندما لا يُعطى الزمن t في المسألة.

**ملاحظات حل المسائل**:
- إذا بدأ الجسم من السكون: **vi = 0**.
- إذا توقف الجسم أو ضغط السائق على المكابح: **vf = 0**، وتكون العجلة تقصيرية سالبة (-a).`,
        contentEn: `Kinematic equations for linear constant acceleration:
1. vf = vi + a · t (relates velocity and time).
2. d = vi · t + ½ a · t² (relates displacement and time).
3. vf² = vi² + 2 a · d (timeless equation).
Boundary values: Starting from rest entails vi = 0; deceleration to a stop entails vf = 0 with negative acceleration.`
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
      id: 'quiz-hphys10-3',
      titleAr: 'اختبار معادلات الحركة المنتظمة',
      titleEn: 'Kinematic Equations Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'بدأ جسم حركته من السكون ووصلت سرعته إلى 30 م/ث بعد أن قطع مسافة 90 متراً، فما مقدار عجلته؟',
          textEn: 'An object starts from rest and reaches 30 m/s after travelling 90 meters. What is its acceleration?',
          optionsAr: ['3 م/ث²', '5 م/ث²', '10 م/ث²', '15 م/ث²'],
          optionsEn: ['3 m/s²', '5 m/s²', '10 m/s²', '15 m/s²'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'باستخدام المعادلة الثالثة: vf² = vi² + 2ad -> (30)² = 0 + 2 * a * 90 -> 900 = 180 a -> a = 900 / 180 = 5 م/ث².',
          explanationEn: 'Using 3rd kinematic equation: vf² = vi² + 2ad -> 30² = 0 + 2*a*90 -> 900 = 180a -> a = 5 m/s².',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: السقوط الحر والمقذوفات في بعدين والحركة الدائرية ──
  {
    id: 'h-phys10-4',
    order: 4,
    titleAr: 'المحاضرة 4: السقوط الحر والمقذوفات بزاوية في بعدين والحركة الدائرية المنتظمة',
    titleEn: 'Lecture 4: Free Fall, 2D Projectile Motion & Uniform Circular Motion',
    subtitleAr: 'عجلة الجاذبية الأرضية g، مركبات حركة المقذوفات الأفقية والرأسية، وأقصى ارتفاع والمدى الأفقي',
    subtitleEn: 'Master gravitational acceleration, 2D projectile trajectory, apex height, flight time, and centripetal force.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الفيزياء العامة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - General Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Physics',
    unitTitleAr: 'الوحدة الثالثة: المقذوفات والحركة في بعدين',
    unitTitleEn: 'Unit 3: 2D Motion & Projectiles',
    lessonNumberAr: 'الدرس 4: حركة المقذوفات والحركة الدائرية',
    lessonNumberEn: 'Lesson 4: Projectile Motion & Circular Dynamics',

    warmupHookAr: 'حين يركل لاعب كرة القدم ركلة حرة مقوسة نحو المرمى، كيف تتبع الكرة مساراً منحنياً قطعياً مكافئاً (Parabola) وتهبط بدقة في الشباك؟ الكرة في الحقيقة تقوم بحركتين مستقلتين تماماً في نفس اللحظة: حركة أفقية بسرعة ثابتة بدون عجلة، وحركة رأسية تحت تأثير جاذبية الأرض بعجلة منتظمة! كيف نحلل حركة المقذوفات ونحسب أقصى مدى أفقي للصاروخ أو القذيفة؟',
    warmupHookEn: 'A free kick arcs through a parabolic path because it undergoes two concurrent, independent motions: constant horizontal velocity and vertical free fall accelerated by Earth\'s gravity.',

    learningOutcomesAr: [
      'أن يعرف السقوط الحر بأنه حركة الأجسام تحت تأثير الجاذبية الأرضية فقط بإهمال مقاومة الهواء',
      'أن يطبق معادلات الحركة على السقوط الحر بالتعويض عن العجلة بعجلة الجاذبية (g = 9.8 م/ث²)',
      'أن يحلل حركة المقذوفات بزاوية إلى: حركة أفقية منتظمة السرعة (ax = 0) وحركة رأسية بعجلة الجاذبية (ay = -g)',
      'أن يحسب زمن الصعود لأقصى ارتفاع: t = vi · sin θ / g وزمن التحليق الكلي: T = 2t',
      'أن يحسب أقصى ارتفاع رأسي H وأقصى مدى أفقي R، والعجلة المركزية للحركة الدائرية: ac = v² / r'
    ],
    learningOutcomesEn: [
      'Define free fall as unhindered motion subjected solely to Earth\'s gravitational field',
      'Apply kinematic equations to vertical motion substituting acceleration with g = 9.8 m/s²',
      'Decompose projectile motion into independent constant velocity x-axis and uniformly accelerated y-axis',
      'Calculate time to apex t = vi sin θ / g and total flight duration T = 2t',
      'Compute maximum vertical height H, horizontal range R, and centripetal acceleration ac = v² / r'
    ],

    vocabulary: [
      {
        termAr: 'السقوط الحر (Free Fall)',
        termEn: 'Free Fall',
        definitionAr: 'حركة جسم يسقط بحرية تحت تأثير وزنه وقوة الجاذبية الأرضية فقط بإهمال مقاومة الهواء.',
        definitionEn: 'Vertical motion occurring solely under the influence of gravity with air resistance neglected.'
      },
      {
        termAr: 'المدى الأفقي (Horizontal Range - R)',
        termEn: 'Horizontal Range',
        definitionAr: 'المسافة الأفقية الكلية التي يقطعها المقذوف بين نقطة إطلاقه ونقطة عودته لنفس المستوى الأفقي.',
        definitionEn: 'The total horizontal displacement traversed by a projectile between launch and landing levels.'
      }
    ],

    sections: [
      {
        titleAr: '1. قوانين المقذوفات بزاوية والحركة الدائرية',
        titleEn: '1. Projectile Formulas & Circular Mechanics',
        contentAr: `**1. المقذوفات بزاوية (θ)**:
- السرعة الابتدائية الأفقية: **vix = vi · cos(θ)** (ثابتة طوال الرحلة، العجلة ax = 0).
- السرعة الابتدائية الرأسية: **viy = vi · sin(θ)**.
- زمن الوصول لأقصى ارتفاع: **t = (vi · sin θ) / g**.
- زمن التحليق الكلي: **T = 2 · t**.
- أقصى ارتفاع رأسي: **H = (viy)² / (2 · g)**.
- المدى الأفقي: **R = vix · T**.
- يتحقق أقصى مدى أفقي ممكن عندما تكون زاوية الإطلاق **θ = 45°**.

**2. الحركة الدائرية المنتظمة (Uniform Circular Motion)**:
- يدور الجسم بسرعة ثابتة المقدار لكن متغيرة الاتجاه باستمرار، مما يولد عجلة مركزية (Centripetal Acceleration):
  \`ac = v² / r\`
- القوة الجاذبة المركزية (Centripetal Force):
  \`Fc = m · ac = (m · v²) / r\` وتتجه دائماً نحو مركز الدائرة.`,
        contentEn: `Projectile dynamics under constant gravity:
- Horizontal: vx = vi cos θ (constant velocity).
- Vertical: vy = vi sin θ - g t.
- Apex time: t = (vi sin θ) / g; Flight time: T = 2t.
- Apex Height: H = (vi sin θ)² / (2g).
- Maximum horizontal range R is achieved at an launch elevation angle of 45°.
Circular dynamics:
- Centripetal acceleration ac = v² / r.
- Centripetal force Fc = m v² / r pointing inwards to the circle's center.`
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
      id: 'quiz-hphys10-4',
      titleAr: 'اختبار المقذوفات والحركة الدائرية',
      titleEn: 'Projectiles & Circular Dynamics Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما هي زاوية الإطلاق التي تحقق أقصى مدى أفقي لمقذوف بنفس سرعة الإطلاق؟',
          textEn: 'What launch angle achieves maximum horizontal projectile range for a given initial velocity?',
          optionsAr: ['30°', '45°', '60°', '90°'],
          optionsEn: ['30°', '45°', '60°', '90°'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'زاوية 45° تحقق أقصى مدى أفقي لأن sin(2θ) = sin(90°) = 1 وهي القيمة العظمى لجيب الزاوية.',
          explanationEn: '45 degrees yields maximum range because sin(2θ) = sin(90°) = 1, maximizing the range function.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: قوانين نيوتن والجاذبية وكمية التحرك ──
  {
    id: 'h-phys10-5',
    order: 5,
    titleAr: 'المحاضرة 5: قوانين نيوتن للحركة وكمية التحرك الخطي وقانون الجذب العام للكون',
    titleEn: 'Lecture 5: Newton\'s Laws of Motion, Linear Momentum & Universal Gravitation',
    subtitleAr: 'القصور الذاتي، القوة والعجلة F = m·a، الفعل ورد الفعل، وحفظ كمية التحرك وقانون نيوتن للجاذبية',
    subtitleEn: 'Master inertia, F=ma dynamics, action-reaction pairs, momentum conservation, and gravitational attraction.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (مسارات والتعليم العام) - الفيزياء العامة',
    gradeLevelNameEn: 'Grade 10 / High School 1 - General Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Physics',
    unitTitleAr: 'الوحدة الرابعة: القوة والحركة وقوانين نيوتن',
    unitTitleEn: 'Unit 4: Force, Momentum & Gravitation',
    lessonNumberAr: 'الدرس 5: قوانين نيوتن الثلاثة والجاذبية الكونية',
    lessonNumberEn: 'Lesson 5: Newton\'s Three Laws & Universal Gravitation',

    warmupHookAr: 'حين تنطلق صواريخ الفضاء نحو القمر، تندفع أطنان من الغازات المشتعلة إلى الأسفل بقوة هائلة، فيندفع الصاروخ العملاق إلى الأعلى بنفس القوة تماماً نحو الفضاء! هذا القانون البسيط الذي وضعه إسحاق نيوتن (لكل فعل رد فعل) هو الأساس الذي بنيت عليه كل محركات الطائرات النفاثة واستكشاف الفضاء. كيف تتحكم قوانين نيوتن الثلاثة في كل حركة في الكون؟',
    warmupHookEn: 'Rocket engines thrust exhaust downward with immense force, propelling space vehicles upward into orbit via Newton\'s Third Law. Explore how Newton\'s laws govern terrestrial mechanics and celestial orbits.',

    learningOutcomesAr: [
      'أن يوضح الطالب نص قانون نيوتن الأول ومفهوم القصور الذاتي (Inertia) وعلاقته بكتلة الجسم',
      'أن يطبق قانون نيوتن الثاني رياضياً: F = m · a، ويوضح تعريف النيوتن كوحدة قياس للقوة',
      'أن يشرح قانون نيوتن الثالث (لكل فعل رد فعل مساوٍ له في المقدار ومضاد له في الاتجاه) وشروطه',
      'أن يحسب كمية التحرك الخطي (Linear Momentum): p = m · v ويطبق مبدأ حفظ كمية التحرك في التصادمات',
      'أن يطبق قانون الجذب العام لنيوتن: F = G · (m1 · m2) / r² ويوضح سبب ثبات مدارات الكواكب حول الشمس'
    ],
    learningOutcomesEn: [
      'Articulate Newton\'s First Law and the concept of inertia as a function of mass',
      'Apply Newton\'s Second Law mathematically (F = m a) and define the Newton unit',
      'Explain Newton\'s Third Law (action and reaction pairs) and why they never cancel each other on different bodies',
      'Compute linear momentum (p = m v) and apply conservation of momentum during collisions',
      'Apply Newton\'s Law of Universal Gravitation F = G (m1 m2) / r² explaining planetary orbital mechanics'
    ],

    vocabulary: [
      {
        termAr: 'القصور الذاتي (Inertia)',
        termEn: 'Inertia',
        definitionAr: 'خاصية مقاومة الجسم لتغيير حالته الحركية من السكون أو الحركة في خط مستقيم بسرعة منتظمة.',
        definitionEn: 'The intrinsic property of an object resisting any change in its state of rest or constant linear motion.'
      },
      {
        termAr: 'كمية التحرك (Linear Momentum)',
        termEn: 'Linear Momentum (p)',
        definitionAr: 'حاصل ضرب كتلة الجسم في سرعته المتجهة (p = m · v) وهي كمية متجهة تقاس بـ (كجم·م/ث).',
        definitionEn: 'The vector product of an object\'s mass and its velocity (p = m v) measured in kg·m/s.'
      }
    ],

    sections: [
      {
        titleAr: '1. قوانين نيوتن الثلاثة وقانون الجذب العام',
        titleEn: '1. Newton\'s Laws & Universal Gravitation Law',
        contentAr: `**1. قوانين نيوتن الثلاثة**:
- **القانون الأول (القصور الذاتي)**: يظل الجسم الساكن ساكناً، والجسم المتحرك في خط مستقيم بسرعة منتظمة متحركاً، ما لم تؤثر عليه قوة محصلة تغير من حالته (ΣF = 0).
- **القانون الثاني (القوة والتسارع)**: القوة المحصلة المؤثرة على جسم تساوي المعدل الزمني للتغير في كمية تحركه، وتكسبه عجلة تتناسب طردياً مع القوة وعكسياً مع كتلته:
  \`F = m · a\`
- **القانون الثالث (الفعل ورد الفعل)**: لكل قوة فعل قوة رد فعل، مساوية لها في المقدار ومضادة لها في الاتجاه (\`F1 = -F2\`). ولا تلغي إحداهما الأخرى لأنهما تؤثران على جسمين مختلفين.

**2. قانون الجذب العام لنيوتن (Universal Gravitation)**:
كل كتلتين في الكون تجذب كل منهما الأخرى بقوة تتناسب طردياً مع حاصل ضرب الكتلتين وعكسياً مع مربع المسافة بين مركزيهما:
\`F = G · (m1 · m2) / r²\`
حيث G هو ثابت الجذب العام: \`6.67 × 10⁻¹¹ N·m²/kg²\`.`,
        contentEn: `Newton's laws of dynamic mechanics:
1. First Law (Inertia): ΣF = 0 preserves state of rest or uniform linear motion.
2. Second Law: F = m · a = dp/dt.
3. Third Law: Action-reaction pair F_action = -F_reaction acting on distinct physical bodies.
Universal Gravitation:
F = G (m1 m2) / r², where G = 6.67 × 10⁻¹¹ N·m²/kg².`
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
      id: 'quiz-hphys10-5',
      titleAr: 'اختبار قوانين نيوتن والجذب العام',
      titleEn: 'Newton\'s Laws & Gravitation Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'إذا زادت المسافة بين مركزي جسمين إلى الضعف (2r)، فماذا يحدث لقوة الجذب المتبادلة بينهما وفق قانون نيوتن؟',
          textEn: 'If the distance between centers of two masses doubles (2r), what happens to their gravitational attraction force?',
          optionsAr: ['تتضاعف إلى الضعف', 'تقل إلى النصف', 'تقل إلى الربع', 'تظل ثابتة لا تتغير'],
          optionsEn: ['Doubles', 'Halves', 'Reduces to one-fourth', 'Remains unchanged'],
          correctIndex: 2,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'وفق قانون التربيع العكسي F ∝ 1/r²، إذا أصبحت المسافة 2r تصبح القوة 1/(2)² = 1/4 القوة الأصلية (تقل للربع).',
          explanationEn: 'By the inverse-square law F ∝ 1/r², doubling distance (2r) yields 1/(2)² = 1/4 of the initial gravitational force.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
