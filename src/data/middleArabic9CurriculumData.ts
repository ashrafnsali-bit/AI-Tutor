import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL ARABIC LANGUAGE & PREP 3 (منهج اللغة العربية والنحو - الصف الثالث الإعدادي)
// Official Grade 9 / Prep 3 National Ministry & Language School Curriculum Alignment:
// Unit 1: The Vocative (أسلوب النداء وأنواع المنادى وأحكامه)
// Unit 2: The Apposition (البدل وأنواعه: المطابق، بعض من كل، الاشتمال)
// Unit 3: Praise & Dispraise (أسلوب المدح والذم: نعم وبئس، حبذا ولا حبذا)
// Unit 4: The Diptote (الممنوع من الصرف لعلة واحدة ولعلتين وإعرابه)
// Unit 5: Morphology & Derivatives (المشتقات: اسم الفاعل، صيغ المبالغة، اسم المفعول، الزمان والمكان، الآلة، والتفضيل)
// ============================================================================

export const MIDDLE_ARABIC_G9_LECTURES: Lecture[] = [
  // ── LECTURE 1: THE VOCATIVE (المنادى) ──
  {
    id: 'm9-arab-1',
    order: 1,
    titleAr: 'المحاضرة 1: أسلوب النداء، وأنواع المنادى المعرب والمبني وأحكامه',
    titleEn: 'Lecture 1: The Vocative Style (Munada): Inflected vs Built Types & Rules',
    subtitleAr: 'دراسة أدوات النداء، وأقسام المنادى المعرب المنصوب (المضاف، الشبيه بالمضاف، النكرة غير المقصودة)، والمنادى المبني (العلم المفرد، النكرة المقصودة)، ونداء ما فيه أل ولفظ الجلالة',
    subtitleEn: 'Master Arabic Vocative constructions, inflected accusative vocatives (annexed, semi-annexed, unintended indefinite), and built vocatives (proper names, intended indefinite), with "Al" vocatives and Allah vocative.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Arabic Language & Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: قواعد النحو والإعراب (أسلوب النداء)',
    unitTitleEn: 'Unit 1: Arabic Grammar & Syntax: The Vocative',
    lessonNumberAr: 'الدرس 1: المنادى وأحكامه الإعرابية',
    lessonNumberEn: 'Lesson 1: Vocative Types & Declension',

    // Real-world hook
    warmupHookAr: 'عندما ترسل إشعاراً في تطبيق هاتفي لتنبيه مستخدم معين أو توجه رسالة خطابية مؤثرة في مؤتمر جماهيري، فأنت تبدأ بالنداء لتوجيه الانتباه. في لغة القرآن والأدب العربي، صاغ علماء النحو لأسلوب النداء قواعد دقيقة تميز بين نداء القريب والبعيد، وبين من تناديه مخصصاً بالاسم أو مقصوداً بذاته. إتقان درس "المنادى" هو مفتاحك لإعراب الآيات القرآنية والنصوص البليغة بدقة متناهية!',
    warmupHookEn: 'The Vocative style (An-Nidaa) is Arabic’s linguistic mechanism for drawing attention. Mastering the distinction between inflected accusative and built vocatives unlocks the syntactical beauty of classical Arabic literature and Quranic eloquence!',

    // Targeted Learning Outcomes
    learningOutcomesAr: [
      'أن يحدد الطالب أركان أسلوب النداء (أداة النداء + المنادى) ودلالة كل أداة (الهمزة وأي للقريب، أيا وهيا للبعيد، يا للقريب والبعيد)',
      'أن يصنف المنادى المعرب المنصوب بالفتحة أو الكسرة أو الياء أو الألف: 1) المضاف، 2) الشبيه بالمضاف، 3) النكرة غير المقصودة',
      'أن يعرب المنادى المبني على ما يُرفع به في محل نصب: 1) العلم المفرد، 2) النكرة المقصودة',
      'أن يطبق قواعد نداء ما فيه (أل) باستخدام (أيها / أيتها) وإعراب الاسم الواقع بعدهما (نعتاً أو بدلاً مرفوعاً)',
      'أن يتقن نداء لفظ الجلالة (يا اللهُ بهمزة قطع، أو حذف الأداة والتعويض عنها بميم مشددة: اللهمَّ)'
    ],
    learningOutcomesEn: [
      'Identify vocative particles and their spatial usages (Hamza/Ayy for near, Aya/Haya for far, Ya for both)',
      'Classify inflected accusative vocatives: Annexed (Mudaf), Semi-annexed (Shabih bil-Mudaf), Unintended Indefinite (Nakira Ghayr Maqsuda)',
      'Parse built vocatives on their nominative markers in the place of accusative: Singular Proper Noun and Intended Indefinite',
      'Apply vocative rules for definite nouns with "Al" using Ayyuha/Ayyatuha and parsing following nouns',
      'Master the vocative of the Divine Name (Ya Allah / Allahumma)'
    ],

    // Vocabulary
    vocabulary: [
      {
        termAr: 'المنادى (The Vocative - Al-Munada)',
        termEn: 'The Vocative (Al-Munada)',
        definitionAr: 'اسم ظاهر يذكر بعد أداة من أدوات النداء لطلب إقبال مدلوله أو التنبيه لأمر ما.',
        definitionEn: 'A noun placed after a vocative particle to call upon or alert the addressee.'
      },
      {
        termAr: 'المنادى المضاف (Annexed Vocative)',
        termEn: 'Annexed Vocative (Mudaf)',
        definitionAr: 'منادى يليه مضاف إليه يوضحه، وحكمه الإعرابي النصب دائماً، وتحذف منه التنوين ونون المثنى وجمع المذكر السالم (مثل: يا طالبَ العلمِ، يا معلِّمي المدرسةِ).',
        definitionEn: 'A vocative followed by a genitive annexation, always inflected in the accusative with nunation dropped.'
      },
      {
        termAr: 'المنادى الشبيه بالمضاف (Semi-Annexed Vocative)',
        termEn: 'Semi-Annexed Vocative',
        definitionAr: 'منادى اتصل به شيء يتمم معناه (غالباً جار ومجرور أو معمول لمشتق)، ويكون منوناً وتثبت فيه النون (مثل: يا طالباً للعلمِ، يا صاعداً جبلاً).',
        definitionEn: 'A vocative attached to a complementing phrase (prepositional or object) retaining its nunation/nun.'
      },
      {
        termAr: 'النكرة المقصودة (Intended Indefinite Vocative)',
        termEn: 'Intended Indefinite Vocative',
        definitionAr: 'اسم نكرة يُقصد به شخص معين يوجه إليه النداء، وحكمه البناء على ما يرفع به في محل نصب (مثل: يا رجلُ، يا طالبانِ، يا معلمونَ).',
        definitionEn: 'An indefinite noun addressed specifically, built on its nominative marker in place of accusative.'
      }
    ],

    keyConceptsAr: [
      'أدوات النداء: (أ ، أي) للقريب | (أيا ، هيا) للبعيد | (يا) لكل منادى',
      'المنادى المعرب (منصوب دائماً): المضاف، الشبيه بالمضاف، النكرة غير المقصودة',
      'المنادى المبني (يُبنى على الضم أو الألف أو الواو في محل نصب): العلم المفرد، النكرة المقصودة',
      'الفرق بين النكرة المقصودة (يا طالبُ - مبني) والنكرة غير المقصودة (يا طالباً - منصوب معرب)',
      'نداء ما فيه أل: يا أيها الطالبُ (الطالب: نعت مرفوع) | نداء لفظ الجلالة: اللهمَّ (الميم المشددة عوض عن يا المحذوفة)'
    ],
    keyConceptsEn: [
      'Vocative particles classification by distance',
      'Three inflected accusative vocative forms',
      'Two built vocative forms (built on nominative marker in place of accusative)',
      'Distinction between intended vs unintended indefinite vocatives',
      'Definite noun vocative (Ayyuha) and Divine vocative (Allahumma)'
    ],

    summaryAr: 'في هذه المحاضرة الشاملة لمنهج الصف الثالث الإعدادي، يتقن الطالب أسلوب النداء بجميع تفاصيله وأحكامه الإعرابية، مفرقاً بدقة بين المنادى المعرب المنصوب والمنادى المبني، ومعرباً التطبيقات المتقدمة كنداء ما فيه أل ونداء لفظ الجلالة.',
    summaryEn: 'Comprehensive Grade 9 / Prep 3 Arabic lecture covering the Vocative style: distinguishing inflected accusatives from built forms, and parsing advanced vocative constructions.',

    sections: [
      {
        titleAr: '1. أدوات النداء وأقسام المنادى المعرب (المنصوب)',
        titleEn: '1. Vocative Particles & Inflected Accusative Types',
        contentAr: 'أدوات النداء هي: الهمزة و (أيْ) لنداء القريب، (أيا) و (هيا) لنداء البعيد، و (يا) لنداء القريب والبعيد.\nينقسم المنادى المعرب (حكمه: واجب النصب) إلى ثلاثة أنواع:\n1) المنادى المضاف: يأتي بعده مضاف إليه، وتُحذف منه التنوين ونون المثنى والجمع. أمثلة: "يا طالبَ العلمِ اجتهد" (طالب: منادى منصوب بالفتحة)، "يا ذا الفضلِ" (ذا: منادى منصوب بالألف لأنه من الأسماء الخمسة)، "يا معلِّمي الخيرِ" (معلمي: منادى منصوب بالياء وحذفت النون للإضافة).\n2) المنادى الشبيه بالمضاف: ما اتصل به شيء يتمم معناه، ويثبت فيه التنوين والنون. أمثلة: "يا طالباً للعلمِ تفوق" (طالباً: منادى شبيه بالمضاف منصوب بالفتحة)، "يا باحثينَ عن الحقِّ سيروا".\n3) المنادى النكرة غير المقصودة: نكرة لا يُقصد بها شخص بعينه بل تدل على العموم، ويكون منوناً بالفتح أو منصوباً بالياء. مثال: قول الأعمى: "يا رجلاً خذ بيدي" (رجلاً: منادى نكرة غير مقصودة منصوب بالفتحة).',
        contentEn: 'Vocative particles: Hamza/Ay (near), Aya/Haya (far), Ya (universal). Inflected vocatives are always accusative: 1) Annexed (Mudaf), 2) Semi-annexed (retains nunation), 3) Unintended indefinite (general address).'
      },
      {
        titleAr: '2. المنادى المبني (على ما يُرفع به في محل نصب)',
        titleEn: '2. Built Vocative Types (Proper Nouns & Intended Indefinite)',
        contentAr: 'المنادى المبني لا يُنوّن، ويبنى على ما كان يُرفع به قبل النداء، في محل نصب مفعول به لفعل النداء المحذوف (أدعو/أنادي). ينقسم إلى نوعين:\n1) العلم المفرد (ما ليس مضافاً ولا شبيهاً بالمضاف حتى لو كان مثنى أو جمعاً):\n- "يا محمدُ": منادى علم مفرد مبني على الضم في محل نصب.\n- "يا محمدانِ": منادى علم مفرد مبني على الألف في محل نصب.\n- "يا محمدونَ": منادى علم مفرد مبني على الواو في محل نصب.\n- "يا فاطماتُ": منادى علم مفرد مبني على الضم في محل نصب.\n2) النكرة المقصودة (نكرة تُنادى بقصد وتوجيه لشخص محدد أمام المتكلم):\n- "يا طالبُ انتبه": منادى نكرة مقصودة مبني على الضم في محل نصب.\n- "يا طالبانِ اجتهدا": منادى نكرة مقصودة مبني على الألف في محل نصب.\n- "يا معلمونَ أخلصوا": منادى نكرة مقصودة مبني على الواو في محل نصب.\n\n* المقارنة الذهبية: (يا مهندسُ أتقن عملك) -> نكرة مقصودة (مبني على الضم). بينما: (يا مهندساً أتقن عملك) -> نكرة غير مقصودة (معرب منصوب بالفتحة).',
        contentEn: 'Built vocatives are built upon their nominative marker (Damma, Alif, Waw) in the place of accusative: 1) Singular Proper Nouns, 2) Intended Indefinites.'
      },
      {
        titleAr: '3. نداء ما فيه (أل) ونداء لفظ الجلالة (اللهم)',
        titleEn: '3. Definite Nouns with "Al" & The Divine Vocative',
        contentAr: '1) نداء الاسم المعرف بـ (أل):\nلا يجوز الجمع بين أداة النداء و (أل) مباشرة (إلا في لفظ الجلالة "يا الله")، لذا نتوصل لندائه بإحدى طريقتين:\n- استخدام (أيُّها) للمذكر و (أيَّتُها) للمؤنث: "يا أيُّها الطالبُ" أو "أيَّتُها الطالبةُ".\nالإعراب: (أيُّ / أيَّةُ) منادى مبني على الضم في محل نصب (نكرة مقصودة)، و (الهاء) حرف تنبيه لا محل له من الإعراب.\nما بعد أيها/أيتها: يعرب "نعتاً مرفوعاً" إذا كان اسماً مشتقاً (مثل: الطالبُ، المعلمُ)، ويعرب "بدلاً مرفوعاً" إذا كان اسماً جامداً (مثل: الرجلُ، المرأةُ، النفسُ).\n- استخدام اسم إشارة: "يا هذا الطالبُ" (هذا: منادى مبني على الضم المقدر في محل نصب، الطالب: نعت مرفوع).\n\n2) نداء لفظ الجلالة (الله):\n- يقال: "يا اللهُ" مع تحويل همزة الوصل إلى همزة قطع ظاهرة.\n- أو تحذف أداة النداء ويعوض عنها بميم مشددة مفتوحة في آخره: "اللَّهُمَّ" (الله: منادى مبني على الضم في محل نصب، والميم المشددة عوض عن حرف النداء المحذوف لا محل لها من الإعراب).',
        contentEn: 'Nouns with "Al" are addressed via Ayyuha/Ayyatuha or demonstratives. Divine Name vocative: "Ya Allah" (hamzat qat\') or "Allahumma" with suffixed doubled Meem compensating for the omitted particle.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-arab-1',
        questionAr: 'عيّن المنادى في الجمل الآتية، واذكر نوعه وحكمه الإعرابي وعلامة إعرابه أو بنائه:\n1) "يا ذا العلمِ لا تبخل بعلمك"\n2) "يا غافلاً والموتُ يطلبه"\n3) "يا مصريونَ حافظوا على وطنكم"\n4) "يا أيها المعلمُ لك الشكر"',
        questionEn: 'Identify vocatives, their type, syntactic status (inflected/built), and inflection/building markers in the given sentences.',
        solutionStepsAr: [
          '1) المنادى: "ذا" • نوعه: مضاف • حكمه: معرب منصوب وعلامة نصبه الألف لأنه من الأسماء الخمسة.',
          '2) المنادى: "غافلاً" • نوعه: نكرة غير مقصودة • حكمه: معرب منصوب وعلامة نصبه الفتحة الظاهرة.',
          '3) المنادى: "مصريونَ" • نوعه: نكرة مقصودة • حكمه: مبني على الواو في محل نصب.',
          '4) المنادى: "أيُّ" في (أيها) • نوعه: نكرة مقصودة • حكمه: مبني على الضم في محل نصب (والمعلم نعت مرفوع).'
        ],
        solutionStepsEn: [
          '1) "Dha": Annexed (Mudaf), Accusative with Alif (Five Nouns).',
          '2) "Ghafilan": Unintended Indefinite, Accusative with Fatha.',
          '3) "Misriyyoon": Intended Indefinite, Built on Waw in place of accusative.',
          '4) "Ayyu": Intended Indefinite, Built on Damma in place of accusative.'
        ],
        answerAr: '1) ذا: مضاف منصوب بالألف • 2) غافلاً: نكرة غير مقصودة منصوب بالفتحة • 3) مصريون: نكرة مقصودة مبني على الواو • 4) أي: مبني على الضم',
        answerEn: '1) Dha: Annexed Accusative (Alif) • 2) Ghafilan: Unintended Indefinite (Fatha) • 3) Misriyyoon: Intended Built (Waw) • 4) Ayyu: Built (Damma)'
      },
      {
        id: 'tb-m9-arab-2',
        questionAr: 'حوّل المنادى في الجملة التالية من منادى شبيه بالمضاف إلى منادى مضاف، ثم إلى نكرة مقصودة مع الضبط التام:\n"يا باحثاً عن الحقِّ لا تيأس"',
        questionEn: 'Convert the vocative in "Ya bahithan \'an al-haqqi" from semi-annexed into annexed, then into intended indefinite with full vocalization.',
        solutionStepsAr: [
          '1) التحويل إلى منادى مضاف: نحذف التنوين وحرف الجر ونجعل ما بعده مضافاً إليه مجروراً: "يا باحثَ الحقِّ لا تيأس".',
          '2) التحويل إلى نكرة مقصودة: نجرد المنادى مما يتمم معناه ونبنيه على الضم: "يا باحثُ لا تيأس".'
        ],
        solutionStepsEn: [
          '1) To Annexed: "Ya bahitha al-haqqi" (drop nunation and preposition, add genitive noun).',
          '2) To Intended Indefinite: "Ya bahithu" (built on Damma without complement).'
        ],
        answerAr: 'المضاف: "يا باحثَ الحقِّ" • النكرة المقصودة: "يا باحثُ"',
        answerEn: 'Annexed: "Ya bahitha al-haqqi" • Intended Indefinite: "Ya bahithu"'
      }
    ],

    assessment: {
      id: 'quiz-m9-arab-1',
      lectureId: 'm9-arab-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: أسلوب النداء والمنادى',
      titleEn: 'Mastery Assessment 1: Vocative Style & Munada Rules',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-arab-1',
          textAr: 'إعراب كلمة "طالب" في قولنا: "يا طالبَ العلمِ سِر في طريق التفوق" هو:',
          textEn: 'Parsing of "taliba" in "Ya taliba al-\'ilmi" is:',
          optionsAr: [
            'منادى مضاف منصوب وعلامة نصبه الفتحة الظاهرة',
            'منادى علم مفرد مبني على الضم في محل نصب',
            'مبتدأ مرفوع وعلامة رفعه الضمة',
            'منادى نكرة مقصودة مبني على الفتح'
          ],
          optionsEn: [
            'Annexed vocative, accusative with apparent Fatha',
            'Singular proper vocative, built on Damma in place of accusative',
            'Subject nominative with Damma',
            'Intended indefinite vocative built on Fatha'
          ],
          correctIndex: 0,
          conceptTestedAr: 'إعراب المنادى المضاف',
          conceptTestedEn: 'Parsing Annexed Vocative',
          explanationAr: 'كلمة "طالب" أضيفت إلى كلمة "العلم" (مضاف إليه)، وحكم المنادى المضاف هو النصب بالفتحة.',
          explanationEn: '"Taliba" is annexed to "al-\'ilmi" (mudaf ilayh), so it is an annexed vocative inflected in the accusative with Fatha.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-arab-1',
          textAr: 'في جملة: "يا أيُّها الطالبُ"، إعراب كلمة "الطالبُ" هو:',
          textEn: 'In "Ya ayyuha al-talibu", the parsing of "al-talibu" is:',
          optionsAr: [
            'نعت مرفوع وعلامة رفعه الضمة الظاهرة',
            'منادى منصوب بالفتحة',
            'مضاف إليه مجرور بالكسرة',
            'خبر مرفوع بالضمة'
          ],
          optionsEn: [
            'Adjective (Na\'t) nominative with apparent Damma',
            'Vocative accusative with Fatha',
            'Genitive annexed with Kasra',
            'Predicate nominative with Damma'
          ],
          correctIndex: 0,
          conceptTestedAr: 'إعراب الاسم الواقع بعد أيها وأيتها',
          conceptTestedEn: 'Parsing Nouns following Ayyuha/Ayyatuha',
          explanationAr: 'المنادى الحقيقي هو "أيُّ" (مبني على الضم)، والاسم المشتق الواقع بعد (أيها) يعرب دائماً نعتاً مرفوعاً.',
          explanationEn: 'The true vocative is "Ayyu" (built on Damma), and the following derived noun "al-talibu" is parsed as a nominative adjective (Na\'t).',
          difficulty: 'medium'
        },
        {
          id: 'q3-m9-arab-1',
          textAr: 'المنادى في قولنا: "يا محمدونَ أخلصوا في عملكم" مبني على:',
          textEn: 'The vocative in "Ya Muhammaduuna" is built upon:',
          optionsAr: ['الواو في محل نصب', 'الضمة الظاهرة', 'ثبوت النون', 'الفتحة في محل جر'],
          optionsEn: ['Waw in place of accusative', 'Apparent Damma', 'Retention of Nun', 'Fatha in place of genitive'],
          correctIndex: 0,
          conceptTestedAr: 'بناء المنادى العلم المفرد الجمع',
          conceptTestedEn: 'Building Proper Plural Vocatives',
          explanationAr: '"محمدون" علم مفرد جمع مذكر سالم، وحكمه البناء على ما يرفع به وهو (الواو) في محل نصب.',
          explanationEn: '"Muhammaduuna" is a proper plural masculine noun, built on its nominative sign (Waw) in the place of accusative.',
          difficulty: 'easy'
        },
        {
          id: 'q4-m9-arab-1',
          textAr: 'أي الجمل الآتية تشتمل على منادى شبيه بالمضاف؟',
          textEn: 'Which of the following contains a semi-annexed vocative?',
          optionsAr: [
            'يا قارئاً للقرآنِ تدبر آياته',
            'يا قارئَ القرآنِ تدبر آياته',
            'يا قارئُ تدبر القرآن',
            'يا رجلاً استقم'
          ],
          optionsEn: [
            'Ya qari\'an lil-qur\'ani',
            'Ya qari\'a al-qur\'ani',
            'Ya qari\'u',
            'Ya rajulan'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تمييز المنادى الشبيه بالمضاف',
          conceptTestedEn: 'Identifying Semi-Annexed Vocative',
          explanationAr: '"يا قارئاً للقرآن" منادى شبيه بالمضاف لأنه منون وجاء بعده جار ومجرور يتمم معناه.',
          explanationEn: '"Ya qari\'an lil-qur\'ani" is semi-annexed because it retains nunation and is completed by a prepositional phrase.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: THE APPOSITION (البدل وأنواعه) ──
  {
    id: 'm9-arab-2',
    order: 2,
    titleAr: 'المحاضرة 2: التوابع: البدل وأنواعه (المطابق، بعض من كل، الاشتمال) وإعرابه',
    titleEn: 'Lecture 2: Syntactic Followers: Apposition (Badal) Types & Parsing',
    subtitleAr: 'دراسة مفهوم البدل والمبدل منه، وأنواعه الثلاثة: البدل المطابق (كل من كل)، بدل بعض من كل، وبدل الاشتمال وشروط الضمير الرابط وأحكام التبعية الإعرابية',
    subtitleEn: 'Master the Arabic Apposition (Badal), including Full Matching Badal (Kul min Kul), Part-of-Whole Badal (Ba\'d min Kul), and Inclusive Badal (Ishtimal) with pronoun agreements.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Arabic Language & Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: التوابع في النحو العربي (البدل)',
    unitTitleEn: 'Unit 2: Syntactic Followers: The Apposition',
    lessonNumberAr: 'الدرس 2: البدل وأنواعه وأحكامه',
    lessonNumberEn: 'Lesson 2: Types & Syntax of Badal',

    warmupHookAr: 'عندما تقرأ: "قال الفاروقُ عمرُ" أو "هذا الطالبُ متفوقٌ"، نلاحظ أن الكلمة الثانية جاءت مقصودة بالحكم ذاته وتوضح الكلمة الأولى وتطابقها تماماً؛ بحيث يمكنك حذف الكلمة الأولى دون أن يتأثر المعنى إطلاقاً! هذا التابع البديع في لغتنا يُسمى "البدل" (Badal)، وهو أداة البيان والتوكيد والتفصيل الفصيح التي تجعل التعبير العربي في قمة البلاغة والدقة!',
    warmupHookEn: 'In expressions like "Al-Farooq Umar" or "This student", the second word functions as the intended core entity. This grammatical device is the Apposition (Badal), enhancing rhetorical clarity across classical prose!',

    learningOutcomesAr: [
      'أن يعرّف الطالب البدل كتابع مقصود بالحكم يمهد له بذكر المبدل منه قبله ويتبعه في الإعراب (رفعاً ونصباً وجراً)',
      'أن يحدد البدل المطابق (كل من كل) في صوره الثلاث: 1) اللقب/الوظيفة + العلم، 2) اسم الإشارة + المعرف بأل، 3) الكلمة المكررة للتوضيح والتفسير',
      'أن يميز بدل (بعض من كل) كجزء مادي حقيقي متصل بضمير يعود على المبدل منه، أو كأجزاء مفصلة بعد إجمال',
      'أن يميز بدل (الاشتمال) كأمر معنوي معنوي يشتمل عليه المبدل منه ومتصل بضمير رابط يطابق المبدل منه',
      'أن يعرب البدل بدقة وفق الموقع الإعرابي للمبدل منه في مختلف الشواهد النحوية'
    ],
    learningOutcomesEn: [
      'Define Badal as an intended syntactic follower agreeing with its antecedent (Mubdal minhu) in case',
      'Identify Full Matching Badal (Kul min Kul) in its standard patterns (Title + Proper Name, Demonstrative + Definite Noun, Explanatory Repetition)',
      'Distinguish Part-of-Whole Badal (Ba\'d min Kul) as a tangible physical fraction with an anaphoric pronoun',
      'Distinguish Inclusive Badal (Ishtimal) as an intangible quality belonging to the antecedent with a matching pronoun',
      'Parse Badal accurately reflecting the grammatical case of the Mubdal minhu'
    ],

    vocabulary: [
      {
        termAr: 'البدل (Apposition - Badal)',
        termEn: 'The Apposition (Badal)',
        definitionAr: 'تابع مقصود بالحكم بلا واسطة، يذكر بعد اسم قبله يسمى المبدل منه يمهد له ويزيل غموضه، ويتبعه في الإعراب رفعاً ونصباً وجراً.',
        definitionEn: 'A syntactic follower directly intended by the ruling predicate, following an antecedent (Mubdal minhu) in case.'
      },
      {
        termAr: 'البدل المطابق / كل من كل (Full Matching Badal)',
        termEn: 'Full Matching Badal (Kul min Kul)',
        definitionAr: 'بدل يتطابق فيه البدل مع المبدل منه تطابقاً تاماً ويتساويان في المعنى والدلالة (مثل: حكم الخليفةُ عادلٌ عمرُ بالعدل).',
        definitionEn: 'An apposition identical in referent and meaning to its antecedent.'
      },
      {
        termAr: 'بدل بعض من كل (Part-of-Whole Badal)',
        termEn: 'Part-of-Whole Badal (Ba\'d min Kul)',
        definitionAr: 'أن يكون البدل جزءاً حقيقياً ومادياً من المبدل منه، ويشترط أن يتصل بضمير يعود على المبدل منه ويطابقه في النوع والعدد (مثل: قرأتُ الكتابَ نصفَهُ).',
        definitionEn: 'An apposition that is a tangible physical component of the whole, containing a matching referential pronoun.'
      },
      {
        termAr: 'بدل الاشتمال (Inclusive Badal - Ishtimal)',
        termEn: 'Inclusive Badal (Ishtimal)',
        definitionAr: 'أن يكون البدل مما يشتمل عليه المبدل منه وليس جزءاً مادياً منه (شيء معنوي)، ويشترط فيه ضمير رابط (مثل: أعجبني المعلمُ خلقُهُ / نفعني الطبيبُ علمُهُ).',
        definitionEn: 'An apposition denoting an intangible attribute or quality included within the antecedent, containing a linking pronoun.'
      }
    ],

    keyConceptsAr: [
      'البدل من التوابع (يتبع المبدل منه في الحالة الإعرابية: رفعاً، نصباً، جراً)',
      'صور البدل المطابق: (لقب/مهنة + علم: النبيُّ محمدٌ) | (اسم إشارة + معرّف بأل: هؤلاءِ الطلابُ) | (تكرار الكلمة: اهدنا الصراطَ المستقيمَ صراطَ الذين)',
      'بدل بعض من كل (مادي): سقطَ المنزلُ سقفُهُ | أكلتُ التفاحةَ ربعَها',
      'بدل الاشتمال (معنوي): راقني الكتابُ أسلوبُهُ | بهرني الطالبُ ذكاؤُهُ',
      'شرط بدل البعض من كل والاشتمال: اشتمالهما على ضمير (ها، ه، هم...) يعود على المبدل منه'
    ],
    keyConceptsEn: [
      'Badal follows the Mubdal minhu in grammatical case',
      'Three standard configurations of Full Matching Badal',
      'Tangible Part-of-Whole vs Intangible Inclusive Badal',
      'Mandatory linking pronoun requirement for part-of-whole and inclusive types'
    ],

    summaryAr: 'تغطي هذه المحاضرة درس البدل للصف الثالث الإعدادي: صوره الثلاث (المطابق، بعض من كل، الاشتمال)، ضوابط استخراج البدل والمبدل منه، شروط الضمير الرابط، وإعرابه الدقيق كتابع في مختلف الجمل.',
    summaryEn: 'Comprehensive Grade 9 lecture on the Apposition (Badal): its three main classes (Matching, Part-of-Whole, Inclusive), pronoun conditions, and syntactic parsing.',

    sections: [
      {
        titleAr: '1. تعريف البدل والبدل المطابق (كل من كل)',
        titleEn: '1. Badal Definition & Full Matching Apposition',
        contentAr: 'البدل هو تابع مقصود بالحكم يذكر بعد اسم قبله غير مقصود لذاته يسمى المبدل منه، ويتبعه في الإعراب.\nالنوع الأول: البدل المطابق (كل من كل):\nيكون البدل عين المبدل منه ومساوياً له في المعنى، وأشهر صوره:\n1) لقب أو وظيفة أو صلة قرابة + اسم علم: "كان الخليفةُ عمرُ عادلاً" (عمر: بدل مطابق مرفوع بالضمة لأن المبدل منه الخليفة اسم كان مرفوع)، "أحببتُ الأستاذَ أحمدَ" (أحمد: بدل مطابق منصوب بالفتحة).\n2) اسم إشارة + اسم معرّف بـ (أل) مشار إليه: "هذا الطالبُ نشيط" (الطالب: بدل مطابق مرفوع بالضمة). *تنبيه: إذا لم يكن الاسم المعرف بأل هو المشار إليه يعرب فاعلاً أو مفعولاً حسب المعنى (مثل: قال ذلك الرجلُ -> الرجل فاعل لـ قال).\n3) الكلمة المكررة لتوضيح الأولى وتفصيلها: كما في قوله تعالى: ﴿اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ * صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ﴾ (صراط الثانية: بدل مطابق منصوب بالفتحة).',
        contentEn: 'Full Matching Badal (Kul min Kul) equals the antecedent: 1) Title/Profession + Proper Name, 2) Demonstrative + Definite Noun, 3) Clarifying repetition of noun.'
      },
      {
        titleAr: '2. بدل بعض من كل وبدل الاشتمال وشروطهما',
        titleEn: '2. Part-of-Whole Badal vs Inclusive Badal',
        contentAr: 'النوع الثاني: بدل بعض من كل (Ba\'d min Kul):\nهو ما كان جزءاً مادياً حقيقياً يمكن فصله وتجزئته من المبدل منه، ويشترط اتصاله بضمير يعود على المبدل منه:\n- "قرأتُ الكتابَ ثلثَهُ" (ثلثه: بدل بعض من كل منصوب بالفتحة، والهاء مضاف إليه).\n- "سقطَ البيتُ سقفُهُ" (سقفه: بدل بعض من كل مرفوع بالضمة).\n- صورته بدون ضمير (سرد الأجزاء بعد إجمال): "اتقوا الله في الضعيفينِ: المرأةِ واليتيم" (المرأة: بدل بعض من كل مجرور بالياء).\n\nالنوع الثالث: بدل الاشتمال (Ishtimal):\nهو ما كان معنوياً يشتمل عليه المبدل منه وليس جزءاً مادياً منه، ويشترط اتصاله بضمير رابط:\n- "أعجبني المعلمُ شرحُهُ" (شرحه: بدل اشتمال مرفوع بالضمة لأن المعلم فاعل مرفوع).\n- "انتفعتُ بالقرآنِ هديِهِ" (هديه: بدل اشتمال مجرور بالكسرة).\n- "سمعتُ الشاعرَ إنشادَهُ" (إنشاده: بدل اشتمال منصوب بالفتحة).',
        contentEn: 'Part-of-Whole Badal is a physical, separable component (e.g. half, roof) containing a pronoun. Inclusive Badal is an intangible attribute/quality (e.g. explanation, guidance, voice) containing a pronoun.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-arab-3',
        questionAr: 'استخرج البدل والمبدل منه وبيّن نوع البدل وعلامة إعرابه في الجمل الآتية:\n1) "بُعث النبيُّ محمدٌ بالهدى ودين الحق"\n2) "أعجبتني الحديقةُ أزهارُها"\n3) "أبهرني الطالبُ ذكاؤُهُ"\n4) "إنَّ هذا المعلمَ مخلصٌ"',
        questionEn: 'Extract the Badal and Mubdal minhu, stating the Badal type and case ending in the provided sentences.',
        solutionStepsAr: [
          '1) المبدل منه: "النبيُّ" | البدل: "محمدٌ" | نوعه: بدل مطابق (كل من كل) | إعرابه: بدل مرفوع بالضمة الظاهرة.',
          '2) المبدل منه: "الحديقةُ" | البدل: "أزهارُها" | نوعه: بدل بعض من كل (مادي) | إعرابه: بدل مرفوع بالضمة الظاهرة والهاء مضاف إليه.',
          '3) المبدل منه: "الطالبُ" | البدل: "ذكاؤُهُ" | نوعه: بدل اشتمال (معنوي) | إعرابه: بدل مرفوع بالضمة والهاء مضاف إليه.',
          '4) المبدل منه: اسم الإشارة "هذا" | البدل: "المعلمَ" | نوعه: بدل مطابق | إعرابه: بدل منصوب بالفتحة الظاهرة (لأن هذا في محل نصب اسم إن).'
        ],
        solutionStepsEn: [
          '1) Mubdal minhu: "Al-Nabiyyu", Badal: "Muhammadun" (Full Matching, Nominative with Damma).',
          '2) Mubdal minhu: "Al-Hadiqatu", Badal: "Azharuha" (Part-of-Whole, Nominative with Damma).',
          '3) Mubdal minhu: "Al-Talibu", Badal: "Dhakauhu" (Inclusive, Nominative with Damma).',
          '4) Mubdal minhu: "Hadha", Badal: "Al-Mu\'allima" (Full Matching, Accusative with Fatha).'
        ],
        answerAr: '1) محمد: مطابق مرفوع • 2) أزهارها: بعض من كل مرفوع • 3) ذكاؤه: اشتمال مرفوع • 4) المعلم: مطابق منصوب',
        answerEn: '1) Muhammad (Matching, Nom) • 2) Azharuha (Part-of-Whole, Nom) • 3) Dhakauhu (Inclusive, Nom) • 4) Al-Mu\'allim (Matching, Acc)'
      }
    ],

    assessment: {
      id: 'quiz-m9-arab-2',
      lectureId: 'm9-arab-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: البدل وأنواعه',
      titleEn: 'Mastery Assessment 2: Badal & Apposition Types',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-arab-2',
          textAr: 'في جملة: "أعجبني العقادُ فكرُهُ"، نوع البدل هو:',
          textEn: 'In "A\'jabani Al-\'Aqqadu fikruhu", the type of Badal is:',
          optionsAr: ['بدل اشتمال', 'بدل مطابق (كل من كل)', 'بدل بعض من كل', 'نعت سببي'],
          optionsEn: ['Inclusive Badal (Ishtimal)', 'Full Matching Badal', 'Part-of-Whole Badal', 'Causal Adjective'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز بدل الاشتمال',
          conceptTestedEn: 'Identifying Inclusive Badal',
          explanationAr: '"فكرُه" أمر معنوي مما يشتمل عليه العقاد وليس جزءاً مادياً يقتطع منه، لذا فهو بدل اشتمال.',
          explanationEn: '"Fikruhu" (his thought) is an intangible attribute contained within Al-\'Aqqad, making it an Inclusive Badal (Ishtimal).',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-arab-2',
          textAr: 'في جملة: "سقطَ المنزلُ جدارُهُ"، كلمة "جدارُه" تعرب:',
          textEn: 'In "Saqata al-manzilu jidaruhu", the word "jidaruhu" is parsed as:',
          optionsAr: [
            'بدل بعض من كل مرفوع وعلامة رفعه الضمة الظاهرة',
            'بدل اشتمال منصوب بالفتحة',
            'مفعول به منصوب بالفتحة',
            'فاعل ثانٍ مرفوع بالضمة'
          ],
          optionsEn: [
            'Part-of-whole Badal, nominative with apparent Damma',
            'Inclusive Badal, accusative with Fatha',
            'Direct object accusative with Fatha',
            'Second agent nominative with Damma'
          ],
          correctIndex: 0,
          conceptTestedAr: 'إعراب بدل بعض من كل',
          conceptTestedEn: 'Parsing Part-of-Whole Badal',
          explanationAr: 'الجدار جزء مادي حقيقي من أجزاء المنزل، والمبدل منه (المنزل) فاعل مرفوع، فيكون البدل مرفوعاً بالضمة.',
          explanationEn: 'The wall is a physical part of the house, following the nominative agent "al-manzilu" in case as a nominative Part-of-Whole Badal.',
          difficulty: 'easy'
        },
        {
          id: 'q3-m9-arab-2',
          textAr: 'في جملة: "تلك الفتاةُ مهذبة"، كلمة "الفتاةُ" تعرب:',
          textEn: 'In "Tilka al-fataatu muhadh-dhabatun", the word "al-fataatu" is parsed as:',
          optionsAr: ['بدل مطابق مرفوع بالضمة', 'خبر المبتدأ مرفوع بالضمة', 'نعت منصوب بالفتحة', 'مضاف إليه مجرور'],
          optionsEn: ['Matching Badal, nominative with Damma', 'Predicate nominative with Damma', 'Adjective accusative', 'Genitive mudaf ilayh'],
          correctIndex: 0,
          conceptTestedAr: 'إعراب الاسم المعرف بأل بعد اسم الإشارة',
          conceptTestedEn: 'Parsing Definite Noun after Demonstrative',
          explanationAr: 'الاسم المعرف بـ (أل) الواقع بعد اسم الإشارة والمشار إليه يعرب دائماً بدلاً مطابقاً مرفوعاً.',
          explanationEn: 'A noun with "Al" following a demonstrative pointing to it is parsed as a Full Matching Badal.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: PRAISE & DISPRAISE (أسلوب المدح والذم) ──
  {
    id: 'm9-arab-3',
    order: 3,
    titleAr: 'المحاضرة 3: أسلوب المدح وأسلوب الذم (نعم وبئس، حبذا ولا حبذا)',
    titleEn: 'Lecture 3: Praise & Dispraise Styles: Ni\'ma & Bi\'sa, Habbadha & La Habbadha',
    subtitleAr: 'دراسة أركان أسلوبي المدح والذم (الفعل، الفاعل، المخصوص)، صور فاعل نعم وبئس الأربع، إعراب المخصوص بالمدح والذم جوازاً ووجوباً، وحالات تقديم وتأخير المخصوص',
    subtitleEn: 'Master Arabic Praise and Dispraise constructions, the 4 subject forms of Ni\'ma/Bi\'sa, and the parsing rules for the dedicated praised/dispraised noun (Makhsoos).',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Arabic Language & Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: الأساليب النحوية (أسلوب المدح والذم)',
    unitTitleEn: 'Unit 3: Grammatical Styles: Praise & Dispraise',
    lessonNumberAr: 'الدرس 3: أسلوب المدح والذم وأحكامهما',
    lessonNumberEn: 'Lesson 3: Syntactic Architecture of Praise & Dispraise',

    warmupHookAr: 'عندما ترغب في التعبير عن استحسانك البالغ لخلق نبيل مثل الصدق، أو استنكاره لسلوك مذموم كالنفاق، فإن اللغة العربية تمنحك أسلوباً بلاغياً بديعاً يُعرف بـ "أسلوب المدح وأسلوب الذم". باستخدام كلمات محددة مثل (نِعْمَ) و(بِئْسَ) أو (حبَّذا) و(لا حبَّذا)، تبني جملاً رصينة تحمل أعلى درجات التقدير أو الاستهجان بقواعد إعرابية محكمة!',
    warmupHookEn: 'Arabic utilizes dedicated verbal formulas for expressing commendation (Ni\'ma / Habbadha) and condemnation (Bi\'sa / La Habbadha), featuring distinct grammatical subject classes and flexible predicate ordering!',

    learningOutcomesAr: [
      'أن يحدد الطالب أركان أسلوب المدح والذم الثلاثة: 1) فعل المدح/الذم، 2) الفاعل، 3) المخصوص بالمدح أو الذم',
      'أن يستخرج صور فاعل (نعم وبئس) الأربع: 1) المعرف بأل، 2) المضاف إلى ما فيه أل، 3) ضمير مستتر مفسر بنكرة (تمييز)، 4) (ما) أو (من) الموصولتان',
      'أن يعرب المخصوص بالمدح والذم مع (نعم وبئس) بوجهين جائزين: 1) مبتدأ مؤخر، أو 2) خبر لمبتدأ محذوف وجوباً',
      'أن يتقن صياغة وإعراب (حبَّذا) للمدح و (لا حبَّذا) للذم، وبيان أن فاعلها اسم الإشارة (ذا) والمخصوص بعدها واجب التأخير'
    ],
    learningOutcomesEn: [
      'Identify the 3 elements of praise/dispraise: Verb, Subject (Fa\'il), and the Designated entity (Makhsoos)',
      'Analyze the 4 subject forms for Ni\'ma and Bi\'sa',
      'Parse the Makhsoos with Ni\'ma/Bi\'sa (permissibly delayed Subject or Predicate to omitted Subject)',
      'Construct and parse Habbadha and La Habbadha with obligatory delayed Makhsoos'
    ],

    vocabulary: [
      {
        termAr: 'أسلوب المدح (Praise Style - Al-Madh)',
        termEn: 'Praise Style (Al-Madh)',
        definitionAr: 'أسلوب لغوي يُستخدم لاستحسان أمر أو صفة تستحق الثناء، وأشهر أفعاله: نِعْمَ، وحَبَّذا.',
        definitionEn: 'A syntactic construction used to express approval/commendation (Ni\'ma, Habbadha).'
      },
      {
        termAr: 'أسلوب الذم (Dispraise Style - Adh-Dhamm)',
        termEn: 'Dispraise Style (Adh-Dhamm)',
        definitionAr: 'أسلوب لغوي يُستخدم لاستهجان أمر أو صفة تستحق العيب والتقبيح، وأشهر أفعاله: بِئْسَ، ولا حَبَّذا.',
        definitionEn: 'A syntactic construction used to express disapproval/condemnation (Bi\'sa, La Habbadha).'
      },
      {
        termAr: 'المخصوص بالمدح أو الذم (Al-Makhsoos)',
        termEn: 'The Designated Entity (Al-Makhsoos)',
        definitionAr: 'الاسم المعين المراد مدحه أو ذمه في الجملة، وهو مرفوع دائماً، ويجوز تقديمه مع نعم وبئس، ويمتنع تقديمه مع حبذا ولا حبذا.',
        definitionEn: 'The specific noun being praised or dispraised, always in the nominative case.'
      }
    ],

    keyConceptsAr: [
      'أركان الأسلوب: فعل (نعم/بئس) + فاعل + مخصوص',
      'صور فاعل نعم وبئس: 1) نعمَ الخلقُ الصدقُ | 2) نعمَ خلقُ المرءِ الأمانةُ | 3) نعمَ خلقاً الإخلاصُ (ضمير مستتر) | 4) نعمَ ما تفعلُ الخيرُ',
      'إعراب المخصوص مع نعم وبئس: مبتدأ مؤخر جوازاً (أو خبر لمبتدأ محذوف)',
      'مع نعم وبئس يجوز تقديم المخصوص: "الصدقُ نعمَ الخلقُ"',
      'مع حبذا ولا حبذا: الفاعل هو (ذا)، والمخصوص مبتدأ مؤخر وجوباً: "حبذا الصدقُ" (لا يصح: الصدق حبذا)'
    ],
    keyConceptsEn: [
      'Praise structure: Verb + Subject + Makhsoos',
      'Four structural patterns for Ni\'ma and Bi\'sa subjects',
      'Dual parsing options for Makhsoos with Ni\'ma/Bi\'sa',
      'Obligatory delayed subject position in Habbadha constructions'
    ],

    summaryAr: 'تتناول هذه المحاضرة قواعد أسلوبي المدح والذم: أحكام (نعم وبئس) وصور فاعلهما الأربع، إعراب المخصوص، وقواعد (حبذا ولا حبذا) والفرق بين التقديم الجائز والواجب.',
    summaryEn: 'Covers Arabic praise and dispraise grammar: Ni\'ma/Bi\'sa subject variants, Makhsoos syntax, and Habbadha/La Habbadha rules.',

    sections: [
      {
        titleAr: '1. أسلوب المدح والذم بـ (نعم وبئس) وصور الفاعل',
        titleEn: '1. Praise & Dispraise with Ni\'ma/Bi\'sa & Subject Forms',
        contentAr: '1) نِعْمَ: فعل ماضٍ جامد مبني على الفتح يفيد المدح.\n2) بِئْسَ: فعل ماضٍ جامد مبني على الفتح يفيد الذم.\nصور فاعل نعم وبئس (4 صور):\n- الصورة 1 (معرف بأل): "نعمَ العملُ الإتقانُ" (العمل: فاعل مرفوع بالضمة).\n- الصورة 2 (مضاف لما فيه أل): "بئسَ جليسُ السوءِ النمامُ" (جليس: فاعل مرفوع، السوء: مضاف إليه).\n- الصورة 3 (ضمير مستتر مفسر بنكرة تعرب تمييزاً): "نعمَ خلقاً الصدقُ" (الفاعل ضمير مستتر تقديره هو، خلقاً: تمييز منصوب بالفتحة).\n- الصورة 4 (اسم موصول: ما لغير العاقل، مَنْ للعاقل): "نعمَ ما تتصفُ به الوفاءُ" (ما: اسم موصول مبني في محل رفع فاعل).\n\nإعراب المخصوص بالمدح والذم مع نعم وبئس (مرفوع دائماً، وله وجهان إعرابيان):\n1) مبتدأ مؤخر جوازاً مرفوع بالضمة، والجملة الفعلية (نعم العمل) قبله خبر مقدم.\n2) خبر لمبتدأ محذوف وجوباً تقديره (هو): "نعم العملُ [هو] الإتقانُ".\n* يجوز تقديم المخصوص: "الإتقانُ نعمَ العملُ" (الإتقان: مبتدأ مرفوع، وجملة نعم العمل خبره).',
        contentEn: 'Ni\'ma/Bi\'sa are fixed past verbs. Their subjects take 4 forms: Definite with Al, Annexed to definite, Latent pronoun explained by Tamyeiz, or Relative pronoun Ma/Man.'
      },
      {
        titleAr: '2. أسلوب المدح والذم بـ (حبَّذا ولا حبَّذا)',
        titleEn: '2. Praise & Dispraise with Habbadha & La Habbadha',
        contentAr: '1) حَبَّذا: للمدح، وتتكون من:\n- "حَبَّ": فعل ماض جامد مبني على الفتح.\n- "ذا": اسم إشارة مبني في محل رفع فاعل.\n- الاسم الواقع بعدها هو المخصوص بالمدح، ويعرب: "مبتدأ مؤخر وجوباً مرفوع"، وجملة (حبذا) خبر مقدم.\n\n2) لا حَبَّذا: للذم، و"لا" حرف نفي، و"حبَّ" الفعل، و"ذا" الفاعل.\n\n* الفارق الجوهري بين (نعم/بئس) و (حبذا/لا حبذا):\n- مع نعم وبئس: المخصوص جائز التأخير (يجوز: الصدق نعم الخلق / نعم الخلق الصدق).\n- مع حبذا ولا حبذا: المخصوص واجب التأخير ولا يجوز تقديمه أبداً (نقول: حبَّذا الصدقُ، ولا يجوز قول: الصدق حبذا).',
        contentEn: 'Habbadha (praise) and La Habbadha (dispraise) embed the demonstrative "Dha" as subject. The following Makhsoos is obligatorily postponed.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-arab-4',
        questionAr: 'أعرب الجملة الآتية إعراباً كاملاً:\n"نعمَ صفةً الأمانةُ"\nثم صغ جملة للمدح يكون فيها المخصوص "الوفاء" واجب التأخير.',
        questionEn: 'Parse completely: "Ni\'ma sifatan al-amanatu". Then construct a praise sentence where "al-wafa" is obligatorily delayed.',
        solutionStepsAr: [
          'الإعراب الكامل:\n• نِعْمَ: فعل ماضٍ جامد مبني على الفتح يفيد المدح.\n• الفاعل: ضمير مستتر وجوباً تقديره (هي) يفسره التمييز (صفة).\n• صفةً: تمييز منصوب وعلامة نصبه الفتحة الظاهرة.\n• الأمانةُ: المخصوص بالمدح، وله وجهان: 1) مبتدأ مؤخر جوازاً مرفوع بالضمة والجملة قبله خبر مقدم، أو 2) خبر لمبتدأ محذوف وجوباً تقديره (هي).\n\nصياغة جملة المخصوص واجب التأخير:\nنستخدم (حبَّذا): "حبَّذا الوفاءُ".'
        ],
        solutionStepsEn: [
          'Full parsing: Ni\'ma = past praise verb; Subject = latent pronoun; Sifatan = Tamyeiz accusative; Al-Amanatu = Makhsoos (nominative postponed subject or predicate to hidden subject).\nObligatory postponed sentence: "Habbadha al-wafa\'u".'
        ],
        answerAr: 'نعم: فعل ماض • صفة: تمييز منصوب • الأمانة: مخصوص مبتدأ مؤخر • الجملة واجبة التأخير: "حبذا الوفاءُ"',
        answerEn: 'Ni\'ma = Verb • Sifatan = Tamyeiz • Al-Amanatu = Makhsoos • Obligatory: "Habbadha al-wafa\'u"'
      }
    ],

    assessment: {
      id: 'quiz-m9-arab-3',
      lectureId: 'm9-arab-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: أسلوب المدح والذم',
      titleEn: 'Mastery Assessment 3: Praise & Dispraise',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-arab-3',
          textAr: 'في جملة: "بئسَ عملاً الخيانةُ"، الفاعل هو:',
          textEn: 'In "Bi\'sa \'amalan al-khiyanatu", the subject is:',
          optionsAr: ['ضمير مستتر مفسر بتمييز', 'كلمة "عملاً"', 'كلمة "الخيانةُ"', 'اسم الإشارة ذا'],
          optionsEn: ['Latent pronoun explained by Tamyeiz', 'The word "\'Amalan"', 'The word "Al-Khiyanatu"', 'Demonstrative Dha'],
          correctIndex: 0,
          conceptTestedAr: 'صور فاعل نعم وبئس',
          conceptTestedEn: 'Subject Forms of Ni\'ma and Bi\'sa',
          explanationAr: 'إذا جاء بعد نعم أو بئس اسم نكرة منصوب، فإنه يعرب تمييزاً، ويكون الفاعل ضميراً مستتراً وجوباً.',
          explanationEn: 'When an indefinite accusative noun follows Ni\'ma/Bi\'sa, it is parsed as Tamyeiz, and the subject is a latent pronoun.',
          difficulty: 'medium'
        },
        {
          id: 'q2-m9-arab-3',
          textAr: 'حكم تقديم المخصوص بالمدح في جملة: "حبَّذا الإخلاصُ" هو:',
          textEn: 'The rule of preposing the Makhsoos in "Habbadha al-ikhlasu" is:',
          optionsAr: ['يمتنع تقديمه (واجب التأخير)', 'يجوز تقديمه وتأخيره', 'مستحب تقديمه', 'واجب التقديم'],
          optionsEn: ['Forbidden to prepose (obligatorily delayed)', 'Permissible to prepose or delay', 'Recommended to prepose', 'Obligatory to prepose'],
          correctIndex: 0,
          conceptTestedAr: 'أحكام المخصوص مع حبذا',
          conceptTestedEn: 'Makhsoos Position with Habbadha',
          explanationAr: 'المخصوص بالمدح مع حبذا ولا حبذا يجب تأخيره دائماً ولا يجوز تقديمه مطلقاً.',
          explanationEn: 'The Makhsoos with Habbadha/La Habbadha is obligatorily postponed and cannot precede the verb.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: THE DIPTOTE (الممنوع من الصرف) ──
  {
    id: 'm9-arab-4',
    order: 4,
    titleAr: 'المحاضرة 4: الممنوع من الصرف لعلة واحدة ولعلتين وعلامات إعرابه',
    titleEn: 'Lecture 4: The Diptote (Mamnoo\' Min As-Sarf): Single/Dual Causes & Declension',
    subtitleAr: 'دراسة علتي المنع لسبب واحد (صيغة منتهى الجموع، ألف التأنيث المقصورة والممدودة)، ولسببين (الأعلام والصفات)، وحالات جره بالفتحة نيابة عن الكسرة وجره بالكسرة',
    subtitleEn: 'Master Arabic Diptotes: nouns barred from nunation for one reason or two reasons (proper nouns and adjectives), and their special genitive inflection with Fatha vs Kasra.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Arabic Language & Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: الممنوع من الصرف وأحكامه',
    unitTitleEn: 'Unit 4: The Diptote (Mamnoo\' Min As-Sarf)',
    lessonNumberAr: 'الدرس 4: الممنوع من الصرف لعلة ولعلتين وإعرابه',
    lessonNumberEn: 'Lesson 4: Diptote Morphology & Inflection',

    warmupHookAr: 'في اللغة العربية، الكلمة الأصلية تُنوّن (تُصرف) لتثبت خفتها وتمكنها في الاسمية. لكن هناك أسماء ثقيلة تشبه الأفعال في تركيبها أو دلالتها، فمنعها العرب من التنوين وحرموها من الكسرة فجروها بالفتحة! هذا الباب النحوي الشهير هو "الممنوع من الصرف". يظهر في القرآن الكريم في قوله تعالى: ﴿وَلَقَدْ زَيَّنَّا السَّمَاءَ الدُّنْيَا بِمَصَابِيحَ﴾ (بمصابيحَ: مجرور بالفتحة)! لنكتشف أسباب منع الأسماء وقواعد إعرابها!',
    warmupHookEn: 'Diptotes (Mamnoo\' Min As-Sarf) are Arabic nouns barred from nunation and declined with Fatha in the genitive due to structural heaviness. Discover the singular and dual causes for diptote status!',

    learningOutcomesAr: [
      'أن يعرّف الطالب الممنوع من الصرف بأنه الاسم الذي لا يُنوّن ويُجر بالفتحة نيابة عن الكسرة',
      'أن يحدد الأسماء الممنوعة من الصرف لعلة واحدة: 1) صيغة منتهى الجموع، 2) الاسم المختوم بألف التأنيث المقصورة، 3) الاسم المختوم بألف التأنيث الممدودة',
      'أن يحدد الأعلام الممنوعة من الصرف لعلتين (العلمية مع: التأنيث، العجمة، التركيب المزجي، زيادة الألف والنون، وزن الفعل، وزن فُعَل)',
      'أن يحدد الصفات الممنوعة من الصرف لعلتين (الوصفية مع: وزن فَعْلان، وزن أَفْعَل، وزن فُعَال ومَفْعَل، وزن فُعَل)',
      'أن يطبق شرط جر الممنوع من الصرف بالفتحة (أن يكون مجرداً من أل ومن الإضافة) وجره بالكسرة إذا عرّف بأل أو أضيف'
    ],
    learningOutcomesEn: [
      'Define Diptotes as nouns that reject nunation and take Fatha in the genitive',
      'Classify nouns barred for a single cause: Ultimate plural formula, Alif Maqsura, Alif Mamduda',
      'Classify proper nouns barred for dual causes (feminine, foreign, compound, extra alif/nun, verb-weight, Fu\'al weight)',
      'Classify adjectives barred for dual causes (Fa\'lan, Af\'al, Fu\'al/Maf\'al numerals, Ukhar)',
      'Apply genitive rules: Fatha when bare of "Al" and annexation; Kasra when prefixed with "Al" or annexed'
    ],

    vocabulary: [
      {
        termAr: 'الممنوع من الصرف (The Diptote)',
        termEn: 'The Diptote (Mamnoo\' Min As-Sarf)',
        definitionAr: 'اسم معرب لا يدخله التنوين، ويرفع بالضمة، وينصب بالفتحة، ويجر بالفتحة نيابة عن الكسرة ما لم يُعرّف بـ (أل) أو يضاف.',
        definitionEn: 'A noun that does not take nunation, inflected with Damma (nom), Fatha (acc), and Fatha (gen) unless defined by Al or annexed.'
      },
      {
        termAr: 'صيغة منتهى الجموع (Ultimate Plural Formula)',
        termEn: 'Ultimate Plural Formula',
        definitionAr: 'كل جمع تكسير بعد ألف تكسيره حرفان (مثل: مساجد، معالم) أو ثلاثة أحرف أوسطها ساكن (مثل: مصابيح، قناديل، عصافير).',
        definitionEn: 'A broken plural pattern with an internal Alif followed by 2 letters or 3 letters with a middle sakin.'
      }
    ],

    keyConceptsAr: [
      'الممنوع من الصرف = لا ينون ويجر بالفتحة',
      'العلة الواحدة: 1) صيغة منتهى الجموع (مساجد، مفاتيح) | 2) ألف التأنيث المقصورة (كبرى، بشرى) | 3) ألف التأنيث الممدودة (صحراء، علماء)',
      'الأعلام الممنوعة (6 حالات): فاطمة (مؤنث)، إبراهيم (أعجمي)، بورسعيد (مركب مزجي)، عثمان (ألف ونون)، أحمد (وزن الفعل)، عُمَر (وزن فُعَل)',
      'الصفات الممنوعة (4 حالات): عطشان (فعلان)، أفضل (أفعل)، مَثنى وثُلاث (مَفعل وفُعال)، أُخَر (فُعَل)',
      'قاعدة الجر: صليتُ في مساجدَ أثريةٍ (بالفتحة) | صليتُ في المساجدِ الأثريةِ (بالكسرة لوجود أل)'
    ],
    keyConceptsEn: [
      'Diptotes take no nunation and take Fatha in genitive',
      'Single cause: Ultimate plurals, Alif Maqsura, Alif Mamduda',
      'Dual causes: 6 proper noun classes and 4 adjective classes',
      'Genitive condition: Fatha if unannexed and without "Al"; Kasra if prefixed with "Al" or annexed'
    ],

    summaryAr: 'توضح هذه المحاضرة قواعد الممنوع من الصرف لعلة واحدة ولعلتين، شروط صيغة منتهى الجموع وألف التأنيث، وقواعد الجر بالفتحة والكسرة بدقة.',
    summaryEn: 'Comprehensive guide to Arabic Diptotes: single/dual cause classifications and precise genitive inflection rules.',

    sections: [
      {
        titleAr: '1. الممنوع من الصرف لعلة واحدة (سبب واحد)',
        titleEn: '1. Diptotes Barred for a Single Cause',
        contentAr: 'يُمنع الاسم من الصرف لسبب واحد في ثلاث حالات:\n1) صيغة منتهى الجموع: كل جمع تكسير بعد ألف تكسيره حرفان (مثل: مَساجِد، حَدائق، مَعالم) أو ثلاثة أحرف أوسطها ياء ساكنة (مثل: مَصابِيح، مَفاتِيح، عَصَافِير). *تنبيه: إذا كان أوسط الثلاثة متحركاً صُرِف الاسم (مثل: تَلامِذَة، عَباقِرَة، جَهابِذَة).\n2) الاسم المنتهي بألف التأنيث المقصورة الزائدة: مثل (كُبْرى، صُغْرى، عُظْمى، دُنْيا، بُشْرى).\n3) الاسم المنتهي بألف التأنيث الممدودة الزائدة (همزة قبلها ألف زائدة مسبوقة بـ 3 أحرف أصلية): مثل (صَحْراء، عُلَماء، شُعَراء، خَضْراء). *تنبيه: إذا كانت الهمزة أصلية (إنشاء، ضياء) أو منقلبة عن أصل (سماء، بناء) لا تمنع من الصرف.',
        contentEn: 'Single causes: 1) Ultimate Plural Formula (e.g. Masajid, Masabeeh), 2) Extra Alif Maqsura (Kubra), 3) Extra Alif Mamduda (Sahra\', \'Ulama\').'
      },
      {
        titleAr: '2. الممنوع من الصرف لعلتين وأحكام الإعراب',
        titleEn: '2. Diptotes for Dual Causes & Genitive Rules',
        contentAr: 'أولاً: الأعلام الممنوعة من الصرف (العلمية مع سبب آخر):\n1) العلم المؤنث: لفظي (معاوية، حمزة)، أو معنوي (مريم، زينب)، أو لفظي ومعنوي (فاطمة، خديجة).\n2) العلم الأعجمي الزائد على 3 أحرف: (إبراهيم، يوسف، لندن، باريس). *كل أسماء الأنبياء ممنوعة من الصرف ما عدا 6 مجموعة في (صن شملة: صالح، نوح، شعيب، محمد، لوط، هود).\n3) العلم المركب تركيباً مزجياً: (بورسعيد، حضرموت، نيويورك).\n4) العلم المنتهي بألف ونون زائدتين: (عثمان، رمضان، سليمان).\n5) العلم على وزن الفعل: (أحمد، يزيد، يحيى، أشرف).\n6) العلم على وزن فُعَل: (عُمَر، زُحَل، قُزَح).\n\nثانياً: الصفات الممنوعة من الصرف (الوصفية مع سبب آخر):\n1) صفة على وزن فَعْلان مؤنثه فَعْلى: (عطشان/عطشى، غضبان/غضبى).\n2) صفة على وزن أَفْعَل مؤنثه فَعْلاء أو فُعْلى: (أفضل، أحسن، أبيض، أسود).\n3) صفة على وزن فُعَال ومَفْعَل في الأعداد من 1 إلى 10: (أُحاد ومَوْحَد، ثُناء ومَثْنى).\n4) صفة على وزن فُعَل: لفظ (أُخَر) جمع أخرى.\n\nإعراب الممنوع من الصرف:\n- يُرفع بالضمة (جاء عمرُ).\n- يُنصب بالفتحة (رأيتُ عمرَ).\n- يُجر بالفتحة نيابة عن الكسرة بشرط ألا يقترن بـ (أل) وألا يضاف: "مررتُ بمساجدَ كثيرةٍ".\n- يُجر بالكسرة الأصلية إذا دخلت عليه (أل) أو أضيف: "مررتُ بالمساجدِ" أو "مررتُ بمساجدِ المدينةِ".',
        contentEn: 'Dual causes: 6 proper noun classes and 4 adjective classes. Genitive is Fatha without "Al" and unannexed; Kasra with "Al" or when annexed.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-arab-5',
        questionAr: 'ضع كلمة "مساجد" في جملتين بحيث تكون مجرورة بالفتحة في الأولى ومجرورة بالكسرة في الثانية مع الضبط بالشكل.',
        questionEn: 'Place the word "masajid" in two sentences: genitive with Fatha in the first, and genitive with Kasra in the second.',
        solutionStepsAr: [
          '1) مجرورة بالفتحة (مجردة من أل والإضافة):\n"صليتُ في مساجدَ أثريةٍ" (مساجدَ: اسم مجرور بفي وعلامة جره الفتحة نيابة عن الكسرة لأنه ممنوع من الصرف).\n2) مجرورة بالكسرة (معرفة بـ أل أو مضافة):\n"صليتُ في المساجدِ الأثريةِ" (المساجدِ: اسم مجرور بفي وعلامة جره الكسرة الظاهرة لدخول أل التعريف عليه).'
        ],
        solutionStepsEn: [
          '1) Genitive with Fatha (bare): "Salaytu fee masajida athariyyatin".',
          '2) Genitive with Kasra (definite): "Salaytu fee al-masajidi al-athariyyati".'
        ],
        answerAr: 'بالفتحة: "صليت في مساجدَ واسعة" • بالكسرة: "صليت في المساجدِ الواسعة"',
        answerEn: 'Fatha: "fee masajida" • Kasra: "fee al-masajidi"'
      }
    ],

    assessment: {
      id: 'quiz-m9-arab-4',
      lectureId: 'm9-arab-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: الممنوع من الصرف',
      titleEn: 'Mastery Assessment 4: The Diptote',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-arab-4',
          textAr: 'جميع الكلمات الآتية ممنوعة من الصرف ما عدا كلمة واحدة مصروفة، هي:',
          textEn: 'All the following are diptotes except one inflected word:',
          optionsAr: ['عباقرة', 'مصابيح', 'كبرى', 'عمر'],
          optionsEn: ['\'Abaqirah', 'Masabeeh', 'Kubra', '\'Umar'],
          correctIndex: 0,
          conceptTestedAr: 'شروط صيغة منتهى الجموع',
          conceptTestedEn: 'Ultimate Plural Formula Rules',
          explanationAr: '"عباقرة" جمع تكسير بعد ألفه ثلاثة أحرف أوسطها متحرك (الراء مفتوحة)، لذا فهي كلمة مصروفة تنون، بينما مصابيح أوسطها ساكن (الياء).',
          explanationEn: '"\'Abaqirah" has a vowelled middle letter (ra) after the plural alif, so it is fully inflected and takes nunation.',
          difficulty: 'medium'
        },
        {
          id: 'q2-m9-arab-4',
          textAr: 'في قوله تعالى: ﴿وَإِذَا حُيِّيتُمْ بِتَحِيَّةٍ فَحَيُّوا بِأَحْسَنَ مِنْهَا﴾، كلمة "أحسن" مجرورة بـ:',
          textEn: 'In Quran "Fa-hayyu bi-ahsana minha", the word "ahsana" is genitive with:',
          optionsAr: ['الفتحة نيابة عن الكسرة لأنها ممنوعة من الصرف', 'الكسرة الظاهرة', 'الضمة المقدرة', 'السكون'],
          optionsEn: ['Fatha on behalf of Kasra (Diptote)', 'Apparent Kasra', 'Estimated Damma', 'Sukun'],
          correctIndex: 0,
          conceptTestedAr: 'جر الممنوع من الصرف بالفتحة',
          conceptTestedEn: 'Diptote Genitive with Fatha',
          explanationAr: '"أحسن" صفة على وزن أفعل مجردة من (أل) والإضافة، فتجر بالفتحة نيابة عن الكسرة.',
          explanationEn: '"Ahsana" is an adjective on the weight of Af\'al without "Al" or annexation, inflected with Fatha in the genitive.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: MORPHOLOGY & DERIVATIVES (المشتقات) ──
  {
    id: 'm9-arab-5',
    order: 5,
    titleAr: 'المحاضرة 5: علم الصرف: المشتقات وأوزانها (اسم الفاعل، المفعول، المبالغة، المكان والزمان، الآلة، والتفضيل)',
    titleEn: 'Lecture 5: Morphology & Derivatives: Participles, Intensifiers, Locatives, Instruments & Superlatives',
    subtitleAr: 'صياغة اسم الفاعل وصيغ المبالغة الخمس، اسم المفعول من الثلاثي وغير الثلاثي، اسما الزمان والمكان، اسم الآلة القياسي والسماعي، وأسلوب التفضيل وشروطه',
    subtitleEn: 'Master Active Participle, 5 Standard Intensifiers, Passive Participle, Time/Place Nouns, Instrumental Nouns, and Comparative/Superlative Adjectives.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الإعدادي (الصف التاسع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 9 / Prep 3 - Middle School Arabic Language & Grammar',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الخامسة: المشتقات في الصرف العربي',
    unitTitleEn: 'Unit 5: Arabic Morphological Derivatives',
    lessonNumberAr: 'الدرس 5: صياغة المشتقات وأوزانها وإعمالها',
    lessonNumberEn: 'Lesson 5: Derivation Rules & Morphological Patterns',

    warmupHookAr: 'تتميز اللغة العربية بأنها لغة "اشتقاقية" حية ومرنة؛ فمن جذر لغوي ثلاثي واحد مثل (كـ - تـ - ب) يمكنك توليد عشرات الكلمات ذات المعاني الدقيقة: (كاتِب: من يقوم بالفعل)، (مكتوب: من وقع عليه الفعل)، (مَكْتَب: مكان الفعل)، (كَتَّاب: مبالغة في الفعل)! هذه المنظومة العبقرية هي "علم المشتقات" في الصرف العربي، وهو ما يمنح لغتنا ثراءً وإيجازاً لا نظير له في لغات العالم!',
    warmupHookEn: 'Arabic morphology derives multifaceted vocabulary from triconsonantal roots (e.g., K-T-B -> Katib, Maktoob, Maktab). Mastering the 6 derivatives enables rapid vocabulary synthesis and text analysis!',

    learningOutcomesAr: [
      'أن يصوغ الطالب اسم الفاعل من الفعل الثلاثي على وزن (فاعِل) ومن غير الثلاثي بميم مضمومة وكسر ما قبل الآخر',
      'أن يحدد صيغ المبالغة القياسية الخمس: (فَعَّال، مِفْعَال، فَعُول، فَعِيل، فَعِل)',
      'أن يصوغ اسم المفعول من الثلاثي على وزن (مَفْعول) ومن غير الثلاثي بميم مضمومة وفتح ما قبل الآخر',
      'أن يصوغ اسمي الزمان والمكان على وزني (مَفْعَل و مَفْعِل) ومن غير الثلاثي على طريقة اسم المفعول',
      'أن يميز بين اسم الآلة المشتق القياسي واسم الآلة الجامد السماعي',
      'أن يصوغ اسم التفضيل على وزن (أَفْعَل) مستوفياً شروط الفعل السبعة'
    ],
    learningOutcomesEn: [
      'Form Active Participle (Ism al-Fa\'il) from trilateral verbs (Fa\'il) and non-trilateral verbs (Mu- -i-)',
      'Identify the 5 standard Intensifier patterns (Siyagh al-Mubalagha: Fa\'\'al, Mif\'al, Fa\'ool, Fa\'eel, Fa\'il)',
      'Form Passive Participle (Ism al-Maf\'ool) from trilateral (Maf\'ool) and non-trilateral (Mu- -a-)',
      'Construct Nouns of Time and Place (Maf\'al, Maf\'il) and non-trilateral forms',
      'Distinguish derived standard Instrumental Nouns from frozen non-derived nouns',
      'Construct Superlatives (Ism at-Tafdeel) on weight Af\'al verifying the 7 prerequisite verb conditions'
    ],

    vocabulary: [
      {
        termAr: 'المشتقات (Morphological Derivatives)',
        termEn: 'Derivatives (Mushtaqqat)',
        definitionAr: 'أسماء مأخوذة من غيرها (من المصدر أو الفعل) لتدل على معنى مع زيادة (الفاعل، المفعول، الزمان، المكان، الآلة، التفضيل).',
        definitionEn: 'Nouns systematically derived from root verbs to signify specific entities or modalities.'
      },
      {
        termAr: 'اسم الفاعل (Active Participle)',
        termEn: 'Active Participle (Ism al-Fa\'il)',
        definitionAr: 'اسم مشتق يدل على من قام بالفعل أو اتصف به (مثل: كاتب، صائم، مُنطلِق).',
        definitionEn: 'A derived noun denoting the doer of an action (e.g. Katib, Sa\'im, Muntaliq).'
      },
      {
        termAr: 'صيغ المبالغة (Intensive Forms)',
        termEn: 'Intensive Forms (Siyagh al-Mubalagha)',
        definitionAr: 'أسماء مشتقة من الفعل الثلاثي غالباً تدل على حدوث الفعل بكثرة وشدة، وأوزانها: فَعَّال، مِفْعَال، فَعُول، فَعِيل، فَعِل.',
        definitionEn: 'Intensified verbal adjectives signifying frequent or intense action across 5 standard meters.'
      },
      {
        termAr: 'اسم المفعول (Passive Participle)',
        termEn: 'Passive Participle (Ism al-Maf\'ool)',
        definitionAr: 'اسم مشتق من الفعل المبني للمجهول يدل على من وقع عليه فعل الفاعل (مثل: مَكْتُوب، مَرْجُوّ، مُسْتَخْرَج).',
        definitionEn: 'A derived noun denoting the recipient/object of an action (e.g. Maktoob, Mustakhraj).'
      }
    ],

    keyConceptsAr: [
      'اسم الفاعل: من الثلاثي (فـاعـل: قارئ، قائل، راعٍ) | من غير الثلاثي: نأتي بالمضارع ونبدل ياء المضارعة ميماً مضمومة ونكسر ما قبل الآخر (مُعَلِّم، مُنْتَظِر)',
      'صيغ المبالغة الخمس: فَعَّال (غفّار) | مِفْعَال (مِقدام) | فَعُول (شكور) | فَعِيل (رحيم) | فَعِل (فَطِن)',
      'اسم المفعول: من الثلاثي (مَفْعُول: معلوم، مقول، مهدِيّ) | من غير الثلاثي: ميم مضمومة وفتح ما قبل الآخر (مُكَرَّم، مُجْتَمَع عليه)',
      'اسما الزمان والمكان: على وزني (مَفْعَل و مَفْعِل: مَشْرِق، مَوْعِد، مَلْعَب، مَأْوى)',
      'اسم الآلة: قياسي مشتق (مِفْعَال كمفتاح، مِفْعَل كمبرد، مِفْعَلَة كمسطرة، فَعَّالَة كغسالة) | جامد سماعي (سيف، سكين، قلم)',
      'اسم التفضيل: على وزن أَفْعَل (أعظم، أفضل) وشروطه السبعة: ثلاثي، تام، مثبت، متصرف، مبني للمعلوم، قابل للتفاوت، ليس الوصف منه على أفعل فعلاء'
    ],
    keyConceptsEn: [
      'Active participle formation from trilaterals and non-trilaterals',
      'The 5 universal Arabic intensifier patterns',
      'Passive participle derivation from passive verbs',
      'Time/Place nouns formation rules (Maf\'al / Maf\'il)',
      'Instrumental nouns: standard derived vs frozen acoustic types',
      'Comparative/Superlative 7 rule prerequisites'
    ],

    summaryAr: 'تختتم هذه المحاضرة منهج اللغة العربية للصف الثالث الإعدادي بدراسة شاملة لجميع المشتقات الصرفية الستة: أوزانها، صياغتها من الأفعال الثلاثية وغير الثلاثية، وتمييزها في النصوص الفصيحة.',
    summaryEn: 'Concludes Grade 9 Arabic morphology with comprehensive derivations for all 6 derivative types: participles, intensifiers, time/place nouns, instrument nouns, and superlatives.',

    sections: [
      {
        titleAr: '1. اسم الفاعل وصيغ المبالغة',
        titleEn: '1. Active Participle & Intensive Forms',
        contentAr: '1) اسم الفاعل:\n- من الفعل الثلاثي: على وزن (فاعِل):\n  * صحيح: كَتَبَ -> كاتِب، ضَرَبَ -> ضارِب.\n  * مهموز الأول: أَكَلَ -> آكِل، أَخَذَ -> آخِذ.\n  * أجوف (وسطه ألف): قالَ -> قائِل، صامَ -> صائِم (تقلب الألف همزة مكسورة).\n  * ناقص (آخره علة): قَضى -> قاضٍ (في حالتي الرفع والجر بدون أل)، والقاضي (مع أل).\n- من الفعل غير الثلاثي: نأتي بالمضارع، ونقلب حرف المضارعة ميماً مضمومة مع كسر ما قبل الآخر:\n  * استَخْرَجَ -> يَسْتَخْرِجُ -> مُسْتَخْرِج.\n  * تَعَلَّمَ -> يَتَعَلَّمُ -> مُتَعَلِّم.\n\n2) صيغ المبالغة:\nتدل على الكثرة وتصاغ غالباً من الثلاثي على 5 أوزان قياسية:\n- فَعَّال: (غَفَّار، صَبَّار، عَلَّام).\n- مِفْعَال: (مِقْدام، مِعْطاء، مِهْذار).\n- فَعُول: (شَكُور، غَفُور، صَبُور).\n- فَعِيل: (سَمِيع، عَلِيم، نَذِير).\n- فَعِل: (حَذِر، فَطِن، لَبِق، قَلِق).',
        contentEn: 'Active Participles: Trilateral on weight Fa\'il; Non-trilateral via prefixing Mu- and kasra on penultimate. 5 Intensifier patterns: Fa\'\'al, Mif\'al, Fa\'ool, Fa\'eel, Fa\'il.'
      },
      {
        titleAr: '2. اسم المفعول، اسما الزمان والمكان، واسم الآلة والتفضيل',
        titleEn: '2. Passive Participle, Locatives, Instruments & Superlative',
        contentAr: '1) اسم المفعول (مشتق من الفعل المبني للمجهول):\n- من الثلاثي على وزن (مَفْعُول): كُتِبَ -> مَكْتُوب، عُلِمَ -> مَعْلُوم، قِيلَ -> مَقُول، دُعِيَ -> مَدْعُوّ.\n- من غير الثلاثي: ميم مضمومة وفتح ما قبل الآخر: اسْتُخْرِجَ -> مُسْتَخْرَج، احْتُرِمَ -> مُحْتَرَم.\n\n2) اسما الزمان والمكان:\n- من الثلاثي على وزني (مَفْعَل) إذا كان مفتوح أو مضموم العين في المضارع أو معتل الآخر (مَلْعَب، مَأْوى)، و (مَفْعِل) إذا كان مكسور العين أو مثالاً واوياً (مَجْلِس، مَوْعِد).\n- من غير الثلاثي: يصاغ على طريقة اسم المفعول، ويفرق بينها بالسياق (مثل: "البترول مُسْتَخْرَج من الأرض" -> اسم مفعول | "الأرض مُسْتَخْرَج البترول" -> اسم مكان | "الصباح مُسْتَخْرَج البترول" -> اسم زمان).\n\n3) اسم الآلة: يدل على أداة حدوث الفعل:\n- مشتق قياسي: مِفْعَال (مفتاح، منشار)، مِفْعَل (مبرد، مقص)، مِفْعَلَة (مسطرة، مكنسة)، فَعَّالَة (غسالة، ثلاجة).\n- جامد غير مشتق: (سيف، سكين، قلم، فاس، شوكة).\n\n4) اسم التفضيل: على وزن (أَفْعَل) للدلالة على اشتراك اثنين في صفة وزيادة أحدهما على الآخر:\n- أركانه: المفضل + اسم التفضيل + المفضل عليه (مثل: "العلمُ أنفعُ من المالِ").',
        contentEn: 'Passive Participle: Maf\'ool and Mu- -a-. Time/Place nouns: Maf\'al/Maf\'il. Instrument nouns: Derived meters vs frozen roots. Superlative: Af\'al construction.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m9-arab-6',
        questionAr: 'هات من الفعل (غَفَرَ) اسم فاعل، وصيغة مبالغة، واسم مفعول في جمل مفيدة من إنشائك.',
        questionEn: 'From verb (Ghafara), produce an Active Participle, an Intensifier, and a Passive Participle in complete sentences.',
        solutionStepsAr: [
          '1) اسم الفاعل: "غافِر" -> "اللهُ غافِرُ الذنبِ وقابلُ التوبِ".',
          '2) صيغة مبالغة: "غَفُور" أو "غَفَّار" -> "إنَّ اللهَ غَفُورٌ رَحِيمٌ".',
          '3) اسم مفعول: "مَغْفُور" -> "ذنبُ التائبِ مَغْفُورٌ بإذن الله".'
        ],
        solutionStepsEn: [
          '1) Active Participle: "Ghafir" -> "Allahu Ghafiru adh-dhanb".',
          '2) Intensifier: "Ghafoor" / "Ghaffar" -> "Inna Allaha Ghafoorun Raheem".',
          '3) Passive Participle: "Maghfoor" -> "Dhanbu at-ta\'ibi maghfoorun".'
        ],
        answerAr: 'اسم الفاعل: غافِر • صيغة المبالغة: غَفُور / غَفَّار • اسم المفعول: مَغْفُور',
        answerEn: 'Active: Ghafir • Intensifier: Ghafoor • Passive: Maghfoor'
      }
    ],

    assessment: {
      id: 'quiz-m9-arab-5',
      lectureId: 'm9-arab-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: المشتقات الصرفية',
      titleEn: 'Mastery Assessment 5: Morphological Derivatives',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m9-arab-5',
          textAr: 'اسم الفاعل من الفعل غير الثلاثي (استقامَ) هو:',
          textEn: 'The active participle from the non-trilateral verb (Istaqama) is:',
          optionsAr: ['مُسْتَقِيم', 'مُسْتَقَام', 'قائم', 'مُسْتَقِيمة'],
          optionsEn: ['Mustaqeem', 'Mustaqam', 'Qa\'im', 'Mustaqeema'],
          correctIndex: 0,
          conceptTestedAr: 'صياغة اسم الفاعل من غير الثلاثي',
          conceptTestedEn: 'Active Participle Non-Trilateral Derivation',
          explanationAr: 'نأتي بالمضارع (يستقيم) ونبدل حرف المضارعة ميماً مضمومة مع كسر ما قبل الآخر فينتج: مُسْتَقِيم.',
          explanationEn: 'Present verb is Yastaqeem; replacing prefix with Mu- and keeping kasra yields Mustaqeem.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m9-arab-5',
          textAr: 'الكلمة التي تمثل صيغة مبالغة على وزن (مِفْعَال) هي:',
          textEn: 'The word representing an intensifier on weight (Mif\'al) is:',
          optionsAr: ['مِقْدام', 'مِفْتاح', 'مِصْباح', 'مَكْتَب'],
          optionsEn: ['Miqdam', 'Miftah', 'Misbah', 'Maktab'],
          correctIndex: 0,
          conceptTestedAr: 'أوزان صيغ المبالغة',
          conceptTestedEn: 'Intensifier Patterns',
          explanationAr: '"مِقْدام" صيغة مبالغة تدل على كثرة الشجاعة والإقدام، بينما مفتاح ومصباح اسما آلة.',
          explanationEn: '"Miqdam" is an intensifier signifying great courage, while Miftah and Misbah are instrumental nouns.',
          difficulty: 'medium'
        },
        {
          id: 'q3-m9-arab-5',
          textAr: 'في جملة: "مكةُ مَهْبِطُ الوحي"، كلمة "مَهْبِط" مشتق نوعه:',
          textEn: 'In "Makkatu mahbitu al-wahy", the derivative "mahbit" is a:',
          optionsAr: ['اسم مكان', 'اسم زمان', 'اسم مفعول', 'اسم فاعل'],
          optionsEn: ['Noun of Place (Ism Makan)', 'Noun of Time (Ism Zaman)', 'Passive Participle', 'Active Participle'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز اسم المكان',
          conceptTestedEn: 'Identifying Nouns of Place',
          explanationAr: '"مَهْبِط" دلت على مكان نزول الوحي وهي مكة المكرمة، إذن هي اسم مكان على وزن مَفْعِل.',
          explanationEn: '"Mahbit" indicates the place where revelation descended (Mecca), making it a Noun of Place on weight Maf\'il.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
