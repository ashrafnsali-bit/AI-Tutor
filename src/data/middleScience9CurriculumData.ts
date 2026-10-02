import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL GENERAL SCIENCE & PREP 3 (علوم الصف الثالث الإعدادي / لغات وعربي)
// Official Grade 9 / Prep 3 National Ministry & Language School Curriculum Alignment:
// Unit 1: Chemical Reactions (Thermal Decomposition, Substitution, Redox) & Speed of Reaction
// Unit 2: Motion, Speed, Acceleration & Physical Quantities (Scalars & Vectors)
// Unit 3: Light Energy: Mirrors (Plane, Concave, Convex) & Lenses (Convex, Concave & Vision Defects)
// Unit 4: The Universe & Solar System (Big Bang Theory, Galaxies & Origin of Solar System)
// Unit 5: Genetics, Heredity (Mendel's Laws, DNA & Chromosomes) & Radioactivity
// ============================================================================

export const MIDDLE_SCIENCE_G9_LECTURES: Lecture[] = [
  // ── LECTURE 1: CHEMICAL REACTIONS & REACTION SPEED ──
  {
    id: 'm9-sci-1',
    order: 1,
    titleAr: 'المحاضرة 1: التفاعلات الكيميائية (الانحلال الحراري، الإحلال، الأكسدة والاختزال) وسرعة التفاعل',
    titleEn: 'Lecture 1: Chemical Reactions (Thermal Decomposition, Substitution, Redox) & Reaction Rate',
    subtitleAr: 'دراسة أنواع التفاعلات الكيميائية الثلاثة، مفهوم الأكسدة والاختزال التقليدي والإلكتروني، والعوامل المؤثرة في سرعة التفاعل الكيميائي',
    subtitleEn: 'Master the 3 types of chemical reactions, classical & electronic Redox mechanisms, and factors affecting chemical reaction rates (catalysts, temperature, concentration).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School General Science',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: التفاعلات الكيميائية وسرعة التفاعل',
    unitTitleEn: 'Unit 1: Chemical Reactions & Reaction Rates',
    lessonNumberAr: 'الدرس 1: أنواع التفاعلات الكيميائية وسرعتها',
    lessonNumberEn: 'Lesson 1: Reaction Types & Chemical Kinetics',

    // Real-world hook
    warmupHookAr: 'عندما تصطدم سيارة فجأة، تنتفخ الوسادة الهوائية (Airbag) في أقل من 0.04 ثانية لإنقاذ حياة السائق! كيف يحدث ذلك؟ عن طريق تفاعل انحلال كيميائي فائق السرعة لمادة أزيد الصوديوم (NaN₃) بفعل شرر كهربي ليولد غاز النيتروجين فوراً. التفاعلات الكيميائية هي المحرك الأساسي لكل الصناعات الدوائية، بطاريات السيارات الكهربائية، والعمليات الحيوية داخل أجسامنا!',
    warmupHookEn: 'Airbags deploy in 40 milliseconds using rapid sodium azide decomposition triggered by electrical sparks. Chemical reaction kinetics and redox processes drive everything from electric car batteries to industrial pharmaceuticals!',

    // Targeted Learning Outcomes
    learningOutcomesAr: [
      'أن يصنف الطالب تفاعلات الانحلال الحراري (Thermal Decomposition) لأكاسيد الفلزات، هيدروكسيداتها، كربوناتها، وكبريتاتها بالمعادلات الرمزية الموزونة',
      'أن يميز بين تفاعلات الإحلال البسيط (وفق متسلسلة النشاط الكيميائي) وتفاعلات الإحلال المزدوج (التعادل، الترسيب)',
      'أن يوضح مفهوم الأكسدة والاختزال بالمفهوم التقليدي (الأكسجين والهيدروجين) والمفهوم الحديث (فقد واكتساب الإلكترونات)',
      'أن يحدد العوامل المؤثرة في سرعة التفاعل الكيميائي: طبيعة المتفاعلات، التركيز، درجة الحرارة، والعوامل الحفازة والإنزيمات'
    ],
    learningOutcomesEn: [
      'Classify thermal decomposition reactions with balanced equations',
      'Distinguish single substitution (via Chemical Activity Series) and double substitution (neutralization, precipitation)',
      'Explain Oxidation and Reduction via classical (O/H) and electronic electron-transfer mechanisms',
      'Analyze factors affecting reaction speed: nature of reactants, concentration, temperature, catalysts, and enzymes'
    ],

    // Vocabulary
    vocabulary: [
      {
        termAr: 'متسلسلة النشاط الكيميائي (Chemical Activity Series)',
        termEn: 'Chemical Activity Series',
        definitionAr: 'ترتيب العناصر الفلزية ترتيباً تنازلياً حسب درجة نشاطها الكيميائي، حيث يحل الفلز الأكثر نشاطاً محل الفلز الأقل نشاطاً في محاليل أملاحه.',
        definitionEn: 'An arrangement of metals in descending order of chemical reactivity.'
      },
      {
        termAr: 'الأكسدة والاختزال الإلكتروني (Electronic Redox)',
        termEn: 'Electronic Redox',
        definitionAr: 'الأكسدة: عملية كيميائية تفقد فيها ذرة العنصر إلكتروناً أو أكثر. الاختزال: عملية كيميائية تكتسب فيها الذرة إلكتروناً أو أكثر (وهما عمليتان متلازمتان).',
        definitionEn: 'Oxidation is electron loss; Reduction is electron gain (simultaneous complementary processes).'
      },
      {
        termAr: 'العامل الحفاز والإنزيم (Catalyst & Enzyme)',
        termEn: 'Catalyst & Enzyme',
        definitionAr: 'مادة كيميائية تزيد من سرعة التفاعل الكيميائي دون أن تتغير أو تستهلك. والإنزيمات هي عوامل حفازة حيوية تفرزها خلايا الكائنات الحية.',
        definitionEn: 'Substances that increase chemical reaction rate without undergoing permanent chemical change.'
      }
    ],

    keyConceptsAr: [
      'انحلال أكسيد الزئبق الأحمر بالحرارة: 2HgO ⟹ 2Hg (فضي) + O₂ ↑',
      'انحلال كربونات النحاس الخضراء: CuCO₃ ⟹ CuO (أسود) + CO₂ ↑',
      'تفاعل التعادل (حمض + قلوي = ملح + ماء): HCl + NaOH ⟹ NaCl + H₂O',
      'المفهوم الإلكتروني: الفلز يتأكسد (عامل مختزل يفقد إلكترونات) واللافلز يُختزل (عامل مؤكسد يكتسب إلكترونات)',
      'زيادة مساحة السطح ودرجة الحرارة والتركيز تزيد من عدد التصادمات بين الجزيئات فتزيد سرعة التفاعل'
    ],
    keyConceptsEn: [
      'Thermal decomposition of metal oxides, carbonates, hydroxides, and sulfates',
      'Neutralization reaction: Acid + Base = Salt + Water',
      'Electronic redox: Metals oxidize (reducing agents); Non-metals reduce (oxidizing agents)',
      'Collision theory: surface area, temperature, and concentration increase reaction rate'
    ],

    summaryAr: 'تتناول هذه المحاضرة كيمياء الصف الثالث الإعدادي: تصنيف التفاعلات الكيميائية (الانحلال الحراري، الإحلال البسيط والمزدوج، والأكسدة والاختزال بالمفهومين التقليدي والإلكتروني)، والعوامل المؤثرة على سرعة التفاعلات الكيميائية.',
    summaryEn: 'Comprehensive Grade 9 chemistry lecture: classifying chemical reactions (thermal decomposition, single/double replacement, classical & electronic redox), and kinetics factors.',

    sections: [
      {
        titleAr: '1. تفاعلات الانحلال الحراري وتفاعلات الإحلال',
        titleEn: '1. Thermal Decomposition & Substitution Reactions',
        contentAr: '1) تفاعلات الانحلال الحراري (Thermal Decomposition):\n- تفكك المركب بالحرارة إلى عناصره الأولية أو مركبات أبسط منه:\n  * أكسيد الزئبق الأحمر: 2HgO ⟹ 2Hg (زئبق فضي) + O₂ ↑ (يزيد توهج شظية مشتعلة).\n  * هيدروكسيد النحاس الأزرق: Cu(OH)₂ ⟹ CuO (أكسيد نحاس أسود) + H₂O ↑.\n  * كربونات النحاس الخضراء: CuCO₃ ⟹ CuO (أسود) + CO₂ ↑ (يعكر ماء الجير الرائق).\n  * كبريتات النحاس الزرقاء: CuSO₄ ⟹ CuO (أسود) + SO₃ ↑.\n  * نترات الصوديوم البيضاء: 2NaNO₃ ⟹ 2NaNO₂ (نيتريت صوديوم أبيض مصفر) + O₂ ↑.\n\n2) تفاعلات الإحلال (Substitution Reactions):\n- إحلال بسيط: عنصر نشط يحل محل عنصر أقل نشاطاً وفق متسلسلة النشاط الكيميائي:\n  * الخارصين مع الحمض: Zn + 2HCl ⟹ ZnCl₂ + H₂ ↑ (يشتعل بفرقعة).\n  * المغنيسيوم مع كبريتات النحاس: Mg + CuSO₄ ⟹ MgSO₄ + Cu ↓ (راسب أحمر).\n- إحلال مزدوج: تبادل شقي الأيونات بين مركبين:\n  * تعادل: NaOH + HCl ⟹ NaCl + H₂O.\n  * ترسيب: NaCl + AgNO₃ ⟹ NaNO₃ + AgCl ↓ (راسب أبيض من كلوريد الفضة).',
        contentEn: 'Thermal decomposition breaks down compounds via heat. Single substitution relies on the Chemical Activity Series. Double substitution includes neutralization and precipitation (AgCl white precipitate).'
      },
      {
        titleAr: '2. الأكسدة والاختزال وسرعة التفاعل الكيميائي',
        titleEn: '2. Electronic Redox & Factors Affecting Reaction Speed',
        contentAr: '1) الأكسدة والاختزال بالمفهوم الإلكتروني الحديث:\n- تفاعل الصوديوم مع الكلور: 2Na + Cl₂ ⟹ 2NaCl.\n  * ذرة الصوديوم تفقد إلكتروناً (Na ⟹ Na⁺ + e⁻) ⟹ حدثت لها أكسدة، فالصوديوم "عامل مختزل".\n  * ذرة الكلور تكتسب إلكتروناً (Cl + e⁻ ⟹ Cl⁻) ⟹ حدث لها اختزال، فالكلور "عامل مؤكسد".\n  * القاعدة: العامل عكس العملية (الأكسدة يقابلها عامل مختزل، والاختزال يقابله عامل مؤكسد).\n\n2) العوامل المؤثرة في سرعة التفاعل الكيميائي:\n- طبيعة المتفاعلات: المركبات الأيونية تتفاعل أسرع من التساهمية لأنها تتفكك كلياً إلى أيونات، وزيادة مساحة السطح (برادة الحديد أسرع من قطعة الحديد).\n- تركيز المتفاعلات: زيادة التركيز تزيد عدد الجزيئات المتفاعلة وعدد التصادمات المحتملة.\n- درجة الحرارة: رفع الحرارة يزيد من طاقة حركة الجزيئات وسرعتها وعدد التصادمات.\n- العوامل الحفازة (مثل ثاني أكسيد المنجنيز MnO₂) والإنزيمات (مثل إنزيم الأوكسيديز في البطاطا): تزيد سرعة تفكك فوق أكسيد الهيدروجين (ماء الأكسجين) إلى ماء وأكسجين.',
        contentEn: 'Redox: Oxidation is electron loss (Reducing agent); Reduction is electron gain (Oxidizing agent). Reaction speed is elevated by ionic bonding, higher surface area, concentration, temperature, and catalysts/enzymes.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-sci-1',
        questionAr: 'علل لما يأتي مدعماً إجابتك بالمعادلات الكيميائية الموزونة:\n1) تكون راسب أحمر عند إضافة قطعة من الخارصين أو المغنيسيوم إلى محلول كبريتات النحاس الزرقاء.\n2) تفاعل برادة الحديد مع حمض الهيدروكلوريك المخفف أسرع من تفاعل قطعة حديد مساوية لها في الكتلة.',
        questionEn: 'Explain with balanced equations: 1) Red precipitate formed when Mg is added to CuSO₄ solution. 2) Iron filings react faster with HCl than a solid iron block of equal mass.',
        solutionStepsAr: [
          '1) لأن المغنيسيوم يسبق النحاس في متسلسلة النشاط الكيميائي فيكون أكثر منه نشاطاً ويحل محله في محلول كبريتات النحاس ويترسب النحاس الأحمر:\nMg + CuSO₄ ⟹ MgSO₄ + Cu ↓ (راسب أحمر).',
          '2) لأن مساحة السطح المعرضة للتفاعل في حالة برادة الحديد أكبر من قطعة الحديد، وسرعة التفاعل الكيميائي تزداد بزيادة مساحة السطح المعرضة للتفاعل لزيادة عدد التصادمات بين الجزيئات المتفاعلة.'
        ],
        solutionStepsEn: [
          '1) Magnesium precedes copper in the Chemical Activity Series, substituting it and precipitating red copper: Mg + CuSO₄ ⟹ MgSO₄ + Cu ↓.',
          '2) Iron filings possess greater exposed surface area than solid blocks, increasing particle collision frequency and reaction rate.'
        ],
        answerAr: '1) Mg + CuSO₄ ⟹ MgSO₄ + Cu ↓ (راسب أحمر) • 2) لزيادة مساحة السطح المعرض للتفاعل في البرادة',
        answerEn: '1) Mg replaces Cu yielding red Cu precipitate • 2) Greater surface area increases collisions'
      }
    ],

    assessment: {
      id: 'quiz-m9-sci-1',
      lectureId: 'm9-sci-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: التفاعلات الكيميائية وسرعتها',
      titleEn: 'Mastery Assessment 1: Chemical Reactions & Kinetics',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-sci-1',
          textAr: 'عند تسخين كربونات النحاس الخضراء بشدة، يتصاعد غاز ........... وتتكون مادة سوداء اللون:',
          textEn: 'When heating green copper carbonate strongly, ........... gas evolves leaving a black residue:',
          optionsAr: ['ثاني أكسيد الكربون (CO₂)', 'الأكسجين (O₂)', 'الهيدروجين (H₂)', 'ثالث أكسيد الكبريت (SO₃)'],
          optionsEn: ['Carbon dioxide (CO₂)', 'Oxygen (O₂)', 'Hydrogen (H₂)', 'Sulfur trioxide (SO₃)'],
          correctIndex: 0,
          conceptTestedAr: 'الانحلال الحراري لكربونات الفلزات',
          conceptTestedEn: 'Thermal Decomposition of Carbonates',
          explanationAr: 'تنحل كربونات النحاس CuCO₃ بالحرارة إلى أكسيد نحاس أسود CuO ويتصاعد غاز ثاني أكسيد الكربون CO₂ الذي يعكر ماء الجير.',
          explanationEn: 'CuCO₃ decomposes into black copper oxide CuO and carbon dioxide gas CO₂.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-sci-1',
          textAr: 'في التفاعل: 2Na + Cl₂ ⟹ 2NaCl، تعتبر ذرة الصوديوم:',
          textEn: 'In 2Na + Cl₂ ⟹ 2NaCl, the sodium atom acts as:',
          optionsAr: ['عاملاً مختزلاً حدثت له أكسدة', 'عاملاً مؤكسداً حدث له اختزال', 'مادة خاملة', 'حمضاً'],
          optionsEn: ['Reducing agent undergoing oxidation', 'Oxidizing agent undergoing reduction', 'Inert substance', 'Acid'],
          correctIndex: 0,
          conceptTestedAr: 'المفهوم الإلكتروني للأكسدة والعامل المختزل',
          conceptTestedEn: 'Electronic Concept of Oxidation & Reducing Agent',
          explanationAr: 'الصوديوم فلز فقد إلكترون تكافؤه الخارجي فتأكسد، والفاعل الذي تحدث له أكسدة هو "عامل مختزل".',
          explanationEn: 'Sodium loses its valence electron (oxidation), thus acting as a reducing agent.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: MOTION, SPEED, ACCELERATION & VECTORS ──
  {
    id: 'm9-sci-2',
    order: 2,
    titleAr: 'المحاضرة 2: الحركة في اتجاه واحد، السرعة المنتظمة والنسبية، والعجلة والكميات الفيزيائية',
    titleEn: 'Lecture 2: Motion in One Direction, Velocity, Relative Speed, Acceleration & Vectors',
    subtitleAr: 'دراسة السرعة المنتظمة وغير المنتظمة والمتوسطة (v = d/t)، السرعة النسبية، العجلة المنتظمة الموجبة والسالبة (a = Δv/Δt)، والكميات القياسية والمتجهة',
    subtitleEn: 'Master speed formulas (uniform, non-uniform, average v=d/t), relative velocity for moving observers, uniform acceleration (a = Δv/Δt), and scalar vs vector physical quantities.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: القوى والحركة (الحركة والسرعة والعجلة)',
    unitTitleEn: 'Unit 2: Forces & Motion: Kinematics & Vectors',
    lessonNumberAr: 'الدرس 2: السرعة والعجلة والتمثيل البياني للحركة',
    lessonNumberEn: 'Lesson 2: Velocity, Acceleration & Motion Graphs',

    warmupHookAr: 'عندما ترصد رادارات المرور الذكية سرعة السيارات على الطرق السريعة أو عندما يخطط مهندسو الفضاء مسار انطلاق صواريخ فالكون، فإنهم يحسبون "معدل التغير في المسافة بالنسبة للزمن" (السرعة) و"معدل تغير السرعة" (العجلة). هذه القوانين الفيزيائية الكلاسيكية هي عصب صناعة السيارات ذاتية القيادة والملاحة الجوية الحديثة!',
    warmupHookEn: 'Smart traffic radars and aerospace telemetry calculate instantaneous velocity (v = d/t) and acceleration (a = Δv/Δt) to control autonomous vehicle navigation and spacecraft trajectories!',

    learningOutcomesAr: [
      'أن يطبق الطالب قانون السرعة: السرعة = المسافة / الزمن (v = d/t) ويحول بين الوحدات (م/ث و كم/س بالضرب أو القسمة على 5/18)',
      'أن يميز بين السرعة المنتظمة والسرعة غير المنتظمة والسرعة المتوسطة (v̄ = المسافة الكلية / الزمن الكلي)',
      'أن يحسب السرعة النسبية لسيارة بالنسبة لمراقب ساكن أو متحرك في نفس الاتجاه أو في عكس الاتجاه',
      'أن يمثل بيانيا حركات السرعة المنتظمة (خط مستقيم مائل في منحنى d-t) والعجلة المنتظمة (منحنى v-t)',
      'أن يطبق قانون العجلة: a = (v₂ - v₁) / Δt ويميز بين العجلة الموجبة (التزايدية) والسالبة (التناقصية)',
      'أن يفرق بين الكميات الفيزيائية القياسية (المسافة، الكتلة، الزمن) والمتجهة (الإزاحة، السرعة المتجهة، القوة)'
    ],
    learningOutcomesEn: [
      'Apply velocity equation v = d/t and convert units between m/s and km/h (factor 5/18)',
      'Distinguish uniform, non-uniform, and average speed (v̄ = Total Distance / Total Time)',
      'Calculate relative speed for stationary and moving observers (same vs opposite direction)',
      'Interpret distance-time and velocity-time graphs',
      'Compute acceleration a = (v₂ - v₁)/Δt and classify positive vs negative acceleration',
      'Differentiate scalar quantities (distance, mass, speed) from vector quantities (displacement, velocity, force)'
    ],

    vocabulary: [
      {
        termAr: 'السرعة المتوسطة (Average Speed - v̄)',
        termEn: 'Average Speed (v̄)',
        definitionAr: 'المسافة الكلية المقطوعة مقسومة على الزمن الكلي المستغرق لقطع هذه المسافة: v̄ = d_total / t_total.',
        definitionEn: 'Total distance traveled divided by total elapsed time.'
      },
      {
        termAr: 'السرعة النسبية (Relative Speed)',
        termEn: 'Relative Speed',
        definitionAr: 'سرعة جسم متحرك بالنسبة لمراقب ساكن أو متحرك.',
        definitionEn: 'The apparent speed of a moving body observed by a stationary or moving observer.'
      },
      {
        termAr: 'العجلة (Acceleration - a)',
        termEn: 'Acceleration (a)',
        definitionAr: 'المقدار الذي تتغير به سرعة الجسم في الثانية الواحدة: a = (v₂ - v₁) / Δt (وتقاس بوحدة م/ث²).',
        definitionEn: 'The rate of change of velocity per unit time: a = Δv / Δt (measured in m/s²).'
      }
    ],

    keyConceptsAr: [
      'تحويل السرعة: من كم/س إلى م/ث نضرب في 5/18 (والعكس نضرب في 18/5)',
      'السرعة النسبية:\n- مراقب ساكن: السرعة النسبية = السرعة الفعلية\n- مراقب في عكس الاتجاه: السرعة النسبية = الفعلية + سرعة المراقب (تظهر أسرع)\n- مراقب في نفس الاتجاه: السرعة النسبية = الفعلية - سرعة المراقب (تظهر أبطأ)',
      'العجلة المنتظمة: a = (v₂ - v₁) / t:\n- عجلة موجبة (تزايدية v₂ > v₁)\n- عجلة سالبة (تناقصية / تقصيرية v₂ < v₁ عندما يضغط السائق على الفرامل)\n- عجلة صفرية عندما يتحرك الجسم بسرعة منتظمة ثابتة (v₂ = v₁)',
      'المسافة كمية قياسية (طول المسار الفعلي)، والإزاحة كمية متجهة (أقصر خط مستقيم من البداية للنهاية)'
    ],
    keyConceptsEn: [
      'Conversion: 1 km/h = 5/18 m/s',
      'Relative speed rules for stationary, same-direction, and opposite-direction observers',
      'Acceleration sign: Positive (accelerating), Negative (braking/decelerating), Zero (constant speed)',
      'Scalar distance vs vector displacement'
    ],

    summaryAr: 'تتناول هذه المحاضرة الفيزياء الميكانيكية للصف الثالث الإعدادي: قوانين السرعة والسرعة النسبية والتمثيل البياني، مفهوم العجلة وأنواعها وحساباتها، والتمييز الدقيق بين الكميات القياسية والمتجهة (المسافة والإزاحة).',
    summaryEn: 'Covers kinematics: speed definitions, relative speed calculations, distance-time/velocity-time graph interpretation, uniform acceleration equations, and scalar vs vector physical quantities.',

    sections: [
      {
        titleAr: '1. قوانين السرعة والسرعة النسبية والتمثيل البياني',
        titleEn: '1. Speed Formulas, Relative Speed & Graphs',
        contentAr: '1) السرعة (v = d/t): تقاس بـ (م/ث) أو (كم/س). للتحويل من كم/س إلى م/ث نضرب في 5/18 (مثل: 72 كم/س = 72 × 5/18 = 20 م/ث).\n2) السرعة النسبية:\n- إذا تحركت سيارتان في عكس الاتجاه (السيارة A بسرعة 70 كم/س والسيارة B بسرعة 50 كم/س): السرعة النسبية للسيارة A بالنسبة للمراقب في B = 70 + 50 = 120 كم/س.\n- إذا تحركتا في نفس الاتجاه: السرعة النسبية = 70 - 50 = 20 كم/س.\n3) التمثيل البياني للحركة:\n- علاقة مسافة - زمن (d - t): خط مستقيم مائل يمر بنقطة الأصل يمثل "سرعة منتظمة"، وخط أفقي يوازي محور الزمن يمثل "جسماً ساكناً".\n- علاقة سرعة - زمن (v - t): خط أفقي يوازي محور الزمن يمثل "سرعة منتظمة وعجلة = صفر".',
        contentEn: 'Velocity v = d/t. Relative speed adds in opposite directions and subtracts in same directions. Distance-time straight line = constant velocity; horizontal line = stationary.'
      },
      {
        titleAr: '2. العجلة المنتظمة والكميات القياسية والمتجهة',
        titleEn: '2. Uniform Acceleration & Scalar vs Vector Quantities',
        contentAr: '1) العجلة المنتظمة (a = Δv / Δt = (v₂ - v₁) / t):\n- العجلة الموجبة: تزداد فيها السرعة بمرور الزمن (v₂ > v₁)، وقيمتها موجبة، وتمثل بخط مائل صاعد في منحنى (v - t).\n- العجلة السالبة (التقصيرية): تتناقص فيها السرعة بمرور الزمن (v₂ < v₁)، وقيمتها سالبة، وتحدث عند استخدام المكابح.\n- الجسم الذي يتحرك بسرعة منتظمة عجلته تساوي صفراً لأن سرعته لا تتغير (Δv = 0).\n2) الكميات القياسية والمتجهة:\n- الكمية القياسية: يلزم لتعريفها المقدار ووحدة القياس فقط (الكتلة، الطول، الزمن، المسافة، السرعة القياسية).\n- الكمية المتجهة: يلزم لتعريفها المقدار والاتجاه ووحدة القياس (الإزاحة، السرعة المتجهة، العجلة، القوة).\n* الفرق بين المسافة والإزاحة: إذا تحرك جسم شمالاً 40م ثم شرقاً 30م، فالمسافة = 40 + 30 = 70م، بينما الإزاحة = √(40² + 30²) = 50م في اتجاه الشمال الشرقي.',
        contentEn: 'Acceleration a = (v₂ - v₁)/t. Positive acceleration means velocity rises; negative means braking; constant speed has zero acceleration. Scalar needs magnitude only; vector needs magnitude and direction.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-sci-2',
        questionAr: 'تحركت سيارة من السكون فوصلت سرعتها إلى 25 م/ث خلال 5 ثوانٍ، ثم ضغط السائق على الفرامل فتوقفت السيارة تماماً بعد 10 ثوانٍ أخرى. احسب:\n1) العجلة التي تحركت بها السيارة في الفترة الأولى ونوعها.\n2) العجلة التي تحركت بها السيارة في الفترة الثانية ونوعها.',
        questionEn: 'A car starts from rest, reaches 25 m/s in 5s, then brakes to a complete stop in 10s. Compute acceleration and type for: 1) First period, 2) Second period.',
        solutionStepsAr: [
          '1) الفترة الأولى (من السكون ⟹ v₁ = 0 ، والسرعة النهائية v₂ = 25 م/ث ، والزمن t = 5 ث):\na₁ = (v₂ - v₁) / t = (25 - 0) / 5 = +5 م/ث² (عجلة منتظمة موجبة / تزايدية).\n\n2) الفترة الثانية (السرعة الابتدائية v₁ = 25 م/ث ، توقفت تماماً ⟹ v₂ = 0 ، والزمن t = 10 ث):\na₂ = (v₂ - v₁) / t = (0 - 25) / 10 = -2.5 م/ث² (عجلة منتظمة سالبة / تناقصية تقصيرية).'
        ],
        solutionStepsEn: [
          '1) Period 1: a₁ = (25 - 0)/5 = +5 m/s² (Uniform positive acceleration).',
          '2) Period 2: a₂ = (0 - 25)/10 = -2.5 m/s² (Uniform negative deceleration).'
        ],
        answerAr: '1) a₁ = +5 م/ث² (موجبة تزايدية) • 2) a₂ = -2.5 م/ث² (سالبة تناقصية)',
        answerEn: '1) a₁ = +5 m/s² (positive) • 2) a₂ = -2.5 m/s² (negative)'
      }
    ],

    assessment: {
      id: 'quiz-m9-sci-2',
      lectureId: 'm9-sci-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: الحركة والسرعة والعجلة',
      titleEn: 'Mastery Assessment 2: Motion, Speed & Acceleration',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-sci-2',
          textAr: 'عندما يتحرك جسم بسرعة منتظمة ثابتة، فإن عجلته تساوي:',
          textEn: 'When a body moves at constant uniform speed, its acceleration equals:',
          optionsAr: ['صفراً', 'قيمة موجبة', 'قيمة سالبة', 'ما لا نهاية'],
          optionsEn: ['Zero', 'Positive value', 'Negative value', 'Infinity'],
          correctIndex: 0,
          conceptTestedAr: 'عجلة السرعة المنتظمة',
          conceptTestedEn: 'Uniform Speed Acceleration',
          explanationAr: 'العجلة هي معدل التغير في السرعة، وبما أن السرعة منتظمة ثابتة (v₂ = v₁)، فإن التغير في السرعة Δv = 0، وبالتالي العجلة = صفر.',
          explanationEn: 'Acceleration measures velocity change. Constant velocity has Δv = 0, so acceleration = 0.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-sci-2',
          textAr: 'مراقب يتحرك بسرعة 40 كم/س في نفس اتجاه سيارة تتحرك بسرعة 90 كم/س، يرى السيارة تسير بسرعة نسبية قدرها:',
          textEn: 'An observer moving at 40 km/h in the same direction as a car moving at 90 km/h measures relative speed as:',
          optionsAr: ['50 كم/س', '130 كم/س', '90 كم/س', '40 كم/س'],
          optionsEn: ['50 km/h', '130 km/h', '90 km/h', '40 km/h'],
          correctIndex: 0,
          conceptTestedAr: 'حساب السرعة النسبية في نفس الاتجاه',
          conceptTestedEn: 'Same Direction Relative Speed',
          explanationAr: 'في نفس الاتجاه: السرعة النسبية = السرعة الفعلية - سرعة المراقب = 90 - 40 = 50 كم/س.',
          explanationEn: 'In the same direction: Relative speed = Actual speed - Observer speed = 90 - 40 = 50 km/h.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: LIGHT ENERGY: MIRRORS, LENSES & VISION DEFECTS ──
  {
    id: 'm9-sci-3',
    order: 3,
    titleAr: 'المحاضرة 3: الطاقة الضوئية: المرايا (المستوية والكرية) والعدسات وعيوب الإبصار',
    titleEn: 'Lecture 3: Light Energy: Mirrors (Plane & Spherical), Lenses & Vision Defects',
    subtitleAr: 'دراسة قوانين انعكاس وانكسار الضوء، خواص الصور في المرآة المقعرة والمحدبة والعدسة المحدبة والمقعرة، وعيوب الإبصار (قصر وطول النظر) وطرق علاجها',
    subtitleEn: 'Master laws of reflection and refraction, real vs virtual image formation in concave/convex mirrors and convex/concave lenses, and vision defects (myopia and hyperopia) correction.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: الطاقة الضوئية (المرايا والعدسات)',
    unitTitleEn: 'Unit 3: Optical Energy: Mirrors & Lenses',
    lessonNumberAr: 'الدرس 3: البصريات والمرايا والعدسات وعيوب النظر',
    lessonNumberEn: 'Lesson 3: Optics, Spherical Mirrors & Lenses',

    warmupHookAr: 'تلسكوب جيمس ويب الفضائي الذي يرسل أعمق صور للكون السحيق، وكاميرات الهواتف الذكية المجهرية، ونظارات تصحيح النظر، كلها تعتمد على فيزياء "المرايا والعدسات"! كيف تجمع المرآة المقعرة أشعة الشمس في نقطة بؤرية محرقة؟ وكيف تصحح العدسة المقعرة قصر النظر؟ علم البصريات هو المعجزة الهندسية التي مكنت البشر من استكشاف الفضاء الخارجي وعالم الجسيمات الدقيقة!',
    warmupHookEn: 'From the James Webb Space Telescope’s concave gold mirrors to smartphone micro-lenses and corrective eyewear, optics physics manipulates focal lengths and ray geometry to expand human vision across the cosmos!',

    learningOutcomesAr: [
      'أن يطبق الطالب قانوني انعكاس الضوء: 1) زاوية السقوط = زاوية الانعكاس، 2) الشعاع الساقط والمنعكس والعمود المقام تقع في مستوى واحد',
      'أن يقارن بين المرآة المقعرة (المجمعة) والمرآة المحدبة (المفرقة) ويحدد قطب المرآة (P)، مركز التكور (C)، والبؤرة الأصلية (F)',
      'أن يرسم مسارات الأشعة الضوئية ويحدد خواص الصور المتكونة بالمرآة المقعرة والعدسة المحدبة عند مواضع مختلفة للجسم',
      'أن يقارن بين عيوب الإبصار: قصر النظر (Myopia) وعلاجه بعدسة مقعرة، وطول النظر (Hyperopia) وعلاجه بعدسة محدبة'
    ],
    learningOutcomesEn: [
      'Apply the 2 laws of light reflection (Angle of Incidence = Angle of Reflection)',
      'Distinguish concave (converging) and convex (diverging) spherical mirrors and lenses',
      'Construct ray diagrams to determine image properties at various object distances relative to focal point and center of curvature',
      'Compare vision defects: Myopia (corrected via concave lens) and Hyperopia (corrected via convex lens)'
    ],

    vocabulary: [
      {
        termAr: 'البعد البؤري (Focal Length - f)',
        termEn: 'Focal Length (f)',
        definitionAr: 'المسافة بين بؤرة المرآة الأصلية وقطبها (أو بين بؤرة العدسة ومركزها البصري)، والعلاقة مع نصف قطر التكور هي: r = 2f (البعد البؤري = نصف القطر / 2).',
        definitionEn: 'The distance between the focal point and mirror pole / optical center of lens: f = r / 2.'
      },
      {
        termAr: 'الصورة الحقيقية والصورة التقديرية (Real vs Virtual Image)',
        termEn: 'Real vs Virtual Image',
        definitionAr: 'الصورة الحقيقية: يمكن استقبالها على حائل وتتكون من تلاقي الأشعة الضوئية المنعكسة/المنكسرة وتكون دائماً مقلوبة. الصورة التقديرية: لا يمكن استقبالها على حائل وتتكون من امتدادات الأشعة وتكون دائماً معتدلة.',
        definitionEn: 'Real image: can be projected on a screen, formed by intersecting rays, always inverted. Virtual image: cannot be projected, formed by ray extensions, always upright.'
      }
    ],

    keyConceptsAr: [
      'العلاقة بين نصف قطر التكور والبعد البؤري: r = 2f ⟹ f = r / 2',
      'المرآة المقعرة والعدسة المحدبة (مجمعتان للضوء):\n- الجسم بعد مركز التكور (> 2f): صورة حقيقية مقلوبة مصغرة (بين f و 2f)\n- الجسم عند مركز التكور (= 2f): صورة حقيقية مقلوبة مساوية للجسم\n- الجسم بين البؤرة ومركز التكور (بين f و 2f): صورة حقيقية مقلوبة مكبرة (> 2f)\n- الجسم عند البؤرة (= f): لا تتكون صورة (تنفذ الأشعة متوازية إلى ما لا نهاية)\n- الجسم قبل البؤرة (< f): صورة تقديرية معتدلة مكبرة خلف المرآة',
      'قصر النظر: تجمع الأشعة أمام الشبكية بسبب زيادة قطر كرة العين ⟹ يعالج بعدسة مقعرة لتفريق الأشعة',
      'طول النظر: تجمع الأشعة خلف الشبكية بسبب قصر قطر كرة العين ⟹ يعالج بعدسة محدبة لتجميع الأشعة'
    ],
    keyConceptsEn: [
      'Radius-focal length relationship: r = 2f',
      'Ray tracing rules for concave mirrors and convex lenses at different object positions',
      'Myopia: image forms in front of retina -> corrected with diverging concave lens',
      'Hyperopia: image forms behind retina -> corrected with converging convex lens'
    ],

    summaryAr: 'تتناول هذه المحاضرة فيزياء البصريات للصف الثالث الإعدادي: قوانين الانعكاس، مسارات الأشعة في المرايا والعدسات وخواص الصور، وعيوب الإبصار وطرق تصحيحها بالعدسات.',
    summaryEn: 'Comprehensive optics lecture covering reflection laws, spherical mirrors, convex/concave lens ray diagrams, image formations, and vision defect corrections.',

    sections: [
      {
        titleAr: '1. المرايا الكرية ومسارات الأشعة وخواص الصور',
        titleEn: '1. Spherical Mirrors & Ray Tracing Geometry',
        contentAr: '1) المفاهيم الأساسية في المرآة الكرية:\n- قطب المرآة (P): نقطة تتوسط السطح العاكس.\n- مركز التكور (C): مركز الكرة التي تعتبر المرآة جزءاً من سطحها.\n- المحور الأصلي: المستقيم المار بقطب المرآة ومركز تكورها.\n- البؤرة الأصلية (F): نقطة تجمع الأشعة المنعكسة الموازية للمحور الأصلي.\n- البعد البؤري (f): المسافة بين البؤرة والقطب، ونصف قطر التكور r = 2f.\n\n2) قواعد مسارات الأشعة في المرآة المقعرة:\n- الشعاع الساقط موازياً للمحور الأصلي ⟹ ينعكس ماراً بالبؤرة الأصلية.\n- الشعاع الساقط ماراً بالبؤرة الأصلية ⟹ ينعكس موازياً للمحور الأصلي.\n- الشعاع الساقط ماراً بمركز التكور ⟹ ينعكس على نفسه لأن زاوية سقوطه وزاوية انعكاسه = صفر.',
        contentEn: 'Spherical mirrors have pole P, center C, focus F, and focal length f = r/2. Parallel incident rays reflect through focus; rays through center reflect back on themselves.'
      },
      {
        titleAr: '2. العدسات وعيوب الإبصار (قصر وطول النظر)',
        titleEn: '2. Lenses & Vision Defects (Myopia vs Hyperopia)',
        contentAr: '1) العدسة المحدبة (المجمعة) والعدسة المقعرة (المفرقة):\n- العدسة المحدبة سميكة من المنتصف ورقيقة من الطرفين وتجمع الأشعة.\n- المركز البصري للعدسة (O): نقطة في باطن العدسة، وأي شعاع يمر بها ينفذ على استقامته دون انكسار.\n\n2) عيوب الإبصار ومقارنتها:\n- قصر النظر (Myopia):\n  * يرى الأجسام القريبة بوضوح والبعيدة مشوهة.\n  * الأسباب: زيادة قطر كرة العين أو زيادة تحدب سطحي العدسة فتتجمع الأشعة "أمام الشبكية".\n  * العلاج: استخدام نظارة ذات "عدسات مقعرة" لتفريق الأشعة قبل دخولها للعين فتسقط على الشبكية تماماً.\n- طول النظر (Hyperopia):\n  * يرى الأجسام البعيدة بوضوح والقريبة مشوهة.\n  * الأسباب: صغر قطر كرة العين أو قلة تحدب سطحي العدسة فتتجمع الأشعة "خلف الشبكية".\n  * العلاج: استخدام نظارة ذات "عدسات محدبة" لتجميع الأشعة لتسقط على الشبكية.',
        contentEn: 'Lenses refract light. Myopia (near-sightedness): rays focus in front of retina -> corrected via concave diverging lens. Hyperopia (far-sightedness): rays focus behind retina -> corrected via convex converging lens.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-sci-3',
        questionAr: 'وضع جسم على بُعد 12 سم من مرآة مقعرة بعدها البؤري 5 سم. وضّح بالرسم مسار الأشعة مع ذكر خواص الصورة المتكونة وموضعها.',
        questionEn: 'An object is placed 12cm from a concave mirror with focal length 5cm. Draw ray paths and state image properties and location.',
        solutionStepsAr: [
          '1) البعد البؤري f = 5 سم ⟹ نصف قطر التكور r = 2f = 10 سم.',
          '2) موضع الجسم: الجسم يقع على بُعد 12 سم، أي "بعد مركز التكور C" (الجسم > 2f).',
          '3) مسار الأشعة:\n- نسقط شعاعاً موازياً للمحور الأصلي ⟹ ينعكس ماراً بالبؤرة F.\n- نسقط شعاعاً ماراً بالبؤرة F ⟹ ينعكس موازياً للمحور الأصلي.\n- نقطة تلاقي الشعاعين المنعكسين تقع "بين البؤرة ومركز التكور" (بين 5 سم و 10 سم).',
          '4) خواص الصورة المتكونة: حقيقية، مقلوبة، مصغرة.'
        ],
        solutionStepsEn: [
          '1) f = 5cm ⟹ r = 2f = 10cm.',
          '2) Object at 12cm is beyond center of curvature (> 2f).',
          '3) Rays intersect between F and C (between 5cm and 10cm).',
          '4) Image properties: Real, Inverted, Diminished.'
        ],
        answerAr: 'موضع الصورة: بين البؤرة ومركز التكور • خواص الصورة: حقيقية مقلوبة مصغرة',
        answerEn: 'Location: Between F and C • Properties: Real, Inverted, Diminished'
      }
    ],

    assessment: {
      id: 'quiz-m9-sci-3',
      lectureId: 'm9-sci-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: المرايا والعدسات',
      titleEn: 'Mastery Assessment 3: Mirrors & Lenses',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-sci-3',
          textAr: 'مرآة كرية نصف قطر تكورها 20 سم، يكون بعدها البؤري مساوياً لـ:',
          textEn: 'A spherical mirror with radius of curvature 20cm has a focal length of:',
          optionsAr: ['10 سم', '40 سم', '20 سم', '5 سم'],
          optionsEn: ['10 cm', '40 cm', '20 cm', '5 cm'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين البعد البؤري ونصف القطر',
          conceptTestedEn: 'Focal Length Radius Relation',
          explanationAr: 'البعد البؤري f = r / 2 = 20 / 2 = 10 سم.',
          explanationEn: 'f = r / 2 = 20 / 2 = 10 cm.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-sci-3',
          textAr: 'يُعالج قصر النظر باستخدام نظارة طبية ذات عدسات:',
          textEn: 'Myopia (near-sightedness) is corrected using eyeglasses with:',
          optionsAr: ['مقعرة', 'محدبة', 'مستوية', 'أسطوانية'],
          optionsEn: ['Concave lenses', 'Convex lenses', 'Plane lenses', 'Cylindrical lenses'],
          correctIndex: 0,
          conceptTestedAr: 'علاج قصر النظر بالعدسات المقعرة',
          conceptTestedEn: 'Correcting Myopia via Concave Lenses',
          explanationAr: 'تُستخدم العدسة المقعرة لتفريق الأشعة الضوئية قبل دخولها العين فتسقط على شبكية العين بدقة.',
          explanationEn: 'Concave lenses diverge light rays before entering the eye, focusing them accurately on the retina.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: THE UNIVERSE & SOLAR SYSTEM ──
  {
    id: 'm9-sci-4',
    order: 4,
    titleAr: 'المحاضرة 4: الكون والنظام الشمسي: نظرية الانفجار العظيم ونظريات نشأة المجموعة الشمسية',
    titleEn: 'Lecture 4: The Universe & Solar System: The Big Bang & Solar Origin Theories',
    subtitleAr: 'دراسة تمدد الكون والمجرات (مجرة درب التبانة)، السنة الضوئية، نظرية الانفجار العظيم (Big Bang)، ونظريات نشأة المجموعة الشمسية (السديم، النجم العابر، والنظرية الحديثة)',
    subtitleEn: 'Master cosmic expansion, Milky Way galaxy, light-year metrics, the Big Bang timeline, and the 3 theories of solar system origin (Nebular, Crossing Star, Modern Theory).',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: الكون والنظام الشمسي',
    unitTitleEn: 'Unit 4: The Universe & Solar System',
    lessonNumberAr: 'الدرس 4: الانفجار العظيم ونشأة المجموعة الشمسية',
    lessonNumberEn: 'Lesson 4: Cosmology & Solar System Evolution',

    warmupHookAr: 'عندما تنظر إلى سماء الليل المرصعة بالنجوم، أنت تنظر حرفياً إلى "الماضي السحيق"! فالضوء الذي تراه من أقرب نجم استغرق سنوات ليصل إليك. كيف وُلد هذا الكون الفسيح الذي يضم أكثر من 100 ألف مليون مجرة من نقطة متناهية الصغر قبل 13.8 مليار سنة؟ وكيف تكونت شمسنا وكواكبنا؟ هذا ما تجيب عنه نظريات الفيزياء الفلكية في هذه المحاضرة الشيقة!',
    warmupHookEn: 'The observable universe houses over 100 billion galaxies expanding since the Big Bang 13.8 billion years ago. Explore the cosmological timeline from cosmic inflation to Laplace’s solar nebula and modern stellar theories!',

    learningOutcomesAr: [
      'أن يعرّف الطالب الكون كوحدة متسعة تضم المجرات والنجوم والكواكب، ويعرّف السنة الضوئية (9.46 × 10¹² كم)',
      'أن يشرح مراحل تمدد الكون ونظرية الانفجار العظيم (Big Bang) والخط الزمني لتشكل غازي الهيدروجين (75%) والهيليوم (25%)',
      'أن يقارن بين النظريات الثلاث المفسرة لنشأة المجموعة الشمسية: 1) نظرية السديم للعالم لابلاس، 2) نظرية النجم العابر لتشامبرلن ومولتن، 3) النظرية الحديثة للعالم فريد هويل'
    ],
    learningOutcomesEn: [
      'Define the Universe, galaxies, and the Light-Year distance metric (9.46 × 10¹² km)',
      'Explain Big Bang cosmic timeline from initial explosion to hydrogen (75%) and helium (25%) fusion and galaxy formation',
      'Compare the 3 solar system origin theories: Laplace’s Nebular Hypothesis, Chamberlain-Moulton Crossing Star, and Fred Hoyle’s Modern Theory'
    ],

    vocabulary: [
      {
        termAr: 'السنة الضوئية (Light-Year)',
        termEn: 'Light-Year',
        definitionAr: 'المسافة التي يقطعها الضوء في سنة كاملة بسرعة 300,000 كم/ث، وتساوي: 9.46 × 10¹² كم (9.46 تريليون كيلومتر).',
        definitionEn: 'The distance light travels in one year: 9.46 × 10¹² km.'
      },
      {
        termAr: 'نظرية الانفجار العظيم (The Big Bang Theory)',
        termEn: 'The Big Bang Theory',
        definitionAr: 'نظرية تفسر نشأة الكون منذ 13.8 مليار سنة من انفجار نقطة متناهية الصغر ذات ضغط وحرارة شديدين، تلاها تمدد وتبريد مستمران.',
        definitionEn: 'Cosmological model describing universe expansion from a high-density, high-temperature singularity.'
      },
      {
        termAr: 'السديم (The Nebula)',
        termEn: 'The Nebula',
        definitionAr: 'كرة غازية متوهجة كانت تدور حول نفسها ويُعتقد أنها كوّنت المجموعة الشمسية وفق نظرية العالم الفرنسي لابلاس.',
        definitionEn: 'A glowing rotating cloud of gas hypothesized by Laplace to have condensed into the solar system.'
      }
    ],

    keyConceptsAr: [
      'الكون يتمدد باستمرار بسبب الحركة المنتظمة للمجرات والتباعد المستمر بينها',
      'مجرتنا هي مجرة درب التبانة (لولبية / حلزونية الشكل) وتقع شمسنا في إحدى أذرعها الحلزونية',
      'غازا الهيدروجين (75%) والهيليوم (25%) هما اللذان أنتجا النجوم والمجرات عبر مليارات السنين',
      'نظريات نشأة المجموعة الشمسية:\n- نظرية السديم (لابلاس): أصل النظام سديم غازي فقد حرارته وانكمش وزادت سرعة دورانه\n- نظرية النجم العابر (تشامبرلن ومولتن): اقترب نجم عملاق من الشمس فجذب جزءاً منها وتمدد ثم انفجر\n- النظرية الحديثة (فريد هويل): انفجار نجم كان يدور بالقرب من الشمس (ظاهرة انفجار النجوم)'
    ],
    keyConceptsEn: [
      'Cosmic expansion driven by continuous galaxy separation',
      'Milky Way is a spiral galaxy with our solar system on an outer spiral arm',
      'Cosmic primordial composition: 75% Hydrogen, 25% Helium',
      'Origin theories: Nebular Hypothesis (Laplace), Crossing Star (Chamberlain-Moulton), Modern Star Explosion Theory (Fred Hoyle)'
    ],

    summaryAr: 'تغطي هذه المحاضرة علم الفلك والكونيات للصف الثالث الإعدادي: بنية المجرات وتمدد الكون، مراحل نظرية الانفجار العظيم، ومقارنة النظريات العلمية الثلاث لنشأة المجموعة الشمسية.',
    summaryEn: 'Covers astrophysics: cosmic expansion, Big Bang timeline, hydrogen-helium fusion, and the 3 leading historical theories for the origin of our solar system.',

    sections: [
      {
        titleAr: '1. الكون وتمدده ونظرية الانفجار العظيم',
        titleEn: '1. The Expanding Universe & The Big Bang Timeline',
        contentAr: '1) تمدد الكون: الكون في حالة تمدد مستمر نتيجة الحركة المنتظمة لآلاف ملايين المجرات.\n- وحدة قياس المسافات الكونية هي "السنة الضوئية" = 9.46 × 10¹² كم.\n2) الخط الزمني للانفجار العظيم:\n- لحظة الصفر: انفجار هائل لجسيم ذري أولي فائق الضغط والحرارة.\n- بعد دقائق: تلاحمت الجسيمات الذرية مكونة سحباً من غازي الهيدروجين (75%) والهيليوم (25%).\n- بعد 2000 - 3000 مليون سنة: تجمعت المادة في كتل كوّنت أسلاف المجرات بفعل الجاذبية.\n- بعد 5000 مليون سنة: اتخذت مجرة درب التبانة شكلها القرصي الحلزوني.\n- بعد 10000 مليون سنة: ولدت شمسنا ونشأت المجموعة الشمسية وتكونت الأرض.\n- بعد 12000 مليون سنة: ظهرت أولى أشكال الحياة البدائية على الأرض.\n- بعد 13800 مليون سنة (الآن): تشكل الكون بصورته الحالية.',
        contentEn: 'The Universe expands continuously. Big Bang chronology: 75% H + 25% He formed minutes after, proto-galaxies at 3 billion years, Sun at 10 billion years, and life on Earth at 12 billion years.'
      },
      {
        titleAr: '2. نظريات نشأة المجموعة الشمسية الثلاث',
        titleEn: '2. Three Theories of Solar System Origin',
        contentAr: '1) نظرية السديم (العالم الفرنسي لابلاس 1796م):\n- الأصل: سديم غازي متوهج يدور حول نفسه.\n- التطور: فقد السديم حرارته بمرور الزمن فانكمش حجمه وزادت سرعة دورانه حول محوره، فتحول لقرص مسطح دوار بفعل القوة الطاردة المركزية، وانفصلت منه حلقات غازية بردت وكونت الكواكب، وبقي الجزء الملتهب في المركز ليكون الشمس.\n2) نظرية النجم العابر (العالمان تشامبرلن ومولتن 1905م):\n- الأصل: الشمس.\n- التطور: اقترب نجم عملاق من الشمس، فجذب جزءاً من جانب الشمس المواجه له فتمدد وحدث انفجار في الجزء الممتد، فهربت الشمس وتكثف الخط الغازي ليكون الكواكب.\n3) النظرية الحديثة (العالم فريد هويل 1944م):\n- الأصل: نجم آخر غير الشمس كان يدور بالقرب منها.\n- التطور: حدثت تفاعلات نووية فجائية داخل النجم أدت لانفجاره (ظاهرة انفجار النجوم)، فطُردت نواته وتبقى سحابة غازية تكثفت وبردت وكونت الكواكب السيارة حول الشمس.',
        contentEn: '1) Nebular Theory (Laplace): rotating gas cloud condensed into planets. 2) Crossing Star (Chamberlain-Moulton): passing giant star pulled a gas filament from the Sun. 3) Modern Theory (Fred Hoyle): a nearby companion star exploded via nuclear fusion.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-sci-4',
        questionAr: 'قارن في جدول منظم بين نظرية السديم والنظرية الحديثة لتفسير نشأة المجموعة الشمسية من حيث: اسم العالم، وأصل المجموعة الشمسية، والقوة الأساسية المؤثرة.',
        questionEn: 'Compare Laplace’s Nebular Hypothesis and Hoyle’s Modern Theory in terms of: Scientist, Origin of Solar System, and Primary Force.',
        solutionStepsAr: [
          'وجه المقارنة:\n1) اسم العالم:\n- نظرية السديم: العالم الفرنسي بيير سيمون لابلاس.\n- النظرية الحديثة: العالم الإنجليزي فريد هويل.\n2) أصل المجموعة الشمسية:\n- نظرية السديم: كرة غازية متوهجة تسمى "السديم".\n- النظرية الحديثة: "نجم آخر غير الشمس" كان يدور بالقرب منها.\n3) القوة والآلية الأساسية:\n- السديم: القوة الطاردة المركزية وفقدان الحرارة بالدوران.\n- الحديثة: تفاعلات نووية عنيفة أدت لانفجار النجم وتكثف سحابته بالجاذبية.'
        ],
        solutionStepsEn: [
          'Nebular: Laplace, Origin = Nebula, Force = Centrifugal & thermal loss.\nModern: Fred Hoyle, Origin = Companion star, Mechanism = Nuclear explosion & condensation.'
        ],
        answerAr: 'لابلاس (السديم) vs فريد هويل (نجم آخر غير الشمس)',
        answerEn: 'Laplace (Nebula) vs Fred Hoyle (Companion Star)'
      }
    ],

    assessment: {
      id: 'quiz-m9-sci-4',
      lectureId: 'm9-sci-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: الكون والنظام الشمسي',
      titleEn: 'Mastery Assessment 4: The Universe & Solar System',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-sci-4',
          textAr: 'الغازان اللذان أنتجا المجرات والنجوم والكون بعد دقائق من الانفجار العظيم هما:',
          textEn: 'The two gases that formed galaxies and stars following the Big Bang are:',
          optionsAr: ['الهيدروجين والهيليوم', 'الأكسجين والنيتروجين', 'الهيدروجين والأكسجين', 'الكربون والنيتروجين'],
          optionsEn: ['Hydrogen and Helium', 'Oxygen and Nitrogen', 'Hydrogen and Oxygen', 'Carbon and Nitrogen'],
          correctIndex: 0,
          conceptTestedAr: 'غازات الانفجار العظيم',
          conceptTestedEn: 'Big Bang Primordial Gases',
          explanationAr: 'تكونت سحب غازية بنسبة 75% هيدروجين و 25% هيليوم، أنتجت عبر مليارات السنين كل النجوم والمجرات.',
          explanationEn: '75% Hydrogen and 25% Helium gas clouds formed all cosmic structures.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-sci-4',
          textAr: 'مؤسس نظرية السديم لنشأة المجموعة الشمسية هو العالم:',
          textEn: 'The founder of the Nebular Theory of solar system origin is:',
          optionsAr: ['لابلاس', 'فريد هويل', 'تشامبرلن', 'نيوتن'],
          optionsEn: ['Laplace', 'Fred Hoyle', 'Chamberlain', 'Newton'],
          correctIndex: 0,
          conceptTestedAr: 'رواد نظريات نشأة النظام الشمسي',
          conceptTestedEn: 'Solar Origin Scientists',
          explanationAr: 'نشر العالم الفرنسي بيير لابلاس بحثه الشهير "نظام العالم" متضمناً نظرية السديم عام 1796م.',
          explanationEn: 'French mathematician Pierre Laplace published the Nebular Hypothesis in 1796.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: GENETICS, MENDEL'S LAWS & RADIOACTIVITY ──
  {
    id: 'm9-sci-5',
    order: 5,
    titleAr: 'المحاضرة 5: علم الوراثة وقوانين مندل، والجينات والحمض النووي (DNA) والنشاط الإشعاعي',
    titleEn: 'Lecture 5: Genetics: Mendel\'s Laws, DNA, Chromosomes & Radioactivity',
    subtitleAr: 'دراسة الصفات الوراثية والمكتسبة، قانوني مندل (انعزال العوامل والتوزيع الحر)، الجينات الوراثية والـ DNA، وظاهرة النشاط الإشعاعي السلمي والاستخدامات الطبية والوقاية',
    subtitleEn: 'Master hereditary vs acquired traits, Mendel’s First & Second Laws of inheritance, dominant/recessive genes, DNA & chromosome structure, and radioactivity phenomena with medical applications.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School General Science',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الخامسة: الوراثة والنشاط الإشعاعي',
    unitTitleEn: 'Unit 5: Genetics & Radioactivity',
    lessonNumberAr: 'الدرس 5: قوانين الوراثة والنشاط الإشعاعي',
    lessonNumberEn: 'Lesson 5: Mendelian Inheritance & Nuclear Physics',

    warmupHookAr: 'لماذا يشبه الابن والديه في لون العينين أو ملامح الوجه؟ وكيف استطاع الراهب النمساوي غريغور مندل باكتشافاته على نبات البازلاء أن يضع حجر الأساس للهندسة الوراثية وعلاج الأمراض الجينية بتقنية CRISPR اليوم؟ وفي عالم الفيزياء النووية، كيف حوّل العلماء الطاقة الإشعاعية إلى سلاح لعلاج الأورام السرطانية وتشخيص الأمراض؟ هذا ما نكتشفه في هذه المحاضرة الختامية الرائعة!',
    warmupHookEn: 'Mendel’s pea plant experiments established the genetic bedrock enabling modern CRISPR gene editing. Nuclear medicine harnesses controlled radioactivity for life-saving cancer radiotherapy and diagnostic imaging!',

    learningOutcomesAr: [
      'أن يقارن الطالب بين الصفات الوراثية (تنتقل من جيل لآخر) والصفات المكتسبة (لا تنتقل بالوراثة)',
      'أن يطبق قانون مندل الأول (انعزال العوامل) ويفسر السيادة التامة وظهور الصفة السائدة بنسبة 100% في الجيل الأول و 3 : 1 في الجيل الثاني',
      'أن يطبق قانون مندل الثاني (التوزيع الحر للعوامل الوراثية) وظهور النسبة 9 : 3 : 3 : 1 في الجيل الثاني',
      'أن يوضح تركيب الكروموسوم كيميائياً (حمض نووي DNA وبروتين)، وتركيب الجين من نيوكليوتيدات واكتشاف واطسون وكريك',
      'أن يشرح ظاهرة النشاط الإشعاعي الطبيعي والصناعي واكتشاف هنري بيكريل، واستخدامات الإشعاع السلمية في الطب والزراعة والصناعة'
    ],
    learningOutcomesEn: [
      'Distinguish hereditary traits (transmitted across generations) from acquired traits (learned)',
      'Apply Mendel’s First Law (Law of Segregation) and complete dominance yielding 3:1 F2 ratio',
      'Apply Mendel’s Second Law (Law of Independent Assortment) yielding 9:3:3:1 F2 ratio',
      'Describe chromosome structure (DNA double helix & histone proteins) and nucleotide sequencing',
      'Explain natural/artificial radioactivity (Becquerel discovery) and peaceful applications in medicine and industry'
    ],

    vocabulary: [
      {
        termAr: 'الصفة السائدة والصفة المتنحية (Dominant vs Recessive)',
        termEn: 'Dominant vs Recessive Trait',
        definitionAr: 'الصفة السائدة: الصفة التي تظهر عند اجتماع جينين متماثلين سائدين (TT) أو جين سائد مع متنحٍ (Tt). الصفة المتنحية: لا تظهر إلا عند اجتماع جينين متنحيين متماثلين (tt).',
        definitionEn: 'Dominant trait expresses with 1 or 2 dominant alleles (TT, Tt); recessive trait expresses only with homozygous recessive alleles (tt).'
      },
      {
        termAr: 'مبدأ السيادة التامة (Principle of Complete Dominance)',
        termEn: 'Principle of Complete Dominance',
        definitionAr: 'ظهور الصفة السائدة في أفراد الجيل الأول بنسبة 100% عند تزاوج فردين نقيين يحمل كلاهما صفة وراثية نقية مضادة للآخر.',
        definitionEn: 'Appearance of the dominant phenotype in 100% of F1 offspring when crossing two pure contrasting parents.'
      },
      {
        termAr: 'النشاط الإشعاعي (Radioactivity)',
        termEn: 'Radioactivity',
        definitionAr: 'عملية التحول التلقائي لألوية ذرات بعض العناصر غير المستقرة (كاليورانيوم والراديوم) للوصول إلى تركيب أكثر استقراراً بانبعاث إشعاعات غير مرئية (ألفا، بيتا، جاما).',
        definitionEn: 'Spontaneous nuclear decay of unstable radioactive isotopes emitting alpha, beta, or gamma radiation.'
      }
    ],

    keyConceptsAr: [
      'الصفة الوراثية (لون العيون، فصيلة الدم) vs المكتسبة (المشي، مهارة كرة القدم)',
      'قانون مندل الأول: الصفة الوراثية يتحكم فيها عاملان ينعزلان عند تكوين الأمشاج (الجيل الأول 100% سائد هجين، والجيل الثاني 3 سائد : 1 متنحٍ)',
      'جينات الإنسان السائدة: العيون البنية، الشعر المجعد، الغمازات، والقدرة على ثني اللسان',
      'تركيب الكروموسوم: DNA ملتف حول بروتين، والجينات تتكون من نيوكليوتيدات (نموذج واطسون وكريك اللولب المزدوج)',
      'الاستخدامات السلمية للطاقة النووية: علاج وتشخيص السرطان في الطب، القضاء على الآفات في الزراعة، وتحلية مياه البحر وتوليد الكهرباء'
    ],
    keyConceptsEn: [
      'Hereditary vs acquired traits distinction',
      'Mendel’s 1st Law (Law of Segregation): F1 100% dominant; F2 3:1 ratio',
      'Human dominant traits: brown eyes, curly hair, dimples, tongue rolling ability',
      'DNA double helix structure discovered by Watson & Crick',
      'Peaceful nuclear energy applications in cancer radiotherapy, agriculture, and power'
    ],

    summaryAr: 'تختتم هذه المحاضرة منهج العلوم للصف الثالث الإعدادي بدراسة علم الوراثة المندلية والجينات والحمض النووي DNA، وظاهرة النشاط الإشعاعي واستخداماته السلمية في الطب والعلوم.',
    summaryEn: 'Concludes Grade 9 General Science with Mendelian genetics, DNA double helix architecture, gene expression, and nuclear radioactivity physics and peaceful applications.',

    sections: [
      {
        titleAr: '1. علم الوراثة وقوانين مندل (السيادة التامة)',
        titleEn: '1. Mendelian Genetics & Principles of Inheritance',
        contentAr: '1) تجارب مندل على نبات البازلاء:\n- اختار مندل نبات البازلاء لسهولة زراعته، قصر دورة حياته، أزهاره خنثى تلقح ذاتياً وصناعياً، وإنتاجه لأعداد كبيرة، ووجود أزواج من الصفات المتضادة واضحة التمييز (مثل: طويل/قصير الساق، أصفر/أخضر البذور).\n2) قانون مندل الأول (قانون انعزال العوامل):\n- إذا تزاوج فردان نقيان مختلفان في زوج من الصفات المتبادلة، فإنهما ينتجان جيلاً أول تظهر فيه صفة أحد الفردين فقط (الصفة السائدة بنسبة 100%)، وتظهر الصفتان معاً في الجيل الثاني بنسبة 3 سائد : 1 متنحٍ.\n- مثال وراثي:\n  * تزاوج نبات بازلاء طويل الساق نقي (TT) مع قصير الساق (tt):\n  * الأمشاج: T و t ⟹ الجيل الأول (F1) = Tt (100% طويل الساق هجين).\n  * الجيل الثاني (F2): Tt × Tt ⟹ الأمشاج (T, t) × (T, t) ⟹ الأفراد: TT , Tt , Tt , tt (3 طويل : 1 قصير بنسبة 75% : 25%).',
        contentEn: 'Mendel selected pea plants for fast reproduction and distinct contrasting traits. First Law of Segregation: Crossing homozygous dominant TT with homozygous recessive tt yields 100% Tt in F1 and a 3:1 phenotypic ratio in F2.'
      },
      {
        titleAr: '2. الجينات والـ DNA والنشاط الإشعاعي',
        titleEn: '2. DNA, Gene Mechanisms & Radioactivity',
        contentAr: '1) التركيب الكيميائي للكروموسوم والجينات:\n- يتركب الكروموسوم من حمض نووي DNA وبروتينات (الهستونات).\n- الحمض النووي DNA يحمل المعلومات الوراثية للكائن الحي، ويتكون من شريطين ملتفين حول بعضهما كالدرج الحلزوني (نموذج اللولب المزدوج لواطسون وكريك).\n- الجينات هي أجزاء من DNA تتكون من وحدات بنائية تسمى "النيوكليوتيدات".\n- آلية عمل الجين (فرضية بيدل وتاتوم - جائزة نوبل): كل جين يعطي إنزيماً خاصاً ⟹ الإنزيم مسؤول عن حدوث تفاعل كيميائي ⟹ التفاعل ينتج بروتيناً ⟹ البروتين يظهر الصفة الوراثية.\n\n2) النشاط الإشعاعي والاستخدامات السلمية:\n- اكتشف العالم هنري بيكريل انبعاث إشعاعات غير مرئية من عنصر اليورانيوم المشع.\n- العناصر المشعة (اليورانيوم، الراديوم، السيزيوم، البولونيوم): أنويتها غير مستقرة لزيادة عدد النيوترونات عن حد الاستقرار.\n- الاستخدامات السلمية للطاقة النووية:\n  * في الطب: تشخيص وعلاج بعض الأورام السرطانية.\n  * في الزراعة: القضاء على الآفات الزراعية وتحسين السلالات.\n  * في الصناعة: تحويل الرمال لشرائح السيليكون والكشف عن عيوب المنتجات الصناعية.\n  * في الطاقة: توليد الكهرباء بتسخين الماء لتشغيل التوربينات البخارية.',
        contentEn: 'Chromosomes contain DNA wrapped around histones; DNA double helix discovered by Watson & Crick. Genes encode enzymes producing proteins for trait expression. Radioactivity discovered by Becquerel; utilized peacefully in radiotherapy, agricultural pest control, silicon manufacturing, and nuclear power.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-sci-5',
        questionAr: 'وضح على أسس وراثية ناتج تزاوج نبات بازلاء بذوره صفراء هجين مع نبات بازلاء بذوره خضراء، موضحاً الآباء والأمشاج والجيل الناتج ونسبته. (علماً بأن جين اللون الأصفر Y سائد على جين اللون الأخضر y).',
        questionEn: 'Show on genetic bases the cross between a heterozygous yellow-seeded pea plant and a green-seeded pea plant. (Y is dominant yellow, y is recessive green).',
        solutionStepsAr: [
          'الآباء (Parents - P): نبات أصفر هجين (Yy) × نبات أخضر نقي (yy)',
          'الأمشاج (Gametes - G): من الفرد الأول (Y , y) | ومن الفرد الثاني (y)',
          'الجيل الناتج (Offspring - F1):\n- Y × y = Yy (بذور صفراء هجينة)\n- y × y = yy (بذور خضراء نقية)',
          'النسبة المئوية الناتجة: 50% بذور صفراء هجينة (1) : 50% بذور خضراء (1) بنسبة 1 : 1.'
        ],
        solutionStepsEn: [
          'Parents: Yy × yy.',
          'Gametes: (Y, y) and (y).',
          'Offspring F1: Yy (50% yellow) and yy (50% green).',
          'Ratio: 1 yellow : 1 green (50% : 50%).'
        ],
        answerAr: 'الجيل الناتج: 50% بذور صفراء (Yy) : 50% بذور خضراء (yy) بنسبة 1 : 1',
        answerEn: 'Result: 50% Yellow (Yy) : 50% Green (yy) (1:1 ratio)'
      }
    ],

    assessment: {
      id: 'quiz-m9-sci-5',
      lectureId: 'm9-sci-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: الوراثة والنشاط الإشعاعي',
      titleEn: 'Mastery Assessment 5: Genetics & Radioactivity',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-sci-5',
          textAr: 'عند تزاوج فردين نقيين في زوج من الصفات المتضادة، تظهر الصفة السائدة في الجيل الثاني بنسبة:',
          textEn: 'In a monohybrid cross of pure contrasting parents, the dominant trait appears in F2 with a ratio of:',
          optionsAr: ['75% (3 : 1)', '100%', '50% (1 : 1)', '25%'],
          optionsEn: ['75% (3 : 1)', '100%', '50% (1 : 1)', '25%'],
          correctIndex: 0,
          conceptTestedAr: 'نسبة الجيل الثاني في قانون مندل الأول',
          conceptTestedEn: 'Mendel First Law F2 Ratio',
          explanationAr: 'في الجيل الثاني تظهر الصفة السائدة بنسبة 75% والصفة المتنحية بنسبة 25% (بنسبة 3 سائد : 1 متنحٍ).',
          explanationEn: 'F2 displays 75% dominant phenotype and 25% recessive phenotype (3:1 ratio).',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-sci-5',
          textAr: 'العالمان اللذان توصلا إلى نموذج اللولب المزدوج لتركيب الحمض النووي DNA هما:',
          textEn: 'The two scientists who discovered the DNA double helix structure model are:',
          optionsAr: ['واطسون وكريك', 'بيدل وتاتوم', 'مندل وبول', 'بيكريل وكوري'],
          optionsEn: ['Watson and Crick', 'Beadle and Tatum', 'Mendel and Paul', 'Becquerel and Curie'],
          correctIndex: 0,
          conceptTestedAr: 'اكتشاف اللولب المزدوج للـ DNA',
          conceptTestedEn: 'DNA Double Helix Discovery',
          explanationAr: 'توصل العالمان واطسون وكريك عام 1953م إلى النموذج التركيبي لجزيء DNA كشريطين ملتفين في لولب مزدوج.',
          explanationEn: 'James Watson and Francis Crick modeled the DNA double helix in 1953.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
