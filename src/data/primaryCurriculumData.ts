import type { Lecture } from '../types';

// ============================================================================
// 1. PRIMARY MATHEMATICS (رياضيات وحساب المرحلة الابتدائية)
// ============================================================================
export const PRIMARY_MATH_LECTURES: Lecture[] = [
  {
    id: 'pmath-1',
    order: 1,
    titleAr: 'المحاضرة 1: القيمة المنزلية والجمع والطرح مع إعادة التجميع',
    titleEn: 'Lecture 1: Place Value & Addition/Subtraction with Regrouping',
    subtitleAr: 'فهم الآحاد والعشرات والمئات والآلاف، وإتقان الجمع والطرح بإعادة التجميع والحمل',
    subtitleEn: 'Master units, tens, hundreds, and thousands with regrouping algorithms.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الرابع الابتدائي - التعليم الأساسي',
    gradeLevelNameEn: 'Grade 4 Elementary - Primary Education',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: القيمة المنزلية والعمليات الحسابية',
    unitTitleEn: 'Unit 1: Place Value & Arithmetic Operations',
    lessonNumberAr: 'الدرس 1: القيمة المنزلية والجمع بإعادة التجميع',
    lessonNumberEn: 'Lesson 1: Place Value & Addition with Regrouping',

    // Real-world hook
    warmupHookAr: 'تخيل أنك تساعد في إحصاء زوار جناح معرض الكتاب المدرسي؛ حيث بلغ عدد الزوار في اليوم الأول 24,530 زائر، وفي اليوم الثاني 18,745 زائر. كيف نستطيع قراءة هذه الأعداد الكبيرة وكتابتها، ومعرفة إجمالي الزوار بدقة دون أي خطأ؟ هنا تكمن قوة القيمة المنزلية وخوارزمية الجمع بإعادة التجميع!',
    warmupHookEn: 'Imagine helping tally visitors at a book fair: Day 1 had 24,530 visitors and Day 2 had 18,745. How do we accurately read, write, and sum these large numbers without errors? This is where place value and regrouping come in!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'تحديد القيمة المنزلية للأرقام ضمن مئات الألوف بدقة وتسمية منزلة كل رقم',
      'قراءة الأعداد الكبيرة وكتابتها بالصيغ القياسية والتحليلية واللفظية',
      'تنفيذ خوارزمية الجمع الرأسي للأعداد متعددة المنازل بإعادة التجميع (الحمل باليد)',
      'التحقق من صحة ناتج الجمع باستخدام العملية العكسية (الطرح)'
    ],
    learningOutcomesEn: [
      'Identify digit place value up to hundred thousands with precision',
      'Read and write numbers in standard, expanded, and word forms',
      'Execute vertical addition algorithm with regrouping / carrying',
      'Verify addition results using inverse subtraction operations'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'القيمة المنزلية (Place Value)',
        termEn: 'Place Value',
        definitionAr: 'قيمة الرقم بحسب موقعه في منازل العدد (آحاد، عشرات، مئات، ألوف).',
        definitionEn: 'The numerical value a digit holds based on its position in a number.'
      },
      {
        termAr: 'إعادة التجميع (Regrouping)',
        termEn: 'Regrouping',
        definitionAr: 'استبدال 10 وحدات من خانة معينة بوحدة واحدة في الخانة الأعلى المجاورة لها مباشرة (الحمل).',
        definitionEn: 'Exchanging ten units in one place-value column for one unit in the adjacent higher column.'
      },
      {
        termAr: 'الصيغة التحليلية (Expanded Form)',
        termEn: 'Expanded Form',
        definitionAr: 'طريقة لكتابة العدد تُظهر مجموع القيم المنزلية لكل رقم من أرقامه (مثال: 5,000 + 400 + 20).',
        definitionEn: 'Representing a number as the arithmetic sum of the values of each constituent digit.'
      }
    ],

    keyConceptsAr: [
      'تحديد القيمة المنزلية للأرقام (آحاد، عشرات، مئات، ألوف)',
      'الجمع الرأسي مع إعادة التجميع (الحمل باليد)',
      'الطرح مع الاستلاف وإعادة التجميع',
      'التحقق من صحة الجمع باستخدام العملية العكسية (الطرح)'
    ],
    keyConceptsEn: [
      'Place Value Identification (Units, Tens, Hundreds, Thousands)',
      'Vertical Addition with Regrouping / Carrying',
      'Subtraction with Regrouping / Borrowing',
      'Verification via Inverse Subtraction'
    ],
    summaryAr: 'في هذه المحاضرة نتقن قراءة وكتابة الأعداد وتطبيق خوارزمية الجمع الرأسي؛ حيث تكتسب كل خانة وزناً مضاعفاً بعشر مرات عن الخانة السابقة، وإذا زاد المجموع عن 9 نحمل العشرات إلى اليسار فوراً.',
    summaryEn: 'In this lecture, students grasp the decimal place-value system: each column is ten times greater than the column to its right, and carrying ensures precision.',
    sections: [
      {
        titleAr: '1. جدول المنازل وقراءة الأعداد الكبيرة (دورة الآحاد ودورة الألوف)',
        titleEn: '1. Place Value Chart & Reading Large Numbers',
        contentAr: 'يتكون نظامنا العشري من دورات عددية منتظمة؛ كل دورة تضم ثلاثة منازل رئيسية: الآحاد، العشرات، والمئات. دورة الآحاد تشمل الأعداد الأساسية، وتليها إلى اليسار دورة الألوف (آحاد الألوف، عشرات الألوف، مئات الألوف). لقراءة أي عدد، نبدأ من اليسار بالدورة الكبرى ثم نقرأ الدورات الأصغر بالترتيب.',
        contentEn: 'Our decimal system features structured periods of three digits each: units, tens, hundreds. Reading proceeds from the highest period on the left down to the units.',
        diagram: {
          id: 'diag-pmath1-fractions-placevalue',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'النماذج البصرية لتمثيل الأجزاء والكسور والقيمة المكانية للأعداد',
          titleEn: 'Visual Models for Fractions & Place Value Proportions',
          captionAr: 'توضح الدوائر والأشرطة الملونة كيفية تقسيم الكل إلى أجزاء متساوية (النصف، الربع، وثلاثة أرباع)، وكيف تتضاعف قيمة كل خانة عددية بـ 10 أضعاف الخانة السابقة.',
          captionEn: 'Visual fraction circles and bar arrays illustrate dividing wholes into equal fractional components alongside decimal place value scaling.',
          diagramType: 'primary_fractions',
          takeawayFormulaAr: 'الكسر = الجزء / الكل | 1 = 2/2 = 4/4',
          takeawayFormulaEn: 'Fraction = Part / Whole | 1 = 2/2 = 4/4',
          keyLabels: [
            { tagAr: 'نموذج النصف (1/2)', tagEn: 'Half Model (1/2)', descAr: 'جزء واحد من جزأين متساويين', descEn: 'One part of two equal halves' },
            { tagAr: 'نموذج ثلاثة أرباع (3/4)', tagEn: 'Three Quarters (3/4)', descAr: 'ثلاثة أجزاء مظللة من أربعة', descEn: 'Three shaded parts out of four' },
            { tagAr: 'شريط الأجزاء المتساوية', tagEn: 'Fraction Bar Model', descAr: 'المقارنة الخطية بين الأجزاء والكل', descEn: 'Linear part-to-whole visual reference' }
          ]
        },
        formativeCheck: {
          id: 'fc-pmath1-1',
          questionAr: 'ما هي القيمة المنزلية للرقم 5 في العدد 35,420؟',
          questionEn: 'What is the place value of digit 5 in the number 35,420?',
          optionsAr: ['50', '500', '5,000', '50,000'],
          optionsEn: ['50', '500', '5,000', '50,000'],
          correctIndex: 2,
          explanationAr: 'الرقم 5 يقع في خانة أحاد الألوف (دورة الألوف)، لذا قيمته هي 5 × 1,000 = 5,000.',
          explanationEn: 'The digit 5 is in the thousands place, equal to 5,000.',
          hintAr: 'احسب عدد المنازل التي تقع على يمين الرقم 5: هناك 3 أرقام (4، 2، 0).',
          hintEn: 'Count the digits to the right of 5: three digits.'
        },
        tipsAr: ['ضع فاصلاً صغيراً بعد كل 3 أرقام بدءاً من اليمين لتسهيل قراءة الأعداد الكبيرة.'],
        tipsEn: ['Place commas every three digits from the right to read large figures accurately.']
      },
      {
        titleAr: '2. كيف نجمع بإعادة التجميع؟ (الحمل باليد)',
        titleEn: '2. Addition with Regrouping Step-by-Step',
        contentAr: 'عندما نجمع أرقام خانة الآحاد ويكون الناتج 10 أو أكثر، نكتب رقم الآحاد في الأسفل ونرفع العشرات إلى الخانة التالية (الحمل فوق العشرات). لا نضع أبداً رقمين في خانة واحدة.',
        contentEn: 'When the sum in the units place is 10 or higher, write down the unit digit and carry the ten to the next column.',
        interactiveExample: {
          titleAr: 'مثال تفاعلي: جمع 48 + 27',
          titleEn: 'Interactive Example: 48 + 27',
          equation: '48 + 27 = ?',
          steps: [
            { stepNumber: 1, textAr: 'نجمع الآحاد أولاً: 8 + 7 = 15', textEn: 'Add units first: 8 + 7 = 15', noteAr: '15 فيها 5 آحاد و1 عشرة', noteEn: '15 consists of 5 units and 1 ten' },
            { stepNumber: 2, textAr: 'نكتب 5 في ناتج الآحاد، ونحمل (1) فوق خانة العشرات.', textEn: 'Place 5 in units, carry 1 over to tens.', noteAr: 'إعادة التجميع', noteEn: 'Regrouping step' },
            { stepNumber: 3, textAr: 'نجمع العشرات مع المحمول: 1 + 4 + 2 = 7', textEn: 'Add tens with carried ten: 1 + 4 + 2 = 7', noteAr: '7 عشرات', noteEn: '7 tens' },
            { stepNumber: 4, textAr: 'الناتج النهائي: 75', textEn: 'Final total: 75', noteAr: 'التحقق: 75 - 27 = 48 (صحيح)', noteEn: 'Verification: 75 - 27 = 48' }
          ],
          takeawayAr: 'لا نضع أبداً رقمين في خانة واحدة، إذا زاد المجموع عن 9 نحمل العشرات إلى اليسار فوراً.',
          takeawayEn: 'Never place two digits in one column. If sum > 9, carry the excess ten.'
        },
        formativeCheck: {
          id: 'fc-pmath1-2',
          questionAr: 'عند جمع 67 + 25: نجمع 7 + 5 = 12. ماذا نفعل بالرقم 1 في العدد 12؟',
          questionEn: 'When adding 67 + 25: 7 + 5 = 12. What do we do with the 1 in 12?',
          optionsAr: ['نكتب 12 كاملة في خانة الآحاد', 'نحمل 1 كعشرة واحدة فوق خانة العشرات', 'نحذف الرقم 1 ونهمله', 'نطرح 1 من خانة العشرات'],
          optionsEn: ['Write 12 in the units place', 'Carry 1 over to the tens place', 'Discard the 1', 'Subtract 1 from tens'],
          correctIndex: 1,
          explanationAr: 'لأن خانة الآحاد لا تتسع إلا لرقم واحد من 0 إلى 9؛ نكتب 2 في الآحاد ونحمل 1 عشرة فوق خانة العشرات لإضافته مع العشرات.',
          explanationEn: 'Write 2 in units and carry 1 ten to the next column.',
          hintAr: 'تذكر قاعدة إعادة التجميع: 10 آحاد تكوّن عشرة واحدة تضاف لخانة العشرات.',
          hintEn: '10 units equal 1 ten carried over.'
        },
        tipsAr: ['رتب الأرقام رأسياً: الآحاد تحت الآحاد والعشرات تحت العشرات بدقة.', 'ابدأ الجمع دائماً من اليمين (الآحاد) أولاً.'],
        tipsEn: ['Always align columns vertically.', 'Start calculation strictly from right to left.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'دورة الآحاد: تتكون من (آحاد، عشرات، مئات)',
      'دورة الألوف: تتكون من (أحاد الألوف، عشرات الألوف، مئات الألوف)',
      'خوارزمية الجمع 1: رتب الأعداد رأسياً مع محاذاة المنازل بدقة',
      'خوارزمية الجمع 2: ابدأ الجمع من اليمين (خانة الآحاد)',
      'خوارزمية الجمع 3: إذا كان المجموع 10 أو أكثر، أعد التجميع بحمل العشرات للخانة التالية',
      'خطوة التحقق: اطرح أحد العددين من المجموع للتأكد من صحة الحل'
    ],
    conceptMapEn: [
      'Units Period: Units, Tens, Hundreds',
      'Thousands Period: 1,000s, 10,000s, 100,000s',
      'Rule 1: Align digits vertically by place value',
      'Rule 2: Begin calculation from the rightmost column',
      'Rule 3: Carry 10-unit multiples to the adjacent left column',
      'Verification: Subtract one addend from the total to confirm'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-pmath1-1',
        questionAr: 'أوجد ناتج الجمع رأسياً مع ذكر خطوات إعادة التجميع: 4,528 + 3,745',
        questionEn: 'Calculate the vertical sum with regrouping: 4,528 + 3,745',
        solutionStepsAr: [
          'جمع الآحاد: 8 + 5 = 13 (نكتب 3 في الآحاد ونحمل 1 فوق العشرات)',
          'جمع العشرات: 1 (محمول) + 2 + 4 = 7 عشرات',
          'جمع المئات: 5 + 7 = 12 (نكتب 2 في المئات ونحمل 1 فوق الألوف)',
          'جمع الألوف: 1 (محمول) + 4 + 3 = 8 ألوف'
        ],
        solutionStepsEn: [
          'Add units: 8 + 5 = 13 (write 3, carry 1 to tens)',
          'Add tens: 1 + 2 + 4 = 7 tens',
          'Add hundreds: 5 + 7 = 12 (write 2, carry 1 to thousands)',
          'Add thousands: 1 + 4 + 3 = 8 thousands'
        ],
        answerAr: 'الناتج النهائي المعتمد: 8,273',
        answerEn: 'Total: 8,273'
      },
      {
        id: 'ex-pmath1-2',
        questionAr: 'مسألة تطبيقية من واقع الحياة: تبرعت مدرسة بـ 1,850 كتاباً لمكتبة الحي، وتبرعت مدرسة أخرى بـ 2,475 كتاباً. ما إجمالي عدد الكتب المتبرع بها؟',
        questionEn: 'A school donated 1,850 books, and another donated 2,475 books. What is the total donated?',
        solutionStepsAr: [
          'كتابة جملة الجمع: 1,850 + 2,475',
          'جمع الآحاد: 0 + 5 = 5',
          'جمع العشرات: 5 + 7 = 12 (نكتب 2 ونحمل 1)',
          'جمع المئات: 1 + 8 + 4 = 13 (نكتب 3 ونحمل 1)',
          'جمع الألوف: 1 + 1 + 2 = 4'
        ],
        solutionStepsEn: [
          'Set up equation: 1,850 + 2,475',
          'Units: 0 + 5 = 5',
          'Tens: 5 + 7 = 12 (write 2, carry 1)',
          'Hundreds: 1 + 8 + 4 = 13 (write 3, carry 1)',
          'Thousands: 1 + 1 + 2 = 4'
        ],
        answerAr: 'إجمالي الكتب المتبرع بها: 4,325 كتاباً',
        answerEn: 'Total books: 4,325'
      }
    ],
    assessment: {
      id: 'quiz-pmath-1',
      lectureId: 'pmath-1',
      titleAr: 'الاختبار الإلزامي: القيمة المنزلية والجمع',
      titleEn: 'Lecture 1 Assessment: Place Value & Addition',
      passingScore: 80,
      questions: [
        {
          id: 'qpmath1-1',
          textAr: 'ما هي القيمة المنزلية للرقم 7 في العدد 4,720؟',
          textEn: 'What is the place value of digit 7 in the number 4,720?',
          optionsAr: ['7', '70', '700', '7000'],
          optionsEn: ['7', '70', '700', '7000'],
          correctIndex: 2,
          conceptTestedAr: 'تحديد القيمة المكانية للمئات',
          conceptTestedEn: 'Hundreds place value identification',
          explanationAr: 'الرقم 7 يقع في خانة المئات، وقيمته هي 7 × 100 = 700.',
          explanationEn: 'The digit 7 is located in the hundreds column, equal to 700.',
          difficulty: 'easy'
        },
        {
          id: 'qpmath1-2',
          textAr: 'ما ناتج جمع: 56 + 38؟',
          textEn: 'What is the sum of: 56 + 38?',
          optionsAr: ['84', '94', '92', '88'],
          optionsEn: ['84', '94', '92', '88'],
          correctIndex: 1,
          conceptTestedAr: 'الجمع بإعادة التجميع',
          conceptTestedEn: 'Addition with regrouping',
          explanationAr: 'نجمع الآحاد 6 + 8 = 14 (نكتب 4 ونرفع 1)، ثم العشرات 1 + 5 + 3 = 9، فيكون الناتج 94.',
          explanationEn: '6 + 8 = 14 (write 4 carry 1), tens: 1 + 5 + 3 = 9, sum is 94.',
          difficulty: 'medium'
        },
        {
          id: 'qpmath1-3',
          textAr: 'اشترى أحمد كتاباً بـ 35 ريالاً وحقيبة بـ 45 ريالاً، كم دفع في المجموع؟',
          textEn: 'Ahmed bought a book for 35 SAR and a bag for 45 SAR. What is the total paid?',
          optionsAr: ['70 ريالاً', '80 ريالاً', '75 ريالاً', '90 ريالاً'],
          optionsEn: ['70 SAR', '80 SAR', '75 SAR', '90 SAR'],
          correctIndex: 1,
          conceptTestedAr: 'تطبيق الجمع في المسائل الحياتية',
          conceptTestedEn: 'Real-world application of addition',
          explanationAr: '35 + 45 = (30 + 40) + (5 + 5) = 70 + 10 = 80 ريالاً.',
          explanationEn: '35 + 45 = 80 SAR total.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'pmath-2',
    order: 2,
    titleAr: 'المحاضرة 2: جدول الضرب ومفهوم الضرب كجمع متكرر',
    titleEn: 'Lecture 2: Multiplication Table & Repeated Addition',
    subtitleAr: 'اكتشاف أن الضرب هو جمع متكرر، وحفظ وفهم جداول الضرب بطرق ذهنية ذكية',
    subtitleEn: 'Understand multiplication as repeated addition and pattern discovery.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'مفهوم الضرب: عدد المجموعات × عدد العناصر في كل مجموعة',
      'خاصية الإبدال في الضرب (3 × 4 = 4 × 3)',
      'الضرب في الصفر والواحد (المحايد الضربي)',
      'أنماط جداول الضرب (2، 5، 10)'
    ],
    keyConceptsEn: [
      'Multiplication as Groups × Items',
      'Commutative Property of Multiplication',
      'Zero and Identity Properties',
      'Multiplication Patterns (2, 5, 10)'
    ],
    summaryAr: 'الضرب هو طريقة سريعة ومختصرة لجمع نفس العدد عدة مرات. فبدلاً من أن نجمع 5 + 5 + 5 + 5، نقول ببساطة: 4 مجموعات في كل منها 5، أي 4 × 5 = 20.',
    summaryEn: 'Multiplication is an efficient shortcut for repeated addition of identical quantities.',
    sections: [
      {
        titleAr: '1. كيف يعمل الضرب كجمع متكرر؟',
        titleEn: '1. Multiplication Mechanism',
        contentAr: 'إذا كان لديك 3 أطباق، وفي كل طبق 4 تفاحات، فإن مجموع التفاح هو: 4 + 4 + 4 = 12، وبالضرب نكتبها: 3 × 4 = 12 تفاحة.',
        contentEn: '3 plates with 4 apples each equals 4 + 4 + 4 = 12, or 3 × 4 = 12 apples.',
        interactiveExample: {
          titleAr: 'تطبيق: خاصية الإبدال',
          titleEn: 'Interactive Example: Commutative Property',
          equation: '6 × 4 = 4 × 6 = 24',
          steps: [
            { stepNumber: 1, textAr: '6 مجموعات من 4 عناصر = 4 + 4 + 4 + 4 + 4 + 4 = 24', textEn: '6 groups of 4 = 24', noteAr: 'التكرار الأول', noteEn: 'Form 1' },
            { stepNumber: 2, textAr: '4 مجموعات من 6 عناصر = 6 + 6 + 6 + 6 = 24', textEn: '4 groups of 6 = 24', noteAr: 'التكرار الثاني', noteEn: 'Form 2' },
            { stepNumber: 3, textAr: 'النتيجة متطابقة دائماً: تبديل ترتيب الأعداد لا يغير حاصل الضرب!', textEn: 'Result identical: Order does not affect product.', noteAr: 'خاصية الإبدال الذهبية', noteEn: 'Commutative rule' }
          ],
          takeawayAr: 'إذا نسيت حاصل 7 × 3، يمكنك التفكير في 3 × 7؛ فالإجابة واحدة (21).',
          takeawayEn: 'Order of factors does not alter the product.'
        },
        tipsAr: ['أي عدد تضربه في صفر يساوي صفراً دائماً (5 × 0 = 0).', 'أي عدد تضربه في 1 يبقى كما هو (8 × 1 = 8).'],
        tipsEn: ['Any number multiplied by 0 equals 0.', 'Multiplying by 1 preserves the number.']
      }
    ],
    assessment: {
      id: 'quiz-pmath-2',
      lectureId: 'pmath-2',
      titleAr: 'الاختبار الإلزامي: جدول الضرب والأنماط',
      titleEn: 'Lecture 2 Assessment: Multiplication Patterns',
      passingScore: 80,
      questions: [
        {
          id: 'qpmath2-1',
          textAr: 'ما هي الجملة المكافئة للجمع المتكرر: 7 + 7 + 7 + 7؟',
          textEn: 'Which multiplication expression equals: 7 + 7 + 7 + 7?',
          optionsAr: ['4 × 7', '7 × 7', '3 × 7', '4 + 7'],
          optionsEn: ['4 × 7', '7 × 7', '3 × 7', '4 + 7'],
          correctIndex: 0,
          conceptTestedAr: 'الضرب كجمع متكرر',
          conceptTestedEn: 'Repeated addition equivalence',
          explanationAr: 'العدد 7 تكرر 4 مرات، إذن التعبير المكافئ هو 4 × 7 = 28.',
          explanationEn: 'The number 7 is repeated 4 times, which is 4 × 7 = 28.',
          difficulty: 'easy'
        },
        {
          id: 'qpmath2-2',
          textAr: 'كم حاصل ضرب: 8 × 6؟',
          textEn: 'What is 8 × 6?',
          optionsAr: ['42', '46', '48', '54'],
          optionsEn: ['42', '46', '48', '54'],
          correctIndex: 2,
          conceptTestedAr: 'حقائق جدول الضرب',
          conceptTestedEn: 'Multiplication facts',
          explanationAr: '8 × 6 = 48 (ويمكن حسابها كـ 8 × 5 = 40، ثم إضافة 8 فنحصل على 48).',
          explanationEn: '8 × 6 = 48.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'pmath-3',
    order: 3,
    titleAr: 'المحاضرة 3: مفهوم القسمة وتوزيع الحصص بالتساوي',
    titleEn: 'Lecture 3: Division Concept & Equal Sharing',
    subtitleAr: 'فهم العلاقة العكسية بين الضرب والقسمة، وتوزيع المقادير على المجموعات بالتساوي',
    subtitleEn: 'Understand division as equal distribution and inverse of multiplication.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['القسمة تعني التوزيع بالتساوي', 'أركان جملة القسمة: المقسوم ÷ المقسوم عليه = ناتج القسمة', 'العلاقة العكسية بين الضرب والقسمة', 'القسمة مع وجود باقٍ مبسط'],
    keyConceptsEn: ['Division as Equal Sharing', 'Dividend, Divisor, and Quotient', 'Inverse Relationship with Multiplication', 'Remainders in Division'],
    summaryAr: 'القسمة هي العملية المعاكسة للضرب؛ فإذا كان الضرب يعني تجميع أشياء متساوية، فالقسمة تعني تفريقها وتوزيعها بالتساوي على مجموعات دون تمييز.',
    summaryEn: 'Division is the inverse of multiplication, partitioning amounts into equal shares.',
    sections: [
      {
        titleAr: '1. توزيع 15 قطعة حلوى على 3 أطفال',
        titleEn: '1. Sharing 15 Candies Among 3 Children',
        contentAr: 'لإعطاء كل طفل نفس النصيب بالضبط، نسأل أنفسنا: ما هو العدد الذي إذا ضربناه في 3 يعطينا 15؟ الجواب هو 5، إذن 15 ÷ 3 = 5 قطع لكل طفل.',
        contentEn: 'To distribute 15 items equally to 3 students, we solve 3 × ? = 15. The answer is 5.',
        interactiveExample: {
          titleAr: 'تطبيق: عائلة الحقائق (Fact Family)',
          titleEn: 'Worked Example: Fact Families',
          equation: '4 × 5 = 20  <--->  20 ÷ 5 = 4',
          steps: [
            { stepNumber: 1, textAr: '4 × 5 = 20 (أربع مجموعات في كل منها 5)', textEn: '4 × 5 = 20', noteAr: 'حقيقة ضرب', noteEn: 'Multiplication fact' },
            { stepNumber: 2, textAr: '20 ÷ 5 = 4 (عشرون مقسمة على مجموعات خماسية)', textEn: '20 ÷ 5 = 4', noteAr: 'حقيقة قسمة', noteEn: 'Division fact' },
            { stepNumber: 3, textAr: '20 ÷ 4 = 5 (عشرون مقسمة على 4 أطفال)', textEn: '20 ÷ 4 = 5', noteAr: 'حقيقة قسمة ثانية', noteEn: 'Second division fact' }
          ],
          takeawayAr: 'كل جملة ضرب واحدة تساعدك على حل مسألتي قسمة مباشرة!',
          takeawayEn: 'Each multiplication equation gives two inverse division equations.'
        },
        tipsAr: ['لا يمكن أبداً القسمة على الصفر في الرياضيات.', 'إذا كان المقسوم يساوي المقسوم عليه فإن الناتج دائماً 1 (7 ÷ 7 = 1).'],
        tipsEn: ['Division by zero is undefined.', 'Any number divided by itself equals 1.']
      }
    ],
    assessment: {
      id: 'quiz-pmath-3',
      lectureId: 'pmath-3',
      titleAr: 'الاختبار الإلزامي: القسمة العادلة',
      titleEn: 'Lecture 3 Assessment: Equal Sharing',
      passingScore: 80,
      questions: [
        {
          id: 'qpmath3-1',
          textAr: 'وزع معلم 24 قلماً على 6 طلاب بالتساوي، كم قلماً أخذ كل طالب؟',
          textEn: 'A teacher distributed 24 pencils equally to 6 students. How many pencils each?',
          optionsAr: ['3 أقلام', '4 أقلام', '5 أقلام', '6 أقلام'],
          optionsEn: ['3 pencils', '4 pencils', '5 pencils', '6 pencils'],
          correctIndex: 1,
          conceptTestedAr: 'حل مسائل القسمة اللفظية',
          conceptTestedEn: 'Word problem division',
          explanationAr: '24 ÷ 6 = 4 أقلام، لأن 4 × 6 = 24.',
          explanationEn: '24 ÷ 6 = 4 because 4 × 6 = 24.',
          difficulty: 'easy'
        },
        {
          id: 'qpmath3-2',
          textAr: 'ما ناتج عملية القسمة: 36 ÷ 9؟',
          textEn: 'What is 36 ÷ 9?',
          optionsAr: ['3', '4', '5', '6'],
          optionsEn: ['3', '4', '5', '6'],
          correctIndex: 1,
          conceptTestedAr: 'حقائق القسمة المترابطة بالضرب',
          conceptTestedEn: 'Basic division facts',
          explanationAr: 'العدد الذي نضربه في 9 ليعطي 36 هو 4، إذن 36 ÷ 9 = 4.',
          explanationEn: '4 × 9 = 36, hence 36 ÷ 9 = 4.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'pmath-4',
    order: 4,
    titleAr: 'المحاضرة 4: مدخل إلى الكسور الاعتيادية (النصف والربع والثلث)',
    titleEn: 'Lecture 4: Introduction to Fractions (Half, Quarter, Third)',
    subtitleAr: 'التعرف على الكسر كجزء من كل، وكتابة البسط والمقام وقراءة النصف والربع والثلث',
    subtitleEn: 'Understand numerator, denominator, and visual representation of fractions.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['الكسر يمثل جزءاً من الكل المقسم بالتساوي', 'البسط (العدد العلوي): عدد الأجزاء الملونة أو المأخوذة', 'المقام (العدد السفلي): العدد الإجمالي لكل الأجزاء المتساوية', 'الكسور الشائعة: 1/2 (نصف)، 1/4 (ربع)، 1/3 (ثلث)'],
    keyConceptsEn: ['Fraction as Part of an Equal Whole', 'Numerator (Top part)', 'Denominator (Total equal parts)', 'Common Fractions: 1/2, 1/4, 1/3'],
    summaryAr: 'عندما نقسم فطيرة بيتزا دائرية إلى 4 قطع متطابقة تماماً، ونأكل قطعة واحدة منها، فإننا نكون قد أكلنا ربع الفطيرة، ونكتب ذلك رياضياً: 1/4.',
    summaryEn: 'When dividing a whole into equal parts, fractions describe the ratio of parts taken to total parts.',
    sections: [
      {
        titleAr: '1. تشريح الكسر: البسط والمقام',
        titleEn: '1. Numerator vs Denominator',
        contentAr: 'الكسر يتكون من رقمين يفصل بينهما خط الكسر: الرقم العلوي يسمى (البسط) ويدل على الأجزاء المختارة، والرقم السفلي يسمى (المقام) ويدل على جميع الأجزاء المتساوية.',
        contentEn: 'The numerator on top shows selected pieces; the denominator on bottom shows total equal parts.',
        interactiveExample: {
          titleAr: 'تطبيق: تمثيل النصف 1/2',
          titleEn: 'Visual Example: One Half 1/2',
          equation: '1 / 2 = نصف الشكل',
          steps: [
            { stepNumber: 1, textAr: 'قسمنا شكلاً هندسياً إلى جزأين متطابقين تماماً (المقام = 2).', textEn: 'Divide a shape into 2 equal parts (Denominator = 2).', noteAr: 'الكل', noteEn: 'The whole' },
            { stepNumber: 2, textAr: 'لونا جزءاً واحداً فقط باللون الأزرق (البسط = 1).', textEn: 'Color 1 part blue (Numerator = 1).', noteAr: 'الجزء', noteEn: 'Selected part' },
            { stepNumber: 3, textAr: 'الكسر المعبر عن الجزء الملون هو: 1/2 (يُقرأ: نصف).', textEn: 'Fraction is 1/2 (read: one half).', noteAr: 'الكسر المكتمل', noteEn: 'Completed fraction' }
          ],
          takeawayAr: 'شرط الكسر الأساسي هو أن تكون جميع الأجزاء متساوية تماماً في الحجم دون أي تفاوت.',
          takeawayEn: 'Equal partition is mandatory for valid fractional representation.'
        },
        tipsAr: ['كلما كبر المقام، صغر حجم القطعة (ربع البيتزا أصغر من نصف البيتزا!).', 'إذا تساوى البسط والمقام (مثل 4/4) فإن القيمة تساوي 1 كامل.'],
        tipsEn: ['Larger denominator means smaller individual pieces.', 'When numerator equals denominator (e.g. 4/4), it equals 1 whole.']
      }
    ],
    assessment: {
      id: 'quiz-pmath-4',
      lectureId: 'pmath-4',
      titleAr: 'الاختبار الإلزامي: تمثيل وقراءة الكسور',
      titleEn: 'Lecture 4 Assessment: Fractions',
      passingScore: 80,
      questions: [
        {
          id: 'qpmath4-1',
          textAr: 'رغيف خبز قسمناه إلى 4 أجزاء متساوية وأكلنا جزءاً واحداً، ما الكسر الذي يمثل ما أكلناه؟',
          textEn: 'A bread loaf was cut into 4 equal slices and 1 slice was eaten. What fraction was eaten?',
          optionsAr: ['1/2 (نصف)', '1/4 (ربع)', '1/3 (ثلث)', '3/4 (ثلاثة أرباع)'],
          optionsEn: ['1/2 (Half)', '1/4 (Quarter)', '1/3 (Third)', '3/4 (Three quarters)'],
          correctIndex: 1,
          conceptTestedAr: 'قراءة وتمثيل الربع',
          conceptTestedEn: 'Representing one quarter',
          explanationAr: 'جزء واحد مأخوذ من أصل 4 أجزاء متساوية يكتب: 1/4 (ربع).',
          explanationEn: '1 slice out of 4 equal parts is 1/4.',
          difficulty: 'easy'
        },
        {
          id: 'qpmath4-2',
          textAr: 'في الكسر 3/5، ماذا نسمي الرقم 5 في الأسفل؟',
          textEn: 'In the fraction 3/5, what do we call the bottom number 5?',
          optionsAr: ['البسط', 'المقام', 'المجموع', 'الناتج'],
          optionsEn: ['Numerator', 'Denominator', 'Sum', 'Quotient'],
          correctIndex: 1,
          conceptTestedAr: 'مسميات أركان الكسر',
          conceptTestedEn: 'Fraction terminology',
          explanationAr: 'الرقم السفلي في أي كسر يسمى (المقام) ويمثل العدد الكلي للأجزاء المتساوية.',
          explanationEn: 'The bottom number is the denominator.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

// ============================================================================
// 2. PRIMARY ARABIC (اللغة العربية - لغتي الجميلة - ابتدائي)
// ============================================================================
export const PRIMARY_ARABIC_LECTURES: Lecture[] = [
  {
    id: 'parb-1',
    order: 1,
    titleAr: 'المحاضرة 1: مهارات القراءة والتمييز بين اللام الشمسية واللام القمرية',
    titleEn: 'Lecture 1: Solar vs Lunar Lam (الـ الشمسية والـ القمرية)',
    subtitleAr: 'قواعد النطق السليم لـ (الـ)، ومعرفة الحروف الشمسية المشددة والحروف القمرية الساكنة',
    subtitleEn: 'Master phonetic rules of Arabic definite article: Solar and Lunar letters.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'المرحلة الابتدائية - مهارات اللغة العربية',
    gradeLevelNameEn: 'Elementary School - Arabic Language Skills',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: مهارات وقواعد اللغة العربية',
    unitTitleEn: 'Unit 1: Arabic Grammar & Reading Foundations',
    lessonNumberAr: 'الدرس 1: مهارات القراءة والتمييز بين اللامين',
    lessonNumberEn: 'Lesson 1: Reading Skills & Definite Articles',

    // Real-world hook
    warmupHookAr: 'عندما نقرأ في الصباح الباكر: "أشرقتِ الشَّمْسُ، واختفى الْقَمَرُ"، نلاحظ نطقاً سحرياً ممتعاً في لساننا العربي؛ فكلمة (الْقَمَر) نطقنا لامها صريحة كالجرس الصافي، بينما كلمة (الشَّمْس) انزلقت شفاهنا مباشرة إلى الشين المشددة واختفى صوت اللام تماماً! لماذا حدث هذا العزف الصوتي الفريد؟ هذا هو سر اللام الشمسية واللام القمرية!',
    warmupHookEn: 'Notice how when we say "Al-Qamar" the Lam is distinct and clear, but in "Ash-Shams" the Lam melts silently into the doubled letter Sh! This acoustic harmony is the foundation of Solar and Lunar letters.',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يميّز الطالب بدقة بين اللام الشمسية واللام القمرية نطقاً وكتابة',
      'أن يستخرج الحروف القمرية الـ 14 من العبارة المأثورة (ابغِ حجك وخف عقيمه)',
      'أن يقرأ الكلمات المبدوءة بـ (الـ) قراءة جهرية معبرة مراعياً الشدة والسكون',
      'أن يكتب الكلمات الشمسية والقمرية غيباً دون خطأ إملائي'
    ],
    learningOutcomesEn: [
      'Distinguish Solar and Lunar Lam in reading and writing with precision',
      'Identify the 14 Lunar letters using standard grammatical mnemonics',
      'Read words starting with the definite article with appropriate phonetics',
      'Spell words containing Solar and Lunar articles accurately'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'اللام القمرية (Lunar Lam)',
        termEn: 'Lunar Lam',
        definitionAr: 'لام ساكنة تُكتب وتُنطق بوضوح عند دخولها على أحد الحروف القمرية الأربعة عشر (ابغِ حجك وخف عقيمه).',
        definitionEn: 'Definite article Lam that is written and clearly pronounced with Sukun.'
      },
      {
        termAr: 'اللام الشمسية (Solar Lam)',
        termEn: 'Solar Lam',
        definitionAr: 'لام تُكتب ولا تُنطق، ويُدغم صوتها في الحرف الشمسي التالي لها ويُوضع عليه شدّة.',
        definitionEn: 'Definite article Lam that is written but assimilated into the subsequent consonant with Shaddah.'
      },
      {
        termAr: 'الشَّدَّة (Shaddah)',
        termEn: 'Shaddah',
        definitionAr: 'علامة تدل على تكرار الحرف مرتين؛ الأول ساكن والثاني متحرك، فيدغمان معاً.',
        definitionEn: 'Diacritical sign indicating a doubled/geminated consonant.'
      }
    ],

    keyConceptsAr: [
      'اللام القمرية: تُكتب وتُنطق وتكون ساكنة (الْـ)',
      'اللام الشمسية: تُكتب ولا تُنطق ويأتي الحرف بعدها مشدداً',
      'حروف اللام القمرية الـ 14 مجموعة في: (ابغِ حجك وخف عقيمه)',
      'تطبيق النطق الصحيح في القراءة الجهورية'
    ],
    keyConceptsEn: [
      'Lunar Lam: Written and explicitly pronounced with Sukun',
      'Solar Lam: Written but silent, followed by Shaddah',
      '14 Lunar letters mnemonic',
      'Oral reading fluency'
    ],
    summaryAr: 'تتصل (الـ التعريف) بأول الأسماء؛ فإذا نطقت اللام بوضوح مثل (الْقَمَر، الْكِتَاب) فهي لام قمرية، وإذا أُدغمت ولم تُنطق مع تشديد الحرف التالي مثل (الشَّمْس، التِّين) فهي لام شمسية.',
    summaryEn: 'The Arabic definite article behaves differently: Lunar Lam is voiced, while Solar Lam assimilates into the following consonant with a Shaddah.',
    sections: [
      {
        titleAr: '1. كيف تميز فوراً بين اللامين؟ سر حركة اللسان والشدة',
        titleEn: '1. Immediate Identification Rule',
        contentAr: 'أنصت لصوت اللسان عند القراءة: في اللام القمرية يلمس طرف لسانك سقف الحلق وتسمع صوت اللام نقياً (الْـ مَدْرَسَة). أما في الشمسية فيقفز لسانك مباشرة إلى الحرف التالي دون نطق اللام (الصَّـبَاح). وعلامتها في الكتابة: وجود الشدة فوق الحرف الذي يلي اللام مباشرة.',
        contentEn: 'Listen to pronunciation: Lunar Lam sounds clearly (Al-Madrasah), while Solar Lam skips directly to the emphasized consonant (As-Sabah).',
        interactiveExample: {
          titleAr: 'مقارنة نطقية عملية',
          titleEn: 'Phonetic Comparison',
          equation: 'الْقَمَر (قمرية)  مقابل  الشَّمْس (شمسية)',
          steps: [
            { stepNumber: 1, textAr: 'كلمة "الْبَاب": ننطق اللام واضحة (الْـ بَاب) -> لام قمرية.', textEn: 'Al-Bab: Lam clearly voiced -> Lunar.', noteAr: 'تُكتب وتُنطق', noteEn: 'Written & spoken' },
            { stepNumber: 2, textAr: 'كلمة "السَّيَّارَة": لا ننطق اللام ونشدد السين (أسْـ سَيَّارَة) -> لام شمسية.', textEn: 'As-Sayyara: Lam skipped, Seen doubled -> Solar.', noteAr: 'تُكتب ولا تُنطق', noteEn: 'Written, not spoken' }
          ],
          takeawayAr: 'السر الذكي: وجود الشدة بعد (الـ) يعني دائماً أنها لام شمسية!',
          takeawayEn: 'Presence of a Shaddah immediately after Al- indicates a Solar Lam.'
        },
        formativeCheck: {
          id: 'fc-parb1-1',
          questionAr: 'أي من الكلمات التالية تحتوي على "لام شمسية"؟',
          questionEn: 'Which of the following words contains a "Solar Lam"?',
          optionsAr: ['الْمَدْرَسَة', 'الصِّدْق', 'الْكِتَاب', 'الْحَدِيقَة'],
          optionsEn: ['Al-Madrasah', 'As-Sidq', 'Al-Kitab', 'Al-Hadeeqah'],
          correctIndex: 1,
          explanationAr: 'كلمة "الصِّدْق" لامها شمسية تُكتب ولا تُنطق، وحرف الصاد بعدها مشدد.',
          explanationEn: 'As-Sidq has a silent Lam followed by a doubled Saad.',
          hintAr: 'انتبه لوجود الشدة فوق الحرف الذي يلي اللام مباشرة.',
          hintEn: 'Look for the Shaddah directly after the Lam.'
        },
        tipsAr: ['احفظ الجملة السحرية لحروف القمرية: (ابغِ حجك وخف عقيمه).', 'اللام القمرية فوقها سكون دائري ظاهر دائماً في المصحف والكتب.'],
        tipsEn: ['Remember the lunar letters mnemonic.', 'Lunar Lam carries a visible Sukun.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'اللام القمرية: تُكتب وتُنطق، وتتميز بسكون ظاهر (الْـ) فوق اللام',
      'حروف اللام القمرية الـ 14: (ا، ب، غ، ح، ج، ك، و، خ، ف، ع، ق، ي، م، هـ)',
      'اللام الشمسية: تُكتب ولا تُنطق، وتتميز بالشدة ( ّ ) على الحرف التالي',
      'حروف اللام الشمسية الـ 14: (ت، ث، د، ذ، ر، ز، س، ش، ص، ض، ط، ظ، ل، ن)',
      'القاعدة الذهبية: الشدة بعد اللام = شمسية فوراً'
    ],
    conceptMapEn: [
      'Lunar Lam: Written and voiced, marked by Sukun',
      '14 Lunar Consonants (Abghi Hajjaka wa Khaf Aqimah)',
      'Solar Lam: Written and silent, followed by Shaddah',
      '14 Solar Consonants (T, Th, D, Dh, R, Z, S, Sh, S, D, T, Z, L, N)'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-parb1-1',
        questionAr: 'صنّف الكلمات التالية إلى (شمسية) و(قمرية) مع ذكر السبب: [الطَّالِب، الْقَلَم، النَّجْم، الْفَصْل]',
        questionEn: 'Classify words into Solar and Lunar with explanation',
        solutionStepsAr: [
          'الطَّالِب: شمسية (اللام لا تُنطق، وحرف الطاء مشدد)',
          'الْقَلَم: قمرية (اللام تُنطق وعليها سكون، وحرف القاف من حروف ابغ حجك وخف عقيمه)',
          'النَّجْم: شمسية (اللام مدغمة لا تُنطق، والنون مشددة)',
          'الْفَصْل: قمرية (اللام تُنطق وعليها سكون، والفاء حرف قمري)'
        ],
        solutionStepsEn: [
          'At-Talib: Solar (silent Lam, Ta with Shaddah)',
          'Al-Qalam: Lunar (voiced Lam with Sukun)',
          'An-Najm: Solar (silent Lam, Noon with Shaddah)',
          'Al-Fasl: Lunar (voiced Lam, Faa is lunar)'
        ],
        answerAr: 'الكلمات الشمسية: (الطالب، النجم) • الكلمات القمرية: (القلم، الفصل)',
        answerEn: 'Solar: (At-Talib, An-Najm) • Lunar: (Al-Qalam, Al-Fasl)'
      }
    ],
    assessment: {
      id: 'quiz-parb-1',
      lectureId: 'parb-1',
      titleAr: 'الاختبار الإلزامي: اللام الشمسية واللام القمرية',
      titleEn: 'Lecture 1 Assessment: Solar & Lunar Lam',
      passingScore: 80,
      questions: [
        {
          id: 'qparb1-1',
          textAr: 'أي من الكلمات التالية تحتوي على "لام شمسية"؟',
          textEn: 'Which of the following words contains a "Solar Lam"?',
          optionsAr: ['الْقَلَم', 'الْبَيْت', 'التُّفَّاح', 'الْمَسْجِد'],
          optionsEn: ['Al-Qalam', 'Al-Bayt', 'At-Tuffah', 'Al-Masjid'],
          correctIndex: 2,
          conceptTestedAr: 'تمييز اللام الشمسية',
          conceptTestedEn: 'Solar Lam identification',
          explanationAr: 'كلمة "التُّفَّاح" لامها شمسية تُكتب ولا تُنطق، وحرف التاء بعدها مشدد.',
          explanationEn: 'At-Tuffah has a silent Lam with Shaddah on Taa.',
          difficulty: 'easy'
        },
        {
          id: 'qparb1-2',
          textAr: 'ما حكم اللام في كلمة "الْعِلْم"؟',
          textEn: 'What is the type of Lam in "Al-Ilm" (knowledge)?',
          optionsAr: ['لام قمرية تُكتب وتُنطق', 'لام شمسية تُكتب ولا تُنطق', 'حرف أصلي ليس للتعريف', 'لام مكسورة'],
          optionsEn: ['Lunar Lam: written and spoken', 'Solar Lam: written not spoken', 'Root letter', 'Kasra Lam'],
          correctIndex: 0,
          conceptTestedAr: 'قواعد اللام القمرية',
          conceptTestedEn: 'Lunar Lam rules',
          explanationAr: 'اللام في "الْعِلْم" قمرية لأنها تُنطق ساكنة، وحرف العين من حروف (ابغ حجك وخف عقيمه).',
          explanationEn: 'In Al-Ilm, Lam is voiced, followed by Ayn which is a lunar letter.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'parb-2',
    order: 2,
    titleAr: 'المحاضرة 2: المدود الثلاثة (الألف والواو والياء) وأنواع التنوين',
    titleEn: 'Lecture 2: Long Vowels (Madd) & Three Types of Tanween',
    subtitleAr: 'التفريق بين الحركات القصيرة والمدود الطويلة، وإتقان تنوين الضم والفتح والكسر',
    subtitleEn: 'Short vs Long vowels in Arabic and mastery of nunation suffixes.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'حروف المد الثلاثة: الألف المفتوح ما قبلها، والواو المضموم ما قبلها، والياء المكسور ما قبلها',
      'المد هو إطالة الصوت بحرف المد بمقدار حركتين',
      'التنوين: نون ساكنة تلحق آخر الاسم تنطق ولا تكتب',
      'أنواع التنوين: تنوين الضم (ــٌ)، تنوين الكسر (ــٍ)، وتنوين الفتح (ــً مع ألف زائدة)'
    ],
    keyConceptsEn: [
      'Three Madd Letters (Alif, Waw, Yaa)',
      'Elongation Duration (2 beats)',
      'Tanween: Unwritten nunation sound',
      'Dammatan, Kasratan, and Fathatan with extra Alif'
    ],
    summaryAr: 'الحركات القصيرة (الفتحة، الضمة، الكسرة) تقابلها في الطول حروف المد الثلاثة (الألف، الواو، الياء). والتنوين هو جرس موسيقي يظهر صوت النون في آخر الكلمة دون كتابة حرف النون.',
    summaryEn: 'Arabic contrasts short vowel diacritics with long Madd vowels, while Tanween produces a melodious terminal /n/ sound.',
    sections: [
      {
        titleAr: '1. الفرق بين الحركة والمد',
        titleEn: '1. Short vs Long Vowels',
        contentAr: 'لاحظ الفرق الصوتي: (بَـ قَرَأَ) صوت قصير، بينما (بَا سِم) مد بالألف طويل. (رُ سُم) قصير، بينما (نُـ ور) مد بالواو.',
        contentEn: 'Notice duration: Ba (short) vs Baa (long Madd). Ru vs Roo.',
        interactiveExample: {
          titleAr: 'تطبيق التنوين: كتاب',
          titleEn: 'Tanween Conjugation on "Kitab"',
          equation: 'كِتَابٌ (ضم) / كِتَاباً (فتح) / كِتَابٍ (كسر)',
          steps: [
            { stepNumber: 1, textAr: 'تنوين الضم: كِتَابٌ (ضمتان فوق الباء، وننطق نوناً في النهاية).', textEn: 'Dammatan: Kitabun.', noteAr: 'حالة الرفع', noteEn: 'Nominative' },
            { stepNumber: 2, textAr: 'تنوين الفتح: كِتَاباً (فتحتان مع زيادة ألف تنوين الفتح).', textEn: 'Fathatan: Kitaban (requires extra Alif).', noteAr: 'حالة النصب', noteEn: 'Accusative' },
            { stepNumber: 3, textAr: 'تنوين الكسر: كِتَابٍ (كسرتان تحت الحرف الأخير).', textEn: 'Kasratan: Kitabin.', noteAr: 'حالة الجر', noteEn: 'Genitive' }
          ],
          takeawayAr: 'التنوين لا يجتمع مع (الـ التعريف) أبداً في نفس الكلمة (إما الكتابُ أو كتابٌ).',
          takeawayEn: 'Tanween and the definite article (Al-) are strictly mutually exclusive.'
        },
        tipsAr: ['في تنوين الفتح نضيف ألفاً إلا إذا انتهت الكلمة بتاء مربوطة (مدرسةً) أو همزة قبلها ألف (سماءً).'],
        tipsEn: ['Tanween Fath takes an extra Alif, except when ending in Taa Marbuta or Hamza after Alif.']
      }
    ],
    assessment: {
      id: 'quiz-parb-2',
      lectureId: 'parb-2',
      titleAr: 'الاختبار الإلزامي: المد والتنوين',
      titleEn: 'Lecture 2 Assessment: Vowels & Tanween',
      passingScore: 80,
      questions: [
        {
          id: 'qparb2-1',
          textAr: 'ما نوع المد في كلمة "عَصِـيـر"؟',
          textEn: 'What type of Madd is in "Aseer" (juice)?',
          optionsAr: ['مد بالألف', 'مد بالواو', 'مد بالياء', 'لا يوجد مد'],
          optionsEn: ['Madd with Alif', 'Madd with Waw', 'Madd with Yaa', 'No Madd'],
          correctIndex: 2,
          conceptTestedAr: 'تحديد نوع حرف المد',
          conceptTestedEn: 'Identifying long vowel Yaa',
          explanationAr: 'ياء ساكنة مكسور ما قبلها (الصاد المكسورة)، فهو مد بالياء.',
          explanationEn: 'Yaa preceded by Kasra is Madd with Yaa.',
          difficulty: 'easy'
        },
        {
          id: 'qparb2-2',
          textAr: 'كيف نكتب كلمة "حديقة" بتنوين الفتح؟',
          textEn: 'How is "Hadeeqah" written with Tanween Fath?',
          optionsAr: ['حَدِيقَةً (بدون ألف)', 'حَدِيقَةًا (مع ألف)', 'حَدِيقَتَنْ', 'حَدِيقَةٌ'],
          optionsEn: ['Hadeeqatan (no extra Alif)', 'With extra Alif', 'With explicit Nun', 'Dammatan'],
          correctIndex: 0,
          conceptTestedAr: 'قواعد تنوين الفتح للتاء المربوطة',
          conceptTestedEn: 'Tanween Fath on Taa Marbuta',
          explanationAr: 'التاء المربوطة تقبل تنوين الفتح فوقها مباشرة دون إضافة ألف زائدة.',
          explanationEn: 'Taa Marbuta never takes an extra Alif for Tanween Fath.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'parb-3',
    order: 3,
    titleAr: 'المحاضرة 3: التاء المربوطة والتاء المفتوحة والهاء وطريقة التمييز',
    titleEn: 'Lecture 3: Taa Marbuta (ة), Taa Maftuha (ت), and Haa (هـ)',
    subtitleAr: 'القاعدة الذهبية للوقف بالسكون للتمييز السريع بين التاء المربوطة والمفتوحة والهاء',
    subtitleEn: 'Master orthography of terminal Taa and Haa via pause tests.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'التاء المفتوحة (ت): تُنطق تاءً عند الوصل وعند الوقف بالسكون (بَيْت -> بَيْتْ)',
      'التاء المربوطة (ة): تُنطق تاءً عند الحركة، وتُنطق هاءً عند الوقف بالسكون (مَدْرَسَةُ -> مَدْرَسَهْ)',
      'الهاء (هـ): تُنطق هاءً في جميع الأحوال وصلاً ووقفاً (وَجْهٌ -> وَجْهْ)',
      'طريقة الوقف لاكتشاف الحرف الإملائي الصحيح'
    ],
    keyConceptsEn: [
      'Open Taa: Voiced /t/ at pause and continuation',
      'Taa Marbuta: Voiced /t/ with vowel, shifts to /h/ at pause',
      'Terminal Haa: Always voiced /h/ at pause and continuation',
      'The Sukun pause orthography test'
    ],
    summaryAr: 'لحل أكثر الأخطاء الإملائية شيوعاً بين الطلاب: قف على الكلمة بالسكون في ذهنك؛ فإن تحولت إلى صوت هاء فهي تاء مربوطة عليها نقطتان (ـة/ة)، وإن بقيت تاء فهي مفتوحة (ت)، وإن بقيت هاء فهي هاء بدون نقاط (ـه/ه).',
    summaryEn: 'A simple pause test clarifies Arabic terminal letters: if it turns into an /h/ upon pausing, it is Taa Marbuta with two dots.',
    sections: [
      {
        titleAr: '1. تطبيق قاعدة الوقف بالسكون',
        titleEn: '1. The Sukun Pause Test',
        contentAr: 'جرب نطق كلمة "شَجَرَة": عند الحركة نقول "شَجَرَةُ الزَّيْتُونِ" (صوت تاء)، وعندما نقف عليها بالسكون نقول "شَجَرَهْ" (تحولت إلى هاء)، إذن هي تاء مربوطة منقوطة (شجرة).',
        contentEn: 'Say "Shajarah": voiced /t/ in sentence, voiced /h/ when paused alone -> Taa Marbuta.',
        interactiveExample: {
          titleAr: 'جدول الاختبار الذهني السريع',
          titleEn: 'Quick Mental Test Matrix',
          equation: 'وقف بالسكون = كشف الحرف الحقيقي',
          steps: [
            { stepNumber: 1, textAr: 'فحص "بِنْت": نقف عليها بالسكون "بِنْتْ" -> تاء صريحة -> تاء مفتوحة (بنت).', textEn: 'Bint paused as Bint -> Open Taa.', noteAr: 'تاء مفتوحة', noteEn: 'Open Taa' },
            { stepNumber: 2, textAr: 'فحص "مَدْرَسَة": نقف عليها "مَدْرَسَهْ" -> هاء عند الوقف -> تاء مربوطة (مدرسة).', textEn: 'Madrasah paused as Madrasah -> Taa Marbuta.', noteAr: 'تاء مربوطة', noteEn: 'Taa Marbuta' },
            { stepNumber: 3, textAr: 'فحص "مِيَاه": بالوصل "مِيَاهُ" وبالوقف "مِيَاهْ" -> هاء دائماً -> هاء دون نقط (مياه).', textEn: 'Miyah always /h/ -> Plain Haa without dots.', noteAr: 'هاء صريحة', noteEn: 'Plain Haa' }
          ],
          takeawayAr: 'التاء المربوطة هي الوحيدة التي تتنكر: تظهر كتاء في الحركة وكنبرة هاء في السكون.',
          takeawayEn: 'Taa Marbuta uniquely alternates between /t/ and /h/ depending on vocalization.'
        },
        tipsAr: ['لا تضع نقاطاً أبداً على الهاء الأصلية مثل (وجه، مياه، فواكه).', 'التاء المفتوحة لا تصبح هاءً أبداً مهما حاولت.'],
        tipsEn: ['Never put dots on native Haa.', 'Open Taa never mutates to Haa.']
      }
    ],
    assessment: {
      id: 'quiz-parb-3',
      lectureId: 'parb-3',
      titleAr: 'الاختبار الإلزامي: التاء المربوطة والمفتوحة والهاء',
      titleEn: 'Lecture 3 Assessment: Terminal Taa & Haa',
      passingScore: 80,
      questions: [
        {
          id: 'qparb3-1',
          textAr: 'عند الوقف على كلمة "مُعَلِّمَة" بالسكون، كيف ننطق آخرها؟',
          textEn: 'When pausing with Sukun on "Muallimah", how is the ending pronounced?',
          optionsAr: ['تُنطق بصوت هاء ساكنة (مُعَلِّمَهْ)', 'تُنطق تاء ساكنة صريحة (مُعَلِّمَتْ)', 'تُنطق نوناً ساكنة', 'لا يُنطق الحرف إطلاقاً'],
          optionsEn: ['Pronounced as silent Haa', 'Pronounced as crisp Taa', 'Pronounced as Nun', 'Silent'],
          correctIndex: 0,
          conceptTestedAr: 'نطق التاء المربوطة عند الوقف',
          conceptTestedEn: 'Taa Marbuta pronunciation at pause',
          explanationAr: 'التاء المربوطة تنطق هاءً ساكنة عند الوقف عليها، وتُنطق تاءً عند وصلها بالحركة.',
          explanationEn: 'Taa Marbuta converts to /h/ sound at pause.',
          difficulty: 'easy'
        },
        {
          id: 'qparb3-2',
          textAr: 'أي من الكلمات التالية تنتهي بـ "هاء أصلية" ولا نضع عليها نقطتين؟',
          textEn: 'Which word ends with a genuine Haa without dots?',
          optionsAr: ['غُرْفَـ...', 'صَلَا...', 'وَجْـ...', 'حَقِيبَـ...'],
          optionsEn: ['Ghurfa...', 'Salah...', 'Wajh...', 'Haqeeba...'],
          correctIndex: 2,
          conceptTestedAr: 'تمييز الهاء عن التاء المربوطة',
          conceptTestedEn: 'Haa vs Taa Marbuta distinction',
          explanationAr: 'كلمة "وَجْه" تنتهي بهاء أصلية تُنطق هاءً في الوصل (وَجْهُ الإِنْسَانِ) والوقف (وَجْهْ)، فلا نضع عليها نقطتين.',
          explanationEn: 'Wajh ends with a native Haa voiced as /h/ in all cases.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'parb-4',
    order: 4,
    titleAr: 'المحاضرة 4: أسماء الإشارة وتكوين الجملة البسيطة المفيدة',
    titleEn: 'Lecture 4: Demonstrative Pronouns & Simple Sentences',
    subtitleAr: 'استخدام (هذا، هذه، هذان، هاتان، هؤلاء) بدقة لتكوين جمل تامة المعنى والتعبير',
    subtitleEn: 'Master demonstrative pronouns and construct meaningful simple Arabic sentences.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'اسم الإشارة: اسم يحدد شيئاً معيناً بالإشارة الحسية أو المعنوية إليه',
      'هذا للمفرد المذكر، وهذه للمفرد المؤنث ولجمع غير العاقل',
      'هذان للمثنى المذكر، وهاتان للمثنى المؤنث',
      'هؤلاء لجمع العاقل (مذكر ومؤنث)'
    ],
    keyConceptsEn: [
      'Demonstrative Pronouns Concept',
      'Hadha (Singular Masc) & Hadhihi (Singular Fem & Non-human Plural)',
      'Hadhani & Hatani (Dual)',
      'Ha\'ula\'i (Human Plural for both genders)'
    ],
    summaryAr: 'نستخدم أسماء الإشارة لنشير بها إلى ما حولنا؛ فنقول "هذا طالبٌ مجتهدٌ" و"هذه مكتبةٌ واسعةٌ"، وانتبه جيداً: لجمع الأشياء غير العاقلة (كالكتب والأشجار والسيارات) نستخدم دائماً "هذه".',
    summaryEn: 'Demonstrative pronouns specify referenced objects based on gender, number, and rationality (human vs non-human).',
    sections: [
      {
        titleAr: '1. خارطة أسماء الإشارة للقريب',
        titleEn: '1. Near Demonstratives Roadmap',
        contentAr: 'هذا (ولد) • هذه (بنت) • هذان (ولدان) • هاتان (بنتان) • هؤلاء (أولاد أو بنات). وقاعدة ذهبية: جمع غير العاقل يعامل معاملة المفردة المؤنثة (هذه أقلام، هذه حدائق).',
        contentEn: 'Demonstratives map to number and gender. Crucial rule: Non-human plurals always take Hadhihi.',
        interactiveExample: {
          titleAr: 'تطبيق: اختيار اسم الإشارة الصحيح',
          titleEn: 'Interactive Fill-in Example',
          equation: '[اسم الإشارة] + المشار إليه = جملة مفيدة',
          steps: [
            { stepNumber: 1, textAr: 'للإشارة إلى "طَبِيبٌ": مذكر مفرد -> نقول "هَذَا طَبِيبٌ".', textEn: 'Singular Masc doctor -> Hadha.', noteAr: 'مفرد مذكر', noteEn: 'Singular Masc' },
            { stepNumber: 2, textAr: 'للإشارة إلى "أَشْجَارٌ": جمع غير عاقل -> نقول "هَذِهِ أَشْجَارٌ" (وليس هؤلاء!).', textEn: 'Non-human plural trees -> Hadhihi.', noteAr: 'قاعدة غير العاقل', noteEn: 'Non-human rule' },
            { stepNumber: 3, textAr: 'للإشارة إلى "مُعَلِّمُونَ": جمع عاقل -> نقول "هَؤُلَاءِ مُعَلِّمُونَ".', textEn: 'Human plural teachers -> Ha\'ula\'i.', noteAr: 'جمع عاقل', noteEn: 'Human plural' }
          ],
          takeawayAr: 'لا تقل أبداً "هؤلاء كتب"؛ بل قل دائماً "هذه كتبٌ مفيدةٌ".',
          takeawayEn: 'Never use Ha\'ula\'i for non-human objects; always use Hadhihi.'
        },
        tipsAr: ['انتبه إملائياً: كلمة (هذا، هذه، هذان، هؤلاء) فيها ألف تُنطق ولا تُكتب بعد الهاء!'],
        tipsEn: ['Spelling tip: Hadha, Hadhihi, and Ha\'ula\'i contain a spoken Alif that is never written.']
      }
    ],
    assessment: {
      id: 'quiz-parb-4',
      lectureId: 'parb-4',
      titleAr: 'الاختبار الإلزامي: أسماء الإشارة وتراكيب الجمل',
      titleEn: 'Lecture 4 Assessment: Demonstrative Pronouns',
      passingScore: 80,
      questions: [
        {
          id: 'qparb4-1',
          textAr: 'ما هو اسم الإشارة المناسب للفراغ: "...... طَيَّارَانِ مَاهِرَانِ"؟',
          textEn: 'Which demonstrative pronoun fits: "...... skillful pilots" (Dual masculine)?',
          optionsAr: ['هَذَا', 'هَذَانِ', 'هَاتَانِ', 'هَؤُلَاءِ'],
          optionsEn: ['Hadha', 'Hadhani', 'Hatani', 'Ha\'ula\'i'],
          correctIndex: 1,
          conceptTestedAr: 'اسم الإشارة للمثنى المذكر',
          conceptTestedEn: 'Dual masculine demonstrative',
          explanationAr: '"طياران" مثنى مذكر، واسم الإشارة المناسب له هو "هَذَانِ".',
          explanationEn: 'Hadhani is the demonstrative for dual masculine.',
          difficulty: 'easy'
        },
        {
          id: 'qparb4-2',
          textAr: 'ما اسم الإشارة الصحيح لملء الفراغ: "...... كُتُبٌ قَيِّمَةٌ"؟',
          textEn: 'What is the correct pronoun for: "...... valuable books"?',
          optionsAr: ['هَذِهِ', 'هَؤُلَاءِ', 'هَذَانِ', 'هَاتَانِ'],
          optionsEn: ['Hadhihi', 'Ha\'ula\'i', 'Hadhani', 'Hatani'],
          correctIndex: 0,
          conceptTestedAr: 'اسم الإشارة لجمع غير العاقل',
          conceptTestedEn: 'Non-human plural demonstrative',
          explanationAr: 'كلمة "كُتُب" جمع لغير العاقل، والقاعدة اللغوية تنص على الإشارة إليها بـ "هَذِهِ".',
          explanationEn: 'Books are non-human plural, requiring Hadhihi.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 3. PRIMARY SCIENCE (العلوم والاستكشاف - ابتدائي)
// ============================================================================
export const PRIMARY_SCIENCE_LECTURES: Lecture[] = [
  {
    id: 'psci-1',
    order: 1,
    titleAr: 'المحاضرة 1: حاجات الكائنات الحية وأجزاء النبات ووظائفها',
    titleEn: 'Lecture 1: Living Things & Plant Anatomy and Functions',
    subtitleAr: 'اكتشاف ما تحتاجه الكائنات لتعيش، والتعرف على الجذور والساق والأوراق ودورها',
    subtitleEn: 'Explore basic life necessities and roles of plant roots, stems, and leaves.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الرابع الابتدائي - العلوم والاستكشاف',
    gradeLevelNameEn: 'Grade 4 Elementary - Science & Exploration',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: المخلوقات الحية وبيئاتها',
    unitTitleEn: 'Unit 1: Living Organisms & Their Environments',
    lessonNumberAr: 'الدرس 1: حاجات المخلوقات الحية وأجزاء النبات',
    lessonNumberEn: 'Lesson 1: Needs of Living Things & Plant Anatomy',

    // Real-world hook
    warmupHookAr: 'انظر إلى حديقة منزلك أو أشجار النخيل الشامخة في شوارع مدينتك؛ كيف تبقى خضراء ومورقة تحت أشعة الشمس الحارة؟ ومن يطعمها ويسقيها كل يوم؟ إن النباتات كائنات حية بالغة الدقة؛ تمتلك مصانع خضراء صغيرة داخل كل ورقة من أوراقها، تصنع بها الغذاء لنفسها ولجميع الكائنات على كوكب الأرض!',
    warmupHookEn: 'Look at the green trees around your neighborhood: how do they thrive under the sun? Plants are nature\'s self-sufficient food factories, producing nourishment within their leaves for themselves and all living creatures.',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يحدد الطالب الحاجات الأساسية الأربعة لبقاء المخلوقات الحية على قيد الحياة',
      'أن يتعرف على الأجزاء الرئيسية للنبات (الجذور، الساق، الأوراق) ووظيفة كل جزء',
      'أن يشرح دور الأوراق في صنع الغذاء عبر عملية البناء الضوئي المبسطة',
      'أن يستنتج أهمية ضوء الشمس والماء من خلال الملاحظة والتجربة العلمية'
    ],
    learningOutcomesEn: [
      'Identify the 4 fundamental survival needs of living organisms',
      'Describe functions of main plant organs: roots, stems, and leaves',
      'Explain how leaves manufacture plant food through sunlight',
      'Deduce the critical role of light and water through experimental inquiry'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'البناء الضوئي (Photosynthesis)',
        termEn: 'Photosynthesis',
        definitionAr: 'العملية التي تصنع بها الأوراق الخضراء غذاء النبات باستخدام ضوء الشمس والماء وثاني أكسيد الكربون.',
        definitionEn: 'Process by which plants convert sunlight, water, and CO2 into sugars.'
      },
      {
        termAr: 'الجذور (Roots)',
        termEn: 'Roots',
        definitionAr: 'جزء النبات الذي ينمو تحت الأرض؛ يثبت النبتة في التربة ويمتص الماء والأملاح المعدنية.',
        definitionEn: 'Underground plant organ absorbing water and anchoring the organism.'
      },
      {
        termAr: 'الساق (Stem)',
        termEn: 'Stem',
        definitionAr: 'دعامة النبات التي تنقل الماء والغذاء بين الجذور والأوراق وتحمل الأغصان والأزهار.',
        definitionEn: 'Plant axis providing structural support and vascular fluid transport.'
      }
    ],

    keyConceptsAr: [
      'حاجات الكائنات الحية الأساسية: الماء، الهواء، الغذاء، والمكان المناسب',
      'الجذور: تثبيت النبات في التربة وامتصاص الماء والأملاح',
      'الساق: نقل الماء إلى أجزاء النبات ودعم وحمل الأوراق والأزهار',
      'الأوراق: مصنع الغذاء للنبات باستخدام ضوء الشمس (البناء الضوئي المبسط)'
    ],
    keyConceptsEn: [
      'Living Things Needs: Water, Air, Food, Shelter',
      'Roots: Anchorage and Water/Mineral Absorption',
      'Stem: Nutrient Transport and Structural Support',
      'Leaves: Food Factory via Sunlight'
    ],
    summaryAr: 'الكائنات الحية تنمو وتتنفس وتتغذى وتتكاثر. والنبات كائن حي مدهش يصنع غذاءه بنفسه داخل أوراقه الخضراء مستعيناً بضوء الشمس والماء الذي تمتصه جذوره من باطن الأرض.',
    summaryEn: 'Living organisms require energy to thrive. Plants serve as nature\'s self-sufficient food factories, synthesizing nutrients via leaves and roots.',
    sections: [
      {
        titleAr: '1. مصنع النبات الصغير: كيف يتغذى؟ وأجزاء النبات',
        titleEn: '1. The Plant Food Factory & Anatomy',
        contentAr: 'تمتص الجذور الماء والأملاح من التربة كالمصاصة، وينقله الساق إلى الأوراق الخضراء. تمتص الأوراق ضوء الشمس وغاز الهواء لتطبخ السكر الذي يغذي النبتة لتكبر وتزهر.',
        contentEn: 'Roots absorb water, stems convey moisture upward, and green leaves trap solar energy to produce food.',
        diagram: {
          id: 'diag-psci1-watercycle-plant',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'دورة الماء في الطبيعة واحتياجات نمو النبات والكائنات الحية',
          titleEn: 'Natural Water Cycle & Living Things Ecosystem',
          captionAr: 'يوضح النموذج العلمي التوضيحي مراحل دورة الماء الأساسية: تبخر المياه بتأثير حرارة الشمس، تكثف البخار وتكون السحب، ثم هطول الأمطار لتغذي التربة والنباتات والبحار.',
          captionEn: 'The scientific diagram illustrates the natural hydrological cycle: solar evaporation, cloud condensation, and rainfall nourishing soil, flora, and aquatic ecosystems.',
          diagramType: 'primary_water_cycle',
          takeawayFormulaAr: 'تبخر ↑  -->  تكثف ☁️  -->  هطول 🌧️  -->  تجمع 🌊',
          takeawayFormulaEn: 'Evaporation ↑  -->  Condensation ☁️  -->  Precipitation 🌧️  -->  Collection 🌊',
          keyLabels: [
            { tagAr: 'الشمس والتبخر (حرارة)', tagEn: 'Solar Evaporation', descAr: 'تسخين المياه وتحويلها لبخار صاعد', descEn: 'Solar heat drives moisture upward' },
            { tagAr: 'التكثف والسحب الركامية', tagEn: 'Cloud Condensation', descAr: 'تبرد قطرات الماء وتتجمع في السماء', descEn: 'Cooling moisture forms clouds' },
            { tagAr: 'هطول الأمطار وتغذية النبات', tagEn: 'Precipitation & Infiltration', descAr: 'سقوط المطر لترتوي الجذور والأشجار', descEn: 'Rain replenishes groundwater and plants' }
          ]
        },
        interactiveExample: {
          titleAr: 'تجربة النبات المغطى',
          titleEn: 'The Covered Plant Experiment',
          equation: 'ماء + ضوء شمس + هواء = نبتة خضراء قوية وسليمة',
          steps: [
            { stepNumber: 1, textAr: 'وضعنا نبتتين، الأولى سقيناها بالماء وتركناها في ضوء الشمس.', textEn: 'Plant A given water and open sunlight.', noteAr: 'المجموعة التجريبية', noteEn: 'Normal conditions' },
            { stepNumber: 2, textAr: 'الثانية غطيناها بصندوق مظلم ومنعنا عنها الضوء لأسبوع.', textEn: 'Plant B enclosed in total darkness.', noteAr: 'حجب الضوء', noteEn: 'Light deprivation' },
            { stepNumber: 3, textAr: 'النتيجة: اصفرت النبتة الثانية وذبلت، بينما نمت الأولى وأورقت.', textEn: 'Plant B turned yellow and wilted; Plant A flourished.', noteAr: 'الاستنتاج العلمي', noteEn: 'Conclusion' }
          ],
          takeawayAr: 'ضوء الشمس ضروري جداً للنبات؛ بدونه لا يستطيع إنتاج غذائه ويموت.',
          takeawayEn: 'Sunlight is an indispensable requirement for plant photosynthesis and survival.'
        },
        formativeCheck: {
          id: 'fc-psci1-1',
          questionAr: 'ما هو الجزء في النبات الذي يقوم بامتصاص الماء والأملاح المعدنية من التربة؟',
          questionEn: 'Which plant part absorbs water and minerals from the soil?',
          optionsAr: ['الأوراق', 'الأزهار', 'الجذور', 'الثمار'],
          optionsEn: ['Leaves', 'Flowers', 'Roots', 'Fruits'],
          correctIndex: 2,
          explanationAr: 'الجذور هي المسؤولة عن امتصاص الماء والأملاح المعدنية من باطن التربة وتثبيت النبات.',
          explanationEn: 'Roots anchor the plant and absorb moisture and soil nutrients.',
          hintAr: 'الجزء الذي ينمو تحت سطح الأرض ولا نراه مباشرة.',
          hintEn: 'The part that grows underground.'
        },
        tipsAr: ['الجذور تنمو دائماً إلى الأسفل باتجاه الماء والجاذبية، بينما تنمو السيقان للأعلى نحو الضوء.'],
        tipsEn: ['Roots seek soil moisture downward; stems grow upward towards sunlight.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'حاجات الكائن الحي: (الماء، الهواء، الغذاء، المكان والمأوى المناسب)',
      'الجذور: تثبيت النبات في التربة + امتصاص الماء والأملاح من باطن الأرض',
      'الساق: أنبوب لنقل الماء إلى الأوراق + دعامة تحمل الأغصان',
      'الأوراق: مصنع السكر والغذاء للنبات باستخدام ضوء الشمس',
      'الأزهار والثمار: المسؤولة عن التكاثر وإنتاج البذور للنبات الجديد'
    ],
    conceptMapEn: [
      'Survival Needs: Water, Air, Food, Living Space',
      'Roots: Soil Anchorage & Mineral/Moisture Absorption',
      'Stem: Vascular Conduit & Structural Support',
      'Leaves: Photosynthetic Food Production Site',
      'Flowers & Fruits: Reproduction & Seed Propagation'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-psci1-1',
        questionAr: 'ماذا تتوقع أن يحدث لنبتة خضراء سليمة إذا قمنا بتغطيتها بصندوق كرتوني يمنع عنها ضوء الشمس لمدة أسبوعين مع استمرار ريها بالماء؟ ولماذا؟',
        questionEn: 'What happens to a healthy plant kept in darkness for 2 weeks with regular watering?',
        solutionStepsAr: [
          'الملاحظة العلمية: ستتحول الأوراق من اللون الأخضر إلى الأصفر وتذبل تدريجياً ثم تموت النبتة',
          'التفسير العلمي: ضوء الشمس عنصر أساسي وحيوي لقيام الأوراق بصنع الغذاء (البناء الضوئي)',
          'الاستنتاج: الماء وحده لا يكفي؛ فالنبات لا يستطيع العيش بدون مصدر ضوء لطبخ طعامه'
        ],
        solutionStepsEn: [
          'Observation: Leaves will yellow and wilt',
          'Scientific rationale: Sunlight is essential for photosynthetic food production',
          'Conclusion: Water alone cannot sustain a plant without light'
        ],
        answerAr: 'تصفر أوراقها وتذبل وتموت، لأنها عجزت عن تصنيع غذائها بسبب حجب ضوء الشمس.',
        answerEn: 'The plant wilts and dies because it cannot synthesize food without sunlight.'
      }
    ],
    assessment: {
      id: 'quiz-psci-1',
      lectureId: 'psci-1',
      titleAr: 'الاختبار الإلزامي: النباتات وحاجات الكائنات الحية',
      titleEn: 'Lecture 1 Assessment: Living Things & Plants',
      passingScore: 80,
      questions: [
        {
          id: 'qpsci1-1',
          textAr: 'ما هو الجزء في النبات المسؤول عن امتصاص الماء والأملاح من التربة؟',
          textEn: 'Which plant part absorbs water and minerals from the soil?',
          optionsAr: ['الأوراق', 'الأزهار', 'الجذور', 'الثمار'],
          optionsEn: ['Leaves', 'Flowers', 'Roots', 'Fruits'],
          correctIndex: 2,
          conceptTestedAr: 'وظيفة جذور النبات',
          conceptTestedEn: 'Root function',
          explanationAr: 'الجذور تنمو داخل التربة وتثبت النبات وتمتص منه الماء والأملاح المعدنية.',
          explanationEn: 'Roots anchor the plant and draw soil moisture.',
          difficulty: 'easy'
        },
        {
          id: 'qpsci1-2',
          textAr: 'أي من العناصر التالية يصنع غذاء النبات في الأوراق؟',
          textEn: 'What essential energy source allows leaves to make food?',
          optionsAr: ['ضوء الشمس', 'الظلام الدامس', 'الرياح القوية', 'الثلج'],
          optionsEn: ['Sunlight', 'Total darkness', 'Heavy wind', 'Snow'],
          correctIndex: 0,
          conceptTestedAr: 'أهمية ضوء الشمس في صنع الغذاء',
          conceptTestedEn: 'Sunlight for food synthesis',
          explanationAr: 'الأوراق الخضراء تستخدم ضوء الشمس لتحويل الماء والهواء إلى غذاء للنبتة.',
          explanationEn: 'Green leaves utilize sunlight to manufacture plant nutrients.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'psci-2',
    order: 2,
    titleAr: 'المحاضرة 2: حالات المادة الثلاث (الصلبة والسائلة والغازية)',
    titleEn: 'Lecture 2: The Three States of Matter (Solid, Liquid, Gas)',
    subtitleAr: 'ملاحظة الفروق بين الصلب والسائل والغاز، وتحولات المادة بالحرارة والبرودة',
    subtitleEn: 'Explore solid, liquid, and gaseous phases and temperature phase shifts.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'المادة الصلبة: لها شكل ثابت وحجم ثابت (كالحجر والخشب)',
      'المادة السائلة: لها حجم ثابت ولكن تأخذ شكل الإناء الذي توضع فيه (كالماء والحليب)',
      'المادة الغازية: ليس لها شكل ثابت ولا حجم ثابت وتنتشر في كل مكان (كالهواء وبخار الماء)',
      'تحولات الماء: الانصهار (جليد -> ماء)، التبخر (ماء -> بخار)، والتجمد'
    ],
    keyConceptsEn: [
      'Solid State: Definite Shape & Definite Volume',
      'Liquid State: Definite Volume & Takes Container Shape',
      'Gas State: No Definite Shape or Volume, Expands',
      'Water Phase Changes: Melting, Evaporating, Freezing'
    ],
    summaryAr: 'كل شيء يحيط بنا في هذا الكون مادة؛ ويمكن أن نجد المادة في ثلاث صور رئيسية: صلبة متماسكة، سائلة تنسكب بسهولة، أو غازية غير مرئية تملأ الفراغ حولنا كالهواء الذي نتنفسه.',
    summaryEn: 'Matter manifests primarily as rigid solids, pouring liquids, or expanding gases.',
    sections: [
      {
        titleAr: '1. دورة الماء وحالاته الثلاث المدهشة',
        titleEn: '1. Water in All Three States',
        contentAr: 'الماء هو أروع مثال نراه يومياً: مكعب الثلج هو ماء صلب، وإذا تركته في الشمس ينصهر ويصبح ماءً سائلاً، وإذا سخنته على النار يغلي ويتصاعد في الهواء كبخار ماء غازي!',
        contentEn: 'Ice is solid water, liquid water flows from taps, and boiling water transforms into invisible vapor gas.',
        interactiveExample: {
          titleAr: 'تطبيق: مقارنة حالات المادة',
          titleEn: 'Comparative Phase Example',
          equation: 'جليد (صلب) + حرارة -> ماء (سائل) + غليان -> بخار (غاز)',
          steps: [
            { stepNumber: 1, textAr: 'الصلب: قلم أو ممحاة، لا يتغير شكله إذا وضعته في كأس أو على الطاولة.', textEn: 'Solid pencil keeps its exact shape everywhere.', noteAr: 'شكل وحجم ثابتان', noteEn: 'Fixed shape & volume' },
            { stepNumber: 2, textAr: 'السائل: عصير برتقال، إذا صببته في كأس طويل يصبح طويلاً، وفي صحن مسطح يتفرش.', textEn: 'Liquid juice conforms to whatever cup it fills.', noteAr: 'حجم ثابت وشكل متغير', noteEn: 'Variable shape' },
            { stepNumber: 3, textAr: 'الغاز: الهواء داخل البالون، إذا ثقبته يهرب الغاز وينتشر في كامل الغرفة فوراً.', textEn: 'Gas expands freely to fill the whole environment.', noteAr: 'شكل وحجم متغيران', noteEn: 'Variable shape & volume' }
          ],
          takeawayAr: 'المادة لا تختفي عند تغير حالتها؛ فقط تتباعد جزيئاتها أو تتقارب بتأثير الحرارة والبرودة.',
          takeawayEn: 'Matter shifts state according to thermal kinetic changes without being destroyed.'
        },
        tipsAr: ['التجمد هو تحول السائل إلى صلب بالتبريد الشديد.', 'التبخر هو تحول السائل إلى غاز بالتسخين.'],
        tipsEn: ['Freezing cools liquids into solids.', 'Evaporation heats liquids into vapors.']
      }
    ],
    assessment: {
      id: 'quiz-psci-2',
      lectureId: 'psci-2',
      titleAr: 'الاختبار الإلزامي: حالات المادة',
      titleEn: 'Lecture 2 Assessment: States of Matter',
      passingScore: 80,
      questions: [
        {
          id: 'qpsci2-1',
          textAr: 'ما هي حالة المادة التي تأخذ شكل الإناء الذي توضع فيه ويبقى حجمها ثابتاً؟',
          textEn: 'Which state of matter takes the container shape while keeping a definite volume?',
          optionsAr: ['الحالة الصلبة', 'الحالة السائلة', 'الحالة الغازية', 'الحالة المغناطيسية'],
          optionsEn: ['Solid', 'Liquid', 'Gas', 'Magnetic'],
          correctIndex: 1,
          conceptTestedAr: 'خصائص المادة السائلة',
          conceptTestedEn: 'Liquid phase properties',
          explanationAr: 'السوائل (كالماء والعصير) لها حجم ثابت ولكن شكلها يتغير حسب الإناء الذي نسكبها فيه.',
          explanationEn: 'Liquids have fixed volume but malleable shape.',
          difficulty: 'easy'
        },
        {
          id: 'qpsci2-2',
          textAr: 'ماذا يسمى تحول مكعب الجليد إلى ماء سائل عند تركه في الدفء؟',
          textEn: 'What do we call the change of ice into liquid water when warmed?',
          optionsAr: ['التجمد', 'الانصهار (الذوبان بالحرارة)', 'التكثف', 'الترسيب'],
          optionsEn: ['Freezing', 'Melting', 'Condensation', 'Precipitation'],
          correctIndex: 1,
          conceptTestedAr: 'مفهوم الانصهار الفيزيائي',
          conceptTestedEn: 'Physical melting process',
          explanationAr: 'الانصهار هو تحول المادة من الحالة الصلبة إلى الحالة السائلة بفعل اكتساب الحرارة.',
          explanationEn: 'Melting converts solid into liquid by absorbing heat.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'psci-3',
    order: 3,
    titleAr: 'المحاضرة 3: النظام الشمسي وتعاقب الليل والنهار',
    titleEn: 'Lecture 3: Solar System & Day and Night Cycle',
    subtitleAr: 'فهم دوران كوكب الأرض حول نفسه لإنتاج الليل والنهار، ودورانه حول الشمس لتوالي الفصول',
    subtitleEn: 'Understand Earth\'s axial rotation creating day/night and orbital revolution.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'الأرض كروية الشكل تدور حول محور مائل',
      'دوران الأرض حول نفسها كل 24 ساعة يسبب تعاقب الليل والنهار',
      'الشمس نجم مضيء وثابت في مركز النظام الشمسي والأرض تدور حولها',
      'دوران الأرض حول الشمس كل 365 يوماً يسبب تعاقب الفصول الأربعة'
    ],
    keyConceptsEn: [
      'Spherical Earth Rotates on Tilted Axis',
      '24-Hour Axial Rotation Produces Day and Night',
      'The Sun as the Central Star',
      '365-Day Revolution Around Sun Produces Four Seasons'
    ],
    summaryAr: 'تبدو لنا الشمس وكأنها تتحرك في السماء، لكن الحقيقة المذهلة هي أن الأرض هي التي تدور حول نفسها؛ فالنصف المواجه للشمس يعيش النهار، والنصف الآخر المحجوب في الظل يعيش الليل.',
    summaryEn: 'The Sun appears to move, but Earth\'s steady axial rotation dictates our cycle of day and night.',
    sections: [
      {
        titleAr: '1. تجربة المصباح والكرة الأرضية',
        titleEn: '1. Flashlight & Globe Experiment',
        contentAr: 'تخيل أن المصباح هو الشمس، والكرة هي كوكب الأرض. عندما نضيء المصباح، ينير نصف الكرة فقط (النهار)، ويبقى النصف الخلفي مظلماً (الليل). ومع دوران الكرة ببطء، ينتقل الظلام إلى النور والنور إلى الظلام.',
        contentEn: 'A lamp facing a spinning globe illuminates only one hemisphere at a time, generating day and night.',
        interactiveExample: {
          titleAr: 'حركتا الأرض الرئيستان',
          titleEn: 'Earth\'s Two Crucial Motions',
          equation: 'دورة كاملة حول النفس = يوم واحد (24 ساعة)',
          steps: [
            { stepNumber: 1, textAr: 'تدور الأرض حول محورها دورة كاملة كل 24 ساعة، مسببة تعاقب النهار والليل.', textEn: 'Axial spin every 24 hours causes day & night.', noteAr: 'الحركة اليومية', noteEn: 'Daily motion' },
            { stepNumber: 2, textAr: 'تدور الأرض حول الشمس دورة كاملة كل سنة (365 يوماً)، مسببة الفصول الأربعة.', textEn: 'Annual orbit around Sun causes the 4 seasons.', noteAr: 'الحركة السنوية', noteEn: 'Annual motion' }
          ],
          takeawayAr: 'الليل والنهار نعمة عظيمة: النهار للعمل والدراسة، والليل للراحة والنوم.',
          takeawayEn: 'Earth\'s continuous rotation creates the diurnal rhythms supporting all life.'
        },
        tipsAr: ['لا تنظر إلى قرص الشمس مباشرة بالعين المجردة أبداً لأن أشعتها تؤذي البصر.'],
        tipsEn: ['Never gaze directly into sunlight as it damages eye retinas.']
      }
    ],
    assessment: {
      id: 'quiz-psci-3',
      lectureId: 'psci-3',
      titleAr: 'الاختبار الإلزامي: الأرض والنظام الشمسي',
      titleEn: 'Lecture 3 Assessment: Earth & Sun',
      passingScore: 80,
      questions: [
        {
          id: 'qpsci3-1',
          textAr: 'ما الذي يسبب حدوث تعاقب الليل والنهار على كوكب الأرض؟',
          textEn: 'What causes the occurrence of day and night on Earth?',
          optionsAr: ['دوران الأرض حول محورها (نفسها)', 'دوران القمر حول الأرض', 'تحرك الشمس حول الأرض', 'غيوم السماء الكثيفة'],
          optionsEn: ['Earth spinning on its axis', 'Moon orbiting Earth', 'Sun orbiting Earth', 'Cloud cover'],
          correctIndex: 0,
          conceptTestedAr: 'سبب تعاقب الليل والنهار',
          conceptTestedEn: 'Cause of day and night',
          explanationAr: 'دوران كوكب الأرض حول نفسها كل 24 ساعة هو السبب المباشر في تعاقب الليل والنهار.',
          explanationEn: 'Earth\'s 24-hour rotation on its axis causes day and night.',
          difficulty: 'easy'
        },
        {
          id: 'qpsci3-2',
          textAr: 'كم تستغرق الأرض لتكمل دورة كاملة واحدة حول الشمس؟',
          textEn: 'How long does Earth take to complete one full revolution around the Sun?',
          optionsAr: ['يوم واحد (24 ساعة)', 'شهر واحد (30 يوماً)', 'سنة كاملة (365 يوماً تقريباً)', 'أسبوع واحد'],
          optionsEn: ['1 day (24 hours)', '1 month (30 days)', '1 full year (~365 days)', '1 week'],
          correctIndex: 2,
          conceptTestedAr: 'فترة دوران الأرض حول الشمس',
          conceptTestedEn: 'Earth orbital period',
          explanationAr: 'تستغرق دورة الأرض حول الشمس سنة كاملة تقريباً وتنتج عنها الفصول الأربعة.',
          explanationEn: 'Earth completes its orbit around the Sun in one year, creating the 4 seasons.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'psci-4',
    order: 4,
    titleAr: 'المحاضرة 4: السلاسل الغذائية والمنتجات والمستهلكات في الطبيعة',
    titleEn: 'Lecture 4: Food Chains, Producers & Consumers in Nature',
    subtitleAr: 'تتبع مسار الطاقة من الشمس إلى النباتات والحيوانات، وفهم التوازن البيئي',
    subtitleEn: 'Track energy flow through ecosystems from solar rays to herbivores and carnivores.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'السلسلة الغذائية: مسار انتقال الطاقة من كائن حي إلى كائن حي آخر',
      'المنتجات: كائنات تصنع غذائها بنفسها (النباتات الخضراء)',
      'المستهلكات: كائنات تتغذى على كائنات أخرى (آكلات الأعشاب وآكلات اللحوم)',
      'المحللات ودورها في إعادة تدوير العناصر إلى التربة'
    ],
    keyConceptsEn: [
      'Food Chain: Energy Transfer Pathway',
      'Producers: Organisms making their own food (Plants)',
      'Consumers: Herbivores and Carnivores',
      'Decomposers: Nutrient Recyclers'
    ],
    summaryAr: 'في الطبيعة ترتبط الكائنات الحية بروابط غذائية محكمة؛ فالنبات يستمد الطاقة من الشمس ليصنع الغذاء، ويأكل الأرنب النبات، ثم يأتي الصقر ليتغذى على الأرنب، مشكلاً سلسلة غذائية متكاملة.',
    summaryEn: 'Organisms interconnect through food webs where producers harness solar energy and consumers sustain the trophic pyramid.',
    sections: [
      {
        titleAr: '1. كيف تبدأ كل سلسلة غذائية؟',
        titleEn: '1. Beginning of Food Chains',
        contentAr: 'تبدأ السلسلة الغذائية دائماً بكائن منتج (النبات أو العشب) لأنه الوحيد الذي يلتقط طاقة الشمس ليصنع غذاءً حقيقياً. ثم تأتي الحيوانات المستهلكة بالترتيب.',
        contentEn: 'Every food chain originates with autotrophic producers (plants) synthesizing solar energy.',
        interactiveExample: {
          titleAr: 'سلسلة غذائية برية نموذجية',
          titleEn: 'Standard Terrestrial Food Chain',
          equation: 'شمس -> عشب (منتج) -> أرنب (مستهلك 1) -> ثعلب (مستهلك 2)',
          steps: [
            { stepNumber: 1, textAr: 'العشب الأخضر ينمو بفضل ضوء الشمس والماء (مُنتِج).', textEn: 'Green grass synthesizes food from sunlight (Producer).', noteAr: 'حلقة البداية', noteEn: 'Producer base' },
            { stepNumber: 2, textAr: 'الأرنب يأكل العشب ليحصل على الطاقة (آكل أعشاب).', textEn: 'Rabbit eats grass for caloric energy (Primary consumer).', noteAr: 'مستهلك أول', noteEn: 'Herbivore' },
            { stepNumber: 3, textAr: 'الثعلب يصطاد الأرنب ليتغذى عليه (آكل لحوم).', textEn: 'Fox hunts rabbit for sustenance (Secondary consumer).', noteAr: 'مستهلك ثانٍ', noteEn: 'Carnivore' }
          ],
          takeawayAr: 'الشمس هي المصدر الرئيسي والأساسي للطاقة لكل الكائنات الحية على كوكب الأرض.',
          takeawayEn: 'The Sun is the ultimate fundamental powerhouse fueling all earthly food chains.'
        },
        tipsAr: ['آكل الأعشاب يتغذى على النبات فقط (كالغزال والخروف).', 'آكل اللحوم يتغذى على الحيوانات الأخرى (كالأسد والذئب).'],
        tipsEn: ['Herbivores consume foliage.', 'Carnivores feed on other animals.']
      }
    ],
    assessment: {
      id: 'quiz-psci-4',
      lectureId: 'psci-4',
      titleAr: 'الاختبار الإلزامي: السلاسل الغذائية والبيئة',
      titleEn: 'Lecture 4 Assessment: Food Chains',
      passingScore: 80,
      questions: [
        {
          id: 'qpsci4-1',
          textAr: 'لماذا تسمى النباتات الخضراء بـ "المُنْتِجَات" في السلسلة الغذائية؟',
          textEn: 'Why are green plants termed "Producers" in a food chain?',
          optionsAr: ['لأنها تصنع غذاءها بنفسها باستخدام ضوء الشمس', 'لأنها تأكل الحيوانات الأخرى', 'لأنها تعيش في الحدائق فقط', 'لأنها تنام في الشتاء'],
          optionsEn: ['They synthesize their own food using sunlight', 'They hunt other organisms', 'They reside in gardens', 'They hibernate'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف الكائن المنتج',
          conceptTestedEn: 'Autotroph producer definition',
          explanationAr: 'النباتات هي الكائنات الحية الوحيدة القادرة على إنتاج غذائها ذاتياً بضوء الشمس.',
          explanationEn: 'Plants produce organic nutrients autonomously using solar rays.',
          difficulty: 'easy'
        },
        {
          id: 'qpsci4-2',
          textAr: 'أي من الكائنات التالية يعتبر "آكل أعشاب" (مستهلك أول)؟',
          textEn: 'Which organism is an herbivore (primary consumer)?',
          optionsAr: ['الأسد المفترس', 'الأرنب الأليف', 'الصقر الجارح', 'النمر البري'],
          optionsEn: ['Predatory Lion', 'Domestic Rabbit', 'Hunting Falcon', 'Wild Tiger'],
          correctIndex: 1,
          conceptTestedAr: 'تصنيف آكلات الأعشاب',
          conceptTestedEn: 'Herbivore classification',
          explanationAr: 'الأرنب يتغذى على الجزر والأعشاب والنباتات فقط، لذلك يصنف من آكلات الأعشاب.',
          explanationEn: 'Rabbits feed exclusively on flora and grasses.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

// ============================================================================
// 4. ISLAMIC STUDIES (الدراسات الإسلامية والآداب - ابتدائي)
// ============================================================================
export const ISLAMIC_STUDIES_LECTURES: Lecture[] = [
  {
    id: 'pisl-1',
    order: 1,
    titleAr: 'المحاضرة 1: أركان الإسلام الخمسة والشهادتان وفضل الصلاة',
    titleEn: 'Lecture 1: The Five Pillars of Islam & The Virtue of Prayer',
    subtitleAr: 'حفظ وفهم أركان الإسلام، ومعنى الشهادتين، وتعلم خطوات الوضوء والصلاة الصحيحة',
    subtitleEn: 'Master the 5 pillars of Islam, Shahada meaning, and ablution steps.',
    durationMinutes: 20,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الرابع الابتدائي - الدراسات الإسلامية',
    gradeLevelNameEn: 'Grade 4 Elementary - Islamic Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: العقيدة والتوحيد وأركان الإسلام',
    unitTitleEn: 'Unit 1: Islamic Creed, Tawheed & Pillars',
    lessonNumberAr: 'الدرس 1: أركان الإسلام الخمسة والشهادتان وفضل الصلاة',
    lessonNumberEn: 'Lesson 1: The Five Pillars of Islam & Prayer',

    // Real-world hook
    warmupHookAr: 'قال رسول الله ﷺ: «بُنِيَ الإِسْلامُ عَلَى خَمْسٍ: شَهَادَةِ أَنْ لا إِلَهَ إِلا اللَّهُ وَأَنَّ مُحَمَّدًا رَسُولُ اللَّهِ، وَإِقَامِ الصَّلاةِ، وَإِيتَاءِ الزَّكَاةِ، وَصَوْمِ رَمَضَانَ، وَحَجِّ الْبَيْتِ لِمَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلاً». تخيل قصراً منيعاً يستند على خمسة أعمدة قوية؛ إذا سقط عمود منها تداعى البناء. هكذا هو إسلامنا الحنيف الذي نعيش في ظلاله المباركة!',
    warmupHookEn: 'Prophet Muhammad (PBUH) likened Islam to a noble fortress built upon five resilient pillars: the Shahada, Prayer, Zakat, Fasting Ramadan, and Hajj. Each pillar holds up the faithful life of a Muslim.',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يعدد الطالب أركان الإسلام الخمسة بالترتيب النبوي الصحيح',
      'أن يشرح المعنى العظيم لكلمتي الشهادة (لا معبود بحق إلا الله)',
      'أن يوضح منزلة الصلاة كعمود للدين وأوقات الصلوات الخمس المفروضة وركعاتها',
      'أن يستشعر فضل الطهارة والوضوء في حياة المسلم اليومية'
    ],
    learningOutcomesEn: [
      'Enumerate the five pillars of Islam in proper prophetic order',
      'Explain the profound meaning of the Shahada (Tawheed and Prophethood)',
      'Describe the status of the five daily obligatory prayers and their Rak\'ah counts',
      'Appreciate the spiritual virtues of cleanliness and Wudu'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'التوحيد (Tawheed)',
        termEn: 'Tawheed',
        definitionAr: 'إفراد الله سبحانه وتعالى بالعبادة وحده لا شريك له، ونفي الشرك بجميع صوره.',
        definitionEn: 'Directing all worship exclusively and sincerely to Allah alone.'
      },
      {
        termAr: 'الشهادتان (Shahada)',
        termEn: 'The Shahada',
        definitionAr: 'شهادة أن لا إله إلا الله وأن محمداً رسول الله، وهي مفتاح الدخول في الإسلام.',
        definitionEn: 'The core declaration of Islamic faith in Allah and His Messenger.'
      },
      {
        termAr: 'إقامة الصلاة (Salah)',
        termEn: 'Establishing Salah',
        definitionAr: 'أداء الصلوات الخمس المفروضة في أوقاتها بشروطها وأركانها وخشوعها وطهارتها.',
        definitionEn: 'Performing the five daily prayers at prescribed times with devotion.'
      }
    ],

    keyConceptsAr: [
      'حديث ابن عمر: بُني الإسلام على خمس',
      'الركن الأول: شهادة أن لا إله إلا الله وأن محمداً رسول الله',
      'الركن الثاني: إقامة الصلاة (الصلوات الخمس المفروضة في اليوم والليلة)',
      'الوضوء شرط لصحة الصلاة، وفضائل الطهارة'
    ],
    keyConceptsEn: [
      'Hadith of the 5 Pillars of Islam',
      'Shahada: Monotheism & Prophethood',
      'Five Daily Obligatory Prayers',
      'Taharah & Wudu Prerequisites'
    ],
    summaryAr: 'بنى النبي ﷺ الدين الإسلامي العظيم على خمسة أركان أساسية وثابتة: الشهادتان، إقامة الصلاة، إيتاء الزكاة، صوم رمضان، وحج بيت الله الحرام لمن استطاع إليه سبيلاً.',
    summaryEn: 'Islam is founded upon five core pillars anchoring worship and spiritual discipline.',
    sections: [
      {
        titleAr: '1. شجرة أركان الإسلام الخمسة والصلوات المفروضة',
        titleEn: '1. The Tree of Islam\'s Five Pillars',
        contentAr: 'الركن الأول هو بوابة الدخول في الإسلام: الشهادتان. يليه الركن العملي الأهم وهو الصلاة خمس مرات يومياً: الفجر، الظهر، العصر، المغرب، والعشاء، وهي صلة العبد بربه ومصدر طمأنينة قلبه.',
        contentEn: 'The first pillar is the Shahada, followed by the five daily prayers connecting believer to Creator.',
        diagram: {
          id: 'diag-islamic1-pillars',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'صرح أركان الإسلام الخمسة والصلوات المفروضة',
          titleEn: 'The Five Pillars of Islam Architectural Monument',
          captionAr: 'يوضح النموذج المعماري التوضيحي أركان الإسلام الخمسة التي يقوم عليها صرح الدين المتين: الشهادتان، إقامة الصلاة، إيتاء الزكاة، صوم رمضان، وحج البيت الحرام.',
          captionEn: 'The architectural diagram illustrates the five pillars upholding the edifice of Islam: Shahadah, Salah, Zakat, Sawm, and Hajj.',
          diagramType: 'islamic_pillars',
          takeawayFormulaAr: 'بُني الإسلام على خمس: الشهادتان، الصلاة، الزكاة، الصوم، الحج',
          takeawayFormulaEn: '5 Pillars: Shahadah, Salah, Zakat, Sawm, Hajj',
          keyLabels: [
            { tagAr: 'الركن الأول: الشهادتان', tagEn: '1st Pillar: Shahadah', descAr: 'شهادة التوحيد ونبوة محمد ﷺ', descEn: 'Declaration of monotheism and prophethood' },
            { tagAr: 'الركن الثاني: إقامة الصلاة', tagEn: '2nd Pillar: Salah', descAr: 'الصلوات الخمس المفروضة يومياً (17 ركعة)', descEn: 'Five daily prayers (17 Rak\'ahs total)' },
            { tagAr: 'الزكاة والصوم والحج', tagEn: 'Zakat, Sawm & Hajj', descAr: 'أركان التكافل والطهارة والاجتماع الإسلامي', descEn: 'Solidarity, fasting, and pilgrimage' }
          ]
        },
        interactiveExample: {
          titleAr: 'ترتيب الصلوات الخمس وركعاتها',
          titleEn: 'Five Daily Prayers & Rak\'ah Counts',
          equation: 'الفجر (2) + الظهر (4) + العصر (4) + المغرب (3) + العشاء (4) = 17 ركعة',
          steps: [
            { stepNumber: 1, textAr: 'صلاة الفجر: ركعتان جهرية في مطلع الصباح.', textEn: 'Fajr: 2 Rak\'ahs at dawn.', noteAr: 'بداية اليوم المبارك', noteEn: 'Dawn prayer' },
            { stepNumber: 2, textAr: 'صلاة الظهر وصلاة العصر: أربع ركعات سرية لكل منهما.', textEn: 'Dhuhr & Asr: 4 Rak\'ahs each.', noteAr: 'وسط النهار', noteEn: 'Midday prayers' },
            { stepNumber: 3, textAr: 'صلاة المغرب (3 ركعات) وصلاة العشاء (4 ركعات).', textEn: 'Maghrib (3) and Isha (4).', noteAr: 'المساء والليل', noteEn: 'Evening prayers' }
          ],
          takeawayAr: 'الصلاة عمود الدين، وهي أول ما يحاسب عليه العبد يوم القيامة.',
          takeawayEn: 'Prayer is the central pillar of religion and the soul\'s daily sanctuary.'
        },
        formativeCheck: {
          id: 'fc-pisl1-1',
          questionAr: 'ما هو الركن الثاني من أركان الإسلام بعد الشهادتين؟',
          questionEn: 'What is the second pillar of Islam following the Shahada?',
          optionsAr: ['صوم رمضان', 'إقامة الصلاة', 'إيتاء الزكاة', 'حج بيت الله الحرام'],
          optionsEn: ['Fasting Ramadan', 'Establishing Prayer (Salah)', 'Giving Zakat', 'Performing Hajj'],
          correctIndex: 1,
          explanationAr: 'الصلاة هي الركن الثاني وعمود الدين والصلة اليومية بين العبد وخالقه.',
          explanationEn: 'Salah is the second pillar and the daily link between servant and Creator.',
          hintAr: 'العبادة التي نؤديها 5 مرات في اليوم والليلة.',
          hintEn: 'The worship performed 5 times daily.'
        },
        tipsAr: ['احرص على إسباغ الوضوء وتوفير الماء وعدم الإسراف فيه.'],
        tipsEn: ['Perform wudu meticulously while conserving water.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'الركن 1: شهادة أن لا إله إلا الله وأن محمداً رسول الله (مفتاح الإسلام)',
      'الركن 2: إقامة الصلاة (صلة يومية بالله تعالى في 5 أوقات)',
      'الركن 3: إيتاء الزكاة (تطهير للمال ومساعدة للفقراء والمحتاجين)',
      'الركن 4: صوم رمضان (عبادة سنوية لتهذيب النفس والتقوى)',
      'الركن 5: حج بيت الله الحرام (مرة في العمر لمن استطاع إليه سبيلاً)'
    ],
    conceptMapEn: [
      'Pillar 1: Shahada - Monotheism and Prophethood',
      'Pillar 2: Salah - 5 Daily Prayers',
      'Pillar 3: Zakat - Obligatory Charity',
      'Pillar 4: Sawm - Fasting Ramadan',
      'Pillar 5: Hajj - Pilgrimage to Makkah once in a lifetime'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-pisl1-1',
        questionAr: 'اذكر عدد الركعات المفروضة لكل صلاة من الصلوات الخمس في اليوم والليلة.',
        questionEn: 'State the number of obligatory Rak\'ahs for each of the five daily prayers.',
        solutionStepsAr: [
          'صلاة الفجر: ركعتان (جهرية)',
          'صلاة الظهر: أربع ركعات (سرية)',
          'صلاة العصر: أربع ركعات (سرية)',
          'صلاة المغرب: ثلاث ركعات (جهرية في الركعتين الأوليين)',
          'صلاة العشاء: أربع ركعات (جهرية في الركعتين الأوليين)'
        ],
        solutionStepsEn: [
          'Fajr: 2 Rak\'ahs',
          'Dhuhr: 4 Rak\'ahs',
          'Asr: 4 Rak\'ahs',
          'Maghrib: 3 Rak\'ahs',
          'Isha: 4 Rak\'ahs'
        ],
        answerAr: 'إجمالي الركعات المفروضة في اليوم والليلة هو 17 ركعة.',
        answerEn: 'Total daily obligatory prayer units: 17 Rak\'ahs.'
      }
    ],
    assessment: {
      id: 'quiz-pisl-1',
      lectureId: 'pisl-1',
      titleAr: 'الاختبار الإلزامي: أركان الإسلام والصلوات',
      titleEn: 'Lecture 1 Assessment: Pillars of Islam',
      passingScore: 80,
      questions: [
        {
          id: 'qpisl1-1',
          textAr: 'كم عدد أركان الإسلام التي بني عليها الدين؟',
          textEn: 'How many pillars is Islam built upon?',
          optionsAr: ['3 أركان', '4 أركان', '5 أركان', '6 أركان'],
          optionsEn: ['3 Pillars', '4 Pillars', '5 Pillars', '6 Pillars'],
          correctIndex: 2,
          conceptTestedAr: 'عدد أركان الإسلام',
          conceptTestedEn: 'Number of Islamic pillars',
          explanationAr: 'قال النبي ﷺ: "بُني الإسلام على خمس..."، إذن أركان الإسلام خمسة أركان.',
          explanationEn: 'The Prophet Muhammad (PBUH) stated Islam is built on five pillars.',
          difficulty: 'easy'
        },
        {
          id: 'qpisl1-2',
          textAr: 'ما هي أول صلاة مفروضة في اليوم يبدأ بها المسلم يومه عند مطلع الفجر؟',
          textEn: 'Which obligatory prayer begins the Muslim\'s day at dawn?',
          optionsAr: ['صلاة الظهر', 'صلاة الفجر', 'صلاة المغرب', 'صلاة العصر'],
          optionsEn: ['Dhuhr', 'Fajr', 'Maghrib', 'Asr'],
          correctIndex: 1,
          conceptTestedAr: 'الصلوات الخمس المفروضة',
          conceptTestedEn: 'Daily prayer times',
          explanationAr: 'صلاة الفجر هي أولى الصلوات الخمس المفروضة وتؤدى ركعتين عند طلوع الفجر.',
          explanationEn: 'Fajr is the dawn prayer starting the day.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'pisl-2',
    order: 2,
    titleAr: 'المحاضرة 2: أركان الإيمان الستة ومحبة الله وتوحيده',
    titleEn: 'Lecture 2: The Six Pillars of Faith (Iman) & Monotheism',
    subtitleAr: 'التعرف على أركان الإيمان الستة في حديث جبريل، واستشعار مراقبة الله في كل وقت',
    subtitleEn: 'Explore the 6 pillars of Iman in Hadith Jibril and divine mindfulness.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'أركان الإيمان الستة: الإيمان بالله، وملائكته، وكتبه، ورسله، واليوم الآخر، والقدر خيره وشره',
      'الإيمان عمل قلبي يصدقه اللسان والجوارح',
      'الله الخالق الرزاق لا شريك له في ملكه',
      'الملائكة مخلوقات نورانية تطيع الله وتسبحه'
    ],
    keyConceptsEn: [
      'Six Pillars of Faith from Hadith Jibril',
      'Faith residing in Heart and demonstrated in Action',
      'Tawheed (Islamic Monotheism)',
      'Angels as obedient celestial beings created from light'
    ],
    summaryAr: 'الإيمان هو اليقين الراسخ في القلب. وقد علمنا النبي ﷺ في حديث جبريل المشهور أن نؤمن بالله العظيم، وملائكته الكرام، وكتبه السماوية، ورسله الصادقين، واليوم الآخر، وبالقدر خيره وشره.',
    summaryEn: 'Iman reflects inner spiritual convictions in God, Angels, Revelations, Messengers, the Last Day, and Destiny.',
    sections: [
      {
        titleAr: '1. الفرق بين أركان الإسلام وأركان الإيمان',
        titleEn: '1. Islam vs Iman Pillars',
        contentAr: 'أركان الإسلام الخمسة أعمال ظاهرة نقوم بها بأجسادنا (نطق الشهادتين، ركوع الصلاة، الصيام). أما أركان الإيمان الستة فهي عقيدة قلبية ويقين داخلي صادق في قلوبنا.',
        contentEn: 'Islam comprises external rituals; Iman encapsulates internal convictions of the heart.',
        interactiveExample: {
          titleAr: 'منظومة أركان الإيمان الستة',
          titleEn: 'The 6 Pillars Matrix',
          equation: 'إيمان بالله + ملائكته + كتبه + رسله + اليوم الآخر + القدر',
          steps: [
            { stepNumber: 1, textAr: 'الإيمان بالله وحده لا شريك له: هو الخالق الرازق المنعم.', textEn: 'Belief in One God: Creator & Sustainer.', noteAr: 'الركن الأعظم', noteEn: 'Primary pillar' },
            { stepNumber: 2, textAr: 'الإيمان بالملائكة الكرام (مثل جبريل وميكائيل) وبالكتب المنزلة (كالقرآن).', textEn: 'Belief in Angels (e.g. Jibril) and Revelations.', noteAr: 'الغيب والرسالات', noteEn: 'Unseen realm' },
            { stepNumber: 3, textAr: 'الإيمان برسل الله، واليوم الآخر (يوم الحساب)، وبالقدر.', textEn: 'Belief in Prophets, the Hereafter, and Destiny.', noteAr: 'تمام الإيمان', noteEn: 'Complete faith' }
          ],
          takeawayAr: 'المؤمن الصادق يعلم أن الله يراه ويسمعه في كل وقت وساعة، فيحسن العمل.',
          takeawayEn: 'Mindfulness of God\'s presence instills noble character and deeds.'
        },
        tipsAr: ['الملك الموكل بالوحي من الله إلى الرسل هو الملك جبريل عليه السلام.'],
        tipsEn: ['Angel Jibril was tasked with transmitting divine revelation.']
      }
    ],
    assessment: {
      id: 'quiz-pisl-2',
      lectureId: 'pisl-2',
      titleAr: 'الاختبار الإلزامي: أركان الإيمان الستة',
      titleEn: 'Lecture 2 Assessment: Pillars of Faith',
      passingScore: 80,
      questions: [
        {
          id: 'qpisl2-1',
          textAr: 'كم عدد أركان الإيمان في الإسلام؟',
          textEn: 'How many pillars of Faith (Iman) exist in Islamic theology?',
          optionsAr: ['4 أركان', '5 أركان', '6 أركان', '7 أركان'],
          optionsEn: ['4 Pillars', '5 Pillars', '6 Pillars', '7 Pillars'],
          correctIndex: 2,
          conceptTestedAr: 'عدد أركان الإيمان',
          conceptTestedEn: 'Count of faith pillars',
          explanationAr: 'أركان الإيمان ستة كما جاء في حديث جبريل عليه السلام.',
          explanationEn: 'The pillars of Iman are six.',
          difficulty: 'easy'
        },
        {
          id: 'qpisl2-2',
          textAr: 'من هو الملك الموكل بالنزول بالوحي على الأنبياء والرسل عليهم الصلاة والسلام؟',
          textEn: 'Which Angel was designated to deliver revelations to prophets?',
          optionsAr: ['الملك جبريل عليه السلام', 'الملك ميكائيل عليه السلام', 'الملك إسرافيل عليه السلام', 'ملك الموت عليه السلام'],
          optionsEn: ['Angel Jibril', 'Angel Mika\'il', 'Angel Israfil', 'Angel of Death'],
          correctIndex: 0,
          conceptTestedAr: 'معرفة الملائكة ووظائفهم',
          conceptTestedEn: 'Angel duties: Revelation',
          explanationAr: 'الملك جبريل عليه السلام هو الروح الأمين الموكل بنقل الوحي الإلهي.',
          explanationEn: 'Angel Jibril delivered the revelations.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'pisl-3',
    order: 3,
    titleAr: 'المحاضرة 3: الآداب والأخلاق الإسلامية: الصدق، بر الوالدين، وإفشاء السلام',
    titleEn: 'Lecture 3: Islamic Morals: Honesty, Filial Piety & Spreading Peace',
    subtitleAr: 'التخلق بأخلاق القرآن: الصدق ونبذ الكذب، طاعة الوالدين وإسعادهما، ونشر المحبة والسلام',
    subtitleEn: 'Embodying Quranic morals: truthfulness, kindness to parents, and greeting with Salam.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'الصدق يهدي إلى البر والبر يهدي إلى الجنة',
      'بر الوالدين أعظم الأعمال بعد الصلاة على وقتها',
      'تحية الإسلام: (السلام عليكم ورحمة الله وبركاته) وفضل إفشائها',
      'إماطة الأذى عن الطريق وحسن الجوار والرفق بالحيوان'
    ],
    keyConceptsEn: [
      'Truthfulness Leads to Righteousness',
      'Filial Piety (Birr al-Walidayn)',
      'The Islamic Greeting: As-Salamu Alaykum',
      'Compassion to Neighbors and Animals'
    ],
    summaryAr: 'المسلم الحق يتميز بأخلاقه الرفيعة؛ فالصادق يحبه الله والناس، والبار بوالديه ينال رضا ربه وتوفيقه في الدنيا والآخرة، وإفشاء السلام يزرع المحبة والمودة بين أفراد المجتمع.',
    summaryEn: 'Islamic manners champion truthfulness, loving devotion to parents, and greeting all people with peace.',
    sections: [
      {
        titleAr: '1. الصدق وبر الوالدين: تاج المسلم',
        titleEn: '1. Truthfulness & Honesty',
        contentAr: 'كان نبينا محمد ﷺ يُلقب قبل البعثة بـ "الصادق الأمين". والصدق هو أن تخبر بالحقيقة دائماً دون خوف، والبر بالوالدين يعني طاعتهما بالمعروف ومساعدتهما والتحدث إليهما بأدب ولطف.',
        contentEn: 'Prophet Muhammad was revered as "The Truthful and Trustworthy". Honesty and honoring parents are primary ethical hallmarks.',
        interactiveExample: {
          titleAr: 'كيف نبر والدينا يومياً؟',
          titleEn: 'Practical Daily Piety',
          equation: 'أدب في الحديث + طاعة في المعروف + دعاء مستمر = رضا الله والوالدين',
          steps: [
            { stepNumber: 1, textAr: 'نقول لهما دائماً: شكراً، ونتحدث بصوت هادئ دون رفع الصوت.', textEn: 'Speak gently and respectfully without raising voice.', noteAr: 'أدب التخاطب', noteEn: 'Gentle speech' },
            { stepNumber: 2, textAr: 'نساعد في ترتيب المنزل والمهام اليومية بإيجابية وسرور.', textEn: 'Assist in daily household chores cheerfully.', noteAr: 'المساعدة العملية', noteEn: 'Practical help' },
            { stepNumber: 3, textAr: 'ندعو لهما بالدعاء القرآني: "رَّبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا".', textEn: 'Pray for them continuously with Quranic supplication.', noteAr: 'الدعاء الصادق', noteEn: 'Supplication' }
          ],
          takeawayAr: 'رضا الله تعالى في رضا الوالدين، وسخطه في سخط الوالدين.',
          takeawayEn: 'Divine pleasure is intimately tied to loving and honoring one\'s parents.'
        },
        tipsAr: ['عندما تقابل أحداً بادر بالابتسامة وألقِ تحية الإسلام كاملة لتكسب ثلاثين حسنة!'],
        tipsEn: ['A smile and full Salam greeting yields immense spiritual reward.']
      }
    ],
    assessment: {
      id: 'quiz-pisl-3',
      lectureId: 'pisl-3',
      titleAr: 'الاختبار الإلزامي: مكارم الأخلاق والآداب',
      titleEn: 'Lecture 3 Assessment: Morals & Manners',
      passingScore: 80,
      questions: [
        {
          id: 'qpisl3-1',
          textAr: 'بماذا كان يلقب أهل مكة نبينا محمداً ﷺ لشدة صدقه وأمانته قبل البعثة؟',
          textEn: 'What title did the people of Mecca bestow on Prophet Muhammad before his mission?',
          optionsAr: ['الصادق الأمين', 'الكريم الشجاع', 'الحكيم العادل', 'الشاعر الفصيح'],
          optionsEn: ['The Truthful and Trustworthy', 'The Generous and Brave', 'The Wise and Just', 'The Eloquent Poet'],
          correctIndex: 0,
          conceptTestedAr: 'أخلاق النبي محمد صلى الله عليه وسلم',
          conceptTestedEn: 'Prophet\'s noble character',
          explanationAr: 'عُرف النبي ﷺ بالصدق والأمانة المطلقة فلقبوه بـ "الصادق الأمين".',
          explanationEn: 'He was renowned as As-Sadiq Al-Ameen (Truthful & Trustworthy).',
          difficulty: 'easy'
        },
        {
          id: 'qpisl3-2',
          textAr: 'ما هي تحية الإسلام المباركة التي ينشر بها المسلم السلام والمحبة؟',
          textEn: 'What is the blessed Islamic greeting of peace?',
          optionsAr: ['صباح الخير فقط', 'السلام عليكم ورحمة الله وبركاته', 'مرحباً وأهلاً', 'إلى اللقاء'],
          optionsEn: ['Good morning only', 'As-Salamu Alaykum wa Rahmatullahi wa Barakatuh', 'Welcome', 'Goodbye'],
          correctIndex: 1,
          conceptTestedAr: 'صيغة تحية الإسلام',
          conceptTestedEn: 'Islamic greeting formula',
          explanationAr: 'تحية الإسلام هي "السلام عليكم ورحمة الله وبركاته" وهي دعاء بالسلام والرحمة والبركة.',
          explanationEn: 'The Islamic greeting is As-Salamu Alaykum.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'pisl-4',
    order: 4,
    titleAr: 'المحاضرة 4: قصص الأنبياء وسيرة النبي محمد ﷺ وأخلاقه العظيمة',
    titleEn: 'Lecture 4: Prophetic Stories & Character of Prophet Muhammad ﷺ',
    subtitleAr: 'التعرف على صبر نوح، وتوحيد إبراهيم، وسيرة خاتم الأنبياء والمرسلين نبينا محمد ﷺ',
    subtitleEn: 'Learn from the patience of Nuh, Tawheed of Ibrahim, and life of Prophet Muhammad.',
    durationMinutes: 20,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: [
      'الأنبياء والرسل قدوتنا في الصبر والتوحيد والأخلاق',
      'قصة خليل الله إبراهيم عليه السلام ودعوته للتوحيد',
      'ولادة النبي محمد ﷺ بمكة المكرمة ونشأته يتيماً',
      'نزول الوحي في غار حراء ورسالة الإسلام للعالمين كافة'
    ],
    keyConceptsEn: [
      'Prophets as Paragons of Faith and Resilience',
      'Prophet Ibrahim\'s Monotheistic Heritage',
      'Birth and Orphanhood of Prophet Muhammad in Mecca',
      'Revelation in the Cave of Hira and Universal Message'
    ],
    summaryAr: 'أرسل الله الأنبياء والرسل مبشرين ومنذرين لهداية الناس إلى عبادة الله وحده؛ وخاتمهم وأفضلهم هو نبينا محمد ﷺ الذي بعثه الله رحمة للعالمين ومتمماً لمكارم الأخلاق.',
    summaryEn: 'God sent messengers to illuminate the path of monotheism, culminating in the Seal of Prophets, Muhammad (PBUH).',
    sections: [
      {
        titleAr: '1. مقتطفات من سيرة الحبيب المصطفى ﷺ',
        titleEn: '1. Highlights from the Seerah',
        contentAr: 'ولد النبي محمد ﷺ في مكة المكرمة في عام الفيل، وعاش يتيماً صابراً ومثالاً في النقاء والأخلاق. وعندما بلغ الأربعين نزل عليه الوحي في غار حراء بأول آيات القرآن: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ".',
        contentEn: 'Born in Mecca, he was an upright orphan who received the first revelation at age 40 in Hira cave: "Read in the name of your Lord who created".',
        interactiveExample: {
          titleAr: 'محطات مضيئة في السيرة النبوية',
          titleEn: 'Seerah Milestones',
          equation: 'المولد بمكة -> نزول الوحي بغار حراء -> الهجرة إلى المدينة المنورة',
          steps: [
            { stepNumber: 1, textAr: 'الولادة بمكة المكرمة ورعاية جده عبد المطلب وعمه أبي طالب.', textEn: 'Birth in Mecca and upbringing.', noteAr: 'النشأة الطاهرة', noteEn: 'Early life' },
            { stepNumber: 2, textAr: 'نزول الوحي جبريل عليه السلام بأول سورة العلق (اقرأ).', textEn: 'Descent of revelation with Surah Al-Alaq.', noteAr: 'مبدأ النبوة', noteEn: 'First revelation' },
            { stepNumber: 3, textAr: 'الهجرة النبوية إلى المدينة المنورة وبناء المسجد والمؤاخاة.', textEn: 'Migration to Medina and community building.', noteAr: 'تأسيس الدولة', noteEn: 'The Hijrah' }
          ],
          takeawayAr: 'قال الله تعالى واصفاً نبيه الكريم: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ".',
          takeawayEn: 'The Quran describes the Prophet as possessing exemplary character.'
        },
        tipsAr: ['الصلاة على النبي ﷺ ترفع الدرجات وتغفر السيئات (اللهم صلِّ وسلم على نبينا محمد).'],
        tipsEn: ['Sending blessings upon the Prophet brings tremendous peace and reward.']
      }
    ],
    assessment: {
      id: 'quiz-pisl-4',
      lectureId: 'pisl-4',
      titleAr: 'الاختبار الإلزامي: السيرة والأنبياء',
      titleEn: 'Lecture 4 Assessment: The Seerah',
      passingScore: 80,
      questions: [
        {
          id: 'qpisl4-1',
          textAr: 'ما هي أول كلمة نزلت من القرآن الكريم على نبينا محمد ﷺ في غار حراء؟',
          textEn: 'What was the very first word of the Quran revealed in the cave of Hira?',
          optionsAr: ['اكتُبْ', 'اقْرَأْ', 'قُمْ', 'اسْمَعْ'],
          optionsEn: ['Write', 'Read (Iqra)', 'Stand', 'Listen'],
          correctIndex: 1,
          conceptTestedAr: 'أول ما نزل من القرآن الكريم',
          conceptTestedEn: 'First revealed word of the Quran',
          explanationAr: 'أول كلمة نزلت من الوحي هي "اقْرَأْ" في مستهل سورة العلق: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ".',
          explanationEn: '"Iqra" (Read) was the first divine command.',
          difficulty: 'easy'
        },
        {
          id: 'qpisl4-2',
          textAr: 'في أي مدينة مباركة ولد نبينا محمد ﷺ؟',
          textEn: 'In which blessed city was Prophet Muhammad born?',
          optionsAr: ['المدينة المنورة', 'مكة المكرمة', 'القدس الشريف', 'الطائف'],
          optionsEn: ['Medina', 'Mecca', 'Jerusalem', 'Taif'],
          correctIndex: 1,
          conceptTestedAr: 'مكان ولادة النبي صلى الله عليه وسلم',
          conceptTestedEn: 'Birthplace of the Prophet',
          explanationAr: 'ولد نبينا محمد ﷺ في مكة المكرمة عام الفيل.',
          explanationEn: 'The Prophet was born in Mecca in the Year of the Elephant.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
