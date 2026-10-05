import type { Lecture } from '../types';

// ============================================================================
// ARAB REPUBLIC OF EGYPT - MINISTRY OF EDUCATION
// جمهورية مصر العربية - وزارة التربية والتعليم والتعليم الفني
// مناهج التاريخ والجغرافيا المعتمدة للصف الأول الثانوي
// ============================================================================

export const EGYPT_HIGH_HISTORY_G10_LECTURES: Lecture[] = [
  {
    id: 'eg-g10-hist-1',
    order: 1,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'EG',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية مصر العربية - تاريخ مصر والعالم القديم (الصف الأول الثانوي)',
    gradeLevelNameEn: 'Arab Republic of Egypt - Ancient History (Grade 10)',
    ministryAr: 'وزارة التربية والتعليم والتعليم الفني - جمهورية مصر العربية',
    ministryEn: 'Ministry of Education and Technical Education - Egypt',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: مدخل لدراسة حضارة مصر والعالم القديم',
    unitTitleEn: 'Unit 1: Introduction to Ancient Civilizations',
    lessonNumberAr: 'الدرس 1 و 2: الحضارة والتاريخ ومصادر دراسة الحضارات',
    lessonNumberEn: 'Lessons 1 & 2: Civilization, History & Primary Sources',
    titleAr: 'المحاضرة 1: مفهوم الحضارة والتاريخ ومصادر دراسة الحضارات وعوامل قيامها',
    titleEn: 'Lecture 1: Concepts of Civilization, Primary Sources, and Origins of Civilizations',
    subtitleAr: 'أهمية دراسة التاريخ، والتمييز بين المصادر الأولية والمراجع، ودور نهر النيل والموقع المتميز في نشأة الحضارة المصرية',
    subtitleEn: 'Study of historical significance, primary vs secondary archaeological sources, and Nile geographical determinants.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تقف أمام صلاية الملك نعرمر أو تتأمل نقوش حجر باليرمو وبردية إيبرس الطبية، هل تعلم كيف استطاع علماء المصريات إعادة كتابة آلاف السنين من التاريخ بدقة متناهية؟ ولماذا اعتبر المؤرخون القدماء أن التاريخ ليس مجرد سرد للماضي بل ميزان لبناء الحاضر والمستقبل؟',
    warmupHookEn: 'Exploring the Narmer Palette, Palermo Stone, and Ebers Papyrus reveals how primary epigraphic and papyrological evidence formed our understanding of Egyptian antiquity.',
    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم الحضارة والتاريخ والهدف من دراسته (استخلاص العبر وتجنب التعصب).',
      'أن يميز بدقة بين المصادر الأولية (الآثار، النقوش، البرديات، الأوستراكا، والمسكوكات) والمراجع الثانوية.',
      'أن يحلل عوامل قيام الحضارة المصرية القديمة (نهر النيل، الموقع، المناخ، الموارد الطبيعية، وكفاح الإنسان المصري).'
    ],
    learningOutcomesEn: [
      'Understand the concepts of civilization, historiography, and global cross-cultural tolerance.',
      'Differentiate between primary archaeological records (papyri, ostraca, inscriptions) and secondary sources.',
      'Analyze the core geographical and human factors behind ancient Egyptian civilization.'
    ],
    keyConceptsAr: ['المصادر الأولية', 'النقوش الغائرة والبارزة', 'الأوستراكا', 'حجر باليرمو', 'صلاية نعرمر', 'كفاح الإنسان المصري'],
    keyConceptsEn: ['Primary Sources', 'Incised & Raised Reliefs', 'Ostraca', 'Palermo Stone', 'Narmer Palette', 'Egyptian Human Endeavor'],
    vocabulary: [
      { termAr: 'المصادر الأولية', termEn: 'Primary Sources', definitionAr: 'كل ما كتب أو نُقش وينتمي لعصر وقوع الحدث التاريخي وتتميز بالدقة والموضوعية.' },
      { termAr: 'الأوستراكا', termEn: 'Ostraca', definitionAr: 'كسرات الفخار والحجارة المكتوب عليها، وكانت تستخدمها الطبقات المتوسطة والفقيرة في مصر القديمة كبديل رخيص للبردي.' }
    ],
    sections: [
      {
        titleAr: 'مفهوم الحضارة والتاريخ وأهمية دراسته',
        titleEn: 'Concept of Civilization and Historiography',
        contentAr: 'الحضارة هي ثمرة أي مجهود يقوم به الإنسان نتيجة تفاعله مع البيئة لتحسين ظروف حياته مادياً ومعنوياً. أما التاريخ فهو علم يتناول النشاط الإنساني في كافة الأزمنة المختلفة لمعرفة الماضي وفهم الحاضر واستشراف المستقبل. ومن أهدافه: استخلاص العبر، إبراز القدوات الصالحة، تنمية الشعور بالمسؤولية، والابتعاد عن التعصب؛ فالحضارات تواصلت وتكاملت ولم تتصارع.',
        contentEn: 'Civilization is the fruit of human endeavor through interaction with the environment to elevate material and moral conditions. History is the science of human activity across epochs to comprehend the past, navigate the present, and anticipate the future. Core goals include learning from historical precedents, highlighting righteous role models, cultivating civic responsibility, and rejecting prejudice—civilizations interacted and complemented one another rather than clashing.'
      },
      {
        titleAr: 'المصادر الأولية والمراجع لدراسة الحضارات',
        titleEn: 'Primary Sources and Secondary References',
        contentAr: 'تنقسم مصادر دراسة الحضارات إلى:\n1. المصادر الأولية: وتشمل الآثار (المباني والأهرامات والمومياوات والتمائم)، النقوش بنوعيها: الغائرة (مثل حجر باليرمو الذي يخلد أسماء من حكموا مصر من عصر ما قبل الأسرات حتى ثالث ملوك الأسرة الخامسة) والبارزة (مثل صلاية الملك نعرمر لتوحيد القطرين)، البرديات (مثل بردية إيبرس الطبية)، الأوستراكا، النقود والمسكوكات، وكتابات المؤرخين المعاصرين (مثل مانيتون وهيرودوت).\n2. المراجع الثانوية: المؤلفات والبحوث التي كُتبت بعد مرور سنوات عديدة معتمدة على المصادر الأصلية.',
        contentEn: 'Sources for studying civilizations are categorized into: 1. Primary sources: physical antiquities (monuments, mummies, amulets), inscriptions (sunken reliefs like the Palermo Stone listing rulers from predynastic times through Dynasty 5, and raised reliefs such as King Narmer Palette commemorating the dual unification), papyri (Ebers medical papyrus), ostraca, coinage, and contemporary historical chronicles (Manetho, Herodotus). 2. Secondary references: later research and literature based on original primary records.'
      }
    ],
    assessment: {
      id: 'eg-hist-q-1',
      titleAr: 'تقييم تاريخ مصر القديم: مصادر الحضارة وعوامل قيامها',
      titleEn: 'Assessment: Ancient Egyptian Sources & Civilization Drivers',
      passingScore: 80,
      questions: [
        {
          id: 'eg-h-q1',
          textAr: 'أي من المصادر التاريخية التالية يُعد مصدراً أولياً لدراسة الأحداث السياسية للأسرة الأولى في مصر القديمة؟',
          textEn: 'Which historical source represents a primary document for studying First Dynasty politics?',
          optionsAr: ['صلاية الملك نعرمر', 'كتاب شخصية مصر لجمال حمدان', 'أشعار هوميروس', 'كتابات الفلاسفة اليونانيين'],
          optionsEn: ['Narmer Palette', 'Personality of Egypt by Gamal Hemdan', 'Homeric Epics', 'Greek Philosophical Treatises'],
          correctIndex: 0,
          conceptTestedAr: 'المصادر الأولية والنقوش البارزة للأسرة الأولى',
          conceptTestedEn: 'Primary epigraphic sources for Dynasty 1',
          explanationAr: 'صلاية الملك نعرمر من حجر الشيست الأخضر هي نقش بارز ينتمي للأسرة الأولى ويصور توحيد مصر عام 3200 ق.م بدقة تاريخية بالغة.',
          explanationEn: 'The Narmer Palette is a primary epigraphic monument recording the unification of Egypt under Dynasty 1.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'eg-g10-hist-2',
    order: 2,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'EG',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية مصر العربية - تاريخ مصر والعالم القديم (الصف الأول الثانوي)',
    gradeLevelNameEn: 'Arab Republic of Egypt - Ancient History (Grade 10)',
    ministryAr: 'وزارة التربية والتعليم والتعليم الفني - جمهورية مصر العربية',
    ministryEn: 'Ministry of Education and Technical Education - Egypt',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثانية: حضارة مصر القديمة (الفرعونية)',
    unitTitleEn: 'Unit 2: Ancient Egyptian Civilization',
    lessonNumberAr: 'الدرس 1: ملامح من تاريخ مصر القديمة (العصور التاريخية)',
    lessonNumberEn: 'Lesson 1: Historical Epochs of Ancient Egypt',
    titleAr: 'المحاضرة 2: العصور التاريخية لمصر القديمة: من توحيد القطرين حتى عصر المجد الحربي',
    titleEn: 'Lecture 2: Historical Eras: From Dynastic Unification to the New Kingdom Empire',
    subtitleAr: 'العصر العتيق، عصر بناة الأهرام، عصر الرخاء الاقتصادي، طرد الهكسوس، وتأسيس أول إمبراطورية مصرية في التاريخ',
    subtitleEn: 'Old Kingdom pyramid builders, Middle Kingdom economic resurgence, and New Kingdom military triumph.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'كيف استطاع ملوك مصر في الدولة الوسطى تحويل مصر إلى سلة غذاء العالم القديم بإنشاء سد اللاهون وشق قناة سيزوستريس؟ وكيف نهضت الدولة الحديثة بعد حرب التحرير المجيدة بقيادة أحمس لتؤسس إمبراطورية تمتد من الفرات شمالاً إلى الشلال الرابع جنوباً؟',
    warmupHookEn: 'From Senusret III digging the Sesostris canal to Ahmose liberating Egypt from the Hyksos, trace how ancient Egyptian resilience established history\'s first superpower.',
    learningOutcomesAr: [
      'أن يحلل الطالب خصائص عصور القوة (الدولة القديمة، الوسطى، والحديثة) وأسباب عصور الاضمحلال.',
      'أن يوضح إنجازات ملوك الدولة الوسطى (سنوسرت الثالث وأمنمحات الثالث).',
      'أن يفسر أسباب تكوين الإمبراطورية المصرية في عهد تحتمس الثالث ورمسيس الثاني.'
    ],
    learningOutcomesEn: [
      'Trace cycles of prosperity and decay across dynasties.',
      'Assess economic infrastructure of the Middle Kingdom.',
      'Examine military strategies of Thutmose III and Ramses II.'
    ],
    keyConceptsAr: ['عصر الرخاء الاقتصادي', 'سد اللاهون', 'قناة سيزوستريس', 'معركة مجدو', 'معاهدة قادش للسلام'],
    keyConceptsEn: ['Economic Flourishing Era', 'Lahun Dam', 'Sesostris Canal', 'Battle of Megiddo', 'Treaty of Kadesh'],
    vocabulary: [
      { termAr: 'قناة سيزوستريس', termEn: 'Canal of the Pharaohs', definitionAr: 'أقدم طريق مائي اصطناعي ربط بين البحر الأحمر ونهر النيل، شقها الملك سنوسرت الثالث لتنشيط التجارة مع بلاد بونت وجزر البحر المتوسط.' }
    ],
    sections: [
      {
        titleAr: 'الدولة الوسطى (عصر الرخاء الاقتصادي)',
        titleEn: 'Middle Kingdom Economic Flourishing',
        contentAr: 'اهتم ملوك الدولة الوسطى بالمشروعات الاقتصادية واستثمار الموارد الطبيعية، ومن أبرزهم: منتوحتب الثاني الذي أعاد وحدة البلاد، وسنوسرت الثالث الذي شق قناة سيزوستريس وحفر قناة في صخور الجندل الأول لتسهيل التجارة مع النوبة، وأمنمحات الثالث الذي بنى سد اللاهون بالفيوم واستصلح 27 ألف فدان وشيد قصر التيه (اللابرنت).',
        contentEn: 'Middle Kingdom pharaohs focused on major hydraulic and economic infrastructure: Mentuhotep II restored national unity; Senusret III excavated the Sesostris canal connecting the Nile to the Red Sea as well as a canal around the First Cataract for Nubian trade; Amenemhat III constructed the Lahun Dam in the Fayum oasis, reclaiming 27,000 fertile acres, and erected the famous labyrinth complex.'
      },
      {
        titleAr: 'الدولة الحديثة (عصر المجد الحربي)',
        titleEn: 'New Kingdom Military Empire',
        contentAr: 'بدأ عصر المجد الحربي بانتصار أحمس وطرد الهكسوس. تكوّن جيش مصري نظامي قوي خاض به الملوك معارك تاريخية: قاد تحتمس الثالث معركة مجدو (1479 ق.م) وأقام أوسع إمبراطورية، وحكمت حتشبسوت في سلام تجاري مع بلاد بونت، وقاد رمسيس الثاني معركة قادش ضد الحيثيين ثم عقد أول معاهدة سلام مسجلة في التاريخ.',
        contentEn: 'The New Kingdom military renaissance began with Ahmose expelling the Hyksos. A formidable standing army established an expansive empire: Thutmose III led the strategic Battle of Megiddo (1479 BC); Hatshepsut promoted maritime peace expeditions to Punt; and Ramses II commanded the Battle of Kadesh against the Hittites, culminating in the earliest recorded international peace treaty.'
      }
    ],
    assessment: {
      id: 'eg-hist-q-2',
      titleAr: 'تقييم عصور التاريخ المصري القديم',
      titleEn: 'Assessment: Epochs of Ancient Egypt',
      passingScore: 80,
      questions: [
        {
          id: 'eg-h-q2',
          textAr: 'ارتبط مشروع سد اللاهون في عهد الملك أمنمحات الثالث بتحقيق نهضة في مجال:',
          textEn: 'The Lahun dam during Amenemhat III targeted development in:',
          optionsAr: ['الزراعة واستصلاح الأراضي والري', 'التوسع العسكري والفتوحات الخارجية', 'التعدين واستخراج الذهب', 'بناء الأساطيل البحرية الحربية'],
          optionsEn: ['Agriculture, land reclamation & irrigation', 'Military conquests', 'Gold mining', 'Naval shipbuilding'],
          correctIndex: 0,
          conceptTestedAr: 'المشروعات الاقتصادية بالدولة الوسطى',
          conceptTestedEn: 'Middle Kingdom hydraulic projects',
          explanationAr: 'شيد أمنمحات الثالث سد اللاهون عند مدخل الفيوم لتنظيم مياه الفيضان وتخزينها، مما أتاح استصلاح 27 ألف فدان وزيادة المساحة الزراعية.',
          explanationEn: 'The Lahun Dam regulated Nile flood waters into Lake Moeris, reclaiming vast arable acres for agriculture.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

export const EGYPT_HIGH_GEOGRAPHY_G10_LECTURES: Lecture[] = [
  {
    id: 'eg-g10-geo-1',
    order: 1,
    subject: 'GEOGRAPHY',
    gradeLevel: 'G10',
    country: 'EG',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية مصر العربية - جغرافية مصر (الصف الأول الثانوي)',
    gradeLevelNameEn: 'Arab Republic of Egypt - Geography of Egypt (Grade 10)',
    ministryAr: 'وزارة التربية والتعليم والتعليم الفني - جمهورية مصر العربية',
    ministryEn: 'Ministry of Education and Technical Education - Egypt',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: الموقع ومظاهر سطح مصر',
    unitTitleEn: 'Unit 1: Location & Landforms of Egypt',
    lessonNumberAr: 'الدرس 1 و 2: موقع مصر الجغرافي وأهميته والتكوينات الجيولوجية',
    lessonNumberEn: 'Lessons 1 & 2: Egypt Location and Geological Eras',
    titleAr: 'المحاضرة 1: موقع مصر الجغرافي وأهميته الجيوسياسية والتكوينات الجيولوجية',
    titleEn: 'Lecture 1: Geopolitical Significance of Egypt and Geological Substrata',
    subtitleAr: 'الموقع الفلكي والجغرافي والحدود البرية والبحرية، وأثر قناة السويس، وصخور الأزمنة الجيولوجية واستخداماتها الاقتصادية',
    subtitleEn: 'Astronomical & boundary coordinates, Suez Canal strategic axis, and economic geological stratigraphy.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'وصف العالم الجغرافي جمال حمدان موقع مصر بأنه "قلب العالم القديم وواسطة العقد بين الشرق والغرب". كيف جعل هذا الموقع الفريد، بالإضافة إلى التكوينات الجيولوجية الغنية بالرخام والجرانيت والفوسفات وخامات الحديد، من مصر محوراً جغرافياً واقتصادياً لا مثيل له عبر العصور؟',
    warmupHookEn: 'Gamal Hemdan characterized Egypt as the pivotal nexus of the Old World. Discover how geographical coordinates and rich geological horizons shaped modern infrastructure.',
    learningOutcomesAr: [
      'أن يحدد الطالب الموقع الفلكي والجغرافي لمصر والحدود السياسية البرية والبحرية بدقة.',
      'أن يبرهن على الأهمية الجيوسياسية لموقع مصر ودور قناة السويس القديمة والجديدة في حركة الملاحة العالمية.',
      'أن يصنف صخور الأزمنة الجيولوجية (الآركي حتى الرابع) وأهميتها الاقتصادية والتنموية في مصر.'
    ],
    learningOutcomesEn: [
      'Locate Egypt coordinates and delineate terrestrial and maritime borders.',
      'Appraise Suez Canal maritime logistics and regional geopolitical centrality.',
      'Classify geological periods and economic mineral/rock distributions.'
    ],
    keyConceptsAr: ['الموقع الجغرافي لمصر', 'قناة السويس الجديدة', 'الزمن الآركي', 'الحجر الرملي النوبي', 'خامات الفوسفات والجبس'],
    keyConceptsEn: ['Geographical Location of Egypt', 'New Suez Canal', 'Archaic Era', 'Nubian Sandstone', 'Phosphate and Gypsum Ores'],
    vocabulary: [
      { termAr: 'الحجر الرملي النوبي', termEn: 'Nubian Sandstone', definitionAr: 'تكوينات جيولوجية تنتمي للزمن الثاني، تتميز بقدرتها الفائقة على تخزين المياه الجوفية العذبة وبترول خليج السويس.' }
    ],
    sections: [
      {
        titleAr: 'موقع مصر الجغرافي وأهميته',
        titleEn: 'Egypt Location and Strategic Value',
        contentAr: 'تقع مصر في الركن الشمالي الشرقي من قارة إفريقيا، وتمتد بين دائرتي عرض 22° إلى 31.36° شمالاً، وبين خطي طول 25° إلى 37° شرقاً. يحدها شمالاً البحر المتوسط وشرقاً البحر الأحمر وخليج العقبة وجنوباً السودان وغرباً ليبيا. تكتسب مصر أهمية قصوى لوقوعها عند ملتقى قارات العالم القديم الثلاث، وكونها البوابة الشمالية لإفريقيا، فضلاً عن تحكمها في قناة السويس التي تختصر مسافة التجارة العالمية بين الشرق والغرب بنسبة تصل إلى 40%.',
        contentEn: 'Egypt occupies the northeast corner of Africa, between latitudes 22° to 31.36° N and longitudes 25° to 37° E. It is bounded by the Mediterranean Sea to the north, the Red Sea and Gulf of Aqaba to the east, Sudan to the south, and Libya to the west. Egypt is situated at the tri-continental hub of the Old World, serving as Africa northern maritime gateway and operating the Suez Canal, which reduces East-West maritime transport routes by up to 40%.'
      },
      {
        titleAr: 'التكوينات الجيولوجية في مصر',
        titleEn: 'Geological Stratigraphy of Egypt',
        contentAr: 'تتدرج صخور الأراضي المصرية عبر خمسة أزمنة رئيسية:\n1. الزمن الآركي (10%): صخور الجرانيت والبازلت والرخام وخامات المعادن الفلزية (الحديد والذهب).\n2. الزمن الأول (1%): الحجر الرملي.\n3. الزمن الثاني (42%): الحجر الرملي النوبي (خزانات المياه الجوفية والبترول) والصخور الطباشيرية (الفوسفات).\n4. الزمن الثالث (33%): الحجر الجيري (صناعة الأسمنت والجبس) وتكوينات الميوسين (حقول البترول).\n5. الزمن الرابع (14%): الرواسب الطينية في الوادي والدلتا والشواطئ المرجانية والتلال الجيرية.',
        contentEn: 'Egyptian geological horizons span five primary eras: 1. Archean (10%): granite, basalt, marble, and metallic ores (iron, gold). 2. Paleozoic / 1st Era (1%): sandstone. 3. Mesozoic / 2nd Era (42%): Nubian Sandstone (vital deep aquifers and oil deposits) and chalk/phosphates. 4. Cenozoic / 3rd Era (33%): limestone (cement, building stone) and Miocene petroleum reservoirs. 5. Quaternary / 4th Era (14%): Nile valley/delta alluvium, coral reefs, and coastal dunes.'
      }
    ],
    assessment: {
      id: 'eg-geo-q-1',
      titleAr: 'تقييم جغرافية مصر: الموقع والتكوينات الجيولوجية',
      titleEn: 'Assessment: Geography & Geology of Egypt',
      passingScore: 80,
      questions: [
        {
          id: 'eg-g-q1',
          textAr: 'تعتمد مشروعات استصلاح الأراضي في الصحراء الغربية (مثل مشروع توشكى وشرق العوينات) على المياه الجوفية المخزنة في تكوينات:',
          textEn: 'Desert agricultural reclamation in Egypt relies on aquifers within:',
          optionsAr: ['الحجر الرملي النوبي (الزمن الثاني)', 'صخور الجرانيت والرخام (الزمن الآركي)', 'الحجر الجيري (الزمن الثالث)', 'رواسب الكثبان الرملية (الزمن الرابع)'],
          optionsEn: ['Nubian Sandstone (Second Era)', 'Granite & Marble (Archaic)', 'Limestone (Third Era)', 'Dune Sands (Fourth Era)'],
          correctIndex: 0,
          conceptTestedAr: 'خزانات المياه الجوفية الجيولوجية بمصر',
          conceptTestedEn: 'Nubian Sandstone aquifer characteristics',
          explanationAr: 'تكوينات الحجر الرملي النوبي بالزمن الجيولوجي الثاني هي الخزان الهيدروجيولوجي الأضخم للمياه العذبة في الصحراء الغربية المصرية.',
          explanationEn: 'The Nubian Sandstone formation acts as the primary deep freshwater aquifer across Western Desert agricultural megaprojects.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// KINGDOM OF SAUDI ARABIA - MINISTRY OF EDUCATION
// المملكة العربية السعودية - وزارة التعليم
// مناهج التاريخ والدراسات الاجتماعية والجغرافيا المعتمدة
// ============================================================================

export const SAUDI_HIGH_HISTORY_G10_LECTURES: Lecture[] = [
  {
    id: 'sa-g10-hist-1',
    order: 1,
    subject: 'HISTORY',
    gradeLevel: 'G10',
    country: 'SA',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'المملكة العربية السعودية - التاريخ والدراسات الاجتماعية (المرحلة الثانوية)',
    gradeLevelNameEn: 'Kingdom of Saudi Arabia - History and Social Studies',
    ministryAr: 'وزارة التعليم - المملكة العربية السعودية',
    ministryEn: 'Ministry of Education - Kingdom of Saudi Arabia',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: تاريخ شبه الجزيرة العربية والدولة السعودية الأولى',
    unitTitleEn: 'Unit 1: Arabian Peninsula & First Saudi State',
    lessonNumberAr: 'الدروس 1 إلى 3: شبه الجزيرة قبل الدولة وتأسيس الدرعية والدولة الأولى',
    lessonNumberEn: 'Lessons 1-3: Pre-state Era, Diriyah & First Saudi State',
    titleAr: 'المحاضرة 1: شبه الجزيرة العربية وتأسيس الدولة السعودية الأولى وعاصمتها الدرعية',
    titleEn: 'Lecture 1: The Arabian Peninsula and Foundation of the First Saudi State in Diriyah',
    subtitleAr: 'الأوضاع السياسية والدينية قبل التأسيس، وجهود الإمام محمد بن سعود وتأسيس الدرعية عام 1139هـ / 1727م',
    subtitleEn: 'Pre-unification Arabian geopolitical fragmentation, and the founding of Diriyah in 1727 by Imam Muhammad bin Saud.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في عام 1139هـ (1727م)، عندما تولى الإمام محمد بن سعود الحكم في الدرعية، كانت شبه الجزيرة العربية تعيش في فوضى سياسية وتشتت قبلي واسع. كيف استطاع الإمام بحنكته السياسية تأسيس دولة مركزية آمنة امتد نفوذها واستقرارها، وما هي المبادئ الراسخة التي جعلت يوم التأسيس رمزاً للفخر الوطني السعودي؟',
    warmupHookEn: 'In 1727 CE (1139 AH), Imam Muhammad bin Saud established the First Saudi State in Diriyah, forging stability and security across a historically fragmented peninsula.',
    learningOutcomesAr: [
      'أن يستنتج الطالب الأوضاع السياسية والأمنية والاقتصادية في شبه الجزيرة العربية قبل قيام الدولة السعودية الأولى.',
      'أن يشرح دور الإمام محمد بن سعود في تأسيس الدولة السعودية الأولى وعاصمتها الدرعية وتوحيد الصفوف.',
      'أن يوضح أهمية يوم التأسيس السعودي كرمز للعمق التاريخي والحضاري للمملكة.'
    ],
    learningOutcomesEn: [
      'Analyze the fragmented political landscape of Arabia before 1727.',
      'Examine the foundational governance policies of Imam Muhammad bin Saud in Diriyah.',
      'Evaluate the historical significance of Saudi Founding Day.'
    ],
    keyConceptsAr: ['يوم التأسيس', 'الإمام محمد بن سعود', 'حي الطريف بالدرعية', 'الدولة السعودية الأولى', 'الوحدة الوطنية'],
    keyConceptsEn: ['Founding Day', 'Imam Muhammad bin Saud', 'At-Turaif District in Diriyah', 'First Saudi State', 'National Unity'],
    vocabulary: [
      { termAr: 'يوم التأسيس', termEn: 'Founding Day', definitionAr: 'مناسبة وطنية سعودية تصادف 22 فبراير من كل عام، احتفاءً بذكرى تأسيس الدولة السعودية الأولى على يد الإمام محمد بن سعود عام 1139هـ (1727م).' }
    ],
    sections: [
      {
        titleAr: 'أحوال شبه الجزيرة العربية قبل الدولة السعودية الأولى',
        titleEn: 'Pre-Saudi Geopolitical Conditions',
        contentAr: 'عانت شبه الجزيرة العربية قبل منتصف القرن الثاني عشر الهجري من انعدام الوحدة السياسية، وانتشار النزاعات والحروب بين البلدات والقبائل، وغياب الأمن والاستقرار، مما أثر سلباً على التجارة وطرق الحج والمعيشة، حتى قيّض الله الإمام محمد بن سعود ليضع أسس الدولة الموحدة العادلة.',
        contentEn: 'Prior to the mid-12th century AH, the Arabian Peninsula suffered from severe political fragmentation, localized inter-tribal conflicts, and the absence of unified security. This disrupted trade routes, pilgrimage security, and daily livelihood until Imam Muhammad bin Saud laid the cornerstones of a unified state.'
      },
      {
        titleAr: 'تأسيس الدولة السعودية الأولى (1139هـ / 1727م)',
        titleEn: 'Founding of the First Saudi State',
        contentAr: 'تأسست الدولة السعودية الأولى عام 1139هـ (1727م) عندما تولى الإمام محمد بن سعود إمارة الدرعية، فبدأ عهد جديد اتسم بالاستقرار السياسي، وتوحيد أقاليم نجد، وتأمين طرق الحج والتجارة، وبناء سور الدرعية، وإرساء مبادئ العدل والشريعة، حتى أصبحت الدرعية منارة سياسية وعلمية رائدة في المنطقة.',
        contentEn: 'The First Saudi State was established in 1139 AH (1727 CE) when Imam Muhammad bin Saud assumed leadership of Diriyah. His rule inaugurated political stability, unification of Najdi regions, fortification of Diriyah, protection of pilgrimage paths, and governance based on justice and law, transforming Diriyah into a cultural and political center.'
      }
    ],
    assessment: {
      id: 'sa-hist-q-1',
      titleAr: 'تقييم تاريخ الدولة السعودية الأولى',
      titleEn: 'Assessment: First Saudi State History',
      passingScore: 80,
      questions: [
        {
          id: 'sa-h-q1',
          textAr: 'تأسست الدولة السعودية الأولى على يد الإمام محمد بن سعود في عام:',
          textEn: 'The First Saudi State was founded by Imam Muhammad bin Saud in:',
          optionsAr: ['1139هـ (1727م)', '1240هـ (1824م)', '1319هـ (1902م)', '1351هـ (1932م)'],
          optionsEn: ['1139 AH (1727 CE)', '1240 AH (1824 CE)', '1319 AH (1902 CE)', '1351 AH (1932 CE)'],
          correctIndex: 0,
          conceptTestedAr: 'تاريخ تأسيس الدولة السعودية الأولى',
          conceptTestedEn: 'Founding date of the First Saudi State',
          explanationAr: 'تأسست الدولة السعودية الأولى عام 1139هـ الموافق 1727م باعتلاء الإمام محمد بن سعود الحكم في الدرعية، وهو التاريخ المعتمد للاحتفال بـ "يوم التأسيس".',
          explanationEn: 'The First Saudi State was founded in 1139 AH / 1727 CE when Imam Muhammad bin Saud took leadership of Diriyah.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

export const SAUDI_HIGH_GEOGRAPHY_G10_LECTURES: Lecture[] = [
  {
    id: 'sa-g10-geo-1',
    order: 1,
    subject: 'GEOGRAPHY',
    gradeLevel: 'G10',
    country: 'SA',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'المملكة العربية السعودية - جغرافية المملكة والبيئة (المرحلة الثانوية)',
    gradeLevelNameEn: 'Kingdom of Saudi Arabia - Physical & Human Geography',
    ministryAr: 'وزارة التعليم - المملكة العربية السعودية',
    ministryEn: 'Ministry of Education - Kingdom of Saudi Arabia',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: الموقع والتضاريس في المملكة العربية السعودية',
    unitTitleEn: 'Unit 1: Location & Landforms of Saudi Arabia',
    lessonNumberAr: 'الدرس 1 و 2: موقع المملكة وتضاريسها الجبلية والهضاب والسهول الساحلية',
    lessonNumberEn: 'Lessons 1 & 2: Topography, Mountain Ranges & Coastal Plains',
    titleAr: 'المحاضرة 1: جغرافية المملكة العربية السعودية: الموقع الاستراتيجي والتضاريس الكبرى',
    titleEn: 'Lecture 1: Geography of Saudi Arabia: Strategic Location & Major Topographic Systems',
    subtitleAr: 'الموقع الفلكي والجغرافي والحدود، جبال السروات ومدين، الحرات البركانية، الهضاب الوسطى، والسهول الساحلية للبحر الأحمر والخليج العربي',
    subtitleEn: 'Sarawat mountain belts, volcanic harrats, central plateau systems (Najd), and maritime littoral plains.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'تشغل المملكة العربية السعودية نحو ثلثي مساحة شبه الجزيرة العربية، وتطل على اثنين من أهم المعابر البحرية في العالم: البحر الأحمر والخليج العربي. كيف تتنوع تضاريس المملكة من قمم جبال السروات الخضراء في عسير إلى رمال الربع الخالي الشاسعة، وما هي أهمية هذا التنوع الطبيعي في التنمية المستدامة ورؤية 2030؟',
    warmupHookEn: 'Encompassing approximately two-thirds of the Arabian Peninsula, Saudi Arabia commands the Red Sea and Arabian Gulf. Trace its topographic continuum from Sarawat peaks to coastal plains.',
    learningOutcomesAr: [
      'أن يحدد الطالب موقع المملكة الجغرافي والفلكي ومساحتها وحدودها مع الدول المجاورة.',
      'أن يصنف تضاريس المملكة الرئيسية (المرتفعات الغربية، الحرات، الهضاب، والسهول الساحلية).',
      'أن يربط بين الخصائص التضاريسية ومشروعات المملكة الكبرى مثل نيوم والبحر الأحمر والعلا.'
    ],
    learningOutcomesEn: [
      'Map Saudi geographic boundaries and maritime corridors.',
      'Delineate western mountain systems, central plateaus, and coastal plains.',
      'Relate geomorphology to visionary megaprojects (NEOM, Red Sea Project, AlUla).'
    ],
    keyConceptsAr: ['جبال السروات', 'الحرات البركانية', 'هضبة نجد', 'سهل تهامة', 'الموقع الجيواقتصادي'],
    keyConceptsEn: ['Sarawat Mountains', 'Volcanic Harrats', 'Najd Plateau', 'Tihama Plain', 'Geoeconomic Location'],
    vocabulary: [
      { termAr: 'الحَرّات', termEn: 'Harrats', definitionAr: 'طفوح بركانية بازلتية سوداء نتجت عن تدفق الحمم البركانية قديماً، وتنتشر غرب المملكة وشمالها مثل حرة خيبر وحرة رهط.' }
    ],
    sections: [
      {
        titleAr: 'موقع المملكة ومساحتها',
        titleEn: 'Saudi Geographical Location & Territory',
        contentAr: 'تقع المملكة العربية السعودية في جنوب غرب قارة آسيا، وتشغل مساحة تقارب 2,000,000 كم² تمثل نحو 70% من شبه الجزيرة العربية. تمتد بين خطي عرض 16° و32.14° شمالاً، وبين خطي طول 34.29° و55.40° شرقاً. تطل غرباً على البحر الأحمر بشرق ساحلي يمتد لحوالي 2400 كم، وشرقاً على الخليج العربي بنحو 1000 كم.',
        contentEn: 'The Kingdom of Saudi Arabia is located in southwest Asia, spanning ~2,000,000 sq km (~70% of the Arabian Peninsula) between latitudes 16° to 32.14° N and longitudes 34.29° to 55.40° E. It boasts ~2,400 km of Red Sea western coastline and ~1,000 km of Arabian Gulf eastern coastline.'
      },
      {
        titleAr: 'التضاريس الرئيسية للمملكة',
        titleEn: 'Major Physiographic Regions',
        contentAr: 'تتكون تضاريس المملكة من:\n1. المرتفعات الغربية: تشمل جبال السروات في الجنوب وجبال الحجاز في الوسط وجبال مدين في الشمال، وأعلاها قمة جبل السودة (حوالي 3000م).\n2. السهول الساحلية: سهل تهامة غرباً وسهل الأحساء والخليج شرقاً.\n3. الهضاب: هضبة نجد في الوسط، وهضبة الحجاز وعسير، وهضبة الصمان وحماد والحجرة شمالاً.\n4. الحرات البركانية: مثل حرة رهط وخيبر وعويرض.\n5. الرمال الصحراوية: الربع الخالي والنفود الكبير والدهناء.',
        contentEn: 'Saudi topography features: 1. Western mountain belts: Sarawat in the south (Jabal Sawda ~3,015m), Hijaz in the center, and Madyan in the north. 2. Coastal plains: Tihama to the west and Arabian Gulf / Al-Ahsa plains to the east. 3. Plateaus: Najd central plateau, Hijaz/Asir plateaus, and northern limestone plateaus (Summan, Hammad, Hujrah). 4. Volcanic harrats (Rahat, Khaybar, Uwayrid). 5. Sand deserts: Rub al-Khali, Great Nafud, and Dahna.'
      }
    ],
    assessment: {
      id: 'sa-geo-q-1',
      titleAr: 'تقييم جغرافية المملكة العربية السعودية وتضاريسها',
      titleEn: 'Assessment: Geography & Physiography of Saudi Arabia',
      passingScore: 80,
      questions: [
        {
          id: 'sa-g-q1',
          textAr: 'أعلى القمم الجبلية في المملكة العربية السعودية تقع ضمن مرتفعات:',
          textEn: 'The highest mountain elevations in Saudi Arabia are located within:',
          optionsAr: ['جبال السروات (قمة السودة)', 'جبال طويق في نجد', 'جبال أجا وسلمى في حائل', 'جبال الحجاز شمال مكة'],
          optionsEn: ['Sarawat Mountains (Al-Soudah)', 'Tuwaiq Escarpment', 'Aja & Salma Mountains', 'Hijaz Mountains'],
          correctIndex: 0,
          conceptTestedAr: 'مرتفعات المملكة والقمم الجبلية',
          conceptTestedEn: 'Saudi western mountain topography',
          explanationAr: 'قمة جبل السودة في منطقة عسير ضمن سلسلة جبال السروات هي أعلى قمة في المملكة العربية السعودية بارتفاع يقارب 3015 متراً فوق مستوى سطح البحر.',
          explanationEn: 'Mount Al-Soudah in the Asir region of the Sarawat range is the highest point in Saudi Arabia at ~3,015m.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
