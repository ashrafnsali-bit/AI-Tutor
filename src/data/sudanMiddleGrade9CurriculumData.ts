import type { Subject } from '../types';
import {
  createSudanMiddleGrade7Lectures,
  grade7Lesson,
  type SudanMiddleGrade7Course,
  type SudanMiddleGrade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

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
  gradeLevel: 'G9',
  titleAr,
  titleEn,
  edition,
  units,
  lessons
});

const unit = (
  titleAr: string,
  titleEn: string,
  firstPage?: number,
  lastPage?: number
): SudanMiddleGrade7Course['units'][number] => ({ titleAr, titleEn, firstPage, lastPage });

const lesson = (
  unitNumber: number,
  page: number | undefined,
  lastPage: number | undefined,
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
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('نصوص القراءة والأدب الوطني', 'Reading and National Literature'),
      unit('المشتقات وأعمالها', 'Derivatives and Their Function'),
      unit('التوابع في اللغة العربية', 'Appositives and Modifiers'),
      unit('أساليب النداء والاستثناء والشرط', 'Vocative, Exception, and Conditional Styles'),
      unit('البلاغة والنقد الأدبي', 'Rhetoric and Literary Criticism'),
      unit('التعبير والإنشاء والإملاء', 'Composition, Writing, and Spelling')
    ],
    [
      lesson(1, undefined, undefined, 'أدب الوطن وقيم الفداء', 'National Literature and Sacrifice Values', 'يحلل نصوص الأدب الوطني ويستخلص معاني حب الوطن والانتماء.', 'Analyze national literature texts and derive themes of patriotism and belonging.'),
      lesson(1, undefined, undefined, 'شعر الحكمة والتأمل', 'Wisdom and Contemplative Poetry', 'يتذوق أبيات الحكمة ويكتشف الصور الجمالية ودلالاتها الفكرية.', 'Appreciate wisdom poetry and explore aesthetic imagery and meaning.'),
      lesson(2, undefined, undefined, 'اسم الفاعل وصيغ المبالغة', 'Active Participles and Intensive Forms', 'يصوغ اسم الفاعل وصيغ المبالغة ويوظفها في التراكيب اللغوية.', 'Form active participles and intensive patterns and apply them in sentences.'),
      lesson(2, undefined, undefined, 'اسم المفعول والصفة المشبهة', 'Passive Participles and Assimilated Adjectives', 'يميز اسم المفعول والصفة المشبهة ويدرس عملهما الإعرابي.', 'Distinguish passive participles and assimilated adjectives and understand their syntax.'),
      lesson(2, undefined, undefined, 'اسما الزمان والمكان واسم الآلة', 'Nouns of Time, Place, and Instrument', 'يتعرف أوزان أسماء الزمان والمكان والآلة ويستعملها في سياق سليم.', 'Recognize patterns of nouns of time, place, and instrument and use them accurately.'),
      lesson(3, undefined, undefined, 'النعت وأنواعه', 'Adjectives and Their Types', 'يطبق أحكام النعت المفرد والجملة وشبه الجملة.', 'Apply grammatical rules for single-word, clausal, and phrasal adjectives.'),
      lesson(3, undefined, undefined, 'التوكيد اللفظي والمعنوي', 'Verbal and Semantic Corroboration', 'يميز التوكيد بنوعيه ويضبط المؤكَّد والتوكيد إعرابياً.', 'Distinguish verbal and semantic corroboration and determine their case endings.'),
      lesson(3, undefined, undefined, 'العطف والبدل', 'Conjunction and Apposition', 'يستخدم حروف العطف ويفصل بين أنواع البدل وأحكامه.', 'Use coordinating conjunctions and differentiate types and rules of apposition.'),
      lesson(4, undefined, undefined, 'أسلوب النداء وأحكام المنادى', 'Vocative Style and Rulings', 'يحدد أركان أسلوب النداء وحالات إعراب المنادى وبنائه.', 'Identify elements of the vocative and cases of declension and inflection.'),
      lesson(4, undefined, undefined, 'أسلوب الاستثناء', 'Style of Exception', 'يوظف أدوات الاستثناء (إلا، غير، سوى) ويعرب المستثنى بدقة.', 'Apply exception tools and accurately determine the grammatical case of the excepted noun.'),
      lesson(4, undefined, undefined, 'أسلوب الشرط وأدواته الجازمة', 'Conditional Style and Apocopating Particles', 'يربط بين جملتي الشرط والجواب باستخدام الأدوات الجازمة.', 'Connect conditional and result clauses using apocopating particles.'),
      lesson(5, undefined, undefined, 'التشبيه وأركانه وأنواعه', 'Simile, Its Elements, and Types', 'يحلل أركان التشبيه (المشبه والمشبه به والأداة ووجه الشبه) ويوضح أثره البلاغي.', 'Analyze simile elements and explain their rhetorical and aesthetic impact.'),
      lesson(5, undefined, undefined, 'الاستعارة المكنية والتصريحية', 'Implicit and Explicit Metaphor', 'يفرق بين الاستعارة المكنية والتصريحية ويفسر جمال التصوير.', 'Differentiate implicit and explicit metaphors and explain figurative beauty.'),
      lesson(5, undefined, undefined, 'المحسنات البديعية: الطباق والمقابلة والجناس', 'Rhetorical Devices: Antithesis and Paronomasia', 'يرصد المحسنات البديعية في النصوص ويشرح قيمتها الموسيقية والمعنوية.', 'Identify rhetorical devices in texts and explain their musical and contextual value.'),
      lesson(6, undefined, undefined, 'قواعد رسم الهمزات وعلامات الترقيم', 'Hamza Spelling Rules and Punctuation', 'يطبق القواعد الإملائية الدقيقة لكتابة الهمزة ويوظف علامات الترقيم.', 'Apply accurate spelling rules for hamza writing and employ punctuation marks.'),
      lesson(6, undefined, undefined, 'الإنشاء والتقرير والمقال الإقناعي', 'Composition, Reports, and Persuasive Essays', 'يكتب مقالاً مترابطاً وتقرير موضوعياً معتمداً على أدلة لغوية وفكرية واضحة.', 'Draft coherent essays and objective reports using sound linguistic arguments.')
    ]
  ),
  ENGLISH: course(
    'english',
    'ENGLISH',
    'اللغة الإنجليزية',
    'English',
    'SMILE Book 9 — Pupil’s Book — Intermediate Level 3',
    [
      unit('People and Science', 'People and Science', 1, 8),
      unit('Arts and Literature', 'Arts and Literature', 9, 16),
      unit('Around the World', 'Around the World', 17, 24),
      unit('Work and Play', 'Work and Play', 25, 32),
      unit('Food and Health', 'Food and Health', 33, 40),
      unit('Money and Shopping', 'Money and Shopping', 41, 48),
      unit('Learning', 'Learning', 49, 56),
      unit('Looking Back', 'Looking Back', 57, 64)
    ],
    [
      lesson(1, 1, 8, 'الناس والعلوم', 'People and Science', 'يتدرب المتعلم على فهم نصوص الوحدة والتحدث والكتابة حول الناس والعلوم.', 'Practise understanding, speaking, and writing about people and science.'),
      lesson(2, 9, 16, 'الفنون والأدب', 'Arts and Literature', 'يستخدم المتعلم مفردات وتراكيب الوحدة للتواصل حول الفنون والأدب.', 'Use the unit vocabulary and structures to communicate about arts and literature.'),
      lesson(3, 17, 24, 'حول العالم', 'Around the World', 'يقرأ ويتحدث عن أماكن وثقافات مختلفة مستخدمًا مهارات اللغة في الوحدة.', 'Read and talk about places and cultures using the language skills in the unit.'),
      lesson(4, 25, 32, 'العمل واللعب', 'Work and Play', 'يعبر المتعلم عن العمل ووقت الفراغ من خلال أنشطة الاستماع والقراءة والتواصل.', 'Communicate about work and leisure through listening, reading, and speaking activities.'),
      lesson(5, 33, 40, 'الطعام والصحة', 'Food and Health', 'يطبق مفردات الوحدة وتراكيبها في مواقف تتصل بالطعام والصحة.', 'Apply the unit vocabulary and structures in contexts about food and health.'),
      lesson(6, 41, 48, 'النقود والتسوق', 'Money and Shopping', 'يتواصل المتعلم باللغة الإنجليزية في مواقف البيع والشراء والتعامل مع النقود.', 'Communicate in English in shopping and money-related situations.'),
      lesson(7, 49, 56, 'التعلم', 'Learning', 'يقرأ ويتحدث عن التعلم ويطبق المهارات اللغوية الواردة في الوحدة.', 'Read and communicate about learning while applying the unit language skills.'),
      lesson(8, 57, 64, 'مراجعة', 'Looking Back', 'يراجع المتعلم المفردات والتراكيب ومهارات اللغة التي تناولتها الوحدات السابقة.', 'Review the vocabulary, structures, and language skills from the preceding units.')
    ]
  ),
  MATH: course(
    'math',
    'MATH',
    'الرياضيات',
    'Mathematics',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('المجموعات والتطبيقات', 'Sets and Mappings'),
      unit('المعادلات الآنية الخطية', 'Simultaneous Linear Equations'),
      unit('التحليل الجبري والمعادلات التربيعية', 'Algebraic Factoring and Quadratic Equations'),
      unit('الكسور الجبرية والعمليات عليها', 'Algebraic Fractions and Operations'),
      unit('هندسة الدائرة ومبرهناتها', 'Circle Geometry and Theorems'),
      unit('الهندسة التحليلية والإحداثية', 'Coordinate and Analytic Geometry'),
      unit('حساب المثلثات وتطبيقاته', 'Trigonometry and Applications'),
      unit('الإحصاء والاحتمالات', 'Statistics and Probability')
    ],
    [
      lesson(1, undefined, undefined, 'المجموعات والعمليات عليها وجداء ديكارت', 'Sets, Operations, and Cartesian Product', 'يفهم المفاهيم المتقدمة للمجموعات ويمثل الجداء الديكارتي بيانياً وجبرياً.', 'Master advanced set operations and represent Cartesian products graphically and algebraically.'),
      lesson(1, undefined, undefined, 'التطبيقات وأنواعها وتركيبها', 'Mappings, Types, and Composition', 'يميز التطبيق الشامل والمتباين والتقابل ويجري تركيب التطبيقات.', 'Distinguish injective, surjective, and bijective mappings and perform mapping compositions.'),
      lesson(2, undefined, undefined, 'حل نظام معادلتين خطيتين بالتعويض والحذف', 'Simultaneous Linear Equations by Elimination and Substitution', 'يحل نظام معادلتين خطيتين في متغيرين بطريقتي الحذف والتعويض الجبري.', 'Solve simultaneous two-variable linear systems using algebraic elimination and substitution.'),
      lesson(2, undefined, undefined, 'الحل البياني للأنظمة الخطية وتطبيقاتها الحياتية', 'Graphical Solution and Real-World Applications', 'يمثل المعادلات بيانياً ويحدد نقطة التقاطع ويحل مسائل من واقع البيئة السودانية.', 'Plot linear equations, identify points of intersection, and model real-life problems.'),
      lesson(3, undefined, undefined, 'تحليل المقادير الجبرية الثلاثية والفرق بين مربعين ومكعبين', 'Factoring Trinomials and Difference of Squares/Cubes', 'يتقن طرق التحليل بإخراج العامل المشترك، الفرق بين مربعين، ومجموع وفرق مكعبين.', 'Master factoring by common factor, difference of squares, and sum/difference of cubes.'),
      lesson(3, undefined, undefined, 'حل المعادلة التربيعية بالتحليل وبالقانون العام', 'Solving Quadratic Equations by Factoring and Formula', 'يحل المعادلات التربيعية في متغير واحد باستخدام التحليل والقانون العام المميز.', 'Solve single-variable quadratic equations using factoring and the general quadratic formula.'),
      lesson(4, undefined, undefined, 'تبسيط الكسور الجبرية وضربها وقسمتها', 'Simplifying, Multiplying, and Dividing Algebraic Fractions', 'يبسط المقادير الكسرية الجبرية ويجري عمليتي الضرب والقسمة.', 'Simplify algebraic fractions and execute multiplication and division operations.'),
      lesson(4, undefined, undefined, 'جمع الكسور الجبرية وطرحها والمضاعف المشترك البسيط', 'Adding and Subtracting Fractions with LCM', 'يوحد مقامات الكسور الجبرية بحساب المضاعف المشترك الأصغر ويحسب ناتج الجمع والطرح.', 'Find common denominators using LCM to add and subtract rational expressions.'),
      lesson(5, undefined, undefined, 'أوتار الدائرة والأعمدة المقامة من المركز', 'Chords of a Circle and Perpendiculars from Center', 'يطبق مبرهنة العمود النازل من مركز الدائرة على الوتر ومبرهنات الأوتار المتطابقة.', 'Apply theorems regarding perpendiculars from the center to chords and congruent chords.'),
      lesson(5, undefined, undefined, 'الزوايا المركزية والمحيطية والمماسية', 'Central, Inscribed, and Tangent Angles', 'يستنتج العلاقة بين الزاوية المركزية والزاوية المحيطية المشتركة في نفس القوس.', 'Derive and apply relationships between central and inscribed angles subtending the same arc.'),
      lesson(6, undefined, undefined, 'المسافة بين نقطتين وإحداثيا منتصف قطعة مستقيمة', 'Distance Formula and Midpoint Coordinates', 'يحسب البعد بين نقطتين في المستوى الإحداثي ويعين نقطة المنتصف.', 'Calculate distance between two Cartesian points and locate segment midpoints.'),
      lesson(6, undefined, undefined, 'ميل الخط المستقيم ومعادلة المستقيم', 'Slope and Equation of a Straight Line', 'يجد ميل المستقيم بمعلومية نقطتين ويكتب معادلة الخط المستقيم بصيغها المختلفة.', 'Determine line slope from two points and formulate straight line equations.'),
      lesson(7, undefined, undefined, 'النسب المثلثية للزوايا الحادة (الجيب، جيب التمام، والظل)', 'Trigonometric Ratios (Sine, Cosine, Tangent)', 'يعرف النسب المثلثية الأساسية في المثلث القائم الزاوية ويحسب قيمها للزوايا الخاصة.', 'Define primary trigonometric ratios in right triangles and compute exact values for special angles.'),
      lesson(7, undefined, undefined, 'زوايا الارتفاع والانخفاض وحل المثلث القائم', 'Angles of Elevation/Depression and Right Triangle Solutions', 'يوظف النسب المثلثية في قياس الارتفاعات وحل مسائل الارتفاع والانخفاض العملية.', 'Apply trigonometry to measure heights and solve real-world elevation and depression problems.'),
      lesson(8, undefined, undefined, 'الجداول التكرارية ومقاييس النزعة المركزية للبيانات المبوبة', 'Frequency Distributions and Central Tendency for Grouped Data', 'ينظم البيانات في فئات ويحسب الوسط الحسابي والوسيط والمنوال للبيانات المبوبة.', 'Organize grouped frequency distributions and compute mean, median, and mode.'),
      lesson(8, undefined, undefined, 'مفهوم الاحتمال وفضاء العينة وقوانين الاحتمال الأساسية', 'Probability Concepts, Sample Spaces, and Axioms', 'يحدد فضاء الإمكانات ويحسب احتمال وقوع الأحداث البسيطة والمركبة.', 'Determine sample spaces and calculate theoretical probabilities of simple and compound events.')
    ]
  ),
  GENERAL_SCIENCE: course(
    'science',
    'GENERAL_SCIENCE',
    'العلوم الطبيعية',
    'Natural Science',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('الكهرباء الساكنة والتيارية وقانون أوم', 'Static and Current Electricity & Ohm’s Law'),
      unit('المغناطيسية والتأثير الكهرومغناطيسي', 'Magnetism and Electromagnetic Effects'),
      unit('التفاعلات الكيميائية والمحاليل والأحماض', 'Chemical Reactions, Solutions, and Acids'),
      unit('انقسام الخلية وعلم الوراثة', 'Cell Division and Genetics'),
      unit('أجهزة جسم الإنسان والتكاثر والمناعة', 'Human Body Systems, Reproduction, and Immunity'),
      unit('البيئة والتوازن البيئي والموارد الطبيعية', 'Environment, Ecological Balance, and Resources')
    ],
    [
      lesson(1, undefined, undefined, 'الشحنات الكهربائية الساكنة وطرق الشحن وقانون كولوم', 'Static Electric Charges and Charging Methods', 'يفسر الشحنات الكهربائية الساكنة وطرق الشحن بالدلك واللمس والتأثير وقوى التجاذب والتنافر.', 'Explain static charges, induction, conduction, friction, and electric force laws.'),
      lesson(1, undefined, undefined, 'التيار الكهربي وفرق الجهد وقانون أوم', 'Electric Current, Voltage, and Ohm’s Law', 'يطبق قانون أوم (جـ = ت × م) في حل المسائل وحساب المقاومة وشدة التيار.', 'Apply Ohm’s law (V = I × R) to calculate resistance, voltage, and current.'),
      lesson(1, undefined, undefined, 'توصيل المقاومات على التوالي والتوازي والدوائر المنزلية', 'Series and Parallel Resistors & Home Circuits', 'يقارن بين التوصيل على التوالي والتوازي ويفسر أسباب التوصيل المتوازي في المنازل السودانية.', 'Compare series vs parallel circuits and explain parallel wiring in Sudanese households.'),
      lesson(2, undefined, undefined, 'المجال المغناطيسي للمغناطيس وللتيار الكهربي', 'Magnetic Fields of Magnets and Current', 'يرسم خطوط المجال المغناطيسي ويوضح المجال المتولد حول سلك يمر به تيار وملف حلزوني.', 'Trace magnetic field lines around permanent magnets, straight wires, and solenoids.'),
      lesson(2, undefined, undefined, 'الحث الكهرومغناطيسي والمولد والمحول الكهربائي', 'Electromagnetic Induction, Generators, and Transformers', 'يشرح ظاهرة الحث الكهرومغناطيسي ومبدأ عمل الدينامو والمحول الكهربي الرافع والخافض.', 'Explain electromagnetic induction and operating principles of generators and transformers.'),
      lesson(3, undefined, undefined, 'أنواع التفاعلات الكيميائية ومعادلاتها الموزونة', 'Types of Chemical Reactions and Balanced Equations', 'يصنف تفاعلات الاتحاد والانحلال والإحلال ويكتب المعادلات الكيميائية الرمزية الموزونة.', 'Classify synthesis, decomposition, and displacement reactions with balanced equations.'),
      lesson(3, undefined, undefined, 'الأحماض والقواعد والرقم الهيدروجيني والكواشف', 'Acids, Bases, pH Scale, and Indicators', 'يميز خواص الأحماض والقواعد ويستخدم الكواشف ويفسر مقياس الرقم الهيدروجيني (pH).', 'Distinguish acid and base properties using indicators and interpret the pH scale.'),
      lesson(4, undefined, undefined, 'الكروموسومات والانقسام الميتوزي والميوزي', 'Chromosomes, Mitosis, and Meiosis', 'يقارن بين الانقسام المتساوي والمنصف وأهميتهما في النمو وإنتاج الأمشاج.', 'Compare mitotic and meiotic cell divisions and their roles in growth and gamete formation.'),
      lesson(4, undefined, undefined, 'مبادئ علم الوراثة وتجارب مندل وانتقال الصفات', 'Mendelian Genetics and Trait Inheritance', 'يطبق قوانين مندل في توارث الصفات السائدة والمتنحية باستخدام مربع بانيت.', 'Apply Mendel’s principles of inheritance for dominant and recessive traits via Punnett squares.'),
      lesson(5, undefined, undefined, 'الجهاز التناسلي والتكاثر البشري والحمل', 'Reproductive System, Human Reproduction, and Pregnancy', 'يتعرف تركيب الجهاز التناسلي الذكري والأنثوي ومراحل الإخصاب وتكون الجنين.', 'Study male and female reproductive anatomy, fertilization phases, and fetal development.'),
      lesson(5, undefined, undefined, 'جهاز المناعة ومقاومة الأمراض والتطعيم', 'Immune System, Disease Resistance, and Vaccination', 'يصف آليات المناعة الطبيعية والمكتسبة ودور اللقاحات في الوقاية من الأوبئة.', 'Describe innate and acquired immune mechanisms and the role of vaccines against epidemics.'),
      lesson(6, undefined, undefined, 'السلاسل والشبكات الغذائية والدورات في النظام البيئي', 'Food Chains, Webs, and Biogeochemical Cycles', 'يحلل تدفق الطاقة في السلاسل الغذائية ودورات الكربون والنيتروجين والماء في الطبيعة.', 'Analyze trophic energy flow and biogeochemical cycles of carbon, nitrogen, and water.'),
      lesson(6, undefined, undefined, 'حماية البيئة في السودان وإدارة الموارد المائية ومكافحة التصحر', 'Environmental Conservation, Water Management, and Desertification Control in Sudan', 'يقترح حلولاً علمية لمشكلات التصحر واستنزاف المياه والتلوث في البيئة السودانية.', 'Propose scientific solutions for desertification, water management, and pollution in Sudan.')
    ]
  ),
  ISLAMIC_STUDIES: course(
    'islamic',
    'ISLAMIC_STUDIES',
    'التربية الإسلامية',
    'Islamic Studies',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('التجويد وأحكام التلاوة', 'Tajweed and Recitation Rules'),
      unit('القرآن الكريم وتفسيره (سورة الحجرات)', 'Holy Quran and Tafsir (Surat Al-Hujurat)'),
      unit('الحديث النبوي الشريف وقيمه', 'Prophetic Hadith and Values'),
      unit('العقيدة الإسلامية والإيمان باليوم الآخر والقدر', 'Islamic Creed, Day of Judgment, and Qadar'),
      unit('الفقه الإسلامي وأحكام المعاملات والأسرة', 'Islamic Fiqh, Transactions, and Family'),
      unit('السيرة النبوية وعهود الخلفاء الراشدين', 'Prophetic Biography and Rightly Guided Caliphs')
    ],
    [
      lesson(1, undefined, undefined, 'أحكام الميم الساكنة (الإخفاء الشفوي والإدغام والإظهار)', 'Rules of Meem Saakinah (Oral Concealment, Merging, Manifestation)', 'يطبق أحكام الميم الساكنة الثلاثة ويستخرج أمثلتها من آيات التلاوة.', 'Apply the three rules of silent meem with practical textual examples.'),
      lesson(1, undefined, undefined, 'أحكام الراء واللام والإدغام بأنواعه', 'Rules of Raa, Laam, and Types of Merging', 'يميز حالات تفخيم وترقيق الراء ولام لفظ الجلالة وإدغام المتماثلين والمتجانسين.', 'Distinguish emphatic and light raa, laam of Allah, and types of phonetic merging.'),
      lesson(2, undefined, undefined, 'سورة الحجرات: الآداب مع الله ورسوله والمؤمنين', 'Surat Al-Hujurat: Manners toward Allah, the Prophet, and Believers', 'يتدبر الآيات الكريمة ويستنبط وجوب التثبت من الأخبار وحرمة السخرية والغيبة.', 'Reflect on verses emphasizing news verification and prohibiting mockery and backbiting.'),
      lesson(2, undefined, undefined, 'سورة الحجرات: الأخوة الإيمانية ووحدة البشرية والتقوى', 'Surat Al-Hujurat: Faith Brotherhood, Human Equality, and Taqwa', 'يشرح معاني الأخوة الإسلامية ومقياس التفاضل عند الله القائم على التقوى والعمل الصالح.', 'Explain Islamic brotherhood and the divine standard of preference based on taqwa.'),
      lesson(3, undefined, undefined, 'حديث شعب الإيمان والحياء', 'Hadith on Branches of Faith and Modesty', 'يتعلم نص الحديث ومعانيه ودور الحياء في صيانة سلوك المسلم.', 'Learn the hadith text, core meanings, and how modesty safeguards character.'),
      lesson(3, undefined, undefined, 'حديث اجتناب السبع الموبقات وحرمة الدماء والأموال', 'Hadith on Destructive Sins and Sacredness of Life and Property', 'يعدد كبائر الذنوب ويستشعر خطورة الشرك والسحر والربا وأكل مال اليتيم.', 'Identify major sins and recognize the severity of shirk, usury, and taking orphan property.'),
      lesson(4, undefined, undefined, 'الإيمان باليوم الآخر وأشراطه والبعث والجزاء', 'Belief in the Last Day, Signs, Resurrection, and Recompense', 'يرسخ الإيمان بأشراط الساعة والبعث والحساب والجنة والنار وأثرها في الاستقامة.', 'Establish belief in signs of the Hour, resurrection, reckoning, and moral uprightness.'),
      lesson(4, undefined, undefined, 'الإيمان بالقضاء والقدر ومراتبه وثماره', 'Belief in Divine Decree (Qadaa and Qadar)', 'يفهم مراتب القدر (العلم، الكتابة، المشيئة، والخلق) وربطه بالتوكل والأخذ بالأسباب.', 'Understand the four ranks of Qadar, connecting reliance on Allah with lawful actions.'),
      lesson(5, undefined, undefined, 'فقه المعاملات المالية والبيوع المحرمة والربا', 'Financial Transactions, Prohibited Sales, and Usury', 'يميز البيوع المشروعة من المحرمة كالغرر والربا والاحتكار لحماية المجتمع.', 'Distinguish lawful trade from fraudulent, usurious, and monopolistic practices.'),
      lesson(5, undefined, undefined, 'أحكام الأسرة في الإسلام والزواج والتربية', 'Family Law, Marriage, and Parental Upbringing', 'يدرس مقاصد الزواج وحقوق الزوجين ومسؤولية تربية الأبناء ورعايتهم.', 'Study objectives of marriage, spousal rights, and parental educational responsibilities.'),
      lesson(6, undefined, undefined, 'فتح مكة وحجة الوداع ووفاة النبي ﷺ', 'Conquest of Mecca, Farewell Pilgrimage, and the Prophet’s Demise', 'يتتبع وقائع فتح مكة وعفو النبي الأعظم ووصايا خطبة حجة الوداع الخالدة.', 'Trace the Conquest of Mecca, the Prophet’s pardon, and the Farewell Sermon precepts.'),
      lesson(6, undefined, undefined, 'عهد الخلفاء الراشدين وإنجازاتهم وفتوحاتهم', 'Era of Rightly Guided Caliphs, Achievements, and Expansions', 'يستخلص الدروس القيادية والحضارية من عهود أبي بكر وعمر وعثمان وعلي رضي الله عنهم.', 'Derive leadership and civilizational lessons from the Rightly Guided Caliphs.')
    ]
  ),
  GEOGRAPHY: course(
    'geography',
    'GEOGRAPHY',
    'الجغرافيا',
    'Geography',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('قارة آسيا: الجغرافيا الطبيعية والبشرية', 'Asia: Physical and Human Geography'),
      unit('قارة أوروبا: الجغرافيا الطبيعية والاقتصادية', 'Europe: Physical and Economic Geography'),
      unit('جغرافية السودان الإقليمية والاقتصادية', 'Sudan’s Regional and Economic Geography'),
      unit('البيئة والتنمية والتكامل الاقتصادي', 'Environment, Development, and Economic Integration')
    ],
    [
      lesson(1, undefined, undefined, 'قارة آسيا: الموقع والمساحة ومظاهر السطح الكبرى', 'Asia: Location, Area, and Major Landforms', 'يحدد الموقع الجغرافي لآسيا وأبرز السلاسل الجبلية (الهيمالايا) والهضاب والسهول والأحواض النهرية.', 'Locate Asia and examine major landforms including the Himalayas, plateaus, and river basins.'),
      lesson(1, undefined, undefined, 'المناخ والنبات الطبيعي والأقاليم المناخية في آسيا', 'Climate, Vegetation, and Climatic Regions in Asia', 'يربط بين الامتداد الفلكي والتضاريس وتوزيع الرياح الموسمية والأقاليم المناخية والنباتية.', 'Connect astronomical extent and relief with monsoons, climatic regions, and natural vegetation.'),
      lesson(1, undefined, undefined, 'السكان والأنشطة الاقتصادية في آسيا والنمور الآسيوية', 'Population, Economic Activities, and Asian Tigers', 'يحلل الكثافة السكانية والإنتاج الزراعي والصناعي والنهضة الاقتصادية في دول آسيا.', 'Analyze demographic density, agricultural and industrial production, and economic growth in Asia.'),
      lesson(2, undefined, undefined, 'قارة أوروبا: الموقع والخصائص الطبيعية والتضاريس', 'Europe: Location, Physical Features, and Relief', 'يصف موقع أوروبا وسواحلها وتضاريسها من سلاسل جبال الألب والسهل الأوروبي العظيم.', 'Describe European boundaries, indented coastlines, Alpine mountain chains, and the Great European Plain.'),
      lesson(2, undefined, undefined, 'المناخ والسكان والتكامل الاقتصادي في أوروبا', 'Climate, Demographics, and Economic Integration in Europe', 'يدرس أثر تيار الخليج الدافئ في مناخ أوروبا وتوزيع السكان والنشاط الصناعي والتجاري.', 'Study the Gulf Stream’s climatic impact, population distributions, and industrial/trade prowess.'),
      lesson(3, undefined, undefined, 'السودان: الأقاليم الجغرافية الطبيعية والمناخية', 'Sudan: Natural and Climatic Regions', 'يصنف أقاليم السودان الجغرافية من الإقليم الصحراوي وشبه الصحراوي إلى إقليم السافنا.', 'Classify Sudan’s natural zones from desert and semi-desert to low and high rainfall savannas.'),
      lesson(3, undefined, undefined, 'الموارد المائية ونهر النيل وروافده في السودان', 'Water Resources and the River Nile Basin in Sudan', 'يشرح شبكة نهر النيل (النيل الأزرق، الأبيض، عطبرة) والمياه الجوفية وخزانات وسدود التوليد.', 'Explain the Nile drainage network, tributaries, groundwater aquifers, and hydroelectric dams in Sudan.'),
      lesson(3, undefined, undefined, 'الإنتاج الزراعي والحيواني والغابي في السودان', 'Agriculture, Livestock, and Forestry Production in Sudan', 'يحلل مقومات الزراعة المروية والمطرية والثروة الحيوانية الهائلة وإنتاج الصمغ العربي.', 'Analyze irrigated and rainfed farming, vast livestock herds, and gum arabic forestry in Sudan.'),
      lesson(3, undefined, undefined, 'الثروة المعدنية والصناعة وخطوط النقل والتجارة في السودان', 'Minerals, Industry, Transport Networks, and Trade in Sudan', 'يتعرف توزع الذهب والنفط والمعادن والصناعات التحويلية والموانئ البحرية وطرق التجارة.', 'Explore distributions of gold, oil, minerals, manufacturing industries, seaports, and trade corridors.'),
      lesson(4, undefined, undefined, 'التصحر وإدارة الموارد والتكامل الاقتصادي الإقليمي', 'Desertification, Resource Management, and Regional Integration', 'يقترح استراتيجيات لمواجهة الجفاف والتصحر وتعزيز التكامل بين ولايات السودان والدول المجاورة.', 'Propose strategies for combating desertification and enhancing interstate and regional economic integration.')
    ]
  ),
  HISTORY: course(
    'history',
    'HISTORY',
    'التاريخ',
    'History',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('الثورة والدولة المهدية في السودان', 'The Mahdist Revolution and State in Sudan'),
      unit('نظم الحكم والإدارة في فترة الحكم الثنائي', 'Government and Administration under Condominium Rule'),
      unit('مقاومة السودانيين للحكم الثنائي', 'Sudanese Resistance to Condominium Rule'),
      unit('التطورات السياسية والاجتماعية في السودان (1954–1985م)', 'Political and Social Developments in Sudan (1954–1985)'),
      unit('الحكم العثماني للولايات العربية ونتائجه', 'Ottoman Rule in the Arab Provinces and Its Consequences'),
      unit('تقسيم أفريقيا وحركات التحرر الوطني', 'The Partition of Africa and National Liberation Movements'),
      unit('التطورات العالمية بعد الحرب العالمية الثانية', 'Global Developments after the Second World War')
    ],
    [
      lesson(1, undefined, undefined, 'الثورة والدولة المهدية', 'The Mahdist Revolution and State', 'يتتبع نشأة الثورة المهدية وتطور الدولة المهدية في السودان ضمن سياقها التاريخي.', 'Trace the emergence of the Mahdist Revolution and the development of the Mahdist state in Sudan.'),
      lesson(2, undefined, undefined, 'نظم الحكم والإدارة في فترة الحكم الثنائي', 'Government and Administration under Condominium Rule', 'يصف نظم الحكم والإدارة في السودان خلال فترة الحكم الثنائي.', 'Describe systems of government and administration in Sudan under condominium rule.'),
      lesson(3, undefined, undefined, 'مقاومة السودانيين للحكم الثنائي', 'Sudanese Resistance to Condominium Rule', 'يحلل صور المقاومة السودانية للحكم الثنائي، ومنها الحركات الدينية والقبلية وثورة 1924م.', 'Examine Sudanese resistance to condominium rule, including religious/tribal movements and the 1924 revolution.'),
      lesson(4, undefined, undefined, 'التطورات السياسية والاجتماعية في السودان (1954–1985م)', 'Political and Social Developments in Sudan (1954–1985)', 'يرتب أبرز التطورات السياسية والاجتماعية في السودان خلال الفترة المحددة حتى الاستقلال.', 'Place major political and social developments in Sudan in chronological context up to independence.'),
      lesson(5, undefined, undefined, 'الحكم العثماني للولايات العربية ونتائجه', 'Ottoman Rule in the Arab Provinces and Its Consequences', 'يفسر مظاهر الحكم العثماني في الولايات العربية وما ترتب عليه من نتائج سياسية واجتماعية.', 'Explain Ottoman rule in the Arab provinces and its political and social consequences.'),
      lesson(6, undefined, undefined, 'تقسيم أفريقيا وحركات التحرر الوطني', 'The Partition of Africa and National Liberation Movements', 'يربط بين تقسيم القارة الأفريقية والاستعمار ونشأة حركات التحرر الوطني ونيل الاستقلال.', 'Connect the partition of Africa and colonial rule with national liberation movements and independence.'),
      lesson(7, undefined, undefined, 'التطورات العالمية بعد الحرب العالمية الثانية', 'Global Developments after the Second World War', 'يتعرف التحولات العالمية الرئيسة التي أعقبت الحرب العالمية الثانية وظهور الأمم المتحدة والحرب الباردة.', 'Identify major global changes following World War II, including the UN and the Cold War.')
    ]
  ),
  COMPUTER_SCIENCE: course(
    'ict',
    'COMPUTER_SCIENCE',
    'تكنولوجيا المعلومات والاتصالات',
    'Information and Communication Technology',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('شبكات الحاسوب والإنترنت', 'Computer Networks and the Internet'),
      unit('أمن المعلومات والسلامة الرقمية', 'Information Security and Cyber Safety'),
      unit('الخوارزميات وحل المشكلات البرمجية', 'Algorithms and Problem Solving'),
      unit('تصميم وتطوير صفحات الويب الأساسية', 'Basic Web Page Design and Development'),
      unit('الوسائط المتعددة والإنتاج الرقمي', 'Multimedia and Digital Production')
    ],
    [
      lesson(1, undefined, undefined, 'مفهوم شبكات الحاسوب وتصنيفاتها (LAN, WAN)', 'Computer Networks and Classifications', 'يصنف شبكات الحاسوب حسب النطاق الجغرافي ويوضح وسائط الاتصال السلكية واللاسلكية.', 'Classify computer networks by geographical scope and explain wired and wireless transmission media.'),
      lesson(1, undefined, undefined, 'الإنترنت وبروتوكولات الاتصال (TCP/IP, HTTP)', 'Internet Protocols and Architecture', 'يفهم بنية الإنترنت ودور بروتوكولات الاتصال وعناوين IP ونظام أسماء النطاقات DNS.', 'Understand internet architecture, communication protocols, IP addresses, and the DNS system.'),
      lesson(2, undefined, undefined, 'المخاطر السيبرانية والبرمجيات الخبيثة وطرق الوقاية', 'Cyber Risks, Malware, and Protection', 'يميز الفيروسات وبرامج التجسس ويطبق إرشادات حماية الأجهزة والحسابات بكلمات مرور قوية.', 'Identify malware threats and implement device and account security using robust passwords.'),
      lesson(2, undefined, undefined, 'الأخلاقيات الرقمية والجرائم الإلكترونية والقوانين', 'Digital Ethics, Cybercrime, and Regulations', 'يلتزم بالسلوك الرقمي الإيجابي ويستشعر خطورة الجرائم السيبرانية وانتهاك الخصوصية.', 'Commit to positive digital citizenship and recognize consequences of cybercrimes and privacy breaches.'),
      lesson(3, undefined, undefined, 'تحليل المشكلات وبناء الخوارزميات', 'Problem Analysis and Algorithm Construction', 'يحلل المسألة إلى مدخلات ومعالجة ومخرجات ويكتب خطوات الخوارزمية المتسلسلة.', 'Analyze problems into inputs, processes, and outputs and formulate sequential algorithms.'),
      lesson(3, undefined, undefined, 'مخططات الانسياب وقواعد التفرع والتكرار', 'Flowcharts, Branching, and Looping Structures', 'يرسم مخططات الانسياب باستخدام الرموز القياسية لتنفيذ الشروط وحلقات التكرار.', 'Construct standard flowcharts incorporating decision making and iterative loop logic.'),
      lesson(4, undefined, undefined, 'مقدمة في لغة HTML وهيكل الصفحة', 'Introduction to HTML and Web Structure', 'ينشئ صفحة ويب بسيطة باستخدام وسوم العناوين والفقرات والروابط والصور في HTML.', 'Create basic web pages using structural HTML tags for headings, paragraphs, hyperlinks, and images.'),
      lesson(4, undefined, undefined, 'تنسيق صفحات الويب وخصائص العرض', 'Web Page Styling and Presentation', 'يستخدم المبادئ الأساسية للتنسيق وتنسيق النصوص والألوان والجداول في صفحات الويب.', 'Apply fundamental styling principles to format text, colors, and tables on web pages.'),
      lesson(5, undefined, undefined, 'معالجة الصور الرقمية وتحريرها', 'Digital Image Processing and Editing', 'يستخدم برامج التصميم في تعديل الصور وضبط أبعادها وضغطها للاستخدام التعليمي.', 'Use design software to edit images, adjust resolutions, and optimize graphics for education.'),
      lesson(5, undefined, undefined, 'إنتاج العروض التقديمية التفاعلية والمحتوى الرقمي', 'Interactive Presentations and Digital Content Production', 'يصمم عروضاً تقديمية تفاعلية تتضمن عناصر وسائط متعددة ومؤثرات حركية مدروسة.', 'Produce interactive presentations incorporating multimedia elements and calculated transitions.')
    ]
  ),
  NATIONAL_EDUCATION: course(
    'national-education',
    'NATIONAL_EDUCATION',
    'التربية الوطنية',
    'National Education',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('الدستور والقانون وسيادة حكم القانون', 'Constitution, Law, and Rule of Law'),
      unit('نظام الحكم والمؤسسات الدستورية في السودان', 'System of Governance and Constitutional Institutions'),
      unit('الديمقراطية وحقوق الإنسان والمواطنة الفاعلة', 'Democracy, Human Rights, and Active Citizenship'),
      unit('ثقافة السلام والتعايش السلمي والوحدة الوطنية', 'Culture of Peace, Peaceful Coexistence, and National Unity'),
      unit('التنمية الوطنية وحماية الموارد العامة', 'National Development and Protection of Public Resources')
    ],
    [
      lesson(1, undefined, undefined, 'مفهوم الدستور ومكانته وتطوره في السودان', 'Concept, Status, and Evolution of the Constitution in Sudan', 'يعرّف الدستور بوصفه القانون الأسمى للدولة ويتتبع مسيرة الدساتير في السودان.', 'Define the constitution as supreme law and trace constitutional milestones in Sudanese history.'),
      lesson(1, undefined, undefined, 'القانون وسيادة حكم القانون والعدالة', 'The Law, Rule of Law, and Justice', 'يشرح مبدأ سيادة القانون وأثره في ترسيخ العدل والمساواة بين أفراد المجتمع.', 'Explain the rule of law principle and its role in fostering social justice and equality.'),
      lesson(2, undefined, undefined, 'السلطات الثلاث في الدولة (التشريعية والتنفيذية والقضائية)', 'The Three Branches of Government (Legislative, Executive, Judicial)', 'يميز اختصاصات كل سلطة ومبدأ الفصل بين السلطات وتكاملها في خدمة الوطن.', 'Distinguish branch jurisdictions and understand checks and balances in serving the nation.'),
      lesson(2, undefined, undefined, 'نظام الحكم الاتحادي والإدارة المحلية في ولايات السودان', 'Federal Governance and Local Administration in Sudan States', 'يوضح تنظيم الحكم الاتحادي وصلاحيات الولايات والمحليات في تقديم الخدمات للمواطنين.', 'Clarify federal organization and the powers of states and localities in service delivery.'),
      lesson(3, undefined, undefined, 'مبادئ الديمقراطية والمشاركة السياسية', 'Principles of Democracy and Political Participation', 'يفهم أركان الممارسة الديمقراطية وحرية التعبير والانتخاب والمسؤولية المدنية.', 'Understand democratic fundamentals, freedom of expression, electoral rights, and civic duty.'),
      lesson(3, undefined, undefined, 'حقوق الإنسان وحمايتها في التشريعات الوطنية والدولية', 'Human Rights in National and International Legislation', 'يتعرف حقوق الإنسان الأساسية (التعليم، الصحة، الكرامة، والعدالة) وواجبات صيانتها.', 'Explore fundamental human rights (education, health, dignity, justice) and duties to protect them.'),
      lesson(4, undefined, undefined, 'ثقافة السلام وفض النزاعات بالطرق السلمية', 'Culture of Peace and Peaceful Dispute Resolution', 'يتبنى قيم التسامح والحوار ونبذ العنف واستخدام الأعراف السودانية العريقة كالجودية في حل الخلافات.', 'Embrace tolerance, dialogue, non-violence, and traditional Sudanese mediation (Joudia) in dispute settlement.'),
      lesson(4, undefined, undefined, 'التنوع الثقافي والاجتماعي ودوره في إثراء الهوية السودانية', 'Cultural and Social Diversity Enriching Sudanese Identity', 'يفخر بتنوع المجتمع السوداني ويؤكد دور التكاتف والتعايش السلمي في بناء أمة قوية.', 'Take pride in Sudanese societal diversity and emphasize solidarity in forging national unity.'),
      lesson(5, undefined, undefined, 'التنمية المستدامة والمحافظة على المال العام والممتلكات القومية', 'Sustainable Development and Preservation of Public Property', 'يدرك مسؤوليته الفردية والمجتمعية في حماية المرافق العامة والموارد الوطنية ودعم مسيرة البناء.', 'Realize individual and community duty in preserving public facilities and advancing development.')
    ]
  ),
  TECHNICAL_EDUCATION: course(
    'technical-education',
    'TECHNICAL_EDUCATION',
    'أساسيات التربية التقنية',
    'Foundations of Technical Education',
    'الصف الثالث المتوسط — مركز المناهج والبحث التربوي (بخت الرضا)',
    [
      unit('التقنيات الكهربائية والإلكترونية المنزلية', 'Domestic Electrical and Electronic Technologies'),
      unit('الرسم الهندسي والتقني والمساقط', 'Engineering and Technical Drawing'),
      unit('التقنيات الزراعية الحديثة وصيانة البيئة', 'Modern Agricultural Technologies and Environmental Conservation'),
      unit('ريادة الأعمال والمشروعات الإنتاجية في السودان', 'Entrepreneurship and Productive Projects in Sudan')
    ],
    [
      lesson(1, undefined, undefined, 'التركيبات الكهربائية المنزلية وأجهزة الحماية والأمان', 'Domestic Electrical Installations and Safety Devices', 'يتعرف عناصر الدوائر المنزلية والمفاتيح وقواطع الدورة ومصهرات الأمان وإجراءات السلامة.', 'Identify domestic circuit components, switches, circuit breakers, fuses, and electrical safety.'),
      lesson(1, undefined, undefined, 'صيانة الأجهزة الكهرومنزلية البسيطة وترشيد استهلاك الطاقة', 'Maintenance of Household Appliances and Energy Conservation', 'يطبق خطوات الكشف عن الأعطال البسيطة ويتبنى سلوك ترشيد الكهرباء في المنزل.', 'Perform basic appliance troubleshooting and practice household electrical energy conservation.'),
      lesson(2, undefined, undefined, 'أدوات الرسم الهندسي ومقاييس الرسم القياسية', 'Engineering Drawing Tools and Standard Scales', 'يستخدم أدوات الرسم الهندسي بدقة ويطبق مقاييس الرسم المناسبة للأشكال والمخططات.', 'Utilize technical drawing instruments accurately and implement standard scale proportions.'),
      lesson(2, undefined, undefined, 'رسم المساقط الثلاثة للمجسمات البسيطة', 'Orthographic Projection of Three Views for Simple Solids', 'يستنتج ويرسم المسقط الرأسي والأفقي والجانبي لمجسمات هندسية أساسية.', 'Derive and draw front, top, and side orthographic views of geometric solids.'),
      lesson(3, undefined, undefined, 'تقنيات الري الحديث والزراعة المحمية في السودان', 'Modern Irrigation and Protected Agriculture in Sudan', 'يقارن بين الري بالرش والتنقيط واستخدام البيوت المحمية في تحسين الإنتاج الزراعي.', 'Compare sprinkler and drip irrigation systems and greenhouse cultivation for yield optimization.'),
      lesson(3, undefined, undefined, 'الإنتاج الحيواني والتصنيع الزراعي البسيط وحفظ الأغذية', 'Animal Husbandry, Agro-Processing, and Food Preservation', 'يتعلم أسس رعاية الثروة الحيوانية وطرق تجفيف وحفظ المنتجات الزراعية السودانية.', 'Learn foundations of livestock care and preservation techniques for Sudanese agro-products.'),
      lesson(4, undefined, undefined, 'التخطيط للمشروعات الصغيرة ودراسة الجدوى الاقتصادية', 'Small Business Planning and Feasibility Studies', 'يخطط لمشروع إنتاجي أو خدمي صغير ويعد عناصر دراسة جدوى اقتصادية مبسطة.', 'Plan a small enterprise and outline simplified economic feasibility study components.'),
      lesson(4, undefined, undefined, 'التسويق وإدارة المشروعات والمسؤولية المجتمعية', 'Marketing, Project Management, and Social Responsibility', 'يطبق مبادئ التسويق وإدارة التكاليف ويربط نجاح المشروعات بتنمية المجتمع السوداني.', 'Apply marketing and cost management principles, connecting enterprise success to community welfare.')
    ]
  )
};

export const SUDAN_MIDDLE_G9_LECTURES: Partial<Record<Subject, ReturnType<typeof createSudanMiddleGrade7Lectures>>> =
  Object.fromEntries(
    Object.entries(courses).map(([subject, courseData]) => [
      subject,
      createSudanMiddleGrade7Lectures(courseData)
    ])
  ) as Partial<Record<Subject, ReturnType<typeof createSudanMiddleGrade7Lectures>>>;

export function getSudanMiddleGrade9Curriculum(subject: Subject) {
  return SUDAN_MIDDLE_G9_LECTURES[subject] ?? null;
}
