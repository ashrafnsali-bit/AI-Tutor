import type { Lecture } from '../types';

// PRIMARY ARABIC — GRADE 6 (اللغة العربية الصف السادس الابتدائي - منهج التعليم 2.0 والمسارات المعتمدة)
// ============================================================================
// Based on official Egyptian Ministry of Education Edu 2.0 & Saudi Ministry of Education G6 standards.
// Covers:
// 1. The Five Nouns & Secondary Markers (الأسماء الخمسة وإعرابها)
// 2. Defective Verbs (كان وأخواتها) and Types of Predicate (أنواع الخبر)
// 3. Assimilated Particles (إن وأخواتها) and Comparison with Kana
// 4. Pronouns (Explicit & Latent), Present Tense Inflexion & Creative Writing (الضمائر وإعراب المضارع)

export const PRIMARY_ARABIC_G6_LECTURES: Lecture[] = [
  // ── LECTURE 1: THE FIVE NOUNS & SECONDARY PARSING MARKERS ──
  {
    id: 'parb-g6-1',
    order: 1,
    titleAr: 'المحاضرة 1: الأسماء الخمسة وعلامات إعرابها الفرعية وتطبيقاتها',
    titleEn: 'Lecture 1: The Five Nouns (الأسماء الخمسة) & Sub-Grammatical Markers',
    subtitleAr: 'دراسة الأسماء الخمسة (أب، أخ، حم، فو، ذو)، شروط إعرابها بالحروف (الواو رفعاً، الألف نصباً، الياء جراً)، وتطبيقات إعرابية عملية.',
    subtitleEn: 'Study the Five Nouns (Ab, Akh, Ham, Fu, Dhu), conditions for letter parsing (Waw, Alif, Yaa), and syntax analysis.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: قواعد النحو والإملاء',
    unitTitleEn: 'Theme 1: Arabic Grammar & Orthography',
    lessonNumberAr: 'الدرس 1: الأسماء الخمسة وإعرابها',
    lessonNumberEn: 'Lesson 1: The Five Nouns',

    warmupHookAr: 'في لغتنا العربية الجميلة، تعرب معظم الكلمات بالحركات الأصلية (الضمة، الفتحة، الكسرة). ولكن هناك عائلة كريمة مكونة من خمسة أسماء تميزت بإعرابها الفريد بالحروف: ترفع بالواو كأنها هامات عالية، وتنصب بالألف، وتجر بالياء! من هي هذه الأسماء الخمسة وما أسرارها؟',
    warmupHookEn: 'Most Arabic nouns carry standard short vowel markers (Damma, Fatha, Kasra). Yet a distinguished family of five special nouns commands unique letter-based parsing: Waw for nominative, Alif for accusative, and Yaa for genitive! Meet the Five Nouns.',

    learningOutcomesAr: [
      'أن يعدد الطالب الأسماء الخمسة (أَب، أَخ، حَم، فُو، ذُو بمعنى صاحب).',
      'أن يوضح علامات إعراب الأسماء الخمسة الفرعية: ترفع بالواو، تنصب بالألف، وتجر بالياء.',
      'أن يطبق شروط إعرابها بالحروف: (أن تكون مفردة، مضافة، إضافتها لغير ياء المتكلم، وخلو "فو" من الميم).',
      'أن يعرب الأسماء الخمسة إعراباً تاماً في مواقع الرفع والنصب والجر.',
      'أن يبين علامة إعراب هذه الأسماء بالحركات الأصلية إذا فقدت شرطاً من شروطها.'
    ],
    learningOutcomesEn: [
      'List the Five Nouns: Ab (father), Akh (brother), Ham (in-law), Fu (mouth), Dhu (possessor).',
      'Apply letter inflection: Nominative with Waw, Accusative with Alif, Genitive with Yaa.',
      'Master the strict conditions: singular, annexed, annexed to non-first-person Yaa, Fu without Meem.',
      'Parse the Five Nouns accurately in sentences.',
      'Recognize default vowel parsing when conditions are violated.'
    ],

    vocabulary: [
      {
        termAr: 'الأسماء الخمسة (The Five Nouns)',
        termEn: 'The Five Nouns',
        definitionAr: 'خمسة أسماء في اللغة العربية (أب، أخ، حم، فو، ذو) تعرب بالحروف نيابة عن الحركات بشروط محددة.',
        definitionEn: 'Five specific Arabic nouns inflected by letters instead of short vowels under set syntactical conditions.'
      },
      {
        termAr: 'ذو (Dhu - Possessor of)',
        termEn: 'Dhu (Possessor/Owner of)',
        definitionAr: 'اسم من الأسماء الخمسة يأتي دائماً بمعنى "صاحب" ولا يضاف إلا إلى اسم ظاهر (مثل: ذو العلم، ذو الفضل).',
        definitionEn: 'One of the Five Nouns meaning "possessor of", strictly annexed to an explicit noun.'
      },
      {
        termAr: 'العلامات الفرعية (Secondary Parsing Markers)',
        termEn: 'Sub-Inflectional Markers',
        definitionAr: 'علامات إعراب بالحروف (كالواو والألف والياء) تنوب عن العلامات الأصلية (الضمة والفتحة والكسرة).',
        definitionEn: 'Letters acting as case markers in place of default diacritics.'
      }
    ],

    keyConceptsAr: [
      'علامات إعراب الأسماء الخمسة: الرفع بالواو (جاء أبوك)، النصب بالألف (رأيت أباك)، الجر بالياء (سلمت على أبيك).',
      'شروط الإعراب بالحروف أربعة: 1) أن تكون مفردة (ليست مثنى ولا جمعاً)، 2) أن تكون مضافة، 3) أن تكون الإضافة لغير ياء المتكلم، 4) أن تحذف الميم من كلمة "فم" لتصبح "فو".',
      'إذا أضيفت لياء المتكلم (أبي، أخي) تعرب بحركات مقدرة على ما قبل ياء المتكلم.',
      'إذا جاءت غير مضافة (هذا أبٌ رحيمٌ) تعرب بالحركات الأصلية الظاهرة بالتنوين.'
    ],
    keyConceptsEn: [
      'Parsing markers: Nominative with Waw (Ja\'a Abuka), Accusative with Alif (Ra\'aytu Abaka), Genitive with Yaa (Sal\'lamtu \'ala Abika).',
      'Crucial prerequisites: singular, annexed, annexed to non-1st-person pronoun, Meem omitted from Fam (Fu).',
      'If annexed to 1st person "Yaa" (Abi), parsed with estimated short vowels.',
      'If un-annexed (Abun), takes standard vowels with nunation.'
    ],

    summaryAr: 'أتقنا في هذا الدرس إعراب الأسماء الخمسة وشروطها بدقة، وتعرفنا على علاماتها الفرعية في الرفع والنصب والجر مع نماذج تطبيقية شاملة.',
    summaryEn: 'We mastered the Five Nouns, their strict prerequisite conditions, and letter-based parsing across nominative, accusative, and genitive cases.',

    mainContentAr: `
### 1. ما هي الأسماء الخمسة؟
هي خمس كلمات شائعة الاستخدام في لغتنا:
1. **أب:** الوالد.
2. **أخ:** الشقيق.
3. **حم:** والد الزوج أو الزوجة (الحمو).
4. **فو:** الفم (بشرط حذف الميم).
5. **ذو:** بمعنى صاحب (مثل: ذو الأخلاق، ذو العلم).

---

### 2. علامات الإعراب الفرعية بالحروف
تعرب الأسماء الخمسة بالنيابة عن الحركات الأصلية كما يلي:
- **في حالة الرفع (نيابة عن الضمة):** ترفع بـ **الواو**.
  - مثال: حضر **أبوك** الحفل (أبوك: فاعل مرفوع وعلامة رفعه الواو لأنه من الأسماء الخمسة، والكاف ضمير متصل مبني في محل جر مضاف إليه).
- **في حالة النصب (نيابة عن الفتحة):** تنصب بـ **الألف**.
  - مثال: صافحت **أخاك** في المدرسة (أخاك: مفعول به منصوب وعلامة نصبه الألف لأنه من الأسماء الخمسة).
- **في حالة الجر (نيابة عن الكسرة):** تجر بـ **الياء**.
  - مثال: استمعت إلى نصيحة **ذي** الخبرة (ذي: مضاف إليه مجرور وعلامة جره الياء لأنه من الأسماء الخمسة).

---

### 3. شروط إعراب الأسماء الخمسة بالحروف
لكي تعرب بالواو والألف والياء، لا بد أن تستوفي 4 شروط مجتمعة:
1. **أن تكون مفردة:** فإذا ثُنيت (أبوان) أُعربت إعراب المثنى، وإذا جُمعت (آباء) أُعربت إعراب جمع التكسير بالحركات الأصلية.
2. **أن تكون مضافة:** يتبعها مضاف إليه (اسم ظاهر أو ضمير كالكاف والهاء).
3. **ألا تكون الإضافة لياء المتكلم:** فإذا قلت (أبي، أخي) تعرب بحركات مقدرة منع من ظهورها اشتغال المحل بحركة المناسبة.
4. **أن تخلو كلمة "فو" من الميم:** فإذا قلنا (ينطق فمُك بالحق) تعرب بالحركات الأصلية لا بالواو.
`,
    assessment: {
      id: 'assess-arb6-1',
      titleAr: 'تقييم المحاضرة 1: الأسماء الخمسة وعلامات إعرابها',
      titleEn: 'Assessment 1: The Five Nouns',
      passingScore: 80,
      questions: [
        {
          id: 'q-a6-1-1',
          textAr: 'ما الإعراب الصحيح لكلمة "أباك" في جملة: «أطع أباك وأمك»؟',
          textEn: 'What is the correct parsing of "Abaka" in: «أطع أباك وأمك»?',
          optionsAr: [
            'فاعل مرفوع وعلامة رفعه الألف',
            'مفعول به منصوب وعلامة نصبه الألف لأنه من الأسماء الخمسة',
            'مبتدأ مؤخر منصوب بالفتحة',
            'اسم مجرور وعلامة جره الكسرة'
          ],
          optionsEn: [
            'Subject (Fa\'il) in nominative case with Alif',
            'Object (Maf\'ul bihi) in accusative case with Alif as a Five Noun',
            'Delayed subject in accusative case with Fatha',
            'Genitive noun with Kasra'
          ],
          correctIndex: 1,
          conceptTestedAr: 'إعراب الأسماء الخمسة في حالة النصب بالألف',
          conceptTestedEn: 'Accusative parsing of Five Nouns with Alif',
          difficulty: 'medium',
          explanationAr: 'الفاعل ضمير مستتر تقديره (أنت)، وأباك مفعول به منصوب وعلامة نصبه الألف لأنه من الأسماء الخمسة.',
          explanationEn: 'The hidden subject is "you", and Abaka is the direct object inflected with Alif in accusative.'
        },
        {
          id: 'q-a6-1-2',
          textAr: 'لماذا لا تعرب كلمة "أبي" في جملة: «أبي يحب الخير للجميع» بالحروف؟',
          textEn: 'Why is "Abi" not inflected with letters in «أبي يحب الخير للجميع»?',
          optionsAr: [
            'لأنها جاءت في أول الجملة',
            'لأنها مضافة إلى ياء المتكلم فتعرب بحركات مقدرة',
            'لأنها كلمة جمع وليست مفردة',
            'لأنها فعل ماضٍ'
          ],
          optionsEn: [
            'Because it appears sentence-initially',
            'Because it is annexed to 1st-person Yaa, taking estimated vowels',
            'Because it is a plural form',
            'Because it is a past verb'
          ],
          correctIndex: 1,
          conceptTestedAr: 'شروط إعراب الأسماء الخمسة بالحروف',
          conceptTestedEn: 'Prerequisites for Five Nouns Letter Inflection',
          difficulty: 'easy',
          explanationAr: 'يشترط ألا تضاف لياء المتكلم؛ فإذا أضيفت لياء المتكلم أعربت بحركات مقدرة.',
          explanationEn: 'Annexing to 1st-person Yaa nullifies letter inflection, reverting to estimated short vowels.'
        },
        {
          id: 'q-a6-1-3',
          textAr: 'أي الجمل التالية كُتبت فيها الأسماء الخمسة بصورة صحيحة نحوياً؟',
          textEn: 'Which of the following sentences correctly applies Five Nouns syntax?',
          optionsAr: [
            'كان حماك ذا فضلٍ عظيم',
            'كان حميك ذو فضلٍ عظيم',
            'كان حماك ذو فضلٍ عظيم',
            'كان حموك ذا فضلٍ عظيم'
          ],
          optionsEn: [
            'Kana Hamaka Dha Fadlin',
            'Kana Hamika Dhu Fadlin',
            'Kana Hamaka Dhu Fadlin',
            'Kana Hamuka Dha Fadlin'
          ],
          correctIndex: 3,
          conceptTestedAr: 'تطبيق الأسماء الخمسة مع كان وأخواتها (اسم كان مرفوع وخبرها منصوب)',
          conceptTestedEn: 'Five Nouns with Kana (Nominative Noun, Accusative Predicate)',
          difficulty: 'hard',
          explanationAr: 'اسم كان مرفوع بالواو (حموك)، وخبر كان منصوب بالألف (ذا)، فيكون الصحيح: «كان حموك ذا فضلٍ».',
          explanationEn: 'Kana\'s noun is nominative with Waw (Hamuka) and its predicate is accusative with Alif (Dha).'
        }
      ]
    }
  },

  // ── LECTURE 2: DEFECTIVE VERBS (KANA & ITS SISTERS) & PREDICATE TYPES ──
  {
    id: 'parb-g6-2',
    order: 2,
    titleAr: 'المحاضرة 2: الأفعال الناسخة (كان وأخواتها) وأنواع الخبر',
    titleEn: 'Lecture 2: Defective Verbs (Kana & its Sisters) & Types of Predicate',
    subtitleAr: 'عمل كان وأخواتها في الجملة الاسمية، رفع المبتدأ اسماً لها ونصب الخبر، ودراسة أنواع الخبر (مفرد، جملة، شبه جملة).',
    subtitleEn: 'The syntactical impact of Kana and sisters: raising the subject and making the predicate accusative, and predicate types.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: قواعد النحو والإملاء',
    unitTitleEn: 'Theme 1: Arabic Grammar & Orthography',
    lessonNumberAr: 'الدرس 2: الأفعال الناسخة وأنواع الخبر',
    lessonNumberEn: 'Lesson 2: Kana and Types of Predicate',

    warmupHookAr: 'الجملة الاسمية في أصلها هادئة ومستقرة: المبتدأ مرفوع والخبر مرفوع (السماءُ صافيةٌ). ولكن عندما تدخل عليها الأفعال الناسخة (كان وأخواتها)، تحدث تغييراً وانقلاباً؛ فتنسخ حكم الخبر وتحوله من الرفع إلى النصب (كانت السماءُ صافيةً)! لماذا سُميت ناسخة وناقصة؟ وما الأشكال المتنوعة التي يأتي عليها الخبر؟',
    warmupHookEn: 'The nominal sentence is naturally calm: both subject and predicate are nominative. But when Defective Verbs (Kana and sisters) enter, they abrogate the predicate case, turning it accusative! Why are they called abrogation and defective verbs?',

    learningOutcomesAr: [
      'أن يعدد الطالب أخوات كان ومعانيها (كان، أصبح، أضحى، أمسى، ظل، بات، صار، ليس).',
      'أن يوضح عمل كان وأخواتها في الجملة الاسمية: ترفع المبتدأ ويسمى اسمها، وتنصب الخبر ويسمى خبرها.',
      'أن يفسر سبب تسميتها بأفعال ناسخة (تنسخ وتغير الحكم) وناقصة (لا تكتفي بمرفوعها بل تحتاج خبراً لتمام المعنى).',
      'أن يحلل أنواع خبر كان الثلاثة: خبر مفرد، خبر جملة (اسمية أو فعلية)، وخبر شبه جملة (جار ومجرور أو ظرف).'
    ],
    learningOutcomesEn: [
      'Enumerate Kana and its sisters and their semantic nuances.',
      'Demonstrate how they raise the subject (Ism Kana) and set the predicate to accusative (Khabar Kana).',
      'Explain the terms "Nasikhah" (abrogating) and "Naqisah" (defective / requiring complement).',
      'Classify the three predicate forms: singular word, clause (nominal/verbal), and semi-sentence (prepositional/adverbial).'
    ],

    vocabulary: [
      {
        termAr: 'الأفعال الناسخة (Defective Verbs - Kana & Sisters)',
        termEn: 'Defective Verbs (Kana and Sisters)',
        definitionAr: 'أفعال ناقصة تدخل على الجملة الاسمية، فترفع المبتدأ ويسمى اسمها، وتنصب الخبر ويسمى خبرها.',
        definitionEn: 'Auxiliary/defective verbs entering nominal sentences, making the subject nominative and predicate accusative.'
      },
      {
        termAr: 'ناسخة (Abrogating)',
        termEn: 'Abrogating (Nasikhah)',
        definitionAr: 'تغير وتبدل حكم الإعراب الأصلي لخبر المبتدأ من الرفع إلى النصب.',
        definitionEn: 'Cancels the original nominative case of the predicate, replacing it with accusative.'
      },
      {
        termAr: 'أنواع الخبر (Types of Predicate)',
        termEn: 'Predicate Formats',
        definitionAr: 'الأشكال التي يكتمل بها معنى المبتدأ: 1- مفرد (ليس جملة ولا شبه جملة)، 2- جملة اسمية أو فعلية، 3- شبه جملة.',
        definitionEn: 'Three structures completing nominal meaning: single word, clause (verbal/nominal), or prepositional/adverbial phrase.'
      }
    ],

    keyConceptsAr: [
      'أخوات كان تعمل في الماضي والمضارع والأمر: كان - يكون - كُن (ما عدا "ليس" فهو فعل جامد).',
      'اسم كان قد يكون اسماً ظاهراً (أصبح الجوُّ معتدلاً)، أو ضميراً متصلاً (كنتُ سعيداً)، أو ضميراً مستتراً (كُنْ صبوراً - اسمها ضمير مستتر تقديره أنت).',
      'أنواع الخبر: 1) مفرد: (ظل الجنديُّ يقظاً)، 2) جملة فعلية: (أمسى المريضُ يتألمُ)، 3) جملة اسمية: (أصبحت الشجرةُ ثمارُها يانعةٌ)، 4) شبه جملة: (بات العصفورُ في العشِّ).'
    ],
    keyConceptsEn: [
      'Kana sisters inflect across tenses (past, present, imperative), except "Laysa" which is strictly rigid/static.',
      'Subject of Kana can be explicit, attached pronoun, or implicit/hidden.',
      'Predicate types: single word, verbal clause, nominal clause, or prepositional/adverbial phrase.'
    ],

    summaryAr: 'درسنا في هذه المحاضرة الأفعال الناسخة (كان وأخواتها)، وعملها في رفع الاسم ونصب الخبر، وتفصيل أنواع الخبر وتطبيقاتها الإعرابية المتنوعة.',
    summaryEn: 'We covered defective verbs (Kana and sisters), their syntax on nominal sentences, and the four configurations of Arabic predicates.',

    mainContentAr: `
### 1. معاني كان وأخواتها وعملها النحوي
- **كان:** تفيد اتصاف الاسم بالخبر في الزمن الماضي (كان الطالبُ مجتهداً).
- **أصبح:** التوقيت بالصباح (أصبح الطقسُ بارداً).
- **أضحى:** التوقيت بالضحى (أضحى العاملُ نشيطاً).
- **أمسى:** التوقيت بالمساء (أمسى الشارعُ هادئاً).
- **ظل:** الاستمرار والدوام في النهار (ظل الطالبُ يذاكرُ).
- **بات:** التوقيت بالليل والبيات (بات الحارسُ يقظاً).
- **صار:** التحول والصيرورة من حال لحال (صار الدقيقُ خبزاً).
- **ليس:** نفي الخبر عن الاسم (ليس الكذبُ نافعاً).

---

### 2. أنواع خبر كان وأخواتها
الخبر هو ما يكمل معنى الجملة مع اسم كان، ويأتي على ثلاثة أنماط:
1. **الخبر المفرد:** ما ليس جملة ولا شبه جملة، ويكون كلمة واحدة منصوبة مباشرة (حتى لو دلت على مثنى أو جمع):
   - أصبح المهندسون **بارعين** (بارعين: خبر أصبح منصوب بالياء لأنه جمع مذكر سالم).
2. **خبر الجملة:**
   - **جملة فعلية:** (ظل المعلمُ **يشرحُ الدرسَ**) $\\implies$ جملة يشرح في محل نصب خبر ظل.
   - **جملة اسمية:** يشترط وجود رابط (ضمير): (كانت المدرسةُ **فناؤها واسعٌ**) $\\implies$ فناؤها واسع في محل نصب خبر كانت.
3. **خبر شبه الجملة:**
   - **جار ومجرور:** (أصبح العصفورُ **في القفص**) $\\implies$ في القفص شبه جملة في محل نصب خبر أصبح.
   - **ظرف زمان أو مكان:** (كان اللقاءُ **أمام المدرسة**).
`,
    assessment: {
      id: 'assess-arb6-2',
      titleAr: 'تقييم المحاضرة 2: كان وأخواتها وأنواع الخبر',
      titleEn: 'Assessment 2: Kana and Predicate Types',
      passingScore: 80,
      questions: [
        {
          id: 'q-a6-2-1',
          textAr: 'ما نوع الخبر في جملة: «ظل الفلاحُ يزرعُ الأرضَ»؟',
          textEn: 'What is the type of predicate in: «ظل الفلاحُ يزرعُ الأرضَ»?',
          optionsAr: ['خبر مفرد', 'خبر جملة فعلية', 'خبر جملة اسمية', 'خبر شبه جملة'],
          optionsEn: ['Singular word predicate', 'Verbal clause predicate', 'Nominal clause predicate', 'Semi-sentence predicate'],
          correctIndex: 1,
          conceptTestedAr: 'تحديد نوع الخبر (جملة فعلية)',
          conceptTestedEn: 'Identifying Verbal Clause Predicate',
          difficulty: 'easy',
          explanationAr: 'الخبر بدأ بفعل مضارع (يزرع)، فالجملة الفعلية في محل نصب خبر ظل.',
          explanationEn: 'The predicate is initiated by the verb "Yazra\'u", forming a verbal clause complement.'
        },
        {
          id: 'q-a6-2-2',
          textAr: 'ما الإعراب الصحيح لكلمة "مخلصين" في جملة: «أصبح المعلمون مخلصين»؟',
          textEn: 'What is the correct parsing of "Mukhloseen" in: «أصبح المعلمون مخلصين»?',
          optionsAr: [
            'اسم أصبح مرفوع بالواو',
            'خبر أصبح منصوب وعلامة نصبه الياء لأنه جمع مذكر سالم',
            'مفعول به ثانٍ منصوب بالفتحة',
            'نعت منصوب بالكسرة'
          ],
          optionsEn: [
            'Subject of Asbaha in nominative with Waw',
            'Predicate of Asbaha in accusative with Yaa (sound masculine plural)',
            'Second object in accusative with Fatha',
            'Adjective in accusative with Kasra'
          ],
          correctIndex: 1,
          conceptTestedAr: 'إعراب خبر كان وأخواتها عند الجمع',
          conceptTestedEn: 'Parsing Kana Predicate for Sound Masculine Plural',
          difficulty: 'easy',
          explanationAr: 'خبر أصبح منصوب، وعلامة نصبه الياء لأنه جمع مذكر سالم.',
          explanationEn: 'The predicate of Asbaha is accusative, taking Yaa for sound masculine plurals.'
        },
        {
          id: 'q-a6-2-3',
          textAr: 'أين اسم الفعل الناسخ في جملة: «كُنْ صادقاً في قولك»؟',
          textEn: 'Where is the subject of the defective verb in: «كُنْ صادقاً في قولك»?',
          optionsAr: [
            'كلمة (صادقاً)',
            'ضمير مستتر تقديره (أنت)',
            'شبه الجملة (في قولك)',
            'محذوف لا محل له'
          ],
          optionsEn: [
            'The word "Sadiqan"',
            'An implicit/hidden pronoun estimated as "Anta" (you)',
            'The prepositional phrase "Fi Qawlika"',
            'Omitted without syntactical position'
          ],
          correctIndex: 1,
          conceptTestedAr: 'اسم كان كضمير مستتر في صيغة الأمر',
          conceptTestedEn: 'Subject of Kana as Latent Pronoun in Imperative',
          difficulty: 'medium',
          explanationAr: 'في فعل الأمر (كُنْ)، يكون الاسم ضميراً مستتراً وجوباً تقديره (أنت)، و(صادقاً) هو الخبر المنصوب.',
          explanationEn: 'In imperative "Kun", the subject is an obligatory hidden pronoun (Anta), and Sadiqan is the accusative predicate.'
        }
      ]
    }
  },

  // ── LECTURE 3: ASSIMILATED PARTICLES (INNA & SISTERS) ──
  {
    id: 'parb-g6-3',
    order: 3,
    titleAr: 'المحاضرة 3: الحروف الناسخة (إن وأخواتها) ومقارنتها بالأفعال الناسخة',
    titleEn: 'Lecture 3: Assimilated Particles (Inna & its Sisters) vs Defective Verbs',
    subtitleAr: 'معاني إن وأخواتها (أنّ، كأنّ، لكنّ، ليت، لعلّ)، نصب الاسم ورفع الخبر، وتطبيقات التحويل بين كان وإن.',
    subtitleEn: 'The grammar of Inna & sisters: setting subject to accusative and predicate to nominative, and comparing with Kana.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'المحور الأول: قواعد النحو والإملاء',
    unitTitleEn: 'Theme 1: Arabic Grammar & Orthography',
    lessonNumberAr: 'الدرس 3: إن وأخواتها والتحويل الإعرابي',
    lessonNumberEn: 'Lesson 3: Inna & Sisters',

    warmupHookAr: 'إذا كانت (كان وأخواتها) أفعالاً ترفع المبتدأ وتنصب الخبر، فإن (إن وأخواتها) حروف تدخل على نفس الجملة الاسمية ولكنها تعمل بعكس كان تماماً: فتنصب المبتدأ وترفع الخبر! ﴿إِنَّ اللَّهَ غَفُورٌ رَحِيمٌ﴾. ما معاني هذه الحروف الساحرة وكيف تغير بلاغة الكلام؟',
    warmupHookEn: 'While Kana and sisters raise the subject and make the predicate accusative, Inna and its sister particles perform the exact opposite: they make the subject accusative and raise the predicate! "Indeed, Allah is Forgiving, Merciful."',

    learningOutcomesAr: [
      'أن يعدد الطالب الحروف الناسخة (إنّ، أنّ، كأنّ، لكنّ، ليتَ، لعلّ) ويبين المعنى البلاغي لكل حرف.',
      'أن يوضح عمل إن وأخواتها: تنصب المبتدأ ويسمى اسمها، وترفع الخبر ويسمى خبرها.',
      'أن يقارن بدقة بين عمل كان وأخواتها (أفعال ترفع ثم تنصب) وعمل إن وأخواتها (حروف تنصب ثم ترفع).',
      'أن يعرب الضمائر المتصلة بالحروف الناسخة (إنك، إنه، إننا) كاسم إن في محل نصب.'
    ],
    learningOutcomesEn: [
      'List Inna and sisters and state the rhetorical meaning of each (emphasis, comparison, qualification, wish, hope).',
      'Explain the syntax: setting subject to accusative (Ism Inna) and predicate to nominative (Khabar Inna).',
      'Contrast Kana (verbs: nominative noun, accusative predicate) with Inna (particles: accusative noun, nominative predicate).',
      'Parse attached pronouns with Inna as accusative subjects.'
    ],

    vocabulary: [
      {
        termAr: 'الحروف الناسخة (Inna and Sisters)',
        termEn: 'Inna and Sisters (Assimilated Particles)',
        definitionAr: 'ستة حروف تدخل على الجملة الاسمية فتنصب المبتدأ اسماً لها وترفع الخبر خبراً لها.',
        definitionEn: 'Six particles governing nominal sentences, making the subject accusative and the predicate nominative.'
      },
      {
        termAr: 'التوكيد والاستدراك (Emphasis & Qualification)',
        termEn: 'Emphasis & Qualification (Tawkeed & Istidrak)',
        definitionAr: 'إن وأن للتوكيد وتثبيت المعنى؛ ولكنّ للاستدراك (منع الفهم الخاطئ لما قبلها).',
        definitionEn: 'Inna/Anna express firm affirmation; Lakinna conveys qualification/rectification.'
      },
      {
        termAr: 'الترجي والتمني (Hope vs. Wishful Thinking)',
        termEn: 'Tarajji (Hope) vs Tamanni (Wish)',
        definitionAr: 'الترجي (لعلّ) يكون في الأمر الممكن المحبوب؛ والتمني (ليتَ) يكون في الأمر المستحيل أو شديد الصعوبة.',
        definitionEn: 'Tarajji (La\'alla) expresses feasible hopeful outcome; Tamanni (Layta) expresses impossible wistfulness.'
      }
    ],

    keyConceptsAr: [
      'معاني الحروف: (إنّ وأنّ) للتوكيد، (كأنّ) للتشبيه، (لكنّ) للاستدراك، (ليتَ) للتمني، (لعلّ) للترجي.',
      'القاعدة الذهبية للمقارنة: كان وأخواتها أفعال (ترفع الاسم وتنصب الخبر)، بينما إن وأخواتها حروف (تنصب الاسم وترفع الخبر).',
      'أي ضمير يتصل بـ (إن وأخواتها) هو اسمها في محل نصب: (إنـه نشيط، ليتـك معنا).'
    ],
    keyConceptsEn: [
      'Meanings: Inna/Anna (confirmation), Ka\'anna (analogy), Lakinna (qualification), Layta (wishful), La\'alla (hopeful).',
      'Golden Contrast: Kana = Verb (Raises noun, sets predicate accusative); Inna = Particle (Sets noun accusative, raises predicate).',
      'Any attached pronoun is parsed as accusative Ism Inna: "Inna-hu", "Layta-ka".'
    ],

    summaryAr: 'ميزنا في هذا الدرس بين الحروف الناسخة والأفعال الناسخة، وشرحنا معاني إن وأخواتها البلاغية وأحكامها الإعرابية الدقيقة مع تدريبات عملية في التحويل النحوي.',
    summaryEn: 'We contrasted Inna particles with Kana verbs, learned their rhetorical distinctions, and practiced reciprocal syntactical conversions.',

    mainContentAr: `
### 1. معاني الحروف الناسخة (إن وأخواتها)
- **إنَّ / أنَّ:** تفيدان **التوكيد** ونفي الشك (إنَّ العلمَ نورٌ، علمتُ أنَّ الحقَّ منتصرٌ).
- **كأنَّ:** تفيد **التشبيه** (كأنَّ المعلمَ شمعةٌ تضيء الدروب).
- **لكنَّ:** تفيد **الاستدراك**، وتأتي وسط الكلام لرفع التوهم (الامتحانُ طويلٌ لكنَّ الأسئلةَ سهلةٌ).
- **ليتَ:** تفيد **التمني** لشيء مستحيل أو بعيد الوقوع (ليتَ الشبابَ يعودُ يوماً).
- **لعلَّ:** تفيد **الترجي** لشيء محبوب وممكن الوقوع (لعلَّ النصرَ قريبٌ).

---

### 2. عمل إن وأخواتها وإعرابها
تدخل على المبتدأ والخبر:
- **تنصب المبتدأ** ويسمى **اسم إنّ**:
  - بالمفرد: الفتحة (إنَّ **الصدقَ** فضيلةٌ).
  - بجمع المذكر السالم والمثنى: الياء (لعلَّ **المسافرين** عائدون).
  - بالأسماء الخمسة: الألف (إنَّ **أباك** رجلٌ كريم).
  - بجمع المؤنث السالم: الكسرة (إنَّ **المعلماتِ** مخلصاتٌ).
- **ترفع الخبر** ويسمى **خبر إنّ**:
  - بالمفرد: الضمة (إنَّ الصدقَ **فضيلةٌ**).
  - بالمثنى وجمع المذكر السالم: الألف والواو (إنَّ الطالبين **مجتهدان**، لعلَّ المعلمين **حاضرون**).

---

### 3. جدول المقارنة الذهبي: (كان وأخواتها) مقابل (إن وأخواتها)
| الجملة الاسمية الأصلية | مع كان وأخواتها (فعل ناسخ) | مع إن وأخواتها (حرف ناسخ) |
| :--- | :--- | :--- |
| **المسلمون صائمون** | أصبح المسلمون **صائمين** | إنَّ **المسلمين** صائمون |
| **أبوك ذو خلق** | كان أبوك **ذا** خلق | إنَّ **أباك** ذو خلق |
| **المعلماتُ حاضراتٌ** | ظلت المعلماتُ **حاضراتٍ** | إنَّ **المعلماتِ** حاضراتٌ |
`,
    assessment: {
      id: 'assess-arb6-3',
      titleAr: 'تقييم المحاضرة 3: إن وأخواتها والتحويل النحوي',
      titleEn: 'Assessment 3: Inna and its Sisters',
      passingScore: 80,
      questions: [
        {
          id: 'q-a6-3-1',
          textAr: 'عند إدخال الحرف الناسخ "إنَّ" على جملة: «العاملون مخلصون»، كيف تصبح الجملة صحيحة؟',
          textEn: 'When entering "Inna" into «العاملون مخلصون», what is the correct sentence?',
          optionsAr: [
            'إنَّ العاملون مخلصين',
            'إنَّ العاملين مخلصون',
            'إنَّ العاملين مخلصين',
            'إنَّ العاملون مخلصون'
          ],
          optionsEn: [
            'Inna Al-\'Amiluna Mukhloseen',
            'Inna Al-\'Amileena Mukhlasoon',
            'Inna Al-\'Amileena Mukhloseen',
            'Inna Al-\'Amiluna Mukhlasoon'
          ],
          correctIndex: 1,
          conceptTestedAr: 'نصب اسم إن بالياء ورفع خبرها بالواو',
          conceptTestedEn: 'Accusative Ism Inna with Yaa & Nominative Khabar with Waw',
          difficulty: 'medium',
          explanationAr: 'تنصب إن المبتدأ بالياء (العاملين)، وترفع الخبر بالواو (مخلصون).',
          explanationEn: 'Inna sets its sound masculine plural subject to accusative with Yaa, and predicate to nominative with Waw.'
        },
        {
          id: 'q-a6-3-2',
          textAr: 'ما الحرف الناسخ الذي يفيد "الترجي" لأمر محبوب يمكن حدوثه؟',
          textEn: 'Which assimilated particle conveys "hope" (Tarajji) for a feasible desirable outcome?',
          optionsAr: ['ليتَ', 'لعلَّ', 'كأنَّ', 'لكنَّ'],
          optionsEn: ['Layta', 'La\'alla', 'Ka\'anna', 'Lakinna'],
          correctIndex: 1,
          conceptTestedAr: 'معاني الحروف الناسخة',
          conceptTestedEn: 'Meanings of Inna and Sisters',
          difficulty: 'easy',
          explanationAr: '(لعلَّ) تفيد الترجي للممكن، بينما (ليتَ) تفيد التمني للمستحيل.',
          explanationEn: 'La\'alla denotes feasible hope (Tarajji), whereas Layta denotes wishful impossibility.'
        },
        {
          id: 'q-a6-3-3',
          textAr: 'ما علامة نصب اسم إن في قوله تعالى: ﴿إِنَّ الحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ﴾؟',
          textEn: 'What is the accusative marker for Ism Inna in ﴿إِنَّ الحَسَنَاتِ يُذْهِبْنَ السَّيِّئَاتِ﴾?',
          optionsAr: ['الفتحة الظاهرة', 'الكسرة نيابة عن الفتحة لأنه جمع مؤنث سالم', 'الياء', 'الضمة المقدرة'],
          optionsEn: ['Apparent Fatha', 'Kasra replacing Fatha (sound feminine plural)', 'Yaa', 'Estimated Damma'],
          correctIndex: 1,
          conceptTestedAr: 'علامة نصب جمع المؤنث السالم بالكسرة',
          conceptTestedEn: 'Accusative marker for Sound Feminine Plural',
          difficulty: 'medium',
          explanationAr: 'جمع المؤنث السالم ينصب دائماً بالكسرة نيابة عن الفتحة.',
          explanationEn: 'Sound feminine plurals are inflected with Kasra in accusative cases.'
        }
      ]
    }
  },

  // ── LECTURE 4: PRONOUNS, PRESENT TENSE INFLECTION & WRITING ──
  {
    id: 'parb-g6-4',
    order: 4,
    titleAr: 'المحاضرة 4: الضمائر (البارزة والمستترة)، إعراب الفعل المضارع، وفنون التعبير الكتابي',
    titleEn: 'Lecture 4: Pronouns (Explicit & Latent), Present Tense Inflexion & Creative Writing',
    subtitleAr: 'تقسيم الضمائر (منفصلة، متصلة، مستترة)، حالات إعراب الفعل المضارع (الرفع، النصب، الجزم)، وفنون كتابة المذكرات والرسائل.',
    subtitleEn: 'Pronoun classifications, present tense mood inflection (indicative, subjunctive, jussive), and functional writing.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف السادس الابتدائي - لغتي العربية (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 6 / Primary 6 - Arabic Language (Edu 2.0)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'المحور الثاني: مهارات النحو والتعبير الكتابي',
    unitTitleEn: 'Theme 2: Syntax & Functional Writing Skills',
    lessonNumberAr: 'الدرس 4: الضمائر وإعراب الفعل المضارع',
    lessonNumberEn: 'Lesson 4: Pronouns & Verb Inflection',

    warmupHookAr: 'عندما تقول: "أنا أحب القراءة"، فالضمير (أنا) ظاهر وظاهر لكل عين. ولكن عندما تقول لصديقك: "اقرأ هذا الكتاب"، أين ذهب الفاعل؟ إنه مستتر ومختبئ وراء الفعل كأنه سر خفي! كيف نكشف الضمائر المستترة؟ ومتى يرفع أو ينصب أو يجزم الفعل المضارع؟',
    warmupHookEn: 'In "I love reading", the pronoun "I" is explicit. But when saying "Read this book", where is the doer? It is latent/hidden behind the imperative! How do we identify latent pronouns and parse present tense moods?',

    learningOutcomesAr: [
      'أن يصنف الطالب الضمائر إلى بارزة (منفصلة كضمائر المتكلم والمخاطب والغائب، ومتصلة بالاسم والفعل) ومستترة (مقدرة).',
      'أن يحدد تقدير الضمير المستتر من سياق الجملة (أنا، نحن، أنتَ، هو، هي).',
      'أن يوضح حالات إعراب الفعل المضارع الثلاث: يرفع إذا لم يسبقه ناصب ولا جازم، ينصب إذا سبقته أداة نصب (أن، لن، كي، حتى، لام التعليل)، ويجزم إذا سبقته أداة جزم (لم، لا الناهية، لام الأمر).',
      'أن يطبق مهارات التعبير الكتابي في كتابة مذكرات يومية ورسالة رسمية بأسلوب سردي سليم ومترابط.'
    ],
    learningOutcomesEn: [
      'Classify pronouns into explicit (detached/attached) and latent (implied).',
      'Infer latent pronouns from contextual verbs (Ana, Nahnu, Anta, Huwa, Hiya).',
      'Master the three present tense moods: indicative, subjunctive (after An, Lan, Kay, Hatta, Li-), jussive (after Lam, La an-Nahiyah, Li-).',
      'Apply functional writing structures: daily diaries and formal correspondence.'
    ],

    vocabulary: [
      {
        termAr: 'الضمير المستتر (Latent / Hidden Pronoun)',
        termEn: 'Latent Pronoun (Mustatir)',
        definitionAr: 'ضمير ليس له صورة منطوقة أو مكتوبة في اللفظ، وإنما يُفهم ويُقدر في الذهن من خلال صيغة الفعل.',
        definitionEn: 'An unwritten, unspoken pronoun implicitly embedded in verb inflection.'
      },
      {
        termAr: 'أدوات نصب المضارع (Subjunctive Particles)',
        termEn: 'Subjunctive Particles',
        definitionAr: 'حروف تدخل على الفعل المضارع فتجعله منصوباً وعلامة نصبه الفتحة: (أَنْ، لَنْ، كَيْ، حَتَّى، لَامُ التَّعْلِيل).',
        definitionEn: 'Particles that shift the following present verb into the subjunctive mood with Fatha.'
      },
      {
        termAr: 'أدوات جزم المضارع (Jussive Particles)',
        termEn: 'Jussive Particles',
        definitionAr: 'أدوات تجزم فعلاً مضارعاً واحداً وعلامة جزمه السكون: (لَمْ، لَا النَّاهِيَة، لَامُ الأَمْر).',
        definitionEn: 'Particles shifting a single present verb into jussive mood with Sukun.'
      },
      {
        termAr: 'المذكرات اليومية (Daily Diaries)',
        termEn: 'Daily Diary Writing',
        definitionAr: 'فن تعبيري يسجل فيه الكاتب أحداثاً يومية مهمة مر بها، محددة باليوم والتاريخ والزمان والمشاعر الشخصية.',
        definitionEn: 'Expressive functional writing chronicling significant personal events with date, time, and reflections.'
      }
    ],

    keyConceptsAr: [
      'الضمائر البارزة تنقسم إلى منفصلة (تستقل بنفسها) ومتصلة (تتصل بآخر الكلمة كالتاء والكاف والهاء ونا).',
      'الفعل المضارع معرب: أصله مرفوع بالضمة (يكتبُ)، وإذا سبق بناصب نصب بالفتحة (لن يكتبَ)، وإذا سبق بجازم جزم بالسكون (لم يكتبْ).',
      'الفرق بين (لا الناهية) و(لا النافية): الناهية تطلب الكف عن الفعل وتجزم المضارع (لا تكذبْ)، والنافية تخبر بعدم وقوع الفعل ويبقى المضارع مرفوعاً (محمدٌ لا يكذبُ).'
    ],
    keyConceptsEn: [
      'Explicit pronouns are detached (stand alone) or attached (suffixes).',
      'Present tense moods: Default Indicative (Damma: Yaktubu), Subjunctive (Fatha: Lan Yaktuba), Jussive (Sukun: Lam Yaktub).',
      'Contrast Prohibitive La (demands stopping, jussive: La Takdhíb) vs Negative La (informs non-action, indicative: La Yakdhibu).'
    ],

    summaryAr: 'شرحنا في هذا الدرس منظومة الضمائر البارزة والمستترة، وأحكام إعراب الفعل المضارع رفعاً ونصباً وجزماً مع أدواتها، وتطبيقات كتابة المذكرات اليومية والرسائل.',
    summaryEn: 'We learned explicit and implicit pronouns, present tense mood inflection (indicative, subjunctive, jussive), and practical diary writing.',

    mainContentAr: `
### 1. أقسام الضمائر في اللغة العربية
1. **الضمائر البارزة (الظاهرة في النطق والكتابة):**
   - **المنفصلة:** تستقل بنفسها في النطق (ضمائر المتكلم: أنا، نحن؛ المخاطب: أنتَ، أنتِ، أنتما، أنتم، أنتن؛ الغائب: هو، هي، هما، هم، هن).
   - **المتصلة:** لا تنطق وحدها وتتصل بكلمة أخرى (تاء الفاعل، نون النسوة، نا الفاعلين، كاف الخطاب، هاء الغيبة، ياء المتكلم).
2. **الضمائر المستترة (المقدرة في الذهن):**
   - نقدرها حسب الفعل:
     - (أذاكرُ بجد) $\\implies$ الفاعل ضمير مستتر تقديره **(أنا)**.
     - (نلعبُ بالكرة) $\\implies$ الفاعل ضمير مستتر تقديره **(نحن)**.
     - (اكتبْ الدرسَ) $\\implies$ الفاعل ضمير مستتر وجوباً تقديره **(أنتَ)**.
     - (المعلمُ يشرحُ) $\\implies$ الفاعل ضمير مستتر جوازاً تقديره **(هو)**.

---

### 2. إعراب الفعل المضارع (الرفع، النصب، الجزم)
الفعل المضارع صحيح الآخر له ثلاث حالات إعرابية:
1. **الرفع بالضمة:** إذا لم تسبقه أي أداة نصب أو جزم:
   - مثال: **يساعدُ** الغنيُّ الفقراءَ (يساعد: فعل مضارع مرفوع وعلامة رفعه الضمة الظاهرة).
2. **النصب بالفتحة:** إذا سبقته إحدى **أدوات النصب (أنْ، لنْ، كي، حتى، لام التعليل)**:
   - مثال: يجب **أنْ تجتهدَ** (تجتهد: فعل مضارع منصوب بأن وعلامة نصبه الفتحة الظاهرة).
   - مثال: ذاكرْ **لتنجحَ** (لتنجح: اللام لام التعليل، وتنجح فعل مضارع منصوب بالفتحة).
3. **الجزم بالسكون:** إذا سبقته إحدى **أدوات الجزم (لمْ، لا الناهية، لام الأمر)**:
   - مثال: **لمْ يقصرْ** محمد في واجبه (يقصر: فعل مضارع مجزوم بلم وعلامة جزمه السكون).
   - مثال: **لا تؤجلْ** عمل اليوم إلى الغد (تؤجل: فعل مضارع مجزوم بلا الناهية وعلامة جزمه السكون).

---

### 3. فن كتابة المذكرات اليومية (التعبير الكتابي)
لكتابة مذكرات يومية ناجحة، يجب الالتزام بالعناصر التالية:
1. **الزمان والمكان:** تدوين اليوم والتاريخ والساعة والمكان بدقة.
2. **عنوان المذكرة:** عنوان جذاب يعبر عن الحدث الرئيسي.
3. **الجملة الافتتاحية:** تمهد للموضوع وتصف الشعور العام.
4. **سرد الأحداث:** بتسلسل زمني منطقي وبصيغة المتكلم.
5. **الجملة الختامية:** تلخص الدرس المستفاد أو المشاعر والانطباعات.
`,
    assessment: {
      id: 'assess-arb6-4',
      titleAr: 'تقييم المحاضرة 4: الضمائر وإعراب الفعل المضارع',
      titleEn: 'Assessment 4: Pronouns & Verb Inflection',
      passingScore: 80,
      questions: [
        {
          id: 'q-a6-4-1',
          textAr: 'ما إعراب الفعل "تهملْ" في جملة: «لا تهملْ واجباتك المدرسية»؟',
          textEn: 'What is the parsing of "Tuhmil" in: «لا تهملْ واجباتك المدرسية»?',
          optionsAr: [
            'فعل مضارع مرفوع بالضمة',
            'فعل مضارع مجزوم بلا الناهية وعلامة جزمه السكون',
            'فعل مضارع منصوب بلا وعلامة نصبه الفتحة',
            'فعل ماضٍ مبني على السكون'
          ],
          optionsEn: [
            'Present verb indicative with Damma',
            'Present verb jussive after prohibitive La with Sukun',
            'Present verb subjunctive with Fatha',
            'Past verb based on Sukun'
          ],
          correctIndex: 1,
          conceptTestedAr: 'جزم الفعل المضارع بلا الناهية',
          conceptTestedEn: 'Jussive Present Verb with Prohibitive La',
          difficulty: 'easy',
          explanationAr: '(لا) هنا ناهية تدل على طلب الامتناع وتجزم الفعل المضارع بالسكون.',
          explanationEn: 'Prohibitive La demands abstention, making the present verb jussive with Sukun.'
        },
        {
          id: 'q-a6-4-2',
          textAr: 'ما تقدير الضمير المستتر للفاعل في جملة: «نحافظُ على نظافة مدرستنا»؟',
          textEn: 'What is the implied latent subject in: «نحافظُ على نظافة مدرستنا»?',
          optionsAr: ['أنا', 'نحن', 'هو', 'أنت'],
          optionsEn: ['Ana (I)', 'Nahnu (We)', 'Huwa (He)', 'Anta (You)'],
          correctIndex: 1,
          conceptTestedAr: 'تقدير الضمير المستتر مع نون المضارعة',
          conceptTestedEn: 'Inferring Latent Pronoun for 1st Person Plural',
          difficulty: 'easy',
          explanationAr: 'الفعل المضارع المبدوء بالنون (نحافظ) فاعله ضمير مستتر وجوباً تقديره (نحن).',
          explanationEn: 'Present verbs prefixed with Noon have an obligatory latent pronoun estimated as "Nahnu" (We).'
        },
        {
          id: 'q-a6-4-3',
          textAr: 'أي من الحروف التالية ينصب الفعل المضارع؟',
          textEn: 'Which of the following particles sets the present verb to subjunctive?',
          optionsAr: ['لَمْ', 'لَا النَّاهِيَة', 'لَنْ', 'لَامُ الأَمْر'],
          optionsEn: ['Lam', 'La an-Nahiyah', 'Lan', 'Lam al-Amr'],
          correctIndex: 2,
          conceptTestedAr: 'أدوات نصب وجزم المضارع',
          conceptTestedEn: 'Subjunctive vs Jussive Particles',
          difficulty: 'easy',
          explanationAr: '(لَنْ) من أدوات نصب المضارع، بينما لم ولا الناهية ولام الأمر من أدوات الجزم.',
          explanationEn: 'Lan is a subjunctive accusative particle; the others are jussive.'
        }
      ]
    }
  }
];
