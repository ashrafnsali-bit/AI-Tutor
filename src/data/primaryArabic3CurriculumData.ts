import type { Lecture } from '../types';

// ============================================================================
// PRIMARY ARABIC — GRADE 3 (اللغة العربية الصف الثالث الابتدائي - المناهج الوطنية المعتمدة)
// Authentic Grade 3 Arabic Curriculum:
// Lecture 1: اللام الشمسية واللام القمرية والشدة وأثرها الصوتي والإملائي
// Lecture 2: التنوين بأنواعه الثلاثة (الضم، الكسر، الفتح مع ألف التنوين)
// Lecture 3: المدود الثلاثة (الألف، الواو، الياء) وتحديد الحرف الممدود
// Lecture 4: التمييز بين التاء المربوطة والتاء المفتوحة والهاء عند الوقف والوصل
// Lecture 5: الأساليب والتراكيب: أسلوب النهي، أسلوب التعجب، وأدوات الاستفهام
// ============================================================================

export const PRIMARY_ARABIC_G3_LECTURES: Lecture[] = [
  // ── LECTURE 1: SOLAR & LUNAR LAM ──
  {
    id: 'p3-ar-1',
    order: 1,
    titleAr: 'المحاضرة 1: مهارات القراءة والتمييز بين اللام الشمسية واللام القمرية والشدة',
    titleEn: 'Lecture 1: Solar vs. Lunar Lam and the Shaddah Diacritic',
    subtitleAr: 'إتقان نطق وكتابة (الـ) التعريف، والتمييز الصوتي بين اللام القمرية المظهرة الساكنة واللام الشمسية المدغمة المشددة.',
    subtitleEn: 'Master phonetic rules of the definite article: Solar and Lunar Lam letters and accurate consonant gemination.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الابتدائي - لغتي الجميلة',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Arabic Language Foundations',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: المهارات القرائية والإملائية الأساسية',
    unitTitleEn: 'Unit 1: Reading & Spelling Mastery',
    lessonNumberAr: 'الدرس 1: اللام الشمسية واللام القمرية',
    lessonNumberEn: 'Lesson 1: Solar & Lunar Lam',

    warmupHookAr: 'حين تنشد: "أشرقتِ الشَّمْسُ، وظهرَ الْقَمَرُ"، استمع إلى إيقاع لسانك؛ كلمة (الْقَمَر) نطقنا لامها صريحة رنانة كالجرس، بينما كلمة (الشَّمْس) انزلقت شفاهنا مباشرة إلى الشين المشددة واختفت اللام تماماً! لماذا اختفت اللام في الشمس وظهرت في القمر؟ هذا هو سر اللامين في لغتنا العربية الجميلة!',
    warmupHookEn: 'Notice how when we say "Al-Qamar" the Lam is clearly voiced, while in "Ash-Shams" the Lam assimilates into the doubled Sh! This phonetic harmony distinguishes Solar from Lunar letters.',

    keyConceptsAr: [
      'اللام القمرية: لام تُكتب وتُنطق بوضوح، ويوضع فوقها سكون (الْـ)، ويليها حرف من الحروف الـ 14 المجموعة في جملة: (ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ).',
      'اللام الشمسية: لام تُكتب ولا تُنطق، ويُدغم صوتها في الحرف الشمسي الذي يليها فيصبح مشدداً (الشَّـ / التَّـ / الصَّـ).',
      'الشدة: علامة تكرار الحرف مرتين متتاليتين (أولهما ساكن والثاني متحرك) فيدغمان بحرف واحد قوي مشدد.',
      'سر التفريق الإملائي: وجود الشدة على الحرف التالي لـ (الـ) يؤكد أنها شمسية دائماً.'
    ],
    keyConceptsEn: [
      'Lunar Lam: Written and explicitly pronounced with Sukun, followed by one of the 14 Lunar letters.',
      'Solar Lam: Written but silent; assimilates into the next consonant causing a Shaddah.',
      'Shaddah represents gemination (a doubled consonant: first silent, second voweled).',
      'A Shaddah immediately following "Al-" confirms a Solar Lam.'
    ],

    learningOutcomesAr: [
      'أن يصنف التلميذ الكلمات إلى مبدوءة بلام شمسية وأخرى بلام قمرية بدقة.',
      'أن ينطق الكلمات الشمسية والقمرية نطقاً فصيحاً مع مراعاة السكون والتشديد.',
      'أن يكتب الكلمات الشمسية إملاءً صحيحاً دون حذف اللام المكتوبة.'
    ],
    learningOutcomesEn: [
      'Classify words into Solar and Lunar categories accurately.',
      'Pronounce words with correct phonetics observing Sukun and Shaddah.',
      'Spell words containing Solar Lam correctly without omitting the silent letter.'
    ],

    vocabulary: [
      {
        termAr: 'اللام القمرية (Lunar Lam)',
        termEn: 'Lunar Lam',
        definitionAr: 'لام ساكنة تُكتب وتُنطق واضحة في الكلام وتتبعها حروف جملة (ابغ حجك وخف عقيمه).',
        definitionEn: 'Definite article Lam that is written and articulated with Sukun.'
      },
      {
        termAr: 'اللام الشمسية (Solar Lam)',
        termEn: 'Solar Lam',
        definitionAr: 'لام تُكتب ولا تُنطق، ويأتي بعدها حرف مشدد.',
        definitionEn: 'Definite article Lam that is written but assimilated into the subsequent doubled consonant.'
      }
    ],

    summaryAr: 'اللام في أول الكلمة نوعان: قمرية تُكتب وتُنطق وفوقها سكون (مثل: الْكِتَاب، الْقَلَم)، وشمسية تُكتب ولا تُنطق ويأتي بعدها حرف مشدد (مثل: الشَّجَرَة، الصَّفّ).',
    summaryEn: 'The definite article Lam is either Lunar (voiced with Sukun, e.g. Al-Kitab) or Solar (silent followed by Shaddah, e.g. Ash-Shajarah).',

    sections: [
      {
        titleAr: '1. قاعدة التمييز العملية بين اللامين',
        titleEn: '1. Practical Distinction Rules',
        contentAr: 'لحفظ الحروف القمرية بسهولة، جمعها علماؤنا في عبارة:\n(ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ)\nالحروف هي: (أ، ب، غ، ح، ج، ك، و، خ، ف، ع، ق، ي، م، هـ).\nأي حرف آخر من حروف الهجاء غير هذه الحروف الأربعة عشر يكون حرفاً شمسياً ويجعل اللام شمسية مدغمة مشددة.',
        contentEn: 'The 14 Lunar letters are mnemonically memorized in "ابغ حجك وخف عقيمه". Any other Arabic alphabet letter is Solar and causes assimilation.',
        formativeCheck: {
          id: 'fc-p3-ar-1',
          questionAr: 'أي من الكلمات التالية تحتوي على "لام شمسية"؟',
          questionEn: 'Which word contains a Solar Lam?',
          optionsAr: ['الْمَدْرَسَة', 'الصِّدْق', 'الْكِتَاب', 'الْحَدِيقَة'],
          optionsEn: ['Al-Madrasah', 'As-Sidq', 'Al-Kitab', 'Al-Hadeeqah'],
          correctIndex: 1,
          explanationAr: 'كلمة (الصِّدْق) لامها شمسية لأن الصاد حرف شمسي مشدد ولم تُنطق اللام.',
          explanationEn: 'As-Sidq has a Solar Lam because Sad is doubled and Lam is silent.'
        }
      }
    ],

    assessment: {
      id: 'as-p3-ar-1',
      titleAr: 'تقييم استيعاب مهارات وقواعد اللغة العربية',
      titleEn: 'Arabic Skills & Grammar Assessment',
      passingScore: 80,
      questions: [
      {
        id: 'q-p3-ar-1-1',
        textAr: 'ما العلامة الإملائية التي توضع على الحرف الذي يلي اللام الشمسية مباشرة؟',
        textEn: 'What diacritic follows a Solar Lam immediately?',
        optionsAr: ['السكون', 'الشدّة', 'التنوين', 'الضمة فقط'],
        optionsEn: ['Sukun', 'Shaddah', 'Tanween', 'Damma only'],
        correctIndex: 1,
        conceptTestedAr: 'علامة اللام الشمسية والتشديد',
        conceptTestedEn: 'Solar Lam and Shaddah',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      },
      {
        id: 'q-p3-ar-1-2',
        textAr: 'أي من الكلمات التالية لامها "قمرية" تُكتب وتُنطق؟',
        textEn: 'Which word has a voiced Lunar Lam?',
        optionsAr: ['السَّمَاء', 'الطَّالِب', 'الْوَلَد', 'النَّاس'],
        optionsEn: ['As-Samaa', 'At-Talib', 'Al-Walad', 'An-Nas'],
        correctIndex: 2,
        conceptTestedAr: 'تحديد اللام القمرية',
        conceptTestedEn: 'Identifying Lunar Lam',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 2: TANWEEN & ITS THREE TYPES ──
  {
    id: 'p3-ar-2',
    order: 2,
    titleAr: 'المحاضرة 2: التنوين بأنواعه الثلاثة (الضم والكسر والفتح) ورسم ألف التنوين',
    titleEn: 'Lecture 2: Tanween (Nunation) and the Accusative Alif Rule',
    subtitleAr: 'معرفة التنوين كنون ساكنة تلحق آخر الأسماء نطقاً لا كتابة، وحالات كتابة ألف تنوين الفتح والحالات المستثناة.',
    subtitleEn: 'Study the three types of nunation, phonetic rules, and when to append an accusative Alif.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الابتدائي - لغتي الجميلة',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Arabic Language Foundations',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: المهارات القرائية والإملائية الأساسية',
    unitTitleEn: 'Unit 1: Reading & Spelling Mastery',
    lessonNumberAr: 'الدرس 2: التنوين وأشكاله الثلاثة',
    lessonNumberEn: 'Lesson 2: The Three Types of Tanween',

    warmupHookAr: 'تسمع صوتاً لطيفاً في نهاية الكلمة مثل الجرس: "كِتَابٌ"، "كِتَابٍ"، "كِتَاباً"! أذنك تسمع حرف النون بوضوح، لكن حين تنظر إلى الورقة لا تجد نوناً بل حركتين متماثلتين! من هذه النون المتخفية التي ننطقها ولا نكتبها؟ إنها نون التنوين الساحرة!',
    warmupHookEn: 'At the end of words you hear a ringing "n" sound: Kitabun, Kitabin, Kitaban! Your ears hear the Nun clearly, but upon reading the page you see double vowels instead of a letter Nun. Meet the magic of Tanween!',

    keyConceptsAr: [
      'التنوين: نون ساكنة زائدة تلحق آخر الأسماء المعربة نطقاً لا كتابة (وصلاً وتسقط وقفاً).',
      'أنواع التنوين الثلاثة:',
      '  1. تنوين الضم ( ٌ ): ضمتان فوق الحرف الأخير (كِتَابٌ مُفِيدٌ).',
      '  2. تنوين الكسر ( ٍ ): كسرتان تحت الحرف الأخير (فِي بَيْتٍ جَمِيلٍ).',
      '  3. تنوين الفتح ( ً ): فتحتان، ويحتاج إلى إضافة ألف تنوين في معظم الكلمات (قَرَأْتُ كِتَاباً).',
      'الحالات التي لا نزيد فيها ألفاً في تنوين الفتح: المنتهي بتاء مربوطة (قِصَّةً)، المنتهي بهمزة قبلها ألف مد (سَمَاءً)، والمنتهي بهمزة على ألف (نَبَأً).'
    ],
    keyConceptsEn: [
      'Tanween is an unwritten terminal "n" sound attached to nouns.',
      'Three forms: Damm (un), Kasr (in), and Fath (an).',
      'Tanween Fath requires an extra Alif in most nouns (e.g. Waladan).',
      'Exceptions that do not take an extra Alif: Taa Marbuta (Qissatan), Hamzah preceded by Alif (Sama\'an), and Hamzah on Alif (Naba\'an).'
    ],

    learningOutcomesAr: [
      'أن يفرق التلميذ بين النون الأصلية ونون التنوين بحذف النون عند الوقف.',
      'أن يكتب الكلمات المنونة بالفتح كتابة صحيحة مع مراعاة الحالات الاستثنائية للألف.',
      'أن يضبط آخر الكلمات المنونة بالحركات الصحيحة.'
    ],
    learningOutcomesEn: [
      'Distinguish between root Nun and Tanween by testing word pronunciation upon pausing.',
      'Spell words with Tanween Fath correctly applying Alif rules and exceptions.',
      'Vocalize noun endings with accurate nunation.'
    ],

    vocabulary: [
      {
        termAr: 'التَّنْوِين (Tanween / Nunation)',
        termEn: 'Tanween',
        definitionAr: 'نون ساكنة تلحق آخر الاسم نطقاً وتفارقه خطاً ووقفاً، وعلامته مضاعفة الحركة.',
        definitionEn: 'An unwritten vocalic Nun suffix indicating indefiniteness in nouns.'
      }
    ],

    summaryAr: 'التنوين نون ننطقها ولا نكتبها؛ نضع بدلاً منها ضمتين أو كسرتين أو فتحتين. وعند تنوين الفتح نزيد ألفاً إلا إذا انتهت الكلمة بتاء مربوطة أو همزة مسبوقة بألف.',
    summaryEn: 'Tanween produces an "n" sound without writing the letter Nun. Accusative Tanween adds an Alif except when ending with Taa Marbuta or Hamzah after Alif.',

    sections: [
      {
        titleAr: '1. سر اختبار النون: أصلية أم تنوين؟',
        titleEn: '1. The Nun Pausing Test',
        contentAr: 'كيف تتأكد هل الكلمة تنتهي بنون أصلية أم تنوين؟\nاحذف النون وسكّن الحرف الأخير:\n- كلمة (قَلَمٌ): عند الوقف نقول: (قَلَمْ) لم يتغير المعنى، إذاً هي تنوين!\n- كلمة (لَبَنٌ): عند الوقف نقول: (لَبَنْ) النون بقيت لأنها أصلية، إذا حذفناها اختلت الكلمة (لَبـ!).',
        contentEn: 'To test if a final "n" sound is an authentic letter or Tanween: pause and silence the end. If the word makes sense without "n", it is Tanween (Qalam). If corrupted, it is a root Nun (Laban).',
        formativeCheck: {
          id: 'fc-p3-ar-2',
          questionAr: 'أي من الكلمات التالية كُتب فيها تنوين الفتح بطريقة صحيحة؟',
          questionEn: 'Which word spells Tanween Fath correctly?',
          optionsAr: ['مَدْرَسَةً', 'مَدْرَسَةان', 'مَدْرَسَةَنْ', 'مَدْرَسَتَنْ'],
          optionsEn: ['Madrasatan', 'Madrasataan', 'Madrasatan (with nun)', 'Madrasatan (incorrect)'],
          correctIndex: 0,
          explanationAr: 'تنوين الفتح على التاء المربوطة يوضع فتحتين فوقها مباشرة دون زيادة ألف: (مَدْرَسَةً).',
          explanationEn: 'Tanween on Taa Marbuta is placed directly over the letter without an extra Alif.'
        }
      }
    ],

    assessment: {
      id: 'as-p3-ar-1',
      titleAr: 'تقييم استيعاب مهارات وقواعد اللغة العربية',
      titleEn: 'Arabic Skills & Grammar Assessment',
      passingScore: 80,
      questions: [
      {
        id: 'q-p3-ar-2-1',
        textAr: 'ما الكلمة التي لا نضيف لها ألفاً عند تنوين الفتح؟',
        textEn: 'Which word does NOT take an extra Alif with Tanween Fath?',
        optionsAr: ['وَلَد', 'كِتَاب', 'سَمَاء', 'بَاب'],
        optionsEn: ['Walad', 'Kitab', 'Samaa', 'Bab'],
        correctIndex: 2,
        conceptTestedAr: 'استثناءات ألف تنوين الفتح مع الهمزة',
        conceptTestedEn: 'Tanween Fath exception with Hamzah',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      },
      {
        id: 'q-p3-ar-2-2',
        textAr: 'كيف نكتب كلمة (بَاب) بتنوين الفتح؟',
        textEn: 'How is "Bab" written with Tanween Fath?',
        optionsAr: ['بَابُنْ', 'بَاباً', 'بَابَنْ', 'بَابٍ'],
        optionsEn: ['Babun', 'Baban', 'Baban (with nun)', 'Babin'],
        correctIndex: 1,
        conceptTestedAr: 'كتابة تنوين الفتح بالألف',
        conceptTestedEn: 'Spelling Tanween Fath with Alif',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 3: LONG VOWELS (حروف المد) ──
  {
    id: 'p3-ar-3',
    order: 3,
    titleAr: 'المحاضرة 3: حروف المد الثلاثة (الألف والواو والياء) والحرف الممدود',
    titleEn: 'Lecture 3: Long Vowels (Madd Letters) and Prolonged Syllables',
    subtitleAr: 'التمييز بين الحركات القصيرة والمدود الطويلة، شروط حروف المد الساكنة ومطابقة حركة الحرف الممدود الذي يسبقها.',
    subtitleEn: 'Contrast short and long vowels, understand Madd conditions, and identify the prolonged letter.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الابتدائي - لغتي الجميلة',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Arabic Language Foundations',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: التراكيب اللغوية والقرائية',
    unitTitleEn: 'Unit 2: Phonics & Syllable Architecture',
    lessonNumberAr: 'الدرس 3: حروف المد والحرف الممدود',
    lessonNumberEn: 'Lesson 3: Madd Letters & Syllables',

    warmupHookAr: 'حين نقول: (قَالَ)، نمد صوتنا بالألف، بينما في (قَلَّ) ننطق الفتحة سريعاً! ما الفرق بين الحركة السريعة والمد الطويل؟ حروف المد الثلاثة هي أوتار الموسيقى في لغتنا العربية التي تطيل نغمات الكلمات وتزيدها عذوبة وجمالاً!',
    warmupHookEn: 'Contrast saying "Qala" with a drawn-out vowel vs "Qalla" with a brief vowel! Madd letters act like musical cords prolonging phonetic notes into expressive eloquence.',

    keyConceptsAr: [
      'حروف المد الثلاثة هي: (الألف، الواو، الياء) وهي حروف ساكنة لا يوضع عليها أي حركة.',
      'شروط حروف المد ومطابقة الحركات:',
      '  1. المد بالألف: حرف الألف ساكن ويسبقه حرف ممدود مفتوح (بَـا - كَـاتِـب).',
      '  2. المد بالواو: حرف الواو ساكن ويسبقه حرف ممدود مضموم (عُـو - نُـور).',
      '  3. المد بالياء: حرف الياء ساكن ويسبقه حرف ممدود مكسور (سِـي - سَرِيع).',
      'الحرف الممدود: هو الحرف الذي يسبق حرف المد مباشرة ويحمل الحركة المتجانسة معه.'
    ],
    keyConceptsEn: [
      'Three Madd letters: Alif, Waw, Yaa (unvoweled / silent consonants).',
      'Harmonic vowels: Alif preceded by Fatha, Waw preceded by Damma, Yaa preceded by Kasra.',
      'The Prolonged Consonant (الحرف الممدود) is the letter immediately preceding the Madd.'
    ],

    learningOutcomesAr: [
      'أن يحدد التلميذ حرف المد ونوعه في الكلمات المعروضة.',
      'أن يستخرج الحرف الممدود وحركته بدقة.',
      'أن ينطق مقاطع المد بنغم صوتي صحيح ممتد بمقدار حركتين.'
    ],
    learningOutcomesEn: [
      'Identify Madd letters and their categories.',
      'Extract the prolonged consonant and its vowel marker.',
      'Articulate long syllables with dual phonetic measure.'
    ],

    vocabulary: [
      {
        termAr: 'حُرُوفُ المَدّ (Madd Letters / Long Vowels)',
        termEn: 'Long Vowels (Madd)',
        definitionAr: 'ثلاثة أحرف (ا، و، ي) ساكنة خالية من الحركة تمد صوت الحركة التي قبلها.',
        definitionEn: 'Three Arabic letters extending preceding harmonic vowels into long vowels.'
      },
      {
        termAr: 'الحَرْفُ المَمْدُود (Prolonged Consonant)',
        termEn: 'Prolonged Consonant',
        definitionAr: 'الحرف الذي يسبق حرف المد مباشرة وتظهر عليه حركة تناسب نوع المد.',
        definitionEn: 'The consonant directly before the Madd letter carrying the matching vowel.'
      }
    ],

    summaryAr: 'حروف المد ثلاثة (ا، و، ي) ساكنة خالية من الحركات؛ المد بالألف يسبقه فتحة، والمد بالواو يسبقه ضمة، والمد بالياء يسبقه كسرة. والحرف الذي قبل حرف المد يسمى الحرف الممدود.',
    summaryEn: 'The three long vowels (Alif, Waw, Yaa) extend preceding matching short vowels; the preceding consonant is the prolonged letter.',

    sections: [
      {
        titleAr: '1. جدول مقارنة المدود الثلاثة',
        titleEn: '1. Three Madd Comparison Table',
        contentAr: '- المد بالألف: مثل (بَاب) -> حرف المد: الألف، الحرف الممدود: الباء وحركته الفتحة.\n- المد بالواو: مثل (نُور) -> حرف المد: الواو، الحرف الممدود: النون وحركته الضمة.\n- المد بالياء: مثل (تِين) -> حرف المد: الياء، الحرف الممدود: التاء وحركته الكسرة.',
        contentEn: 'Alif Madd (Bab: prolonged Ba with Fatha), Waw Madd (Noor: prolonged Noon with Damma), Yaa Madd (Teen: prolonged Taa with Kasra).',
        formativeCheck: {
          id: 'fc-p3-ar-3',
          questionAr: 'في كلمة (حَدِيقَة)، ما هو حرف المد وما الحرف الممدود؟',
          questionEn: 'In "Hadeeqah", what are the Madd and prolonged letters?',
          optionsAr: [
            'حرف المد: الألف، والممدود: الحاء',
            'حرف المد: الياء، والممدود: الدال المكسورة',
            'حرف المد: الواو، والممدود: القاف',
            'لا يوجد مد في الكلمة'
          ],
          optionsEn: ['Alif & Haa', 'Yaa & prolonged Dal with Kasra', 'Waw & Qaf', 'No Madd'],
          correctIndex: 1,
          explanationAr: 'في كلمة (حَدِيقَة) حرف المد هو الياء، والحرف الممدود هو الدال المكسورة (دِ).',
          explanationEn: 'The Madd is Yaa, and the prolonged letter is Dal with Kasra.'
        }
      }
    ],

    assessment: {
      id: 'as-p3-ar-1',
      titleAr: 'تقييم استيعاب مهارات وقواعد اللغة العربية',
      titleEn: 'Arabic Skills & Grammar Assessment',
      passingScore: 80,
      questions: [
      {
        id: 'q-p3-ar-3-1',
        textAr: 'أي من الكلمات التالية تحتوي على "مد بالواو"؟',
        textEn: 'Which word contains Waw Madd?',
        optionsAr: ['وَلَد', 'عُصْفُور', 'وَاحَة', 'يَوْم'],
        optionsEn: ['Walad', 'Usfoor', 'Waahah', 'Yawm'],
        correctIndex: 1,
        conceptTestedAr: 'تحديد المد بالواو',
        conceptTestedEn: 'Identifying Waw Madd',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      },
      {
        id: 'q-p3-ar-3-2',
        textAr: 'ما الحركة التي تسبق حرف المد بالألف دائماً؟',
        textEn: 'Which vowel always precedes Alif Madd?',
        optionsAr: ['الضمة', 'الكسرة', 'الفتحة', 'السكون'],
        optionsEn: ['Damma', 'Kasra', 'Fatha', 'Sukun'],
        correctIndex: 2,
        conceptTestedAr: 'حركة الحرف الممدود بالمد بالألف',
        conceptTestedEn: 'Vowel before Alif Madd',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 4: TAA MARBUTA VS TAA MAFTUHA VS HAA ──
  {
    id: 'p3-ar-4',
    order: 4,
    titleAr: 'المحاضرة 4: التمييز بين التاء المربوطة (ـة/ة) والتاء المفتوحة (ت) والهاء (ـه/ه)',
    titleEn: 'Lecture 4: Taa Marbuta, Taa Maftuha and Haa in Pause & Connect',
    subtitleAr: 'قاعدة الوقف بالسكون والوصل بالحركة للتمييز القاطع في الإملاء بين التاء المربوطة والمفتوحة والهاء.',
    subtitleEn: 'Master orthography through the pause and connect rule distinguishing Taa Marbuta, open Taa, and terminal Haa.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الابتدائي - لغتي الجميلة',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Arabic Language Foundations',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: التراكيب اللغوية والقرائية',
    unitTitleEn: 'Unit 2: Orthography & Morphology',
    lessonNumberAr: 'الدرس 4: التاء المربوطة والمفتوحة والهاء',
    lessonNumberEn: 'Lesson 4: Terminal Taa & Haa Rules',

    warmupHookAr: 'كثير من الطلاب يحتارون عند كتابة نهاية الكلمات: هل أكتب (مَدْرَسَة) أم (مَدْرَسَت) أم (مَدْرَسَه)؟ نقطتان صغيرتان قد تغيران معنى الكلمة كلياً! هل تريد قاعدة سحرية تكتشف بها الحرف الصحيح في ثانية واحدة دون أي تردد؟',
    warmupHookEn: 'Many struggle spelling word endings: Is it Taa Marbuta (ـة), open Taa (ت), or Haa (ـه)? Two small dots can change the entire word! Learn the magical pause-and-connect rule.',

    keyConceptsAr: [
      'التاء المفتوحة (ت): تُنطق تاءً واضحة في الوصل والوقف (بَيْتٌ -> بَيْتْ / ذَهَبَتْ).',
      'التاء المربوطة (ـة / ة): تُنطق تاءً عند الوصل بالحركات، وتُنطق هاءً عند الوقف بالسكون (مَدْرَسَةُ الْعِلْمِ -> مَدْرَسَهْ)، ونضع عليها نقطتين دائماً.',
      'الهاء (ـه / ه): تُنطق هاءً في الوصل والوقف ولا نضع عليها أي نقاط (وَجْهٌ -> وَجْهْ / مِيَاهٌ -> مِيَاهْ).',
      'القاعدة الذهبية: قف على الكلمة بالسكون، إذا نُطقت هاءً وانقلبت تاءً عند الحركة فهي تاء مربوطة بنقطتين!'
    ],
    keyConceptsEn: [
      'Open Taa (ت): Pronounced "t" in both connection and pause.',
      'Taa Marbuta (ـة): Pronounced "t" with vowels and "h" upon silent pause, always dotted.',
      'Terminal Haa (ـه): Pronounced "h" in both connection and pause, never dotted.',
      'Golden Rule: Test by pausing silently; if "h" becomes "t" with vowels, it is Taa Marbuta.'
    ],

    learningOutcomesAr: [
      'أن يطبق التلميذ قاعدة الوصل والوقف للتمييز بين التاءات والهاء.',
      'أن يكتب التاء المربوطة بنقطتيها والهاء بدون نقاط دون خلط إملائي.',
      'أن يصحح الأخطاء الشائعة في كتابة التاء والهاء في الجمل.'
    ],
    learningOutcomesEn: [
      'Apply connect-and-pause test to distinguish Taa and Haa.',
      'Spell dotted Taa Marbuta and undotted Haa accurately.',
      'Correct common orthographic errors in sentences.'
    ],

    vocabulary: [
      {
        termAr: 'التَّاءُ المَرْبُوطَة (Taa Marbuta)',
        termEn: 'Taa Marbuta',
        definitionAr: 'تاء تلحق أواخر الأسماء المؤنثة، تُنطق تاءً في الوصل وهاءً عند الوقف وعليها نقطتان.',
        definitionEn: 'Feminine noun suffix pronounced as "t" when voweled and "h" when paused.'
      },
      {
        termAr: 'الهَاءُ المَرْبُوطَة (Terminal Haa)',
        termEn: 'Terminal Haa',
        definitionAr: 'هاء تنطق هاءً وصلاً ووقفاً وتُكتب بدون نقاط.',
        definitionEn: 'Terminal letter pronounced "h" in all syntactic states without dots.'
      }
    ],

    summaryAr: 'التاء المفتوحة (ت) تنطق تاءً دائماً، والهاء (ه) تنطق هاءً دائماً وبلا نقاط، أما التاء المربوطة (ة) فتنطق هاءً عند الوقف وتاءً عند الوصل ولها نقطتان.',
    summaryEn: 'Open Taa is always "t", terminal Haa is always "h" without dots, and Taa Marbuta transforms from "h" upon pause to "t" upon connection, bearing two dots.',

    sections: [
      {
        titleAr: '1. التدريب العملي بالقاعدة الذهبية',
        titleEn: '1. Practical Pausing Test',
        contentAr: '- كلمة (مَدِينَة): قف عليها -> (مَدِينَهْ) نطقت هاء، حرّكها -> (مَدِينَةُ الرِّيَاضِ) نطقت تاء = إذاً هي تاء مربوطة بنقطتين (ـة).\n- كلمة (مِيَاه): قف عليها -> (مِيَاهْ) هاء، حرّكها -> (مِيَاهُ النِّيلِ) بقيت هاء = إذاً هي هاء أصلية بدون نقاط (ـه).\n- كلمة (بِنْت): قف عليها -> (بِنْتْ) تاء، حرّكها -> (بِنْتٌ) تاء = إذاً هي تاء مفتوحة (ت).',
        contentEn: 'Apply the pause test: Madeenah -> Madeenat (Taa Marbuta), Meeyah -> Meeyahu (Haa), Bint -> Bintun (Open Taa).',
        formativeCheck: {
          id: 'fc-p3-ar-4',
          questionAr: 'كيف نكتب نهاية كلمة (فَوَاكِـ...)؟',
          questionEn: 'How do we write the ending of "Fawaki..."?',
          optionsAr: ['فَوَاكِه (هاء بدون نقاط)', 'فَوَاكِة (تاء مربوطة)', 'فَوَاكِت (تاء مفتوحة)', 'فَوَاكِيه'],
          optionsEn: ['Fawakih (undotted Haa)', 'Fawakiha (Taa Marbuta)', 'Fawakit (open Taa)', 'Fawakeeh'],
          correctIndex: 0,
          explanationAr: 'عند الوصل نقول: (فَوَاكِهُ الصَّيْفِ) وعند الوقف: (فَوَاكِهْ)؛ نُطقت هاءً في الحالتين فهي هاء بدون نقاط.',
          explanationEn: 'Pronounced "h" in both pause and connection, so it is an undotted Haa.'
        }
      }
    ],

    assessment: {
      id: 'as-p3-ar-1',
      titleAr: 'تقييم استيعاب مهارات وقواعد اللغة العربية',
      titleEn: 'Arabic Skills & Grammar Assessment',
      passingScore: 80,
      questions: [
      {
        id: 'q-p3-ar-4-1',
        textAr: 'أي من الكلمات التالية تنتهي بـ "تاء مفتوحة" صحيحة؟',
        textEn: 'Which word correctly ends with an open Taa?',
        optionsAr: ['مُعَلِّمَة', 'سَيَّارَة', 'مَعْلُومَات', 'شَجَرَة'],
        optionsEn: ['Muallimah', 'Sayyarah', 'Ma\'loomat', 'Shajarah'],
        correctIndex: 2,
        conceptTestedAr: 'التاء المفتوحة في جمع المؤنث السالم',
        conceptTestedEn: 'Open Taa in plural nouns',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      },
      {
        id: 'q-p3-ar-4-2',
        textAr: 'ما الفرق في الرسم بين التاء المربوطة (ـة) والهاء (ـه)؟',
        textEn: 'What is the visual difference between Taa Marbuta and Haa?',
        optionsAr: [
          'التاء المربوطة لها نقطتان، والهاء بدون نقاط',
          'الهاء لها ثلاث نقاط',
          'لا يوجد أي فرق بينهما',
          'التاء المربوطة أطول في الحجم'
        ],
        optionsEn: [
          'Taa Marbuta has two dots, Haa has no dots',
          'Haa has three dots',
          'No difference',
          'Taa Marbuta is longer'
        ],
        correctIndex: 0,
        conceptTestedAr: 'الفرق الإملائي بين التاء المربوطة والهاء',
        conceptTestedEn: 'Dots distinction on Taa Marbuta vs Haa',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      }
    ]
    }
  },

  // ── LECTURE 5: LINGUISTIC STYLES (PROHIBITION, EXCLAMATION & INTERROGATION) ──
  {
    id: 'p3-ar-5',
    order: 5,
    titleAr: 'المحاضرة 5: الأساليب اللغوية والتراكيب (أسلوب النهي، أسلوب التعجب، وأدوات الاستفهام)',
    titleEn: 'Lecture 5: Linguistic Styles: Prohibition, Exclamation & Question Tools',
    subtitleAr: 'استخدام أسلوب النهي بـ (لا الناهية)، وصياغة أسلوب التعجب (ما أفعل!)، وتوظيف أدوات الاستفهام في التواصل والتعبير.',
    subtitleEn: 'Master prohibition using "La", formulate exclamatory phrases (Ma Af\'ala), and utilize question words.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الابتدائي - لغتي الجميلة',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Arabic Language Foundations',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: الأساليب والتراكيب اللغوية',
    unitTitleEn: 'Unit 3: Linguistic Expressions & Styles',
    lessonNumberAr: 'الدرس 5: أساليب النهي والتعجب والاستفهام',
    lessonNumberEn: 'Lesson 5: Sentence Styles & Functions',

    warmupHookAr: 'حين ترى حديقة ساحرة الجمال ماذا تقول؟ تهتف بتعجب: "مَا أَجْمَلَ الأَزْهَارَ!"، وحين ترى طفلاً يقترب من النار تحذره بأسلوب نهي حازم: "لَا تَقْتَرِبْ مِنَ النَّارِ!"، وحين تريد معرفة الحقيقة تسأل: "مَتَى نَذْهَبُ؟". هذه الأساليب والتراكيب تجعل حديثنا معبراً ودقيقاً وممتعاً!',
    warmupHookEn: 'When viewing breathtaking scenery, we exclaim "How beautiful!", when cautioning a child we say "Do not touch!", and when inquiring we ask "When do we travel?". These syntactic styles enrich our expressive eloquence!',

    keyConceptsAr: [
      'أسلوب النهي: طلب الامتناع عن فعل شيء ضار أو خاطئ، ويتكون من: (لا الناهية + الفعل المضارع المبدوء بالتاء) مثل: (لا تكذبْ، لا تقطفْ أزهار الحديقة).',
      'أسلوب التعجب: إظهار الدهشة والإعجاب بجمال شيء أو عظمته، ويبدأ بـ (مَا) + كلمة على وزن (أَفْعَل) + المتعجب منه + علامة التعجب (!) مثل: (مَا أَجْمَلَ الصِّدْقَ!).',
      'أدوات الاستفهام ومعانيها:',
      '  - (مَنْ): للسؤال عن العاقل (من كتب الدرس؟).',
      '  - (مَا / مَاذَا): للسؤال عن غير العاقل (ماذا تقرأ؟).',
      '  - (أَيْنَ): للسؤال عن المكان (أين تقع مدرستك؟).',
      '  - (مَتَى): للسؤال عن الزمان (متى يبدأ العام الدراسي؟).',
      '  - (كَيْفَ): للسؤال عن الحال أو الكيفية (كيف حالك؟).',
      '  - (كَمْ): للسؤال عن العدد (كم كتاباً قرأت؟).',
      '  - (هَلْ): للإثبات بـ (نعم) أو النفي بـ (لا).'
    ],
    keyConceptsEn: [
      'Prohibition style (Nahy): "La" + present verb beginning with Taa (e.g. Do not lie).',
      'Exclamation style (Ta\'ajjub): "Ma" + superlative pattern (Af\'ala) + object + exclamation mark (!).',
      'Question words: Man (who), Ma/Matha (what), Ayna (where), Mata (when), Kayfa (how), Kam (how many), Hal (yes/no).'
    ],

    learningOutcomesAr: [
      'أن يصوغ التلميذ أسلوب نهي صحيح لتوجيه النصح لزملائه.',
      'أن يعبر بأسلوب التعجب المناسب عن المشاهد الجميلة مع وضع علامة التعجب (!).',
      'أن يختار أداة الاستفهام المناسبة للسؤال عن العاقل والمكان والزمان والعدد.'
    ],
    learningOutcomesEn: [
      'Formulate correct prohibition phrases advising peers.',
      'Express wonder using the exclamatory form with exclamation mark.',
      'Select proper interrogative tools for people, places, times, and counts.'
    ],

    vocabulary: [
      {
        termAr: 'أُسْلُوبُ النَّهْي (Prohibition Style)',
        termEn: 'Prohibition (Nahy)',
        definitionAr: 'تركيب لغوي نطلب به من المخاطب الكف عن فعل شيء، ويبدأ بـ (لا الناهية).',
        definitionEn: 'Syntactic construct urging someone to refrain from an action using "La".'
      },
      {
        termAr: 'أُسْلُوبُ التَّعَجُّب (Exclamatory Style)',
        termEn: 'Exclamation (Ta\'ajjub)',
        definitionAr: 'تركيب يعبر عن الإعجاب والدهشة ويكون على صيغة (ما أفعلَ...!).',
        definitionEn: 'Formulaic construction conveying wonder on the pattern of "Ma Af\'ala!".'
      }
    ],

    summaryAr: 'أسلوب النهي يبدأ بـ (لا) لطلب ترك الفعل، وأسلوب التعجب يبدأ بـ (ما أفعل) وينتهي بعلامة التعجب (!)، وأدوات الاستفهام نستخدم كلاً منها في موضعه المناسب (أين للمكان، متى للزمان، كم للعدد).',
    summaryEn: 'Prohibition uses "La" to prevent actions, exclamation uses "Ma Af\'ala" with an exclamation mark, and interrogatives target specific parameters (Ayna for place, Mata for time, Kam for quantity).',

    sections: [
      {
        titleAr: '1. تطبيق أدوات الاستفهام وأساليب التعبير',
        titleEn: '1. Practical Question & Exclamation Drills',
        contentAr: 'اختر الأسلوب المناسب للموقف:\n- تريد أن تنهى صديقك عن السهر: «لا تسهرْ لوقت متأخر!».\n- تشاهد السماء الصافية بنجومها: «ما أجملَ السماءَ في الليل!».\n- تسأل عن موعد الرحلة: «متى تنطلق الحافلة المدرسية؟».\nكل جملة تبدأ بأداة استفهام يجب أن تختمها بعلامة الاستفهام (؟).',
        contentEn: 'Match style to situation: Advising against late nights (La tas-har), admiring starry skies (Ma ajmala as-samaa!), inquiring on departure (Mata tantaliq?). Interrogative sentences always conclude with a question mark (?).',
        formativeCheck: {
          id: 'fc-p3-ar-5',
          questionAr: 'أي أداة استفهام نستخدمها للسؤال عن "مكان" مكتبة المدرسة؟',
          questionEn: 'Which question word asks about the location of the school library?',
          optionsAr: ['مَتَى', 'مَنْ', 'أَيْنَ', 'كَمْ'],
          optionsEn: ['Mata (when)', 'Man (who)', 'Ayna (where)', 'Kam (how many)'],
          correctIndex: 2,
          explanationAr: 'نستخدم (أَيْنَ) للسؤال عن المكان: «أين تقع مكتبة المدرسة؟».',
          explanationEn: 'We use "Ayna" to inquire about locations.'
        }
      }
    ],

    assessment: {
      id: 'as-p3-ar-1',
      titleAr: 'تقييم استيعاب مهارات وقواعد اللغة العربية',
      titleEn: 'Arabic Skills & Grammar Assessment',
      passingScore: 80,
      questions: [
      {
        id: 'q-p3-ar-5-1',
        textAr: 'أي من الجمل التالية تمثل "أسلوب تعجب" صحيح؟',
        textEn: 'Which sentence represents a correct exclamatory style?',
        optionsAr: [
          'هَلِ الْجَوُّ بَارِدٌ؟',
          'مَا أَرْوَعَ الْحَدِيقَةَ!',
          'لَا تَقْطَفِ الأَزْهَارَ.',
          'أَيْنَ ذَهَبَ أَحْمَدُ؟'
        ],
        optionsEn: [
          'Is the weather cold?',
          'How wonderful the garden is!',
          'Do not pick flowers.',
          'Where did Ahmad go?'
        ],
        correctIndex: 1,
        conceptTestedAr: 'صياغة أسلوب التعجب',
        conceptTestedEn: 'Formulating exclamatory sentence',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      },
      {
        id: 'q-p3-ar-5-2',
        textAr: 'ما الأداة التي نستخدمها للسؤال عن "عدد" صفحات الكتاب؟',
        textEn: 'Which tool asks about the number of book pages?',
        optionsAr: ['كَيْفَ', 'مَنْ', 'كَمْ', 'مَاذَا'],
        optionsEn: ['Kayfa (how)', 'Man (who)', 'Kam (how many)', 'Matha (what)'],
        correctIndex: 2,
        conceptTestedAr: 'أداة الاستفهام عن العدد (كم)',
        conceptTestedEn: 'Interrogative tool for quantity (Kam)',
        explanationAr: 'إجابة صحيحة وفق قواعد اللغة العربية والمهارات الإملائية المقررة.',
        explanationEn: 'Correct answer following Arabic grammar and orthography rules.',
        difficulty: 'easy'
      }
    ]
    }
  }
];
