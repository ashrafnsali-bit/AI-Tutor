import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL ARABIC LITERATURE & CRITICISM - GRADE 12 (الأدب والبلاغة والنصوص - الصف الثالث الثانوي / الشهادة الثانوية العامة)
// Official Grade 12 National Arab Curriculum Alignment:
// Unit 1: مدرسة الإحياء والبعث وجيل التطوير (Neo-Classical Revivalist School & Development Generation)
// Unit 2: الاتجاه الوجداني ومدرسة الديوان (Romantic Direction & Diwan School of Poetry)
// Unit 3: مدرسة أبوللو ومدرسة المهاجر والمدرسة الواقعية الجديدة (Apollo, Mahjar & Realistic Schools)
// Unit 4: فنون النثر العربي الحديث: المقال، الرواية، القصة القصيرة، والمسرحية (Modern Arabic Prose Arts)
// Unit 5: التجربة الشعرية والوحدة العضوية والموسيقى في النص الأدبي (Poetic Experience & Organic Unity)
// ============================================================================

export const HIGH_ARABIC_LIT_G12_LECTURES: Lecture[] = [
  // ── LECTURE 1: مدرسة الإحياء والبعث وجيل التطوير ──
  {
    id: 'h-lit12-1',
    order: 1,
    titleAr: 'المحاضرة 1: مدرسة الإحياء والبعث وجيل التطوير (البارودي، شوقي، وحافظ إبراهيم)',
    titleEn: 'Lecture 1: The Neo-Classical Revivalist School & Development Generation',
    subtitleAr: 'رائد البعث محمود سامي البارودي، عوامل التجديد عند تلاميذ البارودي، دور أمير الشعراء أحمد شوقي، وأحمد محرم',
    subtitleEn: 'Master the resurgence of classical Arabic diction under Al-Baroudi, Shawqi\'s innovations, and theatrical poetry.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: مدارس الشعر العربي الحديث',
    unitTitleEn: 'Unit 1: Modern Arabic Poetic Movements',
    lessonNumberAr: 'الدرس 1: مدرسة الإحياء والبعث وجيل التطوير',
    lessonNumberEn: 'Lesson 1: Revivalist School & Classical Renaissance',

    warmupHookAr: 'بعد قرون طويلة من الركود والضعف والتكلف البديعي في العصرين المملوكي والعثماني، كادت القصيدة العربية تفقد روحها وجزالتها. حتى نهض فارس السيف والقلم "محمود سامي البارودي" كالبركان الثائر ليعيد للقصيدة العربية رونقها العباسي والجاهلي! ثم جاء أمير الشعراء "أحمد شوقي" ليطوع الشعر العربي للمسرحيات الشعرية والملحمة التاريخية. كيف وازن هؤلاء العمالقة بين أصالة التراث ومعاصرة قضايا العصر ومشكلات الأمة؟',
    warmupHookEn: 'Following centuries of stagnation under Mamluk and Ottoman decline, Mahmoud Sami al-Baroudi single-handedly resuscitated classical Arabic lyricism. Discover how Ahmed Shawqi expanded poetry into verse drama and historical epics.',

    learningOutcomesAr: [
      'أن يوضح الطالب دور محمود سامي البارودي في إحياء الشعر العربي وتخليصه من الابتذال والصنعة المتكلفة',
      'أن يعدد العوامل التي هيأت لتلاميذ البارودي (جيل التطوير) التجديد والانفتاح على الثقافة الغربية والنضال الوطني',
      'أن يحلل مظاهر التجديد عند أمير الشعراء أحمد شوقي (العدول عن المديح للتاريخ، اتجاهه الإسلامي، والمسرح الشعري)',
      'أن يبين دور الشاعر أحمد محرم في تطويع الشعر العربي للقصص الملحمي التاريخي في ديوانه "الإلياذة الإسلامية"',
      'أن يستنتج سمات الكلاسيكية الجديدة (المواءمة بين الأخذ من التراث والالتفات إلى ثقافة العصر ومشكلات المجتمع)'
    ],
    learningOutcomesEn: [
      'Evaluate Mahmoud Sami al-Baroudi\'s revolutionary role in liberating Arabic poetry from medieval artificiality',
      'Identify catalysts empowering Baroudi\'s disciples: Western cultural exposure, national struggle, and free press',
      'Analyze stylistic innovations of Ahmed Shawqi: pivoting from court panegyric to history, Islamic themes, and verse drama',
      'Examine Ahmed Muharram\'s adaptation of Arabic metric verse to historical epics in "The Islamic Iliad"',
      'Articulate cardinal tenets of Neo-Classicism: synthesizing classical heritage with contemporary socio-political realities'
    ],

    vocabulary: [
      {
        termAr: 'المعارضة الشعرية (Poetic Contention / Mu\'arada)',
        termEn: 'Poetic Emulation (Mu\'arada)',
        definitionAr: 'أن ينظم شاعر حديث قصيدة على نفس وزن وقافية وروي قصيدة مشهورة لشاعر قديم منافساً له في الإبداع.',
        definitionEn: 'The neoclassical technique of composing a modern poem adhering to the exact meter and rhyme of an ancient classic.'
      },
      {
        termAr: 'المسرح الشعري (Verse Drama)',
        termEn: 'Verse Drama',
        definitionAr: 'فن درامي مسرحي تُكتب حواراته ومواقفه بالكامل بالشعر العربي الفصيح، وأسسه أحمد شوقي (مثل: مصرع كليوباترا، مجنون ليلى).',
        definitionEn: 'Theatrical drama written entirely in metered classical poetry, pioneered in Arabic by Ahmed Shawqi.'
      }
    ],

    sections: [
      {
        titleAr: '1. مدرسة الإحياء والبعث وعوامل التجديد',
        titleEn: '1. The Revivalist School & Catalysts of Innovation',
        contentAr: `**1. دور البارودي (رائد الإحياء)**:
أعاد للشعر العربي قوته ورصانته وأصالته، وحاكى فحول شعراء العصور الزاهية (الجاهلي، الإسلامي، والعباسي) في قوة الألفاظ، ومتانة الأسلوب، وعمق المعاني، والتحرر من المحسنات البديعية المتكلفة.

**2. تلاميذ البارودي (جيل التطوير: شوقي، حافظ، محرم، الكاظمي، الزهاوي)**:
انفتحوا على الثقافة الغربية بنضالهم ضد الاستعمار والاحتلال، ومتابعة قضايا عصرهم (حرية المرأة، الصحافة، التعليم، والوحدة الوطنية).

**3. مظاهر التجديد عند أحمد شوقي (أمير الشعراء)**:
- عدل عن المديح إلى **التاريخ** (كما في قصيدته الشهيرة: "كبار الحوادث في وادي النيل").
- اتجه في بعض شعره اتجاهاً **إسلامياً** (في مدائحه النبوية كنهج البردة).
- اتجه نحو المنجزات العصرية والمخترعات الحديثة (فوصف الطائرة والغواصة والباخرة).
- **ريادة المسرح الشعري العربي**: ألف مسرحيات خالدة مثل: "مصرع كليوباترا، مجنون ليلى، قمبيز، علي بك الكبير، وعنترة".`,
        contentEn: `Al-Baroudi restored robust phraseology and sonic grandeur. Disciples engaged national anti-colonial struggle.
Shawqi pioneered:
1. Transitioning from praise to historical contemplation.
2. Islamic eulogies (Nahj al-Burda).
3. Modern technological artifacts (aircraft, locomotives).
4. The founding father of Arabic verse drama (Cleopatra, Majnun Layla).`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit12-1',
      titleAr: 'اختبار الإحياء والبعث وجيل التطوير',
      titleEn: 'Revivalist School Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما هو العمل الأدبي الرائد الذي طوّع فيه الشاعر أحمد محرم الشعر العربي للقصص الملحمي التاريخي؟',
          textEn: 'What is the pioneering epic wherein Ahmed Muharram adapted Arabic verse into an Islamic historical saga?',
          optionsAr: ['مصرع كليوباترا', 'الإلياذة الإسلامية (ديوان مجد الإسلام)', 'نهج البردة', 'كبار الحوادث في وادي النيل'],
          optionsEn: ['The Death of Cleopatra', 'The Islamic Iliad (Majd al-Islam)', 'Nahj al-Burda', 'Great Events in Nile Valley'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'طوع أحمد محرم الشعر للملاحم التاريخية في ديوانه الشهير "مجد الإسلام" المعروف بالإلياذة الإسلامية عام 1933م.',
          explanationEn: 'Ahmed Muharram composed "Majd al-Islam", hailed as "The Islamic Iliad", adapting Arabic meters to historical epics.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: الاتجاه الوجداني ومدرسة الديوان ──
  {
    id: 'h-lit12-2',
    order: 2,
    titleAr: 'المحاضرة 2: الاتجاه الوجداني ومدرسة الديوان (خليل مطران، العقاد، المازني، وشكري)',
    titleEn: 'Lecture 2: The Romantic Direction & Diwan School of Poetry',
    subtitleAr: 'رائد الاتجاه الوجداني خليل مطران، شعراء الديوان الثلاثة، الصدق التعبيري، والوحدة العضوية، وغلبة الجانب الفكري',
    subtitleEn: 'Master romantic introspective lyricism under Khalil Mutran, and intellectual analytical rigor in the Diwan triumvirate.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: مدارس الشعر العربي الحديث',
    unitTitleEn: 'Unit 1: Modern Arabic Poetic Movements',
    lessonNumberAr: 'الدرس 2: الاتجاه الوجداني ومدرسة الديوان',
    lessonNumberEn: 'Lesson 2: Romantic Direction & Diwan Poetics',

    warmupHookAr: 'حين وقف الشاعر اللبناني المبدع "خليل مطران" أمام البحر في الإسكندرية وكتب: "شَاكٍ إِلَى البَحْرِ اضْطِرَابَ خَوَاطِرِي ... فَيُجِيبُنِي بِرِيَاحِهِ الهَوْجَاءِ"، لم يعد البحر مجرد ماء وأمواج، بل أصبح كائناً حياً يبثه الشاعر أحزانه ويشاركه آلامه! هنا ولد "الاتجاه الوجداني" الرومانسي في الشعر العربي! ثم جاء شعراء "مدرسة الديوان" ونادوا بأن القصيدة "كائن حي" مترابط لا يجوز تفكيكه! كيف غير هؤلاء نظرة العرب للشعر؟',
    warmupHookEn: 'When Khalil Mutran confided his broken heart to the Mediterranean, nature became an empathic living consciousness mirroring human emotion. Explore the birth of Arabic Romanticism and the intellectual rebellion of the Diwan school.',

    learningOutcomesAr: [
      'أن يوضح الطالب أسس الاتجاه الوجداني الذي أرساه خليل مطران (اكتشاف الفرد لذاته، الاعتزاز بثقافته، والتطلع للمثل العليا)',
      'أن يحلل سمات شعر مطران (الصدق الشعري، الوحدة العضوية، امتزاج الشاعر بالطبيعة، والتحرر من قيود الوزن والقافية الصارمة)',
      'أن يحدد رواد مدرسة الديوان الثلاثة: عباس محمود العقاد، إبراهيم عبد القادر المازني، وعبد الرحمن شكري',
      'أن يوضح مفهوم القصيدة عند شعراء الديوان (كائن حي لكل جزء فيه وظيفته ومكانه، كأعضاء الجسد)',
      'أن يبرر سبب وضوح الجانب الفكري والعقلاني (الفلسفي) وطغيان الذهنية الجافة على عاطفة شعراء الديوان'
    ],
    learningOutcomesEn: [
      'Articulate foundations of Romanticism under Mutran: individual self-realization, cultural authenticity, and universal ideals',
      'Analyze Mutran\'s stylistic tenets: organic unity, communion with nature, and expressive liberation from rigid rhyme',
      'Identify the Diwan triumvirate: Abbas Mahmoud al-Aqqad, Ibrahim al-Mazini, and Abdulrahman Shukri',
      'Define the Diwan concept of a poem: an organic living organism with interdependent functional parts',
      'Explain the predominance of intellectual philosophical rationality and cerebral abstraction over pure emotion in Diwan poetry'
    ],

    vocabulary: [
      {
        termAr: 'الوحدة العضوية (Organic Unity)',
        termEn: 'Organic Unity',
        definitionAr: 'تماسك القصيدة وتكاملها الفني بحيث تدور حول موضوع واحد وجو نفسي واحد، وتتسلسل الأفكار تسلسلاً لا يمكن فيه حذف بيت أو نقله.',
        definitionEn: 'The aesthetic coherence of a poem unified around a single theme and atmospheric mood where stanzas cannot be rearranged.'
      },
      {
        termAr: 'غلبة الذهنية (Cerebral Rationalism)',
        termEn: 'Intellectual Abstraction',
        definitionAr: 'طغيان التفكير العقلي والتأمل الفلسفي الجاف على العاطفة ودفء الإحساس في شعر مدرسة الديوان.',
        definitionEn: 'The ascendancy of analytical intellect, philosophical speculation, and dry cognitive inquiry over lyric emotion.'
      }
    ],

    sections: [
      {
        titleAr: '1. خليل مطران ورواد مدرسة الديوان',
        titleEn: '1. Khalil Mutran & The Diwan Literary Movement',
        contentAr: `**1. خليل مطران (رائد الاتجاه الوجداني الرومانسي)**:
- خرج بالقصيدة من النمط الكلاسيكي القديم إلى الرومانسية الغربية المعاصرة.
- جعل دأبه في التعبير عن أحاسيسه ومشاعره الذاتية، ومزج نفسه بالطبيعة وجعلها مرآة لانعكاس مشاعره.
- أرسى قاعدة **الوحدة العضوية**: القصيدة وحدة متكاملة لا تعدد فيها للأغراض.

**2. مدرسة الديوان (العقاد، المازني، شكري - 1921م)**:
- تأثروا بالرومانسية الإنجليزية، ونقدوا مدرسة الإحياء والبعث نقداً لاذعاً (خاصة في كتاب "الديوان في الأدب والنقد").
- **مفهوم الشعر عندهم**: تعبير صادق عن الوجدان والنفس البشرية وما تفيض به من تأملات في أسرار الكون والحياة.
- **القصيدة كائن حي**: ترابط تام للأبيات تحت عنوان موحد للقصيدة والديوان بأكمله.
- **مأخذ نقدي عليهم**: غلبت على شعرهم **الذهنية الجافة** والعقلانية الفلسفية على حساب دفء العاطفة.`,
        contentEn: `Mutran pioneered introspective Romanticism, communing with nature and implementing organic unity.
The Diwan Movement (Al-Aqqad, Al-Mazini, Shukri):
- Influenced by English romanticism; sharply critiqued Neo-Classicists in their manifesto "Al-Diwan".
- Defined poetry as sincere existential reflection.
- Treated the poem as a single integrated living anatomy with thematic title.
- Critique: Suffered from excessive philosophical intellectualism that chilled poetic warmth.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit12-2',
      titleAr: 'اختبار الاتجاه الوجداني والديوان',
      titleEn: 'Romanticism & Diwan School Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما العيب الأسلوبي الذي أُخذ على شعراء مدرسة الديوان (العقاد والمازني وشكري) في نتاجهم الشعري؟',
          textEn: 'What stylistic flaw was critically attributed to the poetry of the Diwan school poets?',
          optionsAr: ['الاهتمام الزائد بشعر المناسبات والمجاملات', 'غلبة الجانب الفكري والذهنية الجافة على العاطفة', 'كثرة الأخطاء اللغوية والنحوية', 'التقليد الأعمى للشعر الجاهلي القديم'],
          optionsEn: ['Excessive focus on ceremonial occasions', 'Predominance of dry cerebral intellectualism over emotion', 'Frequent grammatical inaccuracies', 'Blind imitation of archaic pre-Islamic tropes'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'غلب على شعر مدرسة الديوان التعمق في الفلسفة والتفكير العقلاني، فطغت الذهنية الجافة والعقلانية على العاطفة ودفء المشاعر.',
          explanationEn: 'The Diwan poets leaned heavily toward philosophical abstraction, resulting in dry cognitive intellectualism cooling emotional fervor.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: مدرسة أبوللو ومدرسة المهاجر والمدرسة الواقعية ──
  {
    id: 'h-lit12-3',
    order: 3,
    titleAr: 'المحاضرة 3: مدرسة أبوللو وشعراء المهاجر والمدرسة الواقعية الجديدة (شعر التفعيلة)',
    titleEn: 'Lecture 3: Apollo School, Mahjar Diaspora & The New Realist Movement',
    subtitleAr: 'أحمد زكي أبو شادي وإبراهيم ناجي، الرابطة القلمية والعصبة الأندلسية، والتحول إلى شعر التفعيلة الحر',
    subtitleEn: 'Master Apollo\'s lyrical romanticism, diaspora longing and existential mysticism, and the modernist free-verse revolution.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: مدارس الشعر العربي الحديث',
    unitTitleEn: 'Unit 1: Modern Arabic Poetic Movements',
    lessonNumberAr: 'الدرس 3: مدرسة أبوللو والمهاجر والواقعية',
    lessonNumberEn: 'Lesson 3: Apollo, Mahjar & Contemporary Realism',

    warmupHookAr: 'حين هاجر أدباء الشام ولبنان إلى الأمريكتين الشمالية والجنوبية هرباً من الفقر والاضطهاد العثماني، أسس جبران خليل جبران وميخائيل نعيمة وإيليا أبو ماضي "الرابطة القلمية" في نيويورك! كتبوا شعراً يفيض بالحنين الجارف إلى الوطن والتأمل الإنساني الروحي العميق. وبعد الحرب العالمية الثانية، زلزلت النكبة الفلسطينية والواقع السياسي أركان العالم العربي، فظهرت "المدرسة الواقعية" لتهدم نظام الشطرين وتعلن ولادة "شعر التفعيلة"! كيف تطورت القصيدة من الرومانسية الحالمة إلى مواجهة الواقع الحي؟',
    warmupHookEn: 'Exiled in the Americas, Mahjar poets revolutionized Arabic literary consciousness with spiritual mysticism. Following WWII and the 1948 catastrophe, Realist poets dismantled the ancient dual-hemistich system, giving birth to free-verse Taf\'ila poetry.',

    learningOutcomesAr: [
      'أن يوضح الطالب ظروف نشأة مدرسة أبوللو (1932م) بزعامة أحمد زكي أبو شادي وإبراهيم ناجي وعلي محمود طه',
      'أن يحلل السمات الفنية لأبوللو: استعمال اللغة استعمالاً جديداً بدلالات الألفاظ، والتشخيص والتجسيم، وحب الطبيعة والحزن والتشاؤم',
      'أن يميز بين شعراء المهاجر في أمريكا الشمالية (الرابطة القلمية - التجديد الثوري والتساهل اللغوي) وأمريكا الجنوبية (العصبة الأندلسية - المحافظة على التراث)',
      'أن يستنتج أسباب ظهور المدرسة الواقعية الجديدة بعد الحرب العالمية الثانية لمواكبة الواقع وقضايا الجماهير',
      'أن يوضح الخصائص الفنية للشعر الواقعي الحر: التحرر من القافية الموحدة، الاعتماد على التفعيلة الواحدة، السطر الشعري، والرمز والأسطورة'
    ],
    learningOutcomesEn: [
      'Detail origins of the Apollo Movement (1932) led by Ahmed Zaki Abu Shadi, Ibrahim Naji, and Ali Mahmoud Taha',
      'Analyze Apollo stylistic innovations: novel sensory linguistic synesthesia, personification, elegiac melancholy, and pastoral nature',
      'Contrast Mahjar diaspora groups: The Pen League (New York radical modernists) vs Andalusian League (São Paulo conservative classicists)',
      'Explain post-WWII geopolitical shifts catalyzing the emergence of Realist poetry to voice public collective struggle',
      'Identify free-verse Realist hallmarks: breaking dual hemistichs, single foot (Taf\'ila) repetition, metric lines, and symbolic mythological allusions'
    ],

    vocabulary: [
      {
        termAr: 'تراسل الحواس (Synesthesia)',
        termEn: 'Synesthesia (Tarasul al-Hawas)',
        definitionAr: 'ظاهرة أسلوبية عند مدرسة أبوللو يتم فيها إعطاء حاسة وظيفة حاسة أخرى (مثل: العطر القمري، النغم المعطر، تذوق الضوء).',
        definitionEn: 'A poetic technique blending sensory perceptions: describing olfactory scents visually or auditory melodies aromatically.'
      },
      {
        termAr: 'شعر التفعيلة (Free-Verse Taf\'ila)',
        termEn: 'Free Verse (Taf\'ila Poetry)',
        definitionAr: 'شكل شعري حديث يعتمد على تكرار التفعيلة العروضية بعدد غير محدد في أسطر شعرية متفاوتة الطول دون الالتزام بنظام الشطرين.',
        definitionEn: 'Modern metric poetry based on an organic variable number of rhythmic feet (Taf\'ila) per line without dual hemistichs.'
      }
    ],

    sections: [
      {
        titleAr: '1. أبوللو والمهاجر والمدرسة الواقعية',
        titleEn: '1. Apollo, The Mahjar Diaspora & Realism',
        contentAr: `**1. مدرسة أبوللو (1932م)**:
- سميت باسم إله الفنون والنور عند اليونان دلالة على الانفتاح على الثقافات العالمية.
- اتسمت بالحنين لمواطن الذكريات، وحب الطبيعة والافتتان بها ومناجاتها، وغلبة نغمة اليأس والاستسلام والتشاؤم ("الأطلال" لإبراهيم ناجي).
- استعملوا الكلمات استعمالاً جديداً في دلالاتها ("الأنفاس المحترقة، الجنة الضائعة").

**2. مدرسة المهاجر (الشعر المهجري)**:
- **الرابطة القلمية (نيويورك 1920)**: جبران، نعيمة، أبو ماضي -> ثاروا على القديم ودعوا للتجديد الشامل في المضمون والشكل وتساهلوا في قواعد اللغة.
- **العصبة الأندلسية (البرازيل 1932)**: رشيد خوري، شفيق المعلوف -> كانوا أكثر تمسكاً باللغة العربية التراثية والوزن والقافية.
- خصائصهم: الحنين الجارف للوطن، النزعة الروحية والإنسانية، واستبطان النفس، والتأمل في الكون والموت والحياة.

**3. المدرسة الواقعية والشعر الحر (نازك الملائكة، السياب، صلاح عبد الصبور، درويش)**:
- ألغوا نظام الشطرين المتساويين (الصدر والعجز) واستبدلوه بـ **السطر الشعري**.
- ألغوا القافية الموحدة واعتمدوا على **وحدة التفعيلة** الموسيقية.
- وظفوا الرموز والأساطير الشعبية والتاريخية للتعبير عن قضايا التحرر والفقر والعدالة وهموم الجماهير.`,
        contentEn: `Apollo: Named after Greek god of poetry; evocative imagery, pastoral nature, synesthesia, and elegiac tone (e.g., Al-Atlal).
Mahjar: Pen League (NY) spearheaded revolutionary linguistic renewal; Andalusian League (Brazil) guarded classical syntax.
Realism / Free Verse (Nazik al-Malaika, Al-Sayyab, Darwish): Displaced dual-hemistich stanzas with variable poetic lines based on single repeating Taf\'ila units, embodying political liberation and historical mythology.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit12-3',
      titleAr: 'اختبار أبوللو والمهاجر والواقعية',
      titleEn: 'Apollo, Mahjar & Realism Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما الأساس الموسيقي والعروضي الذي بنيت عليه قصائد المدرسة الواقعية (الشعر الحر)؟',
          textEn: 'What metric foundation underpins the compositions of the Realist / Free Verse movement?',
          optionsAr: ['الالتزام بنظام الشطرين المتساويين وقافية موحدة', 'الاعتماد على تكرار التفعيلة الواحدة في أسطر شعرية متفاوتة', 'الشعر المنثور الخالي تماماً من أي إيقاع عروضي', 'العودة لبحور الشعر الجاهلي المركبة كالبسيط والطويل حصراً'],
          optionsEn: ['Strict dual hemistichs with monorhyme', 'Repeating a single rhythmic foot (Taf\'ila) across variable lines', 'Unmetered prose poetry', 'Exclusively returning to archaic compound meters'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'اعتمدت المدرسة الواقعية على وحدة التفعيلة، حيث تتكرر التفعيلة الموسيقية في السطر الشعري بحسب تمام الفكرة دون الالتزام بعدد محدد أو شطرين.',
          explanationEn: 'Realist free verse relies on the single Taf\'ila unit repeated across poetic lines of variable length conforming organically to meaning.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: فنون النثر العربي الحديث (المقال، الرواية، القصة، والمسرحية) ──
  {
    id: 'h-lit12-4',
    order: 4,
    titleAr: 'المحاضرة 4: فنون النثر العربي الحديث (المقال، الرواية، القصة القصيرة، والمسرحية)',
    titleEn: 'Lecture 4: Modern Arabic Prose Arts: Essay, Novel, Short Story & Drama',
    subtitleAr: 'نشأة الرواية العربية (زينب لهيكل)، تقنيات القصة القصيرة (مبدأ التكثيف والوحدة)، وعناصر العمل المسرحي',
    subtitleEn: 'Master prose fiction evolution, narrative architectonics, short story compression, and theatrical conflict.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Modern Arabic Literature',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: فنون النثر العربي المعاصر',
    unitTitleEn: 'Unit 2: Modern Arabic Prose Genres',
    lessonNumberAr: 'الدرس 4: المقال والرواية والقصة القصيرة والمسرحية',
    lessonNumberEn: 'Lesson 4: Narrative Fiction & Dramatic Arts',

    warmupHookAr: 'حين نال الأديب العربي العالمي "نجيب محفوظ" جائزة نوبل في الأدب عام 1988 عن ثلاثيته الشهيرة (بين القصرين، قصر الشوق، السكرية)، أثبت للعالم أجمع أن فن الرواية العربية بلغ الذروة العالمية في رصد الواقع وتجسيد نبض الحارة المصرية والإنسانية! ولكن كيف بدأت الرواية العربية برواية "زينب" لمحمد حسين هيكل عام 1914؟ وما الفارق الجوهري الفارق بين الرواية والقصة القصيرة؟ ولماذا لا تقوم أي مسرحية بدون صراع؟',
    warmupHookEn: 'When Naguib Mahfouz won the Nobel Prize in Literature in 1988 for his Cairo Trilogy, modern Arabic fiction took center stage globally. Explore the evolution of Arabic narrative prose from Haykal\'s "Zaynab" to the technical compression of the short story and the dramatic tension of the stage.',

    learningOutcomesAr: [
      'أن يوضح الطالب أثر الصحافة الحديثة في تطور أسلوب المقال العربي وتخليصه من المحسنات البديعية المتكلفة',
      'أن يعرف الرواية (Novel) بوصفها عملاً سردياً طويلاً يحاكي الواقع في الشخصيات والزمان والمكان واللغة والأحداث',
      'أن يحلل ميلاد الرواية العربية الرائدة "زينب" لمحمد حسين هيكل (1914م) ودور نجيب محفوظ في وصولها للعالمية',
      'أن يميز بين الرواية والقصة القصيرة من حيث الحجم، والزمن، واللغة، ومبدأ التكثيف والتركيز الشديد (لحظة التنوير)',
      'أن يحدد العناصر البنائية للمسرحية (الفكرة، الحكاية، الشخصيات، الحوار، والصراع الدرامي الذي هو قوام المسرحية)'
    ],
    learningOutcomesEn: [
      'Assess the influence of modern journalism in making Arabic essays direct, lucid, and devoid of archaic ornamentation',
      'Define the Novel as an extended narrative emulating realistic sociology in character, setting, dialogue, and temporal flow',
      'Trace landmarks from Muhammad Husayn Haykal\'s "Zaynab" (1914) to Naguib Mahfouz\'s Nobel victory',
      'Contrast novels with short stories regarding narrative scope, compression principle, and the epiphanic moment of illumination',
      'Identify dramatic architectural pillars: premise, plot, characterization, dialogue, and essential dramatic conflict'
    ],

    vocabulary: [
      {
        termAr: 'محاكاة الواقع (Realistic Verisimilitude)',
        termEn: 'Realism / Verisimilitude',
        definitionAr: 'أن تكون أحداث الرواية وشخصياتها وأزمنتها وأماكنها ولغتها مما يجري في بيئة الناس المعاشة وليست خوارق أسطورية.',
        definitionEn: 'The aesthetic imperative that narrative events, characters, settings, and dialogue mirror plausible human reality.'
      },
      {
        termAr: 'لحظة التنوير (Moment of Epiphany)',
        termEn: 'Epiphanic Illumination',
        definitionAr: 'اللحظة الحاسمة والمكثفة في نهاية القصة القصيرة التي ينكشف فيها المعنى العميق للحدث في ومضة إدراك مفاجئة.',
        definitionEn: 'The climactic flash in a short story where underlying emotional or thematic truth is instantaneously unveiled.'
      }
    ],

    sections: [
      {
        titleAr: '1. الفنون النثرية الحديثة وخصائصها الفنية',
        titleEn: '1. Modern Prose Genres & Structural Hallmarks',
        contentAr: `**1. الرواية (The Novel)**:
- سرد نثري طويل يحاكي الواقع المعاش: الشخصيات من طينة البشر، والأماكن واقعية محددة (كشوارع القاهرة أو الرياض)، والزمن معلوم بالتاريخ، واللغة من قبيل ما يتخاطب به الناس.
- رائدة الروايات العربية الفنية: رواية **"زينب"** للدكتور محمد حسين هيكل (1914م).
- قمة الرواية العربية: أعمال **نجيب محفوظ** (الثلاثية، خان الخليلي) الحائز على جائزة نوبل في الأدب 1988م.

**2. القصة القصيرة (Short Story)**:
- ليست اختصاراً للرواية، بل فن فني مستقل بذاته يتميز بـ **الإحكام الشديد والتكثيف والتركيز**.
- تتناول حدثاً واحداً، وشخصية محددة، في زمن وجيز جداً وبضع صفحات، وكل كلمة فيها مقصودة ومحسوبة.

**3. المسرحية (The Drama)**:
- قصة تمثيلية تعرض فكرة من خلال حوار يدور بين شخصيات مختلفة، وتصل لذروتها عبر **الصراع الدرامي**.
- الصراع هو قوام العمل المسرحي (صراع فكري، خلقي، أو اجتماعي).
- هيكل المسرحية: العرض (التمهيد)، التعقيد (تأزم الأحداث)، والحل (النهاية).`,
        contentEn: `The Novel: Extended realistic narrative (pioneered by Haykal's Zaynab 1914, climaxed by Naguib Mahfouz).
Short Story: Distinct autonomous art form characterized by extreme compression and single epiphanic focus, not an abbreviated novel.
Drama: Theatrical narrative driven by characters in dialogue resolving through central dramatic conflict.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit12-4',
      titleAr: 'اختبار فنون النثر الحديث',
      titleEn: 'Modern Prose Arts Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما هو العنصر الفني الجوهري الذي يعتبر العمود الفقري وقوام أي عمل مسرحي حقيقي؟',
          textEn: 'What essential artistic element constitutes the core spine and foundation of any true theatrical drama?',
          optionsAr: ['كثرة الديكورات والأزياء على الخشبة', 'الصراع الدرامي بين الشخصيات والمواقف', 'طول الفصول المسرحية وامتدادها لساعات', 'الاعتماد على الموسيقى الصامتة وحدها'],
          optionsEn: ['Elaborate stage costumes and sets', 'Dramatic conflict between characters and ideologies', 'Extended multi-hour act duration', 'Exclusive reliance on silent pantomime'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'الصراع الدرامي هو قوام المسرحية وروحها؛ فالحوار وحده لا يصنع مسرحاً ما لم يولد توتراً وصراعاً فكرياً أو اجتماعياً يشد المشاهد للحل.',
          explanationEn: 'Dramatic conflict is the absolute lifeblood of drama; dialogue without intellectual or ethical tension fails as theatre.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: البلاغة المتقدمة والتجربة الشعرية والوحدة العضوية ──
  {
    id: 'h-lit12-5',
    order: 5,
    titleAr: 'المحاضرة 5: البلاغة المتقدمة - عناصر التجربة الشعرية، الوحدة الفنية، والموسيقى في النص',
    titleEn: 'Lecture 5: Advanced Rhetoric: The Poetic Experience, Organic Unity & Textual Music',
    subtitleAr: 'عناصر التجربة الشعرية (الفكر، الوجدان، والصورة التعبيرية)، والوحدة العضوية، والموسيقى الظاهرة والخفية',
    subtitleEn: 'Master the anatomy of poetic experiences, cognitive-affective fusion, organic integrity, and overt/covert rhythm.',
    durationMinutes: 45,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (الشهادة الثانوية العامة) - الأدب والنصوص',
    gradeLevelNameEn: 'Grade 12 / High School 3 - Advanced Arabic Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: البلاغة النقدية والتجربة الشعرية',
    unitTitleEn: 'Unit 3: Poetic Experience & Critical Rhetoric',
    lessonNumberAr: 'الدرس 5: التجربة الشعرية والوحدة العضوية والموسيقى',
    lessonNumberEn: 'Lesson 5: Poetic Experience & Sonic Textures',

    warmupHookAr: 'حين تقرأ بيتاً شعرياً فتسري قشعريرة في جسدك ويفيض قلبك تأثراً، ما الذي حدث بينك وبين الشاعر عبر الكلمات؟ لقد نقل الشاعر إليك "تجربته الشعرية" الكاملة! مزج فكره الصائب بوجدانه الصادق في قوالب ألفاظ وموسيقى ساحرة. كيف ينصهر الفكر بالوجدان ليمنع القصيدة من أن تكون مجرد فلسفة جافة أو عاطفة هوجاء تافهة؟ وما الفرق بين الموسيقى الظاهرة الخارجية والموسيقى الخفية الداخلية؟',
    warmupHookEn: 'When poetic verse sends chills through a reader, a successful communion of Poetic Experience has materialized. Explore how great masters fuse cerebral thought with authentic emotion, creating harmonious organic unity and layered overt/covert musicality.',

    learningOutcomesAr: [
      'أن يعرف الطالب مفهوم "التجربة الشعرية" بأنها الرؤية النفسية والوجدانية للشاعر عند انفعاله بمؤثر حقيقي ينقله في إطار فني متكامل',
      'أن يحلل عناصر التجربة الشعرية الثلاثة: الوجدان (العاطفة الصادقة)، الفكر (المعاني والأفكار)، والصورة التعبيرية (الألفاظ والأخيلة والموسيقى)',
      'أن يوضح أهمية امتزاج الفكر بالوجدان: الفكر يمنح التجربة دقتها وعمقها، والوجدان يمنحها حرارتها وحيويتها وخلودها',
      'أن يستخرج مقومات "الوحدة العضوية (الفنية)" في أي نص شعري: وحدة الموضوع، وحدة الجو النفسي، وترابط الأفكار وتكاملها',
      'أن يفرق بدقة بين الموسيقى الظاهرة (الخارجية: الوزن، القافية، التصريع، الجناس، وحسن التقسيم) والموسيقى الخفية (الداخلية: حسن اختيار الألفاظ الموحية، اتساق العبارات، وتآلف الأنغام)'
    ],
    learningOutcomesEn: [
      'Define Poetic Experience as the affective psychological crystallization triggered by real-world stimuli expressed through metric art',
      'Dissect the 3 pillars of poetic experience: Passion (authentic emotion), Intellect (deep conceptual ideas), and Imagery (phrasing, tropes, music)',
      'Explain cognitive-affective fusion: intellect lends structural profundity and clarity; passion imparts immortal emotive resonance',
      'Identify benchmarks of Organic Unity: single thematic focus, homogeneous atmospheric mood, and logically ordered stanzas',
      'Distinguish overt sonic music (meter, monorhyme, initial hemistich rhyme Tasree\', alliteration) from covert internal music (evocative diction, harmonious syntax, tonal cadence)'
    ],

    vocabulary: [
      {
        termAr: 'التجربة الشعرية (The Poetic Experience)',
        termEn: 'The Poetic Experience',
        definitionAr: 'الموقف الشعوري والفكري الكامل الذي يمر به الشاعر حين ينفعل بمؤثر خارجي أو داخلي فيصوغه ببراعة في نص أدبي.',
        definitionEn: 'The total psychological and intellectual encounter wherein an inspired poet translates emotional stimuli into poetic art.'
      },
      {
        termAr: 'الموسيقى الخفية (Covert / Internal Music)',
        termEn: 'Internal Covert Musicality',
        definitionAr: 'نغم داخلي عذب ينبع من دقة اختيار الكلمات الموحية، وتناسق الحروف، وترتيب الأفكار، وصدق العاطفة دون الاعتماد على الوزن والقافية فقط.',
        definitionEn: 'Subtle internal resonance emanating from evocative diction, euphonic consonant sequencing, and genuine emotive sincerity.'
      }
    ],

    sections: [
      {
        titleAr: '1. عناصر التجربة الشعرية والوحدة العضوية والموسيقى',
        titleEn: '1. Poetic Experience Pillars, Organic Unity & Music',
        contentAr: `**1. عناصر التجربة الشعرية**:
- **الوجدان (العاطفة)**: أساس التجربة، وشرطه الصدق الفني. (العاطفة وحدها بلا فكر تسقط القصيدة في السذاجة والتهافت).
- **الفكر (المعاني)**: يضمن للقصيدة التماسك والعمق. (الفكر وحده بلا عاطفة يحول الشعر إلى مجرد فلسفة ونظم جاف).
- **الشاعر الحق**: هو من "يفكر بقلبه، ويشعر بعقله" ليتحقق التوازن الأسمى.

**2. مقومات الوحدة الفنية (العضوية)**:
تتحقق بثلاثة أركان:
1. **وحدة الموضوع**: القصيدة كلها تتحدث عن فكرة وقضية واحدة.
2. **وحدة الجو النفسي**: سيطرة عاطفة شعورية واحدة على الشاعر طوال النص (كالفرح، الحزن، أو الفخر).
3. **ترتيب الأفكار والصور وتكاملها**: بحيث يسلم كل بيت إلى ما بعده ولا يمكن تقديم بيت أو تأخيره.

**3. موسيقى النص الأدبي**:
- **موسيقى ظاهرة (خارجية)**: يدركها السامع فوراً من الوزن العروضي الواحد، القافية الموحدة، وحروف الروي، والمحسنات الصوتية كـ (التصريع في المطلع، والجناس، وحسن التقسيم).
- **موسيقى خفية (داخلية نابعة من النفس)**: لا تخضع للأوزان، بل تنبع من روعة الألفاظ وإيحاءاتها، وقوة العاطفة، وتوافق المعاني وترابط الجمل. وهي أعمق وأبقى أثراً في الوجدان.`,
        contentEn: `Pillars of Poetic Experience:
1. Emotion (Affective sincerity).
2. Intellect (Conceptual substance). True poets "think with their hearts and feel with their minds".
3. Expressive medium: diction, metaphor, cadence.
Organic Unity requirements: unified topic, unified psychological atmosphere, and interlocking stanzas.
Musicality:
- Overt (External): Metrical rhythms, monorhyme, initial Tasree\', alliteration Jinan.
- Covert (Internal): Evocative diction, phonetic harmony, cognitive fluency, and emotional authenticity.`
      }
    ],

    keyConceptsAr: [
      'المفاهيم الأساسية والتطبيقية للدرس',
      'القواعد والنظريات المعيارية المعتمدة'
    ],
    keyConceptsEn: [
      'Core foundational and applied concepts',
      'Standard national curriculum benchmarks'
    ],
    summaryAr: 'ملخص شامل للمحاضرة ومفاهيمها الأساسية وقواعدها التطبيقية وفق المعايير الوزارية المعتمدة.',
    summaryEn: 'Comprehensive lecture summary highlighting key rules and national curriculum concepts.',

    assessment: {
      id: 'quiz-hlit12-5',
      titleAr: 'اختبار التجربة الشعرية والبلاغة',
      titleEn: 'Poetic Experience & Rhetoric Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'ما النتيجة البلاغية المحتومة إذا طغى جانب الفكر على جانب الوجدان في تجربة الشاعر؟',
          textEn: 'What is the inevitable rhetorical outcome if intellectual abstraction overpowers emotional affect in a poet\'s experience?',
          optionsAr: ['تصبح القصيدة شديدة الحرارة والانفعال', 'تفقد القصيدة روح الشعر وتتحول إلى فلسفة وتقريرية جافة', 'تتحول القصيدة إلى انسيابية رومانسية', 'يتفكك الوزن العروضي للقصيدة'],
          optionsEn: ['Poem becomes excessively fiery and emotive', 'Poem loses lyrical soul, degenerating into dry reporting and philosophy', 'Poem transforms into romantic fluidity', 'Poem loses metrical rhythm'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'إذا طغى الفكر على الوجدان جَفَّت العاطفة وتحول الشعر إلى مجرد نظم عقلاني وفلسفة تقريرية باردة خالية من حرارة التأثير.',
          explanationEn: 'When cognitive intellect eclipses emotion, the verse loses affective warmth, reducing to cold philosophical versification.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
