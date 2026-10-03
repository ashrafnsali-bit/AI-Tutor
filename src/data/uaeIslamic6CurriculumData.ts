import type { Lecture } from '../types';

// ============================================================================
// UNITED ARAB EMIRATES (دولة الإمارات العربية المتحدة)
// MINISTRY OF EDUCATION (وزارة التربية والتعليم - UAE MOE)
// CURRICULUM: ISLAMIC EDUCATION — GRADE 6 (التربية الإسلامية - الصف السادس)
// ============================================================================
// Authentic official UAE MOE Syllabus for Grade 6 covering:
// 1. المجال القرآني: سورة السجدة & سورة الملك
// 2. مجال الحديث الشريف: حديث أحب الأعمال إلى الله & حديث المسلم أخو المسلم
// 3. مجال العقيدة الإسلامية: دلائل وحدانية الله وقدرته في الكون & الإيمان بالكتب السماوية والرسل
// 4. مجال السيرة النبوية والشخصيات: غزوة الأحزاب (الخندق) & أم المؤمنين خديجة بنت خويلد رضي الله عنها
// 5. مجال الفقه الإسلامي: أحكام صلاة المسافر وصلاة الجماعة
// 6. مجال الأخلاق والآداب: أدب الحديث والإحسان إلى الجار
// ============================================================================

export const UAE_ISLAMIC_G6_LECTURES: Lecture[] = [
  // ── LECTURE 1: SURAH AS-SAJDAH (القرآن الكريم وتفسيره - سورة السجدة) ──
  {
    id: 'uae-isl-g6-1',
    order: 1,
    titleAr: 'المحاضرة 1: سورة السجدة (تلاوة وتفسير ودلائل الإعجاز والبعث)',
    titleEn: 'Lecture 1: Surah As-Sajdah (Recitation, Exegesis & Signs of Resurrection)',
    subtitleAr: 'تلاوة الآيات الكريمة وتدبر دلائل خلق الإنسان من طين، وعظمة تنزيل الكتاب وحقيقة البعث والنشور.',
    subtitleEn: 'Reciting and contemplating the creation of humankind, divine revelation of the Quran, and the certainty of Resurrection.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1',
    unitTitleAr: 'المجال الأول: القرآن الكريم وتفسيره',
    unitTitleEn: 'Domain 1: Divine Revelation (Quran & Tafseer)',
    lessonNumberAr: 'الدرس 1: سورة السجدة (الآيات 1-14)',
    lessonNumberEn: 'Lesson 1: Surah As-Sajdah (Verses 1-14)',

    warmupHookAr: 'تأمل في دقة حواسك: سمعك، بصرك، ونبض قلبك! كيف بدأت هذه الأعجوبة من نطفة في قرار مكين؟ سورة السجدة تأخذنا في رحلة إيمانية تكشف كيف خلق الله الإنسان وركّب فيه السمع والأبصار والأفئدة، ليدرك بالدليل القاطع أن من أنشأه أول مرة قادر على بعثه بعد الموت!',
    warmupHookEn: 'Reflect upon your senses: hearing, sight, and heart! How did this wonder begin from a humble origin? Surah As-Sajdah reveals how Allah created man, instilling senses to recognize through indisputable signs that the Creator of life can resurrect it!',

    learningOutcomesAr: [
      'أن يتلو الطالب آيات سورة السجدة تلاوة مجودة مع مراعاة أحكام التجويد والوقف.',
      'أن يوضح معاني المفردات القرآنية (تنزيل الكتاب، ماء مهين، سوّاه، ضللنا في الأرض).',
      'أن يستنتج دلائل قدرة الله في مراحل خلق الإنسان وتكريمه بالعقل والسمع والأبصار.',
      'أن يستشعر الطالب عظمة الخالق ويسارع بالاستجابة لأوامره والشكر على نعمه.'
    ],
    learningOutcomesEn: [
      'Recite verses of Surah As-Sajdah properly observing tajweed rules.',
      'Clarify core Quranic vocabulary (Tanzeel, Ma\'in Maheen, Sawwah).',
      'Infer Allah\'s creative power in embryonic stages of human creation and gifted faculties.',
      'Experience deep gratitude and reverence towards the Creator.'
    ],

    vocabulary: [
      {
        termAr: 'لا رَيْبَ فِيهِ (No doubt)',
        termEn: 'No doubt / absolute certainty',
        definitionAr: 'لا شك ولا ارتياب في أنه حق منزل من عند رب العالمين.',
        definitionEn: 'Without any doubt; absolute truth revealed by the Lord of the worlds.'
      },
      {
        termAr: 'مَاءٍ مَّهِينٍ (Humble fluid)',
        termEn: 'Humble fluid',
        definitionAr: 'النطفة الضعيفة التي بدأ الله بها نسل بني آدم دلالةً على قدرته الفائقة في الإيجاد.',
        definitionEn: 'The humble embryonic drop from which human lineage was originated, signifying supreme divine power.'
      },
      {
        termAr: 'سَوَّاهُ (Fashioned him in proportion)',
        termEn: 'Fashioned and perfected him',
        definitionAr: 'عدل خلقته في أحسن تقويم وجعل أعضاءه متناسقة ملائمة لوظائفها الحياتية.',
        definitionEn: 'Formed and perfected human physical design in optimal balance and proportion.'
      }
    ],

    keyConceptsAr: [
      'مصدر القرآن الكريم: وحي إلهي صادق من رب العالمين لا مدخل للشك فيه.',
      'مراحل خلق الإنسان: أصل الخلق من طين (آدم عليه السلام) وتناسل الذرية من سلالة ماء مهين.',
      'نعم السمع والأبصار والأفئدة: أدوات الإدراك والمعرفة وموجب شكر الله عز وجل.',
      'حتمية البعث والنشور: قدرة الله على الخلق الأول دليل قطعي على الإعادة يوم القيامة.'
    ],
    keyConceptsEn: [
      'Origin of Quran: Divine revelation beyond doubt from the Lord of worlds.',
      'Creation of Humanity: Clay origin perfected and bestowed with hearing and sight.',
      'Faculties of Perception: Hearing, sight, and cognition requiring perpetual gratitude.',
      'Resurrection Certainty: The initial creation proves the inevitability of resurrection.'
    ],

    summaryAr: 'تؤكد سورة السجدة في المنهج الإماراتي للصف السادس على صدق القرآن الكريم، وتفصّل في إبداع خلق الإنسان وتكريمه بنعم السمع والبصر والعقل، وتدحض شبهات المنكرين للبعث ببرهان الخلق الأول.',
    summaryEn: 'Surah As-Sajdah in the UAE Grade 6 curriculum affirms the authenticity of the Quran, highlights embryonic creation, and demonstrates the certainty of Resurrection through divine signs in human faculties.',

    sections: [
      {
        titleAr: '1. تنزيل الكتاب وتحدي الإعجاز القرآني',
        titleEn: '1. Divine Revelation of the Quran and Inimitability',
        contentAr: 'تفتتح السورة بالحروف المقطعة (الم)، مؤكدة أن القرآن الكريم وحي منزل لا ريب فيه من رب العالمين، وليس من تأليف بشر كما زعم المشركون. إن الغاية من إنزال القرآن هي هداية البشرية وإخراجها من ظلمات الجهل إلى نور التوحيد والعمل الصالح.',
        contentEn: 'The Surah opens with disjointed letters (Alif-Lam-Mim), declaring that the Quran is undisputed revelation from the Lord of all creation, sent to guide humanity to truth and justice.',
        tipsAr: ['عند قراءة الحروف المقطعة نمد (الميم) و(اللام) مداً لازماً بمقدار ست حركات.'],
        tipsEn: ['Lengthen disjointed letters (Lam and Meem) for 6 counts (Madd Lazim).']
      },
      {
        titleAr: '2. بديع خلق الإنسان وعظمة التكوين',
        titleEn: '2. The Divine Miracle of Human Creation',
        contentAr: 'تستعرض الآيات إعجاز الخالق سبحانه: خلق أصل الإنسان آدم عليه السلام من طين، ثم جعل استمرار نسله من نطفة (سلالة من ماء مهين)، ثم نفخ فيه من روحه، وزوده بأدوات العلم والإدراك: (وَجَعَلَ لَكُمُ السَّمْعَ وَالأَبْصَارَ وَالأَفْئِدَةَ قَلِيلاً مَّا تَشْكُرُونَ). وهذه النعم تتطلب شكر المنعم واستخدامها في طاعته.',
        contentEn: 'The verses detail divine craftsmanship: creating the first human from clay, continuing progeny through reproduction, and bestowing faculties of intellect, hearing, and sight.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-1',
      titleAr: 'تقييم الدرس 1: سورة السجدة ودلائل قدرة الله والبعث',
      titleEn: 'Assessment 1: Surah As-Sajdah & Signs of Divine Power',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-1-1',
          textAr: 'ما الحكمة من تذكير الله للإنسان بنعمة (السمع والأبصار والأفئدة) في سورة السجدة؟',
          textEn: 'What is the wisdom of highlighting hearing, sight, and cognition in Surah As-Sajdah?',
          optionsAr: [
            'ليدرك الإنسان عظمة الخالق ويستخدم هذه النعم في المعرفة والتوحيد وشكر الله',
            'للتباهي بها والتكبر على المخلوقات',
            'للاكتفاء بالحياة الدنيا ونسيان الآخرة',
            'لإثبات عجز الحواس عن التفكير'
          ],
          optionsEn: ['To recognize divine greatness and express gratitude through faith and knowledge', 'For arrogance', 'To forget afterlife', 'To prove sensory inadequacy'],
          correctIndex: 0,
          conceptTestedAr: 'شكر النعم والتفكر في آيات الله',
          conceptTestedEn: 'Gratitude and contemplation',
          explanationAr: 'منح الله الإنسان الحواس والعقل ليتفكر في خلق السماوات والأرض ويعبد الله على بصيرة.',
          explanationEn: 'Allah granted senses and intellect so humans contemplate His creation and worship Him with insight.',
          difficulty: 'medium'
        },
        {
          id: 'q-uae-g6-1-2',
          textAr: 'كيف ردت سورة السجدة على زعم منكري البعث الذين قالوا: (أَئِذَا ضَلَلْنَا فِي الْأَرْضِ أَئِنَّا لَفِي خَلْقٍ جَدِيدٍ)؟',
          textEn: 'How does Surah As-Sajdah refute deniers of the Resurrection?',
          optionsAr: [
            'بأن القادر على خلق الإنسان أول مرة من العدم والطين قادر بالبديهة على إعادته وبعثه',
            'بموافقتهم على استحالة البعث عقلياً',
            'بعدم تقديم أي حجة عقلية أو كونية',
            'بالاكتفاء بذكر العقوبات الدنيوية فقط'
          ],
          optionsEn: ['The One who created humanity from non-existence can naturally recreate them', 'Agreeing with them', 'Offering no proof', 'Only mentioning worldly penalty'],
          correctIndex: 0,
          conceptTestedAr: 'برهان الخلق الأول على إمكانية البعث',
          conceptTestedEn: 'Initial creation as proof of resurrection',
          explanationAr: 'الإعادة أهون في حكم العقل من الابتداء، والذي أنشأ الحياة قادر يقيناً على إعادتها.',
          explanationEn: 'Recreating is even more self-evident than initial origination from nothingness.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── LECTURE 2: SURAH AL-MULK (القرآن الكريم وتفسيره - سورة الملك) ──
  {
    id: 'uae-isl-g6-2',
    order: 2,
    titleAr: 'المحاضرة 2: سورة الملك (أهداف السورة ودلائل القدرة وعظمة الكون)',
    titleEn: 'Lecture 2: Surah Al-Mulk (Themes of Dominion, Divine Omnipotence & Cosmic Order)',
    subtitleAr: 'دراسة سورة تبارك، الحكمة من خلق الموت والحياة، بديع خلق السماوات السبع، وحفظ الله للكون والطيور.',
    subtitleEn: 'Study of Surah Al-Mulk, the purpose of death and life, seven cosmic heavens, and divine preservation.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1',
    unitTitleAr: 'المجال الأول: القرآن الكريم وتفسيره',
    unitTitleEn: 'Domain 1: Divine Revelation (Quran & Tafseer)',
    lessonNumberAr: 'الدرس 2: سورة الملك ودلائل الملك والقدرة',
    lessonNumberEn: 'Lesson 2: Surah Al-Mulk (The Sovereign Dominion)',

    warmupHookAr: 'انظر إلى السماء الصافية في ليلة صحراوية هادئة: هل تجد فيها شقاً أو عيباً أو تداخلاً؟ سورة الملك، التي تسمى المنجية والواقية، تدعونا لإعادة البصر كرتين لنرى بديع صنع الله وإتقانه التام الذي لا تشوبه شائبة!',
    warmupHookEn: 'Look up at the clear night sky: can you find any fissure, fault, or imbalance? Surah Al-Mulk invites us to look again and again to witness the absolute perfection of Allah\'s design!',

    learningOutcomesAr: [
      'أن يستنبط الطالب الحكمة الإلهية من خلق الموت والحياة (ليبلوكم أيكم أحسن عملاً).',
      'أن يحلل مظاهر الإتقان والجمال في خلق السماوات السبع دون تفاوت أو فطور.',
      'أن يستشهد بالأدلة الكونية الدالة على ملك الله: تسيير الطير صافات، وإمساك الأرض.',
      'أن يحرص الطالب على تلاوة سورة الملك وحفظها استناناً بسنة النبي ﷺ.'
    ],
    learningOutcomesEn: [
      'Derive the divine wisdom behind creating death and life (testing best deeds).',
      'Analyze flawless equilibrium across seven cosmic realms.',
      'Cite signs of divine sustenance: soaring birds in flight, earthly balance.',
      'Memorize and regularly recite Surah Al-Mulk following the Sunnah.'
    ],

    vocabulary: [
      {
        termAr: 'تَبَارَكَ (Blessed is He)',
        termEn: 'Blessed / Exalted in glory',
        definitionAr: 'تكاثرت بركاته وخيراته، وتعالى مجده وعظم سلطانه.',
        definitionEn: 'Abundantly blessed, exalted, and boundless in majesty and benevolence.'
      },
      {
        termAr: 'تَفَاوُتٍ (Incongruity / Fault)',
        termEn: 'Disproportion / imperfection',
        definitionAr: 'اختلال أو نقص أو عدم تناسق في خلق السماوات والكون.',
        definitionEn: 'Defect, discrepancy, or lack of proportion in cosmic creation.'
      },
      {
        termAr: 'فُطُورٍ (Rifts / Fissures)',
        termEn: 'Cracks / rifts',
        definitionAr: 'شقوق أو تصدعات تدل على الضعف أو الخلل.',
        definitionEn: 'Cracks, breaks, or flaws indicating structural weakness.'
      }
    ],

    keyConceptsAr: [
      'الغاية من الحياة والموت: الابتلاء والامتحان لمعرفة أحسن الناس عملاً وإخلاصاً وإتقاناً.',
      'الإعجاز الكوني: نظام كوني متكامل ومتقن لا مجال فيه للمصادفة أو العبث.',
      'رحمة الله ورزقه: إمساك الطير في جو السماء، وجعل الأرض ذلولاً للمشي في مناكبها والأكل من رزقه.',
      'فضل سورة الملك: سورة ثلاثون آية شفعت لصاحبها حتى غُفر له، وهي المنجية من عذاب القبر.'
    ],
    keyConceptsEn: [
      'Purpose of Life & Death: Testing who produces the most sincere and excellent actions.',
      'Cosmic Harmony: Flawless celestial equilibrium pointing directly to One Sovereign Creator.',
      'Divine Sustenance: Enabling sustenance, stabilizing the Earth, sustaining flight of birds.',
      'Virtues of Surah Al-Mulk: Intercession for its reciter and protection.'
    ],

    sections: [
      {
        titleAr: '1. الحكمة من خلق الموت والحياة وإتقان العمل',
        titleEn: '1. The Wisdom of Death and Life: Striving for Excellence',
        contentAr: 'يقول الله تعالى: (الَّذِي خَلَقَ الْمَوْتَ وَالْحَيَاةَ لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا). الحياة دار اختبار وعمل، والموت انتقال إلى دار الجزاء، والمطلوب من المسلم أن يقدم "أحسن العمل" وهو ما كان خالصاً لله وصواباً على هدي النبي ﷺ، مع بذل أقصى درجات الإتقان والتميز في دراسته وخدمة مجتمعه.',
        contentEn: 'Allah states: "He who created death and life to test which of you is best in deed." Worldly existence is a field of purposeful effort, demanding both sincere intent and utmost excellence.',
        tipsAr: ['أحسن العمل هو أخلصه وأصوبه، فلا يكفي كثرة العمل بل جودته وإخلاصه وإتقانه.']
      },
      {
        titleAr: '2. التدبر في آيات الآفاق والطيور في السماء',
        titleEn: '2. Contemplating the Flight of Birds and Terrestrial Subservience',
        contentAr: 'يدعونا الله للنظر في الطيور: (أَوَلَمْ يَرَوْا إِلَى الطَّيْرِ فَوْقَهُمْ صَافَّاتٍ وَيَقْبِضْنَ مَا يُمْسِكُهُنَّ إِلَّا الرَّحْمَنُ). إن قوانين الطيران والضغط والديناميكا الهوائية هي سنن أودعها الله في الكون لتسخير الحياة للإنسان، وموجب للاعتراف بوحدانية الله.',
        contentEn: 'Contemplating birds in gliding flight reveals aerodynamic balance sustained by universal laws ordained by the Most Merciful.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-2',
      titleAr: 'تقييم الدرس 2: سورة الملك وأهداف السورة ودلائل القدرة',
      titleEn: 'Assessment 2: Surah Al-Mulk & Cosmic Power',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-2-1',
          textAr: 'ما الغاية التي بيّنتها سورة الملك من خلق الموت والحياة في قوله تعالى: (لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا)؟',
          textEn: 'What is the purpose of creating death and life indicated in Surah Al-Mulk?',
          optionsAr: [
            'امتحان وابتلاء الناس ليتميز من يقدم العمل الأخلص لله والأصوب والأكثر إتقاناً',
            'التنافس في جمع الأموال فقط',
            'الحياة لمجرد اللهو واللعب دون حساب',
            'إظهار قوة الإنسان المطلقة دون حاجة لخالقه'
          ],
          optionsEn: ['Testing humanity to distinguish who acts with utmost sincerity and excellence', 'Competing for wealth', 'Living solely for play without accountability', 'Proving absolute human power'],
          correctIndex: 0,
          conceptTestedAr: 'الحكمة من خلق الموت والحياة وإتقان العمل',
          conceptTestedEn: 'Purpose of death/life and excellence',
          explanationAr: 'خلق الله الموت والحياة ليختبر إخلاص العباد وإتقانهم لأعمالهم الصالحة.',
          explanationEn: 'Allah created mortality and existence to test sincerity and excellence in deeds.',
          difficulty: 'medium'
        },
        {
          id: 'q-uae-g6-2-2',
          textAr: 'ما دلالة دعوة القرآن لإعادة البصر في خلق السماوات: (فَارْجِعِ الْبَصَرَ هَلْ تَرَى مِن فُطُورٍ)؟',
          textEn: 'What does the challenge to look again for cosmic defects signify?',
          optionsAr: [
            'البرهان على كمال الصنع الإلهي وخلو الكون من أي خلل أو عيب أو تصدع',
            'التشكيك في قدرة العين على الرؤية',
            'إثبات وجود شقوق في طبقات السماء',
            'الدعوة إلى ترك دراسة علوم الفلك'
          ],
          optionsEn: ['Proof of divine perfection and cosmic equilibrium without flaws', 'Doubting human vision', 'Proving fractures in the sky', 'Discouraging astronomy'],
          correctIndex: 0,
          conceptTestedAr: 'الإتقان والإعجاز الكوني في خلق السماوات',
          conceptTestedEn: 'Cosmic perfection and design',
          explanationAr: 'التحدي الإلهي يثبت أن الكون في غاية الدقة والتناسق، مما يدل على وحدانية الخالق وعظمته.',
          explanationEn: 'The verse challenges humanity to find flaws, affirming absolute cosmic perfection.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: HADITH: DEEDS MOST BELOVED TO ALLAH (الحديث الشريف - أحب الأعمال إلى الله) ──
  {
    id: 'uae-isl-g6-3',
    order: 3,
    titleAr: 'المحاضرة 3: حديث شريف: أحب الأعمال إلى الله عز وجل',
    titleEn: 'Lecture 3: Prophetic Hadith: Deeds Most Beloved to Allah',
    subtitleAr: 'دراسة حديث عبد الله بن مسعود رضي الله عنه: الصلاة على وقتها، بر الوالدين، والجهاد في سبيل الله.',
    subtitleEn: 'Hadith of Ibn Mas\'ud: Prayer at its appointed time, filial piety to parents, and striving in the cause of Allah.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1',
    unitTitleAr: 'المجال الثاني: الحديث الشريف وشروحه',
    unitTitleEn: 'Domain 2: Prophetic Hadith',
    lessonNumberAr: 'الدرس 3: أحب الأعمال إلى الله',
    lessonNumberEn: 'Lesson 3: The Most Beloved Deeds',

    warmupHookAr: 'إذا سألت بطلاً ناجحاً: ما أولوياتك لتحقيق المركز الأول؟ سيجيبك بترتيب وقته وجهده بدقة! سأل الصحابي الجليل عبد الله بن مسعود رسول الله ﷺ عن أولويات الأعمال وأعظمها عند الله، فكان الجواب النبوي منهاجاً لبناء الإنسان الناجح الصالح!',
    warmupHookEn: 'If you ask any champion how they achieved excellence, they will detail prioritization! Ibn Mas\'ud asked the Prophet ﷺ about the supreme deeds most beloved to Allah, receiving a timeless blueprint for personal and spiritual success!',

    learningOutcomesAr: [
      'أن يحفظ الطالب الحديث الشريف حفظاً متقناً بسنده ومفرداته.',
      'أن يبين الطالب فضل أداء الصلاة في وقتها المحدد وأثر ذلك على تنظيم الوقت والانضباط.',
      'أن يعدد صور بر الوالدين والإحسان إليهما في القول والفعل والدعاء.',
      'أن يشرح مفهوم الجهاد الشامل (جهاد النفس، طلب العلم، وبناء الوطن والدفاع عنه).'
    ],
    learningOutcomesEn: [
      'Memorize the Hadith accurately with meaning and vocabulary.',
      'Clarify virtues of performing prayer on time and its impact on discipline.',
      'Enumerate practical expressions of honoring parents.',
      'Explain broad Islamic striving: personal rectitude, seeking knowledge, and serving community.'
    ],

    vocabulary: [
      {
        termAr: 'عَلَى وَقْتِهَا (At its appointed time)',
        termEn: 'At its prescribed time',
        definitionAr: 'أداء الصلاة المفروضة فور دخول وقتها دون تأخير أو تكاسل.',
        definitionEn: 'Performing obligatory prayer promptly at its prescribed arrival without delay.'
      },
      {
        termAr: 'بِرُّ الْوَالِدَيْنِ (Filial piety)',
        termEn: 'Honoring parents',
        definitionAr: 'طاعتهما في غير معصية، والتأدب معهما، وخفض الجناح لهما، وقضاء حوائجهما.',
        definitionEn: 'Respecting, obeying, caring for, and speaking with utmost humility and love to parents.'
      }
    ],

    keyConceptsAr: [
      'نص الحديث: سألتُ رسولَ اللهِ ﷺ: أيُّ العملِ أحبُّ إلى اللهِ؟ قال: "الصلاةُ على وقتِها"، قلتُ: ثمَّ أيّ؟ قال: "برُّ الوالدينِ"، قلتُ: ثمَّ أيّ؟ قال: "الجهادُ في سبيلِ اللهِ".',
      'ترتيب الأولويات: الصلاة حق الخالق الأعظم، وبر الوالدين أعظم حقوق الخلق، والجهاد لحماية الدين والوطن والعدل.',
      'أثر الصلاة في وقتها: تنمية احترام المواعيد، تطهير القلب، وتجديد النشاط اليومي.',
      'مكانة الوالدين: قرن الله حقه في التوحيد بحق الوالدين في البر والإحسان: (وقضى ربك ألا تعبدوا إلا إياه وبالوالدين إحساناً).'
    ],
    keyConceptsEn: [
      'Hadith Text: Ibn Mas\'ud asked: Which deed is most beloved to Allah? "Prayer on its time", then "Honoring parents", then "Striving in Allah\'s cause".',
      'Hierarchy of Priorities: Worship of the Creator, honoring parents, safeguarding truth and community.',
      'Impact of Timely Prayer: Punctuality, spiritual purity, and structured daily life.',
      'Parental Status: Linked in the Quran directly with pure monotheism.'
    ],

    sections: [
      {
        titleAr: '1. الصلاة على وقتها: عماد الدين ومفتاح البركة',
        titleEn: '1. Prayer at its Proper Time: The Pillar of Faith',
        contentAr: 'بدأ النبي ﷺ بالصلاة على وقتها؛ لأنها الصلة المباشرة بين العبد وربه، وهي الأساس الذي تنبثق منه كل الأعمال الصالحة. الطالب الذي يحرص على صلاته في أوقاتها يكتسب الانضباط وتنظيم الوقت، وتفيض عليه البركة والسكينة في دراسته وحياته.',
        contentEn: 'The Prophet ﷺ prioritized prompt prayer because it is the vital lifeline between servant and Creator. Punctuality in prayer cultivates high discipline and peace of mind.'
      },
      {
        titleAr: '2. بر الوالدين والجهاد الإيجابي في خدمة المجتمع',
        titleEn: '2. Filial Piety & Striving in Service of Community',
        contentAr: 'جاء بر الوالدين في المرتبة الثانية مباشرة، فالأم سهرت وحملت وربت، والأب كد واجتهد وأنفق. وبرهما يكون بالكلمة الطيبة (وقل لهما قولاً كريماً)، والتواضع معهما، ومساعدتهما في شؤون البيت. ويليه السعي الدؤوب لنفع الناس وبناء الوطن وطلب العلم ونشره.',
        contentEn: 'Honoring parents follows divine worship immediately. Gentle speech, dutiful support, and compassionate accompaniment are core requirements.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-3',
      titleAr: 'تقييم الدرس 3: حديث أحب الأعمال إلى الله',
      titleEn: 'Assessment 3: Deeds Most Beloved to Allah',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-3-1',
          textAr: 'ما الترتيب الصحيح للأعمال الثلاثة الأحب إلى الله كما ورد في حديث ابن مسعود رضي الله عنه؟',
          textEn: 'What is the correct order of the three most beloved deeds in the hadith?',
          optionsAr: [
            'الصلاة على وقتها، ثم بر الوالدين، ثم الجهاد في سبيل الله',
            'الجهاد في سبيل الله، ثم الصلاة، ثم بر الوالدين',
            'بر الوالدين، ثم الجهاد، ثم الصلاة',
            'الصدقة، ثم الصوم، ثم الحج'
          ],
          optionsEn: ['Prayer on its time, then honoring parents, then striving in Allah\'s cause', 'Striving, prayer, parents', 'Parents, striving, prayer', 'Charity, fasting, pilgrimage'],
          correctIndex: 0,
          conceptTestedAr: 'ترتيب الأولويات الإيمانية في الحديث النبوي',
          conceptTestedEn: 'Order of beloved deeds in Hadith',
          explanationAr: 'رتب النبي الأعمال: حق الله بالصلاة على وقتها أولاً، ثم أعظم حقوق العباد ببر الوالدين ثانياً، ثم الجهاد لحماية الحق وبناء الأمة.',
          explanationEn: 'The Prophet sequenced Allah\'s right through timely prayer, parental rights, then safeguarding community truth.',
          difficulty: 'easy'
        },
        {
          id: 'q-uae-g6-3-2',
          textAr: 'كيف يبر الطالب والديه في حياتهما اليومية وفق هدي الإسلام؟',
          textEn: 'How does a student honor parents in daily life according to Islamic guidance?',
          optionsAr: [
            'بالتأدب في الحديث معهما، طاعتهما بالمعروف، ومساعدتهما والتفوق لإدخال السرور عليهما',
            'برفع الصوت أمامهما لإثبات الرأي',
            'بتجاهل نصائحهما وتفضيل الأصدقاء دائماً',
            'بالاكتفاء بزيارتهما في المناسبات فقط'
          ],
          optionsEn: ['Speaking politely, obeying them in righteousness, helping at home, and bringing joy through academic excellence', 'Raising voice', 'Ignoring advice', 'Visiting only on holidays'],
          correctIndex: 0,
          conceptTestedAr: 'صور بر الوالدين والتطبيق العملي',
          conceptTestedEn: 'Practical expressions of honoring parents',
          explanationAr: 'بر الوالدين يشمل خفض الجناح لهما، والحديث الطيب، والمعاونة، والاجتهاد في الدراسة لإسعادهما.',
          explanationEn: 'Filial piety involves humble speech, active assistance, and striving for excellence to please them.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: HADITH: THE MUSLIM IS THE BROTHER OF THE MUSLIM (الحديث الشريف - المسلم أخو المسلم) ──
  {
    id: 'uae-isl-g6-4',
    order: 4,
    titleAr: 'المحاضرة 4: حديث شريف: المسلم أخو المسلم (الأخوة والتكافل الاجتماعي)',
    titleEn: 'Lecture 4: Prophetic Hadith: A Muslim is the Brother of a Muslim (Social Cohesion)',
    subtitleAr: 'دراسة حديث عبد الله بن عمر رضي الله عنهما: حرمة الظلم، تفريج الكرب، الستر، وعون المسلم لأخيه.',
    subtitleEn: 'Hadith of Ibn Umar: Prohibition of injustice, relieving hardship, protecting dignity, and mutual assistance.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1',
    unitTitleAr: 'المجال الثاني: الحديث الشريف وشروحه',
    unitTitleEn: 'Domain 2: Prophetic Hadith',
    lessonNumberAr: 'الدرس 4: المسلم أخو المسلم',
    lessonNumberEn: 'Lesson 4: Muslim Brotherhood and Social Solidarity',

    warmupHookAr: 'تخيل مجتمعاً لا يُترك فيه محتاج وحيداً، ولا يُظلم فيه ضعيف، ويسارع الجميع لمساندة من يمر بأزمة! هذا المجتمع المثالي هو ما رسم ملامحه نبينا الكريم ﷺ في حديث "المسلم أخو المسلم". كيف نطبق هذه المبادئ في فصولنا ومدارسنا اليوم؟',
    warmupHookEn: 'Imagine a community where no needy person is left alone, no vulnerable individual is oppressed, and everyone rushes to relieve distress! This ideal society was established by our Prophet ﷺ in this profound hadith.',

    learningOutcomesAr: [
      'أن يحفظ الطالب الحديث الشريف ويفهم معاني ألفاظه بدقة.',
      'أن يوضح الطالب معنى الأخوة الإيمانية وحرمة ظلم المسلم أو خذلانه.',
      'أن يستنتج فضل تفريج كرب الناس والستر عليهم ومساعدتهم في قضاء حوائجهم.',
      'أن يربط قيم الحديث الشريف بمبادئ العطاء والتسامح والتكافل في دولة الإمارات.'
    ],
    learningOutcomesEn: [
      'Memorize the hadith and understand core meanings accurately.',
      'Clarify fraternal bond in Islam and absolute prohibition of oppression.',
      'Deduce blessings of relieving hardship, protecting dignity, and offering aid.',
      'Connect hadith values with national initiatives of benevolence and tolerance in the UAE.'
    ],

    vocabulary: [
      {
        termAr: 'لَا يَظْلِمُهُ (Does not wrong him)',
        termEn: 'Does not wrong or oppress him',
        definitionAr: 'لا يتعدى على حقه في نفسه أو ماله أو عرضه بأي نوع من الأذى.',
        definitionEn: 'Does not infringe upon his life, property, or honor in any way.'
      },
      {
        termAr: 'لَا يُسْلِمُهُ (Does not surrender him)',
        termEn: 'Does not abandon him',
        definitionAr: 'لا يتركه في الهلاك أو يسلمه لعدوه، بل يدافع عنه وينصره بالحق.',
        definitionEn: 'Does not abandon him to peril or let harm overtake him, standing by him with truth.'
      },
      {
        termAr: 'فَرَّجَ اللهُ عَنْهُ (Allah relieves his distress)',
        termEn: 'Allah relieves his hardship',
        definitionAr: 'كشف الله عنه همومه وشدائده، والجزاء من جنس العمل.',
        definitionEn: 'Allah alleviates his trials, reciprocating his goodwill on the Day of Judgment.'
      }
    ],

    keyConceptsAr: [
      'نص الحديث: قال رسول الله ﷺ: "المسلمُ أخو المسلمِ؛ لا يَظْلِمُه ولا يُسْلِمُه، ومَن كان في حاجةِ أخيه كان اللهُ في حاجتِه، ومَن فرَّجَ عن مسلمٍ كُربةً فرَّجَ اللهُ عنه كربةً من كُرباتِ يومِ القيامةِ، ومَن ستَرَ مسلماً ستَرَه اللهُ يومَ القيامةِ".',
      'حرمة الظلم: الظلم ظلمات يوم القيامة، والمسلم ينصر أخاه ظالماً برده عن الظلم، ومظلوماً بأخذ حقه.',
      'قضاء حوائج الناس: من أعظم القربات إلى الله، ومجازاة الله للعبد بمعونته وحفظه وتيسير أموره.',
      'الستر وعدم التشهير: حماية المجتمع من إشاعة الفواحش وحفظ كرامة الناس وعدم تتبع عوراتهم.'
    ],
    keyConceptsEn: [
      'Hadith Text: "A Muslim is the brother of a Muslim: he does not wrong him nor does he surrender him to harm..."',
      'Prohibition of Oppression: Injustice brings darkness on Judgment Day.',
      'Fulfilling Needs: Divine support accompanies anyone dedicated to serving fellow human beings.',
      'Preserving Dignity: Protecting privacy and avoiding public defamation.'
    ],

    sections: [
      {
        titleAr: '1. ركائز الأخوة الإيمانية: نفي الظلم والخذلان',
        titleEn: '1. Pillars of Islamic Brotherhood: Eradicating Oppression',
        contentAr: 'يرسي الحديث قاعدة ذهبية: رابطة الأخوة في الدين توجب حماية الأخ وصيانته من الظلم (قولاً أو فعلاً أو تنمراً) ومنع إسلامه للضياع والخذلان. في المدرسة، المسلم يدافع عن زميله ولا يرضى أن يتعرض أحد للإيذاء أو الاستهزاء.',
        contentEn: 'The hadith sets a golden rule: brotherhood requires safeguarding peers from bullying, insult, or abandonment in their time of need.'
      },
      {
        titleAr: '2. ثمار الإحسان: معونة الله وتفريج كربات القيامة والستر',
        titleEn: '2. Fruits of Compassion: Divine Aid, Relief of Trials & Grace',
        contentAr: 'كل خطوة تخطوها لمساعدة محتاج أو شرح مسألة لزميل أو التبرع للفقراء، يجعل الله جزاءها مضاعفاً: يكون الله في حاجتك، ويفرج عنك شدائد يوم القيامة، ويسترك في الدنيا والآخرة. ومبادرات الخير الإماراتية (كحملات إطعام الطعام ومساعدة المنكوبين) تجسيد حي لهذا الحديث النبوي.',
        contentEn: 'Assisting others yields immense divine blessings: divine backing in personal affairs, relief during Judgment Day distress, and enduring grace.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-4',
      titleAr: 'تقييم الدرس 4: حديث المسلم أخو المسلم والتكافل الاجتماعي',
      titleEn: 'Assessment 4: Hadith of Muslim Brotherhood & Solidarity',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-4-1',
          textAr: 'ما معنى عبارة "ولا يُسْلِمُهُ" الواردة في حديث (المسلم أخو المسلم)؟',
          textEn: 'What does "nor does he surrender him" signify in the hadith?',
          optionsAr: [
            'لا يتركه في الهلاك أو يسلمه لعدوه أو للظلم، بل يقف معه ويسانده بالحق',
            'لا يدعوه إلى دين الإسلام',
            'لا يسلّم عليه عند اللقاء',
            'لا يشاركه في طعامه وشرابه'
          ],
          optionsEn: ['Does not abandon him to peril or let harm overtake him, standing by him with truth', 'Does not invite him to Islam', 'Does not greet him', 'Does not share food'],
          correctIndex: 0,
          conceptTestedAr: 'معاني مفردات الحديث الشريف وحقوق الأخوة',
          conceptTestedEn: 'Hadith vocabulary and fraternal rights',
          explanationAr: 'لا يسلمه أي: لا يتركه مع من يؤذيه، ولا يتخلى عنه عند حاجته للعون والنصرة.',
          explanationEn: '"Does not surrender him" means he never abandons him to harm or injustice.',
          difficulty: 'medium'
        },
        {
          id: 'q-uae-g6-4-2',
          textAr: 'ما الجزاء الإلهي المترتب على تفريج كربة عن إنسان محتاج كما بيّن الحديث الشريف؟',
          textEn: 'What is the divine reward for relieving someone\'s distress according to the hadith?',
          optionsAr: [
            'يفرّج الله عنه كربة من كربات يوم القيامة العظيمة، ويكون الله في عونه وحاجته',
            'الحصول على الشهرة والمكاسب المادية في الدنيا فقط',
            'إعفاؤه من جميع الواجبات الشرعية',
            'عدم الحاجة لأداء العبادات'
          ],
          optionsEn: ['Allah relieves one of his major hardships on Judgment Day and aids his needs', 'Worldly fame only', 'Exemption from religious duties', 'No need for prayer'],
          correctIndex: 0,
          conceptTestedAr: 'الجزاء من جنس العمل وفضل تفريج الكرب',
          conceptTestedEn: 'Reciprocity of deeds and relieving distress',
          explanationAr: 'الجزاء من جنس العمل؛ من فرج عن الناس كرب الدنيا فرج الله عنه أهوال وشدائد يوم القيامة.',
          explanationEn: 'The reward corresponds directly to the deed: relieving worldly distress brings relief from hardship on Judgment Day.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: AQEEDAH: SIGNS OF ALLAH'S ONENESS & POWER (العقيدة الإسلامية - دلائل وحدانية الله وقدرته) ──
  {
    id: 'uae-isl-g6-5',
    order: 5,
    titleAr: 'المحاضرة 5: دلائل وحدانية الله تعالى وقدرته في الكون',
    titleEn: 'Lecture 5: Signs of Divine Oneness (Tawheed) and Omnipotence in the Universe',
    subtitleAr: 'التفكر في خلق السماوات والأرض، برهان التمانع والنظام الدقيق، ومظاهر الإبداع الإلهي في الكائنات الحية.',
    subtitleEn: 'Contemplating cosmic creation, proof of mutual exclusion, fine-tuning, and living marvels.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1',
    unitTitleAr: 'المجال الثالث: العقيدة الإسلامية',
    unitTitleEn: 'Domain 3: Islamic Creed (Aqeedah)',
    lessonNumberAr: 'الدرس 5: دلائل وحدانية الله وقدرته',
    lessonNumberEn: 'Lesson 5: Evidence of Divine Oneness and Power',

    warmupHookAr: 'لو كان في دولة ما حاكمان يتنازعان القرارات، أو في السفينة قبطانان يتعارضان في التوجيه، ماذا سيحدث؟ ستغرق السفينة وتعم الفوضى! انظر إلى الكون الواسع بمليارات النجوم والمجرات، يدور منذ ملايين السنين بنظام دقيق لا يختل ثانية واحدة! هذا هو البرهان العقلي القاطع على أن الإله واحد لا شريك له!',
    warmupHookEn: 'If a ship had two competing captains issuing conflicting orders, it would surely sink! Look at the cosmos with billions of stars operating in flawless harmony for epochs. This is the rational proof that the Creator is uniquely One!',

    learningOutcomesAr: [
      'أن يستدل الطالب عقلياً ونقلياً على وحدانية الله سبحانه واستحقاقه وحده للعبادة.',
      'أن يوضح برهان التمانع والنظام الكوني: (لو كان فيهما آلهة إلا الله لفسدتا).',
      'أن يعدد مظاهر القدرة الإلهية في تعاقب الليل والنهار وتوازن الغلاف الجوي والجاذبية.',
      'أن يستنتج أثر الإيمان بالوحدانية في تحرير العقل وطمأنينة القلب والتوكل الصادق.'
    ],
    learningOutcomesEn: [
      'Present rational and textual proofs for divine oneness (Tawheed).',
      'Explain the cosmic coherence argument: "Had there been gods besides Allah, both heavens and earth would have disintegrated".',
      'Detail manifestations of divine power: alternation of night and day, atmospheric balance.',
      'Derive the psychological peace and intellectual liberation stemming from pure monotheism.'
    ],

    vocabulary: [
      {
        termAr: 'التَّوْحِيدُ (Tawheed)',
        termEn: 'Islamic Monotheism',
        definitionAr: 'إفراد الله بالربوبية والألوهية والأسماء والصفات، وأنه الخالق المدبر وحده المستحق للعبادة.',
        definitionEn: 'Singling out Allah alone in His Lordship, divinity, and beautiful names and attributes.'
      },
      {
        termAr: 'بُرْهَانُ التَّمَانُعِ (Proof of Mutual Exclusion)',
        termEn: 'Cosmic Coherence / Non-contradiction argument',
        definitionAr: 'دليل عقلي يثبت أن وجود أكثر من إله كان سيؤدي حتماً إلى التعارض واختلال الكون، وانتظام الكون برهان على وحدانية المدبر.',
        definitionEn: 'A rational proof showing that multiple deities would inevitably cause cosmic conflict and ruin.'
      }
    ],

    keyConceptsAr: [
      'الوحدانية أصل العقيدة: الله سبحانه واحد في ذاته، واحد في صفاته، واحد في أفعاله، لا شريك له ولا ند ولا شبيه.',
      'الآيات الكونية: تعاقب الليل والنهار، حركة الأفلاك والنجوم، دورة الماء، وثبات نسب الأكسجين في الهواء كلها شواهد قدرة.',
      'قوله تعالى: (لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا فَسُبْحَانَ اللَّهِ رَبِّ الْعَرْشِ عَمَّا يَصِفُونَ).',
      'ثمار التوحيد: عبادة الله وحده يحرر الإنسان من الخوف والتبعية لغير الله، ويغرس في النفس الشجاعة والعزة والرضا.'
    ],
    keyConceptsEn: [
      'Oneness as Core Foundation: Singular in essence, attributes, and sovereign actions.',
      'Cosmic Indicators: Day-night succession, planetary orbits, water cycle, atmospheric stability.',
      'Quranic Reference: "Had there been therein gods besides Allah, they would both have been ruined."',
      'Fruits of Monotheism: Freedom from superstitions, inner courage, and serenity.'
    ],

    sections: [
      {
        titleAr: '1. الأدلة العقلية والكونية على وحدانية الخالق',
        titleEn: '1. Rational and Cosmological Evidence for Divine Oneness',
        contentAr: 'كل ما في الكون يشهد بوحدانية الله: القوانين الفيزيائية تسري بنظام واحد في أرجاء المجرات، وذرات المادة في أصغر أجزائها مبنية على نسق دقيق يشبه حركة الكواكب. وحدة التصميم والنظام في الكون دلالة حاسمة على وحدة الصانع العليم الحكيم.',
        contentEn: 'Every aspect of the universe testifies to divine oneness: unified physical laws governing galaxies match atomic patterns, proving a single Supreme Architect.'
      },
      {
        titleAr: '2. مظاهر القدرة والإبداع في الكائنات الحية',
        titleEn: '2. Marvels of Divine Power in Living Organisms',
        contentAr: 'تأمل في تنوع النباتات: تسقى بماء واحد، وتنبت في تربة واحدة، وتخرج ثماراً مختلفة الألوان والطعوم والروائح! وفي خلق الإنسان، بصمة الإصبع وبصمة العين والصوت لا تتطابق بين مليارات البشر، دلالة على طلاقة القدرة الإلهية التي لا يعجزها شيء.',
        contentEn: 'Plants irrigated with the same water yield diverse tastes, colors, and nutrients. Human biometrics (fingerprints, retinas) are uniquely differentiated among billions.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-5',
      titleAr: 'تقييم الدرس 5: دلائل وحدانية الله وقدرته في الكون',
      titleEn: 'Assessment 5: Evidence of Divine Oneness (Tawheed)',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-5-1',
          textAr: 'ما الدليل العقلي المستفاد من قوله تعالى: (لَوْ كَانَ فِيهِمَا آلِهَةٌ إِلَّا اللَّهُ لَفَسَدَتَا)؟',
          textEn: 'What rational deduction arises from the verse: "Had there been gods besides Allah, both would have been ruined"?',
          optionsAr: [
            'أن تعدد الآلهة كان سيؤدي بالضرورة إلى التنازع واختلال قوانين الكون وفنائه، وانتظام الكون يثبت وحدانية الله',
            'أن الآلهة المتعددة تتفق دائماً دون خلاف',
            'أن الكون نشأ دون نظام أو تدبير',
            'أن القوانين الطبيعية تتغير عشوائياً كل يوم'
          ],
          optionsEn: ['Multiple deities would cause inevitable cosmic conflict; cosmic harmony proves one Creator', 'Multiple gods always agree', 'Cosmos formed randomly', 'Laws change arbitrarily'],
          correctIndex: 0,
          conceptTestedAr: 'برهان التمانع العقلي والانتظام الكوني',
          conceptTestedEn: 'Mutual exclusion proof and cosmic coherence',
          explanationAr: 'لو وجد أكثر من إله لتنازعت إراداتهم واختلت نواميس الكون، ولكن ثبات وانتظام الكون دليل قطعي على أن المدبر واحد سبحانه.',
          explanationEn: 'Multiple sovereign wills would result in contradiction, so universal harmony proves the unique oneness of the Creator.',
          difficulty: 'hard'
        },
        {
          id: 'q-uae-g6-5-2',
          textAr: 'أي من الآتي يُعد من مظاهر الإعجاز في خلق الكائنات الحية الدالة على طلاقة قدرة الله؟',
          textEn: 'Which of the following is evidence of divine creative power in living beings?',
          optionsAr: [
            'تنوع بصمات الأصابع والعين بين مليارات البشر دون أي تطابق تام',
            'تشابه جميع المخلوقات في الحجم والشكل',
            'عدم وجود وظائف محددة للأعضاء',
            'نمو النباتات دون حاجة لماء أو ضوء'
          ],
          optionsEn: ['Uniqueness of human fingerprints and retinas among billions without duplicate', 'Identical size of all species', 'No organs have functions', 'Plants grow without water or light'],
          correctIndex: 0,
          conceptTestedAr: 'آيات الإعجاز في الخلق ودلائل الوحدانية',
          conceptTestedEn: 'Biological miracles and divine power',
          explanationAr: 'تفرد بصمات كل إنسان منذ بداية الخلق إلى قيام الساعة برهان باهر على سعة علم الله وطلاقة قدرته.',
          explanationEn: 'The infinite variation of human biometrics across all epochs manifests boundless divine capability.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 6: AQEEDAH: BELIEF IN DIVINE BOOKS & PROPHETS (العقيدة الإسلامية - الإيمان بالكتب والرسل) ──
  {
    id: 'uae-isl-g6-6',
    order: 6,
    titleAr: 'المحاضرة 6: الإيمان بالكتب السماوية ورسالة الأنبياء والرسل',
    titleEn: 'Lecture 6: Faith in the Heavenly Books and the Messengers of Allah',
    subtitleAr: 'أركان الإيمان، وحدة رسالة الأنبياء (التوحيد)، الكتب السماوية المنزلة، وخاتمية رسالة نبينا محمد ﷺ.',
    subtitleEn: 'Pillars of Faith, unity of prophetic mission (Tawheed), revealed scriptures, and the seal of prophethood.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2',
    unitTitleAr: 'المجال الثالث: العقيدة الإسلامية',
    unitTitleEn: 'Domain 3: Islamic Creed (Aqeedah)',
    lessonNumberAr: 'الدرس 6: الإيمان بالكتب والرسل',
    lessonNumberEn: 'Lesson 6: Faith in Heavenly Scriptures and Prophets',

    warmupHookAr: 'كيف يعرف الإنسان الغاية من خلقه وما يرضي ربه بعد الموت؟ العقل البشري وحده لا يستقل بمعرفة تفاصيل الشرائع والغيبيات، ومن رحمة الله وعدله أنه لم يترك الناس سدى، بل أرسل رسلاً مبشرين ومنذرين، وأنزل معهم كتباً هادية تنير دروب الحياة!',
    warmupHookEn: 'How does humanity know the purpose of existence without revelation? Out of infinite divine mercy, Allah did not leave humanity unaided; He dispatched messengers with luminous scriptures to illuminate truth!',

    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم الإيمان بالكتب السماوية والأنبياء كأركان من أركان الإيمان الستة.',
      'أن يعدد الكتب السماوية المنزلة والأنبياء الذين أُنزلت عليهم (صحف إبراهيم، التوراة، الزبور، الإنجيل، والقرآن الكريم).',
      'أن يستنتج خصائص القرآن الكريم وتميزه بحفظ الله له من التحريف وخاتميته لكل الرسالات.',
      'أن يبين وظيفة الرسل عليهم السلام والصفات الواجبة في حقهم (الصدق، الأمانة، والتبليغ).'
    ],
    learningOutcomesEn: [
      'Clarify faith in revealed scriptures and prophets among core pillars of Iman.',
      'Identify scriptures and their respective messengers (Torah, Zabur, Injeel, Quran).',
      'Highlight unique qualities of the Quran: divine preservation and universal finality.',
      'Explain the mission of the prophets and their essential virtues (honesty, trustworthiness).'
    ],

    vocabulary: [
      {
        termAr: 'الْكُتُبُ السَّمَاوِيَّةُ (Heavenly Books)',
        termEn: 'Divine Scriptures',
        definitionAr: 'كلام الله الذي أوحاه إلى رسله لهداية البشر وبيان شرائعه وأحكامه.',
        definitionEn: 'Divine revelation delivered to messengers to guide mankind in faith and righteous law.'
      },
      {
        termAr: 'خَاتَمُ النَّبِيِّينَ (The Seal of the Prophets)',
        termEn: 'Seal of the Prophets',
        definitionAr: 'لقب نبينا محمد ﷺ لأنه آخر الأنبياء والرسل وررسالته عامة للناس كافة إلى قيام الساعة.',
        definitionEn: 'Title of Prophet Muhammad ﷺ denoting that he is the final messenger, whose message is universal.'
      }
    ],

    keyConceptsAr: [
      'وحدة دعوة الرسل: جميع الأنبياء من آدم ونوح وإبراهيم وموسى وعيسى إلى محمد ﷺ دعوا إلى توحيد الله وإفراده بالعبادة.',
      'الكتب المنزلة: التوراة لموسى، الزبور لداود، الإنجيل لعيسى، صحف إبراهيم، والقرآن الكريم لمحمد ﷺ.',
      'خصائص القرآن: محفوظ بحفظ الله: (إنا نحن نزلنا الذكر وإنا له لحافظون)، ناسخ لما قبله، معجز بلفظه ومعناه.',
      'أولو العزم من الرسل: نوح، إبراهيم، موسى، عيسى، ومحمد ﷺ، لصبرهم العظيم في تبليغ رسالة الله.'
    ],
    keyConceptsEn: [
      'Unified Message: All prophets proclaimed the monotheistic worship of the One Creator.',
      'Revealed Books: Torah to Moses, Psalms to David, Gospel to Jesus, Scrolls of Abraham, Quran to Muhammad ﷺ.',
      'Attributes of the Quran: Perpetually preserved by divine guarantee, comprehensive, and miraculous.',
      'Arch-Prophets of Resolve (Ulu al-Azm): Noah, Abraham, Moses, Jesus, and Muhammad ﷺ.'
    ],

    sections: [
      {
        titleAr: '1. الكتب السماوية ورسالة التوحيد الواحدة',
        titleEn: '1. Heavenly Books and the Unified Monotheistic Message',
        contentAr: 'يؤمن المسلم بجميع الكتب التي أنزلها الله على رسله؛ فكلها نور وهدى لأقوامها في زمانها، وتدعو إلى عبادة الله الواحد ومكارم الأخلاق. وتوج الله هذه الكتب بالقرآن الكريم الذي تكفل الله بحفظه حرفاً بحرف، وجعله خاتماً ومهيمناً على الكتب السابقة.',
        contentEn: 'Muslims believe in all divine scriptures revealed by Allah to guide nations towards righteousness, culminated by the Quran as the final protected revelation.'
      },
      {
        titleAr: '2. صفات الأنبياء ورسالتهم في هداية الأمم',
        titleEn: '2. Attributes of the Prophets and Their Exemplary Role',
        contentAr: 'اختار الله الأنبياء من أكمل الناس خُلقاً وأرجحهم عقلاً، وجعلهم قدوة للبشرية في الصبر والصدق والرحمة. ومحبتهم وتوقيرهم واجب إيماني، ونقتدي بنبينا محمد ﷺ في تعامله وتسامحه وحرصه على مصلحة الناس.',
        contentEn: 'Prophets were chosen for exceptional moral integrity, patience, and compassion, serving as role models for ethical living.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-6',
      titleAr: 'تقييم الدرس 6: الإيمان بالكتب السماوية والرسل',
      titleEn: 'Assessment 6: Faith in Books and Prophets',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-6-1',
          textAr: 'ما الخاصية الفريدة التي تميز بها القرآن الكريم عن سائر الكتب السماوية السابقة؟',
          textEn: 'What unique characteristic distinguishes the Holy Quran from previous scriptures?',
          optionsAr: [
            'أن الله تكفل بحفظه بنفسه من أي تحريف أو تبديل إلى يوم القيامة، ورسالته عامة وخاتمة للثقلين',
            'أنه مخصص لقوم معينين وزمان محدد فقط',
            'أنه لم يشتمل على أحكام تشريعية أو أخلاقية',
            'أنه نزل دفعة واحدة في كتاب مكتوب دون وحي'
          ],
          optionsEn: ['Guaranteed divine preservation from corruption, and universal final message for all mankind', 'Specific to one tribe and era', 'Lacks legislative rulings', 'Descended all at once bound without Gabriel'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص القرآن الكريم الإعجازية والحفظ الإلهي',
          conceptTestedEn: 'Miraculous characteristics of Quran & divine preservation',
          explanationAr: 'قال تعالى: (إِنَّا نَحْنُ نَزَّلْنَا الذِّكْرَ وَإِنَّا لَهُ لَحَافِظُونَ)؛ حفظه الله كاملاً دون تغيير حرف واحد.',
          explanationEn: 'Allah explicitly guarantees: "Indeed, it is We who sent down the Quran and indeed, We will be its guardian."',
          difficulty: 'easy'
        },
        {
          id: 'q-uae-g6-6-2',
          textAr: 'من هم الأنبياء أولو العزم المشهورون بأعظم درجات الصبر والثبات في تبليغ الرسالة؟',
          textEn: 'Who are the Arch-Prophets of Resolve (Ulu al-Azm)?',
          optionsAr: [
            'نوح، إبراهيم، موسى، عيسى، ومحمد عليهم الصلاة والسلام',
            'آدم، إدريس، شيث، وصالح',
            'يوسف، يونس، زكريا، ويحيى',
            'داود، سليمان، أيوب، وهارون'
          ],
          optionsEn: ['Noah, Abraham, Moses, Jesus, and Muhammad (PBUT)', 'Adam, Enoch, Seth, Salih', 'Joseph, Jonah, Zechariah, John', 'David, Solomon, Job, Aaron'],
          correctIndex: 0,
          conceptTestedAr: 'أولو العزم من الرسل وصفاتهم',
          conceptTestedEn: 'The Arch-Prophets of Resolve',
          explanationAr: 'أولو العزم خمسة رسل تحملوا أعظم الشدائد وضربوا أعلى الأمثلة في الصبر على هداية أقوامهم.',
          explanationEn: 'The five messengers of supreme resolve endured the greatest trials with unmatched steadfastness.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 7: SEERAH: THE BATTLE OF THE TRENCH / AL-AHZAB (السيرة النبوية - غزوة الأحزاب / الخندق) ──
  {
    id: 'uae-isl-g6-7',
    order: 7,
    titleAr: 'المحاضرة 7: غزوة الأحزاب (الخندق) — التخطيط والشورى وثبات المؤمنين',
    titleEn: 'Lecture 7: The Battle of the Trench (Al-Ahzab) — Strategy, Shura & Resilience',
    subtitleAr: 'تحالف قبائل الشرك ضد المدينة، مشورة سلمان الفارسي رضي الله عنه بحفر الخندق، الصبر في الشدائد، ونصر الله بالريح والجنود.',
    subtitleEn: 'The confederate siege of Madinah, Salman Al-Farsi\'s counsel, digging the trench, and divine victory through natural elements.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2',
    unitTitleAr: 'المجال الرابع: السيرة النبوية والشخصيات',
    unitTitleEn: 'Domain 4: Prophetic Biography & Islamic Figures',
    lessonNumberAr: 'الدرس 7: غزوة الأحزاب (الخندق)',
    lessonNumberEn: 'Lesson 7: The Battle of the Trench (Al-Ahzab)',

    warmupHookAr: 'جيش ضخم يضم عشرة آلاف مقاتل يزحف لمحاصرة المدينة المنورة واستئصال المسلمين في ظل برد قارس وجوع شديد! كيف واجه النبي ﷺ وأصحابه هذا الحصار الخانق؟ إنه درس ملهم في التفكير الابتكاري، الشورى، والعمل الجماعي الجاد حين اقترح سلمان الفارسي رضي الله عنه فكرة لم تعهدها العرب من قبل: حفر خندق حصين!',
    warmupHookEn: 'An army of 10,000 confederates marched to besiege Madinah during bitter cold and scarcity. How did the Prophet ﷺ and companions overcome this siege? Through innovative strategic thinking, mutual consultation (Shura), and teamwork!',

    learningOutcomesAr: [
      'أن يستعرض الطالب أسباب غزوة الأحزاب (شوال سنة 5 هـ) والأطراف المتحالفة ضد المسلمين.',
      'أن يبرز أهمية الشورى والأخذ بالأفكار الإبداعية من خلال مشورة سلمان الفارسي بحفر الخندق.',
      'أن يصف مشاركة النبي ﷺ أصحابه في الحفر وحمل التراب كقدوة للقيادة الميدانية الملهمة.',
      'أن يستنتج أسباب نصر الله للمؤمنين (الصدق، الثبات، الأخذ بالأسباب، ثم إرسال الريح وجنود الغيب).'
    ],
    learningOutcomesEn: [
      'Outline the historical causes of the Battle of the Trench (5 AH) and the confederate forces.',
      'Highlight the value of consultation (Shura) and innovative strategy via Salman Al-Farsi\'s proposal.',
      'Demonstrate servant leadership through the Prophet\'s hands-on participation in digging the trench.',
      'Infer keys to divine triumph: steadfastness, disciplined planning, and providential aid.'
    ],

    vocabulary: [
      {
        termAr: 'الْأَحْزَابُ (The Confederates)',
        termEn: 'The Confederates',
        definitionAr: 'القبائل والأطراف التي تحالفت واجتمعت لحصار المسلمين في المدينة (قريش، غطفان، ويهود بني النضير).',
        definitionEn: 'The coalition of tribes that united to besiege Muslims in Madinah (Quraysh, Ghatafan, Banu Nadir).'
      },
      {
        termAr: 'الْخَنْدَقُ (The Trench)',
        termEn: 'The defensive trench / moat',
        definitionAr: 'حفير عميق وواسع تم حفره في شمال المدينة المنورة لمنع خيول وجيوش الأحزاب من اقتحامها.',
        definitionEn: 'A deep defensive ditch excavated north of Madinah to block enemy cavalry from advancing.'
      }
    ],

    keyConceptsAr: [
      'مبدأ الشورى: النبي ﷺ القائد الأعلى يستشير أصحابه ويقبل فكرة سلمان الفارسي رغم أنها أسلوب فارسي لم تألفه العرب.',
      'القيادة بالقدوة: كان النبي ﷺ يربط الحجر على بطنه من الجوع، ويضرب بالمعول في الصخر، ويرتجز لتشجيع الصحابة.',
      'الابتلاء وتمييز الصفوف: برز إيمان المؤمنين الصادقين: (هذا ما وعدنا الله ورسوله وصدق الله ورسوله)، وانكشف نفاق المنافقين.',
      'نصر الله: كفى الله المؤمنين القتال بالريح الباردة الشديدة التي قلعت خيام الأحزاب، وألقى الرعب في قلوبهم فتفرقوا خائبين.'
    ],
    keyConceptsEn: [
      'Consultation (Shura): The Prophet accepted tactical innovations from diverse cultural backgrounds.',
      'Leading by Example: Working side by side with the community during hardships and scarcity.',
      'Testing Resolve: True believers stood firm while hypocrites wavered.',
      'Providential Deliverance: Dispersal of the siege through powerful storms and psychological deterrence.'
    ],

    sections: [
      {
        titleAr: '1. مشورة سلمان الفارسي والعمل الجماعي في حفر الخندق',
        titleEn: '1. Salman\'s Tactical Counsel and Collaborative Construction',
        contentAr: 'عندما علم النبي ﷺ بزحف الأحزاب، عقد مجلساً استشارياً مع الصحابة. تقدم سلمان الفارسي رضي الله عنه بفكرة مبتكرة: "يا رسول الله، كنا بفارس إذا حُوصِرنا خندَقْنا حولنا". استحسن النبي الفكرة وقسم الصحابة إلى مجموعات، وشاركهم بنفسه بضرب المعول ونقل التراب في أجواء من الأخوة والأمل.',
        contentEn: 'Upon learning of the approaching confederates, the Prophet gathered his council. Salman suggested digging a defensive trench. The Prophet approved, assigned work crews, and actively labored alongside them.'
      },
      {
        titleAr: '2. الثبات في الحصار ودرس النصر الإلهي',
        titleEn: '2. Steadfastness Under Siege and Divine Victory',
        contentAr: 'استمر الحصار قرابة شهر كامل في ظروف قاسية، وزاد الأمر خطورة بنقض يهود بني قريظة لعهدهم مع المسلمين. لكن ثقة المؤمنين بالله لم تتزعزع، فأرسل الله ريحاً عاصفة شديدة وجنوداً من الملائكة زلزلت معسكر المشركين وكفأت قدورهم واقتلعت خيامهم، ففروا مهزومين دون قتال: (وَكَفَى اللَّهُ الْمُؤْمِنِينَ الْقِتَالَ).',
        contentEn: 'Despite intense encirclement and breach of treaties from within, believers remained steadfast. Allah sent strong windstorms that uprooted enemy camps, causing them to retreat in disarray.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-7',
      titleAr: 'تقييم الدرس 7: غزوة الأحزاب والشورى والتخطيط',
      titleEn: 'Assessment 7: Battle of the Trench (Al-Ahzab)',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-7-1',
          textAr: 'من هو الصحابي الجليل صاحب الفكرة التكتيكية المبتكرة بحفر الخندق لحماية المدينة المنورة؟',
          textEn: 'Which companion suggested digging the trench to protect Madinah?',
          optionsAr: [
            'سلمان الفارسي رضي الله عنه',
            'عمر بن الخطاب رضي الله عنه',
            'أبو بكر الصديق رضي الله عنه',
            'علي بن أبي طالب رضي الله عنه'
          ],
          optionsEn: ['Salman Al-Farsi (RA)', 'Umar ibn Al-Khattab (RA)', 'Abu Bakr As-Siddiq (RA)', 'Ali ibn Abi Talib (RA)'],
          correctIndex: 0,
          conceptTestedAr: 'الشورى والاستفادة من التجارب الإنسانية',
          conceptTestedEn: 'Consultation and tactical innovation',
          explanationAr: 'اقترح سلمان الفارسي رضي الله عنه حفر الخندق كفكرة عسكرية مألوفة في بلاد فارس، فقبلها النبي ﷺ وطبقها عملياً.',
          explanationEn: 'Salman Al-Farsi proposed the defensive trench, which was enthusiastically adopted by the Prophet.',
          difficulty: 'easy'
        },
        {
          id: 'q-uae-g6-7-2',
          textAr: 'كيف نصر الله المؤمنين وأنهى حصار الأحزاب للمدينة المنورة دون مواجهة حربية مباشرة؟',
          textEn: 'How did divine intervention end the confederate siege without direct combat?',
          optionsAr: [
            'بإرسال ريح عاصفة شديدة وجنود من الملائكة قلعت خيامهم وأطفأت نيرانهم وبثت الرعب في قلوبهم',
            'باستسلام جيش الأحزاب ودخولهم الإسلام في يوم واحد',
            'بفيضان نهر في المدينة المنورة أغرق جيشهم',
            'بوساطة تجارية أنهت النزاع سلمياً'
          ],
          optionsEn: ['By sending fierce storms and angels that uprooted camps and struck terror into enemy hearts', 'Immediate mass conversion', 'River flood in Madinah', 'Trade mediation'],
          correctIndex: 0,
          conceptTestedAr: 'النصر الإلهي وجنود الله في الكون',
          conceptTestedEn: 'Divine deliverance and natural elements',
          explanationAr: 'أرسل الله جنوده: ريحاً باردة عاتية وجنوداً لم يروها أربكت معسكر المشركين ففروا خائبين.',
          explanationEn: 'Allah sent powerful cold storms and angelic forces that caused the confederates to retreat in disarray.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 8: SEERAH: KHADIJAH BINT KHUWAYLID (الشخصيات الإسلامية - أم المؤمنين خديجة رضي الله عنها) ──
  {
    id: 'uae-isl-g6-8',
    order: 8,
    titleAr: 'المحاضرة 8: أم المؤمنين خديجة بنت خويلد رضي الله عنها — فضائلها ومواقفها',
    titleEn: 'Lecture 8: Mother of the Believers, Khadijah bint Khuwaylid (May Allah Be Pleased with Her)',
    subtitleAr: 'مكانة الطاهرة وسيرتها، صدقها وتجارتها، نصرتها للنبي ﷺ عند نزول الوحي، وبذل مالها لنصرة الإسلام، وبشارة جبريل لها بقصر في الجنة.',
    subtitleEn: 'Virtues and biography of At-Tahirah, business ethics, supporting the Prophet at first revelation, and Jibreel\'s glad tidings.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2',
    unitTitleAr: 'المجال الرابع: السيرة النبوية والشخصيات',
    unitTitleEn: 'Domain 4: Prophetic Biography & Islamic Figures',
    lessonNumberAr: 'الدرس 8: أم المؤمنين خديجة بنت خويلد',
    lessonNumberEn: 'Lesson 8: Khadijah bint Khuwaylid',

    warmupHookAr: 'امرأة حكيمة جمعت بين الشرف والعقل الراجح وحسن الإدارة، وكانت أول من آمن بالرسول ﷺ من البشر على الإطلاق! وعندما نزل الوحي وعاد النبي خائفاً يرجف فؤاده، كانت هي السند العاطفي والمادي الحكيم الذي طمأنه بكلمات خلدها التاريخ: "كلا والله ما يخزيك الله أبداً!". من هي هذه الشخصية العظيمة؟ إنها أم المؤمنين خديجة رضي الله عنها!',
    warmupHookEn: 'A noble, wise woman of remarkable business acumen, she was the first human being to embrace Islam! When revelation descended and the Prophet returned shaken, she offered calm assurance: "Never! By Allah, Allah will never disgrace you!"',

    learningOutcomesAr: [
      'أن يتعرف الطالب على نشأة أم المؤمنين خديجة رضي الله عنها ولقبها في الجاهلية (الطاهرة).',
      'أن يبرز دورها الحاسم في تثبيت النبي ﷺ يوم غار حراء ومقولتها الشهيرة في التفاؤل واليقين.',
      'أن يوضح تضحياتها العظيمة بمالها وجهدها وصبرها في حصار شعب أبي طالب.',
      'أن يقتدي بأخلاقها في الوفاء، الحكمة، الكرم، ومساندة أصحاب الحق والمشاريع النبيلة.'
    ],
    learningOutcomesEn: [
      'Learn about Khadijah\'s noble upbringing and pre-Islamic title "At-Tahirah" (The Pure).',
      'Detail her decisive role in reassuring the Prophet after the first revelation in Cave Hira.',
      'Explain her sacrifices of wealth, energy, and patience during the boycott of Shi\'b Abi Talib.',
      'Emulate her virtues of loyalty, wisdom, generosity, and steadfast advocacy for goodness.'
    ],

    vocabulary: [
      {
        termAr: 'الطَّاهِرَةُ (The Pure One)',
        termEn: 'The Pure / Immaculate One',
        definitionAr: 'لقب أطلقته قريش على خديجة رضي الله عنها قبل الإسلام لعفتها وكرم أخلاقها ومكانتها السامية.',
        definitionEn: 'Honorary title given by Quraysh to Khadijah prior to Islam due to her unblemished character and virtue.'
      },
      {
        termAr: 'بَيْتٌ مِنْ قَصَبٍ (House of pearls)',
        termEn: 'A palace of hollowed pearls in Paradise',
        definitionAr: 'قصر في الجنة من لؤلؤ مجوف بشرها به جبريل عليه السلام، لا صخب فيه ولا نصب.',
        definitionEn: 'A sublime palace in Paradise promised to her via Gabriel, free of noise and toil.'
      }
    ],

    keyConceptsAr: [
      'أول من آمن: كانت خديجة رضي الله عنها أول من أسلم وصدق برسالة النبي ﷺ دون تردد.',
      'الموقف عند نزول الوحي: استدلالها بحسن أخلاق النبي على أن الله لا يضيعه: "إنك لتصل الرحم، وتصدق الحديث، وتحمل الكل، وتكسب المعدوم، وتقري الضيف، وتعين على نوائب الحق".',
      'الوفاء النبوي: ظل النبي ﷺ يذكر فضلها ومحبتها طوال حياته ويصل صويحباتها بعد وفاتها إكراماً لها.',
      'بشارة السماء: أقرأها جبريل عليه السلام السلام من ربها ومنه، وبشرها ببيت في الجنة من قصب لا صخب فيه ولا نَصَب.'
    ],
    keyConceptsEn: [
      'Pioneer of Faith: First person to embrace Islam and support the Prophet wholeheartedly.',
      'Insightful Consolation: Reminding the Prophet of his virtuous character: maintaining family ties, aiding the vulnerable, hosting guests.',
      'Enduring Prophetic Gratitude: The Prophet honored her memory and cared for her friends throughout his life.',
      'Divine Greetings: Gabriel conveyed greetings of peace from Allah to Khadijah.'
    ],

    sections: [
      {
        titleAr: '1. الحكمة والتثبيت عند نزول الوحي الأول',
        titleEn: '1. Wisdom and Assurance During the First Revelation',
        contentAr: 'حين رجع النبي ﷺ من غار حراء ترجف بوادره وقال: "زملوني زملوني"، استقبلته أم المؤمنين خديجة برباطة جأش وحكمة بالغة. هدأت من روعه واستدلت بأعماله الإنسانية الكريمة (صلة الرحم، إعانة المحتاج، إقراء الضيف) على أن العبد المحسن لا يخذله ربه، ثم أخذته إلى ورقة بن نوفل للتثبت من أمر النبوة.',
        contentEn: 'When the Prophet returned shaken from Cave Hira, Khadijah received him with profound emotional composure. She comforted him, reasoning that his life of charity, truthfulness, and hospitality would always be guarded by Allah.'
      },
      {
        titleAr: '2. العطاء والبذل والوفاء الخالد',
        titleEn: '2. Philanthropic Sacrifice and Lifelong Devotion',
        contentAr: 'سخرت خديجة رضي الله عنها كل أموالها لخدمة الدعوة الإسلامية وإطعام المحاصرين في شعب أبي طالب، وصبرت معه ثلاث سنوات عجاف. لذلك كان النبي ﷺ يقول عنها: "آمنت بي إذ كفر بي الناس، وصدقتني إذ كذبني الناس، وواستني بمالها إذ حرمني الناس". وهي نموذج للمرأة الرائدة في مجتمعنا المعاصر.',
        contentEn: 'Khadijah dedicated her wealth and standing to uphold the cause of justice and alleviate suffering. The Prophet praised her devotion: "She believed in me when people rejected me, and supported me with her wealth when people withheld."'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-8',
      titleAr: 'تقييم الدرس 8: أم المؤمنين خديجة بنت خويلد رضي الله عنها',
      titleEn: 'Assessment 8: Khadijah bint Khuwaylid',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-8-1',
          textAr: 'ما الدليل الذي استندت عليه أم المؤمنين خديجة رضي الله عنها حين طمأنت النبي ﷺ قائلة: (كلا والله ما يخزيك الله أبداً)؟',
          textEn: 'What evidence did Khadijah cite when reassuring the Prophet that Allah would never disgrace him?',
          optionsAr: [
            'أخلاقه العظيمة وسيرته الطيبة: صلة الرحم، صدق الحديث، إعانة الضعفاء، إكرام الضيف، ونصرة أصحاب الحق',
            'امتلاكه للأموال الكثيرة والقوة العسكرية',
            'نسبه الشريف ومكانته في تجارة قريش فقط',
            'معرفته السابقة باللغات الأجنبية'
          ],
          optionsEn: ['His noble ethics: maintaining family ties, truthfulness, aiding the weak, hospitality, and standing for justice', 'Wealth and army', 'Tribal status only', 'Knowing foreign languages'],
          correctIndex: 0,
          conceptTestedAr: 'الفراسة الإيمانية ومواقف خديجة رضي الله عنها',
          conceptTestedEn: 'Spiritual insight and Khadijah\'s noble stance',
          explanationAr: 'استدلت رضي الله عنها بسنة الله الكونية: أن من كانت أخلاقه نصرة الضعيف والإحسان للناس يحفظه الله من كل سوء.',
          explanationEn: 'She deduced that divine grace always preserves those dedicated to mercy, hospitality, and charity.',
          difficulty: 'medium'
        },
        {
          id: 'q-uae-g6-8-2',
          textAr: 'ما البشارة العظيمة التي نقلها جبريل عليه السلام إلى خديجة رضي الله عنها من ربها؟',
          textEn: 'What divine glad tiding was delivered to Khadijah by Gabriel?',
          optionsAr: [
            'أن الله يقرؤها السلام ويبشرها بقصر في الجنة من قصب (لؤلؤ مجوف) لا صخب فيه ولا نَصَب',
            'أنها ستحكم مكة المكرمة في حياتها',
            'مضاعفة تجارتها وأموالها في الدنيا',
            'أن تعيش مئة عام في سلام'
          ],
          optionsEn: ['Greetings of peace from Allah and a pearl palace in Paradise free of noise and fatigue', 'Ruling Mecca', 'Doubling worldly riches', 'Living for a century'],
          correctIndex: 0,
          conceptTestedAr: 'مكانة خديجة رضي الله عنها وبشارة الجنة',
          conceptTestedEn: 'Khadijah\'s sublime station in Paradise',
          explanationAr: 'بشرها الله ببيت في الجنة لا تعب فيه ولا ضجيج جزاء ما وفرته للنبي ﷺ من طمأنينة وراحة وسكينة.',
          explanationEn: 'A palace free of exhaustion mirrored the haven of peace and support she provided for the Prophet.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 9: FIQH: PRAYER OF THE TRAVELER & CONGREGATIONAL PRAYER (الفقه الإسلامي - صلاة المسافر والجماعة) ──
  {
    id: 'uae-isl-g6-9',
    order: 9,
    titleAr: 'المحاضرة 9: أحكام صلاة المسافر وصلاة الجماعة في الفقه الإسلامي',
    titleEn: 'Lecture 9: Rulings of Traveler\'s Prayer and Congregational Prayer in Islamic Fiqh',
    subtitleAr: 'يسر الإسلام وسماحته: أحكام قصر الصلاة الرباعية وجمع التقديم والتأخير، وشروط وفضل صلاة الجماعة في المسجد.',
    subtitleEn: 'Ease of Islamic worship: Shortening four-rak\'ah prayers, combining prayers in travel, and congregational virtues.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الثالث',
    termEn: 'Term 3',
    unitTitleAr: 'المجال الخامس: الفقه الإسلامي وتطبيقاته',
    unitTitleEn: 'Domain 5: Islamic Jurisprudence (Fiqh)',
    lessonNumberAr: 'الدرس 9: صلاة المسافر وصلاة الجماعة',
    lessonNumberEn: 'Lesson 9: Prayer of the Traveler & Congregational Prayer',

    warmupHookAr: 'تخيل أنك مسافر على متن رحلة طيران أو في سيارة برحلة طويلة بين إمارات الدولة وخارجها: كيف تؤدي صلاتك بيسر وسهولة دون مشقة؟ شرع الله للمسافر رخصاً خاصة تبرز سماحة هذا الدين: قصر الصلاة وجمعها! كما جعل لصلاة الجماعة في المسجد ثواباً يفوق صلاة الفرد بسبع وعشرين درجة!',
    warmupHookEn: 'When traveling across cities or flying abroad, how does one pray without undue hardship? Islam provides merciful concessions: shortening and combining prayers! In addition, congregational prayer rewards outshine solitary prayer twenty-seven fold!',

    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم رخصة السفر في الشريعة الإسلامية ومسافة السفر المعتبرة.',
      'أن يبين الصلوات التي تُقصر (الرباعية: الظهر، العصر، العشاء إلى ركعتين) والصلوات التي لا تقصر (الفجر والمغرب).',
      'أن يميز بين جمع التقديم وجمع التأخير، وشروط الجمع والقصر للمسافر.',
      'أن يستنتج فضل صلاة الجماعة وآداب المسجد والصفوف الأولى.'
    ],
    learningOutcomesEn: [
      'Explain travel concessions in Islamic law and travel parameters.',
      'Identify prayers subject to shortening (4-unit prayers to 2 units) vs non-shortened (Fajr and Maghrib).',
      'Distinguish advance combination (Jam\' Taqdeem) from delayed combination (Jam\' Ta\'kheer).',
      'Highlight the virtues of congregational prayer in the mosque and proper mosque etiquette.'
    ],

    vocabulary: [
      {
        termAr: 'قَصْرُ الصَّلَاةِ (Shortening the prayer)',
        termEn: 'Shortening the 4-Rak\'ah prayer',
        definitionAr: 'أداء الصلاة الرباعية (الظهر، العصر، العشاء) ركعتين بدلاً من أربع ركعات في السفر.',
        definitionEn: 'Praying 4-unit obligatory prayers as 2 units during lawful travel.'
      },
      {
        termAr: 'جَمْعُ التَّقْدِيمِ (Advance combination)',
        termEn: 'Advance prayer combination',
        definitionAr: 'أداء صلاتين معاً في وقت الصلاة الأولى (مثل جمع الظهر والعصر في وقت الظهر).',
        definitionEn: 'Performing two combined prayers together in the time window of the first prayer.'
      },
      {
        termAr: 'جَمْعُ التَّأْخِيرِ (Delayed combination)',
        termEn: 'Delayed prayer combination',
        definitionAr: 'تأخير الصلاة الأولى وأداؤها مع الصلاة الثانية في وقت الصلاة الثانية (مثل جمع الظهر والعصر في وقت العصر).',
        definitionEn: 'Postponing the first prayer to perform it jointly with the second in the latter\'s time.'
      }
    ],

    keyConceptsAr: [
      'قاعدة التيسير: "إن الله يحب أن تُؤتى رُخَصُه كما يحب أن تُؤتى عزائمه"؛ قصر الصلاة صدقة تصدق الله بها على عباده.',
      'الصلوات القابلة للقصر: الظهر، العصر، العشاء (تُصلى ركعتين). صلاة الصبح (الفجر) والمغرب لا تقصر أبداً.',
      'الجمع بين الصلاتين: يجوز الجمع بين (الظهر والعصر) وبين (المغرب والعشاء) جمع تقديم أو تأخير بعذر السفر أو المطر الشديد.',
      'فضل صلاة الجماعة: صلاة الجماعة تفضل صلاة الفذ (المنفرد) بسبع وعشرين درجة، وتغرس الألفة والمساواة بين المصلين.'
    ],
    keyConceptsEn: [
      'Concession of Ease: "Allah loves His concessions to be taken just as He loves His obligations to be observed."',
      'Applicable Prayers: Dhuhr, Asr, and Isha are shortened to 2 rak\'ahs. Fajr and Maghrib are never shortened.',
      'Combining Logic: Dhuhr with Asr, and Maghrib with Isha, either advanced or delayed.',
      'Congregational Virtues: 27 times greater in spiritual reward, fostering solidarity and equality.'
    ],

    sections: [
      {
        titleAr: '1. أحكام قصر وجمع الصلاة للمسافر',
        titleEn: '1. Rules of Shortening (Qasr) and Combining (Jam\') for Travelers',
        contentAr: 'يبدأ قصر الصلاة بمجرد مغادرة حدود مدينتك مسافراً مسافة سفر معتبرة (نحو 80 كم فأكثر). للمسافر أن يقصر الصلوات الرباعية (الظهر ركعتان، العصر ركعتان، العشاء ركعتان)، وله أن يجمع بين الظهر والعصر تقديماً أو تأخيراً، وبين المغرب (3 ركعات) والعشاء (ركعتان) تقديماً أو تأخيراً بأذان واحد وإقامتين.',
        contentEn: 'Travelers departing their municipality beyond designated travel distance can shorten 4-rak\'ah prayers to 2, and combine Dhuhr/Asr and Maghrib/Isha with one Adhan and two Iqamahs.'
      },
      {
        titleAr: '2. صلاة الجماعة: فضلها وآدابها',
        titleEn: '2. Congregational Prayer: Merits and Etiquette',
        contentAr: 'حث الإسلام على أداء الصلوات في بيوت الله جماعة: يلتقي المسلمون خمس مرات يومياً دون فوارق بين غني وفقير أو رئيس ومرؤوس. ومن آدابها: المشي بسكينة ووقار، صلاة تحية المسجد، تسوية الصفوف، ومتابعة الإمام دون مسابقة أو تأخر.',
        contentEn: 'Islam emphasizes prayer in congregation at the mosque, uniting believers across all social backgrounds. Etiquette includes tranquil demeanor, row alignment, and following the Imam.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-9',
      titleAr: 'تقييم الدرس 9: صلاة المسافر وصلاة الجماعة',
      titleEn: 'Assessment 9: Traveler & Congregational Prayer',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-9-1',
          textAr: 'أي من الصلوات المفروضة التالية يجوز للمسافر قصرها إلى ركعتين؟',
          textEn: 'Which of the following obligatory prayers can a traveler shorten to two units?',
          optionsAr: [
            'الصلوات الرباعية فقط: الظهر، والعصر، والعشاء',
            'صلاة الفجر وصلاة المغرب',
            'جميع الصلوات الخمس بلا استثناء',
            'صلاة الجمعة فقط'
          ],
          optionsEn: ['Four-unit prayers only: Dhuhr, Asr, and Isha', 'Fajr and Maghrib', 'All five prayers', 'Friday prayer only'],
          correctIndex: 0,
          conceptTestedAr: 'أحكام قصر الصلاة في السفر',
          conceptTestedEn: 'Jurisprudence of shortening prayers',
          explanationAr: 'القصر يختص بالصلوات الرباعية (الظهر والعصر والعشاء) لتصبح ركعتين، أما الصبح (ركعتان) والمغرب (ثلاث ركعات) فلا قصر فيهما.',
          explanationEn: 'Shortening applies only to 4-unit prayers (Dhuhr, Asr, Isha), whereas Fajr (2) and Maghrib (3) are never shortened.',
          difficulty: 'easy'
        },
        {
          id: 'q-uae-g6-9-2',
          textAr: 'كم تفضل صلاة الجماعة في المسجد على صلاة الفرد المنفرد في الأجر والثواب كما ثبت في الحديث الصحيح؟',
          textEn: 'How much greater is congregational prayer in reward compared to individual prayer according to authentic Hadith?',
          optionsAr: [
            'تفضلها بسبع وعشرين درجة (27 ضعفاً)',
            'بدرجتين فقط',
            'بعشر درجات فقط',
            'لا يوجد فارق في الأجر'
          ],
          optionsEn: ['Twenty-seven times greater (27 degrees)', 'Two degrees', 'Ten degrees', 'No difference in reward'],
          correctIndex: 0,
          conceptTestedAr: 'فضل وثواب صلاة الجماعة',
          conceptTestedEn: 'Virtue and multiplied reward of congregational prayer',
          explanationAr: 'قال رسول الله ﷺ: "صلاةُ الجماعةِ تفضُلُ صلاةَ الفذِّ بسبعٍ وعشرينَ درجةً".',
          explanationEn: 'Prophetic Hadith confirms congregational prayer surpasses solitary prayer twenty-seven times.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 10: ETHICS: MANNERS OF SPEECH & KINDNESS TO NEIGHBORS (الأخلاق والآداب - أدب الحديث والإحسان إلى الجار) ──
  {
    id: 'uae-isl-g6-10',
    order: 10,
    titleAr: 'المحاضرة 10: أدب الحديث والإحسان إلى الجار — بناء المجتمع المتسامح',
    titleEn: 'Lecture 10: Etiquette of Speech & Kindness to Neighbors — Cultivating a Harmonious Community',
    subtitleAr: 'القول السديد، آفات اللسان وتجنب الغيبة والنميمة، حقوق الجار في الإسلام، وتجسيد قيم التسامح والتعايش في دولة الإمارات.',
    subtitleEn: 'Righteous speech, guarding the tongue against gossip, neighborly rights, and embodying UAE values of tolerance and coexistence.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    country: 'AE',
    ministryAr: 'وزارة التربية والتعليم - دولة الإمارات العربية المتحدة',
    ministryEn: 'Ministry of Education - United Arab Emirates (UAE MOE)',
    gradeLevelNameAr: 'الصف السادس الابتدائي - منهاج وزارة التربية والتعليم الإماراتية',
    gradeLevelNameEn: 'Grade 6 Primary - UAE MOE National Curriculum',
    termAr: 'الفصل الدراسي الثالث',
    termEn: 'Term 3',
    unitTitleAr: 'المجال السادس: الأخلاق والآداب الإسلامية',
    unitTitleEn: 'Domain 6: Islamic Ethics & Social Etiquette',
    lessonNumberAr: 'الدرس 10: أدب الحديث وحقوق الجار',
    lessonNumberEn: 'Lesson 10: Speech Etiquette & Rights of Neighbors',

    warmupHookAr: 'كلمة واحدة قد تبني جسراً من المحبة، أو تشعل حرباً وتكسر قلباً! ولهذا قال النبي ﷺ: "مَن كان يؤمنُ باللهِ واليومِ الآخِرِ فلْيَقُلْ خيراً أو لِيَصْمُتْ". وفي الحي الذي تعيش فيه، كيف تجعل جوارك مصدراً للأمان والابتسامة؟ تعالوا نتعلم كيف يبني المسلم مجتمعاً يسوده الاحترام والود!',
    warmupHookEn: 'A single word can construct bridges of affection or shatter hearts! The Prophet ﷺ guided: "Whoever believes in Allah and the Last Day should speak good or remain silent." How do we make our neighborhood a haven of safety and warmth?',

    learningOutcomesAr: [
      'أن يستدل الطالب على أهمية حفظ اللسان وأثره في نيل رضا الله وتجنب الخصومات.',
      'أن يعدد آداب الحديث في الإسلام (الصدق، خفض الصوت، الاستماع للآخرين، وتجنب السخرية والغيبة).',
      'أن يشرح مراتب الجيران وحقوقهم (كف الأذى، تفقد المحتاج، تبادل الهدايا، والمشاركة في الأفراح والأحزان).',
      'أن يطبق قيم وثيقة التسامح والتعايش الإنساني المعمول بها في مجتمع دولة الإمارات العربية المتحدة.'
    ],
    learningOutcomesEn: [
      'Illustrate the supreme importance of speech ethics in attaining divine pleasure and social peace.',
      'Enumerate speech etiquette: honesty, moderate tone, active listening, and abstaining from mockery.',
      'Explain neighborly rights: refraining from nuisance, inquiring after needs, sharing gifts, and offering condolences.',
      'Apply values of human fraternity and mutual coexistence prevalent in UAE society.'
    ],

    vocabulary: [
      {
        termAr: 'قَوْلٌ سَدِيدٌ (Righteous, upright speech)',
        termEn: 'Upright and truthful speech',
        definitionAr: 'الكلام الصادق الحق الذي لا نفاق فيه ولا باطل، ويوصل إلى الخير والإصلاح.',
        definitionEn: 'Honest, truthful speech directed towards reconciliation, fairness, and mutual welfare.'
      },
      {
        termAr: 'حُقُوقُ الْجِوَارِ (Rights of neighborliness)',
        termEn: 'Neighborly obligations',
        definitionAr: 'واجبات المسلم نحو جاره من الإحسان وكف الأذى والزيارة والتهنئة والمواساة.',
        definitionEn: 'Moral and social duties owed to neighbors: kindness, non-malice, support, and consideration.'
      }
    ],

    keyConceptsAr: [
      'وصية جبريل بالجار: قال رسول الله ﷺ: "ما زال جبريلُ يوصيني بالجارِ حتى ظننتُ أنه سيُوَرِّثُه" لدلالة عظم حقه.',
      'أقسام الجيران: جار له ثلاثة حقوق (جار مسلم قريب)، وجار له حقان (جار مسلم)، وجار له حق واحد (حق الجوار الإنساني لكل جار غير مسلم).',
      'آداب الحديث: التحدث بلطف، عدم المقاطعة، اختيار أحسن الألفاظ، والبعد عن النميمة وإفشاء الأسرار.',
      'نهج الإمارات في التسامح: العيش المشترك والإحسان للجميع دون تفرقة، ونشر السلام والمودة بين سائر الثقافات والجنسيات.'
    ],
    keyConceptsEn: [
      'Gabriel\'s Injunction: "Gabriel continued to counsel me about the neighbor until I thought he would assign him an inheritance."',
      'Categories of Neighbors: Neighbor with 3 rights (kinship & faith), 2 rights (faith), and 1 right (human neighborliness).',
      'Speech Discipline: Mild tone, avoiding interruptions, thoughtful words, safeguarding confidences.',
      'UAE Model of Tolerance: Fostering peaceful coexistence and benevolence for all members of society.'
    ],

    sections: [
      {
        titleAr: '1. أدب الحديث وحفظ اللسان عن الزلل',
        titleEn: '1. Etiquette of Thoughtful Speech and Restraint',
        contentAr: 'اللسان مرآة عقل الإنسان ودينه. والمسلم يزن كلماته قبل أن ينطق بها؛ فلا يكذب ولا يسخر ولا يغتاب، بل ينطق بالخير أو يلتزم الصمت. ومن كمال الأدب إعطاء المتكلم فرصة لإكمال حديثه، وخفض الصوت دون صياح: (واغضض من صوتك إن أنكر الأصوات لصوت الحمير).',
        contentEn: 'Speech reflects inner maturity. A believer weighs words carefully: abstaining from falsehood and mockery, choosing uplifting phrases, and keeping speech dignified.'
      },
      {
        titleAr: '2. إكرام الجار وركائز التعايش الإنساني',
        titleEn: '2. Honoring Neighbors and Building Compassionate Coexistence',
        contentAr: 'أكد الإسلام على رعاية الجار كبرهان لصحة الإيمان: "واللهِ لا يؤمن، مَن لا يأمنُ جارُه بوائقَه" (أي شروره). والإحسان للجار يشمل: إلقاء السلام، عدم إزعاجه بالأصوات العالية، إهداء الطعام، ومساندته عند المرض أو الشدة. وفي دولة الإمارات، تتجلى هذه القيم في التآلف والترابط المجتمعي والأمان الذي يعيشه الجميع.',
        contentEn: 'Prophetic tradition states: "By Allah, he does not truly believe whose neighbor does not feel safe from his harm." Hospitality, courteous silence, and mutual solidarity safeguard social harmony.'
      }
    ],

    assessment: {
      id: 'ass-uae-isl-g6-10',
      titleAr: 'تقييم الدرس 10: أدب الحديث والإحسان إلى الجار',
      titleEn: 'Assessment 10: Speech Etiquette & Neighborliness',
      passingScore: 80,
      questions: [
        {
          id: 'q-uae-g6-10-1',
          textAr: 'ما التوجيه النبوي الأساسي لمن أراد أن يستقيم لسانه وينال رضا الله في الحديث اليومي؟',
          textEn: 'What is the foundational prophetic directive regarding daily speech?',
          optionsAr: [
            '"مَن كان يؤمنُ باللهِ واليومِ الآخِرِ فلْيَقُلْ خيراً أو لِيَصْمُتْ"',
            'التحدث في كل ما يسمعه دون تثبت',
            'مقاطعة الآخرين لإظهار المعرفة',
            'استخدام الصوت المرتفع لإقناع الناس'
          ],
          optionsEn: ['"Whoever believes in Allah and the Last Day should speak good or remain silent"', 'Relaying all hearsay', 'Interrupting others', 'Using loud voice'],
          correctIndex: 0,
          conceptTestedAr: 'آداب الحديث وحفظ اللسان',
          conceptTestedEn: 'Etiquette of speech and restraint',
          explanationAr: 'أرشد النبي ﷺ إلى أن حفظ اللسان واختيار الكلام الطيب أو لزوم الصمت هو من صميم الإيمان بالله واليوم الآخر.',
          explanationEn: 'Speaking beneficial words or maintaining dignified silence is an intrinsic hallmark of true faith.',
          difficulty: 'easy'
        },
        {
          id: 'q-uae-g6-10-2',
          textAr: 'كيف يجسد المجتمع في دولة الإمارات العربية المتحدة وصية النبي ﷺ بالإحسان إلى الجار والتعايش الإنساني؟',
          textEn: 'How does UAE society embody prophetic values of neighborly kindness and human coexistence?',
          optionsAr: [
            'بنشر التسامح، كف الأذى، التكافل بين جميع الجيران وسكان الحي، وإشاعة الأمان والسلام للجميع',
            'بإهمال الجيران وعدم الاكتراث باحتياجاتهم',
            'بالانعزال التام وعدم تبادل السلام',
            'بالاهتمام بالحي في المناسبات الرسمية فقط'
          ],
          optionsEn: ['Promoting tolerance, safety, benevolence, and mutual support across all diverse residents', 'Neglecting neighbors', 'Complete isolation', 'Caring only during official holidays'],
          correctIndex: 0,
          conceptTestedAr: 'قيم التسامح والتعايش وحقوق الجوار في دولة الإمارات',
          conceptTestedEn: 'Tolerance, coexistence, and neighborly rights in the UAE',
          explanationAr: 'ترسخ دولة الإمارات نموذجاً رائداً في التسامح والتعايش السلمي والإحسان بين كل القاطنين في أحيائها بروح المودة والأمان.',
          explanationEn: 'The UAE fosters an exemplary global model of social solidarity, mutual respect, and peaceful coexistence for all neighbors.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
