import type { Lecture } from '../types';

// ============================================================================
// PRIMARY MATH — GRADE 2 (الماث للصف الثاني الابتدائي - نظام التعليم 2.0 المعتمد لمدارس اللغات)
// Official Egyptian Language Schools & Experimental Schools Curriculum (Edu 2.0 - Primary 2 Math):
// Lecture 1: Bar Graphs, Pictographs, Line Plots & Mental Math Strategies (Doubles & Making 10)
// Lecture 2: 2D & 3D Shapes & Place Value up to 999 (Standard, Expanded & Word Forms)
// Lecture 3: 2-Digit & 3-Digit Addition and Subtraction with Regrouping (Carrying & Borrowing)
// Lecture 4: Egyptian Money, Length Measurement (cm & m), Time (to 5 min), Fractions & Arrays
// ============================================================================

export const PRIMARY_MATH_G2_LECTURES: Lecture[] = [
  // ── LECTURE 1: DATA, GRAPHS & MENTAL MATH STRATEGIES ──
  {
    id: 'p2-math-1',
    order: 1,
    titleAr: 'المحاضرة 1: الرسوم البيانية واستراتيجيات الحساب الذهني (Bar Graphs & Mental Math)',
    titleEn: 'Lecture 1: Bar Graphs, Pictographs & Mental Math Strategies (Doubles & Making 10)',
    subtitleAr: 'إنشاء وقراءة الرسوم البيانية بالأعمدة والنقاط، واستراتيجيات الجمع الذهني السريع بالمضاعفات وتكوين العدد 10',
    subtitleEn: 'Collect and graph data using Bar Graphs & Line Plots, and master mental math strategies (Doubles & Making 10).',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'Chapter 1: Graphs & Mental Math Strategies',
    unitTitleEn: 'Chapter 1: Graphs & Mental Math Strategies',
    lessonNumberAr: 'الدرس 1: التمثيل البياني واستراتيجيات الجمع الذهني',
    lessonNumberEn: 'Lesson 1: Bar Graphs, Pictographs & Mental Math',

    keyConceptsAr: [
      'الرسم البياني بالأعمدة (Bar Graph): طريقة بصرية لتمثيل البيانات باستخدام أعمدة ملونة رأسية أو أفقية، ويتكون من: العنوان (Title)، المحورين (Axes)، المقياس (Scale: 1s, 2s, 5s)، والتسميات (Labels).',
      'الرسم البياني المصور (Pictograph): استخدام الصور أو الرموز لتمثيل البيانات مع وجود مفتاح للرسم (Key يوضح قيمة كل صورة، مثل: كل 🌟 = 2 تلاميذ).',
      'مخطط التمثيل بالنقاط (Line Plot): تمثيل تكرار البيانات بوضع علامات (X) فوق خط الأعداد.',
      'استراتيجيات الحساب الذهني (Mental Math Strategies):',
      '  - حقائق المضاعفات (Doubles Facts): $5+5=10$, $6+6=12$, $7+7=14$, $8+8=16$, $9+9=18$.',
      '  - المضاعفات زائد 1 (Doubles Plus 1): لحل $6+7$ نفكر: $6+6+1 = 12+1 = 13$.',
      '  - تكوين العدد 10 (Making 10 Strategy): لحل $8+5$ نفكك الـ 5 إلى $(2+3)$ ليصبح: $8+2+3 = 10+3 = 13$.'
    ],
    keyConceptsEn: [
      'Bar Graph Components: Title, Horizontal/Vertical Axes, Scale (counting by 1s or 2s), and Category Labels.',
      'Pictographs & Keys: Representing data with symbols where the Key defines the unit value per symbol.',
      'Line Plots: Showing frequency of data points using (X) marks on a number line.',
      'Mental Math Strategies: Doubles Facts ($7+7=14$), Doubles Plus One ($7+8=15$), and Making 10 ($9+6 = 9+1+5 = 15$).'
    ],

    conceptMapAr: [
      'البيانات والحساب الذهني ➔ قراءة الأعمدة البيانية (Bar Graphs) ➔ قراءة المخططات المصورة (Pictographs) ➔ استراتيجيات الجمع الذهني (Doubles + Making 10)'
    ],
    conceptMapEn: [
      'Data & Mental Math ➔ Bar Graphs (Scale 1s & 2s) ➔ Pictographs & Keys ➔ Mental Addition (Doubles & Making 10)'
    ],

    learningOutcomesAr: [
      'أن يقرأ التلميذ البيانات من الرسوم البيانية بالأعمدة والرسوم المصورة ويجيب عن أسئلة المقارنة والجمع والطرح.',
      'أن يطبق استراتيجية المضاعفات (Doubles Facts) والمضاعفات زائد 1 في الجمع السريع.',
      'أن يستخدم استراتيجية تكوين العدد 10 (Making 10) لحساب ناتج الجمع ذهنياً دون استخدام الأصابع.'
    ],
    learningOutcomesEn: [
      'Read and interpret Bar Graphs and Pictographs with scales of 1 and 2.',
      'Apply Doubles and Doubles-plus-one facts for rapid mental addition.',
      'Decompose numbers using the Making 10 strategy to solve addition problems mentally.'
    ],

    vocabulary: [
      {
        termAr: 'الرسم البياني بالأعمدة (Bar Graph)',
        termEn: 'Bar Graph',
        definitionAr: 'رسم يعرض البيانات باستخدام مستطيلات ملونة (أعمدة) لتسهيل المقارنة بين المجموعات.'
      },
      {
        termAr: 'مفتاح الرسم (Key)',
        termEn: 'Key',
        definitionAr: 'دليل يوضح كم تمثل كل صورة في الرسم البياني المصور (e.g., Each 🍎 = 2 apples).'
      },
      {
        termAr: 'المقياس (Scale)',
        termEn: 'Scale',
        definitionAr: 'الأرقام المتسلسلة على محور الرسم البياني (كالعد بمقدار 1 أو 2 أو 5).'
      },
      {
        termAr: 'المضاعفات (Doubles Facts)',
        termEn: 'Doubles Facts',
        definitionAr: 'جمع العدد مع نفسه للحصول على ناتج سريع ومحفوظ (مثل: $6+6=12$).'
      },
      {
        termAr: 'تكوين العدد 10 (Making 10)',
        termEn: 'Making 10',
        definitionAr: 'تفكيك أحد العددين لإكمال العدد الآخر إلى $10$ لتبسيط الجمع ذهنياً.'
      }
    ],

    warmupHookAr: 'Welcome Grade 2 Math Champions! 🌟 سأل المعلم تلاميذه في الفصل: "ما هي فاكهتكم المفضلة؟" فأجاب 8 تلاميذ بأنهم يفضلون التفاح، و 6 يفضلون الموز، و 4 يفضلون الفراولة! كيف نعرض هذه الإجابات في رسم بياني ملون رائع؟ وكيف نجمع الأرقام في عقلنا بلمح البصر دون أصابعنا؟ تعالوا لنكتشف أسرار الماث الممتعة!',
    warmupHookEn: 'Welcome Grade 2 Math Champions! The teacher asked: "What is your favorite fruit?" 8 chose Apples, 6 chose Bananas, and 4 chose Strawberries! How can we showcase this data on a colorful Bar Graph and calculate totals mentally in seconds? Let us explore!',

    mainContentAr: `
### 1. Understanding Bar Graphs (الرسوم البيانية بالأعمدة)
A **Bar Graph** is a visual tool used to compare quantities:
* **Key Parts of a Bar Graph:**
  1. **Title:** Tells what the graph is about (e.g., *Favorite Pets*).
  2. **Categories (Labels):** The groups being compared (e.g., *Cats, Dogs, Birds*).
  3. **Scale:** The numbers along the axis (e.g., $0, 2, 4, 6, 8, 10$).
  4. **Bars:** The colored rectangles whose heights/lengths show the exact count.

* **Example:** In a class survey:
  * 🐱 **Cats:** $8$ votes.
  * 🐶 **Dogs:** $10$ votes.
  * 🐦 **Birds:** $4$ votes.
  * *Question:* How many more students chose Dogs than Birds?
  * *Solution:* $10 - 4 = 6$ more students.

---

### 2. Pictographs and Line Plots (الرسوم المصورة والنقاط)
* **Pictograph:** Uses symbols/pictures to show data.
  * **Always check the KEY first!**
  * If the Key says: **Each ⭐️ = 2 stars**, then 3 stars = $2 + 2 + 2 = 6$.
* **Line Plot:** Shows data frequency along a number line with **X** marks.

---

### 3. Mental Math Strategies (استراتيجيات الحساب الذهني)

#### A. Doubles Facts & Doubles Plus 1:
* Memorize your core doubles:
  $$\\begin{aligned}
  1 + 1 &= 2 & 2 + 2 &= 4 & 3 + 3 &= 6 \\\\
  4 + 4 &= 8 & 5 + 5 &= 10 & 6 + 6 &= 12 \\\\
  7 + 7 &= 14 & 8 + 8 &= 16 & 9 + 9 &= 18
  \\end{aligned}$$
* **Doubles Plus 1 Strategy:**
  * To solve: $7 + 8$ ➔ Think: $(7 + 7) + 1 = 14 + 1 = 15$.
  * To solve: $8 + 9$ ➔ Think: $(8 + 8) + 1 = 16 + 1 = 17$.

#### B. Making 10 Strategy (استراتيجية تكوين 10):
* $10$ is a friendly benchmark number!
* To solve: $8 + 5$
  * Break $5$ into $2 + 3$ (because $8 + 2 = 10$).
  * Then: $(8 + 2) + 3 = 10 + 3 = 13$.
* To solve: $9 + 6$
  * Break $6$ into $1 + 5$ (because $9 + 1 = 10$).
  * Then: $(9 + 1) + 5 = 10 + 5 = 15$.

---

### 4. Interactive Bar Graph Diagram
\`\`\`xml
<svg viewBox="0 0 700 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="700" height="230" fill="#0f172a" rx="16"/>
  <!-- Graph Title -->
  <text x="350" y="30" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">📊 Favorite Class Pets (Scale by 2s)</text>
  
  <!-- Y-Axis Grid Lines & Numbers -->
  <line x1="120" y1="180" x2="620" y2="180" stroke="#334155" stroke-width="2"/>
  <line x1="120" y1="140" x2="620" y2="140" stroke="#334155" stroke-dasharray="4"/>
  <line x1="120" y1="100" x2="620" y2="100" stroke="#334155" stroke-dasharray="4"/>
  <line x1="120" y1="60" x2="620" y2="60" stroke="#334155" stroke-dasharray="4"/>
  
  <text x="105" y="185" fill="#94a3b8" font-size="12" text-anchor="end">0</text>
  <text x="105" y="145" fill="#94a3b8" font-size="12" text-anchor="end">4</text>
  <text x="105" y="105" fill="#94a3b8" font-size="12" text-anchor="end">8</text>
  <text x="105" y="65" fill="#94a3b8" font-size="12" text-anchor="end">12</text>

  <!-- Bars -->
  <!-- Dog (10) -->
  <rect x="180" y="80" width="80" height="100" fill="#38bdf8" rx="4"/>
  <text x="220" y="70" fill="#38bdf8" font-weight="bold" text-anchor="middle">10</text>
  <text x="220" y="200" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">🐶 Dog</text>

  <!-- Cat (8) -->
  <rect x="310" y="100" width="80" height="80" fill="#34d399" rx="4"/>
  <text x="350" y="90" fill="#34d399" font-weight="bold" text-anchor="middle">8</text>
  <text x="350" y="200" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">🐱 Cat</text>

  <!-- Fish (6) -->
  <rect x="440" y="120" width="80" height="60" fill="#fbbf24" rx="4"/>
  <text x="480" y="110" fill="#fbbf24" font-weight="bold" text-anchor="middle">6</text>
  <text x="480" y="200" fill="#f8fafc" font-size="13" font-weight="bold" text-anchor="middle">🐟 Fish</text>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Bar Graphs & Pictographs
* **Bar Graph:** Displays category data with rectangular bars along a scale of 1s, 2s, or 5s.
* **Pictograph:** Uses symbols representing numerical values defined by the Key.

### 2. Mental Math Strategies
* **Doubles Facts:** $6+6=12$, $7+7=14$, $8+8=16$.
* **Doubles Plus One:** $7+8 = (7+7)+1 = 15$.
* **Making 10:** $8+6 = 8+2+4 = 10+4 = 14$.
`,

    workedExamples: [
      {
        id: 'ex-m2-1-1',
        titleAr: 'مثال 1: قراءة وحساب الفرق من الرسم البياني',
        titleEn: 'Example 1: Interpreting Bar Graph Difference',
        problemAr: 'من الرسم البياني السابق للحيوانات الأليفة: كم يزيد عدد الطلاب الذين يفضلون الكلب (10) عن الطلاب الذين يفضلون السمكة (6)؟',
        problemEn: 'From the bar graph: How many more students prefer Dogs (10) than Fish (6)?',
        stepByStepSolutionAr: [
          'الخطوة 1: نحدد عدد الطلاب الذين يفضلون الكلب من قمة العمود: 10 طلاب.',
          'الخطوة 2: نحدد عدد الطلاب الذين يفضلون السمكة من قمة العمود: 6 طلاب.',
          'الخطوة 3: كلمة "كم يزيد (How many more)" تدل على عملية الطرح (-):',
          'الحساب: $10 - 6 = 4$ طلاب.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Identify Dog votes from bar height = 10.',
          'Step 2: Identify Fish votes from bar height = 6.',
          'Step 3: "How many more" means subtraction: $10 - 6 = 4$.'
        ],
        finalAnswerAr: 'يزيد عدد محبي الكلاب بمقدار 4 طلاب ($10 - 6 = 4$).',
        finalAnswerEn: '4 more students ($10 - 6 = 4$).'
      },
      {
        id: 'ex-m2-1-2',
        titleAr: 'مثال 2: الجمع الذهني باستراتيجية تكوين 10',
        titleEn: 'Example 2: Mental Addition via Making 10',
        problemAr: 'احسب الناتج ذهنياً باستخدام استراتيجية تكوين 10: $9 + 7$.',
        problemEn: 'Calculate mentally using the Making 10 strategy: $9 + 7$.',
        stepByStepSolutionAr: [
          'الخطوة 1: نسأل أنفسنا: كم يحتاج العدد 9 ليصل إلى 10؟ يحتاج إلى 1.',
          'الخطوة 2: نأخذ 1 من العدد 7 فيتبقى 6 ($7 = 1 + 6$).',
          'الخطوة 3: نجمع: $(9 + 1) + 6 = 10 + 6 = 16$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: 9 needs 1 to make 10.',
          'Step 2: Decompose 7 into $1 + 6$.',
          'Step 3: Compute $(9 + 1) + 6 = 10 + 6 = 16$.'
        ],
        finalAnswerAr: '$9 + 7 = 16$.',
        finalAnswerEn: '$9 + 7 = 16$.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m2-1-1',
        problemAr: 'استخدم استراتيجية المضاعفات زائد 1 لحل: $8 + 9$.',
        problemEn: 'Use Doubles Plus 1 to solve: $8 + 9$.',
        solutionStepsAr: [
          'نستخدم مضاعف العدد الأصغر: $8 + 8 = 16$.',
          'نضيف 1 إلى الناتج: $16 + 1 = 17$.'
        ],
        solutionStepsEn: [
          'Use doubles of smaller number: $8 + 8 = 16$.',
          'Add 1 to the result: $16 + 1 = 17$.'
        ],
        finalAnswerAr: '$8 + 9 = 17$.',
        finalAnswerEn: '$8 + 9 = 17$.'
      }
    ],

    assessment: {
      id: 'as-m2-1',
      titleAr: 'اختبار تقييم المحاضرة 1: الرسوم البيانية والحساب الذهني',
      titleEn: 'Lecture 1 Assessment: Graphs & Mental Math',
      passingScore: 80,
      questions: [
        {
          id: 'q-m2-1-1',
          textAr: 'ما ناتج $6 + 7$ باستخدام استراتيجية المضاعفات زائد 1 (Doubles Plus 1)؟',
          textEn: 'What is $6 + 7$ using the Doubles Plus 1 strategy?',
          optionsAr: ['13', '12', '14', '15'],
          optionsEn: ['13', '12', '14', '15'],
          correctIndex: 0,
          conceptTestedAr: 'استراتيجية المضاعفات زائد 1',
          conceptTestedEn: 'Doubles Plus 1 Strategy',
          explanationAr: '$(6 + 6) + 1 = 12 + 1 = 13$.',
          explanationEn: '$(6 + 6) + 1 = 12 + 1 = 13$.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-1-2',
          textAr: 'إذا كان مفتاح الرسم البياني المصور (Key) يوضح أن كل 🍎 = 2 تفاحات، فما العدد الذي تمثله 4 تفاحات مرسومة؟',
          textEn: 'If a Pictograph Key states that each 🍎 = 2 apples, how many apples do 4 pictures represent?',
          optionsAr: ['8', '4', '6', '10'],
          optionsEn: ['8', '4', '6', '10'],
          correctIndex: 0,
          conceptTestedAr: 'قراءة مفتاح الرسم البياني المصور',
          conceptTestedEn: 'Pictograph Key Interpretation',
          explanationAr: '$4 \\times 2 = 2 + 2 + 2 + 2 = 8$ تفاحات.',
          explanationEn: '$4 \\times 2 = 8$ apples.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-1-3',
          textAr: 'باستخدام استراتيجية تكوين 10 (Making 10)، كيف نحل $8 + 6$؟',
          textEn: 'Using the Making 10 strategy, how do we solve $8 + 6$?',
          optionsAr: ['$(8 + 2) + 4 = 10 + 4 = 14$', '$(8 + 8) - 2 = 14$', '$8 + 5 + 1 = 14$', '$10 + 6 = 16$'],
          optionsEn: ['$(8 + 2) + 4 = 10 + 4 = 14$', '$(8 + 8) - 2 = 14$', '$8 + 5 + 1 = 14$', '$10 + 6 = 16$'],
          correctIndex: 0,
          conceptTestedAr: 'تكوين العدد 10',
          conceptTestedEn: 'Making 10 Mental Strategy',
          explanationAr: 'نفكك 6 إلى $2 + 4$، ليصبح: $8 + 2 + 4 = 10 + 4 = 14$.',
          explanationEn: 'Decompose 6 into $2 + 4$, yielding $10 + 4 = 14$.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-1-4',
          textAr: 'في رسم بياني بمقياس 2s، إذا كان عمود عصير البرتقال يصل إلى الرقم 8 وعمود عصير المانجو يصل إلى 12، فما مجموع الأصوات معاً؟',
          textEn: 'In a bar graph, if Orange Juice is at 8 and Mango Juice is at 12, what is the total number of votes?',
          optionsAr: ['20', '4', '18', '24'],
          optionsEn: ['20', '4', '18', '24'],
          correctIndex: 0,
          conceptTestedAr: 'جمع البيانات من الرسم البياني',
          conceptTestedEn: 'Adding Quantities from a Bar Graph',
          explanationAr: 'المجموع الكلي = $8 + 12 = 20$ صوتاً.',
          explanationEn: 'Total = $8 + 12 = 20$.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-1-5',
          textAr: 'ما هو مضاعف العدد 8 ($8 + 8$)؟',
          textEn: 'What is the double of 8 ($8 + 8$)?',
          optionsAr: ['16', '14', '18', '15'],
          optionsEn: ['16', '14', '18', '15'],
          correctIndex: 0,
          conceptTestedAr: 'حقائق المضاعفات',
          conceptTestedEn: 'Doubles Facts',
          explanationAr: '$8 + 8 = 16$.',
          explanationEn: '$8 + 8 = 16$.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: 2D & 3D GEOMETRIC SHAPES & PLACE VALUE UP TO 999 ──
  {
    id: 'p2-math-2',
    order: 2,
    titleAr: 'المحاضرة 2: الأشكال الهندسية والقيمة المكانية حتى 999 (Shapes & Place Value up to 999)',
    titleEn: 'Lecture 2: 2D/3D Geometric Shapes & Place Value up to 999 (Hundreds, Tens & Ones)',
    subtitleAr: 'خواص الأشكال ثنائية وثلاثية الأبعاد (الأضلاع والرؤوس والأوجه)، والقيمة المكانية للأعداد حتى 999 بالصيغة القياسية والممتدة واللفظية',
    subtitleEn: 'Explore 2D/3D shape attributes and master Place Value up to 999 (Standard, Expanded, and Word forms).',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'Chapter 2: Geometry & Numbers up to 999',
    unitTitleEn: 'Chapter 2: Geometry & Numbers up to 999',
    lessonNumberAr: 'الدرس 2: الأشكال الهندسية والقيمة المكانية حتى 999',
    lessonNumberEn: 'Lesson 2: 2D/3D Shapes & 3-Digit Place Value',

    keyConceptsAr: [
      'الأشكال ثنائية الأبعاد (2D Flat Shapes): أشكال مستوية لها أضلاع مستقيمة (Sides) ورؤوس (Vertices):',
      '  - Triangle: 3 sides, 3 vertices.',
      '  - Quadrilaterals (Square, Rectangle, Trapezoid, Rhombus): 4 sides, 4 vertices.',
      '  - Pentagon: 5 sides, 5 vertices. | Hexagon: 6 sides, 6 vertices.',
      '  - Circle: 0 sides, 0 vertices (curved line).',
      'الأشكال ثلاثية الأبعاد (3D Solid Shapes): مجسمات لها أوجه (Faces)، حواف (Edges)، ورؤوس (Vertices):',
      '  - Cube & Rectangular Prism (Cuboid): 6 flat faces, 12 edges, 8 vertices.',
      '  - Cylinder: 2 circular flat faces, 0 edges, 0 vertices.',
      '  - Cone: 1 circular face, 1 apex/vertex.',
      '  - Sphere: 0 flat faces, 0 edges, 0 vertices.',
      'القيمة المكانية حتى 999 (Place Value up to 999):',
      '  - المنازل الثلاث: الآحاد (Ones), العشرات (Tens), المئات (Hundreds).',
      '  - مثال للعدد $468$:',
      '    * Standard Form: $468$.',
      '    * Expanded Form: $400 + 60 + 8$.',
      '    * Word Form: Four hundred sixty-eight.',
      '    * Place Value of 4 = Hundreds (Value = 400), Place Value of 6 = Tens (Value = 60), Place Value of 8 = Ones (Value = 8).'
    ],
    keyConceptsEn: [
      '2D Shapes & Attributes: Triangle (3s, 3v), Quadrilaterals (4s, 4v), Pentagon (5s, 5v), Hexagon (6s, 6v), Circle (0s, 0v).',
      '3D Solids & Attributes: Cube/Cuboid (6 faces, 12 edges, 8 vertices), Cylinder (2 faces), Cone (1 vertex), Sphere (0 faces).',
      'Place Value up to 999: Hundreds (H), Tens (T), and Ones (O).',
      'Number Representations: Standard Form ($572$), Expanded Form ($500 + 70 + 2$), and Word Form ("Five hundred seventy-two").'
    ],

    conceptMapAr: [
      'الهندسة والأعداد حتى 999 ➔ الأشكال ثنائية الأبعاد (أضلاع ورؤوس) ➔ المجسمات ثلاثية الأبعاد (أوجه وحواف) ➔ منازل الأعداد (Ones, Tens, Hundreds) ➔ الصيغ الثلاث (Standard, Expanded, Word)'
    ],
    conceptMapEn: [
      'Geometry & Place Value ➔ 2D Shapes (Sides & Vertices) ➔ 3D Solids (Faces, Edges, Vertices) ➔ 3-Digit Place Value (H, T, O) ➔ Standard / Expanded / Word Forms'
    ],

    learningOutcomesAr: [
      'أن يحدد التلميذ عدد الأضلاع والرؤوس للأشكال الهندسية ثنائية الأبعاد (2D) والمجسمات (3D).',
      'أن يحدد القيمة المكانية (Place Value) وقيمة الرقم (Value) في أعداد حتى 999.',
      'أن يكتب الأعداد بالصيغة القياسية (Standard)، والصيغة الممتدة (Expanded)، والصيغة اللفظية (Word Form).'
    ],
    learningOutcomesEn: [
      'Classify 2D shapes and 3D solids by their sides, vertices, faces, and edges.',
      'Determine the place value and face value of digits within 3-digit numbers (0-999).',
      'Convert 3-digit numbers between Standard, Expanded, and Word forms.'
    ],

    vocabulary: [
      {
        termAr: 'المئات (Hundreds)',
        termEn: 'Hundreds',
        definitionAr: 'المنزلة الثالثة في العدد، وكل $1$ مئات يمثل $10$ عشرات أو $100$ آحاد.'
      },
      {
        termAr: 'الصيغة الممتدة (Expanded Form)',
        termEn: 'Expanded Form',
        definitionAr: 'كتابة العدد كمجموع قيم أرقامه (مثل: $354 = 300 + 50 + 4$).'
      },
      {
        termAr: 'الصيغة القياسية (Standard Form)',
        termEn: 'Standard Form',
        definitionAr: 'كتابة العدد بالأرقام المعتادة فقط (مثل: $354$).'
      },
      {
        termAr: 'وجه (Face) وحافة (Edge)',
        termEn: 'Face & Edge',
        definitionAr: 'الوجه هو السطح المستوي في المجسم، والحافة هي الخط المستقيم الذي يلتقي عنده وجهان.'
      }
    ],

    warmupHookAr: 'انظر حولك! صندوق الهدايا مجسم مكعب (Cube) له 6 أوجه، وإشارة المرور شكل سداسي (Hexagon)! والآن تخيل أن معك $5$ أوراق من فئة الـ 100 جنيه، و $3$ ورقات من فئة الـ 10 جنيهات، و $4$ جنيهات معدنية؛ كم جنيهاً معك؟ معك $534$ جنيهاً! تعال لنتعلم قراءة وكتابة الأعداد حتى 999 باحتراف!',
    warmupHookEn: 'Look around! A gift box is a 3D Cube with 6 flat faces! Imagine having 5 hundred-pound bills, 3 ten-pound bills, and 4 one-pound coins: you have 534 LE! Let us master 3-digit place value and geometry!',

    mainContentAr: `
### 1. 2D Shapes vs. 3D Solids (الأشكال ثنائية وثلاثية الأبعاد)

#### A. 2D Shapes (Flat Shapes):
* **Triangle:** 3 sides, 3 vertices. 🔺
* **Square & Rectangle:** 4 sides, 4 vertices. 🟦
* **Pentagon:** 5 sides, 5 vertices. ⬟
* **Hexagon:** 6 sides, 6 vertices. ⬡
* **Circle:** 0 sides, 0 vertices (curved shape). ⚪

#### B. 3D Solids (Three-Dimensional Shapes):
* **Cube & Rectangular Prism (Cuboid):** 6 flat faces, 12 edges, 8 vertices. 🧊
* **Cylinder:** 2 circular flat faces, 0 edges, 0 vertices. 🥫
* **Cone:** 1 flat circular face, 0 edges, 1 apex/vertex. 🍦
* **Sphere:** 0 flat faces, 0 edges, 0 vertices (perfectly round ball). ⚽

---

### 2. Place Value up to 999 (Hundreds, Tens, Ones)
In any 3-digit number like **$742$**:
* **$7$ is in the Hundreds place (H):** Value = **$700$**.
* **$4$ is in the Tens place (T):** Value = **$40$**.
* **$2$ is in the Ones place (O):** Value = **$2$**.

#### The Three Number Forms:
1. **Standard Form:** **$742$**
2. **Expanded Form:** **$700 + 40 + 2$**
3. **Word Form:** **Seven hundred forty-two**

---

### 3. Comparing and Ordering 3-Digit Numbers ($> , < , =$)
* **Rule:** To compare two 3-digit numbers:
  1. First compare the **Hundreds (H)**: The number with more hundreds is greater! ($512 > 389$).
  2. If Hundreds are equal, compare the **Tens (T)**: ($674 > 649$).
  3. If Tens are equal, compare the **Ones (O)**: ($856 > 852$).

---

### 4. Interactive Place Value & Shapes Diagram
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Place Value Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">Place Value of 584</text>
    
    <!-- Hundreds -->
    <rect x="25" y="60" width="85" height="70" fill="#0369a1" rx="8"/>
    <text x="67" y="85" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">5</text>
    <text x="67" y="105" fill="#bae6fd" font-size="12" text-anchor="middle">Hundreds</text>
    <text x="67" y="122" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">500</text>

    <!-- Tens -->
    <rect x="122" y="60" width="85" height="70" fill="#0284c7" rx="8"/>
    <text x="164" y="85" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">8</text>
    <text x="164" y="105" fill="#bae6fd" font-size="12" text-anchor="middle">Tens</text>
    <text x="164" y="122" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">80</text>

    <!-- Ones -->
    <rect x="220" y="60" width="85" height="70" fill="#0ea5e9" rx="8"/>
    <text x="262" y="85" fill="#ffffff" font-size="20" font-weight="bold" text-anchor="middle">4</text>
    <text x="262" y="105" fill="#bae6fd" font-size="12" text-anchor="middle">Ones</text>
    <text x="262" y="122" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">4</text>

    <text x="165" y="165" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">Expanded: 500 + 80 + 4 = 584</text>
  </g>

  <!-- Shapes Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">2D & 3D Geometry</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">🔺 <tspan fill="#34d399" font-weight="bold">Triangle:</tspan> 3 sides, 3 vertices</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">🟦 <tspan fill="#34d399" font-weight="bold">Rectangle:</tspan> 4 sides, 4 vertices</text>
    <text x="25" y="130" fill="#f8fafc" font-size="13">🧊 <tspan fill="#34d399" font-weight="bold">Cube:</tspan> 6 faces, 12 edges, 8 vertices</text>
    <text x="25" y="160" fill="#f8fafc" font-size="13">🥫 <tspan fill="#34d399" font-weight="bold">Cylinder:</tspan> 2 circular flat faces</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. 2D Shapes & 3D Solids
* **Triangle:** 3 sides, 3 vertices.
* **Pentagon:** 5 sides, 5 vertices | **Hexagon:** 6 sides, 6 vertices.
* **Cube/Prism:** 6 faces, 12 edges, 8 vertices.

### 2. Place Value up to 999
* **$684$:** $6$ Hundreds ($600$) + $8$ Tens ($80$) + $4$ Ones ($4$).
* **Expanded Form:** $600 + 80 + 4$.
* **Word Form:** Six hundred eighty-four.
`,

    workedExamples: [
      {
        id: 'ex-m2-2-1',
        titleAr: 'مثال 1: كتابة العدد بالصيغة الممتدة وقيم المنازل',
        titleEn: 'Example 1: Expanded Form of 3-Digit Number',
        problemAr: 'اكتب العدد $639$ بالصيغة الممتدة (Expanded Form)، وحدد قيمة الرقم $6$.',
        problemEn: 'Write 639 in Expanded Form and find the value of digit 6.',
        stepByStepSolutionAr: [
          'الخطوة 1: نحدد منازل الأرقام: $6$ مئات، $3$ عشرات، $9$ آحاد.',
          'الخطوة 2: نحسب قيمة كل رقم: قيمة 6 = $600$، قيمة 3 = $30$، قيمة 9 = $9$.',
          'الخطوة 3: الصيغة الممتدة: $639 = 600 + 30 + 9$.',
          'الاستنتاج: قيمة الرقم 6 هي $600$ (لأنه في منزلة المئات Hundreds).'
        ],
        stepByStepSolutionEn: [
          'Step 1: Identify positions: 6 Hundreds, 3 Tens, 9 Ones.',
          'Step 2: Values: $600, 30, 9$.',
          'Step 3: Expanded form: $600 + 30 + 9$.'
        ],
        finalAnswerAr: 'الصيغة الممتدة: $600 + 30 + 9$ ، وقيمة الرقم 6 = $600$.',
        finalAnswerEn: 'Expanded Form: $600 + 30 + 9$; Value of 6 is 600.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m2-2-1',
        problemAr: 'قارن باستخدام ($> , < , =$): \n1. $548 \\; ...... \\; 584$ \n2. $700 + 30 + 5 \\; ...... \\; 735$',
        problemEn: 'Compare ($> , < , =$): \n1. $548 \\; ...... \\; 584$ \n2. $700 + 30 + 5 \\; ...... \\; 735$',
        solutionStepsAr: [
          'في المسألة 1: المئات متساوية (5 = 5)، ننظر للعشرات: 4 عشرات أصغر من 8 عشرات ➔ $548 < 584$.',
          'في المسألة 2: $700 + 30 + 5 = 735$ ➔ $735 = 735$.'
        ],
        solutionStepsEn: [
          '1. Tens digit: $4 < 8 \\implies 548 < 584$.',
          '2. $700 + 30 + 5 = 735 \\implies 735 = 735$.'
        ],
        finalAnswerAr: '1. $548 < 584$ \n2. $700 + 30 + 5 = 735$',
        finalAnswerEn: '1. $548 < 584$ \n2. $700 + 30 + 5 = 735$'
      }
    ],

    assessment: {
      id: 'as-m2-2',
      titleAr: 'اختبار تقييم المحاضرة 2: الأشكال الهندسية والأعداد حتى 999',
      titleEn: 'Lecture 2 Assessment: Shapes & Numbers up to 999',
      passingScore: 80,
      questions: [
        {
          id: 'q-m2-2-1',
          textAr: 'ما هي قيمة الرقم 7 (Value of digit 7) في العدد $745$؟',
          textEn: 'What is the value of digit 7 in the number 745?',
          optionsAr: ['700', '70', '7', '7000'],
          optionsEn: ['700', '70', '7', '7000'],
          correctIndex: 0,
          conceptTestedAr: 'قيمة الرقم في منزلة المئات',
          conceptTestedEn: 'Value of Digit in Hundreds Place',
          explanationAr: 'الرقم 7 يقع في منزلة المئات (Hundreds)، إذن قيمته تساوي $700$.',
          explanationEn: 'Digit 7 is in the hundreds place, so its value is 700.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-2-2',
          textAr: 'كم وجهاً مستوياً (Flat faces) للمكعب (Cube)؟',
          textEn: 'How many flat faces does a Cube have?',
          optionsAr: ['6', '8', '12', '4'],
          optionsEn: ['6', '8', '12', '4'],
          correctIndex: 0,
          conceptTestedAr: 'خواص المكعب: عدد الأوجه',
          conceptTestedEn: 'Cube Attributes: Number of Faces',
          explanationAr: 'المكعب يمتلك 6 أوجه مستوية مربعة متطابقة.',
          explanationEn: 'A Cube has 6 square flat faces.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-2-3',
          textAr: 'ما هي الصيغة القياسية (Standard Form) للعدد: $400 + 90 + 3$؟',
          textEn: 'What is the standard form of $400 + 90 + 3$?',
          optionsAr: ['493', '439', '4903', '4093'],
          optionsEn: ['493', '439', '4903', '4093'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل من الصيغة الممتدة للقياسية',
          conceptTestedEn: 'Expanded to Standard Form Conversion',
          explanationAr: '$400 + 90 + 3 = 493$.',
          explanationEn: '$400 + 90 + 3 = 493$.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-2-4',
          textAr: 'ما الشكل الهندسي ثنائي الأبعاد الذي يمتلك 5 أضلاع و 5 رؤوس؟',
          textEn: 'Which 2D shape has 5 sides and 5 vertices?',
          optionsAr: ['Pentagon (خماسي الأضلاع)', 'Hexagon (سداسي)', 'Triangle (مثلث)', 'Rectangle (مستطيل)'],
          optionsEn: ['Pentagon', 'Hexagon', 'Triangle', 'Rectangle'],
          correctIndex: 0,
          conceptTestedAr: 'الشكل الخماسي Pentagon',
          conceptTestedEn: 'Pentagon Properties',
          explanationAr: 'الـ Pentagon له 5 أضلاع و 5 رؤوس، بينما الـ Hexagon له 6 أضلاع.',
          explanationEn: 'A Pentagon has 5 sides and 5 vertices.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-2-5',
          textAr: 'أي مقارنة من المقارنات التالية صحيحة؟',
          textEn: 'Which comparison statement is true?',
          optionsAr: ['$682 > 659$', '$345 > 435$', '$819 < 809$', '$500 = 50$'],
          optionsEn: ['$682 > 659$', '$345 > 435$', '$819 < 809$', '$500 = 50$'],
          correctIndex: 0,
          conceptTestedAr: 'مقارنة الأعداد المكونة من 3 أرقام',
          conceptTestedEn: 'Comparing 3-Digit Numbers',
          explanationAr: 'في $682$ و $659$ المئات متساوية (6)، و 8 عشرات أكبر من 5 عشرات، إذن $682 > 659$.',
          explanationEn: '$682 > 659$ because 8 tens is greater than 5 tens.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: 2-DIGIT & 3-DIGIT ADDITION & SUBTRACTION WITH REGROUPING ──
  {
    id: 'p2-math-3',
    order: 3,
    titleAr: 'المحاضرة 3: الجمع والطرح بإعادة التجميع ضمن 999 (Addition & Subtraction with Regrouping)',
    titleEn: 'Lecture 3: 2-Digit & 3-Digit Addition and Subtraction with Regrouping (up to 999)',
    subtitleAr: 'إتقان الجمع بالحمل إلى العشرات والمئات، والطرح بالاستلاف وإعادة التجميع خطوة بخطوة وحل المسائل اللفظية',
    subtitleEn: 'Master multi-digit addition carrying and subtraction borrowing within 999 with step-by-step algorithms.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'Chapter 3: Operations with Regrouping',
    unitTitleEn: 'Chapter 3: Operations with Regrouping',
    lessonNumberAr: 'الدرس 3: الجمع والطرح بإعادة التجميع',
    lessonNumberEn: 'Lesson 3: Addition & Subtraction with Regrouping',

    keyConceptsAr: [
      'الجمع مع إعادة التجميع (Addition with Regrouping - Carrying):',
      '  - عندما يكون مجموع الآحاد 10 أو أكثر: نكتب رقم الآحاد ونرفع الـ 1 إلى عمود العشرات (Carry 1 to Tens).',
      '  - مثال: $47 + 28$:',
      '    * الآحاد: $7 + 8 = 15$ (نكتب 5 ونحمل 1 للعشرات).',
      '    * العشرات: $1 + 4 + 2 = 7$ ➔ الناتج = $75$.',
      '  - جمع 3 أرقام: $348 + 276$:',
      '    * الآحاد: $8 + 6 = 14$ (نكتب 4 ونحمل 1).',
      '    * العشرات: $1 + 4 + 7 = 12$ (نكتب 2 ونحمل 1 للمئات).',
      '    * المئات: $1 + 3 + 2 = 6$ ➔ الناتج = $624$.',
      'الطرح مع إعادة التجميع (Subtraction with Regrouping - Borrowing):',
      '  - إذا كان الرقم العلوي في الآحاد أصغر من السفلي: نستلف 1 من العشرات (1 Ten becomes 10 Ones).',
      '  - مثال: $63 - 27$:',
      '    * الآحاد: $3 - 7$ لا يجوز! نستلف 1 من العشرات (الـ 6 تصبح 5، والـ 3 تصبح 13).',
      '    * الآحاد: $13 - 7 = 6$.',
      '    * العشرات: $5 - 2 = 3$ ➔ الناتج = $36$.',
      '  - طرح 3 أرقام: $542 - 186 = 356$.'
    ],
    keyConceptsEn: [
      'Addition with Regrouping (Carrying): If ones sum $\\ge 10$, write ones digit and carry $1$ ten to Tens column.',
      'Subtraction with Regrouping (Borrowing): If top digit $<$ bottom digit, borrow $1$ ten ($= 10$ ones) from Tens column.',
      '3-Digit Vertical Algorithm: Align Hundreds, Tens, and Ones accurately.',
      'Real-world story problems with keywords: "Total / In all" (+), "Left / Difference / How many more" (-).'
    ],

    conceptMapAr: [
      'العمليات الحسابية ➔ جمع رقمين وثلاثة أرقام بالحمل (Carry 1) ➔ طرح رقمين وثلاثة أرقام بالاستلاف (Borrow 1) ➔ حل المسائل اللفظية الحياتية'
    ],
    conceptMapEn: [
      'Operations ➔ 2-Digit & 3-Digit Addition with Regrouping (Carry 1) ➔ Subtraction with Regrouping (Borrow 1) ➔ Word Problems'
    ],

    learningOutcomesAr: [
      'أن يجمع التلميذ أعداداً من رقمين و 3 أرقام مع إعادة التجميع (الحمل) بدقة تامة.',
      'أن يطرح أعداداً من رقمين و 3 أرقام مع إعادة التجميع (الاستلاف).',
      'أن يحل المسائل الكلامية اللفظية ويحدد العملية المناسبة (جمع أم طرح).'
    ],
    learningOutcomesEn: [
      'Add 2-digit and 3-digit numbers with regrouping accurately.',
      'Subtract 2-digit and 3-digit numbers with regrouping across place values.',
      'Solve one-step and multi-step word problems involving real-life addition and subtraction.'
    ],

    vocabulary: [
      {
        termAr: 'إعادة التجميع (Regrouping)',
        termEn: 'Regrouping',
        definitionAr: 'تحويل 10 آحاد إلى 1 عشرات (في الجمع)، أو تفكيك 1 عشرات إلى 10 آحاد (في الطرح).'
      },
      {
        termAr: 'الحمل (Carrying)',
        termEn: 'Carrying',
        definitionAr: 'نقل رقم العشرات الزائد عن 9 إلى المنزلة الأعلى التالية في الجمع.'
      },
      {
        termAr: 'الاستلاف (Borrowing)',
        termEn: 'Borrowing',
        definitionAr: 'أخذ 1 من منزلة العشرات أو المئات عندما لا يكفي الرقم العلوي في الطرح.'
      },
      {
        termAr: 'الفرق (Difference)',
        termEn: 'Difference',
        definitionAr: 'ناتج عملية الطرح بين عددين.'
      }
    ],

    warmupHookAr: 'تخيل أن لديك حصالة فيها $356$ جنيهاً، وأعطاك والدك $178$ جنيهاً لمكافأتك على تفوقك في المدرسة؛ كم أصبح معك؟ وعندما تشتري لعبة جميلة بـ $149$ جنيهاً، كم يتبقى في حصالتك؟ تعال لنتعلم خوارزمية الجمع والطرح بإعادة التجميع خطوة بخطوة كالأبطال!',
    warmupHookEn: 'You saved 356 LE and your parents rewarded you with 178 LE! How much do you have in total? When you buy a 149 LE game, how much is left? Let us master carrying and borrowing step-by-step!',

    mainContentAr: `
### 1. Addition with Regrouping (الجمع بالحمل)
When adding column by column from Right to Left:
* **Step 1: Add the Ones.** If sum is $10$ or more, **regroup** ($10$ ones $= 1$ ten). Write ones, carry $1$ to Tens.
* **Step 2: Add the Tens** (don't forget the carried $1$!).
* **Step 3: Add the Hundreds.**

* **Worked Example:**
  $$\\begin{array}{r@{\\quad}c@{\\,}c@{\\,}c}
  & \\mathbf{H} & \\mathbf{T} & \\mathbf{O} \\\\
  & & \\overset{1}{4} & \\overset{1}{7} \\\\
  + & 2 & 8 & 5 \\\\
  \\hline
  & 7 & 6 & 2
  \\end{array}$$
  * Ones: $7 + 5 = 12$ ➔ write **$2$**, carry **$1$** to Tens.
  * Tens: $1 + 4 + 8 = 13$ ➔ write **$3$**, carry **$1$** to Hundreds.
  * Hundreds: $1 + 4 + 2 = 7$ ➔ Total = **$732$**.

---

### 2. Subtraction with Regrouping (الطرح بالاستلاف)
* If top digit in Ones is smaller than bottom digit: **Borrow $1$ Ten** from Tens column.
  * The Tens digit decreases by $1$.
  * The Ones digit increases by $+10$.

* **Worked Example:** Solve $532 - 178$:
  $$\\begin{array}{r@{\\quad}c@{\\,}c@{\\,}c}
  & \\mathbf{H} & \\mathbf{T} & \\mathbf{O} \\\\
  & \\overset{4}{5} & \\overset{12}{\\cancel{3}} & \\overset{12}{\\cancel{2}} \\\\
  - & 1 & 7 & 8 \\\\
  \\hline
  & 3 & 5 & 4
  \\end{array}$$
  * Ones: $2 - 8$ (Cannot do!) ➔ Borrow $1$ Ten from $3$. Tens becomes $2$, Ones becomes $12$.
    * $12 - 8 = \\mathbf{4}$.
  * Tens: $2 - 7$ (Cannot do!) ➔ Borrow $1$ Hundred from $5$. Hundreds becomes $4$, Tens becomes $12$.
    * $12 - 7 = \\mathbf{5}$.
  * Hundreds: $4 - 1 = \\mathbf{3}$.
  * Result = **$354$**.

---

### 3. Interactive Addition & Subtraction Step Board
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Addition Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">Addition with Carrying: 358 + 267</text>
    
    <text x="60" y="75" fill="#fde047" font-size="14" font-weight="bold">¹   ¹</text>
    <text x="50" y="105" fill="#ffffff" font-size="20" font-family="monospace">  3 5 8</text>
    <text x="50" y="135" fill="#ffffff" font-size="20" font-family="monospace">+ 2 6 7</text>
    <line x1="50" y1="145" x2="160" y2="145" stroke="#38bdf8" stroke-width="2"/>
    <text x="50" y="175" fill="#34d399" font-size="22" font-family="monospace" font-weight="bold">  6 2 5</text>
    
    <text x="180" y="85" fill="#bae6fd" font-size="12">1. 8 + 7 = 15 (Write 5, Carry 1)</text>
    <text x="180" y="115" fill="#bae6fd" font-size="12">2. 1 + 5 + 6 = 12 (Write 2, Carry 1)</text>
    <text x="180" y="145" fill="#bae6fd" font-size="12">3. 1 + 3 + 2 = 6 (Total: 625)</text>
  </g>

  <!-- Subtraction Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#f43f5e" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#fda4af" font-size="16" font-weight="bold" text-anchor="middle">Subtraction with Borrowing: 524 - 186</text>
    
    <text x="60" y="75" fill="#fde047" font-size="13" font-weight="bold">⁴  ¹¹ ¹⁴</text>
    <text x="50" y="105" fill="#ffffff" font-size="20" font-family="monospace">  5 2 4</text>
    <text x="50" y="135" fill="#ffffff" font-size="20" font-family="monospace">- 1 8 6</text>
    <line x1="50" y1="145" x2="160" y2="145" stroke="#f43f5e" stroke-width="2"/>
    <text x="50" y="175" fill="#34d399" font-size="22" font-family="monospace" font-weight="bold">  3 3 8</text>
    
    <text x="180" y="85" fill="#fecdd3" font-size="12">1. 14 - 6 = 8 (Borrowed 1)</text>
    <text x="180" y="115" fill="#fecdd3" font-size="12">2. 11 - 8 = 3 (Borrowed 1)</text>
    <text x="180" y="145" fill="#fecdd3" font-size="12">3. 4 - 1 = 3 (Result: 338)</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Addition with Regrouping
* Align digits in H, T, O columns.
* If sum in Ones or Tens is $\\ge 10$, write unit digit and carry $1$.
* Example: $358 + 267 = 625$.

### 2. Subtraction with Regrouping
* Borrow $1$ from higher place value when top digit is smaller.
* Example: $524 - 186 = 338$.
`,

    workedExamples: [
      {
        id: 'ex-m2-3-1',
        titleAr: 'مثال 1: جمع 3 أرقام بالحمل',
        titleEn: 'Example 1: 3-Digit Addition with Carrying',
        problemAr: 'أوجد ناتج الجمع: $465 + 278$.',
        problemEn: 'Find the sum: $465 + 278$.',
        stepByStepSolutionAr: [
          'الخطوة 1: نجمع الآحاد: $5 + 8 = 13$ ➔ نكتب $3$ ونحمل $1$ فوق العشرات.',
          'الخطوة 2: نجمع العشرات: $1 + 6 + 7 = 14$ ➔ نكتب $4$ ونحمل $1$ فوق المئات.',
          'الخطوة 3: نجمع المئات: $1 + 4 + 2 = 7$.',
          'الناتج النهائي = $743$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Ones: $5 + 8 = 13$ (write 3, carry 1).',
          'Step 2: Tens: $1 + 6 + 7 = 14$ (write 4, carry 1).',
          'Step 3: Hundreds: $1 + 4 + 2 = 7$.',
          'Result = 743.'
        ],
        finalAnswerAr: '$465 + 278 = 743$.',
        finalAnswerEn: '$465 + 278 = 743$.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m2-3-1',
        problemAr: 'أوجد ناتج الطرح بالاستلاف: $734 - 258$.',
        problemEn: 'Find the difference: $734 - 258$.',
        solutionStepsAr: [
          'الآحاد: $4 - 8$ نستلف 1 من الـ 3 فتصبح 2، والـ 4 تصبح 14: $14 - 8 = 6$.',
          'العشرات: $2 - 5$ نستلف 1 من الـ 7 فتصبح 6، والـ 2 تصبح 12: $12 - 5 = 7$.',
          'المئات: $6 - 2 = 4$.'
        ],
        solutionStepsEn: [
          'Ones: $14 - 8 = 6$.',
          'Tens: $12 - 5 = 7$.',
          'Hundreds: $6 - 2 = 4$.'
        ],
        finalAnswerAr: '$734 - 258 = 476$.',
        finalAnswerEn: '$734 - 258 = 476$.'
      }
    ],

    assessment: {
      id: 'as-m2-3',
      titleAr: 'اختبار تقييم المحاضرة 3: الجمع والطرح بإعادة التجميع',
      titleEn: 'Lecture 3 Assessment: Addition & Subtraction with Regrouping',
      passingScore: 80,
      questions: [
        {
          id: 'q-m2-3-1',
          textAr: 'ما ناتج جمع: $358 + 247$؟',
          textEn: 'What is the sum of: $358 + 247$?',
          optionsAr: ['605', '595', '615', '505'],
          optionsEn: ['605', '595', '615', '505'],
          correctIndex: 0,
          conceptTestedAr: 'جمع أعداد من 3 أرقام بإعادة التجميع',
          conceptTestedEn: '3-Digit Addition with Regrouping',
          explanationAr: 'الآحاد: $8+7=15$ (5 ومعنا 1)، العشرات: $1+5+4=10$ (0 ومعنا 1)، المئات: $1+3+2=6$ ➔ الناتج $605$.',
          explanationEn: '$8+7=15$ (carry 1), $1+5+4=10$ (carry 1), $1+3+2=6 \\implies 605$.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-3-2',
          textAr: 'ما ناتج طرح: $842 - 365$؟',
          textEn: 'What is the difference: $842 - 365$?',
          optionsAr: ['477', '487', '577', '483'],
          optionsEn: ['477', '487', '577', '483'],
          correctIndex: 0,
          conceptTestedAr: 'طرح أعداد من 3 أرقام بالاستلاف',
          conceptTestedEn: '3-Digit Subtraction with Regrouping',
          explanationAr: 'الآحاد: $12 - 5 = 7$، العشرات: $13 - 6 = 7$، المئات: $7 - 3 = 4$ ➔ الناتج $477$.',
          explanationEn: 'Ones: $12-5=7$, Tens: $13-6=7$, Hundreds: $7-3=4 \\implies 477$.',
          difficulty: 'medium'
        },
        {
          id: 'q-m2-3-3',
          textAr: 'في مزرعة 245 شجرة برتقال و 180 شجرة ليمون. كم مجموع الأشجار في المزرعة؟',
          textEn: 'A farm has 245 orange trees and 180 lemon trees. How many trees in total?',
          optionsAr: ['425', '415', '435', '325'],
          optionsEn: ['425', '415', '435', '325'],
          correctIndex: 0,
          conceptTestedAr: 'حل المسائل اللفظية للجمع',
          conceptTestedEn: 'Word Problem: Addition',
          explanationAr: '$245 + 180 = 425$ شجرة.',
          explanationEn: '$245 + 180 = 425$ trees.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-3-4',
          textAr: 'كان مع عمر 650 جنيهاً، اشترى دراجة بمبلغ 485 جنيهاً. كم جنيهاً تبقى معه؟',
          textEn: 'Omar had 650 LE. He bought a bicycle for 485 LE. How much money is left?',
          optionsAr: ['165 LE', '175 LE', '265 LE', '155 LE'],
          optionsEn: ['165 LE', '175 LE', '265 LE', '155 LE'],
          correctIndex: 0,
          conceptTestedAr: 'مسائل الطرح الحياتية',
          conceptTestedEn: 'Word Problem: Subtraction',
          explanationAr: '$650 - 485 = 165$ جنيهاً.',
          explanationEn: '$650 - 485 = 165$ LE.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-3-5',
          textAr: 'عند جمع $57 + 36$، ما الرقم الذي نكتبه في خانة الآحاد؟',
          textEn: 'When adding $57 + 36$, what digit is written in the ones place of the sum?',
          optionsAr: ['3 (ونحمل 1 للعشرات)', '7', '6', '13'],
          optionsEn: ['3 (carrying 1)', '7', '6', '13'],
          correctIndex: 0,
          conceptTestedAr: 'خطوات الجمع بالحمل',
          conceptTestedEn: 'Carrying Process in Addition',
          explanationAr: '$7 + 6 = 13$ ➔ نكتب 3 في الآحاد ونحمل 1 إلى خانة العشرات.',
          explanationEn: '$7 + 6 = 13$, write 3 and carry 1 to tens.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: MONEY, MEASUREMENT, TIME, FRACTIONS & ARRAYS ──
  {
    id: 'p2-math-4',
    order: 4,
    titleAr: 'المحاضرة 4: النقود، قياس الأطوال، الساعة بالخمس دقائق، الكسور والمصفوفات',
    titleEn: 'Lecture 4: Egyptian Money, Length (cm & m), Time (5 min), Fractions & Arrays',
    subtitleAr: 'التعامل مع العملات المصرية، القياس بالمسطرة، قراءة الساعة بالخمس دقائق، الكسور البسيطة ومفهوم المصفوفات للضرب',
    subtitleEn: 'Explore Egyptian Currency, Length in cm & m, Telling Time to 5 minutes, Unit Fractions, and Arrays.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثاني الابتدائي (الصف 2) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 2 / Primary 2 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'Chapter 4: Measurement, Time, Fractions & Arrays',
    unitTitleEn: 'Chapter 4: Measurement, Time, Fractions & Arrays',
    lessonNumberAr: 'الدرس 4: النقود والقياس والساعة والكسور والمصفوفات',
    lessonNumberEn: 'Lesson 4: Money, Measurement, Time, Fractions & Arrays',

    keyConceptsAr: [
      'النقود المصرية (Egyptian Money):',
      '  - الأوراق النقدية: $1, 5, 10, 20, 50, 100, 200$ جنيه مصري (LE).',
      '  - تكوين المبالغ: $100$ LE $= 50 + 50$ أو $20 + 20 + 20 + 20 + 20$.',
      'قياس الأطوال (Measuring Length):',
      '  - السنتيمتر ($cm$): للأشياء القصيرة (مثل: القلم $15\\text{ cm}$، الكتاب $25\\text{ cm}$).',
      '  - المتر ($m$): للأشياء الطويلة والمسافات (مثل: طول الباب $2\\text{ m}$، طول الغرفة $4\\text{ m}$).',
      '  - التحويل الذهبي: $1\\text{ meter (m)} = 100\\text{ centimeters (cm)}$.',
      'قراءة الساعة بالخمس دقائق (Telling Time to 5 Minutes):',
      '  - عقرب الساعات الصغير (Hour Hand) وعقرب الدقائق الطويل (Minute Hand).',
      '  - كل رقم على الساعة يمثل $5$ دقائق: ($1 = 5\\text{ min}$, $2 = 10$, $3 = 15$ Quarter past, $6 = 30$ Half past, $9 = 45$ Quarter to).',
      'الكسور البسيطة (Simple Fractions):',
      '  - النصف (Half: $\\frac{1}{2}$): جزء واحد من جزأين متساويين.',
      '  - الثلث (Third: $\\frac{1}{3}$): جزء واحد من $3$ أجزاء متساوية.',
      '  - الربع (Quarter / Fourth: $\\frac{1}{4}$): جزء واحد من $4$ أجزاء متساوية.',
      'المصفوفات (Arrays) ومقدمة الضرب:',
      '  - المصفوفة تتكون من صفوف أفقية (Rows) وأعمدة رأسية (Columns).',
      '  - مثال مصفوفة 3 صفوف في 4 أعمدة: الجمع المتكرر = $4 + 4 + 4 = 12$ أو $3 \\times 4 = 12$.'
    ],
    keyConceptsEn: [
      'Egyptian Currency (LE): $1, 5, 10, 20, 50, 100, 200$ LE banknotes and making change.',
      'Length Metric Units: Centimeters ($cm$) for small objects, Meters ($m$) for large objects ($1\\text{ m} = 100\\text{ cm}$).',
      'Telling Time to 5 minutes on analog and digital clocks: O\'clock, Half past (:30), Quarter past (:15), Quarter to (:45).',
      'Fractions: Whole ($1$), Half ($\\frac{1}{2}$), Third ($\\frac{1}{3}$), Quarter ($\\frac{1}{4}$).',
      'Arrays & Repeated Addition: Rows $\\times$ Columns as the stepping stone to multiplication.'
    ],

    conceptMapAr: [
      'القياس والتطبيقات ➔ النقود المصرية (LE) ➔ قياس الطول (cm & m) ➔ قراءة الساعة بالـ 5 دقائق ➔ الكسور (Half, Third, Quarter) ➔ المصفوفات (Arrays)'
    ],
    conceptMapEn: [
      'Measurement & Applications ➔ Egyptian Money (LE) ➔ Length (cm & m) ➔ Time (5-min intervals) ➔ Fractions (1/2, 1/3, 1/4) ➔ Arrays & Repeated Addition'
    ],

    learningOutcomesAr: [
      'أن يحسب التلميذ قيمة المشتريات والمتبقي بالجنيه المصري (LE).',
      'أن يقيس أطوال الأشياء بالسنتيمتر ($cm$) والمتر ($m$) ويميز بين الوحدتين.',
      'أن يقرأ الساعة التناظرية والرقمية بدقة حتى 5 دقائق.',
      'أن يمثل الكسور البسيطة ($\frac{1}{2}, \frac{1}{3}, \frac{1}{4}$) ويكتب معادلة الجمع المتكرر للمصفوفة (Array).'
    ],
    learningOutcomesEn: [
      'Calculate totals and change with Egyptian currency (LE).',
      'Measure objects in centimeters and meters, converting $1\\text{ m} = 100\\text{ cm}$.',
      'Tell and write time from analog and digital clocks to the nearest 5 minutes.',
      'Identify unit fractions and express arrays as repeated addition equations.'
    ],

    vocabulary: [
      {
        termAr: 'سنتيمتر (Centimeter - cm)',
        termEn: 'Centimeter (cm)',
        definitionAr: 'وحدة قياس الأطوال الصغيرة كالأقلام والكتب باستخدام المسطرة.'
      },
      {
        termAr: 'متر (Meter - m)',
        termEn: 'Meter (m)',
        definitionAr: 'وحدة قياس الأطوال والمسافات الكبيرة (يساوي $100$ سنتيمتر).'
      },
      {
        termAr: 'الكسر (Fraction)',
        termEn: 'Fraction',
        definitionAr: 'جزء أو أجزاء متساوية من كل صحيح (كالتفاحة أو رغيف الخبز).'
      },
      {
        termAr: 'المصفوفة (Array)',
        termEn: 'Array',
        definitionAr: 'ترتيب منظم للأشياء في صفوف أفقية متساوية وأعمدة رأسية متساوية.'
      }
    ],

    warmupHookAr: 'انظر إلى الساعة في غرفتك ⏰: إنها تشير إلى $3:15$ (الثالثة والربع)، ولديك بيتزا مقسمة إلى 4 قطع متساوية، أكلتَ منها قطعة واحدة تمثل $\\frac{1}{4}$ (ربع البيتزا)! وفي المتجر اشتريت كتاباً بـ $35$ جنيهاً ودفعت $50$ جنيهاً! ما أروع الماث في كل ثانية من حياتنا اليومية!',
    warmupHookEn: 'Look at the clock showing 3:15 (Quarter past three)! You slice a pizza into 4 equal slices and eat 1 slice (Quarter = 1/4)! At the store, you pay for a 35 LE book with a 50 LE bill! Math is everywhere in our daily adventures!',

    mainContentAr: `
### 1. Egyptian Money (النقود المصرية)
* **Banknotes:** $1$ LE, $5$ LE, $10$ LE, $20$ LE, $50$ LE, $100$ LE, $200$ LE.
* **Making Totals:**
  * $50$ LE $= 20 + 20 + 10$ LE.
  * $100$ LE $= 50 + 20 + 20 + 10$ LE.
* **Shopping & Change:**
  * If a toy car costs $65$ LE and you pay with a $100$ LE bill:
  * **Change (المتبقي):** $100 - 65 = 35$ LE.

---

### 2. Measuring Length (قياس الأطوال: $cm$ & $m$)
* **Centimeter ($cm$):** Used for small objects (Pencil $= 12\\text{ cm}$, Eraser $= 4\\text{ cm}$).
* **Meter ($m$):** Used for large objects (Door $= 2\\text{ m}$, Car $= 4\\text{ m}$).
* **Golden Conversion Rule:**
  $$1\\text{ Meter (m)} = 100\\text{ Centimeters (cm)}$$
  $$3\\text{ m} = 300\\text{ cm} \\quad | \\quad 500\\text{ cm} = 5\\text{ m}$$

---

### 3. Telling Time to 5 Minutes (قراءة الساعة بالخمس دقائق)
* **Short Hand = Hour Hand** (points to the hour).
* **Long Hand = Minute Hand** (count by $5$s around the clock face):
  * At $12$ ➔ $:00$ (O'clock)
  * At $3$ ➔ $:15$ (Quarter past)
  * At $6$ ➔ $:30$ (Half past)
  * At $9$ ➔ $:45$ (Quarter to)
  * Example: Short hand between $4$ and $5$, Long hand at $5$ ➔ **$4:25$**.

---

### 4. Simple Fractions & Arrays (الكسور البسيطة والمصفوفات)

#### Fractions:
* 🍕 **Half ($\\frac{1}{2}$):** $1$ part out of $2$ equal parts.
* 🍰 **Third ($\\frac{1}{3}$):** $1$ part out of $3$ equal parts.
* 🥧 **Quarter / Fourth ($\\frac{1}{4}$):** $1$ part out of $4$ equal parts.

#### Arrays (المصفوفات):
* An **Array** arranges items in equal **Rows** (horizontal $\\rightarrow$) and **Columns** (vertical $\\downarrow$).
* For an array of **$3$ Rows of $4$ Stars**:
  * Repeated Addition: $4 + 4 + 4 = 12$
  * Multiplication equation: $3 \\times 4 = 12$.

---

### 5. Interactive Visual Measurement & Time Chart
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  <!-- Money & Length Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#38bdf8" font-size="16" font-weight="bold" text-anchor="middle">💵 Money & Length (cm & m)</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">🔹 Egyptian Bills: 1, 5, 10, 20, 50, 100, 200 LE</text>
    <text x="25" y="105" fill="#fde047" font-size="14" font-weight="bold">⭐ 1 Meter (m) = 100 Centimeters (cm)</text>
    <text x="25" y="140" fill="#bae6fd" font-size="12">Pencil Length = 15 cm (small)</text>
    <text x="25" y="165" fill="#bae6fd" font-size="12">Classroom Door = 2 m = 200 cm (large)</text>
  </g>

  <!-- Time & Arrays Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="35" fill="#34d399" font-size="16" font-weight="bold" text-anchor="middle">⏰ Time, Fractions & Arrays</text>
    <text x="25" y="70" fill="#f8fafc" font-size="13">⏰ Time: 4:15 (Quarter past 4) • 4:30 (Half past)</text>
    <text x="25" y="105" fill="#f8fafc" font-size="13">🍕 Fractions: 1/2 (Half) • 1/3 (Third) • 1/4 (Fourth)</text>
    <text x="25" y="140" fill="#facc15" font-size="13" font-weight="bold">⭐ Array: 2 rows of 5 = 5 + 5 = 10 (2 × 5)</text>
    <text x="25" y="165" fill="#34d399" font-size="12">⭐⭐⭐⭐⭐ / ⭐⭐⭐⭐⭐</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Money & Length
* Egyptian Banknotes: 1, 5, 10, 20, 50, 100, 200 LE.
* $1\\text{ meter (m)} = 100\\text{ centimeters (cm)}$.

### 2. Time, Fractions & Arrays
* Time to 5 minutes: e.g. 7:25, 7:45.
* Fractions: Half (1/2), Third (1/3), Quarter (1/4).
* Arrays: Equal rows and columns ($3 \\times 4 = 4+4+4 = 12$).
`,

    workedExamples: [
      {
        id: 'ex-m2-4-1',
        titleAr: 'مثال 1: حساب تكلفة المشتريات والمتبقي بالنقود',
        titleEn: 'Example 1: Calculating Money and Change',
        problemAr: 'اشترى مروان لعبة بـ $45$ جنيهاً وعلبة ألوان بـ $25$ جنيهاً. إذا دفع ورقة نقدية فئة $100$ جنيه، فكم جنيهاً يعيد له البائع؟',
        problemEn: 'Marwan bought a toy for 45 LE and colors for 25 LE. He paid with a 100 LE bill. What is his change?',
        stepByStepSolutionAr: [
          'الخطوة 1: نحسب إجمالي المشتريات: $45 + 25 = 70$ جنيهاً.',
          'الخطوة 2: نحسب المبلغ المتبقي بالطرح: $100 - 70 = 30$ جنيهاً.',
          'الاستنتاج: يعيد له البائع $30$ جنيهاً.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Total purchase = $45 + 25 = 70$ LE.',
          'Step 2: Change = $100 - 70 = 30$ LE.'
        ],
        finalAnswerAr: 'المتبقي = $30$ جنيهاً مصرياً (30 LE).',
        finalAnswerEn: 'Change is 30 LE.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m2-4-1',
        problemAr: 'اكتب جملة الجمع المتكرر وجملة الضرب لمصفوفة مكونة من 3 صفوف، في كل صف 5 نجوم.',
        problemEn: 'Write the repeated addition and multiplication for an array of 3 rows of 5 stars.',
        solutionStepsAr: [
          'الجمع المتكرر للصفوف: $5 + 5 + 5 = 15$.',
          'جملة الضرب: $3 \\times 5 = 15$.'
        ],
        solutionStepsEn: [
          'Repeated addition: $5 + 5 + 5 = 15$.',
          'Multiplication: $3 \\times 5 = 15$.'
        ],
        finalAnswerAr: 'الجمع: $5 + 5 + 5 = 15$ | الضرب: $3 \\times 5 = 15$.',
        finalAnswerEn: 'Addition: $5 + 5 + 5 = 15$ | Multiplication: $3 \\times 5 = 15$.'
      }
    ],

    assessment: {
      id: 'as-m2-4',
      titleAr: 'اختبار تقييم المحاضرة 4: النقود والقياس والوقت والكسور',
      titleEn: 'Lecture 4 Assessment: Money, Measurement, Time & Fractions',
      passingScore: 80,
      questions: [
        {
          id: 'q-m2-4-1',
          textAr: 'كم سنتيمتراً ($cm$) في $4$ أمتار ($4\\text{ m}$)؟',
          textEn: 'How many centimeters (cm) are in 4 meters (4 m)?',
          optionsAr: ['400 cm', '40 cm', '4000 cm', '4 cm'],
          optionsEn: ['400 cm', '40 cm', '4000 cm', '4 cm'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل من المتر إلى السنتيمتر',
          conceptTestedEn: 'Converting Meters to Centimeters',
          explanationAr: 'بما أن $1\\text{ m} = 100\\text{ cm}$، إذن $4\\text{ m} = 4 \\times 100 = 400\\text{ cm}$.',
          explanationEn: '$1\\text{ m} = 100\\text{ cm} \\implies 4\\text{ m} = 400\\text{ cm}$.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-4-2',
          textAr: 'إذا كان عقرب الساعات عند الرقم 6 وعقرب الدقائق يشير إلى الرقم 3، فكم تكون الساعة؟',
          textEn: 'If the hour hand is at 6 and the minute hand points to 3, what is the time?',
          optionsAr: ['6:15 (السادسة والربع)', '6:30', '6:45', '3:30'],
          optionsEn: ['6:15 (Quarter past 6)', '6:30', '6:45', '3:30'],
          correctIndex: 0,
          conceptTestedAr: 'قراءة الساعة بالربع ساعة',
          conceptTestedEn: 'Telling Time: Quarter Past',
          explanationAr: 'عندما يشير عقرب الدقائق للرقم 3، يعني $3 \\times 5 = 15$ دقيقة ➔ الساعة $6:15$.',
          explanationEn: 'Minute hand at 3 represents 15 minutes, so time is 6:15.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-4-3',
          textAr: 'ما الكسر الذي يعبر عن جزء واحد مظلل من فطيرة مقسمة إلى 4 أجزاء متساوية؟',
          textEn: 'What fraction represents 1 shaded slice out of 4 equal pizza slices?',
          optionsAr: ['1/4 (الربع - Quarter)', '1/2 (النصف)', '1/3 (الثلث)', '4/1'],
          optionsEn: ['1/4 (Quarter)', '1/2 (Half)', '1/3 (Third)', '4/1'],
          correctIndex: 0,
          conceptTestedAr: 'كسر الربع',
          conceptTestedEn: 'Fraction: Quarter (1/4)',
          explanationAr: 'جزء واحد من 4 أجزاء متساوية هو الربع ويُكتب $\\frac{1}{4}$.',
          explanationEn: '1 out of 4 equal parts is a quarter (1/4).',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-4-4',
          textAr: 'مصفوفة مكونة من 4 صفوف وفي كل صف 3 كرات. ما العدد الإجمالي للكرات؟',
          textEn: 'An array has 4 rows of 3 balls. What is the total number of balls?',
          optionsAr: ['12 ($3 + 3 + 3 + 3 = 12$)', '7', '14', '9'],
          optionsEn: ['12 ($3 + 3 + 3 + 3 = 12$)', '7', '14', '9'],
          correctIndex: 0,
          conceptTestedAr: 'حساب عناصر المصفوفة بالجمع المتكرر',
          conceptTestedEn: 'Array Total via Repeated Addition',
          explanationAr: '$3 + 3 + 3 + 3 = 12$ كرة ($4 \\times 3 = 12$).',
          explanationEn: '$3 + 3 + 3 + 3 = 12$ balls.',
          difficulty: 'easy'
        },
        {
          id: 'q-m2-4-5',
          textAr: 'أي وحدة هي الأنسب لقياس طول قلم الرصاص المكتبي؟',
          textEn: 'Which unit is best suited to measure the length of a pencil?',
          optionsAr: ['السنتيمتر (cm)', 'المتر (m)', 'الكيلومتر', 'الساعة'],
          optionsEn: ['Centimeter (cm)', 'Meter (m)', 'Kilometer', 'Hour'],
          correctIndex: 0,
          conceptTestedAr: 'اختيار وحدة قياس الطول المناسبة',
          conceptTestedEn: 'Appropriate Length Units',
          explanationAr: 'قلم الرصاص جسم قصير يقاس بالسنتيمتر ($cm$) باستخدام المسطرة.',
          explanationEn: 'A pencil is a small item measured in centimeters using a ruler.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
