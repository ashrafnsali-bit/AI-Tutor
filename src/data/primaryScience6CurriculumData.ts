import type { Lecture } from '../types';

// PRIMARY SCIENCE — GRADE 6 (علوم الصف السادس الابتدائي - منهج التعليم 2.0 والمسارات المعتمدة)
// ============================================================================
// Based on official Egyptian Ministry of Education Edu 2.0 & Saudi Ministry of Education G6 standards.
// Covers:
// 1. The Cell as a System: Organelles, Plant vs. Animal Cells (الخلية كنظام)
// 2. The Body as a System: Nervous, Musculoskeletal & Circulatory (الجسم كنظام وتكامل الأجهزة)
// 3. Thermal Energy & Heat Transfer: Conduction, Convection & Radiation (الطاقة الحرارية وانتقال الحرارة)
// 4. Atmosphere, Water Cycle & Weather Systems (دورة المياه والطقس والمناخ)

export const PRIMARY_SCIENCE_G6_LECTURES: Lecture[] = [
  // ── LECTURE 1: THE CELL AS A SYSTEM ──
  {
    id: 'psci-g6-1',
    order: 1,
    titleAr: 'المحاضرة 1: الخلية كنظام متكامل (بنية الخلية النباتية والحيوانية ووظائف العضيات)',
    titleEn: 'Lecture 1: The Cell as a System (Plant & Animal Cells and Organelles)',
    subtitleAr: 'استكشاف الخلية كوحدة بناء الكائن الحي، وظائف النواة، الميتوكوندريا، غشاء الخلية، الجدار الخلوي، والبلاستيدات الخضراء.',
    subtitleEn: 'Explore the cell as the basic unit of life, nucleus, mitochondria, cell membrane, wall & chloroplasts.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - العلوم المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المفهوم الأول: الخلية كنظام',
    unitTitleEn: 'Concept 1: The Cell as a System',
    lessonNumberAr: 'الدرس 1: بنية الخلية وعضياتها',
    lessonNumberEn: 'Lesson 1: Cell Structure & Organelles',

    warmupHookAr: 'تخيل مدينة متكاملة: لها مجلس إدارة يوجه القرارات، ومحطات توليد كهرباء تمدها بالطاقة، ومصانع لإنتاج الغذاء، وأسوار وبوابات أمنية تحرس المداخل! هكذا بالضبط تعمل الخلية الحية المجهرية داخل أجسامنا وأجسام النباتات بنظام مبهر فائق الدقة!',
    warmupHookEn: 'Imagine a vibrant city: city hall directing policies, power plants generating electricity, factories packaging goods, and gates guarding entry! A microscopic living cell operates with this exact intricate organization.',

    learningOutcomesAr: [
      'أن يعرف الطالب الخلية كوحدة البناء والوظيفة الأساسية في جميع الكائنات الحية.',
      'أن يوضح مستويات التنظيم الحيوي: (خلية ← نسيج ← عضو ← جهاز ← كائن حي متكامل).',
      'أن يقارن بدقة بين مكونات الخلية النباتية والخلية الحيوانية (الجدار الخلوي، البلاستيدات، الفجوة العصارية).',
      'أن يشرح وظائف عضيات الخلية الرئيسية: النواة، الميتوكوندريا، غشاء الخلية، السيتوبلازم، وجهاز جولجي.'
    ],
    learningOutcomesEn: [
      'Define the cell as the structural and functional unit of all living organisms.',
      'Explain levels of biological organization: cell -> tissue -> organ -> organ system -> organism.',
      'Compare plant and animal cell structures (cell wall, chloroplasts, central vacuole).',
      'Describe organelle functions: nucleus, mitochondria, cell membrane, cytoplasm, and Golgi apparatus.'
    ],

    vocabulary: [
      {
        termAr: 'الميتوكوندريا (Mitochondria)',
        termEn: 'Mitochondria',
        definitionAr: 'عضيات إنتاج الطاقة في الخلية؛ تقوم بالتنفس الخلوي وتحويل الغذاء والأكسجين إلى طاقة كيميائية (ATP).',
        definitionEn: 'The powerhouses of the cell that generate energy through cellular respiration.'
      },
      {
        termAr: 'غشاء الخلية (Cell Membrane)',
        termEn: 'Cell Membrane',
        definitionAr: 'غشاء رقيق يحيط بالخلية ويتميز بالنفاذية الاختيارية؛ يتحكم في المواد التي تدخل وتخرج من الخلية.',
        definitionEn: 'A selective barrier surrounding the cell controlling substances entering and leaving.'
      },
      {
        termAr: 'الجدار الخلوي (Cell Wall)',
        termEn: 'Cell Wall',
        definitionAr: 'جدار صلب خارجي مصنوع من السليلوز يحيط بالخلية النباتية فقط لمنحها شكلاً ثابتاً ومحدداً وحماية قوية.',
        definitionEn: 'A rigid outer layer composed of cellulose found exclusively in plant cells providing structural support.'
      },
      {
        termAr: 'البلاستيدات الخضراء (Chloroplasts)',
        termEn: 'Chloroplasts',
        definitionAr: 'عضيات خضراء تحتوي على صبغة الكلوروفيل في الخلية النباتية لامتصاص ضوء الشمس وصنع الغذاء بالبناء الضوئي.',
        definitionEn: 'Green organelles in plant cells containing chlorophyll that conduct photosynthesis.'
      }
    ],

    keyConceptsAr: [
      'تتميز الخلايا النباتية عن الحيوانية بوجود: الجدار الخلوي السليلوزي، والبلاستيدات الخضراء، وفجوة عصارية مركزية كبيرة.',
      'النواة هي مركز التحكم في الخلية (مثل عمدة المدينة) ومسؤولة عن الانقسام وتنظيم الأنشطة الحيوية وتخزين المادة الوراثية (DNA).',
      'الميتوكوندريا هي محطة توليد الطاقة للخلية (Powerhouse) عبر عملية التنفس الخلوي.'
    ],
    keyConceptsEn: [
      'Plant cells differ from animal cells by having: a cellulose cell wall, chloroplasts, and a large central vacuole.',
      'The nucleus acts as control center, regulating cellular activities, division, and genetic material.',
      'Mitochondria serve as cellular powerhouses producing energy through cellular respiration.'
    ],

    summaryAr: 'تعلمنا في هذا الدرس مفهوم الخلية كنظام متكامل، ودور العضيات المختلفة في استمرار الحياة، والفروق الجوهرية بين الخلايا النباتية والحيوانية.',
    summaryEn: 'We learned how the cell operates as an integrated system, organelle functions, and vital structural differences between plant and animal cells.',

    mainContentAr: `
### 1. مستويات بناء الكائن الحي
لا تعمل الخلية بمفردها بمعزل عن غيرها، بل تترتب في نظام هرمي متدرج:
1. **الخلية (Cell):** أصغر وحدة حية لبناء الكائن.
2. **النسيج (Tissue):** مجموعة من الخلايا المتشابهة تعمل معاً (مثل النسيج العضلي).
3. **العضو (Organ):** مجموعة من الأنسجة المختلفة تؤدي وظيفة محددة (مثل القلب أو المعدة أو ورقة النبات).
4. **الجهاز (Organ System):** مجموعة أعضاء تتكامل معاً (مثل الجهاز الدوري أو الهضمي).
5. **الكائن الحي الكامل (Organism):** مجموع الأجهزة الحية المتكاملة (مثل الإنسان أو شجرة النخيل).

---

### 2. عضيات الخلية ووظائفها (نموذج مدينة الخلية)
- **النواة (Nucleus):** مقر القيادة؛ تتحكم في جميع الوظائف وانقسام الخلايا وتخزين الشفرة الوراثية.
- **غشاء الخلية (Cell Membrane):** حراس بوابة المدينة؛ غشاء ذو **نفاذية اختيارية** يسمح بدخول الماء والمغذيات وخروج الفضلات.
- **السيتوبلازم (Cytoplasm):** السائل الهلامي داخل الخلية تسبح فيه كل العضيات وتحدث فيه التفاعلات الكيميائية.
- **الميتوكوندريا (Mitochondria):** محطات الطاقة؛ تحول سكر الجلوكوز بمساعدة الأكسجين إلى طاقة قابلة للاستخدام.
- **الشبكة الإندوبلازمية وجهاز جولجي:** مصانع التجميع والتغليف والنقل الداخلي للبروتينات والدهون.

---

### 3. مقارنة دقيقة: الخلية النباتية والخلية الحيوانية
| العضية / الخاصية | الخلية النباتية | الخلية الحيوانية |
| :--- | :--- | :--- |
| **الجدار الخلوي** | **موجود** (من السليلوز يعطي شكلاً محدداً) | **غير موجود** |
| **البلاستيدات الخضراء** | **موجودة** (لصنع الغذاء بالبناء الضوئي) | **غير موجودة** |
| **الفجوة العصارية** | فجوة واحدة **كبيرة ومركزية** | فجوات **صغيرة ومتعددة** |
| **غشاء الخلية والنواة** | موجودان | موجودان |
`,
    assessment: {
      id: 'assess-sci6-1',
      titleAr: 'تقييم المحاضرة 1: الخلية كنظام متكامل',
      titleEn: 'Assessment 1: The Cell as a System',
      passingScore: 80,
      questions: [
        {
          id: 'q-s6-1-1',
          textAr: 'أي من العضيات التالية توجد في الخلية النباتية ولا توجد في الخلية الحيوانية؟',
          textEn: 'Which of the following organelles is present in plant cells but absent in animal cells?',
          optionsAr: ['الميتوكوندريا', 'النواة', 'البلاستيدات الخضراء والجدار الخلوي', 'غشاء الخلية'],
          optionsEn: ['Mitochondria', 'Nucleus', 'Chloroplasts and Cell Wall', 'Cell Membrane'],
          correctIndex: 2,
          conceptTestedAr: 'الفروق بين الخلية النباتية والحيوانية',
          conceptTestedEn: 'Differences Between Plant & Animal Cells',
          difficulty: 'easy',
          explanationAr: 'تتميز الخلية النباتية بوجود الجدار الخلوي السليلوزي والبلاستيدات الخضراء للقيام بالبناء الضوئي.',
          explanationEn: 'Plant cells are distinguished by their rigid cell wall and chloroplasts for photosynthesis.'
        },
        {
          id: 'q-s6-1-2',
          textAr: 'ما وظيفة الميتوكوندريا الأساسية في الخلية؟',
          textEn: 'What is the primary function of mitochondria in the cell?',
          optionsAr: [
            'التحكم في دخول وخروج المواد',
            'إنتاج الطاقة للخلية عبر عملية التنفس الخلوي',
            'إعطاء النبات اللون الأخضر',
            'تخزين النفايات فقط'
          ],
          optionsEn: [
            'Controlling transport across cell border',
            'Producing cellular energy through cellular respiration',
            'Giving plants their green color',
            'Storing cellular waste only'
          ],
          correctIndex: 1,
          conceptTestedAr: 'وظيفة الميتوكوندريا',
          conceptTestedEn: 'Mitochondria Function',
          difficulty: 'easy',
          explanationAr: 'الميتوكوندريا هي مركز توليد الطاقة في الخلية بتحويل الغذاء إلى طاقة.',
          explanationEn: 'Mitochondria are the powerhouses of the cell, converting nutrients into usable energy.'
        },
        {
          id: 'q-s6-1-3',
          textAr: 'ما الترتيب الصحيح لمستويات التنظيم الحيوي في جسم الكائن الحي؟',
          textEn: 'What is the correct sequence of biological organization levels?',
          optionsAr: [
            'عضو ← نسيج ← خلية ← جهاز',
            'خلية ← نسيج ← عضو ← جهاز ← كائن حي',
            'جهاز ← كائن حي ← نسيج ← خلية',
            'خلية ← جهاز ← نسيج ← عضو'
          ],
          optionsEn: [
            'Organ -> Tissue -> Cell -> System',
            'Cell -> Tissue -> Organ -> Organ System -> Organism',
            'System -> Organism -> Tissue -> Cell',
            'Cell -> System -> Tissue -> Organ'
          ],
          correctIndex: 1,
          conceptTestedAr: 'مستويات التنظيم الحيوي',
          conceptTestedEn: 'Levels of Biological Organization',
          difficulty: 'medium',
          explanationAr: 'تبدأ بالخلية، ثم تتجمع في أنسجة، فالأنسجة تكون عضواً، والأعضاء تشكل جهازاً، ومجموع الأجهزة هو الكائن الحي.',
          explanationEn: 'Organization ascends from cell to tissue to organ to organ system and organism.'
        }
      ]
    }
  },

  // ── LECTURE 2: THE BODY AS A SYSTEM ──
  {
    id: 'psci-g6-2',
    order: 2,
    titleAr: 'المحاضرة 2: الجسم كنظام وتكامل الأجهزة الحيوية (العضلي، العصبي، الدوري، والإخراجي)',
    titleEn: 'Lecture 2: The Body as a System (Musculoskeletal, Nervous, Circulatory & Excretory)',
    subtitleAr: 'كيف تتكامل العضلات والعظام والأعصاب والقلب والأوعية الدموية لنقل الأكسجين والغذاء والاستجابة للمواقف والتخلص من الفضلات.',
    subtitleEn: 'How muscles, bones, nerves, and heart coordinate to transport nutrients and respond to stimuli.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - العلوم المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المفهوم الثاني: الجسم كنظام متكامل',
    unitTitleEn: 'Concept 2: The Body as an Integrated System',
    lessonNumberAr: 'الدرس 2: استجابة أجهزة الجسم وتكاملها',
    lessonNumberEn: 'Lesson 2: Body System Integration',

    warmupHookAr: 'عندما تشاهد كلباً شرساً يقترب منك فجأة، ماذا يحدث لجسمك؟ في أجزاء من الثانية: تتسع حدقة عينك، ينبض قلبك بسرعة جنونية، تتنفس بعمق، وتتحفز عضلات ساقيك للركض! كيف استطاعت عينك وقلبك ورئتك وعضلاتك أن تعمل معاً في نفس اللحظة؟ هذا هو إعجاز تكامل أجهزة الجسم كنظام واحد!',
    warmupHookEn: 'When encountering unexpected danger, your heart races, pupils dilate, breathing accelerates, and leg muscles prepare for sprint! How do your eyes, heart, lungs, and muscles coordinate simultaneously? Through the astonishing integration of body systems.',

    learningOutcomesAr: [
      'أن يشرح الطالب كيفية استجابة الجسم للمواقف الخطرة (استجابة الكر والفر - Fight or Flight).',
      'أن يوضح دور الجهاز العصبي كشبكة اتصالات رئيسية ترسل الإشارات الكهربائية للأعضاء.',
      'أن يميز بين العضلات الإرادية (كعضلات الذراع والرقبة) والعضلات اللاإرادية (كعضلة القلب والمعدة).',
      'أن يحلل وظيفة الجهاز الدوري في ضخ الدم المحمل بالأكسجين والجلوكوز إلى العضلات النشطة.',
      'أن يوضح دور الجهاز الإخراجي (الكليتان والجلد والرئتان) في التخلص من الفضلات السامة.'
    ],
    learningOutcomesEn: [
      'Explain the body\'s fight-or-flight response under danger.',
      'Describe the nervous system as communication network sending electrical impulses.',
      'Distinguish voluntary muscles (arms, legs) from involuntary muscles (heart, stomach).',
      'Analyze the circulatory system pumping oxygen and glucose to active tissues.',
      'Explain excretory system functions (kidneys, skin, lungs) in waste elimination.'
    ],

    vocabulary: [
      {
        termAr: 'استجابة المواجهة أو الهروب (Fight or Flight)',
        termEn: 'Fight or Flight Response',
        definitionAr: 'تنسيق فوري بين الجهاز العصبي والدوري والتنفسي والعضلي لإعداد الجسم لمواجهة الخطر أو الفرار منه.',
        definitionEn: 'A physiological reaction occurring in response to perceived harm or threat.'
      },
      {
        termAr: 'العضلات الإرادية (Voluntary Muscles)',
        termEn: 'Voluntary Muscles',
        definitionAr: 'عضلات يستطيع الإنسان التحكم في حركتها بإرادته ووعيه (مثل عضلات الأطراف والوجه والرقبة).',
        definitionEn: 'Skeletal muscles whose movement is consciously controlled by the individual.'
      },
      {
        termAr: 'العضلات اللاإرادية (Involuntary Muscles)',
        termEn: 'Involuntary Muscles',
        definitionAr: 'عضلات تتحرك وتعمل تلقائياً دون تحكم واعٍ من الإنسان (مثل عضلة القلب وعضلات جدران الأوعية والمعدة).',
        definitionEn: 'Muscles operating automatically without conscious control (cardiac and smooth muscles).'
      },
      {
        termAr: 'النيفرونات (Nephrons)',
        termEn: 'Nephrons',
        definitionAr: 'وحدات مجهرية دقيقة داخل الكلى تقوم بفلترة وتنقية الدم من الفضلات مثل اليوريا وتكوين البول.',
        definitionEn: 'Microscopic functional filtering units inside kidneys removing toxins and urea from blood.'
      }
    ],

    keyConceptsAr: [
      'الأجهزة الحيوية لا تعمل منفصلة أبداً؛ فالجهاز العصبي يستشعر ويوجه، والدوري ينقل الوقود والأكسجين، والعضلي الهيكلي ينفذ الحركة.',
      'عضلة القلب عضلة لاإرادية تنبض باستمرار لضخ الدم النقي لكافة خلايا الجسم.',
      'تنقي الكليتان دم الإنسان عشرات المرات يومياً عبر ملايين النيفرونات للحفاظ على توازن الماء والأملاح.'
    ],
    keyConceptsEn: [
      'Body systems operate as an integrated network: nervous directs, circulatory fuels, musculoskeletal executes.',
      'Cardiac muscle functions involuntarily, contracting rhythmically to pump oxygenated blood.',
      'Kidneys filter blood multiple times daily through millions of nephrons to maintain osmotic balance.'
    ],

    summaryAr: 'شرحنا في هذا الدرس التنسيق المذهل بين أجهزة الجسم الحيوية أثناء الخطر والمجهود البدني، وميزنا بين أنواع العضلات، ودور الجهازين الدوري والإخراجي في الحفاظ على صحة وسلامة الجسم.',
    summaryEn: 'We learned how human body systems seamlessly coordinate during stress and exercise, voluntary vs involuntary muscles, and excretory filtration.',

    mainContentAr: `
### 1. تكامل الأجهزة أثناء التوتر والخطر (استجابة الكر والفر)
عندما يستشعر الإنسان خطراً داهماً:
1. **العين والحواس:** ترسل إشارات حسية للمخ عبر الأعصاب.
2. **الجهاز العصبي:** يحلل الموقف ويرسل أوامر هرمونية وعصبية عاجلة.
3. **الجهاز الدوري:** يزيد القلب من سرعة نبضاته وضخ كميات هائلة من الدم المحمل بالأكسجين إلى العضلات.
4. **الجهاز التنفسي:** يزداد معدل التنفس وتتسع الشعب الهوائية لإمداد الدم بالأكسجين والتخلص من ثاني أكسيد الكربون.
5. **الجهاز العضلي الهيكلي:** تنقبض وتنبسط العضلات بكفاءة وسرعة لتنفيذ الحركة المطلوبة.

---

### 2. أنواع العضلات وحركتها
- **العضلات الإرادية:** عضلات ترتبط بالهيكل العظمي وتتحرك بأمر من عقلك (مثل عضلات الذراعين، الفخذين، والرقبة).
  - تعمل في **أزواج متقابلة**: عند ثني الذراع تنقبض العضلة الأمامية (البايسبس) وتنبسط العضلة الخلفية (الترايسبس).
- **العضلات اللاإرادية:** تعمل ذاتياً ليلاً ونهاراً:
  - **عضلة القلب:** تضخ الدم بدون توقف.
  - **عضلات الجهاز الهضمي والأوعية الدموية:** تدفع الطعام بحركة دودية وتضبط ضغط الدم.

---

### 3. الجهاز الإخراجي والتخلص من السموم
- **الكليتان:** العضو الرئيسي؛ تحتوي كل كلية على حوالي مليون **نيفرون** يقوم بترشيح الدم واستخلاص اليوريا والأملاح الزائدة وتصريفها في البول.
- **الجلد:** يفرز العرق المحمل بالماء والأملاح للمساعدة في تبريد الجسم والتخلص من الفضلات.
- **الرئتان:** تطرد غاز ثاني أكسيد الكربون وبخار الماء الناتج عن التنفس الخلوي.
`,
    assessment: {
      id: 'assess-sci6-2',
      titleAr: 'تقييم المحاضرة 2: الجسم كنظام متكامل',
      titleEn: 'Assessment 2: The Body as a System',
      passingScore: 80,
      questions: [
        {
          id: 'q-s6-2-1',
          textAr: 'أي من التالي يعد مثالاً على عضلة لاإرادية في جسم الإنسان؟',
          textEn: 'Which of the following is an example of an involuntary muscle?',
          optionsAr: ['عضلة الذراع', 'عضلة الفخذ', 'عضلة القلب', 'عضلة الرقبة'],
          optionsEn: ['Arm muscle', 'Thigh muscle', 'Heart muscle (Cardiac)', 'Neck muscle'],
          correctIndex: 2,
          conceptTestedAr: 'التمييز بين العضلات الإرادية واللاإرادية',
          conceptTestedEn: 'Voluntary vs Involuntary Muscles',
          difficulty: 'easy',
          explanationAr: 'عضلة القلب عضلة لاإرادية تنبض تلقائياً ومستمرة دون تحكم واعٍ من الإنسان.',
          explanationEn: 'Cardiac muscle functions involuntarily, pumping continuously without conscious effort.'
        },
        {
          id: 'q-s6-2-2',
          textAr: 'ما هي الوحدات المجهرية داخل الكلى المسؤولة عن فلترة وترشيح الدم من الفضلات؟',
          textEn: 'What are the microscopic functional units in kidneys that filter blood?',
          optionsAr: ['الحويصلات الهوائية', 'النيفرونات', 'الصفائح الدموية', 'الشعيرات الجذرية'],
          optionsEn: ['Alveoli', 'Nephrons', 'Platelets', 'Root hairs'],
          correctIndex: 1,
          conceptTestedAr: 'تركيب الكلية ووظيفة النيفرونات',
          conceptTestedEn: 'Kidney Structure & Nephron Function',
          difficulty: 'medium',
          explanationAr: 'النيفرونات هي وحدات الترشيح المجهرية المتخصصة في تنقية الدم داخل الكليتين.',
          explanationEn: 'Nephrons are the microscopic filtering units inside kidneys.'
        },
        {
          id: 'q-s6-2-3',
          textAr: 'كيف تعمل عضلات الذراع الهيكلية عند ثني المفصل؟',
          textEn: 'How do skeletal arm muscles operate when bending the joint?',
          optionsAr: [
            'تنبسط العضلتان معاً في نفس الوقت',
            'تنقبض إحدى العضلات بينما تنبسط العضلة المقابلة لها في تناسق',
            'تعمل عضلة واحدة فقط ولا توجد عضلات مقابلة',
            'تتوقف العضلات عن العمل وتتحرك العظام فقط'
          ],
          optionsEn: [
            'Both muscles relax simultaneously',
            'One muscle contracts while the opposing muscle relaxes in coordination',
            'Only a single muscle works without an opponent',
            'Muscles stop working and bones move independently'
          ],
          correctIndex: 1,
          conceptTestedAr: 'عمل العضلات الهيكلية في أزواج',
          conceptTestedEn: 'Skeletal Muscles Operating in Pairs',
          difficulty: 'medium',
          explanationAr: 'تعمل العضلات في أزواج متضادة متكاملة: إحداهما تنقبض والأخرى تنبسط لإتمام الحركة.',
          explanationEn: 'Skeletal muscles work in antagonistic pairs: one contracts while the other relaxes.'
        }
      ]
    }
  },

  // ── LECTURE 3: THERMAL ENERGY & HEAT TRANSFER ──
  {
    id: 'psci-g6-3',
    order: 3,
    titleAr: 'المحاضرة 3: الطاقة الحرارية وطرق انتقال الحرارة والمواد الموصلة والعازلة',
    titleEn: 'Lecture 3: Thermal Energy, Heat Transfer, and Conductors vs Insulators',
    subtitleAr: 'حركة الجسيمات والطاقة الحركية، طرق انتقال الحرارة الثلاث (التوصيل، الحمل، الإشعاع)، وتطبيقات العزل الحراري.',
    subtitleEn: 'Particle motion, kinetic energy, 3 modes of heat transfer (conduction, convection, radiation), & insulation.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - العلوم المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Science',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المفهوم الثالث: الطاقة الحرارية وحالات المادة',
    unitTitleEn: 'Concept 3: Thermal Energy & States of Matter',
    lessonNumberAr: 'الدرس 3: انتقال الحرارة وتطبيقاتها',
    lessonNumberEn: 'Lesson 3: Heat Transfer & Applications',

    warmupHookAr: 'عندما تضع ملعقة معدنية في كوب شاي ساخن، تجد بعد ثوانٍ أن طرف الملعقة العلوي أصبح ساخناً أيضاً، بينما إذا استخدمت ملعقة خشبية تظل باردة ومريحة ليدك! كيف تنتقل الحرارة عبر المواد؟ ولماذا تدفئنا أشعة الشمس رغم أنها تسافر ملايين الكيلومترات في فراغ الفضاء الخارجي؟',
    warmupHookEn: 'When placing a metal spoon in hot tea, its handle quickly heats up, while a wooden spoon stays cool! How does heat travel through matter, and how does sunlight warm Earth across millions of kilometers of vacuum?',

    learningOutcomesAr: [
      'أن يوضح الطالب أن الطاقة الحرارية هي مجموع طاقات حركة جميع جزيئات المادة.',
      'أن يميز بين طرق انتقال الحرارة الثلاث: التوصيل في المواد الصلبة، الحمل في السوائل والغازات، والإشعاع عبر الفراغ والأوساط.',
      'أن يصنف المواد إلى موصلات حرارية جيدة (مثل النحاس والألمنيوم) ومواد عازلة للحرارة (مثل البلاستيك والخشب والهواء).',
      'أن يطبق مفاهيم العزل الحراري في تفسير تصميم أواني الطهي، والملابس الشتوية، وترمس حفظ المشروبات.'
    ],
    learningOutcomesEn: [
      'Explain that thermal energy represents the total kinetic energy of particles.',
      'Distinguish the three modes of heat transfer: Conduction (solids), Convection (fluids), and Radiation (waves through vacuum).',
      'Classify materials into thermal conductors (copper, aluminum) and insulators (plastics, wood, air).',
      'Apply thermal insulation concepts to cookware handles, winter garments, and vacuum flasks.'
    ],

    vocabulary: [
      {
        termAr: 'التوصيل الحراري (Thermal Conduction)',
        termEn: 'Conduction',
        definitionAr: 'انتقال الحرارة عبر الأجسام الصلبة المادية من الطرف الساخن إلى الطرف البارد عن طريق تلامس الجسيمات.',
        definitionEn: 'Heat transfer through solids via direct particle-to-particle physical collisions.'
      },
      {
        termAr: 'الحمل الحراري (Thermal Convection)',
        termEn: 'Convection',
        definitionAr: 'انتقال الحرارة خلال السوائل والغازات نتيجة صعود التيارات الساخنة الأقل كثافة وهبوط التيارات الباردة الأكثر كثافة.',
        definitionEn: 'Heat transfer in fluids (liquids and gases) through circulation of hotter buoyant particles.'
      },
      {
        termAr: 'الإشعاع الحراري (Thermal Radiation)',
        termEn: 'Radiation',
        definitionAr: 'انتقال الطاقة الحرارية في صورة موجات كهرومغناطيسية دون الحاجة إلى وسط مادي (كالوصول من الشمس إلى الأرض).',
        definitionEn: 'Heat transfer through electromagnetic waves requiring no physical medium (e.g. sunlight).'
      },
      {
        termAr: 'العوازل الحرارية (Thermal Insulators)',
        termEn: 'Thermal Insulators',
        definitionAr: 'مواد تبطئ وتعيق سريان وانتقال الحرارة خلالها بصورة كبيرة (مثل الخشب والبلاستيك والزجاج المزدوج والصوف).',
        definitionEn: 'Materials that impede and resist the flow of thermal energy (wood, air, plastics, wool).'
      }
    ],

    keyConceptsAr: [
      'الحرارة تنتقل دائماً وبصورة طبيعية من الجسم الأعلى في درجة الحرارة (الأسخن) إلى الجسم الأقل (الأبرد).',
      'طرق انتقال الحرارة ثلاثة: التوصيل (في المواد الصلبة)، الحمل (في السوائل والغازات)، والإشعاع (في الفراغ والأوساط).',
      'تعتمد كفاءة العوازل على حبس الهواء الساكن (مثل النوافذ ذات الزجاج المزدوج أو الفايبر والملابس الصوفية).'
    ],
    keyConceptsEn: [
      'Thermal energy naturally transfers from warmer regions to cooler regions.',
      'Three heat transfer mechanisms: Conduction (solids), Convection (fluids), and Radiation (vacuum & space).',
      'Insulation effectiveness relies heavily on trapping pockets of stagnant air (double glazing, wool).'
    ],

    summaryAr: 'تعرفنا في هذا الدرس على طبيعة الطاقة الحرارية، والآليات الفيزيائية الثلاث لانتقال الحرارة (توصيل، حمل، إشعاع)، والتطبيقات التكنولوجية في العوازل والموصلات الحرارية.',
    summaryEn: 'We learned the nature of thermal energy, the three distinct mechanisms of heat transfer, and practical engineering of thermal insulation.',

    mainContentAr: `
### 1. ما هي الطاقة الحرارية؟
- جميع المواد تتكون من جسيمات (ذرات وجزيئات) في حالة حركة واهتزاز مستمر.
- **الحرارة:** كلما اكتسبت المادة طاقة، زادت سرعة واهتزاز جسيماتها، مما يؤدي إلى ارتفاع درجة حرارتها.
- **اتجاه انتقال الحرارة:** تنتقل دائماً من الجسم الساخن إلى الجسم البارد حتى يصلا إلى **الاتزان الحراري** (تساوي درجتي الحرارة).

---

### 2. طرق انتقال الحرارة الثلاث
1. **التوصيل (Conduction):**
   - يحدث في **المواد الصلبة**.
   - تتصادم الجسيمات الساخنة وتهتز فتنقل طاقتها للجسيمات المجاورة دون أن تنتقل الجسيمات من مكانها.
   - مثال: تسخين طرف سيخ حديد أو ملعقة معدنية في وعاء ساخن.

2. **الحمل (Convection):**
   - يحدث في **الموائع (السوائل والغازات)**.
   - عندما يسخن السائل أو الغاز، يتمدد وتقل كثافته فيصعد لأعلى، ويهبط المائع البارد الأكثر كثافة ليحل محله؛ فتتكون **تيارات الحمل**.
   - مثال: غليان الماء في إبريق، وحركة هواء الدفاية والتكييف في الغرفة.

3. **الإشعاع (Radiation):**
   - انتقال الحرارة عبر موجات كهرومغناطيسية **دون الحاجة إلى وسط مادي ملموس**.
   - يمكن للحرارة السفر عبر الفراغ التام.
   - مثال: وصول حرارة الشمس إلى الأرض، والحرارة المنبعثة من المدفأة أو المصباح الكهربائي.

---

### 3. الموصلات والعوازل الحرارية وتطبيقاتها
- **الموصلات الجيدة:** معادن تسمح بسريان الحرارة بسرعة وكفاءة (النحاس، الألمنيوم، الحديد) $\\implies$ تُصنع منها قدور وأواني الطهي وأجهزة التبريد.
- **العوازل الجيدة:** مواد تمنع أو تبطئ تدفق الحرارة (الخشب، السيليكون، البلاستيك، الهواء، الفلين) $\\implies$ تُصنع منها مقابض أواني الطهي، والملابس الثقيلة، والعوازل في جدران المنازل.
`,
    assessment: {
      id: 'assess-sci6-3',
      titleAr: 'تقييم المحاضرة 3: الطاقة الحرارية وانتقال الحرارة',
      titleEn: 'Assessment 3: Thermal Energy & Heat Transfer',
      passingScore: 80,
      questions: [
        {
          id: 'q-s6-3-1',
          textAr: 'كيف تصل حرارة الشمس عبر الفراغ الشاسع في الفضاء الخارجي إلى سطح كوكب الأرض؟',
          textEn: 'How does heat from the sun travel across the vacuum of space to reach Earth?',
          optionsAr: ['عن طريق التوصيل المادي', 'عن طريق تيارات الحمل السائلة', 'عن طريق الإشعاع الحراري', 'عن طريق النقل الميكانيكي'],
          optionsEn: ['Through physical conduction', 'Through liquid convection currents', 'Through thermal radiation', 'Through mechanical transport'],
          correctIndex: 2,
          conceptTestedAr: 'انتقال الحرارة بالإشعاع عبر الفراغ',
          conceptTestedEn: 'Heat Transfer via Radiation across Vacuum',
          difficulty: 'easy',
          explanationAr: 'الإشعاع الحراري هو الطريقة الوحيدة التي يمكن للحرارة الانتقال بها في الفراغ دون الحاجة إلى وسط مادي.',
          explanationEn: 'Radiation is the only mechanism allowing heat transfer through empty space.'
        },
        {
          id: 'q-s6-3-2',
          textAr: 'عند غليان حساء في قدر على الموقد، ما الطريقة الرئيسية التي تسخن بها أجزاء السائل في أعلى القدر؟',
          textEn: 'When boiling soup, which mechanism carries heat to fluid at the top of the pot?',
          optionsAr: ['الحمل الحراري بصعود السائل الساخن الأقل كثافة', 'التوصيل المغناطيسي', 'الإشعاع النووي', 'التجمد السريع'],
          optionsEn: ['Convection through buoyant hotter fluid rising', 'Magnetic conduction', 'Nuclear radiation', 'Flash freezing'],
          correctIndex: 0,
          conceptTestedAr: 'انتقال الحرارة بالحمل في السوائل',
          conceptTestedEn: 'Heat Transfer via Convection in Liquids',
          difficulty: 'medium',
          explanationAr: 'يسخن السائل في القاع وتقل كثافته فيرتفع لأعلى، ويهبط السائل البارد مكانه مكوناً تيارات حمل حراري.',
          explanationEn: 'Warmed fluid becomes less dense, rising to the top in convection currents.'
        },
        {
          id: 'q-s6-3-3',
          textAr: 'لماذا تُصنع مقابض أواني الطهي من البلاستيك أو الخشب؟',
          textEn: 'Why are cookware handles manufactured from plastic or wood?',
          optionsAr: [
            'لأنها مواد جيدة التوصيل للحرارة تسخن بسرعة',
            'لأنها مواد رديئة التوصيل (عازلة للحرارة) فتحمي أيدينا من الاحتراق',
            'لزيادة وزن الإناء على الموقد',
            'لأنها تساعد في طهي الطعام أسرع'
          ],
          optionsEn: [
            'Because they are good conductors heating rapidly',
            'Because they are thermal insulators protecting hands from burns',
            'To add unnecessary weight',
            'To accelerate cooking time'
          ],
          correctIndex: 1,
          conceptTestedAr: 'تطبيقات العوازل الحرارية',
          conceptTestedEn: 'Applications of Thermal Insulators',
          difficulty: 'easy',
          explanationAr: 'الخشب والبلاستيك من العوازل الحرارية التي لا تنقل الحرارة بسهولة فتحمي اليدين.',
          explanationEn: 'Wood and plastics are thermal insulators that resist heat transfer, preventing burns.'
        }
      ]
    }
  },

  // ── LECTURE 4: ATMOSPHERE, WATER CYCLE & WEATHER ──
  {
    id: 'psci-g6-4',
    order: 4,
    titleAr: 'المحاضرة 4: الغلاف الجوي ودورة المياه والطقس والمناخ',
    titleEn: 'Lecture 4: Atmosphere, The Water Cycle, Weather, and Climate Systems',
    subtitleAr: 'مراحل دورة المياه (التبخر، التكثف، الهطول، الجريان السطحي)، العوامل المؤثرة في الطقس، وضغط الهواء، وتأثير الطاقة الشمسية.',
    subtitleEn: 'Stages of the water cycle, factors affecting weather, atmospheric pressure, and solar radiation.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - العلوم المنهج المطور',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Modern Science',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المفهوم الرابع: الطقس والمناخ وحركة المياه',
    unitTitleEn: 'Concept 4: Weather, Climate & Water Dynamics',
    lessonNumberAr: 'الدرس 4: دورة المياه والعوامل الجوية',
    lessonNumberEn: 'Lesson 4: Water Cycle & Meteorology',

    warmupHookAr: 'قطرة الماء التي شربتها في كوبك اليوم، قد تكون سقطت مطراً على ديناصور قبل مائة مليون عام، ثم تبخرت إلى السحب وعادت مجدداً للأنهار! ما القوة العملاقة التي تحرك تريليونات الأطنان من الماء والرياح حول كوكبنا كل يوم؟ إنها الطاقة الشمسية ودورة المياه العظمى!',
    warmupHookEn: 'The water droplet you drink today might have fallen as rain on dinosaurs 100 million years ago, evaporated into clouds, and flowed into rivers! What cosmic powerhouse cycles trillions of tons of water and wind across Earth? Solar energy and the Water Cycle!',

    learningOutcomesAr: [
      'أن يوضح الطالب مراحل دورة المياه الطبيعية: التبخر، النتح في النبات، التكثف لتكوين السحب، الهطول، والجريان السطحي.',
      'أن يفسر دور الطاقة الشمسية كمحرك رئيسي ومصدر أساسي للطاقة في الغلاف الجوي ودورة المياه.',
      'أن يفرق بين مفهومي الطقس (حالة الجو لفترة قصيرة) والمناخ (متوسط حالة الجو لفترة زمنية طويلة).',
      'أن يشرح كيفية تشكل الرياح نتيجة التفاوت في درجات الحرارة والضغط الجوي بين المناطق المختلفة.'
    ],
    learningOutcomesEn: [
      'Illustrate natural water cycle stages: evaporation, transpiration, condensation, precipitation, runoff.',
      'Explain the sun\'s role as the primary engine driving atmospheric dynamics and water cycling.',
      'Distinguish weather (short-term conditions) from climate (long-term historical atmospheric pattern).',
      'Explain wind generation arising from temperature and pressure gradients across regions.'
    ],

    vocabulary: [
      {
        termAr: 'دورة المياه (The Water Cycle)',
        termEn: 'Water Cycle (Hydrologic Cycle)',
        definitionAr: 'حركة الماء المستمرة بين سطح الأرض والغلاف الجوي عبر التبخر والتكثف والهطول بفعل الطاقة الشمسية والجاذبية.',
        definitionEn: 'The continuous movement of water on, above, and below Earth\'s surface driven by solar energy.'
      },
      {
        termAr: 'النَّتْح (Transpiration)',
        termEn: 'Transpiration',
        definitionAr: 'تبخر وخروج الماء الزائد من أوراق النباتات عبر فتحات الثغور إلى الغلاف الجوي.',
        definitionEn: 'The release and evaporation of water vapor from microscopic leaf pores (stomata) into the air.'
      },
      {
        termAr: 'الضغط الجوي (Atmospheric Pressure)',
        termEn: 'Atmospheric Pressure',
        definitionAr: 'وزن عمود الهواء الواقع على وحدة المساحة من سطح الأرض، ويقل كلما ارتفعنا لأعلى فوق مستوى سطح البحر.',
        definitionEn: 'The weight of air exerting force per unit area, decreasing with increasing altitude.'
      },
      {
        termAr: 'المناخ (Climate)',
        termEn: 'Climate',
        definitionAr: 'متوسط الظروف الجوية (الحرارة، الرطوبة، الأمطار) في منطقة جغرافية معينة على مدى فترة زمنية طويلة (30 عاماً أو أكثر).',
        definitionEn: 'The average weather patterns of an area over an extended period (typically 30+ years).'
      }
    ],

    keyConceptsAr: [
      'الشمس هي المحرك الأساسي لدورة المياه ولحركة الرياح على كوكب الأرض.',
      'تساهم النباتات بنحو 10% من بخار الماء في الغلاف الجوي عن طريق عملية النتح من الثغور.',
      'الرياح تهب دائماً من مناطق الضغط الجوي المرتفع (الباردة) إلى مناطق الضغط الجوي المنخفض (الدافئة).',
      'الطقس يصف حالة الجو يومياً، بينما المناخ يصف النمط العام لسنوات طويلة.'
    ],
    keyConceptsEn: [
      'The sun is the primary engine driving evaporation, precipitation, and global atmospheric circulation.',
      'Vegetation contributes roughly 10% of atmospheric moisture via stomatal transpiration.',
      'Winds consistently blow from high-pressure (cooler) regions toward low-pressure (warmer) regions.',
      'Weather reflects daily conditions; climate represents long-term regional statistical patterns.'
    ],

    summaryAr: 'استعرضنا في هذه المحاضرة فيزياء دورة المياه، وأهمية الطاقة الشمسية والجاذبية في تحريك الكتل المائية والهوائية، والفرق الجوهري بين الطقس والمناخ وتكون الرياح.',
    summaryEn: 'We studied the thermodynamics of the water cycle, solar driven atmospheric circulation, and the difference between weather and climate.',

    mainContentAr: `
### 1. مراحل دورة المياه في الطبيعة
تحرك طاقتان عظيمتان دورة المياه: **طاقة الشمس الحرارية** (ترفع الماء لأعلى) و**قوة الجاذبية الأرضية** (تسحب الماء لأسفل):
1. **التبخر (Evaporation):** تسخن الشمس مياه البحار والأنهار فتتحول المياه السائلة إلى بخار ماء غير مرئي يرتفع لأعلى.
2. **النتح (Transpiration):** خروج بخار الماء من مسام أوراق النباتات (يمثل نحو 10% من رطوبة الجو).
3. **التكثف (Condensation):** عندما يصعد بخار الماء لطبقات الجو العليا الباردة، يفقد حرارته ويتحول إلى قطرات ماء دقيقة تلتف حول جزيئات الغبار مكونة **السحب والغيوم**.
4. **الهطول (Precipitation):** عندما تصبح قطرات الماء في السحب ثقيلة جداً تسقط بفعل الجاذبية في صورة أمطار أو ثلوج أو بَرَد.
5. **الجريان السطحي والرشح (Runoff & Infiltration):** تجري المياه على الأرض عائدة إلى الأنهار والمحيطات أو تتسرب إلى باطن الأرض لتكون المياه الجوفية.

---

### 2. نشأة الرياح ودور الضغط الجوي
- عندما تسخن الشمس منطقة ما من الأرض، يسخن الهواء فوقها وتقل كثافته فيرتفع لأعلى مكوناً **منطقة ضغط جوي منخفض**.
- الهواء في المناطق الأبرد يكون أكثر برودة وكثافة فيهبط لأسفل مكوناً **منطقة ضغط جوي مرتفع**.
- **الرياح:** هي حركة الهواء الأفقي المتدفق من مناطق الضغط المرتفع إلى مناطق الضغط المنخفض لإعادة التوازن.

---

### 3. الفرق بين الطقس والمناخ
- **الطقس (Weather):** حالة الجو في مكان وزمان محددين لفترة **قصيرة** (ساعات أو أيام أو أسبوع) مثل: مشمس، ممطر، دافئ اليوم.
- **المناخ (Climate):** متوسط حالة الطقس لمنطقة جغرافية واسعة على مدى فترة **طويلة جداً** (عقود وسنوات) مثل: مناخ مصر حار جاف صيفاً معتدل ممطر شتاءً.
`,
    assessment: {
      id: 'assess-sci6-4',
      titleAr: 'تقييم المحاضرة 4: دورة المياه والطقس والمناخ',
      titleEn: 'Assessment 4: The Water Cycle & Weather Systems',
      passingScore: 80,
      questions: [
        {
          id: 'q-s6-4-1',
          textAr: 'ما هي العملية التي يفقد فيها النبات الماء في صورة بخار عبر ثغور أوراقه؟',
          textEn: 'What process describes plants releasing water vapor through leaf stomata?',
          optionsAr: ['التكثف', 'النتح', 'الهطول', 'التجمد'],
          optionsEn: ['Condensation', 'Transpiration', 'Precipitation', 'Freezing'],
          correctIndex: 1,
          conceptTestedAr: 'عملية النتح في النبات',
          conceptTestedEn: 'Plant Transpiration',
          difficulty: 'easy',
          explanationAr: 'النتح هو خروج وتبخر الماء الزائد من ثغور النبات إلى الغلاف الجوي.',
          explanationEn: 'Transpiration is the evaporation of excess water through leaf stomata.'
        },
        {
          id: 'q-s6-4-2',
          textAr: 'كيف تهب وتتحرك الرياح على سطح الأرض بين مناطق الضغط الجوي؟',
          textEn: 'How does wind move between atmospheric pressure systems across Earth?',
          optionsAr: [
            'من مناطق الضغط المرتفع إلى مناطق الضغط المنخفض',
            'من مناطق الضغط المنخفض إلى مناطق الضغط المرتفع',
            'في مسارات عشوائية لا ترتبط بالضغط الجوي',
            'من الأماكن الساخنة فقط إلى الأماكن الأكثر حرارة'
          ],
          optionsEn: [
            'From high-pressure areas toward low-pressure areas',
            'From low-pressure areas toward high-pressure areas',
            'In random paths unrelated to pressure',
            'Exclusively between hot areas'
          ],
          correctIndex: 0,
          conceptTestedAr: 'آلية هبوب الرياح وفروق الضغط الجوي',
          conceptTestedEn: 'Wind Generation from Pressure Gradients',
          difficulty: 'medium',
          explanationAr: 'تتحرك الرياح طبيعياً من كتل الضغط المرتفع الباردة نحو كتل الضغط المنخفض الدافئة.',
          explanationEn: 'Winds naturally flow down the pressure gradient from high to low pressure.'
        },
        {
          id: 'q-s6-4-3',
          textAr: 'ما الفرق الزمني الأساسي بين مفهومي "الطقس" و"المناخ"؟',
          textEn: 'What is the primary temporal distinction between weather and climate?',
          optionsAr: [
            'الطقس يقاس في المحيطات والمناخ في اليابسة',
            'الطقس يصف حالة الجو لفترة قصيرة (أيام)، بينما المناخ يصف متوسط حالة الجو لفترة زمنية طويلة (سنوات)',
            'لا يوجد أي فرق بينهما وهما كلمتان لنفس المفهوم',
            'الطقس يختص بالأمطار فقط بينما المناخ يختص بالرياح فقط'
          ],
          optionsEn: [
            'Weather applies to oceans while climate applies to land',
            'Weather reflects short periods (days), whereas climate averages patterns over extended years',
            'They are identical synonymous terms',
            'Weather strictly tracks rain while climate tracks wind'
          ],
          correctIndex: 1,
          conceptTestedAr: 'الفرق بين الطقس والمناخ',
          conceptTestedEn: 'Distinction Between Weather & Climate',
          difficulty: 'easy',
          explanationAr: 'الطقس حالة مؤقتة يومية، بينما المناخ متوسط إحصائي ممتد لعقود وسنوات.',
          explanationEn: 'Weather describes day-to-day conditions; climate tracks multi-decadal historical patterns.'
        }
      ]
    }
  }
];
