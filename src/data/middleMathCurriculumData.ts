import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL MATHEMATICS & PREP 1 (رياضيات الصف الأول الإعدادي / لغات وعربي)
// Official Grade 7 / Prep 1 National Curriculum Alignment:
// Unit 1: Numbers & Operations (Rational Numbers Q, Powers, Scientific Notation, Square Root)
// Unit 2: Algebraic Expressions, Operations & Factoring
// Unit 3: Linear Equations & Inequalities in Q
// Unit 4: Geometry & Measurement (Angles, Triangle Congruence, Parallelism, Transformations)
// Unit 5: Statistics & Basic Probability
// ============================================================================

export const MIDDLE_MATH_LECTURES: Lecture[] = [
  // ── LECTURE 1: RATIONAL NUMBERS, POWERS & SCIENTIFIC NOTATION ──
  {
    id: 'm-math-1',
    order: 1,
    titleAr: 'المحاضرة 1: مجموعة الأعداد النسبية والعمليات عليها والقوى والصورة القياسية',
    titleEn: 'Lecture 1: Rational Numbers (Q), Operations, Repeated Multiplication & Scientific Notation',
    subtitleAr: 'دراسة تعريف العدد النسبي وتمثيله والعمليات الحسابية عليه، وقوانين الأسس الصحيحة، والعدد بالصورة القياسية والجذر التربيعي',
    subtitleEn: 'Master set of rational numbers Q, arithmetic operations, non-negative/negative exponents, scientific notation, and square roots.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول والثاني',
    termEn: 'Term 1 & Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: الأعداد والعمليات (مجموعة الأعداد النسبية والقوى والجذور)',
    unitTitleEn: 'Unit 1: Numbers & Operations (Rational Numbers Q, Exponents & Roots)',
    lessonNumberAr: 'الدرس 1: الأعداد النسبية والعمليات الحسابية والأسس',
    lessonNumberEn: 'Lesson 1: Set Q, Arithmetic Operations, Repeated Multiplication & Standard Form',

    // Real-world hook
    warmupHookAr: 'هل تساءلت يوماً كيف يعبر علماء الفلك عن المسافات الشاسعة بين النجوم مثل مسافة 9,460,000,000,000 كيلومتر (السنة الضوئية)؟ وكيف يعبر علماء الأحياء عن حجم فيروس متناهي الصغر مثل 0.00000002 متر؟ في لغة الرياضيات، نستخدم "مجموعة الأعداد النسبية" و"الصورة القياسية للعدد" a × 10ⁿ للتعبير عن الأرقام الضخمة والصغيرة بدقة فائقة وبدون أي تعقيد!',
    warmupHookEn: 'Astronomers measuring light-years (9.46 trillion km) and biologists sizing viruses (0.00000002m) utilize the elegant power of Rational Numbers (Q) and Scientific Notation (a × 10ⁿ) to simplify calculations across science and computing!',

    // Targeted Learning Outcomes
    learningOutcomesAr: [
      'أن يعرّف الطالب العدد النسبي على صورة a/b حيث a و b عددان صحيحان و b ≠ 0',
      'أن يجري العمليات الحسابية الأربع (الجمع، الطرح، الضرب، القسمة) على الأعداد النسبية بدقة',
      'أن يطبق قوانين الأسس المتكررة: عند الضرب تجمع الأسس (aᵐ × aⁿ = aᵐ⁺ⁿ) وعند القسمة تطرح الأسس (aᵐ ÷ aⁿ = aᵐ⁻ⁿ)',
      'أن يكتب الأعداد الكبيرة جداً والصغيرة جداً بالصورة القياسية (a × 10ⁿ) حيث 1 ≤ |a| < 10',
      'أن يحسب الجذر التربيعي للعدد النسبي المربع الكامل: √(a²/b²) = |a/b|'
    ],
    learningOutcomesEn: [
      'Define rational numbers in fractional form a/b where b ≠ 0',
      'Perform addition, subtraction, multiplication, and division in Q',
      'Apply exponent laws: product rule (aᵐ × aⁿ = aᵐ⁺ⁿ) and quotient rule (aᵐ ÷ aⁿ = aᵐ⁻ⁿ)',
      'Express numbers in standard scientific notation a × 10ⁿ where 1 ≤ |a| < 10',
      'Evaluate square roots of perfect square rational numbers'
    ],

    // Vocabulary
    vocabulary: [
      {
        termAr: 'العدد النسبي (Rational Number - Q)',
        termEn: 'Rational Number (Q)',
        definitionAr: 'كل عدد يمكن كتابته على صورة كسر اعتيادي a / b حيث a و b عددان صحيحان و b لا تساوي صفراً (b ≠ 0).',
        definitionEn: 'Any number that can be expressed as a/b where a, b ∈ Z and b ≠ 0.'
      },
      {
        termAr: 'الصورة القياسية (Scientific Notation)',
        termEn: 'Scientific Notation',
        definitionAr: 'كتابة العدد على الصورة (a × 10ⁿ) حيث 1 ≤ |a| < 10 و n عدد صحيح.',
        definitionEn: 'Expressing a number as a × 10ⁿ where 1 ≤ |a| < 10 and n is an integer.'
      },
      {
        termAr: 'المعكوس الجمعي والضربي (Additive & Multiplicative Inverse)',
        termEn: 'Additive & Multiplicative Inverse',
        definitionAr: 'المعكوس الجمعي للعدد a/b هو (-a/b)، بينما المعكوس الضربي (المقلوب) هو (b/a) بشرط a ≠ 0.',
        definitionEn: 'Additive inverse is -a/b; multiplicative inverse (reciprocal) is b/a (a ≠ 0).'
      },
      {
        termAr: 'الجذر التربيعي (Square Root)',
        termEn: 'Square Root',
        definitionAr: 'العدد الذي إذا ضُرب في نفسه كان الناتج هو العدد المعطى، ويرمز له بالرمز √.',
        definitionEn: 'A value that, when multiplied by itself, gives the specified number (√).'
      }
    ],

    keyConceptsAr: [
      'شرط العدد النسبي a/b: المقام b ≠ 0 (فمثلاً 5/(x-3) نسبي بشرط x ≠ 3)',
      'العمليات في Q: توحيد المقامات في الجمع والطرح، وضرب البسط بالبسط والمقام بالمقام',
      'قوانين الأسس: aᵐ × aⁿ = aᵐ⁺ⁿ | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | (aᵐ)ⁿ = aᵐⁿ | a⁰ = 1 | a⁻ⁿ = 1/aⁿ',
      'الصورة القياسية: a × 10ⁿ مع تحريك الفاصلة وتحديد إشارة الأس n',
      'الجذر التربيعي: √16 = 4، و√(9/25) = 3/5'
    ],
    keyConceptsEn: [
      'Rational condition: Denominator b ≠ 0',
      'Arithmetic in Q: Common denominators for addition/subtraction, direct product for multiplication',
      'Exponent rules: Product, quotient, power-of-power, zero power (a⁰ = 1), negative exponents (a⁻ⁿ = 1/aⁿ)',
      'Scientific notation conversion: a × 10ⁿ',
      'Square root evaluation in Q'
    ],
    summaryAr: 'في هذه المحاضرة نتقن ركائز رياضيات الصف الأول الإعدادي؛ من خلال فهم مجموعة الأعداد النسبية وتمثيلها وخواص العمليات عليها، وقوانين الأسس الصحيحة، والتحويل إلى الصورة القياسية العلمية وحساب الجذور التربيعية.',
    summaryEn: 'Master foundational Prep 1 mathematics: Rational numbers Q, four fundamental operations, exponent laws, scientific notation, and square root calculations.',

    sections: [
      {
        titleAr: '1. مجموعة الأعداد النسبية (Q) وخصائصها والعمليات الحسابية',
        titleEn: '1. The Set of Rational Numbers (Q) & Arithmetic Operations',
        contentAr: 'العدد النسبي هو كل عدد يمكن التعبير عنه على صورة a / b حيث a و b ∈ ℤ و b ≠ 0. الأعداد الصحيحة والكسور والنسب المئوية والأعداد العشرية المنتهية والدورية كلها أعداد نسبية. للجمع والطرح نوحد المقامات، وللضرب نضرب البسط في البسط والمقام في المقام، وللقسمة نحولها إلى ضرب في المعكوس الضربي للمقسوم عليه: (a/b) ÷ (c/d) = (a/b) × (d/c).',
        contentEn: 'A rational number is any number expressible as a/b (b ≠ 0). Integers, terminating/repeating decimals, and percentages belong to Q. Arithmetic follows standard fraction rules with common denominators and reciprocal division.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حساب ناتج جمع وقسمة أعداد نسبية مع شرط العدد النسبي',
          titleEn: 'Worked Example 1: Rational Arithmetic & Rational Condition',
          equation: '(3/4 + 1/2) ÷ (5/8)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: توحيد مقامات ما بداخل القوس: (3/4 + 2/4) = 5/4.',
              textEn: 'Step 1: Simplify parentheses: 3/4 + 2/4 = 5/4.',
              noteAr: 'توحيد المقامات إلى 4'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: تحويل القسمة إلى ضرب في مقلوب الكسر الثاني: (5/4) × (8/5).',
              textEn: 'Step 2: Multiply by reciprocal: (5/4) × (8/5).',
              noteAr: 'المعكوس الضربي لـ 5/8 هو 8/5'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: الاختصار والتبسيط: نختصر 5 مع 5، و 8 ÷ 4 = 2. الناتج النهائي = 2 (عدد نسبي وصحيح).',
              textEn: 'Step 3: Cancel common factors: (5×8)/(4×5) = 40/20 = 2.',
              noteAr: 'الناتج النهائي = 2'
            }
          ],
          takeawayAr: 'قسمة الأعداد النسبية تكافئ الضرب في المعكوس الضربي للكسر الثاني مع التبسيط لأبسط صورة.',
          takeawayEn: 'Dividing rational numbers is equivalent to multiplying by the reciprocal of the divisor.'
        },
        formativeCheck: {
          id: 'fc-mmath1-1',
          questionAr: 'العدد (x - 2) / (x + 5) يكون عدداً نسبياً بشرط أن x ≠ ...؟',
          questionEn: 'The number (x - 2) / (x + 5) represents a rational number under the condition x ≠ ...?',
          optionsAr: ['-5', '2', '0', '5'],
          optionsEn: ['-5', '2', '0', '5'],
          correctIndex: 0,
          explanationAr: 'شرط العدد النسبي هو أن المقام لا يساوي صفراً: x + 5 ≠ 0 ومنها x ≠ -5.',
          explanationEn: 'The denominator must not equal zero: x + 5 ≠ 0 => x ≠ -5.',
          hintAr: 'اجعل المقام لا يساوي صفراً وحل المعادلة الناتجة.'
        },
        tipsAr: [
          'العدد النسبي يساوي صفراً إذا كان بسطه هو الذي يساوي صفراً (a = 0).',
          'بين أي عددين نسبيين يوجد عدد لا نهائي من الأعداد النسبية (خاصية الكثافة في Q).'
        ],
        tipsEn: [
          'A rational number equals 0 if its numerator is 0.',
          'Between any two rational numbers lie infinitely many rational numbers (density property).'
        ]
      },
      {
        titleAr: '2. قوانين القوى والأسس الصحيحة غير السالبة والسالبة',
        titleEn: '2. Exponent Rules: Positive, Zero & Negative Integer Powers',
        contentAr: 'الضرب المتكرر لعدد نسبي في نفسه يعبر عنه بالأسس: (a/b)ⁿ = aⁿ / bⁿ. وتخضع الأسس للقوانين الأساسية: 1) عند ضرب الأساسات المتشابهة تجمع الأسس: aᵐ × aⁿ = aᵐ⁺ⁿ. 2) عند قسمة الأساسات المتشابهة تطرح الأسس: aᵐ ÷ aⁿ = aᵐ⁻ⁿ. 3) قوة القوة: (aᵐ)ⁿ = aᵐⁿ. 4) أي عدد غير الصفر أسه صفر يساوي 1: a⁰ = 1. 5) الأس السالب يعني المقلوب: a⁻ⁿ = 1 / aⁿ و (a/b)⁻ⁿ = (b/a)ⁿ.',
        contentEn: 'Repeated multiplication is governed by fundamental exponent laws: Product rule (add powers), Quotient rule (subtract powers), Power of power (multiply powers), Zero exponent (a⁰ = 1), and Negative exponent inversion (a⁻ⁿ = 1/aⁿ).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: تبسيط مقدار أسي يحتوي على أسس موجبة وسالبة',
          titleEn: 'Worked Example 2: Simplifying Algebraic Exponent Expressions',
          equation: '(2³ × 2⁻⁵) ÷ (2⁻⁴)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نجمع أسس البسط (ضرب أساسات متساوية): 2³⁺⁽⁻⁵⁾ = 2⁻².',
              textEn: 'Step 1: Simplify numerator using product rule: 2³ × 2⁻⁵ = 2⁻².',
              noteAr: 'جمع الأسس: 3 + (-5) = -2'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نطبق قانون القسمة (طرح الأسس): 2⁻² ÷ 2⁻⁴ = 2⁻² ⁻ ⁽⁻⁴⁾ = 2⁻²⁺⁴ = 2².',
              textEn: 'Step 2: Apply quotient rule: 2⁻² ÷ 2⁻⁴ = 2^(-2 - (-4)) = 2².',
              noteAr: 'طرح الأسس: -2 - (-4) = +2'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: حساب القيمة النهائية: 2² = 4.',
              textEn: 'Step 3: Evaluate: 2² = 4.',
              noteAr: 'الناتج = 4'
            }
          ],
          takeawayAr: 'التعامل مع الأسس السالبة يتم إما بتطبيق قوانين الطرح مباشرة أو بنقل المقدار من المقام للبسط بعكس إشارة الأس.',
          takeawayEn: 'Negative exponents can be evaluated directly via subtraction rules or inverted across fractions.'
        },
        formativeCheck: {
          id: 'fc-mmath1-2',
          questionAr: 'ما قيمة المقدار: (3/5)⁻² ؟',
          questionEn: 'What is the evaluated value of (3/5)⁻² ?',
          optionsAr: ['25/9', '9/25', '-9/25', '-25/9'],
          optionsEn: ['25/9', '9/25', '-9/25', '-25/9'],
          correctIndex: 0,
          explanationAr: '(3/5)⁻² = (5/3)² = 5² / 3² = 25 / 9.',
          explanationEn: '(3/5)⁻² = (5/3)² = 25/9.',
          hintAr: 'اقلب الكسر لتصبح إشارة الأس موجبة (+2) ثم ربع البسط والمقام.'
        },
        tipsAr: [
          '(-2)⁴ = +16 (الأس الزوجي يلغي الإشارة السالبة)، بينما (-2)³ = -8 (الأس الفردي يحتفظ بالإشارة السالبة).',
          'تذكر أن: (a + b)² ≠ a² + b²، فالأسس لا توزع على الجمع والطرح مطلقاً!'
        ],
        tipsEn: [
          'Even exponents eliminate negative signs; odd exponents preserve them.',
          'Powers distribute over multiplication and division, NEVER over addition or subtraction.'
        ]
      },
      {
        titleAr: '3. الصورة القياسية للعدد النسبي (Scientific Notation)',
        titleEn: '3. Standard Scientific Notation (a × 10ⁿ)',
        contentAr: 'الصورة القياسية للعدد النسبي هي كتابته على الشكل: (a × 10ⁿ) حيث 1 ≤ |a| < 10 و n عدد صحيح. عند تحريك الفاصلة العشرية إلى اليسار يكون الأس n موجباً (+)، وعند تحريك الفاصلة إلى اليمين يكون الأس n سالباً (-). مثال: 530000 = 5.3 × 10⁵ ، والعدد 0.00072 = 7.2 × 10⁻⁴.',
        contentEn: 'Standard scientific notation represents numbers as a × 10ⁿ where 1 ≤ |a| < 10. Shifting the decimal left yields positive powers of 10; shifting right yields negative powers.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: تحويل الأعداد الكبيرة والصغيرة للصورة القياسية وإجراء عمليات عليها',
          titleEn: 'Worked Example 3: Scientific Notation Conversions & Multiplication',
          equation: '(3.2 × 10⁴) × (2 × 10⁻⁶)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نضرب الأعداد العشرية معاً: 3.2 × 2 = 6.4.',
              textEn: 'Step 1: Multiply decimal coefficients: 3.2 × 2 = 6.4.',
              noteAr: 'حاصل ضرب المعاملات = 6.4'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نضرب قوى العدد 10 بجمع الأسس: 10⁴ × 10⁻⁶ = 10⁴⁺⁽⁻⁶⁾ = 10⁻².',
              textEn: 'Step 2: Multiply powers of 10: 10⁴ × 10⁻⁶ = 10⁻².',
              noteAr: 'جمع الأسس: 4 + (-6) = -2'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نجمع الناتج بالصورة القياسية: 6.4 × 10⁻² (بما أن 1 ≤ 6.4 < 10 فالعدد في الصورة القياسية الصحيحة).',
              textEn: 'Step 3: Combine: 6.4 × 10⁻² (valid standard form since 1 ≤ 6.4 < 10).',
              noteAr: 'الناتج = 6.4 × 10⁻²'
            }
          ],
          takeawayAr: 'يجب التأكد دائماً أن القيمة المطلقة للعدد a تقع في الفترة [1, 10) ليكون في صورته القياسية المعتمدة.',
          takeawayEn: 'Always verify that 1 ≤ |a| < 10 for official scientific notation conformance.'
        },
        formativeCheck: {
          id: 'fc-mmath1-3',
          questionAr: 'العدد 0.000045 يكتب في الصورة القياسية على الشكل:',
          questionEn: 'The number 0.000045 is written in scientific notation as:',
          optionsAr: ['4.5 × 10⁻⁵', '4.5 × 10⁵', '45 × 10⁻⁶', '0.45 × 10⁻⁴'],
          optionsEn: ['4.5 × 10⁻⁵', '4.5 × 10⁵', '45 × 10⁻⁶', '0.45 × 10⁻⁴'],
          correctIndex: 0,
          explanationAr: 'حركنا الفاصلة 5 خانات إلى اليمين لتصبح بين 4 و 5، إذن الناتج 4.5 × 10⁻⁵.',
          explanationEn: 'Moving the decimal 5 places right yields 4.5 × 10⁻⁵.',
          hintAr: 'عد الخانات التي تحركتها الفاصلة جهة اليمين حتى تصل لأول رقم غير صفري.'
        },
        tipsAr: [
          'إذا كان الناتج مثلاً 35 × 10⁴، فهو ليس بالصورة القياسية؛ نحوله إلى 3.5 × 10⁵.',
          'الأس السالب في الصورة القياسية يدل على عدد عشري صغير جداً أقل من الواحد.'
        ],
        tipsEn: [
          '35 × 10⁴ must be adjusted to 3.5 × 10⁵ to meet the standard form requirement.',
          'Negative exponents represent ultra-small sub-unity decimal magnitudes.'
        ]
      },
      {
        titleAr: '4. الجذر التربيعي للعدد النسبي المربع الكامل',
        titleEn: '4. Square Root of Perfect Square Rational Numbers',
        contentAr: 'الجذر التربيعي للعدد النسبي الموجب a هو العدد الذي مربعه يساوي a. يرمز للجذر التربيعي الموجب بالرمز √a، وللجذرين التربيعيين معاً بالرمز ±√a. الجذر التربيعي للصفر هو 0 (√0 = 0). لا يوجد جذر تربيعي لعدد حقيقي سالب في مجموعة الأعداد النسبية (√-16 ليس عدداً نسبياً ولا حقيقياً). لحساب جذر كسر: √(a/b) = √a / √b.',
        contentEn: 'The square root of positive rational a is the value whose square is a. Square roots distribute over fractions: √(a/b) = √a / √b. Square roots of negative numbers are undefined in Q.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: حساب قيمة تعبير جبري يحتوي على جذور تربيعية وعمليات حسابية',
          titleEn: 'Worked Example 4: Evaluating Radical Expressions with Order of Operations',
          equation: '√(16/25) + 3/5 × 4 - (2/5)⁰',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: حساب الجذر التربيعي: √(16/25) = √16 / √25 = 4/5.',
              textEn: 'Step 1: Compute square root: √(16/25) = 4/5.',
              noteAr: 'الجذر = 4/5'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: حساب الضرب وحساب الأس الصفري: (3/5 × 4) = 12/5 ، و (2/5)⁰ = 1 = 5/5.',
              textEn: 'Step 2: Multiply & zero power: 3/5 × 4 = 12/5, (2/5)⁰ = 1 = 5/5.',
              noteAr: 'ترتيب العمليات الرياضية'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: الجمع والطرح: 4/5 + 12/5 - 5/5 = (4 + 12 - 5) / 5 = 11/5 = 2.2.',
              textEn: 'Step 3: Combine with common denominator 5: (4 + 12 - 5)/5 = 11/5.',
              noteAr: 'الناتج النهائي = 11/5'
            }
          ],
          takeawayAr: 'نتبع دائماً الترتيب الصحيح للعمليات: الأقواس، الأسس والجذور، الضرب والقسمة، ثم الجمع والطرح من اليمين إلى اليسار.',
          takeawayEn: 'Follow standard precedence: Parentheses, Powers & Roots, Multiplication/Division, Addition/Subtraction.'
        },
        formativeCheck: {
          id: 'fc-mmath1-4',
          questionAr: 'ما قيمة المقدار: √(0.36) ؟',
          questionEn: 'What is the value of √(0.36) ?',
          optionsAr: ['0.6', '0.06', '6', '0.18'],
          optionsEn: ['0.6', '0.06', '6', '0.18'],
          correctIndex: 0,
          explanationAr: '√(0.36) = √(36/100) = √36 / √100 = 6/10 = 0.6.',
          explanationEn: '√(0.36) = √(36/100) = 6/10 = 0.6.',
          hintAr: 'حول العدد العشري إلى كسر اعتيادي (36/100) ثم خذ جذر البسط والمقام.'
        },
        tipsAr: [
          'تذكر أن: √(a² + b²) ≠ a + b (الجذر لا يوزع على الجمع مطلقاً). فمثلاً √(9 + 16) = √25 = 5 وليس 3 + 4 = 7!',
          'أي عدد مربع كامل له جذران تربيعيان: أحدهما موجب والآخر سالب ومجموعهما يساوي صفراً.'
        ],
        tipsEn: [
          'Never distribute roots over addition: √(9 + 16) = √25 = 5 (not 3+4).',
          'Every positive rational has two square roots (±√a) whose sum is 0.'
        ]
      }
    ],

    conceptMapAr: [
      'العدد النسبي Q: يكتب على صورة a/b مع شرط b ≠ 0',
      'العمليات الحسابية: توحيد المقامات للجمع والطرح، والضرب المباشر للبسط والمقام',
      'قوانين الأسس: aᵐ × aⁿ = aᵐ⁺ⁿ | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | a⁰ = 1 | a⁻ⁿ = 1/aⁿ',
      'الصورة القياسية: a × 10ⁿ مع 1 ≤ |a| < 10',
      'الجذر التربيعي: √(a/b) = √a / √b | إنجاز العمليات داخل الجذر أولاً قبل أخذ الجذر'
    ],
    conceptMapEn: [
      'Rational number Q: a/b where b ≠ 0',
      'Arithmetic: Common denominators for +/- and reciprocal multiplication for division',
      'Exponent laws: Product, quotient, zero-power, and negative exponent rules',
      'Scientific notation: a × 10ⁿ (1 ≤ |a| < 10)',
      'Square roots: Compute inner terms before extracting root'
    ],

    textbookExercises: [
      {
        id: 'ex-mmath1-1',
        questionAr: 'أوجد في أبسط صورة ناتج: (2/3)² × (3/4) ÷ √(9/16)',
        questionEn: 'Evaluate in simplest form: (2/3)² × (3/4) ÷ √(9/16)',
        solutionStepsAr: [
          'الخطوة 1: فك الأس: (2/3)² = 4/9.',
          'الخطوة 2: حساب الجذر التربيعي: √(9/16) = 3/4.',
          'الخطوة 3: التعويض في المسألة: 4/9 × 3/4 ÷ 3/4.',
          'الخطوة 4: بما أن (3/4 ÷ 3/4 = 1)، فإن الناتج = 4/9 × 1 = 4/9.'
        ],
        solutionStepsEn: [
          'Step 1: (2/3)² = 4/9.',
          'Step 2: √(9/16) = 3/4.',
          'Step 3: 4/9 × 3/4 ÷ 3/4 = 4/9 × 1 = 4/9.'
        ],
        answerAr: 'الناتج النهائي في أبسط صورة = 4/9.',
        answerEn: 'Final simplified answer = 4/9.'
      },
      {
        id: 'ex-mmath1-2',
        questionAr: 'اكتب كلاً من الأعداد الآتية في الصورة القياسية (Scientific Notation): 1) 680,000,000  2) 0.0000037',
        questionEn: 'Write in standard scientific notation: 1) 680,000,000  2) 0.0000037',
        solutionStepsAr: [
          '1) العدد 680,000,000: نحرك الفاصلة 8 خانات يساراً = 6.8 × 10⁸.',
          '2) العدد 0.0000037: نحرك الفاصلة 6 خانات يميناً = 3.7 × 10⁻⁶.'
        ],
        solutionStepsEn: [
          '1) 680,000,000 = 6.8 × 10⁸ (shift left 8 places).',
          '2) 0.0000037 = 3.7 × 10⁻⁶ (shift right 6 places).'
        ],
        answerAr: '1) 6.8 × 10⁸ • 2) 3.7 × 10⁻⁶.',
        answerEn: '1) 6.8 × 10⁸ • 2) 3.7 × 10⁻⁶.'
      },
      {
        id: 'ex-mmath1-3',
        questionAr: 'أوجد قيمة س التي تجعل كلاً مما يأتي صحيحاً: 1) (5/7)ˢ = 1  2) 3ˢ = 1/27  3) س² = 49/81',
        questionEn: 'Find x: 1) (5/7)ˣ = 1  2) 3ˣ = 1/27  3) x² = 49/81',
        solutionStepsAr: [
          '1) بما أن الناتج = 1، إذن الأس س = 0 (لأن أي عدد أسه صفر يساوي 1).',
          '2) 1/27 = 1/3³ = 3⁻³، إذن س = -3.',
          '3) س = ±√(49/81) = ±7/9 (حلان: موجب وسالب).'
        ],
        solutionStepsEn: [
          '1) (5/7)ˣ = 1 => x = 0.',
          '2) 3ˣ = 1/27 = 3⁻³ => x = -3.',
          '3) x = ±√(49/81) = ±7/9.'
        ],
        answerAr: '1) س = 0 • 2) س = -3 • 3) س = ±7/9.',
        answerEn: '1) x = 0 • 2) x = -3 • 3) x = ±7/9.'
      },
      {
        id: 'ex-mmath1-4',
        questionAr: 'مربع مساحته 2.25 سم². 1) احسب طول ضلعه. 2) احسب محيطه.',
        questionEn: 'A square has area 2.25 cm². 1) Find side length. 2) Compute perimeter.',
        solutionStepsAr: [
          'الخطوة 1: مساحة المربع = (طول الضلع)²، إذن طول الضلع L = √2.25 = √(225/100) = 15/10 = 1.5 سم.',
          'الخطوة 2: محيط المربع = طول الضلع × 4 = 1.5 × 4 = 6 سم.'
        ],
        solutionStepsEn: [
          'Step 1: Side L = √2.25 = 1.5 cm.',
          'Step 2: Perimeter = 4 × 1.5 = 6 cm.'
        ],
        answerAr: 'طول الضلع = 1.5 سم • المحيط = 6 سم.',
        answerEn: 'Side = 1.5 cm • Perimeter = 6 cm.'
      }
    ],

    assessment: {
      id: 'quiz-m-math-1',
      lectureId: 'm-math-1',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 1: الأعداد النسبية والأسس والصورة القياسية والجذور',
      titleEn: 'Mastery Assessment 1: Rational Numbers, Exponent Rules & Square Roots',
      passingScore: 80,
      questions: [
        {
          id: 'qm1-1',
          textAr: 'العدد 7 / (2x - 6) لا ينتمي إلى مجموعة الأعداد النسبية Q إذا كانت x تساوي:',
          textEn: 'The number 7 / (2x - 6) does not belong to Q when x equals:',
          optionsAr: ['3', '6', '0', '-3'],
          optionsEn: ['3', '6', '0', '-3'],
          correctIndex: 0,
          conceptTestedAr: 'شرط انعدام المقام في الأعداد النسبية',
          conceptTestedEn: 'Denominator zero condition',
          explanationAr: 'لا يكون نسبياً إذا كان المقام = 0: 2x - 6 = 0 => 2x = 6 => x = 3.',
          explanationEn: 'Denominator = 0 => 2x - 6 = 0 => x = 3.',
          difficulty: 'easy'
        },
        {
          id: 'qm1-2',
          textAr: 'ما قيمة المقدار: 2⁻³ ؟',
          textEn: 'What is the value of 2⁻³ ?',
          optionsAr: ['1/8', '-8', '-6', '1/6'],
          optionsEn: ['1/8', '-8', '-6', '1/6'],
          correctIndex: 0,
          conceptTestedAr: 'قانون الأسس السالبة والمقلوب',
          conceptTestedEn: 'Negative Exponent Rule',
          explanationAr: '2⁻³ = 1 / 2³ = 1 / 8.',
          explanationEn: '2⁻³ = 1 / 8.',
          difficulty: 'easy'
        },
        {
          id: 'qm1-3',
          textAr: 'العدد 530,000 بالصورة القياسية هو:',
          textEn: '530,000 in standard scientific notation is:',
          optionsAr: ['5.3 × 10⁵', '5.3 × 10⁴', '53 × 10⁴', '0.53 × 10⁶'],
          optionsEn: ['5.3 × 10⁵', '5.3 × 10⁴', '53 × 10⁴', '0.53 × 10⁶'],
          correctIndex: 0,
          conceptTestedAr: 'التحويل إلى الصورة القياسية',
          conceptTestedEn: 'Scientific Notation Conversion',
          explanationAr: 'تحريك الفاصلة 5 خانات لليسار ينتج 5.3 × 10⁵.',
          explanationEn: 'Moving decimal 5 places left gives 5.3 × 10⁵.',
          difficulty: 'medium'
        },
        {
          id: 'qm1-4',
          textAr: 'ما قيمة المقدار: √(25 - 9) ؟',
          textEn: 'What is the value of √(25 - 9) ?',
          optionsAr: ['4', '2', '8', '16'],
          optionsEn: ['4', '2', '8', '16'],
          correctIndex: 0,
          conceptTestedAr: 'أسبقية العمليات تحت الجذر التربيعي',
          conceptTestedEn: 'Order of Operations within Radicals',
          explanationAr: 'نجري عملية الطرح تحت الجذر أولاً: 25 - 9 = 16، ثم نأخذ الجذر: √16 = 4 (وليس 5 - 3 = 2).',
          explanationEn: 'Calculate subtraction first: 25 - 9 = 16 => √16 = 4.',
          difficulty: 'medium'
        },
        {
          id: 'qm1-5',
          textAr: 'المعكوس الضربي للعدد (-2/3)⁰ هو:',
          textEn: 'The multiplicative inverse (reciprocal) of (-2/3)⁰ is:',
          optionsAr: ['1', '-1', '-3/2', '0'],
          optionsEn: ['1', '-1', '-3/2', '0'],
          correctIndex: 0,
          conceptTestedAr: 'الأس الصفري والمعكوس الضربي',
          conceptTestedEn: 'Zero Power & Reciprocals',
          explanationAr: 'أي عدد غير الصفر أسه صفر يساوي 1 [ (-2/3)⁰ = 1 ]، والمعكوس الضربي للعدد 1 هو 1.',
          explanationEn: '(-2/3)⁰ = 1, and the reciprocal of 1 is 1.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── LECTURE 2: ALGEBRAIC EXPRESSIONS & FACTORING ──
  {
    id: 'm-math-2',
    order: 2,
    titleAr: 'المحاضرة 2: المقادير الجبرية والعمليات عليها والتحليل بإخراج العامل المشترك',
    titleEn: 'Lecture 2: Algebraic Expressions, Polynomial Operations & Factoring by GCF',
    subtitleAr: 'الحدود والمقادير الجبرية ودرجتها، جمع وطرح وضرب وقسمة المقادير، والتحليل بإخراج العامل المشترك الأكبر (GCF)',
    subtitleEn: 'Master terms, degrees, polynomial addition, subtraction, multiplication, special products, and GCF factoring.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-math-1',
    prerequisiteTitleAr: 'المحاضرة 1: مجموعة الأعداد النسبية والقوى والجذور',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: الجبر والمقادير الجبرية (Algebraic Expressions)',
    unitTitleEn: 'Unit 2: Algebra & Algebraic Expressions',
    lessonNumberAr: 'الدرس 2: العمليات على المقادير الجبرية والتحليل',
    lessonNumberEn: 'Lesson 2: Algebraic Operations & Factorization',

    warmupHookAr: 'عندما يقوم المبرمجون ببناء متجر إلكتروني لحساب التكلفة الإجمالية للطلبات مع الخصومات والضرائب، فإنهم يستخدمون "المقادير الجبرية" مثل: التكلفة = 2x + 3y - 15. كيف نجمع ونبسط هذه المقادير ونحللها لتوفير أسرع وقت معالجة للحاسوب؟ الجبر هو لغة النمذجة لكل البرمجيات الحديثة!',
    warmupHookEn: 'E-commerce engines compute order totals, discounts, and taxes using algebraic expressions like 2x + 3y - 15. Mastering algebraic operations and GCF factoring is the foundational core of algorithmic problem-solving!',

    learningOutcomesAr: [
      'أن يحدد الطالب درجة الحد الجبري ودرجة المقدار الجبري ومعاملاته',
      'أن يجمع ويطرح المقادير الجبرية بتجميع الحدود المتشابهة',
      'أن يضرب حدين جبريين ومقدارين جبريين ويفك الأقواس وحالات الضرب بمجرد النظر',
      'أن يحلل المقدار الجبري بإخراج العامل المشترك الأكبر (HCF / GCF)'
    ],
    learningOutcomesEn: [
      'Identify degrees and coefficients of algebraic terms and polynomials',
      'Combine like terms to add and subtract algebraic expressions',
      'Multiply polynomials and expand special products: (a + b)(a - b) and (a ± b)²',
      'Factor algebraic expressions by extracting the Greatest Common Factor (GCF)'
    ],

    vocabulary: [
      {
        termAr: 'الحد الجبري (Algebraic Term)',
        termEn: 'Algebraic Term',
        definitionAr: 'ما تكون من حاصل ضرب عامل أو أكثر (مثل 5x²y)، ودرجته هي مجموع أسس عوامله الرمزية (2 + 1 = الدرجة الثالثة).',
        definitionEn: 'A product of constants and variables; its degree is the sum of variable exponents.'
      },
      {
        termAr: 'المقدار الجبري (Algebraic Expression / Polynomial)',
        termEn: 'Polynomial Expression',
        definitionAr: 'ما تكون من حد جبري واحد أو أكثر تفصل بينها إشارات الجمع أو الطرح، ودرجته هي أعلى درجة لحدوده.',
        definitionEn: 'Sum or difference of algebraic terms; its degree is that of its highest-degree term.'
      },
      {
        termAr: 'العامل المشترك الأكبر (Greatest Common Factor - GCF)',
        termEn: 'Greatest Common Factor (GCF)',
        definitionAr: 'أكبر حد جبري يقسم جميع حدود المقدار دون باقٍ، ويشمل أكبر عامل عددي وأصغر أس للمتغيرات المشتركة.',
        definitionEn: 'The highest term dividing every term in the expression without remainder.'
      }
    ],

    keyConceptsAr: [
      'جمع وطرح الحدود المتشابهة: 3x² + 5x² = 8x² (لا تجمع الحدود غير المتشابهة)',
      'ضرب الحدود: نضرب المعاملات ونجمع الأسس: (3x²) × (4x³) = 12x⁵',
      'حالات خاصة: (a + b)² = a² + 2ab + b² | (a + b)(a - b) = a² - b²',
      'التحليل بالعامل المشترك: 6x³ + 9x² = 3x²(2x + 3)'
    ],
    keyConceptsEn: [
      'Combine like terms: 3x² + 5x² = 8x²',
      'Multiply terms: multiply coefficients and add powers: (3x²)(4x³) = 12x⁵',
      'Special products: (a ± b)² = a² ± 2ab + b² and (a+b)(a-b) = a² - b²',
      'Factoring by GCF: 6x³ + 9x² = 3x²(2x + 3)'
    ],
    summaryAr: 'دراسة شاملة لأسس الجبر: تصنيف الحدود ودرجاتها، جمع وطرح المقادير بدمج الحدود المتشابهة، الضرب بمجرد النظر، والتحليل الذكي بإخراج العامل المشترك الأكبر.',
    summaryEn: 'Master polynomial foundations: Degrees, like-term addition, FOIL/special products multiplication, and GCF factorization.',

    sections: [
      {
        titleAr: '1. الحدود والمقادير الجبرية ودرجتها والحدود المتشابهة',
        titleEn: '1. Algebraic Terms, Polynomial Degrees & Like Terms',
        contentAr: 'الحد الجبري يتكون من معامل عددي وعوامل جبرية (رموز). درجة الحد هي مجموع أسس رموزه؛ فمثلاً الحد 4x²y³ من الدرجة (2 + 3 = 5) الخامسة ومعامله 4. المقدار الجبري يتكون من عدة حدود ودرجته هي أعلى درجة لأي حد فيه. تكون الحدود "متشابهة" إذا كانت لها نفس الرموز وبنفس الأسس (مثل 3a²b و -7a²b)، وتلك هي الحدود الوحيدة التي يمكن جمعها أو طرحها.',
        contentEn: 'An algebraic term consists of numerical coefficients and variable factors. Its degree is the sum of variable powers. Like terms share identical variables and powers and can be combined via addition or subtraction.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: تحديد درجة المقدار الجبري وجمع الحدود المتشابهة',
          titleEn: 'Worked Example 1: Determining Polynomial Degree & Combining Like Terms',
          equation: 'بسط المقدار: (5x² - 3xy + 4) + (2x² + 7xy - 9)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نجمع حدود x² المتشابهة: 5x² + 2x² = (5 + 2)x² = 7x².',
              textEn: 'Step 1: Combine x² terms: 5x² + 2x² = 7x².',
              noteAr: 'جمع معاملات x²'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نجمع حدود xy المتشابهة: -3xy + 7xy = (-3 + 7)xy = +4xy.',
              textEn: 'Step 2: Combine xy terms: -3xy + 7xy = +4xy.',
              noteAr: 'جمع معاملات xy'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نجمع الحدود المطلقة الثابتة: +4 + (-9) = -5. الناتج = 7x² + 4xy - 5 (مقدار من الدرجة الثانية).',
              textEn: 'Step 3: Combine constants: 4 - 9 = -5 => Result = 7x² + 4xy - 5 (Degree 2).',
              noteAr: 'المقدار النهائي من الدرجة الثانية'
            }
          ],
          takeawayAr: 'عند جمع المقادير الجبرية نجمع المعاملات العددية للحدود المتشابهة فقط وتبقى الرموز وأسسها كما هي دون تغيير.',
          takeawayEn: 'Only coefficients of like terms are added/subtracted; variable exponents remain unchanged.'
        },
        formativeCheck: {
          id: 'fc-mmath2-1',
          questionAr: 'درجة المقدار الجبري: 3x²y³ - 5x⁴ + 7 هي:',
          questionEn: 'The degree of the polynomial 3x²y³ - 5x⁴ + 7 is:',
          optionsAr: ['الدرجة الخامسة', 'الدرجة الرابعة', 'الدرجة السادسة', 'الدرجة الثالثة'],
          optionsEn: ['Fifth Degree (5)', 'Fourth Degree (4)', 'Sixth Degree (6)', 'Third Degree (3)'],
          correctIndex: 0,
          explanationAr: 'درجة الحد الأول 3x²y³ هي 2 + 3 = 5، ودرجة الحد الثاني 4، إذن درجة المقدار ككل هي أعلى درجة وتساوي 5.',
          explanationEn: 'The term 3x²y³ has degree 2 + 3 = 5, which is the highest in the expression.',
          hintAr: 'احسب درجة كل حد على حدة واختر القيمة الأكبر.'
        },
        tipsAr: [
          'الحد الثابت (العدد الخالي من الرموز مثل 7) يعتبر من الدرجة الصفرية (7x⁰).',
          'لا يجوز جمع 2x + 3y لأنهما حدان غير متشابهين.'
        ],
        tipsEn: [
          'A constant non-zero term has degree 0.',
          'Never add unlike terms such as 2x and 3y.'
        ]
      },
      {
        titleAr: '2. ضرب وقسمة المقادير الجبرية والضرب بمجرد النظر',
        titleEn: '2. Polynomial Multiplication, Division & Special Products',
        contentAr: 'عند ضرب حد في مقدار، نستخدم خاصية التوزيع: a(b + c) = ab + ac. وعند ضرب مقدارين ثنائيين (a + b)(c + d) نوزع كل حد. وتوجد حالات خاصة شهيرة للضرب بمجرد النظر: 1) مربع مجموع حدين: (a + b)² = a² + 2ab + b² (مربع الأول + 2 × الأول × الثاني + مربع الثاني). 2) مربع الفرق: (a - b)² = a² - 2ab + b². 3) حاصل ضرب مجموع حدين في الفرق بينهما (مجموع في فرق): (a + b)(a - b) = a² - b².',
        contentEn: 'Multiplying polynomials relies on the distributive property. Key special products include squaring a binomial (a ± b)² = a² ± 2ab + b² and difference of squares (a + b)(a - b) = a² - b².',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: فك وتبسيط مفكوك الأقواس الخاصة',
          titleEn: 'Worked Example 2: Expanding Special Binomial Products',
          equation: '(2x + 3)² - (2x + 3)(2x - 3)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: فك مربع القوس الأول (2x + 3)² = (2x)² + 2(2x)(3) + 3² = 4x² + 12x + 9.',
              textEn: 'Step 1: Expand (2x + 3)² = 4x² + 12x + 9.',
              noteAr: 'مربع حدانية'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: فك القوسين (2x + 3)(2x - 3) = (2x)² - 3² = 4x² - 9.',
              textEn: 'Step 2: Expand difference of squares: (2x+3)(2x-3) = 4x² - 9.',
              noteAr: 'مجموع في فرق حدين'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: طرح المقدارين: (4x² + 12x + 9) - (4x² - 9) = 4x² + 12x + 9 - 4x² + 9 = 12x + 18.',
              textEn: 'Step 3: Subtract: (4x² + 12x + 9) - (4x² - 9) = 12x + 18.',
              noteAr: 'الناتج في أبسط صورة = 12x + 18'
            }
          ],
          takeawayAr: 'حاصل ضرب (مجموع حدين × الفرق بينهما) يعطي دائماً مربع الأول ناقص مربع الثاني مباشرة وبدون حد أوسط.',
          takeawayEn: '(a + b)(a - b) simplifies instantly to a² - b² without middle terms.'
        },
        formativeCheck: {
          id: 'fc-mmath2-2',
          questionAr: 'مفكوك المقدار (3x - 5)(3x + 5) يساوي:',
          questionEn: 'The expansion of (3x - 5)(3x + 5) is:',
          optionsAr: ['9x² - 25', '9x² + 25', '9x² - 30x + 25', '6x² - 25'],
          optionsEn: ['9x² - 25', '9x² + 25', '9x² - 30x + 25', '6x² - 25'],
          correctIndex: 0,
          explanationAr: '(3x - 5)(3x + 5) = (3x)² - 5² = 9x² - 25.',
          explanationEn: '(3x - 5)(3x + 5) = (3x)² - 5² = 9x² - 25.',
          hintAr: 'طبق قاعدة: مربع الأول - مربع الثاني.'
        },
        tipsAr: [
          'انتبه دائماً للإشارة السالبة أمام القوس: -(a - b) = -a + b (تعكس جميع الإشارات داخل القوس).',
          'عند قسمة حد على حد: نقسم المعاملات ونطرح الأسس: 15x⁶ ÷ 3x² = 5x⁴.'
        ],
        tipsEn: [
          'A leading negative sign negates every term inside parentheses.',
          'When dividing terms, divide numerical coefficients and subtract exponents.'
        ]
      },
      {
        titleAr: '3. التحليل بإخراج العامل المشترك الأكبر (HCF / GCF)',
        titleEn: '3. Factoring Polynomials by Greatest Common Factor (GCF)',
        contentAr: 'التحليل هو تحويل المقدار الجبري إلى حاصل ضرب عاملين أو أكثر. أول خطوة أساسية في أي تحليل هي إخراج العامل المشترك الأكبر (ع.م.أ): 1) نحدد أكبر عدد يقسم جميع المعاملات. 2) نأخذ المتغيرات المشتركة بأصغر أس. 3) نقسم كل حد من حدود المقدار على العامل المشترك ونكتب الناتج داخل القوس.',
        contentEn: 'Factoring decomposes expressions into products of simpler factors. Extracting the Greatest Common Factor (GCF) involves finding the highest coefficient divisor and common variables with smallest powers.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: تحليل مقدار جبري ثلاثي بإخراج العامل المشترك الأكبر',
          titleEn: 'Worked Example 3: Factoring Expressions via GCF Extraction',
          equation: 'حلل بإخراج ع.م.أ: 12x³y² - 18x²y³ + 6x²y²',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نجد ع.م.أ للأعداد (12، 18، 6) وهو العدد 6.',
              textEn: 'Step 1: GCF of coefficients (12, 18, 6) = 6.',
              noteAr: 'العامل العددي = 6'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نأخذ الرموز المشتركة بأصغر أس: للرمز x أصغر أس هو x²، وللرمز y أصغر أس هو y². إذن ع.م.أ = 6x²y².',
              textEn: 'Step 2: Common variables with lowest powers: x² and y² => GCF = 6x²y².',
              noteAr: 'العامل الرمزي = x²y²'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نقسم كل حد على 6x²y²: (12x³y² ÷ 6x²y² = 2x) ، (-18x²y³ ÷ 6x²y² = -3y) ، (+6x²y² ÷ 6x²y² = +1). الناتج = 6x²y² (2x - 3y + 1).',
              textEn: 'Step 3: Divide terms: 6x²y²(2x - 3y + 1).',
              noteAr: 'التحليل الكامل: 6x²y²(2x - 3y + 1)'
            }
          ],
          takeawayAr: 'لا تنسَ وضع (+1) عند قسمة الحد على نفسه ولا تتركه فارغاً حتى لا يضيع الحد عند إعادة الفك.',
          takeawayEn: 'Always preserve the +1 remainder when a term is divided by an identical GCF factor.'
        },
        formativeCheck: {
          id: 'fc-mmath2-3',
          questionAr: 'التحليل الكامل للمقدار 15a²b + 10ab² هو:',
          questionEn: 'Complete GCF factorization of 15a²b + 10ab² is:',
          optionsAr: ['5ab(3a + 2b)', '5a²b²(3a + 2b)', 'ab(15a + 10b)', '5(3a²b + 2ab²)'],
          optionsEn: ['5ab(3a + 2b)', '5a²b²(3a + 2b)', 'ab(15a + 10b)', '5(3a²b + 2ab²)'],
          correctIndex: 0,
          explanationAr: 'ع.م.أ العددي هو 5، والرمزي هو ab. بالقسمة نحصل على: 5ab(3a + 2b).',
          explanationEn: 'GCF is 5ab, giving 5ab(3a + 2b).',
          hintAr: 'أوجد العامل المشترك للأعداد (15 و 10) والرموز بأصغر أس.'
        },
        tipsAr: [
          'للتحقق من صحة التحليل، قم بإعادة ضرب العامل المشترك في القوس لتتأكد من رجوع المقدار الأصلي.',
          'التحليل بالتقسيم يستخدم للمقادير المكونة من 4 حدود بتجميع كل حدين معاً.'
        ],
        tipsEn: [
          'Verify factorization by expanding the product back to the original expression.',
          'Grouping method is used for 4-term polynomials by pairing like terms.'
        ]
      },
      {
        titleAr: '4. قسمة مقدار جبري على حد جبري وعلى مقدار جبري',
        titleEn: '4. Polynomial Division by Monomial and Binomial',
        contentAr: '1) لقسمة مقدار جبري على حد جبري: نقسم كل حد من حدود المقدار على هذا الحد بمفرده: (a + b + c) ÷ d = a/d + b/d + c/d. 2) لقسمة مقدار جبري على مقدار جبري آخر (القسمة المطولة): نرتب المقدارين تنازلياً حسب أسس أحد الرموز، ثم نتبع خطوات: اقسم ← اضرب ← اطرح (غيّر الإشارات) ← أنزل الحد التالي، ونكرر حتى يصبح الباقي صفراً.',
        contentEn: 'Dividing a polynomial by a monomial distributes the divisor across each term. Dividing by a binomial uses long division: Arrange descending powers, Divide lead terms, Multiply back, Subtract (invert signs), and repeat.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: قسمة مقدار جبري على مقدار جبري (القسمة المطولة)',
          titleEn: 'Worked Example 4: Polynomial Long Division',
          equation: '(x² + 5x + 6) ÷ (x + 2)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نقسم الحد الأول على الأول: x² ÷ x = x (وهو الحد الأول في خارج القسمة).',
              textEn: 'Step 1: Divide leading terms: x² ÷ x = x.',
              noteAr: 'أول حد في خارج القسمة = x'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نضرب x في المقسوم عليه: x × (x + 2) = x² + 2x، ثم نطرح بتغيير الإشارات: (x² + 5x) - (x² + 2x) = 3x.',
              textEn: 'Step 2: Multiply & subtract: (x² + 5x) - (x² + 2x) = 3x.',
              noteAr: 'الباقي = 3x'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: ننزل (+6) ليصبح المقدار (3x + 6). نقسم: 3x ÷ x = +3. نضرب ونطرح: (3x + 6) - (3x + 6) = 0. خارج القسمة = (x + 3).',
              textEn: 'Step 3: Bring down 6: 3x ÷ x = 3. Multiply and subtract: 3x + 6 - (3x + 6) = 0 => Quotient = x + 3.',
              noteAr: 'خارج القسمة = x + 3'
            }
          ],
          takeawayAr: 'المقسوم = (المقسوم عليه × خارج القسمة) + الباقي. وعندما يكون الباقي صفراً تكون القسمة منتهية.',
          takeawayEn: 'Dividend = (Divisor × Quotient) + Remainder.'
        },
        formativeCheck: {
          id: 'fc-mmath2-4',
          questionAr: 'ناتج قسمة (12x³ - 8x²) ÷ 4x² يساوي:',
          questionEn: 'The quotient of (12x³ - 8x²) ÷ 4x² is:',
          optionsAr: ['3x - 2', '3x² - 2x', '3x + 2', '8x - 4'],
          optionsEn: ['3x - 2', '3x² - 2x', '3x + 2', '8x - 4'],
          correctIndex: 0,
          explanationAr: '(12x³ ÷ 4x²) - (8x² ÷ 4x²) = 3x - 2.',
          explanationEn: 'Divide each term: 12x³/4x² - 8x²/4x² = 3x - 2.',
          hintAr: 'اقسم كل حد على 4x² على حدة.'
        },
        tipsAr: [
          'إذا كان هناك حد مفقود في المقسوم أثناء القسمة المطولة (مثل عدم وجود x²)، اترك مكانه فارغاً.',
          'التحقق: (x + 2)(x + 3) = x² + 3x + 2x + 6 = x² + 5x + 6.'
        ],
        tipsEn: [
          'Leave placeholders for missing power terms during polynomial long division.',
          'Verify division results by multiplying the quotient with the divisor.'
        ]
      }
    ],

    conceptMapAr: [
      'الحد الجبري: معامله ودرجته بمجموع أسس متغيراته',
      'جمع وطرح المقادير: بدمج الحدود المتشابهة فقط',
      'حالات الضرب الخاصة: (a ± b)² = a² ± 2ab + b² | (a + b)(a - b) = a² - b²',
      'التحليل بع.م.أ: إخراج أكبر قاسم عددي وأصغر أس للمتغيرات المشتركة',
      'القسمة المطولة: اقسم ← اضرب ← اعكس الإشارات واطرح ← كرر'
    ],
    conceptMapEn: [
      'Terms & degrees: Sum of variable exponents',
      'Operations: Combine like terms',
      'Special products: Perfect square binomials & difference of squares',
      'GCF Factoring: Numerical GCF and lowest power variables',
      'Long Division: Divide, Multiply, Invert signs, Subtract'
    ],

    textbookExercises: [
      {
        id: 'ex-mmath2-1',
        questionAr: 'اجمع المقدارين الجبريين: (3x² - 5x + 2) و (x² + 5x - 7)، ثم احسب القيمة العددية للناتج عندما x = -1.',
        questionEn: 'Add polynomials (3x² - 5x + 2) and (x² + 5x - 7), then evaluate when x = -1.',
        solutionStepsAr: [
          'الخطوة 1: الجمع: (3x² + x²) + (-5x + 5x) + (2 - 7) = 4x² + 0x - 5 = 4x² - 5.',
          'الخطوة 2: التعويض عن x = -1: 4(-1)² - 5 = 4(1) - 5 = 4 - 5 = -1.'
        ],
        solutionStepsEn: [
          'Step 1: Sum = 4x² - 5.',
          'Step 2: Substitute x = -1: 4(-1)² - 5 = 4 - 5 = -1.'
        ],
        answerAr: 'المقدار = 4x² - 5 • القيمة العددية عند x = -1 هي -1.',
        answerEn: 'Expression = 4x² - 5 • Evaluated value at x = -1 is -1.'
      },
      {
        id: 'ex-mmath2-2',
        questionAr: 'باستخدام الضرب بمجرد النظر، احسب: 1) (2a - 5b)²  2) (3x + 4y)(3x - 4y)  3) 101 × 99',
        questionEn: 'Expand via special products: 1) (2a - 5b)²  2) (3x + 4y)(3x - 4y)  3) 101 × 99',
        solutionStepsAr: [
          '1) (2a - 5b)² = (2a)² - 2(2a)(5b) + (5b)² = 4a² - 20ab + 25b².',
          '2) (3x + 4y)(3x - 4y) = (3x)² - (4y)² = 9x² - 16y².',
          '3) 101 × 99 = (100 + 1)(100 - 1) = 100² - 1² = 10000 - 1 = 9999.'
        ],
        solutionStepsEn: [
          '1) 4a² - 20ab + 25b².',
          '2) 9x² - 16y².',
          '3) (100+1)(100-1) = 10000 - 1 = 9999.'
        ],
        answerAr: '1) 4a² - 20ab + 25b² • 2) 9x² - 16y² • 3) 9999.',
        answerEn: '1) 4a² - 20ab + 25b² • 2) 9x² - 16y² • 3) 9999.'
      },
      {
        id: 'ex-mmath2-3',
        questionAr: 'حلل كلاً مما يأتي بإخراج العامل المشترك الأكبر (ع.م.أ): 1) 14x³ - 21x²  2) 3a(x + y) - b(x + y)',
        questionEn: 'Factor by GCF: 1) 14x³ - 21x²  2) 3a(x + y) - b(x + y)',
        solutionStepsAr: [
          '1) ع.م.أ هو 7x²: 14x³ - 21x² = 7x²(2x - 3).',
          '2) القوس (x + y) هو العامل المشترك: 3a(x + y) - b(x + y) = (x + y)(3a - b).'
        ],
        solutionStepsEn: [
          '1) GCF is 7x² => 7x²(2x - 3).',
          '2) GCF is binomial (x + y) => (x + y)(3a - b).'
        ],
        answerAr: '1) 7x²(2x - 3) • 2) (x + y)(3a - b).',
        answerEn: '1) 7x²(2x - 3) • 2) (x + y)(3a - b).'
      },
      {
        id: 'ex-mmath2-4',
        questionAr: 'مستطيل مساحته (2x² + 7x + 3) سم² وعرضه (x + 3) سم. أوجد طول المستطيل بدلالة x، ثم احسب محيطه إذا كانت x = 4.',
        questionEn: 'A rectangle has area (2x² + 7x + 3) cm² and width (x + 3) cm. Find length in terms of x and perimeter when x = 4.',
        solutionStepsAr: [
          'الخطوة 1: الطول = المساحة ÷ العرض = (2x² + 7x + 3) ÷ (x + 3) = (2x + 1) سم.',
          'الخطوة 2: عندما x = 4: الطول = 2(4) + 1 = 9 سم، والعرض = 4 + 3 = 7 سم.',
          'الخطوة 3: محيط المستطيل = 2 × (الطول + العرض) = 2 × (9 + 7) = 2 × 16 = 32 سم.'
        ],
        solutionStepsEn: [
          'Step 1: Length = (2x² + 7x + 3) ÷ (x + 3) = 2x + 1 cm.',
          'Step 2: At x = 4: Length = 9 cm, Width = 7 cm.',
          'Step 3: Perimeter = 2 × (9 + 7) = 32 cm.'
        ],
        answerAr: 'الطول = (2x + 1) سم • المحيط عند x = 4 يساوي 32 سم.',
        answerEn: 'Length = (2x + 1) cm • Perimeter = 32 cm.'
      }
    ],

    assessment: {
      id: 'quiz-m-math-2',
      lectureId: 'm-math-2',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 2: المقادير الجبرية والضرب بمجرد النظر والتحليل',
      titleEn: 'Mastery Assessment 2: Polynomial Operations, Special Products & Factoring',
      passingScore: 80,
      questions: [
        {
          id: 'qm2-1',
          textAr: 'درجة الحد الجبري 5x³y² هي:',
          textEn: 'The degree of the algebraic term 5x³y² is:',
          optionsAr: ['الخامسة', 'الثالثة', 'الثانية', 'السادسة'],
          optionsEn: ['Fifth', 'Third', 'Second', 'Sixth'],
          correctIndex: 0,
          conceptTestedAr: 'درجة الحد الجبري',
          conceptTestedEn: 'Degree of Monomial',
          explanationAr: 'درجة الحد الجبري هي مجموع أسس رموزه: 3 + 2 = 5.',
          explanationEn: 'Degree = 3 + 2 = 5.',
          difficulty: 'easy'
        },
        {
          id: 'qm2-2',
          textAr: 'الحد الأوسط في مفكوك (2x - 3y)² هو:',
          textEn: 'The middle term in expanding (2x - 3y)² is:',
          optionsAr: ['-12xy', '+12xy', '-6xy', '+6xy'],
          optionsEn: ['-12xy', '+12xy', '-6xy', '+6xy'],
          correctIndex: 0,
          conceptTestedAr: 'الحد الأوسط في مربع مقدار ثنائي',
          conceptTestedEn: 'Middle term in binomial square',
          explanationAr: 'الحد الأوسط = 2 × الأول × الثاني = 2 × (2x) × (-3y) = -12xy.',
          explanationEn: 'Middle term = 2(2x)(-3y) = -12xy.',
          difficulty: 'medium'
        },
        {
          id: 'qm2-3',
          textAr: 'إذا كان (x - 3)(x + 3) = x² + k، فإن قيمة k تساوي:',
          textEn: 'If (x - 3)(x + 3) = x² + k, then the value of k is:',
          optionsAr: ['-9', '+9', '-6', '+6'],
          optionsEn: ['-9', '+9', '-6', '+6'],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين مربعين',
          conceptTestedEn: 'Difference of Squares',
          explanationAr: '(x - 3)(x + 3) = x² - 9 => إذن k = -9.',
          explanationEn: '(x - 3)(x + 3) = x² - 9 => k = -9.',
          difficulty: 'medium'
        },
        {
          id: 'qm2-4',
          textAr: 'العامل المشترك الأكبر (ع.م.أ) للمقدار 18x⁴y² - 12x²y³ هو:',
          textEn: 'The GCF of 18x⁴y² - 12x²y³ is:',
          optionsAr: ['6x²y²', '6x⁴y³', '3x²y', '12x²y²'],
          optionsEn: ['6x²y²', '6x⁴y³', '3x²y', '12x²y²'],
          correctIndex: 0,
          conceptTestedAr: 'إيجاد العامل المشترك الأكبر',
          conceptTestedEn: 'Greatest Common Factor',
          explanationAr: 'ع.م.أ للأعداد (18، 12) هو 6، وأصغر أس لـ x هو x²، ولـ y هو y² => 6x²y².',
          explanationEn: 'GCF of (18, 12) is 6, with lowest powers x² and y² => 6x²y².',
          difficulty: 'medium'
        },
        {
          id: 'qm2-5',
          textAr: 'إذا كان a + b = 5 ، و a - b = 3 ، فإن قيمة a² - b² تساوي:',
          textEn: 'If a + b = 5 and a - b = 3, then a² - b² equals:',
          optionsAr: ['15', '8', '2', '25'],
          optionsEn: ['15', '8', '2', '25'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق تحليل الفرق بين مربعين',
          conceptTestedEn: 'Applications of Difference of Squares',
          explanationAr: 'a² - b² = (a + b)(a - b) = 5 × 3 = 15.',
          explanationEn: 'a² - b² = (a + b)(a - b) = 5 × 3 = 15.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── LECTURE 3: LINEAR EQUATIONS & INEQUALITIES IN Q ──
  {
    id: 'm-math-3',
    order: 3,
    titleAr: 'المحاضرة 3: المعادلات والمتباينات الخطية في Q وتطبيقات حل المسائل',
    titleEn: 'Lecture 3: Linear Equations & Inequalities in Q with Word Problem Modeling',
    subtitleAr: 'حل معادلات ومتباينات الدرجة الأولى في متغير واحد في مجموعة الأعداد النسبية، والتمثيل على خط الأعداد والمسائل اللفظية',
    subtitleEn: 'Master solving first-degree linear equations and inequalities in Q, number line graphing, and real-world word problem modeling.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-math-2',
    prerequisiteTitleAr: 'المحاضرة 2: المقادير الجبرية والعمليات عليها والتحليل',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: المعادلات والمتباينات (Equations & Inequalities)',
    unitTitleEn: 'Unit 2: Linear Equations & Inequalities',
    lessonNumberAr: 'الدرس 3: حل المعادلات والمتباينات في Q وتطبيقاتها',
    lessonNumberEn: 'Lesson 3: Solving Equations & Inequalities in Q',

    warmupHookAr: 'إذا كان عمر الأب الآن 3 أضعاف عمر ابنه، وبعد 10 سنوات سيصبح مجموع عمريهما 68 سنة، فكم عمر كل منهما الآن؟ المعادلات الخطية ليست مجرد أرقام، بل هي المفتاح السحري لحل ألغاز الحياة اليومية، وحساب الأرباح التجارية، وبرمجة شروط الذكاء الاصطناعي لاتخاذ القرارات المنطقية!',
    warmupHookEn: 'Word puzzles and real-world logistics find exact solutions through the power of linear equations: ax + b = c. Linear equations and inequalities form the logical core of mathematical optimization and AI decision trees!',

    learningOutcomesAr: [
      'أن يحل الطالب معادلة الدرجة الأولى في متغير واحد في مجموعة الأعداد النسبية Q',
      'أن يحل المتباينة الخطية في Q ويمثل مجموعة الحل على خط الأعداد بدقة',
      'أن يتقن قاعدة تغيير اتجاه علامة التباين عند الضرب أو القسمة على عدد سالب',
      'أن يترجم المسائل اللفظية والحياتية إلى معادلات جبرية ويحلها'
    ],
    learningOutcomesEn: [
      'Solve linear equations in one variable over Q using balance properties',
      'Solve linear inequalities in Q and graph solution sets on the number line',
      'Apply the inequality reversal rule when multiplying or dividing by negative values',
      'Model and solve real-world word problems using linear equations'
    ],

    vocabulary: [
      {
        termAr: 'المعادلة (Equation)',
        termEn: 'Equation',
        definitionAr: 'جملة رياضية تتضمن علامة التساوي (=) بين طرفين وتتحقق لقيم معينة للمجهول.',
        definitionEn: 'A mathematical statement asserting equality (=) between two algebraic expressions.'
      },
      {
        termAr: 'المتباينة (Inequality)',
        termEn: 'Inequality',
        definitionAr: 'جملة رياضية تتضمن إحدى علامات التباين (> ، < ، ≥ ، ≤) للمقارنة بين طرفين.',
        definitionEn: 'A mathematical statement containing inequality symbols (<, >, ≤, ≥).'
      },
      {
        termAr: 'مجموعة الحل (Solution Set - S.S)',
        termEn: 'Solution Set (S.S)',
        definitionAr: 'مجموعة جميع القيم التي تجعل المعادلة أو المتباينة عبارة صحيحة.',
        definitionEn: 'The set of values that satisfy the equation or inequality.'
      }
    ],

    keyConceptsAr: [
      'حل المعادلات: نقل الحدود بعكس الإشارة أو إضافة المعكوس الجمعي للطرفين',
      'التخلص من المعامل: بقسمة الطرفين على معامل المجهول',
      'قاعدة المتباينات الذهبية: عند الضرب أو القسمة في عدد سالب نعكس علامة التباين (< تصبح >)',
      'مجموعة حل المتباينة في Q تكتب بالصفة المميزة: { x : x ∈ Q ، x > ... }'
    ],
    keyConceptsEn: [
      'Equation solving: Additive inverse and isolation of variable',
      'Coefficient elimination: Division by leading coefficient',
      'Inequality golden rule: Reverse inequality sign when multiplying/dividing by negative',
      'Set builder notation for Q inequalities: { x ∈ Q | x > a }'
    ],
    summaryAr: 'إتقان حل المعادلات والمتباينات الخطية في Q خطوة بخطوة مع تمثيل الحلول وتطبيقها على حل المسائل اللفظية والحياتية.',
    summaryEn: 'Master linear equations and inequalities in Q, sign reversals, number line representations, and word problem modeling.',

    sections: [
      {
        titleAr: '1. حل معادلات الدرجة الأولى في متغير واحد في Q',
        titleEn: '1. Solving Linear Equations in One Variable over Q',
        contentAr: 'المعادلة الخطية من الدرجة الأولى هي معادلة على الصورة ax + b = c حيث a ≠ 0. لحلها نستخدم خواص التساوي: 1) نضيف المعكوس الجمعي للعدد b إلى الطرفين لنحصل على ax = c - b. 2) نقسم الطرفين على معامل x (العدد a) للحصول على x = (c - b) / a. إذا كان الناتج ينتمي إلى مجموعة التعويض المعطاة (مثل Q) فإن م.ح = { الناتج }، وإذا لم ينتمِ فإن م.ح = ∅.',
        contentEn: 'Linear equations ax + b = c are solved by isolating variables through inverse operations: subtracting constants and dividing by coefficients. The solution set depends on the domain (N, Z, or Q).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حل معادلة تحتوي على كسور وأقواس في مجموعة الأعداد النسبية Q',
          titleEn: 'Worked Example 1: Solving Multi-Step Linear Equations with Fractions',
          equation: '3(2x - 1) + 4 = 5x + 7',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: فك القوس بالتوزيع: 6x - 3 + 4 = 5x + 7 => 6x + 1 = 5x + 7.',
              textEn: 'Step 1: Expand brackets: 6x - 3 + 4 = 5x + 7 => 6x + 1 = 5x + 7.',
              noteAr: 'تبسيط الطرف الأيمن والأيسر'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: تجميع حدود x في الطرف الأيمن والأعداد في الأيسر: 6x - 5x = 7 - 1.',
              textEn: 'Step 2: Collect variable terms on one side: 6x - 5x = 7 - 1.',
              noteAr: 'نقل الحدود بعكس الإشارة'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: التبسيط: x = 6. وبما أن 6 ∈ Q ، إذن مجموعة الحل م.ح = { 6 }.',
              textEn: 'Step 3: Simplify: x = 6 ∈ Q => Solution Set S.S = { 6 }.',
              noteAr: 'مجموعة الحل = { 6 }'
            }
          ],
          takeawayAr: 'لحل أي معادلة: فك الأقواس أولاً، ثم اجمع المتغيرات في طرف والأعداد في الطرف الآخر وقسم على المعامل.',
          takeawayEn: 'Always expand parentheses, group variables on one side, and isolate the unknown.'
        },
        formativeCheck: {
          id: 'fc-mmath3-1',
          questionAr: 'مجموعة حل المعادلة: 5x + 8 = 3 في مجموعة الأعداد الطبيعية ℕ هي:',
          questionEn: 'The solution set of 5x + 8 = 3 in the set of Natural numbers ℕ is:',
          optionsAr: ['∅', '{-1}', '{1}', '{5/11}'],
          optionsEn: ['∅ (Empty Set)', '{-1}', '{1}', '{5/11}'],
          correctIndex: 0,
          explanationAr: '5x = 3 - 8 = -5 => x = -1. ولكن -1 لا ينتمي لمجموعة الأعداد الطبيعية ℕ (بل ينتمي لـ ℤ و Q)، إذن م.ح في ℕ هي ∅.',
          explanationEn: '5x = -5 => x = -1. Since -1 ∉ ℕ, the solution set in ℕ is empty ∅.',
          hintAr: 'انتبه لمجموعة التعويض المطلوبة (ℕ لا تحتوي على أعداد سالبة).'
        },
        tipsAr: [
          'دائماً تحقق من صحة حلك بالتعويض بالناتج في طرفي المعادلة الأصلية.',
          'إذا احتوت المعادلة على مقامات، اضرب طرفي المعادلة في المضاعف المشترك الأصغر للمقامات للتخلص من الكسور.'
        ],
        tipsEn: [
          'Verify solutions by substituting back into the original equation.',
          'Clear fractions by multiplying all terms by the LCD of denominators.'
        ]
      },
      {
        titleAr: '2. حل المتباينات الخطية في Q وقاعدة عكس علامة التباين',
        titleEn: '2. Solving Linear Inequalities in Q & Sign Inversion Rule',
        contentAr: 'المتباينة الخطية تشبه المعادلة في خطوات الحل مع فارق جوهري وحيد وحاسم: "عند ضرب أو قسمة طرفي المتباينة على عدد سالب، يجب عكس اتجاه علامة التباين فوراً" (علامة > تصبح < ، وعلامة ≤ تصبح ≥). مجموعة حل المتباينة في Q تمثل عدداً لا نهائياً من الحلول وتكتب على صورة: { x : x ∈ Q ، x > a }.',
        contentEn: 'Solving inequalities follows linear equation steps with one critical rule: Multiplying or dividing by a negative number reverses the inequality direction (< becomes >). Solutions in Q are represented in set-builder notation.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: حل متباينة تحتوي على قسمة على عدد سالب في Q',
          titleEn: 'Worked Example 2: Solving Inequalities with Negative Division in Q',
          equation: '5 - 3x ≤ 14  (في مجموعة الأعداد النسبية Q)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: ننقل (+5) إلى الطرف الآخر بعكس الإشارة: -3x ≤ 14 - 5 => -3x ≤ 9.',
              textEn: 'Step 1: Subtract 5: -3x ≤ 14 - 5 => -3x ≤ 9.',
              noteAr: '-3x ≤ 9'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2 (تطبيق القاعدة الذهبية): نقسم الطرفين على (-3) ونعكس علامة التباين من (≤) إلى (≥): x ≥ 9 ÷ (-3) => x ≥ -3.',
              textEn: 'Step 2: Divide by -3 and reverse inequality sign (≤ becomes ≥): x ≥ -3.',
              noteAr: 'عكس علامة التباين: x ≥ -3'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: كتابة مجموعة الحل في Q: م.ح = { x : x ∈ Q ، x ≥ -3 }.',
              textEn: 'Step 3: Solution set S.S = { x : x ∈ Q, x ≥ -3 }.',
              noteAr: 'م.ح = { x : x ∈ Q ، x ≥ -3 }'
            }
          ],
          takeawayAr: 'النسيان الشائع هو عدم عكس علامة التباين عند القسمة على سالب؛ تذكر دائماً: سالب يقلب الإشارة ويقلب اتجاه المتباينة!',
          takeawayEn: 'Never forget to flip the inequality sign whenever multiplying or dividing by negative numbers.'
        },
        formativeCheck: {
          id: 'fc-mmath3-2',
          questionAr: 'إذا كان -2x < 6 ، فإن:',
          questionEn: 'If -2x < 6, then:',
          optionsAr: ['x > -3', 'x < -3', 'x > 3', 'x < 3'],
          optionsEn: ['x > -3', 'x < -3', 'x > 3', 'x < 3'],
          correctIndex: 0,
          explanationAr: 'بقسمة الطرفين على -2 وعكس علامة التباين (< تصبح >): x > 6 ÷ (-2) => x > -3.',
          explanationEn: 'Dividing by -2 flips the sign: x > -3.',
          hintAr: 'اقسم على -2 واقلب علامة الأصغر (<) إلى أكبر (>).'
        },
        tipsAr: [
          'عند تمثيل x > 3 على خط الأعداد نضع دائرة مفتوحة عند 3 ونتجه يميناً.',
          'عند تمثيل x ≤ -1 نضع دائرة مغلقة (مظللة) عند -1 ونتجه يساراً.'
        ],
        tipsEn: [
          'Strict inequalities (<, >) use open circles on number lines.',
          'Inclusive inequalities (≤, ≥) use solid shaded circles.'
        ]
      },
      {
        titleAr: '3. التطبيقات والمسائل اللفظية على المعادلات',
        titleEn: '3. Word Problem Modeling & Real-World Linear Applications',
        contentAr: 'لحل المسائل اللفظية: 1) نقرأ المسألة بعناية ونفرض المجهول الأساسي برمز (مثل x). 2) نترجم العلاقات اللفظية إلى عبارات جبرية: (ضعف العدد = 2x ، ثلاثة أمثاله = 3x ، يزيد بمقدار 5 = x + 5 ، عددان متتاليان = x و x + 1 ، عددان زوجيان/فرديان متتاليان = x و x + 2). 3) نكون المعادلة ونحلها ونتحقق من مطابقة الناتج لمنطوق المسألة.',
        contentEn: 'Word problems convert text into algebraic equations. Define variables (x), translate relationships (consecutive integers = x, x+1; double = 2x), solve, and verify realistic conditions.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: حل مسألة لفظية عن أعداد صحيحة متتالية ومجموعها',
          titleEn: 'Worked Example 3: Consecutive Integers Word Problem Modeling',
          equation: 'ثلاثة أعداد صحيحة متتالية مجموعها 54. فما هي هذه الأعداد؟',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نفرض الأعداد الثلاثة المتتالية هي: x ، (x + 1) ، (x + 2).',
              textEn: 'Step 1: Let the three consecutive integers be x, x + 1, x + 2.',
              noteAr: 'فرض المجاهيل'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نكون المعادلة من مجموعها: x + (x + 1) + (x + 2) = 54 => 3x + 3 = 54.',
              textEn: 'Step 2: Form equation: x + (x + 1) + (x + 2) = 54 => 3x + 3 = 54.',
              noteAr: '3x + 3 = 54'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: حل المعادلة: 3x = 54 - 3 = 51 => x = 51 ÷ 3 = 17. الأعداد هي: 17 ، 18 ، 19.',
              textEn: 'Step 3: Solve: 3x = 51 => x = 17. The integers are 17, 18, 19.',
              noteAr: 'التحقق: 17 + 18 + 19 = 54 (صحيح)'
            }
          ],
          takeawayAr: 'صياغة الفرضيات بدقة وتجميع الحدود المتشابهة هو نصف حل أي مسألة لفظية.',
          takeawayEn: 'Accurate variable declaration and equation setup is the key to solving word problems.'
        },
        formativeCheck: {
          id: 'fc-mmath3-3',
          questionAr: 'مستطيل طوله يزيد عن عرضه بمقدار 3 سم، ومحيطه 26 سم. ما هو طول المستطيل؟',
          questionEn: 'A rectangle length exceeds width by 3 cm, and perimeter is 26 cm. What is the length?',
          optionsAr: ['8 سم', '5 سم', '10 سم', '13 سم'],
          optionsEn: ['8 cm', '5 cm', '10 cm', '13 cm'],
          correctIndex: 0,
          explanationAr: 'نفرض العرض = x، الطول = x + 3. المحيط = 2(الطول + العرض) => 2(2x + 3) = 26 => 2x + 3 = 13 => 2x = 10 => x = 5 (العرض). إذن الطول = 5 + 3 = 8 سم.',
          explanationEn: 'Width = x, Length = x + 3. 2(2x + 3) = 26 => 2x = 10 => x = 5 cm => Length = 8 cm.',
          hintAr: 'احسب نصف المحيط (الطول + العرض = 13) ثم حل المعادلة.'
        },
        tipsAr: [
          'في مسائل الأعمار: إذا كان عمر شخص الآن x، فعمره بعد 5 سنوات هو (x + 5)، وعمره منذ 3 سنوات هو (x - 3).',
          'تحقق دائماً أن الأطوال والأعمار أعداد موجبة منطقية.'
        ],
        tipsEn: [
          'Age problems: Age in 5 years is x + 5; age 3 years ago is x - 3.',
          'Physical quantities (length, age, count) must always yield positive results.'
        ]
      },
      {
        titleAr: '4. المعادلات ذات المتغيرين والتمثيل البياني',
        titleEn: '4. Two-Variable Linear Relations & Graphical Representation',
        contentAr: 'العلاقة الخطية بين متغيرين x و y تكون على الصورة: y = mx + c (أو ax + by = c). تمثل هذه العلاقة بيانياً بخط مستقيم. لإيجاد نقاط لرسم الخط المستقيم: نختار 3 قيم مختلفة لـ x (مثل 0، 1، 2) ونحسب قيم y المناظرة، ثم نمثل الأزواج المرتبة (x, y) في المستوى الإحداثي ونصل بينها بخط مستقيم.',
        contentEn: 'Two-variable linear equations y = mx + c graph as straight lines in the Cartesian plane. Choose test values for x, evaluate y, and connect points.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: تمثيل العلاقة الخطية y = 2x - 1 بيانياً وتحديد نقط التقاطع',
          titleEn: 'Worked Example 4: Graphing Linear Equations & Finding Axis Intercepts',
          equation: 'y = 2x - 1',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: تكوين جدول النقاط: عندما x = 0 => y = -1 (النقطة 0, -1). عندما x = 1 => y = 1 (النقطة 1, 1). عندما x = 2 => y = 3 (النقطة 2, 3).',
              textEn: 'Step 1: Point table: (0, -1), (1, 1), (2, 3).',
              noteAr: 'تحديد 3 نقاط على الأقل'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: تحديد نقطة التقاطع مع محور الصادات (عند x = 0) وهي (0, -1). ونقطة التقاطع مع محور السينات (عند y = 0) وهي (0.5, 0).',
              textEn: 'Step 2: y-intercept = (0, -1), x-intercept = (0.5, 0).',
              noteAr: 'نقط التقاطع مع المحاور'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: تعيين النقاط على الشبكة التربيعية والتوصيل بمسطرة: ينتج خط مستقيم يمثل جميع حلول العلاقة الخطية.',
              textEn: 'Step 3: Plot points on coordinate grid and draw straight line.',
              noteAr: 'خط مستقيم متصل'
            }
          ],
          takeawayAr: 'أي علاقة خطية من الدرجة الأولى بين متغيرين تمثل بيانياً بخط مستقيم، وتكفي نقطتان لرسمه ونقطة ثالثة للتأكيد.',
          takeawayEn: 'Two points determine a straight line; a third point confirms collinear accuracy.'
        },
        formativeCheck: {
          id: 'fc-mmath3-4',
          questionAr: 'المستقيم الممثل للعلاقة 2x + y = 6 يقطع محور الصادات في النقطة:',
          questionEn: 'The line representing 2x + y = 6 intersects the y-axis at:',
          optionsAr: ['(0, 6)', '(3, 0)', '(6, 0)', '(0, 3)'],
          optionsEn: ['(0, 6)', '(3, 0)', '(6, 0)', '(0, 3)'],
          correctIndex: 0,
          explanationAr: 'لإيجاد التقاطع مع محور الصادات نضع x = 0: 2(0) + y = 6 => y = 6. إذن النقطة هي (0, 6).',
          explanationEn: 'Set x = 0 to find y-intercept: y = 6 => (0, 6).',
          hintAr: 'التقاطع مع محور الصادات يعني أن الإحداثي السيني x = 0.'
        },
        tipsAr: [
          'المستقيم الموازي لمحور السينات معادلته y = ثابت (وميله = صفر).',
          'المستقيم الموازي لمحور الصادات معادلته x = ثابت (وميله غير معرّف).'
        ],
        tipsEn: [
          'Horizontal lines have equation y = constant (slope = 0).',
          'Vertical lines have equation x = constant (slope is undefined).'
        ]
      }
    ],

    conceptMapAr: [
      'حل المعادلات في Q: عزل المجهول x بإجراء العمليات العكسية',
      'حل المتباينات: عكس إشارة التباين عند الضرب أو القسمة في سالب',
      'كتابة م.ح المتباينة: { x : x ∈ Q ، x > ... }',
      'المسائل اللفظية: ترجمة الكلمات إلى علاقات جبرية وحلها والتحقق',
      'التمثيل البياني للعلاقة الخطية: خط مستقيم يمر بالأزواج المرتبة (x, y)'
    ],
    conceptMapEn: [
      'Solving in Q: Isolate x with inverse operations',
      'Inequalities: Invert sign on negative multiplication/division',
      'Set-builder notation for Q',
      'Word problem translation and verification',
      'Linear graphing as straight lines in Cartesian planes'
    ],

    textbookExercises: [
      {
        id: 'ex-mmath3-1',
        questionAr: 'أوجد مجموعة الحل في Q للمعادلة: 4(x - 2) = 2x + 6',
        questionEn: 'Find solution set in Q: 4(x - 2) = 2x + 6',
        solutionStepsAr: [
          'الخطوة 1: فك القوس: 4x - 8 = 2x + 6.',
          'الخطوة 2: تجميع x في طرف: 4x - 2x = 6 + 8 => 2x = 14.',
          'الخطوة 3: القسمة على 2: x = 7. م.ح = { 7 }.'
        ],
        solutionStepsEn: [
          'Step 1: 4x - 8 = 2x + 6.',
          'Step 2: 2x = 14 => x = 7.',
          'Step 3: Solution Set = { 7 }.'
        ],
        answerAr: 'مجموعة الحل م.ح = { 7 }.',
        answerEn: 'Solution Set S.S = { 7 }.'
      },
      {
        id: 'ex-mmath3-2',
        questionAr: 'أوجد مجموعة الحل في Q للمتباينة: 2x - 7 > 5x + 2',
        questionEn: 'Solve inequality in Q: 2x - 7 > 5x + 2',
        solutionStepsAr: [
          'الخطوة 1: تجميع x في طرف: 2x - 5x > 2 + 7 => -3x > 9.',
          'الخطوة 2: بالقسمة على -3 وعكس علامة التباين: x < 9 ÷ (-3) => x < -3.',
          'الخطوة 3: كتابة مجموعة الحل: م.ح = { x : x ∈ Q ، x < -3 }.'
        ],
        solutionStepsEn: [
          'Step 1: -3x > 9.',
          'Step 2: Divide by -3 and flip sign: x < -3.',
          'Step 3: S.S = { x : x ∈ Q, x < -3 }.'
        ],
        answerAr: 'م.ح = { x : x ∈ Q ، x < -3 }.',
        answerEn: 'S.S = { x : x ∈ Q, x < -3 }.'
      },
      {
        id: 'ex-mmath3-3',
        questionAr: 'رجل عمره الآن 4 أمثال عمر ابنه، وبعد سنتين يصبح مجموع عمريهما 44 سنة. أوجد عمر كل منهما الآن.',
        questionEn: 'A father is 4 times his son age. In 2 years their ages sum to 44. Find their current ages.',
        solutionStepsAr: [
          'نفرض عمر الابن الآن = x ، إذن عمر الأب الآن = 4x.',
          'بعد سنتين: عمر الابن = x + 2 ، عمر الأب = 4x + 2.',
          'المجموع: (x + 2) + (4x + 2) = 44 => 5x + 4 = 44 => 5x = 40 => x = 8 (عمر الابن).',
          'عمر الأب = 4 × 8 = 32 سنة.'
        ],
        solutionStepsEn: [
          'Son = x, Father = 4x.',
          '(x + 2) + (4x + 2) = 44 => 5x = 40 => x = 8.',
          'Son is 8 years old, Father is 32 years old.'
        ],
        answerAr: 'عمر الابن الآن = 8 سنوات • عمر الأب الآن = 32 سنة.',
        answerEn: 'Son = 8 years • Father = 32 years.'
      },
      {
        id: 'ex-mmath3-4',
        questionAr: 'مثل بيانياً العلاقة الخطية: y = -x + 3 ، واذكر نقطتي تقاطع المستقيم مع محوري الإحداثيات.',
        questionEn: 'Graph linear equation y = -x + 3 and find intercepts.',
        solutionStepsAr: [
          'جدول النقاط: x = 0 => y = 3 (النقطة 0, 3). x = 1 => y = 2 (النقطة 1, 2). x = 3 => y = 0 (النقطة 3, 0).',
          'نقطة التقاطع مع محور الصادات = (0, 3).',
          'نقطة التقاطع مع محور السينات = (3, 0).'
        ],
        solutionStepsEn: [
          'Points: (0, 3), (1, 2), (3, 0).',
          'y-intercept = (0, 3), x-intercept = (3, 0).'
        ],
        answerAr: 'المستقيم يقطع محور الصادات في (0, 3) ومحور السينات في (3, 0).',
        answerEn: 'Intercepts: y-axis at (0, 3) and x-axis at (3, 0).'
      }
    ],

    assessment: {
      id: 'quiz-m-math-3',
      lectureId: 'm-math-3',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 3: المعادلات والمتباينات الخطية وتطبيقاتها',
      titleEn: 'Mastery Assessment 3: Linear Equations, Inequalities & Problem Solving',
      passingScore: 80,
      questions: [
        {
          id: 'qm3-1',
          textAr: 'إذا كان 3x + 1 = 16 ، فإن قيمة 2x - 3 تساوي:',
          textEn: 'If 3x + 1 = 16, then 2x - 3 equals:',
          optionsAr: ['7', '5', '10', '13'],
          optionsEn: ['7', '5', '10', '13'],
          correctIndex: 0,
          conceptTestedAr: 'حل المعادلة والتعويض في مقدار آخر',
          conceptTestedEn: 'Equation solving and substitution',
          explanationAr: '3x = 15 => x = 5. بالتعويض: 2(5) - 3 = 10 - 3 = 7.',
          explanationEn: '3x = 15 => x = 5 => 2(5) - 3 = 7.',
          difficulty: 'medium'
        },
        {
          id: 'qm3-2',
          textAr: 'مجموعة حل المتباينة -x ≥ 4 في مجموعة الأعداد النسبية Q هي:',
          textEn: 'Solution set of -x ≥ 4 in Q is:',
          optionsAr: ['{ x : x ∈ Q ، x ≤ -4 }', '{ x : x ∈ Q ، x ≥ -4 }', '{ x : x ∈ Q ، x ≤ 4 }', '{ x : x ∈ Q ، x ≥ 4 }'],
          optionsEn: ['{ x ∈ Q | x ≤ -4 }', '{ x ∈ Q | x ≥ -4 }', '{ x ∈ Q | x ≤ 4 }', '{ x ∈ Q | x ≥ 4 }'],
          correctIndex: 0,
          conceptTestedAr: 'عكس إشارة التباين عند الضرب في -1',
          conceptTestedEn: 'Inequality sign inversion',
          explanationAr: 'بالضرب في -1 وعكس علامة التباين (≥ تصبح ≤): x ≤ -4.',
          explanationEn: 'Multiply by -1 and reverse sign: x ≤ -4.',
          difficulty: 'medium'
        },
        {
          id: 'qm3-3',
          textAr: 'عددان طبيعيان مجموعهما 15 والفرق بينهما 3. العدد الأكبر هو:',
          textEn: 'Two natural numbers sum to 15 with difference 3. The larger number is:',
          optionsAr: ['9', '6', '12', '8'],
          optionsEn: ['9', '6', '12', '8'],
          correctIndex: 0,
          conceptTestedAr: 'حل المسائل اللفظية',
          conceptTestedEn: 'Word problem modeling',
          explanationAr: 'x + y = 15 ، x - y = 3 => 2x = 18 => x = 9 (الأكبر) و y = 6 (الأصغر).',
          explanationEn: 'x + y = 15, x - y = 3 => 2x = 18 => x = 9.',
          difficulty: 'medium'
        },
        {
          id: 'qm3-4',
          textAr: 'ميل الخط المستقيم الموازي لمحور السينات يساوي:',
          textEn: 'The slope of a horizontal line parallel to the x-axis is:',
          optionsAr: ['صفر', '1', '-1', 'غير معرّف'],
          optionsEn: ['0', '1', '-1', 'Undefined'],
          correctIndex: 0,
          conceptTestedAr: 'ميل الخطوط المستقيمة الأفقية',
          conceptTestedEn: 'Horizontal line slope',
          explanationAr: 'المستقيم الموازي لمحور السينات أفقي وتغير y فيه يساوي صفراً، إذن ميله = 0.',
          explanationEn: 'Horizontal lines have zero vertical change => slope = 0.',
          difficulty: 'easy'
        },
        {
          id: 'qm3-5',
          textAr: 'إذا كان x عدداً سالباً، فأي المقادير الآتية يكون أكبر دائماً؟',
          textEn: 'If x is a negative number, which of the following is always largest?',
          optionsAr: ['-x', 'x', 'x - 5', '2x'],
          optionsEn: ['-x', 'x', 'x - 5', '2x'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص الأعداد السالبة ومعكوساتها',
          conceptTestedEn: 'Negative number properties',
          explanationAr: 'بما أن x سالب، فإن (-x) يكون عدداً موجباً، وهو أكبر من كل الخيارات السالبة الأخرى.',
          explanationEn: 'Since x < 0, -x is strictly positive and exceeds all negative alternatives.',
          difficulty: 'hard'
        }
      ]
    }
  },

  // ── LECTURE 4: GEOMETRY, CONGRUENCE, PARALLELISM & TRANSFORMATIONS ──
  {
    id: 'm-math-4',
    order: 4,
    titleAr: 'المحاضرة 4: الهندسة والقياس: تطابق المثلثات، التوازي، والتحويلات الهندسية',
    titleEn: 'Lecture 4: Geometry: Angle Relations, Triangle Congruence, Parallelism & Geometric Transformations',
    subtitleAr: 'المفاهيم الهندسية، الزوايا المتتامة والمتكاملة والمتقابلة بالرأس، حالات تطابق المثلثات الأربع، التوازي والتحويلات (الانعكاس، الانتقال، الدوران)',
    subtitleEn: 'Master angle theorems, 4 triangle congruence criteria (SAS, ASA, SSS, RHS), parallel line transversal angles, and transformations.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-math-3',
    prerequisiteTitleAr: 'المحاضرة 3: المعادلات والمتباينات الخطية وتطبيقاتها',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الأول والثاني',
    termEn: 'Term 1 & Term 2 Official Geometry Curriculum',
    unitTitleAr: 'الوحدة الثالثة: الهندسة والقياس والتحويلات الهندسية (Geometry & Transformations)',
    unitTitleEn: 'Unit 3: Geometry, Congruence, Parallelism & Transformations',
    lessonNumberAr: 'الدرس 4: علاقات الزوايا وتطابق المثلثات والتوازي والتحويلات',
    lessonNumberEn: 'Lesson 4: Geometric Theorems, Congruence & Geometric Transformations',

    warmupHookAr: 'عند تصميم هياكل الجسور العملاقة وناطحات السحاب أو أجنحة الطائرات، يعتمد المهندسون على "تطابق المثلثات" و"التوازي" لضمان ثبات الهيكل ومقاومته للرياح والزلازل. كما تستخدم ألعاب الفيديو والرسوم ثلاثية الأبعاد 3D "التحويلات الهندسية" (الانعكاس والانتقال والدوران) لتحريك الشخصيات في الفضاء الرقمي بدقة متناهية!',
    warmupHookEn: 'Architectural engineering of bridges, aircraft wings, and 3D game animation rely on triangle congruence criteria (SAS, ASA, SSS, RHS) and geometric transformations (reflection, translation, rotation) to calculate physical stability and render graphics in coordinate space!',

    learningOutcomesAr: [
      'أن يفرّق الطالب بين الزوايا المتتامة (مجموعها 90°)، المتكاملة (مجموعها 180°)، والمتقابلة بالرأس (متساوية في القياس)',
      'أن يبرهن تطابق مثلثين باستخدام إحدى الحالات الأربع: (SAS ضلعان وزاوية محصورة، ASA زاويتان وضلع، SSS ثلاثة أضلاع، RHS وتر وضلع في القائم)',
      'أن يستنتج قياسات الزوايا الناتجة عن توازي مستقيمين وقاطع لهما (التبادل Z، التناظر F، والتداخل U)',
      'أن يحدد إحداثيات صورة نقطة أو شكل بالتحويلات الهندسية الثلاث: الانعكاس، الانتقال، والدوران'
    ],
    learningOutcomesEn: [
      'Classify complementary (90°), supplementary (180°), and vertically opposite angles',
      'Prove triangle congruence using SAS, ASA, SSS, and RHS criteria',
      'Calculate angles formed by parallel lines and transversals: Alternate (Z), Corresponding (F), and Co-interior (U)',
      'Construct images under geometric transformations: Reflection, Translation, and Rotation'
    ],

    vocabulary: [
      {
        termAr: 'الزاويتان المتتامتان (Complementary Angles)',
        termEn: 'Complementary Angles',
        definitionAr: 'زاويتان مجموع قياسيهما يساوي 90° (متممة الزاوية 30° هي 60°).',
        definitionEn: 'Two angles whose sum is 90°.'
      },
      {
        termAr: 'الزاويتان المتكاملتان (Supplementary Angles)',
        termEn: 'Supplementary Angles',
        definitionAr: 'زاويتان مجموع قياسيهما يساوي 180° (مكملة الزاوية 70° هي 110°).',
        definitionEn: 'Two angles whose sum is 180°.'
      },
      {
        termAr: 'تطابق المثلثات (Triangle Congruence - ≅)',
        termEn: 'Triangle Congruence (≅)',
        definitionAr: 'تطابق جميع الأضلاع والزوايا المتناظرة في المثلثين، وتكفي 3 عناصر محددة لإثبات التطابق.',
        definitionEn: 'Geometric congruence where corresponding sides and angles are equal.'
      },
      {
        termAr: 'التحويل الهندسي (Geometric Transformation)',
        termEn: 'Geometric Transformation',
        definitionAr: 'تحويل ينقل كل نقطة في المستوى إلى نقطة أخرى في نفس المستوى، ويشمل الانعكاس والانتقال والدوران.',
        definitionEn: 'A mapping of coordinate plane points preserving distance and shape.'
      }
    ],

    keyConceptsAr: [
      'الزوايا المتجمعة حول نقطة = 360° | الزاويتان المتقابلتان بالرأس متساويتان في القياس',
      'حالات تطابق المثلثات: 1) SAS ضلعان وزاوية محصورة 2) ASA زاويتان وضلع 3) SSS ثلاثة أضلاع 4) RHS وتر وضلع في المثلث القائم',
      'التوازي وقاطع: زاويتان متبادلتان متساويتان (حرف Z) | زاويتان متناظرتان متساويتان (حرف F) | زاويتان داخلتان متكاملتان = 180° (حرف U)',
      'الانعكاس في محور السينات: (x, -y) | في محور الصادات: (-x, y) | في نقطة الأصل: (-x, -y)',
      'الانتقال بالمقدار والاتجاه: (x + a, y + b)'
    ],
    keyConceptsEn: [
      'Angles around a point = 360° | Vertically opposite angles are equal',
      '4 Congruence Cases: SAS, ASA, SSS, RHS',
      'Parallel Lines: Alternate angles equal (Z), Corresponding angles equal (F), Co-interior angles sum to 180° (U)',
      'Transformations: Reflection x-axis (x, -y), y-axis (-x, y), origin (-x, -y), Translation (x+a, y+b)'
    ],
    summaryAr: 'رحلة هندسية شيقة تغطي نظريات الزوايا، وحالات تطابق المثلثات الأربع بالبرهان الهندسي، وقوانين التوازي والتبادل والتناظر، وقواعد التحويلات الهندسية في المستوى الإحداثي.',
    summaryEn: 'Comprehensive Prep 1 geometry: Angle theorems, 4 triangle congruence criteria, parallel transversal angles, and coordinate transformations.',

    sections: [
      {
        titleAr: '1. المفاهيم الهندسية والعلاقات بين الزوايا',
        titleEn: '1. Geometric Concepts & Angle Relationships',
        contentAr: 'الزاوية هي اتحاد شعاعين لهما نفس نقطة البداية. تصنف الزوايا إلى: حادة (<90°)، قائمة (=90°)، منفرجة (>90° و <180°)، مستقيمة (=180°)، ومنعكسة (>180° و <360°). العلاقات الأساسية: 1) الزاويتان المتتامتان مجموعهما 90°. 2) الزاويتان المتكاملتان مجموعهما 180°. 3) إذا تقاطع مستقيمان، فإن كل زاويتين متقابلتين بالرأس متساويتان في القياس. 4) مجموع قياسات الزوايا المتجمعة حول نقطة واحدة = 360°.',
        contentEn: 'Angles are categorized by magnitude. Key theorems: Complementary angles sum to 90°, supplementary angles sum to 180°, vertically opposite angles are congruent, and angles around a single vertex sum to 360°.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حساب قياسات الزوايا المتجمعة حول نقطة والزوايا المتكاملة',
          titleEn: 'Worked Example 1: Calculating Unknown Angles around a Point',
          equation: 'مجموع الزوايا حول نقطة = 360°',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: زوايا متجمعة حول نقطة M قياساتها: 110° ، 90° (قائمة) ، 70° ، والزاوية المجهولة ∠AMB.',
              textEn: 'Given: Angles around vertex M: 110°, 90°, 70°, and unknown ∠AMB.',
              noteAr: 'مجموع الزوايا = 360°'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: نجمع الزوايا المعلومة: 110° + 90° + 70° = 270°.',
              textEn: 'Step 1: Sum known angles: 110 + 90 + 70 = 270°.',
              noteAr: 'مجموع الزوايا المعلومة = 270°'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2: نطرح من 360°: قياس ∠AMB = 360° - 270° = 90° (زاوية قائمة).',
              textEn: 'Step 2: ∠AMB = 360° - 270° = 90°.',
              noteAr: 'قياس الزاوية المجهولة = 90°'
            }
          ],
          takeawayAr: 'مجموع قياسات الزوايا المتجمعة حول نقطة يساوي دائماً 360° دون استثناء.',
          takeawayEn: 'Angles around any single vertex strictly sum to 360°.'
        },
        formativeCheck: {
          id: 'fc-mmath4-1',
          questionAr: 'الزاوية التي قياسها 65° تتمم زاوية قياسها ... وتكمل زاوية قياسها ...؟',
          questionEn: 'An angle of 65° is complementary to ... and supplementary to ...?',
          optionsAr: ['25° وتكمل 115°', '35° وتكمل 125°', '25° وتكمل 125°', '115° وتكمل 25°'],
          optionsEn: ['25° and 115°', '35° and 125°', '25° and 125°', '115° and 25°'],
          correctIndex: 0,
          explanationAr: 'المتممة = 90° - 65° = 25°. والمكملة = 180° - 65° = 115°.',
          explanationEn: 'Complement = 90 - 65 = 25°. Supplement = 180 - 65 = 115°.',
          hintAr: 'المتممة تطرح من 90°، والمكملة تطرح من 180°.'
        },
        tipsAr: [
          'الزاويتان المتتامتان المتساويتان قياس كل منهما = 45°.',
          'الزاويتان المتكاملتان المتساويتان قياس كل منهما = 90° (قائمتان).'
        ],
        tipsEn: [
          'Two equal complementary angles measure 45° each.',
          'Two equal supplementary angles measure 90° each.'
        ]
      },
      {
        titleAr: '2. حالات تطابق المثلثات الأربع (Congruence Criteria)',
        titleEn: '2. The Four Triangle Congruence Criteria (SAS, ASA, SSS, RHS)',
        contentAr: 'يتطابق المثلثان إذا تحققت إحدى الحالات الأربع التالية: 1) الحالة الأولى (SAS): ضلعان والزاوية المحصورة بينهما. 2) الحالة الثانية (ASA): زاويتان والضلع المرسوم بين رأسيهما. 3) الحالة الثالثة (SSS): كل ضلع في أحد المثلثين مع نظيره في الآخر (الأضلاع الثلاثة). 4) الحالة الرابعة (RHS): وتر وأحد ضلعي القائمة في المثلث القائم الزاوية. من نتائج التطابق: تتساوى جميع الأضلاع والزوايا المتناظرة الباقية.',
        contentEn: 'Triangle congruence is proven via 4 definitive criteria: SAS (Side-Angle-Side), ASA (Angle-Side-Angle), SSS (Side-Side-Side), and RHS (Right-angle-Hypotenuse-Side). Congruence implies all corresponding parts are equal (CPCTC).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: إثبات تطابق مثلثين واستنتاج طول ضلع مجهول بالبرهان',
          titleEn: 'Worked Example 2: Proving Triangle Congruence & Deducing Side Lengths',
          equation: 'ΔABC ≅ ΔDEF',
          steps: [
            {
              stepNumber: 1,
              textAr: 'شروط التطابق في المثلثين ABC و DEF: 1) AB = DE = 5 سم (ضلع). 2) BC = EF = 7 سم (ضلع). 3) قياس ∠B = قياس ∠E = 60° (زاوية محصورة).',
              textEn: 'Step 1: Conditions: AB = DE = 5cm, BC = EF = 7cm, ∠B = ∠E = 60° (included angle).',
              noteAr: 'تحقق حالة SAS (ضلعان وزاوية محصورة)'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: النتيجة: إذن المثلث ABC يتطابق مع المثلث DEF (ΔABC ≅ ΔDEF).',
              textEn: 'Step 2: Conclusion: ΔABC ≅ ΔDEF by SAS congruence.',
              noteAr: 'إثبات التطابق'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: من نتائج التطابق: طول الضلع الثالث AC يساوي طول الضلع DF = 6.2 سم، وقياس ∠A = قياس ∠D.',
              textEn: 'Step 3: CPCTC: AC = DF and ∠A = ∠D.',
              noteAr: 'استنتاج العناصر المتناظرة'
            }
          ],
          takeawayAr: 'يكفي إثبات 3 عناصر محددة وفق الحالات الأربع لنستنتج تلقائياً تساوي العناصر الثلاثة الأخرى المتبقية.',
          takeawayEn: 'Proving 3 specific matching elements via congruence rules guarantees all other 3 corresponding parts are equal.'
        },
        formativeCheck: {
          id: 'fc-mmath4-2',
          questionAr: 'يتطابق المثلثان القائما الزاوية إذا تطابق:',
          questionEn: 'Two right-angled triangles are congruent if they match in:',
          optionsAr: ['وتر وأحد ضلعي القائمة (RHS)', 'الزاويتان الحادتان فقط', 'الوتر فقط', 'مساحتاهما فقط'],
          optionsEn: ['Hypotenuse and one leg (RHS)', 'Two acute angles only', 'Hypotenuse only', 'Area only'],
          correctIndex: 0,
          explanationAr: 'الحالة الرابعة لتطابق المثلثات القائمة (RHS) تشترط تطابق الوتر وأحد ضلعي القائمة.',
          explanationEn: 'RHS criterion requires congruence of hypotenuse and one leg in right triangles.',
          hintAr: 'تذكر حالة الوتر وأحد ضلعي القائمة في المثلث القائم.'
        },
        tipsAr: [
          'الحالة (AAA) زوايا متساوية فقط لا تثبت التطابق بل تثبت التشابه.',
          'الحالة (SSA) ضلعان وزاوية غير محصورة لا تثبت التطابق إلا إذا كانت الزاوية قائمة (RHS).'
        ],
        tipsEn: [
          'AAA proves similarity, never congruence.',
          'SSA is not a valid congruence criterion unless the angle is 90° (RHS).'
        ]
      },
      {
        titleAr: '3. التوازي والزوايا المتبادلة والمتناظرة والداخلة',
        titleEn: '3. Parallel Lines & Transversal Angles (Alternate, Corresponding, Co-Interior)',
        contentAr: 'إذا قطع مستقيم مستقيمين متوازيين، فإن: 1) كل زاويتين متبادلتين متساويتان في القياس (تأخذ شكل حرف Z). 2) كل زاويتين متناظرتين متساويتان في القياس (تأخذ شكل حرف F). 3) كل زاويتين داخلتين وفي جهة واحدة من القاطع متكاملتان (مجموعهما = 180°، تأخذ شكل حرف U أو C). والعكس صحيح: إذا تساوت زاويتان متبادلتان أو متناظرتان فإن المستقيمين يكونان متوازيين.',
        contentEn: 'When parallel lines are intersected by a transversal: Alternate interior angles are equal (Z-shape), corresponding angles are equal (F-shape), and co-interior angles sum to 180° (U-shape). Converse theorems prove parallelism.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: حساب قياسات زوايا مجهولة باستخدام التوازي وحرفي Z و U',
          titleEn: 'Worked Example 3: Finding Unknown Angles in Parallel Transversal Systems',
          equation: 'AB // CD // EF',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: المستقيم AB // CD ، والقاطع AC يصنع زاوية ∠BAC = 50°. إذن بالتبادل (حرف Z): قياس ∠ACD = قياس ∠BAC = 50°.',
              textEn: 'Step 1: AB // CD => Alternate interior angle ∠ACD = ∠BAC = 50° (Z-angle).',
              noteAr: 'تبادل: ∠ACD = 50°'
            },
            {
              stepNumber: 2,
              textAr: 'المعطى الثاني: المستقيم CD // EF ، والزاوية ∠CEF = 120°. بما أن الزاويتين داخلتان (حرف U)، فإن: قياس ∠DCE = 180° - 120° = 60°.',
              textEn: 'Step 2: CD // EF => Co-interior angle ∠DCE = 180° - 120° = 60° (U-angle).',
              noteAr: 'تداخل: ∠DCE = 60°'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: قياس زاوية ∠ACE الكلية = قياس ∠ACD + قياس ∠DCE = 50° + 60° = 110°.',
              textEn: 'Step 3: Total ∠ACE = 50° + 60° = 110°.',
              noteAr: 'الزاوية الكلية = 110°'
            }
          ],
          takeawayAr: 'ابحث دائماً عن أشكال الحروف الهندسية (Z للتبادل، F للتناظر، U للتكامل) عند وجود مستقيمات متوازية.',
          takeawayEn: 'Identify characteristic geometric shapes: Z for alternate, F for corresponding, U for supplementary co-interior.'
        },
        formativeCheck: {
          id: 'fc-mmath4-3',
          questionAr: 'إذا كان المستقيم L₁ // L₂ وقياس إحدى الزاويتين الداخلتين 75°، فإن قياس الزاوية الداخلة الأخرى في نفس الجهة يساوي:',
          questionEn: 'If L₁ // L₂ and one co-interior angle is 75°, the other co-interior angle is:',
          optionsAr: ['105°', '75°', '15°', '90°'],
          optionsEn: ['105°', '75°', '15°', '90°'],
          correctIndex: 0,
          explanationAr: 'الزاويتان الداخلتان متكاملتان مجموعهما 180°: 180° - 75° = 105°.',
          explanationEn: 'Co-interior angles are supplementary: 180 - 75 = 105°.',
          hintAr: 'الزاويتان الداخلتان (حرف U) مجموعهما 180°.'
        },
        tipsAr: [
          'المستقيمان الموازيان لثالث متوازيان (إذا كان L₁ // L₃ و L₂ // L₃ فإن L₁ // L₂).',
          'المستقيم العمودي على أحد مستقيمين متوازيين يكون عمودياً على الآخر.'
        ],
        tipsEn: [
          'Lines parallel to a common line are parallel to each other.',
          'A line perpendicular to one of two parallel lines is perpendicular to the other.'
        ]
      },
      {
        titleAr: '4. التحويلات الهندسية (الانعكاس والانتقال والدوران)',
        titleEn: '4. Geometric Transformations in Coordinate Planes',
        contentAr: 'التحويل الهندسي يحول كل نقطة (x, y) إلى صورة (x\', y\'). 1) الانعكاس: في محور السينات نغير إشارة الصاد (x, -y) ، في محور الصادات نغير إشارة السين (-x, y) ، في نقطة الأصل نغير الإشارتين (-x, -y). 2) الانتقال: نجمع مقدار الإزاحة (x + a, y + b). 3) الدوران حول نقطة الأصل: بزاوية 90° مع عقارب الساعة (y, -x) وبزاوية 90° ضد عقارب الساعة (-y, x) وبزاوية 180° (-x, -y) وبزاوية 360° (دوران محايد يرجع لنفس النقطة). تحافظ هذه التحويلات على أطوال القطع المستقيمة وقياسات الزوايا والتوازي.',
        contentEn: 'Transformations map (x,y) to (x\',y\'). Reflection in x-axis (x, -y), y-axis (-x, y), origin (-x, -y). Translation adds shifts (x+a, y+b). Rotation around origin preserves lengths, angles, and congruence (isometry).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: إيجاد صور نقطة بالانعكاس والانتقال والدوران',
          titleEn: 'Worked Example 4: Finding Image Coordinates under Multiple Transformations',
          equation: 'النقطة A(3, -4)',
          steps: [
            {
              stepNumber: 1,
              textAr: '1) صورة النقطة A بالانعكاس في محور السينات: نعكس إشارة y => A₁ = (3, 4).',
              textEn: '1) Reflection in x-axis: (3, -(-4)) = (3, 4).',
              noteAr: 'انعكاس في محور السينات'
            },
            {
              stepNumber: 2,
              textAr: '2) صورة النقطة A بالانتقال (x - 2, y + 5): A₂ = (3 - 2, -4 + 5) = (1, 1).',
              textEn: '2) Translation by (-2, +5): A₂ = (1, 1).',
              noteAr: 'انتقال بمقدار (-2, +5)'
            },
            {
              stepNumber: 3,
              textAr: '3) صورة النقطة A بالدوران حول نقطة الأصل بزاوية 180°: نعكس الإشارتين => A₃ = (-3, 4).',
              textEn: '3) Rotation 180° around origin: A₃ = (-3, 4).',
              noteAr: 'دوران 180°'
            }
          ],
          takeawayAr: 'الانعكاس والانتقال والدوران تحويلات متطابقة (Isometry) تحافظ على الأبعاد والشكل والمساحة تماماً.',
          takeawayEn: 'Isometries preserve distances, angle measures, and geometric areas.'
        },
        formativeCheck: {
          id: 'fc-mmath4-4',
          questionAr: 'صورة النقطة (-2, 5) بالانعكاس في محور الصادات هي:',
          questionEn: 'The image of point (-2, 5) under reflection in the y-axis is:',
          optionsAr: ['(2, 5)', '(-2, -5)', '(2, -5)', '(5, -2)'],
          optionsEn: ['(2, 5)', '(-2, -5)', '(2, -5)', '(5, -2)'],
          correctIndex: 0,
          explanationAr: 'الانعكاس في محور الصادات يغير إشارة الإحداثي السيني x: -(-2) = +2 ، ويبقى الصادي كما هو => (2, 5).',
          explanationEn: 'Reflection in y-axis negates x: (-(-2), 5) = (2, 5).',
          hintAr: 'انعكاس في محور الصادات: غير إشارة السين واترك الصاد.'
        },
        tipsAr: [
          'الانعكاس في نقطة الأصل يكافئ تماماً الدوران بزاوية 180° حول نقطة الأصل: كلاهما يحول (x, y) إلى (-x, -y).',
          'محور التماثل يقسم الشكل إلى نصفين متطابقين تماماً بالانعكاس.'
        ],
        tipsEn: [
          'Reflection in origin is mathematically identical to 180° rotation: (x, y) -> (-x, -y).',
          'A line of symmetry divides a shape into two congruent reflected halves.'
        ]
      }
    ],

    conceptMapAr: [
      'علاقات الزوايا: متتامة 90° | متكاملة 180° | متقابلة بالرأس متساوية | حول نقطة 360°',
      'حالات تطابق المثلثات: SAS (ضلعان وزاوية) | ASA (زاويتان وضلع) | SSS (3 أضلاع) | RHS (وتر وضلع قائم)',
      'التوازي: تبادل Z متساوٍ | تناظر F متساوٍ | تداخل U متكامل 180°',
      'التحويلات الهندسية: انعكاس السينات (x, -y) | الصادات (-x, y) | الأصل والدوران 180° (-x, -y) | انتقال (x+a, y+b)'
    ],
    conceptMapEn: [
      'Angle theorems: Complementary 90°, Supplementary 180°, Vertically opposite, Around vertex 360°',
      'Congruence: SAS, ASA, SSS, RHS',
      'Parallelism: Alternate (Z), Corresponding (F), Co-interior (U)',
      'Transformations: Axis reflections, 180° rotation, translation shifts'
    ],

    textbookExercises: [
      {
        id: 'ex-mmath4-1',
        questionAr: 'في الشكل المقابل: AB // CD ، قياس ∠A = 115° ، و قياس ∠C = 65°. هل المستقيم AC عمودي على المستقيم CD؟ مع التعليل الهندسي.',
        questionEn: 'AB // CD, ∠A = 115°, ∠C = 65°. Is AC perpendicular to CD? Explain.',
        solutionStepsAr: [
          'الخطوة 1: بما أن AB // CD و AC قاطع لهما، فإن الزاويتين ∠A و ∠C هما زاويتان داخلتان وفي جهة واحدة من القاطع.',
          'الخطوة 2: نجمع الزاويتين: 115° + 65° = 180° (متكاملتان بالفعل).',
          'الخطوة 3: بما أن قياس ∠C = 65° (وليس 90°)، إذن AC ليس عمودياً على CD لأن التعامد يتطلب زاوية 90°.'
        ],
        solutionStepsEn: [
          'Step 1: ∠A and ∠C are co-interior angles.',
          'Step 2: 115 + 65 = 180° (supplementary).',
          'Step 3: ∠C = 65° ≠ 90°, so AC is not perpendicular to CD.'
        ],
        answerAr: 'ليس عمودياً لأن قياس ∠C = 65° والتعامد يتطلب زاوية قائمة 90°.',
        answerEn: 'Not perpendicular because ∠C = 65° ≠ 90°.'
      },
      {
        id: 'ex-mmath4-2',
        questionAr: 'مثلث ABC فيه AB = AC ، ورسم AD عمودي على BC ليقطعه في D. أثبت أن: 1) ΔABD ≅ ΔACD  2) D منتصف القطعة BC.',
        questionEn: 'Isosceles ΔABC with AB = AC and AD ⊥ BC. Prove: 1) ΔABD ≅ ΔACD  2) D is midpoint of BC.',
        solutionStepsAr: [
          'في المثلثين القائمين ABD و ACD: 1) الوتر AB = الوتر AC (معطى). 2) الضلع AD ضلع مشترك. 3) قياس ∠ADB = قياس ∠ADC = 90°.',
          'إذن: ΔABD ≅ ΔACD بحالة (RHS وتر وضلع في المثلث القائم).',
          'من نتائج التطابق: BD = CD ، وبالتالي D هي منتصف القطعة المستقيمة BC.'
        ],
        solutionStepsEn: [
          'In right triangles ABD & ACD: Hypotenuse AB = AC, Leg AD is shared, ∠ADB = ∠ADC = 90°.',
          'Therefore ΔABD ≅ ΔACD by RHS.',
          'By CPCTC: BD = CD => D is the midpoint of BC.'
        ],
        answerAr: 'تم إثبات التطابق بحالة RHS ، ومن نتائج التطابق BD = CD إذن D منتصف BC.',
        answerEn: 'Proved via RHS congruence; CPCTC yields BD = CD so D is midpoint.'
      },
      {
        id: 'ex-mmath4-3',
        questionAr: 'أوجد صورة المثلث الذي رؤوسه A(1, 2) ، B(4, 2) ، C(1, 6) بالانعكاس في محور السينات ثم بالانتقال (x + 3, y - 1).',
        questionEn: 'Find image of ΔABC (1,2), (4,2), (1,6) reflected in x-axis then translated by (+3, -1).',
        solutionStepsAr: [
          '1) الانعكاس في محور السينات (x, -y): A\'(1, -2) ، B\'(4, -2) ، C\'(1, -6).',
          '2) الانتقال (x + 3, y - 1):',
          'A\'\' = (1 + 3, -2 - 1) = (4, -3).',
          'B\'\' = (4 + 3, -2 - 1) = (7, -3).',
          'C\'\' = (1 + 3, -6 - 1) = (4, -7).'
        ],
        solutionStepsEn: [
          'Reflection in x-axis: A\'(1,-2), B\'(4,-2), C\'(1,-6).',
          'Translation (+3, -1): A\'\'(4,-3), B\'\'(7,-3), C\'\'(4,-7).'
        ],
        answerAr: 'الرؤوس النهائية: A\'\'(4, -3) ، B\'\'(7, -3) ، C\'\'(4, -7).',
        answerEn: 'Final coordinates: A\'\'(4, -3), B\'\'(7, -3), C\'\'(4, -7).'
      },
      {
        id: 'ex-mmath4-4',
        questionAr: 'في متوازي الأضلاع ABCD: إذا كان قياس ∠A = 70°. احسب قياسات باقي زوايا متوازي الأضلاع (∠B ، ∠C ، ∠D).',
        questionEn: 'In parallelogram ABCD, ∠A = 70°. Find angles B, C, and D.',
        solutionStepsAr: [
          'في متوازي الأضلاع: كل زاويتين متقابلتين متساويتان في القياس => قياس ∠C = قياس ∠A = 70°.',
          'كل زاويتين متتاليتين متكاملتان (مجموعهما 180°): قياس ∠B = 180° - 70° = 110°.',
          'قياس ∠D المقابلة لـ ∠B = 110°.'
        ],
        solutionStepsEn: [
          'Opposite angles equal: ∠C = ∠A = 70°.',
          'Consecutive angles supplementary: ∠B = 180 - 70 = 110°.',
          'Opposite angle: ∠D = ∠B = 110°.'
        ],
        answerAr: '∠B = 110° • ∠C = 70° • ∠D = 110°.',
        answerEn: '∠B = 110° • ∠C = 70° • ∠D = 110°.'
      }
    ],

    assessment: {
      id: 'quiz-m-math-4',
      lectureId: 'm-math-4',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 4: الهندسة والزوايا وتطابق المثلثات والتحويلات',
      titleEn: 'Mastery Assessment 4: Geometry, Congruence, Parallelism & Transformations',
      passingScore: 80,
      questions: [
        {
          id: 'qm4-1',
          textAr: 'مجموع قياسات الزوايا المتجمعة حول نقطة واحدة يساوي:',
          textEn: 'The sum of measures of angles accumulated around a point equals:',
          optionsAr: ['360° (أو 4 قوائم)', '180° (قائمتان)', '90° (قائمة)', '270°'],
          optionsEn: ['360° (4 right angles)', '180°', '90°', '270°'],
          correctIndex: 0,
          conceptTestedAr: 'الزوايا المتجمعة حول نقطة',
          conceptTestedEn: 'Angles around a point',
          explanationAr: 'مجموع قياسات الزوايا المتجمعة حول نقطة واحدة = 360° وتكافئ 4 زوايا قائمة.',
          explanationEn: 'Angles around a vertex strictly sum to 360°.',
          difficulty: 'easy'
        },
        {
          id: 'qm4-2',
          textAr: 'إذا كان ΔABC ≅ ΔXYZ ، وكان قياس ∠A = 50° و قياس ∠B = 70° ، فإن قياس ∠Z يساوي:',
          textEn: 'If ΔABC ≅ ΔXYZ with ∠A = 50° and ∠B = 70°, then ∠Z equals:',
          optionsAr: ['60°', '50°', '70°', '120°'],
          optionsEn: ['60°', '50°', '70°', '120°'],
          correctIndex: 0,
          conceptTestedAr: 'تطابق المثلثات ومجموع زوايا المثلث',
          conceptTestedEn: 'Triangle congruence and interior angles sum',
          explanationAr: 'قياس ∠C في المثلث الأول = 180° - (50° + 70°) = 60°. ومن التطابق ∠Z المناظرة لـ ∠C قياسها = 60°.',
          explanationEn: '∠C = 180 - (50+70) = 60° => By CPCTC ∠Z = 60°.',
          difficulty: 'medium'
        },
        {
          id: 'qm4-3',
          textAr: 'صورة النقطة (3, -2) بالدوران حول نقطة الأصل بزاوية 90° ضد عقارب الساعة هي:',
          textEn: 'Image of (3, -2) under 90° counterclockwise rotation around origin is:',
          optionsAr: ['(2, 3)', '(-2, -3)', '(-3, 2)', '(2, -3)'],
          optionsEn: ['(2, 3)', '(-2, -3)', '(-3, 2)', '(2, -3)'],
          correctIndex: 0,
          conceptTestedAr: 'قواعد الدوران في المستوى الإحداثي',
          conceptTestedEn: '90° Counterclockwise Rotation Rule',
          explanationAr: 'الدوران 90° ضد عقارب الساعة يحول (x, y) إلى (-y, x): -(-2) = 2 => (2, 3).',
          explanationEn: '(x, y) -> (-y, x) => (-(-2), 3) = (2, 3).',
          difficulty: 'hard'
        },
        {
          id: 'qm4-4',
          textAr: 'إذا قطع مستقيم مستقيمين متوازيين، فإن كل زاويتين متبادلتين:',
          textEn: 'When a transversal cuts parallel lines, alternate interior angles are:',
          optionsAr: ['متساويتان في القياس', 'متكاملتان (مجموعهما 180°)', 'متتامتان (مجموعهما 90°)', 'متقابلتان بالرأس'],
          optionsEn: ['Equal in measure (congruent)', 'Supplementary (sum to 180°)', 'Complementary (90°)', 'Vertically opposite'],
          correctIndex: 0,
          conceptTestedAr: 'خاصية الزوايا المتبادلة في التوازي',
          conceptTestedEn: 'Alternate Interior Angles Theorem',
          explanationAr: 'الزاويتان المتبادلتان (حرف Z) متساويتان في القياس دائماً عند وجود التوازي.',
          explanationEn: 'Alternate angles formed by parallel lines and transversal are strictly equal.',
          difficulty: 'easy'
        },
        {
          id: 'qm4-5',
          textAr: 'الزاويتان المتتامتان اللتان النسبة بين قياسيهما 2 : 3 ، قياس الزاوية الصغرى منهما يساوي:',
          textEn: 'Two complementary angles in ratio 2 : 3 have smaller angle measuring:',
          optionsAr: ['36°', '54°', '45°', '30°'],
          optionsEn: ['36°', '54°', '45°', '30°'],
          correctIndex: 0,
          conceptTestedAr: 'النسبة والزوايا المتتامة',
          conceptTestedEn: 'Ratios and Complementary Angles',
          explanationAr: 'مجموع الأجزاء = 2 + 3 = 5 أجزاء. قيمة الجزء = 90° ÷ 5 = 18°. الزاوية الصغرى = 2 × 18° = 36° (والكبرى = 3 × 18° = 54°).',
          explanationEn: 'Sum of parts = 5 => 90 / 5 = 18° => Smaller = 2 × 18 = 36°.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: STATISTICS & BASIC PROBABILITY ──
  {
    id: 'm-math-5',
    order: 5,
    titleAr: 'المحاضرة 5: الإحصاء ومقاييس النزعة المركزية والاحتمال البسيط',
    titleEn: 'Lecture 5: Statistics (Mean, Median, Mode) & Theoretical/Experimental Probability',
    subtitleAr: 'حساب مقاييس النزعة المركزية (الوسط الحسابي، الوسيط، المنوال)، فضاء العينة وتجارب إلقاء النرد والعملة، وحساب الاحتمال النظري والتجريبي',
    subtitleEn: 'Master measures of central tendency (Mean, Median, Mode), sample spaces, dice/coin experiments, and probability calculations.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'm-math-4',
    prerequisiteTitleAr: 'المحاضرة 4: الهندسة والقياس وتطابق المثلثات والتوازي',

    gradeLevelNameAr: 'الصف الأول الإعدادي (الصف السابع) - المرحلة الإعدادية / المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Prep 1 - Middle School Mathematics',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الرابعة: الإحصاء والاحتمال (Statistics & Probability)',
    unitTitleEn: 'Unit 4: Statistics & Probability',
    lessonNumberAr: 'الدرس 5: مقاييس النزعة المركزية وحساب الاحتمال',
    lessonNumberEn: 'Lesson 5: Central Tendency & Elementary Probability',

    warmupHookAr: 'عندما يتنبأ خبراء الأرصاد الجوية باحتمال سقوط أمطار بنسبة 70%، أو عندما تقترح خوارزميات يوتيوب ونتفليكس الفيديوهات الأكثر مشاهدة استناداً إلى متوسط اهتمامات المشتركين، فإنها تعتمد على "علم الإحصاء والاحتمالات". كيف نلخص ملايين البيانات في رقم واحد يعبر عن المركز؟ وكيف نحسب احتمالات الفوز والنجاح بدقة علمية؟',
    warmupHookEn: 'Weather forecasting (70% rain probability) and AI recommendation algorithms rely on statistics (Mean, Median, Mode) and probability spaces. Discover how data analytics predicts real-world outcomes and drives technological innovation!',

    learningOutcomesAr: [
      'أن يحسب الطالب الوسط الحسابي لمجموعة من القيم بالقانون: مجموع القيم ÷ عددها',
      'أن يجد الوسيط لمجموعة قيم بعد ترتيبها تصاعدياً أو تنازلياً',
      'أن يحدد المنوال لمجموعة بيانات كالقيمة الأكثر تكراراً أو شيوعاً',
      'أن يكتب فضاء العينة S ويحسب احتمال وقوع حدث بسيط P(A) = n(A) / n(S)',
      'أن يفرّق بين الحدث المؤكد (احتماله = 1)، الحدث المستحيل (احتماله = 0)، والحدث الممكن (0 < P < 1)'
    ],
    learningOutcomesEn: [
      'Calculate the Arithmetic Mean: Sum of values / Count of values',
      'Determine the Median of ordered data (odd and even datasets)',
      'Identify the Mode as the most frequently occurring value',
      'Formulate sample space S and calculate simple probability P(A) = n(A) / n(S)',
      'Differentiate certain events (P=1), impossible events (P=0), and possible events (0 < P < 1)'
    ],

    vocabulary: [
      {
        termAr: 'الوسط الحسابي (Arithmetic Mean)',
        termEn: 'Arithmetic Mean',
        definitionAr: 'القيمة التي لو أُعطيت لجميع مفردات العينة لكان مجموعها مساوياً للمجموع الأصلي، ويحسب بقسمة مجموع القيم على عددها.',
        definitionEn: 'Sum of all data points divided by the total number of items.'
      },
      {
        termAr: 'الوسيط (Median)',
        termEn: 'Median',
        definitionAr: 'القيمة التي تتوسط القيم تماماً بعد ترتيبها تصاعدياً أو تنازلياً (يقسم البيانات إلى نصفين متساويين).',
        definitionEn: 'The middle value in an ordered dataset.'
      },
      {
        termAr: 'المنوال (Mode)',
        termEn: 'Mode',
        definitionAr: 'القيمة الأكثر تكراراً أو شيوعاً بين مجموعة القيم.',
        definitionEn: 'The value that appears most frequently in a dataset.'
      },
      {
        termAr: 'فضاء العينة (Sample Space - S)',
        termEn: 'Sample Space (S)',
        definitionAr: 'مجموعة جميع النواتج الممكنة لتجربة عشوائية.',
        definitionEn: 'The set of all possible outcomes of a random experiment.'
      }
    ],

    keyConceptsAr: [
      'الوسط الحسابي = مجموع القيم ÷ عددها',
      'الوسيط: رتب أولاً! إذا كان العدد فردياً فالوسيط هو القيمة الوسطى، وإذا كان زوجياً نأخذ متوسط القيمتين الأوسطين',
      'المنوال: القيمة الأكثر تكراراً (يمكن ألا يوجد منوال، أو يوجد أكثر من منوال)',
      'احتمال الحدث: P(A) = عدد عناصر الحدث n(A) ÷ العدد الكلي لنواتج فضاء العينة n(S)',
      'قاعدة الاحتمال الأساسية: 0 ≤ P(A) ≤ 1 | احتمال الحدث المؤكد = 1 | احتمال الحدث المستحيل = 0'
    ],
    keyConceptsEn: [
      'Mean = Sum of values / Count',
      'Median = Order first; middle value for odd count, average of two middle values for even count',
      'Mode = Most frequent value',
      'Probability formula: P(A) = n(A) / n(S)',
      'Probability boundaries: 0 ≤ P(A) ≤ 1 | Certain event P = 1 | Impossible event P = 0'
    ],
    summaryAr: 'دراسة تطبيقية ممتعة لمقاييس النزعة المركزية (الوسط والوسيط والمنوال) وقوانين الاحتمالات وتجارب النرد والعملة والكرات الملونة.',
    summaryEn: 'Practical statistics & probability: Central tendencies (Mean, Median, Mode), sample spaces, dice/coin models, and probability bounds.',

    sections: [
      {
        titleAr: '1. مقاييس النزعة المركزية (الوسط الحسابي، الوسيط، المنوال)',
        titleEn: '1. Measures of Central Tendency: Mean, Median & Mode',
        contentAr: 'مقاييس النزعة المركزية هي قيم مفردة تلخص وتصف مركز تجمع البيانات: 1) الوسط الحسابي = (مجموع القيم) ÷ (عدد القيم). 2) الوسيط: نرتب البيانات تصاعدياً؛ إذا كان عدد القيم n فردياً فالوسيط هو القيمة ذات الترتيب (n+1)/2. وإذا كان n زوجياً، نأخذ متوسط القيمتين اللتين ترتيبهما n/2 و (n/2)+1. 3) المنوال: هو القيمة الأكثر شيوعاً وتكراراً في العينة.',
        contentEn: 'Central tendency measures summarize data distributions: Mean is total sum divided by count; Median is the exact center of ordered data; Mode is the most frequent occurrence.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حساب الوسط والوسيط والمنوال لدرجات اختبار طالب في 6 مواد',
          titleEn: 'Worked Example 1: Calculating Mean, Median, and Mode for Exam Scores',
          equation: 'البيانات: 18 ، 15 ، 20 ، 15 ، 14 ، 17',
          steps: [
            {
              stepNumber: 1,
              textAr: '1) الوسط الحسابي: (18 + 15 + 20 + 15 + 14 + 17) ÷ 6 = 99 ÷ 6 = 16.5 درجة.',
              textEn: '1) Mean = (18 + 15 + 20 + 15 + 14 + 17) / 6 = 99 / 6 = 16.5.',
              noteAr: 'الوسط الحسابي = 16.5'
            },
            {
              stepNumber: 2,
              textAr: '2) الوسيط: نرتب تصاعدياً: 14 ، 15 ، [15 ، 17] ، 18 ، 20. بما أن العدد 6 (زوجي)، فالوسيط = (15 + 17) ÷ 2 = 32 ÷ 2 = 16 درجة.',
              textEn: '2) Median: Ordered: 14, 15, [15, 17], 18, 20 => Median = (15 + 17) / 2 = 16.',
              noteAr: 'الوسيط = 16'
            },
            {
              stepNumber: 3,
              textAr: '3) المنوال: القيمة الأكثر تكراراً هي 15 (تكررت مرتين). المنوال = 15 درجة.',
              textEn: '3) Mode = 15 (appears twice).',
              noteAr: 'المنوال = 15'
            }
          ],
          takeawayAr: 'الترتيب التصاعدي للبيانات خطوة إجبارية قبل استخراج الوسيط لتفادي الأخطاء الشائعة.',
          takeawayEn: 'Sorting data in ascending order is mandatory before computing the median.'
        },
        formativeCheck: {
          id: 'fc-mmath5-1',
          questionAr: 'إذا كان الوسط الحسابي لدرجات 5 طلاب هو 14، فإن مجموع درجات هؤلاء الطلاب يساوي:',
          questionEn: 'If the arithmetic mean of 5 students scores is 14, the sum of their scores is:',
          optionsAr: ['70', '19', '2.8', '50'],
          optionsEn: ['70', '19', '2.8', '50'],
          correctIndex: 0,
          explanationAr: 'مجموع القيم = الوسط الحسابي × عدد القيم = 14 × 5 = 70 درجة.',
          explanationEn: 'Sum = Mean × Count = 14 × 5 = 70.',
          hintAr: 'المجموع = الوسط الحسابي مضروباً في عدد الطلاب.'
        },
        tipsAr: [
          'إذا أضيفت قيمة متطرفة كبيرة جداً للبيانات، فإن الوسط الحسابي يتأثر بشدة ويرتفع، بينما الوسيط يظل مقياساً دقيقاً.',
          'المنوال للبيانات: 4 ، 7 ، 9 ، 12 هو: "لا يوجد منوال" لعدم وجود تكرار.'
        ],
        tipsEn: [
          'Extreme outliers heavily skew the mean, while the median remains robust.',
          'Datasets without repeating numbers have "No Mode".'
        ]
      },
      {
        titleAr: '2. فضاء العينة والاحتمال النظري والتجريبي',
        titleEn: '2. Sample Spaces & Theoretical vs Experimental Probability',
        contentAr: 'التجربة العشوائية هي تجربة نعلم جميع نواتجها الممكنة مسبقاً قبل إجرائها، ولكن لا يمكننا التنبؤ بالناتج الفعلي بدقة إلا بعد إجرائها. فضاء العينة (S) هو مجموعة كل النواتج الممكنة. 1) إلقاء عملة معدنية: S = {صورة H ، كتابة T} و n(S) = 2. 2) إلقاء حجر نرد منتظم: S = {1, 2, 3, 4, 5, 6} و n(S) = 6. احتمال وقوع أي حدث A يحسب بالقانون: P(A) = عدد عناصر الحدث n(A) ÷ عدد عناصر فضاء العينة n(S).',
        contentEn: 'A random experiment has known possible outcomes in Sample Space S. Probability P(A) = n(A) / n(S). A fair coin has n(S)=2; a standard 6-sided die has n(S)=6.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: حساب احتمالات تجربة إلقاء حجر نرد منتظم مرة واحدة',
          titleEn: 'Worked Example 2: Calculating Probabilities for a Fair 6-Sided Die',
          equation: 'P(A) = n(A) / n(S)  حيث n(S) = 6',
          steps: [
            {
              stepNumber: 1,
              textAr: 'فضاء العينة: S = {1, 2, 3, 4, 5, 6} و n(S) = 6.',
              textEn: 'Sample space S = {1, 2, 3, 4, 5, 6}, n(S) = 6.',
              noteAr: 'فضاء العينة = 6 نواتج'
            },
            {
              stepNumber: 2,
              textAr: '1) احتمال الحصول على عدد زوجي: الأعداد الزوجية A = {2, 4, 6} => n(A) = 3 => P(A) = 3/6 = 1/2 = 50%.',
              textEn: '1) Even number A = {2, 4, 6} => P(A) = 3/6 = 1/2 = 50%.',
              noteAr: 'احتمال عدد زوجي = 1/2'
            },
            {
              stepNumber: 3,
              textAr: '2) احتمال عدد أولي: الأعداد الأولية B = {2, 3, 5} => P(B) = 3/6 = 1/2. 3) احتمال عدد أكبر من 4: C = {5, 6} => P(C) = 2/6 = 1/3.',
              textEn: '2) Prime numbers {2,3,5} => P = 3/6 = 1/2. Greater than 4 {5,6} => P = 2/6 = 1/3.',
              noteAr: 'احتمال أولي = 1/2 • أكبر من 4 = 1/3'
            }
          ],
          takeawayAr: 'تذكر دائماً أن العدد 1 ليس عدداً أولياً، والعدد الأولي الزوجي الوحيد هو 2.',
          takeawayEn: 'Number 1 is not prime; 2 is the only even prime number.'
        },
        formativeCheck: {
          id: 'fc-mmath5-2',
          questionAr: 'عند إلقاء حجر نرد منتظم مرة واحدة، ما احتمال الحصول على عدد يقبل القسمة على 3؟',
          questionEn: 'Rolling a fair die once, what is the probability of getting a number divisible by 3?',
          optionsAr: ['1/3 (أو 2/6)', '1/2', '1/6', '2/3'],
          optionsEn: ['1/3 (or 2/6)', '1/2', '1/6', '2/3'],
          correctIndex: 0,
          explanationAr: 'الأعداد التي تقبل القسمة على 3 هي {3, 6} وعددهم 2. الاحتمال = 2/6 = 1/3.',
          explanationEn: 'Divisible by 3: {3, 6} => 2 outcomes => P = 2/6 = 1/3.',
          hintAr: 'الأعداد التي تقبل القسمة على 3 في النرد هي 3 و 6 فقط.'
        },
        tipsAr: [
          'احتمال أي حدث يقع دائماً بين 0 و 1 (مستحيل أن يكون سالباً أو أكبر من 1).',
          'مجموع احتمالات جميع النواتج البسيطة في أي تجربة يساوي دائماً 1 صحيح.'
        ],
        tipsEn: [
          'Probabilities are strictly bounded: 0 ≤ P ≤ 1.',
          'Sum of probabilities of all mutually exclusive outcomes in S equals 1.'
        ]
      },
      {
        titleAr: '3. تجارب السحب العشوائي والصناديق والبطاقات',
        titleEn: '3. Bag & Card Selection Probability Experiments',
        contentAr: 'في تجارب سحب بطاقة أو كرة عشوائياً من صندوق، يكون فضاء العينة هو العدد الكلي للكرات أو البطاقات. لحساب الاحتمال نحدد عدد الكرات المحققة للشرط ونقسمها على العدد الكلي. وعند السحب "مع الإرجاع" يظل العدد الكلي ثابتاً، بينما في السحب "دون إرجاع" ينقص فضاء العينة بمقدار 1.',
        contentEn: 'Ball and card selection experiments divide favorable target items by total pool count. Sampling with replacement maintains total size; sampling without replacement decrements total items.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: حساب احتمالات سحب كرة عشوائياً من صندوق كرات ملونة',
          titleEn: 'Worked Example 3: Marble Selection Probability from a Mixed Bag',
          equation: 'صندوق يحتوي على: 5 كرات حمراء ، 4 كرات بيضاء ، 3 كرات زرقاء',
          steps: [
            {
              stepNumber: 1,
              textAr: 'العدد الكلي للكرات في الصندوق n(S) = 5 + 4 + 3 = 12 كرة متماثلة.',
              textEn: 'Total marbles n(S) = 5 + 4 + 3 = 12 marbles.',
              noteAr: 'المجموع الكلي = 12 كرة'
            },
            {
              stepNumber: 2,
              textAr: '1) احتمال سحب كرة حمراء: P(حمراء) = 5 / 12. 2) احتمال سحب كرة بيضاء: P(بيضاء) = 4 / 12 = 1/3.',
              textEn: '1) P(Red) = 5/12. 2) P(White) = 4/12 = 1/3.',
              noteAr: 'P(حمراء) = 5/12 • P(بيضاء) = 1/3'
            },
            {
              stepNumber: 3,
              textAr: '3) احتمال سحب كرة (ليست زرقاء): عدد الكرات غير الزرقاء = 5 + 4 = 9 كرات => P(ليست زرقاء) = 9/12 = 3/4 = 75%.',
              textEn: '3) P(Not Blue) = (5 + 4)/12 = 9/12 = 3/4 = 75%.',
              noteAr: 'P(ليست زرقاء) = 3/4'
            }
          ],
          takeawayAr: 'احتمال الحدث المتمم (عدم وقوع الحدث) = 1 - احتمال وقوع الحدث [ P(A\') = 1 - P(A) ].',
          takeawayEn: 'Complementary probability: P(Not A) = 1 - P(A).'
        },
        formativeCheck: {
          id: 'fc-mmath5-3',
          questionAr: 'كيس به 20 بطاقة مرقمة من 1 إلى 20. سُحبت بطاقة عشوائياً، ما احتمال أن تحمل عدداً يقبل القسمة على 5؟',
          questionEn: 'A bag has 20 cards numbered 1 to 20. Probability of drawing a multiple of 5 is:',
          optionsAr: ['1/5 (أو 4/20)', '1/4', '1/2', '3/20'],
          optionsEn: ['1/5 (or 4/20)', '1/4', '1/2', '3/20'],
          correctIndex: 0,
          explanationAr: 'الأعداد التي تقبل القسمة على 5 من 1 إلى 20 هي: {5, 10, 15, 20} وعددهم 4 بطاقات. الاحتمال = 4/20 = 1/5.',
          explanationEn: 'Multiples of 5: {5, 10, 15, 20} => 4 cards => P = 4/20 = 1/5.',
          hintAr: 'مضاعفات العدد 5 بين 1 و 20 هي 5، 10، 15، 20.'
        },
        tipsAr: [
          'احتمال سحب كرة سوداء من الصندوق السابق = 0/12 = 0 (حدث مستحيل لعدم وجود كرات سوداء).',
          'احتمال سحب كرة (حمراء أو بيضاء أو زرقاء) = 12/12 = 1 (حدث مؤكد).'
        ],
        tipsEn: [
          'Drawing a non-existent color yields P = 0 (impossible event).',
          'Drawing any color in the bag yields P = 1 (certain event).'
        ]
      },
      {
        titleAr: '4. تمثيل البيانات والقطاعات الدائرية والتنبؤ الإحصائي',
        titleEn: '4. Data Representation, Pie Charts & Statistical Inferences',
        contentAr: 'تمثل البيانات الإحصائية بيانياً بعدة طرق: الأعمدة البيانية، المدرج التكراري، والمخطط الدائري (القطاعات الدائرية). في القطاعات الدائرية: قياس الزاوية المركزية لأي قطاع = (نسبة أو تكرار الصنف ÷ التكرار الكلي) × 360°. ومجموع الزوايا المركزية لجميع القطاعات في الدائرة يساوي دائماً 360°.',
        contentEn: 'Data is visualized via bar graphs, histograms, and pie charts. Central angle of a sector = (Category Value / Total) × 360°. Total sum of all sector angles in a pie chart is strictly 360°.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: حساب قياس الزاوية المركزية لقطاع دائري يمثل نسبة مئوية',
          titleEn: 'Worked Example 4: Calculating Pie Chart Central Sector Angles',
          equation: 'زاوية القطاع = (النسبة المئوية ÷ 100) × 360°',
          steps: [
            {
              stepNumber: 1,
              textAr: 'إذا كانت نسبة الطلاب الذين يفضلون مادة الرياضيات في مدرسة هي 25% من إجمالي الطلاب.',
              textEn: 'Given: 25% of students prefer Mathematics.',
              noteAr: 'النسبة = 25% = 1/4'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: حساب الزاوية المركزية لقطاع الرياضيات: (25 ÷ 100) × 360° = (1/4) × 360° = 90° (زاوية قائمة تمثل ربع الدائرة).',
              textEn: 'Step 1: Central angle = (25 / 100) × 360° = 90° (Quarter circle).',
              noteAr: 'زاوية قطاع الرياضيات = 90°'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2: إذا كان إجمالي طلاب المدرسة 600 طالب، فإن عدد محبي الرياضيات = 600 × 25% = 150 طالباً.',
              textEn: 'Step 2: Expected student count = 600 × 0.25 = 150 students.',
              noteAr: 'العدد = 150 طالباً'
            }
          ],
          takeawayAr: 'الزاوية المركزية للقطاع تمثل نفس النسبة المئوية من 360 درجة، وتتيح مقارنة البيانات بصرياً بلمحة سريعة.',
          takeawayEn: 'Sector central angle is directly proportional to its percentage share of 360°.'
        },
        formativeCheck: {
          id: 'fc-mmath5-4',
          questionAr: 'قطاع دائري يمثل ثلث (1/3) مساحة الدائرة، فإن قياس زاويته المركزية يساوي:',
          questionEn: 'A sector representing 1/3 of a pie chart has a central angle of:',
          optionsAr: ['120°', '90°', '60°', '180°'],
          optionsEn: ['120°', '90°', '60°', '180°'],
          correctIndex: 0,
          explanationAr: 'قياس الزاوية المركزية = (1/3) × 360° = 120°.',
          explanationEn: 'Central angle = (1/3) × 360° = 120°.',
          hintAr: 'اقسم 360 على 3.'
        },
        tipsAr: [
          'القطاع الذي يمثل 50% قياس زاويته 180° (نصف دائرة).',
          'القطاع الذي يمثل 25% قياس زاويته 90° (ربع دائرة).'
        ],
        tipsEn: [
          'A 50% sector corresponds to a 180° semicircle angle.',
          'A 25% sector corresponds to a 90° right angle.'
        ]
      }
    ],

    conceptMapAr: [
      'مقاييس النزعة المركزية: الوسط (المجموع ÷ العدد) | الوسيط (القيمة الوسطى بعد الترتيب) | المنوال (الأكثر تكراراً)',
      'فضاء العينة: S نواتج التجربة العشوائية',
      'قانون الاحتمال: P(A) = n(A) ÷ n(S) حيث 0 ≤ P ≤ 1',
      'أنواع الأحداث: المؤكد P=1 | المستحيل P=0 | الممكن بين 0 و 1',
      'القطاعات الدائرية: زاوية القطاع = (النسبة ÷ 100) × 360°'
    ],
    conceptMapEn: [
      'Central tendencies: Mean (Sum/Count), Median (Ordered center), Mode (Most frequent)',
      'Sample space S: All possible random experiment outcomes',
      'Probability: P(A) = n(A) / n(S) bounded in [0, 1]',
      'Events: Certain (P=1), Impossible (P=0), Possible (0 < P < 1)',
      'Pie charts: Sector angle = Proportion × 360°'
    ],

    textbookExercises: [
      {
        id: 'ex-mmath5-1',
        questionAr: 'القيم الآتية تمثل درجات 7 طلاب: 12 ، 19 ، 15 ، 12 ، 18 ، 14 ، 15. 1) احسب الوسط الحسابي. 2) احسب الوسيط. 3) اذكر المنوال.',
        questionEn: 'Given scores: 12, 19, 15, 12, 18, 14, 15. Find: 1) Mean  2) Median  3) Mode.',
        solutionStepsAr: [
          '1) الوسط الحسابي = (12 + 19 + 15 + 12 + 18 + 14 + 15) ÷ 7 = 105 ÷ 7 = 15.',
          '2) الترتيب التصاعدي: 12 ، 12 ، 14 ، [15] ، 15 ، 18 ، 19. بما أن عدد القيم 7 (فردي)، فالوسيط هو القيمة الرابعة = 15.',
          '3) المنوال: القيمتان الأكثر تكراراً هما 12 و 15 (تكررت كل منهما مرتين) => المنوال = 12 و 15 (توزيع ثنائي المنوال).'
        ],
        solutionStepsEn: [
          '1) Mean = 105 / 7 = 15.',
          '2) Ordered: 12, 12, 14, [15], 15, 18, 19 => Median = 15.',
          '3) Bimodal dataset: Modes are 12 and 15.'
        ],
        answerAr: 'الوسط الحسابي = 15 • الوسيط = 15 • المنوال = 12 و 15.',
        answerEn: 'Mean = 15 • Median = 15 • Modes = 12 and 15.'
      },
      {
        id: 'ex-mmath5-2',
        questionAr: 'عند إلقاء قطعة نقود معدنية منتظمة مرتين متتاليتين: 1) اكتب فضاء العينة S. 2) ما احتمال الحصول على صورتين؟ 3) ما احتمال الحصول على صورة واحدة على الأقل؟',
        questionEn: 'Tossing a coin twice: 1) State sample space S  2) P(Two Heads)  3) P(At least one Head).',
        solutionStepsAr: [
          '1) فضاء العينة: S = {(H, H), (H, T), (T, H), (T, T)} => عدد النواتج n(S) = 4.',
          '2) حدث الحصول على صورتين: {(H, H)} => الاحتمال = 1/4 = 25%.',
          '3) حدث صورة واحدة على الأقل: {(H, H), (H, T), (T, H)} => الاحتمال = 3/4 = 75%.'
        ],
        solutionStepsEn: [
          '1) S = {(H,H), (H,T), (T,H), (T,T)}, n(S) = 4.',
          '2) P(Two Heads) = 1/4.',
          '3) P(At least one Head) = 3/4.'
        ],
        answerAr: '1) n(S) = 4 نواتج • 2) احتمال صورتين = 1/4 • 3) احتمال صورة على الأقل = 3/4.',
        answerEn: '1) n(S) = 4 • 2) P(Two Heads) = 1/4 • 3) P(At least one Head) = 3/4.'
      },
      {
        id: 'ex-mmath5-3',
        questionAr: 'صندوق به 30 كرة متماثلة مرقمة من 1 إلى 30. سُحبت كرة عشوائياً، احسب احتمال أن يكون الرقم المسجل على الكرة: 1) عدداً مربعاً كاملاً  2) عدداً يقبل القسمة على 3 و 5 معاً.',
        questionEn: 'Bag with 30 marbles numbered 1-30. Find probability of: 1) Perfect square  2) Divisible by both 3 and 5.',
        solutionStepsAr: [
          '1) الأعداد المربعة الكاملة بين 1 و 30 هي: {1, 4, 9, 16, 25} وعددهم 5 كرات => P = 5/30 = 1/6.',
          '2) الأعداد التي تقبل القسمة على 3 و 5 معاً (مضاعفات 15) هي: {15, 30} وعددهم كرتان => P = 2/30 = 1/15.'
        ],
        solutionStepsEn: [
          '1) Perfect squares: {1, 4, 9, 16, 25} => P = 5/30 = 1/6.',
          '2) Multiples of 15: {15, 30} => P = 2/30 = 1/15.'
        ],
        answerAr: '1) احتمال المربع الكامل = 1/6 • 2) احتمال يقبل على 3 و 5 معاً = 1/15.',
        answerEn: '1) P(Square) = 1/6 • 2) P(Divisible by 15) = 1/15.'
      },
      {
        id: 'ex-mmath5-4',
        questionAr: 'إذا كان احتمال فوز فريق في مباراة كرة قدم هو 0.65 ، واحتمال تعادله هو 0.20 . فما هو احتمال خسارته في تلك المباراة؟',
        questionEn: 'If a soccer team winning probability is 0.65 and draw probability is 0.20, what is the losing probability?',
        solutionStepsAr: [
          'مجموع احتمالات نواتج المباراة (فوز + تعادل + خسارة) = 1 صحيح.',
          'احتمال الخسارة = 1 - (احتمال الفوز + احتمال التعادل) = 1 - (0.65 + 0.20) = 1 - 0.85 = 0.15 (أو 15%).'
        ],
        solutionStepsEn: [
          'Sum of probabilities = 1.',
          'P(Loss) = 1 - (0.65 + 0.20) = 1 - 0.85 = 0.15.'
        ],
        answerAr: 'احتمال خسارة الفريق = 0.15 (أو 15%).',
        answerEn: 'Losing probability = 0.15 (15%).'
      }
    ],

    assessment: {
      id: 'quiz-m-math-5',
      lectureId: 'm-math-5',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 5: الإحصاء ومقاييس النزعة المركزية والاحتمال',
      titleEn: 'Mastery Assessment 5: Statistics, Central Tendency & Elementary Probability',
      passingScore: 80,
      questions: [
        {
          id: 'qm5-1',
          textAr: 'الوسيط للقيم: 8 ، 3 ، 5 ، 10 ، 7 هو:',
          textEn: 'The median of values 8, 3, 5, 10, 7 is:',
          optionsAr: ['7', '5', '8', '6.6'],
          optionsEn: ['7', '5', '8', '6.6'],
          correctIndex: 0,
          conceptTestedAr: 'حساب الوسيط بعد الترتيب',
          conceptTestedEn: 'Median computation',
          explanationAr: 'نرتب القيم تصاعدياً: 3 ، 5 ، [7] ، 8 ، 10. القيمة الوسطى هي 7.',
          explanationEn: 'Sorted: 3, 5, [7], 8, 10 => Median is 7.',
          difficulty: 'easy'
        },
        {
          id: 'qm5-2',
          textAr: 'المنوال للقيم: 3 ، 5 ، 7 ، 5 ، 2 ، 5 ، 7 هو:',
          textEn: 'The mode of values 3, 5, 7, 5, 2, 5, 7 is:',
          optionsAr: ['5', '7', '3', 'لا يوجد منوال'],
          optionsEn: ['5', '7', '3', 'No Mode'],
          correctIndex: 0,
          conceptTestedAr: 'إيجاد المنوال',
          conceptTestedEn: 'Finding the Mode',
          explanationAr: 'العدد 5 تكرر 3 مرات وهو الأكثر تكراراً، إذن المنوال = 5.',
          explanationEn: '5 appears 3 times (highest frequency) => Mode = 5.',
          difficulty: 'easy'
        },
        {
          id: 'qm5-3',
          textAr: 'أي من القيم الآتية لا يمكن أن تعبر عن احتمال وقوع حدث؟',
          textEn: 'Which of the following values cannot represent a probability?',
          optionsAr: ['1.25 (أو 125%)', '0.75', '0', '3/5'],
          optionsEn: ['1.25 (or 125%)', '0.75', '0', '3/5'],
          correctIndex: 0,
          conceptTestedAr: 'حدود الاحتمال الرياضي [0, 1]',
          conceptTestedEn: 'Probability Boundaries',
          explanationAr: 'احتمال أي حدث يقع دائماً في الفترة [0, 1]، والعدد 1.25 أكبر من 1 فلا يمكن أن يكون احتمالاً.',
          explanationEn: 'Probability must satisfy 0 ≤ P ≤ 1. Value 1.25 > 1 is invalid.',
          difficulty: 'medium'
        },
        {
          id: 'qm5-4',
          textAr: 'إذا كان احتمال رسوب طالب في امتحان هو 15%، فإن احتمال نجاحه يساوي:',
          textEn: 'If a student failing probability is 15%, the passing probability is:',
          optionsAr: ['85% (أو 0.85)', '15%', '70%', '100%'],
          optionsEn: ['85% (0.85)', '15%', '70%', '100%'],
          correctIndex: 0,
          conceptTestedAr: 'الحدث المتمم',
          conceptTestedEn: 'Complementary Event Probability',
          explanationAr: 'النجاح والرسوب حدثان متتامان: 100% - 15% = 85%.',
          explanationEn: 'Complementary event: 100% - 15% = 85%.',
          difficulty: 'easy'
        },
        {
          id: 'qm5-5',
          textAr: 'إذا كان المنوال للقيم: 4 ، 9 ، x + 2 ، 4 هو 9 ، فإن قيمة x تساوي:',
          textEn: 'If the mode of values 4, 9, x + 2, 4 is 9, then x equals:',
          optionsAr: ['7', '9', '2', '5'],
          optionsEn: ['7', '9', '2', '5'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات المنوال المتقدمة',
          conceptTestedEn: 'Mode inverse algebraic application',
          explanationAr: 'لكي يكون 9 هو المنوال يجب أن يتكرر أكثر من 4 (مرتين على الأقل) => x + 2 = 9 => x = 7.',
          explanationEn: 'x + 2 must equal 9 for 9 to be the mode => x = 7.',
          difficulty: 'hard'
        }
      ]
    }
  }
];
