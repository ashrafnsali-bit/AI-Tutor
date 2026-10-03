import type { Lecture } from '../types';

// ============================================================================
// PRIMARY ARABIC — GRADE 2 (لغة عربية الصف الثاني الابتدائي - نظام التعليم 2.0 المعتمد)
// Official Grade 2 / Primary 2 Egyptian Ministry Curriculum Alignment (Edu 2.0 - تواصل):
// Lecture 1: المحور الأول (من أكون؟): قصة "أنا أستطيع"، ضمائر المتكلم (أنا / نحن) وأسماء الإشارة (هذا / هذه / هؤلاء)
// Lecture 2: المحور الأول (من أكون؟): نص "معرض أحب أن أكون"، ضمائر المخاطب (أنتَ / أنتِ)، أسلوب النهي وأسلوب النداء
// Lecture 3: المحور الثاني (العالم من حولي): نص "النيل سر الحياة"، ضمائر الغائب (هو / هي) وأدوات الاستفهام الشاملة
// Lecture 4: المحور الثاني (العالم من حولي): أنواع الأفعال (ماضٍ / مضارع / أمر)، حروف العطف وحروف الجر
// ============================================================================

export const PRIMARY_ARABIC_G2_LECTURES: Lecture[] = [
  // ── LECTURE 1: THEME 1 - "أنا أستطيع"، ضمائر المتكلم وأسماء الإشارة ──
  {
    id: 'p2-ar-1',
    order: 1,
    titleAr: 'المحاضرة 1: قصة "أنا أستطيع"، ضمائر المتكلم (أنا / نحن) وأسماء الإشارة (هذا / هذه / هؤلاء)',
    titleEn: 'Lecture 1: "I Can" Story, Speaker Pronouns (I / We) & Demonstratives (This / These)',
    subtitleAr: 'اكتشاف الثقة بالنفس من قصة "أنا أستطيع"، والتدرب المتقن على ضمائر المتكلم وأسماء الإشارة للقريب لجمع العاقل وغير العاقل',
    subtitleEn: 'Explore self-confidence in "I Can", master 1st person pronouns, and demonstrative pronouns.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — الموضوع الأول: يومياتي وبناء ثقتي بنفسي',
    unitTitleEn: 'Theme 1: Who Am I? — Topic 1: My Daily Life & Self-Confidence',
    lessonNumberAr: 'الدرس 1: قصة "أنا أستطيع" وضمائر المتكلم وأسماء الإشارة',
    lessonNumberEn: 'Lesson 1: "I Can" Story, Pronouns (I/We) & Demonstratives',

    keyConceptsAr: [
      'فكرة قصة "أنا أستطيع": في فناء المدرسة، اختار المعلم التلميذ (آسر) ليكون قائداً لفريق كرة القدم، وتردد آسر في البداية خوفاً من الخسارة، لكن صديقه شجعه فتذكر صديقه (زين) الذي حقق الفوز، وقال لنفسه: "أنا أستطيع، سأحاول!". الدرس المستفاد: الثقة بالنفس والمحاولة وعدم الاستسلام.',
      'ضمائر المتكلم (Speaker Pronouns):',
      '  - (أَنَا): للمفرد المذكر والمفرد المؤنث (أنا تلميذٌ مجتهدٌ / أنا تلميذةٌ نشيطةٌ / أنا أحبُّ القراءةَ).',
      '  - (نَحْنُ): للمثنى والجمع بنوعيه (نحن تلميذان / نحن تلميذاتٌ / نحن تلاميذُ نحبُّ التعاونَ).',
      'أسماء الإشارة للقريب (Demonstrative Pronouns):',
      '  - (هَذَا): للمفرد المذكر (هذا ولدٌ بارعٌ / هذا قلمٌ جديدٌ).',
      '  - (هَذِهِ): للمفرد المؤنث (هذه بنتٌ ذكيةٌ) ولجمع غير العاقل (هذه أشجارٌ عاليةٌ / هذه كتبٌ مفيدةٌ).',
      '  - (هَؤُلَاءِ): لجمع العاقل المذكر والمؤنث فقط (هؤلاء أطباءُ مخلصون / هؤلاء معلماتٌ ماهراتٌ).'
    ],
    keyConceptsEn: [
      'Core Lesson from "I Can" story: Self-confidence, courage, teamwork, and positive self-talk.',
      'First-Person Pronouns (ضمائر المتكلم): "أنا" (I) for singular m/f, and "نحن" (We) for dual and plural.',
      'Demonstratives for Near Distance (أسماء الإشارة): "هذا" (Singular masculine), "هذه" (Singular feminine & non-human plural), and "هؤلاء" (Human plural m/f).'
    ],

    conceptMapAr: [
      'القرائية والتعبير ➔ قصة "أنا أستطيع" (الثقة بالنفس) ➔ ضمائر المتكلم (أنا للمفرد / نحن للجمع) ➔ أسماء الإشارة (هذا / هذه / هؤلاء للعاقل وغير العاقل)'
    ],
    conceptMapEn: [
      'Reading & Grammar ➔ "I Can" (Self-Confidence) ➔ 1st Person Pronouns (I / We) ➔ Demonstratives (This / These m/f/plural)'
    ],

    learningOutcomesAr: [
      'أن يستوعب التلميذ أحداث قصة "أنا أستطيع" ويستخرج معاني الكلمات ومضاداتها والمفرد والجمع.',
      'أن يستخدم ضمائر المتكلم (أنا / نحن) استخداماً صحيحاً مع الأسماء والأفعال.',
      'أن يميز بين استخدام (هؤلاء) لجمع العاقل و(هذه) لجمع غير العاقل.'
    ],
    learningOutcomesEn: [
      'Comprehend the narrative of "I Can" and deduce vocabulary meanings.',
      'Use 1st person pronouns "أنا" and "نحن" accurately with verbs and nouns.',
      'Differentiate between "هؤلاء" for human plurals and "هذه" for non-human plurals.'
    ],

    vocabulary: [
      {
        termAr: 'فِنَاء المَدْرَسَة',
        termEn: 'Schoolyard',
        definitionAr: 'ساحة المدرسة الواسعة التي يلعب فيها التلاميذ ويمارسون الأنشطة الرياضية.'
      },
      {
        termAr: 'أَسْتَطِيعُ',
        termEn: 'I Can / I am Able',
        definitionAr: 'أَقْدِرُ وأتمكن، ومضادها: أَعْجِزُ.'
      },
      {
        termAr: 'مَاهِرٌ',
        termEn: 'Skilled / Talented',
        definitionAr: 'بارعٌ ومتقنٌ لعمله، وجمعها: ماهرون.'
      },
      {
        termAr: 'وَاثِقٌ مِنْ نَفْسِهِ',
        termEn: 'Confident',
        definitionAr: 'مؤمنٌ بقدراته على النجاح وإنجاز المهام المطلوبة بتفوق.'
      },
      {
        termAr: 'هَؤُلَاءِ',
        termEn: 'These (Human Plural)',
        definitionAr: 'اسم إشارة نشير به إلى جمع الناس العاقلين من الذكور أو الإناث.'
      }
    ],

    warmupHookAr: 'مرحباً ببطل الصف الثاني الابتدائي المتميز! 🌟 عندما تقف أمام تحدٍ جديد أو مسألة جديدة في المدرسة، هل تقول: "أنا لا أعرف"، أم تقول مثل بطلنا الذكي آسر: "أنا أستطيع.. سأحاول!"؟ تعال لنتعلم كيف نتحدث عن أنفسنا بـ (أنا ونحن) ونشير بذكاء إلى كل ما حولنا بـ (هذا وهذه وهؤلاء)!',
    warmupHookEn: 'Welcome Grade 2 superstar! When faced with a new challenge, do you say "I cannot" or do you proudly say "I Can... I will try!"? Join us as we read together and master expressive Arabic pronouns!',

    mainContentAr: `
### 1. نص قصة "أنا أستطيع" (الفهم والقرائية)
* **أحداث القصة:**
  * في **فناء المدرسة**، وقف المعلم ليختار من التلاميذ فريقاً لكرة القدم.
  * اختار المعلم التلميذ **آسر**.
  * لكن **آسر** قال للمعلم: "أعتذر يا معلمي، لا أحب أن أكون سبباً في الخسارة".
  * قال المعلم لآسر: "**أنتَ تلميذٌ ماهرٌ ونشيطٌ يا آسر، وتستطيع أن تحقق الفوز، كن واثقاً!**".
  * نظر آسر فرأى صديقه **زين** وهو يضع الكرة في السلة رغم أنه على كرسي متحرك؛ فتحمس آسر وقال لنفسه: **"أنا أستطيع.. سأحاول!"**.

* **شبكة المفردات ومعاني الكلمات:**
  * **أستطيع:** أقدر (المضاد: أعجز).
  * **فناء:** ساحة أو حديقة واسعة.
  * **ماهر:** بارع ومتقن (الجمع: ماهرون / مهرة).
  * **الخسارة:** الهزيمة (المضاد: الفوز أو النصر).
  * **واثق:** متأكد ومطمئن (المضاد: متردد أو شاكّ).

---

### 2. ضمائر المتكلم: (أَنَا / نَحْنُ)
ضمائر المتكلم نستخدمها عندما نتحدث عن أنفسنا:

1. 👦 **(أَنَا):** للمفرد المتكلم (مذكر أو مؤنث):
   * أنا **ولدٌ** مهذبٌ.
   * أنا **بنتٌ** متفوقةٌ.
   * أنا **أقرأُ** القصةَ (لاحظ: الفعل يبدأ بهمزة **أَ** مثل الضمير **أَ**نا).
   * أنا **أحبُّ** مدرستي ومعلمي.

2. 👥 **(نَحْنُ):** للمثنى والجمع (مذكر ومؤنث):
   * نحن **تلميذان** نشيطان (مثنى).
   * نحن **تلاميذُ** نتعاون في الفصل (جمع مذكر).
   * نحن **طبيباتٌ** ماهراتٌ (جمع مؤنث).
   * نحن **نلعبُ** بالكرة (لاحظ: الفعل يبدأ بحرف **نـ** مثل الضمير **نـ**ـحن).

---

### 3. أسماء الإشارة للقريب: (هَذَا / هَذِهِ / هَؤُلَاءِ)
نشير بها إلى الأشخاص والأشياء القريبة منا:

* 🟢 **(هَذَا):** للمفرد المذكر (العاقل وغير العاقل):
  * هذا **معلمٌ** مخلصٌ.
  * هذا **قلمٌ** جميلٌ.
* 🟣 **(هَذِهِ):** للمفرد المؤنث + **لجمع غير العاقل** (قاعدة ذهبية هامة!):
  * مفرد مؤنث: هذه **طبيبةٌ** بارعةٌ / هذه **قطةٌ** لطيفةٌ.
  * جمع غير عاقل: هذه **أشجارٌ** مثمرةٌ / هذه **كتبٌ** نافعةٌ / هذه **مدارسُ** حديثةٌ (لا نقول هؤلاء كتب!).
* 🟡 **(هَؤُلَاءِ):** لجمع **العاقل فقط** (ذكور وإناث):
  * هؤلاء **أطباءُ** يعالجون المرضى.
  * هؤلاء **معلماتٌ** رحيماتٌ.
  * هؤلاء **أولادٌ** يلعبون في الحديقة.

---

### 4. Interactive Visual Grammar Map
\`\`\`xml
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="240" fill="#0f172a" rx="16"/>
  <!-- Box 1: Speaker Pronouns -->
  <g transform="translate(25, 20)">
    <rect width="320" height="200" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="160" y="38" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">🗣️ ضمائر المتكلم (Speaker Pronouns)</text>
    <rect x="20" y="60" width="280" height="55" fill="#0369a1" rx="8"/>
    <text x="160" y="85" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">أَنَا (للمفرد: أنا أكتبُ ✍️)</text>
    <text x="160" y="105" fill="#bae6fd" font-size="12" text-anchor="middle">أنا تلميذٌ / أنا تلميذةٌ</text>
    <rect x="20" y="125" width="280" height="55" fill="#0284c7" rx="8"/>
    <text x="160" y="150" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">نَحْنُ (للجمع والمثنى: نحن نكتبُ 📚)</text>
    <text x="160" y="170" fill="#bae6fd" font-size="12" text-anchor="middle">نحن تلاميذُ مجتهدون</text>
  </g>
  <!-- Box 2: Demonstratives -->
  <g transform="translate(375, 20)">
    <rect width="320" height="200" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="160" y="38" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">👉 أسماء الإشارة للقريب</text>
    <text x="30" y="75" fill="#f8fafc" font-size="13">🔹 <tspan fill="#34d399" font-weight="bold">هَذَا:</tspan> للمفرد المذكر (هذا ولدٌ / هذا كتابٌ)</text>
    <text x="30" y="110" fill="#f8fafc" font-size="13">🔹 <tspan fill="#34d399" font-weight="bold">هَذِهِ:</tspan> للمفردة المؤنثة (هذه بنتٌ)</text>
    <text x="30" y="135" fill="#facc15" font-size="13">⭐ <tspan fill="#facc15" font-weight="bold">هَذِهِ:</tspan> لجمع غير العاقل (هذه أشجارٌ)</text>
    <text x="30" y="170" fill="#f8fafc" font-size="13">🔹 <tspan fill="#34d399" font-weight="bold">هَؤُلَاءِ:</tspan> لجمع العاقل (هؤلاء أطباءُ / معلماتٌ)</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Narrative & Comprehension: "I Can" (أنا أستطيع)
* **Plot Summary:** Aser is chosen by the PE teacher for the football team. Initially hesitating from fear of failure, he gains self-confidence after seeing his friend Zein succeed, saying "I Can, I will try!".

### 2. First-Person Pronouns (ضمائر المتكلم)
* **أَنَا (I):** Singular masculine/feminine (أنا أرسمُ / أنا تلميذ).
* **نَحْنُ (We):** Dual and plural (نحن نرسمُ / نحن تلاميذ).

### 3. Demonstrative Pronouns (أسماء الإشارة)
* **هَذَا:** Singular masculine.
* **هَذِهِ:** Singular feminine AND non-human plural (هذه أقلامٌ / هذه كتبٌ).
* **هَؤُلَاءِ:** Human plural only (هؤلاء معلمون).
`,

    workedExamples: [
      {
        id: 'ex-ar2-1-1',
        titleAr: 'مثال 1: اختيار اسم الإشارة المناسب مع الجمع',
        titleEn: 'Example 1: Demonstrative with human vs non-human plural',
        problemAr: 'ضع اسم الإشارة المناسب (هذه / هؤلاء) مكان النقط في الجملتين الآتيتين: \n1. (...... أطباءُ ماهرون يعالجون المرضى).\n2. (...... كتبٌ مفيدةٌ في المكتبة).',
        problemEn: 'Fill in with the correct demonstrative (هذه / هؤلاء): \n1. (...... skilled doctors)\n2. (...... useful books)',
        stepByStepSolutionAr: [
          'الخطوة 1: ننظر إلى الكلمة المشار إليها في الجملة الأولى: (أطباء). كلمة (أطباء) جمع يدل على إنسان عاقل، واسم الإشارة المناسب لجمع العاقل هو (هؤلاء). إذن: "هؤلاء أطباءُ ماهرون".',
          'الخطوة 2: ننظر إلى الكلمة في الجملة الثانية: (كتب). كلمة (كتب) جمع غير عاقل (جماد ليس لديه عقل مفكر)، والقاعدة النحوية تنص على أن جمع غير العاقل نستخدم معه اسم الإشارة (هذه). إذن: "هذه كتبٌ مفيدةٌ".'
        ],
        stepByStepSolutionEn: [
          'Step 1: Check noun in sentence 1: "أطباء" (doctors) is human plural ➔ use "هؤلاء".',
          'Step 2: Check noun in sentence 2: "كتب" (books) is non-human plural ➔ use "هذه".'
        ],
        finalAnswerAr: '1. هؤلاء أطباءُ ماهرون. \n2. هذه كتبٌ مفيدةٌ.',
        finalAnswerEn: '1. هؤلاء أطباءُ ماهرون. \n2. هذه كتبٌ مفيدةٌ.'
      },
      {
        id: 'ex-ar2-1-2',
        titleAr: 'مثال 2: تحويل الجملة من المفرد إلى الجمع مع ضمائر المتكلم',
        titleEn: 'Example 2: Transforming from singular to plural with 1st person pronouns',
        problemAr: 'حوّل الجملة التالية من المفرد إلى الجمع: "أنا أحبُّ القراءةَ وأتعلمُ بجدٍّ".',
        problemEn: 'Transform to plural: "I love reading and study diligently".',
        stepByStepSolutionAr: [
          'الخطوة 1: نحول ضمير المتكلم (أنا) إلى ضمير الجمع المناسب له وهو (نحن).',
          'الخطوة 2: نحول الفعل المضارع (أحبُّ) الذي يبدأ بهمزة المتكلم المفرد إلى (نحبُّ) بحرف النون للجمع.',
          'الخطوة 3: نحول الفعل المضارع (أتعلمُ) إلى (نتعلمُ).',
          'الناتج النهائي للجملة: "نحن نحبُّ القراءةَ ونتعلمُ بجدٍّ".'
        ],
        stepByStepSolutionEn: [
          'Step 1: Replace "أنا" with "نحن".',
          'Step 2: Change verbs from "أحب / أتعلم" to "نحب / نتعلم".',
          'Final Result: "نحن نحبُّ القراءةَ ونتعلمُ بجدٍّ".'
        ],
        finalAnswerAr: 'نحن نحبُّ القراءةَ ونتعلمُ بجدٍّ.',
        finalAnswerEn: 'نحن نحبُّ القراءةَ ونتعلمُ بجدٍّ.'
      }
    ],

    textbookExercises: [
      {
        id: 'ex-ar2-text-1',
        problemAr: 'أكمل بضمير متكلم مناسب (أنا / نحن): \n1. (...... أستطيعُ القفزَ عالياً).\n2. (...... نتعاونُ في تنظيف حديقة المدرسة).',
        problemEn: 'Fill with 1st person pronoun (أنا / نحن): \n1. (...... can jump high)\n2. (...... cooperate in cleaning the garden)',
        solutionStepsAr: [
          'الفعل (أستطيع) يبدأ بالألف ويدل على المفرد فيأخذ (أنا).',
          'الفعل (نتعاون) يبدأ بالنون ويدل على الجمع فيأخذ (نحن).'
        ],
        solutionStepsEn: [
          'The verb starts with Alif and is singular, so it takes "أنا".',
          'The verb starts with Noon and is plural, so it takes "نحن".'
        ],
        finalAnswerAr: '1. أنا أستطيعُ القفزَ عالياً. \n2. نحن نتعاونُ في تنظيف حديقة المدرسة.',
        finalAnswerEn: '1. أنا أستطيعُ القفزَ عالياً. \n2. نحن نتعاونُ في تنظيف حديقة المدرسة.'
      }
    ],

    assessment: {
      id: 'as-ar2-1',
      titleAr: 'اختبار تقييم المحاضرة 1: قصة "أنا أستطيع"، ضمائر المتكلم وأسماء الإشارة',
      titleEn: 'Lecture 1 Assessment: "I Can", Speaker Pronouns & Demonstratives',
      passingScore: 80,
      questions: [
        {
          id: 'q-ar2-1-1',
          textAr: 'لماذا تردد التلميذ "آسر" في البداية عندما اختاره المعلم قائداً للفريق؟',
          textEn: 'Why did Aser hesitate when the teacher chose him as team captain?',
          optionsAr: [
            'لأنه خاف أن يكون سبباً في خسارة الفريق',
            'لأنه لا يحب الرياضة',
            'لأنه كان يريد الذهاب إلى المنزل',
            'لأنه لم يكن يعرف زملاءه'
          ],
          optionsEn: [
            'Because he feared being the cause of team loss',
            'Because he disliked sports',
            'Because he wanted to go home',
            'Because he did not know his peers'
          ],
          correctIndex: 0,
          conceptTestedAr: 'فهم أحداث قصة أنا أستطيع',
          conceptTestedEn: 'Story Comprehension: "I Can"',
          explanationAr: 'تردد آسر واعتذر للمعلم في البداية لأنه خاف أن يكون سبباً في الخسارة، لكن تشجيع المعلم ورؤية صديقه زين جعلاه يثق بنفسه ويقول: "أنا أستطيع.. سأحاول!".',
          explanationEn: 'Aser hesitated because he worried he would cause the team to lose before gaining confidence.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-1-2',
          textAr: 'ما معنى كلمة "أَسْتَطِيعُ" في القصة؟',
          textEn: 'What is the meaning of "أَسْتَطِيعُ"?',
          optionsAr: ['أَقْدِرُ وأتمكن', 'أَعْجِزُ وأفشل', 'أَنَامُ', 'أَسْمَعُ'],
          optionsEn: ['I am able / I can', 'I fail / cannot', 'I sleep', 'I listen'],
          correctIndex: 0,
          conceptTestedAr: 'معاني مفردات قصة أنا أستطيع',
          conceptTestedEn: 'Vocabulary Definition: I Can',
          explanationAr: 'أستطيع تعني أَقْدِرُ ولدي القدرة على الفعل، ومضادها: أَعْجِزُ.',
          explanationEn: '"أستطيع" means I am able or I can.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-1-3',
          textAr: 'أي ضمير متكلم يناسب الجملة: "(...... تلميذاتٌ متفوقاتٌ في المدرسة)"؟',
          textEn: 'Which speaker pronoun fits: "(...... top student girls)"?',
          optionsAr: ['نَحْنُ', 'أَنَا', 'هَذَا', 'أَنْتَ'],
          optionsEn: ['نَحْنُ (We)', 'أَنَا (I)', 'هَذَا', 'أَنْتَ'],
          correctIndex: 0,
          conceptTestedAr: 'استخدام ضمير المتكلم للجمع نحن',
          conceptTestedEn: '1st Person Plural Pronoun',
          explanationAr: '(تلميذات) جمع مؤنث، والضمير المتكلم المناسب للجمع هو (نحن).',
          explanationEn: '"نحن" is used for plural speaker subjects.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-1-4',
          textAr: 'ما اسم الإشارة الصحيح للجملة: "(...... أشجارٌ عاليةٌ ومثمرةٌ)"؟',
          textEn: 'What is the correct demonstrative for: "(...... tall fruitful trees)"?',
          optionsAr: ['هَذِهِ', 'هَؤُلَاءِ', 'هَذَا', 'أَنْتُمْ'],
          optionsEn: ['هَذِهِ', 'هَؤُلَاءِ', 'هَذَا', 'أَنْتُمْ'],
          correctIndex: 0,
          conceptTestedAr: 'اسم الإشارة مع جمع غير العاقل',
          conceptTestedEn: 'Demonstrative with Non-Human Plural',
          explanationAr: '(أشجار) جمع غير عاقل، والقاعدة النحوية تنص على الإشارة لجمع غير العاقل بـ (هذه).',
          explanationEn: '"هذه" is always used for non-human plural objects.',
          difficulty: 'medium'
        },
        {
          id: 'q-ar2-1-5',
          textAr: 'ما اسم الإشارة الصحيح للإشارة إلى: "(...... مهندسون مخلصون)"؟',
          textEn: 'What is the correct demonstrative for: "(...... dedicated engineers)"?',
          optionsAr: ['هَؤُلَاءِ', 'هَذِهِ', 'هَذَا', 'نَحْنُ'],
          optionsEn: ['هَؤُلَاءِ', 'هَذِهِ', 'هَذَا', 'نَحْنُ'],
          correctIndex: 0,
          conceptTestedAr: 'اسم الإشارة مع جمع العاقل هؤلاء',
          conceptTestedEn: 'Demonstrative with Human Plural: هؤلاء',
          explanationAr: '(مهندسون) جمع مذكر عاقل، واسم الإشارة المخصص لجمع العاقل هو (هؤلاء).',
          explanationEn: '"هؤلاء" is used for human plural nouns.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: THEME 1 - "معرض أحب أن أكون"، ضمائر المخاطب، أسلوب النهي والنداء ──
  {
    id: 'p2-ar-2',
    order: 2,
    titleAr: 'المحاضرة 2: نص "معرض أحب أن أكون"، ضمائر المخاطب (أنتَ / أنتِ)، أسلوب النهي والنداء',
    titleEn: 'Lecture 2: "Careers I Want to Be", 2nd Person Pronouns (You m/f), Prohibitive & Vocative',
    subtitleAr: 'استكشاف المهن المستقبلية، والتفريق الدقيق بين (أنتَ / أنتِ)، وصياغة أسلوب النهي (لا الناهية) وأسلوب النداء (يا)',
    subtitleEn: 'Explore future careers, 2nd person pronouns, prohibitive "لا", and vocative "يا".',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — الموضوع الثاني: مهنتي في المستقبل والتعبير عن نفسي',
    unitTitleEn: 'Theme 1: Who Am I? — Topic 2: My Future Career & Expressive Language',
    lessonNumberAr: 'الدرس 2: نص "معرض أحب أن أكون"، ضمائر المخاطب وأسلوب النهي والنداء',
    lessonNumberEn: 'Lesson 2: "Careers Exhibition", 2nd Person Pronouns & Prohibitive Styles',

    keyConceptsAr: [
      'نص "معرض أحب أن أكون": في المعرض المدرسي عرض التلاميذ مجسمات ورسومات للمهن التي يحبون أن يعملوا بها في المستقبل: الطبيب الذي يعالج المرضى، المهندس الذي يبني البيوت، المعلم الذي يعلم الصغار، والضابط الذي يحمي الوطن.',
      'ضمائر المخاطب (2nd Person Pronouns): نستخدمها عند التحدث المباشر مع شخص أمامنا:',
      '  - (أَنْتَ) بفتح التاء: للمفرد المذكر (أنتَ تلميذٌ ذكيٌّ / أنتَ تحبُّ الرسمَ).',
      '  - (أَنْتِ) بكسر التاء (بدون إضافة حرف ياء!): للمفرد المؤنث (أنتِ فتاةٌ مهذبةٌ / أنتِ تكتبينَ بخطٍّ جميلٍ).',
      'أسلوب النهي (Prohibitive Style):',
      '  - هو طلب الامتناع عن فعل شيء قبيح أو ضار.',
      '  - صيغته: (لَا النَّاهِيَة + الفعل المضارع المبدوء بالتاء غالباً):',
      '    - للمذكر: (يا أحمدُ، لا تلعبْ بالشارع / لا تسرفْ في الماء).',
      '    - للمؤنث: (يا فاطمةُ، لا تقطفي الأزهار / لا تتركي الصنبور مفتوحاً).',
      'أسلوب النداء (Vocative Style):',
      '  - يتكون من: (أداة النداء "يَا" + المُنَادَى): (يا مروانُ، انتبه لشرح المعلم / يا أمي، شكراً لكِ).'
    ],
    keyConceptsEn: [
      'Text Theme: Exploring professions (Doctor, Engineer, Teacher, Police Officer) and future aspirations.',
      'Second-Person Pronouns: "أَنْتَ" (You - masc. singular with Fatha) and "أَنْتِ" (You - fem. singular with Kasra, without Ya).',
      'Prohibitive Style (أسلوب النهي): Formed by "لا" + Present Tense Verb to request cessation of an action.',
      'Vocative Style (أسلوب النداء): Formed by particle "يا" + addressee.'
    ],

    conceptMapAr: [
      'النص القرائي (المهن المستقبلية) ➔ ضمائر المخاطب (أنتَ للمذكر / أنتِ للمؤنث) ➔ أسلوب النهي (لا + الفعل) ➔ أسلوب النداء (يا + المنادى)'
    ],
    conceptMapEn: [
      'Career Text ➔ 2nd Person Pronouns (You m/f) ➔ Prohibitive Style (لا + verb) ➔ Vocative Style (يا + noun)'
    ],

    learningOutcomesAr: [
      'أن يستخرج التلميذ المهن المختلفة ومهام كل مهنة من النص القرائي.',
      'أن يميز كتابة ونطق (أنتَ) بالفتحة و(أنتِ) بالكسرة دون كتابة الياء.',
      'أن يصوغ جملاً تامة باستخدام أسلوب النهي وأسلوب النداء بصورة صحيحة.'
    ],
    learningOutcomesEn: [
      'Identify different professions and their community roles from the text.',
      'Write and pronounce "أنتَ" and "أنتِ" correctly.',
      'Construct complete sentences using prohibitive and vocative structures.'
    ],

    vocabulary: [
      {
        termAr: 'مَعْرِض',
        termEn: 'Exhibition',
        definitionAr: 'مكان مخصص لعرض المنتجات والرسومات والمشروعات للزوار.'
      },
      {
        termAr: 'مِهْنَة',
        termEn: 'Profession / Career',
        definitionAr: 'العمل أو الوظيفة التي يقوم بها الإنسان لخدمة مجتمعه (كالطبيب والمهندس والمعلم)، وجمعها: مِهَن.'
      },
      {
        termAr: 'أُسْلُوب نَهْي',
        termEn: 'Prohibitive Style',
        definitionAr: 'أسلوب نطلب به من الشخص الكف والامتناع عن فعل شيء غير صحيح باستخدام (لا).'
      },
      {
        termAr: 'أُسْلُوب نِدَاء',
        termEn: 'Vocative Style',
        definitionAr: 'أسلوب نلفت به انتباه شخص ما لنخبره بأمر مهم باستخدام أداة النداء (يا).'
      }
    ],

    warmupHookAr: 'ماذا تحب أن تصبح عندما تكبر؟ 🩺 طبيباً يعالج المرضى بابتسامة، أم مهندساً يبني مدناً جميلة، أم معلماً ينير العقول؟ وعندما تنادي صديقك وتنصحه بألا يسرف في الماء ماذا تقول له؟ تقول: "يا صديقي، لا تسرف في الماء"! تعال لنتعرف على أسرار ضمائر المخاطب وأساليب النهي والنداء الممتعة!',
    warmupHookEn: 'What do you wish to become when you grow up? A caring doctor, a creative engineer, or an inspiring teacher? Let us explore future careers and learn how to address our friends with pronouns and respectful advice!',

    mainContentAr: `
### 1. نص "معرض أحب أن أكون"
* **فكرة النص:**
  * أقامت المدرسة معرضاً جميلاً بعنوان **"أحب أن أكون"**.
  * ارتدى كل تلميذ زي المهنة التي يتمناها في مستقبله:
    * 👨‍⚕️ **الطبيب:** يعالج المرضى ويخفف آلامهم.
    * 👷 **المهندس:** يخطط ويبني المنازل والمدارس والجسور.
    * 👩‍🏫 **المعلمة:** تعلم الأطفال القراءة والعلوم والأخلاق.
    * 👮 **الضابط:** يحمي أمن الوطن ويساعد الناس في الشوارع.
  * كل المهن عظيمة ومهمة وتكمل بعضها لبناء مجتمع قوي وسعيد!

---

### 2. ضمائر المخاطب: (أَنْتَ / أَنْتِ)
نستخدم ضمائر المخاطب عندما نخاطب شخصاً موجوداً أمامنا:

1. 👦 **(أَنْتَ - بفتح التاء):** للمفرد المذكر:
   * **أنتَ** طبيبٌ ماهرٌ 🩺.
   * **أنتَ** تحافظُ على نظافة مدرستك.
   * **أنتَ** بطلٌ شجاعٌ.

2. 👧 **(أَنْتِ - بكسر التاء):** للمفرد المؤنث:
   * ⚠️ **تنبيه إملائي هام جداً:** نكتب (أَنْتِ) بالكسرة تحت التاء، **ولا نكتبها بالياء مطلقاً** (خطأ: أنتي ❌ / صواب: أنتِ ✅).
   * **أنتِ** طبيبةٌ ماهرةٌ 👩‍⚕️.
   * **أنتِ** فتاةٌ مهذبةٌ وذكية.
   * **أنتِ** ترسمينَ لوحةً رائعةً.

---

### 3. أسلوب النهي (Prohibitive Style)
* **المفهوم:** نطلب من الشخص الامتناع عن فعل سيئ لحمايته.
* **التركيب:** **لَا + الفعل المضارع** (يبدأ غالباً بحرف التاء):
  * للمذكر: يا يوسفُ، **لا تلعبْ** في الطريق ⚽ 🚫.
  * للمذكر: يا عليُّ، **لا تسرفْ** في استخدام الماء 💧.
  * للمؤنث: يا سلمى، **لا تكتبي** على الجدران ✏️ 🚫.
  * للمؤنث: يا فاطمةُ، **لا تقطفي** أزهار الحديقة 🌸 🚫.

---

### 4. أسلوب النداء (Vocative Style)
* **المفهوم:** لفت انتباه شخص ما لنطلب منه أمراً أو نوجه له نصيحة.
* **التركيب:** **يَا (أداة النداء) + المُنَادَى (اسم الشخص)**:
  * **يا أحمدُ**، استمع لنصيحة والدك.
  * **يا مريمُ**، ساعدي أختك الصغيرة.
  * **يا معلمي**، شكراً لجهدك العظيم.

---

### 5. Interactive Visual Summary Chart
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Pronouns Box -->
  <g transform="translate(20, 20)">
    <rect width="215" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="107" y="38" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">ضمائر المخاطب 👈</text>
    <rect x="15" y="60" width="185" height="50" fill="#0284c7" rx="8"/>
    <text x="107" y="85" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">أَنْتَ (للمذكر 👦)</text>
    <text x="107" y="102" fill="#bae6fd" font-size="11" text-anchor="middle">أنتَ مهندسٌ بارعٌ</text>
    <rect x="15" y="120" width="185" height="50" fill="#0369a1" rx="8"/>
    <text x="107" y="145" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">أَنْتِ (للمؤنث 👧)</text>
    <text x="107" y="162" fill="#bae6fd" font-size="11" text-anchor="middle">أنتِ مهندسةٌ ذكيةٌ (بالكسرة)</text>
  </g>
  <!-- Prohibitive Box -->
  <g transform="translate(250, 20)">
    <rect width="215" height="190" fill="#1e293b" stroke="#f43f5e" stroke-width="2" rx="12"/>
    <text x="107" y="38" fill="#fda4af" font-size="15" font-weight="bold" text-anchor="middle">🚫 أسلوب النهي</text>
    <text x="107" y="75" fill="#f8fafc" font-size="13" text-anchor="middle">لَا + فعل مضارع</text>
    <text x="107" y="105" fill="#fecdd3" font-size="12" text-anchor="middle">طلب الامتناع عن الفعل</text>
    <rect x="15" y="125" width="185" height="50" fill="#9f1239" rx="8"/>
    <text x="107" y="148" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">لا تسرفْ في الماء 💧</text>
    <text x="107" y="165" fill="#fecdd3" font-size="11" text-anchor="middle">لا تقطفي الأزهار 🌸</text>
  </g>
  <!-- Vocative Box -->
  <g transform="translate(480, 20)">
    <rect width="220" height="190" fill="#1e293b" stroke="#eab308" stroke-width="2" rx="12"/>
    <text x="110" y="38" fill="#fde047" font-size="15" font-weight="bold" text-anchor="middle">📢 أسلوب النداء</text>
    <text x="110" y="75" fill="#f8fafc" font-size="13" text-anchor="middle">يَا + المُنَادَى</text>
    <text x="110" y="105" fill="#fef08a" font-size="12" text-anchor="middle">لفت انتباه المخاطب</text>
    <rect x="15" y="125" width="190" height="50" fill="#854d0e" rx="8"/>
    <text x="110" y="148" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">يا طارقُ، رتّبْ غرفتك 🚪</text>
    <text x="110" y="165" fill="#fef08a" font-size="11" text-anchor="middle">يا أمي، أحبكِ كثيراً ❤️</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Careers Text: "I Love to Be" (معرض أحب أن أكون)
* Explores community professions: Doctor, Engineer, Teacher, and Police Officer.

### 2. 2nd-Person Pronouns (ضمائر المخاطب)
* **أَنْتَ:** For singular masculine (with Fatha).
* **أَنْتِ:** For singular feminine (with Kasra; strictly avoid writing a trailing Ya).

### 3. Prohibitive & Vocative (أسلوب النهي وأسلوب النداء)
* **Prohibitive:** "لا" + Present verb (لا تسرفْ / لا تقطفي).
* **Vocative:** Particle "يا" + Name (يا أحمد / يا فاطمة).
`,

    workedExamples: [
      {
        id: 'ex-ar2-2-1',
        titleAr: 'مثال 1: تحويل الجملة باستخدام أسلوب النهي',
        titleEn: 'Example 1: Formulating a Prohibitive Sentence',
        problemAr: 'وجدتَ صديقك يكتب على مقاعد المدرسة. وجّه له نهياً مناسباً مستخدماً أسلوب النهي مع النداء.',
        problemEn: 'Your friend writes on school desks. Formulate a polite prohibitive sentence with vocative.',
        stepByStepSolutionAr: [
          'الخطوة 1: نبدأ بأداة النداء واسم الصديق: "يا صديقي" أو "يا عمر".',
          'الخطوة 2: نستخدم أداة النهي (لا الناهية).',
          'الخطوة 3: نأتي بالفعل المضارع مع حرف التاء للمذكر: (تكتبْ على مقاعد المدرسة).',
          'الجملة الكاملة: "يا عمرُ، لا تكتبْ على مقاعد المدرسة".'
        ],
        stepByStepSolutionEn: [
          'Step 1: Start with the vocative: "يا عمرُ".',
          'Step 2: Add prohibitive particle "لا".',
          'Step 3: Add present verb: "تكتبْ على مقاعد المدرسة".'
        ],
        finalAnswerAr: 'يا عمرُ، لا تكتبْ على مقاعد المدرسة.',
        finalAnswerEn: 'يا عمرُ، لا تكتبْ على مقاعد المدرسة.'
      }
    ],

    textbookExercises: [
      {
        id: 'ex-ar2-text-2',
        problemAr: 'اختر الضمير المناسب (أنتَ / أنتِ) لكل جملة: \n1. (...... فتاةٌ ترسمينَ ببراعةٍ).\n2. (...... ولدٌ تقرأُ القرآنَ بصوتٍ عذبٍ).',
        problemEn: 'Choose (أنتَ / أنتِ): \n1. (...... a girl who draws skillfully)\n2. (...... a boy who recites Quran beautifully)',
        solutionStepsAr: [
          'الجملة الأولى موجهة لمفرد مؤنث (فتاة / ترسمين) فتأخذ (أنتِ) بالكسرة.',
          'الجملة الثانية موجهة لمفرد مذكر (ولد / تقرأ) فتأخذ (أنتَ) بالفتحة.'
        ],
        solutionStepsEn: [
          'Sentence 1 addresses singular feminine: use "أنتِ".',
          'Sentence 2 addresses singular masculine: use "أنتَ".'
        ],
        finalAnswerAr: '1. أنتِ فتاةٌ ترسمينَ ببراعةٍ. \n2. أنتَ ولدٌ تقرأُ القرآنَ بصوتٍ عذبٍ.',
        finalAnswerEn: '1. أنتِ فتاةٌ ترسمينَ ببراعةٍ. \n2. أنتَ ولدٌ تقرأُ القرآنَ بصوتٍ عذبٍ.'
      }
    ],

    assessment: {
      id: 'as-ar2-2',
      titleAr: 'اختبار تقييم المحاضرة 2: ضمائر المخاطب وأسلوب النهي والنداء',
      titleEn: 'Lecture 2 Assessment: 2nd Person Pronouns & Prohibitive Styles',
      passingScore: 80,
      questions: [
        {
          id: 'q-ar2-2-1',
          textAr: 'كيف نكتب ضمير المخاطب للمفرد المؤنث كتابة إملائية صحيحة؟',
          textEn: 'What is the correct orthographic spelling for the 2nd person feminine pronoun?',
          optionsAr: ['أَنْتِ (بكسرة تحت التاء دون ياء)', 'أنتي (بالياء)', 'أنتى (بالألف المقصورة)', 'إنتي'],
          optionsEn: ['أَنْتِ (with Kasra, no Ya)', 'أنتي (with Ya)', 'أنتى', 'إنتي'],
          correctIndex: 0,
          conceptTestedAr: 'الإملاء الصحيح لضمير المخاطب أنتِ',
          conceptTestedEn: 'Correct Spelling of أنتِ',
          explanationAr: 'ضمير المخاطب للمفرد المؤنث يُكتب (أَنْتِ) بالكسرة تحت التاء، وكتابته بالياء (أنتي) خطأ إملائي شائع.',
          explanationEn: '"أنتِ" is strictly written with a Kasra under the Ta without an added Ya.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-2-2',
          textAr: 'أي من الجمل التالية تُمثل "أسلوب نهي" صحيحاً؟',
          textEn: 'Which of the following is a correct prohibitive sentence?',
          optionsAr: [
            'لا تسرفْ في استخدام المياه يا أخي',
            'أنا لا أحب الإسراف',
            'ما أجمل ترشيد المياه!',
            'هل حافظتَ على المياه؟'
          ],
          optionsEn: [
            'لا تسرفْ في استخدام المياه يا أخي (Do not waste water)',
            'أنا لا أحب الإسراف (I do not like waste - negative statement)',
            'ما أجمل ترشيد المياه! (Exclamation)',
            'هل حافظتَ على المياه؟ (Question)'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تمييز أسلوب النهي',
          conceptTestedEn: 'Identifying Prohibitive Style',
          explanationAr: '"لا تسرفْ" أسلوب نهي يطلب الامتناع عن الإسراف، بينما "أنا لا أحب" نفي إخباري.',
          explanationEn: '"لا تسرف" orders someone to stop wasting, which is prohibitive.',
          difficulty: 'medium'
        },
        {
          id: 'q-ar2-2-3',
          textAr: 'ما هي أداة النداء المستخدمة في جملة: "(يا خالدُ، ساعد الفقراء)"؟',
          textEn: 'What is the vocative particle in: "(يا خالدُ، ساعد الفقراء)"?',
          optionsAr: ['يَا', 'خالدُ', 'ساعدْ', 'الفقراء'],
          optionsEn: ['يَا', 'خالدُ', 'ساعدْ', 'الفقراء'],
          correctIndex: 0,
          conceptTestedAr: 'أداة النداء يا',
          conceptTestedEn: 'Vocative Particle: يا',
          explanationAr: '(يا) هي أداة النداء، و(خالد) هو المنادى.',
          explanationEn: '"يا" is the vocative particle used to call someone.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-2-4',
          textAr: 'ما الضمير المناسب للجملة: "(...... طبيبةٌ تعالجينَ المرضى برحمة)"؟',
          textEn: 'Which pronoun fits: "(...... a doctor treating patients kindly)"?',
          optionsAr: ['أَنْتِ', 'أَنْتَ', 'هَذَا', 'نَحْنُ'],
          optionsEn: ['أَنْتِ', 'أَنْتَ', 'هَذَا', 'نَحْنُ'],
          correctIndex: 0,
          conceptTestedAr: 'ضمير المخاطب للمؤنث أنتِ',
          conceptTestedEn: '2nd Person Feminine Pronoun',
          explanationAr: '(طبيبة) مفرد مؤنث مخاطب فيناسبها الضمير (أَنْتِ).',
          explanationEn: '"أَنْتِ" matches the singular feminine addressee.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-2-5',
          textAr: 'عند توجيه النهي للبنت عن قطف الأزهار، نقول:',
          textEn: 'When advising a girl not to pick flowers, we say:',
          optionsAr: ['يا هناءُ، لا تقطفي الأزهار', 'يا هناءُ، لا يقطف الأزهار', 'يا هناءُ، قطف الأزهار', 'يا هناءُ، ما أحلى الأزهار'],
          optionsEn: [
            'يا هناءُ، لا تقطفي الأزهار',
            'يا هناءُ، لا يقطف الأزهار',
            'يا هناءُ، قطف الأزهار',
            'يا هناءُ، ما أحلى الأزهار'
          ],
          correctIndex: 0,
          conceptTestedAr: 'صياغة أسلوب النهي للمؤنث',
          conceptTestedEn: 'Feminine Prohibitive Conjugation',
          explanationAr: 'عند نهي المؤنث تتصل ياء المخاطبة بآخر الفعل: (لا تقطفي).',
          explanationEn: 'For feminine address, we attach the feminine marker: "لا تقطفي".',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: THEME 2 - "النيل سر الحياة"، ضمائر الغائب وأدوات الاستفهام ──
  {
    id: 'p2-ar-3',
    order: 3,
    titleAr: 'المحاضرة 3: نص "النيل سر الحياة"، ضمائر الغائب (هو / هي) وأدوات الاستفهام الشاملة',
    titleEn: 'Lecture 3: "The Nile is Secret of Life", 3rd Person Pronouns (He / She) & Interrogatives',
    subtitleAr: 'اكتشاف فضل نهر النيل العظيم على مصر، وإتقان ضمائر الغائب (هو / هي)، وصياغة الأسئلة بجميع أدوات الاستفهام',
    subtitleEn: 'Learn the significance of the Nile, 3rd person pronouns (He/She), and interrogative question formation.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — الموضوع الأول: أرضنا الجميلة ونهر النيل',
    unitTitleEn: 'Theme 2: The World Around Me — Topic 1: Our Land & River Nile',
    lessonNumberAr: 'الدرس 3: نص "النيل سر الحياة"، ضمائر الغائب وأدوات الاستفهام',
    lessonNumberEn: 'Lesson 3: "The Nile Story", 3rd Person Pronouns & Question Words',

    keyConceptsAr: [
      'نص "النيل سر الحياة": نهر النيل أطول أنهار العالم، يمر ببلاد كثيرة في قارة إفريقيا وينتهي في مصر حيث يصب في البحر المتوسط. مياه النيل العذبة نسقي بها الناس والحيوانات ونروي بها الزرع لنجني ألذ المحاصيل. واجبنا نحو النيل: الحفاظ على نظافته وعدم تلويثه أو إلقاء القمامة فيه.',
      'ضمائر الغائب (3rd Person Pronouns): نتحدث بها عن شخص غير موجود معنا في الحديث:',
      '  - (هُوَ): للمفرد المذكر الغائب (هو فلاحٌ نشيطٌ / هو يزرعُ القمحَ).',
      '  - (هِيَ): للمفرد المؤنث الغائب (هي معلمةٌ مخلصةٌ / هي تشرحُ الدرسَ) ولجمع غير العاقل (هي سفنٌ تمخرُ عباب النيل).',
      'أدوات الاستفهام (Interrogative Tools):',
      '  - (مَنْ): للسؤال عن العاقل (مَنْ يزرعُ الأرضَ؟ الفلاحُ).',
      '  - (مَا / مَاذَا): للسؤال عن غير العاقل (ماذا يصبُّ النيلُ في مصر؟ البحر المتوسط).',
      '  - (أَيْنَ): للسؤال عن المكان (أين يعيشُ التمساحُ؟ في النيل).',
      '  - (مَتَى): للسؤال عن الزمان (متى تشرقُ الشمسُ؟ في الصباح).',
      '  - (كَمْ): للسؤال عن العدد (كم فرعاً لنهر النيل في مصر؟ فرعان: دمياط ورشيد).',
      '  - (كَيْفَ): للسؤال عن الحال أو الوسيلة (كيف تذهبُ إلى الحقل؟ راكباً).',
      '  - (هَلْ): للإثبات بنعم أو النفي بلا (هل تحبُّ نهر النيل؟ نعم).',
      '  - (لِمَاذَا): للسؤال عن السبب (لماذا نحافظُ على النيل؟ لأنه سرُّ الحياة).'
    ],
    keyConceptsEn: [
      'Nile River Significance: Longest river, nourishes Egyptian agriculture, ends at Mediterranean Sea with Damietta and Rosetta branches.',
      'Third-Person Pronouns: "هُوَ" (He) for singular masculine, "هِيَ" (She) for singular feminine and non-human plural.',
      'Question Tools (أدوات الاستفهام): Who (مَنْ), What (ما/ماذا), Where (أين), When (متى), How many (كم), How (كيف), Is/Did (هل), Why (لماذا).'
    ],

    conceptMapAr: [
      'نص نهر النيل (أهميته والمحافظة عليه) ➔ ضمائر الغائب (هو / هي) ➔ أدوات الاستفهام (من، ماذا، أين، متى، كم، كيف، هل، لماذا) ➔ علامة الاستفهام (؟)'
    ],
    conceptMapEn: [
      'Nile Text ➔ 3rd Person Pronouns (He / She) ➔ Question Words (Who, What, Where, When, How, Why) ➔ Question Mark (?)'
    ],

    learningOutcomesAr: [
      'أن يوضح التلميذ أهمية نهر النيل لمصر ومسؤوليته في الحفاظ على مياهه من التلوث.',
      'أن يوظف ضميري الغائب (هو / هي) مع الجمل الاسمية والفعلية بشكل صحيح.',
      'أن يختار أداة الاستفهام المناسبة لكل سؤال بناءً على الإجابة المعطاة.'
    ],
    learningOutcomesEn: [
      'Explain the importance of the Nile and the duty of preserving water cleanliness.',
      'Apply 3rd person pronouns "هو" and "هي" in oral and written Arabic.',
      'Formulate accurate interrogative questions matching specific contextual answers.'
    ],

    vocabulary: [
      {
        termAr: 'يَصُبُّ',
        termEn: 'Discharges / Flows into',
        definitionAr: 'يسكب ويفيض ماؤه في البحر المتوسط عند نهايته في مصر.'
      },
      {
        termAr: 'قَارَّة',
        termEn: 'Continent',
        definitionAr: 'أرض يابسة كبيرة جداً تضم داخلها دولاً ومدناً عديدة (مثل قارة إفريقيا).'
      },
      {
        termAr: 'سِرُّ الحَيَاة',
        termEn: 'Secret of Life',
        definitionAr: 'الأساس الذي بدونه لا تستطيع الكائنات الحية العيش والنمو.'
      },
      {
        termAr: 'سُؤَال تَام',
        termEn: 'Complete Question',
        definitionAr: 'جملة تبدأ بأداة استفهام (مثل أين أو متى) وتنتهي بعلامة الاستفهام (؟).'
      }
    ],

    warmupHookAr: 'انظر إلى خريطة مصر الجميلة! 🗺️ ترى شريطاً أزرق لامعاً يمر من الجنوب إلى الشمال كالشريان الحيوي النابض بالحياة.. إنه نهر النيل العظيم! ومن أين يأتي النيل؟ ولماذا نشرب منه؟ وكيف نحميه؟ تعالوا لنتعلم كل أدوات الاستفهام السحرية وضمائر الغائب الذكية!',
    warmupHookEn: 'Look at the map of Egypt! That shining blue ribbon flowing from South to North is the majestic River Nile! Join us to explore its beauty and master all Arabic question words and 3rd person pronouns!',

    mainContentAr: `
### 1. نص "النيل سر الحياة"
* **حقائق ومعلومات عن نهر النيل:**
  * يمر **نهر النيل** بمدن كثيرة في مصر من أسوان جنوباً حتى الإسكندرية ودمياط ورشيد شمالاً.
  * يروي النيل أراضي مصر الزراعية لنجني الخضروات والفاكهة والقطن.
  * ينقسم النيل في دلتا مصر إلى **فرعين رئيسيين**: فرع **دمياط** وفرع **رشيد**، ثم يصب مياهه في **البحر الأبيض المتوسط**.
  * **شعارنا الذهبي:** "قطرة ماء تساوي حياة.. حافظ على نظافة نيل بلادك!".

---

### 2. ضمائر الغائب: (هُوَ / هِيَ)
نستخدم ضمائر الغائب عندما نتحدث عن شخص غائب غير موجود في مجلسنا:

1. 👦 **(هُوَ):** للمفرد المذكر الغائب:
   * **هو** فلاحٌ يزرعُ الأرضَ بنشاط 🌾.
   * **هو** يشربُ ماءً نظيفاً.
   * **هو** طبيبٌ يعالجُ المرضى.

2. 👧 **(هِيَ):** للمفرد المؤنث الغائب + **لجمع غير العاقل**:
   * **هي** فتاةٌ ترسمُ لوحةً لنهر النيل 🎨.
   * **هي** تزرعُ الأزهارَ في الحديقة.
   * **هي أشجارٌ** باسقةٌ على ضفاف النهر (جمع غير عاقل).

---

### 3. أدوات الاستفهام (Question Words) وعلامة الاستفهام (؟)
كل سؤال في اللغة العربية يبدأ بـ **أداة استفهام** وينتهي بـ **علامة استفهام (؟)**:

| أداة الاستفهام | نستخدمها للسؤال عن: | مثال توضيحي |
| :--- | :--- | :--- |
| **مَنْ** | **العاقل (الإنسان)** 🧑 | **مَنْ** يزرعُ الحقلَ؟ ➔ الفلاحُ. |
| **مَا / مَاذَا** | **غير العاقل (الجماد والأشياء)** 📦 | **ماذا** ترسمُ يا أحمد؟ ➔ لوحةً. |
| **أَيْنَ** | **المكان** 📍 | **أين** يعيشُ التمساحُ؟ ➔ في النيل. |
| **مَتَى** | **الزمان والوقت** ⏰ | **متى** تشرقُ الشمسُ؟ ➔ في الصباح. |
| **كَمْ** | **العدد والكمية** 🔢 | **كم** فرعاً لنهر النيل بمصر؟ ➔ فرعان. |
| **كَيْفَ** | **الحال أو الوسيلة** 🚗 | **كيف** تسافرُ لأسوان؟ ➔ بالقطار. |
| **هَلْ** | **إثبات (نعم) أو نفي (لا)** ✅❌ | **هل** ماء النيل عذبٌ؟ ➔ نعم. |
| **لِمَاذَا** | **السبب والعلة** 💡 | **لماذا** نحافظُ على النيل؟ ➔ لأنه سر الحياة. |

---

### 4. Interactive Question & Pronoun Explorer
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Left: 3rd Person Pronouns -->
  <g transform="translate(20, 20)">
    <rect width="260" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="130" y="38" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">ضمائر الغائب (3rd Person)</text>
    <rect x="20" y="60" width="220" height="50" fill="#0369a1" rx="8"/>
    <text x="130" y="85" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">هُوَ (للمفرد المذكر 👦)</text>
    <text x="130" y="102" fill="#bae6fd" font-size="11" text-anchor="middle">هو يشربُ من ماء النيل</text>
    <rect x="20" y="120" width="220" height="50" fill="#0284c7" rx="8"/>
    <text x="130" y="145" fill="#ffffff" font-size="14" font-weight="bold" text-anchor="middle">هِيَ (للمفردة المؤنثة 👧)</text>
    <text x="130" y="162" fill="#bae6fd" font-size="11" text-anchor="middle">هي تحافظُ على نظافة النيل</text>
  </g>
  <!-- Right: Question Words Compass -->
  <g transform="translate(300, 20)">
    <rect width="400" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="200" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">❓ أدوات الاستفهام الشاملة</text>
    <text x="30" y="70" fill="#f8fafc" font-size="13">👤 <tspan fill="#34d399" font-weight="bold">مَنْ:</tspan> للعاقل</text>
    <text x="160" y="70" fill="#f8fafc" font-size="13">📍 <tspan fill="#34d399" font-weight="bold">أَيْنَ:</tspan> للمكان</text>
    <text x="285" y="70" fill="#f8fafc" font-size="13">⏰ <tspan fill="#34d399" font-weight="bold">مَتَى:</tspan> للزمان</text>
    <text x="30" y="110" fill="#f8fafc" font-size="13">📦 <tspan fill="#34d399" font-weight="bold">مَاذَا:</tspan> لغير العاقل</text>
    <text x="160" y="110" fill="#f8fafc" font-size="13">🔢 <tspan fill="#34d399" font-weight="bold">كَمْ:</tspan> للعدد</text>
    <text x="285" y="110" fill="#f8fafc" font-size="13">🚗 <tspan fill="#34d399" font-weight="bold">كَيْفَ:</tspan> للحال</text>
    <text x="30" y="150" fill="#f8fafc" font-size="13">💡 <tspan fill="#34d399" font-weight="bold">لِمَاذَا:</tspan> للسبب</text>
    <text x="160" y="150" fill="#f8fafc" font-size="13">✅ <tspan fill="#34d399" font-weight="bold">هَلْ:</tspan> للإثبات / النفي</text>
    <text x="285" y="150" fill="#facc15" font-size="14" font-weight="bold">علامة الاستفهام (؟)</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Nile Reading Text: "The Nile is Life's Essence"
* The Nile spans Africa, branches into Damietta and Rosetta in Egypt, emptying into the Mediterranean Sea.

### 2. Third-Person Pronouns (ضمائر الغائب)
* **هُوَ:** He (Masculine Singular).
* **هِيَ:** She (Feminine Singular & Non-Human Plural).

### 3. Comprehensive Question Words (أدوات الاستفهام)
* **مَنْ:** Person (Who).
* **أَيْنَ:** Place (Where).
* **مَتَى:** Time (When).
* **كَمْ:** Quantity / Count (How many).
* **كَيْفَ:** Condition / Manner (How).
* **لِمَاذَا:** Reason (Why).
* **هَلْ:** Yes/No validation.
`,

    workedExamples: [
      {
        id: 'ex-ar2-3-1',
        titleAr: 'مثال 1: اختيار أداة الاستفهام المناسبة بحسب الإجابة',
        titleEn: 'Example 1: Selecting Interrogative Tool from Answer',
        problemAr: 'اختر أداة الاستفهام المناسبة لكل سؤال بناءً على الإجابة: \n1. (...... تذهبُ إلى المدرسة؟) ➔ الإجابة: (في الساعة السابعة صباحاً).\n2. (...... يقعُ برج القاهرة؟) ➔ الإجابة: (في جزيرة الزمالك بالقاهرة).',
        problemEn: 'Select question tools: \n1. (...... do you go to school? -> At 7:00 AM)\n2. (...... is Cairo Tower located? -> In Zamalek island)',
        stepByStepSolutionAr: [
          'الخطوة 1: ننظر إلى إجابة السؤال الأول: (في الساعة السابعة صباحاً). الإجابة تدل على وقت وزمان محدد، والأداة المخصصة للزمان هي (مَتَى). إذن السؤال: "متى تذهبُ إلى المدرسة؟".',
          'الخطوة 2: ننظر إلى إجابة السؤال الثاني: (في جزيرة الزمالك). الإجابة تدل على موقع ومكان، والأداة المخصصة للمكان هي (أَيْنَ). إذن السؤال: "أين يقعُ برج القاهرة؟".'
        ],
        stepByStepSolutionEn: [
          'Step 1: Answer 1 is a time (7:00 AM) ➔ Tool is "مَتَى" (When).',
          'Step 2: Answer 2 is a place (Zamalek Island) ➔ Tool is "أَيْنَ" (Where).'
        ],
        finalAnswerAr: '1. مَتَى تذهبُ إلى المدرسة؟ \n2. أَيْنَ يقعُ برج القاهرة؟',
        finalAnswerEn: '1. مَتَى تذهبُ إلى المدرسة؟ \n2. أَيْنَ يقعُ برج القاهرة؟'
      }
    ],

    textbookExercises: [
      {
        id: 'ex-ar2-text-3',
        problemAr: 'ضع ضمير غائب مناسب (هو / هي) مكان النقط: \n1. (...... يرسمُ لوحةً جميلةً لشاطئ النيل).\n2. (...... تطبخُ طعاماً شهياً للأسرة).',
        problemEn: 'Fill with 3rd person pronoun (هو / هي): \n1. (...... paints a nice Nile picture)\n2. (...... cooks delicious food for the family)',
        solutionStepsAr: [
          'الجملة الأولى تبدأ بفعل مضارع للمذكر (يرسم) فيناسبها الضمير (هُوَ).',
          'الجملة الثانية تبدأ بفعل مضارع للمؤنث (تطبخ) فيناسبها الضمير (هِيَ).'
        ],
        solutionStepsEn: [
          'Sentence 1 has masculine verb "يرسم" ➔ use "هُوَ".',
          'Sentence 2 has feminine verb "تطبخ" ➔ use "هِيَ".'
        ],
        finalAnswerAr: '1. هُوَ يرسمُ لوحةً جميلةً لشاطئ النيل. \n2. هِيَ تطبخُ طعاماً شهياً للأسرة.',
        finalAnswerEn: '1. هُوَ يرسمُ لوحةً جميلةً لشاطئ النيل. \n2. هِيَ تطبخُ طعاماً شهياً للأسرة.'
      }
    ],

    assessment: {
      id: 'as-ar2-3',
      titleAr: 'اختبار تقييم المحاضرة 3: نهر النيل، ضمائر الغائب وأدوات الاستفهام',
      titleEn: 'Lecture 3 Assessment: Nile, 3rd Person Pronouns & Question Words',
      passingScore: 80,
      questions: [
        {
          id: 'q-ar2-3-1',
          textAr: 'أين يصب نهر النيل في نهاية رحلته بمصر؟',
          textEn: 'Where does the River Nile empty at the end of its course in Egypt?',
          optionsAr: ['في البحر الأبيض المتوسط', 'في البحر الأحمر', 'في المحيط الأطلسي', 'في الصحراء الغربية'],
          optionsEn: ['In the Mediterranean Sea', 'In the Red Sea', 'In the Atlantic Ocean', 'In the Western Desert'],
          correctIndex: 0,
          conceptTestedAr: 'معلومات نص نهر النيل سر الحياة',
          conceptTestedEn: 'Nile Text Comprehension',
          explanationAr: 'ينتهي نهر النيل في شمال مصر حيث يصب مياهه في البحر الأبيض المتوسط عبر فرعي دمياط ورشيد.',
          explanationEn: 'The Nile discharges into the Mediterranean Sea through Damietta and Rosetta.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-3-2',
          textAr: 'ما أداة الاستفهام المناسبة للسؤال عن "مكان" عيش الأسماك؟',
          textEn: 'What question word is used to inquire about the place fish live?',
          optionsAr: ['أَيْنَ', 'مَتَى', 'مَنْ', 'كَمْ'],
          optionsEn: ['أَيْنَ (Where)', 'مَتَى (When)', 'مَنْ (Who)', 'كَمْ (How many)'],
          correctIndex: 0,
          conceptTestedAr: 'أداة الاستفهام للمكان أين',
          conceptTestedEn: 'Interrogative for Location: أين',
          explanationAr: 'نسأل عن المكان والجهات دائماً بأداة الاستفهام (أَيْنَ).',
          explanationEn: '"أَيْنَ" (Where) is strictly used for inquiring about locations.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-3-3',
          textAr: 'إذا كانت الإجابة: "(ذهبَ أحمدُ إلى الحديقةِ يومَ الجمعةِ)"، فما أداة الاستفهام المناسبة للسؤال عن الوقت؟',
          textEn: 'If answer is: "(Ahmed went to the garden on Friday)", what question word is used for time?',
          optionsAr: ['مَتَى', 'مَاذَا', 'كَيْفَ', 'هَلْ'],
          optionsEn: ['مَتَى (When)', 'مَاذَا (What)', 'كَيْفَ (How)', 'هَلْ (Did)'],
          correctIndex: 0,
          conceptTestedAr: 'أداة الاستفهام للزمان متى',
          conceptTestedEn: 'Interrogative for Time: متى',
          explanationAr: '(يوم الجمعة) يدل على زمن، ونسأل عن الزمان بـ (مَتَى ذهبَ أحمدُ إلى الحديقةِ؟).',
          explanationEn: '"مَتَى" (When) is used to ask about time.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-3-4',
          textAr: 'ما الضمير الغائب المناسب في: "(...... تلميذةٌ تحفظُ القرآنَ الكريم)"؟',
          textEn: 'Which 3rd person pronoun fits: "(...... a student girl memorizing Quran)"?',
          optionsAr: ['هِيَ', 'هُوَ', 'أَنْتَ', 'أَنَا'],
          optionsEn: ['هِيَ (She)', 'هُوَ (He)', 'أَنْتَ', 'أَنَا'],
          correctIndex: 0,
          conceptTestedAr: 'ضمير الغائب للمفرد المؤنث هي',
          conceptTestedEn: '3rd Person Feminine Pronoun',
          explanationAr: '(تلميذة) مفرد مؤنث غائب يناسبها الضمير (هِيَ).',
          explanationEn: '"هِيَ" represents 3rd person singular feminine.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-3-5',
          textAr: 'ماذا نضع في نهاية جملة السؤال في اللغة العربية؟',
          textEn: 'What punctuation mark concludes a question in Arabic?',
          optionsAr: ['علامة الاستفهام (؟)', 'النقطة (.)', 'علامة التعجب (!)', 'الفاصلة (،)'],
          optionsEn: ['Question Mark (؟)', 'Period (.)', 'Exclamation Mark (!)', 'Comma (،)'],
          correctIndex: 0,
          conceptTestedAr: 'علامات الترقيم وعلامة الاستفهام',
          conceptTestedEn: 'Punctuation: Question Mark',
          explanationAr: 'تنتهي كل جملة استفهامية بعلامة الاستفهام (؟).',
          explanationEn: 'Every question ends with an Arabic question mark (؟).',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: THEME 2 - أنواع الأفعال، حروف العطف وحروف الجر ──
  {
    id: 'p2-ar-4',
    order: 4,
    titleAr: 'المحاضرة 4: أنواع الأفعال (ماضٍ / مضارع / أمر)، حروف العطف وحروف الجر',
    titleEn: 'Lecture 4: Verb Tenses (Past / Present / Imperative), Conjunctions & Prepositions',
    subtitleAr: 'التمييز بين الفعل الماضي والمضارع والأمر، وإتقان حروف العطف (و، فـ، ثم) وحروف الجر في تكوين جمل عربية فصيحة',
    subtitleEn: 'Master 3 verb tenses (Past/Present/Imperative), conjunctions (و / فـ / ثم), and prepositions.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - كتاب تواصل (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Edu 2.0 (Egyptian National Curriculum)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — الموضوع الثاني: أساليب وتراكيب لغتي الجميلة',
    unitTitleEn: 'Theme 2: The World Around Me — Topic 2: Arabic Grammar Structures',
    lessonNumberAr: 'الدرس 4: أنواع الأفعال الثلاثة، حروف العطف وحروف الجر',
    lessonNumberEn: 'Lesson 4: Verb Types, Conjunctions & Prepositions',

    keyConceptsAr: [
      'أنواع الأفعال الثلاثة (Verb Tenses):',
      '  1. الفعل الماضي: حدثٌ وقع وانتهى في الزمن الماضي (كَتَبَ، قَرَأَ، شَرِبَ، لَعِبَتْ).',
      '  2. الفعل المضارع: حدثٌ مستمر ويحدث الآن في الحاضر (يَكْتُبُ، تَقْرَأُ، نَلْعَبُ، أَشْرَبُ - يبدأ بحروف كلمة: أَنَيْتُ).',
      '  3. فعل الأمر: طلب حدوث عمل معين في المستقبل بأدب (اكْتُبْ، اقْرَأْ، حَافِظْ على نظافتك).',
      'حروف العطف الثلاثة (Conjunctions):',
      '  - (الواو - و): تفيد المشاركة والجمع بين شيئين معاً في نفس الوقت (دخلَ أحمدُ وعمرُ).',
      '  - (الفاء - فـ): تفيد الترتيب والسرعة دون مهلة زمنية (وصلَ القطارُ فركبنا فوراً 🚄).',
      '  - (ثُمَّ): تفيد الترتيب مع التراخي والمهلة والوقت الطويل (زرعَ الفلاحُ القمحَ ثم حصدَه بعد شهور 🌾).',
      'حروف الجر الأساسية (Prepositions):',
      '  - (مِنْ، إِلَى، عَنْ، عَلَى، فِي، الباء "بـ"، الكاف "كـ"، اللام "لـ").',
      '  - الاسم الذي يأتي بعد حرف الجر يكون اسماً مجروراً بالكسرة (في المدرسةِ / إلى البيتِ / كالقمرِ).'
    ],
    keyConceptsEn: [
      'Three Verb Forms: Past (حدث وانتهى), Present (يحدث الآن), and Imperative (طلب حدوث شيء).',
      'Conjunctions (حروف العطف): "و" (Simultaneous connection), "فـ" (Immediate succession/Speed), and "ثم" (Sequential with time delay).',
      'Common Prepositions: مِنْ (From), إِلَى (To), عَنْ (About), عَلَى (On), فِي (In), بـ (With/By), كـ (Like/As), لـ (For).'
    ],

    conceptMapAr: [
      'التراكيب اللغوية ➔ أنواع الأفعال (ماضٍ ➔ مضارع ➔ أمر) ➔ حروف العطف (و للمشاركة، فـ للسرعة، ثم للتراخي) ➔ حروف الجر (في، إلى، من، على، عن، بـ، كـ، لـ)'
    ],
    conceptMapEn: [
      'Grammar Structures ➔ Verb Forms (Past, Present, Imperative) ➔ Conjunctions (و, فـ, ثم) ➔ Prepositions (in, to, from, on, with)'
    ],

    learningOutcomesAr: [
      'أن يحدد التلميذ نوع الفعل (ماضٍ / مضارع / أمر) في الجمل المعطاة.',
      'أن يختار حرف العطف المناسب (و، فـ، ثم) بناءً على السرعة أو التراخي الزمني.',
      'أن يوظف حروف الجر وحروف العطف في كتابة فقرة تامة وسليمة لغوياً.'
    ],
    learningOutcomesEn: [
      'Identify verb tenses (Past, Present, Imperative) in given sentences.',
      'Select proper conjunctions based on context and temporal speed.',
      'Use prepositions and conjunctions accurately in expressive paragraph writing.'
    ],

    vocabulary: [
      {
        termAr: 'فِعْلٌ مَاضٍ',
        termEn: 'Past Tense Verb',
        definitionAr: 'كلمة تدل على حدث وقع وانتهى زمنه قبل وقت الكلام (مثل: رسمَ، كتبَ).'
      },
      {
        termAr: 'فِعْلٌ مُضَارِع',
        termEn: 'Present Tense Verb',
        definitionAr: 'كلمة تدل على عمل مستمر ويحدث في الوقت الحالي (مثل: يرسمُ، تكتبُ).'
      },
      {
        termAr: 'فِعْلُ أَمْر',
        termEn: 'Imperative Verb',
        definitionAr: 'كلمة نطلب بها من المخاطب تنفيذ عمل معين في المستقبل (مثل: ارسمْ، اكتبْ).'
      },
      {
        termAr: 'حَرْفُ عَطْف',
        termEn: 'Conjunction',
        definitionAr: 'حرف يربط بين كلمتين أو جملتين (كالواو للمشاركة، الفاء للسرعة، وثم للترتيب مع مهلة زمنية).'
      }
    ],

    warmupHookAr: 'فكر في يومك الجميل: بالأمس "لعبتَ" بالكرة في الحديقة (ماضٍ)، والآن "تتعلمُ" معنا اللغة العربية (مضارع)، وغداً يقول لك معلمك: "اجتهدْ لتحقق التفوق" (أمر)! واللغة العربية كالقطار السريع تربطه عربات جميلة هي حروف العطف وحروف الجر! تعال لنتعلم كيف نبني بها أجمل الجمل!',
    warmupHookEn: 'Think about your daily life: Yesterday you played (Past), right now you are learning (Present), and tomorrow your teacher says: "Excel in your studies!" (Imperative)! Join us to master Arabic verbs and connecting conjunctions!',

    mainContentAr: `
### 1. أنواع الأفعال الثلاثة (Three Verb Tenses)
الفعل هو كلمة تدل على عمل يحدث في زمن معين:

1. ⏳ **الفعل الماضي (حدث وانتهى):**
   * **شَرِبَ** أحمدُ الحليبَ في الصباح.
   * **قَرَأَتْ** مريمُ القصةَ المفيدةَ.
   * **لَعِبَ** الأولادُ في الفناء.

2. 🔄 **الفعل المضارع (يحدث الآن ومستمر):**
   * **يَشْرَبُ** أحمدُ الحليبَ الآن.
   * **تَقْرَأُ** مريمُ القصةَ.
   * **نَلْعَبُ** جميعاً بالكرة.
   * *علامة مميزة:* يبدأ بأحد حروف (أَنَيْتُ: أكتبُ، نكتبُ، يكتبُ، تكتبُ).

3. 🎯 **فعل الأمر (طلب حدوث عمل في المستقبل):**
   * **اشْرَبْ** الحليبَ يا بني 🥛.
   * **اقْرَئِي** الدرسَ يا سارة 📖.
   * **حَافِظْ** على نظافة مدرستك 🧼.

---

### 2. حروف العطف الثلاثة: (الواو / الفاء / ثم)
نربط بها بين الكلمات والجمل بمعانٍ بالغة الدقة:

1. 🤝 **(الواو - و): للمشاركة معاً في نفس الوقت:**
   * دخلَ **أحمدُ وعمرُ** الفصلَ معاً يداً بيد.
   * أحبُّ **أبي وأمي**.

2. ⚡ **(الفاء - فـ): للسرعة والترتيب المباشر (دون انتظار):**
   * وصلَ القطارُ **فركبنا** فوراً قبل أن يتحرك 🚄.
   * رأيتُ الإشارة خضراء **فعبرتُ** الشارع.

3. ⏳ **(ثُمَّ): للترتيب مع التراخي والوقت الطويل (مهلة زمنية):**
   * زرعَ الفلاحُ القمحَ **ثم** حصدَه بعد عدة شهور 🌾.
   * أتناولُ طعامَ الغداءِ **ثم** أذاكرُ دروسي.

---

### 3. حروف الجر الأساسية (Prepositions)
تجر الاسم الواقع بعدها وتضبطه بالكسرة:
* 🔹 **فِي:** الكتابُ **في** الحقيبةِ 🎒.
* 🔹 **إِلَى:** ذهبَ التلميذُ **إلى** المدرسةِ 🏫.
* 🔹 **مِنْ:** أخذتُ قلماً **من** صديقي ✏️.
* 🔹 **عَلَى:** وضعتُ الكوبَ **على** الطاولةِ 🍵.
* 🔹 **عَنْ:** قرأتُ قصةً **عن** الشجاعةِ 🦁.
* 🔹 **الباء (بـ):** كتبتُ الواجبَ **بالقلمِ** ✍️.
* 🔹 **الكاف (كـ):** الجنديُّ شجاعٌ **كالأسدِ** 🦁.
* 🔹 **اللام (لـ):** قدمتُ هديةً **لأمي** 🎁.

---

### 4. Interactive Verbs & Conjunctions Map
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Verb Tenses Box -->
  <g transform="translate(20, 20)">
    <rect width="320" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="160" y="38" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">⏱️ أنواع الأفعال الثلاثة</text>
    <text x="30" y="75" fill="#f8fafc" font-size="13">1. <tspan fill="#38bdf8" font-weight="bold">ماضٍ:</tspan> كتبَ / قرأَ (حدث وانتهى)</text>
    <text x="30" y="115" fill="#f8fafc" font-size="13">2. <tspan fill="#38bdf8" font-weight="bold">مضارع:</tspan> يكتبُ / تقرأُ (يحدث الآن)</text>
    <text x="30" y="155" fill="#f8fafc" font-size="13">3. <tspan fill="#38bdf8" font-weight="bold">أمر:</tspan> اكتبْ / اقرأْ (طلب في المستقبل)</text>
  </g>
  <!-- Conjunctions & Prepositions Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="12"/>
    <text x="165" y="38" fill="#fbbf24" font-size="16" font-weight="bold" text-anchor="middle">🔗 حروف العطف والجر</text>
    <text x="25" y="70" fill="#f8fafc" font-size="12">🔹 <tspan fill="#fbbf24" font-weight="bold">الواو (و):</tspan> للمشاركة معاً (أحمد وعمر)</text>
    <text x="25" y="100" fill="#f8fafc" font-size="12">⚡ <tspan fill="#fbbf24" font-weight="bold">الفاء (فـ):</tspan> للسرعة والترتيب (وصل فركبنا)</text>
    <text x="25" y="130" fill="#f8fafc" font-size="12">⏳ <tspan fill="#fbbf24" font-weight="bold">ثم:</tspan> للتراخي والمهلة (زرع ثم حصد)</text>
    <text x="25" y="165" fill="#34d399" font-size="12" font-weight="bold">حروف الجر: (من، إلى، عن، على، في، بـ، كـ، لـ)</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. The Three Verb Tenses
* **Past (ماضٍ):** Completed actions (كَتَبَ / شَرِبَ).
* **Present (مضارع):** Ongoing actions (يَكْتُبُ / نَلْعَبُ).
* **Imperative (أمر):** Direct polite commands (اكْتُبْ / احْفَظْ).

### 2. Conjunctions (حروف العطف)
* **و:** Simultaneous togetherness.
* **فـ:** Immediate, fast sequential action.
* **ثُمَّ:** Delayed, deliberate sequence over time.

### 3. Prepositions (حروف الجر)
* مِنْ, إِلَى, عَنْ, عَلَى, فِي, بـ, كـ, لـ.
`,

    workedExamples: [
      {
        id: 'ex-ar2-4-1',
        titleAr: 'مثال 1: اختيار حرف العطف المناسب بحسب السرعة والمهلة',
        titleEn: 'Example 1: Choosing Conjunction based on Speed/Delay',
        problemAr: 'اختر حرف العطف المناسب (و / فـ / ثم) لكل جملة: \n1. دخلَ المعلمُ (......) وقفَ التلاميذُ لتحيته فوراً.\n2. نزرعُ الأرزَ (......) نحصدُه بعد أربعة أشهر.',
        problemEn: 'Select (و / فـ / ثم): \n1. The teacher entered (...) the students stood immediately.\n2. We plant rice (...) harvest it 4 months later.',
        stepByStepSolutionAr: [
          'الخطوة 1: في الجملة الأولى، وقوف التلاميذ حدث فوراً وبسرعة بمجرد دخول المعلم، والحرف الذي يفيد السرعة هو (الفاء). إذن: "دخلَ المعلمُ فوقفَ التلاميذُ".',
          'الخطوة 2: في الجملة الثانية، حصد الأرز يحتاج إلى شهور ومهلة زمنية طويلة، والحرف الذي يفيد الترتيب مع التراخي والمهلة هو (ثُمَّ). إذن: "نزرعُ الأرزَ ثم نحصدُه".'
        ],
        stepByStepSolutionEn: [
          'Step 1: Sentence 1 is instantaneous action ➔ use "فـ" (فوقف).',
          'Step 2: Sentence 2 has 4 months delay ➔ use "ثُمَّ".'
        ],
        finalAnswerAr: '1. دخلَ المعلمُ فوقفَ التلاميذُ. \n2. نزرعُ الأرزَ ثم نحصدُه.',
        finalAnswerEn: '1. دخلَ المعلمُ فوقفَ التلاميذُ. \n2. نزرعُ الأرزَ ثم نحصدُه.'
      }
    ],

    textbookExercises: [
      {
        id: 'ex-ar2-text-4',
        problemAr: 'حدد نوع الفعل في الكلمات الملونة: \n1. (قَرَأَ) أحمدُ القصة.\n2. (يَكْتُبُ) عمرُ الدرس.\n3. (حَافِظْ) على نظافة بيئتك.',
        problemEn: 'Identify verb type: 1. قَرَأَ  2. يَكْتُبُ  3. حَافِظْ',
        solutionStepsAr: [
          '(قَرَأَ): حدث وانتهى في الماضي ➔ فعل ماضٍ.',
          '(يَكْتُبُ): يحدث الآن ومستمر ➔ فعل مضارع.',
          '(حَافِظْ): طلب عمل في المستقبل ➔ فعل أمر.'
        ],
        solutionStepsEn: [
          'قَرَأَ is Past tense.',
          'يَكْتُبُ is Present tense.',
          'حَافِظْ is Imperative.'
        ],
        finalAnswerAr: '1. (قَرَأَ): فعل ماضٍ. \n2. (يَكْتُبُ): فعل مضارع. \n3. (حَافِظْ): فعل أمر.',
        finalAnswerEn: '1. قَرَأَ: Past. \n2. يَكْتُبُ: Present. \n3. حَافِظْ: Imperative.'
      }
    ],

    assessment: {
      id: 'as-ar2-4',
      titleAr: 'اختبار تقييم المحاضرة 4: أنواع الأفعال، حروف العطف والجر',
      titleEn: 'Lecture 4 Assessment: Verb Tenses, Conjunctions & Prepositions',
      passingScore: 80,
      questions: [
        {
          id: 'q-ar2-4-1',
          textAr: 'ما نوع الفعل في جملة: "(يَسْبَحُ البطُّ في البحيرةِ)"؟',
          textEn: 'What is the tense of the verb in: "(يَسْبَحُ البطُّ في البحيرةِ)"?',
          optionsAr: ['فعل مضارع (يحدث الآن)', 'فعل ماضٍ (انتهى)', 'فعل أمر (طلب)', 'اسم مجرور'],
          optionsEn: ['Present Tense (Ongoing)', 'Past Tense (Finished)', 'Imperative (Command)', 'Prepositional Noun'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز الفعل المضارع',
          conceptTestedEn: 'Present Tense Identification',
          explanationAr: '(يَسْبَحُ) فعل مضارع يبدأ بالياء ويدل على حدث مستمر يقع الآن في الحاضر.',
          explanationEn: '"يسبح" denotes an ongoing action in the present.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-4-2',
          textAr: 'أي من حروف العطف التالية يفيد "الترتيب مع السرعة الفورية"؟',
          textEn: 'Which conjunction signifies immediate, fast succession?',
          optionsAr: ['الفاء (فـ)', 'الواو (و)', 'ثُمَّ', 'عَلَى'],
          optionsEn: ['الفاء (فـ)', 'الواو (و)', 'ثُمَّ', 'عَلَى'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة حرف العطف الفاء للسرعة',
          conceptTestedEn: 'Conjunction Function: فـ for Speed',
          explanationAr: 'حرف العطف (الفاء) يفيد الترتيب والتعقيب السريع دون مهلة زمنية (مثل: وصل القطار فركبنا).',
          explanationEn: '"الفاء" conveys immediate sequence without delay.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-4-3',
          textAr: 'ما نوع الفعل في جملة: "(رَتِّبْ ألعابكَ في الصندوقِ يا بني)"؟',
          textEn: 'What is the verb type in: "(رَتِّبْ ألعابكَ في الصندوقِ)"?',
          optionsAr: ['فعل أمر (طلب تنفيذ عمل)', 'فعل ماضٍ', 'فعل مضارع', 'حرف جر'],
          optionsEn: ['Imperative Verb', 'Past Verb', 'Present Verb', 'Preposition'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز فعل الأمر',
          conceptTestedEn: 'Imperative Verb Identification',
          explanationAr: '(رَتِّبْ) فعل أمر يُطلب به من المخاطب ترتيب ألعابه.',
          explanationEn: '"رتّب" is an imperative asking someone to organize toys.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-4-4',
          textAr: 'ما حرف الجر المناسب في جملة: "(وضعتُ كتبي ...... الحقيبةِ المدرسيةِ)"؟',
          textEn: 'What preposition fits: "(I placed my books ...... the school bag)"?',
          optionsAr: ['فِي', 'عَلَى', 'عَنْ', 'ثُمَّ'],
          optionsEn: ['فِي (In)', 'عَلَى (On)', 'عَنْ (About)', 'ثُمَّ'],
          correctIndex: 0,
          conceptTestedAr: 'حرف الجر في للظرفية المكانية',
          conceptTestedEn: 'Preposition "في" for Location',
          explanationAr: 'الكتب توضع بداخل الحقيبة، وحرف الجر المعبر عن الوعاء والداخل هو (فِي).',
          explanationEn: '"في" (In) is used for objects placed inside bags/containers.',
          difficulty: 'easy'
        },
        {
          id: 'q-ar2-4-5',
          textAr: 'أي الجمل الآتية تحتوي على حرف عطف يفيد التراخي والمهلة الزمنية الطويلة؟',
          textEn: 'Which sentence contains a conjunction indicating a time delay?',
          optionsAr: [
            'استيقظتُ في الصباح ثم ذهبتُ إلى المدرسة',
            'دخلَ المعلمُ والتلميذُ معاً',
            'سقطَ الإناءُ فانكسرَ',
            'كتبتُ بالقلمِ الحبر'
          ],
          optionsEn: [
            'استيقظتُ في الصباح ثم ذهبتُ إلى المدرسة',
            'دخلَ المعلمُ والتلميذُ معاً',
            'سقطَ الإناءُ فانكسرَ',
            'كتبتُ بالقلمِ الحبر'
          ],
          correctIndex: 0,
          conceptTestedAr: 'حرف العطف ثم للتراخي والمهلة',
          conceptTestedEn: 'Conjunction "ثم" for Time Delay',
          explanationAr: '(ثُمَّ) تفيد الترتيب والتراخي؛ لأن الاستيقاظ يليه غسل الوجه والإفطار وارتداء الملابس قبل الذهاب للمدرسة.',
          explanationEn: '"ثم" indicates sequential actions separated by time intervals.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
