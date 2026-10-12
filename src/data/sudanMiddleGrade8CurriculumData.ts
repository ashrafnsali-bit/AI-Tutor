import type { Subject } from '../types';
import {
  createSudanMiddleGrade7Lectures,
  type SudanMiddleGrade7Course,
  type SudanMiddleGrade7Lesson
} from './sudanMiddleGrade7CourseBuilder';
import { grade7Lesson } from './sudanMiddleGrade7CourseBuilder';

const course = (
  key: string,
  subject: Subject,
  titleAr: string,
  titleEn: string,
  edition: string,
  units: SudanMiddleGrade7Course['units'],
  lessons: SudanMiddleGrade7Lesson[]
): SudanMiddleGrade7Course => ({
  key,
  subject,
  gradeLevel: 'G8',
  titleAr,
  titleEn,
  edition,
  units,
  lessons
});

const unit = (
  titleAr: string,
  titleEn: string,
  firstPage: number,
  lastPage: number
): SudanMiddleGrade7Course['units'][number] => ({ titleAr, titleEn, firstPage, lastPage });

const lesson = (
  unitNumber: number,
  page: number,
  lastPage: number,
  titleAr: string,
  titleEn: string,
  focusAr: string,
  focusEn: string
) => grade7Lesson(unitNumber, page, lastPage, titleAr, titleEn, focusAr, focusEn);

const courses: Partial<Record<Subject, SudanMiddleGrade7Course>> = {
  ARABIC_LANG: course(
    'arabic',
    'ARABIC_LANG',
    'اللغة العربية',
    'Arabic Language',
    'الصف الثاني المتوسط — 15 وحدة، الطبعة الأولى 2022م',
    Array.from({ length: 15 }, (_, index) =>
      unit(`الوحدة ${index + 1}`, `Unit ${index + 1}`, [1, 14, 28, 40, 50, 59, 74, 87, 102, 119, 135, 147, 163, 178, 191][index], [13, 27, 39, 49, 58, 73, 86, 101, 118, 134, 146, 162, 177, 190, 191][index])
    ),
    Array.from({ length: 15 }, (_, index) =>
      lesson(
        index + 1,
        [1, 14, 28, 40, 50, 59, 74, 87, 102, 119, 135, 147, 163, 178, 191][index],
        [13, 27, 39, 49, 58, 73, 86, 101, 118, 134, 146, 162, 177, 190, 191][index],
        `موضوعات اللغة ومهاراتها — الوحدة ${index + 1}`,
        `Language Topics and Skills — Unit ${index + 1}`,
        'تجمع الوحدة بين القراءة والنصوص والأدب والتدريبات والمهارات اللغوية وفق موضوعاتها.',
        'The unit combines reading, literary texts, exercises, and language skills around its themes.'
      )
    )
  ),
  ENGLISH: course(
    'english',
    'ENGLISH',
    'اللغة الإنجليزية',
    'English',
    'SMILE Series: Book 8 Pupil’s Book — الصف الثامن، 2022م',
    [
      unit('Environment', 'Environment', 1, 8),
      unit('Stay Healthy', 'Stay Healthy', 9, 16),
      unit('Amazing Places', 'Amazing Places', 17, 24),
      unit('School Time', 'School Time', 25, 32),
      unit('Animals and Nature', 'Animals and Nature', 33, 40),
      unit('The Universe', 'The Universe', 41, 48),
      unit('Sport and Health', 'Sport and Health', 49, 56),
      unit('Looking Back', 'Looking Back', 57, 64)
    ],
    [
      lesson(1, 1, 8, 'البيئة', 'Environment', 'يستخدم مفردات اللغة الإنجليزية للتحدث عن الطقس والبيئة ومظاهرها في السودان.', 'Use English vocabulary to discuss weather, the environment, and examples from Sudan.'),
      lesson(2, 9, 16, 'حافظ على صحتك', 'Stay Healthy', 'يتدرب على التواصل باللغة الإنجليزية حول الصحة والعادات اليومية السليمة.', 'Communicate in English about health and positive daily habits.'),
      lesson(3, 17, 24, 'أماكن مدهشة', 'Amazing Places', 'يصف الأماكن والمعالم والرحلات بلغة مناسبة.', 'Describe places, landmarks, and journeys using appropriate language.'),
      lesson(4, 25, 32, 'وقت المدرسة', 'School Time', 'يستخدم اللغة الإنجليزية للتحدث عن المدرسة والتعلم والأنشطة المدرسية.', 'Use English to talk about school, learning, and school activities.'),
      lesson(5, 33, 40, 'الحيوانات والطبيعة', 'Animals and Nature', 'يقرأ ويتحدث عن الحيوانات وبيئاتها وعلاقاتها بالطبيعة.', 'Read and talk about animals, their habitats, and their relationship with nature.'),
      lesson(6, 41, 48, 'الكون', 'The Universe', 'يكتسب مفردات لوصف الكون والأجرام والظواهر المرتبطة به.', 'Develop vocabulary for describing the universe and related objects and phenomena.'),
      lesson(7, 49, 56, 'الرياضة والصحة', 'Sport and Health', 'يتبادل المعلومات حول الرياضة والصحة ويطبق مهارات اللغة في مواقف مألوفة.', 'Exchange information about sport and health and use language skills in familiar situations.'),
      lesson(8, 57, 64, 'مراجعة', 'Looking Back', 'يراجع المفردات والتراكيب ومهارات اللغة التي تناولتها الوحدات السابقة.', 'Review vocabulary, structures, and language skills from the preceding units.')
    ]
  ),
  GEOGRAPHY: course(
    'geography',
    'GEOGRAPHY',
    'الجغرافيا',
    'Geography',
    'الصف الثاني المتوسط — ثلاث وحدات عن أمريكا الشمالية وأمريكا الجنوبية وأستراليا، الطبعة الأولى 2022م',
    [
      unit('قارة أمريكا الشمالية', 'North America', 2, 63),
      unit('قارة أمريكا الجنوبية', 'South America', 64, 101),
      unit('قارة أستراليا', 'Australia', 102, 125)
    ],
    [
      lesson(1, 2, 5, 'قارة أمريكا الشمالية ومساحتها', 'North America and Its Area', 'يحدد موقع القارة ومساحتها ويمهد لدراسة خصائصها الطبيعية والبشرية.', 'Locate the continent, describe its area, and introduce its physical and human geography.'),
      lesson(1, 6, 9, 'البنية والتضاريس', 'Structure and Relief', 'يفسر أبرز أشكال السطح والتضاريس في أمريكا الشمالية.', 'Explain major landforms and relief features of North America.'),
      lesson(1, 10, 15, 'التصريف المائي', 'Drainage', 'يتعرف الأحواض والأنهار وأنماط التصريف المائي في القارة.', 'Identify the continent’s drainage basins, rivers, and drainage patterns.'),
      lesson(1, 16, 20, 'المناخ', 'Climate', 'يربط بين الموقع والتضاريس وتنوع الأقاليم المناخية.', 'Relate location and relief to the continent’s range of climate regions.'),
      lesson(1, 21, 25, 'النبات الطبيعي', 'Natural Vegetation', 'يربط بين المناخ وأنواع النبات الطبيعي وتوزيعها.', 'Connect climate with natural vegetation types and their distribution.'),
      lesson(1, 26, 44, 'الجغرافيا البشرية والاقتصادية', 'Human and Economic Geography', 'يصف توزيع السكان والأنشطة البشرية والاقتصادية في القارة.', 'Describe population patterns and human and economic activities in the continent.'),
      lesson(1, 45, 63, 'كندا', 'Canada', 'يتعرف موقع كندا وخصائصها الطبيعية والسكانية والاقتصادية.', 'Explore Canada’s location and its physical, population, and economic characteristics.'),
      lesson(2, 64, 68, 'أمريكا الجنوبية: الموقع الجغرافي والفلكي', 'South America: Geographic and Astronomical Location', 'يحدد موقع القارة وحدودها وامتدادها الفلكي.', 'Locate the continent and describe its boundaries and astronomical extent.'),
      lesson(2, 69, 75, 'مظاهر السطح والتضاريس', 'Landforms and Relief', 'يصف الأشكال التضاريسية الرئيسة في أمريكا الجنوبية.', 'Describe the major relief features of South America.'),
      lesson(2, 76, 82, 'المناخ والنبات الطبيعي', 'Climate and Natural Vegetation', 'يستكشف العلاقة بين المناخ والغطاء النباتي في القارة.', 'Explore relationships between climate and vegetation in the continent.'),
      lesson(2, 83, 85, 'الموارد المائية', 'Water Resources', 'يتعرف الموارد المائية وأهميتها في القارة.', 'Identify water resources and their importance in the continent.'),
      lesson(2, 86, 95, 'السكان والنشاط الاقتصادي', 'Population and Economic Activity', 'يصف السكان وأنماط النشاط الاقتصادي في أمريكا الجنوبية.', 'Describe population and economic activity in South America.'),
      lesson(2, 96, 101, 'جمهورية البرازيل', 'The Federative Republic of Brazil', 'يدرس البرازيل نموذجًا لبلدان القارة من حيث الموقع والسكان والموارد.', 'Study Brazil as a continental example of location, population, and resources.'),
      lesson(3, 102, 103, 'أستراليا: دراسة عامة', 'Australia: General Study', 'يتعرف القارة وموقعها وخصائصها العامة.', 'Identify the continent, its location, and its general characteristics.'),
      lesson(3, 104, 106, 'أشكال السطح والتضاريس', 'Landforms and Relief', 'يصف تضاريس أستراليا وأشكال سطحها الرئيسة.', 'Describe Australia’s principal relief and landform features.'),
      lesson(3, 107, 108, 'الموارد المائية', 'Water Resources', 'يستكشف الموارد المائية في أستراليا وتوزيعها.', 'Explore water resources in Australia and their distribution.'),
      lesson(3, 109, 109, 'المناخ', 'Climate', 'يتعرف خصائص مناخ أستراليا وعوامل تنوعه.', 'Identify Australia’s climate characteristics and factors behind their variation.'),
      lesson(3, 110, 111, 'السكان', 'Population', 'يصف توزيع السكان وخصائصه في أستراليا.', 'Describe population distribution and characteristics in Australia.'),
      lesson(3, 112, 125, 'النشاط البشري والاقتصادي', 'Human and Economic Activity', 'يربط بين البيئة والموارد وأنماط الاستقرار والنشاط الاقتصادي.', 'Relate environment and resources to settlement patterns and economic activity.')
    ]
  ),
  HISTORY: course(
    'history',
    'HISTORY',
    'التاريخ',
    'History',
    'الصف الثاني المتوسط — أربع وحدات، الطبعة الأولى 2022م',
    [
      unit('من تاريخ السودان', 'From the History of Sudan', 5, 40),
      unit('تطور الدولة الإسلامية في العهد الأموي', 'The Islamic State under the Umayyads', 41, 48),
      unit('من تاريخ إفريقيا', 'From the History of Africa', 49, 64),
      unit('من تاريخ أوروبا', 'From the History of Europe', 65, 102)
    ],
    [
      lesson(1, 6, 8, 'هجرة العرب إلى السودان', 'Arab Migration to Sudan', 'يتتبع هجرة العرب إلى السودان ودوافعها ونتائجها التاريخية.', 'Trace Arab migration to Sudan, its motives, and its historical consequences.'),
      lesson(1, 9, 11, 'المعاهدات بين العرب المسلمين والنوبة والبجا', 'Treaties between Arab Muslims, Nubians, and Beja', 'يفهم دور المعاهدات في تنظيم العلاقات بين الجماعات في السودان.', 'Understand how treaties shaped relations among groups in Sudan.'),
      lesson(1, 12, 13, 'نتائج دخول العرب المسلمين إلى السودان', 'Consequences of Arab Muslim Arrival in Sudan', 'يحلل التحولات الدينية والثقافية والاجتماعية التي أعقبت دخول العرب المسلمين.', 'Analyze religious, cultural, and social changes following Arab Muslim arrival.'),
      lesson(1, 14, 17, 'السلطنات الإسلامية في السودان: سلطنة الفونج', 'Islamic Sultanates in Sudan: Funj Sultanate', 'يتعرف نشأة سلطنة الفونج وأبرز ملامحها السياسية والحضارية.', 'Identify the rise of the Funj Sultanate and key political and cultural features.'),
      lesson(1, 18, 20, 'السلطنات الإسلامية في السودان: مشيخة العبدلاب', 'Islamic Sultanates in Sudan: Abdallab Sheikhdom', 'يتعرف مشيخة العبدلاب ضمن الممالك الإسلامية في السودان.', 'Study the Abdallab Sheikhdom among Sudan’s Islamic kingdoms.'),
      lesson(1, 21, 22, 'السلطنات الإسلامية في السودان: مملكة تقلي', 'Islamic Sultanates in Sudan: Taqali Kingdom', 'يصف مملكة تقلي وموقعها في تاريخ السودان.', 'Describe the Taqali Kingdom and its place in Sudanese history.'),
      lesson(1, 23, 25, 'السلطنات الإسلامية في السودان: سلطنة الفور', 'Islamic Sultanates in Sudan: Fur Sultanate', 'يستعرض نشأة سلطنة الفور وأهم خصائصها.', 'Review the rise and principal characteristics of the Fur Sultanate.'),
      lesson(1, 26, 28, 'الحكم التركي المصري للسودان: النظام الإداري', 'Turco-Egyptian Rule: Administration', 'يشرح تنظيم الحكم والإدارة في السودان خلال العهد التركي المصري.', 'Explain government and administration in Sudan during Turco-Egyptian rule.'),
      lesson(1, 29, 31, 'الحكم التركي المصري للسودان: استغلال الموارد', 'Turco-Egyptian Rule: Use of Resources', 'يبحث أثر السياسات الاقتصادية في الموارد والمجتمع السوداني.', 'Examine the effects of economic policies on Sudanese resources and society.'),
      lesson(1, 32, 40, 'الحكم التركي المصري للسودان: مقاومة السودانيين', 'Turco-Egyptian Rule: Sudanese Resistance', 'يتعرف أشكال مقاومة السودانيين للحكم التركي المصري ودوافعها.', 'Identify forms of Sudanese resistance to Turco-Egyptian rule and their causes.'),
      lesson(2, 41, 42, 'تأسيس الدولة الأموية', 'Establishment of the Umayyad State', 'يفهم ظروف تأسيس الدولة الأموية وتنظيمها.', 'Understand the circumstances surrounding the Umayyad state’s establishment and organization.'),
      lesson(2, 43, 44, 'خلفاء الدولة الأموية', 'The Umayyad Caliphs', 'يتعرف أبرز خلفاء الدولة الأموية وتسلسل حكمهم.', 'Identify prominent Umayyad caliphs and the sequence of their rule.'),
      lesson(2, 45, 46, 'الفتوحات الإسلامية في عهد الدولة الأموية', 'Islamic Expansion under the Umayyads', 'يتتبع الفتوحات الإسلامية في العصر الأموي ونتائجها.', 'Trace Islamic expansion in the Umayyad period and its consequences.'),
      lesson(2, 47, 47, 'أهم إنجازات الدولة الأموية', 'Major Achievements of the Umayyad State', 'يستعرض الإنجازات الإدارية والحضارية في العهد الأموي.', 'Review administrative and cultural achievements of the Umayyad period.'),
      lesson(2, 48, 48, 'ضعف الدولة الأموية وسقوطها', 'The Decline and Fall of the Umayyad State', 'يفسر عوامل ضعف الدولة الأموية وسقوطها.', 'Explain factors behind the decline and fall of the Umayyad state.'),
      lesson(3, 49, 52, 'انتشار الإسلام في إفريقيا', 'The Spread of Islam in Africa', 'يتتبع انتشار الإسلام في أقاليم إفريقيا المختلفة.', 'Trace the spread of Islam across different African regions.'),
      lesson(3, 53, 55, 'وسائل انتشار الإسلام في إفريقيا', 'Means of the Spread of Islam in Africa', 'يتعرف وسائل انتشار الإسلام ودور التواصل والتجارة والعلم.', 'Identify means of Islam’s spread and the roles of contact, trade, and learning.'),
      lesson(3, 56, 59, 'مظاهر الحضارة الإسلامية في الممالك الإفريقية', 'Islamic Civilization in African Kingdoms', 'يستكشف مظاهر الحضارة الإسلامية في الممالك الإفريقية.', 'Explore expressions of Islamic civilization in African kingdoms.'),
      lesson(3, 60, 64, 'الاستعمار الأوروبي لإفريقيا', 'European Colonization of Africa', 'يحلل الاستعمار الأوروبي وآثاره في شعوب القارة.', 'Analyze European colonization and its effects on the peoples of Africa.'),
      lesson(4, 65, 68, 'عصر النهضة الأوروبية', 'The European Renaissance', 'يتعرف ملامح عصر النهضة والعوامل التي أسهمت في ظهوره.', 'Identify features of the Renaissance and factors behind its emergence.'),
      lesson(4, 69, 73, 'النهضة الأدبية الأوروبية', 'The European Literary Renaissance', 'يستكشف تطور الأدب في عصر النهضة الأوروبية.', 'Explore literary developments during the European Renaissance.'),
      lesson(4, 74, 78, 'النهضة الفنية الأوروبية', 'The European Artistic Renaissance', 'يتعرف مظاهر النهضة الفنية وأبرز تحولات الفنون.', 'Identify artistic Renaissance developments and major changes in the arts.'),
      lesson(4, 79, 83, 'حركة الكشوف الجغرافية', 'The Age of Geographical Exploration', 'يفسر دوافع الكشوف الجغرافية ونتائجها التاريخية.', 'Explain the motives and historical consequences of geographical exploration.'),
      lesson(4, 84, 88, 'الثورة الصناعية', 'The Industrial Revolution', 'يحلل التحولات التقنية والاقتصادية والاجتماعية المصاحبة للثورة الصناعية.', 'Analyze the technological, economic, and social changes of the Industrial Revolution.'),
      lesson(4, 89, 102, 'الثورة الفرنسية: الأسباب والنتائج', 'The French Revolution: Causes and Consequences', 'يربط أسباب الثورة الفرنسية بأبرز نتائجها السياسية والاجتماعية.', 'Relate the causes of the French Revolution to its major political and social consequences.')
    ]
  ),
  MATH: course(
    'math',
    'MATH',
    'الرياضيات',
    'Mathematics',
    'الصف الثاني المتوسط — ثماني وحدات، الطبعة الأولى 2022م',
    [
      unit('مجموعة الأعداد الحقيقية', 'The Set of Real Numbers', 5, 29),
      unit('النسبة والتناسب', 'Ratio and Proportion', 30, 60),
      unit('القواطع والمتوسطات', 'Transversals and Medians', 61, 83),
      unit('الحركة', 'Transformations', 84, 106),
      unit('المتباينات', 'Inequalities', 107, 122),
      unit('نظريات التباين', 'Triangle Inequalities', 123, 142),
      unit('الأشكال ثلاثية الأبعاد (المجسمات)', 'Three-Dimensional Shapes (Solids)', 143, 168),
      unit('حساب المثلثات', 'Trigonometry', 169, 191)
    ],
    [
      lesson(1, 5, 29, 'مجموعة الأعداد الحقيقية', 'The Set of Real Numbers', 'يمثل الأعداد الحقيقية ويقارن بينها ويستخدم خصائصها في حل المسائل.', 'Represent and compare real numbers and use their properties to solve problems.'),
      lesson(2, 30, 60, 'النسبة والتناسب', 'Ratio and Proportion', 'يستخدم النسب والتناسب ومعدل الوحدة في حل المسائل.', 'Use ratios, proportions, and unit rates to solve problems.'),
      lesson(3, 61, 83, 'القواطع والمتوسطات', 'Transversals and Medians', 'يستكشف علاقات القواطع والمتوسطات ويطبقها على الأشكال الهندسية.', 'Explore and apply relationships involving transversals and medians in geometry.'),
      lesson(4, 84, 106, 'الحركة', 'Transformations', 'يمثل التحويلات الهندسية ويصف أثرها في الأشكال والمستوى.', 'Represent geometric transformations and describe their effects on shapes and the plane.'),
      lesson(5, 107, 122, 'المتباينات', 'Inequalities', 'يمثل المتباينات ويحلها ويفسر حلولها في سياقات عددية.', 'Represent and solve inequalities and interpret their solutions in numerical contexts.'),
      lesson(6, 123, 142, 'نظريات التباين في المثلث', 'Triangle Inequality Theorems', 'يستخدم نظريات التباين بين أضلاع المثلث وزواياه للاستدلال.', 'Use triangle inequality theorems about sides and angles to reason.'),
      lesson(7, 143, 168, 'الأشكال ثلاثية الأبعاد والمجسمات', 'Three-Dimensional Shapes and Solids', 'يصف المجسمات وخصائصها ويستخدم التمثيلات الهندسية المناسبة.', 'Describe solids and their properties using suitable geometric representations.'),
      lesson(8, 169, 191, 'حساب المثلثات', 'Trigonometry', 'يستخدم العلاقات المثلثية لحل مسائل هندسية وقياسية مناسبة.', 'Use trigonometric relationships to solve suitable geometric and measurement problems.')
    ]
  ),
  GENERAL_SCIENCE: course(
    'science',
    'GENERAL_SCIENCE',
    'العلوم الطبيعية',
    'Natural Science',
    'الصف الثاني المتوسط — ست وحدات، الطبعة الأولى 2022م',
    [
      unit('طبيعة العلم', 'The Nature of Science', 1, 20),
      unit('الشغل والآلات البسيطة', 'Work and Simple Machines', 21, 37),
      unit('تركيب المادة', 'Structure of Matter', 38, 61),
      unit('الحيوانات الفقارية', 'Vertebrate Animals', 62, 86),
      unit('البناء الضوئي والنقل في النبات', 'Photosynthesis and Transport in Plants', 87, 108),
      unit('البيئة', 'The Environment', 109, 134)
    ],
    [
      lesson(1, 1, 20, 'طبيعة العلم وعملياته', 'The Nature and Processes of Science', 'يتعرف الممارسة العلمية والطريقة العلمية والنظريات والقوانين والنظم وفروع العلوم.', 'Explore scientific practice, scientific methods, theories, laws, systems, and branches of science.'),
      lesson(2, 21, 37, 'الشغل والآلات البسيطة', 'Work and Simple Machines', 'يفسر الشغل ويتعرف البكرة والرافعة والعجلة والمحور والمستوى المائل والمسمار اللولبي.', 'Explain work and study pulleys, levers, wheels and axles, inclined planes, and screws.'),
      lesson(3, 38, 61, 'تركيب المادة والذرة', 'Structure of Matter and the Atom', 'يستكشف الذرة وخصائصها وتركيبها الإلكتروني وعلاقته بالنشاط الكيميائي.', 'Explore the atom, its properties and electron structure, and its relation to chemical activity.'),
      lesson(4, 62, 86, 'الحيوانات الفقارية', 'Vertebrate Animals', 'يصنف الحبليات والفقاريات ويدرس الأسماك والبرمائيات والزواحف والطيور والثدييات.', 'Classify chordates and vertebrates and study fish, amphibians, reptiles, birds, and mammals.'),
      lesson(5, 87, 108, 'البناء الضوئي والنقل في النبات', 'Photosynthesis and Transport in Plants', 'يفسر البناء الضوئي والعوامل المؤثرة فيه ويناقش نقل الماء والأملاح والغذاء في النبات.', 'Explain photosynthesis and its influencing factors and discuss transport of water, minerals, and food in plants.'),
      lesson(6, 109, 134, 'البيئة والدورات في الطبيعة', 'The Environment and Cycles in Nature', 'يدرس البيئة والعلاقات والدورات الطبيعية التي تربط مكوناتها.', 'Study the environment and natural cycles and relationships among its components.')
    ]
  ),
  ISLAMIC_STUDIES: course(
    'islamic',
    'ISLAMIC_STUDIES',
    'التربية الإسلامية',
    'Islamic Studies',
    'الصف الثاني المتوسط — ست وحدات، الطبعة الأولى 2022م',
    [
      unit('التجويد', 'Tajweed', 5, 11),
      unit('القرآن الكريم: الحفظ والتفسير', 'Quran: Memorization and Tafsir', 12, 75),
      unit('الأحاديث النبوية', 'Prophetic Hadith', 76, 77),
      unit('العقيدة', 'Aqidah', 78, 106),
      unit('الفقه', 'Fiqh', 107, 139),
      unit('السيرة النبوية', 'Prophetic Biography', 140, 175)
    ],
    [
      lesson(1, 5, 11, 'التجويد', 'Tajweed', 'يتعلم أحكام التجويد المقررة ويطبقها في التلاوة.', 'Learn the assigned tajweed rules and apply them in recitation.'),
      lesson(2, 12, 75, 'القرآن الكريم: الحفظ والتفسير', 'Quran: Memorization and Tafsir', 'يراجع مقرر الحفظ ويتدبر معاني الآيات المقررة وفق موضوعات الكتاب.', 'Review memorization and reflect on assigned verses according to the textbook topics.'),
      lesson(3, 76, 77, 'الأحاديث النبوية', 'Prophetic Hadith', 'يتعلم الأحاديث المقررة ومعانيها وما ترشد إليه من قيم وسلوك.', 'Study the assigned hadith, their meanings, and the values and conduct they teach.'),
      lesson(4, 78, 106, 'العقيدة', 'Aqidah', 'يفهم موضوعات العقيدة المقررة وآثار الإيمان في حياة المسلم.', 'Understand the assigned topics in creed and the role of faith in a Muslim’s life.'),
      lesson(5, 107, 139, 'الفقه', 'Fiqh', 'يدرس الأحكام والعبادات والمعاملات الواردة في موضوعات الفقه المقررة.', 'Study the rulings, worship, and dealings covered in the assigned fiqh topics.'),
      lesson(6, 140, 175, 'السيرة النبوية', 'Prophetic Biography', 'يتتبع أحداث السيرة النبوية ويستخلص منها الدروس والقيم.', 'Trace events in the Prophet’s biography and draw lessons and values from them.')
    ]
  ),
  NATIONAL_EDUCATION: course(
    'national-education',
    'NATIONAL_EDUCATION',
    'التربية الوطنية',
    'National Education',
    'الصف الثاني المتوسط — أربع وحدات، الطبعة الأولى 2022م',
    [
      unit('الوطن والوطنية', 'Homeland and Nationalism', 5, 19),
      unit('السودان: ملامح جغرافية وتاريخية', 'Sudan: Geographic and Historical Features', 20, 31),
      unit('المجتمع السوداني', 'Sudanese Society', 32, 40),
      unit('الدولة السودانية', 'The Sudanese State', 41, 53)
    ],
    [
      lesson(1, 6, 10, 'الوطن', 'The Homeland', 'يفهم معنى الوطن وصلته بالأرض والسكان والانتماء.', 'Understand the meaning of homeland and its connection to land, people, and belonging.'),
      lesson(1, 11, 14, 'معنى الوطنية', 'The Meaning of Nationalism', 'يشرح مفهوم الوطنية ويستدل على قيم الانتماء والولاء.', 'Explain nationalism and identify values of belonging and loyalty.'),
      lesson(1, 15, 19, 'المواطنة', 'Citizenship', 'يتعرف المواطنة وما يرتبط بها من حقوق وواجبات.', 'Explore citizenship and its associated rights and responsibilities.'),
      lesson(2, 20, 23, 'ميزات الأرض السودانية', 'Features of Sudanese Land', 'يصف خصائص الأرض السودانية ومواردها ومظاهرها الجغرافية.', 'Describe Sudan’s land, resources, and geographic features.'),
      lesson(2, 24, 26, 'دولة السودان', 'The State of Sudan', 'يتعرف السودان دولةً من حيث الموقع والحدود والخصائص العامة.', 'Study Sudan as a state, including its location, borders, and general characteristics.'),
      lesson(2, 27, 29, 'مقومات الدولة وعناصر تكوينها', 'Components and Elements of a State', 'يعدد عناصر الدولة ويفسر دورها في قيام الكيان السياسي.', 'Identify the elements of a state and explain their role in forming a political entity.'),
      lesson(2, 30, 31, 'مميزات الدولة ومهامها', 'Characteristics and Functions of the State', 'يفهم خصائص الدولة ومهامها في تنظيم شؤون المجتمع.', 'Understand the characteristics and functions of the state in organizing society.'),
      lesson(3, 32, 35, 'المجتمع السوداني: العادات والتقاليد والتراث', 'Sudanese Society: Customs, Traditions, and Heritage', 'يتعرف مكونات التراث والعادات والتقاليد في المجتمع السوداني.', 'Explore heritage, customs, and traditions in Sudanese society.'),
      lesson(3, 36, 38, 'خصائص المجتمع السوداني', 'Characteristics of Sudanese Society', 'يصف خصائص المجتمع السوداني وروابط أفراده.', 'Describe characteristics of Sudanese society and connections among its members.'),
      lesson(3, 39, 40, 'الهوية السودانية', 'Sudanese Identity', 'يفهم عناصر الهوية السودانية ومصادرها الثقافية والتاريخية.', 'Understand elements of Sudanese identity and their cultural and historical roots.'),
      lesson(4, 41, 44, 'اسم السودان وحدوده وتشكله عبر التاريخ', 'Sudan’s Name, Borders, and Historical Formation', 'يتتبع اسم السودان وحدوده وتحولاته عبر التاريخ.', 'Trace Sudan’s name, borders, and historical changes.'),
      lesson(4, 45, 48, 'الحضارة السودانية وعطاؤها الإنساني', 'Sudanese Civilization and Its Contributions', 'يستكشف إسهامات الحضارة السودانية في تاريخ الإنسانية.', 'Explore contributions of Sudanese civilization to human history.'),
      lesson(4, 49, 53, 'القومية السودانية', 'Sudanese National Identity', 'يناقش القومية السودانية ومقومات الوحدة والانتماء الوطني.', 'Discuss Sudanese nationhood and foundations of unity and national belonging.')
    ]
  ),
  TECHNICAL_EDUCATION: course(
    'technical-education',
    'TECHNICAL_EDUCATION',
    'أساسيات التربية التقنية',
    'Foundations of Technical Education',
    'الصف الثاني المتوسط — أربع وحدات، الطبعة الأولى 2022م',
    [
      unit('المجال الهندسي', 'Engineering Field', 5, 26),
      unit('المجال الزراعي', 'Agricultural Field', 27, 44),
      unit('الفندقة والديكور', 'Hospitality and Decoration', 45, 54),
      unit('تقنيات التجارة', 'Commercial Technologies', 55, 81)
    ],
    [
      lesson(1, 5, 12, 'الإنسان والمعادن', 'People and Metals', 'يتعرف المعادن الشائعة وخواصها وسبائكها واستخداماتها وطرق تشكيلها.', 'Identify common metals, their properties, alloys, uses, and shaping methods.'),
      lesson(1, 13, 19, 'الإنسان والأخشاب', 'People and Wood', 'يتعرف أهمية الغابات وأنواع الأخشاب واستخداماتها وتقنيات النجارة.', 'Explore forests, types and uses of wood, and woodworking techniques.'),
      lesson(1, 20, 26, 'الأجهزة الصحية', 'Sanitary Fixtures', 'يصنف الأجهزة الصحية ويتعرف استخداماتها وطرق اختيارها.', 'Classify sanitary fixtures and learn their uses and selection.'),
      lesson(2, 27, 32, 'نباتات الزينة', 'Ornamental Plants', 'يتعرف نباتات الزينة وأهميتها والعناية بها.', 'Identify ornamental plants, their importance, and their care.'),
      lesson(2, 33, 37, 'تكاثر نباتات الزينة', 'Propagation of Ornamental Plants', 'يستكشف طرق إكثار نباتات الزينة والعوامل المؤثرة في نموها.', 'Explore propagation methods for ornamental plants and factors affecting growth.'),
      lesson(2, 38, 44, 'تربية الأسماك', 'Fish Farming', 'يتعرف أسس تربية الأسماك وأهميتها ومتطلبات رعايتها.', 'Learn the foundations, importance, and care requirements of fish farming.'),
      lesson(3, 45, 47, 'تزيين المنازل من الداخل', 'Interior Home Decoration', 'يطبق مبادئ التناسق والتنظيم في اختيار عناصر الديكور الداخلي.', 'Apply coordination and organization principles when selecting interior decor.'),
      lesson(3, 48, 50, 'الخدمات الفندقية', 'Hotel Services', 'يتعرف الخدمات الفندقية وأدوار العاملين في تقديمها.', 'Explore hotel services and the roles involved in providing them.'),
      lesson(3, 51, 52, 'صناعة الفنادق', 'The Hotel Industry', 'يتعرف عناصر صناعة الفنادق ومقومات نجاحها.', 'Identify elements of the hotel industry and factors contributing to its success.'),
      lesson(3, 53, 54, 'السياحة', 'Tourism', 'يفهم أنواع السياحة وأهميتها الاقتصادية والاجتماعية.', 'Understand types of tourism and their economic and social importance.'),
      lesson(4, 55, 67, 'ريادة الأعمال التجارية', 'Commercial Entrepreneurship', 'يتعرف مفاهيم ريادة الأعمال ويخطط لفكرة مشروع تجاري بسيط.', 'Explore entrepreneurship and plan a simple commercial project idea.'),
      lesson(4, 68, 81, 'التقنيات المصرفية', 'Banking Technologies', 'يتعرف الخدمات المصرفية والتقنيات المستخدمة في المعاملات المالية.', 'Explore banking services and technologies used in financial transactions.')
    ]
  ),
  COMPUTER_SCIENCE: course(
    'ict',
    'COMPUTER_SCIENCE',
    'تكنولوجيا المعلومات والاتصالات',
    'Information and Communication Technology',
    'الصف الثاني المتوسط — أربع وحدات و23 درسًا، 2022م',
    [
      unit('شبكات التواصل الاجتماعي', 'Social Media Networks', 2, 16),
      unit('جداول البيانات الإلكترونية', 'Electronic Spreadsheets', 17, 48),
      unit('قواعد البيانات المحوسبة', 'Computerized Databases', 49, 67),
      unit('نظم إدارة قواعد البيانات', 'Database Management Systems', 68, 73)
    ],
    [
      lesson(1, 2, 3, 'مفهوم التواصل الاجتماعي الرقمي', 'Digital Social Communication', 'يشرح مفهوم التواصل الاجتماعي الرقمي ويميزه من أشكال الاتصال الأخرى.', 'Explain digital social communication and distinguish it from other forms of communication.'),
      lesson(1, 3, 4, 'أهمية شبكات التواصل الاجتماعي', 'Importance of Social Media Networks', 'يستكشف أهمية شبكات التواصل الاجتماعي واستخداماتها في الحياة اليومية.', 'Explore the importance of social media networks and their everyday uses.'),
      lesson(1, 4, 6, 'أنواع شبكات التواصل الاجتماعي', 'Types of Social Media Networks', 'يصنف أنواع شبكات التواصل الاجتماعي ويقارن بين أغراضها.', 'Classify types of social media networks and compare their purposes.'),
      lesson(1, 6, 8, 'خصائص شبكات التواصل الاجتماعي', 'Features of Social Media Networks', 'يحلل الخصائص التي تميز شبكات التواصل الاجتماعي.', 'Analyze features that distinguish social media networks.'),
      lesson(1, 8, 10, 'تطبيقات شبكات التواصل الاجتماعي', 'Social Media Applications', 'يتعرف تطبيقات التواصل الاجتماعي ويختار ما يلائم أغراضًا مختلفة.', 'Explore social media applications and select tools for different purposes.'),
      lesson(1, 11, 13, 'مواقع التواصل الاجتماعي', 'Social Media Websites', 'يستعرض أمثلة لمواقع التواصل الاجتماعي وطرائق استخدامها.', 'Review examples of social media websites and ways to use them.'),
      lesson(1, 14, 15, 'الاستخدام التعليمي لشبكات التواصل الاجتماعي', 'Educational Uses of Social Media', 'يبحث توظيف شبكات التواصل الاجتماعي في التعلم وتبادل المعرفة.', 'Explore how social media networks can support learning and knowledge sharing.'),
      lesson(1, 16, 16, 'التواصل الاجتماعي في بيئة العمل', 'Social Communication in the Workplace', 'يفهم أدوار التواصل الاجتماعي في بيئة العمل.', 'Understand roles of social communication in the workplace.'),
      lesson(2, 17, 17, 'جداول البيانات الإلكترونية وأهميتها', 'Electronic Spreadsheets and Their Importance', 'يتعرف جداول البيانات الإلكترونية واستخداماتها.', 'Explore electronic spreadsheets and their uses.'),
      lesson(2, 18, 20, 'مكونات جداول البيانات الإلكترونية', 'Spreadsheet Components', 'يميز مكونات جدول البيانات ووظيفة كل منها.', 'Identify spreadsheet components and their functions.'),
      lesson(2, 21, 24, 'تنظيم ورقة العمل', 'Organizing a Worksheet', 'ينظم البيانات في صفوف وأعمدة وخلايا داخل ورقة العمل.', 'Organize data in rows, columns, and cells in a worksheet.'),
      lesson(2, 25, 28, 'إدخال البيانات', 'Entering Data', 'يدخل البيانات في ورقة العمل وينظمها بطريقة مناسبة.', 'Enter and organize data in a worksheet.'),
      lesson(2, 29, 37, 'تنسيق البيانات والخلايا', 'Formatting Data and Cells', 'ينسق البيانات والخلايا لتحسين عرض المعلومات وقراءتها.', 'Format data and cells to improve how information is presented and read.'),
      lesson(2, 38, 43, 'إدارة المصنفات', 'Managing Workbooks', 'يدير المصنفات وأوراق العمل ويحفظ التغييرات.', 'Manage workbooks and worksheets and save changes.'),
      lesson(2, 44, 48, 'إجراء العمليات الحسابية', 'Performing Calculations', 'ينفذ عمليات حسابية على البيانات باستخدام أدوات جداول البيانات.', 'Perform calculations on data using spreadsheet tools.'),
      lesson(3, 49, 51, 'مدخل إلى قواعد البيانات المحوسبة', 'Introduction to Computerized Databases', 'يفهم مفهوم قواعد البيانات وأهميتها في تنظيم المعلومات.', 'Understand computerized databases and their role in organizing information.'),
      lesson(3, 52, 54, 'مكونات قاعدة البيانات', 'Database Components', 'يتعرف مكونات قاعدة البيانات والعلاقات بين سجلاتها وحقولها.', 'Identify database components and relationships among records and fields.'),
      lesson(3, 55, 58, 'تصميم قاعدة البيانات', 'Database Design', 'ينظم المعلومات في جداول مترابطة وفق غرض محدد.', 'Organize information in related tables for a defined purpose.'),
      lesson(3, 59, 60, 'إنشاء قاعدة البيانات', 'Creating a Database', 'يخطط لقاعدة بيانات بسيطة وينشئ بنيتها الأساسية.', 'Plan a simple database and create its basic structure.'),
      lesson(3, 61, 62, 'استخدام قاعدة البيانات', 'Using a Database', 'يسترجع المعلومات من قاعدة البيانات ويستخدمها.', 'Retrieve and use information from a database.'),
      lesson(3, 63, 67, 'خصائص قواعد البيانات', 'Database Characteristics', 'يتعرف خصائص قواعد البيانات ومزايا تنظيم البيانات بها.', 'Explore database characteristics and benefits of structured data.'),
      lesson(4, 68, 70, 'مقدمة في نظم إدارة قواعد البيانات', 'Introduction to Database Management Systems', 'يفهم دور نظم إدارة قواعد البيانات في إنشاء البيانات وتنظيمها.', 'Understand how database management systems create and organize data.'),
      lesson(4, 71, 73, 'إدارة قواعد البيانات واستخدامها', 'Managing and Using Databases', 'يتدرب على إدارة قاعدة البيانات والتعامل مع محتوياتها.', 'Practice managing a database and working with its contents.')
    ]
  )
};

export const SUDAN_MIDDLE_G8_LECTURES: Partial<Record<Subject, ReturnType<typeof createSudanMiddleGrade7Lectures>>> =
  Object.fromEntries(
    Object.entries(courses).map(([subject, courseData]) => [
      subject,
      createSudanMiddleGrade7Lectures(courseData)
    ])
  ) as Partial<Record<Subject, ReturnType<typeof createSudanMiddleGrade7Lectures>>>;

export function getSudanMiddleGrade8Curriculum(subject: Subject) {
  return SUDAN_MIDDLE_G8_LECTURES[subject] ?? null;
}
