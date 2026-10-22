import type { Lecture } from '../types';

// ============================================================================
// REPUBLIC OF SUDAN - MINISTRY OF EDUCATION - BAKHT AL-RUDA
// جمهورية السودان - وزارة التعليم والتربية الوطنية
// المركز القومي للمناهج والبحث التربوي (بخت الرضا) - المرحلة الثانوية
// كتاب الفيزياء - الصف الأول الثانوي (المرحلة الثانوية) - الطبعة المعتمدة
// ============================================================================

export const SUDAN_HIGH_PHYSICS_G10_LECTURES: Lecture[] = [
  // ── الوحدة الأولى: المادة والحركة ──
  {
    id: 'sd-g10-phy-1',
    order: 1,
    subject: 'PHYSICS',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'جمهورية السودان - الفيزياء (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Physics (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: المادة والحركة',
    unitTitleEn: 'Unit 1: Matter and Motion',
    lessonNumberAr: 'الدرس الأول: الفيزياء والمنهج العلمي وأبعاد القياس والحركة',
    lessonNumberEn: 'Lesson 1: Physics, Scientific Method, Dimensions & Motion Quantities',
    titleAr: 'المحاضرة 1: المادة والحركة: الفيزياء والمنهج العلمي ووحدات القياس والكميات الحركية',
    titleEn: 'Lecture 1: Matter & Motion: Scientific Method, SI Units, Dimensions & Kinematics',
    subtitleAr: 'المنهج العلمي في الفيزياء، النظام الدولي للوحدات (SI)، معادلة الأبعاد، والتمييز بين المسافة والإزاحة، والسرعة والتسارع',
    subtitleEn: 'The scientific method, SI base units, dimensional formulas, scalar distance vs vector displacement, speed, velocity, and acceleration.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تدفق مياه النيل الأزرق هادرة من بحيرة تانا عابرة سد الروصيرص وسنار وصولاً إلى المقرن في الخرطوم بسرعة متغيرة، راقب علماء الهيدرولوجيا والفيزياء حركتها بالقياس الرياضي الدقيق. الفيزياء ليست مجرد معادلات في كتب، بل هي المنهج العلمي الصارم لملاحظة الكون وتفسير كل حركة من أصغر الإلكترونات إلى أكبر المجرات! كيف نحدد موقع جسم بدقة؟ وما الفرق الحاسم بين المسافة التي يقطعها عداء في ميدان الخرطوم وبين إزاحته؟',
    warmupHookEn: 'From the turbulent currents of the Blue Nile crossing Sennar dam to interstellar dynamics, physics applies the scientific method to measure and model natural phenomena. Discover how dimensional analysis and vector kinematics establish foundational physics.',
    learningOutcomesAr: [
      'أن يوضح الطالب خطوات المنهج العلمي في الفيزياء: الملاحظة، صياغة الفرضيات، التجريب، واستنباط القوانين والنظريات.',
      'أن يحدد الكميات الفيزيائية الأساسية (الطول، الكتلة، الزمن...) ووحداتها في النظام الدولي للوحدات (SI).',
      'أن يستنتج معادلة الأبعاد للكميات المشتقة (مثل السرعة [LT⁻¹]، التسارع [LT⁻²]، والقوة [MLT⁻²]) ويتحقق من صحة القوانين فيزيائياً.',
      'أن يميز بدقة بين الكمية القياسية (المسافة، السرعة القياسية) والكمية المتجهة (الإزاحة، السرعة المتجهة، والتسارع).',
      'أن يحسب السرعة المتوسطة والتسارع اللحظي والمنتظم مستخدماً العلاقات الرياضية والوحدات المعيارية (م/ث و م/ث²).'
    ],
    learningOutcomesEn: [
      'Explain scientific method steps: observation, hypothesis, controlled experimentation, and law formulation.',
      'Identify SI base physical quantities and their fundamental units.',
      'Derive dimensional formulas for derived quantities and test physical formula homogeneity.',
      'Differentiate scalar quantities from directional vector quantities.',
      'Calculate average speed, instantaneous velocity, and uniform acceleration.'
    ],
    keyConceptsAr: [
      'المنهج العلمي: الملاحظة، الفرضية، التجربة المضبوطة، القانون العلمي',
      'الوحدات الأساسية السبع في النظام الدولي (متر، كيلوجرام، ثانية، أمبير، كلفن، قنديلة، مول)',
      'معادلة الأبعاد وصيغتها العامة [M^a L^b T^c]',
      'المسافة كمية قياسية مساوية لطول المسار الفعلي، والإزاحة كمية متجهة تمثل أقصر خط مستقيم من البداية للنهاية',
      'السرعة المتجهة v = Δx / Δt ، والتسارع a = Δv / Δt'
    ],
    keyConceptsEn: [
      'Scientific method: observation, hypothesis, experiment, theoretical law',
      'Seven SI base units: meter, kilogram, second, ampere, kelvin, candela, mole',
      'Dimensional formula homogeneity principle [M^a L^b T^c]',
      'Scalar distance vs directional vector displacement',
      'Velocity vector v = Δx/Δt and acceleration a = Δv/Δt'
    ],
    vocabulary: [
      {
        termAr: 'المنهج العلمي (Scientific Method)',
        termEn: 'Scientific Method',
        definitionAr: 'أسلوب منظم يعتمد على الملاحظة الدقيقة ووضع الفروض واختبارها بالتجربة للوصول إلى القوانين التي تحكم الظواهر الطبيعية.',
        definitionEn: 'A systematic empirical method of acquiring knowledge through observation, hypothesis testing, and controlled experimentation.'
      },
      {
        termAr: 'معادلة الأبعاد (Dimensional Formula)',
        termEn: 'Dimensional Formula',
        definitionAr: 'صيغة رمزية تعبر عن الكمية الفيزيائية المشتقة بدلالة أبعاد الكميات الأساسية (الكتلة M، الطول L، والزمن T).',
        definitionEn: 'An algebraic expression showing how derived quantities depend on base dimensions [M], [L], and [T].'
      },
      {
        termAr: 'الإزاحة (Displacement)',
        termEn: 'Displacement',
        definitionAr: 'كمية متجهة تمثل أقصر مسار مستقيم موجه من نقطة بداية حركة الجسم إلى نقطة نهايته.',
        definitionEn: 'A vector quantity representing the shortest directed straight line from an object’s initial to final position.'
      },
      {
        termAr: 'التسارع / العجلة (Acceleration)',
        termEn: 'Acceleration',
        definitionAr: 'معدل التغير في السرعة المتجهة بالنسبة للزمن: ت = (ع₂ - ع₁) / ز ، وتقاس بوحدة (م/ث²).',
        definitionEn: 'The time rate of change of velocity: a = Δv / Δt, measured in m/s².'
      }
    ],
    sections: [
      {
        titleAr: '1. الفيزياء والمنهج العلمي ومعادلة الأبعاد',
        titleEn: '1. Physics, The Scientific Method & Dimensional Analysis',
        contentAr: `1) الفيزياء والمنهج العلمي:
الفيزياء هي العلم الذي يعنى بدراسة المادة والطاقة والعلاقات المتبادلة بينهما. ويتبع الفيزيائي المنهج العلمي المتدرج:
- **الملاحظة الدقيقة:** رصد الظواهر الطبيعية وتدوين البيانات الكمية.
- **صياغة الفرضية:** تقديم تفسير منطقي مؤقت قابل للاختبار.
- **التجريب المضبوط:** تصميم تجارب معملية مع ضبط المتغيرات (المتغير المستقل والتابع والضابط).
- **استخلاص القانون:** صياغة العلاقة الرياضية التي تصف الظاهرة، وإذا دعمتها تجارب شاملة تصبح نظرية علمية.

2) النظام الدولي للوحدات (Système International - SI):
اعتمد المؤتمر الدولي للأوزان والمقاييس 7 كميات أساسية:
- الطول: المتر (m).
- الكتلة: الكيلوجرام (kg).
- الزمن: الثانية (s).
- شدة التيار الكهربائي: الأمبير (A).
- درجة الحرارة المطلقة: الكلفن (K).
- كمية المادة: المول (mol).
- شدة الإضاءة: القنديلة / الشمعة (cd).

3) معادلة الأبعاد (Dimensional Analysis):
نعبر عن أبعاد الطول بـ [L]، والكتلة بـ [M]، والزمن بـ [T]:
- السرعة: مسافة / زمن ⟹ $[v] = [L][T]^{-1} = LT^{-1}$.
- التسارع: سرعة / زمن ⟹ $[a] = [LT^{-1}][T]^{-1} = LT^{-2}$.
- القوة: كتلة × تسارع ⟹ $[F] = [M][LT^{-2}] = MLT^{-2}$.
- الطاقة / الشغل: قوة × مسافة ⟹ $[W] = [MLT^{-2}][L] = ML^2 T^{-2}$.
* قاعدة تجانس الأبعاد: لا يمكن جمع أو طرح كميتين فيزيائيتين إلا إذا كان لهما نفس الأبعاد، وتكون المعادلة صحيحة فيزيائياً فقط إذا تساوت أبعاد طرفيها الأيمن والأيسر.`,
        contentEn: 'Physics uses empirical observation, hypotheses, and controlled experiments. SI standardizes seven base units. Dimensional formulas test equation consistency: [v] = LT⁻¹, [a] = LT⁻², [F] = MLT⁻².'
      },
      {
        titleAr: '2. الكميات الحركية: المسافة والإزاحة والسرعة والتسارع',
        titleEn: '2. Kinematic Quantities: Distance, Displacement, Speed & Acceleration',
        contentAr: `1) الكميات القياسية والمتجهة:
- **الكمية القياسية (العددية):** تتحدد تماماً بالمقدار ووحدة القياس فقط، وتجمع جبرياً (مثل: الكتلة، الزمن، المسافة، ودرجة الحرارة).
- **الكمية المتجهة:** تتحدد بالمقدار ووحدة القياس والاتجاه ونقطة التأثير (مثل: الإزاحة، السرعة المتجهة، القوة، والتسارع).

2) المسافة مقابل الإزاحة:
- إذا انطلق قطار عطبرة من المحطة (أ) وسار جنوباً 60 كم، ثم عاد شمالاً 20 كم:
  * المسافة الكلية المقطوعة: $d = 60 + 20 = 80\\text{ km}$ (طول المسار الكلي).
  * الإزاحة: $\\Delta x = 60 - 20 = 40\\text{ km}$ باتجاه الجنوب (أقصر خط من نقطة البدء).

3) السرعة العددية والسرعة المتجهة:
- **السرعة العددية (Speed):** المسافة الكلية المقطوعة مقسومة على الزمن الكلي: $v_{\\text{avg}} = \\frac{d}{t}$.
- **السرعة المتجهة (Velocity):** التغير في الإزاحة مقسوماً على التغير في الزمن: $\\vec{v} = \\frac{\\Delta \\vec{x}}{\\Delta t}$.

4) التسارع (العجلة):
هو المعدل الزمني لتغير السرعة المتجهة:
$$a = \\frac{v_2 - v_1}{t_2 - t_1} = \\frac{\\Delta v}{\\Delta t}$$
- تسارع موجب (تزايدي): عندما تزداد سرعة الجسم مع مرور الزمن ($v_2 > v_1$).
- تسارع سالب (تقصيري / تباطؤ): عندما تتناقص السرعة (مثل استخدام فرامل السيارة) ($v_2 < v_1$).
- تسارع صفري: عندما يتحرك الجسم بسرعة ثابتة منتظمة دون تغيير في المقدار أو الاتجاه.`,
        contentEn: 'Scalars require magnitude only; vectors require magnitude and direction. Distance is total path length, displacement is straight vector from origin. Acceleration a = Δv/Δt.'
      }
    ],
    summaryAr: 'تغطي الوحدة الأولى أسس الفيزياء وفق منهج بخت الرضا: المنهج العلمي وخطواته، النظام الدولي للوحدات (SI)، معادلات الأبعاد وتطبيقاتها في التحقق من صحة القوانين، والتحليل المتجهي الحركي للمسافة والإزاحة والسرعة والتسارع.',
    summaryEn: 'Covers scientific epistemology, SI base measurements, dimensional homogeneity, scalar distance vs vector displacement, velocity, and linear acceleration.',
    textbookExercises: [
      {
        id: 'sd-ex-phy10-1',
        questionAr: 'تحركت شاحنة نقل في طريق شريان الشمال من النقطة أ نحو الشرق مسافة 800 متر خلال 40 ثانية، ثم انعطفت شمالاً مسافة 600 متر خلال 60 ثانية. احسب:\n1) المسافة الكلية المقطوعة والسرعة العددية المتوسطة.\n2) مقدار الإزاحة الكلية والسرعة المتجهة المتوسطة.',
        questionEn: 'A truck moves east 800m in 40s, then north 600m in 60s. Calculate: 1) Total distance & average speed, 2) Magnitude of total displacement & average velocity.',
        solutionStepsAr: [
          'الخطوة 1: المسافة الكلية = 800 + 600 = 1400 متر. الزمن الكلي = 40 + 60 = 100 ثانية.',
          'الخطوة 2: السرعة العددية المتوسطة = المسافة الكلية / الزمن الكلي = 1400 / 100 = 14 م/ث.',
          'الخطوة 3: الإزاحة الكلية (مثلث قائم الزاوية فيثاغورس): ف = √(800² + 600²) = √(640000 + 360000) = √1000000 = 1000 متر في اتجاه الشمال الشرقي.',
          'الخطوة 4: السرعة المتجهة المتوسطة = الإزاحة / الزمن الكلي = 1000 / 100 = 10 م/ث باتجاه الشمال الشرقي.'
        ],
        solutionStepsEn: [
          'Step 1: Distance = 800 + 600 = 1400 m. Total time = 100 s.',
          'Step 2: Average speed = 1400 / 100 = 14 m/s.',
          'Step 3: Displacement = √(800² + 600²) = 1000 m northeast.',
          'Step 4: Average velocity = 1000 / 100 = 10 m/s northeast.'
        ],
        answerAr: 'المسافة = 1400م، السرعة العددية = 14 م/ث | الإزاحة = 1000م شمال شرق، السرعة المتجهة = 10 م/ث شمال شرق.',
        answerEn: 'Distance = 1400m, Speed = 14 m/s | Displacement = 1000m NE, Velocity = 10 m/s NE.'
      }
    ],
    assessment: {
      id: 'quiz-sd-phy10-1',
      titleAr: 'تقويم الوحدة 1: المادة والحركة ومعادلة الأبعاد',
      titleEn: 'Assessment 1: Matter, Motion & Dimensions',
      passingScore: 80,
      questions: [
        {
          id: 'q1-sd-phy1',
          textAr: 'ما هي صيغة الأبعاد الصحيحة لكمية (الشغل الميكانيكي أو الطاقة)؟',
          textEn: 'What is the correct dimensional formula for mechanical work or energy?',
          optionsAr: ['ML²T⁻²', 'MLT⁻²', 'ML⁻¹T⁻²', 'LT⁻²'],
          optionsEn: ['ML²T⁻²', 'MLT⁻²', 'ML⁻¹T⁻²', 'LT⁻²'],
          correctIndex: 0,
          conceptTestedAr: 'استنتاج معادلة الأبعاد للشغل والطاقة',
          conceptTestedEn: 'Dimensional formula of work/energy',
          explanationAr: 'الشغل = القوة × الإزاحة = [MLT⁻²] × [L] = ML²T⁻².',
          explanationEn: 'Work = Force × Displacement = [MLT⁻²] × [L] = ML²T⁻².',
          difficulty: 'medium'
        },
        {
          id: 'q2-sd-phy1',
          textAr: 'إذا عاد عداء إلى نقطة بدايته تماماً بعد أن ركض دورة كاملة حول مضمار محيطه 400 متر خلال 50 ثانية، فإن إزاحته الكلية تساوي:',
          textEn: 'If a runner completes a 400m circular lap in 50s returning to start, total displacement is:',
          optionsAr: ['صفر', '400 متر', '8 م/ث', '200 متر'],
          optionsEn: ['Zero', '400 meters', '8 m/s', '200 meters'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الإزاحة كمتجه من البداية للنهاية',
          conceptTestedEn: 'Displacement concept for closed loops',
          explanationAr: 'لأن نقطة النهاية انطبقت تماماً على نقطة البداية، فإن المتجه الواصل بينهما طوله صفر، فتكون الإزاحة = صفر (بينما المسافة = 400م).',
          explanationEn: 'Because start and end coordinates coincide, net vector length is zero.',
          difficulty: 'easy'
        },
        {
          id: 'q3-sd-phy1',
          textAr: 'أي من الكميات الفيزيائية الآتية تعد كمية متجهة وليست قياسية؟',
          textEn: 'Which of the following physical quantities is a vector quantity?',
          optionsAr: ['السرعة المتجهة (Velocity)', 'الكتلة (Mass)', 'الزمن (Time)', 'المسافة (Distance)'],
          optionsEn: ['Velocity', 'Mass', 'Time', 'Distance'],
          correctIndex: 0,
          conceptTestedAr: 'تصنيف الكميات القياسية والمتجهة',
          conceptTestedEn: 'Scalar vs Vector classification',
          explanationAr: 'السرعة المتجهة تتطلب مقداراً واتجاهاً، بينما الكتلة والزمن والمسافة كميات قياسية تكتفي بالمقدار والوحدة فقط.',
          explanationEn: 'Velocity is defined by both magnitude and direction, unlike mass, time, or distance.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── الوحدة الثانية: معادلات الحركة الخطية ──
  {
    id: 'sd-g10-phy-2',
    order: 2,
    subject: 'PHYSICS',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'جمهورية السودان - الفيزياء (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Physics (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثانية: معادلات الحركة الخطية',
    unitTitleEn: 'Unit 2: Equations of Linear Motion',
    lessonNumberAr: 'الدرس الثاني: معادلات الحركة بعجلة منتظمة والسقوط الحر',
    lessonNumberEn: 'Lesson 2: Uniformly Accelerated Motion & Free Fall Equations',
    titleAr: 'المحاضرة 2: معادلات الحركة الخطية بعجلة منتظمة وتطبيقات السقوط الحر',
    titleEn: 'Lecture 2: Equations of Linear Motion with Constant Acceleration & Free Fall',
    subtitleAr: 'استنتاج معادلات الحركة الثلاث، السقوط الحر للأجسام وتسارع الجاذبية الأرضية (g)، وحل المسائل الميكانيكية بالمنهج السوداني',
    subtitleEn: 'Derivation of the three kinematic equations, vertical free fall under gravity (g), and quantitative kinematics problem solving.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'إذا أسقطت حجراً من أعلى كوبري توتي فوق مجرى النيل الأزرق، ستلاحظ أن سرعة الحجر تزداد كل ثانية أثناء هبوطه نحو الماء! لماذا لا يسقط الحجر بسرعة ثابتة؟ الإجابة تكمن في تسارع الجاذبية الأرضية الثابت ($g \\approx 9.8\\text{ m/s}^2$). استطاع علماء الفيزياء صياغة ثلاث معادلات ذهبية تتيح لك التنبؤ بدقة فائقة بموقع وسرعة أي جسم متحرك بعجلة منتظمة في أي لحظة زمنية!',
    warmupHookEn: 'Drop a stone from Tuti bridge into the Nile and its downward velocity increases by ~9.8 m/s every second. Master the three fundamental kinematic equations governing terrestrial mechanics and vertical trajectories.',
    learningOutcomesAr: [
      'أن يشتق الطالب معادلات الحركة الخطية بعجلة منتظمة انطلاقاً من تعريفي السرعة والتسارع.',
      'أن يطبق المعادلة الأولى: $v = v_0 + at$ لإيجاد السرعة النهائية أو الزمن.',
      'أن يطبق المعادلة الثانية: $d = v_0 t + \\frac{1}{2} at^2$ لإيجاد الإزاحة المقطوعة.',
      'أن يطبق المعادلة الثالثة: $v^2 = v_0^2 + 2ad$ للربط بين السرعات والإزاحة دون الحاجة لعنصر الزمن.',
      'أن يحل مسائل السقوط الحر والمقذوفات الرأسية مع مراعاة إشارات الاتجاه لعجلة الجاذبية ($g = -9.8\\text{ m/s}^2$).'
    ],
    learningOutcomesEn: [
      'Derive constant acceleration linear motion equations from velocity-acceleration definitions.',
      'Apply first kinematic equation v = v0 + at.',
      'Apply second kinematic equation d = v0 t + 1/2 at².',
      'Apply third timeless kinematic equation v² = v0² + 2ad.',
      'Solve vertical free fall and projectile problems under gravitational acceleration g.'
    ],
    keyConceptsAr: [
      'المعادلة الأولى للحركة: $v = v_0 + at$',
      'المعادلة الثانية للحركة: $d = v_0 t + \\frac{1}{2} at^2$',
      'المعادلة الثالثة للحركة: $v^2 = v_0^2 + 2ad$',
      'السقوط الحر: حركة جسم تحت تأثير الجاذبية الأرضية فقط مع إهمال مقاومة الهواء ($a = g \\approx 9.8\\text{ m/s}^2$ أو $10\\text{ m/s}^2$)',
      'عند قذف جسم لأعلى: تقل سرعته حتى تصل لصفر عند أقصى ارتفاع ($v = 0$)'
    ],
    keyConceptsEn: [
      '1st equation: v = v0 + at',
      '2nd equation: d = v0 t + 1/2 at²',
      '3rd equation: v² = v0² + 2ad',
      'Free fall: motion solely governed by gravity ignoring air drag (g ≈ 9.8 m/s²)',
      'Vertical summit: final velocity reaches zero (v = 0) at maximum height'
    ],
    vocabulary: [
      {
        termAr: 'العجلة المنتظمة (Uniform Acceleration)',
        termEn: 'Uniform Acceleration',
        definitionAr: 'حركة تتغير فيها سرعة الجسم بمقادير متساوية في أزمنة متساوية.',
        definitionEn: 'Motion in which the object’s velocity changes by equal increments in equal time intervals.'
      },
      {
        termAr: 'السقوط الحر (Free Fall)',
        termEn: 'Free Fall',
        definitionAr: 'حركة الأجسام رأسياً نحو مركز الأرض تحت تأثير قوة الجاذبية الأرضية وحدها بإهمال مقاومة الهواء.',
        definitionEn: 'The vertical downward motion of a body falling solely under gravitational attraction.'
      },
      {
        termAr: 'تسارع الجاذبية الأرضية (g)',
        termEn: 'Gravitational Acceleration (g)',
        definitionAr: 'العجلة المنتظمة التي تسقط بها الأجسام حرة نحو الأرض وتساوي في المتوسط 9.8 م/ث² على سطح الأرض.',
        definitionEn: 'The uniform acceleration experienced by freely falling bodies near Earth’s surface (~9.8 m/s²).'
      }
    ],
    sections: [
      {
        titleAr: '1. اشتقاق معادلات الحركة الخطية بعجلة منتظمة',
        titleEn: '1. Derivation of the Three Kinematic Equations',
        contentAr: `إذا تحرك جسم في خط مستقيم بسرعة ابتدائية ($v_0$) وبتسارع منتظم ($a$) ليقطع إزاحة ($d$) خلال زمن ($t$) وتصل سرعته إلى ($v$):

1) المعادلة الأولى للحركة:
من تعريف التسارع: $a = \\frac{v - v_0}{t}$
بالضرب التبادلي: $v - v_0 = at$
$$\\mathbf{v = v_0 + at}$$
* تستخدم عندما تكون الإزاحة ($d$) غير معطاة ولا مطلوبة.

2) المعادلة الثانية للحركة:
السرعة المتوسطة لعجلة منتظمة: $v_{\\text{avg}} = \\frac{v_0 + v}{2}$.
وبما أن الإزاحة: $d = v_{\\text{avg}} \\times t = \\frac{v_0 + v}{2} \\times t$.
نعوض عن $v$ بالمعادلة الأولى ($v = v_0 + at$):
$d = \\frac{v_0 + (v_0 + at)}{2} \\times t = \\frac{2v_0 + at}{2} \\times t = (v_0 + \\frac{1}{2}at) \\times t$
$$\\mathbf{d = v_0 t + \\frac{1}{2} a t^2}$$
* تستخدم عندما تكون السرعة النهائية ($v$) غير مطلوبة.

3) المعادلة الثالثة للحركة (معادلة خالية من الزمن):
من المعادلة الأولى نجد أن: $t = \\frac{v - v_0}{a}$.
نعوض بقيمة $t$ في معادلة الإزاحة: $d = \\frac{v_0 + v}{2} \\times (\\frac{v - v_0}{a}) = \\frac{v^2 - v_0^2}{2a}$.
بالضرب التبادلي: $2ad = v^2 - v_0^2$
$$\\mathbf{v^2 = v_0^2 + 2ad}$$
* تستخدم لحساب السرعة أو الإزاحة عندما لا يتوفر زمن في المسألة.`,
        contentEn: 'Derivation of 1) v = v0 + at, 2) d = v0 t + 1/2 at², and 3) v² = v0² + 2ad for uniformly accelerated motion.'
      },
      {
        titleAr: '2. تطبيقات السقوط الحر والمقذوفات الرأسية',
        titleEn: '2. Vertical Free Fall & Gravitational Trajectories',
        contentAr: `في حالة السقوط الحر والمقذوفات الرأسية، نستبدل العجلة الخطية ($a$) بعجلة الجاذبية الأرضية ($g = 9.8\\text{ m/s}^2$):

1) حالة السقوط الحر من السكون:
- السرعة الابتدائية: $v_0 = 0$.
- معادلات الحركة تصبح:
  * $v = gt$
  * $d = \\frac{1}{2} gt^2$
  * $v^2 = 2gd$

2) حالة القذف رأسياً لأعلى:
- تكون حركة الجسم متباطئة تحت تأثير جذب الأرض ($a = -g$):
  * $v = v_0 - gt$
  * $d = v_0 t - \\frac{1}{2} gt^2$
  * $v^2 = v_0^2 - 2gd$
- عند أقصى ارتفاع: تصبح السرعة النهائية $v = 0$.
  * زمن الصعود لأقصى ارتفاع: $t_{\\text{max}} = \\frac{v_0}{g}$.
  * أقصى ارتفاع يصل إليه الجسم: $d_{\\text{max}} = \\frac{v_0^2}{2g}$.
  * زمن التحليق الكلي (صعوداً وهبوطاً): $T = 2 \\times t_{\\text{max}}$.`,
        contentEn: 'Vertical motion replaces linear a with g. Falling from rest has v0=0. Upward launches have a = -g and v=0 at peak altitude.'
      }
    ],
    summaryAr: 'تتناول الوحدة الثانية معادلات الحركة الخطية بعجلة منتظمة وفق منهج بخت الرضا السوداني: استنتاج معادلات الحركة الثلاث، وقواعد تطبيقها، والتحليل الحسابي الدقيق لحالات السقوط الحر والمقذوفات الرأسية في مجال الجاذبية الأرضية.',
    summaryEn: 'Comprehensive derivation and problem-solving application of constant-acceleration kinematic equations and free-fall mechanics.',
    textbookExercises: [
      {
        id: 'sd-ex-phy10-2',
        questionAr: 'قُذفت كرة رأسياً إلى أعلى بسرعة ابتدائية قدرها 29.4 م/ث من سطح الأرض (باعتبار عجلة الجاذبية g = 9.8 م/ث² وإهمال مقاومة الهواء). احسب:\n1) الزمن اللازم للكرة لتصل إلى أقصى ارتفاع.\n2) أقصى ارتفاع تبلغه الكرة عن سطح الأرض.\n3) سرعة الكرة عندما تعود لنقطة القذف.',
        questionEn: 'A ball is launched vertically upward at 29.4 m/s (g = 9.8 m/s²). Find: 1) Time to reach maximum height, 2) Maximum height, 3) Velocity upon returning to ground.',
        solutionStepsAr: [
          'الخطوة 1: عند أقصى ارتفاع السرعة النهائية v = 0. نستخدم المعادلة الأولى: v = v0 - gt ⟹ 0 = 29.4 - 9.8t ⟹ t = 29.4 / 9.8 = 3 ثوانٍ.',
          'الخطوة 2: أقصى ارتفاع (المعادلة الثالثة): v² = v0² - 2gd ⟹ 0 = (29.4)² - 2(9.8)d ⟹ 19.6d = 864.36 ⟹ d = 44.1 متر.',
          'الخطوة 3: سرعة العودة للأرض تساوي مقدار سرعة القذف ولكن باتجاه الأسفل (بحفظ الطاقة): v = -29.4 م/ث (أو 29.4 م/ث هبوطاً).'
        ],
        solutionStepsEn: [
          'Step 1: At peak v=0. 0 = 29.4 - 9.8t -> t = 3.0 s.',
          'Step 2: Peak height: 0 = 29.4² - 2(9.8)d -> d = 44.1 m.',
          'Step 3: Return velocity equals launch speed directed downward: v = 29.4 m/s.'
        ],
        answerAr: 'زمن أقصى ارتفاع = 3 ثوانٍ | أقصى ارتفاع = 44.1 متر | سرعة العودة = 29.4 م/ث لأسفل.',
        answerEn: 'Time to peak = 3s | Max height = 44.1m | Return velocity = 29.4 m/s downward.'
      }
    ],
    assessment: {
      id: 'quiz-sd-phy10-2',
      titleAr: 'تقويم الوحدة 2: معادلات الحركة الخطية والسقوط الحر',
      titleEn: 'Assessment 2: Kinematic Equations & Free Fall',
      passingScore: 80,
      questions: [
        {
          id: 'q1-sd-phy2',
          textAr: 'بدأت سيارة حركتها من السكون بعجلة منتظمة قدرها 3 م/ث²، كم تصبح سرعتها بعد مرور 6 ثوانٍ؟',
          textEn: 'A car starts from rest accelerating at 3 m/s². What is its speed after 6 seconds?',
          optionsAr: ['18 م/ث', '9 م/ث', '36 م/ث', '54 م/ث'],
          optionsEn: ['18 m/s', '9 m/s', '36 m/s', '54 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق المعادلة الأولى للحركة',
          conceptTestedEn: 'First kinematic equation application',
          explanationAr: 'من السكون v0 = 0. المعادلة الأولى: v = v0 + at = 0 + (3 × 6) = 18 م/ث.',
          explanationEn: 'v = v0 + at = 0 + 3 * 6 = 18 m/s.',
          difficulty: 'easy'
        },
        {
          id: 'q2-sd-phy2',
          textAr: 'سقط جسم سقوطاً حراً من قمة مبنى فوصل إلى الأرض بعد 4 ثوانٍ (اعتبر g = 10 م/ث²). ما ارتفاع المبنى؟',
          textEn: 'A stone falls freely from a building roof reaching ground in 4s (g = 10 m/s²). What is building height?',
          optionsAr: ['80 متراً', '40 متراً', '160 متراً', '20 متراً'],
          optionsEn: ['80 meters', '40 meters', '160 meters', '20 meters'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق المعادلة الثانية في السقوط الحر',
          conceptTestedEn: 'Second equation in free fall',
          explanationAr: 'سقوط حر v0 = 0. الإزاحة d = 1/2 gt² = 1/2 × 10 × (4)² = 5 × 16 = 80 متراً.',
          explanationEn: 'd = 1/2 * g * t² = 0.5 * 10 * 16 = 80 m.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة الثالثة: قوانين الحركة ──
  {
    id: 'sd-g10-phy-3',
    order: 3,
    subject: 'PHYSICS',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'جمهورية السودان - الفيزياء (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Physics (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثالثة: قوانين الحركة',
    unitTitleEn: 'Unit 3: Newton’s Laws of Motion',
    lessonNumberAr: 'الدرس الثالث: قوانين نيوتن الثلاثة والقصور الذاتي وقوة الجاذبية',
    lessonNumberEn: 'Lesson 3: Newton’s Three Laws, Inertia & Universal Gravitation',
    titleAr: 'المحاضرة 3: ديناميكا الحركة: قوانين نيوتن الثلاثة وتطبيقات القوة والقصور الذاتي',
    titleEn: 'Lecture 3: Dynamics: Newton’s Three Laws of Motion, Force & Inertia',
    subtitleAr: 'قانون نيوتن الأول والقصور الذاتي، القانون الثاني (F = ma) وكمية الحركة، القانون الثالث (الفعل ورد الفعل)، وتطبيقات الأقمار والجاذبية',
    subtitleEn: 'Inertia & 1st law, momentum and 2nd law (F = ma), action-reaction 3rd law, and universal gravitation applications.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما يضغط سائق حافلة ركاب متجهة من أم درمان إلى بحري فجأة على الفرامل لتفادي عقبة، يندفع جميع الركاب تلقائياً نحو الأمام! وعندما ينطلق قارب صيد في مياه النيل ويدفع الصياد الماء بالمجداف إلى الخلف، يتقدم القارب إلى الأمام! هذه المشاهد اليومية ليست صدفة، بل تحكمها القوانين الثلاثة الخالدة التي صاغها السير إسحاق نيوتن، والتي تعتبر حجر الأساس لعلم الديناميكا الميكانيكية وهندسة الصواريخ الفضائية!',
    warmupHookEn: 'Why do passengers lurch forward during sudden braking? Why does pushing water backward propel a boat forward? Discover Newton’s three timeless dynamic laws governing classical mechanics, vehicle safety systems, and rocketry.',
    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم القوة ومحصلة القوى ووحدة قياسها (النيوتن = كجم·م/ث²).',
      'أن يفسر قانون نيوتن الأول (مبدأ القصور الذاتي) ويوضح تطبيقاته في حوادث السير وأهمية أحزمة الأمان.',
      'أن يطبق رياضياً قانون نيوتن الثاني: $F = ma$ ويوضح العلاقة بين القوة والكتلة والتسارع.',
      'أن يعرّف كمية الحركة الخطية (الزخم: $p = mv$) ويوضح قانون حفظ كمية الحركة.',
      'أن يطبق قانون نيوتن الثالث (لكل فعل رد فعل مساوٍ له في المقدار ومضاد له في الاتجاه) في تفسير الدفع النفاث وحركة الصواريخ.'
    ],
    learningOutcomesEn: [
      'Define force, resultant forces, and Newton unit definition (kg·m/s²).',
      'Explain Newton’s 1st Law (inertia) and seatbelt safety engineering.',
      'Apply Newton’s 2nd Law F = ma quantitatively.',
      'Define linear momentum p = mv and momentum conservation principles.',
      'Apply Newton’s 3rd Law (action-reaction) to rocket propulsion and fluid propulsion.'
    ],
    keyConceptsAr: [
      'قانون نيوتن الأول: يظل الجسم الساكن ساكناً والمتحرك في خط مستقيم بسرعة ثابتة متحركاً ما لم تؤثر عليه قوة محصلة تغيّر من حالته',
      'القصور الذاتي: مقاومة الجسم الذاتية لتغيير حالته الحركية (ويقاس بالكتلة)',
      'قانون نيوتن الثاني: $F = ma = \\frac{\\Delta p}{\\Delta t}$ (القوة المحصلة تساوي المعدل الزمني لتغير الزخم)',
      'قانون نيوتن الثالث: $F_{12} = -F_{21}$ (الفعل ورد الفعل قوتان متساويتان مقداراً ومتعاكستان اتجاهاً وتؤثران في جسمين مختلفين)',
      'الوزن $W = mg$ قوة جذب الأرض للجسم ويتغير بتغير المكان، بينما الكتلة $m$ مقدار ثابت لا يتغير'
    ],
    keyConceptsEn: [
      'Newton’s 1st Law: Bodies maintain rest or uniform rectilinear motion unless compelled by net external force',
      'Inertia: intrinsic resistance to motion changes, measured by mass',
      'Newton’s 2nd Law: F_net = m·a = dp/dt',
      'Newton’s 3rd Law: For every action force, an equal and opposite reaction force exists',
      'Weight W = mg varies with local gravity; mass m is an intrinsic invariant'
    ],
    vocabulary: [
      {
        termAr: 'القصور الذاتي (Inertia)',
        termEn: 'Inertia',
        definitionAr: 'خاصية فيزيائية للمادة تعبر عن عجز الجسم أو مقاومته لتغيير حالته من السكون أو الحركة المنتظمة ما لم تؤثر عليه قوة خارجية.',
        definitionEn: 'The tendency of an object to resist changes in its state of motion or rest.'
      },
      {
        termAr: 'النيوتن (Newton)',
        termEn: 'Newton',
        definitionAr: 'القوة التي إذا أثرت على جسم كتلته 1 كجم أكسبته تسارعاً مقداره 1 م/ث² في اتجاهها (1 N = 1 kg·m/s²).',
        definitionEn: 'The SI unit of force that accelerates a 1 kg mass by 1 m/s².'
      },
      {
        termAr: 'كمية الحركة الخطية / الزخم (Linear Momentum)',
        termEn: 'Linear Momentum',
        definitionAr: 'حاصل ضرب كتلة الجسم في سرعته المتجهة: خ = ك × ع (p = mv)، وتقاس بوحدة (كجم·م/ث).',
        definitionEn: 'The product of an object’s mass and linear velocity: p = mv (kg·m/s).'
      }
    ],
    sections: [
      {
        titleAr: '1. قانون نيوتن الأول ومفهوم القصور الذاتي',
        titleEn: '1. Newton’s First Law & The Principle of Inertia',
        contentAr: `1) نص قانون نيوتن الأول:
"يظل الجسم على حالته من السكون، أو الحركة المنتظمة بسرعة ثابتة في خط مستقيم، ما لم تؤثر عليه قوة محصلة خارجية تجبره على تغيير هذه الحالة".
- شرط الاتزان الانتقالي: $\\sum \\vec{F} = 0$.
- إذا كانت محصلة القوى صفراً:
  * إذا كان الجسم ساكناً ⟹ يظل ساكناً ($v = 0$).
  * إذا كان الجسم متحركاً ⟹ يواصل حركته بنفس السرعة الثابتة والاتجاه المستقيم ($a = 0$).

2) القصور الذاتي وتطبيقاته الواقعية:
- تعتمد مقاومة الجسم لتغيير حركته على **كتلته**؛ فكلما زادت كتلة الجسم زاد قصوره الذاتي وصعب تحريكه أو إيقافه (إيقاف قطار بضائع أصعب بكثير من إيقاف سيارة صغيرة تسير بنفس السرعة).
- تطبيقات هندسية لحفظ الأرواح:
  * **أحزمة الأمان:** تمنع اندفاع الركاب للأمام واصطدامهم بالزجاج عند التوقف المفاجئ.
  * **الوسائد الهوائية (Airbags):** تمتص طاقة الاندفاع الناتجة عن القصور الذاتي وتقلل القوة المؤثرة على السائق.
  * تثبيت الحمولات الثقيلة في شاحنات النقل لمنع انزلاقها أثناء المنعطفات والتوقف.`,
        contentEn: 'Newton’s 1st law defines translational equilibrium (ΣF = 0). Inertia scales with mass. Seatbelts and airbags mitigate inertial risks during abrupt decelerations.'
      },
      {
        titleAr: '2. قانون نيوتن الثاني وقانون الفعل ورد الفعل',
        titleEn: '2. Newton’s Second and Third Laws of Motion',
        contentAr: `1) قانون نيوتن الثاني ($F = ma$):
"إذا أثرت قوة محصلة غير صفرية على جسم ما، فإنها تكسبه تسارعاً يتناسب طردياً مع القوة المؤثرة ويكون في اتجاهها، ويتناسب عكسياً مع كتلة الجسم":
$$\\mathbf{F = ma}$$
- الصيغة العامة بدلالة كمية الحركة (الزخم $p = mv$):
$$F = \\frac{\\Delta p}{\\Delta t} = \\frac{\\Delta (mv)}{\\Delta t}$$
"القوة المحصلة تساوي المعدل الزمني للتغير في كمية الحركة".

2) قانون نيوتن الثالث (الفعل ورد الفعل):
"لكل قوة فعل قوة رد فعل، مساوية لها في المقدار، ومضادة لها في الاتجاه":
$$\\mathbf{\\vec{F}_{12} = -\\vec{F}_{21}}$$
* خصائص هامة لقوتي الفعل ورد الفعل:
1. تنشآن معاً وتختفيان معاً في أزواج متبادلة (لا توجد قوة منفردة في الكون).
2. تؤثران على **جسمين مختلفين**، ولذلك **لا تلغي إحداهما الأخرى** (لا تحدث بينهما محصلة صفرية تلغي الحركة).
3. من نفس الطبيعة الفيزيائية (تجاذبية مع تجاذبية، كهرومغناطيسية مع كهرومغناطيسية).
* تطبيقات:
- انطلاق الصواريخ الفضائية: الغازات المحترقة تندفع لأسفل (فعل) ⟹ الصاروخ يندفع لأعلى (رد فعل).
- السباحة والمجداف: دفع الماء للخلف (فعل) ⟹ اندفاع السباح للأمام (رد فعل).`,
        contentEn: 'Newton’s 2nd law: F = ma = dp/dt. Newton’s 3rd law: F_action = -F_reaction acting on two separate objects simultaneously.'
      }
    ],
    summaryAr: 'تغطي الوحدة الثالثة علم الديناميكا وقوانين الحركة الكلاسيكية لنيوتن: القصور الذاتي وتطبيقات حزام الأمان، قانون $F = ma$ وحسابات القوة والتسارع والزخم، وقانون الفعل ورد الفعل وتطبيقات الدفع الصاروخي.',
    summaryEn: 'Covers classical dynamics: inertia and Newton’s 1st law, F=ma and linear momentum in Newton’s 2nd law, and action-reaction pairs in Newton’s 3rd law.',
    textbookExercises: [
      {
        id: 'sd-ex-phy10-3',
        questionAr: 'أثرت قوة أفقية ثابتة مقدارها 150 نيوتن على عربة كتلتها 30 كجم موضوعة على سطح أفقي أملس (عديم الاحتكاك):\n1) احسب تسارع العربة.\n2) احسب سرعة العربة بعد 5 ثوانٍ من بدء حركتها من السكون.\n3) ما مقدار القوة اللازمة لإيقاف هذه العربة خلال 3 ثوانٍ بعد ذلك؟',
        questionEn: 'A constant 150 N force acts on a frictionless 30 kg cart initially at rest: 1) Find acceleration, 2) Find speed after 5s, 3) Find force required to stop it in 3s.',
        solutionStepsAr: [
          'الخطوة 1: نطبق قانون نيوتن الثاني: F = ma ⟹ a = F / m = 150 / 30 = 5 م/ث².',
          'الخطوة 2: حساب السرعة بعد 5 ثوانٍ (v0 = 0): v = v0 + at = 0 + (5 × 5) = 25 م/ث.',
          'الخطوة 3: لإيقاف العربة تصبح السرعة النهائية صفر خلال 3 ثوانٍ: a_braking = (0 - 25) / 3 = -8.33 م/ث². القوة المعيقة المطلوبة: F = m × a = 30 × (-8.33) = -250 نيوتن (في عكس اتجاه الحركة).'
        ],
        solutionStepsEn: [
          'Step 1: a = F/m = 150 / 30 = 5 m/s².',
          'Step 2: v = 0 + 5(5) = 25 m/s.',
          'Step 3: Deceleration = (0 - 25) / 3 = -8.33 m/s². Braking force = 30 * (-8.33) = -250 N.'
        ],
        answerAr: 'التسارع = 5 م/ث² | السرعة بعد 5 ثوانٍ = 25 م/ث | قوة الإيقاف = 250 نيوتن في عكس اتجاه الحركة.',
        answerEn: 'Acceleration = 5 m/s² | Speed at 5s = 25 m/s | Stopping force = 250 N opposing motion.'
      }
    ],
    assessment: {
      id: 'quiz-sd-phy10-3',
      titleAr: 'تقويم الوحدة 3: قوانين نيوتن للحركة والديناميكا',
      titleEn: 'Assessment 3: Newton’s Laws & Dynamics',
      passingScore: 80,
      questions: [
        {
          id: 'q1-sd-phy3',
          textAr: 'جسم كتلته 20 كجم على سطح الأرض حيث g = 9.8 م/ث²، فإذا نقل هذا الجسم إلى سطح القمر حيث جاذبية القمر تساوي سدس جاذبية الأرض، فما هي كتلته على القمر؟',
          textEn: 'A body has mass 20 kg on Earth (g = 9.8 m/s²). If transported to the Moon where gravity is 1/6th of Earth, what is its mass on the Moon?',
          optionsAr: ['20 كجم', '3.33 كجم', '120 كجم', 'صفر'],
          optionsEn: ['20 kg', '3.33 kg', '120 kg', 'Zero'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين ثبات الكتلة وتغير الوزن',
          conceptTestedEn: 'Invariance of mass vs variation of weight',
          explanationAr: 'الكتلة كمية قياسية ثابتة تعبر عن مقدار ما يحتويه الجسم من مادة ولا تتغير بتغير المكان أو الكوكب، بينما الذي يقل لسدس هو الوزن.',
          explanationEn: 'Mass is an intrinsic property that does not change with gravitational field; only weight decreases by a factor of 6.',
          difficulty: 'medium'
        },
        {
          id: 'q2-sd-phy3',
          textAr: 'لماذا لا تلغي قوة الفعل قوة رد الفعل وتحدث اتزاناً؟',
          textEn: 'Why do action and reaction forces not cancel each other out to create static equilibrium?',
          optionsAr: ['لأنهما تؤثران على جسمين مختلفين', 'لأنهما غير متساويتين في المقدار', 'لأنهما تؤثران في نفس الاتجاه', 'لأنهما لا تحدثان في نفس اللحظة'],
          optionsEn: ['Because they act on two different bodies', 'Because they differ in magnitude', 'Because they act in same direction', 'Because they are not simultaneous'],
          correctIndex: 0,
          conceptTestedAr: 'شروط محصلة القوى وقانون نيوتن الثالث',
          conceptTestedEn: 'Action-reaction application on separate bodies',
          explanationAr: 'لكي تلغي قوتان إحداهما الأخرى يجب أن تؤثرا على نفس الجسم، بينما الفعل ورد الفعل تؤثران على جسمين متبادلين ومختلفين.',
          explanationEn: 'Cancellation requires concurrent forces on the same object. Action and reaction forces act on distinct interacting bodies.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── الوحدة الرابعة: خواص المادة ──
  {
    id: 'sd-g10-phy-4',
    order: 4,
    subject: 'PHYSICS',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'جمهورية السودان - الفيزياء (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Physics (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الرابعة: خواص المادة',
    unitTitleEn: 'Unit 4: Properties of Matter',
    lessonNumberAr: 'الدرس الرابع: الكثافة والمرونة والضغط والتوتر السطحي',
    lessonNumberEn: 'Lesson 4: Density, Elasticity (Hooke’s Law), Fluid Pressure & Capillarity',
    titleAr: 'المحاضرة 4: خواص المادة: الكثافة والمرونة وقانون هوك والضغط والخاصية الشعرية',
    titleEn: 'Lecture 4: Properties of Matter: Density, Hooke’s Elasticity, Fluid Pressure & Capillarity',
    subtitleAr: 'الكثافة والوزن النوعي، المرونة وقانون هوك، ضغط السوائل ومبدأ باسكال، والتوتر السطحي وصعود العصارة في التربة السودانية',
    subtitleEn: 'Density, specific gravity, Hooke’s law, fluid hydrostatics, Pascal’s principle, surface tension, and soil capillarity in Sudan.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في مشروع الجزيرة المروي بالسودان، تتشرب التربة الطينية مياه الترع وتصعد المياه عبر مسامات التربة الدقيقة إلى جذور وسيقان القطن والسمسم والقمح دون أي مضخات ميكانيكية! كيف تتحدى المياه الجاذبية الأرضية وتصعد في الأنابيب الدقيقة؟ وكيف يطفو قارب حديدي عملاق فوق مياه النهر بينما تغرق مسمار فولاذي صغير في القاع؟ في هذه المحاضرة نغوص في أسرار الخواص الميكانيكية للمادة السائلة والصلبة!',
    warmupHookEn: 'In Sudan’s Gezira agricultural scheme, capillary action draws canal water upwards through microscopic soil pores into crop roots against gravity. Unravel fluid pressure, density, Hooke’s elasticity, and surface tension.',
    learningOutcomesAr: [
      'أن يعرّف الطالب الكثافة ($\\rho = m/V$) ويحسب الكثافة والوزن النوعي للمواد الصلبة والسائلة.',
      'أن يوضح مفهوم المرونة ويطبق قانون هوك ($F = k \\Delta L$) ويحدد حد المرونة ونقطة الانكسار.',
      'أن يطبق قانون الضغط في باطن سائل ساكن ($P = \\rho g h$) ويوضح مبدأ باسكال وتطبيقاته في المكابس الهيدروليكية.',
      'أن يشرح ظاهرة التوتر السطحي وقوى التماسك والتلاصق في السوائل.',
      'أن يفسر الخاصية الشعرية وتطبيقاتها في صعود المياه في مسام التربة الزراعية السودانية والأنابيب الدقيقة.'
    ],
    learningOutcomesEn: [
      'Calculate density (ρ = m/V) and specific gravity for solids and fluids.',
      'Explain elasticity, apply Hooke’s law (F = k·ΔL), and identify elastic limits.',
      'Apply hydrostatic fluid pressure P = ρgh and Pascal’s hydraulic principle.',
      'Explain surface tension, cohesive forces, and adhesive forces.',
      'Analyze capillary action in Sudanese agricultural soil pores and xylem vessels.'
    ],
    keyConceptsAr: [
      'الكثافة $\\rho = \\frac{m}{V}$ ووحدة قياسها كجم/م³ أو جم/سم³',
      'الوزن النوعي = كثافة المادة / كثافة الماء النقي عند 4° سيلزيوس (كمية بلا وحدة)',
      'قانون هوك للمرونة: قوة الإرجاع تتناسب طردياً مع الاستطالة الحادثة ضمن حد المرونة ($F = k \\Delta L$)',
      'الضغط $P = \\frac{F}{A}$، وضغط السائل الساكن $P = \\rho g h$',
      'مبدأ باسكال: الضغط المسلط على سائل محبوس ينتقل بتمامه إلى جميع أجزاء السائل وجدران الإناء',
      'التوتر السطحي والخاصية الشعرية: صعود أو انخفاض السائل في الأنابيب الضيقة'
    ],
    keyConceptsEn: [
      'Density ρ = m/V (kg/m³ or g/cm³)',
      'Specific gravity: relative density compared to pure water at 4°C',
      'Hooke’s law: restoring force F = k·ΔL within proportional elastic limit',
      'Pressure P = F/A; hydrostatic pressure P = ρgh',
      'Pascal’s principle in enclosed fluids and hydraulic multipliers',
      'Surface tension and capillary rise/depression in narrow conduits'
    ],
    vocabulary: [
      {
        termAr: 'الكثافة (Density)',
        termEn: 'Density',
        definitionAr: 'كتلة وحدة الحجوم من المادة: ث = ك / ح (ρ = m / V)، وتقاس في النظام الدولي بوحدة (كجم/م³).',
        definitionEn: 'Mass per unit volume of a substance: ρ = m / V (kg/m³).'
      },
      {
        termAr: 'قانون هوك (Hooke’s Law)',
        termEn: 'Hooke’s Law',
        definitionAr: 'استطالة المادة المرنة تتناسب طردياً مع القوة المسببة للاستطالة ما لم يتجاوز الجسم حد المرونة: ق = ثا × ل (F = k·ΔL).',
        definitionEn: 'Strain in an elastic body is directly proportional to applied stress within the proportional elastic limit.'
      },
      {
        termAr: 'مبدأ باسكال (Pascal’s Principle)',
        termEn: 'Pascal’s Principle',
        definitionAr: 'عند التأثير بضغط خارجي على سائل محصور وغير قابل للانضغاط، فإن هذا الضغط ينتقل بتمامه وبنفس المقدار إلى جميع أجزاء السائل وجدران الإناء الحاوي له.',
        definitionEn: 'External pressure applied to an enclosed incompressible fluid is transmitted undiminished in all directions.'
      },
      {
        termAr: 'الخاصية الشعرية (Capillarity)',
        termEn: 'Capillarity',
        definitionAr: 'ظاهرة ارتفاع أو انخفاض السائل في الأنابيب الضيقة (الشعرية) نتيجة للموازنة بين قوى التلاصق وقوى التماسك.',
        definitionEn: 'The spontaneous rise or depression of a liquid in narrow-bore tubes due to cohesive and adhesive forces.'
      }
    ],
    sections: [
      {
        titleAr: '1. الكثافة والمرونة وقانون هوك',
        titleEn: '1. Density, Specific Gravity & Hooke’s Elasticity',
        contentAr: `1) الكثافة والوزن النوعي:
- **الكثافة ($\\rho$):** خاصية فيزيائية مميزة للمادة النقية لا تتغير بتغير الحجم أو الكتلة عند ثبوت درجة الحرارة:
$$\\rho = \\frac{m}{V}$$
- وحدة الكثافة في النظام الدولي: $\\text{kg/m}^3$ (للتحويل من $\\text{g/cm}^3$ إلى $\\text{kg/m}^3$ نضرب في 1000).
- **الوزن النوعي (الكثافة النسبية):** النسبة بين كثافة المادة إلى كثافة الماء النقي ($1000\\text{ kg/m}^3$):
$$\\text{الوزن النوعي} = \\frac{\\rho_{\\text{مادة}}}{\\rho_{\\text{ماء}}}$$
وهو عدد مجرد من الوحدات.

2) المرونة وقانون هوك:
- **المرونة:** قدرة الجسم على استعادة شكله وحجمه الأصلي فور زوال القوة الخارجية المؤثرة عليه.
- **حد المرونة:** أقصى قوة يمكن أن يتحملها الجسم ويعود بعدها لشكله الأصلي؛ فإذا تجاوزتها القوة حدث "تشوه دائم" أو انكسار.
- **قانون هوك:**
$$F = k \\cdot \\Delta L$$
حيث:
- $F$: القوة المؤثرة أو قوة الشد (N).
- $k$: ثابت المرونة (ثابت هوك) للنابض، ويقاس بـ (نيوتن/متر). يعتمد على نوع المادة وسمك السلك وطوله.
- $\\Delta L$: مقدار الاستطالة الحادثة في النابض (متر).`,
        contentEn: 'Density ρ = m/V is intrinsic. Specific gravity compares density to water. Hooke’s law states spring restoration force F = k·ΔL up to the elastic limit.'
      },
      {
        titleAr: '2. ضغط السوائل ومبدأ باسكال والخاصية الشعرية',
        titleEn: '2. Fluid Hydrostatics, Pascal’s Principle & Capillarity',
        contentAr: `1) الضغط في باطن سائل ساكن:
الضغط ($P$) هو القوة العمودية المؤثرة على وحدة المساحات ($P = F / A$).
في باطن سائل ساكن ومتجانس، ينشأ الضغط عن وزن عمود السائل:
$$\\mathbf{P = \\rho \\cdot g \\cdot h}$$
- يزداد الضغط بزيادة:
  * عمق النقطة تحت سطح السائل ($h$).
  * كثافة السائل ($\\rho$).
- جميع النقاط الواقعة في مستوى أفقي واحد داخل سائل ساكن ومتجانس لها نفس الضغط.

2) مبدأ باسكال والمكبس الهيدروليكي:
في المكبس الهيدروليكي، يؤثر ضغط صغير على مكبس صغير ذي مساحة ($A_1$) بقوة ($F_1$):
$$P_1 = P_2 \\implies \\frac{F_1}{A_1} = \\frac{F_2}{A_2} \\implies F_2 = F_1 \\times \\frac{A_2}{A_1}$$
وهذا يتيح رفع سيارات وأوزان ضخمة بقوة بشرية متواضعة، وتسمى النسبة ($A_2 / A_1$) بالفائدة الميكانيكية.

3) التوتر السطحي والخاصية الشعرية:
- **التوتر السطحي:** يعمل سطح السائل الحر كغشاء مرن مشدود يميل لتقليص مساحته لأقل قدر ممكن (سبب كروية قطرات الندى وقدرة الحشرات على السير فوق مياه النيل).
- **الخاصية الشعرية:**
  * إذا كانت قوى التلاصق (بين السائل وجدار الأنبوب) أكبر من قوى التماسك (بين جزيئات السائل): يبلل السائل الجدار ويرتفع في الأنبوب ويكون سطحه مقعراً (كالماء في الزجاج).
  * إذا كانت قوى التماسك أكبر من التلاصق: ينخفض السائل ويكون سطحه محدباً (كالزئبق في الزجاج).
  * ارتفاع السائل يتناسب عكسياً مع نصف قطر الأنبوبة الشعرية (كلما ضاقت الأنبوبة ارتفع السائل أكثر).`,
        contentEn: 'Hydrostatic pressure P = ρgh. Pascal’s hydraulic principle multiplies forces F2 = F1(A2/A1). Surface tension and capillarity govern soil moisture transport.'
      }
    ],
    summaryAr: 'تغطي الوحدة الرابعة خواص المادة الميكانيكية والهيدروستاتيكية وفق مقرر بخت الرضا السوداني: حسابات الكثافة والوزن النوعي، المرونة واستطالة النوابض وفق قانون هوك، ضغط السوائل وقاعدة باسكال، والتوتر السطحي والخاصية الشعرية في التربة الزراعية.',
    summaryEn: 'Covers matter properties: density and specific gravity, Hooke’s elasticity, hydrostatic pressure P=ρgh, Pascal’s hydraulic multiplier, surface tension, and capillarity.',
    textbookExercises: [
      {
        id: 'sd-ex-phy10-4',
        questionAr: 'مكبس هيدروليكي مساحة مقطع مكبسه الصغير 5 سم² ومساحة مقطع مكبسه الكبير 500 سم². إذا أثرت قوة مقدارها 200 نيوتن على المكبس الصغير:\n1) احسب القوة الرافعة المتولدة عند المكبس الكبير.\n2) احسب الفائدة الميكانيكية للمكبس الهيدروليكي.\n3) ما أقصى كتلة يمكن لهذا المكبس رفعها عند المكبس الكبير (اعتبر g = 10 م/ث²)؟',
        questionEn: 'A hydraulic press has small piston area 5 cm² and large piston area 500 cm². If 200 N is applied to small piston: 1) Find force on large piston, 2) Find mechanical advantage, 3) Find maximum mass lifted (g = 10 m/s²).',
        solutionStepsAr: [
          'الخطوة 1: بتطبيق مبدأ باسكال: F2 / A2 = F1 / A1 ⟹ F2 = F1 × (A2 / A1) = 200 × (500 / 5) = 200 × 100 = 20,000 نيوتن.',
          'الخطوة 2: الفائدة الميكانيكية = A2 / A1 = 500 / 5 = 100 (مضاعفة القوة 100 مرة).',
          'الخطوة 3: أقصى كتلة يمكن رفعها: W = m × g ⟹ m = F2 / g = 20000 / 10 = 2000 كجم (2 طن).'
        ],
        solutionStepsEn: [
          'Step 1: F2 = F1 * (A2 / A1) = 200 * (500 / 5) = 20,000 N.',
          'Step 2: Mechanical advantage = 500 / 5 = 100.',
          'Step 3: Mass lifted m = F2 / g = 20000 / 10 = 2000 kg (2 metric tons).'
        ],
        answerAr: 'القوة عند المكبس الكبير = 20,000 نيوتن | الفائدة الميكانيكية = 100 | الكتلة المرفوعة = 2000 كجم.',
        answerEn: 'Lift force = 20,000 N | Mechanical advantage = 100 | Mass lifted = 2,000 kg.'
      }
    ],
    assessment: {
      id: 'quiz-sd-phy10-4',
      titleAr: 'تقويم الوحدة 4: خواص المادة والمرونة وضغط السوائل',
      titleEn: 'Assessment 4: Properties of Matter & Fluid Statics',
      passingScore: 80,
      questions: [
        {
          id: 'q1-sd-phy4',
          textAr: 'نابض حلزوني استطال بمقدار 0.04 متر عند تعليق ثقل وزنه 20 نيوتن في طرفه، فما هو ثابت المرونة (ثابت هوك) لهذا النابض؟',
          textEn: 'A helical spring stretches by 0.04m when loaded with a 20N weight. What is its spring constant (k)?',
          optionsAr: ['500 نيوتن/متر', '0.8 نيوتن/متر', '80 نيوتن/متر', '250 نيوتن/متر'],
          optionsEn: ['500 N/m', '0.8 N/m', '80 N/m', '250 N/m'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون هوك لحساب ثابت المرونة',
          conceptTestedEn: 'Hooke’s law spring constant calculation',
          explanationAr: 'وفق قانون هوك: F = k × ΔL ⟹ k = F / ΔL = 20 / 0.04 = 500 نيوتن/متر.',
          explanationEn: 'k = F / ΔL = 20 / 0.04 = 500 N/m.',
          difficulty: 'medium'
        },
        {
          id: 'q2-sd-phy4',
          textAr: 'أي من الظواهر الفيزيائية التالية مسؤولة عن صعود المياه والمعادن المذابة في مسامات التربة الزراعية وفي الأوعية الخشبية للنباتات؟',
          textEn: 'Which physical phenomenon drives water and dissolved mineral rise in soil pores and plant xylem?',
          optionsAr: ['الخاصية الشعرية (Capillarity)', 'قاعدة باسكال', 'قانون هوك', 'التصادم المرن'],
          optionsEn: ['Capillarity', 'Pascal’s Principle', 'Hooke’s Law', 'Elastic Collision'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات الخاصية الشعرية في التربة والنبات',
          conceptTestedEn: 'Capillary action applications in nature',
          explanationAr: 'الخاصية الشعرية تنشأ في الأنابيب والمسامات الدقيقة وتؤدي إلى ارتفاع السوائل بفضل تفوق قوى التلاصق على التماسك.',
          explanationEn: 'Capillarity drives upward liquid transport in microscopic channels where adhesive forces exceed liquid cohesive tension.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── الوحدة الخامسة: قياس درجة الحرارة ──
  {
    id: 'sd-g10-phy-5',
    order: 5,
    subject: 'PHYSICS',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'جمهورية السودان - الفيزياء (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 Physics (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الخامسة: قياس درجة الحرارة',
    unitTitleEn: 'Unit 5: Temperature Measurement & Thermometry',
    lessonNumberAr: 'الدرس الخامس: المفاهيم الحرارية والتدريجات والترمومترات والتمدد الحراري',
    lessonNumberEn: 'Lesson 5: Thermal Concepts, Scales, Thermometers & Thermal Expansion',
    titleAr: 'المحاضرة 5: قياس درجة الحرارة: التدريجات الثرمومترية والترمومترات والتمدد الحراري',
    titleEn: 'Lecture 5: Thermometry: Temperature Scales, Thermometer Types & Thermal Expansion',
    subtitleAr: 'الفرق بين الحرارة ودرجة الحرارة، التدريج المئوي والفهرنهايتي والكلفن المطلق، أنواع موازين الحرارة، والتمدد الحراري الطولي والحجمي',
    subtitleEn: 'Heat vs temperature, Celsius, Fahrenheit, and absolute Kelvin scales, thermometer design, and linear/volumetric thermal expansion.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في فصل الصيف في مدن السودان كالخرطوم وعطبرة ودنقلا، قد تتجاوز درجات الحرارة في الظل 45 درجة مئوية! بينما في محطات الرصد الجوي العالمية يسجلونها بالفهرنهايت أو الكلفن المطلق. لماذا يترك مهندسو السكك الحديدية في السودان فواصل تمدد بين قضبان الفولاذ الحديدية؟ وما الذي يحدث للماء عند تبريده إلى ما دون 4 درجات مئوية؟ في هذه المحاضرة ندرس أسرار الحرارة وتدريجات القياس الدقيقة وتمدد الأجسام!',
    warmupHookEn: 'In desert and riverine climates where temperatures fluctuate drastically, understanding thermal physics is vital. Learn how thermometers operate, convert between Celsius, Fahrenheit, and Kelvin scales, and calculate thermal expansion in civil engineering.',
    learningOutcomesAr: [
      'أن يفرق الطالب بدقة بين كمية الحرارة (طاقة منتقلة بالجول) ودرجة الحرارة (مقياس لمتوسط طاقة حركة الجسيمات).',
      'أن يوضح فكرة عمل موازين الحرارة (الترمومترات) واعتمادها على خاصية فيزيائية تتغير بانتظام مع الحرارة (كالطول، الحجم، المقاومة، أو القوة الدافعة الكهربية).',
      'أن يحدد نقطتي الثبوت الأساسيتين: نقطة تجمد الماء النقي (صفر مئوي) ونقطة غليانه (100 مئوي) عند الضغط الجوي المعتاد.',
      'أن يحول رياضياً بين التدريجات الثرمومترية الثلاثة: السليزيوس (°C)، الفهرنهايت (°F)، والكلفن المطلق (K).',
      'أن يفسر التمدد الحراري للمواد الصلبة والسائلة ويطبق قانون التمدد الطولي ($\\Delta L = L_0 \\alpha \\Delta T$) ويوضح شذوذ تمدد الماء.'
    ],
    learningOutcomesEn: [
      'Differentiate thermal energy (heat in Joules) from temperature (average kinetic energy of molecules).',
      'Explain thermometric properties and operational design of mercury, gas, resistance, and thermocouple thermometers.',
      'Identify standard fixed points: ice point and steam point at standard atmospheric pressure.',
      'Convert quantitatively between Celsius, Fahrenheit, and Kelvin temperature scales.',
      'Calculate linear thermal expansion ΔL = L0 α ΔT and explain anomalous expansion of water.'
    ],
    keyConceptsAr: [
      'الحرارة طاقة تقاس بالجول، بينما درجة الحرارة مؤشر لمتوسط طاقة حركة الجزيئات',
      'القانون الصفري في الديناميكا الحرارية والاتزان الحراري',
      'التدريجات الثرمومترية: السليزيوس (0° إلى 100°)، الفهرنهايت (32° إلى 212°)، الكلفن (273.15 إلى 373.15)',
      'الصفر المطلق (0 K = -273.15 °C): أدنى درجة حرارة نظرية تنعدم عندها طاقة حركة الجزيئات',
      'معادلة التحويل: $T_K = T_C + 273.15$ و $T_F = \\frac{9}{5} T_C + 32$',
      'معامل التمدد الطولي $\\alpha = \\frac{\\Delta L}{L_0 \\Delta T}$'
    ],
    keyConceptsEn: [
      'Heat is energy transfer (J); temperature reflects mean molecular kinetic energy',
      'Zeroth Law of Thermodynamics and thermal equilibrium',
      'Fixed points on Celsius (0-100), Fahrenheit (32-212), and Kelvin (273.15-373.15)',
      'Absolute zero (0 K = -273.15 °C) where molecular kinetic energy reaches quantum minimum',
      'Conversion formulas: T(K) = T(°C) + 273.15, T(°F) = 1.8·T(°C) + 32',
      'Linear expansion coefficient: ΔL = L0 · α · ΔT'
    ],
    vocabulary: [
      {
        termAr: 'درجة الحرارة (Temperature)',
        termEn: 'Temperature',
        definitionAr: 'مقياس لمتوسط طاقة حركة جزيئات المادة، ويحدد اتجاه انتقال الحرارة بين الأجسام عند تلامسها.',
        definitionEn: 'A comparative physical measure of the average kinetic energy of the particles in a system.'
      },
      {
        termAr: 'الخاصية الثرمومترية (Thermometric Property)',
        termEn: 'Thermometric Property',
        definitionAr: 'خاصية فيزيائية قابلة للقياس تتغير بطريقة منتظمة ومستمرة مع تغير درجة الحرارة (مثل حجم السائل، مقاومة السلك، وضغط الغاز).',
        definitionEn: 'A measurable physical property that changes predictably and monotonically with temperature.'
      },
      {
        termAr: 'الصفر المطلق (Absolute Zero)',
        termEn: 'Absolute Zero',
        definitionAr: 'أدنى درجة حرارة ممكنة نظرياً في الكون، وتساوي صفراً كلفن (-273.15 درجة سيلزيوس)، وتتوقف عندها الحركة الحرارية للجزيئات.',
        definitionEn: 'The lowest possible theoretical thermodynamic temperature (0 K or -273.15 °C).'
      },
      {
        termAr: 'معامل التمدد الطولي (Coefficient of Linear Expansion)',
        termEn: 'Coefficient of Linear Expansion',
        definitionAr: 'مقدار الزيادة في وحدة الأطوال من المادة الصلبة عند رفع درجة حرارتها درجة سيليزية واحدة: أ = Δل / (ل₀ × Δد)، ويقاس بـ (1/°C).',
        definitionEn: 'The fractional increase in length of a solid material per degree increase in temperature (1/°C or K⁻¹).'
      }
    ],
    sections: [
      {
        titleAr: '1. المفاهيم الحرارية والتدريجات الثرمومترية والتحويل بينها',
        titleEn: '1. Thermal Concepts, Thermometric Scales & Mathematical Conversions',
        contentAr: `1) الفرق بين الحرارة ودرجة الحرارة:
- **كمية الحرارة ($Q$):** صورة من صور الطاقة تنتقل تلقائياً من الجسم الأعلى في درجة الحرارة إلى الجسم الأقل عند تلامسهما، وتقاس بوحدة **الجول (J)** أو السعر الحراري (Calorie).
- **درجة الحرارة ($T$):** مقياس لمتوسط طاقة الحركة لجزيئات المادة وحالتها الحرارية التي تحدد اتجاه سريان الطاقة.

2) التدريجات الثرمومترية الثلاثة:
أ) **التدريج السليزيوس (المئوي - $^\\circ\\text{C}$):**
- نقطة تجمد الماء النقي (نقطة الجليد): $0^\\circ\\text{C}$.
- نقطة غليان الماء النقي (نقطة البخار): $100^\\circ\\text{C}$.
- يقسم المدى بينهما إلى 100 قسم متساوٍ، كل قسم يمثل درجة مئوية واحدة.

ب) **التدريج الفهرنهايتي ($^\\circ\\text{F}$):**
- نقطة انصهار الجليد: $32^\\circ\\text{F}$.
- نقطة غليان الماء: $212^\\circ\\text{F}$.
- يقسم المدى بينهما إلى 180 قسماً متساوياً.

ج) **التدريج الكلفني (المطلق - $\\text{K}$):**
- التدريج المعتمد رسمياً في النظام الدولي للوحدات (SI).
- الصفر المطلق = $0\\text{ K} = -273.15^\\circ\\text{C}$.
- نقطة تجمد الماء = $273.15\\text{ K}$، ونقطة الغليان = $373.15\\text{ K}$.

3) معادلات التحويل الرياضية المعتمدة:
- من سليزيوس إلى كلفن:
$$T_K = T_C + 273.15$$
- من سليزيوس إلى فهرنهايت:
$$T_F = \\left(\\frac{9}{5} \\times T_C\\right) + 32 = (1.8 \\times T_C) + 32$$
- من فهرنهايت إلى سليزيوس:
$$T_C = \\frac{5}{9} \\times (T_F - 32)$$`,
        contentEn: 'Heat is energy transfer (J); temperature reflects particle kinetic energy. Three scales: Celsius, Fahrenheit, and absolute Kelvin. Conversion formulas: T_K = T_C + 273.15 and T_F = 1.8·T_C + 32.'
      },
      {
        titleAr: '2. أنواع موازين الحرارة والتمدد الحراري للأجسام',
        titleEn: '2. Types of Thermometers & Thermal Expansion of Matter',
        contentAr: `1) أنواع الترمومترات وفق الخاصية الثرمومترية:
- **الترمومتر السائلي (الزئبقي والكحولي):** يعتمد على تمدد حجم السائل في انبوبة شعرية. يفضل الزئبق لأنه جيد التوصيل للحرارة، لا يلتصق بالزجاج، وله مدى واسع للسيولة (-39°م إلى 357°م).
- **ترمومتر الغاز ذو الحجم الثابت:** يعتمد على تغير ضغط الغاز بتغير الحرارة، وهو أدق ميزان لمعايرة بقية الموازين.
- **ترمومتر المقاومة الكهربائية (البلاتيني):** يعتمد على زيادة المقاومة الكهربية لسلك البلاتين بارتفاع درجة الحرارة بدقة فائقة.
- **المزدوج الحراري (Thermocouple):** يعتمد على تولد قوة دافعة كهربية صغيرة عند اختلاف حرارة لحامي معدنين مختلفين، ويستخدم لقياس درجات الحرارة العالية وسريعة التغير كأفران صهر المعادن.

2) التمدد الحراري للأجسام الصلبة والسائلة:
- عند تسخين المادة، تزداد طاقة حركة جزيئاتها وتتباعد عن بعضها فيحدث التمدد:
- **قانون التمدد الطولي للأجسام الصلبة:**
$$\\Delta L = L_0 \\cdot \\alpha \\cdot \\Delta T$$
حيث:
- $\\Delta L$: مقدار الزيادة في الطول (م).
- $L_0$: الطول الأصلي قبل التسخين (م).
- $\\alpha$: معامل التمدد الطولي للمادة ($1/^\\circ\\text{C}$).
- $\\Delta T = T_2 - T_1$: التغير في درجة الحرارة.
- الطول الجديد: $L = L_0 (1 + \\alpha \\Delta T)$.

3) التطبيقات الهندسية وشذوذ الماء:
- **فواصل التمدد:** تترك فواصل مسافات صغيرة بين قضبان السكك الحديدية وبلاطات الجسور الخرسانية في السودان لتفادي التقوس والانبعاج تحت وطأة الحرارة الشديدة صيفاً.
- **شذوذ الماء:** بين $0^\\circ\\text{C}$ و $4^\\circ\\text{C}$، يشذ الماء عن بقية السوائل؛ فعند تبريده من 4 إلى صفر يتمدد وتقل كثافته بدلاً من أن ينكمش! ولذلك يطفو الجليد على السطح، وتحافظ المياه العميقة في القاع على حرارة 4°م مما يحفظ حياة الأسماك والكائنات المائية في الشتاء.`,
        contentEn: 'Thermometers utilize linear properties (liquid expansion, gas pressure, platinum resistance, thermoelectric emf). Linear expansion equation: ΔL = L0 α ΔT. Rail gaps prevent summer buckling.'
      }
    ],
    summaryAr: 'تغطي الوحدة الخامسة علم الحرارة وقياساتها وفق مقرر بخت الرضا السوداني: التمييز العلمي بين الحرارة ودرجة الحرارة، التدريجات الثرمومترية (السليزيوس والفهرنهايت والكلفن) والتحويل بينها، أنواع الترمومترات، وقوانين التمدد الحراري الهندسي وظاهرة شذوذ الماء.',
    summaryEn: 'Covers thermometry fundamentals: heat vs temperature, scale conversions (Celsius, Fahrenheit, Kelvin), thermometer types, linear expansion calculations, and anomalous water expansion.',
    textbookExercises: [
      {
        id: 'sd-ex-phy10-5',
        questionAr: '1) سُجلت درجة حرارة مريض في مستشفى الخرطوم فكانت 104° فهرنهايت. احسب درجة حرارة المريض بالتدريجين السليزي والكلفني.\n2) قضيب من الحديد طوله 50 متراً عند درجة حرارة 20°س، سخن حتى أصبحت درجة حرارته 70°س. إذا علمت أن معامل التمدد الطولي للحديد α = 12 × 10⁻⁶ (1/°C)، فاحسب مقدار التمدد في طول القضيب وطوله النهائي.',
        questionEn: '1) A patient’s temperature is 104°F. Find temperature in Celsius and Kelvin. 2) A 50m iron rail at 20°C is heated to 70°C (α = 12e-6 /°C). Find expansion ΔL and final length.',
        solutionStepsAr: [
          'الخطوة 1: التحويل من فهرنهايت لسليزيوس: TC = (5/9) × (TF - 32) = (5/9) × (104 - 32) = (5/9) × 72 = 40°س (حمى شديدة).',
          'الخطوة 2: التحويل لكلفن: TK = TC + 273.15 = 40 + 273.15 = 313.15 كلفن.',
          'الخطوة 3: حساب التغير في الحرارة: ΔT = 70 - 20 = 50°س.',
          'الخطوة 4: حساب التمدد الطولي: ΔL = L0 × α × ΔT = 50 × (12 × 10⁻⁶) × 50 = 2500 × 12 × 10⁻⁶ = 0.03 متر (3 سم).',
          'الخطوة 5: الطول النهائي للقضيب = 50 + 0.03 = 50.03 متر.'
        ],
        solutionStepsEn: [
          'Step 1: TC = (5/9) * (104 - 32) = 40 °C.',
          'Step 2: TK = 40 + 273.15 = 313.15 K.',
          'Step 3: ΔT = 70 - 20 = 50 °C.',
          'Step 4: ΔL = 50 * 12e-6 * 50 = 0.03 m (3 cm).',
          'Step 5: Final length = 50.03 m.'
        ],
        answerAr: 'حرارة المريض = 40°س و 313.15 كلفن | مقدار التمدد = 0.03 متر (3 سم)، والطول النهائي = 50.03 متر.',
        answerEn: 'Patient temp = 40°C & 313.15 K | Expansion = 0.03m (3 cm), Final length = 50.03m.'
      }
    ],
    assessment: {
      id: 'quiz-sd-phy10-5',
      titleAr: 'تقويم الوحدة 5: قياس درجة الحرارة والتمدد الحراري',
      titleEn: 'Assessment 5: Thermometry & Thermal Expansion',
      passingScore: 80,
      questions: [
        {
          id: 'q1-sd-phy5',
          textAr: 'عند أي درجة حرارة تتساوى القراءة العددية على كل من التدريج السليزي والتدريج الفهرنهايتي؟',
          textEn: 'At what temperature are the numerical readings on Celsius and Fahrenheit scales identical?',
          optionsAr: ['-40°', '0°', '32°', '100°'],
          optionsEn: ['-40°', '0°', '32°', '100°'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة الرياضية ونقطة التقاطع بين تدريجي C و F',
          conceptTestedEn: 'Intersection point between Celsius and Fahrenheit',
          explanationAr: 'بمساواة TC = TF = x في المعادلة: x = (9/5)x + 32 ⟹ -4/5 x = 32 ⟹ x = -40°. إذن -40°C تعادل تماماً -40°F.',
          explanationEn: 'Setting C = F = x in F = 1.8C + 32 yields x = 1.8x + 32 -> -0.8x = 32 -> x = -40°.',
          difficulty: 'medium'
        },
        {
          id: 'q2-sd-phy5',
          textAr: 'ما هي الخاصية الثرمومترية التي يعتمد عليها عمل المزدوج الحراري (Thermocouple) في قياس درجات الحرارة المرتفعة؟',
          textEn: 'What thermometric property enables thermocouple operations for high-temperature measurements?',
          optionsAr: ['تولد قوة دافعة كهربائية (تأثير سيبيك)', 'تمدد حجم السائل في أنبوبة شعرية', 'تغير ضغط الغاز المحصور عند ثبوت الحجم', 'تغير معامل التمدد السطحي'],
          optionsEn: ['Thermoelectric EMF generation (Seebeck effect)', 'Liquid volume expansion in capillary', 'Gas pressure variation at constant volume', 'Surface expansion variation'],
          correctIndex: 0,
          conceptTestedAr: 'أنواع الترمومترات وخواصها الفيزيائية',
          conceptTestedEn: 'Thermocouple thermometric property',
          explanationAr: 'المزدوج الحراري يعتمد على ظاهرة سيبيك الكهروحرارية، حيث تتولد قوة دافعة كهربية صغيرة ناتجة عن فرق درجات الحرارة بين نقطتي اتصال معدنين مختلفين.',
          explanationEn: 'Thermocouples operate via the Seebeck thermoelectric effect where temperature gradient across junctions generates proportional voltage.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
