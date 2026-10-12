import type { Lecture } from '../types';

export const SUDAN_PRIMARY_MATH_G2_BOOK = {
  title: 'الرياضيات — الصف الثاني الأساسي',
  edition: 'الطبعة المنقحة 2021م',
  units: [
    { titleAr: 'الأعداد حتى ١٠٠٠', titleEn: 'Numbers up to 1,000', firstPage: 3, lastPage: 15 },
    { titleAr: 'الجمع والطرح ضمن الأعداد ٩٩٩', titleEn: 'Addition and Subtraction within 999', firstPage: 16, lastPage: 22 },
    { titleAr: 'جداول الضرب', titleEn: 'Multiplication Tables', firstPage: 23, lastPage: 46 },
    { titleAr: 'القسمة', titleEn: 'Division', firstPage: 47, lastPage: 56 },
    { titleAr: 'القياس', titleEn: 'Measurement', firstPage: 57, lastPage: 64 },
    { titleAr: 'الهندسة', titleEn: 'Geometry', firstPage: 65, lastPage: 71 }
  ]
} as const;

interface Lesson {
  unit: number;
  page: number;
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
}

const lessons: Lesson[] = [
  { unit: 1, page: 4, titleAr: 'العشرات والعدد ١٠٠', titleEn: 'Tens and the Number 100', focusAr: 'يعد بالعشرات، ويمثل العشرات والآحاد، ويتعرف أن عشر عشرات تكوّن مئة.', focusEn: 'Count by tens, represent tens and ones, and recognize that ten tens make one hundred.', questionAr: 'كم عشرة في العدد ١٠٠؟', questionEn: 'How many tens are in 100?', optionsAr: ['١٠', '٥', '١٠٠'], optionsEn: ['10', '5', '100'] },
  { unit: 1, page: 8, titleAr: 'المئات', titleEn: 'Hundreds', focusAr: 'يعد المئات ويقرأ أسماءها، ويمثل الأعداد المكونة من مئات كاملة حتى ١٠٠٠.', focusEn: 'Count and name hundreds and represent numbers made of complete hundreds up to 1,000.', questionAr: 'ما العدد الذي تمثله ٧ مئات؟', questionEn: 'What number is represented by 7 hundreds?', optionsAr: ['٧٠٠', '٧٠', '٧'], optionsEn: ['700', '70', '7'] },
  { unit: 1, page: 11, titleAr: 'الأعداد حتى ١٠٠٠', titleEn: 'Numbers up to 1,000', focusAr: 'يقرأ ويكتب أعدادًا حتى ١٠٠٠، ويمثلها بالمئات والعشرات والآحاد والصيغة التحليلية.', focusEn: 'Read and write numbers up to 1,000 and represent them with hundreds, tens, ones, and expanded form.', questionAr: 'ما الصيغة التحليلية للعدد ٣٢٥؟', questionEn: 'What is the expanded form of 325?', optionsAr: ['٣٠٠ + ٢٠ + ٥', '٣٠ + ٢٠٠ + ٥٠', '٣٠٠ + ٢٥٠'], optionsEn: ['300 + 20 + 5', '30 + 200 + 50', '300 + 250'] },
  { unit: 1, page: 15, titleAr: 'القيمة المنزلية وترتيب الأعداد', titleEn: 'Place Value and Ordering Numbers', focusAr: 'يحدد منزلة الرقم وقيمته، ويقارن الأعداد حتى ١٠٠٠ ويرتبها تصاعديًا وتنازليًا.', focusEn: 'Identify a digit’s place and value, compare numbers up to 1,000, and order them ascending or descending.', questionAr: 'أي عدد هو الأكبر؟', questionEn: 'Which number is greatest?', optionsAr: ['٥٤٢', '٥٢٤', '٤٥٢'], optionsEn: ['542', '524', '452'] },

  { unit: 2, page: 18, titleAr: 'جمع الأعداد ضمن ٩٩٩', titleEn: 'Adding Numbers within 999', focusAr: 'يجمع أعدادًا من رقمين أو ثلاثة أرقام باستخدام القيمة المنزلية، ويرتب خطوات الجمع العمودي.', focusEn: 'Add two- and three-digit numbers using place value and organize the steps of vertical addition.', questionAr: 'ما ناتج ٤٦ + ٣٧؟', questionEn: 'What is 46 + 37?', optionsAr: ['٨٣', '٧٣', '٨٢'], optionsEn: ['83', '73', '82'] },
  { unit: 2, page: 21, titleAr: 'طرح الأعداد ضمن ٩٩٩', titleEn: 'Subtracting Numbers within 999', focusAr: 'يطرح أعدادًا ضمن ٩٩٩، ويتعرف المطروح منه والمطروح والفرق، ويستخدم الاستلاف عند الحاجة.', focusEn: 'Subtract numbers within 999, identify the minuend, subtrahend, and difference, and regroup when needed.', questionAr: 'ما ناتج ٣٥ − ١٧؟', questionEn: 'What is 35 − 17?', optionsAr: ['١٨', '٢٢', '١٧'], optionsEn: ['18', '22', '17'] },

  { unit: 3, page: 24, titleAr: 'مفهوم الضرب ورمزه', titleEn: 'Multiplication and Its Symbol', focusAr: 'يمثل مجموعات متساوية بجمع متكرر، ويتعرف رمز الضرب ويكتب جملة ضرب مناسبة.', focusEn: 'Represent equal groups as repeated addition, recognize the multiplication sign, and write a matching multiplication sentence.', questionAr: 'ما جملة الضرب التي تمثل ٢ + ٢ + ٢؟', questionEn: 'Which multiplication sentence represents 2 + 2 + 2?', optionsAr: ['٣ × ٢', '٣ + ٢', '٢ × ٢'], optionsEn: ['3 × 2', '3 + 2', '2 × 2'] },
  { unit: 3, page: 26, titleAr: 'جدول الضرب للعدد ٢', titleEn: 'The 2 Times Table', focusAr: 'يكون جدول ضرب ٢ بالعد اثنين اثنين والجمع المتكرر، ويستخدمه لحل مسائل مجموعات متساوية.', focusEn: 'Build the 2 times table by counting in twos and repeated addition, then use it in equal-group problems.', questionAr: 'ما ناتج ٢ × ٦؟', questionEn: 'What is 2 × 6?', optionsAr: ['١٢', '٨', '١٠'], optionsEn: ['12', '8', '10'] },
  { unit: 3, page: 28, titleAr: 'جدول الضرب للعدد ١٠', titleEn: 'The 10 Times Table', focusAr: 'يكون جدول ضرب ١٠ بالعد بالعشرات، ويربط الضرب في عشرة بالقيمة المنزلية.', focusEn: 'Build the 10 times table by counting in tens and connect multiplying by ten to place value.', questionAr: 'ما ناتج ٧ × ١٠؟', questionEn: 'What is 7 × 10?', optionsAr: ['٧٠', '١٧', '٧'], optionsEn: ['70', '17', '7'] },
  { unit: 3, page: 30, titleAr: 'جدول الضرب للعدد ٣', titleEn: 'The 3 Times Table', focusAr: 'يعد ثلاثات ويستخدم الجمع المتتابع والخط العددي لتكوين جدول ضرب ٣.', focusEn: 'Count in threes and use repeated addition and a number line to build the 3 times table.', questionAr: 'ما ناتج ٣ × ٤؟', questionEn: 'What is 3 × 4?', optionsAr: ['١٢', '٧', '١٦'], optionsEn: ['12', '7', '16'] },
  { unit: 3, page: 33, titleAr: 'جدول الضرب للعدد ٤', titleEn: 'The 4 Times Table', focusAr: 'يكون جدول ضرب ٤ بالعد أربعًا أربعًا، ويربط الضرب بجمع مجموعات متساوية.', focusEn: 'Build the 4 times table by counting in fours and connect multiplication to equal groups.', questionAr: 'ما ناتج ٤ × ٥؟', questionEn: 'What is 4 × 5?', optionsAr: ['٢٠', '٩', '٢٥'], optionsEn: ['20', '9', '25'] },
  { unit: 3, page: 37, titleAr: 'جدول الضرب للعدد ٥', titleEn: 'The 5 Times Table', focusAr: 'يعد خمسات ويستخدم الجمع التتابعي لتكوين جدول ضرب ٥ وحل مسائل حياتية بسيطة.', focusEn: 'Count in fives and use repeated addition to build the 5 times table and solve simple everyday problems.', questionAr: 'ما ناتج ٥ × ٦؟', questionEn: 'What is 5 × 6?', optionsAr: ['٣٠', '٢٥', '١١'], optionsEn: ['30', '25', '11'] },
  { unit: 3, page: 41, titleAr: 'جدول الضرب للعدد ٦', titleEn: 'The 6 Times Table', focusAr: 'يكون جدول ضرب ٦ بالعد ستة ستة ويسترجع حقائق الضرب حتى ٦ × ١٠.', focusEn: 'Build the 6 times table by counting in sixes and recall multiplication facts up to 6 × 10.', questionAr: 'ما ناتج ٦ × ٧؟', questionEn: 'What is 6 × 7?', optionsAr: ['٤٢', '٣٦', '٤٨'], optionsEn: ['42', '36', '48'] },
  { unit: 3, page: 44, titleAr: 'جداول الضرب للأعداد', titleEn: 'Multiplication Tables', focusAr: 'يقرأ جدول الضرب ويستكمل حقائق الضرب للأعداد من ١ إلى ١٠، ويستخدم المجموعات المتساوية لحل مسائل قصيرة.', focusEn: 'Read the multiplication table, complete multiplication facts for numbers 1 to 10, and use equal groups to solve short problems.', questionAr: 'ما ناتج ٩ × ٥؟', questionEn: 'What is 9 × 5?', optionsAr: ['٤٥', '٣٥', '٥٤'], optionsEn: ['45', '35', '54'] },

  { unit: 4, page: 49, titleAr: 'مفهوم القسمة', titleEn: 'The Meaning of Division', focusAr: 'يفهم القسمة بوصفها توزيعًا متساويًا أو طرحًا متكررًا، ويكتب رمز القسمة وجملتها.', focusEn: 'Understand division as equal sharing or repeated subtraction and write the division symbol and sentence.', questionAr: 'إذا وزعنا ١٢ كرة على ٤ صناديق بالتساوي، فكم كرة في كل صندوق؟', questionEn: 'If 12 balls are shared equally among 4 boxes, how many are in each box?', optionsAr: ['٣', '٤', '٨'], optionsEn: ['3', '4', '8'] },
  { unit: 4, page: 51, titleAr: 'القسمة على ٢', titleEn: 'Dividing by 2', focusAr: 'يحل مسائل قسمة على ٢ بالتوزيع المتساوي ويربطها بحقائق الضرب المقابلة.', focusEn: 'Solve division-by-2 problems using equal sharing and connect them to related multiplication facts.', questionAr: 'ما ناتج ١٢ ÷ ٢؟', questionEn: 'What is 12 ÷ 2?', optionsAr: ['٦', '٤', '١٠'], optionsEn: ['6', '4', '10'] },
  { unit: 4, page: 52, titleAr: 'القسمة على ٣', titleEn: 'Dividing by 3', focusAr: 'يستخدم مجموعات متساوية وحقائق الضرب لإيجاد نواتج القسمة على ٣.', focusEn: 'Use equal groups and multiplication facts to find quotients when dividing by 3.', questionAr: 'ما ناتج ١٥ ÷ ٣؟', questionEn: 'What is 15 ÷ 3?', optionsAr: ['٥', '٣', '١٢'], optionsEn: ['5', '3', '12'] },
  { unit: 4, page: 53, titleAr: 'القسمة على ٤', titleEn: 'Dividing by 4', focusAr: 'يحل مسائل القسمة على ٤ باستخدام التوزيع والربط بين الضرب والقسمة.', focusEn: 'Solve division-by-4 problems using sharing and the relationship between multiplication and division.', questionAr: 'ما ناتج ٢٠ ÷ ٤؟', questionEn: 'What is 20 ÷ 4?', optionsAr: ['٥', '٤', '١٦'], optionsEn: ['5', '4', '16'] },
  { unit: 4, page: 55, titleAr: 'القسمة على ٥', titleEn: 'Dividing by 5', focusAr: 'يستكمل حقائق القسمة على ٥ ويمثل القسمة في مسائل توزيع متساوٍ.', focusEn: 'Complete division-by-5 facts and represent division in equal-sharing problems.', questionAr: 'ما ناتج ٣٠ ÷ ٥؟', questionEn: 'What is 30 ÷ 5?', optionsAr: ['٦', '٥', '٢٥'], optionsEn: ['6', '5', '25'] },
  { unit: 4, page: 56, titleAr: 'القسمة على ٦', titleEn: 'Dividing by 6', focusAr: 'يستخدم جدول ضرب ٦ لإيجاد نواتج القسمة، ويتحقق من إجابته بالضرب.', focusEn: 'Use the 6 times table to find quotients and check answers by multiplication.', questionAr: 'ما ناتج ٤٢ ÷ ٦؟', questionEn: 'What is 42 ÷ 6?', optionsAr: ['٧', '٦', '٨'], optionsEn: ['7', '6', '8'] },

  { unit: 5, page: 59, titleAr: 'قياس الأطوال', titleEn: 'Measuring Length', focusAr: 'يتعرف أدوات قياس الطول ووحداته، ويختار وحدة مناسبة للأشياء والمسافات المختلفة.', focusEn: 'Learn length-measuring tools and units and choose an appropriate unit for different objects and distances.', questionAr: 'أي وحدة تناسب قياس طول قلم؟', questionEn: 'Which unit is suitable for measuring a pencil?', optionsAr: ['السنتيمتر', 'الكيلومتر', 'الطن'], optionsEn: ['Centimeter', 'Kilometer', 'Ton'] },
  { unit: 5, page: 61, titleAr: 'الأوزان', titleEn: 'Weight and Mass', focusAr: 'يتعرف أدوات الوزن ووحدات الجرام والكيلوجرام والطن، ويقارن بين أوزان أشياء مألوفة.', focusEn: 'Learn weighing tools and the gram, kilogram, and ton; compare the weights of familiar objects.', questionAr: 'أي وحدة تناسب وزن كيس أرز؟', questionEn: 'Which unit is suitable for the weight of a bag of rice?', optionsAr: ['الكيلوجرام', 'السنتيمتر', 'الدقيقة'], optionsEn: ['Kilogram', 'Centimeter', 'Minute'] },
  { unit: 5, page: 62, titleAr: 'الوقت: اليوم والأسبوع', titleEn: 'Time: Days and Weeks', focusAr: 'يحدد مكونات اليوم وعدد ساعاته، ويتعرف أيام الأسبوع ويحسب الأيام والأسابيع في مسائل بسيطة.', focusEn: 'Identify the parts and hours of a day, name the days of the week, and solve simple day-and-week problems.', questionAr: 'كم ساعة في اليوم؟', questionEn: 'How many hours are in a day?', optionsAr: ['٢٤', '١٢', '٧'], optionsEn: ['24', '12', '7'] },
  { unit: 5, page: 64, titleAr: 'السنة والشهر', titleEn: 'The Year and the Month', focusAr: 'يتعرف أشهر السنة وتسلسلها، ويربط السنة بالشهور والأيام في تدريبات مناسبة.', focusEn: 'Name and order the months of the year and relate years to months and days in suitable exercises.', questionAr: 'كم شهرًا في السنة؟', questionEn: 'How many months are in a year?', optionsAr: ['١٢', '٧', '١٠'], optionsEn: ['12', '7', '10'] },

  { unit: 6, page: 67, titleAr: 'الخط المستقيم والخط المنحني', titleEn: 'Straight and Curved Lines', focusAr: 'يميز الخط المستقيم من الخط المنحني، ويصنف المنحنيات إلى مفتوحة ومغلقة.', focusEn: 'Distinguish straight from curved lines and classify curves as open or closed.', questionAr: 'أي وصف يناسب الخط الذي لا ينحني؟', questionEn: 'Which description fits a line that does not curve?', optionsAr: ['مستقيم', 'منحني', 'دائري فقط'], optionsEn: ['Straight', 'Curved', 'Only circular'] },
  { unit: 6, page: 70, titleAr: 'المضلعات', titleEn: 'Polygons', focusAr: 'يتعرف المضلعات ويصنفها بحسب عدد الأضلاع إلى مثلثية ورباعية وخماسية وسداسية وسباعية.', focusEn: 'Recognize polygons and classify them by side count as triangles, quadrilaterals, pentagons, hexagons, and heptagons.', questionAr: 'كم ضلعًا للمثلث؟', questionEn: 'How many sides does a triangle have?', optionsAr: ['٣', '٤', '٥'], optionsEn: ['3', '4', '5'] }
];

export const SUDAN_PRIMARY_MATH_G2_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_MATH_G2_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-math-g2-${order}`;
  const unit = SUDAN_PRIMARY_MATH_G2_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `الرياضيات — الصف الثاني الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 2 Mathematics — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G2',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثاني الابتدائي',
    gradeLevelNameEn: 'Grade 2 Primary',
    termAr: 'الرياضيات — الصف الثاني',
    termEn: 'Grade 2 Mathematics',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في مثال من حياتك يرتبط بموضوع «${lesson.titleAr}».`,
    warmupHookEn: `Think of an everyday example connected to “${lesson.titleEn}.”`,
    learningOutcomesAr: [lesson.focusAr, 'يشرح طريقة الحل ويتحقق من صحة إجابته.'],
    learningOutcomesEn: [lesson.focusEn, 'Explain the solution method and check that the answer is reasonable.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nتدريب بصري: استخدم عدادًا أو رسمًا أو جدولًا بسيطًا لتمثيل المسألة، ثم اكتب خطوات الحل والنتيجة.`,
      contentEn: `${lesson.focusEn}\n\nVisual practice: Use a counter, drawing, or simple table to model the problem, then write the solution steps and result.`
    }],
    topicAr: `ص ${lesson.page}`,
    topicEn: `p. ${lesson.page}`,
    assessment: {
      id: `${id}-assessment`,
      lectureId: id,
      titleAr: `تقويم: ${lesson.titleAr}`,
      titleEn: `Check: ${lesson.titleEn}`,
      passingScore: 80,
      questions: [{
        id: `${id}-q1`,
        textAr: lesson.questionAr,
        textEn: lesson.questionEn,
        optionsAr: [...lesson.optionsAr],
        optionsEn: [...lesson.optionsEn],
        correctIndex: 0,
        conceptTestedAr: lesson.titleAr,
        conceptTestedEn: lesson.titleEn,
        explanationAr: `الإجابة الصحيحة: ${lesson.optionsAr[0]}.`,
        explanationEn: `Correct answer: ${lesson.optionsEn[0]}.`,
        difficulty: 'easy'
      }]
    }
  };
});
