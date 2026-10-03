import type { Lecture } from '../types';

// ============================================================================
// PRIMARY MATH — GRADE 3 (الماث للصف الثالث الابتدائي - نظام التعليم 2.0 المعتمد لمدارس اللغات)
// Official Egyptian Language Schools & Experimental Schools Curriculum (Edu 2.0 - Primary 3 Math):
// Lecture 1: Chapter 1: Place Value up to 100,000 & Multi-Digit Addition/Subtraction with Regrouping
// Lecture 2: Chapter 2: Multiplication & Division Concepts, Fact Families & Arrays (Tables 0 to 10)
// Lecture 3: Chapter 3: Fractions: Unit Fractions, Equivalent Fractions & Plotting on the Number Line
// Lecture 4: Chapter 4: Perimeter, Area (L x W), Time (to the minute) & Capacity/Mass Measurement
// ============================================================================

export const PRIMARY_MATH_G3_LECTURES: Lecture[] = [
  // ── LECTURE 1: PLACE VALUE UP TO 100,000 & ADDITION/SUBTRACTION WITH REGROUPING ──
  {
    id: 'p3-math-1',
    order: 1,
    titleAr: 'المحاضرة 1: القيمة المكانية حتى مئات الألوف والجمع والطرح بإعادة التجميع (Place Value & Regrouping)',
    titleEn: 'Lecture 1: Place Value up to 100,000 & Multi-Digit Addition/Subtraction with Regrouping',
    subtitleAr: 'قراءة وكتابة الأعداد بالصيغ المختلفة (Standard, Expanded, Word Forms)، وإتقان خوارزميات الجمع بالحمل والطرح بالاستلاف',
    subtitleEn: 'Master 5-digit and 6-digit place value, standard/expanded/word forms, and vertical addition/subtraction with regrouping.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'Chapter 1: Place Value, Estimation & Multi-Digit Addition & Subtraction',
    unitTitleEn: 'Chapter 1: Place Value, Estimation & Multi-Digit Addition & Subtraction',
    lessonNumberAr: 'الدرس 1: القيمة المكانية، والجمع والطرح بإعادة التجميع',
    lessonNumberEn: 'Lesson 1: Place Value & Multi-Digit Addition/Subtraction with Regrouping',

    keyConceptsAr: [
      'جدول القيمة المكانية للأعداد الكبيرة (Place Value Chart up to 100,000):',
      '  - المنازل: الآحاد (Ones)، العشرات (Tens)، المئات (Hundreds)، أحاد الألوف (Thousands)، عشرات الألوف (Ten Thousands)، مئات الألوف (Hundred Thousands).',
      '  - قيمة الرقم (Value of a Digit): تعتمد على موقعه؛ الرقم 7 في خانة عشرات الألوف قيمته $70,000$.',
      'صيغ كتابة الأعداد (Number Forms):',
      '  - الصيغة القياسية (Standard Form): كتابة العدد بالأرقام مثل $48,265$.',
      '  - الصيغة التحليلية (Expanded Form): كتابة مجموع قيم الأرقام: $40,000 + 8,000 + 200 + 60 + 5$.',
      '  - الصيغة اللفظية (Word Form): "Forty-eight thousand, two hundred sixty-five".',
      'مقارنة وترتيب الأعداد (Comparing & Ordering): باستخدام الرموز ($>$, $<$, $=$) بدءاً من المنزلة الأكبر على اليسار.',
      'الجمع الرأسي بإعادة التجميع (Addition with Regrouping / Carrying):',
      '  - إذا كان ناتج جمع أي عمود $\\ge 10$، نكتب رقم الآحاد ونحمل رقم العشرات فوق العمود التالي جهة اليسار.',
      'الطرح بإعادة التجميع والاستلاف (Subtraction with Regrouping / Borrowing):',
      '  - إذا كان الرقم العلوي أصغر من الرقم السفلي، نستلف 1 عشرة من الخانة المجاورة على اليسار وتتحول إلى 10 وحدات في الخانة الحالية.',
      '  - الاستلاف عبر الأصفار (Borrowing across zeros).'
    ],
    keyConceptsEn: [
      'Place Value Chart (Ones, Tens, Hundreds, Thousands, Ten Thousands, Hundred Thousands).',
      'Number Representations: Standard Form ($56,419$), Expanded Form ($50,000 + 6,000 + 400 + 10 + 9$), and Word Form.',
      'Comparing & Ordering 5-digit and 6-digit numbers using ($>$, $<$, $=$).',
      'Vertical Multi-digit Addition Algorithm with Regrouping (Carrying over).',
      'Multi-digit Subtraction with Regrouping (Borrowing, including borrowing across zeros).'
    ],

    conceptMapAr: [
      'القيمة المكانية (Ones, Tens, Hundreds, Thousands, Ten Thousands) ➔ الصيغ (Standard, Expanded, Word) ➔ الجمع بالحمل (Carrying) ➔ الطرح بالاستلاف (Borrowing)'
    ],
    conceptMapEn: [
      'Place Value (Ones, Tens, Hundreds, Thousands, Ten Thousands) ➔ Number Forms ➔ Addition with Carrying ➔ Subtraction with Borrowing'
    ],

    learningOutcomesAr: [
      'أن يحدد التلميذ القيمة المكانية وقيمة أي رقم ضمن الأعداد حتى $100,000$.',
      'أن يحول الأعداد بمرونة بين الصيغة القياسية والتحليلية واللفظية.',
      'أن يجمع أعداداً مكونة من 4 و 5 أرقام بدقة باستخدام خوارزمية إعادة التجميع (الحمل).',
      'أن ينفذ عمليات الطرح الرأسي مع الاستلاف بما في ذلك الاستلاف عبر الأصفار (Across Zeros).'
    ],
    learningOutcomesEn: [
      'Identify the place value and numeric value of any digit up to 100,000.',
      'Convert flexibly between standard, expanded, and word forms.',
      'Add multi-digit numbers with regrouping (carrying) accurately.',
      'Execute multi-digit vertical subtraction with borrowing across zeros.'
    ],

    vocabulary: [
      {
        termAr: 'القيمة المكانية',
        termEn: 'Place Value',
        definitionAr: 'اسم المنزلة التي يقع فيها الرقم في العدد (Ones, Tens, Hundreds, Thousands, Ten Thousands).'
      },
      {
        termAr: 'قيمة الرقم',
        termEn: 'Value of a Digit',
        definitionAr: 'القيمة العددية للرقم بناءً على موقعه (مثال: قيمة 5 في عشرات الألوف هي 50,000).'
      },
      {
        termAr: 'الصيغة التحليلية',
        termEn: 'Expanded Form',
        definitionAr: 'كتابة العدد في صورة مجموع القيم المكانية لجميع أرقامه.'
      },
      {
        termAr: 'إعادة التجميع (الحمل/الاستلاف)',
        termEn: 'Regrouping',
        definitionAr: 'تحويل 10 وحدات إلى خانة أعلى (حمل) أو فك وحدة من خانة أعلى إلى 10 وحدات في الخانة الحالية (استلاف).'
      }
    ],

    warmupHookAr: 'Welcome 3rd Grade Math Champions! 🌟 تخيل أنك أمين صندوق في متجر كبير وزار المتجر اليوم 24,530 عميلاً، وفي اليوم السابق 18,745 عميلاً. كيف نقرأ هذه الأعداد الكبيرة بالإنجليزية؟ وكيف نحسب مجموع الزوار بدقة باستخدام الـ Regrouping؟ هيا نتقن القيمة المكانية والجمع والطرح معاً!',
    warmupHookEn: 'Welcome 3rd Grade Math Champions! 🌟 Imagine tallying ticket sales for a major festival: 24,530 tickets on Friday and 18,745 tickets on Saturday. How do we read and write these 5-digit numbers in standard and expanded forms? And how do we add and subtract them flawlessly using regrouping? Let\'s discover together!',

    mainContentAr: `
### 1. جدول القيمة المكانية والأعداد الكبيرة (Place Value up to 100,000)

في الصف الثالث الابتدائي، نتوسع من الآلاف إلى **عشرات الألوف (Ten Thousands)** و **مئات الألوف (Hundred Thousands)**:

* 📊 **جدول المنازل (Place Value Chart):**
| مئات الألوف (H-Th) | عشرات الألوف (T-Th) | آحاد الألوف (Th) | المئات (H) | العشرات (T) | الآحاد (O) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **3** | **7** | **4** | **8** | **2** | **5** |

* 🔍 **العدد:** $374,825$
  - قيمة الرقم 5 في خانة الآحاد (Ones) = $5$
  - قيمة الرقم 2 في خانة العشرات (Tens) = $20$
  - قيمة الرقم 8 في خانة المئات (Hundreds) = $800$
  - قيمة الرقم 4 في خانة الآلاف (Thousands) = $4,000$
  - قيمة الرقم 7 في خانة عشرات الألوف (Ten Thousands) = $70,000$
  - قيمة الرقم 3 في خانة مئات الألوف (Hundred Thousands) = $300,000$

---

### 2. صيغ كتابة الأعداد (Forms of Numbers)
نستطيع تمثيل أي عدد بثلاث صيغ رئيسية:
1. **الصيغة القياسية (Standard Form):** $48,265$
2. **الصيغة التحليلية (Expanded Form):** $40,000 + 8,000 + 200 + 60 + 5$
3. **الصيغة اللفظية (Word Form):** "Forty-eight thousand, two hundred sixty-five"

---

### 3. الجمع الرأسي مع إعادة التجميع (Addition with Regrouping / Carrying)
دعونا نجمع: $24,530 + 18,745$
\`\`\`text
    [1] [1]
     2 4 , 5 3 0
   + 1 8 , 7 4 5
   --------------
     4 3 , 2 7 5
\`\`\`
* **خطوات الحل:**
  1. **Ones:** $0 + 5 = 5$
  2. **Tens:** $3 + 4 = 7$
  3. **Hundreds:** $5 + 7 = 12$ ➔ نكتب $2$ ونحمل $[1]$ فوق الآلاف.
  4. **Thousands:** $1 + 4 + 8 = 13$ ➔ نكتب $3$ ونحمل $[1]$ فوق عشرات الألوف.
  5. **Ten Thousands:** $1 + 2 + 1 = 4$.
  * **الناتج النهائي (Sum):** $43,275$.

---

### 4. الطرح بإعادة التجميع والاستلاف عبر الأصفار (Subtraction with Regrouping Across Zeros)
دعونا نطرح: $50,000 - 23,468$
\`\`\`text
     4   9   9   9  (10)
     5 / 0 / 0 / 0 /  0
   - 2   3   4   6    8
   ---------------------
     2   6   5   3    2
\`\`\`
* **خطوات الحل:**
  - في خانة الآحاد $0 - 8$ لا تجوز، ولا يوجد في العشرات أو المئات للاستلاف.
  - نستلف من الـ $5$ في خانة عشرات الألوف لتصبح $4$، وتصبح الأصفار الوسطى $9$ وخانة الآحاد $10$.
  - $10 - 8 = 2$ | $9 - 6 = 3$ | $9 - 4 = 5$ | $9 - 3 = 6$ | $4 - 2 = 2$.
  * **الناتج النهائي (Difference):** $26,532$.

---

### رسم توضيحي: القيمة المكانية وإعادة التجميع (Place Value & Regrouping)
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  
  <!-- Place Value Grid -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">Place Value Periods (Periods of 3)</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">Thousands Period: <tspan fill="#38bdf8" font-weight="bold">H-Th | T-Th | Th</tspan></text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">Units Period: <tspan fill="#34d399" font-weight="bold">Hundreds | Tens | Ones</tspan></text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">Standard Form: <tspan fill="#fbbf24" font-weight="bold">48,265</tspan></text>
    <text x="25" y="170" fill="#f8fafc" font-size="12">Expanded: <tspan fill="#f472b6" font-weight="bold">40,000 + 8,000 + 200 + 60 + 5</tspan></text>
  </g>

  <!-- Regrouping Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">Addition &amp; Subtraction Rules</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">➕ <tspan fill="#34d399" font-weight="bold">Carrying (Sum ≥ 10):</tspan> Carry to the left</text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">➖ <tspan fill="#ef4444" font-weight="bold">Borrowing (Top &lt; Bot):</tspan> Regroup next</text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">🔁 <tspan fill="#fbbf24" font-weight="bold">Check Add:</tspan> Sum - Addend = Addend</text>
    <text x="165" y="170" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">✨ 24,530 + 18,745 = 43,275</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Place Value Structure (Up to 100,000)
- The decimal system organizes numbers into periods of 3 digits: Units (Ones, Tens, Hundreds) and Thousands (Thousands, Ten Thousands, Hundred Thousands).
- Digit value is determined by its column position: e.g., in $374,825$, the digit $7$ represents $70,000$.

### 2. Standard, Expanded & Word Forms
- Standard Form: $48,265$.
- Expanded Form: $40,000 + 8,000 + 200 + 60 + 5$.
- Word Form: "Forty-eight thousand, two hundred sixty-five".

### 3. Multi-Digit Addition with Regrouping (Carrying)
- Align digits vertically by place value column.
- Whenever a column sum is 10 or greater, write the units digit in the answer and carry over the tens digit to the adjacent column on the left.
- Example: $24,530 + 18,745 = 43,275$.

### 4. Multi-Digit Subtraction with Regrouping (Borrowing Across Zeros)
- When the minuend (top digit) is smaller than the subtrahend (bottom digit), regroup 1 from the next left column into 10 units.
- Example: $50,000 - 23,468 = 26,532$.
`,

    workedExamples: [
      {
        id: 'ex-p3-math1-1',
        titleAr: 'مثال 1: كتابة العدد بالصيغة التحليلية وتحديد قيمة الرقم',
        titleEn: 'Example 1: Expanded Form & Digit Value',
        problemAr: 'اكتب العدد $65,409$ بالصيغة التحليلية (Expanded Form)، واذكر القيمة المكانية وقيمة الرقم $6$.',
        problemEn: 'Write the number $65,409$ in expanded form and state the place value and value of digit 6.',
        stepByStepSolutionAr: [
          'الخطوة 1: نحدد منازل الأرقام: 9 في الآحاد ($9$)، 0 في العشرات ($0$)، 4 في المئات ($400$)، 5 في الآلاف ($5,000$)، 6 في عشرات الألوف ($60,000$).',
          'الخطوة 2: الصيغة التحليلية = $60,000 + 5,000 + 400 + 9$.',
          'الخطوة 3: القيمة المكانية للرقم 6 = Ten Thousands (عشرات الألوف).',
          'الخطوة 4: قيمة الرقم 6 = $60,000$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Identify column positions: 9 Ones, 0 Tens, 4 Hundreds, 5 Thousands, 6 Ten Thousands.',
          'Step 2: Expanded Form = $60,000 + 5,000 + 400 + 9$.',
          'Step 3: Place value of digit 6 is Ten Thousands.',
          'Step 4: Value of digit 6 is $60,000$.'
        ],
        finalAnswerAr: 'الصيغة التحليلية: $60,000 + 5,000 + 400 + 9$، والقيمة المكانية للرقم 6 هي Ten Thousands وقيمته $60,000$.',
        finalAnswerEn: 'Expanded Form: $60,000 + 5,000 + 400 + 9$; Place Value of 6 is Ten Thousands with value $60,000$.'
      },
      {
        id: 'ex-p3-math1-2',
        titleAr: 'مثال 2: جمع أعداد مكونة من 5 أرقام مع الحمل',
        titleEn: 'Example 2: 5-Digit Vertical Addition with Regrouping',
        problemAr: 'احسب ناتج الجمع التالي رأسياً: $36,874 + 25,468$',
        problemEn: 'Compute the vertical sum: $36,874 + 25,468$',
        stepByStepSolutionAr: [
          'الخطوة 1: الآحاد: $4 + 8 = 12$ ➔ نكتب 2 ونحمل 1 في العشرات.',
          'الخطوة 2: العشرات: $1 + 7 + 6 = 14$ ➔ نكتب 4 ونحمل 1 في المئات.',
          'الخطوة 3: المئات: $1 + 8 + 4 = 13$ ➔ نكتب 3 ونحمل 1 في الآلاف.',
          'الخطوة 4: الآلاف: $1 + 6 + 5 = 12$ ➔ نكتب 2 ونحمل 1 في عشرات الألوف.',
          'الخطوة 5: عشرات الألوف: $1 + 3 + 2 = 6$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Ones: $4 + 8 = 12$ ➔ write 2, carry 1.',
          'Step 2: Tens: $1 + 7 + 6 = 14$ ➔ write 4, carry 1.',
          'Step 3: Hundreds: $1 + 8 + 4 = 13$ ➔ write 3, carry 1.',
          'Step 4: Thousands: $1 + 6 + 5 = 12$ ➔ write 2, carry 1.',
          'Step 5: Ten Thousands: $1 + 3 + 2 = 6$.'
        ],
        finalAnswerAr: '$36,874 + 25,468 = 62,342$',
        finalAnswerEn: '$36,874 + 25,468 = 62,342$'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-math1-1',
        problemAr: 'احسب ناتج الطرح مع الاستلاف: $40,050 - 18,375$',
        problemEn: 'Find the difference: $40,050 - 18,375$',
        solutionStepsAr: [
          '1. الآحاد: $0 - 5$ نستلف من العشرات (5 تصبح 4 والآحاد تصبح 10) ➔ $10 - 5 = 5$.',
          '2. العشرات: $4 - 7$ نستلف من المئات والآلاف عبر الـ 4 في عشرات الألوف (تصبح 3، والآلاف 9، والمئات 9، والعشرات 14) ➔ $14 - 7 = 7$.',
          '3. المئات: $9 - 3 = 6$.',
          '4. الآلاف: $9 - 8 = 1$.',
          '5. عشرات الألوف: $3 - 1 = 2$.'
        ],
        solutionStepsEn: [
          '1. Ones: $10 - 5 = 5$ after regrouping.',
          '2. Tens: $14 - 7 = 7$ after borrowing across hundreds and thousands.',
          '3. Hundreds: $9 - 3 = 6$.',
          '4. Thousands: $9 - 8 = 1$.',
          '5. Ten Thousands: $3 - 1 = 2$.'
        ],
        finalAnswerAr: '$40,050 - 18,375 = 21,675$',
        finalAnswerEn: '$40,050 - 18,375 = 21,675$'
      },
      {
        id: 'tb-p3-math1-2',
        problemAr: 'قارن بين العددين باستخدام ($>$, $<$, $=$): $74,850$ و $74,905$',
        problemEn: 'Compare using ($>$, $<$, $=$): $74,850$ and $74,905$',
        solutionStepsAr: [
          '1. نقارن عشرات الألوف: كلاهما 7.',
          '2. نقارن الآلاف: كلاهما 4.',
          '3. نقارن المئات: $8$ في العدد الأول و $9$ في العدد الثاني.',
          '4. بما أن $8 < 9$، فإن $74,850 < 74,905$.'
        ],
        solutionStepsEn: [
          '1. Ten Thousands: both are 7.',
          '2. Thousands: both are 4.',
          '3. Hundreds: $8 < 9$.',
          '4. Therefore $74,850 < 74,905$.'
        ],
        finalAnswerAr: '$74,850 < 74,905$',
        finalAnswerEn: '$74,850 < 74,905$'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-math1-1',
        questionAr: 'ما هي قيمة الرقم 8 في العدد $85,214$؟',
        questionEn: 'What is the value of digit 8 in the number $85,214$?',
        optionsAr: ['$80,000$', '$8,000$', '$800$', '$80$'],
        optionsEn: ['$80,000$', '$8,000$', '$800$', '$80$'],
        correctIndex: 0,
        rationaleAr: 'يقع الرقم 8 في خانة عشرات الألوف (Ten Thousands)، فقيمته هي $8 \\times 10,000 = 80,000$.',
        rationaleEn: 'Digit 8 is in the Ten Thousands column, so its value is 80,000.'
      },
      {
        id: 'fa-p3-math1-2',
        questionAr: 'ما هي الصيغة التحليلية (Expanded Form) للعدد $32,045$؟',
        questionEn: 'What is the correct expanded form of $32,045$?',
        optionsAr: [
          '$30,000 + 2,000 + 40 + 5$',
          '$300,000 + 2,000 + 40 + 5$',
          '$3,000 + 200 + 45$',
          '$30,000 + 200 + 40 + 5$'
        ],
        optionsEn: [
          '$30,000 + 2,000 + 40 + 5$',
          '$300,000 + 2,000 + 40 + 5$',
          '$3,000 + 200 + 45$',
          '$30,000 + 200 + 40 + 5$'
        ],
        correctIndex: 0,
        rationaleAr: 'الصيغة التحليلية تجمع قيم الأرقام: $30,000 + 2,000 + 0 + 40 + 5$.',
        rationaleEn: 'Expanded form equals $30,000 + 2,000 + 40 + 5$.'
      },
      {
        id: 'fa-p3-math1-3',
        questionAr: 'ما ناتج جمع: $15,300 + 14,700$؟',
        questionEn: 'What is the sum of $15,300 + 14,700$?',
        optionsAr: ['$30,000$', '$29,000$', '$31,000$', '$29,100$'],
        optionsEn: ['$30,000$', '$29,000$', '$31,000$', '$29,100$'],
        correctIndex: 0,
        rationaleAr: '$300 + 700 = 1,000$، و $15,000 + 14,000 + 1,000 = 30,000$.',
        rationaleEn: '$15,300 + 14,700 = 30,000$.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة القيمة المكانية حتى مئات الألوف، وصيغ تمثيل الأعداد (Standard, Expanded, Word Forms)، وخوارزميات الجمع بالحمل والطرح بالاستلاف عبر الأصفار.',
    summaryEn: 'We mastered place value up to 100,000, number representations (standard, expanded, word forms), and vertical addition/subtraction algorithms with regrouping.',

    assessment: {
      id: 'quiz-p3-math-1',
      lectureId: 'p3-math-1',
      titleAr: 'اختبار المحاضرة 1: القيمة المكانية والجمع والطرح بإعادة التجميع',
      titleEn: 'Assessment 1: Place Value & Multi-Digit Addition/Subtraction',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-math1-1',
          textAr: 'ما هو الاسم الصحيح لمنزلة الرقم 4 في العدد $47,520$؟',
          textEn: 'What is the place value of digit 4 in $47,520$?',
          optionsAr: ['Ten Thousands (عشرات الألوف)', 'Thousands (الآلاف)', 'Hundreds (المئات)', 'Tens (العشرات)'],
          optionsEn: ['Ten Thousands', 'Thousands', 'Hundreds', 'Tens'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد اسم المنزلة',
          conceptTestedEn: 'Place Value Identification',
          explanationAr: 'الرقم 4 يقع في خانة عشرات الألوف (Ten Thousands).',
          explanationEn: 'Digit 4 is located in the Ten Thousands column.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math1-2',
          textAr: 'ما ناتج جمع: $25,480 + 16,350$؟',
          textEn: 'Calculate: $25,480 + 16,350$',
          optionsAr: ['$41,830$', '$41,730$', '$40,830$', '$42,830$'],
          optionsEn: ['$41,830$', '$41,730$', '$40,830$', '$42,830$'],
          correctIndex: 0,
          conceptTestedAr: 'الجمع الرأسي مع الحمل',
          conceptTestedEn: 'Multi-digit Addition with Carrying',
          explanationAr: '$25,480 + 16,350 = 41,830$.',
          explanationEn: '$25,480 + 16,350 = 41,830$.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-math1-3',
          textAr: 'ما ناتج طرح: $30,000 - 12,450$؟',
          textEn: 'Compute: $30,000 - 12,450$',
          optionsAr: ['$17,550$', '$18,550$', '$17,450$', '$18,450$'],
          optionsEn: ['$17,550$', '$18,550$', '$17,450$', '$18,450$'],
          correctIndex: 0,
          conceptTestedAr: 'الطرح بالاستلاف عبر الأصفار',
          conceptTestedEn: 'Subtraction Across Zeros',
          explanationAr: '$30,000 - 12,450 = 17,550$.',
          explanationEn: '$30,000 - 12,450 = 17,550$.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-math1-4',
          textAr: 'أي من الأعداد التالية يمثل الصيغة القياسية لـ $70,000 + 4,000 + 300 + 2$؟',
          textEn: 'Which standard number represents $70,000 + 4,000 + 300 + 2$?',
          optionsAr: ['$74,302$', '$74,320$', '$704,302$', '$740,302$'],
          optionsEn: ['$74,302$', '$74,320$', '$704,302$', '$740,302$'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل من الصيغة التحليلية للقياسية مع مراعاة خانة الصفر',
          conceptTestedEn: 'Expanded to Standard with Zero Placeholder',
          explanationAr: 'العشرات فيها صفر فيكتب العدد $74,302$.',
          explanationEn: 'The tens place contains a 0 placeholder, resulting in 74,302.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math1-5',
          textAr: 'ما هي المقارنة الصحيحة بين $89,120$ و $89,201$؟',
          textEn: 'Which comparison statement is true for $89,120$ and $89,201$?',
          optionsAr: ['$89,120 < 89,201$', '$89,120 > 89,201$', '$89,120 = 89,201$', '$89,201 < 89,120$'],
          optionsEn: ['$89,120 < 89,201$', '$89,120 > 89,201$', '$89,120 = 89,201$', '$89,201 < 89,120$'],
          correctIndex: 0,
          conceptTestedAr: 'مقارنة الأعداد الكبيرة',
          conceptTestedEn: 'Comparing Multi-Digit Numbers',
          explanationAr: 'في خانة المئات $1 < 2$، إذن $89,120 < 89,201$.',
          explanationEn: 'Comparing the hundreds place gives $1 < 2$, so $89,120 < 89,201$.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: MULTIPLICATION & DIVISION, ARRAYS & FACT FAMILIES (TABLES 0 TO 10) ──
  {
    id: 'p3-math-2',
    order: 2,
    titleAr: 'المحاضرة 2: مفاهيم الضرب والقسمة والمصفوفات وحقائق الأعداد (Multiplication & Division Tables 0-10)',
    titleEn: 'Lecture 2: Multiplication & Division Concepts, Fact Families & Arrays (Tables 0 to 10)',
    subtitleAr: 'الضرب كجمع متكرر ومصفوفات (Arrays)، جداول الضرب من 0 إلى 10، وعلاقة الضرب بالقسمة (Fact Families)',
    subtitleEn: 'Master multiplication as repeated addition and arrays, times tables (0-10), division concepts, and fact families.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'Chapter 2: Multiplication, Division & Arrays',
    unitTitleEn: 'Chapter 2: Multiplication, Division & Arrays',
    lessonNumberAr: 'الدرس 2: الضرب والقسمة والمصفوفات وجداول الضرب',
    lessonNumberEn: 'Lesson 2: Multiplication, Division, Arrays & Fact Families',

    keyConceptsAr: [
      'مفهوم الضرب (Meaning of Multiplication):',
      '  - الضرب هو جمع متكرر لمجموعات متساوية (Repeated Addition of equal groups).',
      '  - مثال: 4 مجموعات في كل منها 3 تفاحات = $3 + 3 + 3 + 3 = 4 \\times 3 = 12$.',
      'المصفوفات (Arrays) وخاصية الإبدال (Commutative Property):',
      '  - المصفوفة تتكون من صفوف أفقية (Rows) وأعمدة رأسية (Columns): $\\text{Total} = \\text{Rows} \\times \\text{Columns}$.',
      '  - خاصية الإبدال: $4 \\times 6 = 6 \\times 4 = 24$.',
      'حقائق جداول الضرب الأساسية (Times Tables from 0 to 10):',
      '  - جدول الصفر: أي عدد $\\times 0 = 0$.',
      '  - جدول الواحد (Identity Property): أي عدد $\\times 1 = \\text{نفس العدد}$.',
      '  - جداول $2, 3, 4, 5, 6, 7, 8, 9, 10$.',
      'مفهوم القسمة (Meaning of Division):',
      '  - القسمة هي توزيع عادل بالتساوي (Equal Sharing) أو طرح متكرر (Repeated Subtraction).',
      '  - الرمز ($\div$): $\\text{Dividend} \\div \\text{Divisor} = \\text{Quotient}$.',
      '  - مثال: $18 \\div 3 = 6$ (المقسوم 18، المقسوم عليه 3، وناتج القسمة 6).',
      'عائلات الحقائق المترابطة (Fact Families for $\\times$ and $\\div$):',
      '  - الأعداد (4, 7, 28):',
      '    * $4 \\times 7 = 28$',
      '    * $7 \\times 4 = 28$',
      '    * $28 \\div 4 = 7$',
      '    * $28 \\div 7 = 4$'
    ],
    keyConceptsEn: [
      'Multiplication as repeated addition and equal groups.',
      'Arrays (Rows $\times$ Columns) and the Commutative Property ($a \\times b = b \\times a$).',
      'Times Tables Mastery from 0 to 10 (Zero property, Identity property, skip counting).',
      'Division as equal sharing and repeated subtraction.',
      'Fact Families: Inverse relationship linking multiplication and division.'
    ],

    conceptMapAr: [
      'مجموعات متساوية ➔ مصفوفات (Rows x Columns) ➔ جداول الضرب (0-10) ➔ القسمة والتوزيع العادل ➔ عائلات الحقائق (Fact Families)'
    ],
    conceptMapEn: [
      'Equal Groups ➔ Arrays (Rows x Columns) ➔ Times Tables (0-10) ➔ Division Sharing ➔ Fact Families'
    ],

    learningOutcomesAr: [
      'أن يمثل التلميذ مسائل الضرب باستخدام المجموعات المتساوية والمصفوفات (Arrays).',
      'أن يحفظ ويسترجع حقائق جداول الضرب من 0 إلى 10 بطلاقة وسرعة.',
      'أن يشرح العلاقة العكسية بين الضرب والقسمة ويكتب عائلة الحقائق الأربع لأي ثلاثة أعداد مترابطة.',
      'أن يحل مسائل كلامية حياتية تتضمن الضرب والقسمة بدقة.'
    ],
    learningOutcomesEn: [
      'Model multiplication using equal groups and geometric rectangular arrays.',
      'Fluently recall multiplication facts from 0 to 10.',
      'Demonstrate the inverse relationship between multiplication and division via fact families.',
      'Solve multi-step real-world word problems involving multiplication and division.'
    ],

    vocabulary: [
      {
        termAr: 'المصفوفة',
        termEn: 'Array',
        definitionAr: 'ترتيب منسق للأشياء في صفوف أفقية متساوية وأعمدة رأسية متساوية لتمثيل الضرب.'
      },
      {
        termAr: 'العامل وحاصل الضرب',
        termEn: 'Factor & Product',
        definitionAr: 'العاملان (Factors) هما العددان المضروبان، وحاصل الضرب (Product) هو ناتج عملية الضرب.'
      },
      {
        termAr: 'المقسوم وناتج القسمة',
        termEn: 'Dividend & Quotient',
        definitionAr: 'المقسوم (Dividend) هو العدد الكلي المراد تقسيمه، وناتج القسمة (Quotient) هو الإجابة.'
      },
      {
        termAr: 'عائلة الحقائق',
        termEn: 'Fact Family',
        definitionAr: 'مجموعة من 4 جمل رياضية مرتبطة (معادلتا ضرب ومعادلتا قسمة) تستخدم نفس الأرقام الثلاثة.'
      }
    ],

    warmupHookAr: 'إذا كان لديك 6 علب ألوان، وفي كل علبة 8 أقلام تلوين، كم قلماً لديك في المجموع؟ 🎨 هل نجمع 8 ست مرات؟ هناك طريقة أسرع وأذكى بكثير وهي الضرب: $6 \\times 8 = 48$! وإذا أردنا توزيع 24 قطعة شوكولاتة على 4 أصدقاء بالتساوي، فكم يأخذ كل واحد؟ هيا نكتشف قوة الضرب والقسمة!',
    warmupHookEn: 'If you have 6 boxes of crayons and each box has 8 colors, how many crayons do you have altogether? Instead of adding 8 six times, multiplication gives us the fast answer: $6 \\times 8 = 48$! And how do we divide 24 cookies among 4 friends equally? Let\'s master multiplication and division fact families!',

    mainContentAr: `
### 1. الضرب والمصفوفات (Multiplication & Arrays)

* 🍎 **الضرب كجمع متكرر (Repeated Addition):**
  - عندما نجمع مجموعات متساوية الحجم: $5 + 5 + 5 + 5 = 4 \\text{ groups of } 5 = 4 \\times 5 = 20$.
  - العددان $4$ و $5$ يسميان **عاملين (Factors)**، والعدد $20$ يسمى **حاصل الضرب (Product)**.

* 🧱 **المصفوفات (Arrays):**
  - ترتيب الأشياء في **صفوف أفقية (Rows)** و **أعمدة رأسية (Columns)**.
  - مصفوفة بها 3 صفوف وفي كل صف 7 قطع: $\\text{Total} = 3 \\text{ rows} \\times 7 \\text{ columns} = 21$.
  - **خاصية الإبدال (Commutative Property):** $3 \\times 7 = 7 \\times 3 = 21$.

---

### 2. جداول الضرب الأساسية من 0 إلى 10 (Times Tables 0 to 10)
- **جدول 0:** أي عدد $\\times 0 = 0$ (مثل: $9 \\times 0 = 0$).
- **جدول 1:** أي عدد $\\times 1 = \\text{نفس العدد}$ (مثل: $8 \\times 1 = 8$).
- **جدول 2:** مضاعفة العدد (Doubles).
- **جدول 5:** ينتهي ناتج الضرب دائماً بـ $0$ أو $5$ ($5, 10, 15, 20, 25, 30, ...$).
- **جدول 9:** مجموع رقمي ناتج الضرب دائماً يساوي 9 (مثال: $9 \\times 4 = 36$ حيث $3+6=9$).
- **جدول 10:** إضافة صفر ليمين العدد ($6 \\times 10 = 60$).

---

### 3. مفهوم القسمة وعائلات الحقائق (Division & Fact Families)
- **القسمة (Division):** عملية توزيع العدد الكلي بالتساوي على مجموعات.
- أجزاء جملة القسمة:
  $$\\underbrace{28}_{\\text{Dividend (المقسوم)}} \\div \\underbrace{4}_{\\text{Divisor (المقسوم عليه)}} = \\underbrace{7}_{\\text{Quotient (ناتج القسمة)}}$$

* 🔄 **عائلات الحقائق (Fact Families):**
للأرقام الثلاثة $(6, 8, 48)$:
1. $6 \\times 8 = 48$
2. $8 \\times 6 = 48$
3. $48 \\div 6 = 8$
4. $48 \\div 8 = 6$

---

### 4. Interactive Diagram: Arrays & Fact Families
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  
  <!-- Array Visualizer -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">Rectangular Array (3 Rows × 5 Cols)</text>
    <text x="25" y="70" fill="#34d399" font-size="16">●  ●  ●  ●  ●  (Row 1)</text>
    <text x="25" y="105" fill="#34d399" font-size="16">●  ●  ●  ●  ●  (Row 2)</text>
    <text x="25" y="140" fill="#34d399" font-size="16">●  ●  ●  ●  ●  (Row 3)</text>
    <text x="25" y="175" fill="#fbbf24" font-size="13" font-weight="bold">Total = 3 × 5 = 5 × 3 = 15</text>
  </g>

  <!-- Fact Family Triangle -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#ec4899" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#f472b6" font-size="15" font-weight="bold" text-anchor="middle">Fact Family: (7, 8, 56)</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">✖️ Multiplication 1: <tspan fill="#34d399" font-weight="bold">7 × 8 = 56</tspan></text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">✖️ Commutative: <tspan fill="#34d399" font-weight="bold">8 × 7 = 56</tspan></text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">➗ Division 1: <tspan fill="#38bdf8" font-weight="bold">56 ÷ 7 = 8</tspan></text>
    <text x="25" y="170" fill="#f8fafc" font-size="13">➗ Division 2: <tspan fill="#38bdf8" font-weight="bold">56 ÷ 8 = 7</tspan></text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Multiplication Concept & Arrays
- Multiplication represents repeated addition of equal groups: $\text{Factor} \times \text{Factor} = \text{Product}$.
- Rectangular Arrays: Arranging objects into rows and columns ($\text{Total} = \text{Rows} \times \text{Columns}$).
- Commutative Property of Multiplication: $a \times b = b \times a$.

### 2. Times Tables from 0 to 10
- Zero Property ($n \times 0 = 0$).
- Identity Property ($n \times 1 = n$).
- Skip-counting strategies for 2, 3, 4, 5, 6, 7, 8, 9, and 10.

### 3. Division & Fact Families
- Division is equal distribution and repeated subtraction: $\text{Dividend} \div \text{Divisor} = \text{Quotient}$.
- Fact Families link 3 numbers into 2 multiplication and 2 division sentences: e.g., $7 \times 8 = 56$, $8 \times 7 = 56$, $56 \div 7 = 8$, $56 \div 8 = 7$.
`,

    workedExamples: [
      {
        id: 'ex-p3-math2-1',
        titleAr: 'مثال 1: كتابة عائلة الحقائق للأعداد 6 و 9 و 54',
        titleEn: 'Example 1: Generating Fact Family for 6, 9, and 54',
        problemAr: 'اكتب جميع جمل الضرب والقسمة الأربع التي تشكل عائلة الحقائق (Fact Family) للأعداد $6, 9, 54$.',
        problemEn: 'Write all 4 multiplication and division sentences for the fact family with numbers 6, 9, and 54.',
        stepByStepSolutionAr: [
          'الخطوة 1: نحدد أن $6 \\times 9 = 54$.',
          'الخطوة 2: نطبق خاصية الإبدال في الضرب: $9 \\times 6 = 54$.',
          'الخطوة 3: نقسم الناتج الكلي على العامل الأول: $54 \\div 6 = 9$.',
          'الخطوة 4: نقسم الناتج الكلي على العامل الثاني: $54 \\div 9 = 6$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: First multiplication fact: $6 \\times 9 = 54$.',
          'Step 2: Commutative multiplication fact: $9 \\times 6 = 54$.',
          'Step 3: First division fact: $54 \\div 6 = 9$.',
          'Step 4: Second division fact: $54 \\div 9 = 6$.'
        ],
        finalAnswerAr: '$6 \\times 9 = 54$ | $9 \\times 6 = 54$ | $54 \\div 6 = 9$ | $54 \\div 9 = 6$',
        finalAnswerEn: '$6 \\times 9 = 54$, $9 \\times 6 = 54$, $54 \\div 6 = 9$, $54 \\div 9 = 6$.'
      },
      {
        id: 'ex-p3-math2-2',
        titleAr: 'مثال 2: مسألة كلامية على الضرب وتوزيع المصفوفات',
        titleEn: 'Example 2: Word Problem on Multiplication & Arrays',
        problemAr: 'رتب معلم التربية الفنية لوحات التلاميذ في معرض المدرسة على شكل 5 صفوف، وفي كل صف 8 لوحات. كم لوحة معروضة في المجموع؟',
        problemEn: 'An art teacher arranged student paintings in 5 rows with 8 paintings in each row. How many paintings are displayed in total?',
        stepByStepSolutionAr: [
          'الخطوة 1: نحدد المعطيات: عدد الصفوف (Rows) = 5، وعدد اللوحات في كل صف (Columns) = 8.',
          'الخطوة 2: المصفوفة تمثل ضرب: $\\text{Total} = 5 \\times 8$.',
          'الخطوة 3: $5 \\times 8 = 40$ لوحة.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Identify given quantities: Rows = 5, Columns per row = 8.',
          'Step 2: Array formula: $\\text{Total} = 5 \\times 8$.',
          'Step 3: Compute product: $5 \\times 8 = 40$ paintings.'
        ],
        finalAnswerAr: 'إجمالي اللوحات = $5 \\times 8 = 40$ لوحة.',
        finalAnswerEn: 'Total paintings = $5 \\times 8 = 40$ paintings.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-math2-1',
        problemAr: 'احسب ناتج ما يلي: (أ) $7 \\times 6$ ، (ب) $9 \\times 8$ ، (ج) $63 \\div 7$ ، (د) $45 \\div 5$',
        problemEn: 'Compute: (A) $7 \\times 6$, (B) $9 \\times 8$, (C) $63 \\div 7$, (D) $45 \\div 5$',
        solutionStepsAr: [
          '(أ) $7 \\times 6 = 42$',
          '(ب) $9 \\times 8 = 72$',
          '(ج) $63 \\div 7 = 9$ (لأن $9 \\times 7 = 63$)',
          '(د) $45 \\div 5 = 9$ (لأن $9 \\times 5 = 45$)'
        ],
        solutionStepsEn: [
          '(A) $7 \\times 6 = 42$',
          '(B) $9 \\times 8 = 72$',
          '(C) $63 \\div 7 = 9$',
          '(D) $45 \\div 5 = 9$'
        ],
        finalAnswerAr: 'أ: 42، ب: 72، ج: 9، د: 9.',
        finalAnswerEn: 'A: 42, B: 72, C: 9, D: 9.'
      },
      {
        id: 'tb-p3-math2-2',
        problemAr: 'اشترى ياسين 36 قطعة حلوى وأراد تقسيمها بالتساوي على 4 علب. كم قطعة حلوى يضع في كل علبة؟',
        problemEn: 'Yassin bought 36 candies and divided them equally into 4 boxes. How many candies go into each box?',
        solutionStepsAr: [
          '1. نستخدم عملية القسمة بالتساوي: $36 \\div 4$.',
          '2. نفكر: ما العدد الذي إذا ضربناه في 4 يعطي 36؟ $4 \\times 9 = 36$.',
          '3. إذن $36 \\div 4 = 9$ قطع حلوى.'
        ],
        solutionStepsEn: [
          '1. Set up equal division: $36 \\div 4$.',
          '2. Recall multiplication fact: $4 \\times 9 = 36$.',
          '3. Therefore $36 \\div 4 = 9$ candies per box.'
        ],
        finalAnswerAr: 'يضع في كل علبة $36 \\div 4 = 9$ قطع حلوى.',
        finalAnswerEn: '$36 \\div 4 = 9$ candies per box.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-math2-1',
        questionAr: 'ما هو حاصل ضرب: $8 \\times 7$؟',
        questionEn: 'What is the product of $8 \\times 7$?',
        optionsAr: ['$56$', '$54$', '$64$', '$48$'],
        optionsEn: ['$56$', '$54$', '$64$', '$48$'],
        correctIndex: 0,
        rationaleAr: '$8 \\times 7 = 56$ بحسب حقائق جدول الضرب.',
        rationaleEn: '$8 \\times 7 = 56$.'
      },
      {
        id: 'fa-p3-math2-2',
        questionAr: 'أي من المعادلات التالية تكمل عائلة الحقائق التي تضم $4 \\times 9 = 36$؟',
        questionEn: 'Which equation completes the fact family containing $4 \\times 9 = 36$?',
        optionsAr: ['$36 \\div 9 = 4$', '$36 + 4 = 40$', '$36 - 9 = 27$', '$4 \\times 4 = 16$'],
        optionsEn: ['$36 \\div 9 = 4$', '$36 + 4 = 40$', '$36 - 9 = 27$', '$4 \\times 4 = 16$'],
        correctIndex: 0,
        rationaleAr: 'القسمة $36 \\div 9 = 4$ هي العملية العكسية للضرب $4 \\times 9 = 36$.',
        rationaleEn: '$36 \\div 9 = 4$ is part of the inverse fact family.'
      },
      {
        id: 'fa-p3-math2-3',
        questionAr: 'مصفوفة مكونة من 4 صفوف وفي كل صف 6 تفاحات، ما المعادلة التي تعبر عن إجمالي التفاح؟',
        questionEn: 'An array has 4 rows with 6 apples in each row. Which equation represents the total?',
        optionsAr: ['$4 \\times 6 = 24$', '$4 + 6 = 10$', '$6 - 4 = 2$', '$24 \\div 6 = 3$'],
        optionsEn: ['$4 \\times 6 = 24$', '$4 + 6 = 10$', '$6 - 4 = 2$', '$24 \\div 6 = 3$'],
        correctIndex: 0,
        rationaleAr: 'إجمالي عناصر المصفوفة = عدد الصفوف $\\times$ عدد الأعمدة = $4 \\times 6 = 24$.',
        rationaleEn: 'Array total equals $\\text{Rows} \\times \\text{Columns} = 4 \\times 6 = 24$.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة مفهوم الضرب كجمع متكرر ومصفوفات، وجداول الضرب من 0 إلى 10، ومفهوم القسمة وعائلات الحقائق (Fact Families) التي تربط الضرب بالقسمة.',
    summaryEn: 'We learned multiplication as repeated addition and arrays, times tables from 0 to 10, division concepts, and fact families relating multiplication and division.',

    assessment: {
      id: 'quiz-p3-math-2',
      lectureId: 'p3-math-2',
      titleAr: 'اختبار المحاضرة 2: الضرب والقسمة والمصفوفات وجداول الضرب',
      titleEn: 'Assessment 2: Multiplication, Division, Arrays & Fact Families',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-math2-1',
          textAr: 'ما ناتج: $9 \\times 7$؟',
          textEn: 'What is $9 \\times 7$?',
          optionsAr: ['$63$', '$72$', '$54$', '$56$'],
          optionsEn: ['$63$', '$72$', '$54$', '$56$'],
          correctIndex: 0,
          conceptTestedAr: 'جدول الضرب 9',
          conceptTestedEn: 'Multiplication Table 9',
          explanationAr: '$9 \\times 7 = 63$.',
          explanationEn: '$9 \\times 7 = 63$.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math2-2',
          textAr: 'ما ناتج قسمة: $48 \\div 6$؟',
          textEn: 'What is $48 \\div 6$?',
          optionsAr: ['$8$', '$7$', '$6$', '$9$'],
          optionsEn: ['$8$', '$7$', '$6$', '$9$'],
          correctIndex: 0,
          conceptTestedAr: 'القسمة الأساسية',
          conceptTestedEn: 'Basic Division Fact',
          explanationAr: '$48 \\div 6 = 8$ لأن $8 \\times 6 = 48$.',
          explanationEn: '$48 \\div 6 = 8$ because $8 \\times 6 = 48$.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math2-3',
          textAr: 'أي من الخصائص التالية توضح أن $5 \\times 8 = 8 \\times 5$؟',
          textEn: 'Which property demonstrates that $5 \\times 8 = 8 \\times 5$?',
          optionsAr: [
            'خاصية الإبدال (Commutative Property)',
            'خاصية الصفر (Zero Property)',
            'خاصية العنصر المحايد (Identity Property)',
            'خاصية التجميع'
          ],
          optionsEn: [
            'Commutative Property of Multiplication',
            'Zero Property',
            'Identity Property',
            'Associative Property'
          ],
          correctIndex: 0,
          conceptTestedAr: 'خاصية الإبدال في الضرب',
          conceptTestedEn: 'Commutative Property',
          explanationAr: 'خاصية الإبدال تنص على أن تغيير ترتيب العوامل لا يغير حاصل الضرب.',
          explanationEn: 'The commutative property states that changing factor order does not change the product.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math2-4',
          textAr: 'وزع معلم 35 كراسة على 5 طلاب بالتساوي. ما الجملة العددية المعبرة عن نصيب كل طالب؟',
          textEn: 'A teacher distributed 35 notebooks equally among 5 students. What is the correct division sentence?',
          optionsAr: ['$35 \\div 5 = 7$', '$35 - 5 = 30$', '$35 + 5 = 40$', '$5 \\times 5 = 25$'],
          optionsEn: ['$35 \\div 5 = 7$', '$35 - 5 = 30$', '$35 + 5 = 40$', '$5 \\times 5 = 25$'],
          correctIndex: 0,
          conceptTestedAr: 'مسائل كلامية على القسمة',
          conceptTestedEn: 'Division Word Problem',
          explanationAr: 'التوزيع بالتساوي يعني القسمة: $35 \\div 5 = 7$ كراسات لكل طالب.',
          explanationEn: 'Equal distribution means division: $35 \\div 5 = 7$.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-math2-5',
          textAr: 'ما ناتج: $0 \\times 125$؟',
          textEn: 'What is $0 \\times 125$?',
          optionsAr: ['$0$', '$125$', '$1$', '$1,250$'],
          optionsEn: ['$0$', '$125$', '$1$', '$1,250$'],
          correctIndex: 0,
          conceptTestedAr: 'خاصية الصفر في الضرب',
          conceptTestedEn: 'Zero Property of Multiplication',
          explanationAr: 'ضرب أي عدد في صفر يعطي دائماً صفراً.',
          explanationEn: 'Any number multiplied by 0 always equals 0.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: FRACTIONS, EQUIVALENT FRACTIONS & NUMBER LINE ──
  {
    id: 'p3-math-3',
    order: 3,
    titleAr: 'المحاضرة 3: الكسور والكسور المتكافئة وخط الأعداد (Fractions & Number Line)',
    titleEn: 'Lecture 3: Fractions, Unit Fractions, Equivalent Fractions & Number Line (Primary 3)',
    subtitleAr: 'فهم البسط والمقام، كسور الوحدة (Unit Fractions)، الكسور المتكافئة، وتمثيل ومقارنة الكسور على خط الأعداد',
    subtitleEn: 'Master numerator/denominator, unit fractions, equivalent fractions, and plotting fractions on the number line.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'Chapter 3: Understanding Fractions & Visual Models',
    unitTitleEn: 'Chapter 3: Understanding Fractions & Visual Models',
    lessonNumberAr: 'الدرس 3: الكسور، الكسور المتكافئة وخط الأعداد',
    lessonNumberEn: 'Lesson 3: Fractions, Equivalent Fractions & Number Line',

    keyConceptsAr: [
      'مفهوم الكسر وأجزاؤه (Fraction Concept):',
      '  - الكسر يمثل جزءاً من كل مقسم إلى أجزاء متساوية (Equal Parts).',
      '  - **البسط (Numerator):** الرقم العلوي ويعبر عن عدد الأجزاء المحددة أو المظللة.',
      '  - **المقام (Denominator):** الرقم السفلي ويعبر عن العدد الكلي لجميع الأجزاء المتساوية في الواحد الصحيح.',
      '  - كسر الوحدة (Unit Fraction): كسر بسطه دائماً $1$ مثل: $\\frac{1}{2}, \\frac{1}{3}, \\frac{1}{4}, \\frac{1}{6}, \\frac{1}{8}$.',
      'تمثيل الكسور على خط الأعداد (Fractions on a Number Line):',
      '  - نقسم المسافة بين $0$ و $1$ إلى عدد من الأجزاء المتساوية يساوي قيمة المقام.',
      'الكسور المتكافئة (Equivalent Fractions):',
      '  - كسور مختلفة في الأرقام ولكنها تمثل نفس المقدار والمساحة من الكل.',
      '  - $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$.',
      'مقارنة الكسور (Comparing Fractions):',
      '  - **إذا تساوى المقامان (Same Denominators):** الكسر ذو البسط الأكبر هو الكسر الأكبر ($\\frac{3}{5} > \\frac{1}{5}$).',
      '  - **إذا تساوى البسطان (Same Numerators):** الكسر ذو المقام الأصغر هو الكسر الأكبر ($\\frac{1}{2} > \\frac{1}{4}$ لأن النصف أكبر من الربع).'
    ],
    keyConceptsEn: [
      'Fraction Components: Numerator (top counted parts) and Denominator (bottom total equal parts).',
      'Unit Fractions ($\frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{6}, \frac{1}{8}$).',
      'Plotting fractions on a number line partitioned from 0 to 1.',
      'Equivalent Fractions: Fractions with different numbers representing the same quantity ($\frac{1}{2} = \frac{2}{4} = \frac{4}{8}$).',
      'Comparing Fractions with like denominators or like numerators.'
    ],

    conceptMapAr: [
      'الكسر (بسط / مقام) ➔ كسور الوحدة ➔ خط الأعداد بين 0 و 1 ➔ الكسور المتكافئة ➔ مقارنة الكسور وترتيبها'
    ],
    conceptMapEn: [
      'Fraction (Numerator / Denominator) ➔ Unit Fractions ➔ Number Line ➔ Equivalent Fractions ➔ Comparing & Ordering'
    ],

    learningOutcomesAr: [
      'أن يحدد التلميذ البسط والمقام في أي كسر ويفسر معناهما بدقة.',
      'أن يمثل الكسور الاعتيادية على النماذج البصرية وعلى خط الأعداد من 0 إلى 1.',
      'أن يستنتج ويوجد كسوراً متكافئة باستخدام النماذج وشرائط الكسور (Fraction Strips).',
      'أن يقارن بين كسرين لهما نفس البسط أو نفس المقام باستخدام الرموز ($>$, $<$, $=$).'
    ],
    learningOutcomesEn: [
      'Identify and interpret the numerator and denominator in fractions.',
      'Model and partition fractions visually and along a 0-to-1 number line.',
      'Generate equivalent fractions using visual fraction strips.',
      'Compare fractions with common numerators or common denominators using ($>$, $<$, $=$).'
    ],

    vocabulary: [
      {
        termAr: 'البسط',
        termEn: 'Numerator',
        definitionAr: 'الرقم الموجود أعلى شرطة الكسر ويدل على عدد الأجزاء المظللة أو المأخوذة.'
      },
      {
        termAr: 'المقام',
        termEn: 'Denominator',
        definitionAr: 'الرقم الموجود أسفل شرطة الكسر ويدل على إجمالي عدد الأجزاء المتساوية في الشكل كله.'
      },
      {
        termAr: 'كسر الوحدة',
        termEn: 'Unit Fraction',
        definitionAr: 'كسر بسطه يساوي دائماً 1 (مثل نصف، ثلث، ربع، سدس).'
      },
      {
        termAr: 'الكسور المتكافئة',
        termEn: 'Equivalent Fractions',
        definitionAr: 'كسور لها نفس القيمة والمقدار رغم اختلاف أرقام البسط والمقام.'
      }
    ],

    warmupHookAr: 'تخيل أن لديك بيتزا لذيذة وقسمتها إلى 4 قطع متساوية، وأكلت أنت وصديقك قطعتين. كم يمثل ذلك من البيتزا؟ $\\frac{2}{4}$ وهي تكافئ النصف تماماً $\\frac{1}{2}$! هل تفضل أن تأخذ $\\frac{1}{3}$ كعكة أم $\\frac{1}{6}$ الكعكة؟ هيا نستكشف عالم الكسور الممتع!',
    warmupHookEn: 'Imagine slicing a pizza into 4 equal slices and eating 2 slices: that is $\\frac{2}{4}$, which is exactly half ($\frac{1}{2}$) of the whole pizza! Would you rather have $\\frac{1}{3}$ or $\\frac{1}{6}$ of a chocolate cake? Let us discover fraction models, number lines, and equivalent fractions!',

    mainContentAr: `
### 1. ما هو الكسر؟ (What is a Fraction?)
الكسر هو طريقة رياضية للتعبير عن أجزاء متساوية من كل واحد صحيح:

$$\\text{Fraction} = \\frac{\\text{Numerator (البسط: الأجزاء المظللة)}}{\\text{Denominator (المقام: إجمالي الأجزاء المتساوية)}}$$

* 🍕 **أمثلة:**
  - إذا قسمنا رغيف خبز إلى قطعتين متساويتين وأخذنا قطعة: الكسر هو $\\frac{1}{2}$ (النصف - One Half).
  - إذا قسمنا قالباً إلى 4 أجزاء متساوية وظللنا 3 أجزاء: الكسر هو $\\frac{3}{4}$ (ثلاثة أرباع - Three Fourths).

---

### 2. تمثيل الكسور على خط الأعداد (Fractions on a Number Line)
- خط الأعداد للكسور يبدأ من $0$ وينتهي عند $1$.
- لتمثيل الكسر $\\frac{3}{4}$ على خط الأعداد:
  1. نقسم المسافة بين $0$ و $1$ إلى **4 مسافات متساوية**.
  2. نحدد النقاط: $0, \\frac{1}{4}, \\frac{2}{4}, \\frac{3}{4}, \\frac{4}{4} = 1$.
  3. النقطة $\\frac{3}{4}$ تقع بعد ثلاث خطوات من الصفر.

---

### 3. الكسور المتكافئة (Equivalent Fractions)
الكسور المتكافئة هي كسور متساوية في القيمة وتمثل نفس المساحة:
- $\\frac{1}{2} = \\frac{2}{4} = \\frac{3}{6} = \\frac{4}{8}$
- قاعدة: إذا ضربنا كلاً من البسط والمقام في نفس العدد (غير الصفر)، نحصل على كسر متكافئ:
  $$\\frac{1 \\times 2}{2 \\times 2} = \\frac{2}{4}, \\quad \\frac{1 \\times 3}{2 \\times 3} = \\frac{3}{6}$$

---

### 4. مقارنة الكسور (Comparing Fractions)
* **الحالة الأولى: المقامات متساوية (Same Denominators):**
  - ننظر للبسط؛ البسط الأكبر يعطي كسراً أكبر.
  - مثال: $\\frac{4}{7} > \\frac{2}{7}$ لأن 4 أجزاء من 7 أكبر من جزأين من 7.

* **الحالة الثانية: البسوط متساوية (Same Numerators):**
  - ننظر للمقام؛ المقام الأصغر يعطي كسراً أكبر (لأن القطع تكون أكبر حجماً).
  - مثال: $\\frac{1}{2} > \\frac{1}{4}$ لأن النصف أكبر من الربع.

---

### 5. Interactive Diagram: Fraction Models & Number Line
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  
  <!-- Fraction Strips Equivalent -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">Equivalent Fractions Strips</text>
    <rect x="25" y="55" width="280" height="25" fill="#3b82f6" rx="4"/>
    <text x="165" y="72" fill="#fff" font-size="12" text-anchor="middle">1 Whole (1/1)</text>
    
    <rect x="25" y="90" width="140" height="25" fill="#10b981" rx="4"/>
    <rect x="165" y="90" width="140" height="25" fill="#059669" rx="4"/>
    <text x="95" y="107" fill="#fff" font-size="12" text-anchor="middle">1/2</text>
    <text x="235" y="107" fill="#fff" font-size="12" text-anchor="middle">1/2</text>
    
    <rect x="25" y="125" width="70" height="25" fill="#f59e0b" rx="4"/>
    <rect x="95" y="125" width="70" height="25" fill="#d97706" rx="4"/>
    <rect x="165" y="125" width="70" height="25" fill="#f59e0b" rx="4"/>
    <rect x="235" y="125" width="70" height="25" fill="#d97706" rx="4"/>
    <text x="60" y="142" fill="#fff" font-size="11" text-anchor="middle">1/4</text>
    <text x="130" y="142" fill="#fff" font-size="11" text-anchor="middle">1/4</text>
    
    <text x="165" y="175" fill="#fbbf24" font-size="13" font-weight="bold" text-anchor="middle">1/2 = 2/4 = 4/8</text>
  </g>

  <!-- Number Line 0 to 1 -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">Fractions on a Number Line</text>
    <line x1="30" y1="90" x2="300" y2="90" stroke="#f8fafc" stroke-width="3"/>
    <circle cx="30" cy="90" r="5" fill="#38bdf8"/>
    <text x="30" y="120" fill="#f8fafc" font-size="13" text-anchor="middle">0</text>
    
    <circle cx="120" cy="90" r="5" fill="#34d399"/>
    <text x="120" y="120" fill="#34d399" font-size="13" text-anchor="middle">1/3</text>
    
    <circle cx="210" cy="90" r="5" fill="#fbbf24"/>
    <text x="210" y="120" fill="#fbbf24" font-size="13" text-anchor="middle">2/3</text>
    
    <circle cx="300" cy="90" r="5" fill="#ec4899"/>
    <text x="300" y="120" fill="#ec4899" font-size="13" text-anchor="middle">3/3 = 1</text>
    
    <text x="165" y="165" fill="#f8fafc" font-size="12" text-anchor="middle">Same Numerators: 1/2 &gt; 1/3 &gt; 1/4</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Fraction Fundamentals
- Numerator: Top number indicating counted parts.
- Denominator: Bottom number indicating total equal parts in the whole.
- Unit Fraction: A fraction with a numerator of 1 ($\frac{1}{2}, \frac{1}{3}, \frac{1}{4}, \frac{1}{6}, \frac{1}{8}$).

### 2. Plotting Fractions on a Number Line (0 to 1)
- Partition the distance between 0 and 1 into $D$ equal intervals matching the denominator.
- Plot and locate the point corresponding to the numerator count.

### 3. Equivalent Fractions
- Fractions that represent the same area and size: $\frac{1}{2} = \frac{2}{4} = \frac{3}{6} = \frac{4}{8}$.

### 4. Comparing Fractions
- Like Denominators: Compare numerators ($\frac{5}{8} > \frac{3}{8}$).
- Like Numerators: Smaller denominator indicates larger fraction pieces ($\frac{1}{3} > \frac{1}{6}$).
`,

    workedExamples: [
      {
        id: 'ex-p3-math3-1',
        titleAr: 'مثال 1: إيجاد كسرين متكافئين لكسر معطى',
        titleEn: 'Example 1: Generating Equivalent Fractions',
        problemAr: 'أوجد كسرين متكافئين للكسر $\\frac{2}{3}$.',
        problemEn: 'Find two equivalent fractions for $\\frac{2}{3}$.',
        stepByStepSolutionAr: [
          'الخطوة 1: نضرب البسط والمقام في 2: $\\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$.',
          'الخطوة 2: نضرب البسط والمقام في 3: $\\frac{2 \\times 3}{3 \\times 3} = \\frac{6}{9}$.',
          'الاستنتاج: الكسران المتكافئان هما $\\frac{4}{6}$ و $\\frac{6}{9}$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Multiply numerator and denominator by 2: $\\frac{2 \\times 2}{3 \\times 2} = \\frac{4}{6}$.',
          'Step 2: Multiply numerator and denominator by 3: $\\frac{2 \\times 3}{3 \\times 3} = \\frac{6}{9}$.',
          'Conclusion: Equivalent fractions are $\\frac{4}{6}$ and $\\frac{6}{9}$.'
        ],
        finalAnswerAr: 'الكسران المتكافئان لـ $\\frac{2}{3}$ هما $\\frac{4}{6}$ و $\\frac{6}{9}$.',
        finalAnswerEn: 'Equivalent fractions for $\\frac{2}{3}$ are $\\frac{4}{6}$ and $\\frac{6}{9}$.'
      },
      {
        id: 'ex-p3-math3-2',
        titleAr: 'مثال 2: مقارنة كسرين لهما نفس البسط',
        titleEn: 'Example 2: Comparing Fractions with Like Numerators',
        problemAr: 'قارن بين الكسرين باستخدام ($>$, $<$, $=$): $\\frac{3}{4}$ و $\\frac{3}{8}$.',
        problemEn: 'Compare using ($>$, $<$, $=$): $\\frac{3}{4}$ and $\\frac{3}{8}$.',
        stepByStepSolutionAr: [
          'الخطوة 1: نلاحظ أن البسطين متساويان (كلاهما 3).',
          'الخطوة 2: قاعدة: عند تساوي البسطين، الكسر ذو المقام الأصغر هو الأكبر لأن أجزاء الربع ($1/4$) أكبر بكثير من أجزاء الثمن ($1/8$).',
          'الخطوة 3: بما أن $4 < 8$ في المقام، فإن $\\frac{3}{4} > \\frac{3}{8}$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Both fractions have the same numerator (3).',
          'Step 2: When numerators are equal, smaller denominator means larger slice pieces.',
          'Step 3: Since $4 < 8$ in denominator, $\\frac{3}{4} > \\frac{3}{8}$.'
        ],
        finalAnswerAr: '$\\frac{3}{4} > \\frac{3}{8}$',
        finalAnswerEn: '$\\frac{3}{4} > \\frac{3}{8}$'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-math3-1',
        problemAr: 'ما الكسر الذي يمثله الحرف (M) الواقع في منتصف المسافة بين 0 و 1 على خط الأعداد؟',
        problemEn: 'What fraction is represented by point M at the exact midpoint between 0 and 1 on a number line?',
        solutionStepsAr: [
          '1. منتصف المسافة بين 0 و 1 يقسم الواحد الصحيح إلى جزأين متساويين.',
          '2. النقطة في المنتصف تمثل الكسر $\\frac{1}{2}$ (أو $\\frac{2}{4}$ أو $\\frac{4}{8}$).'
        ],
        solutionStepsEn: [
          '1. Midpoint divides the unit length into 2 equal parts.',
          '2. The fraction at midpoint is $\\frac{1}{2}$.'
        ],
        finalAnswerAr: 'النقطة M تمثل النصف $\\frac{1}{2}$.',
        finalAnswerEn: 'Point M represents $\\frac{1}{2}$.'
      },
      {
        id: 'tb-p3-math3-2',
        problemAr: 'رتب الكسور التالية تصاعدياً من الأصغر إلى الأكبر: $\\frac{1}{6}, \\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}$',
        problemEn: 'Order the unit fractions from least to greatest: $\\frac{1}{6}, \\frac{1}{2}, \\frac{1}{4}, \\frac{1}{8}$',
        solutionStepsAr: [
          '1. جميعها كسور وحدة (بسطها 1).',
          '2. المقام الأكبر يعني قطعة أصغر: $8 > 6 > 4 > 2$.',
          '3. الترتيب التصاعدي من الأصغر للأكبر: $\\frac{1}{8} < \\frac{1}{6} < \\frac{1}{4} < \\frac{1}{2}$.'
        ],
        solutionStepsEn: [
          '1. All are unit fractions with numerator 1.',
          '2. Larger denominator produces smaller fraction values.',
          '3. Order: $\\frac{1}{8} < \\frac{1}{6} < \\frac{1}{4} < \\frac{1}{2}$.'
        ],
        finalAnswerAr: 'الترتيب: $\\frac{1}{8}, \\frac{1}{6}, \\frac{1}{4}, \\frac{1}{2}$.',
        finalAnswerEn: 'Order: $\\frac{1}{8}, \\frac{1}{6}, \\frac{1}{4}, \\frac{1}{2}$.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-math3-1',
        questionAr: 'أي من الكسور التالية يكافئ الكسر $\\frac{1}{2}$؟',
        questionEn: 'Which of the following is an Equivalent Fraction to $\\frac{1}{2}$?',
        optionsAr: ['$\\frac{4}{8}$', '$\\frac{2}{5}$', '$\\frac{3}{7}$', '$\\frac{1}{4}$'],
        optionsEn: ['$\\frac{4}{8}$', '$\\frac{2}{5}$', '$\\frac{3}{7}$', '$\\frac{1}{4}$'],
        correctIndex: 0,
        rationaleAr: '$\\frac{4}{8}$ يكافئ النصف لأن $4$ هي نصف $8$.',
        rationaleEn: '$\\frac{4}{8} = \\frac{1}{2}$ because 4 is half of 8.'
      },
      {
        id: 'fa-p3-math3-2',
        questionAr: 'في الكسر $\\frac{5}{6}$، ماذا نسمي الرقم 5؟',
        questionEn: 'In the fraction $\\frac{5}{6}$, what is the number 5 called?',
        optionsAr: ['البسط (Numerator)', 'المقام (Denominator)', 'الناتج (Product)', 'المقسوم عليه'],
        optionsEn: ['Numerator', 'Denominator', 'Product', 'Divisor'],
        correctIndex: 0,
        rationaleAr: 'الرقم العلوي فوق شرطة الكسر يسمى البسط (Numerator).',
        rationaleEn: 'The top number in a fraction is the Numerator.'
      },
      {
        id: 'fa-p3-math3-3',
        questionAr: 'أي المقارنات التالية صحيحة؟',
        questionEn: 'Which of the following comparison statements is true?',
        optionsAr: ['$\\frac{5}{9} > \\frac{2}{9}$', '$\\frac{1}{8} > \\frac{1}{2}$', '$\\frac{3}{5} < \\frac{1}{5}$', '$\\frac{2}{4} = \\frac{1}{3}$'],
        optionsEn: ['$\\frac{5}{9} > \\frac{2}{9}$', '$\\frac{1}{8} > \\frac{1}{2}$', '$\\frac{3}{5} < \\frac{1}{5}$', '$\\frac{2}{4} = \\frac{1}{3}$'],
        correctIndex: 0,
        rationaleAr: 'عند تساوي المقامات (9)، يكون $5 > 2$ إذن $\\frac{5}{9} > \\frac{2}{9}$.',
        rationaleEn: 'With common denominator 9, $5 > 2$ so $\\frac{5}{9} > \\frac{2}{9}$.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة مفهوم البسط والمقام وكسور الوحدة، وتمثيل الكسور على خط الأعداد بين 0 و 1، وإيجاد الكسور المتكافئة ومقارنة الكسور ذات المقامات أو البسوط المتساوية.',
    summaryEn: 'We mastered numerators, denominators, unit fractions, number line partitioning, equivalent fractions, and comparing fractions.',

    assessment: {
      id: 'quiz-p3-math-3',
      lectureId: 'p3-math-3',
      titleAr: 'اختبار المحاضرة 3: الكسور والكسور المتكافئة وخط الأعداد',
      titleEn: 'Assessment 3: Fractions, Equivalent Fractions & Number Line',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-math3-1',
          textAr: 'ما الكسر الذي يعبر عن 3 أجزاء مظللة من أصل 8 أجزاء متساوية؟',
          textEn: 'What fraction represents 3 shaded parts out of 8 total equal parts?',
          optionsAr: ['$\\frac{3}{8}$', '$\\frac{8}{3}$', '$\\frac{5}{8}$', '$\\frac{3}{5}$'],
          optionsEn: ['$\\frac{3}{8}$', '$\\frac{8}{3}$', '$\\frac{5}{8}$', '$\\frac{3}{5}$'],
          correctIndex: 0,
          conceptTestedAr: 'كتابة الكسر من النموذج',
          conceptTestedEn: 'Writing Fraction from Model',
          explanationAr: 'البسط هو عدد الأجزاء المظللة (3) والمقام هو الإجمالي (8) ➔ $\\frac{3}{8}$.',
          explanationEn: 'Numerator is shaded parts (3) and denominator is total parts (8) ➔ $\\frac{3}{8}$.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math3-2',
          textAr: 'أي من الكسور التالية يمثل كسر وحدة (Unit Fraction)؟',
          textEn: 'Which of the following is a Unit Fraction?',
          optionsAr: ['$\\frac{1}{7}$', '$\\frac{3}{7}$', '$\\frac{7}{1}$', '$\\frac{4}{4}$'],
          optionsEn: ['$\\frac{1}{7}$', '$\\frac{3}{7}$', '$\\frac{7}{1}$', '$\\frac{4}{4}$'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف كسر الوحدة',
          conceptTestedEn: 'Unit Fraction Definition',
          explanationAr: 'كسر الوحدة هو الكسر الذي بسطه يساوي 1 دائماً.',
          explanationEn: 'A unit fraction has a numerator equal to 1.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math3-3',
          textAr: 'إذا كان $\\frac{2}{5} = \\frac{x}{10}$، فما هي قيمة $x$؟',
          textEn: 'If $\\frac{2}{5} = \\frac{x}{10}$, what is the value of $x$?',
          optionsAr: ['$4$', '$5$', '$6$', '$2$'],
          optionsEn: ['$4$', '$5$', '$6$', '$2$'],
          correctIndex: 0,
          conceptTestedAr: 'إيجاد المجهول في الكسور المتكافئة',
          conceptTestedEn: 'Equivalent Fractions Missing Numerator',
          explanationAr: 'ضربنا المقام $5 \\times 2 = 10$، فنضرب البسط $2 \\times 2 = 4$. إذن $x = 4$.',
          explanationEn: 'Denominator was multiplied by 2 ($5 \\times 2 = 10$), so multiply numerator $2 \\times 2 = 4$.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-math3-4',
          textAr: 'أي العلاقات التالية صحيحة؟',
          textEn: 'Which statement is mathematically true?',
          optionsAr: ['$\\frac{1}{3} > \\frac{1}{5}$', '$\\frac{1}{3} < \\frac{1}{5}$', '$\\frac{1}{3} = \\frac{1}{5}$', '$\\frac{1}{5} > \\frac{1}{2}$'],
          optionsEn: ['$\\frac{1}{3} > \\frac{1}{5}$', '$\\frac{1}{3} < \\frac{1}{5}$', '$\\frac{1}{3} = \\frac{1}{5}$', '$\\frac{1}{5} > \\frac{1}{2}$'],
          correctIndex: 0,
          conceptTestedAr: 'مقارنة كسور الوحدة',
          conceptTestedEn: 'Comparing Unit Fractions',
          explanationAr: 'الثلث أكبر من الخمس لأن تقسيم الشيء لـ 3 أجزاء يعطي أجزاء أكبر من تقسيمه لـ 5.',
          explanationEn: 'One third is greater than one fifth because fewer partitions produce larger portions.',
          difficulty: 'medium'
        },
        {
          id: 'q-p3-math3-5',
          textAr: 'ما الكسر الذي يمثل الواحد الصحيح الكامل في الأشكال المقسمة إلى 6 أجزاء؟',
          textEn: 'Which fraction represents one full whole for a shape partitioned into 6 parts?',
          optionsAr: ['$\\frac{6}{6}$', '$\\frac{1}{6}$', '$\\frac{6}{1}$', '$\\frac{0}{6}$'],
          optionsEn: ['$\\frac{6}{6}$', '$\\frac{1}{6}$', '$\\frac{6}{1}$', '$\\frac{0}{6}$'],
          correctIndex: 0,
          conceptTestedAr: 'الواحد الصحيح في صورة كسر',
          conceptTestedEn: 'Fraction Equal to Whole (1)',
          explanationAr: 'عندما يتساوى البسط والمقام فإن الكسر يساوي الواحد الصحيح: $\\frac{6}{6} = 1$.',
          explanationEn: 'When numerator equals denominator, the fraction equals 1 whole ($\frac{6}{6} = 1$).',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: PERIMETER, AREA, TIME & CAPACITY/MASS MEASUREMENT ──
  {
    id: 'p3-math-4',
    order: 4,
    titleAr: 'المحاضرة 4: المحيط والمساحة وقراءة الوقت والقياس (Perimeter, Area & Measurement)',
    titleEn: 'Lecture 4: Perimeter, Area (L x W), Time to the Minute & Measurement (Primary 3)',
    subtitleAr: 'حساب محيط ومساحة الأشكال الهندسية، قراءة الساعة بالدقائق وإدارة الوقت، ووحدات السعة والكتلة (L, mL, g, kg)',
    subtitleEn: 'Calculate perimeter and area ($L \\times W$), tell time to the minute and elapsed time, and measure capacity and mass.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الثالث الابتدائي (الصف 3) - ماث مدارس اللغات (التعليم 2.0)',
    gradeLevelNameEn: 'Grade 3 / Primary 3 - Math (Edu 2.0 Language Schools)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'Chapter 4: Geometry, Perimeter, Area & Measurement Units',
    unitTitleEn: 'Chapter 4: Geometry, Perimeter, Area & Measurement Units',
    lessonNumberAr: 'الدرس 4: المحيط، المساحة، الوقت والقياس',
    lessonNumberEn: 'Lesson 4: Perimeter, Area, Time to the Minute & Measurement',

    keyConceptsAr: [
      'المحيط (Perimeter):',
      '  - المحيط هو المسافة الخارجية المحيطة بأي شكل هندسي مغلق (مجموع أطوال الأضلاع الخارجية).',
      '  - محيط المستطيل: $\\text{Perimeter} = 2 \\times (\\text{Length} + \\text{Width})$ أو $L + W + L + W$.',
      '  - محيط المربع: $\\text{Perimeter} = 4 \\times \\text{Side Length}$.',
      'المساحة (Area):',
      '  - المساحة هي مقدار السطح الداخلي المغطى بالوحدات المربعة (Square Units).',
      '  - مساحة المستطيل: $\\text{Area} = \\text{Length} \\times \\text{Width}$ ($A = L \\times W$).',
      '  - مساحة المربع: $\\text{Area} = \\text{Side Length} \\times \\text{Side Length}$ ($A = s \\times s$).',
      'قراءة الوقت بالدقائق والوقت المنقضي (Telling Time & Elapsed Time):',
      '  - الساعة التناظرية والرقمية: عقرب الساعات القصير وعقرب الدقائق الطويل.',
      '  - قراءة الدقائق بالعد القفزي بـ 5 ثم إضافة الدقائق الفردية بدقة.',
      '  - الوقت المنقضي (Elapsed Time): حساب الفترة الزمنية بين بداية النشاط ونهايته.',
      'وحدات قياس السعة والكتلة (Capacity & Mass):',
      '  - **السعة (Capacity):** لقياس حجم السوائل؛ اللتر ($1\\text{ L} = 1,000\\text{ mL}$).',
      '  - **الكتلة والوزن (Mass):** الجرام ($g$) للأشياء الخفيفة كالمشبك، والكيلوجرام ($1\\text{ kg} = 1,000\\text{ g}$) للأشياء الثقيلة.'
    ],
    keyConceptsEn: [
      'Perimeter: Outer boundary length ($P = \text{Sum of all side lengths}$; Rectangle $P = 2(L + W)$, Square $P = 4s$).',
      'Area: Surface space covered in square units (Rectangle $A = L \times W$, Square $A = s \times s$).',
      'Telling Time to the Minute and calculating Elapsed Time.',
      'Measurement Units: Capacity ($1\text{ L} = 1,000\text{ mL}$) and Mass ($1\text{ kg} = 1,000\text{ g}$).'
    ],

    conceptMapAr: [
      'المحيط (إطار خارجي) ➔ المساحة (سطح داخلي L x W) ➔ قراءة الوقت بالدقيقة والوقت المنقضي ➔ السعة والكتلة (L/mL و kg/g)'
    ],
    conceptMapEn: [
      'Perimeter (Outer Boundary) ➔ Area (Inner Surface L x W) ➔ Time to the Minute & Elapsed Time ➔ Capacity & Mass (L/mL & kg/g)'
    ],

    learningOutcomesAr: [
      'أن يحسب التلميذ محيط أي مضلع أو مستطيل أو مربع بجمع أطوال أضلاعه.',
      'أن يطبق قانون المساحة ($L \\times W$) لحساب مساحات المستطيلات والمربعات بالوحدات المربعة.',
      'أن يقرأ الساعة التناظرية والرقمية بدقة بالدقائق ويحسب الوقت المنقضي لأنشطة يومية.',
      'أن يميز ويحول بين وحدات السعة ($L, mL$) ووحدات الكتلة ($kg, g$).'
    ],
    learningOutcomesEn: [
      'Calculate the perimeter of polygons, rectangles, and squares.',
      'Apply the area formula ($A = L \times W$) using square units.',
      'Read analog and digital clocks to the exact minute and compute elapsed time intervals.',
      'Convert and apply units of capacity ($L, mL$) and mass ($kg, g$).'
    ],

    vocabulary: [
      {
        termAr: 'المحيط',
        termEn: 'Perimeter',
        definitionAr: 'المسافة الكلية حول الإطار الخارجي للشكل الهندسي المغلق (يقاس بوحدات الطول: cm, m).'
      },
      {
        termAr: 'المساحة',
        termEn: 'Area',
        definitionAr: 'مقدار الحيز أو السطح الداخلي للشكل الهندسي (يقاس بالوحدات المربعة: $\\text{cm}^2, \\text{m}^2$).'
      },
      {
        termAr: 'الوقت المنقضي',
        termEn: 'Elapsed Time',
        definitionAr: 'مقدار الوقت الذي يمر بين وقت بداية حدث معين ووقت نهايته.'
      },
      {
        termAr: 'اللتر والمليلتر',
        termEn: 'Liter & Milliliter',
        definitionAr: 'وحدات قياس السعة للسوائل؛ اللتر ($L$) للسوائل الكبيرة و $1\\text{ L} = 1,000\\text{ mL}$.'
      }
    ],

    warmupHookAr: 'إذا أردت وضع سور خشبي جميل حول حديقة مستطيلة طولها 6 أمتار وعرضها 4 أمتار، فما طول السور الذي تحتاجه؟ هذا هو **المحيط (Perimeter)**! وإذا أردت تغطية أرضية الحديقة بالعشب الأخضر، فكم متراً مربعاً تحتاج؟ هذه هي **المساحة (Area)**! هيا نتعلم قوانين المحيط والمساحة والساعة والقياس!',
    warmupHookEn: 'If you want to build a decorative wooden fence around a rectangular garden 6 meters long and 4 meters wide, how much fencing do you need? That is the **Perimeter**! And if you want to cover the inside with grass carpet, how many square meters do you need? That is the **Area**! Let\'s master perimeter, area, time, and measurement!',

    mainContentAr: `
### 1. المحيط مقابل المساحة (Perimeter vs Area)

* 📏 **المحيط (Perimeter - P):**
  - هو طول الخط الخارجي أو الإطار الذي يحيط بالشكل.
  - **محيط المستطيل:**
    $$\\text{Perimeter} = (\\text{Length} + \\text{Width}) \\times 2 = 2L + 2W$$
    - *مثال:* مستطيل طوله $7\\text{ cm}$ وعرضه $3\\text{ cm}$:
      $$P = (7 + 3) \\times 2 = 10 \\times 2 = 20\\text{ cm}$$
  - **محيط المربع:**
    $$\\text{Perimeter} = \\text{Side Length} \\times 4 = 4s$$
    - *مثال:* مربع طول ضلعه $5\\text{ cm}$ ➔ $P = 5 \\times 4 = 20\\text{ cm}$.

* 🟩 **المساحة (Area - A):**
  - هي مقدار السطح الداخلي المقاس بالوحدات المربعة (Square Units).
  - **مساحة المستطيل:**
    $$\\text{Area} = \\text{Length} \\times \\text{Width} = L \\times W$$
    - *مثال:* مستطيل أبعاده $7\\text{ cm}$ و $3\\text{ cm}$:
      $$\\text{Area} = 7 \\times 3 = 21\\text{ cm}^2 \\quad (\\text{سنتيمتر مربع})$$
  - **مساحة المربع:**
    $$\\text{Area} = \\text{Side} \\times \\text{Side} = s \\times s$$
    - *مثال:* مربع طول ضلعه $6\\text{ cm}$ ➔ $\\text{Area} = 6 \\times 6 = 36\\text{ cm}^2$.

---

### 2. قراءة الوقت بدقة وحساب الوقت المنقضي (Time & Elapsed Time)
- **قراءة الساعة التناظرية:**
  - عقرب الساعات القصير يشير للساعة.
  - عقرب الدقائق الطويل يشير للدقائق؛ كل رقم على الساعة يمثل $5$ دقائق ($1 \\rightarrow 5, 2 \\rightarrow 10, 3 \\rightarrow 15, ..., 12 \\rightarrow 60$).
- **الوقت المنقضي (Elapsed Time):**
  - بدأ أحمد مذاكرة الرياضيات الساعة $4:15\\text{ PM}$ وانتهى الساعة $5:00\\text{ PM}$.
  - الوقت المنقضي = من $4:15$ إلى $5:00$ = **$45$ دقيقة**.

---

### 3. وحدات قياس السعة والكتلة (Capacity & Mass Units)
* 🧃 **السعة (Capacity):**
  - **المليلتر ($mL$):** للسعات الصغيرة مثل ملعقة دواء أو قطارة ($5\\text{ mL}$).
  - **اللتر ($L$):** للسعات الكبيرة مثل زجاجة ماء أو قارورة حليب ($1\\text{ L} = 1,000\\text{ mL}$).

* ⚖️ **الكتلة والوزن (Mass):**
  - **الجرام ($g$):** للأشياء الخفيفة مثل مشبك ورق أو خاتم.
  - **الكيلوجرام ($kg$):** للأشياء الثقيلة مثل كيس أرز أو وزن الإنسان ($1\\text{ kg} = 1,000\\text{ g}$).

---

### 4. Interactive Diagram: Perimeter, Area & Measurement
\`\`\`xml
<svg viewBox="0 0 720 230" xmlns="http://www.w3.org/2000/svg" style="width:100%; height:auto; font-family:system-ui, sans-serif;">
  <rect width="720" height="230" fill="#0f172a" rx="16"/>
  
  <!-- Perimeter vs Area Box -->
  <g transform="translate(20, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#38bdf8" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#38bdf8" font-size="15" font-weight="bold" text-anchor="middle">Perimeter vs Area (Rectangle)</text>
    <rect x="55" y="55" width="220" height="70" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4" rx="6"/>
    <text x="165" y="95" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">Area = L × W (Inside Surface)</text>
    <text x="165" y="48" fill="#fbbf24" font-size="12" text-anchor="middle">Length = 8 cm</text>
    <text x="285" y="95" fill="#fbbf24" font-size="12" text-anchor="start">W = 4 cm</text>
    <text x="165" y="150" fill="#38bdf8" font-size="12" text-anchor="middle">Perimeter = 2 × (8 + 4) = 24 cm</text>
    <text x="165" y="175" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">Area = 8 × 4 = 32 cm²</text>
  </g>

  <!-- Units & Time Box -->
  <g transform="translate(370, 20)">
    <rect width="330" height="190" fill="#1e293b" stroke="#10b981" stroke-width="2" rx="12"/>
    <text x="165" y="30" fill="#34d399" font-size="15" font-weight="bold" text-anchor="middle">Time, Capacity & Mass Units</text>
    <text x="25" y="65" fill="#f8fafc" font-size="13">⏰ 1 Hour = <tspan fill="#34d399" font-weight="bold">60 Minutes</tspan></text>
    <text x="25" y="100" fill="#f8fafc" font-size="13">💧 Capacity: <tspan fill="#38bdf8" font-weight="bold">1 Liter (L) = 1,000 mL</tspan></text>
    <text x="25" y="135" fill="#f8fafc" font-size="13">⚖️ Mass: <tspan fill="#fbbf24" font-weight="bold">1 Kilogram (kg) = 1,000 g</tspan></text>
    <text x="25" y="170" fill="#f472b6" font-size="12" font-weight="bold">Elapsed Time = End Time - Start Time</text>
  </g>
</svg>
\`\`\`
`,
    mainContentEn: `
### 1. Perimeter vs Area Formulas
- **Perimeter ($P$):** Total boundary distance surrounding a 2D shape.
  - Rectangle: $P = 2 \times (L + W)$
  - Square: $P = 4 \times s$
- **Area ($A$):** Interior surface space measured in square units.
  - Rectangle: $A = L \times W$
  - Square: $A = s \times s$

### 2. Time & Elapsed Time
- Telling time to the minute using analog and digital clocks.
- Elapsed Time: Duration computed from start to finish.

### 3. Capacity and Mass Units
- Capacity: Liter ($L$) and Milliliter ($mL$) where $1\text{ L} = 1,000\text{ mL}$.
- Mass: Kilogram ($kg$) and Gram ($g$) where $1\text{ kg} = 1,000\text{ g}$.
`,

    workedExamples: [
      {
        id: 'ex-p3-math4-1',
        titleAr: 'مثال 1: حساب محيط ومساحة حديقة مستطيلة',
        titleEn: 'Example 1: Computing Perimeter and Area of a Rectangle',
        problemAr: 'حديقة مستطيلة الشكل طولها $9\\text{ m}$ وعرضها $5\\text{ m}$. احسب محيط الحديقة ومساحتها مع كتابة الوحدات الصحيحة.',
        problemEn: 'A rectangular garden has a length of 9 m and a width of 5 m. Calculate its perimeter and area with correct units.',
        stepByStepSolutionAr: [
          'الخطوة 1: قانون المحيط: $\\text{Perimeter} = 2 \\times (L + W) = 2 \\times (9 + 5) = 2 \\times 14 = 28\\text{ m}$.',
          'الخطوة 2: قانون المساحة: $\\text{Area} = L \\times W = 9 \\times 5 = 45\\text{ m}^2$.'
        ],
        stepByStepSolutionEn: [
          'Step 1: Perimeter formula: $P = 2 \times (L + W) = 2 \times (9 + 5) = 2 \times 14 = 28\text{ m}$.',
          'Step 2: Area formula: $A = L \times W = 9 \times 5 = 45\text{ m}^2$.'
        ],
        finalAnswerAr: 'المحيط = $28\\text{ m}$، والمساحة = $45\\text{ m}^2$.',
        finalAnswerEn: 'Perimeter = 28 m, Area = 45 m².'
      },
      {
        id: 'ex-p3-math4-2',
        titleAr: 'مثال 2: حساب الوقت المنقضي في تمرين السباحة',
        titleEn: 'Example 2: Calculating Elapsed Swimming Time',
        problemAr: 'بدأ تمرين السباحة الساعة $3:20\\text{ PM}$ وانتهى الساعة $4:10\\text{ PM}$. كم دقيقة استغرق التمرين؟',
        problemEn: 'A swimming practice began at 3:20 PM and ended at 4:10 PM. What was the elapsed time in minutes?',
        stepByStepSolutionAr: [
          'الخطوة 1: من الساعة $3:20$ حتى الساعة $4:00$ تمر $40$ دقيقة.',
          'الخطوة 2: من الساعة $4:00$ حتى الساعة $4:10$ تمر $10$ دقائق إضافية.',
          'الخطوة 3: إجمالي الوقت المنقضي = $40 + 10 = 50$ دقيقة.'
        ],
        stepByStepSolutionEn: [
          'Step 1: From 3:20 PM to 4:00 PM is 40 minutes.',
          'Step 2: From 4:00 PM to 4:10 PM is 10 minutes.',
          'Step 3: Total elapsed time = $40 + 10 = 50$ minutes.'
        ],
        finalAnswerAr: 'استغرق تمرين السباحة 50 دقيقة.',
        finalAnswerEn: 'Total elapsed time was 50 minutes.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-p3-math4-1',
        problemAr: 'مربع طول ضلعه $7\\text{ cm}$. احسب محيطه ومساحته.',
        problemEn: 'A square has a side length of 7 cm. Find its perimeter and area.',
        solutionStepsAr: [
          '1. محيط المربع = طول الضلع $\\times 4 = 7 \\times 4 = 28\\text{ cm}$.',
          '2. مساحة المربع = طول الضلع $\\times$ طول الضلع = $7 \\times 7 = 49\\text{ cm}^2$.'
        ],
        solutionStepsEn: [
          '1. Square Perimeter = $4 \times s = 4 \times 7 = 28\text{ cm}$.',
          '2. Square Area = $s \times s = 7 \times 7 = 49\text{ cm}^2$.'
        ],
        finalAnswerAr: 'المحيط = $28\\text{ cm}$، والمساحة = $49\\text{ cm}^2$.',
        finalAnswerEn: 'Perimeter = 28 cm, Area = 49 cm².'
      },
      {
        id: 'tb-p3-math4-2',
        problemAr: 'حول الوحدات التالية: (أ) $3\\text{ L} = \\dots\\text{ mL}$ ، (ب) $5\\text{ kg} = \\dots\\text{ g}$',
        problemEn: 'Convert: (A) $3\text{ L} = \dots\text{ mL}$, (B) $5\text{ kg} = \dots\text{ g}$',
        solutionStepsAr: [
          '(أ) $1\\text{ L} = 1,000\\text{ mL}$ ➔ $3 \\times 1,000 = 3,000\\text{ mL}$.',
          '(ب) $1\\text{ kg} = 1,000\\text{ g}$ ➔ $5 \\times 1,000 = 5,000\\text{ g}$.'
        ],
        solutionStepsEn: [
          '(A) $3\text{ L} = 3 \times 1,000 = 3,000\text{ mL}$.',
          '(B) $5\text{ kg} = 5 \times 1,000 = 5,000\text{ g}$.'
        ],
        finalAnswerAr: 'أ: $3,000\\text{ mL}$، ب: $5,000\\text{ g}$.',
        finalAnswerEn: 'A: 3,000 mL, B: 5,000 g.'
      }
    ],

    formativeAssessment: [
      {
        id: 'fa-p3-math4-1',
        questionAr: 'ما هي مساحة مستطيل طوله $8\\text{ cm}$ وعرضه $6\\text{ cm}$؟',
        questionEn: 'What is the area of a rectangle with length 8 cm and width 6 cm?',
        optionsAr: ['$48\\text{ cm}^2$', '$28\\text{ cm}$', '$14\\text{ cm}^2$', '$48\\text{ cm}$'],
        optionsEn: ['$48\\text{ cm}^2$', '$28\\text{ cm}$', '$14\\text{ cm}^2$', '$48\\text{ cm}$'],
        correctIndex: 0,
        rationaleAr: 'مساحة المستطيل = الطول $\\times$ العرض = $8 \\times 6 = 48\\text{ cm}^2$.',
        rationaleEn: 'Rectangle Area = $L \\times W = 8 \\times 6 = 48\\text{ cm}^2$.'
      },
      {
        id: 'fa-p3-math4-2',
        questionAr: 'كم مليلتر في 4 لترات كاملة من عصير البرتقال؟',
        questionEn: 'How many milliliters are in 4 full Liters of orange juice?',
        optionsAr: ['$4,000\\text{ mL}$', '$400\\text{ mL}$', '$40\\text{ mL}$', '$40,000\\text{ mL}$'],
        optionsEn: ['$4,000\\text{ mL}$', '$400\\text{ mL}$', '$40\\text{ mL}$', '$40,000\\text{ mL}$'],
        correctIndex: 0,
        rationaleAr: '$1\\text{ L} = 1,000\\text{ mL}$ ➔ $4\\text{ L} = 4,000\\text{ mL}$.',
        rationaleEn: '$4\\text{ L} = 4 \\times 1,000 = 4,000\\text{ mL}$.'
      },
      {
        id: 'fa-p3-math4-3',
        questionAr: 'إذا كان محيط مربع يساوي $32\\text{ cm}$، فما طول ضلعه؟',
        questionEn: 'If the perimeter of a square is 32 cm, what is the length of one side?',
        optionsAr: ['$8\\text{ cm}$', '$16\\text{ cm}$', '$4\\text{ cm}$', '$64\\text{ cm}$'],
        optionsEn: ['$8\\text{ cm}$', '$16\\text{ cm}$', '$4\\text{ cm}$', '$64\\text{ cm}$'],
        correctIndex: 0,
        rationaleAr: 'طول ضلع المربع = المحيط $\\div 4 = 32 \\div 4 = 8\\text{ cm}$.',
        rationaleEn: 'Square side length = $32 \\div 4 = 8\\text{ cm}$.'
      }
    ],

    summaryAr: 'تعلمنا في هذه المحاضرة قوانين حساب المحيط والمساحة للمستطيلات والمربعات، وقراءة الساعة بالدقائق والوقت المنقضي، والتحويل بين وحدات السعة والكتلة (L, mL, kg, g).',
    summaryEn: 'We mastered perimeter and area formulas ($L \\times W$), reading clocks to the minute and calculating elapsed time, and converting capacity and mass units.',

    assessment: {
      id: 'quiz-p3-math-4',
      lectureId: 'p3-math-4',
      titleAr: 'اختبار المحاضرة 4: المحيط والمساحة وقراءة الوقت والقياس',
      titleEn: 'Assessment 4: Perimeter, Area, Time & Measurement',
      passingScore: 80,
      questions: [
        {
          id: 'q-p3-math4-1',
          textAr: 'ما هو محيط مستطيل طوله $10\\text{ cm}$ وعرضه $4\\text{ cm}$؟',
          textEn: 'What is the perimeter of a rectangle with length 10 cm and width 4 cm?',
          optionsAr: ['$28\\text{ cm}$', '$40\\text{ cm}^2$', '$14\\text{ cm}$', '$20\\text{ cm}$'],
          optionsEn: ['$28\\text{ cm}$', '$40\\text{ cm}^2$', '$14\\text{ cm}$', '$20\\text{ cm}$'],
          correctIndex: 0,
          conceptTestedAr: 'قانون محيط المستطيل',
          conceptTestedEn: 'Perimeter of a Rectangle',
          explanationAr: 'المحيط = $2 \\times (10 + 4) = 2 \\times 14 = 28\\text{ cm}$.',
          explanationEn: '$P = 2 \times (10 + 4) = 28\text{ cm}$.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math4-2',
          textAr: 'ما هي مساحة مربع طول ضلعه $9\\text{ m}$؟',
          textEn: 'What is the area of a square with side length 9 m?',
          optionsAr: ['$81\\text{ m}^2$', '$36\\text{ m}$', '$18\\text{ m}^2$', '$81\\text{ m}$'],
          optionsEn: ['$81\\text{ m}^2$', '$36\\text{ m}$', '$18\\text{ m}^2$', '$81\\text{ m}$'],
          correctIndex: 0,
          conceptTestedAr: 'مساحة المربع',
          conceptTestedEn: 'Area of a Square',
          explanationAr: 'مساحة المربع = $9 \\times 9 = 81\\text{ m}^2$.',
          explanationEn: 'Area = $s \times s = 9 \times 9 = 81\text{ m}^2$.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math4-3',
          textAr: 'كم جراماً في 6 كيلوجرامات ($6\\text{ kg}$)?',
          textEn: 'How many grams are in 6 kilograms ($6\text{ kg}$)?',
          optionsAr: ['$6,000\\text{ g}$', '$600\\text{ g}$', '$60\\text{ g}$', '$60,000\\text{ g}$'],
          optionsEn: ['$6,000\\text{ g}$', '$600\\text{ g}$', '$60\\text{ g}$', '$60,000\\text{ g}$'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل من kg إلى g',
          conceptTestedEn: 'Kilograms to Grams Conversion',
          explanationAr: '$1\\text{ kg} = 1,000\\text{ g}$ ➔ $6\\text{ kg} = 6,000\\text{ g}$.',
          explanationEn: '$6\text{ kg} = 6 \times 1,000 = 6,000\text{ g}$.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math4-4',
          textAr: 'بدأت نادين قراءة قصتها الساعة $6:10$ مساءً وأنهتها الساعة $6:45$ مساءً. ما هو الوقت المنقضي؟',
          textEn: 'Nadine started reading at 6:10 PM and finished at 6:45 PM. What is the elapsed time?',
          optionsAr: ['$35\\text{ دقيقة}$', '$45\\text{ دقيقة}$', '$25\\text{ دقيقة}$', '$55\\text{ دقيقة}$'],
          optionsEn: ['35 minutes', '45 minutes', '25 minutes', '55 minutes'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الوقت المنقضي',
          conceptTestedEn: 'Elapsed Time Calculation',
          explanationAr: 'الوقت المنقضي = $45 - 10 = 35$ دقيقة.',
          explanationEn: '$45 - 10 = 35$ minutes elapsed.',
          difficulty: 'easy'
        },
        {
          id: 'q-p3-math4-5',
          textAr: 'أي وحدة من الوحدات التالية هي الأنسب لقياس كمية العصير داخل ملعقة صغيرة؟',
          textEn: 'Which unit is most appropriate for measuring juice in a small spoon?',
          optionsAr: ['المليلتر ($mL$)', 'اللتر ($L$)', 'الكيلوجرام ($kg$)', 'المتر ($m$)'],
          optionsEn: ['Milliliter (mL)', 'Liter (L)', 'Kilogram (kg)', 'Meter (m)'],
          correctIndex: 0,
          conceptTestedAr: 'اختيار الوحدة المناسبة للسعة',
          conceptTestedEn: 'Appropriate Capacity Units',
          explanationAr: 'السعات الصغيرة جداً كالملاعق تقاس بالمليلتر ($mL$).',
          explanationEn: 'Small liquid volumes are measured in milliliters (mL).',
          difficulty: 'easy'
        }
      ]
    }
  }
];
