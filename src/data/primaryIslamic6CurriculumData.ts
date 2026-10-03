import type { Lecture } from '../types';

// PRIMARY ISLAMIC STUDIES — GRADE 6 (التربية الدينية الإسلامية الصف السادس الابتدائي - نظام التعليم 2.0 المعتمد)
// ============================================================================
// Based on the official Egyptian Ministry of Education (Edu 2.0) guidelines for Grade 6 Islamic Studies.
// Covers:
// Theme 1: Who Am I? (Faith in the Last Day, Divine Decree, Allah's Names, Surah Al-Hashr, Tajweed, Battles of Badr & Uhud, Maryam & Isa).
// Theme 2: The World Around Me (Fiqh of Fasting, Zakat & Sadaqah, Word Integrity, Secret Keeping, Tolerance & Social Responsibility).

export const PRIMARY_ISLAMIC_G6_LECTURES: Lecture[] = [
  // ── LECTURE 1: FAITH IN THE LAST DAY, DIVINE DECREE, ALLAH'S BEAUTIFUL NAMES ──
  {
    id: 'pisl-g6-1',
    order: 1,
    titleAr: 'المحاضرة 1: الإيمان باليوم الآخر والقضاء والقدر، وأسماء الله الحسنى',
    titleEn: 'Lecture 1: Faith in the Last Day, Divine Decree, and Allah\'s Beautiful Names',
    subtitleAr: 'مفهوم البعث والحساب والجزاء، حقيقة القضاء والقدر والأخذ بالأسباب، ودلالات أسماء الله: الواحِد، الأَحَد، الصَّمَد، القَادِر.',
    subtitleEn: 'Resurrection, accountability, divine decree & taking means, and Allah\'s names: Al-Wahid, Al-Ahad, As-Samad, Al-Qadir.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (العقيدة)',
    unitTitleEn: 'Theme 1: Who Am I? — Islamic Creed (Aqeedah)',
    lessonNumberAr: 'الدرس 1: الإيمان باليوم الآخر والقدر وأسماء الله الحسنى',
    lessonNumberEn: 'Lesson 1: The Last Day, Divine Decree & Divine Names',

    warmupHookAr: 'هل فكرت يوماً لماذا نعمل الخير ونتجنب الشر حتى لو لم يرنا أحد؟ لأن هناك يوماً عظيماً يجتمع فيه الناس أمام رب العالمين، فتظهر الحقائق ويُجازى كل إنسان بما عمل بكل عدل ورحمة! هذا هو الإيمان باليوم الآخر.',
    warmupHookEn: 'Have you ever wondered why we do good even when no one sees us? Because of a magnificent Day where everyone stands before Allah, where true justice prevails and every deed is rewarded!',

    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم الإيمان باليوم الآخر ومراحله (البعث، الحشر، الحساب، الميزان، الصراط، الجنة والنار).',
      'أن يستنتج أثر الإيمان باليوم الآخر على استقامة سلوك المسلم وحفظ الأمانة.',
      'أن يشرح مفهوم الإيمان بالقضاء والقدر والربط الحكيم بين الأخذ بالأسباب والتوكل على الله.',
      'أن يتعرف على معاني ودلالات أسماء الله الحسنى: الواحِد، الأَحَد، الصَّمَد، القَادِر.'
    ],
    learningOutcomesEn: [
      'Explain the concept of the Last Day and its stages (Resurrection, Gathering, Reckoning, Paradise & Hellfire).',
      'Deduce the positive moral impact of believing in the Last Day on daily behavior.',
      'Clarify faith in Divine Decree (Qada & Qadr) and combining action with trust in Allah.',
      'Understand Allah\'s Names: Al-Wahid, Al-Ahad, As-Samad, Al-Qadir.'
    ],

    vocabulary: [
      {
        termAr: 'اليوم الآخر (The Last Day)',
        termEn: 'The Last Day / Day of Judgment',
        definitionAr: 'يوم القيامة الذي تنتهي فيه الحياة الدنيا، ويبعث الله فيه الخلائق للحساب والجزاء.',
        definitionEn: 'The Day of Resurrection when worldly life ends and all creations are resurrected for judgment.'
      },
      {
        termAr: 'القضاء والقدر (Divine Decree)',
        termEn: 'Divine Decree and Predestination',
        definitionAr: 'علم الله الأزلي بكل ما سيحدث وتقديره للأشياء بحكمته مع منح الإنسان الإرادة والاختيار.',
        definitionEn: 'Allah\'s timeless knowledge and decree of all events, granting humans free will and accountability.'
      },
      {
        termAr: 'الصَّمَد (As-Samad)',
        termEn: 'The Eternal Refuge',
        definitionAr: 'السيد الكامل الذي تلجأ وتصمد إليه جميع المخلوقات في حوائجها ولا يحتاج لأحد.',
        definitionEn: 'The Self-Sufficient Master upon whom all creatures depend for their needs, needing none.'
      },
      {
        termAr: 'القَادِر (Al-Qadir)',
        termEn: 'The All-Powerful',
        definitionAr: 'الذي لا يعجزه شيء في الأرض ولا في السماء، ويفعل ما يشاء بحكمته.',
        definitionEn: 'The One possessing absolute power, whom nothing in the heavens or earth can overcome.'
      }
    ],

    keyConceptsAr: [
      'الإيمان باليوم الآخر هو الركن الخامس من أركان الإيمان، ويغرس في النفس الضمير الحي واستشعار رقابة الله الدائمة.',
      'الإيمان بالقضاء والقدر يبعث الطمأنينة في القلب؛ والمسلم يأخذ بالأسباب بجدية كاملة ويتوكل على الله.',
      'أسماء الله: (الواحد والأحد) تدل على نفي الشريك والشبيه، و(الصمد) يدل على حاجة الخلائق إليه، و(القادر) يثبت طلاقة قدرته سبحانه.'
    ],
    keyConceptsEn: [
      'Belief in the Last Day is the 5th pillar of Iman, fostering continuous conscience and awareness of Allah.',
      'Belief in Divine Decree brings inner peace; a Muslim takes full practical means while trusting Allah.',
      'Names: Al-Wahid & Al-Ahad affirm absolute oneness; As-Samad affirms total dependency on Him; Al-Qadir affirms infinite power.'
    ],

    summaryAr: 'تعرفنا في هذا الدرس على ركنين عظيمين من أركان الإيمان: الإيمان باليوم الآخر وأثره في الأخلاق والعدل، والإيمان بالقضاء والقدر والتوكل الإيجابي، وتدبرنا معاني أسماء الله (الواحد، الأحد، الصمد، القادر).',
    summaryEn: 'In this lesson, we explored two vital pillars of faith: the Last Day and Divine Decree, alongside reflections on Allah\'s Names: Al-Wahid, Al-Ahad, As-Samad, and Al-Qadir.',

    mainContentAr: `
### 1. الإيمان باليوم الآخر (أحداثه وحكمته وأثره)
- **معنى الإيمان باليوم الآخر:** هو الركن الخامس من أركان الإيمان الستة؛ وهو التصديق الجازم بأن الله سبحانه سيبعث الناس بعد موتهم ليحاسبهم على ما قدموا في حياتهم الدنيا.
- **مراحل اليوم الآخر:**
  1. **البعث:** إحياء الموتى وإخراجهم من قبورهم بقدرة الله تعالى.
  2. **الحشر:** جمع الخلائق في أرض المحشر انتظاراً للحساب.
  3. **الحساب وعرض الأعمال:** يقف كل إنسان بين يدي الله وتُعرض عليه صحيفة أعماله: ﴿فَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ خَيْرًا يَرَهُ * وَمَن يَعْمَلْ مِثْقَالَ ذَرَّةٍ شَرًّا يَرَهُ﴾.
  4. **الميزان والجزاء:** تُوزن الحسنات والسيئات بميزان العدل الإلهي؛ فالفائزون إلى جنات النعيم برحمة الله، والمفرطون الظالمون إلى عذاب النار.
- **أثر الإيمان باليوم الآخر في سلوك المسلم:**
  - يمنح الإنسان راحة نفسية ويقيناً بأن المظالم ستُرد وأن الحقوق لا تضيع.
  - يحث المسلم على الصدق، الأمانة، مساعدة المحتاجين، والابتعاد عن الظلم والغش.

---

### 2. الإيمان بالقضاء والقدر والجمع بين التوكل والأخذ بالأسباب
- **مفهوم القضاء والقدر:** هو الركن السادس من أركان الإيمان؛ ويعني الإيقان بأن كل ما يقع في هذا الكون هو بعلم الله وإرادته وحكمته.
- **علاقة القدر بإرادة الإنسان:** خلق الله الإنسان ومنحه عقلاً وإرادة حرة يميز بها بين الخير والشر؛ ولذلك يُحاسب الإنسان على اختياراته وأفعاله.
- **الأخذ بالأسباب والتوكل:** لا يعني القدر التكاسل والقعود؛ بل أمرنا الإسلام بالاجتهاد والعمل والأخذ بجميع الأسباب المشروعة، ثم تفويض النتيجة لله (كما قال النبي ﷺ لصاحب الناقة: "اعْقِلْهَا وَتَوَكَّلْ").
- **ثمرات الإيمان بالقدر:** الصبر عند الشدائد، الشكر عند النعم، والشجاعة والرضا دون جزع أو حسد.

---

### 3. أسماء الله الحسنى المقررة
- **الواحِد والأَحَد:** 
  - **الواحِد:** الذي لا شريك له في ملكه ولا إله غيره.
  - **الأَحَد:** المنفرد بالكمال المطلق الذي لا نظير له ولا مثيل ولا يتجزأ، كما في سورة الإخلاص: ﴿قُلْ هُوَ اللَّهُ أَحَدٌ﴾.
- **الصَّمَد:** الذي تصمد وتلجأ إليه كل الخلائق في قضاء حوائجها وشدائدها، وهو الغني عن كل خلقه المطعم الذي لا يُطعم.
- **القَادِر:** التام القدرة الذي إذا أراد شيئاً قال له "كُن فيكون"، لا يُعجزه شيء في السماوات ولا في الأرض، وهو قادر على إحياء الموتى وحماية المؤمنين.
`,
    assessment: {
      id: 'assess-isl6-1',
      titleAr: 'تقييم المحاضرة 1: الإيمان باليوم الآخر والقضاء والقدر وأسماء الله الحسنى',
      titleEn: 'Assessment 1: Faith in the Last Day, Divine Decree & Allah\'s Names',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl6-1-1',
          textAr: 'ما هو الترتيب الصحيح للإيمان باليوم الآخر بين أركان الإيمان الستة؟',
          textEn: 'What is the order of Belief in the Last Day among the six pillars of Iman?',
          optionsAr: ['الركن الثالث', 'الركن الخامس', 'الركن الثاني', 'الركن السادس'],
          optionsEn: ['Third Pillar', 'Fifth Pillar', 'Second Pillar', 'Sixth Pillar'],
          correctIndex: 1,
          conceptTestedAr: 'أركان الإيمان',
          conceptTestedEn: 'Pillars of Faith',
          difficulty: 'easy',
          explanationAr: 'الإيمان باليوم الآخر هو الركن الخامس من أركان الإيمان الستة.',
          explanationEn: 'Belief in the Last Day is the fifth pillar of faith in Islam.'
        },
        {
          id: 'q-isl6-1-2',
          textAr: 'ما المعنى الدقيق لاسم الله تعالى "الصَّمَد"؟',
          textEn: 'What is the precise meaning of Allah\'s name "As-Samad"?',
          optionsAr: [
            'الذي يحتاج إليه جميع الخلائق في حوائجهم وهو مستغنٍ عنهم',
            'الذي يعلم السر وأخفى في الصدور',
            'الذي يغفر الذنوب جميعاً لعباده التائبين',
            'الذي خلق السماوات والأرض في ستة أيام'
          ],
          optionsEn: [
            'The Master whom all creatures rely upon for their needs while He needs none',
            'The One who knows all secrets in the hearts',
            'The One who forgives all sins for those who repent',
            'The One who created the heavens and earth in six days'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أسماء الله الحسنى (الصمد)',
          conceptTestedEn: 'Allah\'s Names (As-Samad)',
          difficulty: 'medium',
          explanationAr: 'الصمد هو السيد الذي تقصده جميع الخلائق وتلجأ إليه في كل حوائجها، وهو الغني التام عن خلقه.',
          explanationEn: 'As-Samad means the Eternal Refuge whom all creations depend on, while He is self-sufficient.'
        },
        {
          id: 'q-isl6-1-3',
          textAr: 'كيف يطبق المسلم الإيمان بالقضاء والقدر عند خوض الامتحانات أو السعي للرزق؟',
          textEn: 'How does a Muslim implement belief in Divine Decree when taking exams or seeking sustenance?',
          optionsAr: [
            'بالاعتماد على التمني دون دراسة لأن النتيجة مكتوبة مسبقاً',
            'بالأخذ بجميع أسباب المذاكرة والاجتهاد مع التوكل التام والرضا بقضاء الله',
            'بترك العمل وانتظار الفرج دون أي سعي عملي',
            'بالقلق المستمر والخوف الشديد من المستقبل'
          ],
          optionsEn: [
            'By wishing without studying because outcomes are already written',
            'By studying diligently while putting full trust in Allah and accepting His decree',
            'By neglecting effort and waiting passively',
            'By succumbing to constant anxiety and fear of the future'
          ],
          correctIndex: 1,
          conceptTestedAr: 'الجمع بين الأخذ بالأسباب والتوكل',
          conceptTestedEn: 'Combining Effort with Trust in Allah',
          difficulty: 'medium',
          explanationAr: 'علمنا النبي ﷺ أن نأخذ بالأسباب بكل جدية ثم نتوكل على الله: "اعقلها وتوكل".',
          explanationEn: 'The Prophet taught us to take all necessary means diligently while placing our trust in Allah.'
        }
      ]
    }
  },

  // ── LECTURE 2: SURAH AL-HASHR & PRACTICAL TAJWEED RULES ──
  {
    id: 'pisl-g6-2',
    order: 2,
    titleAr: 'المحاضرة 2: سورة الحشر وتدبرها، وتطبيقات أحكام التجويد (الميم الساكنة والمدود)',
    titleEn: 'Lecture 2: Surah Al-Hashr & Tajweed Rules (Meem Sakinah & Madd)',
    subtitleAr: 'تفسير وتدبر مقاصد سورة الحشر، وأحكام الميم الساكنة الثلاثة، ومراجعة أحكام التنوين وأنواع المدود.',
    subtitleEn: 'Tafseer and reflections on Surah Al-Hashr, the 3 rules of Meem Sakinah, and Madd classifications.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (القرآن والتجويد)',
    unitTitleEn: 'Theme 1: Who Am I? — Quran & Tajweed',
    lessonNumberAr: 'الدرس 2: سورة الحشر وأحكام التجويد',
    lessonNumberEn: 'Lesson 2: Surah Al-Hashr & Rules of Tajweed',

    warmupHookAr: '﴿لَوْ أَنزَلْنَا هَٰذَا الْقُرْآنَ عَلَىٰ جَبَلٍ لَّرَأَيْتَهُ خَاشِعًا مُّتَصَدِّعًا مِّنْ خَشْيَةِ اللَّهِ﴾.. ما سر هذه الآية العظيمة من أواخر سورة الحشر؟ وكيف يحرك القرآن قلوبنا عندما نتلوه بأحكام التجويد الصحيحة؟',
    warmupHookEn: '"Had We sent down this Quran upon a mountain, you would have seen it humbled and splitting from fear of Allah." What makes this verse in Surah Al-Hashr so transformative, especially when recited with Tajweed?',

    learningOutcomesAr: [
      'أن يتعرف الطالب على مقاصد سورة الحشر وسبب تسميتها وموضوعاتها الرئيسية.',
      'أن يستنبط المعاني التربوية في آيات الإيثار وتقوى الله والاستعداد للغد.',
      'أن يتقن أحكام الميم الساكنة الثلاثة: الإخفاء الشفوي، الإدغام الصغير، والإظهار الشفوي.',
      'أن يميز بين أنواع المد الطبيعي والمدود الفرعية الناشئة عن الهمز أو السكون.'
    ],
    learningOutcomesEn: [
      'Learn the core objectives of Surah Al-Hashr, naming rationale, and central themes.',
      'Deduce moral lessons: selflessness (Ithar), Taqwa, and spiritual preparation for the hereafter.',
      'Master the three rules of Meem Sakinah: Oral Hiding, Oral Idgham, and Oral Manifestation.',
      'Distinguish between natural Madd and secondary Madd caused by Hamzah or Sukun.'
    ],

    vocabulary: [
      {
        termAr: 'سورة الحشر (Surah Al-Hashr)',
        termEn: 'Surah Al-Hashr (The Gathering)',
        definitionAr: 'سورة مدنية تُبرز عظمة قدرة الله، وتوزيع الفيء، وفضل الأنصار في الإيثار، وأهمية محاسبة النفس.',
        definitionEn: 'A Madani Surah highlighting Allah\'s absolute power, the virtue of the Ansar in sharing, and self-accounting.'
      },
      {
        termAr: 'الإخفاء الشفوي (Oral Hiding)',
        termEn: 'Ikhfa Shafawi',
        definitionAr: 'حكم للميم الساكنة إذا جاء بعدها حرف الباء (ب)، مع بقاء الغنة بمقدار حركتين.',
        definitionEn: 'Tajweed rule applied when a silent Meem is followed by Baa (ب), recited with nasal sound (Ghunnah).'
      },
      {
        termAr: 'الإدغام الصغير الشفوي (Oral Idgham)',
        termEn: 'Idgham Shafawi (Mutamathilayn)',
        definitionAr: 'إدخال الميم الساكنة في ميم متحركة تليها لتنطقا ميماً واحدة مشددة بغنة.',
        definitionEn: 'Merging a silent Meem into a following vowelled Meem, pronounced as one doubled Meem with Ghunnah.'
      },
      {
        termAr: 'المَدّ (Madd / Prolongation)',
        termEn: 'Madd (Elongation of Vowels)',
        definitionAr: 'إطالة الصوت بأحد أحرف المد الثلاثة (الألف الساكنة المفتوح ما قبلها، الواو الساكنة المضموم ما قبلها، الياء الساكنة المكسور ما قبلها).',
        definitionEn: 'Prolonging the sound of the three Madd letters (Alif, Waw, Yaa) under specific phonetic conditions.'
      }
    ],

    keyConceptsAr: [
      'سورة الحشر تعلم المسلم محاسبة النفس: ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ﴾.',
      'أحكام الميم الساكنة ثلاثة: إخفاء شفوي (مع حرف الباء)، إدغام مثلين صغير (مع حرف الميم)، وإظهار شفوي (مع باقي الحروف الـ 26).',
      'المد نوعان: أصلي (طبيعي يمد حركتين) وفرعي (بسبب همز أو سكون مثل المد المتصل والمنفصل واللازم والعارض).'
    ],
    keyConceptsEn: [
      'Surah Al-Hashr instills self-accountability: "O believers! Fear Allah and let every soul consider what it has put forth for tomorrow."',
      'Meem Sakinah has 3 rules: Ikhfa Shafawi (before Baa), Idgham Shafawi (before Meem), and Izhar Shafawi (remaining 26 letters).',
      'Madd is divided into original (natural - 2 beats) and secondary (due to Hamzah or Sukun).'
    ],

    summaryAr: 'شرحنا في هذه المحاضرة مقاصد سورة الحشر العظيمة، وتطبيقات أحكام التجويد العملية للميم الساكنة وأنواع المدود، مما يعين الطالب على تلاوة كتاب الله بخشوع وإتقان.',
    summaryEn: 'We covered the profound themes of Surah Al-Hashr, practical Tajweed rulings for silent Meem, and vowel elongation (Madd).',

    mainContentAr: `
### 1. سورة الحشر (أهدافها ومقاصدها الإيمانية)
- **سبب النزول والتعريف:** سورة مدنية تسمى أيضاً سورة بني النضير؛ وتبين كيف ينصر الله عباده المؤمنين ويدافع عنهم.
- **أبرز موضوعات السورة:**
  - **تسبيح الكائنات:** افتتحت السورة واختتمت بتسبيح الله وعزته وحكمته.
  - **خلق الإيثار ومحبة الخير:** مدح الله تعالى الأنصار الذين أحبوا إخوانهم المهاجرين وقاسموهم ديارهم وأموالهم: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾.
  - **محاسبة النفس وتقوى الله:** ﴿يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ وَلْتَنظُرْ نَفْسٌ مَّا قَدَّمَتْ لِغَدٍ﴾؛ أي حاسبوا أنفسكم قبل أن تحاسبوا.
  - **عظمة القرآن الكريم وأسماء الله الحسنى:** بينت الآيات الأخيرة أثر القرآن في الخشوع، وسردت طائفة جليلة من أسماء الله وصفاته العلى.

---

### 2. أحكام الميم الساكنة (أحكام شفوية)
الميم الساكنة هي الميم الخالية من الحركة (مْ)، ولها عند التقائها بحروف الهجاء ثلاثة أحكام:
1. **الإخفاء الشفوي:** 
   - **حرفه:** حرف واحد فقط وهو **الباء (ب)**.
   - **طريقة النطق:** تنطق الميم غير مظهرة ولا مدغمة تماماً مع مراعاة الغنة بمقدار حركتين.
   - **مثال:** ﴿تَرْمِيهِم بِحِجَارَةٍ﴾، ﴿فَاحْكُم بَيْنَهُم﴾.
2. **الإدغام الشفوي (إدغام متماثلين صغير):**
   - **حرفه:** حرف واحد فقط وهو **الميم (م)**.
   - **طريقة النطق:** تُدغم الميم الساكنة في الميم التي تليها لتصبحا ميماً مشددة بغنة مقدارها حركتان.
   - **مثال:** ﴿لَهُم مَّا يَشَاءُونَ﴾، ﴿كُنتُم مُّؤْمِنِينَ﴾.
3. **الإظهار الشفوي:**
   - **حروفه:** جميع الحروف الهجائية المتبقية (26 حرفاً).
   - **طريقة النطق:** نطق الميم الساكنة واضحة ومستقلة دون زيادة في الغنة، مع الحذر من إخفائها عند حَرفي **الواو والفاء** لقرب المخرج.
   - **مثال:** ﴿أَلَمْ تَرَ﴾، ﴿عَلَيْهِمْ وَلَا الضَّالِّينَ﴾.

---

### 3. مراجعة وتطبيق أحكام المدود
- **المد الطبيعي (الأصلي):** لا يتوقف على سبب (همز أو سكون)، ويمد بمقدار حركتين، مثل: (قَالَ، يَقُولُ، قِيلَ).
- **المد الفرعي:** مد زائد على المد الطبيعي وله سببان:
  1. **بسبب الهمز:** كالمد المتصل (في كلمة واحدة: ﴿السَّمَاء﴾) والمد المنفصل (حرف المد في كلمة والهمزة في كلمة تالية: ﴿إِنَّا أَعْطَيْنَاكَ﴾).
  2. **بسبب السكون:** كالمد العارض للسكون (عند الوقف على آخر الآية: ﴿الْعَالَمِينَ﴾) والمد اللازم (﴿الضَّالِّينَ﴾).
`,
    assessment: {
      id: 'assess-isl6-2',
      titleAr: 'تقييم المحاضرة 2: سورة الحشر وأحكام التجويد',
      titleEn: 'Assessment 2: Surah Al-Hashr & Tajweed Rules',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl6-2-1',
          textAr: 'ما الحكم التجويدي للميم الساكنة في قوله تعالى: ﴿تَرْمِيهِم بِحِجَارَةٍ﴾؟',
          textEn: 'What is the Tajweed rule for the silent Meem in ﴿تَرْمِيهِم بِحِجَارَةٍ﴾?',
          optionsAr: ['إظهار شفوي', 'إخفاء شفوي', 'إدغام صغير', 'قلقلة كبرى'],
          optionsEn: ['Izhar Shafawi', 'Ikhfa Shafawi', 'Idgham Saghir', 'Qalqalah Kubra'],
          correctIndex: 1,
          conceptTestedAr: 'أحكام الميم الساكنة (الإخفاء الشفوي)',
          conceptTestedEn: 'Rules of Meem Sakinah (Ikhfa Shafawi)',
          difficulty: 'medium',
          explanationAr: 'جاء بعد الميم الساكنة حرف الباء (ب)، فحكمها الإخفاء الشفوي مع الغنة.',
          explanationEn: 'The silent Meem is followed by the letter Baa (ب), which requires Ikhfa Shafawi with Ghunnah.'
        },
        {
          id: 'q-isl6-2-2',
          textAr: 'ما الخلق العظيم الذي مدح الله به أهل المدينة (الأنصار) في سورة الحشر؟',
          textEn: 'Which great virtue did Allah praise the Ansar for in Surah Al-Hashr?',
          optionsAr: [
            'الإيثار ومحبة إخوانهم المهاجرين وتقديمهم على أنفسهم',
            'بناء الحصون والأسوار المرتفعة لحماية المدينة',
            'التجارة في الأسواق والربح الوفير',
            'اعتزال الناس والابتعاد عن مجالس العلم'
          ],
          optionsEn: [
            'Selflessness (Ithar) and preferring the Muhajirun over themselves',
            'Building high fortresses around the city',
            'Engaging in extensive trade and maximizing profits',
            'Isolating themselves from society and learning circles'
          ],
          correctIndex: 0,
          conceptTestedAr: 'فضائل الأنصار والإيثار في سورة الحشر',
          conceptTestedEn: 'Virtues of Ansar & Selflessness in Surah Al-Hashr',
          difficulty: 'easy',
          explanationAr: 'قال تعالى عن الأنصار: ﴿وَيُؤْثِرُونَ عَلَىٰ أَنفُسِهِمْ وَلَوْ كَانَ بِهِمْ خَصَاصَةٌ﴾ وهو قمة الإيثار والجود.',
          explanationEn: 'Allah praised the Ansar for their selflessness: preferring others even when in personal need.'
        },
        {
          id: 'q-isl6-2-3',
          textAr: 'لماذا يجب الحذر الشديد من إخفاء الميم الساكنة عند مجيئها قبل حرفي (الواو والفاء)؟',
          textEn: 'Why must one take extra care not to hide the silent Meem when followed by Waw or Faa?',
          optionsAr: [
            'لأنهما من حروف القلقلة',
            'لقرب مخرج الفاء واتحاد مخرج الواو مع مخرج الميم الشفوي فيجب إظهارها',
            'لأن الواو والفاء يحولان الميم الساكنة إلى نون ساكنة',
            'لأن الميم لا تقرأ إذا سبقت حرف الواو'
          ],
          optionsEn: [
            'Because they are letters of Qalqalah',
            'Due to closeness of articulation (lip exit point) with Faa and union with Waw, requiring strict Izhar',
            'Because Waw and Faa transform Meem into Noon',
            'Because Meem is silent before Waw'
          ],
          correctIndex: 1,
          conceptTestedAr: 'تنبيهات الإظهار الشفوي عند الواو والفاء',
          conceptTestedEn: 'Izhar Shafawi precautions with Waw & Faa',
          difficulty: 'hard',
          explanationAr: 'يجب إظهار الميم الساكنة عند الواو والفاء بشدة لاتحاد مخرج الميم مع الواو وقربه من مخرج الفاء.',
          explanationEn: 'Strict Izhar is required before Waw and Faa due to shared lip articulation points.'
        }
      ]
    }
  },

  // ── LECTURE 3: PROPHETIC SEERAH (BADR & UHUD) & STORIES OF MARYAM & ISA (AS) ──
  {
    id: 'pisl-g6-3',
    order: 3,
    titleAr: 'المحاضرة 3: من السيرة والقصص: غزوات النبي ﷺ (بدر وأحد) وقصتا مريم وعيسى عليهما السلام',
    titleEn: 'Lecture 3: Prophetic Seerah: Battles of Badr & Uhud, and Stories of Maryam & Isa (AS)',
    subtitleAr: 'التخطيط وحسن الإدارة في غزوتي بدر وأحد والدروس المستفادة، ومكانة مريم البتول ومعجزة ولادة النبي عيسى عليه السلام.',
    subtitleEn: 'Strategic planning & lessons of Badr and Uhud, the purity of Maryam, and the miraculous birth of Isa (AS).',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (السيرة والقصص)',
    unitTitleEn: 'Theme 1: Who Am I? — Seerah & Quranic Stories',
    lessonNumberAr: 'الدرس 3: غزوات النبي ﷺ وقصتا مريم وعيسى عليهما السلام',
    lessonNumberEn: 'Lesson 3: Prophetic Battles & Maryam and Isa',

    warmupHookAr: 'في غزوة أحد، انتصر المسلمون في بداية المعركة بفضل التزام الرماة بأمر النبي ﷺ، ولكن عندما خالف بعضهم الأمر وتركوا الجبل طلباً للغنائم انقلبت الموازين! ما العبرة التي نتعلمها من هذه الحادثة الخالدة في تاريخنا الإسلامي؟',
    warmupHookEn: 'At the Battle of Uhud, early victory was secured when archers held their positions. But when some abandoned the mountain for spoils, the battle turned! What timeless lesson in discipline does this teach us?',

    learningOutcomesAr: [
      'أن يشرح الطالب أسباب وأحداث غزوة بدر الكبرى (2 هـ) ودور مبدأ الشورى والنصر الإلهي.',
      'أن يحلل خطة النبي ﷺ في غزوة أحد (3 هـ) والدرس الحاسم في خطورة مخالفة أمر القائد والحرص على الدنيا.',
      'أن يتعرف على سيرة السيدة مريم عليها السلام ونشأتها في المحراب واصطفاء الله لها وطهارتها.',
      'أن يوضح معجزة ولادة نبي الله عيسى عليه السلام من غير أب، ومعجزاته في إبراء الأكمه والأبرص وإحياء الموتى بإذن الله.'
    ],
    learningOutcomesEn: [
      'Understand the causes and events of the Battle of Badr (2 AH) and the role of Shura (consultation).',
      'Analyze the strategy of Uhud (3 AH) and the vital lesson of obedience to leadership and discipline.',
      'Learn about Maryam (AS), her devout upbringing in the sanctuary, and her selection by Allah.',
      'Clarify the miraculous birth of Isa (Jesus, AS) without a father, and his miracles by Allah\'s permission.'
    ],

    vocabulary: [
      {
        termAr: 'غزوة بدر الكبرى (Battle of Badr)',
        termEn: 'The Battle of Badr (2 AH)',
        definitionAr: 'أول معركة فاصلة بين المسلمين ومشركي قريش (17 رمضان 2 هـ)، وسماها الله في القرآن "يوم الفرقان".',
        definitionEn: 'The first decisive battle between Muslims and Quraysh (2 AH), called "The Day of Criterion" in the Quran.'
      },
      {
        termAr: 'غزوة أُحُد (Battle of Uhud)',
        termEn: 'The Battle of Uhud (3 AH)',
        definitionAr: 'معركة وقعت في شوال 3 هـ عند جبل أحد، ووضحت أهمية طاعة الأوامر العسكرية وعواقب الطمع.',
        definitionEn: 'Battle in 3 AH near Mount Uhud that demonstrated the crucial consequences of obeying commands and unity.'
      },
      {
        termAr: 'السيدة مريم عليها السلام (Maryam / Mary)',
        termEn: 'Maryam (Mary, Mother of Jesus)',
        definitionAr: 'سيدة نساء العالمين الصديقة العابدة التي خصص لها القرآن سورة باسمها واصطفاها الله وطهرها.',
        definitionEn: 'The devout virgin chosen above all women of creation, mother of Prophet Isa, honored with a Quranic chapter.'
      },
      {
        termAr: 'عيسى بن مريم عليه السلام (Prophet Isa)',
        termEn: 'Prophet Isa (Jesus son of Mary)',
        definitionAr: 'رسول الله وكلمته ألقاها إلى مريم وروح منه، أرسله الله إلى بني إسرائيل مبشراً ومعلماً وداعياً للتوحيد.',
        definitionEn: 'A noble messenger of Allah sent to the Children of Israel with miracles, preaching pure monotheism.'
      }
    ],

    keyConceptsAr: [
      'النبي ﷺ كان يمارس مبدأ الشورى قبل كل قرار مهم (كما استشار أصحابه في بدر وأحد وأخذ برأي الحباب بن المنذر وسلمان الفارسي).',
      'الانضباط وطاعة القيادة أساس كل نجاح، ومخالفة الرماة في أحد لأمر النبي علمت الأمة درساً لا ينسى.',
      'معجزة ولادة عيسى عليه السلام بلا أب تثبت طلاقة قدرة الله تعالى: ﴿إِنَّ مَثَلَ عِيسَىٰ عِندَ اللَّهِ كَمَثَلِ آدَمَ خَلَقَهُ مِن تُرَابٍ﴾.'
    ],
    keyConceptsEn: [
      'The Prophet practiced Shura (consultation) before decisive battles, valuing collective wisdom.',
      'Discipline and obedience to leadership are vital; the archers\' deviation at Uhud provided a profound lesson.',
      'The birth of Isa without a father demonstrates Allah\'s absolute creative power, likened to the creation of Adam.'
    ],

    summaryAr: 'استعرضنا دروساً عميقة من غزوتي بدر وأحد في القيادة والشورى وعواقب الطمع، وتعرفنا على السيرة العطرة للسيدة مريم العذراء ومعجزة ولادة ورسالة نبي الله عيسى عليه السلام.',
    summaryEn: 'We derived enduring lessons from the Battles of Badr and Uhud, and explored the purity of Maryam and the prophetic mission of Isa (AS).',

    mainContentAr: `
### 1. غزوة بدر الكبرى (يوم الفرقان - رمضان 2 هـ)
- **الأسباب والمقدمات:** بعد أن استقر المسلمون بالمدينة، حاولوا استرداد بعض أموالهم التي نهبتها قريش باعتراض قافلة أبي سفيان؛ فخرجت قريش بجيش قوامه نحو ألف مقاتل معتزة بقوتها.
- **التخطيط ومبدأ الشورى:**
  - استشار النبي ﷺ أصحابه من المهاجرين والأنصار فأبدوا استعدادهم التام للدفاع عن الحق.
  - نزل النبي ﷺ عند أدنى ماء من قريش برأي الصحابي الجليل الحباب بن المنذر.
- **النتيجة والدروس:**
  - انتصر المسلمون (وكان عددهم 313 رجلاً) نصراً مؤزراً وتأييداً بملائكة من السماء.
  - النصر من عند الله بالصبر والإخلاص والأخذ بالأسباب، وليس بكثرة العدد والعتاد.

---

### 2. غزوة أحد (شوال 3 هـ) والدروس المستفادة
- **الهدف والخطة النبوية:** خرجت قريش بجيش كبير (3000 مقاتل) للثأر لهزيمتهم في بدر.
- **خطة النبي ﷺ العسكرية:** وضع خمسين من أمهر الرماة على جبل الرماة (جبل عينين) لحماية ظهور المسلمين، وأمرهم أمراً قاطعاً: "لا تبرحوا مكانكم إن رأيتمونا نُهزم أو نغنم حتى أرسل إليكم".
- **نقطة التحول:** عندما لاحت بوادر النصر، نزل معظم الرماة لجمع الغنائم ظناً بانتهاء المعركة، فالتف خالد بن الوليد (قبل إسلامه) بفرسان قريش وهاجم المسلمين من الخلف.
- **العبر المستفادة:**
  - خطورة مخالفة أوامر القيادة، وأن حب الدنيا والمطامع الشخصية سبب للهزيمة والفشل.
  - ثبات النبي ﷺ وشجاعته النادرة في الدفاع عن العقيدة والمسلمين حتى استعاد الجيش توازنه.

---

### 3. قصة السيدة مريم عليها السلام ونبي الله عيسى عليه السلام
- **نشأة السيدة مريم:** نذرتها أمها (امرأة عمران) لخدمة بيت المقدس، وكفلها نبي الله زكريا عليه السلام، وكانت مثالاً في العفة والعبادة: ﴿كُلَّمَا دَخَلَ عَلَيْهَا زَكَرِيَّا الْمِحْرَابَ وَجَدَ عِندَهَا رِزْقًا﴾.
- **اصطفاء الله لها والبشارة:** أرسل الله إليها جبريل عليه السلام يبشرها بغلام زكي تلده بمعجزة إلهية دون أن يمسها بشر.
- **مولد عيسى عليه السلام ومعجزاته:**
  - ولدته تحت جذع النخلة، وأنطقه الله في المهد صبياً ليبرئ أمه الطاهرة: ﴿قَالَ إِنِّي عَبْدُ اللَّهِ آتَانِيَ الْكِتَابَ وَجَعَلَنِي نَبِيًّا﴾.
  - أيده الله بمعجزات باهرة: شفاء الأعمى والأبرص، وإحياء الموتى بإذن الله، وإخبار الناس بما يدخرون في بيوتهم.
  - دعا بني إسرائيل إلى توحيد الله وإخلاص العبادة له وحده لا شريك له.
`,
    assessment: {
      id: 'assess-isl6-3',
      titleAr: 'تقييم المحاضرة 3: غزوات النبي وقصتا مريم وعيسى عليهما السلام',
      titleEn: 'Assessment 3: Prophetic Battles and Maryam & Isa (AS)',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl6-3-1',
          textAr: 'ما السبب الرئيسي لتحول نصر المسلمين الأولي إلى اضطراب وخسائر في غزوة أحد؟',
          textEn: 'What was the main reason the initial Muslim victory turned into distress at Uhud?',
          optionsAr: [
            'قلة شجاعة المسلمين في القتال',
            'نزول أغلب الرماة عن الجبل لجمع الغنائم ومخالفتهم أمر النبي ﷺ الصريح',
            'نفاد السلاح والزاد من معسكر المسلمين',
            'عدم استشارة النبي ﷺ لأصحابه قبل المعركة'
          ],
          optionsEn: [
            'Lack of courage among Muslim fighters',
            'Archers leaving the mountain for spoils, disobeying the Prophet\'s explicit command',
            'Running out of food and arrows',
            'Neglecting consultation before the battle'
          ],
          correctIndex: 1,
          conceptTestedAr: 'دروس غزوة أحد وطاعة القائد',
          conceptTestedEn: 'Lessons of Uhud & Obedience to Leadership',
          difficulty: 'medium',
          explanationAr: 'كان نزول الرماة وتركهم لمواقعهم الاستراتيجية هو الثغرة التي استغلها فرسان قريش للالتفاف.',
          explanationEn: 'The archers leaving their posts against orders allowed the enemy to flank the Muslim army.'
        },
        {
          id: 'q-isl6-3-2',
          textAr: 'من هو النبي الذي كَفَل السيدة مريم عليها السلام ورعاها في محراب عبادتها؟',
          textEn: 'Which Prophet sponsored Maryam (AS) and took care of her in the sanctuary?',
          optionsAr: ['زكريا عليه السلام', 'موسى عليه السلام', 'إبراهيم عليه السلام', 'يونس عليه السلام'],
          optionsEn: ['Prophet Zakariya', 'Prophet Musa', 'Prophet Ibrahim', 'Prophet Yunus'],
          correctIndex: 0,
          conceptTestedAr: 'كفالة مريم عليها السلام',
          conceptTestedEn: 'Guardianship of Maryam',
          difficulty: 'easy',
          explanationAr: 'كفل نبي الله زكريا عليه السلام السيدة مريم في بيت المقدس كما ورد في القرآن: ﴿وَكَفَّلَهَا زَكَرِيَّا﴾.',
          explanationEn: 'Prophet Zakariya (AS) was the guardian of Maryam as mentioned in the Quran.'
        },
        {
          id: 'q-isl6-3-3',
          textAr: 'ما هي المعجزة الأولى التي أجراها الله تعالى لنبيه عيسى عليه السلام لدفع التهمة عن أمه الطاهرة مريم؟',
          textEn: 'What was the first miracle Allah granted Prophet Isa to defend his mother Maryam?',
          optionsAr: [
            'إبراء الأعمى الذي ولد بلا بصر',
            'إحياء الموتى من قبورهم',
            'الكلام في المهد صبياً وإعلان عبوديته لله ورسالته',
            'إنزال مائدة طعام من السماء'
          ],
          optionsEn: [
            'Healing the blind from birth',
            'Raising the dead from graves',
            'Speaking in the cradle as an infant, declaring his servitude to Allah',
            'Sending down a table spread of food from heaven'
          ],
          correctIndex: 2,
          conceptTestedAr: 'معجزات النبي عيسى عليه السلام',
          conceptTestedEn: 'Miracles of Prophet Isa',
          difficulty: 'medium',
          explanationAr: 'تكلم عيسى عليه السلام في المهد رضيعاً ليثبت براءة أمه وطهارتها ويعلن نبوته.',
          explanationEn: 'Isa spoke in the cradle as an infant to vindicate his mother and declare his prophethood.'
        }
      ]
    }
  },

  // ── LECTURE 4: FIQH OF FASTING, ZAKAT & SADAQAH, AND SOCIAL ETHICS ──
  {
    id: 'pisl-g6-4',
    order: 4,
    titleAr: 'المحاضرة 4: العبادات والقيم: فقه الصوم والزكاة والصدقة، وأمانة الكلمة والمسؤولية الاجتماعية',
    titleEn: 'Lecture 4: Worship & Ethics: Fiqh of Fasting & Zakat, Word Integrity & Social Responsibility',
    subtitleAr: 'أحكام الصوم (فرائضه، سننه، مبطلاته، الأعذار، القضاء والفدية)، الزكاة ومصارفها الثمانية، وأمانة الكلمة وحفظ السر والتسامح.',
    subtitleEn: 'Rules of Fasting (pillars, sunnahs, nullifiers, fidyah), Zakat & 8 recipients, word integrity, trust & tolerance.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - التربية الدينية الإسلامية',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Islamic Religious Education',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المحور الثاني: العالم من حولي (العبادات والأخلاق)',
    unitTitleEn: 'Theme 2: The World Around Me — Worship & Ethics',
    lessonNumberAr: 'الدرس 4: أحكام الصيام والزكاة والمسؤولية الأخلاقية',
    lessonNumberEn: 'Lesson 4: Fasting, Zakat & Moral Responsibility',

    warmupHookAr: 'ما الفرق بين أن تدفع زكاة مالك وأن تتصدق بجنيه على محتاج في الطريق؟ وما أثر الكلمة الطيبة وحفظ السر على قوة وتماسك المجتمع المدرسي والأسري؟ سنتعرف في هذا الدرس على فقه العبادات والقيم التي تبني مجتمعاً نقياً ومتراحماً.',
    warmupHookEn: 'What is the distinction between paying obligatory Zakat versus voluntary Sadaqah? And how does keeping secrets and speaking truthful words empower our communities?',

    learningOutcomesAr: [
      'أن يفصل الطالب أحكام الصوم: فرائضه (النية والإمساك)، سننه، مفسداته، والأعذار المبيحة للفطر.',
      'أن يوضح الفرق الدقيق بين قضاء الصيام، ودفع الفدية، والكفارة.',
      'أن يميز بين الزكاة المفروضة (ركن الإسلام) والصدقة التطوعية، ويعدد مصارف الزكاة الثمانية.',
      'أن يستشعر أمانة الكلمة، وحفظ السر، والتسامح، والمسؤولية الاجتماعية تجاه الوالدين والمجتمع.'
    ],
    learningOutcomesEn: [
      'Detail Fasting rulings: pillars (intention & abstention), sunnahs, nullifiers, and valid exemptions.',
      'Clarify differences between making up missed fasts (Qada), paying compensation (Fidyah), and Kaffarah.',
      'Distinguish obligatory Zakat from voluntary charity (Sadaqah) and enumerate the 8 eligible Zakat recipients.',
      'Value integrity in speech, secret-keeping, tolerance, and social responsibility toward family and society.'
    ],

    vocabulary: [
      {
        termAr: 'فرائض الصوم (Obligatory Fasting Pillars)',
        termEn: 'Pillars of Fasting',
        definitionAr: 'أركان لا يصح الصوم بدونها: النية المبيتة قبل الفجر، والإمساك عن جميع المفطرات من طلوع الفجر إلى غروب الشمس.',
        definitionEn: 'Essential components: firm intention before dawn and total abstention from nullifiers until sunset.'
      },
      {
        termAr: 'الفدية والقضاء (Fidyah & Qada)',
        termEn: 'Fidyah and Qada',
        definitionAr: 'القضاء: صيام يوم بديل لمن أفطر لعذر مؤقت. الفدية: إطعام مسكين عن كل يوم لمن عجز عن الصوم عجزاً دائماً كالكبير والمريض مرضاً مزمناً.',
        definitionEn: 'Qada is making up missed days later; Fidyah is feeding a needy person per missed day for permanent illness/elderly.'
      },
      {
        termAr: 'مصارف الزكاة (Zakat Recipients)',
        termEn: 'The Eight Zakat Categories',
        definitionAr: 'الجهات الثمانية التي حددها القرآن الكريم لصرف أموال الزكاة في سورة التوبة (الفقراء، المساكين، العاملين عليها... إلخ).',
        definitionEn: 'The eight categories designated by Allah in Surah At-Tawbah eligible to receive obligatory Zakat.'
      },
      {
        termAr: 'أمانة الكلمة (Integrity of Speech)',
        termEn: 'Integrity and Weight of Speech',
        definitionAr: 'التثبت قبل التحدث ونقل الأخبار، واستخدام اللسان في الصدق والإصلاح وترك الغيبة والنميمة وإفشاء الأسرار.',
        definitionEn: 'Verifying information before speaking, truthful speech, and refraining from slander, gossip, and betrayal.'
      }
    ],

    keyConceptsAr: [
      'الصوم عبادة سرية بين العبد وربه تربي التقوى وضبط النفس والشعور بآلام الفقراء والمحتاجين.',
      'الإسلام دين يسر: رخّص الفطر للمريض والمسافر، وفرق بين القضاء لمن يرجى شفاؤه والفدية للعاجز عجزاً مستمراً.',
      'الزكاة حق معلوم للفقير في مال الغني تطهر المال والنفوس، ومصارفها محددة بثمانية أصناف بنص القرآن.',
      'الكلمة أمانة ومسؤولية؛ والمسلم يحفظ سره وسر إخوانه ويتسامح مع الناس اقتداءً بالنبي ﷺ.'
    ],
    keyConceptsEn: [
      'Fasting is a personal act of devotion fostering self-control, piety, and empathy for the underprivileged.',
      'Islam emphasizes ease: permits breaking fast for travel and sickness, distinguishing temporary makeup (Qada) from permanent Fidyah.',
      'Zakat is an obligatory share in wealth purifying souls and society, allocated strictly across eight Quranic avenues.',
      'Words carry accountability; keeping secrets, truthfulness, and forgiveness build harmonious relationships.'
    ],

    summaryAr: 'شرحنا في هذا الدرس أحكام الصيام التفصيلية من فرائض وسنن وأعذار وفدية، وبينا الفروق بين الزكاة والصدقة ومصارفها الثمانية، وأهمية أمانة الكلمة وحفظ السر في المجتمع.',
    summaryEn: 'We learned detailed fasting rulings, exemptions, the eight avenues of Zakat, and ethical conduct regarding integrity of speech and social harmony.',

    mainContentAr: `
### 1. أحكام الصيام بالتفصيل (الفرائض، السنن، المبطلات، الأعذار)
- **تعريف الصوم:** الإمساك بنية العبادة عن الأكل والشرب وجميع المفطرات من طلوع الفجر الثاني إلى غروب الشمس.
- **فرائض (أركان) الصوم:**
  1. **النية:** محلها القلب وتكون قبل الفجر في صيام الفرض.
  2. **الإمساك:** الامتناع التام عن سائر المفطرات من الفجر للمغرب.
- **سنن الصوم المستحبة:**
  - تعجيل الفطر عند تحقق الغروب وتأخير السحور.
  - الدعاء عند الإفطار وتناول التمر أو الماء أولاً.
  - كف اللسان عن اللغو والسب وقراءة القرآن وكثرة الصدقة.
- **مبطلات الصيام:**
  - الأكل أو الشرب عمداً (أما من أكل أو شرب ناسياً فصومه صحيح: "فإنما أطعمه الله وسقاه").
  - القيء عمداً.
- **الأعذار المبيحة للفطر:**
  - المرض، السفر، كبر السن والعجز، الحمل والرضاع عند خوف المشقة أو الضرر.
- **الفرق بين القضاء والفدية:**
  - **القضاء:** صيام يوم مكان كل يوم أفطره المسلم؛ ويجب على من كان عذره مؤقتاً (كالمريض الذي يرجى شفاؤه والمسافر).
  - **الفدية:** إطعام مسكين وجبة مشبعة عن كل يوم، وتجب على من يعجز عن الصوم عجزاً مستمراً ودائماً (كالشيخ الكبير والمريض بمرض مزمن لا يُرجى شفاؤه).

---

### 2. الزكاة والصدقة ومصارفها الثمانية
- **الفرق بين الزكاة والصدقة:**
  - **الزكاة:** ركن الإسلام الثالث؛ فرض واجب على كل مسلم ملك نصاب المال وحال عليه الحول بنسبة محددة (2.5% من المال النامي).
  - **الصدقة التطوعية:** مستحبة في كل وقت وغير محددة بمقدار؛ تطفئ الخطيئة وتزيد المحبة.
- **مصارف الزكاة الثمانية (سورة التوبة: آية 60):**
  ﴿إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ وَالعَامِلِينَ عَلَيْهَا وَالمُؤَلَّفَةِ قُلُوبُهُمْ وَفِي الرِّقَابِ وَالغَارِمِينَ وَفِي سَبِيلِ اللَّهِ وَابْنِ السَّبِيلِ فَرِيضَةً مِّنَ اللَّهِ﴾.
  1. **الفقراء:** الذين لا يجدون كفايتهم الأساسية.
  2. **المساكين:** الذين يملكون القليل ولكنه لا يكفيهم.
  3. **العاملون عليها:** القائمون على جمعها وإحصائها.
  4. **المؤلفة قلوبهم:** من يُرجى إسلامهم أو تثبيت إيمانهم.
  5. **في الرقاب:** تحرير العبيد وفك الأسرى.
  6. **الغارمون:** من أثقلتهم الديون الحلال وعجزوا عن سدادها.
  7. **في سبيل الله:** دعم الدفاع عن الوطن ونشر الخير والجهاد المشروع.
  8. **ابن السبيل:** المسافر المنقطع عن أهله وماله.

---

### 3. القيم والأخلاق: أمانة الكلمة وحفظ السر والمسؤولية الاجتماعية
- **أمانة الكلمة:** الكلمة الطيبة صدقة؛ ونشر الشائعات أو السب والغيبة من كبائر الأخلاق التي تهدم المجتمع.
- **حفظ السر:** المسلم أمين؛ وإفشاء سر الصديق أو الأسرة خيانة للأمانة قال ﷺ: "المَجَالِسُ بِالأَمَانَةِ".
- **التسامح والعفو:** العفو عند المقدرة يورث العزة والمحبة ويزيل الأحقاد.
- **المسؤولية الاجتماعية:** بر الوالدين، الإحسان إلى الجار، حماية الممتلكات العامة والمدرسية، ونظافة البيئة.
`,
    assessment: {
      id: 'assess-isl6-4',
      titleAr: 'تقييم المحاضرة 4: فقه الصوم والزكاة والمسؤولية الأخلاقية',
      titleEn: 'Assessment 4: Fasting, Zakat, and Moral Responsibility',
      passingScore: 80,
      questions: [
        {
          id: 'q-isl6-4-1',
          textAr: 'ما الواجب الشرعي على الشيخ الكبير أو المريض بمرض مزمن لا يستطيع الصوم معه أبداً؟',
          textEn: 'What is the religious obligation on the elderly or chronically ill who can never fast?',
          optionsAr: [
            'صيام أيام بديلة في فصل الشتاء (القضاء)',
            'إخراج الفدية بإطعام مسكين عن كل يوم أفطره',
            'دفع كفارة مضاعفة بصيام شهرين متتابعين',
            'ليس عليه أي شيء ولا يلزمه إطعام أو قضاء'
          ],
          optionsEn: [
            'Making up the fast in winter (Qada)',
            'Paying Fidyah by feeding one poor person for each missed day',
            'Expiation (Kaffarah) by fasting two consecutive months',
            'Nothing is required at all'
          ],
          correctIndex: 1,
          conceptTestedAr: 'أحكام الفدية في الصيام',
          conceptTestedEn: 'Rulings of Fidyah in Fasting',
          difficulty: 'medium',
          explanationAr: 'العاجز عن الصوم عجزاً دائماً لكبر أو مرض مزمن يخرج فدية بإطعام مسكين عن كل يوم ولا قضاء عليه.',
          explanationEn: 'Those permanently unable to fast must pay Fidyah (feeding one needy person per day) with no Qada.'
        },
        {
          id: 'q-isl6-4-2',
          textAr: 'كم عدد المصارف التي حددها القرآن الكريم بدقة لاستحقاق أموال الزكاة المفروضة؟',
          textEn: 'How many categories of recipients did the Quran specify for obligatory Zakat?',
          optionsAr: ['خمسة مصارف', 'ثمانية مصارف', 'عشرة مصارف', 'ثلاثة مصارف'],
          optionsEn: ['Five categories', 'Eight categories', 'Ten categories', 'Three categories'],
          correctIndex: 1,
          conceptTestedAr: 'مصارف الزكاة الثمانية',
          conceptTestedEn: 'Eight Zakat Categories',
          difficulty: 'easy',
          explanationAr: 'حدد القرآن في سورة التوبة ثمانية مصارف حصرية للزكاة: الفقراء، المساكين، العاملون عليها، وغيرهم.',
          explanationEn: 'The Quran in Surah At-Tawbah explicitly designated eight categories eligible for Zakat.'
        },
        {
          id: 'q-isl6-4-3',
          textAr: 'ما حكم المسلم الذي أكل أو شرب في نهار رمضان ناسياً؟',
          textEn: 'What is the ruling for a Muslim who eats or drinks during Ramadan out of forgetfulness?',
          optionsAr: [
            'بطل صومه وعليه القضاء والكفارة',
            'صومه صحيح ويتم صومه ولا قضاء عليه لأن الله أطعمه وسقاه',
            'يلزمه دفع فدية إطعام عشرة مساكين',
            'يعيد صيام الشهر بأكمله'
          ],
          optionsEn: [
            'Fast is broken, requiring Qada and Kaffarah',
            'Fast is valid, he continues fasting with no makeup needed as Allah fed him',
            'Must pay Fidyah feeding ten poor people',
            'Must repeat the entire month'
          ],
          correctIndex: 1,
          conceptTestedAr: 'حكم الأكل والشرب نسياناً في الصوم',
          conceptTestedEn: 'Eating or Drinking Forgetfully While Fasting',
          difficulty: 'easy',
          explanationAr: 'من أكل أو شرب ناسياً فليتم صومه فإنما أطعمه الله وسقاه كما صح عن رسول الله ﷺ.',
          explanationEn: 'The Prophet stated that whoever eats or drinks forgetfully should complete the fast as Allah fed him.'
        }
      ]
    }
  }
];
