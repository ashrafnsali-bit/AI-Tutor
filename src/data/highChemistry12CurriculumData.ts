import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL CHEMISTRY — GRADE 12 (كيمياء الصف الثالث الثانوي - الثانوية العامة ومدارس اللغات)
// Official Grade 12 / Secondary 3 National Egyptian Ministry Curriculum Alignment:
// Chapter 1: The Transition Elements & Iron Metallurgy (3d series, Magnetic/Color properties, Blast/Midrex Furnaces, Alloys & Iron Oxides)
// Chapter 2: Qualitative & Quantitative Chemical Analysis (Anion/Cation detection groups, Titration & Gravimetric calculations)
// Chapter 3: Chemical & Ionic Equilibrium (Le Chatelier's Principle, Kc/Kp, Ostwald law, pH/pOH & Solubility Product Ksp)
// Chapter 4: Electrochemistry (Galvanic cells, Lead-Acid/Lithium-Ion batteries, Iron Corrosion & Faraday's Laws of Electrolysis)
// Chapter 5: Organic Chemistry (Alkanes, Alkenes, Alkynes, Benzene, Alcohols, Phenols, Carboxylic Acids & Esters)
// ============================================================================

export const HIGH_CHEMISTRY_G12_LECTURES: Lecture[] = [
  // ── CHAPTER 1: TRANSITION ELEMENTS & IRON METALLURGY ──
  {
    id: 'h12-ch-1',
    order: 1,
    titleAr: 'المحاضرة 1: الباب الأول: العناصر الانتقالية والسلسلة الأولى (3d)، والخواص وتعدين واستخلاص الحديد وسبائكه',
    titleEn: 'Lecture 1: Chapter 1: Transition Elements (3d Series), General Properties & Iron Metallurgy, Alloys and Oxides',
    subtitleAr: 'السلسلة الانتقالية الأولى (Sc إلى Zn)، حالات التأكسد، الخواص المغناطيسية (بارا وديا)، الأيونات الملونة والنشاط الحفزي، تجهيز واختزال خامات الحديد (الفرن العالي وفرن مدركس)، السبائك وتفاعلات أكاسيد الحديد',
    subtitleEn: 'Master 3d first transition series, oxidation states, magnetic moments (paramagnetism/diamagnetism), colored ions & catalytic activity, iron ore dressing & reduction (Blast furnace vs Midrex), steel alloys, and FeO, Fe2O3, Fe3O4 reaction networks.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Chemistry (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الباب الأول: العناصر الانتقالية وتعدين الحديد',
    unitTitleEn: 'Chapter 1: Transition Elements & Iron Metallurgy',
    lessonNumberAr: 'الدرس 1: السلسلة الانتقالية الأولى وخامات وتفاعلات الحديد',
    lessonNumberEn: 'Lesson 1: 3d Transition Series & Iron Chemistry',

    keyConceptsAr: [
      'التوزيع الإلكتروني لعناصر السلسلة الانتقالية الأولى ($_{21}\\text{Sc} \\to \\, _{30}\\text{Zn}$) وتدرج حالات التأكسد وأقصى حالة تأكسد في المنجنيز ($+7$)',
      'الخواص العامة لعناصر $3d$: الثبات النسبي لنصف القطر، الكثافة العالية، الخاصية البارامغناطيسية (عدد الإلكترونات المفردة في $3d$)، وتفسير ألوان الأيونات بالضوء المتمم',
      'مراحل استخلاص الحديد من خام الهيماتيت ($\\text{Fe}_2\\text{O}_3$): 1) تجهيز الخام (تكسير، تلبيد، تركيز، تحميص)، 2) الاختزال: في الفرن العالي بغاز $\\text{CO}$ وفي فرن مدركس بالغاز المائي ($\text{CO} + \text{H}_2$)',
      'أنواع السبائك: بينية (الحديد والصلب $\\text{Fe/C}$)، استبدالية (الحديد والكروم/النيكل)، وبين فلزية (السمنتيت $\\text{Fe}_3\\text{C}$)',
      'تفاعلات الحديد وأكاسيده: أكسيد الحديد الثنائي $\\text{FeO}$، أكسيد الحديد الثلاثي $\\text{Fe}_2\\text{O}_3$، والمغناطيسي الأسود $\\text{Fe}_3\\text{O}_4$'
    ],
    keyConceptsEn: [
      'Electronic configuration of 3d series (Sc to Zn), progressive oxidation states peaking at Mn (+7)',
      'General 3d periodic trends: nearly constant atomic radius, high density, paramagnetism vs diamagnetism, complementary color absorption',
      'Iron metallurgy from hematite: ore dressing (crushing, sintering, concentrating, roasting), reduction in Blast Furnace (CO) vs Midrex Furnace (water gas CO+H2)',
      'Alloy classifications: Interstitial (Carbon Steel), Substitutional (Stainless Steel Fe/Cr), and Intermetallic compounds (Cementite Fe3C)',
      'Chemical reactions and interconversions of iron, FeO, Fe2O3, and magnetite Fe3O4 with dilute/conc acids'
    ],

    conceptMapAr: [
      'السلسلة $3d$ ➔ امتلاء تدريجي للمستوى $3d$ ➔ تعدد حالات التأكسد ➔ نشاط حفزي وأيونات ملونة',
      'استخلاص الحديد ➔ تحميص الهيماتيت ➔ اختزال في الفرن العالي ($\\text{CO}$) / مدركس ($\text{CO}+\\text{H}_2$) ➔ إنتاج الصلب',
      'أكاسيد الحديد ➔ أكسدة $\\text{Fe} \\to \\text{Fe}_3\\text{O}_4 \\to \\text{Fe}_2\\text{O}_3$ ➔ اختزال بالهيدروجين والحرارة يرجع لـ $\\text{FeO}$ أو $\\text{Fe}$'
    ],
    conceptMapEn: [
      '3d Series ➔ Gradual 3d subshell filling ➔ Variable oxidation states ➔ Catalytic power & colored ions',
      'Iron Extraction ➔ Hematite Roasting ➔ Reduction in Blast Furnace (CO) or Midrex (CO+H2) ➔ Steel production',
      'Iron Oxides ➔ Oxidation Fe ➔ Fe3O4 ➔ Fe2O3; Temperature-controlled reduction yields FeO or Fe'
    ],

    learningOutcomesAr: [
      'تفسير الخاصية البارامغناطيسية وظاهرة الألوان في مركبات عناصر السلسلة الانتقالية الأولى.',
      'مقارنة فرن الاختزال العالي وفرن مدركس من حيث العامل المختزل ومعادلات الاختزال.',
      'كتابة وموازنة معادلات التمييز والتحويلات بين الحديد وأكاسيده الثلاثة ($\\text{FeO}, \\text{Fe}_2\\text{O}_3, \\text{Fe}_3\\text{O}_4$).'
    ],
    learningOutcomesEn: [
      'Explain paramagnetism, magnetic moment calculations, and complementary color absorption in 3d complexes.',
      'Compare Blast Furnace vs Midrex Furnace reduction mechanisms, reducing agents, and environmental cycles.',
      'Formulate and balance chemical conversion pathways between elemental Iron, FeO, Fe2O3, and Fe3O4.'
    ],

    vocabulary: [
      { termAr: 'المادة البارامغناطيسية', termEn: 'Paramagnetic Substance', definitionAr: 'مادة تنجذب للمجال المغناطيسي الخارجي لوجود إلكترونات مفردة في أوربيتالات المستوى الفرعي $3d$.' },
      { termAr: 'السبائك البين فلزية', termEn: 'Intermetallic Alloys', definitionAr: 'سبائك تتحد عناصرها اتحاداً كيميائياً لتكون مركبات صلبة لا تخضع صيغتها الكيميائية لقوانين التكافؤ المعروفة وتكون شديدة الصلابة مثل السمنتيت $\\text{Fe}_3\\text{C}$.' }
    ],

    warmupHookAr: 'لماذا تمتلك مركبات الحديد والنحاس ألواناً زاهية ومبهرة كالأزرق والأخضر والأصفر، بينما مركبات الصوديوم والألومنيوم والسكانديوم الثلاثي بيضاء شفافة عديمة اللون؟ السر يكمن في إلكترونات المستوى الفرعي $3d$ غير الممتلئة التي تمتص جزءاً من فوتونات الضوء المرئي وتظهر باللون المتمم له!',
    warmupHookEn: 'Why do transition metal complexes display brilliant blues, emeralds, and yellows, while s-block and Sc3+/Zn2+ compounds remain colorless? Partially filled 3d subshell d-d electronic transitions absorb specific visible wavelengths, reflecting complementary hues.',

    mainContentAr: `
### 1. الخواص العامة للسلسلة الانتقالية الأولى (General 3d Properties)
* **الخواص المغناطيسية:**
  * **بارامغناطيسية:** مادة تنجذب للمجال المغناطيسي الخارجي نتيجة وجود إلكترونات مفردة في $3d$ (مثل $\\text{Fe}^{3+}: 3d^5$).
  * **ديامغناطيسية:** مادة تتنافر مع المجال المغناطيسي الخارجي لأن جميع أوربيتالاتها في حالة ازدواج تامة (مثل $\\text{Zn}^{2+}: 3d^{10}$ و $\\text{Sc}^{3+}: 3d^0$).
* **تفسير الألوان:**
  * إذا امتصت المادة لوناً معيناً من ألوان الضوء المرئي، تراها العين باللون **المتمم (Complementary Color)**:
    * امتصاص الأحمر $\\implies$ يظهر باللون الأخضر (مثل مركبات الكروم الثلاثي $\\text{Cr}^{3+}$).
    * امتصاص البرتقالي $\\implies$ يظهر باللون الأزرق (مثل مركبات النحاس الثنائي $\\text{Cu}^{2+}$).

---

### 2. استخلاص وتعدين الحديد (Iron Metallurgy)
1. **الفرن العالي (Blast Furnace):**
   * **العامل المختزل:** غاز أول أكسيد الكربون ($\\text{CO}$) الناتج من فحم الكوك:
     $$\\text{C} + \\text{O}_2 \\longrightarrow \\text{CO}_2 \\quad , \\quad \\text{CO}_2 + \\text{C} \\longrightarrow 2\\text{CO}$$
     $$\\text{Fe}_2\\text{O}_3 + 3\\text{CO} \\xrightarrow{> 700^\\circ\\text{C}} 2\\text{Fe} + 3\\text{CO}_2 \\uparrow$$
2. **فرن مدركس (Midrex Furnace):**
   * **العامل المختزل:** الغاز المائي (خليط $\\text{CO} + \\text{H}_2$) المحضر من الغاز الطبيعي (الميثان $\\text{CH}_4$):
     $$2\\text{CH}_4 + \\text{CO}_2 + \\text{H}_2\\text{O} \\xrightarrow{\\text{Catalyst}} 3\\text{CO} + 5\\text{H}_2$$
     $$2\\text{Fe}_2\\text{O}_3 + 3\\text{CO} + 3\\text{H}_2 \\longrightarrow 4\\text{Fe} + 3\\text{CO}_2 + 3\\text{H}_2\\text{O}$$

---

### 3. تفاعلات أكاسيد الحديد (Iron Oxides Network)
* **أكسيد الحديد المغناطيسي ($\\text{Fe}_3\\text{O}_4$):**
  * هو أكسيد مختلط ($\\text{FeO} \\cdot \\text{Fe}_2\\text{O}_3$)، ولذلك عند تفاعله مع الأحماض المعدنية المركزة الساخنة يعطي خليطاً من أملاح الحديد الثنائي وأملاح الحديد الثلاثي:
    $$\\text{Fe}_3\\text{O}_4 + 8\\text{HCl}_{(\\text{conc.})} \\longrightarrow \\text{FeCl}_2 + 2\\text{FeCl}_3 + 4\\text{H}_2\\text{O}$$
* **تسخين كبريتات الحديد الثنائي ($\\text{FeSO}_4$):**
  $$2\\text{FeSO}_4 \\xrightarrow{\\Delta} \\text{Fe}_2\\text{O}_3 + \\text{SO}_2 \\uparrow + \\text{SO}_3 \\uparrow$$
* **تسخين أوكسالات الحديد الثنائي بمعزل عن الهواء:**
  $$(\\text{COO})_2\\text{Fe} \\xrightarrow{\\Delta \\, \\text{No Air}} \\text{FeO} + \\text{CO} \\uparrow + \\text{CO}_2 \\uparrow$$
    `,
    mainContentEn: `
### 1. Magnetic & Color Properties
* Paramagnetic: Unpaired 3d electrons (attracted to magnetic field).
* Diamagnetic: Paired electrons (repelled).
* Complementary Colors: Absorbing red yields green (Cr3+); absorbing orange yields blue (Cu2+).

### 2. Iron Reduction Furnaces
* Blast Furnace: Coke carbon ➔ CO reducing agent at >700°C.
* Midrex Furnace: Natural gas ➔ Water gas (CO + H2) reducing agent.

### 3. Iron Oxides Reactions
* Magnetite $Fe_3O_4 + 8HCl \\to FeCl_2 + 2FeCl_3 + 4H_2O$.
* Thermal decomposition: $2FeSO_4 \\xrightarrow{\\Delta} Fe_2O_3 + SO_2 + SO_3$.
    `,

    diagramType: 'metallurgy_flowchart',
    diagramData: {
      type: 'iron_furnace_comparison',
      title: 'مقارنة اختزال خامات الحديد بين الفرن العالي وفرن مدركس',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="40" width="150" height="130" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2" />
        <text x="55" y="65" fill="#f43f5e" font-size="12" font-weight="bold">الفرن العالي (Blast)</text>
        <text x="45" y="95" fill="#f8fafc" font-size="11">فحم الكوك ➔ غاز CO</text>
        <text x="45" y="125" fill="#fbbf24" font-size="11">Fe₂O₃ + 3CO ➔ 2Fe</text>
        <text x="45" y="150" fill="#94a3b8" font-size="10">حرارة > 700°C</text>
        <rect x="220" y="40" width="150" height="130" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="245" y="65" fill="#38bdf8" font-size="12" font-weight="bold">فرن مدركس (Midrex)</text>
        <text x="235" y="95" fill="#f8fafc" font-size="11">غاز طبيعي ➔ (CO + H₂)</text>
        <text x="235" y="125" fill="#fbbf24" font-size="11">Fe₂O₃ + CO+H₂ ➔ Fe</text>
        <text x="235" y="150" fill="#94a3b8" font-size="10">دورة غازية مغلقة</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: التمييز عملياً بين أكسيد الحديد الثنائي وأكسيد الحديد الثلاثي',
        titleEn: 'Example: Distinguishing Iron(II) Oxide from Iron(III) Oxide',
        problemAr: 'كيف تميز عملياً بين مسحوق أكسيد الحديد الثنائي FeO ومسحوق أكسيد الحديد الثلاثي Fe2O3؟',
        problemEn: 'How to chemically distinguish between FeO and Fe2O3 powders?',
        stepsAr: [
          'بإضافة حمض كبريتيك أو هيدروكلوريك مخفف (Dilute Acid) إلى كل منهما على حدة في درجة حرارة الغرفة.',
          'مع $\\text{FeO}$: يذوب ويتفاعل مع الحمض المخفف مكوناً ملح حديد ثنائي أخضر اللون وماء: $\\text{FeO} + \\text{H}_2\\text{SO}_4 \\to \\text{FeSO}_4 + \\text{H}_2\\text{O}$.',
          'مع $\\text{Fe}_2\\text{O}_3$: لا يتفاعل مع الأحماض المخففة ولا يذوب (يتفاعل فقط مع الأحماض المركزة الساخنة).'
        ],
        stepsEn: [
          'Add dilute sulfuric or hydrochloric acid to each sample.',
          'FeO dissolves readily in dilute acid yielding a pale green Fe(II) solution.',
          'Fe2O3 does not react with dilute acids (requires hot concentrated acid).'
        ],
        finalAnswerAr: 'بإضافة حمض مخفف: يتفاعل FeO ويذوب، بينما لا يتفاعل Fe2O3.',
        finalAnswerEn: 'Dilute acid reacts with FeO but does not react with Fe2O3.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12ch-1',
        problemAr: 'علل: عزم أيون المنجنيز الثنائي Mn2+ أكبر من عزم أيون الحديد الثنائي Fe2+.',
        problemEn: 'Explain why the magnetic moment of Mn2+ is greater than Fe2+.',
        solutionStepsAr: [
          'التوزيع الإلكتروني لأيون $\\text{Mn}^{2+}$ ($_{25}\\text{Mn}$): $[\\text{Ar}]_{18} \\, 3d^5$، يحتوي على 5 إلكترونات مفردة.',
          'التوزيع الإلكتروني لأيون $\\text{Fe}^{2+}$ ($_{26}\\text{Fe}$): $[\\text{Ar}]_{18} \\, 3d^6$، يحتوي على 4 إلكترونات مفردة فقط (أوربيتال مزدوج و 4 مفردة).',
          'كلما زاد عدد الإلكترونات المفردة في المستوى $3d$ زادت قيمة العزم المغناطيسي.'
        ],
        finalAnswerAr: 'لأن Mn2+ يحتوي على 5 إلكترونات مفردة، بينما Fe2+ يحتوي على 4 إلكترونات مفردة فقط.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12ch-1',
        questionAr: 'العامل المختزل المستخدم لاختزال خام الهيماتيت في "فرن مدركس" هو:',
        questionEn: 'The reducing agent utilized for hematite reduction in the Midrex furnace is:',
        optionsAr: ['الغاز المائي (خليط أول أكسيد الكربون والهيدروجين CO + H₂)', 'غاز أول أكسيد الكربون النقي فقط', 'فحم الكوك الصلب', 'غاز الميثان دون معالجة'],
        optionsEn: ['Water Gas (mixture of CO + H2)', 'Pure Carbon Monoxide only', 'Solid Coke Coal', 'Raw Methane gas'],
        correctIndex: 0,
        explanationAr: 'في فرن مدركس يُستخدم الغاز المائي ($\text{CO} + \text{H}_2$) المحضر من الغاز الطبيعي كعامل مختزل.',
        explanationEn: 'The Midrex process employs reformed water gas (CO + H2) as the active reducing agent.'
      }
    ],

    assessment: {
      id: 'quiz-h12-ch1',
      titleAr: 'اختبار إتقان العناصر الانتقالية وتعدين الحديد',
      titleEn: 'Mastery Quiz: Transition Elements & Metallurgy',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-ch1-1',
          textAr: 'سبيكة "الصلب الذي لا يصدأ" (الستانلس ستيل) المكونة من الحديد والكروم تُعد من السبائك:',
          textEn: 'Stainless steel alloy composed of Iron and Chromium is classified as:',
          optionsAr: ['الاستبدالية (Substitutional Alloy)', 'البينية (Interstitial Alloy)', 'البين فلزية (Intermetallic)', 'المركبات التساهمية'],
          optionsEn: ['Substitutional Alloy', 'Interstitial Alloy', 'Intermetallic Alloy', 'Covalent Compound'],
          correctIndex: 0,
          conceptTestedAr: 'أنواع السبائك وشروط السبيكة الاستبدالية',
          conceptTestedEn: 'Alloy types and substitutional criteria',
          explanationAr: 'تتكون السبيكة الاستبدالية بين فلزين متقاربين في نصف القطر والشكل البلوري والخواص الكيميائية كالحديد والكروم.',
          explanationEn: 'Fe and Cr form a substitutional alloy due to nearly identical atomic radii and crystal structures.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch1-2',
          textAr: 'جميع المركبات والأيونات الآتية غير ملونة وديامغناطيسية (عزمها المغناطيسي صفر) ما عدا:',
          textEn: 'All of the following species are colorless and diamagnetic EXCEPT:',
          optionsAr: ['$\\text{TiCl}_3$ (كلوريد التيتانيوم الثلاثي)', '$\\text{ScCl}_3$ (كلوريد السكانديوم الثلاثي)', '$\\text{ZnSO}_4$ (كبريتات الخارصين)', '$\\text{TiO}_2$ (ثاني أكسيد التيتانيوم)'],
          optionsEn: ['TiCl3', 'ScCl3', 'ZnSO4', 'TiO2'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الأيونات الملونة والبارامغناطيسية والديامغناطيسية',
          conceptTestedEn: 'Colored paramagnetic vs colorless diamagnetic ions',
          explanationAr: 'في $\\text{TiCl}_3$ يكون التيتانيوم $\\text{Ti}^{3+}$ بتوزيع $3d^1$؛ وجود إلكترون مفرد يجعله ملوناً وبارامغناطيسياً، بينما الباقي $3d^0$ أو $3d^{10}$.',
          explanationEn: 'Ti3+ in TiCl3 has a 3d1 electron, imparting color and paramagnetism.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-ch1-3',
          textAr: 'عند تسخين أوكسالات الحديد الثنائي $(\\text{COO})_2\\text{Fe}$ بمعزل عن الهواء ينتج:',
          textEn: 'Heating Iron(II) Oxalate in the absence of air produces:',
          optionsAr: ['أكسيد حديد ثنائي (FeO) وغازي CO و CO₂', 'أكسيد حديد ثلاثي (Fe₂O₃)', 'أكسيد حديد مغناطيسي (Fe₃O₄)', 'حديد حر وغاز أكسجين'],
          optionsEn: ['Iron(II) oxide (FeO) and CO & CO2 gases', 'Iron(III) oxide (Fe2O3)', 'Magnetite (Fe3O4)', 'Elemental Iron and O2'],
          correctIndex: 0,
          conceptTestedAr: 'تحضير أكسيد الحديد الثنائي بمعزل عن الهواء',
          conceptTestedEn: 'Preparation of FeO via anaerobic oxalate pyrolysis',
          explanationAr: 'ينتج $\\text{FeO}$ ولا يتأكسد لـ $\\text{Fe}_2\\text{O}_3$ بسبب وجود غاز أول أكسيد الكربون $\\text{CO}$ وهو عامل مختزل قوي.',
          explanationEn: 'FeO forms because released CO acts as a reducing agent preventing oxidation to Fe2O3.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── CHAPTER 2: CHEMICAL ANALYSIS ──
  {
    id: 'h12-ch-2',
    order: 2,
    titleAr: 'المحاضرة 2: الباب الثاني: التحليل الكيميائي الوصفي والكمي، الكشف عن الأنيونات والكاتيونات، والمعايرة والتطاير والترسيب',
    titleEn: 'Lecture 2: Chapter 2: Qualitative & Quantitative Chemical Analysis, Anion/Cation Groups, Titration & Gravimetry',
    subtitleAr: 'مجموعات الكشف عن الأنيونات (مجموعة HCl، H₂SO₄ المركز، و BaCl₂)، الكشف عن الكاتيونات، المعايرة الحجمية وقوانين الحساب (MaVa/na = MbVb/nb)، وطرق التحليل الكتلي بالترسيب والتطاير',
    subtitleEn: 'Master qualitative analysis schemes for anions (HCl, conc H2SO4, BaCl2 groups) and cations (Cu2+, Fe2+, Fe3+, Al3+, Ca2+), acid-base volumetric titration stoichiometry, and gravimetric precipitation/volatilization.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Chemistry (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الباب الثاني: التحليل الكيميائي',
    unitTitleEn: 'Chapter 2: Chemical Analysis',
    lessonNumberAr: 'الدرس 2: التحليل الوصفي والتحليل الكمي والحساب الكيميائي',
    lessonNumberEn: 'Lesson 2: Qualitative & Quantitative Analysis',

    keyConceptsAr: [
      'التحليل الكيفي (الوصفي): الكشف عن الشقوق الحامضية (الأنيونات) والشقوق القاعدية (الكاتيونات)',
      'مجموعات الأنيونات الثلاث: 1) مجموعة $\\text{HCl}$ المخفف (كربونات، بيكربونات، كبريتيت، كبريتيد، ثيوكبريتات، نيتريت)، 2) مجموعة $\\text{H}_2\\text{SO}_4$ المركز (كلوريد، بروميد، يوديد، نترات)، 3) مجموعة محلول كلوريد الباريوم $\\text{BaCl}_2$ (كبريتات، فوسفات)',
      'الكواشف التأكيدية الهامة: نترات الفضة ($\\text{AgNO}_3$) لتسعة أنيونات مختلفة، وتجربة الحلقة البنية للنترات',
      'التحليل الحجمي بالمعايرة (Volumetric Titration): قانون التعادل $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$ وحساب النسبة المئوية للشوائب والنقاء',
      'التحليل الكتلي (Gravimetric Analysis): طريقة التطاير لحساب ماء التبلور ($x\\text{H}_2\\text{O}$)، وطريقة الترسيب باستخدام أوراق ترشيح عديمة الرماد'
    ],
    keyConceptsEn: [
      'Qualitative analytical chemistry: identifying acidic radicals (anions) and basic radicals (cations)',
      '3 Anion analytical groups: Dilute HCl group, Conc H2SO4 group, and Barium Chloride BaCl2 group',
      'Crucial confirmatory reagents: Silver Nitrate AgNO3 precipitate color matrix and the Brown Ring test for nitrates',
      'Volumetric Neutralization Titration stoichiometry: (Ma * Va) / na = (Mb * Vb) / nb and percentage purity determination',
      'Gravimetric analysis: volatilization method for crystallization water hydration (x H2O) and precipitation gravimetry using ashless filter paper'
    ],

    conceptMapAr: [
      'التحليل الكيميائي ➔ وصفي (معرفة نوع المكونات: أنيونات + كاتيونات) ➔ كمي (معرفة نسبة وتركيز كل مكون)',
      'الكشف عن الأنيونات ➔ حمض أكثر ثباتاً يطرد حمضاً أقل ثباتاً على هيئة غاز مميز',
      'التحليل الكمي ➔ معايرة حجمية (تعادل وأدلة) + تحليل بالكتلة (تطاير وترسيب)'
    ],
    conceptMapEn: [
      'Chemical Analysis ➔ Qualitative (Anions/Cations identification) ➔ Quantitative (Concentration/Purity percentages)',
      'Anion Principle ➔ More stable acid displaces less stable acid as characteristic gas',
      'Quantitative Types ➔ Volumetric Titration + Gravimetric (Precipitation & Hydration Volatilization)'
    ],

    learningOutcomesAr: [
      'التمييز عملياً بين أملاح الأنيونات المختلفة باستخدام التجارب الأساسية والتأكيدية ونترات الفضة.',
      'حل مسائل المعايرة الحسابية المعقدة وتعيين تركيز المحاليل ونسب المواد في العينات غير النقية.',
      'حساب الصيغة الجزيئية للأملاح المتهدرتة ونسبة ماء التبلور بطريقة التطاير بدقة رياضية.'
    ],
    learningOutcomesEn: [
      'Identify unknown anions and cations experimentally using selective reagents and silver nitrate tests.',
      'Calculate solution molarities, masses, and purity percentages from titration data.',
      'Determine hydration water coefficients (x) in crystal hydrates via gravimetric volatilization.'
    ],

    vocabulary: [
      { termAr: 'نقطة نهاية التفاعل (End Point)', termEn: 'Titration End Point', definitionAr: 'النقطة التي يتم عندها تمام التفاعل بين الحمض والقاعدة ويتغير عندها لون الدليل الكيميائي بشكل واضح.' },
      { termAr: 'ماء التبلور', termEn: 'Water of Crystallization', definitionAr: 'عدد جزيئات الماء المرتبطة كيميائياً بالملح في شبكته البلورية الصلبة وتتطاير عند التسخين الشديد.' }
    ],

    warmupHookAr: 'عندما تشك مصلحة الكيمياء والجمارك في شحنة مستوردة من ملح الطعام وتحتاج لتحديد ما إذا كانت نقية 100% أم تحتوي على شوائب غير مصرح بها ونسبتها، كيف يتم فحصها بدقة الميكروجرام؟ عبر تطبيق معادلة المعايرة الحجمية وطرق التحليل بالترسيب التي تحسب نسبة كل مادة بالمليجرام!',
    warmupHookEn: 'How do food inspection authorities certify whether commercial table salt batches meet 99.5% purity standards? By running silver nitrate precipitation titrations and gravimetric stoichiometric analysis accurate to milligrams.',

    mainContentAr: `
### 1. الكشف عن الأنيونات بنترات الفضة ($\\text{AgNO}_3$ Matrix)
نترات الفضة كاشف تأكيدي فائق الأهمية يميز بين 6 أنيونات شهيرة:
1. **مع الكبريتيد ($\\text{S}^{2-}$):** راسب أسود من $\\text{Ag}_2\\text{S}$.
2. **مع الكبريتيت ($\\text{SO}_3^{2-}$):** راسب أبيض يسود بالتسخين من $\\text{Ag}_2\\text{SO}_3$.
3. **مع الكلوريد ($\\text{Cl}^-$):** راسب أبيض يصير بنفسجياً في الضوء و **يذوب سريعاً** في محلول النشادر المركز ($\\text{AgCl}$).
4. **مع البروميد ($\\text{Br}^-$):** راسب أبيض مصفر يصير داكناً في الضوء و **يذوب ببطء** في محلول النشادر ($\\text{AgBr}$).
5. **مع اليوديد ($\\text{I}^-$):** راسب أصفر **لا يذوب إطلاقاً** في محلول النشادر ($\\text{AgI}$).
6. **مع الفوسفات ($\\text{PO}_4^{3-}$):** راسب أصفر **يذوب** في محلول النشادر وحمض النيتريك ($\\text{Ag}_3\\text{PO}_4$).

---

### 2. قوانين التحليل الكمي الحجمي (Volumetric Titration)
* **قانون المعايرة الأساسي:**
  $$\\frac{M_a \\cdot V_a}{n_a} = \\frac{M_b \\cdot V_b}{n_b}$$
  * حيث $M_a, M_b$: تركيز الحمض والقاعدة بالمولاري.
  * $V_a, V_b$: حجم الحمض والقاعدة باللتر (أو $\\text{mL}$ بشرط توحيد الوحدات).
  * $n_a, n_b$: عدد مولات الحمض والقاعدة من المعادلة الموزونة.
* **النسبة المئوية لنقاء المادة في العينة:**
  $$\\text{النسبة المئوية} = \\frac{\\text{كتلة المادة النقية}}{\\text{كتلة العينة غير النقية}} \\times 100\\%$$
    `,
    mainContentEn: `
### 1. Silver Nitrate ($AgNO_3$) Precipitate Matrix
* Sulfide $S^{2-}$ ➔ Black precipitate ($Ag_2S$).
* Chloride $Cl^-$ ➔ White, dissolves rapidly in ammonia ($AgCl$).
* Bromide $Br^-$ ➔ Creamy, dissolves slowly in ammonia ($AgBr$).
* Iodide $I^-$ ➔ Yellow, insoluble in ammonia ($AgI$).
* Phosphate $PO_4^{3-}$ ➔ Yellow, dissolves in ammonia ($Ag_3PO_4$).

### 2. Titration Stoichiometry
$$\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$$
    `,

    diagramType: 'titration_apparatus_diagram',
    diagramData: {
      type: 'titration_buret',
      title: 'جهاز المعايرة الحجمية (السحاحة والدورق المخروطي والدليل)',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="195" y="10" width="10" height="120" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" />
        <text x="215" y="60" fill="#0284c7" font-size="11">سحاحة (حمض قياسي Ma, Va)</text>
        <polygon points="175,170 225,170 210,140 190,140" fill="#fef3c7" stroke="#d97706" stroke-width="2" />
        <text x="70" y="165" fill="#d97706" font-size="11">دورق مخروطي (قاعدة مجهولة + دليل)</text>
        <line x1="200" y1="130" x2="200" y2="140" stroke="#f43f5e" stroke-width="2" />
        <circle cx="200" cy="135" r="3" fill="#f43f5e" />
        <text x="220" y="138" fill="#f43f5e" font-size="10">صنبور التحكم</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: مسألة معايرة حمض الهيدروكلوريك مع هيدروكسيد الكالسيوم',
        titleEn: 'Example: Titration Calculation of HCl with Ca(OH)2',
        problemAr: 'أُجريت معايرة $20\\text{ mL}$ من محلول هيدروكسيد الكالسيوم $\\text{Ca(OH)}_2$ فتعادلت تماماً مع $25\\text{ mL}$ من حمض الهيدروكلوريك $\\text{HCl}$ تركيزه $0.1\\text{ M}$. احسب التركيز المولاري لهيدروكسيد الكالسيوم.',
        problemEn: '20 mL of Ca(OH)2 is neutralized by 25 mL of 0.1 M HCl. Calculate Ca(OH)2 molarity.',
        stepsAr: [
          'كتابة معادلة التفاعل الموزونة: $2\\text{HCl} + \\text{Ca(OH)}_2 \\longrightarrow \\text{CaCl}_2 + 2\\text{H}_2\\text{O}$.',
          'من المعادلة: $n_a = 2$ و $n_b = 1$.',
          'تطبيق قانون المعايرة: $\\frac{M_a V_a}{n_a} = \\frac{M_b V_b}{n_b}$.',
          '$\\frac{0.1 \\times 25}{2} = \\frac{M_b \\times 20}{1} \\implies \\frac{2.5}{2} = 20 M_b \\implies 1.25 = 20 M_b \\implies M_b = 0.0625\\text{ M}$.'
        ],
        stepsEn: [
          'Balanced reaction: 2 HCl + Ca(OH)2 ➔ CaCl2 + 2 H2O (na = 2, nb = 1).',
          'Apply (Ma * Va) / na = (Mb * Vb) / nb.',
          '(0.1 * 25) / 2 = (Mb * 20) / 1 ⟹ 1.25 = 20 Mb ⟹ Mb = 0.0625 M.'
        ],
        finalAnswerAr: 'تركيز هيدروكسيد الكالسيوم $M_b = 0.0625\\text{ M}$ (مول/لتر)',
        finalAnswerEn: 'Molarity of Ca(OH)2 = 0.0625 M'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12ch-2',
        problemAr: 'كيف تميز عملياً بين محلول كبريتات الصوديوم Na2SO4 ومحلول فوسفات الصوديوم Na3PO4؟',
        problemEn: 'How to distinguish between Na2SO4 and Na3PO4 solutions?',
        solutionStepsAr: [
          'بإضافة محلول كلوريد الباريوم $\\text{BaCl}_2$ إلى كل منهما:',
          'يتكون في الحالتين راسب أبيض (كبريتات الباريوم $\\text{BaSO}_4$ وفوسفات الباريوم $\\text{Ba}_3(\\text{PO}_4)_2$).',
          'ثم نضيف حمض الهيدروكلوريك المخفف $\\text{HCl}$ إلى الراسبين:',
          'راسب فوسفات الباريوم **يذوب** في حمض $\\text{HCl}$ المخفف، بينما راسب كبريتات الباريوم **لا يذوب** في حمض $\\text{HCl}$ المخفف.'
        ],
        finalAnswerAr: 'بمحلول BaCl2 ثم إضافة حمض HCl: يذوب راسب الفوسفات، بينما لا يذوب راسب الكبريتات.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12ch-2',
        questionAr: 'عند إضافة محلول نترات الفضة AgNO₃ إلى محلول ملح مجهول تكون راسب أصفر لا يذوب في محلول النشادر، فإن الأنيون هو:',
        questionEn: 'When AgNO3 is added to an unknown salt solution, a yellow precipitate insoluble in ammonia forms. The anion is:',
        optionsAr: ['اليوديد (I⁻)', 'الفوسفات (PO₄³⁻)', 'الكلوريد (Cl⁻)', 'الكبريتيد (S²⁻)'],
        optionsEn: ['Iodide (I-)', 'Phosphate (PO4 3-)', 'Chloride (Cl-)', 'Sulfide (S2-)'],
        correctIndex: 0,
        explanationAr: 'يوديد الفضة $\\text{AgI}$ راسب أصفر لا يذوب في النشادر، بينما فوسفات الفضة الأصفر يذوب في النشادر.',
        explanationEn: 'Silver iodide AgI is a distinct yellow precipitate completely insoluble in aqueous ammonia.'
      }
    ],

    assessment: {
      id: 'quiz-h12-ch2',
      titleAr: 'اختبار إتقان التحليل الكيميائي الوصفي والكمي',
      titleEn: 'Mastery Quiz: Chemical Analysis',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-ch2-1',
          textAr: 'الغاز الذي يسود ورقة مبللة بمحلول أسيتات الرصاص الثنائي $\\text{(CH}_3\\text{COO)}_2\\text{Pb}$ عند الكشف عن أنيون الكبريتيد هو:',
          textEn: 'The gas that turns lead(II) acetate paper black during sulfide anion testing is:',
          optionsAr: ['كبريتيد الهيدروجين (H₂S)', 'ثاني أكسيد الكبريت (SO₂)', 'ثاني أكسيد النيتروجين (NO₂)', 'غاز النشادر (NH₃)'],
          optionsEn: ['Hydrogen sulfide (H2S)', 'Sulfur dioxide (SO2)', 'Nitrogen dioxide (NO2)', 'Ammonia (NH3)'],
          correctIndex: 0,
          conceptTestedAr: 'الكشف عن غاز كبريتيد الهيدروجين',
          conceptTestedEn: 'Identification of H2S gas',
          explanationAr: 'يتفاعل غاز $\\text{H}_2\\text{S}$ مع أسيتات الرصاص مكوناً راسب كبريتيد الرصاص الأسود $\\text{PbS}$.',
          explanationEn: 'H2S reacts with lead acetate to deposit black lead sulfide PbS.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch2-2',
          textAr: 'عند معايرة حمض الكبريتيك $\\text{H}_2\\text{SO}_4$ مع هيدروكسيد الصوديوم $\\text{NaOH}$، تكون النسبة بين عدد مولات الحمض إلى القاعدة ($n_a : n_b$) في القانون هي:',
          textEn: 'In titrating H2SO4 with NaOH, the mole ratio (na : nb) in the balanced formula is:',
          optionsAr: ['1 : 2', '2 : 1', '1 : 1', '2 : 3'],
          optionsEn: ['1 : 2', '2 : 1', '1 : 1', '2 : 3'],
          correctIndex: 0,
          conceptTestedAr: 'وزن معادلة المعايرة وتحديد معامل المولات',
          conceptTestedEn: 'Stoichiometric mole ratios in titration',
          explanationAr: 'المعادلة: $\\text{H}_2\\text{SO}_4 + 2\\text{NaOH} \\to \\text{Na}_2\\text{SO}_4 + 2\\text{H}_2\\text{O}$؛ إذن $n_a = 1$ و $n_b = 2$.',
          explanationEn: 'H2SO4 is diprotic requiring 2 moles of NaOH, giving na = 1, nb = 2.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch2-3',
          textAr: 'الراسب البني المحمر الجيلاتيني الذي يذوب في الأحماض المخففة يتكون عند إضافة هيدروكسيد الصوديوم إلى محلول يحتوي على كاتيون:',
          textEn: 'A reddish-brown gelatinous precipitate soluble in dilute acids forms when adding NaOH to a solution containing:',
          optionsAr: ['الحديد الثلاثي (Fe³⁺)', 'الحديد الثنائي (Fe²⁺)', 'الألومنيوم (Al³⁺)', 'النحاس الثنائي (Cu²⁺)'],
          optionsEn: ['Iron(III) Fe3+', 'Iron(II) Fe2+', 'Aluminum Al3+', 'Copper(II) Cu2+'],
          correctIndex: 0,
          conceptTestedAr: 'الكشف عن كاتيونات المجموعة التحليلية الثالثة',
          conceptTestedEn: 'Identification of Group III cations (Fe3+)',
          explanationAr: 'أيون $\\text{Fe}^{3+}$ يعطي مع القلويات راسب هيدروكسيد الحديد الثلاثي $\\text{Fe(OH)}_3$ البني المحمر.',
          explanationEn: 'Fe3+ forms a reddish-brown gelatinous Fe(OH)3 precipitate with alkalis.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── CHAPTER 3: CHEMICAL & IONIC EQUILIBRIUM ──
  {
    id: 'h12-ch-3',
    order: 3,
    titleAr: 'المحاضرة 3: الباب الثالث: الاتزان الكيميائي والأيوني، قاعدة لوشاتيليه، الرقم الهيدروجيني (pH) وحاصل الإذابة (Ksp)',
    titleEn: 'Lecture 3: Chapter 3: Chemical & Ionic Equilibrium, Le Chatelier\'s Principle, pH/pOH & Solubility Product (Ksp)',
    subtitleAr: 'التفاعلات التامة والانعكاسية، قانون فعل الكتلة وثابت الاتزان (Kc, Kp)، العوامل المؤثرة وقاعدة لوشاتيليه، قانون استفالد للتخفيف (Ka)، التأين الذاتي للماء (Kw)، وحسابات pH وحاصل الإذابة Ksp',
    subtitleEn: 'Master dynamic equilibrium, Law of Mass Action, Kc & Kp constants, Le Chatelier\'s principle (temp, pressure, conc), Ostwald\'s dilution law, Kw autoionization of water, pH/pOH calculations, and Ksp solubility product.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Chemistry (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الباب الثالث: الاتزان الكيميائي',
    unitTitleEn: 'Chapter 3: Chemical Equilibrium',
    lessonNumberAr: 'الدرس 3: الاتزان الكيميائي والاتزان الأيوني وحاصل الإذابة',
    lessonNumberEn: 'Lesson 3: Chemical & Ionic Equilibrium & Ksp',

    keyConceptsAr: [
      'التفاعلات التامة (غير الانعكاسية بخروج غاز أو تكون راسب) والتفاعلات الانعكاسية ذات الاتزان الديناميكي ($r_1 = r_2$)',
      'قانون فعل الكتلة وثابت الاتزان بدلالة التركيز $K_c = \\frac{[\\text{Products}]}{[\\text{Reactants}]}$ وبدلالة الضغوط الجزيئية $K_p$',
      'قاعدة لوشاتيليه (Le Chatelier\'s Principle): أثر التغير في التركيز والضغط ودرجة الحرارة (الوحيدة التي تغير قيمة $K_c$)',
      'الاتزان الأيوني في الإلكتروليتات الضعيفة وقانون استفالد للتخفيف ($K_a = \\alpha^2 C_a$ و $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a}$)',
      'الأس الهيدروجيني: $\\text{pH} = -\\log[\\text{H}^+]$، $\\text{pOH} = -\\log[\\text{OH}^-]$، والعلاقة $\\text{pH} + \\text{pOH} = 14$ عند $25^\\circ\\text{C}$',
      'حاصل الإذابة ($K_{sp}$) للأملاح شحيحة الذوبان في الماء وتعيين درجة الإذابة ($x$)'
    ],
    keyConceptsEn: [
      'Irreversible complete reactions vs dynamic reversible equilibrium systems (forward rate r1 = reverse rate r2)',
      'Law of Mass Action, equilibrium constants Kc (molar concentration) and Kp (partial pressures)',
      'Le Chatelier\'s Principle predictions: concentration shifts, pressure volume shifts, and temperature effects (only factor altering Kc value)',
      'Ionic equilibrium in weak electrolytes, Ostwald dilution law (Ka = alpha^2 * Ca), and hydronium concentration [H3O+] = sqrt(Ka * Ca)',
      'Autoionization of water Kw = 1.0 x 10^-14, pH/pOH logarithmic scales (pH + pOH = 14 at 25°C), and salt hydrolysis',
      'Solubility Product Constant (Ksp) for sparingly soluble salts and molar solubility calculation'
    ],

    conceptMapAr: [
      'الاتزان الكيميائي ➔ نظام ساكن ظاهرياً وديناميكي حركياً ➔ سرعة التفاعل الطردي = سرعة التفاعل العكسي',
      'قاعدة لوشاتيليه ➔ إذا حَدث تغير في (تركيز، ضغط، حرارة) ➔ يزاح التفاعل في الاتجاه الذي يقلل أو يلغي هذا التأثير',
      'الاتزان الأيوني ➔ أحماض وقواعد ضعيفة ➔ $K_a, K_b$ ➔ حساب الأس الهيدروجيني $\\text{pH}$ وحاصل الإذابة $K_{sp}$'
    ],
    conceptMapEn: [
      'Chemical Equilibrium ➔ Macroscopically static, microscopically dynamic (r_forward = r_reverse)',
      'Le Chatelier ➔ Perturbation (concentration, pressure, temperature) shifts equilibrium to oppose change',
      'Ionic Equilibrium ➔ Weak acids/bases ➔ Ka, Kb, Kw ➔ pH/pOH determination & Ksp salt solubility'
    ],

    learningOutcomesAr: [
      'التنبؤ باتجاه إزاحة الاتزان وقيمة ثابت الاتزان عند تغيير درجة الحرارة أو الضغط أو التركيز باستخدام قاعدة لوشاتيليه.',
      'حساب تركيز أيون الهيدرونيوم والأس الهيدروجيني ($\\text{pH}$) للأحماض والقواعد الضعيفة والمحاليل الملحية.',
      'حساب حاصل الإذابة ($K_{sp}$) للأملاح شحيحة الذوبان وتحديد درجة إذابتها في الماء النقي.'
    ],
    learningOutcomesEn: [
      'Predict equilibrium shifts and evaluate Kc alterations under temperature, pressure, and concentration stresses via Le Chatelier\'s principle.',
      'Calculate hydronium ion concentration, hydroxide concentration, and pH/pOH of weak and strong electrolytes.',
      'Determine solubility product constants (Ksp) and molar solubilities of sparingly soluble salts.'
    ],

    vocabulary: [
      { termAr: 'قاعدة لوشاتيليه', termEn: 'Le Chatelier\'s Principle', definitionAr: 'إذا أثر مؤثر خارجي (مثل التركيز أو الضغط أو درجة الحرارة) على نظام في حالة اتزان، فإن النظام ينشط في الاتجاه الذي يقلل أو يلغي تأثير هذا التغير.' },
      { termAr: 'حاصل الإذابة (Ksp)', termEn: 'Solubility Product (Ksp)', definitionAr: 'حاصل ضرب تركيزات أيونات الملح شحيح الذوبان في محلوله المشبع مقدرة بالمول/لتر كل منها مرفوع لأس يساوي عدد مولات الأيونات في معادلة التفكك.' }
    ],

    warmupHookAr: 'لماذا يتغير لون غاز ثاني أكسيد النيتروجين البني المحمر $\\text{NO}_2$ المحبوس داخل دورق زجاجي إلى لون شفاف عديم اللون تماماً بمجرد وضعه في حوض به ماء مثلج؟ لأن تفاعل تكوين رابع أكسيد النيتروجين $\\text{N}_2\\text{O}_4$ طارد للحرارة، والتبريد يزيح الاتزان طردياً حسب قاعدة لوشاتيليه!',
    warmupHookEn: 'Why does brown NO2 gas sealed in a flask turn completely colorless upon submerging in ice water? Dimerization to colorless N2O4 is exothermic; cooling forces the equilibrium forward according to Le Chatelier\'s principle.',

    mainContentAr: `
### 1. قاعدة لوشاتيليه وثابت الاتزان (Le Chatelier & Equilibrium)
* **تأثير درجة الحرارة (العامل الوحيد المغير لقيمة $K$):**
  * **في التفاعل الطارد للحرارة (Exothermic $\\Delta H < 0$):**
    $$\\text{A} + \\text{B} \\rightleftharpoons \\text{C} + \\text{Heat}$$
    * رفع الحرارة $\\implies$ ينشط التفاعل **عكسياً** $\\implies$ **تقل قيمة $K_c$**.
    * خفض الحرارة $\\implies$ ينشط التفاعل **طردياً** $\\implies$ **تزداد قيمة $K_c$**.
  * **في التفاعل الماص للحرارة (Endothermic $\\Delta H > 0$):**
    * رفع الحرارة $\\implies$ ينشط التفاعل **طردياً** $\\implies$ **تزداد قيمة $K_c$**.

---

### 2. قوانين الاتزان الأيوني وحسابات pH (Ionic Equilibrium)
* **تركيز أيون الهيدرونيوم لحمض ضعيف:**
  $$[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a} = \\alpha \\cdot C_a$$
* **تركيز أيون الهيدروكسيد لقاعدة ضعيفة:**
  $$[\\text{OH}^-] = \\sqrt{K_b \\cdot C_b} = \\alpha \\cdot C_b$$
* **مقياس الأس الهيدروجيني:**
  $$\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] \\quad , \\quad \\text{pOH} = -\\log[\\text{OH}^-]$$
  $$\\text{pH} + \\text{pOH} = 14 \\quad (\\text{عند } 25^\\circ\\text{C})$$

---

### 3. حاصل الإذابة للأملاح شحيحة الذوبان ($K_{sp}$)
* لملح كلوريد الفضة $\\text{AgCl}_{(s)} \\rightleftharpoons \\text{Ag}^+_{(aq)} + \\text{Cl}^-_{(aq)}$ (بدرجة إذابة $x$):
  $$K_{sp} = [\\text{Ag}^+][\\text{Cl}^-] = (x)(x) = x^2 \\implies x = \\sqrt{K_{sp}}$$
* لملح كبريتات الرصاص أو فوسفات الفضة $\\text{Ag}_3\\text{PO}_4 \\rightleftharpoons 3\\text{Ag}^+ + \\text{PO}_4^{3-}$:
  $$K_{sp} = [\\text{Ag}^+]^3 [\\text{PO}_4^{3-}] = (3x)^3 (x) = 27x^4$$
    `,
    mainContentEn: `
### 1. Le Chatelier Temperature Shifts
* Exothermic (Heat on products): Heating decreases Kc; Cooling increases Kc.
* Endothermic (Heat on reactants): Heating increases Kc; Cooling decreases Kc.

### 2. Ionic Formulas
* $[H_3O^+] = \\sqrt{K_a C_a}$ and $[OH^-] = \\sqrt{K_b C_b}$
* $pH = -\\log[H_3O^+]$ and $pH + pOH = 14$.

### 3. Solubility Product ($K_{sp}$)
* For $1:1$ salt: $K_{sp} = x^2$.
* For $A_3B$ salt: $K_{sp} = 27x^4$.
    `,

    diagramType: 'equilibrium_shift_diagram',
    diagramData: {
      type: 'le_chatelier_graph',
      title: 'أثر التغير في الضغط والحرارة على حالة الاتزان الكيميائي',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <line x1="40" y1="160" x2="360" y2="160" stroke="#64748b" stroke-width="2" />
        <line x1="40" y1="20" x2="40" y2="160" stroke="#64748b" stroke-width="2" />
        <path d="M 40 50 L 160 50 Q 180 50 200 80 L 340 80" stroke="#f43f5e" stroke-width="3" fill="none" />
        <path d="M 40 120 L 160 120 Q 180 120 200 100 L 340 100" stroke="#38bdf8" stroke-width="3" fill="none" />
        <line x1="160" y1="30" x2="160" y2="160" stroke="#fbbf24" stroke-dasharray="3" stroke-width="1.5" />
        <text x="145" y="25" fill="#fbbf24" font-size="11">لحظة الإجهاد</text>
        <text x="300" y="70" fill="#f43f5e" font-size="11">المتفاعلات</text>
        <text x="300" y="115" fill="#38bdf8" font-size="11">النواتج</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حساب قيمة pH لحمض الخليك الضعيف',
        titleEn: 'Example: pH Calculation of Acetic Acid Solution',
        problemAr: 'احسب الرقم الهيدروجيني ($\\text{pH}$) لمحلول حمض الخليك $\\text{CH}_3\\text{COOH}$ تركيزه $0.1\\text{ M}$ علماً بأن ثابت تأين الحمض $K_a = 1.8 \\times 10^{-5}$.',
        problemEn: 'Calculate the pH of 0.1 M acetic acid given Ka = 1.8 x 10^-5.',
        stepsAr: [
          'نحسب تركيز أيون الهيدرونيوم: $[\\text{H}_3\\text{O}^+] = \\sqrt{K_a \\cdot C_a}$.',
          '$[\\text{H}_3\\text{O}^+] = \\sqrt{1.8 \\times 10^{-5} \\times 0.1} = \\sqrt{1.8 \\times 10^{-6}} \\approx 1.34 \\times 10^{-3}\\text{ M}$.',
          'نحسب الأس الهيدروجيني: $\\text{pH} = -\\log[\\text{H}_3\\text{O}^+] = -\\log(1.34 \\times 10^{-3}) \\approx 2.87$.'
        ],
        stepsEn: [
          'Calculate [H3O+] = sqrt(Ka * Ca) = sqrt(1.8e-5 * 0.1) = 1.34 x 10^-3 M.',
          'Calculate pH = -log(1.34 x 10^-3) = 2.87.'
        ],
        finalAnswerAr: 'الرقم الهيدروجيني $\\text{pH} = 2.87$',
        finalAnswerEn: 'pH = 2.87'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12ch-3',
        problemAr: 'في التفاعل المتزن: N2(g) + 3H2(g) ⇌ 2NH3(g) (طارد للحرارة)، كيف يمكن زيادة إنتاج غاز النشادر حسب قاعدة لوشاتيليه؟',
        problemEn: 'How to maximize ammonia yield in N2 + 3H2 ⇌ 2NH3 (exothermic) via Le Chatelier\'s principle?',
        solutionStepsAr: [
          '1) **خفض درجة الحرارة (التبريد):** لأن التفاعل طارد للحرارة، فالتبريد يزيح الاتزان في الاتجاه الطردي لإنتاج المزيد من $\\text{NH}_3$.',
          '2) **زيادة الضغط:** عدد مولات المتفاعلات الغازية (4 مول) أكبر من النواتج (2 مول)، فزيادة الضغط تزيح التفاعل نحو الحجم الأقل (الطردي).',
          '3) **زيادة تركيز غازي $\\text{N}_2$ أو $\\text{H}_2$** أو السحب المستمر لغاز النشادر الناتج.'
        ],
        finalAnswerAr: 'بزيادة الضغط، خفض درجة الحرارة، وزيادة تركيز المتفاعلات أو سحب النشادر.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12ch-3',
        questionAr: 'العامل الوحيد الذي يؤدي إلى تغير القيمة العددية لثابت الاتزان (Kc) لتفاعل انعكاسي هو:',
        questionEn: 'The only factor capable of altering the numerical value of the equilibrium constant (Kc) is:',
        optionsAr: ['تغير درجة الحرارة', 'تغير الضغط', 'تغير تركيز المتفاعلات', 'إضافة عامل حفاز'],
        optionsEn: ['Temperature change', 'Pressure change', 'Reactants concentration change', 'Adding a catalyst'],
        correctIndex: 0,
        explanationAr: 'درجة الحرارة هي العامل الوحيد الذي يغير قيمة $K_c$، بينما الضغط والتركيز والحفاز لا يغيرون قيمته.',
        explanationEn: 'Temperature is the sole state variable that changes equilibrium constant values.'
      }
    ],

    assessment: {
      id: 'quiz-h12-ch3',
      titleAr: 'اختبار إتقان الاتزان الكيميائي والأيوني',
      titleEn: 'Mastery Quiz: Chemical & Ionic Equilibrium',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-ch3-1',
          textAr: 'محلول مائي قيمة الأس الهيدروجيني له $\\text{pH} = 9$ عند $25^\\circ\\text{C}$، فإن هذا المحلول يكون:',
          textEn: 'An aqueous solution with pH = 9 at 25°C is:',
          optionsAr: ['قاعدياً وتركيز أيون الهيدروكسيد فيه $[\\text{OH}^-] = 10^{-5}\\text{ M}$', 'حامضياً قوياً', 'متعادلاً تماماً', 'قاعدياً و $[\\text{OH}^-] = 10^{-9}\\text{ M}$'],
          optionsEn: ['Basic with [OH-] = 10^-5 M', 'Strongly Acidic', 'Strictly Neutral', 'Basic with [OH-] = 10^-9 M'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين pH و pOH ونوع المحلول',
          conceptTestedEn: 'pH/pOH scales and acid-base classifications',
          explanationAr: 'بما أن $\\text{pH} > 7$ فالمحلول قاعدي؛ $\\text{pOH} = 14 - 9 = 5 \\implies [\\text{OH}^-] = 10^{-5}\\text{ M}$.',
          explanationEn: 'pH = 9 > 7 indicates basicity; pOH = 14 - 9 = 5 ⟹ [OH-] = 10^-5 M.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch3-2',
          textAr: 'وظيفة العامل الحفاز (Catalyst) في التفاعلات الانعكاسية المتزنة هي:',
          textEn: 'The functional role of a catalyst in a reversible equilibrium reaction is:',
          optionsAr: ['تقليل طاقة التنشيط وزيادة سرعة التفاعلين الطردي والعكسي بنفس المعدل دون التأثير على موضع الاتزان', 'زيادة كمية النواتج وتغيير قيمة Kc', 'زيادة الضغط داخل الوعاء', 'استهلاك المتفاعلات تماماً'],
          optionsEn: ['Lowering activation energy & accelerating both rates equally without shifting equilibrium', 'Increasing product yield & altering Kc', 'Increasing container pressure', 'Consuming all reactants'],
          correctIndex: 0,
          conceptTestedAr: 'دور العامل الحفاز في التفاعلات المتزنة',
          conceptTestedEn: 'Catalyst role in dynamic equilibrium',
          explanationAr: 'الحفاز يقلل طاقة التنشيط ويسرع الوصول لحالة الاتزان دون تغيير موضع الاتزان أو قيمة $K_c$.',
          explanationEn: 'Catalysts lower activation barrier for both directions equally, achieving equilibrium faster without shifting position.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch3-3',
          textAr: 'الملح الذي يعطي عند ذوبانه في الماء محلولاً حامضياً قيمة $\\text{pH} < 7$ هو:',
          textEn: 'The salt whose aqueous solution exhibits acidic behavior (pH < 7) due to hydrolysis is:',
          optionsAr: ['$\\text{NH}_4\\text{Cl}$ (كلوريد الأمونيوم)', '$\\text{CH}_3\\text{COONa}$ (أسيتات الصوديوم)', '$\\text{NaCl}$ (كلوريد الصوديوم)', '$\\text{K}_2\\text{CO}_3$ (كربونات البوتاسيوم)'],
          optionsEn: ['NH4Cl (Ammonium chloride)', 'CH3COONa (Sodium acetate)', 'NaCl (Sodium chloride)', 'K2CO3 (Potassium carbonate)'],
          correctIndex: 0,
          conceptTestedAr: 'تميؤ الأملاح وتحديد حامضية وقاعدية المحاليل',
          conceptTestedEn: 'Salt hydrolysis pH predictions',
          explanationAr: 'كلوريد الأمونيوم مشتق من حمض قوي ($\\text{HCl}$) وقاعدة ضعيفة ($\\text{NH}_4\\text{OH}$) فيكون تأثيره حامضياً $\\text{pH} < 7$.',
          explanationEn: 'NH4Cl is derived from a strong acid (HCl) and a weak base (NH4OH), creating an acidic solution.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── CHAPTER 4: ELECTROCHEMISTRY ──
  {
    id: 'h12-ch-4',
    order: 4,
    titleAr: 'المحاضرة 4: الباب الرابع: الكيمياء الكهربية، الخلايا الجلفانية، بطاريات الرصاص والليثيوم، وتآكل المعادن وقوانين فاراداي',
    titleEn: 'Lecture 4: Chapter 4: Electrochemistry, Galvanic Cells, Lead/Lithium Batteries, Corrosion & Faraday\'s Laws',
    subtitleAr: 'خلية دانيال وقطب الهيدروجين القياسي (SHE)، سلسلة الجهود الكهربية، الخلايا الأولية (الزئبق والوقود) والثانوية (بطارية السيارة وأيون الليثيوم)، ميكانيكية صدأ الحديد والحماية الكاثودية والأنودية، وقوانين فاراداي للتحليل الكهربي',
    subtitleEn: 'Master Daniell galvanic cell, Standard Hydrogen Electrode (SHE), Electrochemical series EMF calculations, primary (Fuel/Mercury) vs secondary (Lead-Acid/Lithium-ion) batteries, iron rust electrochemical mechanism & cathodic protection, and Faraday\'s laws of electrolysis.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Chemistry (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الباب الرابع: الكيمياء الكهربية',
    unitTitleEn: 'Chapter 4: Electrochemistry',
    lessonNumberAr: 'الدرس 4: الخلايا الجلفانية والتحليلية وقوانين فاراداي',
    lessonNumberEn: 'Lesson 4: Galvanic/Electrolytic Cells & Faraday Laws',

    keyConceptsAr: [
      'الخلايا الجلفانية: تحويل الطاقة الكيميائية إلى طاقة كهربائية تلقائياً ($E^\\circ_{\\text{cell}} > 0$)',
      'خلية دانيال والقنطرة الملحية، وقطب الهيدروجين القياسي ($\\text{SHE} = 0.0\\text{ V}$)',
      'سلسلة الجهود الكهربية: الفلزات الأعلى في السلسلة (أكبر جهد أكسدة) تحل محل الفلزات التالية لها في محاليل أملاحها وتعمل كأنود',
      'الخلايا الجلفانية التجارية: خلية الزئبق، خلية الوقود (تنتج ماء شرب ورواد فضاء)، بطارية الرصاص الحامضية (المركم)، وبطارية أيون الليثيوم',
      'تآكل وصدأ الحديد: ميكانيكية تكوين خلايا جلفانية موضعية، والحماية الأنودية (القطب المضحي من المغنسيوم أو الخارصين والجلفنة) والحماية الكاثودية',
      'الخلايا الإلكتروليتية وقوانا فاراداي: كمية الكهربية بالكولوم ($Q = I \\cdot t$) والفراداي ($1\\text{ F} = 96500\\text{ C}$)، وكتلة المادة المترسبة $\\text{Mass} = \\frac{\\text{Eq. Mass} \\times I \\times t}{96500}$'
    ],
    keyConceptsEn: [
      'Galvanic cells spontaneously converting chemical energy into electricity with positive cell EMF (E°cell > 0)',
      'Daniell cell porous barrier / salt bridge function, and Standard Hydrogen Electrode reference (SHE = 0.00 V)',
      'Electrochemical Activity Series: higher oxidation potentials displace lower metals and act as sacrificial anodes',
      'Commercial battery systems: Mercury cell, Hydrogen-Oxygen Fuel cell, Lead-Acid storage accumulator, and modern Lithium-ion rechargeable cells',
      'Iron corrosion electrochemical mechanism, cathodic protection vs sacrificial anodic protection (galvanization with Zinc/Magnesium)',
      'Electrolytic cells & Faraday\'s Laws of Electrolysis: Q = I * t, 1 Faraday = 96,500 Coulombs, and electrodeposition mass calculations'
    ],

    conceptMapAr: [
      'كيمياء كهربية ➔ جلفانية (تفاعل أكسدة واختزال تلقائي يولد تياراً كهربياً $E > 0$) ➔ إلكتروليتية (تحليل كهربي بتيار خارجي $E < 0$)',
      'البطاريات ➔ أولية لا تشحن (زئبق ووقود) ➔ ثانوية قابلة للشحن (مركم الرصاص وأيون الليثيوم)',
      'التحليل الكهربي ➔ قوانين فاراداي ➔ $1\\text{ Faraday} = 96500\\text{ Coulombs}$ يرسب كتلة مكافئة جرامية واحدة'
    ],
    conceptMapEn: [
      'Electrochemistry ➔ Galvanic (Spontaneous redox generates electricity E>0) ➔ Electrolytic (Non-spontaneous driven by external DC source E<0)',
      'Batteries ➔ Primary non-rechargeable (Mercury, Fuel) ➔ Secondary rechargeable (Lead-Acid, Lithium-ion)',
      'Electrolysis ➔ Faraday Laws ➔ 1 Faraday (96,500 C) deposits 1 Gram Equivalent Mass'
    ],

    learningOutcomesAr: [
      'حساب القوة الدافعة الكهربية ($E^\\circ_{\\text{cell}}$) وتحديد تلقائية التفاعل الكيميائي والرمز الاصطلاحي للخلية.',
      'شرح التفاعلات الكيميائية الحادثة أثناء تفريغ وشحن بطارية الرصاص الحامضية وبطارية أيون الليثيوم.',
      'حل مسائل قوانين فاراداي وحساب كتل الفلزات المترسبة بالتحليل الكهربي وشدة التيار وزمن الترسيب.'
    ],
    learningOutcomesEn: [
      'Compute standard cell EMF (E°cell), predict spontaneity, and write cell line notation.',
      'Formulate discharge and recharge chemical equations for Lead-Acid accumulators and Lithium-ion batteries.',
      'Solve Faraday electrolysis quantitative problems for electroplated mass, current intensity, and reaction time.'
    ],

    vocabulary: [
      { termAr: 'القوة الدافعة الكهربية (EMF)', termEn: 'Electromotive Force (E°cell)', definitionAr: 'الفرق بين جهد تأكسد الأنود وجهد تأكسد الكاثود في الخلية الجلفانية؛ وتكون موجبة في التفاعلات التلقائية.' },
      { termAr: 'القطب المضحي', termEn: 'Sacrificial Anode', definitionAr: 'فلز نشط يسبق الحديد في سلسلة الجهود الكهربية (مثل المغنيسيوم أو الخارصين) يتصل بهيكل السفينة أو مواسير البترول ليتآكل هو أولاً حامياً الحديد من الصدأ.' }
    ],

    warmupHookAr: 'كيف تستطيع سيارات تسلا الكهربائية وهواتف الآيفون الذكية تخزين طاقة هائلة تكفي لتشغيل محركات عملاقة لعدة أيام وإعادة شحنها آلاف المرات دون تلف؟ بفضل "بطارية أيون الليثيوم" التي تعتمد على أخف فلز في الجدول الدوري وأعلاها جهداً قياسياً للتأكسد (3.04V)!',
    warmupHookEn: 'How do electric vehicles and smartphones store immense energy in ultra-lightweight packs rechargeable thousands of times? Powered by Lithium-Ion cells utilizing the lightest metal with the highest standard oxidation potential (3.04 V).',

    mainContentAr: `
### 1. حساب القوة الدافعة الكهربية للخلية ($E^\\circ_{\\text{cell}}$)
$$E^\\circ_{\\text{cell}} = \\text{جهد تأكسد الأنود} - \\text{جهد تأكسد الكاثود} = \\text{جهد تأكسد الأنود} + \\text{جهد اختزال الكاثود}$$
* **الرمز الاصطلاحي لخلية دانيال:**
  $$\\text{Zn}_{(s)} \\mid \\text{Zn}^{2+}_{(1\\text{M})} \\parallel \\text{Cu}^{2+}_{(1\\text{M})} \\mid \\text{Cu}_{(s)}$$

---

### 2. بطاريات تخزين الطاقة الثانوية (Rechargeable Batteries)
1. **مركم الرصاص (بطارية السيارة):**
   * **الأنود:** رصاص إسفنجي ($\\text{Pb}$).
   * **الكاثود:** شبكة رصاص مملوءة بثاني أكسيد الرصاص ($\\text{PbO}_2$).
   * **الإلكتروليت:** حمض كبريتيك مخفف ($\\text{H}_2\\text{SO}_4$).
   * **معادلة التفريغ والشحن:**
     $$\\text{Pb} + \\text{PbO}_2 + 2\\text{H}_2\\text{SO}_4 \\underset{\\text{Recharge}}{\\overset{\\text{Discharge}}{\\rightleftharpoons}} 2\\text{PbSO}_4 + 2\\text{H}_2\\text{O} \\quad (E^\\circ \\approx 12\\text{ V})$$
2. **بطارية أيون الليثيوم ($\\text{Li-ion}$):**
   * **الأنود:** جرافيت الليثيوم ($\\text{LiC}_6$).
   * **الكاثود:** أكسيد ليثيوم كوبالت ($\\text{LiCoO}_2$).
   * **معادلة الخلية الكلية:** $\\text{LiC}_6 + \\text{CoO}_2 \\rightleftharpoons \\text{C}_6 + \\text{LiCoO}_2 \\quad (E = 3.0\\text{ V})$.

---

### 3. قوانين فاراداي للتحليل الكهربي (Faraday's Laws)
* **الكتلة المكافئة الجرامية:** $\\text{Equivalent Mass} = \\frac{\\text{الكتلة الذرية}}{\\text{التكافؤ}}$.
* **القانون العام للتحليل الكهربي:**
  $$\\text{الكتلة المترسبة (جم)} = \\frac{\\text{الكتلة المكافئة الجرامية} \\times \\text{شدة التيار (أمبير)} \\times \\text{الزمن (ثانية)}}{96500}$$
* لترسيب مول واحد من أي عنصر ذي تكافؤ $z$ يلزم كمية كهربية مقدارها:
  $$\\text{Quantity of Electricity} = z \\times 1\\text{ Faraday} = z \\times 96500\\text{ Coulombs}$$
    `,
    mainContentEn: `
### 1. Cell EMF Calculation
$$E^\\circ_{\\text{cell}} = E^\\circ_{\\text{ox(anode)}} + E^\\circ_{\\text{red(cathode)}}$$

### 2. Lead-Acid Accumulator
$$Pb + PbO_2 + 2H_2SO_4 \\underset{Charge}{\\overset{Discharge}{\\rightleftharpoons}} 2PbSO_4 + 2H_2O$$

### 3. Faraday Electrolysis Laws
$$\\text{Mass (g)} = \\frac{\\text{Equivalent Mass} \\times I \\times t}{96500}$$
    `,

    diagramType: 'battery_cell_diagram',
    diagramData: {
      type: 'daniell_cell',
      title: 'تركيب خلية دانيال الجلفانية والقنطرة الملحية وسريان الإلكترونات',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="40" y="70" width="100" height="90" rx="4" fill="#0f172a" stroke="#38bdf8" stroke-width="2" />
        <rect x="70" y="40" width="20" height="100" fill="#94a3b8" />
        <text x="65" y="30" fill="#38bdf8" font-size="11">أنود (Zn)</text>
        <rect x="260" y="70" width="100" height="90" rx="4" fill="#0f172a" stroke="#f43f5e" stroke-width="2" />
        <rect x="290" y="40" width="20" height="100" fill="#fb923c" />
        <text x="285" y="30" fill="#f43f5e" font-size="11">كاثود (Cu)</text>
        <path d="M 120 80 Q 200 40 280 80" fill="none" stroke="#fbbf24" stroke-width="8" stroke-linecap="round" />
        <text x="165" y="75" fill="#0f172a" font-size="10" font-weight="bold">قنطرة ملحية</text>
        <line x1="80" y1="40" x2="300" y2="40" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)" />
        <text x="175" y="25" fill="#34d399" font-size="11">سريان e⁻ ➔</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حساب كتلة النحاس المترسبة بالتحليل الكهربي',
        titleEn: 'Example: Faraday Electrolysis Copper Mass Calculation',
        problemAr: 'احسب كتلة النحاس المترسبة عند إمرار تيار كهربي شدته $10\\text{ A}$ لمدة نصف ساعة ($30\\text{ min}$) في محلول كبريتات النحاس الثنائي $\\text{CuSO}_4$ علماً بأن الكتلة الذرية للنحاس $\\text{Cu} = 63.5$.',
        problemEn: 'Calculate mass of Copper deposited by 10 A current passing for 30 minutes in CuSO4 solution (Cu = 63.5, valency = 2).',
        stepsAr: [
          'نحسب الزمن بالثواني: $t = 30 \\times 60 = 1800\\text{ s}$.',
          'نحسب الكتلة المكافئة للنحاس: $\\text{Eq. Mass} = \\frac{63.5}{2} = 31.75\\text{ g}$.',
          'تطبيق قانون فاراداي: $\\text{Mass} = \\frac{\\text{Eq. Mass} \\times I \\times t}{96500} = \\frac{31.75 \\times 10 \\times 1800}{96500} = \\frac{571500}{96500} \\approx 5.92\\text{ g}$.'
        ],
        stepsEn: [
          'Time in seconds = 30 * 60 = 1800 s.',
          'Equivalent mass = 63.5 / 2 = 31.75 g.',
          'Mass = (31.75 * 10 * 1800) / 96500 = 5.92 g.'
        ],
        finalAnswerAr: 'كتلة النحاس المترسبة تساوي $5.92\\text{ g}$ تقريباً.',
        finalAnswerEn: 'Deposited copper mass = 5.92 g'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12ch-4',
        problemAr: 'ما هو الدور الذي تؤديه القنطرة الملحية في الخلية الجلفانية؟ وماذا يحدث عند نزعها؟',
        problemEn: 'What is the function of the salt bridge in a galvanic cell, and what happens upon removal?',
        solutionStepsAr: [
          'الوظيفة: 1) التوصيل الكهربي بين نصفي الخلية بطريقة غير مباشرة دون خلط المحاليل.',
          '2) معادلة الشحنات الموجبة والسالبة الزائدة المتكونة في نصفي الخلية عند الأنود والكاثود للحفاظ على الاتزان الكهربي.',
          'عند نزعها: تتراكم الشحنات في نصفي الخلية، ويتوقف تفاعل الأكسدة والاختزال، وينقطع مرور التيار الكهربي في الدائرة الخارجية فوراً.'
        ],
        finalAnswerAr: 'تعادل الشحنات وتصل المحاليل؛ وبنزعها يتوقف مرور التيار الكهربي فوراً.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12ch-4',
        questionAr: 'كمية الكهربية بالفراداي (F) اللازمة لترسيب 1 مول من فلز الألومنيوم الثلاثي (Al³⁺) بالتحليل الكهربي تساوي:',
        questionEn: 'The quantity of electricity in Faradays required to electroplate 1 mole of aluminum (Al3+) is:',
        optionsAr: ['3 F (ثلاثة فراداي)', '1 F (فراداي واحد)', '96500 C', '0.33 F'],
        optionsEn: ['3 F (3 Faradays)', '1 F (1 Faraday)', '96500 C', '0.33 F'],
        correctIndex: 0,
        explanationAr: 'لترسيب 1 مول من أي فلز نحتاج كمية كهربية تساوي تكافؤ العنصر بالفراداي ($z \\times 1\\text{ F} = 3\\text{ F}$).',
        explanationEn: 'Depositing 1 mole of trivalent Al3+ requires 3 Faradays (3 moles of electrons).'
      }
    ],

    assessment: {
      id: 'quiz-h12-ch4',
      titleAr: 'اختبار إتقان الكيمياء الكهربية وقوانين فاراداي',
      titleEn: 'Mastery Quiz: Electrochemistry & Faraday Laws',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-ch4-1',
          textAr: 'عند تفريغ بطارية الرصاص الحامضية (المركم)، فإن كثافة حمض الكبريتيك في الإلكتروليت:',
          textEn: 'During the discharging process of a lead-acid car battery, the electrolyte acid density:',
          optionsAr: ['تقل تدريجياً بسبب استهلاك الحمض وتكون الماء', 'تزداد للضعف', 'تظل ثابتة تماماً', 'تتحول إلى راسب صلب'],
          optionsEn: ['Decreases gradually due to acid consumption and water formation', 'Doubles in density', 'Remains strictly constant', 'Converts to dry powder'],
          correctIndex: 0,
          conceptTestedAr: 'تغيرات تفريغ بطارية الرصاص الحامضية',
          conceptTestedEn: 'Lead-acid discharge electrolyte changes',
          explanationAr: 'أثناء التفريغ يستهلك حمض الكبريتيك لتكوين كبريتات الرصاص والماء مما يقلل كثافة الإلكتروليت.',
          explanationEn: 'Acid is consumed to form water and PbSO4, reducing hydrometer density reading.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch4-2',
          textAr: 'في الحماية الأنودية لوقاية الحديد من الصدأ، يتم طلاء أو توصيل الحديد بفلز آخر:',
          textEn: 'In anodic sacrificial protection of iron against corrosion, iron is connected to a metal that:',
          optionsAr: ['يسبقه في سلسلة الجهود وله جهد تأكسد أكبر كالخارصين أو المغنسيوم', 'يليه في سلسلة الجهود كالنحاس', 'له جهد اختزال أعلى', 'خامل تماماً كالبلاتين'],
          optionsEn: ['Precedes iron with higher oxidation potential (e.g. Zinc or Magnesium)', 'Follows iron (e.g. Copper)', 'Has higher reduction potential', 'Is completely inert (e.g. Platinum)'],
          correctIndex: 0,
          conceptTestedAr: 'الحماية الأنودية والقطب المضحي',
          conceptTestedEn: 'Sacrificial anodic corrosion protection',
          explanationAr: 'الفلز الأكثر نشاطاً يعمل كأنود ويتآكل أولاً مضحياً بنفسه لحماية الحديد.',
          explanationEn: 'A more reactive metal with higher oxidation potential serves as sacrificial anode.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch4-3',
          textAr: 'القيمة الاصطلاحية المتفق عليها دولياً لجهد قطب الهيدروجين القياسي (SHE) تساوي:',
          textEn: 'The internationally agreed standard electrode potential of the SHE is:',
          optionsAr: ['$0.00\\text{ V}$ (صفر فولت)', '$+1.00\\text{ V}$', '$-1.00\\text{ V}$', '$+0.76\\text{ V}$'],
          optionsEn: ['0.00 V', '+1.00 V', '-1.00 V', '+0.76 V'],
          correctIndex: 0,
          conceptTestedAr: 'جهد قطب الهيدروجين القياسي المرجعي',
          conceptTestedEn: 'Standard Hydrogen Electrode potential reference',
          explanationAr: 'جهد قطب الهيدروجين القياسي اصطلح على أنه صفر فولت تحت الظروف القياسية (1 atm و 1M و 25°C).',
          explanationEn: 'SHE potential is defined as exactly 0.00 V at standard conditions.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── CHAPTER 5: ORGANIC CHEMISTRY ──
  {
    id: 'h12-ch-5',
    order: 5,
    titleAr: 'المحاضرة 5: الباب الخامس: الكيمياء العضوية الشاملة: الهيدروكربونات (الألكانات، الألكينات، البنزين) ومشتقاتها (الكحولات، الفينولات، الأحماض، الإسترات)',
    titleEn: 'Lecture 5: Chapter 5: Comprehensive Organic Chemistry: Hydrocarbons (Aliphatic/Aromatic) & Hydrocarbon Derivatives',
    subtitleAr: 'تجربة الكشف عن C و H، الألكانات والميثان، الألكينات وقاعدة ماركونيكوف، الألكاينات والأسيتيلين، البنزين العطري وتفاعلات الإحلال والتوجيه، الكحولات وتصنيفها وأكسدتها، الفينولات، الأحماض الكربوكسيلية وتفاعلات تكوين الإسترات والأسبرين',
    subtitleEn: 'Master organic chemistry: Alkanes (Methane), Alkenes (Ethene, Markovnikov\'s rule, Baeyer test), Alkynes (Ethyne), Aromatic Benzene (Kekule resonance, Friedel-Crafts, Ortho/Para/Meta directing groups), Alcohols (Primary/Secondary/Tertiary oxidation), Phenols, Carboxylic Acids, and Esters (Aspirin, Dacron, Saponification).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Chemistry (Thanawya Amma)',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الباب الخامس: الكيمياء العضوية',
    unitTitleEn: 'Chapter 5: Organic Chemistry',
    lessonNumberAr: 'الدرس 5: الهيدروكربونات ومشتقاتها وتفاعلاتها العضوية',
    lessonNumberEn: 'Lesson 5: Hydrocarbons & Derivatives',

    keyConceptsAr: [
      'نظرية القوى الحيوية لبرزيليوس وتحطيم فوهلر لها بتخليق اليوريا (البولينا) من تسخين سيانات الأمونيوم',
      'الهيدروكربونات الأليفاتية: 1) الألكانات $\\text{C}_n\\text{H}_{2n+2}$ (الميثان والتقطير الجاف)، 2) الألكينات $\\text{C}_n\\text{H}_{2n}$ وقاعدة ماركونيكوف وتفاعل باير، 3) الألكاينات $\\text{C}_n\\text{H}_{2n-2}$ (الأسيتيلين)',
      'الهيدروكربونات الأروماتية (البنزين العطري $\\text{C}_6\\text{H}_6$): حلقة كيكولي والروابط غير الموضعية، تفاعلات الاستبدال (الفريدل-كرافتس، النيترة، الهلجنة، السلفنة)، وقواعد توجيه المجموعات (أورثو/بارا مثل $-\\text{CH}_3, -\\text{OH}, -\\text{NH}_2$ مقابل ميتا مثل $-\\text{NO}_2, -\\text{CHO}, -\\text{COOH}$)',
      'الكحولات: تصنيفها (أولية $\\to$ ألدهيد $\\to$ حمض، ثانوية $\\to$ كيتون، ثالثية لا تتأكسد بسهولة)، والجلسرول وثلاثي نتروجلسرين',
      'الفينولات: حمض الكربوليك ($\\text{C}_6\\text{H}_5\\text{OH}$) وحمض البكريك (مادة متفجرة وعلاج للحروق)، والتمييز بـ $\\text{FeCl}_3$ البنفسجي وماء البروم',
      'الأحماض الكربوكسيلية والإسترات: تفاعل القسطرة (حمض + كحول $\\rightleftharpoons$ إستر + ماء)، وتصنيع الأسبرين وزيت المروخ وألياف الداكرون والصابون'
    ],
    keyConceptsEn: [
      'Berzelius Vital Force theory debunked by Wohler synthesis of urea from ammonium cyanate',
      'Aliphatic Hydrocarbons: Alkanes (Methane dry distillation), Alkenes (Markovnikov addition rule & Baeyer test with alkaline KMnO4), Alkynes (Ethyne hydration to acetaldehyde)',
      'Aromatic Benzene (C6H6): Kekule resonance structure, electrophilic aromatic substitution (Nitration, Friedel-Crafts alkylation, Halogenation, Sulfonation), and Ortho/Para vs Meta directing rules',
      'Alcohols classification: Primary (oxidizes to aldehyde then acid), Secondary (oxidizes to ketone), Tertiary (resistant to oxidation), and glycerol/nitroglycerin',
      'Phenols: Carbolic acid (C6H5OH), Picric acid (2,4,6-trinitrophenol), and identification via violet FeCl3 or white bromine water precipitate',
      'Carboxylic acids & Esters: Esterification reversible mechanism, Aspirin synthesis (acetylsalicylic acid), Marrow oil (methyl salicylate), Dacron polyester, and Saponification soap making'
    ],

    conceptMapAr: [
      'الكيمياء العضوية ➔ هيدروكربونات (كربون وهيدروجين فقط: ألكان، ألكين، ألكاين، بنزين) ➔ مشتقات (تحتوي أكسجين: كحولات، فينولات، أحماض، إسترات)',
      'قاعدة ماركونيكوف ➔ عند إضافة متفاعل غير متماثل ($\\text{HX}$) لألكين غير متماثل ➔ يضاف $\\text{H}$ لذرة الكربون الأغنى بالهيدروجين و $\\text{X}$ للأفقر',
      'الأكسدة والتكثيف ➔ كحول أولي $\\to$ ألدهيد $\\to$ حمض كربوكسيلي ➔ تفاعل حمض مع كحول يعطي إستر وماء'
    ],
    conceptMapEn: [
      'Organic Classification ➔ Hydrocarbons (C & H only: Alkanes, Alkenes, Alkynes, Arenes) ➔ Derivatives (Oxygenated: Alcohols, Phenols, Acids, Esters)',
      'Markovnikov Rule ➔ Asymmetric HX addition sends H+ to the carbon with more hydrogen atoms ("Rich gets richer")',
      'Oxidation & Condensation ➔ 1° Alcohol ➔ Aldehyde ➔ Carboxylic Acid ➔ Acid + Alcohol yields Ester + Water'
    ],

    learningOutcomesAr: [
      'تطبيق قواعد التسمية الدولية (IUPAC) لكافة المركبات العضوية الهيدروكربونية ومشتقاتها بدقة.',
      'تطبيق قاعدة ماركونيكوف للتنبؤ بالنواتج الرئيسية لتفاعلات الإضافة على الألكينات غير المتماثلة.',
      'تتبع خطوات تحضير وتصنيع الأسبرين والبوليمرات وتفاعلات التمييز الكيميائي بين الكحولات والفينولات.'
    ],
    learningOutcomesEn: [
      'Apply standard IUPAC nomenclature rules across hydrocarbons and functionalized organic families.',
      'Predict major regioisomeric products in alkene addition reactions using Markovnikov\'s rule.',
      'Formulate organic reaction pathways for synthesizing Aspirin, Dacron polyesters, and distinguishing alcohols vs phenols.'
    ],

    vocabulary: [
      { termAr: 'قاعدة ماركونيكوف', termEn: 'Markovnikov\'s Rule', definitionAr: 'عند إضافة كاشف غير متماثل (مثل $\\text{HX}$) إلى ألكين غير متماثل، فإن الشق الموجب (الهيدروجين) يضاف إلى ذرة كربون الرابطة المزدوجة الحاملة للعدد الأكبر من ذرات الهيدروجين.' },
      { termAr: 'تفاعل باير', termEn: 'Baeyer\'s Test', definitionAr: 'تفاعل أكسدة للألكينات باستخدام محلول برمنجانات البوتاسيوم في وسط قلوي لإضافة مجموعتي هيدروكسيل وتكوين الجلايكولات ويزول اللون البنفسجي للبرمنجانات.' }
    ],

    warmupHookAr: 'كيف غير العالم الألماني الشاب "فوهلر" تاريخ البشرية في عام 1828 عندما قام بتسخين مركب غير عضوي بسيط داخل أنبوبة اختبار لينتج مسحوقاً أبيض هو "اليوريا"؟ أسقط خرافة "القوى الحيوية" وفتح الباب أمام ولادة علم الكيمياء العضوية الحديثة وتصنيع ملايين الأدوية والبلاستيك والألياف الصناعية!',
    warmupHookEn: 'In 1828, Friedrich Wohler heated inorganic ammonium cyanate and synthesized organic urea, shattering the "Vital Force" myth and sparking modern organic chemistry, synthetic medicine, and polymers.',

    mainContentAr: `
### 1. قاعدة ماركونيكوف وتفاعلات الألكينات (Markovnikov & Alkenes)
* **تفاعل إضافة بروميد الهيدروجين ($\\text{HBr}$) إلى البروبين (ألكين غير متماثل):**
  $$\\text{CH}_3-\\text{CH}=\\text{CH}_2 + \\text{HBr} \\longrightarrow \\text{CH}_3-\\text{CH}(\\text{Br})-\\text{CH}_3 \\quad (\\text{2-برومو بروبان وليس 1-برومو})$$
* **تفاعل باير (الكشف عن الرابطة المزدوجة):**
  $$\\text{CH}_2=\\text{CH}_2 + \\text{H}_2\\text{O} + [\\text{O}] \\xrightarrow{\\text{KMnO}_4 / \\text{Alkaline}} \\text{CH}_2\\text{OH}-\\text{CH}_2\\text{OH} \\quad (\\text{إيثيلين جلايكول مانع تجمد الماء})$$
  * يزول اللون البنفسجي لبرمنجانات البوتاسيوم كدليل على وجود الرابطة المزدوجة.

---

### 2. البنزين العطري وتوجيه الاستبدال (Aromatic Benzene)
* **المجموعات الموجهة للموضعين أورثو وبارا (Ortho / Para Directing):**
  * مجموعات تعطي كثافة إلكترونية للحلقة: الألكيل ($-\\text{R}$)، الهيدروكسيل ($-\\text{OH}$)، الأمين ($-\\text{NH}_2$)، والهالوجينات ($-\\text{X}$).
  * مثال: نيترة الطولوين تعطي خليطاً من (أورثو-نيتروطولوين و بارا-نيتروطولوين)، ومع وفرة من الحمض ينتج مركب $\\text{T.N.T}$ المتفجر.
* **المجموعات الموجهة للموضع ميتا (Meta Directing):**
  * مجموعات تسحب الإلكترونات من الحلقة: النيترو ($-\\text{NO}_2$)، الكربوكسيل ($-\\text{COOH}$)، والألدهيد ($-\\text{CHO}$).

---

### 3. مشتقات الهيدروكربونات والإسترات (Esters & Aspirin)
* **تفاعل الأسترة وتصنيع الأسبرين (Aspirin):**
  * ينتج الأسبرين (حمض أسيتيل ساليسيليك) من تفاعل **حمض الساليسيليك** مع **حمض الأسيتيك (الخليك)**:
    $$\\text{Salicylic Acid} + \\text{Acetic Acid} \\longrightarrow \\text{Acetylsalicylic Acid (Aspirin)} + \\text{H}_2\\text{O}$$
* **التمييز بين الإيثانول والفينول:**
  * إضافة محلول كلوريد الحديد الثلاثي $\\text{FeCl}_3$: مع الفينول يعطي لوناً **بنفسجياً** مميزاً، ومع الإيثانول لا يحدث تغير.
    `,
    mainContentEn: `
### 1. Markovnikov & Baeyer Reaction
* $CH_3-CH=CH_2 + HBr \\to CH_3-CH(Br)-CH_3$ (2-bromopropane).
* Baeyer test with alkaline KMnO4 decolorizes violet color forming ethylene glycol.

### 2. Benzene Directing Groups
* Ortho/Para Directing: $-OH, -NH_2, -CH_3, -Cl$.
* Meta Directing: $-NO_2, -COOH, -CHO$.

### 3. Esters & Aspirin
* Salicylic acid + Acetic acid ➔ Acetylsalicylic acid (Aspirin).
* Phenol + $FeCl_3$ ➔ Distinct violet coloration.
    `,

    diagramType: 'organic_reaction_pathway',
    diagramData: {
      type: 'organic_map',
      title: 'خريطة التحويلات العضوية من الميثان إلى البنزين ومشتقاته',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="80" width="80" height="40" rx="6" fill="#38bdf8" />
        <text x="35" y="105" fill="#fff" font-size="11">2 CH₄ (ميثان)</text>
        <line x1="100" y1="100" x2="150" y2="100" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)" />
        <text x="105" y="90" fill="#fbbf24" font-size="9">1500°C / تبريد</text>
        <rect x="150" y="80" width="90" height="40" rx="6" fill="#34d399" />
        <text x="160" y="105" fill="#fff" font-size="11">C₂H₂ (أسيتيلين)</text>
        <line x1="240" y1="100" x2="290" y2="100" stroke="#f43f5e" stroke-width="2" marker-end="url(#arrow)" />
        <text x="245" y="90" fill="#f43f5e" font-size="9">أنبوبة نيكل / بلمرة</text>
        <rect x="290" y="80" width="90" height="40" rx="6" fill="#c084fc" />
        <text x="305" y="105" fill="#fff" font-size="11">C₆H₆ (بنزين)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تطبيق قاعدة ماركونيكوف على تفاعل الهيدرة الحفزية للبروبين',
        titleEn: 'Example: Applying Markovnikov Rule on Catalytic Hydration of Propene',
        problemAr: 'ما هو الناتج الرئيسي لإضافة الماء (الهيدرة الحفزية $\\text{H}_2\\text{O} / \\text{H}^+$) إلى غاز البروبين $\\text{CH}_3-\\text{CH}=\\text{CH}_2$ في وجود حمض الكبريتيك عند $110^\\circ\\text{C}$؟',
        problemEn: 'What is the major product of catalytic hydration of propene?',
        stepsAr: [
          'البروبين ألكين غير متماثل، وجزيء الماء كاشف غير متماثل ($\\text{H}^+ / \\text{OH}^-$).',
          'حسب قاعدة ماركونيكوف: يضاف أيون الهيدروجين $\\text{H}^+$ إلى ذرة كربون الرابطة المزدوجة الطرفية الغنية بالهيدروجين ($\\text{CH}_2$) لتصبح $\\text{CH}_3$.',
          'تضاف مجموعة الهيدروكسيل $\\text{OH}^-$ إلى ذرة الكربون الوسطية الأفقر بالهيدروجين ($\\text{CH}$) ليتكون **كحول أيزوبروبيلي (2-بروبانول)** وهو كحول ثانوي وليس 1-بروبانول.'
        ],
        stepsEn: [
          'Propene is unsymmetrical; water adds as H+ and OH-.',
          'Markovnikov rule: H+ adds to terminal CH2 (forming CH3).',
          'OH- adds to middle CH (forming secondary alcohol 2-propanol).'
        ],
        finalAnswerAr: 'الناتج الرئيسي هو 2-بروبانول (كحول أيزوبروبيلي ثانوي) $\\text{CH}_3-\\text{CH(OH)}-\\text{CH}_3$.',
        finalAnswerEn: 'Major product is 2-propanol (secondary isopropyl alcohol).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12ch-5',
        problemAr: 'كيف تميز عملياً بين مركب الفينول ومركب حمض الأسيتيك؟',
        problemEn: 'How to chemically distinguish between Phenol and Acetic Acid?',
        solutionStepsAr: [
          'بإضافة محلول بيكربونات الصوديوم $\\text{NaHCO}_3$ (كشف الحامضية) إلى كل منهما:',
          'مع حمض الأسيتيك: يحدث فوران وتصاعد لغاز ثاني أكسيد الكربون $\\text{CO}_2$ الذي يعكر ماء الجير الرائق.',
          'مع الفينول: لا يحدث تفاعل ولا يحدث فوران لأن حامضية الفينول أضعف من حمض الكربونيك فلا يستطيع طرده من أملاح البيكربونات.'
        ],
        finalAnswerAr: 'بمحلول بيكربونات الصوديوم: يحدث فوران مع حمض الأسيتيك، ولا يحدث تفاعل مع الفينول.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12ch-5',
        questionAr: 'المركب الناتج من التقطير الجاف لملح أسيتات الصوديوم اللامائية مع الصودا الكاوية والجير الحي هو:',
        questionEn: 'The compound produced by dry distillation of anhydrous sodium acetate with soda-lime is:',
        optionsAr: ['غاز الميثان (CH₄)', 'غاز الإيثيلين (C₂H₄)', 'غاز الأسيتيلين (C₂H₂)', 'حمض الفورميك'],
        optionsEn: ['Methane gas (CH4)', 'Ethene gas (C2H4)', 'Ethyne gas (C2H2)', 'Formic acid'],
        correctIndex: 0,
        explanationAr: 'تفاعل التقطير الجاف لأسيتات الصوديوم مع الجير الصودي: $\\text{CH}_3\\text{COONa} + \\text{NaOH} \\xrightarrow{\\text{CaO} / \\Delta} \\text{CH}_4 \\uparrow + \\text{Na}_2\\text{CO}_3$.',
        explanationEn: 'Dry distillation of anhydrous sodium acetate with soda-lime liberates methane gas CH4.'
      }
    ],

    assessment: {
      id: 'quiz-h12-ch5',
      titleAr: 'اختبار إتقان الكيمياء العضوية الشاملة',
      titleEn: 'Mastery Quiz: Organic Chemistry',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-ch5-1',
          textAr: 'عند أكسدة كحول ثانوي (مثل 2-بروبانول) بالعوامل المؤكسدة القوية ينتج:',
          textEn: 'Oxidation of a secondary alcohol (such as 2-propanol) with strong oxidizing agents produces a:',
          optionsAr: ['كيتون (مثل الأسيتون)', 'ألدهيد', 'حمض كربوكسيلي', 'إستر'],
          optionsEn: ['Ketone (e.g. Acetone)', 'Aldehyde', 'Carboxylic Acid', 'Ester'],
          correctIndex: 0,
          conceptTestedAr: 'أكسدة الكحولات الثانوية',
          conceptTestedEn: 'Oxidation of secondary alcohols',
          explanationAr: 'الكحولات الثانوية تحتوي على ذرة كربينول متصلة بهيدروجين واحد وتتأكسد في خطوة واحدة لتعطي كيتون.',
          explanationEn: 'Secondary alcohols oxidize selectively in one stage into ketones.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch5-2',
          textAr: 'الاسم الكيميائي الصحيح لعقار الأسبرين المستخدم لتقليل التجلطات وخفض الحرارة هو:',
          textEn: 'The correct chemical name of Aspirin is:',
          optionsAr: ['حمض أسيتيل ساليسيليك (Acetylsalicylic Acid)', 'ساليسيلات الميثيل', 'ثلاثي نيترو جليسرين', 'حمض البكريك'],
          optionsEn: ['Acetylsalicylic Acid', 'Methyl Salicylate', 'Nitroglycerin', 'Picric Acid'],
          correctIndex: 0,
          conceptTestedAr: 'التركيب الكيميائي للأسبرين والإسترات الطبية',
          conceptTestedEn: 'Aspirin chemical structure and medicinal esters',
          explanationAr: 'الأسبرين هو إستر حمض أسيتيل ساليسيليك محضر من حمض الساليسيليك وحمض الأسيتيك.',
          explanationEn: 'Aspirin is chemically acetylsalicylic acid.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-ch5-3',
          textAr: 'المجموعة الموجهة للموضع ميتا (Meta) عند إجراء تفاعلات الاستبدال الإلكتروفيلي على حلقة البنزين هي:',
          textEn: 'The substituent group that directs incoming electrophiles to the Meta position on benzene is:',
          optionsAr: ['مجموعة النيترو (-NO₂)', 'مجموعة الهيدروكسيل (-OH)', 'مجموعة الميثيل (-CH₃)', 'ذرة الكلور (-Cl)'],
          optionsEn: ['Nitro group (-NO2)', 'Hydroxyl group (-OH)', 'Methyl group (-CH3)', 'Chlorine atom (-Cl)'],
          correctIndex: 0,
          conceptTestedAr: 'قواعد التوجيه على حلقة البنزين',
          conceptTestedEn: 'Benzene electrophilic substitution directing groups',
          explanationAr: 'مجموعة النيترو $-\\text{NO}_2$ ومجموعة الكربوكسيل $-\\text{COOH}$ مجموعات ساحبة للإلكترونات توجه للموضع ميتا فقط.',
          explanationEn: 'The electron-withdrawing nitro group strongly directs incoming electrophiles to the meta position.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
