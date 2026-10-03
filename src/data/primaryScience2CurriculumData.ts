import type { Lecture } from '../types';

// ============================================================================
// PRIMARY SCIENCE / DISCOVER — GRADE 2 (ديسكفر والعلوم الصف الثاني الابتدائي - نظام التعليم 2.0 المعتمد)
// Official Egyptian Language Schools & Experimental Schools Curriculum (Edu 2.0 - Discover Grade 2):
// Lecture 1: Healthy Habits, The Human Body & Internal Organs (Heart, Lungs, Stomach, Skin, Bones & Muscles)
// Lecture 2: Plant & Animal Habitats, Adaptations & Life Cycles (Plant, Butterfly, Frog & Human)
// Lecture 3: Earth Materials, Landforms & The Water Cycle (Evaporation, Condensation, Precipitation)
// Lecture 4: Light & Shadow, Sound & Vibrations (Pitch, Volume, Reflection & Shadow Formation)
// ============================================================================

export const PRIMARY_SCIENCE_G2_LECTURES: Lecture[] = [
  // ── LECTURE 1: HEALTHY HABITS & INTERNAL ORGANS ──
  {
    id: 'p2-sci-1',
    order: 1,
    titleAr: 'المحاضرة 1: العادات الصحية وأعضاء الجسم الداخلية (Internal Organs & Healthy Habits)',
    titleEn: 'Lecture 1: Healthy Habits & Human Body Internal Organs (Discover Primary 2)',
    subtitleAr: 'استكشاف أعضاء الجسم الداخلية الحيوية (القلب، الرئتان، المعدة، الجلد، العظام والعضلات) والعادات الصحية السليمة',
    subtitleEn: 'Explore vital internal organs (Heart, Lungs, Stomach, Skin, Skeleton & Muscles) and daily wellness habits.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: A Day in My Life)',
    unitTitleAr: 'Theme 1: A Day in My Life — Chapter 1: All About Me & My Body Inside',
    unitTitleEn: 'Theme 1: A Day in My Life — Chapter 1: All About Me & My Body Inside',
    lessonNumberAr: 'الدرس 1: الأعضاء الداخلية لجسم الإنسان والعادات الصحية',
    lessonNumberEn: 'Lesson 1: Human Internal Organs & Healthy Habits',

    keyConceptsAr: [
      'الأعضاء الداخلية لجسم الإنسان (Internal Organs) ووظائفها الحيوية:',
      '  1. القلب (Heart): عضلة قوية تضخ الدم الغني بالأكسجين والمواد الغذائية إلى جميع أجزاء الجسم (Pumps blood).',
      '  2. الرئتان (Lungs): تقعان في الصدر وتساعدان على التنفس؛ تستنشق الأكسجين ($O_2$) وتطرد ثاني أكسيد الكربون ($CO_2$).',
      '  3. المعدة (Stomach): كيس عضلي يهضم الطعام ويخلطه بالعصارات الهاضمة ليتحول إلى سائل يمتصه الجسم (Digests food).',
      '  4. الجلد (Skin): أكبر عضو في الجسم، يحمي الأعضاء الداخلية من الجراثيم وأشعة الشمس وينظم حرارة الجسم.',
      '  5. العظام والعضلات (Bones & Muscles - Skeleton): العظام تحمي الأعضاء الرقيقة وتعطي الجسم شكله، والعضلات تساعدنا على الحركة والانحناء.',
      'العادات الصحية لبناء جسم قوي (Healthy Habits):',
      '  - تناول وجبات متوازنة غنية بالخضار والفواكه والبروتين.',
      '  - شرب كميات كافية من الماء النقي يومياً (6-8 أكواب).',
      '  - ممارسة الرياضة والحركة يومياً لمدة 60 دقيقة.',
      '  - النوم المنتظم من 9 إلى 11 ساعة ليلاً لتجديد طاقة الخلايا.'
    ],
    keyConceptsEn: [
      'Major Internal Organs and Functions: Heart (pumps blood), Lungs (breathe O2 / exhale CO2), Stomach (digests food), Skin (protects body & regulates temp), Bones & Muscles (support & movement).',
      'Healthy Habits: Balanced nutrition, 6-8 glasses of water, 60 minutes of daily physical activity, 9-11 hours of restful sleep, and dental/personal hygiene.'
    ],

    conceptMapAr: [
      'جسم الإنسان وصحته ➔ الأعضاء الداخلية (القلب يضخ الدم + الرئتان للتنفس + المعدة للهضم + الجلد للحماية + العظام للحركة) ➔ العادات الصحية اليومية'
    ],
    conceptMapEn: [
      'Human Body & Health ➔ Internal Organs (Heart=Pump, Lungs=Breathe, Stomach=Digest, Skin=Protect, Skeleton=Support) ➔ Daily Wellness Habits'
    ],

    learningOutcomesAr: [
      'أن يحدد التلميذ موقع ووظيفة كل عضو داخلي (القلب، الرئتان، المعدة، الجلد، العظام والعضلات).',
      'أن يشرح كيفية عمل الأعضاء معاً للحفاظ على صحة ونشاط الإنسان.',
      'أن يصنف السلوكيات اليومية إلى عادات صحية (Healthy) وعادات غير صحية (Unhealthy).'
    ],
    learningOutcomesEn: [
      'Identify the location and function of the Heart, Lungs, Stomach, Skin, and Bones/Muscles.',
      'Explain how internal organs cooperate to maintain human health and energy.',
      'Classify daily routines into Healthy and Unhealthy habits.'
    ],

    vocabulary: [
      {
        termAr: 'عضو داخلي (Internal Organ)',
        termEn: 'Internal Organ',
        definitionAr: 'جزء مهم يقع داخل جسم الإنسان ويؤدي وظيفة خاصة للحفاظ على حياته (كالقلب والرئتين).'
      },
      {
        termAr: 'القلب (Heart)',
        termEn: 'Heart',
        definitionAr: 'عضلة بحجم قبضة اليد تضخ الدم المحمل بالأكسجين والغذاء لكامل الجسم.'
      },
      {
        termAr: 'الرئتان (Lungs)',
        termEn: 'Lungs',
        definitionAr: 'عضوان إسفنجيان في الصدر مسؤولان عن عملية تبادل الغازات والتنفس.'
      },
      {
        termAr: 'الهضم (Digestion)',
        termEn: 'Digestion',
        definitionAr: 'تفتيت الطعام داخل المعدة والأمعاء إلى عناصر غذائية بسيطة تمد الجسم بالطاقة.'
      },
      {
        termAr: 'الهيكل العظمي (Skeleton)',
        termEn: 'Skeleton',
        definitionAr: 'مجموعة العظام المترابطة التي تدعم الجسم وتحمي الأعضاء الرقيقة كالمخ والقلب.'
      }
    ],

    warmupHookAr: 'ضع يدك على الجانب الأيسر من صدرك.. هل تشعر بالنبض اللطيف؟ لب-دب.. لب-دب! ❤️ هذا قلبك البطل الذي يعمل ليل نهار دون توقف ليضخ الدم لجميع عضلاتك! وماذا يحدث للتفاحة اللذيذة عندما تأكلها؟ تذهب للمعدة لتهضمها! تعالوا لنغوص في رحلة سحرية داخل جسم الإنسان!',
    warmupHookEn: 'Place your hand over your left chest: can you feel the rhythmic thump-thump? That is your amazing Heart pumping blood right now! What happens to that crunchy apple you ate for breakfast? Join us on an exciting journey inside our wonderful body!',

    mainContentAr: `
### 1. Human Body Internal Organs (الأعضاء الداخلية لجسم الإنسان)
Inside our body, specialized organs work together like an elite team:

1. ❤️ **The Heart (القلب):**
   * **Location:** In the middle of the chest, slightly to the left.
   * **Job:** Pumps blood rich in oxygen and nutrients through blood vessels to every cell in the body.
   * **Fact:** Your heart beats around $80$–$100$ times every single minute!

2. 🫁 **The Lungs (الرئتان):**
   * **Location:** Inside the rib cage.
   * **Job:** When you **inhale** (breathe in), your lungs take in fresh **Oxygen ($O_2$)**. When you **exhale** (breathe out), they release waste **Carbon Dioxide ($CO_2$)**.

3. 🥣 **The Stomach (المعدة):**
   * **Location:** In the upper abdomen.
   * **Job:** Acts like a food processor! It churns food and mixes it with stomach acids to break it down into liquid nutrients that give you energy to play and learn.

4. 🛡️ **The Skin (الجلد):**
   * **Job:** Our body's protective shield! It keeps germs out, prevents water loss, and sweats to cool the body down on hot days.

5. 🦴 **Bones & Muscles (العظام والعضلات):**
   * **Bones (Skeleton):** Provide a strong framework and protect soft organs (the skull protects the brain; the rib cage protects heart & lungs).
   * **Muscles:** Connected to bones to pull and allow running, jumping, and smiling!

---

### 2. Healthy vs. Unhealthy Habits (العادات الصحية وغير الصحية)

| Category | Healthy Habits (عادات صحية) ✅ | Unhealthy Habits (عادات ضارة) ❌ |
| :--- | :--- | :--- |
| **Nutrition (التغذية)** | Eating fresh fruits 🍎, vegetables 🥦, fish & milk 🥛 | Eating too much sugary candy 🍭 & fast food 🍟 |
| **Hydration (الماء)** | Drinking 6–8 glasses of pure water daily 💧 | Drinking excessive sugary soda drinks 🥤 |
| **Physical Activity** | Playing outdoor sports, running & dancing ⚽ | Sitting in front of screens for hours without moving 📱 |
| **Sleep & Rest** | Sleeping 9–10 hours early at night 😴 | Staying up late playing video games 🌙 |

---

### 3. Interactive Internal Organs Diagram
\`\`\`xml
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="240" fill="#0f172a" rx="16"/>
  <!-- Organ 1: Heart -->
  <g transform="translate(15, 20)">
    <rect width="130" height="200" fill="#1e293b" stroke="#f43f5e" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="30" text-anchor="middle">❤️</text>
    <text x="65" y="80" fill="#fda4af" font-size="16" font-weight="bold" text-anchor="middle">Heart (القلب)</text>
    <text x="65" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">Pumps blood</text>
    <text x="65" y="140" fill="#94a3b8" font-size="11" text-anchor="middle">Sends oxygen</text>
    <text x="65" y="165" fill="#34d399" font-size="11" text-anchor="middle">Beats 80+ bpm</text>
  </g>
  <!-- Organ 2: Lungs -->
  <g transform="translate(155, 20)">
    <rect width="130" height="200" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="30" text-anchor="middle">🫁</text>
    <text x="65" y="80" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">Lungs (الرئتان)</text>
    <text x="65" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">Breathe Air</text>
    <text x="65" y="140" fill="#94a3b8" font-size="11" text-anchor="middle">Inhale Oxygen</text>
    <text x="65" y="165" fill="#34d399" font-size="11" text-anchor="middle">Exhale CO2</text>
  </g>
  <!-- Organ 3: Stomach -->
  <g transform="translate(295, 20)">
    <rect width="130" height="200" fill="#1e293b" stroke="#eab308" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="30" text-anchor="middle">🥣</text>
    <text x="65" y="80" fill="#facc15" font-size="16" font-weight="bold" text-anchor="middle">Stomach (المعدة)</text>
    <text x="65" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">Digests food</text>
    <text x="65" y="140" fill="#94a3b8" font-size="11" text-anchor="middle">Breaks nutrients</text>
    <text x="65" y="165" fill="#34d399" font-size="11" text-anchor="middle">Gives energy</text>
  </g>
  <!-- Organ 4: Skin -->
  <g transform="translate(435, 20)">
    <rect width="130" height="200" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="30" text-anchor="middle">🛡️</text>
    <text x="65" y="80" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">Skin (الجلد)</text>
    <text x="65" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">Protects body</text>
    <text x="65" y="140" fill="#94a3b8" font-size="11" text-anchor="middle">Blocks germs</text>
    <text x="65" y="165" fill="#34d399" font-size="11" text-anchor="middle">Cools with sweat</text>
  </g>
  <!-- Organ 5: Bones & Muscles -->
  <g transform="translate(575, 20)">
    <rect width="130" height="200" fill="#1e293b" stroke="#a855f7" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="30" text-anchor="middle">🦴</text>
    <text x="65" y="80" fill="#c084fc" font-size="15" font-weight="bold" text-anchor="middle">Skeleton & Muscle</text>
    <text x="65" y="115" fill="#f8fafc" font-size="12" text-anchor="middle">Shape & Support</text>
    <text x="65" y="140" fill="#94a3b8" font-size="11" text-anchor="middle">Protects organs</text>
    <text x="65" y="165" fill="#34d399" font-size="11" text-anchor="middle">Enables movement</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Key Internal Organs
* **Heart:** Muscular pump circulating oxygenated blood throughout the body.
* **Lungs:** Respiratory pair absorbing oxygen and expelling carbon dioxide.
* **Stomach:** Muscular organ digesting food into usable nutrients.
* **Skin:** Largest protective organ shielding against microbes and regulating temperature.
* **Bones & Muscles:** Structural framework facilitating movement and protection.

### 2. Essential Health Habits
* Balanced nutrition, hydration, daily exercise, and adequate sleep.
`,

    workedExamples: [
      {
        id: 'ex-p2-sci1-1',
        titleAr: 'مثال 1: ما هو العضو المسؤول عن ضخ الدم؟',
        titleEn: 'Example 1: Identifying the Blood Pumping Organ',
        problemAr: 'أي عضو داخلي يعمل كمضخة لتوصيل الدم المحمل بالأكسجين إلى جميع خلايا جسمك؟',
        problemEn: 'Which internal organ acts as a pump circulating oxygenated blood to all cells?',
        stepByStepSolutionAr: [
          'الخطوة 1: نفحص وظيفة كل عضو: الرئتان تتنفسان، والمعدة تهضم الطعام.',
          'الخطوة 2: العضو العضلي الذي يضخ الدم في الأوعية الدموية هو القلب (Heart).',
          'الاستنتاج: القلب (Heart) هو مضخة الدم الحيوية.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Review organ functions: Lungs handle gas exchange; stomach handles digestion.',
          'Step 2: The muscular pump moving blood is the Heart.',
          'Conclusion: The Heart.'
        ],
        finalAnswerAr: 'القلب (The Heart).',
        finalAnswerEn: 'The Heart.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-sci1-1',
        problemAr: 'ما الغاز الذي تستنشقه الرئتان من الهواء النقي عند الشهيق؟',
        problemEn: 'What gas do the lungs take in from fresh air during inhalation?',
        solutionStepsAr: [
          'عند الاستنشاق (Inhale) تأخذ الرئتان غاز الأكسجين (Oxygen - O2) المفيد للجسم.',
          'عند الزفير (Exhale) تطرد الرئتان غاز ثاني أكسيد الكربون (CO2).'
        ],
        solutionStepsEn: [
          'During inhalation, lungs absorb Oxygen (O2).',
          'During exhalation, lungs release Carbon Dioxide (CO2).'
        ],
        finalAnswerAr: 'غاز الأكسجين (Oxygen - O2).',
        finalAnswerEn: 'Oxygen (O2).'
      }
    ],

    assessment: {
      id: 'as-p2-sci1-1',
      titleAr: 'اختبار تقييم المحاضرة 1: الأعضاء الداخلية والعادات الصحية',
      titleEn: 'Lecture 1 Assessment: Internal Organs & Healthy Habits',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-sci1-1',
          textAr: 'ما هي الوظيفة الأساسية للقلب (The Heart) في جسم الإنسان؟',
          textEn: 'What is the main function of the Heart?',
          optionsAr: [
            'ضخ الدم المحمل بالأكسجين لكامل الجسم (Pumps blood)',
            'هضم الأطعمة الصلبة',
            'تذوق الأطعمة والحلويات',
            'سماع الأصوات الخارجية'
          ],
          optionsEn: [
            'Pumps oxygen-rich blood throughout the body',
            'Digests solid foods',
            'Tastes sweet treats',
            'Listens to outside sounds'
          ],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة القلب في ضخ الدم',
          conceptTestedEn: 'Heart Function: Pumping Blood',
          explanationAr: 'القلب عضلة تضخ الدم المؤكسج إلى جميع أعضاء وخلايا الجسم لتمدها بالطاقة.',
          explanationEn: 'The heart pumps oxygenated blood to all cells in the body.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci1-2',
          textAr: 'أي عضو يقوم بهضم الطعام وخلطه بالعصارات الهاضمة؟',
          textEn: 'Which organ digests food and breaks it down into nutrients?',
          optionsAr: ['المعدة (Stomach)', 'الرئتان (Lungs)', 'الجلد (Skin)', 'العين (Eye)'],
          optionsEn: ['Stomach', 'Lungs', 'Skin', 'Eye'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة المعدة في هضم الطعام',
          conceptTestedEn: 'Stomach Function: Food Digestion',
          explanationAr: 'المعدة كيس عضلي يقوم بطحن الطعام وخلطه بالعصارات الهاضمة لتحويله لطاقة مفيدة.',
          explanationEn: 'The stomach breaks down food into liquid nutrients.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci1-3',
          textAr: 'ما هو أكبر عضو في جسم الإنسان يحميه من الجراثيم وأشعة الشمس؟',
          textEn: 'What is the largest organ protecting the body from germs and sun?',
          optionsAr: ['الجلد (Skin)', 'العظام (Bones)', 'القلب (Heart)', 'اللسان (Tongue)'],
          optionsEn: ['Skin', 'Bones', 'Heart', 'Tongue'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الجلد كأكبر عضو حماية',
          conceptTestedEn: 'Skin as Largest Protective Organ',
          explanationAr: 'الجلد هو أكبر عضو يغطي الجسم بالكامل لحمايته من البكتيريا والجراثيم وتنظيم حرارته.',
          explanationEn: 'Skin covers the entire body, blocking pathogens and regulating heat.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci1-4',
          textAr: 'أي من العادات التالية تُعتبر عادة صحية ومفيدة للجسم؟',
          textEn: 'Which of the following is a healthy habit?',
          optionsAr: [
            'شرب 6-8 أكواب من الماء وممارسة الرياضة يومياً',
            'تناول رقائق البطاطس والمشروبات الغازية طوال اليوم',
            'السهر حتى الفجر أمام الشاشات',
            'عدم غسل اليدين قبل الأكل'
          ],
          optionsEn: [
            'Drinking 6-8 glasses of water and daily exercise',
            'Eating chips and soda all day',
            'Staying up late in front of screens',
            'Never washing hands before meals'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين العادات الصحية وغير الصحية',
          conceptTestedEn: 'Identifying Healthy Lifestyle Habits',
          explanationAr: 'شرب الماء والنشاط البدني والنوم الكافي عادات ضرورية لصحة ونمو الجسم.',
          explanationEn: 'Adequate hydration and physical activity maintain prime health.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci1-5',
          textAr: 'ما الذي يحمي قلبك ورئتيك من الصدمات الخارجية؟',
          textEn: 'What protects your heart and lungs from external impacts?',
          optionsAr: ['القفص الصدري والعظام (Rib cage & Bones)', 'المعدة', 'الشعر', 'الأظافر'],
          optionsEn: ['Rib cage & Bones', 'Stomach', 'Hair', 'Nails'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الهيكل العظمي في حماية الأعضاء',
          conceptTestedEn: 'Skeletal Protection of Vital Organs',
          explanationAr: 'عظام القفص الصدري تحيط بالقلب والرئتين لحمايتهما من الصدمات.',
          explanationEn: 'The rib cage forms a protective bony shield around heart and lungs.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: HABITATS, ADAPTATIONS & LIFE CYCLES ──
  {
    id: 'p2-sci-2',
    order: 2,
    titleAr: 'المحاضرة 2: البيئات الطبيعية والتكيف ودورات الحياة (Habitats & Life Cycles)',
    titleEn: 'Lecture 2: Habitats, Adaptations & Life Cycles (Plant, Butterfly, Frog & Human)',
    subtitleAr: 'استكشاف البيئات المختلفة (الصحراء، المحيط، الغابة، القطب)، وتكيف الحيوانات، ومراحل دورات حياة الكائنات الحية',
    subtitleEn: 'Explore natural habitats, structural animal adaptations, and the life cycles of plants, butterflies, and frogs.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 2: Caring for Our World)',
    unitTitleAr: 'Theme 2: Caring for Our World — Chapter 2: Habitats, Adaptations & Cycles',
    unitTitleEn: 'Theme 2: Caring for Our World — Chapter 2: Habitats, Adaptations & Cycles',
    lessonNumberAr: 'الدرس 2: البيئات والتكيف ودورات حياة الكائنات',
    lessonNumberEn: 'Lesson 2: Habitats, Adaptations & Life Cycles',

    keyConceptsAr: [
      'البيئات الطبيعية للكائنات (Natural Habitats):',
      '  - الصحراء (Desert): حارة وجافة وقليلة الماء؛ يعيش فيها الجمل ونبات الصبار.',
      '  - المحيط / البحر (Ocean): مياه مالحة واسعة؛ يعيش فيها الأسماك والحيتان والشعب المرجانية.',
      '  - الغابة المطيرة (Rainforest): دافئة ورطبة ومليئة بالأشجار الكثيفة؛ يعيش فيها القردة والطيور الملونة.',
      '  - البيئة القطبية (Polar / Arctic): شديدة البرودة ومغطاة بالجليد؛ يعيش فيها الدب القطبي والبطريق.',
      'التكيف للبقاء (Animal Adaptations):',
      '  - الجمل: خف عريض للمشي على الرمال، وسنام لتخزين الدهون، ورموش طويلة للحماية من الغبار.',
      '  - الدب القطبي: فراء أبيض سميك للدفء والتمويه (Camouflage) وطبقة دهن عازلة.',
      '  - نبات الصبار: أوراق شوكية لمنع فقدان الماء وجذور ممتدة لامتصاص أي قطرة مطر.',
      'دورات الحياة (Life Cycles):',
      '  - دورة حياة النبات (Plant Life Cycle): Seed (بذرة) ➔ Sprout/Germination (إنبات) ➔ Seedling (نبتة صغيرة) ➔ Adult Plant with Flowers & Fruit (نبات كامل بالأزهار والثمار).',
      '  - دورة حياة الفراشة (Butterfly Life Cycle): Egg (بيضة) ➔ Caterpillar / Larva (يرقة تأكل الأوراق) ➔ Chrysalis / Pupa (شرنقة) ➔ Adult Butterfly (فراشة كاملة).',
      '  - دورة حياة الضفدع (Frog Life Cycle): Egg in water ➔ Tadpole (شرغوف يسبح بذيل) ➔ Froglet with legs ➔ Adult Frog (ضفدع يقفز على اليابسة).'
    ],
    keyConceptsEn: [
      'Major Habitats: Desert (hot & dry), Ocean (marine), Rainforest (dense & humid), Polar/Tundra (freezing ice).',
      'Adaptations: Camel (hump & wide hooves), Polar Bear (thick white fur & blubber), Cactus (spines & water storing stem).',
      'Plant Life Cycle: Seed ➔ Sprout ➔ Seedling ➔ Adult Plant producing seeds.',
      'Butterfly Metamorphosis: Egg ➔ Caterpillar (Larva) ➔ Chrysalis (Pupa) ➔ Adult Butterfly.',
      'Frog Metamorphosis: Egg ➔ Tadpole ➔ Froglet ➔ Adult Frog.'
    ],

    conceptMapAr: [
      'الكائنات في بيئاتها ➔ البيئات الطبيعية (صحراء، قطب، محيط، غابة) ➔ التكيفات الجسدية للبقاء ➔ دورات الحياة (نبات ➔ فراشة ➔ ضفدع ➔ إنسان)'
    ],
    conceptMapEn: [
      'Organisms in Habitats ➔ Habitats (Desert, Polar, Ocean, Jungle) ➔ Survival Adaptations ➔ Life Cycles (Plant, Butterfly, Frog, Human)'
    ],

    learningOutcomesAr: [
      'أن يقارن التلميذ بين خصائص البيئات الطبيعية المختلفة (درجة الحرارة والماء والكائنات).',
      'أن يوضح أمثلة للتكيف الجسدي والسلوكي للحيوانات والنباتات في بيئاتها.',
      'أن يرتب مراحل دورة حياة النبات والفراشة والضفدع ترتيباً صحيحاً.'
    ],
    learningOutcomesEn: [
      'Compare environmental characteristics of major global habitats.',
      'Explain structural adaptations of desert and arctic organisms.',
      'Sequence the metamorphosis stages of a butterfly, frog, and flowering plant.'
    ],

    vocabulary: [
      {
        termAr: 'الموطن / البيئة (Habitat)',
        termEn: 'Habitat',
        definitionAr: 'المكان الطبيعي الذي يعيش فيه الكائن الحي ويجد فيه طعامه وماءه ومأواه.'
      },
      {
        termAr: 'التكيف (Adaptation)',
        termEn: 'Adaptation',
        definitionAr: 'صفة أو ميزة جسدية تساعد الكائن الحي على البقاء حياً في بيئته.'
      },
      {
        termAr: 'التمويه (Camouflage)',
        termEn: 'Camouflage',
        definitionAr: 'تلون الحيوان بلون بيئته ليختفي عن أعين الأعداء أو الفرائس (كفراء الدب الأبيض في الثلج).'
      },
      {
        termAr: 'دورة الحياة (Life Cycle)',
        termEn: 'Life Cycle',
        definitionAr: 'المراحل المتتابعة التي يمر بها الكائن الحي من بداية حياته حتى ينمو ويتكاثر.'
      }
    ],

    warmupHookAr: 'كيف يستطيع الجمل أن يعيش في الصحراء الحارة لأسابيع دون أن يعطش؟ 🐪 وكيف يتحول الشرغوف الصغير الذي يشبه السمكة إلى ضفدع أخضر يقفز على ضفاف الأنهار؟ 🐸 وكيف تخرج فراشة بأجنحة ملونة ساحرة من داخل شرنقة مغلقة؟ 🦋 تعالوا لنكتشف أسرار البيئات ودورات الحياة المدهشة!',
    warmupHookEn: 'How can a camel trek through scorching desert sands without drinking for days? How does a tiny swimming tadpole turn into a jumping green frog? And how does a caterpillar transform into a magnificent butterfly? Let us discover the miracles of nature!',

    mainContentAr: `
### 1. Habitats and Animal Adaptations (البيئات وتكيف الكائنات)

1. 🏜️ **The Desert Habitat (البيئة الصحراوية):**
   * **Conditions:** Very hot, dry, sunny, and very little rain.
   * **Camel (سفينة الصحراء):** Stores fat in its hump for energy, has broad padded feet to walk on soft sand, and long eyelashes to protect its eyes from sandstorms.
   * **Cactus Plant (الصبار):** Has thick fleshy stems to store water and sharp spines instead of broad leaves to prevent water loss.

2. ❄️ **The Polar Habitat (البيئة القطبية المتجمدة):**
   * **Conditions:** Extremely cold, icy, and covered with white snow.
   * **Polar Bear (الدب القطبي):** Covered with thick waterproof white fur for camouflage in the snow, and has a thick layer of fat (**blubber**) under its skin to stay warm.

3. 🌊 **The Ocean Habitat (بيئة المحيط):**
   * **Conditions:** Deep, vast salty water.
   * **Fish & Whales:** Fish use gills to breathe underwater and streamlined fins to swim fast.

---

### 2. Life Cycles (دورات حياة الكائنات الحية)
A **Life Cycle** shows how a living thing starts, grows, reproduces, and makes new life:

#### A. Butterfly Life Cycle (دورة حياة الفراشة):
1. **Egg (بيضة):** Laid by mother butterfly on a green leaf. 🥚
2. **Caterpillar / Larva (يرقة):** Hatches and eats leaves hungrily to grow bigger. 🐛
3. **Chrysalis / Pupa (شرنقة):** Rests inside a protective silk shell while transforming. 🥜
4. **Adult Butterfly (فراشة كاملة):** Emerges with beautiful wings and flies! 🦋

#### B. Frog Life Cycle (دورة حياة الضفدع):
1. **Eggs (بيض في الماء):** Laid in calm pond water.
2. **Tadpole (شرغوف):** Has a tail and gills to swim like a tiny fish.
3. **Froglet (ضفدع صغير):** Grows back legs and front legs, and tail shrinks.
4. **Adult Frog (ضفدع مكتمل):** Breathes air with lungs and jumps on land! 🐸

#### C. Plant Life Cycle (دورة حياة النبات):
1. **Seed (بذرة)** ➔ 2. **Sprout (إنبات)** ➔ 3. **Seedling (نبتة صغيرة)** ➔ 4. **Adult Plant with Flowers & Seeds (نبات بالغ)** 🌱 ➔ 🌻

---

### 3. Interactive Life Cycle Visual Board
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Butterfly Cycle Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">🦋 Butterfly Life Cycle (Metamorphosis)</text>
    <text x="30" y="70" fill="#f8fafc" font-size="13">1. <tspan fill="#fde047" font-weight="bold">Egg (بيضة):</tspan> Laid on leaves</text>
    <text x="30" y="105" fill="#f8fafc" font-size="13">2. <tspan fill="#34d399" font-weight="bold">Caterpillar (يرقة):</tspan> Eats leaves 🐛</text>
    <text x="30" y="140" fill="#f8fafc" font-size="13">3. <tspan fill="#fbbf24" font-weight="bold">Chrysalis (شرنقة):</tspan> Resting stage 🥜</text>
    <text x="30" y="175" fill="#f8fafc" font-size="13">4. <tspan fill="#ec4899" font-weight="bold">Adult Butterfly:</tspan> Colorful wings 🦋</text>
  </g>

  <!-- Frog Cycle Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">🐸 Frog Life Cycle</text>
    <text x="30" y="70" fill="#f8fafc" font-size="13">1. <tspan fill="#fde047" font-weight="bold">Eggs:</tspan> Laid in pond water</text>
    <text x="30" y="105" fill="#f8fafc" font-size="13">2. <tspan fill="#38bdf8" font-weight="bold">Tadpole:</tspan> Swims with tail & gills</text>
    <text x="30" y="140" fill="#34d399" font-size="13">3. <tspan fill="#fbbf24" font-weight="bold">Froglet:</tspan> Grows 4 legs, tail disappears</text>
    <text x="30" y="175" fill="#f8fafc" font-size="13">4. <tspan fill="#4ade80" font-weight="bold">Adult Frog:</tspan> Breathes air, hops on land 🐸</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Habitats & Adaptations
* **Desert:** Camels (hump, broad pads), Cactus (spines, water storage).
* **Polar:** Polar Bear (white camouflage fur, blubber).

### 2. Metamorphosis & Life Cycles
* **Butterfly:** Egg ➔ Caterpillar (Larva) ➔ Chrysalis (Pupa) ➔ Adult Butterfly.
* **Frog:** Egg ➔ Tadpole ➔ Froglet ➔ Adult Frog.
* **Plant:** Seed ➔ Sprout ➔ Seedling ➔ Adult Flowering Plant.
`,

    workedExamples: [
      {
        id: 'ex-p2-sci2-1',
        titleAr: 'مثال 1: ما هو الترتيب الصحيح لدورة حياة الفراشة؟',
        titleEn: 'Example 1: Butterfly Metamorphosis Sequence',
        problemAr: 'رتب مراحل دورة حياة الفراشة من البداية: (Adult Butterfly, Caterpillar, Chrysalis, Egg).',
        problemEn: 'Sequence butterfly life cycle stages: (Adult Butterfly, Caterpillar, Chrysalis, Egg).',
        stepByStepSolutionAr: [
          'المرحلة 1: تبدأ الفراشة حياتها داخل بيضة صغيرة (Egg) على ورقة شجر.',
          'المرحلة 2: تفقس البيضة وتخرج اليرقة الجائعة (Caterpillar / Larva).',
          'المرحلة 3: تلف اليرقة نفسها بشرنقة واقية تسمى (Chrysalis / Pupa).',
          'المرحلة 4: تخرج الفراشة الكاملة البالغة ذات الأجنحة الملونة (Adult Butterfly).'
        ],
        stepByStepSolutionEn: [
          'Step 1: Egg',
          'Step 2: Caterpillar (Larva)',
          'Step 3: Chrysalis (Pupa)',
          'Step 4: Adult Butterfly'
        ],
        finalAnswerAr: 'Egg ➔ Caterpillar ➔ Chrysalis ➔ Adult Butterfly.',
        finalAnswerEn: 'Egg ➔ Caterpillar ➔ Chrysalis ➔ Adult Butterfly.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-sci2-1',
        problemAr: 'كيف يساعد الفراء الأبيض الدب القطبي في بيئته الجليدية؟',
        problemEn: 'How does white fur help the polar bear in its icy habitat?',
        solutionStepsAr: [
          'الفراء الأبيض السميك يمنح الدب الدفء الشديد في البرد القارس.',
          'يساعده على التمويه (Camouflage) والاختفاء في الثلج الأبيض ليصطاد فرائسه بنجاح.'
        ],
        solutionStepsEn: [
          'Thick fur provides insulation against extreme cold.',
          'White color acts as camouflage in snow for hunting.'
        ],
        finalAnswerAr: 'يوفر الدفء والعزل الحراري + التمويه (Camouflage) في الثلوج.',
        finalAnswerEn: 'Provides thermal warmth and camouflage in snow.'
      }
    ],

    assessment: {
      id: 'as-p2-sci2-1',
      titleAr: 'اختبار تقييم المحاضرة 2: البيئات والتكيف ودورات الحياة',
      titleEn: 'Lecture 2 Assessment: Habitats & Life Cycles',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-sci2-1',
          textAr: 'ما الترتيب الصحيح لدورة حياة الفراشة (Butterfly Life Cycle)؟',
          textEn: 'What is the correct sequence of the Butterfly life cycle?',
          optionsAr: [
            'Egg ➔ Caterpillar ➔ Chrysalis ➔ Adult Butterfly',
            'Caterpillar ➔ Egg ➔ Butterfly ➔ Chrysalis',
            'Butterfly ➔ Tadpole ➔ Chrysalis ➔ Egg',
            'Egg ➔ Chrysalis ➔ Caterpillar ➔ Seed'
          ],
          optionsEn: [
            'Egg ➔ Caterpillar ➔ Chrysalis ➔ Adult Butterfly',
            'Caterpillar ➔ Egg ➔ Butterfly ➔ Chrysalis',
            'Butterfly ➔ Tadpole ➔ Chrysalis ➔ Egg',
            'Egg ➔ Chrysalis ➔ Caterpillar ➔ Seed'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مراحل دورة حياة الفراشة',
          conceptTestedEn: 'Butterfly Metamorphosis Sequence',
          explanationAr: 'تبدأ بالبيضة، ثم اليرقة (Caterpillar)، ثم الشرنقة (Chrysalis)، وتنتهي بالفراشة البالغة.',
          explanationEn: 'The sequence is Egg ➔ Caterpillar (Larva) ➔ Chrysalis (Pupa) ➔ Adult Butterfly.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci2-2',
          textAr: 'كيف يتكيف الجمل (Camel) مع العيش في البيئة الصحراوية الحارة؟',
          textEn: 'How is a camel adapted to live in hot dry deserts?',
          optionsAr: [
            'يمتلك سناماً لتخزين الدهون وخفاً عريضاً للمشي على الرمال',
            'يمتلك زعانف للسباحة في الماء',
            'يمتلك فراءً أبيض سميكاً للتزلج على الجليد',
            'يمتلك أجنحة للطيران بين السحب'
          ],
          optionsEn: [
            'Has a fat-storing hump and wide padded feet for sand',
            'Has fins for swimming',
            'Has white thick fur for snow',
            'Has wings to fly'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تكيفات الجمل في الصحراء',
          conceptTestedEn: 'Camel Adaptations in Desert',
          explanationAr: 'سنام الجمل يخزن الدهون لتوليد الطاقة، وخفه العريض يمنع انغراس أقدامه في الرمال.',
          explanationEn: 'Hump stores fat for energy, and wide padded feet prevent sinking in sand.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci2-3',
          textAr: 'ماذا يسمى صغير الضفدع الذي يسبح في الماء بذيل وخياشيم قبل أن تظهر أرجله؟',
          textEn: 'What is a baby frog swimming with a tail and gills called?',
          optionsAr: ['Tadpole (شرغوف)', 'Caterpillar (يرقة)', 'Seedling', 'Cub'],
          optionsEn: ['Tadpole', 'Caterpillar', 'Seedling', 'Cub'],
          correctIndex: 0,
          conceptTestedAr: 'مرحلة الشرغوف في دورة حياة الضفدع',
          conceptTestedEn: 'Tadpole Stage in Frog Life Cycle',
          explanationAr: 'الشرغوف (Tadpole) يفقس من بيض الضفدع في الماء ويسبح بالذيل ويتنفس بالخياشيم.',
          explanationEn: 'A Tadpole is the aquatic larval stage of a frog with tail and gills.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci2-4',
          textAr: 'أي بيئة طبيعية تتميز بأنها شديدة البرودة ومغطاة بالجليد الدائم؟',
          textEn: 'Which habitat is extremely cold and covered in permanent ice?',
          optionsAr: ['Polar / Arctic (البيئة القطبية)', 'Desert (الصحراء)', 'Rainforest (الغابة المطيرة)', 'Grassland'],
          optionsEn: ['Polar / Arctic', 'Desert', 'Rainforest', 'Grassland'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص البيئة القطبية',
          conceptTestedEn: 'Polar Habitat Characteristics',
          explanationAr: 'البيئة القطبية (Polar) تتميز بالبرودة القارسة والجليد ويعيش فيها الدب القطبي والبطريق.',
          explanationEn: 'Polar regions have freezing temperatures and snow.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci2-5',
          textAr: 'ما الترتيب الصحيح لدورة حياة النبات الزهري؟',
          textEn: 'What is the correct sequence of a flowering plant life cycle?',
          optionsAr: [
            'Seed ➔ Sprout ➔ Seedling ➔ Adult Plant with Flowers',
            'Flower ➔ Seedling ➔ Seed ➔ Sprout',
            'Sprout ➔ Fruit ➔ Seedling ➔ Egg',
            'Adult Plant ➔ Caterpillar ➔ Seed ➔ Sprout'
          ],
          optionsEn: [
            'Seed ➔ Sprout ➔ Seedling ➔ Adult Plant with Flowers',
            'Flower ➔ Seedling ➔ Seed ➔ Sprout',
            'Sprout ➔ Fruit ➔ Seedling ➔ Egg',
            'Adult Plant ➔ Caterpillar ➔ Seed ➔ Sprout'
          ],
          correctIndex: 0,
          conceptTestedAr: 'دورة حياة النبات',
          conceptTestedEn: 'Plant Life Cycle Stages',
          explanationAr: 'تبدأ بالبذرة (Seed)، ثم الإنبات (Sprout)، ثم النبتة الصغيرة (Seedling)، ثم النبات البالغ الزهري.',
          explanationEn: 'Seed ➔ Sprout ➔ Seedling ➔ Adult Flowering Plant.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: EARTH MATERIALS, LANDFORMS & THE WATER CYCLE ──
  {
    id: 'p2-sci-3',
    order: 3,
    titleAr: 'المحاضرة 3: مكونات الأرض وتضاريسها ودورة الماء (Earth & Water Cycle)',
    titleEn: 'Lecture 3: Earth Materials, Landforms & The Water Cycle (Discover Primary 2)',
    subtitleAr: 'التعرف على مكونات التربة والصخور، وتضاريس سطح الأرض (الجبال، الوديان، الأنهار)، والمراحل الأربعة لدورة الماء في الطبيعة',
    subtitleEn: 'Explore Earth materials, major landforms, and the 4 stages of the Water Cycle (Evaporation, Condensation, Precipitation).',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 3: How the World Works)',
    unitTitleAr: 'Theme 3: How the World Works — Chapter 1: Earth Landforms & The Water Cycle',
    unitTitleEn: 'Theme 3: How the World Works — Chapter 1: Earth Landforms & The Water Cycle',
    lessonNumberAr: 'الدرس 3: تضاريس الأرض ودورة الماء في الطبيعة',
    lessonNumberEn: 'Lesson 3: Earth Landforms & The Water Cycle',

    keyConceptsAr: [
      'مكونات كوكب الأرض (Earth Materials):',
      '  - الصخور (Rocks): مواد صلبة غير حية تتكون منها الجبال والأرض.',
      '  - التربة (Soil): مزيج من فتات الصخور والمعادن وبقايا الكائنات المتحللة، وتنمو فيها جذور النباتات.',
      '  - الرمال (Sand): حبيبات صخرية صغيرة ناعمة توجد في الصحاري والشواطئ.',
      'تضاريس سطح الأرض (Earth Landforms):',
      '  - الجبل (Mountain): أرض مرتفعة جداً عن سطح الأرض ولها قمة عالية حادة.',
      '  - الوادي (Valley): أرض منخفضة تقع بين جبلين أو تلتين.',
      '  - السهل (Plain): أرض مستوية منبسطة واسعة مناسبة للزراعة والمدن.',
      '  - الجزيرة (Island): قطعة من اليابسة محاطة بالمياه من جميع الجهات.',
      '  - النهر (River): مجرى مائي عذب يتدفق نحو البحر (مثل نهر النيل).',
      'دورة الماء في الطبيعة (The Water Cycle Stages):',
      '  1. التبخر (Evaporation): تسخن أشعة الشمس مياه البحار والمحيطات فيتحول الماء السائل إلى بخار ماء غازي يصعد للسماء ☀️ ➔ 💨.',
      '  2. التكاثف (Condensation): يبرد بخار الماء في طبقات الجو العليا ويتجمع ليكوّن السحب والغيوم ☁️.',
      '  3. هطول الأمطار (Precipitation): عندما تصبح السحب ثقيلة بقطرات الماء، تسقط على الأرض على شكل مطر (Rain) أو ثلج (Snow) 🌧️ ❄️.',
      '  4. التجميع والجريان السطحي (Collection / Runoff): تتجمع مياه الأمطار في الأنهار والبحار والمياه الجوفية لتبدأ الدورة من جديد.'
    ],
    keyConceptsEn: [
      'Earth Materials: Solid Rocks, Nutrient-rich Soil, and Sand.',
      'Landforms: Mountains (tall peaks), Valleys (lowlands between hills), Plains (flat lands), Islands (land surrounded by water), Rivers (fresh flowing water).',
      'Water Cycle Stages: 1. Evaporation (liquid to water vapor by sun heat), 2. Condensation (vapor cools into clouds), 3. Precipitation (rain/snow falling), 4. Collection/Runoff (water flows back into rivers/oceans).'
    ],

    conceptMapAr: [
      'كوكب الأرض والماء ➔ مواد الأرض (صخور، تربة، رمال) ➔ التضاريس (جبال، وديان، سهول، جزر) ➔ دورة الماء (تبخر ➔ تكاثف ➔ هطول أمطار ➔ تجميع)'
    ],
    conceptMapEn: [
      'Earth & Water ➔ Materials (Rocks, Soil, Sand) ➔ Landforms (Mountains, Valleys, Plains, Islands) ➔ Water Cycle (Evaporation ➔ Condensation ➔ Precipitation ➔ Collection)'
    ],

    learningOutcomesAr: [
      'أن يصف التلميذ التضاريس الرئيسية للأرض (الجبل، الوادي، السهل، الجزيرة، النهر).',
      'أن يشرح مراحل دورة الماء الأربعة (التبخر، التكاثف، الهطول، التجميع).',
      'أن يوضح دور حرارة الشمس كالمحرك الأساسي لدورة الماء على كوكب الأرض.'
    ],
    learningOutcomesEn: [
      'Differentiate major Earth landforms (Mountain, Valley, Plain, Island, River).',
      'Explain the four continuous steps of the Water Cycle.',
      'Demonstrate how solar heat drives evaporation and cloud formation.'
    ],

    vocabulary: [
      {
        termAr: 'التبخر (Evaporation)',
        termEn: 'Evaporation',
        definitionAr: 'تحول الماء السائل إلى بخار ماء غير مرئي بفعل حرارة الشمس وصعوده لأعلى.'
      },
      {
        termAr: 'التكاثف (Condensation)',
        termEn: 'Condensation',
        definitionAr: 'تحول بخار الماء الغازي إلى قطرات ماء سائلة عندما يبرد في السماء لتكوين السحب.'
      },
      {
        termAr: 'الهطول (Precipitation)',
        termEn: 'Precipitation',
        definitionAr: 'سقوط الماء من الغيوم إلى الأرض في صورة مطر أو ثلج أو برد.'
      },
      {
        termAr: 'تضاريس (Landforms)',
        termEn: 'Landforms',
        definitionAr: 'الأشكال والمعالم الطبيعية المختلفة الموجودة على سطح الأرض (كالجبال والسهول).'
      }
    ],

    warmupHookAr: 'من أين تأتي قطرات المطر المتساقطة من السماء في الشتاء؟ 🌧️ وأين يذهب ماء البرك بعد أن تشرق عليه شمس الصيف الدافئة؟ ☀️ هل تعلم أن قطرة الماء التي تشربها اليوم ربما كانت سحابة فوق جبال الهيمالايا قبل مئات السنين! إنها دورة الماء السحرية الدائمة في كوكبنا!',
    warmupHookEn: 'Where does rain come from? And where do puddles vanish after the sun shines bright? The water you drink today has been traveling across the Earth for millions of years through the magical Water Cycle! Let us explore how it works!',

    mainContentAr: `
### 1. Earth Materials & Landforms (مواد وتضاريس الأرض)
Our Earth is a vibrant planet made of land and water:

#### A. Landforms (معالم سطح الأرض):
* ⛰️ **Mountain (الجبل):** A very tall piece of land rising high above the ground with steep sides and a sharp peak.
* 🏞️ **Valley (الوادي):** A low area of land situated between hills or mountains, often with a river running through it.
* 🌾 **Plain (السهل):** A broad, flat expanse of land ideal for farming and building homes.
* 🏝️ **Island (الجزيرة):** A piece of land completely surrounded by water on all four sides.
* 🌊 **River (النهر):** A long, flowing stream of fresh water that travels across land into oceans (e.g., River Nile).

---

### 2. The Four Stages of the Water Cycle (دورة الماء في الطبيعة)
Water is always on the move in a continuous circle driven by the **Sun ☀️**:

1. ☀️ **Evaporation (التبخر):**
   * The hot sun warms the water in oceans, rivers, and lakes.
   * Liquid water turns into invisible **Water Vapor** (gas) and rises high into the sky.

2. ☁️ **Condensation (التكاثف):**
   * High up in the sky, the air is cold!
   * The warm water vapor cools down and turns back into tiny liquid water droplets that bundle together to form **Clouds**.

3. 🌧️ **Precipitation (هطول الأمطار):**
   * Clouds become too heavy with water drops!
   * Water falls back to Earth as **Rain (مطر)**, **Snow (ثلج)**, or **Hail (بَرَد)**.

4. 🌊 **Collection & Runoff (التجميع والجريان السطحي):**
   * Rainwater collects in rivers, lakes, oceans, and underground aquifers, and the cycle repeats forever!

---

### 3. Interactive Water Cycle Diagram
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Sun -->
  <circle cx="80" cy="50" r="25" fill="#facc15"/>
  <text x="80" y="55" font-size="20" text-anchor="middle">☀️</text>
  <text x="80" y="90" fill="#fde047" font-size="11" font-weight="bold" text-anchor="middle">1. Sun Heats Water</text>

  <!-- Evaporation Arrow -->
  <path d="M120 160 Q140 100 180 80" stroke="#fbbf24" stroke-width="3" stroke-dasharray="4" fill="none"/>
  <text x="170" y="125" fill="#fde047" font-size="12" font-weight="bold">Evaporation 💨</text>

  <!-- Condensation Cloud -->
  <g transform="translate(300, 30)">
    <rect width="130" height="50" fill="#334155" rx="20"/>
    <text x="65" y="32" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">2. Condensation ☁️</text>
  </g>

  <!-- Precipitation Rain -->
  <path d="M470 70 Q510 110 530 150" stroke="#38bdf8" stroke-width="3" stroke-dasharray="4" fill="none"/>
  <text x="560" y="115" fill="#38bdf8" font-size="12" font-weight="bold">3. Precipitation 🌧️</text>

  <!-- Ocean / Collection -->
  <rect x="50" y="180" width="620" height="35" fill="#0284c7" rx="8"/>
  <text x="360" y="202" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">4. Collection in Oceans & Rivers 🌊</text>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Landforms & Materials
* **Mountains:** Tall elevated peaks.
* **Valleys:** Lowland between mountains.
* **Islands:** Land surrounded by water.

### 2. The 4 Water Cycle Stages
* **Evaporation:** Sun heats liquid water ➔ water vapor rises.
* **Condensation:** Vapor cools ➔ forms clouds.
* **Precipitation:** Clouds release rain, snow, or hail.
* **Collection:** Water returns to oceans and rivers.
`,

    workedExamples: [
      {
        id: 'ex-p2-sci3-1',
        titleAr: 'مثال 1: ما المرحلة التي تتكون فيها السحب في السماء؟',
        titleEn: 'Example 1: In which stage do clouds form?',
        problemAr: 'عندما يرتفع بخار الماء الدافئ ويبرد في طبقات الجو العليا لتكوين الغيوم، ما اسم هذه المرحلة في دورة الماء؟',
        problemEn: 'When warm water vapor rises and cools down into clouds, what is this stage called?',
        stepByStepSolutionAr: [
          'الخطوة 1: تسخين الماء وتحوله لبخار يسمى التبخر (Evaporation).',
          'الخطوة 2: عندما يبرد البخار ويتحول إلى قطرات ماء تتجمع في سحب تسمى هذه العملية التكاثف (Condensation).',
          'الاستنتاج: مرحلة التكاثف (Condensation).'
        ],
        stepByStepSolutionEn: [
          'Step 1: Liquid to vapor = Evaporation.',
          'Step 2: Vapor cooling into clouds = Condensation.',
          'Conclusion: Condensation.'
        ],
        finalAnswerAr: 'التكاثف (Condensation).',
        finalAnswerEn: 'Condensation.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-sci3-1',
        problemAr: 'ما الفرق بين الجبل (Mountain) والوادي (Valley)؟',
        problemEn: 'What is the difference between a Mountain and a Valley?',
        solutionStepsAr: [
          'الجبل (Mountain): أرض مرتفعة جداً ذات قمة عالية وشديدة الانحدار.',
          'الوادي (Valley): أرض منخفضة مستوية تقع بين الجبال والتلال.'
        ],
        solutionStepsEn: [
          'Mountain: Very high land with a steep peak.',
          'Valley: Low land situated between mountains or hills.'
        ],
        finalAnswerAr: 'الجبل أرض مرتفعة بقِمّة، والوادي أرض منخفضة بين الجبال.',
        finalAnswerEn: 'Mountains are high peaks; Valleys are lowlands between them.'
      }
    ],

    assessment: {
      id: 'as-p2-sci3-1',
      titleAr: 'اختبار تقييم المحاضرة 3: معالم الأرض ودورة الماء',
      titleEn: 'Lecture 3 Assessment: Landforms & Water Cycle',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-sci3-1',
          textAr: 'ما المرحلة في دورة الماء التي يتحول فيها الماء السائل إلى بخار ماء غازي بفعل حرارة الشمس؟',
          textEn: 'In which stage does liquid water turn into water vapor by sun heat?',
          optionsAr: [
            'التبخر (Evaporation)',
            'التكاثف (Condensation)',
            'هطول الأمطار (Precipitation)',
            'التجمد'
          ],
          optionsEn: [
            'Evaporation',
            'Condensation',
            'Precipitation',
            'Freezing'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مرحلة التبخر في دورة الماء',
          conceptTestedEn: 'Evaporation Stage Definition',
          explanationAr: 'التبخر (Evaporation) هو تحول الماء السائل إلى بخار ماء يصعد في الهواء عند تسخينه.',
          explanationEn: 'Evaporation is the transition of liquid water to vapor by solar heat.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci3-2',
          textAr: 'ماذا نسمي قطعة اليابسة المحاطة بالمياه من جميع الجهات الأربعة؟',
          textEn: 'What do we call land completely surrounded by water on all sides?',
          optionsAr: ['الجزيرة (Island)', 'الوادي (Valley)', 'الجبل (Mountain)', 'الصحراء'],
          optionsEn: ['Island', 'Valley', 'Mountain', 'Desert'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف الجزيرة',
          conceptTestedEn: 'Island Landform Definition',
          explanationAr: 'الجزيرة (Island) هي أرض يابسة تحيط بها مياه البحر أو البحيرة من كل جانب.',
          explanationEn: 'An Island is land fully surrounded by water.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci3-3',
          textAr: 'عندما تسقط قطرات الماء من السحب على هيئة مطر أو ثلج، تُسمى هذه المرحلة:',
          textEn: 'When water falls from clouds as rain or snow, this stage is:',
          optionsAr: [
            'هطول الأمطار (Precipitation)',
            'التبخر (Evaporation)',
            'التنفس',
            'الهضم'
          ],
          optionsEn: [
            'Precipitation',
            'Evaporation',
            'Respiration',
            'Digestion'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مرحلة الهطول Precipitation',
          conceptTestedEn: 'Precipitation Stage',
          explanationAr: 'الهطول (Precipitation) هو تساقط الماء المتكاثف من السحب كأمطار أو ثلوج.',
          explanationEn: 'Precipitation is any form of water falling from clouds.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci3-4',
          textAr: 'ما هو المحرك الرئيسي ومصدر الطاقة الأساسي لدورة الماء على كوكب الأرض؟',
          textEn: 'What is the main engine and energy source driving the Water Cycle?',
          optionsAr: ['الشمس وحرارتها (The Sun ☀️)', 'القمر', 'الرياح فقط', 'المصابيح الكهربائية'],
          optionsEn: ['The Sun and its thermal heat ☀️', 'The Moon', 'Wind only', 'Electric lamps'],
          correctIndex: 0,
          conceptTestedAr: 'دور الشمس في دورة الماء',
          conceptTestedEn: 'Solar Energy Driving the Water Cycle',
          explanationAr: 'أشعة الشمس وحرارتها تسخن مياه المسطحات المائية لتبدأ عملية التبخر وتدوير المياه.',
          explanationEn: 'Solar heat drives water evaporation globally.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci3-5',
          textAr: 'أرض منخفضة تقع بين جبلين أو تلتين تُسمى:',
          textEn: 'A low area of land situated between mountains is called a:',
          optionsAr: ['الوادي (Valley)', 'الجزيرة (Island)', 'الجبل (Mountain)', 'المحيط (Ocean)'],
          optionsEn: ['Valley', 'Island', 'Mountain', 'Ocean'],
          correctIndex: 0,
          conceptTestedAr: 'تضاريس الوادي Valley',
          conceptTestedEn: 'Valley Landform Identification',
          explanationAr: 'الوادي (Valley) هو المنطقة المنخفضة بين المرتفعات الجبلية.',
          explanationEn: 'A Valley is a low area between mountains or hills.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: LIGHT & SHADOW, SOUND & VIBRATIONS ──
  {
    id: 'p2-sci-4',
    order: 4,
    titleAr: 'المحاضرة 4: الضوء والظلال، الصوت والاهتزازات (Light & Sound Waves)',
    titleEn: 'Lecture 4: Light & Shadow, Sound & Vibrations (Discover Primary 2)',
    subtitleAr: 'استكشاف مصادر الضوء، وتكون الظلال، والأجسام الشفافة والمعتمة، وكيفية نشوء الصوت من الاهتزازات ودرجة الصوت وشدته',
    subtitleEn: 'Explore light sources, opaque vs transparent objects, shadow formation, and sound vibrations & pitch.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 4: Communication)',
    unitTitleAr: 'Theme 4: Communication — Chapter 2: Light, Sound & Sensory Wonders',
    unitTitleEn: 'Theme 4: Communication — Chapter 2: Light, Sound & Sensory Wonders',
    lessonNumberAr: 'الدرس 4: الضوء والظلال والصوت والاهتزازات',
    lessonNumberEn: 'Lesson 4: Light, Shadow, Sound & Vibrations',

    keyConceptsAr: [
      'الضوء ومصادره (Light & Sources):',
      '  - مصادر طبيعية (Natural Sources): الشمس (المصدر الأساسي للضوء والحرارة ☀️)، والنجوم في الليل 🌟.',
      '  - مصادر صناعية (Artificial / Man-made Sources): المصباح الكهربائي 💡، الشموع 🕯️، وكشاف الجيب 🔦.',
      '  - القمر (The Moon): ليس مصدراً للضوء، بل هو جسم معتم يعكس ضوء الشمس الساقط عليه.',
      'الأجسام والظلال (Opaque vs Transparent & Shadows):',
      '  - الأجسام الشفافة (Transparent): تسمح للضوء بالمرور من خلالها (كالزجاج الصافي والماء النقي والعدسات).',
      '  - الأجسام المعتمة (Opaque): لا تسمح للضوء بالمرور (كالخشب، جسم الإنسان، والمعادن).',
      '  - تكون الظل (Shadow Formation): يتكون الظل عندما يحجب جسم معتم مسار أشعة الضوء المستقيمة.',
      'الصوت والاهتزازات (Sound & Vibrations):',
      '  - كيف ينشأ الصوت؟ ينشأ الصوت عندما تهتز الأجسام ذهاباً وإياباً بسرعة (Vibrations).',
      '  - عندما يتوقف الاهتزاز، يتوقف الصوت فوراً.',
      '  - شدة الصوت (Volume): صوت عالٍ (Loud - كصوت الرعد ومحرك الطائرة) وصوت منخفض (Soft - كالهمس وحفيف الشجر).',
      '  - نبرة ودرجة الصوت (Pitch): صوت حاد رفيع (High pitch - كصوت العصفور والصفارة) وصوت غليظ عميق (Low pitch - كزئير الأسد والطبول الكبيرة).'
    ],
    keyConceptsEn: [
      'Light Sources: Natural (Sun, Stars) vs Artificial (Lamps, Candles, Flashlights). The Moon reflects sunlight.',
      'Light Transmission: Transparent (allows light to pass - glass) vs Opaque (blocks light - wood/human body).',
      'Shadows: Dark area formed when an opaque object blocks light rays traveling in straight lines.',
      'Sound: Produced strictly by Vibrations (rapid back-and-forth movement).',
      'Sound Properties: Volume (Loud vs Soft) and Pitch (High frequency vs Low deep tones).'
    ],

    conceptMapAr: [
      'الضوء والصوت ➔ مصادر الضوء (طبيعية وصناعية) ➔ الأجسام المعتمة وتكون الظلال ➔ نشوء الصوت من الاهتزازات ➔ خصائص الصوت (شدة الصوت ونبرته)'
    ],
    conceptMapEn: [
      'Light & Sound ➔ Light Sources (Sun vs Lamps) ➔ Transparent vs Opaque (Shadows) ➔ Sound Vibrations ➔ Volume (Loud/Soft) & Pitch (High/Low)'
    ],

    learningOutcomesAr: [
      'أن يصنف التلميذ مصادر الضوء إلى مصادر طبيعية ومصادر صناعية.',
      'أن يشرح كيفية تكون الظلال عند حجب الضوء بواسطة جسم معتم.',
      'أن يستنتج أن الصوت ينتج من اهتزاز الأجسام ويميز بين درجات الصوت ونبرته (High vs Low pitch).'
    ],
    learningOutcomesEn: [
      'Classify light sources into natural and artificial origins.',
      'Demonstrate how shadows are produced by opaque objects blocking light.',
      'Explain that sound is caused by mechanical vibrations and distinguish loud/soft volumes and high/low pitches.'
    ],

    vocabulary: [
      {
        termAr: 'اهتزاز (Vibration)',
        termEn: 'Vibration',
        definitionAr: 'حركة سريعة للأجسام ذهاباً وإياباً ينتج عنها إصدار الصوت.'
      },
      {
        termAr: 'الظل (Shadow)',
        termEn: 'Shadow',
        definitionAr: 'منطقة مظلمة تتكون خلف الجسم المعتم عندما يعترض مسار الضوء.'
      },
      {
        termAr: 'جسم معتم (Opaque)',
        termEn: 'Opaque',
        definitionAr: 'جسم لا يسمح للضوء بالمرور من خلاله (كالخشب والحديد وجسم الإنسان).'
      },
      {
        termAr: 'جسم شفاف (Transparent)',
        termEn: 'Transparent',
        definitionAr: 'مادة تسمح للضوء بالنفاذ من خلالها بوضوح (كالزجاج الصافي والماء).'
      },
      {
        termAr: 'نبرة الصوت (Pitch)',
        termEn: 'Pitch',
        definitionAr: 'خاصية تميز الصوت الحاد الرفيع (High pitch) عن الصوت الغليظ العميق (Low pitch).'
      }
    ],

    warmupHookAr: 'عندما تمشي في الحديقة المشمسة، هل لاحظت صديقك المظلم الذي يتبع كل خطواتك؟ إنه ظلك الجميل! 👤 وكيف يصدر الجيتار صوتاً موسيقياً عذباً عندما تلمس أوتاره؟ تهتز الأوتار فتصنع موجات صوتية تصل إلى أذنيك! تعال لنتعرف على عالم الضوء والصوت الممتع!',
    warmupHookEn: 'Have you seen that dark silhouette following you on a sunny afternoon? That is your shadow! How does a guitar make music when you pluck its strings? The vibrating strings produce sound waves! Let us explore the magic of light and sound!',

    mainContentAr: `
### 1. Light and Shadow (الضوء والظلال)

#### A. Sources of Light (مصادر الضوء):
* ☀️ **Natural Light Sources:** The **Sun** (primary source for planet Earth) and **Stars** in the night sky.
* 💡 **Artificial / Man-Made Sources:** Electric light bulbs, flashlights, campfire, and candles.
* 🌙 **The Moon:** The Moon is NOT a light source; it is a giant rock that reflects sunlight like a mirror.

#### B. Transparent vs. Opaque Objects:
* 🪟 **Transparent (شفاف):** Light passes completely through (Clear window glass, clean water). You can see through them!
* 🚪 **Opaque (معتم):** Blocks light completely (Wooden doors, books, brick walls, human body).

#### C. How Shadows Form (كيف يتكون الظل؟):
* Light travels in **straight lines**.
* When an **opaque object** stands in the path of light, it blocks the light rays, creating a dark area behind it called a **Shadow**.

---

### 2. Sound and Vibrations (الصوت والاهتزازات)

#### A. What Makes Sound?
* Sound is created by **Vibrations** (rapid back-and-forth movement).
* Try touching your throat gently while humming: "Mmmmm" ➔ you can feel your vocal cords vibrating!
* When vibrations stop, sound stops instantly.

#### B. Properties of Sound:
1. 🔊 **Volume (Loud vs. Soft):**
   * **Loud Sound (صوت عالٍ):** Fire truck siren 🚒, Thunder ⚡, Drum beat.
   * **Soft Sound (صوت هادئ):** Whispering 🤫, Clock ticking, Cat purring.
2. 🎶 **Pitch (High vs. Low):**
   * **High Pitch (صوت حاد رفيع):** Bird whistling 🐦, Baby crying, Whistle.
   * **Low Pitch (صوت غليظ عميق):** Lion's roar 🦁, Big bass drum, Cow's moo 🐮.

---

### 3. Interactive Light & Sound Explorer Board
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Light & Shadow Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">💡 Light & Shadow Formation</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">☀️ <tspan fill="#fde047" font-weight="bold">Sun:</tspan> Primary natural light source</text>
    <text x="25" y="105" fill="#f8fafc" font-size="13">🪟 <tspan fill="#38bdf8" font-weight="bold">Transparent:</tspan> Light passes through (Glass)</text>
    <text x="25" y="140" fill="#f8fafc" font-size="13">🚪 <tspan fill="#fbbf24" font-weight="bold">Opaque:</tspan> Blocks light (Wood, Body)</text>
    <text x="25" y="175" fill="#34d399" font-size="13" font-weight="bold">👤 Shadow = Blocked light rays</text>
  </g>

  <!-- Sound & Vibrations Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">🔊 Sound & Vibrations</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">🎵 Sound is made by <tspan fill="#34d399" font-weight="bold">Vibrations</tspan></text>
    <text x="25" y="105" fill="#f8fafc" font-size="13">📢 <tspan fill="#facc15" font-weight="bold">Volume:</tspan> Loud (Siren) vs Soft (Whisper)</text>
    <text x="25" y="140" fill="#f8fafc" font-size="13">🎼 <tspan fill="#c084fc" font-weight="bold">Pitch:</tspan> High (Bird 🐦) vs Low (Lion 🦁)</text>
    <text x="25" y="175" fill="#38bdf8" font-size="12">Stop vibration = Sound stops immediately!</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Light & Shadow
* **Sources:** Sun & Stars (Natural); Bulbs & Candles (Artificial).
* **Shadows:** Formed when Opaque items block light rays.

### 2. Sound & Vibrations
* Sound is generated by mechanical Vibrations.
* **Volume:** Loudness vs Softness.
* **Pitch:** High-frequency tone vs Low deep pitch.
`,

    workedExamples: [
      {
        id: 'ex-p2-sci4-1',
        titleAr: 'مثال 1: كيف ينشأ صوت الطبل عند ضربه بالعصا؟',
        titleEn: 'Example 1: How does a drum produce sound?',
        problemAr: 'عندما يضرب العازف جلد الطبل بالعصا، كيف ينشأ الصوت ويصل إلى آذاننا؟',
        problemEn: 'When a drummer strikes a drumhead, how is sound created?',
        stepByStepSolutionAr: [
          'الخطوة 1: ضرب الطبل يجعل غشاءه المشدود يهتز بسرعة ذهاباً وإياباً (Vibrates).',
          'الخطوة 2: الاهتزاز يحرك جزيئات الهواء المحيطة في صورة موجات صوتية.',
          'الخطوة 3: تصل هذه الموجات إلى طبلة الأذن فنسمع الصوت الإيقاعي.',
          'الاستنتاج: ينشأ الصوت بسبب الاهتزاز (Vibration).'
        ],
        stepByStepSolutionEn: [
          'Step 1: Striking the drumhead causes it to vibrate rapidly.',
          'Step 2: Vibrations travel through air molecules as sound waves.',
          'Conclusion: Sound is produced by Vibration.'
        ],
        finalAnswerAr: 'ينشأ الصوت نتيجة اهتزاز (Vibration) غشاء الطبل.',
        finalAnswerEn: 'Sound is produced by the vibration of the drumhead.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p2-sci4-1',
        problemAr: 'هل القمر مصدر طبيعي للضوء؟ علل إجابتك.',
        problemEn: 'Is the Moon a natural source of light? Explain.',
        solutionStepsAr: [
          'كلا، القمر ليس مصدراً للضوء؛ لأنه جسم صخري معتم لا يولد ضوءاً بنفسه.',
          'القمر يعكس فقط أشعة الشمس الساقطة عليه مثل المرآة الفضائية.'
        ],
        solutionStepsEn: [
          'No, the Moon is an opaque rocky body.',
          'It only reflects sunlight falling on its surface.'
        ],
        finalAnswerAr: 'لا، القمر جسم معتم يعكس ضوء الشمس فقط.',
        finalAnswerEn: 'No, the Moon is opaque and only reflects sunlight.'
      }
    ],

    assessment: {
      id: 'as-p2-sci4-1',
      titleAr: 'اختبار تقييم المحاضرة 4: الضوء والظلال والصوت والاهتزازات',
      titleEn: 'Lecture 4 Assessment: Light, Shadow, Sound & Vibrations',
      passingScore: 80,
      questions: [
        {
          id: 'q-p2-sci4-1',
          textAr: 'كيف ينشأ الصوت (Sound) في جميع الآلات الموسيقية والأجسام؟',
          textEn: 'How is sound produced in musical instruments and objects?',
          optionsAr: [
            'عن طريق الاهتزازات السريعة (Vibrations)',
            'عن طريق تسليط الضوء الساطع',
            'عن طريق التجميد في الثلاجة',
            'عن طريق الصمت التام'
          ],
          optionsEn: [
            'By rapid back-and-forth Vibrations',
            'By shining bright light',
            'By freezing in ice',
            'By complete silence'
          ],
          correctIndex: 0,
          conceptTestedAr: 'نشوء الصوت من الاهتزاز',
          conceptTestedEn: 'Sound Generation via Vibrations',
          explanationAr: 'ينشأ الصوت دائماً من اهتزاز الأجسام السريع ذهاباً وإياباً.',
          explanationEn: 'Sound is produced by mechanical vibrations.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci4-2',
          textAr: 'ماذا يتكون عندما يعترض جسم معتم (Opaque) مسار أشعة الضوء؟',
          textEn: 'What forms when an opaque object blocks light rays?',
          optionsAr: ['يتكون الظل (A Shadow 👤)', 'يتكون قوس قزح', 'يتكون صوت رعد', 'يختفي الجسم تماماً'],
          optionsEn: ['A Shadow forms', 'A rainbow forms', 'Thunder sounds', 'The object vanishes'],
          correctIndex: 0,
          conceptTestedAr: 'تكون الظلال',
          conceptTestedEn: 'Shadow Formation Principle',
          explanationAr: 'يتكون الظل لأن الضوء يسير في خطوط مستقيمة ولا يستطيع المرور عبر الأجسام المعتمة.',
          explanationEn: 'Shadows are created when opaque objects block straight light rays.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci4-3',
          textAr: 'أي من المواد التالية يُعتبر جسماً شفافاً (Transparent) يسمح بمرور الضوء من خلاله بوضوح؟',
          textEn: 'Which of the following is a Transparent object allowing light to pass?',
          optionsAr: ['الزجاج الصافي (Clear glass window)', 'الباب الخشبي', 'جدار الطوب', 'الكتاب'],
          optionsEn: ['Clear glass window', 'Wooden door', 'Brick wall', 'Book'],
          correctIndex: 0,
          conceptTestedAr: 'الأجسام الشفافة Transparent',
          conceptTestedEn: 'Transparent Materials',
          explanationAr: 'الزجاج الصافي يسمح للضوء بالنفاذ تماماً فنستطيع الرؤية من خلاله بوضوح.',
          explanationEn: 'Clear glass is transparent and lets light pass through.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci4-4',
          textAr: 'ما هو المصدر الطبيعي الأساسي للضوء والحرارة على كوكب الأرض؟',
          textEn: 'What is the primary natural source of light and heat for Earth?',
          optionsAr: ['الشمس (The Sun ☀️)', 'المصباح الكهربائي', 'الشمعة', 'كشاف الجيب'],
          optionsEn: ['The Sun ☀️', 'Light bulb', 'Candle', 'Flashlight'],
          correctIndex: 0,
          conceptTestedAr: 'الشمس كمصدر طبيعي للضوء',
          conceptTestedEn: 'Sun as Primary Light Source',
          explanationAr: 'الشمس هي النجم والمصدر الطبيعي الرئيسي الذي يضيء ويدفئ كوكب الأرض.',
          explanationEn: 'The Sun is Earth\'s primary natural light and heat source.',
          difficulty: 'easy'
        },
        {
          id: 'q-p2-sci4-5',
          textAr: 'صوت زئير الأسد الضخم يُعتبر صوتاً ذو نبرة:',
          textEn: 'A deep lion\'s roar is considered a sound with:',
          optionsAr: [
            'نبرة منخفضة غليظة (Low Pitch)',
            'نبرة حادة رفيعة (High Pitch كالعصفور)',
            'صوت غير مسموع',
            'ضوء شفاف'
          ],
          optionsEn: [
            'Low deep Pitch',
            'High sharp Pitch (like a bird)',
            'Inaudible sound',
            'Transparent light'
          ],
          correctIndex: 0,
          conceptTestedAr: 'نبرة الصوت ودرجته Pitch',
          conceptTestedEn: 'Sound Pitch: Low vs High',
          explanationAr: 'زئير الأسد والطبول الكبيرة أصوات عميقة وغليظة ذات نبرة منخفضة (Low pitch).',
          explanationEn: 'A lion\'s roar has a deep, low frequency pitch.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
