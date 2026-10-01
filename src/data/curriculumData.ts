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
        diagram: {
          id: 'diag-math1-continuity',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'اختبارات اتصال الدوال وأنواع نقاط عدم الاتصال',
          titleEn: 'Function Continuity Tests & Discontinuity Classification',
          captionAr: 'يوضح الرسم البياني الفروق الجوهرية بين عدم الاتصال القابل للإزالة (فجوة نقطية)، وعدم الاتصال القفزي (اختلاف النهايتين اليمنى واليسرى)، وعدم الاتصال اللانهائي (خط التقارب الرأسي).',
          captionEn: 'The visual chart illustrates point/removable discontinuity (hole), jump discontinuity (differing one-sided limits), and infinite vertical asymptotic behavior.',
          diagramType: 'discontinuity_graph',
          takeawayFormulaAr: 'lim_{x → c} f(x) = f(c)',
          takeawayFormulaEn: 'lim_{x → c} f(x) = f(c)',
          keyLabels: [
            { tagAr: 'عدم اتصال نقطي (فجوة)', tagEn: 'Removable Hole', descAr: 'النهاية موجودة لكن النقطة غير معرفة', descEn: 'Limit exists but point undefined' },
            { tagAr: 'عدم اتصال قفزي', tagEn: 'Jump Discontinuity', descAr: 'النهاية اليمنى تختلف عن اليسرى', descEn: 'Left and right limits differ' },
            { tagAr: 'خط تقارب رأسي', tagEn: 'Vertical Asymptote', descAr: 'الدالة تقترب من اللانهاية', descEn: 'Function approaches infinity' }
          ]
        },
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
        diagram: {
          id: 'diag-math2-unitcircle',
          figureNumberAr: 'شكل (2-1)',
          figureNumberEn: 'Figure (2-1)',
          titleAr: 'دائرة الوحدة والنسب المثلثية وتحليل المتجهات',
          titleEn: 'Unit Circle Trigonometry & Vector Resolution',
          captionAr: 'تحدد دائرة الوحدة إحداثيات أي نقطة بـ (cos θ, sin θ)، مما يتيح تحليل أي متجه إلى مركبتين متعامدتين أفقية ورأسية وحساب الزاوية والضرب الداخلي.',
          captionEn: 'The unit circle coordinates (cos θ, sin θ) provide the mathematical basis for orthogonal vector decomposition and directional dot product.',
          diagramType: 'unit_circle_trig',
          takeawayFormulaAr: 'u · v = |u| |v| cos(θ) | sin²θ + cos²θ = 1',
          takeawayFormulaEn: 'u · v = |u| |v| cos(θ) | sin²θ + cos²θ = 1',
          keyLabels: [
            { tagAr: 'متجه الموضع (cos θ, sin θ)', tagEn: 'Position Vector', descAr: 'إحداثيات النقطة على محيط دائرة الوحدة', descEn: 'Coordinates on unit circle perimeter' },
            { tagAr: 'المركبة الأفقية (cos θ)', tagEn: 'Horizontal Component', descAr: 'المسقط الأفقي على محور x', descEn: 'Projection on x-axis' },
            { tagAr: 'المركبة الرأسية (sin θ)', tagEn: 'Vertical Component', descAr: 'المسقط الرأسي على محور y', descEn: 'Projection on y-axis' }
          ]
        },
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
        diagram: {
          id: 'diag-math3-tangent',
          figureNumberAr: 'شكل (3-1)',
          figureNumberEn: 'Figure (3-1)',
          titleAr: 'ميل مماس المنحنى والمشتقة الأولى كمعامل حدّي',
          titleEn: 'Tangent Slope & First Derivative as Limit of Secant Slopes',
          captionAr: 'يمثل خط المماس باللون الأزرق الميل اللحظي للمنحنى f(x) عند نقطة التماس (x₀, y₀)، حيث يقترب ميل القاطع Δy/Δx من قيمة المشتقة f\'(x₀) عندما تقترب Δx من الصفر.',
          captionEn: 'The tangent line (blue) illustrates the instantaneous rate of change at point (x₀, y₀), where secant slope Δy/Δx converges to derivative f\'(x₀) as Δx → 0.',
          diagramType: 'derivative_slope',
          takeawayFormulaAr: "f'(x) = lim_{Δx → 0} [f(x + Δx) - f(x)] / Δx",
          takeawayFormulaEn: "f'(x) = lim_{Δx → 0} [f(x + Δx) - f(x)] / Δx",
          keyLabels: [
            { tagAr: 'خط المماس (Tangent)', tagEn: 'Tangent Line', descAr: 'المستقيم الذي يمس المنحنى عند نقطة التماس', descEn: 'Line touching the curve at the point of tangency' },
            { tagAr: 'نقطة التماس (x₀, y₀)', tagEn: 'Point of Tangency', descAr: 'نقطة التماس المحددة للمنحنى', descEn: 'Coordinates where derivative is evaluated' },
            { tagAr: 'المشتقة f\'(x₀)', tagEn: "Derivative f'(x₀)", descAr: 'ميل خط المماس المحسوب بالقواعد', descEn: 'Exact slope value derived analytically' }
          ]
        },
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
        diagram: {
          id: 'diag-math4-integral',
          figureNumberAr: 'شكل (4-1)',
          figureNumberEn: 'Figure (4-1)',
          titleAr: 'المساحة تحت المنحنى والتكامل المحدد كعتبة لمجاميع ريمان',
          titleEn: 'Area Under Curve & Definite Integral as Riemann Limit',
          captionAr: 'توضح المنطقة المظللة بالأزرق التكامل المحدود ∫_a^b f(x) dx؛ وهو يمثل المساحة الهندسية التراكمية المحصورة بين منحنى الدالة ومحور السينات على الفترة [a, b] عبر تقسيمها لشرائح بعرض dx.',
          captionEn: 'The shaded region demonstrates the definite integral ∫_a^b f(x) dx, representing the exact geometric area under f(x) over [a, b] as strip width dx → 0.',
          diagramType: 'calculus_integral',
          takeawayFormulaAr: 'A = ∫_a^b f(x) dx = F(b) - F(a)',
          takeawayFormulaEn: 'A = ∫_a^b f(x) dx = F(b) - F(a)',
          keyLabels: [
            { tagAr: 'منحنى الدالة f(x)', tagEn: 'Function Curve f(x)', descAr: 'الدالة المراد مكاملتها', descEn: 'Integrand function curve' },
            { tagAr: 'حدود التكامل [a, b]', tagEn: 'Integration Bounds [a, b]', descAr: 'فترة التكامل على محور السينات', descEn: 'Interval along x-axis' },
            { tagAr: 'شريحة ريمان dx', tagEn: 'Riemann Strip dx', descAr: 'عرض الشريحة التفاضلية', descEn: 'Differential width element' }
          ]
        },
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
  },
  {
    id: 'math-5',
    order: 5,
    titleAr: 'المحاضرة 5: تطبيقات التكامل في حساب المساحات والحجوم وقوانين الحركة',
    titleEn: 'Lecture 5: Integration Applications in Area, Volume of Revolution & Kinematics',
    subtitleAr: 'حساب المساحة المحصورة بين منحنيين، وحجوم الأجسام الدورانية وتطبيقات الحركة في الفيزياء',
    subtitleEn: 'Calculate bounded areas between curves, solid of revolution volumes, and physical motion integrals.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'math-4',
    prerequisiteTitleAr: 'المحاضرة 4: حساب التفاضل والتكامل والتكامل المحدد',
    prerequisiteTitleEn: 'Lecture 4: Calculus, Definite Integrals & Fundamental Theorem',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'الوحدة الخامسة: التطبيقات الهندسية والفيزيائية للتكامل',
    unitTitleEn: 'Unit 5: Engineering & Physical Applications of Integration',
    lessonNumberAr: 'الدرس 5: المساحات والحجوم الدورانية',
    lessonNumberEn: 'Lesson 5: Areas & Volumes of Revolution',

    // Real-world hook
    warmupHookAr: 'عند تصميم أجنحة الطائرات النفاثة، أو خزانات الوقود المنحنية في محركات الصواريخ الفضائية؛ كيف يحسب المهندسون الحجم الداخلي والمساحة السطحية الدقيقة لهيكل غير منتظم؟ الإجابة تكمن في تدوير المنحنيات الرياضية حول محور معين وتطبيق تكامل الحجوم الدورانية!',
    warmupHookEn: 'From aerodynamic jet wings to rocket fuel tanks, engineers compute precision volumes of irregular 3D solids by rotating 2D curves around axes using integral calculus!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يحسب الطالب المساحة المحصورة بين منحنيي دالتين: A = ∫ [f(x) - g(x)] dx بدقة',
      'أن يطبق طريقة الأقراص الدائرية لحساب حجم الجسم الدوراني حول محور x: V = π ∫ [f(x)]² dx',
      'أن يربط بين السرعة المتجهة والإزاحة والتسارع باستخدام التكامل المحدد في مسائل الحركة',
      'أن يتحقق من إيجابية المساحة الهندسية وتحديد نقاط تقاطع المنحنيات جبرياً'
    ],
    learningOutcomesEn: [
      'Compute bounded area between curves: A = ∫ [f(x) - g(x)] dx',
      'Apply disk method for volume of revolution around x-axis: V = π ∫ [f(x)]² dx',
      'Integrate acceleration and velocity to obtain displacement in kinematic applications',
      'Determine curve intersection points and confirm positive geometric metrics'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'المساحة بين منحنيين (Area Between Curves)',
        termEn: 'Area Between Curves',
        definitionAr: 'التكامل المحدد لحاصل طرح الدالة السفلى من الدالة العليا عبر فترة التقاطع [a, b].',
        definitionEn: 'Definite integral of (top curve minus bottom curve) over boundary intervals.'
      },
      {
        termAr: 'الجسم الدوراني (Solid of Revolution)',
        termEn: 'Solid of Revolution',
        definitionAr: 'مجسم ثلاثي الأبعاد يتولد من دوران منطقة مستوية محصورة حول مستقيم ثابت يسمى محور الدوران.',
        definitionEn: 'A 3D solid generated by revolving a bounded 2D planar region around an axis.'
      },
      {
        termAr: 'طريقة الأقراص (Disk Method)',
        termEn: 'Disk Method',
        definitionAr: 'طريقة لحساب حجم الجسم الدوراني بجمع حجوم أقراص أسطوانية دائرية متناهية في الصغر نصف قطر كل منها r = f(x).',
        definitionEn: 'A calculus technique calculating volume by integrating infinitely thin circular cross-sectional disks.'
      }
    ],

    keyConceptsAr: ['المساحة بين منحنيين: A = ∫_a^b [f(x) - g(x)] dx', 'الحجوم الدورانية: V = π ∫_a^b [f(x)]² dx', 'مسائل الحركة الفيزيائية: s(t) = ∫ v(t) dt', 'تحديد فترات التكامل عبر نقاط التقاطع'],
    keyConceptsEn: ['Area Between Curves', 'Disk Method Volume', 'Kinematics Integration', 'Boundary Intersections'],
    summaryAr: 'المحطة التطبيقية المتقدمة للتكامل؛ نستخدم التكامل المحدد لحساب المساحات المحصورة وحجوم المجسمات الهندسية الدورانية ونمذجة حركة الأجسام في الفيزياء التطبيقية.',
    summaryEn: 'Applying definite integration to geometric area computation, 3D solids of revolution, and kinematic trajectory modeling.',
    sections: [
      {
        titleAr: '1. حساب المساحة بين منحنيين',
        titleEn: '1. Bounded Area Computation',
        contentAr: 'إذا كانت f(x) ≥ g(x) على الفترة [a, b]، فإن المساحة A المحصورة بينهما تعطى بالتكامل: A = ∫_a^b [f(x) - g(x)] dx. لإيجاد حدود التكامل a و b، نساوي الدالتين f(x) = g(x) لحل المعادلة وتحديد نقاط التقاطع.',
        contentEn: 'If f(x) ≥ g(x) on [a, b], area A = ∫_a^b [f(x) - g(x)] dx. Boundaries are found by solving f(x) = g(x).',
        diagram: {
          id: 'diag-math5-revolution',
          figureNumberAr: 'شكل (5-1)',
          figureNumberEn: 'Figure (5-1)',
          titleAr: 'المجسمات الدورانية وحساب الحجوم بطريقة الأقراص الدائرية',
          titleEn: 'Solids of Revolution & Disk Integration Method',
          captionAr: 'عند تدوير منحنى الدالة y = f(x) حول محور السينات دورة كاملة 360 درجة، يتولد مجسم دوراني يُحسب حجمه الكلي بتجميع شرائح أسطوانية تفاضلية نصف قطرها r = f(x) وسمكها dx.',
          captionEn: 'Revolving curve y = f(x) by 360° around x-axis creates a solid whose total volume is computed by integrating infinitesimal cylindrical disks with radius r = f(x) and thickness dx.',
          diagramType: 'solid_revolution',
          takeawayFormulaAr: 'V = π ∫_a^b [f(x)]² dx',
          takeawayFormulaEn: 'V = π ∫_a^b [f(x)]² dx',
          keyLabels: [
            { tagAr: 'منحنى الدالة المولدة f(x)', tagEn: 'Generating Curve', descAr: 'المنحنى الذي يحدد سطح المجسم الدوراني', descEn: 'Boundary curve defining the 3D surface' },
            { tagAr: 'نصف قطر القرص r = f(x)', tagEn: 'Disk Radius', descAr: 'المسافة من محور الدوران إلى المنحنى', descEn: 'Distance from revolution axis to curve' },
            { tagAr: 'سمك الشريحة الأسطوانية dx', tagEn: 'Disk Thickness dx', descAr: 'الارتفاع التفاضلي للقرص الأسطواني', descEn: 'Differential height of cylinder' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: مساحة المنطقة بين f(x) = x و g(x) = x²',
          titleEn: 'Worked Example: Area between y = x and y = x²',
          equation: 'f(x) = x,  g(x) = x²',
          steps: [
            { stepNumber: 1, textAr: 'إيجاد نقاط التقاطع: x = x²  -->  x² - x = 0  -->  x(x - 1) = 0، إذن حدود التكامل هي a = 0 و b = 1.', textEn: 'Find intersections: x = 0 and x = 1.' },
            { stepNumber: 2, textAr: 'في الفترة [0, 1]، نجد أن f(x) = x أعلى من g(x) = x².', textEn: 'On [0, 1], top curve is x and bottom is x².' },
            { stepNumber: 3, textAr: 'كتابة التكامل: A = ∫_0^1 (x - x²) dx = [ x²/2 - x³/3 ]_0^1.', textEn: 'Integrate: [ x²/2 - x³/3 ] from 0 to 1.' },
            { stepNumber: 4, textAr: 'التعويض: (1/2 - 1/3) - 0 = 3/6 - 2/6 = 1/6 وحدة مربعة.', textEn: 'Evaluate: 1/2 - 1/3 = 1/6 square units.' }
          ],
          takeawayAr: 'المساحة دائماً قيمة موجبة حقيقية، وطرح المنحنى الأدنى من الأعلى يضمن صحة الإشارة.',
          takeawayEn: 'Geometric area is strictly positive; always subtract bottom function from top.'
        },
        formativeCheck: {
          id: 'fc-math5-1',
          questionAr: 'ما هي مساحة المنطقة المحصورة بين منحنى f(x) = 3x² ومحور السينات في الفترة من x = 0 إلى x = 2؟',
          questionEn: 'What is the area under f(x) = 3x² from x = 0 to x = 2?',
          optionsAr: ['8 وحدات مربعة', '12 وحدة مربعة', '6 وحدات مربعة', '16 وحدة مربعة'],
          optionsEn: ['8 square units', '12 square units', '6 square units', '16 square units'],
          correctIndex: 0,
          explanationAr: 'A = ∫_0^2 3x² dx = [ x³ ]_0^2 = 2³ - 0 = 8 وحدات مربعة.',
          explanationEn: '∫_0^2 3x² dx = [x³]_0^2 = 8 - 0 = 8.',
          hintAr: 'تكامل 3x² هو x³.',
          hintEn: 'Integral of 3x² is x³.'
        },
        tipsAr: ['ارسم مخططاً تقريبياً للمنحنيين لتحديد المنحنى الأعلى وفترات التقاطع بدقة.'],
        tipsEn: ['Sketching curves helps confirm top vs bottom functions.']
      }
    ],
    conceptMapAr: [
      'المساحة بين منحنيين: A = ∫_a^b (العلوي - السفلي) dx',
      'حجم القرص الدوراني: V = π ∫_a^b [f(x)]² dx',
      'قوانين الحركة بالتكامل: السرعة v(t) = ∫ a(t) dt، والموقع s(t) = ∫ v(t) dt',
      'التحقق الهندسي: المساحات والحجوم دائماً كميات موجبة'
    ],
    conceptMapEn: [
      'Area: A = ∫ (Top - Bottom) dx',
      'Disk Volume: V = π ∫ [f(x)]² dx',
      'Kinematics: v(t) = ∫ a(t) dt, s(t) = ∫ v(t) dt',
      'Positivity of geometric measures'
    ],
    textbookExercises: [
      {
        id: 'ex-math5-1',
        questionAr: 'أوجد حجم الجسم الدوراني المتولد من دوران المنطقة المحصورة بين y = √x ومحور x في الفترة [0, 4] حول محور السينات.',
        questionEn: 'Find volume of solid revolving y = √x on [0, 4] around x-axis.',
        solutionStepsAr: [
          'تطبيق قانون الأقراص: V = π ∫_0^4 (√x)² dx',
          'تبسيط المقدار داخل التكامل: (√x)² = x',
          'إجراء التكامل: V = π ∫_0^4 x dx = π [ x²/2 ]_0^4',
          'التعويض: π (4²/2 - 0) = π (16/2) = 8π وحدة مكعبة'
        ],
        solutionStepsEn: [
          'Disk formula: V = π ∫_0^4 (√x)² dx',
          'Simplify: (√x)² = x',
          'Integrate: π [ x²/2 ]_0^4',
          'Evaluate: π (16/2) = 8π cubic units'
        ],
        answerAr: 'حجم الجسم الدوراني = 8π وحدة مكعبة (≈ 25.13).',
        answerEn: 'Volume = 8π cubic units.'
      }
    ],
    assessment: {
      id: 'quiz-math-5',
      lectureId: 'math-5',
      titleAr: 'الاختبار الإلزامي: تطبيقات التكامل وحساب الحجوم',
      titleEn: 'Lecture 5 Assessment: Integration Applications',
      passingScore: 80,
      questions: [
        {
          id: 'qm5-1',
          textAr: 'ما هو حجم المجسم المتولد من دوران الدالة الثابتة f(x) = 2 على الفترة [0, 3] حول محور x؟',
          textEn: 'What is volume revolving f(x) = 2 on [0, 3] around x-axis?',
          optionsAr: ['12π', '6π', '18π', '24π'],
          optionsEn: ['12π', '6π', '18π', '24π'],
          correctIndex: 0,
          conceptTestedAr: 'حساب حجوم الأجسام الدورانية',
          conceptTestedEn: 'Volume of Revolution (Disk Method)',
          explanationAr: 'V = π ∫_0^3 (2)² dx = π ∫_0^3 4 dx = π [4x]_0^3 = π (12 - 0) = 12π (وهو حجم أسطوانة نصف قطرها 2 وارتفاعها 3).',
          explanationEn: 'V = π ∫_0^3 4 dx = 12π.',
          difficulty: 'easy'
        },
        {
          id: 'qm5-2',
          textAr: 'جسم يتحرك في خط مستقيم بتسارع ثابت a(t) = 4 m/s² وسرعته الابتدائية v(0) = 3 m/s. ما سرعته v(t) عند t = 5 ثوانٍ؟',
          textEn: 'Object with a(t) = 4 and v(0) = 3. What is v(5)?',
          optionsAr: ['23 m/s', '20 m/s', '35 m/s', '17 m/s'],
          optionsEn: ['23 m/s', '20 m/s', '35 m/s', '17 m/s'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق التكامل في مسائل الحركة والسرعة',
          conceptTestedEn: 'Kinematics Velocity Integration',
          explanationAr: 'v(t) = ∫ 4 dt = 4t + C. بما أن v(0) = 3 فإن C = 3. إذن v(5) = 4(5) + 3 = 20 + 3 = 23 m/s.',
          explanationEn: 'v(t) = 4t + 3, so v(5) = 20 + 3 = 23 m/s.',
          difficulty: 'medium'
        },
        {
          id: 'qm5-3',
          textAr: 'ما هي المساحة المحصورة بين المنحنى y = 4 - x² ومحور السينات (بين x = -2 و x = 2)؟',
          textEn: 'What is area under y = 4 - x² between x = -2 and x = 2?',
          optionsAr: ['32/3 وحدة مربعة (≈ 10.67)', '16 وحدة مربعة', '8 وحدات مربعة', '64/3 وحدة مربعة'],
          optionsEn: ['32/3 square units', '16 square units', '8 square units', '64/3 square units'],
          correctIndex: 0,
          conceptTestedAr: 'تكامل الدوال التربيعية وحساب المساحة',
          conceptTestedEn: 'Parabolic Bounded Area Calculation',
          explanationAr: 'A = ∫_{-2}^2 (4 - x²) dx = [ 4x - x³/3 ]_{-2}^2 = (8 - 8/3) - (-8 + 8/3) = 16/3 - (-16/3) = 32/3 وحدة مربعة.',
          explanationEn: '∫_{-2}^2 (4 - x²) dx = [4x - x³/3]_{-2}^2 = 32/3.',
          difficulty: 'hard'
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
        diagram: {
          id: 'diag-phys1-efield',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'خطوط المجال الكهربائي الثنائي بين شحنتين نقطيتين (+q و -q)',
          titleEn: 'Electric Field Lines of an Electric Dipole (+q and -q)',
          captionAr: 'تخرج خطوط المجال الكهربائي عمودياً من الشحنة الموجبة (+q) وتتجه نحو الشحنة السالبة (-q). تعبر كثافة الخطوط في أي منطقة عن شدة المجال الكهربائي E في تلك النقطة.',
          captionEn: 'Electric field lines emanate radially outward from positive charge (+q) and terminate on negative charge (-q). Line density reflects local field intensity E.',
          diagramType: 'electric_field',
          takeawayFormulaAr: 'E = k · |q| / r²',
          takeawayFormulaEn: 'E = k · |q| / r²',
          keyLabels: [
            { tagAr: 'الشحنة الموجبة (+q)', tagEn: 'Positive Charge (+q)', descAr: 'مصدر خطوط المجال الخارجة', descEn: 'Source of outgoing electric field lines' },
            { tagAr: 'الشحنة السالبة (-q)', tagEn: 'Negative Charge (-q)', descAr: 'مصب خطوط المجال الداخلة', descEn: 'Sink for incoming field lines' },
            { tagAr: 'متجه شدة المجال (E)', tagEn: 'Electric Field Vector (E)', descAr: 'المماس لخط المجال عند أي نقطة', descEn: 'Tangent to field line at any point' }
          ]
        },
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
        diagram: {
          id: 'diag-phys2-capacitor',
          figureNumberAr: 'شكل (2-1)',
          figureNumberEn: 'Figure (2-1)',
          titleAr: 'تركيب المكثف ذي اللوحين المتوازيين وتأثير المادة العازلة',
          titleEn: 'Parallel Plate Capacitor & Dielectric Slab',
          captionAr: 'يتكون المكثف من لوحين موصلين متوازيين تفصل بينهما مسافة d ومادة عازلة بثابت κ. يؤدي وضع المادة العازلة إلى مضاعفة السعة الكهربائية C = κ·ε₀·A/d وتقليل شدة المجال الكهربائي بين اللوحين.',
          captionEn: 'The parallel plate capacitor separates charge ±Q across distance d. Inserting dielectric κ increases capacitance C = κ·ε₀·A/d while reducing interior electric field.',
          diagramType: 'circuit',
          takeawayFormulaAr: 'C = κ · ε₀ · A / d',
          takeawayFormulaEn: 'C = κ · ε₀ · A / d',
          keyLabels: [
            { tagAr: 'اللوح الموجب (+Q)', tagEn: 'Positive Plate (+Q)', descAr: 'يحمل الشحنة الموجبة وفرق جهد أعلى', descEn: 'Carries positive charge +Q' },
            { tagAr: 'اللوح السالب (-Q)', tagEn: 'Negative Plate (-Q)', descAr: 'يحمل الشحنة السالبة وفرق جهد أقل', descEn: 'Carries negative charge -Q' },
            { tagAr: 'المادة العازلة (κ)', tagEn: 'Dielectric Slab (κ)', descAr: 'تزيد من سعة تخزين الشحنات', descEn: 'Dielectric medium augmenting capacitance' }
          ]
        },
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
        diagram: {
          id: 'diag-phys3-lorentz',
          figureNumberAr: 'شكل (3-1)',
          figureNumberEn: 'Figure (3-1)',
          titleAr: 'القوة المغناطيسية المؤثرة في شحنة وقاعدة اليد اليمنى',
          titleEn: 'Magnetic Force (Lorentz Force) & Right-Hand Rule in 3D',
          captionAr: 'عند حركة شحنة موجبة بسرعة v داخل مجال مغناطيسي B، تتأثر بقوة مغناطيسية F_B = q(v × B) تكون عمودية تماماً على المستوي الذي يضم متجهي السرعة والمجال وفق قاعدة اليد اليمنى.',
          captionEn: 'A positive charge moving with velocity v in magnetic field B experiences perpendicular force F_B = q(v × B) governed by the right-hand rule orthogonal cross product.',
          diagramType: 'vector_3d',
          takeawayFormulaAr: 'F_B = q · v · B · sin(θ)',
          takeawayFormulaEn: 'F_B = q · v · B · sin(θ)',
          keyLabels: [
            { tagAr: 'متجه السرعة (v)', tagEn: 'Velocity Vector (v)', descAr: 'اتجاه حركة الشحنة (الإبهام)', descEn: 'Thumb points along velocity vector' },
            { tagAr: 'المجال المغناطيسي (B)', tagEn: 'Magnetic Field (B)', descAr: 'اتجاه خطوط المجال (السبابة)', descEn: 'Fingers align with magnetic field' },
            { tagAr: 'القوة المغناطيسية (F_B)', tagEn: 'Magnetic Force (F_B)', descAr: 'القوة العمودية الصادرة من راحة اليد', descEn: 'Force normal to palm for positive charge' }
          ]
        },
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
        diagram: {
          id: 'diag-phys4-carnot',
          figureNumberAr: 'شكل (4-1)',
          figureNumberEn: 'Figure (4-1)',
          titleAr: 'مخطط الضغط والحجم (P-V) لدورة كارنو الحرارية الانعكاسية',
          titleEn: 'Pressure-Volume (P-V) Diagram of the Ideal Carnot Thermodynamic Cycle',
          captionAr: 'يمثل المخطط المراحل الأربع لدورة كارنو: تمدد ثبوت حرارة (A→B)، تمدد كظومي (B→C)، انضغاط ثبوت حرارة (C→D)، وانضغاط كظومي (D→A). المساحة المغلقة داخل المنحنى تساوي الشغل الصافي W_net.',
          captionEn: 'Carnot cycle stages on P-V coordinates: isothermal expansion (A→B), adiabatic expansion (B→C), isothermal compression (C→D), and adiabatic compression (D→A). Enclosed area equals net work W_net.',
          diagramType: 'pv_carnot',
          takeawayFormulaAr: 'W_net = ∮ P dV = Q_H - Q_C | η = 1 - (T_C / T_H)',
          takeawayFormulaEn: 'W_net = ∮ P dV = Q_H - Q_C | η = 1 - (T_C / T_H)',
          keyLabels: [
            { tagAr: 'تمدد إيزوثيرمي (A→B)', tagEn: 'Isothermal Expansion (A→B)', descAr: 'امتصاص حرارة Q_H عند درجة حرارة ثابتة T_H', descEn: 'Heat intake Q_H at constant high temp T_H' },
            { tagAr: 'انضغاط إيزوثيرمي (C→D)', tagEn: 'Isothermal Compression (C→D)', descAr: 'طرد حرارة Q_C للمستودع البارد T_C', descEn: 'Heat expulsion Q_C to cold reservoir T_C' },
            { tagAr: 'الشغل الصافي (W_net)', tagEn: 'Net Work Area (W_net)', descAr: 'المساحة المحصورة داخل دورة P-V', descEn: 'Area enclosed by cyclic trajectory' }
          ]
        },
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
  },
  {
    id: 'phys-5',
    order: 5,
    titleAr: 'المحاضرة 5: الكهرومغناطيسية، قانون فاراداي، والحث وتوليد الطاقة',
    titleEn: 'Lecture 5: Electromagnetism, Faraday\'s Law & Electromagnetic Induction',
    subtitleAr: 'دراسة التدفق المغناطيسي، والقوة الدافعة الكهربائية الحثية (EMF)، وقانون لنز وتطبيقات المولدات والمحولات',
    subtitleEn: 'Master magnetic flux, induced electromotive force (EMF), Lenz\'s law, generators and transformers.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'phys-4',
    prerequisiteTitleAr: 'المحاضرة 4: الديناميكا الحرارية والأنظمة الفيزيائية المعقدة',
    prerequisiteTitleEn: 'Lecture 4: Thermodynamics & Complex Physical Systems',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester / Term 2',
    unitTitleAr: 'الوحدة الخامسة: الكهرومغناطيسية والحث وتوليد الطاقة',
    unitTitleEn: 'Unit 5: Electromagnetism, Induction & Power',
    lessonNumberAr: 'الدرس 5: الحث الكهرومغناطيسي وتطبيقاته',
    lessonNumberEn: 'Lesson 5: Electromagnetic Induction & Applications',

    // Real-world hook
    warmupHookAr: 'عندما تضع هاتفك الذكي على منصة الشحن اللاسلكي، أو تمر قطارات الرفع المغناطيسي (Maglev) بسرعات تفوق 500 كم/س دون أي احتكاك؛ كيف تنتقل الطاقة الكهربائية عبر الهواء دون سلك معدني ملموس؟ إنه سر "الحث الكهرومغناطيسي" الذي اكتشفه مايكل فاراداي، والذي يُعد عصب شبكات الكهرباء ومحطات التوليد في كوكب الأرض بأكمله!',
    warmupHookEn: 'From wireless phone charging pads to Maglev bullet trains gliding at 500 km/h without mechanical contact, power is transferred through space via electromagnetic induction. Discovered by Michael Faraday, this fundamental principle powers modern electrical grids worldwide!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يحسب الطالب التدفق المغناطيسي Φ = B · A · cos(θ) بدقة عبر مساحة محددة',
      'أن يطبق قانون فاراداي لحساب القوة الدافعة الكهربائية الحثية المتولدة: ε = -N · (ΔΦ / Δt)',
      'أن يحدد اتجاه التيار الحثي بدقة باستخدام قانون لنز وقاعدة اليد اليمنى',
      'أن يفسر المبدأ الفيزيائي لعمل المولد والمحول الكهربائي (الرافع والخافض للجهد)'
    ],
    learningOutcomesEn: [
      'Calculate magnetic flux Φ = B · A · cos(θ) across surfaces with precision',
      'Apply Faraday\'s law of induction: ε = -N · (ΔΦ / Δt)',
      'Determine direction of induced current using Lenz\'s law and right-hand rule',
      'Explain physical principles of electric generators and step-up/step-down transformers'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'التدفق المغناطيسي (Magnetic Flux - Φ)',
        termEn: 'Magnetic Flux (Φ)',
        definitionAr: 'عدد خطوط المجال المغناطيسي التي تخترق عمودياً مساحة سطح معينة، ويقاس بوحدة الويبر (Wb = T · m²).',
        definitionEn: 'The measure of total magnetic field lines passing perpendicular through a given surface area, measured in Webers (Wb).'
      },
      {
        termAr: 'الحث الكهرومغناطيسي (Electromagnetic Induction)',
        termEn: 'Electromagnetic Induction',
        definitionAr: 'ظاهرة توليد قوة دافعة كهربائية حثية (EMF) وتيار كهربائي في موصل نتيجة تغير التدفق المغناطيسي الذي يقطعه عبر الزمن.',
        definitionEn: 'The generation of an electromotive force (EMF) across an electrical conductor in a changing magnetic field.'
      },
      {
        termAr: 'قانون لنز (Lenz\'s Law)',
        termEn: 'Lenz\'s Law',
        definitionAr: 'يكون اتجاه التيار الحثي بحيث يولّد مجالاً مغناطيسياً يعاكس التغير في التدفق المغناطيسي المسبب له (إشارة السالب في قانون فاراداي).',
        definitionEn: 'The direction of an induced current is always such that its magnetic field opposes the change in flux that created it.'
      }
    ],

    keyConceptsAr: ['حساب التدفق المغناطيسي: Φ = B A cos(θ)', 'قانون فاراداي للحث: ε = -N (ΔΦ/Δt)', 'قانون لنز ومقاومة التغير', 'المحولات الكهربائية: Vs/Vp = Ns/Np'],
    keyConceptsEn: ['Magnetic Flux: Φ = B A cos(θ)', 'Faraday\'s Law of Induction: ε = -N (ΔΦ/Δt)', 'Lenz\'s Law & Polarity', 'Transformers: Vs/Vp = Ns/Np'],
    summaryAr: 'في هذه المحاضرة نتقن ركائز الكهرومغناطيسية؛ حيث يؤدي تغير المجال المغناطيسي إلى توليد فرق جهد كهربائي حثي يعاكس اتجاه التغير المسبب له وفق قانوني فاراداي ولنز.',
    summaryEn: 'In this lecture, students master electromagnetic induction: dynamic magnetic flux variations induce electromotive forces that drive modern power generation.',
    sections: [
      {
        titleAr: '1. التدفق المغناطيسي وقانون فاراداي للحث',
        titleEn: '1. Magnetic Flux & Faraday\'s Induction Law',
        contentAr: 'يعتمد التدفق المغناطيسي Φ على شدة المجال B، ومساحة السطح A، والزاوية θ بين خطوط المجال والعمودي على السطح: Φ = B · A · cos(θ). ينص قانون فاراداي على أن مقدار القوة الدافعة الحثية ε المتولدة في ملف عدد لفاته N يتناسب طردياً مع المعدل الزمني لتغير التدفق المغناطيسي: ε = -N · (ΔΦ / Δt).',
        contentEn: 'Magnetic flux Φ = B A cos(θ). Faraday\'s Law states that induced electromotive force ε in an N-turn coil is proportional to the time rate of flux change: ε = -N (ΔΦ/Δt).',
        diagram: {
          id: 'diag-phys5-faraday',
          figureNumberAr: 'شكل (5-1)',
          figureNumberEn: 'Figure (5-1)',
          titleAr: 'الحث الكهرومغناطيسي والمحول الكهربائي (نسبة الجهد وعدد اللفات)',
          titleEn: 'Electromagnetic Induction & Transformer Voltage-Turns Ratio',
          captionAr: 'ينقل المحول الكهربائي الطاقة عبر القلب الحديدي المغلق بواسطة التدفق المغناطيسي المتغير Φ_B. تتناسب نسبة جهد الملف الثانوي للابتدائي طردياً مع نسبة عدد اللفات: V_s / V_p = N_s / N_p.',
          captionEn: 'The transformer transfers energy via mutual magnetic flux Φ_B through the soft iron core. The secondary-to-primary voltage ratio matches the turns ratio: V_s / V_p = N_s / N_p.',
          diagramType: 'faraday_induction',
          takeawayFormulaAr: 'ε = -N · (ΔΦ / Δt) | V_s / V_p = N_s / N_p',
          takeawayFormulaEn: 'ε = -N · (ΔΦ / Δt) | V_s / V_p = N_s / N_p',
          keyLabels: [
            { tagAr: 'الملف الابتدائي (N_p)', tagEn: 'Primary Coil (N_p)', descAr: 'المتصل بمصدر الجهد المتناوب V_p', descEn: 'Input AC supply coil' },
            { tagAr: 'الملف الثانوي (N_s)', tagEn: 'Secondary Coil (N_s)', descAr: 'المتصل بالحمل أو المستهلك V_s', descEn: 'Output load supply coil' },
            { tagAr: 'التدفق المغناطيسي (Φ_B)', tagEn: 'Magnetic Flux (Φ_B)', descAr: 'خطوط المجال الموجهة داخل القلب الحديدي', descEn: 'Dynamic flux circulating in iron core' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب القوة الدافعة الحثية (EMF)',
          titleEn: 'Worked Example: Induced EMF Calculation',
          equation: 'ε = -N · (ΔΦ / Δt) = -N · A · (ΔB / Δt)',
          steps: [
            { stepNumber: 1, textAr: 'ملف دائري عدد لفاته N = 50 لفة، ومساحته A = 0.04 m²، موضوع عمودياً في مجال مغناطيسي (cos 0° = 1).', textEn: 'Coil with N = 50 turns and area A = 0.04 m² in perpendicular field.' },
            { stepNumber: 2, textAr: 'تغير المجال المغناطيسي بانتظام من B1 = 0.2 T إلى B2 = 0.8 T خلال زمن Δt = 0.3 ثانية.', textEn: 'Magnetic field changes from 0.2T to 0.8T in Δt = 0.3s.' },
            { stepNumber: 3, textAr: 'حساب التغير في التدفق: ΔΦ = A · (B2 - B1) = 0.04 × (0.8 - 0.2) = 0.024 Wb.', textEn: 'Flux change: ΔΦ = 0.04 × 0.6 = 0.024 Wb.' },
            { stepNumber: 4, textAr: 'حساب القوة الدافعة الحثية: ε = -50 × (0.024 / 0.3) = -4.0 فولت.', textEn: 'Induced EMF: ε = -50 × (0.024 / 0.3) = -4.0 Volts.' }
          ],
          takeawayAr: 'كلما كان معدل تغير المجال أسرع وزاد عدد اللفات، تضاعف الجهد الكهربائي الحثي المتولد.',
          takeawayEn: 'Higher flux change rate and increased turns scale up the induced voltage.'
        },
        formativeCheck: {
          id: 'fc-phys5-1',
          questionAr: 'ماذا يحدث للقوة الدافعة الكهربائية الحثية المتولدة في ملف إذا تضاعفت سرعة حركة المغناطيس داخل الملف (قل زمن التغير للنصف)؟',
          questionEn: 'What happens to the induced EMF if magnet speed doubles (halving Δt)?',
          optionsAr: ['تتضاعف القوة الدافعة الحثية مرتين', 'تقل إلى النصف', 'تظل ثابتة دون تغيير', 'تنعدم وتصبح صفراً'],
          optionsEn: ['Induced EMF doubles', 'Halves', 'Remains unchanged', 'Becomes zero'],
          correctIndex: 0,
          explanationAr: 'وفق قانون فاراداي: ε يتناسب عكسياً مع زمن التغير Δt؛ فإذا قل الزمن للنصف (تضاعفت السرعة) تتضاعف القوة الدافعة الحثية مباشرة.',
          explanationEn: 'According to Faraday\'s law, ε is inversely proportional to Δt, so halving the duration doubles the induced EMF.',
          hintAr: 'تذكر أن ε = -N (ΔΦ / Δt).',
          hintEn: 'Remember ε = -N (ΔΦ / Δt).'
        },
        tipsAr: ['انتبه للزاوية θ: إذا كانت خطوط المجال موازية لمستوى الملف فإن θ = 90° وcos 90° = 0 فينعدم التدفق تماماً.'],
        tipsEn: ['Watch the angle θ: If field lines run parallel to coil plane, θ = 90° and flux is zero.']
      }
    ],
    conceptMapAr: [
      'التدفق المغناطيسي: Φ = B · A · cos(θ) بوحدة الويبر (Wb)',
      'قانون فاراداي: ε = -N · (ΔΦ / Δt) لحساب الجهد الحثي',
      'قانون لنز: التيار الحثي يعاكس السبب المحدث له (تأكيد لمبدأ حفظ الطاقة)',
      'المحول الكهربائي: Vs / Vp = Ns / Np'
    ],
    conceptMapEn: [
      'Magnetic Flux: Φ = B A cos(θ) in Webers',
      'Faraday\'s Law: ε = -N (ΔΦ/Δt)',
      'Lenz\'s Law: Induced polarity opposes flux change',
      'Transformers: Vs / Vp = Ns / Np'
    ],
    textbookExercises: [
      {
        id: 'ex-phys5-1',
        questionAr: 'محول كهربائي مثالي يحتوي ملفه الابتدائي على 400 لفة وملفه الثانوي على 2000 لفة. إذا وُصل بجهد ابتدائي 220V، فما جهد الملف الثانوي ونوع المحول؟',
        questionEn: 'An ideal transformer has Np = 400 turns and Ns = 2000 turns. Connected to Vp = 220V, find Vs and type.',
        solutionStepsAr: [
          'تطبيق معادلة المحول: Vs / Vp = Ns / Np',
          'التعويض: Vs / 220 = 2000 / 400 = 5',
          'حساب الجهد الثانوي: Vs = 220 × 5 = 1100 فولت',
          'نوع المحول: محول رافع للجهد (Step-up Transformer) لأن Ns > Np'
        ],
        solutionStepsEn: [
          'Transformer equation: Vs / Vp = Ns / Np',
          'Substitute: Vs / 220 = 2000 / 400 = 5',
          'Calculate secondary voltage: Vs = 220 × 5 = 1100 Volts',
          'Type: Step-up transformer since Ns > Np'
        ],
        answerAr: 'جهد الملف الثانوي = 1100V، والمحول رافع للجهد.',
        answerEn: 'Secondary voltage = 1100V (Step-up transformer).'
      }
    ],
    assessment: {
      id: 'quiz-phys-5',
      lectureId: 'phys-5',
      titleAr: 'الاختبار الإلزامي: الكهرومغناطيسية والحث',
      titleEn: 'Lecture 5 Assessment: Electromagnetic Induction',
      passingScore: 80,
      questions: [
        {
          id: 'qp5-1',
          textAr: 'ما هي وحدة قياس التدفق المغناطيسي في النظام الدولي (SI)؟',
          textEn: 'What is the SI unit of magnetic flux?',
          optionsAr: ['الويبر (Weber - Wb)', 'التسلا (Tesla - T)', 'الفولت (Volt)', 'الأمبير (Ampere)'],
          optionsEn: ['Weber (Wb)', 'Tesla (T)', 'Volt', 'Ampere'],
          correctIndex: 0,
          conceptTestedAr: 'وحدات القياس الكهرومغناطيسية',
          conceptTestedEn: 'Electromagnetic SI Units',
          explanationAr: 'يقاس التدفق المغناطيسي بوحدة الويبر (Wb)، وهي تعادل تسلا في متر مربع (T · m²).',
          explanationEn: 'Magnetic flux is measured in Webers (Wb), equivalent to T · m².',
          difficulty: 'easy'
        },
        {
          id: 'qp5-2',
          textAr: 'ما الأساس الفيزيائي الذي يُبنى عليه قانون لنز في الكهرومغناطيسية؟',
          textEn: 'What is the underlying physical principle of Lenz\'s law?',
          optionsAr: ['قانون حفظ الطاقة', 'قانون حفظ الشحنة', 'قانون الجذب الكوني', 'قانون كولوم'],
          optionsEn: ['Conservation of Energy', 'Conservation of Charge', 'Universal Gravitation', 'Coulomb\'s Law'],
          correctIndex: 0,
          conceptTestedAr: 'المفاهيم الفيزيائية لقانون لنز',
          conceptTestedEn: 'Lenz\'s Law Foundations',
          explanationAr: 'قانون لنز هو تطبيق مباشر لمبدأ حفظ الطاقة؛ فالمجال المعاكس يضمن بذل شغل ميكانيكي يتحول إلى طاقة كهربائية مستحثة.',
          explanationEn: 'Lenz\'s law enforces conservation of energy.',
          difficulty: 'medium'
        },
        {
          id: 'qp5-3',
          textAr: 'ملف مكون من 100 لفة يخترقه تدفق مغناطيسي مقداره 0.05 Wb، إذا تلاشى هذا التدفق إلى الصفر خلال 0.1s، فما مقدار القوة الدافعة الحثية المتولدة؟',
          textEn: 'A 100-turn coil with flux 0.05Wb drops to 0 in 0.1s. What is induced EMF?',
          optionsAr: ['50 فولت', '500 فولت', '5 فولت', '0.5 فولت'],
          optionsEn: ['50 Volts', '500 Volts', '5 Volts', '0.5 Volts'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون فاراداي الحسابي',
          conceptTestedEn: 'Faraday\'s Equation Calculation',
          explanationAr: 'ε = -N (ΔΦ / Δt) = -100 × (0 - 0.05) / 0.1 = +50 فولت.',
          explanationEn: 'ε = -100 × (-0.05 / 0.1) = +50V.',
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
    subtitleAr: 'دراسة أركان التشبيه الأربعة والتمييز بين التشبيه المفرد والتشبيه البليغ والتمثيلي والضمني',
    subtitleEn: 'Explore the 4 components of similes, contrasting explicit, composite, and implied analogies.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الثاني ثانوي - المرحلة الثانوية (مسار اللغة العربية والإنسانيات)',
    gradeLevelNameEn: 'Grade 11 / High School - Arabic Literature & Rhetoric',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: علم البيان والتصوير الفني',
    unitTitleEn: 'Unit 1: Imagery, Rhetoric & Artistic Expression',
    lessonNumberAr: 'الدرس 1: التشبيه: أركانه، وأقسامه، وأسراره البلاغية',
    lessonNumberEn: 'Lesson 1: The Simile: Structure, Types & Aesthetics',

    // Real-world Rhetorical Hook
    warmupHookAr: 'حين قال الشاعر يصف شجاعة البطل: "أنتَ كالشَّمْسِ فِي الضِّيَاءِ وَإِنْ جَاوَزْتَ كَيْوَانَ فِي عُلُوِّ المَكَانِ"، لم يكن يصف حقيقة فلكية، بل صاغ صورة بيانية تنقل الإحساس بعظمة الممدوح وضياء مكانته. التشبيه هو أقدم فنون التصوير البياني وأكثرها تأثيراً في النفس الإنسانية؛ كيف تفكك أي تشبيه بلاغي وتحدد أركانه الأربعة؟ وما السر الذي يجعل حذف بعض الأركان يرفع البلاغة إلى قمتها في "التشبيه البليغ"؟',
    warmupHookEn: 'Similes elevate literal descriptions into immortal poetic imagery. Discover the 4 cardinal pillars of Arabic similes and why omitting explicit particles yields supreme rhetorical power.',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يحدد الطالب أركان التشبيه الأربعة (المشبه، المشبه به، أداة التشبيه، وجه الشبه) في شواهد شعرية ونثرية',
      'أن يصنف الطالب أنواع التشبيه (مرسل، مؤكد، مجمل، مفصل، بليغ) بدقة',
      'أن يميز الطالب بين التشبيه المفرد والتشبيه التمثيلي والتشبيه الضمني',
      'أن يحلل الطالب الأثر البلاغي والجمالي للتشبيه في نقل المعنى وإثارة العاطفة'
    ],
    learningOutcomesEn: [
      'Identify the 4 components of simile (Tenor, Vehicle, Particle, Ground) in classical poetry and prose',
      'Classify simile categories (Mursal, Muakkad, Mujmal, Mufassal, Baleegh) accurately',
      'Distinguish between simple, composite (Tamtheeli), and implied (Dhimni) similes',
      'Analyze the aesthetic and emotional impact of rhetorical analogies on textual reception'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'علم البيان (Ilm Al-Bayan)',
        termEn: 'Ilm Al-Bayan (Rhetoric / Imagery)',
        definitionAr: 'علم يُعرف به إيراد المعنى الواحد بطرق مختلفة في وضوح الدلالة عليه (التشبيه، الاستعارة، الكناية، المجاز).',
        definitionEn: 'The classical Arabic rhetorical discipline of expressing a single idea through diverse figurative modalities.'
      },
      {
        termAr: 'المشبه والمشبه به (Tenor & Vehicle)',
        termEn: 'Tenor and Vehicle',
        definitionAr: 'طرفا التشبيه الأساسيان اللذان لا يقوم التشبيه إلا بهما؛ المشبه هو المراد إيضاحه، والمشبه به هو الطرف الأقوى في الصفة.',
        definitionEn: 'The two indispensable pillars of comparison: the entity described and the illustrative analogue.'
      },
      {
        termAr: 'وجه الشبه (Ground / Shared Quality)',
        termEn: 'Wajh Ash-Shabah (Ground)',
        definitionAr: 'الوصف أو الصفة المشتركة التي تجمع بين المشبه والمشبه به، ويكون في المشبه به أقوى وأظهر.',
        definitionEn: 'The common attribute linking tenor and vehicle, predominantly manifested in the vehicle.'
      },
      {
        termAr: 'التشبيه البليغ (Eloquent Simile)',
        termEn: 'Eloquent Simile (Baleegh)',
        definitionAr: 'تشبيه حُذفت منه أداة التشبيه ووجه الشبه معاً وبقي الطرفان فقط (مثل: العلمُ نورٌ)، وهو أعلى مراتب التشبيه.',
        definitionEn: 'The pinnacle of simile where connective particle and ground are deleted, leaving direct identification.'
      },
      {
        termAr: 'التشبيه التمثيلي (Composite Simile)',
        termEn: 'Composite Simile (Tamtheeli)',
        definitionAr: 'تشبيه تكون فيه صورة مركبة من عدة عناصر مشبهة بصورة مركبة أخرى منتزعة من متعدد.',
        definitionEn: 'A holistic analogy comparing a complex multifaceted scene with another multi-element tableau.'
      },
      {
        termAr: 'التشبيه الضمني (Implied Simile)',
        termEn: 'Implied Simile (Dhimni)',
        definitionAr: 'تشبيه لا يُصرّح فيه بأركان التشبيه في صورة تركيبية معتادة، بل يُلمح التشبيه من سياق المعنى ويؤتى بالشطر الثاني كبرهان.',
        definitionEn: 'An analogy where comparison is subtly woven into context without formal syntactic markers.'
      }
    ],

    keyConceptsAr: [
      'أركان التشبيه الأربعة: المشبه، والمشبه به، والأداة، ووجه الشبه',
      'أقسام التشبيه بحسب ذكر وحذف الأداة ووجه الشبه (التام، المؤكد، المجمل، البليغ)',
      'التشبيه التمثيلي والتشبيه الضمني',
      'الأسرار البلاغية والجمالية: التشخيص، والتجسيم، والتوضيح'
    ],
    keyConceptsEn: [
      'Four Pillars of Simile: Tenor, Vehicle, Particle, Ground',
      'Taxonomy by Omission: Complete, Confirmed, Concise, Eloquent',
      'Composite vs Contextually Implied Analogies',
      'Rhetorical Aesthetics: Personification, Concretization, Illumination'
    ],
    summaryAr: 'علم البيان هو بوابة تذوق سحر البيان العربي؛ نكتشف في هذا الدرس كيف يرتقي الكاتب بالمعنى عبر التشبيه البليغ الذي يجمع بين الدقة والجمال، ونفصل أركانه الأربعة وصوره التمثيلية والضمنية.',
    summaryEn: 'Discover how classical Arabic rhetoric elevates prose and poetry through layered figurative similes, mastering the 4 pillars and advanced composite and implied forms.',

    sections: [
      {
        titleAr: '1. أركان التشبيه الأربعة ومخطط شجرة البيان',
        titleEn: '1. The Four Pillars of Simile & Rhetorical Schema',
        contentAr: 'يقوم التشبيه على عقد مماثلة بين شيئين اشتركا في صفة أو أكثر. أركانه الأربعة هي:\n1. المشبه: الأمر الذي يراد إلحاقه بغيره لبيان صفته.\n2. المشبه به: الأمر الذي يُلحق به المشبه وتكون الصفة فيه أقوى وأجلى (وهما طرفا التشبيه الأساسيان).\n3. أداة التشبيه: اللفظ الدال على المماثلة، وتكون حرفاً (كـ، كأنَّ) أو اسماً (مثل، شبه) أو فعلاً (يشبه، يماثل).\n4. وجه الشبه: المعنى المشترك الجامع بين الطرفين (مثل: الشجاعة، الضياء، الكرم).',
        contentEn: 'A simile establishes an analogy between two entities sharing salient qualities, anchored by tenor, vehicle, connective particle, and ground.',
        diagram: {
          id: 'diag-rhetoric-simile',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'مخطط أركان التشبيه البلاغي ومراتبه في علم البيان',
          titleEn: 'Four Pillars of Simile & Taxonomy Spectrum',
          captionAr: 'مخطط توضيحي يبين أركان التشبيه الأربعة (المشبه، الأداة، المشبه به، وجه الشبه) ويوضح درجات البلاغة عند حذف الأداة أو وجه الشبه وصولاً إلى التشبيه البليغ.',
          captionEn: 'Structural hierarchy of simile components illustrating how progressive omissions yield the supreme Eloquent Simile.',
          diagramType: 'rhetoric_simile_map',
          takeawayFormulaAr: 'التشبيه البليغ = المشبه + المشبه به (حذف الأداة ووجه الشبه لتوحيد الطرفين)',
          takeawayFormulaEn: 'Eloquent Simile = Tenor + Vehicle (Particle and Ground deleted)',
          keyLabels: [
            { tagAr: 'طرفا التشبيه', tagEn: 'Tenor & Vehicle', color: '#38bdf8' },
            { tagAr: 'أداة التشبيه', tagEn: 'Connective Particle', color: '#f59e0b' },
            { tagAr: 'وجه الشبه', tagEn: 'Shared Ground', color: '#ec4899' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (1-1): تفكيك أركان التشبيه في بيت شعر كلاسيكي',
          titleEn: 'Worked Example (1-1): Deconstructing Simile Pillars in Classical Poetry',
          equation: 'المشبه + الأداة + المشبه به + وجه الشبه',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'البيت الشعري: "أَنْتَ كَاللَّيْثِ فِي الشَّجَاعَةِ وَالإِقْدَامِ ... وَالسَّيْفِ فِي قِرَاعِ الخُطُوبِ".', 
              textEn: 'Verse: "You are like the lion in courage and valor, and like the sword in overcoming calamities."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المشبه: الضمير "أنتَ" (الممدوح).', 
              textEn: 'Tenor (المشبه): Pronoun "Anta" (the praised hero).' 
            },
            { 
              stepNumber: 3, 
              textAr: 'أداة التشبيه: حرف الكاف (كـ).', 
              textEn: 'Connective Particle (الأداة): Letter Kaf (Like).' 
            },
            { 
              stepNumber: 4, 
              textAr: 'المشبه به: "اللَّيْثِ" (الأسد).', 
              textEn: 'Vehicle (المشبه به): "Al-Layth" (The Lion).' 
            },
            { 
              stepNumber: 5, 
              textAr: 'وجه الشبه: "فِي الشَّجَاعَةِ وَالإِقْدَامِ" (الصفة المشتركة الأقوى في الأسد).', 
              textEn: 'Ground (وجه الشبه): "Courage and bravery", most intensely manifested in the lion.' 
            }
          ],
          takeawayAr: 'ذكر جميع الأركان الأربعة يسمى "تشبيهاً تاماً ومفصلاً ومرسلاً".',
          takeawayEn: 'Explicit articulation of all four components constitutes a fully articulated complete simile.'
        },
        tipsAr: ['طرفا التشبيه لا يمكن حذفهما معاً في التشبيه، فإن حُذف أحدهما تحول الأسلوب إلى استعارة!']
      },
      {
        titleAr: '2. مراتب التشبيه وأنواعه بحسب الحذف والذكر',
        titleEn: '2. Simile Classifications by Structural Omission',
        contentAr: 'تتفاوت بلاغة التشبيه بحسب ما يُذكر أو يُحذف من أركانه:\n\n1. التشبيه المرسل: ما ذُكرت فيه أداة التشبيه (مثل: كان خلقه كالنسيم).\n2. التشبيه المؤكد: ما حُذفت منه أداة التشبيه (مثل: أنت ليثٌ في الشجاعة).\n3. التشبيه المجمل: ما حُذف منه وجه الشبه (مثل: المعلمُ كالبحر).\n4. التشبيه المفصل: ما ذُكر فيه وجه الشبه صراحة (مثل: المعلم كالبحر في الكرم).\n5. التشبيه البليغ (ذروة البلاغة): ما حُذفت منه الأداة ووجه الشبه معاً، وبقي الطرفان فقط (مثل: "العلمُ نورٌ"، "الأمُّ مدرسةٌ")؛ وسر بلاغته أنه يدعي التطابق التام والاتحاد بين المشبه والمشبه به.',
        contentEn: 'Simile taxonomy: Mursal (particle stated), Muakkad (particle omitted), Mujmal (ground omitted), Mufassal (ground stated), and Baleegh (both omitted, creating total identity).',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (1-2): تحويل التشبيه التام إلى تشبيه بليغ راقٍ',
          titleEn: 'Worked Example (1-2): Transforming an Explicit Simile into an Eloquent Simile',
          equation: 'تشبيه مفصل مرسل -> حذف الأداة -> حذف وجه الشبه = تشبيه بليغ',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الجملة الأصلية (تشبيه تام مفصل مرسل): "القُرْآنُ كَالنُّورِ فِي الهِدَايَةِ".', 
              textEn: 'Base sentence: "The Quran is like the light in guidance."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'الخطوة الأولى (حذف الأداة): "القُرْآنُ نُورٌ فِي الهِدَايَةِ" -> أصبح تشبيهاً مؤكداً.', 
              textEn: 'Step 1 (Drop particle): "The Quran is light in guidance" -> Confirmed Simile.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'الخطوة الثانية (حذف وجه الشبه): "القُرْآنُ نُورٌ" -> أصبح تشبيهاً بليغاً في أعلى درجات الفصاحة والتأثير.', 
              textEn: 'Step 2 (Drop ground): "The Quran is light" -> Eloquent Simile (Baleegh).' 
            }
          ],
          takeawayAr: 'التشبيه البليغ يجعل المشبه عين المشبه به، مما يمنح المعنى قوة إيحائية مضاعفة.',
          takeawayEn: 'The Baleegh simile directly identifies tenor with vehicle, maximizing poetic and emotional impact.'
        },
        tipsAr: ['صور التشبيه البليغ في اللغة: 1) المبتدأ والخبر (العلم نور)، 2) الحال وصاحبها (هجم الجندي أسداً)، 3) المفعول المطلق المبين للنوع (تفوق تفوق العباقرة)، 4) إضافة المشبه به للمشبه (نور العلم).']
      },
      {
        titleAr: '3. التشبيه التمثيلي والتشبيه الضمني',
        titleEn: '3. Composite (Tamtheeli) & Implied (Dhimni) Similes',
        contentAr: 'حين يرتقي الأديب بالصورة من مقارنة مفردة إلى مشهد متكامل، نصل إلى:\n\nأولاً: التشبيه التمثيلي:\n- تشبيه صورة مركبة بصورة مركبة أخرى، ويكون وجه الشبه فيه منتزعاً من عدة أمور.\n- مثاله قوله تعالى: ﴿مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ فِي كُلِّ سُنْبُلَةٍ مِائَةُ حَبَّةٍ﴾؛ حيث شُبهت هيئة النفقة المباركة وتضاعف أجرها بهيئة حبة قمح زُرعت في أرض طيبة فأثمرت سبعمائة حبة.\n\nثانياً: التشبيه الضمني:\n- تشبيه لا تظهر فيه أركان التشبيه بصورة صريحة، بل يُفهم ضمناً من سياق الكلام، ويكون الشطر الثاني حكماً وبرهاناً على الشطر الأول.\n- مثاله قول المتنبي:\n"مَنْ يَهُنْ يَسْهُلِ الهَوَانُ عَلَيْهِ ... مَا لِجُرْحٍ بِمَيِّتٍ إِيلَامُ"\nشبه الذي اعتاد الذل فلا يتألم به بالميت الذي لا يتألم بالجرح، دون استخدام أي أداة تشبيه!',
        contentEn: 'Composite similes compare full multi-element tableaux (Tamtheeli), while Implied similes (Dhimni) weave the comparison subtly into thematic context without formal markers.',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي (1-3): تحليل تشبيه ضمني واستخراج وجه المقارنة',
          titleEn: 'Worked Example (1-3): Deconstructing an Implied (Dhimni) Simile',
          equation: 'القضية الأولى (الشطر الأول) + الدليل والبرهان البياني (الشطر الثاني)',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'تأمل قول أبي فراس الحمداني: "سَيَذْكُرُنِي قَوْمِي إِذَا جَدَّ جِدُّهُمْ ... وَفِي اللَّيْلَةِ الظَّلْمَاءِ يُفْتَقَدُ البَدْرُ".', 
              textEn: 'Reflect on: "My people shall remember me in intense hardship, just as the full moon is missed in the darkest night."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المعنى الأول: تذكر قوم الشاعر له عند الشدائد وحاجتهم لفروسيته ورأيه.', 
              textEn: 'First premise: The tribe seeking the poet in moments of dire adversity.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'المعنى الثاني (البرهان): حاجة الناس إلى البدر المنير في الليلة شديدة الظلام.', 
              textEn: 'Second premise (Proof): The desperate longing for the radiant full moon in pitch-black night.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'نوع التشبيه: تشبيه ضمني؛ لم يقل الشاعر "أنا كالبدر"، بل ألمح للمقارنة ببراعة وذكاء فني.', 
              textEn: 'Simile Type: Implied Simile (Dhimni); subtle analogy without literal syntactic scaffolding.' 
            }
          ],
          takeawayAr: 'التشبيه الضمني يأتي دائماً دليلاً وبرهاناً مقنعاً على القضية المطروحة في صدر البيت.',
          takeawayEn: 'Implied similes serve as elegant intuitive proofs confirming the preceding assertion.'
        },
        tipsAr: ['التشبيه الضمني يخلو دائماً من أدوات التشبيه الصريحة، وتأتي جملته الثانية بمثابة مثل سائر.']
      }
    ],

    conceptMapSummaryAr: 'أركان التشبيه 4: مشبه، مشبه به (طرفان أساسيان)، أداة تشبيه، وجه الشبه. مراتبه: تام (ذكر الكل)، مؤكد (حذف الأداة)، مجمل (حذف الوجه)، بليغ (حذف الأداة والوجه وهو أعلاها). وأنواعه المركبة: تمثيلي (صورة بصورة) وضمني (يُفهم من السياق).',
    conceptMapSummaryEn: 'Simile Pillars: Tenor, Vehicle, Particle, Ground. Ranks: Complete, Confirmed, Concise, Eloquent. Composite Types: Tamtheeli (Scene vs Scene) and Dhimni (Contextually Implied).',

    goldenRulesAr: [
      'القاعدة 1: لا ينعقد التشبيه إلا بوجود طرفي التشبيه الأساسيين: المشبه والمشبه به.',
      'القاعدة 2: إذا حُذف المشبه أو المشبه به خرج الأسلوب من التشبيه إلى "الاستعارة".',
      'القاعدة 3: التشبيه المؤكد هو ما حُذفت منه الأداة، والمجمل ما حُذف منه وجه الشبه.',
      'القاعدة 4: التشبيه البليغ يحذف الأداة ووجه الشبه معاً لإفادة التماهي والاتحاد التام.',
      'القاعدة 5: التشبيه التمثيلي يقارن بين هيئة مركبة وهيئة مركبة أخرى منتزعة من متعدد.',
      'القاعدة 6: التشبيه الضمني يلمح للمقارنة دون أدوات، ويكون الشطر الثاني برهاناً وحكمة.',
      'القاعدة 7: أسرار جمال التشبيه تنحصر في: التشخيص (لغير العاقل)، والتجسيم (للمعنويات)، والتوضيح.'
    ],
    goldenRulesEn: [
      'Rule 1: A simile strictly requires both primary pillars: Tenor and Vehicle.',
      'Rule 2: Deleting either tenor or vehicle transforms the figure into a Metaphor.',
      'Rule 3: Confirmed similes omit particles; Concise similes omit grounds.',
      'Rule 4: Eloquent similes (Baleegh) omit both particle and ground for complete identification.',
      'Rule 5: Composite similes compare complex multi-faceted scenes.',
      'Rule 6: Implied similes lack explicit particles and function as proverbial proofs.',
      'Rule 7: Aesthetic aims of simile are Personification, Concretization, and Vivid Illumination.'
    ],

    textbookExercises: [
      {
        id: 'ex-lit-1-1',
        questionAr: 'عين أركان التشبيه ونوعه في قول الشاعر: "وَالعِلْمُ مَالُ المُعْدَمِينَ إِذَا هُمُ ... خَرَجُوا إِلَى الدُّنْيَا بِغَيْرِ حُطَامِ".',
        questionEn: 'Identify simile pillars and classification in the poetic verse on knowledge as wealth.',
        solutionStepsAr: [
          '1. المشبه: "العِلْمُ".',
          '2. المشبه به: "مَالُ المُعْدَمِينَ".',
          '3. أداة التشبيه: محذوفة.',
          '4. وجه الشبه: محذوف (القيمة والغنى والاستغناء).',
          '5. نوع التشبيه: تشبيه بليغ؛ لأنه جاء على صورة المبتدأ والخبر وحُذفت الأداة ووجه الشبه.'
        ],
        solutionStepsEn: [
          '1. Tenor: "Knowledge".',
          '2. Vehicle: "Wealth of the destitute".',
          '3. Particle: Omitted.',
          '4. Ground: Omitted (Value, enrichment).',
          '5. Classification: Eloquent Simile (Baleegh).'
        ],
        answerAr: 'المشبه: العلم | المشبه به: مال المعدمين | نوعه: تشبيه بليغ.',
        answerEn: 'Tenor: Knowledge | Vehicle: Wealth | Type: Eloquent Simile.'
      },
      {
        id: 'ex-lit-1-2',
        questionAr: 'بين نوع التشبيه في قول الشاعر: "تَرْجُو النَّجَاةَ وَلَمْ تَسْلُكْ مَسَالِكَهَا ... إِنَّ السَّفِينَةَ لَا تَجْرِي عَلَى اليَبَسِ".',
        questionEn: 'Identify the simile type in the verse on seeking salvation without taking righteous paths.',
        solutionStepsAr: [
          '1. الشطر الأول يعبر عن استحالة نيل النجاة والفوز دون بذل الأسباب وسلوك طريقها.',
          '2. الشطر الثاني يأتي بحقيقة واقعية ملموسة وهي أن السفينة يستحيل أن تبحر على الأرض اليابسة.',
          '3. لم يستخدم الشاعر أداة تشبيه ولم يصرح بالمقارنة مباشرة، بل لُمح التشبيه ضمناً.',
          '4. إذن نوع التشبيه: تشبيه ضمني رائع.'
        ],
        solutionStepsEn: [
          '1. First half asserts the impossibility of salvation without pursuing its means.',
          '2. Second half brings empirical proof: ships cannot sail on dry land.',
          '3. No connective particle or direct explicit syntax used.',
          '4. Classification: Implied Simile (Dhimni).'
        ],
        answerAr: 'تشبيه ضمني؛ لأن الشطر الثاني جاء دليلاً وبرهاناً وحكمة على المعنى في الشطر الأول.',
        answerEn: 'Implied Simile (Dhimni), serving as proverbial verification.'
      }
    ],

    assessment: {
      id: 'quiz-lit-1',
      lectureId: 'lit-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: علم البيان والتشبيه وأركانه',
      titleEn: 'Lecture 1 Assessment: Classical Rhetoric & Similes Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'ql1-1',
          textAr: 'ما هو التشبيه البليغ في البلاغة العربية؟',
          textEn: 'What defines an Eloquent Simile in Arabic rhetoric?',
          optionsAr: [
            'ما حُذفت منه أداة التشبيه ووجه الشبه وبقي الطرفان الأساسيان فقط (مثل: العلمُ نورٌ)',
            'ما ذُكرت فيه جميع أركان التشبيه الأربعة كاملة',
            'ما حُذف منه المشبه به واستُعيرت لوازمه',
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
          explanationAr: 'التشبيه البليغ هو ما حُذفت منه أداة التشبيه ووجه الشبه، مثل: "المعلمُ بحرٌ" و"الصبرُ درعٌ".',
          explanationEn: 'The eloquent simile deletes the particle and ground, leaving tenor and vehicle directly identified.',
          difficulty: 'easy'
        },
        {
          id: 'ql1-2',
          textAr: 'في قول الشاعر: "كَأَنَّ أَخْلَاقَكَ فِي لُطْفِهَا ... وَرِقَّةٍ فِيهَا نَسِيمُ الصَّبَاحِ"، ما نوع التشبيه من حيث الأركان؟',
          textEn: 'In the verse comparing gentle morals to the morning breeze, what is the simile classification?',
          optionsAr: [
            'تشبيه تام مرسل مفصل (ذُكرت فيه الأركان الأربعة: الأداة كأن، والمشبه أخلاقك، والمشبه به نسيم الصباح، والوجه في لطفها)',
            'تشبيه بليغ',
            'تشبيه مؤكد مجمل',
            'تشبيه ضمني'
          ],
          optionsEn: [
            'Complete Mursal Mufassal Simile (all 4 components stated)',
            'Eloquent Simile',
            'Confirmed Concise Simile',
            'Implied Simile'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تحليل الأركان الكاملة للتشبيه المرسل المفصل',
          conceptTestedEn: 'Full Pillar Simile Analysis',
          explanationAr: 'ذُكرت الأركان الأربعة: الأداة (كأنَّ)، المشبه (أخلاقك)، المشبه به (نسيم الصباح)، ووجه الشبه (في لطفها ورقة فيها)، فهو تشبيه تام مفصل مرسل.',
          explanationEn: 'All four components are explicitly present, categorizing it as a complete articulated simile.',
          difficulty: 'medium'
        },
        {
          id: 'ql1-3',
          textAr: 'ما الفرق الجوهري بين التشبيه التمثيلي والتشبيه الضمني؟',
          textEn: 'What is the fundamental distinction between Composite and Implied Similes?',
          optionsAr: [
            'التمثيلي يشبه صورة مركبة بصورة مركبة مع وجود أداة، بينما الضمني يُلمح من السياق ويكون الشطر الثاني برهاناً دون أداة',
            'التمثيلي يختص بالنثر والضمني بالشعر فقط',
            'التمثيلي يحذف المشبه والضمني يحذف المشبه به',
            'لا يوجد فرق بينهما كلاهما تشبيه بليغ'
          ],
          optionsEn: [
            'Tamtheeli compares structured composite scenes often with particles; Dhimni is contextually inferred without particles serving as proof',
            'Tamtheeli is prose-only, Dhimni poetry-only',
            'Tamtheeli deletes tenor, Dhimni deletes vehicle',
            'No difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفروق الدقيقة بين التشبيه التمثيلي والضمني',
          conceptTestedEn: 'Composite vs Implied Analogy Distinction',
          explanationAr: 'التشبيه التمثيلي تشبيه صورة بصورة مركبة وتكون فيه الأداة غالباً، بينما الضمني يُفهم من السياق ويكون الشطر الثاني بمثابة دليل وبرهان يثبت صحة الشطر الأول.',
          explanationEn: 'Tamtheeli compares vivid multi-element tableaux; Dhimni is subtly implied as a contextual proof without explicit simile syntax.',
          difficulty: 'hard'
        },
        {
          id: 'ql1-4',
          textAr: 'ما هو سر الجمال البلاغي في قولنا: "تَبَسَّمَتِ الحَيَاةُ لِلْمُجْتَهِدِينَ" أو "الْأَمَلُ يَمُدُّ يَدَهُ إِلَيْكَ"؟',
          textEn: 'What is the rhetorical aesthetic effect in attributing smiles and outstretched hands to abstract life and hope?',
          optionsAr: [
            'التشخيص (منح المعنويات والجمادات صفات الأشخاص العاقلين لإضفاء حيوية وتأثير)',
            'الجناس الصوتي',
            'السجع النثري',
            'الطباق السلبي'
          ],
          optionsEn: [
            'Personification (Tashkhees, endowing abstract concepts with human vitality)',
            'Phonetic Jinas',
            'Prose Rhyme (Saj)',
            'Negative Antithesis'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أسرار الجمال البلاغي: التشخيص والتجسيم',
          conceptTestedEn: 'Aesthetic Rhetorical Aims: Personification',
          explanationAr: 'التشخيص هو بث الحياة الإنسانية في الجمادات والمعنويات بجعلها تتكلم أو تبتسم كالإنسان، مما يقرب المعنى ويثير العاطفة.',
          explanationEn: 'Personification (التشخيص) animates inanimate and abstract concepts with human agency and traits.',
          difficulty: 'medium'
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
    subtitleAr: 'التمييز بين أقسام الكلمة الثلاثة والتعرف على علامات الاسم الخمس وعلامات أزمنة الفعل ودور الحروف',
    subtitleEn: 'Master the three categories of Arabic words: Nouns, Verbs, and Particles with authoritative criteria.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: القيم الإسلامية والهوية اللغوية',
    unitTitleEn: 'Unit 1: Islamic Values & Linguistic Identity',
    lessonNumberAr: 'الدرس 1: الصنف اللغوي: أقسام الكلمة وعلاماتها الفارقة',
    lessonNumberEn: 'Lesson 1: Parts of Speech & Definitive Markers',

    // Real-world Linguistic Hook
    warmupHookAr: 'لغتنا العربية لغة بديعة تمتاز بدقة البناء والاشتقاق؛ فكل كلمة ننطق بها أو نكتبها في هذا الكون الفسيح، من كلام فصيح أو شعر بليغ أو محادثة يومية، تقع حتماً وبلا استثناء تحت ثلاثة أبواب لا رابع لها: اسم، أو فعل، أو حرف. كيف صاغ علماء النحو كابن مالك وابن هشام ضوابط دقيقة لا تخطئ للتمييز بين هذه الأقسام؟ وكيف يمكنك فحص أي كلمة في ثانية واحدة؟ لنكتشف ذلك معاً!',
    warmupHookEn: 'Arabic words comprise three foundational blocks: Nouns, Verbs, and Relational Particles. Discover classical grammatical tests to classify any word instantaneously.',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يصنف الطالب أي كلمة في اللغة العربية بدقة إلى (اسم أو فعل أو حرف)',
      'أن يحدد الطالب علامات الاسم الخمس المشهورة (الجر، التنوين، النداء، أل التعريف، الإسناد)',
      'أن يميز الطالب بين أزمنة الفعل الثلاثة (الماضي، المضارع، الأمر) مستخدماً علامة كل فعل',
      'أن يوضح الطالب وظيفة الحرف في ربط أجزاء الكلام واستحالة استقلاله بالمعنى منفرداً',
      'أن يحلل الطالب شواهد ونصوصاً فصيحة مستخرجاً أقسام الكلمة مع التعليل المنهجي'
    ],
    learningOutcomesEn: [
      'Classify any Arabic word accurately into Noun, Verb, or Particle',
      'Identify the 5 cardinal noun markers (Genitive, Nunation, Vocative, Definite Article, Attribution)',
      'Distinguish the 3 verb tenses using dedicated test markers for each',
      'Explain the connective role of particles and their contextual dependency',
      'Analyze authentic Arabic texts extracting parts of speech with rigorous syntactic justification'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'الاسم (Noun)',
        termEn: 'Ism (Noun)',
        definitionAr: 'كلمة دلت على معنى في نفسها دون أن تقترن بزمن محدد (مثل: كتاب، شجرة، أحمد، عدل).',
        definitionEn: 'A word denoting a substantive or abstract meaning in itself, unbound to temporal tense.'
      },
      {
        termAr: 'الفعل (Verb)',
        termEn: 'Fil (Verb)',
        definitionAr: 'كلمة دلت على حدث مقترن بزمن محدد؛ فإن دلت على ما مضى فهو ماضٍ، وإن دلت على الحال والاستقبال فهو مضارع، وإن دلت على طلب فهو أمر.',
        definitionEn: 'A word expressing an action intrinsically tethered to past, present, or future command time.'
      },
      {
        termAr: 'الحرف (Particle)',
        termEn: 'Harf (Particle)',
        definitionAr: 'كلمة لا تدل على معنى مستقل بذاتها، وإنما يظهر معناها التام عند ضمها إلى غيرها في جملة مفيدة (مثل: من، إلى، ثم، هل).',
        definitionEn: 'A connective particle with no standalone semantic meaning until paired with words in context.'
      },
      {
        termAr: 'التنوين (Nunation)',
        termEn: 'Tanween',
        definitionAr: 'نون ساكنة زائدة تلحق آخر الأسماء المعربة لفظاً وتفارقها خطاً ووقفاً (مثل: قلمٌ، قلماً، قلمٍ)، وهي علامة فارقة للاسم.',
        definitionEn: 'An unwritten doubled vocalic suffix (un, an, in) strictly unique to non-definite Arabic nouns.'
      },
      {
        termAr: 'أل التعريف (Definite Article)',
        termEn: 'Al-Taareef',
        definitionAr: 'حرف تعريف يدخل على الأسماء النكرة ليكسبها التعيين والتعريف (مثل: علم -> العلم)، ولا يدخل مطلقاً على الأفعال أو الحروف.',
        definitionEn: 'The definite prefix "Al-" transforming generic nouns into designated entities; rejected by verbs.'
      },
      {
        termAr: 'تاء التأنيث الساكنة (Feminine Taa)',
        termEn: 'Taat At-Taaneeth',
        definitionAr: 'تاء ساكنة تلحق آخر الفعل الماضي فقط للدلالة على أن الفاعل مؤنث (مثل: كَتَبَتْ، نَجَحَتْ).',
        definitionEn: 'Quiescent suffix Taa exclusively accepted by past-tense verbs when the agent is feminine.'
      },
      {
        termAr: 'الإسناد (Attribution)',
        termEn: 'Isnad',
        definitionAr: 'أن يُسند إلى الكلمة حكم أو خبر يفيد المعنى (مثل: الصدقُ منجاةٌ، قمتُ)، وهو أعم علامات الاسم.',
        definitionEn: 'Syntactic predication or attribution, constituting the most comprehensive noun identifier.'
      }
    ],

    keyConceptsAr: [
      'أقسام الكلمة الثلاثة: الاسم، الفعل، الحرف',
      'علامات الاسم الخمس: (الجر، التنوين، النداء، أل، الإسناد)',
      'علامات أزمنة الفعل: الماضي (تاء الفاعل وتاء التأنيث)، المضارع (لم، سين، سوف)، الأمر (دلالة الطلب مع ياء المخاطبة)',
      'الحروف لا تقبل علامات الاسم ولا الفعل ووظيفتها الربط وتوجيه المعنى'
    ],
    keyConceptsEn: [
      'Three Speech Categories: Noun, Verb, Particle',
      'The 5 Cardinal Noun Markers',
      'Tense-Specific Verb Identification Markers',
      'Particle Functions in Sentence Cohesion'
    ],
    summaryAr: 'يتألف الكلام في اللغة العربية من ثلاثة أقسام حصرية: الاسم ويدل على معنى مجرد من الزمن وله علامات كالتنوين والجر وأل؛ والفعل ويدل على حدث وزمن وله علامات تختلف باختلاف ماضيه ومضارعه وأمره؛ والحرف ويربط بين أجزاء الجملة ولا يقبل علاماتهما.',
    summaryEn: 'Arabic words comprise three foundational blocks: Nouns (atemporal concepts accepting Tanween and Al-), Verbs (actions with tense markers), and Particles (connective operators).',
    
    sections: [
      {
        titleAr: '1. الاسم ومفهومه وعلاماته الخمس الفارقة',
        titleEn: '1. Nouns: Concept & Five Definitive Identification Markers',
        contentAr: 'الاسم كلمة تدل على إنسان، أو حيوان، أو نبات، أو جماد، أو صفة، أو معنى مجرد دون ارتباط بزمن. وقد جمع الإمام ابن مالك علامات الاسم في بيته الشهير في الألفية:\n"بِالجَرِّ وَالتَّنْوِينِ وَالنِّدَا وَأَلْ ... وَمُسْنَدٍ لِلاِسْمِ تَمْيِيزٌ حَصَلْ"\nوعلامات الاسم هي:\n1. الجر: قبول حرف الجر أو الإضافة (مثل: في المدرسةِ).\n2. التنوين: قبول الضمتين أو الفتحتين أو الكسرتين (مثل: رجلٌ، قلماً).\n3. النداء: صحة دخول حرف النداء عليه (مثل: يا طالبُ، يا كريمُ).\n4. قبول أل التعريف: (مثل: كتاب -> الكتاب).\n5. الإسناد إليه: أن تخبر عنه بخبر (مثل: أنا قمتُ؛ حيث عُرفت اسمية الضمير "أنا" بقبول الإسناد).',
        contentEn: 'Nouns express entities or abstract ideas devoid of temporal tense. Ibn Malik summarized their 5 signature tests: Genitive case, Nunation, Vocative call (Ya), Definite article (Al-), and Syntactic Attribution (Isnad).',
        diagram: {
          id: 'diag-arabic-speech-tree',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'مخطط شجرة أقسام الكلمة وعلاماتها في اللغة العربية',
          titleEn: 'Arabic Parts of Speech & Cardinal Distinctions Tree',
          captionAr: 'شجرة توضيحية تقارن بين الاسم والفعل والحرف مع أهم العلامات المميزة لكل صنف وأمثلتها النموذجية.',
          captionEn: 'Comprehensive taxonomy contrasting Nouns, Verbs, and Particles with their distinctive tests.',
          diagramType: 'arabic_parts_of_speech',
          takeawayFormulaAr: 'الكلمة = اسم (يقبل التنوين وأل) | فعل (يقترن بزمن) | حرف (يربط بينهما)',
          takeawayFormulaEn: 'Speech = Ism (accepts Al/Tanween) | Fil (tensed event) | Harf (connector)',
          keyLabels: [
            { tagAr: 'الاسم وعلاماته', tagEn: 'Noun Markers', color: '#38bdf8' },
            { tagAr: 'الفعل وأزمنته', tagEn: 'Verb Tenses', color: '#10b981' },
            { tagAr: 'الحرف ووظيفته', tagEn: 'Particle Role', color: '#f59e0b' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق منهجي (1-1): فحص علامات الأسماء في جملة مركبة',
          titleEn: 'Worked Example (1-1): Testing Noun Markers in a Compound Sentence',
          equation: 'الكلمة المراد فحصها + اختبار العلامات (الجر / التنوين / أل)',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الجملة: "حَرَصَ عُمَرُ عَلَى طَلَبِ العِلْمِ فِي صِغَرِهِ". نريد تحديد الأسماء في الجملة مع بيان العلامة.', 
              textEn: 'Sentence: "Umar was eager for knowledge acquisition in his youth." Identify all nouns with their proof markers.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'فحص "عُمَرُ": اسم علم يدل على إنسان ويقبل النداء ("يا عمرُ") والإسناد إليه، فهو اسم.', 
              textEn: 'Analyze "Umar": Proper noun denoting human, accepts vocative (Ya Umar) and attribution -> Noun.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'فحص "طَلَبِ": سُبقت بحرف الجر (عَلَى) وجاءت مكسورة مجرورة ("على طلبِ")، والجر خاص بالأسماء -> إذن "طلب" اسم.', 
              textEn: 'Analyze "Talab": Governed by genitive preposition (Ala) with kasrah -> strictly a Noun.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'فحص "العِلْمِ": دخلت عليها (أل التعريف) وجاءت مضافة إليها -> إذن "العلم" اسم قطعي.', 
              textEn: 'Analyze "Al-Ilm": Features definite article "Al-" -> Noun.' 
            },
            { 
              stepNumber: 5, 
              textAr: 'فحص "صِغَرِهِ": سُبقت بـ (فِي) وقبلت حرف الجر واتصل بها ضمير -> اسم.', 
              textEn: 'Analyze "Sighar": Governed by preposition "Fi" and holds attached genitive pronoun -> Noun.' 
            }
          ],
          takeawayAr: 'يكفي قبول علامة واحدة فقط من علامات الاسم الخمس للحكم على الكلمة بأنها اسم.',
          takeawayEn: 'Accepting even a single noun marker definitively proves the word is a noun.'
        },
        tipsAr: ['لا يجتمع التنوين مع (أل التعريف) في كلمة واحدة أبداً؛ نقول: "كتابٌ" أو "الكتابُ".'],
        tipsEn: ['Nunation and the definite article Al- are mutually exclusive and never coexist on the same word.']
      },
      {
        titleAr: '2. الفعل وأقسامه الثلاثة وعلامات كل قسم',
        titleEn: '2. Verbs: Three Tenses & Tense-Specific Verification Markers',
        contentAr: 'الفعل يدل على حدوث عمل في زمن محدد، وينقسم حسب الزمن إلى ثلاثة أقسام لكل منها علامات فارقة:\n\n1. الفعل الماضي: ما دل على حدث وقع قبل زمن التكلم (مثل: كَتَبَ، فَهِمَ).\n   - علامته الفارقة: قبول تاء الفاعل المتحركة (كَتَبْتُ، كَتَبْتَ) أو قبول تاء التأنيث الساكنة (كَتَبَتْ).\n\n2. الفعل المضارع: ما دل على حدث يقع في زمن التكلم أو بعده (مثل: يَكْتُبُ، نَفْهَمُ).\n   - علامته الفارقة: قبول دخول جازم مثل (لَمْ يَكْتُبْ) أو ناصب مثل (لَنْ يَكْتُبَ) أو سين الاستقبال وسوف (سَيَكْتُبُ، سَوْفَ يَكْتُبُ). ولا بد أن يبدأ بأحد حروف المضارعة (أ، ن، ي، ت).\n\n3. فعل الأمر: ما دل على طلب حصول العمل في المستقبل بصيغة الطلب المباشر (مثل: اكْتُبْ، انْتَبِهْ).\n   - علامته الفارقة: أن يدل بنفسه على الطلب مع قبوله ياء المخاطبة المؤنثة (اكْتُبِي، انْتَبِهِي).',
        contentEn: 'Verbs express actions across 3 tenses: Past (accepts Subject Taa / Feminine Taa), Present (accepts Lam / Seen / Saufa), and Command/Imperative (conveys request and accepts feminine Yaa).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (1-2): التمييز بين أزمنة الفعل وتطبيق الاختبارات النحوية',
          titleEn: 'Worked Example (1-2): Verb Tense Classification & Verification Tests',
          equation: 'الفعل المعطى + علامة الاختبار الخاصة بكل زمن',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الكلمات المعطاة: (انْطَلَقَ - يَسْتَمِعُ - احْفَظْ). نريد تحديد نوع كل فعل مع الدليل.', 
              textEn: 'Analyze verbs: (Intalaqa, Yastamiu, Ihfadh) and prove tense classification with markers.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'فحص "انْطَلَقَ": نقوم بتجربة تاء التأنيث: (انْطَلَقَتْ هِنْدٌ) -> قبل تاء التأنيث الساكنة ودل على مضى، إذن هو فعل ماضٍ مبني.', 
              textEn: 'Test "Intalaqa": Accepts feminine Taa (Intalaqat) and denotes past event -> Past Tense Verb.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'فحص "يَسْتَمِعُ": يبدأ بالياء ويقبل أداة الجزم (لَمْ يَسْتَمِعْ) والسين (سَيَسْتَمِعُ) -> إذن هو فعل مضارع مرفوع.', 
              textEn: 'Test "Yastamiu": Accepts Lam (Lam Yastamia) and future Seen (Sa-Yastamiu) -> Present Tense Verb.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'فحص "احْفَظْ": يدل على طلب الحفظ في المستقبل ويقبل ياء المخاطبة المؤنثة (احْفَظِي) -> إذن هو فعل أمر مبني.', 
              textEn: 'Test "Ihfadh": Conveys direct imperative command and accepts feminine Yaa (Ihfadhi) -> Imperative Verb.' 
            }
          ],
          takeawayAr: 'لكل نوع من الأفعال علامة حصرية تكشفه فوراً: الماضي بالتاء، والمضارع بـ (لم والسين)، والأمر بالطلب مع ياء المخاطبة.',
          takeawayEn: 'Each verb tense has an infallible exclusive test: Past accepts Taa, Present accepts Lam/Seen, Imperative conveys request + Yaa.'
        },
        tipsAr: ['الفعل المضارع يبدأ دائماً بأحد أحرف كلمة (نَأْتِي) أو (أَنَيْتُ).'],
        tipsEn: ['Present tense verbs always commence with one of the 4 prefix letters from "Na-ati".']
      },
      {
        titleAr: '3. الحرف: أنواعه ودوره في ربط المعاني وإعراب الجمل',
        titleEn: '3. Particles: Types, Syntactic Roles & Semantic Modulation',
        contentAr: 'الحرف هو القسم الثالث من أقسام الكلمة، وضابطه السلبي: أنه لا يقبل أياً من علامات الاسم ولا أياً من علامات الفعل. وضابطه الإيجابي: أنه يربط الكلمات داخل الجملة ليولد معاني جديدة لا تقوم بدونها، كالمكانية أو السببية أو التوكيد أو النفي أو الاستقبال.\n\nمن أشهر أقسام الحروف في اللغة العربية:\n1. حروف الجر: (مِنْ، إِلَى، عَنْ، عَلَى، فِي، الباء، الكاف، اللام) - وظيفتها جر الأسماء بعدها.\n2. حروف العطف: (الواو، الفاء، ثُمَّ، أَوْ، بَلْ، لا) - وظيفتها المشاركة والترتيب والتعقيب والتخيير.\n3. حروف النصب والجزم: (أَنْ، لَنْ، كَيْ، إِذَنْ) للنصب، و(لَمْ، لَمَّا، لا الناهية، لام الأمر) للجزم.\n4. حروف النداء والاستفهام والنفي: (يا، أيا - الهمزة، هل - ما، لا، ليس).',
        contentEn: 'Particles accept neither noun nor verb markers. Their sole function is establishing relational and syntactic linkages (Genitive, Conjunction, Subjunctive, Jussive, Interrogative).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (1-3): تحليل الأثر المعنوي والإعرابي للحروف في السياق',
          titleEn: 'Worked Example (1-3): Analyzing Semantic Shift Induced by Particles',
          equation: 'الجملة الأساسية + إدخال الحرف = تغير الدلالة والإعراب',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'قارن بين الجمل التالية: 1) "سَافَرَ سَعِيدٌ إِلَى الرِّيَاضِ" ، 2) "سَافَرَ سَعِيدٌ مِنْ الرِّيَاضِ" ، 3) "هَلْ سَافَرَ سَعِيدٌ؟" ، 4) "لَمْ يُسَافِرْ سَعِيدٌ".', 
              textEn: 'Compare: 1) Traveled to Riyadh, 2) Traveled from Riyadh, 3) Did he travel?, 4) Did not travel.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'في (1): الحرف "إِلَى" حرف جر أفاد "انتهاء الغاية المكانية" وجر الاسم بعده (الرياضِ).', 
              textEn: 'In (1): "Ila" marks spatial destination and causes genitive inflection on the noun.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'في (2): الحرف "مِنْ" أفاد "ابتداء الغاية المكانية"؛ تغير المعنى كلياً بعكس الاتجاه بمجرد استبدال الحرف!', 
              textEn: 'In (2): "Min" marks spatial origin; changing one particle inverted the entire movement direction.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'في (3): "هَلْ" حرف استفهام حول الجملة من خبرية إلى إنشائية استفهامية.', 
              textEn: 'In (3): "Hal" converts a declarative statement into an interrogative query.' 
            },
            { 
              stepNumber: 5, 
              textAr: 'في (4): "لَمْ" حرف نفي وجزم وقلب، نفى الحدث وجزم الفعل المضارع بالسكون وقلب زمنه إلى الماضي.', 
              textEn: 'In (4): "Lam" negates the action, inflects the verb with Sukoon jussive, and shifts time to past.' 
            }
          ],
          takeawayAr: 'الحرف وإن كان لا معنى له بمفرده، إلا أنه هو المحرك الأساسي لتوجيه دلالات المعاني وبناء الإعراب.',
          takeawayEn: 'Though semantically incomplete in isolation, particles drive contextual meaning and syntactic inflection.'
        },
        tipsAr: ['الحروف كلها مبنية لا محل لها من الإعراب في لغة العرب.']
      }
    ],

    conceptMapSummaryAr: 'تتفرع الكلمة إلى ثلاثة أقسام حصرية: 1) الاسم (يقبل أل، التنوين، الجر، النداء، الإسناد)، 2) الفعل (ماضٍ يقبل تاء الفاعل والتأنيث، ومضارع يقبل لم وسين، وأمر يدل على الطلب ويقبل ياء المخاطبة)، 3) الحرف (يربط أجزاء الكلام ولا يقبل علاماتهما وكل الحروف مبنية).',
    conceptMapSummaryEn: 'Words split into: Nouns (accepting Al/Tanween/Genitive), Verbs (Past/Present/Imperative with dedicated markers), and Particles (connectors devoid of noun/verb markers).',

    goldenRulesAr: [
      'القاعدة 1: كل كلام في اللغة العربية ينحصر قطعاً في ثلاثة أصناف: اسم، فعل، حرف.',
      'القاعدة 2: الاسم يدل على معنى في نفسه غير مقترن بزمن، ويكفيه قبول علامة واحدة من علاماته الخمس.',
      'القاعدة 3: التنوين وأل التعريف علامتان خاصتان بالاسم لا تجتمعان في كلمة واحدة أبداً.',
      'القاعدة 4: الفعل الماضي يختص بقبول تاء الفاعل (كتبتُ) وتاء التأنيث الساكنة (كتبتْ).',
      'القاعدة 5: الفعل المضارع يختص بقبول أحرف الجزم والنصب والسين وسوف (سأكتب، لن أكتب).',
      'القاعدة 6: فعل الأمر يجمع بين الدلالة على الطلب بالصيغة وقبول ياء المخاطبة المؤنثة (اقرئي).',
      'القاعدة 7: الحرف كلمة لا معنى لها وحدها وتظهر فائدتها في تركيب الجملة، وجميع الحروف مبنية.'
    ],
    goldenRulesEn: [
      'Rule 1: All Arabic speech strictly subdivides into Noun, Verb, or Particle.',
      'Rule 2: Nouns denote meaning independent of time; passing 1 of 5 tests suffices.',
      'Rule 3: Nunation and Al- are exclusive to nouns and never coexist simultaneously.',
      'Rule 4: Past tense verbs uniquely accept Subject Taa and quiescent Feminine Taa.',
      'Rule 5: Present tense verbs uniquely accept particle operators (Lam, Lan, Seen, Saufa).',
      'Rule 6: Imperative verbs combine direct request meaning with acceptance of feminine Yaa.',
      'Rule 7: Particles hold contextual meaning only, orchestrate syntax, and are entirely indeclinable.'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-1-1',
        questionAr: 'صنف الكلمات التي تحتها خط في الآية الكريمة: ﴿وَقُلْ رَبِّ زِدْنِي عِلْمًا﴾ إلى أقسامها الثلاثة مع ذكر علامة كل كلمة.',
        questionEn: 'Classify the words in Quranic verse: "And say: My Lord, increase me in knowledge" specifying markers.',
        solutionStepsAr: [
          '1. "قُلْ": فعل أمر؛ لأنه يدل على الطلب ويقبل ياء المخاطبة المؤنثة (قُولِي).',
          '2. "رَبِّ": اسم؛ لأنه أُضيف إليه ضمير المتكلم المحذوف وقَبِلَ حرف النداء التقديري (يا ربِّ).',
          '3. "زِدْ": فعل أمر؛ دال على الدعاء والطلب ويقبل ياء المخاطبة (زِيدِي).',
          '4. "عِلْمًا": اسم؛ دليله قبول التنوين (تنوين الفتح) وصحة دخول أل عليه (العلم).'
        ],
        solutionStepsEn: [
          '1. "Qul": Imperative verb conveying command and accepting feminine Yaa (Qooli).',
          '2. "Rabbi": Noun accepting implicit vocative call (Ya Rabbi).',
          '3. "Zid": Imperative/supplicatory verb accepting feminine Yaa (Zeedi).',
          '4. "Ilman": Noun accepting explicit Nunation (Tanween) and the definite article.'
        ],
        answerAr: 'قُل: فعل أمر | رَبّ: اسم منادى | زِدْ: فعل أمر | عِلماً: اسم منون.',
        answerEn: 'Qul: Verb | Rabbi: Noun | Zid: Verb | Ilman: Noun.'
      },
      {
        id: 'ex-lang-1-2',
        questionAr: 'بين سبب امتناع دخول التنوين على الكلمات التالية: (يَشْرَبُ - فِي - القَلَمُ).',
        questionEn: 'State why Nunation cannot be appended to: (Yashrabu, Fi, Al-Qalamu).',
        solutionStepsAr: [
          '1. كلمة "يَشْرَبُ": فعل مضارع، والتنوين من علامات الأسماء الخاصة التي يمتنع دخولها على الأفعال.',
          '2. كلمة "فِي": حرف جر، والحروف مبنية ولا تقبل علامات الأسماء.',
          '3. كلمة "القَلَمُ": اسم لكنه مقترن بـ (أل التعريف)، والتنوين وأل ضدان لا يجتمعان في كلمة واحدة.'
        ],
        solutionStepsEn: [
          '1. "Yashrabu": Verb; verbs reject nominal nunation.',
          '2. "Fi": Particle; indeclinable and rejects noun markers.',
          '3. "Al-Qalamu": Noun with definite article "Al-"; Al- and Tanween are strictly mutually exclusive.'
        ],
        answerAr: 'يَشْرَبُ لأنه فعل | فِي لأنه حرف | القَلَمُ لاقترانه بأل التعريف المانعة للتنوين.',
        answerEn: 'Yashrabu is a verb | Fi is a particle | Al-Qalamu carries the definite article.'
      }
    ],

    assessment: {
      id: 'quiz-lang-1',
      lectureId: 'lang-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: أقسام الكلمة وعلامات التمييز',
      titleEn: 'Lecture 1 Assessment: Parts of Speech & Definitive Markers',
      passingScore: 80,
      questions: [
        {
          id: 'qlg1-1',
          textAr: 'أي من الكلمات التالية تُعد "اسماً" لأنها تقبل علامة التنوين ودخول أل التعريف؟',
          textEn: 'Which of the following is a noun accepting Tanween and the definite article?',
          optionsAr: ['شَجَرَةٌ', 'يَذْهَبُ', 'عَلَى', 'انْطَلَقَ'],
          optionsEn: ['Shajarah (Tree)', 'Yadhhab (Goes)', 'Ala (On)', 'Intalaqa (Launched)'],
          correctIndex: 0,
          conceptTestedAr: 'علامات الاسم الفارقة (التنوين وأل)',
          conceptTestedEn: 'Noun Identification Markers',
          explanationAr: 'كلمة "شجرةٌ" اسم لأنها تقبل التنوين، وأل التعريف (الشجرة)، والتاء المربوطة، وحروف الجر (على شجرةٍ). أما يذهب وانطلق فهما فعلان، وعلى حرف.',
          explanationEn: 'Shajarah is a noun because it readily accepts tanween, the definite article (Al-Shajarah), and prepositions.',
          difficulty: 'easy'
        },
        {
          id: 'qlg1-2',
          textAr: 'ما العلامة النحوية الفارقة التي يختص بها الفعل الماضي دون سائر الأفعال؟',
          textEn: 'What grammatical marker is uniquely exclusive to past tense verbs?',
          optionsAr: [
            'قبول تاء التأنيث الساكنة وتاء الفاعل المتحركة في آخره (مثل: نَجَحَتْ / نَجَحْتُ)',
            'قبول حرف الجزم "لَمْ" في أوله',
            'قبول سين الاستقبال "سـ"',
            'قبول دخول أل التعريف في أوله'
          ],
          optionsEn: [
            'Accepting quiescent feminine Taa and subject Taa suffixes (e.g. نجحت)',
            'Accepting jussive particle Lam prefix',
            'Accepting future particle Seen prefix',
            'Accepting definite article Al-'
          ],
          correctIndex: 0,
          conceptTestedAr: 'علامات الفعل الماضي الحصرية',
          conceptTestedEn: 'Past Tense Verb Verification Markers',
          explanationAr: 'الفعل الماضي يختص بقبول تاء التأنيث الساكنة (كتبَتْ) وتاء الفاعل المتحركة (كتبتُ). أما "لم" والسين فهما للمضارع، وأل للاسم.',
          explanationEn: 'Past tense verbs uniquely accept quiescent feminine Taa and agent Taa suffixes.',
          difficulty: 'easy'
        },
        {
          id: 'qlg1-3',
          textAr: 'عند فحص كلمة "اسْتَغْفَرَ"، كيف نثبت أنها فعل ماضٍ وليست اسماً ولا فعلاً مضارعاً؟',
          textEn: 'How do we prove that "Istaghfara" is a past verb and not a noun or present verb?',
          optionsAr: [
            'لأنها تقبل تاء التأنيث الساكنة في آخرها: "اسْتَغْفَرَتْ" وتمتنع عن قبول التنوين و"لَمْ"',
            'لأنها تبدأ بهمزة وصل فقط',
            'لأنها تقبل التنوين: "استغفارٌ"',
            'لأنها تقبل حرف الجر "في"'
          ],
          optionsEn: [
            'Accepts feminine Taa "Istaghfarat" while rejecting Tanween and Lam',
            'Because it begins with Hamzat Wasl',
            'Accepts tanween',
            'Accepts prepositions'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التطبيق العملي لاختبارات أزمنة الأفعال',
          conceptTestedEn: 'Applied Verb Tense Testing',
          explanationAr: '"استغفر" فعل ماضٍ لأنه يقبل تاء التأنيث (استغفرَتْ) وتاء الفاعل (استغفرتُ)، ولا يقبل علامات الاسم (لا يصح الاستغفرَ) ولا علامات المضارع.',
          explanationEn: 'Istaghfara accepts past-tense Taa suffixes (Istaghfarat) confirming past verb status.',
          difficulty: 'medium'
        },
        {
          id: 'qlg1-4',
          textAr: 'ما الضابط النحوي الصحيح للحرف في اللغة العربية؟',
          textEn: 'What is the precise grammatical definition of an Arabic particle (Harf)?',
          optionsAr: [
            'كلمة لا يقبل علامات الاسم ولا علامات الفعل، ولا يتضح معناه التام إلا مقترناً بغيره في جملة',
            'كلمة تدل على حدث مقترن بزمن المستقبل',
            'اسم مبني يقبل التنوين في الضرورة الشعرية',
            'فعل ناقص لا يحتاج إلى فاعل'
          ],
          optionsEn: [
            'Word rejecting noun and verb markers, revealing full meaning only when contextualized',
            'Word denoting action in future tense',
            'Declinable noun with poetical license',
            'Defective verb requiring no agent'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الحرف وضابطه النحوي السلبي والإيجابي',
          conceptTestedEn: 'Definition and Criteria of Particles',
          explanationAr: 'الحرف هو ما لا يصلح معه دليل الاسم ولا دليل الفعل، ودوره ربط الكلمات لبناء معانٍ سياقية (كالظرفية والابتداء والانتهاء).',
          explanationEn: 'A particle is identified by rejecting both noun and verb markers and functioning as a syntactic and semantic connector.',
          difficulty: 'hard'
        }
      ]
    }
  },
  {
    id: 'lang-2',
    order: 2,
    titleAr: 'المحاضرة 2: الجملة الاسمية وركناها الأساسيان: المبتدأ والخبر',
    titleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',
    subtitleAr: 'التعرف على المبتدأ المرفوع والخبر المتمم للمعنى، وعلامات الرفع الأصلية والفرعية وصور الخبر',
    subtitleEn: 'Master subject and predicate identification, nominative inflections, and diverse predicate structures.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-1',
    prerequisiteTitleAr: 'المحاضرة 1: أقسام الكلمة (الاسم والفعل والحرف) وعلامات التمييز',
    prerequisiteTitleEn: 'Lecture 1: Parts of Speech: Nouns, Verbs, Particles & Distinctions',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: الأعلام والمجتمع',
    unitTitleEn: 'Unit 2: Notable Figures & Society',
    lessonNumberAr: 'الدرس 2: الوظيفة النحوية: المبتدأ والخبر وعلامات رفعهما',
    lessonNumberEn: 'Lesson 2: Syntactic Roles: Subject, Predicate & Nominative Case',

    warmupHookAr: 'عندما تريد التعبير عن حقيقة ثابتة كقولك: "الصِّدْقُ خُلُقٌ عَظِيمٌ" أو "السَّمَاءُ صَافِيَةٌ"، فإنك تبدأ جملتك باسم لتبني عليه حكماً واضحاً ومكتملاً. هذا التركيب الثنائي المتماسك هو "الجملة الاسمية". كيف نحدد المبتدأ والخبر مهما طالت الجملة؟ وما هي علامات رفعهما في المفرد والمثنى وجمع المذكر السالم والأسماء الخمسة؟',
    warmupHookEn: 'Nominal sentences establish enduring truths by pairing a leading subject (Mubtada) with an informative predicate (Khabar). Master their syntactic agreement across singular, dual, and plural declensions.',

    learningOutcomesAr: [
      'أن يحدد الطالب ركني الجملة الاسمية (المبتدأ والخبر) في نصوص فصيحة',
      'أن يطبق الطالب حكم الرفع الإعرابي على المبتدأ والخبر بالعلامات الأصلية والفرعية',
      'أن يوضح الطالب صور الخبر المختلفة (مفرد، جملة فعلية، جملة اسمية، شبه جملة)',
      'أن يضبط الطالب أواخر المبتدأ والخبر ضبطاً إعرابياً صحيحاً بالشكل'
    ],
    learningOutcomesEn: [
      'Pinpoint Subject (Mubtada) and Predicate (Khabar) in authentic sentences',
      'Apply primary and secondary nominative case inflections accurately',
      'Distinguish predicate classifications: Single Word, Verbal Sentence, Nominal Sentence, Prepositional Phrase',
      'Vocalize and vocal-mark sentence terminal vowels according to strict Arabic grammar'
    ],

    vocabulary: [
      {
        termAr: 'الجملة الاسمية (Nominal Sentence)',
        termEn: 'Nominal Sentence',
        definitionAr: 'كل جملة تبتدئ باسم في الأصل، وتتألف من ركنين أساسيين هما المبتدأ والخبر.',
        definitionEn: 'A sentence commencing with a noun, fundamentally structured around Subject and Predicate.'
      },
      {
        termAr: 'المبتدأ (Subject / Mubtada)',
        termEn: 'Mubtada (Subject)',
        definitionAr: 'اسم صريح أو مؤول مرفوع، مجرد عن العوامل اللفظية غير الزائدة، يقع في صدر الجملة غالباً ليكون محور الحديث.',
        definitionEn: 'The primary nominative noun positioned as the thematic anchor of the nominal sentence.'
      },
      {
        termAr: 'الخبر (Predicate / Khabar)',
        termEn: 'Khabar (Predicate)',
        definitionAr: 'الجزء المنتظم منه مع المبتدأ جملة مفيدة تُتمم المعنى وتخبر عن حال المبتدأ.',
        definitionEn: 'The syntactically vital complement that completes the propositional meaning of the subject.'
      },
      {
        termAr: 'علامات الرفع الأصلية والفرعية (Nominative Markers)',
        termEn: 'Nominative Inflections',
        definitionAr: 'الضمة (العلامة الأصلية للمفرد وجمع التكسير وجمع المؤنث السالم)، والألف (للمثنى)، والواو (لجمع المذكر السالم والأسماء الخمسة).',
        definitionEn: 'Dammah (primary for singular/broken plural), Alif (for dual), and Waw (for sound masculine plural & five nouns).'
      }
    ],

    keyConceptsAr: [
      'تعريف الجملة الاسمية وركناها: المبتدأ والخبر',
      'حكم المبتدأ والخبر: الرفع دائماً',
      'علامات الرفع: الضمة (أصلية)، الألف (مثنى)، الواو (جمع مذكر سالم وأسماء خمسة)',
      'أنواع الخبر: مفرد، جملة (فعلية/اسمية)، شبه جملة (جار ومجرور أو ظرف)'
    ],
    keyConceptsEn: [
      'Nominal Sentence Architecture: Mubtada + Khabar',
      'Nominative Agreement Rule',
      'Primary vs Secondary Nominative Inflection Markers',
      'Predicate Typology: Single, Verbal, Phrasal'
    ],
    summaryAr: 'الجملة الاسمية تبدأ باسم وتتألف من ركنين مرفوعين: المبتدأ وهو المتحدث عنه، والخبر وهو الجزء الذي يكمل المعنى ويحقق الفائدة التامة للمستمع.',
    summaryEn: 'Nominal sentences unite a nominative subject and predicate to form a coherent statement carrying primary (Dammah) or secondary (Alif/Waw) inflections.',

    sections: [
      {
        titleAr: '1. ركنا الجملة الاسمية وحكمهما الإعرابي',
        titleEn: '1. Subject and Predicate Architecture & Invariant Nominative Rule',
        contentAr: 'تتكون الجملة الاسمية من ركنين أساسيين متلازمين:\n1. المبتدأ: وهو الاسم المرفوع الذي نبدأ به الجملة ونريد الإخبار عنه.\n2. الخبر: وهو الكلمة أو التركيب الذي يتمم معنى الجملة مع المبتدأ؛ فإذا سألت بعد ذكر المبتدأ: "ما به؟" أو "ما شأنه؟"، فإن الجواب هو الخبر.\n\nحكم المبتدأ والخبر: مرفوعان دائماً ما لم يدخل عليهما ناسخ.\nوعلامات رفعهما:\n- الضمة الظاهرة: في الاسم المفرد (الطالبُ مجتهدٌ)، وجمع التكسير (العلماءُ مصابيحُ)، وجمع المؤنث السالم (المعلماتُ مخلصاتٌ).\n- الألف: في المثنى (الطالبانِ مجتهدانِ).\n- الواو: في جمع المذكر السالم (المعلمونَ مخلصونَ)، وفي الأسماء الخمسة (أبوك رجلٌ فاضلٌ).',
        contentEn: 'Nominal sentences require two nominative pillars: Mubtada (subject) and Khabar (predicate). Inflections include Dammah (singular/broken plural), Alif (dual), and Waw (sound masculine plural and five nouns).',
        diagram: {
          id: 'diag-arabic-sentence-struct',
          figureNumberAr: 'شكل (2-1)',
          figureNumberEn: 'Figure (2-1)',
          titleAr: 'بنية الجملة الاسمية ومقارنتها بالجملة الفعلية',
          titleEn: 'Nominal Sentence Architecture vs Verbal Structure',
          captionAr: 'مخطط تفصيلي يوضح تركيب الجملة الاسمية (المبتدأ + الخبر) وحكمهما الإعرابي المرفوع، ومقارنتها بالجملة الفعلية.',
          captionEn: 'Structural schema contrasting Nominal sentences (Subject + Predicate) with Verbal sentences (Verb + Agent + Object).',
          diagramType: 'arabic_sentence_structure',
          takeawayFormulaAr: 'الجملة الاسمية = مبتدأ (مرفوع) + خبر (مرفوع متمم للمعنى)',
          takeawayFormulaEn: 'Nominal Sentence = Mubtada (Nominative) + Khabar (Nominative Complement)',
          keyLabels: [
            { tagAr: 'المبتدأ والخبر', tagEn: 'Subject & Predicate', color: '#818cf8' },
            { tagAr: 'علامات الرفع', tagEn: 'Nominative Markers', color: '#38bdf8' }
          ]
        },
        interactiveExample: {
          titleAr: 'تطبيق منهجي (2-1): تحديد المبتدأ والخبر وعلامات رفعهما الإعرابية',
          titleEn: 'Worked Example (2-1): Identifying Subject, Predicate & Inflection Markers',
          equation: 'المبتدأ المرفوع + الخبر المرفوع المتمم',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الجملة الأولى: "المُعَلِّمُونَ صَانِعُو الأَجْيَالِ".', 
              textEn: 'Sentence 1: "Teachers are the shapers of generations."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المبتدأ: "المُعَلِّمُونَ" -> مبتدأ مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم.', 
              textEn: 'Subject: "Al-Muallimoona" -> Nominative with Waw (Sound Masculine Plural).' 
            },
            { 
              stepNumber: 3, 
              textAr: 'الخبر: "صَانِعُو" -> خبر مرفوع وعلامة رفعه الواو لأنه جمع مذكر سالم، وحُذفت نونه للإضافة (صانعو الأجيال).', 
              textEn: 'Predicate: "Saaniou" -> Nominative with Waw; Nun dropped due to Idhafah annexation.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'الجملة الثانية: "أَخُوكَ ذُو خُلُقٍ حَسَنٍ". المبتدأ "أَخُوكَ" مرفوع بالواو لأنه من الأسماء الخمسة، والخبر "ذُو" مرفوع بالواو لأنه من الأسماء الخمسة.', 
              textEn: 'Sentence 2: "Akhooka dhoo khuluqin". Both subject and predicate are nominative with Waw (Five Nouns).' 
            }
          ],
          takeawayAr: 'الخبر لا يشترط أن يأتي ملاصقاً للمبتدأ مباشرة، بل هو الكلمة التي يكتمل بها المعنى والفائدة.',
          takeawayEn: 'The predicate need not strictly adjoin the subject; it is defined by completing the propositional assertion.'
        },
        tipsAr: ['إذا كان المبتدأ جمع تكسير لغير العاقل جاز الإخبار عنه بالمفرد المؤنث؛ نقول: "الجبالُ شاهقةٌ" أو "الجبالُ شاهقاتٌ".']
      },
      {
        titleAr: '2. أنواع وصور الخبر في الجملة الاسمية',
        titleEn: '2. Predicate Classifications: Single, Sentence & Phrasal Forms',
        contentAr: 'الخبر ليس دائماً كلمة مفردة، بل يأتي على ثلاثة أقسام رئيسة:\n\n1. خبر مفرد: ما ليس جملة ولا شبه جملة، حتى لو كان مثنى أو جمعاً (مثل: الطالبُ نشيطٌ، الطلابُ نشيطونَ).\n2. خبر جملة:\n   - جملة فعلية: (مثل: الطالبُ يُذَاكِرُ دُرُوسَهُ)؛ حيث الجملة الفعلية "يذاكر" في محل رفع خبر.\n   - جملة اسمية: (مثل: الحديقةُ أَزْهَارُهَا جَمِيلَةٌ)؛ وتشتمل على ضمير (الهاء) يعود على المبتدأ الأول.\n3. خبر شبه جملة:\n   - جار ومجرور: (مثل: العُصْفُورُ عَلَى الشَّجَرَةِ).\n   - ظرف زمان أو مكان: (مثل: السَّفَرُ غَداً، القَائِدُ أَمَامَ الجُنُودِ).',
        contentEn: 'Predicates present across 3 typologies: Single Word (Mufrad), Full Sentence (Verbal/Nominal requiring a linking pronoun), and Phrasal (Prepositional / Adverbial quasi-sentence).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (2-2): تمييز أنواع الخبر المتعددة وإعرابها محلياً',
          titleEn: 'Worked Example (2-2): Discriminating Predicate Typologies & Local Parsing',
          equation: 'المبتدأ + [الخبر ونوعه: مفرد / جملة فعلية / جملة اسمية / شبه جملة]',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'النموذج 1: "المُسْلِمُ يُحِبُّ الخَيْرَ". المبتدأ: المسلمُ. الخبر: جملة "يُحِبُّ الخيرَ" (جملة فعلية في محل رفع خبر).', 
              textEn: 'Model 1: "The Muslim loves goodness". Predicate: "Loves goodness" (Verbal sentence in nominative place).' 
            },
            { 
              stepNumber: 2, 
              textAr: 'النموذج 2: "المَدْرَسَةُ فِنَاؤُهَا وَاسِعٌ". المبتدأ الأول: المدرسة. الخبر: "فناؤها واسع" (جملة اسمية مركبة من مبتدأ ثانٍ وخبره في محل رفع خبر المبتدأ الأول).', 
              textEn: 'Model 2: "The school, its courtyard is vast". Predicate: Embedded nominal sentence with linking pronoun.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'النموذج 3: "النَّصْرُ قَرِيبٌ". المبتدأ: النصر. الخبر: "قريب" (خبر مفرد مرفوع بالضمة).', 
              textEn: 'Model 3: "Victory is near". Predicate: Single word nominative with Dammah.' 
            }
          ],
          takeawayAr: 'خبر الجملة الاسمية أو الفعلية يكون دائماً "في محل رفع"، ولا بد أن يشتمل على رابط (ضمير) يربطه بالمبتدأ.',
          takeawayEn: 'Sentence predicates occupy nominative syntactic place and require an explicit or implicit referencing pronoun.'
        },
        tipsAr: ['شبه الجملة (الجار والمجرور أو الظرف) متعلق بمحذوف تقديره "كائن" أو "مستقر".']
      }
    ],

    conceptMapSummaryAr: 'الجملة الاسمية تبدأ باسم وتتكون من: مبتدأ (مرفوع) + خبر (مرفوع متمم للمعنى). علامات الرفع: الضمة (مفرد، جمع تكسير، مؤنث سالم)، الألف (مثنى)، الواو (مذكر سالم، أسماء خمسة). ويأتي الخبر: مفرداً، أو جملة اسمية/فعلية، أو شبه جملة.',
    conceptMapSummaryEn: 'Nominal Sentence = Subject (Nominative) + Predicate (Nominative Complement). Inflections: Dammah, Alif, Waw. Predicate Forms: Single Word, Sentence, Prepositional/Adverbial Phrase.',

    goldenRulesAr: [
      'القاعدة 1: الجملة الاسمية تبدأ باسم وتتألف من ركنين متلازمين هما المبتدأ والخبر.',
      'القاعدة 2: المبتدأ والخبر كلاهما مرفوع دائماً في أصل اللغة.',
      'القاعدة 3: الضمة هي علامة الرفع الأصلية للمفرد وجمع التكسير وجمع المؤنث السالم.',
      'القاعدة 4: الألف هي علامة رفع المثنى (الكتابان مفيدان).',
      'القاعدة 5: الواو هي علامة رفع جمع المذكر السالم (المجتهدون فائزون) والأسماء الخمسة (أخوك ذو فضل).',
      'القاعدة 6: الخبر هو الجزء المتمم للفائدة، ولا يشترط أن يلي المبتدأ مباشرة.',
      'القاعدة 7: خبر الجملة (الفعلية أو الاسمية) وخبر شبه الجملة يكون في محل رفع.'
    ],
    goldenRulesEn: [
      'Rule 1: Nominal sentences commence with a noun and require Subject + Predicate.',
      'Rule 2: Subject and predicate are strictly nominative by default.',
      'Rule 3: Dammah is the cardinal primary nominative marker.',
      'Rule 4: Alif is the secondary nominative marker for dual nouns.',
      'Rule 5: Waw is the secondary nominative marker for sound masculine plurals and Five Nouns.',
      'Rule 6: Predicates are defined by informational completion rather than strict adjacent adjacency.',
      'Rule 7: Sentential and phrasal predicates occupy nominative syntactic place (Fee Mahalli Raf).'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-2-1',
        questionAr: 'أعرب الجملة التالية إعراباً تفصيلياً تاماً: "الطَّالِبَانِ المُجْتَهِدَانِ فَائِزَانِ بالجَائِزَةِ".',
        questionEn: 'Fully parse the sentence: "The two diligent students are winners of the prize."',
        solutionStepsAr: [
          '1. "الطَّالِبَانِ": مبتدأ مرفوع وعلامة رفعه الألف لأنه مثنى، والنون عوض عن التنوين في الاسم المفرد.',
          '2. "المُجْتَهِدَانِ": نعت (صفة) مرفوع وعلامة رفعه الألف لأنه مثنى (لم يتمم المعنى بل وصف المبتدأ).',
          '3. "فَائِزَانِ": خبر المبتدأ مرفوع وعلامة رفعه الألف لأنه مثنى (تم به المعنى).',
          '4. "بالجَائِزَةِ": الباء حرف جر، والجائزةِ اسم مجرور بالكسرة الظاهرة.'
        ],
        solutionStepsEn: [
          '1. "Al-Talibani": Subject nominative with Alif (Dual).',
          '2. "Al-Mujtahidani": Adjective nominative with Alif.',
          '3. "Faaizani": Predicate nominative with Alif (Dual) completing propositional sense.',
          '4. "Bil-Jaaizati": Preposition + Genitive Noun with Kasrah.'
        ],
        answerAr: 'الطالبان: مبتدأ مرفوع بالألف | المجتهدان: نعت مرفوع بالألف | فائزان: خبر مرفوع بالألف | بالجائزة: جار ومجرور.',
        answerEn: 'Subject, Adjective, Predicate (all dual nominative with Alif), followed by prepositional phrase.'
      },
      {
        id: 'ex-lang-2-2',
        questionAr: 'عين الخبر ونوعه في الجملة التالية: ﴿وَاللهُ يَعْلَمُ وَأَنْتُمْ لَا تَعْلَمُونَ﴾.',
        questionEn: 'Identify the predicate and its type in the verse: "And Allah knows while you do not know."',
        solutionStepsAr: [
          '1. المبتدأ هو لفظ الجلالة "اللهُ" (مبتدأ مرفوع بالضمة الظاهرة).',
          '2. الكلمة التي أخبرت عن المبتدأ وتممت المعنى هي الفعل "يَعْلَمُ" مع فاعله المستتر (تقديره هو).',
          '3. إذن نوع الخبر: جملة فعلية (جملة "يعلم" في محل رفع خبر المبتدأ).'
        ],
        solutionStepsEn: [
          '1. Subject is the Divine Name "Allah" (Nominative with Dammah).',
          '2. Complementing utterance is the verbal phrase "Yalamu" (knows) with implied pronoun.',
          '3. Predicate Classification: Verbal Sentence in nominative place.'
        ],
        answerAr: 'الخبر هو الجملة الفعلية "يَعْلَمُ" (في محل رفع خبر).',
        answerEn: 'Predicate: The verbal sentence "Yalamu" (in nominative place).'
      }
    ],

    assessment: {
      id: 'quiz-lang-2',
      lectureId: 'lang-2',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثانية: المبتدأ والخبر وعلامات رفعهما',
      titleEn: 'Lecture 2 Assessment: Nominal Sentences Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qlg2-1',
          textAr: 'في جملة "المُهَنْدِسُونَ البَارِعُونَ مُكَرَّمُونَ"، ما هي علامة رفع المبتدأ والخبر؟',
          textEn: 'In "The ingenious engineers are honored", what is the nominative marker?',
          optionsAr: ['الواو لأنه جمع مذكر سالم', 'الضمة الظاهرة', 'الألف لأنه مثنى', 'ثبوت النون'],
          optionsEn: ['Waw (Sound Masculine Plural)', 'Dammah', 'Alif (Dual)', 'Retained Nun'],
          correctIndex: 0,
          conceptTestedAr: 'علامات الرفع الفرعية لجمع المذكر السالم',
          conceptTestedEn: 'Secondary Nominative Markers for Plurals',
          explanationAr: 'جمع المذكر السالم يُرفع بالواو نيابة عن الضمة، فالمبتدأ (المهندسون) والخبر (مكرمون) كلاهما مرفوع وعلامة رفعه الواو.',
          explanationEn: 'Sound masculine plurals take Waw as their secondary nominative inflection marker.',
          difficulty: 'easy'
        },
        {
          id: 'qlg2-2',
          textAr: 'ما نوع الخبر في جملة: "المُؤْمِنُ أَخْلَاقُهُ سَامِيَةٌ"؟',
          textEn: 'What is the predicate type in: "The believer, his morals are sublime"?',
          optionsAr: ['خبر جملة اسمية', 'خبر مفرد', 'خبر جملة فعلية', 'خبر شبه جملة'],
          optionsEn: ['Nominal Sentence Predicate', 'Single Word Predicate', 'Verbal Sentence Predicate', 'Phrasal Predicate'],
          correctIndex: 0,
          conceptTestedAr: 'صور الخبر: الجملة الاسمية ورابط الضمير',
          conceptTestedEn: 'Nominal Sentence Predicate Identification',
          explanationAr: '"أخلاقه سامية" جملة اسمية مركبة من مبتدأ ثانٍ (أخلاق) متصل بضمير (الهاء) وخبر للمبتدأ الثاني (سامية)، والجملة الاسمية كلها في محل رفع خبر للمبتدأ الأول (المؤمن).',
          explanationEn: 'The clause constitutes an embedded nominal sentence with a linking pronoun functioning as the primary predicate.',
          difficulty: 'medium'
        },
        {
          id: 'qlg2-3',
          textAr: 'في جملة "المُعَلِّمُ أَمَامَ التَّلَامِيذِ"، ما هو إعراب "أَمَامَ" وموقع شبه الجملة؟',
          textEn: 'In "The teacher is in front of the students", what is the syntactic role of "Amama"?',
          optionsAr: [
            'ظرف مكان منصوب، وشبه الجملة متعلق بمحذوف خبر في محل رفع',
            'مبتدأ ثانٍ مرفوع بالضمة',
            'مفعول به منصوب للفعل المحذوف',
            'نعت منصوب للمعلم'
          ],
          optionsEn: [
            'Adverb of place (accusative), with the phrase functioning as predicate in nominative place',
            'Second subject nominative with Dammah',
            'Direct object accusative',
            'Adjective'
          ],
          correctIndex: 0,
          conceptTestedAr: 'إعراب خبر شبه الجملة الظرفي',
          conceptTestedEn: 'Adverbial Predicate Parsing',
          explanationAr: '"أمامَ" ظرف مكان منصوب، وشبه الجملة الظرفية متعلق بمحذوف تقديره "كائن" أو "مستقر" في محل رفع خبر للمبتدأ "المعلم".',
          explanationEn: 'Amama is an adverb of place forming a locative phrasal predicate in the nominative place.',
          difficulty: 'medium'
        },
        {
          id: 'qlg2-4',
          textAr: 'أي من الجمل التالية كُتبت وضُبطت إعرابياً بشكل سليم وصحيح 100%؟',
          textEn: 'Which sentence is 100% grammatically correct in nominative inflection?',
          optionsAr: [
            'أَبُوكَ ذُو عِلْمٍ وَفَضْلٍ',
            'أَبَاكَ ذَا عِلْمٍ وَفَضْلٍ',
            'أَبِيكَ ذِي عِلْمٍ وَفَضْلٍ',
            'أَبُوكَ ذَا عِلْمٍ وَفَضْلٍ'
          ],
          optionsEn: [
            'Abooka dhoo ilmin (Both with Waw)',
            'Abaaka dhaa ilmin (Both with Alif)',
            'Abeeka dhee ilmin (Both with Yaa)',
            'Abooka dhaa ilmin'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق علامات رفع الأسماء الخمسة في المبتدأ والخبر',
          conceptTestedEn: 'Five Nouns Nominative Agreement in Subject & Predicate',
          explanationAr: 'الأسماء الخمسة تُرفع بالواو؛ فالمبتدأ "أَبُوكَ" مرفوع بالواو، والخبر "ذُو" مرفوع بالواو أيضاً.',
          explanationEn: 'Both subject and predicate from the Five Nouns take Waw in the nominative case (Abooka Dhoo).',
          difficulty: 'hard'
        }
      ]
    }
  },
  {
    id: 'lang-3',
    order: 3,
    titleAr: 'المحاضرة 3: الجملة الفعلية: الفعل والفاعل وعلامات الإعراب',
    titleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',
    subtitleAr: 'فهم أركان الجملة الفعلية، وأحكام الفاعل المرفوع وصوره المتعددة وعلامات إعرابه ومفهوم المفعول به',
    subtitleEn: 'Master verb types, explicit, attached, and implicit agents, case markers, and transitivity.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-2',
    prerequisiteTitleAr: 'المحاضرة 2: الجملة الاسمية وركناها الأساسيان: المبتدأ والخبر',
    prerequisiteTitleEn: 'Lecture 2: Nominal Sentences: Subject & Predicate Essentials',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: الوطن والعطاء',
    unitTitleEn: 'Unit 3: Homeland & Dedication',
    lessonNumberAr: 'الدرس 3: الوظيفة النحوية: الجملة الفعلية والفاعل وأنواعه',
    lessonNumberEn: 'Lesson 3: Syntactic Roles: Verbal Sentences, Agents & Types',

    warmupHookAr: 'إذا كانت الجملة الاسمية تعبر عن الثبوت والاستقرار، فإن "الجملة الفعلية" هي لغة الحركة والحدث والتجدد في العربية. لا يمكن لأي فعل في الكون أن يحدث من تلقاء نفسه؛ فلكل عمل فاعل أوجده! كيف نحدد الفاعل حين يختفي في ضمير مستتر أو يتصل كحرف واحد بالفعل؟ وكيف نميز بين الفاعل المرفوع والمفعول به المنصوب؟',
    warmupHookEn: 'Verbal sentences bring movement and dynamism to language. Every action demands an agent (Faail). Master explicit, attached, and implicit pronoun agents with infallible precision.',

    learningOutcomesAr: [
      'أن يحدد الطالب ركني الجملة الفعلية الأساسيين (الفعل والفاعل) في شواهد متنوعة',
      'أن يميز الطالب بين صور الفاعل الثلاث (اسم ظاهر، ضمير متصل، ضمير مستتر)',
      'أن يضبط الطالب الفاعل بعلامة الرفع المناسبة (الضمة، الألف، الواو)',
      'أن يفرق الطالب بين الفعل اللازم والفعل المتعدي الذي ينصب مفعولاً به'
    ],
    learningOutcomesEn: [
      'Locate primary pillars of verbal sentences (Verb and Faail / Agent)',
      'Distinguish 3 agent forms: Explicit Noun, Attached Pronoun, and Latent / Implicit Pronoun',
      'Vocalize agents with correct nominative markers across all noun subclasses',
      'Differentiate intransitive vs transitive verbs governing accusative objects'
    ],

    vocabulary: [
      {
        termAr: 'الجملة الفعلية (Verbal Sentence)',
        termEn: 'Verbal Sentence',
        definitionAr: 'كل جملة تبدأ بفعل تام (ماضٍ أو مضارع أو أمر)، وتتألف أساساً من فعل وفاعل.',
        definitionEn: 'A sentence commencing with a finite verb and constituted fundamentally of Verb and Agent.'
      },
      {
        termAr: 'الفاعل (Faail / Agent)',
        termEn: 'Faail (Agent / Subject of Verb)',
        definitionAr: 'اسم مرفوع أو في محل رفع، يقع بعد فعل تام مبني للمعلوم ويدل على من قام بالفعل أو اتصف به.',
        definitionEn: 'The nominative entity succeeding an active verb, denoting the doer or bearer of the action.'
      },
      {
        termAr: 'الضمير المتصل (Attached Pronoun Agent)',
        termEn: 'Attached Pronoun',
        definitionAr: 'ضمير يتصل بالفعل مباشرة ليكون في محل رفع فاعل (مثل تاء الفاعل، نا الفاعلين، واو الجماعة، ألف الاثنين، ياء المخاطبة، نون النسوة).',
        definitionEn: 'Nominative pronoun suffixes directly fusing to verbs (Taa, Na, Waw of Plurality, Alif of Dual, Nun of Femininity).'
      },
      {
        termAr: 'الضمير المستتر (Implicit / Latent Pronoun)',
        termEn: 'Latent Pronoun',
        definitionAr: 'ضمير غير منطوق ولا مكتوب يُقدر في الذهن ويكون في محل رفع فاعل (مثل: محمدٌ قَرَأَ [أي: هو]).',
        definitionEn: 'An unpronounced, implicit subject pronoun mentally inferred from context (e.g. He/She/I).'
      }
    ],

    keyConceptsAr: [
      'أركان الجملة الفعلية: فعل تام + فاعل مرفوع',
      'صور الفاعل: اسم ظاهر، ضمير متصل، ضمير مستتر',
      'الفاعل يقع دائماً بعد الفعل ولا يتقدم عليه أبداً في الإعراب',
      'الفعل اللازم يكتفي بفاعله، والمتعدي يتعدى لينصب مفعولاً به'
    ],
    keyConceptsEn: [
      'Verbal Sentence Foundations: Finite Verb + Nominative Agent',
      'Three Agent Typologies: Explicit, Attached, Latent',
      'Syntactic Precedence Rule (Agent strictly follows verb)',
      'Intransitive vs Transitive Verbal Complements'
    ],
    summaryAr: 'تبدأ الجملة الفعلية بفعل يعبر عن حدث مقترن بزمن، ويليه الفاعل المرفوع دائماً والذي قد يكون اسماً ظاهراً أو ضميراً متصلاً أو مستتراً، وقد يحتاج الفعل المتعدي إلى مفعول به منصوب لتتم الفائدة.',
    summaryEn: 'Verbal sentences originate with an action verb followed by its nominative agent (explicit noun or pronoun), occasionally completed by an accusative object when transitive.',

    sections: [
      {
        titleAr: '1. أركان الجملة الفعلية وأحكام الفاعل وصوره',
        titleEn: '1. Verbal Sentence Pillars & Agent Typologies',
        contentAr: 'تتألف الجملة الفعلية من ركنين رئيسين:\n1. الفعل: وهو اللبنة الأولى الدالة على الحدث والزمن.\n2. الفاعل: وهو الاسم المرفوع الذي يدل على من فعل الفعل أو اتصف به، وحكمه الإعرابي: الرَّفْعُ دائماً.\n\nيأتي الفاعل على ثلاث صور رئيسة:\n- أولاً: اسم ظاهر: (مثل: حَفِظَ الطَّالِبُ القُرْآنَ) -> الفاعل "الطالبُ" اسم مفرد مرفوع بالضمة.\n- ثانياً: ضمير متصل: (مثل: كَتَبْتُ الواجبَ - الطلابُ حَضَرُوا - الفتياتُ كَتَبْنَ) -> التاء، واو الجماعة، ونون النسوة ضمائر متصلة مبنية في محل رفع فاعل.\n- ثالثاً: ضمير مستتر: (مثل: الجنديُّ دَافَعَ عن الوطنِ -> أي دافع [هُوَ] - اكْتُبْ دَرْسَكَ -> أي اكتب [أَنْتَ]).',
        contentEn: 'Verbal sentences feature Verb and Agent. The Agent is strictly nominative and manifests as an Explicit Noun, Attached Pronoun (e.g. Taa, Waw, Nun), or Latent Pronoun (Huwa, Anta, Ana).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (3-1): تحديد صور الفاعل وإعرابه في شواهد متعددة',
          titleEn: 'Worked Example (3-1): Identifying Agent Forms & Syntactic Parsing',
          equation: 'الفعل + السؤال: (مَن فعل الحدث؟) = الفاعل وصورته',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'المثال 1: "انْتَصَرَ الحَقُّ". نسأل: من انتصر؟ الجواب: "الحَقُّ" -> فاعل اسم ظاهر مرفوع وعلامة رفعه الضمة الظاهرة.', 
              textEn: 'Example 1: "Truth triumphed". Agent: "Al-Haqqu" (Explicit Noun nominative with Dammah).' 
            },
            { 
              stepNumber: 2, 
              textAr: 'المثال 2: "سَاعَدْتُ المُحْتَاجِينَ". نسأل: من ساعد؟ تاء المتكلم -> التاء ضمير متصل مبني على الضم في محل رفع فاعل.', 
              textEn: 'Example 2: "I helped the needy". Agent: Attached Taa pronoun in nominative place.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'المثال 3: "خَالِدٌ قَرَأَ الكِتَابَ". الفعل "قَرَأَ" والفاعل ضمير مستتر جوازاً تقديره "هُوَ" يعود على خالد (ولا يجوز إعراب خالد فاعلاً لأنه تقدم على الفعل).', 
              textEn: 'Example 3: "Khalid read the book". Agent is an implicit pronoun (Huwa); Khalid is the preceding subject.' 
            }
          ],
          takeawayAr: 'الفاعل لا يتقدم على فعله أبداً؛ فإذا تقدم الاسم على الفعل أصبح "مبتدأ" والفاعل ضميراً مستتراً يعود عليه.',
          takeawayEn: 'In Arabic grammar, the Agent never precedes the verb; if a noun precedes, it becomes a Subject (Mubtada).'
        },
        tipsAr: ['تاء التأنيث الساكنة (كَتَبَتْ) حرف لا محل له من الإعراب وليست فاعلاً؛ الفاعل بعدها مستتر (هي) أو اسم ظاهر (كتبت هندٌ).']
      },
      {
        titleAr: '2. الفعل اللازم والمتعدي والمفعول به المنصوب',
        titleEn: '2. Intransitive vs Transitive Verbs & Accusative Objects',
        contentAr: 'ينقسم الفعل من حيث حاجته إلى مفعول به إلى نوعين:\n1. الفعل اللازم: هو الفعل الذي يكتفي بفاعله لإتمام معنى الجملة ولا ينصب مفعولاً به (مثل: نَامَ الطِّفْلُ، أَشْرَقَتِ الشَّمْسُ، جَلَسَ الضَّيْفُ).\n2. الفعل المتعدي: هو الفعل الذي لا يكتفي بفاعله، بل يحتاج إلى مفعول به واحد أو أكثر لإتمام معنى الجملة (مثل: كَرَّمَ المُعَلِّمُ المُتَفَوِّقِينَ).\n\nالمفعول به: اسم منصوب يدل على من وقع عليه فعل الفاعل.\nعلامات نصبه:\n- الفتحة: في المفرد وجمع التكسير (قرأتُ كتاباً / كتباً).\n- الياء: في المثنى وجمع المذكر السالم (كافأتُ الطالبَيْنِ / الفائزِينَ).\n- الكسرة نيابة عن الفتحة: في جمع المؤنث السالم (شكرتُ المعلماتِ).\n- الألف: في الأسماء الخمسة (أكرمتُ أباك).',
        contentEn: 'Verbs are Intransitive (Lazim, satisfying meaning with Agent alone) or Transitive (Mutaaddi, governing accusative objects). Accusative markers include Fathah (singular), Yaa (dual/plural), Kasrah (sound feminine plural), and Alif (Five Nouns).',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (3-2): تمييز الفعل اللازم من المتعدي وإعراب المفعول به',
          titleEn: 'Worked Example (3-2): Transitivity Testing & Direct Object Inflections',
          equation: 'الفعل + (ماذا / هـ الغيبة) -> إن قبلها فهو متعدٍ',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'فحص "ذَهَبَ": هل يصح أن نقول "ماذا ذهب؟" أو "ذهبَه"؟ لا يصح -> إذن "ذهب" فعل لازم يكتفي بفاعله (ذهب الطالبُ إلى المدرسةِ).', 
              textEn: 'Test "Dhahaba" (went): Cannot take direct object pronoun -> Intransitive.' 
            },
            { 
              stepNumber: 2, 
              textAr: 'فحص "شَرَحَ": يصح أن نقول "شَرَحَهُ المعلمُ" و"ماذا شرح؟ شرحَ الدرسَ" -> إذن "شرح" فعل متعدٍ.', 
              textEn: 'Test "Sharaha" (explained): Readily accepts object pronoun (Sharahahu) -> Transitive.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'إعراب المفعول به في: "كَرَّمَتِ المَدْرَسَةُ الطَّالِبَاتِ المُتَفَوِّقَاتِ": "الطَّالِبَاتِ" مفعول به منصوب وعلامة نصبه الكسرة نيابة عن الفتحة لأنه جمع مؤنث سالم.', 
              textEn: 'Parse: "Al-Talibati" is direct object accusative with Kasrah substituting for Fathah (Sound Feminine Plural).' 
            }
          ],
          takeawayAr: 'علامة نصب جمع المؤنث السالم هي الكسرة نيابة عن الفتحة وهي من أهم مواضع الاختبارات النحوية.',
          takeawayEn: 'Sound feminine plurals take Kasrah as an accusative substitution marker, a prime testing focal point.'
        },
        tipsAr: ['للتفريق السريع بين اللازم والمتعدي: صل بالفعل هاء الغيبة، فإن قبلها فهو متعدٍ (فَهِمَ -> فَهِمَهُ).']
      }
    ],

    conceptMapSummaryAr: 'الجملة الفعلية = فعل تام + فاعل مرفوع (+ مفعول به منصوب إن كان الفعل متعدياً). صور الفاعل: اسم ظاهر، ضمير متصل (توانينا)، ضمير مستتر. علامات رفع الفاعل: الضمة، الألف، الواو. علامات نصب المفعول به: الفتحة، الياء، الكسرة، الألف.',
    conceptMapSummaryEn: 'Verbal Sentence = Finite Verb + Nominative Agent (+ Accusative Object if transitive). Agent Forms: Explicit Noun, Attached Pronoun, Latent Pronoun. Nominative Markers: Dammah, Alif, Waw.',

    goldenRulesAr: [
      'القاعدة 1: الجملة الفعلية تبدأ بفعل تام، ولا بد لكل فعل من فاعل يقوم به.',
      'القاعدة 2: الفاعل مرفوع دائماً، ولا يتقدم على فعله في الإعراب مطلقاً.',
      'القاعدة 3: ضمائر الرفع المتصلة المجموعة في (تَوَانَيْنَا) تكون دائماً في محل رفع فاعل.',
      'القاعدة 4: الضمير المستتر يقدر بـ (هو، هي، أنا، نحن، أنت) حسب سياق الفعل.',
      'القاعدة 5: الفعل اللازم يكتفي بفاعله، بينما الفعل المتعدي يتعدى لنصب مفعول به.',
      'القاعدة 6: المفعول به منصوب دائماً، وتكون علامة نصبه الكسرة في جمع المؤنث السالم والألف في الأسماء الخمسة.',
      'القاعدة 7: تاء التأنيث الساكنة حرف لا محل له من الإعراب، بينما تاء الفاعل المتحركة ضمير في محل رفع فاعل.'
    ],
    goldenRulesEn: [
      'Rule 1: Verbal sentences commence with a finite verb requiring an agent.',
      'Rule 2: The Agent is strictly nominative and never precedes its governing verb in syntax.',
      'Rule 3: Attached nominative pronouns (Tawanayna) occupy nominative Faail place.',
      'Rule 4: Latent pronouns are inferred contextually (Huwa, Hiya, Ana, Nahnu, Anta).',
      'Rule 5: Intransitive verbs suffice with an agent; transitive verbs govern accusative objects.',
      'Rule 6: Direct objects are strictly accusative (taking Kasrah for feminine plurals and Alif for Five Nouns).',
      'Rule 7: Quiescent feminine Taa is a mere letter, whereas mobile agent Taa is a full pronoun.'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-3-1',
        questionAr: 'استخرج الفاعل وبين نوعه وعلامة إعرابه في الجملة: ﴿إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ * وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا﴾.',
        questionEn: 'Extract the agents, their types, and inflections in Surah An-Nasr.',
        solutionStepsAr: [
          '1. الفعل "جَاءَ": الفاعل هو "نَصْرُ" (نوعه: اسم ظاهر، مرفوع بالضمة الظاهرة).',
          '2. الفعل "رَأَيْتَ": الفاعل هو "التاء" المتحركة (نوعه: ضمير متصل مبني في محل رفع فاعل).',
          '3. الفعل "يَدْخُلُونَ": الفاعل هو "واو الجماعة" (نوعه: ضمير متصل مبني في محل رفع فاعل).'
        ],
        solutionStepsEn: [
          '1. "Jaa-a": Agent is "Nasru" (Explicit Noun, nominative with Dammah).',
          '2. "Ra-ayta": Agent is attached Taa pronoun in nominative place.',
          '3. "Yadkhuloona": Agent is attached Waw of plurality in nominative place.'
        ],
        answerAr: '1) نَصْرُ: اسم ظاهر مرفوع بالضمة | 2) التاء في رأيت: ضمير متصل | 3) الواو في يدخلون: ضمير متصل.',
        answerEn: '1) Nasru: Explicit Noun | 2) Taa: Attached Pronoun | 3) Waw: Attached Pronoun.'
      },
      {
        id: 'ex-lang-3-2',
        questionAr: 'أعرب ما تحته خط في الجملة: "شَكَرَ المُدِيرُ <u>المُعَلِّمَاتِ المُخْلِصَاتِ</u>".',
        questionEn: 'Fully parse the underlined phrase: "The principal thanked the dedicated female teachers."',
        solutionStepsAr: [
          '1. "المُعَلِّمَاتِ": مفعول به منصوب وعلامة نصبه الكسرة الظاهرة نيابة عن الفتحة لأنه جمع مؤنث سالم.',
          '2. "المُخْلِصَاتِ": نعت (صفة) منصوب وعلامة نصبه الكسرة الظاهرة لأنه يتبع المنعوت جمع المؤنث السالم في النصب.'
        ],
        solutionStepsEn: [
          '1. "Al-Muallimati": Direct object accusative with Kasrah substituting for Fathah (Sound Feminine Plural).',
          '2. "Al-Mukhlisati": Adjective accusative with Kasrah following its qualified noun.'
        ],
        answerAr: 'المعلماتِ: مفعول به منصوب بالكسرة نيابة عن الفتحة | المخلصاتِ: نعت منصوب بالكسرة.',
        answerEn: 'Direct object and modifying adjective, both accusative with Kasrah.'
      }
    ],

    assessment: {
      id: 'quiz-lang-3',
      lectureId: 'lang-3',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثالثة: الجملة الفعلية والفاعل',
      titleEn: 'Lecture 3 Assessment: Verbal Sentences Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qlg3-1',
          textAr: 'في جملة "كَتَبْتُ الوَاجِبَ"، ما هو الموقع الإعرابي لـ "التاء" المتحركة؟',
          textEn: 'In "I wrote the homework", what is the syntactic role of the attached Taa?',
          optionsAr: ['ضمير متصل مبني في محل رفع فاعل', 'تاء التأنيث لا محل لها من الإعراب', 'مفعول به مقدم', 'نعت للفعل'],
          optionsEn: ['Attached pronoun in nominative place as Faail (Agent)', 'Quiescent feminine marker', 'Fronted object', 'Adjective'],
          correctIndex: 0,
          conceptTestedAr: 'إعراب تاء الفاعل كضمير متصل',
          conceptTestedEn: 'Attached Pronoun Agent Parsing',
          explanationAr: 'التاء المتحركة (كتبتُ / كتبتَ / كتبتِ) هي تاء الفاعل، وهي ضمير متصل مبني في محل رفع فاعل.',
          explanationEn: 'The mobile Taa is the subject pronoun functioning syntactically as the nominative agent.',
          difficulty: 'easy'
        },
        {
          id: 'qlg3-2',
          textAr: 'في جملة "المُعَلِّمُ شَرَحَ الدَّرْسَ"، أين يقع الفاعل للفعل "شَرَحَ"؟',
          textEn: 'In "The teacher explained the lesson", where is the agent of "Sharaha"?',
          optionsAr: [
            'ضمير مستتر جوازاً تقديره (هُوَ) يعود على المعلم',
            'كلمة (المعلم) المتقدمة في أول الجملة',
            'كلمة (الدرس)',
            'الفعل نفسه'
          ],
          optionsEn: [
            'Implicit pronoun (Huwa) referring back to the teacher',
            'The preceding word (Al-Muallim)',
            'The word (Al-Dars)',
            'The verb itself'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفاعل ضميراً مستتراً وعدم تقدم الفاعل على الفعل',
          conceptTestedEn: 'Latent Pronoun Agent & Non-Precedence Rule',
          explanationAr: 'الفاعل لا يتقدم على الفعل مطلقاً؛ لذا "المعلم" مبتدأ مرفوع، وفاعل "شرح" ضمير مستتر تقديره (هو) يعود على المعلم.',
          explanationEn: 'The agent cannot precede its verb; thus "Al-Muallim" is the subject and the verb holds a latent pronoun agent (Huwa).',
          difficulty: 'medium'
        },
        {
          id: 'qlg3-3',
          textAr: 'ما هي علامة نصب المفعول به في جملة: "احْتَرَمْتُ ذَا الفَضْلِ وَالعِلْمِ"؟',
          textEn: 'What is the accusative marker for the object in: "I respected the possessor of merit"?',
          optionsAr: ['الألف لأنه من الأسماء الخمسة', 'الفتحة الظاهرة', 'الياء لأنه مثنى', 'الكسرة'],
          optionsEn: ['Alif (Five Nouns)', 'Fathah', 'Yaa', 'Kasrah'],
          correctIndex: 0,
          conceptTestedAr: 'علامات نصب الأسماء الخمسة',
          conceptTestedEn: 'Five Nouns Accusative Case Markers',
          explanationAr: 'الأسماء الخمسة تُنصب بالألف نيابة عن الفتحة؛ فكلمة "ذَا" مفعول به منصوب وعلامة نصبه الألف لأنه من الأسماء الخمسة.',
          explanationEn: 'The Five Nouns take Alif as the accusative inflection marker (Dhaa).',
          difficulty: 'medium'
        },
        {
          id: 'qlg3-4',
          textAr: 'أي من الجمل التالية تشتمل على "فعل متعدٍ" استوفى مفعوله المنصوب؟',
          textEn: 'Which of the following sentences features a transitive verb with its object?',
          optionsAr: [
            'رَعَى الرَّاعِي المَاشِيَةَ فِي المَرْعَى',
            'نَامَ الطِّفْلُ فِي سَرِيرِهِ هَادِئاً',
            'جَلَسَ الشَّيْخُ تَحْتَ الشَّجَرَةِ',
            'انْطَلَقَ القِطَارُ سَرِيعاً'
          ],
          optionsEn: [
            'The shepherd tended the cattle in the pasture',
            'The child slept peacefully in his bed',
            'The elder sat under the tree',
            'The train launched swiftly'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الفعل اللازم والفعل المتعدي',
          conceptTestedEn: 'Transitive vs Intransitive Sentence Identification',
          explanationAr: 'الفعل "رَعَى" فعل متعدٍ نصب المفعول به "المَاشِيَةَ". أما الأفعال (نام، جلس، انطلق) فهي أفعال لازمة اكتفت بفاعلها.',
          explanationEn: 'The verb "Raa" is transitive and governs the accusative object "Al-Maashiyah".',
          difficulty: 'hard'
        }
      ]
    }
  },
  {
    id: 'lang-4',
    order: 4,
    titleAr: 'المحاضرة 4: مهارات الفهم القرائي واستخراج الأفكار الرئيسة والإملاء',
    titleEn: 'Lecture 4: Reading Comprehension, Main Ideas & Orthography',
    subtitleAr: 'استراتيجيات استيعاب المقروء، وتفكيك النصوص، والتمييز القطعي بين همزتي الوصل والقطع كتابةً ونطقاً',
    subtitleEn: 'Master textual comprehension, thematic extraction, fact vs opinion, and Hamzat Al-Wasl vs Al-Qat orthography.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'lang-3',
    prerequisiteTitleAr: 'المحاضرة 3: الجملة الفعلية: الفعل والفاعل وعلامات الإعراب',
    prerequisiteTitleEn: 'Lecture 3: Verbal Sentences: Verb, Agent & Inflections',

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة (لغتي الخالدة)',
    gradeLevelNameEn: 'Grade 7 / Middle School - Arabic Language Studies',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الرابعة: التواصل والمهارات اللغوية والكتابية',
    unitTitleEn: 'Unit 4: Communication & Writing Orthography',
    lessonNumberAr: 'الدرس 4: الرسم الإملائي ومهارات الفهم القرائي والتحليل',
    lessonNumberEn: 'Lesson 4: Arabic Orthography & Textual Deconstruction',

    warmupHookAr: 'القراءة ليست مجرد فك لرموز الحروف، بل هي حوار فكري عميق بين القارئ والكاتب لاستخراج الدرر والتمييز بين الحقيقة المثبتة والرأي الذاتي. وبالمثل، فإن كتابة الهمزة في مطلع الكلمات (أ / إ / ا) هي ميزان الإتقان الإملائي الذي يُميز الكاتب الفصيح. كيف تستخرج الفكرة المحورية لأي نص في دقائق؟ وكيف تتقن كتابة همزتي الوصل والقطع باختبار سحري بسيط لا يخطئ؟',
    warmupHookEn: 'Master reading comprehension frameworks to extract core thematic nodes and discern facts from opinions, alongside infallible orthographic rules for Hamzat Wasl and Qat.',

    learningOutcomesAr: [
      'أن يستخرج الطالب الفكرة الرئيسة والأفكار الداعمة من أي نص نثري معطى',
      'أن يميز الطالب بدقة بين الحقيقة الموضوعية والرأي الشخصي للكاتب',
      'أن يحدد الطالب مواضع همزة الوصل وهمزة القطع في الأسماء والأفعال والحروف',
      'أن يطبق الطالب اختبار حرف الواو والفاء للتحقق الفوري من نوع الهمزة إملائياً'
    ],
    learningOutcomesEn: [
      'Extract main and supporting ideas from structured prose passages',
      'Distinguish objective facts from subjective authorial opinions',
      'Identify orthographic positions of Hamzat Wasl and Hamzat Qat across Nouns, Verbs, and Particles',
      'Apply the Waw/Faa phonetic test for instantaneous Hamzah verification'
    ],

    vocabulary: [
      {
        termAr: 'الفكرة الرئيسة (Main Idea)',
        termEn: 'Main Idea',
        definitionAr: 'المعنى العام والشامل الذي يدور حوله النص بأكمله وتنتظم تحته جميع الأفكار الفرعية.',
        definitionEn: 'The central overarching proposition around which the entire text revolves.'
      },
      {
        termAr: 'الحقيقة مقابل الرأي (Fact vs Opinion)',
        termEn: 'Fact vs Opinion',
        definitionAr: 'الحقيقة معلومة مثبتة بالدليل والواقع لا خلاف عليها، أما الرأي فهو وجهة نظر أو مشاعر شخصية تقبل الصواب والخطأ.',
        definitionEn: 'A fact is an objectively verifiable truth; an opinion reflects personal subjective sentiment or evaluation.'
      },
      {
        termAr: 'همزة الوصل (Hamzat Al-Wasl)',
        termEn: 'Hamzat Al-Wasl',
        definitionAr: 'همزة تُنطق في ابتداء الكلام وتسقط في دَرَجِهِ ووصله، وتُكتب ألفاً قائمة دون رأس عين (ا) مثل: انْطَلَقَ، اسْم.',
        definitionEn: 'A glottal onset pronounced only at utterance beginning, dropping in connected speech, written as plain Alif (ا).'
      },
      {
        termAr: 'همزة القطع (Hamzat Al-Qat)',
        termEn: 'Hamzat Al-Qat',
        definitionAr: 'همزة أصلية تثبت في النطق والكتابة دائماً سواء في أول الكلام أو في وسطه، وتكتب برأس عين (أَ / أُ / إِ) مثل: أَكْرَمَ، إِحْسَان.',
        definitionEn: 'A stable phonemic glottal stop explicitly pronounced and orthographically marked with Hamzah head (أ/إ).'
      }
    ],

    keyConceptsAr: [
      'استراتيجيات الفهم القرائي وتحديد الفكرة المركزية',
      'التمييز بين الحقائق العلمية والآراء الانطباعية',
      'مواضع همزة الوصل في: أل التعريف، الأسماء العشرة، ماضي وأمر ومصدر الخماسي والسداسي، وأمر الثلاثي',
      'مواضع همزة القطع في: جميع الحروف (ما عدا أل)، جميع الأسماء (ما عدا العشرة)، ماضي ومصدر الرباطي والثلاثي المبدوء بهمزة'
    ],
    keyConceptsEn: [
      'Reading Comprehension & Central Thematic Extraction',
      'Fact vs Opinion Epistemic Distinction',
      'Hamzat Wasl Morphological Environments',
      'Hamzat Qat Morphological Environments'
    ],
    summaryAr: 'نختتم مهارات اللغة العربية بالجمع بين كفاءة الفهم القرائي والتحليل الموضوعي للنصوص من جهة، والضبط الإملائي المتقن للهمزات (الوصل والقطع) من جهة أخرى لضمان الفصاحة قراءةً وكتابة.',
    summaryEn: 'Synthesizing advanced reading comprehension and critical textual analysis with authoritative orthographic mastery of Hamzat Wasl and Qat.',

    sections: [
      {
        titleAr: '1. مهارات الفهم القرائي واستخراج الأفكار ونقد النصوص',
        titleEn: '1. Reading Comprehension, Thematic Deconstruction & Fact vs Opinion',
        contentAr: 'لاستيعاب أي نص قرائي بمهارة واتقان، نتبع الخطوات المنهجية التالية:\n1. القراءة الاستكشافية السريعة لتحديد العنوان والجو العام.\n2. تحديد الفكرة الرئيسة: وهي الإجابة الشاملة عن سؤال: "عَمَّ يتحدث النص عموماً؟".\n3. استخراج الأفكار الفرعية: وهي المضامين الجزئية التي تشرح الفكرة الرئيسة في كل فقرة.\n4. التمييز بين الحقيقة والرأي:\n   - الحقيقة: جملة تعبر عن واقع مثبت بأرقام أو تجارب علمية (مثل: "تغلي المياه عند 100 درجة مئوية"، "الرياض عاصمة المملكة").\n   - الرأي: جملة تعبر عن مشاعر أو تفضيلات ذاتية (مثل: "فصل الشتاء أجمل فصول السنة"، "الرواية ممتعة للغاية").',
        contentEn: 'Textual comprehension requires isolating the central premise, tracing subordinate supporting claims, and distinguishing objective facts from personal opinions.',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (4-1): تحليل نص واستخراج الفكرة المحورية والتمييز بين الحقيقة والرأي',
          titleEn: 'Worked Example (4-1): Textual Analysis, Thematic Extraction & Fact vs Opinion',
          equation: 'قراءة الفقرة -> استخلاص الفكرة المحورية + فحص العبارات (حقيقة أم رأي)',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'النص: "تُعد المملكة العربية السعودية أكبر مصدر للنفط في العالم، وهي تمتلك رؤية 2030 الطموحة التي تُعد أعظم خطة تنموية في العصر الحديث".', 
              textEn: 'Passage: "Saudi Arabia is the world largest oil exporter and possesses Vision 2030, which is the greatest development plan in modern history."' 
            },
            { 
              stepNumber: 2, 
              textAr: 'استخراج الفكرة الرئيسة: المكانة الاقتصادية والتنموية الرائدة للمملكة ورؤية 2030.', 
              textEn: 'Main Idea: The economic leadership and transformative development of Vision 2030.' 
            },
            { 
              stepNumber: 3, 
              textAr: 'فحص عبارة "أكبر مصدر للنفط": حقيقة موضوعية مثبتة بالبيانات والأرقام الاقتصادية العالمية.', 
              textEn: 'Analyze "largest oil exporter": Verifiable objective Fact.' 
            },
            { 
              stepNumber: 4, 
              textAr: 'فحص عبارة "تُعد أعظم خطة تنموية": رأي وتقييم انطباعي يعبر عن وجهة نظر الكاتب واستحسانه.', 
              textEn: 'Analyze "greatest plan": Evaluative Opinion.' 
            }
          ],
          takeawayAr: 'الحقائق تُقبل أو تُرفض بالأدلة، بينما الآراء تُناقش وتُحترم كوجهات نظر شخصية.',
          takeawayEn: 'Facts are evaluated through empirical evidence; opinions represent authorial perspectives.'
        },
        tipsAr: ['الكلمات التفضيلية مثل (أجمل، أعظم، أسوأ، أروع) تدل غالباً على أن العبارة "رأي" وليست حقيقة.']
      },
      {
        titleAr: '2. قواعد همزة الوصل وهمزة القطع واختبار الفحص السريع',
        titleEn: '2. Hamzat Wasl vs Qat: Morphological Rules & The Verification Test',
        contentAr: 'للهمزة في أول الكلمة نوعان:\n\nأولاً: همزة الوصل (ا):\n- تنطق في أول الكلام وتسقط في وسطه، وتكتب ألفاً مجردة دون همزة.\n- مواضعها:\n  1. (أل) التعريف: (الكتاب، المدرسة).\n  2. الأسماء العشرة المسموعة: (اسم، ابن، ابنة، امرؤ، امرأة، اثنان، اثنتان، ايمن الله...).\n  3. أمر الفعل الثلاثي: (اكْتُبْ، اقْرَأْ، اسْمَعْ).\n  4. ماضي وأمر ومصدر الفعل الخماسي والسداسي: (انْطَلَقَ - انْطَلِقْ - انْطِلَاق / اسْتَغْفَرَ - اسْتَغْفِرْ - اسْتِغْفَار).\n\nثانياً: همزة القطع (أَ / أُ / إِ):\n- تنطق وتكتب دائماً أينما وقعت.\n- مواضعها:\n  1. جميع الحروف ما عدا أل: (إلى، أن، إن، أو، إذا).\n  2. جميع الأسماء ما عدا الأسماء العشرة: (أحمد، إبراهيم، أسد، أمل).\n  3. ماضي ومصدر الفعل الثلاثي المهموز: (أَخَذَ - أَخْذاً / أَكَلَ - أَكْلاً).\n  4. ماضي وأمر ومصدر الفعل الرباعي: (أَكْرَمَ - أَكْرِمْ - إِكْرَام / أَنْجَزَ - أَنْجِزْ - إِنْجَاز).\n  5. كل فعل مضارع مبدوء بهمزة المتكلم: (أَكْتُبُ، أَسْتَغْفِرُ).',
        contentEn: 'Hamzat Wasl occurs in Al-, ten classical nouns, 5/6-letter verbs/nouns, and 3-letter imperatives. Hamzat Qat occurs in all particles, general nouns, 4-letter verb paradigms, and 1st-person present verbs.',
        interactiveExample: {
          titleAr: 'تطبيق منهجي (4-2): تطبيق اختبار الواو والفاء للتمييز الفوري بين الهمزتين',
          titleEn: 'Worked Example (4-2): Applying the Waw/Faa Prefix Test for Rapid Hamzah Verification',
          equation: 'حرف (و) أو (ف) + الكلمة المنطوقة بالسليقة',
          steps: [
            { 
              stepNumber: 1, 
              textAr: 'الكلمة الأولى: "استعانة". نضع واواً وننطق: "وَاسْتِعَانَة" (نلاحظ سقوط صوت الهمزة تماماً والانتقال من الواو إلى السين مباشرة) -> إذن هي همزة وصل وتكتب: (استعانة) دون همزة.', 
              textEn: 'Test 1: "Istianah" -> "Wa-stianah" (glottal stop drops) -> Hamzat Wasl (استعانة).' 
            },
            { 
              stepNumber: 2, 
              textAr: 'الكلمة الثانية: "إكرام". نضع واواً وننطق: "وَإِكْرَام" (يستحيل إسقاط الهمزة في النطق الصحيح) -> إذن هي همزة قطع وتكتب بهمزة تحت الألف: (إكرام).', 
              textEn: 'Test 2: "Ikram" -> "Wa-Ikram" (glottal stop strictly preserved) -> Hamzat Qat (إكرام).' 
            },
            { 
              stepNumber: 3, 
              textAr: 'الكلمة الثالثة: "اذهب". نضع فاء وننطق: "فَاذْهَبْ" (تسقط الهمزة) -> همزة وصل لأمر الثلاثي: (اذهب).', 
              textEn: 'Test 3: "Idhhab" -> "Fa-dhhab" (drops) -> Hamzat Wasl (اذهب).' 
            }
          ],
          takeawayAr: 'اختبار حرف الواو يكشف لك نوع الهمزة في ثانية واحدة بالسليقة اللغوية السليمة.',
          takeawayEn: 'Prefixing Waw or Faa immediately reveals glottal retention (Qat) or phonetic dropping (Wasl).'
        },
        tipsAr: ['الهمزة في الفعل المضارع همزة قطع دائماً مهما كان عدد حروفه؛ نقول: (أَكْتُبُ، أَنْطَلِقُ، أَسْتَغْفِرُ).']
      }
    ],

    conceptMapSummaryAr: 'الفهم القرائي يقوم على استخراج الفكرة الرئيسة وتمييز الحقيقة عن الرأي. الرسم الإملائي يفرق بين همزة الوصل (تسقط وصلاً وتكتب ا) وهمزة القطع (تثبت دائماً وتكتب أ/إ)، ويُكشف نوعها باختبار الواو والفاء.',
    conceptMapSummaryEn: 'Reading Comprehension extracts central themes and separates facts from opinions. Orthography distinguishes Hamzat Wasl (dropped in speech, plain Alif) from Qat (persistent glottal stop with Hamzah head).',

    goldenRulesAr: [
      'القاعدة 1: الفكرة الرئيسة هي المظلة الشاملة لجميع أفكار النص وفقراته.',
      'القاعدة 2: الحقيقة معلومة موضوعية مدعومة بالأدلة، بينما الرأي تعبير ذاتي عن مشاعر أو تفضيل.',
      'القاعدة 3: همزة الوصل تنطق في أول الكلام وتسقط عند وصله بالواو أو الفاء.',
      'القاعدة 4: همزة القطع تثبت نطقاً ورسماً في جميع الأحوال (أَ، أُ، إِ).',
      'القاعدة 5: جميع الحروف في اللغة العربية همزتها قطع (إلى، إن، أن) ما عدا (أل) التعريف.',
      'القاعدة 6: ماضي وأمر ومصدر الخماسي والسداسي همزته وصل دائماً (انطلاق، استخراج).',
      'القاعدة 7: كل فعل مضارع مبدوء بهمزة المتكلم فهمزته همزة قطع دائماً (أستمعُ، أحفظُ).'
    ],
    goldenRulesEn: [
      'Rule 1: The Main Idea represents the overarching thematic premise of the text.',
      'Rule 2: Facts rely on empirical verification; opinions reflect subjective judgment.',
      'Rule 3: Hamzat Wasl is vocalized in isolation but dropped in connected speech.',
      'Rule 4: Hamzat Qat is orthographically written and vocalized in all contexts.',
      'Rule 5: All Arabic particles take Hamzat Qat except the definite article Al-.',
      'Rule 6: 5- and 6-letter verb forms and verbal nouns take Hamzat Wasl exclusively.',
      'Rule 7: All 1st-person present tense verbs take Hamzat Qat unconditionally.'
    ],

    textbookExercises: [
      {
        id: 'ex-lang-4-1',
        questionAr: 'بين نوع الهمزة مع ذكر السبب في الكلمات التالية: (إِحْسَان - انْتِصَار - اكْتُبْ - أَقْبَلَ).',
        questionEn: 'Specify the Hamzah type and justification for: (Ihsan, Intisar, Uktub, Aqbala).',
        solutionStepsAr: [
          '1. "إِحْسَان": همزة قطع؛ لأنه مصدر لفعل رباعي (أَحْسَنَ).',
          '2. "انْتِصَار": همزة وصل؛ لأنه مصدر لفعل خماسي (انْتَصَرَ).',
          '3. "اكْتُبْ": همزة وصل؛ لأنه أمر لفعل ثلاثي (كَتَبَ).',
          '4. "أَقْبَلَ": همزة قطع؛ لأنه فعل ماضٍ رباعي.'
        ],
        solutionStepsEn: [
          '1. "Ihsan": Hamzat Qat (4-letter verbal noun).',
          '2. "Intisar": Hamzat Wasl (5-letter verbal noun).',
          '3. "Uktub": Hamzat Wasl (3-letter imperative).',
          '4. "Aqbala": Hamzat Qat (4-letter past verb).'
        ],
        answerAr: 'إحسان: قطع (مصدر رباعي) | انتصار: وصل (مصدر خماسي) | اكتب: وصل (أمر ثلاثي) | أقبل: قطع (ماضٍ رباعي).',
        answerEn: 'Ihsan: Qat | Intisar: Wasl | Uktub: Wasl | Aqbala: Qat.'
      },
      {
        id: 'ex-lang-4-2',
        questionAr: 'صنف العبارتين التاليتين إلى (حقيقة) أو (رأي): 1) "تبلغ مساحة المملكة 2 مليون كم² تقريباً"، 2) "اللغة العربية أجمل لغات الأرض وأعذبها".',
        questionEn: 'Classify into Fact or Opinion: 1) Saudi area is ~2M km², 2) Arabic is the most beautiful language.',
        solutionStepsAr: [
          '1. العبارة الأولى: (حقيقة)؛ لأنها تستند إلى بيانات جغرافية ومساحية مثبتة علمياً.',
          '2. العبارة الثانية: (رأي)؛ لأنها تعبر عن مشاعر محبة وتقدير جمالي ذوقي.'
        ],
        solutionStepsEn: [
          '1. First statement: Fact based on geographical measurement.',
          '2. Second statement: Opinion reflecting aesthetic appreciation.'
        ],
        answerAr: '1) حقيقة علمية جغرافية | 2) رأي وانطباع وجداني.',
        answerEn: '1) Fact | 2) Opinion.'
      }
    ],

    assessment: {
      id: 'quiz-lang-4',
      lectureId: 'lang-4',
      titleAr: 'الاختبار الإلزامي للمحاضرة الرابعة: الفهم القرائي والرسم الإملائي',
      titleEn: 'Lecture 4 Assessment: Comprehension & Orthography Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qlg4-1',
          textAr: 'أي من الكلمات التالية كُتبت بهمزة وصل صحيحة لأنها مصدر لفعل خماسي؟',
          textEn: 'Which word features a correct Hamzat Wasl as a 5-letter verbal noun?',
          optionsAr: ['انْتِصَار', 'أَنْتِصَار', 'إِنْتِصَار', 'أَسْتَمِعُ'],
          optionsEn: ['Intisar (Victory)', 'Antisar', 'Intisar (with below Hamzah)', 'Astamio'],
          correctIndex: 0,
          conceptTestedAr: 'همزة الوصل في المصادر الخماسية',
          conceptTestedEn: 'Hamzat Wasl in 5-Letter Verbal Nouns',
          explanationAr: '"انتصار" مصدر للفعل الخماسي (انتصر)، وهمزته همزة وصل تسقط وصلاً وتكتب ألفاً قائمة (انتصار) دون رسم رأس العين.',
          explanationEn: 'Intisar is a 5-letter verbal noun taking Hamzat Wasl written as a plain Alif.',
          difficulty: 'easy'
        },
        {
          id: 'qlg4-2',
          textAr: 'ما نوع الهمزة في كلمة "أَكْرَمَ" وما سبب كتابتها همزة قطع؟',
          textEn: 'What type of Hamzah is in "Akrama" and why is it Hamzat Qat?',
          optionsAr: [
            'همزة قطع؛ لأنه فعل ماضٍ رباعي على وزن أَفْعَلَ',
            'همزة وصل؛ لأنه فعل ثلاثي',
            'همزة وصل؛ لأنه مصدر سداسي',
            'همزة قطع؛ لأنه حرف من حروف الجر'
          ],
          optionsEn: [
            'Hamzat Qat; because it is a 4-letter past tense verb',
            'Hamzat Wasl; 3-letter verb',
            'Hamzat Wasl; 6-letter verbal noun',
            'Hamzat Qat; preposition'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مواضع همزة القطع في الأفعال الرباعية',
          conceptTestedEn: 'Hamzat Qat in 4-Letter Verb Paradigms',
          explanationAr: 'الفعل الرباعي وماضيه وأمره ومصدره همزته قطع دائماً (أَكْرَمَ - أَكْرِمْ - إِكْرَام).',
          explanationEn: '4-letter verbs, their commands, and verbal nouns strictly feature Hamzat Qat.',
          difficulty: 'medium'
        },
        {
          id: 'qlg4-3',
          textAr: 'أي من العبارات التالية تُمثل "حقيقة موضوعية" وليس رأياً شخصياً؟',
          textEn: 'Which statement represents an objective fact rather than a subjective opinion?',
          optionsAr: [
            'يَدُورُ كَوْكَبُ الأَرْضِ حَوْلَ الشَّمْسِ فِي مَدَارٍ بَيْضَاوِيٍّ',
            'القِرَاءَةُ فِي المَسَاءِ أَمْتَعُ مِنْ القِرَاءَةِ فِي الصَّبَاحِ',
            'السَّفَرُ بِالطَّائِرَةِ أَفْضَلُ وَسِيلَةٍ لِلتَّنَقُّلِ',
            'فَصْلُ الرَّبِيعِ يُعْطِي الإِنْسَانَ أَعْظَمَ شُعُورٍ بِالبَهْجَةِ'
          ],
          optionsEn: [
            'Earth orbits the Sun in an elliptical path',
            'Reading in the evening is more enjoyable than morning',
            'Air travel is the best mode of transport',
            'Spring provides the greatest sense of joy'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التمييز بين الحقيقة العلمية والرأي الانطباعي',
          conceptTestedEn: 'Fact vs Opinion Textual Evaluation',
          explanationAr: 'دوران الأرض حول الشمس حقيقة فلكية علمية مثبتة بالبراهين والقياسات، بينما باقي العبارات تشتمل على ألفاظ تفضيل ذاتية تعبر عن آراء شخصية.',
          explanationEn: 'Earth planetary orbit is an empirically established scientific fact, whereas the others convey subjective preferences.',
          difficulty: 'medium'
        },
        {
          id: 'qlg4-4',
          textAr: 'إذا أردت فحص كلمة "استعلام" للتأكد من كتابة همزتها، ما هو التطبيق السليم لاختبار الواو؟',
          textEn: 'What is the correct execution of the Waw prefix test on "Istilam"?',
          optionsAr: [
            'ننطق "وَاسْتِعْلَام" فنجد الهمزة تسقط في النطق وتتصل الواو بالسين؛ لذا تُكتب همزة وصل (استعلام) دون همزة',
            'ننطق "وَإِسْتِعْلَام" ونثبت الهمزة قسراً فتكتب همزة قطع',
            'الهمزة في أول الكلمات لا يمكن فحصها بالواو',
            'تكتب همزة قطع لأنها تتكون من ستة أحرف'
          ],
          optionsEn: [
            'Pronounce "Wa-stialam" where glottal stop drops naturally -> Hamzat Wasl (استعلام)',
            'Force glottal pronunciation -> Hamzat Qat',
            'Cannot be tested with Waw',
            'Always Qat for 6 letters'
          ],
          correctIndex: 0,
          conceptTestedAr: 'التطبيق الصوتي الصحيح لاختبار فحص الهمزة بالواو',
          conceptTestedEn: 'Phonetic Execution of the Waw Test',
          explanationAr: 'عند نطق "واستعلام" بالسليقة الفصيحة تسقط همزة الوصل في دَرَج الكلام، مما يثبت أنها همزة وصل وتكتب ألفاً قائمة (استعلام).',
          explanationEn: 'Prefixing Waw drops the glottal onset phonetically, definitively confirming Hamzat Wasl.',
          difficulty: 'hard'
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
    subtitleAr: 'دراسة تركيب المادة وحالاتها، وحساب الكثافة، وبنية الذرة والعدد الذري والكتلي، والتمييز بين العناصر والمركبات والمخاليط',
    subtitleEn: 'Master matter states, density calculations, subatomic particle configurations, atomic numbers, elements, compounds, and mixtures.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط (الصف السابع) - المرحلة المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Middle School - General Science',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: طبيعة المادة وخصائصها وبنيتها الذرية',
    unitTitleEn: 'Unit 1: Nature of Matter, Properties & Atomic Structure',
    lessonNumberAr: 'الدرس 1: المادة والذرات والعناصر والمركبات والمخاليط',
    lessonNumberEn: 'Lesson 1: Matter, Atoms, Elements, Compounds & Mixtures',

    // Real-world warm-up & Hook
    warmupHookAr: 'هل تعلم أن قلم الرصاص الأسود الذي تكتب به (الجرافيت) وخاتم الألماس فائق الصلابة واللمعان يتكونان كلاهما من نفس نوع الذرات تماماً: ذرات الكربون (C)؟ كيف يمكن لذرات واحدة أن تصنع مادة لينة نكتب بها ومادة أخرى هي الأصلب على وجه الأرض؟ السر يكمن في البنية الذرية وطبيعة ترابط الذرات. كل شيء في هذا الكون الشاسع، من الهواء الذي نتنفسه إلى المياه والصخور، مبني من 118 عنصراً كيميائياً فقط!',
    warmupHookEn: 'Soft pencil graphite and brilliant hard diamonds consist of identical carbon atoms. The difference lies in atomic arrangement and chemical bonding. Everything across the cosmos is assembled from just 118 elemental building blocks!',

    // Targeted Learning Outcomes
    learningOutcomesAr: [
      'أن يعرّف الطالب المادة وحالاتها الفيزيائية الثلاث (صلبة، سائلة، غازية) بناءً على حركة الجسيمات وقوى التماسك',
      'أن يحسب كثافة الأجسام الصلبة والسوائل رياضياً باستخدام قانون الكثافة D = m / V ويتنبأ بسلوك الطفو والانغمار',
      'أن يحدد المكونات الثلاثة الأساسية لبنية الذرة (البروتونات p⁺، النيوترونات n⁰، والإلكترونات e⁻) ومواقعها وشحناتها',
      'أن يستنتج العدد الذري (Z) والعدد الكتلي (A) ويحسب عدد النيوترونات في أي نواة بالقانون: N = A - Z',
      'أن يفرّق بدقة علمية بين العنصر النقي، المركب الكيميائي المتحد بنسب ثابتة، والمخلوط القابل للفصل بالطرق الفيزيائية'
    ],
    learningOutcomesEn: [
      'Define matter states based on particle kinetic energy and intermolecular attraction forces',
      'Compute density using D = m / V and predict buoyancy floatation/sinking behavior',
      'Identify subatomic particles: nuclear protons (+), neutrons (0), and orbiting electrons (-)',
      'Calculate atomic number (Z), mass number (A), and neutron count via N = A - Z',
      'Differentiate between pure elements, chemically bonded compounds, and physical mixtures'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'المادة (Matter)',
        termEn: 'Matter',
        definitionAr: 'كل شيء له كتلة ويشغل حيزاً من الفراغ (له حجم).',
        definitionEn: 'Anything that possesses mass and occupies physical space (volume).'
      },
      {
        termAr: 'الكثافة (Density)',
        termEn: 'Density',
        definitionAr: 'كتلة وحدة الحجوم من المادة، وتحسب بقسمة الكتلة على الحجم (D = m / V) بوحدة g/cm³ أو kg/m³.',
        definitionEn: 'Mass per unit volume (D = m / V), measured in g/cm³ or kg/m³.'
      },
      {
        termAr: 'الذرة (Atom)',
        termEn: 'Atom',
        definitionAr: 'أصغر وحدة بنائية للمادة تحتفظ بالخصائص الكيميائية والفيزيائية للعنصر.',
        definitionEn: 'The basic building block of matter retaining elemental properties.'
      },
      {
        termAr: 'العدد الذري (Atomic Number - Z)',
        termEn: 'Atomic Number (Z)',
        definitionAr: 'عدد البروتونات الموجبة داخل نواة الذرة، وهو يحدد هوية العنصر في الجدول الدوري ويساوي عدد الإلكترونات في الذرة المتعادلة.',
        definitionEn: 'The number of protons in a nucleus, defining elemental identity.'
      },
      {
        termAr: 'العدد الكتلي (Mass Number - A)',
        termEn: 'Mass Number (A)',
        definitionAr: 'مجموع عدد البروتونات والنيوترونات الموجودة داخل نواة الذرة (A = p⁺ + n⁰).',
        definitionEn: 'Total count of nuclear nucleons: protons plus neutrons (A = Z + N).'
      },
      {
        termAr: 'المركب (Compound)',
        termEn: 'Compound',
        definitionAr: 'مادة نقية تتكون من اتحاد عنصرين أو أكثر بنسب وزنية ثابتة بروابط كيميائية وتختلف خصائصها تماماً عن خصائص عناصرها المكونة لها.',
        definitionEn: 'A pure substance formed by chemically bonded elements in fixed stoichiometric ratios.'
      },
      {
        termAr: 'المخلوط (Mixture)',
        termEn: 'Mixture',
        definitionAr: 'مادتان أو أكثر ممتزجتان معاً دون اتحاد كيميائي، وتحتفظ كل مادة بخصائصها ويمكن فصلها بطرق فيزيائية بسيطة.',
        definitionEn: 'Physical combination of substances retaining individual properties without chemical bonds.'
      }
    ],

    keyConceptsAr: [
      'حالات المادة الثلاث وقانون حساب الكثافة: D = m / V',
      'بنية الذرة: نواة مركزية ثقيلة (بروتونات ونيوترونات) وسحابة إلكترونات',
      'العدد الذري Z = عدد البروتونات | العدد الكتلي A = البروتونات + النيوترونات',
      'قاعدة حساب النيوترونات: عدد النيوترونات N = A - Z',
      'الفرق بين العنصر (ذرات متماثلة) والمركب (اتحاد كيميائي) والمخلوط (امتزاج فيزيائي)',
      'طرق فصل المخاليط: الترشيح، التبخير، المغناطيسية، والتقطير'
    ],
    keyConceptsEn: [
      'States of Matter & Density Equation: D = m / V',
      'Atomic Anatomy: Nucleus (p+, n0) and Orbiting Electron Cloud (e-)',
      'Atomic Number (Z) vs Mass Number (A = Z + N)',
      'Neutron Calculation: N = A - Z',
      'Elements vs Compounds vs Mixtures Classification',
      'Physical Separation Techniques: Filtration, Evaporation, Magnetism, Distillation'
    ],
    summaryAr: 'في هذه المحاضرة الشاملة نتقن أسس علم الكيمياء والفيزياء العامة؛ بدءاً من قياس خواص المادة وحساب الكثافة، ثم النفاذ إلى أعماق الذرة وحساب البروتونات والنيوترونات والإلكترونات عبر العدد الذري والكتلي، وصولاً إلى التمييز الدقيق بين العناصر والمركبات والمخاليط وطرق فصلها.',
    summaryEn: 'Master foundational chemistry and physics: matter states, density computation, atomic nuclear arithmetic (protons, neutrons, electrons), and the taxonomy of elements, compounds, and mixtures.',
    
    sections: [
      {
        titleAr: '1. حالات المادة وخصائصها وحساب الكثافة والطفو',
        titleEn: '1. States of Matter, Physical Properties & Density Calculations',
        contentAr: 'توجد المادة في ثلاث حالات رئيسية: الصلبة (شكل وحجم ثابتان، حركة اهتزازية مقيدة)، السائلة (حجم ثابت وشكل متغير يأخذ شكل الإناء)، والغازية (حجم وشكل غير ثابتين وجسيمات حرة الحركة متباعدة). الكثافة خاصية فيزيائية مميزة للمادة النقية، وتُحسب بقسمة الكتلة على الحجم: D = m / V. يطفو الجسم فوق السائل إذا كانت كثافته أقل من كثافة السائل، وينغمر إذا كانت كثافته أكبر.',
        contentEn: 'Matter exists as solid, liquid, or gas depending on particle kinetic freedom. Density is an intrinsic physical metric: D = m / V. Objects float when their density is less than the supporting fluid.',
        diagram: {
          id: 'diag-sci1-matter-taxonomy',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'تصنيف المادة: العنصر النقي والمركب الكيميائي والمخلوط الفيزيائي',
          titleEn: 'Taxonomy of Matter: Elements, Compounds & Physical Mixtures',
          captionAr: 'يوضح الرسم الفروق الجوهرية على المستوى الجزيئي: العنصر يتكون من ذرات متماثلة (مثل النحاس)، والمركب ينتج عن اتحاد ذرات مختلفة بروابط كيميائية بنسب ثابتة (مثل الماء H₂O)، بينما المخلوط هو مزيج فيزيائي بدون روابط كيميائية يمكن فصله بسهولة.',
          captionEn: 'Molecular comparison: Pure elements consist of identical atoms, compounds feature chemically bonded distinct atoms in fixed proportions (H₂O), and mixtures are physical blends separable by non-chemical means.',
          diagramType: 'matter_states_compound',
          takeawayFormulaAr: 'الكثافة D = الكتلة m ÷ الحجم V | يطفو إذا D_جسم < D_سائل',
          takeawayFormulaEn: 'Density D = m / V | Floats if D_object < D_fluid',
          keyLabels: [
            { tagAr: 'عنصر نقي (Element)', tagEn: 'Pure Element', descAr: 'ذرات متطابقة لا يمكن تجزئتها كيميائياً', descEn: 'Identical atoms indivisible by chemical means' },
            { tagAr: 'مركب كيميائي (Compound)', tagEn: 'Chemical Compound', descAr: 'ذرات مختلفة متحدة بروابط بنسب وزنية ثابتة', descEn: 'Distinct atoms bonded in stoichiometric ratios' },
            { tagAr: 'مخلوط (Mixture)', tagEn: 'Physical Mixture', descAr: 'مزيج فيزيائي يحتفظ بخصائص مكوناته ويمكن فصله', descEn: 'Physical blend retaining individual component traits' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: حساب كثافة معدن مجهول وتحديد هل يطفو في الماء أم ينغمر',
          titleEn: 'Worked Example 1: Density Calculation & Water Buoyancy Test',
          equation: 'D = m / V',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطيات: قطعة معدنية كتلتها m = 160 جراماً، وحجمها V = 20 سم³، وكثافة الماء النقي = 1.0 g/cm³.',
              textEn: 'Given: Metal sample mass m = 160g, volume V = 20 cm³, water density = 1.0 g/cm³.',
              noteAr: 'الكتلة والحجم معلومان'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 1: نطبق قانون الكثافة: D = m ÷ V = 160 ÷ 20 = 8.0 g/cm³.',
              textEn: 'Step 1: Compute density D = 160 / 20 = 8.0 g/cm³.',
              noteAr: 'كثافة المعدن = 8.0 g/cm³ (معدن الحديد/الفولاذ)'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 2: نقارن كثافة المعدن (8.0 g/cm³) بكثافة الماء (1.0 g/cm³): بما أن 8.0 > 1.0، فإن القطعة ستنغمر (تغوص) في قاع الماء فوراً.',
              textEn: 'Step 2: Compare: 8.0 > 1.0 g/cm³ => Object sinks immediately.',
              noteAr: 'الحكم: تنغمر القطعة في الماء'
            }
          ],
          takeawayAr: 'الكثافة خاصية ثابتة لكل مادة نقية عند نفس درجة الحرارة والضغط، وتحدد قابلية الطفو والانغمار بدقة.',
          takeawayEn: 'Density is a unique fingerprint for every pure substance and dictates buoyancy.'
        },
        formativeCheck: {
          id: 'fc-sci1-1',
          questionAr: 'قطعة خشبية كتلتها 45 جراماً وحجمها 50 سم³. ما مقدار كثافتها، وهل تطفو على سطح الماء (كثافة الماء = 1 g/cm³)؟',
          questionEn: 'A wood block has mass 45g and volume 50 cm³. What is its density and does it float in water?',
          optionsAr: [
            'كثافتها 0.9 g/cm³ وتطفو على سطح الماء',
            'كثافتها 1.1 g/cm³ وتنغمر في الماء',
            'كثافتها 2250 g/cm³ وتغوص في القاع',
            'كثافتها 0.5 g/cm³ وتنغمر في الماء'
          ],
          optionsEn: [
            'Density is 0.9 g/cm³ and it floats on water',
            'Density is 1.1 g/cm³ and it sinks',
            'Density is 2250 g/cm³ and it sinks',
            'Density is 0.5 g/cm³ and it sinks'
          ],
          correctIndex: 0,
          explanationAr: 'D = m / V = 45 ÷ 50 = 0.9 g/cm³. بما أن 0.9 < 1.0 (أقل من كثافة الماء) فإن الخشب يطفو على السطح.',
          explanationEn: 'D = 45 / 50 = 0.9 g/cm³. Since 0.9 < 1.0 g/cm³, it floats.',
          hintAr: 'اقسم الكتلة على الحجم، ثم قارن الناتج بالرقم 1.'
        },
        tipsAr: [
          'احرص دائماً على تطابق الوحدات: جرام مع سم³ (g/cm³)، أو كيلوجرام مع متر مكعب (kg/m³).',
          'الجليد يطفو فوق الماء السائل لأن كثافة الجليد (0.92 g/cm³) أقل من كثافة الماء السائل (1.0 g/cm³).'
        ],
        tipsEn: [
          'Ensure consistent units: g/cm³ or kg/m³.',
          'Ice floats on water because its crystalline structure lowers its density to 0.92 g/cm³.'
        ]
      },
      {
        titleAr: '2. بنية الذرة والجسيمات دون الذرية والعدد الذري والكتلي',
        titleEn: '2. Atomic Anatomy, Subatomic Particles & Nuclear Arithmetic',
        contentAr: 'تتكون كل ذرة في الكون من جزأين رئيسيين: 1) نواة مركزية موجبة الشحنة تتركز فيها 99.9% من كتلة الذرة وتحتوي على نوعين من الجسيمات: بروتونات موجبة (+p) ونيوترونات متعادلة الشحنة (0n). 2) سحابة إلكترونية خارجية تدور فيها إلكترونات سالبة الشحنة (-e) ذات كتلة متناهية في الصغر. في الذرة المتعادلة كهربائياً: عدد البروتونات = عدد الإلكترونات. العدد الذري (Z) هو عدد البروتونات فقط، والعدد الكتلي (A) هو مجموع البروتونات والنيوترونات: A = p⁺ + n⁰. ومنها نحسب عدد النيوترونات: N = A - Z.',
        contentEn: 'Every atom contains a dense central nucleus of positive protons (p+) and neutral neutrons (n0), orbited by negative electrons (e-). Mass Number A = Z + N, where Z is the atomic number.',
        diagram: {
          id: 'diag-sci1-bohr-atom',
          figureNumberAr: 'شكل (1-2)',
          figureNumberEn: 'Figure (1-2)',
          titleAr: 'النموذج الذري: النواة والجسيمات النووية ومستويات الطاقة للإلكترونات',
          titleEn: 'Bohr Atomic Model: Nucleus, Nucleons & Electron Shells',
          captionAr: 'تتركز كتلة الذرة داخل النواة التي تضم البروتونات الموجبة (+p) والنيوترونات المتعادلة (0n)، بينما تدور الإلكترونات سالبة الشحنة (-e) في مدارات طاقة خارجية محددة.',
          captionEn: 'Atomic mass is packed within the nucleus containing positive protons and neutral neutrons, surrounded by quantized electron shells.',
          diagramType: 'atomic_structure',
          takeawayFormulaAr: 'العدد الكتلي A = Z + N  |  عدد النيوترونات N = A - Z  |  p⁺ = e⁻',
          takeawayFormulaEn: 'Mass Number A = Z + N | Neutrons N = A - Z | p⁺ = e⁻',
          keyLabels: [
            { tagAr: 'البروتونات الموجبة (p⁺)', tagEn: 'Protons (p⁺)', descAr: 'جسيمات موجبة داخل النواة تحدد العدد الذري Z', descEn: 'Positive nucleons defining atomic number Z' },
            { tagAr: 'النيوترونات المتعادلة (n⁰)', tagEn: 'Neutrons (n⁰)', descAr: 'جسيمات متعادلة الشحنة داخل النواة', descEn: 'Neutral nucleons contributing to nuclear mass' },
            { tagAr: 'الإلكترونات السالبة (e⁻)', tagEn: 'Electrons (e⁻)', descAr: 'جسيمات سالبة تدور في مستويات الطاقة', descEn: 'Negative particles in orbital energy shells' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: استنتاج عدد البروتونات والنيوترونات والإلكترونات لذرة الصوديوم والألومنيوم',
          titleEn: 'Worked Example 2: Deducing Protons, Neutrons & Electrons for Sodium & Aluminum',
          equation: 'A = Z + N  -->  N = A - Z',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المعطى الأول: رمز ذرة الصوديوم هو ₁₁²³Na (العدد الذري في الأسفل Z = 11، والعدد الكتلي في الأعلى A = 23).',
              textEn: 'Given 1: Sodium ₁₁²³Na (Z = 11, A = 23).',
              noteAr: 'رمز العنصر القياسي'
            },
            {
              stepNumber: 2,
              textAr: 'حساب جسيمات الصوديوم: 1) عدد البروتونات p⁺ = Z = 11. 2) عدد الإلكترونات e⁻ = عدد البروتونات = 11. 3) عدد النيوترونات n⁰ = A - Z = 23 - 11 = 12 نيوتروناً.',
              textEn: 'Sodium particles: Protons = 11, Electrons = 11, Neutrons = 23 - 11 = 12.',
              noteAr: 'الصوديوم: 11 بروتون، 11 إلكترون، 12 نيوترون'
            },
            {
              stepNumber: 3,
              textAr: 'المعطى الثاني: ذرة الألومنيوم ₁₃²⁷Al (Z = 13، A = 27). البروتونات = 13، الإلكترونات = 13، والنيوترونات = 27 - 13 = 14 نيوتروناً.',
              textEn: 'Aluminum ₁₃²⁷Al: Protons = 13, Electrons = 13, Neutrons = 27 - 13 = 14.',
              noteAr: 'الألومنيوم: 13 بروتون، 13 إلكترون، 14 نيوترون'
            }
          ],
          takeawayAr: 'العدد الذري هو بطاقة الهوية الفريدة للعنصر؛ تغيير عدد البروتونات يغير نوع العنصر بالكامل، بينما تغيير النيوترونات ينتج النظائر.',
          takeawayEn: 'Atomic number is the element identity fingerprint. Changing proton count alters the element entirely.'
        },
        formativeCheck: {
          id: 'fc-sci1-2',
          questionAr: 'ذرة عنصر تحتوي نواتها على 17 بروتوناً و18 نيوتروناً. ما هو العدد الذري والعدد الكتلي لهذه الذرة؟',
          questionEn: 'An atom has 17 protons and 18 neutrons. What are its atomic number and mass number?',
          optionsAr: [
            'العدد الذري = 17، والعدد الكتلي = 35',
            'العدد الذري = 18، والعدد الكتلي = 35',
            'العدد الذري = 35، والعدد الكتلي = 17',
            'العدد الذري = 17، والعدد الكتلي = 1'
          ],
          optionsEn: [
            'Atomic number = 17, Mass number = 35',
            'Atomic number = 18, Mass number = 35',
            'Atomic number = 35, Mass number = 17',
            'Atomic number = 17, Mass number = 1'
          ],
          correctIndex: 0,
          explanationAr: 'العدد الذري Z = عدد البروتونات = 17. والعدد الكتلي A = البروتونات + النيوترونات = 17 + 18 = 35 (عنصر الكلور Cl-35).',
          explanationEn: 'Atomic number Z = 17 (protons). Mass number A = 17 + 18 = 35 (Chlorine).',
          hintAr: 'العدد الذري هو البروتونات فقط، والكتلي هو مجموع البروتونات والنيوترونات معاً.'
        },
        tipsAr: [
          'تذكر دائماً أن الإلكترونات لا تدخل في حساب العدد الكتلي لأن كتلتها متناهية الصغر (1/1840 من كتلة البروتون).',
          'في الجدول الدوري، يُكتب العدد الذري دائماً كعدد صحيح متسلسل (1, 2, 3...).'
        ],
        tipsEn: [
          'Electrons do not contribute to mass number due to their negligible mass.',
          'In the periodic table, atomic number increments sequentially by +1.'
        ]
      },
      {
        titleAr: '3. العناصر والمركبات والمخاليط وطرق الفصل الفيزيائية والكيميائية',
        titleEn: '3. Elements, Compounds, Mixtures & Physical Separation Techniques',
        contentAr: 'تنقسم المواد إلى نوعين كبيرين: 1) المواد النقية: وتشمل (العناصر) وهي مواد تتكون من نوع واحد فقط من الذرات مثل الأكسجين O₂ والحديد Fe، و(المركبات) وهي مواد ناتجة عن اتحاد كيميائي لعنصرين أو أكثر بنسب ثابتة مثل ملح الطعام NaCl وغاز ثاني أكسيد الكربون CO₂ ولا يمكن فصلها إلا بتفاعل كيميائي. 2) المخاليط: وهي مزيج فيزيائي لمادتين أو أكثر دون روابط كيميائية، وتنقسم إلى مخاليط متجانسة (محاليل مثل الماء والملح أو الهواء الجوي) ومخاليط غير متجانسة (مثل سلطة الخضار أو الرمل والماء). تُفصل المخاليط بطرق فيزيائية: الترشيح (للمواد الصلبة غير الذائبة)، التبخير (لفصل المواد الصلبة الذائبة)، الجذب المغناطيسي (لفصل المواد المغناطيسية كالحديد)، والتقطير (لفصل السوائل حسب درجات الغليان).',
        contentEn: 'Matter is divided into Pure Substances (Elements and Compounds) and Mixtures (Homogeneous and Heterogeneous). Mixtures are separable by physical techniques like filtration, evaporation, magnetism, and distillation.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: خطة تجريبية لفصل مخلوط معقد من (برادة الحديد + الرمل + ملح الطعام)',
          titleEn: 'Worked Example 3: Step-by-Step Separation of Iron Filings, Sand & Table Salt Mixture',
          equation: 'مخلوط ثلاثي  -->  جذب مغناطيسي  -->  إذابة وترشيح  -->  تبخير',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الخطوة 1 (فصل الحديد): نمرر مغناطيساً قوياً فوق المخلوط الجاف، فتنجذب برادة الحديد إلى المغناطيس ويبقى الرمل والملح.',
              textEn: 'Step 1 (Iron extraction): Pass a magnet over the dry mixture to attract iron filings.',
              noteAr: 'خاصية المغناطيسية'
            },
            {
              stepNumber: 2,
              textAr: 'الخطوة 2 (إذابة الملح): نضيف الماء إلى ما تبقى (الرمل والملح) ونحرك جيداً؛ يذوب الملح في الماء بينما يستقر الرمل دون ذوبان.',
              textEn: 'Step 2 (Dissolving salt): Add water and stir; salt dissolves completely while sand settles.',
              noteAr: 'خاصية الذائبية'
            },
            {
              stepNumber: 3,
              textAr: 'الخطوة 3 (فصل الرمل): نسكب الخليط عبر ورقة ترشيح وقمع؛ يُحتجز الرمل الصلب فوق الورقة، وينزل المحلول الملحي الصافي في الكأس.',
              textEn: 'Step 3 (Sand filtration): Pour through filter paper; sand is trapped while saltwater passes.',
              noteAr: 'عملية الترشيح'
            },
            {
              stepNumber: 4,
              textAr: 'الخطوة 4 (استرجاع الملح): نسخن المحلول الملحي حتى يتبخر الماء بالكامل، فيتبقى بلورات ملح الطعام النقية في قاع الوعاء.',
              textEn: 'Step 4 (Salt recovery): Evaporate the water via heating to obtain pure dry salt crystals.',
              noteAr: 'عملية التبخير'
            }
          ],
          takeawayAr: 'فصل المخاليط يعتمد على استغلال الفروق في الخصائص الفيزيائية للمكونات (المغناطيسية، الذائبية، حجم الحبيبات، ودرجة الغليان).',
          takeawayEn: 'Separation exploits disparities in physical properties: magnetism, solubility, particle size, and boiling points.'
        },
        formativeCheck: {
          id: 'fc-sci1-3',
          questionAr: 'أي من المواد التالية يُعد "مركباً كيميائياً" نقياً؟',
          questionEn: 'Which of the following substances represents a pure chemical compound?',
          optionsAr: [
            'الماء النقي (H₂O)',
            'الهواء الجوي',
            'عصير البرتقال',
            'سبيكة الذهب والنحاس'
          ],
          optionsEn: [
            'Pure Water (H₂O)',
            'Atmospheric Air',
            'Orange Juice',
            'Gold-Copper Alloy'
          ],
          correctIndex: 0,
          explanationAr: 'الماء (H₂O) مركب كيميائي ناتج عن اتحاد عنصري الهيدروجين والأكسجين بروابط كيميائية بنسبة ثابتة (2 ذرة هيدروجين إلى 1 ذرة أكسجين). أما الهواء والعصير والسبائك فهي مخاليط.',
          explanationEn: 'Water (H₂O) is a chemical compound with fixed stoichiometric bonding. Air, juice, and alloys are mixtures.',
          hintAr: 'ابحث عن المادة التي يعبر عنها بصيغة كيميائية بروابط محددة وثابتة.'
        },
        tipsAr: [
          'المركب يفقد خصائص عناصره تماماً: فمثلاً الصوديوم فلز سام حارق وغاز الكلور سام خانق، لكن اتحادهما ينتج ملح الطعام المفيد NaCl!',
          'المخلوط المتجانس يسمى (محلولاً) وتتوزع فيه الدقائق بانتظام فلا يمكن تمييز مكوناته بالعين المجردة.'
        ],
        tipsEn: [
          'Compounds exhibit entirely new properties distinct from their constituent elements.',
          'Homogeneous mixtures are uniform solutions where individual particles cannot be discerned by eye.'
        ]
      }
    ],

    // Concept Map / Golden takeaways
    conceptMapAr: [
      'تعريف المادة: كل ما له كتلة ويشغل حيزاً (حجم). وحالاتها: صلبة، سائلة، وغازية',
      'معادلة الكثافة: D = m / V (الكتلة مقسومة على الحجم) | شرط الطفو: D_الجسم < D_السائل',
      'بنية الذرة: النواة (بروتونات موجبة p⁺ + نيوترونات متعادلة n⁰) + إلكترونات سالبة e⁻ في مستويات الطاقة',
      'العدد الذري (Z): عدد البروتونات = عدد الإلكترونات في الذرة المتعادلة',
      'العدد الكتلي (A): مجموع البروتونات والنيوترونات (A = Z + N) | عدد النيوترونات N = A - Z',
      'العنصر: ذرات متطابقة (O₂, Fe) | المركب: اتحاد كيميائي بنسب ثابتة (H₂O, NaCl) | المخلوط: مزيج فيزيائي (الهواء، الرمل والملح)',
      'طرق الفصل: المغناطيس (للحديد)، الترشيح (لغير الذائب)، التبخير والتقطير (للسوائل والمحاليل)'
    ],
    conceptMapEn: [
      'Matter definition: Has mass and volume (Solid, Liquid, Gas states)',
      'Density formula: D = m / V | Floating criterion: D_object < D_fluid',
      'Atom anatomy: Nucleus (p+, n0) + Energy shells (e-)',
      'Atomic number Z = protons = electrons (neutral atom)',
      'Mass number A = Z + N | Neutrons N = A - Z',
      'Element (same atoms) vs Compound (chemically bonded) vs Mixture (physical blend)',
      'Separation: Magnetism, Filtration, Evaporation, Distillation'
    ],

    // Guided Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-sci1-1',
        questionAr: 'مكعب صلب كتلته 270 جراماً وطول ضلعه 5 سم. 1) احسب حجم المكعب. 2) احسب كثافته. 3) إذا وُضع المكعب في حوض ماء (كثافة الماء = 1 g/cm³)، فهل يطفو أم يغوص؟ مع التعليل العلمي.',
        questionEn: 'A solid cube has mass 270g and edge length 5 cm. 1) Find volume. 2) Compute density. 3) Predict if it floats or sinks in water (density 1 g/cm³) with explanation.',
        solutionStepsAr: [
          'الخطوة 1: حساب حجم المكعب: V = طول الضلع × نفسه × نفسه = 5 × 5 × 5 = 125 سم³.',
          'الخطوة 2: حساب الكثافة: D = m ÷ V = 270 ÷ 125 = 2.16 g/cm³.',
          'الخطوة 3: المقارنة بالماء: بما أن كثافة المكعب (2.16 g/cm³) أكبر من كثافة الماء (1.0 g/cm³)، فإن المكعب سوف ينغمر (يغوص) في القاع.'
        ],
        solutionStepsEn: [
          'Step 1: Volume V = 5 x 5 x 5 = 125 cm³.',
          'Step 2: Density D = 270 / 125 = 2.16 g/cm³.',
          'Step 3: Comparison: 2.16 > 1.0 g/cm³, so the cube sinks to the bottom.'
        ],
        answerAr: 'حجم المكعب = 125 سم³ • الكثافة = 2.16 g/cm³ • يغوص المكعب لأن كثافته أكبر من كثافة الماء.',
        answerEn: 'Volume = 125 cm³ • Density = 2.16 g/cm³ • Sinks because its density exceeds water.'
      },
      {
        id: 'ex-sci1-2',
        questionAr: 'ذرة عنصر المغنيسيوم يُرمز لها بالرمز ₁₂²⁴Mg. 1) ما هو العدد الذري والعدد الكتلي؟ 2) احسب عدد كل من: البروتونات، الإلكترونات، والنيوترونات.',
        questionEn: 'Magnesium atom is represented as ₁₂²⁴Mg. 1) State atomic and mass numbers. 2) Calculate protons, electrons, and neutrons.',
        solutionStepsAr: [
          'العدد الذري Z = 12 (الرقم السفلي)، والعدد الكتلي A = 24 (الرقم العلوي).',
          'عدد البروتونات p⁺ = Z = 12 بروتوناً موجباً.',
          'عدد الإلكترونات e⁻ = عدد البروتونات = 12 إلكتروناً سالباً (ذرة متعادلة).',
          'عدد النيوترونات N = A - Z = 24 - 12 = 12 نيوتروناً متعادلاً.'
        ],
        solutionStepsEn: [
          'Atomic number Z = 12, Mass number A = 24.',
          'Protons = 12, Electrons = 12.',
          'Neutrons N = 24 - 12 = 12.'
        ],
        answerAr: 'العدد الذري = 12، العدد الكتلي = 24 • البروتونات = 12، الإلكترونات = 12، النيوترونات = 12.',
        answerEn: 'Atomic number = 12, Mass number = 24 • Protons = 12, Electrons = 12, Neutrons = 12.'
      }
    ],

    assessment: {
      id: 'quiz-sci-1',
      lectureId: 'sci-1',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 1: طبيعة المادة والذرات والعناصر والمركبات',
      titleEn: 'Comprehensive Mastery Assessment 1: Matter, Atoms & Compounds',
      passingScore: 80,
      questions: [
        {
          id: 'qsc1-1',
          textAr: 'ما هي الجسيمات سالبة الشحنة التي تدور في مستويات طاقة حول نواة الذرة؟',
          textEn: 'Which negatively charged particles orbit the atomic nucleus in energy shells?',
          optionsAr: ['الإلكترونات (e⁻)', 'البروتونات (p⁺)', 'النيوترونات (n⁰)', 'الجزيئات'],
          optionsEn: ['Electrons (e⁻)', 'Protons (p⁺)', 'Neutrons (n⁰)', 'Molecules'],
          correctIndex: 0,
          conceptTestedAr: 'بنية الذرة وجسيماتها دون الذرية',
          conceptTestedEn: 'Subatomic Particle Charges & Locations',
          explanationAr: 'الإلكترونات هي جسيمات سالبة الشحنة (-e) تدور في مدارات حول النواة، بينما البروتونات والنيوترونات توجد داخل النواة.',
          explanationEn: 'Electrons are the negative particles orbiting the atomic nucleus.',
          difficulty: 'easy'
        },
        {
          id: 'qsc1-2',
          textAr: 'جسم كتلته 200 جرام وحجمه 40 سم³. ما هي كثافته، وماذا يحدث له عند وضعه في سائل كثافته 2.5 g/cm³؟',
          textEn: 'An object has mass 200g and volume 40 cm³. What is its density, and how does it behave in a fluid with density 2.5 g/cm³?',
          optionsAr: [
            'كثافته 5.0 g/cm³ وينغمر في السائل',
            'كثافته 5.0 g/cm³ ويطفو على السائل',
            'كثافته 0.2 g/cm³ ويطفو على السائل',
            'كثافته 8000 g/cm³ وينغمر في السائل'
          ],
          optionsEn: [
            'Density is 5.0 g/cm³ and it sinks in the liquid',
            'Density is 5.0 g/cm³ and it floats',
            'Density is 0.2 g/cm³ and it floats',
            'Density is 8000 g/cm³ and it sinks'
          ],
          correctIndex: 0,
          conceptTestedAr: 'حساب الكثافة ومقارنة الطفو والانغمار',
          conceptTestedEn: 'Density Calculation & Fluid Buoyancy',
          explanationAr: 'D = m / V = 200 ÷ 40 = 5.0 g/cm³. بما أن كثافة الجسم (5.0) أكبر من كثافة السائل (2.5)، فإنه ينغمر ويغوص في القاع.',
          explanationEn: 'D = 200 / 40 = 5.0 g/cm³. Since 5.0 > 2.5 g/cm³, it sinks.',
          difficulty: 'medium'
        },
        {
          id: 'qsc1-3',
          textAr: 'ذرة عنصر الفوسفور ₁₅³¹P تحتوي نواتها على:',
          textEn: 'A Phosphorus atom ₁₅³¹P contains in its nucleus:',
          optionsAr: [
            '15 بروتوناً و 16 نيوتروناً',
            '15 بروتوناً و 31 نيوتروناً',
            '31 بروتوناً و 15 نيوتروناً',
            '16 بروتوناً و 15 نيوتروناً'
          ],
          optionsEn: [
            '15 protons and 16 neutrons',
            '15 protons and 31 neutrons',
            '31 protons and 15 neutrons',
            '16 protons and 15 neutrons'
          ],
          correctIndex: 0,
          conceptTestedAr: 'حساب النيوترونات والبروتونات من الرمز الذري',
          conceptTestedEn: 'Nuclear Particle Counting via A and Z',
          explanationAr: 'العدد الذري Z = 15 (عدد البروتونات). العدد الكتلي A = 31. عدد النيوترونات N = A - Z = 31 - 15 = 16 نيوتروناً.',
          explanationEn: 'Protons = Z = 15. Neutrons N = 31 - 15 = 16.',
          difficulty: 'medium'
        },
        {
          id: 'qsc1-4',
          textAr: 'أي من الطرق التالية هي الطريقة الفيزيائية المناسبة لفصل ملح الطعام الذائب في الماء؟',
          textEn: 'Which physical method is suitable to separate dissolved table salt from water?',
          optionsAr: [
            'التبخير (تسخين المحلول لتبخير الماء)',
            'الترشيح بورقة الترشيح',
            'الجذب المغناطيسي',
            'استخدام الملقط والفرز اليدوي'
          ],
          optionsEn: [
            'Evaporation (heating to vaporize water)',
            'Paper filtration',
            'Magnetic attraction',
            'Manual sorting'
          ],
          correctIndex: 0,
          conceptTestedAr: 'طرق فصل المخاليط والمحاليل المتجانسة',
          conceptTestedEn: 'Separation of Homogeneous Solutions',
          explanationAr: 'الملح مادة صلبة ذائبة تماماً في الماء (مخلوط متجانس)، لذا لا تنفصل بالترشيح بل بالتبخير حيث يتبخر الماء وتبقى بلورات الملح.',
          explanationEn: 'Dissolved salt passes through filter paper; evaporation boils off water leaving salt crystals behind.',
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

export function loadSubjectLectures(subject: Subject, country: string = 'SA', gradeLevel?: string): Lecture[] {
  const masterCurriculum = getCurriculumForSubject(subject);
  
  // Retrieve any community / AI-generated shared lectures for this subject and country
  const countryKey = `TEACHER_AI_SHARED_LECS_${country}_${subject}_${gradeLevel || ''}`;
  const generalKey = `TEACHER_AI_SHARED_LECS_${subject}`;
  let sharedLecs: Lecture[] = [];
  try {
    const list1 = JSON.parse(localStorage.getItem(countryKey) || '[]') as Lecture[];
    const list2 = JSON.parse(localStorage.getItem(generalKey) || '[]') as Lecture[];
    const map = new Map<string, Lecture>();
    [...list1, ...list2].forEach(l => { if (l && l.id) map.set(l.id, l); });
    sharedLecs = Array.from(map.values());
  } catch {
    sharedLecs = [];
  }

  const combined = [...masterCurriculum];
  sharedLecs.forEach(sh => {
    if (!combined.some(c => c.id === sh.id)) {
      combined.push({
        ...sh,
        order: combined.length + 1
      });
    }
  });

  const storageKey = `TEACHER_AI_LECTURES_${subject}`;
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      const parsed = JSON.parse(saved) as Lecture[];
      if (Array.isArray(parsed)) {
        const result = combined.map((freshLec) => {
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

        // Also preserve any newly generated lectures saved in user session
        parsed.forEach(p => {
          if (!result.some(r => r.id === p.id)) {
            result.push(p);
          }
        });

        return result;
      }
    } catch (e) {
      console.error(e);
    }
  }
  return combined;
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

