import type { Lecture } from '../types';

// PRIMARY ISLAMIC STUDIES — GRADE 5 (التربية الدينية الإسلامية الصف الخامس الابتدائي - نظام التعليم 2.0 المعتمد)
// ============================================================================
// Based on the official Egyptian Ministry of Education (Edu 2.0) guidelines for Grade 5 Islamic Studies.
// Covers: Theme 1 (Aqeedah, Seerah, Quran & Tajweed) and Theme 2 (Worship, Purity, Morals).

export const PRIMARY_ISLAMIC_G5_LECTURES: Lecture[] = [
  // ── LECTURE 1: ISLAMIC CREED, PROPHETS, ALLAH'S NAMES ──
  {
    id: 'pisl-g5-1',
    order: 1,
    titleAr: 'المحاضرة 1: الإيمان بالرسل والرسالات السماوية، وأسماء الله الحسنى',
    titleEn: 'Lecture 1: Faith in Prophets & Divine Messages, and Allah\'s Beautiful Names',
    subtitleAr: 'معنى الإيمان بالرسل والأنبياء، شكر النعم، وأسماء الله المقررة (الرؤوف، الملك، القدوس، العليم).',
    subtitleEn: 'Faith in Messengers, gratitude, and Allah\'s names: Ar-Ra\'uf, Al-Malik, Al-Quddus, Al-Alim.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (العقيدة)',
    unitTitleEn: 'Theme 1: Who Am I? — Islamic Creed (Aqeedah)',
    lessonNumberAr: 'الدرس 1: الإيمان بالرسل وشكر النعم',
    lessonNumberEn: 'Lesson 1: Faith in Prophets & Gratitude',

    warmupHookAr: 'تخيل أنك تسير في طريق مجهول وفجأة تجد من يرشدك إلى بر الأمان. هكذا كان دور الأنبياء والرسل في تاريخ البشرية! لقد أرسلهم الله لهدايتنا ولنتعرف من خلالهم على أسمائه الحسنى وصفاته العظيمة.',
    warmupHookEn: 'Imagine walking in an unknown path and finding someone to guide you safely. This is the role of Prophets in human history! Allah sent them to guide us and teach us His beautiful names.',

    learningOutcomesAr: [
      'أن يشرح الطالب معنى الإيمان بالرسل وأهميته كأحد أركان الإيمان.',
      'أن يذكر أسماء بعض الأنبياء والرسل والكتب التي أُنزلت عليهم.',
      'أن يوضح مفهوم شكر النعم وارتباطه بالعبادة.',
      'أن يتعرف على معاني أسماء الله: الرؤوف، الملك، القدوس، العليم.'
    ],
    learningOutcomesEn: [
      'Explain the meaning of faith in Messengers as a pillar of Iman.',
      'Name several Prophets and the Divine Books revealed to them.',
      'Understand gratitude for blessings as an act of worship.',
      'Know the meanings of Allah\'s Names: Ar-Ra\'uf, Al-Malik, Al-Quddus, Al-Alim.'
    ],

    vocabulary: [
      {
        termAr: 'الأنبياء والرسل (Prophets & Messengers)',
        termEn: 'Prophets & Messengers',
        definitionAr: 'بشر اصطفاهم الله لتبليغ رسالته وهداية الناس للحق وعبادة الله وحده.',
        definitionEn: 'Humans chosen by Allah to convey His message and guide people to worship Him alone.'
      },
      {
        termAr: 'الرؤوف (Ar-Ra\'uf)',
        termEn: 'The Compassionate',
        definitionAr: 'شديد الرحمة والعطف بعباده، والذي يدفع عنهم السوء والأذى.',
        definitionEn: 'The Most Compassionate, who extends mercy and wards off harm from His servants.'
      }
    ],

    keyConceptsAr: [
      'الإيمان بالرسل ركن أساسي، ولا يكتمل إيمان المسلم إلا بالتصديق بجميع الأنبياء دون تفريق.',
      'أرسل الله رسله بالمعجزات لتأييدهم، وأنزل معهم الكتب السماوية (كالقرآن، التوراة، الإنجيل، الزبور).',
      'شكر الله على نعمه يكون بالقلب واللسان والعمل واستخدام هذه النعم في طاعته.'
    ],
    keyConceptsEn: [
      'Belief in all Messengers is a core pillar of Faith.',
      'Prophets were supported with miracles and Divine Books (Quran, Torah, Injeel, Zabur).',
      'Gratitude is shown through the heart, tongue, and righteous actions.'
    ],

    summaryAr: 'تدارسنا في هذا الدرس ركناً عظيماً من أركان الإيمان وهو الإيمان بالرسل والرسالات السماوية. كما تعلمنا أن الشكر عبادة، وتعرفنا على أسمائه الحسنى التي تقوي صلتنا بالله.',
    summaryEn: 'We studied the belief in Messengers and Divine Messages. We also learned that gratitude is worship, and explored Allah\'s Beautiful Names.',

    mainContentAr: `
### 1. الإيمان بالرسل والرسالات السماوية
- **تعريف الإيمان بالرسل:** التصديق الجازم بأن الله تعالى بعث في كل أمة رسولاً يدعوهم لعبادة الله وحده وترك عبادة ما سواه. وهو الركن الرابع من أركان الإيمان.
- **خصائص الرسل:** هم بشر يوحى إليهم، عصمهم الله من الخطأ في التبليغ، وأيدهم بالمعجزات.
- **أمثلة للكتب السماوية:** القرآن الكريم (أنزل على محمد ﷺ)، التوراة (على موسى)، الإنجيل (على عيسى)، الزبور (على داود).

### 2. شكر النعم (معنى العبادة والامتنان)
- **أهمية الشكر:** النعم تدوم وتزيد بالشكر: ﴿لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ﴾.
- **كيف نشكر الله؟**
  1. بالقلب: الاعتراف بأن النعمة من الله وحده.
  2. باللسان: كثرة قول "الحمد لله".
  3. بالجوارح: استخدام النعمة في طاعة الله (كاستخدام الصحة في مساعدة الآخرين).

### 3. أسماء الله الحسنى المقررة
- **الرَّؤُوف:** المبالغ في الرحمة والرأفة، وهو أرق وألطف من الرحمة العامة.
- **المَلِك:** المالك لكل شيء في الكون المتصرف فيه بلا شريك أو منازع.
- **القُدُّوس:** المنزه عن كل عيب أو نقص.
- **العَلِيم:** الذي أحاط علمه بكل شيء، السر والعلن، والماضي والحاضر والمستقبل.
`,
    assessment: {
      id: 'assess-isl5-1',
      titleAr: 'تقييم المحاضرة 1',
      titleEn: 'Assessment 1',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl5-1',
          textAr: 'ما هو الكتاب السماوي الذي أُنزل على نبي الله داود عليه السلام؟',
          textEn: 'Which Divine Book was revealed to Prophet Dawud?',
          optionsAr: ['التوراة', 'الإنجيل', 'القرآن الكريم', 'الزبور'],
          optionsEn: ['Torah', 'Injeel', 'Quran', 'Zabur'],
          correctIndex: 3,
          conceptTestedAr: 'الإيمان بالرسل',
          conceptTestedEn: 'Faith in Messengers',
          difficulty: 'easy',
          explanationAr: 'أنزل الله الزبور على نبيه داود عليه السلام.',
          explanationEn: 'Allah revealed the Zabur to Prophet Dawud (David).'
        }
      ]
    }
  },

  // ── LECTURE 2: QURAN & TAJWEED (AL-INFITAR & MEEM SAKINAH) ──
  {
    id: 'pisl-g5-2',
    order: 2,
    titleAr: 'المحاضرة 2: سورة الانفطار، وأحكام التجويد (الميم الساكنة)',
    titleEn: 'Lecture 2: Surah Al-Infitar & Tajweed (Rules of Meem Sakinah)',
    subtitleAr: 'تفسير سورة الانفطار ومشاهد القيامة، وتطبيق أحكام الميم الساكنة (الإخفاء الشفوي، الإدغام الشفوي، الإظهار الشفوي).',
    subtitleEn: 'Tafsir of Surah Al-Infitar and the rules of Meem Sakinah.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (القرآن الكريم)',
    unitTitleEn: 'Theme 1: Who Am I? — Holy Quran & Tafsir',
    lessonNumberAr: 'الدرس 2: سورة الانفطار وأحكام التجويد',
    lessonNumberEn: 'Lesson 2: Surah Al-Infitar & Tajweed',

    warmupHookAr: 'تخيل أن السماء انشقت والكواكب تناثرت! هكذا يبدأ المشهد المهيب في سورة الانفطار. وفي ظل هذه المشاهد العظيمة، سنتعلم كيف نقرأ كلام الله بإتقان من خلال أحكام الميم الساكنة.',
    warmupHookEn: 'Imagine the sky splitting and stars scattering! This majestic scene opens Surah Al-Infitar. Let\'s explore its meaning and perfect our recitation with the rules of Meem Sakinah.',

    learningOutcomesAr: [
      'أن يتدبر الطالب معاني سورة الانفطار وما فيها من مشاهد يوم القيامة.',
      'أن يدرك رعاية الله للإنسان وتذكيره بنعمه.',
      'أن يطبق الطالب أحكام الميم الساكنة في تلاوته (الإخفاء الشفوي، الإدغام الشفوي، الإظهار الشفوي).'
    ],
    learningOutcomesEn: [
      'Reflect on the meanings of Surah Al-Infitar and the scenes of the Day of Judgment.',
      'Recognize Allah\'s care for humanity and His blessings.',
      'Apply the rules of Meem Sakinah correctly during Quran recitation.'
    ],

    vocabulary: [
      {
        termAr: 'الميم الساكنة (Meem Sakinah)',
        termEn: 'Meem Sakinah',
        definitionAr: 'هي حرف الميم الخالي من الحركات الثلاث (الفتحة، الضمة، الكسرة).',
        definitionEn: 'The letter Meem with no vowel attached (a static Meem).'
      }
    ],

    keyConceptsAr: [
      'سورة الانفطار تصف أهوال يوم القيامة وتذكر الإنسان بخالقه الذي سواه وعدله.',
      'تسجل الملائكة الكرام الكاتبون أفعالنا، مما يوجب علينا مراقبة الله.',
      'للميم الساكنة ثلاثة أحكام: الإخفاء الشفوي (عند الباء)، الإدغام الشفوي (عند الميم)، والإظهار الشفوي (باقي الحروف).'
    ],
    keyConceptsEn: [
      'Surah Al-Infitar describes Judgment Day and reminds humans of their Creator.',
      'Noble recording angels write down our deeds.',
      'Meem Sakinah has three rules: Ikhfa Shafawi (with Baa), Idgham Shafawi (with Meem), and Izhar Shafawi (other letters).'
    ],

    summaryAr: 'درسنا التفسير العميق لسورة الانفطار الذي يوقظ القلوب، وتعرفنا على أحكام الميم الساكنة الثلاثة لتلاوة القرآن بطريقة صحيحة ومجودة.',
    summaryEn: 'We studied the profound Tafsir of Surah Al-Infitar and learned the three Tajweed rules for Meem Sakinah.',

    mainContentAr: `
### 1. سورة الانفطار
- **أهوال يوم القيامة:** تبدأ السورة بمشاهد التغير الكوني: ﴿إِذَا السَّمَاءُ انفَطَرَتْ * وَإِذَا الْكَوَاكِبُ انتَثَرَتْ﴾ دلالة على انتهاء الدنيا وبداية الحساب.
- **عتاب للإنسان:** ﴿يَا أَيُّهَا الْإِنسَانُ مَا غَرَّكَ بِرَبِّكَ الْكَرِيمِ﴾ كيف تعصي الله وقد خلقك في أحسن صورة وعدلك ورعاك؟
- **الملائكة الكاتبون:** ﴿وَإِنَّ عَلَيْكُمْ لَحَافِظِينَ * كِرَامًا كَاتِبِينَ﴾ ملائكة يسجلون أقوال وأفعال البشر.
- **الجزاء:** الأبرار في نعيم الجنة، والفجار في جحيم النار.

### 2. أحكام الميم الساكنة
الميم الساكنة هي ميم خالية من الحركة. لها ثلاثة أحكام:
1. **الإخفاء الشفوي:**
   - **حرفه:** الباء (ب) فقط.
   - **طريقته:** إخفاء الميم الساكنة مع بقاء الغنة إذا جاء بعدها حرف (ب).
   - **مثال:** ﴿تَرْمِيهِم بِحِجَارَةٍ﴾، ﴿وَهُم بِالآخِرَةِ﴾.
2. **الإدغام الشفوي (إدغام متماثلين صغير):**
   - **حرفه:** الميم (م) فقط.
   - **طريقته:** إدخال الميم الساكنة في الميم المتحركة لتصبحا ميماً واحدة مشددة مع الغنة.
   - **مثال:** ﴿أَم مَّن﴾، ﴿لَهُم مَّثَلاً﴾.
3. **الإظهار الشفوي:**
   - **حروفه:** جميع باقي الحروف (26 حرفاً).
   - **طريقته:** نطق الميم الساكنة ظاهرة واضحة بدون غنة زائدة، ويكون أشد إظهاراً عند حرفي (الواو والفاء).
   - **مثال:** ﴿أَلَمْ تَرَ﴾، ﴿هُمْ فِيهَا﴾.
`,
    assessment: {
      id: 'assess-isl5-2',
      titleAr: 'تقييم المحاضرة 2',
      titleEn: 'Assessment 2',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl5-2',
          textAr: 'ما حكم التجويد في قوله تعالى (تَرْمِيهِم بِحِجَارَةٍ)؟',
          textEn: 'What is the Tajweed rule in the verse (Tarmeehim bi Hijarah)?',
          optionsAr: ['إظهار شفوي', 'إدغام شفوي', 'إخفاء شفوي', 'إقلاب'],
          optionsEn: ['Izhar Shafawi', 'Idgham Shafawi', 'Ikhfa Shafawi', 'Iqlab'],
          correctIndex: 2,
          conceptTestedAr: 'أحكام الميم الساكنة',
          conceptTestedEn: 'Meem Sakinah Rules',
          difficulty: 'easy',
          explanationAr: 'جاءت الميم الساكنة وبعدها حرف (الباء)، وهذا هو حكم الإخفاء الشفوي.',
          explanationEn: 'The Meem Sakinah is followed by Baa, which is Ikhfa Shafawi.'
        }
      ]
    }
  },

  // ── LECTURE 3: SEERAH (HIJRAH TO MADINAH & PROPHET MUSA) ──
  {
    id: 'pisl-g5-3',
    order: 3,
    titleAr: 'المحاضرة 3: السيرة والقصص (الهجرة النبوية وقصة موسى عليه السلام)',
    titleEn: 'Lecture 3: Seerah & Stories (The Hijrah & Story of Musa)',
    subtitleAr: 'الهجرة النبوية إلى المدينة، دور الصحابة في التخطيط، وقصة نبي الله موسى مع فرعون.',
    subtitleEn: 'The Hijrah to Madinah, the role of companions, and the story of Prophet Musa with Pharaoh.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (السيرة والقصص)',
    unitTitleEn: 'Theme 1: Who Am I? — Seerah & Stories',
    lessonNumberAr: 'الدرس 3: الهجرة النبوية وقصة موسى',
    lessonNumberEn: 'Lesson 3: The Hijrah & Prophet Musa',

    warmupHookAr: 'كيف استطاع النبي ﷺ النجاة من حصار قريش ليلاً والهجرة لمدينة جديدة؟ التخطيط الدقيق والتوكل على الله كانا سر النجاح. لنتعلم من هذه الرحلة ومن قصة صمود سيدنا موسى عليه السلام أمام أعتى ملوك الأرض.',
    warmupHookEn: 'How did the Prophet (PBUH) escape Quraysh\'s siege and migrate? Perfect planning and trust in Allah were key. Let\'s learn from the Hijrah and the steadfastness of Prophet Musa.',

    learningOutcomesAr: [
      'أن يحلل الطالب أسباب الهجرة النبوية الشريفة وأهمية التخطيط فيها.',
      'أن يوضح دور الصحابة (أبو بكر، علي، أسماء بنت أبي بكر، عبد الله بن أريقط) في نجاح الهجرة.',
      'أن يستنبط الدروس والعبر من قصة موسى عليه السلام ومواجهته لفرعون وسحرته.'
    ],
    learningOutcomesEn: [
      'Analyze the reasons for the Hijrah and the importance of strategic planning.',
      'Explain the roles of key companions during the Hijrah.',
      'Derive moral lessons from the story of Prophet Musa and Pharaoh.'
    ],

    vocabulary: [
      {
        termAr: 'الهجرة النبوية (The Hijrah)',
        termEn: 'The Hijrah',
        definitionAr: 'انتقال النبي ﷺ والمسلمين من مكة المكرمة إلى يثرب (المدينة المنورة) هرباً من أذى قريش ولتأسيس مجتمع إسلامي.',
        definitionEn: 'The migration of the Prophet and Muslims from Mecca to Madinah.'
      }
    ],

    keyConceptsAr: [
      'الهجرة لم تكن هروباً، بل كانت انتقالاً استراتيجياً وتخطيطاً محكماً لحماية الدعوة.',
      'دور الشباب والمرأة كان حاسماً في الهجرة (كفدائية علي، وإمداد أسماء بالطعام).',
      'قصة موسى عليه السلام تؤكد أن النصر دائماً حليف الحق مهما بلغت قوة الباطل.'
    ],
    keyConceptsEn: [
      'Hijrah was a strategic transition built on meticulous planning.',
      'The crucial roles of youth and women (Ali and Asma) in the Hijrah.',
      'Prophet Musa\'s story proves that truth always triumphs over falsehood.'
    ],

    summaryAr: 'استعرضنا الهجرة النبوية وخطتها المحكمة التي مزجت بين الأخذ بالأسباب والتوكل المطلق على الله. كما تعلمنا الشجاعة والثبات من قصة سيدنا موسى عليه السلام.',
    summaryEn: 'We reviewed the Hijrah\'s brilliant plan, blending strategic action with absolute trust in Allah. We also learned courage from the story of Musa.',

    mainContentAr: `
### 1. الهجرة النبوية إلى المدينة المنورة
- **الأسباب:** اشتداد الأذى على المسلمين في مكة، والتآمر على قتل النبي ﷺ في دار الندوة.
- **خطة الهجرة (الأخذ بالأسباب):**
  - **علي بن أبي طالب:** نام في فراش النبي ﷺ لتمويه قريش ورد الأمانات لأهلها.
  - **أبو بكر الصديق:** الصاحب والرفيق في الرحلة ومجهّز الراحلتين.
  - **غار ثور:** المكوث فيه 3 أيام حتى يهدأ الطلب والبحث.
  - **أسماء بنت أبي بكر:** كانت تحضر لهم الطعام في الغار، وسميت بـ(ذات النطاقين).
  - **عبد الله بن أريقط:** الدليل الخبير بطرق الصحراء (رغم أنه لم يكن مسلماً آنذاك، مما يدل على استعانة النبي بالكفاءات).
- **التوكل على الله:** حين وصل المشركون للغار، قال أبو بكر: "لو أن أحدهم نظر تحت قدميه لأبصرنا"، فرد النبي ﷺ بيقين: "يا أبا بكر، ما ظنك باثنين الله ثالثهما!".

### 2. قصة موسى عليه السلام مع فرعون
- أرسل الله موسى عليه السلام إلى فرعون الطاغية الذي ادعى الألوهية.
- **مواجهة السحرة:** جمع فرعون أمهر السحرة وألقوا حبالهم وعصيهم فخُيل للناس أنها تسعى، فألقى موسى عصاه فإذا هي ثعبان حقيقي يبتلع ما صنعوا.
- **إيمان السحرة:** أدرك السحرة أن ما جاء به موسى ليس سحراً بل معجزة إلهية، فخروا سجداً وآمنوا بالله رب العالمين رغم تهديد فرعون لهم بالموت.
`,
    assessment: {
      id: 'assess-isl5-3',
      titleAr: 'تقييم المحاضرة 3',
      titleEn: 'Assessment 3',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl5-3',
          textAr: 'من هو الدليل الذي استأجره النبي ﷺ ليرشده في طريق الهجرة إلى المدينة؟',
          textEn: 'Who was the guide hired by the Prophet (PBUH) for the Hijrah?',
          optionsAr: ['أبو بكر الصديق', 'علي بن أبي طالب', 'عبد الله بن أريقط', 'عامر بن فهيرة'],
          optionsEn: ['Abu Bakr', 'Ali bin Abi Talib', 'Abdullah bin Urayqit', 'Amir bin Fuhayrah'],
          correctIndex: 2,
          conceptTestedAr: 'الهجرة النبوية',
          conceptTestedEn: 'The Hijrah',
          difficulty: 'medium',
          explanationAr: 'استعان النبي ﷺ بعبد الله بن أريقط لأنه كان دليلاً خبيراً بطرق الصحراء غير المألوفة.',
          explanationEn: 'The Prophet (PBUH) hired Abdullah bin Urayqit as he was an expert guide in the desert.'
        }
      ]
    }
  },

  // ── LECTURE 4: WORSHIP & ETHICS (PRAYER, AZAN, MORALS) ──
  {
    id: 'pisl-g5-4',
    order: 4,
    titleAr: 'المحاضرة 4: العبادات والأخلاق (الصلاة، الأذان، وقيم التسامح)',
    titleEn: 'Lecture 4: Worship & Ethics (Prayer, Azan & Tolerance)',
    subtitleAr: 'مكانة الصلاة وشروطها، أحكام الأذان والإقامة، صلاة الجمعة والعيدين، وقيم التسامح واحترام الآخرين.',
    subtitleEn: 'Prayer conditions, Azan rules, Friday and Eid prayers, and values of tolerance.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الثاني: العالم من حولي (العبادات والأخلاق)',
    unitTitleEn: 'Theme 2: The World Around Me — Worship & Morals',
    lessonNumberAr: 'الدرس 4: أحكام الصلاة والأذان والأخلاق',
    lessonNumberEn: 'Lesson 4: Rules of Prayer, Azan & Morals',

    warmupHookAr: 'عندما نصلّي نقف بين يدي الله، فكيف نستعد لهذا اللقاء العظيم؟ وما هو النداء الذي يجمع المسلمين خمس مرات يومياً؟ لنتعلم تفاصيل الصلاة والأذان، وكيف تنعكس هذه العبادات على أخلاقنا في المجتمع!',
    warmupHookEn: 'When we pray, we stand before Allah. How do we prepare for this grand meeting? Let\'s learn the rules of Prayer, Azan, and how they shape our morals in society.',

    learningOutcomesAr: [
      'أن يوضح الطالب مكانة الصلاة وشروط وجوبها وصحتها.',
      'أن يفرق بين الأذان والإقامة ويحفظ ألفاظهما وسننهما.',
      'أن يميز بين صلاة الجمعة وصلاة العيدين من حيث الحكم والوقت والخطبة.',
      'أن يطبق قيم التسامح، واحترام حقوق الآخرين، وتوقير الكبار في حياته اليومية.'
    ],
    learningOutcomesEn: [
      'Explain the status of prayer and conditions for its validity.',
      'Differentiate between Azan and Iqamah and memorize their words.',
      'Distinguish between Jumu\'ah and Eid prayers.',
      'Apply values of tolerance, respecting others\' rights, and honoring elders.'
    ],

    vocabulary: [
      {
        termAr: 'الأذان (Azan)',
        termEn: 'Azan (Call to Prayer)',
        definitionAr: 'إعلام بدخول وقت الصلاة المفروضة بألفاظ مخصوصة.',
        definitionEn: 'The Islamic call indicating the time for obligatory prayer has entered.'
      },
      {
        termAr: 'الإقامة (Iqamah)',
        termEn: 'Iqamah',
        definitionAr: 'إعلام بالقيام لأداء الصلاة والبدء فيها الفعلي.',
        definitionEn: 'The call made just before the prayer actually commences.'
      }
    ],

    keyConceptsAr: [
      'الصلاة عماد الدين وأول ما يُحاسب عليه العبد يوم القيامة.',
      'ترديد الأذان والدعاء بعده من السنن المؤكدة التي تجلب شفاعة النبي ﷺ.',
      'صلاة الجمعة فرض عين، بينما صلاة العيد سنة مؤكدة وتختلف في وقت الخطبة.',
      'المسلم من سلم الناس من لسانه ويده، ويرحم الصغير ويوقر الكبير.'
    ],
    keyConceptsEn: [
      'Prayer is the pillar of religion and the first deed accounted for on Judgment Day.',
      'Repeating after the Mu\'azzin is a highly recommended Sunnah.',
      'Jumu\'ah is obligatory, while Eid prayer is a confirmed Sunnah.',
      'A true Muslim is one from whose tongue and hand others are safe.'
    ],

    summaryAr: 'تعرفنا على أحكام الأذان والإقامة، وشروط صحة الصلاة، والفرق بين صلاة الجمعة والعيدين. كما أدركنا أن العبادة الصحيحة تثمر أخلاقاً كريمة كالتسامح والرحمة.',
    summaryEn: 'We learned the rules of Azan, prayer conditions, and the differences between Friday and Eid prayers, concluding that true worship yields noble morals.',

    mainContentAr: `
### 1. الصلاة ومكانتها وشروطها
- الصلاة هي الركن الثاني من أركان الإسلام.
- **شروط وجوبها:** الإسلام، البلوغ، العقل.
- **شروط صحتها (قبل الدخول فيها):**
  1. الطهارة (وضوء أو غسل).
  2. طهارة الثوب والبدن والمكان من النجاسات.
  3. ستر العورة.
  4. استقبال القبلة (الكعبة).
  5. دخول وقت الصلاة.

### 2. الأذان والإقامة
- **الأذان:** يعلمنا بدخول الوقت، من سننه: أن يؤذن المؤذن وهو واقف مستقبل القبلة، وترديد السامع لما يقوله المؤذن (إلا في "حي على الصلاة/الفلاح" نقول "لا حول ولا قوة إلا بالله")، والدعاء بعد الأذان.
- **الإقامة:** تكون إيذاناً ببدء الصلاة الفعلية ووقوف الإمام والمصلين.

### 3. صلاة الجمعة وصلاة العيدين
- **صلاة الجمعة:** 
  - حكمها: فرض عين على كل مسلم ذكر بالغ عاقل مقيم.
  - الركعات والخطبة: ركعتان، والخطبة تسبق الصلاة (خطبتان).
- **صلاة العيدين (الفطر والأضحى):**
  - حكمها: سُنّة مؤكدة.
  - الركعات والخطبة: ركعتان، ولكن الخطبة تأتي **بعد** الصلاة. يُكبَّر في الركعة الأولى 7 تكبيرات وفي الثانية 5 تكبيرات.

### 4. القيم والأخلاق
- **مراعاة حقوق الآخرين والتسامح:** الإسلام دين سلام يحث على العفو عند المقدرة وعدم رد الإساءة بالإساءة.
- **توقير الكبير وعطف الصغير:** قال النبي ﷺ: "ليس منا من لم يرحم صغيرنا ويوقر كبيرنا".
- **الاهتمام بالبيئة:** الحفاظ على نظافة الأماكن العامة وعدم هدر المياه.
`,
    assessment: {
      id: 'assess-isl5-4',
      titleAr: 'تقييم المحاضرة 4',
      titleEn: 'Assessment 4',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl5-4',
          textAr: 'متى تُلقى الخطبة في صلاة الجمعة وصلاة العيد؟',
          textEn: 'When is the Khutbah delivered in Jumu\'ah and Eid prayers?',
          optionsAr: [
            'الخطبة قبل الصلاة في الجمعة والعيد',
            'الخطبة قبل الصلاة في الجمعة، وبعد الصلاة في العيد',
            'الخطبة بعد الصلاة في الجمعة والعيد',
            'لا توجد خطبة في صلاة العيد'
          ],
          optionsEn: [
            'Khutbah is before both',
            'Khutbah is before Jumu\'ah prayer, and after Eid prayer',
            'Khutbah is after both',
            'There is no Khutbah in Eid'
          ],
          correctIndex: 1,
          conceptTestedAr: 'صلاة الجمعة والعيد',
          conceptTestedEn: 'Jumu\'ah & Eid Prayers',
          difficulty: 'medium',
          explanationAr: 'في صلاة الجمعة يخطب الإمام أولاً ثم يصلي بالناس، أما في صلاة العيد فالصلاة أولاً ثم الخطبة.',
          explanationEn: 'In Jumu\'ah, Khutbah is first. In Eid, Prayer is first.'
        }
      ]
    }
  }
];
