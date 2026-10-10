import type { Lecture } from '../types';

export const SAUDI_G2_PRIMARY_MATH_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-PE-K02-SM1-math.pdf';

export const TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR =
  'إرشادات السلامة والخامات الآمنة (تحت إشراف المعلم): يُنفذ هذا النشاط داخل البيئة الصفية بإشراف ومتابعة مباشرة من المعلم (أو ولي الأمر بالمنزل). يجب استخدام خامات حسية آمنة ذات حواف ملساء مستديرة (مثل: مكعبات تركيب بلاستيكية ناعمة، بطاقات ورقية مقواة، أقراص عد إسفنجية أو بلاستيكية كبيرة، ألوان قابلة للغسل، أطباق فرز مرنة). يُمنع منعًا باتًا استخدام الأدوات الحادة، أو المقصات غير الآمنة، أو الخرز الصغير الذي يمثل خطر بلع، مع التأكيد على النظافة وترتيب الأدوات وغسل اليدين بعد انتهاء النشاط.';

export const TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN =
  'Safety Guidelines & Child-Safe Materials (Teacher Supervision Required): Conduct this activity under direct, continuous teacher supervision in the classroom (or guardian supervision at home). Use safe, smooth-edged tactile manipulatives (e.g., plastic snap cubes, sturdy flashcards, large foam counting tokens, non-toxic washable markers, sorting trays). Strictly avoid sharp blades, adult scissors, or small swallowable pieces; maintain an organized workspace and ensure children wash their hands after hands-on work.';

export type MathContentsKind =
  | 'preparation'
  | 'exploration'
  | 'lesson'
  | 'extension'
  | 'midterm'
  | 'chapterReview'
  | 'cumulative';

export interface MathContentsEntry {
  kind: MathContentsKind;
  bookTitleAr: string;
  bookTitleEn: string;
  platformTitleAr: string;
  platformTitleEn: string;
  page: number;
  safeMaterialsAr: string;
  safeMaterialsEn: string;
}

export interface MathChapter {
  unitNumber: number;
  bookTitleAr: string;
  bookTitleEn: string;
  platformTitleAr: string;
  platformTitleEn: string;
  comparisonRationaleAr: string;
  comparisonRationaleEn: string;
  focusAr: string;
  focusEn: string;
  activityAr: string;
  activityEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
  topics: MathContentsEntry[];
}

const chapters: MathChapter[] = [
  {
    unitNumber: 1,
    bookTitleAr: 'الفصل الأول: القيمة المنزلية حتى ١٠٠ والأنماط',
    bookTitleEn: 'Chapter 1: Place Value up to 100 and Patterns',
    platformTitleAr: 'محور استكشاف بنية الآحاد والعشرات وتكوين الأعداد واكتشاف الأنماط الرياضية حتى ١٠٠',
    platformTitleEn: 'Axis of Exploring Ones and Tens Structure, Number Formation, and Mathematical Patterns to 100',
    comparisonRationaleAr: 'صيغ عنوان المحور في المنصة وصفيًا ليركز على الفهم المفاهيمي لبناء العدد من العشرات والآحاد والربط البصري بالأنماط، تمييزًا له عن العنوان المختصر في الكتاب المدرسي.',
    comparisonRationaleEn: 'The platform axis title was formulated descriptively to emphasize conceptual understanding of base-ten place value and visual pattern recognition, distinguishing it from the textbook heading.',
    focusAr: 'استكشف العلاقة بين الآحاد والعشرات، ومثل الأعداد حتى ١٠٠ بالنماذج الحية، وقارن بينها ورتبها واستكشف الأنماط العددية على لوحة المئة.',
    focusEn: 'Explore the relationship between ones and tens, represent two-digit numbers with hands-on models, compare and order numbers, and discover regular patterns on the 100-chart.',
    activityAr: 'نشاط «صانع العشرات الآمن»: يوزع المعلم على كل طالب بطاقات أرقام ومكعبات بلاستيكية ملساء؛ يقوم الطالب بعد 10 مكعبات آحاد وتجميعها في حزمة واحدة تمثل عشرة، ثم تمثيل عدد مثل ٤٧ (٤ حزم عشرات و٧ آحاد) على بساط القيمة المنزلية، ومقارنة العدد مع زميله بإشراف المعلم.',
    activityEn: 'Safe Tens Builder Activity: Under teacher guidance, students use smooth plastic interlocking cubes and numeral cards. Students count 10 individual unit cubes and group them into a single ten-rod, represent a number like 47 (4 tens and 7 ones) on a place-value mat, and compare with a classmate.',
    questionAr: 'ما قيمة الرقم ٤ في العدد ٤٧؟',
    questionEn: 'What is the value of digit 4 in the number 47?',
    optionsAr: ['٤٠', '٤', '١٤'],
    optionsEn: ['40', '4', '14'],
    topics: [
      {
        kind: 'preparation',
        bookTitleAr: 'التهيئة',
        bookTitleEn: 'Chapter Preparation',
        platformTitleAr: 'التهيئة التفاعلية: استرجاع العد ومقارنة المجموعات وقراءة الأعداد وترتيبها',
        platformTitleEn: 'Interactive Preparation: Reviewing Counting, Comparing Sets, Reading, and Ordering Numbers',
        page: 9,
        safeMaterialsAr: 'أقراص عد ملونة مستديرة الحواف وبطاقات أعداد كرتونية',
        safeMaterialsEn: 'Smooth colored counting tokens and sturdy cardstock numeral cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الآحاد والعشرات',
        bookTitleEn: 'Ones and Tens',
        platformTitleAr: 'بناء مفهوم الآحاد والعشرات وتجميع الحزم العشرية من القطع الفردية',
        platformTitleEn: 'Building Ones and Tens Concepts by Bundling Unit Cubes into Tens',
        page: 10,
        safeMaterialsAr: 'مكعبات بلاستيكية قابلة للتركيب ناعمة الحواف',
        safeMaterialsEn: 'Soft-edge plastic interlocking math cubes'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'القيمة المنزلية للأعداد حتى ١٠٠',
        bookTitleEn: 'Place Value for Numbers up to 100',
        platformTitleAr: 'تحديد القيمة المكانية وكتابة الأعداد بالصورتين القياسية والتحليلية حتى ١٠٠',
        platformTitleEn: 'Determining Positional Value and Writing Standard and Expanded Forms to 100',
        page: 13,
        safeMaterialsAr: 'لوحات قيمة منزلية ورقية مصفحة وأقلام قابلة للمسح خالية من الرائحة',
        safeMaterialsEn: 'Laminated paper place-value mats and non-toxic dry-erase markers'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'أحل المسألة (أستعمل الاستدلال المنطقي)',
        bookTitleEn: 'Problem Solving: Use Logical Reasoning',
        platformTitleAr: 'استراتيجيات التفكير المنطقي: استبعاد الخيارات غير الممكنة لحل المسألة',
        platformTitleEn: 'Logical Reasoning Strategies: Eliminating Inconsistent Clues to Solve Riddles',
        page: 15,
        safeMaterialsAr: 'بطاقات ألغاز عددية ورقية ملونة',
        safeMaterialsEn: 'Cardstock number riddle cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'قراءة الأعداد وكتابتها',
        bookTitleEn: 'Reading and Writing Numbers',
        platformTitleAr: 'المطابقة بين الأعداد المكتوبة رمزياً ولفظياً بالكلمات والأشكال',
        platformTitleEn: 'Matching Numerals with Written Word Forms up to 100',
        page: 17,
        safeMaterialsAr: 'بطاقات مطابقة مزدوجة (كلمات وأرقام)',
        safeMaterialsEn: 'Dual-sided matching flashcards (words and numerals)'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'تقدير الكميات',
        bookTitleEn: 'Estimating Quantities',
        platformTitleAr: 'تنمية الحس العددي وتقدير المجموعات بالرجوع إلى معيار العشرة',
        platformTitleEn: 'Developing Number Sense and Estimating Sets Using a Benchmark of 10',
        page: 19,
        safeMaterialsAr: 'أوعية بلاستيكية شفافة آمنة وكرات قطنية ملونة خفيفة',
        safeMaterialsEn: 'Safe clear plastic tubs and soft colorful pom-poms'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'ترتيب الأعداد',
        bookTitleEn: 'Ordering Numbers',
        platformTitleAr: 'ترتيب الأعداد ثنائية المنزلة تصاعدياً وتنازلياً على خط الأعداد الملموس',
        platformTitleEn: 'Ordering Two-Digit Numbers Ascending and Descending on a Physical Line',
        page: 23,
        safeMaterialsAr: 'شريط خط أعداد قماشي وبطاقات مشابك ورقية بلاستيكية آمنة',
        safeMaterialsEn: 'Fabric number line ribbon and safe plastic clothespins'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'مقارنة الأعداد',
        bookTitleEn: 'Comparing Numbers',
        platformTitleAr: 'المقارنة بين كميتين باستخدام رموز المقارنة (أكبر من، أصغر من، يساوي)',
        platformTitleEn: 'Comparing Two Quantities Using Relational Signs (Greater, Less, Equal)',
        page: 25,
        safeMaterialsAr: 'بطاقات رموز المقارنة الكرتونية الملونة',
        safeMaterialsEn: 'Large illustrated cardstock comparison alligator/relation symbols'
      },
      {
        kind: 'extension',
        bookTitleAr: 'هيا بنا نلعب',
        bookTitleEn: 'Let Us Play',
        platformTitleAr: 'لعبة صفية أصلية لمراجعة الأعداد وترتيبها',
        platformTitleEn: 'Original Classroom Game for Reviewing and Ordering Numbers',
        page: 27,
        safeMaterialsAr: 'بطاقات أعداد كبيرة وواضحة',
        safeMaterialsEn: 'Large, clear numeral cards'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'مراجعة تراكمية',
        bookTitleEn: 'Cumulative Review',
        platformTitleAr: 'مراجعة تراكمية للقيمة المنزلية والأعداد',
        platformTitleEn: 'Cumulative Review of Place Value and Number Concepts',
        page: 22,
        safeMaterialsAr: 'بطاقات مراجعة صفية',
        safeMaterialsEn: 'Classroom review cards'
      },
      {
        kind: 'midterm',
        bookTitleAr: 'اختبار منتصف الفصل',
        bookTitleEn: 'Mid-Chapter Check',
        platformTitleAr: 'محطة التقويم البنائي لمهارات القيمة المكانية والترتيب',
        platformTitleEn: 'Formative Checkpoint for Place Value and Ordering Skills',
        page: 21,
        safeMaterialsAr: 'أوراق تقويم تشخيصي فردية وبطاقات إجابة ملونة',
        safeMaterialsEn: 'Individual checkpoint worksheets and response cue cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الأنماط',
        bookTitleEn: 'Patterns',
        platformTitleAr: 'اكتشاف وتمديد الأنماط الهندسية والعددية وفق قاعدة واضحة',
        platformTitleEn: 'Discovering and Extending Geometric and Numerical Patterns by Rule',
        page: 28,
        safeMaterialsAr: 'خرز خشبي كبير ذو حواف ناعمة وخيوط سميكة برؤوس آمنة',
        safeMaterialsEn: 'Large smooth wooden beads and thick child-safe threading lace'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الأنماط على لوحة المئة',
        bookTitleEn: 'Patterns on the 100-Chart',
        platformTitleAr: 'استكشاف القفزات المنتظمة (عشرات، خمسات، اثنينات) على شبكة المئة',
        platformTitleEn: 'Exploring Regular Skip Counting (10s, 5s, 2s) on the 100-Chart Grid',
        page: 30,
        safeMaterialsAr: 'لوحات شبكة المئة مصفحة وإطارات تظليل بلاستيكية شفافة ملونة',
        safeMaterialsEn: 'Laminated 100-charts and transparent color highlight frames'
      },
      {
        kind: 'chapterReview',
        bookTitleAr: 'اختبار الفصل',
        bookTitleEn: 'Chapter Check',
        platformTitleAr: 'المراجعة الشاملة لنواتج تعلم محور القيمة المنزلية والأنماط',
        platformTitleEn: 'Comprehensive Review of Place Value and Pattern Learning Outcomes',
        page: 32,
        safeMaterialsAr: 'بطاقات مراجعة تفاعلية ومؤشرات تقييم ذاتي مبتسمة',
        safeMaterialsEn: 'Interactive review flashcards and smiley self-assessment tokens'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'اختبار تراكمي',
        bookTitleEn: 'Cumulative Test',
        platformTitleAr: 'التقويم التراكمي لترسيخ المفاهيم وربط المهارات السابقة',
        platformTitleEn: 'Cumulative Formative Assessment Linking Foundational Number Skills',
        page: 34,
        safeMaterialsAr: 'أوراق أنشطة مراجعة قياسية للتقويم الصفي',
        safeMaterialsEn: 'Classroom formative assessment task sheets'
      }
    ]
  },
  {
    unitNumber: 2,
    bookTitleAr: 'الفصل الثاني: طرائق الجمع',
    bookTitleEn: 'Chapter 2: Addition Strategies',
    platformTitleAr: 'محور استراتيجيات الحساب الذهني للجمع والعد التصاعدي ومضاعفة العدد وتكوين العشرة',
    platformTitleEn: 'Axis of Mental Addition Strategies, Counting-On, Doubles, and Making Ten',
    comparisonRationaleAr: 'يعتمد اسم المحور على تسمية الاستراتيجيات الذهنية الإجرائية وتفصيلها كأدوات تفكير مرنة للطفل بدلًا من العنوان الجامد.',
    comparisonRationaleEn: 'The platform axis specifies mental thinking routines and flexible computational tools rather than a static textbook heading.',
    focusAr: 'استعمل خصائص الجمع، والعد التصاعدي، وحقائق جمع العدد ونفسه وتكوين العشرة، لجمع الأعداد بطلاقة وثقة ذهنية.',
    focusEn: 'Apply addition properties, count on mentally, and utilize doubles and make-ten strategies to add fluently and with confidence.',
    activityAr: 'نشاط «إطار العشرة السحري»: تحت إشراف المعلم، يحصل كل طالب على بطاقة إطار العشرة المزدوج (Ten-Frame) وأقراص إسفنجية بلونين مختلفين؛ عند تمثيل مسألة (٨ + ٥)، يضع ٨ أقراص زرقاء في الإطار الأول ويكملها بقرصين أحمرين ليصبح الإطار ممتلئًا (١٠)، ثم يضع الـ ٣ المتبقية في الإطار الثاني، ليدرك مباشرة أن ٨ + ٥ = ١٠ + ٣ = ١٣.',
    activityEn: 'Magic Ten-Frame Activity: Under teacher supervision, students use dual ten-frame mats and two-color foam counters. To solve 8 + 5, they place 8 blue counters in the first frame, add 2 red counters to fill the ten-frame, and place the remaining 3 red counters in the second frame, seeing that 8 + 5 = 10 + 3 = 13.',
    questionAr: 'عند جمع ٨ + ٥ باستخدام استراتيجية تكوين العشرة، نجمع أولًا ٨ + ٢ = ١٠، ثم نضيف المتبقي (٣). ما هو الناتج؟',
    questionEn: 'Using the make-ten strategy for 8 + 5, we first make 8 + 2 = 10, then add the remaining 3. What is the sum?',
    optionsAr: ['١٣', '١٤', '١٢'],
    optionsEn: ['13', '14', '12'],
    topics: [
      {
        kind: 'preparation',
        bookTitleAr: 'التهيئة',
        bookTitleEn: 'Chapter Preparation',
        platformTitleAr: 'التهيئة الحركية: استحضار معنى الجمع كضم مجموعتين وزيادة',
        platformTitleEn: 'Kinesthetic Preparation: Reinforcing Addition as Combining Sets',
        page: 37,
        safeMaterialsAr: 'أطواق بلاستيكية أرضية مرنة وكرات إسفنجية خفيفة',
        safeMaterialsEn: 'Safe flexible floor hoops and lightweight foam balls'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'خصائص الجمع',
        bookTitleEn: 'Addition Properties',
        platformTitleAr: 'استكشاف خاصية الإبدال والعنصر المحايد الجمعي (الصفر) بالنماذج الملموسة',
        platformTitleEn: 'Exploring Commutative and Zero Properties with Concrete Sets',
        page: 38,
        safeMaterialsAr: 'أطباق فرز ثنائية مقسمة ومكعبات ملونة',
        safeMaterialsEn: 'Divided plastic sorting trays and colored cubes'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الجمع بالعد التصاعدي',
        bookTitleEn: 'Adding by Counting On',
        platformTitleAr: 'مهارة الانطلاق من العدد الأكبر والقفز التصاعدي بمقدار ١ أو ٢ أو ٣',
        platformTitleEn: 'Starting from the Greater Number and Counting On 1, 2, or 3',
        page: 40,
        safeMaterialsAr: 'شريط قياس ورقي ملون ومؤشر أسهم ناعم',
        safeMaterialsEn: 'Laminated paper number tracks and plastic arrow markers'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'أحل المسألة (أمثلها)',
        bookTitleEn: 'Problem Solving: Represent It',
        platformTitleAr: 'تمثيل المسألة برسوم أو نماذج قبل اختيار عملية الجمع',
        platformTitleEn: 'Representing a Word Problem with Drawings or Models Before Adding',
        page: 42,
        safeMaterialsAr: 'بطاقات مسائل مصورة وأقراص عد كبيرة',
        safeMaterialsEn: 'Illustrated problem cards and large counting counters'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع العدد ونفسه',
        bookTitleEn: 'Doubles Facts',
        platformTitleAr: 'ترسيخ حقائق مضاعفة الأعداد المتطابقة عبر الصور التناظرية واليدين',
        platformTitleEn: 'Mastering Doubles Facts Using Bilateral Imagery and Hands',
        page: 44,
        safeMaterialsAr: 'بطاقات صور الفراشات والأيدي المتناظرة',
        safeMaterialsEn: 'Cardstock mirrored butterfly and hand-span visual cards'
      },
      {
        kind: 'midterm',
        bookTitleAr: 'اختبار منتصف الفصل',
        bookTitleEn: 'Mid-Chapter Check',
        platformTitleAr: 'محطة التقويم المرحلي لخصائص الجمع والعد التصاعدي والمضاعفات',
        platformTitleEn: 'Mid-Point Checkpoint on Properties, Counting-On, and Doubles',
        page: 46,
        safeMaterialsAr: 'بطاقات إجابة مصورة سريعة',
        safeMaterialsEn: 'Pictorial response check cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع العدد ونفسه مضافاً إليه ١ أو مطروحاً منه ١',
        bookTitleEn: 'Doubles Plus or Minus 1',
        platformTitleAr: 'استراتيجية شبه المضاعفات: الاستناد إلى الحقيقة المعروفة والتعديل بمقدار ١',
        platformTitleEn: 'Near-Doubles Strategy: Leveraging Known Facts Adjusted by One',
        page: 48,
        safeMaterialsAr: 'أبراج مكعبات ملونة متجاورة مع مكعب تمييز إضافي',
        safeMaterialsEn: 'Adjacent snap-cube towers with contrasting cap cubes'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الجمع بتكوين العشرة',
        bookTitleEn: 'Adding by Making Ten',
        platformTitleAr: 'تفكيك الأعداد المضافة لبناء حزمة العشرة المكتملة وتسهيل الحساب الذهني',
        platformTitleEn: 'Decomposing Addends to Fill a Benchmark Ten for Effortless Computation',
        page: 50,
        safeMaterialsAr: 'إطارات العشرة المزدوجة المصفحة وأقراص الفرز ذات الوجهين',
        safeMaterialsEn: 'Dual ten-frame mats and two-sided red/yellow magnetic/foam counters'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع ثلاثة أعداد',
        bookTitleEn: 'Adding Three Numbers',
        platformTitleAr: 'البحث عن الأعداد المتآلفة أو تكوين العشرة لجمع ثلاثة حدود بمرونة',
        platformTitleEn: 'Grouping Friendly Numbers or Making Ten to Add Three Addends',
        page: 52,
        safeMaterialsAr: 'ثلاث مجموعات من بطاقات الأرقام الملونة',
        safeMaterialsEn: 'Three color-coded sets of digit cards'
      },
      {
        kind: 'chapterReview',
        bookTitleAr: 'اختبار الفصل',
        bookTitleEn: 'Chapter Check',
        platformTitleAr: 'تقويم شامل لإتقان استراتيجيات الجمع الذهني والتطبيقي',
        platformTitleEn: 'Holistic Evaluation of Mental and Applied Addition Strategies',
        page: 56,
        safeMaterialsAr: 'أوراق متابعة مهارات صفية مبهجة',
        safeMaterialsEn: 'Cheerful classroom skills review sheets'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'اختبار تراكمي',
        bookTitleEn: 'Cumulative Test',
        platformTitleAr: 'التقويم التراكمي لمهارات القيمة المنزلية والجمع المتكامل',
        platformTitleEn: 'Cumulative Assessment Integrating Place Value and Addition Foundations',
        page: 58,
        safeMaterialsAr: 'بطاقات تدريب تراكمي تفاعلية',
        safeMaterialsEn: 'Laminated cumulative task strips'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'مراجعة تراكمية',
        bookTitleEn: 'Cumulative Review',
        platformTitleAr: 'مراجعة تراكمية لطرائق الجمع وحقائقه',
        platformTitleEn: 'Cumulative Review of Addition Strategies and Facts',
        page: 47,
        safeMaterialsAr: 'بطاقات مراجعة صفية',
        safeMaterialsEn: 'Classroom review cards'
      },
      {
        kind: 'extension',
        bookTitleAr: 'استقصاء حل المسألة: أختار خطة مناسبة',
        bookTitleEn: 'Problem-Solving Investigation: Choose a Plan',
        platformTitleAr: 'اختيار استراتيجية مناسبة لحل مسألة جمع جديدة',
        platformTitleEn: 'Choosing an Appropriate Strategy for a New Addition Problem',
        page: 54,
        safeMaterialsAr: 'بطاقات مسائل متعددة الخيارات',
        safeMaterialsEn: 'Multiple-strategy problem cards'
      }
    ]
  },
  {
    unitNumber: 3,
    bookTitleAr: 'الفصل الثالث: طرائق الطرح',
    bookTitleEn: 'Chapter 3: Subtraction Strategies',
    platformTitleAr: 'محور مهارات الطرح الذهني بالعد التنازلي وربط حقائق الطرح بالجمع',
    platformTitleEn: 'Axis of Mental Subtraction, Counting-Back, and Inverting Addition Facts',
    comparisonRationaleAr: 'يوضح العنوان في المنصة المبدأ الرياضي الجوهري القائم على أن الطرح هو العملية العكسية للجمع، لتعزيز عمق الفهم.',
    comparisonRationaleEn: 'The platform title highlights inverse-operation relationships, showing that subtraction undoes addition rather than functioning as an isolated rule.',
    focusAr: 'اطرح بالعد التنازلي، وافهم خصائص طرح الصفر وطرح الكل، واستعمل حقائق الجمع المترابطة وعائلات الحقائق لحل مسائل الطرح.',
    focusEn: 'Subtract by counting back, understand identity and zero subtraction, and use related addition facts and fact families to solve subtractions.',
    activityAr: 'نشاط «مثلث عائلة الحقائق المترابطة»: يوفر المعلم بطاقات مثلثة مصفحة كبيرة وآمنة؛ يُكتب في رأس المثلث العدد الأكبر (مثلاً ١٢) وفي القاعدتين (٧ و٥)؛ يقوم الطالب بتسجيل جملتي الجمع المرتبطتين (٧ + ٥ = ١٢، ٥ + ٧ = ١٢) ثم جملتي الطرح المترابطتين (١٢ - ٧ = ٥، ١٢ - ٥ = ٧) باستخدام أقراص الفرز وبإشراف المعلم.',
    activityEn: 'Fact Family Triangle Activity: Students work with large safe triangular dry-erase cards. The total (e.g., 12) sits at the peak and parts (7 and 5) at the corners. Under teacher guidance, students write two addition sentences (7 + 5 = 12, 5 + 7 = 12) and two subtraction sentences (12 - 7 = 5, 12 - 5 = 7).',
    questionAr: 'إذا كانت حقيقة الجمع هي ٧ + ٥ = ١٢، فما هي حقيقة الطرح المترابطة معها؟',
    questionEn: 'If the addition fact is 7 + 5 = 12, which related subtraction fact belongs to the same fact family?',
    optionsAr: ['١٢ − ٥ = ٧', '١٢ + ٥ = ١٧', '٧ − ٥ = ٢'],
    optionsEn: ['12 − 5 = 7', '12 + 5 = 17', '7 − 5 = 2'],
    topics: [
      {
        kind: 'preparation',
        bookTitleAr: 'التهيئة',
        bookTitleEn: 'Chapter Preparation',
        platformTitleAr: 'التهيئة الحسية: استدعاء مفهوم الإبعاد والفرق والمقارنة بين مجموعتين',
        platformTitleEn: 'Sensory Preparation: Re-activating Removal, Difference, and Comparing Sets',
        page: 61,
        safeMaterialsAr: 'أقراص فرز ناعمة ذات وجهين ملونين',
        safeMaterialsEn: 'Soft two-sided colored foam counters'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الطرح بالعد التنازلي',
        bookTitleEn: 'Subtracting by Counting Back',
        platformTitleAr: 'العد التنازلي بمقدار ١ أو ٢ أو ٣ على خط الأعداد والتمثيل الحركي',
        platformTitleEn: 'Counting Back 1, 2, or 3 on a Tactile Number Line Track',
        page: 62,
        safeMaterialsAr: 'خط أعداد مسطري ورقي ومجسم صغير بلاستيكي ناعم للقفز',
        safeMaterialsEn: 'Ruler-style cardstock number track and soft plastic hopping token'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'طرح الصفر وطرح الكل',
        bookTitleEn: 'Subtracting Zero and Subtracting All',
        platformTitleAr: 'استيعاب أثر طرح الصفر (بقاء الكمية) وطرح الكل (الناتج صفر) بالنماذج العملية',
        platformTitleEn: 'Understanding Subtracting Zero (Invariant) and Subtracting All (Zero Difference)',
        page: 64,
        safeMaterialsAr: 'أطباق بلاستيكية شفافة وكرات صوفية ناعمة',
        safeMaterialsEn: 'Clear plastic bowls and soft yarn pom-poms'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الطرح باستعمال حقائق جمع العدد ونفسه',
        bookTitleEn: 'Subtracting Using Doubles Facts',
        platformTitleAr: 'عكس حقائق مضاعفة الأعداد لإيجاد ناتج الطرح بسرعة ودقة ذهنية',
        platformTitleEn: 'Inverting Known Doubles Facts to Find Differences with Mental Agility',
        page: 66,
        safeMaterialsAr: 'بطاقات أحجيات الدومينو التعليمية الآمنة',
        safeMaterialsEn: 'Child-safe foam domino tiles'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'أحل المسألة (أخمن وأتحقق)',
        bookTitleEn: 'Problem Solving: Guess and Check',
        platformTitleAr: 'استخدام التخمين المنظم والتحقق لحل مسألة طرح',
        platformTitleEn: 'Using an Organized Guess-and-Check Strategy for a Subtraction Problem',
        page: 68,
        safeMaterialsAr: 'بطاقات ألغاز عددية وأقلام قابلة للمسح',
        safeMaterialsEn: 'Number-puzzle cards and dry-erase markers'
      },
      {
        kind: 'midterm',
        bookTitleAr: 'اختبار منتصف الفصل',
        bookTitleEn: 'Mid-Chapter Check',
        platformTitleAr: 'محطة التحقق من استراتيجيات العد التنازلي وخصائص الطرح الأساسية',
        platformTitleEn: 'Mid-Chapter Checkpoint for Counting-Back and Fundamental Subtraction Properties',
        page: 70,
        safeMaterialsAr: 'بطاقات مطابقة ومراجعة فردية ملونة',
        safeMaterialsEn: 'Color-coded task cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'العلاقة بين الجمع والطرح',
        bookTitleEn: 'Relationship Between Addition and Subtraction',
        platformTitleAr: 'استكشاف التناظر العكسي: كيف يعيد الجمع ما أخذه الطرح',
        platformTitleEn: 'Exploring Operational Duality: How Addition Reconstructs Subtracted Parts',
        page: 72,
        safeMaterialsAr: 'أشرطة ربط ورقية ملونة قابلة للفصل والتركيب',
        safeMaterialsEn: 'Segmented paper links that can be joined and unjoined'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'مراجعة تراكمية',
        bookTitleEn: 'Cumulative Review',
        platformTitleAr: 'مراجعة تراكمية لمفاهيم الطرح والعلاقة بينه وبين الجمع',
        platformTitleEn: 'Cumulative Review of Subtraction and Its Relationship to Addition',
        page: 71,
        safeMaterialsAr: 'بطاقات مراجعة صفية',
        safeMaterialsEn: 'Classroom review cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الأعداد المفقودة',
        bookTitleEn: 'Missing Numbers',
        platformTitleAr: 'اكتشاف المجهول في الجمل العددية المفتوحة وربطها بالكل والأجزاء',
        platformTitleEn: 'Finding Missing Addends in Open Equations Using Part-Part-Whole Thinking',
        page: 74,
        safeMaterialsAr: 'لوحات رسم بياني للكل والأجزاء وبطاقات أرقام مغناطيسية آمنة',
        safeMaterialsEn: 'Part-part-whole laminated diagram boards and soft magnetic numbers'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الحقائق المترابطة',
        bookTitleEn: 'Related Facts (Fact Families)',
        platformTitleAr: 'بناء عائلة الحقائق الأربع المترابطة للأعداد الثلاثة ذات العلاقة',
        platformTitleEn: 'Constructing Four Interconnected Sentences from Three Related Numbers',
        page: 76,
        safeMaterialsAr: 'بطاقات مثلثات عائلات الحقائق المصفحة وأقلام قابلة للمسح',
        safeMaterialsEn: 'Laminated fact family triangle boards and safe washable markers'
      },
      {
        kind: 'chapterReview',
        bookTitleAr: 'اختبار الفصل',
        bookTitleEn: 'Chapter Check',
        platformTitleAr: 'تقويم شامل لإتقان طرائق وحقائق الطرح المتنوعة',
        platformTitleEn: 'Comprehensive Evaluation of Diverse Subtraction Strategies',
        page: 78,
        safeMaterialsAr: 'ملفات تدريب صفي تشجيعية',
        safeMaterialsEn: 'Classroom practice checksheets with motivational stickers'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'اختبار تراكمي',
        bookTitleEn: 'Cumulative Test',
        platformTitleAr: 'التقويم التراكمي لمهارات الجمع والطرح والقيمة المنزلية',
        platformTitleEn: 'Cumulative Formative Assessment Synthesizing Addition and Subtraction',
        page: 80,
        safeMaterialsAr: 'بطاقات اختبار ختامي مرحلية مصورة',
        safeMaterialsEn: 'Pictorial stage evaluation cards'
      }
    ]
  },
  {
    unitNumber: 4,
    bookTitleAr: 'الفصل الرابع: تمثيل البيانات وقراءتها',
    bookTitleEn: 'Chapter 4: Data Representation and Interpretation',
    platformTitleAr: 'محور تنظيم المعلومات الإحصائية وتمثيل البيانات بالصور والأعمدة وقراءتها الاستنتاجية',
    platformTitleEn: 'Axis of Organizing Statistical Information, Picture and Bar Graphs, and Data Reasoning',
    comparisonRationaleAr: 'يبرز مسمى المحور في المنصة مهارات الاستقصاء وجمع البيانات وتحليلها الاستنتاجي بدل الاقتصار على رسم الجداول.',
    comparisonRationaleEn: 'The platform axis accentuates active inquiry, data collection, and inferential reasoning beyond mere drawing of tables.',
    focusAr: 'اجمع البيانات ونظمها بجدول الإشارات، ومثلها بالصور والأعمدة الرأسية والأفقية، واستخلص النتائج والفرص الاحتمالية (أكيد، مستحيل، أكثر وأقل إمكانية).',
    focusEn: 'Collect and organize data with tally charts, represent it with pictographs and bar graphs, and interpret outcomes and probability events.',
    activityAr: 'نشاط «استطلاع الفواكه المحبوبة والأعمدة الملونة»: يقسم المعلم الصف إلى مجموعات صغيرة؛ يقوم كل طالب باختيار بطاقة الفاكهة المفضلة (تفاح، موز، برتقال) ووضع إشارة عد في جدول الإشارات الصفي، ثم يركب الطلاب أعمدة بيانية ملونة من مكعبات التركيب البلاستيكية الآمنة تمثل تكرار كل فاكهة، ويقارنون أطوال الأعمدة لتحديد الأكثر والأقل تفضيلًا بإشراف المعلم.',
    activityEn: 'Favorite Fruit Survey & Colorful Bar Graph: Under teacher supervision, students vote for their favorite fruit using pictorial tokens. They record tallies in a group tally chart, assemble matching towers of smooth interlocking cubes to form 3D bar graphs, and interpret which fruit is most and least preferred.',
    questionAr: 'إذا أظهر جدول الإشارات ٦ إشارات لتفضيل التفاح و٣ للموز، فكم يزيد عدد محبي التفاح على الموز؟',
    questionEn: 'If a tally chart shows 6 tallies for apples and 3 for bananas, how many more students prefer apples than bananas?',
    optionsAr: ['٣', '٢', '٩'],
    optionsEn: ['3', '2', '9'],
    topics: [
      {
        kind: 'preparation',
        bookTitleAr: 'التهيئة',
        bookTitleEn: 'Chapter Preparation',
        platformTitleAr: 'التهيئة الاستقصائية: تصنيف الأشياء وفق خاصية مشتركة (اللون، الشكل، الحجم)',
        platformTitleEn: 'Inquiry Preparation: Classifying Classroom Objects by Common Attributes',
        page: 83,
        safeMaterialsAr: 'أشكال هندسية بلاستيكية ناعمة ملونة للتصنيف',
        safeMaterialsEn: 'Smooth colored plastic attribute sorting blocks'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جدول الإشارات',
        bookTitleEn: 'Tally Charts',
        platformTitleAr: 'تنظيم البيانات الأولية وتجميع إشارات العد في حزم خماسية منتظمة',
        platformTitleEn: 'Organizing Raw Data by Grouping Tally Marks into Bundles of Five',
        page: 84,
        safeMaterialsAr: 'أعواد خشبية ملونة ناعمة الحواف (خافض لسان خشبي غير حاد)',
        safeMaterialsEn: 'Smooth child-safe rounded craft sticks for tallying'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'التمثيل بالصور',
        bookTitleEn: 'Pictographs',
        platformTitleAr: 'عرض المعلومات بملصقات ورموز بصرية مع تحديد المفتاح الدلالي',
        platformTitleEn: 'Displaying Data with Pictorial Icons Guided by a Clear Key',
        page: 86,
        safeMaterialsAr: 'ملصقات ورقية كرتونية ملونة آمنة وبطاقات مفاتيح',
        safeMaterialsEn: 'Safe cardstock picture stickers and key legend labels'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'قراءة البيانات الممثلة بالصور',
        bookTitleEn: 'Reading Pictographs',
        platformTitleAr: 'تحليل التمثيل الصوري واستخراج الإجابات والمقارنة بين الفئات المختلفة',
        platformTitleEn: 'Analyzing Pictorial Charts to Answer Comparative Questions and Summaries',
        page: 88,
        safeMaterialsAr: 'لوحات بيانات مصورة مصفحة وبطاقات أسئلة استقصائية',
        safeMaterialsEn: 'Laminated sample pictograph boards and question cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'أحل المسألة (أنشئ جدولًا)',
        bookTitleEn: 'Problem Solving: Make a Table',
        platformTitleAr: 'تنظيم معطيات المسألة في جدول لتسهيل المقارنة والإجابة',
        platformTitleEn: 'Organizing Problem Data in a Table to Support Comparison and Answers',
        page: 90,
        safeMaterialsAr: 'جداول ورقية مصفحة وبطاقات بيانات مصورة',
        safeMaterialsEn: 'Laminated table mats and illustrated data cards'
      },
      {
        kind: 'midterm',
        bookTitleAr: 'اختبار منتصف الفصل',
        bookTitleEn: 'Mid-Chapter Check',
        platformTitleAr: 'محطة التقويم التكويني لمهارات جمع وتنظيم وعرض البيانات بالصور',
        platformTitleEn: 'Formative Checkpoint on Tally Tables and Pictographs',
        page: 92,
        safeMaterialsAr: 'أوراق نشاط تقويمي تفاعلية',
        safeMaterialsEn: 'Interactive review worksheets'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'التمثيل بالأعمدة',
        bookTitleEn: 'Bar Graphs',
        platformTitleAr: 'بناء الأعمدة البيانية الملونة وتدريج المحاور لتمثيل التكرارات بدقة',
        platformTitleEn: 'Constructing Colorful Bar Graphs and Scaled Axes to Represent Counts',
        page: 94,
        safeMaterialsAr: 'شبكات رسم بياني ورقية مربعة كبيرة وأشرطة لاصقة ورقية ملونة آمنة',
        safeMaterialsEn: 'Large grid paper and easy-tear safe colored washi tape strips'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'مراجعة تراكمية',
        bookTitleEn: 'Cumulative Review',
        platformTitleAr: 'مراجعة تراكمية لتمثيل البيانات وقراءتها',
        platformTitleEn: 'Cumulative Review of Data Representation and Interpretation',
        page: 93,
        safeMaterialsAr: 'بطاقات مراجعة صفية',
        safeMaterialsEn: 'Classroom review cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'قراءة البيانات الممثلة بالأعمدة',
        bookTitleEn: 'Reading Bar Graphs',
        platformTitleAr: 'تفسير أطوال وارتفاعات الأعمدة لاستنتاج الفئة الأكثر والأقل تكراراً',
        platformTitleEn: 'Interpreting Bar Lengths and Heights to Identify Trends and Extrems',
        page: 96,
        safeMaterialsAr: 'بطاقات أعمدة بيانية مصورة ومساطر بلاستيكية ملساء للمحاذاة',
        safeMaterialsEn: 'Sample bar graph cards and smooth plastic tracking rulers'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الحوادث: الأكيد والمستحيل',
        bookTitleEn: 'Events: Certain and Impossible',
        platformTitleAr: 'التمييز المفاهيمي بين الحدث الحتمي الحدوث والحدث المستحيل الوقوع',
        platformTitleEn: 'Conceptual Distinction Between Definite (Certain) and Infeasible (Impossible) Events',
        page: 100,
        safeMaterialsAr: 'أكياس قماشية معتمة آمنة وأقراص عد ذات لون موحد أو ألوان محددة',
        safeMaterialsEn: 'Opaque fabric mystery bags and solid-color counters'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'أكثر إمكانية وأقل إمكانية',
        bookTitleEn: 'More Likely and Less Likely',
        platformTitleAr: 'تقدير فرص حدوث النتائج وتحديد الحدث الأكثر احتمالاً والأقل احتمالاً',
        platformTitleEn: 'Estimating Comparative Likelihood: More Likely Versus Less Likely Outcomes',
        page: 102,
        safeMaterialsAr: 'أقراص دوارة ورقية ذات مؤشرات بلاستيكية ناعمة مثبتة بأمان',
        safeMaterialsEn: 'Paper spinners with securely fastened blunt plastic pointers'
      },
      {
        kind: 'extension',
        bookTitleAr: 'تدريبات إضافية',
        bookTitleEn: 'Additional Practice',
        platformTitleAr: 'تدريبات أصلية إضافية على قراءة البيانات',
        platformTitleEn: 'Original Supplementary Practice in Reading Data',
        page: 98,
        safeMaterialsAr: 'أوراق رسوم بيانية تدريبية',
        safeMaterialsEn: 'Practice graph worksheets'
      },
      {
        kind: 'extension',
        bookTitleAr: 'هيا بنا نلعب',
        bookTitleEn: 'Let Us Play',
        platformTitleAr: 'لعبة صفية آمنة لمراجعة التمثيل البياني',
        platformTitleEn: 'Safe Classroom Game for Reviewing Graphs',
        page: 99,
        safeMaterialsAr: 'بطاقات رسوم بيانية وأقراص عد كبيرة',
        safeMaterialsEn: 'Graph cards and large counting counters'
      },
      {
        kind: 'chapterReview',
        bookTitleAr: 'اختبار الفصل',
        bookTitleEn: 'Chapter Check',
        platformTitleAr: 'تقويم شامل لنواتج معالجة البيانات والاحتمال التجريبي البسيط',
        platformTitleEn: 'Comprehensive Assessment on Data Handling and Elementary Probability',
        page: 104,
        safeMaterialsAr: 'أوراق تقويم بيانية للمهارات الإحصائية',
        safeMaterialsEn: 'Statistical skill checkpoint worksheets'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'اختبار تراكمي',
        bookTitleEn: 'Cumulative Test',
        platformTitleAr: 'التقويم التراكمي الشامل لدمج البيانات مع مهارات الجمع والطرح السابقة',
        platformTitleEn: 'Cumulative Review Integrating Data Analysis, Addition, and Subtraction',
        page: 106,
        safeMaterialsAr: 'بطاقات مراجعة مرحلية متكاملة',
        safeMaterialsEn: 'Integrated stage-review task cards'
      }
    ]
  },
  {
    unitNumber: 5,
    bookTitleAr: 'الفصل الخامس: جمع الأعداد المكونة من رقمين',
    bookTitleEn: 'Chapter 5: Adding Two-Digit Numbers',
    platformTitleAr: 'محور خوارزميات جمع الأعداد ثنائية المنزلة ومفهوم إعادة التجميع والتقدير العددي',
    platformTitleEn: 'Axis of Two-Digit Addition Algorithms, Place-Value Regrouping, and Estimation',
    comparisonRationaleAr: 'يركز عنوان المنصة على المفهوم البنائي لخوارزمية الجمع وإعادة التسمية والتقدير، مظهرًا التطوير الرياضي التراكمي للطالب.',
    comparisonRationaleEn: 'The platform heading articulates algorithmic development, base-ten regrouping, and rounding, highlighting procedural fluency and concept mastery.',
    focusAr: 'اجمع العشرات الكاملة ذهنيًا، وافهم متى تحتاج لإعادة تجميع الآحاد إلى عشرة جديدة، واجمع عددين وثلاثة أعداد ثنائية المنزلة وقدر النواتج.',
    focusEn: 'Add pure tens mentally, discover when ones regroup into a new ten, add two- and three-digit pairs with the standard algorithm, and estimate sums.',
    activityAr: 'نشاط «بساط إعادة التجميع السحري»: يوزع المعلم بساط القيمة المنزلية المقسوم لعمودين (آحاد وعشرات) مع مكعبات التركيب؛ عند جمع ٢٨ + ١٥، يضع الطالب ٨ آحاد في خانة الآحاد و٢ عشرات في العشرات، ثم يضيف ٥ آحاد وعشرة واحدة؛ يجمع الآحاد فيجدها ١٣؛ يوجهه المعلم لتجميع ١٠ آحاد ونقلها كحزمة عشرة واحدة إلى عمود العشرات، فيتبقى ٣ آحاد وتصبح العشرات ٤، ليكون الناتج ٤٣.',
    activityEn: 'Magic Regrouping Mat Activity: Under direct teacher coaching, students use a two-column place-value mat (Ones & Tens) and snap cubes. To solve 28 + 15, they place 8 ones and 2 tens, then add 5 ones and 1 ten. Combining the ones yields 13; the teacher guides them to trade 10 ones for 1 ten-rod and move it to the tens column, leaving 3 ones and 4 tens = 43.',
    questionAr: 'ما ناتج جمع ٢٨ + ١٥ بعد إعادة تجميع الآحاد؟',
    questionEn: 'What is the sum of 28 + 15 after regrouping ones into tens?',
    optionsAr: ['٤٣', '٣٣', '٥٣'],
    optionsEn: ['43', '33', '53'],
    topics: [
      {
        kind: 'preparation',
        bookTitleAr: 'التهيئة',
        bookTitleEn: 'Chapter Preparation',
        platformTitleAr: 'التهيئة البنائية: استرجاع حقائق جمع الآحاد والتمثيل بالقيمة المكانية',
        platformTitleEn: 'Constructive Preparation: Reviewing Single-Digit Facts and Place-Value Layouts',
        page: 109,
        safeMaterialsAr: 'بطاقات تدريب رقمية ملونة وألواح كتابة مصفحة',
        safeMaterialsEn: 'Laminated write-and-wipe basic fact cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع العشرات',
        bookTitleEn: 'Adding Tens',
        platformTitleAr: 'الجمع الذهني للعشرات الكاملة (مثال: ٣٠ + ٢٠ = ٥٠) بالاستناد لحقائق الآحاد',
        platformTitleEn: 'Mental Addition of Pure Tens (e.g., 30 + 20 = 50) Rooted in Basic Facts',
        page: 110,
        safeMaterialsAr: 'حزم عشرات بلاستيكية ناعمة الحواف',
        safeMaterialsEn: 'Smooth plastic base-ten ten-rods'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الجمع بالعد التصاعدي',
        bookTitleEn: 'Adding by Counting On',
        platformTitleAr: 'إضافة العشرات والآحاد بالانتقال التصاعدي على شبكة المئة والخط العددي',
        platformTitleEn: 'Adding Tens and Ones by Counting On Across 100-Chart Rows and Number Tracks',
        page: 112,
        safeMaterialsAr: 'لوحات شبكة المئة الملونة ومؤشرات تتبع بلاستيكية',
        safeMaterialsEn: 'Color-coded 100-charts and transparent tracking tokens'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'أحل المسألة (أحل عكسيًا)',
        bookTitleEn: 'Problem Solving: Work Backward',
        platformTitleAr: 'حل مسألة جمع بسيطة بالبدء من النتيجة والعمل عكسيًا',
        platformTitleEn: 'Solving an Addition Problem by Starting at the Result and Working Backward',
        page: 114,
        safeMaterialsAr: 'بطاقات مسائل قصيرة وأقلام قابلة للمسح',
        safeMaterialsEn: 'Short problem cards and dry-erase markers'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع عدد من رقمين إلى عدد من رقم واحد أو رقمين',
        bookTitleEn: 'Adding a One- or Two-Digit Number to a Two-Digit Number',
        platformTitleAr: 'جمع عددين مع محاذاة الآحاد والعشرات وتمثيلهما بالقيمة المنزلية',
        platformTitleEn: 'Adding Numbers by Aligning Ones and Tens and Modeling Place Value',
        page: 116,
        safeMaterialsAr: 'مكعبات آحاد وعشرات ولوحات قيمة منزلية',
        safeMaterialsEn: 'Base-ten blocks and place-value mats'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الجمع بإعادة التجميع',
        bookTitleEn: 'Adding with Regrouping',
        platformTitleAr: 'استكشاف مفهوم إعادة التجميع: متى نُعيد تسمية ١٠ آحاد إلى عشرة واحدة جديدة',
        platformTitleEn: 'Grasping Regrouping: When and Why 10 Ones Trade into 1 New Ten',
        page: 118,
        safeMaterialsAr: 'مكعبات آحاد وعصي عشرات قابلة للتبديل السلس',
        safeMaterialsEn: 'Interchangeable plastic unit cubes and ten-rods'
      },
      {
        kind: 'midterm',
        bookTitleAr: 'اختبار منتصف الفصل',
        bookTitleEn: 'Mid-Chapter Check',
        platformTitleAr: 'محطة التقويم التكويني لجمع العشرات وإعادة التجميع المبدئي',
        platformTitleEn: 'Mid-Chapter Checkpoint on Pure Tens and Initial Regrouping Understanding',
        page: 120,
        safeMaterialsAr: 'بطاقات تقويم صفي مصورة وسريعة',
        safeMaterialsEn: 'Pictorial checkpoint cards'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'مراجعة تراكمية',
        bookTitleEn: 'Cumulative Review',
        platformTitleAr: 'مراجعة تراكمية لمهارات جمع الأعداد المكونة من رقمين',
        platformTitleEn: 'Cumulative Review of Two-Digit Addition Skills',
        page: 121,
        safeMaterialsAr: 'بطاقات مراجعة صفية',
        safeMaterialsEn: 'Classroom review cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع عدد من رقمين إلى عدد من رقم واحد بإعادة التجميع',
        bookTitleEn: 'Adding a One-Digit Number to a Two-Digit Number with Regrouping',
        platformTitleAr: 'إعادة تجميع عشرة آحاد عند جمع عدد من رقم واحد',
        platformTitleEn: 'Regrouping Ten Ones While Adding a One-Digit Number',
        page: 122,
        safeMaterialsAr: 'مكعبات آحاد وعشرات قابلة للتجميع',
        safeMaterialsEn: 'Unit cubes and ten-rods for regrouping'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع عددين مكونين من رقمين بإعادة التجميع',
        bookTitleEn: 'Adding Two Two-Digit Numbers with Regrouping',
        platformTitleAr: 'الخوارزمية الرأسية المعيارية: جمع منزلة الآحاد أولاً ثم الانتقال لجمع العشرات',
        platformTitleEn: 'Standard Column Algorithm: Adding Ones First, Regrouping, Then Adding Tens',
        page: 124,
        safeMaterialsAr: 'لوحات شبكية مبوبة لترتيب المنازل الرأسية وأقلام ملونة',
        safeMaterialsEn: 'Grid-aligned column layout boards and dry-erase pens'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'تقدير ناتج الجمع',
        bookTitleEn: 'Estimating Sums',
        platformTitleAr: 'تقريب الحدود إلى أقرب عشرة للحصول على ناتج تقديري سريع والتحقق من المعقولية',
        platformTitleEn: 'Rounding Addends to Nearest Ten for Rapid Estimation and Reasonableness Checks',
        page: 126,
        safeMaterialsAr: 'خط أعداد التقريب الملون وبطاقات أعداد للممارسة',
        safeMaterialsEn: 'Visual rounding number lines and practice prompt cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'جمع ثلاثة أعداد كل منها مكون من رقمين',
        bookTitleEn: 'Adding Three Two-Digit Numbers',
        platformTitleAr: 'تطبيق خوارزمية الجمع التراكمي على ثلاثة أعداد ثنائية المنزلة بترتيب وتنظيم دقيق',
        platformTitleEn: 'Extending Multi-Digit Addition Across Three Two-Digit Terms with Meticulous Alignment',
        page: 128,
        safeMaterialsAr: 'بطاقات تنظيم ثلاثية المنازل وأعمدة فرز ملونة',
        safeMaterialsEn: 'Three-tier column problem organizers and colored markers'
      },
      {
        kind: 'extension',
        bookTitleAr: 'استقصاء حل المسألة: أختار الخطة المناسبة',
        bookTitleEn: 'Problem-Solving Investigation: Choose an Appropriate Plan',
        platformTitleAr: 'اختيار خطة حسابية مناسبة لمسألة جمع متعددة الخطوات',
        platformTitleEn: 'Choosing an Appropriate Calculation Plan for a Multi-Step Addition Problem',
        page: 130,
        safeMaterialsAr: 'بطاقات مسائل متعددة الخطوات',
        safeMaterialsEn: 'Multi-step problem cards'
      },
      {
        kind: 'chapterReview',
        bookTitleAr: 'اختبار الفصل',
        bookTitleEn: 'Chapter Check',
        platformTitleAr: 'المراجعة الشاملة لمهارات الجمع الرأسي والأفقي وإعادة التجميع',
        platformTitleEn: 'Comprehensive Review of Two-Digit Addition and Regrouping Fluency',
        page: 132,
        safeMaterialsAr: 'أوراق مراجعة تشجيعية صفية',
        safeMaterialsEn: 'Classroom practice review task sheets'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'اختبار تراكمي',
        bookTitleEn: 'Cumulative Test',
        platformTitleAr: 'التقويم التراكمي الشامل لربط خوارزميات الجمع بالمفاهيم الإحصائية والمكانية',
        platformTitleEn: 'Cumulative Assessment Connecting Multi-Digit Addition, Data, and Place Value',
        page: 134,
        safeMaterialsAr: 'بطاقات اختبار تراكمي مصممة للصف الثاني',
        safeMaterialsEn: 'Grade 2 illustrated cumulative review booklets'
      }
    ]
  },
  {
    unitNumber: 6,
    bookTitleAr: 'الفصل السادس: طرح الأعداد المكونة من رقمين',
    bookTitleEn: 'Chapter 6: Subtracting Two-Digit Numbers',
    platformTitleAr: 'محور عمليات طرح الأعداد المكونة من رقمين مع إعادة التجميع والتحقق من صحة النواتج',
    platformTitleEn: 'Axis of Two-Digit Subtraction, Regrouping (Borrowing), and Inverse Checking',
    comparisonRationaleAr: 'يبرز مسمى المحور في المنصة مهارة إعادة التجميع الدقيقة في الطرح واستخدام التحقق الذاتي بالجمع، لبناء تفكير رياضي مستقل.',
    comparisonRationaleEn: 'The platform title underscores place-value decomposition in subtraction and self-checking through inverse addition to cultivate independent math reasoning.',
    focusAr: 'اطرح العشرات ذهنيًا، ونفذ خوارزمية طرح الأعداد المكونة من رقمين دون إعادة تجميع ومع إعادة التجميع، وتحقق من صحة الحل باستعمال الجمع، وقدر نواتج الطرح.',
    focusEn: 'Subtract pure tens mentally, perform two-digit subtraction with and without regrouping, verify correctness using addition, and estimate differences.',
    activityAr: 'نشاط «محطة فك العشرة والتحقق الذكي»: يوزع المعلم لوحة منازل مصفحة ومكعبات القيمة المنزلية؛ لحل المسألة (٥٢ − ٢٧)، يمثل الطالب المطروح منه ٥٢ (٥ حزم عشرات و٢ آحاد)؛ يلاحظ أنه لا يمكن طرح ٧ آحاد من ٢؛ يوجه المعلم الطالب لأخذ حزمة عشرة واحدة وفكها إلى ١٠ آحاد ونقلها لخانة الآحاد، فيصبح لديه ١٢ آحاد و٤ عشرات؛ يطرح ٧ من ١٢ ليتبقى ٥، ويطرح ٢ من ٤ ليتبقى ٢، فيكون الناتج ٢٥؛ ثم يتحقق بجمع الناتج مع المطروح (٢٥ + ٢٧ = ٥٢) ليتأكد من صحة إجابته بنجاح تام.',
    activityEn: 'Unbundling Tens & Smart Check Station: Under teacher direction, students model 52 − 27 with base-ten blocks (5 tens, 2 ones). Seeing that 7 ones cannot be subtracted from 2, the teacher guides them to trade 1 ten for 10 ones, yielding 4 tens and 12 ones. Subtracting 7 ones leaves 5 ones; subtracting 2 tens leaves 2 tens (result = 25). Students then perform the inverse check by adding 25 + 27 = 52 to confirm.',
    questionAr: 'ما ناتج طرح ٥٢ − ٢٧ بعد فك عشرة واحدة وإعادة التجميع؟',
    questionEn: 'What is 52 − 27 after unbundling one ten and regrouping?',
    optionsAr: ['٢٥', '٣٥', '١٥'],
    optionsEn: ['25', '35', '15'],
    topics: [
      {
        kind: 'preparation',
        bookTitleAr: 'التهيئة',
        bookTitleEn: 'Chapter Preparation',
        platformTitleAr: 'التهيئة التشخيصية: تنشيط حقائق الطرح البسيط وتمييز موقع الآحاد والعشرات',
        platformTitleEn: 'Diagnostic Preparation: Refreshing Single-Digit Subtraction and Digit Roles',
        page: 137,
        safeMaterialsAr: 'بطاقات تحدٍّ سريعة وألواح مسح صغيرة',
        safeMaterialsEn: 'Quick challenge cards and small dry-erase response slates'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'طرح العشرات',
        bookTitleEn: 'Subtracting Tens',
        platformTitleAr: 'الطرح الذهني للعشرات الكاملة (مثال: ٧٠ − ٣٠ = ٤٠) دون الحاجة لفك منازل',
        platformTitleEn: 'Mental Subtraction of Pure Tens (e.g., 70 − 30 = 40) Using Basic Facts',
        page: 138,
        safeMaterialsAr: 'عصي عشرات بلاستيكية ملساء ملونة',
        safeMaterialsEn: 'Smooth colored plastic ten-rods'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الطرح بالعد التنازلي',
        bookTitleEn: 'Subtracting by Counting Back',
        platformTitleAr: 'طرح العشرات والآحاد بالانتقال التنازلي على لوحة المئة وخط الأعداد',
        platformTitleEn: 'Subtracting Tens and Ones by Stepping Back Across 100-Chart Grids',
        page: 140,
        safeMaterialsAr: 'لوحات شبكة المئة مصفحة ومؤشرات قفز تنازلي',
        safeMaterialsEn: 'Laminated 100-charts and directional stepping tokens'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الطرح بدون إعادة التجميع',
        bookTitleEn: 'Subtracting Without Regrouping',
        platformTitleAr: 'الخوارزمية المعيارية المباشرة: طرح الآحاد من الآحاد ثم العشرات من العشرات عند كفاية الآحاد',
        platformTitleEn: 'Direct Column Subtraction: Subtracting Ones Then Tens When Ones Are Sufficient',
        page: 142,
        safeMaterialsAr: 'أوراق شبكية مبوبة للمنازل الرأسية وألوان مائية خفيفة',
        safeMaterialsEn: 'Grid-aligned column layout sheets and non-toxic highlighters'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'أحل المسألة (أكتب جملة عددية)',
        bookTitleEn: 'Problem Solving: Write a Number Sentence',
        platformTitleAr: 'تمثيل موقف الطرح بجملة عددية مناسبة قبل حلها',
        platformTitleEn: 'Representing a Subtraction Situation with a Number Sentence Before Solving',
        page: 146,
        safeMaterialsAr: 'بطاقات مواقف مصورة وألواح كتابة',
        safeMaterialsEn: 'Illustrated situation cards and writing boards'
      },
      {
        kind: 'midterm',
        bookTitleAr: 'اختبار منتصف الفصل',
        bookTitleEn: 'Mid-Chapter Check',
        platformTitleAr: 'محطة التقويم التكويني لطرح العشرات والطرح المباشر دون استلاف',
        platformTitleEn: 'Mid-Chapter Checkpoint on Pure Tens and Subtraction Without Regrouping',
        page: 148,
        safeMaterialsAr: 'بطاقات تقييم صفي مرحلي مصورة',
        safeMaterialsEn: 'Illustrated mid-unit review task cards'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'مراجعة تراكمية',
        bookTitleEn: 'Cumulative Review',
        platformTitleAr: 'مراجعة تراكمية لمهارات الطرح قبل استكمال دروس الفصل',
        platformTitleEn: 'Cumulative Review of Subtraction Skills Before Continuing the Chapter',
        page: 149,
        safeMaterialsAr: 'بطاقات مراجعة صفية',
        safeMaterialsEn: 'Classroom review cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'طرح عدد مكون من رقمين من عدد مكون من رقمين',
        bookTitleEn: 'Subtracting a Two-Digit Number from a Two-Digit Number',
        platformTitleAr: 'تطبيق الطرح على عددين من رقمين مع محاذاة المنازل',
        platformTitleEn: 'Subtracting Two Two-Digit Numbers with Place-Value Alignment',
        page: 150,
        safeMaterialsAr: 'لوحات منازل وبطاقات أعداد',
        safeMaterialsEn: 'Place-value mats and numeral cards'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'الطرح بإعادة التجميع',
        bookTitleEn: 'Subtracting with Regrouping',
        platformTitleAr: 'استكشاف فك عشرة واحدة إلى ١٠ آحاد عندما يكون رقم آحاد المطروح أكبر من المطروح منه',
        platformTitleEn: 'Exploring Unbundling 1 Ten into 10 Ones When the Subtrahend Ones Exceed Minuend Ones',
        page: 144,
        safeMaterialsAr: 'مكعبات قابلة للفك والتجميع ناعمة الملمس وبساط منازل ثنائي',
        safeMaterialsEn: 'Smooth snap cubes that unbundle readily and dual place-value mats'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'طرح عددين كل منهما مكون من رقمين',
        bookTitleEn: 'Subtracting Two Two-Digit Numbers',
        platformTitleAr: 'إتقان الخوارزمية الرأسية للطرح الثنائي مع التحويل المنهجي وكتابة المنازل بدقة',
        platformTitleEn: 'Mastering the Two-Digit Vertical Subtraction Algorithm with Disciplined Place Alignment',
        page: 152,
        safeMaterialsAr: 'لوحات منازل مغناطيسية آمنة وبطاقات أرقام ملونة',
        safeMaterialsEn: 'Safe magnetic place-value boards and numeral tiles'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'التحقق من صحة ناتج الطرح',
        bookTitleEn: 'Checking Subtraction Answers',
        platformTitleAr: 'استعمال العملية العكسية (جمع الناتج مع المطروح) للتأكد الرياضي من صواب الإجابة',
        platformTitleEn: 'Applying Inverse Verification: Adding Difference to Subtrahend to Prove Correctness',
        page: 154,
        safeMaterialsAr: 'بطاقات ميزان التعادل الرياضي المصور وبطاقات تحقق ذاتي',
        safeMaterialsEn: 'Illustrated balance-scale cards and self-verification checkmarks'
      },
      {
        kind: 'lesson',
        bookTitleAr: 'تقدير ناتج الطرح',
        bookTitleEn: 'Estimating Differences',
        platformTitleAr: 'تقريب الأعداد لأقرب عشرة لتقدير الفرق والتحقق من معقولية الحلول الحسابية',
        platformTitleEn: 'Rounding Terms to Nearest Ten to Estimate Differences and Appraise Reasonableness',
        page: 156,
        safeMaterialsAr: 'خط أعداد التقريب وبطاقات تقدير سريعة',
        safeMaterialsEn: 'Rounding number line strips and prompt cards'
      },
      {
        kind: 'chapterReview',
        bookTitleAr: 'اختبار الفصل',
        bookTitleEn: 'Chapter Check',
        platformTitleAr: 'التقويم الختامي الشامل لمهارات طرح الأعداد المكونة من رقمين والتحقق الذاتي',
        platformTitleEn: 'Comprehensive Final Evaluation of Two-Digit Subtraction and Self-Checking Mastery',
        page: 158,
        safeMaterialsAr: 'كتيبات مراجعة صفية ختامية مشجعة',
        safeMaterialsEn: 'Encouraging final review task booklets'
      },
      {
        kind: 'cumulative',
        bookTitleAr: 'اختبار تراكمي',
        bookTitleEn: 'Cumulative Test',
        platformTitleAr: 'التقويم التراكمي الشامل لكافة فصول ومحاور الفصل الدراسي الأول في الرياضيات',
        platformTitleEn: 'Grand Cumulative Evaluation Encompassing All Semester 1 Mathematics Axes',
        page: 160,
        safeMaterialsAr: 'ملفات إنجاز تقويمية شاملة للفصل الدراسي الأول',
        safeMaterialsEn: 'Semester 1 comprehensive portfolio assessment sheets'
      }
    ]
  }
];

const chapterNumbersAr = ['الأول', 'الثاني', 'الثالث', 'الرابع', 'الخامس', 'السادس'] as const;

chapters.forEach((chapter) => chapter.topics.sort((a, b) => a.page - b.page));

export const SAUDI_G2_PRIMARY_MATH_UNIT_COUNT = chapters.length;

export const SAUDI_G2_PRIMARY_MATH_TOPIC_COUNT = chapters.reduce(
  (count, chapter) => count + chapter.topics.length,
  0
);

/**
 * Comparative matrix showing textbook titles versus descriptive platform axis titles
 */
export const SAUDI_G2_PRIMARY_MATH_AXES_COMPARISON = chapters.map((ch) => ({
  unitNumber: ch.unitNumber,
  bookChapterTitleAr: ch.bookTitleAr,
  bookChapterTitleEn: ch.bookTitleEn,
  platformAxisTitleAr: ch.platformTitleAr,
  platformAxisTitleEn: ch.platformTitleEn,
  comparisonRationaleAr: ch.comparisonRationaleAr,
  comparisonRationaleEn: ch.comparisonRationaleEn,
  topicCount: ch.topics.length
}));

export const SAUDI_G2_PRIMARY_MATH_TABLE_OF_CONTENTS = chapters.flatMap((chapter) =>
  chapter.topics.map((topic) => ({
    unitNumber: chapter.unitNumber,
    bookUnitTitleAr: chapter.bookTitleAr,
    platformUnitTitleAr: chapter.platformTitleAr,
    bookTopicTitleAr: topic.bookTitleAr,
    bookTopicTitleEn: topic.bookTitleEn,
    platformTopicTitleAr: topic.platformTitleAr,
    platformTopicTitleEn: topic.platformTitleEn,
    kind: topic.kind,
    page: topic.page,
    safeMaterialsAr: topic.safeMaterialsAr,
    safeMaterialsEn: topic.safeMaterialsEn
  }))
);

const guidanceForKind = (
  chapter: MathChapter,
  topic: MathContentsEntry
): { ar: string; en: string } => {
  if (topic.kind === 'preparation') {
    if (chapter.unitNumber === 1) {
      return {
        ar: `تهيئة صفية أصلية ومساندة للتهيئة الواردة في كتاب الطالب (ص ${topic.page}): يستعيد الطالب العد بمقارنة مجموعتين من الصور، ثم يطابق العدد المكتوب بالكلمات مع رمزه، ويكمل أعداد خط الأعداد ويرتب أعدادًا بسيطة. الأنشطة المعروضة من إعداد المنصة وليست أسئلة الكتاب نفسها.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}\nالخامات الآمنة الموصى بها: ${topic.safeMaterialsAr}.`,
        en: `Original supplementary classroom preparation aligned with the textbook preparation (p. ${topic.page}): Students review counting by comparing pictured sets, match number words to numerals, complete a number line, and order simple numbers. The platform activity is original and does not reproduce textbook questions.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}\nRecommended safe materials: ${topic.safeMaterialsEn}.`
      };
    }
    return {
      ar: `تهيئة صفية تفاعلية أصلية من المنصة لمحور «${chapter.platformTitleAr}»: يسترجع الطالب المهارات الرياضية السابقة عبر نشاط حسي آمن تحت إشراف المعلم.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}\nالخامات الآمنة الموصى بها: ${topic.safeMaterialsAr}.`,
      en: `Original platform classroom preparation for the axis "${chapter.platformTitleEn}": Students refresh prior skills through a hands-on activity under teacher supervision.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}\nRecommended safe materials: ${topic.safeMaterialsEn}.`
    };
  }
  if (topic.kind === 'exploration') {
    return {
      ar: `نشاط استكشافي أصلي من إعداد المنصة حول «${topic.platformTitleAr}»: يقوم الطالب بنمذجة المفهوم بالخامات الحسية الآمنة ويسجل ملاحظاته قبل صياغة القاعدة الرياضية، تحت الملاحظة والإشراف المباشر للمعلم.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}\nالخامات الآمنة المستخدمة: ${topic.safeMaterialsAr}.`,
      en: `Original platform exploration for "${topic.platformTitleEn}": Students model concepts with safe manipulatives and record findings before stating the mathematical rule under direct teacher supervision.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}\nSafe materials utilized: ${topic.safeMaterialsEn}.`
    };
  }
  if (topic.kind === 'extension') {
    return {
      ar: `نشاط تطبيقي مساند أصلي حول «${topic.platformTitleAr}»: يحل الطالب تحديًا رياضيًا ممتعًا باستخدام خامات صفية آمنة بإشراف المعلم.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}\nالخامات الآمنة: ${topic.safeMaterialsAr}.`,
      en: `Supplementary original activity for "${topic.platformTitleEn}": Students solve an engaging math puzzle using safe classroom materials supervised by the teacher.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}\nSafe materials: ${topic.safeMaterialsEn}.`
    };
  }
  if (topic.kind === 'midterm' || topic.kind === 'chapterReview' || topic.kind === 'cumulative') {
    return {
      ar: `تقويم بنائي ومراجعة شاملة من إعداد المنصة لمحور «${chapter.platformTitleAr}». عنوان الدرس في الفهرس المرجعي: «${topic.bookTitleAr}» (ص ${topic.page})، وعنوان المحور الوصفي في المنصة: «${topic.platformTitleAr}». الأسئلة والأنشطة أصلية تمامًا من المنصة وتجرى تحت إشراف المعلم دون نسخ اختبارات الكتاب المدرسي.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}`,
      en: `Original platform review and assessment for the axis "${chapter.platformTitleEn}." Contents reference heading: "${topic.bookTitleEn}" (p. ${topic.page}), platform descriptive axis: "${topic.platformTitleEn}." Questions and checkpoints are entirely platform-created under teacher supervision without copying textbook tests.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}`
    };
  }
  return {
    ar: `${chapter.focusAr}\n\nفي موضوع «${topic.platformTitleAr}» (المقابل لموضوع الكتاب «${topic.bookTitleAr}» ص ${topic.page}): يوضح المعلم خطوات التفكير الرياضي، ويطبق الطالب النشاط الحسي باستخدام خامات آمنة.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}\nالخامات الآمنة الموصى بها: ${topic.safeMaterialsAr}.`,
    en: `${chapter.focusEn}\n\nFor "${topic.platformTitleEn}" (corresponding to textbook title "${topic.bookTitleEn}" on p. ${topic.page}): The teacher models mathematical reasoning and students apply hands-on practice with safe materials.\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}\nRecommended safe materials: ${topic.safeMaterialsEn}.`
  };
};

export const SAUDI_G2_PRIMARY_MATH_CURRICULUM: Lecture[] = chapters.map((chapter, chapterIndex) => {
  const order = chapterIndex + 1;
  const chapterNumberWord = chapterNumbersAr[chapterIndex];
  const lectureTitleAr = `الفصل ${chapterNumberWord}: ${chapter.platformTitleAr}`;
  const lectureTitleEn = `Chapter ${order}: ${chapter.platformTitleEn}`;
  const visualSteps = chapter.topics.slice(0, 4).map((topic) => ({
    labelAr: topic.platformTitleAr,
    labelEn: topic.platformTitleEn,
  }));
  const lectureId = `saudi-g2-primary-math-1448-${order}`;

  return {
    id: lectureId,
    order,
    titleAr: lectureTitleAr,
    titleEn: lectureTitleEn,
    subtitleAr: `الرياضيات — الصف الثاني الابتدائي — ${chapterNumbersAr[chapterIndex]}`,
    subtitleEn: `Grade 2 Mathematics — Chapter ${order}`,
    descriptionAr: `${chapter.focusAr}\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}\n\nالنشاط الصفي: ${chapter.activityAr}`,
    descriptionEn: `${chapter.focusEn}\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}\n\nClassroom Activity: ${chapter.activityEn}`,
    durationMinutes: 30,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    ministryAr: '',
    ministryEn: '',
    gradeLevelNameAr: 'الصف الثاني الابتدائي — الرياضيات (التعليم الحكومي)',
    gradeLevelNameEn: 'Grade 2 Primary — Mathematics (Public Education)',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Semester 1',
    unitTitleAr: lectureTitleAr,
    unitTitleEn: lectureTitleEn,
    lessonNumberAr: lectureTitleAr,
    lessonNumberEn: lectureTitleEn,
    warmupHookAr: `كيف تساعدنا الخامات الصفية الآمنة في استكشاف ${chapter.platformTitleAr}؟`,
    warmupHookEn: `How can safe classroom materials help us explore ${chapter.platformTitleEn}?`,
    learningOutcomesAr: [
      chapter.focusAr,
      'ينفذ الأنشطة الحسابية والعملية باستخدام خامات صفية آمنة غير حادة وتحت الإشراف المباشر للمعلم.',
      'يكتب خطوات الحل والتحقق الرياضي ويعبر عن تفكيره الرياضي بطلاقة وثقة.'
    ],
    learningOutcomesEn: [
      chapter.focusEn,
      'Perform hands-on math investigations using child-safe, non-hazardous materials under direct teacher supervision.',
      'Articulate problem-solving steps, check results using inverse relationships, and develop mathematical confidence.'
    ],
    keyConceptsAr: [
      `إرشادات السلامة والخامات الآمنة تحت إشراف المعلم`,
      ...chapter.topics.map((topic) => `${topic.platformTitleAr} (ص ${topic.page})`)
    ],
    keyConceptsEn: [
      `Child-safe material guidelines under teacher supervision`,
      ...chapter.topics.map((topic) => `${topic.platformTitleEn} (p. ${topic.page})`)
    ],
    summaryAr: `${chapter.focusAr}\n\nمحاور التعلم:\n${chapter.topics.map((topic) => `• ${topic.platformTitleAr}`).join('\n')}\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_AR}`,
    summaryEn: `${chapter.focusEn}\n\nLearning topics:\n${chapter.topics.map((topic) => `• ${topic.platformTitleEn}`).join('\n')}\n\n${TEACHER_SUPERVISION_SAFETY_GUIDANCE_EN}`,
    sections: chapter.topics.map((topic, topicIndex) => {
      const guidance = guidanceForKind(chapter, topic);
      return {
        titleAr: topic.platformTitleAr,
        titleEn: topic.platformTitleEn,
        contentAr: `${guidance.ar}\n\nخامات آمنة تحت إشراف المعلم: ${topic.safeMaterialsAr}.`,
        contentEn: `${guidance.en}\n\nChild-Safe Materials under Teacher Supervision: ${topic.safeMaterialsEn}.`,
        ...(topicIndex === 0
          ? {
              diagram: {
                id: `saudi-g2-primary-math-diagram-${order}`,
                figureNumberAr: `شكل توضيحي (${order})`,
                figureNumberEn: `Illustration (${order})`,
                titleAr: `رسم تعليمي أصلي: ${chapter.platformTitleAr}`,
                titleEn: `Original Educational Diagram: ${chapter.platformTitleEn}`,
                captionAr: `رسم تعليمي أصلي يوضح محور «${chapter.platformTitleAr}». تنفذ الأنشطة بخامات آمنة وتحت إشراف المعلم.`,
                captionEn: `An original educational diagram illustrating "${chapter.platformTitleEn}". Activities use safe materials under teacher supervision.`,
                diagramType: 'primary_math_g2_unit' as const,
                visualSteps,
              },
            }
          : {}),
      };
    }),
    assessment: {
      id: `saudi-g2-primary-math-assessment-${order}`,
      lectureId,
      titleAr: `تقويم المحور: ${chapter.platformTitleAr}`,
      titleEn: `Axis Check: ${chapter.platformTitleEn}`,
      passingScore: 80,
      questions: [
        {
          id: `saudi-g2-primary-math-question-${order}`,
          textAr: chapter.questionAr,
          textEn: chapter.questionEn,
          optionsAr: [...chapter.optionsAr],
          optionsEn: [...chapter.optionsEn],
          correctIndex: 0,
          explanationAr: `تقويم المنصة أصلي ومساند لمحور «${chapter.platformTitleAr}»، وصيغت أسئلته بصورة مستقلة لا تنقل أسئلة اختبارات الكتاب المدرسي، مع التركيز على الفهم المفاهيمي والتطبيق بالخامات الآمنة تحت إشراف المعلم.`,
          explanationEn: `This original platform assessment evaluates the axis "${chapter.platformTitleEn}". Questions are independently created without copying textbook tests, emphasizing conceptual fluency and teacher-guided hands-on practice.`,
          conceptTestedAr: chapter.platformTitleAr,
          conceptTestedEn: chapter.platformTitleEn,
          difficulty: 'easy',
        },
      ],
    },
  };
});
