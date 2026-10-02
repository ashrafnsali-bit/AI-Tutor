import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL BIOLOGY — GRADE 11 (أحياء الصف الثاني الثانوي - لغات وعربي)
// Official Grade 11 / Secondary 2 National Ministry & Language School Curriculum Alignment:
// Unit 1: Nutrition & Digestion in Living Organisms (Autotrophic photosynthesis, Chloroplast, Human Digestive Enzymes & Absorption)
// Unit 2: Transport in Living Organisms (Plant Xylem/Phloem & Cohesion theory; Human Cardiovascular, Heart, Blood Clotting & Lymph)
// Unit 3: Cellular Respiration (Glycolysis, Krebs Cycle, Electron Transport Chain, ATP Yield & Anaerobic Fermentation)
// Unit 4: Excretion in Living Organisms (Skin, Kidneys, Nephron filtration, Artificial Dialysis, Liver & Plant Guttation)
// Unit 5: Sensation & Nervous Coordination (Neuron, Nerve Impulse Action Potential, Synapse, Reflex Arc & Plant Auxin Tropisms)
// ============================================================================

export const HIGH_BIO_G11_LECTURES: Lecture[] = [
  // ── LECTURE 1: NUTRITION & DIGESTION ──
  {
    id: 'h11-bio-1',
    order: 1,
    titleAr: 'المحاضرة 1: التغذية والهضم في الكائنات الحية: البناء الضوئي في النبات والجهاز الهضمي في الإنسان',
    titleEn: 'Lecture 1: Nutrition & Digestion: Autotrophic Photosynthesis in Plants & Human Digestive System',
    subtitleAr: 'تركيب البلاستيدة الخضراء، التفاعلات الضوئية (الجرانا) واللاضوئية (دورة كالفن في الستروما)، تركيب الجهاز الهضمي البشري، عمل الإنزيمات الهاضمة، والامتصاص في الخملات',
    subtitleEn: 'Master chloroplast anatomy, light reactions in grana, dark reactions (Calvin cycle) in stroma, human digestive tract enzymes (amylase, pepsin, trypsin, lipase), and intestinal villi nutrient absorption.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Biology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: التغذية والهضم في الكائنات الحية',
    unitTitleEn: 'Unit 1: Nutrition & Digestion in Living Organisms',
    lessonNumberAr: 'الدرس 1: التغذية الذاتية وغير الذاتية',
    lessonNumberEn: 'Lesson 1: Autotrophic & Heterotrophic Nutrition',

    keyConceptsAr: [
      'التغذية الذاتية (Autotrophic) وتركيب البلاستيدة الخضراء (أصباغ الكلوروفيل أ، ب، الكاروتين، والزانثوفيل)',
      'تفاعلات البناء الضوئي: التفاعلات الضوئية في الجرانا (انشطار الماء وتكوين $\\text{ATP}$ و $\\text{NADPH}$) والتفاعلات اللاضوئية في الستروما (تثبيت $\\text{CO}_2$ وتكوين $\\text{PGAL}$ ثم الجلوكوز)',
      'التغذية غير الذاتية (Heterotrophic) في الإنسان والإنزيمات الهاضمة (التايالين، الببسين في المعدة، التربسين والليبيز والبنكرياس)',
      'العصارة الصفراوية واستحلاب الدهون، وتركيب الخملات (Villi) والامتصاص عبر الطريق الدموي والطريق الليمفاوي'
    ],
    keyConceptsEn: [
      'Autotrophic nutrition and chloroplast pigments (chlorophyll a, b, carotene, xanthophyll)',
      'Photosynthesis light reactions in grana (photolysis of water, ATP & NADPH formation) and dark Calvin cycle in stroma (PGAL & glucose synthesis)',
      'Human digestive enzymes: salivary amylase (ptyalin), gastric pepsin, pancreatic trypsin, amylase, lipase, and intestinal peptidases',
      'Bile emulsification of lipids, and villi absorption via bloodstream (sugars, amino acids) vs lymphatic route (fatty acids, glycerol, vit A, D, E, K)'
    ],

    conceptMapAr: [
      'التغذية ➔ ذاتية (نبات: بلاستيدة + ماء + $\\text{CO}_2$) / غير ذاتية (إنسان: هضم وامتصاص)',
      'البناء الضوئي ➔ تفاعلات ضوئية (جرانا $\\to \\text{O}_2 + \\text{ATP} + \\text{NADPH}$) ➔ لاضوئية (ستروما $\\to \\text{PGAL}$)',
      'الهضم في الإنسان ➔ الفم (نشويات) ➔ المعدة (بروتينات) ➔ الأمعاء الدقيقة (هضم كلي وامتصاص بالخملات)'
    ],
    conceptMapEn: [
      'Nutrition ➔ Autotrophic (Plants: Chloroplast + Light + CO2) / Heterotrophic (Humans: Digestion & Absorption)',
      'Photosynthesis ➔ Light in Grana (Water photolysis) ➔ Dark in Stroma (Calvin Cycle & PGAL)',
      'Human Digestion ➔ Mouth (Starches) ➔ Stomach (Proteins) ➔ Small Intestine (Complete breakdown & Villi absorption)'
    ],

    learningOutcomesAr: [
      'تتبع خطوات البناء الضوئي ومقارنة نواتج التفاعلات الضوئية واللاضوئية وتجربة كالفن وطحلب الكلوريلا.',
      'تحديد الإنزيمات الهاضمة ومصادر إفرازها ونطاق عملها والوسط المناسب للرقم الهيدروجيني ($\\text{pH}$).',
      'التمييز بين الطريق الدموي والطريق الليمفاوي لامتصاص نواتج الهضم في الأمعاء الدقيقة.'
    ],
    learningOutcomesEn: [
      'Trace photosynthesis biochemical pathways and Melvin Calvin chlorella algae experiment.',
      'Identify digestive enzymes, substrates, optimal pH, and end products across the GI tract.',
      'Distinguish blood capillary vs lymphatic lacteal absorption routes for digested nutrients.'
    ],

    vocabulary: [
      { termAr: 'مركب PGAL', termEn: 'Phosphoglyceraldehyde (PGAL)', definitionAr: 'أول مركب كيميائي ثابت ناتج عن عملية البناء الضوئي يتكون من 3 ذرات كربون، ويُستخدم لبناء الجلوكوز والنشا والبروتينات والدهون.' },
      { termAr: 'الخملات', termEn: 'Intestinal Villi', definitionAr: 'انثناءات مجهرية في جدار اللفائفي بالأمعاء الدقيقة تزيد من مساحة سطح الامتصاص بحوالي 5 أضعاف مساحة سطح الجسم.' }
    ],

    warmupHookAr: 'عند تناولك وجبة غداء غنية بالبروتينات والدهون والنشويات، كيف يتم تفكيك هذه الجزيئات العملاقة بدقة جزيئية وتحويلها إلى وقود يغذي خلايا دماغك وعضلاتك خلال 4 ساعات فقط؟ عبر سيمفونية من الإنزيمات الهاضمة وشبكة امتصاص ذكية تمتد لـ 32 متراً مربعاً داخل أمعائك!',
    warmupHookEn: 'How does your digestive tract dismantle giant complex proteins, fats, and starches into microscopic cellular fuel within hours? Through a biochemical cascade of specialized enzymes and 32 square meters of microvilli absorption surface area.',

    mainContentAr: `
### 1. آلية البناء الضوئي (Photosynthesis Mechanism)
1. **التفاعلات الضوئية (في الجرانا Grana):**
   * يمتص الكلوروفيل الطاقة الضوئية وينشط (كلوروفيل نشط).
   * تُستخدم الطاقة في:
     1. شطر جزيء الماء: $2\\text{H}_2\\text{O} \\xrightarrow{\\text{Light}} 4\\text{H}^+ + 4e^- + \\text{O}_2 \\uparrow$ (الأكسجين ناتج ثانوي).
     2. تثبيت الهيدروجين على مركب $\\text{NADP}^+$ ليتحول إلى $\\text{NADPH}_2$ لمنع هروبه.
     3. فسفرة ضوئية: تحويل $\\text{ADP} + \\text{P} \\to \\text{ATP}$.
2. **التفاعلات اللاضوئية (في الستروما Stroma - دورة كالفن):**
   * يُختزل غاز $\\text{CO}_2$ بواسطة الهيدروجين المحمول على $\\text{NADPH}_2$ وبمساعدة طاقة $\\text{ATP}$.
   * يتكون مركب **فسفوجليسرالدهيد (PGAL)** بعد ثانيتين فقط، ثم يتحول إلى جلوكوز.

---

### 2. هضم الطعام في جسم الإنسان (Human Digestive System)
* **الفم ($\text{pH} = 7.4$):** إنزيم الأميليز اللعابي (التايالين) يحلل النشا مائياً إلى سكر مالتوز (سكر شعير ثنائي).
* **المعدة ($\text{pH} = 1.5 - 2.5$):** حمض $\\text{HCl}$ ينشط الببسينوجين إلى **ببسين** يفكك البروتينات إلى سلاسل عديد الببتيد.
* **الأمعاء الدقيقة ($\text{pH} = 8$):**
  * **الصفراء:** تحول الدهون إلى مستحلب دهني.
  * **عصارة البنكرياس:** تربسين (بروتينات)، أميليز بنكرياسي (نشويات)، وليبيز (دهون $\\to$ أحماض دهنية وجليسرول).
* **طرق الامتصاص في الخملات:**
  * **الطريق الدموي:** ماء، أملاح معدنية، سكريات أحادية، أحماض أمينية، وفيتامينات ذائبة في الماء (B, C) $\\to$ الوريد البابي الكبدي $\\to$ الكبد $\\to$ الوريد الأجوف السفلي.
  * **الطريق الليمفاوي:** أحماض دهنية وجليسرول، وفيتامينات ذائبة في الدهون (A, D, E, K) $\\to$ الوعاء اللبني $\\to$ الجهاز الليمفاوي $\\to$ الوريد الأجوف العلوي.
    `,
    mainContentEn: `
### 1. Photosynthesis: Light vs Dark Reactions
* **Light (Grana):** Water photolysis ($H_2O \\to 2H^+ + \\frac{1}{2}O_2$), NADP+ reduction to NADPH, and ATP photophosphorylation.
* **Dark Calvin Cycle (Stroma):** CO2 reduction by NADPH using ATP to form PGAL (3-carbon intermediate) then glucose.

### 2. Human Digestion & Absorption
* Mouth (pH 7.4): Salivary amylase breaks starch to maltose.
* Stomach (pH 1.5-2.5): Pepsin breaks proteins to polypeptides.
* Small Intestine (pH 8.0): Complete digestion by trypsin, lipase, and peptidases.
* Absorption Routes: Blood capillary path vs Lymphatic lacteal route.
    `,

    diagramType: 'biology_diagram',
    diagramData: {
      type: 'chloroplast_and_villi',
      title: 'تركيب البلاستيدة الخضراء ومسار التفاعلات الضوئية واللاضوئية',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="200" cy="110" rx="170" ry="90" fill="#064e3b" stroke="#10b981" stroke-width="3" />
        <rect x="80" y="70" width="40" height="80" rx="6" fill="#10b981" />
        <text x="85" y="115" fill="#fff" font-size="12" font-weight="bold">جرانا</text>
        <text x="80" y="170" fill="#a7f3d0" font-size="11">تفاعلات ضوئية</text>
        <ellipse cx="280" cy="110" rx="60" ry="40" fill="#047857" stroke="#34d399" stroke-width="2" />
        <text x="260" y="115" fill="#fff" font-size="12" font-weight="bold">ستروما</text>
        <text x="245" y="170" fill="#a7f3d0" font-size="11">دورة كالفن (PGAL)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: مسار امتصاص فيتامين A وفيتامين C',
        titleEn: 'Example: Absorption Pathways of Vitamin A vs Vitamin C',
        problemAr: 'تتبع المسار التشريحي لامتصاص فيتامين (A) وفيتامين (C) من تجويف الأمعاء الدقيقة حتى وصولهما إلى القلب.',
        problemEn: 'Trace the anatomical absorption pathways of Vitamin A vs Vitamin C from intestinal lumen to the heart.',
        stepsAr: [
          'فيتامين (C) فيتامين ذائب في الماء: يمر عبر **الطريق الدموي** ➔ الشعيرات الدموية في الخملات ➔ الوريد البابي الكبدي ➔ الكبد ➔ الوريد الكبدي ➔ الوريد الأجوف السفلي ➔ الأذين الأيمن للقلب.',
          'فيتامين (A) فيتامين ذائب في الدهون: يمر عبر **الطريق الليمفاوي** ➔ الأوعية اللبنية داخل الخملات ➔ الأوعية الليمفاوية ➔ القناة الصدرية الليمفاوية ➔ الوريد الأجوف العلوي ➔ الأذين الأيمن للقلب.'
        ],
        stepsEn: [
          'Vitamin C (water-soluble) ➔ Blood capillaries ➔ Hepatic portal vein ➔ Liver ➔ Hepatic vein ➔ Inferior vena cava ➔ Right atrium.',
          'Vitamin A (fat-soluble) ➔ Central lacteals ➔ Lymphatic vessels ➔ Thoracic duct ➔ Superior vena cava ➔ Right atrium.'
        ],
        finalAnswerAr: 'فيتامين C يسلك الطريق الدموي عبر الكبد، وفيتامين A يسلك الطريق الليمفاوي عبر الوريد الأجوف العلوي.',
        finalAnswerEn: 'Vit C: Blood path via liver; Vit A: Lymphatic path via superior vena cava.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11bio-1',
        problemAr: 'علل: لا تهضم المعدة نفسها بالرغم من احتوائها على حمض الهيدروكلوريك وإنزيم الببسين القوي الهاضم للبروتينات.',
        problemEn: 'Explain why the stomach does not digest its own muscular wall despite acidic HCl and active pepsin.',
        solutionStepsAr: [
          '1) وجود إفرازات مخاطية كثيفة تبطن جدار المعدة الداخلي وتحميه من تأثير العصارة الهاضمة.',
          '2) يُفرز إنزيم الببسين في صورة غير نشطة (ببسينوجين Pepsinogen) ولا ينشط إلا داخل تجويف المعدة بعيداً عن الخلايا المفرزة بفعل حمض $\\text{HCl}$.'
        ],
        finalAnswerAr: 'بسبب الطبقة المخاطية الكثيفة الواقية، وإفراز الإنزيم في صورة غير نشطة (ببسينوجين).'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11bio-1',
        questionAr: 'أول مركب كيميائي ثابت ناتج عن عملية البناء الضوئي في تجربة كالفن هو:',
        questionEn: 'The first stable chemical intermediate produced in photosynthesis (Calvin experiment) is:',
        optionsAr: ['فسفوجليسرالدهيد (PGAL)', 'جلوكوز', 'سكروز', 'حمض الستريك'],
        optionsEn: ['Phosphoglyceraldehyde (PGAL)', 'Glucose', 'Sucrose', 'Citric acid'],
        correctIndex: 0,
        explanationAr: 'أثبت ملفين كالفن باستخدام نظير الكربون المشع C-14 أن مركب PGAL ثلاثي الكربون يتكون بعد ثانيتين فقط من الإضاءة.',
        explanationEn: 'Melvin Calvin proved 3-carbon PGAL forms within 2 seconds of illumination.'
      }
    ],

    assessment: {
      id: 'quiz-h11-bio1',
      titleAr: 'اختبار إتقان التغذية والهضم في الكائنات الحية',
      titleEn: 'Mastery Quiz: Nutrition & Digestion',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-bio1-1',
          textAr: 'مصدر غاز الأكسجين $\\text{O}_2$ المنطلق كناتج ثانوي أثناء عملية البناء الضوئي هو:',
          textEn: 'The source of oxygen gas released as a byproduct during photosynthesis is:',
          optionsAr: ['الماء (H₂O) بفعل الانشطار الضوئي', 'غاز ثاني أكسيد الكربون (CO₂)', 'الجلوكوز', 'مركب ATP'],
          optionsEn: ['Water (H2O) via photolysis', 'Carbon dioxide (CO2)', 'Glucose', 'ATP'],
          correctIndex: 0,
          conceptTestedAr: 'مصدر الأكسجين في البناء الضوئي (فان نيل ونظائر الأكسجين)',
          conceptTestedEn: 'Source of photosynthetic oxygen (Van Niel experiment)',
          explanationAr: 'أثبتت تجارب فان نيل وجامعة كاليفورنيا باستخدام نظير الأكسجين O-18 أن الأكسجين ينشأ من شطر جزيئات الماء وليس من CO2.',
          explanationEn: 'Van Niel and O-18 isotope experiments confirmed oxygen originates from H2O splitting.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-bio1-2',
          textAr: 'الوسط المناسب لعمل إنزيم الببسين في المعدة يجب أن يكون ذا رقم هيدروجيني (pH):',
          textEn: 'The optimal pH environment for gastric pepsin activity is:',
          optionsAr: ['حامضياً قوياً (1.5 - 2.5)', 'قاعدياً (8.0)', 'متعادلاً (7.0)', 'قلوياً قوياً (12.0)'],
          optionsEn: ['Strongly acidic (1.5 - 2.5)', 'Basic (8.0)', 'Neutral (7.0)', 'Strongly alkaline (12.0)'],
          correctIndex: 0,
          conceptTestedAr: 'الرقم الهيدروجيني للإنزيمات الهاضمة',
          conceptTestedEn: 'Optimal pH for digestive enzymes',
          explanationAr: 'يعمل الببسين في وسط حامضي قوي يوفره حمض الهيدروكلوريك HCl بين pH 1.5 إلى 2.5.',
          explanationEn: 'Gastric HCl creates an optimal strongly acidic pH of 1.5 - 2.5 for pepsin.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-bio1-3',
          textAr: 'المواد الغذائية التي يتم امتصاصها عبر الوعاء اللبني للخملات في الطريق الليمفاوي هي:',
          textEn: 'Nutrients absorbed through the central lacteals into the lymphatic pathway are:',
          optionsAr: ['الأحماض الدهنية والجليسرول وفيتامينات (A, D, E, K)', 'السكريات الأحادية وفيتامين C', 'الأحماض الأمينية والماء', 'أملاح الصوديوم واليوريا'],
          optionsEn: ['Fatty acids, glycerol & fat-soluble vitamins (A, D, E, K)', 'Monosaccharides & Vitamin C', 'Amino acids & water', 'Sodium salts & urea'],
          correctIndex: 0,
          conceptTestedAr: 'الطريق الليمفاوي للامتصاص',
          conceptTestedEn: 'Lymphatic absorption route in small intestine',
          explanationAr: 'الدهون والفيتامينات الذائبة في الدهون تسلك الطريق الليمفاوي عبر الأوعية اللبنية لتصب في الوريد الأجوف العلوي.',
          explanationEn: 'Lipid digestion products and vitamins A, D, E, K enter the lacteals into lymphatic drainage.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: TRANSPORT IN LIVING ORGANISMS ──
  {
    id: 'h11-bio-2',
    order: 2,
    titleAr: 'المحاضرة 2: النقل في الكائنات الحية: أوعية الخشب واللحاء، تشريح القلب، والدورة الدموية وتجلط الدم',
    titleEn: 'Lecture 2: Transport in Living Organisms: Plant Vascular Tissues & Human Cardiovascular Physiology',
    subtitleAr: 'نظريات صعود العصارة النيئة (قوى التماسك والتلاصق لـ ديكسون وجولي والنتح)، تشريح القلب والدورة الدموية الكبرى والصغرى، آلية تجلط الدم، وضغط الدم والجهاز الليمفاوي',
    subtitleEn: 'Master xylem sap ascent (Dixon-Joly cohesion-tension theory & transpiration pull), cardiac anatomy, heart cycle, pulmonary & systemic circulation, blood clotting cascade, and lymphatic immunity.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Biology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: النقل في الكائنات الحية',
    unitTitleEn: 'Unit 2: Transport in Living Organisms',
    lessonNumberAr: 'الدرس 2: النقل في النبات والإنسان',
    lessonNumberEn: 'Lesson 2: Transport in Plants & Humans',

    keyConceptsAr: [
      'النقل في النبات: أوعية الخشب (الماء والأملاح) وأنابيب اللحاء الغربالية (العصارة الناضجة / تجربة متلر)',
      'نظرية التماسك والتلاصق والشد الناشئ عن النتح (ديكسون وجولي Dixon & Joly) لصعود العصارة لقمم الأشجار الشاهقة',
      'تشريح القلب البشري: الأذينان، البطينان، الصمامات (ثنائي وثلاثي الشرفات، والصمامات الهلالية الأورطي والرئوي)، والعقدة الجيب أذينية (منظم ضربات القلب SA node)',
      'مكونات الدم: خلايا الدم الحمراء والبيضاء والصفائح الدموية، وآلية تجلط الدم (البروثرومبين $\\to$ الثرومبين $\\to$ الفيبرينوجين $\\to$ الفيبرين)',
      'الدورة الدموية الكبرى (الجهازية)، الصغرى (الرئوية)، الدورة الكبدية البابية، وضغط الدم (120/80 mmHg)'
    ],
    keyConceptsEn: [
      'Plant transport: Xylem vessels & tracheids vs phloem sieve tubes & companion cells (Mangler aphid experiment)',
      'Dixon & Joly Cohesion-Tension theory and transpiration pull mechanism lifting sap >100m',
      'Human heart anatomy: 4 chambers, atrioventricular & semilunar valves, and SA node pacemaker',
      'Blood composition and clotting cascade: Thromboplastin ➔ Prothrombin to Thrombin ➔ Fibrinogen to insoluble Fibrin mesh',
      'Systemic, pulmonary, and hepatic portal circulations; blood pressure measurement (120/80 mmHg)'
    ],

    conceptMapAr: [
      'النقل في النبات ➔ خشب (صعود الماء بنظرية ديكسون وجولي) + لحاء (نقل السكروز بنظرية التدفق الكتلي)',
      'القلب البشري ➔ عقدة جيب أذينية (إيقاع نبضي) ➔ انقباض الأذينين ثم البطينين ➔ الصمامات تمنع الرجوع',
      'تجلط الدم ➔ صفائح متكسرة $\\to$ ثرومبوبلاستين $\\to$ ثرومبين نشط $\\to$ شبكة فيبرين لإيقاف النزيف'
    ],
    conceptMapEn: [
      'Plant Transport ➔ Xylem (Transpiration pull & cohesion) + Phloem (Mass flow of sucrose)',
      'Human Heart ➔ SA Node pacemaker ➔ Cardiac contraction cycle ➔ Heart valves prevent backflow',
      'Hemostasis ➔ Platelets ➔ Thromboplastin ➔ Thrombin ➔ Insoluble Fibrin clot'
    ],

    learningOutcomesAr: [
      'شرح آلية صعود الماء والأملاح في أوعية الخشب حسب نظرية قوى التماسك والتلاصق.',
      'تتبع مسار قطرة الدم عبر الدورة الدموية الرئوية والجهازية والكبدية البابية.',
      'تفسير الخطوات الكيميائية الحيوية لتكوين الجلطة الدموية ودور فيتامين K والكالسيوم والكبد.'
    ],
    learningOutcomesEn: [
      'Explain water transport physics via Dixon-Joly cohesion, adhesion, and transpirational tension.',
      'Trace RBC flow through pulmonary, systemic, and hepatic portal circuits.',
      'Describe biochemical blood coagulation cascade and roles of Vitamin K, Calcium, and Heparin.'
    ],

    vocabulary: [
      { termAr: 'نظرية التماسك والتلاصق', termEn: 'Cohesion-Tension Theory', definitionAr: 'النظرية التي أثبتها ديكسون وجولي وتفسر صعود الماء لقمم الأشجار بفعل تماسك جزيئات الماء وتلاصقها بجدران الخشب وقوة الشد الناتجة عن النتح.' },
      { termAr: 'العقدة الجيب أذينية', termEn: 'Sinoatrial (SA) Node', definitionAr: 'كتلة متخصصة من الألياف العضلية القلبية تقع في جدار الأذين الأيمن تولد النبضات الكهربائية الذاتية وتعمل كمنظم ضربات القلب الطبيعي.' }
    ],

    warmupHookAr: 'كيف تستطيع أشجار السيكويا العملاقة التي يفوق ارتفاعها 115 متراً (أطول من ناطحة سحاب من 35 طابقاً) رفع مئات اللترات من الماء يومياً من التربة إلى قمم أوراقها في مواجهة الجاذبية الأرضية دون وجود أي مضخة ميكانيكية؟ عبر معجزة فيزيائية تجمع بين قوى التماسك لجزيئات الماء وظاهرة النتح بالأوراق!',
    warmupHookEn: 'How do giant 115-meter Redwood trees pump hundreds of liters of water daily to top foliage against gravity without mechanical pumps? Through the physics of water hydrogen bonding cohesion and solar-driven transpiration pull.',

    mainContentAr: `
### 1. صعود العصارة النيئة في النبات (Xylem Sap Ascent)
* **نظرية ديكسون وجولي (Dixon & Joly Theory):**
  1. **قوى التماسك (Cohesion):** بين جزيئات الماء وبعضها داخل أوعية الخشب لتكوين عمود متصل من الماء.
  2. **قوى التلاصق (Adhesion):** بين جزيئات الماء والجدران السليلوزية واللجنينية لأوعية الخشب لمقاومة الجاذبية.
  3. **قوة الشد الناشئة عن النتح (Transpiration Pull):** بخر الماء من ثغور الأوراق يولد ضغطاً سالباً يسحب عمود الماء لأعلى باستمرار.

---

### 2. الدورة الدموية وآلية تجلط الدم في الإنسان (Blood Circulation & Clotting)
* **مكونات القلب:** 4 غرف، الصمام ثنائي الشرفات (الميترالي) بين الأذين الأيسر والبطين الأيسر، والصمام ثلاثي الشرفات في الجانب الأيمن.
* **شلال التجلط (Blood Clotting Cascade):**
  1. $\\text{الصفائح الدموية المتكسرة} + \\text{الخلايا التالفة} + \\text{عوامل التجلط} \\xrightarrow{\\text{Ca}^{2+}} \\text{ثرومبوبلاستين (Thromboplastin)}$.
  2. $\\text{بروثرومبين (من الكبد بمساعدة فيتامين K)} \\xrightarrow{\\text{ثرومبوبلاستين + } \\text{Ca}^{2+}} \\text{ثرومبين (إنزيم نشط)}$.
  3. $\\text{فيبرينوجين (بروتين ذائب بالبلازما)} \\xrightarrow{\\text{ثرومبين}} \\text{فيبرين (بروتين غير ذائب يترسب كشبكة تسد الجرح)}$.
* **دور الهيبارين (Heparin):** يفرزه الكبد ليمنع تحول البروثرومبين إلى ثرومبين داخل الأوعية السليمة ويمنع التجلط داخل الجسم.
    `,
    mainContentEn: `
### 1. Plant Water Transport
* Cohesion (water-water hydrogen bonds) + Adhesion (water-xylem walls) + Transpiration pull.

### 2. Blood Clotting Cascade
* Damaged tissue + Platelets ➔ Thromboplastin.
* Prothrombin ➔ Thrombin (via thromboplastin + Ca2+).
* Soluble Fibrinogen ➔ Insoluble Fibrin mesh.
* Heparin prevents inside-vessel clotting.
    `,

    diagramType: 'cardiovascular_diagram',
    diagramData: {
      type: 'heart_blood_flow',
      title: 'مسار تدفق الدم وتجريد الغازات في القلب البشري',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="120" y="40" width="160" height="150" rx="16" fill="#1e293b" stroke="#64748b" stroke-width="2" />
        <rect x="130" y="50" width="65" height="60" fill="rgba(56, 189, 248, 0.2)" stroke="#38bdf8" />
        <text x="140" y="85" fill="#38bdf8" font-size="11">أذين أيمن</text>
        <rect x="205" y="50" width="65" height="60" fill="rgba(244, 63, 94, 0.2)" stroke="#f43f5e" />
        <text x="215" y="85" fill="#f43f5e" font-size="11">أذين أيسر</text>
        <rect x="130" y="120" width="65" height="60" fill="rgba(56, 189, 248, 0.3)" stroke="#38bdf8" />
        <text x="140" y="155" fill="#38bdf8" font-size="11">بطين أيمن</text>
        <rect x="205" y="120" width="65" height="60" fill="rgba(244, 63, 94, 0.3)" stroke="#f43f5e" />
        <text x="215" y="155" fill="#f43f5e" font-size="11">بطين أيسر</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تفسير ضغط الدم الانقباضي والانبساطي (120/80)',
        titleEn: 'Example: Systolic vs Diastolic Blood Pressure Physiology',
        problemAr: 'ماذا تعني قراءة ضغط الدم $120/80\\text{ mmHg}$ في الشخص السليم؟ ومتى يتم تسجيل كل منهما؟',
        problemEn: 'What does a normal blood pressure reading of 120/80 mmHg indicate clinically and physiologically?',
        stepsAr: [
          'الرقم العلوي ($120\\text{ mmHg}$): يمثل **الضغط الانقباضي (Systolic Pressure)** الناتج عن انقباض البطينين وضخ الدم بقوة في الشريان الأورطي والشريان الرئوي.',
          'الرقم السفلي ($80\\text{ mmHg}$): يمثل **الضغط الانبساطي (Diastolic Pressure)** عند انبساط البطينين وامتلاء الأذينين بالدم.',
          'يُقاس ضغط الدم بواسطة جهاز الزئبق (Sphygmomanometer) بسماع أصوات كورتكوف عند الشريان العضدي.'
        ],
        stepsEn: [
          'Systolic 120 mmHg: Peak arterial pressure during ventricular contraction.',
          'Diastolic 80 mmHg: Minimum arterial baseline pressure during ventricular relaxation.',
          'Measured at brachial artery via sphygmomanometer.'
        ],
        finalAnswerAr: '120 ضغط انقباض البطينين، و 80 ضغط انبساط البطينين.',
        finalAnswerEn: '120 mmHg is ventricular systole, 80 mmHg is ventricular diastole.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11bio-2',
        problemAr: 'علل: جدران البطين الأيسر أكثر سمكاً وعضلية من جدران البطين الأيمن.',
        problemEn: 'Why is the left ventricular myocardium significantly thicker than the right ventricle?',
        solutionStepsAr: [
          'لأن البطين الأيسر يضخ الدم المؤكسج إلى جميع أجزاء الجسم البعيدة في الدورة الدموية الجهازية الكبرى عبر الشريان الأورطي تحت ضغط مرتفع.',
          'بينما البطين الأيمن يضخ الدم فقط لمسافة قصيرة إلى الرئتين في الدورة الدموية الرئوية الصغرى.'
        ],
        finalAnswerAr: 'لأن البطين الأيسر يضخ الدم لجميع أنحاء الجسم عبر الأورطي مما يتطلب قوة ضغط هائلة.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11bio-2',
        questionAr: 'الفيتامين الأساسي الذي يساهم الكبد في استخدامه لتصنيع بروتين البروثرومبين اللازم لتجلط الدم هو:',
        questionEn: 'The essential vitamin required by the liver to synthesize prothrombin for blood coagulation is:',
        optionsAr: ['فيتامين K', 'فيتامين C', 'فيتامين B12', 'فيتامين D'],
        optionsEn: ['Vitamin K', 'Vitamin C', 'Vitamin B12', 'Vitamin D'],
        correctIndex: 0,
        explanationAr: 'فيتامين K ضروري لتخليق عوامل التجلط والبروثرومبين داخل خلايا الكبد.',
        explanationEn: 'Vitamin K is an essential cofactor for hepatic synthesis of prothrombin and clotting factors.'
      }
    ],

    assessment: {
      id: 'quiz-h11-bio2',
      titleAr: 'اختبار إتقان النقل في الكائنات الحية',
      titleEn: 'Mastery Quiz: Transport Physiology',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-bio2-1',
          textAr: 'الوعاء الدموي الوحيد الذي يحمل دماً مؤكسجاً غنياً بالأكسجين بين الأوعية التالية هو:',
          textEn: 'The only vessel among the following that carries oxygenated blood is:',
          optionsAr: ['الأوردة الرئوية الأربعة', 'الشريان الرئوي', 'الوريد الأجوف العلوي', 'الوريد البابي الكبدي'],
          optionsEn: ['Four Pulmonary Veins', 'Pulmonary Artery', 'Superior Vena Cava', 'Hepatic Portal Vein'],
          correctIndex: 0,
          conceptTestedAr: 'استثناءات الأوعية الدموية في الدورة الرئوية',
          conceptTestedEn: 'Pulmonary circulation vessel exceptions',
          explanationAr: 'جميع الأوردة تحمل دماً غير مؤكسج ما عدا الأوردة الرئوية الأربعة التي تعود بالدم المؤكسج من الرئتين إلى الأذين الأيسر.',
          explanationEn: 'All veins carry deoxygenated blood except the four pulmonary veins returning oxygenated blood from the lungs.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-bio2-2',
          textAr: 'المادة التي تفرزها خلايا الكبد وتمنع تجلط الدم تلقائياً داخل الأوعية الدموية السليمة هي:',
          textEn: 'The anticoagulant substance secreted by liver cells to prevent intravascular clotting is:',
          optionsAr: ['الهيبارين (Heparin)', 'الفيبرين', 'الثرومبين', 'الهيموجلوبين'],
          optionsEn: ['Heparin', 'Fibrin', 'Thrombin', 'Hemoglobin'],
          correctIndex: 0,
          conceptTestedAr: 'دور الهيبارين في منع التجلط داخل الأوعية',
          conceptTestedEn: 'Role of heparin in vivo anticoagulation',
          explanationAr: 'الهيبارين يمنع تحويل البروثرومبين إلى ثرومبين داخل الأوعية الدموية فيحفظ سيولة الدم.',
          explanationEn: 'Heparin inhibits prothrombin activation to maintain normal intravascular blood fluidity.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-bio2-3',
          textAr: 'القوة الفيزيائية الرئيسية المسؤولة عن سحب ورفع الماء لمسافات تتجاوز 100 متر في قمم الأشجار الشاهقة هي:',
          textEn: 'The primary physical driving force pulling water up over 100 meters in giant trees is:',
          optionsAr: ['قوة الشد الناشئة عن النتح (Transpiration Pull)', 'الضغط الجذري', 'الخاصية الشعرية وحدها', 'التشرب فقط'],
          optionsEn: ['Transpiration Pull', 'Root Pressure', 'Capillarity alone', 'Imbibition only'],
          correctIndex: 0,
          conceptTestedAr: 'نظرية ديكسون وجولي لصعود الماء',
          conceptTestedEn: 'Dixon-Joly Cohesion-Tension transpirational pull',
          explanationAr: 'الضغط الجذري لا يرفع الماء لأكثر من بضعة أمتار، بينما الشد الناتج عن النتح يولد قوة سحب كافية لرفع الماء لأكثر من 100 متر.',
          explanationEn: 'Root pressure is insufficient (<2 atm), whereas transpirational negative tension easily lifts sap >100m.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: CELLULAR RESPIRATION ──
  {
    id: 'h11-bio-3',
    order: 3,
    titleAr: 'المحاضرة 3: التنفس الخلوي وإنتاج الطاقة: انشطار الجلوكوز، دورة كربس، وسلسلة نقل الإلكترون',
    titleEn: 'Lecture 3: Cellular Respiration & ATP Bioenergetics: Glycolysis, Krebs Cycle & Electron Transport Chain',
    subtitleAr: 'التنفس الهوائي واللاهوائي، انشطار الجلوكوز بالسيتوسول، أكسدة حمض البيروفيك، دورة كربس في الميتوكوندريا، الفسفرة التأكسدية، وحساب جزيئات ATP (38 ATP)',
    subtitleEn: 'Master aerobic cellular respiration: glycolysis in cytosol, pyruvate oxidation, Krebs citric acid cycle in mitochondrial matrix, electron transport chain oxidative phosphorylation, ATP accounting (38 ATP), and lactic/alcoholic fermentation.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Biology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: التنفس الخلوي في الكائنات الحية',
    unitTitleEn: 'Unit 3: Cellular Respiration in Living Organisms',
    lessonNumberAr: 'الدرس 3: التنفس الهوائي واللاهوائي وإنتاج ATP',
    lessonNumberEn: 'Lesson 3: Aerobic & Anaerobic Cellular Respiration',

    keyConceptsAr: [
      'الفرق بين التنفس الخلوي (Cellular Respiration) وتبادل الغازات (Breathing)',
      'المرحلة الأولى: انشطار الجلوكوز (Glycolysis) في السيتوسول (تكوين 2 بيروفيك + $2\\text{ATP}$ + $2\\text{NADH}$)',
      'المرحلة الثانية: دورة كربس (Krebs Cycle) داخل مادة ميتوكوندريا الأساس (تكوين $2\\text{ATP}$ + $6\\text{NADH}$ + $2\\text{FADH}_2$ + $4\\text{CO}_2$)',
      'المرحلة الثالثة: سلسلة نقل الإلكترون (Electron Transport Chain) على الأعراف (Cristae) والأكسجين كمستقبل نهائي للإلكترونات',
      'حساب الطاقة الكلية: أكسدة جزيء جلوكوز واحد هوائياً تعطي $38\\text{ ATP}$ ($1\\text{ NADH} = 3\\text{ ATP}, \\, 1\\text{ FADH}_2 = 2\\text{ ATP}$)',
      'التنفس اللاهوائي (التخمر): التخمر الحمضي (حمض اللاكتيك وإجهاد العضلات) والتخمر الكحولي (الإيثانول و $\\text{CO}_2$)'
    ],
    keyConceptsEn: [
      'Difference between cellular biochemical respiration vs pulmonary gas exchange',
      'Phase 1: Glycolysis in cytosol yielding 2 Pyruvate + 2 ATP net + 2 NADH',
      'Phase 2: Krebs Cycle in mitochondrial matrix yielding 2 ATP + 6 NADH + 2 FADH2 + 4 CO2',
      'Phase 3: Electron Transport Chain & Cytochromes across cristae with Oxygen as final electron acceptor',
      'Total net ATP accounting: 1 Glucose = 38 ATP (1 NADH = 3 ATP, 1 FADH2 = 2 ATP)',
      'Anaerobic Fermentation: Lactic acid fermentation (muscle fatigue) vs Alcoholic fermentation (yeast ethanol)'
    ],

    conceptMapAr: [
      'جلوكوز $\\text{C}_6\\text{H}_{12}\\text{O}_6$ ➔ انشطار بسيتوسول ➔ 2 حمض بيروفيك + $2\\text{ATP}$ + $2\\text{NADH}$',
      'في وجود $\\text{O}_2$ ➔ ميتوكوندريا ➔ دورة كربس + سلسلة نقل الإلكترون $\\to 38\\text{ ATP} + 6\\text{CO}_2 + 6\\text{H}_2\\text{O}$',
      'في غياب $\\text{O}_2$ ➔ تخمر حمضي (عضلات $\\to$ لاكتيك) أو تخمر كحولي (خميرة $\\to$ كحول إيثيلي + $\\text{CO}_2$)'
    ],
    conceptMapEn: [
      'Glucose C6H12O6 ➔ Cytosol Glycolysis ➔ 2 Pyruvate + 2 ATP + 2 NADH',
      'With O2 ➔ Mitochondria ➔ Krebs + ETC ➔ 38 ATP + 6 CO2 + 6 H2O',
      'Without O2 ➔ Lactic fermentation (muscle fatigue) or Alcoholic fermentation (yeast ethanol + CO2)'
    ],

    learningOutcomesAr: [
      'تتبع المراحل الثلاث للتنفس الخلوي الهوائي وتحديد أماكن حدوثها داخل الخلية.',
      'حساب إجمالي جزيئات $\\text{ATP}$ الناتجة عن أكسدة جزيء جلوكوز أكسدة تامة هوائياً.',
      'تفسير الإجهاد العضلي الناتج عن تراكم حمض اللاكتيك في غياب الأكسجين الكافي.'
    ],
    learningOutcomesEn: [
      'Trace the 3 stages of aerobic cellular respiration and map intracellular locations.',
      'Calculate complete net ATP yield from one glucose molecule (38 ATP).',
      'Explain muscle fatigue caused by anaerobic lactic acid accumulation.'
    ],

    vocabulary: [
      { termAr: 'عملة الطاقة ATP', termEn: 'Adenosine Triphosphate (ATP)', definitionAr: 'مركب كيميائي عالي الطاقة يُعد عملة الطاقة العالمية المباشرة في جميع الخلايا الحية.' },
      { termAr: 'سلسلة نقل الإلكترون', termEn: 'Electron Transport Chain (ETC)', definitionAr: 'تتابعات من حاملات الإلكترونات (السيتوكرومات) على الغشاء الداخلي للميتوكوندريا تحرر الطاقة لتصنيع ATP وتمرر الإلكترونات للأكسجين لتكوين الماء.' }
    ],

    warmupHookAr: 'عندما يركض عداء سباق 100 متر بأقصى سرعته، يشعر بعد ثوانٍ بحرقة وألم شديد في عضلات فخذيه. لماذا يحدث ذلك؟ لأن استهلاك العضلة للأكسجين فاق قدرة الدم على التوصيل، فتحولت الخلايا للتنفس اللاهوائي مراكمة "حمض اللاكتيك" لتوليد طاقة طارئة سريعة!',
    warmupHookEn: 'During a 100-meter sprint, intense muscle burning occurs because oxygen demand exceeds capillary supply, forcing muscle fibers into anaerobic lactic acid fermentation for emergency burst ATP production.',

    mainContentAr: `
### 1. مراحل التنفس الخلوي الهوائي (Aerobic Respiration)
1. **انشطار الجلوكوز (Glycolysis - في السيتوسول):**
   * لا يتطلب أكسجين.
   * جزيء جلوكوز (6 كربون) $\\longrightarrow$ 2 حمض بيروفيك (3 كربون).
   * **الناتج المباشر:** $+2\\text{ ATP} + 2\\text{ NADH}$.
2. **أكسدة البيروفيك ودورة كربس (Krebs Cycle - في مادة الأساس بالميتوكوندريا):**
   * يتحول كل بيروفيك إلى أسيتيل مرافق الإنزيم-أ (Acetyl-CoA) $\\implies +2\\text{ NADH} + 2\\text{CO}_2$.
   * يدخل الأسيتيل دورة كربس ليتحد مع حمض أوكسالوأسيتيك (4 كربون) مكوناً حمض الستريك (6 كربون).
   * **نواتج دورتي كربس (لكل جزيء جلوكوز):** $+2\\text{ ATP} + 6\\text{ NADH} + 2\\text{ FADH}_2 + 4\\text{CO}_2$.
3. **سلسلة نقل الإلكترون والفسفرة التأكسدية (على الأعراف):**
   * كل $1\\text{ NADH}$ يمر عبر السيتوكرومات يعطي $3\\text{ ATP}$.
   * كل $1\\text{ FADH}_2$ يعطي $2\\text{ ATP}$.
   * الأكسجين $\\text{O}_2$ هو المستقبل الأخير للإلكترونات والبروتونات ليتكون الماء $\\text{H}_2\\text{O}$.

---

### 2. جدول الحساب الختامي لجزيئات ATP (38 ATP)
* **انشطار الجلوكوز:** $2\\text{ ATP} + (2\\text{ NADH} \\times 3 = 6\\text{ ATP}) = 8\\text{ ATP}$.
* **أكسدة 2 بيروفيك إلى 2 أسيتيل:** $2\\text{ NADH} \\times 3 = 6\\text{ ATP}$.
* **دورتي كربس وسلسلة النقل:** $2\\text{ ATP} + (6\\text{ NADH} \\times 3 = 18) + (2\\text{ FADH}_2 \\times 2 = 4) = 24\\text{ ATP}$.
* **المجموع الكلي النهائي:** $8 + 6 + 24 = \\mathbf{38\\text{ ATP}}$.
    `,
    mainContentEn: `
### 3 Stages of Respiration
1. **Glycolysis (Cytosol):** Glucose ➔ 2 Pyruvate + 2 ATP + 2 NADH (Net 8 ATP).
2. **Pyruvate Oxidation:** 2 Pyruvate ➔ 2 Acetyl-CoA + 2 NADH (Net 6 ATP).
3. **Krebs Cycle & ETC:** 2 ATP + 6 NADH (18 ATP) + 2 FADH2 (4 ATP) = 24 ATP.
* **Total Net Yield = 38 ATP per Glucose.**
    `,

    diagramType: 'cellular_process',
    diagramData: {
      type: 'respiration_pathway',
      title: 'مخطط التنفس الخلوي من الجلوكوز إلى 38 جزيء ATP',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="70" width="90" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="30" y="95" fill="#38bdf8" font-size="11">انشطار جلوكوز</text>
        <text x="40" y="115" fill="#a5f3fc" font-size="10">+2 ATP</text>
        <line x1="110" y1="100" x2="160" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
        <rect x="160" y="50" width="220" height="100" rx="12" fill="#064e3b" stroke="#10b981" stroke-width="2" />
        <text x="180" y="80" fill="#a7f3d0" font-size="12">ميتوكوندريا (دورة كربس + نقل إلكترون)</text>
        <text x="210" y="115" fill="#fbbf24" font-size="15" font-weight="bold">38 ATP إجمالي</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حساب عدد جزيئات ATP الناتجة عن أكسدة 5 جزيئات جلوكوز',
        titleEn: 'Example: ATP Yield Calculation for 5 Glucose Molecules',
        problemAr: 'احسب إجمالي عدد جزيئات $\\text{ATP}$ الناتجة عن أكسدة 5 جزيئات جلوكوز أكسدة هوائية تامة في وجود وفرة من الأكسجين.',
        problemEn: 'Calculate the total net ATP generated from complete aerobic oxidation of 5 glucose molecules.',
        stepsAr: [
          'أكسدة جزيء جلوكوز واحد هوائياً ينتج $38\\text{ ATP}$.',
          'إجمالي $\\text{ATP}$ لـ 5 جزيئات $= 5 \\times 38 = 190\\text{ ATP}$.',
          'إذا كان التنفس لاهوائياً (تخمر)، فإن كل جزيء يعطي $2\\text{ ATP}$ فقط $\\implies 5 \\times 2 = 10\\text{ ATP}$.'
        ],
        stepsEn: [
          '1 glucose aerobic oxidation = 38 ATP.',
          '5 glucose molecules = 5 * 38 = 190 ATP.',
          '(If anaerobic: 5 * 2 = 10 ATP).'
        ],
        finalAnswerAr: '190 جزيء ATP في التنفس الهوائي (و 10 فقط في التنفس اللاهوائي).',
        finalAnswerEn: '190 ATP molecules aerobically (vs 10 ATP anaerobically).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11bio-3',
        problemAr: 'ما هو المستقبل النهائي للإلكترونات والبروتونات في سلسلة نقل الإلكترون؟ وماذا ينتج عن هذا الاتحاد؟',
        problemEn: 'What is the terminal electron and proton acceptor in the electron transport chain, and what molecule is formed?',
        solutionStepsAr: [
          'المستقبل النهائي هو **غاز الأكسجين ($\\text{O}_2$)** الجزيئي.',
          'يتحد الأكسجين مع زوج من الإلكترونات الخارجة من السيتوكرومات وزوج من البروتونات ($2\\text{H}^+$) ليتكون جزيء **الماء ($\\text{H}_2\\text{O}$)**: $\\frac{1}{2}\\text{O}_2 + 2e^- + 2\\text{H}^+ \\to \\text{H}_2\\text{O}$.'
        ],
        finalAnswerAr: 'المستقبل النهائي هو الأكسجين، وينتج جزيء الماء H2O.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11bio-3',
        questionAr: 'تحدث مرحلة انشطار الجلوكوز (Glycolysis) داخل الخلية الحية في:',
        questionEn: 'Glycolysis occurs inside living cells within the:',
        optionsAr: ['السيتوسول (السيتوبلازم)', 'مادة ميتوكوندريا الأساس', 'الغشاء الداخلي للميتوكوندريا', 'النواة'],
        optionsEn: ['Cytosol (Cytoplasm)', 'Mitochondrial matrix', 'Inner mitochondrial membrane', 'Nucleus'],
        correctIndex: 0,
        explanationAr: 'تحدث مرحلة انشطار الجلوكوز في السيتوسول ولا تحتاج لأكسجين لوجود الإنزيمات اللازمة ذائبة في السيتوبلازم.',
        explanationEn: 'Glycolysis takes place in the cytosol where all necessary enzymes are dissolved.'
      }
    ],

    assessment: {
      id: 'quiz-h11-bio3',
      titleAr: 'اختبار إتقان التنفس الخلوي وإنتاج الطاقة',
      titleEn: 'Mastery Quiz: Cellular Respiration',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-bio3-1',
          textAr: 'العدد الصافي لجزيئات ATP الناتجة عن أكسدة جزيء جلوكوز واحد أكسدة تامة هوائياً هو:',
          textEn: 'The net total number of ATP molecules produced from complete aerobic oxidation of one glucose molecule is:',
          optionsAr: ['38 ATP', '2 ATP', '36 ATP', '4 ATP'],
          optionsEn: ['38 ATP', '2 ATP', '36 ATP', '4 ATP'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الحصيلة الكلية للـ ATP في التنفس الهوائي',
          conceptTestedEn: 'Net aerobic cellular respiration ATP yield',
          explanationAr: 'الحصيلة الكلية: 8 من الانشطار + 6 من أكسدة البيروفيك + 24 من دورة كربس وسلسلة نقل الإلكترون = 38 ATP.',
          explanationEn: 'Complete aerobic breakdown yields 8 + 6 + 24 = 38 ATP per glucose.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-bio3-2',
          textAr: 'حمض البيروفيك في خلايا العضلات أثناء المجهود العنيف ونقص الأكسجين يتحول إلى:',
          textEn: 'In muscle cells during strenuous exercise and oxygen deficit, pyruvic acid is converted into:',
          optionsAr: ['حمض اللاكتيك (Lactic Acid)', 'كحول إيثيلي و CO2', 'حمض الستريك', 'حمض الخليك'],
          optionsEn: ['Lactic Acid', 'Ethanol & CO2', 'Citric acid', 'Acetic acid'],
          correctIndex: 0,
          conceptTestedAr: 'التخمر الحمضي في العضلات',
          conceptTestedEn: 'Lactic acid fermentation in muscle tissue',
          explanationAr: 'يحدث تخمر حمضي يختزل فيه البيروفيك بواسطة NADH لإنتاج حمض اللاكتيك الذي يسبب إجهاد العضلة.',
          explanationEn: 'Pyruvate is reduced by NADH to lactic acid, causing localized muscle fatigue.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-bio3-3',
          textAr: 'أثناء دورة كربس، يتحد جزيء الأسيتيل (2 كربون) مع حمض أوكسالوأسيتيك (4 كربون) ليتكون مركب:',
          textEn: 'In the Krebs cycle, acetyl (2C) combines with oxaloacetic acid (4C) to form:',
          optionsAr: ['حمض الستريك (6 كربون)', 'حمض الكيتوجلوتاريك', 'حمض الماليك', 'حمض السكسينيك'],
          optionsEn: ['Citric acid (6C)', 'Ketoglutaric acid', 'Malic acid', 'Succinic acid'],
          correctIndex: 0,
          conceptTestedAr: 'أول مركب كيميائي يتكون في دورة كربس',
          conceptTestedEn: 'Initial step of Krebs citric acid cycle',
          explanationAr: 'أول خطوة في دورة كربس هي اتحاد الأسيتيل (2C) مع الأوكسالوأسيتيك (4C) لتكوين حمض الستريك (6C).',
          explanationEn: 'Acetyl-CoA (2C) condenses with oxaloacetate (4C) to form citrate (6C).',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: EXCRETION IN LIVING ORGANISMS ──
  {
    id: 'h11-bio-4',
    order: 4,
    titleAr: 'المحاضرة 4: الإخراج في الكائنات الحية: وظائف الجلد، تشريح الكلية والفرون، والغسيل الكلوي والإدماع في النبات',
    titleEn: 'Lecture 4: Excretion in Living Organisms: Skin, Kidney Nephron Physiology, Hemodialysis & Plant Excretion',
    subtitleAr: 'طبقات الجلد والغدد العرقية وتنظيم الحرارة، تركيب الكلية ومحفظة بومان والأنابيب البولية، الغسيل الكلوي الصناعي، دور الكبد في تكوين البولينا، والإدماع والنتح في النبات',
    subtitleEn: 'Master human skin layers & thermoregulation, kidney macro/micro anatomy, Bowman\'s capsule ultrafiltration, selective tubular reabsorption, artificial kidney hemodialysis, liver urea deamination, and plant guttation vs transpiration.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Biology',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: الإخراج في الكائنات الحية',
    unitTitleEn: 'Unit 4: Excretion in Living Organisms',
    lessonNumberAr: 'الدرس 4: الإخراج في الإنسان والنبات',
    lessonNumberEn: 'Lesson 4: Excretion in Humans & Plants',

    keyConceptsAr: [
      'مفهوم الإخراج العلمي: خروج المواد الناتجة عن العمليات الحيوية عبر الأغشية البلازمية (البراز لا يعتبر إخراجاً علمياً)',
      'الجلد البشري: البشرة (الطبقة السطحية القرنية والطبقة الحية بصبغة الميلانين) والأدمة (الغدد العرقية والدهنية ونهايات الأعصاب الحسية)',
      'الكلية والنيفرون (Nephron): محفظة بومان (الترشيح الفائق Ultrafiltration) وثنية هنلي والأنبوبة الملتفة (إعادة الامتصاص الاختياري Selective Reabsorption)',
      'جهاز الكلية الصناعية (Hemodialysis) والغشاء شبه المنفذ وسائل التنقية',
      'دور الكبد في نزع مجموعة الأمين (Deamination) وتحويل الأمونيا السامة إلى بولينا (Urea)',
      'الإخراج في النبات: النتح (الثغري والكيوتيني والعديسي) وظاهرة الإدماع (Guttation) عبر الثغور المائية في الصباح الباكر'
    ],
    keyConceptsEn: [
      'Scientific definition of biological excretion requiring plasma membrane traversal (feces is not excretion)',
      'Human Skin: Epidermis (keratinized layer + melanin pigment layer) and Dermis (sweat glands, sebaceous glands, nerve endings)',
      'Kidney & Nephron: Bowman capsule ultrafiltration and proximal/distal tubule selective reabsorption',
      'Hemodialysis machine mechanics with semi-permeable dialyzer membrane',
      'Liver deamination of toxic excess amino acids into urea',
      'Plant Excretion: Transpiration (stomatal, cuticular, lenticular) and Guttation via hydathodes in early morning'
    ],

    conceptMapAr: [
      'أعضاء الإخراج ➔ الجلد (عرق وتنظيم حرارة) ➔ الكليتان (يوريا وأملاح) ➔ الرئتان ($\\text{CO}_2$ وبخار ماء) ➔ الكبد (سموم وبولينا)',
      'عمل النيفرون ➔ 1) ترشيح محفظة بومان (ترشيح البلازما) ➔ 2) إعادة امتصاص بالأنبوبة (استعادة الجلوكوز والماء والشوارد)',
      'الإخراج بالنبات ➔ نتح (بخار ماء نقي طوال اليوم) ➔ إدماع (قطرات ماء مذاب بها أملاح عند أطراف الأوراق)'
    ],
    conceptMapEn: [
      'Excretory Organs ➔ Skin (Sweat/heat) ➔ Kidneys (Urea/ions) ➔ Lungs (CO2/vapor) ➔ Liver (Toxins/urea)',
      'Nephron Function ➔ 1) Glomerular filtration ➔ 2) Selective tubular reabsorption (glucose, water, electrolytes)',
      'Plant Excretion ➔ Transpiration (pure vapor) vs Guttation (liquid mineral droplets via hydathodes)'
    ],

    learningOutcomesAr: [
      'تحديد وظائف الجلد الإخراجية والمناعية والحرارية والحسية.',
      'تتبع خطوات تكوين البول داخل النيفرون من الترشيح الفائق إلى إعادة الامتصاص الاختياري.',
      'شرح مبدأ عمل الكلية الصناعية في تنقية دم مرضى الفشل الكلوي والمقارنة بين النتح والإدماع في النبات.'
    ],
    learningOutcomesEn: [
      'Identify skin excretory, immune, thermoregulatory, and sensory functions.',
      'Trace urine formation steps within nephrons from Bowman capsule to collecting ducts.',
      'Explain hemodialysis artificial kidney filtration and contrast plant guttation vs transpiration.'
    ],

    vocabulary: [
      { termAr: 'النيفرون', termEn: 'Nephron', definitionAr: 'الوحدة الوظيفية الدقيقة للكلية؛ ويحتوي كل فص كلوي بشري على حوالي مليون نيفرون لتنقية وترشيح الدم.' },
      { termAr: 'إعادة الامتصاص الاختياري', termEn: 'Selective Reabsorption', definitionAr: 'استعادة الجسم لجزيئات الماء والجلوكوز والأملاح الحيوية من الرشيح الكلوي إلى الدم لمنع فقدانها.' },
      { termAr: 'الإدماع', termEn: 'Guttation', definitionAr: 'خروج قطرات مائية عند أطراف أوراق بعض النباتات في الصباح الباكر في نهاية فصل الربيع عبر فتحات متخصصة تُدعى الثغور المائية (Hydathodes).' }
    ],

    warmupHookAr: 'إذا كان جسم الإنسان يحتوي على 5 لترات فقط من الدم، كيف تقوم الكليتان بفلترة وترشيح ما يقارب 180 لتراً من السوائل يومياً دون أن يموت الإنسان من الجفاف في أقل من ساعة؟ بفضل المعجزة الحيوية التي تسمى "إعادة الامتصاص الاختياري"، حيث تسترجع الكلية 99% من الماء والمغذيات النقية فوراً!',
    warmupHookEn: 'With only 5 liters of blood in the human body, how do kidneys filter 180 liters of fluid daily without causing fatal dehydration in minutes? Through selective tubular reabsorption, reclaiming over 99% of filtered water and essential nutrients.',

    mainContentAr: `
### 1. تكوين البول داخل النيفرون (Urine Formation in Nephron)
1. **عملية الترشيح الفائق (Ultrafiltration):**
   * تحدث في **محفظة بومان (Bowman's Capsule)**؛ يترشح الجزء السائل من الدم (البلازما) بما يحتويه من ماء، جلوكوز، يوريا، وأملاح، بينما لا تترشح خلايا الدم ولا جزيئات البروتين الكبيرة لكبر حجمها.
2. **عملية إعادة الامتصاص الاختياري (Selective Reabsorption):**
   * تحدث في **أنبوبة النيفرون (القريبة والبعيدة وثنية هنلي)**؛ يستعيد الدم كل جزيئات الجلوكوز والنسبة الأكبر من الماء والأملاح الضرورية للاتزان البدني، بينما تتبقى اليوريا والفضلات الزائدة لتخرج كـ **بول**.

---

### 2. الكلية الصناعية والإخراج في النبات (Dialysis & Plant Guttation)
* **جهاز الغسيل الكلوي (Artificial Kidney):**
  * يمر دم المريض عبر أنابيب ذات غشاء شبه منفذ يحيط بها سائل تنقية يحتوي على جميع مكونات البلازما الطبيعية ما عدا اليوريا؛ فتنتقل اليوريا من دم المريض إلى سائل التنقية بخاصية **الانتشار** دون فقدان الجلوكوز أو البروتين.
* **مقارنة الإدماع والنتح في النبات:**
  * **النتح (Transpiration):** خروج الماء في صورة **بخار ماء نقي** من الثغور في جميع أوقات النهار.
  * **الإدماع (Guttation):** خروج الماء في صورة **قطرات سائلة محملة بأملاح** عند أطراف الأوراق في الصباح الباكر عبر **الثغور المائية (Hydathodes)**.
    `,
    mainContentEn: `
### 1. Nephron Urine Formation
* **Ultrafiltration (Bowman's Capsule):** Plasma water, glucose, urea, and ions filter through; RBCs and large proteins remain in blood.
* **Selective Reabsorption (Tubules & Loop of Henle):** >99% of water, all glucose, and needed ions return to blood.

### 2. Hemodialysis & Plant Excretion
* Hemodialysis removes urea by diffusion across semi-permeable membrane into dialysis bath.
* Transpiration (pure water vapor via stomata) vs Guttation (liquid mineral droplets via hydathodes).
    `,

    diagramType: 'nephron_filtration',
    diagramData: {
      type: 'nephron_structure',
      title: 'مراحل الترشيح وإعادة الامتصاص داخل النيفرون الكلوي',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="80" r="28" fill="#1e293b" stroke="#f43f5e" stroke-width="2" />
        <path d="M 108 80 Q 160 80 180 120 T 260 120 T 320 80" fill="none" stroke="#fbbf24" stroke-width="3" />
        <text x="60" y="85" fill="#f43f5e" font-size="10">محفظة بومان</text>
        <text x="180" y="145" fill="#fbbf24" font-size="11">ثنية هنلي (إعادة امتصاص)</text>
        <rect x="320" y="40" width="25" height="140" fill="#38bdf8" />
        <text x="350" y="110" fill="#38bdf8" font-size="11">القناة الجامعة</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: التمييز بين ترشيح الدم الطبيعي والغسيل الكلوي',
        titleEn: 'Example: Physiology of Hemodialysis Fluid Composition',
        problemAr: 'علل: يحتوي سائل التنقية في جهاز الكلية الصناعية على الجلوكوز والأملاح بنفس تركيزاتها في البلازما الطبيعية.',
        problemEn: 'Explain why hemodialysis fluid contains glucose and electrolytes at concentrations identical to healthy plasma.',
        stepsAr: [
          'لضمان عدم انتقال الجلوكوز أو الأملاح الحيوية من دم المريض إلى سائل التنقية عبر الغشاء شبه المنفذ بالانتشار، مما يحمي المريض من هبوط السكر أو اضطراب الشوارد.',
          'وفي نفس الوقت، لعدم احتواء سائل التنقية على يوريا أو فضلات نيتروجينية، تنتقل اليوريا بسرعة من دم المريض (تركيز مرتفع) إلى سائل التنقية (تركيز صفر) بخاصية الانتشار.'
        ],
        stepsEn: [
          'Prevents loss of vital glucose and essential electrolytes from patient blood by eliminating concentration gradients.',
          'Zero urea in dialysis fluid maximizes concentration gradient, ensuring rapid urea diffusion out of blood.'
        ],
        finalAnswerAr: 'لمنع خروج الجلوكوز والأملاح من دم المريض، مع ضمان انتقال اليوريا والسموم للخارج بالانتشار.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11bio-4',
        problemAr: 'علل: لا يُعتبر خروج البراز من القناة الهضمية إخراجاً بالمعنى البيولوجي العلمي.',
        problemEn: 'Explain why defecation is not considered biological excretion.',
        solutionStepsAr: [
          'لأن البراز هو بقايا طعام غير مهضوم يمر عبر القناة الهضمية ويخرج عبر الشرج دون أن ينفذ عبر الأغشية البلازمية للخلايا.',
          'التعريف العلمي للإخراج يشترط أن تكون المادة ناتجة عن التفاعلات الكيميائية الحيوية والأيض الخلوي وتنفذ عبر الأغشية البلازمية.'
        ],
        finalAnswerAr: 'لأنه لم يعبر الأغشية البلازمية للخلايا وإنما هو بقايا طعام لم يتم هضمه.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11bio-4',
        questionAr: 'العملية التي يتم فيها استرجاع الجلوكوز والماء إلى الدم داخل أنبوبة النيفرون تُسمى:',
        questionEn: 'The process of recovering glucose and water back into the bloodstream in renal tubules is:',
        optionsAr: ['إعادة الامتصاص الاختياري', 'الترشيح الفائق', 'الإفراز الأنبوبي', 'النتح'],
        optionsEn: ['Selective Reabsorption', 'Ultrafiltration', 'Tubular Secretion', 'Transpiration'],
        correctIndex: 0,
        explanationAr: 'إعادة الامتصاص الاختياري تسترجع 100% من الجلوكوز وأكثر من 99% من الماء إلى الشعيرات الدموية المحيطة بالنيفرون.',
        explanationEn: 'Selective reabsorption reclaims vital glucose and water back into peritubular capillaries.'
      }
    ],

    assessment: {
      id: 'quiz-h11-bio4',
      titleAr: 'اختبار إتقان الإخراج في الكائنات الحية',
      titleEn: 'Mastery Quiz: Excretion Physiology',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-bio4-1',
          textAr: 'الجزء من النيفرون الذي تحدث فيه عملية الترشيح الفائق للبلازما هو:',
          textEn: 'The nephron structure where plasma ultrafiltration takes place is:',
          optionsAr: ['محفظة بومان (Bowman\'s Capsule)', 'ثنية هنلي', 'الأنبوبة الملتفة البعيدة', 'القناة الجامعة'],
          optionsEn: ['Bowman\'s Capsule', 'Loop of Henle', 'Distal Convoluted Tubule', 'Collecting Duct'],
          correctIndex: 0,
          conceptTestedAr: 'موقع حدوث الترشيح الفائق في الكلية',
          conceptTestedEn: 'Site of ultrafiltration in renal nephron',
          explanationAr: 'تحدث عملية الترشيح الفائق للبلازما داخل محفظة بومان حيث تترشح الجزيئات الصغيرة دون خلايا الدم والبروتينات الكبيرة.',
          explanationEn: 'Ultrafiltration occurs in Bowman\'s capsule across the glomerulus basement membrane.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-bio4-2',
          textAr: 'الصبغة المسؤولة عن إكساب الجلد البشري لونه المميز وحمايته من الأشعة فوق البنفسجية هي:',
          textEn: 'The skin pigment responsible for color tone and UV radiation defense is:',
          optionsAr: ['الميلانين (Melanin)', 'الكيراتين', 'الهيموجلوبين', 'الكولاجين'],
          optionsEn: ['Melanin', 'Keratin', 'Hemoglobin', 'Collagen'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة صبغة الميلانين في الطبقة الحية للبشرة',
          conceptTestedEn: 'Melanin pigment function in basal epidermal layer',
          explanationAr: 'تفرز الخلايا الصبغية في قاعدة الطبقة الحية للبشرة حبيبات الميلانين لحماية الأنسجة الداخلية من أشعة الشمس الضارة.',
          explanationEn: 'Melanin granules produced in the basal epidermis protect internal tissues from UV radiation.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-bio4-3',
          textAr: 'يتميز ماء "الإدماع" في النبات عن ماء "النتح" بأنه:',
          textEn: 'Guttation water differs from transpiration water in that it:',
          optionsAr: ['يخرج في صورة قطرات سائلة محتوية على أملاح ذائبة عبر الثغور المائية', 'يخرج كبخار ماء نقي 100%', 'يحدث فقط في الصيف ظهراً', 'يخرج عبر نسيج اللحاء'],
          optionsEn: ['Exits as liquid droplets containing dissolved minerals via hydathodes', 'Exits as pure 100% water vapor', 'Occurs only at midday in summer', 'Exits via phloem'],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين الإدماع والنتح في النبات',
          conceptTestedEn: 'Guttation vs Transpiration differences',
          explanationAr: 'ماء الإدماع يخرج في صورة قطرات سائلة محملة بأملاح ومواد عضوية عبر فتحات مائية متخصصة (Hydathodes) في الصباح الباكر.',
          explanationEn: 'Guttation releases liquid droplets with dissolved solutes via specialized leaf hydathodes.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: SENSATION & NERVOUS SYSTEM ──
  {
    id: 'h11-bio-5',
    order: 5,
    titleAr: 'المحاضرة 5: الإحساس والتنسيق العصبي: الخلية العصبية، السيال العصبي، التشابك، والانتحاء النباتي والأوكسينات',
    titleEn: 'Lecture 5: Sensation & Nervous Coordination: Neuron Physiology, Action Potential, Synapses & Plant Auxin Tropisms',
    subtitleAr: 'تركيب العصبون وخلايا شوان وغمد الميالين، جهد الراحة (-70mV) وجهد الفعالية (+40mV)، النقل عبر التشابك العصبي (الأسيتيل كولين)، القوس الانعكاسي، والانتحاء الضوئي والأرضي وتجارب فنت',
    subtitleEn: 'Master neuron anatomy, Schwann cells & myelin, resting potential (-70mV), action potential generation (+40mV), synaptic neurotransmission (acetylcholine & cholinesterase), reflex arc, and plant auxins & tropisms (Went & Boysen-Jensen experiments).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Biology',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الخامسة: الإحساس في الكائنات الحية',
    unitTitleEn: 'Unit 5: Sensation in Living Organisms',
    lessonNumberAr: 'الدرس 5: الإحساس في النبات والإنسان',
    lessonNumberEn: 'Lesson 5: Sensation, Nervous System & Plant Tropisms',

    keyConceptsAr: [
      'تركيب الخلية العصبية (Neuron): جسم الخلية، الزوائد الشجيرية، المحور، خلايا شوان، غلاف الميالين، وعقد رانفييه (Ranvier)',
      'فسيولوجيا السيال العصبي: 1) جهد الراحة (الاستقطاب $-70\\text{ mV}$)، 2) إزالة الاستقطاب (جهد الفعالية $+40\\text{ mV}$ بدخول $\\text{Na}^+$)، 3) عودة الاستقطاب، 4) فترة الجموح (Refractory Period)',
      'التشابك العصبي (Synapse): حويصلات النواقل الكيميائية (الأسيتيل كولين والنورأدرينالين)، ودور أيونات الكالسيوم $\\text{Ca}^{2+}$ وإنزيم الكولين إستريز',
      'القوس الانعكاسي (Reflex Arc): عضو الاستقبال ➔ عصبون حسي ➔ عصبون موصل (بيني) ➔ عصبون حركي ➔ عضو الاستجابة',
      'الإحساس في النبات: الانتحاء الضوئي (Phototropism)، الانتحاء الأرضي، الانتحاء المائي، وتوزيع هرمون الأوكسين (IAA - إندول حمض الخليك)'
    ],
    keyConceptsEn: [
      'Neuron anatomy: soma, dendrites, axon, Schwann cells, myelin sheath, and Nodes of Ranvier (saltatory conduction)',
      'Nerve Impulse electrophysiology: Resting potential (-70mV polarization), Depolarization Action Potential (+40mV via Na+ influx), Repolarization, and absolute Refractory Period',
      'Synaptic Transmission: synaptic vesicles, chemical neurotransmitters (Acetylcholine, Noradrenaline), Ca2+ influx, and Acetylcholinesterase breakdown',
      'Reflex Arc: Receptor ➔ Sensory neuron ➔ Interneuron ➔ Motor neuron ➔ Effector muscle/gland',
      'Plant Tropisms: Phototropism, Geotropism, Hydrotropism, and Auxin (Indole-3-acetic acid IAA) differential distribution (Went experiment)'
    ],

    conceptMapAr: [
      'الخلية العصبية ➔ إثارة بحافز كافٍ ➔ تدفق $\\text{Na}^+$ ➔ جهد فعالية $+40\\text{ mV}$ يمر قفزياً على عقد رانفييه',
      'منطقة التشابك ➔ دخول $\\text{Ca}^{2+}$ ➔ تفجير الحويصلات ➔ تحرر الأسيتيل كولين ➔ إثارة العصبون التالي ➔ كولين إستريز يحطم الناقل',
      'الانتحاء النباتي ➔ القمة النامية تفرز أوكسينات ➔ الضوء يهرب الأوكسين للجانب المظلم ➔ استطالة أكبر ➔ انحناء نحو الضوء'
    ],
    conceptMapEn: [
      'Neuron ➔ Threshold stimulus ➔ Na+ influx ➔ Action potential +40mV propagating saltatorily along Ranvier nodes',
      'Synapse ➔ Ca2+ influx ➔ Vesicle rupture ➔ Acetylcholine binds receptors ➔ Next neuron fires ➔ Cholinesterase resets',
      'Plant Tropism ➔ Apical tip produces auxins ➔ Light causes auxin migration to dark side ➔ Stem bends towards light'
    ],

    learningOutcomesAr: [
      'شرح التغيرات الكهربية في غشاء الليفة العصبية أثناء فترات الراحة وإزالة الاستقطاب وجهد الفعالية.',
      'توضيح آلية انتقال السيال العصبي عبر الشق التشابكي ودور إنزيم كولين إستريز في استعادة الراحة.',
      'تفسير الانتحاء الضوئي والأرضي في ساق وجذر النبات بناءً على تجارب فنت وبويسن ينسن وتوزيع الأوكسينات.'
    ],
    learningOutcomesEn: [
      'Explain membrane electrochemical potential changes during resting state, depolarization, and action potential.',
      'Detail synaptic neurotransmission mechanics and role of acetylcholinesterase.',
      'Explain plant phototropism and gravitropism mechanisms based on Boysen-Jensen/Went auxin experiments.'
    ],

    vocabulary: [
      { termAr: 'جهد الفعالية', termEn: 'Action Potential', definitionAr: 'التغير الكهربي المؤقت والمفاجئ في غشاء الخلية العصبية من $-70\\text{ mV}$ إلى $+40\\text{ mV}$ ثم العودة للراحة عند وصول مؤثر كافٍ.' },
      { termAr: 'التشابك العصبي', termEn: 'Synapse', definitionAr: 'الموضع المجهري الذي تلتقي فيه التفرعات النهائية لمحور عصبون بالزوائد الشجيرية لعصبون تالٍ لنقل السيالات عبر نواقل كيميائية.' },
      { termAr: 'الأوكسينات', termEn: 'Auxins (IAA)', definitionAr: 'هرمونات نباتية تفرزها القمم النامية والبراعم (إندول حمض الخليك) وتسبب استطالة الخلايا النباتية وتوجيه نموها.' }
    ],

    warmupHookAr: 'عند لمس يدك إبرة حادة أو موقداً ساخناً بالخطأ، تسحب يدك بسرعة خاطفة دون حتى أن تفكر في الأمر أو تدرك الألم إلا بعد سحبها! كيف حدث هذا الفعل المنعكس الخارق خلال أجزاء من الألف من الثانية؟ بفضل "القوس الانعكاسي" الذي اتخذ القرار في نخاعك الشوكي مباشرة دون انتظار وصول الإشارة للمخ!',
    warmupHookEn: 'Accidentally touching a burning stove triggers an instantaneous hand withdrawal before you even consciously perceive pain! This millisecond survival reflex is commanded locally by the spinal cord "Reflex Arc" without waiting for brain processing.',

    mainContentAr: `
### 1. توليد وانتقال السيال العصبي (Nerve Impulse & Action Potential)
1. **حالة الراحة (الاستقطاب Polarization):**
   * خارج الغشاء موجب وداخله سالب، بفرق جهد $= -70\\text{ mV}$.
   * **السبب:** النفاذية الاختيارية لأيونات البوتاسيوم $\\text{K}^+$ للخارج 40 ضعف نفاذية الصوديوم $\\text{Na}^+$ للداخل، ومضخة $\\text{Na}^+/\\text{K}^+$ النشطة.
2. **إثارة العصبون وجهد الفعالية (Depolarization & Action Potential):**
   * عند وصول مؤثر كافٍ (أكبر من عتبة الإثارة)، تفتح قنوات الصوديوم وتندفع أيونات $\\text{Na}^+$ للداخل بكثافة.
   * ينعكس فرق الجهد ليصبح $+40\\text{ mV}$ (إزالة استقطاب).
   * ظاهرة النقل القفزي (Saltatory Conduction) على عقد رانفييه تزيد سرعة السيال إلى $120\\text{ m/s}$.

---

### 2. آلية التشابك والانتحاء النباتي (Synapses & Plant Tropism)
* **الانتقال عبر التشابك العصبي:**
  * وصول السيال ➔ فتح قنوات الكالسيوم $\\text{Ca}^{2+}$ ➔ انفجار حويصلات التشابك ➔ تحرر **الأسيتيل كولين (Acetylcholine)** ➔ ارتباطه بمستقبلات الغشاء بعد التشابكي ➔ فتح قنوات الصوديوم وبدء سيال جديد.
  * إنزيم **كولين إستريز (Cholinesterase)** يحطم الأسيتيل كولين فوراً إلى كولين وحمض خليك لإعادة الغشاء لحالة الراحة.
* **الانتحاء الضوئي في الساق والجذر (Phototropism):**
  * **الساق:** موجب الانتحاء الضوئي (تهاجر الأوكسينات للجانب المظلم بنسبة 65% مقابل 35% بالمضيء، فتستطيل خلايا الجانب المظلم أكثر وينحني الساق نحو الضوء).
  * **الجذر:** سالب الانتحاء الضوئي (تراكم الأوكسينات في الجانب المظلم للجذر يثبط نمو خلاياه بينما يستطيل الجانب المضيء فينحني الجذر بعيداً عن الضوء).
    `,
    mainContentEn: `
### 1. Nerve Impulse Electrophysiology
* Resting Potential: -70mV (Polarized, high K+ outward permeability).
* Action Potential: +40mV (Depolarization via voltage-gated Na+ influx).
* Saltatory conduction along Nodes of Ranvier speeds transmission up to 120 m/s.

### 2. Synaptic Transmission & Plant Tropisms
* Ca2+ triggers acetylcholine release; Acetylcholinesterase resets synapse.
* Auxin phototropism: High auxin on dark side stimulates stem elongation (positive phototropism) but inhibits root elongation (negative phototropism).
    `,

    diagramType: 'action_potential_graph',
    diagramData: {
      type: 'action_potential_curve',
      title: 'منحنى جهد الفعالية العصبي من الراحة (-70mV) إلى القمة (+40mV)',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3" />
        <line x1="40" y1="40" x2="360" y2="40" stroke="#64748b" stroke-width="1.5" stroke-dasharray="3" />
        <path d="M 50 160 L 110 160 Q 140 160 170 40 Q 200 40 230 180 Q 260 180 290 160 L 350 160" stroke="#38bdf8" stroke-width="3" fill="none" />
        <text x="50" y="150" fill="#94a3b8" font-size="11">-70 mV (راحة)</text>
        <text x="175" y="30" fill="#f43f5e" font-size="12" font-weight="bold">+40 mV (جهد فعالية)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تفسير تجربة فنت (Went) لقياس تركيز الأوكسينات في القمة النامية',
        titleEn: 'Example: Analysis of Went\'s Agar Block Auxin Experiment',
        problemAr: 'في تجربة فنت، تم تعريض قمة نامية لبادرة الشوفان للضوء الجانبي من اليمين، ثم قُسمت القمة على قطعتين من الآجار. ما هي النتيجة المتوقعة لنسبة الأوكسينات في القطعتين ولماذا؟',
        problemEn: 'In Went\'s experiment, an oat coleoptile tip was exposed to unilateral light from the right, then placed on two agar blocks. What are the expected auxin percentages in the agar blocks and why?',
        stepsAr: [
          'يهاجر هرمون الأوكسين (إندول حمض الخليك) جانبياً بالانتشار مبتعداً عن مصدر الضوء إلى الجانب المظلم.',
          'تكون النتيجة في قطعتي الآجار: **65%** في قطعة الجانب المظلم (اليسار)، و **35%** في قطعة الجانب المضيء (اليمين).',
          'هذا التوزيع غير المتكافئ يثبت أن الضوء لا يحطم الأوكسينات بل يوجه هجرتها نحو الجانب المظلم.'
        ],
        stepsEn: [
          'Auxins migrate laterally by diffusion away from light into the shaded flank.',
          'Resulting agar block concentrations: 65% in shaded side, 35% in illuminated side.',
          'Proves light causes lateral auxin redistribution rather than chemical destruction.'
        ],
        finalAnswerAr: '65% في الجانب المظلم و 35% في الجانب المضيء بسبب هجرة الأوكسينات بعيداً عن الضوء.',
        finalAnswerEn: '65% shaded side vs 35% lit side due to lateral auxin migration.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11bio-5',
        problemAr: 'ماذا يحدث إذا تم تثبيط أو غياب إنزيم كولين إستريز من منطقة التشابك العصبي العضلي؟',
        problemEn: 'What happens if acetylcholinesterase is inhibited at the neuromuscular junction?',
        solutionStepsAr: [
          'يظل الناقل الكيميائي (الأسيتيل كولين) مرتبطاً بمستقبلاته على الغشاء بعد التشابكي دون تحطيم.',
          'يستمر تدفق أيونات الصوديوم وتظل العضلة في حالة انقباض مستمر وتقلص تشنجي مؤلم (تشنج عضلي حاد) وقد يؤدي إلى الوفاة إذا أصاب عضلات التنفس.'
        ],
        finalAnswerAr: 'يستمر ارتباط الأسيتيل كولين بالمستقبلات مما يسبب تشنجاً عضلياً مستمراً وعدم القدرة على الانبساط.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11bio-5',
        questionAr: 'فرق الجهد التأثيري لغشاء الخلية العصبية في حالة الراحة (الاستقطاب) يساوي:',
        questionEn: 'The resting membrane potential of a polarized neuron equals:',
        optionsAr: ['-70 mV', '+40 mV', '0 mV', '+110 mV'],
        optionsEn: ['-70 mV', '+40 mV', '0 mV', '+110 mV'],
        correctIndex: 0,
        explanationAr: 'في حالة الراحة يكون فرق الجهد عبر غشاء العصبون -70 مللي فولت ويكون السطح الخارجي موجباً والداخلي سالباً.',
        explanationEn: 'Resting membrane potential is -70 mV with an electrically positive outer surface.'
      }
    ],

    assessment: {
      id: 'quiz-h11-bio5',
      titleAr: 'اختبار إتقان الإحساس والتنسيق العصبي',
      titleEn: 'Mastery Quiz: Sensation & Nervous Coordination',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-bio5-1',
          textAr: 'الإنزيم المسؤول عن تحطيم الأسيتيل كولين في منطقة التشابك العصبي لإعادة غشاء الخلية إلى حالة الراحة هو:',
          textEn: 'The enzyme responsible for degrading acetylcholine in the synaptic cleft to restore resting potential is:',
          optionsAr: ['كولين إستريز (Cholinesterase)', 'الببسين', 'الأميليز', 'الليبيز'],
          optionsEn: ['Cholinesterase', 'Pepsin', 'Amylase', 'Lipase'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة إنزيم كولين إستريز في التشابك العصبي',
          conceptTestedEn: 'Role of acetylcholinesterase in terminating neurotransmission',
          explanationAr: 'إنزيم كولين إستريز يفكك الأسيتيل كولين مائياً إلى كولين وحمض خليك لإيقاف إثارة الخلية العصبية وإعادتها للاستقطاب.',
          explanationEn: 'Cholinesterase hydrolyzes acetylcholine into choline and acetate to reset the post-synaptic membrane.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-bio5-2',
          textAr: 'ساق النبات "موجب الانتحاء الضوئي" بسبب:',
          textEn: 'Plant shoot is positively phototropic because:',
          optionsAr: ['تراكم الأوكسينات في الجانب المظلم واستطالة خلاياه بمعدل أسرع من الجانب المضيء', 'تراكم الأوكسينات في الجانب المضيء', 'هروب الكلوروفيل للجانب المظلم', 'تثبيط نمو خلايا الجانب المظلم'],
          optionsEn: ['Auxin accumulation on shaded side stimulating faster cell elongation', 'Auxin accumulation on lit side', 'Chlorophyll migration', 'Inhibition of dark side'],
          correctIndex: 0,
          conceptTestedAr: 'آلية الانتحاء الضوئي في ساق النبات',
          conceptTestedEn: 'Mechanism of shoot positive phototropism',
          explanationAr: 'تهاجر الأوكسينات للجانب المظلم (65%) فتسبب زيادة استطالة خلايا هذا الجانب فينحني الساق نحو مصدر الضوء.',
          explanationEn: 'High auxin concentration on the shaded side accelerates cell elongation, bending the stem toward light.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-bio5-3',
          textAr: 'الأيون المسؤول عن تفجير حويصلات التشابك وتحرير النواقل الكيميائية في الشق التشابكي هو:',
          textEn: 'The ion responsible for triggering synaptic vesicle exocytosis and neurotransmitter release is:',
          optionsAr: ['أيون الكالسيوم (Ca²⁺)', 'أيون الصوديوم (Na⁺)', 'أيون البوتاسيوم (K⁺)', 'أيون الكلوريد (Cl⁻)'],
          optionsEn: ['Calcium ion (Ca2+)', 'Sodium ion (Na+)', 'Potassium ion (K+)', 'Chloride ion (Cl-)'],
          correctIndex: 0,
          conceptTestedAr: 'دور أيونات الكالسيوم في التشابك العصبي',
          conceptTestedEn: 'Role of voltage-gated Ca2+ channels in synaptic release',
          explanationAr: 'عند وصول السيال لنهاية المحور تفتح قنوات الكالسيوم وتدخل أيونات Ca2+ لتفجر حويصلات التشابك وتحرر الأسيتيل كولين.',
          explanationEn: 'Ca2+ influx into the axon terminal triggers synaptic vesicle fusion and neurotransmitter exocytosis.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
