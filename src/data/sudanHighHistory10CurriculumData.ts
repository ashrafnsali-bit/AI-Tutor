import type { Lecture } from '../types';

// ============================================================================
// REPUBLIC OF SUDAN - MINISTRY OF EDUCATION - BAKHT AL-RUDA
// جمهورية السودان - وزارة التعليم والتربية الوطنية
// المركز القومي للمناهج والبحث التربوي (بخت الرضا) - المرحلة الثانوية
// كتاب التاريخ - الصف الأول الثانوي - الطبعة الأولى ٢٠٢٥م
// إعداد: د. معاوية السر قشي، أ.د. أسامة عبدالله محمد الأمين، وأ. معاوية عثمان محمد خير
// الإشراف العام: د. معاوية السر قشي (المدير العام للمركز القومي للمناهج)
// المراجعة: أ.د. عبد القادر عثمان محمد جاد الرب
// ============================================================================

export const SUDAN_HIGH_HISTORY_G10_LECTURES: Lecture[] = [
  // ════════════════════════════════════════════════════════════════════════════
  // ── الوحدة الأولى: من تاريخ السودان ──
  // ════════════════════════════════════════════════════════════════════════════

  // المحاضرة 1: العصور الحجرية وحضارات المجموعات
  {
    id: 'sd-g10-hist-1',
    order: 1,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: من تاريخ السودان',
    unitTitleEn: 'Unit 1: From the History of Sudan',
    lessonNumberAr: 'الدروس 1 و 2: العصور الحجرية وحضارة المجموعات النوبية',
    lessonNumberEn: 'Lessons 1 & 2: Stone Ages and Nubian Group Civilizations',
    titleAr: 'المحاضرة 1: العصور الحجرية وحضارات المجموعات (أ، ب، ج) في السودان القديم',
    titleEn: 'Lecture 1: Stone Ages and Nubian Groups (A, B, C) in Ancient Sudan',
    subtitleAr: 'من فؤوس خور أبي عنجة الصوانية وفخار الخرطوم الوسيط والشهيناب المصقول إلى حضارات المجموعات النوبية',
    subtitleEn: 'Paleolithic Khor Abu Anja flint axes, Mesolithic Khartoum ceramics, Neolithic Shaheinab pastoralism, and Groups A, B, C.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تمشي اليوم بالقرب من خور أبي عنجة في أم درمان، هل تتخيل أن هذا المكان كان شاهداً قبل مئات آلاف السنين على أيدي أول إنسان سوداني يصنع فؤوس الصوان الحجرية للصيد؟ وكيف انتقل أجدادنا في الشهيناب من جمع الثمار إلى استئناس الحيوانات وصناعة أفخر فخار ناعم مصقول في العالم القديم؟',
    warmupHookEn: 'Walking near Khor Abu Anja in Omdurman connects you to hundreds of thousands of years of human prehistory. Discover how Stone Age humans transitioned from crude hand axes to Neolithic pastoral domestication at Shaheinab.',
    learningOutcomesAr: [
      'أن يفسر الطالب سبب تسمية العصور الحجرية بهذا الاسم.',
      'أن يقارن بين خصائص العصر الحجري القديم والوسيط والحديث في السودان وأدوات كل منها ومواقعها (خور أبي عنجة، حضارة الخرطوم، والشهيناب).',
      'أن يوضح خصائص حضارات المجموعات النوبية الثلاث (أ، ب، ج) وطقوس الدفن وصناعة الفخار لكل منها.'
    ],
    learningOutcomesEn: [
      'Explain the rationale for naming prehistoric periods the Stone Ages.',
      'Differentiate between Paleolithic, Mesolithic, and Neolithic cultures in Sudan (Khor Abu Anja, Old Khartoum, and Shaheinab).',
      'Analyze the material culture and burial traditions of Groups A, B, and C.'
    ],
    keyConceptsAr: [
      'العصور الحجرية: الاعتماد على الأدوات الحجرية والصوان قبل اكتشاف المعادن',
      'العصر الحجري القديم: الفأس اليدوية من حجر الصوان بمواقع خور أبي عنجة، خور الهودي، نوري، وتنقاسي',
      'العصر الحجري الوسيط: حضارة الخرطوم القديمة وصناعة الفخار من طين لزج وزخرفته بعظام السمك',
      'العصر الحجري الحديث: موقع قرية الشهيناب شمال أمدرمان، الفخار المصقول، واستئناس الضأن والماعز والأبقار',
      'حضارة المجموعات النوبية: المجموعة (أ) النحاسية والغزو المصري، المجموعة (ب) الفقيرة، والمجموعة (ج) الرعوية وقرى الطين ودمى الكباش والكلاب'
    ],
    keyConceptsEn: [
      'Stone Ages: Pre-metallurgy stone tools and flint blades',
      'Paleolithic: Khor Abu Anja hand axes for foraging and hunting',
      'Mesolithic: Khartoum culture and fish-bone decorated ceramics',
      'Neolithic: Shaheinab polished pottery and livestock domestication',
      'Nubian Groups: Group A copper grave goods, Group B decline, and Group C pastoral settlements'
    ],
    vocabulary: [
      { termAr: 'خور أبي عنجة', termEn: 'Khor Abu Anja', definitionAr: 'موقع أثري هام في أمدرمان عُثر فيه على أقدم فؤوس حجرية من الصوان في السودان تعود للعصر الحجري القديم.' },
      { termAr: 'حضارة الشهيناب', termEn: 'Shaheinab Culture', definitionAr: 'موقع العصر الحجري الحديث شمال أمدرمان، تميز بالفخار المصقول فائق الجودة واستئناس الضأن والماعز والأبقار.' },
      { termAr: 'المجموعة (ج)', termEn: 'Group C', definitionAr: 'حضارة نوبية قديمة استقرت في قرى ذات مبانٍ حجرية وطينية، واشتهرت برعي الماشية وصنع دمى الطين ودفن الحيوانات الأليفة مع موتاها.' }
    ],
    summaryAr: 'ملخص الدرس: تطورت حياة الإنسان في السودان عبر العصور الحجرية من الاعتماد على الفؤوس الصوانية والالتقاط (خور أبي عنجة) إلى صناعة الفخار المزخرف (الخرطوم القديمة) ثم الاستقرار واستئناس الماشية وصقل الفخار (الشهيناب). وتلت ذلك حضارات المجموعات النوبية (أ، ب، ج) التي مهدت لنشوء أولى الحضارات المركزية في وادي النيل.',
    summaryEn: 'Summary: Sudanese prehistory progressed from Paleolithic foraging with flint hand axes (Khor Abu Anja) to Mesolithic ceramics (Khartoum) and Neolithic animal husbandry (Shaheinab), followed by Nubian Groups A, B, and C.',
    sections: [
      {
        titleAr: '1. العصور الحجرية وتطور الإنسان السوداني القديم (خور أبي عنجة والشهيناب)',
        titleEn: '1. Stone Ages and Human Evolution in Ancient Sudan (Khor Abu Anja and Shaheinab)',
        contentAr: 'سُميت العصور الحجرية بهذا الاسم لاعتماد الإنسان التام على الأدوات المصنوعة من الحجارة قبل اكتشاف المعادن وصهرها. ويُقسم التطور الحجري في السودان إلى ثلاث مراحل رئيسية: 1) العصر الحجري القديم: تميز بصناعة الفأس اليدوية من حجر الصوان التي استخدمت في الصيد وقطع الأشجار والدفاع، وعُثر على مخلفاتها في خور أبي عنجة بأمدرمان وخور الهودي ونوري وتنقاسي. 2) العصر الحجري الوسيط: تمثله حضارة الخرطوم القديمة، حيث عرف الإنسان صناعة الأواني الفخارية من الطين اللزج وزخرفتها بعظام الأسماك وتجفيفها بالنار، وبنى مساكنه من الجلود والطين مع ممارسة دفن الموتى. 3) العصر الحجري الحديث: يُعد موقع قرية الشهيناب شمال أمدرمان النموذج الأبرز؛ حيث ارتقى الإنسان لصناعة فخار مصقول عالي الجودة وعرف استئناس الحيوانات مثل الضأن والماعز والأبقار.',
        contentEn: 'Named for humanity’s reliance on stone implements prior to metallurgy, Sudanese prehistory unfolded across three eras: Paleolithic flint hand axes at Khor Abu Anja and Nuri; Mesolithic Khartoum ceramics incised with fish bones; and Neolithic Shaheinab showcasing burnished pottery and pastoral animal domestication.',
        interactiveExample: {
          titleAr: 'تحليل تاريخي 1: معيار الانتقال من مجتمع الصيد والالتقاط إلى مجتمع الاستئناس والإنتاج',
          titleEn: 'Historical Analysis 1: From Foraging to Food Production',
          equation: 'الفأس الصوانية (القديم) -> فخار عظام السمك (الوسيط) -> الفخار المصقول واستئناس الماشية (الشهيناب الحديث)',
          steps: [
            { stepNumber: 1, textAr: 'في العصر القديم اعتمد الإنسان على ما تجود به الطبيعة عبر الصيد والجمع بواسطة فؤوس خور أبي عنجة الصوانية.', textEn: 'Paleolithic humans relied on environmental gathering and hunting using flint hand axes.' },
            { stepNumber: 2, textAr: 'في العصر الوسيط ظهر الابتكار التقني بابتكار الأواني الفخارية لحفظ الغذاء وطهيه في حضارة الخرطوم.', textEn: 'Mesolithic groups invented fired ceramic containers to preserve and cook food.' },
            { stepNumber: 3, textAr: 'في العصر الحديث بالشهيناب حدثت الثورة الإنتاجية باستئناس الأبقار والضأن، مما أتاح الاستقرار الدائم ونشوء القرى الأولى.', textEn: 'Neolithic Shaheinab triggered food production through pastoral cattle and sheep domestication.' }
          ],
          takeawayAr: 'موقع الشهيناب يمثل فجر الثورة الإنتاجية والاستقرار الاجتماعي في تاريخ السودان القديم.',
          takeawayEn: 'Shaheinab marks the dawn of settled agricultural and pastoral community life in Sudan.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-1-1',
          questionAr: 'في أي موقع أثري سوداني عُثر على أقدم الفؤوس الحجرية الصوانية التي تعود للعصر الحجري القديم؟',
          questionEn: 'At which Sudanese archaeological site were the oldest Paleolithic flint hand axes discovered?',
          optionsAr: ['خور أبي عنجة بأمدرمان', 'قرية الشهيناب', 'منطقة كرمة', 'جزيرة صاي'],
          optionsEn: ['Khor Abu Anja in Omdurman', 'Shaheinab Village', 'Kerma Region', 'Sai Island'],
          correctIndex: 0,
          explanationAr: 'يُعد خور أبي عنجة بأمدرمان أقدم المواقع التي وُجدت بها الفؤوس اليدوية الصوانية للعصر الحجري القديم.',
          explanationEn: 'Khor Abu Anja is celebrated as the landmark Paleolithic flint hand-axe discovery site.'
        }
      },
      {
        titleAr: '2. حضارات المجموعات النوبية (أ، ب، ج)',
        titleEn: '2. Nubian Group Civilizations (A, B, C)',
        contentAr: 'عقب العصر الحجري الحديث ظهرت سلسلة من الحضارات المتتابعة في النوبة السفلى عُرفت بحضارات المجموعات: 1) المجموعة (أ): تميزت بوجود فخار متطور وأدوات نحاسية عُثر عليها في عكاشة وفرس، وكان سكانها من رعاة الماشية الذين مارسوا طقوس دفن الموتى في حفر بيضاوية بوضعية القرفصاء مكفنين بالجلد ومزودين بالأواني، وانتهت حضارتهم بالغزو المصري. 2) المجموعة (ب): عُدت مرحلة تدهور حضاري وفقر اقتصادي في صناعة الفخار تزامنت مع الهيمنة المصرية وتعيين حاكم للجنوب. 3) المجموعة (ج): شهدت نهضة استيطانية حيث استقر السكان في قرى ذات بيوت مستديرة ومربعة من الحجر والطين، واعتمدوا على رعي الأبقار التي قدسوها فصنعوا دمى طينية للأبقار والثيران، ودفنوا الحيوانات الأليفة كالكلاب والكباش مع أصحابها دلالة على منزلتها الاجتماعية.',
        contentEn: 'Following the Neolithic, lower Nubia witnessed three cultural horizons: Group A pastoralists using copper tools and crouched skin burials; Group B, a period of impoverished pottery under Egyptian overlordship; and Group C, characterized by stone-and-mud settlements, cattle pastoralism, zoomorphic clay figurines, and pet interments.',
        interactiveExample: {
          titleAr: 'تحليل مقارن: خصائص حضارات المجموعات النوبية الثلاث',
          titleEn: 'Comparative Analysis: Nubian Groups A, B, and C',
          equation: 'المجموعة أ (نحاس + قبور بيضاوية) | المجموعة ب (تدهور وهيمنة) | المجموعة ج (مبانٍ حجرية + دمى الأبقار)',
          steps: [
            { stepNumber: 1, textAr: 'المجموعة (أ) جمعت بين النحاس والرعي وطقوس الدفن البيضاوية بوضعية القرفصاء.', textEn: 'Group A integrated early copper metallurgy with crouched oval skin-wrapped burials.' },
            { stepNumber: 2, textAr: 'المجموعة (ب) عانت من انحدار المكتشفات الفخارية بفعل السيطرة الخارجية.', textEn: 'Group B suffered material decline during foreign northern administrative hegemony.' },
            { stepNumber: 3, textAr: 'المجموعة (ج) أبدعت في عمارة البيوت الحجرية ودفن الحيوانات كرمزية رعوية عميقة.', textEn: 'Group C engineered masonry villages and revered cattle culture through clay figurines.' }
          ],
          takeawayAr: 'حضارة المجموعة (ج) عكست استقراراً عمرانياً ورعوياً مهد لظهور حضارة كرمة العظمى.',
          takeawayEn: 'Group C pastoral architecture and social cohesion formed the prelude to the Kerma kingdom.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-1-2',
          questionAr: 'ما هي الحضارة النوبية التي تميزت بقرى ذات مبانٍ حجرية وصناعة دمى الطين ودفن الكلاب والكباش مع أصحابها؟',
          questionEn: 'Which Nubian group was known for stone village dwellings, clay animal figurines, and pet burials?',
          optionsAr: ['حضارة المجموعة (ج)', 'حضارة المجموعة (أ)', 'حضارة المجموعة (ب)', 'حضارة الخرطوم القديمة'],
          optionsEn: ['Group C', 'Group A', 'Group B', 'Old Khartoum Culture'],
          correctIndex: 0,
          explanationAr: 'حضارة المجموعة (ج) اشتهرت بالبيوت الحجرية المستديرة ودمى الطين وتكريم الحيوانات بدفنها مع أصحابها.',
          explanationEn: 'Group C is renowned for stone circular houses, clay cattle figurines, and pet interments.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-1-assess',
      titleAr: 'اختبار تقييم المحاضرة 1: العصور الحجرية وحضارات المجموعات في السودان',
      titleEn: 'Assessment Lecture 1: Stone Ages and Nubian Group Civilizations',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h1-q1',
          textAr: 'ما الأداة الرئيسية التي صنعها واستخدمها إنسان العصر الحجري القديم في موقع خور أبي عنجة بأم درمان؟',
          textEn: 'What was the primary implement crafted by Paleolithic humans at Khor Abu Anja in Omdurman?',
          optionsAr: ['الفأس اليدوية المصنوعة من حجر الصوان', 'الخناجر النحاسية المصقولة', 'الأواني الفخارية المزخرفة بعظام السمك', 'السيوف الحديدية المطروقة'],
          optionsEn: ['Flint hand axe', 'Polished copper daggers', 'Fish-bone incised pottery', 'Forged iron swords'],
          correctIndex: 0,
          conceptTestedAr: 'أدوات العصر الحجري القديم وموقع خور أبي عنجة',
          conceptTestedEn: 'Paleolithic tools and Khor Abu Anja',
          explanationAr: 'استخدم إنسان العصر الحجري القديم الفأس اليدوية المصنوعة من الصوان للصيد وقطع الأشجار والدفاع.',
          explanationEn: 'Flint hand axes were the hallmark Paleolithic multifunctional implements at Khor Abu Anja.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h1-q2',
          textAr: 'أي من المواقع الأثرية السودانية التالية شهد بداية استئناس الحيوانات وصناعة الفخار عالي الصقل في العصر الحجري الحديث؟',
          textEn: 'Which Sudanese site marks the onset of animal domestication and fine burnished ceramics in the Neolithic?',
          optionsAr: ['قرية الشهيناب شمال أمدرمان', 'خور الهودي', 'منطقة عكاشة', 'جبل البركل'],
          optionsEn: ['Shaheinab village north of Omdurman', 'Khor Al-Hudi', 'Akasha region', 'Jebel Barkal'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص العصر الحجري الحديث وموقع الشهيناب',
          conceptTestedEn: 'Neolithic characteristics and Shaheinab site',
          explanationAr: 'موقع الشهيناب شمال أمدرمان تميز بالفخار المصقول واستئناس الماشية (الأبقار والضأن والماعز).',
          explanationEn: 'Shaheinab is the landmark Neolithic site evidencing animal husbandry and burnished pottery.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h1-q3',
          textAr: 'كيف كان سكان حضارة المجموعة (أ) يدفنون موتاهم في المواقع النوبية كعكاشة وفرس؟',
          textEn: 'How did inhabitants of Group A bury their deceased at Nubian sites like Akasha and Faras?',
          optionsAr: ['في حفر بيضاوية مكفنين بالجلد بوضعية القرفصاء مع أوانيهم', 'داخل أهرامات حجرية كبرى', 'في توابيت خشبية محنطة داخل سراديب', 'حرق الجثث وتذرية الرماد'],
          optionsEn: ['In oval pits, skin-wrapped in crouched position with vessels', 'Inside large stone pyramids', 'In mummified wooden coffins', 'Cremation and ash scattering'],
          correctIndex: 0,
          conceptTestedAr: 'طقوس الدفن في حضارة المجموعة (أ)',
          conceptTestedEn: 'Burial customs in Group A culture',
          explanationAr: 'دفن سكان المجموعة (أ) موتاهم في حفر بيضاوية بوضعية القرفصاء ملفوفين بكفن من الجلد ومزودين بالأواني.',
          explanationEn: 'Group A buried their dead in crouched position wrapped in hides inside oval pits.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h1-q4',
          textAr: 'ما الميزة المعمارية والطقسية التي انفردت بها حضارة المجموعة (ج) مقارنة بالمجموعات السابقة؟',
          textEn: 'Which architectural and ritual custom uniquely characterized Group C compared to previous groups?',
          optionsAr: ['الاستقرار في قرى ذات مبانٍ حجرية وطينية ودفن الحيوانات الأليفة مع أصحابها', 'بناء الدفوفة الشرقية والغربية', 'سك العملات المعدنية والرموز الإغريقية', 'صهر خام الحديد في أفران عملاقة'],
          optionsEn: ['Settling in stone-and-mud villages and burying pets with owners', 'Erecting Eastern and Western Deffufas', 'Minting coins with Greek lettering', 'Smelting iron ores in giant blast furnaces'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص حضارة المجموعة (ج) المعمارية والاجتماعية',
          conceptTestedEn: 'Architectural and ritual features of Group C',
          explanationAr: 'انفردت المجموعة (ج) ببناء البيوت الحجرية المستديرة ودمى الطين ودفن الكلاب والكباش مع أصحابها.',
          explanationEn: 'Group C uniquely built circular stone-walled villages and interred domesticated pets with deceased masters.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // المحاضرة 2: حضارة كرمة ومملكة كوش النبتية
  {
    id: 'sd-g10-hist-2',
    order: 2,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: من تاريخ السودان',
    unitTitleEn: 'Unit 1: From the History of Sudan',
    lessonNumberAr: 'الدروس 3 و 4: حضارة كرمة ومملكة كوش (فترة نبتة)',
    lessonNumberEn: 'Lessons 3 & 4: Kerma Civilization and Kushite Kingdom (Napata Period)',
    titleAr: 'المحاضرة 2: حضارة كرمة الخالدة ومملكة كوش النبتية (2500 - 570 ق.م)',
    titleEn: 'Lecture 2: The Kerma Civilization and the Napatan Kushite Kingdom',
    subtitleAr: 'صروح الدفوفة بالطوب المحروق، فخار كرمة الرقيق، ونظام الحكم والتوريث الأموي ومجمع جبل البركل في نبتة',
    subtitleEn: 'Kerma Deffufas and fired bricks, eggshell ceramics, matrilineal succession, and the sacred Jebel Barkal precinct.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'قبل أن يعرف العالم الحديث ناطحات السحاب، ارتفعت الدفوفة الغربية في كرمة لأكثر من 18 متراً مشيدة بملايين قوالب الطوب المحروق لأول مرة في وادي النيل! كيف استطاع ملوك كرمة ثم ملوك نبتة تشييد إمبراطورية أذهلت فراعنة مصر وحكمت من جبل البركل إلى البحر المتوسط؟ وما سر وضع الميت على "العنقريب" السوداني منذ 4000 عام؟',
    warmupHookEn: 'Over 4,000 years ago, Kerma built the Western Deffufa with millions of fired bricks—a milestone in Nile engineering. Discover the secrets of Kerma’s eggshell ceramics, royal angareeb funerary beds, and the Napatan matrilineal dynasty.',
    learningOutcomesAr: [
      'أن يحدد الطالب الامتداد الجغرافي والزمني لحضارة كرمة (2500 - 1500 ق.م).',
      'أن يحلل الإنجاز المعماري للدفوفة الشرقية والغربية واستخدام الطوب المحروق.',
      'أن يوضح الخصائص الأصيلة لمملكة نبتة (التوريث الأموي، الدفن على العنقريب، دفن الخيول) والتأثيرات المصرية.',
      'أن يعلل أسباب انتقال عاصمة كوش من نبتة إلى مروي عام 571 ق.م.'
    ],
    learningOutcomesEn: [
      'Define the geographic and chronological span of Kerma (2500–1500 BC).',
      'Analyze the monumental architecture of the Deffufas and the pioneering use of fired bricks.',
      'Examine Napatan indigenous institutions (matrilineal succession, angareeb beds, horse graves) versus Egyptian influences.',
      'Explain the strategic motivations for moving the capital from Napata to Meroe in 571 BC.'
    ],
    keyConceptsAr: [
      'حضارة كرمة (2500 - 1500 ق.م): أول دولة كبرى امتدت من جزيرة صاي إلى جبل البركل',
      'الدفوفة الغربية (مقر سياسي وديني) والدفوفة الشرقية (صالة جنائزية) واستخدام الطوب المحروق',
      'فخار كرمة: فائق الرقة كقشر البيض مصنوع على العجلة ومصقول باللون الأسود والأحمر',
      'مملكة نبتة (1500 - 570 ق.م): النظام السياسي والتوريث الأموي (ابن البنت أو ابن الأخت) ودور كهنة آمون',
      'الدفن النبتي: السرير الخشبي (العنقريب)، دفن الخيول الموقوفة، وأهرامات الكرو ونوري وجبل البركل',
      'دوافع الانتقال إلى مروي: اتساع أراضي البطانة، مناجم الحديد، أشجار الوقود، والبعد عن الخطر الشمالي'
    ],
    keyConceptsEn: [
      'Kerma Kingdom (2500–1500 BC): Extended from Sai Island to Jebel Barkal',
      'Deffufas: Western administrative center and Eastern funerary chapel using fired brick',
      'Kerma Pottery: Wheel-thrown, eggshell-thin burnished black-topped red ware',
      'Napata Kush (1500–570 BC): Matrilineal royal succession and Amun priesthood power',
      'Burial traditions: Wooden angareeb beds, royal chariot horses, and pyramids at El-Kurru and Nuri',
      'Relocation to Meroe: Fertile Butana, iron ore deposits, acacia fuel timber, and defensive insulation'
    ],
    vocabulary: [
      { termAr: 'الدفوفة (Deffufa)', termEn: 'Deffufa', definitionAr: 'صروح معمارية نوبية عملاقة شيدت من الطوب المحروق واللبن في حضارة كرمة (الدفوفة الشرقية الجنائزية والغربية الدينية).' },
      { termAr: 'التوريث الأموي', termEn: 'Matrilineal Succession', definitionAr: 'نظام سياسي كوشي ينتقل فيه العرش عبر نسل الأم (ابن البنت أو ابن الأخت) بإقرار مجلس أعيان الأسرة وكهنة المعبد.' },
      { termAr: 'العنقريب (Angareeb)', termEn: 'Angareeb Bed', definitionAr: 'سرير خشبي تقليدي سوداني ينسج بالحبال أو الجلود، استُخدم في كرمة ونبتة لدفن الموتى اعتقاداً بالبعث والراحة في العالم الآخر.' }
    ],
    summaryAr: 'ملخص الدرس: حضارة كرمة شكلت أول قوة سياسية ومعمارية كبرى في السودان بعمارتها الفذة للدفوفة واستخدام الطوب المحروق وفخارها الأنيق. وتلتها مملكة نبتة الكوشية التي دمجت بين التقاليد الأصيلة (التوريث الأمومي ودفن الخيول والعنقريب) والتأثيرات النيلية كعبادة آمون، قبل أن تنتقل العاصمة إلى مروي عام 571 ق.م بحثاً عن الموارد الاستراتيجية.',
    summaryEn: 'Summary: Kerma arose as the earliest indigenous Nile empire, famed for its fired-brick Deffufas and fine ceramics. Napata succeeded it, consolidating matrilineal governance and monumental pyramids at Jebel Barkal before moving southward to iron-rich Meroe.',
    sections: [
      {
        titleAr: '1. حضارة كرمة: الصناعة، شعائر الدفن، وعمارة الدفوفة',
        titleEn: '1. Kerma Civilization: Arts, Funerary Rites, and Deffufa Monumental Architecture',
        contentAr: 'قامت حضارة كرمة بين عامي (2500 - 1500 ق.م) ونُسبت إلى مدينة كرمة الحالية، وامتدت من جزيرة صاي شمالاً حتى جبل البركل جنوباً. واشتهر الكرميون بإنتاج أجود أنواع الفخار في العالم القديم باستخدام عجلة الفخار؛ حيث تميز فخارهم برقة مذهلة كقشر البيض وحافات سوداء لامعة. كما برعوا في تشغيل النحاس وصناعة الخناجر والمصنوعات الخشبية المطعمة بالعاج. وعكست شعائر الدفن إيماناً مطلقاً بالبعث؛ حيث شيدت القبور على شكل أكوام ترابية محاطة بحجارة سوداء وحصى أبيض، ووُضع الميت على سرير خشبي (العنقريب) مفروش بالجلد مع دفن الأواني والقرابين. وتعد "الدفوفة الغربية" معجزة العمارة الكرمية حيث شيدت بملايين قوالب الطوب المحروق لأول مرة في وادي النيل لتبلغ ارتفاعاً ناهز 19 متراً كمركز ديني وإداري، بينما كانت الدفوفة الشرقية صالة جنائزية ضخمة.',
        contentEn: 'Kerma (2500–1500 BC) stretched between Sai Island and Jebel Barkal. Its artisans engineered wheel-thrown eggshell pottery, copper weaponry, and ivory inlays. Kerma tombs preserved royal bodies on wooden angareeb beds accompanied by grave provisions. The monumental Western Deffufa pioneered fired-brick structural engineering in the Nile Valley as a combined temple and administrative citadel.',
        interactiveExample: {
          titleAr: 'تحليل تاريخي 2: الابتكار المعماري بالدفوفة واستخدام الطوب المحروق',
          titleEn: 'Historical Analysis 2: Architectural Mastery at Kerma Deffufa',
          equation: 'طمي النيل + تقنية الحرق الحراري المنظم = قوالب طوب محروق مقاومة لعوامل التعرية لآلاف السنين',
          steps: [
            { stepNumber: 1, textAr: 'كانت المباني السابقة تعتمد على الطوب اللبن المجفف بالشمس المعرض للتآكل السريع بالمياه والأمطار.', textEn: 'Previous architecture relied on fragile sun-dried mud bricks prone to erosion.' },
            { stepNumber: 2, textAr: 'ابتكر مهندسو كرمة أفران حرق الطوب لإنتاج حجارة حمراء صلبة شكلت الغلاف الخارجي الصلب للدفوفة الغربية.', textEn: 'Kerma builders fired molded clay in kilns to construct an enduring fired-brick exterior shell.' },
            { stepNumber: 3, textAr: 'وفر هذا الابتكار متانة استثنائية جعلت الدفوفة تصمد لأكثر من 4000 عام كشاهد على عبقرية المعمار السوداني.', textEn: 'This technique endowed the Deffufa with monumental durability that survives after 4,000 years.' }
          ],
          takeawayAr: 'حضارة كرمة لم تكن مقلدة لحضارات الشمال، بل سباقة في تكنولوجيا العمارة والفخار المستقل.',
          takeawayEn: 'Kerma developed native technological and architectural systems independent of northern models.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-2-1',
          questionAr: 'ما هي المادة البنائية التي استخدمت لأول مرة في وادي النيل لتشييد الدفوفة الغربية بحضارة كرمة؟',
          questionEn: 'Which building material was introduced for the first time in the Nile Valley at Kerma’s Western Deffufa?',
          optionsAr: ['الطوب المحروق', 'الخرسانة المسلحة', 'الكتل الرخامية المستوردة', 'الألواح الخشبية المعالجة'],
          optionsEn: ['Fired bricks', 'Reinforced concrete', 'Imported marble blocks', 'Treated timber slabs'],
          correctIndex: 0,
          explanationAr: 'استخدم مهندسو كرمة الطوب المحروق لأول مرة في وادي النيل لحماية وتشييد جدران الدفوفة الغربية الضخمة.',
          explanationEn: 'Kerma masons uniquely pioneered fired brick masonry to construct the towering Western Deffufa.'
        }
      },
      {
        titleAr: '2. مملكة نبتة: التوريث الأموي، الدفن، ودوافع الانتقال إلى مروي',
        titleEn: '2. The Kingdom of Napata: Matrilineal Succession, Royal Burials, and Relocation to Meroe',
        contentAr: 'قامت مملكة نبتة الكوشية (1500 - 570 ق.م) في منطقة جبل البركل شمال السودان، وشكلت تجسيداً للتفاعل الحضاري؛ فمن مظاهر الطابع المحلي الأصيل: توجيه القبور، وضع الميت على العنقريب، ودفن الخيول الموقوفة في صفوف مرتبة تكريماً لشجاعتها في المعارك. كما انفردت نبتة بنظام حكم سياسي يعتمد على "التوريث الأموي"؛ حيث يؤول العرش إلى ابن البنت أو ابن الأخت بموافقة أعيان الأسرة وكهنة معبد آمون بالبركل. وفي المقابل تأثرت بالثقافة النيلية في الكتابة الهيروغليفية والتحنيط وبناء الأهرامات الملكية في الكرو ونوري. وفي عام 571 ق.م قرر الملوك نقل العاصمة جنوباً إلى مروي (البجراوية) لأسباب استراتيجية: 1) اتساع أراضي البطانة الرعوية والزراعية الخصبة، 2) وفرة خام الحديد وغابات السنط اللازمة لصهر المعادن، 3) التحكم في عقدة التجارة الإفريقية والبحر الأحمر، 4) الابتعاد عن مرمى الغزوات العسكرية الشمالية.',
        contentEn: 'Napata (1500–570 BC) flourished around holy Jebel Barkal. Indigenous traditions included matrilineal royal succession (nephews through sisters/daughters inheriting power), angareeb burials, and ceremonial horse entombments. Coexisting with Amun worship and hieroglyphics, Napata thrived until 571 BC, when economic and defensive priorities prompted moving the capital southward to iron-rich Meroe.',
        interactiveExample: {
          titleAr: 'تحليل القرار الاستراتيجي: دوافع نقل العاصمة من نبتة إلى مروي عام 571 ق.م',
          titleEn: 'Strategic Decision Analysis: Moving Capital to Meroe (571 BC)',
          equation: 'تهديد عسكري شمالي + فقر نسبي في الغابات = نقل العاصمة إلى مروي (أراضي البطانة الخصبة + مناجم الحديد + حماية طبيعية)',
          steps: [
            { stepNumber: 1, textAr: 'أمنياً: كانت نبتة قريبة من حدود الغزاة الشماليين، ونقل العاصمة لمروي وفر عمقاً دفاعياً واسعاً.', textEn: 'Defensive security: Napata was exposed to northern raids; Meroe provided vast defensive depth.' },
            { stepNumber: 2, textAr: 'صناعياً: مروي تمتلك جبالاً من خام الحديد وغابات سنط كثيفة وفرت الفحم اللازم لأفران الصهر.', textEn: 'Industrial wealth: Meroe held massive iron ore deposits and dense acacia fuel woodlands.' },
            { stepNumber: 3, textAr: 'زراعياً: سهول البطانة المطرية وفرت مراعي وغلالاً وفيرة دعمت زيادة السكان والجيش.', textEn: 'Agricultural sustenance: Rain-fed Butana plains sustained large civilian and military populations.' }
          ],
          takeawayAr: 'الانتقال إلى مروي لم يكن انسحاباً بل قفزة استراتيجية أسست لأقوى عصر صناعي في إفريقيا القديمة.',
          takeawayEn: 'Relocating to Meroe was a visionary economic and industrial leap that created ancient Africa’s iron powerhouse.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-2-2',
          questionAr: 'على ماذا اعتمد نظام التوريث السياسي في مملكة نبتة الكوشية؟',
          questionEn: 'What was the basis of political succession in the Kushite Kingdom of Napata?',
          optionsAr: ['التوريث الأموي (انتقال العرش عبر نسل الأم كابن الأخت أو ابن البنت)', 'الانتخاب الشعبي العام المباشر', 'وراثة الابن الأكبر للخليفة فقط', 'حكم القائد العسكري الأقوى في الجيش'],
          optionsEn: ['Matrilineal succession (through the maternal line/nephew)', 'Universal direct democratic election', 'Strict primogeniture to eldest son', 'Military coup by the strongest general'],
          correctIndex: 0,
          explanationAr: 'اعتمدت نبتة على النظام الأمومي؛ حيث ينتقل العرش عبر نسل الأم (ابن الأخت أو ابن البنت) بموافقة الكهنة والأعيان.',
          explanationEn: 'Napatan royal succession was strictly matrilineal, passing through maternal lineage with priest confirmation.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-2-assess',
      titleAr: 'اختبار تقييم المحاضرة 2: حضارة كرمة ومملكة كوش النبتية',
      titleEn: 'Assessment Lecture 2: Kerma Civilization and Napatan Kush',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h2-q1',
          textAr: 'ما هي الوظيفة الأساسية التي أُنشئت من أجلها الدفوفة الشرقية في حضارة كرمة؟',
          textEn: 'What was the primary function of the Eastern Deffufa at Kerma?',
          optionsAr: ['صالة جنائزية لإقامة الطقوس وشعائر الموتى', 'حصن عسكري لحماية الحدود الشمالية', 'مخزن رئيسي للحبوب والذهب', 'ورشة لصهر خام النحاس والحديد'],
          optionsEn: ['Funerary chapel for burial rites', 'Military border fort', 'Grain and gold granary', 'Copper and iron smelting workshop'],
          correctIndex: 0,
          conceptTestedAr: 'وظائف الدفوفة الشرقية والغربية بكرمة',
          conceptTestedEn: 'Functions of Kerma Deffufas',
          explanationAr: 'الدفوفة الشرقية كانت صالة جنائزية مخصصة للشعائر، بينما كانت الدفوفة الغربية مقراً إدارياً ودينياً كبيراً.',
          explanationEn: 'The Eastern Deffufa served specifically as a royal mortuary chapel.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h2-q2',
          textAr: 'أي من الظواهر الطقسية التالية انفردت بها مقابر الملوك في نبتة تكريماً لشجاعتها الحربية؟',
          textEn: 'Which unique ritual burial custom was practiced for royal tombs in Napata honoring battle courage?',
          optionsAr: ['دفن الخيول الموقوفة في قبور خاصة مرتبة بجوار ملوكها', 'دفن الفيلة المدربة على القتال', 'دفن الأسلحة النحاسية دون أصحابها', 'تحنيط الطيور الجارحة والنسور'],
          optionsEn: ['Interring dedicated war horses in orderly grave rows', 'Burying war elephants', 'Interring copper weapons without bodies', 'Mummifying birds of prey'],
          correctIndex: 0,
          conceptTestedAr: 'طقوس دفن الخيول في مملكة نبتة',
          conceptTestedEn: 'Royal horse graves in Napatan culture',
          explanationAr: 'تميزت مدافن نبتة (خاصة في الكرو) بدفن الخيول بكامل زينتها في مقابر مصفوفة بجوار ملوكها اعتزازاً بفروسيتهم.',
          explanationEn: 'Napatan kings honored their elite cavalry horses by burying them upright in adorned dedicated graves.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h2-q3',
          textAr: 'في أي المواقع الأثرية يقع هرم الملك الكوشي الشهير تهارقا؟',
          textEn: 'At which archaeological site is the pyramid of the famed Kushite King Taharqa located?',
          optionsAr: ['نوري', 'الكرو', 'البجراوية', 'جزيرة صاي'],
          optionsEn: ['Nuri', 'El-Kurru', 'Begrawiya', 'Sai Island'],
          correctIndex: 0,
          conceptTestedAr: 'موقع هرم الملك تهارقا في نوري',
          conceptTestedEn: 'Taharqa’s pyramid location at Nuri',
          explanationAr: 'شيد الملك تهارقا هرمه الأكبر والشهير في مقبرة نوري الملكية بالقرب من جبل البركل.',
          explanationEn: 'King Taharqa chose Nuri to construct the largest royal Kushite pyramid.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h2-q4',
          textAr: 'ما العامل الاقتصادي والصناعي الأهم الذي شجع على نقل عاصمة كوش إلى مروي عام 571 ق.م؟',
          textEn: 'What was the paramount economic and industrial factor driving the relocation of Kush’s capital to Meroe in 571 BC?',
          optionsAr: ['وفرة خام الحديد وأشجار السنط اللازمة لصناعة الصهر إلى جانب مراعي البطانة', 'اكتشاف مناجم الماس الكبرى في ساحل البحر الأحمر', 'القرب من موانئ البحر الأبيض المتوسط لتصدير الفخار', 'وفرة مصائد الأسماك في حوض بحيرة تشاد'],
          optionsEn: ['Abundance of iron ores and acacia charcoal timber alongside Butana pastures', 'Discovery of Red Sea diamond mines', 'Proximity to Mediterranean export ports', 'Fisheries around Lake Chad'],
          correctIndex: 0,
          conceptTestedAr: 'أسباب ودوافع نقل العاصمة لمروي',
          conceptTestedEn: 'Industrial drivers for moving capital to Meroe',
          explanationAr: 'وفرت مروي مناجم غنية بخام الحديد وغابات كثيفة للوقود وسهول البطانة الرعوية والزراعية.',
          explanationEn: 'Meroe’s vast iron deposits and acacia woodlands established it as ancient Africa’s metallurgical center.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // المحاضرة 3: مملكة مروي ومواقع آثار كوش الخالدة
  {
    id: 'sd-g10-hist-3',
    order: 3,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: من تاريخ السودان',
    unitTitleEn: 'Unit 1: From the History of Sudan',
    lessonNumberAr: 'الدروس 5 و 6: مملكة مروي ومواقع آثار حضارة كوش',
    lessonNumberEn: 'Lessons 5 & 6: The Meroitic Kingdom and Kushite Archaeological Sites',
    titleAr: 'المحاضرة 3: مملكة مروي العظيمة ومواقع آثار كوش الخالدة (571 ق.م - 350 م)',
    titleEn: 'Lecture 3: The Great Meroitic Kingdom and Iconic Kushite Archaeological Sites',
    subtitleAr: 'حكم الكنداكات، صهر الحديد وصناعة السلاح، اللغة المروية (23 حرفاً)، ومعابد البجراوية والنقعة والمصورات',
    subtitleEn: 'Kandake queen rulers, metallurgy blast furnaces, the 23-letter Meroitic script, and Begrawiya, Naqa, and Musawwarat.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'أطلق المؤرخون القدماء على مروي لقب "برمنغهام إفريقيا القديمة" لكثرة ما تلالت به أراضيها من خبث الحديد وأفران الصهر العملاقة! وفي نفس الوقت، قادت ملكاتها العظيمات المعروفات بـ "الكنداكات" الجيوش وواجهن جحافل الإمبراطورية الرومانية وفرضن شروطهن على قيصر روما. فكيف صاغت مروي أبجديتها المروية الخاصة المكونة من 23 حرفاً؟ وما هي المعالم الخالدة في النقعة والمصورات الصفراء؟',
    warmupHookEn: 'Dubbed the "Birmingham of Ancient Africa" for its towering iron blast furnaces, Meroe was also the land of the Kandakes—ferocious queen regnants who defied imperial Rome. Explore Meroe’s 23-letter script, iron industry, and iconic pyramid fields.',
    learningOutcomesAr: [
      'أن يوضح الطالب دور ومكانة الكنداكات والملكات الحاكمات في الحضارة المروية.',
      'أن يحلل الأسس الاقتصادية لمروي (صناعة صهر الحديد، الزراعة بالساقية والشادوف، والتجارة).',
      'أن يبين خصائص اللغة المروية والآلهة المحلية كالإله الأسد (أبادماك).',
      'أن يصف أهم مواقع آثار كوش المروية والنبتية (البجراوية، ود بانقا، المصورات الصفراء، النقعة، وجبل البركل).',
      'أن يفسر أسباب سقوط مملكة مروي على يد الملك عيزانا عام 350م.'
    ],
    learningOutcomesEn: [
      'Evaluate the leadership role of Kandakes (ruling queen mothers) in Meroe.',
      'Analyze Meroitic economic infrastructure: iron smelting foundries, saqiya irrigation, and trans-African trade.',
      'Describe the 23-letter Meroitic script and indigenous deities like lion-god Apedemak.',
      'Survey major archaeological complexes: Begrawiya, Wad Banqa, Musawwarat es-Sufra, and Naqa.',
      'Explain the fall of Meroe to King Ezana of Axum around 350 AD.'
    ],
    keyConceptsAr: [
      'مملكة مروي (571 ق.م - 350 م): العاصمة الملكية بالبجراوية',
      'الكنداكات: لقب الملكات الحاكمات والملكات الأمهات القويات (مثل أماني ريناس وأماني شخيتو)',
      'صناعة صهر الحديد: انتشار أفران الصهر وتصدير الأدوات الزراعية والأسلحة',
      'الزراعة والري: إدخال الساقية والشادوف واستغلال مياه الأمطار في الحفائر',
      'اللغة المروية: تطوير أبجدية صوتية خاصة من 23 حرفاً حلت محل الهيروغليفية',
      'الإله أبادماك (الإله الأسد): رمز القوة والحرب في معابد النقعة والمصورات الصفراء',
      'سقوط مروي: حملة الملك عيزانا ملك أكسوم الحبشية عام 350م وتدمير العاصمة'
    ],
    keyConceptsEn: [
      'Meroitic Kingdom (571 BC–350 AD): Begrawiya royal metropolis and pyramids',
      'Kandakes: Sovereign queen mothers who commanded armies and administered statecraft',
      'Iron Smelting: Africa’s primary iron foundries manufacturing spearheads and plowshares',
      'Irrigation Technology: Introduction of the water-lifting Saqiya wheel and water hafirs',
      'Meroitic Script: Indigenous 23-character alphabetic writing system replacing hieroglyphs',
      'Lion God Apedemak: Primary indigenous martial deity portrayed at Naqa and Musawwarat',
      'Collapse of Meroe: Decisive military campaign by King Ezana of Axum circa 350 AD'
    ],
    vocabulary: [
      { termAr: 'الكنداكة (Kandake)', termEn: 'Kandake', definitionAr: 'لقب أطلق على الملكات الحاكمات والملكات الأمهات في مروي، وتمتعن بنفوذ سياسي وعسكري وديني مطلق.' },
      { termAr: 'أبادماك (Apedemak)', termEn: 'Apedemak', definitionAr: 'الإله الأسد المروي المحلي، رمز الشجاعة والقوة الحربية والخصوبة، وخُصصت له معابد شهيرة في النقعة والمصورات.' },
      { termAr: 'الحفائر المروية', termEn: 'Meroitic Hafirs', definitionAr: 'أحواض وسدود مائية دائرية ضخمة حفرها المرويون لحصاد وتخزين مياه الأمطار في البطانة لدعم الزراعة والرعي.' }
    ],
    summaryAr: 'ملخص الدرس: مثلت مروي ذروة النهضة الحضارية والتكنولوجية المستقلة في السودان القديم؛ حيث قادت الكنداكات الدولة، وتحولت مروي إلى عاصمة لصهر الحديد في القارة، وابتكرت أبجديتها من 23 حرفاً، ونحتت معابدها الخالدة في البجراوية والنقعة والمصورات، حتى سقطت عام 350م بغزو عيزانا ملك أكسوم.',
    summaryEn: 'Summary: Meroe epitomized ancient Sudan’s golden era of metallurgy, architectural splendor, and female sovereignty. Kandakes ruled, blast furnaces forged iron tools, and an indigenous 23-letter alphabet recorded civilization until Axumite King Ezana brought down the kingdom in 350 AD.',
    sections: [
      {
        titleAr: '1. المظاهر الحضارية لمملكة مروي: الكنداكات، صهر الحديد، والأبجدية',
        titleEn: '1. Meroitic Civilizational Achievements: Kandakes, Metallurgy, and Script',
        contentAr: 'تميزت مملكة مروي (571 ق.م - 350 م) بخصائص سياسية واقتصادية متفردة: 1) القيادة السياسية للمرأة: برزت ملكات حكامات عظيمات لُقبن بـ "الكنداكات" (مثل أماني ريناس وأماني توري)؛ حيث قدن الجيوش في المعارك ضد الرومان، وأدرن المعاهدات وأشرفن على تشييد المعابد والأهرامات. 2) الثورة الصناعية والزراعية: سميت مروي ببرمنغهام إفريقيا لضخامة أفران صهر خام الحديد التي زودت إفريقيا وحوض النيل بالفؤوس والسلاح. كما ازدهرت الزراعة بإدخال "الساقية" النوبية لأول مرة وحفر الحفائر الكبرى لتخزين مياه الأمطار في البطانة. 3) الأصالة الثقافية واللغوية: طوّر المرويون لغتهم الخاصة وأبجديتهم الصوتية المكونة من 23 حرفاً (كُتبت بالخطين الهيروغليفي المروي والديموطيقي المروي)، وبرزت عبادة الآلهة المحلية مثل الإله الأسد "أبادماك" إلى جانب الإله آمون.',
        contentEn: 'Meroe excelled through unprecedented achievements: sovereign female monarchs known as Kandakes commanded national defense; industrial-scale iron blast furnaces supplied tools and weapons; the ox-driven saqiya wheel revolutionized year-round riparian agriculture; and a native 23-letter alphabetic script was invented, accompanied by reverence for indigenous deities like Apedemak.',
        interactiveExample: {
          titleAr: 'تحليل تاريخي 3: سلاسل القيمة المضافة لصناعة صهر الحديد في مروي',
          titleEn: 'Historical Analysis 3: The Meroitic Iron Smelting Value Chain',
          equation: 'خام الحديد + فحم خشب السنط + دمى المنافيخ الفخارية = أدوات زراعية قاطعة + أسلحة جيش متفوقة + عوائد تجارية',
          steps: [
            { stepNumber: 1, textAr: 'استخراج خام الحديد من التلال الرملية المحيطة بمروي وخلطه بالفحم الخشبي المستخرج من أشجار السنط الغابية.', textEn: 'Mining sandstone iron ores and mixing with high-caloric acacia charcoal.' },
            { stepNumber: 2, textAr: 'ضخ الهواء عبر أنابيب طينية (مواسير النفخ) لرفع حرارة الفرن إلى أكثر من 1200 درجة مئوية لصهر المعدن.', textEn: 'Blowing forced air through tuyères to elevate furnace temperatures above 1,200°C.' },
            { stepNumber: 3, textAr: 'تشكيل الحديد إلى فؤوس وسكك محاريث زراعية وسهام فولاذية منحت مروي التفوق العسكري والاقتصادي.', textEn: 'Forging iron into plowshares and deadly tipped spears ensuring agricultural and military dominance.' }
          ],
          takeawayAr: 'صناعة الحديد جعلت من مروي مركز الثقل العسكري والاقتصادي في القارة الإفريقية لقرون طويلة.',
          takeawayEn: 'Iron metallurgy elevated Meroe into a formidable military and commercial empire across northeast Africa.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-3-1',
          questionAr: 'كم عدداً بلغ إجمالي الحروف الأبجدية للغة المروية السودانية القديمة؟',
          questionEn: 'How many letters comprised the ancient indigenous Meroitic alphabet?',
          optionsAr: ['23 حرفاً', '28 حرفاً', '18 حرفاً', '32 حرفاً'],
          optionsEn: ['23 letters', '28 letters', '18 letters', '32 letters'],
          correctIndex: 0,
          explanationAr: 'ابتكر المرويون أبجديتهم الخاصة المتكونة من 23 حرفاً صوتياً لتدوين لغتهم الوطنية.',
          explanationEn: 'The Meroitic alphabet consisted precisely of 23 phonetic signs.'
        }
      },
      {
        titleAr: '2. مواقع آثار كوش الخالدة وسقوط مروي (350 م)',
        titleEn: '2. Kushite Archaeological Sites and the Fall of Meroe (350 AD)',
        contentAr: 'خلفت حضارة كوش في فترتيها النبتية والمروية تراثاً عمرانياً عالمياً مسجلاً في منظمة اليونسكو: 1) مواقع الفترة النبتية: مجمع معابد جبل البركل (المقر الديني لآمون)، مقابر الكرو (أقدم أهرامات نبتة ومدافن الخيول)، ونوري (هرم الملك تهارقا الأعظم). 2) مواقع الفترة المروية: البجراوية (تضم المدينة الملكية وحقول الأهرامات الشمالية والجنوبية والوسطى ذات الزوايا الانحدارية الحادة والمقاصير الجنائزية)، ود بانقا (قصر الكنداكة أماني شخيتو)، المصورات الصفراء (مجمع الحوش الكبير وقنوات المياه وتماثيل الفيلة)، والنقعة (معبد الأسد للإله أبادماك والكشك الروماني المتأثر بالطراز الهلنستي). ومع حلول القرن الرابع الميلادي ضعفت مروي بفعل تدهور التجارة وتغير المناخ، حتى قاد الملك عيزانا ملك أكسوم (الحبشة) حملته العسكرية عام 350م فدمر مروي وأسدل الستار على حضارتها العريقة.',
        contentEn: 'Kushite monuments stand as UNESCO World Heritage treasures: Napatan sacred precincts at Jebel Barkal, El-Kurru horse graves, and Taharqa’s towering pyramid at Nuri; alongside Meroitic masterpieces at Begrawiya (steep-sided royal pyramids and chapels), Wad Banqa palace, Musawwarat es-Sufra (Great Enclosure and elephant statues), and Naqa (Apedemak Lion Temple and Roman Kiosk). Weakened by shifting trade corridors, Meroe fell in 350 AD to Axumite King Ezana.',
        interactiveExample: {
          titleAr: 'تحليل تاريخي 4: المقارنة المعمارية بين أهرامات كوش وأهرامات مصر',
          titleEn: 'Historical Analysis 4: Kushite Pyramids vs Egyptian Pyramids',
          equation: 'أهرامات مروي (زاوية انحدار حادة 70 درجة + مقصورة جنائزية أمامية + غرف دفن تحت الأرض)',
          steps: [
            { stepNumber: 1, textAr: 'في مروي، شُيد أكثر من 200 هرم (أكثر من ضعف أهرامات مصر مجتمعة) بحجم أصغر وزوايا انحدار حادة وشاهقة.', textEn: 'Meroe built over 200 pyramids—surpassing Egypt in count—with distinct steep incline angles.' },
            { stepNumber: 2, textAr: 'ألحق المرويون مقصورة مدخلية أمامية منقوشة لتقديم القرابين وتخليد سيرة المتوفى.', textEn: 'Kushites added decorated fore-temple chapels directly attached to pyramid entryways.' },
            { stepNumber: 3, textAr: 'حُفرت غرفة الدفن الحقيقية عميقاً تحت الصخر أسفل الهرم وليس في قلبه لحمايتها من اللصوص.', textEn: 'The actual burial vault was carved deep into subterranean bedrock below the superstructure.' }
          ],
          takeawayAr: 'الأهرامات المروية تمثل طرازاً معمارياً سودانياً أصيلاً له وظائفه وجمالياته الخاصة.',
          takeawayEn: 'Meroitic pyramids represent a distinct indigenous architectural tradition.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-3-2',
          questionAr: 'من هو ملك أكسوم الذي قاد حملة عسكرية قضت على مملكة مروي حوالي عام 350م؟',
          questionEn: 'Which king of Axum led the military expedition that ended the Meroitic kingdom circa 350 AD?',
          optionsAr: ['الملك عيزانا', 'الملك النجاشي أصحمة', 'الإمبراطور منليك', 'الملك كالب'],
          optionsEn: ['King Ezana', 'King Negus Armah', 'Emperor Menelik', 'King Kaleb'],
          correctIndex: 0,
          explanationAr: 'الملك عيزانا ملك مملكة أكسوم الإثيوبية قاد جيوشه عام 350م ودمر العاصمة مروي.',
          explanationEn: 'King Ezana of Axum destroyed Meroe in 350 AD, as recorded on his triumphal stone stelae.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-3-assess',
      titleAr: 'اختبار تقييم المحاضرة 3: مملكة مروي ومواقع آثار كوش',
      titleEn: 'Assessment Lecture 3: Meroitic Kingdom and Kushite Sites',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h3-q1',
          textAr: 'ما اللقب الذي أُطلق في الحضارة المروية على الملكات الحاكمات والملكات الأمهات اللاتي تولين قيادة الجيوش والحكم؟',
          textEn: 'What royal title was bestowed in Meroe upon regnant queens and queen mothers commanding state affairs?',
          optionsAr: ['الكنداكة', 'الفرعونة', 'الأميرة', 'المايسترو'],
          optionsEn: ['Kandake', 'Pharaohess', 'Princess', 'Maestro'],
          correctIndex: 0,
          conceptTestedAr: 'لقب الكنداكة ودور المرأة في مروي',
          conceptTestedEn: 'The title Kandake and female leadership in Meroe',
          explanationAr: 'الكنداكة هو اللقب المروي للملكة الحاكمة والملكة الأم والتي كان لها دور محوري في قيادة الدولة.',
          explanationEn: 'Kandake was the revered title of Meroe’s sovereign queens and queen mothers.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h3-q2',
          textAr: 'لماذا لُقبت مدينة مروي بـ "برمنغهام إفريقيا القديمة" في كتابات المؤرخين وعلماء الآثار؟',
          textEn: 'Why was Meroe nicknamed the "Birmingham of Ancient Africa" by historians and archaeologists?',
          optionsAr: ['لكثرة أفران صهر خام الحديد وتلال الخبث المعدني المنتشرة حولها', 'لكونها المركز الأول لنسج الحرير والقطن', 'لاحتوائها على أكبر أسطول سفن بحرية', 'لبنائها أطول الجسور الخشبية في العالم'],
          optionsEn: ['Due to extensive blast furnaces and massive iron slag heaps', 'For silk and cotton textile production', 'For possessing the largest naval fleet', 'For constructing the longest wooden bridges'],
          correctIndex: 0,
          conceptTestedAr: 'صناعة صهر الحديد في مروي',
          conceptTestedEn: 'Iron smelting metallurgy in Meroe',
          explanationAr: 'كانت مروي المركز الصناعي الأول في إفريقيا لصهر خام الحديد وصناعة الفؤوس والرماح.',
          explanationEn: 'Meroe’s monumental iron foundries and slag heaps earned it the title of ancient Africa’s industrial hub.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h3-q3',
          textAr: 'في أي موقع أثري مروي يقع معبد الإله الأسد "أبادماك" ومبنى الكشك الروماني الشهير؟',
          textEn: 'At which Meroitic archaeological site are the Apedemak Lion Temple and the Roman Kiosk located?',
          optionsAr: ['النقعة', 'جبل البركل', 'الكرو', 'سوبا'],
          optionsEn: ['Naqa', 'Jebel Barkal', 'El-Kurru', 'Soba'],
          correctIndex: 0,
          conceptTestedAr: 'موقع النقعة ومعبد أبادماك والكشك الروماني',
          conceptTestedEn: 'Naqa archaeological complex and Apedemak temple',
          explanationAr: 'تضم النقعة في قلب البطانة معبد الإله الأسد أبادماك ومبنى الكشك الروماني الذي يدمج فنون العمارة الهلنستية والمروية.',
          explanationEn: 'Naqa houses the famed Apedemak Lion Temple and the Hellenistic-influenced Roman Kiosk.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h3-q4',
          textAr: 'ما هي الوسيلة الهيدروليكية التي أدخلها المرويون لأول مرة في وادي النيل لرفع المياه وري المحاصيل الزراعية؟',
          textEn: 'Which hydraulic machine did the Meroites introduce to the Nile Valley for water lifting and crop irrigation?',
          optionsAr: ['الساقية النوبية التي تديرها الأبقار', 'المضخة البخارية الميكانيكية', 'السدود الخرسانية ذات البوابات الآلية', 'قنوات الري بالتنقيط المضغوطة'],
          optionsEn: ['The animal-driven oxen saqiya waterwheel', 'Mechanical steam pump', 'Gated concrete dams', 'Pressurized drip irrigation'],
          correctIndex: 0,
          conceptTestedAr: 'الساقية والزراعة في مروي',
          conceptTestedEn: 'Saqiya irrigation in Meroitic agriculture',
          explanationAr: 'أحدث إدخال الساقية النوبية طفرة زراعية برفع مياه النيل لري الأراضي المرتفعة على مدار العام.',
          explanationEn: 'The introduction of the ox-driven saqiya revolutionized Meroitic agriculture by permitting perennial irrigation.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // المحاضرة 4: المسيحية في السودان وسقوط الممالك ومراحل انتشار الإسلام وقيام سنار
  {
    id: 'sd-g10-hist-4',
    order: 4,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: من تاريخ السودان',
    unitTitleEn: 'Unit 1: From the History of Sudan',
    lessonNumberAr: 'الدروس 7، 8، 9، و 10: الممالك المسيحية، انتشار الإسلام، وسلطنة سنار والمجتمعات المسلمة',
    lessonNumberEn: 'Lessons 7 to 10: Christian Nubia, Islamic Diffusion, Sennar Sultanate, and Muslim Society',
    titleAr: 'المحاضرة 4: الممالك المسيحية النوبية ومراحل انتشار الإسلام وقيام سلطنة سنار (1504م)',
    titleEn: 'Lecture 4: Christian Nubian Kingdoms, Islamization Stages, and the 1504 Sennar Sultanate',
    subtitleAr: 'ممالك نوباتيا والمقرة وعلوة، اتفاقية البقط (651م)، تحالف الفونج والعبدلاب، ودور الخلاوى والطرق الصوفية',
    subtitleEn: 'Nobatia, Makuria, and Alwa; the 651 Baqt Treaty; the 1504 Funj-Abdallab pact, khalwas, and Sufi orders.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في عام 651م، وقف القائد المسلم عبد الله بن أبي السرح أمام أسوار دنقلا ليعقد مع ملك النوبة "اتفاقية البقط"؛ أطول معاهدة سلام وتبادل تجاري في تاريخ العالم استمرت لأكثر من 600 عام! كيف تسللت الديانة الإسلامية بهدوء عبر النيل والبحر الأحمر والتجارة والتصاهر؟ وكيف اجتمع الفونج والعبدلاب عام 1504م لإسقاط سوبا وإعلان أول سلطنة إسلامية كبرى في السودان؟',
    warmupHookEn: 'Signed in 651 AD, the Baqt Treaty between Muslims and Christian Makuria endured as history’s longest peace pact. Discover the three phases of peaceful Islamization through trade, intermarriage, Sufi orders, and the momentous 1504 founding of the Sennar Sultanate.',
    learningOutcomesAr: [
      'أن يعدد الطالب الممالك المسيحية الثلاث في السودان (نوباتيا، المقرة، علوة) وأسباب تدهورها وسقوطها.',
      'أن يحلل بنود وأثر اتفاقية البقط (651م) ومعابر دخول العرب والإسلام إلى السودان.',
      'أن يتتبع المراحل التاريخية الثلاث لانتشار الإسلام في السودان.',
      'أن يوضح أثر تحالف الفونج (عمارة دنقس) والعبدلاب (عبد الله جماع) عام 1504م وقيام سلطنة سنار.',
      'أن يبرز دور الخلاوى والعلماء والطرق الصوفية في ترسيخ المجتمع المسلم وظهور المدن الإسلامية.'
    ],
    learningOutcomesEn: [
      'Identify the three Christian Nubian kingdoms (Nobatia, Makuria, Alodia) and causes of their collapse.',
      'Analyze the clauses and strategic impact of the 651 AD Baqt Treaty and Islamic immigration corridors.',
      'Trace the three chronological phases of Sudanese Islamization.',
      'Explain the significance of the 1504 Funj (Amara Dunqas) and Abdallab (Abdallah Jamma) alliance founding Sennar.',
      'Evaluate the cultural impact of khalwas, scholars, Sufi tariqas, and emerging Islamic urban centers.'
    ],
    keyConceptsAr: [
      'الممالك المسيحية الثلاث: نوباتيا (الفرس)، المقرة (دنقلا العجوز)، وعلوة (سوبا)',
      'أسباب سقوط الممالك المسيحية: نزاع العرش، المصاهرة العربية والنظام الأمومي، والهجرات المتتابعة',
      'معابر دخول الإسلام: طريق البحر الأحمر (التجارة والتعدين)، طريق وادي النيل، وطريق شمال إفريقيا',
      'اتفاقية البقط (651م): أطول معاهدة سلام نظمت التجارة وحرية التنقل وحماية المسجد بدون جزية حربية',
      'المراحل الثلاث لانتشار الإسلام: الأولى (641-1300م البقط)، الثانية (1300-1500م انهيار المقرة والخلاوى)، الثالثة (1500-1800م قيام السلطنات)',
      'سلطنة سنار (1504م): تحالف عمارة دنقس (الفونج) وعبد الله جماع (العبدلاب) وإسقاط سوبا',
      'المجتمع المسلم: دور الشيوخ (غلام الله بن عايد، محمود العركي)، الطرق الصوفية، وظهور مدن سنار وأربجي وقري والدامر'
    ],
    keyConceptsEn: [
      'Nubian Christian Kingdoms: Nobatia (Faras), Makuria (Old Dongola), and Alodia (Soba)',
      'Factors of Nubian decline: Succession disputes, Arab intermarriage via matrilineal inheritance, and migrations',
      'Islamic Ingress Corridors: Red Sea ports, Nile Valley, and North African trans-Saharan routes',
      'Baqt Treaty (651 AD): Landmark 600-year non-aggression and commercial exchange pact',
      'Three Phases of Islamization: Treaty era (641–1300), Makurian collapse & scholars (1300–1500), Sovereign Sultanates (1500–1800)',
      'Sennar Sultanate (1504 AD): Historic pact between Amara Dunqas (Funj) and Abdallah Jamma (Abdallab)',
      'Islamic Institutions: Quranic khalwas, scholars (Ghulamallah, Al-Araki), Sufi tariqas, and new urban centers'
    ],
    vocabulary: [
      { termAr: 'اتفاقية البقط (651م)', termEn: 'Baqt Treaty', definitionAr: 'معاهدة سياسية واقتصادية سلمية عقدها عبد الله بن أبي السرح مع ملك المقرة، فتحت أبواب التبادل التجاري والأمان للمسلمين في السودان.' },
      { termAr: 'تحالف الفونج والعبدلاب', termEn: 'Funj-Abdallab Alliance', definitionAr: 'تحالف تاريخي عام 1504م بين عمارة دنقس زعيم الفونج والشيخ عبد الله جماع زعيم العبدلاب أسفر عن فتح سوبا وقيام سلطنة سنار.' },
      { termAr: 'الخلوة القرآنية', termEn: 'Quranic Khalwa', definitionAr: 'مؤسسة تعليمية وتربوية سودانية أصيلة تأسست لتحفيظ القرآن الكريم وتدريس علوم اللغة العربية والفقه وتخريج العلماء.' }
    ],
    summaryAr: 'ملخص الدرس: تأسست في السودان ثلاث ممالك مسيحية (نوباتيا، المقرة، علوة). ومع توقيع اتفاقية البقط (651م)، تدفق العرب والإسلام عبر التجارة والتصاهر المستفيد من النظام الأمومي؛ فتراجعت المسيحية تدريجياً. وتوج ذلك التحول عام 1504م بتحالف الفونج والعبدلاب وقيام سلطنة سنار الإسلامية وانتشار الخلاوى والطرق الصوفية.',
    summaryEn: 'Summary: Christian Nubia (Nobatia, Makuria, Alodia) gradually gave way to Islam following the 651 AD Baqt Treaty. Peaceful diffusion through trade, scholarly migration, and matrilineal intermarriage culminated in the 1504 Funj-Abdallab coalition that founded Sennar and established a vibrant Islamic educational culture.',
    sections: [
      {
        titleAr: '1. الممالك المسيحية في السودان وأسباب تدهورها وسقوطها',
        titleEn: '1. Christian Nubian Kingdoms and Causes of Their Decline',
        contentAr: 'دخلت المسيحية السودان في منتصف القرن السادس الميلادي (حوالي 543م) عبر إرساليات قادمة من مصر البيزنطية، وقامت ثلاث ممالك مسيحية كبرى: 1) نوباتيا في الشمال بين الشلالين الأول والثالث وعاصمتها "فرس"، 2) المقرة في الوسط بين الشلالين الثالث والتاسع وعاصمتها "دنقلا العجوز"، 3) علوة في الجنوب بين الشلال السادس والنيل الأزرق وعاصمتها "سوبا". واستخدمت هذه الممالك اللغات النوبية والقبطية واليونانية في صلواتها ومخطوطاتها. غير أن هذه الممالك تعرضت لعوامل تدهور أدت إلى انهيارها: أولاً: النزاع المستمر على العرش والحكم؛ حيث أدى تزاوج النبلاء النوبيين مع العرب الوافدين إلى وراثة أبناء العرب المسلمين للعرش استناداً إلى قاعدة "التوريث الأموي" النوبية القديمة. ثانياً: ظهور إمارات ومشيخات شبه مستقلة أضعفت السلطة المركزية. ثالثاً: ضعف التمسك الديني واقتصار المسيحية على البلاط الحاكم دون تغلغل عميق بين العامة. رابعاً: موجات الهجرات العربية المتواصلة والتجارة السلمية. وقد ذابت نوباتيا مبكراً في المقرة، وسقطت المقرة رسمياً في القرن الرابع عشر الميلادي بتولي حاكم مسلم للعرش، وأخيراً سقطت سوبا عاصمة علوة عام 1504م.',
        contentEn: 'Christianity entered Nubia in the 6th century AD, forming Nobatia (capital Faras), Makuria (capital Old Dongola), and Alodia (capital Soba). Nubian, Coptic, and Greek served as liturgical languages. The kingdoms collapsed due to dynastic succession crises, matrilineal Arab intermarriage shifting royal succession to Muslim sons, decentralization, and sustained peaceful Arab pastoral and commercial immigration, culminating in Soba’s capture in 1504.',
        interactiveExample: {
          titleAr: 'تحليل تاريخي 5: كيف أدى النظام الأمومي النوبي إلى الانتقال السلمي للعرش للمسلمين؟',
          titleEn: 'Historical Analysis 5: Matrilineal Succession as a Catalyst for Peaceful State Transition',
          equation: 'زواج تاجر عربي مسلم + أميرة نوبية مسيحية = وراثة الابن المسلم لعرش المملكة النوبية بنص القانون النوبي الأموي',
          steps: [
            { stepNumber: 1, textAr: 'القانون النوبي يقر أن الحكم ينتقل إلى ابن الأخت أو ابن البنت وليس لابن الملك الذكر المباشر.', textEn: 'Nubian customary law dictated that sovereignty passed to the sister’s son or maternal grandson.' },
            { stepNumber: 2, textAr: 'تزوج زعماء وتجار القبائل العربية من شقيقات وبنات ملوك النوبة وأمرائها.', textEn: 'Prominent Muslim tribal chiefs and merchants married Nubian royal sisters and princesses.' },
            { stepNumber: 3, textAr: 'أنجبت الأميرات أبناء مسلمين، وحين توفي الملك، ورث هؤلاء الأبناء العرش قانونياً، فتحولت المملكة للإسلام من القمة سلمياً.', textEn: 'The resulting sons were raised Muslim and legitimately ascended the throne upon royal succession, converting state rule peacefully.' }
          ],
          takeawayAr: 'الانتقال إلى الإسلام في السودان تم عبر اندماج اجتماعي وثقافي وقانوني فريد دون إكراه عسكري.',
          takeawayEn: 'Sudanese Islamization occurred through indigenous legal adaptation and social assimilation rather than conquest.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-4-1',
          questionAr: 'ما هي عاصمة مملكة علوة المسيحية في السودان القديم؟',
          questionEn: 'What was the capital of the Christian kingdom of Alodia in ancient Sudan?',
          optionsAr: ['سوبا', 'دنقلا العجوز', 'فرس', 'كرمة'],
          optionsEn: ['Soba', 'Old Dongola', 'Faras', 'Kerma'],
          correctIndex: 0,
          explanationAr: 'كانت سوبا (بالقرب من الخرطوم الحالية) هي العاصمة العتيدة لمملكة علوة المسيحية الجنوبية.',
          explanationEn: 'Soba, situated near modern Khartoum on the Blue Nile, was the capital of Alodia.'
        }
      },
      {
        titleAr: '2. مراحل انتشار الإسلام وسلطنة سنار (1504م) وظهور المجتمعات المسلمة',
        titleEn: '2. Stages of Islamic Spread, the 1504 Sennar Sultanate, and Emergence of Muslim Communities',
        contentAr: 'دخل الإسلام السودان عبر ثلاثة معابر: البحر الأحمر (لتجارة المعادن والذهب)، وادي النيل من مصر جنوباً، ودرب الأربعين من شمال وغرب إفريقيا. وقد مر انتشار الإسلام بثلاث مراحل رئيسية: 1) المرحلة الأولى (641 - 1300م): بدأت بفتح مصر وتوقيع اتفاقية البقط (651م) التي ألزمت الطرفين بعدم الاعتداء والتبادل التجاري، وشهدت استقرار العرب في بطاح النوبة والبجا. 2) المرحلة الثانية (1300 - 1500م): انهيار المقرة السياسي، وتدفق العلماء وبناء المساجد والخلاوى. 3) المرحلة الثالثة (1500 - 1800م): تميزت بقيام السلطنات الإسلامية الكبرى وعلى رأسها سلطنة سنار (السلطنة الزرقاء) عام 1504م إثر التحالف التاريخي بين الفونج بقيادة عمارة دنقس والعبدلاب بقيادة عبد الله جماع وإسقاط سوبا، إلى جانب سلطنة دارفور، ومملكة تقلي، والمسبعات. وتميز المجتمع المسلم بظهور الخلاوى لتدريس القرآن والفقه، وتدفق كبار العلماء (مثل غلام الله بن عايد ومحمود العركي)، وانتشار الطرق الصوفية (القادرية، الشاذلية، السمانية، والختمية) التي صبغت التدين السوداني بالتسامح والتكافل، ونشوء حواضر مدنية كبرى مثل سنار، وأربجي، وقري، والدامر، وسواكن.',
        contentEn: 'Islam diffused into Sudan via the Red Sea, the Nile corridor, and trans-Saharan western tracks across three eras: the Baqt treaty era (641–1300); scholarly institution-building (1300–1500); and the sovereign Islamic sultanate era (1500–1800). The founding of the Sennar Sultanate (Black Sultanate) in 1504 AD through the alliance of Amara Dunqas (Funj) and Abdallah Jamma (Abdallab) unified central Sudan. Quranic khalwas, scholars like Ghulamallah and Al-Araki, and Sufi orders (Qadiriyya, Shadhiliyya, Sammaniyya, Khatmiyya) nurtured an inclusive Islamic civic culture centered in towns like Sennar, Arbaji, Qarri, Damer, and Suakin.',
        interactiveExample: {
          titleAr: 'تحليل سياسي: هندسة التحالف الفونجي-العبدلاوي وتأسيس سلطنة سنار 1504م',
          titleEn: 'Political Analysis: The Funj-Abdallab Coalition and Sennar Statehood',
          equation: 'قوة الفونج العسكرية الجنوبية (عمارة دنقس) + زعامة العبدلاب النيلية الشمالية (عبد الله جماع) = أول دولة سودانية إسلامية مركزية موحدة',
          steps: [
            { stepNumber: 1, textAr: 'تحالف الزعيمان على فتح سوبا عام 1504م وإنهاء بقايا مملكة علوة المسيحية.', textEn: 'The two leaders allied to capture Soba in 1504 AD, dissolving the remnants of Christian Alodia.' },
            { stepNumber: 2, textAr: 'تقاسم السلطة بنموذج فيدرالي ذكي: تولى الفونج السلطنة العامة في سنار، وتولى العبدلاب مشيخة قري وحكم النصف الشمالي.', textEn: 'Power was structured federatively: Funj held supreme sultanic rule at Sennar; Abdallab governed northern territories from Qarri.' },
            { stepNumber: 3, textAr: 'أقر التحالف الشريعة الإسلامية ورعى العلماء والخلاوى، مما منح الدولة استقراراً امتد لأكثر من 300 عام.', textEn: 'The state institutionalized Islamic jurisprudence and patronized Sufi scholars, enduring for over three centuries.' }
          ],
          takeawayAr: 'سلطنة سنار شكلت الهوية الوطنية الجامعة للسودان الحديث ومزجت بين الأعراق الإفريقية والعربية.',
          takeawayEn: 'Sennar forged the unified national identity of modern Sudan, harmonizing African and Arab cultures.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-4-2',
          questionAr: 'في أي عام تأسست سلطنة سنار (السلطنة الزرقاء) نتيجة تحالف الفونج والعبدلاب؟',
          questionEn: 'In which year was the Sultanate of Sennar established through the Funj-Abdallab alliance?',
          optionsAr: ['عام 1504م', 'عام 651م', 'عام 1300م', 'عام 1821م'],
          optionsEn: ['1504 AD', '651 AD', '1300 AD', '1821 AD'],
          correctIndex: 0,
          explanationAr: 'تأسست سلطنة سنار عام 1504م بعد تحالف عمارة دنقس وعبد الله جماع وفتح سوبا.',
          explanationEn: 'The Sennar Sultanate was formally inaugurated in 1504 AD following the capture of Soba.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-4-assess',
      titleAr: 'اختبار تقييم المحاضرة 4: الممالك المسيحية وسلطنة سنار والمجتمع المسلم',
      titleEn: 'Assessment Lecture 4: Christian Kingdoms, Sennar Sultanate, and Muslim Society',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h4-q1',
          textAr: 'ما هي معاهدة السلام الشهيرة التي عقدت عام 651م ونظمت العلاقات التجارية والسلمية بين المسلمين ومملكة المقرة النوبية؟',
          textEn: 'What famous 651 AD peace treaty governed commercial and diplomatic relations between Muslims and Makuria?',
          optionsAr: ['اتفاقية البقط', 'صلح الفرس', 'معاهدة سنار', 'وثيقة دنقلا'],
          optionsEn: ['Baqt Treaty', 'Treaty of Faras', 'Treaty of Sennar', 'Dongola Charter'],
          correctIndex: 0,
          conceptTestedAr: 'اتفاقية البقط وأثرها التاريخي',
          conceptTestedEn: 'Baqt treaty and historical consequences',
          explanationAr: 'اتفاقية البقط (651م) التي أبرمها عبد الله بن أبي السرح مع ملك المقرة ضمنت حرية التجارة والسلام لقرون طويلة.',
          explanationEn: 'The Baqt Treaty of 651 AD established commercial exchange and mutual non-aggression.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h4-q2',
          textAr: 'من هما القائدان التاريخيان اللذان قادا التحالف المشترك لتأسيس سلطنة سنار الإسلامية عام 1504م؟',
          textEn: 'Who were the two historic leaders that forged the coalition founding the Islamic Sennar Sultanate in 1504 AD?',
          optionsAr: ['عمارة دنقس (زعيم الفونج) وعبد الله جماع (زعيم العبدلاب)', 'الملك كالب والسلطان تهارقا', 'غلام الله بن عايد ومحمود العركي', 'علي دينار وإبراهيم قرض'],
          optionsEn: ['Amara Dunqas (Funj) and Abdallah Jamma (Abdallab)', 'King Kaleb and King Taharqa', 'Ghulamallah ibn Ayd and Mahmud al-Araki', 'Ali Dinar and Ibrahim Qarad'],
          correctIndex: 0,
          conceptTestedAr: 'أطراف تحالف تأسيس سلطنة سنار',
          conceptTestedEn: 'Founders of the Sennar coalition',
          explanationAr: 'تحالف عمارة دنقس زعيم الفونج مع الشيخ عبد الله جماع زعيم العبدلاب لإسقاط سوبا وإعلان سلطنة سنار.',
          explanationEn: 'Amara Dunqas and Abdallah Jamma jointly spearheaded the coalition that established the Sennar Sultanate.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h4-q3',
          textAr: 'ما المؤسسة التعليمية الشعبية التي كان لها الدور الأكبر في نشر القرآن الكريم وعلوم اللغة والفقه في بوادي وحواضر السودان؟',
          textEn: 'Which grassroots educational institution played the paramount role in spreading Quranic studies and Arabic in Sudan?',
          optionsAr: ['الخلاوى القرآنية', 'الأكاديميات العسكرية الملكية', 'المدارس التبشيرية الأجنبية', 'دور الحرفيين والصناع'],
          optionsEn: ['Quranic Khalwas', 'Royal military academies', 'Foreign missionary schools', 'Guild craft workshops'],
          correctIndex: 0,
          conceptTestedAr: 'دور الخلاوى في المجتمع المسلم بالسودان',
          conceptTestedEn: 'Role of Quranic khalwas in Sudanese Muslim society',
          explanationAr: 'كانت الخلاوى القرآنية هي الملاذ الأساسي لتعليم القرآن والقراءة والكتابة والفقه وتخريج أجيال العلماء والفقهاء.',
          explanationEn: 'Quranic khalwas were the primary communal engine of literacy, Quran memorization, and Islamic ethics.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h4-q4',
          textAr: 'أي من الطرق الصوفية التالية انتشرت في السودان وعُرفت بأثرها في التربية الروحية وتماسك النسيج المجتمعي؟',
          textEn: 'Which of the following Sufi orders flourished widely in Sudan, cementing communal cohesion and ethical spiritual training?',
          optionsAr: ['الطريقة القادرية والطريقة الشاذلية والسمانية والختمية', 'الطائفة البوذية', 'الرهبنة الفرنسيسكانية', 'الجماعات الزرادشتية'],
          optionsEn: ['Qadiriyya, Shadhiliyya, Sammaniyya, and Khatmiyya', 'Buddhist Sangha', 'Franciscan Monasticism', 'Zoroastrian priesthood'],
          correctIndex: 0,
          conceptTestedAr: 'الطرق الصوفية في السودان',
          conceptTestedEn: 'Sufi orders in Sudanese history',
          explanationAr: 'شكلت الطرق الصوفية كالقادرية والشاذلية والسمانية والختمية حجر الزاوية في نشر قيم الإخاء والتسامح والتكافل بالسودان.',
          explanationEn: 'Sufi orders like the Qadiriyya and Khatmiyya deeply shaped Sudanese religious tolerance and social harmony.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ── الوحدة الثانية: من تاريخ الإسلام ──
  // ════════════════════════════════════════════════════════════════════════════

  // المحاضرة 5: أحوال شبه الجزيرة وبناء الدولة النبوية
  {
    id: 'sd-g10-hist-5',
    order: 5,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثانية: من تاريخ الإسلام',
    unitTitleEn: 'Unit 2: From the History of Islam',
    lessonNumberAr: 'الدروس 1 و 2: أحوال شبه الجزيرة العربية وبناء الدولة النبوية',
    lessonNumberEn: 'Lessons 1 & 2: Pre-Islamic Arabia and Founding of the Prophetic State',
    titleAr: 'المحاضرة 5: أحوال شبه الجزيرة العربية وبناء الدولة النبوية بالمدينة المنورة',
    titleEn: 'Lecture 5: Pre-Islamic Arabian Peninsula and the Founding of the Prophetic Medina State',
    subtitleAr: 'الجغرافية وأقسام العرب، الهجرة النبوية 622م، وثيقة المدينة (47 مادة)، والرسائل الدبلوماسية للملوك والأمراء',
    subtitleEn: 'Geography and tribal genealogies, the 622 AD Hijrah, the 47-article Medina Charter, and imperial diplomatic letters.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في عام 622م، هاجر النبي ﷺ إلى المدينة المنورة ليضع أول وثيقة دستورية مكتوبة في التاريخ العالمي المعاصر: "وثيقة المدينة" المكونة من 47 مادة! أرست هذه الوثيقة مبدأ المواطنة المتساوية، والتعايش السلمي، وحرية الاعتقاد للجميع مهاجرين وأنصاراً ويهوداً. كيف تحولت شبه الجزيرة العربية من صراعات العصبية وأيام العرب إلى دولة ذات قيادة مركزية تخاطب قياصرة وأكاسرة العالم؟',
    warmupHookEn: 'In 622 AD, the Prophet established the Islamic State in Medina, introducing the revolutionary 47-clause Constitution of Medina. Discover how tribal fragmentation evolved into a centralized constitutional order addressing world emperors.',
    learningOutcomesAr: [
      'أن يحدد الطالب حدود وأقاليم شبه الجزيرة العربية وأقسام العرب (بائدة وباقية: عاربة ومستعربة).',
      'أن يحلل الأوضاع السياسية والاجتماعية والدينية للعرب قبل الإسلام.',
      'أن يشرح أسس بناء الدولة النبوية في المدينة (المسجد النبوي، المؤاخاة، ووثيقة المدينة).',
      'أن يستنتج أهمية وثيقة المدينة وموادها الـ 47 كأول دستور مدني يرسخ المواطنة.',
      'أن يتتبع السياسة الخارجية النبوية من السرايا والغزوات والرسائل إلى ملوك العالم (هرقل، كسرى، النجاشي، والمقوقس).'
    ],
    learningOutcomesEn: [
      'Locate Arabian geographical regions and explain genealogical divisions (extinct vs surviving: Qahtani and Adnani).',
      'Analyze pre-Islamic tribal sociopolitical dynamics and religious polytheism.',
      'Explain the institutional pillars of the Medina State: the Prophet’s Mosque, fraternal brotherhood, and the Medina Charter.',
      'Analyze the 47 articles of the Constitution of Medina establishing constitutional citizenship.',
      'Trace prophetic foreign diplomacy, major expeditions, and royal missives to Heraclius, Khosrow, Negus, and Muqawqis.'
    ],
    keyConceptsAr: [
      'شبه الجزيرة العربية: الأقاليم (تهامة، اليمن، الحجاز، حضرموت، الإحساء، ونجد)',
      'أقسام العرب: عرب بائدة (عاد وثمود) وعرب باقية (عاربة قحطانية ومستعربة عدنانية)',
      'الأحوال قبل الإسلام: النظام القبلي، العصبية، أيام العرب (الفجار والبسوس وداحس والغبراء)، وتعدد الديانات والأصنام',
      'الهجرة النبوية 622م: التحول الجذري من مرحلة الدعوة إلى تأسيس الدولة والقضاء والجيش',
      'وثيقة المدينة (47 مادة): أول دستور مدني تعاقدي يرسخ حقوق المواطنة والتكافل والدفاع المشترك وحرية الدين',
      'السياسة الخارجية: السرايا والغزوات (بدر، أحد، فتح مكة 8هـ) ورسائل النبي لملوك الروم والفرس والحبشة ومصر'
    ],
    keyConceptsEn: [
      'Arabian Peninsula: Regional geography and desert-urban demographics',
      'Genealogical divisions: Ba’ida (extinct) and Baqiya (Qahtani Ariba & Adnani Musta’riba)',
      'Pre-Islamic Jahiliyya: Tribal feuds (Ayyam al-Arab: Basus, Dahis), polytheism, and idolatry',
      'Hijrah 622 AD: Strategic migration transitioning from persecution to institutional statehood',
      'Medina Charter (47 clauses): First written constitutional framework guaranteeing civic pluralism',
      'Prophetic Foreign Policy: Strategic raiding, decisive battles (Badr, Conquest of Mecca), and imperial diplomacy'
    ],
    vocabulary: [
      { termAr: 'وثيقة المدينة (دستور المدينة)', termEn: 'Constitution of Medina', definitionAr: 'أول دستور مدني مكتوب في الإسلام (47 مادة) نظمت بموجبه حقوق وواجبات المهاجرين والأنصار واليهود وسكان المدينة على قاعدة المواطنة.' },
      { termAr: 'العرب البائدة', termEn: 'Extinct Arabs (Ba’ida)', definitionAr: 'القبائل العربية القديمة التي اندرست أخبارها وزالت حضاراتها قبل الإسلام مثل عاد وثمود وطسم وجديس.' },
      { termAr: 'أيام العرب', termEn: 'Ayyam al-Arab', definitionAr: 'الحروب والغزوات القبلية الشهيرة التي خاضتها قبائل الجاهلية ثأراً وعصبية مثل حربي البسوس وداحس والغبراء.' }
    ],
    summaryAr: 'ملخص الدرس: عاشت شبه الجزيرة العربية قبيل الإسلام في شتات قبلي وعصبيات دموية ووثنية متعددة. وبمجيء الإسلام والهجرة النبوية إلى المدينة عام 622م، تأسست أول دولة دستورية حديثة ترتكز على المسجد ووثيقة المدينة (47 مادة) لحماية المواطنة والتعايش، وانطلقت سياستها الخارجية للدفاع ونشر الرسالة بمخاطبة كبرى إمبراطوريات العصر.',
    summaryEn: 'Summary: Pre-Islamic Arabia suffered from clan factionalism, polytheism, and inter-tribal vendettas. With the 622 AD Hijrah, the Prophet founded the Islamic state in Medina, anchored by the egalitarian 47-clause Constitution of Medina, establishing civic governance and diplomatic engagement with global superpowers.',
    sections: [
      {
        titleAr: '1. جغرافية وأحوال شبه الجزيرة العربية قبل الإسلام',
        titleEn: '1. Geography and Societal Conditions of Pre-Islamic Arabia',
        contentAr: 'تقع شبه الجزيرة العربية في جنوب غرب قارة آسيا، ويحدها الخليج العربي وبحر عمان شرقاً، والمحيط الهندي وبحر العرب جنوباً، والبحر الأحمر غرباً، وبادية الشام شمالاً. وتضم أقاليم خصبة وحضرية كاليمن (العرب السعيدة) وحضرموت وعمان وتهامة والإحساء والطائف، إلى جانب الصحاري والبوادي الشمالية والوسطى في نجد. وقد انقسم سكانها إلى بدو رحل وحضر في القرى والمدن. وقُسم العرب تاريخياً إلى: 1) عرب بائدة: هلكت أممهم كعاد وثمود وجديس، 2) عرب باقية: تشمل العرب العاربة القحطانية من نسل يعرب بن قحطان وأشهر بطونهم حمير وكهلان ومنهم الأوس والخزرج، والعرب المستعربة العدنانية من ذرية إسماعيل بن إبراهيم عليهما السلام وأشهر قبائلها قريش وكنانة وربيعة ومضر. وساد النظام القبلي القائم على رابطة الدم والعصبية القبلية والتفاخر بالأنساب؛ مما أدى لاشتعال حروب طاحنة عُرفت بـ "أيام العرب" مثل حرب البسوس وداحس والغبراء وحرب الفجار. أما الحياة الدينية فكانت خليطاً من عبادة الأصنام والأوثان (كهبل واللات والعزى ومناة) وعبادة الكواكب والشمس والزرادشتية، مع بقاء أفراد على "الحنيفية" ملة إبراهيم عليه السلام، ووجود أقليات يهودية ومسيحية.',
        contentEn: 'Bounded by the Arabian Gulf, Indian Ocean, Red Sea, and Syrian desert, Arabia contained fertile urban oases (Yemen, Hadramaut, Taif) and pastoral nomadic interiors. Arabs divided into Ba’ida (extinct peoples like Ad and Thamud) and Baqiya: Qahtani Ariba (southern Yemenites including Aus and Khazraj) and Adnani Musta’riba (descendants of Ishmael including Quraysh). Society revolved around patriarchal kinship solidarity, giving rise to protracted tribal feuds (Ayyam al-Arab: Basus, Dahis). Religious life was dominated by idol polytheism (Hubal, Al-Lat, Al-Uzza), astral worship, and Hanif monotheism alongside Jewish and Christian communities.',
        interactiveExample: {
          titleAr: 'تحليل تاريخي 6: أثر البيئة الجغرافية في صياغة الشخصية العربية ونظامها القبلي',
          titleEn: 'Historical Analysis 6: Geographic Determinism in Arabian Tribal Structures',
          equation: 'قسوة الصحراء + شح موارد الماء والمراعي = تضامن قبلي عضوي (عصبية) + غارات أيام العرب لرد العدوان والبقاء',
          steps: [
            { stepNumber: 1, textAr: 'البيئة الصحراوية الشحيحة فرضت على البدوي الاعتماد الكامل على عشيرته وقبيلته للحماية وتوفير الأمان.', textEn: 'Desert scarcity compelled individuals to rely entirely on kinship clans for physical survival.' },
            { stepNumber: 2, textAr: 'ولدت العصبية القبلية شعوراً بالواجب الدفاعي المطلق (انصر أخاك ظالماً أو مظلوماً بالمعنى الجاهلي).', textEn: 'Clannish solidarity institutionalized retaliatory vendettas for community preservation.' },
            { stepNumber: 3, textAr: 'حينما جاء الإسلام، استثمر هذه الشجاعة والنجدة وحوّلها من العصبية القبلية الضيقة إلى رابطة العقيدة والأمة الإنسانية الواحدة.', textEn: 'Islam sublimated this tribal martial courage, redirecting it from tribalism to universal civic fraternity.' }
          ],
          takeawayAr: 'الإسلام لم يلغِ شيم العرب النبيلة كالكرم والفروسية بل هذبها وربطها بالعدل والرسالة الإنسانية.',
          takeawayEn: 'Islam refined Arabian martial valor and chivalry into a unified ethical mission.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-5-1',
          questionAr: 'إلى أي أقسام العرب تنتمي قبيلة قريش والقبائل النزارية من ولد إسماعيل عليه السلام؟',
          questionEn: 'To which division of the Arab people did Quraysh and Adnani tribes belong?',
          optionsAr: ['العرب المستعربة (العدنانية)', 'العرب العاربة (القحطانية)', 'العرب البائدة القديمة', 'عرب البحر المتوسط'],
          optionsEn: ['Musta’riba (Adnani Arabs)', 'Ariba (Qahtani Arabs)', 'Ba’ida (Extinct Arabs)', 'Mediterranean Arabs'],
          correctIndex: 0,
          explanationAr: 'تنتمي قريش إلى العرب المستعربة من ولد عدنان من ذرية نبي الله إسماعيل عليه السلام.',
          explanationEn: 'Quraysh descended from Adnan, representing the northern Musta’riba genealogical branch.'
        }
      },
      {
        titleAr: '2. بناء الدولة النبوية بالمدينة المنورة ووثيقة المدينة والسياسة الخارجية',
        titleEn: '2. Institution-Building in Medina, the Constitution, and Foreign Diplomacy',
        contentAr: 'مثلت الهجرة النبوية الشريفة عام 622م نقطة التحول الكبرى من مرحلة الدعوة إلى مرحلة تأسيس الدولة ذات السيادة؛ فبادر النبي ﷺ إلى إرساء أركان الدولة الجديدة: أولاً: بناء المسجد النبوي الشريف ليكون مقراً للعبادة، ومركزاً لإدارة شؤون الحكم، ومقراً للشورى واستقبال الوفود وإعداد الجيوش. ثانياً: المؤاخاة التاريخية بين المهاجرين والأنصار لحل الأزمة الاقتصادية وتذويب العصبيات القبلية. ثالثاً: إصدار "وثيقة المدينة"؛ وهي أول دستور مدني مكتوب ضم 47 مادة حددت حقوق وواجبات الأمة، ورسخت مبادئ المواطنة المتكافئة، وحرية العقيدة، وحرمة المدينة والدفاع المشترك ضد أي غزو خارجي، والتكافل المالي في الديات والأسارى. ورابعاً: رسم السياسة الخارجية والدفاعية؛ بإرسال السرايا لحماية القوافل، وخوض الغزوات الكبرى لتثبيت وجود الدولة (بدر 2هـ، أحد 3هـ، الخندق 5هـ، فتح مكة 8هـ، حنين وتبوك). وخامساً: الدبلوماسية الدولية بمكاتبة ملوك ورؤساء العالم ودعوتهم إلى الإسلام (مثل هرقل إمبراطور الروم، كسرى ملك فارس، النجاشي ملك الحبشة، والمقوقس حاكم مصر).',
        contentEn: 'The 622 AD Hijrah marked the genesis of sovereign Islamic political authority. The Prophet established four foundational pillars: 1) the Prophet’s Mosque as civic headquarters for governance and assembly; 2) institutional brotherhood (Mu’akhah) linking Emigrants and Helpers; 3) promulgation of the 47-article Constitution of Medina, codifying reciprocal citizenship, religious pluralism, and collective defense; and 4) foreign policy combining military expeditions (Badr, Conquest of Mecca) and sovereign diplomatic correspondence with Roman, Sasanian, Axumite, and Coptic heads of state.',
        interactiveExample: {
          titleAr: 'تحليل دستوري: المبادئ السياسية الحديثة في وثيقة المدينة (47 مادة)',
          titleEn: 'Constitutional Analysis: Modern Civic Principles in the Medina Charter',
          equation: 'مواطنة تعاقدية متساوية + حرية المعتقد الديني + دفاع مشترك عن الوطن = ميلاد الدولة المدنية الدستورية',
          steps: [
            { stepNumber: 1, textAr: 'أقرت الوثيقة أن سكان المدينة بكافة أطيافهم وعقائدهم يشكلون "أمة واحدة من دون الناس".', textEn: 'The Charter established that all residents of Medina constituted a unified political community (Ummah).' },
            { stepNumber: 2, textAr: 'ضمن الدستور لليهود حريتهم الدينية الكاملة: "لليهود دينهم وللمسلمين دينهم مواليهم وأنفسهم".', textEn: 'It guaranteed religious autonomy: "The Jews have their religion and the Muslims have their religion."' },
            { stepNumber: 3, textAr: 'ألزم الدستور كافة المكونات بالدفاع المشترك عن المدينة وتحمل نفقات الحرب في حال تعرضها للعدوان.', textEn: 'It mandated joint mutual defense and shared fiscal war expenditures against external attacks.' }
          ],
          takeawayAr: 'وثيقة المدينة سبقت الدساتير العالمية المعاصرة بقرون في إقرار المواطنة المتساوية وحقوق الإنسان.',
          takeawayEn: 'The Constitution of Medina anticipated modern constitutionalism in codifying pluralistic citizenship.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-5-2',
          questionAr: 'كم بلغ عدد مواد وثيقة المدينة التي أرست أول دستور مدني مكتوب في الدولة النبوية؟',
          questionEn: 'How many articles comprised the Constitution of Medina promulgated by the Prophet?',
          optionsAr: ['47 مادة', '60 مادة', '25 مادة', '100 مادة'],
          optionsEn: ['47 articles', '60 articles', '25 articles', '100 articles'],
          correctIndex: 0,
          explanationAr: 'تألفت وثيقة المدينة من 47 مادة دستورية شاملة نظمت شؤون الدولة والمواطنة والدفاع.',
          explanationEn: 'The historic Constitution of Medina comprised 47 codified articles.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-5-assess',
      titleAr: 'اختبار تقييم المحاضرة 5: أحوال شبه الجزيرة وبناء الدولة النبوية',
      titleEn: 'Assessment Lecture 5: Pre-Islamic Arabia and the Prophetic State',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h5-q1',
          textAr: 'ما هو الهدف السياسي والاجتماعي الأساسي الذي حققته وثيقة المدينة المكونة من 47 مادة؟',
          textEn: 'What was the primary sociopolitical objective accomplished by the 47-clause Medina Charter?',
          optionsAr: ['تنظيم شؤون المواطنة والتعايش السلمي والدفاع المشترك بين جميع سكان المدينة', 'إجبار جميع سكان المدينة من غير المسلمين على الهجرة', 'فرض ضرائب باهظة على تجار المدينة لصالح المهاجرين', 'إلغاء جميع القوانين العرفية دون بديل دستوري'],
          optionsEn: ['Codifying equal citizenship, peaceful coexistence, and collective defense for all Medina residents', 'Expelling non-Muslim populations', 'Imposing punitive levies', 'Abolishing customary laws without alternative'],
          correctIndex: 0,
          conceptTestedAr: 'أهداف وثيقة المدينة ودورها الدستوري',
          conceptTestedEn: 'Constitution of Medina purpose and impact',
          explanationAr: 'أرست وثيقة المدينة أول دستور تعاقدي ينظم حقوق وواجبات جميع سكان المدينة بمختلف أديانهم.',
          explanationEn: 'The Medina Charter established constitutional citizenship and peaceful pluralistic coexistence.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h5-q2',
          textAr: 'أي من الأقاليم التالية في شبه الجزيرة العربية عُرف تاريخياً بـ "العرب السعيدة" لخصوبة أراضيه ووفرة أمطاره؟',
          textEn: 'Which region of the Arabian Peninsula was historically known as "Arabia Felix" due to fertile soils and rain?',
          optionsAr: ['إقليم اليمن', 'صحراء نجد', 'بادية الشام', 'صحراء النفود'],
          optionsEn: ['Yemen', 'Nejd Desert', 'Syrian Steppe', 'Nafud Desert'],
          correctIndex: 0,
          conceptTestedAr: 'أقاليم شبه الجزيرة العربية وجغرافيتها',
          conceptTestedEn: 'Regional geography of Arabia Felix',
          explanationAr: 'لُقبت أرض اليمن بـ "العرب السعيدة" لخصوبتها وزراعتها وسدودها العظيمة ووفرة أمطارها الموسمية.',
          explanationEn: 'Yemen was termed Arabia Felix (Fertile Arabia) because of its agricultural wealth and monsoon precipitation.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h5-q3',
          textAr: 'إلى أي عام ميلادي تعود الهجرة النبوية الشريفة إلى المدينة المنورة والتي شكلت بداية التاريخ الهجري والدولة الإسلامية؟',
          textEn: 'To which Gregorian year does the historic Prophetic Hijrah to Medina correspond?',
          optionsAr: ['عام 622م', 'عام 610م', 'عام 630م', 'عام 632م'],
          optionsEn: ['622 AD', '610 AD', '630 AD', '632 AD'],
          correctIndex: 0,
          conceptTestedAr: 'تاريخ الهجرة النبوية الشريفة',
          conceptTestedEn: 'Date of the Prophetic Hijrah',
          explanationAr: 'وقعت الهجرة النبوية الشريفة عام 622م، ومنها بدأ التقويم الهجري الإسلامي وتأسيس الدولة.',
          explanationEn: 'The Hijrah occurred in 622 AD, marking the inaugurating date of the Islamic Hijri calendar.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h5-q4',
          textAr: 'من هو إمبراطور الروم البيزنطي الذي بعث إليه النبي ﷺ رسالة دبلوماسية يدعوه فيها إلى الإسلام؟',
          textEn: 'Which Byzantine Roman Emperor received a prophetic diplomatic missive inviting him to Islam?',
          optionsAr: ['الإمبراطور هرقل', 'الإمبراطور جستنيان', 'الإمبراطور قسطنطين', 'الملك كسرى الثاني'],
          optionsEn: ['Emperor Heraclius', 'Emperor Justinian', 'Emperor Constantine', 'King Khosrow II'],
          correctIndex: 0,
          conceptTestedAr: 'رسائل النبي الدبلوماسية لملوك العالم',
          conceptTestedEn: 'Prophetic missives to Byzantine Emperor Heraclius',
          explanationAr: 'أرسل النبي ﷺ الصحابي دحية الكلبي بكتابه إلى هرقل عظيم الروم يدعوه للإسلام.',
          explanationEn: 'The Prophet sent an official diplomatic letter carried by Dihyah al-Kalbi to Byzantine Emperor Heraclius.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // المحاضرة 6: عهد الخلفاء الراشدين
  {
    id: 'sd-g10-hist-6',
    order: 6,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثانية: من تاريخ الإسلام',
    unitTitleEn: 'Unit 2: From the History of Islam',
    lessonNumberAr: 'الدرس 3: نمو الدولة الإسلامية في عهد الخلفاء الراشدين',
    lessonNumberEn: 'Lesson 3: Expansion of the Islamic State under the Rashidun Caliphs',
    titleAr: 'المحاضرة 6: نمو الدولة الإسلامية في عهد الخلفاء الراشدين (11 - 40هـ)',
    titleEn: 'Lecture 6: Growth of the Islamic State under the Rightly-Guided Caliphs (11–40 AH)',
    subtitleAr: 'مبدأ الشورى، حروب الردة، إدارة عام الرمادة، تمصير المدن، الدواوين، والفتوحات وأسطول ذات الصواري',
    subtitleEn: 'Shura governance, Apostasy Wars, Ramada famine relief, garrison city foundation, diwan administration, and the naval Battle of the Masts.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما ضربت مجاعة "عام الرمادة" القاحلة شبه الجزيرة العربية عام 18هـ، أوقف الخليفة عمر بن الخطاب رضي الله عنه إقامة حد السرقة لوجود شبهة الاضطرار، وأعلن حالة الطوارئ العامة واستجلب قوافل الإغاثة من مصر والشام! كيف بنى الخلفاء الراشدون نظاماً إدارياً أسس مدن الكوفة والبصرة والفسطاط وجمع المصحف الشريف وأنشأ أول أسطول بحري إسلامي هزم الروم في معركة "ذات الصواري"؟',
    warmupHookEn: 'During the catastrophic famine of the Year of Ramada (18 AH), Caliph Umar suspended the theft penalty under extenuating distress and established unprecedented famine relief. Explore how the Rashidun codified state diwans, founded new cities, preserved the Quran, and secured maritime naval supremacy at Dhat al-Sawari.',
    learningOutcomesAr: [
      'أن يوضح الطالب كيفية اختيار الخلفاء الراشدين الأربعة وتطبيق مبدأ الشورى.',
      'أن يحلل التحديات الكبرى التي واجهت أبا بكر الصديق (حروب الردة ومسيلمة الكذاب وطليحة الأسدي).',
      'أن يشرح مظاهر عبقرية عمر بن الخطاب في إدارة الأزمات (عام الرمادة 18هـ) واستحداث الدواوين وتخطيط المدن.',
      'أن يبرز إنجازات عثمان بن عفان (جمع المصحف الشريف، وتأسيس الأسطول البحري، ومعركة ذات الصواري 31هـ).',
      'أن يتتبع مسار الفتوحات الإسلامية الكبرى في الشام والعراق وفارس (القادسية 15هـ) ومصر.'
    ],
    learningOutcomesEn: [
      'Explain the consultation (Shura) process in the election of the four Rightly-Guided Caliphs.',
      'Analyze Abu Bakr’s handling of the Apostasy Wars (Riddah) against false prophets.',
      'Evaluate Umar’s crisis governance during the 18 AH famine (Ramada), municipal planning, and diwan bureaucracy.',
      'Highlight Uthman’s legacy in standardizing the Quranic codex and building the navy culminating in Dhat al-Sawari (31 AH).',
      'Trace major territorial expansions across Syria, Iraq, Persia (Al-Qadisiyyah 15 AH), and Egypt.'
    ],
    keyConceptsAr: [
      'الخلافة الراشدة (11 - 40هـ): أبو بكر الصديق، عمر بن الخطاب، عثمان بن عفان، وعلي بن أبي طالب',
      'حروب الردة (11-12هـ): مواجهة مانعي الزكاة وأدعياء النبوة (مسيلمة الكذاب وطليحة الأسدي)',
      'إدارة الأزمات: عام الرمادة (18هـ)، تعطيل حد السرقة للشبهة، وقوافل الإغاثة عبر النيل والبحر',
      'التنظيم الإداري والمدن: استحداث ديوان الجند والخراج والبريد، وتمصير البصرة والكوفة والفسطاط',
      'المصحف العثماني: جمع وتوحيد المصحف الشريف على لسان قريش وتوزيعه على الأمصار',
      'الأسطول الإسلامي ومعركة ذات الصواري (31هـ): أول انتصار بحري تاريخي على الأسطول البيزنطي'
    ],
    keyConceptsEn: [
      'Rashidun Caliphate (11–40 AH / 632–661 AD): Shura consensus and institutional consolidation',
      'Apostasy Campaigns: Quelling insurrections and pretenders (Musaylimah, Tulayha)',
      'Economic Resilience: Year of Ramada (18 AH) famine welfare logistics and jurisprudence suspension',
      'Bureaucratic Innovation: Establishment of military and land-tax diwans, founding of Basra, Kufa, and Fustat',
      'Uthmanic Quranic Codex: Authoritative textual standardization dispatched to regional capitals',
      'Naval Power: Foundation of Islamic fleet and historic victory at Battle of the Masts (31 AH)'
    ],
    vocabulary: [
      { termAr: 'عام الرمادة (18هـ)', termEn: 'Year of Ramada', definitionAr: 'عام قحط ومجاعة شديدة أصاب شبه الجزيرة في عهد عمر بن الخطاب، أدار خلاله الأزمة بإسقاط حد السرقة للشبهة وتسيير قوافل الإغاثة من مصر والشام.' },
      { termAr: 'معركة ذات الصواري (31هـ)', termEn: 'Battle of the Masts', definitionAr: 'أول معركة بحرية كبرى خاضها الأسطول الإسلامي الفتي في عهد عثمان بن عفان وانتصر فيها انتصاراً حاسماً على الأسطول البيزنطي في البحر المتوسط.' },
      { termAr: 'الدواوين', termEn: 'The Diwans', definitionAr: 'سجلات ومصالح حكومية استحدثها الخليفة عمر بن الخطاب لتدوين أسماء الجند ورواتبهم وإدارة أموال الخراج والبريد وبيت المال.' }
    ],
    summaryAr: 'ملخص الدرس: رسخ عهد الخلفاء الراشدين أركان الدولة عبر الشورى وإدارة الأزمات الصعبة؛ فانتصر أبو بكر في حروب الردة، وبنى عمر المؤسسات الإدارية (الدواوين وتمصير المدن وإدارة عام الرمادة)، ووحّد عثمان كتابة المصحف الشريف وأنشأ الأسطول الإسلامي محققاً نصر ذات الصواري، مع اتساع الفتوحات في بلاد الشام وفارس ومصر.',
    summaryEn: 'Summary: The Rashidun era entrenched consultation and administrative excellence. Abu Bakr unified Arabia through the Riddah wars; Umar pioneered state welfare, civil registries (diwans), and garrison capitals; and Uthman standardized the Quran and launched the Muslim navy to victory at Dhat al-Sawari.',
    sections: [
      {
        titleAr: '1. خلافة أبي بكر وعمر: مواجهة الردة وإدارة الأزمات والمؤسسات الإدارية',
        titleEn: '1. Caliphates of Abu Bakr and Umar: Riddah Wars, Crisis Management, and Diwans',
        contentAr: 'عقب وفاة النبي ﷺ عام 11هـ، اختارت الأمة أبا بكر الصديق خليفة بالشورى في سقيفة بني ساعدة. وواجه أبو بكر أخطر أزمة هددت كيان الدولة وهي "حروب الردة"؛ حيث ارتدت بعض القبائل وامتنعت عن دفع الزكاة وظهر أدعياء النبوة مثل مسيلمة الكذاب وطليحة الأسدي وسجاح؛ فقاد أبو بكر 11 لواءً حربياً وأعاد الاستقرار والوحدة لشبه الجزيرة، ووجّه بجمع القرآن بعد استشهاد عدد كبير من الحَفَظَة في معركة اليمامة. ثم تولى عمر بن الخطاب (13 - 23هـ) وأحدث ثورة إدارية وتنظيمية شاملة: 1) إنشاء الدواوين: مثل ديوان الجند لتنظيم الرواتب والعطاء، وديوان الخراج، وديوان البريد. 2) تمصير المدن العسكرية: أسس البصرة والكوفة في العراق والفسطاط في مصر لتكون معسكرات مستقرة للجند ومراكز حضارية. 3) إدارة الأزمات الاقتصادية ببراعة في "عام الرمادة" (18هـ)؛ حيث أوقف حد السرقة لوجود شبهة المجاعة، وأعلن التكافل العام واستجلب الإغاثة من مصر عبر خليج أمير المؤمنين المائي.',
        contentEn: 'Following the Prophet’s passing in 11 AH, Abu Bakr was elected by Shura consensus. He crushed the Apostasy uprisings against pretenders like Musaylimah, preserving Islamic unity and ordering the initial collation of the Quran. Succeeding him, Umar (13–23 AH) instituted an administrative revolution: creating civil diwans (military payroll, land tax, postal couriers); founding garrison metropolises (Basra, Kufa, Fustat); and skillfully handling the catastrophic 18 AH Ramada drought by suspending theft penalties and mobilizing relief grain corridors from Egypt.',
        interactiveExample: {
          titleAr: 'تحليل فقهي وإداري: فقه الأزمات عند عمر بن الخطاب في عام الرمادة (18هـ)',
          titleEn: 'Legal & Managerial Analysis: Umar’s Famine Crisis Management in 18 AH',
          equation: 'مجاعة عامة + شبهة الاضطرار لحفظ النفس = إسقاط العقوبة الجنائية + تفعيل سلاسل الإمداد اللوجستية للدولة',
          steps: [
            { stepNumber: 1, textAr: 'علّق الخليفة عمر تنفيذ حد السرقة استناداً إلى قاعدة "ادرؤوا الحدود بالشبهات" لأن دافع السرقة كان الجوع والهلاك.', textEn: 'Umar suspended the legal penalty for theft because severe starvation created mitigating doubt.' },
            { stepNumber: 2, textAr: 'رفض عمر تناول السمن واللحم حتى يشبع سائر رعايا الدولة قائلاً: "كيف يعنيني أمر الرعية إذا لم يمسني ما مسهم؟".', textEn: 'Umar abstained from fine food, modeling transparent leadership empathy with suffering citizens.' },
            { stepNumber: 3, textAr: 'أمر بحفر قناة مائية بين النيل والبحر الأحمر (خليج أمير المؤمنين) لنقل سفن القمح من مصر لميناء الجار بالحجاز مباشرة.', textEn: 'He re-excavated a canal linking the Nile to the Red Sea, expediting famine wheat shipments.' }
          ],
          takeawayAr: 'إدارة عمر لعام الرمادة تدرس اليوم كأرقى نموذج لإدارة الكوارث وتحقيق العدالة الاجتماعية.',
          takeawayEn: 'Umar’s response to the Ramada crisis remains a classical masterclass in humanitarian emergency logistics.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-6-1',
          questionAr: 'ما الإجراء القضائي الاستثنائي الذي اتخذه الخليفة عمر بن الخطاب خلال مجاعة عام الرمادة عام 18هـ؟',
          questionEn: 'Which judicial exception did Caliph Umar enact during the Year of Ramada famine in 18 AH?',
          optionsAr: ['إيقاف تنفيذ حد السرقة لشبهة الاضطرار والجوع', 'مضاعفة العقوبات الجنائية على جميع المواطنين', 'منع توزيع الحبوب على أهالي البادية', 'إلغاء ديوان الجند بشكل نهائي'],
          optionsEn: ['Suspending the theft penalty due to extenuating starvation', 'Doubling criminal penalties', 'Halting grain distribution to bedouins', 'Abolishing the military diwan permanently'],
          correctIndex: 0,
          explanationAr: 'أوقف عمر بن الخطاب حد السرقة في عام الرمادة تطبيقاً لروح العدل لأن الجوع اضطر الناس للأكل للبقاء.',
          explanationEn: 'Umar suspended the theft penalty under extenuating hunger circumstances to uphold the spirit of justice.'
        }
      },
      {
        titleAr: '2. خلافة عثمان وعلي: جمع المصحف الشريف، أسطول ذات الصواري، والفتوحات الكبرى',
        titleEn: '2. Caliphates of Uthman and Ali: Quran Compilation, Fleet, and Major Expansions',
        contentAr: 'تولى عثمان بن عفان الخلافة (23 - 35هـ)، وحقق إنجازات حضارية خالدة: أولاً: توحيد وجمع المصحف الشريف؛ فعندما اتسعت رقعة الفتوحات واختلف الجنود في قراءات القرآن، شكّل عثمان لجنة برئاسة زيد بن ثابت نسخت المصحف بلغة قريش، وأرسل نسخاً منه إلى الأمصار الرئيسية وأمر بحرق ما عداها حفظاً لكتاب الله من التحريف والاختلاف. ثانياً: بناء الأسطول البحري الإسلامي؛ بمبادرة من والي الشام معاوية بن أبي سفيان وعبد الله بن أبي السرح في مصر، لحماية شواطئ المسلمين من غارات الروم. وبلغ الأسطول ذروة مجده في "معركة ذات الصواري" عام 31هـ قبالة سواحل ليديا في البحر المتوسط؛ حيث هزم المسلمون أسطول الإمبراطورية البيزنطية المكون من 500 سفينة، وربطوا سفنهم بسفن العدو وقاتلوا قتالاً مستميتاً أنهى السيادة الرومانية على البحر المتوسط. وتوسعت الفتوحات شرقاً في خراسان وسجستان وغرباً في إفريقية والنوبة (اتفاقية البقط 651م). ثم تولى علي بن أبي طالب الخلافة (35 - 40هـ) وسط فتنة كبرى أشعلها عبد الله بن سبأ، ونقل العاصمة إلى الكوفة وركز على ترسيخ العدل ومكافحة الانحراف حتى استشهاده.',
        contentEn: 'Uthman’s caliphate (23–35 AH) delivered monumental milestones: 1) standardizing the Quranic text under a commission led by Zayd ibn Thabit, sending identical codices across the empire to preserve unity; and 2) commissioning the first Muslim naval fleet under Mu’awiyah and Abdallah ibn Abi Sarh. In 31 AH, the young navy won a decisive triumph against 500 Byzantine warships at the Battle of the Masts (Dhat al-Sawari), shattering Byzantine maritime hegemony in the Mediterranean. Expansions swept across Persia, Khurasan, North Africa, and Nubia (651 Baqt). Ali (35–40 AH) moved the capital to Kufa, steering state justice amid civil sedition instigated by sectarian strife.',
        interactiveExample: {
          titleAr: 'تحليل عسكري وبحري: تكتيك ربط السفن في معركة ذات الصواري (31هـ)',
          titleEn: 'Naval Military Analysis: The Ship-Lashing Tactic at Dhat al-Sawari (31 AH)',
          equation: 'أسطول بيزنطي محترف (500 سفينة) مقابل أسطول إسلامي حديث (200 سفينة) = تكتيك ربط السفن بحبال لتحويل المعركة البحرية لقتال بري مباشر',
          steps: [
            { stepNumber: 1, textAr: 'أدرك المسلمون تفوق البيزنطيين في المناورات البحرية ورمي النيران الإغريقية من بعيد.', textEn: 'Muslims recognized Byzantine superiority in maritime maneuvers and long-range projectile hurling.' },
            { stepNumber: 2, textAr: 'أمر القائد عبد الله بن أبي السرح باقتراب السفن وربط صواري السفن وسلاسلها بسفن العدو لتصبح ساحة قتال ثابتة.', textEn: 'Commander Ibn Abi Sarh ordered ships lashed together with cables, transforming the deck into a static land arena.' },
            { stepNumber: 3, textAr: 'قاتل جنود المسلمون قتال المشاة الأبطال بالسيوف والخناجر، فانتصروا وغرق قسطنطين الثاني هارباً.', textEn: 'Muslim warriors engaged in hand-to-hand combat, routing the Byzantine navy and forcing Emperor Constans II to flee.' }
          ],
          takeawayAr: 'معركة ذات الصواري دشنت دخول المسلمين كقوة بحرية عظمى غيرت مجرى تاريخ البحر الأبيض المتوسط.',
          takeawayEn: 'Dhat al-Sawari marked Islam’s emergence as a dominant maritime superpower in Mediterranean waters.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-6-2',
          questionAr: 'ما اسم أول معركة بحرية كبرى انتصر فيها الأسطول الإسلامي على أسطول الروم البيزنطي عام 31هـ في عهد عثمان بن عفان؟',
          questionEn: 'What was the first major naval battle in which the Muslim fleet defeated Byzantine ships in 31 AH?',
          optionsAr: ['معركة ذات الصواري', 'معركة اليرموك', 'معركة القادسية', 'معركة عين جالوت'],
          optionsEn: ['Battle of the Masts (Dhat al-Sawari)', 'Battle of Yarmouk', 'Battle of Qadisiyyah', 'Battle of Ain Jalut'],
          correctIndex: 0,
          explanationAr: 'معركة ذات الصواري (31هـ) كانت أول ملحمة بحرية إسلامية في البحر الأبيض المتوسط ضد الروم.',
          explanationEn: 'The Battle of the Masts (31 AH) was the premier naval engagement establishing Muslim maritime authority.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-6-assess',
      titleAr: 'اختبار تقييم المحاضرة 6: نمو الدولة في عهد الخلفاء الراشدين',
      titleEn: 'Assessment Lecture 6: The Rashidun Caliphate',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h6-q1',
          textAr: 'من هو الصحابي الجليل الذي ترأس لجنة جمع وتوحيد المصحف الشريف في عهد الخليفة عثمان بن عفان رضي الله عنه؟',
          textEn: 'Which esteemed companion chaired the committee charged with standardizing the Quran under Caliph Uthman?',
          optionsAr: ['زيد بن ثابت', 'علي بن أبي طالب', 'عبد الله بن مسعود', 'خالد بن الوليد'],
          optionsEn: ['Zayd ibn Thabit', 'Ali ibn Abi Talib', 'Abdallah ibn Mas’ud', 'Khalid ibn al-Walid'],
          correctIndex: 0,
          conceptTestedAr: 'جمع المصحف الشريف ولجنة زيد بن ثابت',
          conceptTestedEn: 'Quran standardization and Zayd ibn Thabit',
          explanationAr: 'ترأس الصحابي وزيد بن ثابت كاتب الوحي لجنة جمع المصحف الشريف العثماني على لسان قريش.',
          explanationEn: 'Zayd ibn Thabit was designated by Uthman to head the Quranic standardization committee.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h6-q2',
          textAr: 'أي من المدن الإسلامية التالية قام الخليفة عمر بن الخطاب بتمصيرها وتأسيسها كقواعد عسكرية ومدنية في العراق ومصر؟',
          textEn: 'Which of the following garrison cities were founded under Caliph Umar in Iraq and Egypt?',
          optionsAr: ['البصرة والكوفة والفسطاط', 'دمشق وحلب وبيروت', 'بغداد وسامراء والرباط', 'القيروان وفاس والمهدية'],
          optionsEn: ['Basra, Kufa, and Fustat', 'Damascus, Aleppo, and Beirut', 'Baghdad, Samarra, and Rabat', 'Kairouan, Fez, and Mahdia'],
          correctIndex: 0,
          conceptTestedAr: 'تمصير المدن في عهد عمر بن الخطاب',
          conceptTestedEn: 'Founding of garrison cities under Umar',
          explanationAr: 'أسس المسلمون في عهد عمر مدينتي البصرة والكوفة بالعراق والفسطاط بمصر لتكون معسكرات ومراكز حضارية.',
          explanationEn: 'Basra, Kufa, and Fustat were established as strategic metropolitan centers under Umar.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h6-q3',
          textAr: 'ما التحدي العسكري والداخلي الأخطر الذي تصدى له الخليفة أبو بكر الصديق فور توليه الخلافة؟',
          textEn: 'What was the most perilous military and internal insurrection overcome by Abu Bakr upon assuming office?',
          optionsAr: ['حروب الردة ومواجهة أدعياء النبوة ومانعي الزكاة', 'غزو المغول والتتار لبغداد', 'الحملات الصليبية على بيت المقدس', 'تمرد المماليك البحرية في مصر'],
          optionsEn: ['Apostasy wars against pretenders and zakat deniers', 'Mongol invasions of Baghdad', 'Crusades against Jerusalem', 'Bahri Mamluk uprisings'],
          correctIndex: 0,
          conceptTestedAr: 'حروب الردة ومواقف أبي بكر الحازمة',
          conceptTestedEn: 'Riddah wars and Abu Bakr’s leadership',
          explanationAr: 'تصدى أبو بكر بحزم لحروب الردة ومانعي الزكاة، مما أنقذ وحدة الدولة الإسلامية من التفكك.',
          explanationEn: 'Abu Bakr resolutely resolved the Riddah crises, preserving the fledgling Islamic commonwealth.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h6-q4',
          textAr: 'في أي معركة تاريخية كبرى عام 15هـ سحق المسلمون جيوش الإمبراطورية الفارسية الساسانية في العراق؟',
          textEn: 'In which landmark battle in 15 AH did Muslim armies shatter the Sasanian Persian empire in Iraq?',
          optionsAr: ['معركة القادسية بقيادة سعد بن أبي وقاص', 'معركة ذات الصواري', 'معركة حطين', 'معركة ملاذكرد'],
          optionsEn: ['Battle of Al-Qadisiyyah led by Sa’d ibn Abi Waqqas', 'Battle of the Masts', 'Battle of Hattin', 'Battle of Manzikert'],
          correctIndex: 0,
          conceptTestedAr: 'معركة القادسية وفتح بلاد فارس',
          conceptTestedEn: 'Battle of Qadisiyyah and Persian conquest',
          explanationAr: 'في معركة القادسية (15هـ) انتصر جيش المسلمين بقيادة سعد بن أبي وقاص على القائد الفارسي رستم وفتح العراق.',
          explanationEn: 'At Al-Qadisiyyah (15 AH), Sa’d ibn Abi Waqqas secured a decisive triumph over the Sasanian army.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // المحاضرة 7: تطور الدولة في العهدين الأموي والعباسي
  {
    id: 'sd-g10-hist-7',
    order: 7,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثانية: من تاريخ الإسلام',
    unitTitleEn: 'Unit 2: From the History of Islam',
    lessonNumberAr: 'الدروس 4 و 5: تطور الدولة الإسلامية في العهدين الأموي والعباسي',
    lessonNumberEn: 'Lessons 4 & 5: Islamic State Evolution in Umayyad and Abbasid Eras',
    titleAr: 'المحاضرة 7: تطور الدولة الإسلامية في العصرين الأموي والعباسي (41 - 656هـ)',
    titleEn: 'Lecture 7: Evolution of the Islamic State under the Umayyads and Abbasids (41–656 AH)',
    subtitleAr: 'تعريب الدواوين، سك الدينار العربي، بيت الحكمة وحركة الترجمة ببغداد، النظم الإدارية واستحداث الوزارة، وأسباب السقوط',
    subtitleEn: 'Bureau Arabization, Islamic dinar minting, Baghdad’s House of Wisdom, vizierate governance, and causes of decline.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في عهد عبد الملك بن مروان، صدر قرار تاريخي هز إمبراطوريات العالم: تحويل لغة كافة الدواوين والمصالح الحكومية من الفارسية واليونانية والقبطية إلى اللغة العربية، وسك أول دينار ذهبي إسلامي مستقل! وبعدها بقرن واحد في بغداد، أسس العباسيون "بيت الحكمة" حيث كان المأمون يزن المخطوطة المترجمة من اليونانية بوزنها ذهباً خالصاً! كيف تطورت نظم الحكم والوزارة والدواوين في هاتين الإمبراطوريتين العظيمتين؟',
    warmupHookEn: 'Abd al-Malik ibn Marwan issued a revolutionary decree transforming state registers across the Middle East into Arabic and minting the pure gold Islamic dinar. A century later in Abbasid Baghdad, Caliph Al-Ma’mun weighed translated Greek manuscripts in pure gold at the House of Wisdom. Discover how Umayyad centralization and Abbasid intellectual brilliance shaped modern world civilization.',
    learningOutcomesAr: [
      'أن يوضح الطالب ظروف تأسيس الدولة الأموية (41هـ / عام الجماعة) على يد معاوية بن أبي سفيان وعاصمتها دمشق.',
      'أن يحلل الإنجازات الإدارية الأموية: تعريب الدواوين، سك العملة، التقسيم إلى خمس ولايات، وأبرز الخلفاء (عبد الملك، الوليد، وعمر بن عبد العزيز).',
      'أن يشرح قيام الدولة العباسية (132هـ) بقيادة أبي العباس السفاح وأبي جعفر المنصور وتأسيس بغداد.',
      'أن يستنتج ملامح العصر العباسي الذهبي (هارون الرشيد والمأمون)، بيت الحكمة، وحركة الترجمة والتدوين العلمي.',
      'أن يعدد النظم الإدارية والسياسية العباسية (استحداث منصب الوزارة تفويضاً وتنفيذاً، ديوان المظالم، والجيش).',
      'أن يفسر أسباب ضعف وسقوط الدولتين الأموية (132هـ) والعباسية (656هـ على يد المغول).'
    ],
    learningOutcomesEn: [
      'Explain the founding of the Umayyad Caliphate in 41 AH (Year of Unity) by Mu’awiyah in Damascus.',
      'Analyze Umayyad administrative reforms: Arabization of diwans, coinage minting, 5-province division, and key caliphs.',
      'Examine the Abbasid rise in 132 AH under As-Saffah and Al-Mansur and the construction of Baghdad.',
      'Evaluate the Abbasid Golden Age under Harun al-Rashid and Al-Ma’mun, Bayt al-Hikma, and scientific codification.',
      'Detail Abbasid administrative systems: the vizierate (executive vs delegation), the Board of Grievances, and military reform.',
      'Assess factors causing the fall of the Umayyads (132 AH) and the Abbasid collapse to the Mongols in 656 AH (1258 AD).'
    ],
    keyConceptsAr: [
      'الدولة الأموية (41 - 132هـ / 661 - 750م): عاصمتها دمشق، 14 خليفة (السفياني والمرواني)، ونظام الوراثة',
      'الإصلاحات الأموية الكبرى: تعريب الدواوين، سك الدينار الإسلامي الخالص (عبد الملك بن مروان)، وتقسيم الدولة لـ 5 ولايات',
      'الخلفاء الأمويون العظام: معاوية، عبد الملك، الوليد بن عبد الملك (العمارة والجامع الأموي)، وعمر بن عبد العزيز (خامس الخلفاء الراشدين والعدل)',
      'الدولة العباسية (132 - 656هـ / 750 - 1258م): الدعوة العباسية في خراسان، أبو جعفر المنصور وبناء بغداد (دار السلام 145هـ)',
      'العصر الذهبي العباسي: هارون الرشيد، المأمون، "بيت الحكمة"، حركة الترجمة الكبرى والتدوين في الفقه والطب والفلك والرياضيات',
      'النظم الإدارية العباسية: الوزارة (وزارة تفويض ووزارة تنفيذ)، الحجابة، ديوان المظالم، البريد، وديوان الصوافي',
      'سقوط بغداد (656هـ / 1258م): ضعف الخلفاء، استبداد القادة الأتراك، واجتياح هولاكو قائد المغول لبغداد'
    ],
    keyConceptsEn: [
      'Umayyad Caliphate (41–132 AH): Damascus capital, 14 caliphs, dynastic succession',
      'Major Umayyad Reforms: Arabization of administration, epigraphic gold dinars, 5 viceroyalties',
      'Distinguished Umayyad rulers: Mu’awiyah, Abd al-Malik, Al-Walid (Umayyad Mosque), and Umar ibn Abd al-Aziz',
      'Abbasid Caliphate (132–656 AH): Revolution in Khurasan, Al-Mansur’s founding of Baghdad (Round City, 145 AH)',
      'Abbasid Golden Age: Harun al-Rashid, Al-Ma’mun, Bayt al-Hikma (House of Wisdom), and scientific translation movements',
      'Abbasid Institutions: Vizierate (delegated vs executive authority), Grievance tribunals, and specialized registries',
      'Fall of Baghdad (656 AH / 1258 AD): Political decentralization, Praetorian Turkish dominance, and Mongol sack under Hulagu'
    ],
    vocabulary: [
      { termAr: 'تعريب الدواوين', termEn: 'Arabization of the Diwans', definitionAr: 'مرسوم أصدره الخليفة عبد الملك بن مروان بتحويل لغة السجلات المالية والإدارية من الفارسية والرومية والقبطية إلى اللغة العربية وتوحيد النظم المالية.' },
      { termAr: 'بيت الحكمة', termEn: 'House of Wisdom (Bayt al-Hikma)', definitionAr: 'أعظم مجمع علمي وأكاديمي ومكتبة للترجمة والبحث في التاريخ الإسلامي أسسه هارون الرشيد وازدهر في عهد المأمون ببغداد.' },
      { termAr: 'وزارة التفويض', termEn: 'Delegated Vizierate (Wizarat al-Tafwid)', definitionAr: 'أعلى منصب تنفيذي في الدولة العباسية يفوض فيه الخليفة الوزير بتدبير شؤون الحكم والجيش والمال برأيه واجتهاده الخاص.' },
      { termAr: 'ديوان المظالم', termEn: 'Board of Grievances (Diwan al-Mazalim)', definitionAr: 'محكمة قضائية عليا يترأسها الخليفة أو نائبه للنظر في الشكاوى المرفوعة ضد كبار موظفي الدولة والولاة ورجال الجيش.' }
    ],
    summaryAr: 'ملخص الدرس: قادت الدولة الأموية (41-132هـ) من دمشق حركة تعريب الدواوين وسك العملة وتوسيع رقعة الفتوحات من حدود الصين للأندلس. وتلتها الدولة العباسية (132-656هـ) من بغداد محققة العصر الذهبي للعلوم والترجمة في بيت الحكمة واستحداث النظم الإدارية كالوزارة وديوان المظالم، حتى سقطت بغداد أمام الغزو المغولي عام 656هـ.',
    summaryEn: 'Summary: From Damascus, the Umayyads centralized empire administration through bureau Arabization, coinage minting, and vast territorial growth. Succeeding them in Baghdad, the Abbasids fostered an intellectual Golden Age through the House of Wisdom and advanced vizierate governance before collapsing to the Mongols in 1258 AD.',
    sections: [
      {
        titleAr: '1. تطور الدولة في العهد الأموي: تعريب الدواوين، سك العملة، ونظام الحكم',
        titleEn: '1. Umayyad Caliphate: Bureau Arabization, Coinage, and State Administration',
        contentAr: 'تأسست الدولة الأموية عام 41هـ (المعروف بعام الجماعة) حين تنازل الحسن بن علي عن الخلافة لمعاوية بن أبي سفيان حقناً لدماء المسلمين، واتخذ معاوية من دمشق عاصمة للدولة. وحكم الدولة 14 خليفة من فرعين: الفرع السفياني (معاوية وابنه يزيد ومعاوية الثاني)، والفرع المرواني الذي بدأ بـ مروان بن الحكم وعبد الملك بن مروان وأبنائه. وطوّر الأمويون نظام الحكم بالتحول من الشورى إلى النظام الوراثي، واستحدثوا ديوان الخاتم لمنع التزوير وديوان البريد لنقل الأخبار بسرعة مذهلة. ويُعد الخليفة عبد الملك بن مروان (65 - 86هـ) المؤسس الفعلي الثاني للدولة؛ حيث اتخذ قراره الاستراتيجي بـ "تعريب الدواوين" بنقل لغة الحسابات والسجلات في العراق من الفارسية، وفي الشام من الرومية، وفي مصر من القبطية إلى اللغة العربية؛ مما جعل العربية لغة الإدارة والعلم الرسمية. كما سك أول دينار ذهبي إسلامي خالص منقوش بالشهادتين وآيات القرآن الكريم بدلاً من العملات الرومية والفارسية. وقسم الأمويون الدولة إلى خمس ولايات كبرى عين عليها ولاة أقوياء (كالحجاز واليمن، والعراق والمشرق، والجزيرة الفراتية، ومصر، والمغرب والأندلس). وبلغت الدولة أوج مجدها في عهد الوليد بن عبد الملك بتشييد المسجد الأموي بدمشق وتوسيع المسجد النبوي، وعهد عمر بن عبد العزيز الذي جسد قمة العدالة والنزاهة ورد المظالم.',
        contentEn: 'The Umayyad Caliphate was founded in 41 AH (Year of Unity) when Al-Hasan abdicated to Mu’awiyah, who relocated the capital to Damascus. Fourteen caliphs ruled across the Sufyanid and Marwanid branches. Centralizing governance into hereditary dynastic rule, they created the Signet and Postal couriers. Abd al-Malik ibn Marwan (65–86 AH) achieved historic restructuring by Arabizing financial and administrative diwans—displacing Greek in Syria, Persian in Iraq, and Coptic in Egypt. He struck the first independent gold dinar inscribed with Quranic monotheism and divided the empire into five large viceroyalties. Peak cultural achievements flourished under Al-Walid (Umayyad Mosque) and Umar ibn Abd al-Aziz’s renowned equity and justice.',
        interactiveExample: {
          titleAr: 'تحليل اقتصادي وسياسي: أثر تعريب الدواوين وسك الدينار الإسلامي عام 77هـ',
          titleEn: 'Political & Economic Analysis: Diwan Arabization and Monetary Sovereignty (77 AH)',
          equation: 'لغة إدارة عربية موحدة + عملة ذهبية مستقلة = استقلال سياسي كامل وإنهاء التبعية الاقتصادية لبيزنطة',
          steps: [
            { stepNumber: 1, textAr: 'قبل التعريب: كان موظفو السجلات من الروم والفرس يسيطرون على أسرار الدولة وأموالها بلغاتهم الأجنبية.', textEn: 'Prior to reform: Foreign scribes maintained fiscal records in Greek and Persian, creating administrative dependency.' },
            { stepNumber: 2, textAr: 'بعد التعريب: تم تدريب وتعيين كتاب عرب ومسلمين، مما وحّد المصطلحات المالية والإدارية في أرجاء الإمبراطورية.', textEn: 'Post-reform: Arab and Muslim civil servants were trained, unifying legal and accounting nomenclature.' },
            { stepNumber: 3, textAr: 'سك الدينار الذهبي: ألغى التعامل بالدينار البيزنطي وصور الأباطرة، مما حقق السيادة النقدية الكاملة وحمى الخزانة من التلاعب.', textEn: 'Coinage reform: Replacing Byzantine coins with epigraphic gold dinars secured monetary autonomy.' }
          ],
          takeawayAr: 'تعريب الدواوين لم يكن لغوياً فحسب بل كان بناءً لمؤسسات الدولة القومية والسيادية المستقلة.',
          takeawayEn: 'Arabization represented sovereign state-building and complete economic independence from foreign powers.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-7-1',
          questionAr: 'من هو الخليفة الأموي الذي اتخذ القرار التاريخي بتعريب الدواوين وسك أول عملة إسلامية خالصة؟',
          questionEn: 'Which Umayyad caliph made the historic decision to Arabize diwans and mint the first pure Islamic currency?',
          optionsAr: ['عبد الملك بن مروان', 'معاوية بن أبي سفيان', 'عمر بن عبد العزيز', 'هشام بن عبد الملك'],
          optionsEn: ['Abd al-Malik ibn Marwan', 'Mu’awiyah ibn Abi Sufyan', 'Umar ibn Abd al-Aziz', 'Hisham ibn Abd al-Malik'],
          correctIndex: 0,
          explanationAr: 'أصدر الخليفة عبد الملك بن مروان قراره بتعريب الدواوين وسك الدينار الذهبي الإسلامي عام 77هـ.',
          explanationEn: 'Abd al-Malik ibn Marwan unified the state by Arabizing the administration and minting gold dinars.'
        }
      },
      {
        titleAr: '2. تطور الدولة العباسية: بغداد، بيت الحكمة، النظم الإدارية، وسقوط الخلافة',
        titleEn: '2. The Abbasid Caliphate: Baghdad, House of Wisdom, Administrative Systems, and Fall',
        contentAr: 'قامت الدولة العباسية عام 132هـ (750م) إثر نجاح الثورة العباسية في خراسان بقيادة أبي مسلم الخراساني وإسقاط الأمويين في معركة الزاب. وتولى أول خلفائها أبو العباس السفاح ثم شقيقه أبو جعفر المنصور (المؤسس الحقيقي للدولة العباسية) الذي بنى مدينة "بغداد" (المدينة المدورة / دار السلام) عام 145هـ لتكون أعظم حاضرة علمية وسياسية في العالم. وشهد العصر العباسي الأول (الذهبي) قمة الازدهار الحضاري في عهدي هارون الرشيد والمأمون؛ حيث تأسس "بيت الحكمة" في بغداد، وتدفقت حركة الترجمة ونقل العلوم الطبية والفلكية والرياضية والفلسفية من اليونانية والفارسية والهندية والسريانية، ونشطت حركة التدوين في علوم الحديث والفقه واللغة والتاريخ. كما شهد العصر العباسي تطوراً غير مسبوق في النظم الإدارية: 1) استحداث منصب الوزارة: وقسمت إلى "وزارة تفويض" (يملك فيها الوزير صلاحيات مطلقة كتدبير الجيوش والأموال دون مراجعة مسبقة للخليفة)، و"وزارة تنفيذ" (ينفذ فيها الوزير أوامر الخليفة ورأيه فقط). 2) استحداث وظيفة الحجابة لتنظيم الدخول على الخليفة. 3) ديوان المظالم للفصل في تعديات الأمراء والولاة. 4) تطور الجيش بتقسيمه إلى فرسان ومشاة ورماة سلاح النفط. غير أن الدولة دخلت في مرحلة الضعف والتفكك في عصرها الثاني بفعل سيطرة القادة العسكريين الأتراك والبويهيين، وانفصال الدويلات المستقلة، حتى قاد هولاكو خان جحافل المغول عام 656هـ (1258م) فاجتاح بغداد وأحرق مكتباتها وقتل آخر الخلفاء المستعصم بالله، مسدلاً الستار على الخلافة العباسية في المشرق.',
        contentEn: 'The Abbasid Caliphate arose in 132 AH (750 AD) following the overthrow of the Umayyads at the Battle of the Zab. Caliph Abu Ja’far al-Mansur engineered the imperial capital, Baghdad (the Round City / City of Peace) in 145 AH. The Golden Age reached its apex under Harun al-Rashid and Al-Ma’mun through Bayt al-Hikma, initiating a massive translation movement of Greek, Persian, and Sanskrit scientific texts alongside groundbreaking original codification in mathematics, optics, medicine, and Islamic jurisprudence. Administrative structures formalized the Vizierate (delegated authority vs executive implementation), the Office of Chamberlain, and the Supreme Board of Grievances. The caliphate declined under praetorian Turkish military dominance and regional splinter dynasties until 656 AH (1258 AD), when Mongol forces under Hulagu sacked Baghdad and executed Caliph Al-Musta’sim.',
        interactiveExample: {
          titleAr: 'تحليل إداري مقارن: الفرق بين وزارة التفويض ووزارة التنفيذ في النظم العباسية',
          titleEn: 'Comparative Administrative Analysis: Delegated vs Executive Vizierate',
          equation: 'وزارة التفويض = تفويض كلي للسلطة (حكم + جيش + مال) | وزارة التنفيذ = وسيط تنفيذي يتبع أوامر الخليفة حرفياً',
          steps: [
            { stepNumber: 1, textAr: 'وزير التفويض: يعينه الخليفة ليحكم باجتهاده الخاص ويقود الجيوش ويعين الولاة دون استئذان مسبق.', textEn: 'Delegated Vizier (Tafwid): Granted sovereign discretionary powers to direct armies, finance, and governors.' },
            { stepNumber: 2, textAr: 'وزير التنفيذ: لا يستبد برأي، بل يقتصر عمله على إبلاغ أوامر الخليفة ومتابعة تنفيذها في الدواوين.', textEn: 'Executive Vizier (Tanfidh): Acted strictly as a liaison to carry out direct imperial mandates.' },
            { stepNumber: 3, textAr: 'الأثر الدستوري: أدى تضخم نفوذ وزراء التفويض (كالبرامكة وبني سهل) إلى منافسة سلطة الخلفاء أحياناً.', textEn: 'Constitutional impact: Overly powerful delegated viziers (such as the Barmakids) sometimes overshadowed the throne.' }
          ],
          takeawayAr: 'ابتكر العباسيون أرقى نظم البيروقراطية المؤسسية وفصل الاختصاصات الإدارية في التاريخ الوسيط.',
          takeawayEn: 'Abbasid institutional theory laid early foundations for structured cabinet ministries and administrative law.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-7-2',
          questionAr: 'ما هو المجمع العلمي والمكتبي الشهير الذي أسسه هارون الرشيد وازدهر في عهد المأمون ببغداد لترجمة العلوم؟',
          questionEn: 'What famous academic and translation academy in Baghdad was founded by Harun al-Rashid and expanded by Al-Ma’mun?',
          optionsAr: ['بيت الحكمة', 'دار الحكمة بالقاهرة', 'جامعة الأزهر', 'المدرسة المستنصرية'],
          optionsEn: ['House of Wisdom (Bayt al-Hikma)', 'Dar al-Hikma in Cairo', 'Al-Azhar University', 'Mustansiriya Madrasa'],
          correctIndex: 0,
          explanationAr: 'بيت الحكمة ببغداد كان الصرح العلمي الأول الذي ترجم أمهات الكتب ونقل المعرفة الإنسانية للعربية.',
          explanationEn: 'Bayt al-Hikma (House of Wisdom) was the premier intellectual hub for translating world science into Arabic.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-7-assess',
      titleAr: 'اختبار تقييم المحاضرة 7: الدولة الإسلامية في العصرين الأموي والعباسي',
      titleEn: 'Assessment Lecture 7: Umayyad and Abbasid Caliphates',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h7-q1',
          textAr: 'ما المدينة التاريخية التي بناها الخليفة العباسي أبو جعفر المنصور عام 145هـ لتكون عاصمة الخلافة العباسية؟',
          textEn: 'Which historic city was built by Abbasid Caliph Abu Ja’far al-Mansur in 145 AH as the imperial capital?',
          optionsAr: ['مدينة بغداد (دار السلام)', 'مدينة سامراء', 'مدينة الفسطاط', 'مدينة دمشق'],
          optionsEn: ['Baghdad (City of Peace)', 'Samarra', 'Fustat', 'Damascus'],
          correctIndex: 0,
          conceptTestedAr: 'تأسيس بغداد على يد المنصور',
          conceptTestedEn: 'Founding of Baghdad by Al-Mansur',
          explanationAr: 'شيد أبو جعفر المنصور مدينة بغداد المدورة على نهر دجلة عام 145هـ لتكون عاصمة الدولة العباسية.',
          explanationEn: 'Abu Ja’far al-Mansur founded the Round City of Baghdad on the Tigris River in 145 AH.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h7-q2',
          textAr: 'ما الفرق الجوهري بين وزارة التفويض ووزارة التنفيذ في النظم الإدارية للدولة العباسية؟',
          textEn: 'What was the fundamental distinction between delegated vizierate (Tafwid) and executive vizierate (Tanfidh)?',
          optionsAr: ['وزير التفويض يحكم باجتهاده وتدبيره المطلق، بينما وزير التنفيذ يقتصر على تنفيذ أوامر الخليفة', 'وزير التفويض يشرف على القضاء فقط، بينما وزير التنفيذ يقود الجيوش', 'وزير التنفيذ له صلاحية عزل الخليفة، ووزير التفويض يجمع الضرائب', 'كلاهما اسمان متطابقان لوظيفة واحدة بلا أي فروق'],
          optionsEn: ['Delegated vizier exercises autonomous governance, whereas executive vizier strictly implements caliphal decrees', 'Delegated vizier only judges', 'Executive can depose the caliph', 'They are identical with zero differences'],
          correctIndex: 0,
          conceptTestedAr: 'أنواع الوزارة في العصر العباسي',
          conceptTestedEn: 'Types of Vizierate in Abbasid governance',
          explanationAr: 'في وزارة التفويض يفوض الخليفة الوزير بتصريف شؤون الدولة باجتهاده، أما في التنفيذ فهو مجرد وسيط ينفذ الأوامر.',
          explanationEn: 'Delegated viziers held full operational initiative; executive viziers merely executed caliphal instructions.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h7-q3',
          textAr: 'في أي عام ميلادي سقطت الخلافة العباسية في بغداد بعد اجتياح جحافل المغول بقيادة هولاكو؟',
          textEn: 'In which Gregorian year did the Abbasid Caliphate in Baghdad collapse following the Mongol sack led by Hulagu?',
          optionsAr: ['عام 1258م (656هـ)', 'عام 1453م', 'عام 1492م', 'عام 1504م'],
          optionsEn: ['1258 AD (656 AH)', '1453 AD', '1492 AD', '1504 AD'],
          correctIndex: 0,
          conceptTestedAr: 'سقوط بغداد على يد المغول',
          conceptTestedEn: 'Fall of Baghdad to the Mongols in 1258',
          explanationAr: 'سقطت بغداد عام 1258م (656هـ) ودمرت معالمها الحضارية على يد جيوش المغول بقيادة هولاكو.',
          explanationEn: 'Hulagu’s Mongol forces invaded Baghdad in 1258 AD (656 AH), extinguishing the Abbasid caliphate in Iraq.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h7-q4',
          textAr: 'ما الاسم الذي أُطلق على المحكمة القضائية العليا التي أنشأها الخلفاء للنظر في تجاوزات وشكاوى المواطنين ضد كبار الولاة؟',
          textEn: 'What was the specialized high court established to investigate citizens’ grievances against powerful governors?',
          optionsAr: ['ديوان المظالم', 'ديوان الصوافي', 'ديوان الرسائل', 'ديوان الخراج'],
          optionsEn: ['Board of Grievances (Diwan al-Mazalim)', 'Diwan al-Sawafi', 'Diwan al-Rasa’il', 'Diwan al-Kharaj'],
          correctIndex: 0,
          conceptTestedAr: 'ديوان المظالم في الدولة الإسلامية',
          conceptTestedEn: 'Diwan al-Mazalim and administrative accountability',
          explanationAr: 'ديوان المظالم هو أعلى هيئة قضائية كانت تفصل في شكاوى الرعية ضد تعسف الولاة والأمراء ورجال السلطة.',
          explanationEn: 'Diwan al-Mazalim operated as an administrative ombudsman and tribunal rectifying abuse of power.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ── الوحدة الثالثة: تاريخ إفريقيا وحضاراتها ──
  // ════════════════════════════════════════════════════════════════════════════

  // المحاضرة 8: حضارات أفريقيا القديمة وتجارة القوافل
  {
    id: 'sd-g10-hist-8',
    order: 8,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الثالثة: من تاريخ أفريقيا وحضاراتها',
    unitTitleEn: 'Unit 3: History and Civilizations of Africa',
    lessonNumberAr: 'الدرس 1: حضارات أفريقيا القديمة وتجارة القوافل الصحراوية والمسيحية',
    lessonNumberEn: 'Lesson 1: Ancient African Civilizations, Trans-Saharan Trade, and Christianity',
    titleAr: 'المحاضرة 8: حضارات إفريقيا القديمة وتجارة القوافل عبر الصحراء الكبرى',
    titleEn: 'Lecture 8: Ancient African Civilizations and Trans-Saharan Caravan Commerce',
    subtitleAr: 'مملكة أكسوم، حضارة زيمبابوي العظمى، مملكة بنين، تجارة الملح والذهب، وانتشار المسيحية والإسلام السلمي',
    subtitleEn: 'The Kingdom of Axum, Great Zimbabwe dry-stone citadel, Benin bronzes, the gold-salt trade, and religious diffusion.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في جنوب القارة الإفريقية، تنتصب أسوار "زيمبابوي العظمى" الحجرية الدائرية الشاهقة بارتفاع 11 متراً، مشيدة بالكامل من الحجارة المنسقة هندسياً دون استخدام قطرة ملاط أو أسمنت واحدة! وفي نفس الوقت، قادت مملكة بنين فن سبك البرونز والتماثيل المعدنية الرفيعة. كيف ربطت قوافل الجمال عبر الصحراء الكبرى أسواق الذهب في السافنا بمناجم الملح في الشمال؟ وكيف تدفق الإسلام سلماً عبر التجار والمتصوفة إلى أعماق القارة الإفريقية؟',
    warmupHookEn: 'In southern Africa, Great Zimbabwe’s monumental stone enclosures rise 11 meters without a single drop of mortar. Simultaneously, Benin perfected world-class bronze metallurgy. Discover how trans-Saharan camel caravans bartered savannah gold for desert salt, peacefully carrying Islam across Africa.',
    learningOutcomesAr: [
      'أن يوضح الطالب خصائص ومظاهر الحضارات الإفريقية القديمة (أكسوم بالحبشة، زيمبابوي العظمى، ومملكة بنين).',
      'أن يحلل شبكة تجارة القوافل عبر الصحراء الكبرى وسلعها الاستراتيجية (الملح مقابل الذهب).',
      'أن يشرح كيفية انتشار المسيحية في مناطق من القارة الإفريقية.',
      'أن يستنتج الوسائل والمراحل السلمية التي تدفق عبرها الإسلام إلى غرب ووسط وشرق إفريقيا (التجارة، التصوف، والتصاهر).'
    ],
    learningOutcomesEn: [
      'Analyze ancient African civilizations: Axumite Red Sea trade, Great Zimbabwe stone masonry, and Benin bronzes.',
      'Examine the trans-Saharan caravan system and its core commodities: desert salt for sub-Saharan gold.',
      'Explain the introduction of Christianity into parts of Africa (Egypt, Axum, Nubia).',
      'Evaluate peaceful pathways of Islamic diffusion into sub-Saharan Africa via commerce, Sufism, and intermarriage.'
    ],
    keyConceptsAr: [
      'مملكة أكسوم: في الهضبة الإثيوبية، سك العملة، السيطرة على تجارة البحر الأحمر، واعتناق المسيحية في القرن الرابع',
      'حضارة زيمبابوي العظمى: العمارة الحجرية الدائرية الجافة بدون استخدام ملاط، وتجارة الذهب مع المحيط الهندي',
      'مملكة بنين: غرب إفريقيا، سبك التماثيل البرونزية والفنون المعدنية الرفيعة',
      'تجارة القوافل الصحراوية: شريان التواصل بين شمال وجنوب الصحراء؛ مقايضة ملح تغازة بذهب بامبوك وبوري',
      'انتشار المسيحية في إفريقيا: في مصر، الممالك النوبية، وأكسوم',
      'انتشار الإسلام السلمي: لم يعتمد على الجيوش في إفريقيا جنوب الصحراء بل قاده التجار المسلمون، شيوخ الطرق الصوفية، ودرب الأربعين'
    ],
    keyConceptsEn: [
      'Kingdom of Axum: Ethiopian highlands, coin minting, Red Sea maritime dominance, 4th-century Christianity',
      'Great Zimbabwe: Monumental dry-stone circular architecture without mortar, Indian Ocean gold-trade links',
      'Benin Kingdom: West African forest culture famed for refined brass and bronze casting',
      'Trans-Saharan Trade: Connecting Mediterranean ports to African savannah; Taghaza salt exchanged for Bambuk/Bure gold',
      'Christianity in Africa: Early presence in Egypt, Nubia, and Axum',
      'Peaceful Islamic Diffusion: Commercial caravan traders, scholarly Sufi lodges, and African pilgrim routes'
    ],
    vocabulary: [
      { termAr: 'حضارة زيمبابوي العظمى', termEn: 'Great Zimbabwe', definitionAr: 'حضارة إفريقية قديمة اشتهرت بعمارتها الحجرية الدائرية الشاهقة المشيدة بمهارة دون ملاط، واعتمدت على تجارة الذهب والنحاس.' },
      { termAr: 'تجارة الملح والذهب', termEn: 'Salt-Gold Trade', definitionAr: 'نظام التبادل التجاري عبر الصحراء الكبرى؛ حيث قايض تجار الشمال ألواح الملح الصخري النادر بغبار وسبائك الذهب النقي من مناجم غرب إفريقيا.' },
      { termAr: 'طريق الحج الإفريقي', termEn: 'African Pilgrimage Route', definitionAr: 'مسار قوافل الحجاج والتجار التاريخي الذي ربط غرب إفريقيا بالسودان ومصر وموانئ البحر الأحمر متجهاً إلى مكة المكرمة.' }
    ],
    summaryAr: 'ملخص الدرس: احتضنت إفريقيا حضارات عريقة كأكسوم وزيمبابوي وبنين. وشكلت تجارة القوافل عبر الصحراء الكبرى الشريان الاقتصادي الذي قايض ملح الشمال بذهب الجنوب، وكان القناة الرئيسية لتدفق الإسلام السلمي إلى ربوع القارة عبر التجار والفقهاء والطرق الصوفية.',
    summaryEn: 'Summary: Ancient Africa cultivated remarkable urban civilizations: Axum on the Red Sea, Great Zimbabwe’s dry-stone enclosures, and Benin’s bronze crafts. Trans-Saharan caravan trade exchanged desert salt for forest gold, peacefully introducing Arabic literacy and Islam across the continent.',
    sections: [
      {
        titleAr: '1. نماذج من حضارات أفريقيا القديمة: أكسوم، زيمبابوي العظمى، وبنين',
        titleEn: '1. Ancient African Civilizations: Axum, Great Zimbabwe, and Benin',
        contentAr: 'شهدت القارة الإفريقية قيام حضارات أصيلة كبرى دلت على العبقرية العمرانية والفنية للإنسان الإفريقي: 1) مملكة أكسوم: قامت في الهضبة الإثيوبية على البحر الأحمر، وسيطرت على تجارة البخور والعاج والتوابل بين الهند وروما، وسكت عملاتها الذهبية والفضية، وشيدت مسلات حجرية شاهقة، واعتنقت المسيحية في القرن الرابع الميلادي في عهد الملك عيزانا. 2) حضارة زيمبابوي العظمى: قامت بين نهري زمبيزي وليمبوبو جنوب القارة وازدهرت بين القرنين الحادي عشر والخامس عشر الميلاديين؛ واشتهرت بعمارتها الفذة؛ حيث بنى سكانها مجمعاً عمرانياً ضخماً من الأسوار والأبراج الحجرية المخروطية من كتل الجرانيت المشذبة دون استخدام أي ملاط أو أسمنت رابط، واعتمد اقتصادها على تعدين الذهب والنحاس وتصديرهما لموانئ المحيط الهندي (مثل ميناء كلوة وسفالة). 3) مملكة بنين: نشأت في غابات غرب إفريقيا (نيجيريا الحالية) واشتهرت بفن سبك البرونز والصلصال والنحاس؛ حيث أبدع فنانوها أقنعة وتماثيل برونزية للملوك (أوبا) عكست دقة هندسية وتشريحية رفيعة أبهرت متاحف العالم.',
        contentEn: 'Africa nurtured powerful indigenous civilizational centers: Axum on the Ethiopian plateau commanded Red Sea and Indian Ocean maritime commerce, minting tri-metallic currency, erecting monolithic stelae, and accepting Christianity under King Ezana. Great Zimbabwe flourished between the Zambezi and Limpopo, famed for its elliptical citadel and conical towers engineered of granite dry-stone masonry without mortar, exporting gold to Swahili coastal ports. In the West African forest, Benin created legendary lost-wax bronze sculptures and royal commemorative portrait heads.',
        interactiveExample: {
          titleAr: 'تحليل معماري: الإعجاز الهندسي للبناء الجاف في زيمبابوي العظمى',
          titleEn: 'Architectural Analysis: Dry-Stone Masonry Engineering at Great Zimbabwe',
          equation: 'كتل صخور الجرانيت المتدرجة + دقة زوايا الميلان الداخلي بدون ملاط = صمود الأسوار والأبراج لقرون في وجه الزلازل والأمطار',
          steps: [
            { stepNumber: 1, textAr: 'قام البناؤون بتسخين صخور الجرانيت بالنار ثم تبريدها بالماء لكسرها إلى كتل مستوية منتظمة.', textEn: 'Masons fractured granite boulders by thermal heating and water-quenching into uniform blocks.' },
            { stepNumber: 2, textAr: 'رُصت الحجارة بعناية فائقة مع إمالة الجدران قليلاً إلى الداخل لضمان التوازن الذاتي بفعل الجاذبية دون ملاط.', textEn: 'Stones were stacked dry with slight inward batter angles, relying on gravity and friction for stability.' },
            { stepNumber: 3, textAr: 'وفر هذا الابتكار مرونة بنيوية حالت دون تشقق الأسوار الشاهقة عبر مئات السنين.', textEn: 'This dry-stone flexibility prevented shear structural cracking under seismic shifts and rains.' }
          ],
          takeawayAr: 'زيمبابوي العظمى تمثل دليلاً قاطعاً على النضج الهندسي والعمراني الإفريقي المستقل.',
          takeawayEn: 'Great Zimbabwe is an iconic testament to independent sub-Saharan engineering ingenuity.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-8-1',
          questionAr: 'ما هي الحضارة الإفريقية القديمة التي اشتهرت بأسوارها الحجرية الدائرية المشيدة بدون ملاط؟',
          questionEn: 'Which ancient African civilization is world-renowned for stone enclosure masonry without mortar?',
          optionsAr: ['حضارة زيمبابوي العظمى', 'مملكة بنين', 'مملكة أكسوم', 'إمبراطورية غانا'],
          optionsEn: ['Great Zimbabwe', 'Kingdom of Benin', 'Kingdom of Axum', 'Ghana Empire'],
          correctIndex: 0,
          explanationAr: 'حضارة زيمبابوي العظمى في جنوب إفريقيا اشتهرت بأسوارها الحجرية المخروطية المشيدة بالجص والبناء الجاف.',
          explanationEn: 'Great Zimbabwe is globally celebrated for its massive granite dry-stone monumental enclosures.'
        }
      },
      {
        titleAr: '2. تجارة القوافل عبر الصحراء الكبرى وانتشار المسيحية والإسلام في أفريقيا',
        titleEn: '2. Trans-Saharan Caravan Commerce and the Peaceful Spread of Islam',
        contentAr: 'شكلت الصحراء الكبرى عبر التاريخ جسراً للتواصل الحضاري وليس عائقاً جغرافياً؛ وذلك بفضل شبكة "تجارة القوافل عبر الصحراء". وقد ارتكزت هذه التجارة على مقايضة استراتيجية بين بيئتين: 1) شمال الصحراء والواحات: التي وفرت "الملح الصخري" المستخرج من مناجم صحراوية شهيرة كـ (تغازة وتودني)، وهو سلعة ضرورية لحياة الإنسان وحفظ الأطعمة في المناطق الحارة. 2) أراضي السافنا والغابات الإفريقية جنوباً: التي وفرت "الذهب النقي" المستخرج من مناجم (بامبوك وبوري)، إلى جانب العاج وريش النعام والصمغ. وكانت قوافل الجمال تعبر مسالك محددة محملة بالملح والمنسوجات والكتب من الشمال، وتعود محملة بسبائك الذهب نحو موانئ البحر المتوسط. وقد أدت هذه التجارة إلى نتيجتين كبريين: أولاً: ازدهار المدن ومحطات القوافل (مثل غات، غدامس، ولاتة، وجني، وتمبكتو). ثانياً: تدفق الإسلام واللغة العربية إلى ربوع إفريقيا بطريقة سلمية أصيلة؛ حيث دخل الإسلام محمولاً بأخلاق التجار المسلمين وأمانتهم، وبجهود شيوخ الطرق الصوفية الذين أقاموا الزوايا، وبتصاهر التجار مع الأسر الحاكمة المحلية، مما أسس لممالك إسلامية كبرى دون حاجة إلى فتوحات عسكرية.',
        contentEn: 'The Sahara operated as an inland sea of commerce rather than an impenetrable barrier. The trans-Saharan caravan system hinged on a vital geographic symbiosis: northern desert salt deposits (Taghaza) were exchanged for southern alluvial gold from Bambuk and Bure, alongside ivory, kola nuts, and hides. Caravans navigated established oasis waystations (Ghadames, Walata, Timbuktu). This trade served as the principal catalyst for peaceful Islamic diffusion: Muslim merchants modeled business integrity, Sufi clerics established community hospices (zawiyas), and intermarriage with royal lineages facilitated peaceful conversion of ruling classes.',
        interactiveExample: {
          titleAr: 'تحليل اقتصادي وتاريخي: ديناميكية معادلة الملح مقابل الذهب عبر الصحراء',
          titleEn: 'Historical & Economic Analysis: The Salt-for-Gold Trans-Saharan Equilibrium',
          equation: 'ملح الصحراء النادر في السافنا (ضرورة بيولوجية) = ذهب السافنا النادر في الشمال (ضرورة نقدية دولية)',
          steps: [
            { stepNumber: 1, textAr: 'في مناخ السافنا الحار، يفقد الإنسان الأملاح الحيوية، فكان الملح يباع بوزنه ذهباً في أسواق الغابات الجنوبية.', textEn: 'In humid tropical savannahs, dietary salt was vital for survival, often traded weight-for-weight with gold.' },
            { stepNumber: 2, textAr: 'في أوروبا وشمال إفريقيا، كانت الخزائن بحاجة ماسة للذهب لسك الدنانير والفلورينات وتمويل التجارة العالمية.', textEn: 'Mediterranean treasuries required West African gold dust to mint coins and finance international commerce.' },
            { stepNumber: 3, textAr: 'حمت الممالك الإفريقية هذه المسالك وفرضت عليها مكوساً مولت بناء الجيوش والمدارس الإسلامية الكبرى.', textEn: 'African empires taxed these transit corridors, funding standing armies, mosques, and universities.' }
          ],
          takeawayAr: 'تجارة الملح والذهب مولت نهضة الممالك الإفريقية وجعلتها في قلب الاقتصاد العالمي الوسيط.',
          takeawayEn: 'The salt-gold trade financed the golden age of African empires and integrated them into global trade networks.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-8-2',
          questionAr: 'ما هي السلعة الحيوية المستخرجة من مناجم الصحراء الشمالية كـ (تغازة) والتي كانت تقايض بذهب إفريقيا في السافنا؟',
          questionEn: 'Which essential commodity mined from northern desert deposits like Taghaza was bartered for sub-Saharan gold?',
          optionsAr: ['الملح الصخري', 'الحديد الزهر', 'الحرير الطبيعي', 'الفحم الحجري'],
          optionsEn: ['Rock salt', 'Cast iron', 'Natural silk', 'Bituminous coal'],
          correctIndex: 0,
          explanationAr: 'كان الملح الصخري هو السلعة الأثمن التي يحتاجها سكان السافنا والغابات، فكان يقايض بسبائك الذهب.',
          explanationEn: 'Rock salt mined from desert pans like Taghaza was the indispensable commodity bartered for gold.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-8-assess',
      titleAr: 'اختبار تقييم المحاضرة 8: حضارات أفريقيا القديمة وتجارة القوافل',
      titleEn: 'Assessment Lecture 8: Ancient African Civilizations and Caravan Trade',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h8-q1',
          textAr: 'ما الوسيلة الرئيسية التي دخل وانتشر بها الدين الإسلامي في إفريقيا جنوب الصحراء الكبرى وغرب إفريقيا؟',
          textEn: 'What was the primary vehicle through which Islam spread across sub-Saharan and West Africa?',
          optionsAr: ['التجارة السلمية وأخلاق التجار المسلمين والتصوف والمصاهرة', 'الحروب العسكرية والغزو الإجباري الشامل', 'البعثات الدبلوماسية الغربية والقرارات الملكية', 'المراسيم الاستعمارية البحرية'],
          optionsEn: ['Peaceful trade, merchant ethics, Sufi spirituality, and intermarriage', 'Military invasions and compulsory conquest', 'Western diplomatic mandates', 'Colonial decrees'],
          correctIndex: 0,
          conceptTestedAr: 'وسائل انتشار الإسلام في إفريقيا السلمية',
          conceptTestedEn: 'Peaceful diffusion of Islam in Africa',
          explanationAr: 'انتشر الإسلام في إفريقيا سلمياً عبر قوافل التجارة، ودعوة شيوخ الصوفية، والمصاهرة بين المسلمين والأهالي.',
          explanationEn: 'Sub-Saharan Islamization was a voluntary, organic process mediated by trans-Saharan trade and Sufi lodges.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h8-q2',
          textAr: 'أي من الممالك الإفريقية القديمة اشتهرت بصناعة التماثيل والأقنعة البرونزية والنحاسية فائقة الدقة في غرب إفريقيا؟',
          textEn: 'Which ancient African kingdom was famed in West Africa for its masterful bronze and brass casting?',
          optionsAr: ['مملكة بنين', 'مملكة زيمبابوي', 'مملكة أكسوم', 'مملكة كانم'],
          optionsEn: ['Kingdom of Benin', 'Kingdom of Zimbabwe', 'Kingdom of Axum', 'Kingdom of Kanem'],
          correctIndex: 0,
          conceptTestedAr: 'مملكة بنين وفنون سبك البرونز',
          conceptTestedEn: 'Benin Kingdom and bronze metallurgy',
          explanationAr: 'اشتهرت مملكة بنين (في نيجيريا الحالية) بإبداع أرقى التماثيل والأقنعة البرونزية المصبوبة بالشمع المفقود.',
          explanationEn: 'Benin is celebrated globally for its royal bronze sculptures and lost-wax artistic masterpieces.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h8-q3',
          textAr: 'في أي منطقة جغرافية إفريقية قامت مملكة أكسوم التي سيطرت على تجارة البحر الأحمر واعتنقت المسيحية في القرن الرابع الميلادي؟',
          textEn: 'In which geographic region did the Kingdom of Axum develop, dominating Red Sea commerce and adopting Christianity?',
          optionsAr: ['الهضبة الإثيوبية وشرق إفريقيا', 'حوض نهر النيجر في الغرب', 'صحراء كلهاري في الجنوب', 'حوض نهر الكونغو الاستوائي'],
          optionsEn: ['Ethiopian Highlands and East Africa', 'Niger River Basin', 'Kalahari Desert', 'Congo Basin'],
          correctIndex: 0,
          conceptTestedAr: 'موقع مملكة أكسوم وتاريخها',
          conceptTestedEn: 'Location and history of Axum',
          explanationAr: 'قامت مملكة أكسوم في الهضبة الإثيوبية وشرق إفريقيا وتحكمت في موانئ البحر الأحمر وتجارته الدولية.',
          explanationEn: 'Axum commanded the maritime trade between the Red Sea and the Indian Ocean from the Ethiopian highlands.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h8-q4',
          textAr: 'ما المنجم الصحراوي الشهير الذي كان المصدر الأكبر لاستخراج قوالب الملح الصخري المتجهة جنوباً عبر الصحراء؟',
          textEn: 'What famous desert mine served as the primary source for rock salt blocks hauled southward across the Sahara?',
          optionsAr: ['منجم تغازة', 'منجم بامبوك', 'منجم بوري', 'منجم سفالة'],
          optionsEn: ['Taghaza mine', 'Bambuk mine', 'Bure mine', 'Sofala mine'],
          correctIndex: 0,
          conceptTestedAr: 'مناجم الملح الصخري وتجارة القوافل',
          conceptTestedEn: 'Taghaza salt mine and caravan routes',
          explanationAr: 'كانت تغازة في شمال الصحراء أشهر مناجم الملح الصخري التي تقطع ألواحاً وتنقل على ظهور الجمال للسافنا.',
          explanationEn: 'Taghaza was the legendary Saharan salt mining center supplying West African markets.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // المحاضرة 9: الممالك الإسلامية الكبرى في غرب ووسط أفريقيا
  {
    id: 'sd-g10-hist-9',
    order: 9,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الثالثة: من تاريخ أفريقيا وحضاراتها',
    unitTitleEn: 'Unit 3: History and Civilizations of Africa',
    lessonNumberAr: 'الدرس 2: الممالك والدويلات الإسلامية في غرب ووسط أفريقيا',
    lessonNumberEn: 'Lesson 2: Islamic Empires in West and Central Africa',
    titleAr: 'المحاضرة 9: الممالك الإسلامية الكبرى في إفريقيا (غانا، مالي، سنغاي، وكانم برنو)',
    titleEn: 'Lecture 9: Great Islamic Empires of Africa: Ghana, Mali, Songhai, and Kanem-Bornu',
    subtitleAr: 'بلاد الذهب، رحلة حج منسا موسى الأسطورية 1324م، جامعة سنكوري بتمبكتو، وسلطنة كانم برنو ودرب الأربعين',
    subtitleEn: 'The land of gold, Mansa Musa’s 1324 Hajj, Sankore University in Timbuktu, and Kanem-Bornu’s millennium dynasty.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في عام 1324م، خرج إمبراطور مالي العظيم "منسا موسى" في رحلة حج أسطورية إلى مكة المكرمة مصطحباً معه 60 ألف رجل وقوافل من الجمال تحمل أطناناً من الذهب الخالص! وزع موسى الذهب بسخاء أسطوري في القاهرة والمدينة ومكة حتى هبط سعر الذهب في أسواق الشرق الأوسط لعقد كامل، ورُسمت صورته ممسكاً ببيضة من الذهب على الخرائط الأوربية كأغنى رجل عرفته البشرية! كيف بنيت إمبراطوريات غانا ومالي وسنغاي؟ وما قصة جامعة سنكوري التي سبقت جامعات أوروبا؟',
    warmupHookEn: 'In 1324 AD, Mansa Musa embarked on his legendary pilgrimage to Mecca with 60,000 attendants and tons of pure gold. His philanthropic spending in Cairo depressed regional gold prices for a decade and placed Mali on European world maps. Explore the magnificent Islamic empires of Ghana, Mali, Songhai, and Kanem-Bornu.',
    learningOutcomesAr: [
      'أن يوضح الطالب خصائص إمبراطورية غانا وتجارة الذهب في بلاد السودان الغربي.',
      'أن يحلل ازدهار إمبراطورية مالي (1230 - 1600م) بقيادة سوندياتا كايتا ورحلة حج منسا موسى (1324م).',
      'أن يشرح مظاهر قوة إمبراطورية سنغاي (1464 - 1591م) ودور عاصمتها الثقافية تمبكتو وجامعة سنكوري.',
      'أن يبين نظام الحكم وتاريخ سلطنة كانم برنو في حوض تشاد وعلاقاتها العميقة بالسودان وطريق الحج الإفريقي.'
    ],
    learningOutcomesEn: [
      'Describe the imperial institutions and gold monopolies of ancient Ghana.',
      'Analyze the expansion of Mali (1230–1600 AD) under Sundiata Keita and Mansa Musa’s 1324 pilgrimage.',
      'Examine Songhai (1464–1591 AD) under Sonni Ali and Askia Muhammad, focusing on Timbuktu and Sankore University.',
      'Evaluate Kanem-Bornu’s millennial Sayfawa dynasty in the Lake Chad basin and its enduring ties to Sudan.'
    ],
    keyConceptsAr: [
      'إمبراطورية غانا (أرض الذهب): أقدم إمبراطوريات غرب إفريقيا وعاصمتها كومبي صالح المقسمة لحاضرتين',
      'إمبراطورية مالي (1230 - 1600م): أسسها سوندياتا كايتا، وتوسعت لتضم حوض النيجر الأعلى بأكمله',
      'رحلة حج منسا موسى 1324م: توزيع الذهب بالقاهرة، استقدام المعماري الأندلسي الساحلي، وبناء مسجد جني وتمبكتو',
      'إمبراطورية سنغاي (1464 - 1591م): أعظم إمبراطورية في غرب إفريقيا بقيادة سني علي بير وأسقيا محمد',
      'مدينة تمبكتو وجامعة سنكوري: العاصمة الثقافية العالمية، مكتبات المخطوطات النادرة، وتخريج الفقهاء والعلماء',
      'سلطنة كانم برنو: حول بحيرة تشاد، حكمتها أسرة السيفيين لأكثر من 1000 عام، وارتبطت بالسودان بطريق الحج ودرب الأربعين'
    ],
    keyConceptsEn: [
      'Ghana Empire (Land of Gold): Earliest West African empire with dual capital at Koumbi Saleh',
      'Mali Empire (1230–1600 AD): Founded by Sundiata Keita, dominating Upper Niger commerce',
      'Mansa Musa’s 1324 Hajj: Gold-dispensing pilgrimage, hiring Andalusian architect Al-Sahili, and building grand mosques',
      'Songhai Empire (1464–1591 AD): West Africa’s largest empire led by Sonni Ali and Askia the Great',
      'Timbuktu and Sankore University: Global intellectual metropolis housing tens of thousands of manuscripts',
      'Kanem-Bornu Sultanate: Lake Chad empire governed by the Sayfawa dynasty, deeply linked to Sudan via pilgrimage corridors'
    ],
    vocabulary: [
      { termAr: 'منسا موسى (Mansa Musa)', termEn: 'Mansa Musa', definitionAr: 'أشهر أباطرة إمبراطورية مالي الإسلامية (حكم 1312 - 1337م)، اشتهر برحلة حجه الأسطورية عام 1324م وبنائه الصروح العلمية والمعمارية في تمبكتو وجني.' },
      { termAr: 'جامعة سنكوري بتمبكتو', termEn: 'Sankore University', definitionAr: 'جامعة ومسجد علمي عريق في تمبكتو بمالي، احتضنت آلاف الطلاب والعلماء ومئات الآلاف من المخطوطات الإسلامية في الفقه والرياضيات والفلك.' },
      { termAr: 'سلطنة كانم برنو', termEn: 'Kanem-Bornu Sultanate', definitionAr: 'إمبراطورية إسلامية كبرى قامت في حوض تشاد وحكمتها أسرة السيفيين لقرون، وشكلت معبر الحج والتجارة الرئيسي مع السودان ومصر.' }
    ],
    summaryAr: 'ملخص الدرس: أثمر التفاعل الإسلامي عن قيام إمبراطوريات كبرى في غرب ووسط إفريقيا: غانا بلاد الذهب، ومالي التي بلغت المجد مع منسا موسى ورحلة حجه الخالدة، وسنغاي التي توجت تمبكتو وجامعة سنكوري عاصمة فكرية عالمية، وسلطنة كانم برنو التي ارتبطت ارتباطاً وثيقاً بالسودان ومسارات الحج والتجارة.',
    summaryEn: 'Summary: Peaceful Islamic integration fostered vast African empires: ancient Ghana, imperial Mali under Mansa Musa with his iconic 1324 pilgrimage, Songhai with Timbuktu’s world-renowned Sankore University, and Kanem-Bornu around Lake Chad, maintaining deep historical bonds with Sudan.',
    sections: [
      {
        titleAr: '1. إمبراطوريتا غانا ومالي ورحلة حج منسا موسى الأسطورية (1324م)',
        titleEn: '1. Ghana and Mali Empires and Mansa Musa’s Legendary 1324 Hajj',
        contentAr: 'قامت إمبراطورية غانا كأولى الإمبراطوريات الكبرى في منطقة الساحل الغربي بين نهري السنغال والنيجر وعُرفت بـ "أرض الذهب" لسيطرتها على مناجم الذهب وفرض المكوس على قوافل الملح. وكانت عاصمتها "كومبي صالح" مقسمة إلى مدينتين: مدينة الملك الوثنية ومدينة التجار المسلمين التي ضمت 12 مسجداً. ثم نشأت إمبراطورية مالي الإسلامية (1230 - 1600م) على يد البطل القومي سوندياتا كايتا، واعتنقت الإسلام رسمياً ووحدت حوض النيجر ووسعت شبكات التجارة والزراعة. وبلغت مالي ذروة مجدها العالمي في عهد الإمبراطور منسا موسى (1312 - 1337م) الذي قام بأشهر رحلة حج في تاريخ البشرية عام 1324م؛ حيث قاد موكباً مهيباً يضم 60 ألف رجل ومئات الجمال المحملة بسبائك الذهب، فوزع الأموال في القاهرة والمدينة ومكة وبنى المساجد على طول طريقه، مما جعل قيمة الذهب تنخفض في مصر لسنوات طويلة. وفي عودته، استقدم المعماري والشاعر الأندلسي أبا إسحاق الساحلي الذي طوّر العمارة السودانية الإفريقية ببناء المسجد الجامع في جني ومسجد جينقريب في تمبكتو وقصور الإمبراطور، مما أدخل مالي في صدارة خرائط العالم الكبرى مثل أطلس كتالونيا عام 1375م.',
        contentEn: 'Ancient Ghana arose between the Senegal and Niger rivers as the "Land of Gold," taxing trans-Saharan salt trade at its dual-city capital, Koumbi Saleh. Mali (1230–1600 AD) succeeded it under Sundiata Keita, embracing Islam and expanding across the Niger valley. Mali achieved peak global renown under Mansa Musa (1312–1337 AD). His 1324 pilgrimage to Mecca with 60,000 escorts and tons of gold depressed regional gold values in Cairo for a decade. Returning with Andalusian architect Abu Ishaq al-Sahili, Musa pioneered Sudano-Sahelian fired-mud architecture at Timbuktu and Djenne, cementing Mali on medieval world atlases.',
        interactiveExample: {
          titleAr: 'تحليل اقتصادي دولي: الأثر الاقتصادي والجغرافي لرحلة حج منسا موسى 1324م',
          titleEn: 'International Economic Analysis: Mansa Musa’s 1324 Hajj Impact',
          equation: 'إنفاق وضخ أطنان من الذهب الخالص في أسواق القاهرة = تضخم نقدي وانخفاض سعر الذهب لمدة 12 عاماً + وضع إفريقيا في الخرائط الأطلسية العالمية',
          steps: [
            { stepNumber: 1, textAr: 'ضخ الذهب: أنفق موسى مئات الآلاف من الدنانير الذهبية كهدايا وصدقات وشراء للسلع والمخطوطات.', textEn: 'Gold injection: Musa spent hundreds of thousands of gold dinars as gifts and procurement of rare manuscripts.' },
            { stepNumber: 2, textAr: 'الأثر المالي بالقاهرة: أدى فائض المعروض من الذهب إلى انخفاض سعره مقابل الفضة بنسبة تزيد عن 20% لعقد كامل.', textEn: 'Monetary shock: Oversupply depreciated gold relative to silver by over 20% in Cairo for twelve years.' },
            { stepNumber: 3, textAr: 'الصدى العالمي: رسم رسامو الخرائط في أوروبا (أطلس كتالونيا 1375م) صورة منسا موسى بتاجه الذهبي وسبيكة الذهب الضخمة.', textEn: 'Global recognition: European cartographers depicted Musa on the 1375 Catalan Atlas holding a golden nugget.' }
          ],
          takeawayAr: 'رحلة منسا موسى أثبتت للعالم تحضر وثراء الدولة الإفريقية الإسلامية وسيطرتها على شرايين الاقتصاد الدولي.',
          takeawayEn: 'Mansa Musa’s pilgrimage established sub-Saharan Africa as an epicenter of imperial wealth and Islamic sophistication.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-9-1',
          questionAr: 'من هو إمبراطور مالي الشهير الذي قام برحلة الحج التاريخية عام 1324م مصطحباً أطناناً من الذهب؟',
          questionEn: 'Which emperor of Mali undertook the historic 1324 pilgrimage laden with tons of gold?',
          optionsAr: ['منسا موسى', 'سوندياتا كايتا', 'سني علي بير', 'أسقيا محمد'],
          optionsEn: ['Mansa Musa', 'Sundiata Keita', 'Sonni Ali Ber', 'Askia Muhammad'],
          correctIndex: 0,
          explanationAr: 'منسا موسى هو إمبراطور مالي الذي قاد رحلة الحج الأسطورية عام 1324م ووزع الذهب بسخاء في القاهرة ومكة.',
          explanationEn: 'Mansa Musa led the celebrated 1324 Hajj, distributing lavish amounts of gold across Cairo and Mecca.'
        }
      },
      {
        titleAr: '2. إمبراطورية سنغاي وعاصمتها تمبكتو وسلطنة كانم برنو',
        titleEn: '2. Songhai Empire, Scholarly Timbuktu, and the Kanem-Bornu Sultanate',
        contentAr: 'خلفت إمبراطورية سنغاي (1464 - 1591م) إمبراطورية مالي لتصبح أعظم وأوسع إمبراطوريات غرب إفريقيا؛ قادها عسكرياً "سني علي بير" الذي بنى أسطولاً نهرياً في نهر النيجر، ثم تولى أعظم ملوكها "أسقيا محمد" (أسقيا الكبير 1493 - 1528م) الذي جعل من الشريعة الإسلامية أساساً للقضاء، ونظم الإدارة والضرائب والجيش المحترف، وقام برحلة حج شهيرة توج خلالها بالخلافة على بلاد التكرور. وازدهرت في عهده مدينة "تمبكتو" كعاصمة ثقافية للعالم الإسلامي؛ حيث احتضنت "جامعة سنكوري" أكثر من 25 ألف طالب ودرس فيها كبار العلماء (مثل أحمد بابا التمبكتي)، واحتوت مكتباتها مئات الآلاف من المخطوطات في الفلك والطب والرياضيات والقانون، وكانت تجارة المخطوطات والكتب فيها أكثر ربحاً من تجارة الذهب. وفي وسط إفريقيا حول بحيرة تشاد، قامت "سلطنة كانم برنو" التي حكمتها أسرة "السيفيين" لأكثر من ألف عام (واحدة من أطول السلالات حكماً في التاريخ). واعتنقت السلطنة الإسلام في القرن الحادي عشر الميلادي، وأقامت نظاماً سياسياً وقضائياً محكماً، وشكلت شريان اتصال حيوي بالسودان عبر درب الأربعين وقوافل الحجيج الإفريقية المتجهة إلى سواكن وجدة.',
        contentEn: 'The Songhai Empire (1464–1591 AD) expanded into West Africa’s largest state under Sonni Ali’s naval fleet, reaching its golden zenith under Askia Muhammad (Askia the Great, 1493–1528 AD). Askia codified Islamic administration and patronized Timbuktu as a global intellectual hub. Sankore University educated over 25,000 international scholars (including polymath Ahmad Baba), fostering a manuscript trade that yielded higher profits than gold. In Central Africa around Lake Chad, the Kanem-Bornu Sultanate endured for over a millennium under the Sayfawa dynasty. Embracing Islam in the 11th century, it maintained deep diplomatic, commercial, and pilgrimage links with Sudan along the Forty Days Road (Darb al-Arbain).',
        interactiveExample: {
          titleAr: 'تحليل حضاري: مكانة جامعة سنكوري والمخطوطات في تمبكتو عاصمة الثقافة الإفريقية',
          titleEn: 'Civilizational Analysis: Sankore University and Timbuktu’s Scholarly Economy',
          equation: 'أمن الطرق النهرية + أوقاف التجارة الإسلامية = 25 ألف طالب في سنكوري + تجارة المخطوطات تفوق أرباح الذهب',
          steps: [
            { stepNumber: 1, textAr: 'أسس التجار أوقافاً ومساجد علمية رعت الطلاب والعلماء القادمين من شتى أنحاء العالم الإسلامي.', textEn: 'Merchants endowed mosques and residential colleges, subsidizing scholars across the Islamic world.' },
            { stepNumber: 2, textAr: 'كتب المؤرخ الوزان (ليون الإفريقي): "في تمبكتو تباع المخطوطات والكتب بأسعار تفوق سائر السلع التجارية".', textEn: 'Leo Africanus recorded: "In Timbuktu, manuscripts are bought and sold at higher prices than any other merchandise."' },
            { stepNumber: 3, textAr: 'أنتج علماء تمبكتو مؤلفات في الفلك وعلم الفلك النجمي والرياضيات والحقوق أثبتت الريادة الفكرية للقارة.', textEn: 'Scholars composed seminal treatises on astronomy, mathematics, and constitutional law.' }
          ],
          takeawayAr: 'تمبكتو كانت منارة التنوير الإفريقي والإسلامي التي نافست قرطبة والقاهرة وفاس وبغداد.',
          takeawayEn: 'Timbuktu stood as a peer to Cordoba, Cairo, and Fez in theological and scientific excellence.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-9-2',
          questionAr: 'ما هي المؤسسة الأكاديمية والجامعية الشهيرة في تمبكتو التي احتضنت آلاف الطلاب والمخطوطات النادرة؟',
          questionEn: 'Which famous university in Timbuktu housed thousands of students and vast collections of rare manuscripts?',
          optionsAr: ['جامعة سنكوري', 'جامعة القرويين', 'جامعة كامبريدج', 'جامعة الإسكندرية'],
          optionsEn: ['Sankore University', 'Al-Qarawiyyin University', 'Cambridge University', 'Alexandria University'],
          correctIndex: 0,
          explanationAr: 'جامعة سنكوري بتمبكتو في مالي كانت المركز الفكري الأول في غرب إفريقيا بفضل مكتباتها وعلمائها.',
          explanationEn: 'Sankore University in Timbuktu was the intellectual crown of Islamic scholarship in West Africa.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-9-assess',
      titleAr: 'اختبار تقييم المحاضرة 9: الممالك الإسلامية الكبرى في إفريقيا',
      titleEn: 'Assessment Lecture 9: Great Islamic Empires of Africa',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h9-q1',
          textAr: 'من هو المعماري الأندلسي الشهير الذي استقدمه منسا موسى معه بعد عودته من الحج عام 1324م لتطوير العمارة في مالي؟',
          textEn: 'Which celebrated Andalusian architect did Mansa Musa recruit during his 1324 Hajj to design monuments in Mali?',
          optionsAr: ['أبو إسحاق الساحلي', 'ابن بطوطة', 'ابن خلدون', 'الإدريسي'],
          optionsEn: ['Abu Ishaq al-Sahili', 'Ibn Battuta', 'Ibn Khaldun', 'Al-Idrisi'],
          correctIndex: 0,
          conceptTestedAr: 'المعماري الأندلسي الساحلي ودوره في مالي',
          conceptTestedEn: 'Abu Ishaq al-Sahili’s architectural legacy in Mali',
          explanationAr: 'استقدم منسا موسى المعماري الأندلسي أبا إسحاق الساحلي الذي شيد المساجد والقصور بالطوب اللبن المحسن في تمبكتو وجني.',
          explanationEn: 'Mansa Musa recruited Andalusian polymath Abu Ishaq al-Sahili to engineer grand mosques in Djenne and Timbuktu.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h9-q2',
          textAr: 'أي من السلالات الحاكمة التالية حكمت سلطنة كانم برنو حول بحيرة تشاد لأكثر من ألف عام في أطول حكم ملكي مستمر بإفريقيا؟',
          textEn: 'Which royal dynasty ruled the Kanem-Bornu Sultanate for over a millennium in one of Africa’s longest continuous reigns?',
          optionsAr: ['أسرة السيفيين', 'الأسرة المروانية', 'الأسرة السعدية', 'أسرة الطولونيين'],
          optionsEn: ['Sayfawa Dynasty', 'Marwanid Dynasty', 'Saadi Dynasty', 'Tulunid Dynasty'],
          correctIndex: 0,
          conceptTestedAr: 'سلطنة كانم برنو وأسرة السيفيين',
          conceptTestedEn: 'Sayfawa dynasty of Kanem-Bornu',
          explanationAr: 'حكمت أسرة السيفيين سلطنة كانم برنو لأكثر من عشرة قرون متواصلة، وشكلت صلة وصل حيوية مع السودان.',
          explanationEn: 'The Sayfawa dynasty held power in Kanem-Bornu for over a thousand years.',
          difficulty: 'hard'
        },
        {
          id: 'sd-h9-q3',
          textAr: 'ما الإمبراطورية الإفريقية التي عُرفت بـ "أرض الذهب" وكانت عاصمتها كومبي صالح مقسمة لمدينتين إحداهما للمسلمين؟',
          textEn: 'Which African empire was famed as the "Land of Gold," with its dual-city capital at Koumbi Saleh including a Muslim city?',
          optionsAr: ['إمبراطورية غانا', 'مملكة زيمبابوي', 'إمبراطورية سنغاي', 'مملكة بنين'],
          optionsEn: ['Ghana Empire', 'Kingdom of Zimbabwe', 'Songhai Empire', 'Kingdom of Benin'],
          correctIndex: 0,
          conceptTestedAr: 'إمبراطورية غانا وعاصمتها كومبي صالح',
          conceptTestedEn: 'Ghana Empire and Koumbi Saleh',
          explanationAr: 'إمبراطورية غانا القديمة لُقبت بأرض الذهب واحتوت عاصمتها كومبي صالح على مدينة للتجار المسلمين بها مساجد.',
          explanationEn: 'Ancient Ghana was celebrated as the Land of Gold, featuring a dedicated Muslim quarter in Koumbi Saleh.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h9-q4',
          textAr: 'من هو إمبراطور سنغاي الشهير الذي نظم الإدارة والقضاء على أساس الشريعة الإسلامية وجعل تمبكتو عاصمة عالمية للعلوم؟',
          textEn: 'Which Songhai emperor codified governance on Islamic jurisprudence, elevating Timbuktu into a global scholarly capital?',
          optionsAr: ['أسقيا محمد (أسقيا الكبير)', 'سني علي بير', 'سوندياتا كايتا', 'عمارة دنقس'],
          optionsEn: ['Askia Muhammad (Askia the Great)', 'Sonni Ali Ber', 'Sundiata Keita', 'Amara Dunqas'],
          correctIndex: 0,
          conceptTestedAr: 'أسقيا محمد وإمبراطورية سنغاي',
          conceptTestedEn: 'Askia the Great and Songhai’s golden age',
          explanationAr: 'أسقيا محمد هو الحاكم المصلح الذي وحّد سنغاي ورعى جامعة سنكوري وجعل تمبكتو قبلة العلماء في إفريقيا.',
          explanationEn: 'Askia Muhammad championed Islamic legal administration and academic patronage across Songhai.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ════════════════════════════════════════════════════════════════════════════
  // ── الوحدة الرابعة: من التاريخ الإنساني (أوروبا) ──
  // ════════════════════════════════════════════════════════════════════════════

  // المحاضرة 10: الحضارة الإغريقية والرومانية ونظام الإقطاع
  {
    id: 'sd-g10-hist-10',
    order: 10,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الرابعة: من التاريخ الإنساني (أوروبا)',
    unitTitleEn: 'Unit 4: From Human History (Europe)',
    lessonNumberAr: 'الدروس 1 و 2: الحضارة الإغريقية، الحضارة الرومانية، ونظام الإقطاع',
    lessonNumberEn: 'Lessons 1 & 2: Greek and Roman Civilizations, and Medieval Feudalism',
    titleAr: 'المحاضرة 10: الحضارتان الإغريقية والرومانية ونظام الإقطاع في العصور الوسطى',
    titleEn: 'Lecture 10: Classical Greek and Roman Civilizations, and Medieval European Feudalism',
    subtitleAr: 'ديمقراطية أثينا وانضباط إسبرطة العسكري، القانون الروماني والجمهورية، والهرمية الإقطاعية واستعباد الأقنان',
    subtitleEn: 'Athenian democracy vs Spartan militarism, Roman law and republican expansion, and medieval feudal serfdom.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في أثينا القديمة، كان كل مواطن حر يقف في الساحة العامة ليدلي بصوته مباشرة في سن القوانين وإعلان الحروب، بينما في إسبرطة المجاورة، كان الأطفال ينزعون من أمهاتهم في سن السابعة ليتحولوا إلى محاربين لا يعرفون سوى السلاح والانضباط العسكري الصارم! ومع صعود روما، وُضعت القوانين الرومانية المكتوبة التي ما زالت أساساً لقوانين العالم المعاصر. ولكن كيف سقطت هذه الحضارات لتدخل أوروبا في ظلام "النظام الإقطاعي" واستعباد أقنان الأرض؟',
    warmupHookEn: 'Athenian participatory democracy stood in stark contrast to Sparta’s lifelong martial regimentation. Simultaneously, Rome codified enduring principles of civil jurisprudence. Discover how classical European antiquity collapsed into the dark ages of manorial feudal serfdom.',
    learningOutcomesAr: [
      'أن يقارن الطالب بين نظام دول المدن الإغريقية (ديمقراطية أثينا ونظام إسبرطة العسكري).',
      'أن يوضح إسهامات الحضارة الإغريقية في الفلسفة (سقراط، أفلاطون، أرسطو) والمسرح والرياضة (الألعاب الأولمبية).',
      'أن يشرح مظاهر الحضارة الرومانية (التحول من الجمهورية للإمبراطورية، القانون الروماني، والمنشآت الهندسية).',
      'أن يحلل بنية النظام الإقطاعي في أوروبا العصور الوسطى وطبقاته (الملك، النبلاء، الفرسان، والأقنان).',
      'أن يبين دور الكنيسة والجمود الفكري في العصور الوسطى الأوروبية.'
    ],
    learningOutcomesEn: [
      'Contrast classical Greek poleis: direct participatory democracy in Athens versus Spartan martial discipline.',
      'Explain Hellenic contributions in philosophy (Socrates, Plato, Aristotle), theatre, and Olympic athletics.',
      'Analyze Roman political transitions (Republic to Empire), codified jurisprudence, and monumental civil engineering.',
      'Examine the medieval European feudal socioeconomic pyramid: monarchs, nobles, knights, and unfree serfs.',
      'Evaluate Church dominance and intellectual stagnation during the medieval Dark Ages.'
    ],
    keyConceptsAr: [
      'الحضارة الإغريقية (اليونان القديمة): نظام دول المدن (Polis)، أثينا الديمقراطية، وإسبرطة العسكرية',
      'الفكر الإغريقي: الفلسفة العقلية (سقراط، أفلاطون، وأرسطو)، والآداب (الإلياذة والأوديسة لهوميروس)، والألعاب الأولمبية',
      'الحضارة الرومانية: نشأة روما، الصراع الطبقي، التحول من الجمهورية إلى الإمبراطورية (يوليوس قيصر وأغسطس)',
      'القانون الروماني: تقنين الحقوق والتشريعات (ألواح القانون الاثني عشر) وأثره في القوانين الحديثة، والعمارة (الكولوسيوم وقنوات المياه)',
      'سقوط روما الغربية (476م): بداية العصور الوسطى في أوروبا',
      'النظام الإقطاعي (Feudalism): ملكية النبلاء للأراضي الزراعية واستعباد الفلاحين (الأقنان) كأجراء مقيدين بالأرض مقابل الحماية'
    ],
    keyConceptsEn: [
      'Ancient Greece: Polis system, Athenian participatory democracy, and Spartan martial oligarchy',
      'Hellenic Thought: Classical philosophy (Socrates, Plato, Aristotle), Homeric epics, and Olympic competitions',
      'Roman Civilization: Transition from Republic to Empire (Julius Caesar, Augustus), Pax Romana',
      'Roman Law: Twelve Tables and Justinian codification laying foundations of modern civil jurisprudence',
      'Fall of Western Rome (476 AD): Onset of the European Middle Ages',
      'Feudalism: Hereditary manorial hierarchy binding unfree serfs to aristocratic estates in exchange for defense'
    ],
    vocabulary: [
      { termAr: 'الديمقراطية الأثينية', termEn: 'Athenian Democracy', definitionAr: 'نظام سياسي إغريقي فريد نشأ في أثينا يتيح للمواطنين الأحرار الذكور التصويت المباشر على القوانين والمشاركة في اتخاذ قرارات الدولة.' },
      { termAr: 'القانون الروماني', termEn: 'Roman Law', definitionAr: 'مجموعة القوانين والتشريعات المدنية المكتوبة التي صاغها الرومان ونظمت العقود والملكية والتقاضي وشكلت أساس القانون الغربي المعاصر.' },
      { termAr: 'أقنان الأرض (السرَف)', termEn: 'Serfs', definitionAr: 'الفلاحون الفقراء في أوروبا العصور الوسطى الذين ارتبطوا بالأرض الإقطاعية وعملوا بالسخرة لصالح السادة النبلاء دون أي حقوق تملك.' }
    ],
    summaryAr: 'ملخص الدرس: تميزت اليونان القديمة بنموذجين متباينين: أثينا الديمقراطية الفلسفية وإسبرطة العسكرية الصارمة. وتلتها روما التي صاغت القانون الروماني وأقامت إمبراطورية مترامية. ومع سقوط روما عام 476م، دخلت أوروبا العصور الوسطى حيث ساد النظام الإقطاعي الهرمي واستعبد الفلاحون الأقنان تحت سلطة النبلاء والكنيسة.',
    summaryEn: 'Summary: Classical Greece pioneered Athenian direct democracy and philosophical reasoning alongside Spartan martial discipline. Rome codified civil law and built continental infrastructure. Following Rome’s 476 AD fall, Western Europe descended into feudalism, where aristocratic landlords subjugated unfree serfs under the ecclesiastical authority of the medieval Church.',
    sections: [
      {
        titleAr: '1. الحضارتان الإغريقية والرومانية: النظم السياسية والفلسفة والقانون',
        titleEn: '1. Classical Greece and Rome: Governance, Philosophy, and Jurisprudence',
        contentAr: 'قامت الحضارة الإغريقية في جنوب شبه جزيرة البلقان وجزر بحر إيجة؛ وتميزت بنظام "دول المدن" (Polis) المستقلة ذاتياً. وتجلت في نموذجين بارزين: 1) أثينا: رائدة الديمقراطية المباشرة في التاريخ؛ حيث يحق للمواطنين الأحرار التصويت في الجمعية الشعبية وسن القوانين، وشهدت أثينا أوج النهضة الفلسفية بظهور سقراط وأفلاطون وأرسطو، وازدهار الفنون والمسرح التراجيدي والألعاب الأولمبية. 2) إسبرطة: قامت على النقيض كدولة عسكرية صارمة تحكمها أقلية محاربة وتلزم الأطفال بالتدريب القتالي منذ سن السابعة. وتلتها الحضارة الرومانية التي انطلقت من شبه الجزيرة الإيطالية وتوسعت لتضم حوض البحر الأبيض المتوسط كـ "بحيرة رومانية". ومرت روما بمرحلتين: العهد الجمهوري ثم العهد الإمبراطوري بعد صعود يوليوس قيصر وأوغسطس. وتعد أعظم تركة تركتها روما للإنسانية هي "القانون الروماني"؛ وهو مدونة تشريعية مكتوبة نظمت حقوق المواطنين والملكية والتعاقدات وشكلت المرجع الأساسي للقوانين المدنية المعاصرة، فضلاً عن شبكة الطرق المرصوفة والقنوات المائية المعلقة (الأكوادكت) وصروح الكولوسيوم.',
        contentEn: 'Ancient Greece developed independent city-states (poleis) highlighted by two divergent archetypes: democratic Athens, where male citizens enacted legislation directly alongside philosophical inquiry (Socrates, Plato, Aristotle) and drama; and oligarchic Sparta, centered strictly on martial regimentation. Rome succeeded Greece, shifting from a Republic to an Empire under Augustus. Rome’s most enduring legacy was codified civil law (jus civile), establishing contract principles, property rights, and judicial procedure that remain the bedrock of modern Western legal systems, alongside paved highway networks and monumental aqueducts.',
        interactiveExample: {
          titleAr: 'تحليل مقارن: الديمقراطية الأثينية مقابل النظام الإسبرطي العسكري',
          titleEn: 'Comparative Analysis: Athenian Democracy vs Spartan Militarism',
          equation: 'أثينا = تصويت الجمعية الشعبية + حرية النقاش الفلسفي + أسطول تجاري بحري | إسبرطة = ملكان + مجلس شيوخ مقيد + تدريب حربي مشاة إلزامي',
          steps: [
            { stepNumber: 1, textAr: 'في أثينا: المشاركة السياسية متاحة للمواطنين الذكور، مع تشجيع التفكير الفلسفي والآداب والعلوم.', textEn: 'Athens: Direct legislative suffrage for male citizens, nurturing free philosophical inquiry.' },
            { stepNumber: 2, textAr: 'في إسبرطة: الدولة تكرس كل مواردها لخلق جيش مشاة فولاذي لا يُقهر، مع تحريم الفلسفة والكماليات التجارية.', textEn: 'Sparta: Society functioned as a permanent military garrison prohibiting commercial luxury.' },
            { stepNumber: 3, textAr: 'النتيجة الحضارية: خلد التاريخ فلاسفة وعلماء أثينا، بينما تفوقت إسبرطة في المعارك البرية كمعركة ترموبيل.', textEn: 'Historical legacy: Athens shaped philosophy and civic democracy; Sparta defined land combat tactics.' }
          ],
          takeawayAr: 'التنافس بين أثينا وإسبرطة أظهر قدرة الحضارة الإنسانية على ابتداع نظم سياسية وعسكرية متباينة في بيئة جغرافية واحدة.',
          takeawayEn: 'Hellenic polarity demonstrated divergent paths of human organization: participatory civic culture versus total martial discipline.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-10-1',
          questionAr: 'ما هو الإنجاز التشريعي والمدني الأهم الذي خلّفته الحضارة الرومانية وشكل أساس القوانين الحديثة في العالم؟',
          questionEn: 'What was the paramount legislative achievement of Roman civilization that formed the basis of modern world legal systems?',
          optionsAr: ['القانون الروماني المكتوب', 'الألعاب الأولمبية الرياضية', 'الفلسفة السقراطية العقلية', 'المسرح التراجيدي اليوناني'],
          optionsEn: ['Codified Roman Law', 'Olympic Games', 'Socratic Philosophy', 'Greek Tragic Theatre'],
          correctIndex: 0,
          explanationAr: 'القانون الروماني المكتوب كان أعظم منجزات روما الحضارية والتي بنت عليها الدول الحديثة دساتيرها وقوانينها المدنية.',
          explanationEn: 'Codified Roman jurisprudence provided the foundational concepts for modern international and civil law.'
        }
      },
      {
        titleAr: '2. النظام الإقطاعي في أوروبا العصور الوسطى وطبقات المجتمع',
        titleEn: '2. The Medieval Feudal System and Social Stratification in Europe',
        contentAr: 'مع سقوط الإمبراطورية الرومانية الغربية عام 476م على يد القبائل الجرمانية، انهارت السلطة المركزية في أوروبا ودخلت القارة في "العصور الوسطى". وفي ظل الفوضى وغياب الأمن، تشكل "النظام الإقطاعي" (Feudalism)؛ وهو نظام اقتصادي وسياسي واجتماعي هرمي قائم على الأرض الزراعية. وتمثلت بنية الهرم الإقطاعي في: 1) الملك: وهو المالك النظري لجميع أراضي المملكة، لكنه في الواقع كان ضعيفاً يفوض حمايتها للنبلاء. 2) طبقة النبلاء والأمراء (أمراء الإقطاع): وهم كبار ملاك المقاطعات والقلاع الحصينة الذين امتلكوا الأراضي والجيوش الخاصة ومارسوا سلطات سيادية مطلقة كجباية الضرائب وإصدار الأحكام. 3) طبقة الفرسان (المحاربون): المحترفون العسكريون الذين تعهدوا بحماية الإقطاعية مقابل منحهم مساحات من الأراضي. 4) طبقة الفلاحين الأقنان (أقنان الأرض / Serfs): وهم الغالبية الساحقة من السكان الكادحين الذين عوملوا كأشباه عبيد؛ حيث رُبط القن بالأرض لا يحق له مغادرتها أو بيعها، وكان يزرع أرض النبيل بالسخرة ويقدم الجزء الأكبر من محصوله للسيد النبيل مقابل حمايته من هجمات قطاع الطرق والغزاة. وسيطرت الكنيسة الكاثوليكية في روما على الفكر والتعليم واحتكرت تفسير المعرفة، فعاشت أوروبا قروناً من الركود الفكري والعلمي حتى بزوغ عصر النهضة.',
        contentEn: 'Following the fall of Western Rome in 476 AD to Germanic tribes, central authority vanished across Western Europe, giving rise to medieval feudalism. Power fractured into a decentralized manorial hierarchy: 1) the Monarch, who theoretically held all territory; 2) Aristocratic Nobles and Barons, who governed fortified castles, commanded private armies, and exercised sovereign taxation; 3) Knights, the heavily armored warrior elite who provided military defense in exchange for land tenures (fiefs); and 4) Peasant Serfs, bound to the manorial soil, forced into unpaid labor (corvée), and surrendering harvest yields to their lords in return for protection. Dominated by ecclesiastical authority and intellectual conformity, medieval Europe stagnated until the Renaissance.',
        interactiveExample: {
          titleAr: 'تحليل طبقي: بنية الهرم الإقطاعي في أوروبا العصور الوسطى',
          titleEn: 'Sociological Analysis: The Medieval European Feudal Pyramid',
          equation: 'الملك (القمة الرمزية) -> كبار النبلاء والإقطاعيون (السلطة الحقيقية) -> الفرسان (القوة العسكرية) -> الأقنان (القاعدة الكادحة المحرومة)',
          steps: [
            { stepNumber: 1, textAr: 'النبلاء حازوا الأراضي والقلاع وجيوش الفرسان الخاصة، مما جعل سلطتهم تفوق سلطة الملوك المركزية.', textEn: 'Lords controlled agricultural land and castle fortresses, eclipsing royal power.' },
            { stepNumber: 2, textAr: 'الفرسان تعهدوا بالولاء العسكري للسيد النبيل للدفاع عن الإقطاعية ضد الغزوات المتكررة.', textEn: 'Knights pledged military fealty to lords in exchange for agricultural fief allocations.' },
            { stepNumber: 3, textAr: 'الأقنان في قاع الهرم قيدوا بالأرض ومُنعوا من التعليم أو التملك، وعاشوا في فقر مدقع محرومين من الحرية.', textEn: 'Serfs formed the disenfranchised base, legally bound to the soil and stripped of property ownership.' }
          ],
          takeawayAr: 'النظام الإقطاعي حصر الثروة والسلطة في يد قلة من النبلاء على حساب ملايين الفلاحين الأقنان المسلوبين.',
          takeawayEn: 'Feudalism concentrated wealth and armed power in a landed aristocracy while keeping the agrarian peasantry unfree.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-10-2',
          questionAr: 'ما اللقب الذي أُطلق في أوروبا العصور الوسطى على الفلاحين المرتبطين بالأرض الإقطاعية والمحرومين من الحرية الشخصية والتملك؟',
          questionEn: 'What term was used in medieval Europe for unfree peasant laborers bound to aristocratic landholdings?',
          optionsAr: ['أقنان الأرض (السرَف)', 'الفرسان المحاربون', 'البرجوازيون التجار', 'أباطرة الرومان'],
          optionsEn: ['Serfs', 'Knights', 'Bourgeois merchants', 'Roman emperors'],
          correctIndex: 0,
          explanationAr: 'أقنان الأرض هم الفلاحون المستعبدون الذين رُبطوا بإقطاعيات النبلاء وعملوا بالسخرة دون حقوق تملك.',
          explanationEn: 'Serfs were unfree agricultural laborers legally bound to the lord’s estate.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-10-assess',
      titleAr: 'اختبار تقييم المحاضرة 10: الحضارة الإغريقية والرومانية ونظام الإقطاع',
      titleEn: 'Assessment Lecture 10: Classical Civilizations and Feudalism',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h10-q1',
          textAr: 'ما المدينة-الدولة الإغريقية القديمة التي تميزت بنظامها الديمقراطي المباشر وازدهار الفلسفة والفنون والمسرح؟',
          textEn: 'Which ancient Greek polis was famed for its participatory democracy, philosophy, arts, and drama?',
          optionsAr: ['مدينة أثينا', 'مدينة إسبرطة', 'مدينة روما', 'مدينة طيبة'],
          optionsEn: ['Athens', 'Sparta', 'Rome', 'Thebes'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص أثينا الديمقراطية والفلسفية',
          conceptTestedEn: 'Athenian democracy and classical arts',
          explanationAr: 'أثينا كانت رائدة الديمقراطية والنهضة الفكرية والفلسفية في العالم الإغريقي القديم.',
          explanationEn: 'Athens pioneered direct democratic governance and nurtured classical philosophy.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h10-q2',
          textAr: 'في أي عام ميلادي سقطت الإمبراطورية الرومانية الغربية على يد القبائل الجرمانية مدشنة بداية العصور الوسطى في أوروبا؟',
          textEn: 'In which year did the Western Roman Empire collapse, inaugurating the European Middle Ages?',
          optionsAr: ['عام 476م', 'عام 1453م', 'عام 622م', 'عام 1492م'],
          optionsEn: ['476 AD', '1453 AD', '622 AD', '1492 AD'],
          correctIndex: 0,
          conceptTestedAr: 'سقوط روما الغربية وبداية العصور الوسطى',
          conceptTestedEn: 'Fall of Western Rome in 476 AD',
          explanationAr: 'سقطت الإمبراطورية الرومانية الغربية عام 476م إثر الغزوات الجرمانية وتفككت السلطة المركزية لصالح الإقطاع.',
          explanationEn: 'The collapse of Western Rome in 476 AD marks the conventional boundary of the medieval era.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h10-q3',
          textAr: 'ما الأساس الاقتصادي والاجتماعي الذي قام عليه النظام الإقطاعي في أوروبا العصور الوسطى؟',
          textEn: 'What was the foundational socioeconomic basis of medieval European feudalism?',
          optionsAr: ['ملكية النبلاء للأراضي الزراعية واستعباد الفلاحين الأقنان مقابل الحماية', 'الشركات التجارية المساهمة والمصارف المالية الحديثة', 'التصنيع الآلي والمصانع البخارية الكبرى', 'التوزيع العادل للثروة والأراضي على عموم الشعب بالتساوي'],
          optionsEn: ['Aristocratic land ownership and serf exploitation in exchange for protection', 'Joint-stock commercial corporations and modern banks', 'Industrial steam mechanization', 'Egalitarian distribution of wealth and land'],
          correctIndex: 0,
          conceptTestedAr: 'جوهر النظام الإقطاعي الأوروبي',
          conceptTestedEn: 'The core structure of European feudalism',
          explanationAr: 'قام الإقطاع على احتكار النبلاء للأراضي واستغلال الفلاحين الأقنان بالسخرة في غياب سلطة الدولة المركزية.',
          explanationEn: 'Feudalism was rooted in aristocratic control over agricultural manors worked by unfree serfs.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h10-q4',
          textAr: 'أي من فلاسفة اليونان التاليين يُعد معلماً لأفلاطون واشتهر بمنهجه الحواري السقراطي في البحث عن الحقيقة والفضيلة؟',
          textEn: 'Which Greek philosopher mentored Plato and is famous for the dialogical method seeking virtue and truth?',
          optionsAr: ['الفيلسوف سقراط', 'الإمبراطور أغسطس', 'المؤرخ هوميروس', 'القائد يوليوس قيصر'],
          optionsEn: ['Philosopher Socrates', 'Emperor Augustus', 'Historian Homer', 'General Julius Caesar'],
          correctIndex: 0,
          conceptTestedAr: 'فلاسفة اليونان وسقراط',
          conceptTestedEn: 'Greek philosophy and Socrates',
          explanationAr: 'سقراط هو فيلسوف الحوار والفضيلة العقلية وأستاذ أفلاطون في أثينا الكلاسيكية.',
          explanationEn: 'Socrates was the foundational moral philosopher of classical Athens whose dialogues inspired Plato.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // المحاضرة 11: عصر النهضة الأوربية وحركة الكشوف الجغرافية
  {
    id: 'sd-g10-hist-11',
    order: 11,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - التاريخ (الصف الأول الثانوي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 10 History (Bakht Al-Ruda)',
    ministryAr: 'وزارة التعليم والتربية الوطنية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Ministry of National Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الرابعة: من التاريخ الإنساني (أوروبا)',
    unitTitleEn: 'Unit 4: From Human History (Europe)',
    lessonNumberAr: 'الدروس 3 و 4: عصر النهضة الأوربية وحركة الكشوف الجغرافية',
    lessonNumberEn: 'Lessons 3 & 4: The European Renaissance and the Age of Discovery',
    titleAr: 'المحاضرة 11: عصر النهضة الأوربية وحركة الكشوف الجغرافية ونتائجها العالمية',
    titleEn: 'Lecture 11: The European Renaissance, Age of Discovery, and Global Ramifications',
    subtitleAr: 'أثر الحضارة الإسلامية في الأندلس وصقلية، اختراع الطباعة (1440م)، رحلات كولومبوس ودا جاما، وتحول التجارة العالمية',
    subtitleEn: 'Islamic contributions via Andalusia and Sicily, Gutenberg’s printing press, voyages of Columbus and Da Gama, and global trade shift.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في عام 1498م، استعان البحار البرتغالي فاسكو دا جاما في سواحل شرق إفريقيا بالبحار العربي الشهير "أحمد بن ماجد" وخرائطه وبوصلته الملاحية ليقود أسطوله عبر أمواج المحيط الهندي العاتية حتى وصل إلى الهند! كيف استيقظت أوروبا من ظلمات الإقطاع عبر ترجمة أمهات كتب العلماء المسلمين في الأندلس وصقلية؟ وما هو دور اختراع الطباعة لغوتنبرغ عام 1440م وسقوط القسطنطينية عام 1453م في إشعال النهضة؟ وكيف غيرت رحلة كولومبوس عام 1492م خريطة العالم ومصير إفريقيا؟',
    warmupHookEn: 'In 1498 AD, Portuguese explorer Vasco da Gama crossed the Indian Ocean to India guided by celebrated Arab navigator Ahmad ibn Majid and Islamic nautical charts. Discover how the transmission of Arab-Islamic philosophy, Gutenberg’s printing press, and maritime voyages altered world history.',
    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم عصر النهضة الأوربية وأسباب انطلاقها من المدن الإيطالية (فلورنسا والبندقية).',
      'أن يحلل أثر الحضارة العربية الإسلامية في الأندلس وصقلية في يقظة الفكر الأوروبي العلمي والفلسفي.',
      'أن يبين دور اختراع الطباعة على يد غوتنبرغ (1440م) وسقوط القسطنطينية (1453م) في نشر النهضة.',
      'أن يتتبع دوافع ومسارات حركة الكشوف الجغرافية (البرتغالية: دياز ودا جاما، والإسبانية: كولومبوس وماجلان).',
      'أن يستنتج النتائج السياسية والاقتصادية والعلمية الكبرى للكشوف الجغرافية على إفريقيا والعالم العربي وتجارة البحر المتوسط.'
    ],
    learningOutcomesEn: [
      'Define the European Renaissance and explain its origins in Italian city-states (Florence, Venice).',
      'Analyze the decisive impact of Arab-Islamic philosophy and science transmitted through Andalusia and Sicily.',
      'Evaluate Gutenberg’s printing press (1440) and the fall of Constantinople (1453) in democratizing knowledge.',
      'Trace major maritime voyages of discovery: Portuguese (Dias, Da Gama) and Spanish (Columbus, Magellan).',
      'Synthesize global geopolitical and economic outcomes of geographic discoveries on Africa, the Mamluks, and Atlantic trade.'
    ],
    keyConceptsAr: [
      'عصر النهضة الأوربية: انطلق في القرن 14م من إيطاليا، وتميز بتمجيد العقل والنزعة الإنسانية وإحياء التراث والعلوم',
      'معابر التأثير العربي الإسلامي: مدن الأندلس (قرطبة وطليطلة وغرناطة) وصقلية والحروب الصليبية ونقل كتب ابن رشد وابن سينا والخوارزمي',
      'اختراع الطباعة (1440م): ابتكرها يوحنا غوتنبرغ بالحروف المعدنية المتحركة، مما أحدث ثورة معرفية بنشر ملايين الكتب',
      'سقوط القسطنطينية (1453م): فتحها السلطان العثماني محمد الفاتح، وهجرة العلماء البيزنطيين بمخطوطاتهم إلى إيطاليا',
      'دوافع الكشوف الجغرافية: اقتصادية (الوصول لتوابل وذهب الشرق وتجاوز احتكار المسلمين والمماليك) ودينية وعلمية (البوصلة والأسطرلاب)',
      'الرحلات الكبرى: بارثولوميو دياز (رأس الرجاء الصالح 1488م)، كريستوفر كولومبوس (أمريكا 1492م)، وفاسكو دا جاما (الهند 1498م بمساعدة أحمد بن ماجد)',
      'النتائج العالمية: تحول التجارة من المتوسط والأحمر للمحيط الأطلسي، تدهور دولة المماليك، وتدفق الذهب، وبدء الاستعمار وتجارة الرقيق'
    ],
    keyConceptsEn: [
      'European Renaissance: 14th-century cultural rebirth centered on humanism, secular inquiry, and empiricism',
      'Arab-Islamic Conduits: Transmission of Ibn Rushd, Ibn Sina, and Al-Khwarizmi via Andalusia (Toledo) and Sicily',
      'Gutenberg Printing Press (1440 AD): Movable type democratization of publishing and mass literacy',
      'Fall of Constantinople (1453 AD): Ottoman conquest driving Greek scholars and classical codices to Italy',
      'Motives for Exploration: Bypassing Mamluk-Ottoman monopoly on spice routes, bullion thirst, and nautical science',
      'Key Expeditions: Dias (Cape of Good Hope 1488), Columbus (Americas 1492), Da Gama (India 1498 with Ibn Majid), Magellan',
      'Global Consequences: Mediterranean commercial decline, rise of Atlantic maritime empires, bullion influx, and transatlantic slave trade'
    ],
    vocabulary: [
      { termAr: 'عصر النهضة الأوربية', termEn: 'European Renaissance', definitionAr: 'حركة تجديد فكري وثقافي وفني شاملة انطلقت من إيطاليا في القرن 14م، اعتمدت على إحياء العلوم والنزعة الإنسانية والترجمات العربية.' },
      { termAr: 'آلة الطباعة لغوتنبرغ (1440م)', termEn: 'Gutenberg Printing Press', definitionAr: 'اختراع ثوري بالحروف المعدنية المتحركة ابتكره يوحنا غوتنبرغ في ألمانيا، أتاح طباعة الكتب بسرعة فائقة وبأسعار ميسرة.' },
      { termAr: 'حركة الكشوف الجغرافية', termEn: 'Age of Discovery', definitionAr: 'رحلات استكشافية بحرية كبرى قادتها البرتغال وإسبانيا في القرنين 15 و16م للوصول إلى الهند والشرق وتجاوز خطوط التجارة الإسلامية.' }
    ],
    summaryAr: 'ملخص الدرس: انطلق عصر النهضة في أوروبا بفضل تأثير العلوم العربية الإسلامية في الأندلس وصقلية واختراع الطباعة وسقوط القسطنطينية. وقادت النهضة حركة الكشوف الجغرافية الكبرى للبرتغال وإسبانيا؛ فاكتشف كولومبوس أمريكا (1492م) ووصل دا جاما للهند (1498م)، مما حول مركز التجارة العالمية من البحر المتوسط للأطلسي وبدأ عهد الاستعمار.',
    summaryEn: 'Summary: The European Renaissance was catalyzed by Arab-Islamic scientific translations from Andalusia and Sicily, Gutenberg’s printing press, and the fall of Constantinople. This revival spurred oceanic expeditions: Columbus encountered the Americas (1492) and Vasco da Gama circumnavigated Africa to India (1498), shifting global commerce from the Mediterranean to the Atlantic and inaugurating modern colonialism.',
    sections: [
      {
        titleAr: '1. عوامل قيام عصر النهضة الأوربية وأثر الحضارة العربية الإسلامية',
        titleEn: '1. Catalysts of the European Renaissance and the Arab-Islamic Impact',
        contentAr: 'بدأ عصر النهضة الأوربية في مطلع القرن الرابع عشر الميلادي من المدن الإيطالية المزدهرة تجارياً (كفلورنسا والبندقية وجنوة)، وتميزت بإحياء الاهتمام بالنزعة الإنسانية وتمجيد العقل والتجربة بدلاً من الجمود الكنسي الإقطاعي. وتضافرت أربعة عوامل حاسمة لإشعال النهضة: أولاً: الأثر الحاسم للحضارة العربية الإسلامية؛ حيث شكلت مراكز الإشعاع الحضاري الإسلامي في الأندلس (قرطبة وطليطلة) وجامعات صقلية والحروب الصليبية الجسور الكبرى التي نقلت المعرفة لأوروبا؛ فترجم الأوروبيون أمهات مؤلفات ابن رشد في الفلسفة، وابن سينا في الطب، والخوارزمي في الجبر والأرقام العربية، وابن الهيثم في البصريات، والإدريسي في الجغرافيا. ثانياً: اختراع الطباعة بالحروف المعدنية المتحركة على يد الألماني يوحنا غوتنبرغ حوالي عام 1440م؛ مما أحدث انفجاراً معرفياً بطباعة آلاف الكتب بسرعة قياسية وبتكلفة زهيدة، كاسراً احتكار الكنيسة للتعليم. ثالثاً: فتح القسطنطينية عام 1453م على يد السلطان العثماني محمد الفاتح، مما أدى لهجرة العلماء البيزنطيين بمخطوطاتهم الإغريقية القديمة إلى إيطاليا. ورابعاً: نمو المدن التجارية وظهور طبقة البرجوازية الغنية التي رعت العلماء والفنانين مثل ليوناردو دافنشي ومايكل أنجلو.',
        contentEn: 'The Renaissance emerged in 14th-century northern Italian mercantile cities (Florence, Venice, Genoa), celebrating humanism, empirical observation, and secular scholarship. Four foundational catalysts fueled this rebirth: 1) the decisive impact of Arab-Islamic scholarship transmitted via translation academies in Toledo (Andalusia) and Sicily, conveying Ibn Rushd’s commentaries, Ibn Sina’s medical canons, Al-Khwarizmi’s algebra, and Al-Haytham’s optics; 2) Johannes Gutenberg’s invention of the movable type printing press in 1440, democratizing mass book production and ending ecclesiastical monopolies on literacy; 3) the 1453 Ottoman conquest of Constantinople by Mehmed II, driving Byzantine scholars and classical Greek codices to Italy; and 4) rising commercial wealth among merchant patricians who patronized polymaths like Leonardo da Vinci and Michelangelo.',
        interactiveExample: {
          titleAr: 'تحليل تراكمي: معابر انتقال العلوم العربية والإسلامية إلى أوروبا عصر النهضة',
          titleEn: 'Cumulative Analysis: Transmission Routes of Arab-Islamic Science to Europe',
          equation: 'مكتبات قرطبة وطليطلة وصقلية + حركة الترجمة اللاتينية (قرن 12 و13م) = صحوة العقل الأوروبي وانطلاق عصر النهضة',
          steps: [
            { stepNumber: 1, textAr: 'في الأندلس وصقلية: فتح المسلمون الجامعات والمكتبات التي حوت ملايين المجلدات في الفلسفة والطب والرياضيات.', textEn: 'In Andalusia and Sicily: Islamic universities preserved and expanded global science across millions of manuscripts.' },
            { stepNumber: 2, textAr: 'حركة الترجمة في طليطلة: عكف علماء مسيحيون ويهود ومسلمون على ترجمة كتب الخوارزمي وابن سينا وابن رشد إلى اللاتينية.', textEn: 'Toledo translation schools translated works of Al-Khwarizmi, Avicenna, and Averroes into Latin.' },
            { stepNumber: 3, textAr: 'أصبحت هذه الكتب المترجمة المقررات الإلزامية في جامعات باريس وأكسفورد وبولونيا ومونتبلييه لعدة قرون.', textEn: 'These translations served as foundational textbooks at Paris, Oxford, and Bologna for centuries.' }
          ],
          takeawayAr: 'الحضارة الغربية الحديثة قامت على أسس البناء العلمي والتجريبي للحضارة العربية الإسلامية.',
          takeawayEn: 'Modern Western civilization was structurally built upon Arab-Islamic empirical and philosophical scientific foundations.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-11-1',
          questionAr: 'ما هو الاختراع الهام الذي ابتكره يوحنا غوتنبرغ عام 1440م وأسهم بشكل حاسم في سرعة نشر أفكار عصر النهضة؟',
          questionEn: 'Which monumental invention by Johannes Gutenberg in 1440 critically accelerated the spread of Renaissance thought?',
          optionsAr: ['آلة الطباعة بالحروف المعدنية المتحركة', 'المحرك البخاري', 'التلسكوب الفلكي العاكس', 'البوصلة الملاحية الجافة'],
          optionsEn: ['Movable type printing press', 'Steam engine', 'Reflecting astronomical telescope', 'Dry mariner compass'],
          correctIndex: 0,
          explanationAr: 'أحدث اختراع آلة الطباعة لغوتنبرغ ثورة معرفية بطباعة آلاف الكتب ونشر الأفكار في عموم أوروبا.',
          explanationEn: 'Gutenberg’s movable type press democratized knowledge access, catalyzing the rapid spread of the Renaissance.'
        }
      },
      {
        titleAr: '2. حركة الكشوف الجغرافية الكبرى (البرتغالية والإسبانية) ونتائجها العالمية',
        titleEn: '2. The Age of Discovery: Portuguese and Spanish Voyages and Global Impacts',
        contentAr: 'شهد القرنان الخامس عشر والسادس عشر انطلاق "حركة الكشوف الجغرافية" بدوافع متعددة: 1) دافع اقتصادي: رغبة ملوك أوروبا وتجارها في الوصول إلى ثروات وتوابل الهند وحرير الصين مباشرة دون المرور بأراضي المسلمين ودون دفع المكوس الباهظة لدولة المماليك في مصر والشام. 2) دافع ديني: تطويق العالم الإسلامي ونشر المسيحية. 3) دافع علمي: تطور علوم الملاحة وصناعة السفن واستخدام البوصلة والأسطرلاب والخرائط التي طورها المسلمون. وقادت حركتَين استكشافيتين رئيسيتين: أولاً: الكشوف البرتغالية: اتجهت للدوران حول إفريقيا؛ فوصل بارثولوميو دياز إلى رأس الرجاء الصالح عام 1488م، ونجح فاسكو دا جاما عام 1498م في الوصول إلى الهند بمساعدة وتوجيه الملاح والبحار العربي الشهير "أحمد بن ماجد". ثانياً: الكشوف الإسبانية: اتجهت غرباً في المحيط الأطلسي لإثبات كروية الأرض؛ فأبحر كريستوفر كولومبوس عام 1492م ووصل إلى جزر البهاما وأمريكا معتقداً أنه وصل للهند، ثم دارت رحلة ماجلان وإلكانو حول الأرض (1519 - 1522م). وأحدثت الكشوف الجغرافية نتائج زلزالية غيرت مسار التاريخ: 1) تحول مركز التجارة الدولية من حوض البحر الأبيض المتوسط والبحر الأحمر إلى المحيط الأطلسي؛ مما أدى لانهيار اقتصاد دولة المماليك وسقوطها بيد العثمانيين (1517م). 2) تدفق هائل لسبائك الفضة والذهب من أمريكا إلى أوروبا. 3) نشوء الإمبراطوريات الاستعمارية وبدء مأساة "تجارة الرقيق الإفريقية" عبر الأطلسي لنقل ملايين الأفارقة للعمل بالسخرة في مزارع العالم الجديد.',
        contentEn: 'During the 15th and 16th centuries, the Age of Discovery was propelled by convergent incentives: economic desires to bypass Mamluk customs and trade directly with Asian spice markets; religious missionary zeal; and advancements in nautical science (caravels, compasses, astrolabes, and cartography perfected by Muslim navigators). Portugal pioneered the eastward maritime route around Africa: Bartolomeu Dias rounded the Cape of Good Hope (1488), and Vasco da Gama crossed to Calicut in India (1498) guided by legendary Arab pilot Ahmad ibn Majid. Concurrently, Spain financed westward navigation: Christopher Columbus made landfall in the Americas (1492), followed by Ferdinand Magellan’s circumnavigation (1519–1522). These oceanic voyages wrought seismic global transformations: international trade diverted from the Mediterranean and Red Sea to the Atlantic, collapsing Mamluk commercial revenues; silver and gold flooded European capitals; and colonial expansion triggered the horrific transatlantic slave trade.',
        interactiveExample: {
          titleAr: 'تحليل استراتيجي: كيف ساهمت العلوم الملاحية العربية في نجاح فاسكو دا جاما عام 1498م؟',
          titleEn: 'Strategic Analysis: Arab Nautical Science and Vasco da Gama’s 1498 Breakthrough',
          equation: 'سفن الكارافيل البرتغالية + بوصلة وأسطرلاب العرب + مهارة وخبرة الملاح العماني أحمد بن ماجد = فتح طريق رأس الرجاء الصالح للهند',
          steps: [
            { stepNumber: 1, textAr: 'في ماليندي (ساحل إفريقيا الشرقي)، كان أسطول دا جاما عاجزاً عن عبور المحيط الهندي بسبب الرياح الموسمية والمياه المجهولة.', textEn: 'At Malindi on the East African coast, Da Gama’s fleet was stranded, unable to navigate Indian Ocean monsoons.' },
            { stepNumber: 2, textAr: 'استعان دا جاما بالملاح العربي "أسد البحار" أحمد بن ماجد ومخطوطاته "الفوائد في أصول علم البحر والقواعد" وأدواته الفلكية.', textEn: 'Da Gama enlisted master Arab navigator Ahmad ibn Majid, employing his nautical compasses and treatises.' },
            { stepNumber: 3, textAr: 'قاد ابن ماجد الأسطول ببراعة ملاحية فائقة حتى أوصله بسلام إلى ميناء كاليكوت بالهند.', textEn: 'Ibn Majid masterfully piloted the Portuguese flotilla across open ocean waters directly to Calicut in India.' }
          ],
          takeawayAr: 'الكشوف الجغرافية الأوروبية كانت ثمرة استثمار علوم الملاحة والفلك والخرائط التي أبدعها علماء العرب والمسلمين.',
          takeawayEn: 'European maritime breakthroughs were deeply indebted to accumulated Arab-Islamic nautical and navigational science.'
        },
        formativeCheck: {
          id: 'sd-g10-hist-fc-11-2',
          questionAr: 'من هو البحار والملاح العربي الشهير الذي أرشد وقاد أسطول فاسكو دا جاما من شرق إفريقيا إلى موانئ الهند عام 1498م؟',
          questionEn: 'Which famous Arab master navigator guided Vasco da Gama’s fleet from East Africa across to India in 1498?',
          optionsAr: ['أحمد بن ماجد', 'ابن بطوطة', 'الإدريسي', 'سليمان المهري'],
          optionsEn: ['Ahmad ibn Majid', 'Ibn Battuta', 'Al-Idrisi', 'Sulaiman al-Mahri'],
          correctIndex: 0,
          explanationAr: 'استعان فاسكو دا جاما بالملاح العماني الفلكي الشهير أحمد بن ماجد لقيادة سفنه عبر المحيط الهندي إلى كاليكوت بالهند.',
          explanationEn: 'Celebrated Arab master mariner Ahmad ibn Majid piloted Da Gama’s fleet across the Indian Ocean to Calicut.'
        }
      }
    ],
    assessment: {
      id: 'sd-g10-hist-11-assess',
      titleAr: 'اختبار تقييم المحاضرة 11: عصر النهضة والكشوف الجغرافية',
      titleEn: 'Assessment Lecture 11: Renaissance and the Age of Discovery',
      passingScore: 80,
      questions: [
        {
          id: 'sd-h11-q1',
          textAr: 'في أي عام ميلادي قام الرحالة كريستوفر كولومبوس برحلته البحرية الشهيرة التي وصل فيها إلى جزر القارة الأمريكية؟',
          textEn: 'In which year did Christopher Columbus make his historic transatlantic voyage reaching the Americas?',
          optionsAr: ['عام 1492م', 'عام 1453م', 'عام 1498م', 'عام 1517م'],
          optionsEn: ['1492 AD', '1453 AD', '1498 AD', '1517 AD'],
          correctIndex: 0,
          conceptTestedAr: 'تاريخ رحلة كريستوفر كولومبوس',
          conceptTestedEn: 'Date of Columbus’s transatlantic voyage',
          explanationAr: 'أبحر كولومبوس برعاية ملكية إسبانية عام 1492م ووصل إلى جزر البهاما، فاتحاً الباب لاستعمار القارة الأمريكية.',
          explanationEn: 'Christopher Columbus reached the Americas under Spanish royal patronage in 1492 AD.',
          difficulty: 'easy'
        },
        {
          id: 'sd-h11-q2',
          textAr: 'ما الأثر الاقتصادي الاستراتيجي المباشر لحركة الكشوف الجغرافية على دولة المماليك في مصر والشام؟',
          textEn: 'What was the immediate strategic economic consequence of geographic discoveries on the Mamluk Sultanate in Egypt and Syria?',
          optionsAr: ['تحول طرق التجارة العالمية إلى طريق رأس الرجاء الصالح مما أدى لانهيار موارد المماليك الاقتصادية وسقوط دولتهم', 'مضاعفة أرباح تجارة المماليك وازدهار موانئ الإسكندرية وجدة', 'توقف تجارة الذهب بين إفريقيا وأوروبا نهائياً', 'انتقال عاصمة المماليك إلى سواحل المحيط الأطلسي'],
          optionsEn: ['Shift of trade routes to Cape of Good Hope, collapsing Mamluk transit revenues and causing their fall', 'Doubling of Mamluk profits', 'Complete cessation of African gold trade', 'Relocating Mamluk capital to the Atlantic'],
          correctIndex: 0,
          conceptTestedAr: 'أثر الكشوف الجغرافية على دولة المماليك',
          conceptTestedEn: 'Economic impact of discoveries on Mamluk state',
          explanationAr: 'أدى اكتشاف طريق رأس الرجاء الصالح إلى تجاوز موانئ المماليك في البحر المتوسط والأحمر مما أفقر خزانتهم وسرّع بسقوطهم.',
          explanationEn: 'Circumnavigating Africa diverted spice routes away from Egypt and Syria, bankrupting the Mamluk Sultanate.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h11-q3',
          textAr: 'أي من المراكز التالية كان المعبر الحضاري الأكبر الذي انتقلت عبره علوم الفلسفة والطب والرياضيات العربية والإسلامية إلى أوروبا؟',
          textEn: 'Which of the following was the premier cultural conduit transmitting Arab-Islamic science and philosophy to Europe?',
          optionsAr: ['مدن الأندلس (طليطلة وقرطبة) وجزيرة صقلية', 'إسكندنافيا وشمال أوروبا', 'روسيا القيصرية وبحر البلطيق', 'جزر بريطانيا وأيرلندا'],
          optionsEn: ['Andalusian cities (Toledo and Cordoba) and Sicily', 'Scandinavia and northern Europe', 'Tsarist Russia and Baltic Sea', 'British Isles and Ireland'],
          correctIndex: 0,
          conceptTestedAr: 'معابر انتقال الحضارة الإسلامية إلى أوروبا',
          conceptTestedEn: 'Transmission routes of Islamic civilization to Europe',
          explanationAr: 'كانت مدن الأندلس وصقلية هي الجسور الكبرى التي ترجم فيها الأوروبيون أمهات الكتب العربية للاتينية وأطلقت النهضة.',
          explanationEn: 'Andalusia and Sicily represented the historic intellectual bridge transmitting Islamic science into Western Europe.',
          difficulty: 'medium'
        },
        {
          id: 'sd-h11-q4',
          textAr: 'من هو البحار والمستكشف البرتغالي الذي نجح عام 1498م في الوصول إلى موانئ الهند بالدوران حول قارة إفريقيا؟',
          textEn: 'Which Portuguese explorer succeeded in 1498 in reaching Indian ports by circumnavigating the African continent?',
          optionsAr: ['فاسكو دا جاما', 'بارثولوميو دياز', 'الأمير هنري الملاح', 'فرديناند ماجلان'],
          optionsEn: ['Vasco da Gama', 'Bartolomeu Dias', 'Prince Henry the Navigator', 'Ferdinand Magellan'],
          correctIndex: 0,
          conceptTestedAr: 'رحلة فاسكو دا جاما للهند 1498م',
          conceptTestedEn: 'Vasco da Gama’s 1498 voyage to India',
          explanationAr: 'قاد فاسكو دا جاما أسطوله حول رأس الرجاء الصالح وعبر المحيط الهندي بمساعدة أحمد بن ماجد ليصل لكاليكوت عام 1498م.',
          explanationEn: 'Vasco da Gama completed the maritime route around Africa to Calicut in 1498 AD.',
          difficulty: 'hard'
        }
      ]
    }
  }
];
