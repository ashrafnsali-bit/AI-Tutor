import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL PHYSICS — GRADE 11 (فيزياء الصف الثاني الثانوي - لغات وعربي)
// Official Grade 11 / Secondary 2 National Ministry & Language School Curriculum Alignment:
// Unit 1: Wave Motion & Light Waves (Oscillatory/Wave Motion, Reflection, Refraction, Critical Angle & Total Internal Reflection)
// Unit 2: Light Interference, Diffraction & The Triangular Prism (Young's Experiment, Minimum Deviation & Thin Prisms)
// Unit 3: Hydrodynamics & Viscosity (Steady Flow, Continuity Equation, Viscosity Coefficient & Applications)
// Unit 4: Fluid Statics & Hydrostatic Pressure (Pressure at depth P=P_a+ρgh, U-Tube, Mercury Barometer & Pascal's Hydraulic Press)
// Unit 5: Gas Laws (Boyle's Law, Charles's Law, Pressure Law & General Gas Equation)
// ============================================================================

export const HIGH_PHYSICS_G11_LECTURES: Lecture[] = [
  // ── LECTURE 1: WAVE MOTION & LIGHT PROPAGATION ──
  {
    id: 'h11-phy-1',
    order: 1,
    titleAr: 'المحاضرة 1: الحركة الاهتزازية والموجية، وانعكاس وانكسار الضوء والانعكاس الكلي',
    titleEn: 'Lecture 1: Oscillatory & Wave Motion, Light Reflection, Refraction & Total Internal Reflection',
    subtitleAr: 'الزمن الدوري والتردد، قانون انتشار الأمواج $v = \\nu\\lambda$، قانون سنل $n_1\\sin\\theta_1 = n_2\\sin\\theta_2$، والزاوية الحرجة والألياف الضوئية',
    subtitleEn: 'Master periodic time, frequency, wave speed equation v = νλ, Snell\'s law of refraction, critical angle, total internal reflection, and optical fiber communications.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الحركة الموجية وخواص الضوء',
    unitTitleEn: 'Unit 1: Wave Motion & Light Optics',
    lessonNumberAr: 'الدرس 1: الأمواج وانكسار الضوء والانعكاس الكلي',
    lessonNumberEn: 'Lesson 1: Waves, Refraction & Total Internal Reflection',

    warmupHookAr: 'عندما ترسل رسالة عبر الإنترنت من القاهرة إلى طوكيو، تعبر بياناتك قاع المحيطات بسرعة الضوء داخل كابلات ألياف ضوئية (Optical Fibers) أدق من شعرة الرأس! كيف يستطيع الضوء أن ينحني ويسافر آلاف الكيلومترات دون أن يتسرب خارج السلك الزجاجي؟ السر يكمن في ظاهرة فيزيائية عبقرية تسمى "الانعكاس الكلي الداخلي" (Total Internal Reflection) عندما يسقط الضوء بزاوية أكبر من الزاوية الحرجة!',
    warmupHookEn: 'Subsea internet cables transmit global data at the speed of light through total internal reflection inside flexible glass fibers. Mastering wave motion and refraction optics forms the backbone of global telecommunications and laser endoscopy.',

    learningOutcomesAr: [
      'أن يميز الطالب بين الحركة الاهتزازية والموجية، ويطبق قانون سرعة انتشار الأمواج: $v = \\nu \\cdot \\lambda$',
      'أن يطبق قانون سنل للانكسار: $n_1 \\sin\\phi = n_2 \\sin\\theta$ ومعامل الانكسار النسبي والمطلق $n = \\frac{c}{v}$',
      'أن يحسب الزاوية الحرجة ($\\phi_c$) لوسط بالنسبة للهواء: $\\sin\\phi_c = \\frac{1}{n}$ أو بين وسطين: $\\sin\\phi_c = \\frac{n_2}{n_1}$',
      'أن يفسر تطبيقات الانعكاس الكلي الداخلي: الألياف الضوئية (Endoscopes)، المنشور العاكس (Periscope)، وظاهرة السراب الصحراوي (Mirage)'
    ],
    learningOutcomesEn: [
      'Differentiate oscillatory and wave motions, applying the wave speed equation v = νλ',
      'Apply Snell\'s Law of refraction n₁ sin ϕ = n₂ sin θ and absolute/relative refractive indices',
      'Calculate critical angles sin ϕ_c = 1/n and determine conditions for total internal reflection',
      'Explain practical optics applications: fiber optic endoscopes, reflecting prisms, and desert mirages'
    ],

    vocabulary: [
      {
        termAr: 'قانون انتشار الأمواج (Wave Speed Equation)',
        termEn: 'Wave Speed Equation',
        definitionAr: 'العلاقة الرياضية التي تربط بين سرعة الموجة ($v$) والتردد ($\\nu$) والطول الموجي ($\\lambda$): $v = \\nu \\cdot \\lambda$. وتعتمد السرعة فقط على نوع الوسط.',
        definitionEn: 'The fundamental relationship v = νλ where wave velocity depends strictly on the physical medium.'
      },
      {
        termAr: 'الزاوية الحرجة (Critical Angle - ϕc)',
        termEn: 'Critical Angle (ϕc)',
        definitionAr: 'زاوية السقوط في الوسط الأكبر كثافة ضوئية والتي يقابلها زاوية انكسار في الوسط الأقل كثافة ضوئية مقدارها $90^\\circ$ (مماساً للسطح الفاصل).',
        definitionEn: 'The angle of incidence in a denser optical medium resulting in a 90° angle of refraction along the interface.'
      },
      {
        termAr: 'الانعكاس الكلي الداخلي (Total Internal Reflection)',
        termEn: 'Total Internal Reflection',
        definitionAr: 'ظاهرة ارتداد الضوء بالكامل داخل نفس الوسط الأكبر كثافة ضوئية عندما يسقط على السطح الفاصل بزاوية سقوط أكبر من الزاوية الحرجة ($\\phi > \\phi_c$).',
        definitionEn: 'The complete reflection of a light ray within a denser medium when incident at an angle exceeding the critical angle.'
      }
    ],

    keyConceptsAr: [
      'التردد $\\nu = \\frac{1}{T}$ بالهرتز (Hz)، والطول الموجي $\\lambda$ هو المسافة بين قمتين متتاليتين أو قاعين متتاليين',
      'عند انتقال الموجة بين وسطين مختلفين: يظل التردد ثابتاً وتتغير السرعة والطول الموجي ($\\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$)',
      'قانون سنل: $n_1 \\sin\\phi = n_2 \\sin\\theta$ حيث $\\phi$ زاوية السقوط و $\\theta$ زاوية الانكسار',
      'شرطا حدوث الانعكاس الكلي: 1) انتقال الضوء من وسط أكبر كثافة ضوئية إلى وسط أقل، 2) زاوية السقوط أكبر من الزاوية الحرجة ($\\phi > \\phi_c$)',
      'الألياف الضوئية مصنوعة من قلب زجاجي ذي معامل انكسار مرتفع مغطى بغلاف ذي معامل انكسار أقل لحبس الضوء بالانعكاس الكلي'
    ],
    keyConceptsEn: [
      'Frequency ν = 1/T remains constant across media interfaces while velocity and wavelength scale proportionally',
      'Snell\'s Law: n₁ sin ϕ = n₂ sin θ where n = c/v',
      'Conditions for total internal reflection: denser to rarer medium and incidence angle ϕ > ϕ_c',
      'Fiber optics rely on high-index core and lower-index cladding to trap light through successive total reflections'
    ],

    summaryAr: 'تغطي المحاضرة الأولى الحركة الاهتزازية والموجية لصف الثاني الثانوي: قانون انتشار الأمواج $v = \\nu\\lambda$، انكسار الضوء وقانون سنل، شروط وحسابات الزاوية الحرجة والانعكاس الكلي وتطبيقاته في الألياف الضوئية والسراب.',
    summaryEn: 'Comprehensive Grade 11 physics lecture on wave mechanics, Snell\'s law of refraction, critical angle calculations, and total internal reflection applications.',

    sections: [
      {
        titleAr: '1. الحركة الموجية وقانون انتشار الأمواج',
        titleEn: '1. Wave Motion & Wave Speed Equation',
        contentAr: '1) خصائص الموجة:\n- التردد ($\\nu$): عدد الاهتزازات الكاملة في الثانية الواحدة ($\\nu = \\frac{N}{t} = \\frac{1}{T}$). وحدة القياس: هرتز ($Hz$).\n- الطول الموجي ($\\lambda$): المسافة بين قمتين متتاليتين في الموجة المستعرضة، أو تضاغطين متتاليين في الطولية.\n- قانون سرعة انتشار الموجة: $v = \\nu \\cdot \\lambda$.\n\n2) انتقال الموجة بين وسطين:\n- التردد يظل ثابتاً لأنه يعتمد على المصدر: $\\frac{v_1}{v_2} = \\frac{\\lambda_1}{\\lambda_2}$.\n- مثال: شوكة رنانة ترددها $440\\text{ Hz}$ تصدر صوتاً طوله الموجي $0.75\\text{ m}$ في الهواء، احسب سرعة الصوت:\n  $v = \\nu \\cdot \\lambda = 440 \\times 0.75 = 330\\text{ m/s}$.',
        contentEn: 'Wave velocity v = νλ. Frequency remains invariant across medium transitions while wavelength scales with phase velocity.'
      },
      {
        titleAr: '2. انكسار الضوء، الزاوية الحرجة، والانعكاس الكلي',
        titleEn: '2. Refraction, Critical Angle & Total Internal Reflection',
        contentAr: '1) معامل الانكسار وقانون سنل:\n- معامل الانكسار المطلق: $n = \\frac{c}{v}$ (حيث $c = 3 \\times 10^8\\text{ m/s}$ سرعة الضوء في الفراغ).\n- قانون سنل: $n_1 \\sin\\phi = n_2 \\sin\\theta$.\n\n2) الزاوية الحرجة والانعكاس الكلي:\n- عند سقوط الضوء من وسط ذي معامل انكسار $n_1$ إلى وسط أقل $n_2$ بزاوية حرجة $\\phi_c$:\n  $\\sin\\phi_c = \\frac{n_2}{n_1}$. (وبالنسبة للهواء $n_2 = 1 \\implies \\sin\\phi_c = \\frac{1}{n}$).\n- مثال: للزجاج ذي معامل الانكسار $n = 1.5$:\n  $\\sin\\phi_c = \\frac{1}{1.5} = 0.6667 \\implies \\phi_c \\approx 41.8^\\circ$.\n- إذا سقط الضوء في الزجاج بزاوية $45^\\circ > 41.8^\\circ$، يحدث انعكاس كلي داخلي بزاوية انعكاس $45^\\circ$.',
        contentEn: 'Snell\'s law n₁ sin ϕ = n₂ sin θ dictates refraction. Angles exceeding critical angle sin ϕ_c = n₂/n₁ undergo total internal reflection.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11-phy1-1',
        questionAr: 'سقط شعاع ضوئي من الماء ($n_1 = 1.33$) على السطح الفاصل مع الهواء ($n_2 = 1$) بزاوية سقوط $60^\\circ$. بين ماذا يحدث للشعاع الضوئي مع التعليل الحسابي؟',
        questionEn: 'A light ray in water (n₁ = 1.33) hits the water-air interface at an incidence angle of 60°. Determine and justify what happens to the ray?',
        solutionStepsAr: [
          'الخطوة 1: نحسب الزاوية الحرجة للماء مع الهواء: sin(ϕc) = 1 / n = 1 / 1.33 ≈ 0.7519.',
          'الخطوة 2: إذن الزاوية الحرجة للماء ϕc = arcsin(0.7519) ≈ 48.75°.',
          'الخطوة 3: نقارن زاوية السقوط بالزاوية الحرجة: زاوية السقوط المعطاة ϕ = 60° > 48.75°.',
          'الخطوة 4: بما أن زاوية السقوط أكبر من الزاوية الحرجة وينتقل الضوء نحو وسط أقل كثافة ضوئية، يعاني الشعاع انعكاساً كلياً داخلياً (Total Internal Reflection) داخل الماء بزاوية انعكاس 60° دون أن ينفذ للهواء.'
        ],
        solutionStepsEn: [
          'Step 1: Critical angle sin ϕ_c = 1 / 1.33 = 0.7519.',
          'Step 2: Critical angle ϕ_c = 48.75°.',
          'Step 3: Given incidence angle ϕ = 60° > 48.75°.',
          'Step 4: Since ϕ > ϕ_c, the ray undergoes total internal reflection back into the water at 60°.'
        ],
        answerAr: 'يعاني الشعاع انعكاساً كلياً داخلياً في الماء؛ لأن زاوية السقوط (60°) أكبر من الزاوية الحرجة للماء (48.75°).',
        answerEn: 'The ray undergoes total internal reflection because the 60° incidence angle exceeds water\'s 48.75° critical angle.'
      }
    ],

    assessment: {
      id: 'quiz-h11-phy-1',
      lectureId: 'h11-phy-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الأمواج والانكسار والانعكاس الكلي (2 ثانوي)',
      titleEn: 'Mastery Quiz 1: Wave Motion & Total Internal Reflection (Grade 11)',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-p1-1',
          textAr: 'عند انتقال موجة ضوئية من الهواء إلى وسط شفاف كتلته الزجاجية، فإن الخاصية التي تظل ثابتة تماماً دون تغير هي:',
          textEn: 'When a light wave travels from air into a solid glass medium, the property that remains strictly constant is:',
          optionsAr: ['التردد (Frequency)', 'السرعة (Velocity)', 'الطول الموجي (Wavelength)', 'السعة فقط'],
          optionsEn: ['Frequency', 'Velocity', 'Wavelength', 'Amplitude only'],
          correctIndex: 0,
          conceptTestedAr: 'ثبات تردد الموجة عند الانتقال بين الأوساط',
          conceptTestedEn: 'Invariance of frequency across media transitions',
          explanationAr: 'تردد الموجة يعتمد فقط على المصدر المهتز ولا يتغير بانتقال الموجة بين أوساط مختلفة، بينما تقل السرعة ويقصر الطول الموجي.',
          explanationEn: 'Wave frequency is determined solely by the emitter source and remains constant across media boundaries.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p1-2',
          textAr: 'الزاوية الحرجة لوسط شفاف معامل انكساره المطلق $n = 2$ بالنسبة للهواء تساوي:',
          textEn: 'The critical angle of a transparent medium with refractive index n = 2 relative to air is:',
          optionsAr: ['30°', '45°', '60°', '90°'],
          optionsEn: ['30°', '45°', '60°', '90°'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الزاوية الحرجة',
          conceptTestedEn: 'Critical angle calculation sin ϕ_c = 1/n',
          explanationAr: '$\\sin\\phi_c = \\frac{1}{n} = \\frac{1}{2} = 0.5 \\implies \\phi_c = 30^\\circ$.',
          explanationEn: 'sin ϕ_c = 1/2 = 0.5 => ϕ_c = 30°.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p1-3',
          textAr: 'لكي يحدث الانعكاس الكلي الداخلي (Total Internal Reflection) لشعاع ضوئي، يشترط أن ينتقل الضوء من:',
          textEn: 'To achieve total internal reflection, the light ray must travel from:',
          optionsAr: [
            'وسط أكبر كثافة ضوئية إلى وسط أقل كثافة بزاوية سقوط أكبر من الزاوية الحرجة',
            'وسط أقل كثافة ضوئية إلى وسط أكبر كثافة بزاوية سقوط حادة',
            'الهواء إلى الماء عمودياً',
            'المرآة المستوية فقط'
          ],
          optionsEn: [
            'Denser to rarer optical medium at incidence angle greater than critical angle',
            'Rarer to denser optical medium at acute angle',
            'Air into water normally',
            'Flat plane mirror only'
          ],
          correctIndex: 0,
          conceptTestedAr: 'شرطا الانعكاس الكلي الداخلي',
          conceptTestedEn: 'Conditions for total internal reflection',
          explanationAr: 'يشترط: 1) الانتقال من وسط أكبر كثافة (معامل انكسار أكبر) لوسط أقل، 2) السقوط بزاوية أكبر من الزاوية الحرجة ($\\phi > \\phi_c$).',
          explanationEn: 'Total internal reflection requires traveling from higher to lower optical density with incidence exceeding ϕ_c.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p1-4',
          textAr: 'موجة ترددها $50\\text{ Hz}$ وطولها الموجي $4\\text{ m}$، ما هي سرعتها في هذا الوسط؟',
          textEn: 'A wave has frequency 50 Hz and wavelength 4 m. What is its propagation speed?',
          optionsAr: ['200 m/s', '12.5 m/s', '0.08 m/s', '46 m/s'],
          optionsEn: ['200 m/s', '12.5 m/s', '0.08 m/s', '46 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون انتشار الأمواج v = νλ',
          conceptTestedEn: 'Wave velocity formula v = νλ',
          explanationAr: 'سرعة الموجة $v = \\nu \\cdot \\lambda = 50 \\times 4 = 200\\text{ m/s}$.',
          explanationEn: 'v = 50 × 4 = 200 m/s.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p1-5',
          textAr: 'تعتمد فكرة عمل الألياف الضوئية المستخدمة في نقل الاتصالات والمناظير الطبية بشكل أساسي على ظاهرة:',
          textEn: 'The operational mechanism of optical fibers in endoscopy and telecommunications is based on:',
          optionsAr: [
            'الانعكاس الكلي الداخلي (Total Internal Reflection)',
            'تداخل الضوء الهدام',
            'حيود الضوء',
            'التشتت اللوني البسيط'
          ],
          optionsEn: [
            'Total Internal Reflection',
            'Destructive light interference',
            'Light diffraction',
            'Simple chromatic dispersion'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات الألياف الضوئية والانعكاس الكلي',
          conceptTestedEn: 'Optical fiber total internal reflection applications',
          explanationAr: 'الألياف الضوئية تحبس الضوء داخل قلب الليفة بنسبة كفاءة تقارب 100% عبر الانعكاسات الكلية الداخلية المتتالية.',
          explanationEn: 'Optical fibers guide light pulses lossless along curved paths through successive total internal reflections.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: INTERFERENCE, DIFFRACTION & THE TRIANGULAR PRISM ──
  {
    id: 'h11-phy-2',
    order: 2,
    titleAr: 'المحاضرة 2: تداخل وحيود الضوء (تجربة ينج)، والمنشور الثلاثي والمنشور الرقيق',
    titleEn: 'Lecture 2: Light Interference (Young\'s Experiment), Diffraction & The Triangular Prism',
    subtitleAr: 'تجربة الشق المزدوج لـ يونج $\\Delta y = \\frac{\\lambda R}{d}$، قرص إيري، زوايا المنشور الثلاثي، وضع النهاية الصغرى للانحراف، وقوانين وقوة التفريق للمنشور الرقيق',
    subtitleEn: 'Master Young\'s double-slit interference formula Δy = λR/d, Airy disc diffraction, triangular prism deviation laws, minimum deviation position, and thin prism dispersive power.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الحركة الموجية وخواص الضوء',
    unitTitleEn: 'Unit 1: Wave Motion & Light Optics',
    lessonNumberAr: 'الدرس 2: تداخل الضوء وحيوده والمنشور الزجاجي',
    lessonNumberEn: 'Lesson 2: Interference, Diffraction & Optical Prisms',

    warmupHookAr: 'عندما يسقط شعاع من ضوء الشمس الأبيض على منشور زجاجي ثلاثي، فإنه يتحلل بطريقة ساحرة إلى ألوان الطيف السبعة! وقبل ذلك، أثبت العالم توماس ينج عام 1801 الطبيعة الموجية القاطعة للضوء عندما مرر الضوء عبر فتحتين ضيقتين، فشاهد هدب تداخل مضيئة ومظلمة! كيف يمكن للضوء مضافاً إلى الضوء أن يُنتج ظلاماً؟ دراسة التداخل والحيود والمناشير هي جوهر البصريات الفيزيائية الحديثة!',
    warmupHookEn: 'Thomas Young proved light\'s wave nature in 1801 via double-slit interference fringes. Analyzing interference Δy = λR/d, diffraction limits, and chromatic dispersion in triangular prisms underpins spectrometer design and laser physics.',

    learningOutcomesAr: [
      'أن يوضح الطالب شروط تداخل الضوء، وتجربة الشق المزدوج لتوماس ينج، ويطبق القانون: $\\Delta y = \\frac{\\lambda R}{d}$ لحساب الطول الموجي',
      'أن يميز بين التداخل البناء (فرق المسار $= m\\lambda$) والتداخل الهدام (فرق المسار $= (m + \\frac{1}{2})\\lambda$) وحيود الضوء وقرص إيري (Airy Disc)',
      'أن يستنتج ويطبق قوانين المنشور الثلاثي: زاوية الرأس $A = \\theta_1 + \\phi_2$ وزاوية الانحراف $\\alpha = \\phi_1 + \\theta_2 - A$',
      'أن يحسب معامل الانكسار في وضع النهاية الصغرى للانحراف: $n = \\frac{\\sin\\left(\\frac{\\alpha_0 + A}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$',
      'أن يطبق قوانين المنشور الرقيق: $\\alpha_0 = A(n - 1)$ والانفراج الزاوي وقوة التفريق اللوني $\\omega_\\alpha = \\frac{n_b - n_r}{n_y - 1}$'
    ],
    learningOutcomesEn: [
      'Analyze Young\'s double-slit experiment and apply fringe spacing formula Δy = λR/d',
      'Distinguish constructive (path difference mλ) from destructive interference ((m+1/2)λ) and Airy disc diffraction',
      'Apply triangular prism geometry: Apex angle A = θ₁ + ϕ₂ and Deviation angle α = ϕ₁ + θ₂ - A',
      'Calculate refractive index at minimum deviation n = sin((α₀+A)/2) / sin(A/2)',
      'Apply thin prism formulas α₀ = A(n - 1), angular dispersion, and dispersive power ω_α = (n_b - n_r)/(n_y - 1)'
    ],

    vocabulary: [
      {
        termAr: 'هدب التداخل (Interference Fringes)',
        termEn: 'Interference Fringes',
        definitionAr: 'مناطق مضيئة ومظلمة متناوبة ناتجة عن تراكب موجات ضوئية مترابطة صادرة من مصدرين ضوئيين لهما نفس التردد والسعة والطور.',
        definitionEn: 'Alternating bright and dark bands formed by superposition of coherent light waves from two synchronous sources.'
      },
      {
        termAr: 'وضع النهاية الصغرى للانحراف (Minimum Deviation)',
        termEn: 'Minimum Deviation Position',
        definitionAr: 'الوضع الذي ينكسر فيه الشعاع الضوئي داخل المنشور موازياً لقاعدته، وتتساوى فيه زاوية السقوط الأولى مع زاوية الخروج ($\\phi_1 = \\theta_2$) وزاوية الانكسار الأولى مع السقوط الثانية ($\\theta_1 = \\phi_2$).',
        definitionEn: 'The symmetric orientation of a prism where light passes parallel to the base, with ϕ₁ = θ₂ and θ₁ = ϕ₂.'
      },
      {
        termAr: 'قوة التفريق اللوني (Dispersive Power - ωα)',
        termEn: 'Dispersive Power (ωα)',
        definitionAr: 'النسبة بين الانفراج الزاوي للضوء الأزرق والأحمر إلى زاوية انحراف الضوء الأصفر المتوسط: $\\omega_\\alpha = \\frac{n_b - n_r}{n_y - 1}$ (ولا تعتمد على زاوية رأس المنشور).',
        definitionEn: 'The ratio of angular dispersion of blue and red rays to the deviation of yellow light: ω_α = (n_b - n_r)/(n_y - 1).'
      }
    ],

    keyConceptsAr: [
      'قانون يونج: المسافة بين هدبتين متتاليتين من نفس النوع $\\Delta y = \\frac{\\lambda R}{d}$ (تزداد وضوح الهدب بزيادة الطول الموجي $\\lambda$ أو بعد الحائل $R$ ونقص المسافة بين الشقين $d$)',
      'الهدبة المركزية تكون مضيئة دائماً لأن فرق المسار عندها يساوي صفراً',
      'قوانين المنشور الثلاثي: $A = \\theta_1 + \\phi_2$ و $\\alpha = \\phi_1 + \\theta_2 - A$',
      'في المنشور الرقيق (زاوية رأسه $A \\le 10^\\circ$): يكون دائماً في وضع النهاية الصغرى للانحراف وقانونه $\\alpha_0 = A(n - 1)$',
      'الانفراج الزاوي بين الأزرق والأحمر $= A(n_b - n_r)$ ، ومعامل انكسار اللون الأصفر $n_y = \\frac{n_b + n_r}{2}$'
    ],
    keyConceptsEn: [
      'Young\'s fringe separation: Δy = λR/d (fringe clarity increases with red longer wavelength, larger R, smaller d)',
      'Central fringe is always bright with zero optical path difference',
      'Prism apex relation A = θ₁ + ϕ₂ and total angular deviation α = ϕ₁ + θ₂ - A',
      'Thin prism deviation α₀ = A(n - 1); Angular dispersion = A(n_b - n_r)',
      'Dispersive power ω_α = (n_b - n_r)/(n_y - 1) is independent of apex angle A'
    ],

    summaryAr: 'تتناول المحاضرة الثانية تداخل وحيود الضوء (تجربة ينج وقانون $\\Delta y = \\frac{\\lambda R}{d}$)، ودراسة مسارات الضوء في المنشور الثلاثي والمنشور الرقيق وقوانين الانفراج وقوة التفريق اللوني.',
    summaryEn: 'Covers physical optics: double-slit interference fringe spacing, diffraction limits, triangular prism minimum deviation, and thin prism dispersive power.',

    sections: [
      {
        titleAr: '1. تداخل وحيود الضوء وتجربة ينج',
        titleEn: '1. Light Interference & Young\'s Double Slit Experiment',
        contentAr: '1) تجربة الشق المزدوج لتوماس ينج:\n- القانون: $\\Delta y = \\frac{\\lambda \\cdot R}{d}$\n  * $\\Delta y$: المسافة بين هدبتين مضيئتين متتاليتين أو مظلمتين متتاليتين.\n  * $\\lambda$: الطول الموجي للضوء الأحادي اللون المستخدم.\n  * $R$: المسافة بين حاجز الشقين وحائل استقبال الهدب.\n  * $d$: المسافة بين الشقين المستطيلين.\n\n2) شروط التداخل وتمايز الهدب:\n- تداخل بناء: فرق المسار $= m\\lambda$ ⟹ هدبة مضيئة.\n- تداخل هدام: فرق المسار $= (m + \\frac{1}{2})\\lambda$ ⟹ هدبة مظلمة.\n- يكون التداخل أكثر وضوحاً عند استخدام الضوء الأحمر لكبر طوله الموجي $\\lambda$.',
        contentEn: 'Young\'s fringe spacing Δy = λR/d. Constructive interference occurs at path difference mλ; destructive at (m+1/2)λ.'
      },
      {
        titleAr: '2. المنشور الثلاثي والمنشور الرقيق',
        titleEn: '2. Triangular Prism & Thin Prism Dispersion',
        contentAr: '1) المنشور الثلاثي العام:\n- زاوية الرأس: $A = \\theta_1 + \\phi_2$.\n- زاوية الانحراف: $\\alpha = \\phi_1 + \\theta_2 - A$.\n- في وضع النهاية الصغرى للانحراف ($\\phi_1 = \\theta_2 = \\phi_0$ و $\\theta_1 = \\phi_2 = \\theta_0 = \\frac{A}{2}$):\n  $n = \\frac{\\sin\\left(\\frac{\\alpha_0 + A}{2}\\right)}{\\sin\\left(\\frac{A}{2}\\right)}$.\n\n2) المنشور الرقيق (Thin Prism):\n- زاوية رأسه صغيرة ($A \\le 10^\\circ$):\n  * زاوية الانحراف: $\\alpha_0 = A(n - 1)$.\n  * الانفراج الزاوي بين الأزرق والأحمر: $\\Delta \\alpha = \\alpha_b - \\alpha_r = A(n_b - n_r)$.\n  * قوة التفريق اللوني: $\\omega_\\alpha = \\frac{n_b - n_r}{n_y - 1}$ حيث $n_y = \\frac{n_b + n_r}{2}$.',
        contentEn: 'Triangular prism geometry yields deviation α = ϕ₁ + θ₂ - A. Thin prisms follow α₀ = A(n - 1) and angular dispersion A(n_b - n_r).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11-phy2-1',
        questionAr: 'في تجربة الشق المزدوج ليونج، كانت المسافة بين الشقين $d = 0.2\\text{ mm}$، والمسافة بين حاجز الشقين وحائل الرؤية $R = 120\\text{ cm}$. فإذا كانت المسافة بين الهدبة المضيئة الأولى والهدبة المضيئة الثالثة هي $6\\text{ mm}$، احسب الطول الموجي للضوء المستخدم بالنانومتر؟',
        questionEn: 'In Young\'s experiment, slit separation d = 0.2 mm, screen distance R = 120 cm. If the distance between the 1st and 3rd bright fringes is 6 mm, calculate the wavelength in nanometers?',
        solutionStepsAr: [
          'الخطوة 1: المسافة بين الهدبة المضيئة الأولى والثالثة تمثل هدبتين (2Δy) = 6 mm ⟹ Δy = 6 / 2 = 3 mm = 3 × 10⁻³ m.',
          'الخطوة 2: تحويل الوحدات: d = 0.2 mm = 0.2 × 10⁻³ m = 2 × 10⁻⁴ m ، R = 120 cm = 1.2 m.',
          'الخطوة 3: من قانون يونج: Δy = (λ · R) / d ⟹ λ = (Δy · d) / R.',
          'الخطوة 4: التعويض: λ = (3 × 10⁻³ × 2 × 10⁻⁴) / 1.2 = (6 × 10⁻⁷) / 1.2 = 5 × 10⁻⁷ m.',
          'الخطوة 5: التحويل للنانومتر: λ = 5 × 10⁻⁷ × 10⁹ = 500 nm.'
        ],
        solutionStepsEn: [
          'Step 1: Distance between 1st and 3rd bright fringes corresponds to 2Δy = 6 mm => Δy = 3 mm = 3 × 10⁻³ m.',
          'Step 2: Convert: d = 2 × 10⁻⁴ m, R = 1.2 m.',
          'Step 3: λ = (Δy · d) / R.',
          'Step 4: λ = (3 × 10⁻³ × 2 × 10⁻⁴) / 1.2 = 5 × 10⁻⁷ m.',
          'Step 5: Convert to nm: λ = 500 nm.'
        ],
        answerAr: 'الطول الموجي للضوء المستخدم = 500 نانومتر (500 nm).',
        answerEn: 'Wavelength λ = 500 nm.'
      }
    ],

    assessment: {
      id: 'quiz-h11-phy-2',
      lectureId: 'h11-phy-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: تداخل الضوء والمناشير (2 ثانوي)',
      titleEn: 'Mastery Quiz 2: Light Interference & Optical Prisms (Grade 11)',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-p2-1',
          textAr: 'في تجربة الشق المزدوج ليونج، تزداد المسافة بين هدب التداخل ($\\Delta y$) وتصبح أكثر وضوحاً عند:',
          textEn: 'In Young\'s double-slit experiment, fringe separation Δy increases and becomes clearer when:',
          optionsAr: [
            'استخدام ضوء ذي طول موجي أكبر (مثل الضوء الأحمر)',
            'زيادة المسافة بين الشقين d',
            'تقريب حائل الاستقبال R من الشقين',
            'استخدام ضوء أبيض غير مترابط'
          ],
          optionsEn: [
            'Using light with a longer wavelength (e.g. red light)',
            'Increasing slit separation distance d',
            'Moving screen R closer to slits',
            'Using incoherent white light'
          ],
          correctIndex: 0,
          conceptTestedAr: 'العوامل المؤثرة على مسافة هدب التداخل في تجربة ينج',
          conceptTestedEn: 'Young\'s fringe spacing factors Δy = λR/d',
          explanationAr: 'طبقاً للعلاقة $\\Delta y = \\frac{\\lambda R}{d}$، تتناسب $\\Delta y$ طردياً مع الطول الموجي $\\lambda$، والضوء الأحمر يمتلك أكبر طول موجي في الطيف المرئي.',
          explanationEn: 'Fringe spacing Δy is directly proportional to wavelength λ, making red light produce the widest, most distinct fringes.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p2-2',
          textAr: 'منشور رقيق زاوية رأسه $A = 8^\\circ$ ومعامل انكسار مادته $n = 1.5$. فإن زاوية انحراف الضوء فيه تساوي:',
          textEn: 'A thin prism has apex angle A = 8° and refractive index n = 1.5. Its angle of deviation is:',
          optionsAr: ['4°', '12°', '8°', '2°'],
          optionsEn: ['4°', '12°', '8°', '2°'],
          correctIndex: 0,
          conceptTestedAr: 'قانون زاوية الانحراف في المنشور الرقيق',
          conceptTestedEn: 'Thin prism deviation formula α₀ = A(n - 1)',
          explanationAr: '$\\alpha_0 = A(n - 1) = 8(1.5 - 1) = 8(0.5) = 4^\\circ$.',
          explanationEn: 'α₀ = A(n - 1) = 8(1.5 - 1) = 4°.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p2-3',
          textAr: 'في المنشور الثلاثي، إذا كانت زاوية الرأس $A = 60^\\circ$ وزاوية الانكسار الأولى $\\theta_1 = 25^\\circ$، فإن زاوية السقوط الثانية $\\phi_2$ تساوي:',
          textEn: 'In a triangular prism with apex angle A = 60° and first refraction angle θ₁ = 25°, the second incidence angle ϕ₂ is:',
          optionsAr: ['35°', '85°', '25°', '30°'],
          optionsEn: ['35°', '85°', '25°', '30°'],
          correctIndex: 0,
          conceptTestedAr: 'علاقة زاوية رأس المنشور بزوايا الانكسار',
          conceptTestedEn: 'Prism apex angle relation A = θ₁ + ϕ₂',
          explanationAr: 'زاوية رأس المنشور $A = \\theta_1 + \\phi_2 \\implies 60 = 25 + \\phi_2 \\implies \\phi_2 = 60 - 25 = 35^\\circ$.',
          explanationEn: 'A = θ₁ + ϕ₂ => 60 = 25 + ϕ₂ => ϕ₂ = 35°.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p2-4',
          textAr: 'قوة التفريق اللوني للمنشور الرقيق ($\\omega_\\alpha$) تعتمد فقط على:',
          textEn: 'The dispersive power of a thin prism (ω_α) depends exclusively upon:',
          optionsAr: [
            'مادة المنشور ومعاملات انكسار ألوان الضوء',
            'زاوية رأس المنشور A',
            'زاوية سقوط الضوء الأولى',
            'مساحة وجه المنشور'
          ],
          optionsEn: [
            'Prism material composition and color refractive indices',
            'Prism apex angle A',
            'Initial incidence angle',
            'Prism surface area'
          ],
          correctIndex: 0,
          conceptTestedAr: 'العوامل التي تتوقف عليها قوة التفريق اللوني',
          conceptTestedEn: 'Dispersive power independence from apex angle',
          explanationAr: 'قوة التفريق اللوني $\\omega_\\alpha = \\frac{n_b - n_r}{n_y - 1}$ تعتمد فقط على نوع مادة المنشور ومعاملات الانكسار ولا تعتمد إطلاقاً على زاوية الرأس $A$.',
          explanationEn: 'Dispersive power ω_α depends solely on refractive indices of the glass, independent of prism apex angle A.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-p2-5',
          textAr: 'تكون الهدبة المركزية في تجربة الشق المزدوج ليونج مضيئة دائماً لأن:',
          textEn: 'The central fringe in Young\'s experiment is always bright because:',
          optionsAr: [
            'فرق المسار بين الموجتين الصادرتين من الشقين يساوي صفراً',
            'فرق المسار يساوي نصف طول موجي',
            'الضوء يمر دون أي انكسار',
            'السرعة تتضاعف في المنتصف'
          ],
          optionsEn: [
            'Optical path difference between interfering waves is exactly zero',
            'Path difference equals half a wavelength',
            'Light passes without refraction',
            'Velocity doubles at screen center'
          ],
          correctIndex: 0,
          conceptTestedAr: 'سبب إضاءة الهدبة المركزية',
          conceptTestedEn: 'Zero path difference of central bright fringe',
          explanationAr: 'تصل الموجتان إلى منتصف الحائل قاطعتين نفس المسافة، فيكون فرق المسار = 0، مما ينتج تداخلاً بناءً دائماً.',
          explanationEn: 'Waves travel equal geometric distances to the center (path difference = 0), producing constructive interference.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: PROPERTIES OF FLUIDS: HYDRODYNAMICS & VISCOSITY ──
  {
    id: 'h11-phy-3',
    order: 3,
    titleAr: 'المحاضرة 3: خواص الموائع المتحركة: السريان الهادئ، معادلة الاستمرارية، واللزوجة',
    titleEn: 'Lecture 3: Hydrodynamics: Steady Streamline Flow, Continuity Equation & Viscosity',
    subtitleAr: 'خطوط الانسياب، معدل السريان الحجمي والكتلي $Q_v, Q_m$، معادلة الاستمرارية $A_1 v_1 = A_2 v_2$، وقانون وقوة اللزوجة $F = \\eta \\frac{Av}{d}$ وتطبيقات التزييت وسرعة الترسيب',
    subtitleEn: 'Master laminar streamlines, volume/mass flow rates, continuity equation A₁v₁ = A₂v₂, coefficient of viscosity, viscous drag force, engine lubrication, and blood sedimentation rate (ESR).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Physics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: خواص الموائع المتحركة',
    unitTitleEn: 'Unit 2: Hydrodynamics & Fluid Properties',
    lessonNumberAr: 'الدرس 1: السريان الهادئ واللزوجة',
    lessonNumberEn: 'Lesson 1: Fluid Dynamics & Viscosity',

    warmupHookAr: 'عندما ترغب في رش الماء لمسافة أبعد أثناء ري الحديقة، تقوم لا إرادياً بتضييق فوهة الخرطوم بإصبعك، فتلاحظ اندفاع الماء بسرعة فائقة! كما أن الأطباء يقيسون "سرعة ترسيب كرات الدم الحمراء" (ESR) في الدم لتشخيص التهابات المفاصل والحمى الروماتيزمية بالاعتماد على قانون اللزوجة! هيدروديناميكا الموائع واللزوجة تفسر تدفق الدم في الشرايين، تصميم أجنحة الطائرات، وتزييت محركات السيارات!',
    warmupHookEn: 'Constricting a garden hose nozzle accelerates fluid velocity via the continuity equation A₁v₁ = A₂v₂. Fluid dynamics and viscosity govern cardiovascular hemodynamics, blood sedimentation rate diagnostics, and engine lubrication.',

    learningOutcomesAr: [
      'أن يقارن الطالب بين السريان الهادئ (Laminar/Steady Flow) والسريان المضطرب (Turbulent Flow) وخصائص خطوط الانسياب',
      'أن يطبق قانوني معدل السريان الحجمي $Q_v = A v$ ومعدل السريان الكتلي $Q_m = \\rho A v$',
      'أن يطبق معادلة الاستمرارية (Continuity Equation): $A_1 v_1 = A_2 v_2$ وفي حالة التفرع لعدة أنابيب $A_1 v_1 = n A_2 v_2$',
      'أن يحسب قوة اللزوجة: $F = \\eta \\frac{A v}{d}$ ومعامل اللزوجة $\\eta$ ويفسر تطبيقاتها في تزييت الآلات وسرعة استهلاك وقود السيارات وسرعة ترسيب كرات الدم الحمراء (ESR)'
    ],
    learningOutcomesEn: [
      'Compare steady laminar flow and turbulent flow along with streamline characteristics',
      'Calculate volume flow rate Q_v = Av and mass flow rate Q_m = ρAv',
      'Apply continuity equation A₁v₁ = A₂v₂ and branching conduits A₁v₁ = n A₂v₂',
      'Calculate viscous drag force F = η(Av/d) and interpret engineering/medical applications (lubrication, fuel efficiency, blood ESR)'
    ],

    vocabulary: [
      {
        termAr: 'خطوط الانسياب (Streamlines)',
        termEn: 'Streamlines',
        definitionAr: 'خطوط وهمية متصلة توضح المسار الذي تسلكه جزيئات المائع أثناء سريانه الهادئ، وتتميز بأنها لا تتقاطع ومماسها يحدد اتجاه السرعة اللحظية، وتزداد كثافتها في السرعات العالية.',
        definitionEn: 'Continuous imaginary curves showing instantaneous velocity direction of laminar fluid elements without intersecting.'
      },
      {
        termAr: 'معادلة الاستمرارية (Equation of Continuity)',
        termEn: 'Equation of Continuity',
        definitionAr: 'تطبيق لمبدأ بقاء الكتلة في السريان الهادئ لمائع غير قابل للانضغاط: $A_1 v_1 = A_2 v_2$. تتناسب سرعة السريان عكسياً مع مساحة مقطع الأنبوب.',
        definitionEn: 'Conservation of mass principle for incompressible steady flow stating that volumetric flow rate A·v is constant.'
      },
      {
        termAr: 'معامل اللزوجة (Coefficient of Viscosity - η)',
        termEn: 'Coefficient of Viscosity (η)',
        definitionAr: 'القوة المماسية المؤثرة على وحدة المساحات اللازمة للحفاظ على فرق في السرعة مقداره وحدة السرعات بين طبقتين من المائع المسافة بينهما وحدة الأطوال ($N\\cdot s/m^2$ أو $kg/m\\cdot s$).',
        definitionEn: 'Tangential viscous drag per unit area per unit velocity gradient (units: N·s/m² or Pa·s).'
      }
    ],

    keyConceptsAr: [
      'معدل السريان الحجمي: $Q_v = \\frac{V}{t} = A \\cdot v$ بوحدة $m^3/s$',
      'معدل السريان الكتلي: $Q_m = \\frac{m}{t} = \\rho \\cdot Q_v = \\rho A v$ بوحدة $kg/s$',
      'النسبة العكسية بين السرعة والمساحة: $\\frac{v_1}{v_2} = \\frac{A_2}{A_1} = \\frac{r_2^2}{r_1^2}$',
      'قانون اللزوجة: $F = \\eta_v \\frac{A \\cdot v}{d}$ حيث $A$ المساحة و $v$ السرعة و $d$ سمك طبقة السائل',
      'التطبيقات الطبية (سرعة الترسيب ESR): الحجم الأكبر لكرات الدم الملتصقة في مرضى الروماتيزم يزيد من سرعة هبوطها وترسيبها في قاع الأنبوب'
    ],
    keyConceptsEn: [
      'Volumetric flow rate Q_v = A · v (m³/s); Mass flow rate Q_m = ρ · A · v (kg/s)',
      'Velocity inverse area relation: v₁/v₂ = A₂/A₁ = r₂²/r₁²',
      'Viscosity force formula: F = η(A·v/d)',
      'Clinical ESR: Erythrocyte aggregation in rheumatic infections increases particle radius, accelerating sedimentation speed'
    ],

    summaryAr: 'تغطي المحاضرة الثالثة ميكانيكا الموائع المتحركة لصف الثاني الثانوي: خصائص السريان الهادئ وخطوط الانسياب، معادلة الاستمرارية وحساب معدلات السريان، وقانون اللزوجة وتطبيقات التزييت وسرعة الترسيب في الدم.',
    summaryEn: 'Comprehensive Grade 11 fluid dynamics: laminar streamlines, continuity flow conservation, Newton\'s viscosity formulation, and biomedical ESR diagnostics.',

    sections: [
      {
        titleAr: '1. السريان الهادئ ومعادلة الاستمرارية',
        titleEn: '1. Laminar Steady Flow & Continuity Equation',
        contentAr: '1) السريان الهادئ ومعدل السريان:\n- معدل السريان الحجمي: $Q_v = A \\cdot v$.\n- معدل السريان الكتلي: $Q_m = \\rho \\cdot A \\cdot v$.\n- كتلة السائل الداخلة في وحدة الزمن تساوي كتلة السائل الخارجة (قانون بقاء الكتلة).\n\n2) معادلة الاستمرارية:\n- $A_1 v_1 = A_2 v_2 \\implies r_1^2 v_1 = r_2^2 v_2$.\n- في حالة تفرع الأنبوب الرئيسي إلى $n$ من الأنابيب الفرعية المتماثلة: $A_1 v_1 = n A_2 v_2$.\n- كلما قلت مساحة مقطع الأنبوب، زادت سرعة تدفق السائل.',
        contentEn: 'Steady flow obeys mass conservation: A₁v₁ = A₂v₂. Velocity varies inversely with cross-sectional radius squared.'
      },
      {
        titleAr: '2. قوى اللزوجة وتطبيقاتها الهندسية والطبية',
        titleEn: '2. Viscosity Dynamics, Lubrication & ESR',
        contentAr: '1) قانون اللزوجة:\n- $F = \\eta \\frac{A \\cdot v}{d}$.\n- وحدة قياس معامل اللزوجة: $N \\cdot s / m^2$ أو $kg / (m \\cdot s)$ أو $Pa \\cdot s$.\n\n2) التطبيقات الحيوية والهندسية:\n- تزييت وتشحيم الآلات: تستخدم زيوت عالية اللزوجة لتلتصق بأجزاء المحرك وتقلل الاحتكاك والتآكل والحرارة.\n- سرعة السيارات واستهلاك الوقود: عند السرعات العادية تتناسب مقاومة الهواء طردياً مع السرعة ($F \\propto v$)، وعند السرعات العالية جداً تتناسب مع مربع السرعة ($F \\propto v^2$) فيزداد استهلاك الوقود جداً.\n- سرعة الترسيب (ESR): في حالة الحمى الروماتيزمية تلتصق كرات الدم الحمراء فيزداد نصف قطرها وتسقط بسرعة أكبر من المعدل الطبيعي.',
        contentEn: 'Viscous force F = η(Av/d). Engineering applications include motor oil lubrication and aerodynamic drag scaling; medical diagnostics include erythrocyte sedimentation rate (ESR).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11-phy3-1',
        questionAr: 'شريان رئيسي نصف قطره $0.5\\text{ cm}$ يتدفق فيه الدم بسرعة $0.4\\text{ m/s}$، يتفرع إلى $100$ شعيرة دموية متماثلة نصف قطر كل منها $0.05\\text{ cm}$. احسب سرعة تدفق الدم في كل شعيرة دموية؟',
        questionEn: 'A main artery of radius 0.5 cm has blood velocity 0.4 m/s, branching into 100 identical capillaries of radius 0.05 cm each. Calculate blood velocity in each capillary?',
        solutionStepsAr: [
          'الخطوة 1: نطبق معادلة الاستمرارية في حالة التفرع لـ n من الأنابيب: A₁ v₁ = n A₂ v₂.',
          'الخطوة 2: بما أن A = π r²، إذن: π r₁² v₁ = n π r₂² v₂ ⟹ r₁² v₁ = n r₂² v₂.',
          'الخطوة 3: التعويض بالقيم: (0.5)² × 0.4 = 100 × (0.05)² × v₂.',
          'الخطوة 4: 0.25 × 0.4 = 100 × 0.0025 × v₂ ⟹ 0.10 = 0.25 × v₂.',
          'الخطوة 5: v₂ = 0.10 / 0.25 = 0.4 m/s (أو 40 cm/s).'
        ],
        solutionStepsEn: [
          'Step 1: Branching continuity: r₁² v₁ = n r₂² v₂.',
          'Step 2: (0.5)² × 0.4 = 100 × (0.05)² × v₂.',
          'Step 3: 0.10 = 0.25 × v₂.',
          'Step 4: v₂ = 0.10 / 0.25 = 0.4 m/s.'
        ],
        answerAr: 'سرعة تدفق الدم في الشعيرة الدموية = 0.4 m/s (تسمح بالتبادل الفعال للغازات).',
        answerEn: 'Capillary blood velocity v₂ = 0.4 m/s.'
      }
    ],

    assessment: {
      id: 'quiz-h11-phy-3',
      lectureId: 'h11-phy-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: السريان واللزوجة (2 ثانوي)',
      titleEn: 'Mastery Quiz 3: Hydrodynamics & Viscosity (Grade 11)',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-p3-1',
          textAr: 'إذا قل نصف قطر أنبوبة سريان هادئ إلى النصف ($r_2 = \\frac{1}{2} r_1$)، فإن سرعة تدفق السائل فيها تصبح:',
          textEn: 'If the radius of a laminar pipe is halved (r₂ = r₁/2), the fluid flow velocity becomes:',
          optionsAr: ['4 أضعاف سرعتها الأولى (تزداد 4 مرات)', 'ضعف سرعتها الأولى', 'نصف سرعتها الأولى', 'تقل إلى الربع'],
          optionsEn: ['4 times the initial velocity', '2 times the initial velocity', 'Half initial velocity', 'One fourth initial velocity'],
          correctIndex: 0,
          conceptTestedAr: 'العلاقة العكسية بين السرعة ومربع نصف القطر في الاستمرارية',
          conceptTestedEn: 'Continuity inverse square radius proportionality',
          explanationAr: 'معادلة الاستمرارية: $v_2 = v_1 \\left(\\frac{r_1}{r_2}\\right)^2 = v_1 \\left(\\frac{r_1}{r_1 / 2}\\right)^2 = v_1 (2)^2 = 4 v_1$.',
          explanationEn: 'v₂ = v₁ (r₁ / r₂)² = v₁ (2)² = 4v₁.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p3-2',
          textAr: 'وحدة قياس معامل اللزوجة ($\\eta$) في النظام الدولي للوحدات (SI) هي:',
          textEn: 'The SI unit for the coefficient of viscosity (η) is:',
          optionsAr: ['N · s / m²  (أو kg / m · s)', 'N / m²', 'Joule · s', 'kg · m / s'],
          optionsEn: ['N · s / m² (or kg / m · s)', 'N / m²', 'Joule · s', 'kg · m / s'],
          correctIndex: 0,
          conceptTestedAr: 'وحدة قياس معامل اللزوجة',
          conceptTestedEn: 'Coefficient of viscosity SI dimensions',
          explanationAr: 'من القانون $\\eta = \\frac{F \\cdot d}{A \\cdot v} = \\frac{N \\cdot m}{m^2 \\cdot (m/s)} = N \\cdot s / m^2 = kg / (m \\cdot s)$.',
          explanationEn: 'η = (F · d)/(A · v) yields N·s/m² or Pa·s (kg/m·s).',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p3-3',
          textAr: 'عند قيادة سيارة بسرعات عالية جداً، تتناسب مقاومة الهواء الناتجة عن لزوجته طردياً مع:',
          textEn: 'At very high automotive speeds, air resistance drag varies proportionally with:',
          optionsAr: ['مربع سرعة السيارة (v²)', 'سرعة السيارة فقط (v)', 'مكعب السرعة', 'كتلة السائق'],
          optionsEn: ['Square of vehicle speed (v²)', 'Vehicle speed linearly (v)', 'Cube of speed', 'Driver mass'],
          correctIndex: 0,
          conceptTestedAr: 'علاقة مقاومة الهواء بسرعة السيارة العالية',
          conceptTestedEn: 'High speed aerodynamic drag proportional to v²',
          explanationAr: 'في السرعات الفائقة تضطرب خطوط الانسياب وتتناسب مقاومة الهواء مع مربع السرعة ($F \\propto v^2$) مما يضاعف استهلاك الوقود.',
          explanationEn: 'At high velocities, turbulent air drag scales with the square of velocity (v²).',
          difficulty: 'medium'
        },
        {
          id: 'qh11-p3-4',
          textAr: 'من خصائص خطوط الانسياب في السريان الهادئ لمائع:',
          textEn: 'A fundamental characteristic of streamlines in laminar fluid flow is that they:',
          optionsAr: [
            'لا تتقاطع أبداً وتتزاحم في مناطق السرعات العالية',
            'تتقاطع عند المنحنيات الحادة',
            'تختفي تماماً في الأنابيب الضيقة',
            'تتحرك عمودياً على اتجاه السريان'
          ],
          optionsEn: [
            'Never intersect and crowd closer in high-velocity zones',
            'Intersect at sharp pipe bends',
            'Disappear inside narrow conduits',
            'Travel perpendicular to flow vector'
          ],
          correctIndex: 0,
          conceptTestedAr: 'خصائص خطوط الانسياب',
          conceptTestedEn: 'Streamline non-intersection properties',
          explanationAr: 'خطوط الانسياب لا تتقاطع ومماسها يحدد السرعة وتزداد كثافتها في المقاطع الضيقة ذات السرعات العالية.',
          explanationEn: 'Streamlines are non-intersecting trajectories whose local density indicates fluid speed.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p3-5',
          textAr: 'في التشخيص الطبي، ارتفاع سرعة ترسيب كرات الدم الحمراء (ESR) عن المعدل الطبيعي يدل على:',
          textEn: 'In clinical medicine, an elevated Erythrocyte Sedimentation Rate (ESR) indicates:',
          optionsAr: [
            'وجود التهابات كالحمى الروماتيزمية لزيادة حجم وتلاصق الكريات',
            'نقص حاد في كرات الدم الحمراء (أنيميا حادة)',
            'توقف تدفق الدم تماماً',
            'انخفاض لزوجة بلازما الدم للصفر'
          ],
          optionsEn: [
            'Inflammatory conditions such as rheumatic fever due to erythrocyte clumping',
            'Acute anemia red cell deficiency',
            'Complete vascular circulatory arrest',
            'Zero plasma blood viscosity'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التطبيقات الطبية لسرعة الترسيب ESR',
          conceptTestedEn: 'Clinical ESR diagnostic interpretation',
          explanationAr: 'تلاصق كرات الدم الحمراء يزيد نصف قطر الجسيمات المتساقطة فتزداد سرعة هبوطها وترسيبها طبقاً لقانون ستوكس واللزوجة.',
          explanationEn: 'Erythrocyte aggregation in inflammatory disease increases effective radius, accelerating terminal sedimentation speed.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: FLUID STATICS & HYDROSTATIC PRESSURE ──
  {
    id: 'h11-phy-4',
    order: 4,
    titleAr: 'المحاضرة 4: خواص الموائع الساكنة: الكثافة، الضغط عند نقطة في باطن سائل، وقاعدة باسكال',
    titleEn: 'Lecture 4: Fluid Statics: Density, Hydrostatic Pressure & Pascal\'s Hydraulic Principle',
    subtitleAr: 'الكثافة النسبية، الضغط الكلي $P = P_a + \\rho g h$، الأنبوبة ذات الشعبتين، البارومتر الزئبقي والمانومتر، والمكبس الهيدروليكي والفائدة الآلية $\\eta = \\frac{F}{f} = \\frac{A}{a}$',
    subtitleEn: 'Master relative density, hydrostatic pressure P = P_a + ρgh, U-tube manometers, Torricelli\'s mercury barometer, and Pascal\'s hydraulic press mechanical advantage.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Physics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: خواص الموائع الساكنة والضغط',
    unitTitleEn: 'Unit 3: Fluid Statics & Hydrostatic Pressure',
    lessonNumberAr: 'الدرس 1: الكثافة والضغط والمكبس الهيدروليكي',
    lessonNumberEn: 'Lesson 1: Hydrostatic Pressure & Pascal\'s Principle',

    warmupHookAr: 'كيف يستطيع طفل صغير بضغطة خفيفة على دواسة فرامل السيارة أن يوقف شاحنة عملاقة تزن 20 طناً وتسير بسرعة 100 كم/ساعة؟ السر يكمن في "مبدأ باسكال" (Pascal\'s Principle) وانتقال الضغط بتمامه في السوائل المحبوسة لمضاعفة القوة آلاف المرات! ومن أعماق خندق ماريانا في المحيط إلى قياس ضغط الدم الشرياني، تحكم قوانين الضغط الساكن أعظم التطبيقات الهندسية والطبية!',
    warmupHookEn: 'Pascal\'s hydraulic principle enables a foot tap on a brake pedal to stop a 20-ton speeding truck by transmitting hydrostatic pressure undiminished. Fluid statics governs submarine hull design, mercury barometers, and hydraulic heavy machinery.',

    learningOutcomesAr: [
      'أن يحسب الطالب الكثافة والكثافة النسبية ($\\rho_{\\text{rel}} = \\frac{\\rho_{\\text{substance}}}{\\rho_{\\text{water}}}$) ويطبقها في الأنبوبة ذات الشعبتين: $\\rho_1 h_1 = \\rho_2 h_2$',
      'أن يحسب الضغط الكلي عند نقطة في باطن سائل: $P = P_a + \\rho g h$ ويحلل علاقة الضغط بالعمق والكثافة',
      'أن يوضح فكرة عمل البارومتر الزئبقي (تجربة تورشيللي $P_a = 76\\text{ cmHg} = 1.013 \\times 10^5\\text{ N/m}^2$) والمانومتر لقياس ضغط الغازات المحبوسة',
      'أن يطبق قاعدة باسكال على المكبس الهيدروليكي ويحسب الفائدة الآلية: $\\eta = \\frac{F}{f} = \\frac{A}{a} = \\frac{y_1}{y_2} = \\frac{v_1}{v_2}$ وكفاءة المكبس'
    ],
    learningOutcomesEn: [
      'Calculate density and relative density, applying U-tube balanced columns ρ₁h₁ = ρ₂h₂',
      'Calculate hydrostatic pressure at depth P = P_a + ρgh across varying fluid layers',
      'Explain Torricelli\'s mercury barometer (P_a = 76 cmHg = 1.013 × 10⁵ Pa) and differential manometers',
      'Apply Pascal\'s Principle to hydraulic presses and compute mechanical advantage η = F/f = A/a = y₁/y₂'
    ],

    vocabulary: [
      {
        termAr: 'الضغط عند نقطة في باطن سائل (Hydrostatic Pressure)',
        termEn: 'Hydrostatic Pressure',
        definitionAr: 'وزن عمود السائل الذي قاعدته وحدة المساحات المحيطة بالنقطة وارتفاعه البعد الرأسي من النقطة حتى سطح السائل: $P = \\rho g h$.',
        definitionEn: 'The pressure exerted by a fluid at equilibrium at a given depth: P = ρgh.'
      },
      {
        termAr: 'قاعدة باسكال (Pascal\'s Principle)',
        termEn: 'Pascal\'s Principle',
        definitionAr: 'عندما يؤثر ضغط على سائل محبوس في إناء مغلق، فإن هذا الضغط ينتقل بتمامه إلى جميع أجزاء السائل، كما ينتقل إلى جدران الإناء الحاوي له.',
        definitionEn: 'A pressure applied to an enclosed fluid is transmitted undiminished to every portion of the fluid and container walls.'
      },
      {
        termAr: 'الفائدة الآلية للمكبس (Mechanical Advantage - η)',
        termEn: 'Mechanical Advantage (η)',
        definitionAr: 'النسبة بين القوة الناتجة على المكبس الكبير ($F$) إلى القوة المؤثرة على المكبس الصغير ($f$)، وتساوي $\\frac{A}{a} = \\frac{D^2}{d^2} = \\frac{y_1}{y_2}$ وتكون دائماً أكبر من الواحد الصحيح.',
        definitionEn: 'The force multiplication ratio of a hydraulic press: η = F/f = A/a = (D/d)² (always > 1).'
      }
    ],

    keyConceptsAr: [
      'جميع النقاط الواقعة في مستوى أفقي واحد داخل سائل ساكن متجانس يكون لها نفس الضغط ($P_1 = P_2$)',
      'الأنبوبة ذات الشعبتين: $\\rho_1 h_1 = \\rho_2 h_2$ لحساب كثافة سائل مجهول بمعلومية كثافة الماء',
      'الضغط الجوي المعتاد ($1\\text{ atm}$): $76\\text{ cmHg} = 760\\text{ mmHg (Torr)} = 1.013 \\times 10^5\\text{ N/m}^2 (Pa) = 1.013\\text{ bar}$',
      'المكبس الهيدروليكي يضاعف القوة ولا يضاعف الشغل المبذول ($W_1 = W_2$ في المكبس المثالي طبقاً لقانون بقاء الطاقة)',
      'قاعدة باسكال تنطبق على السوائل ولا تنطبق على الغازات لأن الغازات قابلة للانضغاط لوجود مسافات بينية كبيرة'
    ],
    keyConceptsEn: [
      'Equipotential hydrostatic pressure: Points at the same horizontal level in a continuous static fluid experience identical pressure',
      'U-Tube density ratio: ρ₁h₁ = ρ₂h₂',
      'Standard atmospheric pressure: 1 atm = 76 cmHg = 1.013 × 10⁵ N/m² (Pa) = 1.013 bar',
      'Hydraulic press multiplies force but strictly conserves total work energy (W₁ = W₂ for ideal presses)',
      'Pascal\'s principle strictly applies to incompressible liquids, failing in compressible gases'
    ],

    summaryAr: 'تتناول المحاضرة الرابعة استاتيكا الموائع والضغط لصف الثاني الثانوي: حساب الكثافة والضغط في باطن السائل، الأنبوبة ذات الشعبتين، قياس الضغط الجوي بالبارومتر، وقاعدة باسكال والمكبس الهيدروليكي.',
    summaryEn: 'Covers fluid statics: hydrostatic pressure at depth P = P_a + ρgh, U-tube manometers, Torricellian barometers, and Pascal\'s hydraulic press mechanics.',

    sections: [
      {
        titleAr: '1. الضغط في باطن سائل والأنبوبة ذات الشعبتين',
        titleEn: '1. Hydrostatic Pressure & U-Tube Manometry',
        contentAr: '1) الضغط في باطن سائل:\n- $P = P_a + \\rho g h$ (إذا كان الإناء مفتوحاً للهواء).\n- فرق الضغط: $\\Delta P = \\rho g h$.\n\n2) الأنبوبة ذات الشعبتين (U-Tube):\n- عند صب سائلين لا يمتزجان (كالزيت والماء):\n  $\\rho_{\\text{water}} h_{\\text{water}} = \\rho_{\\text{oil}} h_{\\text{oil}}$.\n- الكثافة النسبية للزيت: $\\rho_{\\text{rel}} = \\frac{\\rho_{\\text{oil}}}{\\rho_{\\text{water}}} = \\frac{h_{\\text{water}}}{h_{\\text{oil}}}$.',
        contentEn: 'Hydrostatic pressure P = P_a + ρgh. U-tubes balance immiscible liquid column heights inversely proportional to densities ρ₁h₁ = ρ₂h₂.'
      },
      {
        titleAr: '2. البارومتر الزئبقي وقاعدة باسكال والمكبس الهيدروليكي',
        titleEn: '2. Barometer & Pascal\'s Hydraulic Press',
        contentAr: '1) البارومتر الزئبقي لقياس الضغط الجوي:\n- $P_a = \\rho_{\\text{Hg}} g h = 13600 \\times 9.8 \\times 0.76 = 1.013 \\times 10^5\\text{ N/m}^2$.\n- يستخدم لتعيين ارتفاع جبل أو مبنى: $\\rho_{\\text{air}} g h_{\\text{building}} = \\rho_{\\text{Hg}} g (h_1 - h_2)$.\n\n2) المكبس الهيدروليكي (Hydraulic Press):\n- الفائدة الآلية: $\\eta = \\frac{F}{f} = \\frac{A}{a} = \\frac{R^2}{r^2} = \\frac{y_1}{y_2}$.\n- الشغل المبذول على المكبس الصغير يساوي الشغل الناتج على المكبس الكبير في المكبس المثالي ($f \\cdot y_1 = F \\cdot y_2$).',
        contentEn: 'Torricelli\'s barometer determines atmospheric pressure and building altitudes. Pascal\'s hydraulic press multiplies force by area ratio A/a.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11-phy4-1',
        questionAr: 'مكبس هيدروليكي مثالي مساحة مقطع مكبسه الصغير $10\\text{ cm}^2$ ومساحة مكبسه الكبير $200\\text{ cm}^2$. إذا أثرت قوة مقدارها $100\\text{ N}$ على المكبس الصغير، احسب: 1) الفائدة الآلية للمكبس، 2) أكبر كتلة يمكن رفعها بواسطة المكبس الكبير ($g = 10\\text{ m/s}^2$)؟',
        questionEn: 'An ideal hydraulic press has small piston area 10 cm² and large piston area 200 cm². If a 100 N force is applied to the small piston, calculate: 1) Mechanical advantage, 2) Maximum mass lifted by large piston (g = 10 m/s²)?',
        solutionStepsAr: [
          'الخطوة 1: الفائدة الآلية η = A / a = 200 / 10 = 20 (بدون تمييز).',
          'الخطوة 2: حساب القوة الناتجة على المكبس الكبير: F = η × f = 20 × 100 = 2000 N.',
          'الخطوة 3: القوة الناتجة تمثل وزن الكتلة المرفوعة: F = m × g ⟹ 2000 = m × 10.',
          'الخطوة 4: الكتلة المرفوعة m = 2000 / 10 = 200 kg.'
        ],
        solutionStepsEn: [
          'Step 1: Mechanical advantage η = A / a = 200 / 10 = 20.',
          'Step 2: Force on large piston F = η · f = 20 × 100 = 2000 N.',
          'Step 3: Weight F = m · g => 2000 = m × 10.',
          'Step 4: Lifted mass m = 200 kg.'
        ],
        answerAr: '1) الفائدة الآلية = 20 ، 2) أقصى كتلة مرفوعة = 200 كيلوجرام (200 kg).',
        answerEn: '1) Mechanical advantage = 20, 2) Maximum lifted mass = 200 kg.'
      }
    ],

    assessment: {
      id: 'quiz-h11-phy-4',
      lectureId: 'h11-phy-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: خواص الموائع الساكنة وقاعدة باسكال (2 ثانوي)',
      titleEn: 'Mastery Quiz 4: Fluid Statics & Pascal\'s Principle (Grade 11)',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-p4-1',
          textAr: 'لا تنطبق قاعدة باسكال على الغازات بسبب:',
          textEn: 'Pascal\'s Principle cannot be applied to gaseous systems because gases:',
          optionsAr: [
            'قابلة للانضغاط لوجود مسافات بينية كبيرة بين جزيئاتها',
            'عديمة الكتلة',
            'لا تتأثر بالجاذبية الأرضية',
            'شديدة اللزوجة'
          ],
          optionsEn: [
            'Are compressible due to large intermolecular spaces',
            'Possess zero mass',
            'Are unaffected by gravity',
            'Are highly viscous'
          ],
          correctIndex: 0,
          conceptTestedAr: 'سبب عدم انطباق قاعدة باسكال على الغازات',
          conceptTestedEn: 'Compressibility limitation of Pascal\'s principle in gases',
          explanationAr: 'في الغازات يستهلك الضغط المؤثر في تقليل المسافات البينية وضغط الغاز بدلاً من الانتقال بتمامه كما في السوائل غير القابلة للانضغاط.',
          explanationEn: 'Gases absorb applied work in compressive volumetric reduction rather than transmitting pressure undiminished.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p4-2',
          textAr: 'الضغط الكلي عند نقطة في قاع بحيرة عمقها $20\\text{ m}$ (حيث كثافة الماء $1000\\text{ kg/m}^3, g=10\\text{ m/s}^2, P_a = 10^5\\text{ Pa}$) يساوي:',
          textEn: 'Total pressure at the bottom of a 20 m deep freshwater lake (ρ=1000 kg/m³, g=10 m/s², P_a = 10⁵ Pa) is:',
          optionsAr: ['3 × 10⁵ Pa', '2 × 10⁵ Pa', '1 × 10⁵ Pa', '200 Pa'],
          optionsEn: ['3 × 10⁵ Pa', '2 × 10⁵ Pa', '1 × 10⁵ Pa', '200 Pa'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الضغط الكلي في باطن سائل P = Pa + ρgh',
          conceptTestedEn: 'Total hydrostatic pressure calculation',
          explanationAr: '$P = P_a + \\rho g h = 10^5 + (1000 \\times 10 \\times 20) = 10^5 + 2 \\times 10^5 = 3 \\times 10^5\\text{ Pa}$.',
          explanationEn: 'P = 10⁵ + (1000 × 10 × 20) = 3 × 10⁵ Pa.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p4-3',
          textAr: 'الفائدة الآلية للمكبس الهيدروليكي ($\\eta$) تكون دائماً:',
          textEn: 'The mechanical advantage (η) of a hydraulic press is always:',
          optionsAr: ['أكبر من الواحد الصحيح دائماً (η > 1)', 'أقل من الواحد الصحيح', 'تساوي صفراً', 'تساوي كفاءة المحرك الحراري'],
          optionsEn: ['Always greater than 1 (η > 1)', 'Less than 1', 'Always zero', 'Equal to thermal efficiency'],
          correctIndex: 0,
          conceptTestedAr: 'قيمة الفائدة الآلية للمكبس الهيدروليكي',
          conceptTestedEn: 'Hydraulic mechanical advantage magnitude',
          explanationAr: 'الفائدة الآلية هي النسبة بين مساحة المكبس الكبير إلى الصغير ($A/a$) وتكون دائماً أكبر من 1 لمضاعفة القوة.',
          explanationEn: 'Mechanical advantage η = A/a is inherently > 1 to provide force multiplication.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p4-4',
          textAr: 'عند صب ماء وزيت في أنبوبة ذات شعبتين والاتزان، إذا كان ارتفاع عمود الماء فوق السطح الفاصل $8\\text{ cm}$ والزيت $10\\text{ cm}$، فإن الكثافة النسبية للزيت هي:',
          textEn: 'In a balanced U-tube with water and oil, if water height is 8 cm and oil height is 10 cm, relative density of oil is:',
          optionsAr: ['0.8', '1.25', '80', '800'],
          optionsEn: ['0.8', '1.25', '80', '800'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الكثافة النسبية في الأنبوبة ذات الشعبتين',
          conceptTestedEn: 'U-tube relative density formula ρ_rel = h_w / h_oil',
          explanationAr: '$\\rho_{\\text{rel}} = \\frac{\\rho_{\\text{oil}}}{\\rho_{\\text{water}}} = \\frac{h_{\\text{water}}}{h_{\\text{oil}}} = \\frac{8}{10} = 0.8$.',
          explanationEn: 'Relative density = h_water / h_oil = 8/10 = 0.8.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p4-5',
          textAr: 'يستخدم البارومتر الزئبقي في قياس:',
          textEn: 'The Torricellian mercury barometer is utilized to measure:',
          optionsAr: ['الضغط الجوي وارتفاعات المباني والجبال', 'لزوجة الدم', 'درجة حرارة النجوم', 'سرعة الضوء في الفراغ'],
          optionsEn: ['Atmospheric pressure and mountain/building altitudes', 'Blood viscosity', 'Star temperature', 'Speed of light'],
          correctIndex: 0,
          conceptTestedAr: 'استخدامات البارومتر الزئبقي',
          conceptTestedEn: 'Barometric altimetry and atmospheric pressure applications',
          explanationAr: 'البارومتر الزئبقي يقيس الضغط الجوي وفرق الضغط لتعيين الارتفاعات عن سطح البحر.',
          explanationEn: 'Mercury barometers measure atmospheric pressure and elevation differentials.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: GAS LAWS & THERMAL PHYSICS ──
  {
    id: 'h11-phy-5',
    order: 5,
    titleAr: 'المحاضرة 5: قوانين الغازات: قانون بويل، قانون شارل، قانون الضغط، والقانون العام للغازات',
    titleEn: 'Lecture 5: Thermal Physics & Gas Laws: Boyle, Charles, Pressure & General Gas Laws',
    subtitleAr: 'قانون بويل $P_1 V_1 = P_2 V_2$، قانون شارل $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$، قانون الضغط (جولي)، ومعامل التمدد الحجمي $\\alpha_v = \\frac{1}{273}\\text{ K}^{-1}$ والقانون العام للغازات',
    subtitleEn: 'Master Boyle\'s Law (P₁V₁ = P₂V₂), Charles\'s Law (V₁/T₁ = V₂/T₂), Pressure/Gay-Lussac Law (P₁/T₁ = P₂/T₂), thermal expansion coefficients, and the General Gas Law.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Physics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: الكيمياء الحرارية وقوانين الغازات',
    unitTitleEn: 'Unit 4: Thermal Physics & Gas Laws',
    lessonNumberAr: 'الدرس 1: قوانين الغازات والقانون العام',
    lessonNumberEn: 'Lesson 1: Ideal Gas Laws & Absolute Temperature',

    warmupHookAr: 'عندما تقود سيارتك في رحلة طويلة على طريق صحراوي صيفاً، تلاحظ ارتفاعاً ملحوظاً في ضغط إطارات السيارة رغم أنك لم تضف أي هواء! لماذا؟ لأن حركة الإطارات ترفع درجة حرارة الهواء المحبوس بداخلها، وطبقاً لـ "قانون الضغط للغازات"، يزداد ضغط الغاز طردياً مع درجة الحرارة المطلقة بكلفن ($P \\propto T$) عند ثبوت الحجم! قوانين الغازات هي الأساس العلمي لتصميم المحركات النفاثة والغواصات والبالونات الحرارية!',
    warmupHookEn: 'Tire air pressure climbs on hot highways because gas pressure is directly proportional to absolute Kelvin temperature at constant volume. Gas laws (Boyle, Charles, Gay-Lussac) power thermodynamics, refrigeration, and rocket propulsion.',

    learningOutcomesAr: [
      'أن يطبق الطالب قانون بويل (Boyle\'s Law): يتناسب حجم كمية معينة من غاز عكسياً مع ضغطه عند ثبوت درجة الحرارة: $P_1 V_1 = P_2 V_2$',
      'أن يطبق قانون شارل (Charles\'s Law): يتناسب حجم كمية معينة من غاز طردياً مع درجة حرارته المطلقة ($T\\text{ K}$) عند ثبوت الضغط: $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$',
      'أن يطبق قانون الضغط (Pressure / Gay-Lussac Law): يتناسب ضغط الغاز طردياً مع درجة الحرارة المطلقة عند ثبوت الحجم: $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$',
      'أن يربط بين معاملات التمدد للغازات: معامل التمدد الحجمي $\\alpha_v = \\frac{1}{273}\\text{ K}^{-1}$ ومعامل الزيادة في الضغط $\\beta_p = \\frac{1}{273}\\text{ K}^{-1}$',
      'أن يطبق القانون العام للغازات: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$ في مختلف الحالات الفيزيائية وخلط الغازات'
    ],
    learningOutcomesEn: [
      'Apply Boyle\'s Law P₁V₁ = P₂V₂ for isothermal gas expansions and compressions',
      'Apply Charles\'s Law V₁/T₁ = V₂/T₂ for isobaric volumetric thermal expansions',
      'Apply Pressure/Gay-Lussac Law P₁/T₁ = P₂/T₂ for isochoric pressure transitions',
      'Explain volumetric thermal expansion α_v = 1/273 K⁻¹ and pressure coefficient β_p = 1/273 K⁻¹',
      'Apply the General Ideal Gas Law (P₁V₁)/T₁ = (P₂V₂)/T₂ to complex thermodynamic transformations'
    ],

    vocabulary: [
      {
        termAr: 'درجة الصفر المطلق (Absolute Zero - 0 K)',
        termEn: 'Absolute Zero (0 K)',
        definitionAr: 'درجة الحرارة النظرية التي ينعدم عندها حجم أو ضغط الغاز تماماً بافتراض عدم تحوله لحالة سائلة، وتساوي $-273.15^\\circ\\text{C}$ (أو $0\\text{ K}$). والعلاقة: $T_{(K)} = t_{(^\\circ\\text{C})} + 273$.',
        definitionEn: 'The theoretical baseline temperature where ideal gas volume/pressure extrapolates to zero: -273.15°C (0 Kelvin).'
      },
      {
        termAr: 'معامل التمدد الحجمي للغازات (αv)',
        termEn: 'Volume Expansion Coefficient (αv)',
        definitionAr: 'مقدار الزيادة في وحدة الحجوم من الغاز عند درجة $0^\\circ\\text{C}$ لكل ارتفاع مقداره درجة واحدة مئوية عند ثبوت الضغط، وهو مقدار ثابت لجميع الغازات: $\\alpha_v = \\frac{1}{273}\\text{ K}^{-1}$.',
        definitionEn: 'The fractional increase in gas volume at 0°C per degree Celsius rise at constant pressure: α_v = 1/273 K⁻¹.'
      },
      {
        termAr: 'القانون العام للغازات (General Gas Law)',
        termEn: 'General Gas Law',
        definitionAr: 'القانون الجامع الذي يربط بين المتغيرات الثلاثة لحالة الغاز (الضغط $P$، الحجم $V$، ودرجة الحرارة المطلقة $T$): $\\frac{P \\cdot V}{T} = \\text{ثابت}$.',
        definitionEn: 'The unified ideal gas relation: (P · V)/T = constant.'
      }
    ],

    keyConceptsAr: [
      'قانون بويل (درجة الحرارة ثابتة $T$): $P_1 V_1 = P_2 V_2$ (علاقة عكسية بين $P$ و $V$)',
      'قانون شارل (الضغط ثابت $P$): $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ حيث $T = t + 273$',
      'قانون الضغط / جولي (الحجم ثابت $V$): $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$',
      'معامل التمدد الحجمي $\\alpha_v = \\frac{V_t - V_0}{V_0 \\cdot t} = \\frac{1}{273}\\text{ K}^{-1}$ متساوٍ لجميع الغازات',
      'خلط الغازات عند ثبوت درجة الحرارة: $P_{\\text{mix}} V_{\\text{mix}} = P_1 V_1 + P_2 V_2$'
    ],
    keyConceptsEn: [
      'Boyle\'s Law (isothermal): P₁V₁ = P₂V₂',
      'Charles\'s Law (isobaric): V₁/T₁ = V₂/T₂ using absolute Kelvin temperature T = t + 273',
      'Pressure Law (isochoric): P₁/T₁ = P₂/T₂',
      'Universal gas expansion coefficient: α_v = β_p = 1/273 K⁻¹',
      'Ideal gas mixtures at constant temperature: P_mix V_mix = P₁V₁ + P₂V₂'
    ],

    summaryAr: 'تختتم المحاضرة الخامسة منهج فيزياء ثانية ثانوي بالفيزياء الحرارية وقوانين الغازات: بويل، شارل، وقانون الضغط، ومفهوم الصفر المطلق ومعاملات التمدد والقانون العام للغازات.',
    summaryEn: 'Concludes Grade 11 physics with ideal gas thermodynamics: Boyle\'s, Charles\'s, and Gay-Lussac\'s laws, Kelvin absolute scale, and the General Gas Equation.',

    sections: [
      {
        titleAr: '1. قوانين بويل وشارل وقانون الضغط',
        titleEn: '1. Boyle\'s, Charles\'s & Pressure Laws',
        contentAr: '1) قانون بويل (ثبوت درجة الحرارة $T$):\n- $P_1 V_1 = P_2 V_2$.\n- مثال: عينة غاز حجمها $4\\text{ L}$ عند ضغط $1\\text{ atm}$، كم يصبح حجمها إذا زاد الضغط إلى $2\\text{ atm}$ عند ثبوت الحرارة؟\n  $V_2 = \\frac{P_1 V_1}{P_2} = \\frac{1 \\times 4}{2} = 2\\text{ L}$.\n\n2) قانون شارل (ثبوت الضغط $P$):\n- $\\frac{V_1}{T_1} = \\frac{V_2}{T_2}$ (حيث $T = t + 273$).\n\n3) قانون الضغط لجولي (ثبوت الحجم $V$):\n- $\\frac{P_1}{T_1} = \\frac{P_2}{T_2}$.',
        contentEn: 'Boyle (P₁V₁=P₂V₂), Charles (V₁/T₁=V₂/T₂), and Pressure law (P₁/T₁=P₂/T₂) require absolute Kelvin temperature calculations.'
      },
      {
        titleAr: '2. القانون العام للغازات وخلط الغازات',
        titleEn: '2. General Gas Law & Gas Mixtures',
        contentAr: '1) القانون العام للغازات:\n- $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$.\n\n2) خلط الغازات:\n- عند خلط كميتين من الغازين في إناء مغلق عند ثبوت الحرارة:\n  $P_{\\text{total}} V_{\\text{total}} = P_1 V_1 + P_2 V_2$.\n\n3) معاملات الغازات:\n- معامل التمدد الحجمي $\\alpha_v = \\frac{1}{273}\\text{ K}^{-1}$ ومعامل الزيادة في الضغط $\\beta_p = \\frac{1}{273}\\text{ K}^{-1}$ متساويان لجميع الغازات لأن المسافات البينية بين جزيئات الغازات كبيرة جداً وقوى التماسك تكاد تنعدم.',
        contentEn: 'The combined gas law relates (P₁V₁)/T₁ = (P₂V₂)/T₂. Thermal coefficients α_v = β_p = 1/273 K⁻¹ are universal across all ideal gases.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11-phy5-1',
        questionAr: 'كمية من غاز تشغل حجماً قدره $300\\text{ cm}^3$ عند درجة حرارة $27^\\circ\\text{C}$ وضغط $1\\text{ atm}$. احسب حجمها عند الظروف القياسية (STP: $0^\\circ\\text{C}$ وضغط $1\\text{ atm}$)؟',
        questionEn: 'A gas occupies 300 cm³ at 27°C and 1 atm. Find its volume at STP (0°C and 1 atm)?',
        solutionStepsAr: [
          'الخطوة 1: تحويل درجات الحرارة لكلفن: T₁ = 27 + 273 = 300 K ، T₂ = 0 + 273 = 273 K.',
          'الخطوة 2: بما أن الضغط ثابت (P₁ = P₂ = 1 atm)، نطبق قانون شارل: V₁ / T₁ = V₂ / T₂.',
          'الخطوة 3: التعويض: 300 / 300 = V₂ / 273 ⟹ 1 = V₂ / 273.',
          'الخطوة 4: الحجم الناتج V₂ = 273 cm³.'
        ],
        solutionStepsEn: [
          'Step 1: Convert temperatures to Kelvin: T₁ = 300 K, T₂ = 273 K.',
          'Step 2: Pressure is constant (1 atm), apply Charles\'s Law: V₁ / T₁ = V₂ / T₂.',
          'Step 3: 300 / 300 = V₂ / 273.',
          'Step 4: V₂ = 273 cm³.'
        ],
        answerAr: 'حجم الغاز عند STP = 273 cm³.',
        answerEn: 'Volume at STP = 273 cm³.'
      }
    ],

    assessment: {
      id: 'quiz-h11-phy-5',
      lectureId: 'h11-phy-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: قوانين الغازات (2 ثانوي)',
      titleEn: 'Mastery Quiz 5: Ideal Gas Laws & Absolute Temperature (Grade 11)',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-p5-1',
          textAr: 'ينص قانون بويل (Boyle\'s Law) على أنه عند ثبوت درجة الحرارة، يتناسب حجم كمية معينة من الغاز:',
          textEn: 'Boyle\'s Law states that at constant temperature, the volume of a given mass of gas is:',
          optionsAr: [
            'عكسياً مع ضغط الغاز (P₁V₁ = P₂V₂)',
            'طردياً مع ضغط الغاز',
            'طردياً مع درجة الحرارة المئوية',
            'عكسياً مع الكتلة الجزيئية'
          ],
          optionsEn: [
            'Inversely proportional to gas pressure (P₁V₁ = P₂V₂)',
            'Directly proportional to gas pressure',
            'Directly proportional to Celsius temperature',
            'Inversely proportional to molar mass'
          ],
          correctIndex: 0,
          conceptTestedAr: 'نص قانون بويل للغازات',
          conceptTestedEn: 'Boyle\'s isothermal gas law definition',
          explanationAr: 'قانون بويل يربط بين الحجم والضغط بعلاقة عكسية ($P_1 V_1 = P_2 V_2$) عند ثبوت درجة الحرارة.',
          explanationEn: 'Boyle\'s law establishes an inverse pressure-volume relationship at constant temperature.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p5-2',
          textAr: 'قيمة معامل التمدد الحجمي لجميع الغازات ($\\alpha_v$) تحت ضغط ثابت تساوي مقداراً ثابتاً هو:',
          textEn: 'The value of the volumetric expansion coefficient (α_v) for all gases at constant pressure is:',
          optionsAr: ['1 / 273 K⁻¹', '273 K', '1 / 100 K⁻¹', '1.013 K⁻¹'],
          optionsEn: ['1 / 273 K⁻¹', '273 K', '1 / 100 K⁻¹', '1.013 K⁻¹'],
          correctIndex: 0,
          conceptTestedAr: 'قيمة معامل التمدد الحجمي للغازات αv',
          conceptTestedEn: 'Universal gas expansion coefficient 1/273 K⁻¹',
          explanationAr: 'معامل التمدد الحجمي لجميع الغازات مقدار ثابت يساوي $\\frac{1}{273}\\text{ K}^{-1}$.',
          explanationEn: 'The universal coefficient of volume expansion for ideal gases is identically 1/273 K⁻¹.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p5-3',
          textAr: 'درجة الصفر المطلق على مقياس كلفن ($0\\text{ K}$) تكافئ على مقياس سيليزيوس درجة حرارة:',
          textEn: 'Absolute zero (0 Kelvin) corresponds on the Celsius scale to:',
          optionsAr: ['-273°C', '273°C', '0°C', '-100°C'],
          optionsEn: ['-273°C', '273°C', '0°C', '-100°C'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل بين مقياس كلفن وسيليزيوس للصفر المطلق',
          conceptTestedEn: 'Absolute zero conversion T(K) = t(°C) + 273',
          explanationAr: '$T_{(K)} = t_{(^\\circ\\text{C})} + 273 \\implies 0 = t + 273 \\implies t = -273^\\circ\\text{C}$.',
          explanationEn: '0 K = t + 273 => t = -273°C.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-p5-4',
          textAr: 'إطار سيارة به هواء عند درجة حرارة $27^\\circ\\text{C}$ وضغطه $2\\text{ atm}$. فإذا ارتفعت درجة حرارة الهواء داخل الإطار نتيجة الحركة إلى $87^\\circ\\text{C}$ مع ثبوت حجم الإطار، فإن ضغطه يصبح:',
          textEn: 'A car tire contains air at 27°C and 2 atm. If tire air warms to 87°C at constant volume, the new pressure is:',
          optionsAr: ['2.4 atm', '6.44 atm', '3 atm', '2.2 atm'],
          optionsEn: ['2.4 atm', '6.44 atm', '3 atm', '2.2 atm'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون الضغط للغازات P₁/T₁ = P₂/T₂',
          conceptTestedEn: 'Pressure law calculation with Kelvin conversion',
          explanationAr: '$T_1 = 27 + 273 = 300\\text{ K}$ ، $T_2 = 87 + 273 = 360\\text{ K}$. قانون الضغط: $\\frac{P_1}{T_1} = \\frac{P_2}{T_2} \\implies \\frac{2}{300} = \\frac{P_2}{360} \\implies P_2 = \\frac{2 \\times 360}{300} = 2.4\\text{ atm}$.',
          explanationEn: 'T₁ = 300 K, T₂ = 360 K. P₂ = (2 × 360) / 300 = 2.4 atm.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-p5-5',
          textAr: 'الصيغة الرياضية للقانون العام للغازات الذي يربط بين الضغط والحجم ودرجة الحرارة المطلقة هي:',
          textEn: 'The mathematical expression for the General Ideal Gas Law is:',
          optionsAr: ['(P₁ · V₁) / T₁ = (P₂ · V₂) / T₂', 'P₁ · V₁ · T₁ = P₂ · V₂ · T₂', 'P₁ / (V₁ · T₁) = P₂ / (V₂ · T₂)', 'P₁ · T₁ = P₂ · T₂'],
          optionsEn: ['(P₁ · V₁) / T₁ = (P₂ · V₂) / T₂', 'P₁ · V₁ · T₁ = P₂ · V₂ · T₂', 'P₁ / (V₁ · T₁) = P₂ / (V₂ · T₂)', 'P₁ · T₁ = P₂ · T₂'],
          correctIndex: 0,
          conceptTestedAr: 'صيغة القانون العام للغازات',
          conceptTestedEn: 'General Combined Gas Law formula',
          explanationAr: 'القانون العام يجمع القوانين الثلاثة في علاقة موحدة: $\\frac{P_1 V_1}{T_1} = \\frac{P_2 V_2}{T_2}$.',
          explanationEn: 'The Combined Gas Law integrates Boyle, Charles, and Gay-Lussac into (P₁V₁)/T₁ = (P₂V₂)/T₂.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
