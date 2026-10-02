import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL CHEMISTRY — GRADE 10 (كيمياء الصف الأول الثانوي - لغات وعربي)
// Official Grade 10 / Secondary 1 National Ministry & Language School Curriculum Alignment:
// Unit 1: Chemistry & Measurement (Chemistry the Central Science, Lab Tools, Nanochemistry & Nanomaterials)
// Unit 2: Quantitative Chemistry (The Mole Concept, Avogadro's Number & Law, Molar Volume at STP)
// Unit 3: Chemical Stoichiometry (Limiting Reactants, Empirical & Molecular Formulas, Percentage Yield)
// Unit 4: Solutions & Acids/Bases (Solubility, Molarity & Molality, Arrhenius & Brønsted-Lowry & Lewis Theories)
// Unit 5: Thermochemistry & Nuclear Chemistry (Enthalpy ΔH, Specific Heat, Hess's Law & Nuclear Binding Energy)
// ============================================================================

export const HIGH_CHEMISTRY_G10_LECTURES: Lecture[] = [
  // ── LECTURE 1: CHEMISTRY, MEASUREMENT & NANOCHEMISTRY ──
  {
    id: 'h10-chem-1',
    order: 1,
    titleAr: 'المحاضرة 1: الكيمياء مركز العلوم، أدوات القياس المعملي، وتكنولوجيا النانو',
    titleEn: 'Lecture 1: Chemistry the Central Science, Laboratory Tools & Nanotechnology',
    subtitleAr: 'أهمية القياس في الكيمياء، أدوات المختبر الكيميائي، والمقياس النانوي وخواص المواد النانوية الفريدة (أنابيب الكربون وكرات البوكي)',
    subtitleEn: 'Master chemistry as the central science, precision laboratory instruments (burettes, pipettes, volumetric flasks), the nanoscale, and unique size-dependent nanomaterial properties.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الباب الأول: الكيمياء مركز العلوم وتكنولوجيا النانو',
    unitTitleEn: 'Unit 1: Chemistry the Central Science & Nanotechnology',
    lessonNumberAr: 'الدرس 1: أدوات القياس وكيمياء النانو',
    lessonNumberEn: 'Lesson 1: Chemical Measurement & Nanochemistry',

    warmupHookAr: 'هل تعلم أن الذهب الأصفر اللامع يتحول إلى اللون الأحمر والياقوتي والأزرق عندما يتفتت إلى دقائق بحجم النانو (أقل من 100 نانومتر)؟ وأن أنابيب الكربون النانوية أرفع من شعرة الإنسان بآلاف المرات لكنها أقوى من الفولاذ الصلب وتوصيلها للكهرباء يفوق النحاس؟ كيمياء النانو ليست مجرد تصغير للمادة، بل هي ثورة علمية تُغير الخواص الفيزيائية والكيميائية لتطوير روبوتات دقيقة تُعالج الخلايا السرطانية دون المساس بالخلايا السليمة!',
    warmupHookEn: 'Gold turns red and blue when shrunk to the nanoscale, and carbon nanotubes are stronger than steel while lighter than aluminum! Nanochemistry unlocks unprecedented physical and chemical properties that revolutionize targeted cancer therapy and renewable energy.',

    learningOutcomesAr: [
      'أن يوضح الطالب تكامل علم الكيمياء مع العلوم الأخرى (الفيزياء، الأحياء، الطب، الصيدلة، والزراعة)',
      'أن يميز بين أدوات القياس المعملية: الميزان الحساس، السحاحة (Burette)، الماصة (Pipette)، والدوارق (المخروطي، المستدير، والعياري)',
      'أن يفسر ظهور الخواص الفريدة المعتمدة على الحجم (Size-dependent properties) بزيادة النسبة بين مساحة السطح إلى الحجم',
      'أن يصنف المواد النانوية إلى أحادية البعد (الأغشية الرقيقة)، ثنائية البعد (أنابيب الكربون)، وثلاثية البعد (كرات البوكي C₆₀ وصدفة النانو)'
    ],
    learningOutcomesEn: [
      'Explain how chemistry integrates with biology, physics, medicine, pharmacy, and agriculture',
      'Distinguish laboratory apparatus: analytical balances, burettes, pipettes, conical and volumetric flasks',
      'Interpret size-dependent nanomaterial properties via the high surface area to volume ratio',
      'Classify nanomaterials into 1D (thin films), 2D (carbon nanotubes), and 3D structures (Buckyballs C₆₀ and nanoshells)'
    ],

    vocabulary: [
      {
        termAr: 'المقياس النانوي (Nanoscale)',
        termEn: 'Nanoscale',
        definitionAr: 'مقياس الجسيمات متناهية الصغر التي تقع أبعادها بين 1 إلى 100 نانومتر (1 nm = 10⁻⁹ m).',
        definitionEn: 'The scale of microscopic particles having dimensions between 1 and 100 nanometers.'
      },
      {
        termAr: 'الحجم النانوي الحرج (Critical Nanoscale Volume)',
        termEn: 'Critical Nanoscale Volume',
        definitionAr: 'الحجم الذي تظهر عنده الخواص النانوية الفريدة والجديدة للمادة والتي لم تكن موجودة في الحجم الماكرو أو الميكرو.',
        definitionEn: 'The volume threshold at which unique, unexpected nano-properties emerge due to ultra-high surface-area-to-volume ratio.'
      },
      {
        termAr: 'كرة البوكي (Buckyball C₆₀)',
        termEn: 'Buckyball C₆₀',
        definitionAr: 'جزيء نانوي ثلاثي الأبعاد يتكون من 60 ذرة كربون مرتبطة في شكل كرة قدم مجوفة، ويستخدم كحامل فائق الدقة لنقل جزيئات الدواء للأنسجة المصابة.',
        definitionEn: 'A hollow, spherical 3D nanomaterial made of 60 carbon atoms acting as targeted drug delivery capsules.'
      }
    ],

    keyConceptsAr: [
      'الكيمياء والبيولوجيا ينتج عنهما الكيمياء الحيوية (Biochemistry) لدراسة مكونات الخلية (الدهون، الكربوهيدرات، البروتينات، والأحماض النووية)',
      'السحاحة أداة مدرجة من أعلى لأسفل وتستخدم في عمليات المعايرة (Titration) لتعيين تركيز محلول بدقة',
      'الدورق العياري (Volumetric Flask) يستخدم لتحضير المحاليل القياسية معلومة التركيز بدقة فائقة',
      'كلما صغرت أبعاد المادة النانوية، زادت النسبة بين مساحة السطح المعرض للتفاعل إلى الحجم زيادة هائلة، مما يزيد سرعة التفاعلات الكيميائية ويكسب المادة صلابة وتوصيلاً فائقين',
      'تطبيقات النانو: مرشحات نانوية لتنقية المياه، خلايا شمسية بنانوسيليكون، وأنابيب كربون نانوية لأجهزة الاستشعار البيولوجية'
    ],
    keyConceptsEn: [
      'Biochemistry merges chemistry and biology to study cell macromolecules',
      'Burette graduated from top to bottom, used in quantitative acid-base titrations',
      'Volumetric flask prepared for standard solutions of exact molar concentration',
      'Ultra-high surface area to volume ratio drastically accelerates chemical reactivity',
      '1D, 2D, and 3D nanomaterial classifications and medical drug targeting'
    ],

    summaryAr: 'تغطي هذه المحاضرة الباب الأول من منهج الصف الأول الثانوي: مكانة الكيمياء كمركز للعلوم، أدوات القياس المعملية الدقيقة واستخداماتها، والمفاهيم الأساسية لكيمياء النانو والمواد أحادية وثنائية وثلاثية الأبعاد النانوية وتطبيقاتها الطبية والصناعية.',
    summaryEn: 'Comprehensive Grade 10 lecture covering Chemistry as the central science, laboratory measurement equipment, the nanoscale, and 1D/2D/3D nanomaterials.',

    sections: [
      {
        titleAr: '1. الكيمياء مركز العلوم وأدوات القياس المعملية',
        titleEn: '1. Chemistry Central Science & Laboratory Tools',
        contentAr: '1) أهمية الكيمياء وفروعها:\n- ترتبط الكيمياء بالفيزياء (الكيمياء الفيزيائية)، وبالأحياء (الكيمياء الحيوية لتفسير تفاعلات التنفس والبناء الضوئي)، وبالطب والصيدلة (تفسير عمل الإنزيمات وتخليق الأدوية).\n\n2) أدوات القياس الأساسية في مختبر الكيمياء:\n- الميزان الحساس الرقمي: قياس الكتل بدقة.\n- السحاحة (Burette): أنبوبة زجاجية مفتوحة الطرفين صمامها بالأسفل، صفر تدريجها قريب من الفتحة العليا، وتستخدم في تجارب المعايرة (Titration).\n- الكأس الزجاجي (Beaker): نقل وخلط السوائل وقياس حجوم تقريبية.\n- المخبار المدرج (Graduated Cylinder): قياس حجوم السوائل بدقة أعلى من الكؤوس، وقياس حجم جسم صلب غير منتظم لا يذوب في الماء.\n- الدورق المخروطي (Conical Flask): يستخدم في عمليات المعايرة.\n- الدورق المستدير (Round-bottom Flask): يستخدم في عمليات التحضير والتقطير.\n- الدورق العياري (Volumetric Flask): يحتوي على علامة تحدد سعة الحجم بدقة لتحضير المحاليل القياسية (Standard Solutions).\n- الماصة (Pipette): نقل حجوم مضبوطة ومزودة بأداة شفط للسوائل شديدة الخطورة.\n- جهاز الـ pH الرقمي: قياس الأس الهيدروجيني للمحاليل (حامضي < 7، متعادل = 7، قاعدي > 7).',
        contentEn: 'Chemistry is the central science linking biology, physics, and medicine. Laboratory tools include burettes (titration), graduated cylinders (liquid volume), volumetric flasks (standard solutions), and pH meters.'
      },
      {
        titleAr: '2. كيمياء النانو والمواد النانوية الفريدة',
        titleEn: '2. Nanochemistry & Size-Dependent Properties',
        contentAr: '1) مقياس النانو والخواص الفريدة:\n- النانومتر = 10⁻⁹ متر. عندما تتجزأ المادة إلى الحجم النانوي (1 - 100 nm)، تزداد النسبة بين مساحة السطح إلى الحجم زيادة هائلة.\n- النتيجة: سرعة التفاعل تزداد جداً، والخواص الفيزيائية (كاللون والصلابة والانصهار) تتغير جذرياً (مثل نانو الذهب ونانو النحاس الأكثر صلابة).\n\n2) تصنيف المواد النانوية:\n- مواد أحادية البعد النانوي (1D): مثل الأغشية الرقيقة (Thin Films) لطلاء المعادن لحمايتها من الصدأ وحفظ الأغذية، والأسلاك النانوية للدوائر الإلكترونية، والألياف النانوية لمرشحات المياه.\n- مواد ثنائية البعد النانوي (2D): مثل أنابيب الكربون النانوية (Carbon Nanotubes - CNTs) أحادية ومتعددة الجدر، وتتميز بصلابة تفوق الصلب، وقدرة توصيل كهربي أعلى من النحاس، وتوصيل حراري أعلى من الماس، والارتباط ببروتينات الدم.\n- مواد ثلاثية البعد النانوي (3D): مثل كرة البوكي (C₆₀ Buckyball) المجوفة التي تحمل الأدوية إلى داخل الخلايا المصابة، وصدفة النانو (Nano-shells) المستخدمة في علاج السرطان.',
        contentEn: 'Nanomaterials possess unique size-dependent properties due to ultra-high surface-area-to-volume ratio. Classification: 1D (thin films, nanowires), 2D (carbon nanotubes), 3D (Buckyballs C₆₀, nanoshells).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-chem1-1',
        questionAr: 'علل: تزداد سرعة تفاعل مكعب من السكر عند تفتيته إلى مسحوق ناعم مع الماء مقارنة بكتلته وهو قطعة واحدة؟',
        questionEn: 'Explain why powdered sugar dissolves much faster in water than a single sugar cube of the same mass?',
        solutionStepsAr: [
          'الخطوة 1: عند تفتيت المادة إلى جزيئات دقيقة يزداد عدد الجزيئات المعرضة لسطح التفاعل مع جزيئات المذيب (الماء).',
          'الخطوة 2: النسبة بين مساحة السطح الكلية إلى الحجم تزداد زيادة هائلة في حالة المسحوق.',
          'الخطوة 3: زيادة مساحة السطح تزيد من فرص التصادمات الفعالة مما يؤدي لزيادة سرعة الذوبان والتفاعل الكيميائي.'
        ],
        solutionStepsEn: [
          'Step 1: Crushing the substance exposes internal particles to the solvent.',
          'Step 2: The surface area to volume ratio increases dramatically.',
          'Step 3: Increased surface contact allows higher collision rates, speeding up dissolution.'
        ],
        answerAr: 'لأن تفتيت المادة يزيد النسبة بين مساحة السطح الكلية المعرضة للتفاعل إلى الحجم، مما يزيد من عدد الجزيئات المتفاعلة وسرعة التفاعل.',
        answerEn: 'Because pulverizing the substance vastly increases the surface-area-to-volume ratio, maximizing reactive collisions.'
      }
    ],

    assessment: {
      id: 'quiz-h10-chem-1',
      lectureId: 'h10-chem-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: أدوات القياس وتكنولوجيا النانو (1 ثانوي)',
      titleEn: 'Mastery Quiz 1: Chemical Measurement & Nanotechnology (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-c1-1',
          textAr: 'أي من الأدوات المعملية التالية يبدأ تدريجها من أعلى إلى أسفل وتستخدم بدقة في عمليات المعايرة؟',
          textEn: 'Which laboratory apparatus has its zero graduation near the top and is used in acid-base titration?',
          optionsAr: ['السحاحة (Burette)', 'المخبار المدرج (Graduated Cylinder)', 'الكأس الزجاجي (Beaker)', 'الدورق العياري (Volumetric Flask)'],
          optionsEn: ['Burette', 'Graduated Cylinder', 'Beaker', 'Volumetric Flask'],
          correctIndex: 0,
          conceptTestedAr: 'أدوات القياس المعملية وتدريج السحاحة',
          conceptTestedEn: 'Burette graduation and titration',
          explanationAr: 'السحاحة هي أنبوبة زجاجية مفتوحة الطرفين صفر تدريجها يقع بالقرب من الفتحة العليا وتستخدم لتعيين حجوم السوائل المستهلكة في المعايرة بدقة.',
          explanationEn: 'The burette is graduated from top (zero mark) to bottom and used for precise liquid volume delivery in titrations.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c1-2',
          textAr: 'تتميز كرة البوكي (Buckyball C₆₀) بأنها من المواد النانوية:',
          textEn: 'Buckyball (C₆₀) is classified as a nanomaterial with:',
          optionsAr: ['ثلاثية الأبعاد النانوية (3D)', 'ثنائية الأبعاد النانوية (2D)', 'أحادية البعد النانوي (1D)', 'عديمة الأبعاد النانوية'],
          optionsEn: ['3-Dimensional (3D)', '2-Dimensional (2D)', '1-Dimensional (1D)', 'Non-nanomaterial'],
          correctIndex: 0,
          conceptTestedAr: 'تصنيف المواد النانوية ثلاثية الأبعاد',
          conceptTestedEn: '3D Nanomaterial classification',
          explanationAr: 'كرة البوكي C₆₀ تمتلك 3 أبعاد على مقياس النانو (الطول والعرض والارتفاع < 100 nm)، لذا فهي مادة ثلاثية الأبعاد النانوية.',
          explanationEn: 'All 3 spatial dimensions of a Buckyball fall within the nanoscale (1-100 nm), making it a 3D nanomaterial.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c1-3',
          textAr: 'أداة زجاجية تستخدم لتحضير المحاليل القياسية معلومة الحجم والتركيز بدقة فائقة هي:',
          textEn: 'A specific laboratory flask used to prepare standard solutions of exact concentration is the:',
          optionsAr: ['الدورق العياري (Volumetric Flask)', 'الدورق المخروطي (Conical Flask)', 'الدورق المستدير (Round Flask)', 'المخبار المدرج'],
          optionsEn: ['Volumetric Flask', 'Conical Flask', 'Round Flask', 'Graduated Cylinder'],
          correctIndex: 0,
          conceptTestedAr: 'استخدام الدورق العياري في المحاليل القياسية',
          conceptTestedEn: 'Volumetric flask for standard solutions',
          explanationAr: 'الدورق العياري يحتوي على علامة محددة على عنقه تشير إلى سعته الدقيقة، ويستخدم لتحضير المحاليل القياسية بدقة متناهية.',
          explanationEn: 'The volumetric flask features a single graduation mark for preparing high-precision standard molar solutions.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c1-4',
          textAr: 'السبب العلمي الرئيسي لاكتساب المواد النانوية خواصاً كيميائية وفيزيائية فائقة عند وصولها للحجم النانوي الحرج هو:',
          textEn: 'The fundamental scientific reason behind extraordinary nanoscale properties is:',
          optionsAr: [
            'الزيادة الهائلة في النسبة بين مساحة السطح إلى الحجم',
            'نقصان عدد الذرات على السطح الخارجي',
            'تحول المادة إلى شحنات كهربية فقط',
            'انخفاض درجة حرارة المادة تلقائياً'
          ],
          optionsEn: [
            'Tremendous increase in surface-area-to-volume ratio',
            'Decrease in external surface atom count',
            'Conversion entirely into free electrical charges',
            'Spontaneous drop in material temperature'
          ],
          correctIndex: 0,
          conceptTestedAr: 'علاقة مساحة السطح بالحجم في مقياس النانو',
          conceptTestedEn: 'Surface-area-to-volume ratio in nanochemistry',
          explanationAr: 'عند تفتيت المادة لحجم النانو يزداد عدد الذرات المعرضة على السطح الخارجي وتزداد نسبة مساحة السطح للحجم زيادة هائلة مما يغير الخواص تماماً.',
          explanationEn: 'Vastly increased surface atoms per unit volume enhance chemical activity and unlock novel quantum mechanical properties.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c1-5',
          textAr: 'تستخدم أنابيب الكربون النانوية (Carbon Nanotubes) في صناعة أجهزة الاستشعار البيولوجية نظراً لقدرتها على:',
          textEn: 'Carbon nanotubes are utilized in biological biosensors because they:',
          optionsAr: [
            'الارتباط بسهولة مع جزيئات البروتينات الحيوية وتوصيل الكهرباء',
            'الذوبان السريع في الماء والأحماض',
            'التمدد بالحرارة والانكماش بالبرودة',
            'التحول إلى غاز عند درجة حرارة الغرفة'
          ],
          optionsEn: [
            'Easily bind with specific biological proteins and conduct electricity',
            'Rapidly dissolve in water and strong acids',
            'Expand under heat and contract when cold',
            'Evaporate into gas at standard room temperature'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات أنابيب الكربون النانوية',
          conceptTestedEn: 'Carbon nanotube biosensor applications',
          explanationAr: 'أنابيب الكربون النانوية ترتبط بالبروتينات ولها حساسية كهربائية فائقة لجزيئات حيوية معينة مما يجعلها مجسات حيوية استثنائية.',
          explanationEn: 'CNTs possess high electrical conductivity and selective protein binding affinity, ideal for molecular biosensing.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: QUANTITATIVE CHEMISTRY & THE MOLE CONCEPT ──
  {
    id: 'h10-chem-2',
    order: 2,
    titleAr: 'المحاضرة 2: الكيمياء الكمية: مفهوم المول، عدد أفوجادرو، والحجم المولي للغازات',
    titleEn: 'Lecture 2: Quantitative Chemistry: The Mole, Avogadro\'s Number & Molar Gas Volume',
    subtitleAr: 'الكتلة المولية، حساب عدد المولات والجزيئات والأيونات، وقانون وحجم أفوجادرو للغازات عند الظروف القياسية (STP)',
    subtitleEn: 'Master molar mass, mole calculations, Avogadro\'s number (6.022 × 10²³), and molar volume of ideal gases at STP (22.4 L/mol).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الباب الثاني: الكيمياء الكمية والحساب الكيميائي',
    unitTitleEn: 'Unit 2: Quantitative Chemistry & Stoichiometry',
    lessonNumberAr: 'الدرس 1: المول والكتلة المولية وحجم الغازات',
    lessonNumberEn: 'Lesson 1: The Mole, Molar Mass & Gas Laws',

    warmupHookAr: 'تخيل أن لديك كوباً من الماء يحتوي على 18 جراماً فقط. هل تعلم أن هذا الكوب الصغير يحتوي على أكثر من ستمائة ألف مليار مليار جزيء ماء ($6.02 \times 10^{23}$ جزيء)؟! يستحيل على العلماء وزن ذرة أو جزيء منفرد في المختبر، لذلك ابتكر علماء الكيمياء مفهوم "المول" كوحدة قياس دولية تربط بين العالم المجهري متناهي الصغر والعالم المرئي في ميزان المختبر!',
    warmupHookEn: '18 grams of water contains 602,000,000,000,000,000,000,000 molecules! The mole bridges the atomic sub-microscopic world with macroscopic laboratory measurements.',

    learningOutcomesAr: [
      'أن يحسب الطالب الكتلة المولية (Molar Mass) للمركبات الكيميائية بوحدة g/mol',
      'أن يطبق العلاقة الرياضية لحساب عدد المولات: $n = \\frac{\\text{الكتلة بالجرام}}{\\text{الكتلة المولية}}$',
      'أن يحسب عدد الجزيئات، الذرات، والأيونات باستخدام عدد أفوجادرو ($N_A = 6.02 \\times 10^{23}$)',
      'أن يحسب حجم الغاز عند الظروف القياسية من الضغط ودرجة الحرارة (STP): $V = n \\times 22.4\\text{ L}$ ويميز بين قانون أفوجادرو وفرض أفوجادرو'
    ],
    learningOutcomesEn: [
      'Calculate molar masses of chemical formulas in g/mol',
      'Calculate moles via mass formula: n = mass (g) / molar mass (g/mol)',
      'Compute atoms, molecules, and ions using Avogadro\'s number (6.02 × 10²³)',
      'Determine gas volumes at STP using V = n × 22.4 L and apply Avogadro\'s law/hypothesis'
    ],

    vocabulary: [
      {
        termAr: 'المول (The Mole)',
        termEn: 'The Mole',
        definitionAr: 'وحدة قياس كمية المادة في النظام الدولي، وتساوي كمية المادة التي تحتوي على عدد أفوجادرو ($6.02 \\times 10^{23}$) من الجسيمات (ذرات، جزيئات، أو أيونات).',
        definitionEn: 'The SI unit for amount of substance containing exactly 6.022 × 10²³ elementary entities.'
      },
      {
        termAr: 'عدد أفوجادرو (Avogadro\'s Number)',
        termEn: 'Avogadro\'s Number',
        definitionAr: 'عدد ثابت يمثل عدد الذرات أو الجزيئات أو الأيونات الموجودة في مول واحد من أي مادة، ويساوي $6.02 \\times 10^{23}$.',
        definitionEn: 'A fundamental constant representing the number of particles in 1 mole of substance (6.022 × 10²³).'
      },
      {
        termAr: 'الظروف القياسية (STP)',
        termEn: 'Standard Temperature and Pressure (STP)',
        definitionAr: 'ظروف معيارية للغازات تعادل درجة حرارة $0^\\circ\\text{C}$ (273 K) وضغط جوي مقداره $1\\text{ atm}$ (760 mmHg)، ويشغل فيها 1 مول من أي غاز حجماً قدره $22.4\\text{ L}$.',
        definitionEn: 'Standard conditions: 0°C (273 K) and 1 atm (760 mmHg), where 1 mole of any ideal gas occupies 22.4 liters.'
      }
    ],

    keyConceptsAr: [
      'قانون المول والكتلة: $\\text{عدد المولات (n)} = \\frac{\\text{كتلة المادة (m)}}{\\text{الكتلة المولية (M)}}$',
      'قانون عدد الجسيمات: $\\text{عدد الجسيمات} = \\text{عدد المولات} \\times (6.02 \\times 10^{23})$',
      'قانون حجم الغاز عند STP: $\\text{حجم الغاز (L)} = \\text{عدد المولات} \\times 22.4\\text{ L/mol}$',
      'فرض أفوجادرو: الحجوم المتساوية من الغازات المختلفة تحت نفس الظروف من الضغط ودرجة الحرارة تحتوي على أعداد متساوية من الجزيئات',
      'قانون أفوجادرو: يتناسب حجم الغاز طردياً مع كميته (عدد مولاته) عند ثبوت الضغط ودرجة الحرارة ($V \\propto n$)'
    ],
    keyConceptsEn: [
      'Mole-Mass formula: n = m / M',
      'Particle counting formula: Number of particles = n × (6.02 × 10²³)',
      'Gas Volume formula at STP: Volume (L) = n × 22.4 L/mol',
      'Avogadro\'s Hypothesis: Equal gas volumes at same T & P contain equal numbers of molecules',
      'Avogadro\'s Law: Gas volume is directly proportional to moles at constant T and P (V ∝ n)'
    ],

    summaryAr: 'الكيمياء الكمية تترجم الكتل إلى مولات وجسيمات، والمول هو الرابط الرياضي الأساسي؛ حيث يربط بين كتلة المادة بالجرام، عدد جسيماتها عبر عدد أفوجادرو، وحجمها الغازي عند STP (22.4 لتر لكل مول).',
    summaryEn: 'Quantitative chemistry links mass, moles, particles (Avogadro\'s number 6.02 × 10²³), and molar volume of gases at STP (22.4 L/mol).',

    sections: [
      {
        titleAr: '1. الكتلة المولية وحساب عدد الجسيمات',
        titleEn: '1. Molar Mass & Particle Calculations',
        contentAr: '1) الكتلة المولية (Molar Mass):\n- هي مجموع الكتل الذرية للعناصر المكونة للجزئ أو وحدة الصيغة معبراً عنها بوحدة g/mol.\n- مثال: الكتلة المولية لغاز ثاني أكسيد الكربون $CO_2$:\n  $M = 12 + (2 \\times 16) = 44\\text{ g/mol}$.\n\n2) حساب عدد الجسيمات (ذرات، جزيئات، أيونات):\n- $\\text{عدد الجسيمات} = \\text{عدد المولات} \\times 6.02 \\times 10^{23}$.\n- مثال: احسب عدد جزيئات الماء في $36\\text{ g}$ من الماء $H_2O$ (حيث $H=1, O=16$):\n  * الكتلة المولية للماء $= (2 \\times 1) + 16 = 18\\text{ g/mol}$.\n  * عدد مولات الماء $= \\frac{36}{18} = 2\\text{ mol}$.\n  * عدد جزيئات الماء $= 2 \\times 6.02 \\times 10^{23} = 1.204 \\times 10^{24}\\text{ molecule}$.',
        contentEn: 'Molar mass is the sum of atomic masses in g/mol. Particle count = moles × 6.02 × 10²³.'
      },
      {
        titleAr: '2. حجم الغاز وقوانين أفوجادرو عند STP',
        titleEn: '2. Gas Volumes at STP & Avogadro\'s Laws',
        contentAr: '1) الحجم المولي للغازات (Molar Volume at STP):\n- يشغل المول الواحد من أي غاز حجماً ثابتاً قدره $22.4\\text{ L}$ عند الظروف القياسية (STP: $0^\\circ\\text{C}$ و $1\\text{ atm}$).\n- $\\text{حجم الغاز (L)} = \\text{عدد المولات} \\times 22.4$.\n\n2) كثافة الغاز (Gas Density at STP):\n- $\\text{كثافة الغاز (g/L)} = \\frac{\\text{الكتلة المولية للغاز (g/mol)}}{22.4\\text{ L/mol}}$.\n- مثال: احسب حجم $11\\text{ g}$ من غاز $CO_2$ عند STP:\n  * عدد المولات $= \\frac{11}{44} = 0.25\\text{ mol}$.\n  * الحجم عند STP $= 0.25 \\times 22.4 = 5.6\\text{ L}$.',
        contentEn: '1 mole of any gas at STP occupies 22.4 L. Gas density = Molar Mass / 22.4 L. Volume = n × 22.4 L.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-chem2-1',
        questionAr: 'احسب عدد أيونات الصوديوم $+Na^+$ الناتجة من إذابة $11.7\\text{ g}$ من كلوريد الصوديوم $NaCl$ في الماء تماماً؟ (علماً بأن $Na=23, Cl=35.5$)',
        questionEn: 'Calculate the total number of Na⁺ ions produced when 11.7 g of NaCl dissolves completely in water (Na=23, Cl=35.5)?',
        solutionStepsAr: [
          'الخطوة 1: حساب الكتلة المولية لـ NaCl = 23 + 35.5 = 58.5 g/mol.',
          'الخطوة 2: حساب عدد مولات NaCl = 11.7 / 58.5 = 0.2 mol.',
          'الخطوة 3: معادلة التفكك: NaCl ⟹ Na⁺ + Cl⁻، إذن 1 مول من NaCl يعطي 1 مول من أيونات Na⁺.',
          'الخطوة 4: عدد أيونات الصوديوم = عدد المولات × عدد أفوجادرو = 0.2 × (6.02 × 10²³) = 1.204 × 10²³ أيون.'
        ],
        solutionStepsEn: [
          'Step 1: Molar mass of NaCl = 23 + 35.5 = 58.5 g/mol.',
          'Step 2: Moles of NaCl = 11.7 / 58.5 = 0.2 mol.',
          'Step 3: Dissociation: 1 mol NaCl produces 1 mol Na⁺ ions.',
          'Step 4: Total Na⁺ ions = 0.2 × 6.02 × 10²³ = 1.204 × 10²³ ions.'
        ],
        answerAr: 'عدد أيونات الصوديوم = 1.204 × 10²³ أيون Na⁺.',
        answerEn: 'Total sodium ions = 1.204 × 10²³ Na⁺ ions.'
      }
    ],

    assessment: {
      id: 'quiz-h10-chem-2',
      lectureId: 'h10-chem-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: المول وعدد أفوجادرو وحجم الغازات (1 ثانوي)',
      titleEn: 'Mastery Quiz 2: Moles, Avogadro\'s Constant & Gas Stoichiometry',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-c2-1',
          textAr: 'ما هو حجم $0.5\\text{ mol}$ من غاز الأكسجين $O_2$ عند الظروف القياسية (STP)؟',
          textEn: 'What is the volume occupied by 0.5 mol of oxygen gas (O₂) at STP?',
          optionsAr: ['11.2 L', '22.4 L', '5.6 L', '44.8 L'],
          optionsEn: ['11.2 L', '22.4 L', '5.6 L', '44.8 L'],
          correctIndex: 0,
          conceptTestedAr: 'حساب حجم الغاز عند STP',
          conceptTestedEn: 'Molar volume calculation at STP',
          explanationAr: 'حجم الغاز عند STP = عدد المولات × 22.4 L = 0.5 × 22.4 = 11.2 لتر.',
          explanationEn: 'Volume at STP = n × 22.4 L = 0.5 × 22.4 = 11.2 L.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c2-2',
          textAr: 'عينة من غاز الميثان $CH_4$ كتلتها $8\\text{ g}$ (حيث $C=12, H=1$). كم يكون عدد جزيئات الميثان في العينة؟',
          textEn: 'A sample contains 8 g of methane CH₄ (C=12, H=1). How many methane molecules are present?',
          optionsAr: ['3.01 × 10²³ جزيء', '6.02 × 10²³ جزيء', '1.204 × 10²⁴ جزيء', '1.505 × 10²³ جزيء'],
          optionsEn: ['3.01 × 10²³ molecules', '6.02 × 10²³ molecules', '1.204 × 10²⁴ molecules', '1.505 × 10²³ molecules'],
          correctIndex: 0,
          conceptTestedAr: 'حساب عدد الجزيئات بمعلومية الكتلة',
          conceptTestedEn: 'Mole to molecule conversion',
          explanationAr: 'الكتلة المولية لـ CH₄ = 12 + 4(1) = 16 g/mol. عدد المولات = 8 / 16 = 0.5 mol. عدد الجزيئات = 0.5 × (6.02 × 10²³) = 3.01 × 10²³ جزيء.',
          explanationEn: 'Molar mass = 16 g/mol. Moles = 8/16 = 0.5 mol. Molecules = 0.5 × 6.02 × 10²³ = 3.01 × 10²³.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c2-3',
          textAr: 'نص الفرض العلمي الذي ينص على أن: "الحجوم المتساوية من الغازات المختلفة عند نفس الضغط ودرجة الحرارة تحتوي على نفس عدد الجزيئات" هو:',
          textEn: 'The scientific hypothesis stating that equal volumes of gases at the same T & P contain equal molecule counts is:',
          optionsAr: ['فرض أفوجادرو (Avogadro\'s Hypothesis)', 'قانون بويل (Boyle\'s Law)', 'قانون شارل (Charles\'s Law)', 'قانون النسب الثابتة'],
          optionsEn: ['Avogadro\'s Hypothesis', 'Boyle\'s Law', 'Charles\'s Law', 'Law of Constant Proportions'],
          correctIndex: 0,
          conceptTestedAr: 'فرض أفوجادرو للغازات',
          conceptTestedEn: 'Avogadro\'s Hypothesis',
          explanationAr: 'فرض أفوجادرو يربط بين الحجوم المتساوية من الغازات المختلفة وتساوي أعداد الجزيئات تحت نفس شروط الضغط ودرجة الحرارة.',
          explanationEn: 'Avogadro\'s hypothesis relates equal gas volumes directly to equal particle counts.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c2-4',
          textAr: 'ما هي كثافة غاز الأكسجين $O_2$ بوحدة g/L عند الظروف القياسية (STP)؟ (علماً بأن $O=16$)',
          textEn: 'What is the density of oxygen gas O₂ in g/L at STP (O=16)?',
          optionsAr: ['1.43 g/L', '0.71 g/L', '32 g/L', '2.86 g/L'],
          optionsEn: ['1.43 g/L', '0.71 g/L', '32 g/L', '2.86 g/L'],
          correctIndex: 0,
          conceptTestedAr: 'حساب كثافة الغاز عند STP',
          conceptTestedEn: 'Gas density calculation at STP',
          explanationAr: 'الكتلة المولية لـ O₂ = 2 × 16 = 32 g/mol. الكثافة عند STP = الكتلة المولية / 22.4 = 32 / 22.4 ≈ 1.428 g/L (1.43 g/L).',
          explanationEn: 'Density at STP = Molar Mass / 22.4 = 32 / 22.4 = 1.43 g/L.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c2-5',
          textAr: 'مول واحد من غاز ثاني أكسيد الكبريت $SO_2$ يحتوي على عدد ذرات كلي مقداره:',
          textEn: 'One mole of sulfur dioxide gas (SO₂) contains a total atom count of:',
          optionsAr: ['3 × (6.02 × 10²³) ذرة', '1 × (6.02 × 10²³) ذرة', '2 × (6.02 × 10²³) ذرة', '6.02 × 10²³ ذرة'],
          optionsEn: ['3 × (6.02 × 10²³) atoms', '1 × (6.02 × 10²³) atoms', '2 × (6.02 × 10²³) atoms', '6.02 × 10²³ atoms'],
          correctIndex: 0,
          conceptTestedAr: 'حساب عدد الذرات في المول من مركب متعدد الذرات',
          conceptTestedEn: 'Total atom counting in molecular compounds',
          explanationAr: 'جزيء SO₂ يتكون من 1 ذرة كبريت + 2 ذرة أكسجين = 3 ذرات في الجزيء الواحد. إذن 1 مول من SO₂ يحتوي على 3 مول من الذرات = 3 × 6.02 × 10²³ ذرة.',
          explanationEn: 'Each SO₂ molecule has 3 atoms (1 S + 2 O), so 1 mole contains 3 × 6.02 × 10²³ total atoms.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: STOICHIOMETRY, FORMULAS & LIMITING REACTANTS ──
  {
    id: 'h10-chem-3',
    order: 3,
    titleAr: 'المحاضرة 3: الحسابات الكيميائية، المادة المحددة للتفاعل، والصيغ الكيميائية',
    titleEn: 'Lecture 3: Chemical Calculations, Limiting Reactants & Chemical Formulas',
    subtitleAr: 'حساب النسبة المئوية الكتلية، تعيين الصيغة الأولية والجزيئية، تحديد العامل المحدد للتفاعل، وحساب النسبة المئوية للناتج الفعلي',
    subtitleEn: 'Master mass percentage, empirical & molecular formula deduction, limiting reactant identification, and actual vs theoretical percentage yield.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الباب الثاني: الكيمياء الكمية والحساب الكيميائي',
    unitTitleEn: 'Unit 2: Quantitative Chemistry & Stoichiometry',
    lessonNumberAr: 'الدرس 2: المادة المحددة والصيغ الكيميائية والناتج الفعلي',
    lessonNumberEn: 'Lesson 2: Stoichiometric Formulas & Percentage Yield',

    warmupHookAr: 'في مصانع الأدوية والأسمدة، لا يُهدر المهندسون الكيميائيون جراماً واحداً من المواد الخام! عندما يتفاعل غاز النيتروجين مع الهيدروجين لإنتاج النشادر، إذا نفدت إحدى المادتين قبل الأخرى يتوقف التفاعل فوراً وتسمى "المادة المحددة للتفاعل". كما أن كمية الدواء الناتجة فعلياً في المختبر تكون دائماً أقل من المحسوبة نظرياً على الورق بسبب التطاير أو الشوائب. كيف يحسب الكيميائيون كفاءة الإنتاج بدقة؟',
    warmupHookEn: 'In pharmaceutical manufacturing, reactions halt as soon as the limiting reactant is exhausted. Furthermore, actual yield rarely reaches 100% theoretical yield due to impurities and side reactions.',

    learningOutcomesAr: [
      'أن يحسب الطالب النسبة المئوية الكتلية لكل عنصر في المركب الكيميائي',
      'أن يستنتج الصيغة الأولية (Empirical Formula) والصيغة الجزيئية (Molecular Formula) لمركب مجهول',
      'أن يحدد المادة المحددة للتفاعل (Limiting Reactant) التي تستهلك تماماً وتحدد كمية النواتج',
      'أن يحسب النسبة المئوية للناتج الفعلي: $\\text{النسبة المئوية} = \\frac{\\text{الناتج الفعلي}}{\\text{الناتج النظري}} \\times 100\\%$ ويفسر أسباب نقص الناتج الفعلي'
    ],
    learningOutcomesEn: [
      'Calculate mass percentage of each constituent element in a compound',
      'Deduce empirical and molecular formulas from mass/percentage composition and molar mass',
      'Identify the limiting reactant that is completely consumed and dictates theoretical yield',
      'Calculate percentage yield = (Actual Yield / Theoretical Yield) × 100% and explain discrepancies'
    ],

    vocabulary: [
      {
        termAr: 'المادة المحددة للتفاعل (Limiting Reactant)',
        termEn: 'Limiting Reactant',
        definitionAr: 'المادة المتفاعلة التي تستهلك تماماً أثناء التفاعل الكيميائي وتنتج أقل عدد من مولات المادة الناتجة.',
        definitionEn: 'The reactant completely consumed first in a chemical reaction, limiting the amount of product formed.'
      },
      {
        termAr: 'الصيغة الأولية (Empirical Formula)',
        termEn: 'Empirical Formula',
        definitionAr: 'صيغة تعبر عن أبسط نسبة عددية صحيحة بين ذرات العناصر المكونة لمركب كيميائي.',
        definitionEn: 'The simplest whole-number ratio of atoms of each element present in a compound.'
      },
      {
        termAr: 'الناتج الفعلي والناتج النظري (Actual & Theoretical Yield)',
        termEn: 'Actual & Theoretical Yield',
        definitionAr: 'الناتج النظري: كمية المادة الناتجة المحسوبة رياضياً من معادلة التفاعل. الناتج الفعلي: كمية المادة التي يتم الحصول عليها عملياً في المختبر ويكون دائماً أقل من النظري.',
        definitionEn: 'Theoretical yield is mathematically calculated; actual yield is the measured laboratory output (always ≤ theoretical).'
      }
    ],

    keyConceptsAr: [
      'خطوات إيجاد الصيغة الأولية: 1) كتابة الكتل أو النسب، 2) القسمة على الكتل الذرية لإيجاد المولات، 3) القسمة على أصغر عدد مولات للحصول على أبسط نسبة صحيحة',
      'الصيغة الجزيئية = (الصيغة الأولية) × n ، حيث $n = \\frac{\\text{الكتلة المولية للمركب}}{\\text{الكتلة المولية للصيغة الأولية}}$',
      'أسباب نقص الناتج الفعلي عن النظري: 1) عدم نقاء المواد المتفاعلة، 2) تطاير جزء من المادة، 3) حدوث تفاعلات جانبية منافسة، 4) التصاق جزء من المادة بجدران إناء التفاعل',
      'المادة المحددة للتفاعل هي التي تعطي أقل كمية مولات من النواتج عند مقارنة المتفاعلات'
    ],
    keyConceptsEn: [
      'Empirical formula steps: mass % → moles → divide by smallest mole ratio',
      'Molecular formula = Empirical formula × (Molar mass / Empirical mass)',
      'Reasons actual yield < theoretical yield: impurities, evaporation, side reactions, container adhesion',
      'Limiting reactant yields the least amount of product moles'
    ],

    summaryAr: 'تتناول هذه المحاضرة الحسابات الكيميائية المتقدمة لصف الأول الثانوي: تعيين الصيغ الأولية والجزيئية، تحديد العامل المحدد للتفاعل، وحساب كفاءة التفاعل ونسبة الناتج الفعلي إلى النظري.',
    summaryEn: 'Covers advanced chemical stoichiometry: empirical & molecular formulas, limiting reactant determinations, and percent yield optimization.',

    sections: [
      {
        titleAr: '1. تعيين الصيغة الأولية والجزيئية',
        titleEn: '1. Empirical & Molecular Formula Derivation',
        contentAr: '1) خطوات استنتاج الصيغة الأولية:\n- مثال: مركب يحتوي على 85.7% كربون و 14.3% هيدروجين (حيث C=12, H=1):\n  * مولات C = 85.7 / 12 = 7.14 mol.\n  * مولات H = 14.3 / 1 = 14.3 mol.\n  * النسبة بالقسمة على الأصغر (7.14): C = 1 ، H = 14.3 / 7.14 = 2.\n  * الصيغة الأولية = $CH_2$.\n\n2) الصيغة الجزيئية:\n- إذا كانت الكتلة المولية للمركب السابق = 42 g/mol:\n  * كتلة الصيغة الأولية ($CH_2$) = 12 + 2 = 14 g/mol.\n  * عدد وحدات الصيغة $n = 42 / 14 = 3$.\n  * الصيغة الجزيئية = $(CH_2)_3 = C_3H_6$ (البروبين).',
        contentEn: 'Convert mass percentages to moles, simplify to lowest integer ratio for empirical formula. Multiply by n = (Molar Mass / Empirical Mass) for molecular formula.'
      },
      {
        titleAr: '2. المادة المحددة والنسبة المئوية للناتج الفعلي',
        titleEn: '2. Limiting Reactant & Actual Percentage Yield',
        contentAr: '1) المادة المحددة للتفاعل (Limiting Reactant):\n- هي المادة التي تعطي أقل عدد مولات من المادة الناتجة.\n- مثال: في التفاعل $2H_2 + O_2 ⟹ 2H_2O$:\n  إذا تفاعل 3 مول من $H_2$ مع 2 مول من $O_2$:\n  * 3 مول $H_2$ تنتج 3 مول $H_2O$.\n  * 2 مول $O_2$ تنتج 4 مول $H_2O$.\n  * إذن $H_2$ هو المادة المحددة لأنه ينتج كمية أقل ويستهلك أولاً.\n\n2) النسبة المئوية للناتج الفعلي:\n- $\\text{النسبة المئوية} = \\frac{\\text{الناتج الفعلي (العملي)}}{\\text{الناتج النظري (الحسابي)}} \\times 100\\%$.\n- يكون الناتج الفعلي دائماً أقل من النظري لأسباب عملية كالتطاير والشوائب والالتصاق.',
        contentEn: 'The limiting reactant yields the lowest theoretical product moles. Actual percent yield = (Actual Mass / Theoretical Mass) × 100%.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-chem3-1',
        questionAr: 'عند تفاعل $1.2\\text{ g}$ من المغنيسيوم مع وفرة من الأكسجين، تكونت كتلة قدرها $1.8\\text{ g}$ من أكسيد المغنيسيوم $MgO$ عملياً في المختبر. احسب النسبة المئوية للناتج الفعلي؟ (علماً بأن $Mg=24, O=16$)',
        questionEn: 'When 1.2 g of Mg burns with excess O₂, 1.8 g of MgO is collected in the lab. Calculate the actual percentage yield (Mg=24, O=16)?',
        solutionStepsAr: [
          'الخطوة 1: معادلة التفاعل الموزونة: 2Mg + O₂ ⟹ 2MgO.',
          'الخطوة 2: حساب الناتج النظري: 2 × 24 g من Mg تنتج 2 × (24 + 16) = 80 g من MgO (أي 48 g Mg ⟹ 80 g MgO).',
          'الخطوة 3: إذن 1.2 g من Mg تنتج نظرياً: (1.2 × 80) / 48 = 2.0 g من MgO.',
          'الخطوة 4: حساب النسبة المئوية للناتج الفعلي = (الناتج الفعلي / الناتج النظري) × 100 = (1.8 / 2.0) × 100 = 90%.'
        ],
        solutionStepsEn: [
          'Step 1: Balanced equation: 2Mg + O₂ ⟹ 2MgO.',
          'Step 2: Theoretical stoichiometry: 48 g Mg produces 80 g MgO.',
          'Step 3: Theoretical yield for 1.2 g Mg = (1.2 × 80) / 48 = 2.0 g MgO.',
          'Step 4: Percentage yield = (1.8 / 2.0) × 100% = 90%.'
        ],
        answerAr: 'النسبة المئوية للناتج الفعلي = 90%.',
        answerEn: 'Actual percentage yield = 90%.'
      }
    ],

    assessment: {
      id: 'quiz-h10-chem-3',
      lectureId: 'h10-chem-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: المادة المحددة والصيغ الكيميائية (1 ثانوي)',
      titleEn: 'Mastery Quiz 3: Limiting Reactants & Chemical Stoichiometry',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-c3-1',
          textAr: 'مركب صيغته الأولية $CH_2O$ وكتلته المولية الجزيئية $180\\text{ g/mol}$ (حيث $C=12, H=1, O=16$). ما هي صيغته الجزيئية؟',
          textEn: 'A compound has empirical formula CH₂O and molar mass 180 g/mol (C=12, H=1, O=16). What is its molecular formula?',
          optionsAr: ['C₆H₁₂O₆ (الجلوكوز)', 'C₃H₆O₃', 'C₂H₄O₂', 'C₁₂H₂₂O₁₁'],
          optionsEn: ['C₆H₁₂O₆ (Glucose)', 'C₃H₆O₃', 'C₂H₄O₂', 'C₁₂H₂₂O₁₁'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الصيغة الجزيئية من الصيغة الأولية',
          conceptTestedEn: 'Molecular formula deduction from empirical mass',
          explanationAr: 'كتلة الصيغة الأولية CH₂O = 12 + 2(1) + 16 = 30 g/mol. عدد الوحدات n = 180 / 30 = 6. الصيغة الجزيئية = (CH₂O)₆ = C₆H₁₂O₆.',
          explanationEn: 'Empirical mass = 30 g/mol. Multiplier n = 180 / 30 = 6, yielding C₆H₁₂O₆.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c3-2',
          textAr: 'في أي تفاعل كيميائي، تُعرّف المادة المحددة للتفاعل (Limiting Reactant) بأنها المادة التي:',
          textEn: 'The limiting reactant in any chemical reaction is fundamentally defined as the reactant that:',
          optionsAr: [
            'تستهلك تماماً وتنتج أقل كمية من النواتج',
            'تكون كتلتها بالجرام هي الأكبر دائماً',
            'يتبقى منها جزء غير متفاعل في نهاية التفاعل',
            'تزيد من سرعة التفاعل دون أن تتغير'
          ],
          optionsEn: [
            'Is consumed completely and yields the lowest product amount',
            'Always possesses the largest initial mass in grams',
            'Leaves unreacted excess remnants at completion',
            'Accelerates reaction rate without being consumed'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف المادة المحددة للتفاعل',
          conceptTestedEn: 'Limiting reactant definition',
          explanationAr: 'المادة المحددة هي التي تستهلك أولاً بالكامل وينتج عن تفاعلها أقل عدد من مولات النواتج.',
          explanationEn: 'The limiting reactant is completely exhausted and limits theoretical product yield.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c3-3',
          textAr: 'إذا كان الناتج النظري لتفاعل كيميائي هو $50\\text{ g}$، بينما جمع الطالب في المختبر $45\\text{ g}$ فقط، فإن النسبة المئوية للناتج الفعلي هي:',
          textEn: 'If theoretical yield is 50 g and actual collected laboratory yield is 45 g, the percent yield is:',
          optionsAr: ['90%', '80%', '95%', '85%'],
          optionsEn: ['90%', '80%', '95%', '85%'],
          correctIndex: 0,
          conceptTestedAr: 'حساب النسبة المئوية للناتج الفعلي',
          conceptTestedEn: 'Percentage yield calculation',
          explanationAr: 'النسبة المئوية = (الناتج الفعلي / الناتج النظري) × 100 = (45 / 50) × 100 = 90%.',
          explanationEn: 'Percent yield = (45 / 50) × 100% = 90%.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c3-4',
          textAr: 'أي مما يلي ليس سبباً في أن الناتج الفعلي يكون أقل دائماً من الناتج النظري المحسوب؟',
          textEn: 'Which of the following is NOT a valid reason why actual yield is lower than theoretical yield?',
          optionsAr: [
            'تفاعل جميع المتفاعلات بنسبة 100% وتحولها لنواتج مثالية',
            'تطاير جزء من النواتج أثناء الترشيح أو التسخين',
            'وجود شوائب في المواد المتفاعلة المستخدمة',
            'التصاق جزء من المادة المترسبة بجدران الأواني'
          ],
          optionsEn: [
            '100% complete ideal conversion of all reactants into products',
            'Volatilization of product during heating or filtering',
            'Presence of chemical impurities in raw reactants',
            'Adhesion of precipitates to container inner walls'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أسباب نقص الناتج الفعلي',
          conceptTestedEn: 'Reasons for actual yield losses',
          explanationAr: 'التحول المثالي 100% يجعل الناتج الفعلي يساوي النظري وليس أقل منه، بينما التطاير والشوائب والالتصاق هي أسباب النقص.',
          explanationEn: 'Ideal 100% conversion results in theoretical yield; actual losses stem from impurities, volatility, and adhesion.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c3-5',
          textAr: 'النسبة المئوية الكتلية للكربون في غاز الميثان $CH_4$ (حيث $C=12, H=1$) تساوي:',
          textEn: 'The mass percentage of carbon in methane gas CH₄ (C=12, H=1) is equal to:',
          optionsAr: ['75%', '80%', '25%', '50%'],
          optionsEn: ['75%', '80%', '25%', '50%'],
          correctIndex: 0,
          conceptTestedAr: 'حساب النسبة المئوية الكتلية لعنصر في مركب',
          conceptTestedEn: 'Elemental mass percentage in compounds',
          explanationAr: 'الكتلة المولية لـ CH₄ = 12 + 4 = 16 g/mol. نسبة الكربون = (12 / 16) × 100 = 75%.',
          explanationEn: 'Molar mass of CH₄ = 16 g/mol. % Carbon = (12 / 16) × 100% = 75%.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: SOLUTIONS, CONCENTRATIONS & ACIDS AND BASES ──
  {
    id: 'h10-chem-4',
    order: 4,
    titleAr: 'المحاضرة 4: المحاليل، طرق التعبير عن التركيز (المولارية والمولالية)، والأحماض والقواعد',
    titleEn: 'Lecture 4: Solutions, Concentration (Molarity & Molality), Acids & Bases',
    subtitleAr: 'المحاليل والغرويات والمعلقات، التركيز المولاري والمولالي، النسبة المئوية الكتلية والحجمية، ونظريات أرهينيوس وبرونستد-لوري ولويس للأحماض والقواعد',
    subtitleEn: 'Master solutions vs colloids vs suspensions, Molarity (M) & Molality (m), acid-base theories (Arrhenius, Brønsted-Lowry, Lewis), and pH scale indicators.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الباب الثالث: المحاليل - الأحماض والقواعد',
    unitTitleEn: 'Unit 3: Solutions, Acids & Bases',
    lessonNumberAr: 'الدرس 1: المحاليل وتركيزها ونظريات الأحماض والقواعد',
    lessonNumberEn: 'Lesson 1: Solutions, Concentration & Acid-Base Theories',

    warmupHookAr: 'عندما ترتدي عدسات لاصقة، يجب حفظها في محلول ملحي متساوي التوتر بتركيز مولاري فائق الدقة ($0.154\\text{ M}$) لمنع انكماش أو انفجار خلايا العين! كما أن حموضة المعدة ترجع لحمض الهيدروكلوريك ($HCl$) بأس هيدروجيني $pH \\approx 1.5$ لهضم البروتينات وقتل البكتيريا. فهم المحاليل وتركيزاتها وسلوك الأحماض والقواعد هو سر التوازن البيولوجي في الكائنات الحية والتحكم في الصناعات الكيميائية!',
    warmupHookEn: 'Contact lens saline requires an exact 0.154 M concentration to maintain osmotic balance with human cornea cells. Mastering Molarity, Molality, and Brønsted-Lowry acid-base proton transfer governs cellular homeostasis and pharmaceutical formulation.',

    learningOutcomesAr: [
      'أن يميز الطالب بين المخاليط المتجانسة (المحاليل الحقيقية) وغير المتجانسة (المعلقات والغرويات) وظاهرة تندال (Tyndall Effect)',
      'أن يحسب التركيز المولاري: $M = \\frac{\\text{عدد مولات المذاب}}{\\text{حجم المحلول باللتر}}$ والتركيز المولالي: $m = \\frac{\\text{عدد مولات المذاب}}{\\text{كتلة المذيب بالكيلوجرام}}$',
      'أن يفسر الخواص الجمعية للمحاليل (انخفاض الضغط البخاري، ارتفاع درجة الغليان، وانخفاض درجة التجمد)',
      'أن يقارن بين نظريات الأحماض والقواعد: نظرية أرهينيوس (Arrhenius)، برونستد-لوري (Brønsted-Lowry: البروتون والزوج المترافق)، ونظرية لويس (Lewis: أزواج الإلكترونات)'
    ],
    learningOutcomesEn: [
      'Differentiate homogeneous solutions from heterogeneous suspensions and colloids via Tyndall effect',
      'Calculate Molarity (M = mol/L) and Molality (m = mol/kg solvent)',
      'Explain colligative properties: vapor pressure lowering, boiling point elevation, freezing point depression',
      'Compare acid-base definitions: Arrhenius (H⁺/OH⁻), Brønsted-Lowry (proton donor/acceptor & conjugate pairs), Lewis (electron pairs)'
    ],

    vocabulary: [
      {
        termAr: 'المولارية (Molarity - M)',
        termEn: 'Molarity (M)',
        definitionAr: 'عدد مولات المذاب الذائبة في لتر واحد من المحلول (وحدة القياس: mol/L أو M). وتتأثر بتغير درجة الحرارة لتغير الحجم.',
        definitionEn: 'The number of moles of solute per liter of solution (mol/L or M), temperature-dependent.'
      },
      {
        termAr: 'المولالية (Molality - m)',
        termEn: 'Molality (m)',
        definitionAr: 'عدد مولات المذاب الذائبة في واحد كيلوجرام من المذيب (وحدة القياس: mol/kg أو m). ولا تتأثر بتغير درجات الحرارة.',
        definitionEn: 'The number of moles of solute per kilogram of solvent (mol/kg or m), independent of temperature changes.'
      },
      {
        termAr: 'حمض وقاعدة برونستد-لوري (Brønsted-Lowry Theory)',
        termEn: 'Brønsted-Lowry Theory',
        definitionAr: 'الحمض: مادة تمنح بروتوناً ($H^+$) لمادة أخرى (مانح البروتون). القاعدة: مادة تستقبل بروتوناً ($H^+$) من مادة أخرى (مستقبل البروتون).',
        definitionEn: 'Acid is a proton (H⁺) donor; Base is a proton (H⁺) acceptor.'
      }
    ],

    keyConceptsAr: [
      'قانون المولارية: $M = \\frac{n}{V_{(L)}} = \\frac{\\text{كتلة المذاب (g)}}{\\text{الكتلة المولية} \\times V_{(L)}}$',
      'قانون المولالية: $m = \\frac{n}{\\text{كتلة المذيب (kg)}}$',
      'الخواص الجمعية للمحاليل: إضافة مذاب غير متطاير يخفض الضغط البخاري، يرفع درجة الغليان، ويخفض درجة تجمد المحلول (مثل رش الملح على الطرق الجليدية)',
      'الزوج المترافق (Conjugate Pair): الحمض يتحول إلى قاعدة مرافقة بعد فقد البروتون، والقاعدة تتحول إلى حمض مرافق بعد استقبال البروتون ($HCl + H_2O \\rightleftharpoons H_3O^+ + Cl^-$)',
      'مقياس الـ pH: المحلول الحامضي $pH < 7$، المتعادل $pH = 7$، والقلوي القاعدي $pH > 7$'
    ],
    keyConceptsEn: [
      'Molarity formula: M = moles / Volume (L)',
      'Molality formula: m = moles / mass of solvent (kg)',
      'Colligative properties: freezing point depression (salting icy roads), boiling point elevation',
      'Conjugate acid-base pairs via proton transfer',
      'pH scale: acidic (<7), neutral (=7), basic/alkaline (>7)'
    ],

    summaryAr: 'تغطي المحاضرة الباب الثالث من كيمياء أولى ثانوي: تصنيف المحاليل، قوانين التركيز المولاري والمولالي، الخواص الجمعية للمحاليل، وتفسير سلوك الأحماض والقواعد بنظريات أرهينيوس وبرونستد-لوري ولويس ومقياس الرقم الهيدروجيني pH.',
    summaryEn: 'Covers solutions classification, molarity & molality concentrations, colligative properties, and acid-base theories (Arrhenius, Brønsted-Lowry, Lewis).',

    sections: [
      {
        titleAr: '1. طرق التعبير عن تركيز المحاليل (المولارية والمولالية)',
        titleEn: '1. Solution Concentrations (Molarity & Molality)',
        contentAr: '1) التركيز المولاري (Molarity - M):\n- $M = \\frac{\\text{عدد مولات المذاب}}{\\text{حجم المحلول باللتر (L)}} = \\frac{\\text{كتلة المذاب (g)}}{\\text{الكتلة المولية (g/mol)} \\times V_{(L)}}$.\n- مثال: احسب مولارية محلول ناتج من إذابة $20\\text{ g}$ من هيدروكسيد الصوديوم $NaOH$ في كمية من الماء لتكوين $500\\text{ mL}$ من المحلول (حيث $Na=23, O=16, H=1$):\n  * الكتلة المولية لـ NaOH = 23 + 16 + 1 = 40 g/mol.\n  * عدد المولات = 20 / 40 = 0.5 mol.\n  * حجم المحلول باللتر = 500 / 1000 = 0.5 L.\n  * المولارية $M = 0.5 / 0.5 = 1.0\\text{ mol/L (1 M)}$.\n\n2) التركيز المولالي (Molality - m):\n- $m = \\frac{\\text{عدد مولات المذاب}}{\\text{كتلة المذيب بالكيلوجرام (kg)}}$.\n- المولالية لا تتأثر بتغير درجة الحرارة لأن الكتل لا تتغير بالحرارة، بينما تتأثر المولارية لتمدد أو انكماش حجم المحلول.',
        contentEn: 'Molarity M = mol/L; Molality m = mol/kg solvent. Molality is independent of temperature changes.'
      },
      {
        titleAr: '2. نظريات الأحماض والقواعد والأزواج المترافقة',
        titleEn: '2. Acid-Base Theories & Conjugate Pairs',
        contentAr: '1) نظرية أرهينيوس:\n- الحمض: مادة تذوب في الماء وتعطي أيونات هيدروجين موجبة ($H^+$).\n- القاعدة: مادة تذوب في الماء وتعطي أيونات هيدروكسيد سالبة ($OH^-$).\n\n2) نظرية برونستد - لوري (Brønsted - Lowry):\n- الحمض: مانح للبروتون ($H^+$)، ويتحول إلى قاعدة مرافقة (Conjugate Base).\n- القاعدة: مستقبل للبروتون ($H^+$)، وتتحول إلى حمض مرافق (Conjugate Acid).\n- تفاعل الأمونيا مع الماء: $NH_3 + H_2O \\rightleftharpoons NH_4^+ + OH^-$\n  * $H_2O$: حمض مانح للبروتون ⟹ $OH^-$ قاعدة مرافقة.\n  * $NH_3$: قاعدة مستقبلة للبروتون ⟹ $NH_4^+$ حمض مرافق.\n\n3) نظرية لويس (Lewis Theory):\n- الحمض: مادة تستقبل زوجاً أو أكثر من الإلكترونات الحرة.\n- القاعدة: مادة تمنح زوجاً أو أكثر من الإلكترونات الحرة.',
        contentEn: 'Arrhenius: H⁺/OH⁻ donors in water. Brønsted-Lowry: proton donor/acceptor and conjugate pairs. Lewis: electron pair acceptor (acid) and donor (base).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-chem4-1',
        questionAr: 'في التفاعل التالي: $H_2O + HF \\rightleftharpoons H_3O^+ + F^-$ ، حدد كلاً من: الحمض، القاعدة، الحمض المرافق، والقاعدة المرافقة وفق نظرية برونستد-لوري؟',
        questionEn: 'In the reaction: H₂O + HF ⇌ H₃O⁺ + F⁻, identify the acid, base, conjugate acid, and conjugate base according to Brønsted-Lowry theory?',
        solutionStepsAr: [
          'الخطوة 1: جزيء HF يمنح بروتوناً ($H^+$) لجزيء الماء، إذن HF هو الحمض (Acid).',
          'الخطوة 2: بعد أن فقد HF البروتون تحول إلى أيون الفلوريد $F^-$، إذن $F^-$ هو القاعدة المرافقة (Conjugate Base).',
          'الخطوة 3: جزيء $H_2O$ استقبل البروتون، إذن $H_2O$ هو القاعدة (Base).',
          'الخطوة 4: بعد استقبال البروتون تحول الماء إلى أيون الهيدرونيوم $H_3O^+$، إذن $H_3O^+$ هو الحمض المرافق (Conjugate Acid).'
        ],
        solutionStepsEn: [
          'Step 1: HF donates a proton H⁺, so HF is the Acid.',
          'Step 2: After proton loss, F⁻ is the Conjugate Base.',
          'Step 3: H₂O accepts the proton, so H₂O is the Base.',
          'Step 4: H₃O⁺ is formed after proton acceptance, making H₃O⁺ the Conjugate Acid.'
        ],
        answerAr: 'الحمض: HF ، القاعدة: H₂O ، الحمض المرافق: H₃O⁺ ، القاعدة المرافقة: F⁻.',
        answerEn: 'Acid: HF, Base: H₂O, Conjugate Acid: H₃O⁺, Conjugate Base: F⁻.'
      }
    ],

    assessment: {
      id: 'quiz-h10-chem-4',
      lectureId: 'h10-chem-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: المحاليل والتركيز والأحماض والقواعد (1 ثانوي)',
      titleEn: 'Mastery Quiz 4: Solutions, Molarity/Molality & Acid-Base Theories',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-c4-1',
          textAr: 'ما هو التركيز المولاري (Molarity) لمحلول يحتوي على $0.2\\text{ mol}$ من السكروز في $400\\text{ mL}$ من المحلول؟',
          textEn: 'What is the molarity of a solution containing 0.2 mol of sucrose in 400 mL of solution?',
          optionsAr: ['0.5 M', '0.05 M', '0.8 M', '2.0 M'],
          optionsEn: ['0.5 M', '0.05 M', '0.8 M', '2.0 M'],
          correctIndex: 0,
          conceptTestedAr: 'حساب التركيز المولاري',
          conceptTestedEn: 'Molarity calculation',
          explanationAr: 'حجم المحلول باللتر = 400 / 1000 = 0.4 L. المولارية M = عدد المولات / الحجم باللتر = 0.2 / 0.4 = 0.5 mol/L (0.5 M).',
          explanationEn: 'Volume = 0.4 L. Molarity = 0.2 / 0.4 = 0.5 M.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c4-2',
          textAr: 'وفقاً لنظرية برونستد-لوري، الحمض المرافق (Conjugate Acid) لأيون البيكربونات $HCO_3^-$ هو:',
          textEn: 'According to Brønsted-Lowry theory, the conjugate acid of bicarbonate ion HCO₃⁻ is:',
          optionsAr: ['H₂CO₃ (حمض الكربونيك)', 'CO₃²⁻ (أيون الكربونات)', 'H⁺', 'H₃O⁺'],
          optionsEn: ['H₂CO₃ (Carbonic acid)', 'CO₃²⁻ (Carbonate ion)', 'H⁺', 'H₃O⁺'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد الحمض المرافق بإضافة بروتون',
          conceptTestedEn: 'Conjugate acid formation by proton addition',
          explanationAr: 'الحمض المرافق ينتج عن استقبال القاعدة لبروتون ($H^+$): $HCO_3^- + H^+ ⟹ H_2CO_3$.',
          explanationEn: 'Adding a proton (H⁺) to base HCO₃⁻ yields conjugate acid H₂CO₃.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c4-3',
          textAr: 'الخاصية التي تجعل التركيز المولالي (Molality) مفضلاً على التركيز المولاري (Molarity) في قياس الخواص الحرارية للمحاليل هي:',
          textEn: 'Why is molality preferred over molarity in measuring thermodynamic properties of solutions?',
          optionsAr: [
            'المولالية لا تتأثر بتغير درجة الحرارة لأن كتلة المذيب ثابتة',
            'المولالية أسهل في القياس من المولارية دائماً',
            'المولالية تطبق فقط على الغازات',
            'المولارية تتطلب وجود محاليل ملونة فقط'
          ],
          optionsEn: [
            'Molality is temperature-independent because solvent mass is constant',
            'Molality is always easier to compute experimentally',
            'Molality applies only to gaseous mixtures',
            'Molarity strictly requires colored solutions'
          ],
          correctIndex: 0,
          conceptTestedAr: 'ثبات المولالية مع تغير درجة الحرارة',
          conceptTestedEn: 'Temperature independence of molality',
          explanationAr: 'المولالية تعتمد على كتلة المذيب بالكيلوجرام والكتلة لا تتغير بتغير درجات الحرارة، بعكس الحجم الذي يتمدد وينكمش.',
          explanationEn: 'Mass is temperature-invariant, whereas solution volume expands/contracts with temperature fluctuations.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c4-4',
          textAr: 'عند رش الملح على الطرق المغطاة بالجليد في المناطق الباردة، فإن الجليد يذوب لأن إضافة المذاب تؤدي إلى:',
          textEn: 'Spreading salt on icy winter roads causes ice to melt because adding solute causes:',
          optionsAr: [
            'انخفاض درجة تجمد المحلول الملحي الناتج',
            'ارتفاع درجة تجمد الماء النقي',
            'زيادة الضغط البخاري للجليد',
            'تفاعل نووي طارد للحرارة'
          ],
          optionsEn: [
            'Freezing point depression of the resulting saltwater solution',
            'Freezing point elevation of pure water',
            'Vapor pressure increase of surface ice',
            'Exothermic nuclear fission reaction'
          ],
          correctIndex: 0,
          conceptTestedAr: 'انخفاض درجة التجمد كخاصية جمعية للمحاليل',
          conceptTestedEn: 'Freezing point depression colligative property',
          explanationAr: 'إضافة الملح إلى الجليد تخفض درجة تجمد المحلول إلى ما دون الصفر المئوي (مثل -10°C) فيذوب الجليد عند درجات حرارة الطقس الطبيعية.',
          explanationEn: 'Dissolved salt lowers the freezing point below 0°C (freezing point depression), preventing ice formation.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c4-5',
          textAr: 'وفقاً لنظرية لويس (Lewis Theory)، تعتبر الأمونيا $NH_3$ قاعدة لأنها:',
          textEn: 'According to Lewis theory, ammonia (NH₃) acts as a base because it:',
          optionsAr: [
            'تمتلك زوجاً حراً من الإلكترونات غير المرتبطة يمكنها منحه',
            'تستقبل بروتوناً فقط',
            'تطلق أيونات هيدروكسيد OH⁻ مباشرة من تركيبها',
            'تتفكك في الماء إلى أيونات نيتروجين موجبة'
          ],
          optionsEn: [
            'Possesses an unshared lone pair of electrons to donate',
            'Only accepts protons without electron transfer',
            'Releases hydroxide ions OH⁻ directly from its own lattice',
            'Dissociates into positive nitrogen ions in water'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف قاعدة لويس كـ مانح لزوج إلكترونات',
          conceptTestedEn: 'Lewis base electron-pair donor definition',
          explanationAr: 'تحتوي ذرة النيتروجين في جزيء الأمونيا على زوج إلكترونات حر يمكنها منحه لحمض لويس لتكوين رابطة تناسقية.',
          explanationEn: 'Ammonia has a lone electron pair on nitrogen available to donate to electron-deficient Lewis acids.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: THERMOCHEMISTRY & INTRODUCTION TO NUCLEAR CHEMISTRY ──
  {
    id: 'h10-chem-5',
    order: 5,
    titleAr: 'المحاضرة 5: الكيمياء الحرارية (قانون هس)، والتغير في المحتوى الحراري، ومقدمة الكيمياء النووية',
    titleEn: 'Lecture 5: Thermochemistry (Enthalpy, Hess\'s Law) & Introduction to Nuclear Chemistry',
    subtitleAr: 'الحرارة النوعية، التفاعلات الطاردة والماصة للحرارة، طاقة الرابطة، قانون هس للمجموع الحراري، وطاقة الترابط النووي ونظائر العناصر',
    subtitleEn: 'Master specific heat capacity (q = mcΔT), enthalpy change (ΔH), bond energies, Hess\'s Law, nuclear binding energy (E = Δm · c²), and radiation safety.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Chemistry',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الباب الرابع والخامس: الكيمياء الحرارية والكيمياء النووية',
    unitTitleEn: 'Unit 4 & 5: Thermochemistry & Nuclear Chemistry',
    lessonNumberAr: 'الدرس 1: التغيرات الحرارية، قانون هس والكيمياء النووية',
    lessonNumberEn: 'Lesson 1: Thermochemical Laws & Nuclear Energy',

    warmupHookAr: 'عندما تشتعل شعلة صاروخ فضائي محمل بوقود الهيدروجين والأكسجين السائل، تنطلق كميات هائلة من الطاقة الحرارية نتيجة كسر وتكوين روابط كيميائية جديدة ($\Delta H < 0$). وعلى مستوى أعمق داخل النواة الذرية، يتحول جزء ضئيل جداً من كتلة البروتونات والنيوترونات مباشرة إلى طاقة ربط نووية جبارة طبقاً لمعادلة أينشتاين الشهيرة ($E = mc^2$)! الكيمياء الحرارية والنووية تكشف لنا أسرار تحولات الطاقة التي تمد كوكبنا بالحياة وتقود مستقبل الطاقة النظيفة!',
    warmupHookEn: 'Exothermic chemical combustion powers rocket liftoffs through enthalpy releases, while mass defect inside atomic nuclei converts directly into tremendous nuclear binding energy (E = mc²). Thermochemistry and nuclear chemistry explain universal energy transformations.',

    learningOutcomesAr: [
      'أن يطبق الطالب قانون كمية الحرارة: $q = m \\cdot c \\cdot \\Delta T$ لحساب كمية الحرارة الممتصة أو المنطلقة والحرارة النوعية',
      'أن يميز بين التفاعلات الطاردة للحرارة (Exothermic: $\\Delta H < 0$) والماصة للحرارة (Endothermic: $\\Delta H > 0$) ومخططات الطاقة',
      'أن يحسب التغير في المحتوى الحراري ($\\Delta H$) باستخدام طاقات الروابط: $\\Delta H = \\text{طاقة كسر الروابط (+)} + \\text{طاقة تكوين الروابط (-)}$',
      'أن يطبق قانون هس (Hess\'s Law) لجمع المعادلات الحرارية وحساب $\\Delta H$ للتفاعلات التي يصعب قياسها معملياً',
      'أن يحسب طاقة الترابط النووي (Nuclear Binding Energy) من النقص في كتلة مكونات النواة: $E = \\Delta m \\times 931\\text{ MeV}$'
    ],
    learningOutcomesEn: [
      'Calculate heat absorbed or released via q = m · c · ΔT',
      'Distinguish exothermic (ΔH < 0) from endothermic (ΔH > 0) energy diagrams',
      'Compute reaction enthalpy ΔH using bond energies: ΔH = Bond breaking (+) + Bond forming (-)',
      'Apply Hess\'s Law of constant heat summation for indirect multistep enthalpy calculations',
      'Calculate nuclear binding energy from mass defect using E = Δm × 931 MeV'
    ],

    vocabulary: [
      {
        termAr: 'الحرارة النوعية (Specific Heat Capacity - c)',
        termEn: 'Specific Heat Capacity (c)',
        definitionAr: 'كمية الحرارة اللازمة لرفع درجة حرارة جرام واحد من المادة درجة واحدة مئوية ($1^\\circ\\text{C}$)، والماء يمتلك أعلى حرارة نوعية ($4.18\\text{ J/g}\\cdot^\\circ\\text{C}$).',
        definitionEn: 'The heat energy required to raise the temperature of 1 gram of substance by 1°C. Water has the highest specific heat (4.18 J/g·°C).'
      },
      {
        termAr: 'قانون هس للمجموع الحراري (Hess\'s Law)',
        termEn: 'Hess\'s Law',
        definitionAr: 'حرارة التفاعل (التغير في المحتوى الحراري $\\Delta H$) مقدار ثابت يعتمد فقط على طبيعة المواد المتفاعلة والناتجة، ولا يعتمد على الخطوات أو المسار الذي يسلكه التفاعل.',
        definitionEn: 'The overall enthalpy change of a chemical reaction is independent of the pathway or number of intermediate steps.'
      },
      {
        termAr: 'طاقة الترابط النووي (Nuclear Binding Energy)',
        termEn: 'Nuclear Binding Energy',
        definitionAr: 'الطاقة المتكافئة للكتلة المفقودة (النقص في الكتلة) عند تجمع البروتونات والنيوترونات لتكوين النواة، وهي المسؤولة عن تماسك واستقرار النواة الذرية.',
        definitionEn: 'The energy required to disassemble an atomic nucleus into its component protons and neutrons, derived from mass defect.'
      }
    ],

    keyConceptsAr: [
      'قانون كمية الحرارة: $q = m \\cdot c \\cdot (T_2 - T_1)$ بوحدة الجول (Joule) أو السعر (Calorie = 4.184 J)',
      'التفاعل الطارد للحرارة ($\Delta H = H_{\\text{products}} - H_{\\text{reactants}} < 0$): تنطلق حرارة وترتفع حرارة الوسط المحيط',
      'التفاعل الماص للحرارة ($\Delta H > 0$): يمتص حرارة وتنخفض حرارة الوسط المحيط',
      'طاقة الرابطة: كسر الروابط في المتفاعلات عملية ماصة للحرارة (+)، وتكوين الروابط في النواتج عملية طاردة للحرارة (-)',
      'معادلة أينشتاين للتحول النووي: $E = m \\cdot c^2$ (بالجول) أو $E = \\Delta m \\times 931\\text{ MeV}$ (عندما تكون الكتلة بوحدة الكتل الذرية u)'
    ],
    keyConceptsEn: [
      'Heat transfer formula: q = m · c · ΔT',
      'Exothermic (ΔH < 0, energy released) vs Endothermic (ΔH > 0, energy absorbed)',
      'Bond energies: Breaking is endothermic (+), Forming is exothermic (-)',
      'Hess\'s law enables indirect calculation of reactions that are too dangerous, slow, or have side products',
      'Einstein\'s mass-energy equivalence in nuclear binding: E = Δm × 931 MeV'
    ],

    summaryAr: 'تجمع المحاضرة بين كيمياء الطاقة الحرارية والنووية لصف الأول الثانوي: حسابات السعة الحرارية $q = mc\Delta T$، مخططات التفاعلات الطاردة والماصة، قانون هس لتجميع طاقات التفاعل، وتفسير طاقة الترابط النووي واستقرار أنوية الذرات.',
    summaryEn: 'Covers thermochemistry (heat equation q = mcΔT, exothermic/endothermic energy profiles, Hess\'s Law) and nuclear binding energy conversions.',

    sections: [
      {
        titleAr: '1. كمية الحرارة والتفاعلات الطاردة والماصة وقانون هس',
        titleEn: '1. Heat Capacity, Enthalpy Profiles & Hess\'s Law',
        contentAr: '1) حساب كمية الحرارة:\n- $q = m \\cdot c \\cdot \\Delta T$.\n- مثال: احسب كمية الحرارة اللازمة لرفع درجة حرارة $100\\text{ g}$ من الماء من $20^\\circ\\text{C}$ إلى $80^\\circ\\text{C}$ (حيث $c = 4.18\\text{ J/g}\\cdot^\\circ\\text{C}$):\n  * $\\Delta T = 80 - 20 = 60^\\circ\\text{C}$.\n  * $q = 100 \\times 4.18 \\times 60 = 25,080\\text{ J} = 25.08\\text{ kJ}$.\n\n2) التفاعلات الطاردة والماصة للحرارة:\n- التفاعل الطارد (Exothermic): $\\Delta H$ سالبة لأن المحتوى الحراري للنواتج أقل من المتفاعلات ($H_P < H_R$).\n- التفاعل الماص (Endothermic): $\\Delta H$ موجبة لأن المحتوى الحراري للنواتج أكبر من المتفاعلات ($H_P > H_R$).\n\n3) قانون هس (Hess\'s Law):\n- $\\Delta H_{\\text{overall}} = \\Delta H_1 + \\Delta H_2 + \\dots$\n- يمكن عكس التفاعل (فتنعكس إشارة $\\Delta H$) أو ضرب المعادلة في معامل (فتضرب قيمة $\\Delta H$ بنفس المعامل) للوصول للمعادلة الهدف.',
        contentEn: 'Heat transfer q = m · c · ΔT. Exothermic reactions have ΔH < 0; endothermic reactions have ΔH > 0. Hess\'s Law allows algebraic manipulation of thermochemical equations.'
      },
      {
        titleAr: '2. مقدمة الكيمياء النووية وطاقة الترابط النووي',
        titleEn: '2. Nuclear Chemistry & Nuclear Binding Energy',
        contentAr: '1) تركيب النواة والكتلة الفعلية والنظرية:\n- النواة تحتوي على بروتونات موجبة ونيوترونات متعادلة (النيوكلونات).\n- الكتلة النظرية (الحسابية) للنواة = (عدد البروتونات × كتلة البروتون) + (عدد النيوترونات × كتلة النيوترون).\n- الكتلة الفعلية للنواة المقاسة معملياً تكون دائماً أقل من الكتلة النظرية الحسابية.\n\n2) النقص في الكتلة وطاقة الترابط النووي:\n- النقص في الكتلة (Mass Defect): $\\Delta m = \\text{الكتلة النظرية} - \\text{الكتلة الفعلية}$.\n- طاقة الترابط النووي الكلية (NBE): $E = \\Delta m \\times 931\\text{ MeV}$.\n- طاقة الترابط النووي لكل نيوكلون = $\\frac{\\text{طاقة الترابط الكلية}}{\\text{العدد الكتلي A}}$، وهي مقياس الاستقرار والاستحكام النووي للذرة.',
        contentEn: 'Mass defect Δm = Theoretical mass - Actual mass. Nuclear Binding Energy E = Δm × 931 MeV. Higher binding energy per nucleon indicates greater nuclear stability.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-chem5-1',
        questionAr: 'إذا كانت الكتلة النظرية الحسابية لنواة ذرة الهيليوم $^4_2He$ هي $4.03188\\text{ u}$ وكتلتها الفعلية المقاسة هي $4.0015\\text{ u}$. احسب طاقة الترابط النووي الكلية وطاقة الترابط لكل نيوكلون؟',
        questionEn: 'If theoretical mass of helium nucleus ⁴₂He is 4.03188 u and actual mass is 4.0015 u, compute the total nuclear binding energy and binding energy per nucleon?',
        solutionStepsAr: [
          'الخطوة 1: حساب النقص في الكتلة: Δm = الكتلة النظرية - الكتلة الفعلية = 4.03188 - 4.0015 = 0.03038 u.',
          'الخطوة 2: حساب طاقة الترابط النووي الكلية: E = Δm × 931 = 0.03038 × 931 ≈ 28.28 MeV.',
          'الخطوة 3: عدد النيوكلونات في الهيليوم (العدد الكتلي A) = 4.',
          'الخطوة 4: طاقة الترابط لكل نيوكلون = 28.28 / 4 = 7.07 MeV/nucleon.'
        ],
        solutionStepsEn: [
          'Step 1: Mass defect Δm = 4.03188 - 4.0015 = 0.03038 u.',
          'Step 2: Total Binding Energy = 0.03038 × 931 = 28.28 MeV.',
          'Step 3: Mass number A = 4 nucleons.',
          'Step 4: Binding energy per nucleon = 28.28 / 4 = 7.07 MeV/nucleon.'
        ],
        answerAr: 'طاقة الترابط الكلية = 28.28 MeV ، ولكل نيوكلون = 7.07 MeV/nucleon.',
        answerEn: 'Total Binding Energy = 28.28 MeV, per nucleon = 7.07 MeV/nucleon.'
      }
    ],

    assessment: {
      id: 'quiz-h10-chem-5',
      lectureId: 'h10-chem-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: الكيمياء الحرارية والنووية (1 ثانوي)',
      titleEn: 'Mastery Quiz 5: Thermochemistry & Nuclear Binding Energy',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-c5-1',
          textAr: 'في التفاعل الطارد للحرارة (Exothermic Reaction)، تكون إشارة التغير في المحتوى الحراري $\\Delta H$:',
          textEn: 'In an exothermic chemical reaction, the sign of enthalpy change ΔH is:',
          optionsAr: ['سالبة دائماً (ΔH < 0)', 'موجبة دائماً (ΔH > 0)', 'تساوي صفراً دائماً', 'لا يمكن تحديدها'],
          optionsEn: ['Always negative (ΔH < 0)', 'Always positive (ΔH > 0)', 'Always zero', 'Indeterminate'],
          correctIndex: 0,
          conceptTestedAr: 'إشارة ΔH في التفاعلات الطاردة والماصة',
          conceptTestedEn: 'Exothermic enthalpy sign convention',
          explanationAr: 'في التفاعلات الطاردة تنطلق حرارة إلى الوسط المحيط ويكون المحتوى الحراري للنواتج أقل من المتفاعلات فتكون $\\Delta H$ سالبة.',
          explanationEn: 'Exothermic reactions release energy because product enthalpy is lower than reactant enthalpy, making ΔH negative.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c5-2',
          textAr: 'المادة التي تمتلك أعلى حرارة نوعية (Specific Heat) بين المواد التالية وتستخدم في تبريد محركات السيارات هي:',
          textEn: 'Which of the following substances possesses the highest specific heat capacity and is used as engine coolant?',
          optionsAr: ['الماء السائل (Water)', 'الحديد (Iron)', 'الألومنيوم (Aluminum)', 'النحاس (Copper)'],
          optionsEn: ['Liquid water', 'Iron', 'Aluminum', 'Copper'],
          correctIndex: 0,
          conceptTestedAr: 'الحرارة النوعية للماء',
          conceptTestedEn: 'Water specific heat capacity',
          explanationAr: 'الماء السائل يمتلك أعلى حرارة نوعية (4.18 J/g·°C) مما يجعله يمتص أو يفقد كميات هائلة من الحرارة دون تغير كبير في درجة حرارته.',
          explanationEn: 'Water has an unusually high specific heat (4.18 J/g·°C), making it the premier thermal buffer and coolant.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-c5-3',
          textAr: 'ينص قانون هس (Hess\'s Law) على أن حرارة التفاعل الكيميائي مقدار ثابت يعتمد فقط على:',
          textEn: 'Hess\'s Law states that total enthalpy change depends solely on:',
          optionsAr: [
            'طبيعة المواد المتفاعلة والناتجة بغض النظر عن مسار التفاعل',
            'سرعة التفاعل الكيميائي وزمن حدوثه',
            'نوع العامل الحفاز المستخدم في التجربة',
            'حجم إناء التفاعل فقط'
          ],
          optionsEn: [
            'Nature of reactants and products regardless of pathway steps',
            'Chemical reaction kinetics and elapsed duration',
            'Type of catalyst used during the experiment',
            'Container volume only'
          ],
          correctIndex: 0,
          conceptTestedAr: 'نص ومفهوم قانون هس',
          conceptTestedEn: 'Hess\'s Law conceptual definition',
          explanationAr: 'قانون هس هو تطبيق لقانون بقاء الطاقة: التغير في المحتوى الحراري يعتمد على الحالة الابتدائية والنهائية فقط ولا يتأثر بالمسار.',
          explanationEn: 'Hess\'s law reflects state function behavior: total ΔH depends only on initial and final states.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c5-4',
          textAr: 'تتحول الكتلة المفقودة (النقص في الكتلة $\\Delta m$) بين كتلة مكونات النواة الحرة وكتلتها المترابطة إلى:',
          textEn: 'The mass defect Δm between individual free nucleons and bound nucleus is converted directly into:',
          optionsAr: [
            'طاقة ترابط نووي تحافظ على استقرار وتماسك النواة',
            'شحنات كهربية سالبة داخل النواة',
            'غاز الهيدروجين المنبعث',
            'ضوء مرئي فقط'
          ],
          optionsEn: [
            'Nuclear binding energy maintaining nuclear stability',
            'Negative electrical charges inside the nucleus',
            'Emitted hydrogen gas',
            'Visible light only'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم طاقة الترابط النووي والنقص في الكتلة',
          conceptTestedEn: 'Nuclear binding energy derivation from mass defect',
          explanationAr: 'طبقاً لمعادلة أينشتاين $E = \\Delta m \\cdot c^2$، يتحول النقص في الكتلة إلى طاقة ترابط نووية هائلة تتغلب على قوى التنافر الكهروستاتيكي بين البروتونات.',
          explanationEn: 'Mass defect transforms into binding energy holding protons and neutrons together against electrostatic repulsion.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-c5-5',
          textAr: 'عند حساب $\\Delta H$ لتفاعل كيميائي باستخدام طاقات الروابط، فإن عملية كسر الروابط في المواد المتفاعلة تمثل عملية:',
          textEn: 'When calculating reaction ΔH from bond energies, breaking reactant bonds is always an:',
          optionsAr: [
            'ماصة للحرارة بإشارة موجبة (+)',
            'طاردة للحرارة بإشارة سالبة (-)',
            'لا يصاحبها أي تغير في الطاقة',
            'نووية إشعاعية'
          ],
          optionsEn: [
            'Endothermic process with positive sign (+)',
            'Exothermic process with negative sign (-)',
            'Zero energy neutral transition',
            'Radioactive nuclear event'
          ],
          correctIndex: 0,
          conceptTestedAr: 'طاقات الروابط وإشارة كسر وتكوين الروابط',
          conceptTestedEn: 'Bond breaking endothermic convention',
          explanationAr: 'كسر الروابط يتطلب دائماً امتصاص طاقة (عملية ماصة للحرارة ذات إشارة موجبة)، بينما تكوين الروابط يطلق طاقة (عملية طاردة ذات إشارة سالبة).',
          explanationEn: 'Breaking chemical bonds always requires energy input (+ endothermic), while forming bonds releases energy (- exothermic).',
          difficulty: 'easy'
        }
      ]
    }
  }
];
