import type { Lecture } from '../types';

// PRIMARY ARABIC — GRADE 4 (اللغة العربية الصف الرابع الابتدائي - منهج التعليم 2.0 والمسارات المعتمدة)
// ============================================================================
// Based on official Egyptian Ministry of Education Edu 2.0 & Saudi Ministry of Education G4 standards.
// Covers:
// 1. Parts of Speech, Noun Indicators & The Nominal Sentence (أقسام الكلمة والجملة الاسمية)
// 2. The Verbal Sentence: Verb, Subject & Subject Nominative Markers (الجملة الفعلية والفاعل)
// 3. Semi-Sentences: Prepositional Phrases & Adverbs of Time/Place (شبه الجملة والظروف)
// 4. Punctuation Marks & Descriptive Narrative Writing (علامات الترقيم والتعبير الكتابي)

export const PRIMARY_ARABIC_G4_LECTURES: Lecture[] = [
  // ── LECTURE 1: PARTS OF SPEECH & NOMINAL SENTENCE ──
  {
    id: 'parb-g4-1',
    order: 1,
    titleAr: 'المحاضرة 1: أقسام الكلمة وعلامات الاسم والجملة الاسمية (المبتدأ والخبر)',
    titleEn: 'Lecture 1: Parts of Speech, Noun Indicators & The Nominal Sentence',
    subtitleAr: 'التمييز بين الاسم والفعل والحرف، علامات الاسم (الـ، التنوين، التاء المربوطة، الجر)، وأركان الجملة الاسمية وعلامات رفع المبتدأ والخبر.',
    subtitleEn: 'Classify parts of speech, master noun identifiers, and analyze nominal sentences (subject & predicate).',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الرابع الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 4 / Primary 4 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (قواعد لغتي الجميلة)',
    unitTitleEn: 'Theme 1: Grammar Foundations',
    lessonNumberAr: 'الدرس 1: أقسام الكلمة والجملة الاسمية',
    lessonNumberEn: 'Lesson 1: Parts of Speech & Nominal Sentence',

    warmupHookAr: 'كل كلمة ننطقها باللغة العربية تنتمي إلى واحدة من ثلاث عائلات فقط: إما اسم، أو فعل، أو حرف! كيف نكتشف هوية الكلمة فوراً؟ وما الذي يجعل الجملة الاسمية متماسكة وقوية بركنيها الأساسيين: المبتدأ والخبر؟',
    warmupHookEn: 'Every spoken Arabic word belongs to one of three families: Noun, Verb, or Particle! How do we instantly identify them, and how do subject and predicate form the nominal sentence?',

    learningOutcomesAr: [
      'أن يصنف الطالب الكلمات إلى اسم (يدل على معنى غير مقترن بزمن) وفعل (حدث مقترن بزمن) وحرف (لا يظهر معناه إلا مع غيره).',
      'أن يحدد علامات الاسم الخمس: (قبول "الـ"، التنوين، التاء المربوطة، النداء، والجر بحرف الجر).',
      'أن يوضح ركني الجملة الاسمية: المبتدأ (الاسم الذي نبدأ به) والخبر (الذي يتمم معنى الجملة).',
      'أن يعرب المبتدأ والخبر بعلامات الرفع المختلفة: الضمة (مفرد/جمع تكسير/جمع مؤنث سالم)، الألف (مثنى)، والواو (جمع مذكر سالم).'
    ],
    learningOutcomesEn: [
      'Classify words into Nouns, Verbs, and Particles.',
      'Identify noun markers: definite article (Al-), nunation, Taa Marbuta, vocative, and prepositions.',
      'Identify the components of a nominal sentence: Subject (Mubtada) and Predicate (Khabar).',
      'Parse subject and predicate with nominative markers: Damma, Alif (dual), and Waw (plural).'
    ],

    vocabulary: [
      {
        termAr: 'أقسام الكلمة (Parts of Speech)',
        termEn: 'Parts of Speech',
        definitionAr: 'تنقسم الكلمة في اللغة العربية إلى: اسم (إنسان، حيوان، نبات، جماد، صفة)، فعل (ماضٍ، مضارع، أمر)، وحرف.',
        definitionEn: 'The three grammatical categories in Arabic: Noun (Ism), Verb (Fi\'l), and Particle (Harf).'
      },
      {
        termAr: 'المبتدأ والخبر (Subject & Predicate)',
        termEn: 'Mubtada & Khabar',
        definitionAr: 'ركنان أساسيان في الجملة الاسمية مرفوعان دائماً؛ المبتدأ تبدأ به الجملة، والخبر يخبرنا عنه ويتمم الفائدة.',
        definitionEn: 'The two foundational nominative elements of an Arabic nominal sentence.'
      }
    ],

    keyConceptsAr: [
      'علامات الاسم لا تجتمع مع الفعل أبداً (لا يقبل الفعل التنوين أو "الـ").',
      'المبتدأ والخبر مرفوعان دائماً: 1) بالضمة إذا كان مفرداً أو جمع تكسير أو جمع مؤنث سالماً، 2) بالألف إذا كان مثنى، 3) بالواو إذا كان جمع مذكر سالماً.',
      'الجملة الاسمية لا تكتمل إلا بالخبر الذي نسأل عنه بـ (ماله؟ أو مالها؟).'
    ],
    keyConceptsEn: [
      'Noun markers never attach to verbs (verbs never take nunation or Al-).',
      'Subject and predicate are always nominative: Damma, Alif (dual), or Waw (masculine plural).',
      'The predicate completes meaningful comprehension.'
    ],

    summaryAr: 'تعلمنا في هذا الدرس تصنيف الكلمات، وعلامات تمييز الاسم، وأركان الجملة الاسمية (المبتدأ والخبر) وعلامات رفعهما بالتفصيل.',
    summaryEn: 'We classified Arabic words, identified noun markers, and parsed nominal sentence subjects and predicates.',

    mainContentAr: `
### 1. أقسام الكلمة وعلامات الاسم
- **الاسم:** كلمة تدل على إنسان (أحمد)، حيوان (أسد)، نبات (شجرة)، جماد (قلم)، مكان (مصر)، أو صفة (كريم).
  - **علامات الاسم:**
    1. دخول (الـ) التعريف: **الكتاب**.
    2. التنوين: **كتابٌ**، **كتاباً**، **كتابٍ**.
    3. التاء المربوطة: **مدرسة**، **حديقة**.
    4. الجر بحرف جر: في **الفصلِ**.
    5. النداء: يا **محمدُ**.
- **الفعل:** يدل على حدث في زمن محدد (ماضٍ: كتبَ، مضارع: يكتبُ، أمر: اكتبْ).
- **الحرف:** لا يفهم معناه إلا مع غيره (حروف الجر: من، إلى، عن، على، في، الباء، الكاف، اللام؛ وحروف العطف: الواو، الفاء، ثم، أو).

---

### 2. ركنا الجملة الاسمية وعلامات الرفع
الجملة الاسمية تبدأ باسم، ولها ركنان مرفوعان دائماً:
1. **الرفع بالضمة (علامة أصلية):**
   - المفرد: **السماءُ صافيةٌ**.
   - جمع التكسير: **العلماءُ أذكياءُ**.
   - جمع المؤنث السالم: **المعلماتُ ماهراتٌ**.
2. **الرفع بالألف (علامة فرعية):**
   - المثنى: **الكتابانِ مفيدانِ** (مبتدأ وخبر مرفوعان بالألف لأنهما مثنى).
3. **الرفع بالواو (علامة فرعية):**
   - جمع المذكر السالم: **المعلمونَ مخلصونَ** (مبتدأ وخبر مرفوعان بالواو لأنهما جمع مذكر سالم).
`,
    assessment: {
      id: 'assess-arb4-1',
      titleAr: 'تقييم المحاضرة 1: أقسام الكلمة والجملة الاسمية',
      titleEn: 'Assessment 1: Parts of Speech & Nominal Sentence',
      passingScore: 80,
      questions: [
        {
          id: 'q-a4-1-1',
          textAr: 'أي من الكلمات التالية تعد اسماً لاحتوائها على علامة من علامات الاسم؟',
          textEn: 'Which word is a noun due to containing a noun indicator?',
          optionsAr: ['يَجْرِي', 'مَدْرَسَةٌ', 'كَتَبَ', 'إِلَى'],
          optionsEn: ['Yajree', 'Madrasatun', 'Kataba', 'Ila'],
          correctIndex: 1,
          conceptTestedAr: 'علامات الاسم (التاء المربوطة والتنوين)',
          conceptTestedEn: 'Noun Indicators (Taa Marbuta & Nunation)',
          difficulty: 'easy',
          explanationAr: 'كلمة (مدرسةٌ) اسم لاشتمالها على التاء المربوطة والتنوين وهما من علامات الاسم.',
          explanationEn: '"Madrasatun" is a noun because it features both Taa Marbuta and nunation.'
        },
        {
          id: 'q-a4-1-2',
          textAr: 'ما علامة رفع المبتدأ والخبر في جملة: «المهندسان بارعان»؟',
          textEn: 'What is the nominative marker in: «المهندسان بارعان»?',
          optionsAr: ['الضمة', 'الألف لأنه مثنى', 'الواو', 'الفتحة'],
          optionsEn: ['Damma', 'Alif because it is dual', 'Waw', 'Fatha'],
          correctIndex: 1,
          conceptTestedAr: 'رفع المثنى بالألف',
          conceptTestedEn: 'Dual Nominative with Alif',
          difficulty: 'easy',
          explanationAr: 'المبتدأ والخبر مثنى فيرفعان بالألف.',
          explanationEn: 'Both subject and predicate are dual nouns, inflected with nominative Alif.'
        },
        {
          id: 'q-a4-1-3',
          textAr: 'ما الإعراب الصحيح لكلمة "مجتهدون" في جملة: «التلاميذُ مجتهدون»؟',
          textEn: 'What is the parsing of "Mujtahidoona" in «التلاميذُ مجتهدون»?',
          optionsAr: [
            'فاعل مرفوع بالضمة',
            'خبر مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم',
            'مفعول به منصوب بالياء',
            'مبتدأ ثانٍ مرفوع بالألف'
          ],
          optionsEn: [
            'Subject with Damma',
            'Predicate in nominative case with Waw (sound masculine plural)',
            'Object in accusative with Yaa',
            'Second subject with Alif'
          ],
          correctIndex: 1,
          conceptTestedAr: 'إعراب الخبر جمع المذكر السالم بالواو',
          conceptTestedEn: 'Predicate Parsing with Waw',
          difficulty: 'medium',
          explanationAr: '(مجتهدون) تممت معنى الجملة الاسمية فهي خبر مرفوع بالواو لأنه جمع مذكر سالم.',
          explanationEn: 'Mujtahidoona completes the statement, serving as nominative predicate with Waw.'
        }
      ]
    }
  },

  // ── LECTURE 2: THE VERBAL SENTENCE ──
  {
    id: 'parb-g4-2',
    order: 2,
    titleAr: 'المحاضرة 2: الجملة الفعلية (الفعل والفاعل وعلامات رفع الفاعل)',
    titleEn: 'Lecture 2: The Verbal Sentence (Verb, Subject & Nominative Markers)',
    subtitleAr: 'أنواع الفعل (ماضٍ، مضارع، أمر)، أركان الجملة الفعلية، إعراب الفاعل وعلامات رفعه (الضمة، الألف، الواو).',
    subtitleEn: 'Verb tenses (past, present, imperative), components of verbal sentences, and subject parsing markers.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الرابع الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 4 / Primary 6 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: من أكون؟ (قواعد لغتي الجميلة)',
    unitTitleEn: 'Theme 1: Grammar Foundations',
    lessonNumberAr: 'الدرس 2: الجملة الفعلية والفاعل',
    lessonNumberEn: 'Lesson 2: Verbal Sentence & Subject',

    warmupHookAr: 'الجملة الفعلية هي جملة الحركة والنشاط! تبدأ دائماً بحدث (فعل) ولابد لكل حدث من بطل حقيقي قام به يسمى (الفاعل). عندما نقول: «طار العصفورُ»، فمن طار؟ العصفور! هو الفاعل المرفوع دائماً!',
    warmupHookEn: 'The verbal sentence conveys action! It begins with a verb, which demands an actor: the Subject (Fa\'il). When saying "Flew the sparrow", who flew? The sparrow! The always-nominative subject!',

    learningOutcomesAr: [
      'أن يعرف الطالب الجملة الفعلية بأنها كل جملة تبدأ بفعل.',
      'أن يميز بين أزمنة الأفعال: الماضي (حدث وانتهى)، المضارع (مستمر الآن)، والأمر (طلب حدوث الشيء مستقبلاً).',
      'أن يحدد الفاعل كركن أساسي مرفوع نسأل عنه بأداة الاستفهام (مَنْ؟).',
      'أن يعرب الفاعل بعلامات الرفع: الضمة (للمفرد، جمع التكسير، جمع المؤنث السالم)، الألف (للمثنى)، والواو (لجمع المذكر السالم).'
    ],
    learningOutcomesEn: [
      'Define verbal sentences as any sentence initiated by a verb.',
      'Distinguish verb tenses: Past (completed), Present (ongoing), Imperative (command).',
      'Identify the Subject (Fa\'il) as the doer, identified by "Who?".',
      'Parse the Subject with case markers: Damma, Alif (dual), and Waw (plural).'
    ],

    vocabulary: [
      {
        termAr: 'الجملة الفعلية (Verbal Sentence)',
        termEn: 'Verbal Sentence',
        definitionAr: 'جملة تبدأ بفعل وتتكون من ركنين أساسيين هما: الفعل والفاعل.',
        definitionEn: 'A sentence beginning with a verb, structurally centered on verb and subject.'
      },
      {
        termAr: 'الفاعل (Subject - Fa\'il)',
        termEn: 'Subject (Doer of Action)',
        definitionAr: 'اسم مرفوع يدل على من قام بالفعل أو اتصف به، ونسأل عنه بـ (مَنْ فعل؟).',
        definitionEn: 'A nominative noun indicating who executed or manifested the action.'
      }
    ],

    keyConceptsAr: [
      'الفاعل مرفوع دائماً ولا يأتي منصوباً أو مجروراً أبداً.',
      'علامات رفع الفاعل: الضمة (للمفرد وجمع التكسير وجمع المؤنث السالم)، الألف (للمثنى)، الواو (لجمع المذكر السالم).',
      'الفعل في أول الجملة يظل مفرداً دائماً حتى لو كان الفاعل مثنى أو جمعاً: (حضرَ الطالبُ، حضرَ الطالبانِ، حضرَ الطلابُ).'
    ],
    keyConceptsEn: [
      'The subject is strictly nominative.',
      'Subject nominative markers: Damma (singular/broken/feminine plural), Alif (dual), Waw (masculine plural).',
      'The initial verb always remains singular regardless of subject duality or plurality.'
    ],

    summaryAr: 'شرحنا في هذا الدرس أركان الجملة الفعلية، وأزمنة الأفعال الثلاثة، وكيفية تحديد وإعراب الفاعل بعلامات رفعه المختلفة.',
    summaryEn: 'We covered verbal sentence components, verb tenses, and subject identification and case inflection.',

    mainContentAr: `
### 1. أنواع الفعل
1. **الفعل الماضي:** حدث تم وانتهى في الزمن الماضي، مثل: (سافرَ، قرأتْ، فازَ).
2. **الفعل المضارع:** حدث مستمر وما زال يحدث الآن، ويبدأ بحروف المضارعة (أ، ن، ي، ت)، مثل: (أكتبُ، نلعبُ، يشرحُ، تذاكرُ).
3. **فعل الأمر:** طلب القيام بعمل ما في المستقبل، مثل: (احفظْ، اسمعْ، رتّبْ).

---

### 2. الفاعل وعلامات رفعه
نسأل عن الفاعل بـ **(مَنْ؟)**:
- **يرفع بالضمة:**
  - المفرد: دافعَ **الجنديُّ** عن وطنه (الجندي: فاعل مرفوع وعلامة رفعه الضمة).
  - جمع التكسير: نجحَ **الطلابُ** في الامتحان.
  - جمع المؤنث السالم: تألقتْ **المعلماتُ**.
- **يرفع بالألف:**
  - المثنى: تعاونَ **الصديقانِ** (الصديقان: فاعل مرفوع بالألف لأنه مثنى).
- **يرفع بالواو:**
  - جمع المذكر السالم: صلّى **المسلمونَ** صلاة العيد (المسلمون: فاعل مرفوع بالواو لأنه جمع مذكر سالم).
`,
    assessment: {
      id: 'assess-arb4-2',
      titleAr: 'تقييم المحاضرة 2: الجملة الفعلية والفاعل',
      titleEn: 'Assessment 2: Verbal Sentence & Subject',
      passingScore: 80,
      questions: [
        {
          id: 'q-a4-2-1',
          textAr: 'ما الفاعل في جملة: «أخلصَ في العملِ العاملانِ»؟',
          textEn: 'What is the subject in: «أخلصَ في العملِ العاملانِ»?',
          optionsAr: ['أخلصَ', 'في العملِ', 'العاملانِ', 'ضمير مستتر'],
          optionsEn: ['Akhlasa', 'Fi Al-\'Amal', 'Al-\'Amilani', 'Hidden pronoun'],
          correctIndex: 2,
          conceptTestedAr: 'تحديد الفاعل المتأخر',
          conceptTestedEn: 'Identifying Inverted Subject',
          difficulty: 'easy',
          explanationAr: 'من الذي أخلص في العمل؟ (العاملانِ) فهما الفاعل المرفوع بالألف لأنه مثنى.',
          explanationEn: 'Who showed sincerity? "The two workers" (Al-\'Amilani) is the dual subject.'
        },
        {
          id: 'q-a4-2-2',
          textAr: 'أي الجمل التالية كُتبت بصورة صحيحة نحوياً لمطابقة الفعل في أول الجملة؟',
          textEn: 'Which sentence correctly keeps the initial verb singular?',
          optionsAr: [
            'لعبوا الأولادُ بالكرة',
            'لعبَ الأولادُ بالكرة',
            'لعبان الأولادُ بالكرة',
            'يلعبون الأولادُ بالكرة'
          ],
          optionsEn: [
            'La\'ibu Al-Awladu',
            'La\'iba Al-Awladu',
            'La\'iban Al-Awladu',
            'Yal\'aboona Al-Awladu'
          ],
          correctIndex: 1,
          conceptTestedAr: 'إفراد الفعل في بداية الجملة',
          conceptTestedEn: 'Singular Verb at Sentence Start',
          difficulty: 'medium',
          explanationAr: 'الفعل في أول الجملة يلزم الإفراد دائماً حتى لو كان الفاعل جمعاً: «لعبَ الأولادُ».',
          explanationEn: 'Sentence-initial verbs must stay singular regardless of plural subjects.'
        },
        {
          id: 'q-a4-2-3',
          textAr: 'ما علامة رفع الفاعل في جملة: «أتقنَ الصانعونَ أعمالهم»؟',
          textEn: 'What is the nominative marker for the subject in «أتقنَ الصانعونَ أعمالهم»?',
          optionsAr: ['الضمة', 'الألف', 'الواو لأنه جمع مذكر سالم', 'الفتحة'],
          optionsEn: ['Damma', 'Alif', 'Waw because it is sound masculine plural', 'Fatha'],
          correctIndex: 2,
          conceptTestedAr: 'رفع جمع المذكر السالم بالواو',
          conceptTestedEn: 'Sound Masculine Plural Nominative with Waw',
          difficulty: 'easy',
          explanationAr: 'الصانعون فاعل مرفوع بالواو لأنه جمع مذكر سالم.',
          explanationEn: 'Al-Sani\'oona is the subject inflected with nominative Waw.'
        }
      ]
    }
  },

  // ── LECTURE 3: SEMI-SENTENCES (PREPOSITIONS & ADVERBS) ──
  {
    id: 'parb-g4-3',
    order: 3,
    titleAr: 'المحاضرة 3: شبه الجملة (الجار والمجرور، وظرفا الزمان والمكان)',
    titleEn: 'Lecture 3: Semi-Sentences (Prepositions & Adverbs of Time/Place)',
    subtitleAr: 'حروف الجر وإعراب الاسم المجرور، ظرف الزمان وظرف المكان وإعرابهما بالنصب، واستخدام شبه الجملة لإتمام المعنى وتحديد المواقع.',
    subtitleEn: 'Prepositional phrases, adverbs of time and place, and their syntactical roles in enriching sentences.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الرابع الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 4 / Primary 6 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المحور الثاني: مكملات الجملة العربية',
    unitTitleEn: 'Theme 2: Complements of Arabic Sentences',
    lessonNumberAr: 'الدرس 3: شبه الجملة والظروف',
    lessonNumberEn: 'Lesson 3: Semi-Sentences & Adverbs',

    warmupHookAr: 'إذا أردت وصف موقع عصفور مغرد، تقول: "العصفورُ فوقَ الشجرةِ" أو "العصفورُ في القفصِ". هذان التعبيران ليسا جملة تامة بمفردهما، ولكن لهما قوة عجيبة في إتمام المعنى وتحديد الزمان والمكان بدقة! هذا ما نطلق عليه في لغتنا: "شبه الجملة".',
    warmupHookEn: 'To describe a bird, you say "The bird is ABOVE the tree" or "IN the cage". These expressions are not standalone sentences, yet they specify location and time. We call them Semi-Sentences (Shibh Jumla).',

    learningOutcomesAr: [
      'أن يعرف الطالب شبه الجملة بنوعيه: 1) الجار والمجرور، 2) الظرف (زمان أو مكان).',
      'أن يعدد حروف الجر (مِن، إِلَى، عَنْ، عَلَى، فِي، البَاء، الكَاف، اللَّام) ويعرب الاسم الواقع بعدها اسماً مجروراً.',
      'أن يميز بين ظرف الزمان (يحدد متى وقع الفعل) وظرف المكان (يحدد أين وقع الفعل).',
      'أن يعرب ظرفي الزمان والمكان كاسمين منصوبين بالفتحة.'
    ],
    learningOutcomesEn: [
      'Identify semi-sentences: prepositional phrases and adverbs.',
      'Enumerate prepositions and parse following nouns as genitive.',
      'Distinguish adverbs of time (when) from adverbs of place (where).',
      'Parse adverbs as accusative nouns.'
    ],

    vocabulary: [
      {
        termAr: 'شبه الجملة (Semi-Sentence - Shibh Jumla)',
        termEn: 'Semi-Sentence',
        definitionAr: 'تركيب لا يكتمل به المعنى منفرداً ولكنه يكمل معنى جملة أخرى، ويأتي في صورتين: جار ومجرور أو ظرف.',
        definitionEn: 'A phrase functioning as a sentence complement: either a prepositional phrase or an adverbial phrase.'
      },
      {
        termAr: 'ظرف الزمان (Adverb of Time)',
        termEn: 'Adverb of Time',
        definitionAr: 'اسم منصوب يوضح زمن حدوث الفعل، ونسأل عنه بـ (متى؟) مثل: صباحاً، ليلاً، صيفاً، ساعةً.',
        definitionEn: 'An accusative noun clarifying when an action took place (answered by "When?").'
      },
      {
        termAr: 'ظرف المكان (Adverb of Place)',
        termEn: 'Adverb of Place',
        definitionAr: 'اسم منصوب يوضح مكان حدوث الفعل، ونسأل عنه بـ (أين؟) مثل: فوق، تحت، أمام، خلف، بين.',
        definitionEn: 'An accusative noun clarifying where an action took place (answered by "Where?").'
      }
    ],

    keyConceptsAr: [
      'حروف الجر تجر الاسم الذي يليها مباشرة، وعلامة جره الأصلية الكسرة.',
      'الظرف دائماً منصوب بالفتحة (صباحاً، فوقَ).',
      'الاسم الواقع بعد ظرف المكان يعرب غالباً مضافاً إليه مجروراً: (فوقَ الشجرةِ $\\implies$ الشجرةِ: مضاف إليه مجرور بالكسرة).'
    ],
    keyConceptsEn: [
      'Prepositions govern following nouns into the genitive case with Kasra.',
      'Adverbs are typically accusative with Fatha.',
      'Nouns following adverbs of place are commonly parsed as genitive Mudaf Ilayhi.'
    ],

    summaryAr: 'استعرضنا في هذا الدرس نوعي شبه الجملة: الجار والمجرور وظرفي الزمان والمكان، وأحكام إعرابهما الدقيقة في سياق الجملة العربية.',
    summaryEn: 'We mastered semi-sentences: prepositional complements and temporal/spatial adverbs and their cases.',

    mainContentAr: `
### 1. النوع الأول: الجار والمجرور
- **حروف الجر:** (من، إلى، عن، على، في) حروف منفصلة؛ و(الباء، الكاف، اللام) حروف متصلة.
- **إعراب الاسم المجرور:** اسم يقع بعد حرف الجر ويكون **مجروراً بالكسرة** (إذا كان مفرداً أو جمع تكسير أو جمع مؤنث سالماً):
  - ذهبَ التلميذُ **إلى المدرسةِ** (إلى: حرف جر، المدرسةِ: اسم مجرور وعلامة جره الكسرة).

---

### 2. النوع الثاني: الظروف (زمان ومكان)
1. **ظرف الزمان:** نسأل عنه بـ **(متى؟)**:
   - الكلمات الدالة: (صباحاً، مساءً، فجراً، نهاراً، ليلاً، شتاءً، صيفاً، شهراً، عاماً).
   - إعرابه: ظرف زمان **منصوب بالفتحة**.
   - مثال: تشرقُ الشمسُ **صباحاً**.
2. **ظرف المكان:** نسأل عنه بـ **(أين؟)**:
   - الكلمات الدالة: (فوقَ، تحتَ، أمامَ، خلفَ، وراءَ، بينَ، يمينَ، شمالَ).
   - إعرابه: ظرف مكان **منصوب بالفتحة**.
   - مثال: يقفُ القائدُ **أمامَ** الجنودِ.
`,
    assessment: {
      id: 'assess-arb4-3',
      titleAr: 'تقييم المحاضرة 3: شبه الجملة والظروف',
      titleEn: 'Assessment 3: Semi-Sentences & Adverbs',
      passingScore: 80,
      questions: [
        {
          id: 'q-a4-3-1',
          textAr: 'ما نوع الظرف في جملة: «تسقطُ الأمطارُ شتاءً»؟',
          textEn: 'What type of adverb is "Shita\'an" in «تسقطُ الأمطارُ شتاءً»?',
          optionsAr: ['ظرف مكان', 'ظرف زمان', 'حرف جر', 'مفعول به'],
          optionsEn: ['Adverb of place', 'Adverb of time', 'Preposition', 'Direct object'],
          correctIndex: 1,
          conceptTestedAr: 'التمييز بين ظرف الزمان والمكان',
          conceptTestedEn: 'Distinguishing Adverb of Time from Place',
          difficulty: 'easy',
          explanationAr: '(شتاءً) تجيب عن سؤال: متى تسقط الأمطار؟ فهي تدل على وقت وزمن، إذن هي ظرف زمان.',
          explanationEn: '"Shita\'an" answers "When does it rain?", identifying it as an adverb of time.'
        },
        {
          id: 'q-a4-3-2',
          textAr: 'ما الإعراب الصحيح لكلمة "فوقَ" في جملة: «جلسَ العصفورُ فوقَ الغصنِ»؟',
          textEn: 'What is the parsing of "Fawqa" in: «جلسَ العصفورُ فوقَ الغصنِ»?',
          optionsAr: [
            'ظرف مكان منصوب وعلامة نصبه الفتحة',
            'اسم مجرور بالكسرة',
            'فاعل مرفوع بالضمة',
            'مبتدأ مؤخر'
          ],
          optionsEn: [
            'Adverb of place in accusative with Fatha',
            'Genitive noun with Kasra',
            'Subject with Damma',
            'Delayed subject'
          ],
          correctIndex: 0,
          conceptTestedAr: 'إعراب ظرف المكان بالفتحة',
          conceptTestedEn: 'Adverb of Place Accusative Parsing',
          difficulty: 'easy',
          explanationAr: '(فوقَ) توضح أين جلس العصفور، فهي ظرف مكان منصوب بالفتحة.',
          explanationEn: '"Fawqa" answers where the bird sat, making it an accusative adverb of place.'
        },
        {
          id: 'q-a4-3-3',
          textAr: 'أي من الكلمات التالية تعد حرف جر متصلاً بالاسم؟',
          textEn: 'Which letter serves as an attached preposition?',
          optionsAr: ['الواو', 'الباء في كلمة (بالقلمِ)', 'السين', 'الميم'],
          optionsEn: ['Waw', 'Baa in "Bil-Qalam"', 'Seen', 'Meem'],
          correctIndex: 1,
          conceptTestedAr: 'حروف الجر المتصلة',
          conceptTestedEn: 'Attached Prepositions',
          difficulty: 'easy',
          explanationAr: 'الباء والكاف واللام من حروف الجر المتصلة التي تجر الاسم بعدها: (بالقلمِ).',
          explanationEn: 'Baa, Kaaf, and Laam are attached prepositions that govern the following noun into genitive.'
        }
      ]
    }
  },

  // ── LECTURE 4: PUNCTUATION MARKS & WRITING SKILLS ──
  {
    id: 'parb-g4-4',
    order: 4,
    titleAr: 'المحاضرة 4: علامات الترقيم ومهارات التعبير الكتابي (كتابة نص وصفي وسردي)',
    titleEn: 'Lecture 4: Punctuation Marks & Descriptive/Narrative Writing Skills',
    subtitleAr: 'مواضع استخدام علامات الترقيم (النقطة، الفاصلة، النقطتان، علامتا الاستفهام والتعجب)، وخطوات كتابة نص وصفي شيق ورسالة شخصية.',
    subtitleEn: 'Punctuation mark usage (period, comma, colon, question, exclamation), and crafting descriptive paragraphs and personal letters.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الرابع الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 4 / Primary 6 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المحور الثاني: مهارات الكتابة والتعبير',
    unitTitleEn: 'Theme 2: Writing & Composition Skills',
    lessonNumberAr: 'الدرس 4: علامات الترقيم والتعبير الكتابي',
    lessonNumberEn: 'Lesson 4: Punctuation & Composition',

    warmupHookAr: 'تخيل إشارة مرور تنظم حركة السيارات وتمنع الحوادث! علامات الترقيم هي إشارات المرور في لغتنا العربية؛ ترشد القارئ أين يتوقف، وأين يتعجب، وأين يسأل، لتمنح النص جمالاً وإيقاعاً ومعنى واضحاً خالياً من اللبس!',
    warmupHookEn: 'Imagine traffic lights organizing street traffic! Punctuation marks are the traffic signs of Arabic text: directing the reader where to pause, express wonder, or inquire, ensuring clarity and rhythmic prose!',

    learningOutcomesAr: [
      'أن يحدد الطالب مواضع علامات الترقيم الأساسية: النقطة (.)، الفاصلة (،)، الفاصلة المنقوطة (؛)، النقطتان الرأسيتان (:)، علامة الاستفهام (؟)، وعلامة التعجب (!).',
      'أن يضع علامة الترقيم المناسبة في جمل وفقرات قرائية صحيحة.',
      'أن يطبق خطوات كتابة النص الوصفي (استخدام الحواس الخمس، والتشبيهات البسيطة، والشعور العام).',
      'أن يكتب رسالة شخصية لصديق تشتمل على عناصرها: التاريخ، التحية، المقدمة، العرض، الخاتمة، والتوقيع.'
    ],
    learningOutcomesEn: [
      'Identify punctuation positions: period, comma, semicolon, colon, question mark, and exclamation mark.',
      'Insert appropriate punctuation marks across sentences.',
      'Structure descriptive compositions engaging the five senses and similes.',
      'Draft a personal letter complete with standard conventions.'
    ],

    vocabulary: [
      {
        termAr: 'علامات الترقيم (Punctuation Marks)',
        termEn: 'Punctuation Marks',
        definitionAr: 'رموز اصطلاحية توضع بين الجمل أثناء الكتابة لتنظيم القراءة وتوضيح المعاني ومواضع الوقف.',
        definitionEn: 'Conventional typographical symbols placed between sentences to structure reading cadence and clarify meaning.'
      },
      {
        termAr: 'النقطتان الرأسيتان (Colon - :)',
        termEn: 'Colon (:)',
        definitionAr: 'علامة ترقيم توضع بعد القول ومترادفاته (مثل: قال المعلم:) أو قبل الشيء وأقسامه.',
        definitionEn: 'Punctuation used after speech tags (e.g., "He said:") or preceding list items.'
      }
    ],

    keyConceptsAr: [
      'توضع الفاصلة (،) بين الجمل المترابطة، والفاصلة المنقوطة (؛) قبل ذكر السبب.',
      'توضع النقطتان (:) بعد القول (قال الرسول ﷺ:)، والنقطة (.) في نهاية الفقرة التامة.',
      'عناصر الرسالة الشخصية: 1) التاريخ، 2) اسم المرسل إليه، 3) التحية، 4) نص الرسالة، 5) الخاتمة، 6) اسم المرسل وتوقيعه.'
    ],
    keyConceptsEn: [
      'Comma connects related clauses; semicolon precedes causal explanations.',
      'Colon follows speech attributions; period closes completed paragraphs.',
      'Personal letter structure: Date, Recipient, Greeting, Body, Closing, Signature.'
    ],

    summaryAr: 'أتقنا في هذا الدرس قواعد استخدام علامات الترقيم في اللغة العربية، وتطبيقات كتابة النصوص الوصفية والرسائل الشخصية بأسلوب إبداعي منظم.',
    summaryEn: 'We learned Arabic punctuation conventions and structured descriptive writing and personal correspondence.',

    mainContentAr: `
### 1. مواضع علامات الترقيم الأساسية
1. **الفاصلة (،):** بين الجمل القصيرة المتعاطفة (أكلتُ التفاحةَ، وشربتُ العصيرَ).
2. **الفاصلة المنقوطة (؛):** بين جملتين إحداهما سبب للأخرى (أذاكرُ بجدٍّ؛ لأحققَ المركزَ الأولَ).
3. **النقطتان الرأسيتان (:):** بعد القول وأقسام الشيء (قال الحكيمُ: الوقتُ كالسيف).
4. **علامة الاستفهام (؟):** في نهاية السؤال (أين تقع الأهراماتُ؟).
5. **علامة التعجب (!):** بعد أسلوب التعجب أو الدهشة (ما أجملَ حديقةَ الأزهارِ!).
6. **النقطة (.):** في نهاية المعنى التام ونهاية الفقرات.

---

### 2. عناصر كتابة الرسالة الشخصية
- **الجهة العليا اليمنى:** التاريخ (مثال: 15 أكتوبر 2026).
- **اسم الصديق والتحية:** (صديقي العزيز عمر، تحية طيبة وبعد).
- **المقدمة:** الاطمئنان على أحوال الصديق.
- **الموضوع الرئيسي:** سرد الخبر أو الدعوة لزيارة المعالم أو الشكر.
- **الخاتمة:** أطيب الأمنيات والدعاء باللقاء القريب.
- **التوقيع:** (صديقك المخلص / زياد).
`,
    assessment: {
      id: 'assess-arb4-4',
      titleAr: 'تقييم المحاضرة 4: علامات الترقيم والتعبير الكتابي',
      titleEn: 'Assessment 4: Punctuation & Composition',
      passingScore: 80,
      questions: [
        {
          id: 'q-a4-4-1',
          textAr: 'ما علامة الترقيم الصحيحة التي يجب وضعها بعد القول في: «قال الأب (...) الصدقُ منجاةٌ»؟',
          textEn: 'Which punctuation mark belongs after "said" in «قال الأب (...) الصدقُ منجاةٌ»?',
          optionsAr: ['علامة استفهام (؟)', 'النقطتان الرأسيتان (:)', 'نقطة (.)', 'فاصلة منقوطة (؛)'],
          optionsEn: ['Question mark (?)', 'Colon (:)', 'Period (.)', 'Semicolon (;)'],
          correctIndex: 1,
          conceptTestedAr: 'استخدام النقطتين الرأسيتين بعد القول',
          conceptTestedEn: 'Using Colon after Speech Tag',
          difficulty: 'easy',
          explanationAr: 'توضع النقطتان الرأسيتان (:) دائماً بعد القول ومترادفاته.',
          explanationEn: 'A colon (:) is placed following speech verbs like "said".'
        },
        {
          id: 'q-a4-4-2',
          textAr: 'ما علامة الترقيم التي توضع في نهاية جملة: «ما أعظمَ نهرَ النيلِ (...)»؟',
          textEn: 'Which punctuation mark concludes «ما أعظمَ نهرَ النيلِ (...)»?',
          optionsAr: ['علامة تعجب (!)', 'علامة استفهام (؟)', 'فاصلة (،)', 'نقطتان (:)'],
          optionsEn: ['Exclamation mark (!)', 'Question mark (?)', 'Comma (،)', 'Colon (:)'],
          correctIndex: 0,
          conceptTestedAr: 'علامة التعجب لأسلوب التعجب',
          conceptTestedEn: 'Exclamation Mark for Wonder',
          difficulty: 'easy',
          explanationAr: 'هذا أسلوب تعجب يبدأ بـ (ما أفعل!)، وعلامته الصحيحة هي علامة التعجب (!).',
          explanationEn: 'This is an exclamation structure, appropriately punctuated with an exclamation mark (!).'
        },
        {
          id: 'q-a4-4-3',
          textAr: 'لماذا نستخدم الفاصلة المنقوطة (؛) في الكتابة العربية؟',
          textEn: 'Why do we use the semicolon (;) in Arabic writing?',
          optionsAr: [
            'لإنهاء الفقرة تماماً',
            'بين جملتين تكون إحداهما سبباً في حدوث الأخرى',
            'بعد أسلوب القسم فقط',
            'في بداية كل فقرة'
          ],
          optionsEn: [
            'To end a paragraph completely',
            'Between two clauses where one explains the cause of the other',
            'After oaths only',
            'At the start of every paragraph'
          ],
          correctIndex: 1,
          conceptTestedAr: 'مواضع الفاصلة المنقوطة للتعليل',
          conceptTestedEn: 'Semicolon for Causal Linkage',
          difficulty: 'medium',
          explanationAr: 'الفاصلة المنقوطة تربط بين جملتين إحداهما سبب أو تعليل للأخرى.',
          explanationEn: 'A semicolon indicates that the following clause provides the cause or rationale.'
        }
      ]
    }
  }
];
