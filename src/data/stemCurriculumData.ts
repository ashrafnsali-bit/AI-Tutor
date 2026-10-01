import type { Lecture } from '../types';

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
    durationMinutes: 45,
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
      'أن يحلل منحنى ماكسويل-بولتزمان لتوزيع الطاقة الحركية وتأثير درجة الحرارة',
      'أن يكتب قانون سرعة التفاعل العام R = k [A]^m [B]^n ويحدد رتبة التفاعل الكلية'
    ],
    learningOutcomesEn: [
      'Explain collision theory postulates and conditions for effective collisions',
      'Define activation energy (Ea) and activated complex for endo/exothermic profiles',
      'Analyze Maxwell-Boltzmann kinetic energy distributions and temperature effects',
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
        termAr: 'المعقد المنشط (Activated Complex)',
        termEn: 'Activated Complex',
        definitionAr: 'حالة انتقالية غير مستقرة تجمع بين تكسير الروابط القديمة وبناء روابط جديدة وتتميز بأعلى طاقة وضع في مسار التفاعل.',
        definitionEn: 'An unstable transition state at maximum potential energy where bonds are breaking and forming.'
      },
      {
        termAr: 'المحفز (Catalyst)',
        termEn: 'Catalyst',
        definitionAr: 'مادة تزيد من سرعة التفاعل الكيميائي عن طريق توفير مسار بديل بطاقة تنشيط أقل دون أن تستهلك في التفاعل.',
        definitionEn: 'A substance that accelerates reaction rate by lowering activation energy without being consumed.'
      }
    ],
    keyConceptsAr: ['شروط التصادم الفعّال', 'طاقة التنشيط والمعقد المنشط', 'توزيع ماكسويل-بولتزمان', 'قانون سرعة التفاعل ورتبة التفاعل'],
    keyConceptsEn: ['Effective Collisions', 'Activation Energy & Activated Complex', 'Maxwell-Boltzmann Distribution', 'Rate Law & Reaction Orders'],
    summaryAr: 'تتحكم نظرية التصادم في سرعة تحول المواد المتفاعلة إلى نواتج؛ حيث تزيد زيادة الحرارة والتركيز ومساحة السطح من عدد التصادمات الفعالة، بينما تخفض المحفزات حاجز طاقة التنشيط.',
    summaryEn: 'Collision theory governs chemical kinetics: temperature, concentration, and surface area increase effective collisions, while catalysts lower the activation energy barrier.',
    goldenRulesAr: [
      'الشرطان الأساسيان للتصادم الفعّال: الاتجاه الفراغي الصحيح + طاقة حركية تفوق أو تساوي طاقة التنشيط Ea.',
      'المعقد المنشط يتواجد دائماً عند قمة منحنى الطاقة وتكون طاقة وضعه أعلى ما يمكن وزمن بقائه في غاية القصر.',
      'منحنى ماكسويل-بولتزمان يوضح أن رفع درجة الحرارة يزحف بالقمة لليمين والأسفل، مما يضاعف عدد الجزيئات التي تمتلك طاقة >= Ea.',
      'المحفز يقلل طاقة التنشيط للتفاعل الأمامي والعكسي بنفس المقدار ولا يغير حرارة التفاعل الصافية ΔH.',
      'المواد الصلبة ذات المساحة السطحية الأكبر تتفاعل أسرع بكثير لأن مساحة التماس المعرضة للتصادمات أكبر.',
      'رتبة التفاعل m و n لا تُستنتج من معاملات المعادلة الموزونة بل تُحدد عملياً وتجريبياً فقط.',
      'وحدة ثابت سرعة التفاعل k تتغير حسب الرتبة الكلية للتفاعل وتعتمد على درجة الحرارة فقط.'
    ],
    goldenRulesEn: [
      'Effective collision criteria: correct spatial geometry + kinetic energy >= Ea.',
      'Activated complex resides at the peak of the potential energy curve with maximum instability.',
      'Maxwell-Boltzmann distributions show higher temperature flattens and shifts right, multiplying reacting particles.',
      'Catalysts lower Ea for both forward and reverse paths identically, leaving net enthalpy ΔH unchanged.',
      'Greater solid surface area exposes more collision sites, accelerating heterogeneous reactions.',
      'Reaction orders m and n must be determined experimentally and cannot be inferred from stoichiometry.',
      'The units of rate constant k depend on overall reaction order and vary with temperature.'
    ],
    textbookExercises: [
      {
        id: 'tb-chem1-1',
        questionAr: 'في التفاعل A + B -> C، تضاعف تركيز [A] مرتين مع ثبات [B] فتضاعفت السرعة 4 مرات. وعند تضاعف [B] مرتين مع ثبات [A] تضاعفت السرعة مرتين. اكتب قانون السرعة واحسب الرتبة الكلية.',
        questionEn: 'For A + B -> C: doubling [A] quadruples rate (B const); doubling [B] doubles rate (A const). Determine the rate law and overall reaction order.',
        solutionStepsAr: [
          '1. نحدد رتبة A: (2)^m = 4 = (2)^2 => m = 2 (الرتبة الثانية لـ A).',
          '2. نحدد رتبة B: (2)^n = 2 = (2)^1 => n = 1 (الرتبة الأولى لـ B).',
          '3. قانون السرعة العام: Rate = k [A]² [B]¹.',
          '4. الرتبة الكلية = m + n = 2 + 1 = 3 (الرتبة الثالثة الكلية).'
        ],
        solutionStepsEn: [
          '1. Find order for A: (2)^m = 4 => m = 2.',
          '2. Find order for B: (2)^n = 2 => n = 1.',
          '3. Rate law: Rate = k [A]^2 [B]^1.',
          '4. Overall order: 2 + 1 = 3 (Third order).'
        ],
        answerAr: 'قانون السرعة: Rate = k [A]² [B] والرتبة الكلية = 3',
        answerEn: 'Rate Law: Rate = k [A]^2 [B], Overall Order = 3'
      },
      {
        id: 'tb-chem1-2',
        questionAr: 'إذا كانت طاقة المتفاعلات 50 kJ/mol وطاقة النواتج 20 kJ/mol وطاقة المعقد المنشط 130 kJ/mol، احسب طاقة التنشيط للتفاعل الأمامي وقيمة ΔH وحدد نوع التفاعل.',
        questionEn: 'If reactants = 50 kJ/mol, products = 20 kJ/mol, and activated complex = 130 kJ/mol, compute Ea(forward), ΔH, and reaction thermicity.',
        solutionStepsAr: [
          '1. طاقة التنشيط الأمامية Ea = طاقة المعقد المنشط - طاقة المتفاعلات = 130 - 50 = 80 kJ/mol.',
          '2. حرارة التفاعل ΔH = طاقة النواتج - طاقة المتفاعلات = 20 - 50 = -30 kJ/mol.',
          '3. بما أن ΔH سالبة (< 0)، فالتفاعل طارد للحرارة (Exothermic).'
        ],
        solutionStepsEn: [
          '1. Ea(forward) = E(complex) - E(reactants) = 130 - 50 = 80 kJ/mol.',
          '2. ΔH = E(products) - E(reactants) = 20 - 50 = -30 kJ/mol.',
          '3. Since ΔH < 0, the reaction is exothermic.'
        ],
        answerAr: 'Ea = 80 kJ/mol | ΔH = -30 kJ/mol (تفاعل طارد للحرارة)',
        answerEn: 'Ea = 80 kJ/mol | ΔH = -30 kJ/mol (Exothermic reaction)'
      }
    ],
    sections: [
      {
        titleAr: '1. النموذج الأول: شروط التصادم الفعّال وطاقة التنشيط والمعقد المنشط',
        titleEn: '1. Model 1: Effective Collisions, Activation Energy & Transition State',
        contentAr: 'لكي يكون التصادم بين جزيئات المواد المتفاعلة تصادماً منتجاً (فعّالاً)، يجب تحقق شرطين أساسيين: 1) الاتجاه الفراغي الصحيح للجزيئات المتصادمة، 2) امتلاك الجزيئات طاقة حركة كافية تساوي طاقة التنشيط Ea على الأقل لتكوين المعقد المنشط (حالة انتقالية غير مستقرة ذات طاقة عالية). يعمل المحفز الكيميائي على توفير مسار بديل للتفاعل بحاجز طاقة تنشيط أقل بكثير، مما يضاعف عدد التصادمات الفعالة في الثانية الواحدة دون استهلاك المحفز.',
        contentEn: 'An effective collision requires correct geometric orientation and sufficient kinetic energy >= activation energy (Ea) to form the high-energy activated complex. A catalyst introduces an alternative mechanism with a lower activation barrier.',
        diagram: {
          id: 'diag-chem1-kinetics',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'منحنى طاقة التنشيط وتأثير المحفز الكيميائي على سير التفاعل',
          titleEn: 'Activation Energy Profile & Catalyst Effect on Reaction Coordinate',
          captionAr: 'يوضح المنحنى كيف يوفر المحفز مساراً بديلاً للتفاعل بطاقة تنشيط أقل (Ea محفز)، مما يزيد من سرعة التفاعل بشكل هائل دون التأثير على المحتوى الحراري الصافي ΔH.',
          captionEn: 'The energy profile demonstrates how a catalyst provides an alternative pathway with lower activation energy (Ea), drastically multiplying rate without changing net enthalpy ΔH.',
          diagramType: 'chemical_kinetics',
          takeawayFormulaAr: 'Rate = k [A]ᵐ [B]ⁿ | k = A · e^(-Ea / RT)',
          takeawayFormulaEn: 'Rate = k [A]ᵐ [B]ⁿ | k = A · e^(-Ea / RT)',
          keyLabels: [
            { tagAr: 'طاقة التنشيط Ea', tagEn: 'Activation Energy Ea', descAr: 'حاجز الطاقة المطلوب لتكوين المعقد المنشط', descEn: 'Energy barrier to form activated complex' },
            { tagAr: 'تأثير المحفز (مسار أخضر)', tagEn: 'Catalyzed Pathway', descAr: 'خفض طاقة التنشيط وتسريع التفاعل', descEn: 'Lower activation barrier' },
            { tagAr: 'التغير في المحتوى الحراري (ΔH)', tagEn: 'Enthalpy Change ΔH', descAr: 'الفرق بين طاقة النواتج والمتفاعلات', descEn: 'Energy difference between products and reactants' }
          ]
        },
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
        tipsAr: ['المحفزات الحيوية في جسم الإنسان تسمى الإنزيمات (Enzymes) وتسهم في تسريع العمليات الأيضية في درجات حرارة الجسم العادية'],
        tipsEn: ['Biological catalysts in living organisms are called enzymes and operate at ambient body temperature'],
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
      },
      {
        titleAr: '2. النموذج الثاني: منحنى ماكسويل-بولتزمان وتأثير درجة الحرارة على طاقة التنشيط',
        titleEn: '2. Model 2: Maxwell-Boltzmann Kinetic Energy Distribution & Temperature Shift',
        contentAr: 'يوضح منحنى ماكسويل-بولتزمان توزيع الطاقة الحركية لجزيئات الغاز أو المحلول عند درجات حرارة مختلفة. عند رفع درجة الحرارة من T1 إلى T2، يمتد المنحنى نحو اليمين ويزداد عدد الجزيئات التي تمتلك طاقة حركة أكبر من أو تساوي طاقة التنشيط Ea، مما يفسر الزيادة الهائلة في سرعة التفاعل.',
        contentEn: 'The Maxwell-Boltzmann distribution illustrates molecular kinetic energy spreads. Elevating temperature shifts the curve rightwards, multiplying particles with energy >= Ea.',
        diagram: {
          id: 'diag-chem1-maxwell',
          figureNumberAr: 'شكل (1-2)',
          figureNumberEn: 'Figure (1-2)',
          titleAr: 'توزيع ماكسويل-بولتزمان الحركي وتأثير درجة الحرارة على طاقة التنشيط',
          titleEn: 'Maxwell-Boltzmann Distribution & Temperature Effect on Activation Energy',
          captionAr: 'توضح المساحة المظللة تحت المنحنى بعد خط طاقة التنشيط Ea تضاعف عدد الجزيئات القادرة على التفاعل عند رفع درجة الحرارة من T1 إلى T2.',
          captionEn: 'Shaded area past activation threshold Ea demonstrates how temperature rise drastically increases reacting particles.',
          diagramType: 'maxwell_boltzmann_chem',
          takeawayFormulaAr: 'Fraction with E ≥ Ea ∝ e^(-Ea / RT)',
          takeawayFormulaEn: 'Fraction with E ≥ Ea ∝ e^(-Ea / RT)',
          keyLabels: [
            { tagAr: 'المنحنى T1 (بارد)', tagEn: 'T1 Distribution (Cold)', descAr: 'طاقة حركية متوسطة منخفضة', descEn: 'Lower average kinetic energy' },
            { tagAr: 'المنحنى T2 (ساخن)', tagEn: 'T2 Distribution (Hot)', descAr: 'قمة منبسطة ومزاحة لليمين', descEn: 'Shifted right and flattened' },
            { tagAr: 'حاجز طاقة التنشيط Ea', tagEn: 'Ea Threshold', descAr: 'الحد الأدنى للطاقة المطلوبة للتفاعل', descEn: 'Minimum kinetic energy threshold' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: تفسير مضاعفة السرعة عند رفع 10 درجات مئوية',
          titleEn: 'Worked Example: 10°C Temperature Rise Rate Doubling',
          steps: [
            { stepNumber: 1, textAr: 'عند درجة 298 K، يمتلك جزء ضئيل جداً من الجزيئات طاقة حركة تفوق Ea.', textEn: 'At 298 K, only a small fraction of molecules exceed Ea.' },
            { stepNumber: 2, textAr: 'رفع الحرارة إلى 308 K (+10 K) يوسع المساحة تحت منحنى ماكسويل-بولتزمان بعد Ea بمقدار الضعف تقريباً.', textEn: 'Raising to 308 K (+10 K) approximately doubles the shaded area exceeding Ea.' },
            { stepNumber: 3, textAr: 'النتيجة: تتضاعف سرعة التفاعل الكيميائي بمقدار مرتين تقريباً.', textEn: 'Result: reaction rate approximately doubles.' }
          ],
          takeawayAr: 'زيادة درجة الحرارة تزيد سرعة التفاعل ليس فقط لزيادة عدد التصادمات، بل لزيادة نسبة التصادمات الفعالة الممتلكة لطاقة التنشيط.',
          takeawayEn: 'Temperature increases rate predominantly by increasing the fraction of collisions possessing Ea.'
        },
        tipsAr: ['طاقة التنشيط Ea نفسها لا تتغير بتغير درجة الحرارة، بل تتغير نسبة الجزيئات الممتلكة لهذه الطاقة'],
        tipsEn: ['Ea itself is constant with temperature; the proportion of molecules exceeding Ea changes'],
        formativeCheck: {
          id: 'fc-chem1-2',
          questionAr: 'ما التغير الذي يطرأ على منحنى ماكسويل-بولتزمان عند رفع درجة حرارة الغاز؟',
          questionEn: 'What happens to the Maxwell-Boltzmann curve when temperature increases?',
          optionsAr: [
            'ينزاح رأس المنحنى نحو اليمين والأسفل وتزداد المساحة بعد Ea',
            'ينزاح رأس المنحنى نحو اليسار والأعلى',
            'تنخفض قيمة طاقة التنشيط Ea إلى النصف',
            'لا يتغير شكل المنحنى على الإطلاق'
          ],
          optionsEn: [
            'Peak shifts right and flattens, increasing area past Ea',
            'Peak shifts left and rises higher',
            'Activation energy Ea is cut in half',
            'Curve shape remains completely unchanged'
          ],
          correctIndex: 0,
          explanationAr: 'ارتفاع الحرارة يزيد متوسط الطاقة الحركية، فينفرش المنحنى لليمين والأسفل وتزداد الجزيئات المتفاعلة.',
          explanationEn: 'Higher thermal energy flattens the peak and spreads it rightwards.',
          hintAr: 'تذكر أن متوسط الطاقة الحركية يزداد مع الحرارة.'
        }
      },
      {
        titleAr: '3. النموذج الثالث: قانون سرعة التفاعل الكيميائي وحساب الرتبة وثابت السرعة',
        titleEn: '3. Model 3: Reaction Rate Law, Reaction Orders & Rate Constant k',
        contentAr: 'يعبر قانون سرعة التفاعل عن العلاقة الرياضية بين سرعة التفاعل وتراكيز المواد المتفاعلة: Rate = k [A]^m [B]^n. يمثل k ثابت سرعة التفاعل النوعي الذي يتأثر بدرجة الحرارة فقط، بينما تمثل m و n رتب التفاعل بالنسبة لكل مادة ويتم إيجادها تجريبياً.',
        contentEn: 'The rate law mathematically models reaction speed relative to reactant concentrations: Rate = k [A]^m [B]^n. The constant k depends strictly on temperature, while orders m and n are found experimentally.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب رتبة التفاعل من البيانات التجريبية',
          titleEn: 'Worked Example: Determining Reaction Order from Kinetic Data',
          steps: [
            { stepNumber: 1, textAr: 'التجربة 1: [A] = 0.1 M, Rate = 0.02 M/s. التجربة 2: [A] = 0.2 M, Rate = 0.08 M/s.', textEn: 'Exp 1: [A]=0.1M, Rate=0.02 M/s. Exp 2: [A]=0.2M, Rate=0.08 M/s.' },
            { stepNumber: 2, textAr: 'قسمة معدل التجربة 2 على 1: (0.08 / 0.02) = (0.2 / 0.1)^m => 4 = (2)^m => m = 2.', textEn: 'Rate ratio: (0.08/0.02) = (0.2/0.1)^m => 4 = 2^m => m = 2.' },
            { stepNumber: 3, textAr: 'حساب ثابت السرعة k: k = Rate / [A]² = 0.02 / (0.1)² = 0.02 / 0.01 = 2.0 L/(mol·s).', textEn: 'Compute k: k = 0.02 / (0.1)^2 = 2.0 L/(mol·s).' }
          ],
          takeawayAr: 'رتبة التفاعل هي 2 بالنسبة للمادة A، ووحدة الثابت k للتفاعل من الرتبة الثانية هي L/(mol·s).',
          takeawayEn: 'The reaction is 2nd order with respect to A, giving k the units L/(mol·s).'
        },
        tipsAr: ['رتب التفاعل لا ترتبط بالمعاملات في المعادلة الموزونة بل تُستنتج من التجارب فقط'],
        tipsEn: ['Reaction orders are purely empirical and unrelated to stoichiometric coefficients'],
        formativeCheck: {
          id: 'fc-chem1-3',
          questionAr: 'إذا كانت رتبة تفاعل كيميائي كلية تساوي صفراً (Zero order)، فماذا يحدث للسرعة عند مضاعفة تركيز المتفاعلات؟',
          questionEn: 'If a reaction is zero order overall, what happens to rate when reactant concentration is doubled?',
          optionsAr: [
            'تبقى سرعة التفاعل ثابتة ولا تتغير',
            'تتضاعف السرعة مرتين',
            'تتضاعف السرعة أربع مرات',
            'تنخفض السرعة إلى النصف'
          ],
          optionsEn: [
            'Rate remains completely constant',
            'Rate doubles',
            'Rate quadruples',
            'Rate is halved'
          ],
          correctIndex: 0,
          explanationAr: 'في تفاعلات الرتبة الصفرية: Rate = k [A]⁰ = k، وبالتالي السرعة ثابتة ومستقلة عن التركيز.',
          explanationEn: 'In zero-order kinetics, Rate = k[A]^0 = k, independent of concentration.',
          hintAr: 'أي عدد مرفوع للقوة صفر يساوي 1.'
        }
      },
      {
        titleAr: '4. النموذج الرابع: العوامل الخمسة المؤثرة في سرعة التفاعل وآلية عملها',
        titleEn: '4. Model 4: The 5 Factors Influencing Reaction Rates & Mechanisms',
        contentAr: 'تتأثر سرعة التفاعل بخمسة عوامل رئيسية: 1) طبيعة المواد المتفاعلة (نشاط الفلزات وقوة الروابط)، 2) التركيز (زيادة عدد الجسيمات في وحدة الحجم)، 3) مساحة السطح (للمواد الصلبة)، 4) درجة الحرارة (زيادة الطاقة الحركية والتصادمات الفعالة)، 5) المحفزات والمثبطات.',
        contentEn: 'Reaction rates depend on: 1) Nature of reactants, 2) Concentration, 3) Surface area, 4) Temperature, and 5) Catalysts and inhibitors.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: مقارنة تفاعل الخارصين مع حمض الهيدروكلوريك ككتلة مقابل مسحوق',
          titleEn: 'Worked Example: Zinc Chunk vs Powder in HCl',
          steps: [
            { stepNumber: 1, textAr: 'كتلة خارصين 5g في 1M HCl: مساحة السطح صغيرة، التفاعل بطيء ويتصاعد الهيدروجين ببطء.', textEn: '5g Zn chunk in 1M HCl: small surface area, slow H2 bubbling.' },
            { stepNumber: 2, textAr: 'مسحوق خارصين 5g في 1M HCl: مساحة سطح شاسعة ملايين الجزيئات ملامسة للحمض في نفس اللحظة.', textEn: '5g Zn powder: immense surface area exposes millions of atoms simultaneously.' },
            { stepNumber: 3, textAr: 'النتيجة: ينتهي تفاعل المسحوق في 20 ثانية بينما يستغرق الجذع 10 دقائق.', textEn: 'Result: powder reacts in 20s vs 10 mins for solid chunk.' }
          ],
          takeawayAr: 'زيادة مساحة السطح تزيد عدد التصادمات الكلية في وحدة الزمن مما يرفع سرعة التفاعل بشكل هائل.',
          takeawayEn: 'Greater surface area multiplies total collision frequency per second, drastically accelerating the reaction.'
        },
        tipsAr: ['المثبطات (Inhibitors) هي مواد تبطئ سرعة التفاعل أو تمنعه وتستخدم كمواد حافظة للأغذية'],
        tipsEn: ['Inhibitors slow down reaction rates and are widely used as food preservatives'],
        formativeCheck: {
          id: 'fc-chem1-4',
          questionAr: 'لماذا تتفاعل نترات الفضة المائية مع كلوريد الصوديوم المائي لحظياً بينما يستغرق صدأ الحديد أشهراً؟',
          questionEn: 'Why do aqueous ionic solutions react instantaneously while iron rusting takes months?',
          optionsAr: [
            'لأن الأيونات في المحلول المائي حرة الحركة وتتصادم فوراً دون الحاجة لتكسير روابط تساهمية قوية',
            'لأن درجة الحرارة في المحاليل أعلى دائماً',
            'لأن صدأ الحديد تفاعل غير تلقائي',
            'لأن الماء يعمل كمثبط لتفاعل الحديد'
          ],
          optionsEn: [
            'Free aqueous ions collide instantly without breaking strong covalent lattices',
            'Aqueous solutions always have higher temperature',
            'Rusting is non-spontaneous',
            'Water acts as an inhibitor for iron'
          ],
          correctIndex: 0,
          explanationAr: 'طبيعة المواد المتفاعلة الأيونية في المحاليل تتيح تلامساً حراً وفورياً بين الأيونات لتكوين الراسب.',
          explanationEn: 'Aqueous ions possess extreme mobility, facilitating immediate precipitation upon collision.',
          hintAr: 'فكر في حرية حركة الأيونات في المحاليل المائية.'
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
        },
        {
          id: 'qc1-4',
          textAr: 'ما الدور الذي يقوم به المحفز (Catalyst) في التفاعل الكيميائي؟',
          textEn: 'What is the exact role of a catalyst in a chemical reaction?',
          optionsAr: [
            'يوفر مساراً بديلاً بطاقة تنشيط Ea أقل دون التأثير على ΔH',
            'يزيد من طاقة النواتج ويرفع قيمة ΔH',
            'يستهلك بالكامل أثناء التفاعل ليتحول إلى نواتج',
            'يقلل من سرعة التفاعل العكسي فقط'
          ],
          optionsEn: [
            'Provides an alternative mechanism with lower Ea without altering ΔH',
            'Increases product energy and raises ΔH',
            'Is completely consumed during the reaction',
            'Slows down the reverse reaction only'
          ],
          correctIndex: 0,
          conceptTestedAr: 'آلية عمل المحفز',
          conceptTestedEn: 'Catalyst Mechanism of Action',
          explanationAr: 'المحفز يقلل طاقة التنشيط للتفاعلين الأمامي والعكسي بنفس المقدار ويبقى دون استهلاك أو تغيير في ΔH.',
          explanationEn: 'Catalysts lower the activation energy barrier equally for forward and reverse pathways without changing ΔH.',
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
    subtitleEn: 'Master double helix structure, Chargaff\'s rules, helicase, DNA polymerase, and Okazaki fragments.',
    durationMinutes: 45,
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
      'أن يشرح آلية شوكة التضاعف ودور إنزيمات الهيليكيز وبلمرة DNA والليجيز',
      'أن يقارن بين بناء السلسلة الرائدة والسلسلة المتأخرة وتكوين قطع أوكازاكي'
    ],
    learningOutcomesEn: [
      'Describe nucleotide composition and antiparallel double-helix DNA geometry',
      'Apply Chargaff\'s complementary base pairing rules (A=T via 2 H-bonds, G=C via 3 H-bonds)',
      'Explain replication fork machinery: Helicase, DNA Polymerase, and Ligase',
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
        definitionAr: 'الإنزيم المسؤول عن إضافة النيوكليوتيدات المتممة في الاتجاه من 5\' إلى 3\' والتدقيق اللغوي لتصحيح الأخطاء.',
        definitionEn: 'Enzyme that synthesizes complementary DNA strands 5\'->3\' and performs proofreading.'
      },
      {
        termAr: 'قطع أوكازاكي (Okazaki Fragments)',
        termEn: 'Okazaki Fragments',
        definitionAr: 'قطع قصيرة من DNA تُبنى بشكل غير متصل على السلسلة المتأخرة ويتم ربطها بواسطة إنزيم الربط Ligase.',
        definitionEn: 'Short segments of synthesized DNA on the lagging strand, joined together by DNA ligase.'
      }
    ],
    keyConceptsAr: ['اللولب المزدوج وقاعدة تشارجاف', 'التضاعف شبه المحافظ', 'شوكة التضاعف والإنزيمات', 'السلسلة الرائدة وقطع أوكازاكي'],
    keyConceptsEn: ['Double Helix & Chargaff\'s Rules', 'Semi-Conservative Mechanism', 'Replication Fork & Enzymes', 'Leading/Lagging Strands & Okazaki Fragments'],
    summaryAr: 'DNA هو المخطط الوراثي للخلية. يتضاعف بفك اللولب بواسطة الهيليكيز وبناء أشرطة متممة جديدة بواسطة إنزيم البلمرة بدقة فائقة وفق آلية شبه محافظة.',
    summaryEn: 'DNA double helix carries genetic instructions, replicating semi-conservatively using helicase, polymerases, and ligase with high fidelity.',
    goldenRulesAr: [
      'قاعدة تشارجاف الذهبية: %A = %T و %G = %C في أي جزيء DNA مزدوج الشريط.',
      'الرابطة بين G و C ثلاثية هيدروجينية مما يجعل مناطق G-C أعلى ثباتاً حرارياً من مناطق A-T ذات الرابطتين.',
      'الشريطان متعاكسان في الاتجاه (Antiparallel): أحدهما يتجه 5\' -> 3\' والآخر 3\' -> 5\'.',
      'إنزيم بلمرة DNA يبني السلسلة الجديدة حصرياً في الاتجاه من 5\' إلى 3\' بإضافة النيوكليوتيدات إلى طرف 3\'-OH.',
      'السلسلة الرائدة (Leading Strand) تُبنى بشكل متصل باتجاه شوكة التضاعف.',
      'السلسلة المتأخرة (Lagging Strand) تُبنى بشكل متقطع على هيئة قطع أوكازاكي بعيداً عن شوكة التضاعف.',
      'إنزيم الربط (DNA Ligase) يربط قطع أوكازاكي بروابط فوسفاتية ثنائية الإستر ليكتمل الشريط.'
    ],
    goldenRulesEn: [
      'Chargaff\'s Law: %A = %T and %G = %C in any double-stranded DNA molecule.',
      'G-C pairs share 3 hydrogen bonds, providing higher thermal stability than 2-bond A-T pairs.',
      'The two strands are antiparallel: one runs 5\'->3\' and the complementary strand runs 3\'->5\'.',
      'DNA Polymerase synthesizes new DNA exclusively 5\'->3\' by attaching to the 3\'-OH hydroxyl group.',
      'The leading strand is synthesized continuously toward the replication fork.',
      'The lagging strand is synthesized discontinuously away from the fork as Okazaki fragments.',
      'DNA Ligase seals phosphodiester nicks between Okazaki fragments into a continuous strand.'
    ],
    textbookExercises: [
      {
        id: 'tb-bio1-1',
        questionAr: 'إذا كان جزيء DNA يحتوي على 2000 نيوكليوتيدة، وكانت نسبة السايتوسين C تساوي 30%، احسب عدد نيوكليوتيدات الأدنين A والثايمين T في هذا الجزيء.',
        questionEn: 'A DNA molecule has 2000 nucleotides. If Cytosine C = 30%, compute the exact count of Adenine A and Thymine T nucleotides.',
        solutionStepsAr: [
          '1. نسبة C = 30%، إذن نسبة G = 30%. مجموع (G + C) = 60%.',
          '2. المتبقي لـ (A + T) = 100% - 60% = 40%.',
          '3. بما أن %A = %T، فإن نسبة A = 20% ونسبة T = 20%.',
          '4. عدد نيوكليوتيدات A = 2000 × 0.20 = 400 نيوكليوتيدة، وعدد T = 400 نيوكليوتيدة.'
        ],
        solutionStepsEn: [
          '1. C = 30% => G = 30% (combined G+C = 60%).',
          '2. Remaining A+T = 40%.',
          '3. A = 20% and T = 20%.',
          '4. Count: A = 2000 * 0.20 = 400, T = 400 nucleotides.'
        ],
        answerAr: 'عدد نيوكليوتيدات A = 400 و T = 400 نيوكليوتيدة',
        answerEn: 'A count = 400, T count = 400 nucleotides'
      },
      {
        id: 'tb-bio1-2',
        questionAr: 'شريط DNA القالب يحتوي على التسلسل: 5\'- A-T-G-C-C-A-A-T -3\'. اكتب تسلسل الشريط المتمم المبني بواسطة DNA Polymerase مع توضيح الاتجاهات.',
        questionEn: 'DNA template strand is 5\'- A-T-G-C-C-A-A-T -3\'. Write the complementary strand synthesized by DNA Polymerase with proper polarity.',
        solutionStepsAr: [
          '1. الشريط المتمم يكون متعاكساً في الاتجاه: 3\' -> 5\'.',
          '2. تكامل القواعد: A يقابلها T، T يقابلها A، G يقابلها C، C يقابلها G.',
          '3. التتابع المتمم من 3\' إلى 5\': 3\'- T-A-C-G-G-T-T-A -5\'.',
          '4. كتابته بالاتجاه القياسي 5\' إلى 3\': 5\'- A-T-T-G-G-C-A-T -3\'.'
        ],
        solutionStepsEn: [
          '1. Complementary polarity is 3\' to 5\'.',
          '2. Base pairing: A-T, T-A, G-C, C-G.',
          '3. Complementary sequence: 3\'- T-A-C-G-G-T-T-A -5\'.',
          '4. Standard 5\'->3\' notation: 5\'- A-T-T-G-G-C-A-T -3\'.'
        ],
        answerAr: '3\'- TACGGTTA -5\' (أو 5\'- ATTGGCAT -3\')',
        answerEn: '3\'- TACGGTTA -5\' (or 5\'- ATTGGCAT -3\')'
      }
    ],
    sections: [
      {
        titleAr: '1. النموذج الأول: اللولب المزدوج للحمض النووي وتكامل القواعد (قاعدة تشارجاف)',
        titleEn: '1. Model 1: DNA Double Helix & Chargaff Complementary Pairing',
        contentAr: 'أثبت تشارجاف أن في أي عينة DNA: نسبة الأدنين تساوي دائماً نسبة الثايمين (%A = %T)، ونسبة الجوانين تساوي نسبة السايتوسين (%G = %C). يرتبط A مع T برابطتين هيدروجينيتين، ويرتبط G مع C بثلاث روابط هيدروجينية مما يجعله أكثر استقراراً حرارياً.',
        contentEn: 'Chargaff\'s rules state %A = %T (2 H-bonds) and %G = %C (3 H-bonds). G-C rich regions exhibit higher thermal stability.',
        diagram: {
          id: 'diag-bio1-dna',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'اللولب المزدوج للحمض النووي وتكامل القواعد النيتروجينية (قاعدة تشارجاف)',
          titleEn: 'DNA Double Helix Structure & Complementary Base Pairing (Chargaff)',
          captionAr: 'يتكون شريط DNA من سلسلتين لولبيتين متعاكستين ترتبطان بروابط هيدروجينية بين أزواج القواعد النيتروجينية المتكاملة: الأدنين مع الثايمين (A=T) برابطتين، والجوانين مع السايتوسين (G≡C) بثلاث روابط.',
          captionEn: 'The DNA double helix pairs complementary bases across antiparallel strands: Adenine with Thymine (A=T via 2 H-bonds) and Guanine with Cytosine (G≡C via 3 H-bonds).',
          diagramType: 'dna_cell_biology',
          takeawayFormulaAr: '%A = %T | %G = %C | (A + G) = (T + C) = 50%',
          takeawayFormulaEn: '%A = %T | %G = %C | (A + G) = (T + C) = 50%',
          keyLabels: [
            { tagAr: 'الأدنين والثايمين (A = T)', tagEn: 'Adenine-Thymine (A = T)', descAr: 'رابطتان هيدروجينيتان', descEn: '2 Hydrogen bonds' },
            { tagAr: 'الجوانين والسايتوسين (G ≡ C)', tagEn: 'Guanine-Cytosine (G ≡ C)', descAr: 'ثلاث روابط هيدروجينية (أعلى ثباتاً)', descEn: '3 Hydrogen bonds (higher thermal stability)' },
            { tagAr: 'هيكل السكر والفوسفات', tagEn: 'Sugar-Phosphate Backbone', descAr: 'العمود الفقري للشريطين المتعاكسين', descEn: 'Antiparallel structural backbone' }
          ]
        },
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
        tipsAr: ['البيورينات (A, G) ذات حلقتين كيميائيتين، والبيريميدينات (C, T, U) ذات حلقة كيميائية واحدة'],
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
      },
      {
        titleAr: '2. النموذج الثاني: شوكة التضاعف والإنزيمات المشتركة (Replication Fork)',
        titleEn: '2. Model 2: The Replication Fork Architecture & Enzyme Machinery',
        contentAr: 'تتطلب عملية التضاعف تعاوناً دقيقاً بين عدة إنزيمات: 1) Helicase يفك اللولب، 2) RNA Primase يضع بادئات RNA، 3) DNA Polymerase يضيف النيوكليوتيدات ويصحح الأخطاء، 4) DNA Ligase يربط قطع أوكازاكي على السلسلة المتأخرة لتشكيل شريط متصل.',
        contentEn: 'Replication coordinates Helicase (unwinding), Primase (RNA primers), DNA Polymerase (5\'->3\' synthesis & proofreading), and DNA Ligase (Okazaki fragment sealing).',
        diagram: {
          id: 'diag-bio1-fork',
          figureNumberAr: 'شكل (1-2)',
          figureNumberEn: 'Figure (1-2)',
          titleAr: 'شوكة تضاعف DNA والإنزيمات المشتركة (Replication Fork Machinery)',
          titleEn: 'Replication Fork & Polymerase/Helicase Machinery',
          captionAr: 'يوضح المخطط كيفية عمل الهيليكيز لفك شريطي DNA، وبناء السلسلة الرائدة بشكل متصل والسلسلة المتأخرة على هيئة قطع أوكازاكي يربطها إنزيم الليجيز.',
          captionEn: 'Illustrates Helicase unzipping parental DNA, continuous leading strand synthesis, and discontinuous Okazaki fragment lagging strand synthesis.',
          diagramType: 'dna_replication_fork',
          takeawayFormulaAr: 'Synthesis Direction: 5\' → 3\' | Helicase + Primase + DNA Pol III + Ligase',
          takeawayFormulaEn: 'Synthesis Direction: 5\' → 3\' | Helicase + Primase + DNA Pol III + Ligase',
          keyLabels: [
            { tagAr: 'الهيليكيز (Helicase)', tagEn: 'Helicase Enzyme', descAr: 'فك الروابط الهيدروجينية وشوكة التضاعف', descEn: 'Unwinds parental double helix' },
            { tagAr: 'السلسلة الرائدة (Leading)', tagEn: 'Leading Strand', descAr: 'بناء متصل باتجاه الشوكة (5\' -> 3\')', descEn: 'Continuous synthesis toward fork' },
            { tagAr: 'قطع أوكازاكي (Lagging)', tagEn: 'Okazaki Fragments', descAr: 'بناء متقطع بعيداً عن الشوكة', descEn: 'Discontinuous lagging strand' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: تتبع خطوات بناء السلسلة المتأخرة',
          titleEn: 'Worked Example: Lagging Strand Synthesis Flow',
          steps: [
            { stepNumber: 1, textAr: 'يقوم إنزيم Helicase بفصل الشريطين وتكوين شوكة التضاعف.', textEn: 'Helicase unzips the double helix at the replication fork.' },
            { stepNumber: 2, textAr: 'يضع إنزيم Primase بادئة RNA قصيرة عند بداية كل قطعة أوكازاكي.', textEn: 'Primase synthesizes short RNA primers for each fragment.' },
            { stepNumber: 3, textAr: 'يبني DNA Polymerase قطعة أوكازاكي من 5\' إلى 3\'، ثم يستبدل بادئات RNA، ويلحم إنزيم Ligase الفجوات.', textEn: 'Polymerase extends Okazaki fragments and replaces RNA; Ligase seals nicks.' }
          ],
          takeawayAr: 'تضاعف DNA شبه محافظ لأن كل جزيء جديد يحتفظ بشريط أصلي ويبني شريطاً جديداً.',
          takeawayEn: 'Semi-conservative replication preserves one template strand and synthesizes one new daughter strand.'
        },
        tipsAr: ['إنزيم بلمرة DNA يمتلك خاصية التدقيق اللغوي (Proofreading) لتقليل معدل الطفرات إلى أقل من خطأ لكل مليار قاعدة'],
        tipsEn: ['DNA Polymerase proofreading achieves an ultra-low mutation rate below 1 in a billion bases'],
        formativeCheck: {
          id: 'fc-bio1-2',
          questionAr: 'ما وظيفة إنزيم الليجيز (DNA Ligase) في عملية تضاعف الحمض النووي؟',
          questionEn: 'What is the specific function of DNA Ligase during replication?',
          optionsAr: [
            'ربط قطع أوكازاكي ببعضها على السلسلة المتأخرة بروابط فوسفاتية',
            'فك التفاف شريطي اللولب المزدوج',
            'إضافة النيوكليوتيدات في السلسلة الرائدة',
            'بناء بادئات RNA الأولية'
          ],
          optionsEn: [
            'Joining Okazaki fragments on the lagging strand via phosphodiester bonds',
            'Unwinding the double helix',
            'Adding nucleotides to leading strand',
            'Synthesizing RNA primers'
          ],
          correctIndex: 0,
          explanationAr: 'يقوم إنزيم الليجيز بربط الفجوات بين قطع أوكازاكي ليكوّن شريطاً متصلاً كاملاً.',
          explanationEn: 'Ligase catalyzes phosphodiester bond formation between adjacent Okazaki fragments.',
          hintAr: 'تذكر وظيفة "الصمغ الحيوي" لربط القطع المتقطعة.'
        }
      },
      {
        titleAr: '3. النموذج الثالث: اتجاهية البلمرة (5\' إلى 3\') وفروق السلسلتين',
        titleEn: '3. Model 3: Polymerization Polarity (5\' to 3\') & Strand Asymmetry',
        contentAr: 'نظراً لأن إنزيم بلمرة DNA لا يستطيع إضافة النيوكليوتيدات إلا إلى مجموعة الهيدروكسيل الحرة عند الطرف 3\' (3\'-OH)، فإن اتجاه بناء الشريط الجديد يكون دائماً 5\' -> 3\'. يؤدي تعاكس شريطي القالب إلى بناء أحدهما باتجاه الشوكة (السلسلة الرائدة المتصلة) والآخر بعيداً عنها (السلسلة المتأخرة المتقطعة).',
        contentEn: 'DNA Polymerase strictly adds nucleotides to 3\'-OH ends, dictating continuous leading strand synthesis toward the fork and fragmented lagging synthesis away from it.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: تحديد السلسلة الرائدة والمتأخرة من اتجاه القالب',
          titleEn: 'Worked Example: Identifying Leading vs Lagging Strands',
          steps: [
            { stepNumber: 1, textAr: 'شريط القالب 1 يتجه 3\' -> 5\' باتجاه الشوكة: يبنى شريطه المتمم 5\' -> 3\' متصلاً (السلسلة الرائدة).', textEn: 'Template 3\'->5\' toward fork produces continuous 5\'->3\' leading strand.' },
            { stepNumber: 2, textAr: 'شريط القالب 2 يتجه 5\' -> 3\' باتجاه الشوكة: لا يمكن بناؤه باتجاه الشوكة، فيبنى على دفعات متقطعة 5\' -> 3\' للخلف (السلسلة المتأخرة).', textEn: 'Template 5\'->3\' forces discontinuous Okazaki fragments built backwards away from fork.' }
          ],
          takeawayAr: 'التعاكس القطبي لشريطي DNA هو السبب البيولوجي الوحيد لوجود قطع أوكازاكي والسلسلة المتأخرة.',
          takeawayEn: 'Antiparallel strand architecture is the fundamental biological reason for Okazaki fragment generation.'
        },
        tipsAr: ['كل قطعة أوكازاكي تحتاج إلى بادئة RNA Primase خاصة بها قبل أن يبدأ إنزيم البلمرة في بنائها'],
        tipsEn: ['Each Okazaki fragment strictly requires its own RNA primer before polymerase extension'],
        formativeCheck: {
          id: 'fc-bio1-3',
          questionAr: 'لماذا تبنى السلسلة المتأخرة على هيئة قطع أوكازاكي متقطعة؟',
          questionEn: 'Why is the lagging strand synthesized as discontinuous Okazaki fragments?',
          optionsAr: [
            'لأن إنزيم بلمرة DNA يبني فقط في الاتجاه من 5\' إلى 3\' بينما شوكة التضاعف تفتح في الاتجاه المعاكس',
            'لأن السلسلة المتأخرة لا تحتوي على قواعد نيتروجينية كافية',
            'لأن إنزيم الهيليكيز يعمل بشكل متقطع',
            'لأن الخلية تفضل إبطاء التضاعف'
          ],
          optionsEn: [
            'Because polymerase synthesizes strictly 5\'->3\' while the fork unzips in the opposite direction',
            'Because lagging strand lacks nitrogenous bases',
            'Because helicase works intermittently',
            'Because the cell prefers slow replication'
          ],
          correctIndex: 0,
          explanationAr: 'اتجاه البلمرة الإجباري 5\' إلى 3\' يفرض البناء بعيداً عن الشوكة في السلسلة المتأخرة.',
          explanationEn: 'The 5\'->3\' enzymatic constraint mandates backwards discontinuous synthesis on the antiparallel template.',
          hintAr: 'تذكر اتجاه عمل إنزيم بلمرة DNA.'
        }
      },
      {
        titleAr: '4. النموذج الرابع: التدقيق اللغوي الخلوي وإصلاح أخطاء DNA',
        titleEn: '4. Model 4: Proofreading Fidelity & DNA Mismatch Repair',
        contentAr: 'يمتلك إنزيم DNA Polymerase نشاط تفكيك النيوكليوتيدات من الطرف 3\' إلى 5\' (Exonuclease Proofreading). فإذا أضاف قاعدة غير متطابقة عن طريق الخطأ، يتوقف فوراً، ويزيل النيوكليوتيدة الخاطئة، ثم يستبدلها بالقاعدة المتممة الصحيحة قبل مواصلة البناء.',
        contentEn: 'DNA Polymerase possesses 3\'->5\' exonuclease proofreading capability to detect, excise, and replace mismatched nucleotides instantly during replication.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب دقة تضاعف DNA بفضل التدقيق اللغوي',
          titleEn: 'Worked Example: Replication Fidelity Metrics',
          steps: [
            { stepNumber: 1, textAr: 'معدل الخطأ الأولي للبلمرة بدون تدقيق: خطأ واحد لكل 100,000 قاعدة (1 في 10⁵).', textEn: 'Initial error rate without proofreading: 1 in 10^5 bases.' },
            { stepNumber: 2, textAr: 'بفضل نشاط التدقيق Exonuclease: ينخفض معدل الخطأ إلى خطأ واحد لكل مليار قاعدة (1 في 10⁹).', textEn: 'With 3\'->5\' exonuclease proofreading: error rate drops to 1 in 10^9 bases.' },
            { stepNumber: 3, textAr: 'النتيجة: ينسخ الجينوم البشري الكامل (3 مليارات قاعدة) بأقل من 3 أخطاء طفرية لكل انقسام خلوي!', textEn: 'Result: the entire 3-billion-base human genome is replicated with fewer than 3 errors per division!' }
          ],
          takeawayAr: 'التدقيق اللغوي الخلوي يحفظ الثبات الوراثي ويحمي الكائنات الحية من الطفرات القاتلة والأورام السرطانية.',
          takeawayEn: 'Proofreading preserves genetic stability and prevents malignant oncogenic mutations.'
        },
        tipsAr: ['فشل آليات إصلاح DNA وتدقيقه يؤدي إلى تراكم الطفرات وقد يسبب أمراضاً وراثية أو سرطانية'],
        tipsEn: ['Defects in mismatch repair enzymes lead to hereditary cancer syndromes like Lynch syndrome'],
        formativeCheck: {
          id: 'fc-bio1-4',
          questionAr: 'ما الخاصية التي تسمح لإنزيم بلمرة DNA بإصلاح القواعد غير المتطابقة لحظياً أثناء التضاعف؟',
          questionEn: 'Which enzymatic activity enables DNA Polymerase to correct mismatched bases on the fly?',
          optionsAr: [
            'خاصية التدقيق اللغوي والقص الخارجي من 3\' إلى 5\' (3\'->5\' Exonuclease activity)',
            'خاصية الترجمة الريبوسومية',
            'خاصية تحويل القواعد إلى يوراسيل',
            'خاصية فك الالتواء السريع'
          ],
          optionsEn: [
            '3\'->5\' Exonuclease proofreading activity',
            'Ribosomal translation activity',
            'Uracil conversion activity',
            'Fast helicase unwinding'
          ],
          correctIndex: 0,
          explanationAr: 'نشاط 3\'->5\' Exonuclease يتيح للإنزيم الرجوع خطوة للخلف وقص النيوكليوتيدة الخاطئة وتصحيحها.',
          explanationEn: '3\'->5\' exonuclease activity acts as an immediate backspace key to excise mismatched bases.',
          hintAr: 'ابحث عن نشاط التدقيق وقص النيوكليوتيدات الخاطئة.'
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
          optionsAr: ['من 5\' إلى 3\'', 'من 3\' إلى 5\'', 'في الاتجاهين معاً عشوائياً', 'من المركز إلى الأطراف'],
          optionsEn: ['5\' to 3\'', '3\' to 5\'', 'Bidirectional randomly', 'Center to ends'],
          correctIndex: 0,
          conceptTestedAr: 'اتجاه بلمرة DNA',
          conceptTestedEn: 'Polymerase Synthesis Direction',
          explanationAr: 'يضيف إنزيم بلمرة DNA النيوكليوتيدات الجديدة إلى الطرف 3\' للهيدروكسيل، فيكون اتجاه البناء من 5\' إلى 3\'.',
          explanationEn: 'New nucleotides are added to the 3\'-OH end, requiring 5\'->3\' synthesis.',
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
        },
        {
          id: 'qb1-4',
          textAr: 'لماذا ترتبط مناطق DNA الغنية بالقاعدتين G و C بثبات حراري أعلى من مناطق A و T؟',
          textEn: 'Why do G-C rich DNA regions possess higher thermal stability than A-T rich regions?',
          optionsAr: [
            'لوجود 3 روابط هيدروجينية بين G و C مقابل رابطتين فقط بين A و T',
            'لأن G و C تحتويان على ذرات كربون أكثر',
            'لأن الرابطة بين G و C رابطة تساهمية أيونية',
            'لأن سكر الريبوز في مناطق G-C يختلف كيميائياً'
          ],
          optionsEn: [
            'Because G-C pairs have 3 hydrogen bonds vs 2 between A-T',
            'Because G and C contain more carbon atoms',
            'Because G-C pairing is covalent ionic',
            'Because ribose sugars differ chemically in G-C regions'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الروابط الهيدروجينية بين القواعد النيتروجينية',
          conceptTestedEn: 'Hydrogen Bonds in Base Pairs',
          explanationAr: 'زوج الجوانين-السايتوسين يرتبط بثلاث روابط هيدروجينية مقارنة برابطتين فقط لزوج الأدنين-الثايمين.',
          explanationEn: 'Guanine and Cytosine form 3 hydrogen bonds, imparting greater structural stability.',
          difficulty: 'medium'
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
    durationMinutes: 45,
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM والتقنية)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM & Digital Technology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الأولى: الذكاء الاصطناعي وتعلم الآلة وهندسة البيانات',
    unitTitleEn: 'Unit 1: Artificial Intelligence & Machine Learning',
    lessonNumberAr: 'الدرس 1: مبادئ الذكاء الاصطناعي والشبكات العصبية وتدريب النماذج',
    lessonNumberEn: 'Lesson 1: Machine Learning & Neural Networks',
    warmupHookAr: 'كيف تستطيع السيارات ذاتية القيادة التعرف على إشارات المرور والمشاة في أجزاء من الألف من الثانية؟ وكيف يتوقع نموذج Gemini إجابات دقيقة لأسئلتك؟ السر يكمن في "الشبكات العصبية الاصطناعية" المستوحاة من الدماغ البشري وخوارزميات تعلم الآلة التي تدرب النماذج على ملايين الأنماط البيانية عبر خوارزمية التدرج الهابط والتمرير الخلفي!',
    warmupHookEn: 'How do autonomous vehicles detect pedestrians in milliseconds, and how do LLMs like Gemini generate nuanced responses? Artificial Neural Networks inspired by biological neurons process millions of features to optimize loss functions via backpropagation and gradient descent!',
    learningOutcomesAr: [
      'أن يميز الطالب بين فروع الذكاء الاصطناعي: التعلم الموجه (Supervised)، غير الموجه (Unsupervised)، وتعلم التعزيز (Reinforcement)',
      'أن يشرح بنية العصبون الاصطناعي والشبكات العصبية العميقة (المدخلات X، الأوزان W، الانحياز b، ودوال التنشيط ReLU / Sigmoid / Softmax)',
      'أن يوضح دور دالة الخسارة (Loss Function) وخوارزمية التدرج الهابط (Gradient Descent) والتمرير الخلفي (Backpropagation) في تحسين الأوزان',
      'أن يقيم أداء نموذج التعلم باستخدام مصفوفة الالتباس ومقاييس الدقة (Accuracy, Precision, Recall, F1-Score) وأشجار القرار'
    ],
    learningOutcomesEn: [
      'Distinguish AI paradigms: Supervised, Unsupervised, and Reinforcement Learning',
      'Analyze artificial neuron architecture: inputs X, weights W, bias b, and activation functions (ReLU, Sigmoid, Softmax)',
      'Explain loss functions, Gradient Descent optimization, and Backpropagation weight updates',
      'Evaluate model performance using Confusion Matrix metrics and Decision Tree classifiers'
    ],
    vocabulary: [
      {
        termAr: 'التعلم الموجه (Supervised Learning)',
        termEn: 'Supervised Learning',
        definitionAr: 'تدريب نموذج تعلم الآلة على بيانات موسومة (Labeled Data) تحتوي على أزواج من المدخلات والمخرجات الصحيحة ليتعلم التنبؤ بالقيم الجديدة.',
        definitionEn: 'Training an ML model on labeled datasets with ground-truth input-output pairs.'
      },
      {
        termAr: 'الشبكة العصبية الاصطناعية (Artificial Neural Network - ANN)',
        termEn: 'Artificial Neural Network',
        definitionAr: 'نموذج حوسبي هرمي يتكون من طبقات من العصبونات المتصلة بأوزان قابلة للتعديل لمعالجة الأنماط واستخراج الخصائص غير الخطية.',
        definitionEn: 'Computational hierarchical model composed of interconnected layers of artificial neurons with trainable parameters.'
      },
      {
        termAr: 'دالة التنشيط (Activation Function)',
        termEn: 'Activation Function',
        definitionAr: 'دالة رياضية غير خطية (مثل ReLU أو Sigmoid أو Softmax) تطبق على المجموع الموزون للمدخلات لتمكين الشبكة من حل المسائل المعقدة.',
        definitionEn: 'Mathematical non-linear function introducing non-linearity into neuron outputs.'
      },
      {
        termAr: 'التدرج الهابط (Gradient Descent)',
        termEn: 'Gradient Descent',
        definitionAr: 'خوارزمية تحسين تكرارية تستخدم مشتقات دالة الخسارة لتعديل أوزان النموذج باتجاه أدنى قيمة للخطأ بمعدل تعلم محدد.',
        definitionEn: 'Iterative optimization algorithm updating weights in the opposite direction of the loss gradient.'
      },
      {
        termAr: 'مصفوفة الالتباس (Confusion Matrix)',
        termEn: 'Confusion Matrix',
        definitionAr: 'جدول إحصائي يقارن بين التنبؤات الفعلية للنموذج والتصنيفات الحقيقية لاستخراج مقاييس الدقة والإحكام والحساسية.',
        definitionEn: 'Table evaluating classification models by tabulating True Positives, True Negatives, False Positives, and False Negatives.'
      }
    ],
    keyConceptsAr: ['أنواع تعلم الآلة الثلاثة', 'بنية العصبون والشبكات العصبية العميقة', 'دوال التنشيط والتمرير الأمامي', 'التدرج الهابط ومصفوفة الالتباس وأشجار القرار'],
    keyConceptsEn: ['Machine Learning Paradigms', 'Deep Neural Network Architecture', 'Activation Functions & Forward Pass', 'Gradient Descent, Confusion Matrix & Decision Trees'],
    summaryAr: 'الذكاء الاصطناعي يعتمد على تدريب الشبكات العصبية عبر التمرير الأمامي لحساب التوقعات، ومقارنتها بالحقيقة لحساب الخسارة، ثم تعديل الأوزان بالتمرير الخلفي والتدرج الهابط للوصول إلى أعلى دقة تصنيف ممكنة.',
    summaryEn: 'Modern AI trains deep neural networks via forward propagation to compute predictions, loss calculation against ground truth, and backpropagation with gradient descent to minimize errors.',
    goldenRulesAr: [
      'معادلة العصبون الأساسية: z = (w₁x₁ + w₂x₂ + ... + wₙxₙ) + b، متبوعة بتطبيق دالة التنشيط a = f(z).',
      'دالة ReLU [f(z) = max(0, z)] هي المعيار القياسي في الطبقات المخفية لتسريع الحسابات وتجنب تلاشي التدرج.',
      'دالة Sigmoid تستخدم في المخرجات الثنائية (0 إلى 1)، ودالة Softmax تستخدم في التصنيف متعدد الفئات لإنتاج احتمالات مجموعها = 1.',
      'التعلم الموجه يتطلب بيانات موسومة (Labeled)، والتعلم غير الموجه يكتشف الأنماط في بيانات غير موسومة، والتعلم المعزز يعتمد على المكافأة والعقاب.',
      'معدل التعلم Learning Rate (η): إذا كان كبيراً جداً يفشل النموذج في التقارب، وإذا كان صغيراً جداً يستغرق وقتاً طويلاً للتدريب.',
      'قوانين مصفوفة الالتباس: Accuracy = (TP+TN)/Total | Precision = TP/(TP+FP) | Recall = TP/(TP+FN).',
      'أشجار القرار تقسم البيانات باستخدام مقياس عدم النقاء (Gini Impurity) أو الإنتروبيا (Entropy) للوصول إلى أوراق تصنيف نقية.'
    ],
    goldenRulesEn: [
      'Neuron activation equation: z = Σ(wᵢ · xᵢ) + b followed by non-linear activation a = f(z).',
      'ReLU [f(z) = max(0, z)] is the hidden layer standard to accelerate convergence and avoid vanishing gradients.',
      'Sigmoid outputs probabilities for binary classification; Softmax normalizes multi-class outputs to sum to 1.0.',
      'Supervised ML uses labeled data, Unsupervised ML discovers clusters, Reinforcement ML learns via reward policies.',
      'Learning rate (η) controls gradient step size: too large causes divergence, too small stalls convergence.',
      'Confusion matrix formulas: Accuracy=(TP+TN)/Total | Precision=TP/(TP+FP) | Recall=TP/(TP+FN).',
      'Decision Trees partition data using Gini Impurity or Information Gain Entropy toward pure leaves.'
    ],
    textbookExercises: [
      {
        id: 'tb-cs1-1',
        questionAr: 'عصبون اصطناعي يستقبل مدخلين: x1 = 4, x2 = -2 بالأوزان w1 = 0.5, w2 = 1.5 وقيمة الانحياز b = 0.5. احسب المجموع الموزون z، ثم احسب مخرج العصبون a باستخدام دالة ReLU ودالة الخطوة الثنائية.',
        questionEn: 'A neuron receives x1=4, x2=-2 with weights w1=0.5, w2=1.5 and bias b=0.5. Calculate weighted sum z, then output a using ReLU and Binary Step.',
        solutionStepsAr: [
          '1. حساب المجموع الموزون: z = (x1 · w1) + (x2 · w2) + b = (4 · 0.5) + (-2 · 1.5) + 0.5.',
          '2. z = 2.0 - 3.0 + 0.5 = -0.5.',
          '3. دالة ReLU: a_relu = max(0, -0.5) = 0.',
          '4. دالة الخطوة: بما أن z = -0.5 < 0، فإن a_step = 0.'
        ],
        solutionStepsEn: [
          '1. Weighted sum: z = (4 * 0.5) + (-2 * 1.5) + 0.5 = 2.0 - 3.0 + 0.5 = -0.5.',
          '2. ReLU: max(0, -0.5) = 0.',
          '3. Step: since z < 0 => output = 0.'
        ],
        answerAr: 'المجموع z = -0.5 | مخرج ReLU = 0 | مخرج Step = 0',
        answerEn: 'Weighted sum z = -0.5 | ReLU output = 0 | Step output = 0'
      },
      {
        id: 'tb-cs1-2',
        questionAr: 'نموذج ذكاء اصطناعي طبي لتشخيص مرض معين تم اختباره على 100 مريض فكانت النتائج: الإيجابي الحقيقي TP = 40، السلبي الحقيقي TN = 45، الإيجابي الخاطئ FP = 5، السلبي الخاطئ FN = 10. احسب كلاً من: الدقة (Accuracy)، الإحكام (Precision)، والحساسية (Recall).',
        questionEn: 'A medical AI model tested on 100 patients yields TP=40, TN=45, FP=5, FN=10. Compute Accuracy, Precision, and Recall.',
        solutionStepsAr: [
          '1. المجموع الكلي = TP + TN + FP + FN = 40 + 45 + 5 + 10 = 100.',
          '2. الدقة Accuracy = (TP + TN) / Total = (40 + 45) / 100 = 85 / 100 = 85% (0.85).',
          '3. الإحكام Precision = TP / (TP + FP) = 40 / (40 + 5) = 40 / 45 ≈ 88.89% (0.889).',
          '4. الحساسية/الاسترجاع Recall = TP / (TP + FN) = 40 / (40 + 10) = 40 / 50 = 80% (0.80).'
        ],
        solutionStepsEn: [
          '1. Total samples = 40 + 45 + 5 + 10 = 100.',
          '2. Accuracy = (40 + 45) / 100 = 85%.',
          '3. Precision = 40 / (40 + 5) = 40/45 = 88.89%.',
          '4. Recall = 40 / (40 + 10) = 40/50 = 80%.'
        ],
        answerAr: 'الدقة = 85% | الإحكام = 88.89% | الحساسية = 80%',
        answerEn: 'Accuracy = 85% | Precision = 88.89% | Recall = 80%'
      }
    ],
    sections: [
      {
        titleAr: '1. النموذج الأول: معمارية الشبكات العصبية العميقة وتدفق التمرير الأمامي والخلفي',
        titleEn: '1. Model 1: Deep Neural Network Architecture, Forward Pass & Backprop',
        contentAr: 'تتكون الشبكة العصبية العميقة (Deep Neural Network) من طبقة مدخلات (Input Layer)، وعدة طبقات مخفية (Hidden Layers)، وطبقة مخرجات (Output Layer). في كل عصبون، يتم حساب المجموع الموزون z = Σ(wᵢxᵢ) + b ثم تمريره إلى دالة تنشيط غير خطية مثل ReLU: f(z) = max(0, z) في الطبقات المخفية لتمكين الشبكة من التقاط العلاقات غير الخطية المعقدة في البيانات، ودالة Sigmoid أو Softmax في طبقة المخرجات.',
        contentEn: 'A Deep Neural Network comprises Input, Multiple Hidden, and Output layers. Each artificial neuron computes the linear combination z = Σ(wi xi) + b and passes it through an activation function like ReLU f(z) = max(0, z) or Softmax.',
        diagram: {
          id: 'diag-cs1-nn-topology',
          figureNumberAr: 'شكل (1-1)',
          figureNumberEn: 'Figure (1-1)',
          titleAr: 'معمارية الشبكة العصبية العميقة والتمرير الأمامي والخلفي (Deep Neural Network Topology)',
          titleEn: 'Deep Neural Network Topology & Forward/Backpropagation Loop',
          captionAr: 'يوضح المخطط تدفق البيانات عبر طبقات المدخلات والطبقات المخفية مع حساب دوال التنشيط وتدفق التمرير الأمامي وحلقة التمرير الخلفي لتحديث الأوزان عبر دالة الخسارة.',
          captionEn: 'Illustrates multi-layer neural network architecture, forward propagation with activation functions, and backpropagation loss optimization.',
          diagramType: 'neural_network_ai',
          takeawayFormulaAr: 'z = Σ(wᵢ · xᵢ) + b | a = ReLU(z) = max(0, z) | w := w - η(∂L/∂w)',
          takeawayFormulaEn: 'z = Σ(wᵢ · xᵢ) + b | a = ReLU(z) = max(0, z) | w := w - η(∂L/∂w)',
          keyLabels: [
            { tagAr: 'طبقة المدخلات (Input X)', tagEn: 'Input Layer X', descAr: 'استقبال الخصائص والميزات الأولية', descEn: 'Raw input features' },
            { tagAr: 'الطبقات المخفية (Hidden ReLU)', tagEn: 'Hidden Layers (ReLU)', descAr: 'استخراج الأنماط المعقدة غير الخطية', descEn: 'Feature extraction with non-linear activation' },
            { tagAr: 'طبقة المخرجات (Output)', tagEn: 'Output Predictions ŷ', descAr: 'التنبؤ النهائي أو فئة التصنيف', descEn: 'Final prediction or class probability' },
            { tagAr: 'التمرير الخلفي (Backprop)', tagEn: 'Backpropagation Loop', descAr: 'تحديث الأوزان لتقليل الخسارة', descEn: 'Weight optimization via gradient descent' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب مخرجات عصبون اصطناعي متعدد المدخلات',
          titleEn: 'Worked Example: Multi-Input Neuron Activation Computation',
          steps: [
            { stepNumber: 1, textAr: 'المدخلات: x1 = 3.0, x2 = 2.0, x3 = -1.0. الأوزان: w1 = 0.4, w2 = 0.8, w3 = 0.6. الانحياز b = -0.2.', textEn: 'Inputs: x1=3.0, x2=2.0, x3=-1.0. Weights: w1=0.4, w2=0.8, w3=0.6. Bias: b=-0.2.' },
            { stepNumber: 2, textAr: 'حساب المجموع الموزون: z = (3.0 * 0.4) + (2.0 * 0.8) + (-1.0 * 0.6) - 0.2 = 1.2 + 1.6 - 0.6 - 0.2 = 2.0.', textEn: 'Weighted sum: z = (3*0.4) + (2*0.8) + (-1*0.6) - 0.2 = 2.0.' },
            { stepNumber: 3, textAr: 'تطبيق دالة ReLU: f(2.0) = max(0, 2.0) = 2.0. مخرج العصبون المنشط a = 2.0.', textEn: 'Apply ReLU: max(0, 2.0) = 2.0. Output a = 2.0.' }
          ],
          takeawayAr: 'دوال التنشيط غير الخطية هي المحرك الأساسي لقدرة الشبكات العصبية على حل مسائل الرؤية الحاسوبية ومعالجة اللغات الطبيعية.',
          takeawayEn: 'Non-linear activations allow deep networks to universally approximate complex non-linear functions.'
        },
        tipsAr: ['دالة ReLU هي الأكثر استخداماً عالمياً لتجنب مشكلة تلاشي التدرج (Vanishing Gradient) وتسريع تدريب النماذج'],
        tipsEn: ['ReLU is universally preferred in hidden layers to prevent vanishing gradients and speed up convergence'],
        formativeCheck: {
          id: 'fc-cs1-1',
          questionAr: 'ما الناتج النهائي لعصبون ذي مجموع موزون z = -3.2 عند تطبيق دالة التنشيط ReLU؟',
          questionEn: 'What is the output of an artificial neuron with weighted sum z = -3.2 using ReLU?',
          optionsAr: ['0', '-3.2', '1', '3.2'],
          optionsEn: ['0', '-3.2', '1', '3.2'],
          correctIndex: 0,
          explanationAr: 'دالة ReLU تعطي 0 لجميع القيم السالبة: f(-3.2) = max(0, -3.2) = 0.',
          explanationEn: 'ReLU sets all negative inputs to zero: max(0, -3.2) = 0.',
          hintAr: 'تذكر معادلة ReLU: f(z) = max(0, z).'
        }
      },
      {
        titleAr: '2. النموذج الثاني: دورة حياة تعلم الآلة وخوارزمية التدرج الهابط ومصفوفة الالتباس',
        titleEn: '2. Model 2: Machine Learning Lifecycle, Gradient Descent & Confusion Matrix Evaluation',
        contentAr: 'تتضمن دورة تعلم الآلة: جمع البيانات، هندسة الخصائص، تدريب النموذج بالتدرج الهابط (Gradient Descent) لتحديث الأوزان w := w - η · (∂Loss/∂w)، ثم تقييم النموذج باستخدام مصفوفة الالتباس (Confusion Matrix) لحساب مقاييس الدقة والإحكام (Precision) والاسترجاع (Recall).',
        contentEn: 'The ML lifecycle spans data preparation, model training via Gradient Descent weight updates w := w - η · (∂L/∂w), and evaluation via Confusion Matrix metrics.',
        diagram: {
          id: 'diag-cs1-ml-pipeline',
          figureNumberAr: 'شكل (1-2)',
          figureNumberEn: 'Figure (1-2)',
          titleAr: 'دورة حياة تعلم الآلة، وخوارزمية التدرج الهابط ومقاييس مصفوفة الالتباس',
          titleEn: 'Machine Learning Paradigms, Gradient Descent & Confusion Matrix Pipeline',
          captionAr: 'يقارن النموذج بين الأنماط الثلاثة لتعلم الآلة (موجه، غير موجه، تعزيزي) ويوضح حلقة التحسين بالتدرج الهابط ومعادلات حساب الدقة والإحكام والاسترجاع من مصفوفة الالتباس.',
          captionEn: 'Comprehensive diagram of ML paradigms, optimization loops, and classification evaluation formulas.',
          diagramType: 'ml_pipeline_model',
          takeawayFormulaAr: 'Accuracy = (TP+TN)/Total | Precision = TP/(TP+FP) | Recall = TP/(TP+FN)',
          takeawayFormulaEn: 'Accuracy = (TP+TN)/Total | Precision = TP/(TP+FP) | Recall = TP/(TP+FN)',
          keyLabels: [
            { tagAr: 'التعلم الموجه (Supervised)', tagEn: 'Supervised Learning', descAr: 'بيانات موسومة وتصنيف/انحدار', descEn: 'Labeled data classification & regression' },
            { tagAr: 'التعلم غير الموجه (Unsupervised)', tagEn: 'Unsupervised Learning', descAr: 'عناقيد وتجميع بيانات غير موسومة', descEn: 'Clustering & dimensionality reduction' },
            { tagAr: 'التعلم التعزيزي (Reinforcement)', tagEn: 'Reinforcement Learning', descAr: 'وكيل بيئي ومكافآت', descEn: 'Agent, environment, policy & rewards' },
            { tagAr: 'مصفوفة الالتباس (Evaluation)', tagEn: 'Confusion Matrix Metrics', descAr: 'حساب TP, TN, FP, FN', descEn: 'Model evaluation performance' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب مقاييس مصفوفة الالتباس لنموذج كشف الاحتيال',
          titleEn: 'Worked Example: Fraud Detection Confusion Matrix Analysis',
          steps: [
            { stepNumber: 1, textAr: 'بيانات الاختبار: إيجابي حقيقي TP = 80، سلبي حقيقي TN = 900، إيجابي خاطئ FP = 10، سلبي خاطئ FN = 10. الإجمالي = 1000.', textEn: 'Test set: TP=80, TN=900, FP=10, FN=10. Total=1000.' },
            { stepNumber: 2, textAr: 'حساب الدقة: Accuracy = (80 + 900) / 1000 = 980 / 1000 = 98%.', textEn: 'Accuracy = (80 + 900) / 1000 = 98%.' },
            { stepNumber: 3, textAr: 'حساب الإحكام: Precision = 80 / (80 + 10) = 80 / 90 = 88.89%. وحساب الحساسية: Recall = 80 / (80 + 10) = 88.89%.', textEn: 'Precision = 80 / 90 = 88.89%. Recall = 80 / 90 = 88.89%.' }
          ],
          takeawayAr: 'في التطبيقات الحساسة (كالطب أو الاحتيال المالي)، يكون مقياس الاسترجاع (Recall) أهم من الدقة العامة لتجنب تفويت الحالات الخطرة.',
          takeawayEn: 'In critical applications, high Recall is prioritized to minimize costly False Negatives.'
        },
        tipsAr: ['عندما تكون البيانات غير متوازنة (Imbalanced Data)، لا تكفي الدقة Accuracy وحدها لتقييم النموذج ويجب استخدام مقياس F1-Score'],
        tipsEn: ['On imbalanced datasets, Accuracy can be misleading; use F1-Score (harmonic mean of Precision & Recall)'],
        formativeCheck: {
          id: 'fc-cs1-2',
          questionAr: 'ما نوع تعلم الآلة المستخدم في تجميع عملاء متجر إلكتروني إلى شرائح تسويقية بناءً على سلوكياتهم دون وجود تصنيفات مسبقة؟',
          questionEn: 'Which ML paradigm groups e-commerce customers into marketing clusters without pre-existing labels?',
          optionsAr: [
            'التعلم غير الموجه (Unsupervised Learning)',
            'التعلم الموجه (Supervised Learning)',
            'التعلم المعزز (Reinforcement Learning)',
            'التعلم الخطي المباشر'
          ],
          optionsEn: [
            'Unsupervised Learning',
            'Supervised Learning',
            'Reinforcement Learning',
            'Direct Linear Learning'
          ],
          correctIndex: 0,
          explanationAr: 'اكتشاف التجمعات والأنماط في بيانات غير موسومة هو جوهر التعلم غير الموجه (Clustering).',
          explanationEn: 'Clustering unlabeled behavioral patterns is the hallmark of unsupervised learning.',
          hintAr: 'البيانات غير موسومة ولا تحتوي على إجابات سابقة محددة.'
        }
      },
      {
        titleAr: '3. النموذج الثالث: دوال التنشيط غير الخطية (ReLU, Sigmoid, Softmax) والرياضيات الكامنة',
        titleEn: '3. Model 3: Non-Linear Activation Functions (ReLU, Sigmoid, Softmax) & Mathematics',
        contentAr: 'تقوم دوال التنشيط بنقل الإشارات الرياضية من المجال الخطي إلى المجال غير الخطي. دالة Sigmoid تنتج قيماً بين (0, 1) وتستخدم للتصنيف الثنائي، بينما دالة Softmax تأخذ متجه مخرجات غير معيارية وتحوله إلى توزيع احتمالي مجموع عناصره يساوي 1.0 للتصنيف متعدد الفئات، ودالة ReLU توفر أداء حسابياً خارقاً وتمنع تلاشي التدرجات.',
        contentEn: 'Activation functions introduce non-linearity. Sigmoid maps inputs to (0, 1) for binary decisions; Softmax normalizes logits into a valid probability distribution summing to 1.0 for multi-class classification; ReLU accelerates convergence.',
        diagram: {
          id: 'diag-cs1-activations',
          figureNumberAr: 'شكل (1-3)',
          figureNumberEn: 'Figure (1-3)',
          titleAr: 'مقارنة المنحنيات الرياضية لدوال التنشيط (ReLU vs Sigmoid vs Softmax)',
          titleEn: 'Mathematical Function Curves: ReLU, Sigmoid & Softmax',
          captionAr: 'يقارن الرسم بين المنحنيات ومجالات القيم ومخرجات الاحتمالات لدوال التنشيط الثلاث الأكثر استخداماً في هندسة الذكاء الاصطناعي.',
          captionEn: 'Compares mathematical shapes, domains, and probabilistic properties of ReLU, Sigmoid, and Softmax.',
          diagramType: 'activation_functions_ai',
          takeawayFormulaAr: 'σ(z) = 1/(1+e⁻ᶻ) | Softmax(zᵢ) = eᶻⁱ / Σ eᶻʲ | ReLU(z) = max(0, z)',
          takeawayFormulaEn: 'σ(z) = 1/(1+e⁻ᶻ) | Softmax(zᵢ) = eᶻⁱ / Σ eᶻʲ | ReLU(z) = max(0, z)',
          keyLabels: [
            { tagAr: 'دالة ReLU', tagEn: 'ReLU Function', descAr: 'الأسرع والأوسع استخداماً في الطبقات المخفية', descEn: 'Fastest hidden layer default' },
            { tagAr: 'دالة Sigmoid', tagEn: 'Sigmoid Function', descAr: 'تصنيف ثنائي واحتمالات بين 0 و 1', descEn: 'Binary probability mapping' },
            { tagAr: 'دالة Softmax', tagEn: 'Softmax Function', descAr: 'توزيع احتمالي متعدد الفئات مجموعه = 1', descEn: 'Multi-class probability distribution' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب دالة Softmax لتصنيف صورة إلى (قط، كلب، طائر)',
          titleEn: 'Worked Example: Softmax Multi-Class Probability Calculation',
          steps: [
            { stepNumber: 1, textAr: 'القيم الخام (Logits): z_cat = 2.0, z_dog = 1.0, z_bird = 0.0.', textEn: 'Raw logits: z_cat=2.0, z_dog=1.0, z_bird=0.0.' },
            { stepNumber: 2, textAr: 'حساب الأس الطبيعي: e² ≈ 7.39, e¹ ≈ 2.72, e⁰ = 1.00. المجموع Σ = 7.39 + 2.72 + 1.00 = 11.11.', textEn: 'Exponentials: e^2=7.39, e^1=2.72, e^0=1.0. Sum=11.11.' },
            { stepNumber: 3, textAr: 'احتمال قط = 7.39 / 11.11 ≈ 66.5%. احتمال كلب = 2.72 / 11.11 ≈ 24.5%. احتمال طائر = 1.00 / 11.11 ≈ 9.0%.', textEn: 'P(cat)=66.5%, P(dog)=24.5%, P(bird)=9.0% (Sum = 100%).' }
          ],
          takeawayAr: 'دالة Softmax تحول أي قيم عددية إلى احتمالات مئوية متسقة تمكن النموذج من اتخاذ قرار التصنيف النهائي بثقة.',
          takeawayEn: 'Softmax standardizes arbitrary scores into interpretable percentage probabilities summing to 1.0.'
        },
        tipsAr: ['في طبقة المخرجات للشبكات العصبية التي تصنف آلاف الكلمات (مثل نماذج اللغات LLM)، دالة Softmax هي المستخدمة حصرياً'],
        tipsEn: ['Softmax is universally utilized in the output vocabulary layer of Large Language Models (LLMs)'],
        formativeCheck: {
          id: 'fc-cs1-3',
          questionAr: 'ما هو مجموع جميع الاحتمالات الناتجة من دالة Softmax لجميع الفئات الممكنة؟',
          questionEn: 'What is the exact sum of all probabilities produced by Softmax across all classes?',
          optionsAr: ['1.0 (أو 100% دائماً)', 'تتراوح بين 0 و 10', 'تعتمد على عدد العصبونات', 'صفر دائماً'],
          optionsEn: ['1.0 (always 100%)', 'Ranges between 0 and 10', 'Depends on neuron count', 'Always 0'],
          correctIndex: 0,
          explanationAr: 'دالة Softmax تقوم بتقسيم كل قيمة على المجموع الكلي، مما يضمن أن مجموع الاحتمالات = 1.0 تماماً.',
          explanationEn: 'By dividing each exponent by the total sum, Softmax guarantees the sum of probabilities is identically 1.0.',
          hintAr: 'تذكر شروط التوزيع الاحتمالي الصحيح.'
        }
      },
      {
        titleAr: '4. النموذج الرابع: خوارزميات التصنيف التفرعي وأشجار القرار ومقياس جيني',
        titleEn: '4. Model 4: Decision Tree Classifiers, Entropy & Gini Impurity',
        contentAr: 'تعتبر أشجار القرار (Decision Trees) من أقوى خوارزميات التعلم الموجه القابلة للتفسير البشري. تبدأ بعقدة الجذر (Root Node)، وتختبر الخصائص لتقسيم البيانات إلى فروع داخلية وصولاً إلى العقد الورقية (Leaf Nodes). يتم اختيار أفضل تقسيم باستخدام مقياس شوائب جيني (Gini Impurity) أو كسب المعلومات والإنتروبيا (Information Gain).',
        contentEn: 'Decision Trees construct hierarchical if-else decision boundaries. Optimal splits are chosen by minimizing Gini Impurity = 1 - Σ(pi)² or maximizing Information Gain via Entropy.',
        diagram: {
          id: 'diag-cs1-decision-tree',
          figureNumberAr: 'شكل (1-4)',
          figureNumberEn: 'Figure (1-4)',
          titleAr: 'هيكل شجرة القرار ومعايير قياس نقاء التقسيم (Decision Tree & Gini Impurity)',
          titleEn: 'Decision Tree Architecture & Gini Impurity Split Criteria',
          captionAr: 'يوضح المخطط كيفية تقسيم العقدة الجذرية إلى فروع فرعية وفق شروط منطقية حتى الوصول إلى أوراق تصنيف نقية (Gini = 0.0).',
          captionEn: 'Demonstrates hierarchical tree splitting from root decision rule to pure classification leaf nodes.',
          diagramType: 'decision_tree_ml',
          takeawayFormulaAr: 'Gini = 1 - Σ (pᵢ)² | Entropy = - Σ pᵢ · log₂(pᵢ)',
          takeawayFormulaEn: 'Gini = 1 - Σ (pᵢ)² | Entropy = - Σ pᵢ · log₂(pᵢ)',
          keyLabels: [
            { tagAr: 'عقدة الجذر (Root)', tagEn: 'Root Decision Node', descAr: 'الخاصية الأكثر تأثيراً ونقاءً في التقسيم', descEn: 'Most informative top-level feature' },
            { tagAr: 'العقد الداخلية (Splits)', tagEn: 'Internal Split Nodes', descAr: 'شروط منطقية فرعية', descEn: 'Sub-branch decision rules' },
            { tagAr: 'العقد الورقية (Leaves)', tagEn: 'Leaf Output Nodes', descAr: 'القرار النهائي أو فئة التصنيف', descEn: 'Final class label or prediction' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: حساب شوائب جيني (Gini Impurity) لعقدة تصنيف',
          titleEn: 'Worked Example: Gini Impurity Calculation for a Split',
          steps: [
            { stepNumber: 1, textAr: 'عقدة تحتوي على 10 عينات: 8 تنتمي للفئة A و 2 تنتمي للفئة B.', textEn: 'Node with 10 samples: 8 class A, 2 class B.' },
            { stepNumber: 2, textAr: 'حساب الاحتمالات: p(A) = 8/10 = 0.8، p(B) = 2/10 = 0.2.', textEn: 'Probabilities: p(A) = 0.8, p(B) = 0.2.' },
            { stepNumber: 3, textAr: 'حساب مقياس جيني: Gini = 1 - [(0.8)² + (0.2)²] = 1 - [0.64 + 0.04] = 1 - 0.68 = 0.32.', textEn: 'Gini = 1 - (0.64 + 0.04) = 1 - 0.68 = 0.32.' }
          ],
          takeawayAr: 'عندما تكون جميع العينات في العقدة من فئة واحدة فقط (نقاء 100%)، تكون قيمة Gini = 0.0 وتتوقف الشجرة عن التقسيم.',
          takeawayEn: 'A completely pure leaf with only one class achieves Gini = 0.0, terminating tree splitting.'
        },
        tipsAr: ['تجميع مئات أشجار القرار معاً يشكل خوارزمية "الغابات العشوائية" (Random Forest) التي تعتبر من أدق خوارزميات تعلم الآلة'],
        tipsEn: ['Ensembling hundreds of decision trees creates Random Forests, one of the most robust ML algorithms'],
        formativeCheck: {
          id: 'fc-cs1-4',
          questionAr: 'ما قيمة مقياس شوائب جيني (Gini Impurity) لعقدة ورقية تحتوي على عينات تنتمي جميعها بنسبة 100% لنفس الفئة؟',
          questionEn: 'What is the Gini Impurity of a pure leaf node containing 100% samples of the same single class?',
          optionsAr: ['0.0 (نقاء تام)', '1.0', '0.5', '100'],
          optionsEn: ['0.0 (Pure Node)', '1.0', '0.5', '100'],
          correctIndex: 0,
          explanationAr: 'عندما تنتمي كل العينات لفئة واحدة: Gini = 1 - (1.0)² = 0.0 مما يعني النقاء الكامل.',
          explanationEn: 'Gini = 1 - (1)^2 = 0.0, indicating zero impurity / pure classification.',
          hintAr: 'تذكر أن 1 ناقص 1 تربيع يساوي صفراً.'
        }
      }
    ],
    assessment: {
      id: 'quiz-cs-1',
      lectureId: 'cs-1',
      titleAr: 'الاختبار الإتقاني للمحاضرة 1: الذكاء الاصطناعي والشبكات العصبية (3 ثانوي STEM والتقنية)',
      titleEn: 'Mastery Quiz 1: AI, Neural Networks & Machine Learning (Grade 12 STEM)',
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
            'Dijkstra\'s Algorithm',
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
        },
        {
          id: 'qcs1-4',
          textAr: 'إذا كان نموذج تصنيف يمتلك TP = 80 و FP = 20، فإن قيمة الإحكام (Precision) تساوي:',
          textEn: 'If a classification model has TP = 80 and FP = 20, the Precision is:',
          optionsAr: ['80% (0.80)', '100% (1.00)', '75% (0.75)', '60% (0.60)'],
          optionsEn: ['80% (0.80)', '100% (1.00)', '75% (0.75)', '60% (0.60)'],
          correctIndex: 0,
          conceptTestedAr: 'حساب مقياس الإحكام Precision',
          conceptTestedEn: 'Precision Metric Computation',
          explanationAr: 'قانون الإحكام Precision = TP / (TP + FP) = 80 / (80 + 20) = 80 / 100 = 80%.',
          explanationEn: 'Precision = TP / (TP + FP) = 80 / (80 + 20) = 80 / 100 = 80%.',
          difficulty: 'medium'
        }
      ]
    }
  },
  {
    id: 'cs-2',
    order: 2,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    titleAr: 'المحاضرة 2: هياكل البيانات المتقدمة وأشجار البحث الثنائية والتعقيد الزمني Big-O',
    titleEn: 'Lecture 2: Advanced Data Structures, Binary Search Trees & Big-O Complexity',
    subtitleAr: 'أشجار البحث الثنائية (BST)، الطوابير والمداخن، وتحليل الخوارزميات Big-O Notation',
    subtitleEn: 'Master Binary Search Trees, traversal algorithms, stacks, queues, and asymptotic Big-O runtime analysis.',
    durationMinutes: 45,
    gradeLevelNameAr: 'الصف الثالث ثانوي - المرحلة الثانوية (مسار STEM والتقنية)',
    gradeLevelNameEn: 'Grade 12 / High School - STEM & Digital Technology',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester / Term 1',
    unitTitleAr: 'الوحدة الثانية: هياكل البيانات والخوارزميات المتقدمة',
    unitTitleEn: 'Unit 2: Advanced Data Structures & Algorithms',
    lessonNumberAr: 'الدرس 2: أشجار البحث الثنائية وتحليل كفاءة الخوارزميات',
    lessonNumberEn: 'Lesson 2: BST & Big-O Complexity',
    warmupHookAr: 'عندما تبحث في قاعدة بيانات تحتوي على 10 مليارات مستخدم على جوجل، يستغرق البحث جزءاً من الألف من الثانية فقط! لو استخدمت البحث الخطي لاحتجت لدقائق. كيف تنظم أشجار البحث الثنائية البيانات هرمياً لتحقق زمن بحث قياسي مقداره O(log n)؟',
    warmupHookEn: 'Searching Google\'s index of billions takes microseconds. Linear search would take minutes. Hierarchical Binary Search Trees partition data logarithmically to achieve O(log n) runtime efficiency!',
    learningOutcomesAr: [
      'أن يشرح الطالب خاصية شجرة البحث الثنائية (BST): الابن الأيسر أصغر من الجذر، والأيمن أكبر منه',
      'أن يطبق خوارزميات المرور على الشجرة (In-order, Pre-order, Post-order)',
      'أن يحلل التعقيد الزمني للخوارزميات باستخدام ترميز Big-O (O(1), O(log n), O(n), O(n log n), O(n²))',
      'أن يقارن بين هياكل البيانات الخطية (المصفوفات، القوائم، المداخن Stack، الطوابير Queue) وتطبيقاتها'
    ],
    learningOutcomesEn: [
      'Explain Binary Search Tree properties: left subtree < root < right subtree',
      'Perform tree traversals: In-order, Pre-order, Post-order',
      'Analyze algorithmic runtime using Big-O notation across standard complexities',
      'Compare linear data structures (arrays, lists, stacks, queues) and practical use cases'
    ],
    vocabulary: [
      {
        termAr: 'شجرة البحث الثنائية (Binary Search Tree - BST)',
        termEn: 'Binary Search Tree',
        definitionAr: 'هيكل بيانات شجري ثنائي تكون فيه قيمة كل عقدة في الشجرة الفرعية اليسرى أصغر من الجذر، وفي الشجرة اليمنى أكبر منه.',
        definitionEn: 'A node-based binary tree where left subtree nodes < root < right subtree nodes.'
      },
      {
        termAr: 'ترميز Big-O (Big-O Notation)',
        termEn: 'Big-O Notation',
        definitionAr: 'ترميز رياضي يصف الحد الأعلى لزمن تنفيذ الخوارزمية أو استخدامها للذاكرة مع نمو حجم المدخلات n.',
        definitionEn: 'Mathematical notation describing the asymptotic upper bound of execution time or memory as input size n grows.'
      },
      {
        termAr: 'المكدس (Stack)',
        termEn: 'Stack',
        definitionAr: 'هيكل بيانات خطي يعمل بمبدأ (الداخل آخراً يخرج أولاً LIFO) عبر عمليتي الإيداع Push والسحب Pop.',
        definitionEn: 'Linear data structure operating under Last-In First-Out (LIFO) via push and pop operations.'
      },
      {
        termAr: 'الطابور (Queue)',
        termEn: 'Queue',
        definitionAr: 'هيكل بيانات خطي يعمل بمبدأ (الداخل أولاً يخرج أولاً FIFO) عبر عمليتي الإضافة Enqueue والحذف Dequeue.',
        definitionEn: 'Linear data structure operating under First-In First-Out (FIFO) via enqueue and dequeue.'
      }
    ],
    keyConceptsAr: ['خصائص شجرة البحث الثنائية BST', 'منحنيات وتحليل التعقيد الزمني Big-O', 'المكدس Stack والطابور Queue', 'خوارزميات الفرز والبحث'],
    keyConceptsEn: ['BST Properties', 'Big-O Complexity Curves', 'Stack & Queue Structures', 'Sorting & Search Algorithms'],
    summaryAr: 'شجرة البحث الثنائية توفر سرعة بحث وإدراج O(log n)، بينما يمنح ترميز Big-O المطورين معياراً دقيقاً لتقييم كفاءة الخوارزميات واختيار أنسب هيكل بيانات للمسألة.',
    summaryEn: 'Binary Search Trees enable O(log n) search and insertion, while Big-O notation provides the analytical foundation for measuring algorithmic performance.',
    goldenRulesAr: [
      'خاصية BST الأساسية: كل عقدة في الفرع الأيسر أصغر من الأصل، وكل عقدة في الفرع الأيمن أكبر منه.',
      'المرور المتسلسل (In-order) على شجرة BST ينتج دائماً قائمة مرتبة ترتيباً تصاعدياً دقيقاً.',
      'زمن البحث والإدراج والحذف في BST المتوازنة هو O(log n)، وفي أسوأ الحالات (الشجرة المنحطة) يصبح O(n).',
      'ترتيب كفاءة Big-O من الأسرع للأبطأ: O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ).',
      'المكدس (Stack) يعمل بمبدأ LIFO (الداخل آخراً يخرج أولاً)، بينما الطابور (Queue) يعمل بمبدأ FIFO.',
      'الوصول لعنصر في المصفوفة عبر الفهرس Index يستغرق زمناً ثابتاً O(1).',
      'خوارزميات الفرز الكفؤة (مثل Merge Sort و Quick Sort) تحقق متوسط تعقيد زمني قدره O(n log n).'
    ],
    goldenRulesEn: [
      'BST Rule: Left child < Parent < Right child for every subtree.',
      'In-order traversal of a BST always visits elements in strictly ascending sorted order.',
      'Balanced BST search/insert/delete costs O(log n); degenerate skewed trees degrade to O(n).',
      'Big-O efficiency hierarchy: O(1) < O(log n) < O(n) < O(n log n) < O(n^2) < O(2^n).',
      'Stack operates via LIFO (Last In First Out); Queue operates via FIFO (First In First Out).',
      'Array direct index lookup is constant time O(1).',
      'Optimal comparison sorting algorithms (Merge Sort, QuickSort) achieve O(n log n) time.'
    ],
    textbookExercises: [
      {
        id: 'tb-cs2-1',
        questionAr: 'أدرج العناصر التالية بالترتيب في شجرة بحث ثنائية فارغة: [50, 30, 70, 20, 40, 60, 80]. اكتب ناتج المرور المتسلسل (In-order) والمرور المسبق (Pre-order).',
        questionEn: 'Insert elements [50, 30, 70, 20, 40, 60, 80] into an empty BST. Provide In-order and Pre-order traversal outputs.',
        solutionStepsAr: [
          '1. الجذر Root = 50.',
          '2. 30 أصغر من 50 (يسار)، 70 أكبر من 50 (يمين).',
          '3. 20 يسار 30، 40 يمين 30. 60 يسار 70، 80 يمين 70.',
          '4. المرور المتسلسل (In-order: يسار - جذر - يمين): [20, 30, 40, 50, 60, 70, 80].',
          '5. المرور المسبق (Pre-order: جذر - يسار - يمين): [50, 30, 20, 40, 70, 60, 80].'
        ],
        solutionStepsEn: [
          '1. Root = 50.',
          '2. Left: 30 (with children 20, 40); Right: 70 (with children 60, 80).',
          '3. In-order traversal: [20, 30, 40, 50, 60, 70, 80].',
          '4. Pre-order traversal: [50, 30, 20, 40, 70, 60, 80].'
        ],
        answerAr: 'In-order: [20, 30, 40, 50, 60, 70, 80] | Pre-order: [50, 30, 20, 40, 70, 60, 80]',
        answerEn: 'In-order: [20, 30, 40, 50, 60, 70, 80] | Pre-order: [50, 30, 20, 40, 70, 60, 80]'
      },
      {
        id: 'tb-cs2-2',
        questionAr: 'خوارزمية تحتوي على حلقتين متداخلتين (Nested Loops)، الحلقة الخارجية تدور n مرة والداخلية تدور n مرة وبداخلها عملية جمع واحدة. ما هو التعقيد الزمني Big-O لهذه الخوارزمية، وكم عملية ستنفذ إذا كانت n = 1000؟',
        questionEn: 'An algorithm has two nested loops each running n times with an O(1) body. What is its Big-O complexity, and how many operations execute for n = 1000?',
        solutionStepsAr: [
          '1. عدد العمليات الإجمالي = n × n = n².',
          '2. التعقيد الزمني هو O(n²) (تعقيد تربيعي Quadratic).',
          '3. عند n = 1000، فإن عدد العمليات = (1000)² = 1,000,000 عملية (مليون عملية).'
        ],
        solutionStepsEn: [
          '1. Total operations = n * n = n^2.',
          '2. Big-O complexity is O(n^2).',
          '3. For n = 1000, operations = 1000^2 = 1,000,000 operations.'
        ],
        answerAr: 'التعقيد الزمني: O(n²) | عدد العمليات = 1,000,000 عملية',
        answerEn: 'Time Complexity: O(n^2) | Operations for n=1000: 1,000,000'
      }
    ],
    sections: [
      {
        titleAr: '1. النموذج الأول: أشجار البحث الثنائية (BST) وخوارزميات المرور',
        titleEn: '1. Model 1: Binary Search Trees (BST) & Traversal Algorithms',
        contentAr: 'شجرة البحث الثنائية (BST) هي هيكل بيانات هرمي يتميز بأن كل عقدة لها ابنان كحد أقصى، وتكون جميع العناصر في الشجرة الفرعية اليسرى أصغر من العقدة، وفي اليمنى أكبر منها. يتيح هذا التنظيم إنجاز عمليات البحث والإدراج في زمن O(log n).',
        contentEn: 'A Binary Search Tree (BST) maintains the invariant that left child < parent < right child, enabling O(log n) average search and insertion.',
        diagram: {
          id: 'diag-cs2-bst',
          figureNumberAr: 'شكل (2-1)',
          figureNumberEn: 'Figure (2-1)',
          titleAr: 'هيكل شجرة البحث الثنائية والتنظيم الهرمي للبيانات (Binary Search Tree)',
          titleEn: 'Binary Search Tree Hierarchy & Traversal Flow',
          captionAr: 'يوضح المخطط العقدة الجذرية والشجيرات الفرعية اليسرى واليمنى مع الحفاظ على شرط الترتيب وخاصية البحث الثنائي.',
          captionEn: 'Illustrates root node, left subtree (< root), and right subtree (> root) achieving logarithmic search complexity.',
          diagramType: 'binary_tree_cs',
          takeawayFormulaAr: 'Time Complexity: Search O(log n) | In-order = Ascending Sorted',
          takeawayFormulaEn: 'Time Complexity: Search O(log n) | In-order = Ascending Sorted',
          keyLabels: [
            { tagAr: 'العقدة الجذرية (Root)', tagEn: 'Root Node', descAr: 'قمة الشجرة ونقطة الانطلاق', descEn: 'Top-level root node' },
            { tagAr: 'الفرع الأيسر (< Root)', tagEn: 'Left Subtree (< Root)', descAr: 'عناصر أصغر من الجذر', descEn: 'Values strictly less than parent' },
            { tagAr: 'الفرع الأيمن (> Root)', tagEn: 'Right Subtree (> Root)', descAr: 'عناصر أكبر من الجذر', descEn: 'Values strictly greater than parent' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: البحث عن قيمة في شجرة BST',
          titleEn: 'Worked Example: BST Key Search',
          steps: [
            { stepNumber: 1, textAr: 'الشجرة تحتوي على الجذر 50، والهدف البحث عن القيمة 40.', textEn: 'Root = 50, Target Key = 40.' },
            { stepNumber: 2, textAr: 'مقارنة 40 مع 50: بما أن 40 < 50 نتحرك نحو الابن الأيسر (العقدة 30).', textEn: '40 < 50 => move left to node 30.' },
            { stepNumber: 3, textAr: 'مقارنة 40 مع 30: بما أن 40 > 30 نتحرك نحو الابن الأيمن (العقدة 40) فتتم المطابقة في خطوتين فقط.', textEn: '40 > 30 => move right to node 40 (Target Found in 2 steps).' }
          ],
          takeawayAr: 'في كل خطوة بحث في شجرة BST المتوازنة، يتم استبعاد نصف الشجرة المتبقية، وهو ما يفسر الكفاءة اللوغاريتمية O(log n).',
          takeawayEn: 'Each comparison eliminates half of the remaining search space, yielding O(log n) speed.'
        },
        tipsAr: ['المرور المتسلسل (In-order Traversal) على شجرة BST ينتج عناصر مرتبة ترتيباً تصاعدياً تلقائياً'],
        tipsEn: ['In-order traversal on a BST automatically yields sorted ascending elements'],
        formativeCheck: {
          id: 'fc-cs2-1',
          questionAr: 'ما هو متوسط التعقيد الزمني لعملية البحث عن عنصر في شجرة بحث ثنائية (BST) متوازنة تحتوي على n عقدة؟',
          questionEn: 'What is the average time complexity to search an element in a balanced BST with n nodes?',
          optionsAr: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
          optionsEn: ['O(log n)', 'O(n)', 'O(1)', 'O(n²)'],
          correctIndex: 0,
          explanationAr: 'في شجرة BST المتوازنة، يقسم البحث فضاء العناصر إلى النصف في كل خطوة، فيكون التعقيد O(log n).',
          explanationEn: 'Halving search space at each level yields logarithmic O(log n) time.',
          hintAr: 'تذكر كيف يقسم البحث الثنائي المساحة إلى نصفين في كل مرحلة.'
        }
      },
      {
        titleAr: '2. النموذج الثاني: تحليل تعقيد الخوارزميات وترميز Big-O Notation',
        titleEn: '2. Model 2: Algorithmic Complexity Analysis & Big-O Curves',
        contentAr: 'يستخدم ترميز Big-O لوصف كفاءة الخوارزميات وتحديد كيفية زيادة زمن التنفيذ أو استهلاك الذاكرة مع زيادة حجم المدخلات n. تتدرج الكفاءة من الزمن الثابت O(1)، إلى اللوغاريتمي O(log n)، الخطي O(n)، شبه الخطي O(n log n)، والتربيعي O(n²).',
        contentEn: 'Big-O notation classifies algorithm efficiency as input size n grows, ranking from O(1) constant, O(log n) logarithmic, O(n) linear, to O(n^2) quadratic.',
        diagram: {
          id: 'diag-cs2-bigo',
          figureNumberAr: 'شكل (2-2)',
          figureNumberEn: 'Figure (2-2)',
          titleAr: 'مقارنة منحنيات التعقيد الزمني للخوارزميات (Big-O Complexity Curves)',
          titleEn: 'Big-O Complexity Growth Comparison Curves',
          captionAr: 'يقارن المنحنى البياني بين مختلف فئات التعقيد الزمني ويوضح الفارق الهائل بين التعقيدات اللوغاريتمية O(log n) والتربيعية O(n²).',
          captionEn: 'Visual comparison of asymptotic growth rates demonstrating why logarithmic and linearithmic algorithms scale superiorly.',
          diagramType: 'algorithm_complexity_big_o',
          takeawayFormulaAr: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)',
          takeawayFormulaEn: 'O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)',
          keyLabels: [
            { tagAr: 'زمن ثابت O(1)', tagEn: 'Constant O(1)', descAr: 'الأسرع (فهرسة المصفوفات والجداول)', descEn: 'Direct hash / index lookup' },
            { tagAr: 'زمن لوغاريتمي O(log n)', tagEn: 'Logarithmic O(log n)', descAr: 'البحث الثنائي وأشجار BST', descEn: 'Binary search & balanced BST' },
            { tagAr: 'زمن تربيعي O(n²)', tagEn: 'Quadratic O(n²)', descAr: 'الحلقات المتداخلة والفرز الفقاعي', descEn: 'Nested loops & Bubble Sort' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: مقارنة زمن البحث الخطي بالبحث الثنائي لمليون عنصر',
          titleEn: 'Worked Example: Linear vs Binary Search for 1,000,000 Items',
          steps: [
            { stepNumber: 1, textAr: 'البحث الخطي O(n): في أسوأ حالة يحتاج إلى فحص 1,000,000 عنصر (مليون خطوة).', textEn: 'Linear Search O(n): worst case checks 1,000,000 items.' },
            { stepNumber: 2, textAr: 'البحث الثنائي O(log₂ n): log₂(1,000,000) ≈ 20 خطوة فقط!', textEn: 'Binary Search O(log n): log2(1,000,000) ≈ 20 comparisons only!' },
            { stepNumber: 3, textAr: 'الفرق: البحث الثنائي أسرع بحوالي 50,000 مرة من البحث الخطي.', textEn: 'Binary search is 50,000x faster for large inputs.' }
          ],
          takeawayAr: 'اختيار هيكل البيانات والخوارزمية المناسبة يحول العمليات البطيئة إلى استجابة فورية فائقة السرعة.',
          takeawayEn: 'Choosing logarithmic algorithms over linear ones transforms system performance exponentially.'
        },
        tipsAr: ['عند كتابة خوارزميات Big-O، نتجاهل الثوابت والحدود الدنيا (مثلاً O(3n² + 5n + 10) تبسط إلى O(n²))'],
        tipsEn: ['In asymptotic Big-O analysis, drop constants and lower-order terms: O(3n^2 + 5n) becomes O(n^2)'],
        formativeCheck: {
          id: 'fc-cs2-2',
          questionAr: 'ما هو التعقيد الزمني لخوارزمية الوصول إلى عنصر في مصفوفة باستخدام الفهرس المباشر Array[i]؟',
          questionEn: 'What is the time complexity to access an array element directly by index Array[i]?',
          optionsAr: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          optionsEn: ['O(1)', 'O(n)', 'O(log n)', 'O(n²)'],
          correctIndex: 0,
          explanationAr: 'الوصول المباشر بواسطة الفهرس يحسب عنوان الذاكرة مباشرة في خطوة واحدة ثابتة O(1).',
          explanationEn: 'Direct index access uses pointer arithmetic to access memory in constant O(1) time.',
          hintAr: 'هل يتغير زمن الوصول إذا كانت المصفوفة تحتوي على 10 عناصر أو 10 ملايين عنصر؟'
        }
      },
      {
        titleAr: '3. النموذج الثالث: هياكل البيانات الخطية: المكدس (Stack) والطابور (Queue)',
        titleEn: '3. Model 3: Linear Data Structures: Stack (LIFO) & Queue (FIFO)',
        contentAr: 'المكدس (Stack) هيكل بيانات يعتمد سياسة LIFO (الداخل آخراً يخرج أولاً)، ويستخدم في إدارة استدعاء الدوال (Call Stack) وخاصية التراجع (Undo). أما الطابور (Queue) فيعتمد سياسة FIFO (الداخل أولاً يخرج أولاً)، ويستخدم في طوابير الطباعة وجدولة المهام في أنظمة التشغيل.',
        contentEn: 'A Stack utilizes Last-In First-Out (LIFO) for function call management and undo operations. A Queue employs First-In First-Out (FIFO) for printer buffers and CPU task scheduling.',
        diagram: {
          id: 'diag-cs2-stack-queue',
          figureNumberAr: 'شكل (2-3)',
          figureNumberEn: 'Figure (2-3)',
          titleAr: 'مقارنة هياكل البيانات: المكدس (Stack) والطابور (Queue)',
          titleEn: 'Stack (LIFO) vs Queue (FIFO) Structural Operations',
          captionAr: 'يوضح المخطط عمليات Push/Pop على قمة المكدس (Top)، وعمليات Enqueue من الخلف (Rear) و Dequeue من الأمام (Front) في الطابور.',
          captionEn: 'Side-by-side visualization of stack LIFO push/pop mechanics and queue FIFO enqueue/dequeue pipelines.',
          diagramType: 'stack_queue_cs',
          takeawayFormulaAr: 'Stack: LIFO (Push / Pop) | Queue: FIFO (Enqueue / Dequeue)',
          takeawayFormulaEn: 'Stack: LIFO (Push / Pop) | Queue: FIFO (Enqueue / Dequeue)',
          keyLabels: [
            { tagAr: 'المكدس Stack (LIFO)', tagEn: 'Stack (LIFO)', descAr: 'إضافة وحذف من القمة Top فقط', descEn: 'Top-only push and pop' },
            { tagAr: 'الطابور Queue (FIFO)', tagEn: 'Queue (FIFO)', descAr: 'إضافة من Rear وحذف من Front', descEn: 'Enqueue at rear, dequeue at front' }
          ]
        },
        interactiveExample: {
          titleAr: 'مثال تطبيقي: محاكاة عمليات المكدس في متصفح الويب (Back Button)',
          titleEn: 'Worked Example: Browser History Stack Simulation',
          steps: [
            { stepNumber: 1, textAr: 'زيارة موقع Google ثم YouTube: Stack = [Google, YouTube] (قمة المكدس = YouTube).', textEn: 'Visit Google then YouTube: Stack = [Google, YouTube] (Top = YouTube).' },
            { stepNumber: 2, textAr: 'زيارة موقع Wikipedia: Stack = [Google, YouTube, Wikipedia].', textEn: 'Visit Wikipedia: Stack = [Google, YouTube, Wikipedia].' },
            { stepNumber: 3, textAr: 'الضغط على زر الرجوع (Back): تنفيذ Pop() فيخرج Wikipedia ويعود المتصفح إلى YouTube.', textEn: 'Press Back: Pop() removes Wikipedia, returning to YouTube.' }
          ],
          takeawayAr: 'المكدس هو الهيكل المثالي لتتبع السجلات والمسارات القابلة للتراجع خطوة بخطوة.',
          takeawayEn: 'Stacks are the fundamental structure for reversible traversal histories and compiler call frames.'
        },
        tipsAr: ['جميع عمليات Push و Pop في المكدس، و Enqueue و Dequeue في الطابور تستغرق زمناً ثابتاً O(1)'],
        tipsEn: ['Push/Pop and Enqueue/Dequeue operations execute in strictly constant time O(1)'],
        formativeCheck: {
          id: 'fc-cs2-3',
          questionAr: 'ما هو هيكل البيانات المناسب لتنظيم إرسال المستندات إلى طابعة مكتبية بحيث يُطبع المستند الأسبق في الإرسال أولاً؟',
          questionEn: 'Which data structure appropriately manages printing documents in order of submission?',
          optionsAr: ['الطابور (Queue)', 'المكدس (Stack)', 'الشجرة الثنائية', 'الرسم البياني'],
          optionsEn: ['Queue (FIFO)', 'Stack (LIFO)', 'Binary Tree', 'Graph'],
          correctIndex: 0,
          explanationAr: 'الطابعة تعمل بمبدأ الأسبقية FIFO (First In First Out) وهو مبدأ الطابور Queue.',
          explanationEn: 'Print spoolers strictly enforce First-In First-Out FIFO processing via Queues.',
          hintAr: 'المستند الذي دخل أولاً يُطبع أولاً.'
        }
      },
      {
        titleAr: '4. النموذج الرابع: خوارزميات الفرز المتقدمة ومبدأ فرق تسد (Divide & Conquer)',
        titleEn: '4. Model 4: Advanced Sorting Algorithms & Divide and Conquer (Merge / Quick Sort)',
        contentAr: 'تعتمد خوارزميات الفرز المتقدمة مثل Merge Sort و Quick Sort على استراتيجية "فرّق تسُد" (Divide and Conquer): حيث تُقسم المصفوفة الكبيرة إلى مصفوفات فرعية أصغر، وتُفرز كل مصفوفة على حدة، ثم تُدمج في زمن كلي فائق الكفاءة O(n log n) بدلاً من خوارزميات الفرز البطيئة O(n²).',
        contentEn: 'Merge Sort and QuickSort employ Divide and Conquer, recursively splitting lists and merging sorted partitions in optimal O(n log n) time.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي: فرز مصفوفة من 8 عناصر باستخدام Merge Sort',
          titleEn: 'Worked Example: 8-Element Merge Sort Recursion',
          steps: [
            { stepNumber: 1, textAr: 'التقسيم: تقسيم 8 عناصر إلى 4 ثم إلى 2 ثم إلى عناصر مفردة (عمق الشجرة = log₂ 8 = 3 مستويات).', textEn: 'Divide: 8 items split to 4, 2, then 1-item sublists (tree depth = log2(8) = 3 levels).' },
            { stepNumber: 2, textAr: 'الدمج: في كل مستوى يستغرق دمج العناصر المفروزة زمناً خطياً O(n).', textEn: 'Merge: merging at each level takes linear O(n) work.' },
            { stepNumber: 3, textAr: 'الزمن الإجمالي: 3 مستويات × n = n log₂ n = 8 × 3 = 24 عملية مقارنة فقط بدلاً من 64 في الفرز الفقاعي!', textEn: 'Total time: n * log(n) = 8 * 3 = 24 operations vs 64 in Bubble Sort!' }
          ],
          takeawayAr: 'استراتيجية فرق تسد تخفض التعقيد الحسابي من الدرجة التربيعية إلى شبه الخطية O(n log n).',
          takeawayEn: 'Divide and conquer dramatically reduces computational complexity from quadratic to linearithmic.'
        },
        tipsAr: ['خوارزمية Merge Sort مستقرة ومضمونة الأداء في أسوأ الحالات O(n log n) لكنها تستهلك ذاكرة إضافية O(n)'],
        tipsEn: ['Merge Sort guarantees O(n log n) worst-case time with O(n) auxiliary memory requirement'],
        formativeCheck: {
          id: 'fc-cs2-4',
          questionAr: 'ما هو التعقيد الزمني في أسوأ الحالات لخوارزمية الفرز بالدمج (Merge Sort)؟',
          questionEn: 'What is the worst-case time complexity of Merge Sort?',
          optionsAr: ['O(n log n)', 'O(n²)', 'O(n)', 'O(1)'],
          optionsEn: ['O(n log n)', 'O(n²)', 'O(n)', 'O(1)'],
          correctIndex: 0,
          explanationAr: 'خوارزمية الفرز بالدمج تضمن زمناً مقداره O(n log n) في جميع الحالات (الأفضل والمتوسط والأسوأ).',
          explanationEn: 'Merge Sort rigorously maintains O(n log n) complexity in best, average, and worst cases.',
          hintAr: 'ابحث عن التعقيد شبه الخطي الشائع في الخوارزميات المقسمة.'
        }
      }
    ],
    assessment: {
      id: 'quiz-cs-2',
      lectureId: 'cs-2',
      titleAr: 'الاختبار الإتقاني للمحاضرة 2: هياكل البيانات و Big-O (3 ثانوي STEM والتقنية)',
      titleEn: 'Mastery Quiz 2: Data Structures & Big-O (Grade 12 STEM)',
      passingScore: 80,
      questions: [
        {
          id: 'qcs2-1',
          textAr: 'المرور المتسلسل (In-Order Traversal) على شجرة بحث ثنائية BST ينتج عناصر مرتبة:',
          textEn: 'In-order traversal on a BST produces elements that are:',
          optionsAr: [
            'مرتبة تصاعدياً من الأصغر إلى الأكبر',
            'مرتبة تنازلياً دائماً',
            'عشوائية دون أي ترتيب',
            'مرتبة حسب عمق الشجرة فقط'
          ],
          optionsEn: [
            'Sorted in ascending order',
            'Sorted in descending order always',
            'Completely random',
            'Sorted strictly by depth'
          ],
          correctIndex: 0,
          conceptTestedAr: 'خاصية المرور المتسلسل في BST',
          conceptTestedEn: 'In-Order Traversal Property',
          explanationAr: 'المرور المتسلسل يزور اليسار (< الجذر) ثم الجذر ثم اليمين (> الجذر)، مما يضمن الترتيب التصاعدي.',
          explanationEn: 'In-order visits left-root-right, naturally yielding ascending sorted order.',
          difficulty: 'easy'
        },
        {
          id: 'qcs2-2',
          textAr: 'أي من التعقيدات الزمنية التالية يعتبر الأسرع والأكثر كفاءة مع نمو حجم المدخلات n؟',
          textEn: 'Which of the following Big-O complexities is the fastest as input size n grows?',
          optionsAr: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
          optionsEn: ['O(1)', 'O(log n)', 'O(n)', 'O(n²)'],
          correctIndex: 0,
          conceptTestedAr: 'ترتيب كفاءة Big-O',
          conceptTestedEn: 'Big-O Efficiency Ranking',
          explanationAr: 'الزمن الثابت O(1) هو الأسرع على الإطلاق لأن زمن التنفيذ لا يتأثر إطلاقاً بحجم البيانات n.',
          explanationEn: 'O(1) constant time does not scale with n and is the fastest complexity.',
          difficulty: 'easy'
        },
        {
          id: 'qcs2-3',
          textAr: 'هيكل البيانات الذي يعمل بمبدأ (ما يدخل أولاً يخرج أولاً FIFO - First In First Out) هو:',
          textEn: 'The data structure operating under the First In First Out (FIFO) principle is:',
          optionsAr: ['الطابور (Queue)', 'المكدس (Stack)', 'شجرة البحث الثنائية (BST)', 'الرسم البياني (Graph)'],
          optionsEn: ['Queue', 'Stack', 'Binary Search Tree', 'Graph'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الطابور FIFO',
          conceptTestedEn: 'Queue FIFO Concept',
          explanationAr: 'الطابور Queue يدخل العناصر من الخلف ويخرجها من الأمام وفق مبدأ FIFO.',
          explanationEn: 'A Queue enqueues at back and dequeues at front (FIFO).',
          difficulty: 'easy'
        },
        {
          id: 'qcs2-4',
          textAr: 'إذا كانت شجرة البحث الثنائية غير متوازنة ومنحرفة كلياً نحو اليمين (Degenerate Tree)، فإن زمن البحث يتحول من O(log n) إلى:',
          textEn: 'If a BST becomes completely skewed and unbalanced (degenerate), search time degrades to:',
          optionsAr: ['O(n)', 'O(1)', 'O(n²)', 'O(n log n)'],
          optionsEn: ['O(n)', 'O(1)', 'O(n²)', 'O(n log n)'],
          correctIndex: 0,
          conceptTestedAr: 'أسوأ حالة في شجرة البحث الثنائية',
          conceptTestedEn: 'Worst-case BST Degeneration',
          explanationAr: 'الشجرة المنحطة تشبه القائمة المترابطة الخطية، وبالتالي يتطلب البحث فحص جميع العناصر O(n).',
          explanationEn: 'A degenerate tree acts like a linked list, requiring linear O(n) traversal.',
          difficulty: 'medium'
        }
      ]
    }
  }
];
