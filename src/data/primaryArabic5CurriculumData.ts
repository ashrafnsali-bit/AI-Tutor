import type { Lecture } from '../types';

// PRIMARY ARABIC — GRADE 5 (اللغة العربية الصف الخامس الابتدائي - منهج التعليم 2.0 والمسارات المعتمدة)
// ============================================================================
// Based on official Egyptian Ministry of Education Edu 2.0 & Saudi Ministry of Education G5 standards.
// Covers:
// 1. The Direct Object (المفعول به) & Its Accusative Markers (الفتحة، الياء، الكسرة)
// 2. Word Order of Subject & Object and Case Marking in Verbal Sentences (تقديم الفاعل والمفعول به)
// 3. The Annexed Genitive Noun (المضاف إليه) & Genitive Markers
// 4. Medial & Terminal Hamzah Orthography & Expressive Writing (رسم الهمزات والتعبير الكتابي)

export const PRIMARY_ARABIC_G5_LECTURES: Lecture[] = [
  // ── LECTURE 1: THE DIRECT OBJECT & ACCUSATIVE MARKERS ──
  {
    id: 'parb-g5-1',
    order: 1,
    titleAr: 'المحاضرة 1: المفعول به وعلامات إعرابه (الفتحة، الياء، والكسرة)',
    titleEn: 'Lecture 1: The Direct Object (المفعول به) and Accusative Markers',
    subtitleAr: 'تعريف المفعول به كركن مكمل للجملة الفعلية، وعلامات نصبه: الفتحة للمفرد وجمع التكسير، الياء للمثنى وجمع المذكر السالم، والكسرة لجمع المؤنث السالم.',
    subtitleEn: 'Study the direct object (Maf\'ul bihi) and its inflectional markers: Fatha, Yaa, and Kasra.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: قواعد الجملة الفعلية',
    unitTitleEn: 'Theme 1: Verbal Sentence Syntax',
    lessonNumberAr: 'الدرس 1: المفعول به وعلامات نصبه',
    lessonNumberEn: 'Lesson 1: The Direct Object',

    warmupHookAr: 'عندما نقول: «قرأ التلميذُ...»، يتلهف السامع لمعرفة: ماذا قرأ؟ هل قرأ قصةً؟ أم كتاباً؟ أم قصيدتين؟ الكلمة التي تجيب عن سؤال "ماذا حدث له الفعل؟" هي ضيفنا الأهم في الجملة الفعلية: المفعول به المنصوب دائماً!',
    warmupHookEn: 'When hearing "The pupil read...", our minds instantly query: WHAT did he read? A story? A book? Two poems? The noun answering "What received the verb\'s action?" is the Direct Object (Maf\'ul bihi)!',

    learningOutcomesAr: [
      'أن يعرف الطالب المفعول به كاسم منصوب يدل على من وقع عليه فعل الفاعل.',
      'أن يحدد علامة نصب المفعول به بالفتحة الظاهرة إذا كان مفرداً أو جمع تكسير.',
      'أن يحدد علامة نصبه بالياء إذا كان مثنى أو جمع مذكر سالماً.',
      'أن يتقن علامة النصب الخاصة بجمع المؤنث السالم (الكسرة نيابة عن الفتحة).',
      'أن يعرب المفعول به إعراباً تاماً في جمل ونصوص قرائية متنوعة.'
    ],
    learningOutcomesEn: [
      'Define the direct object as an accusative noun upon which the action fell.',
      'Identify Fatha as accusative marker for singular nouns and broken plurals.',
      'Identify Yaa as accusative marker for dual and sound masculine plural nouns.',
      'Apply Kasra as accusative marker for sound feminine plurals.',
      'Parse the direct object accurately in varying sentence contexts.'
    ],

    vocabulary: [
      {
        termAr: 'المفعول به (Direct Object - Maf\'ul Bihi)',
        termEn: 'Direct Object',
        definitionAr: 'اسم منصوب يدل على ما أو من وقع عليه فعل الفاعل في الجملة الفعلية.',
        definitionEn: 'An accusative noun indicating what or who received the action of the subject.'
      },
      {
        termAr: 'الكسرة نيابة عن الفتحة (Kasra for Fatha)',
        termEn: 'Kasra Substituting Fatha',
        definitionAr: 'علامة نصب فرعية خاصة بجمع المؤنث السالم المنتهي بألف وتاء (مثل: شكرتُ المعلماتِ).',
        definitionEn: 'A secondary accusative marker exclusive to sound feminine plurals ending in Alif and Taa.'
      }
    ],

    keyConceptsAr: [
      'المفعول به دائماً في محل نصب (لا يرفع ولا يجر أبداً).',
      'علامات نصب المفعول به ثلاثة: 1) الفتحة (للمفرد وجمع التكسير)، 2) الياء (للمثنى وجمع المذكر السالم)، 3) الكسرة (لجمع المؤنث السالم).',
      'لكشف المفعول به بسهولة: ضع سؤالاً يبدأ بـ (ماذا + الفعل؟)؛ فإجابته هي المفعول به.'
    ],
    keyConceptsEn: [
      'The direct object is strictly in the accusative case (never nominative or genitive).',
      'Three accusative markers: Fatha (singular/broken plural), Yaa (dual/masculine plural), Kasra (feminine plural).',
      'To identify the direct object easily: ask "What + verb?"; the answer is the Maf\'ul bihi.'
    ],

    summaryAr: 'تعلمنا في هذا الدرس مفهوم المفعول به في الجملة الفعلية، وأتقنا علامات نصبه المتعددة (الفتحة، الياء، الكسرة) عبر نماذج إعرابية تطبيقية.',
    summaryEn: 'We learned the grammatical role of the direct object and mastered all its accusative markers across different noun numbers.',

    mainContentAr: `
### 1. ما هو المفعول به؟
- هو اسم يدل على من وقع عليه فعل الفاعل.
- نسأل عنه بأداة الاستفهام **(ماذا؟)**:
  - «رسم الفنانُ **لوحةً**» $\\implies$ ماذا رسم الفنان؟ $\\implies$ لوحةً (مفعول به).

---

### 2. علامات إعراب المفعول به (دائماً منصوب)
1. **الفتحة (علامة أصلية):**
   - **المفرد:** كتب الطالبُ **الدرسَ** (الدرس: مفعول به منصوب وعلامة نصبه الفتحة).
   - **جمع التكسير:** كرّمت الدولةُ **العلماءَ** (العلماء: مفعول به منصوب بالفتحة).
2. **الياء (علامة فرعية):**
   - **المثنى:** قرأ أحمد **قصتين** (قصتين: مفعول به منصوب وعلامة نصبه الياء لأنه مثنى).
   - **جمع المذكر السالم:** شجّع الجمهورُ **اللاعبين** (اللاعبين: مفعول به منصوب بالياء لأنه جمع مذكر سالم).
3. **الكسرة (علامة فرعية هامة جداً):**
   - **جمع المؤنث السالم:** كافأت المعلمةُ **المتفوقاتِ** (المتفوقاتِ: مفعول به منصوب وعلامة نصبه الكسرة نيابة عن الفتحة لأنه جمع مؤنث سالم).
`,
    assessment: {
      id: 'assess-arb5-1',
      titleAr: 'تقييم المحاضرة 1: المفعول به وعلامات نصبه',
      titleEn: 'Assessment 1: Direct Object & Case Markers',
      passingScore: 80,
      questions: [
        {
          id: 'q-a5-1-1',
          textAr: 'ما علامة نصب المفعول به في جملة: «شاهدتُ الطائرتين في السماء»؟',
          textEn: 'What is the accusative marker for the object in «شاهدتُ الطائرتين في السماء»?',
          optionsAr: ['الفتحة', 'الألف', 'الياء لأنه مثنى', 'الكسرة'],
          optionsEn: ['Fatha', 'Alif', 'Yaa (dual)', 'Kasra'],
          correctIndex: 2,
          conceptTestedAr: 'علامة نصب المثنى',
          conceptTestedEn: 'Dual Accusative Marker',
          difficulty: 'easy',
          explanationAr: 'الطائرتين مفعول به منصوب بالياء لأنه مثنى.',
          explanationEn: 'Al-Ta\'iratayn is accusative with Yaa because it is a dual noun.'
        },
        {
          id: 'q-a5-1-2',
          textAr: 'ما الضبط الصحيح لآخر كلمة "الطالبات" في جملة: «كرّمت المديرةُ الطالبات...»؟',
          textEn: 'What is the correct vocalization of "Al-Talibat" in: «كرّمت المديرةُ الطالبات...»?',
          optionsAr: ['الطالباتُ (بالضمة)', 'الطالباتَ (بالفتحة)', 'الطالباتِ (بالكسرة)', 'الطالباتْ (بالسكون)'],
          optionsEn: ['Al-Talibatu (Damma)', 'Al-Talibata (Fatha)', 'Al-Talibati (Kasra)', 'Al-Talibat (Sukun)'],
          correctIndex: 2,
          conceptTestedAr: 'نصب جمع المؤنث السالم بالكسرة',
          conceptTestedEn: 'Sound Feminine Plural Accusative with Kasra',
          difficulty: 'medium',
          explanationAr: 'جمع المؤنث السالم ينصب دائماً بالكسرة نيابة عن الفتحة، فيقال: «الطالباتِ».',
          explanationEn: 'Sound feminine plurals take Kasra in the accusative case: "Al-Talibati".'
        },
        {
          id: 'q-a5-1-3',
          textAr: 'أين المفعول به في جملة: «يشرحُ المعلمُ الدرسَ بمهارةٍ»؟',
          textEn: 'Where is the direct object in «يشرحُ المعلمُ الدرسَ بمهارةٍ»?',
          optionsAr: ['يشرحُ', 'المعلمُ', 'الدرسَ', 'بمهارةٍ'],
          optionsEn: ['Yashrahu', 'Al-Mu\'allimu', 'Al-Darsa', 'Bi-Maharatin'],
          correctIndex: 2,
          conceptTestedAr: 'تحديد المفعول به في الجملة',
          conceptTestedEn: 'Identifying Direct Object',
          difficulty: 'easy',
          explanationAr: 'ماذا يشرح المعلم؟ يشرح (الدرسَ)، فالدرس هو المفعول به المنصوب بالفتحة.',
          explanationEn: 'What is the teacher explaining? "The lesson" (Al-Darsa) is the direct object.'
        }
      ]
    }
  },

  // ── LECTURE 2: WORD ORDER IN VERBAL SENTENCES ──
  {
    id: 'parb-g5-2',
    order: 2,
    titleAr: 'المحاضرة 2: تقديم الفاعل والمفعول به وضبط أواخر الكلمات في الجملة الفعلية',
    titleEn: 'Lecture 2: Subject & Object Word Order and Final Diacritic Marking',
    subtitleAr: 'ترتيب أركان الجملة الفعلية، إمكانية تقدم المفعول به على الفاعل بحسب المعنى والإعراب، وتمييز الفاعل المرفوع من المفعول المنصوب.',
    subtitleEn: 'Sentence word order variations, fronting the direct object, and identifying subject vs object through syntax.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: قواعد الجملة الفعلية',
    unitTitleEn: 'Theme 1: Verbal Sentence Syntax',
    lessonNumberAr: 'الدرس 2: تقديم المفعول به على الفاعل',
    lessonNumberEn: 'Lesson 2: Verb-Object-Subject Order',

    warmupHookAr: 'تأمل هذه الجملة الرائعة: «عالجَ المريضَ الطبيبُ». هل المريض هو من عالج الطبيب؟ مستحيل! رغم أن المريض جاء أولاً بعد الفعل، إلا أنه منصوب بالفتحة (مفعول به)، والطبيب مرفوع بالضمة (فاعل مؤخر)! لغتنا العربية لغة ذكية تميز المعنى بالإعراب وليس بمجرد الترتيب!',
    warmupHookEn: 'Examine: "Treated the patient the doctor". Did the patient treat the doctor? Never! Even though patient appears first, its accusative Fatha marks it as object, while the doctor\'s Damma marks him as subject! Arabic logic is guided by inflection, not rigid positions.',

    learningOutcomesAr: [
      'أن يوضح الطالب الترتيب الأصلي للجملة الفعلية: (فعل + فاعل + مفعول به).',
      'أن يكتشف إمكانية تقدم المفعول به على الفاعل في المعنى والسياق (فعل + مفعول به + فاعل).',
      'أن يستدل على الفاعل والمفعول به من خلال علامات الإعراب (الرفع للفاعل والنصب للمفعول به) والمعنى المنطقي.',
      'أن يضبط أواخر الكلمات في الجمل المتقدم فيها المفعول به بالحركات الصحيحة.'
    ],
    learningOutcomesEn: [
      'Identify default verbal sentence order: Verb + Subject + Object.',
      'Recognize acceptable inversion: Verb + Object + Subject.',
      'Deduce subject vs object from case endings (nominative for subject, accusative for object) and semantic context.',
      'Vocalize end-case diacritics accurately.'
    ],

    vocabulary: [
      {
        termAr: 'الفاعل المؤخر (Delayed Subject)',
        termEn: 'Delayed Subject',
        definitionAr: 'فاعل تأخر ترتيبه في الجملة وجاء بعد المفعول به، ويبقى دائماً مرفوعاً.',
        definitionEn: 'A subject placed after the direct object, retaining its strict nominative case.'
      },
      {
        termAr: 'المفعول به المقدم (Fronted Object)',
        termEn: 'Fronted Direct Object',
        definitionAr: 'مفعول به تقدم في الترتيب وجاء مباشرة بعد الفعل وقبل الفاعل، ويبقى منصوباً.',
        definitionEn: 'A direct object appearing ahead of the subject, retaining its accusative case.'
      }
    ],

    keyConceptsAr: [
      'في اللغة العربية: الفاعل هو من قام بالفعل (مرفوع دائماً)، والمفعول هو من وقع عليه الفعل (منصوب دائماً).',
      'المعنى وعلامة الإعراب هما الحكم والفيصل، وليس ترتيب الكلمات في الجملة.',
      'مثال: «حصدَ القمحَ الفلاحُ» $\\implies$ القمحَ: مفعول به مقدم منصوب بالفتحة، الفلاحُ: فاعل مؤخر مرفوع بالضمة.'
    ],
    keyConceptsEn: [
      'The subject executes the action (always nominative); the object receives it (always accusative).',
      'Meaning and grammatical case determine roles, rather than rigid linear order.',
      'Example: "Harvested the wheat the farmer" -> wheat is fronted object; farmer is delayed subject.'
    ],

    summaryAr: 'شرحنا في هذا الدرس مرونة الجملة الفعلية في اللغة العربية، وكيف يتقدم المفعول به على الفاعل مع بقاء علامات الإعراب دليلاً قاطعاً على المعنى الصحيح.',
    summaryEn: 'We learned Arabic verbal sentence flexibility, where objects can precede subjects without compromising grammatical clarity.',

    mainContentAr: `
### 1. الترتيب الطبيعي للجملة الفعلية
- الأصل: **فعل + فاعل + مفعول به**.
  - زرعَ (فعل) الفلاحُ (فاعل مرفوع) الشجرةَ (مفعول به منصوب).

---

### 2. تقدم المفعول به على الفاعل
- يجوز في لغتنا أن يتقدم المفعول به على الفاعل لأغراض بلاغية ولفت الانتباه:
  - **فعل + مفعول به مقدم + فاعل مؤخر**:
  - «نالَ **الجائزةَ** **المتفوقُ**»:
    - **الجائزةَ:** مفعول به مقدم منصوب وعلامة نصبه الفتحة.
    - **المتفوقُ:** فاعل مؤخر مرفوع وعلامة رفعه الضمة.

---

### 3. كيف تميز بين الفاعل والمفعول عند تقديم أحدهما؟
1. **بالمنطق والعقل:** من الذي يفعل الآخر؟ في جملة (قرأ القصةَ الولدُ)، بالضرورة الولد هو القارئ والقصة هي المقروءة.
2. **بالحركات الإعرابية:**
   - الضمة / الواو / الألف $\\implies$ **فاعل مرفوع**.
   - الفتحة / الياء / الكسرة $\\implies$ **مفعول به منصوب**.
`,
    assessment: {
      id: 'assess-arb5-2',
      titleAr: 'تقييم المحاضرة 2: تقديم المفعول به وضبط الكلمات',
      titleEn: 'Assessment 2: Object Inversion & Vocalization',
      passingScore: 80,
      questions: [
        {
          id: 'q-a5-2-1',
          textAr: 'في جملة: «أكلَ التفاحةَ الطفلُ»، ما إعراب كلمة "التفاحةَ"؟',
          textEn: 'In «أكلَ التفاحةَ الطفلُ», what is the parsing of "Al-Tuffahata"?',
          optionsAr: [
            'فاعل مرفوع بالضمة',
            'مفعول به مقدم منصوب وعلامة نصبه الفتحة',
            'مبتدأ مؤخر مرفوع بالضمة',
            'مضاف إليه مجرور بالكسرة'
          ],
          optionsEn: [
            'Nominative subject with Damma',
            'Fronted direct object in accusative with Fatha',
            'Delayed subject with Damma',
            'Genitive annexed noun with Kasra'
          ],
          correctIndex: 1,
          conceptTestedAr: 'إعراب المفعول به المقدم',
          conceptTestedEn: 'Fronted Direct Object Parsing',
          difficulty: 'medium',
          explanationAr: 'التفاحة هي المأكولة وعليها فتحة، فهي مفعول به مقدم، والطفل هو الآكل وهو الفاعل المؤخر.',
          explanationEn: 'The apple is what was eaten with an accusative Fatha, making it fronted direct object.'
        },
        {
          id: 'q-a5-2-2',
          textAr: 'ما الضبط الإعرابي الصحيح للكلمتين في جملة: «بنى (السد / المهندسون)»؟',
          textEn: 'What is the correct vocalization for «بنى (السد / المهندسون)»?',
          optionsAr: [
            'بنى السدُّ المهندسينَ',
            'بنى السدَّ المهندسونَ',
            'بنى السدِّ المهندسونَ',
            'بنى السدَّ المهندسينَ'
          ],
          optionsEn: [
            'Bana Al-Saddu Al-Muhandiseena',
            'Bana Al-Sadda Al-Muhandisoona',
            'Bana Al-Saddi Al-Muhandisoona',
            'Bana Al-Sadda Al-Muhandiseena'
          ],
          correctIndex: 1,
          conceptTestedAr: 'ضبط المفعول به بالفتحة والفاعل بالواو',
          conceptTestedEn: 'Marking Object with Fatha & Subject with Waw',
          difficulty: 'medium',
          explanationAr: 'السد مفعول به مقدم منصوب بالفتحة (السدَّ)، والمهندسون فاعل مؤخر مرفوع بالواو (المهندسونَ).',
          explanationEn: 'Al-Sadda is fronted object (Fatha); Al-Muhandisoona is delayed subject (Waw).'
        },
        {
          id: 'q-a5-2-3',
          textAr: 'من هو الفاعل في جملة: «يشجعُ المعلمَ الطلابُ الأوفياءُ»؟',
          textEn: 'Who is the subject in: «يشجعُ المعلمَ الطلابُ الأوفياءُ»?',
          optionsAr: ['المعلمَ', 'الطلابُ', 'الأوفياءُ', 'ضمير مستتر'],
          optionsEn: ['Al-Mu\'allima', 'Al-Tullabu', 'Al-Awfiya\'u', 'Implicit pronoun'],
          correctIndex: 1,
          conceptTestedAr: 'تحديد الفاعل المؤخر من حركة الضمة',
          conceptTestedEn: 'Identifying Delayed Subject via Damma',
          difficulty: 'easy',
          explanationAr: 'الطلاب هم المشجعون وعليهم ضمة، إذن (الطلابُ) فاعل مؤخر مرفوع بالضمة.',
          explanationEn: 'The students are the cheering doers carrying Damma, making them the delayed subject.'
        }
      ]
    }
  },

  // ── LECTURE 3: THE ANNEXED GENITIVE NOUN (MUDAF ILAYHI) ──
  {
    id: 'parb-g5-3',
    order: 3,
    titleAr: 'المحاضرة 3: المضاف إليه وحالات جره بالكسرة والياء',
    titleEn: 'Lecture 3: The Annexed Genitive Noun (المضاف إليه) & Genitive Markers',
    subtitleAr: 'مفهوم التركيب الإضافي (المضاف والمضاف إليه)، التمييز بين النكرة والمعرفة، وحذف التنوين ونون المثنى وجمع المذكر عند الإضافة.',
    subtitleEn: 'Understand genitive annexation (Idafa), definite vs indefinite, omission of nunation/Nuns, and genitive markers.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المحور الثاني: التراكيب اللغوية والإضافية',
    unitTitleEn: 'Theme 2: Linguistic Structures & Genitive Annexation',
    lessonNumberAr: 'الدرس 3: المضاف إليه وعلامات جره',
    lessonNumberEn: 'Lesson 3: The Annexed Genitive Noun',

    warmupHookAr: 'إذا قلت لك: "وجدتُ قلمَ..." وسكتّ، ستتساءل: قلم من؟ قلم المعلم؟ قلم أحمد؟ قلم الرصاص؟ كلمة "قلم" نكرة وغامضة، ولكن عندما نضيف إليها كلمة أخرى: "قلمُ المعلمِ"، أزيل الغموض وأصبح القلم محدداً ومعروفاً تماماً! هذا التركيب يسمى "الإضافة"، والاسم الثاني يسمى "المضاف إليه" المجرور دائماً!',
    warmupHookEn: 'If I say "I found a pen of...", you wonder: whose pen? The teacher\'s? Ahmad\'s? The word "pen" is indefinite, but annexing "the teacher" makes it crystal clear: "The teacher\'s pen"! This is the Idafa structure.',

    learningOutcomesAr: [
      'أن يعرف الطالب المضاف إليه كاسم مجرور يوضح الاسم النكرة الذي قبله ويخصصه.',
      'أن يميز بين المضاف (يعرب حسب موقعه في الجملة) والمضاف إليه (مجرور دائماً).',
      'أن يطبق قاعدة حذف التنوين ونون المثنى ونون جمع المذكر السالم من المضاف عند الإضافة.',
      'أن يحدد علامة جر المضاف إليه: الكسرة (للمفرد، جمع التكسير، جمع المؤنث السالم)، والياء (للمثنى وجمع المذكر السالم والأسماء الخمسة).'
    ],
    learningOutcomesEn: [
      'Define Mudaf Ilayhi as a genitive noun clarifying the preceding indefinite noun.',
      'Distinguish Mudaf (inflected contextually) from Mudaf Ilayhi (consistently genitive).',
      'Apply omission of nunation and dual/plural "Noon" in the first annexed noun.',
      'Determine genitive case markers: Kasra and Yaa.'
    ],

    vocabulary: [
      {
        termAr: 'المضاف (The Annexed Noun - Mudaf)',
        termEn: 'Mudaf (Annexed Head Noun)',
        definitionAr: 'الاسم الأول النكرة في التركيب الإضافي، ويعرب حسب موقعه في الجملة، ولا يقبل التنوين ولا النون.',
        definitionEn: 'The first noun in an Idafa construction, parsed according to sentence role, shedding nunation and Noon.'
      },
      {
        termAr: 'المضاف إليه (The Possessor / Genitive - Mudaf Ilayhi)',
        termEn: 'Mudaf Ilayhi (Genitive Annexed Noun)',
        definitionAr: 'الاسم الثاني المعرف الذي يضاف إليه الاسم الأول ليزيل إبهامه ويحدده، ويكون دائماً مجروراً.',
        definitionEn: 'The second noun defining the first, consistently taking genitive markers (Kasra or Yaa).'
      }
    ],

    keyConceptsAr: [
      'التركيب الإضافي يتكون من: نكرة (المضاف) + معرفة (المضاف إليه).',
      'المضاف إليه مجرور دائماً: بالكسرة (مفرد/جمع تكسير/جمع مؤنث)، أو بالياء (مثنى/جمع مذكر سالم).',
      'قاعدة ذهبية: عند الإضافة يحذف التنوين (كتابٌ + النحو = كتابُ النحوِ)، وتحذف نون المثنى والجمع (معلمون + المدرسة = معلمو المدرسةِ).'
    ],
    keyConceptsEn: [
      'Idafa structure: Indefinite Noun (Mudaf) + Defining Noun (Mudaf Ilayhi).',
      'Mudaf Ilayhi is always genitive: Kasra or Yaa.',
      'Golden Rule: Nunation and dual/plural Noon are dropped from the first word upon annexation.'
    ],

    summaryAr: 'أتقنا في هذا الدرس أركان التركيب الإضافي، وضوابط حذف التنوين والنون، وعلامات جر المضاف إليه بالكسرة والياء في نماذج تطبيقية.',
    summaryEn: 'We mastered the mechanics of Idafa, nunation/noon drop rules, and genitive parsing with Kasra and Yaa.',

    mainContentAr: `
### 1. مفهوم المضاف والمضاف إليه
- **المضاف:** اسم نكرة يأتي أولاً ليعبر عن الشيء المملوك، ويعرب بحسب موقعه (مبتدأ، فاعل، مفعول، اسم مجرور).
- **المضاف إليه:** اسم معرفة يأتي بعد المضاف ليحدده ويزيل غموضه، وهو **مجرور دائماً**.
- **أمثلة:**
  - «سورُ **المدرسةِ** مرتفعٌ» $\\implies$ سورُ: مبتدأ مرفوع (وهو مضاف)، المدرسةِ: مضاف إليه مجرور بالكسرة.
  - «أغلقتُ بابَ **الفصلِ**» $\\implies$ بابَ: مفعول به منصوب، الفصلِ: مضاف إليه مجرور بالكسرة.

---

### 2. علامات جر المضاف إليه
1. **الكسرة (علامة أصلية):**
   - المفرد: حديقةُ **المنزلِ** جميلة.
   - جمع التكسير: صوتُ **العصافيرِ** عذب.
   - جمع المؤنث السالم: تكريمُ **المعلماتِ** واجب.
2. **الياء (علامة فرعية):**
   - المثنى: مهارةُ **اللاعبَينِ** رائعة (اللاعبين: مضاف إليه مجرور بالياء لأنه مثنى).
   - جمع المذكر السالم: فضلُ **المعلمينَ** عظيم (المعلمين: مضاف إليه مجرور بالياء لأنه جمع مذكر سالم).

---

### 3. ما يحذف عند الإضافة
- **التنوين:** لا يجتمع التنوين مع الإضافة: (كتابٌ $\\implies$ كتابُ التلميذِ).
- **نون المثنى وجمع المذكر السالم:** تحذف وجوباً:
  - (طالبانِ العلم $\\implies$ **طالبا** العلمِ).
  - (مهندسونَ المشروع $\\implies$ **مهندسو** المشروعِ).
`,
    assessment: {
      id: 'assess-arb5-3',
      titleAr: 'تقييم المحاضرة 3: المضاف إليه وحالات جره',
      titleEn: 'Assessment 3: Mudaf Ilayhi & Genitive Case',
      passingScore: 80,
      questions: [
        {
          id: 'q-a5-3-1',
          textAr: 'ما الإعراب الصحيح لكلمة "المدرسة" في جملة: «فناءُ المدرسةِ واسعٌ»؟',
          textEn: 'What is the correct parsing of "Al-Madrasati" in «فناءُ المدرسةِ واسعٌ»?',
          optionsAr: [
            'خبر مرفوع بالضمة',
            'مضاف إليه مجرور وعلامة جره الكسرة',
            'نعت مرفوع بالضمة',
            'مفعول به منصوب بالفتحة'
          ],
          optionsEn: [
            'Nominative predicate with Damma',
            'Genitive annexed noun (Mudaf Ilayhi) with Kasra',
            'Nominative adjective with Damma',
            'Accusative direct object with Fatha'
          ],
          correctIndex: 1,
          conceptTestedAr: 'إعراب المضاف إليه بالكسرة',
          conceptTestedEn: 'Parsing Mudaf Ilayhi with Kasra',
          difficulty: 'easy',
          explanationAr: 'كلمة المدرسة اسم معرفة جاء بعد اسم نكرة (فناء) ليزيل إبهامه، فهو مضاف إليه مجرور بالكسرة.',
          explanationEn: 'Al-Madrasati defines the indefinite Fina\'u, making it Mudaf Ilayhi with Kasra.'
        },
        {
          id: 'q-a5-3-2',
          textAr: 'ما التعبير الصحيح عند إضافة كلمة "معلمون" إلى "المدرسة"؟',
          textEn: 'What is the correct annexation of "Mu\'allimoona" to "Al-Madrasati"?',
          optionsAr: ['معلمون المدرسةِ', 'معلمو المدرسةِ', 'معلمين المدرسةِ', 'معلمات المدرسةِ'],
          optionsEn: ['Mu\'allimoona Al-Madrasati', 'Mu\'allimu Al-Madrasati', 'Mu\'allimeena Al-Madrasati', 'Mu\'allimatu Al-Madrasati'],
          correctIndex: 1,
          conceptTestedAr: 'حذف نون جمع المذكر السالم عند الإضافة',
          conceptTestedEn: 'Dropping Noon from Sound Masculine Plural in Idafa',
          difficulty: 'medium',
          explanationAr: 'تحذف نون جمع المذكر السالم ونون المثنى وجوباً عند الإضافة: فتصبح (معلمو المدرسةِ).',
          explanationEn: 'Plural Noon must be omitted in Idafa: "Mu\'allimu Al-Madrasati".'
        },
        {
          id: 'q-a5-3-3',
          textAr: 'ما علامة جر المضاف إليه في جملة: «أعجبتني مهارةُ اللاعبَينِ»؟',
          textEn: 'What is the genitive marker for the object in «أعجبتني مهارةُ اللاعبَينِ»?',
          optionsAr: ['الكسرة', 'الياء لأنه مثنى', 'الألف', 'الفتحة'],
          optionsEn: ['Kasra', 'Yaa because it is dual', 'Alif', 'Fatha'],
          correctIndex: 1,
          conceptTestedAr: 'جر المضاف إليه المثنى بالياء',
          conceptTestedEn: 'Dual Genitive Marker with Yaa',
          difficulty: 'easy',
          explanationAr: 'المضاف إليه مثنى (اللاعبين)، وعلامة جره الياء.',
          explanationEn: 'Al-La\'ibayn is dual, inflected with genitive Yaa.'
        }
      ]
    }
  },

  // ── LECTURE 4: HAMZAH ORTHOGRAPHY & WRITING SKILLS ──
  {
    id: 'parb-g5-4',
    order: 4,
    titleAr: 'المحاضرة 4: قواعد رسم الهمزات (المتوسطة والمتطرفة) وفنون التعبير الكتابي',
    titleEn: 'Lecture 4: Hamzah Orthography (Medial & Terminal) & Functional Writing',
    subtitleAr: 'قاعدة أقوى الحركات في كتابة الهمزة المتوسطة، وقواعد رسم الهمزة المتطرفة على السطر والأحرف، وفن كتابة السيرة الغيرية واستقصاء الرأي.',
    subtitleEn: 'The hierarchy of vowels for medial Hamzah, terminal Hamzah rules, and writing biographies and surveys.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الخامس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 5 / Primary 5 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المحور الثاني: مهارات الإملاء والتعبير الكتابي',
    unitTitleEn: 'Theme 2: Orthography & Composition Skills',
    lessonNumberAr: 'الدرس 4: رسم الهمزة وفنون الكتابة',
    lessonNumberEn: 'Lesson 4: Hamzah Rules & Composition',

    warmupHookAr: 'لماذا نكتب (يَسْأَل) بهمزة على ألف، بينما نكتب (سُؤَال) بهمزة على واو، ونكتب (سَئِمَ) بهمزة على نبرة (ياء)؟ هل هي مسألة عشوائية؟ أبداً! إنها تخضع لقانون صراع الحركات في اللغة العربية: أقوى حركة تفوز وتفرض حرفها على الهمزة!',
    warmupHookEn: 'Why is "Yas\'alu" written with Hamzah on Alif, "Su\'al" on Waw, and "Sa\'ima" on Nabrah? It follows the fascinating Arabic vowel hierarchy law: the strongest vowel claims the Hamzah seat!',

    learningOutcomesAr: [
      'أن يرتب الطالب الحركات الإملائية حسب قوتها: (الكسرة أقوى الحركات تناسبها النبرة ئ، تليها الضمة تناسبها الواو ؤ، تليها الفتحة تناسبها الألف أ، وأضعفها السكون على السطر).',
      'أن يطبق قاعدة أقوى الحركات برسم الهمزة المتوسطة بالمقارنة بين حركة الهمزة وحركة الحرف الذي قبلها.',
      'أن يتقن قاعدة رسم الهمزة المتطرفة في آخر الكلمة بالنظر لحركة الحرف السابق لها فقط.',
      'أن يكتب سيرة غيرية متكاملة لشخصية تاريخية أو ملهمة متضمنة: الاسم والنشأة، الإنجازات، والدروس المستفادة.'
    ],
    learningOutcomesEn: [
      'Rank vowel strength: Kasra (Nabrah ئ) > Damma (Waw ؤ) > Fatha (Alif أ) > Sukun.',
      'Apply the strongest-vowel rule for medial Hamzah by comparing the Hamzah and preceding letter vowels.',
      'Master terminal Hamzah rules dictated strictly by the single preceding letter\'s diacritic.',
      'Author a biographical profile encompassing background, milestones, and legacy.'
    ],

    vocabulary: [
      {
        termAr: 'قاعدة أقوى الحركات (Vowel Hierarchy Rule)',
        termEn: 'Strongest Vowel Hierarchy',
        definitionAr: 'قاعدة إملائية: الكسرة (تناسبها الياء) أقوى من الضمة (تناسبها الواو) أقوى من الفتحة (تناسبها الألف) أقوى من السكون.',
        definitionEn: 'Hierarchy: Kasra (seats on Nabrah) > Damma (Waw) > Fatha (Alif) > Sukun (Line).'
      },
      {
        termAr: 'الهمزة المتطرفة (Terminal Hamzah)',
        termEn: 'Terminal Hamzah',
        definitionAr: 'همزة تأتي في نهاية الكلمة وتكتب حسب حركة الحرف الذي قبلها مباشرة دون النظر لحركتها هي.',
        definitionEn: 'A Hamzah at the word end, shaped purely by the single preceding vowel.'
      },
      {
        termAr: 'السيرة الغيرية (Biography)',
        termEn: 'Biography (Seerah Ghayriyyah)',
        definitionAr: 'نص وصفي سردي يكتبه المؤلف عن شخصية أخرى مؤثرة، يسرد فيه قصة حياتها وأهم محطاتها وإنجازاتها.',
        definitionEn: 'A biographical narrative detailing another notable person\'s milestones and legacy.'
      }
    ],

    keyConceptsAr: [
      'الهمزة المتوسطة: انظر لحركتين (حركة الهمزة وحركة ما قبلها) واكتبها على الحرف الذي يناسب الحركة الأقوى.',
      'الهمزة المتطرفة: انظر لحركة ما قبلها فقط: قبلها مكسور تكتب على ياء (شاطئ)، قبلها مضموم على واو (تباطؤ)، قبلها مفتوح على ألف (قرأ)، قبلها ساكن أو حرف مد تكتب على السطر (سماء، ضوء، بطء).',
      'عناصر السيرة الغيرية: العنوان، الفكرة العامة، نشأة الشخصية ومحطات حياتها، الإنجازات الملهمة، والدروس والخاتمة.'
    ],
    keyConceptsEn: [
      'Medial Hamzah: compare two vowels (Hamzah and preceding) and choose the seat of the dominant vowel.',
      'Terminal Hamzah: look solely at the preceding letter (Kasra -> Yaa; Damma -> Waw; Fatha -> Alif; Sukun/Madd -> standalone on line).',
      'Biography elements: title, introduction, early life, major contributions, and takeaway reflection.'
    ],

    summaryAr: 'شرحنا في هذا الدرس القواعد الذهبية لكتابة الهمزة المتوسطة والمتطرفة بدقة دون أخطاء إملائية، وخطوات كتابة السيرة الغيرية المعبرة والمترابطة.',
    summaryEn: 'We mastered spelling rules for medial and terminal Hamzah and functional biographical composition.',

    mainContentAr: `
### 1. قاعدة أقوى الحركات في الهمزة المتوسطة
تُكتب الهمزة في وسط الكلمة بالمقارنة بين **حركتها** و**حركة الحرف السابق لها**:
- **سلم قوة الحركات:**
  1. **الكسرة (الأقوى):** وتناسبها **الياء / النبرة (ئ)**:
     - مكسورة وما قبلها مفتوح: سَـئِـم (سئم).
     - مفتوحة وما قبلها مكسور: فِـئَـة (فئة).
  2. **الضمة (المرتبة الثانية):** وتناسبها **الواو (ؤ)**:
     - مضمومة وما قبلها مفتوح: يَـؤُمّ (يؤم).
     - مفتوحة وما قبلها مضموم: سُـؤَال (سؤال).
  3. **الفتحة (المرتبة الثالثة):** وتناسبها **الألف (أ)**:
     - مفتوحة وما قبلها ساكن: يَـسْـأَل (يسأل).
     - مفتوحة وما قبلها مفتوح: سَـأَلَ (سأل).
  4. **السكون (الأضعف):** لا يناسبه حرف.

---

### 2. الهمزة المتطرفة (في آخر الكلمة)
قاعدتها أسهل بكثير: ننظر **فقط لحركة الحرف الذي يسبقها**:
- إذا كان ما قبلها **مكسوراً** $\\implies$ تُكتب على **ياء** (شاطِئ، قارِئ، هادِئ).
- إذا كان ما قبلها **مضموم** $\\implies$ تُكتب على **واو** (تلكُّؤ، تباطُؤ، لؤلُؤ).
- إذا كان ما قبلها **مفتوحاً** $\\implies$ تُكتب على **ألف** (قَرَأ، صَدَأ، مَلَأ).
- إذا كان ما قبلها **ساكناً أو حرف مد** $\\implies$ تُكتب **على السطر** (دِفْء، شَيْء، وُضُوء، سَمَاء، هَوَاء).

---

### 3. فن كتابة السيرة الغيرية
- **العنوان:** اسم الشخصية البارزة (مثال: الدكتور مجدي يعقوب - جراح القلوب).
- **المقدمة:** تعريف مختصر بالشخصية وسبب شهرتها.
- **عرض الأحداث:** نشأتها، تعليمها، التحديات التي واجهتها، وأبرز إنجازاتها الإنسانية والعلمية.
- **الخاتمة:** رأيك الشخصي في هذه الشخصية والقدوة التي تقدمها للجيل الجديد.
`,
    assessment: {
      id: 'assess-arb5-4',
      titleAr: 'تقييم المحاضرة 4: رسم الهمزات والسيرة الغيرية',
      titleEn: 'Assessment 4: Hamzah & Biography',
      passingScore: 80,
      questions: [
        {
          id: 'q-a5-4-1',
          textAr: 'لماذا كُتبت الهمزة المتوسطة على نبرة في كلمة «فِئَة»؟',
          textEn: 'Why is the medial Hamzah written on Nabrah in «فِئَة»?',
          optionsAr: [
            'لأنها مكسورة وما قبلها ساكن',
            'لأنها مفتوحة وما قبلها مكسور، والكسرة أقوى من الفتحة ويناسبها الياء',
            'لأنها مضمومة',
            'لأنها في آخر الكلمة'
          ],
          optionsEn: [
            'Because it has Kasra and preceding is Sukun',
            'Because it has Fatha preceded by Kasra, and Kasra is stronger, taking Nabrah',
            'Because it has Damma',
            'Because it is terminal'
          ],
          correctIndex: 1,
          conceptTestedAr: 'قاعدة أقوى الحركات في الهمزة المتوسطة',
          conceptTestedEn: 'Hierarchy of Vowels for Medial Hamzah',
          difficulty: 'medium',
          explanationAr: 'الحرف السابق مكسور والهمزة مفتوحة، والكسرة أقوى الحركات وتناسبها النبرة.',
          explanationEn: 'The preceding Kasra dominates over the Hamzah\'s Fatha, dictating a Nabrah seat.'
        },
        {
          id: 'q-a5-4-2',
          textAr: 'كيف تُكتب الهمزة المتطرفة في كلمة «شاطـ...»؟',
          textEn: 'How is the terminal Hamzah written in «شاطـ...»?',
          optionsAr: ['شاطأ (على ألف)', 'شاطؤ (على واو)', 'شاطئ (على ياء)', 'شاطء (على السطر)'],
          optionsEn: ['Shat\'a (on Alif)', 'Shat\'u (on Waw)', 'Shati\' (on Yaa)', 'Shat\' (on line)'],
          correctIndex: 2,
          conceptTestedAr: 'رسم الهمزة المتطرفة بعد مكسور',
          conceptTestedEn: 'Terminal Hamzah after Kasra',
          difficulty: 'easy',
          explanationAr: 'الحرف السابق للهمزة هو الطاء المكسورة (شاطِـ)، فتُكتب الهمزة المتطرفة على ياء (شاطئ).',
          explanationEn: 'The preceding Taa carries a Kasra, so the terminal Hamzah sits on Yaa: "Shati\'".'
        },
        {
          id: 'q-a5-4-3',
          textAr: 'لماذا كتبت الهمزة المتطرفة على السطر في كلمة «سَمَاء»؟',
          textEn: 'Why is the terminal Hamzah written on the line in «سَمَاء»?',
          optionsAr: [
            'لأنها مسبوقة بألف مد ساكنة فتكتب منفردة على السطر',
            'لأنها في أول الكلمة',
            'لأنها مفتوحة',
            'لأن ما قبلها مكسور'
          ],
          optionsEn: [
            'Because it is preceded by a silent Alif Madd, seating it standalone on the line',
            'Because it is at the start',
            'Because it carries Fatha',
            'Because preceding is Kasra'
          ],
          correctIndex: 0,
          conceptTestedAr: 'رسم الهمزة المتطرفة بعد حرف مد ساكن',
          conceptTestedEn: 'Terminal Hamzah after Silent Madd',
          difficulty: 'easy',
          explanationAr: 'تكتب الهمزة المتطرفة على السطر إذا سبقت بحرف ساكن أو حرف مد (مثل سماء، ماء، هواء).',
          explanationEn: 'Terminal Hamzah is written standalone on the line when preceded by a silent Madd.'
        }
      ]
    }
  }
];
