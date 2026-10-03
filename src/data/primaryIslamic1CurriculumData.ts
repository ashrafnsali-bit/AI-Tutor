import type { Lecture } from '../types';

// ============================================================================
// PRIMARY ISLAMIC STUDIES — GRADE 1 (التربية الدينية الإسلامية الصف الأول الابتدائي)
// Authentic National Standards for Primary Grade 1 Islamic Studies:
// Lecture 1: أركان الإسلام الخمسة والشهادتان (معنى أشهد أن لا إله إلا الله وأن محمداً رسول الله)
// Lecture 2: القرآن الكريم: سورة الفاتحة وآداب الاستماع والتلاوة
// Lecture 3: معرفة الله تعالى: الله الخالق الرازق المنعم ونعمه العظيمة
// Lecture 4: نبينا محمد ﷺ: مولده، صدقه، وأمانته، ومحبته
// Lecture 5: الآداب الإسلامية: الطهارة والنظافة، بر الوالدين، وإفشاء السلام
// ============================================================================

export const PRIMARY_ISLAMIC_G1_LECTURES: Lecture[] = [
  // ── LECTURE 1: FIVE PILLARS OF ISLAM & SHAHADA ──
  {
    id: 'p1-isl-1',
    order: 1,
    titleAr: 'المحاضرة 1: أركان الإسلام الخمسة والشهادتان (أشهد أن لا إله إلا الله)',
    titleEn: 'Lecture 1: The Five Pillars of Islam & The Two Testimonies of Faith',
    subtitleAr: 'التعرف على أركان الإسلام الخمسة كأعمدة يبنى عليها ديننا، وفهم معنى الشهادتين ومفتاح دخول الإسلام.',
    subtitleEn: 'Discover the five foundational pillars of Islam and comprehend the two testimonies of faith.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ — العقيدة والإيمان',
    unitTitleEn: 'Theme 1: Who Am I? — Islamic Creed & Pillars',
    lessonNumberAr: 'الدرس 1: أركان الإسلام الخمسة والشهادتان',
    lessonNumberEn: 'Lesson 1: The Five Pillars & Shahada',

    warmupHookAr: 'تخيل بيتاً جميلاً وقوياً يرتفع في السماء وله خمسة أعمدة متينة تحمله؛ إذا اختل عمود منها لا يستقيم البيت! هكذا أخبرنا رسول الله ﷺ أن دين الإسلام مبني على خمسة أركان أساسية متينة. ما هي هذه الأركان الخمسة؟ وما هو الركن الأول الذي هو مفتاح الجنة ونور قلوبنا؟',
    warmupHookEn: 'Imagine a magnificent building supported by five sturdy pillars. If one is missing, the structure cannot stand! Prophet Muhammad (PBUH) taught us that Islam is built upon five foundational pillars. What are they, and what is the key to entering Islam?',

    keyConceptsAr: [
      'حديث بني الإسلام على خمس: (شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وحج البيت، وصوم رمضان).',
      'معنى الشهادتين: لا معبود بحق إلا الله وحده لا شريك له، وأن محمداً ﷺ رسول الله وخاتم الأنبياء أرسله رحمة للعالمين.',
      'الصلاة: صلة المسلم بربه، خمس صلوات في اليوم والليلة تطهر القلب.',
      'الزكاة والصوم والحج: مساعدة الفقراء والمحتاجين، وصوم شهر رمضان لنتعلم الصبر، وحج بيت الله الحرام بمكة لمن استطاع.'
    ],
    keyConceptsEn: [
      'The prophetic hadith: Islam is built on five pillars (Shahada, Salah, Zakah, Hajj, Fasting Ramadan).',
      'Meaning of the Two Testimonies: Worship belongs exclusively to Allah, and Muhammad is His final messenger.',
      'The daily prayers as a direct connection between the Muslim and Allah.',
      'Charity (Zakah), Ramadan fasting, and Pilgrimage to Makkah (Hajj).'
    ],

    learningOutcomesAr: [
      'أن يعدد التلميذ أركان الإسلام الخمسة بالترتيب الصحيح بنشيد أو حفظ سليم.',
      'أن ينطق الشهادتين نطقاً صحيحاً مع فهم معناهما الإجمالي.',
      'أن يميز بين الصلوات الخمس المفروضة في اليوم والليلة.',
      'أن يعبر عن حبه للإسلام واعتزازه بهويته الإيمانية.'
    ],
    learningOutcomesEn: [
      'Recite the five pillars of Islam in correct order.',
      'Pronounce the Shahada accurately with basic semantic comprehension.',
      'Identify the five daily obligatory prayers.',
      'Express love and pride in Muslim identity and ethical character.'
    ],

    vocabulary: [
      {
        termAr: 'الشهادتان (The Two Testimonies)',
        termEn: 'The Two Testimonies (Shahada)',
        definitionAr: 'قول: "أشهد أن لا إله إلا الله، وأشهد أن محمداً رسول الله"، وهو الركن الأول ومفتاح الدخول في دين الإسلام.',
        definitionEn: 'The foundational declaration that there is no god but Allah and Muhammad is His messenger.'
      },
      {
        termAr: 'أركان الإسلام (Pillars of Islam)',
        termEn: 'Pillars of Islam',
        definitionAr: 'الفرائض الأساسية الخمس التي يقوم عليها دين الإسلام ولا يكتمل إسلام المسلم إلا بها.',
        definitionEn: 'The five core devotional obligations upon which the structure of Islam is erected.'
      },
      {
        termAr: 'الصَّلَاة (Salah / Daily Prayers)',
        termEn: 'Salah (Prayer)',
        definitionAr: 'العبادة اليومية التي يقف فيها المسلم بين يدي ربه خمس مرات كل يوم طاهراً خاشعاً.',
        definitionEn: 'The direct ritual worship connecting the believer to Allah five times each day.'
      }
    ],

    summaryAr: 'بُني الإسلام على خمسة أركان عظيمة: الشهادتان هما الأساس والمفتاح، ثم الصلاة اليومية عماد الدين، وإيتاء الزكاة لمساعدة الفقراء، وصوم شهر رمضان المبارك، وحج بيت الله الحرام بمكة المكرمة لمن استطاع إليه سبيلاً.',
    summaryEn: 'Islam is founded upon five pillars: The Shahada (faith declaration), five daily prayers (Salah), almsgiving (Zakah), fasting Ramadan (Sawm), and pilgrimage to Makkah (Hajj).',

    sections: [
      {
        titleAr: '1. شجرة أركان الإسلام الخمسة وحديث رسول الله ﷺ',
        titleEn: '1. The Five Pillars Tree & The Prophetic Tradition',
        contentAr: 'قال رسول الله ﷺ: «بُنِيَ الإِسْلامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَنَّ مُحَمَّداً رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاةِ، وَإِيتَاءِ الزَّكَاةِ، وَحَجِّ الْبَيْتِ، وَصَوْمِ رَمَضَانَ» (متفق عليه).\nهذه الأركان هي التي تبني المسلم الصالح النافع لنفسه وأسرته ومجتمعه.',
        contentEn: 'Prophet Muhammad (PBUH) stated: "Islam is built on five pillars: To testify that there is no god but Allah and that Muhammad is the Messenger of Allah, to establish prayer, to pay Zakah, to perform Hajj, and to fast Ramadan."',
        diagram: {
          id: 'diag-p1-isl-pillars',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'أركان الإسلام الخمسة - صرح الإيمان',
          titleEn: 'The Five Pillars of Islam Architecture',
          captionAr: 'مخطط توضيحي يمثل أركان الإسلام الخمسة كأعمدة الصرح الإيماني المتين (الشهادتان، الصلاة، الزكاة، الصوم، الحج).',
          captionEn: 'Diagram depicting the five pillars supporting the Islamic faith edifice.',
          diagramType: 'islamic_pillars',
          takeawayFormulaAr: 'الإسلام = الشهادتان + الصلاة + الزكاة + الصوم + الحج',
          takeawayFormulaEn: 'Islam = Shahada + Salah + Zakah + Fasting + Hajj',
          keyLabels: [
            { tagAr: 'الشهادتان (المفتاح والأساس)', tagEn: 'Shahada', color: '#10b981' },
            { tagAr: 'إقام الصلاة (عماد الدين)', tagEn: 'Salah', color: '#38bdf8' },
            { tagAr: 'إيتاء الزكاة (العطاء والرحمة)', tagEn: 'Zakah', color: '#f59e0b' },
            { tagAr: 'صوم رمضان (الصبر والتقوى)', tagEn: 'Fasting', color: '#8b5cf6' },
            { tagAr: 'حج البيت (الاجتماع والوحدة)', tagEn: 'Hajj', color: '#ec4899' }
          ]
        },
        interactiveExample: {
          titleAr: 'ترتيب أركان الإسلام مع النشيد التعليمي',
          titleEn: 'Sequencing the Five Pillars',
          equation: '1. الشهادتان ➔ 2. الصلاة ➔ 3. الزكاة ➔ 4. الصوم ➔ 5. الحج',
          steps: [
            { stepNumber: 1, textAr: 'الركن الأول: الشهادتان (أشهد أن لا إله إلا الله وأن محمداً رسول الله).', textEn: 'Pillar 1: Shahada.' },
            { stepNumber: 2, textAr: 'الركن الثاني: إقام الصلاة (خمس صلوات في اليوم والليلة: الفجر، الظهر، العصر، المغرب، العشاء).', textEn: 'Pillar 2: Establishing 5 daily prayers.' },
            { stepNumber: 3, textAr: 'الركن الثالث: إيتاء الزكاة (إعطاء جزء من المال للفقراء والمساكين).', textEn: 'Pillar 3: Giving Zakah to the needy.' },
            { stepNumber: 4, textAr: 'الركن الرابع: صوم رمضان (الامتناع عن الطعام والشراب من طلوع الفجر إلى غروب الشمس).', textEn: 'Pillar 4: Fasting the Holy Month of Ramadan.' },
            { stepNumber: 5, textAr: 'الركن الخامس: حج البيت (زيارة الكعبة المشرفة بمكة المكرمة مرة في العمر للقادر).', textEn: 'Pillar 5: Pilgrimage to Makkah for those able.' }
          ],
          takeawayAr: 'أركان الإسلام الخمسة تبدأ بالشهادتين وهي مفتاح دخول الجنة.',
          takeawayEn: 'The Five Pillars commence with Shahada, the foundation of faith.'
        },
        formativeCheck: {
          id: 'fc-p1-isl-1',
          questionAr: 'كم عدد أركان الإسلام كما علمنا نبينا محمد ﷺ؟',
          questionEn: 'How many pillars of Islam did Prophet Muhammad (PBUH) teach us?',
          optionsAr: ['ثلاثة أركان', 'أربعة أركان', 'خمسة أركان', 'سبعة أركان'],
          optionsEn: ['Three pillars', 'Four pillars', 'Five pillars', 'Seven pillars'],
          correctIndex: 2,
          explanationAr: 'عدد أركان الإسلام خمسة أركان: الشهادتان، الصلاة، الزكاة، الصوم، وحج البيت.',
          explanationEn: 'The pillars of Islam are five: Shahada, Salah, Zakah, Sawm, and Hajj.'
        }
      }
    ],

    assessment: {
      id: 'as-p1-isl-1',
      titleAr: 'تقييم فهم الدرس والمفاهيم الإسلامية',
      titleEn: 'Assessment of Lesson Concepts',
      passingScore: 80,
      questions: [
      {
        id: 'q-p1-isl-1',
        textAr: 'ما هو الركن الأول من أركان الإسلام؟',
        textEn: 'What is the first pillar of Islam?',
        optionsAr: [
          'صوم شهر رمضان',
          'الشهادتان (شهادة أن لا إله إلا الله وأن محمداً رسول الله)',
          'حج البيت الحرام',
          'إيتاء الزكاة'
        ],
        optionsEn: [
          'Fasting Ramadan',
          'The Two Testimonies (Shahada)',
          'Performing Hajj',
          'Giving Zakah'
        ],
        correctIndex: 1,
        conceptTestedAr: 'معرفة الركن الأول من أركان الإسلام',
        conceptTestedEn: 'First Pillar of Islam',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-2',
        textAr: 'كم عدد الصلوات المفروضة التي يصليها المسلم كل يوم؟',
        textEn: 'How many obligatory prayers does a Muslim pray daily?',
        optionsAr: ['صلاتان فقط', 'ثلاث صلوات', 'خمس صلوات', 'سبع صلوات'],
        optionsEn: ['Two prayers', 'Three prayers', 'Five prayers', 'Seven prayers'],
        correctIndex: 2,
        conceptTestedAr: 'عدد الصلوات الخمس المفروضة',
        conceptTestedEn: 'Five Daily Obligatory Prayers',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-3',
        textAr: 'في أي شهر هجري يصوم المسلمون ركن الصيام؟',
        textEn: 'In which Hijri month do Muslims observe the obligation of fasting?',
        optionsAr: ['شهر رجب', 'شهر شعبان', 'شهر رمضان المبارك', 'شهر شوال'],
        optionsEn: ['Rajab', 'Sha\'ban', 'Ramadan', 'Shawwal'],
        correctIndex: 2,
        conceptTestedAr: 'شهر الصيام ركن الإسلام',
        conceptTestedEn: 'Ramadan as Month of Fasting',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-4',
        textAr: 'أين يقع بيت الله الحرام الذي يقصده المسلمون للحج؟',
        textEn: 'Where is the Sacred House of Allah situated that Muslims visit for Hajj?',
        optionsAr: ['في المدينة المنورة', 'في مكة المكرمة', 'في القدس الشريف', 'في القاهرة'],
        optionsEn: ['In Madinah', 'In Makkah Al-Mukarramah', 'In Al-Quds', 'In Cairo'],
        correctIndex: 1,
        conceptTestedAr: 'مكان الكعبة المشرفة وحج البيت',
        conceptTestedEn: 'Location of the Kaaba in Makkah',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 2: SURAH AL-FATIHA ──
  {
    id: 'p1-isl-2',
    order: 2,
    titleAr: 'المحاضرة 2: سورة الفاتحة (أم الكتاب) وآداب الاستماع للقرآن الكريم',
    titleEn: 'Lecture 2: Surah Al-Fatiha (The Opening) & Quran Etiquette',
    subtitleAr: 'حفظ وتدبر آيات سورة الفاتحة السبع، وفهم معاني البسملة والحمد والاستعانة بالله وطلب الهداية إلى الصراط المستقيم.',
    subtitleEn: 'Memorize and understand Surah Al-Fatiha, Basmalah, Hamd, and praying for guidance on the straight path.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ — القرآن الكريم ونوره',
    unitTitleEn: 'Theme 1: The Holy Quran & Divine Light',
    lessonNumberAr: 'الدرس 2: سورة الفاتحة وآداب تلاوة القرآن',
    lessonNumberEn: 'Lesson 2: Surah Al-Fatiha & Recitation Etiquette',

    warmupHookAr: 'في كل ركعة من صلواتنا الخمس نقرأ سورة عظيمة جداً سمّاها النبي ﷺ "أم القرآن" و"السبع المثاني"؛ لا تصح صلاة مسلم بدونها! إنها سورة الفاتحة التي نناجي بها الله تعالى فيحب مناجاتنا ويستجيب دعاءنا. تعالوا نستمع إليها بخشوع ونتعلم معاني كلماتها الرائعة!',
    warmupHookEn: 'In every single unit of prayer, we recite a grand Surah known as "The Mother of the Book". No prayer is valid without it: Surah Al-Fatiha! Let us listen attentively and discover its beautiful meanings.',

    keyConceptsAr: [
      'سورة الفاتحة هي أول سورة في المصحف الشريف وعدد آياتها سبع آيات مكية كريمة.',
      'البسملة (بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ): نبدأ بها كل عمل طيب مبارك لننال بركة الله وتوفيقه.',
      '(الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ): شكر الله تعالى على نعمه التي لا تحصى كالسمع والبصر والصحة والأهل.',
      '(الرَّحْمَنِ الرَّحِيمِ): الله رحيم بجميع خلقه في الدنيا والآخرة.',
      '(إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ): نعبد الله وحده لا شريك له ونطلب منه العون والتوفيق في كل أمورنا.',
      '(اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ): دعاء نرجو به أن يرشدنا الله إلى طريق الخير والحق والجنة.'
    ],
    keyConceptsEn: [
      'Surah Al-Fatiha is the opening chapter of the Quran with 7 noble verses.',
      'Al-Basmalah begins our good deeds seeking divine grace.',
      'Al-Hamd praises Allah, the Sustainer of all worlds, for His countless gifts.',
      'Ar-Rahman Ar-Raheem signifies Allah\'s boundless mercy.',
      'Worship and reliance are directed exclusively to Allah.',
      'Supplication for guidance upon the straight path (Sirat Al-Mustaqeem).'
    ],

    learningOutcomesAr: [
      'أن يتلو التلميذ سورة الفاتحة تلاوة صحيحة خالية من الأخطاء مع التشكيل.',
      'أن يوضح المعنى الإجمالي لـ (الحمد لله) و(إياك نعبد وإياك نستعين).',
      'أن يلتزم بآداب الاستماع للقرآن الكريم (الإنصات، الطهارة، والخشوع).',
      'أن يستحضر عظمة الله ودعاء الهداية في كل صلاة.'
    ],
    learningOutcomesEn: [
      'Recite Surah Al-Fatiha fluently with proper pronunciation.',
      'Explain the core meanings of Hamd, worship, and reliance on Allah.',
      'Demonstrate respect and attentiveness during Quranic recitation.',
      'Reflect on seeking guidance in daily life.'
    ],

    vocabulary: [
      {
        termAr: 'سُورَةُ الفَاتِحَة (Surah Al-Fatiha)',
        termEn: 'Surah Al-Fatiha',
        definitionAr: 'فاتحة الكتاب وأعظم سورة في القرآن الكريم، وتسمى أم القرآن والسبع المثاني.',
        definitionEn: 'The Opening Chapter of the Quran, essential to every prayer.'
      },
      {
        termAr: 'الصِّرَاط الْمُسْتَقِيم (The Straight Path)',
        termEn: 'The Straight Path (Sirat Al-Mustaqeem)',
        definitionAr: 'طريق الحق والإيمان والعمل الصالح الذي يرضي الله تعالى ويوصل إلى الجنة.',
        definitionEn: 'The righteous path of truth, virtue, and obedience leading to Paradise.'
      },
      {
        termAr: 'الاستعانة (Seeking Aid from Allah)',
        termEn: 'Seeking Divine Assistance',
        definitionAr: 'طلب العون والقوة من الله وحده في كل عمل وأمر.',
        definitionEn: 'Praying for Allah\'s exclusive help, guidance, and blessing.'
      }
    ],

    summaryAr: 'سورة الفاتحة هي أعظم سور القرآن الكريم، نقرأها في كل ركعة صلاة، نثني فيها على الله رب العالمين الرحمن الرحيم، ونعاهده على إخلاص العبادة له والاستعانة به وحده، وندعوه أن يهدينا الصراط المستقيم.',
    summaryEn: 'Surah Al-Fatiha is the cornerstone of daily prayer: praising the Almighty Creator, declaring exclusive worship of Him, and asking for guidance on the straight path.',

    sections: [
      {
        titleAr: '1. معاني آيات سورة الفاتحة السبع وآداب تلاوة القرآن',
        titleEn: '1. Meaning of the Seven Verses & Recitation Etiquette',
        contentAr: 'قال تعالى: {وَإِذَا قُرِئَ الْقُرْآنُ فَاسْتَمِعُوا لَهُ وَأَنصِتُوا لَعَلَّكُمْ تُرْحَمُونَ}.\nعند تلاوة القرآن الكريم نتطهر ونجلس بأدب وننصت خاشعين لكلام الله العظيم. وفي سورة الفاتحة سبع آيات بينات تعلمنا الشكر والدعاء الصالح.',
        contentEn: 'Allah commanded us to listen attentively when the Quran is recited. Surah Al-Fatiha embodies praise, declaration of worship, and earnest supplication for righteous guidance.',
        formativeCheck: {
          id: 'fc-p1-isl-2',
          questionAr: 'ما معنى قوله تعالى في سورة الفاتحة: {اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ}؟',
          questionEn: 'What is the meaning of "Guide us to the Straight Path" in Surah Al-Fatiha?',
          optionsAr: [
            'أعطنا طعاماً كثيراً',
            'وفقنا وأرشدنا إلى طريق الخير والحق المؤدي إلى الجنة',
            'أنزل علينا المطر',
            'اجعلنا ننام مبكراً'
          ],
          optionsEn: [
            'Give us food',
            'Guide us to the path of righteousness leading to Paradise',
            'Send down rain',
            'Let us sleep early'
          ],
          correctIndex: 1,
          explanationAr: '{اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ} تعني أرشدنا وثبتنا على طريق الإيمان والحق والعمل الصالح.',
          explanationEn: 'It means guide and keep us steadfast on the righteous path of faith and virtue.'
        }
      }
    ],

    assessment: {
      id: 'as-p1-isl-1',
      titleAr: 'تقييم فهم الدرس والمفاهيم الإسلامية',
      titleEn: 'Assessment of Lesson Concepts',
      passingScore: 80,
      questions: [
      {
        id: 'q-p1-isl-2-1',
        textAr: 'كم عدد آيات سورة الفاتحة الكريمة؟',
        textEn: 'How many verses are in Surah Al-Fatiha?',
        optionsAr: ['3 آيات', '5 آيات', '7 آيات', '10 آيات'],
        optionsEn: ['3 verses', '5 verses', '7 verses', '10 verses'],
        correctIndex: 2,
        conceptTestedAr: 'عدد آيات سورة الفاتحة',
        conceptTestedEn: 'Verses count in Al-Fatiha',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-2-2',
        textAr: 'بماذا نبدأ قراءة القرآن والأعمال الطيبة؟',
        textEn: 'How do we begin reciting the Quran and performing good deeds?',
        optionsAr: [
          'بالنوم والراحة',
          'بقول: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ"',
          'بالصمت التام',
          'بقول: وداعاً'
        ],
        optionsEn: [
          'By resting',
          'By saying "Bismillah Ar-Rahman Ar-Raheem"',
          'By total silence',
          'By saying goodbye'
        ],
        correctIndex: 1,
        conceptTestedAr: 'فضل البسملة في بداية الأعمال',
        conceptTestedEn: 'Starting deeds with Basmalah',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-2-3',
        textAr: 'ماذا يسمى الله تعالى في سورة الفاتحة بأنه رحيم بعباده؟',
        textEn: 'What divine attribute in Al-Fatiha emphasizes Allah\'s boundless mercy?',
        optionsAr: ['الجبّار', 'الرحمن الرحيم', 'الشديد', 'القاهر'],
        optionsEn: ['Al-Jabbar', 'Ar-Rahman Ar-Raheem', 'Al-Shadid', 'Al-Qahir'],
        correctIndex: 1,
        conceptTestedAr: 'اسما الله الرحمن الرحيم',
        conceptTestedEn: 'Divine attributes of Mercy',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-2-4',
        textAr: 'ما الأدب الواجب علينا عندما يُتلى القرآن الكريم؟',
        textEn: 'What is our obligation when the Holy Quran is being recited?',
        optionsAr: [
          'التحدث واللعب بصوت مرتفع',
          'الاستماع والإنصات بأدب وخشوع',
          'مغادرة المكان مسرعين',
          'تشغيل التلفاز'
        ],
        optionsEn: [
          'Talking loudly',
          'Listening and paying respectful attention',
          'Leaving hastily',
          'Turning on the television'
        ],
        correctIndex: 1,
        conceptTestedAr: 'آداب الاستماع للقرآن الكريم',
        conceptTestedEn: 'Etiquette of listening to Quran',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 3: KNOWING ALLAH THE CREATOR ──
  {
    id: 'p1-isl-3',
    order: 3,
    titleAr: 'المحاضرة 3: الله ربي وخالقي (معرفة الخالق العظيم ونعمه علينا)',
    titleEn: 'Lecture 3: Allah Is My Lord & Creator (Divine Favors & Blessings)',
    subtitleAr: 'التعرف على دلائل قدرة الله في خلق السماء والأرض والشمس والإنسان، وشكر الله على نعمة السمع والبصر والعقل.',
    subtitleEn: 'Contemplate Allah\'s creation in skies, earth, sun, and human faculties, thanking Him for hearing, sight, and intellect.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ — معرفة ربي وخالقي',
    unitTitleEn: 'Theme 1: Knowing My Lord & Creator',
    lessonNumberAr: 'الدرس 3: الله الخالق المنعم',
    lessonNumberEn: 'Lesson 3: Allah the Supreme Creator',

    warmupHookAr: 'انظر إلى السماء الزرقاء الصافية بلا أعمدة، والشمس الدافئة التي تضيء الأرض كل صباح، والورود الجميلة بألوانها البديعة، وجسمك الرائع كيف ترى بعينيك وتسمع بأذنيك وتفكر بعقلك! من الذي خلق كل هذا الإبداع العظيم؟ إنه الله تعالى ربي ورب كل شيء!',
    warmupHookEn: 'Look at the sky raised without pillars, the shining sun, colorful flowers, and how you see with your eyes and hear with your ears! Who created all this perfection? It is Allah, my Lord and the Lord of all creation!',

    keyConceptsAr: [
      'الله هو الخالق: خلق الإنسان والحيوان والنبات والجبال والبحار والنجوم.',
      'الله هو الرازق: يرزق كل كائن حي طعامه وشرابه وهواءه.',
      'نعم الله على الإنسان: العقل لنفكر، العينان لنبصر، الأذنان لنسمع، واللسان لنتكلم ونذكر الله.',
      'شكر الله تعالى: نشكر الله بقولنا دائماً: "الحمد لله"، وبفعل الخير ومساعدة الآخرين والمحافظة على النعم.'
    ],
    keyConceptsEn: [
      'Allah is the sole Creator of humans, animals, plants, oceans, and stars.',
      'Allah is the Sustainer providing nourishment and life to all creatures.',
      'Gifts of hearing, sight, speech, and intellect must be treasured.',
      'Gratitude is expressed through praise (Alhamdulillah) and righteous deeds.'
    ],

    learningOutcomesAr: [
      'أن يستنتج التلميذ أن الله تعالى هو وحده خالق الكون والمسؤول عن رزقه.',
      'أن يعدد نعم الله في جسمه وفي الطبيعة من حوله.',
      'أن يداوم على شكر الله بلسانه (الحمد لله) وسلوكه الطيب.',
      'أن يحافظ على البيئة والمخلوقات رحمة وإحساناً.'
    ],
    learningOutcomesEn: [
      'Recognize Allah as the unique Creator and Sustainer of the cosmos.',
      'Enumerate divine blessings in human anatomy and the natural realm.',
      'Express gratitude regularly with words and ethical action.',
      'Treat living creatures and the environment with care and mercy.'
    ],

    vocabulary: [
      {
        termAr: 'الخَالِق (The Creator)',
        termEn: 'Al-Khaliq (The Creator)',
        definitionAr: 'اسم من أسماء الله الحسنى، ومعناه الذي أوجد كل شيء في الكون من العدم.',
        definitionEn: 'The Divine Name signifying the One Who created everything out of nothingness.'
      },
      {
        termAr: 'شُكْرُ النِّعَم (Gratitude for Blessings)',
        termEn: 'Gratitude (Shukr)',
        definitionAr: 'الاعتراف بفضل الله ونعمه علينا واستخدامها في طاعته وفعل الخير.',
        definitionEn: 'Acknowledging divine benevolence and using gifts for good.'
      }
    ],

    summaryAr: 'الله ربي هو الخالق العظيم الذي خلقني في أحسن تقويم، وأنعم عليّ بنعم لا تعد ولا تحصى؛ فأشكره بلساني قائلاً: "الحمد لله رب العالمين"، وأطيعه في كل وقت.',
    summaryEn: 'Allah is my Lord and Magnificent Creator who endowed me with intellect, senses, and life; I praise Him continually and worship Him with devotion.',

    sections: [
      {
        titleAr: '1. دلائل قدرة الله في الآفاق والأنفس',
        titleEn: '1. Signs of Divine Omnipotence',
        contentAr: 'قال الله تعالى: {وَفِي أَنفُسِكُمْ أَفَلَا تُبْصِرُونَ}.\nخلق الله الإنسان وميزه بالعقل، وخلق الشمس والقمر يجريان بحساب دقيق، وأنزل المطر من السحاب لتحيا به الأرض وتثمر الأشجار ألواناً مختلفة من الثمار اللذيذة.',
        contentEn: 'Reflect upon the signs of divine wisdom: our faculties, the celestial balance, rain reviving fertile soils, and trees bearing sweet fruits.',
        formativeCheck: {
          id: 'fc-p1-isl-3',
          questionAr: 'ماذا نقول لنشكر الله على نعمه العظيمة كالصحة والطعام؟',
          questionEn: 'What do we say to thank Allah for blessings like health and sustenance?',
          optionsAr: ['سبحان الله', 'الحمد لله رب العالمين', 'لا حول ولا قوة إلا بالله', 'أستغفر الله'],
          optionsEn: ['Subhan Allah', 'Alhamdulillahi Rabbil-Alameen', 'La Hawla...', 'Astaghfirullah'],
          correctIndex: 1,
          explanationAr: 'نقول "الحمد لله رب العالمين" شكراً لله واعترافاً بفضله وإنعامه علينا.',
          explanationEn: 'We say "Alhamdulillah" in grateful praise to Allah for His favors.'
        }
      }
    ],

    assessment: {
      id: 'as-p1-isl-1',
      titleAr: 'تقييم فهم الدرس والمفاهيم الإسلامية',
      titleEn: 'Assessment of Lesson Concepts',
      passingScore: 80,
      questions: [
      {
        id: 'q-p1-isl-3-1',
        textAr: 'من هو خالق السماوات والأرض والإنسان والحيوان؟',
        textEn: 'Who is the Creator of heavens, earth, humans, and animals?',
        optionsAr: ['الإنسان', 'الله تعالى وحده لا شريك له', 'الشمس', 'الطبيعة الصامتة'],
        optionsEn: ['Humans', 'Allah alone with no partners', 'The Sun', 'Silent nature'],
        correctIndex: 1,
        conceptTestedAr: 'توحيد الربوبية والخلق',
        conceptTestedEn: 'Allah as sole Creator',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-3-2',
        textAr: 'ما النعمة التي ميز الله بها الإنسان ليفكر ويميز بها بين الخير والشر؟',
        textEn: 'Which gift did Allah distinguish humans with to discern right from wrong?',
        optionsAr: ['نعمة العقل', 'نعمة الأظافر', 'نعمة الطول', 'نعمة النوم'],
        optionsEn: ['Gift of Intellect (Aql)', 'Nails', 'Height', 'Sleep'],
        correctIndex: 0,
        conceptTestedAr: 'نعمة العقل والتفكير',
        conceptTestedEn: 'The blessing of human intellect',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 4: PROPHET MUHAMMAD (PBUH) ──
  {
    id: 'p1-isl-4',
    order: 4,
    titleAr: 'المحاضرة 4: نبينا محمد ﷺ (مولده ونشأته وصدقه وأمانته ومحبته)',
    titleEn: 'Lecture 4: Prophet Muhammad (PBUH) - Birth, Honesty & Devotion',
    subtitleAr: 'التعرف على سيرة خاتم الأنبياء محمد ﷺ، ومولده في مكة المكرمة، ولقبه بالصادق الأمين، والاقتداء بأخلاقه الفاضلة.',
    subtitleEn: 'Learn the life of the final Prophet Muhammad (PBUH), his birth in Makkah, his title As-Sadiq Al-Ameen, and emulating his morals.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الثاني: العالم من حولي — السيرة والشخصيات',
    unitTitleEn: 'Theme 2: Prophetic Seerah & Role Models',
    lessonNumberAr: 'الدرس 4: نبينا محمد الصادق الأمين',
    lessonNumberEn: 'Lesson 4: Prophet Muhammad the Truthful & Trustworthy',

    warmupHookAr: 'كان أهل مكة قبل الإسلام يودعون أموالهم وأغلى ما يملكون عند شاب طيب القلب لا يكذب أبداً ولا يخون الأمانة، وسَمَّوْهُ: "الصادق الأمين"! هل عرفتم من هو هذا الصادق العظيم؟ إنه نبينا وحبيبنا محمد ﷺ خاتم الأنبياء والمرسلين!',
    warmupHookEn: 'The people of Makkah entrusted their most prized possessions to a kind young man known for never lying or breaking trust, nicknaming him "The Truthful, The Trustworthy". Do you know him? He is our beloved Prophet Muhammad (PBUH)!',

    keyConceptsAr: [
      'نبينا هو محمد بن عبد الله ﷺ، خاتم الأنبياء والمرسلين.',
      'ولد بمكة المكرمة في عام الفيل يتيماً، وكفله جده عبد المطلب ثم عمه أبو طالب.',
      'اشتهر بحسن الخلق، وكان يُعرف في مكة بـ (الصادق الأمين) لصدقه التام وأمانته.',
      'أرسله الله رحمة للعالمين ليعلم الناس عبادة الله والصدق والرحمة والإحسان.',
      'الصلاة على النبي ﷺ: كلما ذُكر اسمه الشريف نقول: "صلى الله عليه وسلم".'
    ],
    keyConceptsEn: [
      'Our Prophet is Muhammad ibn Abdullah (PBUH), the seal of all prophets.',
      'Born in Makkah in the Year of the Elephant; raised by grandfather Abdul-Muttalib then uncle Abu Talib.',
      'Renowned for immaculate character: titled "The Truthful, The Trustworthy" (As-Sadiq Al-Ameen).',
      'Sent as a mercy to all creation teaching monotheism, honesty, compassion, and respect.',
      'Invoking blessings on the Prophet whenever his name is spoken.'
    ],

    learningOutcomesAr: [
      'أن يذكر التلميذ اسم نبينا محمد ﷺ واسم والده ومكان مولده بمكة المكرمة.',
      'أن يوضح سبب تسمية النبي بـ "الصادق الأمين".',
      'أن يقتدي بالنبي ﷺ في الصدق في القول والأمانة في المعاملة.',
      'أن يصلي على النبي ﷺ كلما سمع اسمه.'
    ],
    learningOutcomesEn: [
      'State Prophet Muhammad\'s name, parentage, and birthplace in Makkah.',
      'Explain why he was titled As-Sadiq Al-Ameen.',
      'Emulate prophetic integrity and honesty in daily childhood situations.',
      'Send blessings upon hearing the Prophet\'s noble name.'
    ],

    vocabulary: [
      {
        termAr: 'الصَّادِقُ الأَمِين (The Truthful & Trustworthy)',
        termEn: 'As-Sadiq Al-Ameen',
        definitionAr: 'اللقب الذي اشتهر به النبي محمد ﷺ بين قومه قبل البعثة لصدقه وأمانته البالغة.',
        definitionEn: 'The title granted to Prophet Muhammad by his community for uncompromising honesty.'
      },
      {
        termAr: 'خَاتَمُ الأَنْبِيَاء (Seal of the Prophets)',
        termEn: 'The Seal of the Prophets',
        definitionAr: 'آخر نبي ورسول أرسله الله إلى البشرية جمعاء ولا نبي بعده ﷺ.',
        definitionEn: 'The final prophet sent by Allah to humanity; no prophet succeeds him.'
      }
    ],

    summaryAr: 'نبينا وقدوتنا هو محمد بن عبد الله ﷺ، ولد بمكة المكرمة، اتصف بالصدق والأمانة والرحمة، وجاء بالإسلام نوراً وهدى للعالمين، نحبه ونقتدي به ونصلي عليه دائماً.',
    summaryEn: 'Prophet Muhammad (PBUH) is our supreme role model, born in Makkah, distinguished by truthfulness, integrity, and mercy, guiding humanity to eternal light.',

    sections: [
      {
        titleAr: '1. أخلاق الصادق الأمين ﷺ والاقتداء به',
        titleEn: '1. Morals of the Prophet & Practical Emulation',
        contentAr: 'كان رسول الله ﷺ أحسن الناس خلقاً؛ يحب الأطفال ويبتسم في وجوههم، ويعطف على المسكين واليتيم، ويقول الصدق دائماً حتى في المزاح.\nالمسلم الصغير يقتدي برسوله فيكون صادقاً مع والديه ومعلميه وأصحابه.',
        contentEn: 'Prophet Muhammad treated children with warmth and smiles, shielded orphans, spoke only the absolute truth, and showed immense compassion.',
        formativeCheck: {
          id: 'fc-p1-isl-4',
          questionAr: 'بماذا كان يلقب نبينا محمد ﷺ في مكة المكرمة؟',
          questionEn: 'What title was Prophet Muhammad known by in Makkah?',
          optionsAr: ['الكريم الشجاع', 'الصادق الأمين', 'القوي الحكيم', 'الشاعر الفصيح'],
          optionsEn: ['The Generous', 'The Truthful and Trustworthy', 'The Strong', 'The Poet'],
          correctIndex: 1,
          explanationAr: 'كان يلقب بـ "الصادق الأمين" لأنه لم يكذب قط وكان يحفظ الأمانات لأصحابها.',
          explanationEn: 'He was known as As-Sadiq Al-Ameen for steadfast honesty and trustworthiness.'
        }
      }
    ],

    assessment: {
      id: 'as-p1-isl-1',
      titleAr: 'تقييم فهم الدرس والمفاهيم الإسلامية',
      titleEn: 'Assessment of Lesson Concepts',
      passingScore: 80,
      questions: [
      {
        id: 'q-p1-isl-4-1',
        textAr: 'أين ولد نبينا محمد ﷺ؟',
        textEn: 'Where was our Prophet Muhammad (PBUH) born?',
        optionsAr: ['في مكة المكرمة', 'في المدينة المنورة', 'في القدس', 'في دمشق'],
        optionsEn: ['In Makkah', 'In Madinah', 'In Al-Quds', 'In Damascus'],
        correctIndex: 0,
        conceptTestedAr: 'مولد النبي ﷺ',
        conceptTestedEn: 'Birthplace of the Prophet',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-4-2',
        textAr: 'ماذا نقول عندما نسمع اسم نبينا محمد؟',
        textEn: 'What do we say upon hearing the name of Prophet Muhammad?',
        optionsAr: ['شكراً جزيلاً', 'صلى الله عليه وسلم', 'الحمد لله فقط', 'مع السلامة'],
        optionsEn: ['Thank you', 'Sallallahu Alayhi Wa Sallam (PBUH)', 'Alhamdulillah only', 'Goodbye'],
        correctIndex: 1,
        conceptTestedAr: 'الصلاة على النبي ﷺ',
        conceptTestedEn: 'Invoking blessings on the Prophet',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 5: ISLAMIC MANNERS & CLEANLINESS ──
  {
    id: 'p1-isl-5',
    order: 5,
    titleAr: 'المحاضرة 5: الآداب الإسلامية (النظافة، بر الوالدين، وإفشاء السلام)',
    titleEn: 'Lecture 5: Islamic Ethics (Cleanliness, Parents Respect & Greeting of Peace)',
    subtitleAr: 'تعلم أهمية الطهارة والنظافة الشخصية، فضل بر الوالدين وطاعتهما، وتحية الإسلام "السلام عليكم ورحمة الله وبركاته".',
    subtitleEn: 'Learn personal cleanliness, dutifulness to parents, and spreading the Islamic greeting of peace.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الأول الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الثاني: العالم من حولي — القيم والأخلاق الحميدة',
    unitTitleEn: 'Theme 2: Islamic Values & Daily Etiquette',
    lessonNumberAr: 'الدرس 5: آدابي الإسلامية في بيتي ومدرستي',
    lessonNumberEn: 'Lesson 5: My Daily Islamic Ethics',

    warmupHookAr: 'حين تدخل البيت وتبتسم في وجه أمك وتقول: "السلام عليكم يا أمي الحبيبة"، وتشرب بيدك اليمنى جالساً، وتغسل يديك قبل الطعام وبعده؛ يشعر الجميع بالسعادة والراحة! ديننا الإسلامي الحنيف هو دين الجمال والنظافة والأخلاق العالية. كيف نطبق هذه الآداب الجميلة كل يوم؟',
    warmupHookEn: 'When entering home with a smile and saying "As-Salamu Alaykum", washing hands before meals, and showing kindness to parents, warmth fills the house! Islam is the religion of purity, cleanliness, and elevated character.',

    keyConceptsAr: [
      'النظافة من الإيمان: المسلم يحافظ على نظافة ثوبه وجسمه ومدرسته وبيته.',
      'تحية الإسلام: (السلام عليكم ورحمة الله وبركاته) وهي دعاء بالأمان والرحمة والبركة، ورد التحية: (وعليكم السلام ورحمة الله وبركاته).',
      'بر الوالدين: طاعة الأب والأم، والتحدث إليهما بأدب ولطف، ومساعدتهما والدعاء لهما: {رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا}.',
      'آداب الطعام والشراب: قول "بسم الله" قبل البدء، الأكل باليد اليمنى ومن أمامنا، والشرب جالساً، وقول "الحمد لله" عند الانتهاء.'
    ],
    keyConceptsEn: [
      'Purity and cleanliness are integral aspects of faith.',
      'The Islamic greeting of peace (As-Salamu Alaykum) spreads love and goodwill.',
      'Dutifulness to parents: listening respectfully, helping with chores, and praying for their wellbeing.',
      'Table manners: Saying Bismillah, eating with the right hand, and saying Alhamdulillah when finished.'
    ],

    learningOutcomesAr: [
      'أن يلقي التلميذ تحية الإسلام ويردها بطلاقة وبشاشة.',
      'أن يطبق آداب الطعام والشراب النبوية عملياً في وجباته اليومية.',
      'أن يظهر البر والإحسان لوالديه بالقول والفعل.',
      'أن يحافظ على النظافة الشخصية ونظافة المكان من حوله.'
    ],
    learningOutcomesEn: [
      'Greet others with the standard Islamic greeting and reply cordially.',
      'Demonstrate prophetic dining manners (Bismillah, right hand, gratitude).',
      'Show active respect and kindness towards mother and father.',
      'Maintain personal hygiene and tidy up surroundings.'
    ],

    vocabulary: [
      {
        termAr: 'بِرُّ الوَالِدَيْن (Dutifulness to Parents)',
        termEn: 'Birr Al-Walidayn',
        definitionAr: 'طاعة الوالدين وإكرامهما والإحسان إليهما وإسعادهما بالقول والفعل.',
        definitionEn: 'Showing deep respect, obedience, love, and care to both parents.'
      },
      {
        termAr: 'تَحِيَّةُ الإِسْلَام (The Greeting of Peace)',
        termEn: 'Islamic Greeting (Salam)',
        definitionAr: 'قول "السلام عليكم ورحمة الله وبركاته"، وهو نشر السلام والمحبة بين الناس.',
        definitionEn: 'Greeting fellow beings with peace, mercy, and divine blessings.'
      }
    ],

    summaryAr: 'المسلم الصغير نظيف في جسمه وثوبه، بارٌّ بأبيه وأمه، يبدأ طعامه بـ "بسم الله" ويأكل بيمينه ويحمد ربه، وينشر السلام بالتحية الطيبة "السلام عليكم ورحمة الله وبركاته".',
    summaryEn: 'A righteous young Muslim embodies cleanliness, honors parents, adopts respectful table manners, and spreads warmth through the greeting of peace.',

    sections: [
      {
        titleAr: '1. وصايا النبي ﷺ في الآداب اليومية وبر الوالدين',
        titleEn: '1. Prophetic Injunctions on Manners & Parental Care',
        contentAr: 'قال رسول الله ﷺ للغلام: «يَا غُلامُ، سَمِّ اللَّهَ، وَكُلْ بِيَمِينِكَ، وَكُلْ مِمَّا يَلِيكَ» (متفق عليه).\nوقال تعالى في بر الوالدين: {وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا}.\nبهذه الآداب النبوية الرفيعة يعيش المسلم سعيداً محبوباً في الدنيا ومأجوراً في الآخرة.',
        contentEn: 'Prophet Muhammad instructed the youth: "Mention Allah\'s name, eat with your right hand, and eat from what is nearest to you." Dutifulness to parents is enjoined directly alongside monotheism.',
        formativeCheck: {
          id: 'fc-p1-isl-5',
          questionAr: 'بأي يد علمنا رسول الله ﷺ أن نأكل ونشرب؟',
          questionEn: 'With which hand did the Prophet (PBUH) instruct us to eat and drink?',
          optionsAr: ['باليد اليسرى', 'باليد اليمنى', 'بأي يد لا يهم', 'بكلتا اليدين معاً'],
          optionsEn: ['With left hand', 'With right hand', 'Any hand doesn\'t matter', 'Both together'],
          correctIndex: 1,
          explanationAr: 'علمنا رسول الله ﷺ أن نأكل ونشرب باليد اليمنى تيمناً وبركة ونظافة.',
          explanationEn: 'The Prophet taught us to eat and drink using the right hand.'
        }
      }
    ],

    assessment: {
      id: 'as-p1-isl-1',
      titleAr: 'تقييم فهم الدرس والمفاهيم الإسلامية',
      titleEn: 'Assessment of Lesson Concepts',
      passingScore: 80,
      questions: [
      {
        id: 'q-p1-isl-5-1',
        textAr: 'ما هي تحية الإسلام التي نلقيها على من نلقاه؟',
        textEn: 'What is the Islamic greeting we offer upon meeting someone?',
        optionsAr: [
          'صباح الخير فقط',
          'السلام عليكم ورحمة الله وبركاته',
          'أهلاً وسهلاً فقط',
          'إلى اللقاء'
        ],
        optionsEn: [
          'Good morning only',
          'As-Salamu Alaykum Wa Rahmatullahi Wa Barakatuh',
          'Welcome only',
          'See you'
        ],
        correctIndex: 1,
        conceptTestedAr: 'تحية الإسلام ونشر السلام',
        conceptTestedEn: 'The Islamic greeting of peace',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      },
      {
        id: 'q-p1-isl-5-2',
        textAr: 'كيف يعامل المسلم الصالح والديه الكريمين؟',
        textEn: 'How does a righteous Muslim treat their parents?',
        optionsAr: [
          'يعصي أوامرهما ويرفع صوته',
          'يبرهما ويطيعهما ويتحدث معهما بأدب ولطف ويدعو لهما',
          'يتجاهلهما تماماً',
          'يغضب منهما'
        ],
        optionsEn: [
          'Disobeys and raises voice',
          'Obeys, treats them with loving kindness, and prays for them',
          'Ignores them',
          'Gets angry with them'
        ],
        correctIndex: 1,
        conceptTestedAr: 'بر الوالدين وحسن معاملتهما',
        conceptTestedEn: 'Birr Al-Walidayn',
        explanationAr: 'إجابة صحيحة وفق منهج التربية الإسلامية المعتمد.',
        explanationEn: 'Correct answer according to official curriculum.',
        difficulty: 'easy'
      }
    ]
    }
  }
];
