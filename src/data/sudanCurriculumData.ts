import type { Lecture } from '../types';

// ============================================================================
// OFFICIAL REPUBLIC OF SUDAN NATIONAL CURRICULUM (المنهج القومي السوداني المحدث)
// Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)
// وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)
// Stage: Intermediate Education (المرحلة المتوسطة المعاد استحداثها - السلم 6-3-3)
// Grade: Grade 9 (الصف الثالث متوسط / الصف التاسع - شهادة المرحلة المتوسطة)
// Subject: General Science (العلوم العامة)
// ============================================================================

export const SUDAN_MIDDLE_SCIENCE_G9_LECTURES: Lecture[] = [
  // ── LECTURE 1: STATIC ELECTRICITY, CURRENT & OHM'S LAW ──
  {
    id: 'sd-m9-sci-1',
    order: 1,
    titleAr: 'المحاضرة 1: الكهرباء الساكنة والتيار الكهربي وقانون أوم والدوائر الكهربائية',
    titleEn: "Lecture 1: Static Electricity, Electric Current, Ohm's Law & Circuit Analysis",
    subtitleAr: 'الشحنات الكهربائية الساكنة وطرق الشحن، شدة التيار وفرق الجهد، قانون أوم، وتوصيل المقاومات على التوالي والتوازي في المنازل السودانية',
    subtitleEn: "Master static electric charges, charging methods, current, voltage, Ohm's law, and series vs parallel resistor combinations aligned with the Sudanese national syllabus.",
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    country: 'SD',
    subject: 'GENERAL_SCIENCE',
    gradeLevel: 'G9',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم العامة للمرحلة المتوسطة (الصف الثالث متوسط / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 9 Intermediate General Science',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - جمهورية السودان',
    ministryEn: 'Federal Ministry of Education - Republic of Sudan',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الأولى: الكهرباء الساكنة والتيار الكهربي وقانون أوم',
    unitTitleEn: "Unit 1: Static Electricity, Current & Ohm's Law",
    lessonNumberAr: 'الدرس 1: الشحنات والتيار وقانون أوم والدوائر',
    lessonNumberEn: 'Lesson 1: Electric Charges, Current & Circuits',

    // Real-world hook
    warmupHookAr: 'في مواسم خريف السودان، تضيء سماء الخرطوم والولايات بصواعق البرق الخاطفة! تلك الصواعق ليست إلا تفريغاً هائلاً لشحنات كهربائية ساكنة تراكمت بين السحب والأرض بفعل احتكاك قطرات الماء والرياح. وفي منازلنا، عندما نضغط زر الإضاءة، تتدفق مليارات الإلكترونات في لحظة واحدة لتنير الغرفة. كيف استطاع العالم الألماني جورج سيمون أوم ضبط العلاقة السحرية بين الجهد والتيار والمقاومة؟ وكيف تُوصل أجهزتنا المنزلية في السودان لتعمل بأمان تام دون انقطاع؟',
    warmupHookEn: "Lightning during the Sudanese rainy season is a massive discharge of static electricity accumulated between clouds and the earth. In our homes, pressing a light switch sends billions of electrons surging through wires. How did Georg Ohm discover the fundamental relationship connecting voltage, current, and resistance? Let's explore how domestic circuits function safely!",

    // Learning Outcomes
    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم الشحنات الكهربائية الساكنة وقانون التجاذب والتنافر وطرق الشحن (الدلك، اللمس، والتأثير).',
      'أن يعرّف شدة التيار الكهربي (ت = ش / ز) وفرق الجهد الكهربي ووحدات القياس الدولية (الأمبير، الكولوم، الفولت).',
      'أن يطبق قانون أوم (جـ = ت × م) في حل المسائل الحسابية وحساب فرق الجهد وشدة التيار والمقاومة.',
      'أن يقارن بين توصيل المقاومات على التوالي والتوازي ويفسر سبب توصيل الأجهزة في المنازل السودانية على التوازي.'
    ],
    learningOutcomesEn: [
      'Explain electrostatic charges, the law of attraction/repulsion, and methods of charging (friction, conduction, induction).',
      'Define electric current (I = Q / t) and potential difference with SI units (Ampere, Coulomb, Volt).',
      "Apply Ohm's law (V = I * R) to solve quantitative circuit equations.",
      'Compare series and parallel resistor circuits and explain why household appliances in Sudan are connected in parallel.'
    ],

    // Vocabulary
    vocabulary: [
      {
        termAr: 'الشحنة الكهربائية (Electric Charge)',
        termEn: 'Electric Charge',
        definitionAr: 'خاصية فيزيائية للمادة توجد في نوعين: موجبة (كالبروتونات) وسالبة (كالإلكترونات)، وتقاس بوحدة الكولوم (Coulomb).'
      },
      {
        termAr: 'شدة التيار الكهربي (Electric Current - I)',
        termEn: 'Electric Current',
        definitionAr: 'كمية الشحنة الكهربائية التي تعبر مقطعاً عرضياً من الموصل في الثانية الواحدة: ت = ش / ز، ووحدتها الأمبير (Ampere).'
      },
      {
        termAr: 'فرق الجهد الكهربي (Potential Difference - V)',
        termEn: 'Potential Difference',
        definitionAr: 'الشغل المبذول لنقل وحدة الشحنات الكهربائية (1 كولوم) بين نقطتين في الدائرة، ويقاس بوحدة الفولت (Volt).'
      },
      {
        termAr: 'قانون أوم (Ohm\'s Law)',
        termEn: "Ohm's Law",
        definitionAr: 'ينص على أن شدة التيار المار في موصل معدني تتناسب طردياً مع فرق الجهد بين طرفيه عند ثبوت درجة الحرارة: جـ = ت × م.'
      },
      {
        termAr: 'المقاومة المكافئة (Equivalent Resistance)',
        termEn: 'Equivalent Resistance',
        definitionAr: 'مقاومة مفردة تحدث نفس الأثر في شدة التيار وفرق الجهد الذي تحدثه مجموعة المقاومات المتصلة معاً في الدائرة.'
      }
    ],

    keyConceptsAr: [
      'الشحنات الساكنة وطرق الشحن والتفريغ الكهربائي',
      'شدة التيار وفرق الجهد ووحدات القياس (أمبير وفولت)',
      'قانون أوم وحساب المقاومة الكهربائية',
      'توصيل المقاومات على التوالي والتوازي وتطبيقات الدوائر المنزلية'
    ],
    keyConceptsEn: [
      'Static Electric Charges and Charging Methods',
      'Electric Current and Potential Difference (Ampere and Volt)',
      "Ohm's Law and Resistance Calculations",
      'Series and Parallel Resistor Connections in Domestic Circuits'
    ],

    summaryAr: 'ملخص علوم الصف الثالث المتوسط بالسودان: تناول هذا الدرس دراسة الكهرباء الساكنة وقانون الشحنات، شدة التيار الكهربي (ت = ش / ز)، فرق الجهد ووحدة الفولت، قانون أوم (جـ = ت × م)، والمقارنة الحسابية والفيزيائية بين توصيل المقاومات على التوالي والتوازي وأهميته في تغذية المنازل بالكهرباء.',
    summaryEn: "Summary for Sudan Grade 9 Science: Explored electrostatics, charging mechanisms, current equation (I = Q/t), voltage, Ohm's law (V = I * R), and mathematical analysis of series vs parallel circuits in real-world households.",

    // 4 Comprehensive Sections
    sections: [
      // Section 1: Electrostatics & Charging
      {
        titleAr: '1. الشحنات الكهربائية الساكنة وقانون الشحنات وطرق الشحن',
        titleEn: '1. Electrostatic Charges, the Law of Charges & Charging Methods',
        contentAr: `الكهرباء الساكنة (Electrostatics) هي دراسة الشحنات الكهربائية المستقرة على أسطح الأجسام العازلة أو المعزولة.
تتكون المادة من ذرات تحتوي على نواة موجبة (بروتونات ونيوترونات) تدور حولها إلكترونات سالبة الشحنة. في الحالة الطبيعية تكون الذرة متعادلة كهربائياً لأن عدد البروتونات الموجبة يساوي عدد الإلكترونات السالبة.

قانون الشحنات الكهربائية الأساسي:
1. الشحنات المتشابهة تتنافر (موجب مع موجب يتنافر، وسالب مع سالب يتنافر).
2. الشحنات المختلفة تتجاذب (موجب مع سالب يتجاذب).

طرق شحن الأجسام بالكهرباء الساكنة:
• الشحن بالدلك (Friction): عند دلك ساق زجاج بقطعة حرير، يفقد الزجاج إلكترونات وتصبح شحنته موجبة، بينما يكتسب الحرير إلكترونات وتصبح شحنته سالبة.
• الشحن باللمس (Conduction): ملامسة جسم مشحون لجسم متعادل، فتنتقل الشحنات مباشرة وتصبح شحنة الجسمين من نفس النوع.
• الشحن بالتأثير أو الحث (Induction): تقريب جسم مشحون من موصل معزول دون ملامسته، فتتجمع الشحنات المقيدة المخالفة في الطرف القريب والشحنات الطليقة المتشابهة في الطرف البعيد.
يُستخدم الكشاف الكهربائي (Electroscope) للكشف عن وجود الشحنة ومعرفة نوعها، وتُعد مانعة الصواعق فوق المباني العالية في المدن تطبيقاً لحماية المنشآت من الشحنات المتراكمة في السحب الركامية.`,
        contentEn: `Electrostatics deals with resting electric charges on surfaces. Matter consists of neutral atoms where positive protons balance negative electrons. Like charges repel, and unlike charges attract. Objects are charged via friction (electron transfer), conduction (direct contact), or electrostatic induction (redistribution without contact).`,
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: شحن ساق الإبونيت بالصوف وتحديد نوع الشحنة',
          titleEn: 'Interactive Example 1: Charging an Ebonite Rod by Wool Friction',
          equation: 'عدد الإلكترونات المكتسبة = الشحنة الكلية / شحنة الإلكترون (ن = ش / ش_إ)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'عند دلك ساق الإبونيت بقطعة من الصوف، تنتقل الإلكترونات من الصوف إلى الإبونيت نظراً لأن قابلية الإبونيت لجذب الإلكترونات أعلى.',
              textEn: 'Electrons transfer from wool to the ebonite rod because ebonite has higher electron affinity.',
              noteAr: 'ساق الإبونيت يكتسب شحنة سالبة، والصوف يكتسب شحنة موجبة متساوية.',
              noteEn: 'Ebonite gains negative charge; wool retains an equal positive charge.'
            },
            {
              stepNumber: 2,
              textAr: 'عند تقريب ساق الإبونيت المشحون بشحنة سالبة من قرص كشاف كهربائي مشحون بشحنة سالبة، تزداد زاوية انفراج ورقتي الكشاف.',
              textEn: 'Bringing the negatively charged ebonite rod near the cap of a negatively charged electroscope increases leaf divergence.',
              noteAr: 'السبب: تنافر الشحنات السالبة وانتقالها نحو الورقتين الذهبيتين.',
              noteEn: 'Cause: Repulsion of identical negative charges forcing leaves apart.'
            }
          ],
          takeawayAr: 'الشحنات المتشابهة تتنافر والمختلفة تتجاذب، وانفراج ورقتي الكشاف الكهربائي يزداد كلما اقتربت شحنة من نفس النوع.',
          takeawayEn: 'Like charges repel while opposite charges attract; electroscope divergence increases with identical charge proximity.'
        },
        formativeCheck: {
          id: 'sd-fc-1',
          questionAr: 'ماذا يحدث لورقتي كشاف كهربائي مشحون بشحنة موجبة عند تقريب ساق زجاجي مدلوك بالحرير من قرصه؟',
          questionEn: 'What happens to the leaves of a positively charged electroscope when a silk-rubbed glass rod approaches its cap?',
          optionsAr: [
            'يزداد انفراج ورقتي الكشاف (لأن ساق الزجاج يحمل شحنة موجبة)',
            'ينطبق ورقا الكشاف تماماً',
            'لا تتأثر ورقة الكشاف',
            'تتحول شحنة الكشاف إلى شحنة سالبة'
          ],
          optionsEn: [
            'Leaf divergence increases (because rubbed glass bears a positive charge)',
            'The leaves collapse completely',
            'Leaves remain unaffected',
            'The charge flips to negative'
          ],
          correctIndex: 0,
          explanationAr: 'ساق الزجاج المدلوك بالحرير يكتسب شحنة موجبة، وعند تقريبه من كشاف موجب تتنافر الشحنات الموجبة نحو الورقتين فيزداد انفراجهما.',
          explanationEn: 'Glass rubbed with silk gains a positive charge. Approaching a positive electroscope repels more positive charges to the leaves, increasing divergence.',
          hintAr: 'تذكر نوع الشحنة التي يكتسبها الزجاج عند دلكه بالحرير وقاعدة الشحنات المتشابهة.',
          hintEn: 'Remember the charge acquired by glass and the law of like charges.'
        },
        tipsAr: ['احفظ دائماً: ساق الزجاج المدلوك بالحرير شحنته موجبة، وساق الإبونيت المدلوك بالصوف شحنته سالبة.']
      },

      // Section 2: Electric Current & Potential Difference
      {
        titleAr: '2. شدة التيار الكهربائي وفرق الجهد وأجهزة القياس (الأميتر والفولتميتر)',
        titleEn: '2. Electric Current, Potential Difference & Measuring Instruments (Ammeter & Voltmeter)',
        contentAr: `التيار الكهربي المستمر في الموصلات المعدنية هو فيض من الإلكترونات الحرة تتدفق عبر السلك من القطب السالب إلى القطب الموجب.

1. شدة التيار الكهربي (Electric Current - ت):
هي كمية الشحنة الكهربائية (ش) التي تعبر مقطعاً من الموصل خلال ثانية واحدة (ز).
القانون الرياضي:
ت = ش / ز
حيث:
• ت: شدة التيار بوحدة الأمبير (A).
• ش: كمية الشحنة بوحدة الكولوم (C).
• ز: الزمن بالثواني (s).
الأمبير: هو شدة التيار المار في موصل عندما تعبر مقطعه شحنة مقدارها كولوم واحد في زمن قدره ثانية واحدة.
جهاز القياس: يُقاس التيار بواسطة جهاز الأميتر (Ammeter)، ويُوصل دائماً في الدائرة الكهربائية على "التوالي".

2. فرق الجهد الكهربي (Potential Difference - جـ):
لكي تتدفق الإلكترونات في السلك، لا بد من وجود قوة دافعة أو فرق في الجهد بين طرفي الموصل يبذل شُغلاً لتحريكها.
فرق الجهد: هو الشغل المبذول (شغ) لنقل شحنة كهربائية مقدارها 1 كولوم بين نقطتين.
القانون الرياضي:
جـ = شغ / ش
حيث:
• جـ: فرق الجهد بوحدة الفولت (V).
• شغ: الشغل المبذول بوحدة الجول (J).
• ش: الشحنة بوحدة الكولوم (C).
الفولت: هو فرق الجهد بين نقطتين عند بذل شغل مقداره جول واحد لنقل شحنة مقدارها كولوم واحد بينهما.
جهاز القياس: يُقاس فرق الجهد بواسطة جهاز الفولتميتر (Voltmeter)، ويُوصل دائماً في الدائرة على "التوازي" بين النقطتين المراد قياس فرق الجهد بينهما.`,
        contentEn: `Electric current (I = Q / t) is the flow of electric charge per second measured in Amperes via an Ammeter connected in series. Potential difference (V = W / Q) is the work done per unit charge measured in Volts via a Voltmeter connected in parallel.`,
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: حساب شدة التيار الكهربائي المتدفق في مصباح',
          titleEn: 'Interactive Example 2: Calculating Electric Current Flowing Through a Lamp',
          equation: 'ت = ش / ز (I = Q / t)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: تمر شحنة كهربائية مقدارها 180 كولوم عبر سلك مصباح خلال زمن قدره دقيقة ونصف (1.5 دقيقة). المطلوب حساب شدة التيار.',
              textEn: 'Given: Charge Q = 180 C flows through a lamp wire over 1.5 minutes. Calculate current I.',
              noteAr: 'تحويل الزمن إلى ثوانٍ: ز = 1.5 × 60 = 90 ثانية.',
              noteEn: 'Convert time to seconds: t = 1.5 * 60 = 90 s.'
            },
            {
              stepNumber: 2,
              textAr: 'التعويض في قانون شدة التيار: ت = ش / ز = 180 / 90 = 2 أمبير (2 A).',
              textEn: 'Substitute into current formula: I = 180 / 90 = 2 Amperes (2 A).',
              noteAr: 'النتيجة: يمر تيار شدته 2 أمبير ويسجلها جهاز الأميتر المتصل على التوالي.',
              noteEn: 'Result: 2 A current recorded by the series-connected ammeter.'
            }
          ],
          takeawayAr: 'يجب دائماً تحويل الزمن إلى وحدة الثواني قبل التعويض في قانون شدة التيار (ت = ش / ز).',
          takeawayEn: 'Always convert time into seconds before evaluating the current formula.'
        },
        formativeCheck: {
          id: 'sd-fc-2',
          questionAr: 'إذا بُذل شغل مقداره 600 جول لنقل شحنة كهربائية مقدارها 30 كولوم بين طرفي مقاومة، فكم يكون فرق الجهد الكهربي؟',
          questionEn: 'If 600 Joules of work are performed moving 30 Coulombs of charge across a resistor, what is the potential difference?',
          optionsAr: ['20 فولت (V)', '18,000 فولت (V)', '5 فولت (V)', '0.05 فولت (V)'],
          optionsEn: ['20 Volts (V)', '18,000 Volts (V)', '5 Volts (V)', '0.05 Volts (V)'],
          correctIndex: 0,
          explanationAr: 'فرق الجهد = الشغل المبذول / كمية الشحنة = 600 جول / 30 كولوم = 20 فولت.',
          explanationEn: 'Potential Difference = Work / Charge = 600 J / 30 C = 20 Volts.',
          hintAr: 'استخدم قانون فرق الجهد: جـ = شغ / ش.',
          hintEn: 'Use potential difference formula: V = Work / Charge.'
        },
        tipsAr: ['احذر من الخلط بين التوصيل: الأميتر يُوصل دائماً على التوالي، والفولتميتر يُوصل دائماً على التوازي.']
      },

      // Section 3: Ohm's Law & Resistance
      {
        titleAr: '3. قانون أوم والمقاومة الكهربائية والتحكم في الدائرة',
        titleEn: "3. Ohm's Law, Electrical Resistance & Circuit Control",
        contentAr: `المقاومة الكهربائية (Electrical Resistance - م): هي الممانعة أو الإعاقة التي يلقاها التيار الكهربائي أثناء مروره في الموصل، وتنشأ نتيجة اصطدام الإلكترونات الحرة مع ذرات المادة الموصلة.
تُقاس المقاومة الكهربائية بوحدة الأوم (Ohm - رمزها Ω).

نص قانون أوم (Ohm's Law):
"تتناسب شدة التيار المار في موصل طردياً مع فرق الجهد بين طرفيه عند ثبوت درجة الحرارة."
الصيغة الرياضية لقانون أوم:
جـ = ت × م
ومنها نستنتج:
• م = جـ / ت  (المقاومة = فرق الجهد / شدة التيار)
• ت = جـ / م  (شدة التيار = فرق الجهد / المقاومة)
العلاقة البيانية بين فرق الجهد (على المحور الرأسي) وشدة التيار (على المحور الأفقي) هي خط مستقيم يمر بنقطة الأصل، وميل هذا الخط يمثل قيمة المقاومة م.

أنواع المقاومات في الدوائر:
1. المقاومة الثابتة (Fixed Resistor): لها قيمة أومية ثابتة محددة لا تتغير (مثل مقاومة المصباح أو السخان).
2. المقاومة المتغيرة أو الريوستات (Rheostat): مقاومة يمكن تغيير قيمتها يدوياً للتحكم في شدة التيار المار وفرق الجهد في أجزاء الدائرة الكهربائية.
العوامل المؤثرة في مقاومة موصل:
• طول الموصل (تناسب طردي: كلما زاد الطول زادت المقاومة).
• مساحة مقطع الموصل (تناسب عكسي: كلما زادت سماكة السلك قلت المقاومة).
• نوع مادة الموصل (المقاومة النوعية).
• درجة الحرارة (زيادة الحرارة تزيد من تصادم الذرات فتزداد المقاومة).`,
        contentEn: "Ohm's Law states that current through a conductor is directly proportional to voltage across it at constant temperature (V = I * R). Resistance is measured in Ohms (Ω). Fixed resistors provide set resistance while rheostats allow variable control.",
        interactiveExample: {
          titleAr: 'تطبيق عملي 3: حساب مقاومة سخان كهربي يعمل على شبكة الكهرباء بالسودان',
          titleEn: "Interactive Example 3: Calculating Heating Element Resistance on Sudan's Power Grid",
          equation: 'م = جـ / ت (R = V / I)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'يعمل سخان كهربائي في منزل بالخرطوم على فرق جهد الشبكة القومية البالغ 220 فولت، فمر به تيار شدته 5 أمبير. احسب مقاومة السخان.',
              textEn: 'An electric heater operating on Khartoum domestic mains voltage of 220 V draws 5 A of current. Calculate its resistance.',
              noteAr: 'المعطيات: جـ = 220 فولت، ت = 5 أمبير.',
              noteEn: 'Given: Voltage V = 220 V, Current I = 5 A.'
            },
            {
              stepNumber: 2,
              textAr: 'تطبيق قانون أوم لحساب المقاومة: م = جـ / ت = 220 / 5 = 44 أوم (44 Ω).',
              textEn: "Apply Ohm's law: R = V / I = 220 / 5 = 44 Ohms (44 Ω).",
              noteAr: 'إذا انخفض الجهد إلى 110 فولت مع ثبوت المقاومة، تنخفض شدة التيار للنصف (2.5 أمبير).',
              noteEn: 'If voltage halves to 110 V at constant resistance, current halves to 2.5 A.'
            }
          ],
          takeawayAr: 'المقاومة هي نسبة فرق الجهد إلى شدة التيار (م = جـ / ت)، وعند ثبوت المقاومة تتغير شدة التيار طردياً مع فرق الجهد.',
          takeawayEn: 'Resistance is the ratio of potential difference to current (R = V / I), maintaining direct proportionality.'
        },
        formativeCheck: {
          id: 'sd-fc-3',
          questionAr: 'إذا تضاعف فرق الجهد بين طرفي مقاومة ثابتة القيمة إلى الضعف عند ثبوت درجة الحرارة، فماذا يحدث لشدة التيار المار بها؟',
          questionEn: 'If potential difference across a constant resistor doubles at fixed temperature, what happens to the electric current?',
          optionsAr: [
            'تتضاعف شدة التيار إلى الضعف (وفق التناسب الطردي في قانون أوم)',
            'تقل شدة التيار إلى النصف',
            'تظل شدة التيار ثابتة دون تغيير',
            'تتضاعف شدة التيار إلى أربعة أضعاف'
          ],
          optionsEn: [
            "Current doubles (due to direct proportionality in Ohm's law)",
            'Current halves',
            'Current remains unchanged',
            'Current quadruples'
          ],
          correctIndex: 0,
          explanationAr: 'وفق قانون أوم، شدة التيار تتناسب طردياً مع فرق الجهد (ت = جـ / م)؛ فعند مضاعفة الجهد مع ثبوت المقاومة م، تتضاعف شدة التيار مباشرة.',
          explanationEn: "According to Ohm's law (I = V / R), current is directly proportional to voltage, so doubling voltage doubles current.",
          hintAr: 'تذكر صيغة قانون أوم: ت = جـ / م وعلاقة البسط بالناتج.',
          hintEn: "Recall Ohm's law: I = V / R."
        },
        tipsAr: ['احفظ مثلث قانون أوم: في القمة (جـ)، وفي القاعدة (ت × م)، فيسهل عليك إيجاد أي مجهول بتغطية رمزه.']
      },

      // Section 4: Series vs Parallel Resistor Connections
      {
        titleAr: '4. توصيل المقاومات على التوالي والتوازي وتطبيقات الدوائر المنزلية بالسودان',
        titleEn: '4. Series & Parallel Resistor Combinations & Domestic Wiring in Sudan',
        contentAr: `تُوصل المقاومات والأجهزة الكهربائية في الدوائر بطريقتين رئيسيتين:

1. التوصيل على التوالي (Series Connection):
• مسار التيار: يوجد مسار واحد فقط لسريان التيار الكهربي عبر جميع المقاومات واحدة تلو الأخرى.
• شدة التيار: متساوية وثابتة في جميع المقاومات (ت = ت1 = ت2 = ت3).
• فرق الجهد: يتجزأ مجموع فروق الجهد عبر المقاومات (جـ = جـ1 + جـ2 + جـ3).
• المقاومة المكافئة (م): تكون أكبر من أكبر مقاومة مفردة:
م = م1 + م2 + م3
• العيب الرئيسي: إذا تلفت إحدى المقاومات أو فُصل أحد المصابيح، تنقطع الدائرة بالكامل وتنطفئ بقية الأجهزة.

2. التوصيل على التوازي (Parallel Connection):
• مسار التيار: يتفرع التيار الكهربي في عدة مسارات مستقلة متوازية.
• فرق الجهد: متساوٍ وثابت عبر جميع المقاومات (جـ = جـ1 = جـ2 = جـ3 = جهد المصدر 220V).
• شدة التيار: يتجزأ التيار الكلي (ت = ت1 + ت2 + ت3).
• المقاومة المكافئة (م): تكون أصغر من أصغر مقاومة مفردة:
1 / م = (1 / م1) + (1 / م2) + (1 / م3)
ولمقاومتين متصلتين على التوازي: م = (م1 × م2) / (م1 + م2).

تطبيقات التوصيل في المنازل والمدارس بالسودان:
تُوصل جميع الأجهزة الكهربائية والمصابيح في المنازل والمدارس السودانية على "التوازي" للأسباب الآتية:
1. لتعمل جميع الأجهزة والمصابيح بنفس فرق جهد المصدر الثابت (220 فولت).
2. يمكن تشغيل أو إطفاء أي جهاز بشكل مستقل دون التأثير على بقية الأجهزة بالمنزل.
3. إذا تعطل أو احترق مصباح لا تنقطع الكهرباء عن باقي الغرف والأجهزة.
4. تقليل المقاومة الكلية للدائرة المنزلية فيمر التيار المناسب لتشغيل الأجهزة بكفاءة.`,
        contentEn: `In series circuits, current is uniform while voltage divides; total resistance equals the sum (R = R1 + R2 + ...). In parallel circuits, voltage is uniform while current divides; equivalent resistance is lower than the smallest branch resistor. Sudanese households are strictly wired in parallel so each appliance receives 220V independently.`,
        interactiveExample: {
          titleAr: 'تطبيق عملي 4: المقارنة الحسابية لمقاومتين (6 أوم و 3 أوم) على التوالي والتوازي',
          titleEn: 'Interactive Example 4: Comparing Series vs Parallel for 6 Ω and 3 Ω Resistors',
          equation: 'التوالي: م = م1 + م2 | التوازي: م = (م1 × م2) / (م1 + م2)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'حساب المقاومة المكافئة عند التوصيل على التوالي: م_توالي = م1 + م2 = 6 + 3 = 9 أوم (9 Ω).',
              textEn: 'Series Equivalent: R_series = 6 + 3 = 9 Ohms (9 Ω).',
              noteAr: 'المقاومة المكافئة أكبر من أكبر مقاومة (9 > 6).',
              noteEn: 'Equivalent is larger than the largest resistor (9 > 6).'
            },
            {
              stepNumber: 2,
              textAr: 'حساب المقاومة المكافئة عند التوصيل على التوازي: م_توازي = (6 × 3) / (6 + 3) = 18 / 9 = 2 أوم (2 Ω).',
              textEn: 'Parallel Equivalent: R_parallel = (6 * 3) / (6 + 3) = 18 / 9 = 2 Ohms (2 Ω).',
              noteAr: 'المقاومة المكافئة أصغر من أصغر مقاومة (2 < 3)، مما يسمح بمرور تيار كلي أكبر.',
              noteEn: 'Equivalent is smaller than the smallest resistor (2 < 3).'
            }
          ],
          takeawayAr: 'التوصيل على التوالي يزيد المقاومة المكافئة، بينما التوصيل على التوازي يقلل المقاومة المكافئة ويمنح كل جهاز مساراً مستقلاً.',
          takeawayEn: 'Series connection increases total resistance, whereas parallel connection reduces resistance and isolates branches.'
        },
        formativeCheck: {
          id: 'sd-fc-4',
          questionAr: 'لماذا تُوصل المصابيح والأجهزة الكهربائية في المنازل السودانية على التوازي وليس على التوالي؟',
          questionEn: 'Why are electrical appliances in Sudanese households wired in parallel rather than in series?',
          optionsAr: [
            'حتى يعمل كل جهاز على فرق الجهد الكامل (220V) ولا تنطفئ بقية الأجهزة عند إطفاء أحدها',
            'لزيادة المقاومة الكلية وتقليل تيار الكهرباء في الأسلاك',
            'لأن التوصيل على التوالي يستهلك أجهزة أكثر دون فائدة',
            'حتى يمر نفس التيار الضعيف في جميع الغرف بالتساوي'
          ],
          optionsEn: [
            'So each appliance receives full mains voltage (220V) and remains functional if one fails',
            'To increase total resistance and decrease wire currents',
            'Because series wiring wastes extra materials',
            'To force the same small current across all rooms'
          ],
          correctIndex: 0,
          explanationAr: 'في التوصيل على التوازي يظل فرق الجهد ثابتاً (220V) لكل الأجهزة، ويوفر مساراً مستقلاً لكل جهاز بحيث إذا تلف مصباح لا يؤثر على بقية الدائرة.',
          explanationEn: 'Parallel wiring delivers full source voltage (220V) across every branch and prevents the failure of one appliance from cutting power to others.',
          hintAr: 'فكر في ماذا يحدث عندما تطفئ مصباح غرفتك ليلاً: هل تنطفئ ثلاجة المطبخ أيضاً؟',
          hintEn: 'Think of what happens when you switch off a bedroom light.'
        },
        tipsAr: ['احفظ القاعدة الذهبية: التوالي للتجزئة في الجهد وثبات التيار، والتوازي للتجزئة في التيار وثبات الجهد لكافة الأجهزة.']
      }
    ],

    // 3 Official Assessment Questions
    assessment: {
      id: 'sd-m9-sci-1-assess',
      titleAr: 'اختبار تقييم استيعاب الكهرباء الساكنة والتيار وقانون أوم (شهادة المتوسطة)',
      titleEn: "Mastery Assessment: Electrostatics, Current, Ohm's Law & Circuit Analysis",
      passingScore: 80,
      questions: [
        {
          id: 'sd-q1',
          textAr: 'يمر تيار شدته 4 أمبير في دائرة كهربائية لمدة 5 دقائق. فما هي كمية الشحنة الكهربائية التي عبرت مقطع السلك بالكولوم؟',
          textEn: 'A current of 4 A flows through an electrical circuit for 5 minutes. What is the total electric charge that passed in Coulombs?',
          optionsAr: ['1200 كولوم', '20 كولوم', '1.25 كولوم', '600 كولوم'],
          optionsEn: ['1200 Coulombs', '20 Coulombs', '1.25 Coulombs', '600 Coulombs'],
          correctIndex: 0,
          conceptTestedAr: 'قانون شدة التيار الكهربي وحساب كمية الشحنة',
          conceptTestedEn: 'Electric current formula and charge calculation',
          explanationAr: 'الزمن = 5 دقائق × 60 = 300 ثانية. كمية الشحنة ش = ت × ز = 4 أمبير × 300 ثانية = 1200 كولوم.',
          explanationEn: 'Time t = 5 * 60 = 300 s. Charge Q = I * t = 4 * 300 = 1200 Coulombs.',
          difficulty: 'medium'
        },
        {
          id: 'sd-q2',
          textAr: 'وصلت مقاومتان متطابقتان قيمة كل منهما 10 أوم على التوازي بمصدر جهد 20 فولت. فكم تكون شدة التيار الكلي الخارج من المصدر؟',
          textEn: 'Two identical 10 Ω resistors are connected in parallel to a 20 V supply. What is the total current drawn from the supply?',
          optionsAr: ['4 أمبير', '1 أمبير', '2 أمبير', '10 أمبير'],
          optionsEn: ['4 Amperes', '1 Ampere', '2 Amperes', '10 Amperes'],
          correctIndex: 0,
          conceptTestedAr: 'حساب المقاومة المكافئة على التوازي وقانون أوم الكلي',
          conceptTestedEn: 'Parallel equivalent resistance and total Ohm current',
          explanationAr: 'المقاومة المكافئة على التوازي لمقاومتين متطابقتين = م / 2 = 10 / 2 = 5 أوم. شدة التيار الكلي = جـ / م = 20 / 5 = 4 أمبير.',
          explanationEn: 'Equivalent resistance of two identical parallel resistors = R / 2 = 10 / 2 = 5 Ω. Total current I = V / R = 20 / 5 = 4 A.',
          difficulty: 'hard'
        },
        {
          id: 'sd-q3',
          textAr: 'أي من العبارات الآتية صحيحة بخصوص جهاز الفولتميتر في الدائرة الكهربائية؟',
          textEn: 'Which of the following statements is true regarding a voltmeter in an electric circuit?',
          optionsAr: [
            'يُوصل على التوازي وله مقاومة داخلية كبيرة جداً حتى لا يسحب تياراً من الدائرة',
            'يُوصل على التوالي وله مقاومة صغيرة جداً',
            'يقيس شدة التيار الكهربي المار في السلك بوحدة الأمبير',
            'يُوصل على التوالي لقياس الشحنة الكهربائية بوحدة الكولوم'
          ],
          optionsEn: [
            'It is connected in parallel and possesses very high internal resistance to avoid drawing circuit current',
            'It is connected in series with near-zero resistance',
            'It measures current in Amperes',
            'It is connected in series to measure charge in Coulombs'
          ],
          correctIndex: 0,
          conceptTestedAr: 'طريقة توصيل وخصائص جهاز الفولتميتر',
          conceptTestedEn: 'Connection method and characteristics of the voltmeter',
          explanationAr: 'الفولتميتر يُوصل دائماً على التوازي بين النقطتين لقياس فرق الجهد بينهما، وتكون مقاومته الداخلية عالية جداً لمنع سريان التيار خلاله.',
          explanationEn: 'The voltmeter connects in parallel to measure potential difference across components and has very high resistance so it draws negligible current.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
