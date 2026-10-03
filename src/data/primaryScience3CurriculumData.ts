import type { Lecture } from '../types';

// ============================================================================
// PRIMARY SCIENCE / DISCOVER — GRADE 3 (ديسكفر والعلوم الصف الثالث الابتدائي - نظام التعليم 2.0 المعتمد)
// Official Egyptian Language Schools & Experimental Schools Curriculum (Edu 2.0 - Discover Grade 3):
// Lecture 1: Theme 1 (Who Am I?): Life Skills, Healthy Body, Nutrition & The Digestive System
// Lecture 2: Theme 1 (Who Am I?): Getting Fit, Cardiovascular System, Heart Rate & Body Mechanics
// Lecture 3: Theme 2 (How the World Works): Living Things, Inherited vs Acquired Traits & Ecosystem Adaptations
// Lecture 4: Theme 3 & 4 (How the World Works & Communication): Environmental Changes, Fossils, Forces, Motion & Magnetism
// ============================================================================

export const PRIMARY_SCIENCE_G3_LECTURES: Lecture[] = [
  // ── LECTURE 1: LIFE SKILLS, HEALTHY BODY, NUTRITION & DIGESTIVE SYSTEM ──
  {
    id: 'p3-sci-1',
    order: 1,
    titleAr: 'المحاضرة 1: مهارات الحياة وصحة الجسم والتغذية والجهاز الهضمي (Life Skills & Healthy Body)',
    titleEn: 'Lecture 1: Life Skills, Nutrition, Healthy Body & Digestive System (Discover Primary 3)',
    subtitleAr: 'اكتساب مهارات الحياة الأساسية (Life Skills)، فهم رحلة الطعام عبر الجهاز الهضمي، ومجموعات الغذاء المتوازن',
    subtitleEn: 'Master essential Life Skills, explore the digestive journey of nutrients, and balance healthy dietary choices.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'Theme 1: Who Am I? — Chapter 1: Life Skills & Chapter 2: The Healthy Body',
    unitTitleEn: 'Theme 1: Who Am I? — Chapter 1: Life Skills & Chapter 2: The Healthy Body',
    lessonNumberAr: 'الدرس 1: مهارات الحياة، التغذية المتوازنة والجهاز الهضمي',
    lessonNumberEn: 'Lesson 1: Life Skills, Balanced Nutrition & Digestive System',

    keyConceptsAr: [
      'مهارات الحياة الأساسية (Core Life Skills):',
      '  1. التواصل (Communication): التعبير بوضوح عن الأفكار والمشاعر والاستماع الفعال للآخرين.',
      '  2. التفكير النقدي (Critical Thinking): تحليل المعلومات والتساؤل بدقة لاتخاذ قرارات سليمة.',
      '  3. إدارة الذات (Self-Management): تنظيم الوقت وتحديد الأهداف والالتزام بالعادات الصحية الإيجابية.',
      '  4. التعاون والعمل الجماعي (Collaboration): العمل المشترك بروح الفريق لتحقيق هدف موحد.',
      '  5. حل المشكلات (Problem Solving): تحديد الصعوبات وابتكار خطوات عملية لحلها.',
      '  6. التعاطف (Empathy): فهم مشاعر الآخرين ومساعدتهم والاهتمام باحتياجاتهم.',
      '  7. اتخاذ القرار (Decision Making): اختيار أفضل الحلول والبدائل بناءً على التفكير والمسؤولية.',
      'مجموعات الغذاء المتوازن (Balanced Nutrition & Healthy Eating Plate):',
      '  - الكربوهيدرات (Carbohydrates): تمد الجسم بالطاقة والنشاط (الأرز، الخبز، الحبوب الكاملة، الشوفان).',
      '  - البروتينات (Proteins): تبني العضلات وتساعد على النمو وإصلاح الأنسجة التالفة (البيض، اللحوم، البقوليات، الأسماك).',
      '  - الدهون الصحية (Healthy Fats): تمد الجسم بطاقة مركزة وتحمي الأعضاء الحيوية (زيت الزيتون، المكسرات).',
      '  - الفيتامينات والمعادن (Vitamins & Minerals): تحمي من الأمراض وتعزز المناعة وقوة العظام (الفواكه الطازجة، الخضروات الورقية، الكالسيوم في الحليب).',
      '  - الماء (Water): ينقل العناصر الغذائية، ويطرد السموم، وينظم حرارة الجسم (6-8 أكواب يومياً).',
      'رحلة الطعام في الجهاز الهضمي (The Digestive System Journey):',
      '  - الفم والأسنان (Mouth & Teeth): تقطيع ومضغ الطعام وخلطه باللعاب (Saliva) لتفكيك النشويات.',
      '  - المريء (Esophagus): أنبوب عضلي ينقل الطعام المبتلع من الفم إلى المعدة بحركات دودية.',
      '  - المعدة (Stomach): كيس عضلي قوي يخلط الطعام بالعصارات الهاضمة والأحماض ويحوله إلى سائل كثيف (Chyme).',
      '  - الأمعاء الدقيقة (Small Intestine): هضم كامل وامتصاص معظم العناصر الغذائية (Nutrients) ونقلها إلى الدم.',
      '  - الأمعاء الغليظة (Large Intestine): امتصاص الماء من بقايا الطعام وتكوين الفضلات الصلبة للتخلص منها.'
    ],
    keyConceptsEn: [
      'Core Life Skills: Communication, Critical Thinking, Self-Management, Collaboration, Problem Solving, Empathy, and Decision Making.',
      'Nutritional Food Groups: Carbohydrates (energy), Proteins (muscle building & repair), Healthy Fats, Vitamins & Minerals (immunity & vitality), and Water.',
      'Digestive System Pathway: Mouth (mechanical chew & saliva) ➔ Esophagus (muscular tube) ➔ Stomach (acid & churning) ➔ Small Intestine (nutrient absorption into bloodstream) ➔ Large Intestine (water reabsorption & waste elimination).'
    ],

    conceptMapAr: [
      'مهارات الحياة (التواصل، التفكير، إدارة الذات) ➔ التغذية الصحية المتوازنة ➔ الجهاز الهضمي (الفم، المريء، المعدة، الأمعاء الدقيقة، الأمعاء الغليظة) ➔ طاقة ونمو الجسم'
    ],
    conceptMapEn: [
      'Life Skills (Communication, Critical Thinking, Self-Management) ➔ Balanced Diet ➔ Digestive System (Mouth, Esophagus, Stomach, Small & Large Intestines) ➔ Cellular Energy & Growth'
    ],

    learningOutcomesAr: [
      'أن يطبق التلميذ مهارات الحياة الأساسية (التواصل، التفكير النقدي، والتعاون) في مواقف الحياة اليومية.',
      'أن يصنف الأطعمة المختلفة إلى مجموعاتها الغذائية (بروتينات، كربوهيدرات، فيتامينات، دهون صحية).',
      'أن يشرح مسار رحلة الطعام وأدوار أعضاء الجهاز الهضمي (الفم، المريء، المعدة، الأمعاء الدقيقة، الأمعاء الغليظة).',
      'أن يصمم طبقاً غذائياً صحياً متكاملاً (My Healthy Plate) للمحافظة على طاقة ونمو الجسم.'
    ],
    learningOutcomesEn: [
      'Apply essential Life Skills (Communication, Critical Thinking, Self-Management, Collaboration) in everyday situations.',
      'Categorize various food items into correct nutritional groups (Carbs, Proteins, Vitamins/Minerals, Healthy Fats).',
      'Trace the path of food digestion across the mouth, esophagus, stomach, small intestine, and large intestine.',
      'Construct a balanced healthy meal plate supporting body growth and long-lasting energy.'
    ],

    vocabulary: [
      {
        termAr: 'مهارات الحياة',
        termEn: 'Life Skills',
        definitionAr: 'سلوكيات وقدرات إيجابية تمكن الإنسان من التعامل بكفاءة مع تحديات الحياة اليومية وتطوير شخصيته.'
      },
      {
        termAr: 'الجهاز الهضمي',
        termEn: 'Digestive System',
        definitionAr: 'جهاز حيوي مسؤول عن تفتيت الطعام إلى جزيئات غذائية صغيرة يمتصها الدم لتوليد الطاقة وبناء الخلايا.'
      },
      {
        termAr: 'العناصر الغذائية',
        termEn: 'Nutrients',
        definitionAr: 'مواد يحصل عليها الجسم من الطعام كالبروتينات والفيتامينات والكربوهيدرات والمعادن اللازمة للنمو والحياة.'
      },
      {
        termAr: 'الأمعاء الدقيقة',
        termEn: 'Small Intestine',
        definitionAr: 'أنبوب طويل ملتف في البطن يكتمل فيه هضم الطعام ويتم عبر جدرانه امتصاص العناصر الغذائية ونقلها للدم.'
      },
      {
        termAr: 'وجبة متوازنة',
        termEn: 'Balanced Meal',
        definitionAr: 'وجبة طعام تحتوي على نسب صحية مناسبة من جميع المجموعات الغذائية الرئيسية والماء.'
      }
    ],

    warmupHookAr: 'مرحباً بباحثي العلوم الأذكياء في الصف الثالث الابتدائي! 🔬 هل تساءلت يوماً ماذا يحدث للتفاحة اللذيذة أو ساندوتش الجبن بعد أن تبتلعه؟ وكيف تحول أجسامنا الطعام إلى طاقة خارقة تجعلنا نركض ونفكر ونبتكر؟ وما هي المهارات السبع التي تجعلك بطلاً واثقاً في حياتك؟ هيا نكتشف عالم مهارات الحياة وأسرار الجهاز الهضمي!',
    warmupHookEn: 'Welcome 3rd Grade Science Explorers! 🔬 Have you ever wondered what happens to an apple or meal once you swallow it? How does your body break it down into clean fuel to power your brain and muscles? And what 7 Life Skills make you an empowered champion? Let us dive into Life Skills and the Amazing Digestive Journey!',

    mainContentAr: `
### 1. مهارات الحياة الأساسية (Core Life Skills in Edu 2.0)
في نظام التعليم الجديد (Edu 2.0)، يتعلم طالب الصف الثالث الابتدائي **7 مهارات حياتية أساسية** تجعله قادراً على النجاح والابتكار:

1. 🗣️ **التواصل (Communication):**
   - التعبير عن الأفكار بوضوح، استخدام الكلمات المهذبة ولغة الجسد الإيجابية، وحسن الإنصات والاستماع لآراء الزملاء.
2. 🧠 **التفكير النقدي (Critical Thinking):**
   - عدم تصديق كل ما نسمعه دون دليل، وتحليل الحقائق وطرح أسئلة ذكية: *"لماذا؟"* و *"كيف حدث هذا؟"*.
3. ⏰ **إدارة الذات (Self-Management):**
   - وضع أهداف واضحة، تنظيم الوقت بين الدراسة واللعب والرياضة، والالتزام بالعادات الصحية.
4. 🤝 **التعاون (Collaboration):**
   - العمل ضمن فريق بروح التقدير والمشاركة الإيجابية لتحقيق هدف موحد.
5. 🧩 **حل المشكلات (Problem Solving):**
   - تقسيم المشكلة المعقدة إلى خطوات بسيطة وتجربة حلول مبتكرة.
6. 💖 **التعاطف (Empathy):**
   - الإحساس بمشاعر الآخرين، ومساندة الزميل عند الحزن أو المرض، وتقديم المساعدة لمن يحتاجها.
7. ⚖️ **اتخاذ القرار (Decision Making):**
   - مقارنة الخيارات المتاحة واختيار الخيار الأكثر فائدة ومسؤولية (مثل: اختيار تفاحة طازجة بدلاً من رقائق البطاطس المصنعة).

---

### 2. التغذية الصحية ومجموعات الغذاء (Balanced Nutrition & My Plate)

يحتاج جسمنا إلى نظام غذائي متكامل ومتنوع لتوفير الطاقة والنمو:

* 🍞 **الكربوهيدرات (Carbohydrates):**
  - **الوظيفة:** مصدر الطاقة الرئيسي والوقود المباشر للعضلات والمخ.
  - **الأمثلة:** الأرز، الخبز الأسمر، الشوفان، المكرونة، البطاطس.
* 🍗 **البروتينات (Proteins):**
  - **الوظيفة:** لبنات البناء الأساسية؛ تبني العضلات، وتساعد على نمو الجسم، وترمم الأنسجة والخلايا.
  - **الأمثلة:** البيض، الدواجن، الأسماك، الحليب، العدس، الفول.
* 🥑 **الدهون الصحية (Healthy Fats):**
  - **الوظيفة:** تمد الجسم بطاقة طويلة الأمد، وتساعد على امتصاص بعض الفيتامينات، وتحمي الأعضاء الحيوية.
  - **الأمثلة:** زيت الزيتون، الأفوكادو، المكسرات النيئة، بذور الكتان.
* 🥦 🍎 **الفيتامينات والمعادن (Vitamins & Minerals):**
  - **الوظيفة:** تعزيز مناعة الجسم ومقاومة الأمراض، وتقوية العظام والأسنان (الكالسيوم) والدم (الحديد).
  - **الأمثلة:** الخضراوات الورقية كالسبانخ والبروكلي، والفواكه الحمضية كالبرتقال والليمون والتفاح.
* 💧 **الماء النقي (Water):**
  - شرب **6 إلى 8 أكواب** يومياً ضروري لنقل الغذاء في الدم، وتبريد الجسم بالتعرق، وتنظيف الكلى.

---

### 3. رحلة الطعام عبر الجهاز الهضمي (The Digestive System)

الجهاز الهضمي شبكة أنبوبية مدهشة يبلغ طولها عدة أمتار، وتقوم بتحويل الطعام المعقد إلى عناصر غذائية بسيطة:

1. 👄 **الفم والأسنان (Mouth & Teeth):**
   - الأسنان تمضغ وتطحن الطعام (هضم ميكانيكي).
   - الغدد اللعابية تفرز **اللعاب (Saliva)** الذي يرطب الطعام ويحتوي على إنزيمات تبدأ في هضم النشويات.
2. 🥖 **المريء (Esophagus):**
   - أنبوب عضلي طويل يصل بين البلعوم والمعدة.
   - يدفع بلعة الطعام إلى الأسفل بحركات عضلية تموجية تسمى **الحركة الدودية (Peristalsis)**.
3. 🫘 **المعدة (Stomach):**
   - كيس عضلي قوي يفرز **أحماض المعدة والعصارات الهاضمة (Gastric Juices)**.
   - تعجن المعدة الطعام وتخلطه لساعات حتى يتحول إلى سائل شبه سائل كثيف يسمى **الكيموس (Chyme)**.
4. 🌀 **الأمعاء الدقيقة (Small Intestine):**
   - أنبوب طويل ورفيع يبلغ طوله حوالي 6 أمتار.
   - يكتمل فيه الهضم بمساعدة عصارات الكبد والبنكرياس، ويتم امتصاص معظم **العناصر الغذائية (Nutrients)** عبر جدرانها لتصل مباشرة إلى مجرى الدم.
5. 🧻 **الأمعاء الغليظة (Large Intestine):**
   - تمتص الماء والأملاح المعدنية من الفضلات غير المهضومة، وتكون الفضلات الصلبة (البراز) التي تطرد خارج الجسم عبر المستقيم وفتحة الشرج.

---

### 4. Interactive Diagram: The Digestive System & Life Skills
\`\`\`xml
<svg viewBox="0 0 720 250" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="250" fill="#0f172a" rx="16"/>
  
  <!-- Digestive System Pathway -->
  <g transform="translate(20, 20)">
    <rect width="330" height="210" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">مسار الجهاز الهضمي (Digestive Journey)</text>
    <text x="20" y="65" fill="#f8fafc" font-size="13">👄 <tspan fill="#38bdf8" font-weight="bold">1. الفم والأسنان:</tspan> مضغ + لعاب (Saliva)</text>
    <text x="20" y="100" fill="#f8fafc" font-size="13">🥖 <tspan fill="#38bdf8" font-weight="bold">2. المريء (Esophagus):</tspan> توصيل الطعام للمعدة</text>
    <text x="20" y="135" fill="#f8fafc" font-size="13">🫘 <tspan fill="#38bdf8" font-weight="bold">3. المعدة (Stomach):</tspan> عصارات حامضية وخفق</text>
    <text x="20" y="170" fill="#f8fafc" font-size="13">🌀 <tspan fill="#34d399" font-weight="bold">4. الأمعاء الدقيقة:</tspan> امتصاص الغذاء للدم</text>
    <text x="20" y="200" fill="#f8fafc" font-size="13">🧻 <tspan fill="#f59e0b" font-weight="bold">5. الأمعاء الغليظة:</tspan> امتصاص الماء والفضلات</text>
  </g>

  <!-- 7 Life Skills & Nutrition -->
  <g transform="translate(370, 20)">
    <rect width="330" height="210" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">مهارات الحياة الـ 7 والتغذية المتوازنة</text>
    <text x="20" y="65" fill="#f8fafc" font-size="12">🗣️ <tspan fill="#34d399" font-weight="bold">Communication:</tspan> التعبير والاستماع الإيجابي</text>
    <text x="20" y="95" fill="#f8fafc" font-size="12">🧠 <tspan fill="#34d399" font-weight="bold">Critical Thinking:</tspan> التفكير والتحليل الذكي</text>
    <text x="20" y="125" fill="#f8fafc" font-size="12">⏰ <tspan fill="#34d399" font-weight="bold">Self-Management:</tspan> تنظيم الوقت والخيارات</text>
    <text x="20" y="155" fill="#f8fafc" font-size="12">🤝 <tspan fill="#34d399" font-weight="bold">Collaboration & Empathy:</tspan> التعاون والتعاطف</text>
    <text x="20" y="185" fill="#fbbf24" font-size="12" font-weight="bold">🥗 الطبق الصحي: كربوهيدرات + بروتين + خضار + ماء</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Essential Life Skills (Edu 2.0 Framework)
- Communication: Expressing thoughts clearly and listening actively.
- Critical Thinking: Questioning facts and analyzing evidence before deciding.
- Self-Management: Time organization and establishing healthy physical habits.
- Collaboration & Empathy: Working cooperatively in teams and understanding others' feelings.
- Problem Solving & Decision Making: Evaluating choices to pick optimal, responsible solutions.

### 2. Balanced Nutrition & Food Groups
- Carbohydrates: Primary fast fuel source for physical and mental activities.
- Proteins: Building blocks for muscle growth, tissue repair, and immunity.
- Healthy Fats: Sustained energy and vital organ cushioning.
- Vitamins & Minerals: Immune defense, bone strengthening (Calcium), and blood vitality (Iron).
- Water: Hydration (6-8 cups daily) vital for nutrient circulation and body cooling.

### 3. Digestive System Journey
- Mouth: Chewing teeth and saliva enzymes initiating carbohydrate breakdown.
- Esophagus: Peristaltic muscular tube transporting swallowed food bolus.
- Stomach: Muscular acid pouch churning food into dense liquid chyme.
- Small Intestine: Final chemical digestion and absorption of nutrients into bloodstream.
- Large Intestine: Water and salt recovery, packing solid unabsorbed waste.
`,

    workedExamples: [
      {
        id: 'ex-p3-sci1-1',
        titleAr: 'مثال 1: تحليل وجبة غداء صحية وتصنيف عناصرها',
        titleEn: 'Example 1: Analyzing a Healthy Lunch Meal',
        problemAr: 'تناول عمر وجبة غداء تتكون من: (أرز أسمر، قطعة صدر دجاج مشوي، طبق سلطة خضراء مع زيت زيتون، وكوب ماء). صنف كل مكون إلى مجموعته الغذائية واذكر فائدته للجسم.',
        problemEn: 'Omar ate a lunch composed of brown rice, grilled chicken breast, green salad with olive oil, and water. Categorize each item and explain its body benefit.',
        stepByStepSolutionAr: [
          'الخطوة 1: الأرز الأسمر = (كربوهيدرات معقدة) يمد الجسم بالطاقة والنشاط لممارسة الأنشطة.',
          'الخطوة 2: الدجاج المشوي = (بروتينات) يبني العضلات ويساعد على نمو الجسم وقوته.',
          'الخطوة 3: السلطة الخضراء وزيت الزيتون = (فيتامينات ومعادن ودهون صحية) تقوي جهاز المناعة وتحمي الخلايا.',
          'الخطوة 4: كوب الماء = (ترطيب) يساعد على نقل العناصر الغذائية وتنظيم حرارة الجسم.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Brown rice = Carbohydrates providing energy for physical activity.',
          'Step 2: Grilled chicken = Protein building muscles and aiding growth.',
          'Step 3: Green salad & olive oil = Vitamins, minerals, and healthy fats boosting immunity.',
          'Step 4: Water = Hydration facilitating nutrient transport.'
        ],
        finalAnswerAr: 'وجبة متوازنة تماماً تحتوي على كربوهيدرات للطاقة، بروتين للنمو، فيتامينات للمناعة، وماء للترطيب.',
        finalAnswerEn: 'A perfectly balanced meal with carbs for energy, protein for growth, vitamins for immunity, and water.'
      },
      {
        id: 'ex-p3-sci1-2',
        titleAr: 'مثال 2: تحديد محطة امتصاص الغذاء في الجهاز الهضمي',
        titleEn: 'Example 2: Locating Nutrient Absorption in Digestion',
        problemAr: 'أين يتم امتصاص معظم العناصر الغذائية (Nutrients) ونقلها إلى مجرى الدم لتغذية خلايا الجسم؟',
        problemEn: 'Where does the primary absorption of nutrients into the bloodstream take place in the human digestive system?',
        stepByStepSolutionAr: [
          'الخطوة 1: الفم والمعدة يقومان بتفتيت الطعام وهضمه ميكانيكياً وكيميائياً.',
          'الخطوة 2: الأمعاء الدقيقة (Small Intestine) يصل إليها الطعام المهضوم، وتحتوي جدرانها على خملات دقيقة تمتص الفيتامينات والسكريات والبروتينات وتنقلها مباشرة إلى الدم.',
          'الخطوة 3: الأمعاء الغليظة تمتص الماء فقط من الفضلات.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Mouth and stomach digest food mechanically and chemically.',
          'Step 2: The Small Intestine completes digestion and its walls absorb nutrients directly into the blood.',
          'Step 3: The Large Intestine recovers water only.'
        ],
        finalAnswerAr: 'في الأمعاء الدقيقة (Small Intestine).',
        finalAnswerEn: 'In the Small Intestine.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-sci1-1',
        problemAr: 'رتب أعضاء الجهاز الهضمي حسب مسار الطعام من البداية حتى النهاية.',
        problemEn: 'Sequence the digestive organs in order from start to finish.',
        solutionStepsAr: [
          '1. الفم (Mouth): مضغ الطعام وخلطه باللعاب.',
          '2. المريء (Esophagus): تمرير الطعام بحركات عضلية.',
          '3. المعدة (Stomach): خلط الطعام بالعصارات والأحماض.',
          '4. الأمعاء الدقيقة (Small Intestine): امتصاص العناصر الغذائية للدم.',
          '5. الأمعاء الغليظة (Large Intestine): امتصاص الماء وتكوين الفضلات.'
        ],
        solutionStepsEn: [
          '1. Mouth (Chewing & Saliva).',
          '2. Esophagus (Transportation).',
          '3. Stomach (Acid & Churning).',
          '4. Small Intestine (Nutrient Absorption).',
          '5. Large Intestine (Water absorption & Waste).'
        ],
        finalAnswerAr: 'الفم ➔ المريء ➔ المعدة ➔ الأمعاء الدقيقة ➔ الأمعاء الغليظة.',
        finalAnswerEn: 'Mouth ➔ Esophagus ➔ Stomach ➔ Small Intestine ➔ Large Intestine.'
      },
      {
        id: 'tb-p3-sci1-2',
        problemAr: 'ما هي مهارة الحياة التي تساعدنا على تنظيم أوقاتنا ووضع خطة يومية للمذاكرة والرياضة؟',
        problemEn: 'Which Life Skill enables us to organize our daily schedule between studying, exercise, and rest?',
        solutionStepsAr: [
          'مهارة إدارة الذات (Self-Management) هي القدرة على التحكم في الوقت والعادات وتحديد الأهداف وتحقيقها بنجاح.'
        ],
        solutionStepsEn: [
          'Self-Management is the skill of organizing time, personal habits, and goal attainment.'
        ],
        finalAnswerAr: 'مهارة إدارة الذات (Self-Management).',
        finalAnswerEn: 'Self-Management.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-sci1-1',
        questionAr: 'ما الوظيفة الرئيسية للبروتينات (Proteins) في طعامنا اليومي؟',
        questionEn: 'What is the primary function of Proteins in our daily diet?',
        optionsAr: [
          'بناء العضلات وإصلاح الأنسجة التالفة والنمو',
          'إمداد الجسم بالطاقة السريعة فقط',
          'تلوين الجلد والشعر فقط',
          'تبريد درجة حرارة الجسم'
        ],
        optionsEn: [
          'Building muscles, repairing damaged tissues, and supporting growth',
          'Providing quick energy only',
          'Coloring skin and hair only',
          'Cooling body temperature'
        ],
        correctIndex: 0,
        rationaleAr: 'البروتينات (مثل البيض واللحوم والأسماك والبقوليات) هي أحجار البناء الأساسية لنمو العضلات وترميم الخلايا.',
        rationaleEn: 'Proteins are the essential building blocks for muscle growth and cellular repair.'
      },
      {
        id: 'fa-p3-sci1-2',
        questionAr: 'ما العضو الذي يفرز اللعاب (Saliva) ويقوم بالمضغ الأولي للطعام؟',
        questionEn: 'Which organ secretes saliva and performs initial mechanical chewing?',
        optionsAr: ['الفم (Mouth)', 'المعدة (Stomach)', 'المريء (Esophagus)', 'الأمعاء الغليظة (Large Intestine)'],
        optionsEn: ['Mouth', 'Stomach', 'Esophagus', 'Large Intestine'],
        correctIndex: 0,
        rationaleAr: 'تبدأ عملية الهضم في الفم حيث تقطع الأسنان الطعام ويبلله اللعاب لتفكيك النشويات.',
        rationaleEn: 'Digestion begins in the mouth with chewing and salivary enzyme action.'
      },
      {
        id: 'fa-p3-sci1-3',
        questionAr: 'أي من المهارات التالية تعني فهم ومشاركة مشاعر الآخرين ومساعدتهم عند الحاجة؟',
        questionEn: 'Which life skill means understanding and sharing the feelings of others and helping them?',
        optionsAr: ['التعاطف (Empathy)', 'التفكير السريع', 'العزلة', 'التنافس الأناني'],
        optionsEn: ['Empathy', 'Speed thinking', 'Isolation', 'Selfish competition'],
        correctIndex: 0,
        rationaleAr: 'التعاطف (Empathy) هو مهارة اجتماعية إنسانية تقوم على الإحساس بالآخرين ومساندتهم ومشاركتهم مشاعرهم.',
        rationaleEn: 'Empathy is understanding and caring about others\' feelings and supporting them.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة مهارات الحياة الأساسية الـ 7، ومجموعات الغذاء المتوازن (كربوهيدرات، بروتينات، دهون، فيتامينات ومعادن، وماء)، ورحلة الطعام عبر أعضاء الجهاز الهضمي الخمسة من الفم إلى الأمعاء.',
    summaryEn: 'We mastered the 7 Core Life Skills, explored balanced dietary groups, and tracked the food journey across the 5 organs of the digestive system.',

    assessment: {
      id: 'quiz-p3-sci-1',
      lectureId: 'p3-sci-1',
      titleAr: 'اختبار المحاضرة 1: مهارات الحياة، التغذية والجهاز الهضمي',
      titleEn: 'Assessment 1: Life Skills, Nutrition & Digestive System',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-sci1-1',
          textAr: 'ما هو الأنبوب العضلي الذي ينقل الطعام من الفم إلى المعدة؟',
          textEn: 'What is the muscular tube that transports swallowed food from the mouth down to the stomach?',
          optionsAr: ['المريء (Esophagus)', 'القصبة الهوائية', 'الأمعاء الدقيقة', 'العمود الفقري'],
          optionsEn: ['Esophagus', 'Trachea', 'Small Intestine', 'Spine'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة المريء',
          conceptTestedEn: 'Esophagus Function',
          explanationAr: 'المريء هو أنبوب عضلي يربط الفم بالمعدة وينقل الطعام بواسطة الحركة الدودية.',
          explanationEn: 'The esophagus is the muscular tube connecting the mouth to the stomach.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci1-2',
          textAr: 'أي المجموعات الغذائية تعتبر مصدر الطاقة الأساسي والسريع للجسم؟',
          textEn: 'Which food group is the primary and fastest source of energy for the body?',
          optionsAr: ['الكربوهيدرات (Carbohydrates)', 'البروتينات فقط', 'الفيتامينات فقط', 'الأملاح فقط'],
          optionsEn: ['Carbohydrates', 'Proteins only', 'Vitamins only', 'Salts only'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الكربوهيدرات',
          conceptTestedEn: 'Carbohydrates Function',
          explanationAr: 'الكربوهيدرات (مثل الأرز والخبز والشوفان) تمد الجسم بالطاقة اللازمة للحركة والتفكير.',
          explanationEn: 'Carbohydrates are the main energy providers for muscular and brain function.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci1-3',
          textAr: 'ما الوظيفة الرئيسية للأمعاء الغليظة (Large Intestine)؟',
          textEn: 'What is the main function of the Large Intestine?',
          optionsAr: [
            'امتصاص الماء والأملاح المعدنية من بقايا الطعام وتكوين الفضلات الصلبة',
            'مضغ الطعام بالأسنان',
            'إفراز اللعاب في الفم',
            'ضخ الدم إلى الرئتين'
          ],
          optionsEn: [
            'Absorbing water and mineral salts from leftover waste and forming solid feces',
            'Chewing food with teeth',
            'Secreting saliva in the mouth',
            'Pumping blood to the lungs'
          ],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الأمعاء الغليظة',
          conceptTestedEn: 'Large Intestine Function',
          explanationAr: 'الأمعاء الغليظة تعيد امتصاص الماء من الفضلات لتجنب الجفاف وتجهز الفضلات للخروج من الجسم.',
          explanationEn: 'The large intestine reabsorbs water and mineral salts from unabsorbed food remnants.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-sci1-4',
          textAr: 'أي من مهارات الحياة التالية تعني التفكير العميق وتحليل المعلومات قبل تصديقها أو اتخاذ قرار؟',
          textEn: 'Which life skill involves thinking deeply and analyzing facts before accepting them or deciding?',
          optionsAr: ['التفكير النقدي (Critical Thinking)', 'التحدث بصوت مرتفع', 'النوم لساعات طويلة', 'التقليد الأعمى'],
          optionsEn: ['Critical Thinking', 'Speaking loudly', 'Sleeping long hours', 'Blind imitation'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم التفكير النقدي',
          conceptTestedEn: 'Critical Thinking Definition',
          explanationAr: 'التفكير النقدي يمكننا من فحص الأدلة وتقييم الخيارات بدقة لاتخاذ قرارات منطقية وسليمة.',
          explanationEn: 'Critical thinking allows objective analysis and evidence evaluation.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-sci1-5',
          textAr: 'كم كوباً من الماء النقي يحتاج طفل المرحلة الابتدائية لشربه يومياً للمحافظة على صحته؟',
          textEn: 'How many glasses of fresh water should an elementary school student drink daily for optimal health?',
          optionsAr: ['6 إلى 8 أكواب', 'كوب واحد فقط', '20 كوباً', 'لا يحتاج إلى شرب الماء'],
          optionsEn: ['6 to 8 glasses', '1 glass only', '20 glasses', 'No water needed'],
          correctIndex: 0,
          conceptTestedAr: 'أهمية الماء والترطيب اليومي',
          conceptTestedEn: 'Daily Water Hydration',
          explanationAr: 'يحتاج الجسم من 6 إلى 8 أكواب ماء يومياً للحفاظ على رطوبة الخلايا ونشاط الدورة الدموية.',
          explanationEn: 'Drinking 6-8 glasses of water maintains cell hydration and supports metabolism.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: GETTING FIT, CARDIOVASCULAR SYSTEM, HEART RATE & BODY MECHANICS ──
  {
    id: 'p3-sci-2',
    order: 2,
    titleAr: 'المحاضرة 2: اللياقة البدنية ومعدل ضربات القلب والجهاز الدوري (Getting Fit & Heart Rate)',
    titleEn: 'Lecture 2: Getting Fit, Heart Rate & Cardiovascular Response (Discover Primary 3)',
    subtitleAr: 'استكشاف استجابة القلب والأوعية الدموية للتمارين الرياضية، قياس النبض، وفوائد النوم واللياقة البدنية',
    subtitleEn: 'Investigate cardiovascular fitness, measure resting vs active heart rate, and understand muscles and sleep benefits.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 1: Who Am I?)',
    unitTitleAr: 'Theme 1: Who Am I? — Chapter 3: Getting Fit & Cardiovascular Health',
    unitTitleEn: 'Theme 1: Who Am I? — Chapter 3: Getting Fit & Cardiovascular Health',
    lessonNumberAr: 'الدرس 2: اللياقة البدنية، معدل ضربات القلب وصحة الجسم',
    lessonNumberEn: 'Lesson 2: Physical Fitness, Heart Rate & Cardiovascular Health',

    keyConceptsAr: [
      'القلب كمضخة حيوية لا تتوقف (The Heart as a Muscular Pump):',
      '  - القلب عضو عضلي مجوف بحجم قبضة اليد يقع في وسط الصدر مائلاً قليلاً نحو اليسار.',
      '  - ينبض القلب باستمرار ليضخ الدم المحمل بالأكسجين ($O_2$) والمغذيات إلى جميع خلايا الجسم عبر الشرايين (Arteries)، ويعود الدم المحمل بثاني أكسيد الكربون عبر الأوردة (Veins).',
      'معدل ضربات القلب والنبض (Heart Rate & Pulse):',
      '  - النبض (Pulse): هو الموجة الإيقاعية لتدفق الدم التي يمكن الشعور بها عند وضع إصبعين على الشريان في المعصم (Wrist) أو الرقبة (Neck).',
      '  - معدل ضربات القلب أثناء الراحة (Resting Heart Rate): يتراوح للأطفال بين 70 إلى 100 نبضة في الدقيقة (bpm).',
      '  - معدل ضربات القلب أثناء المجهود والرياضة (Active Heart Rate): يزداد ليصل إلى 130-160 نبضة في الدقيقة لأن العضلات تحتاج إلى مزيد من الأكسجين والطاقة.',
      'استجابة أجهزة الجسم للتمارين والنشاط الرياضي:',
      '  - يزداد معدل التنفس (Breathing Rate) لإدخال مزيد من الأكسجين.',
      '  - يتسع مجرى الأوعية الدموية ويزداد التعرق (Sweating) لتبريد الجسم وتنظيم درجة حرارته.',
      '  - تقوى العضلات وتزداد مرونة المفاصل وكثافة العظام.',
      'أهمية النوم العميق والراحة النفسية (Sleep & Recovery):',
      '  - يحتاج طالب الصف الثالث إلى **9 إلى 11 ساعة** من النوم المتواصل ليلاً.',
      '  - أثناء النوم: يفرز الجسم هرمون النمو (Growth Hormone)، ويتم إصلاح الأنسجة والعضلات، وتثبيت المعلومات والذاكرة في الدماغ.'
    ],
    keyConceptsEn: [
      'Heart Mechanics: Fist-sized muscular pump circulating oxygenated blood through arteries and returning deoxygenated blood through veins.',
      'Pulse & Heart Rate: Resting heart rate (70-100 bpm in kids) versus elevated active heart rate during exercise to satisfy muscle oxygen demands.',
      'Exercise Physiology: Faster breathing rate, sweating for thermoregulation, improved muscle strength and bone density.',
      'Sleep & Recovery: 9-11 hours of nightly restful sleep essential for growth hormone release, muscle repair, and memory consolidation.'
    ],

    conceptMapAr: [
      'ممارسة التمارين الرياضية ➔ حاجة العضلات للأكسجين ➔ زيادة ضربات القلب وسرعة التنفس ➔ لياقة وقوة العضلات ➔ النوم والتعافي'
    ],
    conceptMapEn: [
      'Physical Exercise ➔ Muscle Oxygen Demand ➔ Elevated Heart Rate & Breathing ➔ Cardiovascular Fitness ➔ Sleep & Cellular Recovery'
    ],

    learningOutcomesAr: [
      'أن يشرح التلميذ كيف يعمل القلب كمضخة لتوزيع الدم والأكسجين في الجسم.',
      'أن يقيس التلميذ نبضه بطريقة عملية صحيحة (في المعصم أو الرقبة) أثناء الراحة وبعد التمارين.',
      'أن يفسر سبب زيادة معدل ضربات القلب والتنفس عند الجري والقفز.',
      'أن يوضح أهمية النوم الكافي (9-11 ساعة) في بناء خلايا الجسم وتقوية الذاكرة.'
    ],
    learningOutcomesEn: [
      'Describe the function of the heart as an active continuous muscular pump.',
      'Locate pulse points (wrist/neck) and calculate resting and active heart rates.',
      'Explain physiological responses to exercise (increased heart rate, breathing, sweating).',
      'Recognize the vital role of 9-11 hours of nightly sleep for growth and tissue repair.'
    ],

    vocabulary: [
      {
        termAr: 'معدل ضربات القلب',
        termEn: 'Heart Rate',
        definitionAr: 'عدد المرات التي ينبض فيها القلب خلال دقيقة واحدة (يقاس بـ نبضة/دقيقة bpm).'
      },
      {
        termAr: 'النبض',
        termEn: 'Pulse',
        definitionAr: 'الموجة الإيقاعية لتدفق الدم التي نشعر بها عند الضغط الخفيف على الشرايين في المعصم أو الرقبة.'
      },
      {
        termAr: 'الشرايين والأوردة',
        termEn: 'Arteries & Veins',
        definitionAr: 'أوعية دموية؛ الشرايين تنقل الدم المحمل بالأكسجين من القلب للجسم، والأوردة تعيد الدم للقلب.'
      },
      {
        termAr: 'اللياقة القلبية',
        termEn: 'Cardiovascular Fitness',
        definitionAr: 'قدرة القلب والرئتين والأوعية الدموية على تزويد العضلات بالأكسجين بكفاءة أثناء النشاط المستمر.'
      }
    ],

    warmupHookAr: 'ضع يدك بلطف على يسار صدرك.. هل تشعر بالنبض المنتظم: "دوم.. دوم.. دوم"؟ 💓 هذا بطلك الداخلي: القلب! يضخ آلاف اللترات من الدم كل يوم دون أن يتوقف للحظة! لماذا ينبض قلبك بسرعة جنونية عندما تجري في الفناء؟ وكيف يقوي النوم والرياضة عضلاتك وعقلك؟ هيا نقيس نبضنا ونكتشف أسرار اللياقة البدنية!',
    warmupHookEn: 'Place your hand gently over your chest.. Can you feel the rhythmic beat: "Thump-thump.. thump-thump"? 💓 That is your inner superhero—the Heart! Why does it beat twice as fast when you sprint? How does sleep recharge your brain and muscles? Let us measure our pulse and unlock the science of fitness!',

    mainContentAr: `
### 1. كيف يعمل القلب والجهاز الدوري؟ (Heart & Circulatory System)
- **القلب (Heart):** عضلة مدهشة بحجم قبضة اليد تعمل ليل نهار كمضخة مركزية.
- يتكون الجهاز الدوري من:
  1. **القلب:** يضخ الدم بقوة.
  2. **الشرايين (Arteries):** أنابيب مرنة تنقل الدم المحمل بالأكسجين ($O_2$) النقي والمواد الغذائية من القلب إلى جميع خلايا الجسم.
  3. **الأوردة (Veins):** تعيد الدم الذي استهلكت منه الخلايا الأكسجين وحملت فيه ثاني أكسيد الكربون ($CO_2$) إلى القلب والرئتين لإعادة تنقيته.

---

### 2. قياس النبض ومعدل ضربات القلب (Measuring Your Pulse)
- **كيف تقيس نبضك بنفسك؟**
  1. ضع إصبعي (السبابة والوسطى) برفق على المعصم تحت قاعدة الإبهام مباشرة (أو على جانب الرقبة تحت الفك).
  2. اضغط برفق حتى تشعر بالنبضات الإيقاعية.
  3. احسب عدد النبضات خلال **15 ثانية**، ثم اضرب الناتج في **4** لتحصل على معدل النبض في الدقيقة الكاملة (Beats Per Minute - bpm).

* 📊 **المقارنة بين حالتي الراحة والمجهود:**
| الحالة | معدل ضربات القلب للأطفال | ماذا يحدث في الجسم؟ |
| :--- | :--- | :--- |
| **الراحة والاسترخاء (Resting)** | 70 – 100 نبضة / دقيقة | استهلاك طبيعي للأكسجين وهدوء الأعضاء |
| **أثناء ممارسة الرياضة (Active)** | 130 – 160 نبضة / دقيقة | العضلات تطلب أكسجين وطاقة إضافية، فيضخ القلب بسرعة مضاعفة |

---

### 3. استجابة الجسم للتمارين الرياضية (Body Response to Exercise)
عندما تجري أو تلعب كرة القدم أو تقفز بالحبل، تتفاعل أجهزة جسمك فوراً:
1. **تسارع التنفس:** الرئتان تتنفسان بسرعة أكبر لامتصاص كميات هائلة من الأكسجين وطرد ثاني أكسيد الكربون.
2. **زيادة تدفق الدم:** تتسع الأوعية الدموية في العضلات لتزويدها بالغذاء.
3. **إفراز العرق (Sweating):** يفرز الجلد قطرات العرق لتبخيرها وتبريد حرارة الجسم وحمايته من السخونة الزائدة.
4. **بناء القوة والمرونة:** تقوى عضلة القلب وتزداد مرونة المفاصل وكثافة العظام.

---

### 4. سحر النوم والتعافي (Sleep & Recovery for 3rd Graders)
- يحتاج الأطفال في سن (8-9 سنوات) إلى **9 إلى 11 ساعة** من النوم الجيد كل ليلة.
- **ماذا يحدث لأجسامنا أثناء النوم؟**
  - يفرز الجسم **هرمون النمو (Growth Hormone)** الذي يساعد على زيادة الطول وبناء العظام.
  - تقوم خلايا الجسم بإصلاح العضلات والأنسجة المرهقة من أنشطة اليوم.
  - يقوم الدماغ بترتيب الذكريات والمعلومات والدروس التي تعلمتها نهاراً وتخزينها في الذاكرة طويلة المدى.

---

### 5. Interactive Diagram: Cardiovascular System & Pulse
\`\`\`xml
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="240" fill="#0f172a" rx="16"/>
  
  <!-- Heart Rate Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#ec4899" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#f472b6" font-size="15" font-weight="bold" text-anchor="middle">معدل نبضات القلب (Heart Rate)</text>
    <text x="20" y="65" fill="#f8fafc" font-size="13">💓 <tspan fill="#f472b6" font-weight="bold">النبض في الراحة (Resting):</tspan> 70 - 100 bpm</text>
    <text x="20" y="100" fill="#f8fafc" font-size="13">🏃 <tspan fill="#fbbf24" font-weight="bold">النبض أثناء الرياضة (Active):</tspan> 130 - 160 bpm</text>
    <text x="20" y="135" fill="#f8fafc" font-size="13">🩺 الشرايين (Arteries): دم غني بالأكسجين</text>
    <text x="20" y="170" fill="#f8fafc" font-size="13">🩸 الأوردة (Veins): إعادة الدم المحمل بـ CO2</text>
  </g>

  <!-- Exercise & Sleep Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">فوائد الرياضة والنوم (Fit & Recovery)</text>
    <text x="20" y="65" fill="#f8fafc" font-size="13">🫁 تسارع التنفس: إمداد العضلات بالأكسجين</text>
    <text x="20" y="100" fill="#f8fafc" font-size="13">💦 التعرق: تنظيم حرارة الجسم وتبريده</text>
    <text x="20" y="135" fill="#f8fafc" font-size="13">🌙 النوم الصحي: 9 - 11 ساعة كل ليلة</text>
    <text x="20" y="170" fill="#34d399" font-size="13" font-weight="bold">✨ هرمون النمو وإصلاح العضلات وتثبيت الذاكرة</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. The Heart and Circulatory Mechanics
- The Heart: A muscular pump delivering oxygenated blood via arteries and retrieving deoxygenated blood via veins.
- Capillaries link arteries and veins, facilitating gas and nutrient exchange with tissues.

### 2. Measuring Pulse and Heart Rate
- Pulse measurement: Count wrist or carotid artery beats for 15 seconds, then multiply by 4 to get beats per minute (bpm).
- Resting Heart Rate: 70–100 bpm in active elementary kids.
- Active Heart Rate during Exercise: Rises to 130–160+ bpm to fulfill muscular oxygen demands.

### 3. Body Response to Physical Exercise
- Accelerated breathing rate to capture more oxygen.
- Sweating for skin thermoregulation and cooling.
- Strengthening of heart muscle, joint flexibility, and bone mineralization.

### 4. Sleep & Biological Recovery
- 9–11 hours of continuous nightly sleep are essential for Grade 3 students.
- Secretion of Growth Hormone, muscle tissue restoration, and neural memory consolidation.
`,

    workedExamples: [
      {
        id: 'ex-p3-sci2-1',
        titleAr: 'مثال 1: حساب معدل ضربات القلب من قياس 15 ثانية',
        titleEn: 'Example 1: Calculating Heart Rate from 15-Second Pulse',
        problemAr: 'وضع سيف إصبعيه على معصمه وقاس نبضه أثناء جلوسه في الفصل فكان 22 نبضة في 15 ثانية. ما هو معدل ضربات قلبه في الدقيقة الواحدة؟ وهل يعتبر في النطاق الطبيعي أثناء الراحة؟',
        problemEn: 'Saif measured 22 pulse beats in 15 seconds while seated in class. What is his heart rate in beats per minute (bpm)? Is this normal at rest?',
        stepByStepSolutionAr: [
          'الخطوة 1: الدقيقة الواحدة تحتوي على 60 ثانية (أي 4 فترات من 15 ثانية).',
          'الخطوة 2: معدل ضربات القلب في الدقيقة = $22 \\times 4 = 88$ نبضة في الدقيقة (bpm).',
          'الخطوة 3: النطاق الطبيعي للأطفال أثناء الراحة هو بين (70 إلى 100 bpm).',
          'الاستنتاج: 88 bpm يقع تماماً داخل النطاق الطبيعي الصحي.'
        ],
        stepByStepSolutionEn: [
          'Step 1: One minute equals 60 seconds (4 intervals of 15 seconds).',
          'Step 2: Heart rate = $22 \\times 4 = 88$ beats per minute (bpm).',
          'Step 3: Normal resting range for children is 70–100 bpm.',
          'Conclusion: 88 bpm is perfectly healthy and normal.'
        ],
        finalAnswerAr: 'معدل ضربات قلبه = 88 نبضة/دقيقة، وهو في النطاق الطبيعي الممتاز أثناء الراحة.',
        finalAnswerEn: 'Heart rate = 88 bpm, which is well within normal resting range.'
      },
      {
        id: 'ex-p3-sci2-2',
        titleAr: 'مثال 2: تفسير سرعة التنفس والتعرق أثناء الجري',
        titleEn: 'Example 2: Explaining Sweating and Rapid Breathing in Sprinting',
        problemAr: 'بعد أن ركضت سلمى لمدة 5 دقائق في حصة التربية الرياضية، لاحظت تسارع أنفاسها وتصبب قطرات العرق على جبينها. فسر علمياً ماذا حدث في جسمها.',
        problemEn: 'After sprinting for 5 minutes in P.E. class, Salma noticed rapid breathing and sweating. Provide the scientific biological explanation.',
        stepByStepSolutionAr: [
          'الخطوة 1: العضلات أثناء الجري تستهلك طاقة وأكسجين بمعدل سريع، فتتنفس الرئتان بسرعة لإدخال مزيد من الأكسجين وطرد ثاني أكسيد الكربون.',
          'الخطوة 2: نتيجة احتراق الطاقة في العضلات ترتفع درجة حرارة الجسم.',
          'الخطوة 3: يفرز الجلد العرق ليتبخر ويمتص الحرارة الزائدة لتبريد الجسم وحمايته من الإجهاد الحراري.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Muscles consume oxygen rapidly during sprinting, so lungs breathe faster to supply O2 and expel CO2.',
          'Step 2: Energy production generates internal heat.',
          'Step 3: Sweat glands release sweat that evaporates to cool the skin and maintain safe internal body temperature.'
        ],
        finalAnswerAr: 'تسارع التنفس لتزويد العضلات بالأكسجين، والتعرق لتبريد حرارة الجسم الزائدة.',
        finalAnswerEn: 'Rapid breathing supplies extra oxygen to muscles, while sweating cools down elevated body temperature.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-sci2-1',
        problemAr: 'قارن بين الشرايين (Arteries) والأوردة (Veins) من حيث اتجاه الدم ونوع الغاز المحمل فيه.',
        problemEn: 'Compare Arteries and Veins regarding blood direction and carried respiratory gas.',
        solutionStepsAr: [
          '1. الشرايين (Arteries): تنقل الدم من القلب إلى خلايا الجسم، ويكون محملاً بغاز الأكسجين ($O_2$) والمغذيات.',
          '2. الأوردة (Veins): تعيد الدم من خلايا الجسم إلى القلب، ويكون محملاً بغاز ثاني أكسيد الكربون ($CO_2$) والفضلات.'
        ],
        solutionStepsEn: [
          '1. Arteries: Carry oxygen-rich blood away from the heart to body cells.',
          '2. Veins: Return carbon-dioxide-rich blood from body tissues back to the heart.'
        ],
        finalAnswerAr: 'الشرايين تنقل دماً غنياً بالأكسجين من القلب للجسم، والأوردة تعيد دماً محملاً بثاني أكسيد الكربون إلى القلب.',
        finalAnswerEn: 'Arteries carry oxygenated blood from heart to body; veins return deoxygenated blood to heart.'
      },
      {
        id: 'tb-p3-sci2-2',
        problemAr: 'اذكر فائدتين أساسيتين للنوم لمدة 9 إلى 11 ساعة يومياً لأطفال المرحلة الابتدائية.',
        problemEn: 'State two vital benefits of 9-11 hours of nightly sleep for elementary school students.',
        solutionStepsAr: [
          '1. إفراز هرمون النمو وإصلاح وبناء العضلات والأنسجة.',
          '2. مساعدة الدماغ على معالجة المعلومات وتثبيت الذكريات وتقوية التركيز الذهني.'
        ],
        solutionStepsEn: [
          '1. Growth hormone secretion and muscle/tissue repair.',
          '2. Memory consolidation and mental cognitive focus renewal.'
        ],
        finalAnswerAr: 'إفراز هرمون النمو وإصلاح العضلات، وتثبيت المعلومات في الذاكرة.',
        finalAnswerEn: 'Growth hormone secretion, muscle repair, and memory consolidation.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-sci2-1',
        questionAr: 'ماذا يحدث لمعدل ضربات قلبك عندما تنتقل من حالة الجلوس والاسترخاء إلى ممارسة تمارين الجري؟',
        questionEn: 'What happens to your heart rate when you transition from resting to sprinting exercise?',
        optionsAr: [
          'يزداد معدل ضربات القلب لضخ مزيد من الأكسجين للعضلات',
          'يتوقف القلب تماماً عن النبض',
          'يقل معدل ضربات القلب إلى الصفر',
          'لا يتغير معدل ضربات القلب إطلاقاً'
        ],
        optionsEn: [
          'Heart rate increases to pump more oxygenated blood to active muscles',
          'Heart stops beating',
          'Heart rate drops to zero',
          'Heart rate remains unchanged'
        ],
        correctIndex: 0,
        rationaleAr: 'تتطلب العضلات طاقة وأكسجين أكبر أثناء المجهود البدني، فيستجيب القلب بزيادة سرعة وقوة نبضاته.',
        rationaleEn: 'Active muscles require more oxygen, prompting the heart to beat faster and pump more blood.'
      },
      {
        id: 'fa-p3-sci2-2',
        questionAr: 'أين يمكن قياس نبض الجسم بسهولة بالضغط الخفيف بالأصابع؟',
        questionEn: 'Where can you easily feel and measure your pulse with gentle finger pressure?',
        optionsAr: ['على جانب الرقبة أو في المعصم تحت الإبهام', 'على الأظافر', 'على الشعر', 'على الركبة من الخلف فقط'],
        optionsEn: ['On the neck (carotid) or wrist (radial)', 'On fingernails', 'On hair', 'On knees only'],
        correctIndex: 0,
        rationaleAr: 'يمر الشريان قريباً من الجلد في المعصم والرقبة مما يتيح الشعور بموجات النبض بوضوح.',
        rationaleEn: 'The radial artery at the wrist and carotid artery at the neck are close to the surface, making pulse easily felt.'
      },
      {
        id: 'fa-p3-sci2-3',
        questionAr: 'ما الوظيفة الحيوية لإفراز العرق (Sweat) أثناء ممارسة النشاط الرياضي في يوم حار؟',
        questionEn: 'What is the vital biological function of sweating during exercise on a warm day?',
        optionsAr: [
          'تبريد درجة حرارة الجسم وتنظيمها عند تبخر قطرات العرق',
          'زيادة وزن الجسم',
          'منع العضلات من الحركة',
          'حبس الحرارة داخل الجسم'
        ],
        optionsEn: [
          'Cooling and regulating body temperature as sweat evaporates',
          'Increasing body weight',
          'Preventing muscle movement',
          'Trapping heat inside the body'
        ],
        correctIndex: 0,
        rationaleAr: 'تبخر العرق عن سطح الجلد يسحب الحرارة الزائدة ويحافظ على درجة حرارة الجسم الداخلية الطبيعية ($37^\\circ C$).',
        rationaleEn: 'Evaporation of sweat dissipates excess body heat, maintaining optimal internal temperature.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة وظيفة القلب كعضلة مضخة حيوية، وكيفية قياس النبض في المعصم والرقبة، واستجابة القلب والرئتين والجلد للتمارين الرياضية، وأهمية النوم العميق (9-11 ساعة) للنمو والتعافي.',
    summaryEn: 'We learned about the heart\'s pumping mechanism, measuring pulse rates at rest and exercise, physiological exercise responses (heart rate, breathing, sweat), and the necessity of 9-11 hours of sleep.',

    assessment: {
      id: 'quiz-p3-sci-2',
      lectureId: 'p3-sci-2',
      titleAr: 'اختبار المحاضرة 2: اللياقة البدنية ومعدل ضربات القلب وصحة الجسم',
      titleEn: 'Assessment 2: Fitness, Heart Rate & Cardiovascular Health',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-sci2-1',
          textAr: 'ما هو المعدل الطبيعي لضربات قلب الطفل في سن المرحلة الابتدائية أثناء الراحة التامة؟',
          textEn: 'What is the normal resting heart rate range for an elementary school child?',
          optionsAr: ['70 إلى 100 نبضة في الدقيقة', '200 إلى 300 نبضة في الدقيقة', '10 إلى 20 نبضة فقط', '500 نبضة في الدقيقة'],
          optionsEn: ['70 to 100 bpm', '200 to 300 bpm', '10 to 20 bpm', '500 bpm'],
          correctIndex: 0,
          conceptTestedAr: 'معدل النبض الطبيعي أثناء الراحة',
          conceptTestedEn: 'Normal Resting Heart Rate',
          explanationAr: 'معدل النبض الطبيعي للأطفال في حالة الراحة يتراوح بين 70 و 100 نبضة في الدقيقة.',
          explanationEn: 'The healthy resting heart rate for school-age children is 70–100 beats per minute.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci2-2',
          textAr: 'ما الأوعية الدموية التي تنقل الدم المحمل بالأكسجين ($O_2$) من القلب إلى جميع أجزاء الجسم؟',
          textEn: 'Which blood vessels carry oxygen-rich blood from the heart out to the body tissues?',
          optionsAr: ['الشرايين (Arteries)', 'الأوردة (Veins)', 'القنوات العصبية', 'الغدد اللعابية'],
          optionsEn: ['Arteries', 'Veins', 'Nerve pathways', 'Salivary glands'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الشرايين',
          conceptTestedEn: 'Arteries Function',
          explanationAr: 'الشرايين تحمل الدم النقي الغني بالأكسجين والمغذي من القلب إلى كل الخلايا.',
          explanationEn: 'Arteries distribute oxygenated blood pumped from the heart throughout the body.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci2-3',
          textAr: 'إذا حسب تلميذ 25 نبضة في 15 ثانية بعد قفز الحبل، كم يكون معدل نبضاته في الدقيقة؟',
          textEn: 'If a student counts 25 beats in 15 seconds after jump rope, what is the heart rate in bpm?',
          optionsAr: ['100 نبضة في الدقيقة', '50 نبضة في الدقيقة', '75 نبضة في الدقيقة', '25 نبضة في الدقيقة'],
          optionsEn: ['100 bpm', '50 bpm', '75 bpm', '25 bpm'],
          correctIndex: 0,
          conceptTestedAr: 'حساب معدل النبض بالدقيقة',
          conceptTestedEn: 'Calculating bpm from 15-second count',
          explanationAr: 'معدل النبض = $25 \\times 4 = 100$ نبضة في الدقيقة.',
          explanationEn: 'Heart rate = $25 \\times 4 = 100$ beats per minute.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-sci2-4',
          textAr: 'ما الهرمون الحيوي الذي يفرزه الجسم بكثرة أثناء النوم العميق للمساعدة على زيادة الطول وبناء الأنسجة؟',
          textEn: 'Which vital hormone is secreted during deep sleep aiding linear growth and tissue regeneration?',
          optionsAr: ['هرمون النمو (Growth Hormone)', 'هرمون التعب', 'هرمون السكر', 'هرمون العطش'],
          optionsEn: ['Growth Hormone', 'Fatigue hormone', 'Sugar hormone', 'Thirst hormone'],
          correctIndex: 0,
          conceptTestedAr: 'أهمية النوم وإفراز هرمون النمو',
          conceptTestedEn: 'Sleep & Growth Hormone',
          explanationAr: 'يفرز هرمون النمو أثناء النوم العميق ليلاً ليساعد على نمو العظام والعضلات.',
          explanationEn: 'Growth hormone is released primarily during deep sleep cycles in children.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-sci2-5',
          textAr: 'لماذا يتنفس الإنسان بشكل أسرع وأعمق أثناء الجري مقارنة بالجلوس؟',
          textEn: 'Why do humans breathe faster and deeper while running compared to sitting?',
          optionsAr: [
            'لتزويد العضلات بالكميات الإضافية من الأكسجين والتخلص من ثاني أكسيد الكربون',
            'لأن الرئتين تتوقفان عن العمل',
            'لتبريد الأسنان فقط',
            'لتقليل نبضات القلب'
          ],
          optionsEn: [
            'To supply muscles with required extra oxygen and expel excess carbon dioxide',
            'Because lungs stop working',
            'To cool teeth only',
            'To lower heart rate'
          ],
          correctIndex: 0,
          conceptTestedAr: 'استجابة الجهاز التنفسي للرياضة',
          conceptTestedEn: 'Respiratory Response to Exercise',
          explanationAr: 'الجري يزيد من استهلاك الطاقة في العضلات، فتزيد الرئتان من وتيرة التنفس لإمدادها بالأكسجين.',
          explanationEn: 'Running increases metabolic rate and oxygen consumption, requiring faster respiration.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: LIVING THINGS, INHERITED VS ACQUIRED TRAITS & ECOSYSTEM ADAPTATIONS ──
  {
    id: 'p3-sci-3',
    order: 3,
    titleAr: 'المحاضرة 3: الكائنات الحية والصفات الموروثة والتكيف في البيئات (Inherited Traits & Adaptations)',
    titleEn: 'Lecture 3: Living Things, Inherited Traits & Ecosystem Adaptations (Discover Primary 3)',
    subtitleAr: 'التمييز بين الصفات الموروثة والمكتسبة، التكيف التركيبي والسلوكي في الكائنات الحية، والسلاسل الغذائية',
    subtitleEn: 'Differentiate inherited vs acquired traits, explore structural and behavioral adaptations, and food webs.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 2: How the World Works)',
    unitTitleAr: 'Theme 2: How the World Works — Chapter 1: Living Things & Habitats',
    unitTitleEn: 'Theme 2: How the World Works — Chapter 1: Living Things & Habitats',
    lessonNumberAr: 'الدرس 3: الصفات الموروثة، التكيف والسلاسل الغذائية',
    lessonNumberEn: 'Lesson 3: Inherited Traits, Adaptations & Food Chains',

    keyConceptsAr: [
      'الصفات الموروثة والصفات المكتسبة (Inherited vs Acquired Traits):',
      '  - الصفات الموروثة (Inherited Traits): صفات جسدية وخصائص تنتقل من الآباء إلى الأبناء عبر الجينات الوراثية.',
      '    * أمثلة في الإنسان: لون العينين، شكل الأذن، نوع الشعر (ناعم/مجعد)، لون البشرة.',
      '    * أمثلة في الحيوانات والنباتات: خطوط النمر، لون بتلات الأزهار، رقبة الزرافة الطويلة، شكل منقار الطائر.',
      '  - الصفات المكتسبة والسلوكيات المتعلمة (Acquired Traits & Learned Behaviors): مهارات وسلوكيات يكتسبها الكائن الحي بالتعلم والممارسة والبيئة ولا تنتقل وراثياً.',
      '    * أمثلة: تعلم ركوب الدراجة، التحدث بلغة معينة، لعب كرة القدم، ندبة جرح على الجلد.',
      'مفهوم التكيف للبقاء (Adaptations for Survival):',
      '  - التكيف التركيبي (Structural Adaptation): سمة أو عضو في بنية وجسم الكائن الحي تساعده على العيش في بيئته.',
      '    * الجمل (سفينة الصحراء): خف عريض لا يغوص في الرمال، رموش مزدوجة تحمي عينيه من العواصف الرملية، وسنام يخزن الدهون.',
      '    * ثعلب الفنك (Fennec Fox): أذنان كبيرتان جداً لإشعاع الحرارة وتبريد جسمه وسماع حركة الفرائس الصغيرة.',
      '    * نبات الصبار (Cactus): ساق سميكة تخزن الماء وأشواك حادة تمنع تبخر الماء وتحميه من الحيوانات.',
      '  - التكيف السلوكي (Behavioral Adaptation): تصرف أو سلوك يفعله الكائن الحي استجابة لبيئته.',
      '    * هجرة الطيور (Bird Migration) في الشتاء بحثاً عن الدفء والغذاء.',
      '    * البيات الشتوي (Hibernation) للدببة والزواحف لتوفير الطاقة في البرد الشديد.',
      'السلاسل والشبكات الغذائية (Food Chains & Webs):',
      '  - الكائنات المنتجة (Producers): النباتات الخضراء التي تصنع غذاءها بنفسها بعملية البناء الضوئي مستخدمة ضوء الشمس.',
      '  - المستهلكات الأولية (Primary Consumers - Herbivores): آكلات الأعشاب مثل الأرانب والغزلان والأبقار.',
      '  - المستهلكات الثانوية والعليا (Secondary/Tertiary Consumers - Carnivores): آكلات اللحوم والضواري مثل الصقور والأسود.',
      '  - المحللات (Decomposers): كائنات حية كالفطريات والبكتيريا تفتت الكائنات الميتة وتعيد العناصر الغذائية للتربة.'
    ],
    keyConceptsEn: [
      'Inherited vs Acquired Traits: Inherited traits pass biologically from parents to offspring (eye color, tiger stripes, flower hue). Acquired traits are learned skills or environmental modifications (riding a bike, languages, scars).',
      'Adaptations: Structural adaptations (camel wide padded feet, Fennec fox large cooling ears, cactus needle spines) vs Behavioral adaptations (bird seasonal migration, winter hibernation).',
      'Food Chains & Energy Flow: Sunlight ➔ Producers (green plants) ➔ Primary Consumers (herbivores) ➔ Secondary Consumers (predators) ➔ Decomposers (recycling nutrients).'
    ],

    conceptMapAr: [
      'الصفات (موروثة / مكتسبة) ➔ التكيف للبقاء (تركيبي / سلوكي) ➔ السلسلة الغذائية (منتجات ➔ مستهلكات ➔ محللات) ➔ توازن النظام البيئي'
    ],
    conceptMapEn: [
      'Traits (Inherited vs Acquired) ➔ Survival Adaptations (Structural vs Behavioral) ➔ Food Chain (Producers ➔ Consumers ➔ Decomposers) ➔ Ecosystem Balance'
    ],

    learningOutcomesAr: [
      'أن يميز التلميذ بدقة بين الصفات الموروثة من الآباء والصفات المكتسبة بالتعلم.',
      'أن يوضح أمثلة على التكيف التركيبي والتكيف السلوكي في البيئات المصرية (الصحراوية والزراعية والساحلية).',
      'أن يحلل سلاسل وشبكات غذائية مبيناً مسار انتقال الطاقة من المنتجات إلى المستهلكات.',
      'أن يستنتج أهمية المحللات في تدوير العناصر الغذائية والحفاظ على خصوبة التربة.'
    ],
    learningOutcomesEn: [
      'Distinguish accurately between inherited biological traits and learned acquired traits.',
      'Provide real examples of structural and behavioral adaptations in desert, wetland, and coastal biomes.',
      'Construct and analyze food chains demonstrating solar energy flow from producers to top carnivores.',
      'Explain the ecological role of decomposers in returning soil nutrients.'
    ],

    vocabulary: [
      {
        termAr: 'صفة موروثة',
        termEn: 'Inherited Trait',
        definitionAr: 'خاصية في الشكل أو البنية الجسدية تنتقل وراثياً من الآباء إلى الأبناء مثل لون الفراء ولون العينين.'
      },
      {
        termAr: 'صفة مكتسبة',
        termEn: 'Acquired Trait',
        definitionAr: 'مهارة أو سلوك يتعلمه الكائن الحي خلال حياته نتيجة التفاعل مع البيئة مثل السباحة والقراءة.'
      },
      {
        termAr: 'التكيف التركيبي',
        termEn: 'Structural Adaptation',
        definitionAr: 'جزء في جسم الكائن الحي أو تعديل في تركيبه يساعده على البقاء والتغذي كأشواك الصبار وخف الجمل.'
      },
      {
        termAr: 'التكيف السلوكي',
        termEn: 'Behavioral Adaptation',
        definitionAr: 'فعل أو تصرف يقوم به الكائن الحي للبقاء على قيد الحياة كهجرة الطيور والبيات الشتوي.'
      },
      {
        termAr: 'كائن منتج',
        termEn: 'Producer',
        definitionAr: 'كائن حي يصنع غذاءه بنفسه باستخدام ضوء الشمس مثل النباتات الخضراء والأشجار.'
      }
    ],

    warmupHookAr: 'انظر إلى عينيك في المرآة.. من أين حصلت على لونهما الجميل؟ من والديك! هذه صفة موروثة! ولكن هل ولدت وأنت تعرف كيف تركب الدراجة أو تقرأ الإنجليزية؟ لا، لقد تعلمتها كصفة مكتسبة! وكيف يستطيع ثعلب الفنك الجميل العيش في حر صحراء مصر الحارقة؟ دعونا نستكشف سحر الوراثة والتكيف في الطبيعة!',
    warmupHookEn: 'Look at your reflection in the mirror.. Where did your eye color come from? Your parents—an inherited trait! But were you born knowing how to ride a bicycle? No, you practiced that as an acquired skill! And how does the cute Fennec fox survive the scorching Egyptian desert? Let us discover heredity and adaptations!',

    mainContentAr: `
### 1. الصفات الموروثة مقابل الصفات المكتسبة (Inherited vs Acquired Traits)

* 🧬 **الصفات الموروثة (Inherited Traits):**
  - خصائص جسدية تنتقل من الآباء والأجداد إلى الأبناء عبر الشفرة الوراثية.
  - **أمثلة في الإنسان:** لون العينين، لون ونوع الشعر (أملس أو مجعد)، شحمة الأذن (حرة أو ملتصقة)، وجود النمش.
  - **أمثلة في الحيوانات والنباتات:** خطوط جلد الحمار الوحشي، بقع الفهد، لون بتلات الزهور، شكل جذع الشجرة.

* 🚲 **الصفات المكتسبة والسلوكيات المتعلمة (Acquired & Learned Traits):**
  - مهارات وقدرات يكتسبها الكائن الحي خلال حياته بالتدريب والتعليم، ولا يولد بها ولا ينقلها بالوراثة لأطفاله.
  - **أمثلة في الإنسان:** التحدث باللغة العربية أو الإنجليزية، مهارة السباحة، العزف على البيانو، طهي الطعام.
  - **أمثلة في الحيوانات:** تعلم الدلفين القفز عبر الأطواق في العروض، أو تعلم الشبل الصغير صيد الفرائس بمراقبة أمه.

---

### 2. التكيف التركيبي والسلوكي (Structural vs Behavioral Adaptations)

التكيف هو أي ميزة تمكن الكائن الحي من البقاء حياً والحصول على الغذاء والماء وحماية نفسه في بيئته:

* 🐪 **أولاً: التكيف التركيبي (Structural Adaptation):**
  - جزء مادي أو تركيب في جسم الكائن الحي.
  - **الجمل في الصحراء:**
    - **الخف العريض المفلطح:** لمنع الغوص في الرمال الناعمة وعزل حرارتها.
    - **الرموش الطويلة المزدوجة:** لحماية العينين من حبات الرمال المتطايرة.
    - **السنام:** تخزين الدهون وتحويلها إلى طاقة وماء عند ندرة الطعام.
  - **ثعلب الفنك (Fennec Fox):**
    - **أذنان كبيرتان جداً:** لفقد الحرارة وتبريد الدم وسماع أدق الحركات للحشرات والقوارض تحت الرمل.
    - **فراء رملي سميك:** للتمويه وعزل برودة ليالي الصحراء.
  - **نبات الصبار (Cactus):**
    - **أشواك إبرية حادة:** لتقليل فقدان الماء بالتبخر ومنع الحيوانات من أكله.
    - **ساق خضراء سميكة شمعية:** لتخزين كميات هائلة من الماء والقيام بالبناء الضوئي.

* 🦆 **ثانياً: التكيف السلوكي (Behavioral Adaptation):**
  - تصرف أو عادة يقوم بها الكائن الحي استجابة لظروف البيئة.
  - **هجرة الطيور (Migration):** انتقال أسراب الطيور آلاف الكيلومترات في فصل الخريف والشتاء إلى مصر وإفريقيا بحثاً عن الدفء والغذاء.
  - **البيات الشتوي (Hibernation):** نوم عميق وطويل تقضيه بعض الحيوانات في جحورها خلال الشتاء لتوفير الطاقة عند ندرة الغذاء.
  - **النشاط الليلي (Nocturnal Activity):** خروج حيوانات الصحراء للصيد ليلاً لتجنب لهيب الشمس الحارق نهاراً.

---

### 3. السلاسل والشبكات الغذائية (Food Chains & Webs)
- تبدأ كل سلسلة غذائية بطاقة **الشمس (Sunlight)**:
  1. **الكائنات المنتجة (Producers):** نباتات خضراء (عشب، أشجار) تمتص ضوء الشمس وتصنع السكر والغذاء.
  2. **المستهلكات الأولية (Primary Consumers):** حيوانات آكلة أعشاب (Herbivores) كالأرانب والجراد واليرقات.
  3. **المستهلكات الثانوية (Secondary Consumers):** حيوانات آكلة لحوم (Carnivores) كالضفادع والطيور والثعالب.
  4. **المستهلكات العليا (Top Predators):** كالصقور والأسود والتماسيح في قمة الهرم الغذائي.
  5. **المحللات (Decomposers):** الفطريات وبكتيريا التربة التي تفتت الكائنات الميتة وتعيد الأملاح المغذية للتربة لتبدأ دورة جديدة.

---

### 4. Interactive Diagram: Traits, Adaptations & Food Chain
\`\`\`xml
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="240" fill="#0f172a" rx="16"/>
  
  <!-- Traits & Adaptations Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">الصفات والتكيف (Traits & Adaptations)</text>
    <text x="20" y="65" fill="#f8fafc" font-size="13">🧬 <tspan fill="#34d399" font-weight="bold">صفة موروثة:</tspan> لون العيون، خطوط الفهد</text>
    <text x="20" y="100" fill="#f8fafc" font-size="13">🚲 <tspan fill="#fbbf24" font-weight="bold">صفة مكتسبة:</tspan> السباحة، ركوب الدراجة، اللغات</text>
    <text x="20" y="135" fill="#f8fafc" font-size="13">🐪 <tspan fill="#38bdf8" font-weight="bold">تكيف تركيبي:</tspan> خف الجمل، أذن الفنك، شوك الصبار</text>
    <text x="20" y="170" fill="#f8fafc" font-size="13">🦆 <tspan fill="#ec4899" font-weight="bold">تكيف سلوكي:</tspan> هجرة الطيور، الصيد الليلي</text>
  </g>

  <!-- Food Chain Energy Flow Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#f59e0b" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#fbbf24" font-size="15" font-weight="bold" text-anchor="middle">مسار الطاقة في السلسلة الغذائية</text>
    <text x="20" y="65" fill="#f8fafc" font-size="13">☀️ <tspan fill="#fbbf24" font-weight="bold">ضوء الشمس:</tspan> مصدر الطاقة الأول على الأرض</text>
    <text x="20" y="100" fill="#f8fafc" font-size="13">🌱 <tspan fill="#34d399" font-weight="bold">منتج (Producer):</tspan> العشب والنبات الأخضر</text>
    <text x="20" y="135" fill="#f8fafc" font-size="13">🦗 <tspan fill="#38bdf8" font-weight="bold">مستهلك أول:</tspan> الجراد ➔ <tspan fill="#ec4899" font-weight="bold">ضفدع</tspan> ➔ 🦅 <tspan fill="#fbbf24" font-weight="bold">صقر</tspan></text>
    <text x="20" y="170" fill="#a78bfa" font-size="13" font-weight="bold">🍄 المحللات (Decomposers): إعادة المغذيات للتربة</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Inherited vs Acquired Traits
- Inherited Traits: Biological characteristics passed via DNA from parents to offspring (eye color, feline markings, flower colors).
- Acquired Traits / Learned Behaviors: Skills learned through personal experience and environmental interaction (sports, speaking foreign languages, scars).

### 2. Structural and Behavioral Adaptations
- Structural Adaptations: Physical bodily structures (camel padded feet and dual eyelashes, large cooling ears of Fennec fox, cactus needle spines).
- Behavioral Adaptations: Actions undertaken for survival (seasonal bird migration across continents, winter hibernation, nocturnal desert foraging).

### 3. Food Chains & Ecosystem Energy Flow
- Sun: Ultimate source of radiant energy.
- Producers: Photosynthetic green plants.
- Primary Consumers: Herbivores eating plant biomass.
- Secondary / Tertiary Consumers: Carnivorous predators.
- Decomposers: Microorganisms and fungi breaking down dead organic matter into soil nutrients.
`,

    workedExamples: [
      {
        id: 'ex-p3-sci3-1',
        titleAr: 'مثال 1: تصنيف الصفات بين موروثة ومكتسبة',
        titleEn: 'Example 1: Classifying Inherited vs Acquired Traits',
        problemAr: 'صنف الصفات والمهارات التالية إلى صفات موروثة (Inherited) أو صفات مكتسبة (Acquired): (لون الفراء البني للدب، التحدث باللغة الفرنسية، وجود النمش على الوجه، مهارة لعب الشطرنج).',
        problemEn: 'Classify the following traits into Inherited or Acquired: (Bear brown fur, Speaking French, Freckles on face, Chess-playing skill).',
        stepByStepSolutionAr: [
          'الخطوة 1: (لون الفراء البني للدب) = صفة موروثة (Inherited) تنتقل وراثياً من والديه.',
          'الخطوة 2: (التحدث باللغة الفرنسية) = صفة مكتسبة (Acquired) يتعلمها الإنسان بالدراسة والتكرار.',
          'الخطوة 3: (وجود النمش على الوجه) = صفة موروثة (Inherited) تحددها الجينات البيولوجية.',
          'الخطوة 4: (مهارة لعب الشطرنج) = صفة مكتسبة (Acquired) تكتسب بالتدريب والممارسة الذهنية.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Bear brown fur = Inherited biological trait.',
          'Step 2: Speaking French = Acquired learned skill.',
          'Step 3: Facial freckles = Inherited genetic feature.',
          'Step 4: Chess skill = Acquired cognitive practice.'
        ],
        finalAnswerAr: 'موروثة: لون الفراء والنمش. مكتسبة: التحدث بالفرنسية ولعب الشطرنج.',
        finalAnswerEn: 'Inherited: Fur color and freckles. Acquired: Speaking French and playing chess.'
      },
      {
        id: 'ex-p3-sci3-2',
        titleAr: 'مثال 2: بناء وتتبع سلسلة غذائية صحراوية مصرية',
        titleEn: 'Example 2: Constructing an Egyptian Desert Food Chain',
        problemAr: 'رتب الكائنات الحية التالية في سلسلة غذائية صحراوية صحيحة تبين مسار انتقال الطاقة: (ثعبان الصحراء، نبات الصبار الأخضر، الصقر الجارح، يربوع صحراوي آكل للنبات).',
        problemEn: 'Sequence the following organisms into an Egyptian desert food chain illustrating energy transfer: (Desert snake, Green cactus, Falcon/Hawk, Desert jerboa).',
        stepByStepSolutionAr: [
          'الخطوة 1: السلسلة تبدأ دائماً بـ **الكائن المنتج** الذي يستغل ضوء الشمس = (نبات الصبار الأخضر).',
          'الخطوة 2: يتغذى **المستهلك الأولي آكل النبات** على الصبار = (اليربوع الصحراوي).',
          'الخطوة 3: يتغذى **المستهلك الثانوي** على اليربوع = (ثعبان الصحراء).',
          'الخطوة 4: يأتي **المستهلك الأعلى (القمة)** فيفترس الثعبان = (الصقر الجارح).'
        ],
        stepByStepSolutionEn: [
          'Step 1: Begins with the photosynthetic producer = Green cactus.',
          'Step 2: Herbivorous primary consumer eating cactus = Desert jerboa.',
          'Step 3: Carnivorous secondary consumer eating jerboa = Desert snake.',
          'Step 4: Apex predator hunting the snake = Hawk/Falcon.'
        ],
        finalAnswerAr: 'نبات الصبار ➔ اليربوع الصحراوي ➔ ثعبان الصحراء ➔ الصقر الجارح.',
        finalAnswerEn: 'Cactus ➔ Desert Jerboa ➔ Desert Snake ➔ Hawk/Falcon.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-sci3-1',
        problemAr: 'كيف تساعد الأذنان الكبيرتان ثعلب الفنك (Fennec Fox) على البقاء حياً في الصحراء؟',
        problemEn: 'How do the large ears of the Fennec Fox aid its survival in the desert ecosystem?',
        solutionStepsAr: [
          '1. التبريد: تحتوي الأذنان الكبيرتان على أوعية دموية كثيفة تشع الحرارة الزائدة لتبريد جسمه في حر الصحراء.',
          '2. الصيد: تمكنانه من سماع أدق حركات القوارض والحشرات الزاحفة تحت الرمال لصيدها.'
        ],
        solutionStepsEn: [
          '1. Heat radiation: Large surface area radiates body heat to cool blood.',
          '2. Acute hearing: Captures faint sounds of burrowing prey under sand.'
        ],
        finalAnswerAr: 'تشعان الحرارة لتبريد جسمه وتمكنانه من سماع حركة الفرائس تحت الرمال بدقة.',
        finalAnswerEn: 'Radiate heat for thermoregulation and provide acute hearing to hunt underground prey.'
      },
      {
        id: 'tb-p3-sci3-2',
        problemAr: 'ما نوع التكيف في كل من: (أ) خف الجمل العريض، (ب) هجرة الطيور في الشتاء؟',
        problemEn: 'Identify the adaptation type for: (A) Camel broad padded feet, (B) Winter bird migration.',
        solutionStepsAr: [
          '(أ) خف الجمل العريض = تكيف تركيبي (Structural Adaptation) في بنية الجسم.',
          '(ب) هجرة الطيور في الشتاء = تكيف سلوكي (Behavioral Adaptation) تقوم به الطيور للبحث عن الدفء.'
        ],
        solutionStepsEn: [
          '(A) Camel padded feet = Structural adaptation.',
          '(B) Bird migration = Behavioral adaptation.'
        ],
        finalAnswerAr: '(أ) تركيبي، (ب) سلوكي.',
        finalAnswerEn: '(A) Structural, (B) Behavioral.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-sci3-1',
        questionAr: 'أي من الخصائص التالية تعتبر صفة موروثة (Inherited Trait) تنتقل عبر الآباء؟',
        questionEn: 'Which of the following characteristics is an Inherited Trait passed down biologically?',
        optionsAr: [
          'لون العينين وشكل بتلات الزهرة',
          'تعلم العزف على آلة موسيقية',
          'التحدث بثلاث لغات أجنبية',
          'ندبة جرح قديم في الذراع'
        ],
        optionsEn: [
          'Eye color and flower petal shape',
          'Learning to play a musical instrument',
          'Speaking three foreign languages',
          'An old arm scar'
        ],
        correctIndex: 0,
        rationaleAr: 'لون العينين وشكل بتلات الأزهار صفات بيولوجية جينية يولد بها الكائن الحي دون تعلم.',
        rationaleEn: 'Eye color and petal morphology are genetically inherited from parent organisms.'
      },
      {
        id: 'fa-p3-sci3-2',
        questionAr: 'ما الدور الأساسي للكائنات المحللة (Decomposers) في النظام البيئي؟',
        questionEn: 'What is the fundamental ecological role of Decomposers in an ecosystem?',
        optionsAr: [
          'تفتيت بقايا الكائنات الميتة وإعادة العناصر الغذائية للتربة',
          'صيد الحيوانات الحية المفترسة',
          'امتصاص ضوء الشمس لإنتاج السكر',
          'حجب أشعة الشمس عن النباتات'
        ],
        optionsEn: [
          'Decomposing dead organic matter and returning nutrients to the soil',
          'Hunting live apex predators',
          'Absorbing sunlight to produce sugar',
          'Blocking sunlight from plants'
        ],
        correctIndex: 0,
        rationaleAr: 'المحللات كالفطريات والبكتيريا تنظف البيئة وتعيد تدوير المعادن والمغذيات لتخصيب التربة.',
        rationaleEn: 'Decomposers recycle dead biomass back into bioavailable soil nutrients.'
      },
      {
        id: 'fa-p3-sci3-3',
        questionAr: 'هجرة أسراب الطيور لمسافات طويلة هرباً من برودة الشتاء تُصنف كـ:',
        questionEn: 'The seasonal migration of bird flocks escaping cold winters is classified as a:',
        optionsAr: [
          'تكيف سلوكي (Behavioral Adaptation)',
          'تكيف تركيبي (Structural Adaptation)',
          'مرض فيروسي',
          'صفة مكتسبة بالصدفة'
        ],
        optionsEn: [
          'Behavioral Adaptation',
          'Structural Adaptation',
          'Viral disease',
          'Random accident'
        ],
        correctIndex: 0,
        rationaleAr: 'الهجرة سلوك وفعل منتظم تقوم به الطيور للبحث عن الغذاء والدفء لضمان بقائها.',
        rationaleEn: 'Seasonal migration is a programmed behavioral pattern ensuring survival.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة الفرق بين الصفات الموروثة والمكتسبة، والتكيف التركيبي والسلوكي في بيئات مصر والعالم، وكيفية انتقال الطاقة عبر السلاسل الغذائية من المنتجات حتى المحللات.',
    summaryEn: 'We learned the difference between inherited and acquired traits, structural vs behavioral adaptations, and solar energy flow across food webs up to decomposers.',

    assessment: {
      id: 'quiz-p3-sci-3',
      lectureId: 'p3-sci-3',
      titleAr: 'اختبار المحاضرة 3: الصفات الموروثة، التكيف والسلاسل الغذائية',
      titleEn: 'Assessment 3: Inherited Traits, Adaptations & Food Chains',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-sci3-1',
          textAr: 'أي من التالية يعتبر مثالاً على الصفة المكتسبة (Acquired Trait)؟',
          textEn: 'Which of the following is an example of an Acquired Trait?',
          optionsAr: ['مهارة القراءة والكتابة', 'لون ريش الببغاء', 'عدد أرجل العنكبوت', 'شكل بذور النبات'],
          optionsEn: ['Reading and writing skill', 'Parrot feather colors', 'Number of spider legs', 'Plant seed shape'],
          correctIndex: 0,
          conceptTestedAr: 'الصفات المكتسبة',
          conceptTestedEn: 'Acquired Traits Definition',
          explanationAr: 'القراءة والكتابة مهارة يتعلمها الإنسان بالتدريب والتعليم وليست موروثة بيولوجياً.',
          explanationEn: 'Literacy is learned through practice and environmental education.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci3-2',
          textAr: 'ما التكيف التركيبي الذي يساعد نبات الصبار على تقليل فقدان الماء في الصحراء؟',
          textEn: 'What structural adaptation prevents water loss in desert cactus plants?',
          optionsAr: ['تحول الأوراق إلى أشواك إبرية حادة وساق شمعية سميكة', 'أوراق عريضة رقيقة جداً', 'أزهار عملاقة مائية', 'جذور معلقة في الهواء فقط'],
          optionsEn: ['Leaves modified into sharp needle spines and thick waxy stem', 'Thin wide leaves', 'Giant water flowers', 'Aerial hanging roots only'],
          correctIndex: 0,
          conceptTestedAr: 'تكيف نبات الصبار',
          conceptTestedEn: 'Cactus Structural Adaptation',
          explanationAr: 'الأشواك الإبرية تقلل مساحة السطح المعرض للشمس فتقلل التبخر وتحمي النبتة من الحيوانات.',
          explanationEn: 'Spines minimize surface area for transpiration and defend against herbivores.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-sci3-3',
          textAr: 'بماذا تبدأ كل سلسلة غذائية صحيحة على سطح الأرض؟',
          textEn: 'What do all standard terrestrial food chains start with?',
          optionsAr: ['طاقة الشمس وكائن منتج (النبات الأخضر)', 'حيوان مفترس لاحم', 'فطر محلل فقط', 'حيوان أليف'],
          optionsEn: ['Sunlight energy & green plant Producer', 'Carnivorous apex predator', 'Decomposer fungus only', 'Pet animal'],
          correctIndex: 0,
          conceptTestedAr: 'بداية السلسلة الغذائية',
          conceptTestedEn: 'Food Chain Foundation',
          explanationAr: 'تبدأ السلسلة دائماً بالنبات المنتج الذي يصنع غذاءه مستمداً الطاقة من ضوء الشمس.',
          explanationEn: 'Food chains always initiate with photosynthetic producers capturing solar energy.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci3-4',
          textAr: 'ماذا نطلق على خروج ثعلب الفنك واليربوع للصيد والتغذي ليلاً في الصحراء؟',
          textEn: 'What do we call the adaptation where desert animals forage at night?',
          optionsAr: ['تكيف سلوكي (Behavioral Adaptation)', 'تكيف تركيبي', 'صفة موروثة غير مفيدة', 'مرض بيئي'],
          optionsEn: ['Behavioral Adaptation (Nocturnal activity)', 'Structural adaptation', 'Useless inherited trait', 'Environmental sickness'],
          correctIndex: 0,
          conceptTestedAr: 'التكيف السلوكي الليلي',
          conceptTestedEn: 'Nocturnal Behavioral Adaptation',
          explanationAr: 'النشاط الليلي سلوك تختاره حيوانات الصحراء لتفادي حرارة الشمس الحارقة نهاراً.',
          explanationEn: 'Nocturnal activity is a behavioral adaptation to avoid scorching daytime heat.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-sci3-5',
          textAr: 'أي من الكائنات التالية يُعد مستهلكاً أولياً (Primary Consumer) في السلسلة الغذائية؟',
          textEn: 'Which of the following organisms is a Primary Consumer (Herbivore)?',
          optionsAr: ['الأرنب الذي يأكل العشب', 'الصقر الذي يفترس الثعبان', 'الأسد الذي يصطاد الغزال', 'شجرة السنط'],
          optionsEn: ['Rabbit eating grass', 'Hawk hunting snake', 'Lion hunting gazelle', 'Acacia tree'],
          correctIndex: 0,
          conceptTestedAr: 'المستهلك الأولي آكل العشب',
          conceptTestedEn: 'Primary Consumer (Herbivore)',
          explanationAr: 'المستهلك الأولي هو الحيوان العاشب الذي يتغذى مباشرة على النباتات المنتجة.',
          explanationEn: 'Primary consumers feed directly upon photosynthetic autotrophs.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: ENVIRONMENTAL CHANGES, FOSSILS, FORCES, MOTION & MAGNETISM ──
  {
    id: 'p3-sci-4',
    order: 4,
    titleAr: 'المحاضرة 4: التغيرات البيئية والحفريات والقوى والحركة والمغناطيسية (Forces, Motion & Magnetism)',
    titleEn: 'Lecture 4: Habitats Changes, Fossils, Forces, Motion & Magnetism (Discover Primary 3)',
    subtitleAr: 'استكشاف أسباب انقراض الكائنات الحية وسجلات الصخور (Fossils)، قوى الدفع والسحب، الجاذبية، وقوانين المغناطيسية',
    subtitleEn: 'Investigate extinction causes, fossil records, push/pull forces, gravity, friction, and magnetic poles.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ديسكفر والعلوم (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Discover & Science (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester (Theme 2 & 4: How the World Works & Communication)',
    unitTitleAr: 'Theme 2 & 4: Changes in Habitats, Fossils & Forces, Motion and Magnetism',
    unitTitleEn: 'Theme 2 & 4: Changes in Habitats, Fossils & Forces, Motion and Magnetism',
    lessonNumberAr: 'الدرس 4: التغيرات البيئية، الحفريات، القوى والحركة والمغناطيس',
    lessonNumberEn: 'Lesson 4: Environmental Changes, Fossils, Forces & Magnetism',

    keyConceptsAr: [
      'التغيرات البيئية والانقراض والحفريات (Habitats, Extinction & Fossils):',
      '  - التغيرات البيئية: تحدث نتيجة عوامل طبيعية (الجفاف Drought، الفيضانات Floods، الحرائق) أو أنشطة بشرية (قطع الغابات Deforestation، التلوث Pollution).',
      '  - الكائنات المنقرضة (Extinct Species): كائنات ماتت جميع أفراد نوعها ولم يعد لها وجود على الأرض (كالديناصورات Dinosaurs والماموث الصوفي Mammoth).',
      '  - الحفريات (Fossils): بقايا أو آثار كائنات حية قديمة طُبعت وحفظت في الصخور الرسوبية لملايين السنين، وتخبرنا كيف كانت البيئة القديمة ومناخ الأرض.',
      'القوى والحركة (Forces & Motion):',
      '  - القوة (Force): مؤثر يغير حالة الجسم من السكون إلى الحركة أو يغير سرعته واتجاهه، وتكون إما **دفع (Push)** أو **سحب (Pull)**.',
      '  - القوى المتزنة وغير المتزنة (Balanced vs Unbalanced Forces):',
      '    * القوى المتزنة: قوى متساوية في المقدار ومتعاكسة في الاتجاه، فلا يتحرك الجسم ويبقى ساكناً.',
      '    * القوى غير المتزنة: قوى غير متساوية، فتحدث حركة وتسارعاً في اتجاه القوة الأكبر.',
      '  - قوة الجاذبية (Gravity): قوة سحب غير مرئية تجذب جميع الأجسام نحو مركز الأرض إلى الأسفل.',
      '  - قوة الاحتكاك (Friction): قوة تنشأ عند تلامس وتدحرج جسمين معاً وتعمل في عكس اتجاه الحركة لتبطيء الأجسام أو إيقافها.',
      'المغناطيسية وخصائص المغناطيس (Magnetism & Magnetic Poles):',
      '  - المغناطيس (Magnet): جسم يجذب المواد المغناطيسية المصنوعة من **الحديد (Iron)** و **الصلب (Steel)** و **النيكل (Nickel)**.',
      '  - قطبا المغناطيس: لكل مغناطيس قطبان؛ قطب شمالي (North Pole - N) وقطب جنوبي (South Pole - S).',
      '  - القانون الأساسي للمغناطيسية:',
      '    * الأقطاب المتشابهة تتنافر (Like poles repel: N-N or S-S تتباعد).',
      '    * الأقطاب المختلفة تتجاذب (Opposite poles attract: N-S تلتصق بقوة).'
    ],
    keyConceptsEn: [
      'Habitat Changes & Extinction: Natural disturbances (droughts, floods) and anthropogenic factors (deforestation, pollution). Extinct species (Dinosaurs, Mammoths) versus modern biodiversity.',
      'Fossils: Preserved remnants, imprints, or traces of prehistoric organisms in sedimentary rock strata revealing Earth\'s historical climate and life.',
      'Forces and Motion: Forces are pushes or pulls. Balanced forces cause no movement; unbalanced forces trigger acceleration. Gravity pulls downward; friction opposes motion.',
      'Magnetism: Magnetic materials (Iron, Steel, Nickel). Magnets have North (N) and South (S) poles. Rule: Opposites attract (N-S), Likes repel (N-N, S-S).'
    ],

    conceptMapAr: [
      'التغيرات البيئية والحفريات (سجلات الماضي) ➔ القوى والحركة (دفع، سحب، جاذبية، احتكاك) ➔ المغناطيسية (أقطاب N و S: تجاذب وتنافر) ➔ تطبيقات تكنولوجية'
    ],
    conceptMapEn: [
      'Environmental History & Fossils ➔ Forces & Motion (Push, Pull, Gravity, Friction) ➔ Magnetism (North/South Poles, Attraction & Repulsion) ➔ Modern Applications'
    ],

    learningOutcomesAr: [
      'أن يشرح التلميذ أسباب التغيرات البيئية وكيف تتشكل الحفريات في الصخور لتسجيل تاريخ الأرض القديم.',
      'أن يميز بين قوى الدفع وقوى السحب، ويوضح أثر الجاذبية وقوة الاحتكاك على حركة الأجسام.',
      'أن يختبر عملياً قطبي المغناطيس (الشمالي والجنوبي) ويستنتج قانون التجاذب والتنافر.',
      'أن يصنف المواد المختلفة إلى مواد مغناطيسية تنجذب للمغناطيس ومواد غير مغناطيسية.'
    ],
    learningOutcomesEn: [
      'Explain causes of environmental shifts and how fossils in rock strata chronicle prehistoric biodiversity.',
      'Distinguish between push and pull forces, explaining gravitational pull and frictional deceleration.',
      'Demonstrate magnetic interaction (North and South poles: opposite attract, likes repel).',
      'Categorize materials into magnetic (iron, steel, nickel) and non-magnetic substances (plastic, wood, glass).'
    ],

    vocabulary: [
      {
        termAr: 'الحفرية',
        termEn: 'Fossil',
        definitionAr: 'بقايا أو طبعات كائنات حية قديمة عاشت منذ ملايين السنين وحفظت في طبقات الصخور.'
      },
      {
        termAr: 'الانقراض',
        termEn: 'Extinction',
        definitionAr: 'اختفاء وموت جميع أفراد نوع معين من الكائنات الحية من كوكب الأرض تماماً كالديناصورات.'
      },
      {
        termAr: 'قوة الجاذبية',
        termEn: 'Gravity',
        definitionAr: 'قوة سحب غير مرئية تجذب بها الأرض جميع الأجسام نحو مركزها إلى الأسفل.'
      },
      {
        termAr: 'قوة الاحتكاك',
        termEn: 'Friction',
        definitionAr: 'قوة مقاومة تنشأ عند احتكاك سطحين وتعمل في عكس اتجاه الحركة لتبطئ الجسم.'
      },
      {
        termAr: 'الأقطاب المغناطيسية',
        termEn: 'Magnetic Poles',
        definitionAr: 'طرفا المغناطيس (القطب الشمالي والقطب الجنوبي) وتتركز عندهما أقصى قوة جذب مغناطيسية.'
      }
    ],

    warmupHookAr: 'تخيل أنك عالم آثار وجيولوجيا عثرت في صخور وادي الحيتان بصحراء مصر على هيكل عظمي لحوت عملاق! كيف وصل حوت بحري إلى وسط الصحراء؟ 🐳 وما هي القوة السحرية التي تجعل المغناطيس يجذب المسامير دون أن يلمسها، أو يبتعد هارباً عند اقتراب قطب مماثل؟ هيا نكتشف أسرار الحفريات وقوانين القوى والمغناطيس!',
    warmupHookEn: 'Imagine discovering a giant whale fossil in the middle of Egypt\'s Wadi Al-Hitan desert! How did a sea creature end up in the desert sands? 🐳 And what invisible power allows a magnet to pull iron nails through thin air? Let us explore prehistoric fossils, forces, motion, and magnetic magic!',

    mainContentAr: `
### 1. التغيرات البيئية والانقراض وسجلات الحفريات (Fossils & Extinction)

* 🌍 **التغيرات البيئية (Changes in Habitats):**
  - **تغيرات طبيعية بطيئة:** تغير المناخ، زحف الرمال، أو سريعة كالبراكين والفيضانات والجفاف.
  - **تغيرات بسبب الإنسان:** إزالة الغابات، البناء، والتلوث البيئي مما يدمر مواطن الكائنات الحية الطبيعية.

* 🦖 **الانقراض والحفريات (Fossils & Prehistoric Life):**
  - **الانقراض:** إذا لم يستطع الكائن الحي التكيف مع التغيرات السريعة، يموت جميع أفراد نوعه وينقرض (كالديناصورات والماموث).
  - **الحفرية (Fossil):** آثار أو بقايا صلبة (عظام، أسنان، أوراق شجر، بصمات أقدام) لكائنات عاشت في العصور الغابرة وحفظت في الصخور الرسوبية.
  - *مثال مصري عالمي:* **وادي الحيتان** بمحافظة الفيوم في مصر يحتوي على حفريات حيتان كاملة تثبت أن هذه الصحراء كانت بحراً عميقاً ومزدهراً قبل 40 مليون سنة!

---

### 2. القوى والحركة (Forces & Motion: Push, Pull, Gravity & Friction)

* 🎯 **ما هي القوة؟**
  - القوة هي دفع (Push) أو سحب (Pull) يؤثر في الأجسام:
    - **قوة الدفع (Push):** إبعاد الشيء عنك (مثل: ركل الكرة، دفع عربة التسوق).
    - **قوة السحب (Pull):** تقريب الشيء نحوك (مثل: فتح الدرج، شد الحبل).

* ⚖️ **القوى المتزنة والقوى غير المتزنة:**
  - **قوى متزنة (Balanced Forces):** عندما يتساوى الفريقان في لعبة شد الحبل، لا يتحرك الحبل وتبقى النتيجة ثابتة.
  - **قوى غير متزنة (Unbalanced Forces):** عندما يسحب فريق بقوة أكبر، يتحرك الحبل باتجاه القوة الأكبر ويحدث التسارع.

* 🍎 **قوة الجاذبية (Gravity):**
  - تسحب الأشياء دائماً إلى أسفل نحو مركز الأرض؛ فعندما تسقط تفاحة من الشجرة تسقط إلى الأرض بسبب الجاذبية.

* 🛹 **قوة الاحتكاك (Friction):**
  - قوة تقاوم حركة الأجسام وتنشأ عند ملامسة السطوح.
  - السطح الخشن (كالسجاد أو العشب) يولد احتكاكاً كبيراً فيبطئ الكرة سريعاً، بينما السطح الأملس (كالجليد أو السيراميك) يقلل الاحتكاك فتنزلق الأجسام لمسافة أطول.

---

### 3. المغناطيسية وقوانين الأقطاب (Magnetism & Magnetic Poles)

* 🧲 **المغناطيس والمواد المغناطيسية:**
  - المغناطيس يجذب مواد محددة تحتوي على **الحديد (Iron)** و **الصلب (Steel)** و **النيكل (Nickel)** كالمسامير والمشابك المعدنية.
  - لا يجذب المغناطيس: البلاستيك، الخشب، الزجاج، الورق، النحاس، والألومنيوم.

* 🧭 **قطبا المغناطيس وقانون التجاذب والتنافر:**
  - كل مغناطيس له قطبان: **قطب شمالي (North - N)** ملون بالأحمر غالباً، و**قطب جنوبي (South - S)** ملون بالأزرق.
  - **القانون الذهبي للمغناطيسية:**
    - **الأقطاب المختلفة تتجاذب (Opposite poles attract):** ($N + S$) ينجذبان ويلتصقان بقوة.
    - **الأقطاب المتشابهة تتنافر (Like poles repel):** ($N + N$) أو ($S + S$) يدفع كل منهما الآخر ويبتعدان بقوة تنافر.

---

### 4. Interactive Diagram: Fossils, Forces & Magnetism
\`\`\`xml
<svg viewBox="0 0 720 240" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="240" fill="#0f172a" rx="16"/>
  
  <!-- Forces & Motion Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">القوى والحركة (Forces & Motion)</text>
    <text x="20" y="65" fill="#f8fafc" font-size="13">👉 <tspan fill="#38bdf8" font-weight="bold">قوة الدفع (Push):</tspan> إبعاد الجسم للأمام</text>
    <text x="20" y="100" fill="#f8fafc" font-size="13">👈 <tspan fill="#38bdf8" font-weight="bold">قوة السحب (Pull):</tspan> تقريب الجسم نحوك</text>
    <text x="20" y="135" fill="#f8fafc" font-size="13">🍎 <tspan fill="#fbbf24" font-weight="bold">الجاذبية (Gravity):</tspan> سحب الأجسام لأسفل</text>
    <text x="20" y="170" fill="#f8fafc" font-size="13">🛹 <tspan fill="#ec4899" font-weight="bold">الاحتكاك (Friction):</tspan> مقاومة وتبطئة الحركة</text>
  </g>

  <!-- Magnetism & Fossils Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="200" fill="#1e293b" stroke="#ec4899" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#f472b6" font-size="15" font-weight="bold" text-anchor="middle">المغناطيسية والحفريات (Magnetism & Fossils)</text>
    <text x="20" y="65" fill="#f8fafc" font-size="13">🧲 <tspan fill="#34d399" font-weight="bold">الأقطاب المختلفة تتجاذب:</tspan> North + South</text>
    <text x="20" y="100" fill="#f8fafc" font-size="13">🚫 <tspan fill="#ef4444" font-weight="bold">الأقطاب المتشابهة تتنافر:</tspan> N + N أو S + S</text>
    <text x="20" y="135" fill="#f8fafc" font-size="13">📎 يجذب: الحديد والصلب | لا يجذب: البلاستيك والخشب</text>
    <text x="20" y="170" fill="#fbbf24" font-size="13" font-weight="bold">🐳 الحفريات (وادي الحيتان): سجلات صخور لتاريخ الأرض</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Environmental Transformations, Extinction & Fossil Records
- Habitat Transformations: Natural disturbances (droughts, floods) and anthropogenic pressure (deforestation, urbanization).
- Extinction: Total loss of a biological species (Dinosaurs, Woolly Mammoth).
- Fossils: Preserved prehistoric remains in sedimentary rocks (e.g., Egypt's world-famous Wadi Al-Hitan whale fossils confirming ancient maritime coverage).

### 2. Physical Forces: Push, Pull, Gravity & Friction
- Pushes move objects away; pulls draw objects closer.
- Balanced forces maintain rest; unbalanced forces create directional acceleration.
- Gravity pulls all masses downward toward Earth's planetary core.
- Friction acts opposite to the direction of motion, decelerating moving objects on rough contact surfaces.

### 3. Magnetism & Laws of Magnetic Attraction
- Magnets attract ferromagnetic elements (Iron, Steel, Nickel).
- Non-magnetic materials: Wood, plastic, glass, copper, aluminum.
- The Universal Law of Magnetic Poles: Opposite poles attract ($N \leftrightarrow S$); Like poles repel ($N \leftarrow \rightarrow N$ or $S \leftarrow \rightarrow S$).
`,

    workedExamples: [
      {
        id: 'ex-p3-sci4-1',
        titleAr: 'مثال 1: التنبؤ بسلوك قطبي مغناطيس عند تقريبهما',
        titleEn: 'Example 1: Predicting Magnetic Pole Interactions',
        problemAr: 'أحضر مازن مغناطيسين وقام بتقريب القطب الشمالي (N) للمغناطيس الأول من القطب الشمالي (N) للمغناطيس الثاني. ماذا سيحدث؟ وماذا يحدث إذا قلب أحدهما وقرب القطب الشمالي (N) من القطب الجنوبي (S)؟',
        problemEn: 'Mazen brought the North pole (N) of magnet 1 near the North pole (N) of magnet 2. What will happen? What happens if he brings North (N) near South (S)?',
        stepByStepSolutionAr: [
          'الخطوة 1: عند تقريب القطب الشمالي (N) من القطب الشمالي (N)، الأقطاب متشابهة (Like Poles).',
          'الخطوة 2: القاعدة الفيزيائية: الأقطاب المتشابهة تتنافر (Repel)، فيشعر مازن بقوة تدفع المغناطيسين بعيداً عن بعضهما.',
          'الخطوة 3: عند تقريب القطب الشمالي (N) من القطب الجنوبي (S)، الأقطاب مختلفة (Opposite Poles).',
          'الخطوة 4: القاعدة الفيزيائية: الأقطاب المختلفة تتجاذب (Attract)، فيلتصق المغناطيسان بقوة جذب مغناطيسية.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Bringing North near North represents like poles.',
          'Step 2: Rule: Like poles repel, pushing away from each other.',
          'Step 3: Bringing North near South represents opposite poles.',
          'Step 4: Rule: Opposite poles attract, pulling together firmly.'
        ],
        finalAnswerAr: '(N مع N) يحدث تنافر وتباعد. (N مع S) يحدث تجاذب والتصاق.',
        finalAnswerEn: '(N with N) repel each other. (N with S) attract each other.'
      },
      {
        id: 'ex-p3-sci4-2',
        titleAr: 'مثال 2: تحليل القوى المؤثرة على كرة متدحرجة',
        titleEn: 'Example 2: Analyzing Forces on a Rolling Ball',
        problemAr: 'ركل رامي كرة قدم على أرضية عشبية خشنة، فتحركت لمسافة ثم تباطأت وتوقفت تماماً. ما القوى التي أثرت على الكرة؟',
        problemEn: 'Rami kicked a soccer ball across a rough grassy field. It rolled, slowed down, and stopped. What forces acted on the ball?',
        stepByStepSolutionAr: [
          'الخطوة 1: عند ركل الكرة أثرت عليها **قوة دفع غير متزنة (Push Force)** من قدم رامي فجعلتها تتحرك للأمام.',
          'الخطوة 2: تشد **قوة الجاذبية (Gravity)** الكرة إلى أسفل لتبقيها ملامسة للأرض.',
          'الخطوة 3: ينشأ بين سطح الكرة وعشب الملعب **قوة احتكاك (Friction)** تعمل في عكس اتجاه الحركة لتبطيء سرعة الكرة حتى توقفها.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Kick applies an unbalanced push force starting motion.',
          'Step 2: Gravity pulls downward keeping ball grounded.',
          'Step 3: Grass friction opposes motion, decelerating the ball to a complete stop.'
        ],
        finalAnswerAr: 'قوة الدفع حركتها، وقوة الجاذبية سحبتها للأسفل، وقوة الاحتكاك مع العشب أوقفتها.',
        finalAnswerEn: 'Push force moved it, gravity grounded it, and surface friction brought it to a stop.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-sci4-1',
        problemAr: 'ماذا يثبت وجود حفريات هياكل الحيتان في منطقة وادي الحيتان بصحراء مصر؟',
        problemEn: 'What does the presence of whale fossils in Egypt\'s Wadi Al-Hitan desert prove?',
        solutionStepsAr: [
          '1. يثبت أن هذه المنطقة الصحراوية الجافة كانت في الماضي السحيق مغطاة بمياه بحر عميق ودافئ عاشت فيه الحيتان القديمة.',
          '2. الحفريات تقدم دليلاً علمياً على التغيرات المناخية والبيئية الكبرى التي مرت بها الأرض عبر ملايين السنين.'
        ],
        solutionStepsEn: [
          '1. Proves that this dry desert area was submerged under a deep prehistoric sea.',
          '2. Fossils provide historical evidence of ancient climate and ecosystem shifts.'
        ],
        finalAnswerAr: 'يثبت أن صحراء وادي الحيتان كانت قديماً مغطاة ببحر عميق عاشت فيه كائنات بحرية.',
        finalAnswerEn: 'Proves the desert was once a deep prehistoric ocean teeming with marine life.'
      },
      {
        id: 'tb-p3-sci4-2',
        problemAr: 'صنف المواد التالية إلى مواد مغناطيسية تنجذب للمغناطيس ومواد غير مغناطيسية: (مسمار حديد، ممحاة مطاطية، مشبك ورق فولاذي، ملعقة بلاستيك، مسطرة خشبية).',
        problemEn: 'Categorize into magnetic vs non-magnetic: (Iron nail, Rubber eraser, Steel paperclip, Plastic spoon, Wooden ruler).',
        solutionStepsAr: [
          'المواد المغناطيسية (تنجذب للمغناطيس): مسمار الحديد، ومشبك الورق الفولاذي.',
          'المواد غير المغناطيسية (لا تنجذب): الممحاة المطاطية، والملعقة البلاستيكية، والمسطرة الخشبية.'
        ],
        solutionStepsEn: [
          'Magnetic: Iron nail, Steel paperclip.',
          'Non-magnetic: Rubber eraser, Plastic spoon, Wooden ruler.'
        ],
        finalAnswerAr: 'مغناطيسية: مسمار الحديد ومشبك الورق الفولاذي. غير مغناطيسية: الممحاة والملعقة البلاستيك والمسطرة الخشب.',
        finalAnswerEn: 'Magnetic: Iron nail, steel paperclip. Non-magnetic: Eraser, plastic spoon, wooden ruler.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-sci4-1',
        questionAr: 'ماذا يحدث عند تقريب القطب الجنوبي (S) لمغناطيس من القطب الجنوبي (S) لمغناطيس آخر؟',
        questionEn: 'What happens when you bring the South pole (S) of a magnet near the South pole (S) of another magnet?',
        optionsAr: [
          'يتنافران ويتباعدان بقوة (Like poles repel)',
          'يتجاذبان ويلتصقان معاً بقوة',
          'يتحولان إلى خشب وبلاستيك',
          'لا يحدث أي تفاعل إطلاقاً'
        ],
        optionsEn: [
          'They repel and push away from each other',
          'They attract and stick together',
          'They transform into wood',
          'No reaction occurs'
        ],
        correctIndex: 0,
        rationaleAr: 'القانون الفيزيائي للمغناطيس ينص على أن الأقطاب المتشابهة (S مع S أو N مع N) تتنافر وتتباعد.',
        rationaleEn: 'Like magnetic poles (S-S or N-N) always repel one another.'
      },
      {
        id: 'fa-p3-sci4-2',
        questionAr: 'ما هي القوة التي تسحب الأشياء دائماً نحو الأسفل باتجاه مركز الأرض وتمنعنا من الطفو في الهواء؟',
        questionEn: 'What invisible force pulls objects downward toward Earth\'s center preventing us from floating away?',
        optionsAr: ['قوة الجاذبية (Gravity)', 'قوة الدفع السريع', 'قوة الاحتكاك السطحي', 'قوة الرياح فقط'],
        optionsEn: ['Gravity', 'Rapid push force', 'Surface friction', 'Wind force only'],
        correctIndex: 0,
        rationaleAr: 'الجاذبية الأرضية هي قوة جذب طبيعية تسحب جميع الكتل والأجسام نحو مركز كوكب الأرض.',
        rationaleEn: 'Gravity is the natural attraction pulling all mass downward toward Earth\'s core.'
      },
      {
        id: 'fa-p3-sci4-3',
        questionAr: 'ماذا نطلق على بقايا أو آثار الكائنات الحية القديمة التي عاشت منذ ملايين السنين وحفظت في الصخور؟',
        questionEn: 'What do we call the preserved remnants or impressions of ancient organisms found in rocks?',
        optionsAr: ['الحفريات (Fossils)', 'المغناطيس', 'النفايات البلاستيكية', 'الخلايا الحية الحديثة'],
        optionsEn: ['Fossils', 'Magnets', 'Plastic waste', 'Modern living cells'],
        correctIndex: 0,
        rationaleAr: 'الحفريات (Fossils) هي سجلات صخرية تحفظ عظام وبصمات الكائنات القديمة لتخبرنا بتاريخ الأرض.',
        rationaleEn: 'Fossils are geological records preserving remnants and impressions of prehistoric life.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة أسباب التغيرات البيئية وأهمية الحفريات في معرفة تاريخ الأرض، وقوى الدفع والسحب، وقوة الجاذبية والاحتكاك، وقوانين المغناطيسية والأقطاب وتطبيقاتها.',
    summaryEn: 'We learned about habitat shifts, fossil records, push/pull forces, gravity, friction, and magnetic principles (North/South poles attraction and repulsion).',

    assessment: {
      id: 'quiz-p3-sci-4',
      lectureId: 'p3-sci-4',
      titleAr: 'اختبار المحاضرة 4: التغيرات البيئية، الحفريات، القوى والمغناطيس',
      titleEn: 'Assessment 4: Environmental Changes, Fossils, Forces & Magnetism',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-sci4-1',
          textAr: 'أي من المواد التالية تنجذب بقوة للمغناطيس؟',
          textEn: 'Which of the following materials is strongly attracted to a magnet?',
          optionsAr: ['مسمار من الحديد أو الصلب', 'قطعة من الخشب', 'كوب من الزجاج', 'زجاجة بلاستيكية'],
          optionsEn: ['Iron or steel nail', 'Piece of wood', 'Glass cup', 'Plastic bottle'],
          correctIndex: 0,
          conceptTestedAr: 'المواد المغناطيسية',
          conceptTestedEn: 'Magnetic Materials',
          explanationAr: 'يجذب المغناطيس المواد المغناطيسية التي تحتوي على الحديد والصلب والنيكل.',
          explanationEn: 'Magnets attract ferromagnetic metals like iron, steel, and nickel.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci4-2',
          textAr: 'ماذا نسمي قوة المقاومة التي تنشأ عند تلامس وتدحرج جسمين معاً وتعمل على تبطيء الحركة؟',
          textEn: 'What do we call the resistive force generated when two surfaces rub against each other slowing motion?',
          optionsAr: ['قوة الاحتكاك (Friction)', 'قوة الجاذبية', 'قوة التنافر', 'قوة الضوء'],
          optionsEn: ['Friction', 'Gravity', 'Repulsion', 'Light force'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم قوة الاحتكاك',
          conceptTestedEn: 'Friction Concept',
          explanationAr: 'الاحتكاك قوة تقاوم حركة الأجسام وتعمل في عكس اتجاه الحركة لتبطيئها وإيقافها.',
          explanationEn: 'Friction opposes relative motion between contacting surfaces, causing deceleration.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci4-3',
          textAr: 'عند تقريب القطب الشمالي (N) لمغناطيس من القطب الجنوبي (S) لمغناطيس آخر، ماذا يحدث؟',
          textEn: 'When the North pole (N) of a magnet is brought near the South pole (S) of another magnet, what happens?',
          optionsAr: ['يتجاذبان ويلتصقان بقوة (Opposite poles attract)', 'يتنافران ويتباعدان', 'ينكسر المغناطيس', 'يتحولان إلى حرارة'],
          optionsEn: ['They attract and pull together firmly', 'They repel and push apart', 'Magnets break', 'They turn into heat'],
          correctIndex: 0,
          conceptTestedAr: 'قانون التجاذب المغناطيسي',
          conceptTestedEn: 'Law of Magnetic Attraction',
          explanationAr: 'الأقطاب المغناطيسية المختلفة (الشمالي والجنوبي) تتجاذب بقوة نحو بعضها.',
          explanationEn: 'Opposite magnetic poles (N and S) exert attractive forces pulling together.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci4-4',
          textAr: 'ماذا نسمي الكائن الحي الذي ماتت جميع أفراد نوعه ولم يعد له أي وجود على كوكب الأرض؟',
          textEn: 'What do we call a biological species where every single individual has died leaving none on Earth?',
          optionsAr: ['كائن منقرض (Extinct)', 'كائن مهاجر', 'كائن متكيف', 'كائن مروض'],
          optionsEn: ['Extinct species', 'Migratory species', 'Adapted species', 'Domesticated species'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الانقراض',
          conceptTestedEn: 'Extinction Concept',
          explanationAr: 'الانقراض هو الزوال والغياب النهائي لنوع كامل من الكائنات الحية كالديناصورات.',
          explanationEn: 'Extinction is the complete disappearance of a biological species from the planet.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-sci4-5',
          textAr: 'أي من الأفعال التالية يمثل تطبيقاً لقوة السحب (Pull Force)؟',
          textEn: 'Which of the following actions represents an application of a Pull Force?',
          optionsAr: ['فتح درج المكتب بسحبه نحوك', 'ركل كرة القدم بقدمك بعيداً', 'دفع عربة التسوق في المتجر', 'إغلاق باب الغرفة بدفعه للأمام'],
          optionsEn: ['Opening a desk drawer toward yourself', 'Kicking a soccer ball away', 'Pushing a shopping cart', 'Pushing a door closed'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين قوة السحب والدفع',
          conceptTestedEn: 'Push vs Pull Identification',
          explanationAr: 'قوة السحب هي جذب أو شد الشيء في اتجاهك، مثل فتح درج المكتب وشد الحبل.',
          explanationEn: 'A pull force draws an object closer to the source of the force.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
