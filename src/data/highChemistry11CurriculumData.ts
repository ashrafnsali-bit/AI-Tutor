import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL CHEMISTRY — GRADE 11 (كيمياء الصف الثاني الثانوي - لغات وعربي)
// Official Grade 11 / Secondary 2 National Ministry & Language School Curriculum Alignment:
// Unit 1: Atomic Structure (Historical models, Rutherford, Bohr spectrum, Quantum Mechanics)
// Unit 2: Quantum Numbers & Electronic Configuration (Aufbau, Pauli, Hund)
// Unit 3: The Periodic Table & Periodic Trends (Radii, Ionization, Affinity, Electronegativity, Oxides)
// Unit 4: Chemical Bonding & Molecular Geometry (Lewis, VSEPR, Hybridization sp/sp2/sp3, Coordinate & Hydrogen Bonds)
// Unit 5: Representative Elements (Group 1A Alkali Metals & Group 5A Nitrogen/Phosphorus Chemistry)
// ============================================================================

export const HIGH_CHEMISTRY_G11_LECTURES: Lecture[] = [
  // ── LECTURE 1: ATOMIC STRUCTURE & QUANTUM MODEL ──
  {
    id: 'h11-ch-1',
    order: 1,
    titleAr: 'المحاضرة 1: بنية الذرة وتطور النماذج الذرية: من طومسون ورذرفورد إلى طيف بور والنظرية الحديثة',
    titleEn: 'Lecture 1: Atomic Structure & Evolution: Thomson, Rutherford, Bohr Line Spectra & Modern Wave Theory',
    subtitleAr: 'أشعة المهبط واكتشاف الإلكترون، تجربة رذرفورد لرقاقة الذهب، طيف الانبعاث الخطي لذرة الهيدروجين، عيوب نموذج بور، ومبادئ النظرية الميكانيكية الموجية الحديثة',
    subtitleEn: 'Master cathode rays, Rutherford gold foil scattering, Bohr hydrogen line emission spectrum, de Broglie wave-particle duality, Heisenberg uncertainty, and Schrodinger orbital wave equation.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: بنية الذرة',
    unitTitleEn: 'Unit 1: Atomic Structure',
    lessonNumberAr: 'الدرس 1: تطور مفهوم بنية الذرة والنظرية الذرية الحديثة',
    lessonNumberEn: 'Lesson 1: Evolution of Atomic Models & Modern Theory',

    keyConceptsAr: [
      'أشعة المهبط (Cathode Rays) وخواصها واكتشاف طومسون للإلكترون',
      'تجربة رذرفورد برقاقة الذهب واكتشاف النواة الموجبة الكثيفة والذرة المعظمة الفراغ',
      'طيف الانبعاث الخطي لذرة الهيدروجين (Line Spectrum) وتكميم الطاقة لدى بور ($E_n = -\\frac{R_H}{n^2}$)',
      'أسس النظرية الذرية الحديثة: 1) الطبيعة المزدوجة لدي برولي، 2) مبدأ عدم التأكد لهايزنبرج ($\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$)، 3) المعادلة الموجية لشرودنجر ومفهوم الأوربيتال والسحابة الإلكترونية'
    ],
    keyConceptsEn: [
      'Cathode rays properties and Thomson discovery of electron',
      'Rutherford gold foil experiment, dense positive nucleus, and hollow atomic space',
      'Bohr quantized hydrogen line emission spectrum (Balmer series)',
      '3 Modern Quantum Principles: de Broglie wave-particle duality, Heisenberg uncertainty principle, and Schrodinger wave equation / electron cloud orbitals'
    ],

    conceptMapAr: [
      'دالتون (كرة مصمتة) ➔ طومسون (فطيرة شحنات) ➔ رذرفورد (نواة مركزية وفراغ)',
      'دراسة الطيف الخطي ➔ نموذج بور للذرة المكممة ومستويات الطاقة',
      'قصور بور ➔ عجز عن تفسير الأطياف المعقدة واعتبر الإلكترون جسيماً مسطحاً',
      'النظرية الحديثة ➔ ازدواجية موجية + مبدأ الشك + معادلة شرودنجر (الأوربيتال)'
    ],
    conceptMapEn: [
      'Dalton ➔ Thomson ➔ Rutherford ➔ Bohr Line Spectrum',
      'Bohr Model Failures ➔ Complex spectra & 2D flat orbit assumption',
      'Modern Wave Theory ➔ Duality + Uncertainty + Schrodinger Orbitals'
    ],

    learningOutcomesAr: [
      'مقارنة التطور التاريخي للنماذج الذرية من دالتون إلى شرودنجر.',
      'تفسير كيفية تولد طيف الانبعاث الخطي عند انتقال الإلكترون المثار بين مستويات الطاقة.',
      'التمييز بدقة بين مفهوم "المدار الثابت عند بور" ومفهوم "الأوربيتال والسحابة الإلكترونية في النظرية الحديثة".'
    ],
    learningOutcomesEn: [
      'Compare chronological evolution of atomic models from Dalton to Schrodinger.',
      'Explain hydrogen line emission spectrum via electron quantum transitions.',
      'Contrast Bohr fixed 2D planetary orbits with modern 3D probabilistic orbitals & electron clouds.'
    ],

    vocabulary: [
      { termAr: 'طيف الانبعاث الخطي', termEn: 'Line Emission Spectrum', definitionAr: 'طيف ذري مميز ينتج عند عودة الإلكترون المثار من مستوى طاقة أعلى إلى مستوى طاقة أدنى، وهو خاصية مميزة لكل عنصر كبصمة الإصبع.' },
      { termAr: 'الأوربيتال', termEn: 'Orbital', definitionAr: 'منطقة ثلاثية الأبعاد من الفراغ المحيط بالنواة يزداد فيها احتمال تواجد الإلكترون لأقصى درجة.' },
      { termAr: 'مبدأ عدم التأكد', termEn: 'Heisenberg Uncertainty Principle', definitionAr: 'يستحيل عملياً تحديد مكان وسرعة الإلكترون معاً في نفس اللحظة وبدقة متناهية، والحديث يكون بلغة الاحتمالات.' }
    ],

    warmupHookAr: 'كيف يعرف علماء الفلك والفيزياء الكونية المكونات الكيميائية للنجوم والمجرات التي تبعد عنا ملايين السنين الضوئية؟ عبر تحليل "طيف الانبعاث الخطي" للضوء القادم منها؛ فكل عنصر كيميائي في الكون له بصمة طيفية فريدة ومحددة كمياً لا تتكرر أبداً!',
    warmupHookEn: 'How do astrophysicists identify chemical elements inside distant stars billions of light-years away? By analyzing their quantized line emission spectra—every element in the cosmos possesses a completely unique spectral fingerprint.',

    mainContentAr: `
### 1. تجربة رذرفورد والنتائج الأساسية (Rutherford Experiment)
عند تسديد جسيمات ألفا $(\\alpha)$ نحو رقاقة رقيقة من الذهب:
1. **نفاذ معظم الجسيمات على استقامتها:** يثبت أن الذرة معظمة فراغ (ليست كرة مصمتة كما زعم دالتون وطومسون).
2. **ارتداد نسبة ضئيلة جداً للخلف:** يثبت وجود نواة كثيفة جداً في المركز تشغل حيزاً صغيراً جداً.
3. **انحراف نسبة ضئيلة:** يثبت أن شحنة هذه النواة المركزية موجبة تشابه شحنة جسيمات ألفا.

---

### 2. نموذج بور لذرة الهيدروجين (Bohr Atomic Model)
* تدور الإلكترونات في مستويات طاقة محددة وثابتة (أغلفة $n = 1, 2, 3, \\dots$) وتكون الفراغات بينها محرمة على الإلكترونات.
* عند اكتساب الإلكترون كمية محددة من الطاقة (**كم أو كوانتم Quantum**)، يقفز إلى مستوى طاقة أعلى (ذرة مثارة).
* عند عودته لمستواه الأصلي، يشع فوتوناً طاقته تساوي فرق الطاقتين:
  $$\\Delta E = E_2 - E_1 = h \\cdot \\nu$$

---

### 3. أسس النظرية الذرية الحديثة (Modern Wave Mechanical Theory)
1. **الطبيعة المزدوجة للإلكترون (دي برولي):** الإلكترون جسيم مادي له خواص موجية ($\\lambda = \\frac{h}{mv}$).
2. **مبدأ عدم التأكد (هايزنبرج):** يستحيل عملياً تحديد موضع وسرعة الإلكترون بدقة معاً في نفس اللحظة ($\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$).
3. **النظرية الميكانيكية الموجية (شرودنجر):** تأسيس المعادلة الموجية واستبدال المدار الدائري الثابت بمفهومي **السحابة الإلكترونية** و **الأوربيتال** (منطقة الاحتمال الأعظم لتواجد الإلكترون).
    `,
    mainContentEn: `
### 1. Rutherford Experiment
* Majority penetrated: Atom is mostly empty space.
* Minor deflections/rebounds: Dense positive nucleus.

### 2. Bohr's Quantized Hydrogen Model
* Discrete quantized energy levels: $\\Delta E = E_2 - E_1 = h\\nu$.
* Line spectra produced upon de-excitation.

### 3. Modern Quantum Mechanics
* **de Broglie Duality:** $\\lambda = h/(mv)$
* **Heisenberg Uncertainty:** $\\Delta x \\cdot \\Delta p \\ge \\frac{h}{4\\pi}$
* **Schrodinger Wave Equation:** 3D probabilistic orbitals.
    `,

    diagramType: 'atomic_diagram',
    diagramData: {
      type: 'bohr_vs_orbital',
      title: 'مقارنة بين مستويات طاقة بور والسحابة الإلكترونية لشرودنجر',
      svgSnippet: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg">
        <circle cx="200" cy="120" r="16" fill="#f43f5e" />
        <text x="194" y="125" fill="#fff" font-size="12" font-weight="bold">+</text>
        <circle cx="200" cy="120" r="45" stroke="#64748b" stroke-dasharray="3" stroke-width="1.5" fill="none" />
        <circle cx="200" cy="120" r="75" stroke="#64748b" stroke-dasharray="3" stroke-width="1.5" fill="none" />
        <circle cx="200" cy="120" r="105" stroke="#64748b" stroke-dasharray="3" stroke-width="1.5" fill="none" />
        <circle cx="200" cy="75" r="5" fill="#38bdf8" />
        <path d="M 200 45 Q 215 60 200 75" stroke="#fbbf24" stroke-width="2" fill="none" marker-end="url(#arrow)" />
        <text x="210" y="60" fill="#fbbf24" font-size="11">فوتون منبعث ΔE = hν</text>
        <text x="285" y="115" fill="#94a3b8" font-size="11">n = 3</text>
        <text x="260" y="145" fill="#94a3b8" font-size="11">n = 2</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تفسير طيف ذرة الهيدروجين المرئي (سلسلة بالمر)',
        titleEn: 'Example: Hydrogen Visible Line Spectrum (Balmer Series)',
        problemAr: 'علل: ظهور خطوط طيفية ملونة محددة لذرة الهيدروجين في نطاق الضوء المرئي عند عودة الإلكترون من المستويات العليا.',
        problemEn: 'Explain why hydrogen emits distinct colored spectral lines in the visible region when electrons de-excite.',
        stepsAr: [
          'عند إثارة ذرات الهيدروجين بالكهرباء أو الحرارة، تقفز الإلكترونات من المستوى الأرضي ($n=1$) إلى المستويات العليا ($n=3, 4, 5, 6$).',
          'عند عودة الإلكترونات المثارة تحديداً إلى المستوى الرئيسي الثاني ($n=2$)، تفقد طاقة تساوي فرق المستويين على هيئة فوتونات يقع ترددها وطولها الموجي في نطاق الضوء المرئي (سلسلة بالمر Balmer Series).',
          'الخطوط المرئية الأربعة هي: الأحمر ($656\\text{ nm}$ من $n=3 \\to 2$)، الأخضر المزرق ($486\\text{ nm}$ من $n=4 \\to 2$)، الأزرق ($434\\text{ nm}$ من $n=5 \\to 2$)، والبنفسجي ($410\\text{ nm}$ من $n=6 \\to 2$).'
        ],
        stepsEn: [
          'Excited electrons absorb discrete energy to jump to higher levels n ≥ 3.',
          'Transitions dropping back to n = 2 release photons precisely within the visible electromagnetic spectrum (Balmer Series).',
          'The 4 visible spectral lines correspond to n=3->2 (Red 656nm), n=4->2 (Cyan 486nm), n=5->2 (Blue 434nm), and n=6->2 (Violet 410nm).'
        ],
        finalAnswerAr: 'بسبب انتقال الإلكترونات المثارة من المستويات $n=3, 4, 5, 6$ إلى المستوى الثاني $n=2$',
        finalAnswerEn: 'Electronic de-excitation from higher shells to principal level n = 2'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11ch-1',
        problemAr: 'قارن بين تصور بور وتصور النظرية الميكانيكية الموجية الحديثة لحركة الإلكترون حول النواة.',
        problemEn: 'Compare Bohr vs Modern Wave Theory regarding electron motion.',
        solutionStepsAr: [
          'بور: الإلكترون جسيم مادي سالب يدور في مسار دائري محدد ومستوٍ (ثنائي الأبعاد)، والمناطق بين المدارات محرمة تماماً.',
          'النظرية الحديثة: الإلكترون له طبيعة مزدوجة (جسيم مادي ذو خواص موجية)، ويتحرك في فضاء ثلاثي الأبعاد حول النواة داخل سحابة إلكترونية وأوربيتالات تعبر عن احتمال تواجده.'
        ],
        finalAnswerAr: 'بور: مدار دائري ثابت ثنائي الأبعاد. الحديثة: أوربيتال فراغي ثلاثي الأبعاد واحتمالي.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11ch-1',
        questionAr: 'أثبتت تجربة رذرفورد لرقاقة الذهب أن النواة تشغل حيزاً صغيراً جداً داخل الذرة بسبب:',
        questionEn: 'Rutherford gold foil experiment proved the nucleus occupies very tiny volume because:',
        optionsAr: ['نفاذ معظم جسيمات ألفا على استقامتها دون انحراف', 'ارتداد نسبة ضئيلة جداً من جسيمات ألفا للخلف', 'انحراف نسبة من جسيمات ألفا', 'توهج كبريتيد الخارصين'],
        optionsEn: ['Most alpha particles passed straight through', 'Only a tiny fraction rebounded backward', 'Some alpha particles deflected', 'Fluorescence of ZnS screen'],
        correctIndex: 1,
        explanationAr: 'ارتداد نسبة ضئيلة جداً (1 من كل 20,000 جسيم) يثبت اصطدامها بجسم كثيف وصغير جداً في المركز وهو النواة.',
        explanationEn: 'Rebound of an extremely tiny fraction proves collision with an ultra-compact dense central nucleus.'
      }
    ],

    assessment: {
      id: 'quiz-h11-ch1',
      titleAr: 'اختبار إتقان بنية الذرة والنماذج الذرية',
      titleEn: 'Mastery Quiz: Atomic Structure',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-ch1-1',
          textAr: 'العالم الذي وضع المفهوم القائل بأنه "يستحيل عملياً تحديد مكان وسرعة الإلكترون معاً في نفس الوقت بدقة" هو:',
          textEn: 'The scientist who established the principle that exact position and velocity of an electron cannot be simultaneously measured is:',
          optionsAr: ['هايزنبرج (Heisenberg)', 'دي برولي (de Broglie)', 'شرودنجر (Schrodinger)', 'بور (Bohr)'],
          optionsEn: ['Heisenberg', 'de Broglie', 'Schrodinger', 'Bohr'],
          correctIndex: 0,
          conceptTestedAr: 'مبدأ عدم التأكد لهايزنبرج',
          conceptTestedEn: 'Heisenberg Uncertainty Principle',
          explanationAr: 'مبدأ عدم التأكد وضعه هايزنبرج وينص على أن قياس أحدهما بدقة يُحدث اضطراباً في الآخر.',
          explanationEn: 'Heisenberg formulated the Uncertainty Principle stating Δx * Δp ≥ h / (4π).',
          difficulty: 'easy'
        },
        {
          id: 'qh11-ch1-2',
          textAr: 'عندما ينتقل إلكترون ذرة الهيدروجين المثار من المستوى السادس ($n=6$) إلى المستوى الأول ($n=1$)، ينتج فوتون يقع في نطاق:',
          textEn: 'When an excited hydrogen electron transitions from n=6 to n=1, the emitted photon lies in:',
          optionsAr: ['الأشعة فوق البنفسجية (سلسلة ليمان Lyman)', 'الضوء المرئي (سلسلة بالمر Balmer)', 'الأشعة تحت الحمراء (سلسلة باشن Paschen)', 'أشعة جاما'],
          optionsEn: ['Ultraviolet (Lyman series)', 'Visible Light (Balmer series)', 'Infrared (Paschen series)', 'Gamma rays'],
          correctIndex: 0,
          conceptTestedAr: 'سلاسل طيف ذرة الهيدروجين ونطاقاتها الطاقية',
          conceptTestedEn: 'Hydrogen spectral series (Lyman UV series)',
          explanationAr: 'جميع الانتقالات المنتهية بالمستوى الأرضي $n=1$ لها فرق طاقة كبير جداً وتقع في نطاق الأشعة فوق البنفسجية (سلسلة ليمان).',
          explanationEn: 'Transitions ending at ground state n = 1 release high energy UV photons (Lyman series).',
          difficulty: 'medium'
        },
        {
          id: 'qh11-ch1-3',
          textAr: 'المنطقة من الفراغ المحيط بالنواة التي يزيد فيها احتمال تواجد الإلكترون لأقصى درجة تُسمى:',
          textEn: 'The region of 3D space around the nucleus with maximum probability of finding an electron is called:',
          optionsAr: ['الأوربيتال (Orbital)', 'المدار الثابت (Orbit)', 'الغلاف الإلكتروني', 'مستوى الطاقة الرئيسي'],
          optionsEn: ['Orbital', 'Fixed Orbit', 'Electron Shell', 'Principal Level'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف الأوربيتال في النظرية الحديثة',
          conceptTestedEn: 'Definition of Quantum Orbital',
          explanationAr: 'الأوربيتال هو منطقة ذروة الكثافة الاحتمالية للسحابة الإلكترونية حسب حلول معادلة شرودنجر.',
          explanationEn: 'An orbital is defined as the 3D quantum region with peak probability of locating the electron.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: QUANTUM NUMBERS & ELECTRON CONFIGURATION ──
  {
    id: 'h11-ch-2',
    order: 2,
    titleAr: 'المحاضرة 2: أعداد الكم الأربعة وقواعد التوزيع الإلكتروني (مبدأ البناء التصاعدي، باولي، وهوند)',
    titleEn: 'Lecture 2: The Four Quantum Numbers & Electronic Configuration Principles (Aufbau, Pauli & Hund)',
    subtitleAr: 'أعداد الكم: الرئيسي (n)، الثانوي (l)، المغناطيسي (mₗ)، والمغزلي (mₛ)، مبدأ البناء التصاعدي، قاعدة هوند، ومبدأ الاستبعاد لباولي وتوزيع العناصر والأيونات',
    subtitleEn: 'Master the 4 quantum numbers (n, l, ml, ms), Aufbau energy ordering, Hund\'s maximum multiplicity rule, Pauli exclusion, and transition metal electronic configurations.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: بنية الذرة وأعداد الكم',
    unitTitleEn: 'Unit 1: Quantum Numbers & Atomic Configuration',
    lessonNumberAr: 'الدرس 2: أعداد الكم وقواعد التوزيع الإلكتروني',
    lessonNumberEn: 'Lesson 2: Quantum Numbers & Configuration',

    keyConceptsAr: [
      'عدد الكم الرئيسي ($n = 1, 2, 3, \\dots$) وعدد الكم الثانوي ($l = 0 \\text{ to } n-1$) للتحت مستويات $s, p, d, f$',
      'عدد الكم المغناطيسي ($m_l = -l \\dots 0 \\dots +l$) وأشكال الأوربيتالات ($s$ كروي متماثل، $p$ كمثرى متعامدة)',
      'عدد الكم المغزلي ($m_s = +\\frac{1}{2}$ مع عقارب الساعة أو $-\\frac{1}{2}$ عكسها)',
      'مبدأ البناء التصاعدي (Aufbau Principle) وترتيب المستويات الفرعية حسب الطاقة $(n + l)$',
      'قاعدة هوند (Hund\'s Rule) ومبدأ الاستبعاد لباولي (Pauli Exclusion Principle)'
    ],
    keyConceptsEn: [
      'Principal quantum number n and azimuthal/orbital angular momentum l (s=0, p=1, d=2, f=3)',
      'Magnetic quantum number ml defining spatial orientation and orbital shapes',
      'Spin quantum number ms (+1/2 spin up, -1/2 spin down)',
      'Aufbau energy principle ordered by (n + l) energy summation rule',
      'Hund rule of maximum multiplicity and Pauli exclusion principle'
    ],

    conceptMapAr: [
      'أعداد الكم ➔ الرئيسي $n$ ➔ الثانوي $l$ ➔ المغناطيسي $m_l$ ➔ المغزلي $m_s$',
      'السعة الإلكترونية ➔ المستوى $n$ يتسع لـ $2n^2$ إلكترون (حتى $n=4$)',
      'قواعد التوزيع ➔ البناء التصاعدي (الأقل طاقة أولاً) ➔ هوند (فرادى قبل الازدواج) ➔ باولي (لا إلكترونين بنفس الأعداد الأربعة)'
    ],
    conceptMapEn: [
      'Quantum Numbers ➔ n (Shell) ➔ l (Subshell) ➔ ml (Orbital) ➔ ms (Spin)',
      'Shell Capacity ➔ Max 2n^2 electrons (up to n=4)',
      'Rules ➔ Aufbau (Lowest energy first) ➔ Hund (Parallel spins first) ➔ Pauli (Unique quantum set)'
    ],

    learningOutcomesAr: [
      'تحديد قيم أعداد الكم الأربعة ($n, l, m_l, m_s$) لأي إلكترون في أي ذرة أو أيون.',
      'كتابة التوزيع الإلكتروني للعناصر حتى العدد الذري 36 وتفسير الحالات الشاذة في الكروم ($_{24}\\text{Cr}$) والنحاس ($_{29}\\text{Cu}$).',
      'تطبيق قاعدة هوند ومبدأ البناء التصاعدي لتحديد عدد الإلكترونات المفردة وخاصية البارامغناطيسية.'
    ],
    learningOutcomesEn: [
      'Determine the 4 quantum numbers for any electron in an atom or ion.',
      'Write electronic configurations up to atomic number 36 and explain anomalous Cr and Cu configurations.',
      'Apply Hund rule to calculate unpaired electrons and magnetic properties.'
    ],

    vocabulary: [
      { termAr: 'مبدأ البناء التصاعدي', termEn: 'Aufbau Principle', definitionAr: 'لابد للإلكترونات أن تملأ المستويات الفرعية ذات الطاقة المنخفضة أولاً ثم المستويات الأعلى طاقة حسب قيمة $(n+l)$.' },
      { termAr: 'قاعدة هوند', termEn: 'Hund\'s Rule', definitionAr: 'لا يحدث ازدواج بين إلكترونين في أوربيتال مستوى فرعي واحد إلا بعد أن تشغل أوربيتالاته فرادى أولاً بنفس اتجاه الغزل لتقليل قوى التنافر.' }
    ],

    warmupHookAr: 'لماذا يمتلك المغناطيس الطبيعي قوة جذب هائلة لبرادة الحديد؟ السر يكمن في قاعدة هوند! ذرة الحديد $_{26}\\text{Fe}$ تحتوي على 4 إلكترونات مفردة تدور جميعها في نفس الاتجاه المغزلي، مما يولد عزماً مغناطيسياً قوياً!',
    warmupHookEn: 'Why do iron and neodymium magnets exhibit immense magnetic attraction? Hund\'s rule ensures iron atoms retain 4 parallel unpaired d-electrons, generating a powerful net atomic magnetic dipole moment.',

    mainContentAr: `
### 1. أعداد الكم الأربعة (The Four Quantum Numbers)
1. **الرئيسي ($n$):** يحدد رتبة مستوى الطاقة الرئيسي وبعده عن النواة ($n = 1, 2, 3, 4, 5, 6, 7$).
   * عدد الأوربيتالات في المستوى الرئيسي $= n^2$.
   * أقصى عدد من الإلكترونات يتسع له المستوى $= 2n^2$ (ينطبق حتى المستوى الرابع فقط).
2. **الثانوي ($l$):** يحدد نوع وشكل المستويات الفرعية داخل كل مستوى رئيسي ($l = 0, 1, 2, \\dots, n-1$).
   * $s (l=0)$ كروي متماثل.
   * $p (l=1)$ 3 أوربيتالات ($p_x, p_y, p_z$) كمثرية متعامدة.
   * $d (l=2)$ 5 أوربيتالات.
   * $f (l=3)$ 7 أوربيتالات معقدة.
3. **المغناطيسي ($m_l$):** يحدد الاتجاه الفراغي للأوربيتال ($m_l = -l \\dots 0 \\dots +l$).
4. **المغزلي ($m_s$):** يحدد اتجاه دوران الإلكترون حول محوره ($+\\frac{1}{2}$ للأعلى $\\uparrow$ أو $-\\frac{1}{2}$ للأسفل $\\downarrow$).

---

### 2. التوزيع الإلكتروني والحالات الشاذة (Cr & Cu)
* ترتيب المستويات الفرعية تصاعدياً:
  $$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d \\dots$$
* **شذوذ الكروم ($_{24}\\text{Cr}$):**
  $$[\\text{Ar}]_{18} \\, 4s^1 \\, 3d^5 \\quad (\\text{بدلاً من } 4s^2 3d^4)$$
  * لأن المستوى الفرعي $3d$ عندما يكون نصف ممتلئ ($d^5$) يعطي الذرة استقراراً وأقل طاقة.
* **شذوذ النحاس ($_{29}\\text{Cu}$):**
  $$[\\text{Ar}]_{18} \\, 4s^1 \\, 3d^{10} \\quad (\\text{بدلاً من } 4s^2 3d^9)$$
  * لأن المستوى الفرعي $3d$ عندما يكون تام الامتلاء ($d^{10}$) يعطي الذرة أقصى استقرار.
    `,
    mainContentEn: `
### 1. The Four Quantum Numbers
* Principal $n$: Shell energy level.
* Azimuthal $l$: Subshell shape ($s=0, p=1, d=2, f=3$).
* Magnetic $m_l$: Spatial orientation ($-l \\dots +l$).
* Spin $m_s$: Electron axis rotation ($+\\frac{1}{2}, -\\frac{1}{2}$).

### 2. Electronic Configuration & Anomalies
* Aufbau sequence: $1s^2 2s^2 2p^6 3s^2 3p^6 4s^2 3d^{10} 4p^6 \\dots$
* Chromium $_{24}\\text{Cr}$: $[\\text{Ar}] 4s^1 3d^5$ (half-filled stability).
* Copper $_{29}\\text{Cu}$: $[\\text{Ar}] 4s^1 3d^{10}$ (completely filled stability).
    `,

    diagramType: 'orbital_boxes',
    diagramData: {
      type: 'hund_rule_diagram',
      title: 'التوزيع الإلكتروني لذرة النيتروجين ₇N حسب قاعدة هوند',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="80" width="40" height="40" stroke="#38bdf8" stroke-width="2" fill="none" />
        <text x="40" y="105" fill="#38bdf8" font-size="16">↑↓</text>
        <text x="40" y="140" fill="#94a3b8" font-size="12">1s²</text>
        <rect x="90" y="80" width="40" height="40" stroke="#38bdf8" stroke-width="2" fill="none" />
        <text x="100" y="105" fill="#38bdf8" font-size="16">↑↓</text>
        <text x="100" y="140" fill="#94a3b8" font-size="12">2s²</text>
        <rect x="170" y="80" width="40" height="40" stroke="#34d399" stroke-width="2" fill="none" />
        <text x="185" y="105" fill="#34d399" font-size="16">↑</text>
        <text x="180" y="140" fill="#94a3b8" font-size="12">2px</text>
        <rect x="210" y="80" width="40" height="40" stroke="#34d399" stroke-width="2" fill="none" />
        <text x="225" y="105" fill="#34d399" font-size="16">↑</text>
        <text x="220" y="140" fill="#94a3b8" font-size="12">2py</text>
        <rect x="250" y="80" width="40" height="40" stroke="#34d399" stroke-width="2" fill="none" />
        <text x="265" y="105" fill="#34d399" font-size="16">↑</text>
        <text x="260" y="140" fill="#94a3b8" font-size="12">2pz</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: أعداد الكم للألكترون الأخير في ذرة الصوديوم ₁₁Na',
        titleEn: 'Example: Four Quantum Numbers of Last Electron in Sodium 11Na',
        problemAr: 'اكتب التوزيع الإلكتروني لذرة الصوديوم $_{11}\\text{Na}$، ثم حدد أعداد الكم الأربعة للإلكترون الأخير (إلكترون التكافؤ).',
        problemEn: 'Write the electronic configuration of 11Na and state the four quantum numbers of its valence electron.',
        stepsAr: [
          'التوزيع الإلكتروني للصوديوم: $1s^2 \\, 2s^2 \\, 2p^6 \\, 3s^1$ (أو $[\\text{Ne}]_{10} \\, 3s^1$).',
          'الإلكترون الأخير يقع في المستوى الفرعي $3s^1$:',
          '1) عدد الكم الرئيسي: $n = 3$.',
          '2) عدد الكم الثانوي: للمستوى $s$ تكون قيمة $l = 0$.',
          '3) عدد الكم المغناطيسي: بما أن $l = 0 \\implies m_l = 0$.',
          '4) عدد الكم المغزلي: إلكترون مفرد يمثل للأعلى $\\uparrow \\implies m_s = +\\frac{1}{2}$.'
        ],
        stepsEn: [
          'Configuration: 1s2 2s2 2p6 3s1.',
          'Valence electron is in 3s1.',
          'n = 3, l = 0 (s-subshell), ml = 0, ms = +1/2.'
        ],
        finalAnswerAr: '$n = 3, \\, l = 0, \\, m_l = 0, \\, m_s = +\\frac{1}{2}$',
        finalAnswerEn: 'n = 3, l = 0, ml = 0, ms = +1/2'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11ch-2',
        problemAr: 'أيهما أكثر استقراراً: أيون الحديد الثنائي $\\text{Fe}^{2+}$ أم أيون الحديد الثلاثي $\\text{Fe}^{3+}$؟ وضح السبب بالتوزيع الإلكتروني علما بأن العدد الذري للحديد $_{26}\\text{Fe}$.',
        problemEn: 'Which is more stable: Fe2+ or Fe3+? Explain via electron configuration (atomic number 26).',
        solutionStepsAr: [
          'ذرة الحديد: $_{26}\\text{Fe} = [\\text{Ar}]_{18} \\, 4s^2 \\, 3d^6$.',
          'أيون الحديد الثنائي: $\\text{Fe}^{2+} = [\\text{Ar}]_{18} \\, 3d^6$ (المستوى $3d$ غير نصف ممتلئ).',
          'أيون الحديد الثلاثي: $\\text{Fe}^{3+} = [\\text{Ar}]_{18} \\, 3d^5$ (المستوى $3d$ نصف ممتلئ بخمسة إلكترونات مفردة).',
          'إذن أيون $\\text{Fe}^{3+}$ أكثر استقراراً لأن المستوى $d$ نصف ممتلئ مما يعطي الذرة طاقة أقل وثباتاً أعلى.'
        ],
        finalAnswerAr: 'أيون الحديد الثلاثي $\\text{Fe}^{3+}$ أكثر استقراراً لأن المستوى الفرعي $3d$ نصف ممتلئ ($3d^5$).'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11ch-2',
        questionAr: 'أقصى عدد من الإلكترونات يمكن أن يتسع له المستوى الرئيسي الثالث ($n=3$) هو:',
        questionEn: 'The maximum number of electrons that the third principal shell (n=3) can hold is:',
        optionsAr: ['8 إلكترونات', '18 إلكتروناً', '32 إلكتروناً', '9 إلكترونات'],
        optionsEn: ['8 electrons', '18 electrons', '32 electrons', '9 electrons'],
        correctIndex: 1,
        explanationAr: 'حسب العلاقة $2n^2$: السعة $= 2(3)^2 = 2 \\times 9 = 18$ إلكتروناً (موزعة على $3s^2, 3p^6, 3d^{10}$).',
        explanationEn: 'Using 2n^2: capacity = 2 * (3^2) = 18 electrons.'
      }
    ],

    assessment: {
      id: 'quiz-h11-ch2',
      titleAr: 'اختبار إتقان أعداد الكم والتوزيع الإلكتروني',
      titleEn: 'Mastery Quiz: Quantum Numbers & Configurations',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-ch2-1',
          textAr: 'التوزيع الإلكتروني الصحيح لذرة الكروم $_{24}\\text{Cr}$ هو:',
          textEn: 'The correct ground state electron configuration of 24Cr is:',
          optionsAr: ['$[\\text{Ar}]_{18} \\, 4s^1 \\, 3d^5$', '$[\\text{Ar}]_{18} \\, 4s^2 \\, 3d^4$', '$[\\text{Ar}]_{18} \\, 3d^6$', '$[\\text{Ar}]_{18} \\, 4s^2 \\, 4p^4$'],
          optionsEn: ['[Ar] 4s1 3d5', '[Ar] 4s2 3d4', '[Ar] 3d6', '[Ar] 4s2 4p4'],
          correctIndex: 0,
          conceptTestedAr: 'شذوذ التوزيع الإلكتروني لعنصر الكروم',
          conceptTestedEn: 'Chromium anomalous electron configuration',
          explanationAr: 'ينتقل إلكترون من $4s$ إلى $3d$ ليصبح نصف ممتلئ ($3d^5$) مما يحقق حالة استقرار طاقي أعلى.',
          explanationEn: 'One 4s electron promotes to 3d giving half-filled [Ar] 4s1 3d5 stability.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-ch2-2',
          textAr: 'أي من مجموعات أعداد الكم الآتية غير ممكنة فيزيائياً ورياضياً؟',
          textEn: 'Which set of quantum numbers is physically impossible?',
          optionsAr: ['$n=2, \\, l=2, \\, m_l=0, \\, m_s=+\\frac{1}{2}$', '$n=3, \\, l=1, \\, m_l=-1, \\, m_s=-\\frac{1}{2}$', '$n=4, \\, l=0, \\, m_l=0, \\, m_s=+\\frac{1}{2}$', '$n=2, \\, l=1, \\, m_l=+1, \\, m_s=-\\frac{1}{2}$'],
          optionsEn: ['n=2, l=2, ml=0, ms=+1/2', 'n=3, l=1, ml=-1, ms=-1/2', 'n=4, l=0, ml=0, ms=+1/2', 'n=2, l=1, ml=+1, ms=-1/2'],
          correctIndex: 0,
          conceptTestedAr: 'قواعد وقيم أعداد الكم المسموحة',
          conceptTestedEn: 'Permissible quantum number rules',
          explanationAr: 'لا يمكن لعدد الكم الثانوي $l$ أن يساوي $n$؛ قيم $l$ المسموحة هي من $0$ إلى $n-1$ فقط (عند $n=2$ قيم $l$ الممكنة هي $0, 1$).',
          explanationEn: 'l cannot equal n; for n=2, l can only be 0 or 1.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-ch2-3',
          textAr: 'عدد الأوربيتالات النصف ممتلئة (الإلكترونات المفردة) في ذرة الأكسجين $_{8}\\text{O}$ يساوي:',
          textEn: 'The number of half-filled orbitals (unpaired electrons) in oxygen 8O is:',
          optionsAr: ['2', '4', '1', '0'],
          optionsEn: ['2', '4', '1', '0'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قاعدة هوند لتحديد الإلكترونات المفردة',
          conceptTestedEn: 'Hund rule determination of unpaired electrons',
          explanationAr: 'توزيع الأكسجين: $1s^2 \\, 2s^2 \\, 2p^4$؛ في المستوى $2p$ يوجد أوربيتال مزدوج واثنان نصف ممتلئين ($2p_x^2, 2p_y^1, 2p_z^1$).',
          explanationEn: 'Configuration 1s2 2s2 2p4 yields two unpaired electrons in 2py and 2pz.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: PERIODIC TABLE & PERIODIC PROPERTIES ──
  {
    id: 'h11-ch-3',
    order: 3,
    titleAr: 'المحاضرة 3: الجدول الدوري الحديث والتدرج في الخواص الدورية للعناصر',
    titleEn: 'Lecture 3: The Modern Periodic Table & Periodic Trends (Radii, Ionization, Affinity & Electronegativity)',
    subtitleAr: 'تقسيم الجدول إلى الفئات (s, p, d, f)، التدرج في نصف القطر الذري والأيوني، طاقة التأين، الميل الإلكتروني، السالبية الكهربية، والخاصية الفلزية وأكاسيد العناصر',
    subtitleEn: 'Master s, p, d, f block classification, atomic & ionic radius trends, effective nuclear charge Z_eff, ionization energy, electron affinity, electronegativity, and acid-base oxide behavior.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Chemistry',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: الجدول الدوري والتدرج في الخواص',
    unitTitleEn: 'Unit 2: The Periodic Table & Periodic Trends',
    lessonNumberAr: 'الدرس 3: تدرج الخواص الدورية في الجدول الدوري',
    lessonNumberEn: 'Lesson 3: Periodic Trends',

    keyConceptsAr: [
      'شحنة النواة الفعالة ($Z_{\\text{eff}}$) وتأثير حجب إلكترونات المستويات الداخلية',
      'نصف القطر الذري: يقل عبر الدورة الأفقية ويزداد بالهبوط في المجموعة الرأسية',
      'نصف القطر الأيوني: الأيون الموجب (الكاتيون) أصغر من ذرته، والأيون السالب (الأنيون) أكبر من ذرته',
      'جهد التأين (Ionization Energy) والميل الإلكتروني (Electron Affinity) والسالبية الكهربية (Electronegativity)',
      'الخاصية الفلزية واللافلزية، وسلوك الأكاسيد: الحامضية والقاعدية والمترددة ($\\text{Al}_2\\text{O}_3, \\text{ZnO}$)'
    ],
    keyConceptsEn: [
      'Effective nuclear charge Z_eff and inner core electron shielding effect',
      'Atomic radius trends: decreases across period, increases down group',
      'Ionic radii: Cations smaller than parent atoms, anions larger than parent atoms',
      'Ionization energy, electron affinity, and Pauling electronegativity trends',
      'Metallic/non-metallic character, and basic, acidic, and amphoteric oxides (Al2O3, ZnO)'
    ],

    conceptMapAr: [
      'في الدورة ➔ زيادة $Z_{\\text{eff}}$ ➔ يقل نصف القطر ➔ يزداد جهد التأين والسالبية',
      'في المجموعة ➔ زيادة المستويات $n$ ➔ يزداد نصف القطر ➔ يقل جهد التأين والسالبية',
      'الأكاسيد ➔ أكاسيد الفلزات قاعدية ($\\text{Na}_2\\text{O}$) ➔ أكاسيد اللافلزات حامضية ($\\text{CO}_2, \\text{SO}_3$) ➔ مترددة تتفاعل مع الأحماض والقلويات ($\\text{Al}_2\\text{O}_3$)'
    ],
    conceptMapEn: [
      'Across Period ➔ Z_eff rises ➔ Radius drops ➔ IE & Electronegativity rise',
      'Down Group ➔ Shells increase ➔ Radius rises ➔ IE & Electronegativity drop',
      'Oxides ➔ Metal oxides basic ➔ Nonmetal oxides acidic ➔ Amphoteric react with both acids & bases'
    ],

    learningOutcomesAr: [
      'تفسير تدرج نصف القطر الذري وطاقة التأين والسالبية الكهربية بدلالة شحنة النواة الفعالة.',
      'المقارنة بين أنصاف أقطار الذرات وأيوناتها المختلفة بدقة.',
      'تصنيف أكاسيد العناصر إلى حامضية وقاعدية ومترددة وكتابة معادلات تفاعلها.'
    ],
    learningOutcomesEn: [
      'Explain periodic trends in atomic radius, ionization energy, and electronegativity via effective nuclear charge.',
      'Compare sizes of neutral atoms, cations, and isoelectronic anions.',
      'Classify oxides into acidic, basic, and amphoteric and write neutralisation equations.'
    ],

    vocabulary: [
      { termAr: 'شحنة النواة الفعالة', termEn: 'Effective Nuclear Charge (Z_eff)', definitionAr: 'الشحنة الموجبة الفعلية التي تؤثر بها النواة على إلكترونات التكافؤ الخارجية بعد خصم تأثير الحجب للمستويات الداخلية.' },
      { termAr: 'السالبية الكهربية', termEn: 'Electronegativity', definitionAr: 'قدرة الذرة في الجزيء على جذب إلكترونات الرابطة الكيميائية نحوها، وأعلاها هو الفلور F (4.0).' },
      { termAr: 'أكسيد متردد', termEn: 'Amphoteric Oxide', definitionAr: 'أكسيد يتفاعل مع الأحماض كأكسيد قاعدي ويتفاعل مع القواعد كأكسيد حامضي ليعطي ملحاً وماء مثل $\\text{Al}_2\\text{O}_3$.' }
    ],

    warmupHookAr: 'لماذا يستطيع عنصر الفلور سحب الإلكترونات من أي ذرة أخرى في الجدول الدوري، بينما يسهل على عنصر السيزيوم التخلي عن إلكترونه بمجرد سقوط ضوء خافت عليه؟ السر يكمن في تدرج الحجم الذري والسالبية الكهربية!',
    warmupHookEn: 'Why does Fluorine greedily strip electrons from almost any other element, while Cesium effortlessly ejects its valence electron under dim light? The answer lies in atomic radius and electronegativity trends.',

    mainContentAr: `
### 1. تدرج نصف القطر الذري (Atomic Radius Trend)
* **في الدورة الأفقية (من اليسار لليمين):**
  * يقل نصف القطر الذري بزيادة العدد الذري.
  * **السبب:** زيادة شحنة النواة الفعالة ($Z_{\\text{eff}}$) في نفس مستوى الطاقة الرئيسي مما يزيد من قوة جذب النواة لإلكترونات التكافؤ فتنكمش الذرة.
* **في المجموعة الرأسية (من الأعلى للأسفل):**
  * يزداد نصف القطر الذري بزيادة العدد الذري.
  * **السبب:** إضافة مستويات طاقة رئيسية جديدة كاملة وزيادة تأثير حجب الإلكترونات الداخلية.

---

### 2. تدرج طاقة التأين والسالبية الكهربية (Ionization Energy & Electronegativity)
* **طاقة التأين الأولى:** الطاقة اللازمة لنزع أقل الإلكترونات ارتباطاً بالذرة المفردة الغازية:
  $$\\text{M}_{(g)} + \\text{IE}_1 \\longrightarrow \\text{M}^+_{(g)} + e^-$$
* تزداد طاقة التأين والسالبية في الدورة بقلة نصف القطر، وتقل في المجموعة بزيادة نصف القطر.
* **الفلور ($_{9}\\text{F}$):** أعلى عناصر الجدول الدوري سالبية كهربية ($4.0$).
* **السيزيوم ($_{55}\\text{Cs}$):** أكبر العناصر حجماً ذرياً وأقلها سالبية كهربية وأقواها فلزية.
    `,
    mainContentEn: `
### Periodic Trends
* **Atomic Radius:** Decreases across a period (Z_eff increases); Increases down a group (new shells added).
* **Ionization Energy & Electronegativity:** Increase across a period; Decrease down a group.
* **Highest Electronegativity:** Fluorine (4.0).
* **Largest Atomic Size:** Cesium / Francium.
    `,

    diagramType: 'periodic_table_trends',
    diagramData: {
      type: 'trend_arrows',
      title: 'مخطط تدرج الخواص الدورية في الجدول الدوري',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="50" y="30" width="300" height="150" rx="10" fill="rgba(15, 23, 42, 0.8)" stroke="#64748b" stroke-width="2" />
        <line x1="70" y1="50" x2="330" y2="50" stroke="#38bdf8" stroke-width="3" marker-end="url(#arrow)" />
        <text x="120" y="45" fill="#38bdf8" font-size="12">زيادة جهد التأين والسالبية الكهربية ➔</text>
        <line x1="70" y1="160" x2="330" y2="160" stroke="#f43f5e" stroke-width="3" marker-end="url(#arrow)" />
        <text x="130" y="175" fill="#f43f5e" font-size="12">نقصان نصف القطر الذري ➔</text>
        <line x1="60" y1="60" x2="60" y2="150" stroke="#34d399" stroke-width="3" marker-end="url(#arrow)" />
        <text x="70" y="110" fill="#34d399" font-size="11" transform="rotate(90 70 110)">زيادة الحجم الذري ↓</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: المقارنة بين نصف قطر الذرة وأيونها',
        titleEn: 'Example: Comparing Atomic vs Ionic Radii',
        problemAr: 'رتب الجسيمات الآتية تصاعدياً حسب نصف القطر مع التعليل: $_{11}\\text{Na}^+, \\, _{11}\\text{Na}, \\, _{9}\\text{F}^-, \\, _{9}\\text{F}$.',
        problemEn: 'Arrange in ascending order of radius: Na+, Na, F-, F.',
        stepsAr: [
          'الكاتيون أصغر من ذرته: نصف قطر $\\text{Na}^+ < \\text{Na}$ لزيادة شحنة النواة الفعالة وتناقص عدد مستويات الطاقة بعد فقد إلكترون.',
          'الأنيون أكبر من ذرته: نصف قطر $\\text{F}^- > \\text{F}$ لزيادة قوى التنافر بين إلكترونات التكافؤ.',
          'الجسيمات متساوية الإلكترونات ($\\text{Na}^+$ و $\\text{F}^-$ كلاهما 10 إلكترونات): $\\text{Na}^+$ به 11 بروتون يجذب 10 إلكترونات بقوة أكبر من $\\text{F}^-$ الذي به 9 بروتونات فقط.',
          'الترتيب التصاعدي الصحيح: $\\text{Na}^+ < \\text{F} < \\text{F}^- < \\text{Na}$.'
        ],
        stepsEn: [
          'Cations smaller than parent: Na+ < Na.',
          'Anions larger than parent: F < F-.',
          'Isoelectronic comparison (Na+ vs F-): Na+ (11 protons) pulls 10 electrons tighter than F- (9 protons).',
          'Ascending order: Na+ < F < F- < Na.'
        ],
        finalAnswerAr: '$\\text{Na}^+ < \\text{F} < \\text{F}^- < \\text{Na}$',
        finalAnswerEn: 'Na+ < F < F- < Na'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11ch-3',
        problemAr: 'علل: يعتبر أكسيد الألومنيوم $\\text{Al}_2\\text{O}_3$ من الأكاسيد المترددة.',
        problemEn: 'Explain why aluminum oxide Al2O3 is an amphoteric oxide.',
        solutionStepsAr: [
          'لأنه يتفاعل مع الأحماض القوية (مثل حمض الهيدروكلوريك $\\text{HCl}$) كأكسيد قاعدي مكوناً ملح ألومنيوم وماء: $\\text{Al}_2\\text{O}_3 + 6\\text{HCl} \\to 2\\text{AlCl}_3 + 3\\text{H}_2\\text{O}$.',
          'ويتفاعل مع القواعد القوية (مثل هيدروكسيد الصوديوم $\\text{NaOH}$) كأكسيد حامضي مكوناً ملح ميتا ألومينات الصوديوم وماء: $\\text{Al}_2\\text{O}_3 + 2\\text{NaOH} \\to 2\\text{NaAlO}_2 + \\text{H}_2\\text{O}$.'
        ],
        finalAnswerAr: 'لأنه يتفاعل مع الأحماض كقاعدة ومع القواعد كحمض معطياً ملحاً وماء.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11ch-3',
        questionAr: 'أي من العناصر الآتية يمتلك أعلى سالبية كهربية في الجدول الدوري الحديث؟',
        questionEn: 'Which element possesses the highest electronegativity in the modern periodic table?',
        optionsAr: ['الفلور (F)', 'الكلور (Cl)', 'الأكسجين (O)', 'السيزيوم (Cs)'],
        optionsEn: ['Fluorine (F)', 'Chlorine (Cl)', 'Oxygen (O)', 'Cesium (Cs)'],
        correctIndex: 0,
        explanationAr: 'الفلور F يمتلك أعلى سالبية كهربية وقيمتها 4.0 على مقياس باولنج لصغر حجمه الذري وزيادة شحنته الفعالة.',
        explanationEn: 'Fluorine has the maximum electronegativity of 4.0 on the Pauling scale.'
      }
    ],

    assessment: {
      id: 'quiz-h11-ch3',
      titleAr: 'اختبار إتقان الجدول الدوري وتدرج الخواص',
      titleEn: 'Mastery Quiz: Periodic Table & Trends',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-ch3-1',
          textAr: 'عند الانتقال من اليسار إلى اليمين في الدورة الثالثة من الجدول الدوري، فإن طاقة التأين الأولى لعناصرها:',
          textEn: 'Moving left-to-right across Period 3 of the periodic table, the first ionization energy generally:',
          optionsAr: ['تزداد تدريجياً لصغر نصف القطر وزيادة الشحنة الفعالة', 'تقل تدريجياً لزيادة عدد البروتونات', 'تظل ثابتة تماماً', 'تتضاعف 10 مرات'],
          optionsEn: ['Increases gradually due to smaller radius & higher Z_eff', 'Decreases gradually', 'Remains constant', 'Multiplies tenfold'],
          correctIndex: 0,
          conceptTestedAr: 'تدرج طاقة التأين عبر الدورات الأفقية',
          conceptTestedEn: 'Ionization energy periodic trend across periods',
          explanationAr: 'بزيادة شحنة النواة الفعالة وانكماش الحجم الذري، تزداد قوة جذب النواة للإلكترون مما يتطلب طاقة أكبر لنزعه.',
          explanationEn: 'Increasing effective nuclear charge and decreasing atomic radius make electron removal require higher energy.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-ch3-2',
          textAr: 'أي من الأكاسيد الآتية يُعد أكسيداً حامضياً يتفاعل مع القلويات مكوناً ملحاً وماء؟',
          textEn: 'Which of the following oxides is an acidic oxide that neutralizes bases?',
          optionsAr: ['$\\text{SO}_3$ (ثالث أكسيد الكبريت)', '$\\text{Na}_2\\text{O}$ (أكسيد الصوديوم)', '$\\text{MgO}$ (أكسيد المغنيسيوم)', '$\\text{K}_2\\text{O}$ (أكسيد البوتاسيوم)'],
          optionsEn: ['SO3 (Sulfur trioxide)', 'Na2O (Sodium oxide)', 'MgO (Magnesium oxide)', 'K2O (Potassium oxide)'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الأكاسيد الحامضية والقاعدية',
          conceptTestedEn: 'Classification of acidic vs basic oxides',
          explanationAr: '$\\text{SO}_3$ أكسيد لا فلزي حامضي (أنهيدريد حمض الكبريتيك) بينما أكاسيد الفلزات الأخرى قاعدية.',
          explanationEn: 'SO3 is a non-metallic acidic oxide, whereas Na2O, MgO, and K2O are basic metal oxides.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-ch3-3',
          textAr: 'الأيون الأكبر حجماً في نصف القطر الأيوني بين الجسيمات المتساوية الإلكترونات التالية هو:',
          textEn: 'The largest ionic radius among the following isoelectronic species is:',
          optionsAr: ['$\\text{N}^{3-}$ (النيتريد)', '$\\text{O}^{2-}$ (الأكسيد)', '$\\text{F}^-$ (الفلوريد)', '$\\text{Mg}^{2+}$ (المغنيسيوم)'],
          optionsEn: ['N3- (Nitride)', 'O2- (Oxide)', 'F- (Fluoride)', 'Mg2+ (Magnesium)'],
          correctIndex: 0,
          conceptTestedAr: 'مقارنة أنصاف أقطار الجسيمات متساوية الإلكترونات',
          conceptTestedEn: 'Isoelectronic series ionic radii comparison',
          explanationAr: 'جميعها تمتلك 10 إلكترونات؛ وأيون $\\text{N}^{3-}$ يمتلك أقل عدد بروتونات (7 فقط) لجذب 10 إلكترونات مع تنافر شديد للشحنة -3، فيكون الأكبر حجماً.',
          explanationEn: 'N3- has the lowest nuclear charge (7 protons) for 10 electrons, giving the largest electron cloud expansion.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── LECTURE 4: CHEMICAL BONDING & MOLECULAR GEOMETRY ──
  {
    id: 'h11-ch-4',
    order: 4,
    titleAr: 'المحاضرة 4: الروابط الكيميائية، نظرية تنافر أزواج الإلكترونات (VSEPR)، ونظرية رابطة التكافؤ والتهجين',
    titleEn: 'Lecture 4: Chemical Bonding, VSEPR Molecular Geometry, Valence Bond Theory & Hybridization (sp, sp2, sp3)',
    subtitleAr: 'الرابطة الأيونية والتساهمية، نموذج لويس النقطي، نظرية تنافر أزواج إلكترونات التكافؤ وأشكال الجزيئات والزوايا، التهجين وتفسير جزيئات الميثان والإيثيلين والأسيتيلين',
    subtitleEn: 'Master ionic/covalent bonding, Lewis structures, VSEPR molecular geometry & bond angles, Valence Bond Theory, orbital hybridization (sp3 in CH4, sp2 in C2H4, sp in C2H2), coordinate, hydrogen & metallic bonding.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Chemistry',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: الروابط وأشكال الجزيئات',
    unitTitleEn: 'Unit 3: Chemical Bonding & Molecular Shapes',
    lessonNumberAr: 'الدرس 4: الروابط الكيميائية والتهجين ونظرية VSEPR',
    lessonNumberEn: 'Lesson 4: Bonding, Hybridization & VSEPR',

    keyConceptsAr: [
      'الرابطة الأيونية (فرق السالبية $> 1.7$) والتساهمية (نقية = 0، غير قطبية $< 0.4$، قطبية $0.4 - 1.7$)',
      'نظرية تنافر أزواج إلكترونات التكافؤ (VSEPR) والصيغة العامة $AX_n E_m$ والزوايا بين الروابط',
      'نظرية رابطة التكافؤ (VBT) ومفهوم تداخل الأوربيتالات لتكوين روابط سيجما ($\\sigma$) القوية وباي ($\\pi$) الجانبية',
      'التهجين المداري (Hybridization): $sp^3$ (رباعي الأوجه $109.5^\\circ$)، $sp^2$ (مثلث مستو $120^\\circ$)، و $sp$ (خطي $180^\\circ$)',
      'الرابطة التناسقية (Coordinate Bond)، الرابطة الهيدروجينية، والرابطة الفلزية'
    ],
    keyConceptsEn: [
      'Ionic bonding (ΔEN > 1.7) vs covalent nonpolar/polar types',
      'VSEPR theory general formula AXnEm and spatial bond angle predictions',
      'Valence Bond Theory orbital overlap: axial Sigma (σ) and lateral Pi (π) bonds',
      'Orbital Hybridization: sp3 (Tetrahedral 109.5° in CH4), sp2 (Trigonal planar 120° in C2H4), sp (Linear 180° in C2H2)',
      'Coordinate bonding (NH4+, H3O+), hydrogen bonding, and metallic electron sea model'
    ],

    conceptMapAr: [
      'تكوين الرابطة ➔ فرق السالبية ➔ أيونية / تساهمية',
      'الشكل الفراغي ➔ نموذج VSEPR ➔ أزواج الارتباط $X$ + أزواج حرة $E$',
      'تفسير التكافؤ ➔ التهجين ➔ $sp^3$ (ميثان) / $sp^2$ (إيثيلين) / $sp$ (أسيتيلين)',
      'الروابط الثانوية ➔ الرابطة الهيدروجينية (شذوذ غليان الماء) + الرابطة الفلزية'
    ],
    conceptMapEn: [
      'Bond Formation ➔ ΔEN ➔ Ionic / Covalent',
      'Geometry ➔ VSEPR Model ➔ Bonding pairs X + Lone pairs E',
      'Hybridization ➔ sp3 (CH4) / sp2 (C2H4) / sp (C2H2)',
      'Secondary Bonds ➔ Hydrogen bonding (water anomalies) + Metallic bond'
    ],

    learningOutcomesAr: [
      'التنبؤ بنوع الرابطة الكيميائية وشكل الجزيء الفراغي والزوايا بين الروابط باستخدام نموذج VSEPR.',
      'تفسير تكوين روابط سيجما $\\sigma$ وباي $\\pi$ في جزيئات الميثان والإيثيلين والأسيتيلين بدلالة التهجين.',
      'توضيح كيفية تكوين الرابطة التناسقية في أيون الهيدرونيوم $\\text{H}_3\\text{O}^+$ وأيون الأمونيوم $\\text{NH}_4^+$.'
    ],
    learningOutcomesEn: [
      'Predict molecular geometry, polarity, and bond angles using the VSEPR model.',
      'Explain sigma (σ) and pi (π) bonding in methane, ethene, and ethyne using hybridization.',
      'Illustrate coordinate bond formation in hydronium H3O+ and ammonium NH4+ ions.'
    ],

    vocabulary: [
      { termAr: 'التهجين المداري', termEn: 'Orbital Hybridization', definitionAr: 'عملية خلط واندماج أوربيتالين مختلفين أو أكثر من نفس الذرة متقاربين في الطاقة لإنتاج أوربيتالات مهجنة جديدة متماثلة في الشكل والطاقة.' },
      { termAr: 'رابطة سيجما (σ)', termEn: 'Sigma Bond (σ)', definitionAr: 'رابطة تساهمية قوية تنشأ من تداخل أوربيتالين ذريين رأساً برأس على خط واحد يربط بين النواتين.' },
      { termAr: 'رابطة تناسقية', termEn: 'Coordinate Bond', definitionAr: 'رابطة تساهمية خاصة يقدم فيها زوج الإلكترونات المشترك من ذرة واحدة مانحة (Donor) إلى ذرة أخرى مستقبلة (Acceptor) بها أوربيتال فارغ.' }
    ],

    warmupHookAr: 'لماذا يمتلك الماء $\\text{H}_2\\text{O}$ درجة غليان مرتفعة بشكل شاذ ($100^\\circ\\text{C}$) وكثافة غير معتادة تجعل الجليد يطفو فوق سطح المحيطات فيحمي الحياة البحرية من التجمد التام؟ السر يكمن في قطبية جزيء الماء وتكوينه شبكة قوية من "الروابط الهيدروجينية"!',
    warmupHookEn: 'Why does water boil at an anomalously high 100°C and expand upon freezing so ice floats to insulate marine life beneath arctic seas? The secret is hydrogen bonding enabled by high oxygen electronegativity and molecular polarity.',

    mainContentAr: `
### 1. أنواع التهجين العضوي الأساسية (Hybridization Types)
1. **التهجين $sp^3$ (جزيء الميثان $\\text{CH}_4$):**
   * خلط أوربيتال $2s$ مع 3 أوربيتالات $2p$ $\\implies 4$ أوربيتالات مهجنة من نوع $sp^3$.
   * **الشكل:** هرم رباعي الأوجه منتظم (Tetrahedral).
   * **الزاوية بين الروابط:** $109.5^\\circ$.
2. **التهجين $sp^2$ (جزيء الإيثيلين $\\text{C}_2\\text{H}_4$):**
   * خلط أوربيتال $2s$ مع 2 أوربيتال $2p$ $\\implies 3$ أوربيتالات $sp^2$ ويبقى أوربيتال $2p_z$ نقي.
   * **الشكل:** مثلث مستو (Trigonal Planar).
   * **الزاوية:** $120^\\circ$.
   * **الروابط:** رابطة مزدوجة بين ذرتي الكربون ($1\\sigma + 1\\pi$).
3. **التهجين $sp$ (جزيء الأسيتيلين $\\text{C}_2\\text{H}_2$):**
   * خلط $2s$ مع $2p_x$ $\\implies 2$ أوربيتال $sp$ ويبقى $2p_y, 2p_z$ نقيين.
   * **الشكل:** خطي (Linear).
   * **الزاوية:** $180^\\circ$.
   * **الروابط:** رابطة ثلاثية بين ذرتي الكربون ($1\\sigma + 2\\pi$).

---

### 2. الرابطة التناسقية (Coordinate Covalent Bond)
* تنشأ بين ذرة مانحة تمتلك زوجاً حراً من الإلكترونات (مثل النيتروجين في $\\text{NH}_3$ أو الأكسجين في $\\text{H}_2\\text{O}$) وذرة أو أيون مستقبل به أوربيتال فارغ مثل بروتون الهيدروجين $\\text{H}^+$:
  $$\\text{NH}_3 + \\text{H}^+ \\longrightarrow [\\text{NH}_4]^+ \\quad (\\text{أيون الأمونيوم})$$
  $$\\text{H}_2\\text{O} + \\text{H}^+ \\longrightarrow [\\text{H}_3\\text{O}]^+ \\quad (\\text{أيون الهيدرونيوم})$$
    `,
    mainContentEn: `
### 1. Types of Hybridization
* **sp3 (Methane CH4):** Tetrahedral, 109.5° angles, 4 σ bonds.
* **sp2 (Ethene C2H4):** Trigonal planar, 120° angles, 1 σ + 1 π double bond.
* **sp (Ethyne C2H2):** Linear, 180° angles, 1 σ + 2 π triple bond.

### 2. Coordinate Bonding
* Donor atom provides lone pair to an empty orbital on acceptor (e.g., $NH_3 + H^+ \\to NH_4^+$).
    `,

    diagramType: 'molecular_geometry',
    diagramData: {
      type: 'hybridization_comparison',
      title: 'مقارنة أشكال الجزيئات: الميثان (sp³)، الإيثيلين (sp²)، والأسيتيلين (sp)',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="80" cy="100" r="14" fill="#38bdf8" />
        <text x="75" y="105" fill="#fff" font-size="11">C</text>
        <text x="50" y="160" fill="#38bdf8" font-size="12">CH₄ (sp³ - 109.5°)</text>
        <circle cx="200" cy="100" r="14" fill="#34d399" />
        <circle cx="240" cy="100" r="14" fill="#34d399" />
        <line x1="214" y1="96" x2="226" y2="96" stroke="#34d399" stroke-width="2" />
        <line x1="214" y1="104" x2="226" y2="104" stroke="#fbbf24" stroke-width="2" />
        <text x="175" y="160" fill="#34d399" font-size="12">C₂H₄ (sp² - 120°)</text>
        <circle cx="320" cy="100" r="14" fill="#c084fc" />
        <circle cx="360" cy="100" r="14" fill="#c084fc" />
        <text x="310" y="160" fill="#c084fc" font-size="12">C₂H₂ (sp - 180°)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تحديد نوع التهجين وشكل جزيء النشادر والماء',
        titleEn: 'Example: Hybridization and Geometry of Ammonia and Water',
        problemAr: 'علل: بالرغم من أن الذرة المركزية في كل من الميثان $\\text{CH}_4$ والنشادر $\\text{NH}_3$ والماء $\\text{H}_2\\text{O}$ من نوع التهجين $sp^3$، إلا أن الزوايا بين الروابط تقل ($109.5^\\circ \\to 107^\\circ \\to 104.5^\\circ$).',
        problemEn: 'Explain why bond angles decrease from 109.5° to 107° to 104.5° across CH4, NH3, and H2O despite having sp3 hybridization.',
        stepsAr: [
          'في الميثان $\\text{CH}_4$: يوجد 4 أزواج ارتباط ولا يوجد أزواج حرة، فيكون التنافر متساوياً والزاوية $109.5^\\circ$.',
          'في النشادر $\\text{NH}_3$: يوجد 3 أزواج ارتباط وزوج حر واحد ($E=1$)؛ ولأن الزوج الحر يشغل حيزاً فراغياً أكبر وله قوة تنافر أعلى، فإنه يضغط على روابط الارتباط فتقل الزاوية إلى $107^\\circ$.',
          'في الماء $\\text{H}_2\\text{O}$: يوجد زوجان حران ($E=2$)؛ التنافر بين الزوجين الحرين يضغط بقوة أكبر على رابطتي $\\text{O-H}$ فتنقص الزاوية إلى $104.5^\\circ$.'
        ],
        stepsEn: [
          'CH4: 4 bonding pairs, 0 lone pairs ⟹ perfect 109.5° tetrahedral angle.',
          'NH3: 3 bonding pairs, 1 lone pair ⟹ lone pair-bond pair repulsion compresses angle to 107°.',
          'H2O: 2 bonding pairs, 2 lone pairs ⟹ strong lone pair-lone pair repulsion compresses angle to 104.5°.'
        ],
        finalAnswerAr: 'بسبب زيادة عدد الأزواج الحرة على الذرة المركزية وقوة تنافرها مع أزواج الارتباط.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11ch-4',
        problemAr: 'كم عدد روابط سيجما $\\sigma$ وباي $\\pi$ في جزيء الأسيتيلين $\\text{H}-\\text{C}\\equiv\\text{C}-\\text{H}$؟',
        problemEn: 'How many sigma and pi bonds are in ethyne H-C≡C-H?',
        solutionStepsAr: [
          'رابطتا $\\text{C}-\\text{H}$ الأحاديتان هما رابطتان من نوع سيجما $\\sigma$.',
          'الرابطة الثلاثية بين ذرتي الكربون $\\text{C}\\equiv\\text{C}$ تتكون من رابطة واحدة سيجما $\\sigma$ ورابطتين من نوع باي $\\pi$.',
          'المجموع الكلي: 3 روابط سيجما ($3\\sigma$) ورابطتان باي ($2\\pi$).'
        ],
        finalAnswerAr: '$3\\sigma$ و $2\\pi$'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11ch-4',
        questionAr: 'نوع التهجين في ذرة الكربون في جزيء غاز الميثان $\\text{CH}_4$ هو:',
        questionEn: 'The hybridization of the carbon atom in methane CH4 is:',
        optionsAr: ['$sp^3$', '$sp^2$', '$sp$', '$dsp^2$'],
        optionsEn: ['sp3', 'sp2', 'sp', 'dsp2'],
        correctIndex: 0,
        explanationAr: 'في الميثان، تندمج أوربيتالات $2s + 2p_x + 2p_y + 2p_z$ لتكوين 4 أوربيتالات مهجنة متكافئة من نوع $sp^3$.',
        explanationEn: 'Mixing one s and three p orbitals produces four equivalent sp3 hybrid orbitals.'
      }
    ],

    assessment: {
      id: 'quiz-h11-ch4',
      titleAr: 'اختبار إتقان الروابط الكيميائية والتهجين',
      titleEn: 'Mastery Quiz: Chemical Bonding & Hybridization',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-ch4-1',
          textAr: 'الزاوية بين الروابط المهجنة من نوع $sp^2$ في جزيء الإيثيلين $\\text{C}_2\\text{H}_4$ تساوي:',
          textEn: 'The bond angle between sp2 hybrid orbitals in ethene C2H4 is:',
          optionsAr: ['$120^\\circ$', '$109.5^\\circ$', '$180^\\circ$', '$90^\\circ$'],
          optionsEn: ['120°', '109.5°', '180°', '90°'],
          correctIndex: 0,
          conceptTestedAr: 'قيم الزوايا الناتجة عن التهجين sp2',
          conceptTestedEn: 'Bond angles in sp2 hybridization',
          explanationAr: 'التهجين $sp^2$ يعطي شكلاً مثلثاً مستوياً والزاوية بين أوربيتالاته المهجنة هي $120^\\circ$.',
          explanationEn: 'Trigonal planar geometry of sp2 orbitals yields 120° bond angles.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-ch4-2',
          textAr: 'الرابطة الموجودة في أيون الهيدرونيوم $[\\text{H}_3\\text{O}]^+$ بالإضافة إلى الروابط التساهمية القطبية هي رابطة:',
          textEn: 'The bond present in the hydronium ion [H3O]+ in addition to polar covalent bonds is:',
          optionsAr: ['رابطة تناسقية (Coordinate Bond)', 'رابطة أيونية', 'رابطة فلزية', 'رابطة باي'],
          optionsEn: ['Coordinate Bond', 'Ionic Bond', 'Metallic Bond', 'Pi Bond'],
          correctIndex: 0,
          conceptTestedAr: 'تكوين الرابطة التناسقية مع بروتون الهيدروجين',
          conceptTestedEn: 'Formation of coordinate bond in hydronium',
          explanationAr: 'تمنح ذرة أكسجين الماء زوجاً حراً من الإلكترونات للأوربيتال الفارغ في أيون $\\text{H}^+$ مكونة رابطة تناسقية.',
          explanationEn: 'Oxygen donates a lone pair into the empty 1s orbital of H+ to form a coordinate bond.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-ch4-3',
          textAr: 'السبب الأساسي في ارتفاع درجة غليان الماء مقارنة بمركب كبريتيد الهيدروجين $\\text{H}_2\\text{S}$ هو وجود:',
          textEn: 'The primary reason for water\'s abnormally high boiling point compared to H2S is:',
          optionsAr: ['الروابط الهيدروجينية بين جزيئات الماء', 'الروابط الأيونية القوية', 'كبر الكتلة الجزيئية للماء', 'التهجين من نوع sp'],
          optionsEn: ['Intermolecular hydrogen bonding in water', 'Strong ionic bonds', 'Larger molecular mass', 'sp hybridization'],
          correctIndex: 0,
          conceptTestedAr: 'تأثير الرابطة الهيدروجينية على الخواص الفيزيائية للماء',
          conceptTestedEn: 'Effect of hydrogen bonding on water physical properties',
          explanationAr: 'بسبب كبر سالبية الأكسجين، تتكون روابط هيدروجينية قوية بين جزيئات الماء تتطلب طاقة حرارية عالية لكسرها.',
          explanationEn: 'High electronegativity of oxygen creates strong intermolecular hydrogen bonds, raising boiling point.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: REPRESENTATIVE ELEMENTS (GROUP 1A & GROUP 5A) ──
  {
    id: 'h11-ch-5',
    order: 5,
    titleAr: 'المحاضرة 5: كيمياء العناصر الممثلة: فلزات الأقلاء (Group 1A) وعناصر المجموعة الخامسة (Group 5A)',
    titleEn: 'Lecture 5: Chemistry of Representative Elements: Group 1A (Alkali Metals) & Group 5A (Nitrogen & Phosphorus)',
    subtitleAr: 'الخواص العامة للأقلاء، تفاعلات الصوديوم والبوتاسيوم، كيمياء النيتروجين وتحضير النشادر (هابر-بوش) وحمض النيتريك، والأسمدة النيتروجينية والفوسفاتية',
    subtitleEn: 'Master alkali metal chemistry (Na, K, superoxides, flame tests), nitrogen preparation, Haber-Bosch ammonia synthesis, Ostwald nitric acid process, and chemical fertilizers.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Chemistry',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: كيمياء العناصر الممثلة في بعض المجموعات المنتظمة',
    unitTitleEn: 'Unit 4: Representative Elements Chemistry',
    lessonNumberAr: 'الدرس 5: عناصر المجموعة 1A والمجموعة 5A',
    lessonNumberEn: 'Lesson 5: Group 1A & Group 5A Chemistry',

    keyConceptsAr: [
      'الخواص العامة لفلزات الأقلاء (Group 1A): كبر الحجم الذري، سهولة فقد إلكترون التكافؤ، والنشاط الكيميائي العالي',
      'كشف اللهب (Flame Test): الصوديوم أصفر ذهبي، البوتاسيوم بنفسجي فاتح، الليثيوم قرمزي، والسيزيوم أزرق بنفسجي',
      'أكاسيد الأقلاء: الأكسيد العادي ($\\text{Li}_2\\text{O}$)، فوق الأكسيد ($\\text{Na}_2\\text{O}_2$)، والسوبر أكسيد ($\\text{KO}_2$) واستخدامه في تنقية هواء الغواصات',
      'كيمياء النيتروجين (Group 5A): تحضير غاز النشادر صناعياً بطريقة هابر-بوش ($\\text{N}_2 + 3\\text{H}_2 \\rightleftharpoons 2\\text{NH}_3$)',
      'حمض النيتريك $\\text{HNO}_3$ وخاصية الخمول الكيميائي مع الحديد والألومنيوم والكروم'
    ],
    keyConceptsEn: [
      'Alkali metal properties: large atomic radii, low ionization energy, high reducing power',
      'Flame test identification: Na (Golden yellow), K (Pale violet), Li (Crimson), Cs (Blue-violet)',
      'Alkali oxides: Normal oxide (Li2O), Peroxide (Na2O2), Superoxide (KO2 for submarine air purification)',
      'Group 5A chemistry: Nitrogen cycle, Haber-Bosch ammonia synthesis, Ostwald nitric acid manufacture',
      'Passivity of concentrated HNO3 with iron, chromium, and aluminum'
    ],

    conceptMapAr: [
      'فلزات الأقلاء 1A ➔ حفظ تحت الكيروسين ➔ كشف اللهب ➔ تفاعل عنيف مع الماء مع تصاعد $\\text{H}_2$',
      'سوبر أكسيد البوتاسيوم $\\text{KO}_2$ ➔ يتفاعل مع $\\text{CO}_2$ لإنتاج أكسجين $\\text{O}_2$ في الغواصات',
      'عناصر 5A ➔ غاز النيتروجين ➔ هابر-بوش $\\to$ نشادر $\\text{NH}_3$ ➔ أسمدة نيتروجينية + حمض النيتريك'
    ],
    conceptMapEn: [
      'Group 1A Alkali ➔ Stored under kerosene ➔ Flame test ➔ Violent water reaction',
      'Potassium Superoxide KO2 ➔ Absorbs CO2 & releases O2 in enclosed cabins',
      'Group 5A Nitrogen ➔ Haber-Bosch ammonia ➔ Nitric acid & agricultural fertilizers'
    ],

    learningOutcomesAr: [
      'تفسير النشاط الكيميائي الفائق لفلزات الأقلاء وحفظها تحت الكيروسين لمنع تفاعلها مع الهواء الرطب.',
      'كتابة معادلات تفاعل سوبر أكسيد البوتاسيوم $\\text{KO}_2$ ودوره في تنقية هواء الأماكن المغلقة.',
      'شرح طريقة تحضير النشادر صناعياً بطريقة هابر-بوش وتفسير ظاهرة الخمول الكيميائي لحمض النيتريك المركز.'
    ],
    learningOutcomesEn: [
      'Explain intense chemical reactivity of alkali metals and storage under hydrocarbon oil.',
      'Write reactions for potassium superoxide KO2 regenerating oxygen in submarines.',
      'Describe Haber-Bosch ammonia synthesis and chemical passivity of concentrated nitric acid.'
    ],

    vocabulary: [
      { termAr: 'كشف اللهب الجاف', termEn: 'Flame Test', definitionAr: 'اختبار كيميائي نوعي يعتمد على إثارة إلكترونات كاتيونات الفلزات في لهب بنزن غير المضيء وإصدار ألوان طيفية مميزة لكل فلز.' },
      { termAr: 'الخمول الكيميائي', termEn: 'Chemical Passivity', definitionAr: 'تكون طبقة رقيقة جداً وغير مسامية من الأكسيد على سطح الفلز (كالحديد والكروم) عند إضافة حمض النيتريك المركز تمنع استمرار التفاعل.' }
    ],

    warmupHookAr: 'كيف يتنفس رواد الفضاء في محطة الفضاء الدولية وبحارة الغواصات النووية لعدة أشهر تحت أعماق المحيط دون الحاجة لفتح النوافذ؟ باستخدام مركب كيميائي مذهل يدعى "سوبر أكسيد البوتاسيوم" $\\text{KO}_2$؛ فهو يمتص غاز ثاني أكسيد الكربون السام من الزفير ويولد مكانه غاز الأكسجين النقي فوراً!',
    warmupHookEn: 'How do nuclear submarine crews breathe underwater for 6 months without surfacing? Chemical canisters of potassium superoxide KO2 absorb toxic exhaled CO2 and simultaneously generate pure life-supporting oxygen gas.',

    mainContentAr: `
### 1. كيمياء فلزات الأقلاء (Group 1A - Alkali Metals)
* **تفاعل الصوديوم والبوتاسيوم مع الماء:**
  $$2\\text{Na} + 2\\text{H}_2\\text{O} \\longrightarrow 2\\text{NaOH} + \\text{H}_2 \\uparrow \\quad (\\Delta H < 0 \\text{ طارد يشتعل بفرقعة})$$
* **أكاسيد الأقلاء غير العادية:**
  * **فوق أكسيد الصوديوم:** $2\\text{Na} + \\text{O}_2 \\xrightarrow{300^\\circ\\text{C}} \\text{Na}_2\\text{O}_2$ (عدد تأكسد الأكسجين فيه $-1$).
  * **سوبر أكسيد البوتاسيوم:** $\\text{K} + \\text{O}_2 \\xrightarrow{300^\\circ\\text{C}} \\text{KO}_2$ (عدد تأكسد الأكسجين فيه $-\\frac{1}{2}$).
  * **تنقية هواء الغواصات بواسطة $\\text{KO}_2$:**
    $$4\\text{KO}_2 + 2\\text{CO}_2 \\xrightarrow{\\text{CuCl}_2} 2\\text{K}_2\\text{CO}_3 + 3\\text{O}_2 \\uparrow$$

---

### 2. كيمياء النيتروجين والنشادر (Group 5A)
* **طريقة هابر-بوش لتحضير النشادر صناعياً:**
  $$\\text{N}_2(g) + 3\\text{H}_2(g) \\underset{500^\\circ\\text{C}, \\, 200\\text{ atm}}{\\overset{\\text{Fe / Mo}}{\\rightleftharpoons}} 2\\text{NH}_3(g)$$
* **ظاهرة الخمول الكيميائي لحمض النيتريك المركز ($\\text{HNO}_3$):**
  * عند وضع قطعة من الحديد أو الألومنيوم أو الكروم في حمض النيتريك المركز، يتوقف التفاعل سريعاً بسبب تكون طبقة ميكروسكوبية واقية وغير مسامية من الأكسيد تمنع وصول الحمض لداخل الفلز، ويمكن إزالتها بالحك أو بحمض $\\text{HCl}$ المخفف.
    `,
    mainContentEn: `
### 1. Group 1A Alkali Metals
* Reaction with Water: $2Na + 2H_2O \\to 2NaOH + H_2 \\uparrow$ (explosive flame).
* Superoxide Submarine Air Purification:
  $$4KO_2 + 2CO_2 \\xrightarrow{CuCl_2} 2K_2CO_3 + 3O_2 \\uparrow$$

### 2. Group 5A Nitrogen Chemistry
* Haber-Bosch Ammonia: $N_2 + 3H_2 \\rightleftharpoons 2NH_3$ ($500^\\circ C, 200\\text{ atm}, Fe$).
* Passivity of Conc. $HNO_3$ with Fe, Al, Cr via protective non-porous oxide film.
    `,

    diagramType: 'chemical_reaction_apparatus',
    diagramData: {
      type: 'haber_bosch_reactor',
      title: 'مخطط إنتاج غاز النشادر صناعياً بطريقة هابر-بوش',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="140" y="40" width="120" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <line x1="40" y1="70" x2="140" y2="70" stroke="#34d399" stroke-width="3" marker-end="url(#arrow)" />
        <text x="50" y="60" fill="#34d399" font-size="12">N₂ + 3H₂</text>
        <line x1="260" y1="130" x2="360" y2="130" stroke="#fbbf24" stroke-width="3" marker-end="url(#arrow)" />
        <text x="280" y="120" fill="#fbbf24" font-size="12">NH₃ (النشادر)</text>
        <text x="155" y="80" fill="#f8fafc" font-size="11">Fe / Mo محفز</text>
        <text x="160" y="105" fill="#94a3b8" font-size="11">500°C</text>
        <text x="160" y="125" fill="#94a3b8" font-size="11">200 atm</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حساب عدد تأكسد الأكسجين في مركبات الأقلاء',
        titleEn: 'Example: Oxidation Number of Oxygen in Alkali Compounds',
        problemAr: 'احسب عدد تأكسد الأكسجين في كل من: أكسيد الليثيوم $\\text{Li}_2\\text{O}$، فوق أكسيد الصوديوم $\\text{Na}_2\\text{O}_2$، وسوبر أكسيد البوتاسيوم $\\text{KO}_2$.',
        problemEn: 'Calculate the oxidation state of oxygen in Li2O, Na2O2, and KO2.',
        stepsAr: [
          'في $\\text{Li}_2\\text{O}$: شحنة الليثيوم $+1$. إذن $2(+1) + O = 0 \\implies O = -2$ (أكسيد عادي).',
          'في $\\text{Na}_2\\text{O}_2$: شحنة الصوديوم $+1$. إذن $2(+1) + 2O = 0 \\implies 2O = -2 \\implies O = -1$ (فوق أكسيد).',
          'في $\\text{KO}_2$: شحنة البوتاسيوم $+1$. إذن $(+1) + 2O = 0 \\implies 2O = -1 \\implies O = -\\frac{1}{2}$ (سوبر أكسيد).'
        ],
        stepsEn: [
          'Li2O: 2(+1) + O = 0 ⟹ O = -2 (Normal oxide).',
          'Na2O2: 2(+1) + 2O = 0 ⟹ O = -1 (Peroxide).',
          'KO2: (+1) + 2O = 0 ⟹ O = -1/2 (Superoxide).'
        ],
        finalAnswerAr: 'في $\\text{Li}_2\\text{O}$ هو $-2$، وفي $\\text{Na}_2\\text{O}_2$ هو $-1$، وفي $\\text{KO}_2$ هو $-\\frac{1}{2}$'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11ch-5',
        problemAr: 'كيف تميز عملياً بين أملاح الصوديوم وأملاح البوتاسيوم باستخدام كشف اللهب؟',
        problemEn: 'How to distinguish sodium vs potassium salts via flame test?',
        solutionStepsAr: [
          'نغمس سلكاً من البلاتين النظيف في حمض الهيدروكلوريك ثم نأخذ جزءاً من الملح المجهول ونعرضه للمنطقة غير المضيئة من لهب بنزن.',
          'إذا تلون اللهب بلون **أصفر ذهبي** يكون الملح صوديوماً ($\\text{Na}^+$).',
          'إذا تلون اللهب بلون **بنفسجي فاتح** (يظهر بوضوح من خلال زجاج الكوبالت الأزرق) يكون الملح بوتاسيprocess ($\\text{K}^+$).'
        ],
        finalAnswerAr: 'الصوديوم يعطي لوناً أصفر ذهبياً، بينما البوتاسيوم يعطي لوناً بنفسجياً فاتحاً.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11ch-5',
        questionAr: 'المركب المستخدم في تنقية هواء الغواصات المغلقة من غاز ثاني أكسيد الكربون وتوليد الأكسجين هو:',
        questionEn: 'The compound utilized in submarine air revitalization to absorb CO2 and yield O2 is:',
        optionsAr: ['سوبر أكسيد البوتاسيوم (KO₂)', 'هيدروكسيد الصوديوم (NaOH)', 'نترات الأمونيوم', 'كربونات الكالسيوم'],
        optionsEn: ['Potassium superoxide (KO2)', 'Sodium hydroxide (NaOH)', 'Ammonium nitrate', 'Calcium carbonate'],
        correctIndex: 0,
        explanationAr: 'سوبر أكسيد البوتاسيوم $\\text{KO}_2$ يتفاعل في وجود عامل حفاز $\\text{CuCl}_2$ مع $\\text{CO}_2$ لإنتاج غاز الأكسجين $\\text{O}_2$.',
        explanationEn: 'Potassium superoxide KO2 converts exhaled CO2 into breathable oxygen O2.'
      }
    ],

    assessment: {
      id: 'quiz-h11-ch5',
      titleAr: 'اختبار إتقان كيمياء العناصر الممثلة (1A و 5A)',
      titleEn: 'Mastery Quiz: Group 1A & 5A Chemistry',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-ch5-1',
          textAr: 'تُحفظ فلزات الأقلاء (مثل الصوديوم والبوتاسيوم) في المعمل تحت سطح الكيروسين أو الهيدروكربونات السائلة بسبب:',
          textEn: 'Alkali metals like sodium and potassium are stored under kerosene because:',
          optionsAr: ['نشاطها الكيميائي الشديد وتفاعلها السريع مع أكسجين وبخار ماء الهواء الجوي', 'لزيادة كثافتها', 'لمنع تبخرها', 'لتغيير لون لهبها'],
          optionsEn: ['High chemical reactivity with atmospheric oxygen & moisture', 'To increase density', 'To prevent evaporation', 'To alter flame color'],
          correctIndex: 0,
          conceptTestedAr: 'حفظ فلزات الأقلاء ونشاطها الكيميائي العالي',
          conceptTestedEn: 'Reactivity and storage of alkali metals',
          explanationAr: 'تتفاعل الأقلاء بعنف مع أكسجين ورطوبة الهواء لذلك تعزل بسوائل هيدروكربونية لا تتفاعل معها.',
          explanationEn: 'Alkali metals react violently with air and moisture, requiring insulation beneath inert kerosene.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-ch5-2',
          textAr: 'ظاهرة "الخمول الكيميائي" تحدث للحديد عند تفاعله مع:',
          textEn: 'Chemical passivity occurs in iron when exposed to:',
          optionsAr: ['حمض النيتريك المركز', 'حمض الهيدروكلوريك المخفف', 'حمض الكبريتيك المخفف', 'الماء المقطر'],
          optionsEn: ['Concentrated nitric acid', 'Dilute hydrochloric acid', 'Dilute sulfuric acid', 'Distilled water'],
          correctIndex: 0,
          conceptTestedAr: 'ظاهرة الخمول الكيميائي مع حمض النيتريك المركز',
          conceptTestedEn: 'Passivity of iron in concentrated HNO3',
          explanationAr: 'حمض النيتريك المركز عامل مؤكسد قوي يكون طبقة ميكروسكوبية غير مسامية من الأكسيد تحمي الفلز وتوقف التفاعل.',
          explanationEn: 'Concentrated HNO3 oxidizes the outer surface into a protective, non-porous oxide film.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-ch5-3',
          textAr: 'العوامل المثالية لتحضير غاز النشادر صناعياً بطريقة هابر-بوش من عنصري النيتروجين والهيدروجين هي:',
          textEn: 'The optimal industrial conditions for Haber-Bosch ammonia synthesis are:',
          optionsAr: ['$500^\\circ\\text{C}$ وضغط $200\\text{ atm}$ في وجود عامل حفاز من الحديد', '$100^\\circ\\text{C}$ وضغط جوي عادي', '$1000^\\circ\\text{C}$ بدون ضغط', '$0^\\circ\\text{C}$ في وجود البلاتين'],
          optionsEn: ['500°C and 200 atm with Fe/Mo catalyst', '100°C at 1 atm', '1000°C with no pressure', '0°C with platinum'],
          correctIndex: 0,
          conceptTestedAr: 'شروط التفاعل الصناعي بطريقة هابر-بوش',
          conceptTestedEn: 'Haber-Bosch industrial synthesis parameters',
          explanationAr: 'التفاعل يحتاج إلى حرارة $500^\\circ\\text{C}$ وضغط مرتفع $200\\text{ atm}$ ومحفز من الحديد والموليبدنوم للتغلب على كسر الرابطة الثلاثية في النيتروجين.',
          explanationEn: '500°C, 200 atm, and iron/molybdenum catalysts optimize conversion rate and yield.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
