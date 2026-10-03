import type { Lecture } from '../types';

// ============================================================================
// PRIMARY ISLAMIC STUDIES — GRADE 2 (التربية الدينية الإسلامية الصف الثاني الابتدائي - نظام التعليم 2.0 المعتمد)
// Official Egyptian Ministry Curriculum Alignment (Edu 2.0 - التربية الدينية الإسلامية):
// Lecture 1: المحور الأول (من أكون؟): العقيدة والإيمان بالملائكة، أسماء الله الحسنى، وسورتا الفلق والناس
// Lecture 2: المحور الأول (من أكون؟): السيرة النبوية (مولد النبي ﷺ ونشأته وأخلاقه) وسورة العصر
// Lecture 3: المحور الثاني (العالم من حولي): العبادات: فضل الطهارة، خطوات الوضوء الصحيحة وشروط وآداب الصلاة
// Lecture 4: المحور الثاني (العالم من حولي): القيم والأخلاق: بر الوالدين، آداب الاستئذان، وتوقير المعلم والكبير
// ============================================================================

export const PRIMARY_ISLAMIC_G2_LECTURES: Lecture[] = [
  // ── LECTURE 1: CREED, ANGELS, ALLAH'S NAMES & SURAHS AL-FALAQ & AN-NAS ──
  {
    id: 'p2-isl-1',
    order: 1,
    titleAr: 'المحاضرة 1: العقيدة، الإيمان بالملائكة، أسماء الله الحسنى وسورتا الفلق والناس',
    titleEn: 'Lecture 1: Islamic Creed, Faith in Angels, Beautiful Names of Allah & Surahs Al-Falaq & An-Nas',
    subtitleAr: 'التعرف على الإيمان بالله الواحد الخالق، والإيمان بالملائكة ووظائفهم، وأسماء الله الحسنى، وتدبر وحفظ سورتي الفلق والناس',
    subtitleEn: 'Learn about Islamic Creed, Angels and their duties, Beautiful Names of Allah, and Surahs Al-Falaq & An-Nas.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — المحور العقدي والقرآن الكريم',
    unitTitleEn: 'Theme 1: Who Am I? — Islamic Creed & Holy Quran',
    lessonNumberAr: 'الدرس 1: الإيمان بالملائكة، أسماء الله الحسنى وسورتا الفلق والناس',
    lessonNumberEn: 'Lesson 1: Angels, Divine Names & Surahs Al-Falaq & An-Nas',

    keyConceptsAr: [
      'الإيمان بالله الواحد الخالق: الله تعالى هو الخالق البارئ المصور الذي خلق الكون والإنسان وأنعم علينا بالنعم التي لا تحصى.',
      'الإيمان بالملائكة الأبرار:',
      '  - خلقهم الله تعالى من نور، وهم عباد مكرمون لا يعصون الله ما أمرهم ويفعلون ما يؤمرون.',
      '  - أشهر الملائكة ووظائفهم:',
      '    * جبريل عليه السلام: الموكل بإنزال الوحي والقرآن الكريم على الأنبياء والرسل.',
      '    * ميكائيل عليه السلام: الموكل بنزول المطر والأرزاق بأمر الله.',
      '    * إسرافيل عليه السلام: الموكل بالنفخ في الصور يوم القيامة.',
      '    * ملك الموت عليه السلام: الموكل بقبض الأرواح عند انتهاء الأجل.',
      'أسماء الله الحسنى المقررة:',
      '  - (الرَّحْمَن الرَّحِيم): واسع الرحمة التي وسعت كل شيء في الدنيا والآخرة.',
      '  - (السَّمِيع): يسمع كل الأصوات والهمسات ودعاء عباده في كل وقت.',
      '  - (البَصِير): يرى كل شيء في الكون، ويرى دبيب النملة السوداء على الصخرة الصماء في الليلة الظلماء.',
      '  - (الخَالِق): الذي أوجد كل المخلوقات من العدم بإتقان وإعجاز.',
      'القرآن الكريم (المعوذتان):',
      '  - سورة الفلق: الاستعاذة بالله رب الصبح والضياء من شر المخلوقات، ومن شر الليل إذا أظلم، ومن شر الحاسد إذا حسد.',
      '  - سورة الناس: الاستعاذة بالله ملك الناس وإلههم من وسوسة الشياطين والوسواس الخناس.'
    ],
    keyConceptsEn: [
      'Islamic Creed: Faith in Allah the Creator, Sustainer, and Omnipotent.',
      'Faith in Angels: Created from light, obedient servants of Allah (Jibril=Revelation, Mikail=Rain/Provision, Israfil=Trumpet, Angel of Death).',
      'Beautiful Names of Allah: Ar-Rahman (Most Gracious), Ar-Raheem (Most Merciful), As-Samee (All-Hearing), Al-Baseer (All-Seeing), Al-Khaliq (The Creator).',
      'Holy Quran: Surah Al-Falaq and Surah An-Nas (The Two Protectors - Al-Mu\'awwidhatayn) seeking refuge in Allah from all evils and whispering.'
    ],

    conceptMapAr: [
      'أركان الإيمان ➔ الإيمان بالله وأسمائه الحسنى (السميع، البصير، الرحمن) ➔ الإيمان بالملائكة (جبريل، ميكائيل، إسرافيل) ➔ سورتا الفلق والناس (الحماية والاستعاذة)'
    ],
    conceptMapEn: [
      'Pillars of Faith ➔ Faith in Allah & Divine Names (Hearing, Seeing, Merciful) ➔ Angels & Duties ➔ Surahs Al-Falaq & An-Nas (Divine Protection)'
    ],

    learningOutcomesAr: [
      'أن يذكر التلميذ أسماء ووظائف ملائكة الله المقربين (جبريل، ميكائيل، إسرافيل، ملك الموت).',
      'أن يشرح معاني أسماء الله الحسنى (السميع، البصير، الرحمن، الرحيم) ويستشعر مراقبة الله له في سره وعلنه.',
      'أن يرتل ويحفظ سورتي الفلق والناس ترتيلاً صحيحاً ويستنتج فضلهما في حفظ المسلم.'
    ],
    learningOutcomesEn: [
      'Name major angels and describe their divine tasks.',
      'Explain the meanings of Allah\'s names: As-Samee, Al-Baseer, Ar-Rahman, Ar-Raheem.',
      'Recite and memorize Surahs Al-Falaq and An-Nas with correct Tajweed understanding.'
    ],

    vocabulary: [
      {
        termAr: 'المَلَائِكَة',
        termEn: 'Angels',
        definitionAr: 'مخلوقات نورانية طاهرة خلقها الله من نور، تطيع الله دائماً ولا تعصيه أبداً.'
      },
      {
        termAr: 'جِبْرِيلُ عَلَيْهِ السَّلَام',
        termEn: 'Angel Jibril (Gabriel)',
        definitionAr: 'أمين الوحي وسيد الملائكة الذي نزل بالقرآن الكريم على سيدنا محمد ﷺ.'
      },
      {
        termAr: 'المُعَوِّذَتَان',
        termEn: 'The Two Surahs of Refuge',
        definitionAr: 'سورتا (الفلق والناس)، نقرأهما للاستعاذة والتحصن بحفظ الله ورعايته من كل شر.'
      },
      {
        termAr: 'السَّمِيع البَصِير',
        termEn: 'All-Hearing, All-Seeing',
        definitionAr: 'من أسماء الله الحسنى؛ يسمع كل الأقوال ويرى كل الأفعال في كل زمان ومكان.'
      }
    ],

    warmupHookAr: 'مرحباً بصديقنا البطل في الصف الثاني الابتدائي! 🌟 هل فكرت يوماً من ينزل المطر بأمر الله لتسقي الأشجار؟ إنه المَلَك الكريم ميكائيل عليه السلام! ومن نزل بالقرآن الكريم من السماء على نبينا محمد ﷺ؟ إنه أمين الوحي جبريل عليه السلام! وعندما تشعر بأي خوف وتقرأ سورتي (الفلق والناس)، تشعر بالطمأنينة والأمان في حفظ الله ورعايته! تعال لنتعلم معاً أسرار العقيدة وأسماء ربنا الحسنى!',
    warmupHookEn: 'Welcome little champion! Have you ever wondered who brings down gentle rain by Allah\'s command? It is the noble Angel Mikail! And who brought the Holy Quran down to our beloved Prophet Muhammad (PBUH)? It is Angel Jibril! Let us explore faith in angels and the beautiful protection of Surahs Al-Falaq & An-Nas!',

    mainContentAr: `
### 1. الإيمان بالملائكة الأبرار (Faith in Angels)
الملائكة مخلوقات عظيمة خلقها الله تعالى من **نور**، لا يأكلون ولا يشربون ولا ينامون، ويسبحون بحمد ربهم ليل نهار:

* 🌟 **أشهر الملائكة ووظائفهم:**
  1. **جبريل عليه السلام:** أمين الوحي، نزل بالقرآن الكريم والكتب السماوية على الأنبياء والرسل.
  2. **ميكائيل عليه السلام:** موكل بنزول الأمطار وإنبات النبات وتوزيع الأرزاق بأمر الله.
  3. **إسرافيل عليه السلام:** موكل بالنفخ في البوق (الصور) إيذاناً بقيام يوم القيامة.
  4. **ملك الموت عليه السلام:** موكل بقبض أرواح الكائنات عندما ينتهي أجلها في الحياة.
  5. **الكرام الكاتبون:** ملائكة يكتبون حسنات وسيئات العبد (ملك اليمين يكتب الحسنات، وملك اليسار يكتب السيئات).

---

### 2. من أسماء الله الحسنى (The Beautiful Names of Allah)
* 💖 **الرَّحْمَن الرَّحِيم:** الله يرحم جميع عباده، ووسع كل شيء برحمته وفضله.
* 👂 **السَّمِيع:** يسمع دعاءك إذا دعوت في سرك أو في صلاتك، ويسمع كل كلام في الكون.
* 👁️ **البَصِير:** يرى كل أفعالك الطيبة؛ فعندما تتصدق سراً أو تساعد محتاجاً، الله البصير يراك ويكتب لك أعظم الأجر.
* 🌿 **الخَالِق:** خلق السماوات والأرض والإنسان والحيوان بأجمل وأدق صورة.

---

### 3. سورة الفلق وسورة الناس (المعوذتان)

#### A. سورة الفلق:
\`\`\`text
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ (1) مِنْ شَرِّ مَا خَلَقَ (2) وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ (3) وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ (4) وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ (5)
\`\`\`
* **معاني الكلمات:**
  * **أَعُوذُ:** أحتمي وألتجئ إلى الله وأستجير به.
  * **الْفَلَقِ:** الصبح ونور الفجر.
  * **غَاسِقٍ إِذَا وَقَبَ:** الليل الشديد الظلمة إذا دخل وغطى الكون.
  * **حَاسِدٍ إِذَا حَسَدَ:** الذي يتمنى زوال النعمة عن غيره.

#### B. سورة الناس:
\`\`\`text
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
قُلْ أَعُوذُ بِرَبِّ النَّاسِ (1) مَلِكِ النَّاسِ (2) إِلَٰهِ النَّاسِ (3) مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ (4) الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ (5) مِنَ الْجِنَّةِ وَالنَّاسِ (6)
\`\`\`
* **فضل المعوذتين:** كان النبي ﷺ يقرأهما وينفث في كفيه ويمسح بهما جسده الشريف قبل النوم، ويقرأهما في أذكار الصباح والمساء للتحصن من كل شر.

---

### 4. Interactive Creed & Angels Diagram
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Angels Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">الإيمان بالملائكة الأبرار (خُلقوا من نور)</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">📖 <tspan fill="#38bdf8" font-weight="bold">جبريل عليه السلام:</tspan> إنزال الوحي والقرآن</text>
    <text x="25" y="105" fill="#f8fafc" font-size="13">🌧️ <tspan fill="#38bdf8" font-weight="bold">ميكائيل عليه السلام:</tspan> الأمطار والأرزاق</text>
    <text x="25" y="140" fill="#f8fafc" font-size="13">🎺 <tspan fill="#38bdf8" font-weight="bold">إسرافيل عليه السلام:</tspan> النفخ في الصور</text>
    <text x="25" y="175" fill="#38bdf8" font-size="13">🕊️ <tspan fill="#38bdf8" font-weight="bold">ملك الموت عليه السلام:</tspan> قبض الأرواح بأمر الله</text>
  </g>

  <!-- Divine Names Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">أسماء الله الحسنى والمعوذتان</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">💖 <tspan fill="#34d399" font-weight="bold">الرحمن الرحيم:</tspan> واسع الرحمة بعباده</text>
    <text x="25" y="105" fill="#f8fafc" font-size="13">👂 <tspan fill="#34d399" font-weight="bold">السميع:</tspan> يسمع كل دعاء وهمس</text>
    <text x="25" y="140" fill="#f8fafc" font-size="13">👁️ <tspan fill="#34d399" font-weight="bold">البصير:</tspan> يرى كل عمل في السر والعلن</text>
    <text x="25" y="175" fill="#facc15" font-size="13" font-weight="bold">🛡️ سورة الفلق والناس: حماية من كل الشرور</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Faith in Angels
* Created from light; always obedient to Allah.
* Jibril (Revelation), Mikail (Rain/Provisions), Israfil (Horn/Trumpet), Angel of Death.

### 2. Divine Names & The Two Surahs of Protection
* As-Samee (All-Hearing), Al-Baseer (All-Seeing), Ar-Rahman Ar-Raheem (The Most Gracious and Merciful).
* Surah Al-Falaq and Surah An-Nas protect the believer from envy, darkness, and evil whispering.
`,

    workedExamples: [
      {
        id: 'ex-p2-isl1-1',
        titleAr: 'مثال 1: ما وظيفة المَلَك الكريم جبريل عليه السلام؟',
        titleEn: 'Example 1: Role of Angel Jibril',
        problemAr: 'ما هي المهمة العظيمة التي كلف الله بها المَلَك جبريل عليه السلام؟',
        problemEn: 'What divine duty was assigned to Angel Jibril?',
        stepByStepSolutionAr: [
          'الخطوة 1: نتذكر أسماء الملائكة: ميكائيل للمطر، وإسرافيل للنفخ في الصور.',
          'الخطوة 2: سيدنا جبريل عليه السلام هو أمين الوحي المكلف بإنزال الوحي والقرآن الكريم على الأنبياء والرسل كرسولنا محمد ﷺ.',
          'الاستنتاج: إنزال الوحي والقرآن الكريم.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Review angel duties.',
          'Step 2: Angel Jibril is the messenger of divine revelation.',
          'Conclusion: Delivering Revelation and the Holy Quran.'
        ],
        finalAnswerAr: 'إنزال الوحي والقرآن الكريم على الرسل والأنبياء.',
        finalAnswerEn: 'Delivering divine revelation and the Holy Quran to prophets.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-isl1-1',
        problemAr: 'ماذا تعني كلمة "الفَلَق" في قوله تعالى: ﴿قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ﴾؟',
        problemEn: 'What does the word "Al-Falaq" mean in Surah Al-Falaq?',
        solutionStepsAr: [
          'كلمة (الفَلَقِ) في اللغة والتفسير القرآني تعني: الصبح ونور الفجر الذي يشق الظلام.',
          'الآية الكريمة تأمرنا بالاحتماء برب الصبح وفالق الإصباح من كل الشرور.'
        ],
        solutionStepsEn: [
          'Al-Falaq means the Daybreak or Dawn splitting the dark night.',
          'We seek refuge in the Lord of the daybreak from all created evil.'
        ],
        finalAnswerAr: 'الفلق يعني: الصبح ونور الفجر.',
        finalAnswerEn: 'Al-Falaq means the Daybreak / Dawn.'
      }
    ],

    assessment: {
      id: 'as-p2-isl1-1',
      titleAr: 'اختبار تقييم المحاضرة 1: الإيمان بالملائكة، أسماء الله والمعوذتان',
      titleEn: 'Lecture 1 Assessment: Angels, Divine Names & Surahs Al-Falaq & An-Nas',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-isl1-1',
          textAr: 'مِمَّ خَلَقَ اللهُ تعالى الملائكةَ الأبرار؟',
          textEn: 'What did Allah create the noble Angels from?',
          optionsAr: ['من نُورٍ (From Light)', 'من طينٍ', 'من نارٍ', 'من ماءٍ'],
          optionsEn: ['From Light (نور)', 'From clay', 'From fire', 'From water'],
          correctIndex: 0,
          conceptTestedAr: 'مادة خلق الملائكة',
          conceptTestedEn: 'Creation of Angels from Light',
          explanationAr: 'خلق الله تعالى الملائكة من نور، وخلق الجان من نار، وخلق آدم من طين.',
          explanationEn: 'Allah created angels from light.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl1-2',
          textAr: 'من هو المَلَك الموكل بنزول المطر والماء بأمر الله تعالى؟',
          textEn: 'Which Angel is tasked with bringing rain and sustenance by Allah\'s command?',
          optionsAr: ['مِيكَائِيلُ عَلَيْهِ السَّلَام', 'جِبْرِيلُ عَلَيْهِ السَّلَام', 'إِسْرَافِيلُ عَلَيْهِ السَّلَام', 'مَالِكُ'],
          optionsEn: ['Angel Mikail', 'Angel Jibril', 'Angel Israfil', 'Malik'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة المَلَك ميكائيل',
          conceptTestedEn: 'Duty of Angel Mikail',
          explanationAr: 'سيدنا ميكائيل عليه السلام هو الموكل بإنزال المطر وتوزيع الأرزاق بأمر الله.',
          explanationEn: 'Angel Mikail is appointed in charge of rain and provisions.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl1-3',
          textAr: 'ماذا يعني اسم الله تعالى "السَّمِيعُ"؟',
          textEn: 'What is the meaning of Allah\'s Name "As-Samee"?',
          optionsAr: [
            'الذي يسمع كل الأصوات والأقوال ودعاء عباده في كل وقت',
            'الذي يرى كل شيء فقط دون سماع',
            'الذي خلق السماوات والأرض',
            'الذي يطعم الطيور'
          ],
          optionsEn: [
            'He who hears all sounds, words, and prayers of His servants',
            'He who only sees without hearing',
            'He who created heavens and earth',
            'He who feeds the birds'
          ],
          correctIndex: 0,
          conceptTestedAr: 'معنى اسم الله السميع',
          conceptTestedEn: 'Meaning of Allah\'s Name As-Samee',
          explanationAr: 'السميع يعني أن الله تعالى يسمع سر العبد وجهره ودعاءه في كل مكان.',
          explanationEn: 'As-Samee means Allah hears all prayers and sounds unconditionally.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl1-4',
          textAr: 'ما السورتان اللتان نسميهما "المعوذتين" ونقرأهما للتحصن من كل شر؟',
          textEn: 'Which two Surahs are called "The Two Protectors" (Al-Mu\'awwidhatayn)?',
          optionsAr: [
            'سورتا الفلق والناس',
            'سورتا الفاتحة والإخلاص',
            'سورتا الكوثر والمسد',
            'سورتا الكافرون والنصر'
          ],
          optionsEn: [
            'Surahs Al-Falaq and An-Nas',
            'Surahs Al-Fatihah and Al-Ikhlas',
            'Surahs Al-Kawthar and Al-Masad',
            'Surahs Al-Kafirun and An-Nasr'
          ],
          correctIndex: 0,
          conceptTestedAr: 'المعوذتان الفلق والناس',
          conceptTestedEn: 'Al-Mu\'awwidhatayn Identification',
          explanationAr: 'المعوذتان هما سورتا الفلق والناس اللتان نستعيذ بهما برب الناس من شرور الإنس والجن.',
          explanationEn: 'Surahs Al-Falaq and An-Nas are the Two Protectors.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl1-5',
          textAr: 'مَن هو المَلَك الموكل بإنزال الوحي والقرآن الكريم على النبي محمد ﷺ؟',
          textEn: 'Which Angel was tasked with bringing the Holy Quran to Prophet Muhammad (PBUH)?',
          optionsAr: ['جِبْرِيلُ عَلَيْهِ السَّلَام', 'مِيكَائِيلُ عَلَيْهِ السَّلَام', 'إِسْرَافِيلُ عَلَيْهِ السَّلَام', 'رِضْوَانُ'],
          optionsEn: ['Angel Jibril (Gabriel)', 'Angel Mikail', 'Angel Israfil', 'Ridwan'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة أمين الوحي جبريل',
          conceptTestedEn: 'Angel Jibril as Messenger of Revelation',
          explanationAr: 'سيدنا جبريل عليه السلام هو أمين الوحي الذي أرسله الله بالقرآن إلى نبينا محمد ﷺ.',
          explanationEn: 'Angel Jibril is the angel of revelation.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: PROPHETIC BIOGRAPHY (BIRTH, UPBRINGING, CHARACTER) & SURAH AL-ASR ──
  {
    id: 'p2-isl-2',
    order: 2,
    titleAr: 'المحاضرة 2: السيرة النبوية (مولد النبي ﷺ ونشأته وأخلاقه) وسورة العصر',
    titleEn: 'Lecture 2: Prophetic Seerah (Birth, Upbringing & Nobility of Character) & Surah Al-Asr',
    subtitleAr: 'التعرف على مولد النبي محمد ﷺ في عام الفيل، ورضاعة السيدة حليمة، وكفالة جده وعمه، ولقبه بالصادق الأمين، وتدبر سورة العصر',
    subtitleEn: 'Learn about the birth of Prophet Muhammad (PBUH) in the Year of the Elephant, his early life, noble morals, and Surah Al-Asr.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — السيرة النبوية الشريفة والقصص القرآني',
    unitTitleEn: 'Theme 1: Who Am I? — Prophetic Biography & Quranic Stories',
    lessonNumberAr: 'الدرس 2: مولد النبي ﷺ ونشأته وأخلاقه وسورة العصر',
    lessonNumberEn: 'Lesson 2: Birth of the Prophet (PBUH), Character & Surah Al-Asr',

    keyConceptsAr: [
      'مولد النبي محمد ﷺ:',
      '  - وُلد النبي ﷺ يوم الاثنين، في الثاني عشر من شهر ربيع الأول في عام الفيل، في مكة المكرمة.',
      '  - وُلد يتيماً؛ فقد توفي والده (عبد الله) قبل ولادته.',
      '  - أمه هي السيدة الشريفة (آمنة بنت وهب).',
      '  - أرضعته السيدة الكريمة (حليمة السعدية) في بادية بني سعد، ونالت بركة عظيمة في بيتها وأغنامها ببركة النبي ﷺ.',
      'نشأته ورعايته الشريفة:',
      '  - توفيت أمه آمنة وهو في السادسة من عمره، فكفله جده (عبد المطلب) وكان يحبه حباً جماً ويعتني به.',
      '  - توفي جده وهو في الثامنة من عمره، فانتقلت كفالته إلى عمه الحنون (أبي طالب) الذي رباه ورعاه كأبنائه.',
      'أخلاق النبي ﷺ قبل البعثة:',
      '  - رعى الأغنام في صباه ليتعلم الصبر والرحمة والتواضع.',
      '  - عمل بالتجارة مع عمه، وكان قدوة في الأمانة والإتقان.',
      '  - لُقّب بين أهل مكة وقريش بـ (الصَّادِق الأَمِين)؛ لشدة صدق لسانه وحفظه للأمانات.',
      'سورة العصر ومعانيها الجليلة:',
      '  - أقسم الله تعالى بالعصر (الوقت والزمان) أن كل إنسان في خسران إلا من اتصف بأربع صفات عظيمة:',
      '    1. الإيمان بالله تعالى.',
      '    2. العمل الصالح والنافع.',
      '    3. التواصي بالحق ونصرة المظلوم.',
      '    4. التواصي بالصبر على الطاعات والشدائد.'
    ],
    keyConceptsEn: [
      'Birth of the Prophet (PBUH): Born in Makkah on Monday, 12th Rabi\' Al-Awwal in the Year of the Elephant.',
      'Upbringing: Orphaned early, nursed by Halima As-Sa\'diyyah, raised first by grandfather Abdul Muttalib then uncle Abu Talib.',
      'Nobility & Titles: Known as "As-Sadiq Al-Ameen" (The Truthful and Trustworthy), worked in shepherding and honest trade.',
      'Surah Al-Asr: Allah swears by Time that humanity is in loss except those who combine Faith, Righteous Deeds, Mutual Exhortation to Truth, and Patience.'
    ],

    conceptMapAr: [
      'السيرة النبوية الشريفة ➔ المولد في مكة عام الفيل ➔ الرضاعة في بني سعد ➔ كفالة الجد عبد المطلب ثم العم أبو طالب ➔ اللقب: الصادق الأمين ➔ سورة العصر وقيمة الوقت'
    ],
    conceptMapEn: [
      'Prophetic Seerah ➔ Birth in Year of Elephant ➔ Upbringing (Abdul Muttalib & Abu Talib) ➔ The Truthful & Trustworthy ➔ Surah Al-Asr (Value of Time & Faith)'
    ],

    learningOutcomesAr: [
      'أن يسرد التلميذ قصة مولد النبي محمد ﷺ ونشأته مع أمه وجده وعمه.',
      'أن يقتدي بأخلاق النبي ﷺ في الصدق والأمانة في تعاملاته اليومية.',
      'أن يحفظ سورة العصر ويشرح شروط الفوز والنجاح الأربعة المذكورة في السورة.'
    ],
    learningOutcomesEn: [
      'Narrate key milestones of the Prophet\'s early life and family upbringing.',
      'Emulate the Prophet\'s values of truthfulness (Sidq) and trustworthiness (Amanah).',
      'Memorize Surah Al-Asr and enumerate the four conditions of spiritual success.'
    ],

    vocabulary: [
      {
        termAr: 'عَامُ الفِيل',
        termEn: 'Year of the Elephant',
        definitionAr: 'العام الذي حاول فيه أبرهة الحبشي هدم الكعبة بالفيلة فحماها الله تعالى، وفيه وُلد النبي ﷺ.'
      },
      {
        termAr: 'حَلِيمَةُ السَّعْدِيَّة',
        termEn: 'Halima As-Sa\'diyyah',
        definitionAr: 'مرضعة النبي محمد ﷺ التي عاش في بيتها طفولته المبكرة في بادية بني سعد المباركة.'
      },
      {
        termAr: 'الصَّادِقُ الأَمِين',
        termEn: 'The Truthful & Trustworthy',
        definitionAr: 'اللقب المشهور الذي أطلقه أهل مكة على نبينا محمد ﷺ لصدقه وأمانته العظيمة.'
      },
      {
        termAr: 'العَصْر',
        termEn: 'Time / Era',
        definitionAr: 'الوقت والزمان الذي يقضيه الإنسان في حياته، وأقسم الله به في سورة العصر لأهميته.'
      }
    ],

    warmupHookAr: 'تخيل أنك في مكة المكرمة قديماً، والجميع في المدينة من الصغير إلى الكبير ينادون شاباً نبيلاً بلقب: "الصادق الأمين"؛ إذا وضعوا عنده أماناتهم حفظها، وإذا تكلم لم ينطق إلا بالصدق والخير.. إنه حبيبنا ونبينا محمد ﷺ! وكيف علمتنا سورة العصر أن نستثمر أوقاتنا في الخير والعمل الصالح؟ تعالوا لنستمتع بسيرة نبينا العطرة!',
    warmupHookEn: 'Imagine living in ancient Makkah where everyone trusted one young man above all, calling him "The Truthful and Trustworthy" (As-Sadiq Al-Ameen)! That was our beloved Prophet Muhammad (PBUH)! Let us discover his inspiring childhood and the wisdom of Surah Al-Asr!',

    mainContentAr: `
### 1. مولد النبي محمد ﷺ ونشأته المباركة
* **المولد الشريف:**
  * وُلد سيدنا محمد ﷺ في **مكة المكرمة**، يوم **الاثنين** في شهر **ربيع الأول** في **عام الفيل**.
  * وُلد يتيماً؛ حيث مات والده **عبد الله** قبل ولادته، وأمه هي السيدة **آمنة بنت وهب**.
* **الرضاعة في البادية:**
  * أُرسل إلى بادية بني سعد ليرضعه السيدة الكريمة **حليمة السعدية**.
  * حلت البركة العظيمة على بيت حليمة وأغنامها وإبلها ببركة النبي محمد ﷺ، وعاش معها طفولته الأولى نشيطاً فصيح اللسان.
* **الكفالة والرعاية:**
  * عاد إلى أمه آمنة حتى توفيت وهو في **السادسة** من عمره.
  * كفله جده الحنون **عبد المطلب**، وكان يجلسه بجواره على فراشه تكريماً له، وتوفي جده وعمر النبي **ثماني سنوات**.
  * انتقلت كفالته إلى عمه **أبي طالب**، الذي أحسن تربيته وعامله كأحب أبنائه ودافع عنه.

---

### 2. أخلاق النبي ﷺ في صباه وشبابه
1. 🐑 **رعي الأغنام:** عمل في رعي الأغنام مع إخوانه من الرضاعة، فتعلم الصبر والرحمة والرفق بالحيوان والتواضع.
2. 💼 **الأمانة في التجارة:** سافر في تجارة عمه أبي طالب وكان أميناً بارعاً لا يغش ولا يخدع أحداً.
3. 🌟 **الصادق الأمين:** أحبه أهل مكة واشتهر بينهم بلقب **"الصادق الأمين"**؛ لأنه لم يكذب في حياته قط وكان يحفظ ودائع وأمانات الناس.

---

### 3. سورة العصر وتدبر معانيها
\`\`\`text
بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
وَالْعَصْرِ (1) إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ (2) إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ (3)
\`\`\`
* **تفسير السورة الكريمة:**
  * **وَالْعَصْرِ:** يقسم الله تعالى بالوقت والزمان لأهميته في حياة المسلم.
  * **إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ:** كل إنسان في خسارة وهلاك، **إلا** من حقق هذه الصفات الأربع:
    1. **آمَنُوا:** الإيمان الصادق بالله وملائكته وكتبه ورسله.
    2. **عَمِلُوا الصَّالِحَاتِ:** أداء الصلاة، بر الوالدين، مساعدة المحتاجين، والصدق.
    3. **وَتَوَاصَوْا بِالْحَقِّ:** نصح الآخرين بالخير والعدل وطاعة الله.
    4. **وَتَوَاصَوْا بِالصَّبْرِ:** الصبر على الطاعة وعلى الصعوبات والمحن.

---

### 4. Interactive Prophetic Timeline Diagram
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Timeline Box -->
  <g transform="translate(20, 20)">
    <rect width="680" height="190" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="12"/>
    <text x="340" y="35" fill="#fbbf24" font-size="16" font-weight="bold" text-anchor="middle">محطات نشأة النبي محمد ﷺ (الصادق الأمين)</text>
    
    <!-- Stage 1 -->
    <rect x="25" y="60" width="140" height="100" fill="#065f46" rx="8"/>
    <text x="95" y="85" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">1. المولد الشريف</text>
    <text x="95" y="110" fill="#ffffff" font-size="11" text-anchor="middle">عام الفيل بمكة</text>
    <text x="95" y="130" fill="#a7f3d0" font-size="10" text-anchor="middle">أمه آمنة بنت وهب</text>

    <!-- Stage 2 -->
    <rect x="190" y="60" width="140" height="100" fill="#047857" rx="8"/>
    <text x="260" y="85" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">2. الرضاعة بالبادية</text>
    <text x="260" y="110" fill="#ffffff" font-size="11" text-anchor="middle">حليمة السعدية</text>
    <text x="260" y="130" fill="#a7f3d0" font-size="10" text-anchor="middle">بركة في بني سعد</text>

    <!-- Stage 3 -->
    <rect x="355" y="60" width="140" height="100" fill="#0f766e" rx="8"/>
    <text x="425" y="85" fill="#2dd4bf" font-size="13" font-weight="bold" text-anchor="middle">3. كفالة الجد والعم</text>
    <text x="425" y="110" fill="#ffffff" font-size="11" text-anchor="middle">الجد عبد المطلب (8 سنين)</text>
    <text x="425" y="130" fill="#99f6e4" font-size="10" text-anchor="middle">ثم عمه أبو طالب</text>

    <!-- Stage 4 -->
    <rect x="520" y="60" width="140" height="100" fill="#1e3a8a" rx="8"/>
    <text x="590" y="85" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">4. الصادق الأمين</text>
    <text x="590" y="110" fill="#ffffff" font-size="11" text-anchor="middle">رعي الغنم والتجارة</text>
    <text x="590" y="130" fill="#bfdbfe" font-size="10" text-anchor="middle">أمانة وصدق تام</text>
    
    <text x="340" y="180" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">﴿وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ﴾</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Birth and Upbringing of Prophet Muhammad (PBUH)
* Born in Makkah in the Year of the Elephant to Lady Aminah.
* Nursed by Halima As-Sa'diyyah in the desert.
* Cared for by grandfather Abdul Muttalib, then uncle Abu Talib.

### 2. Noble Titles & Surah Al-Asr
* Known as "As-Sadiq Al-Ameen" (The Truthful & Trustworthy).
* Surah Al-Asr outlines the 4 pillars of true success: Faith, Good Deeds, Mutual Truth, and Patience.
`,

    workedExamples: [
      {
        id: 'ex-p2-isl2-1',
        titleAr: 'مثال 1: بماذا لُقّب النبي ﷺ في شبابه بين أهل مكة ولماذا؟',
        titleEn: 'Example 1: Title of the Prophet in Makkah',
        problemAr: 'ما هو اللقب الشهير الذي أطلقه أهل قريش ومكة على نبينا محمد ﷺ؟ ولماذا نال هذا اللقب؟',
        problemEn: 'What famous title did the people of Makkah give to Prophet Muhammad (PBUH) and why?',
        stepByStepSolutionAr: [
          'الخطوة 1: نتذكر صفات النبي ﷺ في شبابه: كان شديد الصدق والأمانة في كلامه وتجارته.',
          'الخطوة 2: أطلق عليه أهل مكة لقب: (الصَّادِقُ الأَمِينُ).',
          'الاستنتاج: لُقّب بـ (الصادق الأمين)؛ لصدق لسانه وحفظه لأمانات الناس وودائعهم.'
        ],
        stepByStepSolutionEn: [
          'Step 1: The Prophet was exceptionally truthful in speech and reliable in trade.',
          'Step 2: People called him "As-Sadiq Al-Ameen".',
          'Conclusion: "The Truthful and Trustworthy".'
        ],
        finalAnswerAr: 'لُقّب بـ "الصادق الأمين"؛ لصدق حديثه وحفظه لأمانات الناس.',
        finalAnswerEn: 'He was titled "The Truthful and Trustworthy" (As-Sadiq Al-Ameen).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-isl2-1',
        problemAr: 'ما الصفات الأربع التي ذكرتها سورة العصر لنجاة الإنسان وفوزه في الدنيا والآخرة؟',
        problemEn: 'What 4 qualities are mentioned in Surah Al-Asr for true success?',
        solutionStepsAr: [
          '1. الإيمان بالله تعالى (الذين آمنوا).',
          '2. العمل الصالح (وعملوا الصالحات).',
          '3. التواصي بالحق ونصح الناس بالخير (وتواصوا بالحق).',
          '4. التواصي بالصبر على الطاعات (وتواصوا بالصبر).'
        ],
        solutionStepsEn: [
          '1. Faith (Iman).',
          '2. Righteous deeds.',
          '3. Mutual encouragement to Truth.',
          '4. Mutual encouragement to Patience.'
        ],
        finalAnswerAr: 'الإيمان، العمل الصالح، التواصي بالحق، والتواصي بالصبر.',
        finalAnswerEn: 'Faith, Righteous Deeds, Exhortation to Truth, and Patience.'
      }
    ],

    assessment: {
      id: 'as-p2-isl2-1',
      titleAr: 'اختبار تقييم المحاضرة 2: السيرة النبوية وسورة العصر',
      titleEn: 'Lecture 2 Assessment: Seerah & Surah Al-Asr',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-isl2-1',
          textAr: 'في أي عام وُلد نبينا محمد ﷺ في مكة المكرمة؟',
          textEn: 'In which year was Prophet Muhammad (PBUH) born in Makkah?',
          optionsAr: ['عَامُ الفِيلِ (Year of the Elephant)', 'عام الحزن', 'عام الهجرة', 'عام الفتح'],
          optionsEn: ['Year of the Elephant', 'Year of Sorrow', 'Year of Hijrah', 'Year of Conquest'],
          correctIndex: 0,
          conceptTestedAr: 'تاريخ مولد النبي ﷺ في عام الفيل',
          conceptTestedEn: 'Birth of the Prophet in Year of Elephant',
          explanationAr: 'وُلد النبي ﷺ في عام الفيل بمكة المكرمة في شهر ربيع الأول يوم الاثنين.',
          explanationEn: 'The Prophet was born in the Year of the Elephant in Makkah.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl2-2',
          textAr: 'مَن هي مرضعة النبي ﷺ التي عاش معها طفولته الأولى في بادية بني سعد؟',
          textEn: 'Who was the wet-nurse of Prophet Muhammad (PBUH) in the desert of Bani Sa\'d?',
          optionsAr: ['حَلِيمَةُ السَّعْدِيَّة', 'خَدِيجَةُ بِنْتُ خُوَيْلِد', 'عَائِشَةُ بِنْتُ أَبِي بَكْر', 'فَاطِمَةُ الزَّهْرَاء'],
          optionsEn: ['Halima As-Sa\'diyyah', 'Khadijah bint Khuwaylid', 'Aisha bint Abi Bakr', 'Fatimah Az-Zahra'],
          correctIndex: 0,
          conceptTestedAr: 'مرضعة النبي حليمة السعدية',
          conceptTestedEn: 'Wet-nurse Halima As-Sa\'diyyah',
          explanationAr: 'السيدة حليمة السعدية هي مرضعة النبي ﷺ التي حلت البركة على بيتها برضاعته.',
          explanationEn: 'Lady Halima As-Sa\'diyyah nursed the Prophet in the desert.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl2-3',
          textAr: 'مَن الذي كفل النبي ﷺ ورعاه بعد وفاة جده عبد المطلب؟',
          textEn: 'Who took care of Prophet Muhammad (PBUH) after the death of his grandfather Abdul Muttalib?',
          optionsAr: ['عَمُّهُ أَبُو طَالِب', 'عَمُّهُ حَمْزَة', 'خَالُهُ', 'صَدِيقُهُ أَبُو بَكْر'],
          optionsEn: ['His uncle Abu Talib', 'His uncle Hamzah', 'His maternal uncle', 'His friend Abu Bakr'],
          correctIndex: 0,
          conceptTestedAr: 'كفالة العم أبي طالب للنبي ﷺ',
          conceptTestedEn: 'Guardianship of Uncle Abu Talib',
          explanationAr: 'كفله عمه أبو طالب بعد وفاة جده ورباه كأبنائه وحماه ودافع عنه.',
          explanationEn: 'His uncle Abu Talib became his caring guardian.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl2-4',
          textAr: 'ماذا كان يعمل النبي ﷺ في صباه ليتعلم الصبر والرحمة؟',
          textEn: 'What did the Prophet (PBUH) work as in his youth to learn patience and compassion?',
          optionsAr: ['رَعْيُ الأَغْنَامِ (Shepherding)', 'صِنَاعَةُ الفَخَّارِ', 'صَيْدُ السَّمَكِ', 'البِنَاءُ'],
          optionsEn: ['Shepherding sheep', 'Pottery', 'Fishing', 'Masonry'],
          correctIndex: 0,
          conceptTestedAr: 'عمل النبي في رعي الأغنام',
          conceptTestedEn: 'The Prophet\'s Work in Shepherding',
          explanationAr: 'رعى النبي ﷺ الأغنام في صباه، وقال: "ما بعث الله نبياً إلا رعى الغنم".',
          explanationEn: 'He tended sheep in his youth, fostering humility and patience.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl2-5',
          textAr: 'بماذا أقسم الله تعالى في بداية سورة العصر؟',
          textEn: 'What did Allah swear by at the beginning of Surah Al-Asr?',
          optionsAr: ['بِالْوَقْتِ وَالزَّمَانِ (Time / Era)', 'بِالشَّمْسِ', 'بِالْقَمَرِ', 'بِالنُّجُومِ'],
          optionsEn: ['By Time and Era (العصر)', 'By the Sun', 'By the Moon', 'By the Stars'],
          correctIndex: 0,
          conceptTestedAr: 'القسم بالعصر والوقت في سورة العصر',
          conceptTestedEn: 'Allah\'s Oath by Time in Surah Al-Asr',
          explanationAr: 'أقسم الله تعالى بالعصر وهو الوقت والزمان للتنبيه على قيمته في حياة الإنسان.',
          explanationEn: 'Allah swore by Time (Al-Asr) to emphasize its vital value.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: PURIFICATION, WUDU STEPS & PRAYER ETIQUETTE ──
  {
    id: 'p2-isl-3',
    order: 3,
    titleAr: 'المحاضرة 3: العبادات: فضل الطهارة، خطوات الوضوء بالترتيب وآداب الصلاة',
    titleEn: 'Lecture 3: Acts of Worship: Purification, Step-by-Step Wudu & Prayer Etiquette',
    subtitleAr: 'تعلم فضل الطهارة والوضوء في الإسلام، وخطوات الوضوء العملية بالترتيب، ونواقض الوضوء، وشروط صحة الصلاة والخشوع',
    subtitleEn: 'Master the importance of purity, chronological steps of Wudu, nullifiers, and prayer etiquette.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — أحكام العبادات والطهارة',
    unitTitleEn: 'Theme 2: The World Around Me — Islamic Worship & Purification',
    lessonNumberAr: 'الدرس 3: الطهارة وخطوات الوضوء وآداب الصلاة',
    lessonNumberEn: 'Lesson 3: Purity, Wudu Steps & Prayer Rules',

    keyConceptsAr: [
      'فضل الطهارة والوضوء في الإسلام:',
      '  - قال رسول الله ﷺ: «الطَّهُورُ شَطْرُ الإِيمَانِ»؛ أي أن النظافة وطهارة البدن نصف الإيمان.',
      '  - الوضوء شرط أساسي لصحة الصلاة، وبه تُغفر الذنوب والخطايا وتتساقط مع قطرات الماء.',
      'خطوات الوضوء الصحيحة بالترتيب النبوي:',
      '  1. النية في القلب (محلها القلب) وقول: "بِسْمِ اللَّهِ".',
      '  2. غسل الكفين 3 مرات بالماء النظيف.',
      '  3. المضمضة 3 مرات (إدخال الماء في الفم وإخراجه).',
      '  4. الاستنشاق والاستنثار 3 مرات (جذب الماء بالأنف ثم إخراجه باليد اليسرى).',
      '  5. غسل الوجه كاملاً 3 مرات من منبت شعر الرأس إلى أسفل الذقن، ومن الأذن إلى الأذن.',
      '  6. غسل اليدين من أطراف الأصابع حتى المرفقين 3 مرات (نبدأ باليد اليمنى ثم اليسرى).',
      '  7. مسح الرأس كاملاً مرة واحدة من الأمام للخلف مع مسح الأذنين.',
      '  8. غسل الرجلين إلى الكعبين 3 مرات (نبدأ بالرجل اليمنى ثم اليسرى).',
      'دعاء ما بعد الوضوء:',
      '  - «أَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ».',
      'مبطلات ونواقض الوضوء: خروج البول أو الغائط أو الريح، والنوم العميق.',
      'شروط وآداب الصلاة:',
      '  - طهارة البدن والثوب والمكان.',
      '  - ستر العورة واستقبال القبلة (الكعبة المشرفة بمكة المكرمة).',
      '  - الخشوع والطمأنينة وعدم الالتفات أو الحركة الكثيرة أثناء الوقوف بين يدي الله.'
    ],
    keyConceptsEn: [
      'Virtue of Purification: Prophet Muhammad (PBUH) taught that "Purity is half of Faith".',
      'Sequential Steps of Wudu (Ablution): Intention & Bismillah ➔ Washing hands 3x ➔ Rinsing mouth 3x ➔ Sniffing water into nose 3x ➔ Washing entire face 3x ➔ Washing arms up to elbows 3x (right first) ➔ Wiping head and ears 1x ➔ Washing feet up to ankles 3x (right first).',
      'Supplication after Wudu: Shahada and asking Allah to make us among the repentant and purified.',
      'Nullifiers of Wudu: Natural bodily excretions and deep sleep.',
      'Prayer Rules & Etiquette: Facing the Qiblah (Makkah), body/clothing cleanliness, and complete Khushoo (solemn focus).'
    ],

    conceptMapAr: [
      'العبادات والطهارة ➔ فضل النظافة والوضوء ➔ خطوات الوضوء الـ 8 بالترتيب ➔ دعاء ما بعد الوضوء ➔ شروط وآداب الصلاة (استقبال القبلة والخشوع)'
    ],
    conceptMapEn: [
      'Worship & Purity ➔ Virtues of Wudu ➔ 8 Steps of Wudu in Sequence ➔ Post-Wudu Dua ➔ Prayer Etiquette (Qiblah & Khushoo)'
    ],

    learningOutcomesAr: [
      'أن يعدد التلميذ خطوات الوضوء بالترتيب الصحيح دون نسيان أي ركن.',
      'أن يذكر دعاء ما بعد الفراغ من الوضوء ويحفظه.',
      'أن يحدد شروط صحة الصلاة وآداب الوقوف بخشوع بين يدي الله تعالى.'
    ],
    learningOutcomesEn: [
      'Demonstrate the exact chronological sequence of Wudu.',
      'Recite and memorize the post-Wudu supplication.',
      'Identify the prerequisites of valid Salah and proper prayer demeanor.'
    ],

    vocabulary: [
      {
        termAr: 'الوُضُوء',
        termEn: 'Wudu (Ablution)',
        definitionAr: 'غسل ومسح أعضاء مخصوصة بالماء الطهور بنية التعبد والصلاة.'
      },
      {
        termAr: 'المَضْمَضَة',
        termEn: 'Rinsing the Mouth',
        definitionAr: 'إدخال الماء في الفم وتحريكه ثم مجّه لتنظيف الفم والأسنان.'
      },
      {
        termAr: 'الاسْتِنْشَاق',
        termEn: 'Sniffing Water into the Nose',
        definitionAr: 'جذب الماء بالنفس إلى داخل الأنف لتنظيفه ثم استنثاره وإخراجه.'
      },
      {
        termAr: 'القِبْلَة',
        termEn: 'The Qiblah',
        definitionAr: 'اتجاه الكعبة المشرفة في المسجد الحرام بمكة المكرمة الذي نتوجه إليه في كل صلاة.'
      },
      {
        termAr: 'الخُشُوع',
        termEn: 'Khushoo (Devotion)',
        definitionAr: 'سكون الجوارح وحضور القلب والتركيز التام بتعظيم الله أثناء الصلاة.'
      }
    ],

    warmupHookAr: 'عندما تستعد لمقابلة شخص عظيم، تلبس أنظف ثيابك وتتزين بأجمل عطر! فكيف وأنت تستعد للوقوف بين يدي الله تعالى خالق الكون خمس مرات كل يوم؟ إن الوضوء هو سر النقاء والجمال الذي يجعل وجوه المسلمين مشرقة بنور الطهارة! تعال لنتعلم معاً كيف نتوضأ وضوء نبينا محمد ﷺ خطوة بخطوة!',
    warmupHookEn: 'When preparing to stand before Allah the Creator in prayer, we cleanse ourselves with water! Wudu purifies our body, washes away sins, and makes our faces glow with light! Let us learn the perfect Sunnah steps of Wudu!',

    mainContentAr: `
### 1. خطوات الوضوء الصحيحة بالترتيب النبوي (Wudu Steps)
نتوضأ بماء طهور نظيف مقتدين بسيدنا محمد ﷺ:

1. 🤍 **النية والتسمية:** أنوي الوضوء بقلبي للصلاة وأقول: **"بِسْمِ اللَّهِ"**.
2. 🤲 **غسل الكفين:** أغسل كفيَّ ثلاث مرات بالماء مع تخليل أصابعي.
3. 👄 **المضمضة:** أدخل الماء في فمي وأحركه ثم أخرجه **3 مرات**.
4. 👃 **الاستنشاق والاستنثار:** أجذب الماء بأنفي برفق ثم أخرجه بيدي اليسرى **3 مرات**.
5. 🧼 **غسل الوجه:** أغسل وجهي كاملاً من منبت الشعر حتى أسفل الذقن، ومن الأذن إلى الأذن **3 مرات**.
6. 💪 **غسل اليدين إلى المرفقين:** أغسل يدي اليمنى من أطراف الأصابع متجاوزاً المرفق **3 مرات**، ثم اليد اليسرى **3 مرات**.
7. 💆 **مسح الرأس والأذنين:** أبلل يدي بالماء وأمسح رأسي من الأمام للخلف مرة واحدة، ثم أمسح أذنيَّ ظاهرهما وباطنهما.
8. 🦶 **غسل الرجلين إلى الكعبين:** أغسل رجلي اليمنى مع الكعبين وتخليل الأصابع **3 مرات**، ثم رجلي اليسرى **3 مرات**.

---

### 2. دعاء ما بعد الوضوء (Post-Wudu Dua)
عندما تنتهي من الوضوء، استقبل القبلة وارفع بصرك وقل:
> **«أَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ».**
* **بشرى نبوية:** من قال هذا الدعاء فُتحت له أبواب الجنة الثمانية يدخل من أيها شاء!

---

### 3. شروط صحة الصلاة وآدابها (Prayer Etiquette)
* 🕌 **استقبال القبلة:** التوجه نحو الكعبة المشرفة في مكة المكرمة.
* 👗 **ستر العورة:** ارتداء ملابس نظيفة وساترة محتشمة.
* 🧼 **طهارة المكان والثوب:** الصلاة في مكان طاهر وعلى سجادة نظيفة.
* 🕊️ **الخشوع في الصلاة:** النظر إلى موضع السجود، وعدم الالتفات يميناً أو يساراً، والاطمئنان في الركوع والسجود.

---

### 4. Interactive Step-by-Step Wudu Diagram
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Steps Box -->
  <g transform="translate(20, 20)">
    <rect width="680" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="340" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">💧 خطوات الوضوء النبوي الصحيح بالترتيب</text>
    
    <text x="30" y="70" fill="#f8fafc" font-size="13">1. النية والتسمية (بسم الله)</text>
    <text x="250" y="70" fill="#f8fafc" font-size="13">2. غسل الكفين 3 مرات 🤲</text>
    <text x="470" y="70" fill="#f8fafc" font-size="13">3. المضمضة 3 مرات 👄</text>

    <text x="30" y="110" fill="#f8fafc" font-size="13">4. الاستنشاق 3 مرات 👃</text>
    <text x="250" y="110" fill="#f8fafc" font-size="13">5. غسل الوجه 3 مرات 🧼</text>
    <text x="470" y="110" fill="#f8fafc" font-size="13">6. اليدين للمرفقين 3 مرات 💪</text>

    <text x="30" y="150" fill="#f8fafc" font-size="13">7. مسح الرأس والأذنين 💆</text>
    <text x="250" y="150" fill="#f8fafc" font-size="13">8. غسل الرجلين للكعبين 🦶</text>
    <text x="470" y="150" fill="#facc15" font-size="13" font-weight="bold">⭐ دعاء ما بعد الوضوء</text>

    <text x="340" y="185" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">«اللهم اجعلني من التوابين واجعلني من المتطهرين»</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. The 8 Steps of Wudu (Ablution)
1. Intention & Bismillah.
2. Washing hands 3 times.
3. Rinsing mouth 3 times.
4. Sniffing water into nose 3 times.
5. Washing entire face 3 times.
6. Washing arms up to elbows 3 times (Right then Left).
7. Wiping head and ears once.
8. Washing feet up to ankles 3 times (Right then Left).

### 2. Post-Wudu Dua & Salah Etiquette
* Say the Shahada and ask Allah for purity.
* Face the Qiblah (Makkah) and pray with solemn focus (Khushoo).
`,

    workedExamples: [
      {
        id: 'ex-p2-isl3-1',
        titleAr: 'مثال 1: ما هو الترتيب الصحيح بين غسل الوجه وغسل اليدين في الوضوء؟',
        titleEn: 'Example 1: Wudu Steps Sequence',
        problemAr: 'أيهما يأتي أولاً في الوضوء: غسل الوجه أم غسل اليدين إلى المرفقين؟',
        problemEn: 'Which comes first in Wudu: washing the face or washing arms to elbows?',
        stepByStepSolutionAr: [
          'الخطوة 1: نستعرض خطوات الوضوء: بعد المضمضة والاستنشاق نغسل الوجه كاملاً 3 مرات.',
          'الخطوة 2: بعد غسل الوجه مباشرة نغسل اليدين من أطراف الأصابع إلى المرفقين 3 مرات.',
          'الاستنتاج: غسل الوجه يأتي أولاً قبل غسل اليدين إلى المرفقين.'
        ],
        stepByStepSolutionEn: [
          'Step 1: In the Wudu sequence, washing the face follows rinsing the nose.',
          'Step 2: Washing arms up to the elbows comes next.',
          'Conclusion: Face first, then arms to elbows.'
        ],
        finalAnswerAr: 'غسل الوجه يأتي أولاً، ثم يليه غسل اليدين إلى المرفقين.',
        finalAnswerEn: 'Washing the face comes first, followed by arms to elbows.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-isl3-1',
        problemAr: 'ماذا تقول بعد الانتهاء من الوضوء؟',
        problemEn: 'What do you say after finishing Wudu?',
        solutionStepsAr: [
          'نقول دعاء الوضوء المأثور عن النبي ﷺ:',
          '«أَشْهَدُ أَنْ لا إِلَهَ إِلا اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ، اللَّهُمَّ اجْعَلْنِي مِنَ التَّوَّابِينَ وَاجْعَلْنِي مِنَ الْمُتَطَهِّرِينَ».'
        ],
        solutionStepsEn: [
          'Recite the Shahada and the Sunnah supplication for repentance and purification.'
        ],
        finalAnswerAr: 'أشهد أن لا إله إلا الله وحده لا شريك له وأشهد أن محمداً عبده ورسوله، اللهم اجعلني من التوابين واجعلني من المتطهرين.',
        finalAnswerEn: 'Shahada and: "O Allah, make me among the repentant and purified."'
      }
    ],

    assessment: {
      id: 'as-p2-isl3-1',
      titleAr: 'اختبار تقييم المحاضرة 3: الطهارة، الوضوء وآداب الصلاة',
      titleEn: 'Lecture 3 Assessment: Purification, Wudu & Prayer',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-isl3-1',
          textAr: 'ما هو الحديث الشريف الذي يعلمنا أن النظافة والطهارة نصف الإيمان؟',
          textEn: 'Which Hadith teaches that purity is half of faith?',
          optionsAr: [
            '«الطَّهُورُ شَطْرُ الإِيمَانِ»',
            '«الدين المعاملة»',
            '«طلب العلم فريضة»',
            '«تبسمك في وجه أخيك صدقة»'
          ],
          optionsEn: [
            '«الطَّهُورُ شَطْرُ الإِيمَانِ» (Purity is half of Faith)',
            'Religion is transaction',
            'Seeking knowledge is obligatory',
            'Smiling is charity'
          ],
          correctIndex: 0,
          conceptTestedAr: 'فضل الطهارة في الإسلام',
          conceptTestedEn: 'Hadith on Purity being Half of Faith',
          explanationAr: 'قال النبي ﷺ: «الطهور شطر الإيمان»؛ أي أن الطهارة ونظافة البدن من أركان الإيمان العظيمة.',
          explanationEn: 'The Prophet (PBUH) stated that purity is half of faith.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl3-2',
          textAr: 'كم مرة نمسح رأسنا وأذنينا بالماء في الوضوء الصحيح؟',
          textEn: 'How many times do we wipe our head and ears in Wudu?',
          optionsAr: ['مَرَّةً وَاحِدَةً (Once)', '3 مرات', '5 مرات', 'لا نمسح الرأس'],
          optionsEn: ['Once (مرة واحدة)', '3 times', '5 times', 'Do not wipe head'],
          correctIndex: 0,
          conceptTestedAr: 'مسح الرأس مرة واحدة في الوضوء',
          conceptTestedEn: 'Wiping Head Once in Wudu',
          explanationAr: 'السنة النبوية في مسح الرأس والأذنين أن تكون مرة واحدة فقط، بينما باقي الأعضاء تُغسل 3 مرات.',
          explanationEn: 'Wiping the head and ears is performed once.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl3-3',
          textAr: 'إلى أي اتجاه نتوجه عند أداء كل صلاة؟',
          textEn: 'In which direction do we face when performing our daily Salah?',
          optionsAr: [
            'نحو القبلة (الكعبة المشرفة بمكة المكرمة)',
            'نحو أي اتجاه عشوائي',
            'نحو الشمال دائماً',
            'نحو شروق الشمس فقط'
          ],
          optionsEn: [
            'Towards the Qiblah (The Kaaba in Makkah)',
            'Any random direction',
            'Always towards the North',
            'Towards Sunrise only'
          ],
          correctIndex: 0,
          conceptTestedAr: 'استقبال القبلة كشرط لصحة الصلاة',
          conceptTestedEn: 'Facing Qiblah as Prayer Condition',
          explanationAr: 'استقبال القبلة (الكعبة المشرفة) شرط أساسي لصحة صلاة المسلم في أي مكان بالعالم.',
          explanationEn: 'Facing the Holy Kaaba (Qiblah) is a prerequisite for prayer.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl3-4',
          textAr: 'أي مما يلي يُعتبر من مبطلات ونواقض الوضوء؟',
          textEn: 'Which of the following invalidates (nullifies) Wudu?',
          optionsAr: [
            'خروج الريح أو البول أو النوم العميق',
            'شرب الماء العذب',
            'قص الأظافر',
            'تبديل الملابس النظيفة'
          ],
          optionsEn: [
            'Natural bodily excretions or deep sleep',
            'Drinking fresh water',
            'Clipping nails',
            'Changing clean clothes'
          ],
          correctIndex: 0,
          conceptTestedAr: 'نواقض ومبطلات الوضوء',
          conceptTestedEn: 'Nullifiers of Wudu',
          explanationAr: 'يبطل الوضوء بخروج الريح أو البول أو الغائط أو النوم الثقيل، بينما شرب الماء لا يبطل الوضوء.',
          explanationEn: 'Bodily excretions and deep sleep nullify Wudu.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl3-5',
          textAr: 'بأي يد أو رجل نبدأ في غسل الأعضاء المزدوجة أثناء الوضوء؟',
          textEn: 'Which side do we start with when washing pairs of limbs in Wudu?',
          optionsAr: ['بالجانب الأيمن أولاً (Right side first)', 'بالجانب الأيسر', 'لا يهم الترتيب', 'بالرجلين قبل اليدين'],
          optionsEn: ['Right side first (التيامن)', 'Left side', 'Order does not matter', 'Feet before hands'],
          correctIndex: 0,
          conceptTestedAr: 'التيامن والبدء باليمين في الوضوء',
          conceptTestedEn: 'Starting with the Right Limb in Wudu',
          explanationAr: 'من سنن الوضوء البدء باليد اليمنى قبل اليسرى، وبالرجل اليمنى قبل اليسرى.',
          explanationEn: 'Starting with the right limb is an established Sunnah.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: ISLAMIC MORALS (HONORING PARENTS, TEACHERS, PERMISSION & GREETINGS) ──
  {
    id: 'p2-isl-4',
    order: 4,
    titleAr: 'المحاضرة 4: الأخلاق الإسلامية: بر الوالدين، آداب الاستئذان وإفشاء السلام وتوقير المعلم',
    titleEn: 'Lecture 4: Islamic Morals: Honoring Parents, Manners of Seeking Permission & Respecting Teachers',
    subtitleAr: 'التعرف على فضل بر الوالدين، وآداب الاستئذان الثلاثة، وتوقير المعلم والكبير، وإفشاء السلام والمحبة في المجتمع',
    subtitleEn: 'Learn the virtue of honoring parents, rules of seeking permission, respecting teachers, and spreading peace.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - التربية الدينية الإسلامية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Islamic Religious Education (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — القيم والأخلاق والمعاملات',
    unitTitleEn: 'Theme 2: The World Around Me — Islamic Morals & Community Values',
    lessonNumberAr: 'الدرس 4: بر الوالدين، آداب الاستئذان وإفشاء السلام',
    lessonNumberEn: 'Lesson 4: Honoring Parents, Permission Manners & Spreading Peace',

    keyConceptsAr: [
      'بر الوالدين والإحسان إليهما:',
      '  - قال تعالى: ﴿وَقَضَىٰ رَبُّكَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ وَبِالْوَالِدَيْنِ إِحْسَانًا﴾.',
      '  - طاعة الوالدين ومساعدتهما في أعمال المنزل، والتحدث معهما بأدب وصوت خافض، والدعاء لهما: ﴿رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾.',
      'آداب الاستئذان في الإسلام:',
      '  1. الاستئذان ثلاث مرات: نطرق الباب بلطف 3 مرات، فإن أُذن لنا دخلنا، وإن لم يؤذن رجعنا دون غضب.',
      '  2. عدم الوقوف أمام الباب مباشرة: نقف إلى يمين الباب أو يساره حتى لا نرى عورات البيت عند فتحه.',
      '  3. إلقاء السلام وذكر الاسم بوضوح: عندما يُسأل "من بالباب؟" نقول: "أنا فلان" ولا نقول "أنا" فقط.',
      'توقير المعلم واحترام الكبير:',
      '  - المعلم ينير العقول ويعلمنا القرآن والعلوم؛ فمن حقه علينا الاستماع لشرحه والإنصات لأمره وشكره.',
      '  - قال رسول الله ﷺ: «لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا، وَيُوَقِّرْ كَبِيرَنَا».',
      'إفشاء السلام وحفظ اللسان:',
      '  - تحية الإسلام المباركة: «السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ».',
      '  - إفشاء السلام ينشر المحبة والألفة بين الناس.',
      '  - حفظ اللسان عن السب والشتم والكذب ونطق الكلمة الطيبة لأنها صدقة.'
    ],
    keyConceptsEn: [
      'Honoring Parents (Birr Al-Walidayn): Absolute duty of kindness, gentle speech, helping at home, and praying for parents.',
      'Manners of Seeking Permission (Isti\'dhan): Knocking politely up to 3 times, standing beside the door rather than directly in front, stating name clearly, and returning if not answered.',
      'Respecting Teachers & Elders: Attentive listening in class and respecting older generations.',
      'Spreading the Islamic Greeting of Peace ("As-Salamu Alaykum") and speaking noble, kind words.'
    ],

    conceptMapAr: [
      'الأخلاق والآداب ➔ بر الوالدين وطاعتهما ➔ آداب الاستئذان الثلاثة ➔ توقير المعلم واحترام الكبير ➔ إفشاء السلام والكلمة الطيبة'
    ],
    conceptMapEn: [
      'Islamic Morals ➔ Honoring Parents ➔ 3 Manners of Seeking Permission ➔ Respecting Teachers & Elders ➔ Spreading Peace & Kind Words'
    ],

    learningOutcomesAr: [
      'أن يوضح التلميذ فضل بر الوالدين وكيفية الإحسان إليهما بالأقوال والأفعال.',
      'أن يطبق آداب الاستئذان الثلاثة عند دخول المنازل والغرف.',
      'أن يمارس أدب توقير المعلم وإفشاء السلام بالصيغة الإسلامية الكاملة.'
    ],
    learningOutcomesEn: [
      'Demonstrate concrete ways of honoring parents in daily life.',
      'Apply the Islamic etiquette of seeking permission before entering homes/rooms.',
      'Spread the greeting of peace and show respect to teachers and elderly community members.'
    ],

    vocabulary: [
      {
        termAr: 'بِرُّ الوَالِدَيْن',
        termEn: 'Honoring Parents',
        definitionAr: 'طاعة الأب والأم والإحسان إليهما والتحدث معهما بأدب ومساعدتهما والدعاء لهما بالرحمة.'
      },
      {
        termAr: 'الاسْتِئْذَان',
        termEn: 'Seeking Permission',
        definitionAr: 'طلب الإذن بأدب ثلاث مرات قبل دخول بيوت الآخرين أو غرف الوالدين.'
      },
      {
        termAr: 'إِفْشَاءُ السَّلَام',
        termEn: 'Spreading the Greeting of Peace',
        definitionAr: 'إلقاء تحية (السلام عليكم ورحمة الله وبركاته) على من نعرف ومن لا نعرف لنشر المحبة.'
      },
      {
        termAr: 'تَوْقِيرُ الكَبِير',
        termEn: 'Respecting Elders',
        definitionAr: 'احترام كبار السن والمعلمين ومساعدتهم وتقديمهم في الحديث والمجالس.'
      }
    ],

    warmupHookAr: 'عندما ترجع من المدرسة إلى منزلك، كيف تدخل غرفتك وغرفة والديك؟ هل تقتحم الباب مسرعاً، أم تطرق الباب بلطف ثلاث مرات وتقول: "السلام عليكم، أنا أحمد"؟ وكيف تكون ابناً باراً تسعد قلب أمك وأبيك كل يوم؟ إن الأخلاق والآداب الإسلامية تجعل المسلم محبوباً عند الله وعند جميع الناس! تعال لنتعلم أجمل آداب ديننا الحنيف!',
    warmupHookEn: 'When returning home, do you rush in or do you knock gently three times and say "As-Salamu Alaykum"? How can we bring joy to our parents\' hearts every day? Islamic morals make a person beloved to Allah and to everyone! Let us explore these noble manners together!',

    mainContentAr: `
### 1. بر الوالدين والإحسان إليهما (Honoring Parents)
الوالدان هما أعظم نعمة أنعم الله بها علينا؛ سهرت الأم لتعتني بنا وتطعمنا، وتعب الأب ليوفر لنا كل ما نحتاجه:

* 💖 **كيف نبر والدينا؟**
  1. طاعتهما في كل ما يطلبانه منا بحب وسرور.
  2. التحدث معهما بأدب وصوت خافض وتجنب التأفف أو الصراخ.
  3. مساعدتهما في ترتيب الغرفة وتنظيم المنزل.
  4. تقبيل يديهما ورأسيهما والدعاء الدائم لهما: ﴿رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾.

---

### 2. آداب الاستئذان في الإسلام (Seeking Permission)
علمنا نبينا محمد ﷺ آداباً رفيعة عند زيارة الآخرين أو دخول الغرف:

1. 🚪 **الاستئذان ثلاث مرات:** نطرق الباب أو ندق الجرس ثلاث مرات بهدوء، فإن أذنوا دخلنا، وإن لم يجيبوا رجعنا دون غضب.
2. 👥 **الوقوف جانباً:** نقف إلى يمين الباب أو يساره ولا نقف أمام فتحة الباب مباشرة حفاظاً على خصوصية أهل البيت.
3. 🗣️ **ذكر الاسم بوضوح:** عند السؤال: "من بالباب؟" نجيب باسمنا بوضوح (مثلاً: "أنا عمر") ولا نقول: "أنا" فقط!
4. 🕊️ **إلقاء السلام أولاً:** نقول: "السلام عليكم، أأدخل؟".

---

### 3. احترام المعلم وتوقير الكبير (Respecting Teachers & Elders)
* 👩‍🏫 **حق المعلم:** المعلم كالأب يربينا ويعلمنا العلم النافع؛ فمن واجبه علينا الإنصات في الفصل، والحديث معه بأدب، وشكره على جهده.
* 👵 **احترام الكبير:** مساعدة كبار السن في الشارع، والتخلي عن مقعدنا لهم في الحافلة، وعدم مقاطعتهم أثناء الحديث.

---

### 4. إفشاء السلام وحفظ اللسان (Spreading Peace & Good Speech)
* قال النبي ﷺ: «أَفْشُوا السَّلامَ بَيْنَكُمْ تَحَابُّوا».
* **التحية الكاملة:** «السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ» (تنال بها 30 حسنة كاملة!).
* **الكلمة الطيبة صدقة:** نبتعد عن الكذب والشتائم والغيبة، ونتحدث دائماً بالصدق والكلمات الطيبة المشجعة.

---

### 5. Interactive Islamic Manners Board
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Parents & Teachers Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">❤️ بر الوالدين وتوقير المعلم</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">💖 طاعة الأب والأم وخفض الصوت عند محادثتهما</text>
    <text x="25" y="105" fill="#f8fafc" font-size="13">🤲 الدعاء الدائم: ﴿رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾</text>
    <text x="25" y="140" fill="#f8fafc" font-size="13">👩‍🏫 احترام المعلم والإنصات لشرحه في الفصل</text>
    <text x="25" y="175" fill="#34d399" font-size="13" font-weight="bold">«ليس منا من لم يوقر كبيرنا ويرحم صغيرنا»</text>
  </g>

  <!-- Permission & Greetings Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">🚪 آداب الاستئذان وإفشاء السلام</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">1. الاستئذان ثلاث مرات بهدوء</text>
    <text x="25" y="105" fill="#f8fafc" font-size="13">2. الوقوف إلى جانب الباب وليس أمامه مباشرة</text>
    <text x="25" y="140" fill="#f8fafc" font-size="13">3. ذكر الاسم بوضوح وإلقاء السلام</text>
    <text x="25" y="175" fill="#facc15" font-size="13" font-weight="bold">«السلام عليكم ورحمة الله وبركاته» = 30 حسنة</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Honoring Parents & Teachers
* Total kindness, obedience, and prayers for parents.
* Respectful listening and appreciation for teachers.

### 2. Etiquette of Permission & Greetings
* Knock up to 3 times, stand to the side of the door, and clearly state your name.
* Spread the full greeting of peace: "As-Salamu Alaykum wa Rahmatullah".
`,

    workedExamples: [
      {
        id: 'ex-p2-isl4-1',
        titleAr: 'مثال 1: كيف تتصرف عندما تريد دخول غرفة والديك؟',
        titleEn: 'Example 1: Proper Etiquette for Entering Parents\' Room',
        problemAr: 'أردتَ الدخول إلى غرفة والديك لمحادثتهما، فما هو التصرف الإسلامي الصحيح؟',
        problemEn: 'What is the correct Islamic etiquette before entering your parents\' room?',
        stepByStepSolutionAr: [
          'الخطوة 1: لا نفتح الباب فجأة أو نقتحم الغرفة مسرعين.',
          'الخطوة 2: نطرق الباب بلطف 3 مرات ونستأذن قائلين: "السلام عليكم، هل يمكنني الدخول؟".',
          'الخطوة 3: ننتظر حتى يأذن لنا والدا بالدخول، ثم ندخل مبتسمين.',
          'الاستنتاج: الاستئذان وطرق الباب بلطف وإلقاء السلام.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Do not enter abruptly without warning.',
          'Step 2: Knock gently and ask permission with Salam.',
          'Step 3: Wait for permission before stepping inside.'
        ],
        finalAnswerAr: 'طرق الباب بلطف والاستئذان وإلقاء السلام والانتظار حتى يؤذن بالدخول.',
        finalAnswerEn: 'Knock gently, greet with Salam, and wait for permission before entering.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-isl4-1',
        problemAr: 'ما هو الدعاء القرآني المأثور الذي علمنا الله إياه للدعاء للوالدين؟',
        problemEn: 'What Quranic dua did Allah teach us to pray for our parents?',
        solutionStepsAr: [
          'قال الله تعالى في سورة الإسراء:',
          '﴿وَقُل رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾.'
        ],
        solutionStepsEn: [
          'Allah taught us in Surah Al-Isra:',
          '«My Lord, have mercy upon them as they brought me up when I was small».'
        ],
        finalAnswerAr: '﴿رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا﴾.',
        finalAnswerEn: '«Rabbi irhamhuma kama rabbayani sagheera».'
      }
    ],

    assessment: {
      id: 'as-p2-isl4-1',
      titleAr: 'اختبار تقييم المحاضرة 4: بر الوالدين وآداب الاستئذان والسلام',
      titleEn: 'Lecture 4 Assessment: Honoring Parents & Manners of Permission',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-isl4-1',
          textAr: 'كم مرة حثنا النبي ﷺ على الاستئذان وطرق الباب قبل الدخول؟',
          textEn: 'How many times did the Prophet (PBUH) instruct us to seek permission before entering?',
          optionsAr: ['ثَلاثَ مَرَّاتٍ (3 Times)', 'مرة واحدة فقط', 'عشر مرات', 'نفتح الباب مباشرة دون استئذان'],
          optionsEn: ['3 Times (ثلاث مرات)', 'Once only', '10 times', 'Enter immediately without knocking'],
          correctIndex: 0,
          conceptTestedAr: 'آداب الاستئذان ثلاثاً',
          conceptTestedEn: 'Seeking Permission up to 3 Times',
          explanationAr: 'قال النبي ﷺ: «الاستئذان ثلاث، فإن أُذن لك وإلا فارجع».',
          explanationEn: 'The Prophet taught to seek permission up to three times.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl4-2',
          textAr: 'أين يجب أن يقف المستأذن عند طرق باب منزل الآخرين؟',
          textEn: 'Where should a person stand when knocking on someone\'s door?',
          optionsAr: [
            'إلى يمين الباب أو يساره ولا يقف في وسطه مباشرة',
            'في وسط الباب وينظر من ثقب الباب',
            'يدفع الباب بقدمه',
            'يصرخ بصوت عالٍ'
          ],
          optionsEn: [
            'To the right or left side of the door, not facing the opening directly',
            'In the center looking through the keyhole',
            'Kicking the door',
            'Shouting loudly'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مكان الوقوف عند الاستئذان',
          conceptTestedEn: 'Standing to the Side of the Door',
          explanationAr: 'يقف المستأذن يميناً أو يساراً حتى لا يرى ما بداخل البيت عند فتح الباب حفاظاً على خصوصية أهله.',
          explanationEn: 'Standing to the side preserves the privacy of the household.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl4-3',
          textAr: 'ما هي تحية الإسلام المباركة التي نلقيها على إخواننا المسلمين؟',
          textEn: 'What is the full Islamic greeting of peace?',
          optionsAr: [
            '«السَّلامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ»',
            '«صباح الخير» فقط',
            '«مرحباً» دون سلام',
            '«مع السلامة»'
          ],
          optionsEn: [
            '«As-Salamu Alaykum wa Rahmatullahi wa Barakatuh»',
            'Good morning only',
            'Hello only',
            'Goodbye'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تحية الإسلام الكاملة',
          conceptTestedEn: 'The Complete Islamic Greeting of Peace',
          explanationAr: 'تحية الإسلام الكاملة: «السلام عليكم ورحمة الله وبركاته» وثوابها ثلاثون حسنة.',
          explanationEn: 'The complete Islamic greeting yields 30 good deeds.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl4-4',
          textAr: 'أي السلوكيات التالية يُعتبر من صور بر الوالدين والإحسان إليهما؟',
          textEn: 'Which behavior is an example of honoring parents (Birr Al-Walidayn)?',
          optionsAr: [
            'مساعدتهما في المنزل والتحدث معهما بأدب والدعاء لهما',
            'الصراخ في وجههما عند الغضب',
            'رفض طلباتهما',
            'عدم الاستماع لكلامهما'
          ],
          optionsEn: [
            'Helping them at home, speaking politely, and praying for them',
            'Shouting at them',
            'Refusing their requests',
            'Ignoring their instructions'
          ],
          correctIndex: 0,
          conceptTestedAr: 'صور بر الوالدين',
          conceptTestedEn: 'Acts of Honoring Parents',
          explanationAr: 'بر الوالدين يكون بطاعتهما ومساعدتهما والتحدث معهما بخفض الصوت والدعاء لهما بالرحمة.',
          explanationEn: 'Birr Al-Walidayn includes obedience, polite speech, and prayers.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-isl4-5',
          textAr: 'كيف نتصرف عندما يشرح المعلم الدرس داخل الفصل؟',
          textEn: 'How should we behave when the teacher is explaining the lesson in class?',
          optionsAr: [
            'نستمع وننصت باحترام وتركيز ونرفع يدنا عند السؤال',
            'نتحدث مع زملائنا بصوت عالٍ',
            'نلعب بالألعاب أثناء الشرح',
            'نخرج من الفصل دون إذن'
          ],
          optionsEn: [
            'Listen attentively with respect and raise hand before speaking',
            'Talk loudly with classmates',
            'Play with toys',
            'Leave without permission'
          ],
          correctIndex: 0,
          conceptTestedAr: 'آداب احترام المعلم في الفصل',
          conceptTestedEn: 'Etiquette of Respecting Teachers in Class',
          explanationAr: 'من توقير المعلم الإنصات لشرحه باهتمام واستئذانه بأدب عند السؤال.',
          explanationEn: 'Respecting the teacher involves attentive listening and polite participation.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
