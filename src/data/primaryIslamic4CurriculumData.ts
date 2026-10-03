import type { Lecture } from '../types';

// PRIMARY ISLAMIC STUDIES — GRADE 4 (التربية الدينية الإسلامية الصف الرابع الابتدائي - نظام التعليم 2.0 المعتمد)
// ============================================================================
// Based on the official Egyptian Ministry of Education (Edu 2.0) guidelines for Grade 4 Islamic Studies.
// Covers: Theme 1 (Aqeedah, Seerah, Quran & Tajweed) and Theme 2 (Worship, Purity, Morals).

export const PRIMARY_ISLAMIC_G4_LECTURES: Lecture[] = [
  // ── LECTURE 1: ISLAMIC CREED, CREATION OF ADAM, BEAUTIFUL NAMES OF ALLAH ──
  {
    id: 'pisl-g4-1',
    order: 1,
    titleAr: 'المحاضرة 1: العقيدة الإسلامية، قصة خلق آدم، وأسماء الله الحسنى',
    titleEn: 'Lecture 1: Islamic Creed, Creation of Adam & Beautiful Names of Allah',
    subtitleAr: 'الإيمان بالله تعالى، قصة خلق أبي البشر، ومعرفة أسماء الله: الرحمن، الرحيم، القدوس، البديع.',
    subtitleEn: 'Learn about Faith in Allah, the creation of Prophet Adam, and Allah\'s Beautiful Names.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    assessment: { id: 'dummy-assess', titleAr: 'تقييم', titleEn: 'Assessment', passingScore: 80, questions: [] },

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الرابع الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 4 / Primary 4 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (العقيدة)',
    unitTitleEn: 'Theme 1: Who Am I? — Islamic Creed (Aqeedah)',
    lessonNumberAr: 'الدرس 1: الإيمان بالله وخلق آدم عليه السلام',
    lessonNumberEn: 'Lesson 1: Faith in Allah & Creation of Adam',

    warmupHookAr: 'تأمل في نفسك وفي السماء من فوقك! كيف خلق الله تعالى هذا الكون البديع؟ وكيف كرّم الإنسان الأول سيدنا آدم عليه السلام وأسجد له الملائكة؟ تعال لنتعرف على بديع صنع الخالق وأسمائه الحسنى التي تملأ القلوب طمأنينة!',
    warmupHookEn: 'Look closely at yourself and the sky above! How did Allah create this magnificent universe? Let\'s discover the story of the first human, Prophet Adam, and explore Allah\'s Beautiful Names.',

    learningOutcomesAr: [
      'أن يشرح الطالب معنى الإيمان بالله تعالى ومفهوم العبادة.',
      'أن يسرد قصة خلق سيدنا آدم عليه السلام وتكريم الله له.',
      'أن يوضح معاني أسماء الله الحسنى المقررة: الرحمن، الرحيم، القدوس، البديع.',
      'أن يتفكر في نعم الله عليه وفي بديع خلق السماء والأرض.'
    ],
    learningOutcomesEn: [
      'Explain the meaning of Faith in Allah and the concept of worship.',
      'Narrate the story of the creation of Prophet Adam and how Allah honored him.',
      'Understand the meanings of Allah\'s Names: Ar-Rahman, Ar-Raheem, Al-Quddus, Al-Badi\'.',
      'Reflect on Allah\'s blessings and His perfect creation of the universe.'
    ],

    vocabulary: [
      {
        termAr: 'العقيدة (Aqeedah)',
        termEn: 'Islamic Creed',
        definitionAr: 'ما يعقد عليه الإنسان قلبه من الإيمان الجازم بالله تعالى وملائكته وكتبه ورسله.',
        definitionEn: 'Firm belief in the heart regarding Allah, His Angels, Books, and Messengers.'
      },
      {
        termAr: 'البديع (Al-Badi\')',
        termEn: 'The Originator',
        definitionAr: 'الذي خلق الأشياء على غير مثال سابق، وأبدع الكون في أجمل صورة.',
        definitionEn: 'The One who created everything from nothing, without any precedent.'
      },
      {
        termAr: 'القدوس (Al-Quddus)',
        termEn: 'The Pure / The Holy',
        definitionAr: 'المنزّه عن كل نقص وعيب، والموصوف بكل كمال.',
        definitionEn: 'The Pure, free from any imperfection or flaw.'
      }
    ],

    keyConceptsAr: [
      'الإيمان بالله يقتضي طاعته والتفكر في خلقه.',
      'خلق الله سيدنا آدم من طين وعلّمه الأسماء كلها وأمر الملائكة بالسجود له تكريماً.',
      'أسماء الله الحسنى (الرحمن، الرحيم، القدوس، البديع) تدعونا لمحبته وتعظيمه.'
    ],
    keyConceptsEn: [
      'Faith requires obedience and reflection upon Allah\'s creation.',
      'Adam was created from clay; Allah taught him the names of all things and commanded angels to prostrate to him.',
      'Allah\'s Beautiful Names inspire love and reverence in our hearts.'
    ],

    summaryAr: 'تعرفنا في هذا الدرس على عظمة الخالق من خلال التفكر في الكون، وتدارسنا قصة خلق سيدنا آدم عليه السلام وكيف كرّمه الله بالعلم. كما شرحنا معاني أسماء الله: الرحمن، الرحيم، القدوس، البديع، ليزداد إيماننا ومحبتنا لله.',
    summaryEn: 'In this lesson, we reflected on the greatness of the Creator, studied the creation of Prophet Adam, and explored the meanings of Allah\'s Beautiful Names: Ar-Rahman, Ar-Raheem, Al-Quddus, and Al-Badi\'.',

    mainContentAr: `
### 1. الإيمان بالله تعالى (Faith in Allah)
- **مفهوم العبادة:** العبادة هي كل ما يحبه الله ويرضاه من الأقوال والأفعال الظاهرة والباطنة. الإيمان بالله يجعلنا نتوجه إليه وحده بالدعاء والصلاة.
- **التفكر في خلق الإنسان والسماء:** دعانا الله للنظر في أنفسنا وكيف خلقنا في أحسن تقويم، وإلى السماء كيف رفعت بلا عمد، وهذا يزيد من إيماننا ويقيننا.

### 2. قصة خلق آدم عليه السلام (The Creation of Adam)
- **مادة الخلق:** خلق الله آدم عليه السلام من طين.
- **التكريم الإلهي:** 
  1. نفخ فيه من روحه.
  2. علّمه أسماء كل شيء (فَضْل العِلْم).
  3. أمر الملائكة بالسجود له (سجود تحية وتكريم لا عبادة).
- **الخلافة في الأرض:** خُلق الإنسان ليعمر الأرض وينشر فيها الخير ويطيع أوامر الله.

### 3. أسماء الله الحسنى المقررة (Beautiful Names of Allah)
- **الرَّحْمَن والرَّحِيم:** اسمان مشتقان من الرحمة؛ فالرحمن رحمته وسعت كل شيء، والرحيم يرحم المؤمنين يوم القيامة وفي الدنيا.
- **القُدُّوس:** المُنَزَّه عن كل نقص وعيب، الكامل في ذاته وصفاته.
- **البَدِيع:** الذي أبدع الكون وخلقه على غير مثال سابق وبأجمل صورة وصنع.

### 4. رسم توضيحي: تكريم الإنسان وأسماء الله
\`\`\`xml
<svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="760" height="250" fill="#0f172a" rx="16"/>
  
  <g transform="translate(20, 25)">
    <rect width="350" height="200" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="175" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">قصة خلق آدم عليه السلام</text>
    <text x="330" y="75" fill="#f8fafc" font-size="14" text-anchor="end">🌱 <tspan fill="#38bdf8" font-weight="bold">الخلق:</tspan> خُلق من تراب وطين</text>
    <text x="330" y="115" fill="#f8fafc" font-size="14" text-anchor="end">📚 <tspan fill="#34d399" font-weight="bold">العلم:</tspan> علمه الله الأسماء كلها</text>
    <text x="330" y="155" fill="#f8fafc" font-size="14" text-anchor="end">🙇 <tspan fill="#fbbf24" font-weight="bold">التكريم:</tspan> أمر الملائكة بالسجود له</text>
    <text x="330" y="190" fill="#f8fafc" font-size="14" text-anchor="end">🌍 <tspan fill="#f472b6" font-weight="bold">المهمة:</tspan> إعمار الأرض والخلافة</text>
  </g>

  <g transform="translate(390, 25)">
    <rect width="350" height="200" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="175" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">أسماء الله الحسنى</text>
    <text x="330" y="75" fill="#f8fafc" font-size="14" text-anchor="end">❤️ <tspan fill="#34d399" font-weight="bold">الرحمن الرحيم:</tspan> واسع الرحمة بعباده</text>
    <text x="330" y="115" fill="#f8fafc" font-size="14" text-anchor="end">✨ <tspan fill="#38bdf8" font-weight="bold">القدوس:</tspan> المنزّه عن كل نقص وعيب</text>
    <text x="330" y="155" fill="#f8fafc" font-size="14" text-anchor="end">🎨 <tspan fill="#fbbf24" font-weight="bold">البديع:</tspan> مبدع الكون بلا مثال سابق</text>
  </g>
</svg>
\`\`\`
`,

    formativeAssessment: [
      {
        id: 'q-isl4-1',
        questionAr: 'بماذا كرّم الله تعالى سيدنا آدم عليه السلام وميزه عن الملائكة في القصة؟',
        optionsAr: [
          'بالقوة الجسدية الهائلة',
          'بالطيران في السماء',
          'بالعلم (علمه الأسماء كلها)',
          'بالثروة والمال'
        ],
        correctIndex: 2,
        rationaleAr: 'من أعظم مظاهر تكريم الله لآدم أنه علّمه أسماء كل شيء، وهو ما أظهر فضله على الملائكة.'
      },
      {
        id: 'q-isl4-2',
        questionAr: 'ما معنى اسم الله (القدوس)؟',
        optionsAr: [
          'الذي يرزق الكائنات',
          'المنزّه عن كل نقص وعيب',
          'الذي يخلق بلا مثال سابق',
          'واسع الرحمة'
        ],
        correctIndex: 1,
        rationaleAr: '(القدوس) هو الطاهر المنزّه عن أي نقص، وهو كامل في ذاته وصفاته.'
      }
    ]
  },

  // ── LECTURE 2: QURAN & TAJWEED (AN-NABA, AT-TEEN, ITH-HAR) ──
  {
    id: 'pisl-g4-2',
    order: 2,
    titleAr: 'المحاضرة 2: القرآن الكريم، سورتي النبأ والتين، وأحكام الإظهار الحلقي',
    titleEn: 'Lecture 2: Holy Quran, Surahs An-Naba & At-Teen, and Tajweed (Ith-har)',
    subtitleAr: 'تفسير سورتي التين والنبأ، ومعرفة أول أحكام النون الساكنة والتنوين (الإظهار الحلقي).',
    subtitleEn: 'Tafsir of Surahs An-Naba & At-Teen, and learning the Tajweed rule of Ith-har Halqi.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    assessment: { id: 'dummy-assess', titleAr: 'تقييم', titleEn: 'Assessment', passingScore: 80, questions: [] },

    gradeLevelNameAr: 'الصف الرابع الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 4 / Primary 4 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (القرآن الكريم)',
    unitTitleEn: 'Theme 1: Who Am I? — Holy Quran & Tafsir',
    lessonNumberAr: 'الدرس 2: سورة النبأ والتين وأحكام التجويد',
    lessonNumberEn: 'Lesson 2: Surahs An-Naba, At-Teen & Tajweed',

    warmupHookAr: 'القرآن الكريم كلام الله المليء بالأسرار والمواعظ! في سورة النبأ نتأمل دلائل قدرة الله في الكون والبعث، وفي سورة التين نرى كيف خلقنا في أحسن تقويم. ولكي نقرأ هذا الكلام الجميل بشكل صحيح، سنتعلم اليوم حكماً مهماً من أحكام التجويد!',
    warmupHookEn: 'The Quran contains profound wisdom! In Surah An-Naba we reflect on Resurrection, and in At-Teen on human perfection. To recite beautifully, we will also learn an important Tajweed rule today.',

    learningOutcomesAr: [
      'أن يفهم الطالب المعنى الإجمالي والمقاصد لسورتي التين والنبأ.',
      'أن يتعرف على دلائل قدرة الله المذكورة في سورة النبأ (الأرض، الجبال، الليل، النهار).',
      'أن يطبق حكم (الإظهار الحلقي) للنون الساكنة والتنوين عند تلاوته للقرآن.',
      'أن يعدد حروف الإظهار الحلقي الستة.'
    ],
    learningOutcomesEn: [
      'Understand the overall themes of Surah At-Teen and Surah An-Naba.',
      'Identify signs of Allah\'s power mentioned in Surah An-Naba.',
      'Apply the Tajweed rule of Ith-har (Clear Pronunciation) for Nun Sakinah and Tanween.',
      'List the six throat letters of Ith-har.'
    ],

    vocabulary: [
      {
        termAr: 'الإظهار الحلقي (Ith-har Halqi)',
        termEn: 'Ith-har Halqi (Clear Pronunciation)',
        definitionAr: 'نطق النون الساكنة أو التنوين واضحة بدون غنة زائدة إذا جاء بعدها أحد حروف الحلق.',
        definitionEn: 'Pronouncing the Nun Sakinah or Tanween clearly without extra nasalization when followed by a throat letter.'
      },
      {
        termAr: 'حروف الحلق (Throat Letters)',
        termEn: 'Throat Letters',
        definitionAr: 'الهمزة (ء)، الهاء (هـ)، العين (ع)، الحاء (ح)، الغين (غ)، الخاء (خ).',
        definitionEn: 'The six letters: Hamzah, Ha\', \'Ayn, Haa, Ghayn, Khaa.'
      }
    ],

    keyConceptsAr: [
      'سورة النبأ تثبت قدرة الله على البعث بذكر الأدلة الكونية (الأرض مهاداً، الجبال أوتاداً).',
      'سورة التين تؤكد أن الله خلق الإنسان في أجمل صورة (أحسن تقويم).',
      'الإظهار الحلقي يقع عند حروف (ء، هـ، ع، ح، غ، خ) وتُنطق النون بوضوح تام.'
    ],
    keyConceptsEn: [
      'Surah An-Naba proves Resurrection through cosmic signs.',
      'Surah At-Teen confirms humans were created in the best of forms.',
      'Ith-har occurs before throat letters, requiring clear pronunciation of Nun/Tanween.'
    ],

    summaryAr: 'تدارسنا دلائل القدرة الإلهية في سورة النبأ، وفضل الله على الإنسان في سورة التين. كما تعلمنا أول أحكام النون الساكنة وهو (الإظهار الحلقي) والذي يطبق عند النطق بحروف الحلق الستة.',
    summaryEn: 'We studied the divine signs in Surah An-Naba and human honor in At-Teen. We also learned the Ith-har Tajweed rule applied to the six throat letters.',

    mainContentAr: `
### 1. سورة النبأ (النبأ العظيم)
- **الموضوع الرئيسي:** إثبات البعث ويوم القيامة (النبأ العظيم الذي اختلف فيه المشركون).
- **دلائل قدرة الله:** 
  - جعل الأرض ممهدة للعيش (أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا).
  - خلق الجبال كالأوتاد لتثبيت الأرض (وَالْجِبَالَ أَوْتَادًا).
  - جعل الليل للراحة والنهار للسعي والعمل.

### 2. سورة التين
- أقسم الله بالتين والزيتون، وطور سينين (جبل سيناء حيث كلّم الله موسى)، والبلد الأمين (مكة المكرمة).
- **الفكرة المركزية:** (لَقَدْ خَلَقْنَا الْإِنسَانَ فِي أَحْسَنِ تَقْوِيمٍ)؛ الله خلق الإنسان في أعدل وأجمل صورة، ولكن من يكفر ويعصي يردّ إلى أسفل درجات الهوان.

### 3. أحكام التجويد: الإظهار الحلقي
- **تعريفه:** إخراج النون الساكنة أو التنوين من مخرجها بوضوح دون غنة زائدة.
- **حروفه (6 حروف تخرج من الحلق):** 
  - الهمزة (ء) والهاء (هـ).
  - العين (ع) والحاء (ح).
  - الغين (غ) والخاء (خ).
- **أمثلة:**
  - (مِنْ خَوْفٍ) ➔ نون ساكنة بعدها (خ) ➔ تُنطق النون واضحة.
  - (سَمِيعٌ عَلِيمٌ) ➔ تنوين بعده (ع) ➔ يُنطق التنوين واضحاً.

### 4. رسم توضيحي: حروف الإظهار
\`\`\`xml
<svg viewBox="0 0 760 250" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="760" height="250" fill="#0f172a" rx="16"/>
  <text x="380" y="40" fill="#38bdf8" font-size="20" font-weight="bold" text-anchor="middle">حروف الإظهار الحلقي (6 حروف)</text>
  
  <g transform="translate(180, 80)">
    <!-- Row 1 -->
    <circle cx="50" cy="30" r="25" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
    <text x="50" y="38" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">ء</text>
    
    <circle cx="150" cy="30" r="25" fill="#1e293b" stroke="#34d399" stroke-width="2"/>
    <text x="150" y="38" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">هـ</text>
    
    <circle cx="250" cy="30" r="25" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="250" y="38" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">ع</text>
    
    <circle cx="350" cy="30" r="25" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="350" y="38" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">ح</text>
    
    <!-- Row 2 -->
    <circle cx="150" cy="110" r="25" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
    <text x="150" y="118" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">غ</text>
    
    <circle cx="250" cy="110" r="25" fill="#1e293b" stroke="#fbbf24" stroke-width="2"/>
    <text x="250" y="118" fill="#f8fafc" font-size="22" font-weight="bold" text-anchor="middle">خ</text>
  </g>
  <text x="380" y="230" fill="#cbd5e1" font-size="14" text-anchor="middle">عندما تأتي هذه الحروف بعد النون الساكنة أو التنوين تُنطق واضحة بدون غنة زائدة</text>
</svg>
\`\`\`
`,

    formativeAssessment: [
      {
        id: 'q-isl4-3',
        questionAr: 'ما الحكم التجويدي في قوله تعالى (مِنْ خَوْفٍ)؟',
        optionsAr: [
          'إدغام',
          'إخفاء',
          'إظهار حلقي',
          'إقلاب'
        ],
        correctIndex: 2,
        rationaleAr: 'النون ساكنة وجاء بعدها حرف الخاء، والخاء من حروف الحلق الستة، فالحكم إظهار حلقي.'
      }
    ]
  },

  // ── LECTURE 3: SEERAH (KAABA, HIRA, DAWAH) ──
  {
    id: 'pisl-g4-3',
    order: 3,
    titleAr: 'المحاضرة 3: السيرة النبوية (بناء الكعبة، غار حراء، والدعوة الإسلامية)',
    titleEn: 'Lecture 3: Prophetic Biography (Kaaba, Hira & Dawah)',
    subtitleAr: 'مشاركة النبي ﷺ في بناء الكعبة، نزول الوحي في غار حراء، ومراحل الدعوة السرية والجهرية.',
    subtitleEn: 'The Prophet\'s role in building the Kaaba, the revelation at Hira, and the stages of Dawah.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    assessment: { id: 'dummy-assess', titleAr: 'تقييم', titleEn: 'Assessment', passingScore: 80, questions: [] },

    gradeLevelNameAr: 'الصف الرابع الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 4 / Primary 4 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (السيرة والقصص)',
    unitTitleEn: 'Theme 1: Who Am I? — Seerah & Stories',
    lessonNumberAr: 'الدرس 3: بناء الكعبة وغار حراء وبداية الدعوة',
    lessonNumberEn: 'Lesson 3: Kaaba, Hira & The Call to Islam',

    warmupHookAr: 'كيف حلّ النبي ﷺ نزاعاً كبيراً بين قبائل قريش قبل البعثة؟ وماذا حدث في ليلة مظلمة داخل غار حراء غيّرت مجرى التاريخ البشري؟ دعونا نسافر عبر الزمن لنعيش هذه اللحظات العظيمة!',
    warmupHookEn: 'How did the Prophet (PBUH) resolve a major conflict among Quraysh? And what happened in the dark cave of Hira that changed human history? Let\'s travel back in time!',

    learningOutcomesAr: [
      'أن يصف الطالب حكمة النبي ﷺ في حل النزاع عند وضع الحجر الأسود.',
      'أن يشرح قصة نزول الوحي على النبي ﷺ في غار حراء.',
      'أن يميز بين مرحلتي الدعوة السرية والدعوة الجهرية في مكة.'
    ],
    learningOutcomesEn: [
      'Describe the Prophet\'s wisdom in resolving the dispute over the Black Stone.',
      'Explain the story of the first revelation in the Cave of Hira.',
      'Differentiate between the secret and public phases of the call to Islam in Mecca.'
    ],

    vocabulary: [
      {
        termAr: 'غار حراء (Cave of Hira)',
        termEn: 'Cave of Hira',
        definitionAr: 'الغار الذي كان النبي ﷺ يتعبد فيه وفيه نزل عليه الوحي لأول مرة.',
        definitionEn: 'The cave where the Prophet (PBUH) used to meditate and received the first revelation.'
      },
      {
        termAr: 'الدعوة السرية (Secret Dawah)',
        termEn: 'Secret Dawah',
        definitionAr: 'المرحلة الأولى من الدعوة واستمرت 3 سنوات، وكان النبي يدعو فيها المقربين منه فقط.',
        definitionEn: 'The first 3 years of the Prophet\'s mission, calling close family and friends privately.'
      }
    ],

    keyConceptsAr: [
      'حكمة النبي ﷺ منعَت حرباً بين القبائل حين أشار بوضع الحجر الأسود في ثوب ورفعه معاً.',
      'أول ما نزل من القرآن (اقرأ) في غار حراء، وكان عمر النبي ﷺ 40 عاماً.',
      'بدأت الدعوة سرية لثلاث سنوات حمايةً للمسلمين الأوائل، ثم جهر بها النبي ﷺ على جبل الصفا.'
    ],
    keyConceptsEn: [
      'The Prophet\'s wisdom prevented war when placing the Black Stone.',
      'The first word revealed was "Iqra" (Read) when he was 40 years old.',
      'The call was secret for 3 years, then became public at Mount Safa.'
    ],

    summaryAr: 'درسنا حكمة النبي ﷺ قبل البعثة في بناء الكعبة، ثم لحظة الاصطفاء ونزول الوحي في غار حراء، ومراحل دعوته لقومه بدءاً بالسرية وانتهاءً بالجهر والصبر على الأذى.',
    summaryEn: 'We learned about the Prophet\'s wisdom before prophethood, the momentous revelation at Hira, and the strategic phases of his early mission in Mecca.',

    mainContentAr: `
### 1. المشاركة في بناء الكعبة
- عندما كان عمر النبي ﷺ 35 عاماً، تهدمت الكعبة بسبب سيل، وأرادت قريش تجديد بنائها.
- اختلفوا من ينال شرف وضع (الحجر الأسود) وكادوا يقتتلون، فاتفقوا على تحكيم أول من يدخل. وكان الداخل هو محمد ﷺ فقالوا: "رضينا بالأمين".
- **حكمته:** أمر بثوب، فوضع الحجر فيه، وأمر رئيس كل قبيلة أن يمسك بطرف، فرفعوه جميعاً، ثم وضعه هو بيده الشريفة، فحقن الدماء وأرضى الجميع.

### 2. غار حراء ونزول الوحي
- كان النبي ﷺ يختلي بنفسه في (غار حراء) بجبل النور، يتفكر في خلق الكون.
- في شهر رمضان، وهو في سن الأربعين، جاءه جبريل عليه السلام وقال له: "اقرأ".
- أول ما نزل من القرآن: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ﴾.

### 3. مراحل الدعوة الإسلامية في مكة
- **الدعوة السرية (3 سنوات):**
  - اقتصرت الدعوة على أهل بيته وأصدقائه المقربين حذراً من قريش.
  - من أوائل من أسلم: خديجة بنت خويلد (زوجته)، أبو بكر الصديق (صديقه)، وعلي بن أبي طالب (ابن عمه).
- **الدعوة الجهرية:**
  - نزل أمر الله: ﴿فَاصْدَعْ بِمَا تُؤْمَرُ﴾، فصعد النبي ﷺ جبل الصفا ودعا قريشاً كلها للإسلام علانية، فبدأ الأذى والابتلاء.
`,
    formativeAssessment: [
      {
        id: 'q-isl4-4',
        questionAr: 'كم استمرت مرحلة الدعوة السرية في مكة المكرمة؟',
        optionsAr: [
          'سنة واحدة',
          '3 سنوات',
          '5 سنوات',
          '10 سنوات'
        ],
        correctIndex: 1,
        rationaleAr: 'استمرت الدعوة السرية مدة ثلاث سنوات، دعا فيها النبي ﷺ المقربين والموثوقين لتأسيس النواة الأولى للإسلام.'
      }
    ]
  },

  // ── LECTURE 4: WORSHIP & ETHICS (TAHARAH, WUDU, PRAYER, MANNERS) ──
  {
    id: 'pisl-g4-4',
    order: 4,
    titleAr: 'المحاضرة 4: العبادات والأخلاق (الطهارة، الوضوء، الصلاة، والشكر)',
    titleEn: 'Lecture 4: Worship & Ethics (Purity, Wudu, Prayer & Gratitude)',
    subtitleAr: 'أحكام الطهارة وأنواع المياه، فرائض وسنن الوضوء والصلاة، وأخلاق الشكر والرفق بالحيوان.',
    subtitleEn: 'Rules of purity, water types, Faraid and Sunan of Wudu and Prayer, and values of gratitude and animal care.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    assessment: { id: 'dummy-assess', titleAr: 'تقييم', titleEn: 'Assessment', passingScore: 80, questions: [] },

    gradeLevelNameAr: 'الصف الرابع الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 4 / Primary 4 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الثاني: العالم من حولي (العبادات والأخلاق)',
    unitTitleEn: 'Theme 2: The World Around Me — Worship & Morals',
    lessonNumberAr: 'الدرس 4: أحكام الطهارة والصلاة والقيم الإسلامية',
    lessonNumberEn: 'Lesson 4: Rules of Purity, Prayer & Islamic Values',

    warmupHookAr: 'الوضوء ليس مجرد نظافة، بل هو نور يمحو الخطايا! والصلاة ليست حركات، بل لقاء عظيم برب العالمين. كيف نتوضأ ونصلي بشكل صحيح؟ وكيف نعكس أخلاق المسلم في التعامل مع الناس والحيوانات؟',
    warmupHookEn: 'Wudu is light that erases sins, and Prayer is a meeting with the Lord of the Worlds! How do we perfect them? And how should a Muslim interact with animals and the environment?',

    learningOutcomesAr: [
      'أن يميز الطالب بين الماء الطهور والماء النجس.',
      'أن يفرق بين فرائض الوضوء (التي لا يصح بدونها) وسننه.',
      'أن يعدد شروط صحة الصلاة وأركانها.',
      'أن يطبق أخلاق الشكر والامتنان، وأدب الحوار، والرفق بالحيوان في حياته.'
    ],
    learningOutcomesEn: [
      'Distinguish between pure (Tahur) and impure (Najis) water.',
      'Differentiate between the obligatory acts (Faraid) and Sunnahs of Wudu.',
      'List the conditions and pillars of valid prayers.',
      'Apply gratitude, dialogue etiquette, and kindness to animals in daily life.'
    ],

    vocabulary: [
      {
        termAr: 'الماء الطهور (Pure Water)',
        termEn: 'Tahur Water',
        definitionAr: 'الماء الباقي على أصل خلقته ولم يتغير لونه أو طعمه أو ريحه بنجاسة، ويصح التطهر به (كماء المطر والبحر).',
        definitionEn: 'Water that remains in its natural pure state and is valid for purification.'
      },
      {
        termAr: 'الفرائض (Obligatory Acts)',
        termEn: 'Faraid (Obligations)',
        definitionAr: 'الأفعال الأساسية التي لا يصح العمل (كالوضوء أو الصلاة) إلا بها.',
        definitionEn: 'The essential acts without which an act of worship is invalid.'
      }
    ],

    keyConceptsAr: [
      'الطهارة شرط أساسي لصحة الصلاة، وتكون بالماء الطهور.',
      'للصلاة شروط (كستر العورة واستقبال القبلة) وأركان (كالركوع والسجود).',
      'الإسلام دين الرحمة، أمرنا بالرفق بالحيوان والشكر للمنعم وحسن الحوار مع الآخرين.'
    ],
    keyConceptsEn: [
      'Purity is a condition for prayer, achieved using pure water.',
      'Prayer has conditions (facing Qiblah, covering awrah) and pillars (bowing, prostrating).',
      'Islam commands kindness to animals, gratitude, and respectful dialogue.'
    ],

    summaryAr: 'تعلمنا أحكام الطهارة وأنواع المياه السليمة للوضوء وفرائض الصلاة لتكون عباداتنا صحيحة. كما تدارسنا أهمية الشكر، والرفق بالحيوان، والمسؤولية كقيم أخلاقية تجعل المجتمع أفضل.',
    summaryEn: 'We learned the rules of purity, Wudu, and Prayer to perfect our worship. We also studied gratitude, animal welfare, and responsibility as core Islamic values.',

    mainContentAr: `
### 1. الطهارة وأنواع المياه
- **الماء الطهور:** هو الماء الباقي على أصل خلقته ولم تتغير صفاته (اللون، الطعم، الرائحة) بنجاسة. أمثلة: ماء المطر، ماء العيون، ماء البحر، ماء النهر. يُستخدم في الوضوء والغسل.
- **الماء النجس:** هو الماء الذي وقعت فيه نجاسة فغيرت لونه أو طعمه أو ريحه، ولا يصح التطهر به.

### 2. أحكام الوضوء
- **فرائض الوضوء (لا يصح إلا بها):** 
  1. النية.
  2. غسل الوجه (ومنه المضمضة والاستنشاق).
  3. غسل اليدين إلى المرفقين.
  4. مسح الرأس.
  5. غسل الرجلين إلى الكعبين.
  6. الترتيب والموالاة.
- **سنن الوضوء:** غسل الكفين ثلاثاً في البداية، التسمية، السواك، التخليل بين الأصابع.
- **نواقض الوضوء:** خروج شيء من السبيلين، النوم العميق، زوال العقل.

### 3. الصلاة وأحكامها
- **شروط الصلاة (قبل الصلاة):** دخول الوقت، الطهارة، ستر العورة، استقبال القبلة.
- **أركان الصلاة (أثناء الصلاة):** النية، تكبيرة الإحرام، قراءة الفاتحة، الركوع، الرفع منه، السجود على الأعضاء السبعة، الجلوس بين السجدتين، التشهد الأخير والتسليم.
- **صلاة الجماعة:** فضلها عظيم وتفوق صلاة الفرد بـ 27 درجة.

### 4. القيم والأخلاق (العالم من حولي)
- **الشكر والامتنان:** شكر الله على نعمه بالقلب واللسان (الحمد لله) والعمل (استخدام النعم في طاعته). وشكر الناس لقول النبي ﷺ "من لا يشكر الناس لا يشكر الله".
- **أدب الحوار والاختلاف:** الاستماع للآخرين باحترام، عدم مقاطعة المتحدث، وتقبل الاختلاف في الرأي برحابة صدر.
- **الرفق بالحيوان والبيئة:** الإسلام حرّم تعذيب الحيوان أو تحميله ما لا يطيق. ونهى عن الإسراف في الماء وتلويث البيئة.
`,
    formativeAssessment: [
      {
        id: 'q-isl4-5',
        questionAr: 'من شروط صحة الصلاة التي يجب توفرها (قبل) البدء في الصلاة:',
        optionsAr: [
          'الركوع',
          'قراءة سورة الفاتحة',
          'استقبال القبلة وستر العورة',
          'التشهد الأخير'
        ],
        correctIndex: 2,
        rationaleAr: 'الركوع والفاتحة والتشهد من أركان الصلاة التي تُفعل بداخلها، أما استقبال القبلة فهو شرط يجب توفره قبل البدء.'
      },
      {
        id: 'q-isl4-6',
        questionAr: 'أي من المياه التالية يُعتبر (ماءً طهوراً) يصح الوضوء به؟',
        optionsAr: [
          'ماء البحر',
          'ماء اختلط به عصير وتغير لونه تماماً',
          'ماء وقعت فيه نجاسة وغيرت رائحته',
          'شاي'
        ],
        correctIndex: 0,
        rationaleAr: 'ماء البحر ماء طهور باقي على خلقته، قال عنه النبي ﷺ: "هو الطهور ماؤه الحل ميتته".'
      }
    ]
  }
];
