import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL BIOLOGY — GRADE 10 (أحياء الصف الأول الثانوي - لغات وعربي)
// Official Grade 10 / Secondary 1 National Ministry & Language School Curriculum Alignment:
// Unit 1: Chemical Basis of Life (Biological Macromolecules: Carbohydrates, Lipids, Proteins, Nucleic Acids & Enzymes/Metabolism)
// Unit 2: Cell Structure & Function (Cell Theory, Light/Electron Microscopes, Cell Organelles & Plant/Animal Tissues)
// Unit 3: Inheritance of Traits & Genetics (Mendelian & Non-Mendelian Genetics, Sex Determination, Chromosomal Abnormalities: Klinefelter, Turner, Down)
// Unit 4: Principles of Biological Classification (Five Kingdoms: Monera, Protista, Fungi, Plantae, Animalia)
// ============================================================================

export const HIGH_BIO_G10_LECTURES: Lecture[] = [
  // ── LECTURE 1: BIOLOGICAL MACROMOLECULES ──
  {
    id: 'h10-bio-1',
    order: 1,
    titleAr: 'المحاضرة 1: الأساس الكيميائي للحياة: الجزيئات البيولوجية الكبيرة (الكربوهيدرات، الليبيدات، البروتينات، والأحماض النووية)',
    titleEn: 'Lecture 1: Chemical Basis of Life: Biological Macromolecules (Carbs, Lipids, Proteins & Nucleic Acids)',
    subtitleAr: 'البوليمرات والمونيمرات، تركيب ووظائف الجزيئات العضوية الأربعة، والكواشف المخبرية (بندكت، اليود، سودان IV، والبيوريت)',
    subtitleEn: 'Master monomers and polymers, structure and functions of the 4 biological macromolecules, and biochemical reagents (Benedict\'s, Iodine, Sudan IV, Biuret).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Biology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الأساس الكيميائي للحياة',
    unitTitleEn: 'Unit 1: Chemical Basis of Life',
    lessonNumberAr: 'الدرس 1: الجزيئات البيولوجية الكبيرة',
    lessonNumberEn: 'Lesson 1: Biological Macromolecules & Biochemical Tests',

    warmupHookAr: 'عندما تتناول وجبة تحتوي على الخبز والزبدة واللحم، كيف تُفكك خلايا جسمك هذه المواد المعقدة وتُعيد بنائها لتوليد طاقة فورية ($ATP$)، وتكوين عضلات جديدة، وتخزين شفرتك الوراثية؟ جميع الكائنات الحية على كوكب الأرض مبنية من 4 مجموعات رئيسية من الجزيئات البيولوجية العضوية الكبيرة (Macromolecules) التي تحتوي على الكربون والهيدروجين والأكسجين والنيتروجين والفوسفور!',
    warmupHookEn: 'Every living organism is composed of 4 fundamental classes of organic macromolecules: carbohydrates for quick energy, lipids for cellular membranes, proteins for cellular machinery, and nucleic acids for genetic coding.',

    learningOutcomesAr: [
      'أن يصنف الطالب الجزيئات البيولوجية الكبيرة إلى بوليمرات ومونيمرات ناتجة عن تفاعلات البلمرة (Polymerization)',
      'أن يميز بين السكريات الأحادية والثنائية والمعقدة ويوضح الصيغة العامة للكربوهيدرات $(CH_2O)_n$ ودورها في إنتاج الطاقة في الميتوكوندريا',
      'أن يقارن بين الليبيدات البسيطة (الزيوت، الدهون، الشموع)، والمعقدة (الفوسفوليبيدات في الغشاء الخلوي)، والمشتقة (الكوليسترول والهرمونات الاسترويدية)',
      'أن يوضح تركيب الحمض الأميني والرابطة الببتيدية، وتركيب النيوكليوتيدة والفروق بين $DNA$ و $RNA$',
      'أن يحدد الكاشف المناسب لكل جزيء: بندكت (للسكريات البسيطة)، اليود (للنشا)، سودان IV (للهون)، والبيوريت (للبروتينات)'
    ],
    learningOutcomesEn: [
      'Classify biological macromolecules into polymers and monomers formed via polymerization',
      'Differentiate monosaccharides, disaccharides, and polysaccharides (formula (CH₂O)n) and ATP generation',
      'Compare simple lipids (oils, fats, waxes), complex lipids (phospholipids in cell membrane), and derived lipids (steroids)',
      'Explain amino acid structure, peptide bond formation, nucleotide structure, and DNA vs RNA differences',
      'Select diagnostic reagents: Benedict\'s (reducing sugars), Iodine (starch), Sudan IV (lipids), Biuret (proteins)'
    ],

    vocabulary: [
      {
        termAr: 'البوليمر والمونيمر (Polymer & Monomer)',
        termEn: 'Polymer & Monomer',
        definitionAr: 'البوليمر: جزيء عضوي كبير الحجم يتكون من اتحاد جزيئات صغيرة تسمى مونيمرات بعملية تسمى البلمرة (Polymerization).',
        definitionEn: 'Polymer is a large macromolecule formed by linking smaller repeating subunits called monomers via polymerization.'
      },
      {
        termAr: 'الفوسفوليبيدات (Phospholipids)',
        termEn: 'Phospholipids',
        definitionAr: 'ليبيدات معقدة تدخل في تركيب الغشاء البلازمي للخلايا، تتكون من جزيء جلسرول مرتبط بحمضين دهنيين ومجموعة فوسفات ($PO_4^{3-}$) ومجموعة كولين.',
        definitionEn: 'Complex membrane lipids consisting of glycerol, two fatty acid tails, a phosphate group, and a choline head.'
      },
      {
        termAr: 'الرابطة الببتيدية (Peptide Bond)',
        termEn: 'Peptide Bond',
        definitionAr: 'رابطة تساهمية تتكون بين مجموعة الكربوكسيل ($COOH$) لحمض أميني ومجموعة الأمين ($NH_2$) لحمض أميني مجاور مع خروج جزيء ماء ($H_2O$).',
        definitionEn: 'A covalent bond joining two amino acids by a condensation reaction between carboxyl and amino groups.'
      }
    ],

    keyConceptsAr: [
      'الكربوهيدرات: السكريات الأحادية (الجلوكوز، الفركتوز، الجلاكتوز، الريبوز) هي المونيمر الأساسي لإنتاج الطاقة $ATP$',
      'الليبيدات: مصدر طاقة مؤجل تعطي طاقة أعلى من الكربوهيدرات لنفس الكتلة، ولكن الجسم لا يستمد الطاقة منها إلا في غياب الكربوهيدرات',
      'البروتينات: مبنية من 20 نوعاً من الأحماض الأمينية، ويتكون الحمض الأميني من ذرة كربون مركزية مرتبطة بذرة H، ومجموعة كربوكسيل حامضية $COOH$، ومجموعة أمين قاعدية $NH_2$، ومجموعة ألكيل $R$ تحدد نوع الحمض',
      'الأحماض النووية: تتكون من نيوكليوتيدات (سكر خماسي + قاعدة نيتروجينية + مجموعة فوسفات)',
      'كواشف الكشف المخبري: كاشف بندكت الأزرق يتحول للبرتقالي مع السكر البسيط، اليود البرتقالي يتحول للأزرق الداكن مع النشا، سودان IV يكون بقعة حمراء مع الدهون، والبيوريت الأزرق يتحول للبنفسجي مع البروتينات'
    ],
    keyConceptsEn: [
      'Carbohydrates: Monosaccharides are the primary immediate fuel for ATP cellular respiration',
      'Lipids: Yield higher energy per gram than carbohydrates, metabolized after carbohydrate depletion',
      'Proteins: Formed from 20 amino acids characterized by central C, H, -COOH, -NH₂, and variable R-group',
      'Nucleic Acids: Composed of nucleotides (pentose sugar, nitrogenous base, phosphate group)',
      'Diagnostic tests: Benedict\'s (orange for glucose), Iodine (dark blue for starch), Sudan IV (red for lipids), Biuret (violet for proteins)'
    ],

    summaryAr: 'تغطي المحاضرة الجزيئات البيولوجية الكبيرة لصف أولى ثانوي: الكربوهيدرات، الليبيدات، البروتينات، والأحماض النووية، مع دراسة تركيبها الكيميائي، أهميتها الحيوية، واختباراتها المعملية بألوان الكواشف.',
    summaryEn: 'Comprehensive Grade 10 biochemistry: carbohydrates, lipids, proteins, and nucleic acids, covering molecular architecture, cellular roles, and reagent diagnostics.',

    sections: [
      {
        titleAr: '1. الكربوهيدرات والليبيدات ومصادر الطاقة',
        titleEn: '1. Carbohydrates, Lipids & Energy Yields',
        contentAr: '1) الكربوهيدرات (Carbohydrates):\n- الصيغة العامة: $(CH_2O)_n$ بنسبة $1 C : 2 H : 1 O$.\n- سكريات أحادية (Monosaccharides): جلوكوز (سكر العنب)، فركتوز (سكر الفواكه)، جلاكتوز (سكر اللبن)، وريبوز ($C_5H_{10}O_5$ سكر الـ RNA).\n- سكريات ثنائية (Disaccharides): سكروز (جلوكوز + فركتوز)، لاكتوز (جلوكوز + جلاكتوز)، ومالتوز (جلوكوز + جلوكوز).\n- سكريات معقدة (Polysaccharides): نشا وجليكوجين (تخزين)، وسليلوز (بنائي في جدر الخلايا النباتية).\n\n2) الليبيدات (Lipids):\n- مواد غير قابلة للذوبان في الماء، وتذوب في المذيبات غير القطبية (كالبنزين ورابع كلوريد الكربون).\n- الفوسفوليبيدات تشكل الطبقة المزدوجة للغشاء البلازمي.',
        contentEn: 'Carbohydrates range from simple monosaccharides to storage (glycogen/starch) and structural (cellulose) polymers. Lipids form cellular bilayer membranes.'
      },
      {
        titleAr: '2. البروتينات والأحماض النووية والكواشف المعملية',
        titleEn: '2. Proteins, Nucleic Acids & Diagnostic Tests',
        contentAr: '1) البروتينات (Proteins):\n- تتكون من سلاسل عديد الببتيد المرتبطة بروابط ببتيدية.\n- تدخل في تركيب الإنزيمات، الهرمونات، الأجسام المضادة، والعضلات والأظافر والشعر.\n\n2) الأحماض النووية ($DNA$ و $RNA$):\n- $DNA$: لولب مزدوج يحتوي على سكر ديوكسي ريبوز والقواعد $A, T, C, G$ ويحمل المعلومات الوراثية.\n- $RNA$: شريط مفرد يحتوي على سكر ريبوز والقواعد $A, U, C, G$ ويصنع البروتين.\n\n3) الكواشف المخبرية:\n- كاشف بندكت: أزرق ⟹ برتقالي (مع الجلوكوز).\n- كاشف اليود: برتقالي ⟹ أزرق داكن (مع النشا).\n- كاشف سودان IV: يذوب مكوناً حلقة حمراء (مع الدهون).\n- كاشف البيوريت: أزرق ⟹ بنفسجي (مع البروتين).',
        contentEn: 'Proteins provide structural and enzymatic functions. DNA/RNA store and translate genetic code. Diagnostic reagents identify macromolecule classes by distinct color shifts.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-bio1-1',
        questionAr: 'علل: يبدأ الجسم في استخلاص الطاقة من الكربوهيدرات أولاً قبل الدهون، على الرغم من أن كمية الطاقة الناتجة من أكسدة جرام واحد من الدهون أكبر بكثير من جرام الكربوهيدرات؟',
        questionEn: 'Explain why the human body metabolizes carbohydrates for energy before consuming lipids, even though lipids yield more energy per gram?',
        solutionStepsAr: [
          'الخطوة 1: الكربوهيدرات وخاصة السكريات الأحادية (الجلوكوز) تتميز بسهولة وسرعة تكسيرها وأكسدتها داخل الميتوكوندريا لإنتاج جزيئات ATP.',
          'الخطوة 2: الدهون مركبات غير قابلة للذوبان في الماء ومعقدة التركيب تتطلب مسارات أيضية أطول وأكسجين أكثر لتكسيرها.',
          'الخطوة 3: لذلك تعتبر الكربوهيدرات المصدر الأساسي والسريع للطاقة، بينما الليبيدات هي مخزون طاقة مؤجل لا يلجأ إليه الجسم إلا عند استنفاد الكربوهيدرات.'
        ],
        solutionStepsEn: [
          'Step 1: Monosaccharides like glucose are rapidly transported and oxidized in mitochondria to generate ATP.',
          'Step 2: Lipids are hydrophobic and require complex metabolic catabolism and more oxygen to breakdown.',
          'Step 3: Hence carbohydrates serve as the immediate fuel source, while lipids act as deferred long-term energy reserves.'
        ],
        answerAr: 'لسرعة وسهولة استخلاص الطاقة من السكريات البسيطة مقارنة بالدهون التي تعتبر مصدراً مؤجلاً لا يستفاد منه إلا في غياب الكربوهيدرات.',
        answerEn: 'Because carbohydrates provide rapid, accessible ATP yield, whereas lipids serve as deferred energy reserves.'
      }
    ],

    assessment: {
      id: 'quiz-h10-bio-1',
      lectureId: 'h10-bio-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الجزيئات البيولوجية الكبيرة (1 ثانوي)',
      titleEn: 'Mastery Quiz 1: Biological Macromolecules & Reagents (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-b1-1',
          textAr: 'عند إضافة كاشف بندكت الأزرق إلى محلول الجلوكوز وتسخينه في حمام مائي، يتغير لون الكاشف إلى:',
          textEn: 'When blue Benedict\'s reagent is heated with a glucose solution in a water bath, the color shifts to:',
          optionsAr: ['البرتقالي (Orange)', 'البنفسجي (Violet)', 'الأزرق الداكن', 'الأصفر الليموني'],
          optionsEn: ['Orange', 'Violet', 'Dark Blue', 'Lemon Yellow'],
          correctIndex: 0,
          conceptTestedAr: 'الكشف عن السكريات الأحادية بكاشف بندكت',
          conceptTestedEn: 'Benedict\'s test for reducing sugars',
          explanationAr: 'كاشف بندكت الأزرق يختزل بواسطة السكريات البسيطة كالجلوكوز ويتحول إلى اللون البرتقالي الراسب.',
          explanationEn: 'Benedict\'s reagent shifts from blue to orange in the presence of reducing monosaccharides like glucose.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b1-2',
          textAr: 'الجزيء البيولوجي المعقد الذي يدخل في تركيب الغشاء البلازمي للخلايا الحية ويحتوي على مجموعتي فوسفات وكولين هو:',
          textEn: 'The complex biological lipid found in plasma membranes containing phosphate and choline groups is:',
          optionsAr: ['الفوسفوليبيدات (Phospholipids)', 'الكوليسترول', 'الشموع', 'الزيوت النباتية'],
          optionsEn: ['Phospholipids', 'Cholesterol', 'Waxes', 'Vegetable oils'],
          correctIndex: 0,
          conceptTestedAr: 'تركيب الفوسفوليبيدات في الغشاء الخلوي',
          conceptTestedEn: 'Phospholipid bilayer constituents',
          explanationAr: 'الفوسفوليبيدات هي ليبيدات معقدة تحتوي على فوسفات وكولين وتكون الطبقة المزدوجة للغشاء البلازمي.',
          explanationEn: 'Phospholipids compose the cell membrane bilayer, containing a hydrophilic phosphate head and hydrophobic fatty acid tails.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b1-3',
          textAr: 'يختلف الحمض الأميني عن الآخر في بروتينات الكائنات الحية باختلاف:',
          textEn: 'Different amino acids vary from one another fundamentally due to variations in their:',
          optionsAr: ['مجموعة الألكيل الجانبية (R-group)', 'مجموعة الكربوكسيل (-COOH)', 'مجموعة الأمين (-NH₂)', 'ذرة الهيدروجين المركزية'],
          optionsEn: ['Variable alkyl side chain (R-group)', 'Carboxyl group (-COOH)', 'Amino group (-NH₂)', 'Central hydrogen atom'],
          correctIndex: 0,
          conceptTestedAr: 'تركيب الحمض الأميني ومجموعة الألكيل R',
          conceptTestedEn: 'Amino acid R-group specificity',
          explanationAr: 'جميع الأحماض الأمينية تشترك في ذرة الكربون المركزية و H و COOH و NH₂، وتختلف فقط في نوع مجموعة الألكيل (R) الجانبية (ما عدا الجلايسين الذي يحتوي على H).',
          explanationEn: 'The 20 amino acids differ exclusively by their distinct variable R side chains.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-b1-4',
          textAr: 'السكر الخماسي الكربون ($C_5$) الذي يدخل في تركيب نيوكليوتيدة الحمض النووي $RNA$ هو:',
          textEn: 'The 5-carbon pentose sugar found in the nucleotide of RNA is:',
          optionsAr: ['سكر الريبوز (Ribose C₅H₁₀O₅)', 'سكر ديوكسي ريبوز (Deoxyribose)', 'الجلوكوز', 'الفركتوز'],
          optionsEn: ['Ribose (C₅H₁₀O₅)', 'Deoxyribose (C₅H₁₀O₄)', 'Glucose', 'Fructose'],
          correctIndex: 0,
          conceptTestedAr: 'السكر الخماسي في RNA',
          conceptTestedEn: 'Ribose sugar in RNA',
          explanationAr: 'الحمض النووي RNA يحتوي على سكر الريبوز الخماسي $C_5H_{10}O_5$، بينما يحتوي DNA على سكر ديوكسي ريبوز منقوص الأكسجين $C_5H_{10}O_4$.',
          explanationEn: 'RNA contains ribose (C₅H₁₀O₅); DNA contains deoxyribose (C₅H₁₀O₄).',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b1-5',
          textAr: 'كاشف البيوريت (Biuret Reagent) الأزرق يستخدم مخبرياً للكشف عن:',
          textEn: 'Blue Biuret reagent is used in biochemical diagnostics to detect:',
          optionsAr: ['البروتينات (يتحول إلى البنفسجي)', 'النشا (يتحول إلى الأزرق)', 'الجلوكوز', 'الدهون'],
          optionsEn: ['Proteins (turns violet)', 'Starch (turns dark blue)', 'Glucose', 'Lipids'],
          correctIndex: 0,
          conceptTestedAr: 'كاشف البيوريت للبروتينات',
          conceptTestedEn: 'Biuret test for peptide bonds',
          explanationAr: 'كاشف البيوريت الأزرق يتفاعل مع الروابط الببتيدية في سلاسل البروتين فيتحول لونه إلى اللون البنفسجي.',
          explanationEn: 'Biuret reagent detects peptide bonds in proteins, changing from blue to violet.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: ENZYMES & CELLULAR METABOLISM ──
  {
    id: 'h10-bio-2',
    order: 2,
    titleAr: 'المحاضرة 2: التفاعلات الكيميائية في الكائنات الحية: الإنزيمات وعمليات التمثيل الغذائي (الأيض)',
    titleEn: 'Lecture 2: Chemical Reactions in Living Organisms: Enzymes & Cellular Metabolism',
    subtitleAr: 'البناء والهدم، طاقة التنشيط، طبيعة عمل الإنزيمات والموقع النشط، والعوامل المؤثرة على سرعة عمل الإنزيم (الحرارة، الرقم الهيدروجيني pH، والتركيز)',
    subtitleEn: 'Master anabolism and catabolism, activation energy, enzyme lock-and-key mechanism, and factors influencing enzyme activity (temperature, pH, substrate concentration).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Biology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الأساس الكيميائي للحياة',
    unitTitleEn: 'Unit 1: Chemical Basis of Life',
    lessonNumberAr: 'الدرس 2: الإنزيمات والتمثيل الغذائي',
    lessonNumberEn: 'Lesson 2: Enzymes & Metabolic Pathways',

    warmupHookAr: 'إذا وضعت قطعة من السكر في الهواء، فإنها تحتاج لمئات السنين حتى تحترق وتتأكسد تلقائياً عند درجة حرارة الغرفة. لكن داخل خلايا جسمك، تتأكسد نفس قطعة السكر في أجزاء من الثانية عند درجة حرارة 37°C فقط! ما هو السر الخارق؟ إنها "الإنزيمات"؛ محفزات حيوية بروتينية تخفض طاقة التنشيط وتوجه التفاعلات الحيوية بدقة مذهلة تشبه تطابق القفل والمفتاح!',
    warmupHookEn: 'Enzymes are biological protein catalysts that accelerate vital cellular reactions millions of times by lowering activation energy thresholds under mild physiological temperatures and pH levels.',

    learningOutcomesAr: [
      'أن يقارن الطالب بين عمليتي الأيض: البناء (Anabolism: استهلاك طاقة لتكوين جزيئات كبيرة) والهدم (Catabolism: تحرير طاقة بتكسير الروابط الكيميائية)',
      'أن يفسر دور الإنزيمات كعوامل حفازة حيوية بروتينية في تقليل طاقة التنشيط (Activation Energy)',
      'أن يوضح آلية عمل الإنزيم التخصصية بنموذج القفل والمفتاح (Lock and Key Model)',
      'أن يحلل المنحنيات البيانية للعوامل المؤثرة على نشاط الإنزيم: درجة الحرارة المثلى ومدى التحمل الحراري، الرقم الهيدروجيني الأمثل ($pH$)، وتركيز الإنزيم ومادة التفاعل'
    ],
    learningOutcomesEn: [
      'Compare anabolism (endergonic building) and catabolism (exergonic energy release via bond breaking)',
      'Explain how protein enzyme catalysts lower required activation energy',
      'Describe enzyme specificity using the lock-and-key substrate binding model',
      'Analyze enzyme kinetic graphs across optimum temperature, thermal denaturation, optimum pH, and substrate saturation'
    ],

    vocabulary: [
      {
        termAr: 'التمثيل الغذائي / الأيض (Metabolism)',
        termEn: 'Metabolism',
        definitionAr: 'مجموعة من التفاعلات الكيميائية الحيوية المستمرة داخل خلايا الكائن الحي، وتشمل عمليات الهدم (لإنتاج الطاقة) وعمليات البناء (للنمو وإصلاح الأنسجة).',
        definitionEn: 'The sum of all biochemical reactions occurring in a living organism, comprising catabolism and anabolism.'
      },
      {
        termAr: 'طاقة التنشيط (Activation Energy)',
        termEn: 'Activation Energy',
        definitionAr: 'الحد الأدنى من الطاقة اللازمة لبدء التفاعل الكيميائي، ويعمل الإنزيم على خفضها لتسريع التفاعل.',
        definitionEn: 'The minimum energy threshold required to initiate a chemical reaction, lowered by enzyme catalysis.'
      },
      {
        termAr: 'درجة الحرارة المثلى والرقم الهيدروجيني الأمثل (Optimum Temp & pH)',
        termEn: 'Optimum Temperature & pH',
        definitionAr: 'درجة الحرارة أو قيمة الـ pH التي يكون عندها الإنزيم أكثر نشاطاً ويعمل بأقصى كفاءة ممكنة (مثل إنزيم الببسين في المعدة $pH \\approx 1.5 - 2.5$).',
        definitionEn: 'The specific environmental temperature and pH conditions where an enzyme operates at peak catalytic velocity.'
      }
    ],

    keyConceptsAr: [
      'الهدم (Catabolism): مثل أكسدة الجلوكوز في التنفس الخلوي لإنتاج $ATP$. البناء (Anabolism): مثل البناء الضوئي وبناء البروتينات من الأحماض الأمينية',
      'الإنزيمات بروتينات متخصصة: كل إنزيم يختص بمادة تفاعل واحدة (Substrate) ترتبط بالموقع النشط (Active Site)',
      'تأثير الحرارة: عند رفع الحرارة فوق الدرجة المثلى يقل النشاط حتى يتوقف تماماً بسبب تغير طبيعة البروتين (Denaturation) ولا يعود النشاط بالتبريد',
      'تأثير الـ pH: إنزيم الببسين ($Pepsin$) في المعدة يعمل في وسط حامضي ($1.5 - 2.5$)، بينما إنزيم التريبسين ($Trypsin$) في الأمعاء الدقيقة يعمل في وسط قلوي ($7.5 - 8$)'
    ],
    keyConceptsEn: [
      'Catabolism releases energy (cellular respiration); Anabolism consumes energy for synthesis (protein translation)',
      'Enzymes are highly specific proteins binding target substrates at complementary active sites',
      'Excessive heat causes irreversible protein denaturation, destroying catalytic function',
      'Pepsin functions in acidic stomach pH (1.5-2.5); Trypsin functions in alkaline intestinal pH (7.5-8.0)'
    ],

    summaryAr: 'تتناول المحاضرة الكيمياء الحيوية للإنزيمات والتمثيل الغذائي: مسارات البناء والهدم، كيفية خفض طاقة التنشيط، آلية القفل والمفتاح، والعوامل البيئية المؤثرة على كفاءة الإنزيم (الحرارة و pH).',
    summaryEn: 'Covers enzymes and cellular energetics: anabolism vs catabolism, activation energy reduction, lock-and-key specificity, and kinetics profiles over pH and temperature.',

    sections: [
      {
        titleAr: '1. عمليات الأيض (الهدم والبناء) وطاقة التنشيط',
        titleEn: '1. Cellular Metabolism & Activation Energy',
        contentAr: '1) عمليات الأيض (Metabolism):\n- الهدم (Catabolism): تكسير الروابط الكيميائية في الجزيئات الغذائية كالجلوكوز لتحرير الطاقة وتخزينها في جزيئات $ATP$.\n- البناء (Anabolism): استخدام الطاقة لبناء جزيئات معقدة من جزيئات بسيطة مثل تخليق البروتينات من الأحماض الأمينية وبناء الجليكوجين.\n\n2) دور الإنزيم في خفض طاقة التنشيط:\n- الإنزيمات هي عوامل حفازة حيوية بروتينية تسرع التفاعلات دون أن تُستهلك، وتتميز بقدرتها على خفض طاقة التنشيط بشكل هائل مما يسمح بحدوث التفاعلات الحيوية في درجة حرارة الجسم الطبيعية.',
        contentEn: 'Catabolism releases ATP through degradation; anabolism uses ATP for synthesis. Enzymes lower required activation energy.'
      },
      {
        titleAr: '2. العوامل المؤثرة على نشاط الإنزيم (الحرارة و pH)',
        titleEn: '2. Factors Affecting Enzyme Activity (Temp & pH)',
        contentAr: '1) درجة الحرارة:\n- لكل إنزيم درجة حرارة مثلى يعمل عندها بأعلى كفاءة (في الإنسان $\\approx 37^\\circ\\text{C}$).\n- بالتبريد يقل نشاط الإنزيم حتى يتوقف ويعود للعمل عند التدفئة.\n- بالتسخين الشديد فوق المثلى تتغير الطبيعة البروتينية للإنزيم (Denaturation) ويتوقف تماماً ولا يعود للعمل بالتبريد.\n\n2) الرقم الهيدروجيني ($pH$):\n- الببسين في المعدة: $pH = 1.5 - 2.5$ (حامضي).\n- التريبسين في الأمعاء: $pH = 7.5 - 8$ (قاعدي ضعيف).\n- معظم إنزيمات الجسم تعمل عند $pH \\approx 7.4$.',
        contentEn: 'Enzymes have optimum temperatures and pH ranges. Thermal denaturation irreversibly alters protein tertiary structure.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-bio2-1',
        questionAr: 'ماذا يحدث لنشاط إنزيم الببسين الهاضم للبروتينات إذا تم نقله من المعدة (حيث $pH = 2$) إلى الأمعاء الدقيقة (حيث $pH = 8$)؟ فسر إجابتك.',
        questionEn: 'What happens to the digestive activity of pepsin when moved from the stomach (pH=2) to the small intestine (pH=8)? Explain.',
        solutionStepsAr: [
          'الخطوة 1: إنزيم الببسين يعمل في وسط حامضي قوي ورقم هيدروجيني أمثل يتراوح بين 1.5 إلى 2.5.',
          'الخطوة 2: عند نقله للوسط القلوي في الأمعاء الدقيقة ($pH = 8$) يتغير الشكل الفراغي للموقع النشط في الإنزيم نتيجة تأثر الشحنات الكهربائية على المجموعات الوظيفية للأحماض الأمينية.',
          'الخطوة 3: يفقد الإنزيم قدرته على الارتباط بمادة التفاعل ويتوقف نشاطه تماماً.'
        ],
        solutionStepsEn: [
          'Step 1: Pepsin functions optimally in an acidic environment (pH 1.5 - 2.5).',
          'Step 2: Alkaline intestinal pH (pH 8) alters ionic charges and active site conformation.',
          'Step 3: Pepsin denatures/inactivates and loses catalytic function.'
        ],
        answerAr: 'يتوقف نشاط إنزيم الببسين تماماً؛ لأن الرقم الهيدروجيني للأمعاء (8) قلوي ويختلف تماماً عن الرقم الهيدروجيني الأمثل لعمل الببسين الحامضي (1.5 - 2.5) مما يغير تركيب موقعه النشط.',
        answerEn: 'Pepsin activity completely stops due to active site conformational alteration in the alkaline intestinal pH.'
      }
    ],

    assessment: {
      id: 'quiz-h10-bio-2',
      lectureId: 'h10-bio-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: الإنزيمات والتمثيل الغذائي (1 ثانوي)',
      titleEn: 'Mastery Quiz 2: Enzymes & Cellular Kinetics (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-b2-1',
          textAr: 'الرقم الهيدروجيني الأمثل ($pH$) لعمل إنزيم الببسين في المعدة يقع في المدى:',
          textEn: 'The optimum pH range for gastric pepsin activity in the stomach is:',
          optionsAr: ['1.5 إلى 2.5 (وسط حامضي قوي)', '7.5 إلى 8.0 (وسط قلوي)', '7.0 (وسط متعادل)', '9.0 إلى 11.0'],
          optionsEn: ['1.5 to 2.5 (strongly acidic)', '7.5 to 8.0 (alkaline)', '7.0 (neutral)', '9.0 to 11.0'],
          correctIndex: 0,
          conceptTestedAr: 'الرقم الهيدروجيني الأمثل للببسين',
          conceptTestedEn: 'Pepsin optimum pH environment',
          explanationAr: 'إنزيم الببسين يفرز في المعدة ويعمل بكفاءة قصوى في وجود حمض الهيدروكلوريك عند $pH = 1.5 - 2.5$.',
          explanationEn: 'Gastric pepsin functions in acidic stomach environment at pH 1.5 - 2.5.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b2-2',
          textAr: 'عند رفع درجة حرارة تفاعل إنزيمي أعلى بكثير من درجة الحرارة المثلى (مثلاً إلى 70°C)، فإن الإنزيم:',
          textEn: 'When temperature is raised significantly beyond an enzyme\'s optimum (e.g. to 70°C), the enzyme:',
          optionsAr: [
            'يتوقف نشاطه نهائياً لتغير طبيعته وتركيبه البروتيني (Denaturation)',
            'يزداد نشاطه وتتضاعف سرعة التفاعل',
            'يعمل في الاتجاه المعاكس',
            'يتحول إلى كربوهيدرات'
          ],
          optionsEn: [
            'Permanently loses activity due to thermal protein denaturation',
            'Increases activity and doubles catalytic velocity',
            'Catalyzes reverse reaction pathways',
            'Converts into carbohydrate molecules'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التغير في الطبيعة البروتينية للإنزيم بالحرارة العالية',
          conceptTestedEn: 'Thermal denaturation of protein enzymes',
          explanationAr: 'الحرارة المرتفعة تكسر الروابط الهيدروجينية وتغير الشكل الفراغي للموقع النشط للبروتين الإنزيمي فيتلف نهائياً ولا يعود للعمل.',
          explanationEn: 'Excessive heat denatures the tertiary protein structure and active site irreversibly.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-b2-3',
          textAr: 'تتميز الإنزيمات الحيوية بأنها تقوم بتسريع التفاعلات الكيميائية عن طريق:',
          textEn: 'Biological enzymes accelerate cellular chemical reactions fundamentally by:',
          optionsAr: [
            'تقليل طاقة التنشيط اللازمة لبدء التفاعل',
            'زيادة طاقة التنشيط',
            'رفع درجة حرارة الخلية بشكل كبير',
            'استهلاك مادة الإنزيم نفسها أثناء التفاعل'
          ],
          optionsEn: [
            'Lowering the required activation energy',
            'Increasing activation energy barriers',
            'Dramatically raising overall cell temperature',
            'Being consumed permanently during the reaction'
          ],
          correctIndex: 0,
          conceptTestedAr: 'آلية عمل الإنزيم في خفض طاقة التنشيط',
          conceptTestedEn: 'Enzymatic lowering of activation energy',
          explanationAr: 'الإنزيم يقلل حاجز طاقة التنشيط اللازم لبدء كسر روابط المتفاعلات فتحدث التفاعلات بسرعة فائقة.',
          explanationEn: 'Enzymes stabilize transition states, substantially lowering activation energy thresholds.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b2-4',
          textAr: 'أي من العمليات الحيوية التالية تعتبر مثالاً لعملية البناء (Anabolism) داخل الخلية؟',
          textEn: 'Which of the following biological processes represents anabolism inside living cells?',
          optionsAr: [
            'تكوين سلاسل البروتين من الأحماض الأمينية',
            'أكسدة الجلوكوز في الميتوكوندريا أثناء التنفس الخلوي',
            'تكسير الدهون لإنتاج الأحماض الدهنية',
            'هضم النشويات في الفم'
          ],
          optionsEn: [
            'Synthesizing protein chains from amino acids',
            'Glucose oxidation in mitochondria during cellular respiration',
            'Lipid breakdown into fatty acids',
            'Starch digestion in the mouth'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أمثلة عمليات البناء الأيضية',
          conceptTestedEn: 'Anabolism synthesis examples',
          explanationAr: 'بناء البروتينات من الأحماض الأمينية هو عملية بناء (Anabolism) تستهلك طاقة لتكوين جزيئات كبيرة معقدة، بينما الأكسدة والهضم هدم.',
          explanationEn: 'Protein translation from amino acids is an endergonic anabolic synthesis process.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b2-5',
          textAr: 'المنطقة المحددة على سطح الإنزيم التي ترتبط بها مادة التفاعل بدقة تسمى:',
          textEn: 'The specific structural pocket on an enzyme where the substrate binds is called the:',
          optionsAr: ['الموقع النشط (Active Site)', 'السنتروسوم', 'الجدار الخلوي', 'الريبوسوم'],
          optionsEn: ['Active Site', 'Centrosome', 'Cell Wall', 'Ribosome'],
          correctIndex: 0,
          conceptTestedAr: 'الموقع النشط في الإنزيم',
          conceptTestedEn: 'Enzyme active site structure',
          explanationAr: 'الموقع النشط (Active Site) هو الجيب الفراغي في الإنزيم المطابق للشكل الهندسي لمادة التفاعل بنموذج القفل والمفتاح.',
          explanationEn: 'The active site is the catalytic cleft that complements substrate geometry in lock-and-key binding.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: CELL STRUCTURE, MICROSCOPES & ORGANELLES ──
  {
    id: 'h10-bio-3',
    order: 3,
    titleAr: 'المحاضرة 3: تركيب الخلية، النظرية الخلوية، والمجاهر والعضيات الخلوية',
    titleEn: 'Lecture 3: Cell Structure, Cell Theory, Microscopes & Cellular Organelles',
    subtitleAr: 'اكتشاف الخلية، المجهر الضوئي والإلكتروني (النافذ والماسح)، تركيب الغشاء البلازمي، العضيات غير الغشائية والغشائية (الميتوكوندريا، جهاز جولجي، والريبوسومات)',
    subtitleEn: 'Master Cell Theory, light vs electron microscopes (TEM/SEM), plasma membrane fluid mosaic, non-membranous (ribosomes, centrosome) and membranous organelles (mitochondria, Golgi, ER, lysosomes, plastids).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Biology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: الخلية تركيباً ووظيفة',
    unitTitleEn: 'Unit 2: Cell Structure & Function',
    lessonNumberAr: 'الدرس 1: النظرية الخلوية وعضيات الخلية',
    lessonNumberEn: 'Lesson 1: Cell Theory, Ultrastructure & Organelles',

    warmupHookAr: 'في عام 1665، فحص العالم روبرت هوك شريحة من الفلين تحت مجهر بدائي فوجد فجوات صغيرة تشبه خلايا شمع العسل وسماها "الخلية" (Cell). واليوم، تكشف لنا المجاهر الإلكترونية أن كل خلية في جسدك هي بمثابة مدينة صناعية عملاقة تحتوي على محطات طاقة (ميتوكوندريا)، ومصانع إنتاج (ريبوسومات)، وشبكات نقل (شبكة إندوبلازمية)، ومركز بريد وتغليف (جهاز جولجي)، وشرطة دفاعية وتحليلية (اللايسوسومات)!',
    warmupHookEn: 'The cell is an intricate microscopic metropolis: mitochondria generate power, ribosomes synthesize proteins, endoplasmic reticulum handles transport, Golgi packages exports, and lysosomes execute cellular cleanup.',

    learningOutcomesAr: [
      'أن يلخص الطالب بنود النظرية الخلوية ومساهمات العلماء: روبرت هوك، ليفنهوك، شلايدن (النباتات)، شوان (الحيوانات)، وفيرشو (الخلايا تنشأ من خلايا سابقة)',
      'أن يقارن بين المجهر الضوئي المركب (تكبير حتى 1500x) والمجهر الإلكتروني الماسح (SEM للسطح ثلاثي الأبعاد) والنافذ (TEM للتراكيب الداخلية بتكبير يتجاوز مليون مرة)',
      'أن يوضح تركيب الغشاء البلازمي (الطبقة المزدوجة للفوسفوليبيدات، جزيئات البروتين المدمجة، والكوليسترول)',
      'أن يقارن بين العضيات غير الغشائية (الريبوسومات والسنتروسوم) والعضيات الغشائية (الشبكة الإندوبلازمية الملساء والخشنة، جهاز جولجي، اللايسوسومات، الميتوكوندريا، الفجوات، والبلاستيدات)'
    ],
    learningOutcomesEn: [
      'Summarize Cell Theory tenets and contributions (Hooke, Leeuwenhoek, Schleiden, Schwann, Virchow)',
      'Compare light microscopes (up to 1500x) and electron microscopes (SEM 3D surfaces vs TEM internal ultrastructure > 1,000,000x)',
      'Describe plasma membrane fluid mosaic model (phospholipid bilayer, transport proteins, cholesterol stability)',
      'Differentiate non-membranous (ribosomes, centrosomes) and membranous organelles (ER, Golgi, lysosomes, mitochondria, plastids)'
    ],

    vocabulary: [
      {
        termAr: 'النظرية الخلوية (Cell Theory)',
        termEn: 'Cell Theory',
        definitionAr: 'نظرية علمية تنص على: 1) جميع الكائنات الحية تتكون من خلايا، 2) الخلية هي الوحدة الوظيفية والتركيبية، 3) تنشأ جميع الخلايا من خلايا كانت موجودة من قبل.',
        definitionEn: 'Biological doctrine: all organisms are composed of cells, the cell is the unit of life, and all cells arise from pre-existing cells.'
      },
      {
        termAr: 'الميتوكوندريا والأعراف (Mitochondria & Cristae)',
        termEn: 'Mitochondria & Cristae',
        definitionAr: 'عضيات غشائية مسؤولة عن التنفس الخلوي وإنتاج $ATP$، يحتوي غشاؤها الداخلي على ثنيات تسمى الأعراف تزيد من مساحة السطح لإنتاج الطاقة.',
        definitionEn: 'Double-membraned powerhouses whose internal folded cristae maximize surface area for ATP synthase enzymes.'
      },
      {
        termAr: 'اللايسوسومات (Lysosomes)',
        termEn: 'Lysosomes',
        definitionAr: 'حويصلات غشائية تفرزها أجسام جولجي تحتوي على إنزيمات هاضمة (Hydrolytic Enzymes) لهضم الميكروبات وتحليل العضيات المسنة والتالفة.',
        definitionEn: 'Membrane-bound vesicles from Golgi containing hydrolytic enzymes for intracellular digestion and pathogen destruction.'
      }
    ],

    keyConceptsAr: [
      'مقياس التكبير في المجهر الضوئي: قوة التكبير = قوة تكبير العدسة العينية × قوة تكبير العدسة الشيئية (بحد أقصى 1500 مرة لتفادي عدم وضوح الصورة)',
      'السنتروسوم (الجسم المركزي): عضية غير غشائية تتكون من سنتريولين يلعبان دوراً في تكوين خيوط المغزل أثناء انقسام الخلية الحيوانية (يغيب في النباتات وتتولى السيتوبلازم المهمة)',
      'الشبكة الإندوبلازمية الخشنة (تحمل ريبوسومات لبناء البروتين) والملساء (تخليق الليبيدات وتحويل الجلوكوز لجليكوجين وتعديل سمية المواد)',
      'جهاز جولجي: استقبال وتعديل وتصنيف وتعبئة الإفرازات الخلوية ونقلها للحويصلات الإفرازية أو اللايسوسومات',
      'البلاستيدات الخضراء: تحتوي على صبغة الكلوروفيل وتقوم بالبناء الضوئي، والملونة (الكاروتين) للأزهار، والبيضاء (الليوكوبلاست) لتخزين النشا'
    ],
    keyConceptsEn: [
      'Light microscope magnification limit is 1500x before wavelength diffraction blurs resolution',
      'Centrosome contains two centrioles orchestrating spindle fibers in animal mitosis (absent in higher plant cells)',
      'Rough ER modifies proteins; Smooth ER synthesizes lipids and detoxifies chemicals',
      'Golgi apparatus receives, modifies, sorts, and packages macromolecules for secretion',
      'Plastids: Chloroplasts (photosynthesis), Chromoplasts (petals/fruit pigments), Leucoplasts (starch storage)'
    ],

    summaryAr: 'تتناول المحاضرة الثالثة بيولوجيا الخلية لصف أولى ثانوي: مبادئ النظرية الخلوية، الفروق بين المجاهر الضوئية والإلكترونية، تركيب الغشاء الخلوي، وتفصيل وظائف جميع العضيات الغشائية وغير الغشائية.',
    summaryEn: 'Covers cell biology essentials: historical Cell Theory, electron vs light microscopy, fluid mosaic membrane, and detailed organelle ultrastructure and functions.',

    sections: [
      {
        titleAr: '1. النظرية الخلوية والمجاهر الضوئية والإلكترونية',
        titleEn: '1. Cell Theory & Advanced Microscopy',
        contentAr: '1) النظرية الخلوية وتطورها:\n- روبرت هوك (1665): اكتشف الخلية في الفلين.\n- فان ليفنهوك (1674): أول من شاهد الكائنات الدقيقة الحية بمجهر يكبر 200x.\n- شلايدن (1838): توصل إلى أن جميع النباتات تتكون من خلايا.\n- ثيودور شوان (1839): استنتج أن جميع الحيوانات تتكون من خلايا.\n- رودولف فيرشو (1855): وضع مبدأ أن الخلايا الجديدة تنشأ فقط من خلايا حية سابقة.\n\n2) المقارنة بين المجاهر:\n- المجهر الضوئي: يستخدم الضوء والعدسات الزجاجية، قوة تكبيره تصل إلى 1500x.\n- المجهر الإلكتروني: يستخدم حزمة إلكترونات وعدسات كهرومغناطيسية بقوة تكبير تصل لمليون مرة. ينقسم إلى: ماسح (SEM) لدراسة السطح الخارجي ثلاثي الأبعاد، ونافذ (TEM) لدراسة التراكيب الداخلية بدقة متناهية.',
        contentEn: 'Cell theory pioneers and microscope comparison: Light (1500x) vs Electron SEM (surface 3D) and TEM (internal ultrastructure).'
      },
      {
        titleAr: '2. عضيات الخلية ووظائفها الحيوية',
        titleEn: '2. Cellular Organelles and Physiology',
        contentAr: '1) عضيات غير غشائية (Non-membranous):\n- الريبوسومات: مصانع تخليق البروتين في الخلية.\n- السنتروسوم (الجسم المركزي): يتكون من سنتريولين، يكون خيوط المغزل في الخلايا الحيوانية.\n\n2) عضيات غشائية (Membranous):\n- الشبكة الإندوبلازمية (ER): خشنة (تصنيع وتعديل البروتينات) وملساء (تصنيع الدهون وتخزين الجليكوجين في الكبد وتحويل السموم لمواد أقل سمية).\n- جهاز جولجي: فرز وتعديل وتغليف البروتينات وإنتاج اللايسوسومات.\n- اللايسوسومات: حويصلات هضمية تحتوي على إنزيمات محللة.\n- الميتوكوندريا: مراكز إنتاج الطاقة والتنفس الخلوي الهوائي وتوليد $ATP$.\n- الفجوات (Vacuoles): فجوة عصيرية مركزية كبيرة في النباتات، وصغيرة متعددة في الحيوانات.\n- البلاستيدات: خضراء (Chloroplasts)، ملونة (Chromoplasts)، وعديمة اللون (Leucoplasts).',
        contentEn: 'Non-membranous organelles (ribosomes, centrosomes) vs membranous organelles (ER, Golgi, lysosomes, mitochondria, vacuoles, plastids).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-bio3-1',
        questionAr: 'علل: تكثر الميتوكوندريا في خلايا العضلات والقلب، بينما تكثر الشبكة الإندوبلازمية الملساء في خلايا الكبد؟',
        questionEn: 'Explain why mitochondria are abundant in cardiac and muscle cells, while smooth ER is abundant in liver hepatocytes?',
        solutionStepsAr: [
          'الخطوة 1: خلايا العضلات والقلب تبذل مجهوداً حركياً مستمراً وتحتاج لكميات هائلة وفورية من الطاقة (ATP)، والميتوكوندريا هي المسؤولة عن أكسدة الجلوكوز والتنفس الخلوي وإنتاج ATP.',
          'الخطوة 2: خلايا الكبد مسؤولة عن تخزين الجلوكوز الزائد في صورة جليكوجين، وتخليق الدهون، ومعالجة وإزالة سمية العقاقير والمواد الضارة.',
          'الخطوة 3: الشبكة الإندوبلازمية الملساء هي المسؤولة مباشرة عن تخليق الليبيدات وبناء الجليكوجين وتعديل سمية المواد الكيميائية.'
        ],
        solutionStepsEn: [
          'Step 1: Muscle and cardiac cells require high continuous ATP output generated through mitochondrial cellular respiration.',
          'Step 2: Hepatocytes store excess glucose as glycogen, synthesize lipids, and detoxify chemicals.',
          'Step 3: Smooth ER catalyzes lipid synthesis, glycogen metabolism, and xenobiotic detoxification.'
        ],
        answerAr: 'الميتوكوندريا تكثر في العضلات لتوفير الطاقة ATP اللازمة للانقباض، والشبكة الملساء تكثر في الكبد لتخليق الدهون وتحويل الجلوكوز إلى جليكوجين وإزالة سمية المواد.',
        answerEn: 'Mitochondria provide high ATP energy in muscles, whereas smooth ER in liver performs glycogen synthesis and toxin detoxification.'
      }
    ],

    assessment: {
      id: 'quiz-h10-bio-3',
      lectureId: 'h10-bio-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: الخلية وعضياتها والمجاهر (1 ثانوي)',
      titleEn: 'Mastery Quiz 3: Cell Theory, Ultrastructure & Microscopy (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-b3-1',
          textAr: 'العالم الذي وضع مبدأ أن "الخلية هي الوحدة الوظيفية لجميع الكائنات الحية وأن الخلايا تنشأ من خلايا كانت موجودة من قبل" هو:',
          textEn: 'The scientist who established that all cells arise strictly from pre-existing living cells is:',
          optionsAr: ['رودولف فيرشو (Rudolf Virchow)', 'روبرت هوك (Robert Hooke)', 'فان ليفنهوك', 'شلايدن'],
          optionsEn: ['Rudolf Virchow', 'Robert Hooke', 'Van Leeuwenhoek', 'Schleiden'],
          correctIndex: 0,
          conceptTestedAr: 'مساهمة العالم فيرشو في النظرية الخلوية',
          conceptTestedEn: 'Virchow\'s cell lineage principle',
          explanationAr: 'فيرشو (1855) أكد أن الخلية هي الوحدة الوظيفية وأن الخلايا الجديدة تنشأ من انقسام خلايا حية سابقة.',
          explanationEn: 'Virchow formulated the principle that all cells originate from pre-existing cells.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b3-2',
          textAr: 'العضية الخلوية الغشائية المسؤولة عن فرز وتعديل وتغليف البروتينات المفرزة من الشبكة الإندوبلازمية هي:',
          textEn: 'The membranous organelle responsible for sorting, modifying, and packaging proteins from the ER is:',
          optionsAr: ['جهاز جولجي (Golgi Apparatus)', 'السنتروسوم', 'البلاستيدات الخضراء', 'الريبوسوم'],
          optionsEn: ['Golgi Apparatus', 'Centrosome', 'Chloroplast', 'Ribosome'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة جهاز جولجي',
          conceptTestedEn: 'Golgi apparatus sorting and packaging role',
          explanationAr: 'أجسام جولجي تستقبل الحويصلات الناقلة المحملة بالبروتين من الشبكة الإندوبلازمية وتعدلها وتفرزها في حويصلات إفرازية.',
          explanationEn: 'The Golgi apparatus modifies, packages, and routes proteins for secretion.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b3-3',
          textAr: 'لدراسة السطح الخارجي ثلاثي الأبعاد لخلية دم بيضاء بدقة تكبير فائقة، نستخدم المجهر:',
          textEn: 'To visualize the external 3D surface topography of a white blood cell, we use the:',
          optionsAr: ['المجهر الإلكتروني الماسح (Scanning Electron Microscope - SEM)', 'المجهر الإلكتروني النافذ (TEM)', 'المجهر الضوئي البسيط', 'المجهر الميداني العادي'],
          optionsEn: ['Scanning Electron Microscope (SEM)', 'Transmission Electron Microscope (TEM)', 'Simple Light Microscope', 'Standard Field Loupe'],
          correctIndex: 0,
          conceptTestedAr: 'استخدام المجهر الإلكتروني الماسح SEM',
          conceptTestedEn: 'SEM surface topography applications',
          explanationAr: 'المجهر الإلكتروني الماسح (SEM) يمسح سطح الخلية بحزمة إلكترونات ليعطي صورة ثلاثية الأبعاد واضحة لتفاصيل السطح الخارجي.',
          explanationEn: 'SEM scans specimen surfaces to produce high-resolution 3D surface topography images.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-b3-4',
          textAr: 'العضية غير الغشائية التي تلعب دوراً حاسماً في تكوين خيوط المغزل أثناء انقسام الخلية الحيوانية هي:',
          textEn: 'The non-membranous organelle that orchestrates mitotic spindle formation in animal cell division is:',
          optionsAr: ['السنتروسوم / الجسم المركزي (Centrosome)', 'الميتوكوندريا', 'اللايسوسوم', 'الفجوة العصيرية'],
          optionsEn: ['Centrosome (Centrioles)', 'Mitochondria', 'Lysosome', 'Central Vacuole'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة السنتروسوم في انقسام الخلية',
          conceptTestedEn: 'Centrosome spindle organization in animal mitosis',
          explanationAr: 'السنتروسوم يحتوي على زوج من السنتريولات يمتدان لتكوين خيوط المغزل التي تجذب الكروموسومات في انقسام الخلية الحيوانية.',
          explanationEn: 'Centrioles within the centrosome organize spindle microtubules during animal cell mitosis.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b3-5',
          textAr: 'تحتوي اللايسوسومات (Lysosomes) بداخلها على مجموعة من:',
          textEn: 'Lysosomes internally contain a concentrated suite of:',
          optionsAr: [
            'الإنزيمات الهاضمة المحللة (Hydrolytic Enzymes)',
            'جزيئات صبغة الكلوروفيل الخضراء',
            'الأحماض النووية DNA فقط',
            'بلورات النشا المخزنة'
          ],
          optionsEn: [
            'Hydrolytic digestive enzymes',
            'Green chlorophyll pigments',
            'DNA chromosomes only',
            'Stored starch granules'
          ],
          correctIndex: 0,
          conceptTestedAr: 'محتوى اللايسوسومات من الإنزيمات الهاضمة',
          conceptTestedEn: 'Lysosomal hydrolytic enzyme contents',
          explanationAr: 'اللايسوسومات تحتوي على إنزيمات هاضمة حامضية تهضم المواد الغذائية والبكتيريا والعضيات الهرمة دون إيذاء سيتوبلازم الخلية.',
          explanationEn: 'Lysosomes house acidic hydrolytic enzymes for intracellular catabolism and autophagy.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: CELL DIFFERENTIATION & PLANT/ANIMAL TISSUES ──
  {
    id: 'h10-bio-4',
    order: 4,
    titleAr: 'المحاضرة 4: تمايز الخلايا وتنوع الأنسجة النباتية والحيوانية',
    titleEn: 'Lecture 4: Cell Differentiation: Plant & Animal Tissues Architecture',
    subtitleAr: 'الأنسجة النباتية البسيطة (البرنشيمي، الكولنشيمي، والإسكلرنشيمي) والمركبة (الخشب واللحاء)، والأنسجة الحيوانية (الطلائية، الضامة، العضلية، والعصبية)',
    subtitleEn: 'Master simple plant tissues (parenchyma, collenchyma, sclerenchyma) and vascular tissues (xylem, phloem), alongside animal tissues (epithelial, connective, muscular, nervous).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Biology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: الخلية تركيباً ووظيفة',
    unitTitleEn: 'Unit 2: Cell Structure & Function',
    lessonNumberAr: 'الدرس 2: الأنسجة النباتية والحيوانية وتمايز الخلايا',
    lessonNumberEn: 'Lesson 2: Plant & Animal Tissues Differentiation',

    warmupHookAr: 'تبدأ حياة الإنسان كخلية واحدة مخصبة (الزيجوت)، فكيف تتحول هذه الخلية المتماثلة إلى أكثر من 200 نوع مختلف من الخلايا المتخصصة (خلايا عصبية تنقل النبضات، وخلايا عضلية تنقبض، وخلايا عظمية صلبة، وخلايا دم حمراء تنقل الأكسجين)؟ إنها معجزة "التمايز الخلوي" وتنظيم الخلايا في أنسجة متكاملة لتكوين أعضاء وأجهزة الجسم الحية!',
    warmupHookEn: 'From a single zygote, cellular differentiation generates over 200 distinct cell types organized into specialized plant and animal tissues: supportive vascular bundles, protective epithelia, resilient connective frameworks, and contractile muscles.',

    learningOutcomesAr: [
      'أن يقارن الطالب بين الأنسجة النباتية البسيطة: البرنشيمي (للتهوية والتمثيل وتخزين النشا)، الكولنشيمي (مدعم بالسليلوز للمرونة)، والإسكلرنشيمي (مغلظ باللجنين للصلابة)',
      'أن يوضح تركيب الأنسجة الوعائية النباتية: الخشب (نقل الماء والأملاح لأعلى) واللحاء (نقل العصارة الناضجة والسكريات لجميع أجزاء النبات)',
      'أن يصنف الأنسجة الحيوانية الطلائية (الحرشفية، المكعبة، العمادية، والحرشفية المصففة في الجلد)',
      'أن يميز بين أنواع الأنسجة الضامة (الضام الأصيل، الهيكلي: العظام والغضاريف، والوعائي: الدم والليمف)',
      'أن يقارن بين أنواع الأنسجة العضلية (الهيكلية الإرادية المخططة، الملساء اللاإرادية غير المخططة، والقلبية اللاإرادية المخططة ذات الأقراص البينية)'
    ],
    learningOutcomesEn: [
      'Compare simple plant tissues: parenchyma (photosynthesis/storage), collenchyma (flexible cellulose support), sclerenchyma (rigid lignified support)',
      'Explain vascular plant tissues: xylem (unidirectional water transport) and phloem (bidirectional sucrose translocations)',
      'Classify epithelial tissues: simple squamous, cuboidal, columnar, and stratified squamous (skin epidermis)',
      'Differentiate connective tissues: proper, skeletal (bone/cartilage matrix), and vascular (blood and lymph)',
      'Compare muscle tissues: voluntary striated skeletal, involuntary smooth, and involuntary striated cardiac with intercalated discs'
    ],

    vocabulary: [
      {
        termAr: 'النسيج الإسكلرنشيمي (Sclerenchyma Tissue)',
        termEn: 'Sclerenchyma Tissue',
        definitionAr: 'نسيج نباتي صلب غير حي جدر خلاياه مغلظة بمادتي السليلوز واللجنين لإعطاء النبات القوة والصلابة والدعامة (مثل الخلايا الحجرية في الكمثرى والألياف).',
        definitionEn: 'Rigid, non-living supportive plant tissue with heavily lignified secondary cell walls (e.g. stone cells and fibers).'
      },
      {
        termAr: 'الأقراص البينية (Intercalated Discs)',
        termEn: 'Intercalated Discs',
        definitionAr: 'تراكيب دقيقة تربط ألياف العضلات القلبية ببعضها، تجعل القلب ينبض كوحدة وظيفية واحدة متناسقة وبشكل لا إرادي.',
        definitionEn: 'Microscopic junctions anchoring cardiac muscle fibers together, ensuring coordinated syncytial heart contractions.'
      },
      {
        termAr: 'النسيج الضام الوعائي (Vascular Connective Tissue)',
        termEn: 'Vascular Connective Tissue',
        definitionAr: 'نسيج ضام مادته بين الخلوية سائلة، ويتمثل في الدم والليمف ويقوم بنقل الغازات والمواد الغذائية والهرمونات والدفاع عن الجسم.',
        definitionEn: 'Connective tissue with a fluid extracellular matrix (blood and lymph) responsible for transport and immune defense.'
      }
    ],

    keyConceptsAr: [
      'أنسجة النبات البسيطة: برنشيمي (فراغات تهوية وبلاستيدات)، كولنشيمي (مرونة)، إسكلرنشيمي (صلابة غير حي)',
      'أنسجة النبات المركبة: الخشب (أوعية وقصيبات لنقل الماء)، اللحاء (أنابيب غربالية وخلايا مرافقة لنقل الغذاء)',
      'الأنسجة الطلائية: تغطي سطح الجسم وتبطن تجاويفه للحماية والامتصاص والإفراز',
      'الأنسجة الضامة: نسيج ضام أصيل (أكثرها انتشاراً كمساريقا الأمعاء)، هيكلي (مادة بينية صلبة ترسب بها الكالسيوم بالعظام)، ووعائي (الدم)',
      'الأنسجة العضلية: عضلات هيكلية (إرادية مخططة متصلة بالهيكل)، عضلات ملساء (لا إرادية غير مخططة في جدر الأوعية والمعدة)، وعضلات قلبية (لا إرادية مخططة في القلب فقط)'
    ],
    keyConceptsEn: [
      'Simple plant tissues: parenchyma (metabolic), collenchyma (flexible support), sclerenchyma (lignified rigidity)',
      'Vascular plant tissues: xylem (water vessel conduits) and phloem (sieve tubes with companion cells)',
      'Epithelial tissues line organs for protection, absorption, and glandular secretion',
      'Connective tissues: connective proper (mesentery elasticity), skeletal (calcified bone/cartilage matrix), vascular (fluid blood/lymph)',
      'Muscles: skeletal (voluntary striated), smooth (involuntary non-striated), cardiac (involuntary striated with intercalated discs)'
    ],

    summaryAr: 'تغطي المحاضرة الرابعة علم الأنسجة والتمايز لصف أولى ثانوي: الأنسجة النباتية البسيطة والوعائية، والأنسجة الحيوانية الرئيسية الأربعة (الطلائية، الضامة، العضلية، والعصبية).',
    summaryEn: 'Comprehensive histology lecture: plant parenchyma/collenchyma/sclerenchyma and xylem/phloem, alongside epithelial, connective, muscular, and nervous animal tissues.',

    sections: [
      {
        titleAr: '1. الأنسجة النباتية (البسيطة والمركبة)',
        titleEn: '1. Simple & Complex Plant Tissues',
        contentAr: '1) الأنسجة النباتية البسيطة:\n- النسيج البرنشيمي: خلايا حية بيضاوية أو مستديرة رقيقة الجدران بينها مسافات للتهوية وتحتوي على فجوات وبلاستيدات، وظيفته: التهوية وتخزين النشا والبناء الضوئي.\n- النسيج الكولنشيمي: خلايا مستطيلة مغلظة الجدران جزئياً بمادة السليلوز، وظيفته: تدعيم النبات وإكسابه المرونة (مثل سيقان البقدونس).\n- النسيج الإسكلرنشيمي: خلايا غير حية مغلظة بالسليلوز واللجنين، وظيفته: إعطاء الصلابة والقوة (مثل ألياف الكتان والخلايا الحجرية في الكمثرى).\n\n2) الأنسجة النباتية المركبة (الوعائية):\n- نسيج الخشب (Xylem): أوعية وقصيبات وخلايا برنشيمية تنقل الماء والأملاح من الجذور إلى الأوراق وتدعم الساق.\n- نسيج اللحاء (Phloem): أنابيب غربالية وخلايا مرافقة تزودها بالطاقة ($ATP$) لنقل المواد الغذائية العضوية من الأوراق لباقي النبات.',
        contentEn: 'Plant tissues: simple parenchyma, collenchyma, sclerenchyma, alongside complex vascular xylem (water) and phloem (photosynthate transport).'
      },
      {
        titleAr: '2. الأنسجة الحيوانية (الطلائية، الضامة، والعضلية)',
        titleEn: '2. Animal Tissues (Epithelial, Connective & Muscle)',
        contentAr: '1) الأنسجة الطلائية (Epithelial Tissues):\n- بسيطة (حرشفي في الحويصلات الهوائية والشعيرات، مكعبي في أنيبيبات الكلية، عمادي في بطانة المعدة والأمعاء).\n- مصففة (مركبة): نسيج حرشفي مصفف في بشرة الجلد لحماية الأنسجة من الجفاف والميكروبات.\n\n2) الأنسجة الضامة (Connective Tissues):\n- ضام أصيل: يجمع بين المرونة والصلابة (مثل أدمة الجلد والمساريقا).\n- ضام هيكلي: مادة خلوية صلبة أو شبه صلبة (عظام وغضاريف للدعامة).\n- ضام وعائي: مادة خلوية سائلة كالبلازما (الدم والليمف لنقل المواد).\n\n3) الأنسجة العضلية:\n- عضلات هيكلية: مخططة إرادية (عضلات الذراع والأرجل).\n- عضلات ملساء: غير مخططة لا إرادية (جدار القناة الهضمية والمثانة والأوعية الدموية).\n- عضلات قلبية: مخططة لا إرادية تحتوي على أقراص بينية لتوحيد نبض عضلة القلب.',
        contentEn: 'Animal tissues: epithelial sheets, connective binding frameworks (proper, skeletal, vascular), and contractile muscle variants (skeletal, smooth, cardiac).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-bio4-1',
        questionAr: 'قارن بين الأوعية الخشبية والأنابيب الغربالية في النبات من حيث: التركيب، المواد المنقولة، واتجاه النقل؟',
        questionEn: 'Compare xylem vessels and phloem sieve tubes regarding structure, transported materials, and direction of transport?',
        solutionStepsAr: [
          'الخطوة 1: أوعية الخشب خلايا غير حية تلاشت منها البروتوبلازم وغُلظت باللجنين، تنقل الماء والأملاح المعدنية من الجذر للأوراق في اتجاه واحد لأعلى.',
          'الخطوة 2: الأنابيب الغربالية خلايا حية تتصل عبر ثقوب صفائح غربالية وتجاورها خلايا مرافقة غنية بالميتوكوندريا، تنقل الغذاء العضوي (السكروز) من الأوراق إلى جميع أجزاء النبات في جميع الاتجاهات (لأعلى ولأسفل).',
          'الخطوة 3: الخشب يدعم الساق بقوة اللجنين، بينما اللحاء يركز على الإمداد الغذائي الحيوي.'
        ],
        solutionStepsEn: [
          'Step 1: Xylem vessels are non-living lignified conduits transporting water and minerals unidirectionally upwards.',
          'Step 2: Phloem sieve tubes are living conduits with companion cells transporting organic photosynthates bidirectionally to all organs.',
          'Step 3: Xylem provides structural support; phloem delivers metabolic nutrients.'
        ],
        answerAr: 'الخشب خلايا غير حية تنقل الماء والأملاح لأعلى فقط، واللحاء خلايا حية ذات صفائح غربالية تنقل السكريات العضوية في جميع الاتجاهات بمساعدة الخلايا المرافقة.',
        answerEn: 'Xylem consists of non-living vessels transporting water/minerals upward; phloem consists of living sieve tubes transporting sugars bidirectionally.'
      }
    ],

    assessment: {
      id: 'quiz-h10-bio-4',
      lectureId: 'h10-bio-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: الأنسجة النباتية والحيوانية (1 ثانوي)',
      titleEn: 'Mastery Quiz 4: Plant & Animal Tissues Architecture (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-b4-1',
          textAr: 'النسيج النباتي الميت الذي تتميز جدر خلاياه بوجود تغليظ قوي بمادتي السليلوز واللجنين معاً لإعطاء النبات القوة والصلابة هو:',
          textEn: 'The non-living plant tissue whose cell walls are heavily thickened with both cellulose and lignin for rigid support is:',
          optionsAr: ['النسيج الإسكلرنشيمي (Sclerenchyma)', 'النسيج البرنشيمي', 'النسيج الكولنشيمي', 'اللحاء'],
          optionsEn: ['Sclerenchyma', 'Parenchyma', 'Collenchyma', 'Phloem'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص النسيج الإسكلرنشيمي',
          conceptTestedEn: 'Sclerenchyma lignified tissue characteristics',
          explanationAr: 'النسيج الإسكلرنشيمي هو نسيج غير حي مغلظ باللجنين والسليلوز ويوفر الصلابة والدعامة الفائقة للنبات كالألياف والخلايا الحجرية.',
          explanationEn: 'Sclerenchyma possesses lignified secondary walls providing structural stiffness in plants.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b4-2',
          textAr: 'تتميز العضلات القلبية (Cardiac Muscles) عن باقي العضلات بوجود:',
          textEn: 'Cardiac muscle tissue is uniquely distinguished from skeletal and smooth muscles by the presence of:',
          optionsAr: [
            'الأقراص البينية التي تجعل القلب ينبض كوحدة وظيفية متناسقة',
            'أنها عضلات إرادية تماماً يتحكم فيها الإنسان',
            'غياب أي خطوط مجهرية بداخلها',
            'اتصالها المباشر بعظام الهيكل العظمي'
          ],
          optionsEn: [
            'Intercalated discs ensuring synchronized rhythmic contractions',
            'Strictly voluntary conscious control',
            'Complete lack of microscopic striations',
            'Direct attachment to skeletal bone framework'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الأقراص البينية في العضلات القلبية',
          conceptTestedEn: 'Intercalated discs in cardiac muscle syncytium',
          explanationAr: 'الأقراص البينية هي روابط خلوية مميزة للعضلات القلبية تجعل القلب ينبض ككتلة وظيفية واحدة متكاملة ولا إرادية.',
          explanationEn: 'Intercalated discs link cardiac myocytes to allow rapid, synchronized electrical conduction.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b4-3',
          textAr: 'النسيج الضام الذي تتميز مادته بين الخلوية بأنها سائلة ويقوم بوظيفة نقل الغازات والمواد الغذائية هو:',
          textEn: 'The connective tissue possessing a fluid extracellular matrix and specialized in transport is:',
          optionsAr: ['النسيج الضام الوعائي (الدم والليمف)', 'النسيج الضام الهيكلي (العظام)', 'النسيج الضام الأصيل', 'النسيج الطلائي الحرشفي'],
          optionsEn: ['Vascular Connective Tissue (Blood and Lymph)', 'Skeletal Connective Tissue (Bones)', 'Connective Tissue Proper', 'Squamous Epithelial Tissue'],
          correctIndex: 0,
          conceptTestedAr: 'النسيج الضام الوعائي والدم',
          conceptTestedEn: 'Fluid vascular connective tissue classification',
          explanationAr: 'النسيج الضام الوعائي يتمثل في الدم والليمف حيث المادة بين الخلوية سائلة (البلازما) مسؤولة عن نقل الغازات والمغذيات.',
          explanationEn: 'Blood and lymph constitute vascular connective tissues with fluid plasma matrices for physiological transport.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b4-4',
          textAr: 'الخلايا المرافقة (Companion Cells) في نسيج اللحاء تلعب دوراً أساسياً في:',
          textEn: 'Companion cells in phloem vascular tissue serve the essential biological role of:',
          optionsAr: [
            'تزويد الأنابيب الغربالية بالطاقة ATP والميتوكوندريا لنقل الغذاء',
            'نقل الماء والأملاح من الجذور فقط',
            'تكوين صبغة الكلوروفيل للأوراق',
            'إفراز الإنزيمات الهاضمة'
          ],
          optionsEn: [
            'Supplying ATP energy and metabolic support to sieve tubes for translocation',
            'Transporting water and soil minerals exclusively',
            'Synthesizing green leaf chlorophyll pigments',
            'Secreting digestive hydrolytic enzymes'
          ],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الخلايا المرافقة في اللحاء',
          conceptTestedEn: 'Companion cell metabolic support of phloem sieve tubes',
          explanationAr: 'الخلايا المرافقة تحتوي على أنوية وميتوكوندريا وتمد الأنابيب الغربالية عديمة الأنوية بطاقة ATP لنقل المواد الغذائية.',
          explanationEn: 'Companion cells provide metabolic machinery and ATP to drive phloem translocation through sieve tubes.',
          difficulty: 'medium'
        },
        {
          id: 'qh10-b4-5',
          textAr: 'النسيج الطلائي الذي يبطن الحويصلات الهوائية في الرئتين والشعيرات الدموية لتسهيل تبادل الغازات هو النسيج الطلائي:',
          textEn: 'The epithelial tissue lining pulmonary lung alveoli and capillary walls to facilitate rapid gas diffusion is:',
          optionsAr: ['الحرشفي البسيط (Simple Squamous Epithelium)', 'العمادي البسيط', 'المكعبي البسيط', 'الحرشفي المصفف'],
          optionsEn: ['Simple Squamous Epithelium', 'Simple Columnar Epithelium', 'Simple Cuboidal Epithelium', 'Stratified Squamous Epithelium'],
          correctIndex: 0,
          conceptTestedAr: 'النسيج الطلائي الحرشفي البسيط',
          conceptTestedEn: 'Simple squamous epithelium in alveolar gas exchange',
          explanationAr: 'النسيج الحرشفي البسيط يتكون من طبقة رقيقة واحدة من الخلايا المفلطحة مما يسمح بانتشار سريع للغازات في الرئتين والشعيرات.',
          explanationEn: 'Single-layered simple squamous epithelium minimizes diffusion distances for efficient alveolar gas exchange.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: GENETICS & PRINCIPLES OF BIOLOGICAL CLASSIFICATION ──
  {
    id: 'h10-bio-5',
    order: 5,
    titleAr: 'المحاضرة 5: الوراثة والكروموسومات، الحالات الشاذة، وأسس تصنيف الكائنات الحية',
    titleEn: 'Lecture 5: Genetics, Chromosomal Abnormalities & Principles of Biological Classification',
    subtitleAr: 'قوانين مندل، انعدام السيادة والجينات المتكاملة والمميتة، تحديد الجنس والحالات الكروموسومية الشاذة (كلينفلتر، تيرنر، وداون)، وأسس التصنيف والممالك الخمس',
    subtitleEn: 'Master Mendelian & non-Mendelian inheritance, sex determination, chromosomal aberrations (Klinefelter, Turner, Down), and the 5-kingdom biological classification system.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الثانوي (Grade 10) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 10 / Secondary 1 - High School Biology',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة والرابعة: الوراثة وتصنيف الكائنات الحية',
    unitTitleEn: 'Unit 3 & 4: Genetics & Biological Classification',
    lessonNumberAr: 'الدرس 1: الوراثة والكروموسومات الشاذة والممالك الخمس',
    lessonNumberEn: 'Lesson 1: Genetics & Biological Classification',

    warmupHookAr: 'كيف ترث فصيلة دمك النادرة من والديك، ولماذا يُصاب الذكور بعمى الألوان والهيموفيليا أكثر من الإناث؟ وكيف استطاع علماء الأحياء تصنيف أكثر من 2 مليون نوع من الكائنات الحية من أصغر بكتيريا وحيدة الخلية إلى الحوت الأزرق العملاق في شجرة حياة متناسقة تضم 5 ممالك رئيسية؟ الوراثة والتصنيف يفسران لنا سر التنوع البيولوجي المذهل على كوكب الأرض!',
    warmupHookEn: 'Genetics unravels inheritance patterns, ABO blood group codominance, and sex-linked traits, while modern taxonomy organizes the immense diversity of Earth\'s 2 million species into the 5-kingdom classification framework.',

    learningOutcomesAr: [
      'أن يحل الطالب مسائل الوراثة المندلية (السيادة التامة وانعزال العوامل) واللا مندلية (انعدام السيادة في فصائل الدم وشب الليل، الجينات المتكاملة في بسلة الزهور، والجينات المميتة)',
      'أن يفسر تحديد الجنس في الإنسان ($XY$ ذكر، $XX$ أنثى) وتوارث الصفات المرتبطة بالجنس والمتأثرة بالجنس',
      'أن يقارن بين الحالات الكروموسومية الشاذة في الإنسان: حالة كلينفلتر ($44 + XXY$)، حالة تيرنر ($44 + X0$)، وحالة داون ($45 + XX$ أو $45 + XY$ ثلاثي الكروموسوم 21)',
      'أن يطبق قواعد التسمية الثنائية (Binomial Nomenclature) لنظام لينيوس ويصنف الكائنات الحية إلى الممالك الخمس (البدائيات، الطلائعيات، الفطريات، النبات، والحيوان)'
    ],
    learningOutcomesEn: [
      'Solve Mendelian and non-Mendelian genetic crosses (codominance in ABO blood groups, complementary genes, lethal genes)',
      'Explain chromosomal human sex determination (XY male / XX female) and sex-linked conditions',
      'Differentiate human chromosomal karyotype abnormalities: Klinefelter (44+XXY), Turner (44+X0), and Down Syndrome (Trisomy 21)',
      'Apply Linnaean binomial nomenclature and categorize organisms across Whittaker\'s 5 Kingdoms (Monera, Protista, Fungi, Plantae, Animalia)'
    ],

    vocabulary: [
      {
        termAr: 'انعدام السيادة (Lack of Dominance / Codominance)',
        termEn: 'Codominance / Incomplete Dominance',
        definitionAr: 'حالة وراثية لا يسود فيها أحد الجينين على الآخر، بل يتداخل فعلهما لإظهار صفة جديدة مشتركة (مثل توارث فصيلة الدم AB وأزهار نبات شب الليل).',
        definitionEn: 'Inheritance pattern where neither allele masks the other, resulting in a blended or codominant intermediate phenotype.'
      },
      {
        termAr: 'حالة كلينفلتر وتيرنر (Klinefelter & Turner Syndromes)',
        termEn: 'Klinefelter & Turner Syndromes',
        definitionAr: 'كلينفلتر ($44 + XXY$): ذكر عقيم نتيجة إخصاب بويضة شاذة ($22 + XX$) بحيوان منوي ($22 + Y$). تيرنر ($44 + X0$): أنثى لا تصل للبلوغ لإخصاب بويضة شاذة ($22 + 0$) بحيوان ($22 + X$).',
        definitionEn: 'Aneuploidies: Klinefelter (44+XXY sterile male with extra X) and Turner (44+X0 non-maturing female lacking one X chromosome).'
      },
      {
        termAr: 'التسمية الثنائية (Binomial Nomenclature)',
        termEn: 'Binomial Nomenclature',
        definitionAr: 'نظام التسمية العلمي الذي وضعه كارل لينيوس، ويتكون الاسم العلمي للكائن من كلمتين باللغة اللاتينية: الأولى اسم الجنس (Genus يبدأ بحرف كبير) والثانية اسم النوع (species بحرف صغير).',
        definitionEn: 'The scientific naming system giving each organism a two-part Latinized name: capitalized Genus followed by lowercase species.'
      }
    ],

    keyConceptsAr: [
      'فصائل الدم في الإنسان ($ABO$): تجمع بين 3 أنماط وراثية (تعدد بدائل $A, B, O$ ، انعدام سيادة بين $A$ و $B$ ، وسيادة تامة للجينين $A$ و $B$ على $O$)',
      'الجينات المميتة: السائدة (مثل جين لون الفراء الأصفر في الفئران $YY$) والمتنحية (مثل جين غياب الكلوروفيل في نبات الذرة $cc$ وعته الأطفال)',
      'متلازمة داون (Down Syndrome): زيادة كروموسوم جسدي رقم 21 ($45 + XX$ أو $45 + XY$) وتتميز بملامح وجه مغولية وقصر القامة وتأخر النمو',
      'الممالك الخمس (وايتكر): 1) مملكة البدائيات (Monera: بكتيريا أولية حقيقية غير حقيقية النواة)، 2) الطلائعيات (Protista: أميبا وبراميسيوم ويوجلينا)، 3) الفطريات (Fungi: عفن الخبز وفطر عيش الغراب)، 4) النباتات (Plantae)، 5) الحيوانات (Animalia)'
    ],
    keyConceptsEn: [
      'Human ABO blood groups exhibit multiple alleles, codominance (AB), and complete dominance over allele O',
      'Lethal genes: dominant lethal (yellow coat mice YY) vs recessive lethal (albino corn seedlings cc)',
      'Down Syndrome: autosomal trisomy 21 (47 chromosomes total: 45+XX or 45+XY)',
      'Whittaker\'s 5 Kingdoms: Monera (prokaryotic bacteria), Protista (single-celled eukaryotes), Fungi, Plantae, Animalia'
    ],

    summaryAr: 'تختتم المحاضرة الخامسة منهج أحياء أولى ثانوي بالوراثة والتصنيف: أنماط الوراثة اللا مندلية، الحالات الكروموسومية الشاذة في الإنسان (كلينفلتر، تيرنر، داون)، وتصنيف الكائنات الحية ونظام الممالك الخمس.',
    summaryEn: 'Concludes Grade 10 biology with non-Mendelian genetics, human sex-linked aneuploidies (Klinefelter, Turner, Down), and Linnaean taxonomy/Whittaker\'s 5 Kingdoms.',

    sections: [
      {
        titleAr: '1. الوراثة اللا مندلية والحالات الكروموسومية الشاذة',
        titleEn: '1. Non-Mendelian Genetics & Chromosomal Syndromes',
        contentAr: '1) أنماط الوراثة اللا مندلية:\n- انعدام السيادة: لا يسود جين على الآخر، مثل فصيلة الدم $AB$ وتزاوج نبات شب الليل أحمر الأزهار ($RR$) مع أبيض ($WW$) ينتج قرنفلي ($RW$) بنسبة $1 : 2 : 1$.\n- الجينات المتكاملة: تشترك جينات سائدة متعددة لإظهار الصفة، مثل لون أزهار بسلة الزهور (نسبة $9$ سائد ملون : $7$ متنحي أبيض).\n- الجينات المميتة: تؤدي لموت 25% من النسل (ربع النسل النقي السائد أو المتنحي).\n\n2) الحالات الكروموسومية الشاذة في الإنسان:\n- حالة كلينفلتر ($44 + XXY = 47$ كروموسوم): ذكر عقيم طويل القامة لزيادة كروموسوم X أنثوي.\n- حالة تيرنر ($44 + X0 = 45$ كروموسوم): أنثى لا تصل للبلوغ وتعاني من قصر القامة وعيوب خلقية في القلب والكلى.\n- متلازمة داون ($45 + XX$ أو $45 + XY = 47$ كروموسوم): زيادة كروموسوم جسدي رقم 21.',
        contentEn: 'Non-Mendelian genetics (codominance, complementary, lethal alleles) and human chromosomal aneuploidies (Klinefelter XXY, Turner X0, Down trisomy 21).'
      },
      {
        titleAr: '2. أسس التصنيف الحديث والممالك الخمس',
        titleEn: '2. Modern Taxonomy & The Five Kingdoms',
        contentAr: '1) التسمية الثنائية ومستويات التصنيف:\n- التسمية اللاتينية: الجنس (Genus) ثم النوع (species).\n- هرم التصنيف: مملكة ⟹ شعبة ⟹ طائفة ⟹ رتبة ⟹ فصيلة ⟹ جنس ⟹ نوع.\n\n2) الممالك الخمس (نظام وايتكر Robert Whittaker):\n- 1) مملكة البدائيات (Monera): كائنات وحيدة الخلية غير حقيقية النواة تفتقر للغشاء النووي (البكتيريا).\n- 2) مملكة الطلائعيات (Protista): كائنات حقيقية النواة بسيطة كالأميبا والبراميسيوم والدياتومات.\n- 3) مملكة الفطريات (Fungi): كائنات غير ذاتية التغذية جدرها تحتوي على الكيتين (عفن الخبز وعيش الغراب).\n- 4) مملكة النبات (Plantae): كائنات ذاتية التغذية تقوم بالبناء الضوئي.\n- 5) مملكة الحيوان (Animalia): كائنات عديدة الخلايا غير ذاتية التغذية ومتحركة.',
        contentEn: 'Binomial nomenclature and hierarchical taxonomy: Kingdom, Phylum, Class, Order, Family, Genus, Species across the 5 kingdoms.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h10-bio5-1',
        questionAr: 'تزوج رجل فصيلة دمه $A$ هجين من امرأة فصيلة دمها $B$ هجين. وضح على أسس وراثية فصائل الدم المحتملة للأبناء والنسب المئوية لكل فصيلة؟',
        questionEn: 'A heterozygous Type A male marries a heterozygous Type B female. Using genetics, determine all possible blood types of their offspring and their expected percentages?',
        solutionStepsAr: [
          'الخطوة 1: التركيب الجيني للأبوين: الأب فصيلة A هجين = Iᴬ i ، الأم فصيلة B هجين = Iᴮ i.',
          'الخطوة 2: أمشاج الأب: (Iᴬ) و (i) ، أمشاج الأم: (Iᴮ) و (i).',
          'الخطوة 3: التزاوج وتوليد الأبناء: 1) Iᴬ Iᴮ (فصيلة AB) ، 2) Iᴬ i (فصيلة A) ، 3) Iᴮ i (فصيلة B) ، 4) i i (فصيلة O).',
          'الخطوة 4: النسب المئوية: تنتج جميع الفصائل الأربع بنسب متساوية: 25% فصيلة AB ، 25% فصيلة A ، 25% فصيلة B ، 25% فصيلة O.'
        ],
        solutionStepsEn: [
          'Step 1: Parental genotypes: Father (Iᴬi), Mother (Iᴮi).',
          'Step 2: Gametes: Father (Iᴬ, i), Mother (Iᴮ, i).',
          'Step 3: Offspring: IᴬIᴮ (Type AB), Iᴬi (Type A), Iᴮi (Type B), ii (Type O).',
          'Step 4: Expected outcome: 25% AB, 25% A, 25% B, 25% O.'
        ],
        answerAr: 'تظهر جميع فصائل الدم الأربع بين الأبناء بنسب متساوية (25% AB ، 25% A ، 25% B ، 25% O).',
        answerEn: 'All four human blood groups appear with equal 25% probability: AB, A, B, and O.'
      }
    ],

    assessment: {
      id: 'quiz-h10-bio-5',
      lectureId: 'h10-bio-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: الوراثة والكروموسومات والتصنيف (1 ثانوي)',
      titleEn: 'Mastery Quiz 5: Genetics, Aneuploidy & Taxonomy (Grade 10)',
      passingScore: 80,
      questions: [
        {
          id: 'qh10-b5-1',
          textAr: 'التركيب الكروموسومي لحالة ذكر كلينفلتر (Klinefelter Syndrome) في الإنسان هو:',
          textEn: 'The chromosomal karyotype formula for Klinefelter syndrome in humans is:',
          optionsAr: ['44 + XXY (المجموع 47 كروموسوم)', '44 + X0 (المجموع 45 كروموسوم)', '45 + XY', '44 + XY'],
          optionsEn: ['44 + XXY (Total 47 chromosomes)', '44 + X0 (Total 45 chromosomes)', '45 + XY', '44 + XY'],
          correctIndex: 0,
          conceptTestedAr: 'التركيب الصبغي لذكر كلينفلتر',
          conceptTestedEn: 'Klinefelter syndrome 44+XXY karyotype',
          explanationAr: 'حالة كلينفلتر تنتج عن زيادة كروموسوم جنسي أنثوي X فيكون التركيب $44 + XXY$ ويصبح ذكراً عقيماً.',
          explanationEn: 'Klinefelter syndrome is characterized by an extra X sex chromosome (44+XXY = 47 total).',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b5-2',
          textAr: 'في نبات شب الليل، عند تهجين نبات أحمر الأزهار ($RR$) مع نبات أبيض الأزهار ($WW$)، فإن جميع أفراد الجيل الأول تظهر بأزهار قرنفلية ($RW$) بنسبة 100%، وتسمى هذه الحالة الوراثية بـ:',
          textEn: 'In four-o\'clock plants, crossing red (RR) with white (WW) yields 100% pink (RW) F1 offspring due to:',
          optionsAr: ['انعدام السيادة (Lack of Dominance)', 'السيادة التامة المندلية', 'الجينات المميتة', 'الصفات المرتبطة بالجنس'],
          optionsEn: ['Lack of Dominance / Incomplete Dominance', 'Mendelian Complete Dominance', 'Lethal Genes', 'Sex-linked Inheritance'],
          correctIndex: 0,
          conceptTestedAr: 'حالة انعدام السيادة في وراثة الأزهار',
          conceptTestedEn: 'Incomplete dominance / codominance',
          explanationAr: 'في انعدام السيادة لا يسود أي جين على الآخر بل يشتركان معاً في إعطاء صفة وسطية جديدة (القرنفلي).',
          explanationEn: 'Incomplete dominance results in intermediate blended phenotypes where neither allele dominates.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b5-3',
          textAr: 'تتميز كائنات مملكة البدائيات (Kingdom Monera) مثل البكتيريا بأنها:',
          textEn: 'Organisms belonging to Kingdom Monera (such as bacteria) are fundamentally characterized as:',
          optionsAr: [
            'غير حقيقية النواة وتفتقر للمادة الوراثية المحاطة بغشاء نووي',
            'عديدة الخلايا وذات أنسجة متخصصة',
            'حقيقية النواة تحتوي على ميتوكوندريا وأعراف',
            'فطريات تحتوي على مادة الكيتين'
          ],
          optionsEn: [
            'Prokaryotic lacking a true membrane-bound nucleus',
            'Multicellular with complex organ systems',
            'Eukaryotic containing distinct mitochondria',
            'Fungal with chitin cell walls'
          ],
          correctIndex: 0,
          conceptTestedAr: 'خصائص مملكة البدائيات والبكتيريا',
          conceptTestedEn: 'Prokaryotic characteristics of Kingdom Monera',
          explanationAr: 'البدائيات كائنات بدائية النواة (Prokaryotes) تسبح مادتها الوراثية مباشرة في السيتوبلازم دون غشاء نووي.',
          explanationEn: 'Monerans are prokaryotes lacking nuclear membranes and membrane-bound organelles.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b5-4',
          textAr: 'حالة متلازمة داون (Down Syndrome) تنشأ عن شذوذ في عدد الكروموسومات في الإنسان يتمثل في:',
          textEn: 'Down syndrome is caused by a chromosomal abnormality specifically involving:',
          optionsAr: [
            'وجود كروموسوم جسدي زائد في الزوج رقم 21 (Trisomy 21)',
            'غياب أحد الكروموسومات الجنسية تماماً',
            'وجود كروموسوم Y إضافي',
            'موت جميع خلايا الدم الحمراء'
          ],
          optionsEn: [
            'An extra autosomal chromosome in pair 21 (Trisomy 21)',
            'Complete absence of a sex chromosome',
            'An extra duplicate Y chromosome',
            'Total destruction of red blood cells'
          ],
          correctIndex: 0,
          conceptTestedAr: 'السبب الصبغي لمتلازمة داون',
          conceptTestedEn: 'Trisomy 21 in Down syndrome',
          explanationAr: 'متلازمة داون تنتج عن زيادة نسخة ثالثة من الكروموسوم الجسدي رقم 21 فيكون عدد الكروموسومات الكلي 47 ($45 + XX$ أو $45 + XY$).',
          explanationEn: 'Down syndrome results from nondisjunction yielding autosomal trisomy of chromosome 21.',
          difficulty: 'easy'
        },
        {
          id: 'qh10-b5-5',
          textAr: 'في نظام التسمية الثنائية (Binomial Nomenclature) الذي وضعه لينيوس، الاسم العلمي $Homo\\ sapiens$ للإنسان يمثل فيه $Homo$ اسم:',
          textEn: 'In Linnaean binomial nomenclature, in the human scientific name Homo sapiens, Homo denotes the:',
          optionsAr: ['الجنس (Genus)', 'النوع (Species)', 'المملكة (Kingdom)', 'الفصيلة (Family)'],
          optionsEn: ['Genus', 'Species', 'Kingdom', 'Family'],
          correctIndex: 0,
          conceptTestedAr: 'نظام التسمية الثنائية واسم الجنس والنوع',
          conceptTestedEn: 'Linnaean Genus-species binomial naming',
          explanationAr: 'الكلمة الأولى في التسمية الثنائية تبدأ بحرف كبير وتمثل اسم الجنس (Genus)، بينما الكلمة الثانية تمثل اسم النوع (species).',
          explanationEn: 'The first term in binomial nomenclature represents the Genus, followed by the species descriptor.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
