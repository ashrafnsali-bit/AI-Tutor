const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src/data/curriculumData.ts');
let content = fs.readFileSync(filePath, 'utf8');

const newMathLectures = `// ============================================================================
// 1. MATHEMATICS CURRICULUM — GRADE 12 STEM / SAUDI MASARAT (رياضيات 3 ثانوي مسارات)
// ============================================================================
export const MATH_LECTURES: Lecture[] = [
  {
    id: 'math-1',
    order: 1,
    titleAr: 'المحاضرة 1: تحليل الدوال، والاتصال، وسلوك طرفي التمثيل البياني',
    titleEn: 'Lecture 1: Function Analysis, Continuity, End Behavior & Extreme Values',
    subtitleAr: 'تحديد المجال والمدى، واختبارات الاتصال ونقاط عدم الاتصال، وفترات التزايد والتناقص ومعدل التغير',
    subtitleEn: 'Master domain, range, continuity tests, jump/infinite discontinuities, and average rate of change.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: تحليل الدوال وخصائصها وتطبيقاتها',
    unitTitleEn: 'Unit 1: Functions Analysis & Properties',
    lessonNumberAr: 'الدرس 1: الدوال والاتصال ومعدل التغير',
    lessonNumberEn: 'Lesson 1: Functions, Continuity & Rate of Change',

    // Real-world hook
    warmupHookAr: 'عند تصميم مسارات الملاحة الجوية أو نمذجة سرعة انتقال الإشارات في شبكات الألياف البصرية، يحتاج المهندسون إلى دوال رياضية مستمرة تضمن عدم وجود انقطاع مفاجئ. كيف نتحقق من أن نظاماً هندسياً يعمل بسلاسة دون قفزات غير متوقعة؟ اختبارات الاتصال الرياضية وتحليل سلوك الدوال هي حجر الأساس لكل خوارزميات الذكاء الاصطناعي والهندسة الحديثة!',
    warmupHookEn: 'In aerospace flight control and fiber optics, smooth continuous mathematical models prevent catastrophic system failures. Continuity and function behavior analysis form the foundational bedrock of all modern control systems and machine learning!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يحدد الطالب مجال الدالة ومداها بيانياً وجبرياً بدقة',
      'أن يطبق شروط الاتصال الثلاثة للتحقق من اتصال الدالة عند نقطة معطاة x = c',
      'أن يصنف أنواع عدم الاتصال (نقطي/قابل للإزالة، قفزي، لانهائي)',
      'أن يحسب متوسط معدل التغير للدالة في فترة مغلقة ويحدد فترات التزايد والتناقص'
    ],
    learningOutcomesEn: [
      'Determine function domain and range analytically and graphically',
      'Apply the 3 continuity conditions to test continuity at point x = c',
      'Classify discontinuities into removable, jump, and infinite types',
      'Calculate average rate of change over closed intervals and identify monotonicity'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'الاتصال (Continuity)',
        termEn: 'Continuity',
        definitionAr: 'تكون الدالة f(x) متصلة عند x = c إذا كانت معرفة عند النقطة، ونهايتها موجودة عندما تقترب x من c، وقيمة النهاية تساوي قيمة الدالة: lim_{x -> c} f(x) = f(c).',
        definitionEn: 'A function is continuous at c if f(c) is defined, lim_{x -> c} f(x) exists, and lim_{x -> c} f(x) = f(c).'
      },
      {
        termAr: 'عدم الاتصال القفزي (Jump Discontinuity)',
        termEn: 'Jump Discontinuity',
        definitionAr: 'عدم اتصال يحدث عندما تكون النهاية من اليمين موجودة والنهاية من اليسار موجودة ولكنهما غير متساويتين: lim_{x -> c^+} f(x) != lim_{x -> c^-} f(x).',
        definitionEn: 'Discontinuity where left-hand and right-hand limits exist as real numbers but are not equal.'
      },
      {
        termAr: 'متوسط معدل التغير (Average Rate of Change)',
        termEn: 'Average Rate of Change',
        definitionAr: 'ميل القاطع المار بالنقطتين (a, f(a)) و (b, f(b)) على منحنى الدالة، ويحسب بالقانون: m_sec = [f(b) - f(a)] / (b - a).',
        definitionEn: 'The slope of the secant line across interval [a, b]: [f(b) - f(a)] / (b - a).'
      }
    ],

    keyConceptsAr: ['شروط الاتصال الثلاثة', 'تصنيف نقاط عدم الاتصال', 'فترات التزايد والتناقص والقيم القصوى', 'متوسط معدل التغير وسلوك الطرفين'],
    keyConceptsEn: ['Three Continuity Conditions', 'Discontinuity Classification', 'Monotonicity & Extrema', 'Average Rate of Change & End Behavior'],
    summaryAr: 'في هذه المحاضرة نتقن تحليل الدوال الرياضية المتقدمة لصف الثالث ثانوي؛ حيث نفحص اتصال الدوال وسلوكها عندما تقترب المدخلات من قيم حرجة أو تقترب من اللانهاية، ونحسب متوسط التغير الذي يمهد لعلم التفاضل.',
    summaryEn: 'In this lecture, we master advanced functions analysis: testing continuity at critical points, classifying singularities, and computing average rates of change leading to calculus.',
    sections: [
      {
        titleAr: '1. شروط الاتصال وتصنيف عدم الاتصال',
        titleEn: '1. Continuity Conditions & Discontinuity Classification',
        contentAr: 'تكون الدالة متصلة عند x = c إذا وفقط إذا تحققت الشروط الثلاثة معاً: 1) f(c) معرفة، 2) نهاية الدالة عند x -> c موجودة، 3) قيمة النهاية تساوي f(c). إذا فشل شرط، نصنف عدم الاتصال: إذا كانت النهاية موجودة لكن f(c) غير معرفة أو مختلفة فهو (قابل للإزالة / نقطي)، وإذا اختلفت النهاية اليمنى عن اليسرى فهو (قفزي)، وإذا اقتربت الدالة من موجب أو سالب لانهاية فهو (لانهائي).',
        contentEn: 'A function is continuous at x = c iff: 1) f(c) is defined, 2) lim_{x -> c} f(x) exists, 3) lim_{x -> c} f(x) = f(c). Failures yield removable, jump, or infinite discontinuities.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: اختبار اتصال دالة متعددة التعريف',
          titleEn: 'Worked Example: Testing Piecewise Function Continuity',
          equation: 'f(x) = { 2x + 1 (x < 2),  5 (x = 2),  x^2 + 1 (x > 2) }',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نتحقق من الشرط الأول وهو إيجاد قيمة الدالة عند x = 2: f(2) = 5 (معرفة وموجودة).',
              textEn: 'Step 1: Evaluate f(2) = 5 (defined).',
              noteAr: 'الشرط الأول متحقق'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نحسب النهاية من اليسار: lim_{x -> 2^-} (2x + 1) = 2(2) + 1 = 5. ثم نحسب النهاية من اليمين: lim_{x -> 2^+} (x^2 + 1) = 2^2 + 1 = 5.',
              textEn: 'Step 2: Left limit = 2(2)+1 = 5, Right limit = 2^2+1 = 5.',
              noteAr: 'بما أن النهايتين متساويتان، فإن lim_{x -> 2} f(x) = 5 موجودة'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نقارن النهاية بقيمة الدالة: lim_{x -> 2} f(x) = f(2) = 5. بما أن الشروط الثلاثة تحققت، فالدالة متصلة تماماً عند x = 2.',
              textEn: 'Step 3: Since lim = f(2) = 5, f(x) is continuous at x = 2.',
              noteAr: 'الحكم النهائي: الدالة متصلة'
            }
          ],
          takeawayAr: 'التحقق من الاتصال يتطلب اختبار الطرفين الأيمن والأيسر بالإضافة إلى نقطة التعريف بدقة.',
          takeawayEn: 'Testing continuity requires matching both one-sided limits with the exact function value.'
        },
        tipsAr: ['تحقق دائماً من شروط الاتصال الثلاثة بالترتيب', 'في الدوال الكسرية، حلل البسط والمقام لاكتشاف عدم الاتصال القابل للإزالة'],
        tipsEn: ['Always verify all 3 continuity conditions in sequence', 'Factor rational expressions to find removable hole singularities'],
        formativeCheck: {
          id: 'fc-math1-1',
          questionAr: 'ما نوع عدم الاتصال للدالة f(x) = (x^2 - 9) / (x - 3) عند النقطة x = 3؟',
          questionEn: 'What type of discontinuity exists for f(x) = (x^2 - 9) / (x - 3) at x = 3?',
          optionsAr: [
            'عدم اتصال قابل للإزالة (نقطي) لأن النهاية موجودة وتساوي 6',
            'عدم اتصال قفزي لأن النهاية من اليمين تختلف عن اليسار',
            'عدم اتصال لانهائي لوجود صفر في المقام',
            'الدالة متصلة ولا يوجد انقطاع'
          ],
          optionsEn: [
            'Removable (point) discontinuity because the limit exists and equals 6',
            'Jump discontinuity because one-sided limits differ',
            'Infinite discontinuity due to zero denominator',
            'The function is continuous with no singularities'
          ],
          correctIndex: 0,
          explanationAr: 'بتحليل البسط: (x - 3)(x + 3) / (x - 3) = x + 3 عند x != 3. النهاية lim_{x -> 3} (x + 3) = 6 موجودة، لكن f(3) غير معرفة؛ لذا فهو عدم اتصال قابل للإزالة (Removable).',
          explanationEn: 'Factoring gives (x - 3)(x + 3)/(x - 3) = x + 3. The limit is 6, but f(3) is undefined, making it a removable discontinuity.',
          hintAr: 'حلل الفرق بين مربعين في البسط واختصر مع المقام ثم احسب النهاية.'
        }
      },
      {
        titleAr: '2. فترات التزايد والتناقص ومتوسط معدل التغير',
        titleEn: '2. Monotonicity & Average Rate of Change',
        contentAr: 'تكون الدالة متزايدة على فترة إذا كانت قيم f(x) تزداد كلما زادت x، وتكون متناقصة إذا تناقصت f(x). متوسط معدل التغير بين النقطتين x1 و x2 يحسب عبر القانون: m_sec = [f(x2) - f(x1)] / (x2 - x1). وهو يمثل ميل الخط القاطع.',
        contentEn: 'A function is increasing if f(x) rises with x, and decreasing if it falls. Average rate of change is m_sec = [f(x2) - f(x1)] / (x2 - x1).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب متوسط معدل التغير',
          titleEn: 'Worked Example: Calculating Average Rate of Change',
          equation: 'f(x) = 2x^2 - 3x + 1  في الفترة  [1, 4]',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نحسب قيمة الدالة عند طرفي الفترة: f(1) = 2(1)^2 - 3(1) + 1 = 0.',
              textEn: 'Step 1: Compute f(1) = 2(1) - 3(1) + 1 = 0.',
              noteAr: 'نقطة البداية (1, 0)'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نحسب f(4) = 2(4)^2 - 3(4) + 1 = 2(16) - 12 + 1 = 32 - 12 + 1 = 21.',
              textEn: 'Step 2: Compute f(4) = 2(16) - 12 + 1 = 21.',
              noteAr: 'نقطة النهاية (4, 21)'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نطبق قانون متوسط معدل التغير: m = (21 - 0) / (4 - 1) = 21 / 3 = 7.',
              textEn: 'Step 3: Apply formula: m = (21 - 0) / (4 - 1) = 21 / 3 = 7.',
              noteAr: 'النتيجة: متوسط معدل التغير = 7 وحدات'
            }
          ],
          takeawayAr: 'متوسط معدل التغير هو المفهوم الهندسي الحاسم الذي يتحول إلى المشتقة عندما تقترب المسافة بين النقطتين من الصفر.',
          takeawayEn: 'Average rate of change is the secant slope that transforms into the derivative as interval width approaches zero.'
        },
        tipsAr: ['متوسط معدل التغير يمثل ميل القاطع المار بنقطتين على منحنى الدالة'],
        tipsEn: ['The average rate of change represents the secant slope between two points on the curve'],
        formativeCheck: {
          id: 'fc-math1-2',
          questionAr: 'إذا كانت f(x) = x^3 - 2x، ما هو متوسط معدل التغير في الفترة [0, 2]؟',
          questionEn: 'If f(x) = x^3 - 2x, what is the average rate of change on [0, 2]?',
          optionsAr: ['2', '4', '6', '8'],
          optionsEn: ['2', '4', '6', '8'],
          correctIndex: 0,
          explanationAr: 'f(0) = 0 - 0 = 0. f(2) = 2^3 - 2(2) = 8 - 4 = 4. متوسط معدل التغير = (4 - 0) / (2 - 0) = 4 / 2 = 2.',
          explanationEn: 'f(0) = 0, f(2) = 8 - 4 = 4. Average rate of change = (4 - 0)/(2 - 0) = 2.',
          hintAr: 'احسب f(2) و f(0) ثم اقسم الفرق في القيم على (2 - 0).'
        }
      }
    ],

    assessment: {
      id: 'quiz-math-1',
      lectureId: 'math-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: تحليل الدوال والاتصال (3 ثانوي STEM)',
      titleEn: 'Mastery Quiz 1: Functions Analysis & Continuity (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qm1-1',
          textAr: 'ما هو مجال الدالة f(x) = √(2x - 8) في مجموعة الأعداد الحقيقية R؟',
          textEn: 'What is the domain of f(x) = √(2x - 8) in real numbers R?',
          optionsAr: ['[4, ∞)', '(4, ∞)', '(-∞, 4]', 'R ما عدا 4'],
          optionsEn: ['[4, ∞)', '(4, ∞)', '(-∞, 4]', 'R except 4'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد مجال الدوال الجذرية',
          conceptTestedEn: 'Radical Function Domain',
          explanationAr: 'يجب أن يكون ما تحت الجذر التربيعي أكبر من أو يساوي الصفر: 2x - 8 >= 0 => 2x >= 8 => x >= 4. إذن المجال هو الفترة المغلقة [4, ∞).',
          explanationEn: '2x - 8 >= 0 => x >= 4, yielding [4, ∞).',
          difficulty: 'medium'
        },
        {
          id: 'qm1-2',
          textAr: 'لتكون الدالة f(x) = { (x^2 - 16)/(x - 4)  عند x != 4,   k  عند x = 4 } متصلة عند x = 4، ما قيمة الثابت k؟',
          textEn: 'For f(x) to be continuous at x = 4, what must be the value of constant k?',
          optionsAr: ['8', '4', '16', '0'],
          optionsEn: ['8', '4', '16', '0'],
          correctIndex: 0,
          conceptTestedAr: 'إيجاد قيمة الثابت لجعل الدالة متصلة',
          conceptTestedEn: 'Continuity Parameter Solving',
          explanationAr: 'lim_{x -> 4} (x - 4)(x + 4) / (x - 4) = 4 + 4 = 8. لكي تكون الدالة متصلة يجب أن تكون f(4) = lim f(x) = 8، إذن k = 8.',
          explanationEn: 'Limit as x->4 is 4+4=8. Setting f(4) = k = 8 ensures continuity.',
          difficulty: 'medium'
        },
        {
          id: 'qm1-3',
          textAr: 'الدالة f(x) = 1 / (x - 5)^2 تمتلك عند x = 5:',
          textEn: 'The function f(x) = 1 / (x - 5)^2 at x = 5 possesses:',
          optionsAr: [
            'عدم اتصال لانهائي (Infinite Discontinuity)',
            'عدم اتصال قفزي (Jump Discontinuity)',
            'عدم اتصال قابل للإزالة (Removable Discontinuity)',
            'نقطة انعطاف متصلة'
          ],
          optionsEn: [
            'Infinite Discontinuity',
            'Jump Discontinuity',
            'Removable Discontinuity',
            'Continuous inflection point'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تصنيف عدم الاتصال اللانهائي',
          conceptTestedEn: 'Infinite Singularity Classification',
          explanationAr: 'عند اقتراب x من 5، يتجه المقام إلى الصفر بينما البسط موجب، فتتجه f(x) إلى +∞ من الجهتين، وهو عدم اتصال لانهائي.',
          explanationEn: 'As x -> 5, denominator approaches zero positively while numerator is 1, sending f(x) -> +∞ (Infinite Discontinuity).',
          difficulty: 'easy'
        },
        {
          id: 'qm1-4',
          textAr: 'ما هو متوسط معدل التغير للدالة f(x) = 3x^2 + 2x في الفترة [1, 3]؟',
          textEn: 'What is the average rate of change of f(x) = 3x^2 + 2x on [1, 3]?',
          optionsAr: ['14', '12', '16', '10'],
          optionsEn: ['14', '12', '16', '10'],
          correctIndex: 0,
          conceptTestedAr: 'حساب متوسط معدل التغير',
          conceptTestedEn: 'Average Rate of Change Calculation',
          explanationAr: 'f(1) = 3(1) + 2(1) = 5. f(3) = 3(9) + 2(3) = 27 + 6 = 33. متوسط معدل التغير = (33 - 5) / (3 - 1) = 28 / 2 = 14.',
          explanationEn: 'f(1) = 5, f(3) = 33. m = (33 - 5) / (3 - 1) = 28 / 2 = 14.',
          difficulty: 'medium'
        },
        {
          id: 'qm1-5',
          textAr: 'أي من الدوال التالية تعتبر دالة زوجية متماثلة حول المحور y بحيث f(-x) = f(x)؟',
          textEn: 'Which of the following functions is an even function symmetric about the y-axis (f(-x) = f(x))?',
          optionsAr: ['f(x) = x^4 - 2x^2 + 5', 'f(x) = x^3 - 3x', 'f(x) = x^2 + 4x', 'f(x) = 1 / x'],
          optionsEn: ['f(x) = x^4 - 2x^2 + 5', 'f(x) = x^3 - 3x', 'f(x) = x^2 + 4x', 'f(x) = 1 / x'],
          correctIndex: 0,
          conceptTestedAr: 'خواص الدوال الزوجية والفردية',
          conceptTestedEn: 'Even & Odd Symmetry',
          explanationAr: 'f(-x) = (-x)^4 - 2(-x)^2 + 5 = x^4 - 2x^2 + 5 = f(x). جميع قوى المتغير زوجية بالإضافة للحد الثابت، فهي دالة زوجية.',
          explanationEn: 'f(-x) = x^4 - 2x^2 + 5 = f(x), confirming even symmetry across the y-axis.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'math-2',
    order: 2,
    titleAr: 'المحاضرة 2: المتجهات في المستوى والفضاء والضرب الداخلي والاتجاهي',
    titleEn: 'Lecture 2: Vectors in 2D & 3D, Dot Product, Cross Product & Orthogonality',
    subtitleAr: 'الصورة الإحداثية، متجهات الوحدة، حساب الزاوية بين متجهين، والضرب الاتجاهي والمساحات في الفضاء',
    subtitleEn: 'Master component form, unit vectors, dot product angle formula, cross product, and 3D geometry.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: المتجهات في المستوى الإحداثي والفضاء الثلاثي الأبعاد',
    unitTitleEn: 'Unit 2: Vectors in 2D & 3D Space',
    lessonNumberAr: 'الدرس 2: المتجهات والضرب الداخلي والاتجاهي',
    lessonNumberEn: 'Lesson 2: Vectors, Dot & Cross Products',

    warmupHookAr: 'عندما يبرمج مهندسو الطيران مسار طائرة مسيرة (Drone) تقاوم رياحاً جانبية سرعتها 40 كم/ساعة بزاوية 60 درجة، لا يمكن جمع السرعات حسابياً بالجمع العادي، بل يجب استخدام المتجهات وتحليلها إلى مركبات أفقية ورأسية. المتجهات هي اللغة الرياضية التي تترجم الفيزياء إلى هندسة حاسوبية فائقة الدقة!',
    warmupHookEn: 'Drones maneuvering against crosswinds rely on vector decomposition into orthogonal basis components. Vectors are the universal language linking physics mechanics to aerospace computation!',

    learningOutcomesAr: [
      'أن يكتب الطالب المتجه بالصورة الإحداثية وبدلالة متجهي الوحدة الأساسيين i و j و k',
      'أن يحسب مقدار المتجه وطوله وزاوية اتجاهه بدقة',
      'أن يطبق الضرب الداخلي (القياسي) لإيجاد الزاوية بين متجهين واختبار تعامدهما u . v = 0',
      'أن يحسب الضرب الاتجاهي u x v لإيجاد متجه عمودي ومساحة متوازي الأضلاع في الفضاء'
    ],
    learningOutcomesEn: [
      'Express vectors in component form and standard unit basis i, j, k',
      'Compute vector magnitude, length, and directional angle',
      'Apply dot product to calculate angle between vectors and test orthogonality u . v = 0',
      'Calculate cross product u x v to find normal vectors and parallelogram area'
    ],

    vocabulary: [
      {
        termAr: 'الضرب الداخلي / القياسي (Dot Product)',
        termEn: 'Dot Product',
        definitionAr: 'حاصل ضرب متجهين يعطي كمية قياسية عددية: u . v = u1*v1 + u2*v2 + u3*v3 = |u||v| cos(θ). ويكون المتجهان متعامدين إذا وفقط إذا كان u . v = 0.',
        definitionEn: 'Scalar product u . v = u1 v1 + u2 v2 + u3 v3 = |u||v| cos θ. Vectors are orthogonal iff u . v = 0.'
      },
      {
        termAr: 'الضرب الاتجاهي (Cross Product)',
        termEn: 'Cross Product',
        definitionAr: 'عملية على متجهين في الفضاء الثلاثي ينتج عنها متجه عمودي على كليهما، ويحسب بمحدد المصفوفة 3x3 لمتجهات الوحدة الأساسية.',
        definitionEn: 'Binary vector operation in 3D yielding a vector perpendicular to both, computed via 3x3 determinant.'
      }
    ],

    keyConceptsAr: ['الصورة الإحداثية ومتجه الوحدة', 'الضرب الداخلي واختبار التعامد', 'الزاوية بين متجهين', 'الضرب الاتجاهي ومساحة متوازي الأضلاع'],
    keyConceptsEn: ['Component Form & Unit Vectors', 'Dot Product & Orthogonality', 'Angle Between Vectors', 'Cross Product & Parallelogram Area'],
    summaryAr: 'المتجهات تمكننا من التعامل مع المقادير الموجهة في بعدين وثلاثة أبعاد، ونستخدم الضرب الداخلي للزوايا والتعامد، والضرب الاتجاهي للمساحات والمتجهات العمودية.',
    summaryEn: 'Vectors allow manipulating directional quantities in 2D and 3D, using dot products for angles/orthogonality and cross products for areas and normals.',
    sections: [
      {
        titleAr: '1. الضرب الداخلي والزاوية بين متجهين',
        titleEn: '1. Dot Product & Angle Between Vectors',
        contentAr: 'إذا كان u = <u1, u2> و v = <v1, v2>، فإن الضرب الداخلي هو u . v = u1*v1 + u2*v2. الزاوية θ بين المتجهين تعطى بالعلاقة: cos(θ) = (u . v) / (|u| * |v|). ويكون المتجهان متعامدين (Orthogonal) إذا وفقط إذا كان u . v = 0.',
        contentEn: 'Dot product is u . v = u1*v1 + u2*v2. The angle satisfies cos θ = (u . v)/(|u||v|). Vectors are orthogonal iff u . v = 0.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: إيجاد الزاوية بين متجهين واختبار التعامد',
          titleEn: 'Worked Example: Angle Between Vectors and Orthogonality',
          equation: 'u = <3, 4>,  v = <4, -3>',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نحسب الضرب الداخلي u . v = (3)(4) + (4)(-3) = 12 - 12 = 0.',
              textEn: 'Step 1: Compute dot product u . v = (3)(4) + (4)(-3) = 12 - 12 = 0.',
              noteAr: 'الناتج = 0'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: بما أن u . v = 0، فإن cos(θ) = 0، مما يعني أن الزاوية θ = 90 درجة.',
              textEn: 'Step 2: Since u . v = 0, cos θ = 0 => θ = 90 degrees.',
              noteAr: 'المتجهان متعامدان تماماً'
            }
          ],
          takeawayAr: 'الضرب الداخلي يساوي صفراً دائماً في حالة المتجهات المتعامدة.',
          takeawayEn: 'The dot product of any two non-zero perpendicular vectors is always identically zero.'
        },
        tipsAr: ['إذا كان حاصل الضرب الداخلي صفراً فالمتجهان متعامدان دائماً'],
        tipsEn: ['If the dot product is zero, the vectors are always orthogonal'],
        formativeCheck: {
          id: 'fc-math2-1',
          questionAr: 'إذا كان u = <2, 5> و v = <k, 4> متجهين متعامدين، ما هي قيمة k؟',
          questionEn: 'If u = <2, 5> and v = <k, 4> are orthogonal vectors, what is the value of k?',
          optionsAr: ['-10', '10', '-8', '4'],
          optionsEn: ['-10', '10', '-8', '4'],
          correctIndex: 0,
          explanationAr: 'شرط التعامد u . v = 0 => (2)(k) + (5)(4) = 0 => 2k + 20 = 0 => 2k = -20 => k = -10.',
          explanationEn: '2k + 20 = 0 => 2k = -20 => k = -10.',
          hintAr: 'طبق شرط التعامد u . v = 0 واحل المعادلة الخطية للثابت k.'
        }
      }
    ],

    assessment: {
      id: 'quiz-math-2',
      lectureId: 'math-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: المتجهات والضرب الداخلي والاتجاهي',
      titleEn: 'Mastery Quiz 2: Vectors, Dot & Cross Product',
      passingScore: 80,
      questions: [
        {
          id: 'qm2-1',
          textAr: 'ما هو مقدار وطول المتجه v = <3, -4, 12> في الفضاء الثلاثي؟',
          textEn: 'What is the magnitude of vector v = <3, -4, 12> in 3D space?',
          optionsAr: ['13', '11', '15', '169'],
          optionsEn: ['13', '11', '15', '169'],
          correctIndex: 0,
          conceptTestedAr: 'حساب مقدار المتجه ثلاثي الأبعاد',
          conceptTestedEn: '3D Vector Magnitude',
          explanationAr: '|v| = √(3^2 + (-4)^2 + 12^2) = √(9 + 16 + 144) = √169 = 13.',
          explanationEn: '|v| = √(9 + 16 + 144) = √169 = 13.',
          difficulty: 'easy'
        },
        {
          id: 'qm2-2',
          textAr: 'متجه الوحدة u في نفس اتجاه المتجه v = <6, 8> هو:',
          textEn: 'The unit vector u in the direction of v = <6, 8> is:',
          optionsAr: ['<0.6, 0.8>', '<0.8, 0.6>', '<3, 4>', '<1, 1>'],
          optionsEn: ['<0.6, 0.8>', '<0.8, 0.6>', '<3, 4>', '<1, 1>'],
          correctIndex: 0,
          conceptTestedAr: 'إيجاد متجه الوحدة',
          conceptTestedEn: 'Unit Vector Normalization',
          explanationAr: '|v| = √(6^2 + 8^2) = √100 = 10. متجه الوحدة u = v / |v| = <6/10, 8/10> = <0.6, 0.8>.',
          explanationEn: '|v| = 10, u = <6/10, 8/10> = <0.6, 0.8>.',
          difficulty: 'medium'
        },
        {
          id: 'qm2-3',
          textAr: 'إذا كان المتجهان a = <1, 2, 3> و b = <2, -1, 0>، ما قيمة الضرب الداخلي a . b؟',
          textEn: 'If a = <1, 2, 3> and b = <2, -1, 0>, what is the dot product a . b?',
          optionsAr: ['0 (المتجهان متعامدان)', '4', '6', '-1'],
          optionsEn: ['0 (Orthogonal)', '4', '6', '-1'],
          correctIndex: 0,
          conceptTestedAr: 'الضرب الداخلي في الفضاء',
          conceptTestedEn: '3D Dot Product',
          explanationAr: 'a . b = (1)(2) + (2)(-1) + (3)(0) = 2 - 2 + 0 = 0. إذن المتجهان متعامدان.',
          explanationEn: 'a . b = 2 - 2 + 0 = 0 (Orthogonal).',
          difficulty: 'medium'
        },
        {
          id: 'qm2-4',
          textAr: 'الضرب الاتجاهي لمتجهين متوازيين أو متجه مع نفسه (v x v) يساوي دائماً:',
          textEn: 'The cross product of parallel vectors or a vector with itself (v x v) is always:',
          optionsAr: ['المتجه الصفري <0, 0, 0>', '1', '|v|^2', 'متجه الوحدة العمودي'],
          optionsEn: ['Zero vector <0, 0, 0>', '1', '|v|^2', 'Normal unit vector'],
          correctIndex: 0,
          conceptTestedAr: 'خواص الضرب الاتجاهي',
          conceptTestedEn: 'Cross Product Properties',
          explanationAr: 'بما أن الزاوية بين المتجهات المتوازية θ = 0، فإن sin(0) = 0، لذا يكون الضرب الاتجاهي هو المتجه الصفري 0.',
          explanationEn: 'Because sin(0) = 0, the cross product of parallel vectors is identically the zero vector.',
          difficulty: 'easy'
        },
        {
          id: 'qm2-5',
          textAr: 'مساحة متوازي الأضلاع الذي فيه المتجهان u و v ضلعان متجاوران تساوي:',
          textEn: 'The area of a parallelogram with adjacent vector sides u and v equals:',
          optionsAr: ['|u x v| (مقدار الضرب الاتجاهي)', 'u . v (الضرب القياسي)', '|u| + |v|', '(u . v) / 2'],
          optionsEn: ['|u x v| (Cross product magnitude)', 'u . v', '|u| + |v|', '(u . v) / 2'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيقات هندسية للضرب الاتجاهي',
          conceptTestedEn: 'Geometric Area via Cross Product',
          explanationAr: 'مساحة متوازي الأضلاع هندسياً تساوي طول حاصل الضرب الاتجاهي للمتجهين: Area = |u x v|.',
          explanationEn: 'Parallelogram area is given by the norm of the cross product: Area = |u x v|.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'math-3',
    order: 3,
    titleAr: 'المحاضرة 3: حساب النهايات والاشتقاق وقواعد التفاضل وميل المماس',
    titleEn: 'Lecture 3: Limits, Derivatives, Power Rule & Tangent Line Slope',
    subtitleAr: 'حساب النهايات الجبرية، صيغ عدم التعيين (0/0)، تعريف المشتقة بالنهـاية، وقواعد الاشتقاق الأساسية',
    subtitleEn: 'Master analytical limits, 0/0 indeterminate forms, difference quotient derivative definition, and power rules.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: مدخل إلى حساب التفاضل والتكامل والنهايات',
    unitTitleEn: 'Unit 3: Introduction to Calculus, Limits & Derivatives',
    lessonNumberAr: 'الدرس 3: النهايات والاشتقاق وقواعد التفاضل',
    lessonNumberEn: 'Lesson 3: Limits & Derivative Rules',

    warmupHookAr: 'كيف يقيس عداد السرعة في السيارات الذكية سرعتك اللحظية عند لحظة زمنية متناهية في الصغر؟ إنه المفهوم الذي ابتكره نيوتن: حساب معدل التغير عندما يقترب التغير في الزمن Δt من الصفر تماماً! هذه النهاية هي المشتقة الأولى، والأداة الرياضية الأقوى التي تقود فيزياء الحركة وتدريب الشبكات العصبية في الذكاء الاصطناعي عبر خوارزمية التدرج الهابط (Gradient Descent)!',
    warmupHookEn: 'Instantaneous speed at an infinitesimal instant is computed by taking the limit of average velocity as Δt -> 0. This derivative is the core mathematical engine powering both physics and deep learning backpropagation!',

    learningOutcomesAr: [
      'أن يحسب الطالب النهايات بالتعويض المباشر وبالتحليل وإنطاق المقام لحالات عدم التعيين 0/0',
      'أن يحسب النهايات عند اللانهاية للدوال النسبية بمقارنة درجات البسط والمقام',
      'أن يطبق قواعد الاشتقاق الأساسية (قاعدة القوة، الثابت، المجموع، الضرب، القسمة)',
      'أن يجد معادلة مماس المنحنى y - y1 = m(x - x1) وميل المماس عند نقطة التماس'
    ],
    learningOutcomesEn: [
      'Compute limits analytically using factoring and conjugates to resolve 0/0 forms',
      'Evaluate limits at infinity for rational functions by comparing polynomial degrees',
      'Apply standard differentiation rules: power rule, sum, product, and quotient rules',
      'Determine the equation of the tangent line y - y1 = m(x - x1) at given points'
    ],

    vocabulary: [
      {
        termAr: 'المشتقة الأولى (First Derivative)',
        termEn: 'First Derivative',
        definitionAr: 'ميل مماس منحنى الدالة عند أي نقطة، وتساوي نهاية متوسط معدل التغير: f\\\'(x) = lim_{h -> 0} [f(x + h) - f(x)] / h.',
        definitionEn: 'Instantaneous rate of change and tangent slope: f\\\'(x) = lim_{h -> 0} [f(x + h) - f(x)] / h.'
      },
      {
        termAr: 'قاعدة القوة في الاشتقاق (Power Rule)',
        termEn: 'Power Rule',
        definitionAr: 'مشتقة الدالة f(x) = x^n هي f\\\'(x) = n * x^(n - 1) لأي عدد حقيقي n.',
        definitionEn: 'The derivative of f(x) = x^n is f\\\'(x) = n x^(n - 1).'
      }
    ],

    keyConceptsAr: ['حساب النهايات وحالات عدم التعيين', 'النهايات عند اللانهاية', 'تعريف المشتقة وميل المماس', 'قواعد الاشتقاق الأساسية'],
    keyConceptsEn: ['Limits & Indeterminate Forms', 'Limits at Infinity', 'Derivative Definition & Tangent Slope', 'Differentiation Rules'],
    summaryAr: 'النهايات تمثل الأساس الرياضي للتفاضل؛ حيث تسمح لنا بحساب السرعة اللحظية وميل المماس عبر قواعد الاشتقاق السريعة.',
    summaryEn: 'Limits form the foundation of differential calculus, enabling instant velocity and tangent slope calculations via systematic derivative rules.',
    sections: [
      {
        titleAr: '1. حساب النهايات بالتحليل وإنطاق المقام',
        titleEn: '1. Analytical Limits & Algebraic Techniques',
        contentAr: 'عند التعويض المباشر والحصول على 0/0 (صيغة غير معينة)، نلجأ إلى: 1) التحليل الجبري واختصار العامل الصفري، 2) إنطاق البسط أو المقام بالضرب في المرافق في الدوال الجذرية. عند اللانهاية، نقارن درجات كثيرات الحدود: إذا تساوت الدرجتان، النهاية تساوي معامل أكبر أس في البسط على معامل أكبر أس في المقام.',
        contentEn: 'When direct substitution yields 0/0, use factoring or conjugate rationalization. For limits at infinity, compare polynomial degrees.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: إيجاد نهاية دالة كسرية بصيغة غير معينة',
          titleEn: 'Worked Example: Resolving 0/0 Limit via Factoring',
          equation: 'lim_{x -> 3} (x^2 - 2x - 3) / (x - 3)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: التعويض المباشر بـ x = 3 يعطي: (9 - 6 - 3) / (3 - 3) = 0 / 0 (صيغة غير معينة تحتاج معالجة).',
              textEn: 'Step 1: Direct substitution yields 0/0 (indeterminate).',
              noteAr: 'يجب تحليل البسط'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نحلل البسط إلى حاصل ضرب عاملين: x^2 - 2x - 3 = (x - 3)(x + 1). نختصر العامل الصفري (x - 3): lim_{x -> 3} (x + 1).',
              textEn: 'Step 2: Factor numerator (x - 3)(x + 1) and cancel (x - 3) to get x + 1.',
              noteAr: 'تم إزالة العامل الصفري'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: التعويض الآن بـ x = 3: 3 + 1 = 4. إذن قيمة النهاية تساوي 4.',
              textEn: 'Step 3: Substitute x = 3: 3 + 1 = 4.',
              noteAr: 'الناتج النهائي = 4'
            }
          ],
          takeawayAr: 'حالة 0/0 تعني وجود عامل صفري مشترك يمكن التخلص منه بالتحليل الجبري.',
          takeawayEn: 'Indeterminate 0/0 indicates a removable zero factor cancelable via algebraic factoring.'
        },
        tipsAr: ['عند ظهور 0/0 ابحث مباشرة عن تحليل الفرق بين مربعين أو المجموع والفرق بين مكعبين'],
        tipsEn: ['When 0/0 occurs, immediately look for algebraic factoring or conjugates'],
        formativeCheck: {
          id: 'fc-math3-1',
          questionAr: 'ما هي قيمة النهاية: lim_{x -> ∞} (6x^2 + 5x - 1) / (2x^2 - 3)؟',
          questionEn: 'What is the limit: lim_{x -> ∞} (6x^2 + 5x - 1) / (2x^2 - 3)?',
          optionsAr: ['3', '6', '∞', '0'],
          optionsEn: ['3', '6', '∞', '0'],
          correctIndex: 0,
          explanationAr: 'درجة البسط = 2، ودرجة المقام = 2 (متساويتان). إذن النهاية عند اللانهاية تساوي معامل أكبر أس في البسط (6) مقسوماً على معامل أكبر أس في المقام (2) = 6 / 2 = 3.',
          explanationEn: 'Degrees match (both 2). The limit is the ratio of leading coefficients: 6 / 2 = 3.',
          hintAr: 'قارن درجة البسط والمقام واقسم المعامل الرئيس للبسط على المعامل الرئيس للمقام.'
        }
      },
      {
        titleAr: '2. قواعد الاشتقاق ومعادلة المماس',
        titleEn: '2. Power Rule & Tangent Line Equation',
        contentAr: 'قاعدة القوة: مشتقة x^n هي n * x^(n-1). مشتقة الثابت = 0. ميل المماس m لمنحنى الدالة f(x) عند النقطة (x1, y1) هو m = f\\\'(x1). معادلة المماس هي y - y1 = m(x - x1).',
        contentEn: 'Power rule: d/dx(x^n) = n x^(n-1). Derivative of constant is 0. Tangent slope is m = f\\\'(x1). Tangent line is y - y1 = m(x - x1).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: إيجاد معادلة مماس المنحنى',
          titleEn: 'Worked Example: Finding Tangent Line Equation',
          equation: 'f(x) = x^3 - 2x + 4  عند النقطة  (1, 3)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نوجد المشتقة الأولى باستخدام قاعدة القوة: f\\\'(x) = 3x^2 - 2.',
              textEn: 'Step 1: Compute derivative f\\\'(x) = 3x^2 - 2.',
              noteAr: 'دالة ميل المماس'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نحسب ميل المماس بالتعويض بـ x = 1: m = f\\\'(1) = 3(1)^2 - 2 = 3 - 2 = 1.',
              textEn: 'Step 2: Slope m = f\\\'(1) = 3(1) - 2 = 1.',
              noteAr: 'ميل المماس m = 1'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نكتب معادلة المماس: y - 3 = 1(x - 1) => y = x - 1 + 3 => y = x + 2.',
              textEn: 'Step 3: Tangent line y - 3 = 1(x - 1) => y = x + 2.',
              noteAr: 'معادلة المماس: y = x + 2'
            }
          ],
          takeawayAr: 'المشتقة عند نقطة تعطي ميل المماس مباشرة، والذي يحدد معادلة خط المماس الفريد.',
          takeawayEn: 'The derivative evaluated at a point yields the exact slope for the tangent line equation.'
        },
        tipsAr: ['مشتقة الثابت دائماً تساوي صفراً'],
        tipsEn: ['Derivative of any constant is identically zero'],
        formativeCheck: {
          id: 'fc-math3-2',
          questionAr: 'إذا كانت f(x) = 4x^3 - 5x^2 + 7x - 9، ما هي مشتقتها الأولى f\\\'(x)؟',
          questionEn: 'If f(x) = 4x^3 - 5x^2 + 7x - 9, what is its first derivative f\\\'(x)?',
          optionsAr: [
            '12x^2 - 10x + 7',
            '12x^3 - 10x^2 + 7',
            '4x^2 - 5x + 7',
            '12x^2 - 10x'
          ],
          optionsEn: [
            '12x^2 - 10x + 7',
            '12x^3 - 10x^2 + 7',
            '4x^2 - 5x + 7',
            '12x^2 - 10x'
          ],
          correctIndex: 0,
          explanationAr: 'مشتقة 4x^3 هي 12x^2، ومشتقة -5x^2 هي -10x، ومشتقة 7x هي 7، ومشتقة الثابت -9 هي 0. المجموع: 12x^2 - 10x + 7.',
          explanationEn: 'd/dx(4x^3) = 12x^2, d/dx(-5x^2) = -10x, d/dx(7x) = 7, d/dx(-9) = 0. Result: 12x^2 - 10x + 7.',
          hintAr: 'طبق قاعدة القوة على كل حد: انزل الأس واطرح منه 1، وتذكر أن مشتقة العدد الثابت تساوي صفراً.'
        }
      }
    ],

    assessment: {
      id: 'quiz-math-3',
      lectureId: 'math-3',
      titleAr: 'الاختبار الإتقاني للمحاضرة 3: النهايات وقواعد الاشتقاق',
      titleEn: 'Mastery Quiz 3: Limits & Differentiation Rules',
      passingScore: 80,
      questions: [
        {
          id: 'qm3-1',
          textAr: 'ما هي قيمة النهاية: lim_{x -> 4} (x^2 - 16) / (x - 4)؟',
          textEn: 'What is the limit: lim_{x -> 4} (x^2 - 16) / (x - 4)?',
          optionsAr: ['8', '4', '16', '0'],
          optionsEn: ['8', '4', '16', '0'],
          correctIndex: 0,
          conceptTestedAr: 'حساب النهايات الجبرية',
          conceptTestedEn: 'Factoring Limits',
          explanationAr: 'بالتحليل: (x - 4)(x + 4) / (x - 4) = x + 4. بالتعويض: 4 + 4 = 8.',
          explanationEn: 'Factoring cancels (x - 4) leaving x + 4. At x = 4, limit is 8.',
          difficulty: 'easy'
        },
        {
          id: 'qm3-2',
          textAr: 'مشتقة الدالة f(x) = 5x^4 - 2x^3 + x - 10 هي:',
          textEn: 'The derivative of f(x) = 5x^4 - 2x^3 + x - 10 is:',
          optionsAr: ['20x^3 - 6x^2 + 1', '20x^4 - 6x^3 + 1', '5x^3 - 2x^2 + 1', '20x^3 - 6x^2'],
          optionsEn: ['20x^3 - 6x^2 + 1', '20x^4 - 6x^3 + 1', '5x^3 - 2x^2 + 1', '20x^3 - 6x^2'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قاعدة القوة في الاشتقاق',
          conceptTestedEn: 'Polynomial Differentiation',
          explanationAr: 'f\\\'(x) = 5(4x^3) - 2(3x^2) + 1 - 0 = 20x^3 - 6x^2 + 1.',
          explanationEn: 'f\\\'(x) = 20x^3 - 6x^2 + 1.',
          difficulty: 'easy'
        },
        {
          id: 'qm3-3',
          textAr: 'ميل مماس منحنى الدالة f(x) = 2x^2 - 3x عند النقطة التي فيها x = 2 يساوي:',
          textEn: 'The tangent slope to f(x) = 2x^2 - 3x at x = 2 equals:',
          optionsAr: ['5', '8', '3', '4'],
          optionsEn: ['5', '8', '3', '4'],
          correctIndex: 0,
          conceptTestedAr: 'حساب ميل المماس',
          conceptTestedEn: 'Tangent Slope Evaluation',
          explanationAr: 'f\\\'(x) = 4x - 3. بالتعويض بـ x = 2: f\\\'(2) = 4(2) - 3 = 8 - 3 = 5.',
          explanationEn: 'f\\\'(x) = 4x - 3 => f\\\'(2) = 8 - 3 = 5.',
          difficulty: 'medium'
        },
        {
          id: 'qm3-4',
          textAr: 'ما هي قيمة النهاية عند اللانهاية: lim_{x -> ∞} (8x^3 - 4x) / (2x^3 + 7x^2)؟',
          textEn: 'What is the limit at infinity: lim_{x -> ∞} (8x^3 - 4x) / (2x^3 + 7x^2)?',
          optionsAr: ['4', '8', '2', '0'],
          optionsEn: ['4', '8', '2', '0'],
          correctIndex: 0,
          conceptTestedAr: 'النهايات عند اللانهاية',
          conceptTestedEn: 'Limits at Infinity',
          explanationAr: 'درجة البسط 3 ودرجة المقام 3. النتيجة = معامل البسط 8 / معامل المقام 2 = 8 / 2 = 4.',
          explanationEn: 'Matching degrees (3) => ratio of leading coefficients is 8 / 2 = 4.',
          difficulty: 'easy'
        },
        {
          id: 'qm3-5',
          textAr: 'إذا كانت السرعة المتجهة لجسم تعطى بالدالة s(t) = t^3 - 6t^2 + 9t، ما هو تسارعه اللحظي a(t) عند t = 3؟',
          textEn: 'If position is s(t) = t^3 - 6t^2 + 9t, what is the instantaneous acceleration a(t) at t = 3?',
          optionsAr: ['6 م/ث²', '0 م/ث²', '18 م/ث²', '9 م/ث²'],
          optionsEn: ['6 m/s²', '0 m/s²', '18 m/s²', '9 m/s²'],
          correctIndex: 0,
          conceptTestedAr: 'المشتقة الثانية والتسارع',
          conceptTestedEn: 'Second Derivative & Acceleration',
          explanationAr: 'السرعة v(t) = s\\\'(t) = 3t^2 - 12t + 9. التسارع a(t) = v\\\'(t) = 6t - 12. عند t = 3: a(3) = 6(3) - 12 = 18 - 12 = 6 م/ث².',
          explanationEn: 'v(t) = 3t^2 - 12t + 9 => a(t) = 6t - 12 => a(3) = 18 - 12 = 6.',
          difficulty: 'hard'
        }
      ]
    }
  },
  {
    id: 'math-4',
    order: 4,
    titleAr: 'المحاضرة 4: التكامل، وحساب المساحات، والنظرية الأساسية في التفاضل والتكامل',
    titleEn: 'Lecture 4: Integration, Area Under Curves & Fundamental Theorem of Calculus',
    subtitleAr: 'الدوال الأصلية، التكامل غير المحدود، التكامل المحدود، وحساب المساحة المحصورة تحت المنحنيات',
    subtitleEn: 'Master antiderivatives, indefinite and definite integrals, Riemann sums, and area calculations.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الرابعة: التكامل وحساب المساحات والتطبيقات الهندسية',
    unitTitleEn: 'Unit 4: Integration & Geometric Applications',
    lessonNumberAr: 'الدرس 4: التكامل والنظرية الأساسية وحساب المساحات',
    lessonNumberEn: 'Lesson 4: Definite Integrals & Area Calculation',

    warmupHookAr: 'حساب مساحة الأشكال البسيطة كالمثلث والمربع يعتمد على قوانين ثابتة، ولكن كيف نحسب مساحة سد مائي مقوس أو الطاقة الكهربائية المستهلكة عبر شبكة متغيرة الأحمال؟ التكامل هو الجسر العبقري الذي يربط بين الجمع المتناهي في الصغر وتراكم الكميات، ويشكل مع التفاضل أعظم إنجاز رياضي في تاريخ البشرية!',
    warmupHookEn: 'Computing irregular curved areas like dam walls or cumulative battery charge requires integration. The Fundamental Theorem of Calculus is arguably one of humanity\\\'s greatest intellectual breakthroughs!',

    learningOutcomesAr: [
      'أن يجد الطالب الدالة الأصلية والتكامل غير المحدود باستخدام قاعدة القوة للتكامل',
      'أن يطبق النظرية الأساسية في التفاضل والتكامل لحساب التكامل المحدود ∫_a^b f(x) dx = F(b) - F(a)',
      'أن يحسب المساحة المحصورة بين منحنى الدالة ومحور السينات في فترة معطاة',
      'أن يطبق التكامل في إيجاد دالة الموقع من دالة السرعة المتجهة المعطاة'
    ],
    learningOutcomesEn: [
      'Find antiderivatives and evaluate indefinite integrals via the power rule for integration',
      'Apply the Fundamental Theorem of Calculus to evaluate definite integrals ∫_a^b f(x) dx = F(b) - F(a)',
      'Calculate the area bounded by curves and the x-axis over closed intervals',
      'Apply integration to recover position functions from velocity vector rates'
    ],

    vocabulary: [
      {
        termAr: 'الدالة الأصلية والتكامل غير المحدود (Antiderivative & Indefinite Integral)',
        termEn: 'Antiderivative',
        definitionAr: 'الدالة F(x) التي تحقق F\\\'(x) = f(x). ويكتب التكامل غير المحدود: ∫ f(x) dx = F(x) + C حيث C هو ثابت التكامل.',
        definitionEn: 'A function F such that F\\\'(x) = f(x). Indefinite integral: ∫ f(x) dx = F(x) + C.'
      },
      {
        termAr: 'النظرية الأساسية في التفاضل والتكامل (Fundamental Theorem of Calculus)',
        termEn: 'Fundamental Theorem of Calculus',
        definitionAr: 'إذا كانت f دالة متصلة على [a, b] و F دالة أصلية لها، فإن التكامل المحدود: ∫_a^b f(x) dx = F(b) - F(a).',
        definitionEn: 'If f is continuous on [a, b] and F\\\' = f, then ∫_a^b f(x) dx = F(b) - F(a).'
      }
    ],

    keyConceptsAr: ['الدوال الأصلية وقاعدة القوة للتكامل', 'ثابت التكامل C', 'النظرية الأساسية للتفاضل والتكامل', 'حساب المساحة تحت المنحنى'],
    keyConceptsEn: ['Antiderivatives & Integration Power Rule', 'Constant of Integration C', 'Fundamental Theorem of Calculus', 'Area Under Curves'],
    summaryAr: 'التكامل يمثل العملية العكسية للاشتقاق؛ ومن خلال النظرية الأساسية للتفاضل والتكامل نحسب المساحات المحصورة والتراكمات الفيزيائية بدقة تامة.',
    summaryEn: 'Integration is the inverse operation of differentiation. The Fundamental Theorem of Calculus bridges derivatives and accumulated areas.',
    sections: [
      {
        titleAr: '1. التكامل غير المحدود وقاعدة القوة',
        titleEn: '1. Indefinite Integrals & Power Rule',
        contentAr: 'قاعدة القوة للتكامل: ∫ x^n dx = (x^(n+1)) / (n + 1) + C (بشرط n != -1). تكامل الثابت k: ∫ k dx = kx + C. وتكامل مجموع دالتين يساوي مجموع تكامليهما.',
        contentEn: 'Integration power rule: ∫ x^n dx = x^(n+1)/(n+1) + C for n != -1. ∫ k dx = kx + C.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: إيجاد التكامل غير المحدود',
          titleEn: 'Worked Example: Indefinite Integral Evaluation',
          equation: '∫ (6x^2 - 4x + 5) dx',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نطبق قاعدة القوة على كل حد: تكامل 6x^2 هو 6 * (x^3 / 3) = 2x^3.',
              textEn: 'Step 1: Integrate 6x^2 => 6(x^3 / 3) = 2x^3.',
              noteAr: 'الحد الأول: 2x^3'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: تكامل -4x هو -4 * (x^2 / 2) = -2x^2. وتكامل الثابت 5 هو 5x.',
              textEn: 'Step 2: Integrate -4x => -2x^2, and 5 => 5x.',
              noteAr: 'الحدود التالية: -2x^2 + 5x'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: نضيف ثابت التكامل العام C: الناتج = 2x^3 - 2x^2 + 5x + C.',
              textEn: 'Step 3: Add integration constant C: 2x^3 - 2x^2 + 5x + C.',
              noteAr: 'الناتج النهائي'
            }
          ],
          takeawayAr: 'لا تنس دائماً إضافة ثابت التكامل C في التكاملات غير المحدودة.',
          takeawayEn: 'Always append the integration constant C for indefinite integrals.'
        },
        tipsAr: ['لا تنس كتابة ثابت التكامل + C في كل مسألة تكامل غير محدود'],
        tipsEn: ['Always include the integration constant + C for indefinite integrals'],
        formativeCheck: {
          id: 'fc-math4-1',
          questionAr: 'ما هو ناتج التكامل: ∫ (3x^2 + 8x - 1) dx؟',
          questionEn: 'What is the integral: ∫ (3x^2 + 8x - 1) dx?',
          optionsAr: [
            'x^3 + 4x^2 - x + C',
            '3x^3 + 8x^2 - x + C',
            '6x + 8 + C',
            'x^3 + 8x^2 - x + C'
          ],
          optionsEn: [
            'x^3 + 4x^2 - x + C',
            '3x^3 + 8x^2 - x + C',
            '6x + 8 + C',
            'x^3 + 8x^2 - x + C'
          ],
          correctIndex: 0,
          explanationAr: '∫ 3x^2 dx = 3(x^3/3) = x^3. ∫ 8x dx = 8(x^2/2) = 4x^2. ∫ -1 dx = -x. الناتج: x^3 + 4x^2 - x + C.',
          explanationEn: '∫ 3x^2 dx = x^3, ∫ 8x dx = 4x^2, ∫ -1 dx = -x. Total: x^3 + 4x^2 - x + C.',
          hintAr: 'زد الأس 1 واقسم على الأس الجديد لكل حد، ولا تنس ثابت التكامل C.'
        }
      },
      {
        titleAr: '2. التكامل المحدود وحساب المساحة المحصورة',
        titleEn: '2. Definite Integrals & Area Calculation',
        contentAr: 'لحساب التكامل المحدود ∫_a^b f(x) dx: 1) نوجد الدالة الأصلية F(x)، 2) نعوض بالحد العلوي b ثم نطرح منه التعويض بالحد السفلي a: F(b) - F(a). المساحة المحصورة تحت المنحنى ومحور السينات حيث f(x) >= 0 تساوي هذا التكامل المحدود تماماً.',
        contentEn: 'To evaluate definite integral ∫_a^b f(x) dx, find antiderivative F(x) and compute F(b) - F(a). This computes the exact bounded area.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب تكامل محدود ومساحة محصورة',
          titleEn: 'Worked Example: Definite Integral & Bounded Area',
          equation: '∫_1^3 (3x^2 + 2) dx',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نوجد الدالة الأصلية: F(x) = x^3 + 2x.',
              textEn: 'Step 1: Antiderivative F(x) = x^3 + 2x.',
              noteAr: 'الدالة الأصلية'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: التعويض بالحد العلوي 3: F(3) = (3)^3 + 2(3) = 27 + 6 = 33.',
              textEn: 'Step 2: Upper bound F(3) = 27 + 6 = 33.',
              noteAr: 'F(3) = 33'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3: التعويض بالحد السفلي 1: F(1) = (1)^3 + 2(1) = 1 + 2 = 3. الناتج = F(3) - F(1) = 33 - 3 = 30.',
              textEn: 'Step 3: Lower bound F(1) = 3. Value = 33 - 3 = 30.',
              noteAr: 'قيمة التكامل والمساحة = 30 وحدة مربعة'
            }
          ],
          takeawayAr: 'التكامل المحدود ينتج عنه دائماً قيمة عددية ثابتة ولا يحتوي على الثابت C.',
          takeawayEn: 'Definite integrals evaluate to a specific numerical value with no arbitrary constant C.'
        },
        tipsAr: ['في التكامل المحدود نعوض دائماً بالحد العلوي أولاً ثم نطرح التعويض بالحد السفلي'],
        tipsEn: ['In definite integrals, always evaluate upper bound first and subtract lower bound'],
        formativeCheck: {
          id: 'fc-math4-2',
          questionAr: 'ما هي قيمة التكامل المحدود: ∫_0^2 (3x^2) dx؟',
          questionEn: 'What is the value of the definite integral: ∫_0^2 (3x^2) dx?',
          optionsAr: ['8', '12', '6', '4'],
          optionsEn: ['8', '12', '6', '4'],
          correctIndex: 0,
          explanationAr: 'الدالة الأصلية هي x^3. بالتعويض: F(2) - F(0) = 2^3 - 0^3 = 8 - 0 = 8.',
          explanationEn: 'Antiderivative is x^3. F(2) - F(0) = 8 - 0 = 8.',
          hintAr: 'أوجد الدالة الأصلية لـ 3x^2 (وهي x^3) ثم عوض بـ 2 واطرح التعويض بـ 0.'
        }
      }
    ],

    assessment: {
      id: 'quiz-math-4',
      lectureId: 'math-4',
      titleAr: 'الاختبار النهائي للمحاضرة 4: التكامل وحساب المساحات (3 ثانوي STEM)',
      titleEn: 'Mastery Quiz 4: Integration & Area Calculations (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qm4-1',
          textAr: 'ما هو ناتج التكامل غير المحدود: ∫ (4x^3 - 6x) dx؟',
          textEn: 'What is the indefinite integral: ∫ (4x^3 - 6x) dx?',
          optionsAr: ['x^4 - 3x^2 + C', '4x^4 - 6x^2 + C', 'x^4 - 6x^2 + C', '12x^2 - 6 + C'],
          optionsEn: ['x^4 - 3x^2 + C', '4x^4 - 6x^2 + C', 'x^4 - 6x^2 + C', '12x^2 - 6 + C'],
          correctIndex: 0,
          conceptTestedAr: 'قاعدة القوة للتكامل غير المحدود',
          conceptTestedEn: 'Indefinite Power Rule',
          explanationAr: '∫ 4x^3 dx = 4(x^4/4) = x^4. ∫ -6x dx = -6(x^2/2) = -3x^2. الناتج: x^4 - 3x^2 + C.',
          explanationEn: '∫ 4x^3 dx = x^4, ∫ -6x dx = -3x^2. Total: x^4 - 3x^2 + C.',
          difficulty: 'easy'
        },
        {
          id: 'qm4-2',
          textAr: 'ما هي قيمة التكامل المحدود: ∫_1^2 (6x^2 - 2x) dx؟',
          textEn: 'What is the value of the definite integral: ∫_1^2 (6x^2 - 2x) dx?',
          optionsAr: ['11', '14', '10', '12'],
          optionsEn: ['11', '14', '10', '12'],
          correctIndex: 0,
          conceptTestedAr: 'حساب التكامل المحدود',
          conceptTestedEn: 'Definite Integral Evaluation',
          explanationAr: 'F(x) = 2x^3 - x^2. F(2) = 2(8) - 4 = 16 - 4 = 12. F(1) = 2(1) - 1 = 1. F(2) - F(1) = 12 - 1 = 11.',
          explanationEn: 'F(x) = 2x^3 - x^2. F(2) = 12, F(1) = 1 => 12 - 1 = 11.',
          difficulty: 'medium'
        },
        {
          id: 'qm4-3',
          textAr: 'المساحة المحصورة بين منحنى الدالة f(x) = 2x ومحور السينات في الفترة [0, 3] تساوي:',
          textEn: 'The area bounded by f(x) = 2x and the x-axis on [0, 3] is:',
          optionsAr: ['9 وحدات مربعة', '6 وحدات مربعة', '18 وحدة مربعة', '12 وحدة مربعة'],
          optionsEn: ['9 square units', '6 square units', '18 square units', '12 square units'],
          correctIndex: 0,
          conceptTestedAr: 'حساب المساحة بالتكامل',
          conceptTestedEn: 'Area via Definite Integration',
          explanationAr: 'Area = ∫_0^3 2x dx = [x^2]_0^3 = 3^2 - 0^2 = 9 وحدات مربعة.',
          explanationEn: 'Area = ∫_0^3 2x dx = [x^2]_0^3 = 9.',
          difficulty: 'easy'
        },
        {
          id: 'qm4-4',
          textAr: 'إذا كانت السرعة المتجهة لجسم v(t) = 6t + 4 وموقعه الابتدائي s(0) = 5، ما هي دالة موقعه s(t)؟',
          textEn: 'If velocity is v(t) = 6t + 4 and initial position is s(0) = 5, what is s(t)?',
          optionsAr: ['s(t) = 3t^2 + 4t + 5', 's(t) = 6t^2 + 4t + 5', 's(t) = 3t^2 + 4t', 's(t) = 6'],
          optionsEn: ['s(t) = 3t^2 + 4t + 5', 's(t) = 6t^2 + 4t + 5', 's(t) = 3t^2 + 4t', 's(t) = 6'],
          correctIndex: 0,
          conceptTestedAr: 'التطبيقات الفيزيائية للتكامل وإيجاد ثابت التكامل C',
          conceptTestedEn: 'Physical Application & Initial Conditions',
          explanationAr: 's(t) = ∫ (6t + 4) dt = 3t^2 + 4t + C. بما أن s(0) = 5، فإن C = 5. إذن s(t) = 3t^2 + 4t + 5.',
          explanationEn: 's(t) = 3t^2 + 4t + C. Since s(0) = 5 => C = 5 => s(t) = 3t^2 + 4t + 5.',
          difficulty: 'hard'
        },
        {
          id: 'qm4-5',
          textAr: 'وفقاً للنظرية الأساسية في التفاضل والتكامل، مشتقة الدالة g(x) = ∫_1^x (t^4 + 3) dt بالنسبة لـ x هي:',
          textEn: 'According to the Fundamental Theorem of Calculus Part 1, the derivative d/dx [∫_1^x (t^4 + 3) dt] is:',
          optionsAr: ['x^4 + 3', '4x^3', '(x^5 / 5) + 3x', 'x^4'],
          optionsEn: ['x^4 + 3', '4x^3', '(x^5 / 5) + 3x', 'x^4'],
          correctIndex: 0,
          conceptTestedAr: 'النظرية الأساسية للتفاضل والتكامل (الاشتقاق تحت علامة التكامل)',
          conceptTestedEn: 'FTC Part 1 Derivative of Integral',
          explanationAr: 'حسب الجزء الأول من النظرية الأساسية للتفاضل والتكامل: d/dx [∫_a^x f(t) dt] = f(x). إذن الناتج مباشرة هو x^4 + 3.',
          explanationEn: 'By FTC Part 1, d/dx [∫_a^x f(t) dt] = f(x) = x^4 + 3.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
`;

const mathStart = content.indexOf('// 1. MATHEMATICS CURRICULUM');
const physicsStart = content.indexOf('// 2. ADVANCED PHYSICS CURRICULUM');

if (mathStart !== -1 && physicsStart !== -1) {
  const updated = content.slice(0, mathStart) + newMathLectures + '\n' + content.slice(physicsStart);
  fs.writeFileSync(filePath, updated, 'utf8');
  console.log('Successfully updated MATH_LECTURES matching types in curriculumData.ts');
} else {
  console.error('Could not locate markers');
}
