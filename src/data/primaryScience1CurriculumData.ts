import type { Lecture } from '../types';

// ============================================================================
// PRIMARY SCIENCE / DISCOVER — GRADE 1 (العلوم وديسكفر الصف الأول الابتدائي - نظام التعليم 2.0 المعتمد)
// Official Egyptian Language Schools & Experimental Schools Curriculum (Edu 2.0 - Discover):
// Lecture 1: Living Things vs. Non-Living Things (الكائنات الحية والأشياء غير الحية)
// Lecture 2: The Five Senses & Healthy Body Habits (الحواس الخمس والعناية بالجسم)
// Lecture 3: Animals, Habitats, Needs & Movement (الحيوانات ومواطنها واحتياجاتها وطرق حركتها)
// Lecture 4: Plant Parts, Needs, Weather & The 4 Seasons (النباتات، أحوال الطقس وفصول السنة الأربعة)
// ============================================================================

export const PRIMARY_SCIENCE_G1_LECTURES: Lecture[] = [
  // ── LECTURE 1: LIVING VS. NON-LIVING THINGS ──
  {
    id: 'p1-sci-1',
    order: 1,
    titleAr: 'المحاضرة 1: الكائنات الحية والأشياء غير الحية (Living & Non-Living Things)',
    titleEn: 'Lecture 1: Living Things vs. Non-Living Things (Discover Primary 1)',
    subtitleAr: 'التمييز بين الكائنات الحية (تنمو وتتنفس وتتغذى) والأشياء غير الحية (الجماد) بأسلوب استكشافي مصور وممتع',
    subtitleEn: 'Learn how living things grow, breathe, eat, and reproduce compared to non-living objects.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — الفصل الأول: أنا وكائـنات بيئتي',
    unitTitleEn: 'Theme 1: Who Am I? — Chapter 1: Living & Non-Living Things',
    lessonNumberAr: 'الدرس 1: استكشاف الكائنات الحية والجماد',
    lessonNumberEn: 'Lesson 1: Exploring Living & Non-Living Things',

    keyConceptsAr: [
      'الكائنات الحية (Living Things): تنمو (Grow)، تحتاج إلى الغذاء والماء (Eat & Drink)، تتنفس الهواء (Breathe)، وتتكاثر (Reproduce). أمثلة: الإنسان، القط، العصفور، شجرة النخيل، الوردة.',
      'الأشياء غير الحية (Non-Living Things): لا تنمو، لا تتنفس، لا تأكل ولا تشرب، ولا تتحرك بنفسها. أمثلة: الكرة، القلم، الكتاب، الصخرة، السيارة، الدمية.',
      'مقارنة بسيطة: هل تكبر دمية الدب إذا أطعمناها؟ كلا! لأنها جماد غير حي. بينما القطة الصغيرة تكبر وتصبح قطة كبيرة لأنها كائن حي.'
    ],
    keyConceptsEn: [
      'Living Things: Grow, need food & water, breathe air, and reproduce (Humans, Cats, Birds, Trees, Flowers).',
      'Non-Living Things: Do not grow, breathe, eat, drink, or move by themselves (Balls, Pencils, Books, Rocks, Cars, Toys).',
      'Sorting and classifying items in our daily environment into living vs. non-living.'
    ],

    conceptMapAr: [
      'البيئة من حولنا ➔ كائنات حية (Living: تنمو + تتنفس + تأكل) + أشياء غير حية (Non-Living: جمادات ثابتة لا تنمو)'
    ],
    conceptMapEn: [
      'Our World ➔ Living Things (Grow, Breathe, Eat) + Non-Living Things (Do not grow or breathe)'
    ],

    learningOutcomesAr: [
      'أن يصنف التلميذ الأشياء المحيطة به إلى كائنات حية (Living) وأشياء غير حية (Non-Living).',
      'أن يذكر الخصائص الأساسية للكائن الحي (النمو، التنفس، التغذية، الحركة).',
      'أن يعلل سبب اعتبار لعبة أو صخرة شيئاً غير حي (جماد).'
    ],
    learningOutcomesEn: [
      'Classify everyday items into Living and Non-Living things.',
      'State the key traits of living things (Grow, Breathe, Eat, Drink).',
      'Explain why a toy or rock is a non-living thing.'
    ],

    vocabulary: [
      {
        termAr: 'كائن حي (Living Thing)',
        termEn: 'Living Thing',
        definitionAr: 'كائن ينمو، يتنفس الهواء، ويحتاج إلى الطعام والماء ليعيش (مثل الإنسان، النبات، والحيوان).'
      },
      {
        termAr: 'شيء غير حي / جماد (Non-Living Thing)',
        termEn: 'Non-Living Thing',
        definitionAr: 'شيء لا ينمو، لا يتنفس، ولا يحتاج إلى غذاء أو ماء (مثل القلم، الصخرة، والكرسي).'
      },
      {
        termAr: 'ينمو ويكبر (Grow)',
        termEn: 'Grow',
        definitionAr: 'الزيادة في الحجم والتحول من صغير إلى كبير مع مرور الوقت.'
      },
      {
        termAr: 'يتنفس (Breathe)',
        termEn: 'Breathe',
        definitionAr: 'أخذ الهواء النقي (الأكسجين) للبقاء على قيد الحياة.'
      }
    ],

    warmupHookAr: 'مرحباً بعلماء المستقبل الصغار في الصف الأول الابتدائي! 🌿 انظر حولك في الغرفة: هل كرسيك يكبر ويحتاج لطعام؟ لا! لكن قطتك الصغيرة ونبتة الورد في الشرفة تكبران كل يوم. تعالوا نستكشف معاً سر الفرق الرائع بين الكائنات الحية والجمادات!',
    warmupHookEn: 'Welcome little scientists! Look around your room: Does your toy teddy bear grow or eat breakfast? No! But a real puppy grows bigger every day. Let us discover what makes something alive!',

    mainContentAr: `
### 1. What are Living Things? (ما هي الكائنات الحية؟)
* **Living Things** are alive! They share special qualities:
  1. **They Grow (تنمو وتكبر):** A baby becomes a child, a kitten becomes a cat, and a tiny seed becomes a tall tree. 🌱 ➔ 🌳
  2. **They Need Food & Water (تحتاج طعاماً وماءً):** They must eat and drink to get energy. 🍎 💧
  3. **They Breathe Air (تتنفس الهواء):** Humans and animals breathe through lungs/noses, and plants breathe through leaves. 🌬️
  4. **They Move by Themselves (تتحرك بنفسها):** Birds fly, frogs jump, and humans walk. 🏃
  5. **They Reproduce (تتكاثر وتنجب صغاراً):** Mothers have babies, and birds lay eggs. 🐣

* **Examples of Living Things:**
  * 👦 **Humans (الإنسان):** Boy, Girl, Teacher, Doctor.
  * 🐱 **Animals & Birds (الحيوانات والطيور):** Cat, Dog, Bird, Butterfly, Fish.
  * 🌻 **Plants & Trees (النباتات والأشجار):** Sunflower, Palm Tree, Grass, Rose.

---

### 2. What are Non-Living Things? (ما هي الأشياء غير الحية / الجمادات؟)
* **Non-Living Things** are not alive:
  1. **They DO NOT Grow:** A toy car stays the same size forever! 🚗
  2. **They DO NOT Eat or Drink:** A book does not get hungry or thirsty. 📚
  3. **They DO NOT Breathe:** A rock or chair does not breathe air. 🪨
  4. **They DO NOT Move on their own:** A football only moves when you kick it! ⚽

* **Examples of Non-Living Things:**
  * ✏️ **School Objects:** Pencil, Eraser, Notebook, Desk.
  * 🧸 **Toys & Clothes:** Teddy Bear, Ball, Shoes, Shirt.
  * 🏠 **Everyday Items:** House, Car, Clock, Glass, Water Bottle.

---

### 3. Fun Comparison Table (جدول المقارنة الممتع)

| Trait (الصفة) | Living Thing (كائن حي) 🐶 🌿 | Non-Living Thing (شيء غير حي) 🧸 🚗 |
| :--- | :--- | :--- |
| **Grows? (هل ينمو؟)** | ✅ **YES** (Grows bigger) | ❌ **NO** (Stays same size) |
| **Needs Food & Water?** | ✅ **YES** (Must eat & drink) | ❌ **NO** (Does not eat) |
| **Breathes Air?** | ✅ **YES** (Needs fresh air) | ❌ **NO** (Does not breathe) |
| **Has Babies?** | ✅ **YES** (Reproduces) | ❌ **NO** (Never has babies) |

---

### 4. Interactive Living / Non-Living Sort Board
\`\`\`xml
<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="700" height="240" fill="#0f172a" rx="16"/>
  <!-- Left: Living Things Box -->
  <rect x="25" y="20" width="310" height="200" fill="#064e3b" stroke="#10b981" stroke-width="2" rx="12"/>
  <text x="180" y="50" fill="#34d399" font-size="18" font-weight="bold" text-anchor="middle">🌿 Living Things (كائنات حية)</text>
  <text x="180" y="80" fill="#a7f3d0" font-size="14" text-anchor="middle">Boy 👦 • Cat 🐱 • Tree 🌳 • Flower 🌸</text>
  <text x="180" y="115" fill="#f8fafc" font-size="13" text-anchor="middle">✔ Grow bigger every day</text>
  <text x="180" y="145" fill="#f8fafc" font-size="13" text-anchor="middle">✔ Need food 🍎 and water 💧</text>
  <text x="180" y="175" fill="#f8fafc" font-size="13" text-anchor="middle">✔ Breathe fresh air 🌬️</text>

  <!-- Right: Non-Living Things Box -->
  <rect x="365" y="20" width="310" height="200" fill="#3b1527" stroke="#f43f5e" stroke-width="2" rx="12"/>
  <text x="520" y="50" fill="#fda4af" font-size="18" font-weight="bold" text-anchor="middle">🧸 Non-Living (أشياء غير حية)</text>
  <text x="520" y="80" fill="#fecdd3" font-size="14" text-anchor="middle">Toy Car 🚗 • Ball ⚽ • Pencil ✏️ • Rock 🪨</text>
  <text x="520" y="115" fill="#f8fafc" font-size="13" text-anchor="middle">✖ Do NOT grow or get bigger</text>
  <text x="520" y="145" fill="#f8fafc" font-size="13" text-anchor="middle">✖ Do NOT eat or drink</text>
  <text x="520" y="175" fill="#f8fafc" font-size="13" text-anchor="middle">✖ Do NOT breathe air</text>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. What are Living Things?
* **Living Things** are alive and share common traits:
  * **They Grow:** Small kitten ➔ big cat; seedling ➔ oak tree.
  * **They Need Food & Water:** Required for energy and growth.
  * **They Breathe Air:** Using lungs, gills, or leaves.
  * **They Reproduce:** Producing offspring.
  * Examples: Humans, Lions, Birds, Apple Trees, Sunflowers.

### 2. What are Non-Living Things?
* **Non-Living Things** were never alive:
  * Do NOT grow, breathe, eat, or reproduce.
  * Examples: Pencils, Rocks, Toy cars, Backpacks, Chairs.
`,

    workedExamples: [
      {
        id: 'ex-sci1-1',
        titleAr: 'مثال 1: هل القطة كائن حي أم شيء غير حي؟',
        titleEn: 'Example 1: Is a Cat living or non-living?',
        problemAr: 'صنّف (القطة Cat): هل هي كائن حي أم جماد غير حي؟ واذكر السبب.',
        problemEn: 'Classify a Cat: Is it a living thing or a non-living thing? Give reasons.',
        stepByStepSolutionAr: [
          'الخطوة 1: نفحص صفات القطة: هل القطة تأكل طعاماً وتشرب حليباً وماءً؟ نعم!',
          'الخطوة 2: هل القطة الصغيرة تكبر وتصبح قطة كبيرة؟ نعم، هي تنمو (Grows).',
          'الخطوة 3: هل القطة تتنفس الهواء وتنجب قططاً صغيرة؟ نعم!',
          'الاستنتاج: القطة كائن حي مؤكد (Living Thing) 🐱.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Check if the cat eats food and drinks water: Yes.',
          'Step 2: Check if a small kitten grows into a big adult cat: Yes.',
          'Step 3: Check if it breathes air and gives birth to kittens: Yes.',
          'Conclusion: A cat is a Living Thing.'
        ],
        finalAnswerAr: 'القطة كائن حي (Living Thing) لأنها تنمو وتأكل وتشرب وتتنفس وتتكاثر.',
        finalAnswerEn: 'A Cat is a Living Thing because it grows, eats, drinks, breathes, and reproduces.'
      },
      {
        id: 'ex-sci1-2',
        titleAr: 'مثال 2: هل قلم الرصاص كائن حي أم جماد؟',
        titleEn: 'Example 2: Is a Pencil living or non-living?',
        problemAr: 'صنّف (قلم الرصاص Pencil): هل هو كائن حي أم شيء غير حي؟',
        problemEn: 'Classify a Pencil: Is it living or non-living?',
        stepByStepSolutionAr: [
          'الخطوة 1: هل قلم الرصاص يجوع ويحتاج إلى تفاحة أو ماء؟ كلا!',
          'الخطوة 2: هل يكبر القلم من تلقاء نفسه في حقيبتك؟ كلا، يظل بالحجم نفسه!',
          'الخطوة 3: هل يتنفس القلم الهواء؟ كلا!',
          'الاستنتاج: قلم الرصاص شيء غير حي / جماد (Non-Living Thing) ✏️.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Does a pencil need food or water? No.',
          'Step 2: Does it grow bigger on its own? No.',
          'Step 3: Does it breathe air? No.',
          'Conclusion: A pencil is a Non-Living Thing.'
        ],
        finalAnswerAr: 'قلم الرصاص شيء غير حي (Non-Living Thing) لأنه جماد لا ينمو ولا يتغذى ولا يتنفس.',
        finalAnswerEn: 'A Pencil is a Non-Living Thing because it does not grow, eat, or breathe.'
      }
    ],

    textbookExercises: [
      {
        id: 'pr-sci1-1',
        problemAr: 'شجرة الورد في الحديقة (Rose Plant): هل هي كائن حي أم غير حي؟ ولماذا؟',
        problemEn: 'Is a rose plant in the garden living or non-living? Why?',
        solutionStepsAr: ['تذكر أن شجرة الورد تمتص الماء من التربة وتنمو أوراقها وأزهارها في ضوء الشمس.'],
        solutionStepsEn: ['Remember that plants drink water, grow leaves, and need sunlight.'],
        finalAnswerAr: 'شجرة الورد كائن حي (Living Thing) لأنها تنمو وتصنع غذاءها وتحتاج إلى الماء وضوء الشمس والهواء.',
        finalAnswerEn: 'A Rose Plant is a Living Thing because it grows, needs water, sunlight, and air.'
      }
    ],

    assessment: {
      id: 'as-sci1-1',
      titleAr: 'اختبار تقييم المحاضرة 1: الكائنات الحية والجماد',
      titleEn: 'Lecture 1 Assessment: Living vs. Non-Living Things',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci1-1-1',
          textAr: 'أي من الخيارات التالية يُعتبر كائناً حياً (Living Thing)؟',
          textEn: 'Which of the following is a Living Thing?',
          optionsAr: ['القطة (Cat)', 'لعبة الدب (Teddy Bear)', 'الكرة (Football)', 'السيارة (Car)'],
          optionsEn: ['Cat', 'Teddy Bear', 'Football', 'Car'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز الكائنات الحية',
          conceptTestedEn: 'Identifying Living Things',
          explanationAr: 'القطة كائن حي لأنها تنمو وتأكل وتشرب وتتنفس، بينما البقية جمادات غير حية.',
          explanationEn: 'The cat is a living thing because it grows, eats, drinks, and breathes.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-1-2',
          textAr: 'ماذا تحتاج الكائنات الحية (Living Things) للبقاء على قيد الحياة؟',
          textEn: 'What do all living things need to survive?',
          optionsAr: ['الطعام والماء والهواء (Food, Water & Air)', 'الألعاب فقط', 'البطاريات فقط', 'الشحن الكهربائي'],
          optionsEn: ['Food, Water, and Air', 'Toys only', 'Batteries only', 'Electric charging'],
          correctIndex: 0,
          conceptTestedAr: 'احتياجات الكائنات الحية الأساسية',
          conceptTestedEn: 'Basic Needs of Living Organisms',
          explanationAr: 'تحتاج جميع الكائنات الحية إلى الغذاء والماء والهواء النقي للنمو والبقاء حية.',
          explanationEn: 'All living things need food, water, and fresh air to grow and stay alive.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-1-3',
          textAr: 'أي من الأشياء التالية يُعتبر شيئاً غير حي (Non-Living Thing)؟',
          textEn: 'Which of the following is a Non-Living Thing?',
          optionsAr: ['الكتاب (Book)', 'شجرة التفاح (Apple Tree)', 'العصفور (Bird)', 'الطفل (Baby)'],
          optionsEn: ['Book', 'Apple Tree', 'Bird', 'Baby'],
          correctIndex: 0,
          conceptTestedAr: 'التعرف على الجمادات غير الحية',
          conceptTestedEn: 'Identifying Non-Living Objects',
          explanationAr: 'الكتاب جماد غير حي لا ينمو ولا يأكل ولا يتنفس.',
          explanationEn: 'A book is a non-living thing that does not grow, eat, or breathe.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-1-4',
          textAr: 'هل تكبر شجرة النخيل وتنمو مع مرور الوقت؟',
          textEn: 'Does a palm tree grow bigger over time?',
          optionsAr: ['نعم، لأنها كائن حي (Living Thing)', 'لا، النباتات لا تنمو', 'لا، لأنها جماد', 'فقط إذا تم طلاؤها باللون الأخضر'],
          optionsEn: ['Yes, because it is a Living Thing', 'No, plants never grow', 'No, because it is non-living', 'Only if painted green'],
          correctIndex: 0,
          conceptTestedAr: 'النباتات كائنات حية تنمو',
          conceptTestedEn: 'Plants are Living Things that Grow',
          explanationAr: 'النباتات والأشجار كائنات حية تنمو من بذور صغيرة إلى أشجار كبيرة.',
          explanationEn: 'Plants are living things that grow from small seeds into large trees.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-1-5',
          textAr: 'ما الصفة المشتركة بين القلم والكرسي والصخرة؟',
          textEn: 'What do a pencil, a chair, and a rock have in common?',
          optionsAr: ['كلها أشياء غير حية (Non-Living Things)', 'كلها كائنات حية تأكل الخبز', 'كلها تطير في السماء', 'كلها تنمو وتتنفس'],
          optionsEn: ['All are Non-Living Things', 'All are living things that eat bread', 'All can fly in the sky', 'All grow and breathe'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص الجمادات',
          conceptTestedEn: 'Properties of Non-Living Objects',
          explanationAr: 'القلم والكرسي والصخرة جمادات لا تنمو ولا تتنفس ولا تحتاج إلى طعام، لذا هي أشياء غير حية.',
          explanationEn: 'Pencils, chairs, and rocks are non-living objects that do not grow or breathe.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: THE FIVE SENSES & HEALTHY BODY HABITS ──
  {
    id: 'p1-sci-2',
    order: 2,
    titleAr: 'المحاضرة 2: الحواس الخمس وصحة الجسم (The 5 Senses & Healthy Body)',
    titleEn: 'Lecture 2: The Five Senses & Healthy Body Habits (Discover Primary 1)',
    subtitleAr: 'استكشاف حواسنا الخمس (الرؤية، السمع، الشم، التذوق، اللمس) وأعضاء الجسم، والعادات الصحية اليومية',
    subtitleEn: 'Learn about the 5 senses (Sight, Hearing, Smell, Taste, Touch), body parts, and daily hygiene.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'المحور الأول: من أكون؟ — الفصل الثاني: حواسي الخمس وجسمي الصحي',
    unitTitleEn: 'Theme 1: Who Am I? — Chapter 2: My Five Senses & Healthy Body',
    lessonNumberAr: 'الدرس 2: استكشاف الحواس الخمس والعادات الصحية',
    lessonNumberEn: 'Lesson 2: The 5 Senses & Healthy Habits',

    keyConceptsAr: [
      'حاسة الرؤية / البصر (Sight): نستخدم العينين (Eyes) لرؤية الألوان والأشكال والأحجام وقراءة الكتب.',
      'حاسة السمع (Hearing): نستخدم الأذنين (Ears) لسماع الأصوات العالية والهادئة، والموسيقى، وصوت المعلم.',
      'حاسة الشم (Smell): نستخدم الأنف (Nose) لشم الروائح الجميلة (الزهور والعطور) والروائح المنبهة.',
      'حاسة التذوق (Taste): نستخدم اللسان (Tongue) لتذوق الطعم الحلو (Sweet)، والمالح (Salty)، والحامض (Sour).',
      'حاسة اللمس (Touch): نستخدم الجلد والأيدي (Skin & Hands) للشعور بالناعم (Soft)، والخشن (Rough)، والساخن والبارد.',
      'العادات الصحية السليمة (Healthy Habits): غسل اليدين بالماء والصابون، تنظيف الأسنان بالفرشاة والمعجون، تناول الخضار والفواكه، والنوم مبكراً.'
    ],
    keyConceptsEn: [
      'Sight: We use our Eyes to see colors, shapes, light, and books.',
      'Hearing: We use our Ears to listen to sounds, music, and voices.',
      'Smell: We use our Nose to smell pleasant scents (flowers) and warnings (smoke).',
      'Taste: We use our Tongue to taste sweet, salty, and sour flavors.',
      'Touch: We use our Skin and Hands to feel soft, rough, hot, and cold textures.',
      'Healthy Habits: Handwashing with soap, brushing teeth, eating balanced meals, regular exercise, and good sleep.'
    ],

    conceptMapAr: [
      'جسم الإنسان ➔ الحواس الخمس (العينان للرؤية، الأذنان للسمع، الأنف للشم، اللسان للتذوق، واليدان للمس) ➔ عادات صحية لحماية الجسم'
    ],
    conceptMapEn: [
      'Human Body ➔ 5 Senses (Eyes=Sight, Ears=Hearing, Nose=Smell, Tongue=Taste, Hands=Touch) ➔ Daily Healthy Habits'
    ],

    learningOutcomesAr: [
      'أن يطابق التلميذ كل حاسة بالعضو المسؤول عنها (العين للرؤية، الأذن للسمع، إلخ).',
      'أن يصف التلميذ ملمس الأشياء وطعمها وروائحها باستخدام المفردات العلمية المناسبة.',
      'أن يمارس العادات الصحية السليمة لحماية جسمه من الجراثيم والأمراض.'
    ],
    learningOutcomesEn: [
      'Match each sense to its correct body organ.',
      'Describe textures, flavors, and sounds using sensory vocabulary.',
      'Demonstrate essential healthy habits like handwashing and teeth brushing.'
    ],

    vocabulary: [
      {
        termAr: 'حاسة البصر (Sight)',
        termEn: 'Sight',
        definitionAr: 'رؤية الأشياء والألوان باستخدام العينين (Eyes).'
      },
      {
        termAr: 'حاسة السمع (Hearing)',
        termEn: 'Hearing',
        definitionAr: 'سماع الأصوات والكلام باستخدام الأذنين (Ears).'
      },
      {
        termAr: 'حاسة التذوق (Taste)',
        termEn: 'Taste',
        definitionAr: 'التمييز بين النكهات (حلو، مالح، حامض) باستخدام اللسان (Tongue).'
      },
      {
        termAr: 'حاسة اللمس (Touch)',
        termEn: 'Touch',
        definitionAr: 'الشعور بالحرارة والبرودة والملمس الناعم والخشن بالجلد واليدين (Hands & Skin).'
      },
      {
        termAr: 'حاسة الشم (Smell)',
        termEn: 'Smell',
        definitionAr: 'استنشاق وتمييز الروائح باستخدام الأنف (Nose).'
      }
    ],

    warmupHookAr: 'أغمض عينيك لثوانٍ معدودة! 🙈 كيف تعرف أن أمك أحضرت كعكة شوكولاتة لذيذة؟ تشم رائحتها الزكية بأنفك، وتسمع صوتها تناديك، وتتذوق حلاوتها بلسانك! حواسنا الخمس هي نوافذنا السحرية لاكتشاف العالم الجميل من حولنا.',
    warmupHookEn: 'Close your eyes for three seconds! How do you know someone brought warm cookies? You smell them with your nose, hear footsteps with your ears, and taste the sweetness with your tongue! Our 5 senses are magical superpowers!',

    mainContentAr: `
### 1. The Five Senses and Their Organs (الحواس الخمس وأعضاؤها)
We have **5 amazing senses** that help us explore and stay safe:

1. 👁️ **Sight (حاسة البصر - Eye):**
   * We see with our **Eyes**.
   * We see beautiful colors (Red, Blue, Green), bright sunshine, pictures, and books.
2. 👂 **Hearing (حاسة السمع - Ear):**
   * We listen with our **Ears**.
   * We hear loud sounds (Drums 🥁, Car Horn 🚗) and soft sounds (Birds chirping 🐦, Whispering).
3. 👃 **Smell (حاسة الشم - Nose):**
   * We smell with our **Nose**.
   * We smell pleasant scents (Roses 🌹, Perfume, Fresh Bakery) and warning smells (Smoke 🔥).
4. 👅 **Taste (حاسة التذوق - Tongue):**
   * We taste with our **Tongue**.
   * **Sweet (حلو):** Honey, Ice Cream, Apple 🍎.
   * **Salty (مالح):** Potato Chips, Pretzels 🥨.
   * **Sour (حامض):** Lemon 🍋.
5. ✋ **Touch (حاسة اللمس - Hand & Skin):**
   * We feel textures with our **Hands and Skin**.
   * **Soft (ناعم):** Cotton, Teddy Bear, Silk.
   * **Rough / Hard (خشن / صلب):** Stone 🪨, Tree bark, Sandpaper.
   * **Hot & Cold (ساخن وبارد):** Sun ☀️, Ice cube 🧊.

---

### 2. Five Senses Visual Explorer
\`\`\`xml
<svg viewBox="0 0 720 220" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="220" fill="#0f172a" rx="16"/>
  <!-- Sense 1: Sight -->
  <g transform="translate(15, 20)">
    <rect width="130" height="180" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="32" text-anchor="middle">👁️</text>
    <text x="65" y="80" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">Sight</text>
    <text x="65" y="105" fill="#f8fafc" font-size="13" text-anchor="middle">Organ: Eye</text>
    <text x="65" y="135" fill="#94a3b8" font-size="12" text-anchor="middle">Colors 🎨</text>
    <text x="65" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">Shapes 🔺</text>
  </g>
  <!-- Sense 2: Hearing -->
  <g transform="translate(155, 20)">
    <rect width="130" height="180" fill="#1e293b" stroke="#a855f7" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="32" text-anchor="middle">👂</text>
    <text x="65" y="80" fill="#c084fc" font-size="16" font-weight="bold" text-anchor="middle">Hearing</text>
    <text x="65" y="105" fill="#f8fafc" font-size="13" text-anchor="middle">Organ: Ear</text>
    <text x="65" y="135" fill="#94a3b8" font-size="12" text-anchor="middle">Music 🎵</text>
    <text x="65" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">Voices 🗣️</text>
  </g>
  <!-- Sense 3: Smell -->
  <g transform="translate(295, 20)">
    <rect width="130" height="180" fill="#1e293b" stroke="#ec4899" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="32" text-anchor="middle">👃</text>
    <text x="65" y="80" fill="#f472b6" font-size="16" font-weight="bold" text-anchor="middle">Smell</text>
    <text x="65" y="105" fill="#f8fafc" font-size="13" text-anchor="middle">Organ: Nose</text>
    <text x="65" y="135" fill="#94a3b8" font-size="12" text-anchor="middle">Flowers 🌸</text>
    <text x="65" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">Food 🍲</text>
  </g>
  <!-- Sense 4: Taste -->
  <g transform="translate(435, 20)">
    <rect width="130" height="180" fill="#1e293b" stroke="#eab308" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="32" text-anchor="middle">👅</text>
    <text x="65" y="80" fill="#facc15" font-size="16" font-weight="bold" text-anchor="middle">Taste</text>
    <text x="65" y="105" fill="#f8fafc" font-size="13" text-anchor="middle">Organ: Tongue</text>
    <text x="65" y="135" fill="#94a3b8" font-size="12" text-anchor="middle">Sweet 🍦</text>
    <text x="65" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">Salty 🥨</text>
  </g>
  <!-- Sense 5: Touch -->
  <g transform="translate(575, 20)">
    <rect width="130" height="180" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="10"/>
    <text x="65" y="45" font-size="32" text-anchor="middle">✋</text>
    <text x="65" y="80" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">Touch</text>
    <text x="65" y="105" fill="#f8fafc" font-size="13" text-anchor="middle">Organ: Hand/Skin</text>
    <text x="65" y="135" fill="#94a3b8" font-size="12" text-anchor="middle">Soft 🧸</text>
    <text x="65" y="155" fill="#94a3b8" font-size="12" text-anchor="middle">Hot & Cold 🧊</text>
  </g>
</svg>
\`\`\`

---

### 3. Healthy Habits for a Strong Body (العادات الصحية لجسم قوي)
To keep our body and senses healthy, we must practice good habits every day:
1. 🧼 **Wash Hands:** Wash with soap and clean water for 20 seconds before eating and after playing.
2. 🪥 **Brush Teeth:** Brush twice a day (morning and night) to prevent cavities.
3. 🥗 **Eat Healthy Food:** Eat crunchy carrots, fresh apples, eggs, and drink pure milk.
4. 😴 **Sleep Early:** Get 9–10 hours of peaceful sleep to grow strong and smart!
5. ⚽ **Exercise & Play:** Run, jump, and stay active outside.
`,
    mainContentEn: `
### 1. The Five Senses
* **Sight (Eyes):** Distinguish colors, shapes, and brightness.
* **Hearing (Ears):** Detect sounds, loud and soft volumes.
* **Smell (Nose):** Detect pleasant aromas and warning odors.
* **Taste (Tongue):** Sweet, salty, sour, and bitter.
* **Touch (Skin/Hands):** Soft, rough, hot, and cold textures.

### 2. Daily Healthy Habits
* Wash hands with soap and water.
* Brush teeth twice daily.
* Eat nutritious meals including vegetables, fruits, and milk.
* Get sufficient sleep (9-10 hours).
`,

    workedExamples: [
      {
        id: 'ex-sci2-1',
        titleAr: 'مثال 1: ما الحاسة المستخدمة لمعرفة ملمس فرو الأرنب؟',
        titleEn: 'Example 1: Which sense identifies soft rabbit fur?',
        problemAr: 'عندما تلمس أرنباً صغيراً وتشعر بأن فروه ناعم جداً، ما الحاسة والعضو اللذان استخدمتهما؟',
        problemEn: 'When you pet a bunny and feel its soft fur, which sense and organ did you use?',
        stepByStepSolutionAr: [
          'الخطوة 1: ملمس الشيء (ناعم أو خشن) يتم التعرف عليه عن طريق الجلد واليدين.',
          'الخطوة 2: العضو المستخدم هو اليد / الجلد (Hand & Skin).',
          'الخطوة 3: الحاسة المسؤولة هي حاسة اللمس (Sense of Touch).'
        ],
        stepByStepSolutionEn: [
          'Step 1: Feeling soft or rough textures is detected through skin and fingers.',
          'Step 2: The organ is Hand / Skin.',
          'Step 3: The sense is the Sense of Touch.'
        ],
        finalAnswerAr: 'حاسة اللمس (Touch) باستخدام اليد والجلد (Hands & Skin).',
        finalAnswerEn: 'Sense of Touch using Hands and Skin.'
      }
    ],

    textbookExercises: [
      {
        id: 'pr-sci2-1',
        problemAr: 'ما العضو الذي نستخدمه لمعرفة أن الليمون حامض الطعم (Sour)؟',
        problemEn: 'Which organ do we use to taste that a lemon is sour?',
        solutionStepsAr: ['نحن نستخدم هذا العضو داخل فمنا لتذوق الأطعمة والنكهات المختلفة.'],
        solutionStepsEn: ['We use this organ inside our mouth to taste foods and flavors.'],
        finalAnswerAr: 'اللسان (Tongue) بحاسة التذوق (Taste).',
        finalAnswerEn: 'The Tongue through the Sense of Taste.'
      }
    ],

    assessment: {
      id: 'as-sci1-2',
      titleAr: 'اختبار تقييم المحاضرة 2: الحواس الخمس والعادات الصحية',
      titleEn: 'Lecture 2 Assessment: The 5 Senses & Healthy Habits',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci1-2-1',
          textAr: 'أي عضو في الجسم نستخدمه لرؤية الألوان الجميلة في قوس قزح؟',
          textEn: 'Which organ do we use to see the colors of a rainbow?',
          optionsAr: ['العينين (Eyes - Sight)', 'الأذنين (Ears)', 'الأنف (Nose)', 'القدم (Foot)'],
          optionsEn: ['Eyes (Sight)', 'Ears', 'Nose', 'Foot'],
          correctIndex: 0,
          conceptTestedAr: 'حاسة البصر والعين',
          conceptTestedEn: 'Sense of Sight and Eyes',
          explanationAr: 'نستخدم أعيننا بحاسة البصر (Sight) لرؤية الألوان والأشكال وقراءة الكتب.',
          explanationEn: 'We use our eyes through the sense of sight to observe colors and shapes.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-2-2',
          textAr: 'نستخدم الأذنين (Ears) في أي حاسة؟',
          textEn: 'What sense do we use our Ears for?',
          optionsAr: ['السمع (Hearing)', 'الشم (Smell)', 'التذوق (Taste)', 'اللمس (Touch)'],
          optionsEn: ['Hearing', 'Smell', 'Taste', 'Touch'],
          correctIndex: 0,
          conceptTestedAr: 'حاسة السمع والأذن',
          conceptTestedEn: 'Sense of Hearing and Ears',
          explanationAr: 'الأذنان هما عضوا حاسة السمع لسماع الأصوات والموسيقى وكلام المعلم.',
          explanationEn: 'Ears are the organs for hearing sounds and voices.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-2-3',
          textAr: 'ما الحاسة المسؤولة عن معرفة طعم الآيس كريم اللذيذ الحلو (Sweet)؟',
          textEn: 'Which sense tells us that ice cream tastes sweet?',
          optionsAr: ['التذوق باللسان (Taste - Tongue)', 'الشم بالأنف (Smell)', 'السمع بالأذن (Hearing)', 'البصر بالعين (Sight)'],
          optionsEn: ['Taste (Tongue)', 'Smell (Nose)', 'Hearing (Ear)', 'Sight (Eye)'],
          correctIndex: 0,
          conceptTestedAr: 'حاسة التذوق واللسان',
          conceptTestedEn: 'Sense of Taste and Tongue',
          explanationAr: 'نتذوق النكهات الحلوة والمالحة والحامضة باستخدام اللسان (Tongue).',
          explanationEn: 'We taste sweet, salty, and sour flavors with our tongue.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-2-4',
          textAr: 'أي من العادات التالية تساعد في حماية أسناننا من التسوس؟',
          textEn: 'Which habit protects our teeth from cavities?',
          optionsAr: ['غسل الأسنان بالفرشاة والمعجون مرتين يومياً', 'أكل الحلوى طوال اليوم دون تنظيف', 'شرب المشروبات الغازية قبل النوم', 'عدم شرب الماء أبداً'],
          optionsEn: ['Brushing teeth twice daily with toothpaste', 'Eating candies all day', 'Drinking soda before bed', 'Never drinking water'],
          correctIndex: 0,
          conceptTestedAr: 'العادات الصحية لنظافة الأسنان',
          conceptTestedEn: 'Healthy Dental Hygiene Habits',
          explanationAr: 'تنظيف الأسنان بالفرشاة والمعجون يحميها من الجراثيم والتسوس.',
          explanationEn: 'Brushing teeth twice daily removes germs and prevents cavities.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-2-5',
          textAr: 'كيف نشعر بأن مكعب الثلج بارد جداً (Cold)؟',
          textEn: 'How do we feel that an ice cube is cold?',
          optionsAr: ['بحاسة اللمس بأيدينا وجلدنا (Touch)', 'بحاسة السمع بأذنينا', 'بحاسة الشم بأنفنا', 'بحاسة الرؤية فقط'],
          optionsEn: ['Sense of Touch with hands/skin', 'Sense of Hearing with ears', 'Sense of Smell with nose', 'Sense of Sight only'],
          correctIndex: 0,
          conceptTestedAr: 'حاسة اللمس والشعور بالحرارة والبرودة',
          conceptTestedEn: 'Sense of Touch: Hot and Cold',
          explanationAr: 'حاسة اللمس عبر الجلد واليدين تمكننا من الشعور بدرجات الحرارة (ساخن وبارد) والملمس (ناعم وخشن).',
          explanationEn: 'Touch via skin helps us sense temperature (hot/cold) and textures.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: ANIMALS, HABITATS, NEEDS & MOVEMENT ──
  {
    id: 'p1-sci-3',
    order: 3,
    titleAr: 'المحاضرة 3: الحيوانات ومواطنها واحتياجاتها (Animals & Habitats)',
    titleEn: 'Lecture 3: Animals, Habitats, Needs & Movement (Discover Primary 1)',
    subtitleAr: 'التعرف على الحيوانات الأليفة والمفترسة، أغطية أجسامها، مواطن عيشها، واحتياجاتها الأساسية للبقاء',
    subtitleEn: 'Explore domestic vs wild animals, animal coverings, natural habitats, and animal movement.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — الفصل الأول: عالم الحيوانات المدهش',
    unitTitleEn: 'Theme 2: The World Around Me — Chapter 1: Wonderful World of Animals',
    lessonNumberAr: 'الدرس 3: الحيوانات، مواطنها، وطرق حركتها',
    lessonNumberEn: 'Lesson 3: Animals, Habitats & How They Move',

    keyConceptsAr: [
      'الحيوانات الأليفة (Tame / Farm Animals & Pets): تعيش معنا في المنازل أو المزارع ونرعاها (القطة، الكلب، الخروف، البقرة، الحصان، الدجاجة).',
      'الحيوانات البرية (Wild Animals): تعيش في الغابات والبرية وتعتمد على نفسها (الأسد، الفيل، الزرافة، النمر، القرد).',
      'أغطية أجسام الحيوانات (Body Coverings): الفرو (Fur) مثل القطة والدب، الريش (Feathers) مثل العصافير والبط، الحراشف (Scales) مثل السمك والثعبان، والجلد السميك (Skin) مثل الفيل.',
      'احتياجات الحيوان للبقاء (Animal Needs): الغذاء (Food)، الماء النقي (Water)، الهواء (Air)، والمأوى/المسكن (Shelter/Habitat).',
      'طرق حركة الحيوانات (Movement): المشي والجري (Walk/Run - الكلب والفهد)، الطيران (Fly - الطيور والفراشات)، السباحة (Swim - الأسماك والبط)، والقفز (Hop - الأرنب والضفدع).'
    ],
    keyConceptsEn: [
      'Tame & Farm Animals: Live peacefully with humans (Cats, Dogs, Cows, Sheep, Horses, Hens).',
      'Wild Animals: Live independently in nature/jungles (Lions, Elephants, Giraffes, Monkeys).',
      'Animal Body Coverings: Fur (Cats, Bears), Feathers (Birds), Scales (Fish, Reptiles), Skin (Elephants).',
      'Essential Needs: Food, Fresh Water, Air, and Shelter / Safe Habitat.',
      'Animal Movement: Walk/Run (Dog, Horse), Fly (Birds, Bees), Swim (Fish, Dolphins), Hop/Jump (Frog, Rabbit), Crawl (Snake).'
    ],

    conceptMapAr: [
      'الحيوانات ➔ أليفة (مزرعة/منزل) + برية (غابة) ➔ أغطية الجسم (فرو، ريش، حراشف) ➔ احتياجات (طعام، ماء، مأوى) ➔ حركة (طيران، سباحة، جري، قفز)'
    ],
    conceptMapEn: [
      'Animals ➔ Tame vs Wild ➔ Body Coverings (Fur, Feathers, Scales) ➔ Survival Needs (Food, Water, Shelter) ➔ Movement'
    ],

    learningOutcomesAr: [
      'أن يميز التلميذ بين الحيوانات الأليفة (Tame/Pets) والحيوانات البرية (Wild).',
      'أن يحدد غطاء جسم الحيوان (فرو، ريش، حراشف).',
      'أن يربط بين الحيوان وموطنه وطريقة حركته (السمكة تسبح في الماء، العصفور يطير في الهواء).'
    ],
    learningOutcomesEn: [
      'Distinguish tame domestic animals from wild animals.',
      'Identify animal body coverings (fur, feathers, scales).',
      'Match animals with their natural habitats and modes of movement.'
    ],

    vocabulary: [
      {
        termAr: 'حيوان أليف (Tame / Pet)',
        termEn: 'Tame / Pet',
        definitionAr: 'حيوان يعيش بأمان مع الإنسان في البيت أو المزرعة ويساعده (كالقط والخروف والبقرة).'
      },
      {
        termAr: 'حيوان بري (Wild Animal)',
        termEn: 'Wild Animal',
        definitionAr: 'حيوان يعيش حراً في الغابة أو الصحراء ويبحث عن طعامه بنفسه (كالأسد والفيل).'
      },
      {
        termAr: 'مأوى / موطن (Shelter / Habitat)',
        termEn: 'Shelter / Habitat',
        definitionAr: 'المكان الآمن الذي يعيش فيه الكائن الحي ويجد فيه غذاءه وماءه.'
      },
      {
        termAr: 'ريش (Feathers)',
        termEn: 'Feathers',
        definitionAr: 'الغطاء الخفيف والجميل الذي يغطي أجسام الطيور ويساعدها على الطيران والدفء.'
      },
      {
        termAr: 'فرو (Fur)',
        termEn: 'Fur',
        definitionAr: 'شعر ناعم وكثيف يغطي أجسام الثدييات كالقطط والكلاب والدببة لتدفئتها.'
      }
    ],

    warmupHookAr: 'تخيل أنك في رحلة سفاري مثيرة إلى حديقة الحيوان! 🦁 ترى زرافة طويلة تأكل أوراق الشجر، وعصفوراً يغرد بريشه الملون، وبطة تسبح بسعادة في البحيرة! كيف خلق الله لكل حيوان غطاءً مذهلاً لجسمه ومسكناً يناسبه؟ تعالوا نستكشف معاً!',
    warmupHookEn: 'Imagine going on an exciting safari trip! You see a tall giraffe munching on leaves, a colorful parrot flying high, and ducks swimming in the pond! Let us discover where animals live, what covers their bodies, and how they move!',

    mainContentAr: `
### 1. Tame Animals vs. Wild Animals (الحيوانات الأليفة والبرية)
* 🏡 **Tame & Farm Animals (حيوانات أليفة ومزرعة):**
  * Live with us in houses or farms. They are friendly and safe.
  * **Cow (بقرة):** Gives us fresh milk 🥛.
  * **Sheep (خروف):** Gives us warm wool 🐑.
  * **Hen (دجاجة):** Gives us eggs 🥚.
  * **Cat & Dog (قطة وكلب):** Loyal pets at home 🐱 🐶.

* 🌴 **Wild Animals (حيوانات برية):**
  * Live in the wild, jungle, or desert. They find their own food.
  * **Lion (أسد):** The strong king of the jungle 🦁.
  * **Elephant (فيل):** The biggest land animal with a long trunk 🐘.
  * **Giraffe (زرافة):** Has a super tall neck to reach high trees 🦒.
  * **Monkey (قرد):** Swings on trees and loves bananas 🐒.

---

### 2. Animal Body Coverings (أغطية أجسام الحيوانات)
Every animal has a special coat to protect it and keep it warm:
1. 🪶 **Feathers (الريش):** Birds (Parrot, Eagle, Duck, Hen).
2. 🐱 **Fur (الفرو):** Mammals (Cat, Dog, Bear, Rabbit).
3. 🐟 **Scales (الحراشف / القشور):** Fish and Reptiles (Goldfish, Snake, Lizard).
4. 🐢 **Hard Shell (الصدفة / الدرع):** Turtle and Snail.

---

### 3. How Animals Move (كيف تتحرك الحيوانات؟)
* 🦅 **Fly (طيران):** Birds, Butterflies, Bees (using wings).
* 🐟 **Swim (سباحة):** Fish, Dolphins, Ducks (using fins and webbed feet).
* 🐕 **Walk & Run (مشي وجري):** Horses, Cheetahs, Dogs, Cats (using legs).
* 🐸 **Hop & Jump (قفز):** Frogs, Kangaroos, Rabbits.
* 🐍 **Slither / Crawl (زحف):** Snakes, Worms.

---

### 4. Animal Habitats & Classification Board
\`\`\`xml
<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="700" height="230" fill="#0f172a" rx="16"/>
  <!-- Farm Animals Box -->
  <g transform="translate(25, 20)">
    <rect width="310" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="155" y="40" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">🏡 Farm & Pet Animals (أليفة)</text>
    <text x="155" y="75" font-size="28" text-anchor="middle">🐱 🐶 🐮 🐑 🐔</text>
    <text x="155" y="115" fill="#f8fafc" font-size="13" text-anchor="middle">Live safely with humans on farms</text>
    <text x="155" y="140" fill="#94a3b8" font-size="12" text-anchor="middle">Covered with: Fur, Wool, Feathers</text>
    <text x="155" y="165" fill="#34d399" font-size="12" text-anchor="middle">Give us: Milk 🥛, Eggs 🥚, Wool 🧶</text>
  </g>
  <!-- Wild Animals Box -->
  <g transform="translate(365, 20)">
    <rect width="310" height="190" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="12"/>
    <text x="155" y="40" fill="#fbbf24" font-size="16" font-weight="bold" text-anchor="middle">🌴 Wild Animals (برية في الغابة)</text>
    <text x="155" y="75" font-size="28" text-anchor="middle">🦁 🐘 🦒 🐒 🦓</text>
    <text x="155" y="115" fill="#f8fafc" font-size="13" text-anchor="middle">Live in forests, jungles & deserts</text>
    <text x="155" y="140" fill="#94a3b8" font-size="12" text-anchor="middle">Find their own food & water</text>
    <text x="155" y="165" fill="#f43f5e" font-size="12" text-anchor="middle">Need big natural habitats to survive</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Domestic vs Wild Animals
* **Domestic / Farm Animals:** Live with humans (Cows, Horses, Sheep, Cats).
* **Wild Animals:** Live in nature (Lions, Elephants, Giraffes, Monkeys).

### 2. Body Coverings & Movement
* **Coverings:** Fur (Mammals), Feathers (Birds), Scales (Fish & Reptiles), Shells (Turtles).
* **Movement:** Walking/Running (Legs), Flying (Wings), Swimming (Fins), Hopping (Frogs).
`,

    workedExamples: [
      {
        id: 'ex-sci3-1',
        titleAr: 'مثال 1: ما غطاء جسم العصفور وكيف يتحرك؟',
        titleEn: 'Example 1: Bird body covering and movement',
        problemAr: 'العصفور (Bird): ما الغطاء الذي يكسو جسمه؟ وما طريقة حركته الأساسية؟',
        problemEn: 'What covers a bird\'s body and how does it move?',
        stepByStepSolutionAr: [
          'الخطوة 1: نفحص جسم العصفور: يغطيه ريش ناعم وخفيف ملون (Feathers).',
          'الخطوة 2: العصفور يمتلك جناحين يساعدانه على الارتفاع والطيران في الهواء (Fly).',
          'الاستنتاج: يغطي جسمه الريش (Feathers) ويتحرك بالطيران (Flying).'
        ],
        stepByStepSolutionEn: [
          'Step 1: Check bird anatomy: covered with light, colorful feathers.',
          'Step 2: Uses wings to fly in the air.',
          'Conclusion: Covered with Feathers and moves by Flying.'
        ],
        finalAnswerAr: 'يغطي جسم العصفور الريش (Feathers) ويتحرك بالطيران (Flying).',
        finalAnswerEn: 'A bird is covered with Feathers and moves by Flying.'
      }
    ],

    textbookExercises: [
      {
        id: 'pr-sci3-1',
        problemAr: 'أين تعيش السمكة؟ وماذا يغطي جسمها؟',
        problemEn: 'Where does a fish live, and what covers its body?',
        solutionStepsAr: ['السمكة تسبح بالزعانف وتعيش في الماء العذب أو المالح.'],
        solutionStepsEn: ['Fish swim using fins in water and are covered in scales.'],
        finalAnswerAr: 'تعيش السمكة في الماء (Water)، ويغطي جسمها القشور والحراشف (Scales).',
        finalAnswerEn: 'Fish live in water and are covered with scales.'
      }
    ],

    assessment: {
      id: 'as-sci1-3',
      titleAr: 'اختبار تقييم المحاضرة 3: الحيوانات ومواطنها',
      titleEn: 'Lecture 3 Assessment: Animals & Habitats',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci1-3-1',
          textAr: 'أي من الحيوانات التالية يُعتبر حيواناً برياً (Wild Animal) يعيش في الغابة؟',
          textEn: 'Which of the following is a Wild Animal that lives in the jungle?',
          optionsAr: ['الأسد (Lion)', 'القطة (Cat)', 'الخروف (Sheep)', 'البقرة (Cow)'],
          optionsEn: ['Lion', 'Cat', 'Sheep', 'Cow'],
          correctIndex: 0,
          conceptTestedAr: 'تمييز الحيوانات البرية',
          conceptTestedEn: 'Identifying Wild Animals',
          explanationAr: 'الأسد حيوان بري يعيش في الغابة، بينما القطة والخروف والبقرة حيوانات أليفة في المزرعة والبيت.',
          explanationEn: 'The lion is a wild animal living in jungles, while cats and cows are domestic.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-3-2',
          textAr: 'ماذا يغطي جسم الطيور (Birds) ليساعدها على التدفئة والطيران؟',
          textEn: 'What covers a bird\'s body to keep it warm and help it fly?',
          optionsAr: ['الريش (Feathers)', 'الفرو (Fur)', 'الحراشف (Scales)', 'الصدفة الصلبة'],
          optionsEn: ['Feathers', 'Fur', 'Scales', 'Hard Shell'],
          correctIndex: 0,
          conceptTestedAr: 'أغطية أجسام الطيور',
          conceptTestedEn: 'Bird Body Coverings: Feathers',
          explanationAr: 'يغطي الريش (Feathers) أجسام الطيور ليمنحها الدفء ويساعدها على الطيران بخفة.',
          explanationEn: 'Feathers cover birds to provide warmth and enable flight.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-3-3',
          textAr: 'ما هو المأوى والبيئة الطبيعية للأسماك؟',
          textEn: 'What is the natural habitat of fish?',
          optionsAr: ['الماء والبحار (Water / Ocean)', 'أعلى الأشجار', 'الرمال الصحراوية الجافة', 'أعشاش الطيور'],
          optionsEn: ['Water / Oceans', 'Top of trees', 'Dry desert sand', 'Bird nests'],
          correctIndex: 0,
          conceptTestedAr: 'مواطن الحيوانات المائية',
          conceptTestedEn: 'Aquatic Habitats for Fish',
          explanationAr: 'تعيش الأسماك في المياه وتسبح بالزعانف وتتنفس بالخياشيم.',
          explanationEn: 'Fish live in water and swim using fins.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-3-4',
          textAr: 'كيف يتحرك الضفدع (Frog) والأرنب (Rabbit)؟',
          textEn: 'How do frogs and rabbits move?',
          optionsAr: ['بالقفز (Hop / Jump)', 'بالطيران في الفضاء', 'بالسباحة فقط دون أرجل', 'بالزحف دون حركة'],
          optionsEn: ['Hopping and jumping', 'Flying in space', 'Swimming without legs', 'Crawling without movement'],
          correctIndex: 0,
          conceptTestedAr: 'حركة الحيوانات بالقفز',
          conceptTestedEn: 'Animal Movement: Hopping',
          explanationAr: 'الضفادع والأرانب تمتلك أرجلاً خلفية قوية تمكنها من القفز (Hopping).',
          explanationEn: 'Frogs and rabbits have strong hind legs that allow them to hop and jump.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-3-5',
          textAr: 'ما الحيوان الذي يربي في المزرعة ويعطينا الحليب والجبن اللذيذ؟',
          textEn: 'Which farm animal gives us fresh milk and cheese?',
          optionsAr: ['البقرة (Cow)', 'النمر (Tiger)', 'الثعلب (Fox)', 'التمساح (Crocodile)'],
          optionsEn: ['Cow', 'Tiger', 'Fox', 'Crocodile'],
          correctIndex: 0,
          conceptTestedAr: 'فوائد الحيوانات الأليفة في المزرعة',
          conceptTestedEn: 'Benefits of Farm Animals',
          explanationAr: 'البقرة حيوان أليف يعيش في المزرعة ويزودنا بالحليب الطازج والجبن واللحم.',
          explanationEn: 'The cow is a gentle farm animal that provides nutritious milk and cheese.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: PLANTS, WEATHER & THE FOUR SEASONS ──
  {
    id: 'p1-sci-4',
    order: 4,
    titleAr: 'المحاضرة 4: أجزاء النبات، الطقس وفصول السنة (Plants & Seasons)',
    titleEn: 'Lecture 4: Plant Parts, Needs, Weather & The 4 Seasons (Discover Primary 1)',
    subtitleAr: 'التعرف على أجزاء النبات البسيطة، وما تحتاجه النبتة لتنمو، وحالات الطقس وفصول السنة الأربعة',
    subtitleEn: 'Learn simple plant parts (Roots, Stem, Leaves, Flower), plant needs, weather types, and the 4 seasons.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الأول الابتدائي (الصف 1) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 1 / Primary 1 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester (Theme 2: The World Around Me)',
    unitTitleAr: 'المحور الثاني: العالم من حولي — الفصل الثاني: النباتات وفصول السنة',
    unitTitleEn: 'Theme 2: The World Around Me — Chapter 2: Plants & The Four Seasons',
    lessonNumberAr: 'الدرس 4: أجزاء النبات، الطقس، وفصول السنة',
    lessonNumberEn: 'Lesson 4: Plant Parts, Weather & Seasons',

    keyConceptsAr: [
      'أجزاء النبات البسيطة (Parts of a Plant):',
      '  1. الجذور (Roots): تحت الأرض، تثبت النبتة وتمتص الماء من التربة.',
      '  2. الساق (Stem): يحمل الأوراق والأزهار وينقل الماء لأعلى.',
      '  3. الأوراق (Leaves): خضراء وجميلة تصنع الغذاء للنبات بمساعدة ضوء الشمس.',
      '  4. الزهرة (Flower): الجزء الملون الجميل الذي يجذب الفراشات ويصنع البذور.',
      'ما تحتاجه النبتة لتنمو (Plant Needs): ضوء الشمس (Sunlight)، الماء (Water)، التربة (Soil)، والهواء (Air).',
      'حالات الطقس (Weather): مشمس (Sunny ☀️)، ممطر (Rainy 🌧️)، غائم (Cloudy ☁️)، وعاصف بالرياح (Windy 💨).',
      'فصول السنة الأربعة (The 4 Seasons):',
      '  1. الربيع (Spring): جو معتدل ولطيف، تتفتح الأزهار وتخضر الأشجار 🌸.',
      '  2. الصيف (Summer): حار ومشمس، نذهب للشاطئ ونرتدي ملابس خفيفة 🏖️.',
      '  3. الخريف (Autumn / Fall): معتدل مع رياح، تتساقط أوراق الشجر الصفراء والبرتقالية 🍂.',
      '  4. الشتاء (Winter): بارد وماطر، نرتدي معاطف شتوية دافئة ونستخدم المظلات 🧥 ☔.'
    ],
    keyConceptsEn: [
      'Simple Plant Parts: Roots (absorb water), Stem (holds plant), Leaves (catch sunlight), Flower (colorful bloom).',
      'Plant Growth Needs: Sunlight, Water, Soil/Earth, and Fresh Air.',
      'Weather Types: Sunny ☀️, Rainy 🌧️, Cloudy ☁️, Windy 💨.',
      'The 4 Seasons: Spring (flowers bloom), Summer (hot & sunny), Autumn/Fall (leaves fall), Winter (cold & rainy).'
    ],

    conceptMapAr: [
      'النباتات والطقس ➔ أجزاء النبات (جذور ➔ ساق ➔ أوراق ➔ زهرة) + احتياجات (شمس + ماء + هواء) ➔ فصول السنة (ربيع، صيف، خريف، شتاء)'
    ],
    conceptMapEn: [
      'Plants & Nature ➔ Plant Parts (Roots, Stem, Leaves, Flower) + Needs (Sun, Water, Air) ➔ 4 Seasons (Spring, Summer, Fall, Winter)'
    ],

    learningOutcomesAr: [
      'أن يحدد التلميذ أجزاء النبات الأربعة (جذور، ساق، أوراق، زهرة) على رسم مصور.',
      'أن يعدد الاحتياجات الأساسية لنمو النبات (الماء، ضوء الشمس، الهواء، التربة).',
      'أن يصف فصول السنة الأربعة ويميز الملابس المناسبة لكل فصل وحالة طقس.'
    ],
    learningOutcomesEn: [
      'Identify the 4 main plant parts on a visual diagram.',
      'List essential plant needs: water, sunlight, air, soil.',
      'Describe the 4 seasons and choose appropriate clothing for various weather conditions.'
    ],

    vocabulary: [
      {
        termAr: 'جذور (Roots)',
        termEn: 'Roots',
        definitionAr: 'جزء النبتة الموجود تحت التراب لامتصاص الماء وتثبيت النبات.'
      },
      {
        termAr: 'ساق (Stem)',
        termEn: 'Stem',
        definitionAr: 'العمود الذي يقف عليه النبات وينقل الماء إلى الأوراق والأزهار.'
      },
      {
        termAr: 'أوراق (Leaves)',
        termEn: 'Leaves',
        definitionAr: 'الأجزاء الخضراء المنبسطة التي تمتص ضوء الشمس لتغذية النبتة.'
      },
      {
        termAr: 'الربيع (Spring)',
        termEn: 'Spring',
        definitionAr: 'فصل الجمال والزهور والجو المعتدل اللطيف بعد الشتاء.'
      },
      {
        termAr: 'الشتاء (Winter)',
        termEn: 'Winter',
        definitionAr: 'أبرد فصول السنة، تسقط فيه الأمطار ونرتدي فيه الملابس الصوفية الثقيلة.'
      }
    ],

    warmupHookAr: 'هل زرعت يوماً بذرة صغيرة في أصيص ورأيتها تكبر؟ 🌱 تبدأ البذرة بإخراج جذور صغيرة تحت التراب، ثم تنمو ساق خضراء نحو الشمس، ثم تظهر أوراق وزهرة ملونة! وما أجمل أن نرى أزهار الربيع وشمس الصيف وأمطار الشتاء! تعالوا لنكتشف أسرار النباتات والفصول الأربعة!',
    warmupHookEn: 'Have you ever planted a tiny seed in a flower pot? It grows tiny roots under the dirt, then a green stem reaches for the golden sunshine! Join us as we explore plant wonders, weather, and the four seasons!',

    mainContentAr: `
### 1. The Four Main Parts of a Plant (أجزاء النبات الأربعة)
Every beautiful flower and green plant has 4 main parts:
1. 🪨 **Roots (الجذور):** Grow underground in the soil. They hold the plant firm and drink water from the soil like tiny straws!
2. 🎋 **Stem (الساق):** Stands tall and strong like an elevator, carrying water up to the leaves.
3. 🍃 **Leaves (الأوراق):** Catch bright sunlight to make food for the plant.
4. 🌸 **Flower (الزهرة):** The colorful, pretty bloom that makes sweet nectar and new seeds.

* **What does a Plant Need to Grow?**
  * ☀️ **Sunlight (ضوء الشمس)**
  * 💧 **Water (الماء)**
  * 🪴 **Soil / Earth (التربة الصالحة)**
  * 🌬️ **Fresh Air (الهواء النقي)**

---

### 2. Plant Anatomy Diagram
\`\`\`xml
<svg viewBox="0 0 700 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="700" height="240" fill="#0f172a" rx="16"/>
  <!-- Plant Graphic Left -->
  <g transform="translate(60, 20)">
    <!-- Soil -->
    <rect x="0" y="160" width="220" height="40" fill="#78350f" rx="6"/>
    <text x="110" y="185" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Soil (التربة)</text>
    <!-- Roots -->
    <path d="M110 160 Q90 190 70 200 M110 160 Q110 195 110 210 M110 160 Q130 190 150 200" stroke="#d97706" stroke-width="4" fill="none"/>
    <text x="30" y="195" fill="#f59e0b" font-size="13" font-weight="bold">1. Roots (جذور)</text>
    <!-- Stem -->
    <rect x="105" y="50" width="10" height="110" fill="#22c55e" rx="4"/>
    <text x="20" y="110" fill="#4ade80" font-size="13" font-weight="bold">2. Stem (ساق)</text>
    <!-- Leaves -->
    <path d="M110 110 Q70 90 70 120 Q100 120 110 110" fill="#16a34a"/>
    <path d="M110 85 Q150 65 150 95 Q120 95 110 85" fill="#16a34a"/>
    <text x="195" y="90" fill="#4ade80" font-size="13" font-weight="bold">3. Leaves (أوراق)</text>
    <!-- Flower -->
    <circle cx="110" cy="40" r="16" fill="#ec4899"/>
    <circle cx="110" cy="40" r="8" fill="#facc15"/>
    <text x="180" y="40" fill="#f472b6" font-size="13" font-weight="bold">4. Flower (زهرة)</text>
  </g>

  <!-- Needs Box Right -->
  <g transform="translate(360, 20)">
    <rect width="300" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="150" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">🌱 What Plants Need (احتياجات النبات)</text>
    <text x="30" y="75" fill="#f8fafc" font-size="14">☀️ 1. Sunlight (ضوء الشمس)</text>
    <text x="30" y="110" fill="#f8fafc" font-size="14">💧 2. Water (الماء النقي)</text>
    <text x="30" y="145" fill="#f8fafc" font-size="14">🪴 3. Soil (التربة الصالحة)</text>
    <text x="30" y="180" fill="#f8fafc" font-size="14">🌬️ 4. Fresh Air (الهواء)</text>
  </g>
</svg>
\`\`\`

---

### 3. The Four Seasons & Weather (فصول السنة الأربعة والطقس)
Our year has **4 wonderful seasons**:

1. 🌸 **Spring (الربيع):**
   * **Weather:** Pleasant and warm.
   * **Nature:** Flowers bloom and trees grow fresh green leaves.
2. 🏖️ **Summer (الصيف):**
   * **Weather:** Hot, sunny, and long bright days.
   * **Clothes:** T-shirts, shorts, hats, and sunglasses 🕶️.
3. 🍂 **Autumn / Fall (الخريف):**
   * **Weather:** Cool and windy.
   * **Nature:** Tree leaves turn orange, yellow, and brown, then gently fall down.
4. ❄️ **Winter (الشتاء):**
   * **Weather:** Cold, cloudy, and rainy.
   * **Clothes:** Warm jackets, woolen hats, scarves, and umbrellas ☔.

* **Daily Weather Words:**
  * ☀️ **Sunny:** Clear blue sky with bright golden sun.
  * 🌧️ **Rainy:** Rain drops falling from gray clouds.
  * 💨 **Windy:** Strong cool wind blowing hats and leaves.
  * ☁️ **Cloudy:** White and gray fluffy clouds covering the sun.
`,
    mainContentEn: `
### 1. Plant Parts and Needs
* **Roots:** Anchor plant and absorb water from soil.
* **Stem:** Supports leaves and transports water.
* **Leaves:** Trap sunlight to produce nourishment.
* **Flower:** Colorful blossom producing seeds.
* **Needs:** Sunlight, Water, Soil, and Air.

### 2. The Four Seasons
* **Spring:** Mild, colorful blossoms bloom.
* **Summer:** Hot and sunny; beach vacations.
* **Autumn:** Cool, windy; leaves turn orange and fall.
* **Winter:** Cold, cloudy, and rainy; warm coats required.
`,

    workedExamples: [
      {
        id: 'ex-sci4-1',
        titleAr: 'مثال 1: ما جزء النبات المسؤول عن امتصاص الماء من التربة؟',
        titleEn: 'Example 1: Which plant part absorbs water from soil?',
        problemAr: 'عندما تسقي النبتة بالماء، أي جزء يمتص هذا الماء من تحت التربة؟',
        problemEn: 'When you water a plant, which part absorbs it from deep in the soil?',
        stepByStepSolutionAr: [
          'الخطوة 1: ننظر إلى الأجزاء تحت الأرض: إنها الجذور (Roots).',
          'الخطوة 2: وظيفة الجذور هي تثبيت النبتة وامتصاص الماء والأملاح من التربة.',
          'الاستنتاج: الجذور (Roots) هي الجزء الماص للماء.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Check underground plant anatomy: Roots.',
          'Step 2: Roots anchor the plant and drink water like tiny straws.',
          'Conclusion: Roots absorb water.'
        ],
        finalAnswerAr: 'الجذور (Roots) هي الجزء الذي يمتص الماء من التربة.',
        finalAnswerEn: 'Roots absorb water from the soil.'
      },
      {
        id: 'ex-sci4-2',
        titleAr: 'مثال 2: في أي فصل نرتدي المعاطف الثقيلة ونستخدم المظلات؟',
        titleEn: 'Example 2: In which season do we wear heavy coats?',
        problemAr: 'عندما يكون الطقس بارداً وممطراً في شهر يناير، ما الفصل المناسب وماذا نرتدي؟',
        problemEn: 'When weather is cold and rainy in January, what season is it?',
        stepByStepSolutionAr: [
          'الخطوة 1: الفصل البارد والممطر هو فصل الشتاء (Winter).',
          'الخطوة 2: في الشتاء نرتدي ملابس صوفية ومعاطف دافئة ونحمل مظلة المطر (Umbrella).',
          'الاستنتاج: فصل الشتاء (Winter) ❄️.'
        ],
        stepByStepSolutionEn: [
          'Step 1: The cold and rainy season is Winter.',
          'Step 2: In winter we wear warm woolen jackets and carry umbrellas.',
          'Conclusion: Winter season.'
        ],
        finalAnswerAr: 'فصل الشتاء (Winter) البارد الممطر.',
        finalAnswerEn: 'Winter season.'
      }
    ],

    textbookExercises: [
      {
        id: 'pr-sci4-1',
        problemAr: 'إذا وضعنا نبتة في خزانة مظلمة ولم نسقها بالماء لمدة أسبوعين، ماذا سيحدث لها؟',
        problemEn: 'What happens to a plant kept in a dark closet without water for two weeks?',
        solutionStepsAr: ['تذكر أن النبات كائن حي يحتاج لضوء الشمس والماء ليعيش.'],
        solutionStepsEn: ['Remember that plants are living things needing sun and water to stay alive.'],
        finalAnswerAr: 'ستذبل النبتة وتتحول للون الأصفر وتموت لأنها تحتاج إلى ضوء الشمس والماء النقي.',
        finalAnswerEn: 'The plant will wilt, turn yellow, and die because it lacks essential water and sunlight.'
      }
    ],

    assessment: {
      id: 'as-sci1-4',
      titleAr: 'اختبار تقييم المحاضرة 4: النباتات وفصول السنة',
      titleEn: 'Lecture 4 Assessment: Plants & Seasons',
      passingScore: 80,
      questions: [
        {
          id: 'q-sci1-4-1',
          textAr: 'ما الجزء الأخضر المنبسط من النبتة الذي يمتص ضوء الشمس؟',
          textEn: 'Which flat green plant part absorbs sunlight?',
          optionsAr: ['الأوراق (Leaves)', 'الجذور (Roots)', 'التربة (Soil)', 'الحجارة'],
          optionsEn: ['Leaves', 'Roots', 'Soil', 'Stones'],
          correctIndex: 0,
          conceptTestedAr: 'أجزاء النبات: الأوراق',
          conceptTestedEn: 'Plant Parts: Leaves',
          explanationAr: 'الأوراق (Leaves) هي الأجزاء الخضراء التي تمتص ضوء الشمس لتصنع غذاء النبتة.',
          explanationEn: 'Leaves are the green parts that trap sunlight to produce food for the plant.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-4-2',
          textAr: 'أي من العناصر التالية لا يحتاجها النبات للنمو؟',
          textEn: 'Which of the following is NOT needed by a plant to grow?',
          optionsAr: ['ألعاب الفيديو والشوكولاتة', 'ضوء الشمس (Sunlight)', 'الماء (Water)', 'الهواء والتربة (Air & Soil)'],
          optionsEn: ['Video games and chocolate', 'Sunlight', 'Water', 'Air and Soil'],
          correctIndex: 0,
          conceptTestedAr: 'احتياجات النبات الأساسية',
          conceptTestedEn: 'Basic Plant Requirements',
          explanationAr: 'يحتاج النبات إلى ضوء الشمس والماء والهواء والتربة، ولا يحتاج إلى الألعاب أو الشوكولاتة!',
          explanationEn: 'Plants need sun, water, air, and soil; they do not need toys or sweets.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-4-3',
          textAr: 'في أي فصل من فصول السنة تتفتح الأزهار الملونة ويكون الجو بديعاً ومعتدلاً؟',
          textEn: 'In which season do colorful flowers bloom and the weather is mild?',
          optionsAr: ['الربيع (Spring 🌸)', 'الشتاء شديد البرودة', 'العواصف الرملية', 'الليل المظلم'],
          optionsEn: ['Spring', 'Severe Winter', 'Sandstorms', 'Dark Night'],
          correctIndex: 0,
          conceptTestedAr: 'فصل الربيع',
          conceptTestedEn: 'Spring Season and Blooming Flowers',
          explanationAr: 'فصل الربيع (Spring) يتميز بالجو اللطيف وتفتح الأزهار الجميلة واخضرار الأشجار.',
          explanationEn: 'Spring is known for lovely mild weather, green grass, and blooming flowers.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-4-4',
          textAr: 'عندما تسقط أوراق الأشجار وتتلون باللون البرتقالي والأصفر مع هبوب الرياح، يكون هذا فصل:',
          textEn: 'When tree leaves turn orange, yellow and fall in the wind, it is:',
          optionsAr: ['الخريف (Autumn / Fall 🍂)', 'الصيف الحار', 'الربيع المزهر', 'منتصف النهار'],
          optionsEn: ['Autumn / Fall', 'Hot Summer', 'Blooming Spring', 'Midday'],
          correctIndex: 0,
          conceptTestedAr: 'فصل الخريف وسقوط الأوراق',
          conceptTestedEn: 'Autumn / Fall Season',
          explanationAr: 'في فصل الخريف تتغير ألوان أوراق الأشجار وتتساقط تدريجياً مع هبوب الرياح اللطيفة.',
          explanationEn: 'During Autumn/Fall, leaves turn yellow and orange and fall to the ground.',
          difficulty: 'easy'
        },
        {
          id: 'q-sci1-4-5',
          textAr: 'ماذا نرتدي في فصل الصيف (Summer) الحار والمشمس؟',
          textEn: 'What do we wear during the hot and sunny Summer season?',
          optionsAr: ['ملابس قطنية خفيفة وقبعة ونظارة شمسية', 'معطفاً صوفياً ثقيلاً وقفازات تزلج', 'أحذية ثلجية ومعطف فرو', 'بطانية صوفية ثقيلة طوال اليوم'],
          optionsEn: ['Light cotton clothes, sunhat, and sunglasses', 'Heavy wool coat and ski gloves', 'Snow boots and fur coat', 'Heavy blanket all day'],
          correctIndex: 0,
          conceptTestedAr: 'الملابس المناسبة لفصل الصيف',
          conceptTestedEn: 'Appropriate Summer Clothing',
          explanationAr: 'في الصيف الحار نرتدي ملابس خفيفة مريحة ونحمي أنفسنا من أشعة الشمس بالقبعة والنظارة الشمسية.',
          explanationEn: 'In hot summer weather, we wear light comfortable clothes and protective sun hats.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
