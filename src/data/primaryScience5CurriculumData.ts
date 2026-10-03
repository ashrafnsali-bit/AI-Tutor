import type { Lecture } from '../types';

// PRIMARY SCIENCE — GRADE 5 (علوم الصف الخامس الابتدائي - منهج التعليم 2.0 والمسارات المعتمدة)
// ============================================================================
// Based on official Egyptian Ministry of Education Edu 2.0 & Saudi Ministry of Education G5 standards.
// Covers:
// 1. Interactions in Ecosystems: Food Chains, Webs & Energy Flow (التفاعلات في النظم البيئية)
// 2. Matter & Particles: States of Matter & Molecular Models (المادة وحالاتها وحركة الجسيمات)
// 3. Physical & Chemical Changes, Mixtures & Separation (التغيرات الفيزيائية والكيميائية والمخاليط)
// 4. Earth's Water Resources, Gravity & Planetary Motion (الموارد المائية والجاذبية والأجرام)

export const PRIMARY_SCIENCE_G5_LECTURES: Lecture[] = [
  // ── LECTURE 1: ECOSYSTEM INTERACTIONS & FOOD WEBS ──
  {
    id: 'psci-g5-1',
    order: 1,
    titleAr: 'المحاضرة 1: التفاعلات في النظم البيئية (السلاسل والشبكات الغذائية وانتقال الطاقة)',
    titleEn: 'Lecture 1: Interactions in Ecosystems (Food Chains, Webs & Energy Flow)',
    subtitleAr: 'الكائنات المنتجة والمستهلكة والمحللة، تدفق الطاقة الشمسية في الشبكات الغذائية، وتأثير التغيرات البيئية والتلوث البلاستيكي.',
    subtitleEn: 'Producers, consumers, and decomposers, solar energy flow through food webs, and ecological impact of plastics.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - العلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Science (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المفهوم الأول: العلاقات الغذائية في الأنظمة البيئية',
    unitTitleEn: 'Concept 1: Feeding Relationships in Ecosystems',
    lessonNumberAr: 'الدرس 1: انتقال الطاقة في النظام البيئي',
    lessonNumberEn: 'Lesson 1: Energy Flow in Ecosystems',

    warmupHookAr: 'الشمس تشرق على غابة خضراء، فيمتص النبات ضوءها ليصنع بذوره، ثم يأتي فأر الحقل ليأكل البذور، وفجأة ينقض عليه صقر جائع! من أين جاءت كل هذه الطاقة التي تحرك الصقر؟ إنها رحلة طاقة مذهلة بدأت من ضوء الشمس وسافرت عبر الكائنات الحية!',
    warmupHookEn: 'Sunlight fuels plant growth, a field mouse feeds on the seeds, and a soaring falcon hunts the mouse! Where did the falcon\'s flight energy originate? In an incredible solar energy journey across trophic levels!',

    learningOutcomesAr: [
      'أن يصنف الطالب الكائنات الحية حسب دورها في السلسلة الغذائية: منتجة (نباتات)، مستهلكة (أولية، ثانوية، ثالثية)، ومحللة (بكتيريا وفطريات).',
      'أن يشرح كيفية تدفق الطاقة من كائن إلى آخر بنسبة تقارب 10% فقط، مع فقدان معظم الطاقة كحرارة.',
      'أن يوضح الفرق بين السلسلة الغذائية المفردة والشبكة الغذائية المتشابكة.',
      'أن يستنتج الدور الحيوي للكائنات المحللة في إعادة تدوير العناصر الغذائية إلى التربة للحفاظ على توازن البيئة.'
    ],
    learningOutcomesEn: [
      'Classify organisms by trophic role: producers, consumers (primary, secondary, tertiary), and decomposers.',
      'Explain energy transfer across levels (approx. 10% rule) with remainder lost as metabolic heat.',
      'Differentiate between single linear food chains and complex interconnected food webs.',
      'Deduce the critical role of decomposers in nutrient recycling.'
    ],

    vocabulary: [
      {
        termAr: 'الكائنات المنتجة (Producers)',
        termEn: 'Producers (Autotrophs)',
        definitionAr: 'كائنات حية تصنع غذاءها بنفسها عبر عملية البناء الضوئي باستخدام طاقة الشمس (مثل النباتات والطحالب الخضراء).',
        definitionEn: 'Organisms that manufacture their own food through photosynthesis using solar energy.'
      },
      {
        termAr: 'الكائنات المحللة (Decomposers)',
        termEn: 'Decomposers',
        definitionAr: 'كائنات حية (كالفطريات والبكتيريا وديدان الأرض) تتغذى على بقايا الكائنات الميتة وتعيد العناصر الغذائية للتربة.',
        definitionEn: 'Organisms that break down dead organic matter, recycling vital nutrients back into the soil.'
      },
      {
        termAr: 'الشبكة الغذائية (Food Web)',
        termEn: 'Food Web',
        definitionAr: 'مجموعة متداخلة ومعقدة من السلاسل الغذائية التي توضح مسارات انتقال الطاقة بين مختلف كائنات النظام البيئي.',
        definitionEn: 'An interconnected network of multiple food chains illustrating energy transfer in an ecosystem.'
      }
    ],

    keyConceptsAr: [
      'الشمس هي المصدر الرئيسي والأساسي لجميع الطاقات على كوكب الأرض.',
      'تبدأ السلسلة الغذائية دائماً بكائن منتج (نبات أخضر) وتنتهي بكائن محلل.',
      'إذا اختفى كائن حي من الشبكة الغذائية، تتأثر بقية الكائنات بالسلب ويهتز التوازن البيئي.'
    ],
    keyConceptsEn: [
      'The sun is the ultimate source of energy for all living organisms on Earth.',
      'Food chains invariably begin with a producer and conclude with decomposers.',
      'Removing any keystone organism impacts the entire food web and destabilizes ecological balance.'
    ],

    summaryAr: 'تعلمنا في هذا الدرس تصنيف الكائنات الحية، وتتبع مسار تدفق الطاقة الشمسية في السلاسل والشبكات الغذائية، ودور المحللات الحاسم في تدوير المادة وحماية البيئة.',
    summaryEn: 'We classified trophic levels, traced solar energy flow across food chains/webs, and evaluated the recycling role of decomposers.',

    mainContentAr: `
### 1. تصنيف الكائنات الحية في النظام البيئي
1. **الكائنات المنتجة (Producers):**
   - تصنع الجلوكوز والأكسجين من الماء وثاني أكسيد الكربون وضوء الشمس.
   - تشكل **قاعدة** أي هرم غذائي (مثل الأشجار، الحشائش، العوالق البحرية).
2. **الكائنات المستهلكة (Consumers):**
   - **مستهلك أولي (آكلات العشب):** يتغذى على النباتات مباشرة (الأرنب، الزرافة، الجراد).
   - **مستهلك ثانوي (آكلات اللحوم الصغيرة):** يتغذى على آكلات العشب (الضفدع، العصفور).
   - **مستهلك من الدرجة الثالثة (مفترسات القمة):** يتغذى على المستهلك الثانوي (الأسد، النسر، القرش).
3. **الكائنات المحللة (Decomposers):**
   - خط النهاية وحلقة الوصل؛ تحلل الجثث وتطلق النيتروجين والفسفور إلى التربة فيمتصها النبات مجدداً.

---

### 2. تدفق الطاقة في السلسلة والشبكة الغذائية
- **السلسلة الغذائية:** مسار خطي بسيط: (عشب $\\implies$ جرادة $\\implies$ فأر $\\implies$ ثعبان $\\implies$ صقر).
- **الشبكة الغذائية:** تمثيل حقيقي للواقع؛ لأن الصقر لا يأكل الثعابين فقط بل يأكل الفئران والأرانب والطيور؛ فتتشابك السلاسل معاً.
- **فقدان الطاقة:** عند انتقال الطاقة من مستوى لمستوى أعلى، ينتقل حوالي **10% فقط** من الطاقة المخزنة، بينما يُفقد 90% كحرارة ونشاط حيوي.

---

### 3. التغيرات البيئية والتلوث البلاستيكي
- **تأثير البلاستيك في البيئة البحرية:** تبتلع الكائنات البحرية (كالحيتان والسلاحف) القطع البلاستيكية الدقيقة (Microplastics) ظناً منها أنها قناديل بحر، مما يسد جهازها الهضمي ويدمر الشبكة الغذائية البحرية.
`,
    assessment: {
      id: 'assess-sci5-1',
      titleAr: 'تقييم المحاضرة 1: العلاقات الغذائية في الأنظمة البيئية',
      titleEn: 'Assessment 1: Ecosystem Feeding Relationships',
      passingScore: 80,
      questions: [
        {
          id: 'q-s5-1-1',
          textAr: 'ما الكائن الذي تبدأ به دائماً السلسلة الغذائية البرية؟',
          textEn: 'Which organism always begins a terrestrial food chain?',
          optionsAr: ['الأسد المفترس', 'النبات الأخضر المنتج', 'الفطر المحلل', 'الأرنب العشبي'],
          optionsEn: ['Apex predator', 'Green plant producer', 'Decomposer fungus', 'Herbivorous rabbit'],
          correctIndex: 1,
          conceptTestedAr: 'بداية السلسلة الغذائية',
          conceptTestedEn: 'Base of Food Chains',
          difficulty: 'easy',
          explanationAr: 'تبدأ السلسلة دائماً بكائن منتج يصنع غذاءه بنفسه باستخدام ضوء الشمس كالنباتات الخضراء.',
          explanationEn: 'Food chains invariably start with autotrophic producers capturing sunlight.'
        },
        {
          id: 'q-s5-1-2',
          textAr: 'ما الدور البيئي الهام الذي تقوم به الكائنات المحللة مثل الفطريات والبكتيريا؟',
          textEn: 'What vital ecological role do decomposers like fungi and bacteria perform?',
          optionsAr: [
            'صنع الأكسجين لجميع الكائنات الحية',
            'افتراس الحيوانات الكبيرة في الغابة',
            'إعادة تدوير العناصر الغذائية من بقايا الكائنات الميتة إلى التربة',
            'تكوين الأمطار في الغلاف الجوي'
          ],
          optionsEn: [
            'Producing oxygen for all life',
            'Hunting large animals',
            'Recycling vital nutrients from carcasses back into soil',
            'Forming atmospheric precipitation'
          ],
          correctIndex: 2,
          conceptTestedAr: 'وظيفة الكائنات المحللة',
          conceptTestedEn: 'Decomposer Role in Nutrient Recycling',
          difficulty: 'easy',
          explanationAr: 'تقوم المحللات بتفكيك المواد العضوية وإعادة العناصر كالنيتروجين إلى التربة لخصوبتها.',
          explanationEn: 'Decomposers recycle essential organic matter into soil mineral nutrients.'
        },
        {
          id: 'q-s5-1-3',
          textAr: 'ما النسبة التقريبية للطاقة التي تنتقل من مستوى غذائي إلى المستوى الغذائي الذي يليه؟',
          textEn: 'What is the approximate percentage of energy transferred between trophic levels?',
          optionsAr: ['100%', '50%', '10%', '1%'],
          optionsEn: ['100%', '50%', '10%', '1%'],
          correctIndex: 2,
          conceptTestedAr: 'كفاءة انتقال الطاقة بين المستويات الغذائية',
          conceptTestedEn: 'Trophic Energy Transfer Efficiency',
          difficulty: 'medium',
          explanationAr: 'ينتقل حوالي 10% فقط من الطاقة، بينما يُفقد الباقي كحرارة ونشاط كيميائي.',
          explanationEn: 'Only approximately 10% of stored energy is passed up to the next trophic level.'
        }
      ]
    }
  },

  // ── LECTURE 2: MATTER & PARTICLES ──
  {
    id: 'psci-g5-2',
    order: 2,
    titleAr: 'المحاضرة 2: المادة وجسيماتها (حالات المادة الثلاث، حركة الجسيمات، والنموذج الجسيمي)',
    titleEn: 'Lecture 2: Matter and its Particles (States of Matter, Particle Motion & Models)',
    subtitleAr: 'الخصائص المجهرية للمواد الصلبة والسائلة والغازية، حركة الجسيمات ودرجة الحرارة، واستخدام النماذج العلمية لتفسير المادة.',
    subtitleEn: 'Microscopic properties of solids, liquids, and gases, particle kinematics, and physical modeling of matter.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - العلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Science (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المفهوم الثاني: وصف وقياس المادة',
    unitTitleEn: 'Concept 2: Describing & Measuring Matter',
    lessonNumberAr: 'الدرس 2: الجسيمات وحالات المادة',
    lessonNumberEn: 'Lesson 2: Particles & States of Matter',

    warmupHookAr: 'قطعة الثلج الصلبة، والماء السائل الذي تشربه، وبخار الماء المتصاعد من الإبريق.. كلها تتكون من نفس المادة تماماً (الماء H₂O)! ما الذي يجعل الثلج صلباً وقاسياً والماء سائلاً ينسكب والبخار غازاً يطير في الهواء؟ السر يكمن في طريقة رص وسرعة حركة الجسيمات المجهرية!',
    warmupHookEn: 'Ice, liquid water, and rising steam are all chemically identical (H₂O)! Why is ice rigid, water fluid, and steam ethereal? The answer lies in the arrangement and kinetic vibration of microscopic particles!',

    learningOutcomesAr: [
      'أن يعرف الطالب المادة بأنها كل ما له كتلة ويشغل حيزاً من الفراغ (له حجم).',
      'أن يقارن بين حالات المادة الثلاث (صلبة، سائلة، غازية) من حيث الشكل، والحجم، وترتيب الجسيمات، والمسافات البينية.',
      'أن يوضح أثر التسخين والتبريد على حركة الجسيمات وطاقتها الحركية.',
      'أن يفسر استخدام النماذج العلمية ثلاثية الأبعاد لرؤية ودراسة الجسيمات متناهية الصغر التي لا تُرى بالعين المجردة.'
    ],
    learningOutcomesEn: [
      'Define matter as anything that possesses mass and occupies space (volume).',
      'Compare solid, liquid, and gaseous states in shape, volume, particle arrangement, and intermolecular space.',
      'Explain thermal effects on particle kinetic energy and velocities.',
      'Understand the utility of scientific physical models for unobservable microscopic systems.'
    ],

    vocabulary: [
      {
        termAr: 'المادة (Matter)',
        termEn: 'Matter',
        definitionAr: 'كل ما له كتلة ويشغل حيزاً من الفراغ (كل شيء ملموس من حولنا).',
        definitionEn: 'Anything that has mass and takes up physical space (volume).'
      },
      {
        termAr: 'الجسيمات (Particles)',
        termEn: 'Particles / Molecules',
        definitionAr: 'وحدات مجهرية بالغة الصغر تبنى منها جميع المواد، وهي في حالة حركة مستمرة.',
        definitionEn: 'Microscopic building blocks of matter, existing in continuous thermal motion.'
      },
      {
        termAr: 'النموذج العلمي (Scientific Model)',
        termEn: 'Scientific Model',
        definitionAr: 'محاكاة أو تمثيل مرئي لشيء يصعب رؤيته بحجمه الحقيقي (مثل نموذج المجموعة الشمسية أو نموذج جسيمات المادة).',
        definitionEn: 'A visual or conceptual representation of systems too vast or tiny to inspect directly.'
      }
    ],

    keyConceptsAr: [
      'في المواد الصلبة: الجسيمات متقاربة جداً ومرتبة وتهتز في مكانها فقط، فلها شكل وحجم ثابتاً.',
      'في السوائل: الجسيمات قريبة من بعضها وتنزلق فوق بعضها بحرية، فلها حجم ثابت ولكن شكلها يتغير حسب الإناء.',
      'في الغازات: الجسيمات متباعدة جداً وتتحرك بسرعة فائقة في جميع الاتجاهات، فليس لها شكل أو حجم ثابت.',
      'التسخين يزيد من سرعة حركة الجسيمات ويباعد بينها، بينما التبريد يبطئها ويقربها.'
    ],
    keyConceptsEn: [
      'Solids: tightly packed particles vibrating in place, yielding definite shape and volume.',
      'Liquids: loosely held particles sliding past one another, maintaining fixed volume but variable shape.',
      'Gases: widely spaced particles moving rapidly in all directions with indefinite shape and volume.',
      'Heating increases particle kinetic velocity and spacing; cooling slows and compresses them.'
    ],

    summaryAr: 'شرحنا في هذا الدرس النظرية الجسيمية للمادة، وقارنا بين خصائص الحالات الصلبة والسائلة والغازية، وتعرفنا على أهمية النماذج العلمية في تبسيط الظواهر المجهرية.',
    summaryEn: 'We explored the particulate nature of matter, contrasted the three states at microscopic scales, and recognized the power of scientific modeling.',

    mainContentAr: `
### 1. حالات المادة الثلاث والنموذج الجسيمي
| الخاصية | الحالة الصلبة (Solid) | الحالة السائلة (Liquid) | الحالة الغازية (Gas) |
| :--- | :--- | :--- | :--- |
| **الشكل** | ثابت ومحدد | يتغير حسب الإناء | يتغير ويشغل أي حيز |
| **الحجم** | ثابت ومحدد | ثابت ومحدد | غير ثابت ويتمدد وينكمش |
| **ترتيب الجسيمات** | متلاصقة ومنتظمة جداً | قريبة ولكن غير منتظمة | متباعدة جداً وعشوائية |
| **حركة الجسيمات** | اهتزازية في مواضعها | تنزلق بحرية وسلاسة | حركة سريعة جداً في كل اتجاه |
| **قوى التماسك** | قوية جداً | متوسطة | ضعيفة جداً أو تكاد تنعدم |

---

### 2. تأثير الحرارة على الجسيمات
- **اكتساب الحرارة (التسخين):** تكتسب الجسيمات طاقة حركية، فتزداد سرعة اهتزازها وتبتعد عن بعضها $\\implies$ انصهار (صلب لسائل) ثم تبخر (سائل لغاز).
- **فقدان الحرارة (التبريد):** تبطئ الجسيمات وتقترب من بعضها $\\implies$ تكثف (غاز لسائل) ثم تجمد (سائل لصلب).
`,
    assessment: {
      id: 'assess-sci5-2',
      titleAr: 'تقييم المحاضرة 2: المادة والنموذج الجسيمي',
      titleEn: 'Assessment 2: Matter & Particles',
      passingScore: 80,
      questions: [
        {
          id: 'q-s5-2-1',
          textAr: 'أي حالات المادة يكون لها حجم ثابت وشكل يتغير بحسب الإناء الحاوي لها؟',
          textEn: 'Which state of matter has a fixed volume but changes shape to match its container?',
          optionsAr: ['الحالة الصلبة', 'الحالة السائلة', 'الحالة الغازية', 'حالة البلازما'],
          optionsEn: ['Solid state', 'Liquid state', 'Gaseous state', 'Plasma state'],
          correctIndex: 1,
          conceptTestedAr: 'خصائص الحالة السائلة',
          conceptTestedEn: 'Liquid State Characteristics',
          difficulty: 'easy',
          explanationAr: 'السوائل لها حجم محدد وثابت ولكن شكلها يتبع الإناء الذي توضع فيه.',
          explanationEn: 'Liquids preserve their volume while conforming flexibly to container geometry.'
        },
        {
          id: 'q-s5-2-2',
          textAr: 'ماذا يحدث لسرعة وحركة جسيمات المادة عند تسخينها وإمدادها بالطاقة الحرارية؟',
          textEn: 'What happens to particle speed and kinetic energy when matter is heated?',
          optionsAr: [
            'تتوقف الجسيمات تماماً عن الحركة',
            'تتحرك الجسيمات بسرعة أكبر وتتباعد عن بعضها',
            'تتباطأ الجسيمات وتقترب بشدة من بعضها',
            'تنكمش المادة وتتحول إلى صلب'
          ],
          optionsEn: [
            'Particles halt movement entirely',
            'Particles accelerate, moving faster and spreading farther apart',
            'Particles slow down and compress tightly',
            'Matter contracts and turns solid'
          ],
          correctIndex: 1,
          conceptTestedAr: 'أثر الحرارة على حركة الجسيمات',
          conceptTestedEn: 'Thermal Effects on Particle Velocities',
          difficulty: 'easy',
          explanationAr: 'التسخين يكسب الجسيمات طاقة حركية تجعلها تهتز وتتحرك أسرع وتتباعد.',
          explanationEn: 'Heat energy excites particles, causing them to move faster and expand.'
        },
        {
          id: 'q-s5-2-3',
          textAr: 'لماذا يستخدم العلماء "النماذج" في دراسة جسيمات المادة؟',
          textEn: 'Why do scientists utilize models when investigating particles of matter?',
          optionsAr: [
            'لأن الجسيمات كبيرة الحجم جداً ولا يمكن حملها',
            'لأن الجسيمات متناهية الصغر ولا يمكن رؤيتها بالعين المجردة فالنماذج تجسمها',
            'لأن الجسيمات لا توجد في الطبيعة',
            'لتغيير ألوان المواد'
          ],
          optionsEn: [
            'Because particles are too enormous to transport',
            'Because particles are submicroscopic and invisible to naked eyes, so models visualize them',
            'Because particles do not exist in reality',
            'To alter material colors'
          ],
          correctIndex: 1,
          conceptTestedAr: 'أهمية النماذج العلمية',
          conceptTestedEn: 'Importance of Scientific Models',
          difficulty: 'medium',
          explanationAr: 'تساعد النماذج على تصور وفهم الأشياء بالغة الصغر أو بالغة الكبر التي يتعذر فحصها مباشرة.',
          explanationEn: 'Models allow visualization of submicroscopic phenomena inaccessible to direct human vision.'
        }
      ]
    }
  },

  // ── LECTURE 3: PHYSICAL & CHEMICAL CHANGES & MIXTURES ──
  {
    id: 'psci-g5-3',
    order: 3,
    titleAr: 'المحاضرة 3: التغيرات الفيزيائية والكيميائية والمخاليط وطرق فصلها',
    titleEn: 'Lecture 3: Physical & Chemical Changes, Mixtures and Separation Techniques',
    subtitleAr: 'الفرق بين التغير الفيزيائي (تغير الحالة والشكل) والتغير الكيميائي (تكون مادة جديدة)، والمخاليط والمحاليل، وطرق الفصل (الترشيح، التبخير، المغناطيس).',
    subtitleEn: 'Contrast physical vs. chemical changes, investigate solutions/mixtures, and master separation methods.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - العلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Science (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المفهوم الثالث: التغيرات في المادة والمخاليط',
    unitTitleEn: 'Concept 3: Changes in Matter & Mixtures',
    lessonNumberAr: 'الدرس 3: التغيرات الكيميائية والفيزيائية وفصل المخاليط',
    lessonNumberEn: 'Lesson 3: Chemical vs Physical Changes',

    warmupHookAr: 'إذا قطعت تفاحة نصفين، فهذا تغير في شكلها الخارجي ولكن طعمها وتكوينها كما هو (تغير فيزيائي). ولكن إذا تركت التفاحة معرضة للهواء لبضع ساعات، ستتحول إلى اللون البني ويفسد طعمها بسبب تفاعلها مع الأكسجين (تغير كيميائي)! كيف نميز بين التغير الذي يمكن عكسه والتغير الذي يصنع مادة جديدة تماماً؟',
    warmupHookEn: 'Slicing an apple alters its geometry without changing its chemical identity (physical change). But leaving it exposed causes browning and chemical spoilage through oxidation (chemical change)! How do we distinguish reversible changes from brand-new chemical creations?',

    learningOutcomesAr: [
      'أن يقارن الطالب بدقة بين التغير الفيزيائي (في الشكل أو الحالة دون المساس بالتركيب) والتغير الكيميائي (إنتاج مادة جديدة بخواص جديدة).',
      'أن يذكر دلائل حدوث التغير الكيميائي: (تغير اللون، تصاعد غاز وفقاعات، انبعاث حرارة أو ضوء، تكون راسب).',
      'أن يوضح مفهوم المخلوط (امتزاج مادتين أو أكثر مع احتفاظ كل مادة بخواصها) والمحلول كحالة خاصة من المخلوط المتجانس.',
      'أن يحدد طريقة الفصل المناسبة لمخاليط مختلفة: (الترشيح لفصل مادة صلبة غير ذائبة، التبخير لفصل مادة صلبة ذائبة، والجذب المغناطيسي لفصل الحديد).'
    ],
    learningOutcomesEn: [
      'Contrast physical changes (shape/state altering) with chemical changes (new substance formation).',
      'Identify evidence of chemical reaction: color shift, gas evolution, thermal/light emissions, precipitates.',
      'Define mixtures and homogeneous solutions.',
      'Select proper separation techniques: filtration, evaporation, and magnetic attraction.'
    ],

    vocabulary: [
      {
        termAr: 'التغير الفيزيائي (Physical Change)',
        termEn: 'Physical Change',
        definitionAr: 'تغير يطرأ على شكل المادة أو مظهرها أو حالتها الفيزيائية فقط، دون أن تتغير طبيعة المادة أو تركيبها الأصلي.',
        definitionEn: 'A change altering physical appearance or phase without mutating chemical identity.'
      },
      {
        termAr: 'التغير الكيميائي (Chemical Change)',
        termEn: 'Chemical Change',
        definitionAr: 'تفاعل كيميائي يغير من التركيب الجزيئي للمادة وينتج مادة جديدة تماماً ذات خواص جديدة كلياً.',
        definitionEn: 'A process transforming molecular structure into one or more completely new substances.'
      },
      {
        termAr: 'المخلوط (Mixture)',
        termEn: 'Mixture',
        definitionAr: 'مادتان أو أكثر ممتزجتان معاً دون اتحاد كيميائي، ويمكن فصلهما بالطرق الفيزيائية البسيطة.',
        definitionEn: 'Physical combination of substances retaining their individual chemical characteristics.'
      }
    ],

    keyConceptsAr: [
      'أمثلة التغير الفيزيائي: ذوبان الثلج، تمزيق الورق، ذوبان السكر في الشاي، تكسير الزجاج.',
      'أمثلة التغير الكيميائي: صدأ الحديد، احتراق الخشب، طهي البيض، تخمر العجين.',
      'طرق فصل المخاليط: 1) الجذب المغناطيسي (لبرادة الحديد والرمل)، 2) الترشيح (للرمل والماء)، 3) التبخير (للملح والماء).'
    ],
    keyConceptsEn: [
      'Physical change examples: melting ice, tearing paper, dissolving sugar in tea, shattering glass.',
      'Chemical change examples: iron rusting, wood combustion, baking bread, egg cooking.',
      'Separation methods: Magnetic attraction (iron filings), Filtration (sand and water), Evaporation (salt and water).'
    ],

    summaryAr: 'ميزنا في هذا الدرس بين التغيرات الفيزيائية والكيميائية للمادة، وتعرفنا على خصائص المخاليط والمحاليل، وتطبيقات تقنيات فصل المواد في الحياة والصناعة.',
    summaryEn: 'We evaluated physical vs chemical transformations, analyzed mixtures, and mastered separation strategies.',

    mainContentAr: `
### 1. المقارنة بين التغيرات الفيزيائية والكيميائية
| وجه المقارنة | التغير الفيزيائي | التغير الكيميائي |
| :--- | :--- | :--- |
| **التركيب** | لا يتغير التركيب الداخلي | يتغير التركيب وتنتج مادة جديدة |
| **الخواص** | تحتفظ المادة بخواصها | تظهر خواص جديدة كلياً |
| **الرجوع للأصل** | يمكن عكسه غالباً (تجمد/انصهار) | لا يمكن عكسه بالطرق البسيطة |
| **أمثلة شهيرة** | ذوبان الشوكولاتة، قص القماش | صدأ السيارة، احتراق الشمعة، قلي البطاطس |

---

### 2. دلائل حدوث التفاعل الكيميائي
- انبعاث فقاعات غازية (مثل تفاعل الخل مع بيكربونات الصوديوم).
- تغير مفاجئ في اللون أو الرائحة.
- انبعاث طاقة حرارية أو ضوئية (كالألعاب النارية والمشاعل).
- تكون راسب في قاع الأنبوب.

---

### 3. طرق فصل المخاليط
1. **الترشيح (Filtration):** لفصل المواد الصلبة **غير الذائبة** العالقة في سائل (مثل فصل الرمل عن الماء باستخدام ورقة الترشيح).
2. **التبخير (Evaporation):** لفصل المواد الصلبة **الذائبة** تماماً في سائل (مثل استخراج ملح الطعام بتبخير ماء البحر في الملاحات).
3. **الجذب المغناطيسي (Magnetic Separation):** لفصل المواد المغناطيسية (مثل الحديد والنيكل) عن المواد غير المغناطيسية.
`,
    assessment: {
      id: 'assess-sci5-3',
      titleAr: 'تقييم المحاضرة 3: التغيرات الفيزيائية والكيميائية وفصل المخاليط',
      titleEn: 'Assessment 3: Physical & Chemical Changes',
      passingScore: 80,
      questions: [
        {
          id: 'q-s5-3-1',
          textAr: 'أي من التغيرات التالية يعد تغيراً كيميائياً؟',
          textEn: 'Which of the following events represents a chemical change?',
          optionsAr: ['ذوبان قطعة من الجليد في الماء', 'تمزيق قطعة من الورق', 'صدأ مسمار من الحديد عند تركه رطباً', 'تقطيع الخضار لعمل سلطة'],
          optionsEn: ['Melting ice in water', 'Tearing paper', 'Iron nail rusting when damp', 'Chopping vegetables for salad'],
          correctIndex: 2,
          conceptTestedAr: 'أمثلة التغير الكيميائي (الصدأ)',
          conceptTestedEn: 'Chemical Change Examples (Rusting)',
          difficulty: 'easy',
          explanationAr: 'صدأ الحديد ينتج مادة جديدة كيميائياً (أكسيد الحديد) ذات لون وخواص مختلفة تماماً.',
          explanationEn: 'Rusting creates a completely new chemical compound (iron oxide) with unique properties.'
        },
        {
          id: 'q-s5-3-2',
          textAr: 'ما هي الطريقة العلمية المثالية لفصل ملح الطعام الذائب في كمية من الماء؟',
          textEn: 'What is the optimal scientific method to recover dissolved table salt from water?',
          optionsAr: ['الترشيح بورقة ترشيح', 'التبخير بتسخين الماء حتى يتبخر بالكامل', 'استخدام المغناطيس', 'الصب باليد'],
          optionsEn: ['Paper filtration', 'Evaporation by boiling off liquid', 'Magnetic extraction', 'Manual pouring'],
          correctIndex: 1,
          conceptTestedAr: 'فصل المواد الصلبة الذائبة بالتبخير',
          conceptTestedEn: 'Separating Dissolved Solids via Evaporation',
          difficulty: 'medium',
          explanationAr: 'الملح ذائب تماماً فلا تحجزه ورقة الترشيح؛ ويتم فصله بتبخير الماء بالحرارة ويبقى الملح في القاع.',
          explanationEn: 'Dissolved salt passes through filters; heating evaporates the water, leaving crystals behind.'
        },
        {
          id: 'q-s5-3-3',
          textAr: 'إذا خلطنا برادة حديد مع حبيبات الرمل، كيف نفصلهما بسهولة؟',
          textEn: 'How can you effortlessly separate iron filings from sand grains?',
          optionsAr: ['باستخدام المغناطيس لجذب الحديد', 'بإضافة الماء ثم التبخير', 'بالتجميد', 'بالنخل اليدوي'],
          optionsEn: ['Using a magnet to attract iron', 'Adding water and evaporating', 'Freezing', 'Hand sorting'],
          correctIndex: 0,
          conceptTestedAr: 'الفصل بالمغناطيس',
          conceptTestedEn: 'Magnetic Separation',
          difficulty: 'easy',
          explanationAr: 'الحديد مادة مغناطيسية تنجذب للمغناطيس بينما الرمل لا ينجذب.',
          explanationEn: 'Iron is ferromagnetic and sticks to magnets, leaving non-magnetic sand behind.'
        }
      ]
    }
  },

  // ── LECTURE 4: WATER RESOURCES & GRAVITATIONAL FORCES ──
  {
    id: 'psci-g5-4',
    order: 4,
    titleAr: 'المحاضرة 4: الموارد الطبيعية والمياه على كوكب الأرض وحركة الأجرام والجاذبية',
    titleEn: 'Lecture 4: Natural Water Resources, Planetary Motion & Gravity',
    subtitleAr: 'توزيع المياه العذبة والمالحة على الأرض، حماية الموارد المائية، وقوة الجاذبية وحركة الأرض حول محورها ودورانها حول الشمس.',
    subtitleEn: 'Freshwater vs saltwater distributions, water conservation, gravity forces, and planetary rotation & revolution.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - العلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Science (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المفهوم الرابع: الموارد المائية وحركة الأرض والجاذبية',
    unitTitleEn: 'Concept 4: Hydrosphere & Gravitational Motion',
    lessonNumberAr: 'الدرس 4: الماء كأثمن مورد والجاذبية الأرضية',
    lessonNumberEn: 'Lesson 4: Water & Planetary Gravity',

    warmupHookAr: 'كوكب الأرض يسمى "الكوكب الأزرق" لأن المياه تغطي أكثر من 70% من سطحه! ومع ذلك، يواجه العالم أزمة مياه! لماذا؟ لأن أكثر من 97% من هذه المياه مالحة وغير صالحة للشرب، والمياه العذبة تمثل فقط نحو 3%! وما القوة التي تجعل هذه المحيطات الهائلة والغلاف الجوي ملتصقين بالأرض ولا يطيران في الفضاء؟ إنها الجاذبية الأرضية!',
    warmupHookEn: 'Earth is dubbed the "Blue Planet" with water blanketing 70% of its surface! Yet we face freshwater scarcity! Why? Because 97% is saline ocean water, leaving just 3% fresh! And what pins trillions of tons of oceans to Earth? Gravity!',

    learningOutcomesAr: [
      'أن يوضح الطالب نسب توزيع المياه على الأرض: المياه المالحة (نحو 97%) في البحار والمحيطات، والمياه العذبة (نحو 3%) ومعظمها في القمم الجليدية والأنهار والمياه الجوفية.',
      'أن يقترح طرقاً علمية وعملية لترشيد استهلاك المياه وحمايتها من التلوث.',
      'أن يشرح قوة الجاذبية كقوة سحب غير مرئية تؤثر على جميع الأجسام وتجذبها نحو مركز الأرض.',
      'أن يفسر تعاقب الليل والنهار بدوران الأرض حول محورها كل 24 ساعة، وتعاقب فصول السنة الأربعة بدورانها حول الشمس كل 365.25 يوماً.'
    ],
    learningOutcomesEn: [
      'Explain global water proportions: 97% marine saltwater, 3% freshwater (mostly locked in polar ice and aquifers).',
      'Propose sustainable strategies for water conservation and pollution abatement.',
      'Define gravity as an invisible pulling force directed toward Earth\'s center.',
      'Account for day/night cycle via axial rotation (24h) and four seasons via orbital revolution (365.25 days).'
    ],

    vocabulary: [
      {
        termAr: 'المياه الجوفية (Groundwater)',
        termEn: 'Groundwater / Aquifers',
        definitionAr: 'مياه عذبة تتسرب من سطح الأرض وتستقر في مسام الصخور والرمال في باطن الأرض، وتُستخرج بالآبار.',
        definitionEn: 'Freshwater soaking beneath the surface into subterranean rock pores and aquifers.'
      },
      {
        termAr: 'الجاذبية (Gravity)',
        termEn: 'Gravity',
        definitionAr: 'قوة جذب غير مرئية تسحب بها الأجسام الكبيرة (كالكواكب والنجوم) الأجسام الأخرى نحو مركزها.',
        definitionEn: 'An invisible attractive force pulling matter toward the center of massive bodies.'
      },
      {
        termAr: 'دوران الأرض حول محورها (Axial Rotation)',
        termEn: 'Axial Rotation',
        definitionAr: 'دوران الأرض حول خط وهمي يمر بقطبيها مرة كل 24 ساعة تقريباً، مسبباً تعاقب الليل والنهار.',
        definitionEn: 'Earth spinning around its tilted imaginary polar axis once every 24 hours, generating night and day.'
      }
    ],

    keyConceptsAr: [
      'الماء مورد طبيعي متجدد ولكنه محدود؛ وحماية المياه العذبة واجب إنساني ووطني أساسي.',
      'الجاذبية تعتمد على أمرين: كتلة الجسمين (تزيد بزيادة الكتلة)، والمسافة بينهما (تقل بزيادة المسافة).',
      'دوران الأرض حول محورها يسبب: 1) تعاقب الليل والنهار، 2) الحركة الظاهرية للشمس في السماء، 3) تغير طول واتجاه الظلال.'
    ],
    keyConceptsEn: [
      'Water is a renewable yet finite vital resource demanding active stewardship.',
      'Gravitational attraction depends on mass (increases with mass) and distance (weakens with distance).',
      'Earth\'s axial rotation causes: day/night cycle, apparent solar motion across skies, and shifting shadow lengths.'
    ],

    summaryAr: 'شرحنا في هذا الدرس توزيع الموارد المائية على كوكبنا، وأهمية حماية المياه العذبة، وحقيقة قوة الجاذبية وتأثيرات دوران كوكب الأرض حول محوره وحول الشمس.',
    summaryEn: 'We evaluated Earth\'s hydrosphere distributions, water conservation, gravitational mechanics, and planetary rotational cycles.',

    mainContentAr: `
### 1. الغلاف المائي وتوزيع المياه على الأرض
- يغطي الماء نحو **71%** من مساحة سطح الأرض:
  - **المياه المالحة (97%):** المحيطات، البحار، والخلجان (مياه غير صالحة للشرب والزراعة المباشرة).
  - **المياه العذبة (3% فقط!):** معظمها متجمد في **الأنهار والكتل الجليدية** في القطبين، والجزء المتبقي يجري في الأنهار والبحيرات العذبة أو يختزن تحت الأرض في صورة **مياه جوفية**.

---

### 2. قوة الجاذبية الأرضية
- الجاذبية هي قوة سحب دائمة تسحب الأجسام نحو **مركز كوكب الأرض**.
- **العوامل المؤثرة في الجاذبية:**
  1. **الكتلة:** كلما زادت كتلة الجسم زادت قوة جاذبيته (جاذبية الشمس أكبر من جاذبية الأرض، وجاذبية الأرض أكبر من جاذبية القمر).
  2. **المسافة:** كلما ابتعد الجسمان عن بعضهما ضعفت قوة الجاذبية بينهما.

---

### 3. حركات كوكب الأرض في الفضاء
1. **دوران الأرض حول محورها (كل 24 ساعة):**
   - تدور الأرض حول نفسها من الغرب إلى الشرق.
   - النتائج: تعاقب الليل والنهار، شروق وغروب الشمس الظاهري، وتغير حركة وظل الأجسام طوال اليوم.
2. **دوران الأرض حول الشمس (كل 365 وربع يوم):**
   - تدور في مدار بيضاوي مع ميل محور الأرض.
   - النتائج: **تعاقب فصول السنة الأربعة** (صيف، خريف، شتاء، ربيع).
`,
    assessment: {
      id: 'assess-sci5-4',
      titleAr: 'تقييم المحاضرة 4: الموارد المائية والجاذبية والأجرام',
      titleEn: 'Assessment 4: Hydrosphere & Gravity',
      passingScore: 80,
      questions: [
        {
          id: 'q-s5-4-1',
          textAr: 'كم تبلغ النسبة التقريبية للمياه العذبة من إجمالي كمية المياه على كوكب الأرض؟',
          textEn: 'What is the approximate percentage of freshwater out of Earth\'s total hydrosphere?',
          optionsAr: ['71%', '97%', '3%', '50%'],
          optionsEn: ['71%', '97%', '3%', '50%'],
          correctIndex: 2,
          conceptTestedAr: 'نسبة المياه العذبة على الأرض',
          conceptTestedEn: 'Freshwater Percentage on Earth',
          difficulty: 'easy',
          explanationAr: 'المياه العذبة تمثل نحو 3% فقط من إجمالي المياه، بينما 97% مياه مالحة في البحار والمحيطات.',
          explanationEn: 'Freshwater comprises only about 3% of all terrestrial water, with 97% being saline.'
        },
        {
          id: 'q-s5-4-2',
          textAr: 'ما الظاهرة الفلكية الناتجة عن دوران كوكب الأرض حول محوره كل 24 ساعة؟',
          textEn: 'Which astronomical phenomenon results from Earth spinning on its axis every 24 hours?',
          optionsAr: ['تعاقب فصول السنة الأربعة', 'تعاقب الليل والنهار', 'كسوف الشمس', 'انفجار البراكين'],
          optionsEn: ['Four seasons cycle', 'Day and night cycle', 'Solar eclipse', 'Volcanic eruptions'],
          correctIndex: 1,
          conceptTestedAr: 'نتائج دوران الأرض حول محورها',
          conceptTestedEn: 'Consequences of Earth Axial Rotation',
          difficulty: 'easy',
          explanationAr: 'دوران الأرض حول محورها أمام الشمس يسبب حدوث الليل في الجانب المظلم والنهار في الجانب المضاء.',
          explanationEn: 'Axial rotation every 24 hours exposes alternating hemispheres to sunlight, producing night and day.'
        },
        {
          id: 'q-s5-4-3',
          textAr: 'ما الذي يحدث لقوة الجاذبية بين جسمين عند زيادة المسافة والتباعد بينهما؟',
          textEn: 'What happens to the gravitational attraction between two objects as the distance between them increases?',
          optionsAr: ['تزداد قوة الجاذبية', 'تقل وتضعف قوة الجاذبية', 'تظل الجاذبية ثابتة لا تتغير', 'تتحول الجاذبية إلى ضوء'],
          optionsEn: ['Gravity increases', 'Gravity weakens / decreases', 'Gravity remains unchanged', 'Gravity becomes light'],
          correctIndex: 1,
          conceptTestedAr: 'علاقة الجاذبية بالمسافة',
          conceptTestedEn: 'Gravity and Distance Relationship',
          difficulty: 'medium',
          explanationAr: 'قوة الجاذبية تقل كلما زادت المسافة بين الجسمين.',
          explanationEn: 'Gravitational attraction weakens inversely as the distance between bodies widens.'
        }
      ]
    }
  }
];
