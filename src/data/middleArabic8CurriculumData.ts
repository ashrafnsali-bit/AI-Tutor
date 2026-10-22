import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL ARABIC LANGUAGE (اللغة العربية - الصف الثاني الإعدادي / المتوسط)
// Official Grade 8 National Curriculum Alignment:
// Unit 1: المعرب والمبني من الأسماء والأفعال (Inflected vs Uninflected Nouns & Verbs)
// Unit 2: النعت بأنواعه المفرد والجملة وشبه الجملة (Adjectives & Descriptive Clauses)
// Unit 3: العطف وحروفه وأحكامه الدلالية (Conjunctions & Semantic Functions)
// Unit 4: التوكيد اللفظي والمعنوي وألفاظه (Corroboration: Verbal & Semantic)
// Unit 5: الحال المفردة والجملة وشبه الجملة ورابط جملة الحال (The Hal / Adverbial Clause)
// ============================================================================

export const MIDDLE_ARABIC_G8_LECTURES: Lecture[] = [
  // ── LECTURE 1: المعرب والمبني من الأسماء والأفعال ──
  {
    id: 'm-arab8-1',
    order: 1,
    titleAr: 'المحاضرة 1: المعرب والمبني من الأسماء والأفعال وحالات البناء',
    titleEn: 'Lecture 1: Inflected vs Built Nouns and Verbs in Arabic Grammar',
    subtitleAr: 'التمييز الدقيق بين الكلمات المعربة التي يتغير آخرها والمبنية التي يلزم آخرها حركة ثابتة',
    subtitleEn: 'Master Mu\'rab vs Mabni words, discovering invariable nouns, verbs, and grammatical rules.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي / المتوسط - اللغة العربية',
    gradeLevelNameEn: 'Grade 8 / Middle School - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Arabic Curriculum',
    unitTitleAr: 'الوحدة الأولى: قواعد النحو والإعراب والبناء',
    unitTitleEn: 'Unit 1: Grammar Foundations - Inflection & Invariance',
    lessonNumberAr: 'الدرس 1: المعرب والمبني من الأسماء والأفعال',
    lessonNumberEn: 'Lesson 1: Inflected vs Invariable Words',

    warmupHookAr: 'تأمل جملتين: "حَضَرَ هَؤُلاءِ الطُّلابُ" و"رَأَيْتُ هَؤُلاءِ الطُّلابَ" و"مَرَرْتُ بِهَؤُلاءِ الطُّلابِ". لماذا لم تتغير كسرة (هؤلاء) رغم أنها كانت فاعلاً ومفعولاً واسماً مجروراً؟ بينما كلمة (الطلابُ - الطلابَ - الطلابِ) تغير آخرها مع كل موقع؟ هنا يكمن السر بين المعرب والمبني في لغتنا العربية الجميلة!',
    warmupHookEn: 'Notice how demonstrative pronouns remain fixed with a kasra regardless of case position, while regular nouns change their final vowels. This highlights the essential distinction between inflected and invariable words.',

    learningOutcomesAr: [
      'أن يفرق الطالب بين الإعراب (تغير حركة آخر الكلمة) والبناء (ثبوت حركة آخر الكلمة)',
      'أن يحدد الأسماء المبنية الستة: الضمائر، أسماء الإشارة، الأسماء الموصولة، أسماء الاستفهام، أسماء الشرط، وبعض الظروف',
      'أن يستثني (هذان وهاتان) و(اللذان واللتان) ليعربهما إعراب المثنى بالألف رفعاً وبالياء نصباً وجراً',
      'أن يحدد حالات بناء الفعل الماضي (على الفتح والضم والسكون) والأمر (على السكون وحذف النون وحذف حرف العلة)',
      'أن يعرب الفعل المضارع المتصل بنون النسوة (مبني على السكون) ونون التوكيد (مبني على الفتح)'
    ],
    learningOutcomesEn: [
      'Differentiate between inflection (case endings) and invariance (fixed vowel endings)',
      'Identify the six categories of invariable nouns (pronouns, demonstratives, relatives, interrogatives, conditionals, adverbs)',
      'Exclude dual forms (Hathaani/Haataani) which inflect as duals with Alif and Yaa',
      'Identify construction vowels of past tense verbs and imperative verbs',
      'Recognize present tense verbs constructed upon sukoon (nun of females) or fatha (nun of emphasis)'
    ],

    vocabulary: [
      {
        termAr: 'الإعراب',
        termEn: 'I\'rab (Inflection)',
        definitionAr: 'تغير ضبط آخر الكلمة بتغير موقعها الإعرابي في الجملة (رفعاً ونصباً وجراً وجزماً).',
        definitionEn: 'The variation of a word\'s final diacritical mark depending on its grammatical case in the sentence.'
      },
      {
        termAr: 'البناء',
        termEn: 'Binaa (Invariance)',
        definitionAr: 'ثبوت حركة أو سكون آخر الكلمة مهما تغير موقعها الإعرابي، وتكون في محل رفع أو نصب أو جر.',
        definitionEn: 'The invariable ending of a word that never changes regardless of grammatical case.'
      }
    ],

    sections: [
      {
        titleAr: '1. مفهوم الإعراب والبناء والأسماء المبنية',
        titleEn: '1. Concept of Inflection vs Invariance and Invariable Nouns',
        contentAr: `جميع الأسماء في لغة الضاد **مُعْرَبَة** كأصل عام، ما عدا فئات محددة تكون **مَبْنِيَّة**:
1. **الضمائر كلها**: (أنا، نحن، أنتَ، هو، تاء الفاعل، نا الفاعلين، واو الجماعة...).
2. **أسماء الإشارة**: (هذا، هذه، هؤلاء، ذلك، تلك، أولئك) ما عدا: **هذان وهاتان** فهما معربتان إعراب المثنى.
3. **الأسماء الموصولة**: (الذي، التي، الذين، اللاتي، اللائي) ما عدا: **اللذان واللتان** فهما معربتان إعراب المثنى.
4. **أسماء الاستفهام**: (مَنْ، ما، متى، أين، كيف، كم) ما عدا: (أيّ) فهي معربة.
5. **أسماء الشرط**: (مَنْ، ما، مهما، متى، أينما) ما عدا: (أيّ).
6. **بعض الظروف**: (حيثُ، منذُ، أمسِ، الآنَ، إِذْ، إذا).`,
        contentEn: `All Arabic nouns are inflected by default except specific categories:
1. All Pronouns (independent and attached).
2. Demonstrative Pronouns (except dual forms Hathani/Haatani).
3. Relative Pronouns (except dual forms Allathani/Allatani).
4. Interrogative Nouns (except Ayy).
5. Conditional Nouns (except Ayy).
6. Fixed Adverbs (Haythu, Mundhu, Amsi, Al-Aana).`
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
      id: 'quiz-marab8-1',
      titleAr: 'اختبار تمكين المعرب والمبني',
      titleEn: 'Inflection & Invariance Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'أي من الأسماء التالية معرب وليس مبنياً؟',
          textEn: 'Which of the following nouns is inflected (Mu\'rab) and NOT invariable (Mabni)?',
          optionsAr: ['هؤلاء', 'اللذان', 'أين', 'نحن'],
          optionsEn: ['Ha\'ula\'i', 'Allathani', 'Ayna', 'Nahnu'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'اللذان اسم موصول معرب يعرب إعراب المثنى بالألف رفعاً وبالياء نصباً وجراً.',
          explanationEn: 'Allathani is inflected as a dual noun with Alif in nominative and Yaa in accusative/genitive.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: النعت بأنواعه (المفرد والجملة وشبه الجملة) ──
  {
    id: 'm-arab8-2',
    order: 2,
    titleAr: 'المحاضرة 2: النعت الحقيقي وأنواعه (المفرد، الجملة، وشبه الجملة)',
    titleEn: 'Lecture 2: Adjectives & Descriptive Clauses in Arabic (Al-Na\'t)',
    subtitleAr: 'شروط تطابق النعت المفرد وقاعدة الجمل بعد النكرات صفات وبعد المعارف أحوال',
    subtitleEn: 'Master single-word adjectives, adjectival clauses, and prepositional modifiers.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي / المتوسط - اللغة العربية',
    gradeLevelNameEn: 'Grade 8 / Middle School - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Arabic Curriculum',
    unitTitleAr: 'الوحدة الثانية: التوابع في اللغة العربية',
    unitTitleEn: 'Unit 2: Grammatical Followers (Tawabi\')',
    lessonNumberAr: 'الدرس 2: النعت المفرد والجملة وشبه الجملة',
    lessonNumberEn: 'Lesson 2: Adjectival Modifiers & Clauses',

    warmupHookAr: 'إذا قلت: "قرأتُ كتاباً مفيداً" و"قرأتُ كتاباً ينفعُ القارئ" و"رأيتُ عصفوراً فوقَ الشجرةِ"، في كل مرة وصفت الاسم النكرة بطريقة مختلفة: كلمة واحدة، جملة فعلية، وشبه جملة! كيف نستخرج الرابط الذي يربط جملة النعت بالمنعوت؟ وما القاعدة الذهبية في إعراب الجمل؟',
    warmupHookEn: 'Sentences after indefinite nouns act as qualifying adjectives, while sentences after definite nouns act as circumstantial states. Master this foundational syntactic rule.',

    learningOutcomesAr: [
      'أن يوضح الطالب معنى النعت ووظيفته في توضيح المنعوت المعرفة وتخصيص المنعوت النكرة',
      'أن يحدد أوجه التطابق الأربعة بين النعت المفرد ومنعوته (الإعراب، النوع، العدد، التعيين)',
      'أن يستخرج النعت الجملة الاسمية والفعلية محدداً الرابط (الضمير العائد على المنعوت)',
      'أن يطبق القاعدة النحوية: "الجمل وأشباه الجمل بعد النكرات صفات وبعد المعارف أحوال"',
      'أن يعرب النعت شبه الجملة (الجار والمجرور والظرف) في محل رفع أو نصب أو جر'
    ],
    learningOutcomesEn: [
      'Explain the semantic function of the adjective (Na\'t) in clarifying or specifying the modified noun',
      'Identify the 4 points of agreement between single-word adjective and its noun (case, gender, number, definiteness)',
      'Extract nominal and verbal adjectival clauses and their connecting pronoun link',
      'Apply the rule: clauses after indefinite nouns are adjectives, and after definite nouns are adverbials',
      'Parse prepositional and adverbial phrases acting as adjectival modifiers'
    ],

    vocabulary: [
      {
        termAr: 'النعت',
        termEn: 'Al-Na\'t (Adjective)',
        definitionAr: 'تابع يذكر لبيان صفة في متبوعه (المنعوت)، ويتبعه في الإعراب.',
        definitionEn: 'A grammatical follower that describes an attribute of the preceding modified noun.'
      },
      {
        termAr: 'الرابط',
        termEn: 'The Link / Pronoun',
        definitionAr: 'ضمير بارز أو مستتر في جملة النعت يعود على المنعوت النكرة ويطابقه نوعاً وعدداً.',
        definitionEn: 'A pronoun within the descriptive clause linking it back to the indefinite modified noun.'
      }
    ],

    sections: [
      {
        titleAr: '1. أنواع النعت وأحكامه',
        titleEn: '1. Types and Rules of Arabic Adjectives',
        contentAr: `ينقسم النعت إلى ثلاثة أقسام رئيسية:
1. **نعت مفرد**: كلمة واحدة تطابق المنعوت في 4 من 10 (الإعراب: رفع/نصب/جر، العدد: مفرد/مثنى/جمع، النوع: تذكير/تأنيث، التعيين: تعريف/تنكير).
2. **نعت جملة** (اسمية أو فعلية): يشترط فيه أمران:
   - أن يكون المنعوت **نكرة**.
   - أن تشتمل الجملة على **رابط** (ضمير) يعود على المنعوت.
3. **نعت شبه جملة** (جار ومجرور أو ظرف مكاني/زماني): لا يحتاج إلى رابط، ويكون في محل رفع أو نصب أو جر.`,
        contentEn: `Adjectives divide into three structural classes:
1. Single Word (Mufrad): agrees in case, number, gender, and definiteness.
2. Clause (Jumla): requires indefinite modified noun and a linking pronoun.
3. Semi-clause (Shibh Jumla): prepositional or adverbial phrase without requiring a pronoun.`
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
      id: 'quiz-marab8-2',
      titleAr: 'اختبار النعت وأنواعه',
      titleEn: 'Adjective Structures Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'في جملة "استمعتُ إلى خطيبٍ يؤثرُ في النفوسِ"، ما المحل الإعرابي لجملة (يؤثر)؟',
          textEn: 'In "I listened to an orator who influences souls", what is the grammatical position of (influences)?',
          optionsAr: ['في محل رفع نعت', 'في محل جر نعت', 'في محل نصب حال', 'في محل رفع خبر'],
          optionsEn: ['Nominative adjective', 'Genitive adjective', 'Accusative circumstantial state', 'Nominative predicate'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'جملة (يؤثر) جملة فعلية جاءت بعد نكرة مجرورة (خطيبٍ) فهي في محل جر نعت.',
          explanationEn: 'The verbal clause follows an indefinite genitive noun (khateebin), thus it is an adjectival clause in the genitive place.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 3: العطف وحروفه ومعانيها ──
  {
    id: 'm-arab8-3',
    order: 3,
    titleAr: 'المحاضرة 3: العطف وحروف العطف ودلالاتها البلاغية',
    titleEn: 'Lecture 3: Conjunctions (Al-\'Atf) and Semantic Nuances in Arabic',
    subtitleAr: 'دراسة حروف العطف التي تفيد المشاركة (الواو، الفاء، ثم، أو) والحروف المشروطة (لا، بل، لكن)',
    subtitleEn: 'Master conjunctions denoting partnership vs restriction, negation, and correction.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي / المتوسط - اللغة العربية',
    gradeLevelNameEn: 'Grade 8 / Middle School - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Arabic Curriculum',
    unitTitleAr: 'الوحدة الثانية: التوابع في اللغة العربية',
    unitTitleEn: 'Unit 2: Grammatical Followers (Tawabi\')',
    lessonNumberAr: 'الدرس 3: العطف بحروفه المتعددة',
    lessonNumberEn: 'Lesson 3: Conjunctions & Semantic Particles',

    warmupHookAr: 'إذا دخل المعلم والطالب معاً نقول: "دخل المعلمُ والطالبُ". فإذا دخل المعلم فتبعه الطالب بلا مهلة قلنا: "دخل المعلمُ فالطالبُ". أما إذا استراح المعلم دقائق ثم وصل الطالب قلنا: "دخل المعلمُ ثم الطالبُ"! دقة لغوية مذهلة يحددها حرف عطف واحد! فما الفرق بين (لا، لكن، بل)؟',
    warmupHookEn: 'Arabic conjunctions convey exact timing and logic: Waw for general association, Faa for rapid succession, Thumma for delayed sequence, and particles like Laa and Lakin for precision in affirmation and denial.',

    learningOutcomesAr: [
      'أن يحدد الطالب أركان أسلوب العطف الثلاثة: (المعطوف عليه + حرف العطف + المعطوف)',
      'أن يوضح المعنى البلاغي لحروف العطف: الواو (مطلق الجمع)، الفاء (الترتيب والتعقيب)، ثم (الترتيب والتراخي)، أو (الشك أو التخيير)',
      'أن يميز بين حروف العطف الدقيقة: (لا) تنفي الحكم عما بعدها وتثبته لما قبلها، (لكن) تفيد الاستدراك وتسبق بنفي أو نهي',
      'أن يطبق حرف العطف (بل) الذي يفيد الإضراب بعد الإيجاب أو الاستدراك بعد النفي',
      'أن يعرب المعطوف متبعاً إعراب المعطوف عليه رفعاً ونصباً وجراً'
    ],
    learningOutcomesEn: [
      'Identify the 3 elements of coordination (first term + particle + coordinated term)',
      'Explain semantic functions: Waw (combination), Faa (immediate sequence), Thumma (delayed sequence), Aw (choice/doubt)',
      'Contrast precision particles: Laa (negates follower, affirms preceding), Lakin (rectification preceded by negation)',
      'Apply (Bal) denoting shift/correction after affirmative and confirmation after negative clauses',
      'Parse the coordinated noun mirroring the case ending of the first term'
    ],

    vocabulary: [
      {
        termAr: 'المعطوف والمعطوف عليه',
        termEn: 'Al-Ma\'toof & Ma\'toof \'Alayh',
        definitionAr: 'المعطوف عليه يقع قبل حرف العطف ويعرب حسب موقعه، والمعطوف يقع بعده ويتبعه في الإعراب.',
        definitionEn: 'The first term precedes the conjunction and takes case by position; the second term follows and mirrors the case.'
      },
      {
        termAr: 'الترتيب والتراخي',
        termEn: 'Tarakee (Sequence with Delay)',
        definitionAr: 'دلالة حرف العطف (ثم) على وقوع الحدث الثاني بعد الأول بمهلة زمنية وتراخٍ.',
        definitionEn: 'The semantic property of Thumma signifying an interval of time between the two events.'
      }
    ],

    sections: [
      {
        titleAr: '1. أحكام حروف العطف ومعانيها',
        titleEn: '1. Conjunction Rules and Meanings',
        contentAr: `تنقسم حروف العطف إلى مجموعتين:
1. **تعطف بلا شروط وتفيد اشتراك المعطوف والمعطوف عليه في الحكم والإعراب**:
   - **الواو**: لمطلق الجمع والمشاركة دون ترتيب زمني.
   - **الفاء**: للترتيب والتعقيب (سرعة الحدوث بلا مهلة).
   - **ثم**: للترتيب والتراخي (وجود فاصل زمني).
   - **أو**: للشك أو التخيير أو التقسيم.
2. **تعطف بشروط خاصة وتفيد أحدهما دون الآخر**:
   - **لا**: تثبت الحكم لما قبلها وتنفيه عما بعدها (تسبق بإثبات: "أحبُّ الصدقَ لا الكذبَ").
   - **لكنْ**: تفيد الاستدراك (تسبق بنفي أو نهي: "لا تصاحبْ خائناً لكنْ أميناً").
   - **بل**: تفيد الإضراب بعد الإثبات أو الاستدراك بعد النفي.`,
        contentEn: `Conjunctions fall into two groups:
1. Universal coordinators: Waw (association), Faa (immediate sequence), Thumma (delayed sequence), Aw (choice/doubt).
2. Conditional coordinators: Laa (affirms antecedent, denies follower), Lakin (rectification, requires preceding negative/prohibition), Bal (digression/rectification).`
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
      id: 'quiz-marab8-3',
      titleAr: 'اختبار حروف العطف وأحكامها',
      titleEn: 'Conjunction Particles Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'في جملة "لا أحبُّ الكسلَ لكنْ النشاطَ"، ما فائدة حرف العطف (لكنْ)؟',
          textEn: 'In "I don\'t like laziness but activity", what is the semantic role of (Lakin)?',
          optionsAr: ['الترتيب والتراخي', 'الاستدراك ونفي الأول وإثبات الثاني', 'مطلق الجمع', 'الشك والتخيير'],
          optionsEn: ['Delayed sequence', 'Rectification negating first and affirming second', 'General combination', 'Doubt and choice'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: '(لكنْ) الساكنة حرف عطف يفيد الاستدراك، سبقت بنفي وأثبتت الحكم لما بعدها.',
          explanationEn: 'Lakin is a coordinating particle denoting rectification, preceded by negation and affirming the following term.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: التوكيد بأنواعه (اللفظي والمعنوي) ──
  {
    id: 'm-arab8-4',
    order: 4,
    titleAr: 'المحاضرة 4: التوكيد اللفظي والمعنوي وألفاظه المخصوصة',
    titleEn: 'Lecture 4: Corroboration & Emphasis in Arabic (Al-Tawkeed)',
    subtitleAr: 'أحكام تكرار اللفظ وشروط التوكيد المعنوي بألفاظه: نفس، عين، كل، جميع، كلا، كلتا',
    subtitleEn: 'Master verbal repetition emphasis and semantic corroboration with dedicated emphatic nouns.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي / المتوسط - اللغة العربية',
    gradeLevelNameEn: 'Grade 8 / Middle School - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Arabic Curriculum',
    unitTitleAr: 'الوحدة الثانية: التوابع في اللغة العربية',
    unitTitleEn: 'Unit 2: Grammatical Followers (Tawabi\')',
    lessonNumberAr: 'الدرس 4: التوكيد اللفظي والمعنوي',
    lessonNumberEn: 'Lesson 4: Verbal & Semantic Corroboration',

    warmupHookAr: 'حين تقول: "نجحَ نجحَ الطالبُ"، كررت الفعل لتؤكد الخبر وتزيل أي شك في نفس السامع (توكيد لفظي). لكن ماذا لو قلت: "ألقى المديرُ نفسُهُ الكلمةَ"؟ استخدمت كلمة (نفسه) لتدفع توهم أن نائبه هو من ألقاها (توكيد معنوي)! فما الشرطان الجوهريان لكي تعرب كلمة (نفس) توكيداً معنوياً؟',
    warmupHookEn: 'Tawkeed confirms meaning and removes doubt in the listener\'s mind, either by repeating the word directly or by appending corroborating words like Nafs, Ayn, Kull, and Jamee\'.',

    learningOutcomesAr: [
      'أن يوضح الطالب الغرض البلاغي والنحوي من أسلوب التوكيد (إزالة الشك ودفع السهو والتوهم)',
      'أن يطبق التوكيد اللفظي بتكرار الاسم، أو الفعل، أو الحرف، أو الجملة',
      'أن يحدد ألفاظ التوكيد المعنوي الستة: (نَفْس، عَيْن) للمفرد والمثنى والجمع، (كِلا، كِلْتا) للمثنى، (كُلّ، جَمِيع) للجمع والشمول',
      'أن يطبق شرطي التوكيد المعنوي: اتصالها بضمير يعود على المؤكّد، وجواز حذفها دون تأثر المعنى الأساسي',
      'أن يعرب (كلا وكلتا) معربتين كالمثنى إذا اتصلتا بضمير، وإعراب الاسم المقصور بحركات مقدرة إذا أضيفتا لاسم ظاهر'
    ],
    learningOutcomesEn: [
      'Explain the semantic purpose of emphasis in removing doubt and misunderstanding',
      'Apply verbal emphasis by repeating a noun, verb, particle, or entire sentence',
      'Identify the six corroboration words: Nafs, Ayn, Kila, Kilta, Kull, Jamee\'',
      'Apply the two mandatory conditions for semantic emphasis: attached pronoun and dispensability upon removal',
      'Parse Kila and Kilta as dual when attached to pronouns, and as defectives with estimated vowels when prefixed to explicit nouns'
    ],

    vocabulary: [
      {
        termAr: 'التوكيد اللفظي',
        termEn: 'Verbal Emphasis',
        definitionAr: 'تكرار اللفظ الأول بعينه (اسماً كان أو فعلاً أو حرفاً أو جملة).',
        definitionEn: 'Emphasis achieved by verbatim repetition of a noun, verb, particle, or clause.'
      },
      {
        termAr: 'التوكيد المعنوي',
        termEn: 'Semantic Emphasis',
        definitionAr: 'توكيد يتم بألفاظ مخصوصة تتبع المؤكَّد في الإعراب بشرط اتصالها بضمير يعود عليه.',
        definitionEn: 'Emphasis using dedicated words linked to the antecedent through an agreement pronoun.'
      }
    ],

    sections: [
      {
        titleAr: '1. شروط وقواعد التوكيد المعنوي',
        titleEn: '1. Semantic Emphasis Conditions and Rules',
        contentAr: `ألفاظ التوكيد المعنوي هي: **(نفس، عين، كلا، كلتا، كل، جميع)**.
لكي تُعرب هذه الألفاظ **توكيداً معنوياً**، يجب أن يتوفر فيها **شرطان معاً**:
1. أن يتصل بها **ضمير** يعود على المؤكَّد ويطابقه في النوع والعدد (نفسه، أعينهم، كلاهما، كلهم).
2. أن **يصح حذفها** من الجملة ويبقى المعنى تاماً ومستقيماً.

**فارق إعرابي هام في (كلا وكلتا)**:
- إذا أضيفتا إلى **ضمير** ("كِلاهُما، كِلْتاهُما"): تعربان توكيداً معنوياً ملحقاً بالمثنى (بالألف رفعاً وبالياء نصباً وجراً).
- إذا أضيفتا إلى **اسم ظاهر** ("كِلا الطَّالِبَيْنِ"): تعربان بحركات مقدرة على الألف حسب موقعهما في الجملة (ولا تعربان توكيداً!).`,
        contentEn: `Semantic emphasis words require two simultaneous conditions:
1. Must contain an attached pronoun matching the emphasized noun.
2. Must be dispensable from the sentence without breaking syntax.
Special distinction for Kila/Kilta:
- With pronouns: inflects as dual (Alif/Yaa).
- With overt nouns: takes estimated vowels on Alif and parses by position.`
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
      id: 'quiz-marab8-4',
      titleAr: 'اختبار التوكيد وأحكامه',
      titleEn: 'Tawkeed Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'في جملة "الطالبان كلاهما متفوقان"، ما إعراب كلمة (كلاهما)؟',
          textEn: 'In "The two students both are excelling", what is the parsing of (Kilahoma)?',
          optionsAr: ['مبتدأ ثانٍ مرفوع بالألف', 'توكيد معنوي مرفوع بالألف', 'خبر المبتدأ مرفوع بالألف', 'نعت مرفوع بالألف'],
          optionsEn: ['Second subject with Alif', 'Semantic emphasis nominative with Alif', 'Predicate with Alif', 'Adjective with Alif'],
          correctIndex: 1,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: '(كلاهما) توكيد معنوي مرفوع بالألف لأنه ملحق بالمثنى، حيث اتصل بضمير ويصح حذفه (الطالبان متفوقان).',
          explanationEn: 'Kilahoma is a semantic emphasis word in nominative case with Alif as an annex to the dual, meeting all conditions.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: الحال بأنواعها (المفردة والجملة وشبه الجملة) ──
  {
    id: 'm-arab8-5',
    order: 5,
    titleAr: 'المحاضرة 5: الحال بأنواعها (المفردة والجملة وشبه الجملة) ورابط جملة الحال',
    titleEn: 'Lecture 5: The Hal (Adverbial of State) - Single, Clauses & Link Particles',
    subtitleAr: 'شروط صاحب الحال المعرفة وأنواع جملة الحال ورابط واو الحال والضمير',
    subtitleEn: 'Master the Hal expressing circumstance, its agreement, clauses, and Waw of Hal.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي / المتوسط - اللغة العربية',
    gradeLevelNameEn: 'Grade 8 / Middle School - Arabic Grammar',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Arabic Curriculum',
    unitTitleAr: 'الوحدة الثالثة: المنصوبات في اللغة العربية',
    unitTitleEn: 'Unit 3: Arabic Accusative Modifiers',
    lessonNumberAr: 'الدرس 5: الحال المفردة والجملة وشبه الجملة',
    lessonNumberEn: 'Lesson 5: Adverbial Hal & Circumstantial Modifiers',

    warmupHookAr: 'حين تسأل: "كيف عاد الجيشُ من المعركة؟" فيجيبك القائل: "عاد الجيشُ منتصراً" أو "عاد الجيشُ وهو منتصرٌ" أو "عاد الجيشُ يرفعُ رايةَ النصرِ"! كلمة (منتصراً) أو الجملة التي بعدها بينت هيئة صاحب الحال وقت حدوث الفعل، وهي دائماً منصوبة وتجيب عن سؤال (كيف؟). كيف نميز بين جملة الحال وجملة النعت؟',
    warmupHookEn: 'The Hal answers the question "How?" describing the condition of the subject or object during the action. Clauses following definite nouns are Hal, and those following indefinite nouns are adjectives.',

    learningOutcomesAr: [
      'أن يعرف الطالب الحال بأنه اسم نكرة منصوب يبين هيئة صاحب الحال عند وقوع الفعل',
      'أن يوضح الطالب أن صاحب الحال لابد أن يكون اسماً معرفة (فاعلاً، أو مفعولاً به، أو هما معاً)',
      'أن يميز بين الحال المفردة (منصوبة دائماً بالفتحة أو الياء أو الكسرة) والحال الجملة وشبه الجملة',
      'أن يستخرج رابط جملة الحال: (الضمير فقط، أو واو الحال فقط، أو الواو والضمير معاً)',
      'أن يحول الحال المفردة إلى حال جملة والعكس بمهارة لغوية متقنة'
    ],
    learningOutcomesEn: [
      'Define the Hal as an indefinite accusative modifier describing the condition of the referent during action',
      'Specify that the referent of the Hal (Sahib al-Hal) must be definite',
      'Distinguish single Hal (inflected accusative) from clause and prepositional Hal',
      'Identify links of Hal clauses: pronoun only, Waw of Hal only, or both Waw and pronoun',
      'Transform single Hal into clause Hal and vice versa smoothly'
    ],

    vocabulary: [
      {
        termAr: 'الحال',
        termEn: 'Al-Hal (Circumstantial State)',
        definitionAr: 'اسم نكرة مشتق منصوب يذكر لبيان هيئة الفاعل أو المفعول به عند صدور الفعل ويصح جواباً لكيف.',
        definitionEn: 'An indefinite accusative descriptor expressing the state of the agent or patient when the verb occurs.'
      },
      {
        termAr: 'واو الحال',
        termEn: 'Waw of Circumstance',
        definitionAr: 'واو تدخل على جملة الحال الاسمية أو الفعلية لربطها بصاحب الحال المعرفة وتفيد التزامن.',
        definitionEn: 'A linking particle introducing a circumstantial clause that correlates simultaneously with the main clause.'
      }
    ],

    sections: [
      {
        titleAr: '1. أنواع الحال وشروطها',
        titleEn: '1. Hal Categories and Grammatical Rules',
        contentAr: `تأتي الحال في اللغة العربية على ثلاثة أنواع:
1. **حال مفردة**: كلمة واحدة نكرة منصوبة تطابق صاحب الحال المعرفة في النوع والعدد: "أقبلَ الطالبُ **مبتسماً**".
2. **حال جملة** (اسمية أو فعلية): تأتي بعد صاحب حال **معرفة**، ولابد لها من **رابط**:
   - الضمير فقط: "جاء الطلابُ **يضحكون**" (واو الجماعة رابط).
   - واو الحال فقط: "وصلنا والقطارُ واقفٌ".
   - الواو والضمير معاً: "خرجتُ من البيت **وأنا واثقٌ** من النجاح".
3. **حال شبه جملة** (جار ومجرور أو ظرف): "شاهدتُ الهلالَ **بينَ السحابِ**".`,
        contentEn: `Hal appears in 3 structural forms:
1. Single: indefinite accusative word agreeing in gender and number.
2. Clause: follows a DEFINITE referent and requires a link (pronoun, Waw al-Hal, or both).
3. Semi-clause: prepositional or adverbial phrase in accusative place.`
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
      id: 'quiz-marab8-5',
      titleAr: 'اختبار الحال وأنواعه ورابطه',
      titleEn: 'Hal Structures & Links Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1',
          textAr: 'في جملة "رجعَ المسافرُ والشمسُ تغربُ"، ما نوع الرابط في جملة الحال (والشمس تغرب)؟',
          textEn: 'In "The traveler returned while the sun was setting", what is the link type in the Hal clause?',
          optionsAr: ['واو الحال فقط', 'الضمير فقط', 'الواو والضمير معاً', 'لا يوجد رابط'],
          optionsEn: ['Waw al-Hal only', 'Pronoun only', 'Both Waw and pronoun', 'No link required'],
          correctIndex: 0,
          conceptTestedAr: 'الفهم والتطبيق',
          conceptTestedEn: 'Comprehension & Application',
          explanationAr: 'الرابط هنا هو (واو الحال) فقط لأن جملة الحال لا تحتوي على ضمير يعود على صاحب الحال (المسافر).',
          explanationEn: 'The linking element is Waw al-Hal alone, since the circumstantial clause contains no pronoun matching the traveler.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 6: الميزان الصرفي والمجرد والمزيد من الأفعال ──
  {
    id: 'm-arab8-6',
    order: 6,
    titleAr: 'المحاضرة 6: علم الصرف: الميزان الصرفي والمجرد والمزيد من الأفعال والكشف في المعجم',
    titleEn: 'Lecture 6: Arabic Morphology: The Morphological Balance (Mizan Sarfi) & Abstract vs Augmented Verbs',
    subtitleAr: 'أصل وضع الميزان (فَـ ـعَـ ـلَ)، أحرف الزيادة (سألتمونيها)، والفرق الدقيق بين الفعل المجرد والمزيد وحالات الحذف والكشف في المعاجم',
    subtitleEn: 'Master the tri-consonantal scale Fa-Ayn-Lam, the ten augmentation letters, abstract vs augmented triliteral/quadriliteral verbs, elision, and dictionary search.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي / المتوسط - اللغة العربية',
    gradeLevelNameEn: 'Grade 8 / Middle School - Arabic Grammar & Morphology',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Arabic Curriculum',
    unitTitleAr: 'الوحدة الرابعة: علم الصرف والميزان اللغوي',
    unitTitleEn: 'Unit 4: Arabic Morphology & Word Scales',
    lessonNumberAr: 'الدرس 6: الميزان الصرفي والمجرد والمزيد',
    lessonNumberEn: 'Lesson 6: The Morphological Balance & Verb Augmentation',

    warmupHookAr: 'كما يزن الصائغ الذهب بميزان حساس بالغ الدقة لمعرفة العيار ونقاء المعدن، ابتكر علماء العربية القدماء ميزاناً عبقرياً يتألف من ثلاثة أحرف أصلية (ف - ع - ل) لوزن كل كلمة عربية! فإذا زادت الكلمة حرفاً زاد في الميزان، وإذا حُذف منها حرف حُذف ما يقابله! فكيف نزن كلمة مثل "استخرجَ" أو "قِفْ" أو "انتصار"؟ وما هي حروف الزيادة العشرة المجمعة في كلمة (سألتمونيها)؟',
    warmupHookEn: 'Just as a jeweler weighs gold with precision, classical Arabic grammarians designed a 3-letter scale (F-A-L) to measure any word. Extra letters mirror in the scale and dropped letters vanish from it. Master the foundational scale and augmentation rules!',

    learningOutcomesAr: [
      'أن يشرح الطالب فكرة الميزان الصرفي ومقابلة فاء الكلمة وعينها ولامها بالأحرف الأصلية',
      'أن يميز بين الفعل المجرد (ثلاثي مثل: كتب، أو رباعي مثل: دحرج) والفعل المزيد بحرف أو حرفين أو ثلاثة',
      'أن يحفظ حروف الزيادة العشرة المجمعة في قولهم (سألتمونيها) أو (هناء وتسليم) بالإضافة إلى التضعيف',
      'أن يزن الكلمات المزيدة بإنزال حروف الزيادة في الميزان بنفس حركاتها وضبطها',
      'أن يزن الكلمات التي حدث فيها حذف (مثل: قُلْ ⟵ فُلْ، قِ ⟵ عِ، اسْعَ ⟵ افْعَ)',
      'أن يطبق خطوات الكشف في المعاجم اللغوية بعد تجريد الكلمة ورد الجمع للمفرد والمضارع للماضي'
    ],
    learningOutcomesEn: [
      'Explain the morphological scale concept correlating radical letters to Fa, Ayn, and Lam',
      'Differentiate abstract (Mujarrad) verbs from augmented (Mazeed) verbs in 3-letter and 4-letter forms',
      'Identify the 10 augmentation letters summarized in "Sa\'altumooneeha" plus consonant gemination',
      'Balance augmented words by mapping radical roots and reflecting affixes precisely',
      'Balance words with deleted radicals (e.g., Qul -> Ful, Qi -> \'I)',
      'Execute dictionary lookup procedures by extracting base roots and restoring elided vowels'
    ],

    vocabulary: [
      {
        termAr: 'الميزان الصرفي (The Morphological Balance)',
        termEn: 'The Morphological Balance (Mizan Sarfi)',
        definitionAr: 'مقياس وضعه علماء الصرف لمعرفة أحوال بنية الكلمة وأصولها وما يطرأ عليها من زيادة أو حذف، وأصله مادة (ف - ع - ل).',
        definitionEn: 'A linguistic benchmark designed by Arabic morphologists to analyze word structures and affixes using the root F-A-L.'
      },
      {
        termAr: 'الفعل المجرد والمزيد (Mujarrad vs Mazeed)',
        termEn: 'Abstract vs Augmented Verbs',
        definitionAr: 'المجرد: ما كانت جميع حروفه أصلية لا يمكن الاستغناء عن حرف منها (ثلاثي أو رباعي). المزيد: ما زاد على أحرفه الأصلية حرف أو اثنان أو ثلاثة أحرف.',
        definitionEn: 'Mujarrad verbs comprise purely root consonants. Mazeed verbs incorporate one to three additional morphological affixes.'
      },
      {
        termAr: 'حروف الزيادة (Augmentation Letters)',
        termEn: 'Augmentation Letters',
        definitionAr: 'عشرة أحرف يجمعها قولك: (سَأَلْتُمُونِيهَا) أو (هَنَاءٌ وَتَسْلِيمٌ) بالإضافة إلى تضعيف الحرف الأصلي.',
        definitionEn: 'Ten specific letters used for morphological expansion, gathered in the mnemonic "Sa-al-tu-moo-nee-ha" plus consonant doubling.'
      }
    ],

    sections: [
      {
        titleAr: '1. أصول الميزان الصرفي ووزن الفعل المجرد والمزيد',
        titleEn: '1. Foundations of Mizan Sarfi & Verb Augmentation Rules',
        contentAr: `1) أصل الميزان الصرفي:
- اختار الصرفيون كلمة **(فَعَلَ)** لأن أغلب أصول الكلمات العربية ثلاثية:
  * الحرف الأول الأصلي يُسمى: **فاء الكلمة**.
  * الحرف الثاني الأصلي يُسمى: **عين الكلمة**.
  * الحرف الثالث الأصلي يُسمى: **لام الكلمة**.
  * مثال: (كَتَبَ ⟵ فَعَلَ)، (عَلِمَ ⟵ فَعِلَ)، (شَرُفَ ⟵ فَعُلَ).
  * الرباعي المجرد: نزيد لاماً في آخره (فَعْلَلَ): مثل: (دَحْرَجَ ⟵ فَعْلَلَ)، (زَلْزَلَ ⟵ فَعْلَلَ).

2) وزن الكلمات المزيدة:
- تقابل الأصول بأحرف (ف، ع، ل) وتنزل أحرف الزيادة كما هي مع نفس الضبط:
  * (أَكْرَمَ ⟵ أَفْعَلَ)، (انْطَلَقَ ⟵ انْفَعَلَ)، (اسْتَغْفَرَ ⟵ اسْتَفْعَلَ).
  * إذا كان التضعيف أصلياً ضُعف في الميزان: (قَدَّمَ ⟵ فَعَّلَ).

3) الحذف في الميزان الصرفي:
- ما يُحذف من أصول الكلمة يُحذف ما يقابله في الميزان:
  * الفعل (قالَ): أصله (فَعَلَ) ⟵ الأمر منه (قُلْ): حذفت الألف (عين الكلمة) ⟵ وزنه: **(فُلْ)**.
  * الفعل (وَقَفَ): أصله (فَعَلَ) ⟵ الأمر منه (قِفْ): حذفت الواو (فاء الكلمة) ⟵ وزنه: **(عِلْ)**.
  * الفعل (وَقَى): الأمر منه (قِ): حذفت الفاء واللام ⟵ وزنه: **(عِ)**.

![مخطط الميزان الصرفي والمجرد والمزيد من الأفعال وحالات الزيادة والحذف والكشف في المعجم](/curriculum_images/arabic_morphology_mizan_sarfi.svg)`,
        contentEn: 'Arabic words balance against Fa-Ayn-Lam. Pure triliteral verbs map directly; quadriliterals append an extra Lam (Fa\'lala). Augmentations are reflected identically; deleted radicals delete their corresponding scale letters. Dictionary lookup requires returning words to past triliteral roots.',
        diagram: {
          id: 'diagram-m8-arab-morphology-mizan',
          figureNumberAr: 'شكل توضيحي (١-١)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'مخطط الميزان الصرفي والمجرد والمزيد من الأفعال',
          titleEn: 'Arabic Morphological Balance (Mizan Sarfi) & Verb Augmentation Diagram',
          captionAr: 'مخطط تعليمي معتمد يوضح كفتي الميزان الصرفي (فَـ ـعَـ ـلَ)، أوزان المجرد الثلاثي والرباعي، أحرف الزيادة العشرة (سألتمونيها)، قواعد وزن الزيادة والتضعيف، وحالات الحذف من الميزان وكيفية الكشف في المعاجم.',
          captionEn: 'Standard pedagogical diagram detailing the morphological scale balance (Fa-Ayn-Lam), pure triliteral and quadriliteral weights, the ten augmentation letters, elision rules, and dictionary root lookup.',
          diagramType: 'custom_svg',
          imageUrl: '/curriculum_images/arabic_morphology_mizan_sarfi.svg',
          takeawayFormulaAr: 'الأصل: ف-ع-ل | أحرف الزيادة: سألتمونيها + التضعيف | ما يزاد يزاد في الميزان | ما يحذف يحذف من الميزان',
          takeawayFormulaEn: 'Base: F-A-L | Augmentation: Sa\'altumooneeha + Shaddah | Added affixes mirror in scale | Dropped letters elide from scale'
        }
      },
      {
        titleAr: '2. الكشف في المعاجم اللغوية وخطوات تجريد الكلمات',
        titleEn: '2. Arabic Lexicography & Dictionary Lookup Procedures',
        contentAr: `خطوات البحث عن معنى أي كلمة في المعجم الوجيز أو الوسيط:
1. **رد الجمع والمثنى إلى المفرد:** (علماء ⟵ عالِم).
2. **تجريد الكلمة من أحرف الزيادة والضمائر وأل التعريف:** (استخراج ⟵ خَرَجَ).
3. **رد حرف العلة إلى أصله (الواو أو الياء) عن طريق المضارع أو المصدر:**
   - (قالَ ⟵ يقول ⟵ أصل الألف واو: ق-و-ل).
   - (باعَ ⟵ يبيع ⟵ أصل الألف ياء: ب-ي-ع).
   - (دعا ⟵ يدعو ⟵ د-ع-و).
4. **فك الإدغام في الحرف المضعف الثلاثي:** (ردَّ ⟵ ر-د-د)، (شدَّ ⟵ ش-د-د).
5. **طريقة المعاجم القديمة (كالقاموس المحيط ولسان العرب):** باب الحرف الأخير، فصل الحرف الأول.
6. **طريقة المعاجم الحديثة (كالوسيط والمنجد والوجيز):** باب الحرف الأول، ثم الثاني، ثم الثالث.`,
        contentEn: 'Dictionary lookup requires: returning plurals to singular, stripping augmentation letters and prefixes/suffixes, restoring weak vowels (Alif to Waw/Yaa) via present tense, uncoupling geminated letters, and indexing by root.'
      }
    ],

    keyConceptsAr: [
      'الميزان الصرفي يزن الكلمات العربية الثلاثية بـ (فَعَلَ) والرباعية بـ (فَعْلَلَ)',
      'أحرف الزيادة عشرة تجمعها كلمة (سألتمونيها) أو (هناء وتسليم) إضافة إلى التضعيف',
      'حركات الميزان الصرفي تطابق حركات الكلمة الموزونة تماماً',
      'إذا حذف حرف أصلي من الكلمة يحذف ما يقابله في الميزان (قِف ⟵ عِلْ، قُلْ ⟵ فُلْ)',
      'للكشف في المعجم: نجرد الكلمة ونرد أحرف العلة لأصلها ونفك التضعيف الثلاثي'
    ],
    keyConceptsEn: [
      'Morphological scale balances triliterals with Fa-Ayn-Lam and quadriliterals with Fa\'lala',
      'Ten augmentation letters in "Sa\'altumooneeha" plus gemination',
      'Scale diacritics strictly mirror word vocalization',
      'Deleted radicals lead to corresponding elisions in the scale',
      'Dictionary lookup requires stripping to root, restoring weak letters, and decoupling doubled roots'
    ],
    summaryAr: 'تتناول هذه المحاضرة الميزان الصرفي في اللغة العربية لصف الثاني الإعدادي: كيفية وزن الكلمات المجردة والمزيدة، قواعد إسقاط الحروف المحذوفة من الميزان، وحفظ حروف الزيادة (سألتمونيها) مع التدريب التطبيقي على الكشف في المعاجم اللغوية.',
    summaryEn: 'Comprehensive Grade 8 morphology lecture: balancing pure and augmented words, elision rules in scale derivations, the 10 augmentation letters, and dictionary search algorithms.',

    textbookExercises: [
      {
        id: 'tb-m8-arab6-1',
        questionAr: 'زن الكلمات الآتية مبيناً ما حدث فيها من زيادة أو حذف:\n1) اسْتَقَامَ\n2) مَهَابَة\n3) صِلَة\n4) اسْعَ',
        questionEn: 'Balance the following words indicating augmentations or elisions: 1) Istaqaama, 2) Mahaabah, 3) Silah, 4) Is\'a',
        solutionStepsAr: [
          '1) (اسْتَقَامَ): أصلها (قَوَمَ ⟵ فَعَلَ)، زادت بالهمزة والسين والتاء ⟵ الوزن: (اسْتَفْعَلَ).',
          '2) (مَهَابَة): أصلها (هَابَ / هَيَبَ ⟵ فَعَلَ)، زادت بالميم والتاء المربوطة ⟵ الوزن: (مَفْعَلَة).',
          '3) (صِلَة): أصلها (وَصَلَ ⟵ فَعَلَ)، حذفت الفاء (الواو) وعُوّض عنها بتاء مربوطة ⟵ الوزن: (عِلَة).',
          '4) (اسْعَ): أصلها (سَعَى ⟵ فَعَلَ)، زادت همزة الوصل وحذفت اللام (حرف العلة للجزم في الأمر) ⟵ الوزن: (افْعَ).'
        ],
        solutionStepsEn: [
          '1) Istaqaama: root Q-W-M + I-S-T affixes -> Istaf\'ala.',
          '2) Mahaabah: root H-Y-B + M and Ta-Marbuta -> Maf\'alah.',
          '3) Silah: root W-S-L, dropped Fa (Waw), appended Ta-Marbuta -> \'Ilah.',
          '4) Is\'a: root S-\'A-Y, added imperative Hamza, elided Lam (weak letter) -> If\'a.'
        ],
        answerAr: 'الأوزان: استقام (اسْتَفْعَلَ) - مهابة (مَفْعَلَة) - صلة (عِلَة) - اسعَ (افْعَ).',
        answerEn: 'Scales: Istaqaama (Istaf\'ala) - Mahaabah (Maf\'alah) - Silah (\'Ilah) - Is\'a (If\'a).'
      }
    ],

    assessment: {
      id: 'quiz-marab8-6',
      titleAr: 'اختبار تمكين الميزان الصرفي والمجرد والمزيد',
      titleEn: 'Morphological Scale & Verb Augmentation Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m8-arab6',
          textAr: 'ما وزن الفعل (انتصرَ) في الميزان الصرفي؟',
          textEn: 'What is the morphological scale of the verb (Intasara)?',
          optionsAr: ['انفعلَ', 'افتعلَ', 'استفعلَ', 'تفاعلَ'],
          optionsEn: ['Infa\'ala', 'Ifta\'ala', 'Istaf\'ala', 'Tafa\'ala'],
          correctIndex: 1,
          conceptTestedAr: 'تحديد أحرف الزيادة في الميزان',
          conceptTestedEn: 'Identifying augmentation affixes',
          explanationAr: 'أصل الفعل (نَصَرَ ⟵ فَعَلَ)، النون أصلية تقابل الفاء، وزادت الألف والتاء، فيكون وزنه: (افْتَعَلَ).',
          explanationEn: 'The root is N-S-R where Nun is a radical (Fa). Added letters are Alif and Taa, producing Ifta\'ala.',
          difficulty: 'medium'
        },
        {
          id: 'q2-m8-arab6',
          textAr: 'ما وزن كلمة (قِفْ) في الميزان الصرفي؟',
          textEn: 'What is the morphological scale of (Qif)?',
          optionsAr: ['فِلْ', 'عِلْ', 'عِفْ', 'لِفْ'],
          optionsEn: ['Fil', '\'Il', '\'If', 'Lif'],
          correctIndex: 1,
          conceptTestedAr: 'الحذف في الميزان الصرفي',
          conceptTestedEn: 'Elision in morphological scale',
          explanationAr: 'الفعل الماضي (وَقَفَ ⟵ فَعَلَ)، حذفت الواو (فاء الكلمة) في فعل الأمر، فبقيت العين واللام مكسورة العين: (عِلْ).',
          explanationEn: 'Past tense is W-Q-F (Fa\'ala). The Waw (Fa) is deleted in the imperative, leaving Ayn and Lam: \'Il.',
          difficulty: 'medium'
        },
        {
          id: 'q3-m8-arab6',
          textAr: 'نكشف في المعجم عن كلمة (استقامة) في مادة:',
          textEn: 'We look up the word (Istiqaamah) in the root:',
          optionsAr: ['س-ق-م', 'ق-ي-م', 'ق-و-م', 'ا-س-ت'],
          optionsEn: ['S-Q-M', 'Q-Y-M', 'Q-W-M', 'A-S-T'],
          correctIndex: 2,
          conceptTestedAr: 'خطوات الكشف في المعاجم ورد حرف العلة لأصله',
          conceptTestedEn: 'Dictionary lookup and weak letter restoration',
          explanationAr: 'نجرد الكلمة من الزيادة (استـ...ـة) فتصبح (قام)، ونرد الألف لأصلها بالمضارع (يقوم) فتكون المادة: (ق - و - م).',
          explanationEn: 'Stripping affixes leaves Q-A-M. Restoring Alif via present tense Yaqoom yields the root Q-W-M.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
