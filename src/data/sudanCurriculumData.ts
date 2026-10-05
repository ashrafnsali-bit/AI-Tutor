import type { Lecture, LectureSection, Assessment } from '../types';
import { SUDAN_PRIMARY_SCIENCE_G6_LECTURES } from './sudanPrimaryScience6CurriculumData';
import { SUDAN_HIGH_GEOGRAPHY_G10_LECTURES } from './sudanHighGeography10CurriculumData';
import { SUDAN_HIGH_HISTORY_G10_LECTURES } from './sudanHighHistory10CurriculumData';

export { SUDAN_PRIMARY_SCIENCE_G6_LECTURES, SUDAN_HIGH_GEOGRAPHY_G10_LECTURES, SUDAN_HIGH_HISTORY_G10_LECTURES };

// ============================================================================
// OFFICIAL REPUBLIC OF SUDAN NATIONAL CURRICULUM (المنهج القومي السوداني المحدث)
// Federal Ministry of Education - National Curriculum Center (Bakht Al-Ruda)
// وزارة التربية والتعليم الاتحادية - المركز القومي للمناهج والبحث التربوي (بخت الرضا)
// سلم التعليم القومي (6-3-3): الابتدائي - المتوسط - الثانوي
// ============================================================================

// Helper to create Sudanese lecture structure
function createSudanLecture(params: {
  id: string;
  order: number;
  subject: any;
  gradeLevel: any;
  gradeLevelNameAr: string;
  gradeLevelNameEn: string;
  titleAr: string;
  titleEn: string;
  subtitleAr: string;
  subtitleEn: string;
  unitTitleAr: string;
  unitTitleEn: string;
  lessonNumberAr: string;
  lessonNumberEn: string;
  warmupHookAr: string;
  warmupHookEn: string;
  summaryAr: string;
  summaryEn: string;
  learningOutcomesAr: string[];
  keyConceptsAr: string[];
  vocabulary: { termAr: string; termEn: string; definitionAr: string }[];
  sections: LectureSection[];
  assessment: Assessment;
  durationMinutes?: number;
}): Lecture {
  return {
    id: params.id,
    order: params.order,
    titleAr: params.titleAr,
    titleEn: params.titleEn,
    subtitleAr: params.subtitleAr,
    subtitleEn: params.subtitleEn,
    durationMinutes: params.durationMinutes || 35,
    isLocked: params.order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: params.subject,
    gradeLevel: params.gradeLevel,
    educationType: 'PUBLIC',
    gradeLevelNameAr: params.gradeLevelNameAr,
    gradeLevelNameEn: params.gradeLevelNameEn,
    ministryAr: 'وزارة التربية والتعليم الاتحادية - جمهورية السودان',
    ministryEn: 'Federal Ministry of Education - Republic of Sudan',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Second Semester',
    unitTitleAr: params.unitTitleAr,
    unitTitleEn: params.unitTitleEn,
    lessonNumberAr: params.lessonNumberAr,
    lessonNumberEn: params.lessonNumberEn,
    warmupHookAr: params.warmupHookAr,
    warmupHookEn: params.warmupHookEn,
    learningOutcomesAr: params.learningOutcomesAr,
    learningOutcomesEn: params.learningOutcomesAr.map(o => 'Understand Sudanese curriculum syllabus objective: ' + o),
    keyConceptsAr: params.keyConceptsAr,
    keyConceptsEn: params.keyConceptsAr,
    vocabulary: params.vocabulary,
    summaryAr: params.summaryAr,
    summaryEn: params.summaryEn,
    sections: params.sections,
    assessment: params.assessment
  };
}

// ────────────────────────────────────────────────────────────────────────────
// 1. العلوم العامة: الصف الثالث متوسط (G9 - شهادة المرحلة المتوسطة)
// ────────────────────────────────────────────────────────────────────────────
export const SUDAN_MIDDLE_SCIENCE_G9_LECTURES: Lecture[] = [
  createSudanLecture({
    id: 'sd-m9-sci-1',
    order: 1,
    subject: 'GENERAL_SCIENCE',
    gradeLevel: 'G9',
    gradeLevelNameAr: 'جمهورية السودان - العلوم العامة للمرحلة المتوسطة (الصف الثالث متوسط / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 9 Intermediate General Science',
    titleAr: 'المحاضرة 1: الكهرباء الساكنة والتيار الكهربي وقانون أوم والدوائر الكهربائية',
    titleEn: "Lecture 1: Static Electricity, Electric Current, Ohm's Law & Circuit Analysis",
    subtitleAr: 'الشحنات الكهربائية الساكنة وطرق الشحن، شدة التيار وفرق الجهد، قانون أوم، وتوصيل المقاومات على التوالي والتوازي في المنازل السودانية',
    subtitleEn: "Master static electric charges, charging methods, current, voltage, Ohm's law, and series vs parallel resistor combinations aligned with the Sudanese national syllabus.",
    unitTitleAr: 'الوحدة الأولى: الكهرباء الساكنة والتيار الكهربي وقانون أوم',
    unitTitleEn: "Unit 1: Static Electricity, Current & Ohm's Law",
    lessonNumberAr: 'الدرس 1: الشحنات والتيار وقانون أوم والدوائر',
    lessonNumberEn: 'Lesson 1: Electric Charges, Current & Circuits',
    warmupHookAr: 'في مواسم خريف السودان، تضيء سماء الخرطوم والولايات بصواعق البرق الخاطفة! تلك الصواعق ليست إلا تفريغاً هائلاً لشحنات كهربائية ساكنة تراكمت بين السحب والأرض بفعل احتكاك قطرات الماء والرياح. وفي منازلنا، عندما نضغط زر الإضاءة، تتدفق مليارات الإلكترونات في لحظة واحدة لتنير الغرفة. كيف استطاع العالم الألماني جورج سيمون أوم ضبط العلاقة السحرية بين الجهد والتيار والمقاومة؟ وكيف تُوصل أجهزتنا المنزلية في السودان لتعمل بأمان تام دون انقطاع؟',
    warmupHookEn: "Lightning during the Sudanese rainy season is a massive discharge of static electricity accumulated between clouds and the earth. How did Georg Ohm discover the fundamental relationship connecting voltage, current, and resistance?",
    learningOutcomesAr: [
      'أن يوضح الطالب مفهوم الشحنات الكهربائية الساكنة وقانون التجاذب والتنافر وطرق الشحن (الدلك، اللمس، والتأثير).',
      'أن يعرّف شدة التيار الكهربي (ت = ش / ز) وفرق الجهد الكهربي ووحدات القياس الدولية (الأمبير، الكولوم، الفولت).',
      'أن يطبق قانون أوم (جـ = ت × م) في حل المسائل الحسابية وحساب فرق الجهد وشدة التيار والمقاومة.',
      'أن يقارن بين توصيل المقاومات على التوالي والتوازي ويفسر سبب توصيل الأجهزة في المنازل السودانية على التوازي.'
    ],
    keyConceptsAr: [
      'الشحنات الساكنة وطرق الشحن والتفريغ الكهربائي',
      'شدة التيار وفرق الجهد ووحدات القياس (أمبير وفولت)',
      'قانون أوم وحساب المقاومة الكهربائية',
      'توصيل المقاومات على التوالي والتوازي وتطبيقات الدوائر المنزلية'
    ],
    vocabulary: [
      { termAr: 'الشحنة الكهربائية (Electric Charge)', termEn: 'Electric Charge', definitionAr: 'خاصية فيزيائية للمادة توجد في نوعين: موجبة (كالبروتونات) وسالبة (كالإلكترونات)، وتقاس بوحدة الكولوم.' },
      { termAr: 'شدة التيار الكهربي (Electric Current - I)', termEn: 'Electric Current', definitionAr: 'كمية الشحنة الكهربائية التي تعبر مقطعاً عرضياً من الموصل في الثانية الواحدة: ت = ش / ز، ووحدتها الأمبير.' },
      { termAr: 'فرق الجهد الكهربي (Potential Difference - V)', termEn: 'Potential Difference', definitionAr: 'الشغل المبذول لنقل وحدة الشحنات الكهربائية (1 كولوم) بين نقطتين في الدائرة، ويقاس بوحدة الفولت.' },
      { termAr: "قانون أوم (Ohm's Law)", termEn: "Ohm's Law", definitionAr: 'ينص على أن شدة التيار المار في موصل معدني تتناسب طردياً مع فرق الجهد بين طرفيه عند ثبوت درجة الحرارة: جـ = ت × م.' },
      { termAr: 'المقاومة المكافئة (Equivalent Resistance)', termEn: 'Equivalent Resistance', definitionAr: 'مقاومة مفردة تحدث نفس الأثر في شدة التيار وفرق الجهد الذي تحدثه مجموعة المقاومات المتصلة معاً في الدائرة.' }
    ],
    summaryAr: 'ملخص علوم الصف الثالث المتوسط بالسودان: تناول هذا الدرس دراسة الكهرباء الساكنة وقانون الشحنات، شدة التيار الكهربي (ت = ش / ز)، فرق الجهد ووحدة الفولت، قانون أوم (جـ = ت × م)، والمقارنة الحسابية والفيزيائية بين توصيل المقاومات على التوالي والتوازي وأهميته في تغذية المنازل بالكهرباء.',
    summaryEn: "Summary for Sudan Grade 9 Science: Explored electrostatics, charging mechanisms, current equation (I = Q/t), voltage, Ohm's law (V = I * R), and mathematical analysis of series vs parallel circuits in real-world households.",
    sections: [
      {
        titleAr: '1. الشحنات الكهربائية الساكنة وقانون الشحنات وطرق الشحن',
        titleEn: '1. Electrostatic Charges, the Law of Charges & Charging Methods',
        contentAr: 'الكهرباء الساكنة (Electrostatics) هي دراسة الشحنات الكهربائية المستقرة على أسطح الأجسام. تتكون المادة من ذرات متعادلة كهربائياً تحتوي على نواة موجبة تدور حولها إلكترونات سالبة. عند دلك مادتين، تنتقل الإلكترونات من مادة لأخرى. الجسم الذي يفقد إلكترونات يصبح موجب الشحنة، والجسم الذي يكتسب إلكترونات يصبح سالب الشحنة. قانون الشحنات الأساسي: الشحنات المتشابهة تتنافر والشحنات المختلفة تتجاذب. طرق شحن الأجسام: 1) الشحن بالدلك (كشحن ساق الأبونيت بالصوف أو ساق الزجاج بالحرير)، 2) الشحن باللمس (التوصيل)، 3) الشحن بالتأثير (الحث الكهربائي دون تلامس مباشر). الكشاف الكهربائي هو جهاز علمي يُستخدم للكشف عن الشحنات ونوعها، وتُستخدم مانعات الصواعق على أسطح المنشآت بالسودان لتفريغ شحنات السحب الرعدية بأمان إلى باطن الأرض.',
        contentEn: 'Electrostatics studies stationary charges on materials. Neutral atoms exchange electrons via friction; gaining electrons yields negative charge while losing electrons yields positive charge.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 1: شحن ساق الإبونيت بالصوف وتحديد نوع الشحنة',
          titleEn: 'Interactive Example 1: Charging Ebonite Rod with Wool',
          equation: 'الشحنة المكتسبة = عدد الإلكترونات المنقولة × شحنة الإلكترون (ش = ن × ش_إ)',
          steps: [
            { stepNumber: 1, textAr: 'عند دلك ساق الإبونيت بقطعة صوف، تنتقل الإلكترونات السالبة من الصوف إلى ساق الإبونيت.', textEn: 'Frictional contact transfers electrons from wool to the ebonite rod.' },
            { stepNumber: 2, textAr: 'تكتسب ساق الإبونيت شحنة سالبة، بينما تصبح قطعة الصوف موجبة الشحنة بسبب فقدان الإلكترونات.', textEn: 'The rod becomes negatively charged; wool becomes positively charged.' },
            { stepNumber: 3, textAr: 'عند تقريب ساق الإبونيت المشحونة من قرص كشاف كهربائي متعادل بالتأثير، تتنافر ورقتي الكشاف دلالة على وجود الشحنة.', textEn: 'Approaching the rod to an electroscope repels the gold leaves, proving charge presence.' }
          ],
          takeawayAr: 'الشحنات لا تفنى ولا تستحدث من العدم، بل تنتقل الإلكترونات من جسم لآخر طبقاً لمبدأ حفظ الشحنة الكهربائية.',
          takeawayEn: 'Charge is conserved; electrons are merely transferred from one body to another.'
        },
        formativeCheck: {
          id: 'sd-fc-1',
          questionAr: 'ماذا يحدث عند تقريب جسمين يحملان شحنتين كهربائيتين موجبتين من بعضهما؟',
          questionEn: 'What happens when two positively charged bodies are brought close together?',
          optionsAr: ['يتنافران بقوة تباعد كهربائية', 'يتجاذبان بقوة اقتراب', 'يلغي أحدهما شحنة الآخر دون تنافر', 'لا يتأثر أي منهما'],
          optionsEn: ['They repel each other', 'They attract each other', 'Neutralize instantly', 'No interaction'],
          correctIndex: 0,
          explanationAr: 'طبقاً لقانون الشحنات الأساسي: الشحنات المتشابهة (موجب مع موجب أو سالب مع سالب) تتنافر، بينما الشحنات المختلفة تتجاذب.',
          explanationEn: 'According to the fundamental law of charges, like charges repel and opposite charges attract.'
        }
      },
      {
        titleAr: '2. التيار الكهربي وشدة التيار وفرق الجهد ووحدات القياس',
        titleEn: '2. Electric Current, Potential Difference & SI Measurement Units',
        contentAr: 'التيار الكهربي هو فيض من الشحنات الكهربائية الحرة (الإلكترونات) المتدفقة عبر موصل معدني. شدة التيار الكهربي (ت) هي كمية الشحنة الكهربائية (ش) التي تعبر مقطعاً عرضياً من الموصل في وحدة الزمن (ز): القانون: ت = ش / ز، حيث تقاس الشحنة بالكولوم، والزمن بالثواني، وشدة التيار بالأمبير (Ampere). الأمبير الواحد = كولوم واحد / ثانية واحدة. يُقاس التيار في الدوائر بجهاز الأميتر (Ammeter) الذي يُوصل دائماً على التوالي. فرق الجهد الكهربي (جـ) هو الشغل المبذول لنقل وحدة الشحنات (1 كولوم) بين طرفي الموصل: جـ = الشغل / ش، ويقاس بوحدة الفولت (Volt) باستخدام جهاز الفولتميتر (Voltmeter) الذي يُوصل على التوازي بين نقطتي القياس.',
        contentEn: 'Electric current is the continuous rate of charge flow through a conductor: I = Q / t. Current is measured in Amperes via a series-connected Ammeter. Potential difference (voltage) is measured in Volts via a parallel-connected Voltmeter.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 2: حساب شدة التيار المار في سلك مصباح',
          titleEn: 'Interactive Example 2: Calculating Current through a Lamp Filament',
          equation: 'ت = ش / ز (I = Q / t)',
          steps: [
            { stepNumber: 1, textAr: 'المعطيات: كمية الشحنة ش = 360 كولوم، والزمن ز = 2 دقيقة = 2 × 60 = 120 ثانية.', textEn: 'Given: Q = 360 C, t = 2 min = 120 s.' },
            { stepNumber: 2, textAr: 'تطبيق القانون: شدة التيار ت = 360 / 120 = 3 أمبير.', textEn: 'Calculate: I = 360 / 120 = 3 A.' },
            { stepNumber: 3, textAr: 'التحقق: يقرأ جهاز الأميتر المتصل على التوالي بالقرب من المصباح 3.0A بدقة.', textEn: 'Verification: An ammeter in series reads exactly 3.0 A.' }
          ],
          takeawayAr: 'يجب دائماً تحويل زمن تدفق التيار إلى الثواني قبل حساب شدة التيار للحصول على الناتج بوحدة الأمبير الدولية.',
          takeawayEn: 'Always convert time intervals into seconds to obtain current in standard SI Amperes.'
        },
        formativeCheck: {
          id: 'sd-fc-2',
          questionAr: 'جهاز علمي يُوصل دائماً على التوازي في الدائرة الكهربائية لقياس فرق الجهد بين نقطتين:',
          questionEn: 'Which device is always wired in parallel to measure potential difference?',
          optionsAr: ['الفولتميتر (Voltmeter)', 'الأميتر (Ammeter)', 'الأوميتر (Ohmmeter)', 'الريوستات (Rheostat)'],
          optionsEn: ['Voltmeter', 'Ammeter', 'Ohmmeter', 'Rheostat'],
          correctIndex: 0,
          explanationAr: 'الفولتميتر يُوصل دائماً على التوازي وله مقاومة داخلية عالية جداً، بينما الأميتر يُوصل على التوالي ومقاومته صغيرة.',
          explanationEn: 'Voltmeters connect in parallel due to high internal resistance, while Ammeters connect in series.'
        }
      },
      {
        titleAr: '3. قانون أوم والمقاومة الكهربائية والتحكم في الدوائر',
        titleEn: "3. Ohm's Law, Electrical Resistance & Circuit Regulation",
        contentAr: 'المقاومة الكهربائية (م) هي ممانعة الموصل لمرور التيار الكهربي، وتقاس بوحدة الأوم (Ω) نسبة للعالم الألماني جورج سيمون أوم. ينص قانون أوم على أن: "شدة التيار المار في موصل معدني تتناسب طردياً مع فرق الجهد بين طرفيه عند ثبوت درجة الحرارة". الصيغة الرياضية: جـ = ت × م، ومنها: م = جـ / ت، وت = جـ / م. المقاومات في التطبيقات نوعان: 1) مقاومة ثابتة القيمة، 2) مقاومة متغيرة (الريوستات Rheostat) وتُستخدم للتحكم في شدة التيار المار في الدائرة عن طريق تغيير طول سلك المقاومة المدمج في الدائرة. العوامل المؤثرة في مقاومة موصل: طول السلك (تناسب طردي)، مساحة مقطع السلك (تناسب عكسي)، نوع مادة الموصل، ودرجة الحرارة.',
        contentEn: "Ohm's Law states that electric current is directly proportional to potential difference across a conductor at constant temperature: V = I * R. Electrical resistance (R) is measured in Ohms.",
        interactiveExample: {
          titleAr: 'تطبيق عملي 3: حساب مقاومة سخان كهربي على شبكة السودان 220V',
          titleEn: "Interactive Example 3: Calculating Resistance on Sudan's 220V Grid",
          equation: 'م = جـ / ت (R = V / I)',
          steps: [
            { stepNumber: 1, textAr: 'المعطيات: فرق الجهد المنزلي جـ = 220 فولت، وشدة التيار المقاسة ت = 5 أمبير.', textEn: 'Given: V = 220 V, current I = 5 A.' },
            { stepNumber: 2, textAr: 'التعويض بقانون أوم: المقاومة م = 220 / 5 = 44 أوم.', textEn: 'Calculate: R = 220 / 5 = 44 Ohms.' },
            { stepNumber: 3, textAr: 'الاستنتاج: مقاومة سلك السخان الحراري تساوي 44 أوم وتتحمل تشغيل 220V.', textEn: 'Conclusion: The heating element provides 44 Ohms resistance.' }
          ],
          takeawayAr: 'المقاومة الكهربائية تساوي حاصل قسمة فرق الجهد على شدة التيار، وتزداد كلما قل التيار المار تحت نفس الجهد.',
          takeawayEn: 'Resistance equals voltage divided by current; a lower current at constant voltage signifies higher resistance.'
        },
        formativeCheck: {
          id: 'sd-fc-3',
          questionAr: 'إذا تضاعف فرق الجهد بين طرفي مقاومة أومية ثابتة إلى الضعف، فماذا يحدث لشدة التيار المار بها؟',
          questionEn: 'If potential difference across a fixed resistor is doubled, what happens to current?',
          optionsAr: ['تتضاعف شدة التيار إلى الضعف (تناسب طردي)', 'تقل شدة التيار إلى النصف', 'تظل شدة التيار ثابتة دون تغيير', 'تتضاعف شدة التيار إلى أربعة أضعاف'],
          optionsEn: ['Current doubles (direct proportionality)', 'Current halves', 'Current remains unchanged', 'Current quadruples'],
          correctIndex: 0,
          explanationAr: 'طبقاً لقانون أوم: ت = جـ / م، وبما أن المقاومة م ثابتة، فإن شدة التيار تتناسب طردياً مع فرق الجهد وتتضاعف بتضاعفه.',
          explanationEn: "Current is directly proportional to voltage under constant resistance according to Ohm's law."
        }
      },
      {
        titleAr: '4. توصيل المقاومات على التوالي والتوازي وتطبيقات الدوائر المنزلية بالسودان',
        titleEn: '4. Series & Parallel Combinations & Domestic Wiring in Sudan',
        contentAr: 'توصيل المقاومات ينقسم إلى طريقتين أساسيتين: 1) التوصيل على التوالي (Series): تُوصل المقاومات واحدة تلو الأخرى في مسار واحد للتيار؛ شدة التيار متساوية في جميع المقاومات (ت_كلي = ت1 = ت2)، بينما يتجزأ فرق الجهد (جـ_كلي = جـ1 + جـ2)، والمقاومة المكافئة أكبر من أكبر مقاومة: م_مكافئة = م1 + م2 + م3. عيب التوالي: إذا تلفت مقاومة انقطعت الدائرة عن البقية. 2) التوصيل على التوازي (Parallel): تتصل أطراف المقاومات بنقطتين مشتركتين، فيكون فرق الجهد ثابتاً لجميع الفروع (جـ_كلي = جـ1 = جـ2)، بينما يتفرع التيار (ت_كلي = ت1 + ت2)، وتكون المقاومة المكافئة أصغر من أصغر مقاومة: 1 / م_مكافئة = 1 / م1 + 1 / م2. تطبيقات المنازل السودانية: تُوصل جميع المصابيح والأجهزة المنزلية في السودان على التوازي لتعمل كل واحدة بفرق الجهد الكامل للشبكة (220 فولت)، وحتى يعمل كل جهاز بمفتاح مستقل، فإذا أُطفئ مصباح تظل بقية المصابيح مضيئة دون تأثر.',
        contentEn: 'Series connections share a single path and uniform current with additive resistance. Parallel connections provide multiple independent branches sharing uniform voltage (220V in Sudanese households) and reduced equivalent resistance.',
        interactiveExample: {
          titleAr: 'تطبيق عملي 4: المقارنة الحسابية لمقاومتين (6 أوم و 3 أوم)',
          titleEn: 'Interactive Example 4: Series vs Parallel Numerical Comparison',
          equation: 'توالي: م = م1 + م2 | توازي: م = (م1 × م2) / (م1 + م2)',
          steps: [
            { stepNumber: 1, textAr: 'في التوصيل على التوالي: م_مكافئة = 6 + 3 = 9 أوم.', textEn: 'Series: R_total = 6 + 3 = 9 Ohms.' },
            { stepNumber: 2, textAr: 'في التوصيل على التوازي: م_مكافئة = (6 × 3) / (6 + 3) = 18 / 9 = 2 أوم.', textEn: 'Parallel: R_total = (6 * 3) / (6 + 3) = 2 Ohms.' },
            { stepNumber: 3, textAr: 'الملاحظة: المقاومة المكافئة على التوازي (2 أوم) أصغر من أصغر مقاومة (3 أوم)، مما يزيد التيار الكلي المتاح.', textEn: 'Notice that parallel resistance (2 Ohms) is smaller than the smallest branch resistor (3 Ohms).' }
          ],
          takeawayAr: 'التوصيل على التوازي يقلل المقاومة المكافئة ويمنح كل جهاز مساراً كهربائياً مستقلاً وفرق جهد كامل 220V.',
          takeawayEn: 'Parallel wiring minimizes total circuit resistance and provides uniform 220V across all domestic branches.'
        },
        formativeCheck: {
          id: 'sd-fc-4',
          questionAr: 'لماذا تُوصل المصابيح والأجهزة الكهربائية في المنازل والمدارس السودانية على التوازي؟',
          questionEn: 'Why are electrical appliances wired in parallel in Sudanese homes?',
          optionsAr: [
            'حتى يعمل كل جهاز على فرق الجهد الكامل (220V) ولا تنطفئ باقي الأجهزة عند تلف أو إطفاء أحدها',
            'لزيادة المقاومة الكلية للأسلاك وتوفير استهلاك الأسلاك النحاسية',
            'لأن التوصيل على التوالي يستهلك أجهزة ومفاتيح أكثر',
            'لتمرير تيار ضعيف جداً في جميع الغرف'
          ],
          optionsEn: [
            'So each appliance receives full 220V and failure of one does not interrupt others',
            'To increase total resistance',
            'Because series uses more switches',
            'To supply low current'
          ],
          correctIndex: 0,
          explanationAr: 'التوصيل على التوازي يوفر جهداً ثابتاً 220V لجميع الأجهزة، واستقلالية تشغيل تامة لكل جهاز دون انقطاع التيار عن باقي المنزل.',
          explanationEn: 'Parallel wiring ensures uniform voltage and total operational independence for household branches.'
        }
      }
    ],
    assessment: {
      id: 'sd-m9-sci-1-assess',
      titleAr: 'اختبار تقييم استيعاب الكهرباء الساكنة والتيار وقانون أوم (شهادة المتوسطة)',
      titleEn: "Mastery Assessment: Electrostatics, Current & Circuits",
      passingScore: 80,
      questions: [
        {
          id: 'sd-q1',
          textAr: 'يمر تيار شدته 4 أمبير في دائرة كهربائية لمدة 5 دقائق. فما هي كمية الشحنة الكهربائية بالكولوم التي عبرت الموصل؟',
          textEn: 'A current of 4 A flows for 5 minutes. What is the charge in Coulombs?',
          optionsAr: ['1200 كولوم', '20 كولوم', '1.25 كولوم', '600 كولوم'],
          optionsEn: ['1200 Coulombs', '20 Coulombs', '1.25 Coulombs', '600 Coulombs'],
          correctIndex: 0,
          conceptTestedAr: 'قانون شدة التيار الكهربي وحساب الشحنة (ش = ت × ز)',
          conceptTestedEn: 'Charge and current quantitative formula',
          explanationAr: 'الزمن = 5 دقائق × 60 ثانية = 300 ثانية. الشحنة ش = ت × ز = 4 × 300 = 1200 كولوم.',
          explanationEn: 't = 300 s. Q = 4 * 300 = 1200 C.',
          difficulty: 'medium'
        },
        {
          id: 'sd-q2',
          textAr: 'وصلت مقاومتان متطابقتان قيمة كل منهما 10 أوم على التوازي بمصدر جهد 20 فولت. فكم تكون شدة التيار الكلي الخارج من المصدر؟',
          textEn: 'Two identical 10 Ohm resistors are connected in parallel across 20 V. What is the total current?',
          optionsAr: ['4 أمبير', '1 أمبير', '2 أمبير', '10 أمبير'],
          optionsEn: ['4 Amperes', '1 Ampere', '2 Amperes', '10 Amperes'],
          correctIndex: 0,
          conceptTestedAr: 'حساب المقاومة المكافئة على التوازي وتطبيق قانون أوم',
          conceptTestedEn: 'Parallel resistance and Ohm law application',
          explanationAr: 'المقاومة المكافئة لمقاومتين متماثلتين على التوازي = م / 2 = 10 / 2 = 5 أوم. شدة التيار الكلي = جـ / م = 20 / 5 = 4 أمبير.',
          explanationEn: 'R_eq = 5 Ohms. Total current I = 20 / 5 = 4 A.',
          difficulty: 'hard'
        },
        {
          id: 'sd-q3',
          textAr: 'أي من العبارات الآتية صحيحة بخصوص جهاز الفولتميتر في الدائرة الكهربائية؟',
          textEn: 'Which statement is true regarding a voltmeter in an electric circuit?',
          optionsAr: ['يُوصل على التوازي وله مقاومة داخلية كبيرة جداً', 'يُوصل على التوالي وله مقاومة داخلية صغيرة جداً', 'يقيس شدة التيار الكهربي بوحدة الأمبير', 'يُستخدم لتخزين الشحنات الكهربائية الساكنة'],
          optionsEn: ['Connected in parallel with very high resistance', 'Connected in series with low resistance', 'Measures current in Amperes', 'Stores electrostatic charges'],
          correctIndex: 0,
          conceptTestedAr: 'طريقة توصيل وخصائص الفولتميتر في الدوائر',
          conceptTestedEn: 'Voltmeter characteristics and circuit role',
          explanationAr: 'الفولتميتر يوصل على التوازي بين النقطتين لقياس فرق الجهد وله مقاومة كهربائية عالية جداً لكي لا يسحب تياراً من الدائرة.',
          explanationEn: 'Voltmeters connect in parallel and possess high internal resistance to avoid drawing measurable current.',
          difficulty: 'easy'
        }
      ]
    }
  })
];

// ────────────────────────────────────────────────────────────────────────────
// 2. العلوم العامة: الصف الثاني متوسط (G8)
// ────────────────────────────────────────────────────────────────────────────
export const SUDAN_MIDDLE_SCIENCE_G8_LECTURES: Lecture[] = [
  createSudanLecture({
    id: 'sd-m8-sci-1',
    order: 1,
    subject: 'GENERAL_SCIENCE',
    gradeLevel: 'G8',
    gradeLevelNameAr: 'جمهورية السودان - العلوم العامة للمرحلة المتوسطة (الصف الثاني متوسط / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 8 Intermediate General Science',
    titleAr: 'المحاضرة 1: التفاعلات الكيميائية والمعادلات وقانون بقاء الكتلة',
    titleEn: 'Lecture 1: Chemical Reactions, Equations & Law of Conservation of Mass',
    subtitleAr: 'أنواع التفاعلات الكيميائية ورموز العناصر والروابط وصيغ المركبات وفق كتاب علوم 2 متوسط بخت الرضا',
    subtitleEn: 'Master chemical reaction types, balancing chemical equations, and mass conservation principles in the Sudanese syllabus.',
    unitTitleAr: 'الوحدة الأولى: التفاعلات والمعادلات الكيميائية',
    unitTitleEn: 'Unit 1: Chemical Reactions & Equations',
    lessonNumberAr: 'الدرس 1: التفاعلات الكيميائية والمعادلات',
    lessonNumberEn: 'Lesson 1: Chemical Reactions & Equations',
    warmupHookAr: 'عندما نحرق الفحم النباتي في حفلات الشواء بضفاف النيل، أو نرى مسامير الحديد تصدأ في رطوبة الخريف، تتغير المادة تماماً وتتحول إلى مواد أخرى! كيف نعبّر عن هذه التحولات بلغة الكيمياء العالمية؟ وكيف يثبت قانون بقاء المادة أن لا ذرة واحدة تضيع في الكون؟',
    warmupHookEn: 'When wood burns or iron rusts during the Sudanese rainy season, matter transforms chemically. How do we represent these changes with chemical equations and prove the conservation of mass?',
    learningOutcomesAr: [
      'أن يفرّق الطالب بين التغير الفيزيائي والتفاعل الكيميائي ويعدد دلائل حدوث التفاعل.',
      'أن يكتب الصيغ الكيميائية للمركبات ويوازن المعادلات الكيميائية البسيطة.',
      'أن يطبق قانون بقاء الكتلة في التفاعلات الكيميائية.',
      'أن يصنف التفاعلات الكيميائية إلى تفاعلات اتحاد، انحلال، وإحلال.'
    ],
    keyConceptsAr: [
      'التفاعل الكيميائي وكسر وتكوين الروابط',
      'المعادلة الكيميائية الموزونة ورموز العناصر',
      'قانون بقاء الكتلة والمادة',
      'أنواع التفاعلات الكيميائية وتطبيقاتها الحياتية'
    ],
    vocabulary: [
      { termAr: 'التفاعل الكيميائي', termEn: 'Chemical Reaction', definitionAr: 'عملية كسر روابط في جزيئات المواد المتفاعلة وتكوين روابط جديدة في جزيئات المواد الناتجة.' },
      { termAr: 'المعادلة الكيميائية', termEn: 'Chemical Equation', definitionAr: 'تعبير رمزي يوضح المواد المتفاعلة والناتجة وشروط التفاعل ونسب الذرات.' },
      { termAr: 'قانون بقاء الكتلة', termEn: 'Law of Conservation of Mass', definitionAr: 'مجموع كتل المواد المتفاعلة يساوي مجموع كتل المواد الناتجة من التفاعل الكيميائي.' }
    ],
    summaryAr: 'ملخص علوم 2 متوسط بالسودان: التفاعل الكيميائي يعيد ترتيب الذرات دون خلق أو فناء للمادة، والمعادلة الكيميائية الموزونة تطبق قانون بقاء الكتلة بدقة تامة.',
    summaryEn: 'Summary of Sudan G8 Science: Chemical reactions rearrange atoms while strictly conserving mass, represented via balanced symbolic equations.',
    sections: [
      {
        titleAr: '1. مفهوم التفاعل الكيميائي والدلائل العلمية لحدوثه',
        titleEn: '1. Concept of Chemical Reactions & Evidences',
        contentAr: 'التفاعل الكيميائي هو تغير يطرأ على المواد يؤدي إلى تكوين مواد جديدة ذات خواص فيزيائية وكيميائية مختلفة تماماً عن المواد الأصلية. دلائل حدوث التفاعل الكيميائي: 1) تغير اللون (مثل تغير لون برمنجانات البوتاسيوم)، 2) تصاعد غاز (مثل تصاعد غاز الهيدروجين عند تفاعل الخارصين مع حمض الهيدروكلوريك)، 3) تكون راسب صلب، 4) انطلاق أو امتصاص طاقة حرارية أو ضوئية.',
        contentEn: 'Chemical reactions yield substances with entirely new properties. Key indicators include color shifts, gas release, precipitate formation, and thermal energy changes.',
        interactiveExample: {
          titleAr: 'تطبيق عملي: احتراق شريط المغنسيوم في الهواء',
          titleEn: 'Example: Magnesium Combustion in Air',
          equation: '2Mg + O2 -> 2MgO + طاقة حرارية وضوء ساطع',
          steps: [
            { stepNumber: 1, textAr: 'عند إشعال شريط المغنسيوم الفضي، يحترق بلهب أبيض باهر ويتفاعل مع أكسجين الهواء.', textEn: 'Magnesium ignites with an intense white flame, bonding with oxygen.' },
            { stepNumber: 2, textAr: 'يتكون مسحوق أبيض هش هو أكسيد المغنسيوم (MgO) مختلف تماماً عن فلز المغنسيوم الأصلي.', textEn: 'White powdered magnesium oxide (MgO) forms as a distinct new compound.' }
          ],
          takeawayAr: 'التفاعل الكيميائي يؤدي إلى تكوين مركب جديد بروابط جديدة تختلف عن خواص العناصر المكونة له.',
          takeawayEn: 'Chemical reactions establish new bonds yielding compounds with unique characteristics.'
        },
        formativeCheck: {
          id: 'sd-m8-fc-1',
          questionAr: 'أي من الظواهر التالية يُعد دليلاً على حدوث تفاعل كيميائي وليس مجرد تغير فيزيائي؟',
          questionEn: 'Which phenomenon indicates a chemical reaction rather than a physical change?',
          optionsAr: ['تصاعد غاز وتكون راسب جديد وتغير اللون', 'انصهار الجليد إلى ماء سائل', 'تقطيع الخشب إلى قطع صغيرة', 'ذوبان ملح الطعام في الماء'],
          optionsEn: ['Gas evolution and precipitate formation', 'Melting ice', 'Cutting wood', 'Dissolving salt in water'],
          correctIndex: 0,
          explanationAr: 'تصاعد الغاز وتكون الراسب يعبران عن تكوين مواد جديدة بروابط كيميائية جديدة.',
          explanationEn: 'Gas and precipitates signify new substances created through bond rearrangements.'
        }
      }
    ],
    assessment: {
      id: 'sd-m8-sci-1-assess',
      titleAr: 'اختبار العلوم: التفاعلات الكيميائية وقانون بقاء الكتلة (الصف الثاني متوسط)',
      titleEn: 'Science Assessment: Chemical Reactions (Grade 8)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-m8-q1',
          textAr: 'عند تفاعل 12 جراماً من الكربون مع 32 جراماً من الأكسجين تفاعلاً تاماً، فكم تكون كتلة غاز ثاني أكسيد الكربون الناتج؟',
          textEn: 'When 12g carbon reacts completely with 32g oxygen, what mass of CO2 is produced?',
          optionsAr: ['44 جراماً (طبقاً لقانون بقاء الكتلة)', '20 جراماً', '32 جراماً', '56 جراماً'],
          optionsEn: ['44g (Law of conservation of mass)', '20g', '32g', '56g'],
          correctIndex: 0,
          conceptTestedAr: 'تطبيق قانون بقاء الكتلة في التفاعلات',
          conceptTestedEn: 'Conservation of mass law application',
          explanationAr: 'كتلة النواتج = كتلة المتفاعلات = 12 + 32 = 44 جراماً.',
          explanationEn: 'Mass of products = Mass of reactants = 12 + 32 = 44 grams.',
          difficulty: 'easy'
        }
      ]
    }
  })
];

// ────────────────────────────────────────────────────────────────────────────
// 3. الرياضيات: الصف الثالث متوسط (G9 - شهادة المرحلة المتوسطة)
// ────────────────────────────────────────────────────────────────────────────
export const SUDAN_MIDDLE_MATH_G9_LECTURES: Lecture[] = [
  createSudanLecture({
    id: 'sd-m9-math-1',
    order: 1,
    subject: 'MATH',
    gradeLevel: 'G9',
    gradeLevelNameAr: 'جمهورية السودان - الرياضيات للمرحلة المتوسطة (الصف الثالث متوسط / بخت الرضا)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 9 Intermediate Mathematics',
    titleAr: 'المحاضرة 1: المعادلات الآنية الخطية في متغيرين وطرق حلها (الحذف والتعويض)',
    titleEn: 'Lecture 1: Simultaneous Linear Equations in Two Variables (Elimination & Substitution)',
    subtitleAr: 'حل الأنظمة الخطية جبرياً بطريقة الحذف وبالتعويض وبيانياً وفق كتاب الرياضيات للمرحلة المتوسطة بالسودان',
    subtitleEn: 'Master simultaneous linear system solution techniques via algebraic elimination, substitution, and graphical intersection.',
    unitTitleAr: 'الوحدة الأولى: المعادلات الآنية والأنظمة الخطية',
    unitTitleEn: 'Unit 1: Simultaneous Linear Equations',
    lessonNumberAr: 'الدرس 1: المعادلات الآنية والحل الجبري',
    lessonNumberEn: 'Lesson 1: Simultaneous Equations',
    warmupHookAr: 'في سوق أم درمان الشهير، اشترى تاجر 3 جوالات سمسم و 2 جوال فول سوداني بمبلغ معلوم، ثم اشترى في اليوم التالي 2 جوال سمسم و 4 جوالات فول بمبلغ آخر. كيف يستطيع المحاسب الذكي معرفة سعر جوال السمسم وسعر جوال الفول بدقة دون تخمين؟ سر ذلك يكمن في حل المعادلات الآنية الخطية!',
    warmupHookEn: 'Solving real-world commercial trading transactions involving multiple commodities relies directly on simultaneous linear equations.',
    learningOutcomesAr: [
      'أن يعرّف الطالب المعادلة الآنية والنظام الخطي في متغيرين.',
      'أن يحل نظام معادلتين آنيتين بطريقة الحذف الجبري.',
      'أن يحل النظام الخطي بطريقة التعويض الجبري.',
      'أن يمثّل المعادلتين بيانياً ويحدد نقطة التقاطع كمجموعة للحل.'
    ],
    keyConceptsAr: [
      'المعادلات الآنية والحل المشترك',
      'طريقة الحذف لمساواة المعاملات',
      'طريقة التعويض الجبري',
      'التمثيل البياني ونقطة تقاطع المستقيمين'
    ],
    vocabulary: [
      { termAr: 'المعادلات الآنية', termEn: 'Simultaneous Equations', definitionAr: 'نظام يتكون من معادلتين أو أكثر في متغيرين (س، ص) يُراد إيجاد قيم المتغيرين التي تحقق جميع المعادلات معاً في آن واحد.' },
      { termAr: 'طريقة الحذف', termEn: 'Elimination Method', definitionAr: 'طريقة جبرية لمساواة معاملي أحد المتغيرين في المعادلتين بإشارتين مختلفتين ثم جمعهما للتخلص من المتغير.' },
      { termAr: 'الزوج المرتب (س، ص)', termEn: 'Ordered Pair (x, y)', definitionAr: 'نقطة إحداثية تمثل قيمة س وقيمة ص التي تحقق طرفي المعادلتين معاً.' }
    ],
    summaryAr: 'ملخص رياضيات 3 متوسط بالسودان: حل نظام معادلتين آنيتين في متغيرين (س، ص) يتم جبرياً بالحذف أو التعويض، ومجموعة الحل هي نقطة تقاطع المستقيمين الممثلين للمعادلتين.',
    summaryEn: 'Summary of Sudan G9 Math: Simultaneous equations are solved algebraically by elimination or substitution, representing the unique graphical intersection coordinate.',
    sections: [
      {
        titleAr: '1. حل المعادلات الآنية بطريقة الحذف الجبري',
        titleEn: '1. Solving Simultaneous Equations via Elimination',
        contentAr: 'طريقة الحذف (Elimination Method): تهدف إلى التخلص من أحد المتغيرين (س أو ص) بجمع أو طرح المعادلتين. الخطوات: 1) نرتب المعادلتين بحيث تكون الحدود المتشابهة تحت بعضها والحد المطلق في الطرف الأيسر. 2) إذا كانت معاملات أحد المتغيرين متساوية ومتعاكسة في الإشارة، نجمع المعادلتين مباشرة لحذف ذلك المتغير. 3) إذا لم تكن المعاملات متساوية، نضرب إحدى المعادلتين أو كلتيهما في عدد مناسب لتوحيد المعاملات. 4) نحل المعادلة الناتجة ذات المتغير الواحد، ثم نعوض بقيمته في إحدى المعادلتين الأصلتين لإيجاد المتغير الآخر.',
        contentEn: 'Elimination aligns terms, multiplies equations to equalize coefficients with opposite signs, and adds equations together to solve for one variable.',
        interactiveExample: {
          titleAr: 'تطبيق عملي: حل النظام (س + ص = 9) و (س - ص = 3)',
          titleEn: 'Example: Solve system x + y = 9 and x - y = 3',
          equation: 'بجمع المعادلتين: 2س = 12 -> س = 6، وبالتعويض: 6 + ص = 9 -> ص = 3',
          steps: [
            { stepNumber: 1, textAr: 'نلاحظ أن معامل (ص) هو (+1) في المعادلة الأولى و(-1) في المعادلة الثانية.', textEn: 'Coefficient of y is +1 and -1 in the two equations.' },
            { stepNumber: 2, textAr: 'بجمع المعادلتين طرفاً لطرف: (س + س) + (ص - ص) = 9 + 3، إذن: 2س = 12، وبالتالي س = 6.', textEn: 'Add equations: 2x = 12, yielding x = 6.' },
            { stepNumber: 3, textAr: 'نعوض عن س = 6 في المعادلة الأولى: 6 + ص = 9، إذن ص = 9 - 6 = 3.', textEn: 'Substitute x = 6 into first equation: 6 + y = 9, so y = 3.' },
            { stepNumber: 4, textAr: 'مجموعة الحل هي الزوج المرتب {(6، 3)}، وعند التعويض في المعادلة الثانية: 6 - 3 = 3 (صحيحة).', textEn: 'The solution set is {(6, 3)}.' }
          ],
          takeawayAr: 'مجموعة الحل للنظام هي الزوج المرتب الوحيد الذي يحقق صحة المعادلتين معاً في آن واحد.',
          takeawayEn: 'The solution set is the unique ordered pair satisfying both simultaneous equations.'
        },
        formativeCheck: {
          id: 'sd-m9-math-fc-1',
          questionAr: 'ما هي قيمة (س) في النظام الآني الآتي: (س + 2ص = 8) و (س - 2ص = 4)؟',
          questionEn: 'What is the value of x in: (x + 2y = 8) and (x - 2y = 4)?',
          optionsAr: ['س = 6', 'س = 4', 'س = 2', 'س = 12'],
          optionsEn: ['x = 6', 'x = 4', 'x = 2', 'x = 12'],
          correctIndex: 0,
          explanationAr: 'بجمع المعادلتين: 2س = 12، بقسمة الطرفين على 2 ينتج س = 6.',
          explanationEn: 'Adding equations yields 2x = 12, thus x = 6.'
        }
      }
    ],
    assessment: {
      id: 'sd-m9-math-1-assess',
      titleAr: 'اختبار الرياضيات: المعادلات الآنية (الصف الثالث متوسط)',
      titleEn: 'Math Assessment: Simultaneous Equations (Grade 9)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-m9-m-q1',
          textAr: 'إذا كان الزوج المرتب (2، ك) يحقق المعادلة (3س + ص = 10)، فما هي قيمة ك؟',
          textEn: 'If (2, k) satisfies 3x + y = 10, what is k?',
          optionsAr: ['ك = 4', 'ك = 6', 'ك = 10', 'ك = 2'],
          optionsEn: ['k = 4', 'k = 6', 'k = 10', 'k = 2'],
          correctIndex: 0,
          conceptTestedAr: 'التعويض بالزوج المرتب في المعادلة الخطية',
          conceptTestedEn: 'Ordered pair substitution in linear equation',
          explanationAr: 'بالتعويض عن س = 2 وص = ك: 3(2) + ك = 10 -> 6 + ك = 10 -> ك = 10 - 6 = 4.',
          explanationEn: '3(2) + k = 10 => 6 + k = 10 => k = 4.',
          difficulty: 'easy'
        }
      ]
    }
  })
];

// ────────────────────────────────────────────────────────────────────────────
// 4. الأدب والشعر السوداني: الصف الثالث الثانوي (G12 - الشهادة السودانية)
// ────────────────────────────────────────────────────────────────────────────
export const SUDAN_HIGH_ARABIC_LIT_G12_LECTURES: Lecture[] = [
  createSudanLecture({
    id: 'sd-g12-lit-1',
    order: 1,
    subject: 'ARABIC_LIT',
    gradeLevel: 'G12',
    gradeLevelNameAr: 'جمهورية السودان - الأدب العربي والبلاغة (الصف الثالث الثانوي / الشهادة السودانية)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 12 Arabic Literature & Sudanese Poetry',
    titleAr: 'المحاضرة 1: الأدب والشعر السوداني المعاصر: روائع إدريس جماع والهادي آدم ومحمد سعيد العباسي',
    titleEn: 'Lecture 1: Contemporary Sudanese Literature: Masterpieces of Idris Jamma, El Hadi Adam & El Abbasi',
    subtitleAr: 'دراسة تحليلية ونقدية لنصوص من روائع الشعر السوداني الخالد: شاعر الجمال إدريس جماع، الهادي آدم، والشاعر محمد سعيد العباسي',
    subtitleEn: 'In-depth critical analysis of iconic Sudanese poets: Idris Jamma, El Hadi Adam, and Mohamed Saeed El Abbasi.',
    unitTitleAr: 'الوحدة الأولى: الأدب والنصوص للشهادة السودانية',
    unitTitleEn: 'Unit 1: Sudanese Literature & Texts',
    lessonNumberAr: 'الدرس 1: رواد الشعر السوداني المعاصر',
    lessonNumberEn: 'Lesson 1: Pioneers of Contemporary Sudanese Poetry',
    warmupHookAr: 'عندما سافر شاعر السودان المرهف إدريس جماع إلى لندن للعلاج، رأى في المطار عيون حسناء إنجليزية تسحر من ينظر إليها، وكان زوجها يغار ويحاول سترها عنه، فقال جماع في لحظة إلهام شعري خلدها التاريخ العربي:\n"أعلى الجمالِ تغارُ مِنّا؟ إنّا نُقدِّسُ كُلَّ فِتْنَة!\nلورأيتَ ما في قلوبنا لَغَفَرْتَ لِلهَوى وأَمِنْتَه!"\nلماذا يُعد الشعر السوداني من أعمق وأصدق ينابيع الأدب العربي؟ وكيف صور شعراؤنا طبيعة السودان ووجدانه الصوفي والوطني؟',
    warmupHookEn: 'Idris Jamma, one of Sudan’s greatest literary figures, composed unforgettable verses reflecting profound aesthetic sensibility and Arabic poetic majesty.',
    learningOutcomesAr: [
      'أن يتعرف الطالب على السيرة الأدبية لرواد الشعر السوداني (إدريس جماع، الهادي آدم، والعباسي).',
      'أن يحلل الطالب الأبيات الشعرية تحليلاً لغوياً وبلاغياً وفكرياً وفق أسئلة الشهادة السودانية.',
      'أن يستخرج الصور البيانية (التشبيه، الاستعارة، والكناية) والمحسنات البديعية من القصائد.',
      'أن يبرز الخصائص الفنية المميزة للمدرسة الرومانسية والوجدانية في الشعر السوداني.'
    ],
    keyConceptsAr: [
      'الشعر الوجداني والصوفي في الأدب السوداني',
      'شاعر الجمال والحزن إدريس جماع',
      'الهادي آدم وقصيدة "أغداً ألقاك"',
      'الصور البيانية والموسيقى الشعرية'
    ],
    vocabulary: [
      { termAr: 'إدريس جماع (1922-1980)', termEn: 'Idris Jamma', definitionAr: 'أحد كبار شعراء السودان والعالم العربي، ولد بحلفاية الملوك، لُقب بشاعر الجمال والألم، وتميزت قصائده برقة التعبير وعمق التصوير.' },
      { termAr: 'الهادي آدم (1927-2006)', termEn: 'El Hadi Adam', definitionAr: 'شاعر وكاتب سوداني بارز ولد بولاية الجزيرة، صاحب ديوان "كوخ الأشواق" وقصيدة "أغداً ألقاك" الشهيرة.' },
      { termAr: 'الاستعارة المكنية', termEn: 'Metaphor', definitionAr: 'تشبيه حُذف منه المشبه به ورُمز له بشيء من لوازمه على سبيل الإيجاز والجمال.' }
    ],
    summaryAr: 'ملخص أدب الشهادة السودانية: يتميز الشعر السوداني المعاصر بأصالته اللغوية وعمقه الوجداني وارتباطه الوثيق بقضايا الوطن والجمال الإنساني، مع براعة نادرة في استخدام الصور البلاغية.',
    summaryEn: 'Summary of Sudan Grade 12 Literature: Highlights lyrical emotional depth, linguistic purity, and patriotic pride characteristic of modern Sudanese poetry.',
    sections: [
      {
        titleAr: '1. عبقرية الشاعر إدريس جماع وفلسفة الجمال في شعره',
        titleEn: '1. Genius of Idris Jamma & Philosophy of Beauty',
        contentAr: 'يحتل الشاعر السوداني الكبير إدريس جماع مكانة سامقة في تاريخ الأدب العربي المعاصر. اتسمت تجربته الشعرية بالحساسية المفرطة والشعور العميق بالجمال الإنساني والطبيعي، مقترناً بمسحة من الشجن والحزن الصادق. من أشهر قصائده في مقرر الشهادة الثانوية السودانية قصيدة "في موكب الذكريات" وقصيدة "رحلة الأيام". يقول في إحدى روائعه الخالدة:\n"والسيفُ في الغِمدِ لا تُخشَى مضاربهُ ... وسيفُ عينيكِ في الحالينِ بتّارُ!\nإن حظي كدقيقٍ فوقَ شَوكٍ نثروه ... ثم قالوا لحُفاةٍ يومَ ريحٍ اجمعوه!".\nتتسم لغة جماع بالجزالة والصفاء، مع توظيف متقن للتشبيه التمثيلي والصور الحسية الحية.',
        contentEn: 'Idris Jamma is renowned for his emotional precision and profound romantic elegance in modern Arabic poetry.',
        interactiveExample: {
          titleAr: 'تطبيق بلاغي: تحليل التشبيه التمثيلي في بيت جماع الشهير',
          titleEn: 'Literary Analysis: Jamma’s Iconic Metaphor',
          equation: 'المشبه: حظ الشاعر العاثر | المشبه به: دقيق منثور فوق شوك في يوم عاصف يُطلب من حفاة جمعه',
          steps: [
            { stepNumber: 1, textAr: 'نوع التشبيه: تشبيه تمثيلي، حيث شبه الشاعر حالة بحالة وصورة مركبة بصورة مركبة متعددة الأجزاء.', textEn: 'Type: Compound epic metaphor capturing tragic impossibility.' },
            { stepNumber: 2, textAr: 'وجه الشبه: استحالة التحقق والمشقة البالغة والألم في مواجهة مصير مستحيل.', textEn: 'Ground: Absolute futility and severe anguish in attempting an impossible recovery.' },
            { stepNumber: 3, textAr: 'سر الجمال: التجسيد وإبراز المعنى المجرد (سوء الطالع) في صورة حسية مأساوية تهز الوجدان.', textEn: 'Aesthetic: Concretizing abstract sorrow through vivid tangible imagery.' }
          ],
          takeawayAr: 'التشبيه التمثيلي عند جماع ينقل المتلقي إلى قلب التجربة الشعورية الصادقة بأعلى درجات البلاغة العربية.',
          takeawayEn: 'Jamma’s imagery transports readers straight into poignant emotional realities with unmatched Arabic eloquence.'
        },
        formativeCheck: {
          id: 'sd-lit-fc-1',
          questionAr: 'ما نوع الصورة البلاغية في قول إدريس جماع: "وسيفُ عينيكِ في الحالينِ بتّارُ"؟',
          questionEn: 'What is the figure of speech in "and the sword of your eyes is always sharp"?',
          optionsAr: ['تشبيه بليغ (حيث شبه عينيها بالسيف البتار بإضافة المشبه به إلى المشبه)', 'استعارة تصريحية', 'كناية عن النسبة', 'مجاز مرسل علاقته المكانية'],
          optionsEn: ['Eloquent Metaphor (Tashbih Baligh)', 'Explicit Metaphor', 'Metonymy', 'Synecdoche'],
          correctIndex: 0,
          explanationAr: 'هو تشبيه بليغ أضيف فيه المشبه به (سيف) إلى المشبه (عينيك) وحذفت أداة التشبيه ووجه الشبه للمبالغة في قوة التأثير.',
          explanationEn: 'Tashbih Baligh equates eyes with a sharp sword without comparison particle.'
        }
      }
    ],
    assessment: {
      id: 'sd-g12-lit-1-assess',
      titleAr: 'اختبار الأدب والنصوص: رواد الشعر السوداني (الشهادة السودانية)',
      titleEn: 'Arabic Literature Assessment: Sudanese Poetry (Grade 12)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-lit-q1',
          textAr: 'من هو الشاعر السوداني صاحب ديوان "كوخ الأشواق" وقصيدة "أغداً ألقاك" الشهيرة؟',
          textEn: 'Which Sudanese poet wrote "Koukh Al Ashwaq" and "Aghadan Alqak"?',
          optionsAr: ['الشاعر الهادي آدم', 'الشاعر إدريس جماع', 'الشاعر محمد سعيد العباسي', 'الشاعر التيجاني يوسف بشير'],
          optionsEn: ['El Hadi Adam', 'Idris Jamma', 'Mohamed Saeed El Abbasi', 'El Tijani Youssef Beshir'],
          correctIndex: 0,
          conceptTestedAr: 'أعلام الأدب والشعر السوداني المعاصر',
          conceptTestedEn: 'Prominent figures in modern Sudanese literature',
          explanationAr: 'الشاعر الهادي آدم هو صاحب ديوان "كوخ الأشواق" وقصيدة "أغداً ألقاك" التي شدت بها سيدة الغناء العربي أم كلثوم.',
          explanationEn: 'El Hadi Adam composed "Aghadan Alqak" immortalized in Arabic music and literature.',
          difficulty: 'easy'
        }
      ]
    }
  })
];

// ────────────────────────────────────────────────────────────────────────────
// 5. الفيزياء: الصف الثالث الثانوي (G12 - الشهادة السودانية)
// ────────────────────────────────────────────────────────────────────────────
export const SUDAN_HIGH_PHYSICS_G12_LECTURES: Lecture[] = [
  createSudanLecture({
    id: 'sd-g12-phy-1',
    order: 1,
    subject: 'PHYSICS',
    gradeLevel: 'G12',
    gradeLevelNameAr: 'جمهورية السودان - الفيزياء (الصف الثالث الثانوي / الشهادة السودانية)',
    gradeLevelNameEn: 'Republic of Sudan - Grade 12 Physics (Sudan School Certificate)',
    titleAr: 'المحاضرة 1: الكهرباء الساكنة وقانون كولوم وشدة المجال الكهربائي والمكثفات',
    titleEn: 'Lecture 1: Electrostatics, Coulomb’s Law, Electric Fields & Capacitors',
    subtitleAr: 'قانون كولوم الرياضي، حساب شدة المجال الكهربائي والجهد، سعة المكثفات وربطها على التوالي والتوازي للشهادة السودانية',
    subtitleEn: 'Quantitative study of Coulomb’s law, electric field intensity, potential, and series/parallel capacitor combinations in the Sudanese syllabus.',
    unitTitleAr: 'الوحدة الأولى: الكهرباء الساكنة والمكثفات',
    unitTitleEn: 'Unit 1: Electrostatics & Capacitors',
    lessonNumberAr: 'الباب الأول - الشهادة السودانية',
    lessonNumberEn: 'Chapter 1 - Sudan Certificate',
    warmupHookAr: 'عندما تدور توربينات سد مروي أو سد الروصيرص بالنيل الأزرق، تتدفق طاقات كهرومغناطيسية هائلة لتغذي مدن وقرى السودان. لكن الأساس الفيزيائي لكل هذه الطاقة بدأ من قانون بسيط وضعه العالم الفرنسي شارل كولوم لحساب القوة المتبادلة بين الشحنات المجهرية! كيف نتحكم في تخزين هذه الشحنات في المكثفات الكهربائية بدقة متناهية؟',
    warmupHookEn: 'From Sudan’s massive hydroelectric dams on the Nile to micro-circuits, all electrical systems trace back to Coulomb’s fundamental law.',
    learningOutcomesAr: [
      'أن يطبق الطالب قانون كولوم (ق = ك × ش1 × ش2 / ف²) في حساب القوة الكهروستاتيكية المتبادلة.',
      'أن يحسب شدة المجال الكهربائي والجهد الكهربي عند نقطة تبعد مسافة معينة عن شحنة نقطية.',
      'أن يعرّف سعة المكثف (س = ش / جـ) ويحسب السعة المكافئة لتوصيل المكثفات على التوالي والتوازي.',
      'أن يحل المسائل النموذجية لامتحانات الشهادة السودانية في الكهربية الساكنة والمكثفات.'
    ],
    keyConceptsAr: [
      'قانون كولوم وثابت التناسب في الفراغ',
      'شدة المجال الكهربائي وخطوط القوى الكهربائية',
      'المكثفات الكهربائية وثابت العزل وسعة المكثف',
      'توصيل المكثفات على التوالي والتوازي والطاقة المخزنة'
    ],
    vocabulary: [
      { termAr: "قانون كولوم (Coulomb's Law)", termEn: "Coulomb's Law", definitionAr: 'القوة المتبادلة بين شحنتين نقطيتين تتناسب طردياً مع حاصل ضرب الشحنتين وعكسياً مع مربع المسافة بينهما: ق = ك × ش1 × ش2 / ف².' },
      { termAr: 'سعة المكثف (Capacitance)', termEn: 'Capacitance', definitionAr: 'النسبة بين الشحنة المخزنة على أحد لوحي المكثف وفرق الجهد بينهما: س = ش / جـ، وتقاس بالفاراد (Farad).' }
    ],
    summaryAr: 'ملخص فيزياء الشهادة السودانية: الكهرباء الساكنة تقوم على قانون كولوم وحسابات المجال، والمكثفات تخزن الشحنة والطاقة الكهربائية وتخضع لقوانين التوالي والتوازي.',
    summaryEn: 'Summary of Sudan G12 Physics: Electrostatics centers around Coulomb’s law, field vectors, and capacitive energy storage calculations.',
    sections: [
      {
        titleAr: '1. قانون كولوم الرياضي وحساب القوة الكهروستاتيكية',
        titleEn: '1. Coulomb’s Law & Quantitative Force Calculations',
        contentAr: 'ينص قانون كولوم على أن: "القوة الكهروستاتيكية المتبادلة بين شحنتين كهربائيتين نقطيتين تتناسب طردياً مع حاصل ضرب الشحنتين وعكسياً مع مربع البعد بينهما". الصيغة الرياضية:\nق = (ك × ش1 × ش2) / ف²\nحيث:\n- ق: القوة المتبادلة وتقاس بالنيوتن (N).\n- ش1، ش2: مقدار الشحنتين بوحدة الكولوم (C).\n- ف: المسافة بين مركزي الشحنتين بوحدة المتر (m).\n- ك: ثابت كولوم في الفراغ أو الهواء = 9 × 10^9 نيوتن.م² / كولوم².',
        contentEn: 'Coulomb’s law quantifies electrostatic force between point charges inversely proportional to square distance: F = k * q1 * q2 / r^2.',
        interactiveExample: {
          titleAr: 'تطبيق عملي: حساب القوة بين شحنتين (2 ميكروكولوم و 5 ميكروكولوم)',
          titleEn: 'Example: Force between 2 μC and 5 μC charges',
          equation: 'ق = (9 × 10^9 × 2 × 10^-6 × 5 × 10^-6) / (0.1)²',
          steps: [
            { stepNumber: 1, textAr: 'تحويل الشحنات إلى كولوم: ش1 = 2 × 10^-6 كولوم، ش2 = 5 × 10^-6 كولوم، والمسافة ف = 10 سم = 0.1 م.', textEn: 'Convert to SI units: q1 = 2e-6 C, q2 = 5e-6 C, r = 0.1 m.' },
            { stepNumber: 2, textAr: 'التعويض في قانون كولوم: ق = (9 × 10^9 × 10 × 10^-12) / 0.01 = 0.09 / 0.01 = 9 نيوتن.', textEn: 'Calculate: F = 9 N.' },
            { stepNumber: 3, textAr: 'نوع القوة: قوة تنافر إذا كانت الشحنتان من نفس النوع، وقوة تجاذب إذا كانتا مختلفتين.', textEn: 'Nature: Repulsive if like charges, attractive if opposite.' }
          ],
          takeawayAr: 'يجب الانتباه لتحويل الميكروكولوم (10^-6) والمسافة إلى الأمتار للحصول على القوة بالنيوتن بدقة.',
          takeawayEn: 'Always convert microcoulombs and centimeters to SI meters and Coulombs.'
        },
        formativeCheck: {
          id: 'sd-phy-fc-1',
          questionAr: 'إذا زادت المسافة بين شحنتين نقطيتين إلى الضعف، فماذا يحدث لمقدار القوة الكهروستاتيكية المتبادلة بينهما؟',
          questionEn: 'If distance between two charges doubles, what happens to electrostatic force?',
          optionsAr: ['تقل القوة إلى الربع (1/4)', 'تقل القوة إلى النصف', 'تتضاعف القوة إلى الضعف', 'تظل القوة ثابتة'],
          optionsEn: ['Decreases to one-fourth (1/4)', 'Halves', 'Doubles', 'Remains constant'],
          correctIndex: 0,
          explanationAr: 'طبقاً لقانون كولوم، تتناسب القوة عكسياً مع مربع المسافة (1 / ف²)، فإذا تضاعفت المسافة مرتين تقل القوة إلى 1/(2)² = 1/4.',
          explanationEn: 'Force is inversely proportional to r squared: (1/2)^2 = 1/4.'
        }
      }
    ],
    assessment: {
      id: 'sd-g12-phy-1-assess',
      titleAr: 'اختبار الفيزياء: الكهرباء الساكنة والمكثفات (الشهادة السودانية)',
      titleEn: 'Physics Assessment: Electrostatics & Capacitors (Grade 12)',
      passingScore: 80,
      questions: [
        {
          id: 'sd-phy-q1',
          textAr: 'وصل مكثفان سعة كل منهما 6 ميكروفاراد على التوالي، فكم تكون السعة المكافئة لهما؟',
          textEn: 'Two 6 μF capacitors are connected in series. What is the equivalent capacitance?',
          optionsAr: ['3 ميكروفاراد', '12 ميكروفاراد', '6 ميكروفاراد', '1.5 ميكروفاراد'],
          optionsEn: ['3 μF', '12 μF', '6 μF', '1.5 μF'],
          correctIndex: 0,
          conceptTestedAr: 'حساب السعة المكافئة لتوصيل المكثفات على التوالي',
          conceptTestedEn: 'Series capacitor equivalent calculation',
          explanationAr: 'في التوصيل على التوالي لمكثفين متماثلين: السعة المكافئة = س / 2 = 6 / 2 = 3 ميكروفاراد.',
          explanationEn: 'In series for two equal capacitors: C_eq = C / 2 = 6 / 2 = 3 μF.',
          difficulty: 'medium'
        }
      ]
    }
  })
];

// ────────────────────────────────────────────────────────────────────────────
// 6. CENTRAL SUDAN CURRICULUM ROUTER (الموجّه المركزي لمناهج السودان)
// ────────────────────────────────────────────────────────────────────────────
export function getSudanCurriculum(subject: string, gradeLevel?: string): Lecture[] | null {
  if (subject === 'PRIMARY_SCIENCE' && (gradeLevel === 'G6' || !gradeLevel)) {
    return SUDAN_PRIMARY_SCIENCE_G6_LECTURES;
  }
  if (subject === 'GENERAL_SCIENCE') {
    if (gradeLevel === 'G6') return SUDAN_PRIMARY_SCIENCE_G6_LECTURES;
    if (gradeLevel === 'G9') return SUDAN_MIDDLE_SCIENCE_G9_LECTURES;
    if (gradeLevel === 'G8') return SUDAN_MIDDLE_SCIENCE_G8_LECTURES;
  }
  if (subject === 'MATH') {
    if (gradeLevel === 'G9') return SUDAN_MIDDLE_MATH_G9_LECTURES;
  }
  if (subject === 'ARABIC_LIT' && (gradeLevel === 'G12' || !gradeLevel)) {
    return SUDAN_HIGH_ARABIC_LIT_G12_LECTURES;
  }
  if (subject === 'PHYSICS' && (gradeLevel === 'G12' || !gradeLevel)) {
    return SUDAN_HIGH_PHYSICS_G12_LECTURES;
  }
  if (subject === 'GEOGRAPHY' && (gradeLevel === 'G10' || !gradeLevel)) {
    return SUDAN_HIGH_GEOGRAPHY_G10_LECTURES;
  }
  if (subject === 'HISTORY' && (gradeLevel === 'G10' || !gradeLevel)) {
    return SUDAN_HIGH_HISTORY_G10_LECTURES;
  }
  return null;
}
