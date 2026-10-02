import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL PHYSICS — GRADE 12 (فيزياء الصف الثالث الثانوي - مدارس اللغات والثانوية العامة)
// Official Grade 12 / Secondary 3 National Egyptian Ministry & Language School Curriculum Alignment:
// 
// PART ONE: ELECTRICITY & MAGNETISM (الكهربية والتيار والمغناطيسية)
// • Chapter 1: Electric Current, Ohm's Law & Kirchhoff's Laws (التيار الكهربي وقانون أوم وقوانين كيرشوف)
// • Chapter 2: Magnetic Effect of Electric Current & Measuring Instruments (التأثير المغناطيسي للتيار الكهربي وأجهزة القياس)
// • Chapter 3: Electromagnetic Induction, AC Generator, Transformer & Motor (الحث الكهرومغناطيسي، الدينامو، المحول، المحرك)
// • Chapter 4: Alternating Current Circuits (دوائر التيار المتردد: المفاعلة الحثية والسعوية، المعاوقة، ودوائر الرنين)
// 
// PART TWO: MODERN PHYSICS (مقدمة في الفيزياء الحديثة)
// • Chapter 5: Dual Nature of Wave & Particle (الطبيعة المزدوجة للموجة والجسيم: إشعاع الجسم الأسود، الظاهرة الكهروضوئية، تأثير كومتون، والمجهر الإلكتروني)
// • Chapter 6: Atomic Spectra & X-Rays (الأطياف الذرية وأنبوبة كولدج للأشعة السينية)
// • Chapter 7: Lasers (الليزر: الانبعاث المستحث، ليزر الهيليوم-نيون، والهولوجرام)
// • Chapter 8: Modern Electronics (الإلكترونيات الحديثة: أشباه الموصلات، الوصلة الثنائية، الترانزستور، والبوابات المنطقية)
// ============================================================================

export const HIGH_PHYSICS_G12_LECTURES: Lecture[] = [
  // ── CHAPTER 1: ELECTRIC CURRENT, OHM'S LAW & KIRCHHOFF'S LAWS ──
  {
    id: 'h12-phy-1',
    order: 1,
    titleAr: 'المحاضرة 1: الفصل الأول: التيار الكهربي وقانون أوم، توصيل المقاومات، وقانونا كيرشوف',
    titleEn: 'Lecture 1: Chapter 1: Electric Current, Ohm\'s Law, Series & Parallel Resistors, and Kirchhoff\'s Laws',
    subtitleAr: 'شدة التيار ($I = Q/t$)، فرق الجهد ($V = W/Q$)، المقاومة والمقاومة النوعية والتوصيلية، قانون أوم للدوائر المغلقة ($V = V_B - Ir$)، وقانون كيرشوف الأول (حفظ الشحنة) والثاني (حفظ الطاقة)',
    subtitleEn: 'Master current intensity, potential difference, resistivity & electrical conductivity, series/parallel networks, Ohm\'s Law for closed circuits, and Kirchhoff\'s junction and loop conservation laws.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الأول: الكهربية التيارية والكهرومغناطيسية',
    termEn: 'Part 1: Dynamic Electricity & Electromagnetism',
    unitTitleAr: 'الفصل الأول: التيار الكهربي وقانون أوم وقانونا كيرشوف',
    unitTitleEn: 'Chapter 1: Electric Current, Ohm\'s Law & Kirchhoff\'s Laws',
    lessonNumberAr: 'الدرس 1 و 2: المقاومة الكهربية، قانون أوم للدوائر المغلقة، وتحليل شبكات كيرشوف',
    lessonNumberEn: 'Lessons 1 & 2: Electrical Resistance, Closed Circuit Ohm\'s Law & Kirchhoff\'s Analysis',

    warmupHookAr: 'عندما تضيء مصباح غرفتك، تنتقل الطاقة الكهربية بسرعة تقارب سرعة الضوء رغم أن سرعة انسياق الإلكترونات الفعلية داخل سلك النحاس لا تتعدى بضعة مليمترات في الثانية! كيف يفسر قانون أوم وقوانين كيرشوف توزيع التيارات والجهود في أكثر الشبكات الإلكترونية تعقيداً من محطات الطاقة العملاقة إلى المعالجات الدقيقة؟',
    warmupHookEn: 'Electrical energy propagates at near light speed even though electron drift velocity is merely millimeters per second. Understanding Ohm\'s law for closed circuits and Kirchhoff\'s conservation laws allows engineers to accurately calculate branch currents and terminal voltages in complex power grids.',

    keyConceptsAr: [
      'شدة التيار الكهربي: $I = \\frac{Q}{t} = \\frac{n \\cdot e}{t}$، والفرق بين الاتجاه الاصطلاحي (التقليدي) والاتجاه الفعلي لحركة الإلكترونات',
      'المقاومة الكهربية والمقاومة النوعية: $R = \\rho_e \\frac{L}{A} = \\frac{L}{\\sigma A}$ حيث $\\rho_e$ خاصية مميزة للمادة وتزداد بارتفاع درجة الحرارة',
      'توصيل المقاومات: على التوالي $R_{eq} = R_1 + R_2 + \\dots$ (للحصول على مقاومة كبيرة)، وعلى التوازي $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\dots$ (للحصول على مقاومة مكافئة صغيرة وثبوت الجهد في المنازل)',
      'قانون أوم للدوائر المغلقة: $I = \\frac{V_B}{R_{eq} + r}$، وفرق الجهد بين قطبي البطارية $V = V_B - Ir$ في حالة التفريغ و $V = V_B + Ir$ في حالة الشحن',
      'قانون كيرشوف الأول (قانون النقطة / العقدة): $\\sum I_{in} = \\sum I_{out}$ (تطبيق لمبدأ حفظ الشحنة الكهربية)',
      'قانون كيرشوف الثاني (قانون المسار المغلق / العروة): $\\sum V_B = \\sum (I \\cdot R)$ أو $\\sum \\Delta V = 0$ (تطبيق لمبدأ حفظ الطاقة)'
    ],
    keyConceptsEn: [
      'Electric current intensity I = Q/t = n·e/t, conventional current flow vs physical electron drift',
      'Resistance, resistivity and conductivity: R = ρe·L/A = L/(σ·A), intrinsic material dependence on temperature',
      'Series network Req = ΣRi vs Parallel network 1/Req = Σ(1/Ri) (domestic circuit standard for independent operation)',
      'Ohm\'s law for closed circuits: I = VB / (Req + r); Battery terminal voltage V = VB - Ir (discharging) and V = VB + Ir (charging)',
      'Kirchhoff\'s First Law (Current / Node Law): ΣI_in = ΣI_out (Conservation of Electric Charge)',
      'Kirchhoff\'s Second Law (Voltage / Loop Law): ΣVB = Σ(I·R) (Conservation of Energy)'
    ],

    conceptMapAr: [
      'الشحنة الكهربية $Q$ ➔ شدة التيار $I = Q/t$ ➔ قانون أوم $V = I R$ ➔ العوامل المؤثرة على المقاومة $\\rho_e, L, A$',
      'توصيل المقاومات (توالي وتوازي) ➔ المقاومة المكافئة $R_{eq}$ ➔ قانون أوم للدائرة المغلقة $V = V_B - I r$',
      'الدوائر الكهربية المعقدة (متعددة البطاريات) ➔ قانون كيرشوف الأول (العقد) + قانون كيرشوف الثاني (المسارات المغلقة)'
    ],
    conceptMapEn: [
      'Electric Charge Q ➔ Current I = Q/t ➔ Ohm\'s Law V = I·R ➔ Geometric & Material Factors R = ρ·L/A',
      'Resistor Networks (Series/Parallel) ➔ Equivalent Req ➔ Closed Circuit Ohm\'s Law V = VB - I·r',
      'Complex Multi-source Circuits ➔ Kirchhoff\'s Node Rule (KCL) + Kirchhoff\'s Loop Rule (KVL)'
    ],

    learningOutcomesAr: [
      'أن يحسب الطالب المقاومة المكافئة لمجموعات معقدة من المقاومات المتصلة على التوالي والتوازي.',
      'أن يطبق قانون أوم للدوائر المغلقة لحساب قراءة الفولتميتر بين قطبي بطارية وقراءة الأميتر عند تغير مقاومة الريوستات.',
      'أن يحل شبكات كهربية معقدة متعددة الحلقات والبطاريات باستخدام معادلتي كيرشوف الأولى والثانية بطريقة المصفوفات والآلة الحاسبة.'
    ],
    learningOutcomesEn: [
      'Calculate equivalent resistance for intricate series-parallel combinations and bridge circuits.',
      'Apply closed-circuit Ohm\'s law to evaluate terminal voltages across discharging/charging batteries.',
      'Solve multi-loop multi-battery electrical networks by formulating and solving Kirchhoff equations.'
    ],

    vocabulary: [
      {
        termAr: 'المقاومة النوعية (Resistivity - ρe)',
        termEn: 'Electrical Resistivity (ρe)',
        definitionAr: 'مقاومة موصل طوله 1 متر ومساحة مقطعه 1 متر مربع عند درجة حرارة معينة، ووحدتها أوم · متر ($\\Omega \\cdot \\text{m}$).',
        definitionEn: 'Intrinsic material property representing electrical resistance of a conductor of 1 m length and 1 m² cross-sectional area (Ω·m).'
      },
      {
        termAr: 'قوة الدفع الكهربية للبطارية (Electromotive Force - VB)',
        termEn: 'Electromotive Force (EMF - VB)',
        definitionAr: 'الشغل الكلي المبذول لنقل شحنة كهربية مقدارها 1 كولوم في الدائرة الكهربية كلها (خارج المصدر وداخله)، ووحدتها الفولت (Volt).',
        definitionEn: 'The total work done in transferring a unit positive charge (1 Coulomb) through the entire circuit, inside and outside the power source.'
      },
      {
        termAr: 'قانونا كيرشوف (Kirchhoff\'s Laws)',
        termEn: 'Kirchhoff\'s Laws',
        definitionAr: 'قانونان فيزيائيان لتحليل الدوائر المعقدة؛ الأول يعبر عن حفظ الشحنة عند نقطة تفرع، والثاني يعبر عن حفظ الطاقة في أي مسار مغلق.',
        definitionEn: 'Fundamental circuit laws for complex networks: Junction Law (Charge conservation) and Closed Loop Law (Energy conservation).'
      }
    ],

    mainContentAr: `
### 1. شدة التيار والمقاومة الكهربية والمقاومة النوعية
* **شدة التيار الكهربي ($I$):** كمية الشحنة الكهربية ($Q$) التي تعبر مقطعاً من موصل في زمن قدره ثانية واحدة:
  $$I = \\frac{Q}{t} = \\frac{n \\cdot e}{t} \\quad [\\text{Ampere} = \\text{Coulomb/s}]$$
* **العوامل المؤثرة على مقاومة موصل ($R$):**
  $$R = \\rho_e \\frac{L}{A} = \\frac{L}{\\sigma A} = \\rho_e \\frac{L}{\\pi r^2}$$
  * إذا سُحب سلك حتى زاد طوله للضعف ($L_2 = 2L_1$)، فإن مساحة مقطعه تقل للنصف ($A_2 = \\frac{1}{2}A_1$)، وتزداد مقاومته إلى أربعة أمثال ($R_2 = 4R_1$).
  * النسبة بين مقاومتي سلكين: $\\frac{R_1}{R_2} = \\frac{\\rho_{e1}}{\\rho_{e2}} \\cdot \\frac{L_1}{L_2} \\cdot \\frac{A_2}{A_1} = \\frac{\\rho_{e1}}{\\rho_{e2}} \\cdot \\frac{L_1}{L_2} \\cdot \\frac{r_2^2}{r_1^2} = \\frac{\\rho_{e1}}{\\rho_{e2}} \\cdot \\frac{L_1^2}{L_2^2} \\cdot \\frac{m_2}{m_1}$.

---

### 2. توصيل المقاومات وقانون أوم للدوائر المغلقة
* **التوصيل على التوالي:** $R_{eq} = R_1 + R_2 + R_3$ (التيار ثابت $I = I_1 = I_2 = I_3$، والجهد يتجزأ $V = V_1 + V_2 + V_3$).
* **التوصيل على التوازي:** $\\frac{1}{R_{eq}} = \\frac{1}{R_1} + \\frac{1}{R_2} + \\frac{1}{R_3}$ (الجهد متساوٍ $V = V_1 = V_2 = V_3$، والتيار يتجزأ $I = I_1 + I_2 + I_3$).
  * لمقاومتين على التوازي: $R_{eq} = \\frac{R_1 \\cdot R_2}{R_1 + R_2}$، وتيار أحد الفرعين: $I_1 = I_{total} \\cdot \\frac{R_{parallel}}{R_1}$.
* **قانون أوم للدائرة المغلقة:**
  $$I = \\frac{V_B}{R_{eq} + r}$$
  * فرق الجهد بين قطبي المصدر (في حالة تفريغ): $V = V_B - I r$.
  * عندما تكون الدائرة مفتوحة ($I = 0$) أو المقاومة الداخلية مهملة ($r = 0$): فإن $V = V_B$.
  * العلاقة بين $V$ و $I$ بين طرفي البطارية علاقة تناقصية، ميل الخط المستقيم يساوي $-r$ والجزء المقطوع من محور الصادات هو $V_B$.

---

### 3. قانونا كيرشوف للدوائر الكهربية المعقدة
1. **قانون كيرشوف الأول (قانون العقدة / حفظ الشحنة):**
   $$\\sum I_{in} = \\sum I_{out} \\iff \\sum I = 0$$
   مجموع التيارات الداخلة إلى أي نقطة تفرع (عقدة) يساوي مجموع التيارات الخارجة منها.
2. **قانون كيرشوف الثاني (قانون الحلقات / حفظ الطاقة):**
   $$\\sum V_B = \\sum (I \\cdot R) \\iff \\sum \\Delta V = 0$$
   في أي مسار مغلق (حلقة)، المجموع الجبري للقوى الدافعة الكهربية للبطاريات يساوي المجموع الجبري لفروق الجهد عبر المقاومات.
    `,
    mainContentEn: `
### 1. Electric Current & Resistivity
* Current Intensity: $I = \\frac{Q}{t} = \\frac{n e}{t}$ (Ampere = C/s).
* Resistance formula: $R = \\rho_e \\frac{L}{A} = \\frac{L}{\\sigma A}$.
* Stretching wire by factor $k$ increases length by $k$, reduces area to $A/k$, and increases resistance to $k^2 R$.

### 2. Series & Parallel Networks and Closed-Circuit Ohm's Law
* Series: $R_{eq} = R_1 + R_2 + \\dots$, Current is uniform, voltages add up.
* Parallel: $\\frac{1}{R_{eq}} = \\sum \\frac{1}{R_i}$, Potential difference is identical across all branches.
* Closed-Circuit Ohm's Law: $I = \\frac{V_B}{R_{eq} + r}$.
* Terminal Voltage: $V = V_B - I r$ (discharging); $V = V_B + I r$ (charging battery).

### 3. Kirchhoff's Laws
* Kirchhoff's 1st Law (KCL - Charge Conservation): $\\sum I_{in} = \\sum I_{out}$.
* Kirchhoff's 2nd Law (KVL - Energy Conservation): $\\sum V_B = \\sum (I R)$ in any closed loop.
    `,

    diagramType: 'kirchhoff_circuit',
    diagramData: {
      type: 'circuit_closed_loop',
      title: 'دائرة أوم المغلقة وتحليل عقد وحلقات كيرشوف',
      svgSnippet: `<svg viewBox="0 0 450 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="410" height="180" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <line x1="50" y1="60" x2="160" y2="60" stroke="#38bdf8" stroke-width="3"/>
        <rect x="160" y="45" width="60" height="30" rx="4" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
        <text x="180" y="65" fill="#f59e0b" font-size="12" font-weight="bold">R₁</text>
        <line x1="220" y1="60" x2="380" y2="60" stroke="#38bdf8" stroke-width="3"/>
        <line x1="380" y1="60" x2="380" y2="160" stroke="#38bdf8" stroke-width="3"/>
        <rect x="350" y="95" width="60" height="30" rx="4" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
        <text x="370" y="115" fill="#f59e0b" font-size="12" font-weight="bold">R₂</text>
        <line x1="380" y1="160" x2="230" y2="160" stroke="#38bdf8" stroke-width="3"/>
        <line x1="190" y1="160" x2="50" y2="160" stroke="#38bdf8" stroke-width="3"/>
        <line x1="50" y1="160" x2="50" y2="60" stroke="#38bdf8" stroke-width="3"/>
        <!-- Battery VB, r -->
        <line x1="195" y1="145" x2="195" y2="175" stroke="#10b981" stroke-width="4"/>
        <line x1="205" y1="152" x2="205" y2="168" stroke="#ef4444" stroke-width="3"/>
        <text x="180" y="195" fill="#10b981" font-size="12" font-weight="bold">VB, r</text>
        <text x="210" y="115" fill="#38bdf8" font-size="13">I = VB / (Req + r)</text>
        <circle cx="50" cy="110" r="14" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="45" y="114" fill="#a855f7" font-size="11" font-weight="bold">A</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: حساب قراءة الفولتميتر والمقاومة المكافئة في دائرة مغلقة',
        titleEn: 'Problem: Calculating Voltmeter Reading and Equivalent Resistance',
        problemAr: 'بطارية قوتها الدافعة الكهربية $V_B = 12\\text{ V}$ ومقاومتها الداخلية $r = 1\\,\\Omega$ متصلة بمقاومتين على التوازي ($6\\,\\Omega$ و $3\\,\\Omega$) ومقاومة أخرى على التوالي معهما قيمتها $3\\,\\Omega$. احسب: 1) المقاومة المكافئة للدائرة الخارجية، 2) شدة التيار الكلي، 3) فرق الجهد بين قطبي البطارية.',
        problemEn: 'A battery of EMF VB = 12 V and internal resistance r = 1 Ω is connected to a parallel pair (6 Ω and 3 Ω) in series with a 3 Ω resistor. Calculate: 1) Req of the external circuit, 2) Total current, 3) Terminal potential difference across the battery.',
        stepsAr: [
          'حساب المقاومة المكافئة للمقاومتين على التوازي: $R_{p} = \\frac{6 \\times 3}{6 + 3} = 2\\,\\Omega$.',
          'المقاومة المكافئة الكلية الخارجية: $R_{eq} = R_p + 3 = 2 + 3 = 5\\,\\Omega$.',
          'حساب شدة التيار الكلي المار في الدائرة: $I = \\frac{V_B}{R_{eq} + r} = \\frac{12}{5 + 1} = \\frac{12}{6} = 2\\text{ A}$.',
          'حساب فرق الجهد بين قطبي البطارية: $V = V_B - I r = 12 - (2 \\times 1) = 10\\text{ V}$.'
        ],
        stepsEn: [
          'Parallel combination: Rp = (6 × 3) / (6 + 3) = 2 Ω.',
          'Total external equivalent resistance: Req = 2 + 3 = 5 Ω.',
          'Total current: I = VB / (Req + r) = 12 / (5 + 1) = 2 A.',
          'Terminal potential difference: V = VB - I·r = 12 - (2 × 1) = 10 V.'
        ],
        finalAnswerAr: 'المقاومة الخارجية Req = 5 Ω، التيار الكلي I = 2 A، وفرق الجهد بين قطبي البطارية V = 10 V.',
        finalAnswerEn: 'External Req = 5 Ω, Total Current I = 2 A, Terminal Voltage V = 10 V.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-1',
        problemAr: 'سلكان من النحاس الأول طوله $10\\text{ m}$ وكتلته $0.1\\text{ kg}$، والثاني طوله $40\\text{ m}$ وكتلته $0.2\\text{ kg}$. أوجد النسبة بين مقاومتي السلكين $\\frac{R_1}{R_2}$.',
        problemEn: 'Two copper wires: wire 1 has length 10 m and mass 0.1 kg; wire 2 has length 40 m and mass 0.2 kg. Find the ratio R1/R2.',
        solutionStepsAr: [
          'بما أن السلكين من نفس المادة (نحاس)، فإن المقاومة النوعية $\\rho_e$ والكثافة $\\rho$ متطابقتان.',
          'العلاقة بين المقاومة والطول والكتلة: $R \\propto \\frac{L^2}{m} \\implies \\frac{R_1}{R_2} = \\left(\\frac{L_1}{L_2}\\right)^2 \\times \\left(\\frac{m_2}{m_1}\\right)$.',
          'بالتعويض: $\\frac{R_1}{R_2} = \\left(\\frac{10}{40}\\right)^2 \\times \\left(\\frac{0.2}{0.1}\\right) = \\left(\\frac{1}{4}\\right)^2 \\times 2 = \\frac{1}{16} \\times 2 = \\frac{1}{8}$.'
        ],
        finalAnswerAr: 'النسبة R1 / R2 = 1 / 8'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-1',
        questionAr: 'عند زيادة قيمة المقاومة المأخوذة من الريوستات في دائرة أوم المغلقة، فإن قراءة الفولتميتر الموصل بين قطبي البطارية (ذات المقاومة الداخلية r > 0):',
        questionEn: 'When the variable rheostat resistance increases in a closed circuit, the voltmeter reading connected across the battery terminals (r > 0):',
        optionsAr: ['تزداد وتقترب من قيمة VB', 'تقل وتقترب من الصفر', 'تظل ثابتة لا تتغير', 'تنعدم تماماً'],
        optionsEn: ['Increases approaching VB', 'Decreases approaching zero', 'Remains strictly unchanged', 'Becomes zero immediately'],
        correctIndex: 0,
        explanationAr: 'بزيادة مقاومة الريوستات تقل شدة التيار الكلي $I$ في الدائرة، ومن العلاقة $V = V_B - I r$ يقل المقدار المطروح ($Ir$) فتزداد قراءة الفولتميتر $V$.',
        explanationEn: 'Increasing resistance lowers total current I. In V = VB - I·r, the dropped internal potential (I·r) decreases, thus terminal voltage V increases.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy1',
      titleAr: 'اختبار إتقان الفصل الأول: التيار الكهربي وقانون أوم وقوانين كيرشوف',
      titleEn: 'Mastery Quiz: Electric Current, Ohm\'s Law & Kirchhoff\'s Laws',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy1-1',
          textAr: 'سُحب سلك معدني بانتظام حتى زاد طوله بنسبة $20\\%$ من طوله الأصلي، فإن النسبة المئوية للزيادة في مقاومته الكهربية تصبح:',
          textEn: 'A metallic wire is stretched uniformly such that its length increases by 20%. The percentage increase in its electrical resistance is:',
          optionsAr: ['44%', '20%', '40%', '120%'],
          optionsEn: ['44%', '20%', '40%', '120%'],
          correctIndex: 0,
          conceptTestedAr: 'سحب وتشكيل الأسلاك وثبوت الحجم وعلاقة المقاومة بمربع الطول',
          conceptTestedEn: 'Wire stretching under constant volume and R proportional to L squared',
          explanationAr: '$L_2 = 1.2 L_1 \\implies R_2 = (1.2)^2 R_1 = 1.44 R_1$، إذن الزيادة في المقاومة $\\Delta R = 0.44 R_1$ أي بنسبة $44\\%$.',
          explanationEn: 'Under constant volume, R ∝ L². L2 = 1.2 L1 leads to R2 = 1.44 R1, representing a 44% net increase.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-phy1-2',
          textAr: 'قانون كيرشوف الأول يعبر عن قانون فيزيائي أساسي وهو:',
          textEn: 'Kirchhoff\'s First Law (Junction Rule) is a direct consequence of:',
          optionsAr: ['قانون بقاء الشحنة الكهربية', 'قانون بقاء الطاقة', 'قانون بقاء كمية الحركة', 'قانون التجاذب العام'],
          optionsEn: ['Conservation of Electric Charge', 'Conservation of Energy', 'Conservation of Momentum', 'Newton\'s Law of Gravitation'],
          correctIndex: 0,
          conceptTestedAr: 'الأساس الفيزيائي لقانون كيرشوف الأول',
          conceptTestedEn: 'Physical basis of Kirchhoff\'s First Law',
          explanationAr: 'قانون كيرشوف الأول يعتمد على أن الشحنات الكهربية لا تتراكم عند نقطة تفرع، وهو تطبيق مباشر لمبدأ حفظ وبقاء الشحنة.',
          explanationEn: 'KCL states that charge cannot accumulate at any junction node, directly manifesting Conservation of Electric Charge.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy1-3',
          textAr: 'في دائرة كهربية تحتوي على بطاريتين متصلتين على التوازي في فرعين متعاكسين؛ إحداهما $V_{B1} = 10\\text{ V}$ والأخرى $V_{B2} = 4\\text{ V}$، فإن البطارية الثانية تكون في حالة:',
          textEn: 'In a circuit with two opposing batteries, VB1 = 10 V and VB2 = 4 V, the second battery (VB2) operates in a state of:',
          optionsAr: ['شحن (Charging) وفرق الجهد بين طرفيها V = VB2 + I·r2', 'تفريغ (Discharging) وفرق جهدها V = VB2 - I·r2', 'اتزان كهربي وتيارها صفر', 'دائرة قصر وتنعدم مقاومتها'],
          optionsEn: ['Charging with terminal voltage V = VB2 + I·r2', 'Discharging with terminal voltage V = VB2 - I·r2', 'Electrical balance with zero current', 'Short circuit with zero resistance'],
          correctIndex: 0,
          conceptTestedAr: 'البطاريات في حالة الشحن والتفريغ وفرق الجهد بين القطبين',
          conceptTestedEn: 'Opposing battery networks and charging terminal potential equations',
          explanationAr: 'البطارية الكبرى $V_{B1}$ تدفع التيار عكس اتجاه البطارية الصغرى $V_{B2}$ فتصبح الصغرى في حالة شحن، ويكون فرق الجهد بين قطبيها أكبر من قوتها الدافعة: $V = V_{B2} + I r_2$.',
          explanationEn: 'The larger EMF battery forces current into the positive terminal of the smaller battery, charging it with V = VB + I·r.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── CHAPTER 2: MAGNETIC EFFECT OF CURRENT & MEASURING INSTRUMENTS ──
  {
    id: 'h12-phy-2',
    order: 2,
    titleAr: 'المحاضرة 2: الفصل الثاني: التأثير المغناطيسي للتيار الكهربي وأجهزة القياس المباشر (الجلفانومتر، الأميتر، الفولتميتر، والأوميتر)',
    titleEn: 'Lecture 2: Chapter 2: Magnetic Effect of Electric Current, Magnetic Force & Torque, and DC Measuring Instruments',
    subtitleAr: 'المجال المغناطيسي للسلك المستقيم والملف الدائري والحلزوني، القوة وعزم الازدواج ($F=BIL\\sin\\theta, \\tau=BINA\\sin\\theta$)، ومجزئ التيار ومضاعف الجهد ومعايرة الأوميتر',
    subtitleEn: 'Master magnetic fields of straight wires, circular coils, and solenoids; Lorentz magnetic force and torque; and analyze Galvanometer, Ammeter, Voltmeter, and Ohmmeter conversions.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الأول: الكهربية التيارية والكهرومغناطيسية',
    termEn: 'Part 1: Dynamic Electricity & Electromagnetism',
    unitTitleAr: 'الفصل الثاني: التأثير المغناطيسي للتيار الكهربي وأجهزة القياس',
    unitTitleEn: 'Chapter 2: Magnetic Effect of Current & Measuring Instruments',
    lessonNumberAr: 'الدرس 1 و 2 و 3: كثافة الفيض، القوة وعزم الازدواج، وتعديل أجهزة القياس',
    lessonNumberEn: 'Lessons 1, 2 & 3: Magnetic Flux Density, Force & Torque, Galvanometer Conversions & Ohmmeter',

    warmupHookAr: 'في عام 1820، لاحظ العالم هانز أورستد صدفة انحراف إبرة بوصلة مغناطيسية عند مرور تيار كهربي في سلك مجاور! هذه الملاحظة البسيطة ولّدت الثورة الكهرومغناطيسية التي صنعت المحركات الكهربية والقطارات المغناطيسية وأجهزة القياس الحساسة. كيف نستغل هذا التأثير المغناطيسي لقياس أدق التيارات والجهود والمقاومات الكهربية؟',
    warmupHookEn: 'Hans Christian Oersted\'s discovery in 1820 that an electric current deflects a magnetic compass needle unified electricity and magnetism. This principle powers electric motors, maglev bullet trains, and analog measurement instruments from micro-ammeters to ohmmeters.',

    keyConceptsAr: [
      'الفيض المغناطيسي وكثافته: $\\Phi_m = B A \\sin\\theta$ (بالويبر Weber)، حيث $\\theta$ الزاوية بين الملف وخطوط المجال المغناطيسي',
      'كثافة الفيض لسلك مستقيم: $B = \\frac{\\mu I}{2\\pi d}$ (قانون أمبير الدائري)، وقاعدة اليد اليمنى لأمبير لتحديد الاتجاه ونقاط التعادل ($I_1/d_1 = I_2/d_2$)',
      'كثافة الفيض لملف دائري: $B = \\frac{\\mu N I}{2 r}$، ولملف حلزوني (لولبي): $B = \\frac{\\mu N I}{L}$',
      'القوة المغناطيسية على سلك يمر به تيار: $F = B I L \\sin\\theta$ (قاعدة فليمنج لليد اليسرى)، والقوة المتبادلة بين سلكين: $F = \\frac{\\mu I_1 I_2 L}{2\\pi d}$ (تجاذب إذا كان التياران في نفس الاتجاه وتنافر إذا كانا متضادين)',
      'عزم الازدواج المغناطيسي المؤثر على ملف: $\\tau = B I A N \\sin\\theta = B M_d \\sin\\theta$ (حيث $\\theta$ الزاوية بين العمودي على مستوى الملف والمجال)، وعزم ثنائي القطب المغناطيسي $\\vec{M}_d = I A N \\hat{n}$',
      'أجهزة القياس: الجلفانومتر الحساس $\\implies$ أميتر بتوصيل مجزئ تيار صغير على التوازي ($R_s = \\frac{I_g R_g}{I - I_g}$)، وفولتميتر بتوصيل مضاعف جهد كبير على التوالي ($R_m = \\frac{V - V_g}{I_g}$)، وأوميتر بمعايرة مقاومة الدائرة الداخلية $R_{dev} = \\frac{V_B}{I_{max}}$'
    ],
    keyConceptsEn: [
      'Magnetic flux and flux density: Φm = B·A·sin θ (Weber), where θ is angle between coil plane and field lines',
      'Straight wire field: B = μ·I / (2πd) (Ampere\'s Law), Right-hand grip rule, neutral points (I1/d1 = I2/d2)',
      'Circular coil field B = μ·N·I / (2r) and Solenoid field B = μ·N·I / L',
      'Magnetic force on conductor: F = B·I·L·sin θ (Fleming\'s Left-Hand Rule); Mutual force between parallel conductors F = μ·I1·I2·L / (2πd)',
      'Magnetic torque on coil: τ = B·I·A·N·sin θ = B·Md·sin θ (θ is angle between normal to coil and field lines); Magnetic dipole moment Md = I·A·N',
      'Measuring Instruments: Sensitive Galvanometer converted to Ammeter via low shunt Rs = Ig·Rg / (I - Ig), to Voltmeter via high multiplier Rm = (V - Vg) / Ig, and Ohmmeter calibration Rx = (Imax/I - 1)·Rdevice'
    ],

    conceptMapAr: [
      'التيار الكهربي $I$ ➔ يولد مجالاً مغناطيسياً $B$ (سلك مستقيم $\\frac{\\mu I}{2\\pi d}$، ملف دائري $\\frac{\\mu N I}{2r}$، ملف لولبي $\\frac{\\mu N I}{L}$)',
      'سلك أو ملف في مجال مغناطيسي خارجي ➔ قوة مغناطيسية $F = B I L \\sin\\theta$ ➔ عزم ازدواج $\\tau = B I A N \\sin\\theta$',
      'عزم الازدواج ➔ جلفانومتر ذو الملف المتحرك ➔ أميتر (توازي مع $R_s$) ➔ فولتميتر (توالي مع $R_m$) ➔ أوميتر (قياس المقاومة المجهولة $R_x$)'
    ],
    conceptMapEn: [
      'Electric Current I ➔ Generates Magnetic Field B (Straight wire, Circular loop, Solenoid)',
      'Current-carrying conductor in external field ➔ Lorentz Force F = BIL sin θ ➔ Torque τ = BIAN sin θ',
      'Deflection Torque ➔ Moving-Coil Galvanometer ➔ DC Ammeter (Shunt Rs) ➔ Voltmeter (Multiplier Rm) ➔ Ohmmeter (Rx)'
    ],

    learningOutcomesAr: [
      'أن يحسب كثافة الفيض المغناطيسي المحصلة عند نقاط مختلفة ناشئة عن عدة أسلاك متوازية أو ملفات متداخلة.',
      'أن يطبق علاقات القوة المغناطيسية وعزم الازدواج في تحديد اتجاه الدوران وحساب عزم ثنائي القطب.',
      'أن يستنتج ويحسب قيمة مقاومة مجزئ التيار $R_s$، ومضاعف الجهد $R_m$، والمقاومة المجهولة $R_x$ على تدريج الأوميتر غير المنتظم.'
    ],
    learningOutcomesEn: [
      'Calculate net magnetic flux density at points between/outside parallel wires, concentric loops, and solenoids.',
      'Apply magnetic force and torque formulas to predict deflection direction and magnetic dipole moments.',
      'Calculate shunt resistance Rs, multiplier Rm, and unknown resistance Rx on non-linear ohmmeter scales.'
    ],

    vocabulary: [
      {
        termAr: 'مجزئ التيار (Shunt Resistor - Rs)',
        termEn: 'Current Shunt Resistor (Rs)',
        definitionAr: 'مقاومة صغيرة جداً توصل على التوازي مع ملف الجلفانومتر لتحويله إلى أميتر يقيس تيارات كهربية عالية الشدة ولحمايته من التلف وتصغير مقاومة الجهاز الكلية.',
        definitionEn: 'A very small resistor connected in parallel with a galvanometer coil to bypass excess current, increasing measuring range while minimizing device resistance.'
      },
      {
        termAr: 'مضاعف الجهد (Multiplier Resistor - Rm)',
        termEn: 'Voltage Multiplier Resistor (Rm)',
        definitionAr: 'مقاومة كبيرة جداً توصل على التوالي مع ملف الجلفانومتر لتحويله إلى فولتميتر يقيس فروق جهد عالية ولتكبير مقاومة الجهاز حتى لا يسحب تياراً مؤثراً من الدائرة.',
        definitionEn: 'A very large resistor connected in series with the galvanometer coil to expand the measurable voltage range without drawing significant circuit current.'
      },
      {
        termAr: 'عزم ثنائي القطب المغناطيسي (Magnetic Dipole Moment - Md)',
        termEn: 'Magnetic Dipole Moment (Md)',
        definitionAr: 'كمية متجهة تساوي عزم الازدواج المؤثر على ملف موازٍ لمجال مغناطيسي كثافة فيضه 1 تسلا، وقيمته $M_d = I \\cdot A \\cdot N$، واتجاهه عمودي على مستوى الملف دائماً.',
        definitionEn: 'A vector quantity representing the intrinsic magnetic strength of a current loop: Md = I·A·N (A·m²), directed normal to the coil plane.'
      }
    ],

    mainContentAr: `
### 1. المجال المغناطيسي للتيار الكهربي في الأشكال الهندسية
1. **السلك المستقيم (قانون أمبير الدائري):**
   $$B = \\frac{\\mu \\cdot I}{2 \\pi d}$$
   * خطوط الفيض دوائر متحدة المركز مركزها السلك، تتزاحم بالقرب من السلك وتتباعد بالابتعاد عنه.
   * **نقطة التعادل (Neutral Point):** نقطة ينعدم عندها الفيض المغناطيسي الكلي ($B_{total} = 0$). تقع بين السلكين إذا كان التياران في نفس الاتجاه وأقرب للتيار الأقل، وتقع خارجهما بجوار الأقل إذا كان التياران متضادين:
     $$\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$$
2. **الملف الدائري:** $B = \\frac{\\mu N I}{2 r}$ (خطوط الفيض عند المركز مستقيمة وموازية لمحور الملف).
3. **الملف اللولبي (الحلزوني):** $B = \\frac{\\mu N I}{L} = \\mu n I$ (حيث $n = \\frac{N}{L}$ عدد اللفات لوحدة الأطوال).

---

### 2. القوة المغناطيسية وعزم الازدواج
* **القوة المغناطيسية على سلك مستقيم:**
  $$F = B \\cdot I \\cdot L \\cdot \\sin\\theta$$
  * تكون القوة عظمى ($F_{max} = BIL$) عندما يكون السلك عمودياً على المجال ($\\theta = 90^\\circ$).
  * تنعدم القوة ($F = 0$) عندما يكون السلك موازياً للمجال ($\\theta = 0^\\circ$).
* **عزم الازدواج المغناطيسي ($\\tau$):**
  $$\\tau = B \\cdot I \\cdot A \\cdot N \\cdot \\sin\\theta = B \\cdot M_d \\cdot \\sin\\theta$$
  * لاحظ بدقة: $\\theta$ هنا هي الزاوية بين **العمودي على مستوى الملف** وخطوط المجال المغناطيسي.
  * عزم الازدواج أقصى ما يمكن عندما يكون مستوى الملف **موازياً** لخطوط المجال المغناطيسي!

---

### 3. أجهزة القياس التناظرية المباشرة (DC Instruments)
1. **الجلفانومتر الحساس ذو الملف المتحرك:**
   * يعتمد على عزم الازدواج المغناطيسي، قطباه مقعران وأسطوانة من الحديد المطاوع لجعل خطوط الفيض أنصاف أقطار، فتظل كثافة الفيض ثابتة وعزم الازدواج متناسباً طردياً مع شدة التيار، وتدريجه منتظم: $\\text{Sensitivity} = \\frac{\\theta}{I}$.
2. **الأميتر (Ammeter):**
   $$R_s = \\frac{I_g \\cdot R_g}{I - I_g} \\quad , \\quad \\frac{I_g}{I} = \\frac{R_s}{R_s + R_g}$$
3. **الفولتميتر (Voltmeter):**
   $$R_m = \\frac{V - V_g}{I_g} = \\frac{V - I_g R_g}{I_g} \\quad , \\quad \\frac{V_g}{V} = \\frac{R_g}{R_g + R_m}$$
4. **الأوميتر (Ohmmeter):**
   * معايرة الجهاز: عند تلامس طرفي التوصيل ($R_x = 0$) ينحرف المؤشر لأقصى تيار $I_{max} = \\frac{V_B}{R_{device}}$.
   * عند توصيل مقاومة خارجية مجهولة $R_x$: $I = \\frac{V_B}{R_{device} + R_x}$.
   * النسبة بين التيارين: $\\frac{I_{max}}{I} = \\frac{R_{device} + R_x}{R_{device}} \\implies R_x = \\left(\\frac{I_{max}}{I} - 1\\right) R_{device}$.
   * تدريج الأوميتر **عكس تدريج الأميتر وغير منتظم** لأن شدة التيار تتناسب عكسياً مع المقاومة الكلية للدائرة وليس مع المقاومة المجهولة $R_x$ وحدها.
    `,
    mainContentEn: `
### 1. Magnetic Field Calculations
* Straight Wire: $B = \\frac{\\mu I}{2\\pi d}$; Neutral point condition: $\\frac{I_1}{d_1} = \\frac{I_2}{d_2}$.
* Circular Loop: $B = \\frac{\\mu N I}{2 r}$; Solenoid: $B = \\frac{\\mu N I}{L}$.

### 2. Force & Torque
* Force on wire: $F = B I L \\sin\\theta$ (Max when $\\theta=90^\\circ$).
* Torque on coil: $\\tau = B I A N \\sin\\theta = B M_d \\sin\\theta$ (Max when coil plane is parallel to B field).

### 3. Galvanometer Conversions
* Shunt Resistor: $R_s = \\frac{I_g R_g}{I - I_g}$.
* Multiplier Resistor: $R_m = \\frac{V - V_g}{I_g}$.
* Ohmmeter: $R_{device} = \\frac{V_B}{I_{max}}$; $R_x = (\\frac{I_{max}}{I} - 1) R_{device}$. Ohmmeter scale is non-linear and inverse to ammeter scale.
    `,

    diagramType: 'measuring_instruments',
    diagramData: {
      type: 'galvanometer_conversions',
      title: 'تحويل الجلفانومتر إلى أميتر وفولتميتر وأوميتر',
      svgSnippet: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="160" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- Galvanometer symbol -->
        <circle cx="220" cy="95" r="28" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <text x="214" y="100" fill="#38bdf8" font-size="16" font-weight="bold">G</text>
        <text x="208" y="140" fill="#94a3b8" font-size="11">Rg, Ig</text>
        <!-- Shunt Rs parallel below -->
        <line x1="140" y1="95" x2="140" y2="155" stroke="#f59e0b" stroke-width="2"/>
        <line x1="140" y1="155" x2="180" y2="155" stroke="#f59e0b" stroke-width="2"/>
        <rect x="180" y="145" width="80" height="20" rx="3" fill="#334155" stroke="#f59e0b" stroke-width="2"/>
        <text x="195" y="160" fill="#f59e0b" font-size="11" font-weight="bold">Rs (مجزئ)</text>
        <line x1="260" y1="155" x2="300" y2="155" stroke="#f59e0b" stroke-width="2"/>
        <line x1="300" y1="155" x2="300" y2="95" stroke="#f59e0b" stroke-width="2"/>
        <!-- Multiplier Rm series on left -->
        <rect x="50" y="85" width="70" height="22" rx="3" fill="#334155" stroke="#10b981" stroke-width="2"/>
        <text x="60" y="100" fill="#10b981" font-size="11" font-weight="bold">Rm (مضاعف)</text>
        <line x1="120" y1="95" x2="192" y2="95" stroke="#38bdf8" stroke-width="2"/>
        <line x1="248" y1="95" x2="380" y2="95" stroke="#38bdf8" stroke-width="2"/>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: حساب مجزئ التيار ومضاعف الجهد ومقاومة الأوميتر',
        titleEn: 'Problem: Calculating Shunt, Multiplier, and Ohmmeter Deflections',
        problemAr: 'جلفانومتر مقاومة ملفه $R_g = 50\\,\\Omega$ وأقصى تيار يتحمله $I_g = 10\\text{ mA}$. احسب: 1) قيمة مجزئ التيار $R_s$ اللازم لتحويله لأميتر يقيس حتى $1\\text{ A}$، 2) قيمة مضاعف الجهد $R_m$ لتحويله لفولتميتر يقيس حتى $100\\text{ V}$، 3) إذا وصل كأوميتر ببطارية $1.5\\text{ V}$، ما قيمة المقاومة الخارجية التي تجعل مؤشره ينحرف لربع التدريج؟',
        problemEn: 'A galvanometer of Rg = 50 Ω and full scale current Ig = 10 mA. Calculate: 1) Shunt Rs to measure up to 1 A, 2) Multiplier Rm to measure up to 100 V, 3) If converted to Ohmmeter with VB = 1.5 V, find Rx that causes 1/4 full scale deflection.',
        stepsAr: [
          '1) حساب مجزئ التيار: $R_s = \\frac{I_g R_g}{I - I_g} = \\frac{0.01 \\times 50}{1 - 0.01} = \\frac{0.5}{0.99} \\approx 0.505\\,\\Omega$.',
          '2) حساب مضاعف الجهد: $R_m = \\frac{V - I_g R_g}{I_g} = \\frac{100 - (0.01 \\times 50)}{0.01} = \\frac{100 - 0.5}{0.01} = \\frac{99.5}{0.01} = 9950\\,\\Omega$.',
          '3) مقاومة جهاز الأوميتر الداخلية: $R_{dev} = \\frac{V_B}{I_{max}} = \\frac{1.5}{0.01} = 150\\,\\Omega$.',
          'عند انحراف المؤشر إلى ربع التدريج ($I = \\frac{1}{4} I_{max}$): تصبح المقاومة الكلية 4 أمثال $R_{dev}$، وبالتالي $R_x = 3 R_{dev} = 3 \\times 150 = 450\\,\\Omega$.'
        ],
        stepsEn: [
          '1) Shunt Rs = (0.01 × 50) / (1 - 0.01) = 0.505 Ω.',
          '2) Multiplier Rm = (100 - 0.5) / 0.01 = 9950 Ω.',
          '3) Internal Ohmmeter resistance Rdev = 1.5 / 0.01 = 150 Ω.',
          'For 1/4 deflection: Rtotal = 4 Rdev ➔ Rx = 3 Rdev = 3 × 150 = 450 Ω.'
        ],
        finalAnswerAr: 'Rs = 0.505 Ω، Rm = 9950 Ω، والمقاومة الخارجية Rx = 450 Ω.',
        finalAnswerEn: 'Rs = 0.505 Ω, Rm = 9950 Ω, and Rx = 450 Ω.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-2',
        problemAr: 'أوميتر ينحرف مؤشره إلى $\\frac{1}{3}$ التدريج عند توصيل مقاومة خارجية $R_1 = 600\\,\\Omega$ بين طرفيه. ما قيمة المقاومة الخارجية $R_2$ التي تجعل مؤشره ينحرف إلى $\\frac{3}{4}$ التدريج؟',
        problemEn: 'An ohmmeter needle deflects to 1/3 full scale when an external resistor R1 = 600 Ω is connected. What external resistance R2 will cause a 3/4 deflection?',
        solutionStepsAr: [
          'عند الانحراف إلى $\\frac{1}{3}$ التدريج: $R_1 = (3 - 1) R_{dev} = 2 R_{dev} = 600\\,\\Omega \\implies R_{dev} = 300\\,\\Omega$.',
          'عند الانحراف إلى $\\frac{3}{4}$ التدريج: $\\frac{I_{max}}{I} = \\frac{4}{3}$، إذن $R_2 = \\left(\\frac{4}{3} - 1\\right) R_{dev} = \\frac{1}{3} R_{dev}$.',
          'بالتعويض بقيمة $R_{dev} = 300\\,\\Omega$: $R_2 = \\frac{1}{3} \\times 300 = 100\\,\\Omega$.'
        ],
        finalAnswerAr: 'قيمة المقاومة R2 = 100 Ω'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-2',
        questionAr: 'يكون عزم الازدواج المغناطيسي المؤثر على ملف مستطيل يمر به تيار كهربي موضوع في مجال مغناطيسي منتظم نهاية عظمى (أقصى قيمة) عندما يكون مستوى الملف:',
        questionEn: 'The magnetic torque acting on a current-carrying rectangular coil placed in a uniform magnetic field is MAXIMUM when the plane of the coil is:',
        optionsAr: ['موازياً لخطوط المجال المغناطيسي', 'عمودياً على خطوط المجال المغناطيسي', 'يميل بزاوية 45 درجة على المجال', 'يميل بزاوية 30 درجة على المجال'],
        optionsEn: ['Parallel to the magnetic field lines', 'Perpendicular to magnetic field lines', 'Inclined at 45 degrees to the field', 'Inclined at 30 degrees to the field'],
        correctIndex: 0,
        explanationAr: 'في قانون عزم الازدواج $\\tau = B I A N \\sin\\theta$ الزاوية $\\theta$ تكون بين العمودي على مستوى الملف والمجال. فعندما يكون مستوى الملف موازياً للمجال يكون العمودي عليه عمودياً على المجال ($\\theta = 90^\\circ$) وتكون $\\sin 90^\\circ = 1$ أقصى قيمة.',
        explanationEn: 'Torque τ = BIAN sin θ uses the angle between the normal to the coil and field lines. When the coil plane is parallel, the normal is at 90°, yielding maximum torque.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy2',
      titleAr: 'اختبار إتقان الفصل الثاني: التأثير المغناطيسي للتيار وأجهزة القياس',
      titleEn: 'Mastery Quiz: Magnetic Effect of Current & Measuring Instruments',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy2-1',
          textAr: 'سلكان مستقيمان متوازيان يمر بهما تياران $I$ و $2I$ في نفس الاتجاه، والمسافة بينهما $d$. إذا زادت شدة تيار كل منهما للضعف وقلت المسافة بينهما للنصف، فإن القوة المغناطيسية المتبادلة بينهما:',
          textEn: 'Two parallel straight wires carry currents I and 2I in the same direction separated by distance d. If both currents double and distance is halved, the mutual magnetic force:',
          optionsAr: ['تزداد إلى 8 أمثال قيمتها الأصلية', 'تزداد إلى 4 أمثال قيمتها', 'تزداد للضعف فقط', 'تظل ثابتة لا تتغير'],
          optionsEn: ['Increases to 8 times original value', 'Increases 4 times', 'Doubles only', 'Remains unchanged'],
          correctIndex: 0,
          conceptTestedAr: 'علاقة القوة المغناطيسية المتبادلة بالتيارين والمسافة',
          conceptTestedEn: 'Mutual magnetic force dependence on currents and separation distance',
          explanationAr: '$F = \\frac{\\mu I_1 I_2 L}{2\\pi d} \\implies F\' = \\frac{\\mu (2I_1)(2I_2) L}{2\\pi (d/2)} = \\frac{4}{1/2} F = 8 F$.',
          explanationEn: 'F ∝ (I1·I2)/d. Multiplying currents by 2 and dividing d by 2 results in 2×2 / (1/2) = 8-fold increase.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-phy2-2',
          textAr: 'تدريج جهاز الأوميتر (Ohmmeter) يكون غير منتظم وأقسامه متقاربة جهة اللانهاية ($\\infty$) ومتباعدة جهة الصفر بسبب:',
          textEn: 'The ohmmeter scale is non-uniform, compressed towards infinity and expanded towards zero, because:',
          optionsAr: ['شدة التيار تتناسب عكسياً مع المقاومة الكلية للدائرة (Rdevice + Rx) وليس مع Rx وحدها', 'القوة الدافعة للبطارية تتغير أثناء القياس', 'المجال المغناطيسي داخل الجهاز غير منتظم', 'مقاومة ملف الجلفانومتر تزداد بالحرارة'],
          optionsEn: ['Current is inversely proportional to total circuit resistance (Rdevice + Rx), not Rx alone', 'Battery EMF fluctuates during measurement', 'Magnetic field inside is non-uniform', 'Galvanometer coil heats up'],
          correctIndex: 0,
          conceptTestedAr: 'تفسير عدم انتظام تدريج الأوميتر',
          conceptTestedEn: 'Physical reason for non-linear ohmmeter scale calibration',
          explanationAr: '$I = \\frac{V_B}{R_{dev} + R_x}$، فالتيار يتناسب عكسياً مع مجموع المقاومتين وليس مع المقاومة المقاسة $R_x$ منفردة.',
          explanationEn: 'Because current is inversely proportional to (Rdevice + Rx), equal increments of Rx yield diminishing current drops.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy2-3',
          textAr: 'جلفانومتر حساس مقاومة ملفه $R_g$. عند توصيل مجزئ تيار $R_{s1} = 5\\,\\Omega$ تقل حساسيته إلى النصف. ما قيمة مجزئ التيار $R_{s2}$ اللازم لإنقاص حساسيته إلى $\\frac{1}{10}$ من قيمتها الأصلية؟',
          textEn: 'A galvanometer has coil resistance Rg. When connected to shunt Rs1 = 5 Ω, its sensitivity drops to 1/2. What shunt Rs2 is needed to reduce sensitivity to 1/10?',
          optionsAr: ['0.556 Ω (5/9 Ω)', '1.5 Ω', '2.5 Ω', '0.25 Ω'],
          optionsEn: ['0.556 Ω (5/9 Ω)', '1.5 Ω', '2.5 Ω', '0.25 Ω'],
          correctIndex: 0,
          conceptTestedAr: 'قانون حساسية الأميتر وحساب مجزئ التيار',
          conceptTestedEn: 'Ammeter sensitivity ratio and shunt calculation',
          explanationAr: 'الحساسية $\\frac{I_g}{I} = \\frac{R_s}{R_s + R_g} = \\frac{1}{2} \\implies R_g = R_{s1} = 5\\,\\Omega$. لإنقاص الحساسية لـ $\\frac{1}{10}$: $\\frac{R_{s2}}{R_{s2} + 5} = \\frac{1}{10} \\implies 10 R_{s2} = R_{s2} + 5 \\implies 9 R_{s2} = 5 \\implies R_{s2} = \\frac{5}{9} \\approx 0.556\\,\\Omega$.',
          explanationEn: '1/2 sensitivity gives Rg = 5 Ω. For 1/10 sensitivity: Rs / (Rs + 5) = 1/10 ➔ 9 Rs = 5 ➔ Rs = 5/9 = 0.556 Ω.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── CHAPTER 3: ELECTROMAGNETIC INDUCTION, GENERATOR, TRANSFORMER & MOTOR ──
  {
    id: 'h12-phy-3',
    order: 3,
    titleAr: 'المحاضرة 3: الفصل الثالث: الحث الكهرومغناطيسي، قانون فاراداي، الدينامو، المحول الكهربي والمحرك',
    titleEn: 'Lecture 3: Chapter 3: Electromagnetic Induction, Faraday\'s Law, AC Dynamo/Generator, Transformer & Electric Motor',
    subtitleAr: 'قانون فاراداي ($\\text{emf} = -N \\Delta\\Phi_m/\\Delta t$)، قاعدة لنز، الحث المتبادل والذاتي، الدينامو وتوليد التيار المتردد والقيم اللحظية والفعالة، المحول الكهربي ونقل الطاقة، والمحرك',
    subtitleEn: 'Master Faraday\'s and Lenz\'s laws, mutual/self-induction, AC Generator EMF waveforms, effective RMS values, step-up/step-down transformers, grid transmission efficiency, and DC motors.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الأول: الكهربية التيارية والكهرومغناطيسية',
    termEn: 'Part 1: Dynamic Electricity & Electromagnetism',
    unitTitleAr: 'الفصل الثالث: الحث الكهرومغناطيسي',
    unitTitleEn: 'Chapter 3: Electromagnetic Induction, AC Dynamo & Transformers',
    lessonNumberAr: 'الدرس 1 و 2 و 3 و 4: فاراداي ولنز، الحث المتبادل والذاتي، المولد والمحول والمحرك',
    lessonNumberEn: 'Lessons 1 to 4: Faraday & Lenz, Induction, AC Generator, Transformer & Motor',

    warmupHookAr: 'في عام 1831، أجرى مايكل فاراداي تجربة غيرت وجه الحضارة البشرية بالكامل: حركة مغناطيس داخل ملف تولد تياراً كهربياً دون وجود أي بطارية! جميع محطات الطاقة النووية والشمسية والكهرومائية في العالم اليوم تعتمد على هذا المبدأ ذاته لتوليد الكهرباء ونقلها عبر آلاف الكيلومترات إلى منازلنا عبر المحولات والمولدات الكهربية.',
    warmupHookEn: 'Michael Faraday\'s discovery in 1831 that moving a magnet inside a coil induces an electric current enabled the modern electrification of the planet. All modern power generators, step-up transmission grids, and industrial motors operate on Faraday\'s law of induction.',

    keyConceptsAr: [
      'قانون فاراداي للحث الكهرومغناطيسي: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$، وإشارة السالب تعبر عن **قاعدة لنز** (التيار المستحث يعاكس التغير في الفيض المسبب له)',
      'القوة الدافعة المستحثة في سلك مستقيم يتحرك في مجال: $\\text{emf} = -B L v \\sin\\theta$ (وتحديد اتجاه التيار بقاعدة فليمنج لليد اليمنى)',
      'الحث المتبادل بين ملفين: $\\text{emf}_2 = -M \\frac{\\Delta I_1}{\\Delta t}$، والحث الذاتي لملف: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$، ومعامل الحث الذاتي $L = \\frac{\\mu A N^2}{l}$ (بالهنري Henry)',
      'المولد الكهربي (الدينامو AC): القوة الدافعة اللحظية $\\text{emf}_{inst} = N B A \\omega \\sin(\\omega t) = \\text{emf}_{max} \\sin\\theta$ حيث $\\omega = 2\\pi f$',
      'القيم الفعالة للتيار المتردد: $V_{eff} = \\frac{V_{max}}{\\sqrt{2}} \\approx 0.707 V_{max}$ و $I_{eff} = \\frac{I_{max}}{\\sqrt{2}}$ (تساوي قيمة التيار المستمر المكافئ حرارياً)',
      'المحول الكهربي (Transformer): خافض أو رافع للجهد، في المحول المثالي: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$، والكفاءة $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$، واستخدامه في نقل الطاقة لتقليل الفقد الحراري ($P_{loss} = I^2 R$)',
      'المحرك الكهربي (DC Motor): تحويل الطاقة الكهربية إلى طاقة ميكانيكية دورانية بفعل عزم الازدواج، واستخدام الأسطوانة المشقوقة لعكس اتجاه التيار كل نصف دورة للحفاظ على استمرار الدوران في اتجاه واحد'
    ],
    keyConceptsEn: [
      'Faraday\'s Induction Law: emf = -N·(ΔΦm/Δt); Negative sign reflects Lenz\'s Law (induced effect opposes cause)',
      'Motional EMF in straight moving wire: emf = -B·L·v·sin θ (Fleming\'s Right-Hand Rule)',
      'Mutual induction emf2 = -M·(ΔI1/Δt) and Self-induction emf = -L·(ΔI/Δt); Inductance L = μ·A·N² / l (Henry)',
      'AC Generator / Dynamo: Instantaneous emf = N·B·A·ω·sin(ωt) = emf_max·sin θ with angular frequency ω = 2πf',
      'Root-Mean-Square (RMS) Effective Values: Veff = Vmax / √2 ≈ 0.707 Vmax (thermal equivalence to DC current)',
      'Electric Transformer: Step-up / Step-down; Ideal ratio: Vs/Vp = Ns/Np = Ip/Is; Efficiency η = (Vs·Is)/(Vp·Ip)×100%; Grid transmission loss Ploss = I²·R',
      'Electric Motor: Converts electrical to mechanical rotational energy; Split-ring commutator maintains unidirectional torque'
    ],

    conceptMapAr: [
      'تغير الفيض المغناطيسي $\\Delta\\Phi_m/\\Delta t$ ➔ توليد $\\text{emf}$ مستحثة (فاراداي ولنز)',
      'دوران ملف في مجال مغناطيسي ➔ دينامو التيار المتردد $\\text{emf} = N B A \\omega \\sin\\theta$ ➔ القيمة الفعالة $V_{eff} = 0.707 V_{max}$',
      'التيار المتردد ➔ المحول الكهربي (رفع الجهد وخفض التيار عند محطات التوليد) ➔ نقل الطاقة عبر الأسلاك بكفاءة عالية'
    ],
    conceptMapEn: [
      'Time-varying Magnetic Flux ΔΦm/Δt ➔ Induced EMF (Faraday\'s & Lenz\'s Laws)',
      'Coil rotation in B-field ➔ AC Dynamo emf = NBAω sin θ ➔ RMS Effective Value Veff = 0.707 Vmax',
      'AC Current ➔ Step-up Transformer at power plant ➔ Ultra-efficient high-voltage grid transmission'
    ],

    learningOutcomesAr: [
      'أن يحدد اتجاه التيار المستحث باستخدام قاعدة لنز وفليمنج لليد اليمنى في مختلف الحالات الفيزيائية.',
      'أن يحسب القيم العظمى واللحظية والفعالة والمتوسطة (خلال ربع ونصف ودورة كاملة) للقوة الدافعة الكهربية الناتجة من الدينامو.',
      'أن يحل مسائل المحول الكهربي غير المثالي وحساب كفاءة النقل والقدرة المفقودة في خطوط التوصيل.'
    ],
    learningOutcomesEn: [
      'Determine induced current direction using Lenz\'s law and Fleming\'s Right-Hand rule in diverse geometry.',
      'Calculate instantaneous, maximum, effective (RMS), and average EMF values generated across fractions of AC cycles.',
      'Solve non-ideal transformer equations, transmission efficiency, and power dissipation losses along grid wires.'
    ],

    vocabulary: [
      {
        termAr: 'قاعدة لنز (Lenz\'s Law)',
        termEn: 'Lenz\'s Law',
        definitionAr: 'يكون اتجاه التيار الكهربي المستحث في ملف بحيث يعاكس التغير في الفيض المغناطيسي المسبب له، وهو تطبيق لمبدأ حفظ الطاقة.',
        definitionEn: 'The direction of an induced electric current always creates a magnetic field that opposes the change in magnetic flux that produced it.'
      },
      {
        termAr: 'القيمة الفعالة للتيار المتردد (RMS Effective Value - Ieff)',
        termEn: 'RMS Effective Current (Ieff)',
        definitionAr: 'شدة التيار المستمر الذي يولد نفس كمية الحرارة التي يولدها التيار المتردد في نفس الموصل ونفس الزمن: $I_{eff} = \\frac{I_{max}}{\\sqrt{2}} \\approx 0.707 I_{max}$.',
        definitionEn: 'The value of direct current (DC) that produces the same thermal power in a given resistor over the same time interval as the AC current.'
      },
      {
        termAr: 'التيارات الدوامية (Eddy Currents)',
        termEn: 'Eddy Currents',
        definitionAr: 'تيارات كهربية مستحثة دائرية تنشأ في القطع المعدنية المصمتة عند تعرضها لفيض مغناطيسي متغير مسببة فقداً حرارياً كبيراً، وتستخدم في أفران الحث لصهر المعادن.',
        definitionEn: 'Closed loops of induced electric current circulating within bulk conductors subjected to changing magnetic fields, utilized in induction furnaces.'
      }
    ],

    mainContentAr: `
### 1. قوانين الحث الكهرومغناطيسي وقاعدة لنز
* **قانون فاراداي:**
  $$\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t} = -N \\frac{\\Delta (B A \\sin\\theta)}{\\Delta t}$$
* **القوة الدافعة المستحثة في سلك مستقيم:**
  $$\\text{emf} = -B \\cdot L \\cdot v \\cdot \\sin\\theta$$
  * يُحدد اتجاه التيار المستحث بقاعدة **فليمنج لليد اليمنى**.
* **الحث الذاتي والمتبادل:**
  $$\\text{emf}_2 = -M \\frac{\\Delta I_1}{\\Delta t} \\quad , \\quad \\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$$
  * معامل الحث الذاتي لملف لولبي: $L = \\frac{\\mu A N^2}{l}$ (بالهنري Henry = $\\text{V}\\cdot\\text{s}/\\text{A} = \\Omega\\cdot\\text{s}$).

---

### 2. مولد التيار المتردد (الدينامو - AC Generator)
* **القوة الدافعة اللحظية:**
  $$\\text{emf}_{inst} = N B A \\omega \\sin(\\omega t) = \\text{emf}_{max} \\sin\\theta$$
  * حيث $\\omega = 2\\pi f$ السرعة الزاوية (راديان/ثانية).
  * $\\text{emf}_{max} = N B A (2\\pi f)$.
  * زاوية الطور $\\theta = \\omega t = 2\\pi f t = 360 f t$.
* **القيم الفعالة (Effective RMS Values):**
  $$V_{eff} = \\frac{V_{max}}{\\sqrt{2}} = V_{max} \\sin 45^\\circ \\approx 0.707 V_{max}$$
  $$I_{eff} = \\frac{I_{max}}{\\sqrt{2}} \\approx 0.707 I_{max}$$
* **متوسط القوة الدافعة المستحثة:**
  * خلال ربع دورة أو نصف دورة (من الوضع العمودي): $\\text{emf}_{avg} = \\frac{4 N B A f}{1} = \\frac{2}{\\pi} \\text{emf}_{max} \\approx 0.636 \\text{emf}_{max}$.
  * خلال دورة كاملة: $\\text{emf}_{avg} = 0$.

---

### 3. المحول الكهربي ونقل الطاقة (Transformers & Grid Transmission)
* **المحول المثالي (كفاءة $100\\%$):**
  $$\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$$
  * **محول رافع للجهد (Step-up):** $N_s > N_p \\implies V_s > V_p \\implies I_s < I_p$. (يستخدم عند محطات التوليد).
  * **محول خافض للجهد (Step-down):** $N_s < N_p \\implies V_s < V_p \\implies I_s > I_p$. (يستخدم عند مناطق الاستهلاك).
* **المحول غير المثالي (كفاءة $\\eta$):**
  $$\\eta = \\frac{P_s}{P_p} \\times 100 = \\frac{V_s I_s}{V_p I_p} \\times 100 = \\frac{V_s N_p}{V_p N_s} \\times 100$$
* **نقل الطاقة الكهربية:**
  * لتقليل القدرة المفقودة في أسلاك النقل ($P_{loss} = I^2 R_{line}$)، نرفع الجهد جداً عند محطة التوليد فينخفض التيار $I$ لأقل قيمة ممكنة فتصبح الطاقة المفقودة ضئيلة جداً.
    `,
    mainContentEn: `
### 1. Induction Laws
* Faraday's Law: $\\text{emf} = -N \\frac{\\Delta \\Phi_m}{\\Delta t}$.
* Moving Conductor: $\\text{emf} = -B L v \\sin\\theta$.
* Inductance: $\\text{emf} = -L \\frac{\\Delta I}{\\Delta t}$ where $L = \\frac{\\mu A N^2}{l}$.

### 2. AC Generator / Dynamo
* Instantaneous: $\\text{emf}_{inst} = N B A \\omega \\sin(\\omega t) = \\text{emf}_{max} \\sin\\theta$.
* RMS Values: $V_{eff} = \\frac{V_{max}}{\\sqrt{2}} \\approx 0.707 V_{max}$.
* Average over $1/4$ or $1/2$ cycle: $\\text{emf}_{avg} = \\frac{2}{\\pi} \\text{emf}_{max}$.

### 3. Transformers & Power Grid
* Ideal: $\\frac{V_s}{V_p} = \\frac{N_s}{N_p} = \\frac{I_p}{I_s}$.
* Efficiency: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100\\%$.
* High-voltage transmission reduces $I^2 R$ Joule line losses.
    `,

    diagramType: 'dynamo_transformer',
    diagramData: {
      type: 'ac_sine_wave_transformer',
      title: 'موجة الجهد المتولد من الدينامو ونموذج المحول الكهربي',
      svgSnippet: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="160" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- AC Sine Wave -->
        <path d="M 40 100 Q 80 30 120 100 T 200 100" fill="none" stroke="#38bdf8" stroke-width="3"/>
        <line x1="35" y1="100" x2="210" y2="100" stroke="#64748b" stroke-width="1.5"/>
        <text x="75" y="40" fill="#38bdf8" font-size="11" font-weight="bold">+Vmax</text>
        <text x="145" y="165" fill="#38bdf8" font-size="11" font-weight="bold">-Vmax</text>
        <text x="120" y="85" fill="#f59e0b" font-size="10">Veff = 0.707 Vmax</text>
        <!-- Transformer Core -->
        <rect x="240" y="40" width="160" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <rect x="270" y="65" width="100" height="70" rx="4" fill="#0f172a" stroke="#f59e0b" stroke-width="1"/>
        <text x="245" y="32" fill="#f59e0b" font-size="11" font-weight="bold">Primary (Np)</text>
        <text x="345" y="32" fill="#10b981" font-size="11" font-weight="bold">Secondary (Ns)</text>
        <text x="280" y="105" fill="#f8fafc" font-size="11">η = VsIs/VpIp</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: دينامو تيار متردد وحساب القيمة اللحظية والفعالة والمتوسطة',
        titleEn: 'Problem: AC Generator Waveform Calculations',
        problemAr: 'ملف دينامو تيار متردد يتكون من 200 لفة مساحة كل منها $0.02\\text{ m}^2$ يدور بمعدل 3000 دورة في الدقيقة في مجال مغناطيسي منتظم كثافة فيضه $0.1\\text{ T}$. احسب: 1) القيمة العظمى للقوة الدافعة الكهربية $V_{max}$، 2) القيمة الفعالة $V_{eff}$، 3) القيمة اللحظية بعد زمن $t = \\frac{1}{600}\\text{ s}$ من الوضع العمودي، 4) متوسط القوة الدافعة خلال ربع دورة.',
        problemEn: 'An AC dynamo coil of 200 turns, area 0.02 m², rotates at 3000 rpm in B = 0.1 T. Calculate: 1) Maximum EMF Vmax, 2) RMS Effective Veff, 3) Instantaneous EMF at t = 1/600 s from normal position, 4) Average EMF over 1/4 cycle.',
        stepsAr: [
          'حساب التردد: $f = \\frac{3000}{60} = 50\\text{ Hz}$، والسرعة الزاوية $\\omega = 2\\pi f = 2 \\pi (50) = 100\\pi\\text{ rad/s}$.',
          '1) القيمة العظمى: $V_{max} = N B A \\omega = 200 \\times 0.1 \\times 0.02 \\times (100 \\times 3.14) = 125.6\\text{ V}$.',
          '2) القيمة الفعالة: $V_{eff} = \\frac{V_{max}}{\\sqrt{2}} = \\frac{125.6}{1.414} \\approx 88.8\\text{ V}$.',
          '3) زاوية الطور عند $t = \\frac{1}{600}\\text{ s}$: $\\theta = 360 f t = 360 \\times 50 \\times \\frac{1}{600} = 30^\\circ$.',
          'القيمة اللحظية: $V_{inst} = V_{max} \\sin 30^\\circ = 125.6 \\times 0.5 = 62.8\\text{ V}$.',
          '4) متوسط القوة الدافعة خلال ربع دورة: $V_{avg} = \\frac{2}{\\pi} V_{max} = \\frac{2}{3.14} \\times 125.6 = 80\\text{ V}$.'
        ],
        stepsEn: [
          'Frequency: f = 3000/60 = 50 Hz, ω = 2π(50) = 100π rad/s.',
          '1) Vmax = N·B·A·ω = 200 × 0.1 × 0.02 × 100π = 125.6 V.',
          '2) Veff = Vmax / √2 = 125.6 / 1.414 = 88.8 V.',
          '3) Phase angle θ = 360 × 50 × (1/600) = 30° ➔ Vinst = 125.6 sin 30° = 62.8 V.',
          '4) Average over 1/4 cycle: Vavg = (2/π) Vmax = 80 V.'
        ],
        finalAnswerAr: 'Vmax = 125.6 V، Veff = 88.8 V، Vinst = 62.8 V، و Vavg (ربع دورة) = 80 V.',
        finalAnswerEn: 'Vmax = 125.6 V, Veff = 88.8 V, Vinst = 62.8 V, and Vavg (quarter cycle) = 80 V.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-3',
        problemAr: 'محول كهربي كفاءته $80\\%$ يعمل على فرق جهد ابتدائي $200\\text{ V}$ ويعطي في الملف الثانوي تياراً شدته $2\\text{ A}$ بفرق جهد $100\\text{ V}$. احسب شدة التيار المار في الملف الابتدائي $I_p$.',
        problemEn: 'A transformer with 80% efficiency operates on primary Vp = 200 V, delivering secondary current Is = 2 A at Vs = 100 V. Find primary current Ip.',
        solutionStepsAr: [
          'قانون كفاءة المحول: $\\eta = \\frac{V_s I_s}{V_p I_p} \\times 100$.',
          'بالتعويض: $80 = \\frac{100 \\times 2}{200 \\times I_p} \\times 100 = \\frac{200}{200 I_p} \\times 100 = \\frac{100}{I_p}$.',
          'إذن: $I_p = \\frac{100}{80} = 1.25\\text{ A}$.'
        ],
        finalAnswerAr: 'شدة التيار في الملف الابتدائي Ip = 1.25 A'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-3',
        questionAr: 'عندما يصل ملف دينامو التيار المتردد إلى الوضع الذي يكون فيه مستوى الملف عمودياً على خطوط المجال المغناطيسي، فإن:',
        questionEn: 'When an AC generator coil reaches the position where the plane of the coil is perpendicular to magnetic field lines:',
        optionsAr: ['الفيض المغناطيسي Φm نهاية عظمى، والقوة الدافعة المستحثة emf تنعدم (تساوي صفراً)', 'الفيض المغناطيسي Φm ينعدم، والقوة الدافعة emf نهاية عظمى', 'كلاهما يصل إلى النهاية العظمى معاً', 'كلاهما ينعدم تماماً في نفس اللحظة'],
        optionsEn: ['Magnetic flux Φm is maximum, while induced EMF is zero', 'Magnetic flux Φm is zero, while induced EMF is maximum', 'Both reach maximum simultaneously', 'Both become zero simultaneously'],
        correctIndex: 0,
        explanationAr: 'عند الوضع العمودي يكون الفيض المخترق للملف أكبر ما يمكن ($\\Phi_m = BA$)، ولكن معدل التغير الزمني في الفيض $\\frac{\\Delta \\Phi_m}{\\Delta t} = 0$، وبالتالي تنعدم القوة الدافعة المستحثة لحظياً ($\\text{emf} = 0$).',
        explanationEn: 'In the perpendicular orientation, flux linkage Φm is maximum, but the time rate of change dΦ/dt is zero, resulting in zero instantaneous EMF.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy3',
      titleAr: 'اختبار إتقان الفصل الثالث: الحث الكهرومغناطيسي والدينامو والمحولات',
      titleEn: 'Mastery Quiz: Electromagnetic Induction, Generator & Transformer',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy3-1',
          textAr: 'تصل القوة الدافعة المستحثة اللحظية في دينامو تيار متردد إلى نصف قيمتها العظمى لأول مرة بعد الدوران من الوضع العمودي بزاوية طور قدرها:',
          textEn: 'The instantaneous induced EMF in an AC dynamo first reaches half its maximum value after rotating from the vertical position by a phase angle of:',
          optionsAr: ['30°', '45°', '60°', '90°'],
          optionsEn: ['30°', '45°', '60°', '90°'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين الزاوية والقيمة اللحظية للدينامو',
          conceptTestedEn: 'Phase angle for half-maximum instantaneous EMF',
          explanationAr: '$\\text{emf}_{inst} = \\text{emf}_{max} \\sin\\theta = 0.5 \\text{emf}_{max} \\implies \\sin\\theta = 0.5 \\implies \\theta = 30^\\circ$.',
          explanationEn: 'Since sin(30°) = 0.5, the EMF reaches half of its peak value at 30° from the perpendicular start.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy3-2',
          textAr: 'محول كهربي رافع للجهد النسبة بين عدد لفات ملفيه $1 : 5$. إذا وُصل ملفه الابتدائي بمصدر تيار مستمر (بطارية) قوته الدافعة $12\\text{ V}$، فإن فرق الجهد الناتج بين طرفي ملفه الثانوي يساوي:',
          textEn: 'A step-up transformer has a turn ratio of 1:5. If its primary is connected to a 12 V Direct Current (DC) battery, the output voltage across the secondary is:',
          optionsAr: ['صفر (0 V)', '60 V', '2.4 V', '12 V'],
          optionsEn: ['0 V (Zero)', '60 V', '2.4 V', '12 V'],
          correctIndex: 0,
          conceptTestedAr: 'شرط عمل المحول الكهربي بوجود تيار متردد متغيّر الفيض',
          conceptTestedEn: 'Transformer requirement for alternating/varying magnetic flux',
          explanationAr: 'المحول الكهربي لا يعمل بالتيار المستمر لأن التيار المستمر يولد فيضاً مغناطيسياً ثابتاً ($\\Delta \\Phi_m / \\Delta t = 0$) فلا يحدث حث كهرومغناطيسي في الثانوي ويكون الجهد الناتج صفراً.',
          explanationEn: 'Transformers rely on electromagnetic induction driven by changing flux. Steady DC produces no flux change, yielding zero secondary output.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-phy3-3',
          textAr: 'سقط مغناطيس رأسياً نحو حلقة دائرية من الألومنيوم مفتوحة وبها قطع صغير. أثناء اقتراب المغناطيس من الحلقة يتولد فيها:',
          textEn: 'A magnet falls vertically towards an aluminum circular loop that has a tiny open slit. As the magnet approaches the loop:',
          optionsAr: ['قوة دافعة كهربية مستحثة (emf) فقط ولا يمر تيار كهربي مستحث', 'تيار كهربي مستحث وقوة دافعة كهربية مستحثة', 'لا تتولد قوة دافعة كهربية ولا يمر تيار', 'قوة تنافر مغناطيسية تبطئ سقوط المغناطيس'],
          optionsEn: ['Induced EMF only, with NO circulating induced current', 'Both induced EMF and circulating induced current', 'Neither EMF nor current is induced', 'Repulsive magnetic force decelerating the magnet'],
          correctIndex: 0,
          conceptTestedAr: 'تولد القوة الدافعة في الدوائر المفتوحة واشتراط المسار المغلق لمرور التيار',
          conceptTestedEn: 'Induced EMF in open vs closed loops and Lenz\'s magnetic reaction',
          explanationAr: 'تتولد القوة الدافعة الكهربية المستحثة ($\\text{emf}$) على طرفي الحلقة المفتوحة لوجود تغير في الفيض المغناطيسي، لكن لا يمر تيار كهربي لعدم اكتمال الدائرة المغلقة، ولذلك لا تتكون أقطاب مغناطيسية ولا تنشأ قوة لنز المعاكسة.',
          explanationEn: 'A changing magnetic flux always induces an EMF across the gap, but zero current can circulate in an open circuit.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── CHAPTER 4: ALTERNATING CURRENT CIRCUITS (AC) ──
  {
    id: 'h12-phy-4',
    order: 4,
    titleAr: 'المحاضرة 4: الفصل الرابع: دوائر التيار المتردد، المعاوقة، ودوائر الرنين والدائرة المهتزة',
    titleEn: 'Lecture 4: Chapter 4: Alternating Current (AC) Circuits, Impedance, RLC Series Networks & Resonance',
    subtitleAr: 'الأميتر الحراري، دائرة المقاومة الأومية ($R$)، دائرة الملف والمفاعلة الحثية ($X_L = 2\\pi f L$)، دائرة المكثف والمفاعلة السعوية ($X_C = \\frac{1}{2\\pi f C}$)، دائرة المعاوقة ($Z = \\sqrt{R^2 + (X_L - X_C)^2}$)، ودائرة الرنين ($f_0 = \\frac{1}{2\\pi \\sqrt{LC}}$)',
    subtitleEn: 'Master Hot-Wire Ammeters, phase relationships in pure R, L, and C components, inductive/capacitive reactance, RLC circuit impedance triangles, phase angles, resonance frequency, and oscillating tuner circuits.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الأول: الكهربية التيارية والكهرومغناطيسية',
    termEn: 'Part 1: Dynamic Electricity & Electromagnetism',
    unitTitleAr: 'الفصل الرابع: دوائر التيار المتردد',
    unitTitleEn: 'Chapter 4: Alternating Current (AC) Circuits',
    lessonNumberAr: 'الدرس 1 و 2: الأميتر الحراري، دوائر R و L و C، ودوائر RLC وحالة الرنين',
    lessonNumberEn: 'Lessons 1 & 2: Thermal Ammeter, Single/Combined AC Circuits & Resonance State',

    warmupHookAr: 'كيف تستطيع دائرة الاستقبال في هاتفك المحمول أو مذياع سيارتك التقاط محطة إذاعية أو تردد خلوي واحد بدقة متناهية من بين آلاف الموجات الكهرومغناطيسية التي تملأ الفضاء؟ السر يكمن في "دائرة الرنين" (Resonant RLC Circuit) حيث تتعادل المفاعلة الحثية مع المفاعلة السعوية ($X_L = X_C$)، فتنخفض المعاوقة لأقل قيمة وتسمح فقط للتردد المطلوب بالمرور بأعلى تيار!',
    warmupHookEn: 'Modern smartphones and radio receivers tune into specific communication frequencies among millions of signals using resonant RLC circuits. At the natural resonance frequency where inductive and capacitive reactances cancel out (XL = XC), impedance drops to its minimum, permitting maximum signal reception.',

    keyConceptsAr: [
      'الأميتر الحراري (Hot-Wire Ammeter): يعتمد على التأثير الحراري للتيار ($P = I^2 R$)، يقيس القيمة الفعالة للتيار المتردد وتدريجه غير منتظم يتناسب مع مربع التيار ($\\theta \\propto I^2$)',
      'دائرة مقاومة أومية عديمة الحث ($R$): الجهد والتيار متفقان في الطور (زاوية الطور $\\phi = 0$)',
      'دائرة ملف حث عديم المقاومة ($L$): الجهد يسبق التيار بزاوية طور $90^\\circ$ ($\\pi/2$)، والمفاعلة الحثية $X_L = 2\\pi f L = \\omega L$ (تتناسب طردياً مع التردد)',
      'دائرة مكثف نقي ($C$): التيار يسبق الجهد بزاوية طور $90^\\circ$، والمفاعلة السعوية $X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$ (تتناسب عكسياً مع التردد)',
      'دائرة $RLC$ على التوالي: المعاوقة الكلية $Z = \\sqrt{R^2 + (X_L - X_C)^2}$، وزاوية الطور $\\tan\\theta = \\frac{X_L - X_C}{R}$، والجهد الكلي $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$',
      'حالة الرنين (Resonance State): عندما $X_L = X_C \\implies V_L = V_C$، تصبح المعاوقة أقل ما يمكن وتساوي المقاومة الأومية ($Z = R$)، وشدة التيار نهاية عظمى ($I = V/R$)، وزاوية الطور صفر، وتردد الرنين: $f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$',
      'الدائرة المهتزة (Oscillating Circuit): تبادل مستمر للطاقة المخزونة في صورة مجال كهربي بالمكثف ومجال مغناطيسي بالملف لتوليد موجات لاسلكية'
    ],
    keyConceptsEn: [
      'Hot-Wire Ammeter: Thermal Joulean heating P = I²·R; Measures RMS current; Quadratic scale θ ∝ I²',
      'Pure Resistor circuit: Voltage and current are strictly in phase (Phase angle ϕ = 0)',
      'Pure Inductor circuit: Voltage leads current by 90° (π/2); Inductive reactance XL = 2πfL = ωL',
      'Pure Capacitor circuit: Current leads voltage by 90°; Capacitive reactance XC = 1 / (2πfC) = 1 / (ωC)',
      'RLC Series Network: Total Impedance Z = √[R² + (XL - XC)²]; Phase angle tan θ = (XL - XC) / R',
      'Resonance State: XL = XC ➔ Minimum impedance Z = R, Maximum current I = V/R, In-phase condition, Resonance frequency f0 = 1 / (2π√[LC])',
      'Oscillating Circuit: Continuous energy oscillation between electrostatic field in capacitor and magnetic field in inductor'
    ],

    conceptMapAr: [
      'الأميتر الحراري $\\implies$ قياس القيمة الفعالة للتيار المتردد',
      'عناصر التيار المتردد: $R$ (اتفاق طور) + $L$ (الجهد يسبق بـ $90^\\circ$) + $C$ (التيار يسبق بـ $90^\\circ$)',
      'دائرة $RLC$ ➔ المعاوقة $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ ➔ حالة الرنين $X_L = X_C \\implies Z = R$ ➔ دوائر الاستقبال اللاسلكي'
    ],
    conceptMapEn: [
      'Hot-Wire Ammeter ➔ RMS AC Measurement via Thermal Dissipation',
      'AC Impedance Elements: Pure R (In Phase), Pure L (V leads by 90°), Pure C (I leads by 90°)',
      'RLC Series Circuit ➔ Impedance Z = √[R² + (XL-XC)²] ➔ Resonance XL = XC ➔ Wireless Tuning'
    ],

    learningOutcomesAr: [
      'أن يقارن الطالب بين سلوك المقاومة والملف والمكثف في دوائر التيار المتردد والتيار المستمر.',
      'أن يحسب المعاوقة $Z$ وزاوية الطور $\\theta$ وشدة التيار وفرق الجهد عبر كل عنصر في دوائر $RLC$.',
      'أن يستنتج شروط حالة الرنين ويحسب تردد الرنين ومعامل الحث أو السعة اللازمة لتحقيق أقصى تيار استقبال.'
    ],
    learningOutcomesEn: [
      'Compare impedance behaviors of resistors, inductors, and capacitors in DC vs AC regimes.',
      'Calculate total impedance Z, phase angle θ, branch voltages, and current in RLC series circuits.',
      'Derive resonance conditions and calculate natural resonant frequency f0 for wireless receiver circuits.'
    ],

    vocabulary: [
      {
        termAr: 'المفاعلة الحثية (Inductive Reactance - XL)',
        termEn: 'Inductive Reactance (XL)',
        definitionAr: 'الممانعة التي يلقاها التيار المتردد أثناء مروره في ملف حث بسبب حثه الذاتي: $X_L = 2\\pi f L$ ووحدتها الأوم ($\\Omega$).',
        definitionEn: 'The opposition to alternating current flow caused by self-induced back EMF in an inductor: XL = 2πfL (Ohms).'
      },
      {
        termAr: 'المفاعلة السعوية (Capacitive Reactance - XC)',
        termEn: 'Capacitive Reactance (XC)',
        definitionAr: 'الممانعة التي يلقاها التيار المتردد أثناء مروره في مكثف بسبب سعته الكهربية: $X_C = \\frac{1}{2\\pi f C}$ ووحدتها الأوم ($\\Omega$).',
        definitionEn: 'The opposition to AC current flow arising from electrostatic charge accumulation on capacitor plates: XC = 1/(2πfC) (Ohms).'
      },
      {
        termAr: 'المعاوقة الكلية (Impedance - Z)',
        termEn: 'Total Impedance (Z)',
        definitionAr: 'مكافئ الممانعات الكلية (المقاومة والمفاعلات الحثية والسعوية) التي يلقاها التيار المتردد في الدائرة: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$ ووحدتها الأوم ($\\Omega$).',
        definitionEn: 'The total effective opposition to alternating current flow in an AC circuit incorporating resistance and net reactance: Z = √[R² + (XL - XC)²] (Ohms).'
      }
    ],

    mainContentAr: `
### 1. دوائر التيار المتردد البسيطة
1. **دائرة تحتوي على مقاومة أومية عديمة الحث ($R$):**
   * $V = V_{max} \\sin(\\omega t)$ و $I = I_{max} \\sin(\\omega t)$.
   * الجهد والتيار متفقان في الطور ($\\phi = 0$).
   * المقاومة الأومية $R$ لا تعتمد على تردد المصدر $f$.
2. **دائرة تحتوي على ملف حث نقي ($L$):**
   * الجهد يسبق التيار بربع دورة ($90^\\circ$): $V_L = V_{max} \\sin(\\omega t + 90^\\circ)$.
   * المفاعلة الحثية: $X_L = 2\\pi f L = \\omega L$.
   * عند الترددات العالية جداً تصبح $X_L$ كبيرة جداً وتعمل كدائرة مفتوحة ($I \\to 0$). وعند الترددات المنخفضة أو التيار المستمر ($f=0$) تنعدم $X_L = 0$ ويعمل الملف كسلك توصيل عادي.
3. **دائرة تحتوي على مكثف ($C$):**
   * التيار يسبق الجهد بربع دورة ($90^\\circ$): $V_C = V_{max} \\sin(\\omega t - 90^\\circ)$.
   * المفاعلة السعوية: $X_C = \\frac{1}{2\\pi f C} = \\frac{1}{\\omega C}$.
   * في دوائر التيار المستمر ($f=0$) تصبح $X_C = \\infty$ وينقطع التيار تماماً بمجرد تمام شحن المكثف.

---

### 2. دائرة $RLC$ على التوالي والمعاوقة الكلية
* **الجهد الكلي:**
  $$V_{total} = \\sqrt{V_R^2 + (V_L - V_C)^2}$$
* **المعاوقة الكلية ($Z$):**
  $$Z = \\sqrt{R^2 + (X_L - X_C)^2}$$
* **شدة التيار:** $I = \\frac{V}{Z}$.
* **زاوية الطور ($\\theta$):**
  $$\\tan\\theta = \\frac{X_L - X_C}{R} = \\frac{V_L - V_C}{V_R}$$
  * إذا كان $X_L > X_C$: تكون للدائرة خواص حثية وزاوية الطور موجبة (الجهد يسبق التيار).
  * إذا كان $X_C > X_L$: تكون للدائرة خواص سعوية وزاوية الطور سالبة (التيار يسبق الجهد).
  * إذا كان $X_L = X_C$: تكون للدائرة خواص أومية نقية (حالة رنين).

---

### 3. دائرة الرنين والدائرة المهتزة (Resonance & Oscillations)
* **شروط حدوث حالة الرنين في دائرة $RLC$:**
  1. المفاعلة الحثية تساوي المفاعلة السعوية: $X_L = X_C$.
  2. فرق الجهد عبر الملف يساوي فرق الجهد عبر المكثف: $V_L = V_C$.
  3. المعاوقة أقل ما يمكن وتساوي المقاومة الأومية: $Z = R$.
  4. شدة التيار أكبر ما يمكن: $I_{max} = \\frac{V}{R}$.
  5. فرق الجهد الكلي والتيار متفقان في الطور: $\\theta = 0$.
  6. معامل القدرة $\\cos\\theta = 1$.
* **تردد الرنين ($f_0$):**
  $$2\\pi f_0 L = \\frac{1}{2\\pi f_0 C} \\implies f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$$
    `,
    mainContentEn: `
### 1. Fundamental AC Components
* Pure Resistor: $V$ and $I$ in phase ($\\phi = 0$).
* Pure Inductor: $V$ leads $I$ by $90^\\circ$; $X_L = 2\\pi f L$.
* Pure Capacitor: $I$ leads $V$ by $90^\\circ$; $X_C = \\frac{1}{2\\pi f C}$.

### 2. RLC Series Circuit
* Total Voltage: $V = \\sqrt{V_R^2 + (V_L - V_C)^2}$.
* Total Impedance: $Z = \\sqrt{R^2 + (X_L - X_C)^2}$.
* Phase Angle: $\\tan\\theta = \\frac{X_L - X_C}{R}$.

### 3. Resonance State
* Occurs when $X_L = X_C \\implies Z = R$ (minimum) and $I = V/R$ (maximum).
* Resonant Frequency: $f_0 = \\frac{1}{2\\pi \\sqrt{L C}}$.
    `,

    diagramType: 'rlc_impedance',
    diagramData: {
      type: 'rlc_phasor_triangle',
      title: 'مخطط الطور ومثلث المعاوقة لدائرة RLC',
      svgSnippet: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="160" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- Impedance triangle -->
        <line x1="80" y1="140" x2="240" y2="140" stroke="#10b981" stroke-width="3"/>
        <text x="150" y="160" fill="#10b981" font-size="12" font-weight="bold">R (مقاومة)</text>
        <line x1="240" y1="140" x2="240" y2="60" stroke="#f59e0b" stroke-width="3"/>
        <text x="250" y="100" fill="#f59e0b" font-size="12" font-weight="bold">(XL - XC)</text>
        <line x1="80" y1="140" x2="240" y2="60" stroke="#38bdf8" stroke-width="3"/>
        <text x="130" y="90" fill="#38bdf8" font-size="12" font-weight="bold">Z = √(R²+(XL-XC)²)</text>
        <!-- Resonance badge -->
        <rect x="310" y="50" width="95" height="100" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="325" y="75" fill="#a855f7" font-size="11" font-weight="bold">حالة الرنين</text>
        <text x="325" y="100" fill="#f8fafc" font-size="10">XL = XC</text>
        <text x="325" y="120" fill="#f8fafc" font-size="10">Z = R (أقل قيمة)</text>
        <text x="320" y="140" fill="#38bdf8" font-size="9">f₀ = 1/(2π√LC)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: دائرة RLC تيار متردد وحساب المعاوقة وزاوية الطور وحالة الرنين',
        titleEn: 'Problem: RLC Series Circuit Analysis and Resonance Frequency',
        problemAr: 'دائرة تيار متردد تحتوي على مقاومة أومية $R = 30\\,\\Omega$ وملف حث مفاعلته الحثية $X_L = 80\\,\\Omega$ ومكثف مفاعلته السعوية $X_C = 40\\,\\Omega$ متصلة بمصدر تيار متردد جهده $V = 100\\text{ V}$. احسب: 1) المعاوقة الكلية $Z$، 2) شدة التيار $I$، 3) زاوية الطور $\\theta$، 4) ما التعديل في سعة المكثف لجعل الدائرة في حالة رنين عند نفس التردد؟',
        problemEn: 'An AC circuit has R = 30 Ω, XL = 80 Ω, XC = 40 Ω connected to 100 V AC source. Calculate: 1) Total impedance Z, 2) Current I, 3) Phase angle θ, 4) What capacitor reactance adjustment is needed for resonance?',
        stepsAr: [
          '1) حساب المعاوقة الكلية: $Z = \\sqrt{R^2 + (X_L - X_C)^2} = \\sqrt{30^2 + (80 - 40)^2} = \\sqrt{900 + 1600} = \\sqrt{2500} = 50\\,\\Omega$.',
          '2) شدة التيار المار في الدائرة: $I = \\frac{V}{Z} = \\frac{100}{50} = 2\\text{ A}$.',
          '3) زاوية الطور: $\\tan\\theta = \\frac{X_L - X_C}{R} = \\frac{80 - 40}{30} = \\frac{40}{30} = \\frac{4}{3} \\implies \\theta = 53.13^\\circ$ (خواص حثية والجهد يسبق التيار).',
          '4) لكي تصبح الدائرة في حالة رنين: يجب أن تكون المفاعلة السعوية $X_C\' = X_L = 80\\,\\Omega$ (أي تقليل سعة المكثف إلى النصف لأن $X_C \\propto 1/C$).'
        ],
        stepsEn: [
          '1) Impedance Z = √[30² + (80 - 40)²] = √[900 + 1600] = 50 Ω.',
          '2) Current I = V / Z = 100 / 50 = 2 A.',
          '3) Phase angle tan θ = 40/30 = 4/3 ➔ θ = 53.13° (Inductive regime).',
          '4) For resonance: XC must equal XL = 80 Ω, requiring halving the capacitance.'
        ],
        finalAnswerAr: 'المعاوقة Z = 50 Ω، شدة التيار I = 2 A، زاوية الطور θ = 53.13°، و XC المطلوبة للرنين = 80 Ω.',
        finalAnswerEn: 'Z = 50 Ω, I = 2 A, Phase angle θ = 53.13°, and XC required for resonance = 80 Ω.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-4',
        problemAr: 'دائرة رنين تيار متردد ترددها $f_1 = 2\\times 10^5\\text{ Hz}$. إذا زاد معامل الحث الذاتي للملف إلى الضعف وقلت سعة المكثف إلى الثمن ($1/8$)، فكم يصبح تردد الرنين الجديد $f_2$؟',
        problemEn: 'A resonant circuit has frequency f1 = 2×10^5 Hz. If coil inductance doubles and capacitor capacitance is reduced to 1/8, what is the new resonant frequency f2?',
        solutionStepsAr: [
          'تردد الرنين يتناسب عكسياً مع الجذر التربيعي لـ $(L \\cdot C)$: $f \\propto \\frac{1}{\\sqrt{L C}}$.',
          'النسبة بين الترددين: $\\frac{f_1}{f_2} = \\sqrt{\\frac{L_2 C_2}{L_1 C_1}} = \\sqrt{\\frac{2 L_1 \\times \\frac{1}{8} C_1}{L_1 C_1}} = \\sqrt{\\frac{1}{4}} = \\frac{1}{2}$.',
          'إذن: $f_2 = 2 f_1 = 2 \\times (2\\times 10^5) = 4\\times 10^5\\text{ Hz}$.'
        ],
        finalAnswerAr: 'تردد الرنين الجديد f2 = 4 × 10^5 Hz (400 kHz)'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-4',
        questionAr: 'عند زيادة تردد مصدر تيار متردد متصل بدائرة مكثف ومقاومة أومية ($RC$) على التوالي، فإن المعاوقة الكلية للدائرة ($Z$):',
        questionEn: 'When the frequency of an AC voltage source in an RC series circuit increases, the total circuit impedance (Z):',
        optionsAr: ['تقل وتقترب من قيمة المقاومة الأومية R', 'تزداد باستمرار إلى ما لا نهاية', 'تظل ثابتة لا تتأثر بالتردد', 'تنعدم تماماً'],
        optionsEn: ['Decreases approaching resistance R', 'Increases continuously to infinity', 'Remains strictly constant', 'Becomes exactly zero'],
        correctIndex: 0,
        explanationAr: 'بزيادة التردد $f$ تقل المفاعلة السعوية $X_C = \\frac{1}{2\\pi f C}$، ومن العلاقة $Z = \\sqrt{R^2 + X_C^2}$ تقل المعاوقة الكلية $Z$ وتقترب تدريجياً من $R$.',
        explanationEn: 'Increasing frequency f decreases XC = 1/(2πfC). As XC shrinks, Z = √(R² + XC²) decreases towards R.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy4',
      titleAr: 'اختبار إتقان الفصل الرابع: دوائر التيار المتردد والمعاوقة والرنين',
      titleEn: 'Mastery Quiz: AC Circuits, Impedance & Resonance',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy4-1',
          textAr: 'في دائرة تيار متردد $RLC$ في حالة رنين، إذا تم غمر ملف الحث في سائل عازل له معامل نفاذية مغناطيسية أكبر من الهواء، فإن قراءة الأميتر الحراري في الدائرة:',
          textEn: 'In an RLC resonant circuit, if the inductor core is submerged in an insulating oil with higher magnetic permeability than air, the thermal ammeter reading:',
          optionsAr: ['تقل بسبب خروج الدائرة من حالة الرنين وزيادة المعاوقة', 'تزداد لأن نفاذية السائل تزيد التيار', 'تظل في حالة رنين دون تغير', 'تصل إلى الصفر فوراً'],
          optionsEn: ['Decreases because circuit leaves resonance and impedance increases', 'Increases due to permeability', 'Remains at peak resonance', 'Becomes zero instantly'],
          correctIndex: 0,
          conceptTestedAr: 'تأثير تغير معاملات الملف والمكثف على حالة الرنين والمعاوقة',
          conceptTestedEn: 'Effect of core permeability changes on resonance conditions',
          explanationAr: 'بزيادة النفاذية $\\mu$ يزداد الحث الذاتي $L$ وتزداد المفاعلة الحثية $X_L$ فتصبح $X_L > X_C$، فتخرج الدائرة من حالة الرنين وتزداد المعاوقة $Z > R$ فتقل شدة التيار.',
          explanationEn: 'Higher permeability raises L and XL, breaking the XL = XC balance. Total impedance rises above R, dropping current.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-phy4-2',
          textAr: 'تدريج الأميتر الحراري (Hot-Wire Ammeter) غير منتظم لأن كمية الحرارة المتولدة في سلك الإيريديوم البلاتيني تتناسب طردياً مع:',
          textEn: 'The hot-wire ammeter scale is non-uniform because the thermal energy generated in the platinum-iridium wire is proportional to:',
          optionsAr: ['مربع شدة التيار (I²)', 'شدة التيار فقط (I)', 'الجذر التربيعي لشدة التيار', 'مقلوب شدة التيار (1/I)'],
          optionsEn: ['Square of current intensity (I²)', 'Current intensity linearly (I)', 'Square root of current', 'Inverse of current (1/I)'],
          correctIndex: 0,
          conceptTestedAr: 'الأساس العلمي لتدريج الأميتر الحراري',
          conceptTestedEn: 'Scientific basis for non-linear quadratic scale in thermal ammeters',
          explanationAr: 'القدرة الحرارية المتولدة تخضع لقانون جول $P = I^2 R$، فتتناسب زاوية انحراف المؤشر مع مربع شدة التيار ($\\theta \\propto I^2$).',
          explanationEn: 'Joule heating follows P = I²·R, making needle deflection angle proportional to the square of current.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy4-3',
          textAr: 'ملف حث ومكثف ومقاومة أومية متصلة على التوالي مع مصدر تيار متردد. إذا كانت $V_R = 40\\text{ V}$ و $V_L = 80\\text{ V}$ و $V_C = 50\\text{ V}$، فإن الجهد الكلي للمصدر يساوي:',
          textEn: 'An RLC series circuit has VR = 40 V, VL = 80 V, VC = 50 V. The total source voltage is:',
          optionsAr: ['50 V', '170 V', '90 V', '70 V'],
          optionsEn: ['50 V', '170 V', '90 V', '70 V'],
          correctIndex: 0,
          conceptTestedAr: 'الجمع الاتجاهي لفروق الجهد في دوائر التيار المتردد',
          conceptTestedEn: 'Vector phasor addition of component voltages in AC series circuits',
          explanationAr: '$V_{total} = \\sqrt{V_R^2 + (V_L - V_C)^2} = \\sqrt{40^2 + (80 - 50)^2} = \\sqrt{1600 + 900} = \\sqrt{2500} = 50\\text{ V}$. (لا تُجمع جبرياً لاختلاف الطور).',
          explanationEn: 'Voltages must be added vectorially: V = √[40² + (80 - 50)²] = √[1600 + 900] = 50 V.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── CHAPTER 5: DUAL NATURE OF WAVE AND PARTICLE (MODERN PHYSICS) ──
  {
    id: 'h12-phy-5',
    order: 5,
    titleAr: 'المحاضرة 5: الفصل الخامس: الطبيعة المزدوجة للموجة والجسيم، إشعاع الجسم الأسود، الظاهرة الكهروضوئية، وتأثير كومتون',
    titleEn: 'Lecture 5: Chapter 5: Dual Nature of Wave & Particle, Blackbody Radiation, Photoelectric Effect & Compton Effect',
    subtitleAr: 'فرضية بلانك ($E=h\\nu$)، قانون فين، انبعاث الإلكترونات (الأنبوبة الكاثودية والخلايا الكهروضوئية)، معادلة آينشتاين الكهروضوئية ودالة الشغل ($W_e=h\\nu_c$)، تأثير كومتون، وفرضية دي برولي والمجهر الإلكتروني',
    subtitleEn: 'Master Planck\'s quantum hypothesis, Wien\'s displacement law, Einstein\'s photoelectric equation, work function, Compton photon-electron collisions, de Broglie matter waves, and Transmission Electron Microscopy.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الثاني: مقدمة في الفيزياء الحديثة',
    termEn: 'Part 2: Introduction to Modern Physics',
    unitTitleAr: 'الفصل الخامس: ازدواجية الموجة والجسيم',
    unitTitleEn: 'Chapter 5: Dual Nature of Wave and Particle',
    lessonNumberAr: 'الدرس 1 و 2: إشعاع الجسم الأسود والظاهرة الكهروضوئية، وتأثير كومتون والمجهر الإلكتروني',
    lessonNumberEn: 'Lessons 1 & 2: Blackbody & Photoelectric Effect, Compton & Electron Microscope',

    warmupHookAr: 'في نهاية القرن التاسع عشر، ظن الفيزيائيون أن علم الفيزياء قد اكتمل تماماً بفضل قوانين نيوتن ومعادلات ماكسويل! ولكن ظاهرتين صغيرتين حيرتا العالم: لماذا يتغير لون الحديد المسخن من الأحمر إلى البرتقالي ثم الأبيض والأزرق؟ ولماذا يعجز الضوء الأحمر الشديد عن تحرير إلكترون واحد من سطح فلز بينما يحرره وميض خافت من الأشعة فوق البنفسجية فوراً؟ هذه التساؤلات فجرت أعظم ثورة علمية: "ميكانيكا الكم"!',
    warmupHookEn: 'Classical physics could not explain why intense red light fails to eject a single electron from a metal while dim UV light does so instantaneously. Max Planck and Albert Einstein revolutionized science by postulating that light behaves as discrete quantized packets of energy called photons.',

    keyConceptsAr: [
      'فرضية ماكس بلانك لإشعاع الجسم الأسود: الإشعاع الكهرومغناطيسي ينبعث ويمتص في صورة كمّات (فوتونات) منفصلة طاقة كل فوتون $E = h \\nu = \\frac{h c}{\\lambda}$ حيث $h = 6.625 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$ ثابت بلانك',
      'قانون فين للإزاحة (Wien\'s Law): يتناسب الطول الموجي المصاحب لأقصى شدة إشعاع ($\\lambda_{max}$) عكسياً مع درجة الحرارة المطلقة للجسم المشع بالكلفن: $\\lambda_{max} \\cdot T = \\text{constant}$',
      'الظاهرة الكهروضوئية (Photoelectric Effect): انبعاث إلكترونات من أسطح الفلزات عند سقوط ضوء ذي تردد مناسب ($ \\nu \\ge \\nu_c $). لا يعتمد الانبعاث على شدة الضوء بل على تردده وطاقته',
      'معادلة آينشتاين الكهروضوئية: $E_{photon} = W_e + \\text{KE}_{max} \\implies h\\nu = h\\nu_c + \\frac{1}{2}m_e v_{max}^2$',
      'دالة الشغل لسطح الفلز ($W_e = h\\nu_c$): الحد الأدنى من الطاقة اللازمة لتحرير الإلكترون من سطح الفلز دون إكسابه طاقة حركة، وهي خاصية مميزة لنوع مادة الفلز فقط',
      'تأثير كومتون (Compton Effect): تصادم فوتون أشعة سينية أو جاما عالي الطاقة بإلكترون ساكن؛ يثبت الطبيعة الجسيمية للضوء (حفظ الطاقة وحفظ كمية الحركة $p = \\frac{h}{\\lambda} = \\frac{h\\nu}{c}$)',
      'فرضية دي برولي (الطبيعة الموجية للجسيمات): $\\lambda = \\frac{h}{p} = \\frac{h}{m v}$، والمجهر الإلكتروني الذي يتميز بقدرة تكبيرية وفصلية هائلة لقصر الطول الموجي لشعاع الإلكترونات المعجلة ($eV = \\frac{1}{2}m v^2$)'
    ],
    keyConceptsEn: [
      'Planck\'s Quantum Hypothesis: Electromagnetic radiation consists of discrete energy packets (photons) E = hν = hc/λ',
      'Wien\'s Displacement Law: Peak wavelength λ_max is inversely proportional to absolute Kelvin temperature (λ_max·T = const)',
      'Photoelectric Effect: Instantaneous emission of electrons when incident photon frequency ν ≥ threshold frequency νc',
      'Einstein\'s Photoelectric Equation: E = We + KE_max ➔ hν = hνc + (1/2)me·v_max²',
      'Work Function We = hνc: Minimum energy required to liberate an electron from a metal surface (material intrinsic)',
      'Compton Effect: Photon-electron elastic collision proving photon momentum p = h/λ = hν/c and particle nature',
      'De Broglie Matter Wavelength: λ = h/(mv); Electron Microscope achieves ultra-high resolution due to sub-nanometer electron wavelengths'
    ],

    conceptMapAr: [
      'فشل الفيزياء الكلاسيكية ➔ فرضية بلانك ($E = h \\nu$) ➔ إشعاع الجسم الأسود وقانون فين',
      'سقوط الفوتونات على الفلزات ➔ الظاهرة الكهروضوئية ($h\\nu = W_e + \\text{KE}$) ➔ الخلية الكهروضوئية',
      'ازدواجية الموجة والجسيم ➔ تأثير كومتون (الفوتون جسيم له كتلة وحركة) + دي برولي (الجسيم المادي تصاحبه موجة $\\lambda = h/mv$) ➔ المجهر الإلكتروني'
    ],
    conceptMapEn: [
      'Classical Physics Breakdown ➔ Planck\'s Quantum Quantization (E = hν) ➔ Blackbody Spectrum & Wien\'s Law',
      'Photon Bombardment on Metals ➔ Photoelectric Effect (hν = We + KE) ➔ Photocell Sensor',
      'Wave-Particle Duality ➔ Compton Effect (Photon has momentum) + de Broglie (Matter has wavelength λ = h/mv) ➔ TEM Microscope'
    ],

    learningOutcomesAr: [
      'أن يفسر الطالب منحنيات بلانك لإشعاع الأجسام المشعة وتطبيقات الاستشعار عن بعد والتصوير الحراري.',
      'أن يطبق معادلة آينشتاين الكهروضوئية في حساب تردد العتبة وطاقة حركة الإلكترونات المتحررة وسرعتها القصوى.',
      'أن يثبت بقاء كمية الحركة والطاقة في تأثير كومتون، ويحسب الطول الموجي المصاحب لحركة الجسيمات في المجهر الإلكتروني.'
    ],
    learningOutcomesEn: [
      'Interpret Planck radiation curves and applications in thermography and satellite remote sensing.',
      'Apply Einstein\'s photoelectric equation to calculate threshold frequencies, stopping potentials, and electron velocities.',
      'Verify energy and momentum conservation in Compton scattering and calculate de Broglie wavelengths in electron microscopes.'
    ],

    vocabulary: [
      {
        termAr: 'تردد العتبة (Threshold Frequency - νc)',
        termEn: 'Threshold Frequency (νc)',
        definitionAr: 'أقل تردد لضوء ساقط يكفي لتحرير إلكترونات من سطح الفلز دون إكسابها طاقة حركة، ويتوقف فقط على نوع مادة الفلز.',
        definitionEn: 'The minimum incident photon frequency capable of ejecting electrons from a metal surface without residual kinetic energy.'
      },
      {
        termAr: 'دالة الشغل (Work Function - We)',
        termEn: 'Work Function (We)',
        definitionAr: 'الحد الأدنى من الطاقة اللازمة لتحرير الإلكترون من سطح الفلز للتغلب على حاجز جهد السطح: $W_e = h \\nu_c = \\frac{h c}{\\lambda_c}$.',
        definitionEn: 'The minimum energy required to liberate a conduction electron from the metal lattice overcoming surface potential barriers.'
      },
      {
        termAr: 'طول موجة دي برولي (de Broglie Wavelength)',
        termEn: 'de Broglie Matter Wavelength',
        definitionAr: 'الطول الموجي للموجة المادية المصاحبة لحركة أي جسيم مادي كتلته $m$ ويتحرك بسرعة $v$: $\\lambda = \\frac{h}{m \\cdot v}$.',
        definitionEn: 'The quantum wavelength associated with a moving particle of mass m and velocity v: λ = h/(mv).'
      }
    ],

    mainContentAr: `
### 1. إشعاع الجسم الأسود وفرضية ماكس بلانك
* **الجسم الأسود:** ممتص مثالي وباعث مثالي للإشعاع الكهرومغناطيسي.
* **فشل الفيزياء الكلاسيكية (كارثة الأشعة فوق البنفسجية):** افترضت الكلاسيكية أن الإشعاع موجات متصلة وأن شدة الإشعاع تزداد كلما قل الطول الموجي، وفشلت في تفسير تناقص الشدة عند الأطوال الموجية القصيرة جداً.
* **تفسير بلانك الكمي:** الإشعاع يتكون من كمّات تسمى فوتونات، طاقة كل فوتون $E = h \\nu$. بزيادة التردد تزداد طاقة الفوتون ويقل عدد الفوتونات المنبعثة فتقترب شدة الإشعاع من الصفر في الترددات العالية جداً.
* **قانون فين:** $\\lambda_{max} \\cdot T = \\text{constant} \\implies \\frac{\\lambda_{max1}}{\\lambda_{max2}} = \\frac{T_2}{T_1}$.

---

### 2. الظاهرة الكهروضوئية ومعادلة آينشتاين
* **حاجز جهد السطح:** قوى التجاذب التي تجذب الإلكترونات الحرة نحو الداخل وتمنع تحررها من سطح الفلز.
* **شروط تحرير الإلكترونات الكهروضوئية:**
  1. إذا كان $\\nu < \\nu_c$ (أو $E < W_e$ أو $\\lambda > \\lambda_c$): لا تنبعث أي إلكترونات مهما زادت شدة الضوء الساقط أو زمن التعرض!
  2. إذا كان $\\nu = \\nu_c$ (أو $E = W_e$): تنبعث إلكترونات بالكاد دون إكسابها طاقة حركة ($\text{KE}_{max} = 0$).
  3. إذا كان $\\nu > \\nu_c$ (أو $E > W_e$): تنبعث الإلكترونات فورياً وتكتسب طاقة حركة:
     $$E = W_e + \\text{KE}_{max} \\implies h\\nu = h\\nu_c + \\frac{1}{2}m_e v_{max}^2$$
* **الرسم البياني بين $\\text{KE}_{max}$ والتردد $\\nu$:**
  * خط مستقيم ميله يمثل **ثابت بلانك ($h$)**.
  * نقطة التقاطع مع محور السينات تمثل **تردد العتبة ($\\nu_c$)**.
  * نقطة التقاطع مع محور الصادات السالب تمثل **$-W_e$ (سالب دالة الشغل)**.

---

### 3. تأثير كومتون وازدواجية الموجة والجسيم والمجهر الإلكتروني
* **تأثير كومتون (Compton Scattering):**
  * عند تصادم فوتون أشعة سينية عالي الطاقة بإلكترون حر ساكن:
    * **الفوتون المشتت:** تقل طاقته ($E' < E$)، ويقل تردده ($\nu' < \nu$)، ويزداد طوله الموجي ($\lambda' > \lambda$)، وتقل كتلته المكافئة ($m = h\nu/c^2$)، وتقل كمية حركته، ولكن **تظل سرعته ثابتة ($c = 3\\times 10^8\\text{ m/s}$)**.
    * **الإلكترون:** تزداد طاقته وتزداد سرعته وكمية حركته.
  * يثبت هذا التصادم بقاء الطاقة وكمية الحركة الخطية وأن للفوتون خواص جسيمية ($p = h/\\lambda$).
* **المجهر الإلكتروني (Electron Microscope):**
  * شرط الرؤية والتكبير: يجب أن يكون الطول الموجي للإشعاع المستخدم **أصغر من أبعاد الجسم أو الفيروس المراد رؤيته**.
  * بتعجيل الإلكترونات بفروق جهد كهربية عالية ($V$):
    $$e \\cdot V = \\frac{1}{2}m v^2 \\implies v = \\sqrt{\\frac{2 e V}{m}} \\implies \\lambda = \\frac{h}{m v} = \\frac{h}{\\sqrt{2 m e V}}$$
  * كلما زاد فرق الجهد $V$ صغر الطول الموجي $\\lambda$ جداً فتزداد القدرة التحليلية والتكبيرية لملايين المرات.
    `,
    mainContentEn: `
### 1. Blackbody Radiation & Planck
* Photons: $E = h\\nu = hc/\\lambda$.
* Wien's Law: $\\lambda_{max} \\cdot T = \\text{constant}$.

### 2. Photoelectric Effect
* Einstein: $h\\nu = W_e + \\text{KE}_{max} = h\\nu_c + \\frac{1}{2}m_e v^2$.
* Graph of $\\text{KE}$ vs $\\nu$: Slope is Planck's constant $h$, X-intercept is $\\nu_c$, Y-intercept is $-W_e$.

### 3. Compton Scattering & Electron Microscopy
* Compton confirms photon momentum $p = h/\\lambda$.
* Matter wavelength: $\\lambda = h/(m v)$.
* Electron microscope: High accelerating potential $eV = \\frac{1}{2}mv^2$ yields ultra-short $\\lambda$, enabling nanoscale virus imaging.
    `,

    diagramType: 'photoelectric_compton',
    diagramData: {
      type: 'photoelectric_graph_compton',
      title: 'الرسم البياني لمعادلة آينشتاين الكهروضوئية وتأثير كومتون',
      svgSnippet: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="160" rx="10" fill="#0f172a" stroke="#f43f5e" stroke-width="2"/>
        <!-- Photoelectric Graph -->
        <line x1="50" y1="130" x2="210" y2="130" stroke="#64748b" stroke-width="2"/>
        <line x1="100" y1="30" x2="100" y2="170" stroke="#64748b" stroke-width="2"/>
        <line x1="100" y1="160" x2="200" y2="40" stroke="#f43f5e" stroke-width="3"/>
        <text x="135" y="145" fill="#f59e0b" font-size="11" font-weight="bold">νc</text>
        <text x="65" y="165" fill="#f43f5e" font-size="11" font-weight="bold">-We</text>
        <text x="160" y="70" fill="#38bdf8" font-size="11">Slope = h</text>
        <text x="105" y="40" fill="#f8fafc" font-size="10">KE_max</text>
        <text x="195" y="145" fill="#f8fafc" font-size="10">ν</text>
        <!-- Compton diagram -->
        <circle cx="270" cy="100" r="14" fill="#334155" stroke="#38bdf8" stroke-width="2"/>
        <text x="264" y="104" fill="#38bdf8" font-size="11">e⁻</text>
        <path d="M 230 100 Q 240 85 250 100 T 270 100" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="225" y="80" fill="#f59e0b" font-size="10">hν (Photon)</text>
        <line x1="280" y1="95" x2="360" y2="55" stroke="#38bdf8" stroke-width="2"/>
        <text x="365" y="60" fill="#38bdf8" font-size="10">e⁻ scattered</text>
        <path d="M 280 105 Q 310 130 350 145" fill="none" stroke="#f59e0b" stroke-width="2"/>
        <text x="355" y="150" fill="#f59e0b" font-size="10">hν' (λ' > λ)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: حساب الظاهرة الكهروضوئية وسرعة الإلكترونات المتحررة',
        titleEn: 'Problem: Photoelectric Effect & Maximum Electron Kinetic Energy',
        problemAr: 'سقط ضوء طوله الموجي $\\lambda = 3000\\text{ \\AA}$ ($300\\text{ nm}$) على سطح فلز دالة شغله $W_e = 2.4\\text{ eV}$. احسب: 1) طاقة الفوتون الساقط بالجول وبالإلكترون فولت، 2) تردد العتبة للفلز، 3) أقصى طاقة حركة للإلكترونات الكهروضوئية المنبعثة، 4) أقصى سرعة تنطلق بها الإلكترونات. (علماً بأن $h = 6.625\\times 10^{-34}\\text{ J}\\cdot\\text{s}, c = 3\\times 10^8\\text{ m/s}, e = 1.6\\times 10^{-19}\\text{ C}, m_e = 9.1\\times 10^{-31}\\text{ kg}$).',
        problemEn: 'Light of wavelength λ = 3000 Å (300 nm) strikes a metal surface with work function We = 2.4 eV. Calculate: 1) Incident photon energy in J and eV, 2) Threshold frequency νc, 3) Maximum kinetic energy of emitted electrons, 4) Maximum electron velocity.',
        stepsAr: [
          '1) طاقة الفوتون الساقط: $E = \\frac{h c}{\\lambda} = \\frac{6.625\\times 10^{-34} \\times 3\\times 10^8}{3000\\times 10^{-10}} = 6.625\\times 10^{-19}\\text{ J}$.',
          'تحويلها إلى eV: $E = \\frac{6.625\\times 10^{-19}}{1.6\\times 10^{-19}} \\approx 4.14\\text{ eV}$.',
          '2) دالة الشغل بالجول: $W_e = 2.4 \\times 1.6\\times 10^{-19} = 3.84\\times 10^{-19}\\text{ J}$.',
          'تردد العتبة: $\\nu_c = \\frac{W_e}{h} = \\frac{3.84\\times 10^{-19}}{6.625\\times 10^{-34}} \\approx 5.8\\times 10^{14}\\text{ Hz}$.',
          '3) أقصى طاقة حركة: $\\text{KE}_{max} = E - W_e = 4.14 - 2.4 = 1.74\\text{ eV} = 1.74 \\times 1.6\\times 10^{-19} = 2.784\\times 10^{-19}\\text{ J}$.',
          '4) أقصى سرعة للإلكترونات: $\\text{KE} = \\frac{1}{2}m v^2 \\implies v = \\sqrt{\\frac{2 \\times \\text{KE}}{m_e}} = \\sqrt{\\frac{2 \\times 2.784\\times 10^{-19}}{9.1\\times 10^{-31}}} \\approx 7.82\\times 10^5\\text{ m/s}$.'
        ],
        stepsEn: [
          '1) Photon energy: E = hc/λ = 6.625×10^-19 J = 4.14 eV.',
          '2) Threshold frequency: νc = We / h = (2.4 × 1.6×10^-19) / 6.625×10^-34 = 5.8×10^14 Hz.',
          '3) Maximum KE = E - We = 4.14 - 2.4 = 1.74 eV = 2.784×10^-19 J.',
          '4) Velocity: v = √[2·KE / me] = √[2 × 2.784×10^-19 / 9.1×10^-31] = 7.82×10^5 m/s.'
        ],
        finalAnswerAr: 'طاقة الفوتون = 4.14 eV، تردد العتبة = 5.8×10^14 Hz، طاقة الحركة KE = 1.74 eV، والسرعة v = 7.82×10^5 m/s.',
        finalAnswerEn: 'E = 4.14 eV, νc = 5.8×10^14 Hz, KE_max = 1.74 eV, and vmax = 7.82×10^5 m/s.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-5',
        problemAr: 'أوجد الطول الموجي المصاحب لحركة إلكترون عُجل في مجهر إلكتروني تحت فرق جهد قدره $V = 100\\text{ V}$.',
        problemEn: 'Find the de Broglie matter wavelength associated with an electron accelerated in an electron microscope through V = 100 V.',
        solutionStepsAr: [
          'طاقة حركة الإلكترون: $\\text{KE} = e V = 1.6\\times 10^{-19} \\times 100 = 1.6\\times 10^{-17}\\text{ J}$.',
          'سرعة الإلكترون: $v = \\sqrt{\\frac{2 \\text{KE}}{m_e}} = \\sqrt{\\frac{2 \\times 1.6\\times 10^{-17}}{9.1\\times 10^{-31}}} = 5.93\\times 10^6\\text{ m/s}$.',
          'طول موجة دي برولي: $\\lambda = \\frac{h}{m_e v} = \\frac{6.625\\times 10^{-34}}{9.1\\times 10^{-31} \\times 5.93\\times 10^6} \\approx 1.23\\times 10^{-10}\\text{ m} = 1.23\\text{ \\AA}$.'
        ],
        finalAnswerAr: 'الطول الموجي دي برولي λ = 1.23 Å (0.123 nm)'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-5',
        questionAr: 'في ظاهرة تأثير كومتون، بعد تصادم فوتون أشعة جاما بالإلكترون الحر الساكن، أي الكميات الآتية للفوتون المشتت تظل ثابتة دون أي تغير؟',
        questionEn: 'In the Compton effect, after a gamma photon collides with a stationary free electron, which of the following photon properties remains STRICTLY CONSTANT?',
        optionsAr: ['سرعة انتشار الفوتون في الفراغ (c)', 'طاقة الفوتون وتردده', 'الطول الموجي للفوتون', 'كمية حركة الفوتون'],
        optionsEn: ['Speed of propagation in vacuum (c)', 'Photon energy and frequency', 'Photon wavelength', 'Photon linear momentum'],
        correctIndex: 0,
        explanationAr: 'جميع الفوتونات الكهرومغناطيسية تنتشر في الفراغ بسرعة ثابتة تساوي سرعة الضوء $c = 3\\times 10^8\\text{ m/s}$ لا تتغير قبل التصادم أو بعده، بينما تقل طاقته وتردده ويزداد طوله الموجي.',
        explanationEn: 'Photons always travel at the universal invariant speed of light in vacuum c = 3×10^8 m/s regardless of energy loss.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy5',
      titleAr: 'اختبار إتقان الفصل الخامس: ازدواجية الموجة والجسيم وظاهرة كومتون',
      titleEn: 'Mastery Quiz: Dual Nature of Wave & Particle & Photoelectric Effect',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy5-1',
          textAr: 'عند مضاعفة شدة الضوء الساقط (أحادي اللون وبتردد أكبر من تردد العتبة) على سطح خلية كهروضوئية، فإن طاقة الحركة العظمى للإلكترونات المنبعثة:',
          textEn: 'When the intensity of monochromatic light (with frequency > νc) incident on a photocell is doubled, the maximum kinetic energy of emitted electrons:',
          optionsAr: ['تظل ثابتة لا تتغير (ويتضاعف عدد الإلكترونات وتيار التشبع فقط)', 'تتضاعف وتصبح مثلي قيمتها', 'تزداد إلى أربعة أمثالها', 'تقل إلى النصف'],
          optionsEn: ['Remains unchanged (only photon count and saturation current double)', 'Doubles in value', 'Quadruples', 'Halves'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين شدة الضوء (عدد الفوتونات) وتردد الضوء (طاقة الفوتون الواحد)',
          conceptTestedEn: 'Light intensity (photon flux) vs photon frequency (energy per particle)',
          explanationAr: 'طاقة حركة الإلكترونات $\\text{KE}_{max} = h\\nu - W_e$ تتوقف فقط على تردد الضوء الساقط ونوع الفلز، ولا تعتمد على شدة الضوء إطلاقاً.',
          explanationEn: 'Kinetic energy depends strictly on individual photon energy hν and work function We, not on the total number of incident photons.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy5-2',
          textAr: 'النسبة بين كمية حركة فوتون وطاقته ($p/E$) تساوي:',
          textEn: 'The ratio between a photon\'s linear momentum and its energy (p/E) is equal to:',
          optionsAr: ['مقلوب سرعة الضوء في الفراغ (1/c)', 'سرعة الضوء في الفراغ (c)', 'ثابت بلانك (h)', 'مربع سرعة الضوء (c²)'],
          optionsEn: ['Reciprocal of speed of light (1/c)', 'Speed of light (c)', 'Planck\'s constant (h)', 'Square of speed of light (c²)'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقات الفيزيائية لكمية حركة وطاقة وكتلة الفوتون',
          conceptTestedEn: 'Relativistic photon momentum and energy relations',
          explanationAr: 'طاقة الفوتون $E = p \\cdot c \\implies \\frac{p}{E} = \\frac{1}{c}$.',
          explanationEn: 'Photon momentum p = E/c, thus p/E = 1/c.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-phy5-3',
          textAr: 'جسمان كتلة الأول ضعف كتلة الثاني ($m_1 = 2m_2$) وطاقة حركة الأول نصف طاقة حركة الثاني ($\\text{KE}_1 = 0.5\\text{KE}_2$). فإن النسبة بين طولي موجتي دي برولي المصاحبة لحركتيهما $\\frac{\\lambda_1}{\\lambda_2}$ تساوي:',
          textEn: 'Two particles: m1 = 2m2 and KE1 = 0.5 KE2. The ratio of their de Broglie wavelengths λ1/λ2 is:',
          optionsAr: ['1 : 1 (متساويان)', '1 : 2', '2 : 1', '1 : 4'],
          optionsEn: ['1 : 1 (Equal)', '1 : 2', '2 : 1', '1 : 4'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين طول موجة دي برولي والكتلة وطاقة الحركة',
          conceptTestedEn: 'De Broglie wavelength formula λ = h / √(2m·KE)',
          explanationAr: '$\\lambda = \\frac{h}{p} = \\frac{h}{\\sqrt{2 m \\cdot \\text{KE}}}$. إذن $\\frac{\\lambda_1}{\\lambda_2} = \\sqrt{\\frac{m_2 \\cdot \\text{KE}_2}{m_1 \\cdot \\text{KE}_1}} = \\sqrt{\\frac{m_2 \\cdot \\text{KE}_2}{(2m_2) \\cdot (0.5\\text{KE}_2)}} = \\sqrt{\\frac{1}{1}} = 1$.',
          explanationEn: 'λ = h / √(2m·KE). Since (2m) × (0.5 KE) = m·KE, the product is identical and λ1/λ2 = 1.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── CHAPTER 6: ATOMIC SPECTRA & X-RAYS ──
  {
    id: 'h12-phy-6',
    order: 6,
    titleAr: 'المحاضرة 6: الفصل السادس: الأطياف الذرية لطيف الهيدروجين، المطياف، والأشعة السينية (أنبوبة كولدج)',
    titleEn: 'Lecture 6: Chapter 6: Atomic Spectra, Bohr Model of Hydrogen, Spectrometer & X-Rays (Coolidge Tube)',
    subtitleAr: 'نموذج بور لذرة الهيدروجين ($E_n = -13.6/n^2\\text{ eV}$)، متسلسلات ليمان وبالمر وباشن وبراكت وفوند، أنواع الأطياف (انبعاث وامتصاص وخطي ومستمر)، وخصائص وإنتاج الأشعة السينية',
    subtitleEn: 'Master Bohr hydrogen postulates, Lyman/Balmer/Paschen/Brackett/Pfund spectral series, continuous vs line spectra, Fraunhofer solar absorption lines, Coolidge X-ray tube mechanisms, and Bremsstrahlung vs characteristic line radiation.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الثاني: مقدمة في الفيزياء الحديثة',
    termEn: 'Part 2: Introduction to Modern Physics',
    unitTitleAr: 'الفصل السادس: الأطياف الذرية والأشعة السينية',
    unitTitleEn: 'Chapter 6: Atomic Spectra & X-Rays',
    lessonNumberAr: 'الدرس 1 و 2: متسلسلات طيف الهيدروجين، المطياف، وتوليد الأشعة السينية',
    lessonNumberEn: 'Lessons 1 & 2: Hydrogen Spectral Series, Spectrometer & X-Ray Generation',

    warmupHookAr: 'كيف استطاع علماء الفلك معرفة العناصر المكونة للغلاف الجوي للشمس والنجوم التي تبعد عنا مليارات الكيلومترات دون أن يسافر إليها أحد؟ الإجابة في "البصمة الذرية"! كل عنصر في الكون يمتلك طيفاً خطياً مميزاً لا يتطابق مع أي عنصر آخر تماماً كبصمة الإصبع عند البشر. كيف فسر نموذج بور متسلسلات طيف الهيدروجين وكيف نولد الأشعة السينية التي تخترق أجسادنا لتكشف الكسور؟',
    warmupHookEn: 'Every element in the universe exhibits a unique atomic emission line spectrum acting as a distinct cosmic fingerprint. Niels Bohr\'s quantum atomic model deciphered the spectral series of hydrogen and paved the way for Röntgen\'s X-ray generation in medical radiography and crystal structure crystallography.',

    keyConceptsAr: [
      'فروض نيلز بور لذرة الهيدروجين: تكميم كمية الحركة الزاوية للإلكترون $m v r = \\frac{n h}{2\\pi}$، وطاقة المستوى المداري $E_n = -\\frac{13.6}{n^2}\\text{ eV}$',
      'شرط انبعاث الفوتون: عند انتقال الإلكترون من مستوى طاقة أعلى $E_{upper}$ إلى مستوى طاقة أدنى $E_{lower}$ ينبعث فوتون طاقته: $\\Delta E = E_{upper} - E_{lower} = h\\nu = \\frac{hc}{\\lambda}$',
      'متسلسلات طيف ذرة الهيدروجين: 1) ليمان ($n \\to 1$، فوق بنفسجية - أعلى طاقة)، 2) بالمر ($n \\to 2$، ضوء مرئي)، 3) باشن ($n \\to 3$، تحت حمراء قريبة)، 4) براكت ($n \\to 4$، تحت حمراء متوسطة)، 5) فوند ($n \\to 5$، تحت حمراء بعيدة - أقل طاقة)',
      'أنواع الأطياف: طيف انبعاث مستمر (جميع الأطوال الموجية متصلة كالمصباح المتوهج)، طيف انبعاث خطي (خطوط ملونة ساطعة على خلفية مظلمة كطيف الغازات المتوهجة)، وطيف امتصاص خطي (خطوط مظلمة على خلفية ملونة كخطوط فرانهوفر في الشمس)',
      'المطياف (Spectrometer): جهاز لتحليل الضوء والحصول على طيف نقي وتقدير درجات حرارة النجوم ومكوناتها',
      'الأشعة السينية (X-Rays): موجات كهرومغناطيسية غير مرئية ذات تردد عالي جداً وأطوال موجية قصيرة ($10^{-8}\\text{ m}$ إلى $10^{-13}\\text{ m}$)',
      'أنبوبة كولدج لتوليد الأشعة السينية: طيف مستمر (إشعاع الكبح / الفرملة Bremsstrahlung: $\\lambda_{min} = \\frac{hc}{eV}$ يتوقف فقط على فرق الجهد $V$)، وطيف خطي مميز (ينتج من انتقال الإلكترونات بين المستويات الداخلية لذرات مادة الهدف ويتوقف فقط على العدد الذري $Z$)'
    ],
    keyConceptsEn: [
      'Bohr Hydrogen Model: Angular momentum quantization mvr = n·h/(2π); Energy levels En = -13.6/n² eV',
      'Photon Emission: Transition from Eupper to Elower emits photon ΔE = Eupper - Elower = hν = hc/λ',
      'Hydrogen Series: 1) Lyman (n➔1, UV - Highest energy), 2) Balmer (n➔2, Visible), 3) Paschen (n➔3, Near IR), 4) Brackett (n➔4, Mid IR), 5) Pfund (n➔5, Far IR)',
      'Spectrum Classification: Continuous emission, Line emission (Atomic fingerprint), and Line absorption (Fraunhofer solar lines)',
      'Spectrometer: Optical instrument utilizing collimator, prism, and telescope to produce pure non-overlapping spectra',
      'X-Rays: High-frequency electromagnetic radiation (0.01 nm to 10 nm) produced via Coolidge Tube',
      'X-Ray Spectra: Continuous Bremsstrahlung radiation λmin = hc/(eV) dependent on accelerating voltage V vs Characteristic Line spectrum dependent solely on target atomic number Z'
    ],

    conceptMapAr: [
      'نموذج بور ➔ مستويات الطاقة $E_n = -13.6/n^2\\text{ eV}$ ➔ انتقال الإلكترونات ➔ متسلسلات طيف الهيدروجين (ليمان، بالمر، باشن، براكت، فوند)',
      'تحليل الضوء بالمطياف ➔ طيف انبعاث (مستمر وخطي) + طيف امتصاص (خطوط فرانهوفر لإثبات وجود الهيليوم والهيدروجين في الشمس)',
      'أنبوبة كولدج ➔ تصادم الإلكترونات بمادة الهدف (التنجستين) ➔ إشعاع الكبح المستمر ($\u03bb_{min} = hc/eV$) + الطيف الخطي المميز للأشعة السينية'
    ],
    conceptMapEn: [
      'Bohr Atomic Postulates ➔ En = -13.6/n² eV ➔ Quantum Jumps ➔ 5 Spectral Series (Lyman UV to Pfund IR)',
      'Spectroscopic Analysis ➔ Continuous/Line Emission + Solar Absorption (Fraunhofer H/He lines)',
      'Coolidge Tube ➔ Electron Bombardment of Target ➔ Continuous Bremsstrahlung (λmin = hc/eV) + Characteristic Line Transitions'
    ],

    learningOutcomesAr: [
      'أن يحسب الطالب أقصر وأطول طول موجي في أي متسلسلة من متسلسلات طيف ذرة الهيدروجين.',
      'أن يقارن بدقة بين الطيف المستمر والطيف الخطي المميز للأشعة السينية من حيث المنشأ والعوامل المؤثرة.',
      'أن يفسر تطبيقات الأشعة السينية في التصوير الطبي والعظام وفحص عيوب الصناعة ودراسة التركيب البلوري للمعادن (حيود الأشعة).'
    ],
    learningOutcomesEn: [
      'Calculate the maximum and minimum wavelengths for all hydrogen spectral series.',
      'Differentiate between continuous Bremsstrahlung braking radiation and characteristic line X-rays.',
      'Explain X-ray applications: medical radiography, metal fault detection, and Bragg crystal diffraction crystallography.'
    ],

    vocabulary: [
      {
        termAr: 'خطوط فرانهوفر (Fraunhofer Lines)',
        termEn: 'Fraunhofer Absorption Lines',
        definitionAr: 'خطوط امتصاص خطية مظلمة تظهر في الطيف الشمسي، نتجت عن امتصاص الغازات الموجودة في جو الشمس (الهيدروجين والهيليوم) للأطوال الموجية الخاصة بطيف انبعاثها.',
        definitionEn: 'Dark absorption lines in the solar spectrum caused by vaporized elements (mainly H and He) in the sun\'s outer atmosphere absorbing characteristic wavelengths.'
      },
      {
        termAr: 'إشعاع الكبح أو الفرملة (Bremsstrahlung Radiation)',
        termEn: 'Bremsstrahlung / Braking Radiation',
        definitionAr: 'الطيف المستمر للأشعة السينية الناتج عن تباطؤ الإلكترونات المعجلة وفقدها طاقتها الحركية تدريجياً نتيجة تنافرها مع إلكترونات ذرات مادة الهدف في أنبوبة كولدج.',
        definitionEn: 'Continuous X-ray spectrum generated when incident high-speed electrons are decelerated and deflected by the electric field of target atomic nuclei.'
      },
      {
        termAr: 'الطيف النقي (Pure Spectrum)',
        termEn: 'Pure Spectrum',
        definitionAr: 'طيف تكون فيه ألوان أو خطوط الأطياف منفصلة تماماً وغير متداخلة، حيث يركز كل لون في بؤرة خاصة به بواسطة المطياف.',
        definitionEn: 'A spectrum in which each wavelength is focused at a distinct focal point without chromatic overlapping, produced via spectrometer telescope optics.'
      }
    ],

    mainContentAr: `
### 1. متسلسلات طيف ذرة الهيدروجين الخطي
* **حساب طاقة المستوى:** $E_n = -\\frac{13.6}{n^2}\\text{ eV} = -\\frac{13.6 \\times 1.6\\times 10^{-19}}{n^2}\\text{ J}$.
  * $E_1 = -13.6\\text{ eV}$ (المستوى الأرضي)، $E_2 = -3.4\\text{ eV}$، $E_3 = -1.51\\text{ eV}$، $E_4 = -0.85\\text{ eV}$، $E_5 = -0.54\\text{ eV}$، $E_\\infty = 0$.
* **متسلسلات الطيف الخمس:**
  1. **ليمان (Lyman):** هبوط إلى $n = 1$ (منطقة فوق البنفسجية UV - أعلى تردد وأكبر طاقة).
  2. **بالمر (Balmer):** هبوط إلى $n = 2$ (منطقة الضوء المرئي Visible - المتسلسلة الوحيدة المرئية للعين).
  3. **باشن (Paschen):** هبوط إلى $n = 3$ (منطقة الأشعة تحت الحمراء القريبة Near IR).
  4. **براكت (Brackett):** هبوط إلى $n = 4$ (منطقة الأشعة تحت الحمراء IR).
  5. **فوند (Pfund):** هبوط إلى $n = 5$ (منطقة الأشعة تحت الحمراء البعيدة Far IR - أقل طاقة وأكبر أطوال موجية).
* **أعلى طاقة وأقصر طول موجي ($\\lambda_{min}$):** عند انتقال الإلكترون من $n = \\infty$ إلى المستوى $n$:
  $$\\Delta E_{max} = E_\\infty - E_n = 0 - E_n = \\frac{hc}{\\lambda_{min}}$$
* **أقل طاقة وأكبر طول موجي ($\\lambda_{max}$):** عند انتقال الإلكترون من المستوى المجاور مباشرة ($n+1$) إلى $n$:
  $$\\Delta E_{min} = E_{n+1} - E_n = \\frac{hc}{\\lambda_{max}}$$

---

### 2. أنواع الأطياف والمطياف
* **طيف الانبعاث (Emission Spectrum):**
  * **مستمر:** يشمل مدى متصلاً من الأطوال الموجية (إشعاع الأجسام الصلبة المتوهجة مثل فتيلة التنجستين).
  * **خطي:** يحتوي على خطوط طولية ملونة محددة مميزة للعنصر (إشعاع الغازات في أنابيب التفريغ تحت ضغط منخفض).
* **طيف الامتصاص (Absorption Spectrum):**
  * طيف مستمر ينقص منه بعض الأطوال الموجية التي تمتصها الغازات (خطوط فرانهوفر في الطيف الشمسي).

---

### 3. الأشعة السينية (X-Rays) وأنبوبة كولدج
* **أنبوبة كولدج (Coolidge Tube):** تسخين الفتيلة لتحرير الإلكترونات بالانبعاث الحراري ➔ تعجيلها بفرق جهد كهربي عالٍ ($V$) ➔ تصادمها بمادة الهدف (عنصر التنجستين ذو درجة انصهار وعدد ذري مرتفع) ➔ انبعاث الأشعة السينية.
* **نوعا طيف الأشعة السينية:**
  1. **الطيف المستمر (إشعاع الفرملة / الكبح):**
     $$\\lambda_{min} = \\frac{hc}{eV}$$
     * يتوقف فقط على **فرق الجهد ($V$)** بين الفتيلة والهدف، ولا يعتمد على مادة الهدف!
  2. **الطيف الخطي المميز:**
     $$\\Delta E = E_2 - E_1 = \\frac{hc}{\\lambda}$$
     * يتوقف فقط على **نوع مادة الهدف (العدد الذري $Z$)**، حيث يقل الطول الموجي كلما زاد العدد الذري $Z$، ولا يعتمد على فرق الجهد بين القطبين.
* **خصائص وتطبيقات الأشعة السينية:**
  * قدرة هائلة على اختراق الأجسام $\\implies$ الكشف عن الكسور وشظايا العظام والفحص الأمني بالمطارات.
  * قابليتها للحيود عند مرورها في البلورات $\\implies$ دراسة التركيب البلوري للمواد وتحديد المسافات البينية.
  * تأيين الغازات والتأثير على الألواح الفوتوغرافية الحساسة.
    `,
    mainContentEn: `
### 1. Hydrogen Spectral Series
* $E_n = -\\frac{13.6}{n^2}\\text{ eV}$.
* Lyman ($n \\to 1$, UV), Balmer ($n \\to 2$, Visible), Paschen ($n \\to 3$, IR), Brackett ($n \\to 4$, IR), Pfund ($n \\to 5$, Far IR).

### 2. Spectrum Types
* Continuous emission vs Line emission (atomic fingerprint) vs Line absorption (Fraunhofer lines).

### 3. X-Rays in Coolidge Tube
* Continuous Braking Radiation: $\\lambda_{min} = \\frac{hc}{eV}$ (depends only on Accelerating Voltage $V$).
* Characteristic Line Spectrum: $\\lambda = \\frac{hc}{\\Delta E}$ (depends only on Target Atomic Number $Z$).
* Applications: Radiography, Crystal Bragg diffraction, Industrial flaw detection.
    `,

    diagramType: 'bohr_xray_spectrum',
    diagramData: {
      type: 'bohr_levels_xray_curve',
      title: 'مستويات طاقة ذرة الهيدروجين ومنحنى طيف الأشعة السينية',
      svgSnippet: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="160" rx="10" fill="#0f172a" stroke="#a855f7" stroke-width="2"/>
        <!-- Bohr Energy Levels on Left -->
        <line x1="40" y1="160" x2="160" y2="160" stroke="#f43f5e" stroke-width="2"/>
        <text x="165" y="165" fill="#f43f5e" font-size="10">n=1 (-13.6 eV)</text>
        <line x1="40" y1="115" x2="160" y2="115" stroke="#38bdf8" stroke-width="2"/>
        <text x="165" y="120" fill="#38bdf8" font-size="10">n=2 (-3.4 eV)</text>
        <line x1="40" y1="85" x2="160" y2="85" stroke="#10b981" stroke-width="2"/>
        <text x="165" y="90" fill="#10b981" font-size="10">n=3 (-1.51 eV)</text>
        <line x1="40" y1="65" x2="160" y2="65" stroke="#f59e0b" stroke-width="2"/>
        <text x="165" y="70" fill="#f59e0b" font-size="10">n=4</text>
        <line x1="40" y1="45" x2="160" y2="45" stroke="#94a3b8" stroke-width="1.5"/>
        <text x="165" y="50" fill="#94a3b8" font-size="10">n=∞</text>
        <!-- X-Ray spectrum curve on Right -->
        <line x1="250" y1="160" x2="410" y2="160" stroke="#64748b" stroke-width="2"/>
        <line x1="250" y1="40" x2="250" y2="160" stroke="#64748b" stroke-width="2"/>
        <!-- Bremsstrahlung continuous hump + 2 spikes -->
        <path d="M 270 160 Q 290 140 310 90 L 315 45 L 320 90 Q 335 110 345 60 L 350 110 Q 380 140 405 160" fill="none" stroke="#a855f7" stroke-width="2.5"/>
        <text x="260" y="175" fill="#f59e0b" font-size="10" font-weight="bold">λmin (hc/eV)</text>
        <text x="310" y="38" fill="#a855f7" font-size="10" font-weight="bold">طيف خطي مميز</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: حساب أقصر طول موجي في متسلسلة بالمر وأقصر طول موجي للأشعة السينية',
        titleEn: 'Problem: Balmer Series Minimum Wavelength & Minimum X-Ray Wavelength',
        problemAr: 'احسب: 1) أقصر طول موجي في متسلسلة بالمر لطيف الهيدروجين، 2) أقصر طول موجي لأشعة سينية منبعثة من أنبوبة كولدج تعمل بفرق جهد $V = 50\\text{ kV}$. (علماً بأن $h = 6.625\\times 10^{-34}\\text{ J}\\cdot\\text{s}, c = 3\\times 10^8\\text{ m/s}, e = 1.6\\times 10^{-19}\\text{ C}$).',
        problemEn: 'Calculate: 1) Shortest wavelength in hydrogen Balmer series, 2) Minimum continuous X-ray wavelength from a Coolidge tube operating at V = 50 kV.',
        stepsAr: [
          '1) في متسلسلة بالمر: الانتقال ينتهي عند $n = 2$.',
          'أقصر طول موجي (أعلى طاقة) يحدث عند الانتقال من $n = \\infty$ إلى $n = 2$:',
          '$\\Delta E = E_\\infty - E_2 = 0 - (-3.4\\text{ eV}) = 3.4\\text{ eV} = 3.4 \\times 1.6\\times 10^{-19} = 5.44\\times 10^{-19}\\text{ J}$.',
          '$\\lambda_{min} = \\frac{hc}{\\Delta E} = \\frac{6.625\\times 10^{-34} \\times 3\\times 10^8}{5.44\\times 10^{-19}} \\approx 3.653\\times 10^{-7}\\text{ m} = 365.3\\text{ nm} = 3653\\text{ \\AA}$.',
          '2) أقصر طول موجي للأشعة السينية (طيف الكبح المستمر):',
          '$\\lambda_{min} = \\frac{hc}{eV} = \\frac{6.625\\times 10^{-34} \\times 3\\times 10^8}{1.6\\times 10^{-19} \\times 50000} = \\frac{1.9875\\times 10^{-25}}{8\\times 10^{-15}} \\approx 0.248\\times 10^{-10}\\text{ m} = 0.248\\text{ \\AA}$.'
        ],
        stepsEn: [
          '1) Balmer shortest wavelength: Transition from n=∞ to n=2 ➔ ΔE = 3.4 eV = 5.44×10^-19 J.',
          'λmin = hc/ΔE = 3.653×10^-7 m = 365.3 nm = 3653 Å.',
          '2) Minimum X-ray wavelength: λmin = hc/(eV) = (6.625×10^-34 × 3×10^8) / (1.6×10^-19 × 50,000) = 0.248 Å.'
        ],
        finalAnswerAr: 'أقصر طول موجي لبالمر = 3653 Å، وأقصر طول موجي للأشعة السينية = 0.248 Å.',
        finalAnswerEn: 'Balmer λmin = 3653 Å, and X-ray λmin = 0.248 Å.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-6',
        problemAr: 'علل: ظهور خطوط سوداء في الطيف الشمسي تسمى خطوط فرانهوفر.',
        problemEn: 'Explain why dark Fraunhofer absorption lines appear in the solar spectrum.',
        solutionStepsAr: [
          'يشع باطن الشمس طيفاً مستمراً يضم جميع الأطوال الموجية.',
          'عند مرور هذا الضوء عبر الغلاف الغازي الخارجي المحيط بالشمس (الذي يحتوي على بخار عناصر الهيدروجين والهيليوم)، تمتص هذه الغازات من الطيف المستمر الأطوال الموجية الخاصة بطيف انبعاثها الخطي.',
          'تظهر هذه الأطوال الموجية الممتصة على شكل خطوط مظلمة على الخلفية الملونة للطيف الشمسي المستمر.'
        ],
        finalAnswerAr: 'بسبب امتصاص غازي الهيدروجين والهيليوم في جو الشمس للأطوال الموجية المميزة لهما من الطيف المستمر الصادر من باطن الشمس.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-6',
        questionAr: 'عند زيادة فرق الجهد بين الفتيلة والهدف في أنبوبة كولدج لإنتاج الأشعة السينية، فإن:',
        questionEn: 'When the potential difference between filament and target in a Coolidge X-ray tube is increased:',
        optionsAr: ['يقل أقصر طول موجي للطيف المستمر (λmin) ولا يتغير الطول الموجي للطيف الخطي المميز', 'يزداد الطول الموجي للطيف المستمر والطيف الخطي معاً', 'يقل الطول الموجي للطيف الخطي المميز فقط', 'تظل جميع الأطوال الموجية ثابتة دون تغير'],
        optionsEn: ['Minimum continuous wavelength λmin decreases while characteristic line wavelength remains unchanged', 'Both continuous and line wavelengths increase', 'Only characteristic line wavelength decreases', 'All wavelengths remain strictly constant'],
        correctIndex: 0,
        explanationAr: 'من العلاقة $\\lambda_{min} = \\frac{hc}{eV}$ يقل الطول الموجي الأدنى للطيف المستمر بزيادة فرق الجهد $V$، بينما يتوقف الطيف الخطي المميز على نوع مادة الهدف والعدد الذري $Z$ فقط ولا يتأثر بفرق الجهد.',
        explanationEn: 'Increasing V reduces continuous λmin = hc/(eV). Characteristic line spikes depend solely on target element atomic number Z.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy6',
      titleAr: 'اختبار إتقان الفصل السادس: الأطياف الذرية والأشعة السينية',
      titleEn: 'Mastery Quiz: Atomic Spectra & X-Rays',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy6-1',
          textAr: 'المتسلسلة الطيفية الوحيدة لذرة الهيدروجين التي تقع خطوطها في منطقة الضوء المرئي ويمكن رؤيتها بالعين المجردة هي متسلسلة:',
          textEn: 'The only hydrogen spectral series whose emission lines lie within the visible light region is:',
          optionsAr: ['بالمر (Balmer Series)', 'ليمان (Lyman Series)', 'باشن (Paschen Series)', 'براكت (Brackett Series)'],
          optionsEn: ['Balmer Series', 'Lyman Series', 'Paschen Series', 'Brackett Series'],
          correctIndex: 0,
          conceptTestedAr: 'مناطق الطيف الكهرومغناطيسي لمتسلسلات طيف الهيدروجين',
          conceptTestedEn: 'Electromagnetic regions of hydrogen spectral series',
          explanationAr: 'متسلسلة بالمر ($n \\to 2$) تقع في نطاق الضوء المرئي (Visible spectrum) من 400 إلى 700 نانومتر.',
          explanationEn: 'Balmer transitions terminating on n = 2 correspond to visible photon wavelengths observable by the human eye.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy6-2',
          textAr: 'خاصية الأشعة السينية التي مكّنت العلماء من دراسة التركيب البلوري وتحديد المسافات البينية بين ذرات المواد الصلبة هي:',
          textEn: 'The physical property of X-rays that enables determination of crystal structure and interatomic lattices is:',
          optionsAr: ['قابليتها للحيود (Diffraction) عند نفاذها بين طبقات البلورة', 'قدرتها العالية على تأيين الغازات', 'طبيعتها الكهرومغناطيسية وسرعتها الفائقة', 'تأثيرها الفوتوغرافي على الألواح الحساسة'],
          optionsEn: ['Diffraction capability when passing through crystal atomic planes', 'Gas ionization capability', 'High velocity in vacuum', 'Photographic plate exposure'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات وخواص الأشعة السينية وحيود براغ في البلورات',
          conceptTestedEn: 'X-ray diffraction and Bragg crystallography principles',
          explanationAr: 'لأن المسافات البينية بين ذرات البلورة في حدود أطوال موجات الأشعة السينية، تعمل البلورة كمحزوز حيود فتحدث ظاهرة الحيود والتداخل البناء.',
          explanationEn: 'Because interatomic crystal spacings are comparable to X-ray wavelengths, crystal lattices act as natural diffraction gratings (Bragg\'s law).',
          difficulty: 'medium'
        },
        {
          id: 'qh12-phy6-3',
          textAr: 'إذا كان أكبر طول موجي في متسلسلة ليمان لذرة الهيدروجين هو $\\lambda_1$، فإن أكبر طول موجي في متسلسلة بالمر $\\lambda_2$ يساوي بدلالة $\\lambda_1$:',
          textEn: 'If the maximum wavelength in the Lyman series is λ1, the maximum wavelength in the Balmer series λ2 in terms of λ1 is:',
          optionsAr: ['27/5 λ1 (5.4 λ1)', '4/3 λ1', '9/4 λ1', '3/2 λ1'],
          optionsEn: ['27/5 λ1 (5.4 λ1)', '4/3 λ1', '9/4 λ1', '3/2 λ1'],
          correctIndex: 0,
          conceptTestedAr: 'النسبة بين أطوال موجات متسلسلات طيف الهيدروجين',
          conceptTestedEn: 'Hydrogen spectral series energy difference ratios',
          explanationAr: 'أكبر طول موجي في ليمان ($2 \\to 1$): $\\Delta E_1 = \\frac{3}{4}(13.6) \\implies \\lambda_1 = \\frac{hc}{(3/4) \\times 13.6}$. أكبر طول موجي في بالمر ($3 \\to 2$): $\\Delta E_2 = (\\frac{1}{4} - \\frac{1}{9})(13.6) = \\frac{5}{36}(13.6) \\implies \\lambda_2 = \\frac{hc}{(5/36) \\times 13.6}$. بقسمة المعادلتين: $\\frac{\\lambda_2}{\\lambda_1} = \\frac{3/4}{5/36} = \\frac{3}{4} \\times \\frac{36}{5} = \\frac{27}{5} = 5.4$.',
          explanationEn: 'Lyman max λ: 2➔1 transition (ΔE = 3/4). Balmer max λ: 3➔2 transition (ΔE = 5/36). The wavelength ratio is (3/4) / (5/36) = 27/5 = 5.4.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── CHAPTER 7: LASERS (LIGHT AMPLIFICATION BY STIMULATED EMISSION) ──
  {
    id: 'h12-phy-7',
    order: 7,
    titleAr: 'المحاضرة 7: الفصل السابع: الليزر، الانبعاث المستحث، ليزر الهيليوم-نيون، والهولوجرام والتطبيقات',
    titleEn: 'Lecture 7: Chapter 7: Lasers, Stimulated Emission, Population Inversion, He-Ne Laser & Holography',
    subtitleAr: 'الانبعاث التلقائي والمستحث، شروط إنتاج الليزر (الإسكان المعكوس، المستوى شبه المستقر، والتجويف الرنيني)، ليزر الهيليوم-نيون، خصائص أشعة الليزر، والتصوير ثلاثي الأبعاد (الهولوجرافيا)',
    subtitleEn: 'Master Spontaneous vs Stimulated emission, conditions for laser action, population inversion in metastable states, optical resonant cavities, Helium-Neon laser operation, laser beam properties, and 3D Holography.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الثاني: مقدمة في الفيزياء الحديثة',
    termEn: 'Part 2: Introduction to Modern Physics',
    unitTitleAr: 'الفصل السابع: الليزر وتطبيقاته',
    unitTitleEn: 'Chapter 7: Lasers & Modern Applications',
    lessonNumberAr: 'الدرس 1 و 2: الانبعاث المستحث وليزر الهيليوم-نيون وخصائص الليزر والهولوجرام',
    lessonNumberEn: 'Lessons 1 & 2: Stimulated Emission, He-Ne Laser Mechanism, Properties & Holography',

    warmupHookAr: 'إذا وجهت ضوء مصباح يدوي قوي نحو القمر، يتشتت شعاعه ويختفي في الفضاء بعد بضعة كيلومترات. ولكن إذا وجهت نبضة ليزر من مرصد أرضي نحو القمر (المسافة 384,000 كم)، تصل بقعة الضوء بحجم مترين فقط وتنعكس عائدة إلى الأرض دون أن تفقد شدتها أو تتشتت! ما السر الفيزيائي وراء هذا التماسك والتركيز الخارق لشعاع الليزر؟',
    warmupHookEn: 'Conventional flashlight beams diverge rapidly over short distances, whereas laser beams maintain tight collimation across hundreds of thousands of kilometers to the Moon and back. This extraordinary directional coherence arises from stimulated photon amplification inside optical resonant cavities.',

    keyConceptsAr: [
      'الانبعاث التلقائي (Spontaneous Emission): انتقال الذرة المثارة تلقائياً إلى المستوى الأرضي بعد انتهاء فترة العمر ($\\approx 10^{-8}\\text{ s}$) مع انبعاث فوتون عشوائي الطور والاتجاه (مصابيح الإضاءة العادية)',
      'الانبعاث المستحث (Stimulated Emission): حث الذرة المثارة قبل انتهاء فترة العمر بواسطة فوتون ساقط طاقته تساوي فرق طاقتي المستويين ($h\\nu = E_2 - E_1$)، فينبعث فوتونان متطابقان تماماً في الطاقة والتردد والطور والاتجاه (أساس الليزر)',
      'شروط الفعل الليزري: 1) حالة الإسكان المعكوس (Population Inversion: أن يكون عدد الذرات في مستوى الإثارة شبه المستقر أكبر من عددها في المستوى الأدنى $N_2 > N_1$)، 2) وجود مستوى طاقة شبه مستقر (فترة عمره طويلة نسبياً $\\approx 10^{-3}\\text{ s}$)، 3) التجويف الرنيني (Resonant Cavity: مرايا عاكسة $99.8\\%$ وشبه منفذة $98\\%$ لتضخيم الفوتونات)',
      'ليزر الهيليوم - نيون ($\text{He-Ne Laser}$): الإثارة بالتفريغ الكهربي لذرات الهيليوم إلى المستوى $20.61\\text{ eV}$، ونقل الطاقة بالاصطدام غير المرن لذرات النيون لتصل للمستوى شبه المستقر $20.66\\text{ eV}$ لتقارب المستويين، فينبعث شعاع ليزر مرئي أحمر بطول موجي $\\lambda = 632.8\\text{ nm}$',
      'خصائص أشعة الليزر: 1) النقاء الطيفي (أحادي الطول الموجي $\\Delta\\lambda \\to 0$)، 2) توازي الحزمة وتضاؤل الانفراج (لا تخضع لقانون التربيع العكسي لمسافات طويلة)، 3) الترابط الزماني والمكاني الشديد، 4) الشدة والسطوع الهائل',
      'الهولوجرام والتصوير ثلاثي الأبعاد: استخدام أشعة الليزر المترابطة مع الأشعة المرجعية (Reference Beam) لتسجيل كل من السعة وفرق الطور ($ \\Delta\\phi = \\frac{2\\pi}{\\lambda} \\times \\Delta x $) على اللوح الحساس لتكوين صورة مجسمة ثلاثية الأبعاد كاملة'
    ],
    keyConceptsEn: [
      'Spontaneous Emission: Random decay after natural lifetime (10^-8 s) producing incoherent photons (Standard lamps)',
      'Stimulated Emission: An incident photon (E = E2 - E1) triggers stimulated decay before lifetime expiry, yielding two identical coherent in-phase photons',
      'Laser Action Criteria: 1) Population Inversion (N2 > N1 in metastable state), 2) Metastable State with prolonged lifetime (~10^-3 s), 3) Resonant Cavity (99.8% reflector + 98% partial output coupler) for avalanche amplification',
      'Helium-Neon Laser: Electric discharge excites He atoms (20.61 eV), resonant inelastic collision transfers energy to Neon metastable level (20.66 eV), emitting red laser light at λ = 632.8 nm',
      'Laser Beam Properties: 1) Monochromaticity (Δλ ➔ 0), 2) Spatial/Temporal Coherence, 3) Collimation / Non-divergence (Does not obey inverse square law over short ranges), 4) High Intensity / Brightness',
      '3D Holography: Utilizing coherent laser reference beams to record both amplitude and phase differences (Δϕ = 2π/λ · Δx), reconstructing complete 3D optical holograms'
    ],

    conceptMapAr: [
      'الانبعاث المستحث ➔ الإسكان المعكوس ($N_2 > N_1$) ➔ التجويف الرنيني وتضخيم الفوتونات',
      'ليزر الهيليوم-نيون: تفريغ كهربي ➔ إثارة الهيليوم ($20.61\\text{ eV}$) ➔ تصادم مع النيون ($20.66\\text{ eV}$) ➔ انبعاث ليزر أحمر ($632.8\\text{ nm}$)',
      'خصائص الليزر (نقاء طيفي، توازي، ترابط، شدة) ➔ تطبيقات (طب، صناعة، اتصالات بالألياف، وهولوجرام ثلاثي الأبعاد)'
    ],
    conceptMapEn: [
      'Stimulated Emission ➔ Population Inversion (N2 > N1) ➔ Resonant Cavity Avalanche Amplification',
      'He-Ne Laser: Electric Discharge ➔ He Excitation (20.61 eV) ➔ Collision with Ne (20.66 eV) ➔ Red Laser (632.8 nm)',
      'Laser Characteristics (Monochromatic, Coherent, Collimated, High Brightness) ➔ Medicine, Fiber Optics & 3D Holography'
    ],

    learningOutcomesAr: [
      'أن يقارن بدقة بين خصائص فوتونات الانبعاث التلقائي وفوتونات الانبعاث المستحث.',
      'أن يشرح آلية عمل ليزر الهيليوم-نيون ودور كل من ذرات الهيليوم والتفريغ الكهربي والمرايا العاكسة.',
      'أن يفسر فيزيائياً مبدأ عمل التصوير ثلاثي الأبعاد (الهولوجرافيا) ودور فرق الطور والأشعة المرجعية.'
    ],
    learningOutcomesEn: [
      'Contrast spontaneous emission photons with stimulated emission photons regarding phase, coherence, and direction.',
      'Explain the operational mechanics of He-Ne lasers, including resonant collision energy transfer and optical feedback.',
      'Explain the physical principles of 3D holography involving reference beams and phase difference calculations.'
    ],

    vocabulary: [
      {
        termAr: 'الإسكان المعكوس (Population Inversion)',
        termEn: 'Population Inversion',
        definitionAr: 'حالة تكون فيها نسبة ذرات الوسط الفعال الموجودة في مستوى الإثارة شبه المستقر أكبر من نسبة الذرات الموجودة في المستويات الأدنى ($N_2 > N_1$).',
        definitionEn: 'The non-equilibrium state in which a higher fraction of atoms populate an excited metastable energy level than lower ground states.'
      },
      {
        termAr: 'المستوى شبه المستقر (Metastable Energy Level)',
        termEn: 'Metastable Energy Level',
        definitionAr: 'مستوى طاقة إثارة تتميز ذراته بفترة عمر طويلة نسبياً (حوالي $10^{-3}\\text{ s}$) مقارنة بفترة العمر العادية ($10^{-8}\\text{ s}$)، مما يسمح بتراكم الذرات وحدوث الإسكان المعكوس.',
        definitionEn: 'An excited atomic energy state characterized by a relatively prolonged lifetime (~10^-3 s), permitting atom accumulation for population inversion.'
      },
      {
        termAr: 'الأشعة المرجعية (Reference Beam)',
        termEn: 'Reference Beam',
        definitionAr: 'حزمة من أشعة الليزر المترابطة لها نفس الطول الموجي للأشعة الساقطة على الجسم وتتداخل مع الأشعة المنعكسة من الجسم لتكوين نمط التداخل على اللوح الهولوجرافي.',
        definitionEn: 'A coherent laser beam with identical wavelength directed onto a holographic plate to interfere with reflected object waves, recording 3D phase data.'
      }
    ],

    mainContentAr: `
### 1. الانبعاث التلقائي والمستحث
* **الانبعاث التلقائي:**
  * الذرة تعود تلقائياً بعد انقضاء فترة العمر العادية ($10^{-8}\\text{ s}$).
  * الفوتونات المنبعثة غير مترابطة، عشوائية الطور والاتجاه وتنتشر في جميع الاتجاهات (تخضع لقانون التربيع العكسي في الشدة).
* **الانبعاث المستحث:**
  * يسقط فوتون طاقته $h\\nu = E_2 - E_1$ على ذرة مثارة **قبل انتهاء فترة العمر**.
  * ينتج فوتونان متماثلان في التردد والطور والاتجاه والاستقطاب، ويتحركان معاً كحزمة مترابطة وموجهة.

---

### 2. الفعل الليزري وليزر الهيليوم - نيون (He-Ne Laser)
* **المكونات الأساسية لجهاز الليزر:**
  1. **الوسط الفعال (Active Medium):** ذرات أو جزيئات المادة التي تنتج الليزر (خليط غازي من الهيليوم والنيون بنسبة $10 : 1$ تحت ضغط منخفض $0.6\\text{ mm Hg}$).
  2. **مصدر الطاقة (ضخ الطاقة Pumping):** تفريغ كهربي بفرق جهد عالٍ ومستمر أو ترددات راديوية.
  3. **التجويف الرنيني (Resonant Cavity):** مرآتان متعامدتان عند طرفي الأنبوبة (إحداهما عاكسة تماماً بمعامل انعكاس $99.8\\%$ والأخرى شبه منفذة بمعامل انعكاس $98\\%$) لتضخيم الفوتونات بالانعكاسات المتكررة.
* **خطوات إنتاج شعاع الليزر في ليزر He-Ne:**
  * التفريغ الكهربي يثير ذرات الهيليوم لمستوى طاقة شبه مستقر $E_3 = 20.61\\text{ eV}$.
  * تتصادم ذرات الهيليوم المثارة تصادماً غير مرن مع ذرات النيون غير المثارة، ونظراً لتقارب مستويات الطاقة بينهما ($20.61\\text{ eV}$ و $20.66\\text{ eV}$) تنتقل الطاقة لذرات النيون وتتحقق حالة **الإسكان المعكوس** في النيون.
  * تعود بعض ذرات النيون تلقائياً مطلقة فوتونات حمراء بطول موجي $\\lambda = 632.8\\text{ nm}$، وتتحرك موازية لمحور الأنبوبة لتحث باقي الذرات على الانبعاث المستحث.
  * تتضخم الفوتونات داخل التجويف الرنيني حتى تخرج حزمة الليزر من المرآة شبه المنفذة.

---

### 3. خصائص الليزر وتطبيقات الهولوجرام
* **الفرق بين الضوء العادي والليزر:**
  * الضوء العادي متعدد الأطوال الموجية وغير مترابط وينفرج وتتناقص شدته مع مربع المسافة ($I \\propto 1/d^2$).
  * ضوء الليزر أحادي الطول الموجي تماماً ومترابط زمانياً ومكانياً وحزمته متوازية وشدته ثابتة ومرتفعة جداً.
* **التصوير المجسم ثلاثي الأبعاد (الهولوجرافيا):**
  * **التصوير المستوي العادي (2D):** يسجل فقط شدة الضوء وسعة الموجة ($I \\propto A^2$) دون فرق الطور، فتظهر الصورة مسطحة.
  * **الهولوجرام (3D):** يسجل كلاً من سعة الموجة (الشدة) **وفرق الطور**:
    $$\\text{Phase Difference} = \\frac{2\\pi}{\\lambda} \\times \\text{Path Difference} \\quad (\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\cdot \\Delta x)$$
  * بتداخل الأشعة المنعكسة من الجسم مع الأشعة المرجعية المترابطة على فيلم حساس يتكون نمط الهدب (الهولوجرام)، وعند إضاءته بنفس حزمة الليزر المرجعية تتكون صورة تقديرية ثلاثية الأبعاد مجسمة مطابقة تماماً للجسم الأصلي.
    `,
    mainContentEn: `
### 1. Spontaneous vs Stimulated Emission
* Spontaneous: Random decay ($10^{-8}\\text{ s}$), incoherent, inverse square law applies.
* Stimulated: External photon triggers emission before lifetime ends, creating two identical in-phase coherent photons.

### 2. He-Ne Laser Operation
* Active Medium: Helium-Neon gas ($10:1$ ratio).
* Pumping: High-voltage electric discharge excites He ($20.61\\text{ eV}$).
* Inelastic collision transfers energy to Ne ($20.66\\text{ eV}$) achieving Population Inversion.
* Laser emission at $\\lambda = 632.8\\text{ nm}$ (Visible Red).

### 3. Laser Characteristics & 3D Holography
* Properties: Monochromatic, highly coherent, collimated, high brightness.
* Holography records amplitude AND phase difference: $\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\cdot \\Delta x$. Reconstructing with reference laser reproduces a full 3D parallax image.
    `,

    diagramType: 'laser_energy_levels',
    diagramData: {
      type: 'hene_laser_transitions',
      title: 'مخطط مستويات الطاقة وانتقالات ليزر الهيليوم-نيون',
      svgSnippet: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="160" rx="10" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <!-- Helium Column -->
        <line x1="60" y1="160" x2="160" y2="160" stroke="#64748b" stroke-width="2"/>
        <text x="75" y="175" fill="#64748b" font-size="10">He (Ground E0)</text>
        <line x1="60" y1="50" x2="160" y2="50" stroke="#38bdf8" stroke-width="3"/>
        <text x="65" y="42" fill="#38bdf8" font-size="11" font-weight="bold">He E3 (20.61 eV)</text>
        <line x1="110" y1="155" x2="110" y2="55" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4"/>
        <text x="115" y="105" fill="#f59e0b" font-size="9">تفريغ كهربي</text>
        <!-- Collision Arrow -->
        <path d="M 160 50 Q 210 35 260 50" fill="none" stroke="#f43f5e" stroke-width="2.5" marker-end="url(#arrow)"/>
        <text x="180" y="35" fill="#f43f5e" font-size="10" font-weight="bold">تصادم غير مرن</text>
        <!-- Neon Column -->
        <line x1="260" y1="160" x2="380" y2="160" stroke="#64748b" stroke-width="2"/>
        <text x="290" y="175" fill="#64748b" font-size="10">Ne (Ground)</text>
        <line x1="260" y1="50" x2="380" y2="50" stroke="#10b981" stroke-width="3"/>
        <text x="270" y="42" fill="#10b981" font-size="11" font-weight="bold">Ne E6 (20.66 eV شبه مستقر)</text>
        <line x1="260" y1="105" x2="380" y2="105" stroke="#38bdf8" stroke-width="2"/>
        <text x="325" y="120" fill="#38bdf8" font-size="10">Ne E4</text>
        <!-- Laser Emission Down Arrow -->
        <line x1="320" y1="55" x2="320" y2="100" stroke="#f43f5e" stroke-width="3"/>
        <text x="330" y="80" fill="#f43f5e" font-size="11" font-weight="bold">ليزر أحمر (632.8 nm)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: حساب فرق الطور وفرق المسار في التصوير الهولوجرافي',
        titleEn: 'Problem: Phase Difference & Path Difference in Holography',
        problemAr: 'في تجربة تصوير هولوجرافي باستخدام شعاع ليزر الهيليوم-نيون ذي الطول الموجي $\\lambda = 632.8\\text{ nm}$، كان فرق المسار بين شعاعين منعكسين من سطح الجسم يساوي $\\Delta x = 158.2\\text{ nm}$. احسب فرق الطور الناتج بين الشعاعين بالراديان وبالدرجات.',
        problemEn: 'In a 3D holography setup using a He-Ne laser of wavelength λ = 632.8 nm, the path difference between two reflected object beams is Δx = 158.2 nm. Calculate the resulting phase difference in radians and degrees.',
        stepsAr: [
          'العلاقة الفيزيائية بين فرق الطور وفرق المسار:',
          '$\\text{Phase Difference } (\\Delta\\phi) = \\frac{2\\pi}{\\lambda} \\times \\text{Path Difference } (\\Delta x)$.',
          'بالتعويض: $\\Delta\\phi = \\frac{2\\pi}{632.8\\text{ nm}} \\times 158.2\\text{ nm} = 2\\pi \\times \\frac{158.2}{632.8} = 2\\pi \\times \\frac{1}{4} = \\frac{\\pi}{2}\\text{ rad}$.',
          'تحويلها إلى درجات: $\\Delta\\phi = \\frac{180^\\circ}{2} = 90^\\circ$.'
        ],
        stepsEn: [
          'Phase Difference Δϕ = (2π / λ) · Δx.',
          'Δϕ = (2π / 632.8) · 158.2 = 2π · (1/4) = π/2 radians.',
          'In degrees: Δϕ = 90°.'
        ],
        finalAnswerAr: 'فرق الطور = π/2 راديان (90 درجة).',
        finalAnswerEn: 'Phase difference = π/2 rad (90°).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-7',
        problemAr: 'علل: اختيار غاز الهيليوم مع غاز النيون تحديداً في ليزر الهيليوم-نيون.',
        problemEn: 'Explain why Helium is specifically chosen with Neon in the He-Ne laser.',
        solutionStepsAr: [
          'لتقارب قيم طاقة مستويات الإثارة شبه المستقرة بينهما؛ حيث مستوى طاقة الهيليوم شبه المستقر يساوي $20.61\\text{ eV}$ ومستوى طاقة النيون شبه المستقر يساوي $20.66\\text{ eV}$.',
          'هذا التقارب الكبير يسمح بنقل طاقة الإثارة بكفاءة عالية جداً من ذرات الهيليوم المثارة إلى ذرات النيون غير المثارة عن طريق التصادمات غير المرنة، مما يحقق حالة الإسكان المعكوس في ذرات النيون اللازمة لإنتاج الليزر.'
        ],
        finalAnswerAr: 'لتقارب طاقة مستويات الإثارة شبه المستقرة بينهما (20.61 eV للهيليوم و 20.66 eV للنيون) مما يسهل نقل الطاقة بالتصادم غير المرن.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-7',
        questionAr: 'لا تخضع حزمة أشعة الليزر لقانون التربيع العكسي في الضوء لمسافات طويلة بسبب خاصية:',
        questionEn: 'A laser beam does not obey the inverse square law of illumination over substantial distances due to its:',
        optionsAr: ['توازي حزمتها الشديد وقلة تشتتها وانفراجها', 'نقاوتها الطيفية وأحادية اللون فقط', 'سرعتها الفائقة في الهواء', 'قدرتها على إحداث الانبعاث التلقائي'],
        optionsEn: ['High collimation, parallelism and minimal beam divergence', 'Monochromaticity alone', 'High velocity in air', 'Spontaneous emission ability'],
        correctIndex: 0,
        explanationAr: 'تتميز أشعة الليزر بقلة الانفراج والتشتت حيث تسير حزمتها متوازية لمسافات هائلة دون أن تتسع مساحة مقطعها، فتبقى شدة الإضاءة لوحدة المساحات ثابتة تقريباً ولا تخضع لقانون التربيع العكسي.',
        explanationEn: 'Laser beams have virtually zero spatial divergence, maintaining their beam diameter and energy density over extreme path lengths.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy7',
      titleAr: 'اختبار إتقان الفصل السابع: الليزر والتصوير المجسم',
      titleEn: 'Mastery Quiz: Lasers & 3D Holography',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy7-1',
          textAr: 'الشرط الأساسي والضروري الذي بدونه يستحيل حدوث الفعل الليزري وتوليد شعاع الليزر هو الوصول بالوسط الفعال إلى:',
          textEn: 'The fundamental condition required to sustain stimulated laser amplification is achieving:',
          optionsAr: ['حالة الإسكان المعكوس (Population Inversion)', 'درجة حرارة الصفر المطلق', 'الضغط الجوي المرتفع جداً', 'حالة الاتزان الحراري التام'],
          optionsEn: ['Population Inversion state', 'Absolute zero temperature', 'Ultra-high atmospheric pressure', 'Thermal equilibrium'],
          correctIndex: 0,
          conceptTestedAr: 'شروط الفعل الليزري وحالة الإسكان المعكوس',
          conceptTestedEn: 'Prerequisites for stimulated emission amplification and population inversion',
          explanationAr: 'في حالة الاتزان الحراري يكون عدد الذرات في المستويات الأدنى أكبر، ولكي يتغلب الانبعاث المستحث على الامتصاص يجب الوصول لحالة الإسكان المعكوس ($N_2 > N_1$).',
          explanationEn: 'Stimulated emission can only exceed stimulated absorption when more atoms occupy the upper metastable state than the ground state.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy7-2',
          textAr: 'الفوتونان الناتجان من عملية الانبعاث المستحث يتميزان بأنهما:',
          textEn: 'The two photons resulting from a single stimulated emission event are strictly characterized as:',
          optionsAr: ['مترابطان ولهما نفس التردد والطور والاتجاه والاستقطاب', 'متعامدان في اتجاه الحركة', 'مختلفان في التردد والطور', 'أحدهما في اتجاه المصدر والآخر في اتجاه معاكس'],
          optionsEn: ['Coherent with identical frequency, phase, direction, and polarization', 'Perpendicular in direction', 'Different in frequency and phase', 'Opposite in spatial trajectories'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص فوتونات الانبعاث المستحث',
          conceptTestedEn: 'Physical properties of stimulated emission photons',
          explanationAr: 'في الانبعاث المستحث يكون الفوتون المنبعث نسخة كربونية متطابقة تماماً مع الفوتون الحاث في الطور والتردد والاتجاه.',
          explanationEn: 'The stimulated photon is an exact quantum duplicate of the triggering photon in phase, wavelength, direction, and polarization.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy7-3',
          textAr: 'إذا كان فرق الطور بين موجتين منعكستين من جسم في التصوير الهولوجرافي هو $\\pi\\text{ rad}$ ($180^\\circ$)، فإن فرق المسار بينهما يساوي:',
          textEn: 'If the phase difference between two reflected object waves in holography is π rad (180°), their path difference is:',
          optionsAr: ['نصف طول موجي (λ / 2)', 'طول موجي كامل (λ)', 'ربع طول موجي (λ / 4)', 'ضعف الطول الموجي (2λ)'],
          optionsEn: ['Half wavelength (λ / 2)', 'One full wavelength (λ)', 'Quarter wavelength (λ / 4)', 'Two wavelengths (2λ)'],
          correctIndex: 0,
          conceptTestedAr: 'حساب فرق المسار من فرق الطور في الهولوجرام',
          conceptTestedEn: 'Holographic path difference vs phase difference conversion',
          explanationAr: '$\\Delta\\phi = \\frac{2\\pi}{\\lambda} \\cdot \\Delta x \\implies \\pi = \\frac{2\\pi}{\\lambda} \\cdot \\Delta x \\implies \\Delta x = \\frac{\\lambda}{2}$.',
          explanationEn: 'Δϕ = (2π/λ)·Δx. Substituting Δϕ = π gives Δx = λ/2.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── CHAPTER 8: MODERN ELECTRONICS & DIGITAL LOGIC GATES ──
  {
    id: 'h12-phy-8',
    order: 8,
    titleAr: 'المحاضرة 8: الفصل الثامن: الإلكترونيات الحديثة، أشباه الموصلات، الوصلة الثنائية (الدايود)، الترانزستور، والبوابات المنطقية',
    titleEn: 'Lecture 8: Chapter 8: Modern Electronics, Semiconductors (p-n Junction), BJT Transistor & Digital Logic Gates',
    subtitleAr: 'بلورة أشباه الموصلات النقية والمعالجة (النوع N والنوع P)، الوصلة الثنائية (p-n diode) وتقويم التيار، الترانزستور كمفتاح ومكبر ($I_E = I_B + I_C, \\beta_e = I_C/I_B$)، والبوابات المنطقية (NOT, AND, OR) وجداول التحقيق',
    subtitleEn: 'Master intrinsic/extrinsic semiconductors (N-type/P-type), p-n junction rectification, BJT transistor amplifier/inverter characteristics, digital binary systems, and NOT/AND/OR logic gates and truth tables.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - مدارس اللغات والثانوية العامة',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - Physics (Thanawya Amma & Language Schools)',
    termAr: 'الباب الثاني: مقدمة في الفيزياء الحديثة',
    termEn: 'Part 2: Introduction to Modern Physics',
    unitTitleAr: 'الفصل الثامن: الإلكترونيات الحديثة والرقمية',
    unitTitleEn: 'Chapter 8: Solid-State Electronics & Digital Logic',
    lessonNumberAr: 'الدرس 1 و 2: أشباه الموصلات والدايود والترانزستور، والإلكترونيات الرقمية والبوابات المنطقية',
    lessonNumberEn: 'Lessons 1 & 2: Semiconductors, Diode & Transistor, Digital Electronics & Logic Gates',

    warmupHookAr: 'في عام 1946، كان أول حاسوب إلكتروني عملاق في العالم (ENIAC) يزن 30 طناً ويشغل غرفة مساحتها 167 متراً مربعاً ويستهلك 150 كيلوواط من الكهرباء بسبب اعتماده على الصمامات المفرغة! اليوم، يحتوي معالج هاتفك الذكي فائق الصغر على أكثر من 15 مليار ترانزستور وبوابة منطقية في شريحة سيليكون أصغر من ظفر إصبعك! كيف قادت فيزياء أشباه الموصلات والوصلات الثنائية والبوابات المنطقية هذه الثورة الرقمية الخارقة؟',
    warmupHookEn: 'The ENIAC computer in 1946 weighed 30 tons and occupied an entire room using vacuum tubes. Today, silicon solid-state physics packs over 15 billion microscopic transistors and logic gates into a fingernail-sized smartphone chip, running the modern digital world.',

    keyConceptsAr: [
      'أشباه الموصلات النقية (Pure Silicon/Germanium): بلورة رباعية التكافؤ، تتكسر بعض روابطها التساهمية بالتسخين مسببة أزواجاً من الإلكترونات الحرة والفجوات الموجبة ($n = p = n_i$)، وتكون عازلة تماماً عند الصفر المطلق ($0\\text{ K} = -273^\\circ\\text{C}$)',
      'أشباه الموصلات غير النقية (المطعمة): نوع $N$ (بتطعيمها بشوائب خماسية التكافؤ كالفوسفور أو الزرنيخ $N_D^+$، حيث الإلكترونات هي حاملات الشحنة السائدة $n \\approx N_D^+$)، ونوع $P$ (بتطعيمها بشوائب ثلاثية التكافؤ كالبورون أو الألومنيوم $N_A^-$، حيث الفجوات هي السائدة $p \\approx N_A^-$). وتظل البلورة متعادلة كهربياً دائماً: $n + N_A^- = p + N_D^+$',
      'قانون فعل الكتلة: في البلورة المطعمة في حالة الاتزان الحراري: $n \\cdot p = n_i^2$',
      'الوصلة الثنائية (p-n Junction Diode): تكون منطقة قاحلة (قاحلة من الشحنات الحرة) وجهد حاجز. التوصيل الأمامي (مقاومة صغيرة جداً ويمر تيار) والتوصيل العكسي (مقاومة كبيرة جداً وينعدم التيار تقريباً). وتستخدم في تقويم التيار المتردد إلى تيار موحد الاتجاه',
      'الترانزستور ثنائي القطب (BJT): مكون من باعث (Emitter - E) وقاعدة (Base - B) ومجمع (Collector - C). قانون التيارات: $I_E = I_B + I_C$. معامل التكبير $\\beta_e = \\frac{I_C}{I_B}$، ونسبة التوزيع $\\alpha_e = \\frac{I_C}{I_E} = \\frac{\\beta_e}{1 + \\beta_e} < 1$',
      'استخدامات الترانزستور: 1) كمكبر للإشارات والجهد (في دائرة الباعث المشترك)، 2) كمفتاح إلكتروني عاكس (Inverter): في حالة ON ($V_{in}$ مرتفع $\\implies I_C$ كبير $\\implies V_{out} = V_{CC} - I_C R_C \\approx 0$ منخفض)، وفي حالة OFF ($V_{in}$ منخفض $\\implies I_C = 0 \\implies V_{out} = V_{CC}$ مرتفع)',
      'الإلكترونيات الرقمية والبوابات المنطقية: النظام الثنائي (Binary: 0 و 1)، بوابات NOT (العاكس $\\bar{A}$)، AND (الضرب المنطقي $A \\cdot B$)، OR (الجمع المنطقي $A + B$)، وجداول التحقيق (Truth Tables) لبناء الدوائر المتكاملة والمعالجات'
    ],
    keyConceptsEn: [
      'Intrinsic Semiconductors: Tetravalent Silicon crystal; Thermal generation of electron-hole pairs n = p = ni; Perfect insulator at absolute zero (0 K)',
      'Extrinsic Semiconductors: N-type (Pentavalent donors ND+, majority electrons n ≈ ND+) vs P-type (Trivalent acceptors NA-, majority holes p ≈ NA-); Universal neutrality: n + NA- = p + ND+',
      'Law of Mass Action: n · p = ni² under thermal equilibrium',
      'P-N Junction Diode: Depletion layer and barrier potential; Forward bias (low resistance, conducts) vs Reverse bias (high resistance, blocks); AC-to-DC rectification',
      'BJT Transistor: Emitter, Base, Collector; Current relation: IE = IB + IC; Current Gain βe = IC / IB; Current transfer ratio αe = IC / IE < 1',
      'Transistor Applications: Small-signal amplifier & Electronic switch / Inverter (VCC = IC·RC + VCE)',
      'Digital Logic Gates: Binary 0/1 noise immunity; NOT (Inverter), AND (Conjunction), OR (Disjunction) gates, truth tables, and combinational logic architectures'
    ],

    conceptMapAr: [
      'بلورة السيليكون النقية ➔ تطعيم بالشوائب (نوع N ونوع P) ➔ قانون فعل الكتلة $n \\cdot p = n_i^2$',
      'الوصلة الثنائية (p-n) ➔ توصيل أمامي وعكسي ➔ تقويم التيار المتردد (AC ➔ DC)',
      'الترانزستور ($I_E = I_B + I_C$) ➔ مكبر للجهد والقدرة + مفتاح إلكتروني عاكس',
      'الإلكترونيات الرقمية ➔ البوابات المنطقية (NOT, AND, OR) ➔ جداول التحقيق ➔ المعالجات الدقيقة'
    ],
    conceptMapEn: [
      'Pure Silicon ➔ Doping (N-type & P-type) ➔ Mass Action Law n·p = ni²',
      'P-N Diode ➔ Forward/Reverse Biasing ➔ AC to DC Rectification',
      'BJT Transistor (IE = IB + IC) ➔ Small-Signal Amplifier + Digital Switch / Inverter',
      'Digital Electronics ➔ Logic Gates (NOT, AND, OR) ➔ Truth Tables ➔ Microprocessor Architecture'
    ],

    learningOutcomesAr: [
      'أن يقارن الطالب بين التوصيلية الكهربية للفلزات وأشباه الموصلات وتأثير درجة الحرارة والتطعيم على كل منهما.',
      'أن يحسب معاملات الترانزستور ($\\alpha_e, \\beta_e$) وتيارات الباعث والقاعدة والمجمع وجهد الخرج.',
      'أن يصمم ويحلل جداول التحقيق للدوائر المنطقية المركبة المكونة من بوابات NOT و AND و OR.'
    ],
    learningOutcomesEn: [
      'Compare conduction mechanisms and temperature dependencies in metals vs semiconductors.',
      'Calculate transistor parameters (αe, βe), branch currents (IE, IB, IC), and output voltages.',
      'Construct and evaluate truth tables for combinational logic circuits using NOT, AND, and OR gates.'
    ],

    vocabulary: [
      {
        termAr: 'الجهد الحاجز (Barrier Potential - Vb)',
        termEn: 'Barrier Potential (Vb)',
        definitionAr: 'فرق الجهد الداخلي المتولد عبر منطقة النضوب (القاحلة) في الوصلة الثنائية نتيجة استقرار الأيونات الموجبة والسالبة على جانبي موضع الاتصال، والذي يمنع انتقال المزيد من الإلكترونات والفجوات.',
        definitionEn: 'The internal electric potential difference developed across the depletion layer of a p-n junction that halts further carrier diffusion.'
      },
      {
        termAr: 'معامل تكبير التيار (Current Gain - βe)',
        termEn: 'Transistor Current Gain (βe)',
        definitionAr: 'النسبة بين تيار المجمع وتيار القاعدة في الترانزستور: $\\beta_e = \\frac{I_C}{I_B} = \\frac{\\alpha_e}{1 - \\alpha_e}$، وتكون قيمته كبيرة دائماً أكبر بكثير من الواحد.',
        definitionEn: 'The ratio of collector current to base current in a bipolar junction transistor: βe = IC / IB.'
      },
      {
        termAr: 'البوابة المنطقية (Logic Gate)',
        termEn: 'Digital Logic Gate',
        definitionAr: 'دائرة إلكترونية رقمية تقوم بعملية منطقية محددة على دخل واحد أو أكثر لتعطي خرجا منطقيا واحدا تبعا لجدول التحقيق (0 أو 1).',
        definitionEn: 'An elementary digital switching circuit executing Boolean logical operations (AND, OR, NOT) on binary input signals.'
      }
    ],

    mainContentAr: `
### 1. فيزياء أشباه الموصلات والبلورات المطعمة
* **أشباه الموصلات النقية:**
  * عند الصفر المطلق ($0\\text{ K}$): تكون جميع الروابط التساهمية سليمة وممتلئة بالإلكترونات، ولا توجد إلكترونات حرة، فتكون البلورة عازلة تماماً.
  * برفع درجة الحرارة: تنكسر بعض الروابط وتتحرر إلكترونات وتترك مكانها فجوات موجبة ($n = p = n_i$).
  * برفع درجة الحرارة تزداد التوصيلية الكهربية لأشباه الموصلات (عكس الفلزات التي تقل توصيليتها بارتفاع الحرارة لزيادة سعة اهتزاز الذرات).
* **التطعيم (Doping):**
  * **بلورة من النوع السالب ($N\\text{-type}$):** تطعيم بعنصر خماسي ($P, As, Sb$). كل ذرة شائبة تعطي إلكتروناً حراً وتصبح أيوناً موجباً مانحاً ($N_D^+$): $n \\approx N_D^+$.
  * **بلورة من النوع الموجب ($P\\text{-type}$):** تطعيم بعنصر ثلاثي ($B, Al, Ga$). كل ذرة تقتنص إلكتروناً وتكون فجوة وتصبح أيوناً سالباً مستقبلاً ($N_A^-$): $p \\approx N_A^-$.
  * **قانون فعل الكتلة:** $n \\cdot p = n_i^2$.

---

### 2. الوصلة الثنائية (p-n Junction) والترانزستور (BJT)
* **الوصلة الثنائية (Diode):**
  * **توصيل أمامي:** القطب الموجب للبطارية بالبلورة $P$، والسالب بالبلورة $N$ $\\implies$ يتغلب الجهد الخارجي على الجهد الحاجز وتضيق المنطقة القاحلة وتقل المقاومة ويمر تيار كهربي قوي.
  * **توصيل عكسي:** الموجب بـ $N$ والسالب بـ $P$ $\\implies$ يتسع الحاجز وتزداد المقاومة جداً ولا يمر تيار.
  * **تقويم التيار المتردد:** تسمح بمرور نصف الموجة فقط في اتجاه واحد وتحجب النصف الآخر (تقويم نصف موجي).
* **الترانزستور (Transistor):**
  * $I_E = I_B + I_C$ (تيار القاعدة $I_B$ صغير جداً يمثل حوالي $1\\%$ إلى $2\\%$ من تيار الباعث، بينما تيار المجمع $I_C$ يمثل $98\\%$ إلى $99\\%$).
  * **نسبة التوزيع:** $\\alpha_e = \\frac{I_C}{I_E} < 1$.
  * **معامل التكبير:** $\\beta_e = \\frac{I_C}{I_B} = \\frac{\\alpha_e}{1 - \\alpha_e} \\gg 1$.
  * **الترانزستور كمفتاح في دائرة الباعث المشترك:**
    $$V_{CC} = I_C \\cdot R_C + V_{CE}$$
    * **مفتاح مغلق (ON):** عند توصيل القاعدة بجهد موجب مرتفع ($V_{in} = 1$) $\\implies I_B$ كبير $\\implies I_C$ كبير $\\implies$ يزداد الهبوط في الجهد عبر مقاومة المجمع ($I_C R_C$) $\\implies V_{CE} \\approx 0$ (الخرج $V_{out} = 0$).
    * **مفتاح مفتوح (OFF):** عند توصيل القاعدة بجهد صفر ($V_{in} = 0$) $\\implies I_B = 0 \\implies I_C = 0 \\implies V_{out} = V_{CE} = V_{CC}$ (الخرج $V_{out} = 1$).

---

### 3. الإلكترونيات الرقمية والبوابات المنطقية
* **الفرق بين التناظرية والرقمية:** الإشارات التناظرية (Analog) تتأثر بالضوضاء الكهربية وتشوش المعلومات، بينما الرقمية (Digital) تستخدم الكود الثنائي ($0$ و $1$) وتتميز بمناعة فائقة ضد الضوضاء وسهولة التخزين والمعالجة.
* **البوابات المنطقية الأساسية:**
  1. **بوابة العاكس (NOT Gate):** مدخل واحد ومخرج واحد. تقلب القيمة: إذا كان الدخل $1$ يصبح الخرج $0$، وإذا كان $0$ يصبح $1$ ($\\text{Out} = \\bar{A}$).
  2. **بوابة التوافق (AND Gate):** مدخلان أو أكثر ومخرج واحد. لا تعطي خرجا $1$ إلا إذا كانت **جميع المدخلات $1$** ($\\text{Out} = A \\cdot B$).
  3. **بوابة الاختيار (OR Gate):** مدخلان أو أكثر ومخرج واحد. تعطي خرجا $1$ إذا كان **أي مدخل من المدخلات $1$** ($\\text{Out} = A + B$).
    `,
    mainContentEn: `
### 1. Solid-State Physics
* Intrinsic silicon: Insulator at 0 K; Thermal excitation generates electron-hole pairs ($n = p = n_i$).
* Extrinsic: N-type ($n \\approx N_D^+$) vs P-type ($p \\approx N_A^-$). Mass action law: $n \\cdot p = n_i^2$.

### 2. Diode & Transistor
* Diode: Forward bias conducts; Reverse bias blocks. AC rectification.
* Transistor: $I_E = I_B + I_C$; Current Gain $\\beta_e = I_C / I_B$; $\\alpha_e = I_C / I_E$.
* Inverter / Switch: $V_{CC} = I_C R_C + V_{CE}$.

### 3. Logic Gates & Binary Systems
* Digital binary logic ($0$ and $1$) provides ultimate noise immunity.
* NOT Gate: $\\text{Out} = \\bar{A}$.
* AND Gate: $\\text{Out} = A \\cdot B$ (All inputs must be 1).
* OR Gate: $\\text{Out} = A + B$ (Any input 1 gives 1).
    `,

    diagramType: 'semiconductor_logic_gates',
    diagramData: {
      type: 'transistor_and_logic_gates',
      title: 'دائرة الترانزستور كمفتاح والبوابات المنطقية الأساسية',
      svgSnippet: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="400" height="160" rx="10" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <!-- NOT Gate -->
        <polygon points="60,50 90,65 60,80" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="95" cy="65" r="4" fill="#f59e0b"/>
        <text x="40" y="70" fill="#f8fafc" font-size="11">A</text>
        <text x="105" y="70" fill="#f59e0b" font-size="11" font-weight="bold">Ā (NOT)</text>
        <!-- AND Gate -->
        <path d="M 60 110 L 80 110 A 20 20 0 0 1 80 150 L 60 150 Z" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <text x="40" y="120" fill="#f8fafc" font-size="10">A</text>
        <text x="40" y="145" fill="#f8fafc" font-size="10">B</text>
        <text x="110" y="135" fill="#10b981" font-size="11" font-weight="bold">A·B (AND)</text>
        <!-- OR Gate on Right -->
        <path d="M 230 60 Q 250 80 230 100 Q 260 100 275 80 Q 260 60 230 60 Z" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
        <text x="210" y="70" fill="#f8fafc" font-size="10">A</text>
        <text x="210" y="95" fill="#f8fafc" font-size="10">B</text>
        <text x="285" y="85" fill="#a855f7" font-size="11" font-weight="bold">A+B (OR)</text>
        <!-- Transistor Formula Box -->
        <rect x="220" y="115" width="180" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="235" y="135" fill="#38bdf8" font-size="11" font-weight="bold">IE = IB + IC</text>
        <text x="235" y="155" fill="#f59e0b" font-size="10">βe = IC / IB = αe / (1 - αe)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مسألة: حساب معاملات الترانزستور وجهد الخرج وبوابة منطقية',
        titleEn: 'Problem: Transistor Circuit Calculations & Logic Gate Evaluation',
        problemAr: 'ترانزستور يعمل كمكبر في دائرة الباعث المشترك، فإذا كان تيار المجمع $I_C = 4.95\\text{ mA}$ وتيار الباعث $I_E = 5\\text{ mA}$، ومقاومة دائرة المجمع $R_C = 5\\,\\text{k}\\Omega$ وبطارية المجمع $V_{CC} = 30\\text{ V}$. احسب: 1) تيار القاعدة $I_B$، 2) نسبة التوزيع $\\alpha_e$، 3) معامل تكبير التيار $\\beta_e$، 4) فرق الجهد بين المجمع والباعث $V_{CE}$.',
        problemEn: 'A common-emitter transistor amplifier has IC = 4.95 mA, IE = 5 mA, collector resistor RC = 5 kΩ, and supply VCC = 30 V. Calculate: 1) Base current IB, 2) Current transfer ratio αe, 3) Current gain βe, 4) Output voltage VCE.',
        stepsAr: [
          '1) حساب تيار القاعدة: $I_B = I_E - I_C = 5 - 4.95 = 0.05\\text{ mA} = 50\\,\\mu\\text{A}$.',
          '2) حساب نسبة التوزيع: $\\alpha_e = \\frac{I_C}{I_E} = \\frac{4.95}{5} = 0.99$.',
          '3) حساب معامل تكبير التيار: $\\beta_e = \\frac{I_C}{I_B} = \\frac{4.95}{0.05} = 99$.',
          '4) حساب فرق الجهد $V_{CE}$ من معادلة الدائرة: $V_{CC} = I_C R_C + V_{CE}$',
          'الهبوط في الجهد: $I_C R_C = (4.95\\times 10^{-3}\\text{ A}) \\times (5000\\,\\Omega) = 24.75\\text{ V}$.',
          'إذن: $V_{CE} = V_{CC} - I_C R_C = 30 - 24.75 = 5.25\\text{ V}$.'
        ],
        stepsEn: [
          '1) Base current: IB = IE - IC = 5 - 4.95 = 0.05 mA (50 μA).',
          '2) Current transfer ratio: αe = IC / IE = 4.95 / 5 = 0.99.',
          '3) Current gain: βe = IC / IB = 4.95 / 0.05 = 99.',
          '4) Output voltage: VCE = VCC - IC·RC = 30 - (4.95×10^-3 × 5000) = 30 - 24.75 = 5.25 V.'
        ],
        finalAnswerAr: 'IB = 0.05 mA، αe = 0.99، βe = 99، و VCE = 5.25 V.',
        finalAnswerEn: 'IB = 0.05 mA, αe = 0.99, βe = 99, and VCE = 5.25 V.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12phy-8',
        problemAr: 'بلورة سيليكون نقية تركيز الإلكترونات الحرة بها في حالة الاتزان $n_i = 10^{10}\\text{ cm}^{-3}$. تم تطعيمها بذرات الفوسفور بتركيز $10^{12}\\text{ cm}^{-3}$. احسب تركيز كل من الإلكترونات والفجوات في البلورة المطعمة، وحدد نوع البلورة.',
        problemEn: 'A pure silicon crystal has intrinsic carrier concentration ni = 10^10 cm^-3. It is doped with Phosphorus atoms at concentration 10^12 cm^-3. Calculate electron and hole concentrations and classify the crystal type.',
        solutionStepsAr: [
          'بما أن الفوسفور عنصر خماسي التكافؤ، فهو شوائب مانحة ($N_D = 10^{12}\\text{ cm}^{-3}$)، فتكون البلورة من **النوع السالب ($N\\text{-type}$)**.',
          'تركيز الإلكترونات الحرة في البلورة المطعمة: $n \\approx N_D = 10^{12}\\text{ cm}^{-3}$.',
          'من قانون فعل الكتلة $n \\cdot p = n_i^2$: تركيز الفجوات الموجبة $p = \\frac{n_i^2}{n} = \\frac{(10^{10})^2}{10^{12}} = \\frac{10^{20}}{10^{12}} = 10^8\\text{ cm}^{-3}$.'
        ],
        finalAnswerAr: 'البلورة من النوع N، تركيز الإلكترونات n = 10^12 cm^-3، وتركيز الفجوات p = 10^8 cm^-3.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12phy-8',
        questionAr: 'عند رفع درجة حرارة بلورة شبه موصل نقي من السيليكون من 20°C إلى 80°C، فإن التوصيلية الكهربية للبلورة:',
        questionEn: 'When the temperature of a pure intrinsic Silicon crystal is raised from 20°C to 80°C, its electrical conductivity:',
        optionsAr: ['تزداد لزيادة كسر الروابط التساهمية وتوليد أزواج إلكترون-فجوة', 'تقل لزيادة سعة اهتزاز الذرات ومقاومتها', 'تظل ثابتة لا تتأثر بالحرارة', 'تنعدم تماماً وتصبح عازلة'],
        optionsEn: ['Increases due to thermal generation of electron-hole pairs', 'Decreases due to lattice vibrations', 'Remains strictly unchanged', 'Becomes zero'],
        correctIndex: 0,
        explanationAr: 'في أشباه الموصلات، تؤدي الطاقة الحرارية إلى كسر المزيد من الروابط التساهمية وتحرير إلكترونات وفجوات، مما يزيد من تركيز حاملات الشحنة فترتفع التوصيلية الكهربية وتقل المقاومة.',
        explanationEn: 'In semiconductors, thermal energy breaks covalent bonds generating free electrons and holes, increasing conductivity.'
      }
    ],

    assessment: {
      id: 'quiz-h12-phy8',
      titleAr: 'اختبار إتقان الفصل الثامن: الإلكترونيات الحديثة والبوابات المنطقية',
      titleEn: 'Mastery Quiz: Modern Electronics & Digital Logic Gates',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-phy8-1',
          textAr: 'في دائرة منطقية تتكون من بوابة OR متصل مخرجها بأحد مدخلي بوابة AND، إذا كانت المدخلات لبوابة OR هي (A=0, B=0) والمدخل الآخر لبوابة AND هو (C=1)، فإن الخرج النهائي يساوي:',
          textEn: 'In a logic circuit where the output of an OR gate connects to one input of an AND gate, if OR inputs are (A=0, B=0) and the other AND input is C=1, the final output is:',
          optionsAr: ['0', '1', 'غير محدد', 'يتغير دورياً'],
          optionsEn: ['0', '1', 'Undefined', 'Oscillating'],
          correctIndex: 0,
          conceptTestedAr: 'تقييم خرائط وجداول الدوائر المنطقية المركبة',
          conceptTestedEn: 'Evaluating combinational logic gate circuit outputs',
          explanationAr: 'خرج بوابة OR عند $A=0, B=0$ هو $0$. عند دخوله إلى بوابة AND مع $C=1$ يكون الناتج النهائي $0 \\cdot 1 = 0$.',
          explanationEn: 'OR(0,0) yields 0. AND(0,1) produces 0.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy8-2',
          textAr: 'البلورة غير النقية من النوع السالب (N-type) تكون متعادلة كهربياً لأن:',
          textEn: 'An extrinsic N-type semiconductor crystal is electrically neutral as a whole because:',
          optionsAr: ['مجموع الشحنات السالبة (إلكترونات) يساوي مجموع الشحنات الموجبة (فجوات + أيونات مانحة موجبة)', 'عدد الإلكترونات الحرة يساوي صفراً', 'الشوائب المضافة ليس لها شحنة', 'عدد الفجوات أكبر من عدد الإلكترونات'],
          optionsEn: ['Total negative charge (electrons) equals positive charge (holes + positive donor ions)', 'Free electron count is zero', 'Dopants carry no charge', 'Hole count exceeds electron count'],
          correctIndex: 0,
          conceptTestedAr: 'التعادل الكهربي لبلورات أشباه الموصلات المطعمة',
          conceptTestedEn: 'Electrical neutrality equation: n + NA- = p + ND+',
          explanationAr: 'البلورة ككل متعادلة كهربياً لأن كل إلكترون إضافي ناتج عن ذرة شائبة يقابله أيون موجب مانح مستقر داخل الشبكة البلورية: $n = p + N_D^+$.',
          explanationEn: 'Every liberated conduction electron is balanced by a positively ionized stationary donor core ND+ in the crystal lattice.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-phy8-3',
          textAr: 'ترانزستور نسبة توزيعه $\\alpha_e = 0.98$، إذا كان تيار القاعدة $I_B = 20\\,\\mu\\text{A}$، فإن تيار المجمع $I_C$ يساوي:',
          textEn: 'A transistor has αe = 0.98. If base current IB = 20 μA, the collector current IC is:',
          optionsAr: ['0.98 mA (980 μA)', '1.00 mA', '0.49 mA', '2.00 mA'],
          optionsEn: ['0.98 mA (980 μA)', '1.00 mA', '0.49 mA', '2.00 mA'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة بين معامل التكبير وتيار القاعدة وتيار المجمع',
          conceptTestedEn: 'Transistor current gain calculations IC = βe·IB',
          explanationAr: '$\\beta_e = \\frac{\\alpha_e}{1 - \\alpha_e} = \\frac{0.98}{1 - 0.98} = \\frac{0.98}{0.02} = 49$. تيار المجمع: $I_C = \\beta_e \\cdot I_B = 49 \\times 20\\,\\mu\\text{A} = 980\\,\\mu\\text{A} = 0.98\\text{ mA}$.',
          explanationEn: 'βe = 0.98 / (1 - 0.98) = 49. Collector current IC = 49 × 20 μA = 980 μA = 0.98 mA.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
