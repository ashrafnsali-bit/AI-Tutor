import type { Lecture, StudentProfile, Subject } from '../types';
import { CHEMISTRY_LECTURES, BIOLOGY_LECTURES, COMPUTER_SCIENCE_LECTURES } from './stemCurriculumData';
import { ISLAMIC_STUDIES_FULL, PRIMARY_ARABIC_FULL } from './islamicArabicCurriculum';

import {
  PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC_LECTURES,
  PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES_LECTURES
} from './primaryCurriculumData';

export {
  PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC_LECTURES,
  PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES_LECTURES
};

// ============================================================================
// ============================================================================
// ============================================================================
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
        definitionAr: 'ميل مماس منحنى الدالة عند أي نقطة، وتساوي نهاية متوسط معدل التغير: f\'(x) = lim_{h -> 0} [f(x + h) - f(x)] / h.',
        definitionEn: 'Instantaneous rate of change and tangent slope: f\'(x) = lim_{h -> 0} [f(x + h) - f(x)] / h.'
      },
      {
        termAr: 'قاعدة القوة في الاشتقاق (Power Rule)',
        termEn: 'Power Rule',
        definitionAr: 'مشتقة الدالة f(x) = x^n هي f\'(x) = n * x^(n - 1) لأي عدد حقيقي n.',
        definitionEn: 'The derivative of f(x) = x^n is f\'(x) = n x^(n - 1).'
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
        contentAr: 'قاعدة القوة: مشتقة x^n هي n * x^(n-1). مشتقة الثابت = 0. ميل المماس m لمنحنى الدالة f(x) عند النقطة (x1, y1) هو m = f\'(x1). معادلة المماس هي y - y1 = m(x - x1).',
        contentEn: 'Power rule: d/dx(x^n) = n x^(n-1). Derivative of constant is 0. Tangent slope is m = f\'(x1). Tangent line is y - y1 = m(x - x1).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: إيجاد معادلة مماس المنحنى',
          titleEn: 'Worked Example: Finding Tangent Line Equation',
          equation: 'f(x) = x^3 - 2x + 4  عند النقطة  (1, 3)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1: نوجد المشتقة الأولى باستخدام قاعدة القوة: f\'(x) = 3x^2 - 2.',
              textEn: 'Step 1: Compute derivative f\'(x) = 3x^2 - 2.',
              noteAr: 'دالة ميل المماس'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2: نحسب ميل المماس بالتعويض بـ x = 1: m = f\'(1) = 3(1)^2 - 2 = 3 - 2 = 1.',
              textEn: 'Step 2: Slope m = f\'(1) = 3(1) - 2 = 1.',
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
          questionAr: 'إذا كانت f(x) = 4x^3 - 5x^2 + 7x - 9، ما هي مشتقتها الأولى f\'(x)؟',
          questionEn: 'If f(x) = 4x^3 - 5x^2 + 7x - 9, what is its first derivative f\'(x)?',
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
          explanationAr: 'f\'(x) = 5(4x^3) - 2(3x^2) + 1 - 0 = 20x^3 - 6x^2 + 1.',
          explanationEn: 'f\'(x) = 20x^3 - 6x^2 + 1.',
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
          explanationAr: 'f\'(x) = 4x - 3. بالتعويض بـ x = 2: f\'(2) = 4(2) - 3 = 8 - 3 = 5.',
          explanationEn: 'f\'(x) = 4x - 3 => f\'(2) = 8 - 3 = 5.',
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
          explanationAr: 'السرعة v(t) = s\'(t) = 3t^2 - 12t + 9. التسارع a(t) = v\'(t) = 6t - 12. عند t = 3: a(3) = 6(3) - 12 = 18 - 12 = 6 م/ث².',
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
    warmupHookEn: 'Computing irregular curved areas like dam walls or cumulative battery charge requires integration. The Fundamental Theorem of Calculus is arguably one of humanity\'s greatest intellectual breakthroughs!',

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
        definitionAr: 'الدالة F(x) التي تحقق F\'(x) = f(x). ويكتب التكامل غير المحدود: ∫ f(x) dx = F(x) + C حيث C هو ثابت التكامل.',
        definitionEn: 'A function F such that F\'(x) = f(x). Indefinite integral: ∫ f(x) dx = F(x) + C.'
      },
      {
        termAr: 'النظرية الأساسية في التفاضل والتكامل (Fundamental Theorem of Calculus)',
        termEn: 'Fundamental Theorem of Calculus',
        definitionAr: 'إذا كانت f دالة متصلة على [a, b] و F دالة أصلية لها، فإن التكامل المحدود: ∫_a^b f(x) dx = F(b) - F(a).',
        definitionEn: 'If f is continuous on [a, b] and F\' = f, then ∫_a^b f(x) dx = F(b) - F(a).'
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

// 2. ADVANCED PHYSICS CURRICULUM (الفيزياء المتقدمة)
// ============================================================================
export const PHYSICS_LECTURES: Lecture[] = [
  {
    id: 'phys-1',
    order: 1,
    titleAr: 'المحاضرة 1: علم الحركة والسرعة المتجهة والتسارع اللحظي',
    titleEn: 'Lecture 1: Kinematics, Velocity Vectors & Instantaneous Acceleration',
    subtitleAr: 'دراسة وصف حركة الأجسام في بعد واحد، والتمييز الدقيق بين المسافة والإزاحة',
    subtitleEn: 'Study motion in one dimension, distinguishing scalar distance from vector displacement.',
    durationMinutes: 30,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: مدخل إلى علم الفيزياء وحركة الأجسام',
    unitTitleEn: 'Unit 1: Introduction to Physics & 1D Kinematics',
    lessonNumberAr: 'الدرس 1: علم الحركة والسرعة المتجهة والتسارع',
    lessonNumberEn: 'Lesson 1: Kinematics, Velocity Vectors & Acceleration',

    // Real-world hook
    warmupHookAr: 'عندما تشاهد انطلاق قطار الحرمين السريع بين مكة المكرمة والمدينة المنورة؛ يقطع مسافة 450 كم بسرعة تصل إلى 300 كم/ساعة. هل يستطيع مهندسو الملاحة الجوية والسكك الحديدية حساب زمن الرحلة بدقة دون تحديد اتجاه الحركة والتسارع عند المنعطفات؟ في الفيزياء، "المقدار" وحده لا يكفي؛ بل الاتجاه يصنع كل الفارق!',
    warmupHookEn: 'When high-speed trains travel between cities at 300 km/h, engineers must factor in not just raw scalar speed, but vector directional displacement and acceleration forces. In physics, direction makes all the difference!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يفرّق الطالب بدقة علمية بين الكميات الفيزيائية القياسية والكميات المتجهة',
      'أن يحسب الإزاحة والسرعة المتجهة المتوسطة والتسارع لجسم يتحرك في خط مستقيم',
      'أن يطبق معادلات الحركة الخطية بتسارع منتظم في حل المشكلات الهندسية والفيزيائية',
      'أن يفسر الرسوم البيانية للعلاقة بين (الموقع والزمن) و(السرعة والزمن)'
    ],
    learningOutcomesEn: [
      'Distinguish scalar physical quantities from vector quantities with scientific rigour',
      'Calculate displacement, average velocity vectors, and linear acceleration',
      'Apply constant-acceleration kinematic equations to solve engineering problems',
      'Interpret position-time and velocity-time graphs accurately'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'الكمية المتجهة (Vector Quantity)',
        termEn: 'Vector Quantity',
        definitionAr: 'كمية فيزيائية تتحدد بالمقدار ووحدة القياس والاتجاه معاً (مثل: الإزاحة، والسرعة المتجهة، والتسارع).',
        definitionEn: 'A physical quantity characterized by both numerical magnitude and spatial direction.'
      },
      {
        termAr: 'الإزاحة (Displacement)',
        termEn: 'Displacement',
        definitionAr: 'كمية متجهة تمثل التغير في موقع الجسم، وتساوي أقصر مسار مستقيم موجه من نقطة البداية إلى نقطة النهاية (Δx = x_f - x_i).',
        definitionEn: 'Vector change in position: shortest directed straight line from start to finish.'
      },
      {
        termAr: 'التسارع (Acceleration)',
        termEn: 'Acceleration',
        definitionAr: 'المعدل الزمني لتغير السرعة المتجهة للجسم (a = Δv / Δt) ووحدته م/ث².',
        definitionEn: 'The time rate of change of velocity: a = dv/dt in m/s².'
      }
    ],

    keyConceptsAr: ['الفرق بين الكميات القياسية والمتجهة', 'السرعة القياسية والسرعة المتجهة', 'التسارع الثابت ومعادلات الحركة', 'تفسير الرسوم البيانية للحركة'],
    keyConceptsEn: ['Scalar vs Vector Quantities', 'Speed vs Velocity Vectors', 'Constant Acceleration Kinematics', 'Graph Interpretation of Motion'],
    summaryAr: 'نستكشف في هذه المحاضرة أسس علم الحركة الكينماتيكا؛ كيف نصف حركة الأجسام عبر الزمان والمكان بدقة رياضية وفيزيائية فائقة.',
    summaryEn: 'Explore the foundations of kinematics: describing motion through space and time with vector precision.',
    sections: [
      {
        titleAr: '1. الإزاحة والسرعة المتجهة: الاتجاه يصنع الفارق',
        titleEn: '1. Displacement & Velocity: Direction Matters',
        contentAr: 'المسافة هي طول المسار الفعلي الذي يقطعه الجسم وهي كمية قياسية، بينما الإزاحة هي أقصر خط مستقيم موجه من نقطة البداية إلى النهاية وهي كمية متجهة.',
        contentEn: 'Distance is the total path length traveled (scalar), while displacement is the net directed straight line from start to finish (vector).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب الإزاحة والسرعة المتجهة',
          titleEn: 'Worked Example: Displacement Calculation',
          equation: 'v = Δx / Δt',
          steps: [
            { stepNumber: 1, textAr: 'تحرك جسم 80 متراً نحو الشرق، ثم عاد 30 متراً نحو الغرب خلال 10 ثوانٍ.', textEn: 'An object travels 80m East, then returns 30m West over 10 seconds.', noteAr: 'المسافة الإجمالية = 110 م', noteEn: 'Total distance = 110m' },
            { stepNumber: 2, textAr: 'احسب الإزاحة الصافية: Δx = 80 - 30 = +50 متراً شرقاً.', textEn: 'Compute net displacement: Δx = 80 - 30 = +50m East.', noteAr: 'الإزاحة متجهة', noteEn: 'Displacement is a vector' },
            { stepNumber: 3, textAr: 'احسب السرعة المتجهة: v = 50 ÷ 10 = 5 م/ث شرقاً.', textEn: 'Compute velocity: v = 50 ÷ 10 = 5 m/s East.', noteAr: 'السرعة القياسية كانت 11 م/ث!', noteEn: 'Average speed was 11 m/s!' }
          ],
          takeawayAr: 'السرعة المتجهة تعتمد حصرياً على الإزاحة الصافية لا على طول المسار المقطوع.',
          takeawayEn: 'Average velocity depends purely on net displacement, not cumulative path distance.'
        },
        formativeCheck: {
          id: 'fc-phys1-1',
          questionAr: 'تحركت دراجة نارية مسافة 100 متر نحو الشمال، ثم استدارت وعادت 40 متراً نحو الجنوب. ما مقدار الإزاحة الصافية للدراجة؟',
          questionEn: 'A motorcycle travels 100m North, then reverses 40m South. What is its net displacement?',
          optionsAr: ['140 متراً نحو الشمال', '60 متراً نحو الشمال', 'صفر متر', '40 متراً نحو الجنوب'],
          optionsEn: ['140m North', '60m North', '0m', '40m South'],
          correctIndex: 1,
          explanationAr: 'الإزاحة متجهة: Δx = +100 - 40 = +60 متراً باتجاه الشمال.',
          explanationEn: 'Net displacement is 100 - 40 = 60m North.',
          hintAr: 'اطرح المسافة المعاكسة من المسافة الأصلية.',
          hintEn: 'Subtract opposite displacement.'
        },
        tipsAr: ['احرص دائماً على تحديد إشارة الاتجاه (الموجب والسالب) قبل كتابة المعادلة.'],
        tipsEn: ['Always define coordinate convention (positive/negative) before setting up equations.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'الكميات القياسية: تتحدد بالمقدار والوحدة فقط (المسافة، الزمن، الكتلة)',
      'الكميات المتجهة: تتحدد بالمقدار والوحدة والاتجاه (الإزاحة، السرعة المتجهة، القوة، التسارع)',
      'معادلة الإزاحة: Δx = x_النهاية - x_البداية',
      'معادلة السرعة المتجهة: v = Δx / Δt',
      'معادلة التسارع المنتظم: a = (v_f - v_i) / Δt',
      'قاعدة الاتزان: إذا عاد الجسم لنقطة البداية، فإن إزاحته = صفراً دائماً'
    ],
    conceptMapEn: [
      'Scalar quantities: Magnitude only',
      'Vector quantities: Magnitude + Direction',
      'Displacement equation: Δx = x_f - x_i',
      'Velocity vector: v = Δx / Δt',
      'Constant acceleration: a = Δv / Δt'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-phys1-1',
        questionAr: 'انطلقت سيارة سباق من السكون (v_i = 0) بتسارع منتظم مقداره 5 م/ث² لمدة 6 ثوانٍ. احسب سرعتها النهائية والمسافة المقطوعة.',
        questionEn: 'A racecar accelerates from rest at 5 m/s² for 6s. Calculate final velocity and displacement.',
        solutionStepsAr: [
          'حساب السرعة النهائية: v_f = v_i + at = 0 + (5 × 6) = 30 م/ث',
          'حساب المسافة المقطوعة: d = v_i*t + ½at² = 0 + ½(5)(36) = 90 متراً',
          'التحقق بمعادلة بديلة: v_f² = 2ad -> (30)² = 2(5)(90) -> 900 = 900 (صحيح 100%)'
        ],
        solutionStepsEn: [
          'Final velocity: v = 0 + (5)(6) = 30 m/s',
          'Displacement: d = 0 + 0.5(5)(36) = 90 m',
          'Verification: v² = 2ad confirms 900 = 900'
        ],
        answerAr: 'السرعة النهائية = 30 م/ث • المسافة المقطوعة = 90 متراً',
        answerEn: 'Final velocity = 30 m/s • Displacement = 90m'
      }
    ],
    assessment: {
      id: 'quiz-phys-1',
      lectureId: 'phys-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: علم الحركة والسرعة المتجهة',
      titleEn: 'Lecture 1 Assessment: Kinematics & Velocity Vectors',
      passingScore: 80,
      questions: [
        {
          id: 'qp1-1',
          textAr: 'ركض عداء في مضمار دائري محيطه 400 متر، وعاد إلى نفس نقطة البداية. ما مقدار إزاحته الكلية؟',
          textEn: 'A runner completes a 400m circular track returning to the starting point. What is the net displacement?',
          optionsAr: ['400 متر', 'صفر متر', '200 متر', '800 متر'],
          optionsEn: ['400 meters', '0 meters', '200 meters', '800 meters'],
          correctIndex: 1,
          conceptTestedAr: 'مفهوم الإزاحة ونقطة البداية والنهاية',
          conceptTestedEn: 'Displacement Definition',
          explanationAr: 'بما أن العداء عاد لنفس نقطة انطلاقه، فإن المسافة المقطوعة 400 م ولكن الإزاحة الصافية تساوي صفراً.',
          explanationEn: 'Because the runner returned to the origin, initial and final positions are identical, so net displacement is zero.',
          difficulty: 'easy'
        },
        {
          id: 'qp1-2',
          textAr: 'تسارعت سيارة من السكون بتسارع منتظم قدره 4 م/ث² لمدة 5 ثوانٍ. ما هي سرعتها النهائية؟',
          textEn: 'A vehicle accelerates from rest at 4 m/s² for 5 seconds. What is its final velocity?',
          optionsAr: ['20 م/ث', '9 م/ث', '100 م/ث', '1 م/ث'],
          optionsEn: ['20 m/s', '9 m/s', '100 m/s', '1 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'معادلة السرعة والتسارع المنتظم: v = v₀ + at',
          conceptTestedEn: 'Kinematic Velocity Formula',
          explanationAr: 'باستخدام v = v₀ + at: السرعة الابتدائية صفر، إذن v = 0 + (4 × 5) = 20 م/ث.',
          explanationEn: 'Using v = v₀ + at: v = 0 + (4 × 5) = 20 m/s.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'phys-2',
    order: 2,
    titleAr: 'المحاضرة 2: قوانين نيوتن للحركة وتطبيقات القوى والاتزان',
    titleEn: "Lecture 2: Newton's Laws of Motion & Force Applications",
    subtitleAr: 'فهم القصور الذاتي، وقانون القوة والتسارع (F=ma)، وقوة الفعل ورد الفعل',
    subtitleEn: 'Master inertia, dynamic acceleration (F=ma), and action-reaction pairs.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'phys-1',
    prerequisiteTitleAr: 'المحاضرة 1: علم الحركة والسرعة المتجهة والتسارع اللحظي',
    prerequisiteTitleEn: 'Lecture 1: Kinematics, Velocity Vectors & Instantaneous Acceleration',
    keyConceptsAr: ['القانون الأول لنيوتن (القصور الذاتي)', 'القانون الثاني لنيوتن: F = ma', 'مخطط الجسم الحر وتحليل القوى', 'قوى الاحتكاك والجاذبية'],
    keyConceptsEn: ["Newton's 1st Law (Inertia)", "Newton's 2nd Law (F = ma)", 'Free Body Diagrams & Vectors', 'Friction & Gravitational Forces'],
    summaryAr: 'ننتقل من وصف الحركة إلى دراسة مسبباتها؛ كيف تولد القوى التسارع وفق قوانين السير إسحاق نيوتن الثلاثة الخالدة.',
    summaryEn: 'Transition from describing motion to analyzing its causes through classical Newtonian dynamics.',
    sections: [
      {
        titleAr: '1. قانون نيوتن الثاني: العلاقة بين القوة والكتلة والتسارع',
        titleEn: "1. Newton's 2nd Law: Force, Mass & Acceleration",
        contentAr: 'ينص قانون نيوتن الثاني على أن تسارع الجسم يتناسب طردياً مع محصلة القوى المؤثرة عليه وعكسياً مع كتلته: ΣF = ma.',
        contentEn: "Newton's second law states that acceleration is directly proportional to net force and inversely proportional to mass: ΣF = ma.",
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب القوة المحصلة والتسارع',
          titleEn: 'Worked Example: Net Force Acceleration',
          equation: 'F = m · a',
          steps: [
            { stepNumber: 1, textAr: 'صندوق كتلته 25 كجم تؤثر عليه قوة سحب أفقية مقدارها 150 نيوتن وقوة احتكاك 50 نيوتن.', textEn: 'A 25kg box experiences a 150N horizontal pull and 50N friction force.' },
            { stepNumber: 2, textAr: 'احسب محصلة القوى: ΣF = 150 - 50 = 100 نيوتن في اتجاه السحب.', textEn: 'Net force: ΣF = 150 - 50 = 100N in pull direction.' },
            { stepNumber: 3, textAr: 'احسب التسارع الناتج: a = ΣF ÷ m = 100 ÷ 25 = 4 م/ث².', textEn: 'Resulting acceleration: a = 100 ÷ 25 = 4 m/s².' }
          ],
          takeawayAr: 'التسارع ينتج دائماً عن محصلة القوى غير المتزنة، وليس عن وجود قوة واحدة منعزلة.',
          takeawayEn: 'Acceleration is driven strictly by unbalanced net force, not isolated component forces.'
        },
        tipsAr: ['ارسم دائماً مخطط الجسم الحر (Free Body Diagram) لجمع القوى في كل محور.'],
        tipsEn: ['Always sketch a Free Body Diagram to resolve orthogonal forces.']
      }
    ],
    assessment: {
      id: 'quiz-phys-2',
      lectureId: 'phys-2',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثانية: قوانين نيوتن وتطبيقات القوى',
      titleEn: "Lecture 2 Assessment: Newton's Laws & Force Mechanics",
      passingScore: 80,
      questions: [
        {
          id: 'qp2-1',
          textAr: 'إذا تضاعفت القوة المحصلة المؤثرة على جسم مع بقاء كتلته ثابتة، فماذا يحدث لتسارعه؟',
          textEn: 'If net force on an object doubles while mass remains constant, what happens to acceleration?',
          optionsAr: ['يتضاعف التسارع', 'يقل التسارع إلى النصف', 'يبقى ثابتاً', 'يصل إلى الصفر'],
          optionsEn: ['Acceleration doubles', 'Acceleration halves', 'Remains unchanged', 'Drops to zero'],
          correctIndex: 0,
          conceptTestedAr: 'التناسب الطردي بين القوة والتسارع',
          conceptTestedEn: 'Direct Proportionality of Force & Acceleration',
          explanationAr: 'طبقاً لقانون نيوتن الثاني F = ma، القوة والتسارع متناسبان طردياً، لذا مضاعفة القوة تضاعف التسارع.',
          explanationEn: 'By F = ma, force and acceleration are directly proportional.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'phys-3',
    order: 3,
    titleAr: 'المحاضرة 3: الشغل والطاقة الميكانيكية وقانون حفظ الطاقة',
    titleEn: 'Lecture 3: Work, Mechanical Energy & Energy Conservation',
    subtitleAr: 'دراسة طاقة الحركة، وطاقة الوضع التثاقلية، ومبدأ بقاء الطاقة الميكانيكية',
    subtitleEn: 'Study kinetic energy, gravitational potential energy, and conservation principles.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'phys-2',
    prerequisiteTitleAr: 'المحاضرة 2: قوانين نيوتن للحركة وتطبيقات القوى والاتزان',
    prerequisiteTitleEn: "Lecture 2: Newton's Laws of Motion & Force Applications",
    keyConceptsAr: ['تعريف الشغل الفيزيائي: W = F · d · cos(θ)', 'طاقة الحركة: KE = ½mv²', 'طاقة الوضع التثاقلية: PE = mgh', 'مبدأ حفظ الطاقة الميكانيكية'],
    keyConceptsEn: ['Mechanical Work Definition', 'Kinetic Energy Formula', 'Gravitational Potential Energy', 'Mechanical Energy Conservation'],
    summaryAr: 'الطاقة لا تفنى ولا تستحدث من العدم، بل تتحول من صورة إلى أخرى؛ نبرهن رياضياً وفيزيائياً على بقاء الطاقة الميكانيكية في الأنظمة المحافظة.',
    summaryEn: 'Energy is conserved across closed systems, shifting between kinetic and potential reservoirs.',
    sections: [
      {
        titleAr: '1. الشغل والطاقة الحركية',
        titleEn: '1. Work-Energy Theorem',
        contentAr: 'الشغل هو حاصل ضرب القوة المؤثرة في المسافة المقطوعة في اتجاه القوة. الشغل الكلي المبذول على جسم يساوي التغير في طاقته الحركية: W_net = ΔKE.',
        contentEn: 'Net work performed on an object equals its change in kinetic energy: W_net = ΔKE.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حفظ الطاقة لجسم ساقط',
          titleEn: 'Worked Example: Freefall Energy Exchange',
          equation: 'KE₁ + PE₁ = KE₂ + PE₂',
          steps: [
            { stepNumber: 1, textAr: 'كرة كتلتها 2 كجم تسقط من ارتفاع 20 متراً من السكون (g = 9.8 م/ث²).', textEn: 'A 2kg ball drops from rest at 20m height (g = 9.8 m/s²).' },
            { stepNumber: 2, textAr: 'طاقة الوضع الابتدائية: PE = mgh = 2 × 9.8 × 20 = 392 جول.', textEn: 'Initial potential energy: PE = mgh = 2 × 9.8 × 20 = 392 Joules.' },
            { stepNumber: 3, textAr: 'لحظة الاصطدام بالأرض، تتحول كل طاقة الوضع إلى طاقة حركية: KE = 392 جول.', textEn: 'At impact, all potential energy transforms to kinetic: KE = 392 Joules.' }
          ],
          takeawayAr: 'في غياب مقاومة الهواء، تظل الطاقة الميكانيكية الكلية ثابتة عند أي نقطة في مسار السقوط.',
          takeawayEn: 'Neglecting air resistance, total mechanical energy remains conserved throughout descent.'
        },
        tipsAr: ['انتبه لزاوية تأثير القوة؛ إذا كانت القوة عمودية على الحركة (cos 90° = 0) فإن الشغل يساوي صفراً.'],
        tipsEn: ['If force acts perpendicular to displacement (cos 90° = 0), zero work is done.']
      }
    ],
    assessment: {
      id: 'quiz-phys-3',
      lectureId: 'phys-3',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثالثة: الشغل وحفظ الطاقة',
      titleEn: 'Lecture 3 Assessment: Work & Conservation of Energy',
      passingScore: 80,
      questions: [
        {
          id: 'qp3-1',
          textAr: 'يحمل شخص حقيبة وزنها 50 نيوتن ويسير بها أفقياً مسافة 10 أمتار بسرعة ثابتة. ما الشغل المبذول بواسطة قوة حمله؟',
          textEn: 'A person carries a 50N bag walking horizontally for 10m at constant speed. What is the work done by the lifting force?',
          optionsAr: ['500 جول', 'صفر جول', '50 جول', '250 جول'],
          optionsEn: ['500 Joules', '0 Joules', '50 Joules', '250 Joules'],
          correctIndex: 1,
          conceptTestedAr: 'الزاوية العمودية بين القوة والإزاحة والشغل الصفري',
          conceptTestedEn: 'Perpendicular Forces & Zero Work',
          explanationAr: 'قوة الحمل رأسية لأعلى بينما الإزاحة أفقية، والزاوية بينهما 90 درجة، و cos(90°) = 0، إذن الشغل المبذول يساوي صفراً.',
          explanationEn: 'The lifting force is vertical while displacement is horizontal (θ = 90°); cos 90° = 0, so work is 0.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'phys-4',
    order: 4,
    titleAr: 'المحاضرة 4: الديناميكا الحرارية والأنظمة الفيزيائية المعقدة',
    titleEn: 'Lecture 4: Thermodynamics & Complex Physical Systems',
    subtitleAr: 'قوانين الديناميكا الحرارية، وكفاءة المحركات الحرارية، ومفهوم الإنتروبيا والاتزان الحراري',
    subtitleEn: 'Thermodynamic laws, heat engine efficiency, entropy, and thermal equilibrium.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'phys-3',
    prerequisiteTitleAr: 'المحاضرة 3: الشغل والطاقة الميكانيكية وقانون حفظ الطاقة',
    prerequisiteTitleEn: 'Lecture 3: Work, Mechanical Energy & Energy Conservation',
    keyConceptsAr: ['القانون الأول للديناميكا الحرارية: ΔU = Q - W', 'طرق انتقال الحرارة: التوصيل والحمل والإشعاع', 'القانون الثاني للحرارة والإنتروبيا', 'كفاءة محرك كارنو'],
    keyConceptsEn: ['First Law of Thermodynamics', 'Conduction, Convection & Radiation', 'Second Law & Entropy', 'Carnot Efficiency'],
    summaryAr: 'المحطة الختامية لمسار الفيزياء؛ نربط بين المفاهيم المجهرية للجسيمات والظواهر الحرارية العيانية وكفاءة إنتاج الطاقة في الكون.',
    summaryEn: 'Synthesizing macroscopic thermal laws with microscopic molecular energetics.',
    sections: [
      {
        titleAr: '1. القانون الأول للديناميكا الحرارية',
        titleEn: '1. First Law of Thermodynamics',
        contentAr: 'التغير في الطاقة الداخلية لنظام فيزيائي مغلق يساوي كمية الحرارة المضافة إليه مطروحاً منها الشغل الذي يبذله النظام: ΔU = Q - W.',
        contentEn: 'Internal energy changes equal added heat minus work done by the system: ΔU = Q - W.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: التمدد الحراري للغاز',
          titleEn: 'Worked Example: Thermal Gas Expansion',
          equation: 'ΔU = Q - W',
          steps: [
            { stepNumber: 1, textAr: 'امتص غاز محبوس في مكبس حرارة قدرها 500 جول، وتمدد باذلاً شغلاً قدره 200 جول.', textEn: 'Gas in a piston absorbs 500J of heat and expands, doing 200J of work.' },
            { stepNumber: 2, textAr: 'احسب التغير في الطاقة الداخلية: ΔU = 500 - 200 = +300 جول.', textEn: 'Internal energy change: ΔU = 500 - 200 = +300 Joules.' },
            { stepNumber: 3, textAr: 'زيادة الطاقة الداخلية تؤدي لارتفاع درجة حرارة الغاز مباشرة.', textEn: 'Positive ΔU corresponds directly to increased gas temperature.' }
          ],
          takeawayAr: 'الحرارة والشغل صورتان متكافئتان لتبادل الطاقة بين النظام والوسط المحيط.',
          takeawayEn: 'Heat and work represent dual equivalent pathways for energy transfer.'
        },
        tipsAr: ['انتبه لإشارة الشغل: الشغل المبذول بواسطة النظام موجب، والشغل المبذول عليه سالب.'],
        tipsEn: ['Work done by the system is positive; work done on the system is negative.']
      }
    ],
    assessment: {
      id: 'quiz-phys-4',
      lectureId: 'phys-4',
      titleAr: 'الاختبار النهائي للمحاضرة الرابعة: الديناميكا الحرارية',
      titleEn: 'Lecture 4 Assessment: Thermodynamics Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qp4-1',
          textAr: 'إذا فُقدت حرارة مقدارها 300 جول من نظام، وبُذل عليه شغل مقداره 100 جول، فما التغير في طاقته الداخلية؟',
          textEn: 'If 300J of heat is lost from a system and 100J of work is done on it, what is ΔU?',
          optionsAr: ['-200 جول', '+200 جول', '-400 جول', '+400 جول'],
          optionsEn: ['-200 Joules', '+200 Joules', '-400 Joules', '+400 Joules'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق إشارات القانون الأول للحرارة: ΔU = Q - W',
          conceptTestedEn: 'Thermodynamic Sign Conventions',
          explanationAr: 'Q = -300 جول (حرارة مفقودة)، W = -100 جول (شغل مبذول عليه). إذن ΔU = -300 - (-100) = -200 جول.',
          explanationEn: 'Q = -300J and W = -100J, yielding ΔU = -300 - (-100) = -200J.',
          difficulty: 'hard'
        }
      ]
    }
  }
];

// ============================================================================
// 3. ARABIC LITERATURE & RHETORIC CURRICULUM (اللغة العربية والبلاغة)
// ============================================================================
export const ARABIC_LIT_LECTURES: Lecture[] = [
  {
    id: 'lit-1',
    order: 1,
    titleAr: 'المحاضرة 1: علم البيان: التشبيه وأركانه وأثره البلاغي في المعنى',
    titleEn: 'Lecture 1: Rhetoric & Imagery: Simile and Its Semantic Aesthetics',
    subtitleAr: 'دراسة أركان التشبيه الأربعة والتمييز بين التشبيه المفرد والتشبيه التمثيلي والضمني',
    subtitleEn: 'Explore the 4 components of similes, contrasting explicit, composite, and implied analogies.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['أركان التشبيه الأربعة: المشبه والمشبه به والأداة ووجه الشبه', 'التشبيه المؤكد والمجمل والتشبيه البليغ', 'التشبيه التمثيلي والتشبيه الضمني', 'الأثر البلاغي والجمالي للتشبيه في إيصال المعنى'],
    keyConceptsEn: ['Four Components of Simile', 'Confirmed, Concise & Eloquent Similes', 'Composite vs Implied Metaphors', 'Aesthetic and Semantic Impact'],
    summaryAr: 'علم البيان هو بوابة تذوق سحر البيان العربي؛ نكتشف في هذا الدرس كيف يرتقي الكاتب بالمعنى عبر التشبيه البليغ الذي يجمع بين الدقة والجمال.',
    summaryEn: 'Discover how classical Arabic rhetoric elevates prose and poetry through layered figurative similes.',
    sections: [
      {
        titleAr: '1. أركان التشبيه وأنواعه البلاغية',
        titleEn: '1. Core Components and Classifications of Similes',
        contentAr: 'يقوم التشبيه على عقد مماثلة بين شيئين اشتركا في صفة أو أكثر. أركانه هي: المشبه، والمشبه به (طرفا التشبيه الأساسيان)، وأداة التشبيه، ووجه الشبه.',
        contentEn: 'A simile establishes an analogy between two entities sharing salient qualities, anchored by tenor, vehicle, connective particle, and ground.',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي: تحليل التشبيه البليغ',
          titleEn: 'Worked Analysis: Eloquent Simile Decomposition',
          equation: 'المشبه + المشبه به (حذف الأداة ووجه الشبه)',
          steps: [
            { stepNumber: 1, textAr: 'تأمل قول الشاعر: "العلمُ نورٌ والجهلُ ظلامٌ".', textEn: 'Examine the phrase: "Knowledge is light, and ignorance is darkness."' },
            { stepNumber: 2, textAr: 'المشبه: العلم. المشبه به: النور. حُذفت أداة التشبيه وحُذف وجه الشبه.', textEn: 'Tenor: Knowledge. Vehicle: Light. Connective particle and ground omitted.' },
            { stepNumber: 3, textAr: 'هذا هو "التشبيه البليغ" وهو أعلى مراتب التشبيه لأنه يوحد بين المشبه والمشبه به.', textEn: 'This constitutes the Eloquent Simile, the pinnacle of analogy creating direct conceptual equivalence.' }
          ],
          takeawayAr: 'كلما قَلّت الأركان المذكورة صراحةً (بحذف الأداة ووجه الشبه)، قويت دلالة التشبيه وارتقت بلاغته.',
          takeawayEn: 'Omitting explicit connective particles intensifies rhetorical immediacy and poetic power.'
        },
        tipsAr: ['طرفا التشبيه (المشبه والمشبه به) لا يمكن حذفهما معاً في التشبيه، فإن حُذف أحدهما تحول إلى استعارة.'],
        tipsEn: ['If either the tenor or vehicle is completely omitted, the figure of speech transitions into a metaphor.']
      }
    ],
    assessment: {
      id: 'quiz-lit-1',
      lectureId: 'lit-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: علم البيان والتشبيه',
      titleEn: 'Lecture 1 Assessment: Classical Rhetoric & Similes',
      passingScore: 80,
      questions: [
        {
          id: 'ql1-1',
          textAr: 'ما هو التشبيه البليغ في البلاغة العربية؟',
          textEn: 'What defines an Eloquent Simile in Arabic rhetoric?',
          optionsAr: [
            'ما حُذفت منه أداة التشبيه ووجه الشبه وبقي الطرفان',
            'ما ذُكرت فيه جميع أركان التشبيه الأربعة',
            'ما حُذف منه المشبه به',
            'ما كان وجه الشبه فيه منفياً'
          ],
          optionsEn: [
            'Simile where particle and ground are omitted, retaining tenor and vehicle',
            'Simile where all four components are explicitly stated',
            'Figure where the vehicle is deleted',
            'Figure with negated comparison'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف التشبيه البليغ وأركانه المحذوفة',
          conceptTestedEn: 'Eloquent Simile Definition',
          explanationAr: 'التشبيه البليغ هو ما حُذفت منه أداة التشبيه ووجه الشبه، مثل: "المعلمُ بحرٌ".',
          explanationEn: 'The eloquent simile deletes the particle and ground, leaving tenor and vehicle directly identified.',
          difficulty: 'easy'
        },
        {
          id: 'ql1-2',
          textAr: 'في قولنا: "الجندي كالأسد في الشجاعة"، ما هو "وجه الشبه"؟',
          textEn: 'In "The soldier is like a lion in bravery", what is the ground (وجه الشبه)?',
          optionsAr: ['الشجاعة', 'الجندي', 'الأسد', 'الكاف'],
          optionsEn: ['Bravery', 'The soldier', 'The lion', 'Like (Kaf)'],
          correctIndex: 0,
          conceptTestedAr: 'تحديد أركان التشبيه في الجملة',
          conceptTestedEn: 'Identifying Simile Components',
          explanationAr: 'وجه الشبه هو الصفة المشتركة التي تجمع بين المشبه والمشبه به، وهنا هي "الشجاعة".',
          explanationEn: 'The ground is the shared property between tenor and vehicle, which is bravery.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'lit-2',
    order: 2,
    titleAr: 'المحاضرة 2: الاستعارة المكنية والتصريحية وسر البلاغة الجمالية',
    titleEn: 'Lecture 2: Implicit & Explicit Metaphors and Aesthetic Eloquence',
    subtitleAr: 'التمييز الدقيق بين الاستعارة المكنية والتصريحية، وفهم علاقة المشابهة مع قرينة مانعة',
    subtitleEn: 'Distinguish implicit (Makniyyah) and explicit (Tasrihiyyah) metaphors with context clues.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-1',
    prerequisiteTitleAr: 'المحاضرة 1: علم البيان: التشبيه وأركانه وأثره البلاغي في المعنى',
    prerequisiteTitleEn: 'Lecture 1: Rhetoric & Imagery: Simile and Its Semantic Aesthetics',
    keyConceptsAr: ['تعريف الاستعارة باعتبارها تشبيهاً حُذف أحد طرفيه', 'الاستعارة المكنية وحذف المشبه به مع إبقاء لوازمه', 'الاستعارة التصريحية والتصريح بالمشبه به', 'سر جمال الاستعارة: التشخيص والتجسيم والتوضيح'],
    keyConceptsEn: ['Metaphor as Truncated Simile', 'Implicit Metaphor (Makniyyah)', 'Explicit Metaphor (Tasrihiyyah)', 'Personification and Concretization'],
    summaryAr: 'الاستعارة تشبيه حذف أحد طرفيه مع قرينة تمنع من إرادة المعنى الحقيقي. إذا صُرح بالمشبه به فهي تصريحية، وإذا حُذف وكُني عنه بشيء من لوازمه فهي مكنية.',
    summaryEn: 'Metaphor elevates meaning through implicit comparison. Identifying whether tenor or vehicle is retained distinguishes Makniyyah from Tasrihiyyah.',
    sections: [
      {
        titleAr: '1. التمييز بين الاستعارة المكنية والتصريحية',
        titleEn: '1. Implicit vs Explicit Metaphor Analysis',
        contentAr: 'في الاستعارة المكنية: نذكر المشبه ونحذف المشبه به ونشير إليه بصفة من صفاته (مثل: بكت السماء). أما في الاستعارة التصريحية: فنحذف المشبه ونصرّح بالمشبه به مباشرة (مثل: واعتصموا بحبل الله).',
        contentEn: 'In Makniyyah, the vehicle is omitted leaving an attributed quality. In Tasrihiyyah, the tenor is omitted and vehicle directly uttered.',
        interactiveExample: {
          titleAr: 'تحليل استعارة مكنية في الشعر العربي',
          titleEn: 'Worked Example: Makniyyah Metaphor Analysis',
          equation: 'المشبه مذكور + المشبه به محذوف + قرينة دالة',
          steps: [
            { stepNumber: 1, textAr: 'تأمل قول أبي ذؤيب: "وإذا المَنِيَّةُ أَنشَبَت أَظفارَها ... أَلفَيتَ كُلَّ تَميمَةٍ لا تَنفَعُ".', textEn: 'Reflect on: "When fate sinks its claws, every amulet is proven futile."' },
            { stepNumber: 2, textAr: 'المشبه هو المنية (الموت). هل الموت له أظفار؟ كلا، الأظفار من لوازم الوحش الكاسر.', textEn: 'Tenor: Death. Does death possess claws? Claws belong to predatory beasts.' },
            { stepNumber: 3, textAr: 'حُذف المشبه به (الوحش المفترس) ورُمز له بشيء من لوازمه (الأظفار)، فهذه استعارة مكنية رائعة.', textEn: 'Vehicle (beast) omitted; its signature attribute (claws) retained: Makniyyah metaphor.' }
          ],
          takeawayAr: 'الاستعارة المكنية تمنح المعاني المجردة حياة وحركة وتجسيماً نابضاً.',
          takeawayEn: 'Makniyyah metaphors personify abstract concepts into vivid tangible dynamics.'
        },
        tipsAr: ['ابحث دائماً عن "القرينة"؛ الكلمة التي يستحيل أن تكون بالمعنى الحرفي هي مفتاح الاستعارة.'],
        tipsEn: ['Always pinpoint the non-literal contextual clue (Qarinah) to unlock the metaphor.']
      }
    ],
    assessment: {
      id: 'quiz-lit-2',
      lectureId: 'lit-2',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثانية: الاستعارة المكنية والتصريحية',
      titleEn: 'Lecture 2 Assessment: Metaphor Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'ql2-1',
          textAr: 'في جملة "تحدث التاريخ عن أمجاد أمتنا"، ما نوع الاستعارة؟',
          textEn: 'In "History spoke of our nations glory", what metaphor type is present?',
          optionsAr: ['استعارة مكنية', 'استعارة تصريحية', 'تشبيه تمثيلي', 'كناية عن موصوف'],
          optionsEn: ['Implicit Metaphor (Makniyyah)', 'Explicit Metaphor (Tasrihiyyah)', 'Composite Simile', 'Metonymy'],
          correctIndex: 0,
          conceptTestedAr: 'الاستعارة المكنية والتشخيص',
          conceptTestedEn: 'Implicit Metaphor & Personification',
          explanationAr: 'شُبِّه التاريخ بإنسان يتحدث، وحُذف المشبه به (الإنسان) ورُمز إليه بلازمة من لوازمه وهي الحديث (استعارة مكنية).',
          explanationEn: 'History is personified as a speaker; the human vehicle is omitted, leaving speech as the attribute.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lit-3',
    order: 3,
    titleAr: 'المحاضرة 3: علم البديع: المحسنات اللفظية والمعنوية وأثرها الصوتي',
    titleEn: 'Lecture 3: Rhetorical Figures: Verbal & Semantic Embellishments',
    subtitleAr: 'دراسة الجناس، والسجع، والطباق، والمقابلة، ودورها في تعزيز الإيقاع والدلالة',
    subtitleEn: 'Master paronomasia (Jinas), rhyme prose (Saj), and antithesis (TibaQ / Muqabalah).',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-2',
    prerequisiteTitleAr: 'المحاضرة 2: الاستعارة المكنية والتصريحية وسر البلاغة الجمالية',
    prerequisiteTitleEn: 'Lecture 2: Implicit & Explicit Metaphors and Aesthetic Eloquence',
    keyConceptsAr: ['الجناس التام والجناس الناقص', 'السجع وتوافق الفواصل النثرية', 'الطباق الإيجابي والسلبي', 'المقابلة والتضاد المتعدد في المعاني'],
    keyConceptsEn: ['Complete vs Incomplete Paronomasia (Jinas)', 'Rhythmical Prose Cadence (Saj)', 'Positive and Negative Antithesis', 'Semantic Multi-Parallelism'],
    summaryAr: 'علم البديع يعنى بوجوه تحسين الكلام بعد رعاية مطابقة المعنى لمقتضى الحال؛ ينقسم إلى محسنات لفظية تضفي جرساً موسيقياً عذباً ومحسنات معنوية تعمق الدلالة.',
    summaryEn: 'Ilm al-Badi explores verbal and semantic ornamentation, harmonizing phonetic resonance with conceptual depth.',
    sections: [
      {
        titleAr: '1. الجناس: التماثل الصوتي مع اختلاف المعنى',
        titleEn: '1. Jinas: Phonetic Identity with Divergent Meanings',
        contentAr: 'الجناس هو تشابه كلمتين في اللفظ مع اختلافهما التام في المعنى. إن اتفقت الكلمتان في نوع الحروف وعددها وترتيبها وحركاتها فهو تام، وإن اختلفتا في أحدها فهو ناقص.',
        contentEn: 'Jinas occurs when two words resonate phonetically but diverge entirely in meaning, classified into complete and partial.',
        interactiveExample: {
          titleAr: 'تطبيق: الجناس التام في القرآن الكريم',
          titleEn: 'Worked Example: Quranic Complete Jinas',
          equation: 'لفظ متطابق + معنيان متغايران',
          steps: [
            { stepNumber: 1, textAr: 'تأمل قوله تعالى: "وَيَوْمَ تَقُومُ السَّاعَةُ يُقْسِمُ الْمُجْرِمُونَ مَا لَبِثُوا غَيْرَ سَاعَةٍ".', textEn: 'Reflect on: "And the Day the Hour appears, criminals swear they remained no more than an hour."' },
            { stepNumber: 2, textAr: 'كلمة "الساعة" الأولى تعني يوم القيامة.', textEn: 'The first "Hour" denotes the Day of Resurrection.' },
            { stepNumber: 3, textAr: 'كلمة "ساعة" الثانية تعني مدة زمنية وجيزة من الوقت.', textEn: 'The second "hour" denotes a brief interval of terrestrial time.' },
            { stepNumber: 4, textAr: 'هذا هو الجناس التام؛ اتفاق كامل في حروف الكلمة مع تباين عظيم في المعنى.', textEn: 'Complete Jinas: flawless lexical identity paired with dramatic semantic contrast.' }
          ],
          takeawayAr: 'الجناس يثير انتباه السامع ويحدث نغمة موسيقية تطرب لها الآذان.',
          takeawayEn: 'Paronomasia heightens auditor engagement through musical phonetic correspondence.'
        },
        tipsAr: ['الجناس المتكلف يضعف الأسلوب؛ سر بلاغة البديع أن يأتي عفو الخاطر لخدمة المعنى.'],
        tipsEn: ['Excessive unmotivated ornamentation weakens prose; authentic rhetoric arises organically.']
      }
    ],
    assessment: {
      id: 'quiz-lit-3',
      lectureId: 'lit-3',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثالثة: علم البديع والمحسنات',
      titleEn: 'Lecture 3 Assessment: Rhetorical Embellishments',
      passingScore: 80,
      questions: [
        {
          id: 'ql3-1',
          textAr: 'ما الفرق بين الطباق والمقابلة في البلاغة العربية؟',
          textEn: 'What is the distinction between TibaQ and Muqabalah?',
          optionsAr: [
            'الطباق يكون بين كلمتين متضادتين، أما المقابلة فتكون بين تركيبين يحتويان على تضادين أو أكثر مرتبين',
            'الطباق محسن لفظي والمقابلة محسن معنوي',
            'الطباق يختص بالشعر فقط والمقابلة بالنثر',
            'لا يوجد فرق بينهما كلاهما تضاد واحد'
          ],
          optionsEn: [
            'TibaQ is between 2 contrasting words; Muqabalah involves 2 or more sequential contrasts',
            'TibaQ is verbal; Muqabalah is semantic',
            'TibaQ is poetry-only; Muqabalah is prose-only',
            'There is no distinction'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين الطباق والمقابلة',
          conceptTestedEn: 'Antithesis vs Parallel Contrast',
          explanationAr: 'الطباق تضاد بين لفظين منفردين (مثل: الليل والنهار)، بينما المقابلة أن يؤتى بمعنيين أو أكثر ثم يؤتى بما يقابل ذلك على الترتيب.',
          explanationEn: 'TibaQ pairs single antonyms; Muqabalah orchestrates structured multi-word oppositions.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lit-4',
    order: 4,
    titleAr: 'المحاضرة 4: النقد الأدبي والتحليل الموضوعي والجمالي للنصوص',
    titleEn: 'Lecture 4: Literary Criticism & Aesthetic Textual Deconstruction',
    subtitleAr: 'استراتيجيات تفكيك البنية الفنية، وتذوق الصور الشعرية، ونقد العاطفة والفكرة',
    subtitleEn: 'Analyze poetic structures, thematic unities, aesthetic resonance, and critical frameworks.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lit-3',
    prerequisiteTitleAr: 'المحاضرة 3: علم البديع: المحسنات اللفظية والمعنوية وأثرها الصوتي',
    prerequisiteTitleEn: 'Lecture 3: Rhetorical Figures: Verbal & Semantic Embellishments',
    keyConceptsAr: ['عناصر العمل الأدبي: العاطفة والفكرة والصورة والأسلوب', 'الوحدة العضوية والموضوعية في القصيدة', 'معايير النقد البلاغي والجمالي', 'التحليل التطبيقي لنص أدبي كلاسيكي وحديث'],
    keyConceptsEn: ['Literary Work Dimensions: Emotion, Idea, Imagery & Style', 'Organic & Thematic Unity', 'Aesthetic Critical Criteria', 'Applied Textual Criticism'],
    summaryAr: 'المحطة الختامية لمسار اللغة العربية؛ ندمج ما تعلمناه في البيان والبديع والمعاني لنمارس النقد الأدبي التحليلي الراقي للنصوص الشعرية والنثرية.',
    summaryEn: 'Synthesizing rhetoric, imagery, and figurative analysis to evaluate authentic literary masterpieces.',
    sections: [
      {
        titleAr: '1. معايير نقد الصورة الشعرية',
        titleEn: '1. Poetic Imagery Critical Criteria',
        contentAr: 'يقاس نجاح الصورة الأدبية بمدى صدقها التعبيري وقدرتها على نقل مشاعر المبدع إلى القارئ دون افتعال أو غرابة منفرة.',
        contentEn: 'Poetic imagery is critiqued by expressive authenticity, emotional fidelity, and organic coherence within the work.',
        interactiveExample: {
          titleAr: 'نقد تحليلي: تجانس العاطفة مع الصورة البيانية',
          titleEn: 'Worked Criticism: Emotional Alignment with Imagery',
          equation: 'صدق العاطفة + براعة التشكيل الخيالي = خلود النص',
          steps: [
            { stepNumber: 1, textAr: 'اقرأ النص وقرر ما إذا كانت الألفاظ توحي بالحزن أو الفرح أو الحماسة.', textEn: 'Discern whether diction evokes melancholy, joy, or valor.' },
            { stepNumber: 2, textAr: 'افحص الصور البيانية: هل تدعم هذه العاطفة أم تنفر منها؟', textEn: 'Assess if imagery reinforces the prevailing emotional climate.' },
            { stepNumber: 3, textAr: 'استنتج القيمة الجمالية والوحدة الفنية للعمل الأدبي.', textEn: 'Synthesize aesthetic value and overall artistic coherence.' }
          ],
          takeawayAr: 'النص الأدبي العظيم هو الذي تتكامل فيه الموسيقى والصورة والفكرة في نسيج عضوي لا يقبل التجزئة.',
          takeawayEn: 'Masterpiece literature unites rhythm, metaphor, and intellect into an indivisible organic synthesis.'
        },
        tipsAr: ['احرص على الاستشهاد بعبارات دقيقة من النص عند كتابة تحليلك النقدي.'],
        tipsEn: ['Always cite specific textual evidence when constructing literary critiques.']
      }
    ],
    assessment: {
      id: 'quiz-lit-4',
      lectureId: 'lit-4',
      titleAr: 'الاختبار النهائي للمحاضرة الرابعة: النقد والتحليل الأدبي',
      titleEn: 'Lecture 4 Assessment: Applied Literary Criticism',
      passingScore: 80,
      questions: [
        {
          id: 'ql4-1',
          textAr: 'ما المقصود بـ "الوحدة العضوية" في القصيدة الأدبية الحديثة؟',
          textEn: 'What is meant by organic unity in modern poetry?',
          optionsAr: [
            'ترابط أفكار القصيدة ومشاهرها بحيث تكون كالكائن الحي المتماسك',
            'أن تكون جميع الأبيات منتهية بنفس الحرف',
            'أن يتحدث الشاعر عن الطبيعة والكائنات الحية فقط',
            'أن تتكون القصيدة من عدد محدد من الأبيات'
          ],
          optionsEn: [
            'Coherence where ideas and emotions interlock like an organic living entity',
            'All verses ending with identical rhyme letter',
            'Writing exclusively about biology and nature',
            'Restricting verse count'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الوحدة العضوية في النقد الأدبي',
          conceptTestedEn: 'Organic Unity Framework',
          explanationAr: 'الوحدة العضوية تعني وحدة الموضوع ووحدة الجو النفسي وترابط الأفكار وتكاملها عبر القصيدة.',
          explanationEn: 'Organic unity signifies thematic coherence, uniform emotional atmosphere, and interlocked ideas.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 4. MIDDLE SCHOOL ARABIC LANGUAGE (اللغة العربية - لغتي الخالدة للمرحلة المتوسطة)
// ============================================================================
export const ARABIC_LANG_LECTURES: Lecture[] = [
  {
    id: 'lang-1',
    order: 1,
    titleAr: 'المحاضرة 1: أقسام الكلمة (الاسم والفعل والحرف) وعلامات التمييز',
    titleEn: 'Lecture 1: Parts of Speech: Nouns, Verbs, Particles & Distinctions',
    subtitleAr: 'التمييز بين أقسام الكلمة الثلاثة والتعرف على علامات الاسم الخاصة وعلامات الفعل',
    subtitleEn: 'Master the three categories of Arabic words: Nouns, Verbs, and Particles.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['أقسام الكلمة الثلاثة: اسم وفعل وحرف', 'علامات الاسم: التنوين، الجر، أل التعريف، النداء', 'علامات الفعل: تاء الفاعل، تاء التأنيث، سين الاستقبال', 'أهمية الحروف في ربط الكلمات وتحديد المعنى'],
    keyConceptsEn: ['Three Parts of Speech: Noun, Verb, Particle', 'Noun Identification Markers', 'Verb Identification Markers', 'Function of Particles'],
    summaryAr: 'الكلام في لغتنا العربية يتألف من ثلاث لبنات أساسية لا رابع لها: الاسم ويدل على معنى غير مقترن بزمن، والفعل ويدل على حدث مقترن بزمن، والحرف ويربط بين الكلمات.',
    summaryEn: 'Arabic words comprise three foundational blocks: Nouns, Verbs, and Relational Particles.',
    sections: [
      {
        titleAr: '1. كيف نميز بين الاسم والفعل؟',
        titleEn: '1. Distinguishing Nouns from Verbs',
        contentAr: 'الاسم يقبل علامات لا يقبلها الفعل؛ فإذا أردت فحص كلمة ما جرب إدخال (أل التعريف) عليها مثل: (كتاب -> الكتاب) أو التنوين (كتابٌ)، فإن قبلتها فهي اسم.',
        contentEn: 'Nouns accept markers rejected by verbs, such as the definite article (Al) and nunation (Tanween).',
        interactiveExample: {
          titleAr: 'تطبيق: اختبار نوع الكلمة',
          titleEn: 'Worked Example: Word Category Testing',
          equation: 'اختبار الكلمة + (أل التعريف) أو (التنوين)',
          steps: [
            { stepNumber: 1, textAr: 'فحص كلمة "يَكْتُبُ": هل يصح أن نقول "الْيَكْتُبُ"؟ كلا، إذن ليست اسماً بل فعل.', textEn: 'Test "Yaktub" (writes): Can we add Al-? No, thus it is a verb.' },
            { stepNumber: 2, textAr: 'فحص كلمة "مَدْرَسَة": نقبل "الْمَدْرَسَة" و"مَدْرَسَةٌ"، إذن هي اسم.', textEn: 'Test "Madrasah": Accepts Al- and Tanween, confirmed as a noun.' }
          ],
          takeawayAr: 'العلامة التي تميز الاسم فوراً هي قبول (أل التعريف) أو (التنوين).',
          takeawayEn: 'Definite article and nunation are immediate identifiers for Arabic nouns.'
        },
        tipsAr: ['الفعل الماضي يقبل تاء التأنيث الساكنة في آخره (كَتَبَتْ).'],
        tipsEn: ['Past tense verbs uniquely accept feminine Taa (كتبت).']
      }
    ],
    assessment: {
      id: 'quiz-lang-1',
      lectureId: 'lang-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: أقسام الكلمة',
      titleEn: 'Lecture 1 Assessment: Parts of Speech',
      passingScore: 80,
      questions: [
        {
          id: 'qlg1-1',
          textAr: 'أي من الكلمات التالية تُعد "اسماً" لأنها تقبل التنوين؟',
          textEn: 'Which of the following is a noun accepting Tanween?',
          optionsAr: ['شَجَرَةٌ', 'يَذْهَبُ', 'عَلَى', 'انْطَلَقَ'],
          optionsEn: ['Shajarah (Tree)', 'Yadhhab (Goes)', 'Ala (On)', 'Intalaqa (Launched)'],
          correctIndex: 0,
          conceptTestedAr: 'علامات الاسم',
          conceptTestedEn: 'Noun Markers',
          explanationAr: 'كلمة "شجرةٌ" اسم لأنها تقبل التنوين والتاء المربوطة وأل التعريف.',
          explanationEn: 'Shajarah is a noun because it accepts tanween and the definite article.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'lang-2',
    order: 2,
    titleAr: 'المحاضرة 2: الجملة الاسمية وركناها الأساسيان: المبتدأ والخبر',
    titleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',
    subtitleAr: 'التعرف على المبتدأ المرفوع والخبر المتمم للمعنى، وعلامات الرفع الأصلية والفرعية',
    subtitleEn: 'Identify subjects and predicates with nominative case inflections.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-1',
    prerequisiteTitleAr: 'المحاضرة 1: أقسام الكلمة (الاسم والفعل والحرف) وعلامات التمييز',
    prerequisiteTitleEn: 'Lecture 1: Parts of Speech: Nouns, Verbs, Particles & Distinctions',
    keyConceptsAr: ['تعريف الجملة الاسمية (تبدأ باسم)', 'المبتدأ: الاسم المرفوع الذي نبدأ به الكلام', 'الخبر: الجزء الذي يتمم معنى الجملة مع المبتدأ', 'علامة الرفع الأصلية (الضمة) والفرعية (الألف والواو)'],
    keyConceptsEn: ['Nominal Sentence Structure', 'Mubtada (Subject)', 'Khabar (Predicate)', 'Nominative Case Inflections'],
    summaryAr: 'الجملة الاسمية هي كل جملة تبدأ باسم، وتتألف من ركنين رئيسين مرفوعين: المبتدأ وهو محور الحديث، والخبر وهو ما نخبر به عن المبتدأ لتكتمل الفائدة.',
    summaryEn: 'Nominal sentences originate with a noun and require subject and predicate in nominative agreement.',
    sections: [
      {
        titleAr: '1. ركنا الجملة الاسمية',
        titleEn: '1. Subject and Predicate Foundations',
        contentAr: 'في جملة "السماءُ صافيةٌ"، بدأنا بكلمة "السماءُ" فهي مبتدأ مرفوع، وتم المعنى بكلمة "صافيةٌ" فهي خبر مرفوع.',
        contentEn: 'In "The sky is clear", the first noun is the subject, completed by the predicate.',
        interactiveExample: {
          titleAr: 'تطبيق: تحديد المبتدأ والخبر',
          titleEn: 'Worked Example: Identifying Subject and Predicate',
          equation: 'المبتدأ (اسم البداية) + الخبر (المتمم للمعنى)',
          steps: [
            { stepNumber: 1, textAr: 'الجملة: "العِلْمُ نَافِعٌ لِلْبَشَرِيَّةِ".', textEn: 'Sentence: "Knowledge is beneficial to humanity."' },
            { stepNumber: 2, textAr: 'المبتدأ هو "العِلْمُ" (مرفوع بالضمة الظاهرة).', textEn: 'Subject: "Knowledge" (Nominative with Dammah).' },
            { stepNumber: 3, textAr: 'الخبر هو "نَافِعٌ" لأنه تمم المعنى الأساسي للمبتدأ.', textEn: 'Predicate: "Beneficial" because it completes the core meaning.' }
          ],
          takeawayAr: 'الخبر هو الكلمة التي تجيب عن سؤال: "ما به المبتدأ؟".',
          takeawayEn: 'The predicate answers what is being predicated about the subject.'
        },
        tipsAr: ['المبتدأ والخبر مرفوعان دائماً ما لم يدخل عليهما ناسخ (كان أو إن).'],
        tipsEn: ['Both subject and predicate remain nominative unless modified by particles.']
      }
    ],
    assessment: {
      id: 'quiz-lang-2',
      lectureId: 'lang-2',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثانية: المبتدأ والخبر',
      titleEn: 'Lecture 2 Assessment: Nominal Sentences',
      passingScore: 80,
      questions: [
        {
          id: 'qlg2-1',
          textAr: 'في جملة "الْمُؤْمِنُونَ صَادِقُونَ"، ما هي علامة رفع المبتدأ والخبر؟',
          textEn: 'In "The believers are truthful", what is the nominative marker?',
          optionsAr: ['الواو لأنه جمع مذكر سالم', 'الضمة الظاهرة', 'الألف لأنه مثنى', 'الفتحة'],
          optionsEn: ['Waw (Sound Masculine Plural)', 'Dammah', 'Alif (Dual)', 'Fathah'],
          correctIndex: 0,
          conceptTestedAr: 'علامات الرفع الفرعية',
          conceptTestedEn: 'Secondary Nominative Markers',
          explanationAr: 'جمع المذكر السالم يُرفع بالواو نيابة عن الضمة، فالمبتدأ والخبر هنا مرفوعان بالواو.',
          explanationEn: 'Sound masculine plurals take Waw as the nominative inflection marker.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lang-3',
    order: 3,
    titleAr: 'المحاضرة 3: الجملة الفعلية: الفعل والفاعل وعلامات الإعراب',
    titleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',
    subtitleAr: 'فهم أركان الجملة الفعلية، وأحكام الفاعل المرفوع وصوره المختلفة',
    subtitleEn: 'Master verb types, explicit and implicit agents, and case markers.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-2',
    prerequisiteTitleAr: 'المحاضرة 2: الجملة الاسمية وركناها الأساسيان: المبتدأ والخبر',
    prerequisiteTitleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',
    keyConceptsAr: ['الجملة الفعلية تبدأ بفعل (ماضٍ أو مضارع أو أمر)', 'الفاعل: اسم مرفوع يدل على من قام بالفعل', 'صور الفاعل: اسم ظاهر أو ضمير متصل أو ضمير مستتر'],
    keyConceptsEn: ['Verbal Sentence Structure', 'Faail (Agent / Doer)', 'Explicit vs Implicit Pronoun Agents'],
    summaryAr: 'الجملة الفعلية تبدأ بفعل يعبر عن حدث، ولا بد لكل فعل من فاعل عاقل أو غير عاقل يحدثه؛ والفاعل دائماً مرفوع.',
    summaryEn: 'Verbal sentences center on actions requiring an explicit or implicit agent in nominative case.',
    sections: [
      {
        titleAr: '1. الفاعل وأشكاله',
        titleEn: '1. Agent Forms and Rules',
        contentAr: 'في جملة "حَفِظَ الطَّالِبُ القَصِيدَةَ"، الفعل هو "حَفِظَ" والفاعل هو "الطَّالِبُ" وهو اسم ظاهر مرفوع بالضمة.',
        contentEn: 'The agent identifies who executes the verbal action.',
        interactiveExample: {
          titleAr: 'تطبيق: استخراج الفاعل',
          titleEn: 'Worked Example: Locating the Agent',
          equation: 'مَن فعل الفعل؟ = الفاعل المرفوع',
          steps: [
            { stepNumber: 1, textAr: 'الجملة: "انْتَصَرَ الْحَقُّ".', textEn: 'Sentence: "Truth prevailed."' },
            { stepNumber: 2, textAr: 'نسأل: مَن الذي انتصر؟ الجواب: "الْحَقُّ".', textEn: 'Ask: Who prevailed? Answer: "Truth".' },
            { stepNumber: 3, textAr: 'إذن "الْحَقُّ" فاعل مرفوع وعلامة رفعه الضمة الظاهرة.', textEn: 'Thus "Truth" is the agent (Faail) nominative with Dammah.' }
          ],
          takeawayAr: 'الفاعل يقع دائماً بعد الفعل، ولا يتقدم عليه أبداً في الإعراب.',
          takeawayEn: 'In Arabic grammar syntax, the Faail strictly succeeds its governing verb.'
        },
        tipsAr: ['إذا تقدم الفاعل على الفعل تحولت الجملة من فعلية إلى اسمية.'],
        tipsEn: ['If the doer precedes the verb, the sentence reclassifies as nominal.']
      }
    ],
    assessment: {
      id: 'quiz-lang-3',
      lectureId: 'lang-3',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثالثة: الجملة الفعلية والفاعل',
      titleEn: 'Lecture 3 Assessment: Verbal Sentences',
      passingScore: 80,
      questions: [
        {
          id: 'qlg3-1',
          textAr: 'في جملة "كَتَبْتُ الدَّرْسَ"، ما هو الفاعل؟',
          textEn: 'In "I wrote the lesson", what serves as the agent?',
          optionsAr: ['التاء المتحركة (تاء الفاعل) ضمير متصل', 'الدَّرْسَ', 'ضمير مستتر تقديره هو', 'الفعل كَتَبَ'],
          optionsEn: ['The attached Taa pronoun', 'The lesson', 'Implicit pronoun (Huwa)', 'The verb itself'],
          correctIndex: 0,
          conceptTestedAr: 'الفاعل ضميراً متصلاً',
          conceptTestedEn: 'Attached Pronoun Agents',
          explanationAr: 'التاء في "كتبتُ" هي تاء الفاعل، وهي ضمير متصل مبني في محل رفع فاعل.',
          explanationEn: 'The attached Taa functions syntactically as the nominative pronoun agent.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'lang-4',
    order: 4,
    titleAr: 'المحاضرة 4: مهارات الفهم القرائي واستخراج الأفكار الرئيسة والإملاء',
    titleEn: 'Lecture 4: Reading Comprehension, Main Ideas & Orthography',
    subtitleAr: 'استراتيجيات استيعاب المقروء، والتمييز بين همزتي الوصل والقطع في الكتابة',
    subtitleEn: 'Master textual comprehension, thematic extraction, and Hamzah orthography.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-3',
    prerequisiteTitleAr: 'المحاضرة 3: الجملة الفعلية: الفعل والفاعل وعلامات الإعراب',
    prerequisiteTitleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',
    keyConceptsAr: ['تحديد الفكرة الرئيسة والأفكار الفرعية للنص', 'التمييز بين الحقيقة والرأي في النصوص', 'قاعدة همزة الوصل وهمزة القطع وطريقة فحصها بحرف الواو'],
    keyConceptsEn: ['Main vs Supporting Thematic Ideas', 'Fact vs Opinion Differentiation', 'Hamzat Al-Wasl vs Al-Qat Orthography'],
    summaryAr: 'نختتم مهارات اللغة بتنمية مهارات الفهم القرائي المتقدم وتطبيق القواعد الإملائية السليمة في التفريق بين همزتي الوصل والقطع.',
    summaryEn: 'Synthesize reading comprehension strategies with foundational Arabic orthography rules.',
    sections: [
      {
        titleAr: '1. قاعدة همزة الوصل والقطع السريعة',
        titleEn: '1. Hamzah Orthography Verification Test',
        contentAr: 'للتمييز السريع بين همزة الوصل (ا) وهمزة القطع (أ / إ): ضع حرف الواو قبل الكلمة وانطقها؛ إذا سقطت الهمزة في النطق فهي وصل (وانْطَلَقَ)، وإذا ثبتت فهي قطع (وأَكْرَمَ).',
        contentEn: 'Prefix the conjunction Waw: if the glottal stop drops in speech, it is Wasl; if preserved, it is Qat.',
        interactiveExample: {
          titleAr: 'تطبيق: اختبار الواو لهمزة الكلمة',
          titleEn: 'Worked Example: Waw Prefix Test',
          equation: 'حرف (و) + الكلمة المنطوقة',
          steps: [
            { stepNumber: 1, textAr: 'فحص "استغفار": نقول "وَاسْتَغْفَار" (الهمزة تسقط في النطق) -> همزة وصل تكتب (استغفار) دون رأس العين.', textEn: 'Test: "Wa-stighfar" drops glottal stop -> Wasl.' },
            { stepNumber: 2, textAr: 'فحص "إحسان": نقول "وَإِحْسَان" (الهمزة تنطق بوضوح) -> همزة قطع تكتب (إحسان).', textEn: 'Test: "Wa-Ihsan" glottal stop pronounced -> Qat.' }
          ],
          takeawayAr: 'اختبار حرف الواو يكشف لك نوع الهمزة في ثانية واحدة دون لبس.',
          takeawayEn: 'Prefixing Waw reliably reveals Hamzah classification instantaneously.'
        },
        tipsAr: ['جميع الأسماء همزتها قطع ما عدا عشرة أسماء مسموعة عن العرب (ابن، ابنة، اسم، امرؤ...).'],
        tipsEn: ['All Arabic nouns take Hamzat Qat except the documented 10 classical exceptions.']
      }
    ],
    assessment: {
      id: 'quiz-lang-4',
      lectureId: 'lang-4',
      titleAr: 'الاختبار الإلزامي للمحاضرة الرابعة: الفهم القرائي والإملاء',
      titleEn: 'Lecture 4 Assessment: Comprehension & Orthography',
      passingScore: 80,
      questions: [
        {
          id: 'qlg4-1',
          textAr: 'أي من الكلمات التالية كُتبت بهمزة وصل صحيحة؟',
          textEn: 'Which word features a correct Hamzat Wasl?',
          optionsAr: ['انْتِصَار', 'أَنْتِصَار', 'إِنْتِصَار', 'أَسْتَمِعُ'],
          optionsEn: ['Intisar (Victory)', 'Antisar', 'Intisar (with below Hamzah)', 'Astamio'],
          correctIndex: 0,
          conceptTestedAr: 'همزة الوصل في المصادر الخماسية',
          conceptTestedEn: 'Hamzat Wasl in Pentaconsonantal Nouns',
          explanationAr: '"انتصار" مصدر لفعل خماسي (انتصر)، وهمزته همزة وصل تسقط عند النطق بعد الواو: "وانْتصار".',
          explanationEn: 'Intisar is a 5-letter verbal noun taking Hamzat Wasl.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 5. MIDDLE SCHOOL GENERAL SCIENCE (العلوم العامة للمرحلة المتوسطة)
// ============================================================================
export const GENERAL_SCIENCE_LECTURES: Lecture[] = [
  {
    id: 'sci-1',
    order: 1,
    titleAr: 'المحاضرة 1: طبيعة المادة والذرات والعناصر والمركبات',
    titleEn: 'Lecture 1: Nature of Matter: Atoms, Elements & Compounds',
    subtitleAr: 'دراسة تركيب المادة وحالاتها الثلاث، ومكونات الذرة الأساسية (البروتونات والنيوترونات والإلكترونات)',
    subtitleEn: 'Explore states of matter, atomic particles, elements and chemical compounds.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    keyConceptsAr: ['المادة وكل ما له كتلة ويشغل حيزاً', 'حالات المادة الثلاث: الصلبة والسائلة والغازية', 'بنية الذرة: النواة (بروتونات ونيوترونات) وسحابة الإلكترونات', 'الفرق بين العنصر النقي والمركب الكيميائي'],
    keyConceptsEn: ['Definition of Matter', 'States of Matter', 'Atomic Structure: Protons, Neutrons, Electrons', 'Elements vs Compounds'],
    summaryAr: 'كل شيء يحيط بنا في هذا الكون هو مادة؛ نتعلم في هذا الدرس اللبنات الذرية المتناهية في الصغر التي تبني كل المواد الصلبة والسائلة والغازية من حولنا.',
    summaryEn: 'Discover the microscopic atomic constituents building our physical universe across all matter states.',
    sections: [
      {
        titleAr: '1. مم تتكون الذرة؟',
        titleEn: '1. What Makes Up an Atom?',
        contentAr: 'الذرة هي أصغر جزء من العنصر يحتفظ بخصائصه الكيميائية. تتكون من نواة مركزية ثقيلة تحتوي على بروتونات موجبة (+) ونيوترونات متعادلة (0)، وتدور حولها إلكترونات سالبة خفيفة (-).',
        contentEn: 'An atom comprises a heavy central nucleus of protons and neutrons orbited by negative electrons.',
        interactiveExample: {
          titleAr: 'تطبيق: شحنة الذرة المتعادلة',
          titleEn: 'Worked Example: Neutral Atomic Charge',
          equation: 'عدد البروتونات (+) = عدد الإلكترونات (-)',
          steps: [
            { stepNumber: 1, textAr: 'ذرة كربون تحتوي على 6 بروتونات موجبة داخل النواة (+6).', textEn: 'Carbon atom contains 6 positive protons (+6).' },
            { stepNumber: 2, textAr: 'يدور حول النواة 6 إلكترونات سالبة الشحنة (-6).', textEn: '6 negative electrons orbit the nucleus (-6).' },
            { stepNumber: 3, textAr: 'الشحنة الكلية الصافية = (+6) + (-6) = صفر (ذرة متعادلة كهربائياً).', textEn: 'Net electric charge = 0 (electrically neutral atom).' }
          ],
          takeawayAr: 'الذرة في حالتها الطبيعية تكون متعادلة الشحنة لأن عدد الشحنات الموجبة يساوي عدد الشحنات السالبة.',
          takeawayEn: 'Atoms remain electrically neutral when proton and electron counts balance.'
        },
        tipsAr: ['العدد الذري للعنصر يمثل عدد البروتونات داخل نواته دائماً.'],
        tipsEn: ['Atomic number strictly corresponds to the internal nuclear proton count.']
      }
    ],
    assessment: {
      id: 'quiz-sci-1',
      lectureId: 'sci-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: الذرة والمادة',
      titleEn: 'Lecture 1 Assessment: Matter & Atoms',
      passingScore: 80,
      questions: [
        {
          id: 'qsc1-1',
          textAr: 'ما هي الجسيمات سالبة الشحنة التي تدور حول نواة الذرة؟',
          textEn: 'Which negatively charged particles orbit the atomic nucleus?',
          optionsAr: ['الإلكترونات', 'البروتونات', 'النيوترونات', 'الجزيئات'],
          optionsEn: ['Electrons', 'Protons', 'Neutrons', 'Molecules'],
          correctIndex: 0,
          conceptTestedAr: 'بنية الذرة وجسيماتها',
          conceptTestedEn: 'Atomic Particle Charges',
          explanationAr: 'الإلكترونات هي جسيمات سالبة الشحنة تدور في مستويات طاقة حول نواة الذرة.',
          explanationEn: 'Electrons are the negative particles orbiting the atomic nucleus.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-2',
    order: 2,
    titleAr: 'المحاضرة 2: الخلية الحية: اللبنة الأساسية لبناء الكائنات الحية',
    titleEn: 'Lecture 2: The Living Cell: Fundamental Building Block of Life',
    subtitleAr: 'المقارنة بين الخلية النباتية والحيوانية، ووظائف العضيات الحيوية (النواة، الغشاء، الميتوكوندريا)',
    subtitleEn: 'Compare plant and animal cells, examining organelle functions.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-1',
    prerequisiteTitleAr: 'المحاضرة 1: طبيعة المادة والذرات والعناصر والمركبات',
    prerequisiteTitleEn: 'Lecture 1: Nature of Matter: Atoms, Elements & Compounds',
    keyConceptsAr: ['نظرية الخلية: الخلية وحدة التركيب والوظيفة في الكائنات الحية', 'النواة كمركز للتحكم بالخلية واحتواء المادة الوراثية', 'الميتوكوندريا مصنع الطاقة في الخلية', 'الفروق بين الخلية النباتية والحيوانية (الجدار الخلوي والبلاستيدات الخضراء)'],
    keyConceptsEn: ['Cell Theory', 'Nucleus Control Center', 'Mitochondria Powerhouse', 'Plant vs Animal Cell Distinctions'],
    summaryAr: 'الكائنات الحية جميعها، من أصغر بكتيريا إلى أضخم حوت، تتكون من خلايا حية تؤدي كافة وظائف الحياة والتنفس وإنتاج الطاقة.',
    summaryEn: 'Explore cellular architecture and compare photosynthetic plant cells with animal cells.',
    sections: [
      {
        titleAr: '1. المقارنة بين الخلية النباتية والحيوانية',
        titleEn: '1. Plant vs Animal Cell Comparison',
        contentAr: 'تتميز الخلية النباتية بوجود جدار خلوي صلب يعطيها شكلاً ثابتاً، وبلاستيدات خضراء تقوم بعملية البناء الضوئي لصنع الغذاء، وفجوة عصارية مركزية كبيرة.',
        contentEn: 'Plant cells uniquely possess a rigid cellulose wall, chloroplasts for photosynthesis, and a large vacuole.',
        interactiveExample: {
          titleAr: 'تطبيق: وظائف العضيات الخلوية',
          titleEn: 'Worked Example: Organelle Diagnostics',
          equation: 'البلاستيدات الخضراء + ضوء الشمس = سكر وغذاء (نبات فقط)',
          steps: [
            { stepNumber: 1, textAr: 'فحص عينة تحت المجهر: وجدنا جداراً خلوياً وبلاستيدات خضراء.', textEn: 'Microscopic inspection reveals rigid cell wall and green chloroplasts.' },
            { stepNumber: 2, textAr: 'الاستنتاج: هذه خلية نباتية قادرة على صنع غذائها بنفسها.', textEn: 'Conclusion: This is a plant cell capable of autotrophic photosynthesis.' }
          ],
          takeawayAr: 'الجدار الخلوي والبلاستيدات الخضراء ميزتان حاسمتان للخلية النباتية لا توجدان في الخلية الحيوانية.',
          takeawayEn: 'Cell walls and chloroplasts uniquely distinguish plant from animal cells.'
        },
        tipsAr: ['الميتوكوندريا توجد في كلا النوعين لأنها مسؤولة عن حرق الغذاء لتوليد الطاقة.'],
        tipsEn: ['Mitochondria populate both plant and animal cells for cellular respiration.']
      }
    ],
    assessment: {
      id: 'quiz-sci-2',
      lectureId: 'sci-2',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثانية: الخلية الحية',
      titleEn: 'Lecture 2 Assessment: Cell Biology',
      passingScore: 80,
      questions: [
        {
          id: 'qsc2-1',
          textAr: 'أي من التراكيب التالية يوجد في الخلية النباتية ولا يوجد في الخلية الحيوانية؟',
          textEn: 'Which organelle is found in plant cells but absent in animal cells?',
          optionsAr: ['الجدار الخلوي والبلاستيدات الخضراء', 'الغشاء البلازمي', 'النواة والمادة الوراثية', 'الميتوكوندريا'],
          optionsEn: ['Cell wall and chloroplasts', 'Plasma membrane', 'Nucleus', 'Mitochondria'],
          correctIndex: 0,
          conceptTestedAr: 'الفروق بين الخلية النباتية والحيوانية',
          conceptTestedEn: 'Plant Cell Specific Structures',
          explanationAr: 'الجدار الخلوي والبلاستيدات الخضراء توجد حصرياً في الخلايا النباتية لحمايتها وتمكينها من صنع الغذاء.',
          explanationEn: 'Cell walls and chloroplasts are exclusive to photosynthetic plant cells.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-3',
    order: 3,
    titleAr: 'المحاضرة 3: القوى والحركة: القوة المحصلة ومفهوم السرعة والتوازن',
    titleEn: 'Lecture 3: Forces & Motion: Net Force, Velocity & Equilibrium',
    subtitleAr: 'حساب السرعة المتوسطة، وفهم تأثير القوى المتزنة وغير المتزنة على حركة الأجسام',
    subtitleEn: 'Calculate average speed, evaluate balanced forces, and predict motion states.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-2',
    prerequisiteTitleAr: 'المحاضرة 2: الخلية الحية: اللبنة الأساسية لبناء الكائنات الحية',
    prerequisiteTitleEn: 'Lecture 2: The Living Cell: Fundamental Building Block of Life',
    keyConceptsAr: ['قانون السرعة المتوسطة: السرعة = المسافة ÷ الزمن', 'القوى المتزنة ومحصلتها الصفرية (سكون أو سرعة ثابتة)', 'القوى غير المتزنة وإحداث التسارع وتغيير الحركة', 'قوة الاحتكاك وأثرها في إبطاء الأجسام'],
    keyConceptsEn: ['Speed Formula: Distance / Time', 'Balanced Forces & Equilibrium', 'Unbalanced Forces Causing Acceleration', 'Friction Resistance'],
    summaryAr: 'الأجسام لا تغير حركتها من تلقاء نفسها؛ القوة هي المؤثر الذي يدفع أو يسحب الأجسام لتسريعها أو إبطائها أو تغيير اتجاهها.',
    summaryEn: 'Analyze how balanced and unbalanced forces alter the kinematics of objects in our everyday environment.',
    sections: [
      {
        titleAr: '1. حساب السرعة المتوسطة',
        titleEn: '1. Calculating Average Speed',
        contentAr: 'السرعة هي المسافة المقطوعة مقسومة على الزمن المستغرق لقطعها: ع = ف ÷ ز، ووحدتها القياسية هي متر لكل ثانية (م/ث).',
        contentEn: 'Average speed equals total path distance divided by elapsed travel time.',
        interactiveExample: {
          titleAr: 'تطبيق: حساب سرعة سيارة',
          titleEn: 'Worked Example: Vehicle Speed Computation',
          equation: 'السرعة = المسافة ÷ الزمن',
          steps: [
            { stepNumber: 1, textAr: 'قطعت سيارة مسافة 180 متراً خلال زمن قدره 6 ثوانٍ.', textEn: 'A car covers 180 meters in 6 seconds.' },
            { stepNumber: 2, textAr: 'طبق القانون: السرعة = 180 ÷ 6 = 30 م/ث.', textEn: 'Apply formula: Speed = 180 / 6 = 30 m/s.' }
          ],
          takeawayAr: 'لمعرفة السرعة، نقسم دائماً مقدار المسافة على مقدار الزمن.',
          takeawayEn: 'Dividing displacement distance by duration yields travel rate.'
        },
        tipsAr: ['تأكد دائماً من مطابقة وحدات القياس (الأمتار مع الثواني، والكيلومترات مع الساعات).'],
        tipsEn: ['Always verify unit consistency between distance and time dimensions.']
      }
    ],
    assessment: {
      id: 'quiz-sci-3',
      lectureId: 'sci-3',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثالثة: القوى والسرعة',
      titleEn: 'Lecture 3 Assessment: Forces and Speed',
      passingScore: 80,
      questions: [
        {
          id: 'qsc3-1',
          textAr: 'إذا قطعت دراجة مسافة 100 متر في 10 ثوانٍ، فما هي سرعتها المتوسطة؟',
          textEn: 'If a cyclist rides 100m in 10s, what is the average speed?',
          optionsAr: ['10 م/ث', '1000 م/ث', '90 م/ث', '5 م/ث'],
          optionsEn: ['10 m/s', '1000 m/s', '90 m/s', '5 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون السرعة',
          conceptTestedEn: 'Speed Calculation',
          explanationAr: 'السرعة = المسافة ÷ الزمن = 100 ÷ 10 = 10 م/ث.',
          explanationEn: 'Speed = 100m / 10s = 10 m/s.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'sci-4',
    order: 4,
    titleAr: 'المحاضرة 4: أشكال الطاقة وتحولاتها وقانون حفظ الطاقة الأساسي',
    titleEn: 'Lecture 4: Energy Forms, Conversions & Conservation Laws',
    subtitleAr: 'استكشاف الطاقة الحركية والكامنة، وتتبع سلاسل تحولات الطاقة في الحياة اليومية',
    subtitleEn: 'Investigate kinetic and potential energy forms and conservation chains.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'sci-3',
    prerequisiteTitleAr: 'المحاضرة 3: القوى والحركة: القوة المحصلة ومفهوم السرعة والتوازن',
    prerequisiteTitleEn: 'Lecture 3: Forces & Motion: Net Force, Velocity & Equilibrium',
    keyConceptsAr: ['تعريف الطاقة: القدرة على إحداث تغيير أو بذل شغل', 'الطاقة الحركية (طاقة الأجسام المتحركة)', 'طاقة الوضع الكامنة (طاقة مخزونة بفعل الارتفاع أو التوتر)', 'قانون حفظ الطاقة: الطاقة لا تفنى ولا تستحدث من العدم'],
    keyConceptsEn: ['Definition of Energy', 'Kinetic Energy of Motion', 'Gravitational Potential Energy', 'Conservation of Energy Principle'],
    summaryAr: 'الطاقة هي المحرك الأساسي لكل ما يحدث في الطبيعة؛ تنتقل وتتحول من صورة كيميائية وحركية وكهربائية دون أن تفقد ذرة واحدة من طاقتها الإجمالية.',
    summaryEn: 'Energy drives all physical phenomena, dynamically transforming between kinetic, thermal, electrical and potential reservoirs.',
    sections: [
      {
        titleAr: '1. تحولات الطاقة في الأجهزة اليومية',
        titleEn: '1. Energy Transformation Chains',
        contentAr: 'في المصباح الكهربائي: تتحول الطاقة الكهربائية إلى طاقة ضوئية وطاقة حرارية. وفي المروحة: تتحول الطاقة الكهربائية إلى طاقة حركية.',
        contentEn: 'Electrical devices channel energy across forms: lamps produce light and heat; fans produce kinetic airflow.',
        interactiveExample: {
          titleAr: 'تطبيق: تحول طاقة الوضع إلى طاقة حركة',
          titleEn: 'Worked Example: Potential to Kinetic Energy Shift',
          equation: 'طاقة وضع (في الأعلى) -> طاقة حركة (عند السقوط)',
          steps: [
            { stepNumber: 1, textAr: 'كرة مستقرة على حافة طاولة تمتلك طاقة وضع جاذبية كامنة.', textEn: 'A ball atop a table holds gravitational potential energy.' },
            { stepNumber: 2, textAr: 'عندما تسقط الكرة، تتحول طاقة الوضع تدريجياً إلى طاقة حركة سريعة.', textEn: 'During descent, potential energy transitions to kinetic motion.' }
          ],
          takeawayAr: 'مجموع طاقتي الحركة والوضع يظل ثابتاً في النظام وفق قانون حفظ الطاقة.',
          takeawayEn: 'Total mechanical energy remains conserved across transformation steps.'
        },
        tipsAr: ['الحرارة غالباً ما تكون صورة الطاقة المفقودة أو المهدورة في معظم تحولات الطاقة.'],
        tipsEn: ['Thermal dissipation represents the common waste byproduct in mechanical conversions.']
      }
    ],
    assessment: {
      id: 'quiz-sci-4',
      lectureId: 'sci-4',
      titleAr: 'الاختبار الإلزامي للمحاضرة الرابعة: تحولات الطاقة',
      titleEn: 'Lecture 4 Assessment: Energy Transformations',
      passingScore: 80,
      questions: [
        {
          id: 'qsc4-1',
          textAr: 'ما هو تحول الطاقة الأساسي الذي يحدث في المروحة الكهربائية؟',
          textEn: 'What is the primary energy transformation in an electric fan?',
          optionsAr: ['من طاقة كهربائية إلى طاقة حركية', 'من طاقة كيميائية إلى طاقة نووية', 'من طاقة صوتية إلى طاقة ضوئية', 'من طاقة وضع إلى طاقة كيميائية'],
          optionsEn: ['Electrical to kinetic energy', 'Chemical to nuclear energy', 'Sound to light energy', 'Potential to chemical energy'],
          correctIndex: 0,
          conceptTestedAr: 'تحولات الطاقة في الأجهزة',
          conceptTestedEn: 'Device Energy Conversion',
          explanationAr: 'تستهلك المروحة الطاقة الكهربائية من المقبس لتحريك ريشها وتحويلها إلى طاقة حركية.',
          explanationEn: 'The fan converts electrical input into mechanical kinetic rotation.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

// Master subject curriculum registry
export const SUBJECT_CURRICULA: Record<Subject, Lecture[]> = {
  PRIMARY_MATH: PRIMARY_MATH_LECTURES,
  PRIMARY_ARABIC: PRIMARY_ARABIC_FULL,
  PRIMARY_SCIENCE: PRIMARY_SCIENCE_LECTURES,
  ISLAMIC_STUDIES: ISLAMIC_STUDIES_FULL,
  MATH: MATH_LECTURES,
  PHYSICS: PHYSICS_LECTURES,
  CHEMISTRY: CHEMISTRY_LECTURES,
  BIOLOGY: BIOLOGY_LECTURES,
  COMPUTER_SCIENCE: COMPUTER_SCIENCE_LECTURES,
  ARABIC_LIT: ARABIC_LIT_LECTURES,
  ARABIC_LANG: ARABIC_LANG_LECTURES,
  GENERAL_SCIENCE: GENERAL_SCIENCE_LECTURES
};

export function getCurriculumForSubject(subject: Subject): Lecture[] {
  return SUBJECT_CURRICULA[subject] || MATH_LECTURES;
}

export function loadSubjectLectures(subject: Subject): Lecture[] {
  const masterCurriculum = getCurriculumForSubject(subject);
  const storageKey = `TEACHER_AI_LECTURES_${subject}`;
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as Lecture[];
      if (Array.isArray(parsed)) {
        return masterCurriculum.map((freshLec) => {
          const found = parsed.find((p) => p.id === freshLec.id);
          if (found) {
            return {
              ...freshLec,
              isLocked: found.isLocked,
              isCompleted: found.isCompleted,
              lastAttempt: found.lastAttempt
            };
          }
          return freshLec;
        });
      }
    } catch (e) {
      console.error(e);
    }
  }
  return masterCurriculum;
}

export function saveSubjectLectures(subject: Subject, lectures: Lecture[]): void {
  const storageKey = `TEACHER_AI_LECTURES_${subject}`;
  localStorage.setItem(storageKey, JSON.stringify(lectures));
}

export const INITIAL_LECTURES = MATH_LECTURES;

export const INITIAL_STUDENT_PROFILE: StudentProfile = {
  id: 'std-1001',
  name: 'عمر التميمي',
  nameAr: 'عمر التميمي',
  nameEn: 'Omar Al-Tamimi',
  age: 16,
  dateOfBirth: '2010-04-15',
  country: 'SA',
  specialization: 'STEM',
  subject: 'PHYSICS',
  gradeLevel: 'G12',
  language: 'ar',
  parentEmail: 'parent.altamimi@example.com',
  isParentVerified: true,
  timeLimitMinutes: 60,
  usedTodayMinutes: 18,
  masteryPoints: 450
};

