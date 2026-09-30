const fs = require('fs');
const path = require('path');

const targetPath = path.join(__dirname, '../src/data/stemCurriculumData.ts');

const stemContent = `import type { Lecture } from '../types';

// ============================================================================
// 1. ADVANCED CHEMISTRY CURRICULUM — GRADE 12 STEM (كيمياء 3 مسارات)
// ============================================================================
export const CHEMISTRY_LECTURES: Lecture[] = [
  {
    id: 'chem-1',
    order: 1,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    titleAr: 'المحاضرة 1: نظرية التصادم وسرعة التفاعلات الكيميائية وطاقة التنشيط',
    titleEn: 'Lecture 1: Collision Theory, Reaction Rates & Activation Energy',
    subtitleAr: 'شروط التصادم الفعّال، حساب متوسط سرعة التفاعل، والعوامل المؤثرة وطاقة التنشيط',
    subtitleEn: 'Understand effective collision conditions, reaction rate laws, catalysts, and activation energy.',
    durationMinutes: 35,
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: حركية التفاعلات الكيميائية وسرعة التفاعل',
    unitTitleEn: 'Unit 1: Chemical Kinetics & Reaction Rates',
    lessonNumberAr: 'الدرس 1: نظرية التصادم والعوامل المؤثرة في السرعة',
    lessonNumberEn: 'Lesson 1: Collision Theory & Reaction Rates',
    warmupHookAr: 'لماذا يحفظ الطعام في الثلاجة لإبطاء تلفه؟ ولماذا تشتعل نشارة الخشب في ثوانٍ بينما يستغرق جذع الخشب ساعات؟ السر يكمن في "حركية التفاعلات الكيميائية" ونظرية التصادم: حيث يجب أن تتصادم الجزيئات بطاقة كافية وفي الاتجاه الصحيح لتكسير الروابط القديمة وتكوين روابط جديدة!',
    warmupHookEn: 'Why do refrigerators preserve food, and why does sawdust combust instantly while logs burn slowly? Collision theory dictates that molecular collisions must possess threshold activation energy in the correct geometric orientation to react!',
    learningOutcomesAr: [
      'أن يوضح الطالب فروض نظرية التصادم وشروط حدوث التصادم المثمر (الفعّال)',
      'أن يعرف طاقة التنشيط (Ea) والمعقد المنشط ويفسر منحنيات الطاقة للتفاعلات الماصة والطاردة',
      'أن يحدد العوامل الخمسة المؤثرة في سرعة التفاعل (التركيز، درجة الحرارة، مساحة السطح، طبيعة المواد، المحفزات)',
      'أن يكتب قانون سرعة التفاعل العام R = k [A]^m [B]^n ويحدد رتبة التفاعل'
    ],
    learningOutcomesEn: [
      'Explain collision theory postulates and conditions for effective collisions',
      'Define activation energy (Ea) and activated complex for endo/exothermic profiles',
      'Analyze 5 factors affecting reaction rates (concentration, temp, surface area, nature, catalysts)',
      'Formulate the rate law R = k [A]^m [B]^n and calculate overall reaction order'
    ],
    vocabulary: [
      {
        termAr: 'نظرية التصادم (Collision Theory)',
        termEn: 'Collision Theory',
        definitionAr: 'نظرية تنص على وجوب تصادم الذرات أو الأيونات أو الجزيئات ببعضها لتتفاعل، بشرط توافر الاتجاه المناسب وطاقة كافية تساوي أو تفوق طاقة التنشيط.',
        definitionEn: 'Theory stating reactant particles must collide with correct orientation and energy >= Ea to react.'
      },
      {
        termAr: 'طاقة التنشيط (Activation Energy - Ea)',
        termEn: 'Activation Energy (Ea)',
        definitionAr: 'الحد الأدنى من الطاقة اللازمة لبدء التفاعل الكيميائي وتكوين المعقد المنشط.',
        definitionEn: 'Minimum kinetic energy required to initiate a reaction and form the activated complex.'
      },
      {
        termAr: 'المحفز (Catalyst)',
        termEn: 'Catalyst',
        definitionAr: 'مادة تزيد من سرعة التفاعل الكيميائي عن طريق تقليل طاقة التنشيط دون أن تستهلك في التفاعل.',
        definitionEn: 'A substance that accelerates reaction rate by lowering activation energy without being consumed.'
      }
    ],
    keyConceptsAr: ['شروط التصادم الفعّال', 'طاقة التنشيط والمعقد المنشط', 'العوامل المؤثرة في سرعة التفاعل', 'قانون سرعة التفاعل ورتبة التفاعل'],
    keyConceptsEn: ['Effective Collisions', 'Activation Energy & Activated Complex', 'Rate Factors', 'Rate Law & Reaction Orders'],
    summaryAr: 'تتحكم نظرية التصادم في سرعة تحول المواد المتفاعلة إلى نواتج؛ حيث تزيد زيادة الحرارة والتركيز ومساحة السطح من عدد التصادمات الفعالة، بينما تخفض المحفزات حاجز طاقة التنشيط.',
    summaryEn: 'Collision theory governs chemical kinetics: temperature, concentration, and surface area increase effective collisions, while catalysts lower the activation energy barrier.',
    sections: [
      {
        titleAr: '1. شروط التصادم الفعّال وطاقة التنشيط',
        titleEn: '1. Effective Collisions & Activation Energy',
        contentAr: 'لكي يكون التصادم بين جزيئات المواد المتفاعلة تصادماً منتجاً (فعّالاً)، يجب تحقق شرطين أساسيين: 1) الاتجاه الفراغي الصحيح للجزيئات المتصادمة، 2) امتلاك الجزيئات طاقة حركة كافية تساوي طاقة التنشيط Ea على الأقل لتكوين المعقد المنشط (حالة انتقالية غير مستقرة ذات طاقة عالية).',
        contentEn: 'An effective collision requires correct geometric orientation and sufficient kinetic energy >= activation energy (Ea) to form the high-energy activated complex.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: تأثير المحفز على طاقة التنشيط',
          titleEn: 'Worked Example: Catalyst Effect on Activation Energy',
          steps: [
            { stepNumber: 1, textAr: 'تفاعل غير محفز: طاقة التنشيط Ea = 120 kJ/mol (حاجز طاقة مرتفع، تفاعل بطيء).', textEn: 'Uncatalyzed: Ea = 120 kJ/mol (high barrier, slow rate).' },
            { stepNumber: 2, textAr: 'إضافة المحفز: يوفر مساراً بديلاً بطاقة تنشيط Ea = 45 kJ/mol.', textEn: 'With catalyst: alternative pathway with Ea = 45 kJ/mol.' },
            { stepNumber: 3, textAr: 'النتيجة: يزداد عدد الجزيئات الممتلكة لطاقة كافية للتفاعل في الثانية الواحدة فتتضاعف السرعة ملايين المرات.', textEn: 'Result: vastly more particles possess sufficient energy, multiplying reaction velocity.' }
          ],
          takeawayAr: 'المحفز يسرع التفاعل بخفض طاقة التنشيط دون تغيير محتوى الطاقة للنواتج أو المتفاعلات (ΔH ثابت).',
          takeawayEn: 'Catalysts accelerate reactions purely by lowering Ea without altering overall enthalpy ΔH.'
        },
        tipsAr: ['المحفزات الحيوية في جسم الإنسان تسمى الإنزيمات (Enzymes)'],
        tipsEn: ['Biological catalysts in living organisms are called enzymes'],
        formativeCheck: {
          id: 'fc-chem1-1',
          questionAr: 'ما هو الشرط الضروري لحدوث تصادم كيميائي فعّال بين الجزيئات؟',
          questionEn: 'What is a mandatory requirement for an effective chemical collision?',
          optionsAr: [
            'أن تمتلك الجزيئات طاقة تساوي أو تفوق طاقة التنشيط بالاتجاه المناسب',
            'أن تكون الجزيئات في الحالة الغازية فقط',
            'أن ترتفع درجة الحرارة فوق 100 درجة مئوية دائماً',
            'أن يكون التفاعل طارداً للحرارة'
          ],
          optionsEn: [
            'Particles possess energy >= Ea with correct orientation',
            'Particles must be in gaseous state only',
            'Temperature must exceed 100°C always',
            'The reaction must be exothermic'
          ],
          correctIndex: 0,
          explanationAr: 'شروط التصادم الفعّال هما: امتلاك طاقة كافية (>= Ea) والتصادم بالاتجاه الفراغي الصحيح.',
          explanationEn: 'The two criteria are energy >= Ea and correct spatial collision geometry.',
          hintAr: 'تذكر شروط نظرية التصادم الأساسية: الطاقة والاتجاه.'
        }
      }
    ],
    assessment: {
      id: 'quiz-chem-1',
      lectureId: 'chem-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: سرعة التفاعلات ونظرية التصادم (3 ثانوي STEM)',
      titleEn: 'Mastery Quiz 1: Chemical Kinetics (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qc1-1',
          textAr: 'المعقد المنشط (Activated Complex) هو حالة:',
          textEn: 'The activated complex is a state that is:',
          optionsAr: [
            'انتقالية غير مستقرة ذات طاقة عالية وتتكون لحظياً',
            'مستقرة ذات طاقة منخفضة وتبقى طويلاً',
            'تمثل النواتج النهائية للتفاعل',
            'مادة متفاعلة لم تبدأ بالتفاعل بعد'
          ],
          optionsEn: [
            'High-energy, unstable transitional state formed momentarily',
            'Stable low-energy permanent product',
            'Final chemical product',
            'Unreacted starting material'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف المعقد المنشط',
          conceptTestedEn: 'Activated Complex Definition',
          explanationAr: 'المعقد المنشط تجمع ذري انتقالي غير مستقر ذو طاقة وضع عالية يتكون في قمة منحنى طاقة التنشيط.',
          explanationEn: 'The activated complex is an unstable temporary state at the peak of the potential energy diagram.',
          difficulty: 'easy'
        },
        {
          id: 'qc1-2',
          textAr: 'إذا تضاعف تركيز المادة A ثلاث مرات وتضاعفت سرعة التفاعل 9 مرات، فإن رتبة التفاعل بالنسبة للمادة A هي:',
          textEn: 'If [A] is tripled and the reaction rate increases 9-fold, the order with respect to A is:',
          optionsAr: ['الرتبة الثانية (2)', 'الرتبة الأولى (1)', 'الرتبة الصفرية (0)', 'الرتبة الثالثة (3)'],
          optionsEn: ['Second order (2)', 'First order (1)', 'Zero order (0)', 'Third order (3)'],
          correctIndex: 0,
          conceptTestedAr: 'حساب رتبة التفاعل',
          conceptTestedEn: 'Reaction Order Determination',
          explanationAr: 'بما أن (3)^m = 9 = (3)^2، إذن رتبة التفاعل m = 2 (الرتبة الثانية).',
          explanationEn: '3^m = 9 = 3^2 => m = 2 (Second order).',
          difficulty: 'medium'
        },
        {
          id: 'qc1-3',
          textAr: 'زيادة مساحة سطح المواد المتفاعلة الصلبة تزيد من سرعة التفاعل الكيميائي بسبب:',
          textEn: 'Increasing the surface area of solid reactants increases rate because:',
          optionsAr: [
            'زيادة عدد الجسيمات المعرضة للتصادم في وحدة الزمن',
            'خفض طاقة التنشيط للتفاعل',
            'تغيير حرارة التفاعل الكلية ΔH',
            'زيادة طاقة حركة الجسيمات'
          ],
          optionsEn: [
            'Increasing the number of colliding particles per unit time',
            'Lowering the reaction activation energy',
            'Changing overall enthalpy ΔH',
            'Increasing particle kinetic energy'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تأثير مساحة السطح في سرعة التفاعل',
          conceptTestedEn: 'Surface Area Effect',
          explanationAr: 'زيادة مساحة السطح تتيح لعدد أكبر من الجسيمات التلامس والتصادم معاً في نفس اللحظة.',
          explanationEn: 'More exposed surface provides more collision sites per second.',
          difficulty: 'easy'
        }
      ]
    }
  },
  {
    id: 'chem-2',
    order: 2,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    titleAr: 'المحاضرة 2: الاتزان الكيميائي ومبدأ لوتشاتلييه وثابت الاتزان Keq',
    titleEn: 'Lecture 2: Chemical Equilibrium, Le Chatelier\\\'s Principle & Equilibrium Constant Keq',
    subtitleAr: 'الاتزان الديناميكي، قانون الاتزان الكيميائي، والعوامل المؤثرة في إزاحة موضع الاتزان',
    subtitleEn: 'Master dynamic equilibrium, Keq expressions, reaction quotient Q, and Le Chatelier stress response.',
    durationMinutes: 35,
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: الاتزان الكيميائي والذائبية',
    unitTitleEn: 'Unit 2: Chemical Equilibrium & Solubility',
    lessonNumberAr: 'الدرس 2: الاتزان الكيميائي ومبدأ لوتشاتلييه',
    lessonNumberEn: 'Lesson 2: Chemical Equilibrium & Le Chatelier',
    warmupHookAr: 'في صناعة الأمونيا (طريقة هابر-بوش) التي تنتج الأسمدة المغذية لنصف سكان كوكب الأرض، يصل التفاعل إلى حالة اتزان تتساوى فيها سرعة التفاعل الأمامي مع العكسي. كيف استطاع الكيميائيون التلاعب بالضغط والحرارة لإجبار التفاعل على إنتاج المزيد من الأمونيا؟ إنه مبدأ لوتشاتلييه العبقري!',
    warmupHookEn: 'The Haber-Bosch ammonia synthesis sustains billions via equilibrium manipulation. Le Chatelier\\\'s principle allows engineers to steer dynamic reversible reactions toward maximal product yield!',
    learningOutcomesAr: [
      'أن يعرف الطالب حالة الاتزان الكيميائي الديناميكي وتساوي سرعتي التفاعل الأمامي والعكسي',
      'أن يكتب تعبير ثابت الاتزان Keq للتفاعلات المتجانسة وغير المتجانسة',
      'أن يطبق مبدأ لوتشاتلييه لتوقع اتجاه إزاحة الاتزان عند تغير (التركيز، الضغط/الحجم، درجة الحرارة)',
      'أن يقارن بين حاصل التفاعل Q وثابت الاتزان Keq لتحديد اتجاه سير التفاعل'
    ],
    learningOutcomesEn: [
      'Define dynamic chemical equilibrium and equal forward/reverse reaction rates',
      'Write Keq equilibrium constant expressions for homogeneous/heterogeneous systems',
      'Apply Le Chatelier\\\'s principle for stresses in concentration, pressure/volume, and temperature',
      'Compare reaction quotient Q with Keq to predict shift direction'
    ],
    vocabulary: [
      {
        termAr: 'الاتزان الكيميائي (Chemical Equilibrium)',
        termEn: 'Chemical Equilibrium',
        definitionAr: 'حالة ديناميكية في التفاعل العكسي تتساوى فيها سرعة التفاعل الأمامي مع سرعة التفاعل العكسي وتثبت فيها تراكيز المواد المتفاعلة والناتجة.',
        definitionEn: 'Dynamic state where forward and reverse reaction rates are equal and concentrations remain constant.'
      },
      {
        termAr: 'مبدأ لوتشاتلييه (Le Chatelier\\\'s Principle)',
        termEn: 'Le Chatelier\\\'s Principle',
        definitionAr: 'إذا بُذل جهد أو تغير على نظام في حالة اتزان (مثل تغير التركيز أو الضغط أو الحرارة)، فإن النظام يعدل نفسه في الاتجاه الذي يقلل من أثر هذا الجهد.',
        definitionEn: 'If a stress is applied to a system at equilibrium, the system shifts in the direction that relieves the stress.'
      }
    ],
    keyConceptsAr: ['الاتزان الديناميكي', 'تعبير ثابت الاتزان Keq', 'مبدأ لوتشاتلييه والعوامل المؤثرة', 'حاصل التفاعل Q'],
    keyConceptsEn: ['Dynamic Equilibrium', 'Keq Constant Expression', 'Le Chatelier\\\'s Principle', 'Reaction Quotient Q'],
    summaryAr: 'الاتزان الكيميائي حالة ديناميكية مستقرة، وعند تعرض النظام لإجهاد (تغير حرارة أو ضغط أو تركيز) ينزاح موضع الاتزان لتخفيف الأثر واستعادة التوازن.',
    summaryEn: 'Chemical equilibrium is dynamic. Systems perturbed by concentration, pressure, or temperature shifts respond per Le Chatelier\\\'s principle to restore equilibrium.',
    sections: [
      {
        titleAr: '1. مبدأ لوتشاتلييه وإزاحة موضع الاتزان',
        titleEn: '1. Le Chatelier\\\'s Principle & Equilibrium Shifts',
        contentAr: 'قواعد لوتشاتلييه: 1) إضافة مادة متفاعلة ينزاح الاتزان نحو النواتج (يميناً). 2) زيادة الضغط (تقليل الحجم) ينزاح الاتزان نحو الطرف ذي عدد المولات الغازية الأقل. 3) رفع درجة الحرارة في تفاعل طارد للحرارة ينزاح نحو المتفاعلات (يساراً) وتقل قيمة Keq.',
        contentEn: 'Rules: Adding reactants shifts right; increasing pressure shifts toward fewer gas moles; heating exothermic reactions shifts left and lowers Keq.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: تفاعل هابر لإنتاج الأمونيا',
          titleEn: 'Worked Example: Haber Ammonia Synthesis',
          steps: [
            { stepNumber: 1, textAr: 'التفاعل: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) + حرارة (تفاعل طارد، 4 مولات غاز يساراً و 2 مول يميناً).', textEn: 'Reaction: N2 + 3H2 <=> 2NH3 + Heat (exothermic, 4 gas moles left vs 2 right).' },
            { stepNumber: 2, textAr: 'زيادة الضغط: ينزاح التفاعل نحو اليمين (عدد المولات الأقل = 2NH₃) ليزداد إنتاج الأمونيا.', textEn: 'Increasing pressure shifts toward fewer moles (right), producing more NH3.' },
            { stepNumber: 3, textAr: 'إزالة الأمونيا المستمرة: ينزاح التفاعل يميناً لتعويض النقص باستمرار.', textEn: 'Continuous NH3 removal continuously pulls equilibrium forward.' }
          ],
          takeawayAr: 'العامل الوحيد الذي يغير قيمة الثابت Keq هو درجة الحرارة فقط، بينما التغيرات الأخرى تغير موضع الاتزان فقط.',
          takeawayEn: 'Temperature is the only factor that alters the numerical value of Keq; other stresses shift positions.'
        },
        tipsAr: ['المواد الصلبة النقية (s) والسائلة النقية (l) لا تكتب في تعبير Keq لأن تراكيزها ثابتة'],
        tipsEn: ['Pure solids (s) and pure liquids (l) are omitted from Keq expressions'],
        formativeCheck: {
          id: 'fc-chem2-1',
          questionAr: 'في التفاعل الطارد للحرارة: A(g) + B(g) ⇌ C(g) + حرارة، ماذا يحدث عند رفع درجة الحرارة؟',
          questionEn: 'In exothermic A(g) + B(g) <=> C(g) + heat, what happens upon heating?',
          optionsAr: [
            'ينزاح الاتزان نحو اليسار (المتفاعلات) وتقل قيمة Keq',
            'ينزاح الاتزان نحو اليمين (النواتج) وتزداد قيمة Keq',
            'لا يتأثر موضع الاتزان',
            'ينزاح الاتزان نحو اليمين وتبقى Keq ثابتة'
          ],
          optionsEn: [
            'Shifts left (reactants) and Keq decreases',
            'Shifts right (products) and Keq increases',
            'No shift occurs',
            'Shifts right with constant Keq'
          ],
          correctIndex: 0,
          explanationAr: 'في التفاعل الطارد، الحرارة ناتج، فرفعها يجبر النظام على استهلاك الحرارة الزائدة بالانزياح نحو اليسار وخفض Keq.',
          explanationEn: 'Heat is a product in exothermic reactions; adding heat shifts equilibrium left, reducing Keq.',
          hintAr: 'عامل الحرارة كأحد النواتج في التفاعل الطارد للحرارة.'
        }
      }
    ],
    assessment: {
      id: 'quiz-chem-2',
      lectureId: 'chem-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: الاتزان الكيميائي (3 ثانوي STEM)',
      titleEn: 'Mastery Quiz 2: Chemical Equilibrium (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qc2-1',
          textAr: 'تعبير ثابت الاتزان Keq للتفاعل: CaCO₃(s) ⇌ CaO(s) + CO₂(g) هو:',
          textEn: 'The equilibrium expression Keq for CaCO3(s) <=> CaO(s) + CO2(g) is:',
          optionsAr: ['Keq = [CO₂]', 'Keq = [CaO][CO₂] / [CaCO₃]', 'Keq = [CO₂] / [CaCO₃]', 'Keq = [CaO][CO₂]'],
          optionsEn: ['Keq = [CO2]', 'Keq = [CaO][CO2] / [CaCO3]', 'Keq = [CO2] / [CaCO3]', 'Keq = [CaO][CO2]'],
          correctIndex: 0,
          conceptTestedAr: 'تعبير ثابت الاتزان غير المتجانس',
          conceptTestedEn: 'Heterogeneous Equilibrium Expression',
          explanationAr: 'المواد الصلبة CaCO3 و CaO تحذف من تعبير الاتزان لأن تركيزها ثابت، فيتبقى فقط [CO2].',
          explanationEn: 'Pure solids are omitted from Keq, leaving Keq = [CO2].',
          difficulty: 'easy'
        },
        {
          id: 'qc2-2',
          textAr: 'إذا كانت قيمة Keq = 1.5 x 10^4 (قيمة كبيرة جداً أكبر من 1 بكثير)، فهذا يعني أن:',
          textEn: 'If Keq = 1.5 x 10^4 (Keq >> 1), this indicates:',
          optionsAr: [
            'النواتج تسود وتركيزها أعلى بكثير من المتفاعلات عند الاتزان',
            'المتفاعلات تسود والتفاعل بالكاد يحدث',
            'تراكيز النواتج والمتفاعلات متساوية تماماً',
            'التفاعل لا يصل إلى الاتزان'
          ],
          optionsEn: [
            'Products predominate over reactants at equilibrium',
            'Reactants predominate and reaction barely proceeds',
            'Reactant and product concentrations are identical',
            'Reaction never reaches equilibrium'
          ],
          correctIndex: 0,
          conceptTestedAr: 'دلالة قيمة ثابت الاتزان Keq',
          conceptTestedEn: 'Keq Magnitude Interpretation',
          explanationAr: 'Keq > 1 تعني أن البسط (النواتج) أكبر بكثير من المقام (المتفاعلات).',
          explanationEn: 'Keq >> 1 signifies product-favored equilibrium.',
          difficulty: 'easy'
        },
        {
          id: 'qc2-3',
          textAr: 'إذا كان حاصل التفاعل Q < Keq، فإن التفاعل يسير نحو:',
          textEn: 'If reaction quotient Q < Keq, the reaction shifts toward:',
          optionsAr: [
            'اليمين (تكوين المزيد من النواتج)',
            'اليسار (تكوين المزيد من المتفاعلات)',
            'حالة الاتزان ولا يتحرك',
            'التفكك التام'
          ],
          optionsEn: [
            'Right (forming more products)',
            'Left (forming more reactants)',
            'Already at equilibrium',
            'Complete dissociation'
          ],
          correctIndex: 0,
          conceptTestedAr: 'مقارنة Q مع Keq',
          conceptTestedEn: 'Reaction Quotient vs Keq',
          explanationAr: 'عندما تكون Q < Keq، فإن النواتج أقل من حالة الاتزان، فينحاز التفاعل نحو اليمين لزيادة النواتج حتى تصبح Q = Keq.',
          explanationEn: 'Q < Keq means insufficient products, so system shifts right to reach equilibrium.',
          difficulty: 'medium'
        }
      ]
    }
  }
];

// ============================================================================
// 2. ADVANCED BIOLOGY CURRICULUM — GRADE 12 STEM (أحياء 3 مسارات)
// ============================================================================
export const BIOLOGY_LECTURES: Lecture[] = [
  {
    id: 'bio-1',
    order: 1,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    titleAr: 'المحاضرة 1: الوراثة الجزيئية وتركيب الحمض النووي DNA وتضاعفه شبه المحافظ',
    titleEn: 'Lecture 1: Molecular Genetics, DNA Structure & Semi-Conservative Replication',
    subtitleAr: 'نموذج واطسون وكريك، القواعد النيتروجينية وقاعدة تشارجاف، وإنزيمات تضاعف DNA',
    subtitleEn: 'Master double helix structure, Chargaff\\\'s rules, helicase, DNA polymerase, and Okazaki fragments.',
    durationMinutes: 35,
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: الوراثة الجزيئية والبيولوجيا الجزيئية',
    unitTitleEn: 'Unit 1: Molecular Genetics & Biotechnology',
    lessonNumberAr: 'الدرس 1: مادة الوراثة DNA وتضاعفها الخلوي',
    lessonNumberEn: 'Lesson 1: DNA Structure & Replication',
    warmupHookAr: 'تحتوي نواة كل خلية بشرية مجهرية على شريط DNA يبلغ طوله حوالي مترين إذا فُرد بالكامل، ويحمل 3 مليارات حرف كيميائي تشفر كل صفاتك الحيوية من لون العين إلى فصيلة الدم. كيف يُنسخ هذا الأرشيف الهائل بدقة متناهية دون خطأ أثناء انقسام الخلايا؟ إنها الآلية الإعجازية لتضاعف DNA وإنزيمات التدقيق اللغوي الخلوي!',
    warmupHookEn: 'Every microscopic human cell packs 2 meters of DNA containing 3 billion base pairs. Semi-conservative replication with high-fidelity proofreading polymerases copies this vast blueprint flawlessly in minutes!',
    learningOutcomesAr: [
      'أن يصف الطالب التركيب الكيميائي للنيوكليوتيدة وشريط DNA اللولبي المزدوج المتعاكس',
      'أن يطبق قاعدة تشارجاف لتكامل القواعد النيتروجينية (A=T برابطتين، G≡C بثلاث روابط هيدروجينية)',
      'أن يشرح آلية التضاعف شبه المحافظ ودور الإنزيمات (الهيليكيز، بلمرة DNA، الليجيز)',
      'أن يقارن بين بناء السلسلة الرائدة والسلسلة المتأخرة وقطع أوكازاكي'
    ],
    learningOutcomesEn: [
      'Describe nucleotide composition and antiparallel double-helix DNA geometry',
      'Apply Chargaff\\\'s complementary base pairing rules (A=T via 2 H-bonds, G=C via 3 H-bonds)',
      'Explain semi-conservative replication enzymes (Helicase, DNA Polymerase, Ligase)',
      'Differentiate leading strand continuous synthesis from lagging strand Okazaki fragments'
    ],
    vocabulary: [
      {
        termAr: 'النيوكليوتيدة (Nucleotide)',
        termEn: 'Nucleotide',
        definitionAr: 'وحدة البناء الأساسية للحمض النووي، وتتكون من: سكر خماسي الكربون (ريبوز منقوص الأكسجين في DNA)، مجموعة فوسفات، وقاعدة نيتروجينية (A, T, C, G).',
        definitionEn: 'Basic monomer of nucleic acids: deoxyribose sugar, phosphate group, and nitrogenous base.'
      },
      {
        termAr: 'التضاعف شبه المحافظ (Semi-Conservative Replication)',
        termEn: 'Semi-Conservative Replication',
        definitionAr: 'طريقة تضاعف DNA حيث يعمل كل شريط أصلي كقالب لبناء شريط جديد متمم له، فيحتوي كل جزيء ناتج على شريط أصلي وشريط جديد.',
        definitionEn: 'Replication mechanism where each daughter DNA molecule retains one parental and one new strand.'
      },
      {
        termAr: 'إنزيم بلمرة DNA (DNA Polymerase)',
        termEn: 'DNA Polymerase',
        definitionAr: 'الإنزيم المسؤول عن إضافة النيوكليوتيدات المتممة في الاتجاه من 5\\\' إلى 3\\\' والتدقيق اللغوي لتصحيح الأخطاء.',
        definitionEn: 'Enzyme that synthesizes complementary DNA strands 5\\\'->3\\\' and performs proofreading.'
      }
    ],
    keyConceptsAr: ['اللولب المزدوج وقاعدة تشارجاف', 'التضاعف شبه المحافظ', 'إنزيمات التضاعف (هيليكيز، بلمرة، ليجيز)', 'السلسلة الرائدة وقطع أوكازاكي'],
    keyConceptsEn: ['Double Helix & Chargaff\\\'s Rules', 'Semi-Conservative Mechanism', 'Replication Enzymes', 'Leading/Lagging Strands & Okazaki Fragments'],
    summaryAr: 'DNA هو المخطط الوراثي للخلية. يتضاعف بفك اللولب بواسطة الهيليكيز وبناء أشرطة متممة جديدة بواسطة إنزيم البلمرة بدقة فائقة وفق آلية شبه محافظة.',
    summaryEn: 'DNA double helix carries genetic instructions, replicating semi-conservatively using helicase, polymerases, and ligase with high fidelity.',
    sections: [
      {
        titleAr: '1. قاعدة تشارجاف وتكامل القواعد النيتروجينية',
        titleEn: '1. Chargaff\\\'s Rule & Complementary Base Pairing',
        contentAr: 'أثبت تشارجاف أن في أي عينة DNA: نسبة الأدنين تساوي دائماً نسبة الثايمين (%A = %T)، ونسبة الجوانين تساوي نسبة السايتوسين (%G = %C). يرتبط A مع T برابطتين هيدروجينيتين، ويرتبط G مع C بثلاث روابط هيدروجينية مما يجعله أكثر استقراراً حرارياً.',
        contentEn: 'Chargaff\\\'s rules state %A = %T (2 H-bonds) and %G = %C (3 H-bonds). G-C rich regions exhibit higher thermal stability.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب نسب القواعد النيتروجينية',
          titleEn: 'Worked Example: Base Percentage Calculation',
          steps: [
            { stepNumber: 1, textAr: 'المعطى: عينة DNA تحتوي على 30% أدنين (A).', textEn: 'Given: DNA sample contains 30% Adenine (A).' },
            { stepNumber: 2, textAr: 'بما أن %A = %T، فإن الثايمين T = 30%. مجموع (A + T) = 60%.', textEn: 'Since %A = %T => Thymine = 30%. Combined (A+T) = 60%.' },
            { stepNumber: 3, textAr: 'المتبقي لـ (G + C) = 100% - 60% = 40%. بما أن %G = %C، فإن الجوانين G = 20% والسايتوسين C = 20%.', textEn: 'Remaining (G+C) = 40% => Guanine = 20%, Cytosine = 20%.' }
          ],
          takeawayAr: 'نسبة البيورينات (A+G) تساوي دائماً نسبة البيريميدينات (T+C) وتساوي 50% من جزيء DNA.',
          takeawayEn: 'Total purines (A+G) always equal total pyrimidines (T+C) = 50% in double-stranded DNA.'
        },
        tipsAr: ['البيورينات (A, G) ذات حلقتين، والبيريميدينات (C, T, U) ذات حلقة واحدة'],
        tipsEn: ['Purines (A, G) have 2 rings; Pyrimidines (C, T, U) have 1 ring'],
        formativeCheck: {
          id: 'fc-bio1-1',
          questionAr: 'إذا كانت نسبة السايتوسين (C) في جزيء DNA تساوي 28%، ما هي نسبة الثايمين (T)؟',
          questionEn: 'If Cytosine (C) is 28% in a DNA molecule, what is the percentage of Thymine (T)?',
          optionsAr: ['22%', '28%', '44%', '56%'],
          optionsEn: ['22%', '28%', '44%', '56%'],
          correctIndex: 0,
          explanationAr: 'C = 28% => G = 28%. المجموع (G+C) = 56%. المتبقي (A+T) = 100 - 56 = 44%. إذن T = 44 / 2 = 22%.',
          explanationEn: 'C=28% => G=28% (sum=56%). Remaining A+T = 44% => T = 22%.',
          hintAr: 'احسب مجموع G+C أولاً ثم اطرحه من 100 واقسم الناتج على 2.'
        }
      }
    ],
    assessment: {
      id: 'quiz-bio-1',
      lectureId: 'bio-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الوراثة الجزيئية وتضاعف DNA (3 ثانوي STEM)',
      titleEn: 'Mastery Quiz 1: Molecular Genetics & DNA Replication (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qb1-1',
          textAr: 'الإنزيم المسؤول عن فك التواء شريطي DNA وفصل الروابط الهيدروجينية هو:',
          textEn: 'The enzyme responsible for unwinding the DNA helix and breaking H-bonds is:',
          optionsAr: ['إنزيم الهيليكيز (DNA Helicase)', 'إنزيم بلمرة DNA', 'إنزيم الربط (DNA Ligase)', 'إنزيم بلمرة RNA'],
          optionsEn: ['DNA Helicase', 'DNA Polymerase', 'DNA Ligase', 'RNA Polymerase'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة إنزيم الهيليكيز',
          conceptTestedEn: 'Helicase Enzyme Role',
          explanationAr: 'يقوم إنزيم الهيليكيز بكسر الروابط الهيدروجينية بين القواعد وفك اللولب المزدوج لتشكيل شوكة التضاعف.',
          explanationEn: 'Helicase breaks hydrogen bonds between bases, creating the replication fork.',
          difficulty: 'easy'
        },
        {
          id: 'qb1-2',
          textAr: 'الاتجاه الذي يبني فيه إنزيم بلمرة DNA السلسلة الجديدة دائماً هو:',
          textEn: 'DNA Polymerase synthesizes new strands exclusively in the direction:',
          optionsAr: ['من 5\\\' إلى 3\\\'', 'من 3\\\' إلى 5\\\'', 'في الاتجاهين معاً عشوائياً', 'من المركز إلى الأطراف'],
          optionsEn: ['5\\\' to 3\\\'', '3\\\' to 5\\\'', 'Bidirectional randomly', 'Center to ends'],
          correctIndex: 0,
          conceptTestedAr: 'اتجاه بلمرة DNA',
          conceptTestedEn: 'Polymerase Synthesis Direction',
          explanationAr: 'يضيف إنزيم بلمرة DNA النيوكليوتيدات الجديدة إلى الطرف 3\\\' للهيدروكسيل، فيكون اتجاه البناء من 5\\\' إلى 3\\\'.',
          explanationEn: 'New nucleotides are added to the 3\\\'-OH end, requiring 5\\\'->3\\\' synthesis.',
          difficulty: 'medium'
        },
        {
          id: 'qb1-3',
          textAr: 'قطع أوكازاكي (Okazaki Fragments) تتكون على:',
          textEn: 'Okazaki fragments form specifically on the:',
          optionsAr: [
            'السلسلة المتأخرة (Lagging Strand) بشكل متقطع',
            'السلسلة الرائدة (Leading Strand) بشكل متصل',
            'كلا الشريطان بنفس الطريقة المتصلة',
            'حمض mRNA أثناء الترجمة'
          ],
          optionsEn: [
            'Lagging strand discontinuously',
            'Leading strand continuously',
            'Both strands continuously',
            'mRNA during translation'
          ],
          correctIndex: 0,
          conceptTestedAr: 'قطع أوكازاكي والسلسلة المتأخرة',
          conceptTestedEn: 'Lagging Strand & Okazaki Fragments',
          explanationAr: 'تبنى السلسلة المتأخرة بشكل غير متصل على هيئة قطع أوكازاكي يتم ربطها لاحقاً بإنزيم الربط (DNA Ligase).',
          explanationEn: 'The lagging strand is synthesized discontinuously as Okazaki fragments, joined by DNA ligase.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'bio-2',
    order: 2,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    titleAr: 'المحاضرة 2: التعبير الجيني وبناء البروتين (النسخ والترجمة والشيفرة الوراثية)',
    titleEn: 'Lecture 2: Gene Expression & Protein Synthesis (Transcription & Translation)',
    subtitleAr: 'أنواع RNA، عملية النسخ في النواة، الشيفرة الوراثية والكودونات، وآلية الترجمة في الريبوسوم',
    subtitleEn: 'Master mRNA, tRNA, rRNA, transcription, codon triplets, ribosomal translation, and polypeptide folding.',
    durationMinutes: 40,
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: الوراثة الجزيئية والبيولوجيا الجزيئية',
    unitTitleEn: 'Unit 1: Molecular Genetics & Biotechnology',
    lessonNumberAr: 'الدرس 2: التعبير الجيني وتصنيع البروتين',
    lessonNumberEn: 'Lesson 2: Transcription & Translation',
    warmupHookAr: 'كل وظيفة حيوية في جسمك — من هضم السكر بالأنسولين، إلى نقل الأكسجين بالهيموجلوبين، وحتى محاربة الفيروسات بالأجسام المضادة — يقوم بها "بروتين" محدد. كيف تترجم الخلية حروف DNA الأربعة (A, T, C, G) إلى 20 حمضاً أمينياً لبناء هذه البروتينات المعقدة؟ إنها العقيدة المركزية للبيولوجيا الجزيئية: DNA -> RNA -> Protein!',
    warmupHookEn: 'From insulin to hemoglobin and antibodies, proteins drive cellular life. The Central Dogma of Molecular Biology reveals how 4 nucleotide letters translate into 20 amino acid polymers via the universal genetic code!',
    learningOutcomesAr: [
      'أن يوضح الطالب العقيدة المركزية لعلم الأحياء الجزيئي (DNA -> RNA -> Protein)',
      'أن يقارن بين أنواع RNA الثلاثة (mRNA الرسول، tRNA الناقل، rRNA الريبوسومي)',
      'أن يشرح خطوات النسخ (Transcription) في النواة وتعديل mRNA الأولي',
      'أن يترجم كودونات mRNA إلى تسلسل أحماض أمينية باستخدام جدول الشيفرة الوراثية'
    ],
    learningOutcomesEn: [
      'State the Central Dogma of Molecular Biology (DNA -> RNA -> Protein)',
      'Compare 3 RNA types: mRNA (messenger), tRNA (transfer), rRNA (ribosomal)',
      'Explain nuclear transcription and pre-mRNA post-transcriptional processing',
      'Translate mRNA triplet codons into amino acid sequences using the genetic code table'
    ],
    vocabulary: [
      {
        termAr: 'الكودون (Codon)',
        termEn: 'Codon',
        definitionAr: 'تتابع من ثلاث نيوكليوتيدات على شريط mRNA يشفر حمضاً أمينياً واحداً أو إشارة بدء/توقف.',
        definitionEn: 'A triplet of mRNA nucleotides specifying an amino acid or start/stop signal.'
      },
      {
        termAr: 'النسخ (Transcription)',
        termEn: 'Transcription',
        definitionAr: 'عملية بناء جزيء mRNA متمم لشريط DNA القالب بواسطة إنزيم بلمرة RNA داخل النواة.',
        definitionEn: 'Synthesis of mRNA from a DNA template by RNA polymerase in the nucleus.'
      },
      {
        termAr: 'الترجمة (Translation)',
        termEn: 'Translation',
        definitionAr: 'عملية قراءة كودونات mRNA في الريبوسوم بمساعدة tRNA لربط الأحماض الأمينية وتكوين سلسلة عديد الببتيد.',
        definitionEn: 'Ribosomal decoding of mRNA into an amino acid polypeptide sequence via tRNA.'
      }
    ],
    keyConceptsAr: ['العقيدة المركزية', 'النسخ وتعديل mRNA', 'الكودونات والشيفرة الوراثية', 'مراحل الترجمة في الريبوسوم'],
    keyConceptsEn: ['Central Dogma', 'Transcription & mRNA Processing', 'Codons & Genetic Code', 'Ribosomal Translation Stages'],
    summaryAr: 'يتحول المخطط الجيني في DNA إلى بروتينات وظيفية عبر مرحلتين: النسخ (إنتاج mRNA في النواة) والترجمة (قراءة الكودونات في الريبوسوم وربط الأحماض الأمينية).',
    summaryEn: 'Gene expression converts genetic code into proteins via nuclear transcription to mRNA followed by ribosomal translation into functional polypeptides.',
    sections: [
      {
        titleAr: '1. الشيفرة الوراثية وترجمة الكودونات',
        titleEn: '1. The Genetic Code & Codon Translation',
        contentAr: 'الشيفرة الوراثية ثلاثية (تتكون من 3 أحماض نووية لكل كودون). كودون البدء هو AUG ويشفر الحمض الأميني ميثيونين (Methionine). وتوجد ثلاثة كودونات توقف (UAA, UAG, UGA) تنهي عملية الترجمة.',
        contentEn: 'The genetic code is a triplet code. AUG is the universal start codon (Methionine). UAA, UAG, and UGA are stop codons.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: ترجمة شريط mRNA إلى بروتين',
          titleEn: 'Worked Example: mRNA to Polypeptide Translation',
          steps: [
            { stepNumber: 1, textAr: 'شريط mRNA: 5\\\' - AUG - UUU - GGC - UAA - 3\\\'.', textEn: 'mRNA: 5\\\'- AUG - UUU - GGC - UAA - 3\\\'.' },
            { stepNumber: 2, textAr: 'AUG = كودون البدء (ميثيونين Met). UUU = فينيل ألانين (Phe). GGC = جلايسين (Gly). UAA = كودون التوقف (Stop).', textEn: 'AUG = Met, UUU = Phe, GGC = Gly, UAA = Stop.' },
            { stepNumber: 3, textAr: 'سلسلة الببتيد الناتجة: [Met - Phe - Gly].', textEn: 'Resulting tripeptide: [Met - Phe - Gly].' }
          ],
          takeawayAr: 'الشيفرة الوراثية عالمية وشاملة لجميع الكائنات الحية من البكتيريا إلى الإنسان.',
          takeawayEn: 'The genetic code is nearly universal across all domains of terrestrial life.'
        },
        tipsAr: ['في RNA يتم استبدال الثايمين (T) باليوراسيل (U)'],
        tipsEn: ['RNA incorporates Uracil (U) instead of Thymine (T)'],
        formativeCheck: {
          id: 'fc-bio2-1',
          questionAr: 'ما هو كودون البدء العالمي وما الحمض الأميني الذي يشفر له؟',
          questionEn: 'What is the universal start codon and its encoded amino acid?',
          optionsAr: ['AUG ويشفر للميثيونين (Met)', 'UAA ويشفر للفالين', 'UAG ويشفر للجلايسين', 'CCC ويشفر للبرولين'],
          optionsEn: ['AUG (Methionine)', 'UAA (Valine)', 'UAG (Glycine)', 'CCC (Proline)'],
          correctIndex: 0,
          explanationAr: 'AUG هو كودون البدء في جميع حقيقيات النوى ويشفر للحمض الأميني ميثيونين.',
          explanationEn: 'AUG serves as the universal translation initiation codon encoding Methionine.',
          hintAr: 'ابحث عن الكودون الذي يبدأ بحرف A ويشفر أول حمض أميني في البروتين.'
        }
      }
    ],
    assessment: {
      id: 'quiz-bio-2',
      lectureId: 'bio-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: التعبير الجيني وبناء البروتين (3 ثانوي STEM)',
      titleEn: 'Mastery Quiz 2: Gene Expression & Translation (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qb2-1',
          textAr: 'الإنزيم المسؤول عن بناء شريط mRNA أثناء عملية النسخ هو:',
          textEn: 'The enzyme that synthesizes mRNA during transcription is:',
          optionsAr: ['إنزيم بلمرة RNA (RNA Polymerase)', 'إنزيم بلمرة DNA', 'إنزيم الهيليكيز', 'إنزيم الليجيز'],
          optionsEn: ['RNA Polymerase', 'DNA Polymerase', 'Helicase', 'DNA Ligase'],
          correctIndex: 0,
          conceptTestedAr: 'إنزيم النسخ الأساسي',
          conceptTestedEn: 'Transcription Enzyme',
          explanationAr: 'يقوم RNA Polymerase بقراءة شريط DNA القالب وبناء شريط mRNA متمم له.',
          explanationEn: 'RNA Polymerase reads template DNA and synthesizes complementary mRNA.',
          difficulty: 'easy'
        },
        {
          id: 'qb2-2',
          textAr: 'إذا كان تتابع القواعد في DNA هو 3\\\'- TAC - 5\\\'، فإن كودون mRNA المتمم له هو:',
          textEn: 'If the DNA template sequence is 3\\\'- TAC - 5\\\', the complementary mRNA codon is:',
          optionsAr: ['5\\\'- AUG - 3\\\'', '5\\\'- UAC - 3\\\'', '5\\\'- ATG - 3\\\'', '5\\\'- GUA - 3\\\''],
          optionsEn: ['5\\\'- AUG - 3\\\'', '5\\\'- UAC - 3\\\'', '5\\\'- ATG - 3\\\'', '5\\\'- GUA - 3\\\''],
          correctIndex: 0,
          conceptTestedAr: 'تكامل قواعد النسخ',
          conceptTestedEn: 'Transcription Base Pairing',
          explanationAr: 'T يقابلها A، و A يقابلها U في RNA، و C يقابلها G. إذن الناتج هو AUG.',
          explanationEn: 'T pairs with A, A with U, C with G => 5\\\'-AUG-3\\\'.',
          difficulty: 'medium'
        },
        {
          id: 'qb2-3',
          textAr: 'جزيء RNA الذي يحمل الحمض الأميني المناسب إلى الريبوسوم أثناء الترجمة هو:',
          textEn: 'The RNA molecule that carries the specific amino acid to the ribosome is:',
          optionsAr: ['tRNA (الناقل)', 'mRNA (الرسول)', 'rRNA (الريبوسومي)', 'snRNA'],
          optionsEn: ['tRNA (Transfer)', 'mRNA (Messenger)', 'rRNA (Ribosomal)', 'snRNA'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة tRNA الناقل',
          conceptTestedEn: 'tRNA Function',
          explanationAr: 'tRNA يحتوي على مضاد الكودون ويحمل الحمض الأميني المطابق لربطه في سلسلة البروتين.',
          explanationEn: 'tRNA pairs its anticodon with the mRNA codon and delivers the corresponding amino acid.',
          difficulty: 'easy'
        }
      ]
    }
  }
];

// ============================================================================
// 3. ADVANCED COMPUTER SCIENCE CURRICULUM — GRADE 12 STEM (تقنية رقمية 3 مسارات)
// ============================================================================
export const COMPUTER_SCIENCE_LECTURES: Lecture[] = [
  {
    id: 'cs-1',
    order: 1,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    titleAr: 'المحاضرة 1: الذكاء الاصطناعي وخوارزميات تعلم الآلة والشبكات العصبية',
    titleEn: 'Lecture 1: Artificial Intelligence, Machine Learning & Neural Networks',
    subtitleAr: 'التعلم الموجه وغير الموجه، الشبكات العصبية الاصطناعية، وخوارزمية الانحدار الخطي والتصنيف',
    subtitleEn: 'Master supervised/unsupervised learning, artificial neural networks, gradient descent, and loss functions.',
    durationMinutes: 35,
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM Specialization',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: الذكاء الاصطناعي وتعلم الآلة وهندسة البيانات',
    unitTitleEn: 'Unit 1: Artificial Intelligence & Machine Learning',
    lessonNumberAr: 'الدرس 1: مبادئ الذكاء الاصطناعي وخوارزميات تعلم الآلة',
    lessonNumberEn: 'Lesson 1: Machine Learning & Neural Networks',
    warmupHookAr: 'كيف تستطيع السيارات ذاتية القيادة التعرف على إشارات المرور والمشاة في أجزاء من الألف من الثانية؟ وكيف يتوقع نموذج Gemini إجابات دقيقة لأسئلتك؟ السر يكمن في "الشبكات العصبية الاصطناعية" المستوحاة من الدماغ البشري وخوارزميات تعلم الآلة التي تدرب النماذج على ملايين الأنماط البيانية!',
    warmupHookEn: 'How do autonomous vehicles detect pedestrians in milliseconds, and how do LLMs like Gemini generate nuanced responses? Artificial Neural Networks inspired by biological neurons process millions of features to optimize loss functions via backpropagation!',
    learningOutcomesAr: [
      'أن يميز الطالب بين فروع الذكاء الاصطناعي: التعلم الموجه (Supervised)، غير الموجه (Unsupervised)، وتعلم التعزيز (Reinforcement)',
      'أن يشرح بنية العصبون الاصطناعي (المدخلات، الأوزان W، الانحياز b، ودالة التنشيط Activation Function)',
      'أن يوضح دور دالة الخسارة (Loss Function) وخوارزمية التدرج الهابط (Gradient Descent) في تحسين النموذج',
      'أن يقيم أداء نموذج التعلم باستخدام مقاييس الدقة (Accuracy, Precision, Recall)'
    ],
    learningOutcomesEn: [
      'Distinguish AI paradigms: Supervised, Unsupervised, and Reinforcement Learning',
      'Analyze artificial neuron architecture: inputs, weights, bias, and activation functions',
      'Explain loss functions and Gradient Descent optimization for model training',
      'Evaluate model performance using Accuracy, Precision, Recall, and F1-score'
    ],
    vocabulary: [
      {
        termAr: 'التعلم الموجه (Supervised Learning)',
        termEn: 'Supervised Learning',
        definitionAr: 'تدريب نموذج تعلم الآلة على بيانات موسومة (Labeled Data) تحتوي على المدخلات والمخرجات الصحيحة ليتعلم التنبؤ بالقيم الجديدة.',
        definitionEn: 'Training an ML model on labeled datasets with ground-truth input-output pairs.'
      },
      {
        termAr: 'الشبكة العصبية الاصطناعية (Artificial Neural Network)',
        termEn: 'Artificial Neural Network',
        definitionAr: 'نموذج حوسبي يتكون من طبقات من العقد (العصبونات) المتصلة بأوزان قابلة للتعديل لمعالجة الأنماط المعقدة.',
        definitionEn: 'Computational model composed of interconnected layers of artificial neurons with trainable weights.'
      },
      {
        termAr: 'دالة التنشيط (Activation Function)',
        termEn: 'Activation Function',
        definitionAr: 'دالة رياضية (مثل ReLU أو Sigmoid) تطبق على مخرجات العصبون لإدخال اللاخطية (Non-linearity) وتمكين الشبكة من حل المشكلات المعقدة.',
        definitionEn: 'Mathematical function (e.g. ReLU, Sigmoid) introducing non-linearity into neural network outputs.'
      }
    ],
    keyConceptsAr: ['أنواع تعلم الآلة الثلاثة', 'بنية العصبون والشبكة العصبية', 'دوال التنشيط ودالة الخسارة', 'التدرج الهابط وتقييم النماذج'],
    keyConceptsEn: ['Machine Learning Paradigms', 'Neuron & Layer Architecture', 'Activation & Loss Functions', 'Gradient Descent & Evaluation Metrics'],
    summaryAr: 'الذكاء الاصطناعي يعتمد على تدريب الشبكات العصبية لمعالجة البيانات وتعديل الأوزان عبر خوارزمية التدرج الهابط لتقليل نسبة الخطأ إلى أدنى حد ممكن.',
    summaryEn: 'Modern AI trains multi-layer neural networks, adjusting weights via gradient descent backpropagation to minimize loss functions across training datasets.',
    sections: [
      {
        titleAr: '1. بنية العصبون الاصطناعي ودوال التنشيط',
        titleEn: '1. Artificial Neuron Architecture & Activations',
        contentAr: 'يحسب العصبون الاصطناعي المجموع الموزون للمدخلات: z = (w1*x1 + w2*x2 + ... + wn*xn) + b، ثم يمرر الناتج z إلى دالة تنشيط غير خطية f(z) مثل دالة ReLU: f(z) = max(0, z) لتحديد الإشارة الخارجة.',
        contentEn: 'An artificial neuron computes weighted sum z = Σ(wi xi) + b and passes it through an activation function like ReLU: f(z) = max(0, z).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب مخرجات عصبون اصطناعي',
          titleEn: 'Worked Example: Single Neuron Computation',
          steps: [
            { stepNumber: 1, textAr: 'المدخلات: x1 = 2, x2 = 3. الأوزان: w1 = 0.5, w2 = 1.0. الانحياز b = -1.0.', textEn: 'Inputs: x1=2, x2=3. Weights: w1=0.5, w2=1.0. Bias: b=-1.0.' },
            { stepNumber: 2, textAr: 'حساب المجموع الموزون: z = (2 * 0.5) + (3 * 1.0) - 1.0 = 1 + 3 - 1 = 3.0.', textEn: 'Weighted sum z = (2*0.5) + (3*1.0) - 1.0 = 3.0.' },
            { stepNumber: 3, textAr: 'تطبيق دالة ReLU: f(3.0) = max(0, 3.0) = 3.0. مخرج العصبون = 3.0.', textEn: 'Apply ReLU: max(0, 3.0) = 3.0. Final output = 3.0.' }
          ],
          takeawayAr: 'دوال التنشيط غير الخطية هي التي تمنح الشبكات العصبية القدرة على تعلم الأنماط المعقدة غير الخطية.',
          takeawayEn: 'Non-linear activation functions enable neural networks to approximate complex arbitrary mathematical functions.'
        },
        tipsAr: ['دالة ReLU هي الأكثر استخداماً في طبقات الشبكات العصبية العميقة الحديثة نظراً لكفاءتها الحسابية'],
        tipsEn: ['ReLU is the most popular hidden layer activation due to computational speed and gradient propagation'],
        formativeCheck: {
          id: 'fc-cs1-1',
          questionAr: 'ما نوع تعلم الآلة المستخدم في تصنيف رسائل البريد الإلكتروني إلى (هام / غير هام Spam) باستخدام رسائل سابقة مصنفة؟',
          questionEn: 'What ML paradigm classifies emails as Spam/Ham using pre-labeled historical emails?',
          optionsAr: [
            'التعلم الموجه (Supervised Learning)',
            'التعلم غير الموجه (Unsupervised Learning)',
            'تعلم التعزيز (Reinforcement Learning)',
            'التعلم العشوائي'
          ],
          optionsEn: [
            'Supervised Learning',
            'Unsupervised Learning',
            'Reinforcement Learning',
            'Random Learning'
          ],
          correctIndex: 0,
          explanationAr: 'بما أن البيانات مدربة على أمثلة سابقة موسومة بمخرجاتها الصحيحة، فهذا تعلم موجه (Supervised).',
          explanationEn: 'Training with pre-labeled ground-truth outputs is the definition of supervised learning.',
          hintAr: 'هل البيانات مزودة بتصنيفات مسبقة معروفة؟'
        }
      }
    ],
    assessment: {
      id: 'quiz-cs-1',
      lectureId: 'cs-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الذكاء الاصطناعي وتعلم الآلة (3 ثانوي STEM)',
      titleEn: 'Mastery Quiz 1: AI & Machine Learning (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qcs1-1',
          textAr: 'خوارزمية التحسين المستخدمة لتعديل أوزان الشبكة العصبية لتقليل دالة الخسارة تسمى:',
          textEn: 'The optimization algorithm that iteratively updates weights to minimize loss is:',
          optionsAr: [
            'التدرج الهابط (Gradient Descent)',
            'البحث الثنائي (Binary Search)',
            'خوارزمية ديكسترا (Dijkstra)',
            'الفرز السريع (Quick Sort)'
          ],
          optionsEn: [
            'Gradient Descent',
            'Binary Search',
            'Dijkstra\\\'s Algorithm',
            'Quick Sort'
          ],
          correctIndex: 0,
          conceptTestedAr: 'خوارزمية التدرج الهابط',
          conceptTestedEn: 'Gradient Descent Optimization',
          explanationAr: 'التدرج الهابط يحسب مشتقة دالة الخسارة بالنسبة للأوزان ويتحرك في الاتجاه المعاكس لتقليل الخطأ.',
          explanationEn: 'Gradient Descent calculates loss gradients to update network weights toward minimum error.',
          difficulty: 'medium'
        },
        {
          id: 'qcs1-2',
          textAr: 'دالة التنشيط ReLU لمقدار z = -4.5 تنتج قيمة:',
          textEn: 'The ReLU activation function evaluated at z = -4.5 yields:',
          optionsAr: ['0', '-4.5', '1', '4.5'],
          optionsEn: ['0', '-4.5', '1', '4.5'],
          correctIndex: 0,
          conceptTestedAr: 'حساب دالة ReLU',
          conceptTestedEn: 'ReLU Evaluation',
          explanationAr: 'قاعدة ReLU هي max(0, z). بما أن -4.5 أصغر من الصفر، فإن الناتج هو 0.',
          explanationEn: 'ReLU(z) = max(0, z). For negative inputs, ReLU outputs 0.',
          difficulty: 'easy'
        },
        {
          id: 'qcs1-3',
          textAr: 'التعلم غير الموجه (Unsupervised Learning) يهدف إلى:',
          textEn: 'Unsupervised Learning primarily aims to:',
          optionsAr: [
            'اكتشاف الأنماط والتجمعات المخفية (Clustering) في بيانات غير موسومة',
            'التنبؤ بسعر منزل بناءً على بيانات موسومة سابقة',
            'تدريب روبوت عبر المكافأة والعقاب',
            'تشفير كلمات المرور'
          ],
          optionsEn: [
            'Discover hidden patterns and clusters in unlabeled data',
            'Predict house prices using labeled datasets',
            'Train robots via reward/penalty signals',
            'Encrypt passwords'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أهداف التعلم غير الموجه',
          conceptTestedEn: 'Unsupervised Learning Goals',
          explanationAr: 'التعلم غير الموجه يتعامل مع بيانات بدون تصنيفات مسبقة ويكتشف التجمعات والأنماط الكامنة فيها.',
          explanationEn: 'Unsupervised learning finds clusters and intrinsic structure within unlabeled datasets.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
`;

fs.writeFileSync(targetPath, stemContent, 'utf8');
console.log('Successfully updated stemCurriculumData.ts with authentic Saudi Grade 12 STEM Chemistry, Biology & Computer Science!');
