import type { Lecture } from '../types';

// ============================================================================
// PRIMARY ARABIC — GRADE 1 (لغة عربية الصف الأول الابتدائي - نظام التعليم 2.0 المعتمد)
// Official Grade 1 / Primary 1 Egyptian Ministry Curriculum Alignment (Edu 2.0 - تواصل):
// Lecture 1: المحور الأول: من أكون؟ - أصوات الحروف والحركات القصيرة وأسماء الإشارة (هذا / هذه)
// Lecture 2: المحور الأول: الحركات الطويلة (المد بالألف والواو والياء)، ياء الملكية وضمائر المتكلم (أنا / نحن)
// Lecture 3: المحور الثاني: العالم من حولي - السكون، الشدة، التنوين واللام الشمسية واللام القمرية
// Lecture 4: المحور الثاني: ضمائر المخاطب (أنتَ / أنتِ)، ضمائر الغائب (هو / هي) والتذكير والتأنيث
// ============================================================================

export const PRIMARY_ARABIC_G1_LECTURES: Lecture[] = [
  // ── LECTURE 1: THEME 1 (من أكون؟) - SHORT VOWELS & DEMONSTRATIVE PRONOUNS ──
  {
    id: 'p1-ar-1',
    order: 1,
    titleAr: 'المحاضرة 1: المحور الأول (من أكون؟): أصوات الحروف وحركاتها القصيرة، وأسماء الإشارة (هذا / هذه)',
    titleEn: 'Lecture 1: Theme 1 (Who Am I?): Letter Sounds, Short Vowels & Demonstratives (This)',
    subtitleAr: 'تجريد الحروف الهجائية، التعرف على الحركات القصيرة (الفتحة، الضمة، الكسرة)، أشكال الحروف في أول ووسط وآخر الكلمة، واستخدام اسم الإشارة (هذا / هذه)',
    subtitleEn: 'Learn letter phonics, short vowels (Fatha, Damma, Kasra), letter positions, and simple demonstratives (Hatha / Hathihi).',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — الموضوع الأول: أهلي وبيتي',
    unitTitleEn: 'Theme 1: Who Am I? — Topic 1: My Family & Home',
    lessonNumberAr: 'الدرس 1: الحركات القصيرة وأسماء الإشارة',
    lessonNumberEn: 'Lesson 1: Short Vowels & Simple Demonstratives',

    keyConceptsAr: [
      'الحركات القصيرة الثلاث: الفتحة ( َ ) نفتح الفم لأعلى، الضمة ( ُ ) نضم الشفتين، والكسرة ( ِ ) نخفض الفك لأسفل.',
      'أشكال الحرف: شكل الحرف يتغير حسب موضعه (أول الكلمة متصل مثل: بَـ ، وسط الكلمة متصل من الطرفين: ـبـ ، آخر الكلمة: ـب أو منفصل ب).',
      'اسم الإشارة (هذا): نشير به إلى المفرد المذكر (هذا ولدٌ، هذا قلمٌ، هذا أبي).',
      'اسم الإشارة (هذه): نشير بها إلى المفرد المؤنث (هذه بنتٌ، هذه قطةٌ، هذه أمي).'
    ],
    keyConceptsEn: [
      'Three short vowels: Fatha (open mouth), Damma (rounded lips), and Kasra (lowered jaw).',
      'Letter shapes: Initial, medial, and final connected/isolated forms.',
      'Demonstrative pronoun "هذا" (Hatha) for masculine singular nouns.',
      'Demonstrative pronoun "هذه" (Hathihi) for feminine singular nouns.'
    ],

    conceptMapAr: [
      'صوت الحرف ➔ حركات قصيرة (فتحة، ضمة، كسرة) ➔ تكوين كلمات بسيطة ➔ الإشارة بـ (هذا للمذكر / هذه للمؤنث)'
    ],
    conceptMapEn: [
      'Letter Phonics ➔ Short Vowels (a, u, i) ➔ Simple Words ➔ Demonstratives (This m/f)'
    ],

    learningOutcomesAr: [
      'أن يميز التلميذ بين أصوات الحروف بحركاتها القصيرة (الفتحة، الضمة، الكسرة) سماعاً ونطقاً.',
      'أن يحدد مواضع الحروف ورسمها الصحيح في أول ووسط وآخر الكلمة.',
      'أن يستخدم اسم الإشارة (هذا) مع المذكر و(هذه) مع المؤنث في جمل تامة بصورة صحيحة.'
    ],
    learningOutcomesEn: [
      'Distinguish short vowel sounds (Fatha, Damma, Kasra) accurately in speech.',
      'Recognize initial, medial, and final letter shapes.',
      'Use demonstratives "هذا" and "هذه" correctly with masculine and feminine nouns.'
    ],

    vocabulary: [
      {
        termAr: 'الفَتْحَة ( َ )',
        termEn: 'Fatha',
        definitionAr: 'خط صغير مائل فوق الحرف، يفتح فمه عند نطقه بصوت قصير (أَ ، بَ ، تَ).'
      },
      {
        termAr: 'الضَّمَّة ( ُ )',
        termEn: 'Damma',
        definitionAr: 'واو صغيرة فوق الحرف، نضم الشفتين عند نطقها بصوت قصير (أُ ، بُ ، تُ).'
      },
      {
        termAr: 'الكَسْرَة ( ِ )',
        termEn: 'Kasra',
        definitionAr: 'خط صغير مائل تحت الحرف، نخفض الفك عند نطقه بصوت قصير (إِ ، بِ ، تِ).'
      },
      {
        termAr: 'هَذَا / هَذِهِ',
        termEn: 'This (M / F)',
        definitionAr: 'أسماء إشارة نشير بها إلى الأشياء والأشخاص القريبين منا (هذا للمذكر، هذه للمؤنث).'
      }
    ],

    warmupHookAr: 'مرحباً بصديقنا البطل في الصف الأول الابتدائي! 🌟 عندما تريد أن تشير إلى صديقك أو لعبتك الجميلة ماذا تقول؟ تقول: "هذا أخي" أو "هذه لعبتي"! تعال لنتعرف معاً كيف نصنع أصوات الحروف بالحركات السحرية الثلاث (الفتحة والضمة والكسرة) ونشير إلى كل شيء حولنا!',
    warmupHookEn: 'Welcome little champion! When you point to your brother or toy, you say "This is my brother" (هذا) or "This is my toy" (هذه). Let us discover the three magic vowels and learn how to point to everything around us!',

    mainContentAr: `
### 1. الحركات القصيرة الثلاث (أصوات الحروف السحرية)
* **1. الفتحة ( َ ):** تُكتب فوق الحرف ونفتح فمنا قليلاً عند نطقها:
  * **أَ**سد ، **بَـ**ـطة ، **تَـ**ـمر ، **جَـ**ـمل.
* **2. الضمة ( ُ ):** تُكتب فوق الحرف ونضم شفتينا كالدائرة:
  * **أُ**مّي ، **بُـ**ـرج ، **تُـ**ـفاح ، **جُـ**ـندي.
* **3. الكسرة ( ِ ):** تُكتب تحت الحرف ونبتسم ونخفض فكنا لأسفل:
  * **إِ**برة ، **بِـ**ـنت ، **تِـ**ـمساح ، **جِـ**ـدار.

---

### 2. كيف نكتب الحرف في الكلمة؟
* **أول الكلمة:** يمد يده ليمسك الحرف التالي (مثل: **بَـ**ـلَد).
* **وسط الكلمة:** يمد يديه الاثنتين ليمسك ما قبله وما بعده (مثل: حَـ**ـبْـ**ـل).
* **آخر الكلمة:** يغلق شكله الجميل (مثل: كَتَـ**ـبَ** أو دُبّ).

---

### 3. أسماء الإشارة الذكية (هَذَا / هَذِهِ)
* نستخدم **هَذَا** مع المذكر (الولد والشيء المذكر):
  * **هَذَا** وَلَدٌ نَشِيطٌ.
  * **هَذَا** قَلَمِي.
  * **هَذَا** كِتَابٌ مُفِيدٌ.
* نستخدم **هَذِهِ** مع المؤنث (البنت والشيء المؤنث):
  * **هَذِهِ** بِنْتٌ مُهَذَّبَةٌ.
  * **هَذِهِ** أُمِّي الحَبِيبَةُ.
  * **هَذِهِ** شَجَرَةٌ جَمِيلَةٌ.
    `,
    mainContentEn: `
### 1. The Three Short Vowels
* **Fatha ( َ ):** Open mouth sound (a) ➔ أَسد (Asad - Lion).
* **Damma ( ُ ):** Rounded lips sound (u) ➔ أُمّ (Umm - Mother).
* **Kasra ( ِ ):** Smile/lowered jaw sound (i) ➔ إِبرة (Ibrah - Needle).

### 2. Demonstrative Pronouns: هذا (Hatha) & هذه (Hathihi)
* **هذا:** For masculine nouns ➔ هذا ولد (This is a boy).
* **هذه:** For feminine nouns ➔ هذه بنت (This is a girl).
    `,

    diagramType: 'grammar_tree_diagram',
    diagramData: {
      type: 'vowels_demonstratives_chart',
      title: 'مخطط الحركات القصيرة وأسماء الإشارة للصف الأول الابتدائي',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <!-- 3 Vowel Boxes -->
        <rect x="20" y="25" width="105" height="60" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="72" y="48" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">الفَتْحَة ( َ )</text>
        <text x="72" y="70" fill="#cbd5e1" font-size="11" text-anchor="middle">أَسَد 🦁</text>

        <rect x="145" y="25" width="105" height="60" rx="8" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="197" y="48" fill="#f43f5e" font-size="14" font-weight="bold" text-anchor="middle">الضَّمَّة ( ُ )</text>
        <text x="197" y="70" fill="#cbd5e1" font-size="11" text-anchor="middle">أُمِّي ❤️</text>

        <rect x="270" y="25" width="110" height="60" rx="8" fill="rgba(52, 211, 153, 0.15)" stroke="#34d399" stroke-width="1.5"/>
        <text x="325" y="48" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">الكَسْرَة ( ِ )</text>
        <text x="325" y="70" fill="#cbd5e1" font-size="11" text-anchor="middle">إِبْرَة 🪡</text>

        <!-- Demonstratives Row -->
        <rect x="30" y="105" width="160" height="55" rx="8" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="110" y="128" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">هَذَا 👦</text>
        <text x="110" y="148" fill="#e2e8f0" font-size="11" text-anchor="middle">للمفرد المذكر (هذا ولد)</text>

        <rect x="210" y="105" width="160" height="55" rx="8" fill="rgba(192, 132, 252, 0.15)" stroke="#c084fc" stroke-width="1.5"/>
        <text x="290" y="128" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">هَذِهِ 👧</text>
        <text x="290" y="148" fill="#e2e8f0" font-size="11" text-anchor="middle">للمفرد المؤنث (هذه بنت)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'نشاط تدريبي: اختيار اسم الإشارة المناسب (هذا / هذه)',
        titleEn: 'Interactive Practice: Choosing (Hatha / Hathihi)',
        problemAr: 'ضع اسم الإشارة المناسب (هَذَا / هَذِهِ) مكان النقط في الجمل الآتية: 1) ..... أَبِي البَطَلُ. 2) ..... مَدْرَسَتِي النَّظِيفَةُ.',
        problemEn: 'Fill in the blanks with (هذا / هذه): 1) ... my father. 2) ... my clean school.',
        stepsAr: [
          'الخطوة 1: ننظر إلى الكلمة الأولى (أَبِي) ➔ (أبي) مفرد مذكر، إذن نختار: **هَذَا** (هَذَا أَبِي).',
          'الخطوة 2: ننظر إلى الكلمة الثانية (مَدْرَسَتِي) ➔ (مدرستي) مؤنثة تنتهي بتاء مربوطة، إذن نختار: **هَذِهِ** (هَذِهِ مَدْرَسَتِي).'
        ],
        stepsEn: [
          'Step 1: "أبي" (father) is masculine singular ⟹ Use "هذا".',
          'Step 2: "مدرستي" (school) is feminine ⟹ Use "هذه".'
        ],
        finalAnswerAr: '1) هَذَا أَبِي. 2) هَذِهِ مَدْرَسَتِي.',
        finalAnswerEn: '1) هذا أبي. 2) هذه مدرستي.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1ar-1',
        problemAr: 'صل الكلمة بالحركة الصحيحة لحرف الميم (مَـ / مُـ / مِـ): 1) مِـقَصّ  2) مَـوز  3) مُـعَلِّم',
        problemEn: 'Match the word to the initial short vowel of Meem (ma / mu / mi).',
        solutionStepsAr: [
          '1) مِـقَصّ ➔ حركة الميم هي الكسرة (مِـ).',
          '2) مَـوز ➔ حركة الميم هي الفتحة (مَـ).',
          '3) مُـعَلِّم ➔ حركة الميم هي الضمة (مُـ).'
        ],
        finalAnswerAr: 'مِـقَصّ (كسرة) • مَـوز (فتحة) • مُـعَلِّم (ضمة)'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1ar-1',
        questionAr: 'اختر اسم الإشارة الصحيح للكلمة: "....... زَهْرَةٌ جَمِيلَةٌ"',
        questionEn: 'Choose the correct demonstrative for: "... beautiful flower"',
        optionsAr: ['هَذِهِ', 'هَذَا', 'أَنَا', 'نَحْنُ'],
        optionsEn: ['Hathihi (هذه)', 'Hatha (هذا)', 'Ana (أنا)', 'Nahnu (نحن)'],
        correctIndex: 0,
        explanationAr: 'كلمة (زهرة) مفردة مؤنثة تنتهي بتاء مربوطة، فنستخدم معها اسم الإشارة (هَذِهِ).',
        explanationEn: '"زهرة" is feminine singular, so we point to it with "هذه".'
      }
    ],

    assessment: {
      id: 'quiz-p1-ar1',
      titleAr: 'اختبار بطل القراءة: الحركات القصيرة وأسماء الإشارة',
      titleEn: 'Grade 1 Phonics & Demonstratives Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-ar1-1',
          textAr: 'ما الحركة القصيرة الموجودة على حرف الألف في كلمة (أُسْرَتِي)؟',
          textEn: 'What is the short vowel on Alif in (أُسْرَتِي)?',
          optionsAr: ['الضَّمَّة ( ُ )', 'الفَتْحَة ( َ )', 'الكَسْرَة ( ِ )', 'السكون ( ْ )'],
          optionsEn: ['Damma (u)', 'Fatha (a)', 'Kasra (i)', 'Sukun'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز حركة الضمة',
          conceptTestedEn: 'Damma Vowel Recognition',
          explanationAr: 'في كلمة (أُسْرَتِي) ننطق الألف بضم الشفتين (أُ)، إذن الحركة هي الضمة.',
          explanationEn: 'The mouth forms rounded lips (u), which is Damma.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar1-2',
          textAr: 'نقول: "....... قَلَمِي الرَّاصِعُ"',
          textEn: 'We say: "... my pencil"',
          optionsAr: ['هَذَا', 'هَذِهِ', 'نَحْنُ', 'أَنْتِ'],
          optionsEn: ['Hatha (هذا)', 'Hathihi (هذه)', 'Nahnu (نحن)', 'Anti (أنتِ)'],
          correctIndex: 0,
          conceptTestedAr: 'استخدام اسم الإشارة هذا للمذكر',
          conceptTestedEn: 'Demonstrative Hatha for Masculine',
          explanationAr: '(قلمي) اسم مذكر، فنشير إليه بـ (هَذَا).',
          explanationEn: '"قلمي" is masculine singular, so we use "هذا".',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar1-3',
          textAr: 'أي من الكلمات الآتية تبدأ بحرف مكسور (تحته كسرة ِ)؟',
          textEn: 'Which of the following words starts with Kasra (i)?',
          optionsAr: ['كِـتَابٌ', 'كُـرَةٌ', 'كَلْبٌ', 'قَمَرٌ'],
          optionsEn: ['كِـتَابٌ (Book)', 'كُـرَةٌ (Ball)', 'كَلْبٌ (Dog)', 'قَمَرٌ (Moon)'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز حركة الكسرة في أول الكلمة',
          conceptTestedEn: 'Kasra Word Initial Recognition',
          explanationAr: 'كلمة (كِـتَاب) تبدأ بالكاف المكسورة (كِـ).',
          explanationEn: '"كِـتاب" starts with the Kasra sound (ki).',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: THEME 1 (من أكون؟) - LONG VOWELS (MADD), YAA OF POSSESSION & PRONOUNS (أنا / نحن) ──
  {
    id: 'p1-ar-2',
    order: 2,
    titleAr: 'المحاضرة 2: الحركات الطويلة (حروف المد الثلاثة: ا ، و ، ي)، ياء الملكية، وضمائر المتكلم (أنا / نحن)',
    titleEn: 'Lecture 2: Long Vowels (Madd Alif, Waw, Yaa), Possessive Yaa & Pronouns (Ana / Nahnu)',
    subtitleAr: 'التمييز بين الصوت القصير والصوت الطويل، مد الألف والواو والياء، تحديد الحرف الممدود، ياء الملكية (بيتي/كتابي)، واستخدام ضمير المتكلم (أنا / نحن)',
    subtitleEn: 'Master long vowels (Madd), identify lengthened letters, possessive Yaa suffix, and personal pronouns (Ana / Nahnu).',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — الموضوع الثاني: مجتمعي ومدرستي',
    unitTitleEn: 'Theme 1: Who Am I? — Topic 2: My Community & School',
    lessonNumberAr: 'الدرس 2: المدود الثلاثة وضمائر المتكلم',
    lessonNumberEn: 'Lesson 2: The Three Long Vowels & Speaking Pronouns',

    keyConceptsAr: [
      'المد بالألف (ـا / ا): صوت فتحة طويلة ويسبقه حرف مفتوح يُسمى (الحرف الممدود) مثل: بَاب ، نَار.',
      'المد بالواو (ـو / و): صوت ضمة طويلة ويسبقه حرف مضموم يُسمى (الحرف الممدود) مثل: نُور ، عُصْفُور.',
      'المد بالياء (ـي / ي): صوت كسرة طويلة ويسبقه حرف مكسور يُسمى (الحرف الممدود) مثل: تِين ، سَرِيع.',
      'ياء الملكية (ـي): تاء أو ياء تتصل بآخر الاسم لتدل على أن الشيء ملك لي وحدي (كِتَاب ➔ كِتَابِي ، أُمّ ➔ أُمِّي).',
      'ضمير المتكلم (أَنَا): للمفرد المذكر والمؤنث (أنا ولدٌ ، أنا بنتٌ).',
      'ضمير المتكلم (نَحْنُ): للجمع من اثنين فأكثر (نحن أولادٌ ، نحن نقرأُ).'
    ],
    keyConceptsEn: [
      'Madd with Alif: Long open vowel preceded by Fatha.',
      'Madd with Waw: Long rounded vowel preceded by Damma.',
      'Madd with Yaa: Long lowered vowel preceded by Kasra.',
      'Possessive Yaa (ياء الملكية): Suffix indicating "my" (Kitabi = My book).',
      'Speaking Pronoun "أنا" (I am) for singular masculine/feminine.',
      'Speaking Pronoun "نحن" (We are) for plural.'
    ],

    conceptMapAr: [
      'حرف المد (ا ، و ، ي) ➔ الحرف الممدود الذي قبله ➔ ياء الملكية (حاجتي ملكي) ➔ ضمائر المتكلم (أنا للمفرد / نحن للجمع)'
    ],
    conceptMapEn: [
      'Madd Letters (Alif, Waw, Yaa) ➔ Lengthened Letter ➔ Possessive Yaa ➔ Pronouns (Ana / Nahnu)'
    ],

    learningOutcomesAr: [
      'أن يميّز التلميذ بين الحركة القصيرة والحركة الطويلة نطقاً وكتابة.',
      'أن يستخرج حرف المد والحرف الممدود من الكلمات بدقة.',
      'أن يضيف ياء الملكية للكلمات ليعبر عن ممتلكاته بصورة صحيحة.',
      'أن يوظف ضميري المتكلم (أنا / نحن) في جمل صحيحة المعنى.'
    ],
    learningOutcomesEn: [
      'Distinguish short vs long vowel duration in speech and reading.',
      'Extract Madd letter and the preceding lengthened consonant accurately.',
      'Add possessive Yaa suffix to nouns correctly.',
      'Use pronouns "أنا" and "نحن" accurately in basic sentences.'
    ],

    vocabulary: [
      {
        termAr: 'حَرْفُ المَدّ',
        termEn: 'Madd Letter',
        definitionAr: 'أحد حروف المد الثلاثة (الألف، الواو، الياء) ويكون خالياً من الحركات ويطيل صوت الحرف الذي قبله.'
      },
      {
        termAr: 'الحَرْفُ المَمْدُود',
        termEn: 'Lengthened Letter',
        definitionAr: 'الحرف الذي يقع قبل حرف المد مباشرة وتظهر عليه حركة متجانسة مع المد (فتحة قبل الألف، ضمة قبل الواو، كسرة قبل الياء).'
      },
      {
        termAr: 'يَاءُ المِلْكِيَّة',
        termEn: 'Possessive Yaa',
        definitionAr: 'ياء تُضاف في آخر الأسماء لتدل على أن الشيء ملك للمتكلم (قلمي، بيتي، معلمي).'
      }
    ],

    warmupHookAr: 'استمع إلى الفرق العجيب بين هاتين الكلمتين: (بَـرْد) و (بَـارِد)! في الأولى نطقنا الباء بسرعة كغمضة العين (بَـ)، لكن في الثانية مددنا صوتنا كأننا نغني (بَـا)! هذا الامتداد الجميل سببه حرف المد السحري! تعال نكتشف أسرار المدود الثلاثة وضمائر المتكلم!',
    warmupHookEn: 'Listen to the difference between "Bard" (cold) and "Baarid"! The second word stretches the sound like a melody (Baa). That is the magic of long vowels (Madd)!',

    mainContentAr: `
### 1. حروف المد الثلاثة (الأصدقاء الثلاثة)
1. **المد بالألف ( ا ):**
   * يحب الفتحة ويأتي قبله حرف مفتوح: قَـ**ـا**لَ ، نَـ**ـا**ر ، بَـ**ـا**ب.
   * الحرف الممدود هو الحرف الذي قبل الألف (في "بَاب" الحرف الممدود هو الباء "بَـ").
2. **المد بالواو ( و ):**
   * يحب الضمة ويأتي قبله حرف مضموم: نُـ**ـو**ر ، سُـ**ـو**ر ، خُـ**ـو**خ.
   * الحرف الممدود هو الحرف الذي قبل الواو (في "نُور" الحرف الممدود هو النون "نُـ").
3. **المد بالياء ( ي ):**
   * يحب الكسرة ويأتي قبله حرف مكسور: تِـ**ـي**ن ، فِـ**ـي**ل ، سَرِ**يـ**ـع.
   * الحرف الممدود هو الحرف الذي قبل الياء (في "فِيل" الحرف الممدود هو الفاء "فِـ").

---

### 2. ياء الملكية (حاجتي الخاصة بي)
* عندما أريد أن أقول إن هذا الشيء ملكي أضيف في آخره حرف الياء:
  * قَلَم ➔ قَلَمِـ**ـي**
  * كِتَاب ➔ كِتَابِـ**ـي**
  * بَيْت ➔ بَيْتِـ**ـي**
  * مَدْرَسَة ➔ مَدْرَسَتِـ**ـي** (تتحول التاء المربوطة لتاء مفتوحة).

---

### 3. ضمائر المتكلم (أَنَا / نَحْنُ)
* **أَنَا:** عندما يتكلم شخص واحد (مفرد):
  * **أَنَا** أُحِبُّ أُمِّي وَأَبِي.
  * **أَنَا** تِلْمِيذٌ مُجْتَهِدٌ.
* **نَحْنُ:** عندما يتكلم اثنان أو مجموعة كبيرة (جمع):
  * **نَحْنُ** نَلْعَبُ فِي الحَدِيقَةِ.
  * **نَحْنُ** نُحِبُّ مَدْرَسَتَنَا.
    `,
    mainContentEn: `
### 1. The Three Long Vowels (Madd)
* **Alif Madd (ا):** Preceded by Fatha ➔ باب (Door - Baab).
* **Waw Madd (و):** Preceded by Damma ➔ نور (Light - Noor).
* **Yaa Madd (ي):** Preceded by Kasra ➔ فيل (Elephant - Feel).

### 2. Possessive Yaa (ياء الملكية)
* قلم (Pen) ➔ قلمي (My pen).

### 3. Personal Pronouns (أنا / نحن)
* **أنا (Ana):** I ➔ أنا أحب القراءة (I love reading).
* **نحن (Nahnu):** We ➔ نحن نلعب (We play).
    `,

    diagramType: 'grammar_tree_diagram',
    diagramData: {
      type: 'madd_pronouns_chart',
      title: 'خريطة المدود الثلاثة وضمائر المتكلم',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <!-- 3 Madd Branches -->
        <rect x="20" y="20" width="105" height="65" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="72" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">مد بالألف ( ا )</text>
        <text x="72" y="68" fill="#e2e8f0" font-size="11" text-anchor="middle">بَـاب 🚪</text>

        <rect x="145" y="20" width="105" height="65" rx="8" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="197" y="45" fill="#f43f5e" font-size="13" font-weight="bold" text-anchor="middle">مد بالواو ( و )</text>
        <text x="197" y="68" fill="#e2e8f0" font-size="11" text-anchor="middle">نُـور 💡</text>

        <rect x="270" y="20" width="110" height="65" rx="8" fill="rgba(52, 211, 153, 0.15)" stroke="#34d399" stroke-width="1.5"/>
        <text x="325" y="45" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">مد بالياء ( ي )</text>
        <text x="325" y="68" fill="#e2e8f0" font-size="11" text-anchor="middle">فِـيل 🐘</text>

        <!-- Speaking Pronouns -->
        <rect x="30" y="105" width="160" height="55" rx="8" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="110" y="128" fill="#fbbf24" font-size="14" font-weight="bold" text-anchor="middle">أَنَا (للمفرد) 🙋</text>
        <text x="110" y="148" fill="#cbd5e1" font-size="10" text-anchor="middle">أَنَا أَرْسُمُ شَجَرَةً</text>

        <rect x="210" y="105" width="160" height="55" rx="8" fill="rgba(192, 132, 252, 0.15)" stroke="#c084fc" stroke-width="1.5"/>
        <text x="290" y="128" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">نَحْنُ (للجمع) 👥</text>
        <text x="290" y="148" fill="#cbd5e1" font-size="10" text-anchor="middle">نَحْنُ نَحْفَظُ النَّشِيدَ</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'نشاط تدريبي: استخراج حرف المد والحرف الممدود',
        titleEn: 'Interactive Practice: Identifying Madd & Lengthened Letter',
        problemAr: 'استخرج حرف المد والحرف الممدود من كلمة: (سَعِـيدٌ).',
        problemEn: 'Find Madd letter and lengthened consonant in (سَعِيد).',
        stepsAr: [
          'الخطوة 1: ننظر إلى الكلمة ونجد حرف الياء خالي من الحركات وقبله عين مكسورة (عِـ).',
          'الخطوة 2: حرف المد هو: **الياء ( ي )**.',
          'الخطوة 3: الحرف الممدود الذي يسبقه هو: **العين المكسورة ( عِـ )**.'
        ],
        stepsEn: [
          'Step 1: Notice Yaa without vowels preceded by Kasra on Ain (عِ).',
          'Step 2: Madd letter is Yaa (ي).',
          'Step 3: Lengthened letter is Ain (عِ).'
        ],
        finalAnswerAr: 'حرف المد هو (الياء)، والحرف الممدود هو (العين عِـ).',
        finalAnswerEn: 'Madd: Yaa (ي); Lengthened: Ain (عِ).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1ar-2',
        problemAr: 'ضع (أَنَا) أو (نَحْنُ) مكان النقط: 1) ..... أُحِبُّ أَنْ أَقْرَأَ. 2) ..... نَزْرَعُ الوَرْدَ.',
        problemEn: 'Fill in with (أنا / نحن): 1) ... love to read. 2) ... plant flowers.',
        solutionStepsAr: [
          '1) (أُحِبُّ) فعل يبدأ بالألف ويدل على مفرد ➔ نضع: **أَنَا** (أَنَا أُحِبُّ أَنْ أَقْرَأَ).',
          '2) (نَزْرَعُ) فعل يبدأ بالنون ويدل على جمع ➔ نضع: **نَحْنُ** (نَحْنُ نَزْرَعُ الوَرْدَ).'
        ],
        finalAnswerAr: '1) أَنَا أُحِبُّ أَنْ أَقْرَأَ. 2) نَحْنُ نَزْرَعُ الوَرْدَ.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1ar-2',
        questionAr: 'ما الكلمة التي تحتوي على مد بالألف ( ا )؟',
        questionEn: 'Which word contains Madd with Alif?',
        optionsAr: ['كِـتَـابٌ', 'كَلْبٌ', 'نُورٌ', 'فِيلٌ'],
        optionsEn: ['كِـتَـابٌ (Kitaab)', 'كَلْبٌ (Kalb)', 'نُورٌ (Noor)', 'فِيلٌ (Feel)'],
        correctIndex: 0,
        explanationAr: 'كلمة (كِـتَاب) تحتوي على مد بالألف والممدود هو حرف التاء المفتوح (تَـا).',
        explanationEn: '"كِـتَاب" contains Alif Madd following the open Ta letter.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-p1-ar2',
      titleAr: 'اختبار بطل القراءة: المدود وياء الملكية وضمائر المتكلم',
      titleEn: 'Grade 1 Long Vowels & Pronouns Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-ar2-1',
          textAr: 'في كلمة (عُصْـفُـورٌ)، نوع المد هو مد بـ:',
          textEn: 'In word (عُصْفُور), the Madd type is:',
          optionsAr: ['الوَاو ( و )', 'الأَلِف ( ا )', 'اليَاء ( ي )', 'لا يوجد مد'],
          optionsEn: ['Waw (و)', 'Alif (ا)', 'Yaa (ي)', 'No Madd'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد نوع المد بالواو',
          conceptTestedEn: 'Waw Madd Recognition',
          explanationAr: 'يوجد حرف واو خالي من الحركة مسبوق بفاء مضمومة (فُـو) إذن هو مد بالواو.',
          explanationEn: 'The word contains Waw preceded by Damma on Fa (fuu).',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar2-2',
          textAr: 'عند إضافة ياء الملكية لكلمة (أُمّ)، تصبح:',
          textEn: 'When adding possessive Yaa to (أم), it becomes:',
          optionsAr: ['أُمِّـي', 'أُمَّـتِي', 'أُمَّـهَات', 'أُمٌّ'],
          optionsEn: ['أُمِّـي (My mother)', 'أمتي', 'أمهات', 'أم'],
          correctIndex: 0,
          conceptTestedAr: 'إضافة ياء الملكية',
          conceptTestedEn: 'Possessive Yaa Suffix Application',
          explanationAr: 'نضيف الياء لتدل على الملكية فتصبح: أُمِّـي (أمي الحبيبة).',
          explanationEn: 'Adding possessive Yaa yields "أُمّي".',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar2-3',
          textAr: 'نقول: "....... تَلَامِيذٌ نَشِيطُونَ"',
          textEn: 'We say: "... active students"',
          optionsAr: ['نَحْنُ', 'أَنَا', 'هَذَا', 'هَذِهِ'],
          optionsEn: ['Nahnu (نحن)', 'Ana (أنا)', 'Hatha (هذا)', 'Hathihi (هذه)'],
          correctIndex: 0,
          conceptTestedAr: 'استخدام ضمير المتكلم للجمع نحن',
          conceptTestedEn: 'Plural Speaking Pronoun Nahnu',
          explanationAr: '(تلاميذ) جمع، وضمير المتكلم المناسب للجمع هو (نَحْنُ).',
          explanationEn: '"تلاميذ" is plural, so we use the plural pronoun "نحن".',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: THEME 2 (العالم من حولي) - SUKUN, SHADDAH, TANWEEN & SOLAR/LUNAR LAM ──
  {
    id: 'p1-ar-3',
    order: 3,
    titleAr: 'المحاضرة 3: المحور الثاني (العالم من حولي): المقطع الساكن (السكون)، الشدة، التنوين واللام الشمسية والقمرية',
    titleEn: 'Lecture 3: Theme 2 (The World Around Me): Sukun, Shaddah, Tanween & Solar/Lunar Lam',
    subtitleAr: 'نطق المقطع الساكن وقراءته، الشدة والتضعيف، أنواع التنوين الثلاثة (ضم، فتح، كسر)، وقراءة اللام الشمسية واللام القمرية بطلاقة',
    subtitleEn: 'Master Sukun syllables, consonant doubling (Shaddah), three Tanween types (an, un, in), and Solar vs Lunar Lam.',
    durationMinutes: 22,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — الموضوع الأول: مجسمات وبيئتي',
    unitTitleEn: 'Theme 2: The World Around Me — Topic 1: My Environment',
    lessonNumberAr: 'الدرس 3: السكون والشدة والتنوين واللامان',
    lessonNumberEn: 'Lesson 3: Sukun, Shaddah, Tanween & Definite Articles',

    keyConceptsAr: [
      'السكون ( ْ ): دائرة صغيرة فوق الحرف تدل على وقوف الصوت، ولا يُنطق الحرف الساكن وحده بل مع الحرف المتحرك الذي قبله (المقطع الساكن: أَبْ ، شَمْـ ، بَيْـ).',
      'الشدة ( ّ ): علامة تدل على تكرار الحرف مرتين؛ الأول ساكن والثاني متحرك، فيُنطقان حرفاً واحداً قوياً (مُـعَلِّـم = لْ + لِ).',
      'التنوين: نون ساكنة تنطق في آخر الأسماء ولا تُكتب: تنوين الضم ( ٌ مثل: قَلَمٌ)، تنوين الكسر ( ٍ مثل: قَلَمٍ)، وتنوين الفتح ( ً ويأتي بعده ألف زائدة غالباً مثل: قَلَماً).',
      'اللام القمرية (الْـ): تُكتب وتُنطق وعليها سكون (الْـقَمَر ، الْـبَاب ، الْـكِتَاب).',
      'اللام الشمسية: تُكتب ولا تُنطق ويأتي الحرف بعدها مشدداً (الشَّـمْس ، التِّـين ، الصَّـقْر).'
    ],
    keyConceptsEn: [
      'Sukun ( ْ ): Stop marker; consonant must be read together with previous vowel.',
      'Shaddah ( ّ ): Doubled consonant blending a silent and a voiced letter.',
      'Tanween: Nunation ending sounds (un, in, an).',
      'Lunar Lam (الـ): Written and clearly pronounced with Sukun.',
      'Solar Lam (الـ): Written but silent, assimilating into following doubled consonant.'
    ],

    conceptMapAr: [
      'المقطع الساكن (حرفان معاً) ➔ الشدة (حرفان مدغمان) ➔ التنوين (صوت رنين النون) ➔ اللام الشمسية والقمرية'
    ],
    conceptMapEn: [
      'Sukun Syllable ➔ Shaddah Doubling ➔ Tanween Nunation ➔ Solar & Lunar Articles'
    ],

    learningOutcomesAr: [
      'أن يقرأ التلميذ المقطع الساكن بدقة وثقة ويدمجه في كلمات ثلاثية ورباعية.',
      'أن يميّز الحرف المشدد وينطقه مضاعفاً بشكل سليم.',
      'أن يفرّق بين أنواع التنوين الثلاثة (الضم والفتح والكسر) نطقاً وإملاءً.',
      'أن يقرأ الكلمات المبدوءة باللام الشمسية واللام القمرية بطلاقة.'
    ],
    learningOutcomesEn: [
      'Read Sukun syllables fluently in 3 and 4 letter words.',
      'Pronounce doubled consonants with Shaddah accurately.',
      'Differentiate the 3 Tanween forms in reading and spelling.',
      'Read words with Solar and Lunar Lam effortlessly.'
    ],

    vocabulary: [
      {
        termAr: 'السُّكُون ( ْ )',
        termEn: 'Sukun',
        definitionAr: 'دائرة صغيرة تدل على سكون الحرف وعدم حركته، ويُقرأ مع الحرف السابق له.'
      },
      {
        termAr: 'التَّنْوِين',
        termEn: 'Tanween',
        definitionAr: 'نون ساكنة تلحق آخر الأسماء نطقاً لا كتابة، ونعبر عنها بضمتين ( ٌ ) أو كسرتين ( ٍ ) أو فتحتين ( ً ).'
      },
      {
        termAr: 'اللاَّمُ القَمَرِيَّة',
        termEn: 'Lunar Lam',
        definitionAr: 'لام ساكنة ظاهرة في النطق والكتابة (الْـ).'
      }
    ],

    warmupHookAr: 'هل سمعت رنين جرس الموسيقى (رَنْ.. رَنْ)؟ هكذا هو التنوين في لغتنا العربية الجميلة! نون موسيقية رنانة نسمعها في آخر الكلمة ولا نكتبها بالنون بل بحركتين متطابقتين (كتابٌ)! تعالوا نتدرب على السكون والشدة والتنوين واللامين!',
    warmupHookEn: 'Have you heard the musical ring of a bell? Tanween is the musical "N" sound at the end of Arabic words that we pronounce but write as double vowels!',

    mainContentAr: `
### 1. المقطع الساكن (السكون ْ)
* الحرف الساكن ضعيف لا يستطيع أن يُنطق وحده؛ لذلك يمسك بيد الحرف الذي قبله:
  * **رَأْ**س ، **شَمْـ**ـس ، **بَيْـ**ـت ، **نَهْـ**ـر.
* عند التقطيع الصوتي نضع الحرف الساكن مع الحرف الذي قبله في مقطع واحد: (**شَمْـ** / **سٌ**).

---

### 2. الشَّدَّة (الحرف المشدد ّ)
* الشدة تعني أن الحرف تكرر مرتين متتاليتين؛ الأول ساكن والثاني متحرك فأدمجناهما معاً:
  * قِـ**ـطَّـ**ـة = (طْ + طَ)
  * أُمِّـ**ـي** = (مْ + مِ)
  * سُـ**ـكَّـ**ـر = (كْ + كَ)

---

### 3. أنواع التنوين الثلاثة
1. **تنوين الضم ( ٌ ):** صَوْتُ (أُنْ) ➔ وَلَدٌ ، شَجَرَةٌ.
2. **تنوين الكسر ( ٍ ):** صَوْتُ (إِنْ) ➔ وَلَدٍ ، شَجَرَةٍ.
3. **تنوين الفتح ( ً ):** صَوْتُ (أَنْ) وتأتي بعده ألف تنوين ➔ وَلَداً ، كِتَاباً (ما عدا الكلمات المنتهية بتاء مربوطة مثل: شَجَرَةً).

---

### 4. اللام الشمسية واللام القمرية
* **اللام القمرية (تُنطق وتُكتب):** الْـقَمَر ، الْـكَلْب ، الْـمَوْز ، الْـهَرَم.
* **اللام الشمسية (تُكتب ولا تُنطق ويُشدد الحرف بعدها):** الشَّمْس ، الصَّقْر ، التُّفَّاح ، النَّجْم.
    `,
    mainContentEn: `
### 1. Sukun & Syllables
* Sukun consonant is pronounced jointly with the preceding vowel (e.g. Shams = شَمْـ + س).

### 2. Shaddah (Doubled Consonant)
* Represents two merged letters (silent + voiced) ➔ قطة (Qittah).

### 3. Tanween Types
* Damma Tanween (ٌ): Waladun.
* Kasra Tanween (ٍ): Waladin.
* Fatha Tanween (ً): Waladan.

### 4. Solar vs Lunar Lam
* Lunar Lam: Spoken & Written ➔ الْقَمَر (Al-Qamar).
* Solar Lam: Silent & Written ➔ الشَّمْس (Ash-Shams).
    `,

    diagramType: 'grammar_tree_diagram',
    diagramData: {
      type: 'sukun_tanween_chart',
      title: 'مخطط السكون والشدة والتنوين واللامين',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <rect x="20" y="20" width="170" height="65" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="105" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">المقطع الساكن ( ْ )</text>
        <text x="105" y="68" fill="#e2e8f0" font-size="11" text-anchor="middle">شَمْـ + س = شَمْس ☀️</text>

        <rect x="210" y="20" width="170" height="65" rx="8" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="295" y="45" fill="#f43f5e" font-size="13" font-weight="bold" text-anchor="middle">الشَّدَّة ( ّ )</text>
        <text x="295" y="68" fill="#e2e8f0" font-size="11" text-anchor="middle">قِـطَّـة (حرفان مدغمان) 🐱</text>

        <rect x="20" y="100" width="170" height="65" rx="8" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="105" y="125" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">التنوين ( ٌ ٍ ً )</text>
        <text x="105" y="148" fill="#e2e8f0" font-size="11" text-anchor="middle">كِتَابٌ • كِتَابٍ • كِتَاباً 📖</text>

        <rect x="210" y="100" width="170" height="65" rx="8" fill="rgba(52, 211, 153, 0.15)" stroke="#34d399" stroke-width="1.5"/>
        <text x="295" y="125" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">اللام الشمسية والقمرية</text>
        <text x="295" y="148" fill="#e2e8f0" font-size="11" text-anchor="middle">الْـقَمَر (تُنطق) • الشَّـمْس (تُدغم)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'نشاط تدريبي: التمييز بين اللام الشمسية واللام القمرية',
        titleEn: 'Interactive Practice: Solar vs Lunar Lam',
        problemAr: 'صنف الكلمات التالية إلى (لام قمرية) أو (لام شمسية): 1) الْـبَاب  2) التِّـين',
        problemEn: 'Classify as Solar or Lunar: 1) الباب  2) التين',
        stepsAr: [
          'الخطوة 1: كلمة (الْـبَاب) ➔ نطقنا اللام بوضوح وعليها سكون، إذن هي **لام قمرية**.',
          'الخطوة 2: كلمة (التِّـين) ➔ لم ننطق اللام والحرف التالي مشدد (التِّـ)، إذن هي **لام شمسية**.'
        ],
        stepsEn: [
          'Step 1: "الْباب" ➔ Lam is pronounced with Sukun ⟹ Lunar Lam.',
          'Step 2: "التِّين" ➔ Lam is silent, Ta has Shaddah ⟹ Solar Lam.'
        ],
        finalAnswerAr: '1) الْبَاب (لام قمرية) • 2) التِّين (لام شمسية)',
        finalAnswerEn: '1) الباب: Lunar • 2) التين: Solar'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1ar-3',
        problemAr: 'حلل كلمة (بَيْـتٌ) إلى مقاطع صوتية.',
        problemEn: 'Syllabify the word (بَيْتٌ).',
        solutionStepsAr: [
          '1) الحرف الساكن (يْ) يذهب مع الحرف السابق له المتحرك (بَـ) ➔ المقطع الأول: [بَيْـ].',
          '2) الحرف المنون بالضم في الأخير يقف وحده ➔ المقطع الثاني: [تٌ].',
          '3) التحليل الصوتي الكامل: [ بَيْـ / تٌ ].'
        ],
        finalAnswerAr: 'التحليل الصوتي: [ بَيْـ / تٌ ]'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1ar-3',
        questionAr: 'أي من الكلمات الآتية تحتوي على لام قمرية تُكتب وتُنطق؟',
        questionEn: 'Which word contains Lunar Lam (voiced)?',
        optionsAr: ['الْـقَلَمُ', 'الشَّجَرَةُ', 'التُّفَّاحُ', 'الصَّبَاحُ'],
        optionsEn: ['الْقَلَمُ (The pen)', 'الشَّجَرَةُ (The tree)', 'التُّفَّاحُ (The apple)', 'الصَّبَاحُ (The morning)'],
        correctIndex: 0,
        explanationAr: 'كلمة (الْـقَلَم) لامها ساكنة منطوقة بوضوح، وحرف القاف من الحروف القمرية.',
        explanationEn: '"الْقَلَم" features an explicitly voiced Lunar Lam with Sukun.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-p1-ar3',
      titleAr: 'اختبار بطل القراءة: السكون والتنوين واللام الشمسية والقمرية',
      titleEn: 'Grade 1 Phonetics & Articles Assessment',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-ar3-1',
          textAr: 'في كلمة (أُمِّي)، الحرف المشدد الذي نكرر صوته هو حرف:',
          textEn: 'In word (أُمِّي), the doubled consonant with Shaddah is:',
          optionsAr: ['المِيم ( مّ )', 'الأَلِف ( أُ )', 'اليَاء ( ي )', 'لا يوجد حرف مشدد'],
          optionsEn: ['Meem (مّ)', 'Alif (أُ)', 'Yaa (ي)', 'None'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد الحرف المشدد',
          conceptTestedEn: 'Shaddah Consonant Identification',
          explanationAr: 'الشدة موضوعة فوق حرف الميم (أُمّـِي).',
          explanationEn: 'The Shaddah sits directly over the Meem letter.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar3-2',
          textAr: 'التنوين الصحيح بالفتح لكلمة (وَلَد) يُكتب:',
          textEn: 'Correct Fatha Tanween for (ولد) is written as:',
          optionsAr: ['وَلَداً', 'وَلَدَنْ', 'وَلَدٌ', 'وَلَدٍ'],
          optionsEn: ['وَلَداً', 'ولدن', 'ولدٌ', 'ولدٍ'],
          correctIndex: 0,
          conceptTestedAr: 'كتابة تنوين الفتح مع الألف الزائدة',
          conceptTestedEn: 'Fatha Tanween Spelling',
          explanationAr: 'تنوين الفتح يُكتب بفتحتين مع إضافة ألف التنوين: (وَلَداً).',
          explanationEn: 'Fatha Tanween takes double fatha + Alif suffix: (ولداً).',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar3-3',
          textAr: 'اللام في كلمة (الشَّمْس) هي:',
          textEn: 'The Lam in (الشَّمْس) is:',
          optionsAr: ['لام شمسية (تُكتب ولا تُنطق)', 'لام قمرية (تُكتب وتُنطق)', 'حرف مد', 'ياء ملكية'],
          optionsEn: ['Solar Lam (silent)', 'Lunar Lam (voiced)', 'Madd Letter', 'Possessive Yaa'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين اللام الشمسية والقمرية',
          conceptTestedEn: 'Solar Lam Recognition',
          explanationAr: 'في كلمة (الشَّمْس) لا ننطق اللام ويأتي حرف الشين بعدها مشدداً، إذن هي لام شمسية.',
          explanationEn: 'The Lam in "الشمس" is unvoiced and followed by Shaddah.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: THEME 2 (العالم من حولي) - PRONOUNS (أنتَ/أنتِ - هو/هي) & GENDER (مذكر/مؤنث) ──
  {
    id: 'p1-ar-4',
    order: 4,
    titleAr: 'المحاضرة 4: ضمائر المخاطب (أَنْتَ / أَنْتِ)، ضمائر الغائب (هُوَ / هِيَ)، والتحويل بين المذكر والمؤنث',
    titleEn: 'Lecture 4: Addressing Pronouns (Anta / Anti), Absent Pronouns (Huwa / Hiya) & Grammatical Gender',
    subtitleAr: 'مخاطبة المفرد المذكر والمؤنث بـ (أنتَ / أنتِ)، التحدث عن الغائب بـ (هو / هي)، التمييز بين المذكر والمؤنث، والتحويل بالتاء المربوطة',
    subtitleEn: 'Master 2nd person pronouns (Anta / Anti), 3rd person pronouns (Huwa / Hiya), and masculine to feminine conversion.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — الموضوع الثاني: الإنسان والتواصل',
    unitTitleEn: 'Theme 2: The World Around Me — Topic 2: Communication & Interaction',
    lessonNumberAr: 'الدرس 4: ضمائر المخاطب والغائب والتذكير والتأنيث',
    lessonNumberEn: 'Lesson 4: Addressing & Absent Pronouns and Gender',

    keyConceptsAr: [
      'ضمير المخاطب (أَنْتَ): نخاطب به المفرد المذكر بفتح التاء (أَنْتَ وَلَدٌ ذَكِيٌّ ، أَنْتَ صَدِيقِي).',
      'ضمير المخاطب (أَنْتِ): نخاطب به المفرد المؤنث بكسر التاء دون ياء (أَنْتِ بِنْتٌ مُهَذَّبَةٌ ، أَنْتِ أُخْتِي).',
      'ضمير الغائب (هُوَ): نتحدث به عن المفرد المذكر غير الموجود معنا (هُوَ يَلْعَبُ بِالكُرَةِ ، هُوَ طَبِيبٌ مَاهِرٌ).',
      'ضمير الغائب (هِيَ): نتحدث به عن المفرد المؤنث غير الموجودة معنا (هِيَ تَقْرَأُ القِصَّةَ ، هِيَ مُعَلِّمَةٌ نَشِيطَةٌ).',
      'المذكر والمؤنث: المذكر يدل على ولد أو شيء مذكر (طَبِيب)، والمؤنث يدل على بنت أو ينتهي بتاء مربوطة (طَبِيبَـة).'
    ],
    keyConceptsEn: [
      'Addressing Pronoun "أنتَ" (Anta) with Fatha for masculine singular.',
      'Addressing Pronoun "أنتِ" (Anti) with Kasra for feminine singular.',
      'Absent Pronoun "هو" (Huwa) for 3rd person singular masculine (He).',
      'Absent Pronoun "هي" (Hiya) for 3rd person singular feminine (She).',
      'Gender distinction: Adding Taa Marbuta (ـة / ة) to convert masculine nouns to feminine.'
    ],

    conceptMapAr: [
      'المخاطب (أنتَ للولد / أنتِ للبنت) ➔ الغائب (هو للمذكر / هي للمؤنث) ➔ التذكير والتأنيث (طبيب ➔ طبيبة)'
    ],
    conceptMapEn: [
      '2nd Person (Anta / Anti) ➔ 3rd Person (Huwa / Hiya) ➔ Gender Conversion (Male ➔ Female + Taa)'
    ],

    learningOutcomesAr: [
      'أن يستخدم التلميذ ضميري المخاطب (أنتَ / أنتِ) في التعبير الشفهي والكتابي بدقة.',
      'أن يوظف ضميري الغائب (هو / هي) للتحدث عن الأشخاص والقصص البسيطة.',
      'أن يحول الكلمات من المذكر إلى المؤنث بإضافة التاء المربوطة.',
      'أن يكوّن جملاً مفيدة وسليمة نحوياً وممتعة في التعبير والتواصل.'
    ],
    learningOutcomesEn: [
      'Use 2nd person pronouns "أنتَ" and "أنتِ" appropriately in communication.',
      'Apply 3rd person pronouns "هو" and "هي" to describe actions and characters.',
      'Convert masculine nouns to feminine using Taa Marbuta.',
      'Construct simple, expressive, and grammatically sound short sentences.'
    ],

    vocabulary: [
      {
        termAr: 'أَنْتَ / أَنْتِ',
        termEn: 'You (m / f)',
        definitionAr: 'ضمائر نخاطب بها الشخص الذي نتحدث إليه مباشرة (أنتَ بفتح التاء للولد، أنتِ بكسر التاء للبنت).'
      },
      {
        termAr: 'هُوَ / هِيَ',
        termEn: 'He / She',
        definitionAr: 'ضمائر تدل على شخص غائب نتحدث عنه (هو للغائب المذكر، هي للغائبة المؤنثة).'
      },
      {
        termAr: 'التَّاءُ المَرْبُوطَة (ـة / ة)',
        termEn: 'Taa Marbuta',
        definitionAr: 'حرف يأتي في آخر الكلمات المؤنثة (مثل: طِفْلَة ، قِطَّة).'
      }
    ],

    warmupHookAr: 'إذا أردت أن توجه كلامك لصديقك وتقول له: "أنتَ بطل!"، ولصديقتك: "أنتِ رائعة!"، وإذا كان صديقك يلعب في الملعب تقول: "هو يلعب الكرة"، وصديقتك: "هي ترسم لوحة"! هكذا نستخدم ضمائر المخاطب والغائب للتعبير عن أنفسنا بذكاء وطلاقة!',
    warmupHookEn: 'When talking to your friend, you say "Anta" (أنتَ) to a boy and "Anti" (أنتِ) to a girl. When talking about them, you say "Huwa" (هو - He) and "Hiya" (هي - She)!',

    mainContentAr: `
### 1. ضمائر المخاطب (أَنْتَ / أَنْتِ)
* **أَنْتَ (بِفَتْحِ التَّاءِ):** للمفرد المذكر
  * **أَنْتَ** تِلْمِيذٌ مُهَذَّبٌ.
  * **أَنْتَ** تَحْرِصُ عَلَى النَّظَافَةِ.
* **أَنْتِ (بِكَسْرِ التَّاءِ - دُونَ يَاء):** للمفرد المؤنث
  * **أَنْتِ** بِنْتٌ صَالِحَةٌ.
  * **أَنْتِ** تُحِبِّينَ القِرَاءَةَ.

---

### 2. ضمائر الغائب (هُوَ / هِيَ)
* **هُوَ:** للمفرد المذكر الغائب
  * **هُوَ** يَقْرَأُ الدَّرْسَ.
  * **هُوَ** طَبِيبٌ يَرِعَى المَرْضَى.
* **هِيَ:** للمفرد المؤنث الغائبة
  * **هِيَ** تَرْسُمُ شَمْساً جَمِيلَةً.
  * **هِيَ** أُمٌّ حَنُونَةٌ.

---

### 3. التحويل بين المذكر والمؤنث
* نحول الكلمة المذكرة إلى مؤنثة بإضافة **التاء المربوطة (ـة / ة)** في آخرها:
  * مُعَلِّم ➔ مُعَلِّمَـ**ـة**
  * طَبِيب ➔ طَبِيبَـ**ـة**
  * قِطّ ➔ قِطَّـ**ـة**
  * صَغِير ➔ صَغِيرَ**ة**
    `,
    mainContentEn: `
### 1. 2nd Person Pronouns (أنتَ / أنتِ)
* **أنتَ (Anta):** You (boy/masculine) ➔ أنت تلميذ (You are a student).
* **أنتِ (Anti):** You (girl/feminine) ➔ أنتِ تلميذة (You are a student).

### 2. 3rd Person Pronouns (هو / هي)
* **هو (Huwa):** He ➔ هو يلعب (He plays).
* **هي (Hiya):** She ➔ هي تلعب (She plays).

### 3. Masculine to Feminine
* Add Taa Marbuta (ـة) ➔ معلم (Teacher m) ➔ معلمة (Teacher f).
    `,

    diagramType: 'grammar_tree_diagram',
    diagramData: {
      type: 'pronouns_gender_chart',
      title: 'مخطط ضمائر المخاطب والغائب والتذكير والتأنيث',
      svgSnippet: `<svg viewBox="0 0 400 180" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="180" fill="#0f172a" rx="12"/>
        <!-- Addressing Pronouns -->
        <rect x="20" y="20" width="170" height="65" rx="8" fill="rgba(56, 189, 248, 0.15)" stroke="#38bdf8" stroke-width="1.5"/>
        <text x="105" y="45" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">ضمائر المخاطب</text>
        <text x="105" y="68" fill="#e2e8f0" font-size="11" text-anchor="middle">أَنْتَ (للولد 👦) • أَنْتِ (للبنت 👧)</text>

        <!-- Absent Pronouns -->
        <rect x="210" y="20" width="170" height="65" rx="8" fill="rgba(244, 63, 94, 0.15)" stroke="#f43f5e" stroke-width="1.5"/>
        <text x="295" y="45" fill="#f43f5e" font-size="13" font-weight="bold" text-anchor="middle">ضمائر الغائب</text>
        <text x="295" y="68" fill="#e2e8f0" font-size="11" text-anchor="middle">هُوَ (يقرأ 📖) • هِيَ (ترسم 🎨)</text>

        <!-- Gender Conversion Box -->
        <rect x="50" y="100" width="300" height="65" rx="8" fill="rgba(251, 191, 36, 0.15)" stroke="#fbbf24" stroke-width="1.5"/>
        <text x="200" y="125" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">التحويل من المذكر للمؤنث (+ ة)</text>
        <text x="200" y="148" fill="#e2e8f0" font-size="11" text-anchor="middle">مُعَلِّم ➔ مُعَلِّمَة • طِفْل ➔ طِفْلَة • مَاهِر ➔ مَاهِرَة</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'نشاط تدريبي: تحويل الجمل من المذكر إلى المؤنث',
        titleEn: 'Interactive Practice: Converting Sentences to Feminine',
        problemAr: 'حول الجملة التالية من المذكر إلى المؤنث: (هُوَ طَبِيبٌ مَاهِرٌ).',
        problemEn: 'Convert to feminine: (هو طبيب ماهر).',
        stepsAr: [
          'الخطوة 1: نحول ضمير الغائب المذكر (هُوَ) إلى ضمير المؤنث: **هِيَ**.',
          'الخطوة 2: نضيف تاء التأنيث المربوطة للكلمة (طَبِيب) ➔ **طَبِيبَةٌ**.',
          'الخطوة 3: نضيف تاء التأنيث المربوطة للصفة (مَاهِر) ➔ **مَاهِرَةٌ**.',
          'الخطوة 4: تصبح الجملة المؤنثة كاملة: (هِيَ طَبِيبَةٌ مَاهِرَةٌ).'
        ],
        stepsEn: [
          'Step 1: Convert "هو" (Huwa) to "هي" (Hiya).',
          'Step 2: Add Taa Marbuta: "طبيب" ➔ "طبيبة".',
          'Step 3: Add Taa Marbuta: "ماهر" ➔ "ماهرة".',
          'Step 4: Final feminine sentence: "هي طبيبة ماهرة".'
        ],
        finalAnswerAr: 'الجملة المؤنثة: (هِيَ طَبِيبَةٌ مَاهِرَةٌ).',
        finalAnswerEn: 'Feminine: هي طبيبة ماهرة.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p1ar-4',
        problemAr: 'ضع (أَنْتَ) أو (أَنْتِ) مكان النقط: 1) ..... صَدِيقِي الوَفِيُّ. 2) ..... تِلْمِيذَةٌ فَائِقَةٌ.',
        problemEn: 'Fill in with (أنتَ / أنتِ): 1) ... my loyal friend. 2) ... excellent student.',
        solutionStepsAr: [
          '1) (صَدِيقِي) مذكر ➔ نختار: **أَنْتَ** (أَنْتَ صَدِيقِي الوَفِيُّ).',
          '2) (تِلْمِيذَةٌ) مؤنثة ➔ نختار: **أَنْتِ** (أَنْتِ تِلْمِيذَةٌ فَائِقَةٌ).'
        ],
        finalAnswerAr: '1) أَنْتَ صَدِيقِي الوَفِيُّ. 2) أَنْتِ تِلْمِيذَةٌ فَائِقَةٌ.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p1ar-4',
        questionAr: 'اختر الضمير المناسب: "....... تَقْرَأُ القِصَّةَ بِصَوْتٍ وَاضِحٍ"',
        questionEn: 'Choose appropriate pronoun for: "... reads the story clearly"',
        optionsAr: ['هِيَ', 'هُوَ', 'أَنَا', 'أَنْتَ'],
        optionsEn: ['Hiya (هي)', 'Huwa (هو)', 'Ana (أنا)', 'Anta (أنتَ)'],
        correctIndex: 0,
        explanationAr: 'الفعل (تَقْرَأُ) يبدأ بتاء المضارعة للمؤنث الغائب، فالضمير المناسب هو (هِيَ).',
        explanationEn: '"تقرأ" indicates a 3rd person singular feminine subject (هي).',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-p1-ar4',
      titleAr: 'اختبار بطل القراءة: ضمائر المخاطب والغائب والمذكر والمؤنث',
      titleEn: 'Grade 1 Pronouns & Gender Mastery Quiz',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-ar4-1',
          textAr: 'عند مخاطبة البنت نقول:',
          textEn: 'When addressing a girl, we say:',
          optionsAr: ['أَنْتِ (بكسر التاء)', 'أَنْتَ (بفتح التاء)', 'هُوَ', 'هَذَا'],
          optionsEn: ['Anti (أنتِ with kasra)', 'Anta (أنتَ with fatha)', 'Huwa (هو)', 'Hatha (هذا)'],
          correctIndex: 0,
          conceptTestedAr: 'استخدام ضمير المخاطب المؤنث أنتِ',
          conceptTestedEn: 'Feminine Addressing Pronoun Anti',
          explanationAr: 'نخاطب المفرد المؤنث بضمير (أَنْتِ) وتكون التاء مكسورة.',
          explanationEn: 'We address feminine singular with "أنتِ" (kasra under taa).',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar4-2',
          textAr: 'المؤنث من كلمة (طِفْلٌ) هو:',
          textEn: 'Feminine of (طفل) is:',
          optionsAr: ['طِفْلَةٌ', 'أَطْفَالٌ', 'طِفْلِي', 'طُفُولَةٌ'],
          optionsEn: ['طِفْلَةٌ (Tiflah)', 'أطفال', 'طفلي', 'طفولة'],
          correctIndex: 0,
          conceptTestedAr: 'تحويل الاسم للمؤنث بإضافة التاء المربوطة',
          conceptTestedEn: 'Taa Marbuta Suffixation',
          explanationAr: 'نضيف التاء المربوطة للمذكر ليصبح مؤنثاً: طِفْل ➔ طِفْلَة.',
          explanationEn: 'Adding Taa Marbuta converts "طفل" to "طفلة".',
          difficulty: 'easy'
        },
        {
          id: 'qp1-ar4-3',
          textAr: 'نقول: "....... يَرْسُمُ عِلَمَ مِصْرَ الجَمِيلَ"',
          textEn: 'We say: "... draws the beautiful Egyptian flag"',
          optionsAr: ['هُوَ', 'هِيَ', 'أَنْتِ', 'هَذِهِ'],
          optionsEn: ['Huwa (هو)', 'Hiya (هي)', 'Anti (أنتِ)', 'Hathihi (هذه)'],
          correctIndex: 0,
          conceptTestedAr: 'استخدام ضمير الغائب المذكر هو',
          conceptTestedEn: 'Masculine 3rd Person Pronoun Huwa',
          explanationAr: 'الفعل (يَرْسُمُ) يبدأ بياء للمذكر الغائب، فالضمير المناسب هو (هُوَ).',
          explanationEn: '"يرسم" has masculine agreement, requiring pronoun "هو".',
          difficulty: 'easy'
        }
      ]
    }
  }
];
