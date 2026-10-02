import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL MATHEMATICS & PREP 2 (رياضيات الصف الثاني الإعدادي / لغات وعربي)
// Official Grade 8 / Prep 2 National Ministry & Language School Curriculum Alignment:
// Unit 1: Real Numbers (R), Cube Roots, Radicals & Intervals
// Unit 2: Advanced Factorization of Algebraic Expressions & Solving Quadratic Equations in R
// Unit 3: Linear Relations Between Two Variables, Slope of Straight Line & Statistical Data
// Unit 4: Geometry: Medians of a Triangle, Right Triangle Median & Isosceles Triangle Theorems
// Unit 5: Geometry: Inequalities in Triangles, Projections, Converse of Pythagoras & Euclid Theorems
// ============================================================================

export const MIDDLE_MATH_G8_LECTURES: Lecture[] = [
  // ── LECTURE 1: REAL NUMBERS (R), CUBE ROOTS, RADICALS & INTERVALS ──
  {
    id: 'm8-math-1',
    order: 1,
    titleAr: 'المحاضرة 1: الأعداد الحقيقية (R)، الجذر التكعيبي، والعمليات على الجذور والفترات',
    titleEn: 'Lecture 1: Real Numbers (R), Cube Roots, Radical Operations & Real Intervals',
    subtitleAr: 'دراسة الأعداد غير النسبية (Q\')، مجموعة الأعداد الحقيقية R = Q ∪ Q\'، الجذر التكعيبي، العمليات على الجذور، والفترات المحدودة وغير المحدودة والعمليات عليها (الاتحاد والتقاطع والفرق)',
    subtitleEn: 'Master Irrational Numbers (Q\'), the Set of Real Numbers R, Cube Roots, Operations on Square & Cube Radicals, and Real Intervals with Union, Intersection, and Difference.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثاني الإعدادي (الصف الثامن) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الأعداد الحقيقية والعمليات عليها والفترات',
    unitTitleEn: 'Unit 1: Real Numbers (R), Operations & Intervals',
    lessonNumberAr: 'الدرس 1: الجذر التكعيبي، مجموعة R، والفترات',
    lessonNumberEn: 'Lesson 1: Cube Roots, The Set R & Real Intervals',

    // Real-world hook
    warmupHookAr: 'عندما حاول علماء الرياضيات في عصر الإغريق حساب طول قطر مربع طول ضلعه 1 متر باستخدام نظرية فيثاغورس، وجدوا أن الناتج هو √2، وهو عدد لا يمكن كتابته على صورة كسر عشري منتهٍ أو دوري (1.41421356...)! من هنا وُلدت "الأعداد غير النسبية" (Q\')، وعند دمجها مع الأعداد النسبية (Q) تشكلت "مجموعة الأعداد الحقيقية" (R). واليوم تُستخدم الفترات الحقيقية في برمجة خوارزميات تحديد النطاقات الزمنية، درجات الحرارة، وإحداثيات الأقمار الصناعية بدقة مطلقة!',
    warmupHookEn: 'When ancient mathematicians calculated the diagonal of a 1m unit square using Pythagoras, they discovered √2 cannot be written as a fraction—it is irrational! Combining Rational (Q) and Irrational (Q\') numbers created the Real Numbers system (R), foundational to modern calculus and physics.',

    // Targeted Learning Outcomes
    learningOutcomesAr: [
      'أن يعرّف الطالب الجذر التكعيبي للعدد النسبي والحقيقي: ∛a = b بحيث b³ = a، ويفهم أن ∛(-8) = -2',
      'أن يميز بين الأعداد النسبية (Q) والأعداد غير النسبية (Q\') ويفهم أن R = Q ∪ Q\' وأن Q ∩ Q\' = ∅',
      'أن يبسّط الجذور التربيعية والتكعيبية ويجري العمليات الحسابية عليها: √(a × b) = √a × √b و ∛(a × b) = ∛a × ∛b',
      'أن يمثل الفترات المغلقة [a, b] والمفتوحة (a, b) والنصف مفتوحة على خط الأعداد الحقيقية',
      'أن يجري عمليات الاتحاد (∪)، التقاطع (∩)، والفرق (-) والمكملة على الفترات الحقيقية بدقة'
    ],
    learningOutcomesEn: [
      'Define and evaluate cube roots for positive and negative real numbers: ∛a',
      'Distinguish between Rational (Q) and Irrational (Q\') numbers, verifying R = Q ∪ Q\' and Q ∩ Q\' = ∅',
      'Simplify and compute arithmetic operations with radicals: √(ab) = √a√b and ∛(ab) = ∛a∛b',
      'Represent closed [a, b], open (a, b), and half-open intervals on the real number line',
      'Perform set operations on intervals including Union (∪), Intersection (∩), Difference (-), and Complement'
    ],

    // Vocabulary
    vocabulary: [
      {
        termAr: 'العدد غير النسبي (Irrational Number - Q\')',
        termEn: 'Irrational Number (Q\')',
        definitionAr: 'العدد الذي لا يمكن كتابته على صورة كسر a/b حيث a و b عددان صحيحان و b ≠ 0، مثل الجذور التربيعية للأعداد غير المربعة (√2, √5) والجذور التكعيبية لغير المكعبات (∛4) والنسبة التقريبية π.',
        definitionEn: 'A number that cannot be expressed as a simple fraction a/b, having non-terminating, non-repeating decimal expansion (e.g. √2, √3, ∛7, π).'
      },
      {
        termAr: 'مجموعة الأعداد الحقيقية (Real Numbers - R)',
        termEn: 'Real Numbers (R)',
        definitionAr: 'اتحاد مجموعة الأعداد النسبية Q ومجموعة الأعداد غير النسبية Q\'، أي: R = Q ∪ Q\'، وتغطي كامل خط الأعداد دون أي فجوات.',
        definitionEn: 'The set containing all rational and irrational numbers (R = Q ∪ Q\'), represented continuously on the number line.'
      },
      {
        termAr: 'الفترة المغلقة [a, b] (Closed Interval)',
        termEn: 'Closed Interval [a, b]',
        definitionAr: 'مجموعة كل الأعداد الحقيقية x المحصورة بين a و b بما في ذلك العددين a و b: {x ∈ R : a ≤ x ≤ b}.',
        definitionEn: 'The set of all real numbers x such that a ≤ x ≤ b, including endpoints a and b.'
      },
      {
        termAr: 'الفترة المفتوحة (a, b) (Open Interval)',
        termEn: 'Open Interval (a, b)',
        definitionAr: 'مجموعة كل الأعداد الحقيقية x المحصورة بين a و b باستثناء العددين a و b: {x ∈ R : a < x < b}.',
        definitionEn: 'The set of all real numbers x such that a < x < b, excluding endpoints a and b.'
      },
      {
        termAr: 'العددان المترافقان (Conjugate Numbers)',
        termEn: 'Conjugate Numbers',
        definitionAr: 'عددان على الصورة (√a + √b) و (√a - √b)، وحاصل ضربهما عدد نسبي صحيح: (√a + √b)(√a - √b) = a - b.',
        definitionEn: 'Two binomials with opposite radical signs: (√a + √b)(√a - √b) = a - b, used for rationalizing denominators.'
      }
    ],

    keyConceptsAr: [
      'الجذر التكعيبي وإشارته: ∛(a³) = a و ∛(-a) = -∛a',
      'العلاقة R = Q ∪ Q\' و Q ∩ Q\' = ∅ و R = R⁺ ∪ {0} ∪ R⁻',
      'تبسيط العمليات على الجذور التربيعية والتكعيبية وإنطاق المقام بالضرب في المرافق',
      'تمثيل الفترات المحدودة وغير المحدودة (-∞, a] و [a, ∞) على خط الأعداد',
      'العمليات على الفترات: التقاطع (العناصر المشتركة)، الاتحاد (كل العناصر)، الفرق (الموجود بالأولى وليس بالثانية)'
    ],
    keyConceptsEn: [
      'Cube Root properties: ∛(a³) = a, ∛(-a) = -∛a',
      'Real number structure: R = Q ∪ Q\', Q ∩ Q\' = ∅, R = R⁺ ∪ {0} ∪ R⁻',
      'Operations on radicals and rationalizing denominators via conjugates',
      'Bounded and unbounded intervals on the real number line',
      'Interval operations: Intersection (∩), Union (∪), Difference (-), and Complement'
    ],

    summaryAr: 'في هذه المحاضرة الشاملة لمنهج الصف الثاني الإعدادي، ندرس تأسيس نظام الأعداد الحقيقية R، حيث نتعلم إيجاد الجذور التكعيبية، وتبسيط الجذور التربيعية وإنطاق المقامات باستخدام المرافق، وإتقان العمليات على الفترات الحقيقية (المغلقة، المفتوحة، والنصف مفتوحة وغير المحدودة) بيانياً وجبرياً.',
    summaryEn: 'In this foundational Grade 8 / Prep 2 lecture, students master the Real Number system (R), evaluating cube roots, simplifying radicals, rationalizing denominators using conjugates, and executing interval operations (union, intersection, difference).',

    sections: [
      {
        titleAr: '1. مجموعة الأعداد الحقيقية (R) والجذر التكعيبي (∛a)',
        titleEn: '1. The Set of Real Numbers (R) & Cube Roots (∛a)',
        contentAr: 'العدد غير النسبي (Q\') هو أي عدد لا يمكن التعبير عنه بكسر a/b، مثل: √2 ≈ 1.414...، √7، ∛5، والعدد π. اتحاد مجموعة الأعداد النسبية Q ومجموعة الأعداد غير النسبية Q\' يعطي مجموعة الأعداد الحقيقية R: R = Q ∪ Q\' و Q ∩ Q\' = ∅. الجذر التكعيبي للعدد a هو العدد الذي إذا ضُرب في نفسه ثلاث مرات ينتج a: ∛a = b ⟺ b³ = a. على عكس الجذور التربيعية، يمكن إيجاد الجذر التكعيبي للعدد السالب: ∛(-27) = -3 لأن (-3)³ = -27.',
        contentEn: 'An irrational number (Q\') cannot be written as a/b (e.g. √2, √5, ∛7, π). The Union of Q and Q\' defines the Real Numbers R (R = Q ∪ Q\', Q ∩ Q\' = ∅). The cube root ∛a exists for both positive and negative reals: ∛(-27) = -3 since (-3)³ = -27.'
      },
      {
        titleAr: '2. العمليات على الجذور التربيعية والتكعيبية وإنطاق المقام',
        titleEn: '2. Operations on Radicals & Rationalizing Denominators',
        contentAr: 'قوانين الجذور الأساسية:\n1) √(a × b) = √a × √b (مثال: √18 = √(9 × 2) = 3√2).\n2) ∛(a × b) = ∛a × ∛b (مثال: ∛54 = ∛(27 × 2) = 3∛2).\n3) جمع وطرح الجذور المتشابهة: 5√3 + 2√3 = 7√3.\n4) العددان المترافقان: مرافق (√5 + √2) هو (√5 - √2)، وحاصل ضربهما: (√5 + √2)(√5 - √2) = 5 - 2 = 3 (عدد نسبي).\n5) إنطاق المقام: إذا كان المقام 6 / (√5 - √2)، نضرب البسط والمقام في المرافق (√5 + √2) لنحصل على: 6(√5 + √2) / 3 = 2(√5 + √2).',
        contentEn: 'Radical laws: √(ab) = √a√b, ∛(ab) = ∛a∛b. Conjugates: (√a + √b) and (√a - √b) multiply to rational (a - b). Rationalize fractions by multiplying numerator and denominator by the conjugate.'
      },
      {
        titleAr: '3. الفترات الحقيقية (Intervals) والعمليات عليها (∪, ∩, -)',
        titleEn: '3. Real Intervals & Set Operations (∪, ∩, -)',
        contentAr: 'الفترة هي مجموعة جزئية متصلة من R:\n1) الفترة المغلقة [a, b]: تشمل a و b وكل ما بينهما. تكتب بنقاط ممتلئة.\n2) الفترة المفتوحة (a, b): لا تشمل a و b، وتكتب بنقاط مجوفة.\n3) الفترة النصف مفتوحة [a, b) أو (a, b]: مغلقة من طرف ومفتوحة من الآخر.\n4) الفترات غير المحدودة: [a, ∞) أو (-∞, b).\n\nالعمليات الحسابية على الفترات (باستخدام خط الأعداد):\n- التقاطع [1, 5] ∩ [3, 7] = [3, 5] (المنطقة المشتركة بين الفترتين).\n- الاتحاد [1, 5] ∪ [3, 7] = [1, 7] (من أصغر بداية إلى أكبر نهاية).\n- الفرق [1, 5] - [3, 7] = [1, 3) (العناصر الموجودة في الأولى وليست في الثانية، مع عكس إشارة نقطة الاشتراك 3 لتصبح مفتوحة).',
        contentEn: 'Intervals represent continuous subsets of R. Operations on line: [1, 5] ∩ [3, 7] = [3, 5]; [1, 5] ∪ [3, 7] = [1, 7]; [1, 5] - [3, 7] = [1, 3).'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m8-math-1',
        questionAr: 'أوجد قيمة المقدار التالي في أبسط صورة مبدياً خطوات الحل:\nE = 2√18 + √50 - 4√(1/2)\nثم اجعل مقام الكسر 6 / (√7 - 1) عدداً صحيحاً.',
        questionEn: 'Simplify: E = 2√18 + √50 - 4√(1/2). Then rationalize the denominator of: 6 / (√7 - 1).',
        solutionStepsAr: [
          'نبسط الجذور: 2√18 = 2√(9×2) = 6√2 ، √50 = 5√2 ، 4√(1/2) = 4/√2 = 2√2.',
          'نعوض في المقدار: E = 6√2 + 5√2 - 2√2 = 9√2.',
          'نضرب 6/(√7 - 1) في المرافق (√7 + 1)/(√7 + 1) = 6(√7 + 1) / (7 - 1) = √7 + 1.'
        ],
        solutionStepsEn: [
          'Simplify: 2√18 = 6√2, √50 = 5√2, 4√(1/2) = 2√2.',
          'Combine: E = 6√2 + 5√2 - 2√2 = 9√2.',
          'Conjugate: 6/(√7 - 1) × (√7 + 1)/(√7 + 1) = 6(√7 + 1)/6 = √7 + 1.'
        ],
        answerAr: 'E = 9√2 ، والكسر المنطق = √7 + 1',
        answerEn: 'E = 9√2, Rationalized = √7 + 1'
      },
      {
        id: 'tb-m8-math-2',
        questionAr: 'إذا كانت الفترة X = [-2, 3] والفترة Y = (1, 5)، مثل الفترتين على خط أعداد واحد ثم أوجد مستعيناً بالرسم: 1) X ∩ Y  2) X ∪ Y  3) X - Y  4) X\'',
        questionEn: 'Given intervals X = [-2, 3] and Y = (1, 5), plot them on a real number line and find: 1) X ∩ Y, 2) X ∪ Y, 3) X - Y, 4) X\'.',
        solutionStepsAr: [
          '1) التقاطع X ∩ Y = (1, 3] (المنطقة المشتركة بين 1 مفتوح و 3 مغلق).',
          '2) الاتحاد X ∪ Y = [-2, 5) (من أصغر بداية -2 مغلق إلى أكبر نهاية 5 مفتوح).',
          '3) الفرق X - Y = [-2, 1] (الموجود في X وغير موجود في Y).',
          '4) مكملة X: X\' = (-∞, -2) ∪ (3, ∞).'
        ],
        solutionStepsEn: [
          '1) X ∩ Y = (1, 3]',
          '2) X ∪ Y = [-2, 5)',
          '3) X - Y = [-2, 1]',
          '4) X\' = (-∞, -2) ∪ (3, ∞)'
        ],
        answerAr: 'X ∩ Y = (1, 3] • X ∪ Y = [-2, 5) • X - Y = [-2, 1] • X\' = (-∞, -2) ∪ (3, ∞)',
        answerEn: 'X ∩ Y = (1, 3] • X ∪ Y = [-2, 5) • X - Y = [-2, 1] • X\' = (-∞, -2) ∪ (3, ∞)'
      }
    ],

    assessment: {
      id: 'quiz-m8-math-1',
      lectureId: 'm8-math-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الأعداد الحقيقية والجذور والفترات',
      titleEn: 'Mastery Assessment 1: Real Numbers, Radicals & Intervals',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m8-math-1',
          textAr: 'ما هي قيمة الجذر التكعيبي: ∛(-64) + √(16)؟',
          textEn: 'What is the value of: ∛(-64) + √(16)?',
          optionsAr: ['0', '-8', '8', '-4'],
          optionsEn: ['0', '-8', '8', '-4'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الجذور التكعيبية والتربيعية',
          conceptTestedEn: 'Evaluating Cube and Square Roots',
          explanationAr: '∛(-64) = -4 لأن (-4)³ = -64، و √(16) = 4. إذن: -4 + 4 = 0.',
          explanationEn: '∛(-64) = -4 and √16 = 4. -4 + 4 = 0.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m8-math-1',
          textAr: 'أي من الأعداد التالية ينتمي إلى مجموعة الأعداد غير النسبية (Q\')؟',
          textEn: 'Which of the following belongs to the Irrational Numbers set (Q\')?',
          optionsAr: ['√7', '√(25/4)', '∛(-8)', '0.333...'],
          optionsEn: ['√7', '√(25/4)', '∛(-8)', '0.333...'],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الأعداد النسبية وغير النسبية',
          conceptTestedEn: 'Distinguishing Rational vs Irrational Numbers',
          explanationAr: '√7 عدد غير نسبي لأن 7 ليس مربعاً كاملاً ولا يمكن كتابة جذره في صورة كسر منتهٍ. بينما √(25/4) = 5/2 (نسبي)، و ∛(-8) = -2 (نسبي)، و 0.333... = 1/3 (نسبي).',
          explanationEn: '√7 is irrational since 7 is not a perfect square. The others evaluate to rational numbers (5/2, -2, 1/3).',
          difficulty: 'medium'
        },
        {
          id: 'q3-m8-math-1',
          textAr: 'إذا كانت الفترة A = [-3, 4] والفترة B = [2, 6]، فإن A ∩ B تساوي:',
          textEn: 'If interval A = [-3, 4] and interval B = [2, 6], then A ∩ B equals:',
          optionsAr: ['[2, 4]', '[-3, 6]', '[-3, 2)', '(4, 6]'],
          optionsEn: ['[2, 4]', '[-3, 6]', '[-3, 2)', '(4, 6]'],
          correctIndex: 0,
          conceptTestedAr: 'تقاطع الفترات الحقيقية',
          conceptTestedEn: 'Intersection of Real Intervals',
          explanationAr: 'التقاطع يمثل الجزء المشترك بين الفترتين، وهو يبدأ من 2 مغلق وينتهي عند 4 مغلق: [2, 4].',
          explanationEn: 'The intersection is the overlapping interval between 2 (inclusive) and 4 (inclusive): [2, 4].',
          difficulty: 'easy'
        },
        {
          id: 'q4-m8-math-1',
          textAr: 'مرافق العدد (√5 - √3) هو:',
          textEn: 'The conjugate of the number (√5 - √3) is:',
          optionsAr: ['√5 + √3', '-√5 - √3', '√3 - √5', '5 - 3'],
          optionsEn: ['√5 + √3', '-√5 - √3', '√3 - √5', '5 - 3'],
          correctIndex: 0,
          conceptTestedAr: 'العددان المترافقان',
          conceptTestedEn: 'Conjugate Numbers',
          explanationAr: 'مرافق المقدار ذي الحدين يتكون بتغيير إشارة الحد الثاني، فمرافق (√5 - √3) هو (√5 + √3)، وحاصل ضربهما: (√5 - √3)(√5 + √3) = 5 - 3 = 2.',
          explanationEn: 'The conjugate is formed by changing the sign between terms: (√5 + √3). Their product equals (5 - 3) = 2.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 2: ADVANCED FACTORIZATION & QUADRATIC EQUATIONS IN R ──
  {
    id: 'm8-math-2',
    order: 2,
    titleAr: 'المحاضرة 2: تحليل المقادير الجبرية وحل المعادلات من الدرجة الثانية في R',
    titleEn: 'Lecture 2: Advanced Factorization of Polynomials & Solving Quadratic Equations in R',
    subtitleAr: 'تحليل المقدار الثلاثي (x² + bx + c) و (ax² + bx + c)، الفرق بين مربعين، مجموع والفرق بين مكعبين، التحليل بالتقسيم وإكمال المربع، وحل معادلات الدرجة الثانية',
    subtitleEn: 'Master factoring simple and general trinomials, difference of squares, sum/difference of cubes, factoring by grouping, completing the square, and solving quadratic equations in R.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (الصف الثامن) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الجبر والتحليل (تحليل المقادير الجبرية وتطبيقاتها)',
    unitTitleEn: 'Unit 1: Algebra & Factorization',
    lessonNumberAr: 'الدرس 2: التحليل الشامل وحل المعادلات التربيعية',
    lessonNumberEn: 'Lesson 2: Comprehensive Polynomial Factorization & Equations',

    warmupHookAr: 'في تصميم ألعاب الفيديو والفيزياء الرقمية، تُحسب مسارات حركة القذائف وسقوط الأجسام بدوال تربيعية مثل h = -5t² + 20t + 25. كيف يعرف مبرمج اللعبة متى تصل القذيفة إلى الأرض (h = 0)؟ الإجابة السحرية هي "تحليل المقدار الجبري" (Factorization)! بتحويل المعادلة إلى حاصل ضرب قوسين، نجد الحلول الزمنية في ثوانٍ معدودة وبدقة متناهية!',
    warmupHookEn: 'Game physics engines track projectile arcs using quadratic formulas. Factoring trinomials allows instant determination of collision points, ground impact timing, and structural limits!',

    learningOutcomesAr: [
      'أن يحلل الطالب المقدار الثلاثي البسيط x² + bx + c بالبحث عن عددين حاصل ضربهما c ومجموعهما b',
      'أن يحلل المقدار الثلاثي غير البسيط ax² + bx + c باستخدام طريقة المقص أو التحليل بالتجزئة',
      'أن يحلل الفرق بين مربعين: a² - b² = (a - b)(a + b) ومجموع وفرق المكعبين: a³ ± b³ = (a ± b)(a² ∓ ab + b²)',
      'أن يتقن التحليل بالتقسيم (Grouping) والتحليل بإكمال المربع للمقادير الرباعية والدرجة الرابعة',
      'أن يحل معادلات الدرجة الثانية في متغير واحد في R باستخدام خاصية الضرب الصفري: A × B = 0 ⟹ A = 0 أو B = 0'
    ],
    learningOutcomesEn: [
      'Factor simple trinomials x² + bx + c by finding factors of c adding to b',
      'Factor general trinomials ax² + bx + c using cross-multiplication or decomposition',
      'Factor difference of two squares: a² - b² = (a - b)(a + b) and sum/difference of cubes: a³ ± b³',
      'Execute factoring by grouping (4 terms) and factoring by completing the square',
      'Solve quadratic equations in one variable over R using zero-product property: AB = 0 ⟹ A = 0 or B = 0'
    ],

    vocabulary: [
      {
        termAr: 'تحليل المقدار الجبري (Factorization)',
        termEn: 'Factorization',
        definitionAr: 'كتابة المقدار الجبري في صورة حاصل ضرب عاملين أو أكثر من العوامل الأولية.',
        definitionEn: 'Writing a polynomial as a product of its simplest prime irreducible algebraic factors.'
      },
      {
        termAr: 'المقدار الثلاثي المربع الكامل (Perfect Square Trinomial)',
        termEn: 'Perfect Square Trinomial',
        definitionAr: 'مقدار على الصورة a² ± 2ab + b²، وتحليله: (a ± b)²، حيث يكون الحد الأوسط = ± 2 × √(الأول) × √(الثالث).',
        definitionEn: 'A trinomial of the form a² ± 2ab + b², factorized as (a ± b)².'
      },
      {
        termAr: 'الفرق بين مربعين (Difference of Two Squares)',
        termEn: 'Difference of Two Squares',
        definitionAr: 'مقدار مكون من حدين مربعين بينهما إشارة طرح: a² - b² = (a - b)(a + b).',
        definitionEn: 'A binomial with two squared terms separated by minus: a² - b² = (a - b)(a + b).'
      },
      {
        termAr: 'مجموع وفرق المكعبين (Sum & Difference of Cubes)',
        termEn: 'Sum & Difference of Two Cubes',
        definitionAr: 'قانون تحليلهما ينتج قوساً صغيراً وقوساً كبيراً: a³ + b³ = (a + b)(a² - ab + b²) و a³ - b³ = (a - b)(a² + ab + b²).',
        definitionEn: 'Formulas producing a binomial and trinomial: a³ ± b³ = (a ± b)(a² ∓ ab + b²).'
      }
    ],

    keyConceptsAr: [
      'إخراج العامل المشترك الأكبر (HCF) كخطوة أولى إلزامية قبل أي نوع تحليل',
      'تحليل المقدار الثلاثي: x² - 5x + 6 = (x - 2)(x - 3)',
      'الفرق بين مربعين ومجموع/فرق المكعبين وتطبيقها على الأعداد لتسهيل الحساب',
      'التحليل بالتقسيم (2 + 2) أو (3 - 1) للمقادير الرباعية',
      'حل المعادلات التربيعية: x² - 7x + 12 = 0 ⟹ (x - 3)(x - 4) = 0 ⟹ x = 3 أو x = 4'
    ],
    keyConceptsEn: [
      'Extracting HCF as the universal mandatory first step in factoring',
      'Factoring trinomials x² + bx + c and ax² + bx + c',
      'Difference of squares and sum/diff of cubes with arithmetic shortcuts',
      'Factoring by grouping (2+2 or 3-1)',
      'Solving quadratic equations via zero product property'
    ],

    summaryAr: 'تغطي هذه المحاضرة جوهر الجبر للصف الثاني الإعدادي: جميع طرق تحليل المقادير الجبرية (المقدار الثلاثي، الفرق بين مربعين، المكعبين، التقسيم، إكمال المربع) وكيفية استخدام التحليل في حل المعادلات التربيعية في مجموعة الأعداد الحقيقية R.',
    summaryEn: 'Covers essential Grade 8 algebra: all polynomial factorization methods (trinomials, difference of squares, cubes, grouping, completing square) and quadratic equation solving in R.',

    sections: [
      {
        titleAr: '1. تحليل المقدار الثلاثي البسيط وغير البسيط والمربع الكامل',
        titleEn: '1. Factoring Simple, General & Perfect Square Trinomials',
        contentAr: '1) المقدار الثلاثي البسيط (معامل x² هو 1): x² + bx + c:\n- نبحث عن عددين ضربهما c ومجموعهما b. إذا كان c موجباً، العددان لهما نفس إشارة الأوسط b. مثال: x² - 7x + 12 = (x - 3)(x - 4).\n- إذا كان c سالباً، العددان مختلفان في الإشارة والأكبر يأخذ إشارة b. مثال: x² + 2x - 15 = (x + 5)(x - 3).\n2) المقدار الثلاثي غير البسيط (ax² + bx + c حيث a ≠ 1): يُحلل بطريقة المقص أو تجزئة الحد الأوسط.\n3) المقدار الثلاثي المربع الكامل: a² ± 2ab + b² = (a ± b)². شروطه: الحد الأول والأخير موجبان ومربعان، والأوسط = ± 2 × √(الأول) × √(الأخير).',
        contentEn: 'Simple trinomials x² + bx + c factor into (x + p)(x + q) where pq = c and p + q = b. General trinomials ax² + bx + c factor via grouping/cross method. Perfect squares factor to (a ± b)².'
      },
      {
        titleAr: '2. الفرق بين مربعين ومجموع والفرق بين مكعبين والتقسيم',
        titleEn: '2. Difference of Squares, Cubes & Factoring by Grouping',
        contentAr: '1) الفرق بين مربعين: a² - b² = (a - b)(a + b). مثال: 4x² - 25 = (2x - 5)(2x + 5).\n2) مجموع وفرق المكعبين:\n- a³ + b³ = (a + b)(a² - ab + b²). مثال: x³ + 8 = (x + 2)(x² - 2x + 4).\n- a³ - b³ = (a - b)(a² + ab + b²). مثال: 27y³ - 1 = (3y - 1)(9y² + 3y + 1).\n* ملاحظة هامة: القوس الكبير الناتج من تحليل المكعبين لا يحلل وليس له جذور حقيقية.\n3) التحليل بالتقسيم: للمقادير المكونة من 4 حدود:\n- تقسيم (2 + 2): نأخذ عاملاً مشتركاً من كل حدين ثم نأخذ القوس المشترك. مثال: ax + ay + bx + by = a(x + y) + b(x + y) = (x + y)(a + b).\n- تقسيم (3 - 1): تكوين مقدار ثلاثي مربع كامل مطروحاً منه مربع كامل. مثال: x² - 2xy + y² - 9 = (x - y)² - 3² = (x - y - 3)(x - y + 3).',
        contentEn: 'Difference of squares: a² - b² = (a - b)(a + b). Cubes: a³ ± b³ = (a ± b)(a² ∓ ab + b²). Grouping: pairs with common factors (2+2) or perfect square minus square (3-1).'
      },
      {
        titleAr: '3. حل المعادلات من الدرجة الثانية في R باستخدام التحليل',
        titleEn: '3. Solving Quadratic Equations in R via Factorization',
        contentAr: 'خطوات حل المعادلة التربيعية ax² + bx + c = 0 في R:\n1) تصفير المعادلة: جعل الطرف الأيمن يساوي 0.\n2) ترتيب حدود المعادلة تنازلياً حسب قوى x.\n3) التخلص من الكسور أو الأقواس إن وُجدت، وإخراج أي عامل مشترك.\n4) تحليل الطرف الأيسر بالكامل إلى حاصل ضرب عاملين.\n5) تطبيق خاصية الضرب الصفري: إذا كان (x - p)(x - q) = 0، فإن x - p = 0 ⟹ x = p أو x - q = 0 ⟹ x = q.\n6) كتابة مجموعة الحل (S.S) في R.',
        contentEn: 'To solve ax² + bx + c = 0 in R: equate to 0, factor the polynomial into (x - p)(x - q) = 0, apply zero product theorem: x = p or x = q, and write Solution Set {p, q}.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m8-math-3',
        questionAr: 'حلل كلاً من المقادير الجبرية الآتية تحليلاً كاملاً:\n1) 2x² - 18\n2) x³ - 8y³\n3) 3x² + 7x - 6\n4) x³ + 2x² - 9x - 18',
        questionEn: 'Factor completely: 1) 2x² - 18, 2) x³ - 8y³, 3) 3x² + 7x - 6, 4) x³ + 2x² - 9x - 18.',
        solutionStepsAr: [
          '1) 2x² - 18 = 2(x² - 9) = 2(x - 3)(x + 3)',
          '2) x³ - 8y³ = (x - 2y)(x² + 2xy + 4y²)',
          '3) 3x² + 7x - 6 = 3x² + 9x - 2x - 6 = 3x(x + 3) - 2(x + 3) = (x + 3)(3x - 2)',
          '4) x³ + 2x² - 9x - 18 = x²(x + 2) - 9(x + 2) = (x + 2)(x - 3)(x + 3)'
        ],
        solutionStepsEn: [
          '1) 2(x - 3)(x + 3)',
          '2) (x - 2y)(x² + 2xy + 4y²)',
          '3) (x + 3)(3x - 2)',
          '4) (x + 2)(x - 3)(x + 3)'
        ],
        answerAr: '1) 2(x-3)(x+3) • 2) (x-2y)(x²+2xy+4y²) • 3) (x+3)(3x-2) • 4) (x+2)(x-3)(x+3)',
        answerEn: '1) 2(x-3)(x+3) • 2) (x-2y)(x²+2xy+4y²) • 3) (x+3)(3x-2) • 4) (x+2)(x-3)(x+3)'
      },
      {
        id: 'tb-m8-math-4',
        questionAr: 'أوجد مجموعة الحل في R للمعادلة: x(x - 3) = 10. ثم مسألة تطبيقية: مستطيل طوله يزيد عن عرضه بمقدار 5 سم، ومساحته 36 سم²، أوجد بعدي المستطيل ومحيطه.',
        questionEn: 'Find Solution Set in R for: x(x - 3) = 10. Word problem: A rectangle\'s length is 5cm more than width, area is 36cm². Find dimensions and perimeter.',
        solutionStepsAr: [
          'المعادلة: x² - 3x - 10 = 0 ⟹ (x - 5)(x + 2) = 0 ⟹ x = 5 أو x = -2. إذن S.S = {5, -2}.',
          'المستطيل: نفرض العرض x والطول x+5. المساحة x(x+5) = 36 ⟹ x² + 5x - 36 = 0.',
          'التحليل: (x - 4)(x + 9) = 0 ⟹ x = 4 سم (العرض) و الطول = 4+5 = 9 سم.',
          'المحيط = (الطول + العرض) × 2 = (9 + 4) × 2 = 26 سم.'
        ],
        solutionStepsEn: [
          'Equation: x² - 3x - 10 = 0 ⟹ (x - 5)(x + 2) = 0 ⟹ S.S = {5, -2}.',
          'Rectangle: x(x + 5) = 36 ⟹ x² + 5x - 36 = 0 ⟹ (x - 4)(x + 9) = 0.',
          'Width = 4cm, Length = 9cm.',
          'Perimeter = 2(4 + 9) = 26cm.'
        ],
        answerAr: 'S.S = {5, -2} • أبعاد المستطيل: العرض = 4 سم، الطول = 9 سم، المحيط = 26 سم',
        answerEn: 'S.S = {5, -2} • Width = 4cm, Length = 9cm, Perimeter = 26cm'
      }
    ],

    assessment: {
      id: 'quiz-m8-math-2',
      lectureId: 'm8-math-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: التحليل الشامل والمعادلات التربيعية',
      titleEn: 'Mastery Assessment 2: Factorization & Quadratic Equations',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m8-math-2',
          textAr: 'تحليل المقدار x² - 9x + 20 هو:',
          textEn: 'Factorizing x² - 9x + 20 yields:',
          optionsAr: ['(x - 4)(x - 5)', '(x - 2)(x - 10)', '(x + 4)(x + 5)', '(x - 1)(x - 20)'],
          optionsEn: ['(x - 4)(x - 5)', '(x - 2)(x - 10)', '(x + 4)(x + 5)', '(x - 1)(x - 20)'],
          correctIndex: 0,
          conceptTestedAr: 'تحليل المقدار الثلاثي البسيط',
          conceptTestedEn: 'Factoring Simple Trinomials',
          explanationAr: 'نبحث عن عددين ضربهما +20 ومجموعهما -9، وهما -4 و -5. إذن: (x - 4)(x - 5).',
          explanationEn: 'Factors of +20 adding to -9 are -4 and -5: (x - 4)(x - 5).',
          difficulty: 'easy'
        },
        {
          id: 'q2-m8-math-2',
          textAr: 'إذا كان المقدار x² + kx + 25 مقداراً ثلاثياً مربعاً كاملاً، فإن قيمة k تساوي:',
          textEn: 'If x² + kx + 25 is a perfect square trinomial, the value of k is:',
          optionsAr: ['± 10', '10 فقط', '5', '± 25'],
          optionsEn: ['± 10', '10 only', '5', '± 25'],
          correctIndex: 0,
          conceptTestedAr: 'المقدار الثلاثي المربع الكامل',
          conceptTestedEn: 'Perfect Square Trinomials',
          explanationAr: 'الحد الأوسط في المربع الكامل = ± 2 × √(الأول) × √(الأخير) = ± 2 × x × 5 = ± 10x، إذن k = ± 10.',
          explanationEn: 'Middle term = ± 2√(first × third) = ± 2√(x² × 25) = ± 10x, so k = ± 10.',
          difficulty: 'medium'
        },
        {
          id: 'q3-m8-math-2',
          textAr: 'إذا كان x - y = 3 و x + y = 7، فإن قيمة x² - y² تساوي:',
          textEn: 'If x - y = 3 and x + y = 7, then the value of x² - y² is:',
          optionsAr: ['21', '10', '4', '58'],
          optionsEn: ['21', '10', '4', '58'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات الفرق بين مربعين',
          conceptTestedEn: 'Difference of Squares Applications',
          explanationAr: 'x² - y² = (x - y)(x + y) = 3 × 7 = 21.',
          explanationEn: 'x² - y² = (x - y)(x + y) = 3 × 7 = 21.',
          difficulty: 'easy'
        },
        {
          id: 'q4-m8-math-2',
          textAr: 'مجموعة الحل للمعادلة x² - 5x = 0 في R هي:',
          textEn: 'The solution set for the equation x² - 5x = 0 in R is:',
          optionsAr: ['{0, 5}', '{5}', '{0, -5}', '{-5}'],
          optionsEn: ['{0, 5}', '{5}', '{0, -5}', '{-5}'],
          correctIndex: 0,
          conceptTestedAr: 'حل المعادلات التربيعية بالتحليل',
          conceptTestedEn: 'Solving Quadratics by Factoring',
          explanationAr: 'بأخذ x عاملاً مشتركاً: x(x - 5) = 0 ⟹ إما x = 0 أو x = 5. مجموعة الحل = {0, 5}.',
          explanationEn: 'Factor HCF: x(x - 5) = 0 ⟹ x = 0 or x = 5. S.S = {0, 5}.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: LINEAR RELATIONS, SLOPE & STATISTICAL ANALYSIS ──
  {
    id: 'm8-math-3',
    order: 3,
    titleAr: 'المحاضرة 3: العلاقة الخطية بين متغيرين، ميل الخط المستقيم والإحصاء',
    titleEn: 'Lecture 3: Linear Relations Between Two Variables, Slope of a Line & Statistics',
    subtitleAr: 'تمثيل العلاقة الخطية ax + by = c بيانياً، حساب ميل الخط المستقيم m = (y₂ - y₁) / (x₂ - x₁)، المستقيمات المتوازية والمتعامدة، والجداول التكرارية المتجمعة والمتوسط والوسيط والمنوال',
    subtitleEn: 'Master graphing linear relations, slope formula m = Δy/Δx, parallel and perpendicular slopes, cumulative frequency distributions, and statistical measures (mean, median, mode).',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (الصف الثامن) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: العلاقة الخطية والميل والإحصاء',
    unitTitleEn: 'Unit 2: Linear Relations, Slope & Statistics',
    lessonNumberAr: 'الدرس 3: ميل الخط المستقيم والبيانات الإحصائية',
    lessonNumberEn: 'Lesson 3: Slope of Straight Line & Statistical Distributions',

    warmupHookAr: 'عند تصميم مهابط الطائرات أو مسارات القطارات فائقة السرعة، يحسب المهندسون درجة الانحدار لضمان الأمان التام. في الرياضيات، هذا الانحدار يُسمى "ميل الخط المستقيم" (Slope)! الميل يربط بين معدل التغير الرأسي والتغير الأفقي، وهو نفس المفهوم الذي تستخدمه شركات التكنولوجيا لتحليل اتجاهات نمو البيانات والإحصاءات الحيوية!',
    warmupHookEn: 'Civil engineers designing airport runways and railway grades rely on slope (Δy/Δx) to guarantee safety. In data science, slope and cumulative frequencies reveal predictive growth trends!',

    learningOutcomesAr: [
      'أن يمثل الطالب العلاقة الخطية بين متغيرين ax + by = c بيانياً بخط مستقيم بإيجاد نقطتي التقاطع مع المحاور',
      'أن يحسب ميل الخط المستقيم المار بنقطتين: m = (y₂ - y₁) / (x₂ - x₁) حيث x₁ ≠ x₂',
      'أن يستنتج حالات الميل: موجب (تزايدي)، سالب (تناقصي)، صفر (موازٍ لمحور السينات)، غير معرّف (موازٍ لمحور الصادات)',
      'أن يربط بين توازي المستقيمين (m₁ = m₂) وتعادمهما (m₁ × m₂ = -1)',
      'أن يكون الجدول التكراري المتجمع الصاعد والهابط ويعين الوسيط بيانياً، ويحسب الوسط الحسابي والمنوال'
    ],
    learningOutcomesEn: [
      'Graph linear relations ax + by = c by finding axis intercepts (x=0, y=0)',
      'Calculate straight line slope: m = (y₂ - y₁) / (x₂ - x₁)',
      'Interpret slope signs: positive (rising), negative (falling), zero (horizontal), undefined (vertical)',
      'Apply parallel condition (m₁ = m₂) and perpendicularity condition (m₁ × m₂ = -1)',
      'Construct ascending/descending cumulative tables, determine median graphically, and calculate mean and mode'
    ],

    vocabulary: [
      {
        termAr: 'ميل الخط المستقيم (Slope - m)',
        termEn: 'Slope of a Line',
        definitionAr: 'نسبة التغير الرأسي (فرق الصادات) إلى التغير الأفقي (فرق السينات) بين أي نقطتين على المستقيم: m = (y₂ - y₁) / (x₂ - x₁).',
        definitionEn: 'The ratio of vertical change to horizontal change: m = Δy / Δx.'
      },
      {
        termAr: 'المستقيم الأفقي (Horizontal Line)',
        termEn: 'Horizontal Line',
        definitionAr: 'مستقيم موازٍ لمحور السينات معادلته y = k وميله يساوي دائماً صفراً.',
        definitionEn: 'A line parallel to the x-axis with equation y = k and slope m = 0.'
      },
      {
        termAr: 'المستقيم الرأسي (Vertical Line)',
        termEn: 'Vertical Line',
        definitionAr: 'مستقيم موازٍ لمحور الصادات معادلته x = c وميله غير معرّف (المقام يساوي صفراً).',
        definitionEn: 'A line parallel to the y-axis with equation x = c and undefined slope (division by zero).'
      },
      {
        termAr: 'المنحنى التكراري المتجمع الصاعد (Ascending Cumulative Curve)',
        termEn: 'Ascending Cumulative Curve',
        definitionAr: 'منحنى بياني يربط بين الحدود العليا للمجموعات والتكرار المتجمع الصاعد، وتُستخدم نقطة تقاطعه مع المنحنى الهابط لتعيين الوسيط.',
        definitionEn: 'A statistical ogive curve used with descending curves to graphically pinpoint the median.'
      }
    ],

    keyConceptsAr: [
      'العلاقة الخطية بين x و y وتمثيلها بيانياً بتحديد 3 أزواج مرتبة',
      'قانون الميل: m = (y₂ - y₁) / (x₂ - x₁)',
      'إثبات استقامة 3 نقاط A, B, C بحساب: ميل AB = ميل BC',
      'تطبيقات الميل: المستقيمات المتوازية والمستطيل ومتوازي الأضلاع',
      'الإحصاء: الوسط الحسابي = مجموع (م × ك) / مجموع ك، والوسيط بيانيا'
    ],
    keyConceptsEn: [
      'Linear relation ax + by = c and coordinate graphing',
      'Slope formula and interpreting line direction',
      'Proving collinearity of 3 points: Slope(AB) = Slope(BC)',
      'Geometric applications of slope (parallelism & perpendicularity)',
      'Statistics: grouped mean formula Σ(x·f)/Σf and graphic median'
    ],

    summaryAr: 'يتعلم الطالب في هذه المحاضرة الربط الجبري البياني من خلال تمثيل العلاقات الخطية وحساب ميل الخط المستقيم وتطبيقاته الهندسية (التوازي والتعامد والاستقامة)، بالإضافة إلى تكوين الجداول التكرارية المتجمعة وحساب مقاييس النزعة المركزية.',
    summaryEn: 'Students explore linear relations graphing, slope calculations, collinearity proofs, geometric slope applications, and cumulative statistical distributions with central tendency measures.',

    sections: [
      {
        titleAr: '1. العلاقة الخطية بين متغيرين وتمثيلها بيانياً',
        titleEn: '1. Linear Relations in Two Variables & Graphing',
        contentAr: 'العلاقة الخطية هي علاقة من الدرجة الأولى بين متغيرين x و y على الصورة ax + by = c (حيث a و b لا يساويان صفراً معاً). تمثيلها البياني دائماً خط مستقيم. لرسم المستقيم:\n1) نضع x = 0 لإيجاد نقطة التقاطع مع محور الصادات: (0, c/b).\n2) نضع y = 0 لإيجاد نقطة التقاطع مع محور السينات: (c/a, 0).\n3) نختار قيمة ثالثة لـ x للتحقق من دقة الرسم واستقامة النقاط.',
        contentEn: 'Linear relations ax + by = c always graph as straight lines. Find x-intercept (y=0) and y-intercept (x=0) and a check point to sketch the line.'
      },
      {
        titleAr: '2. ميل الخط المستقيم وحالاته وتطبيقاته الهندسية',
        titleEn: '2. Slope of a Line, Properties & Collinearity',
        contentAr: 'إذا كانت A = (x₁, y₁) و B = (x₂, y₂)، فإن ميل المستقيم AB هو: m = (y₂ - y₁) / (x₂ - x₁).\nحالات الميل:\n1) m > 0 (موجب): المستقيم يصنع زاوية حادة مع الاتجاه الموجب لمحور السينات (ص يتزايد مع س).\n2) m < 0 (سالب): يصنع زاوية منفرجة (ص يتناقص مع زيادة س).\n3) m = 0: موازٍ لمحور السينات (أفقي).\n4) m غير معرّف (المقام 0): موازٍ لمحور الصادات (رأسي).\n\nإثبات أن النقاط A, B, C على استقامة واحدة (Collinear): نحسب ميل AB وميل BC؛ إذا كانا متساويين و B نقطة مشتركة، فإن النقاط على استقامة واحدة.',
        contentEn: 'Slope m = (y₂ - y₁) / (x₂ - x₁). Positive (acute angle), negative (obtuse angle), zero (horizontal), undefined (vertical). Points A, B, C are collinear iff Slope(AB) = Slope(BC).'
      },
      {
        titleAr: '3. الإحصاء: الجداول التكرارية ومقاييس النزعة المركزية',
        titleEn: '3. Grouped Frequency Distributions & Statistics',
        contentAr: '1) مركز المجموعة (x): مركز المجموعة = (الحد الأدنى + الحد الأعلى) / 2.\n2) الوسط الحسابي للتوزيع التكراري: الوسط = [مجموع (مركز المجموعة × التكرار)] / [مجموع التكرارات] = Σ(x × f) / Σf.\n3) الجدول المتجمع الصاعد: يبدأ بـ "أقل من الحد الأدنى للمجموعة الأولى" بتكرار 0، وينتهي عند "أقل من الحد الأعلى للأخيرة" بالمجموع الكلي.\n4) تعيين الوسيط بيانياً: ترتيب الوسيط = مجموع التكرارات / 2. نحدد هذا الترتيب على المحور الرأسي ونتحرك أفقياً للمنحنى ثم رأسياً لأسفل لقراءة قيمة الوسيط على المحور الأفقي.',
        contentEn: 'Class center = (Lower + Upper) / 2. Mean = Σ(x·f) / Σf. Median is determined graphically at cumulative frequency rank = (Total Frequency)/2.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m8-math-5',
        questionAr: 'أوجد ميل الخط المستقيم المار بالنقطتين A(2, -1) و B(5, 8). ثم أثبت أن النقطة C(3, 2) تقع على نفس الخط المستقيم AB (على استقامة واحدة).',
        questionEn: 'Find slope of line passing through A(2, -1) and B(5, 8). Then prove C(3, 2) is collinear with A and B.',
        solutionStepsAr: [
          'ميل AB = (8 - (-1)) / (5 - 2) = 9 / 3 = 3.',
          'ميل AC = (2 - (-1)) / (3 - 2) = 3 / 1 = 3.',
          'بما أن ميل AB = ميل AC = 3، والنقطة A مشتركة، إذن النقاط A, B, C على استقامة واحدة.'
        ],
        solutionStepsEn: [
          'Slope(AB) = (8 - (-1)) / (5 - 2) = 9/3 = 3.',
          'Slope(AC) = (2 - (-1)) / (3 - 2) = 3/1 = 3.',
          'Since slopes are equal and share A, A, B, C are collinear.'
        ],
        answerAr: 'ميل AB = 3 • النقاط على استقامة واحدة لتساوي الميول',
        answerEn: 'Slope = 3 • Collinear because slopes match and share vertex A'
      },
      {
        id: 'tb-m8-math-6',
        questionAr: 'الجدول التالي يبين درجات 20 طالباً:\nالمجموعات: 10-20 ، 20-30 ، 30-40 ، 40-50\nالتكرار: 3 ، 7 ، 6 ، 4\nاحسب الوسط الحسابي للدرجات.',
        questionEn: 'Find the arithmetic mean for grouped test scores: Classes: [10-20), [20-30), [30-40), [40-50]. Frequencies: 3, 7, 6, 4. Total = 20.',
        solutionStepsAr: [
          'مراكز المجموعات: 15 ، 25 ، 35 ، 45.',
          'حساب Σ(x × f) = (15×3) + (25×7) + (35×6) + (45×4) = 45 + 175 + 210 + 180 = 610.',
          'الوسط الحسابي = 610 / 20 = 30.5 درجة.'
        ],
        solutionStepsEn: [
          'Class centers: 15, 25, 35, 45.',
          'Σ(x·f) = (15×3) + (25×7) + (35×6) + (45×4) = 610.',
          'Mean = 610 / 20 = 30.5.'
        ],
        answerAr: 'الوسط الحسابي = 30.5 درجة',
        answerEn: 'Arithmetic Mean = 30.5'
      }
    ],

    assessment: {
      id: 'quiz-m8-math-3',
      lectureId: 'm8-math-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: العلاقة الخطية والميل والإحصاء',
      titleEn: 'Mastery Assessment 3: Linear Relations, Slope & Statistics',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m8-math-3',
          textAr: 'ميل الخط المستقيم المار بالنقطتين (3, 5) و (3, -2) يكون:',
          textEn: 'The slope of the line passing through (3, 5) and (3, -2) is:',
          optionsAr: ['غير معرّف (مستقيم رأسي)', 'صفر (مستقيم أفقي)', '7', '-7/6'],
          optionsEn: ['Undefined (vertical line)', 'Zero (horizontal line)', '7', '-7/6'],
          correctIndex: 0,
          conceptTestedAr: 'ميل المستقيم الرأسي',
          conceptTestedEn: 'Vertical Line Slope',
          explanationAr: 'm = (-2 - 5) / (3 - 3) = -7 / 0 (القسمة على صفر غير معرّفة)، إذن المستقيم رأسي وميله غير معرّف.',
          explanationEn: 'm = (-2 - 5) / (3 - 3) = -7 / 0 (division by zero is undefined), representing a vertical line.',
          difficulty: 'easy'
        },
        {
          id: 'q2-m8-math-3',
          textAr: 'مستقيم ميله يساوي صفراً، يكون موازياً لـ:',
          textEn: 'A line with slope equal to zero is parallel to:',
          optionsAr: ['محور السينات (x-axis)', 'محور الصادات (y-axis)', 'المستقيم y = x', 'نقطة الأصل'],
          optionsEn: ['x-axis', 'y-axis', 'line y = x', 'origin'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص المستقيم الأفقي',
          conceptTestedEn: 'Horizontal Line Properties',
          explanationAr: 'المستقيم ذو الميل الصفري هو مستقيم أفقي تماماً وموازٍ لمحور السينات ومكتوب بالصيغة y = ثابت.',
          explanationEn: 'Zero slope defines a horizontal line parallel to the x-axis with constant y value.',
          difficulty: 'easy'
        },
        {
          id: 'q3-m8-math-3',
          textAr: 'إذا كان مجموع التكرارات لتوزيع تكراري هو 40، فإن ترتيب الوسيط هو:',
          textEn: 'If the total frequency of a distribution is 40, the rank of the median is:',
          optionsAr: ['20', '40', '10', '30'],
          optionsEn: ['20', '40', '10', '30'],
          correctIndex: 0,
          conceptTestedAr: 'ترتيب الوسيط في الإحصاء',
          conceptTestedEn: 'Median Rank Calculation',
          explanationAr: 'ترتيب الوسيط = مجموع التكرارات / 2 = 40 / 2 = 20.',
          explanationEn: 'Median rank = Total Frequency / 2 = 40 / 2 = 20.',
          difficulty: 'medium'
        },
        {
          id: 'q4-m8-math-3',
          textAr: 'مركز المجموعة [14 - 18] هو:',
          textEn: 'The center of class interval [14 - 18] is:',
          optionsAr: ['16', '32', '4', '15'],
          optionsEn: ['16', '32', '4', '15'],
          correctIndex: 0,
          conceptTestedAr: 'حساب مركز المجموعة',
          conceptTestedEn: 'Class Center Computation',
          explanationAr: 'مركز المجموعة = (الحد الأدنى + الحد الأعلى) / 2 = (14 + 18) / 2 = 32 / 2 = 16.',
          explanationEn: 'Class center = (Lower + Upper) / 2 = (14 + 18) / 2 = 16.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: GEOMETRY: MEDIANS OF A TRIANGLE & ISOSCELES TRIANGLE THEOREMS ──
  {
    id: 'm8-math-4',
    order: 4,
    titleAr: 'المحاضرة 4: الهندسة: متوسطات المثلث ونظريات المثلث المتساوي الساقين',
    titleEn: 'Lecture 4: Geometry: Medians of a Triangle & Isosceles Triangle Theorems',
    subtitleAr: 'نقطة تقاطع متوسطات المثلث ونسبة 1:2 من جهة القاعدة، طول متوسط المثلث القائم الزاوية الخارج من رأس القائمة، نظريات وخواص المثلث المتساوي الساقين ومحاور التماثل',
    subtitleEn: 'Master medians concurrency (centroid 1:2 ratio), median from right-angle vertex theorem (equals half hypotenuse), 30°-60° right triangle, isosceles triangle theorems, and symmetry axes.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (الصف الثامن) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: الهندسة والقياس (متوسطات المثلث والمثلث المتساوي الساقين)',
    unitTitleEn: 'Unit 4: Geometry: Triangle Medians & Isosceles Theorems',
    lessonNumberAr: 'الدرس 4: نظريات المتوسطات والمثلث المتساوي الساقين',
    lessonNumberEn: 'Lesson 4: Triangle Centroid Theorems & Isosceles Geometry',

    warmupHookAr: 'عندما يقوم المهندسون المعماريون بتصميم الأسقف المعلقة أو جسور المشاة، يبحثون عن نقطة توازن الثقل الميكانيكي (Center of Gravity) للمثلثات الإنشائية. هذه النقطة الهندسية الدقيقة هي "نقطة تلاقي متوسطات المثلث" (Centroid)! ونظريات المثلث المتساوي الساقين هي التي تمنح الأهرامات والأبراج استقراراً ومقاومة فائقة للرياح والزلازل!',
    warmupHookEn: 'Structural engineers balancing triangular truss bridges locate the Center of Gravity via the Triangle Centroid (concurrency of medians). Isosceles triangle symmetry distributes load forces evenly across architecture!',

    learningOutcomesAr: [
      'أن يعرّف الطالب متوسط المثلث كقطعة مستقيمة واصلة بين أي رأس ومنتصف الضلع المقابل له',
      'أن يطبق نظرية تلاقي متوسطات المثلث في نقطة واحدة تقسم كلاً منها بنسبة 1 : 2 من جهة القاعدة (أو 2 : 1 من جهة الرأس)',
      'أن يبرهن ويطبق نظرية: طول متوسط المثلث القائم الزاوية الخارج من رأس القائمة يساوي نصف طول الوتر (BD = 1/2 AC)',
      'أن يطبق نتيجة المثلث الثلاثيني الستيني: طول الضلع المقابل للزاوية 30° في المثلث القائم = نصف طول الوتر',
      'أن يبرهن نظريات المثلث المتساوي الساقين: زاويتا القاعدة متطابقتان، ونتائج منصف زاوية الرأس والعمود المنصف ومحاور التماثل'
    ],
    learningOutcomesEn: [
      'Define a triangle median as a line segment connecting a vertex to the midpoint of the opposite side',
      'Apply the centroid theorem: medians intersect at one point dividing each in ratio 1:2 from base (2:1 from vertex)',
      'Prove and calculate: median from right-angle vertex equals half hypotenuse length (BD = 1/2 AC)',
      'Apply 30°-60°-90° theorem: side opposite 30° angle in right triangle equals half hypotenuse',
      'Prove isosceles triangle theorems: base angles are congruent, vertex bisector is perpendicular bisector of base'
    ],

    vocabulary: [
      {
        termAr: 'متوسط المثلث (Median of a Triangle)',
        termEn: 'Median of a Triangle',
        definitionAr: 'القطعة المستقيمة المرسومة من أي رأس من رؤوس المثلث إلى منتصف الضلع المقابل لهذا الرأس (لأي مثلث 3 متوسطات).',
        definitionEn: 'A line segment joining a vertex to the midpoint of the opposite side (every triangle has exactly 3 medians).'
      },
      {
        termAr: 'نقطة تلاقي المتوسطات / مركز الثقل (Centroid - M)',
        termEn: 'Triangle Centroid (M)',
        definitionAr: 'النقطة التي تتقاطع عندها متوسطات المثلث الثلاثة، وتقسم كل متوسط بنسبة 1 : 2 من جهة القاعدة و 2 : 1 من جهة الرأس.',
        definitionEn: 'Point of concurrency of the 3 medians, dividing each median in ratio 1:2 from base and 2:1 from vertex.'
      },
      {
        termAr: 'المثلث الثلاثيني الستيني (30°-60° Right Triangle)',
        termEn: '30°-60° Right Triangle',
        definitionAr: 'مثلث قائم الزاوية قياس إحدى زواياه 30° والأخرى 60°، وطول الضلع المقابل للزاوية 30° يساوي نصف طول الوتر.',
        definitionEn: 'A right triangle with 30° and 60° angles where the leg opposite 30° equals half the hypotenuse.'
      },
      {
        termAr: 'محور تماثل القطعة المستقيمة (Axis of Symmetry)',
        termEn: 'Perpendicular Bisector / Axis of Symmetry',
        definitionAr: 'المستقيم العمودي على القطعة المستقيمة من منتصفها، وأي نقطة عليه تكون على أبعاد متساوية من طرفيها.',
        definitionEn: 'The perpendicular line through the segment midpoint; any point on it is equidistant from endpoints.'
      }
    ],

    keyConceptsAr: [
      'متوسطات المثلث الثلاثة تتقاطع في نقطة واحدة M',
      'إذا كان AD متوسطاً، فإن MD = 1/3 AD و AM = 2/3 AD (نسبة 1:2)',
      'في المثلث ABC القائم في B: إذا كان BD متوسطاً، فإن BD = 1/2 AC',
      'في المثلث ABC القائم في B: إذا كان m(∠C) = 30°، فإن AB = 1/2 AC',
      'المثلث المتساوي الساقين: زاويتا القاعدة متطابقتان، وله محور تماثل واحد (المتساوي الأضلاع له 3 محاور، والمختلف له 0)'
    ],
    keyConceptsEn: [
      'All 3 triangle medians are concurrent at centroid M',
      'Centroid division: MD = 1/3 AD and AM = 2/3 AD',
      'Right triangle median theorem: BD = 1/2 Hypotenuse',
      '30°-60°-90° rule: Side opposite 30° = 1/2 Hypotenuse',
      'Isosceles theorems: Congruent base angles and 1 axis of symmetry (Equilateral has 3, Scalene has 0)'
    ],

    summaryAr: 'تتناول هذه المحاضرة النظريات الهندسية المحورية للصف الثاني الإعدادي: متوسطات المثلث وخواص نقطة التلاقي، نظريات المثلث القائم (المتوسط والضلع المقابل للزاوية 30°)، ونظريات المثلث المتساوي الساقين ونتائجه ومحاور التماثل بالأدلة والبرهان الهندسي.',
    summaryEn: 'Covers core Grade 8 Euclidean geometry theorems: triangle medians, centroid partition ratios, right triangle median & 30°-60° properties, and isosceles triangle proofs and symmetry axes.',

    sections: [
      {
        titleAr: '1. نظريات متوسطات المثلث ونقطة تلاقي المتوسطات',
        titleEn: '1. Triangle Medians & Centroid Concurrency Theorems',
        contentAr: 'نظرية 1: متوسطات المثلث تتقاطع جميعاً في نقطة واحدة تسمى نقطة تلاقي المتوسطات (M).\nنظرية 2: نقطة تلاقي متوسطات المثلث تقسم كلاً منها بنسبة 1 : 2 من جهة القاعدة (أو 2 : 1 من جهة الرأس).\nتطبيق جبري:\nإذا كان AD متوسطاً طوله 9 سم و M نقطة تلاقي المتوسطات:\n- الجزء القريب من القاعدة: MD = 1/3 × 9 = 3 سم.\n- الجزء القريب من الرأس: AM = 2/3 × 9 = 6 سم.',
        contentEn: 'Theorem 1: The 3 medians intersect at one point M (centroid). Theorem 2: M divides each median in ratio 1:2 from base (2:1 from vertex). Example: If median AD = 9cm, then MD = 3cm and AM = 6cm.'
      },
      {
        titleAr: '2. متوسط المثلث القائم الزاوية والمثلث 30°-60°',
        titleEn: '2. Right Triangle Median & 30°-60°-90° Triangle Theorems',
        contentAr: 'نظرية 3: في المثلث القائم الزاوية، طول المتوسط الخارج من رأس القائمة يساوي نصف طول الوتر.\nفي △ABC القائم الزاوية في B، إذا كان BD متوسطاً (D منتصف الوتر AC): فإن BD = 1/2 AC.\n\nعكس النظرية: إذا كان طول المتوسط المرسوم من أحد رؤوس مثلث يساوي نصف طول الضلع المقابل لهذا الرأس، فإن زاوية هذا الرأس تكون قائمة (90°).\n\nنتيجة المثلث الثلاثيني الستيني: في المثلث القائم الزاوية، طول الضلع المقابل للزاوية التي قياسها 30° يساوي نصف طول الوتر.\nإذا كان m(∠B) = 90° و m(∠C) = 30°، فإن الضلع المقابل AB = 1/2 AC.',
        contentEn: 'Theorem 3: In a right triangle, median from right vertex equals half the hypotenuse: BD = 1/2 AC. Converse holds. 30°-60° rule: Leg opposite 30° angle equals half the hypotenuse: AB = 1/2 AC.'
      },
      {
        titleAr: '3. نظريات المثلث المتساوي الساقين ونتائج محاور التماثل',
        titleEn: '3. Isosceles Triangle Theorems & Symmetry Axes',
        contentAr: 'نظرية 4: زاويتا القاعدة في المثلث المتساوي الساقين متطابقتان (متساويتان في القياس).\nإذا كان AB = AC في △ABC، فإن m(∠B) = m(∠C).\n\nنتائج هامة:\n1) منصف زاوية الرأس في المثلث المتساوي الساقين ينصف القاعدة ويكون عمودياً عليها.\n2) المتوسط المرسوم من رأس المثلث المتساوي الساقين يكون عمودياً على القاعدة وينصف زاوية الرأس.\n3) المستقيم العمودي على قاعدة المثلث المتساوي الساقين من منتصفها يمر بالرأس وينصف زاوية الرأس (محور تماثل المثلث).\n\nعدد محاور التماثل للأشكال الهندسية:\n- المثلث المتساوي الساقين: 1 محور تماثل واحد.\n- المثلث المتساوي الأضلاع: 3 محاور تماثل.\n- المثلث المختلف الأضلاع: 0 (ليس له محاور تماثل).',
        contentEn: 'Theorem 4: Base angles of an isosceles triangle are congruent. Vertex angle bisector is perpendicular bisector of base. Symmetry axes count: Isosceles = 1, Equilateral = 3, Scalene = 0.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m8-math-7',
        questionAr: 'في △ABC قائم الزاوية في B، فيه m(∠C) = 30°، AC = 12 سم. D منتصف AC. أوجد بالبرهان كلاً من: 1) طول AB  2) طول المتوسط BD  3) محيط المثلث ABD.',
        questionEn: 'In △ABC right-angled at B, m(∠C) = 30°, AC = 12cm. D is midpoint of AC. Find with formal proof: 1) length of AB, 2) length of BD, 3) perimeter of △ABD.',
        solutionStepsAr: [
          'AB = 1/2 AC = 6 سم (الضلع المقابل للزاوية 30° في المثلث القائم).',
          'BD = 1/2 AC = 6 سم (المتوسط الخارج من رأس القائمة B).',
          'AD = 1/2 AC = 6 سم ⟹ أضلاع △ABD متساوية (6 سم لكل ضلع).',
          'محيط △ABD = 6 + 6 + 6 = 18 سم.'
        ],
        solutionStepsEn: [
          'AB = 1/2 AC = 6cm (opposite 30°).',
          'BD = 1/2 AC = 6cm (median from right angle).',
          'AD = 6cm ⟹ △ABD is equilateral.',
          'Perimeter = 6 + 6 + 6 = 18cm.'
        ],
        answerAr: 'AB = 6 سم • BD = 6 سم • محيط △ABD = 18 سم',
        answerEn: 'AB = 6cm • BD = 6cm • Perimeter = 18cm'
      },
      {
        id: 'tb-m8-math-8',
        questionAr: 'في △ABC: D منتصف BC، و E منتصف AB. تقاطع AD مع CE في M. إذا كان AD = 12 سم، و CE = 9 سم، و AC = 10 سم. احسب محيط المثلث MDE بالبرهان.',
        questionEn: 'In △ABC, medians AD and CE intersect at centroid M. If AD = 12cm, CE = 9cm, and AC = 10cm, compute the perimeter of △MDE with proof.',
        solutionStepsAr: [
          'MD = 1/3 AD = 1/3 × 12 = 4 سم (نسبة 1:2 من القاعدة).',
          'ME = 1/3 CE = 1/3 × 9 = 3 سم (نسبة 1:2 من القاعدة).',
          'DE = 1/2 AC = 1/2 × 10 = 5 سم (قطعة واصلة بين منتصفي ضلعين).',
          'محيط △MDE = 4 + 3 + 5 = 12 سم.'
        ],
        solutionStepsEn: [
          'MD = 1/3(12) = 4cm.',
          'ME = 1/3(9) = 3cm.',
          'DE = 1/2(10) = 5cm.',
          'Perimeter = 4 + 3 + 5 = 12cm.'
        ],
        answerAr: 'محيط △MDE = 12 سم',
        answerEn: 'Perimeter of △MDE = 12cm'
      }
    ],

    assessment: {
      id: 'quiz-m8-math-4',
      lectureId: 'm8-math-4',
      titleAr: 'الاختبار الإتقاني للمحاضرة 4: متوسطات المثلث والمثلث المتساوي الساقين',
      titleEn: 'Mastery Assessment 4: Triangle Medians & Isosceles Geometry',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m8-math-4',
          textAr: 'نقطة تلاقي متوسطات المثلث تقسم كل متوسط بنسبة ........... من جهة القاعدة:',
          textEn: 'The centroid divides each triangle median in the ratio .......... from the base:',
          optionsAr: ['1 : 2', '2 : 1', '1 : 3', '2 : 3'],
          optionsEn: ['1 : 2', '2 : 1', '1 : 3', '2 : 3'],
          correctIndex: 0,
          conceptTestedAr: 'نسبة تقسيم نقطة تلاقي المتوسطات',
          conceptTestedEn: 'Centroid Division Ratio',
          explanationAr: 'تقسم نقطة تلاقي المتوسطات كل متوسط بنسبة 1 : 2 من جهة القاعدة (وهي تعادل 2 : 1 من جهة الرأس).',
          explanationEn: 'The centroid divides medians in ratio 1:2 from the base (2:1 from the vertex).',
          difficulty: 'easy'
        },
        {
          id: 'q2-m8-math-4',
          textAr: 'طول متوسط المثلث القائم الزاوية الخارج من رأس القائمة الذي طول وتره 14 سم يساوي:',
          textEn: 'The length of the median drawn from the right vertex in a right triangle of hypotenuse 14cm is:',
          optionsAr: ['7 سم', '14 سم', '28 سم', '3.5 سم'],
          optionsEn: ['7 cm', '14 cm', '28 cm', '3.5 cm'],
          correctIndex: 0,
          conceptTestedAr: 'متوسط المثلث القائم الزاوية',
          conceptTestedEn: 'Right Triangle Median Theorem',
          explanationAr: 'طول المتوسط الخارج من رأس القائمة = 1/2 طول الوتر = 1/2 × 14 = 7 سم.',
          explanationEn: 'Median from right vertex = 1/2 × Hypotenuse = 1/2 × 14 = 7cm.',
          difficulty: 'easy'
        },
        {
          id: 'q3-m8-math-4',
          textAr: 'مثلث متساوي الساقين قياس زاوية رأسه 80°، فإن قياس إحدى زاويتي قاعدته يساوي:',
          textEn: 'In an isosceles triangle with vertex angle 80°, each base angle measures:',
          optionsAr: ['50°', '100°', '40°', '80°'],
          optionsEn: ['50°', '100°', '40°', '80°'],
          correctIndex: 0,
          conceptTestedAr: 'حساب زوايا قاعدة المثلث المتساوي الساقين',
          conceptTestedEn: 'Isosceles Base Angles Calculation',
          explanationAr: 'مجموع زوايا المثلث 180°. زاويتا القاعدة متساويتان = (180° - 80°) / 2 = 100° / 2 = 50°.',
          explanationEn: 'Sum of angles is 180°. Each base angle = (180° - 80°) / 2 = 50°.',
          difficulty: 'medium'
        },
        {
          id: 'q4-m8-math-4',
          textAr: 'عدد محاور تماثل المثلث المتساوي الأضلاع يساوي:',
          textEn: 'The number of axes of symmetry of an equilateral triangle is:',
          optionsAr: ['3', '1', '0', '2'],
          optionsEn: ['3', '1', '0', '2'],
          correctIndex: 0,
          conceptTestedAr: 'محاور تماثل المثلثات',
          conceptTestedEn: 'Triangle Symmetry Axes',
          explanationAr: 'المثلث المتساوي الأضلاع له 3 محاور تماثل، بينما المتساوي الساقين له 1، والمختلف الأضلاع له 0.',
          explanationEn: 'An equilateral triangle has 3 axes of symmetry (Isosceles has 1, Scalene has 0).',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: GEOMETRY: INEQUALITIES, PROJECTIONS, PYTHAGORAS & EUCLID ──
  {
    id: 'm8-math-5',
    order: 5,
    titleAr: 'المحاضرة 5: الهندسة: متباينات المثلث، المساقط، ونظرية فيثاغورس ونظرية إقليدس',
    titleEn: 'Lecture 5: Geometry: Triangle Inequalities, Projections, Pythagoras & Euclid Theorems',
    subtitleAr: 'المقارنة بين قياسات الزوايا وأطوال الأضلاع في المثلث، متباينة المثلث (مجموع أي ضلعين > الثالث)، مسقط نقطة وقطعة مستقيمة، تحديد نوع المثلث بالنسبة لزواياه (عكس فيثاغورس)، ونظرية إقليدس',
    subtitleEn: 'Master triangle inequalities, side-angle relationships, triangle inequality theorem (a+b>c), geometric projections, classifying triangles by angle types (Pythagoras converse), and Euclid theorem.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (الصف الثامن) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الخامسة: الهندسة والقياس (المتباينات ونظريات التشابه والمساحات)',
    unitTitleEn: 'Unit 5: Geometry: Inequalities, Projections & Metric Theorems',
    lessonNumberAr: 'الدرس 5: متباينات المثلث ونظريات فيثاغورس وإقليدس',
    lessonNumberEn: 'Lesson 5: Triangle Inequalities, Projections & Euclid Theorem',

    warmupHookAr: 'إذا أردت الانتقال من منزلك إلى المدرسة، فإن أقصر مسار ممكن هو الخط المستقيم المباشر بينهما، وأي طريق يمر بنقطة ثالثة سيكون حتماً أطول. هذه الحقيقة البديهية هي نص "متباينة المثلث" في الهندسة الإقليدية (مجموع طولي أي ضلعين أكبر دائماً من طول الضلع الثالث)! وتستخدم شبكات GPS وخوارزميات الملاحة العالمية نظريات المساقط وإقليدس لحساب المسافات وارتفاعات الأقمار الصناعية بدقة المليمتر!',
    warmupHookEn: 'The shortest path between two points is a straight line—the cornerstone of the Triangle Inequality (sum of any two sides > third side). GPS positioning and 3D computer graphics use geometric projections and Euclid’s altitude theorem to calculate exact coordinates!',

    learningOutcomesAr: [
      'أن يطبق الطالب خاصية الترتيب: إذا اختلف طولا ضلعين في مثلث، فأكبرهما في الطول تقابله زاوية أكبر في القياس',
      'أن يطبق متباينة المثلث: مجموع طولي أي ضلعين في مثلث أكبر من طول الضلع الثالث: a + b > c',
      'أن يحدد الفترة التي ينتمي إليها طول الضلع الثالث في مثلث: (الفرق بين الضلعين ، مجموع الضلعين)',
      'أن يعرّف مسقط نقطة وقطعة مستقيمة على مستقيم، ويستنتج أن طول المسقط ≤ طول القطعة الأصلية',
      'أن يحدد نوع المثلث بالنسبة لزواياه بمقارنة مربع أطول أضلاعه بمجموع مربعي الضلعين الآخرين (عكس فيثاغورس)',
      'أن يبرهن ويطبق قوانين نظرية إقليدس للمثلث القائم مع العمود الساقط على الوتر'
    ],
    learningOutcomesEn: [
      'Apply side-angle inequality: longer side is opposite larger angle in any triangle',
      'Apply the Triangle Inequality theorem: sum of lengths of any two sides must exceed third side (a + b > c)',
      'Determine third side range: (difference between two sides, sum of two sides)',
      'Define geometric projections of points/segments and verify length(projection) ≤ length(segment)',
      'Classify triangles as acute, right, or obtuse using the converse of Pythagoras theorem',
      'Apply Euclid’s theorem altitude formulas: AB² = BD·BC, AC² = CD·BC, AD² = BD·CD, AD = (AB·AC)/BC'
    ],

    vocabulary: [
      {
        termAr: 'متباينة المثلث (Triangle Inequality)',
        termEn: 'Triangle Inequality Theorem',
        definitionAr: 'في أي مثلث، مجموع طولي أي ضلعين أكبر تماماً من طول الضلع الثالث: a + b > c.',
        definitionEn: 'In any triangle, the sum of lengths of any two sides is strictly greater than the third side: a + b > c.'
      },
      {
        termAr: 'مسقط قطعة مستقيمة (Projection of a Line Segment)',
        termEn: 'Projection of a Line Segment',
        definitionAr: 'القطعة المستقيمة الواصلة بين مسقطي طرفيها على مستقيم معلوم، ودائماً: طول المسقط ≤ طول القطعة الأصلية.',
        definitionEn: 'The segment connecting projections of endpoints onto a line; its length is always ≤ original segment length.'
      },
      {
        termAr: 'عكس نظرية فيثاغورس (Converse of Pythagoras Theorem)',
        termEn: 'Converse of Pythagoras Theorem',
        definitionAr: 'في المثلث، إذا كان مربع أطول أضلاعه مساوياً لمجموع مربعي الضلعين الآخرين (c² = a² + b²)، فإن الزاوية المقابلة لهذا الضلع تكون قائمة.',
        definitionEn: 'If the square on the longest side equals sum of squares on other two sides (c² = a² + b²), the triangle is right-angled.'
      },
      {
        termAr: 'نظرية إقليدس (Euclid\'s Theorem)',
        termEn: 'Euclid\'s Theorem',
        definitionAr: 'في المثلث القائم الزاوية ABC (القائم في A و AD عمودي على الوتر BC):\n1) AB² = BD × BC\n2) AC² = CD × BC\n3) AD² = BD × CD\n4) AD = (AB × AC) / BC',
        definitionEn: 'Metric relations in a right triangle with altitude to hypotenuse: AB²=BD·BC, AC²=CD·BC, AD²=BD·CD, AD=(AB·AC)/BC.'
      }
    ],

    keyConceptsAr: [
      'الضلع الأكبر يقابل الزاوية الكبرى، والزاوية الكبرى تقابل الضلع الأكبر',
      'متباينة المثلث: لا يمكن رسم مثلث أطوال أضلاعه 3 سم، 4 سم، 8 سم لأن 3 + 4 = 7 < 8',
      'طول الضلع الثالث ينتمي للفترة المفتوحة: (|a - b| , a + b)',
      'تحديد نوع المثلث (c أطول الأضلاع):\n- إذا كان c² = a² + b² ⟹ قائم الزاوية\n- إذا كان c² < a² + b² ⟹ حاد الزوايا\n- إذا كان c² > a² + b² ⟹ منفرج الزاوية',
      'قوانين إقليدس الأربعة لحساب المساقط والارتفاع'
    ],
    keyConceptsEn: [
      'Longer side opposite larger angle and vice versa',
      'Triangle Inequality testing: valid iff a + b > c for all combinations',
      'Third side bounds: (|a - b|, a + b)',
      'Triangle classification by angles: c² = a² + b² (Right), c² < a² + b² (Acute), c² > a² + b² (Obtuse)',
      'Euclid’s 4 altitude-projection formulas'
    ],

    summaryAr: 'تختتم هذه المحاضرة منهج الهندسة للصف الثاني الإعدادي بإتقان متباينات المثلث، تحديد نوع المثلث من أطوال أضلاعه باستخدام عكس فيثاغورس، ودراسة المساقط الهندسية وتطبيق نظرية إقليدس الشاملة لحساب الأطوال والارتفاعات في المثلث القائم.',
    summaryEn: 'Concludes Grade 8 geometry with triangle inequalities, classifying triangles via Pythagoras converse, geometric projections, and comprehensive Euclid theorem altitude and projection formulas.',

    sections: [
      {
        titleAr: '1. متباينات المثلث والعلاقة بين الأضلاع والزوايا',
        titleEn: '1. Triangle Inequalities & Angle-Side Relationships',
        contentAr: 'نظرية 1: إذا اختلف طولا ضلعين في مثلث، فأكبرهما في الطول تقابله زاوية أكبر في القياس من الزاوية المقابلة للضلع الآخر.\nنظرية 2: إذا اختلف قياسا زاويتين في مثلث، فأكبرهما في القياس يقابلها ضلع أكبر في الطول من الضلع المقابل للزاوية الأخرى.\n\nمتباينة المثلث: في أي مثلث، مجموع طولي أي ضلعين أكبر من طول الضلع الثالث.\nشرط تكوين مثلث: لاختبار إمكانية رسم مثلث بأطوال (a, b, c): نجمع أصغر ضلعين، فإذا كان مجموعهما أكبر من الضلع الثالث أمكن رسم المثلث.\nإيجاد فترة الضلع الثالث: إذا كان ضلعا مثلث 4 سم و 7 سم، فإن طول الضلع الثالث x ينتمي للفترة المفتوحة: (7 - 4 ، 7 + 4) = (3 ، 11) سم.',
        contentEn: 'In any triangle, larger side opposes larger angle and vice versa. Triangle Inequality: sum of two smaller sides must be greater than third side. Third side x belongs to (|a - b|, a + b).'
      },
      {
        titleAr: '2. المساقط الهندسية وتحديد نوع المثلث بالنسبة لزواياه',
        titleEn: '2. Geometric Projections & Classifying Triangles',
        contentAr: 'المسقط الهندسي:\n- مسقط نقطة على مستقيم: هو موقع العمود الساقط من النقطة على المستقيم (نقطة).\n- مسقط قطعة مستقيمة على مستقيم: هو القطعة الواصلة بين مسقطي طرفيها. دائماً: طول المسقط ≤ طول القطعة الأصلية.\n\nتحديد نوع المثلث بالنسبة لزواياه (بفرض c هو أطول أضلاع المثلث):\n1) نحسب c²\n2) نحسب (a² + b²)\n- إذا كان c² = a² + b²: المثلث قائم الزاوية في الزاوية المقابلة لـ c (نظرية فيثاغورس).\n- إذا كان c² < a² + b²: المثلث حاد الزوايا.\n- إذا كان c² > a² + b²: المثلث منفرج الزاوية في الزاوية المقابلة لـ c.',
        contentEn: 'Projection length is always ≤ original segment length. Classification: Let c be longest side. If c² = a² + b² ⟹ Right; If c² < a² + b² ⟹ Acute; If c² > a² + b² ⟹ Obtuse.'
      },
      {
        titleAr: '3. نظرية إقليدس (Euclid\'s Theorem)',
        titleEn: '3. Euclid\'s Theorem in Right Triangles',
        contentAr: 'نص النظرية: مساحة المربع المنشأ على أحد ضلعي القائمة في المثلث القائم الزاوية تساوي مساحة المستطيل الذي بُعداه طول مسقط هذا الضلع على الوتر وطول الوتر.\n\nفي △ABC القائم في A، و AD ⊥ BC:\n1) AB² = BD × BC (مربع ضلع القائمة = مسقطه × الوتر كلاً)\n2) AC² = CD × BC (مربع ضلع القائمة الآخر = مسقطه × الوتر كلاً)\n3) AD² = BD × CD (مربع الارتفاع = حاصل ضرب جزأي الوتر)\n4) AD = (AB × AC) / BC (طول الارتفاع = حاصل ضرب ضلعي القائمة ÷ الوتر)',
        contentEn: 'Euclid’s Theorem: In right △ABC with right angle at A and AD ⊥ BC: 1) AB² = BD·BC, 2) AC² = CD·BC, 3) AD² = BD·CD, 4) AD = (AB·AC) / BC.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-m8-math-9',
        questionAr: '1) بيّن أياً من مجموعات الأطوال الآتية تصلح لرسم مثلث:\nأ) 3 سم، 5 سم، 9 سم\nب) 5 سم، 7 سم، 10 سم\n\n2) حدد نوع المثلث ABC بالنسبة لزواياه إذا كانت أطوال أضلاعه: AB = 6 سم، BC = 8 سم، AC = 11 سم.',
        questionEn: '1) Which side lengths form a triangle? a) 3cm, 5cm, 9cm; b) 5cm, 7cm, 10cm.\n2) Classify △ABC by angles given AB = 6cm, BC = 8cm, AC = 11cm.',
        solutionStepsAr: [
          '1) أ) 3 + 5 = 8 < 9 (لا تصلح). ب) 5 + 7 = 12 > 10 (تصلح لرسم مثلث).',
          '2) مربع أطول الأضلاع: AC² = 11² = 121.',
          'مجموع مربعي الضلعين الآخرين: 6² + 8² = 36 + 64 = 100.',
          'بما أن 121 > 100 (AC² > AB² + BC²)، إذن المثلث ABC منفرج الزاوية في زاوية B.'
        ],
        solutionStepsEn: [
          '1) a) 3+5=8 < 9 (No). b) 5+7=12 > 10 (Yes).',
          '2) AC² = 121. AB² + BC² = 100.',
          'Since 121 > 100, △ABC is obtuse-angled at ∠B.'
        ],
        answerAr: '1) (ب) تصلح لرسم مثلث • 2) المثلث ABC منفرج الزاوية في B',
        answerEn: '1) (b) forms triangle • 2) △ABC is obtuse at ∠B'
      },
      {
        id: 'tb-m8-math-10',
        questionAr: 'في △ABC قائم الزاوية في A، و AD ⊥ BC. فإذا كان BD = 9 سم، و CD = 16 سم. احسب كلاً من: 1) BC  2) AB  3) AC  4) AD.',
        questionEn: 'In △ABC right-angled at A with altitude AD ⊥ BC: BD = 9cm and CD = 16cm. Compute: 1) BC, 2) AB, 3) AC, 4) AD.',
        solutionStepsAr: [
          '1) الوتر BC = 9 + 16 = 25 سم.',
          '2) AB² = BD × BC = 9 × 25 = 225 ⟹ AB = 15 سم.',
          '3) AC² = CD × BC = 16 × 25 = 400 ⟹ AC = 20 سم.',
          '4) AD² = BD × CD = 9 × 16 = 144 ⟹ AD = 12 سم (أو AD = (15×20)/25 = 12 سم).'
        ],
        solutionStepsEn: [
          '1) BC = 9 + 16 = 25cm.',
          '2) AB² = 9 × 25 = 225 ⟹ AB = 15cm.',
          '3) AC² = 16 × 25 = 400 ⟹ AC = 20cm.',
          '4) AD² = 9 × 16 = 144 ⟹ AD = 12cm.'
        ],
        answerAr: 'BC = 25 سم • AB = 15 سم • AC = 20 سم • AD = 12 سم',
        answerEn: 'BC = 25cm • AB = 15cm • AC = 20cm • AD = 12cm'
      }
    ],

    assessment: {
      id: 'quiz-m8-math-5',
      lectureId: 'm8-math-5',
      titleAr: 'الاختبار الإتقاني للمحاضرة 5: متباينات المثلث والمساقط ونظرية إقليدس',
      titleEn: 'Mastery Assessment 5: Triangle Inequalities, Projections & Euclid',
      passingScore: 80,
      questions: [
        {
          id: 'q1-m8-math-5',
          textAr: 'مثلث متساوي الساقين طولا ضلعين فيه 4 سم و 9 سم، فإن طول الضلع الثالث يساوي:',
          textEn: 'An isosceles triangle has side lengths 4cm and 9cm. The length of the third side is:',
          optionsAr: ['9 سم', '4 سم', '5 سم', '13 سم'],
          optionsEn: ['9 cm', '4 cm', '5 cm', '13 cm'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق متباينة المثلث في المتساوي الساقين',
          conceptTestedEn: 'Triangle Inequality in Isosceles Triangles',
          explanationAr: 'إذا كان الضلع الثالث 4 سم، يصبح مجموع الضلعين 4 + 4 = 8 < 9 فلا يصلح لتكوين مثلث! إذن يجب أن يكون الضلع الثالث 9 سم لأن 4 + 9 = 13 > 9.',
          explanationEn: 'If third side were 4cm: 4+4=8 < 9 (invalid). Thus third side must be 9cm (4+9=13 > 9).',
          difficulty: 'medium'
        },
        {
          id: 'q2-m8-math-5',
          textAr: 'في △ABC، إذا كان AC² = AB² + BC²، فإن الزاوية القائمة هي:',
          textEn: 'In △ABC, if AC² = AB² + BC², then the right angle is:',
          optionsAr: ['∠B', '∠A', '∠C', '∠D'],
          optionsEn: ['∠B', '∠A', '∠C', '∠D'],
          correctIndex: 0,
          conceptTestedAr: 'عكس نظرية فيثاغورس',
          conceptTestedEn: 'Converse of Pythagoras Theorem',
          explanationAr: 'الوتر هو الضلع الأطول AC، والزاوية المقابلة للوتر هي الزاوية B، إذن المثلث قائم الزاوية في B.',
          explanationEn: 'The hypotenuse is AC, so the opposite vertex ∠B is the 90° right angle.',
          difficulty: 'easy'
        },
        {
          id: 'q3-m8-math-5',
          textAr: 'طول مسقط قطعة مستقيمة على مستقيم معلوم يكون دائماً:',
          textEn: 'The length of the projection of a line segment onto a line is always:',
          optionsAr: ['أصغر من أو يساوي طول القطعة الأصلية', 'أكبر من طول القطعة الأصلية', 'يساوي دائماً صفراً', 'ضعف طول القطعة الأصلية'],
          optionsEn: ['Less than or equal to original segment length', 'Greater than original segment length', 'Always zero', 'Double original length'],
          correctIndex: 0,
          conceptTestedAr: 'خاصية طول المسقط الهندسي',
          conceptTestedEn: 'Geometric Projection Properties',
          explanationAr: 'طول المسقط يكون دائماً ≤ طول القطعة الأصلية (يساويها إذا كانت موازية للمستقيم، ويساوي صفراً إذا كانت عمودية عليه).',
          explanationEn: 'Projection length is always ≤ original segment length (equal when parallel, 0 when perpendicular).',
          difficulty: 'easy'
        },
        {
          id: 'q4-m8-math-5',
          textAr: 'في المثلث القائم الزاوية، إذا كان الارتفاع الساقط على الوتر يقسم الوتر إلى جزأين طولهما 4 سم و 9 سم، فإن طول هذا الارتفاع يساوي:',
          textEn: 'In a right triangle, if the altitude to hypotenuse divides it into segments of 4cm and 9cm, the altitude length is:',
          optionsAr: ['6 سم', '13 سم', '36 سم', '6.5 سم'],
          optionsEn: ['6 cm', '13 cm', '36 cm', '6.5 cm'],
          correctIndex: 0,
          conceptTestedAr: 'قانون الارتفاع في نظرية إقليدس',
          conceptTestedEn: 'Euclid Altitude Formula',
          explanationAr: 'حسب نظرية إقليدس: AD² = BD × CD = 4 × 9 = 36 ⟹ AD = √36 = 6 سم.',
          explanationEn: 'By Euclid\'s theorem: AD² = BD · CD = 4 × 9 = 36 ⟹ AD = √36 = 6cm.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
