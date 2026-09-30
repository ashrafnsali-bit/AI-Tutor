import type { Lecture } from '../types';

// ============================================================
// CHEMISTRY CURRICULUM — منهج الكيمياء (ثانوي)
// ============================================================
export const CHEMISTRY_LECTURES: Lecture[] = [
  {
    id: 'chem-1', order: 1, isLocked: false, isCompleted: false, passingScoreRequired: 80,
    titleAr: 'الدرس 1: المادة وخواصها — الحالات الثلاث',
    titleEn: 'Lesson 1: Matter & Properties — The Three States',
    subtitleAr: 'افهم تركيب المادة وخواصها الفيزيائية والكيميائية وحالاتها الثلاث',
    subtitleEn: 'Understand matter composition, physical/chemical properties, and the three states',
    durationMinutes: 30,
    gradeLevelNameAr: 'الصف الأول الثانوي', gradeLevelNameEn: 'Grade 10 - High School',
    termAr: 'الفصل الدراسي الأول', termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: المادة وبنيتها', unitTitleEn: 'Unit 1: Matter & Structure',
    lessonNumberAr: 'الدرس 1', lessonNumberEn: 'Lesson 1',
    warmupHookAr: 'لماذا يتحول الثلج إلى ماء ثم إلى بخار؟ وهل يتغير تركيبه الكيميائي في كل مرة؟',
    warmupHookEn: 'Why does ice melt into water and then evaporate? Does its chemical composition change each time?',
    learningOutcomesAr: ['تعريف المادة وتصنيفها', 'التمييز بين الخواص الفيزيائية والكيميائية', 'وصف الحالات الثلاث للمادة وشروط التحول بينها'],
    learningOutcomesEn: ['Define and classify matter', 'Distinguish physical from chemical properties', 'Describe the three states and transition conditions'],
    vocabulary: [
      { termAr: 'المادة', termEn: 'Matter', definitionAr: 'كل شيء له كتلة ويشغل حيزاً من الفراغ', definitionEn: 'Anything that has mass and occupies space' },
      { termAr: 'الخاصية الفيزيائية', termEn: 'Physical Property', definitionAr: 'صفة تُقاس دون تغيير التركيب الكيميائي للمادة', definitionEn: 'A property measured without changing chemical composition' },
      { termAr: 'الخاصية الكيميائية', termEn: 'Chemical Property', definitionAr: 'صفة تصف قدرة المادة على التحول إلى مادة مختلفة', definitionEn: 'A property describing ability to transform into a different substance' }
    ],
    keyConceptsAr: ['تصنيف المادة (عنصر/مركب/خليط)', 'الخواص الفيزيائية', 'الخواص الكيميائية', 'الحالات الثلاث'],
    keyConceptsEn: ['Matter Classification', 'Physical Properties', 'Chemical Properties', 'Three States of Matter'],
    summaryAr: 'المادة كل شيء له كتلة ويشغل حيزاً. تتميز بخواص فيزيائية (كثافة، نقطة انصهار) وكيميائية (قابلية الاحتراق). توجد في ثلاث حالات: صلبة وسائلة وغازية، والتحول بينها يعتمد على الحرارة.',
    summaryEn: 'Matter is anything with mass and volume, characterized by physical (density, melting point) and chemical properties (flammability), existing in three states governed by thermal energy.',
    sections: [
      {
        titleAr: '1. تصنيف المادة: عنصر، مركب، خليط',
        titleEn: '1. Classifying Matter: Element, Compound, Mixture',
        contentAr: 'المادة النقية: إما عنصر (مادة لا تنقسم بالطرق الكيميائية مثل الحديد والأكسجين) أو مركب (مادة تتكون من عنصرين أو أكثر مرتبطين كيميائياً مثل الماء H₂O). الخليط: مزيج من مادتين أو أكثر غير مترابطتين كيميائياً ويمكن فصلهما بطرق فيزيائية.',
        contentEn: 'Pure matter: either element (cannot be broken down chemically, e.g. iron, oxygen) or compound (two+ elements chemically bonded, e.g. H₂O). Mixture: two+ substances not chemically bonded, separable by physical means.',
        interactiveExample: {
          titleAr: 'مثال: تصنيف مواد من حياتنا',
          titleEn: 'Example: Classifying Everyday Materials',
          steps: [
            { stepNumber: 1, textAr: 'الذهب (Au) → عنصر نقي، لا يمكن تفكيكه', textEn: 'Gold (Au) → Pure element, cannot be broken down' },
            { stepNumber: 2, textAr: 'الملح (NaCl) → مركب من صوديوم + كلور', textEn: 'Salt (NaCl) → Compound of sodium + chlorine' },
            { stepNumber: 3, textAr: 'الهواء → خليط من N₂ + O₂ + CO₂ وغيرها', textEn: 'Air → Mixture of N₂ + O₂ + CO₂ + others' }
          ],
          takeawayAr: 'العنصر أبسط مادة نقية، المركب أكثر تعقيداً، والخليط ليس متحداً كيميائياً',
          takeawayEn: 'Element = simplest pure matter; Compound = chemically complex; Mixture = not chemically bonded'
        },
        tipsAr: ['الخليط المتجانس (محلول) يبدو موحداً، وغير المتجانس يرى فيه أكثر من مادة'],
        tipsEn: ['Homogeneous mixture (solution) looks uniform; heterogeneous mixture has visible components'],
        formativeCheck: {
          id: 'fc-chem1-1',
          questionAr: 'ما تصنيف ثاني أكسيد الكربون (CO₂)؟',
          questionEn: 'How is carbon dioxide (CO₂) classified?',
          optionsAr: ['عنصر', 'مركب', 'خليط متجانس', 'خليط غير متجانس'],
          optionsEn: ['Element', 'Compound', 'Homogeneous mixture', 'Heterogeneous mixture'],
          correctIndex: 1,
          explanationAr: 'CO₂ مركب لأنه يتكون من ذرات كربون وأكسجين مرتبطة برابطة كيميائية',
          explanationEn: 'CO₂ is a compound formed from carbon and oxygen atoms chemically bonded',
          hintAr: 'هل يمكن فصل مكوناته بطرق فيزيائية؟',
          hintEn: 'Can its components be separated by physical means?'
        }
      }
    ],
    conceptMapAr: ['المادة → عنصر / مركب / خليط', 'الخواص → فيزيائية (كثافة، انصهار) / كيميائية (احتراق، تأكسد)', 'الحالات → صلبة / سائلة / غازية ← تغيير الحرارة'],
    conceptMapEn: ['Matter → Element / Compound / Mixture', 'Properties → Physical (density, melting) / Chemical (combustion, oxidation)', 'States → Solid / Liquid / Gas ← thermal energy'],
    textbookExercises: [
      {
        id: 'ex-chem1-1',
        questionAr: 'صنّف المواد التالية: الماء، الهواء، الألمنيوم، محلول السكر في الماء',
        questionEn: 'Classify: Water, Air, Aluminium, Sugar solution in water',
        solutionStepsAr: ['الماء (H₂O): مركب', 'الهواء: خليط متجانس', 'الألمنيوم (Al): عنصر', 'محلول السكر: خليط متجانس (محلول)'],
        solutionStepsEn: ['Water (H₂O): Compound', 'Air: Homogeneous mixture', 'Aluminium (Al): Element', 'Sugar solution: Homogeneous mixture'],
        answerAr: 'مركب، خليط متجانس، عنصر، خليط متجانس',
        answerEn: 'Compound, Homogeneous mixture, Element, Homogeneous mixture'
      }
    ],
    assessment: {
      id: 'quiz-chem-1', lectureId: 'chem-1', titleAr: 'تقييم الدرس 1: المادة وخواصها', titleEn: 'Lesson 1 Assessment: Matter', passingScore: 80,
      questions: [
        { id: 'qc1-1', textAr: 'أي من التالي مركب كيميائي؟', textEn: 'Which of the following is a chemical compound?', optionsAr: ['الحديد', 'الهواء', 'الماء', 'التراب'], optionsEn: ['Iron', 'Air', 'Water', 'Soil'], correctIndex: 2, conceptTestedAr: 'تصنيف المادة', conceptTestedEn: 'Matter Classification', explanationAr: 'الماء (H₂O) مركب كيميائي من هيدروجين وأكسجين', explanationEn: 'Water (H₂O) is a chemical compound of hydrogen and oxygen', difficulty: 'easy' as const },
        { id: 'qc1-2', textAr: 'الصدأ مثال على خاصية:', textEn: 'Rust is an example of a:', optionsAr: ['خاصية فيزيائية', 'خاصية كيميائية', 'تغيير فيزيائي', 'خليط'], optionsEn: ['Physical property', 'Chemical property', 'Physical change', 'Mixture'], correctIndex: 1, conceptTestedAr: 'الخواص الكيميائية', conceptTestedEn: 'Chemical Properties', explanationAr: 'الصدأ تفاعل كيميائي بين الحديد والأكسجين يغير تركيب المادة', explanationEn: 'Rust is a chemical reaction between iron and oxygen that changes composition', difficulty: 'medium' as const },
        { id: 'qc1-3', textAr: 'يمكن فصل الخليط غير المتجانس بـ:', textEn: 'A heterogeneous mixture can be separated by:', optionsAr: ['التقطير', 'الترشيح', 'التحليل الكهربائي', 'الاحتراق'], optionsEn: ['Distillation', 'Filtration', 'Electrolysis', 'Combustion'], correctIndex: 1, conceptTestedAr: 'فصل الخلائط', conceptTestedEn: 'Separating Mixtures', explanationAr: 'الترشيح يفصل المواد الصلبة عن السائلة في الخلائط غير المتجانسة', explanationEn: 'Filtration separates solids from liquids in heterogeneous mixtures', difficulty: 'medium' as const }
      ]
    }
  },
  {
    id: 'chem-2', order: 2, isLocked: true, isCompleted: false, passingScoreRequired: 80,
    titleAr: 'الدرس 2: بنية الذرة — النموذج الذري', titleEn: 'Lesson 2: Atomic Structure — The Atomic Model',
    subtitleAr: 'تعرّف على مكونات الذرة وكيف طورت النماذج الذرية عبر التاريخ', subtitleEn: 'Explore atomic components and historical model evolution',
    durationMinutes: 35, gradeLevelNameAr: 'الصف الأول الثانوي', gradeLevelNameEn: 'Grade 10',
    termAr: 'الفصل الأول', termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: المادة وبنيتها', unitTitleEn: 'Unit 1: Matter & Structure',
    lessonNumberAr: 'الدرس 2', lessonNumberEn: 'Lesson 2',
    warmupHookAr: 'إذا قسّمت شريحة من الذهب إلى نصف ثم إلى نصف مراراً — ما أصغر جزء تحصل عليه؟',
    warmupHookEn: 'If you keep cutting a gold chip in half — what is the smallest possible piece?',
    learningOutcomesAr: ['وصف مكونات الذرة (بروتون، نيوترون، إلكترون)', 'معرفة العدد الذري وعدد الكتلة', 'استخدام الجدول الدوري لقراءة بيانات العناصر'],
    learningOutcomesEn: ['Describe atomic components', 'Know atomic number and mass number', 'Use the periodic table to read element data'],
    vocabulary: [
      { termAr: 'العدد الذري (Z)', termEn: 'Atomic Number (Z)', definitionAr: 'عدد البروتونات في نواة الذرة', definitionEn: 'Number of protons in the nucleus' },
      { termAr: 'عدد الكتلة (A)', termEn: 'Mass Number (A)', definitionAr: 'مجموع البروتونات والنيوترونات في النواة', definitionEn: 'Sum of protons and neutrons in the nucleus' },
      { termAr: 'النظائر', termEn: 'Isotopes', definitionAr: 'ذرات نفس العنصر ذات أعداد نيوترون مختلفة', definitionEn: 'Atoms of same element with different neutron counts' }
    ],
    keyConceptsAr: ['مكونات الذرة', 'العدد الذري وعدد الكتلة', 'النظائر', 'توزيع الإلكترونات'],
    keyConceptsEn: ['Atomic components', 'Atomic & Mass Number', 'Isotopes', 'Electron configuration'],
    summaryAr: 'الذرة تتكون من نواة (بروتونات وتيوترونات) ومحاط بها إلكترونات. العدد الذري يحدد هوية العنصر، وعدد الكتلة = بروتونات + نيوترونات.',
    summaryEn: 'Atoms consist of a nucleus (protons + neutrons) surrounded by electrons. Atomic number defines identity; mass number = protons + neutrons.',
    sections: [
      {
        titleAr: '1. مكونات الذرة', titleEn: '1. Atomic Components',
        contentAr: 'الذرة تتكون من: النواة (بروتونات موجبة الشحنة + نيوترونات عديمة الشحنة) والإلكترونات سالبة الشحنة التي تدور حول النواة في مستويات طاقة. الذرة المتعادلة: عدد البروتونات = عدد الإلكترونات.',
        contentEn: 'Atom components: nucleus (positive protons + neutral neutrons) + negative electrons orbiting in energy levels. Neutral atom: proton count = electron count.',
        interactiveExample: {
          titleAr: 'مثال: ذرة الكربون (C)', titleEn: 'Example: Carbon atom (C)',
          equation: 'Z=6, A=12',
          steps: [
            { stepNumber: 1, textAr: 'العدد الذري Z=6 → 6 بروتونات في النواة', textEn: 'Atomic number Z=6 → 6 protons in nucleus' },
            { stepNumber: 2, textAr: 'عدد الكتلة A=12 → النيوترونات = 12-6 = 6', textEn: 'Mass number A=12 → Neutrons = 12-6 = 6' },
            { stepNumber: 3, textAr: 'ذرة متعادلة → 6 إلكترونات تدور حول النواة', textEn: 'Neutral atom → 6 electrons orbiting the nucleus' }
          ],
          takeawayAr: 'دائماً: نيوترونات = عدد الكتلة − العدد الذري',
          takeawayEn: 'Always: Neutrons = Mass Number − Atomic Number'
        },
        tipsAr: ['البروتون والنيوترون لهما نفس الكتلة تقريباً، الإلكترون أخف بكثير'],
        tipsEn: ['Proton and neutron have nearly equal mass; electron is much lighter'],
        formativeCheck: {
          id: 'fc-chem2-1',
          questionAr: 'ذرة الأكسجين Z=8, A=16. كم عدد نيوتروناتها؟',
          questionEn: 'Oxygen atom Z=8, A=16. How many neutrons?',
          optionsAr: ['6', '8', '16', '24'],
          optionsEn: ['6', '8', '16', '24'],
          correctIndex: 1,
          explanationAr: 'النيوترونات = A - Z = 16 - 8 = 8',
          explanationEn: 'Neutrons = A - Z = 16 - 8 = 8',
          hintAr: 'استخدم معادلة: نيوترونات = عدد الكتلة - العدد الذري',
          hintEn: 'Use: Neutrons = Mass number - Atomic number'
        }
      }
    ],
    conceptMapAr: ['الذرة → نواة (بروتون + نيوترون) + إلكترونات', 'العدد الذري Z → هوية العنصر', 'عدد الكتلة A = Z + N'],
    conceptMapEn: ['Atom → Nucleus (proton+neutron) + Electrons', 'Atomic number Z → element identity', 'Mass number A = Z + N'],
    textbookExercises: [
      { id: 'ex-chem2-1', questionAr: 'احسب عدد البروتونات والنيوترونات والإلكترونات لذرة الصوديوم Na (Z=11, A=23)', questionEn: 'Calculate protons, neutrons, electrons for Sodium Na (Z=11, A=23)', solutionStepsAr: ['البروتونات = Z = 11', 'النيوترونات = A - Z = 23 - 11 = 12', 'الإلكترونات = Z = 11 (ذرة متعادلة)'], solutionStepsEn: ['Protons = Z = 11', 'Neutrons = A - Z = 23 - 11 = 12', 'Electrons = Z = 11 (neutral)'], answerAr: '11 بروتون، 12 نيوترون، 11 إلكترون', answerEn: '11 protons, 12 neutrons, 11 electrons' }
    ],
    assessment: {
      id: 'quiz-chem-2', lectureId: 'chem-2', titleAr: 'تقييم الدرس 2: بنية الذرة', titleEn: 'Lesson 2 Assessment: Atomic Structure', passingScore: 80,
      questions: [
        { id: 'qc2-1', textAr: 'ما الذي يحدد هوية العنصر؟', textEn: 'What determines an element\'s identity?', optionsAr: ['عدد النيوترونات', 'عدد الكتلة', 'العدد الذري', 'كتلة الإلكترونات'], optionsEn: ['Neutron count', 'Mass number', 'Atomic number', 'Electron mass'], correctIndex: 2, conceptTestedAr: 'العدد الذري', conceptTestedEn: 'Atomic Number', explanationAr: 'العدد الذري هو عدد البروتونات ويحدد هوية العنصر بشكل فريد', explanationEn: 'Atomic number (proton count) uniquely identifies each element', difficulty: 'easy' as const },
        { id: 'qc2-2', textAr: 'النظائر هي ذرات لها نفس:', textEn: 'Isotopes are atoms with the same:', optionsAr: ['عدد الكتلة', 'عدد النيوترونات', 'العدد الذري', 'عدد الإلكترونات فقط'], optionsEn: ['Mass number', 'Neutron count', 'Atomic number', 'Only electrons'], correctIndex: 2, conceptTestedAr: 'النظائر', conceptTestedEn: 'Isotopes', explanationAr: 'النظائر لها نفس العدد الذري ولكن أعداد كتلة مختلفة بسبب اختلاف النيوترونات', explanationEn: 'Isotopes share the same atomic number but differ in neutron count', difficulty: 'medium' as const },
        { id: 'qc2-3', textAr: 'ذرة الكلور (Z=17, A=35). عدد النيوترونات:', textEn: 'Chlorine (Z=17, A=35). Neutron count:', optionsAr: ['17', '18', '35', '52'], optionsEn: ['17', '18', '35', '52'], correctIndex: 1, conceptTestedAr: 'حساب النيوترونات', conceptTestedEn: 'Calculating Neutrons', explanationAr: 'نيوترونات = 35 - 17 = 18', explanationEn: 'Neutrons = 35 - 17 = 18', difficulty: 'medium' as const }
      ]
    }
  }
];

// ============================================================
// BIOLOGY CURRICULUM — منهج الأحياء (ثانوي)
// ============================================================
export const BIOLOGY_LECTURES: Lecture[] = [
  {
    id: 'bio-1', order: 1, isLocked: false, isCompleted: false, passingScoreRequired: 80,
    titleAr: 'الدرس 1: الخلية — وحدة الحياة الأساسية', titleEn: 'Lesson 1: The Cell — Basic Unit of Life',
    subtitleAr: 'اكتشف بنية الخلية الحيوانية والنباتية ومكوناتها', subtitleEn: 'Discover animal and plant cell structures and components',
    durationMinutes: 35, gradeLevelNameAr: 'الصف الأول الثانوي', gradeLevelNameEn: 'Grade 10',
    termAr: 'الفصل الأول', termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: الخلية الحية', unitTitleEn: 'Unit 1: The Living Cell',
    lessonNumberAr: 'الدرس 1', lessonNumberEn: 'Lesson 1',
    warmupHookAr: 'كيف يُنتج جسمك مليارات الخلايا يومياً؟ ولماذا بعضها يعيش يوماً واحداً وبعضها يعيش سنوات؟',
    warmupHookEn: 'How does your body produce billions of cells daily? Why do some live one day while others live years?',
    learningOutcomesAr: ['تعريف الخلية وأنواعها', 'مقارنة الخلية الحيوانية والنباتية', 'وصف وظائف عضيّات الخلية الرئيسية'],
    learningOutcomesEn: ['Define cells and their types', 'Compare animal and plant cells', 'Describe functions of major organelles'],
    vocabulary: [
      { termAr: 'الخلية', termEn: 'Cell', definitionAr: 'أصغر وحدة بنائية ووظيفية في الكائن الحي', definitionEn: 'Smallest structural and functional unit of life' },
      { termAr: 'النواة', termEn: 'Nucleus', definitionAr: 'مركز التحكم في الخلية، يحتوي على الحمض النووي DNA', definitionEn: 'Cell control center containing DNA' },
      { termAr: 'الميتوكوندريا', termEn: 'Mitochondria', definitionAr: 'عضيّة تنتج الطاقة (ATP) لعمليات الخلية', definitionEn: 'Organelle that produces energy (ATP) for cell processes' }
    ],
    keyConceptsAr: ['أنواع الخلايا (بدائية النواة / حقيقية النواة)', 'أجزاء الخلية ووظائفها', 'الفرق بين الحيوانية والنباتية', 'النظرية الخلوية'],
    keyConceptsEn: ['Cell types (prokaryote/eukaryote)', 'Cell parts and functions', 'Animal vs Plant cell', 'Cell theory'],
    summaryAr: 'الخلية أساس الحياة. تتكون من غشاء خلوي ينظم دخول وخروج المواد، ونواة تحمل المعلومات الوراثية، وعضيّات تؤدي وظائف متخصصة.',
    summaryEn: 'The cell is life\'s fundamental unit with a membrane, nucleus housing DNA, and specialized organelles performing critical functions.',
    sections: [
      {
        titleAr: '1. مقارنة الخلية الحيوانية والنباتية', titleEn: '1. Animal vs. Plant Cell Comparison',
        contentAr: 'الخلية الحيوانية: تحتوي مريكزات للانقسام ولا يوجد جدار خلوي. الخلية النباتية: تحتوي جداراً خلويا من السيلولوز، وبلاستيدات خضراء للبناء الضوئي، وفجوة عصارية كبيرة.',
        contentEn: 'Animal cell: has centrioles, no cell wall. Plant cell: cellulose cell wall, chloroplasts for photosynthesis, large central vacuole.',
        interactiveExample: {
          titleAr: 'مقارنة سريعة: أبرز الفروقات', titleEn: 'Quick Comparison: Key Differences',
          steps: [
            { stepNumber: 1, textAr: 'جدار الخلية: موجود في النباتية ❌ غائب في الحيوانية', textEn: 'Cell wall: present in plant ❌ absent in animal' },
            { stepNumber: 2, textAr: 'البلاستيدات الخضراء: موجودة في النباتية ❌ غائبة في الحيوانية', textEn: 'Chloroplasts: present in plant ❌ absent in animal' },
            { stepNumber: 3, textAr: 'الفجوة: كبيرة في النباتية، صغيرة في الحيوانية', textEn: 'Vacuole: large in plant, small in animal' },
            { stepNumber: 4, textAr: 'المريكزات: موجودة في الحيوانية ❌ غائبة في النباتية', textEn: 'Centrioles: present in animal ❌ absent in plant' }
          ],
          takeawayAr: 'النباتية + جدار خلوي + بلاستيدة + فجوة كبيرة // الحيوانية + مريكزات',
          takeawayEn: 'Plant = wall + chloroplast + large vacuole // Animal = centrioles'
        },
        tipsAr: ['البلاستيدة الخضراء = مصنع السكر بالبناء الضوئي في النبات'],
        tipsEn: ['Chloroplast = sugar factory via photosynthesis in plants'],
        formativeCheck: {
          id: 'fc-bio1-1', questionAr: 'أيّ العضيّات غائبة في الخلية الحيوانية؟', questionEn: 'Which organelle is absent in animal cells?',
          optionsAr: ['الميتوكوندريا', 'البلاستيدة الخضراء', 'الشبكة الإندوبلازمية', 'الريبوسوم'],
          optionsEn: ['Mitochondria', 'Chloroplast', 'Endoplasmic reticulum', 'Ribosome'],
          correctIndex: 1, explanationAr: 'البلاستيدات الخضراء موجودة فقط في الخلايا النباتية', explanationEn: 'Chloroplasts exist only in plant cells',
          hintAr: 'ما العضية المسؤولة عن البناء الضوئي؟', hintEn: 'What organelle is responsible for photosynthesis?'
        }
      }
    ],
    conceptMapAr: ['الخلية → نواة (DNA) + عضيّات', 'عضيّات: ميتوكوندريا (طاقة) + ريبوسوم (بروتين) + بلاستيدة (بناء ضوئي)', 'نباتية vs حيوانية: جدار + بلاستيدة'],
    conceptMapEn: ['Cell → Nucleus(DNA) + Organelles', 'Organelles: Mitochondria(energy) + Ribosome(protein) + Chloroplast(photosynthesis)', 'Plant vs Animal: wall + chloroplast'],
    textbookExercises: [
      { id: 'ex-bio1-1', questionAr: 'ما وظيفة الميتوكوندريا؟ ولماذا تكثر في خلايا العضلات؟', questionEn: 'What is mitochondria\'s function? Why are they abundant in muscle cells?', solutionStepsAr: ['الميتوكوندريا تنتج ATP (طاقة) عن طريق التنفس الخلوي', 'خلايا العضلات تحتاج طاقة كبيرة للانقباض', 'لذلك تحتوي على عدد كبير من الميتوكوندريا'], solutionStepsEn: ['Mitochondria produce ATP via cellular respiration', 'Muscle cells need large energy for contraction', 'Therefore contain high numbers of mitochondria'], answerAr: 'الميتوكوندريا تنتج الطاقة؛ العضلات تحتاج طاقة فتكثر فيها', answerEn: 'Mitochondria produce energy; muscles need more energy so contain more' }
    ],
    assessment: {
      id: 'quiz-bio-1', lectureId: 'bio-1', titleAr: 'تقييم الدرس 1: الخلية', titleEn: 'Lesson 1 Assessment: The Cell', passingScore: 80,
      questions: [
        { id: 'qb1-1', textAr: 'وحدة الحياة الأساسية هي:', textEn: 'The basic unit of life is:', optionsAr: ['الخلية', 'الأنسجة', 'الجهاز', 'الكائن الحي'], optionsEn: ['Cell', 'Tissue', 'System', 'Organism'], correctIndex: 0, conceptTestedAr: 'تعريف الخلية', conceptTestedEn: 'Cell definition', explanationAr: 'الخلية هي أصغر وحدة بنائية ووظيفية في الكائنات الحية', explanationEn: 'The cell is the smallest structural and functional unit of life', difficulty: 'easy' as const },
        { id: 'qb1-2', textAr: 'ما وظيفة النواة في الخلية؟', textEn: 'What is the nucleus function?', optionsAr: ['إنتاج الطاقة', 'التحكم في نشاط الخلية', 'بناء البروتينات', 'هضم المواد'], optionsEn: ['Energy production', 'Control cell activities', 'Build proteins', 'Digest materials'], correctIndex: 1, conceptTestedAr: 'وظيفة النواة', conceptTestedEn: 'Nucleus function', explanationAr: 'النواة مركز التحكم في الخلية وتحتوي على الحمض النووي الذي يتحكم في وظائف الخلية', explanationEn: 'The nucleus controls cell activities and contains DNA', difficulty: 'easy' as const },
        { id: 'qb1-3', textAr: 'ما العضية المسؤولة عن البناء الضوئي؟', textEn: 'Which organelle performs photosynthesis?', optionsAr: ['الميتوكوندريا', 'الريبوسوم', 'البلاستيدة الخضراء', 'الجهاز الجولجي'], optionsEn: ['Mitochondria', 'Ribosome', 'Chloroplast', 'Golgi apparatus'], correctIndex: 2, conceptTestedAr: 'البلاستيدة الخضراء', conceptTestedEn: 'Chloroplast', explanationAr: 'البلاستيدة الخضراء تمتص ضوء الشمس وتحوله إلى سكر', explanationEn: 'Chloroplast absorbs sunlight and converts it to sugar', difficulty: 'medium' as const }
      ]
    }
  }
];

// ============================================================
// COMPUTER SCIENCE CURRICULUM — منهج الحاسب وتقنية المعلومات
// ============================================================
export const COMPUTER_SCIENCE_LECTURES: Lecture[] = [
  {
    id: 'cs-1', order: 1, isLocked: false, isCompleted: false, passingScoreRequired: 80,
    titleAr: 'الدرس 1: مقدمة في البرمجة وخوارزميات الحل', titleEn: 'Lesson 1: Introduction to Programming & Algorithms',
    subtitleAr: 'تعلّم مفهوم الخوارزمية وخطوات حل المشكلات والمخطط الانسيابي', subtitleEn: 'Learn algorithms, problem-solving steps, and flowcharts',
    durationMinutes: 30, gradeLevelNameAr: 'الصف الثاني المتوسط', gradeLevelNameEn: 'Grade 8 - Middle School',
    termAr: 'الفصل الأول', termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: أساسيات البرمجة', unitTitleEn: 'Unit 1: Programming Fundamentals',
    lessonNumberAr: 'الدرس 1', lessonNumberEn: 'Lesson 1',
    warmupHookAr: 'كيف يعرف الحاسوب كيفية تشغيل لعبتك المفضلة؟ هل هناك "وصفة" يتبعها؟',
    warmupHookEn: 'How does a computer know how to run your favorite game? Is there a "recipe" it follows?',
    learningOutcomesAr: ['تعريف الخوارزمية وخصائصها', 'كتابة خوارزمية بلغة طبيعية', 'رسم مخطط انسيابي بسيط'],
    learningOutcomesEn: ['Define algorithm and its properties', 'Write algorithms in natural language', 'Draw simple flowcharts'],
    vocabulary: [
      { termAr: 'الخوارزمية', termEn: 'Algorithm', definitionAr: 'مجموعة خطوات محددة ومتسلسلة لحل مشكلة ما', definitionEn: 'A finite set of ordered steps to solve a problem' },
      { termAr: 'المخطط الانسيابي', termEn: 'Flowchart', definitionAr: 'تمثيل بصري للخوارزمية باستخدام أشكال هندسية', definitionEn: 'Visual representation of an algorithm using geometric shapes' },
      { termAr: 'المتغير', termEn: 'Variable', definitionAr: 'مكان في الذاكرة يُخزّن قيمة يمكن أن تتغير', definitionEn: 'A memory location storing a changeable value' }
    ],
    keyConceptsAr: ['الخوارزمية: التسلسل والتحديد والفعالية', 'أشكال المخطط الانسيابي', 'الإدخال والإخراج والقرار', 'التحقق من الخوارزمية بمثال'],
    keyConceptsEn: ['Algorithm: sequence, definiteness, effectiveness', 'Flowchart shapes', 'Input/Output/Decision', 'Algorithm verification'],
    summaryAr: 'الخوارزمية "وصفة" الحاسوب لحل المشكلات. يجب أن تكون محددة ومتسلسلة وتنتهي بنتيجة. المخطط الانسيابي يرسم هذه الخطوات بيانياً.',
    summaryEn: 'Algorithm is the computer\'s "recipe" for solving problems: specific, sequential, finite. Flowcharts visualize these steps graphically.',
    sections: [
      {
        titleAr: '1. خصائص الخوارزمية الجيدة', titleEn: '1. Properties of a Good Algorithm',
        contentAr: 'الخوارزمية الجيدة يجب أن تكون: محددة (كل خطوة واضحة)، متناهية (تنتهي بعدد محدود من الخطوات)، فعّالة (تحل المشكلة بأقل عدد من الخطوات)، وتقبل مدخلات وتنتج مخرجات.',
        contentEn: 'A good algorithm must be: definite (each step is clear), finite (ends in finite steps), effective (minimal steps), accepts inputs and produces outputs.',
        interactiveExample: {
          titleAr: 'مثال: خوارزمية صنع كوب شاي', titleEn: 'Example: Algorithm for Making Tea',
          steps: [
            { stepNumber: 1, textAr: 'ابدأ', textEn: 'Start' },
            { stepNumber: 2, textAr: 'أحضر: ماء، كوب، كيس شاي، سكر', textEn: 'Get: water, cup, tea bag, sugar' },
            { stepNumber: 3, textAr: 'سخّن الماء حتى الغليان', textEn: 'Heat water until boiling' },
            { stepNumber: 4, textAr: 'ضع كيس الشاي في الكوب وأضف الماء الساخن', textEn: 'Place tea bag in cup, add hot water' },
            { stepNumber: 5, textAr: 'انتظر 3 دقائق ثم أضف السكر حسب الرغبة', textEn: 'Wait 3 minutes, add sugar to taste' },
            { stepNumber: 6, textAr: 'انتهى', textEn: 'End' }
          ],
          takeawayAr: 'كل خوارزمية: بداية ← خطوات محددة ← نهاية وهذا ما يفعله البرنامج',
          takeawayEn: 'Every algorithm: Start ← Defined steps ← End — this is what programs do'
        },
        tipsAr: ['لا تكتب خوارزمية تنتهي بحلقة لا نهاية لها — هذا خطأ برمجي شائع'],
        tipsEn: ['Never write an algorithm that loops forever — this is a common programming bug'],
        formativeCheck: {
          id: 'fc-cs1-1', questionAr: 'أيّ الخصائص التالية ليست ضرورية في الخوارزمية؟', questionEn: 'Which property is NOT required in an algorithm?',
          optionsAr: ['التحديد', 'التناهي', 'أن تكون مكتوبة بالعربية', 'الفعالية'],
          optionsEn: ['Definiteness', 'Finiteness', 'Written in Arabic', 'Effectiveness'],
          correctIndex: 2, explanationAr: 'الخوارزمية يمكن كتابتها بأي لغة أو رموز — المهم هو منطقها وليس اللغة', explanationEn: 'Algorithm can be written in any language or symbols — logic matters, not language',
          hintAr: 'هل اللغة المستخدمة تؤثر على صحة الخوارزمية؟', hintEn: 'Does the language used affect algorithm correctness?'
        }
      }
    ],
    conceptMapAr: ['الخوارزمية → محددة + متناهية + فعّالة', 'التمثيل → لغة طبيعية / مخطط انسيابي / كود', 'المخطط → بداية/نهاية (بيضاوي) + عملية (مستطيل) + قرار (معيّن)'],
    conceptMapEn: ['Algorithm → Definite + Finite + Effective', 'Representations → Natural language / Flowchart / Code', 'Flowchart → Start/End(oval) + Process(rect) + Decision(diamond)'],
    textbookExercises: [
      { id: 'ex-cs1-1', questionAr: 'اكتب خوارزمية لإيجاد أكبر عددين من عددين مُدخَلين', questionEn: 'Write an algorithm to find the larger of two input numbers', solutionStepsAr: ['ابدأ', 'اقرأ العددين: أ، ب', 'إذا كان أ > ب فاطبع "أ هو الأكبر"', 'وإلا إذا كان ب > أ فاطبع "ب هو الأكبر"', 'وإلا اطبع "العددان متساويان"', 'انتهى'], solutionStepsEn: ['Start', 'Read two numbers: A, B', 'If A > B then print "A is larger"', 'Else if B > A then print "B is larger"', 'Else print "Numbers are equal"', 'End'], answerAr: 'خوارزمية بها قرار ثلاثي الاتجاه', answerEn: 'Algorithm with a three-way decision' }
    ],
    assessment: {
      id: 'quiz-cs-1', lectureId: 'cs-1', titleAr: 'تقييم الدرس 1: الخوارزميات', titleEn: 'Lesson 1 Assessment: Algorithms', passingScore: 80,
      questions: [
        { id: 'qcs1-1', textAr: 'الخوارزمية هي:', textEn: 'An algorithm is:', optionsAr: ['لغة برمجة', 'خطوات محددة لحل مشكلة', 'جهاز حاسوب', 'ملف بيانات'], optionsEn: ['A programming language', 'Specific steps to solve a problem', 'A computer device', 'A data file'], correctIndex: 1, conceptTestedAr: 'تعريف الخوارزمية', conceptTestedEn: 'Algorithm definition', explanationAr: 'الخوارزمية هي مجموعة خطوات محددة ومتسلسلة لحل مشكلة', explanationEn: 'An algorithm is a set of specific ordered steps to solve a problem', difficulty: 'easy' as const },
        { id: 'qcs1-2', textAr: 'ما الشكل الهندسي الذي يمثل "القرار" في المخطط الانسيابي؟', textEn: 'Which shape represents "Decision" in a flowchart?', optionsAr: ['المستطيل', 'البيضاوي', 'المعيّن (الماسة)', 'السهم'], optionsEn: ['Rectangle', 'Oval', 'Diamond', 'Arrow'], correctIndex: 2, conceptTestedAr: 'أشكال المخطط الانسيابي', conceptTestedEn: 'Flowchart shapes', explanationAr: 'الشكل المعيّن يمثل القرار (نعم/لا) في المخطط الانسيابي', explanationEn: 'The diamond represents a yes/no decision in flowcharts', difficulty: 'easy' as const },
        { id: 'qcs1-3', textAr: 'خوارزمية تستمر بلا توقف هي خوارزمية:', textEn: 'An algorithm that never stops is:', optionsAr: ['فعّالة', 'محددة', 'غير متناهية (خاطئة)', 'مثالية'], optionsEn: ['Effective', 'Definite', 'Non-finite (incorrect)', 'Perfect'], correctIndex: 2, conceptTestedAr: 'التناهي', conceptTestedEn: 'Finiteness', explanationAr: 'الخوارزمية يجب أن تنتهي — الخوارزمية التي لا تنتهي تسمى حلقة لا نهائية وهي خطأ', explanationEn: 'Algorithms must terminate — a never-ending loop is an error called infinite loop', difficulty: 'medium' as const }
      ]
    }
  }
];
