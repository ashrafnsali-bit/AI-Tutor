import type { Lecture } from '../types';

// ============================================================================
// REPUBLIC OF SUDAN - MINISTRY OF EDUCATION - BAKHT AL-RUDA
// جمهورية السودان - وزارة التربية والتعليم
// المركز القومي للمناهج والبحث التربوي - بخت الرضا
// كتاب العلوم الطبيعية - الصف السادس الابتدائي - الطبعة الثانية ٢٠٢٣م
// ============================================================================

export const SUDAN_PRIMARY_SCIENCE_G6_LECTURES: Lecture[] = [
  // ── الوحدة الأولى: جسم الإنسان (جهاز دوران الدم وجهاز الإخراج) ──
  {
    id: 'sd-p6-sci-1',
    order: 1,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الأولى: جسم الإنسان',
    unitTitleEn: 'Unit 1: The Human Body',
    lessonNumberAr: 'الدرس الأول والثاني: جهازا الدوران والإخراج',
    lessonNumberEn: 'Lessons 1 & 2: Circulatory & Excretory Systems',
    titleAr: 'المحاضرة 1: جهاز دوران الدم وجهاز الإخراج في جسم الإنسان',
    titleEn: 'Lecture 1: The Circulatory & Excretory Systems in the Human Body',
    subtitleAr: 'مكونات القلب والأوعية الدموية والدم، والدورة الدموية الكبرى والصغرى، وتركيب الجهاز البولي والجلد والرئتين للمحافظة على الصحة',
    subtitleEn: 'Circulatory and excretory organs, systemic and pulmonary circulations, renal and skin excretion, and vital health guidelines.',
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'هل تساءلت يوماً وأنت تركض في فناء المدرسة كيف يصل الغذاء والأكسجين إلى عضلاتك في أجزاء من الثانية؟ وما الذي يحدث للفضلات والمواد السامة التي تنتجها خلايا جسمك باستمرار؟ داخل جسم الإنسان شبكة نقل وتصفية تفوق في دقتها أكبر شبكات القطارات والمصافي المائية في العالم! من القلب الذي ينبض دون توقف طيلة الحياة، إلى الكليتين اللتين ترشحان الدم قطرة قطرة لحمايتنا من التسمم.',
    warmupHookEn: 'How does food and oxygen reach every cell in your body in fractions of a second, and how are toxic wastes safely eliminated? Inside the human body lies a transportation and filtration network more precise than the largest infrastructure systems.',
    learningOutcomesAr: [
      'أن يعدد التلميذ مكونات جهاز دوران الدم (القلب، الأوعية الدموية، الدم) ووظيفة كل منها.',
      'أن يشرح آلية دوران الدم مفرقاً بين الدورة الدموية الكبرى (هارفي) والدورة الدموية الصغرى (ابن النفيس).',
      'أن يوضح تركيب الدم (كريات الدم الحمراء، البيضاء، الصفائح الدموية، البلازما).',
      'أن يحدد أعضاء جهاز الإخراج (الجهاز البولي، الجلد، الرئتين) ودور الكليتين كمصفاة للدم.',
      'أن يطبق إرشادات وقاية وصحة جهاز الدوران والجلد والجهاز الإخراجي.'
    ],
    learningOutcomesEn: [
      'List the components of the circulatory system (heart, vessels, blood) and their functions.',
      'Explain systemic (William Harvey) and pulmonary (Ibn al-Nafis) circulations.',
      'Describe blood constituents: RBCs, WBCs, platelets, and plasma.',
      'Identify excretory organs (urinary system, skin, lungs) and kidney filtration.',
      'Apply health and hygiene rules to safeguard circulatory and excretory systems.'
    ],
    keyConceptsAr: [
      'حجرات القلب الأربع: الأذينان والبطينان',
      'الشرايين والأوردة والشعيرات الدموية وتبادل الغازات',
      'الدورة الدموية الكبرى (ويليام هارفي) والدورة الصغرى (ابن النفيس)',
      'مكونات الدم ووظيفة المناعة ونقل الأكسجين وتجلط الجروح',
      'الكليتان كمصفاة بولية وطبقات الجلد (البشرة والأدمة)'
    ],
    keyConceptsEn: [
      'Four heart chambers: atria and ventricles',
      'Arteries, veins, and capillary gas exchange',
      'Systemic circulation (Harvey) and pulmonary circulation (Ibn al-Nafis)',
      'Blood constituents: oxygen transport, immunity, and clotting',
      'Kidneys as blood filters and skin layers (epidermis and dermis)'
    ],
    vocabulary: [
      {
        termAr: 'القلب (Heart)',
        termEn: 'Heart',
        definitionAr: 'عضو عضلي مجوف يتكون من أربع حجرات: أذينان في الأعلى وبطينان في الأسفل، وظيفته ضخ الدم إلى جميع أجزاء الجسم.'
      },
      {
        termAr: 'الدورة الدموية الصغرى (Pulmonary Circulation)',
        termEn: 'Pulmonary Circulation',
        definitionAr: 'حركة الدم بين القلب والرئتين للتخلص من ثاني أكسيد الكربون والتزود بالأكسجين، مكتشفها العالم المسلم ابن النفيس.'
      },
      {
        termAr: 'الدورة الدموية الكبرى (Systemic Circulation)',
        termEn: 'Systemic Circulation',
        definitionAr: 'حركة الدم المؤكسج من القلب عبر الشريان الأبهر إلى جميع خلايا الجسم ثم عودته محملاً بثاني أكسيد الكربون، مكتشفها ويليام هارفي.'
      },
      {
        termAr: 'الصفائح الدموية (Platelets)',
        termEn: 'Platelets',
        definitionAr: 'أجزاء خلوية في الدم تعمل على سد الجروح وتجلط الدم عند حدوث قطع في الجلد لمنع النزيف.'
      },
      {
        termAr: 'الكليتان (Kidneys)',
        termEn: 'Kidneys',
        definitionAr: 'عضوان يشبهان حبة اللوبيا، يعملان كمصفاة تفصل المادة البولية السامة والأملاح الزائدة والماء عن الدم لتخرج في شكل بول.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الأولى من كتاب العلوم الطبيعية للصف السادس (بخت الرضا): يتكامل جهاز دوران الدم (القلب والأوعية الدموية والدم) مع جهاز الإخراج (الكليتان والجلد والرئتان) لتزويد الجسم بالغذاء والأكسجين عبر دورتين رئيسيتين وتخليصه من المواد السامة كالبول والعرق وثاني أكسيد الكربون لضمان صحة وسلامة الإنسان.',
    summaryEn: 'Summary of Unit 1: The circulatory system integrates with the excretory system to supply oxygen and nutrients while clearing metabolic toxic wastes.',
    sections: [
      {
        titleAr: '1. جهاز دوران الدم: القلب والأوعية الدموية والدم',
        titleEn: '1. The Circulatory System: Heart, Vessels, and Blood',
        contentAr: `الفكرة الرئيسة: يحمل الدم الغذاء والماء والأكسجين عبر الجهاز الدوري إلى أعضاء الجسم المختلفة.

يتكون جهاز دوران الدم من ثلاثة أجزاء رئيسية:
1. **القلب:** عضو عضلي مجوف بحجم قبضة اليد تقريباً، يقع في القفص الصدري مائلاً قليلاً لليسار. ينقسم من الداخل إلى أربع حجرات:
   - **حجرتان علويتان:** الأذين الأيمن والأذين الأيسر (تستقبلان الدم).
   - **حجرتان سفليتان:** البطين الأيمن والبطين الأيسر (تضخان الدم).
   - **وظيفة القلب:** الانقباض والانبساط لضخ الدم في الأوعية الدموية إلى جميع أجزاء الجسم.

2. **الأوعية الدموية:** شبكة أنابيب دقيقة يدور فيها الدم في اتجاه محدد، وهي ثلاثة أنواع:
   - **الشرايين:** أوعية سميكة الجدران تنقل الدم المؤكسج من القلب إلى جميع أنحاء الجسم (مثل الشريان الأورطي/الأبهر).
   - **الأوردة:** تنقل الدم المحمل بثاني أكسيد الكربون من أجزاء الجسم عائداً إلى القلب (مثل الوريد الأجوف، باستثناء الوريد الرئوي).
   - **الشعيرات الدموية:** أوعية دقيقة جداً تقع عند نهايات الشرايين وبدايات الأوردة، ومن خلال جدرانها الرقيقة يتم تبادل الغازات والمواد الغذائية مع الخلايا.

3. **الدم وتركيبه:** سائل أحمر لزج يتكون من أربعة مكونات أساسية:
   - **كريات الدم الحمراء:** تحتوي على مادة الهيموجلوبين وتحمل غاز الأكسجين من الرئتين إلى خلايا الجسم.
   - **كريات الدم البيضاء:** خط الدفاع الأول والجيش الحامي للجسم؛ تهاجم الجراثيم والميكروبات وتقي من الأمراض.
   - **الصفائح الدموية:** قطع خلوية صغيرة تسد الجروح وتساعد على تخثر وتجلط الدم لمنع النزف عند حدوث جرح.
   - **البلازما:** السائل الأصفر الذي تسبح فيه كل مكونات الدم، وينقل المواد الغذائية الذائبة والفضلات.`,
        contentEn: 'The circulatory system consists of the four-chambered heart, blood vessels (arteries, veins, capillaries), and blood composed of red cells, white cells, platelets, and plasma.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: تتبع مسار قطرة دم عبر الدورة الصغرى والكبرى',
          titleEn: 'Interactive Example 1: Tracing Blood Flow in Pulmonic & Systemic Loops',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الدورة الصغرى (الرئوية): تخرج قطرة الدم المحملة بـ CO2 من البطين الأيمن عبر الشريان الرئوي إلى الرئتين.',
              textEn: 'Deoxygenated blood leaves right ventricle to lungs via pulmonary artery.'
            },
            {
              stepNumber: 2,
              textAr: 'في الرئتين: تتخلص قطرة الدم من CO2 وتتزود بالأكسجين، ثم تعود عبر الأوردة الرئوية إلى الأذين الأيسر بالقلب (مكتشفها العالم ابن النفيس).',
              textEn: 'In lungs, CO2 is exchanged for O2, returning to left atrium (discovered by Ibn al-Nafis).'
            },
            {
              stepNumber: 3,
              textAr: 'الدورة الكبرى (الجهازية): يضخ البطين الأيسر الدم المؤكسج عبر الشريان الأبهر إلى جميع أعضاء الجسم، وتعود عبر الأوردة للأذين الأيمن (مكتشفها ويليام هارفي).',
              textEn: 'Oxygenated blood pumps through the aorta to all organs and returns deoxygenated to right atrium (discovered by William Harvey).'
            }
          ],
          takeawayAr: 'العالم المسلم ابن النفيس اكتشف الدورة الدموية الصغرى، بينما أثبت العالم ويليام هارفي الدورة الدموية الكبرى.',
          takeawayEn: 'Ibn al-Nafis discovered pulmonary circulation, while William Harvey established systemic circulation.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-1',
          questionAr: 'ما هو المكون الدموي المسؤول عن تكوين الجلطة وسد الجروح عند إصابة جلد الإنسان؟',
          questionEn: 'Which blood component is responsible for clotting and sealing wounds?',
          optionsAr: ['الصفائح الدموية', 'كريات الدم الحمراء', 'كريات الدم البيضاء', 'البلازما'],
          optionsEn: ['Platelets', 'Red blood cells', 'White blood cells', 'Plasma'],
          correctIndex: 0,
          explanationAr: 'الصفائح الدموية هي المسؤولة عن سد الجروح ومنع استمرار النزيف عبر تكوين خثرة دموية واقية.',
          explanationEn: 'Platelets aggregate at injury sites to form clots and stop bleeding.'
        }
      },
      {
        titleAr: '2. جهاز الإخراج: الجهاز البولي والجلد والرئتان وإرشادات الصحة',
        titleEn: '2. The Excretory System: Urinary Organs, Skin, Lungs, and Health Hygiene',
        contentAr: `الفكرة الرئيسة: البول والعرق وثاني أكسيد الكربون مواد سامة وضارة تتكون داخل الجسم ويتم التخلص منها بعملية الإخراج.

يتكون جهاز الإخراج من ثلاثة أعضاء وأجهزة متخصصة:
1. **الجهاز البولي:**
   - **التركيب:** الكليتان، الحالبان، المثانة البولية، والقناة البولية.
   - **الوظيفة:** تقوم الكليتان بوظيفة "المصفاة" الطبيعية للدم؛ حيث تفصلان المادة البولية (اليوريا السامة)، والأملاح الزائدة، والماء الفائض عن حاجة الجسم، وتجمعها في الحالبين لتصل إلى المثانة وتخرج في شكل بول.

2. **الجلد:**
   - **التركيب:** يتكون من طبقتين:
     - **البشرة:** الطبقة الخارجية الرقيقة التي تحمي الجسم.
     - **الأدمة:** الطبقة الداخلية الأكثر سمكاً، وتحتوي على الغدد العرقية والأوعية الدموية ونهايات الأعصاب الحسية.
   - **الوظائف الأساسية للجلد:**
     1. إخراج العرق المحتوي على أملاح وماء، مما يخفض درجة حرارة الجسم صيفاً عبر التبخر.
     2. حماية الأعضاء الداخلية من الميكروبات وأشعة الشمس الضارة والغبار.
     3. الإحساس بالمؤثرات الخارجية (الحرارة، البرودة، الخشونة، النعومة) لأنه أكبر عضو حسي في الجسم.

3. **الرئتان:**
   - تخرجان مع هواء الزفير غاز ثاني أكسيد الكربون وبخار الماء الضارين بخلايا الجسم.

**إرشادات المحافظة على صحة جهازي الدوران والإخراج:**
- ممارسة الرياضة لتنشيط عضلة القلب وتوسيع الأوعية.
- تناول الغذاء المتوازن وشرب كميات كافية من الماء يومياً لحماية الكليتين.
- النظافة الشخصية والاستحمام بالماء والصابون لتفتيح مسام الجلد ومنع تراكم الجراثيم.
- تطهير الجروح فوراً بالماء والصابون والمطهرات لمنع دخول الميكروبات إلى مجرى الدم.
- تجنب التعرض المباشر لأشعة الشمس الحارقة لفترات طويلة.`,
        contentEn: 'The excretory system removes toxins via the kidneys (urine), skin (sweat and temperature regulation), and lungs (exhaled CO2 and water vapor).',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: مقارنة وظيفة الكلية بوظيفة الجلد في إخراج الفضلات',
          titleEn: 'Interactive Example 2: Comparing Kidney and Skin Excretory Functions',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الكليتان: ترشحان الدم باستمرار لإخراج حمض البول واليوريا والأملاح الزائدة مذابة في البول.',
              textEn: 'Kidneys filter blood to eliminate toxic urea and excess salts in urine.'
            },
            {
              stepNumber: 2,
              textAr: 'الجلد: يفرز العرق المحتوي على أملاح وماء عبر الغدد العرقية في الأدمة، مما ينظم حرارة الجسم.',
              textEn: 'Skin glands secrete sweat containing water and salts, regulating body temperature.'
            },
            {
              stepNumber: 3,
              textAr: 'التكامل: شرب الماء النظيف يساعد الكليتين والجلد على أداء وظائفهما الحيوية دون إجهاد.',
              textEn: 'Drinking sufficient water supports both renal filtration and perspiration.'
            }
          ],
          takeawayAr: 'الكليتان هما العضو الرئيسي في الجهاز البولي لتنقية الدم، والجلد أكبر عضو حسي وإخراجي لحماية الجسم.',
          takeawayEn: 'Kidneys serve as the primary blood purifier, while skin provides excretion, sensory detection, and thermal defense.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-2',
          questionAr: 'أين تقع الغدد العرقية التي تفرز العرق في جلد الإنسان؟',
          questionEn: 'In which layer of human skin are sweat glands located?',
          optionsAr: ['طبقة الأدمة الداخلية', 'طبقة البشرة الخارجية', 'فوق سطح الجلد مباشرة', 'في الغضاريف'],
          optionsEn: ['The inner dermis layer', 'The outer epidermis layer', 'Directly on the surface', 'In cartilage'],
          correctIndex: 0,
          explanationAr: 'توجد الغدد العرقية وبصيلات الشعر والأوعية الدموية في طبقة الأدمة (الطبقة الداخلية للجلد).',
          explanationEn: 'Sweat glands and blood vessels reside in the dermis layer of the skin.'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-1-assess',
      titleAr: 'اختبار تقييم الوحدة الأولى: جهاز دوران الدم وجهاز الإخراج (منهج بخت الرضا)',
      titleEn: 'Unit 1 Assessment: Circulatory and Excretory Systems (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-q1',
          textAr: 'ما هي وظيفة كريات الدم الحمراء في جسم الإنسان؟',
          textEn: 'What is the function of red blood cells in the human body?',
          optionsAr: ['نقل الأكسجين إلى خلايا الجسم', 'مقاومة الجراثيم والأمراض', 'تجلط الدم وسد الجروح', 'إفراز العرق والبول'],
          optionsEn: ['Transport oxygen to body cells', 'Fight germs and diseases', 'Clot blood and seal wounds', 'Secrete sweat and urine'],
          correctIndex: 0,
          conceptTestedAr: 'وظائف مكونات الدم (كريات الدم الحمراء)',
          conceptTestedEn: 'Functions of blood components (RBCs)',
          explanationAr: 'تحتوي كريات الدم الحمراء على الهيموجلوبين الذي يرتبط بالأكسجين في الرئتين وينقله لجميع خلايا الجسم.',
          explanationEn: 'RBCs contain hemoglobin which binds oxygen and delivers it throughout the body.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-q2',
          textAr: 'من هو العالم المسلم الذي اكتشف الدورة الدموية الصغرى (الرئوية)؟',
          textEn: 'Which Muslim scientist discovered the pulmonary circulation?',
          optionsAr: ['ابن النفيس', 'ويليام هارفي', 'ابن سينا', 'الرازي'],
          optionsEn: ['Ibn al-Nafis', 'William Harvey', 'Ibn Sina', 'Al-Razi'],
          correctIndex: 0,
          conceptTestedAr: 'تاريخ اكتشاف الدورة الدموية الصغرى',
          conceptTestedEn: 'Discovery of pulmonary circulation',
          explanationAr: 'العالم العربي المسلم ابن النفيس هو أول من وصف الدورة الدموية الصغرى بدقة علمية بالغة.',
          explanationEn: 'The Arab Muslim polymath Ibn al-Nafis was the first to accurately describe pulmonary circulation.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-q3',
          textAr: 'أي من الأوعية الدموية التالية ينقل الدم من أجزاء الجسم المختلفة عائداً إلى القلب؟',
          textEn: 'Which blood vessels carry blood back from the body organs to the heart?',
          optionsAr: ['الأوردة', 'الشرايين', 'الشريان الأبهر', 'الشريان الرئوي فقط'],
          optionsEn: ['Veins', 'Arteries', 'Aorta', 'Pulmonary artery only'],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين الشرايين والأوردة',
          conceptTestedEn: 'Distinction between arteries and veins',
          explanationAr: 'الأوردة تنقل الدم من أنسجة الجسم باتجاه القلب، بينما الشرايين تنقل الدم من القلب باتجاه الجسم.',
          explanationEn: 'Veins return blood to the heart, while arteries carry blood away from the heart.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-q4',
          textAr: 'ما هي الوظيفة الأساسية للكليتين في الجهاز البولي؟',
          textEn: 'What is the primary function of the kidneys in the urinary system?',
          optionsAr: [
            'العمل كمصفاة تفصل البول والأملاح والماء الزائد عن الدم',
            'ضخ الدم إلى الشرايين والأوردة',
            'إنتاج كريات الدم البيضاء والحمراء',
            'إفراز العرق وتبريد حرارة الجسم صيفاً'
          ],
          optionsEn: [
            'Filter toxic urine, excess salts, and water from blood',
            'Pump blood to arteries and veins',
            'Produce white and red blood cells',
            'Secrete sweat and cool the body in summer'
          ],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الكليتين كمصفاة طبيعية للدم',
          conceptTestedEn: 'Kidney filtration role',
          explanationAr: 'تعمل الكليتان مثل مصفاة دقيقة تفصل المواد السامة وحمض البول والأملاح الزائدة عن تيار الدم لإخراجها في البول.',
          explanationEn: 'Kidneys act as biological filters removing toxic nitrogenous waste and excess fluids.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-q5',
          textAr: 'يتكون جلد الإنسان من طبقتين، ما هما؟',
          textEn: 'Human skin consists of two layers. What are they?',
          optionsAr: [
            'البشرة (الخارجية) والأدمة (الداخلية)',
            'الغشاء البلازمي والجدار الخلوي',
            'الطبقة المخاطية والطبقة الدهنية فقط',
            'العنق والتخت'
          ],
          optionsEn: [
            'Epidermis (outer) and dermis (inner)',
            'Plasma membrane and cell wall',
            'Mucous and fatty layers only',
            'Pedicel and receptacle'
          ],
          correctIndex: 0,
          conceptTestedAr: 'طبقات الجلد ووظائفها',
          conceptTestedEn: 'Skin anatomical layers',
          explanationAr: 'يتكون الجلد من البشرة (الطبقة السطحية الواقية) والأدمة (الطبقة الداخلية الغنية بالغدد العرقية والأعصاب والأوعية).',
          explanationEn: 'The skin consists of an outer protective epidermis and an inner vascularized dermis.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── الوحدة الثانية: التكاثر والنمو في الكائنات الحية ──
  {
    id: 'sd-p6-sci-2',
    order: 2,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثانية: التكاثر والنمو في الكائنات الحية',
    unitTitleEn: 'Unit 2: Reproduction and Growth in Living Organisms',
    lessonNumberAr: 'الدروس 1 إلى 11: التكاثر في النبات والحيوان',
    lessonNumberEn: 'Lessons 1 to 11: Reproduction in Plants & Animals',
    titleAr: 'المحاضرة 2: التكاثر والنمو في النباتات والحيوانات',
    titleEn: 'Lecture 2: Reproduction and Development in Plants and Animals',
    subtitleAr: 'تركيب الزهرة، التلقيح والإخصاب، الإنبات، التكاثر الخضري الطبيعي والاصطناعي، ومقارنة التكاثر في الأسماك والبرمائيات والزواحف والطيور والحشرات والثدييات',
    subtitleEn: 'Floral structure, pollination, fertilization, germination, vegetative propagation, and animal life cycles across major vertebrates and insects.',
    durationMinutes: 45,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'انظر إلى حبة الفول الصغيرة الجافة في مطبخ منزلك، أو بذرة المانجو أو النخيل في أرض السودان الطيبة! كيف تتحول حبة صغيرة لا حراك فيها إلى شجرة باسقة تنتج أطناناً من الثمار؟ وكيف تضع الضفدعة بيضها في ماء جدول النيل ليخرج منه كائن يسبح بذيل كأنه سمكة صغيرة يسمى (أبو ذنيبة) قبل أن يصبح ضفدعاً كاملاً؟ إنها معجزة استمرار الحياة والتكاثر التي أودعها الخالق في نباتات وحيوانات كوكبنا!',
    warmupHookEn: 'How does a tiny dry seed sprout into a giant fruiting tree, and how does a tadpole hatch in the Nile waters and transform into an adult frog? Explore the fascinating mechanisms of plant and animal reproduction.',
    learningOutcomesAr: [
      'أن يشرح التلميذ أجزاء الزهرة (العنق، التخت، الكأس، التويج، الطلع، المتاع) وأدوارها التكاثرية.',
      'أن يقارن بين التلقيح الذاتي والخلطي، ويوضح نواتج الإخصاب (المبيض يتحول لثمرة والبويضات لبذور).',
      'أن يحدد عوامل إنبات البذرة الداخلية والخارجية (الماء، الحرارة المناسبة، الأكسجين).',
      'أن يصنف طرائق التكاثر الخضري الطبيعي (درنة، بصلة، رايزوم، ساق جارية، كورمة، فسيلة) والاصطناعي (تعقيل، تطعيم، ترقيد).',
      'أن يقارن بين طرائق التكاثر والإخصاب ودورات الحياة في الفقاريات (الأسماك، البرمائيات، الزواحف، الطيور، الثدييات) والحشرات (تطور ناقص وتام).'
    ],
    learningOutcomesEn: [
      'Detail flower anatomy (calyx, corolla, androecium, gynoecium) and reproductive roles.',
      'Differentiate self vs cross pollination and fertilization outcomes (ovary to fruit, ovule to seed).',
      'State internal and external germination requirements (moisture, temperature, oxygen).',
      'Categorize natural vs artificial vegetative reproduction methods.',
      'Compare reproductive strategies across vertebrates and insect metamorphosis.'
    ],
    keyConceptsAr: [
      'أعضاء التذكير (الطلع والأسدية) وأعضاء التأنيث (المتاع والمبيض) في الزهرة',
      'التلقيح الذاتي والخلطي، وتحول المبيض إلى ثمرة والبويضة إلى بذرة',
      'الإنبات وتكوين البادرة وعوامل الماء والحرارة والأكسجين',
      'التكاثر الخضري الطبيعي (البطاطس، البصل، الزنجبيل، النخيل) والاصطناعي (التطعيم والتعقيل والترقيد)',
      'التطور التام (يرقة وعذراء في الذبابة) والتطور الناقص (حورية في الجراد)، وأبو ذنيبة في الضفادع'
    ],
    keyConceptsEn: [
      'Stamen (androecium) and carpel (gynoecium) in floral reproduction',
      'Self vs cross pollination and transformation of ovary to fruit',
      'Germination factors: moisture, oxygen, and temperature',
      'Natural vs artificial vegetative reproduction',
      'Complete vs incomplete metamorphosis, and tadpole metamorphosis'
    ],
    vocabulary: [
      {
        termAr: 'الطلع والمتاع (Stamen & Pistil)',
        termEn: 'Stamen & Pistil',
        definitionAr: 'الطلع هو عضو التذكير في الزهرة وينتج حبوب اللقاح عبر المتك، بينما المتاع هو عضو التأنيث ويضم المبيض والقلم والميسم.'
      },
      {
        termAr: 'التلقيح (Pollination)',
        termEn: 'Pollination',
        definitionAr: 'انتقال حبوب اللقاح من متك الزهرة إلى ميسمها (ذاتي إذا كان في نفس النبات، وخلطي إذا كان لنبات آخر من نفس النوع).'
      },
      {
        termAr: 'التكاثر الخضري (Vegetative Propagation)',
        termEn: 'Vegetative Propagation',
        definitionAr: 'إنتاج نباتات جديدة من أجزاء نباتية خضرية (جذور، سيقان، أوراق) دون الحاجة للأزهار والبذور.'
      },
      {
        termAr: 'أبو ذنيبة (Tadpole)',
        termEn: 'Tadpole',
        definitionAr: 'الطور اليرقي المائي لصغار البرمائيات (الضفدع) بعد فقس البيض؛ يمتلك ذيلاً وخياشيم للتنفس في الماء قبل تحوله لضفدع يافع.'
      },
      {
        termAr: 'التطور التام والتطور الناقص (Metamorphosis)',
        termEn: 'Metamorphosis',
        definitionAr: 'التطور الناقص يمر بثلاث مراحل (بيضة ← حورية ← حشرة كاملة كالجراد)، بينما التطور التام يمر بأربع مراحل (بيضة ← يرقة ← عذراء ← حشرة كاملة كالذبابة).'
      }
    ],
    summaryAr: 'خلاصة الوحدة الثانية: تضمن استمرارية الكائنات الحية عبر التكاثر الجنسي في النباتات الزهرية (تلقيح وإخصاب وتكوين بذور وثمار)، والتكاثر الخضري الطبيعي والاصطناعي، إلى جانب تكيف الحيوانات بين إخصاب خارجي (كالأسماك والضفادع) وداخلي (كالزواحف والطيور والثدييات الولودة) ومراحل التحول في الحشرات.',
    summaryEn: 'Summary of Unit 2: Detailed mechanisms of plant sexual and vegetative reproduction alongside animal reproductive adaptations and metamorphosis.',
    sections: [
      {
        titleAr: '1. التكاثر في النباتات: الزهرة، التلقيح، الإخصاب، والإنبات والتكاثر الخضري',
        titleEn: '1. Plant Reproduction: Flower Structure, Pollination, Fertilization, and Vegetative Modes',
        contentAr: `**أ - تركيب الزهرة الزهرية:**
1. **العنق:** ساق خضراء قصيرة تصل الزهرة بفرع النبات.
2. **التخت:** جزء منتفخ في قمة العنق يحمل المحيطات الزهرية.
3. **المحيطات الخارجية:**
   - **الكأس:** وريقات خضراء تُسمى (السبلات) تحمي الأجزاء الداخلية للزهرة في طور البرعم.
   - **التويج:** وريقات ملونة ذات رائحة عطرية تُسمى (البتلات) تجذب الحشرات لإتمام التلقيح.
4. **المحيطات الداخلية:**
   - **الطلع (عضو التذكير):** يتكون من الأسدية، وتتكون السداة من خيط رفيع يعلوه المتك الذي ينتج حبوب اللقاح.
   - **المتاع (عضو التأنيث):** يتكون من المبيض (الذي يحتوي على البويضات)، ويعلوه القلم، وينتهي في القمة بالميسم اللزج.

**ب - التلقيح والإخصاب وتكوين الثمرة:**
- **التلقيح:** انتقال حبوب اللقاح من المتك إلى الميسم. وهو نوعان:
  - *تلقيح ذاتي:* انتقال حبوب اللقاح من متك زهرة إلى ميسم نفس الزهرة أو زهرة أخرى على نفس النبات.
  - *تلقيح خلطي:* انتقال حبوب اللقاح من زهرة إلى ميسم زهرة على نبات آخر من نفس النوع (بواسطة الرياح، الحشرات كالنحل، الماء، أو تدخل الإنسان).
- **الإخصاب:** اندماج حبة اللقاح مع البويضة داخل المبيض.
  - *النتيجة بعد الإخصاب:* يذبل التويج والأسدية، وينمو جدار المبيض ويتضخم ليكون **الثمرة**، وتتحول البويضات المخصبة داخله إلى **بذور**.
- **تركيب البذرة:** تتكون من غلاف البذرة الواقي، والغذاء المخزون (الفلقات)، والجنين الحي.
- **عوامل الإنبات:** داخلية (سلامة البذرة وحيويتها)، وخارجية (توفر الماء لتليين الغلاف، ودرجة الحرارة المناسبة، والهواء لتوفير الأكسجين).

**ج - التكاثر الخضري (إنتاج نباتات دون بذور):**
1. **طبيعي:**
   - **الدرنة:** مثل درنات البطاطس.
   - **البصلة:** مثل البصل والثوم.
   - **الرايزوم:** ساق أرضية مثل الزنجبيل والنعناع.
   - **الساق الجارية:** تمتد أفقياً فوق التربة مثل النجيلة والفراولة.
   - **الكورمة:** مثل نبات السعدة.
   - **الفسيلة:** مثل فسائل النخيل والموز.
2. **اصطناعي (بتدخل الإنسان):**
   - **التعقيل:** قطع جزء من الساق وغرسه (مثل الورد، الحناء، وقصب السكر).
   - **التطعيم:** تركيب جزء من نبات مرغوب (الطُعم) على ساق نبات قوي ذي جذور (الأصل) كما في تطعيم البرتقال على اللارنج.
   - **الترقيد:** ثني غصن ودفن جزء منه في التربة حتى يُخرج جذوراً عرضية ثم فصله عن النبات الأم (مثل نبات الفايكس).`,
        contentEn: 'Flowers reproduce via stamens and carpels leading to pollination, fertilization, fruit/seed production, or vegetatively via tubers, runners, cuttings, grafting, and layering.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: تمييز التكاثر في محاصيل زراعية سودانية',
          titleEn: 'Interactive Example 1: Identifying Propagation in Sudanese Crops',
          steps: [
            {
              stepNumber: 1,
              textAr: 'النخيل في شمال السودان: يُفضل إكثاره بالفسائل (تكاثر خضري طبيعي) للحصول على نفس سلالة التمر الممتازة بسرعة.',
              textEn: 'Date palms are propagated via offshoots (vegetative) to maintain cultivar traits.'
            },
            {
              stepNumber: 2,
              textAr: 'قصب السكر في مزارع كنانة وعسلاية والجنيد: يُزرع عن طريق التعقيل (أجزاء من الساق تحتوي على براعم خضرية).',
              textEn: 'Sugarcane in Kenana and Guneid is propagated by stem cuttings.'
            },
            {
              stepNumber: 3,
              textAr: 'البرتقال والمانجو: يتم تطعيم الأصناف الجيدة على أصول محلية قوية ومقاومة للأمراض.',
              textEn: 'Citrus is grafted onto hardy rootstocks to resist soil pathogens.'
            }
          ],
          takeawayAr: 'التكاثر الخضري يوفر نباتات متطابقة تماماً مع النبات الأم وأسرع في الإثمار من زراعة البذور.',
          takeawayEn: 'Vegetative propagation yields clones true to the parent plant with faster yields than seeds.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-3',
          questionAr: 'ماذا ينتج عن نمو وتضخم مبيض الزهرة بعد إتمام عملية الإخصاب؟',
          questionEn: 'What does the flower ovary develop into after fertilization?',
          optionsAr: ['الثمرة', 'البذرة', 'البتلة', 'الكأس'],
          optionsEn: ['The fruit', 'The seed', 'The petal', 'The calyx'],
          correctIndex: 0,
          explanationAr: 'بعد الإخصاب ينمو المبيض ليكون الثمرة، بينما تتحول البويضات المخصبة داخل المبيض إلى بذور.',
          explanationEn: 'The ovary develops into the fruit protecting the seeds derived from fertilized ovules.'
        }
      },
      {
        titleAr: '2. التكاثر والنمو في الحيوانات: مقارنة الفقاريات ودورات حياة الحشرات',
        titleEn: '2. Animal Reproduction: Vertebrate Comparisons and Insect Life Cycles',
        contentAr: `**المفاهيم الأساسية:**
- **النمو:** زيادة في كتلة وحجم الكائن الحي نتيجة زيادة عدد وحجم خلاياه.
- **التكاثر:** قدرة الكائن الحي على إنتاج أفراد جديدة من نفس نوعه لحفظه من الانقراض.
- **دورة الحياة:** تتابع المراحل المختلفة التي يمر بها الكائن الحي منذ تكوين الجنين وحتى اكتمال نموه وبلوغه.

**جدول مقارنة التكاثر في الكائنات الحية الحيوانية:**

1. **الأسماك (مثل سمك البلطي/الكأس النيلي):**
   - نوع الإخصاب: **خارجي** (تضع الأنثى البيض في الماء ويصب الذكر عليه الحيوانات المنوية).
   - طريقة التكاثر: **بيوضة**.
   - رعاية الصغار: بعض الأسماك تحفظ البيض المخصب في بلعومها وخياشيمها لحمايته حتى يفقس.

2. **البرمائيات (الضفدع):**
   - نوع الإخصاب: **خارجي** في الماء.
   - طريقة التكاثر: **بيوضة**.
   - دورة الحياة: يفقس البيض عن كائن يرق مائي يُسمى **أبو ذنيبة**؛ يتنفس بالخياشيم وله ذيل للسباحة، ثم تختفي خياشيمه وذيله تدريجياً وتنمو له أطراف ورئتان ليتحول لضفدع كامل يعيش على اليابسة وبالقرب من الماء.

3. **الزواحف (السحلية والتمساح):**
   - نوع الإخصاب: **داخلي**.
   - طريقة التكاثر: **بيوضة** (تضع بيضاً ذا قشرة جلدية وتدفنه في الرمال لتستفيد من حرارة الشمس).
   - طبيعة الصغار: يخرج الصغير شبيهاً تماماً بوالديه.

4. **الطيور (الحمام والدجاج):**
   - نوع الإخصاب: **داخلي**.
   - طريقة التكاثر: **بيوضة** (بيض ذو قشرة كلسية صلبة).
   - رعاية الصغار: تحضن الأم البيض بحرارة جسمها، وتخرج فراخ غير مريشة ترعاها وتطعمها حتى تكبر.

5. **الحشرات (نوعان من التحول والنمو):**
   - الإخصاب: **داخلي**، وجميعها كائنات بيوضة.
   - **أ) التطور الناقص (مثل الجراد وصراصير الحقل):** يمر بثلاث مراحل:
     **بيضة ← حورية (عتاب) ← حشرة كاملة**.
     (الحورية تشبه الحشرة الكاملة لكنها أصغر حجماً وأجنحتها غير مكتملة).
   - **ب) التطور التام (مثل الذبابة المنزلية والبعوض والفراش):** يمر بأربع مراحل متمايزة:
     **بيضة ← يرقة (دودة) ← عذراء (داخل شرنقة) ← حشرة يافعة كاملة**.

6. **الثدييات (مثل الأرنب والأبقار والجمال):**
   - نوع الإخصاب: **داخلي**.
   - طريقة التكاثر: **ولودة** (تنمو الأجنة وتتغذى داخل رحم الأم عبر الحبل السري).
   - رعاية الصغار: ترضع أمهاتها اللبن من أثدائها وتوفر لها الحماية والرعاية لفترات طويلة.`,
        contentEn: 'Vertebrates exhibit external fertilization (fish, frogs) or internal (reptiles, birds, mammals), while insects undergo incomplete (grasshopper) or complete (housefly) metamorphosis.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: مقارنة دورة حياة الجراد ودورة حياة الذبابة',
          titleEn: 'Interactive Example 2: Comparing Grasshopper vs Housefly Metamorphosis',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الجراد (تطور ناقص): تفقس البيضة عن "حورية" تشبه الجرادة الكبيرة لكن دون أجنحة تامة، وتنسلخ عدة مرات لتصير كاملة.',
              textEn: 'Grasshoppers undergo incomplete metamorphosis: egg -> nymph -> adult.'
            },
            {
              stepNumber: 2,
              textAr: 'الذبابة (تطور تام): تفقس البيضة عن "يرقة" دودية بيضاء لا تشبه الذبابة، ثم تتحول إلى "عذراء" ساكنة، ثم تخرج الذبابة ذات الجناحين.',
              textEn: 'Houseflies undergo complete metamorphosis: egg -> larva -> pupa -> adult.'
            },
            {
              stepNumber: 3,
              textAr: 'الوعي الصحي: معرفة أطوار البعوض والذباب تساعد وزارة الصحة والمواطنين في مكافحة نواقل الملاريا في طور اليرقة بالماء الراكد.',
              textEn: 'Understanding vector stages helps combat malaria vectors in standing water.'
            }
          ],
          takeawayAr: 'التطور الناقص يحتوي 3 مراحل (دون طور العذراء)، بينما التطور التام يحتوي 4 مراحل يمر فيها بطور العذراء واليرقة.',
          takeawayEn: 'Incomplete metamorphosis lacks a pupal stage, unlike complete metamorphosis which has distinct larva and pupa.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-4',
          questionAr: 'ما هو الترتيب الصحيح لمراحل التطور التام في حشرة الذبابة؟',
          questionEn: 'What is the correct order of complete metamorphosis stages in a housefly?',
          optionsAr: [
            'بيضة ← يرقة ← عذراء ← حشرة كاملة',
            'بيضة ← حورية ← حشرة كاملة',
            'بيضة ← عذراء ← يرقة ← حشرة كاملة',
            'يرقة ← بيضة ← حشرة كاملة'
          ],
          optionsEn: [
            'Egg -> Larva -> Pupa -> Adult',
            'Egg -> Nymph -> Adult',
            'Egg -> Pupa -> Larva -> Adult',
            'Larva -> Egg -> Adult'
          ],
          correctIndex: 0,
          explanationAr: 'التطور التام في الذباب والبعوض يمر بأربع مراحل بالترتيب: بيضة ثم يرقة ثم عذراء ثم حشرة كاملة.',
          explanationEn: 'Complete metamorphosis sequentially progresses through egg, larva, pupa, and adult.'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-2-assess',
      titleAr: 'اختبار تقييم الوحدة الثانية: التكاثر والنمو في الكائنات الحية (منهج بخت الرضا)',
      titleEn: 'Unit 2 Assessment: Reproduction & Growth (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-u2-q1',
          textAr: 'ما هو عضو التذكير في الزهرة الذي يقوم بإنتاج حبوب اللقاح؟',
          textEn: 'Which floral organ produces pollen grains?',
          optionsAr: ['الطلع (الأسدية)', 'المتاع (المبيض)', 'التويج (البتلات)', 'الكأس (السبلات)'],
          optionsEn: ['Stamen (Androecium)', 'Carpel (Gynoecium)', 'Petal (Corolla)', 'Sepal (Calyx)'],
          correctIndex: 0,
          conceptTestedAr: 'أعضاء التذكير في الزهرة',
          conceptTestedEn: 'Male reproductive floral organ',
          explanationAr: 'الطلع هو عضو التذكير ويتكون من أسدية تحوي متكاً ينتج حبوب اللقاح.',
          explanationEn: 'The androecium composed of stamens produces pollen grains in its anthers.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u2-q2',
          textAr: 'أي من النباتات التالية يتكاثر خضرياً عن طريق (الدرنة)؟',
          textEn: 'Which plant reproduces vegetatively using tubers?',
          optionsAr: ['البطاطس', 'البصل', 'الزنجبيل', 'النخيل'],
          optionsEn: ['Potato', 'Onion', 'Ginger', 'Date palm'],
          correctIndex: 0,
          conceptTestedAr: 'طرائق التكاثر الخضري الطبيعي (الدرنات)',
          conceptTestedEn: 'Natural vegetative propagation (tubers)',
          explanationAr: 'البطاطس تتكاثر بالدرنات، بينما البصل بالأبصال، والزنجبيل بالرايزومات، والنخيل بالفسائل.',
          explanationEn: 'Potatoes propagate via stem tubers containing dormant eyes/buds.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u2-q3',
          textAr: 'يتميز الضفدع في مرحلة صغاره بعد فقس البيض بكائن مائي يتنفس بالخياشيم وله ذيل يُسمى:',
          textEn: 'The aquatic larval stage of a frog breathing with gills and swimming with a tail is called:',
          optionsAr: ['أبو ذنيبة', 'الحورية', 'العذراء', 'اليرقة الدودية'],
          optionsEn: ['Tadpole (Abu Dhunaiba)', 'Nymph', 'Pupa', 'Worm larva'],
          correctIndex: 0,
          conceptTestedAr: 'دورة حياة البرمائيات (أبو ذنيبة)',
          conceptTestedEn: 'Amphibian life cycle (tadpole)',
          explanationAr: 'أبو ذنيبة هو الطور المائي ليرقة الضفدع ويتنفس بالخياشيم قبل تحوله لضفدع يتنفس بالرئتين والجلد.',
          explanationEn: 'The tadpole is the gilled, tailed aquatic larva of the frog.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-u2-q4',
          textAr: 'ما الفرق بين التطور في الجراد والتطور في الذبابة؟',
          textEn: 'What is the key difference between grasshopper and housefly metamorphosis?',
          optionsAr: [
            'الجراد تطوره ناقص يمر بطور الحورية، بينما الذبابة تطورها تام يمر باليرقة والعذراء',
            'الجراد يلد صغاراً بينما الذبابة تبيض',
            'الذبابة تطورها ناقص والجراد تطوره تام',
            'لا يوجد أي فرق بينهما'
          ],
          optionsEn: [
            'Grasshopper has incomplete (nymph) while housefly has complete (larva & pupa)',
            'Grasshopper gives live birth while fly lays eggs',
            'Fly has incomplete while grasshopper has complete',
            'No difference at all'
          ],
          correctIndex: 0,
          conceptTestedAr: 'المقارنة بين التطور التام والناقص في الحشرات',
          conceptTestedEn: 'Complete vs incomplete insect metamorphosis',
          explanationAr: 'الجراد يمر بثلاث مراحل (بيضة - حورية - كاملة) كتطور ناقص، بينما الذباب يمر بأربع مراحل (بيضة - يرقة - عذراء - كاملة).',
          explanationEn: 'Grasshoppers undergo 3-stage incomplete metamorphosis; flies undergo 4-stage complete metamorphosis.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-u2-q5',
          textAr: 'ما هي الشروط والعوامل الخارجية اللازمة لإنبات بذرة النبات؟',
          textEn: 'What external conditions are necessary for plant seed germination?',
          optionsAr: [
            'الماء ودرجة الحرارة المناسبة والهواء (الأكسجين)',
            'الضوء الشديد والأسمدة الكيميائية فقط',
            'الظلام التام والبرودة الشديدة تحت الصفر',
            'قطع الجنين وإزالة الفلقات'
          ],
          optionsEn: [
            'Water, suitable temperature, and air (oxygen)',
            'Intense light and chemical fertilizers only',
            'Complete darkness and freezing temperatures',
            'Severing the embryo and removing cotyledons'
          ],
          correctIndex: 0,
          conceptTestedAr: 'شروط وعوامل إنبات البذرة',
          conceptTestedEn: 'External factors of seed germination',
          explanationAr: 'تحتاج البذرة خارجياً إلى الماء لتليين الغلاف، والأكسجين للتنفس، والحرارة المناسبة لتنشيط الأنزيمات.',
          explanationEn: 'Seeds require moisture, oxygen for respiration, and optimum temperature to activate enzymes.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة الثالثة: العلاقات بين الكائنات الحية ──
  {
    id: 'sd-p6-sci-3',
    order: 3,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'First Semester',
    unitTitleAr: 'الوحدة الثالثة: العلاقات بين الكائنات الحية',
    unitTitleEn: 'Unit 3: Relationships Between Living Organisms',
    lessonNumberAr: 'الدروس 1 إلى 3: الغذاء والسلاسل والعلاقات الغذائية',
    lessonNumberEn: 'Lessons 1 to 3: Nutrition, Food Chains & Symbiotic Relationships',
    titleAr: 'المحاضرة 3: سلاسل الغذاء والعلاقات الغذائية بين الكائنات الحية',
    titleEn: 'Lecture 3: Food Chains and Ecological Feeding Relationships',
    subtitleAr: 'تصنيف الكائنات حسب الغذاء (منتجات، مستهلكات، محللات)، سلاسل الغذاء، وعلاقات التطفل والترمم والتكافل والتعايش والافتراس والمنافسة',
    subtitleEn: 'Producers, consumers, decomposers, food chain dynamics, and ecological interactions: parasitism, saprophytism, mutualism, commensalism, predation, and competition.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'في غابات ومراعي السافنا السودانية ومحمية الدندر الطبيعية، تشاهد الأبقار والظباء ترعى الحشائش الخضراء، وترافقها طيور صغيرة تقف على ظهورها لتلتقط الحشرات والقراد! بينما تتربص بها الأسود والنمور من بعيد. وفي التربة أسفل أقدامها، تعمل مليارات الفطريات والبكتيريا على تدوير أوراق الأشجار الميتة. كيف تتشابك خيوط الحياة بين المنتجات والمستهلكات والمحللات؟ وما الفرق بين التطفل الذي يمرض العائل والتكافل الذي يفيد الطرفين؟',
    warmupHookEn: 'In the Sudanese savannah and Dinder National Park, herbivores graze while birds pick ticks off their backs, lions hunt, and soil microbes recycle nutrients. How do feeding chains sustain ecological balance?',
    learningOutcomesAr: [
      'أن يصنف التلميذ الكائنات الحية تبعاً لنوع غذائها إلى منتجة ومستهلكة ومحللة.',
      'أن يبني سلسلة غذائية صحيحة توضح مسار انتقال الطاقة من المنتجات إلى المستهلكات.',
      'أن يوضح مفهوم التطفل ويفرق بين التطفل الخارجي (القراد) والتطفل الداخلي (الملاريا والبلهارسيا).',
      'أن يشرح دور الترمم والمحللات في نظافة البيئة وإعادة العناصر للتربة.',
      'أن يقارن بين علاقات التكافل، التعايش، الافتراس، والمنافسة مع ذكر أمثلة واقعية.'
    ],
    learningOutcomesEn: [
      'Classify organisms by nutrition into producers, consumers, and decomposers.',
      'Construct a food chain showing trophic energy flow.',
      'Explain parasitism distinguishing ectoparasites from endoparasites (malaria, schistosoma).',
      'Describe the role of saprophytes in environmental sanitation and nutrient cycling.',
      'Contrast mutualism, commensalism, predation, and competition with real examples.'
    ],
    keyConceptsAr: [
      'الكائنات المنتجة (البناء الضوئي) والمستهلكة (عشبية ولحمية وخلطية) والمحللة',
      'السلسلة الغذائية وتدفق الطاقة الغذائية',
      'التطفل الخارجي والداخلي (علاقة طفيل بعائل متضرر)',
      'الترمم ودوره الحيوي في إصحاح البيئة وتوازنها',
      'التكافل (تبادل منفعة) والتعايش (منفعة لطرف دون ضرر للآخر) والافتراس والمنافسة'
    ],
    keyConceptsEn: [
      'Producers, consumers (herbivores, carnivores, omnivores), and decomposers',
      'Food chain energy flow',
      'Ectoparasitism vs endoparasitism',
      'Saprophytism and environmental equilibrium',
      'Mutualism, commensalism, predation, and resource competition'
    ],
    vocabulary: [
      {
        termAr: 'الكائنات المنتجة (Producers)',
        termEn: 'Producers',
        definitionAr: 'كائنات حية ذاتية التغذية تصنع غذاءها بنفسها بعملية البناء الضوئي كالنباتات الخضراء والطحالب.'
      },
      {
        termAr: 'السلسلة الغذائية (Food Chain)',
        termEn: 'Food Chain',
        definitionAr: 'تتابع انتقال الطاقة الغذائية من كائن حي إلى كائن حي آخر، تبدأ دائماً بمنتج يليه مستهلك أول ثم مستهلك ثانٍ وهكذا.'
      },
      {
        termAr: 'التطفل (Parasitism)',
        termEn: 'Parasitism',
        definitionAr: 'علاقة بين كائنين؛ يستفيد أحدهما ويُسمى (الطفيل) ويتضرر الآخر ويُسمى (العائل).'
      },
      {
        termAr: 'التكافل (Mutualism)',
        termEn: 'Mutualism',
        definitionAr: 'علاقة تبادل منفعة بين كائنين حيين مختلفين يستفيد كلاهما من الآخر (مثل الأشنات وبكتيريا العقد الجذرية).'
      },
      {
        termAr: 'الترمم (Saprophytism)',
        termEn: 'Saprophytism',
        definitionAr: 'تغذي الكائنات المحللة على جثث وبقايا الكائنات الميتة مما يعيد العناصر المعدنية للتربة وينظف البيئة.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الثالثة: تنتظم الكائنات الحية في نظام بيئي متوازن عبر تصنيفها الغذائي (منتجات ومستهلكات ومحللات) وسلاسل الغذاء، وترتبط بعلاقات حيوية متنوعة تشمل الافتراس، المنافسة، التطفل، التكافل، التعايش، والترمم الذي يحفظ نظافة البيئة وخصوبة التربة.',
    summaryEn: 'Summary of Unit 3: Ecosystem energy balance via food chains and diverse interactions like predation, competition, parasitism, mutualism, and saprophytism.',
    sections: [
      {
        titleAr: '1. تصنيف الكائنات الحية وسلاسل الغذاء',
        titleEn: '1. Organism Nutritional Classification and Food Chains',
        contentAr: `**أ - تصنيف الكائنات الحية حسب التغذية:**
1. **كائنات منتجة للغذاء:** هي النباتات الخضراء والطحالب؛ تستغل ضوء الشمس وثاني أكسيد الكربون والماء لتصنع غذاءها بنفسها بعملية **البناء الضوئي**، وتُعتبر قاعدة الهرم الغذائي.
2. **كائنات مستهلكة للغذاء:** تعتمد على المنتجات بطريقة مباشرة أو غير مباشرة، وتضم الإنسان والحيوانات:
   - **آكلات أعشاب (عشبية):** تتغذى مباشرة على النباتات (مثل الأبقار، الضأن، الزراف، والجراد).
   - **آكلات لحوم (لحمية):** تفترس الحيوانات الأخرى (مثل الأسود، النمور، والصقور).
   - **آكلات متنوعة (خلطية):** تتغذى على النباتات واللحوم معاً (مثل الإنسان والدب).
3. **كائنات محللة:** تضم البكتيريا وفطريات العفن؛ تتغذى على تحليل بقايا الكائنات الميتة والفضلات العضوية وتحويلها إلى عناصر بسيطة تمتصها التربة.

**ب - سلاسل الغذاء:**
- **السلسلة الغذائية:** مسار خطي يوضح تتابع انتقال الطاقة من كائن إلى كائن آخر.
- تبدأ السلسلة دائماً بكائن **منتج** (نبات أخضر)، يليه **مستهلك أول** (عشبي)، ثم **مستهلك ثانٍ** (لاحم)، ثم مفترس قمة.
- **مثال كتاب العلوم السوداني:**
  نبات أخضر ← جرادة ← ضفدعة ← ثعبان ← صقر.`,
        contentEn: 'Ecosystems categorize into autotrophic producers, heterotrophic consumers (herbivores, carnivores, omnivores), and saprophytic decomposers interacting through linear food chains.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: بناء سلسلة غذائية في بيئة سودانية',
          titleEn: 'Interactive Example 1: Constructing a Sudanese Savannah Food Chain',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المنتج: حشائش السافنا الخضراء تقوم بالبناء الضوئي.',
              textEn: 'Producer: Savannah grasses conduct photosynthesis.'
            },
            {
              stepNumber: 2,
              textAr: 'مستهلك أول (عشبي): الغزال السريع يتغذى على الحشائش.',
              textEn: 'Primary consumer: Gazelle grazes on grass.'
            },
            {
              stepNumber: 3,
              textAr: 'مستهلك ثانٍ (لاحم): النمر الصياد يفترس الغزال.',
              textEn: 'Secondary consumer: Leopard preys on the gazelle.'
            }
          ],
          takeawayAr: 'تبدأ كل سلسلة غذائية بكائن منتج يمتص طاقة الشمس، وتنتهي بمستهلك قمة ومحللات.',
          takeawayEn: 'Every food chain originates with autotrophic producers converting solar energy.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-5',
          questionAr: 'ما هو الكائن الحي الذي يجب أن تبدأ به أي سلسلة غذائية طبيعية؟',
          questionEn: 'Which organism must start any natural food chain?',
          optionsAr: ['الكائن المنتج (نبات أخضر)', 'الكائن المستهلك اللاحم', 'الكائن الطفيلي', 'المحللات فقط'],
          optionsEn: ['The producer (green plant)', 'Carnivorous consumer', 'Parasite', 'Decomposers only'],
          correctIndex: 0,
          explanationAr: 'تبدأ السلاسل الغذائية دائماً بكائنات منتجة تصنع الغذاء بالطاقة الشمسية.',
          explanationEn: 'Producers initiate all food chains by converting sunlight into chemical biomass.'
        }
      },
      {
        titleAr: '2. العلاقات الغذائية: التطفل، الترمم، التكافل، التعايش، والافتراس',
        titleEn: '2. Symbiotic and Nutritional Interactions: Parasitism, Mutualism, Commensalism',
        contentAr: `ترتبط الكائنات الحية داخل البيئة بعدة علاقات غذائية مشتركة:

1. **التطفل:** علاقة يعيش فيها كائن (**الطفيل**) على حساب كائن حي آخر (**العائل**)، فيستفيد الطفيل ويسبب الأذى والمرض للعائل:
   - **تطفل خارجي:** يعيش الطفيل على سطح جسم العائل ويمتص دمه (مثل: القراد والقمل والبراغيث).
   - **تطفل داخلي:** يعيش داخل أجهزة وأنسجة العائل مسبباً أمراضاً خطيرة (مثل: ديدان الإسكارس، الدودة الشريطية، دودة البلهارسيا في الأوعية، وطفيل البلازموديوم المسبب للملاريا في دم الإنسان).

2. **الترمم:** تغذي المحللات (البكتيريا وفطر عفن الخبز) على بقايا وجثث الحيوانات والنباتات الميتة.
   - *أهمية الترمم للبيئة:*
     - إصحاح البيئة وتخليص سطح الأرض من الجثث المتراكمة والروائح الكريهة.
     - إعادة تدوير العناصر المعدنية المهمة (النيتروجين، الفسفور، الكربون) إلى التربة لزيادة خصوبتها.

3. **التكافل (تبادل المنفعة):** علاقة تعاونية بين كائنين حيين يستفيد كلاهما معاً دون ضرر:
   - *مثال 1:* **الأشنات** (تعايش وتكافل بين طحلب وفطر؛ يصنع الطحلب الغذاء بالبناء الضوئي، ويوفر الفطر الماء والأملاح والحماية).
   - *مثال 2:* **بكتيريا العقد الجذرية** في جذور البقوليات (الفول، الفول السوداني)؛ تثبت النيتروجين للنبات، ويمنحها النبات الغذاء السكري.

4. **التعايش:** علاقة بين كائنين، يستفيد أحدهما بينما الآخر لا يستفيد ولا يتضرر:
   - *مثال:* تسلق النباتات الصغيرة المتسلقة على جذوع الأشجار الضخمة لتصل إلى ضوء الشمس دون امتصاص غذاء الشجرة.

5. **الافتراس:** علاقة مؤقتة تنتهي بقتل كائن قوي (**المفترس**) لكائن أضعف منه (**الفريسة**) ليتغذى عليه (مثل: القط والفأر، الأسد والغزال).

6. **المنافسة:** صراع وتزاحم بين الكائنات الحية للحصول على الموارد المحدودة (الغذاء، الماء، الضوء، المأوى)، وتحدث بين أفراد النوع الواحد أو بين أنواع مختلفة.`,
        contentEn: 'Ecological interactions include parasitism (parasite benefits, host harmed), saprophytism (nutrient recycling), mutualism (win-win), commensalism, predation, and competition.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: التكافل في زراعة الفول السوداني',
          titleEn: 'Interactive Example 2: Nitrogen-Fixing Mutualism in Sudanese Peanuts',
          steps: [
            {
              stepNumber: 1,
              textAr: 'في مزارع الجزيرة والرهد وغرب السودان، تتميز جذور نبات الفول السوداني بعقد صغيرة تسمى العقد الجذرية.',
              textEn: 'Peanut roots host nodule structures in Sudanese agricultural fields.'
            },
            {
              stepNumber: 2,
              textAr: 'تعيش داخل العقد بكتيريا الريزوبيوم التي تمتص نيتروجين الهواء وتثبته في التربة كسماد طبيعي للنبات.',
              textEn: 'Rhizobium bacteria fix atmospheric nitrogen, nourishing the peanut plant.'
            },
            {
              stepNumber: 3,
              textAr: 'في المقابل يعطي النبات البكتيريا السكريات التي يصنعها في أوراقه، فتتحقق المنفعة الكاملة للطرفين (تكافل).',
              textEn: 'In exchange, the plant provides sugars synthesized in leaves (mutual benefit).'
            }
          ],
          takeawayAr: 'علاقة التكافل تفيد الطرفين معاً، بعكس التطفل الذي يلحق الأذى والضرر بالعائل.',
          takeawayEn: 'Mutualism yields reciprocal benefit, unlike parasitism which causes host pathology.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-6',
          questionAr: 'ما الفرق الجوهري بين علاقة التطفل وعلاقة التكافل؟',
          questionEn: 'What is the fundamental difference between parasitism and mutualism?',
          optionsAr: [
            'في التكافل يستفيد كلا الطرفين، بينما في التطفل يستفيد الطفيل ويتضرر العائل',
            'في التطفل يستفيد كلا الطرفين وفي التكافل يتضرر كلاهما',
            'التطفل يحدث بين النباتات فقط والتكافل بين الحيوانات فقط',
            'كلا العلاقتين تؤديان إلى موت الفريسة فوراً'
          ],
          optionsEn: [
            'In mutualism both benefit; in parasitism the parasite benefits while the host is harmed',
            'In parasitism both benefit; in mutualism both suffer',
            'Parasitism is plant-only, mutualism is animal-only',
            'Both lead to immediate prey death'
          ],
          correctIndex: 0,
          explanationAr: 'في التكافل تبادل منفعة متبادلة للطرفين، بينما في التطفل يستفيد الطفيل فقط ويصيب العائل بالضرر والضعف.',
          explanationEn: 'Mutualism is bidirectional benefit (+/+), whereas parasitism is predatory exploitation (+/-).'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-3-assess',
      titleAr: 'اختبار تقييم الوحدة الثالثة: العلاقات بين الكائنات الحية (منهج بخت الرضا)',
      titleEn: 'Unit 3 Assessment: Ecological Relationships (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-u3-q1',
          textAr: 'أي من الكائنات التالية يُعد كائناً منتجاً للغذاء؟',
          textEn: 'Which of the following organisms is an autotrophic producer?',
          optionsAr: ['نبات البرسيم الأخضر والطحالب', 'الأسد المفترس', 'فطر عفن الخبز', 'دودة البلهارسيا'],
          optionsEn: ['Green clover and algae', 'Predatory lion', 'Bread mold fungus', 'Schistosoma flatworm'],
          correctIndex: 0,
          conceptTestedAr: 'الكائنات المنتجة للغذاء',
          conceptTestedEn: 'Autotrophic primary producers',
          explanationAr: 'النباتات الخضراء والطحالب كائنات منتجة لأنها تصنع غذاءها بنفسها عبر البناء الضوئي.',
          explanationEn: 'Green plants and algae are producers synthesizing nutrients via chlorophyll-mediated photosynthesis.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u3-q2',
          textAr: 'تُعد ديدان البلهارسيا وطفيل الملاريا في جسم الإنسان مثالاً على:',
          textEn: 'Schistosoma worms and malaria parasites in the human body are examples of:',
          optionsAr: ['التطفل الداخلي', 'التطفل الخارجي', 'التكافل وتبادل المنفعة', 'الترمم'],
          optionsEn: ['Endoparasitism (internal)', 'Ectoparasitism (external)', 'Mutualism', 'Saprophytism'],
          correctIndex: 0,
          conceptTestedAr: 'التطفل الداخلي',
          conceptTestedEn: 'Endoparasitism',
          explanationAr: 'تعيش ديدان البلهارسيا في الأوعية وطفيل الملاريا في كريات الدم داخل جسم الإنسان وتسبب له المرض، لذلك تسمى طفيليات داخلية.',
          explanationEn: 'Because they inhabit internal organs and blood vessels causing morbidity, they are endoparasites.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-u3-q3',
          textAr: 'ما هي الأهمية البيئية لعملية الترمم التي تقوم بها الفطريات والبكتيريا؟',
          textEn: 'What is the ecological importance of saprophytic decomposition?',
          optionsAr: [
            'إصحاح البيئة من الجثث وإعادة العناصر المعدنية للتربة',
            'افتراس الحيوانات الحية المفترسة',
            'إنتاج غاز الأكسجين عبر البناء الضوئي',
            'نقل حبوب اللقاح بين الأزهار'
          ],
          optionsEn: [
            'Sanitizing the environment from corpses and restoring mineral nutrients to soil',
            'Hunting live predators',
            'Producing oxygen via photosynthesis',
            'Transferring pollen between flowers'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أهمية الترمم للبيئة والتربة',
          conceptTestedEn: 'Ecological significance of decomposition',
          explanationAr: 'الترمم يحلل جثث الكائنات الميتة ليعيد العناصر الغذائية للتربة ويمنع تلوث البيئة.',
          explanationEn: 'Decomposition recycles essential minerals back into soils, preventing environmental contamination.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-u3-q4',
          textAr: 'علاقة الأشنات (طحلب وفطر) أو بكتيريا العقد الجذرية مع البقوليات تُصنف كعلاقة:',
          textEn: 'The association in lichens or root-nodule bacteria in legumes is classified as:',
          optionsAr: ['تكافل (تبادل منفعة)', 'افتراس', 'تطفل', 'منافسة'],
          optionsEn: ['Mutualism (symbiotic exchange)', 'Predation', 'Parasitism', 'Competition'],
          correctIndex: 0,
          conceptTestedAr: 'علاقة التكافل وتبادل المنفعة',
          conceptTestedEn: 'Mutualistic symbiosis',
          explanationAr: 'في الأشنات والبقوليات يستفيد الطرفان من بعضهما بشكل كامل ومتبادل.',
          explanationEn: 'Both partners exchange nutrients and protective shelter, representing mutualism.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u3-q5',
          textAr: 'ماذا يُطلق على الصراع والتزاحم بين الكائنات الحية على المأوى والغذاء والماء؟',
          textEn: 'What is the struggle and conflict between organisms over food and shelter called?',
          optionsAr: ['المنافسة', 'الترمم', 'التعايش', 'الإخصاب'],
          optionsEn: ['Competition', 'Saprophytism', 'Commensalism', 'Fertilization'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم المنافسة بين الكائنات الحية',
          conceptTestedEn: 'Concept of biological competition',
          explanationAr: 'المنافسة هي صراع وتزاحم الكائنات الحية على مصادر البقاء المحدودة.',
          explanationEn: 'Competition arises when multiple organisms vie for limited ecological resources.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── الوحدة الرابعة: الموارد الطبيعية ──
  {
    id: 'sd-p6-sci-4',
    order: 4,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الرابعة: الموارد الطبيعية',
    unitTitleEn: 'Unit 4: Natural Resources',
    lessonNumberAr: 'الدروس 1 إلى 4: تصنيف الموارد واستدامتها',
    lessonNumberEn: 'Lessons 1 to 4: Resource Classification and Sustainability',
    titleAr: 'المحاضرة 4: الموارد الطبيعية (الدائمة، المتجددة، وغير المتجددة)',
    titleEn: 'Lecture 4: Natural Resources (Permanent, Renewable, and Non-Renewable)',
    subtitleAr: 'تعريف الموارد، التصنيف وفقاً للحياة (حية وغير حية)، والتصنيف حسب الاستمرار والتجدد (دائمة كالشمس، متجددة كالتربة والنبات، وغير متجددة كالنفط والمعادن)',
    subtitleEn: 'Resource definitions, biotic vs abiotic classification, and permanence divisions: perpetual (solar, wind), renewable (flora, fauna, soil), and non-renewable (fossil fuels, ores).',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'حبا الله وطننا السودان بأراضٍ زراعية شاسعة، ومياه عذبة تجري في نهر النيل وروافده، وثروة حيوانية ومعدنية هائلة من الذهب والنفط، وشمس مشرقة تسطع طوال العام! كل هذه النعم تسمى "الموارد الطبيعية". لكن هل تعلم أن بعض هذه الموارد لا ينفد أبداً، بينما بعضها الآخر إذا أهدرناه سينفد إلى الأبد ولن تعوضه ملايين السنين؟ كيف نميز بين طاقة الشمس الدائمة والنفط غير المتجدد؟ وكيف نحمي موارد بلادنا للأجيال القادمة؟',
    warmupHookEn: 'Sudan is blessed with fertile soil, the Nile, minerals, gold, livestock, and year-round sunshine. Which of these will last forever, and which risk depletion if mismanaged?',
    learningOutcomesAr: [
      'أن يعرّف التلميذ مفهوم الموارد الطبيعية.',
      'أن يصنف الموارد الطبيعية وفقاً لوجود الحياة إلى موارد حية وموارد غير حية.',
      'أن يفرق بين الموارد الدائمة (الشمس والرياح والماء) والموارد المتجددة (النبات والحيوان والتربة).',
      'أن يحدد الموارد غير المتجددة (الوقود الأحفوري والمعادن) ويفسر سبب تسميتها بذلك.',
      'أن يقترح سلوكيات لترشيد استهلاك الموارد الطبيعية وحمايتها من التلوث والتصحر.'
    ],
    learningOutcomesEn: [
      'Define natural resources provided by nature without human intervention.',
      'Classify resources into biotic and abiotic categories.',
      'Distinguish perpetual resources from renewable resources.',
      'Identify non-renewable resources (fossil fuels, minerals) and depletion risks.',
      'Propose conservation measures against desertification and resource waste.'
    ],
    keyConceptsAr: [
      'الموارد الطبيعية وتصنيفها الحيوي (حية وغير حية)',
      'الموارد الدائمة التي لا تنفد (الشمس، الرياح، الماء)',
      'الموارد المتجددة التي تعوضها الطبيعة (النباتات، الحيوانات، التربة)',
      'الموارد غير المتجددة التي تنفد بالاستهلاك (النفط، الفحم، الغاز الطبيعي، المعادن)',
      'ترشيد الاستهلاك وحماية البيئة والتنوع الحيوي بالسودان'
    ],
    keyConceptsEn: [
      'Biotic vs abiotic natural resources',
      'Perpetual resources: solar, wind, flowing water',
      'Renewable resources: flora, fauna, arable soil',
      'Non-renewable resources: petroleum, coal, natural gas, ores',
      'Resource stewardship and conservation'
    ],
    vocabulary: [
      {
        termAr: 'الموارد الطبيعية (Natural Resources)',
        termEn: 'Natural Resources',
        definitionAr: 'كل ما توفره الطبيعة دون تدخل الإنسان مما يساعده على البقاء والعيش والاستمرار.'
      },
      {
        termAr: 'الموارد الدائمة (Perpetual Resources)',
        termEn: 'Perpetual Resources',
        definitionAr: 'موارد طبيعية لا تنفد ولا تنتهي باستمرار وجود الكون (مثل ضوء الشمس، الرياح، ومياه البحار والأنهار).'
      },
      {
        termAr: 'الموارد المتجددة (Renewable Resources)',
        termEn: 'Renewable Resources',
        definitionAr: 'موارد تعوضها الطبيعة باستمرار بالتكاثر والنمو ما لم تتعرض للإبادة الجائرة (مثل النباتات، الحيوانات، والتربة).'
      },
      {
        termAr: 'الموارد غير المتجددة (Non-Renewable Resources)',
        termEn: 'Non-Renewable Resources',
        definitionAr: 'موارد تنفد وتفنى بالاستهلاك والاستخراج ولا يمكن تعويضها خلال عمر الإنسان (مثل النفط، الفحم الحجري، والذهب).'
      }
    ],
    summaryAr: 'خلاصة الوحدة الرابعة: الموارد الطبيعية هبة الخالق لاستمرار الحياة، وتنقسم إلى حية وغير حية، وإلى دائمة لا تنفد (الشمس والرياح والماء)، ومتجددة تتكاثر وتتعوض (النبات والحيوان والتربة)، وغير متجددة محدودة الكمية تنفد بالاستهلاك (الوقود الأحفوري والمعادن) وتتطلب ترشيداً صارماً.',
    summaryEn: 'Summary of Unit 4: Natural resource taxonomy encompassing perpetual, renewable, and finite non-renewable assets needing sustainable management.',
    sections: [
      {
        titleAr: '1. مفهوم الموارد الطبيعية وتصنيفها وفقاً للحياة والاستمرار',
        titleEn: '1. Resource Concept and Taxonomy by Biotic Nature and Renewability',
        contentAr: `**أ - مفهوم الموارد الطبيعية:**
هي كل ما توفره الطبيعة للإنسان من ثروات ومواد دون أن يكون له يد في صنعها، ويعتمد عليها لتأمين غذائه ومسكنه وطاقته وصناعته واستمراره.

**ب - التصنيف الأول: وفقاً للحياة:**
1. **موارد غير حية:** تشمل الشمس، الهواء، الرياح، الماء، الصخور، المعادن، والوقود الأحفوري.
2. **موارد حية:** تشمل الثروة النباتية (الغابات، المراعي، المحاصيل) والثروة الحيوانية (الحيوانات البرية والمستأنسة، الطيور، والأسماك).

**ج - التصنيف الثاني: وفقاً للاستمرار والتجدد (التقسيم العلمي الأهم):**
1. **الموارد الدائمة:**
   - هي موارد لا تنفد ولا تنضب مهما استهلكها الإنسان طالما الكون قائم.
   - *أمثلة:* **الشمس** (مصدر الضوء والحرارة والطاقة الشمسية)، **الرياح** (تولد طاقة حركية وكهربائية)، **المياه** (دورة الماء المستمرة).
2. **الموارد المتجددة:**
   - هي موارد تتجدد باستمرار بفعل العمليات الطبيعية ودورات الحياة والتكاثر، ولكنها تحتاج إلى حماية من الصيد الجائر والقطع المفرط للأشجار.
   - *أمثلة:* **النباتات** (تنمو وتتكاثر بالبذور)، **الحيوانات** (تتكاثر لحفظ النوع)، **التربة** (تتجدد بالعناصر الغذائية).
3. **الموارد غير المتجددة:**
   - هي موارد توجد في باطن الأرض بكميات محددة، استغرقت ملايين السنين لتتكون، وتنفد تدريجياً بكثرة الاستهلاك والاستخراج ولا يمكن تعويضها.
   - *أمثلة:*
     - **الوقود الأحفوري:** النفط (البترول)، الفحم الحجري، والغاز الطبيعي.
     - **المعادن:** الذهب، الحديد، النحاس، والكروم.`,
        contentEn: 'Natural resources classify into biotic/abiotic and perpetual (solar, wind), renewable (wildlife, plants, soil), and non-renewable (hydrocarbons, metals).',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: استثمار الموارد الطبيعية في السودان',
          titleEn: 'Interactive Example 1: Sustainable Energy Exploitation in Sudan',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الطاقة الكهرومائية (سد مروي والروصيرص): استغلال جريان مياه النيل (مورد دائم ومتجدد) لتوليد الكهرباء النظيفة.',
              textEn: 'Hydropower at Merowe and Roseires dams harnesses renewable river flows.'
            },
            {
              stepNumber: 2,
              textAr: 'الطاقة الشمسية: السودان من أغنى دول العالم بالإشعاع الشمسي، وتُستخدم الخلايا الشمسية لضخ مياه الآبار في القرى الزراعية.',
              textEn: 'Solar panels power groundwater irrigation pumps across rural Sudan.'
            },
            {
              stepNumber: 3,
              textAr: 'المعادن والنفط: ثروات غير متجددة يجب توجيه عوائدها لتطوير الزراعة والصناعة والتعليم.',
              textEn: 'Non-renewable minerals and oil revenues must reinvest into long-term infrastructure.'
            }
          ],
          takeawayAr: 'التحول إلى الموارد الدائمة والمتجددة يضمن حماية البيئة والتنمية المستدامة للأجيال القادمة.',
          takeawayEn: 'Transitioning to perpetual resources guarantees sustainability and pollution reduction.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-7',
          questionAr: 'أي من الموارد الطبيعية التالية يُعتبر مورداً دائماً لا ينفد أبداً؟',
          questionEn: 'Which of the following natural resources is a permanent resource that never depletes?',
          optionsAr: ['الشمس والرياح', 'النفط الخام', 'الفحم الحجري', 'خام الحديد'],
          optionsEn: ['Sun and wind', 'Crude oil', 'Coal', 'Iron ore'],
          correctIndex: 0,
          explanationAr: 'الشمس والرياح موارد دائمة لا تنفد باستهلاك الإنسان وتتجدد طبيعياً بانتظام.',
          explanationEn: 'Solar radiation and atmospheric wind are perpetual kinetic and radiant energy supplies.'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-4-assess',
      titleAr: 'اختبار تقييم الوحدة الرابعة: الموارد الطبيعية (منهج بخت الرضا)',
      titleEn: 'Unit 4 Assessment: Natural Resources (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-u4-q1',
          textAr: 'ما هو المقصود بالموارد غير المتجددة؟',
          textEn: 'What is meant by non-renewable resources?',
          optionsAr: [
            'موارد تنفد بالاستهلاك ولا يمكن تعويضها خلال حياة الإنسان',
            'موارد دائمة لا تنتهي باستمرار وجود الكون',
            'موارد تتجدد وتتكاثر بالبذور والولادة',
            'موارد يصنعها الإنسان في المعامل'
          ],
          optionsEn: [
            'Resources depleted by consumption that cannot regenerate in human timescales',
            'Perpetual resources that never exhaust',
            'Resources that reproduce by seeds and live birth',
            'Artificial lab-made substances'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تعريف الموارد غير المتجددة',
          conceptTestedEn: 'Definition of non-renewable resources',
          explanationAr: 'الموارد غير المتجددة كالنفط والمعادن كميتها محدودة في باطن الأرض وتنفد بالاستخراج المستمر.',
          explanationEn: 'Non-renewable resources exist in finite geological reserves and exhaust upon consumption.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u4-q2',
          textAr: 'أي مما يلي يُصنف كمورد طبيعي متجدد؟',
          textEn: 'Which of the following is classified as a renewable natural resource?',
          optionsAr: ['الثروة النباتية والحيوانية والتربة', 'الغاز الطبيعي', 'البترول', 'الذهب'],
          optionsEn: ['Flora, fauna, and soil', 'Natural gas', 'Petroleum', 'Gold'],
          correctIndex: 0,
          conceptTestedAr: 'أمثلة الموارد المتجددة',
          conceptTestedEn: 'Examples of renewable resources',
          explanationAr: 'النبات والحيوان يتجددان بالتكاثر، والتربة تتجدد بدورات العناصر الطبيعية.',
          explanationEn: 'Plants and animals reproduce biologically, renewing their populations naturally.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u4-q3',
          textAr: 'يُصنف كل من الفحم الحجري والنفط والغاز الطبيعي تحت مسمى:',
          textEn: 'Coal, petroleum, and natural gas are collectively termed:',
          optionsAr: ['الوقود الأحفوري', 'الموارد الدائمة', 'الموارد الحية', 'المخاليط المتجانسة'],
          optionsEn: ['Fossil fuels', 'Perpetual resources', 'Biotic living resources', 'Homogeneous mixtures'],
          correctIndex: 0,
          conceptTestedAr: 'الوقود الأحفوري كمورد غير متجدد',
          conceptTestedEn: 'Fossil fuels classification',
          explanationAr: 'الوقود الأحفوري تكون من بقايا كائنات حية دُفنت تحت طبقات الأرض لملايين السنين تحت ضغط وحرارة عاليين.',
          explanationEn: 'Fossil fuels formed from ancient organic matter subjected to prolonged pressure and heat.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة الخامسة: المواد وتغيراتها ──
  {
    id: 'sd-p6-sci-5',
    order: 5,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الخامسة: المواد وتغيراتها',
    unitTitleEn: 'Unit 5: Matter and Its Changes',
    lessonNumberAr: 'الدروس 1 إلى 3: التغيرات الفيزيائية والكيميائية',
    lessonNumberEn: 'Lessons 1 to 3: Physical & Chemical Changes',
    titleAr: 'المحاضرة 5: التغيرات الفيزيائية والتغيرات الكيميائية للمادة',
    titleEn: 'Lecture 5: Physical and Chemical Changes of Matter',
    subtitleAr: 'مقارنة دقيقة بين التغيرات الفيزيائية (الشكل، الحجم، الحالة دون تغيير التركيب) والتغيرات الكيميائية (تغير تركيب المادة وإنتاج مواد جديدة)',
    subtitleEn: 'Systematic comparison between physical transformations (shape, size, phase changes) and chemical alterations (compositional change and new substances).',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تذوب ملعقة سكر في كوب شاي ساخن، يختفي السكر ظاهرياً لكن طعمه الحلو يظل موجوداً، وإذا بخرنا الماء سنستعيد بلورات السكر كما هي! ولكن ماذا يحدث إذا وضعت السكر نفسه على لهب النار مباشرة؟ يتحول إلى مادة سوداء متفحمة ويفقد طعمه للأبد! ما الفرق بين التغير الذي يغير المظهر فقط (الفيزيائي) والتغير الذي يقلب طبيعة المادة إلى مادة جديدة تماماً (الكيميائي)؟',
    warmupHookEn: 'Dissolving sugar in hot tea retains its sweetness, yet heating dry sugar over a flame turns it into black carbon! What separates physical changes from permanent chemical reactions?',
    learningOutcomesAr: [
      'أن يعرّف التلميذ مفهوم التغير الفيزيائي ويذكر أمثلة عليه (انصهار الثلج، ذوبان السكر، طحن الملح، دباغة الجلود).',
      'أن يعرّف التلميذ مفهوم التغير الكيميائي ويذكر أمثلة عليه (صدأ الحديد، حرق الخشب، طهي البيض، التعفن).',
      'أن يقارن بدقة بين التغير الفيزيائي والتغير الكيميائي من حيث تغير التركيب وإنتاج مادة جديدة.',
      'أن يعدد العوامل المسببة للتغيرات الفيزيائية (السحن، الطرق، الثني، التذويب) والكيميائية (التسخين الشديد، الاحتراق).'
    ],
    learningOutcomesEn: [
      'Define physical changes with concrete examples (ice melting, sugar dissolution, grinding, leather tanning).',
      'Define chemical changes with examples (rusting, combustion, cooking, decay).',
      'Distinguish physical from chemical processes based on reversibility and new matter formation.',
      'List driving factors: mechanical forces, dissolution, vs extreme heat and burning.'
    ],
    keyConceptsAr: [
      'التغير الفيزيائي: تغير في الشكل أو الحجم أو الحالة دون تغيير تركيب المادة',
      'التغير الكيميائي: تغير في التركيب ينتج عنه مادة جديدة ذات خصائص مختلفة',
      'أمثلة التغير الفيزيائي: انصهار، تجمد، تبخر، ذوبان، طحن، دباغة الجلود',
      'أمثلة التغير الكيميائي: صدأ الحديد، الاحتراق، تخمر العجين، فساد وتعفن الأطعمة',
      'عوامل التغير: الطرق والثني مقابل التسخين الشديد والاحتراق'
    ],
    keyConceptsEn: [
      'Physical change: changes state or appearance without altering chemical identity',
      'Chemical change: alters chemical identity yielding new products',
      'Physical examples: phase transitions, grinding, tanning',
      'Chemical examples: oxidation rust, burning, fermenting, cooking',
      'Mechanisms and triggers: thermal and combustion factors'
    ],
    vocabulary: [
      {
        termAr: 'التغير الفيزيائي (Physical Change)',
        termEn: 'Physical Change',
        definitionAr: 'تغير يطرأ على شكل المادة أو حجمها أو حالتها الفيزيائية دون أن يغير تركيبها الأصلي، ولا ينتج عنه مادة جديدة (مثل انصهار الجليد وذوبان السكر).'
      },
      {
        termAr: 'التغير الكيميائي (Chemical Change)',
        termEn: 'Chemical Change',
        definitionAr: 'تغير يطرأ على تركيب المادة الداخلي ينتج عنه مادة جديدة أو مواد جديدة ذات خواص تختلف تماماً عن المادة الأصلية (مثل صدأ الحديد واحتراق الخشب).'
      },
      {
        termAr: 'صدأ الحديد (Iron Rust)',
        termEn: 'Iron Rust',
        definitionAr: 'تغير كيميائي يحدث عند تفاعل الحديد مع أكسجين الهواء الجوي في وجود الرطوبة لينتج أكسيد الحديد البني الهش.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الخامسة: المادة في بيئتنا تخضع لنوعين من التغيرات: تغير فيزيائي سطحي يحتفظ فيه المركب بخواصه (كالذوبان والانصهار وطحن الحبوب)، وتغير كيميائي عميق تتفكك فيه الروابط وتتكون مواد جديدة بصفات مختلفة (كالاحتراق وصدأ المعادن وطهي الطعام والتعفن).',
    summaryEn: 'Summary of Unit 5: Physical alterations preserve substance composition, whereas chemical reactions reorganize matter yielding distinct chemical species.',
    sections: [
      {
        titleAr: '1. التغيرات الفيزيائية والكيميائية وأمثلتها من كتاب الوزارة',
        titleEn: '1. Physical vs Chemical Changes: Principles and Textbook Examples',
        contentAr: `**أ - التغير الفيزيائي:**
- **التعريف:** هو تغير يطرأ على مظهر المادة الخارجي (شكلها، حجمها، أو حالتها من صلبة أو سائلة أو غازية) دون أي مساس بتركيب دقائقها وجزيئاتها، ولا ينتج عنه أي مادة جديدة.
- **أمثلة معتمدة من كتاب العلوم للصف السادس:**
  1. *انصهار الثلج:* يتحول الماء من الحالة الصلبة إلى السائلة، ويبقى ماءً يمكن إعادته بالتبريد.
  2. *ذوبان السكر أو الملح في الماء:* تتوزع الجزيئات دون تغير طبيعتها الكيميائية.
  3. *طحن وسحن الملح والسكر:* تصغير حجم الحبيبات دون تغيير خواصها.
  4. *ثني سلك النحاس أو طرق الحديد لتشكيله.*
  5. *دباغة الجلود في الصناعات السودانية التقليدية.*
- **العوامل المسببة للتغير الفيزيائي:** السحن (الطحن)، الطرق، الثني، الشد، التذويب، وتغير درجات الحرارة بالتسخين المعتدل أو التبريد.

**ب - التغير الكيميائي:**
- **التعريف:** هو تغير يحدث في التركيب الجوهري للمادة، تتكسر فيه الروابط القديمة وتتكون روابط جديدة، وينتج عنه مادة جديدة تماماً تمتلك خواصاً مختلفة عن المواد المتفاعلة الأصلية، ولا يمكن إرجاعها إلى حالتها الأولى بالطرق البسيطة.
- **أمثلة معتمدة من كتاب العلوم للصف السادس:**
  1. *احتراق الخشب أو حرق السكر:* يتحول الخشب والسكر إلى فحم ورماد وغاز ثاني أكسيد الكربون.
  2. *صدأ الحديد:* تفاعل الحديد مع أكسجين الهواء الرطب مكوناً طبقة بنية هشة (أكسيد الحديد).
  3. *طهي وسلق البيض:* تجمد زلال البيض وتغير بروتيناته حرارياً لمركب جديد.
  4. *تعفن الخبز والفواكه واللحوم.*
  5. *تخمر العجين لإنتاج الكسرة والخبز البلدي.*
- **العوامل المسببة للتغير الكيميائي:** التسخين الشديد، والاحتراق، والتفاعل مع الأحماض والأكسجين.`,
        contentEn: 'Physical changes manipulate geometry or phase without chemical rearrangement. Chemical changes reorganize atomic bonds to synthesize new substances.',
        interactiveExample: {
          titleAr: 'تطبيق عملي: تصنيف ظواهر يومية في المطبخ السوداني',
          titleEn: 'Interactive Example: Everyday Changes in the Sudanese Kitchen',
          steps: [
            {
              stepNumber: 1,
              textAr: 'طحن حبوب الذرة والقمح إلى دقيق ناعم: تغير فيزيائي (تغير الحجم فقط مع بقاء طعم وتركيب الدقيق).',
              textEn: 'Milling sorghum into flour is a physical change in particle size.'
            },
            {
              stepNumber: 2,
              textAr: 'عجن الدقيق وتخميره بالخميرة ثم خبزه على الصاج لعمل الكسرة: تغير كيميائي (تفاعلات التخمر والطهي أنتجت طعماً ومادة جديدة).',
              textEn: 'Fermenting and baking Kisra dough is a chemical change producing new compounds.'
            },
            {
              stepNumber: 3,
              textAr: 'تجميد الماء في الثلاجة إلى مكعبات ثلج: تغير فيزيائي يمكن عكسه بالانصهار.',
              textEn: 'Freezing water into ice cubes is a reversible physical phase change.'
            }
          ],
          takeawayAr: 'إذا أمكن استعادة المادة الأصلية دون إنتاج مادة جديدة فالتغير فيزيائي، أما إذا تكونت مادة جديدة تماماً فالتغير كيميائي.',
          takeawayEn: 'Reversibility with preserved identity indicates physical change; new chemical identity signifies a chemical reaction.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-8',
          questionAr: 'أي من الحالات التالية يُعتبر تغيراً كيميائياً؟',
          questionEn: 'Which of the following occurrences is a chemical change?',
          optionsAr: ['صدأ مسمار من الحديد في الهواء الرطب', 'انصهار مكعب من الثلج', 'طحن بلورات ملح الطعام', 'قص قطعة من الورق'],
          optionsEn: ['Rusting of an iron nail in moist air', 'Melting of an ice cube', 'Grinding table salt crystals', 'Cutting a piece of paper'],
          correctIndex: 0,
          explanationAr: 'صدأ الحديد تغير كيميائي ينتج عنه مادة جديدة هي أكسيد الحديد نتيجة تفاعل كيميائي.',
          explanationEn: 'Rust formation is an irreversible chemical oxidation reaction forming iron oxide.'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-5-assess',
      titleAr: 'اختبار تقييم الوحدة الخامسة: المواد وتغيراتها (منهج بخت الرضا)',
      titleEn: 'Unit 5 Assessment: Matter and Its Changes (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-u5-q1',
          textAr: 'ما الذي يميز التغير الفيزيائي عن التغير الكيميائي؟',
          textEn: 'What distinguishes a physical change from a chemical change?',
          optionsAr: [
            'التغير الفيزيائي لا ينتج عنه مادة جديدة بينما الكيميائي ينتج مادة جديدة',
            'التغير الفيزيائي يغير تركيب جزيئات المادة بالكامل',
            'التغير الكيميائي يغير شكل المادة وحجمها فقط دون تركيبها',
            'لا يوجد أي فرق بينهما'
          ],
          optionsEn: [
            'Physical changes do not form new substances while chemical changes do',
            'Physical changes completely alter molecular composition',
            'Chemical changes only change shape and volume',
            'There is no difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفرق الجوهري بين التغير الفيزيائي والكيميائي',
          conceptTestedEn: 'Distinction between physical and chemical changes',
          explanationAr: 'في التغير الفيزيائي يحتفظ الجزيء بهويته، أما في التغير الكيميائي فتتكون مادة جديدة بخواص مغايرة.',
          explanationEn: 'Physical alterations conserve chemical identity; chemical transformations generate novel substances.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u5-q2',
          textAr: 'أي من التغيرات التالية يُعد مثالاً على التغير الفيزيائي المذكور بكتاب الوزارة؟',
          textEn: 'Which change exemplifies a physical transformation highlighted in the curriculum?',
          optionsAr: ['دباغة الجلود وانصهار الثلج', 'احتراق الخشب', 'طهي وسلق البيض', 'تعفن الفواكه'],
          optionsEn: ['Leather tanning and ice melting', 'Wood combustion', 'Egg cooking', 'Fruit spoilage'],
          correctIndex: 0,
          conceptTestedAr: 'أمثلة التغيرات الفيزيائية',
          conceptTestedEn: 'Physical change textbook examples',
          explanationAr: 'دباغة الجلود وانصهار الجليد وذوبان السكر كلها تغيرات فيزيائية لا تغير التركيب الأساسي للمادة.',
          explanationEn: 'Leather tanning processes and ice melting alter state and texture physically.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة السادسة: المخاليط والمحاليل ──
  {
    id: 'sd-p6-sci-6',
    order: 6,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة السادسة: المخاليط والمحاليل',
    unitTitleEn: 'Unit 6: Mixtures and Solutions',
    lessonNumberAr: 'الدروس 1 إلى 3: الذوبان والمخلوط والمحلول وفصل المخاليط',
    lessonNumberEn: 'Lessons 1 to 3: Dissolution, Mixtures, Solutions & Separation Methods',
    titleAr: 'المحاضرة 6: المخاليط والمحاليل وطرق فصلها',
    titleEn: 'Lecture 6: Mixtures, Solutions, and Separation Techniques',
    subtitleAr: 'مفهوم الذوبان، المخاليط المتجانسة وغير المتجانسة، تركيب المحلول (مذاب ومذيب)، عوامل سرعة الذوبان، وطرائق الفصل الستة (الغربلة، المغناطيس، الترشيح، التبخير، قمع الفصل، والتقطير)',
    subtitleEn: 'Solubility principles, homogeneous vs heterogeneous mixtures, solute and solvent dynamics, dissolution rates, and 6 separation techniques.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عند إعداد كوب من عصير الليمون المنعش في يوم قائظ بالخرطوم، نخلط عصير الليمون بالماء ونضيف السكر فنحصل على سائل رائق متجانس لا يمكننا فيه تمييز حبات السكر بالعين المجردة! ولكن إذا اختلطت حبات الرمل بماء النيل العكر، نرى جزيئات الطمي والرمل واضحة تترسب في القاع. كيف يفرق علماء الكيمياء بين المخلوط المتجانس (المحلول) والمخلوط غير المتجانس؟ وكيف نستطيع فصل المواد عن بعضها إذا اختلطت؟',
    warmupHookEn: 'Lemonade forms a transparent homogeneous solution where sugar particles vanish into water molecules. River silt in Nile water forms a cloudy heterogeneous mixture. How are mixtures classified and separated?',
    learningOutcomesAr: [
      'أن يوضح التلميذ مفهوم الذوبان وتوزع دقائق المذاب بين جزيئات المذيب.',
      'أن يقارن بين المخلوط المتجانس (المحلول) والمخلوط غير المتجانس بمثال لكل منهما.',
      'أن يحدد مكوني المحلول (المذاب والمذيب) مبيناً أن المذيب هو المادة ذات الكمية الأكبر.',
      'أن يعدد العوامل المؤثرة في زيادة سرعة الذوبان (التنعيم، التقليب، درجة الحرارة).',
      'أن يشرح طرائق فصل المخاليط الستة (الغربلة، الفصل المغناطيسي، الترشيح، التبخير، قمع الفصل، التقطير) ويختار الطريقة المناسبة لكل خليط.'
    ],
    learningOutcomesEn: [
      'Explain dissolution and particle dispersion of solute among solvent molecules.',
      'Differentiate homogeneous solutions from heterogeneous suspensions.',
      'Identify solute and solvent components.',
      'List factors accelerating dissolution rates (surface area, agitation, temperature).',
      'Detail and apply the six physical separation techniques.'
    ],
    keyConceptsAr: [
      'الذوبان وانتشار المذاب بين جزيئات المذيب',
      'المخلوط المتجانس (المحلول) والمخلوط غير المتجانس',
      'المحلول = مذاب (كمية أقل) + مذيب (كمية أكبر كالماء)',
      'العوامل المسرعة للذوبان: زيادة التنعيم، التقليب، رفع الحرارة، نوع المذاب',
      'طرائق الفصل: الغربلة، المغناطيس، الترشيح، التبخير، قمع الفصل، التقطير'
    ],
    keyConceptsEn: [
      'Solubility dynamics and molecular dispersal',
      'Homogeneous vs heterogeneous mixtures',
      'Solute and solvent definitions',
      'Kinetic factors influencing dissolution speed',
      'Separation techniques: sieving, magnetism, filtration, evaporation, separating funnel, distillation'
    ],
    vocabulary: [
      {
        termAr: 'المخلوط (Mixture)',
        termEn: 'Mixture',
        definitionAr: 'مزيج فيزيائي يتكون من مادتين أو أكثر بنسب وزنية مختلفة، تحتفظ فيه كل مادة بخواصها الكيميائية الأصلية.'
      },
      {
        termAr: 'المحلول (Solution)',
        termEn: 'Solution',
        definitionAr: 'مخلوط متجانس التركيب والخواص في جميع أجزائه، يتكون من مادة ذائبة (مذاب) ومادة مذيبة (مذيب).'
      },
      {
        termAr: 'المذاب والمذيب (Solute & Solvent)',
        termEn: 'Solute & Solvent',
        definitionAr: 'المذاب هو المادة التي تختفي وتوجد بكمية أقل، والمذيب هو السائل الذي يذيب المادة ويوجد بالكمية الأكبر كالماء.'
      },
      {
        termAr: 'الترشيح (Filtration)',
        termEn: 'Filtration',
        definitionAr: 'طريقة لفصل مادة صلبة غير ذائبة ومعلقة في سائل باستخدام ورقة ترشيح (مثل فصل الرمل أو الطمي عن الماء).'
      },
      {
        termAr: 'التقطير (Distillation)',
        termEn: 'Distillation',
        definitionAr: 'طريقة لفصل سائلين ممتزجين ومتجانسين يختلفان في درجة الغليان عبر التبخير ثم التكثيف.'
      }
    ],
    summaryAr: 'خلاصة الوحدة السادسة: تتنوع المخاليط بين متجانسة (محاليل لا يمكن تمييز دقائقها) وغير متجانسة، ويتسارع الذوبان بارتفاع الحرارة والتقليب وتنعيم الحبيبات، وتفصل المخاليط بطرق فيزيائية ملائمة لخواص مكوناتها كالترشيح والتبخير والتقطير وقمع الفصل والغربلة والمغناطيس.',
    summaryEn: 'Summary of Unit 6: Comprehensive study of homogeneous and heterogeneous mixtures, dissolution kinetics, and six physical separation methods.',
    sections: [
      {
        titleAr: '1. الذوبان والمخاليط والمحاليل والعوامل المؤثرة',
        titleEn: '1. Dissolution, Mixtures, Solutions, and Kinetic Factors',
        contentAr: `**أ - مفهوم الذوبان:**
الذوبان هو اختفاء دقائق المادة المذابة وتوزعها بانتظام بين الفراغات الجزيئية للمادة المذيبة.

**ب - المخلوط وأنواعه:**
المخلوط هو مادتان أو أكثر خلطتا معاً بنسب مختلفة دون اتحاد كيميائي، فتحتفظ كل مادة بخصائصها الأصلية:
1. **مخلوط متجانس (المحلول):** تذوب فيه المواد تماماً وتتوزع بانتظام بحيث تظهر كمادة واحدة ولا يمكن رؤية مكوناتها بالعين أو المجهر (مثل: محلول الملح في الماء، محلول السكر، والهواء الجوي).
2. **مخلوط غير متجانس:** لا تمتزج مكوناته كلياً ويمكن تمييزها بالعين المجردة بسهولة وتنفصل بالترويق (مثل: الرمل والماء، الزيت والماء، وبرادة الحديد والكبريت).

**ج - مكونات المحلول:**
- **المذاب:** هو المادة التي تتفكك وتذوب وتكون كميتها هي الأقل في المحلول (مثل السكر أو الملح).
- **المذيب:** هو الوسط السائل الذي يذيب المادة وتكون كميته هي الأكبر (مثل الماء، ويُعد الماء المذيب العام الأشهر).

**د - العوامل المؤثرة على سرعة الذوبان:**
1. **زيادة التنعيم (طحن المذاب):** طحن المذاب يزيد من مساحة السطح المعرضة لجزيئات المذيب فتذوب أسرع بكثير (السكر المطحون يذوب أسرع من قالب السكر).
2. **التحريك والتقليب:** يزيد من تصادمات جزيئات المذيب بدقائق المذاب.
3. **رفع درجة الحرارة:** تسخين المذيب يمد الجزيئات بطاقة حركية تسرع تفكيك المذاب.
4. **تقليل كمية المذاب بالنسبة للمذيب:** كلما كان المحلول مخففاً ذابت الدقائق بسهولة.
5. **طبيعة ونوع المادة المذابة.**`,
        contentEn: 'Dissolution occurs when solute particles disperse within solvent gaps. Factors accelerating dissolution: particle reduction, agitation, temperature elevation, and solute-solvent ratio.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: مقارنة إذابة سكر القصب المطحون مقابل مكعب السكر',
          titleEn: 'Interactive Example 1: Comparing Powdered Sugar vs Sugar Cube Dissolution',
          steps: [
            {
              stepNumber: 1,
              textAr: 'نحضر كأسين متماثلين بهما نفس كمية الماء الدافئ ودرجة الحرارة.',
              textEn: 'Take two identical glasses with equal warm water volumes.'
            },
            {
              stepNumber: 2,
              textAr: 'نضع في الكأس الأول 5 جرام سكر مطحون ناعم، وفي الثاني قالباً يزن 5 جرام، ونحرك الكأسين بنفس السرعة.',
              textEn: 'Add 5g powdered sugar to one and a 5g cube to the other, stirring synchronously.'
            },
            {
              stepNumber: 3,
              textAr: 'الملاحظة: يذوب السكر المطحون في ثوانٍ معدودة، بينما يحتاج المكعب لوقت أطول بكثير.',
              textEn: 'Powdered sugar dissolves far faster due to expanded surface area contact.'
            }
          ],
          takeawayAr: 'زيادة مساحة السطح بالتنعيم تزيد معدل التلامس وسرعة الذوبان بدرجة ملحوظة.',
          takeawayEn: 'Greater contact surface area dramatically increases dissolution kinetics.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-9',
          questionAr: 'ماذا نطلق على المادة التي توجد بالكمية الأكبر في المحلول المتجانس؟',
          questionEn: 'What is the substance present in the largest quantity in a solution called?',
          optionsAr: ['المذيب', 'المذاب', 'الراسب', 'المعلق'],
          optionsEn: ['Solvent', 'Solute', 'Precipitate', 'Suspension'],
          correctIndex: 0,
          explanationAr: 'المذيب (كالماء) هو المادة التي توجد بالكمية الأكبر وتقوم بإذابة المذاب.',
          explanationEn: 'The solvent constitutes the major component that dissolves the solute.'
        }
      },
      {
        titleAr: '2. طرائق فصل المخاليط الستة المعتمدة في كتاب الوزارة',
        titleEn: '2. Six Separation Methods of Mixtures Aligned with the Curriculum',
        contentAr: `تعتمد طريقة فصل المخلوط على الخواص الفيزيائية لمكوناته:

1. **الغربلة (Sieving):**
   - تُستخدم لفصل المواد الصلبة المختلفة في حجم الحبيبات بواسطة غربال ذي ثقوب محددة (مثل: فصل الحصى عن الرمل، أو تنقية الدقيق من الشوائب).

2. **الفصل المغناطيسي (Magnetic Separation):**
   - يُستخدم لفصل مادة مغناطيسية تنجذب للمغناطيس (مثل برادة الحديد) عن مواد أخرى غير مغناطيسية (مثل الرمل أو الكبريت أو نشارة الخشب).

3. **الترشيح (Filtration):**
   - يُستخدم لفصل **مادة صلبة غير ذائبة في سائل** (مخلوط غير متجانس معلق).
   - يتم سكب السائل عبر قمع وورقة ترشيح دقيقة؛ فيمر السائل (الرشيح) وتبقى المادة الصلبة العالقة على الورقة (مثل: فصل الطمي والرمل عن ماء النيل العكر).

4. **التبخير (Evaporation):**
   - يُستخدم لفصل **مادة صلبة ذائبة في سائل** (مخلوط متجانس).
   - بتسخين المحلول يتبخر السائل المذيب (الماء) كلياً في الهواء وتتبقى بلورات المادة الصلبة المذابة في قاع الإناء (مثل: استخراج الملح من ماء البحر الأحمر في ملاحات بورتسودان).

5. **قمع الفصل (Separating Funnel):**
   - يُستخدم لفصل **سائلين غير متجانسين لا يمتزجان** ومختلفين في الكثافة.
   - ينفصل السائلان لطبقتين؛ فيستقر السائل الأثقل والأعلى كثافة (كالماء) في الأسفل، ويطفو السائل الأخف (كالزيت) في الأعلى، ثم نفتح صنبور القمع لنفرغ الماء أولاً (مثل: فصل الزيت عن الماء).

6. **التقطير (Distillation):**
   - يُستخدم لفصل **سائلين متجانسين ممتزجين يختلفان في درجة الغليان** أو لفصل ماء نقي تماماً عن الأملاح الذائبة.
   - يعتمد على تسخين الخليط حتى يغلي السائل ذو درجة الغليان الأقل ويتبخر، ثم يمرر بخاره في مكثف مبرد ليتحول مجدداً لسائل نقي يجمع في دورق منفصل (مثل: تقطير الكحول والماء، وتحلية مياه البحر).`,
        contentEn: 'Six physical separation methods: sieving (particle size), magnetic separation (magnetism), filtration (insoluble solid in liquid), evaporation (soluble solid), separating funnel (immiscible liquids), and distillation (boiling point differential).',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: استخراج ملح الطعام من مياه البحر الأحمر بالسودان',
          titleEn: 'Interactive Example 2: Table Salt Extraction from Red Sea Brine in Port Sudan',
          steps: [
            {
              stepNumber: 1,
              textAr: 'تُضخ مياه البحر الأحمر المالحة إلى أحواض شمسية واسعة ضحلة العمق في ملاحات بورتسودان.',
              textEn: 'Red Sea salt water is pumped into shallow pans in Port Sudan salterns.'
            },
            {
              stepNumber: 2,
              textAr: 'بفعل حرارة الشمس المشرقة الدائمة والرياح يتبخر الماء كلياً إلى الغلاف الجوي بطريقة التبخير.',
              textEn: 'Intense sun and winds evaporate water leaving crystallized sodium chloride.'
            },
            {
              stepNumber: 3,
              textAr: 'تترسب طبقات ملح كلوريد الصوديوم الصلب في قاع الأحواض، ويُجمع ويُعالج باليود ليصبح جاهزاً للاستهلاك.',
              textEn: 'Harvested raw salt is iodized and refined for consumer use.'
            }
          ],
          takeawayAr: 'طريقة التبخير هي الطريقة المثالية لفصل واستعادة المواد الصلبة الذائبة تماماً في السوائل.',
          takeawayEn: 'Evaporation is the definitive physical method to harvest dissolved solid solutes.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-10',
          questionAr: 'ما هي الطريقة العلمية المناسبة لفصل مخلوط من الزيت والماء؟',
          questionEn: 'What is the appropriate method to separate a mixture of oil and water?',
          optionsAr: ['قمع الفصل', 'ورقة الترشيح', 'المغناطيس', 'الغربلة'],
          optionsEn: ['Separating funnel', 'Filter paper', 'Magnet', 'Sieving'],
          correctIndex: 0,
          explanationAr: 'يُستخدم قمع الفصل لفصل سائلين غير ممتزجين ومختلفين في الكثافة كالزيت والماء.',
          explanationEn: 'A separating funnel segregates immiscible liquids with different densities.'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-6-assess',
      titleAr: 'اختبار تقييم الوحدة السادسة: المخاليط والمحاليل (منهج بخت الرضا)',
      titleEn: 'Unit 6 Assessment: Mixtures and Solutions (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-u6-q1',
          textAr: 'أي من الطرق التالية تُستخدم لفصل برادة الحديد عن مسحوق الكبريت أو الرمل؟',
          textEn: 'Which method separates iron filings from sulfur powder or sand?',
          optionsAr: ['الفصل المغناطيسي', 'التبخير', 'الترشيح', 'قمع الفصل'],
          optionsEn: ['Magnetic separation', 'Evaporation', 'Filtration', 'Separating funnel'],
          correctIndex: 0,
          conceptTestedAr: 'الفصل المغناطيسي',
          conceptTestedEn: 'Magnetic separation',
          explanationAr: 'ينجذب الحديد للمغناطيس بينما لا ينجذب الكبريت أو الرمل، مما يسهل فصلهما تماماً.',
          explanationEn: 'Ferromagnetic iron attracts to magnets while non-magnetic sulfur remains unattached.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u6-q2',
          textAr: 'لفصل مادة صلبة غير ذائبة ومعلقة في سائل (مثل الطمي المعلق في ماء النيل)، نستخدم طريقة:',
          textEn: 'To separate an insoluble solid suspended in liquid (e.g. Nile silt in water), we use:',
          optionsAr: ['الترشيح', 'التبخير', 'الغربلة', 'الفصل المغناطيسي'],
          optionsEn: ['Filtration', 'Evaporation', 'Sieving', 'Magnetic separation'],
          correctIndex: 0,
          conceptTestedAr: 'طريقة الترشيح',
          conceptTestedEn: 'Filtration technique',
          explanationAr: 'تحتجز ورقة الترشيح حبيبات الطمي وتسمح للماء الصافي بالمرور.',
          explanationEn: 'Porous filter paper retains insoluble suspended matter, yielding clear filtrate.',
          difficulty: 'medium'
        },
        {
          id: 'sd-p6-u6-q3',
          textAr: 'ما هي الطريقة التي تعتمد على التبخير ثم التكثيف لفصل سائلين متجانسين يختلفان في درجة الغليان؟',
          textEn: 'Which method uses evaporation followed by condensation to separate miscible liquids with different boiling points?',
          optionsAr: ['التقطير', 'الغربلة', 'قمع الفصل', 'الترويق'],
          optionsEn: ['Distillation', 'Sieving', 'Separating funnel', 'Decantation'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم التقطير',
          conceptTestedEn: 'Distillation mechanism',
          explanationAr: 'التقطير يبخر السائل الأقل في درجة الغليان ثم يكثفه بمكثف ليجمعه نقياً في وعاء آخر.',
          explanationEn: 'Distillation separates volatile liquids by differential vapor pressures and selective condensation.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة السابعة: الضوء ──
  {
    id: 'sd-p6-sci-7',
    order: 7,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة السابعة: الضوء',
    unitTitleEn: 'Unit 7: Light',
    lessonNumberAr: 'الدروس 1 إلى 5: طبيعة وانتشار وانعكاس وانكسار ورؤية الأجسام',
    lessonNumberEn: 'Lessons 1 to 5: Nature, Propagation, Reflection, Refraction & Colored Lights',
    titleAr: 'المحاضرة 7: الضوء: انتشاره وانعكاسه وانكساره وتحليله ورؤية الأجسام',
    titleEn: 'Lecture 7: Light: Propagation, Reflection, Refraction, Dispersion, and Color Perception',
    subtitleAr: 'طبيعة الضوء، انتشاره في خطوط مستقيمة، الثقوب الضيقة والصندوق المظلم، قوانين الانعكاس، انكسار الضوء، تحليل الضوء بالمنشور، ورؤية وخلط الأضواء الملونة',
    subtitleEn: 'Light nature, rectilinear propagation, pinhole cameras, reflection laws, refraction, prism dispersion, and color addition/subtraction.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تسطع أشعة الشمس عبر ثقب صغير في نافذة غرفتك أو بين سعف النخيل، ترى حزمة ضوئية مستقيمة كالسهم تسير في خط مستقيم تنير ذرات الغبار العالقة في الهواء! وتلك الظاهرة البسيطة كانت السبب في اختراع العالم المسلم العبقري الحسن بن الهيثم لـ (الصندوق المظلم / الكاميرا) الذي غيّر تاريخ البشرية! كيف يسير الضوء؟ ولماذا ينكسر قلم الرصاص عندما نضعه في كوب ماء؟ وكيف يخرج قوس قزح البديع بألوانه السبعة من شعاع ضوء أبيض واحد؟',
    warmupHookEn: 'Sunbeams through palm fronds reveal that light travels in straight lines. This foundational property led Ibn al-Haytham to invent the pinhole darkroom (camera obscura). Discover reflection, refraction, and rainbow dispersion.',
    learningOutcomesAr: [
      'أن يعرّف التلميذ الضوء كطاقة مرئية ويوضح انتشاره في خطوط مستقيمة في الأوساط الشفافة.',
      'أن يشرح كيفية تكون الصور المصغرة والمقلوبة من خلال الثقوب الضيقة وفكرة الكاميرا (الصندوق المظلم).',
      'أن يوضح ظاهرتي انعكاس الضوء وانكساره ويفسر انكسار القلم في الماء واختلاف سرعة الضوء بالأوساط.',
      'أن يشرح تحليل الضوء الأبيض عبر المنشور الزجاجي إلى ألوان الطيف السبعة.',
      'أن يفسر رؤية الأجسام بألوانها المختلفة ويوضح نتيجة خلط الأضواء الملونة.'
    ],
    learningOutcomesEn: [
      'Define light as visible energy propagating rectilinearly through transparent media.',
      'Explain inverted and diminished pinhole images and camera obscura principles.',
      'Differentiate reflection and refraction explaining apparent pencil bending in water.',
      'Demonstrate white light dispersion into the 7 spectral colors via prisms.',
      'Explain colored object vision and color mixing.'
    ],
    keyConceptsAr: [
      'الضوء طاقة مرئية وينتشر في خطوط مستقيمة',
      'الثقوب الضيقة تكون صوراً مقلوبة مصغرة (فكرة الصندوق المظلم / الكاميرا)',
      'انعكاس الضوء: ارتداد الأشعة عند اصطدامها بسطح عاكس كالمرايا',
      'انكسار الضوء: انحراف مسار الشعاع عند انتقاله بين وسطين شفافين مختلفين في الكثافة',
      'تحليل الضوء الأبيض بواسطة المنشور إلى ألوان الطيف السبعة',
      'رؤية الألوان: الجسم يعكس لونه ويمتص بقية الألوان'
    ],
    keyConceptsEn: [
      'Visible light rectilinear propagation',
      'Pinhole camera images (inverted, miniature)',
      'Specular and diffuse reflection',
      'Refraction at media density boundaries',
      'Prism spectral dispersion of white light',
      'Reflection and absorption of selective light frequencies'
    ],
    vocabulary: [
      {
        termAr: 'الضوء (Light)',
        termEn: 'Light',
        definitionAr: 'طاقة إشعاعية يمكن رؤيتها بالعين المجردة، وتُسمى بالقطاع المرئي أو الطيف المرئي.'
      },
      {
        termAr: 'انعكاس الضوء (Light Reflection)',
        termEn: 'Light Reflection',
        definitionAr: 'ارتداد حزم الأشعة الضوئية عندما تسقط على سطح عاكس ومصقول (مثل المرآة المستوية).'
      },
      {
        termAr: 'انكسار الضوء (Light Refraction)',
        termEn: 'Light Refraction',
        definitionAr: 'انحراف مسار الشعاع الضوئي عن خط سيره المستقيم عند انتقاله مائلاً بين وسطين شفافين مختلفين في الكثافة الضوئية (مثل الانتقال من الهواء إلى الماء أو الزجاج).'
      },
      {
        termAr: 'تحليل الضوء (Light Dispersion)',
        termEn: 'Light Dispersion',
        definitionAr: 'تفكيك الضوء الأبيض إلى ألوانه السبعة المكونة له (ألوان الطيف) عند مروره خلال منشور زجاجي ثلاثي.'
      },
      {
        termAr: 'ألوان الطيف السبعة (Spectrum Colors)',
        termEn: 'Spectrum Colors',
        definitionAr: 'الألوان المكونة للضوء الأبيض: الأحمر، البرتقالي، الأصفر، الأخضر، الأزرق، النيلي، والبنفسجي.'
      }
    ],
    summaryAr: 'خلاصة الوحدة السابعة: ينتشر الضوء في خطوط مستقيمة مما يفسر تكون الصور المقلوبة عبر الثقوب الضيقة وظلال الأجسام، ويرتد بالانعكاس وينحرف بالانكسار عند تغير الوسط الشفاف، ويتحلل الضوء الأبيض بواسطة المنشور إلى ألوان الطيف السبعة، وترى الأجسام باللون الذي تعكسه إلى أعيننا.',
    summaryEn: 'Summary of Unit 7: Rectilinear propagation underpins pinholes, shadows, and reflection; refraction governs media boundaries; prism disperses white light into 7 rainbow colors.',
    sections: [
      {
        titleAr: '1. طبيعة الضوء وانتشاره في خطوط مستقيمة والصندوق المظلم',
        titleEn: '1. Nature of Light, Rectilinear Propagation, and Camera Obscura',
        contentAr: `**أ - طبيعة الضوء وانتشاره:**
- **الضوء:** طاقة يمكن رؤيتها وتُعرف بـ **الطيف المرئي**.
- **خاصية الانتشار الأساسية:** ينتقل الضوء في الأوساط المادية الشفافة (كالماء والهواء والزجاج) وفي الفراغ في **خطوط مستقيمة**.
- **الأدلة العلمية على سير الضوء في خطوط مستقيمة:**
  1. تكون **الظلال** خلف الأجسام المعتمة عند حجبها للضوء.
  2. عدم تمكننا من رؤية ضوء شمعة عبر أنبوبة مثنية، بينما نراها بوضوح عبر أنبوبة مستقيمة.

**ب - الثقوب الضيقة وكاميرا التصوير (الصندوق المظلم):**
- عندما يمر الضوء الصادر عن جسم مضيء عبر ثقب ضيق جداً في حاجز معتم، تتكون له على الشاشة المقابلة **صورة مصغرة ومقلوبة**.
- **التفسير العلمي:** لأن الأشعة الضوئية تسير في خطوط مستقيمة؛ فالأشعة الصادرة من قمة الجسم تنفذ في خط مستقيم مائل لتصل إلى أسفل الشاشة، والأشعة الصادرة من قاعدة الجسم تمر لتصل لأعلى الشاشة.
- **تطبيق تقني:** هذه الظاهرة هي الفكرة العلمية الأساسية التي بنى عليها العالم المسلم **الحسن بن الهيثم** اختراع **الصندوق المظلم (الخزانة ذات الثقب)** والتي طُوّرت وصُنعت منها **كاميرات التصوير الفوتوغرافي الحديثة**.`,
        contentEn: 'Light travels rectilinearly forming shadows and producing inverted diminished images through pinholes, founding Ibn al-Haytham’s camera obscura.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: تجربة الصندوق المظلم بشمعة وورقة تتبع',
          titleEn: 'Interactive Example 1: Pinhole Camera Experiment with a Candle',
          steps: [
            {
              stepNumber: 1,
              textAr: 'نحضر صندوقاً معتماً ونثقب في أحد جوانبه ثقباً دقيقاً بإبرة، ونستبدل الجانب المقابل بورقة نصف شفافة (ورقة زبدة/تتبع).',
              textEn: 'Puncture a tiny pinhole on one box side and place translucent tracing paper opposite.'
            },
            {
              stepNumber: 2,
              textAr: 'نضع شمعة مضاءة أمام الثقب وننظر للشاشة النصف شفافة في غرفة مظلمة.',
              textEn: 'Position a lit candle before the pinhole inside a darkened room.'
            },
            {
              stepNumber: 3,
              textAr: 'المشاهدة: تظهر شعلة الشمعة على الشاشة مقلوبة رأساً على عقب ومصغرة في الحجم.',
              textEn: 'An inverted, miniature candle flame projects cleanly onto the translucent screen.'
            }
          ],
          takeawayAr: 'تكون الصورة المقلوبة يبرهن قطعياً أن الضوء ينتقل في خطوط مستقيمة لا تنحني من تلقاء نفسها.',
          takeawayEn: 'Inverted projection conclusively proves rectilinear travel of light rays.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-11',
          questionAr: 'ما هي مواصفات الصورة المتكونة للأجسام المضيئة عبر الثقوب الضيقة؟',
          questionEn: 'What are the characteristics of an image formed through a pinhole?',
          optionsAr: ['مصغرة ومقلوبة', 'مكبرة ومعتدلة', 'مساوية ومعكوسة الوضع', 'لا تتكون أي صورة'],
          optionsEn: ['Diminished and inverted', 'Magnified and upright', 'Equal and inverted', 'No image forms'],
          correctIndex: 0,
          explanationAr: 'بسبب سير الضوء في خطوط مستقيمة تتقاطع الأشعة عند مرورها بالثقب فتتكون صورة مقلوبة ومصغرة.',
          explanationEn: 'Straight rays crisscross at the aperture creating an inverted, diminished projection.'
        }
      },
      {
        titleAr: '2. انعكاس وانكسار وتحليل الضوء ورؤية الأجسام الملونة',
        titleEn: '2. Reflection, Refraction, Dispersion, and Color Vision',
        contentAr: `**أ - انعكاس الضوء:**
- هو ارتداد الأشعة الضوئية عندما تسقط على سطح عاكس ومصقول.
- *قانون الانعكاس:* زاوية السقوط تساوي زاوية الانعكاس. المرايا المستوية تعطي صوراً معتدلة ومعكوسة جانبياً ومساوية للجسم.

**ب - انكسار الضوء:**
- هو انحراف مسار الشعاع الضوئي عند انتقاله مائلاً بين وسطين شفافين مختلفين في الكثافة الضوئية (مثل الهواء والماء، أو الهواء والزجاج).
- *السبب:* اختلاف سرعة الضوء في الأوساط المختلفة؛ فسرعة الضوء في الهواء أكبر منها في الماء والزجاج.
- *ظواهر ناتجة عن الانكسار:*
  - رؤية القلم كأنه مكسور عند وضعه في كأس به ماء.
  - رؤية قاع حوض السباحة أو السمكة في النهر في موقع أقرب وأعلى من موقعها الحقيقي (العمق الظاهري).

**ج - تحليل الضوء ورؤية الألوان:**
1. **تحليل الضوء الأبيض:**
   - الضوء الأبيض الصادر من الشمس مركب من سبعة ألوان.
   - عند إمرار شعاع ضوء أبيض عبر **منشور زجاجي ثلاثي** يتحلل إلى ألوان الطيف السبعة بالترتيب:
     **الأحمر ← البرتقالي ← الأصفر ← الأخضر ← الأزرق ← النيلي ← البنفسجي**.
   - الضوء **الأحمر** هو الأقل انحرافاً (أقرب لرأس المنشور)، والضوء **البنفسجي** هو الأكثر انحرافاً وانكساراً (أقرب لقاعدة المنشور).
   - *قوس قزح:* ظاهرة طبيعية تظهر في السماء عند سقوط الأمطار وسطوع الشمس، حيث تعمل قطرات المطر العالقة كمنشورات زجاجية طبيعية تحلل ضوء الشمس.
2. **رؤية الأجسام الملونة:**
   - الأجسام المعتمة تمتص جميع ألوان الضوء الساقطة عليها وتعكس لونها فقط إلى أعيننا (الموز يظهر أصفراً لأنه يمتص كل الألوان ويعكس اللون الأصفر فقط).
   - الأجسام الشفافة تمتص كل الألوان وتنفذ لونها فقط (الزجاج الأحمر ينفذ الضوء الأحمر فقط).
   - الجسم الأبيض يعكس كل ألوان الطيف، والجسم الأسود يمتص جميع الألوان الساقطة عليه.`,
        contentEn: 'Reflection bounces light; refraction bends light across media speed variations; prisms disperse white light into 7 rainbow colors; objects absorb selective wavelengths and reflect their characteristic hue.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: تجربة انكسار قلم الرصاص في الماء',
          titleEn: 'Interactive Example 2: Pencil Refraction in Water Demonstration',
          steps: [
            {
              stepNumber: 1,
              textAr: 'نضع قلماً مستقيماً داخل كوب زجاجي شفاف يحتوي على ماء حتى منتصفه.',
              textEn: 'Place a straight pencil inside a transparent water glass half full.'
            },
            {
              stepNumber: 2,
              textAr: 'ننظر للقلم من الجانب عند السطح الفاصل بين الهواء والماء.',
              textEn: 'Observe the pencil from the side across the air-water boundary.'
            },
            {
              stepNumber: 3,
              textAr: 'المشاهدة والتفسير: يبدو القلم مكسوراً لأن الضوء الصادر من الجزء المغمور بالماء انكسر وانحرف عند خروجه إلى الهواء بسبب اختلاف السرعة.',
              textEn: 'The pencil appears bent because light bends exiting higher-density water into air.'
            }
          ],
          takeawayAr: 'انكسار الضوء ينشأ عن تغير سرعة الضوء بين الأوساط المادية الشفافة المختلفة.',
          takeawayEn: 'Refraction is caused by differential propagation speeds in distinct optical media.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-12',
          questionAr: 'أي من ألوان الطيف السبعة هو الأقل انحرافاً عند تحليله بالمنشور الزجاجي؟',
          questionEn: 'Which spectrum color experiences the least refraction through a glass prism?',
          optionsAr: ['الضوء الأحمر', 'الضوء البنفسجي', 'الضوء الأخضر', 'الضوء الأزرق'],
          optionsEn: ['Red light', 'Violet light', 'Green light', 'Blue light'],
          correctIndex: 0,
          explanationAr: 'الضوء الأحمر هو الأطول موجة والأقل انحرافاً ويكون قريباً من رأس المنشور، بينما البنفسجي هو الأكثر انحرافاً.',
          explanationEn: 'Red light bends the least (closest to apex); violet light bends the most.'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-7-assess',
      titleAr: 'اختبار تقييم الوحدة السابعة: الضوء (منهج بخت الرضا)',
      titleEn: 'Unit 7 Assessment: Light (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-u7-q1',
          textAr: 'ما هي الظاهرة البصرية المسؤولة عن رؤية القلم مكسوراً في كوب الماء؟',
          textEn: 'Which optical phenomenon causes a pencil to appear bent in a water glass?',
          optionsAr: ['انكسار الضوء', 'انعكاس الضوء', 'تحليل الضوء', 'امتصاص الضوء'],
          optionsEn: ['Light refraction', 'Light reflection', 'Light dispersion', 'Light absorption'],
          correctIndex: 0,
          conceptTestedAr: 'انكسار الضوء وتطبيقاته',
          conceptTestedEn: 'Light refraction manifestations',
          explanationAr: 'انكسار الضوء عند انتقاله من الماء إلى الهواء يغير مسار الأشعة فنرى القلم مكسوراً.',
          explanationEn: 'Refraction across the water-air interface bends rays, creating the broken illusion.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u7-q2',
          textAr: 'من هو العالم المسلم الذي درس الثقوب الضيقة واخترع الصندوق المظلم (أصل الكاميرا)؟',
          textEn: 'Which Muslim scientist studied pinholes and invented the camera obscura?',
          optionsAr: ['الحسن بن الهيثم', 'ابن النفيس', 'جابر بن حيان', 'الخوارزمي'],
          optionsEn: ['Al-Hasan Ibn al-Haytham', 'Ibn al-Nafis', 'Jabir ibn Hayyan', 'Al-Khwarizmi'],
          correctIndex: 0,
          conceptTestedAr: 'تاريخ علم البصريات وابن الهيثم',
          conceptTestedEn: 'History of optics and Ibn al-Haytham',
          explanationAr: 'العالم الحسن بن الهيثم هو مؤسس علم البصريات ومكتشف مبدأ الغرفة المظلمة والكاميرا.',
          explanationEn: 'Ibn al-Haytham pioneered modern optics and documented the camera obscura principles.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u7-q3',
          textAr: 'لماذا نرى التفاحة باللون الأحمر عند سقوط الضوء الأبيض عليها؟',
          textEn: 'Why does an apple appear red under white illumination?',
          optionsAr: [
            'لأنها تمتص جميع ألوان الطيف وتعكس اللون الأحمر فقط إلى أعيننا',
            'لأنها تكسر الضوء وتفرز صبغة حمراء مضيئة',
            'لأنها تعكس كل ألوان الطيف معاً',
            'لأنها تنفذ الضوء الأزرق والأخضر'
          ],
          optionsEn: [
            'It absorbs all spectral colors and reflects only red to our eyes',
            'It refracts light and secretes red fluorescent dyes',
            'It reflects all spectral colors simultaneously',
            'It transmits blue and green light'
          ],
          correctIndex: 0,
          conceptTestedAr: 'تفسير رؤية الأجسام المعتمة الملونة',
          conceptTestedEn: 'Color vision of opaque objects',
          explanationAr: 'الأجسام المعتمة تمتص كل ألوان الطيف الساقطة وتعكس لونها الخاص فقط.',
          explanationEn: 'Opaque pigmented objects selectively absorb other wavelengths, reflecting only red.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── الوحدة الثامنة: الأرض والفضاء ──
  {
    id: 'sd-p6-sci-8',
    order: 8,
    subject: 'PRIMARY_SCIENCE',
    gradeLevel: 'G6',
    country: 'SD',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'جمهورية السودان - العلوم الطبيعية (الصف السادس الابتدائي / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 6 Primary Natural Science (Bakht Al-Ruda)',
    ministryAr: 'وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)',
    ministryEn: 'Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: 'الوحدة الثامنة: الأرض والفضاء',
    unitTitleEn: 'Unit 8: Earth and Space',
    lessonNumberAr: 'الدروس 1 إلى 6: الليل والنهار، الظلال، القمر، الكسوف، والنظام الشمسي',
    lessonNumberEn: 'Lessons 1 to 6: Day & Night, Shadows, Moon Phases, Eclipses & Solar System',
    titleAr: 'المحاضرة 8: الأرض والفضاء والظواهر الكونية والنظام الشمسي',
    titleEn: 'Lecture 8: Earth, Space, Cosmic Phenomena, and the Solar System',
    subtitleAr: 'تعاقب الليل والنهار، الظلال وأطوالها، أطوار القمر، ظاهرتي كسوف الشمس وخسوف القمر، وكواكب المجموعة الشمسية الثمانية وترتيبها',
    subtitleEn: 'Day and night cycles, shadow dynamics, lunar phases, solar and lunar eclipses, and the 8 planets of the Solar System.',
    durationMinutes: 40,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,
    warmupHookAr: 'عندما تخرج ليلاً تحت سماء السودان الصافية وترفع بصرك نحو الفضاء، ترى القمر يتلألأ بأشكال متباينة: تارة هلالاً رفيعاً في مطلع الشهر العربي، وتارة بدراً مكتملاً يضيء الوديان، ثم يختفي في المحاق! وفي وضح النهار قد يحدث أمر مذهل: يظلم قرص الشمس فجأة وتنخفض الحرارة في ظاهرة الكسوف الكوني المهيب! كيف تتعاقب الأيام والشهور بدقة متناهية؟ وما هي الكواكب التي تشارك أرضنا الدوران حول شمسنا؟',
    warmupHookEn: 'Under the clear Sudanese night sky, the Moon transforms from a slender crescent to a brilliant full moon before vanishing. During rare solar eclipses, day turns into dusk. Explore cosmic choreography and our solar neighborhood.',
    learningOutcomesAr: [
      'أن يفسر التلميذ تعاقب الليل والنهار نتيجة دوران الأرض حول محورها كل 24 ساعة.',
      'أن يوضح حركة الظلال وتغير أطوالها واتجاهها تبعاً لموقع الشمس في السماء.',
      'أن يرتب أطوار القمر الشهرية (هلال أول، تربيع أول، بدر، تربيع ثانٍ، محاق).',
      'أن يقارن بين كسوف الشمس (القمر بين الشمس والأرض) وخسوف القمر (الأرض بين الشمس والقمر).',
      'أن يعدد كواكب النظام الشمسي الثمانية بالترتيب حسب بعدها عن الشمس ويحدد موقع كوكب الأرض.'
    ],
    learningOutcomesEn: [
      'Explain diurnal day-night cycles from Earth’s 24-hour axial rotation.',
      'Analyze shadow length variations driven by solar elevation.',
      'Sequence monthly lunar phases: crescent, quarter, full moon, waning phases.',
      'Contrast solar eclipses (Moon casting shadow on Earth) with lunar eclipses (Earth shadow on Moon).',
      'List the 8 solar planets in orbital distance order, locating Earth as 3rd.'
    ],
    keyConceptsAr: [
      'دوران الأرض حول محورها كل 24 ساعة يسبب تعاقب الليل والنهار',
      'حركة وتغير أطوال الظلال (طويلة صباحاً ومساءً وقصيرة وقت الظهيرة)',
      'أطوار القمر الناتجة عن دورانه حول الأرض وتغير الجزء المضاء المواجه لنا',
      'كسوف الشمس (القمر يحجب الشمس) وخسوف القمر (الأرض تحجب ضوء الشمس عن القمر)',
      'كواكب النظام الشمسي الثمانية: عطارد، الزهرة، الأرض، المريخ، المشتري، زحل، أورانوس، نبتون'
    ],
    keyConceptsEn: [
      'Earth’s axial rotation and diurnal cycle',
      'Shadow length variation with solar angle',
      'Lunar phase sequence and orbital geometry',
      'Solar eclipse vs lunar eclipse geometries',
      'The 8 Solar System planets: Mercury to Neptune'
    ],
    vocabulary: [
      {
        termAr: 'محور الأرض (Earth’s Axis)',
        termEn: 'Earth’s Axis',
        definitionAr: 'خط وهمي يمر بمركز الأرض من القطب الشمالي إلى القطب الجنوبي، تدور حوله الأرض من الغرب إلى الشرق مرة كل 24 ساعة مسببة تعاقب الليل والنهار.'
      },
      {
        termAr: 'الظل (Shadow)',
        termEn: 'Shadow',
        definitionAr: 'منطقة مظلمة تتكون خلف الجسم المعتم عندما يعترض مسار خطوط الضوء المستقيمة.'
      },
      {
        termAr: 'أطوار القمر (Moon Phases)',
        termEn: 'Moon Phases',
        definitionAr: 'المراحل والأشكال المختلفة التي يظهر بها القمر للمشاهد من الأرض خلال شهره القمري (مثل الهلال، التربيع، والبدر).'
      },
      {
        termAr: 'كسوف الشمس (Solar Eclipse)',
        termEn: 'Solar Eclipse',
        definitionAr: 'ظاهرة فلكية تحدث عندما يقع القمر تماماً بين الشمس والأرض على استقامة واحدة، فيحجب ضوء الشمس ويلقي بظله على سطح الأرض نهاراً.'
      },
      {
        termAr: 'خسوف القمر (Lunar Eclipse)',
        termEn: 'Lunar Eclipse',
        definitionAr: 'ظاهرة فلكية تحدث عندما تقع الأرض بين الشمس والقمر على خط مستقيم واحد، فتحجب الأرض أشعة الشمس الساقطة على القمر ليلاً.'
      }
    ],
    summaryAr: 'خلاصة الوحدة الثامنة والأخيرة: تنتظم حركة الأرض والفضاء في نظام كوني بالغ الإعجاز؛ فدوران الأرض حول محورها ينتج الليل والنهار ويحرك الظلال، ودوران القمر حول الأرض يُظهر أطواره الشهرية ويسبب ظاهرتي الكسوف والخسوف، وتدور الأرض كثالث كواكب المجموعة الشمسية الثمانية حول الشمس.',
    summaryEn: 'Summary of Unit 8: The cosmos harmonizes via Earth’s axial rotation, shadow shifts, lunar phase sequences, syzygy eclipses, and the 8-planet heliocentric order.',
    sections: [
      {
        titleAr: '1. تعاقب الليل والنهار وحركة الظلال وأطوار القمر',
        titleEn: '1. Diurnal Day-Night Cycles, Shadow Shifts, and Lunar Phases',
        contentAr: `**أ - تعاقب الليل والنهار:**
- تدور الأرض حول محورها (من الغرب إلى الشرق) دورة كاملة كل **24 ساعة** (اليوم الكامل).
- النصف المواجه للشمس يكون مضيئاً ويسوده **النهار**، بينما النصف الآخر البعيد عن الشمس يكون في ظلام دامس ويسوده **الليل**.
- وبسبب هذا الدوران المستمر، يتعاقب الليل والنهار بانتظام واستمرار.

**ب - الظلال وتغير أطوالها:**
- يتكون الظل لأن الضوء يسير في خطوط مستقيمة ولا ينحني حول الأجسام المعتمة.
- **تغير طول الظل خلال النهار:**
  1. *في الصباح الباكر:* تكون الشمس منخفضة قريبة من الأفق في الشرق، فيكون الظل **طويلاً جداً** وممتداً نحو الغرب.
  2. *في وقت الظهيرة (منتصف النهار):* تكون الشمس في كبد السماء عمودية أو شبه عمودية فوق الرؤوس، فيكون الظل **أقصر ما يمكن**.
  3. *في فترة العصر والمساء:* تنخفض الشمس نحو الغرب، فيعود الظل **طويلاً** ممتداً نحو الشرق.
- استغل الإنسان قديماً هذه الظاهرة في صناعة **المزولة الشمسية** لتحديد أوقات الصلاة والعمل.

**ج - أطوار القمر:**
- القمر كوكب تابع معتم يعكس ضوء الشمس الساقط عليه، ويدور حول الأرض مرة كل **شهر قمري (نحو 29.5 يوماً)**.
- بسبب تغير موقعه بالنسبة للشمس والأرض، نرى أجزاء مختلفة من نصفه المضاء في أشكال تسمى **أطوار القمر**:
  1. **المحاق (الميلاد):** يقع القمر بين الأرض والشمس، ويكون وجهه المظلم مواجهاً للأرض فلا نراه.
  2. **الهلال الأول:** يظهر في بداية الشهر العربي كقوس نحيف مضيء في السماء الغربية بعد الغروب.
  3. **التربيع الأول:** بعد أسبوع، نرى نصف قرص القمر مضيئاً.
  4. **الأحدب الأول:** يزداد الجزء المضاء عن النصف.
  5. **البدر:** في منتصف الشهر العربي (ليالي 14 و 15)؛ يصبح قرص القمر كاملاً ومضيئاً بالكامل.
  6. **الأحدب الثاني ثم التربيع الثاني ثم الهلال الأخير:** يتناقص الجزء المضاء تدريجياً حتى يعود محاقاً لتبدأ دورة شهرية جديدة.`,
        contentEn: 'Day and night arise from Earth’s 24h rotation; shadows lengthen at sunrise/sunset and shorten at solar noon; lunar orbital geometry shapes monthly phase cycles.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: استنتاج الوقت من اتجاه وطول الظل في فناء المدرسة',
          titleEn: 'Interactive Example 1: Deducing Time from Schoolyard Shadow Length',
          steps: [
            {
              stepNumber: 1,
              textAr: 'نغرس عصا خشبية مستقيمة عمودياً في أرض فناء المدرسة الرملية المكشوفة في الصباح الباكر.',
              textEn: 'Erect a vertical wooden stake in the sunny schoolyard in early morning.'
            },
            {
              stepNumber: 2,
              textAr: 'عند الساعة 8 صباحاً: نلاحظ أن ظل العصا طويل ويتجه غرباً (عكس موقع شروق الشمس).',
              textEn: 'At 8 AM, the shadow is elongated pointing westward.'
            },
            {
              stepNumber: 3,
              textAr: 'عند الساعة 12 ظهراً: ينكمش الظل لأقصر طول تحت العصا مباشرة دلالة على حلول وقت الظهر.',
              textEn: 'At noon, the shadow shrinks to minimum length directly beneath the stick.'
            }
          ],
          takeawayAr: 'كلما زاد ارتفاع الشمس في السماء قل طول الظل، وكلما مالت نحو الأفق استطال الظل.',
          takeawayEn: 'Higher solar altitudes create shorter shadows; lower angles produce longer shadows.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-13',
          questionAr: 'متى يكون ظل الأجسام في أقصر طول له خلال ساعات النهار المشمس؟',
          questionEn: 'When is an object’s shadow shortest during daylight hours?',
          optionsAr: ['وقت الظهيرة (منتصف النهار)', 'في الصباح الباكر عند الشروق', 'في وقت الغروب', 'في منتصف الليل'],
          optionsEn: ['At solar noon', 'At early morning sunrise', 'At sunset', 'At midnight'],
          correctIndex: 0,
          explanationAr: 'في وقت الظهيرة تكون الشمس عمودية أو شبه عمودية فوق الأجسام، فيسقط الظل تحتها ويكون في أقصر أطواله.',
          explanationEn: 'At midday the sun reaches zenith, casting the most compact vertical shadows.'
        }
      },
      {
        titleAr: '2. الكسوف والخسوف والنظام الشمسي وكواكبه الثمانية',
        titleEn: '2. Eclipses and the Eight Planets of the Solar System',
        contentAr: `**أ - ظاهرة الكسوف والخسوف:**

1. **كسوف الشمس (Solar Eclipse):**
   - يحدث نهاراً عندما يقع **القمر بين الشمس والأرض على خط مستقيم واحد**.
   - يحجب القمر أشعة الشمس كلياً أو جزئياً ويلقي بظله على بقعة من الأرض.
   - *الأنواع:* كسوف كلي (يظلم النهار تماماً وتظهر هالة الشمس)، أو كسوف جزئي، أو كسوف حلقي.
   - *إرشاد وقائي هام:* يُحظر تماماً النظر بالعين المجردة للشمس وقت الكسوف لمنع تلف شبكية العين والعمى.

2. **خسوف القمر (Lunar Eclipse):**
   - يحدث ليلاً في منتصف الشهر القمري (عندما يكون القمر بدراً) حين تقع **الأرض بين الشمس والقمر على استقامة واحدة**.
   - تحجب الأرض ضوء الشمس عن القمر فيدخل القمر في منطقة ظل الأرض.
   - *الأنواع:* خسوف كلي (يكتسي القمر لوناً أحمر نحاسياً داكناً) أو خسوف جزئي.
   - يمكن النظر إلى خسوف القمر بالعين المجردة بأمان تام دون أي خطر.

**ب - النظام الشمسي (المجموعة الشمسية):**
- يتكون النظام الشمسي من نجم مركزي عملاق هو **الشمس**، وتدور حوله **ثمانية كواكب** في مدارات بيضاوية إهليلجية بفعل الجاذبية، بالإضافة إلى الأقمار والكويكبات والمذنبات.
- **ترتيب الكواكب الثمانية حسب بعدها عن الشمس (من الأقرب للأبعد):**
  1. **عطارد:** أقرب الكواكب للشمس وأصغرها، شديد الحرارة نهاراً وشديد البرودة ليلاً.
  2. **الزهرة:** ثاني الكواكب، وألمع أجرام السماء، محاط بغلاف جوي كثيف من ثاني أكسيد الكربون.
  3. **الأرض:** كوكبنا الجميل، ثالث الكواكب بعداً؛ يتميز بوجود الماء السائل والغلاف الجوي الغني بالأكسجين ومناسب لحياة الكائنات الحية.
  4. **المريخ:** الكوكب الرابع، يُسمى (الكوكب الأحمر) لغنى صخوره بأكاسيد الحديد.
  5. **المشتري:** الكوكب الخامس، وهو **أكبر كواكب النظام الشمسي حجماً** وكتلة (عملاق غازي).
  6. **زحل:** الكوكب السادس، يشتهر بـ **حلقاته الملونة البديعة** المكونة من قطع الثلج والصخور.
  7. **أورانوس:** الكوكب السابع، كوكب جليدي عملاق ذو لون أزرق مخضر.
  8. **نبتون:** الكوكب الثامن والأخير، أبعد الكواكب وأشدها برودة وعواصف، ويُعرف بـ (الكوكب الأزرق).`,
        contentEn: 'Eclipses occur during planetary syzygies: solar eclipses place Moon between Earth/Sun; lunar eclipses place Earth between Sun/Moon. The 8 planets ordered from Mercury to Neptune.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: التمييز بين ترتيب الأجرام في الكسوف والخسوف',
          titleEn: 'Interactive Example 2: Distinguishing Celestial Alignment in Eclipses',
          steps: [
            {
              stepNumber: 1,
              textAr: 'كسوف الشمس: الترتيب هو (شمس ← قمر ← أرض). القمر في المنتصف يحجب الشمس نهاراً.',
              textEn: 'Solar eclipse geometry: Sun -> Moon -> Earth (Moon in center blocking sun).'
            },
            {
              stepNumber: 2,
              textAr: 'خسوف القمر: الترتيب هو (شمس ← أرض ← قمر). الأرض في المنتصف تحجب ضوء الشمس عن القمر ليلاً.',
              textEn: 'Lunar eclipse geometry: Sun -> Earth -> Moon (Earth in center casting shadow on moon).'
            },
            {
              stepNumber: 3,
              textAr: 'السلامة: ارتداء نظارات خاصة للكسوف ضرورة لحماية العين، بينما الخسوف آمن تماماً للرؤية بالعين.',
              textEn: 'Eye safety requires ISO certified filters for solar viewing; lunar eclipses are safe.'
            }
          ],
          takeawayAr: 'في الكسوف يحجب القمر الشمس، وفي الخسوف تحجب الأرض ضوء الشمس عن القمر.',
          takeawayEn: 'In solar eclipses Moon occludes the sun; in lunar eclipses Earth shadows the moon.'
        },
        formativeCheck: {
          id: 'sd-p6-fc-14',
          questionAr: 'ما هو ترتيب الأجرام السماوية أثناء حدوث ظاهرة كسوف الشمس؟',
          questionEn: 'What is the alignment of celestial bodies during a solar eclipse?',
          optionsAr: [
            'الشمس ← القمر ← الأرض (القمر في المنتصف)',
            'الشمس ← الأرض ← القمر (الأرض في المنتصف)',
            'القمر ← الشمس ← الأرض (الشمس في المنتصف)',
            'الأرض ← عطارد ← الشمس'
          ],
          optionsEn: [
            'Sun -> Moon -> Earth (Moon in center)',
            'Sun -> Earth -> Moon (Earth in center)',
            'Moon -> Sun -> Earth (Sun in center)',
            'Earth -> Mercury -> Sun'
          ],
          correctIndex: 0,
          explanationAr: 'في كسوف الشمس يقع القمر بين الشمس والأرض على خط مستقيم واحد فيحجب ضوء الشمس عن سكان الأرض.',
          explanationEn: 'During a solar eclipse, the Moon interposes between the Sun and Earth.'
        }
      }
    ],
    assessment: {
      id: 'sd-p6-sci-8-assess',
      titleAr: 'اختبار تقييم الوحدة الثامنة: الأرض والفضاء والنظام الشمسي (منهج بخت الرضا)',
      titleEn: 'Unit 8 Assessment: Earth, Space, and Solar System (Bakht Al-Ruda Syllabus)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-p6-u8-q1',
          textAr: 'ما هو سبب حدوث ظاهرة تعاقب الليل والنهار على كوكب الأرض؟',
          textEn: 'What causes the alternation of day and night on planet Earth?',
          optionsAr: [
            'دوران الأرض حول محورها أمام الشمس كل 24 ساعة',
            'دوران الأرض حول الشمس كل 365 يوماً',
            'دوران القمر حول كوكب الأرض كل شهر',
            'حركة الشمس حول مركز المجرة'
          ],
          optionsEn: [
            'Earth rotating on its axis before the sun every 24 hours',
            'Earth revolving around the sun every 365 days',
            'Moon revolving around Earth each month',
            'Sun moving around the galactic core'
          ],
          correctIndex: 0,
          conceptTestedAr: 'سبب تعاقب الليل والنهار',
          conceptTestedEn: 'Cause of day and night alternation',
          explanationAr: 'ينشأ تعاقب الليل والنهار عن دوران الأرض حول محورها من الغرب للشرق دورة كاملة كل 24 ساعة.',
          explanationEn: 'Earth’s 24-hour diurnal axial rotation continuously exposes opposing hemispheres to sunlight.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u8-q2',
          textAr: 'ما هو الترتيب الصحيح لكوكب الأرض من حيث البعد عن الشمس في النظام الشمسي؟',
          textEn: 'What is Earth’s orbital position in distance from the Sun?',
          optionsAr: ['الكوكب الثالث', 'الكوكب الأول', 'الكوكب الخامس', 'الكوكب الأخير الثامن'],
          optionsEn: ['The 3rd planet', 'The 1st planet', 'The 5th planet', 'The 8th planet'],
          correctIndex: 0,
          conceptTestedAr: 'موقع كوكب الأرض في النظام الشمسي',
          conceptTestedEn: 'Earth position in the solar system',
          explanationAr: 'ترتيب الكواكب: 1. عطارد، 2. الزهرة، 3. الأرض، 4. المريخ، 5. المشتري، 6. زحل، 7. أورانوس، 8. نبتون.',
          explanationEn: 'Earth orbits as the third planet, located between Venus and Mars in the habitable zone.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u8-q3',
          textAr: 'ما هو أكبر كواكب النظام الشمسي حجماً وكتلة؟',
          textEn: 'Which is the largest and most massive planet in the Solar System?',
          optionsAr: ['كوكب المشتري', 'كوكب عطارد', 'كوكب الأرض', 'كوكب المريخ'],
          optionsEn: ['Jupiter', 'Mercury', 'Earth', 'Mars'],
          correctIndex: 0,
          conceptTestedAr: 'أكبر كواكب النظام الشمسي',
          conceptTestedEn: 'Largest planet in solar system',
          explanationAr: 'المشتري هو عملاق غازي وأكبر كواكب النظام الشمسي حجماً على الإطلاق.',
          explanationEn: 'Jupiter is the largest planetary body, possessing greater mass than all other planets combined.',
          difficulty: 'easy'
        },
        {
          id: 'sd-p6-u8-q4',
          textAr: 'ما هو الطور الذي يكون فيه القمر بدراً كاملاً ومضيئاً بالكامل؟',
          textEn: 'In which phase does the moon appear as a fully illuminated complete disc?',
          optionsAr: [
            'طور البدر في منتصف الشهر القمري (ليلة 14)',
            'طور المحاق في أول الشهر',
            'طور التربيع الأول بعد 3 أيام',
            'طور الهلال الأخير'
          ],
          optionsEn: [
            'Full Moon phase in mid lunar month (night 14)',
            'New Moon at month start',
            'First Quarter after 3 days',
            'Waning crescent'
          ],
          correctIndex: 0,
          conceptTestedAr: 'طور البدر',
          conceptTestedEn: 'Full Moon phase',
          explanationAr: 'يكون القمر بدراً كاملاً في منتصف الشهر القمري عندما يكون وجهه المواجه للأرض مضاءً بالكامل بأشعة الشمس.',
          explanationEn: 'At mid-month (full moon), the entire Earth-facing hemisphere is fully illuminated.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
