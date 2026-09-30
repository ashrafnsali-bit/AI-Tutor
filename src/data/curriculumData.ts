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
// 1. MATHEMATICS CURRICULUM (الرياضيات والجبر)
// ============================================================================
export const MATH_LECTURES: Lecture[] = [
  {
    id: 'math-1',
    order: 1,
    titleAr: 'المحاضرة 1: مدخل إلى المعادلات الخطية وخاصية التوازن',
    titleEn: 'Lecture 1: Introduction to Linear Equations & The Balance Property',
    subtitleAr: 'فهم مفهوم المتغير، وتبسيط الحدود المتشابهة، وتطبيق خاصية التوازن في العمليات الحسابية',
    subtitleEn: 'Master variables, balance properties, and inverse arithmetic operations to isolate unknowns.',
    durationMinutes: 25,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    // Official Curriculum Metadata
    gradeLevelNameAr: 'الصف الأول متوسط - المرحلة المتوسطة',
    gradeLevelNameEn: 'Grade 7 / Intermediate - Middle School',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثالثة: الجبر والدوال والمعادلات الخطية',
    unitTitleEn: 'Unit 3: Algebra, Functions & Linear Equations',
    lessonNumberAr: 'الدرس 1: المعادلات وخصائص التوازن الجبري',
    lessonNumberEn: 'Lesson 1: Equations & Balance Properties',

    // Real-world hook
    warmupHookAr: 'عندما تذهب إلى السوق وترى البائع يضع الأثقال الحديدية في كفة، ويضع الفاكهة في الكفة الأخرى حتى تستوي كفتا الميزان تماماً، فإنك تشاهد في الواقع معادلة جبرية حقيقية! إذا أضفت كيلوغراماً لكفة رجحت، ولإعادة التوازن يجب أن تضيف وزناً مكافئاً للكفة المقابلة. هذه هي خاصية التوازن الرياضي التي يقوم عليها علم الجبر بأكمله!',
    warmupHookEn: 'An old balance scale mirrors an algebraic equation: add an apple to one side, and you must add equal weight to the other to restore equilibrium. This is the immutable balance property of algebra!',

    // Target Learning Outcomes
    learningOutcomesAr: [
      'أن يعرّف الطالب المعادلة الخطية ويميّز بين الثوابت والمتغيرات بدقة',
      'أن يطبق خاصية الإضافة والطرح للمساواة لعزل المتغير الجبري',
      'أن يطبق خاصية الضرب والقسمة للمساواة للتخلص من المعاملات العددية',
      'أن يتحقق من صحة الحل الجبري بالتعويض المباشر في المعادلة الأصلية'
    ],
    learningOutcomesEn: [
      'Define linear equations and distinguish constants from unknown variables',
      'Apply addition and subtraction equality properties to isolate unknowns',
      'Utilize multiplication and division equality properties to eliminate coefficients',
      'Verify algebraic solutions via direct substitution'
    ],

    // Key Vocabulary
    vocabulary: [
      {
        termAr: 'المعادلة الخطية (Linear Equation)',
        termEn: 'Linear Equation',
        definitionAr: 'جملة رياضية تؤكد تكافؤ عبارتين جبريتين تحتويان على متغير من الدرجة الأولى تفصل بينهما علامة المساواة (=).',
        definitionEn: 'An algebraic statement asserting the equivalence of two expressions containing a first-degree variable.'
      },
      {
        termAr: 'المتغير الجبري (Variable)',
        termEn: 'Variable',
        definitionAr: 'رمز يمثل كمية مجهولة نبحث عن قيمتها العددية التي تجعل المعادلة صحيحة.',
        definitionEn: 'A symbol representing an unknown value that satisfies the equation.'
      },
      {
        termAr: 'العمليات العكسية (Inverse Operations)',
        termEn: 'Inverse Operations',
        definitionAr: 'عمليات تلغي إحداهما الأخرى (الجمع يلغي الطرح، والضرب يلغي القسمة) وتستخدم لعزل المتغير.',
        definitionEn: 'Operations that reverse each other used to isolate variables.'
      }
    ],

    keyConceptsAr: [
      'تعريف المعادلة الخطية والمتغير الجبري',
      'خاصية الإضافة والطرح للمساواة',
      'العمليات العكسية والمعاكسة للمساواة',
      'التحقق من صحة الحل بالتعويض المباشر'
    ],
    keyConceptsEn: [
      'Linear Equations & Variable Definition',
      'Addition & Subtraction Balance Property',
      'Inverse Arithmetic Operations',
      'Verification via Solution Substitution'
    ],
    summaryAr: 'في هذه المحاضرة نضع حجر الأساس للجبر؛ حيث نتعامل مع المعادلة كميزان ذي كفتين متساويتين تماماً، وأي عملية تجريها على الطرف الأيمن يجب إجراؤها بدقة على الطرف الأيسر للحفاظ على المساواة.',
    summaryEn: 'In this lecture, we establish the bedrock of algebra: treating equations as balanced scales where any arithmetic operation performed on one side must be mirrored on the other to preserve equality.',
    sections: [
      {
        titleAr: '1. ما هي المعادلة الجبرية؟ كفة الميزان وخاصية الجمع والطرح',
        titleEn: '1. What is an Algebraic Equation? The Balance Scale',
        contentAr: 'المعادلة هي جملة رياضية تحتوي على علامة المساواة (=) وتؤكد أن المقدارين على جانبيها متكافئان في القيمة. نستخدم المتغير (مثل x) لتمثيل كمية مجهولة نبحث عن قيمتها التي تجعل الجملة صحيحة.',
        contentEn: 'An equation is a mathematical statement containing an equality symbol (=) asserting that expressions on both sides have identical values. We employ variables (such as x) to denote unknown quantities.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: خاصية الطرح للمساواة',
          titleEn: 'Worked Example: Subtraction Property of Equality',
          equation: 'x + 7 = 19',
          steps: [
            { stepNumber: 1, textAr: 'لاحظ أن العدد 7 مضاف إلى المتغير x.', textEn: 'Notice that 7 is currently added to the variable x.', noteAr: 'العملية الحالية: جمع', noteEn: 'Active operation: Addition' },
            { stepNumber: 2, textAr: 'نعكس العملية بطرح 7 من طرفي المعادلة: (x + 7) - 7 = 19 - 7', textEn: 'Invert the operation by subtracting 7 from both sides: (x + 7) - 7 = 19 - 7', noteAr: 'خاصية الطرح للمساواة', noteEn: 'Subtraction Property of Equality' },
            { stepNumber: 3, textAr: 'الناتج: x = 12', textEn: 'Result: x = 12', noteAr: 'تم عزل المتغير بنجاح', noteEn: 'Variable isolated successfully' },
            { stepNumber: 4, textAr: 'التحقق: 12 + 7 = 19 (صحيح 100%)', textEn: 'Verification check: 12 + 7 = 19 (Equivalence confirmed)', noteAr: 'خطوة فحص الإجابة', noteEn: 'Verification step' }
          ],
          takeawayAr: 'القاعدة الذهبية: لعزل المتغير، نطبق دائماً العملية العكسية على كلا الطرفين.',
          takeawayEn: 'Golden Rule: To isolate an unknown variable, always apply the inverse operation equally to both sides.'
        },
        formativeCheck: {
          id: 'fc-math1-1',
          questionAr: 'في المعادلة: x + 9 = 24، ما العملية العكسية الصحيحة لعزل المتغير x؟',
          questionEn: 'In x + 9 = 24, which inverse operation isolates x?',
          optionsAr: ['طرح 9 من كلا الطرفين', 'جمع 9 لكلا الطرفين', 'قسمة الطرفين على 9', 'ضرب الطرفين في 9'],
          optionsEn: ['Subtract 9 from both sides', 'Add 9 to both sides', 'Divide both sides by 9', 'Multiply both sides by 9'],
          correctIndex: 0,
          explanationAr: 'بما أن العدد 9 مضاف (+)، فإن عكس الجمع هو الطرح (-)، فنطرح 9 من طرفي المساواة.',
          explanationEn: 'Since 9 is added, the inverse operation is subtracting 9 from both sides.',
          hintAr: 'ما هي العملية المعاكسة لعملية الجمع؟',
          hintEn: 'What operation inverses addition?'
        },
        tipsAr: ['عكس الجمع هو الطرح دائماً.', 'علامة (=) تعني توازناً مطلقاً، لا تغير كفة دون الأخرى.'],
        tipsEn: ['The inverse of addition is always subtraction.', 'The equal sign represents an immutable scale: whatever is done to one side must be done to the other.']
      },
      {
        titleAr: '2. خاصية الضرب والقسمة للمساواة',
        titleEn: '2. Multiplication & Division Property of Equality',
        contentAr: 'عندما يكون المتغير مضروباً في معامل (مثل 4x)، فإن العملية العكسية للضرب هي القسمة على نفس المعامل لكلا الطرفين، بشرط ألا يكون المعامل صفراً.',
        contentEn: 'When an unknown is bound by a coefficient (e.g. 4x), the inverse operation is division by that coefficient across both sides, provided the divisor is non-zero.',
        interactiveExample: {
          titleAr: 'مثال: القسمة للتخلص من المعامل',
          titleEn: 'Example: Division to Eliminate Coefficients',
          equation: '4x = 28',
          steps: [
            { stepNumber: 1, textAr: 'المتغير x مضروب في 4.', textEn: 'The variable x is multiplied by 4.', noteAr: 'المعامل هو 4', noteEn: 'Coefficient is 4' },
            { stepNumber: 2, textAr: 'نقسم كلا طرفي المعادلة على 4: (4x ÷ 4) = (28 ÷ 4)', textEn: 'Divide both sides of the equation by 4: (4x ÷ 4) = (28 ÷ 4)', noteAr: 'خاصية القسمة للمساواة', noteEn: 'Division Property of Equality' },
            { stepNumber: 3, textAr: 'الناتج: x = 7', textEn: 'Result: x = 7', noteAr: 'قيمة المجهول', noteEn: 'Isolated solution' }
          ],
          takeawayAr: 'عند قسمة الطرفين، احرص على قسمة كامل المقدار في كل طرف.',
          takeawayEn: 'When dividing equations, ensure the entire expression across each side is divided.'
        },
        formativeCheck: {
          id: 'fc-math1-2',
          questionAr: 'ما حل المعادلة الخطية التالية: 5y = 35؟',
          questionEn: 'What is the solution to 5y = 35?',
          optionsAr: ['y = 5', 'y = 7', 'y = 30', 'y = 40'],
          optionsEn: ['y = 5', 'y = 7', 'y = 30', 'y = 40'],
          correctIndex: 1,
          explanationAr: 'نقسم طرفي المعادلة على معامل y وهو 5: 35 ÷ 5 = 7.',
          explanationEn: 'Divide both sides by 5: 35 / 5 = 7.',
          hintAr: 'اقسم 35 على 5.',
          hintEn: 'Divide 35 by 5.'
        },
        tipsAr: ['إذا كان المعامل كسراً (مثل ½x = 6)، اضرب في مقلوبه للتخلص منه بخطوة واحدة.'],
        tipsEn: ['If the coefficient is a fraction (e.g., ½x = 6), multiply by the reciprocal (2) to solve directly.']
      }
    ],

    // Concept Map
    conceptMapAr: [
      'المعادلة كميزان ذي كفتين: ما يُجرى على اليمين يُجرى بدقة على اليسار',
      'المتغير المجموع (+) -> نتخلص منه بالطرح (-) من الطرفين',
      'المتغير المطروح (-) -> نتخلص منه بالجمع (+) للطرفين',
      'المتغير المضروب (×) -> نتخلص منه بالقسمة (÷) على المعامل',
      'خطوة التحقق الذهبية: عوّض بالناتج في المعادلة الأصلية للتأكد من صحة المساواة'
    ],
    conceptMapEn: [
      'Equations operate as balanced scales',
      'Addition inversed via subtraction',
      'Subtraction inversed via addition',
      'Multiplication inversed via division',
      'Verification: Plug back into original equation'
    ],

    // Textbook Exercises
    textbookExercises: [
      {
        id: 'ex-math1-1',
        questionAr: 'حل المعادلة الخطية التالية خطوة بخطوة مع التحقق: 3x + 5 = 26',
        questionEn: 'Solve and verify: 3x + 5 = 26',
        solutionStepsAr: [
          'الخطوة 1 (طرح الثابت): نطرح 5 من الطرفين: 3x = 26 - 5 = 21',
          'الخطوة 2 (القسمة على المعامل): نقسم الطرفين على 3: x = 21 ÷ 3 = 7',
          'الخطوة 3 (التحقق بالتعويض): 3 × 7 + 5 = 21 + 5 = 26 (صحيح 100%)'
        ],
        solutionStepsEn: [
          'Subtract 5 from both sides: 3x = 21',
          'Divide both sides by 3: x = 7',
          'Verify: 3(7) + 5 = 26 (confirmed)'
        ],
        answerAr: 'قيمة المتغير: x = 7',
        answerEn: 'Variable value: x = 7'
      }
    ],
    assessment: {
      id: 'quiz-math-1',
      lectureId: 'math-1',
      titleAr: 'الاختبار الإلزامي للمحاضرة الأولى: مهارات المعادلات ذات الخطوة الواحدة',
      titleEn: 'Lecture 1 Assessment: Single-Step Equation Mastery',
      passingScore: 80,
      questions: [
        {
          id: 'qm1-1',
          textAr: 'ما هي العملية العكسية المناسبة لحل المعادلة: x - 15 = 40 ؟',
          textEn: 'What is the appropriate inverse operation to solve: x - 15 = 40 ?',
          optionsAr: ['طرح 15 من كلا الطرفين', 'إضافة 15 لكلا الطرفين', 'قسمة الطرفين على 15', 'ضرب الطرفين في 15'],
          optionsEn: ['Subtract 15 from both sides', 'Add 15 to both sides', 'Divide both sides by 15', 'Multiply both sides by 15'],
          correctIndex: 1,
          conceptTestedAr: 'خاصية الإضافة والطرح للمساواة',
          conceptTestedEn: 'Addition & Subtraction Property of Equality',
          explanationAr: 'بما أن العدد 15 مطروح من x، فإن العملية العكسية للطرح هي الجمع (إضافة 15 لكلا الطرفين) ليكون x = 55.',
          explanationEn: 'Since 15 is subtracted from x, the inverse operation is addition (+15 on both sides), yielding x = 55.',
          difficulty: 'easy'
        },
        {
          id: 'qm1-2',
          textAr: 'إذا كانت المعادلة هي 6x = 54، فما قيمة المتغير x ؟',
          textEn: 'If 6x = 54, what is the value of variable x ?',
          optionsAr: ['x = 48', 'x = 60', 'x = 9', 'x = 7'],
          optionsEn: ['x = 48', 'x = 60', 'x = 9', 'x = 7'],
          correctIndex: 2,
          conceptTestedAr: 'خاصية الضرب والقسمة للمساواة',
          conceptTestedEn: 'Multiplication & Division Property of Equality',
          explanationAr: 'بقسمة الطرفين على معامل x وهو 6: (54 ÷ 6 = 9)، إذن x = 9.',
          explanationEn: 'Dividing both sides by the coefficient 6 yields 54 ÷ 6 = 9, so x = 9.',
          difficulty: 'easy'
        },
        {
          id: 'qm1-3',
          textAr: 'أي من المعادلات التالية تمثل حلاً صحيحاً يعطي x = 8 ؟',
          textEn: 'Which of the following equations has a solution of x = 8 ?',
          optionsAr: ['x + 10 = 17', '3x = 24', 'x - 4 = 14', 'x / 2 = 16'],
          optionsEn: ['x + 10 = 17', '3x = 24', 'x - 4 = 14', 'x / 2 = 16'],
          correctIndex: 1,
          conceptTestedAr: 'التحقق من صحة الحل والتعويض',
          conceptTestedEn: 'Verification & Substitution',
          explanationAr: 'في المعادلة 3x = 24، بقسمة الطرفين على 3 ينتج x = 8. باقي الخيارات لا تنتج 8.',
          explanationEn: 'In 3x = 24, dividing by 3 yields x = 8. The other options yield different values.',
          difficulty: 'medium'
        },
        {
          id: 'qm1-4',
          textAr: 'حل المعادلة: (⅓)x = 9 ، ما هي قيمة x؟',
          textEn: 'Solve the equation: (⅓)x = 9. What is x ?',
          optionsAr: ['x = 3', 'x = 6', 'x = 27', 'x = 12'],
          optionsEn: ['x = 3', 'x = 6', 'x = 27', 'x = 12'],
          correctIndex: 2,
          conceptTestedAr: 'التعامل مع المعاملات الكسرية ومقلوب العدد',
          conceptTestedEn: 'Fractional Coefficients & Reciprocals',
          explanationAr: 'للتخلص من الكسر ⅓، نضرب الطرفين في مقلوبه وهو 3: (9 × 3 = 27).',
          explanationEn: 'Multiply both sides by the reciprocal (3): x = 9 × 3 = 27.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'math-2',
    order: 2,
    titleAr: 'المحاضرة 2: حل المعادلات ذات الخطوتين والعمليات المعاكسة',
    titleEn: 'Lecture 2: Solving Two-Step Equations & Precedence',
    subtitleAr: 'الجمع بين الجمع والضرب، وترتيب العمليات العكسية لعزل المتغير بدقة',
    subtitleEn: 'Combine operations and reverse standard precedence to isolate variables cleanly.',
    durationMinutes: 30,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'math-1',
    prerequisiteTitleAr: 'المحاضرة 1: مدخل إلى المعادلات الخطية وخاصية التوازن',
    prerequisiteTitleEn: 'Lecture 1: Introduction to Linear Equations & The Balance Property',
    keyConceptsAr: [
      'عكس ترتيب العمليات الحسابية القياسي',
      'التخلص من الحد الثابت أولاً ثم المعامل',
      'التعامل مع الإشارات السالبة بدقة',
      'تطبيق المعادلات في حساب المسافات والتكاليف'
    ],
    keyConceptsEn: [
      'Reverse Order of Operations',
      'Eliminating Constants Before Coefficients',
      'Handling Negative Coefficients & Signs',
      'Linear Modeling for Real-World Scenarios'
    ],
    summaryAr: 'تحتوي المعادلة ذات الخطوتين على عمليتين حسابيتين مختلفتين تؤثران على المتغير. السر في حلها يكمن في عكس ترتيب العمليات القياسي (التخلص من الجمع والطرح أولاً، ثم التخلص من الضرب والقسمة).',
    summaryEn: 'A two-step equation features two distinct operations. The core principle is applying operations in reverse standard order: undo addition/subtraction before multiplication/division.',
    sections: [
      {
        titleAr: '1. استراتيجية الخطوتين: الترتيب هو المفتاح',
        titleEn: '1. Two-Step Strategy: Sequencing is Key',
        contentAr: 'عند حل معادلة مثل 2x + 5 = 17، نسأل أنفسنا: ما العمليات التي طرأت على x؟ لقد تم ضربه في 2 ثم أُضيف إليه 5. لعكس ذلك، نبدأ بالعكس: نتخلص من +5 أولاً بالطرح، ثم نتخلص من ضرب 2 بالقسمة.',
        contentEn: 'To solve 2x + 5 = 17, analyze the transformations on x: it is multiplied by 2, then incremented by 5. Inverting requires unwinding backwards: subtract 5 first, then divide by 2.',
        interactiveExample: {
          titleAr: 'حل نموذجي لمعادلة ذات خطوتين',
          titleEn: 'Worked Example: Two-Step Decomposition',
          equation: '2x + 5 = 17',
          steps: [
            { stepNumber: 1, textAr: 'اطرح 5 من الطرفين: 2x = 17 - 5', textEn: 'Subtract 5 from both sides: 2x = 17 - 5', noteAr: 'الخطوة 1: عزل الحد المحتوي على المتغير', noteEn: 'Step 1: Isolate the variable term' },
            { stepNumber: 2, textAr: 'التبسيط: 2x = 12', textEn: 'Simplify: 2x = 12', noteAr: 'أصبح لدينا معادلة خطوة واحدة', noteEn: 'Now reduced to a single-step equation' },
            { stepNumber: 3, textAr: 'اقسم الطرفين على 2: x = 12 ÷ 2', textEn: 'Divide both sides by 2: x = 12 ÷ 2', noteAr: 'الخطوة 2: عزل x نفسه', noteEn: 'Step 2: Isolate x' },
            { stepNumber: 4, textAr: 'النتيجة النهائية: x = 6', textEn: 'Final Solution: x = 6', noteAr: 'التحقق: 2(6) + 5 = 12 + 5 = 17 (صحيح)', noteEn: 'Check: 2(6) + 5 = 17 (Verified)' }
          ],
          takeawayAr: 'تخلص دائماً من الحد الثابت (البعيد عن المتغير) قبل التخلص من المعامل الملاصق له.',
          takeawayEn: 'Always eliminate the loose constant term prior to dividing by the coefficient.'
        },
        tipsAr: ['احذر من قسمة المعادلة على المعامل في البداية؛ البدء بالطرح دائماً أسلم وأسهل.'],
        tipsEn: ['Avoid dividing by the coefficient first if it creates awkward fractions; subtracting the constant first is cleaner.']
      }
    ],
    assessment: {
      id: 'quiz-math-2',
      lectureId: 'math-2',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثانية: المعادلات ذات الخطوتين',
      titleEn: 'Lecture 2 Assessment: Two-Step Equations & Sequencing',
      passingScore: 80,
      questions: [
        {
          id: 'qm2-1',
          textAr: 'ما هي الخطوة الأولى المثلى لحل المعادلة: 3x - 8 = 16 ؟',
          textEn: 'What is the optimal first step to solve: 3x - 8 = 16 ?',
          optionsAr: ['قسمة الطرفين على 3', 'إضافة 8 لكلا الطرفين', 'طرح 16 من الطرفين', 'ضرب الطرفين في 8'],
          optionsEn: ['Divide both sides by 3', 'Add 8 to both sides', 'Subtract 16 from both sides', 'Multiply both sides by 8'],
          correctIndex: 1,
          conceptTestedAr: 'ترتيب الخطوات وعزل الحد الثابت أولاً',
          conceptTestedEn: 'Operation Precedence & Constant Isolation',
          explanationAr: 'الخطوة الأولى الصحيحة هي التخلص من الحد الثابت (-8) بإضافة 8 للطرفين، ليصبح 3x = 24.',
          explanationEn: 'The first step is isolating the variable term by neutralizing -8 with +8, giving 3x = 24.',
          difficulty: 'easy'
        },
        {
          id: 'qm2-2',
          textAr: 'حل المعادلة: 5x + 10 = 45. ما هي قيمة x؟',
          textEn: 'Solve the equation: 5x + 10 = 45. What is x ?',
          optionsAr: ['x = 11', 'x = 7', 'x = 9', 'x = 5'],
          optionsEn: ['x = 11', 'x = 7', 'x = 9', 'x = 5'],
          correctIndex: 1,
          conceptTestedAr: 'حل المعادلات ذات الخطوتين',
          conceptTestedEn: 'Two-Step Equation Execution',
          explanationAr: 'طرح 10 من الطرفين يعطي 5x = 35، ثم قسمة الطرفين على 5 تعطي x = 7.',
          explanationEn: 'Subtracting 10 gives 5x = 35; dividing by 5 yields x = 7.',
          difficulty: 'medium'
        },
        {
          id: 'qm2-3',
          textAr: 'اشترى أحمد 3 كتب ودفع رسوم توصيل قدرها 15 ريالاً، فكان إجمالي المبلغ 75 ريالاً. أي معادلة تمثل سعر الكتاب الواحد (b)؟',
          textEn: 'Ahmad bought 3 books with a $15 delivery fee totaling $75. Which equation models the book price (b)?',
          optionsAr: ['3b + 15 = 75', '15b + 3 = 75', '3b - 15 = 75', 'b + 15 = 75'],
          optionsEn: ['3b + 15 = 75', '15b + 3 = 75', '3b - 15 = 75', 'b + 15 = 75'],
          correctIndex: 0,
          conceptTestedAr: 'النمذجة الرياضية للمسائل اللفظية',
          conceptTestedEn: 'Mathematical Word Problem Modeling',
          explanationAr: '3 كتب يعني 3b، مضافاً إليها 15 رسوم، بمجموع يساوي 75: 3b + 15 = 75.',
          explanationEn: '3 books (3b) plus $15 shipping fee equals $75: 3b + 15 = 75.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'math-3',
    order: 3,
    titleAr: 'المحاضرة 3: المعادلات مع متغيرات في الطرفين وخاصية التوزيع',
    titleEn: 'Lecture 3: Variables on Both Sides & The Distributive Property',
    subtitleAr: 'تجميع الحدود المتشابهة، وفك الأقواس، والتعامل مع الحالات الخاصة للمتطابقات',
    subtitleEn: 'Combine like terms, distribute parenthesis, and categorize special cases.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'math-2',
    prerequisiteTitleAr: 'المحاضرة 2: حل المعادلات ذات الخطوتين والعمليات المعاكسة',
    prerequisiteTitleEn: 'Lecture 2: Solving Two-Step Equations & Precedence',
    keyConceptsAr: ['خاصية التوزيع على الحدود', 'تجميع الحدود المتشابهة في طرف واحد', 'المتطابقات والحلول اللانهائية'],
    keyConceptsEn: ['Distributive Property', 'Combining Like Terms across Sides', 'Identities & Infinite Solutions'],
    summaryAr: 'عندما يظهر المتغير في كلا طرفي المعادلة، نقوم أولاً بنقل الحدود المتضمنة للمتغير إلى جهة واحدة والحدود الثابتة إلى الجهة الأخرى.',
    summaryEn: 'When unknowns populate both sides of an equality, collect variable terms onto a single side and constant terms on the other.',
    sections: [
      {
        titleAr: '1. نقل المتغيرات إلى طرف واحد',
        titleEn: '1. Collecting Variables onto One Side',
        contentAr: 'المعادلة 5x - 4 = 2x + 11 تحتوي على متغيرات يميناً ويساراً. نزيل الحد الأصغر للمتغير (2x) بطرحه من الطرفين.',
        contentEn: 'The equation 5x - 4 = 2x + 11 presents variables on both sides. Subtract the smaller term (2x) from both sides.',
        interactiveExample: {
          titleAr: 'مثال: جمع الحدود في طرف',
          titleEn: 'Worked Example: Multi-Variable Consolidation',
          equation: '5x - 4 = 2x + 11',
          steps: [
            { stepNumber: 1, textAr: 'اطرح 2x من الطرفين: 3x - 4 = 11', textEn: 'Subtract 2x from both sides: 3x - 4 = 11' },
            { stepNumber: 2, textAr: 'أضف 4 إلى الطرفين: 3x = 15', textEn: 'Add 4 to both sides: 3x = 15' },
            { stepNumber: 3, textAr: 'اقسم على 3: x = 5', textEn: 'Divide by 3: x = 5' }
          ],
          takeawayAr: 'اطرح دائماً المعامل الأصغر لتفادي الإشارات السالبة.',
          takeawayEn: 'Subtract the smaller variable coefficient to keep values positive.'
        },
        tipsAr: ['فك الأقواس دائماً قبل نقل الحدود.'],
        tipsEn: ['Always expand parentheses prior to grouping terms.']
      }
    ],
    assessment: {
      id: 'quiz-math-3',
      lectureId: 'math-3',
      titleAr: 'الاختبار الإلزامي للمحاضرة الثالثة: المتغيرات في الطرفين والأقواس',
      titleEn: 'Lecture 3 Assessment: Variables on Both Sides & Distribution',
      passingScore: 80,
      questions: [
        {
          id: 'qm3-1',
          textAr: 'حل المعادلة: 7x - 5 = 4x + 10. ما هي قيمة x؟',
          textEn: 'Solve: 7x - 5 = 4x + 10. What is x ?',
          optionsAr: ['x = 3', 'x = 5', 'x = 15', 'x = 2'],
          optionsEn: ['x = 3', 'x = 5', 'x = 15', 'x = 2'],
          correctIndex: 1,
          conceptTestedAr: 'حل المعادلات بمتغيرات في الطرفين',
          conceptTestedEn: 'Variables on Both Sides',
          explanationAr: 'طرح 4x يعطي 3x - 5 = 10. إضافة 5 تعطي 3x = 15. القسمة على 3 تعطي x = 5.',
          explanationEn: 'Subtract 4x: 3x - 5 = 10. Add 5: 3x = 15. Divide by 3: x = 5.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'math-4',
    order: 4,
    titleAr: 'المحاضرة 4: النمذجة الرياضية وحل المشكلات الهندسية والفيزيائية',
    titleEn: 'Lecture 4: Applied STEM Modeling & Real-World Problem Solving',
    subtitleAr: 'تحويل الظواهر الواقعية والمسائل الهندسية المعقدة إلى أنظمة معادلات خطية وتحليل حلولها',
    subtitleEn: 'Translate geometric constraints, kinematics, and scientific word problems into linear models.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    prerequisiteLectureId: 'math-3',
    prerequisiteTitleAr: 'المحاضرة 3: المعادلات مع متغيرات في الطرفين وخاصية التوزيع',
    prerequisiteTitleEn: 'Lecture 3: Variables on Both Sides & The Distributive Property',
    keyConceptsAr: ['صياغة النماذج الرياضية الواقعية', 'مسائل المحيط والمساحة الجبرية', 'تفسير منطقية الحل واقعياً'],
    keyConceptsEn: ['Translating Real Contexts into Variables', 'Geometric Perimeters & Algebraic Dimensions', 'Evaluating Physical Validity'],
    summaryAr: 'المحطة الختامية للوحدة؛ نستخدم فيها كل المهارات الجبرية التي أتقناها لحل مشاكل حقيقية في الهندسة والفيزياء.',
    summaryEn: 'The capstone module synthesizes algebra techniques to solve authentic engineering and physics challenges.',
    sections: [
      {
        titleAr: '1. الهندسة الجبرية: أبعاد المستطيل',
        titleEn: '1. Algebraic Geometry: Rectangular Dimensions',
        contentAr: 'مستطيل طوله يزيد عن عرضه بمقدار 4 أمتار، ومحيطه 36 متراً. نستخدم قانون المحيط لحساب أبعاده جبرياً.',
        contentEn: 'A rectangle length exceeds its width by 4m, with perimeter 36m. We solve for dimensions algebraically.',
        interactiveExample: {
          titleAr: 'تطبيق قانون المحيط',
          titleEn: 'Worked Example: Perimeter Modeling',
          equation: '2(w + (w + 4)) = 36',
          steps: [
            { stepNumber: 1, textAr: 'بسط ما بداخل القوس: 2(2w + 4) = 36', textEn: 'Simplify interior: 2(2w + 4) = 36' },
            { stepNumber: 2, textAr: 'طبق التوزيع: 4w + 8 = 36', textEn: 'Distribute: 4w + 8 = 36' },
            { stepNumber: 3, textAr: 'اطرح 8 واقسم على 4: w = 7 م', textEn: 'Subtract 8 and divide by 4: w = 7 meters' }
          ],
          takeawayAr: 'ترجمة النص اللغوي بدقة إلى تعبير جبري هو الخطوة الحاسمة للحل.',
          takeawayEn: 'Translating verbal constraints into algebraic notation is the core skill.'
        },
        tipsAr: ['تأكد من كتابة وحدات القياس (متر، ثانية، ريال) مع الحل.'],
        tipsEn: ['Always attach physical units to the final answer.']
      }
    ],
    assessment: {
      id: 'quiz-math-4',
      lectureId: 'math-4',
      titleAr: 'الاختبار النهائي للمحاضرة الرابعة: النمذجة وحل المسائل المتقدمة',
      titleEn: 'Lecture 4 Assessment: Applied Modeling & Word Problems',
      passingScore: 80,
      questions: [
        {
          id: 'qm4-1',
          textAr: 'مستطيل محيطه 40 سم، وعرضه 6 سم. ما هو طوله؟',
          textEn: 'A rectangle has a perimeter of 40 cm and a width of 6 cm. What is its length?',
          optionsAr: ['14 سم', '28 سم', '20 سم', '10 سم'],
          optionsEn: ['14 cm', '28 cm', '20 cm', '10 cm'],
          correctIndex: 0,
          conceptTestedAr: 'مسائل المحيط والمساحة',
          conceptTestedEn: 'Perimeter Modeling',
          explanationAr: 'نصف المحيط = 20 سم. بما أن العرض 6 سم، فإن الطول = 20 - 6 = 14 سم.',
          explanationEn: 'Semi-perimeter = 20 cm. Length = 20 - 6 = 14 cm.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
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

