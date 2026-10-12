import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_MATH_G3_BOOK = {
  title: 'الرياضيات — الصف الثالث الأساسي',
  edition: 'كتاب المرحلة الابتدائية',
  units: [
    { titleAr: 'قراءة الأعداد وكتابتها حتى ٩٩٩٩ والجمع والطرح عليها', titleEn: 'Reading, Writing, Adding, and Subtracting Numbers up to 9,999', firstPage: 5, lastPage: 15 },
    { titleAr: 'الضرب', titleEn: 'Multiplication', firstPage: 16, lastPage: 44 },
    { titleAr: 'القسمة', titleEn: 'Division', firstPage: 45, lastPage: 73 },
    { titleAr: 'الكسور', titleEn: 'Fractions', firstPage: 74, lastPage: 94 },
    { titleAr: 'القياس', titleEn: 'Measurement', firstPage: 95, lastPage: 105 },
    { titleAr: 'الهندسة', titleEn: 'Geometry', firstPage: 106, lastPage: 114 }
  ]
} as const;

interface MathLesson {
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
  visualStepsAr: [string, string, string, string];
  visualStepsEn: [string, string, string, string];
}

const lessons: MathLesson[] = [
  {
    unit: 1, page: 6, titleAr: 'قراءة عدد مكون من أربعة أرقام وكتابته', titleEn: 'Reading and Writing Four-Digit Numbers',
    focusAr: 'يربط الرقم بمنزلته في الآحاد والعشرات والمئات والآلاف، ثم يقرأ العدد المكون من أربعة أرقام ويكتبه بصورته العددية.',
    focusEn: 'Connect each digit to its ones, tens, hundreds, or thousands place, then read and write the complete four-digit number.',
    questionAr: 'ما قيمة الرقم ٣ في العدد ٣٤٢١؟', questionEn: 'What is the value of 3 in 3,421?',
    optionsAr: ['٣٠٠٠', '٣٠٠', '٣٠'], optionsEn: ['3,000', '300', '30'],
    visualStepsAr: ['منزلة الآلاف', 'منزلة المئات', 'منزلة العشرات', 'منزلة الآحاد'],
    visualStepsEn: ['Thousands place', 'Hundreds place', 'Tens place', 'Ones place']
  },
  {
    unit: 1, page: 9, titleAr: 'مضاعفات الأعداد', titleEn: 'Multiples of Numbers',
    focusAr: 'يكون مضاعفات عدد بالعد القفزي وإضافة العدد نفسه كل مرة، ويميز أن مضاعفات العشرة والمئة والألف تنتهي بأصفار مناسبة.',
    focusEn: 'Build a number’s multiples by skip-counting and adding the same number repeatedly; notice the zeros in multiples of ten, one hundred, and one thousand.',
    questionAr: 'ما العدد التالي في النمط ٢٠، ٣٠، ٤٠، ...؟', questionEn: 'What comes next in 20, 30, 40, ...?',
    optionsAr: ['٥٠', '٤٥', '٦٠'], optionsEn: ['50', '45', '60'],
    visualStepsAr: ['ابدأ بالعدد', 'أضف مقدارًا ثابتًا', 'تابع العد القفزي', 'اكتب المضاعفات'],
    visualStepsEn: ['Start with the number', 'Add a constant amount', 'Continue skip-counting', 'List the multiples']
  },
  {
    unit: 1, page: 12, titleAr: 'الجمع ضمن ٩٩٩٩', titleEn: 'Addition within 9,999',
    focusAr: 'يجمع أعدادًا من أربع خانات بمحاذاة المنازل، ويعيد التجميع إلى المنزلة التالية عندما يبلغ مجموع منزلة ما عشرة أو أكثر.',
    focusEn: 'Add four-digit numbers by aligning place values and regrouping to the next place when a column totals ten or more.',
    questionAr: 'ما ناتج ٢٣٤٥ + ١٢٠٠؟', questionEn: 'What is 2,345 + 1,200?',
    optionsAr: ['٣٥٤٥', '٣٤٥٥', '٢٤٦٥'], optionsEn: ['3,545', '3,455', '2,465'],
    visualStepsAr: ['حاذِ المنازل', 'اجمع الآحاد', 'أعد التجميع عند الحاجة', 'تحقق من المجموع'],
    visualStepsEn: ['Align place values', 'Add the ones', 'Regroup when needed', 'Check the sum']
  },
  {
    unit: 1, page: 14, titleAr: 'الطرح ضمن ٩٩٩٩', titleEn: 'Subtraction within 9,999',
    focusAr: 'يطرح أعدادًا من أربع خانات بترتيب المنازل، ويعيد التجميع من منزلة أكبر إذا لم تكفِ خانات العدد المطروح.',
    focusEn: 'Subtract four-digit numbers place by place, regrouping from a greater place when a digit is too small to subtract.',
    questionAr: 'ما ناتج ٥٠٠٠ − ١٢٠٠؟', questionEn: 'What is 5,000 − 1,200?',
    optionsAr: ['٣٨٠٠', '٤٨٠٠', '٣٩٠٠'], optionsEn: ['3,800', '4,800', '3,900'],
    visualStepsAr: ['اكتب العددين بمحاذاة المنازل', 'ابدأ بالآحاد', 'أعد التجميع إذا لزم', 'اطرح وتحقق'],
    visualStepsEn: ['Align both numbers', 'Start with the ones', 'Regroup if needed', 'Subtract and check']
  },

  {
    unit: 2, page: 17, titleAr: 'الضرب في ١ والصفر', titleEn: 'Multiplying by 1 and 0',
    focusAr: 'يتعرف أن ضرب أي عدد في واحد يبقيه كما هو، وأن ضرب أي عدد في صفر يعطي صفرًا، ويمثل القاعدتين بأمثلة.',
    focusEn: 'Learn that multiplying a number by one leaves it unchanged, while multiplying by zero gives zero, and illustrate both rules.',
    questionAr: 'ما ناتج ٨ × ٠؟', questionEn: 'What is 8 × 0?',
    optionsAr: ['٠', '٨', '١'], optionsEn: ['0', '8', '1'],
    visualStepsAr: ['اختر عددًا', 'اضرب في ١ أو ٠', 'طبق القاعدة المناسبة', 'سجل الناتج'],
    visualStepsEn: ['Choose a number', 'Multiply by 1 or 0', 'Apply the matching rule', 'Record the product']
  },
  {
    unit: 2, page: 19, titleAr: 'جدول الضرب للعدد ٧', titleEn: 'The 7 Times Table',
    focusAr: 'يبني جدول السبعة بالجمع المتكرر والعد سبعة سبعة، ثم يستعمل حقائقه لإيجاد نواتج الضرب.',
    focusEn: 'Build the seven times table through repeated addition and skip-counting by sevens, then use its facts to find products.',
    questionAr: 'ما ناتج ٧ × ٦؟', questionEn: 'What is 7 × 6?',
    optionsAr: ['٤٢', '٣٦', '٤٩'], optionsEn: ['42', '36', '49'],
    visualStepsAr: ['مجموعة واحدة من ٧', 'أضف مجموعة أخرى', 'كرر الجمع ست مرات', 'اقرأ حاصل الضرب'],
    visualStepsEn: ['One group of 7', 'Add another group', 'Repeat to make six groups', 'Read the product']
  },
  {
    unit: 2, page: 22, titleAr: 'جدول الضرب للعدد ٨', titleEn: 'The 8 Times Table',
    focusAr: 'يكون مضاعفات الثمانية بالعد القفزي، ويربط كل حقيقة ضرب بعدد مجموعات متساوية ومجموعها.',
    focusEn: 'Generate multiples of eight by skip-counting and connect each multiplication fact to equal groups and their total.',
    questionAr: 'ما ناتج ٨ × ٥؟', questionEn: 'What is 8 × 5?',
    optionsAr: ['٤٠', '٣٥', '٤٨'], optionsEn: ['40', '35', '48'],
    visualStepsAr: ['ثمانية في مجموعة', 'كوّن خمس مجموعات', 'اجمع القيم المتساوية', 'اكتب ٨ × ٥'],
    visualStepsEn: ['Eight in one group', 'Make five equal groups', 'Combine the equal amounts', 'Write 8 × 5']
  },
  {
    unit: 2, page: 28, titleAr: 'الضرب في ١٠ ومضاعفاتها', titleEn: 'Multiplying by 10 and Its Multiples',
    focusAr: 'يستخدم القيمة المنزلية عند الضرب في عشرة ومضاعفاتها، ويلاحظ انتقال الأرقام إلى منازل أعلى وإضافة الأصفار الملائمة.',
    focusEn: 'Use place value when multiplying by ten and its multiples, noticing how digits shift to higher places and appropriate zeros appear.',
    questionAr: 'ما ناتج ٦ × ١٠؟', questionEn: 'What is 6 × 10?',
    optionsAr: ['٦٠', '١٦', '٦'], optionsEn: ['60', '16', '6'],
    visualStepsAr: ['اكتب العدد في منزلته', 'حدد عامل العشرة', 'انقل القيمة منزلة', 'اكتب الناتج'],
    visualStepsEn: ['Write the number in its place', 'Identify the factor of ten', 'Shift its value one place', 'Write the product']
  },
  {
    unit: 2, page: 32, titleAr: 'الضرب في مئة', titleEn: 'Multiplying by 100',
    focusAr: 'يضرب الأعداد في مئة باستخدام القيمة المنزلية، ويفسر أن الضرب في مئة ينقل القيمة منزلتين إلى اليسار.',
    focusEn: 'Multiply numbers by one hundred using place value and explain that multiplying by 100 shifts the value two places to the left.',
    questionAr: 'ما ناتج ٤ × ١٠٠؟', questionEn: 'What is 4 × 100?',
    optionsAr: ['٤٠٠', '٤٠', '١٠٤'], optionsEn: ['400', '40', '104'],
    visualStepsAr: ['ابدأ بأربع وحدات', 'اضرب في مئة', 'انقل القيمة منزلتين', 'الناتج أربعمئة'],
    visualStepsEn: ['Start with four ones', 'Multiply by one hundred', 'Shift the value two places', 'The product is four hundred']
  },
  {
    unit: 2, page: 33, titleAr: 'ضرب الأعداد التي آحادها أو عشراتها أصفار', titleEn: 'Multiplying Numbers with Zero Ones or Tens',
    focusAr: 'يفكك الأعداد التي تنتهي بصفر إلى عوامل مناسبة، ثم يضرب الأرقام غير الصفرية ويعيد الأصفار إلى الناتج.',
    focusEn: 'Factor numbers ending in zero into convenient parts, multiply the nonzero factors, and keep the place-value zeros in the product.',
    questionAr: 'ما ناتج ٣٠ × ٤؟', questionEn: 'What is 30 × 4?',
    optionsAr: ['١٢٠', '١٢', '٣٤'], optionsEn: ['120', '12', '34'],
    visualStepsAr: ['حلل العدد إلى عشرات', 'اضرب الأرقام', 'أعد الصفر إلى منزلته', 'تحقق بالقيمة المنزلية'],
    visualStepsEn: ['Break the number into tens', 'Multiply the digits', 'Restore the place-value zero', 'Check using place value']
  },
  {
    unit: 2, page: 35, titleAr: 'توزيع الضرب على الجمع', titleEn: 'Distributing Multiplication over Addition',
    focusAr: 'يمثل خاصية التوزيع بتفكيك أحد العاملين إلى مجموع، ثم يضرب كل جزء ويجمع النواتج الجزئية.',
    focusEn: 'Model the distributive property by splitting a factor into a sum, multiplying each part, and adding the partial products.',
    questionAr: 'باستخدام التوزيع، ما ناتج ٣ × (٤ + ٢)؟', questionEn: 'Using distribution, what is 3 × (4 + 2)?',
    optionsAr: ['١٨', '١٤', '٩'], optionsEn: ['18', '14', '9'],
    visualStepsAr: ['فكك العدد إلى مجموع', 'اضرب العامل في الجزء الأول', 'اضربه في الجزء الثاني', 'اجمع النواتج الجزئية'],
    visualStepsEn: ['Split a number into a sum', 'Multiply by the first part', 'Multiply by the second part', 'Add the partial products']
  },
  {
    unit: 2, page: 38, titleAr: 'ضرب عدد من رقمين في عدد من رقم واحد', titleEn: 'Multiplying a Two-Digit Number by a One-Digit Number',
    focusAr: 'يضرب عددًا من رقمين في عدد من رقم واحد، ويجري الضرب في الآحاد والعشرات مع إعادة التجميع عند الحاجة.',
    focusEn: 'Multiply a two-digit number by a one-digit number, working through ones and tens and regrouping when needed.',
    questionAr: 'ما ناتج ٢٣ × ٣؟', questionEn: 'What is 23 × 3?',
    optionsAr: ['٦٩', '٦٦', '٢٦'], optionsEn: ['69', '66', '26'],
    visualStepsAr: ['اضرب الآحاد', 'أعد التجميع عند الحاجة', 'اضرب العشرات', 'اجمع القيم لتحصل على الناتج'],
    visualStepsEn: ['Multiply the ones', 'Regroup if needed', 'Multiply the tens', 'Combine the values for the product']
  },
  {
    unit: 2, page: 40, titleAr: 'ضرب عدد من رقمين في عدد من رقمين', titleEn: 'Multiplying a Two-Digit Number by a Two-Digit Number',
    focusAr: 'يضرب عددين من رقمين بتكوين نواتج جزئية من الآحاد والعشرات، ثم يجمعها للحصول على حاصل الضرب.',
    focusEn: 'Multiply two two-digit numbers by finding partial products for the ones and tens, then adding those products.',
    questionAr: 'ما ناتج ١٢ × ١١؟', questionEn: 'What is 12 × 11?',
    optionsAr: ['١٣٢', '١٢٢', '١٢١'], optionsEn: ['132', '122', '121'],
    visualStepsAr: ['حدد الآحاد والعشرات', 'اكتب النواتج الجزئية', 'اضرب في العشرات', 'اجمع النواتج'],
    visualStepsEn: ['Identify ones and tens', 'Write partial products', 'Multiply by the tens', 'Add the partial products']
  },
  {
    unit: 2, page: 42, titleAr: 'ضرب عدد مكون من رقمين في عدد مكون من ثلاثة أرقام', titleEn: 'Multiplying a Two-Digit Number by a Three-Digit Number',
    focusAr: 'ينظم ضرب عدد من رقمين في عدد من ثلاثة أرقام إلى نواتج جزئية بحسب المنازل، ثم يجمعها مع مراعاة قيمة كل منزلة.',
    focusEn: 'Organize multiplication of a two-digit and a three-digit number into place-value partial products, then add them carefully.',
    questionAr: 'ما ناتج ١٢ × ١٠٠؟', questionEn: 'What is 12 × 100?',
    optionsAr: ['١٢٠٠', '١٢٠', '١٠١٢'], optionsEn: ['1,200', '120', '1,012'],
    visualStepsAr: ['رتب العاملين حسب المنازل', 'احسب الناتج الجزئي الأول', 'احسب نواتج المنازل التالية', 'اجمع وتحقق'],
    visualStepsEn: ['Arrange factors by place value', 'Find the first partial product', 'Find the remaining place-value products', 'Add and check']
  },

  {
    unit: 3, page: 46, titleAr: 'القسمة على ٧ بدون باقٍ', titleEn: 'Dividing by 7 without a Remainder',
    focusAr: 'يستخدم جدول السبعة لإيجاد عدد المجموعات المتساوية، ويتحقق من القسمة بالضرب العكسي.',
    focusEn: 'Use the seven times table to find the number of equal groups and check division with the inverse multiplication.',
    questionAr: 'ما ناتج ٤٢ ÷ ٧؟', questionEn: 'What is 42 ÷ 7?',
    optionsAr: ['٦', '٧', '٥'], optionsEn: ['6', '7', '5'],
    visualStepsAr: ['وزع ٤٢ على مجموعات من ٧', 'عد المجموعات', 'اكتب خارج القسمة', 'تحقق بالضرب'],
    visualStepsEn: ['Share 42 into groups of 7', 'Count the groups', 'Write the quotient', 'Check by multiplication']
  },
  {
    unit: 3, page: 47, titleAr: 'القسمة على ٧ بباقٍ', titleEn: 'Dividing by 7 with a Remainder',
    focusAr: 'يقسم العدد إلى مجموعات من سبعة ويحدد ما يتبقى، مع التأكد أن الباقي أقل من المقسوم عليه.',
    focusEn: 'Make groups of seven and identify what remains, checking that the remainder is smaller than the divisor.',
    questionAr: 'عند قسمة ٣٠ على ٧، ما الباقي؟', questionEn: 'When 30 is divided by 7, what is the remainder?',
    optionsAr: ['٢', '٣', '٤'], optionsEn: ['2', '3', '4'],
    visualStepsAr: ['كوّن مجموعات من ٧', 'احسب المجموعات الكاملة', 'حدد العناصر الباقية', 'تأكد أن الباقي أقل من ٧'],
    visualStepsEn: ['Make groups of 7', 'Count the complete groups', 'Identify the leftover items', 'Check the remainder is less than 7']
  },
  {
    unit: 3, page: 49, titleAr: 'القسمة على ٧ خارج جدول الضرب', titleEn: 'Dividing by 7 beyond the Multiplication Table',
    focusAr: 'يقسم أعدادًا أكبر على سبعة بتنظيم خطوات القسمة المطولة، ويستعمل حاصل الضرب الجزئي لتقدير كل خطوة.',
    focusEn: 'Divide larger numbers by seven using organized long-division steps and partial products to guide each step.',
    questionAr: 'كم مرة يحتوي ٧ على ٥٦؟', questionEn: 'How many sevens are in 56?',
    optionsAr: ['٨', '٧', '٩'], optionsEn: ['8', '7', '9'],
    visualStepsAr: ['ابدأ بالخانة المناسبة', 'قدر عدد مجموعات السبعة', 'اطرح الناتج الجزئي', 'أنزل الرقم التالي'],
    visualStepsEn: ['Start with the appropriate digit', 'Estimate groups of seven', 'Subtract the partial product', 'Bring down the next digit']
  },
  {
    unit: 3, page: 56, titleAr: 'مسائل لفظية على القسمة على ٧', titleEn: 'Word Problems: Dividing by 7',
    focusAr: 'يحول مواقف التوزيع أو تكوين المجموعات إلى جملة قسمة على سبعة، ويكتب الإجابة بوحدتها المناسبة.',
    focusEn: 'Translate sharing or grouping situations into division by seven and state the answer with an appropriate unit.',
    questionAr: 'وُزعت ٣٥ ثمرة بالتساوي على ٧ أطفال. كم ثمرة لكل طفل؟', questionEn: '35 fruits are shared equally among 7 children. How many does each child get?',
    optionsAr: ['٥', '٧', '٦'], optionsEn: ['5', '7', '6'],
    visualStepsAr: ['حدد الكمية الكلية', 'حدد عدد المجموعات', 'اقسم بالتساوي', 'اكتب الإجابة في سياق المسألة'],
    visualStepsEn: ['Identify the total amount', 'Identify the number of groups', 'Divide equally', 'State the answer in context']
  },
  {
    unit: 3, page: 58, titleAr: 'القسمة على ٨ بدون باقٍ', titleEn: 'Dividing by 8 without a Remainder',
    focusAr: 'يسترجع حقائق جدول الثمانية لتقسيم كمية إلى مجموعات متساوية دون بقاء عناصر.',
    focusEn: 'Recall facts from the eight times table to divide a quantity into equal groups with nothing left over.',
    questionAr: 'ما ناتج ٦٤ ÷ ٨؟', questionEn: 'What is 64 ÷ 8?',
    optionsAr: ['٨', '٧', '٩'], optionsEn: ['8', '7', '9'],
    visualStepsAr: ['ابدأ بالكمية الكلية', 'كوّن مجموعات من ٨', 'عد المجموعات', 'تحقق بجدول الثمانية'],
    visualStepsEn: ['Start with the total', 'Make groups of 8', 'Count the groups', 'Check with the eight times table']
  },
  {
    unit: 3, page: 59, titleAr: 'القسمة على ٨ بباقٍ', titleEn: 'Dividing by 8 with a Remainder',
    focusAr: 'يحدد ناتج القسمة والباقي عند تقسيم عدد على ثمانية، ويتحقق أن الباقي لا يبلغ ثمانية.',
    focusEn: 'Find the quotient and remainder when dividing by eight and verify that the remainder is less than eight.',
    questionAr: 'عند قسمة ٣٥ على ٨، ما الباقي؟', questionEn: 'When 35 is divided by 8, what is the remainder?',
    optionsAr: ['٣', '٤', '٥'], optionsEn: ['3', '4', '5'],
    visualStepsAr: ['كوّن أكبر مجموعات من ٨', 'عد المجموعات الكاملة', 'احسب العناصر المتبقية', 'تحقق من الباقي'],
    visualStepsEn: ['Make as many groups of 8 as possible', 'Count complete groups', 'Count the remaining items', 'Check the remainder']
  },
  {
    unit: 3, page: 61, titleAr: 'القسمة على ٨ خارج جدول الضرب', titleEn: 'Dividing by 8 beyond the Multiplication Table',
    focusAr: 'يطبق القسمة على ثمانية في أعداد أكبر، ويستخدم الضرب والطرح المتتابعين لتحديد خارج القسمة.',
    focusEn: 'Apply division by eight to larger numbers, using repeated multiplication and subtraction to find the quotient.',
    questionAr: 'كم مرة يحتوي ٨ على ٧٢؟', questionEn: 'How many eights are in 72?',
    optionsAr: ['٩', '٨', '٧'], optionsEn: ['9', '8', '7'],
    visualStepsAr: ['اختر جزء العدد للقسمة', 'حدد حاصل ضرب مناسبًا', 'اطرح ثم تابع', 'اجمع أرقام خارج القسمة'],
    visualStepsEn: ['Choose the part to divide', 'Find a suitable multiple', 'Subtract and continue', 'Read the quotient digits']
  },
  {
    unit: 3, page: 63, titleAr: 'مسائل لفظية على القسمة على ٨', titleEn: 'Word Problems: Dividing by 8',
    focusAr: 'يستخرج العدد الكلي وعدد المجموعات من المسألة، ثم يقسم على ثمانية ويشرح معنى خارج القسمة أو الباقي.',
    focusEn: 'Identify the total and number of groups in a problem, divide by eight, and explain the meaning of the quotient or remainder.',
    questionAr: 'في كل صندوق ٨ أقلام. كم صندوقًا نحتاج إلى ٤٠ قلمًا؟', questionEn: 'Each box holds 8 pencils. How many boxes are needed for 40 pencils?',
    optionsAr: ['٥', '٦', '٤'], optionsEn: ['5', '6', '4'],
    visualStepsAr: ['اقرأ الموقف', 'حدد الكمية والمجموعات', 'اكتب جملة القسمة', 'فسر الناتج'],
    visualStepsEn: ['Read the situation', 'Identify the total and groups', 'Write the division sentence', 'Interpret the result']
  },
  {
    unit: 3, page: 64, titleAr: 'القسمة على ٩ بدون باقٍ', titleEn: 'Dividing by 9 without a Remainder',
    focusAr: 'يستعمل جدول التسعة لإيجاد خارج القسمة في مسائل لا يبقى فيها شيء، ويؤكد النتيجة بالضرب.',
    focusEn: 'Use the nine times table to find quotients in problems with no remainder and confirm the result by multiplication.',
    questionAr: 'ما ناتج ٧٢ ÷ ٩؟', questionEn: 'What is 72 ÷ 9?',
    optionsAr: ['٨', '٩', '٧'], optionsEn: ['8', '9', '7'],
    visualStepsAr: ['حدد العدد الكلي', 'كوّن مجموعات من ٩', 'عد المجموعات الكاملة', 'تحقق بالضرب في ٩'],
    visualStepsEn: ['Identify the total', 'Make groups of 9', 'Count complete groups', 'Check by multiplying by 9']
  },
  {
    unit: 3, page: 65, titleAr: 'القسمة على ٩ بباقٍ', titleEn: 'Dividing by 9 with a Remainder',
    focusAr: 'يقسم عددًا على تسعة ويكتب خارج القسمة والباقي، ثم يتأكد من أن الخارج × ٩ مع الباقي يساوي العدد الأصلي.',
    focusEn: 'Divide by nine and record the quotient and remainder, then check that quotient × 9 plus remainder equals the original number.',
    questionAr: 'عند قسمة ٢٩ على ٩، ما الباقي؟', questionEn: 'When 29 is divided by 9, what is the remainder?',
    optionsAr: ['٢', '٣', '١'], optionsEn: ['2', '3', '1'],
    visualStepsAr: ['كوّن مجموعات كاملة من ٩', 'سجل عدد المجموعات', 'حدد الباقي', 'تحقق من العلاقة'],
    visualStepsEn: ['Make complete groups of 9', 'Record the number of groups', 'Find the remainder', 'Check the relationship']
  },
  {
    unit: 3, page: 66, titleAr: 'القسمة على ٩ خارج جدول الضرب', titleEn: 'Dividing by 9 beyond the Multiplication Table',
    focusAr: 'ينظم القسمة المطولة على تسعة في أعداد أكبر، ويطرح مضاعفات تسعة المناسبة حتى يكمل خطوات الحل.',
    focusEn: 'Organize long division by nine for larger numbers, subtracting suitable multiples of nine through the steps.',
    questionAr: 'ما ناتج ١٠٨ ÷ ٩؟', questionEn: 'What is 108 ÷ 9?',
    optionsAr: ['١٢', '١١', '١٣'], optionsEn: ['12', '11', '13'],
    visualStepsAr: ['اقسم الخانة الأولى المناسبة', 'اضرب الخارج في ٩', 'اطرح وأنزل الرقم التالي', 'اكتب الخارج النهائي'],
    visualStepsEn: ['Divide the first suitable place', 'Multiply the quotient digit by 9', 'Subtract and bring down', 'Write the final quotient']
  },
  {
    unit: 3, page: 67, titleAr: 'مسائل لفظية على القسمة على ٩', titleEn: 'Word Problems: Dividing by 9',
    focusAr: 'يختار القسمة على تسعة لحل موقف من الحياة، ويميز إن كانت الإجابة تمثل عدد المجموعات أو نصيب كل مجموعة.',
    focusEn: 'Choose division by nine to solve an everyday situation and decide whether the answer represents the number of groups or the share per group.',
    questionAr: 'وُزعت ٥٤ قطعة بالتساوي على ٩ تلاميذ. كم قطعة لكل تلميذ؟', questionEn: '54 pieces are shared equally among 9 pupils. How many does each pupil get?',
    optionsAr: ['٦', '٩', '٥'], optionsEn: ['6', '9', '5'],
    visualStepsAr: ['حدد ما يطلبه السؤال', 'اجمع المعطيات', 'اقسم على ٩', 'اكتب الوحدة والمعنى'],
    visualStepsEn: ['Identify what is asked', 'Gather the given values', 'Divide by 9', 'State the unit and meaning']
  },
  {
    unit: 3, page: 68, titleAr: 'علاقة الضرب بالجمع والطرح', titleEn: 'Multiplication with Addition and Subtraction',
    focusAr: 'يحل تعبيرًا يضم الضرب والجمع أو الطرح بإجراء الضرب أولًا، ثم يجري الجمع أو الطرح.',
    focusEn: 'Evaluate an expression containing multiplication and addition or subtraction by multiplying first, then adding or subtracting.',
    questionAr: 'ما قيمة ٣ + ٢ × ٥؟', questionEn: 'What is the value of 3 + 2 × 5?',
    optionsAr: ['١٣', '٢٥', '١٠'], optionsEn: ['13', '25', '10'],
    visualStepsAr: ['حدد عملية الضرب', 'احسب حاصل الضرب', 'أجر الجمع أو الطرح', 'سجل قيمة التعبير'],
    visualStepsEn: ['Identify the multiplication', 'Find the product', 'Perform addition or subtraction', 'Record the expression’s value']
  },
  {
    unit: 3, page: 69, titleAr: 'علاقة القسمة بالجمع والطرح', titleEn: 'Division with Addition and Subtraction',
    focusAr: 'يحسب القسمة قبل الجمع أو الطرح في التعبير العددي، ثم ينفذ العملية المتبقية بالترتيب.',
    focusEn: 'Perform division before addition or subtraction in a numerical expression, then complete the remaining operation.',
    questionAr: 'ما قيمة ٢ + ٨ ÷ ٤؟', questionEn: 'What is the value of 2 + 8 ÷ 4?',
    optionsAr: ['٤', '٢٫٥', '١٠'], optionsEn: ['4', '2.5', '10'],
    visualStepsAr: ['حدد عملية القسمة', 'احسب خارج القسمة', 'أجر الجمع أو الطرح', 'تحقق من الناتج'],
    visualStepsEn: ['Identify the division', 'Find the quotient', 'Perform addition or subtraction', 'Check the result']
  },
  {
    unit: 3, page: 70, titleAr: 'مسائل لفظية', titleEn: 'Word Problems',
    focusAr: 'يجمع بين الجمع والضرب أو القسمة في مسائل لفظية، وينظم المعطيات ليختار العمليات المناسبة بالترتيب.',
    focusEn: 'Combine addition with multiplication or division in word problems, organizing the information to choose and order the operations.',
    questionAr: 'لدى مزارع ٣ حواشٍ في كل منها ٨ أشجار. كم شجرة لديه؟', questionEn: 'A farmer has 3 plots with 8 trees in each. How many trees does the farmer have?',
    optionsAr: ['٢٤', '١١', '٣٢'], optionsEn: ['24', '11', '32'],
    visualStepsAr: ['استخرج المعلومات', 'اختر العملية المناسبة', 'احسب خطوة خطوة', 'تحقق أن الجواب معقول'],
    visualStepsEn: ['Extract the information', 'Choose the suitable operation', 'Calculate step by step', 'Check that the answer makes sense']
  },
  {
    unit: 3, page: 72, titleAr: 'مع الناس في قريتي', titleEn: 'With the People in My Village',
    focusAr: 'يطبق القسمة في مواقف من حياة القرية مثل توزيع المحاصيل بالتساوي، ويفسر خارج القسمة بوحدات الموقف.',
    focusEn: 'Apply division to village-life situations such as sharing a harvest equally, interpreting the quotient in the units of the situation.',
    questionAr: 'وُزع ٢٠٠ رأس من الضأن بالتساوي على ٨ قطعان. كم رأسًا في كل قطيع؟', questionEn: '200 sheep are divided equally into 8 flocks. How many sheep are in each flock?',
    optionsAr: ['٢٥', '٢٠', '٣٢'], optionsEn: ['25', '20', '32'],
    visualStepsAr: ['حدد المحصول أو العدد الكلي', 'حدد عدد المستفيدين أو المجموعات', 'اقسم الكمية بالتساوي', 'فسر الناتج في سياق القرية'],
    visualStepsEn: ['Identify the total harvest or amount', 'Identify the people or groups', 'Share the amount equally', 'Interpret the result in the village context']
  },

  {
    unit: 4, page: 75, titleAr: 'كسور الوحدة', titleEn: 'Unit Fractions',
    focusAr: 'يمثل كسر الوحدة جزءًا واحدًا من أجزاء متساوية، ويسميه بحسب عدد أجزاء الكل.',
    focusEn: 'Represent a unit fraction as one of several equal parts and name it by the number of parts in the whole.',
    questionAr: 'إذا قُسم شكل إلى ٤ أجزاء متساوية وظلل جزء واحد، فما الكسر؟', questionEn: 'If a shape is split into 4 equal parts and 1 is shaded, what fraction is shown?',
    optionsAr: ['١⁄٤', '٤⁄١', '١⁄٣'], optionsEn: ['1/4', '4/1', '1/3'],
    visualStepsAr: ['اقسم الكل بالتساوي', 'اختر جزءًا واحدًا', 'اكتب ١ في البسط', 'اكتب عدد الأجزاء في المقام'],
    visualStepsEn: ['Divide the whole equally', 'Choose one part', 'Write 1 as the numerator', 'Write the number of parts as the denominator']
  },
  {
    unit: 4, page: 77, titleAr: 'الكسور الدالة على أكثر من جزء', titleEn: 'Fractions Representing More Than One Part',
    focusAr: 'يكتب كسرًا بسطه يبين عدد الأجزاء المأخوذة ومقامه يبين عدد الأجزاء المتساوية في الكل.',
    focusEn: 'Write a fraction whose numerator tells how many parts are taken and whose denominator tells how many equal parts make the whole.',
    questionAr: 'ظُللت ٣ أجزاء من شكل مقسم إلى ٥ أجزاء متساوية. ما الكسر؟', questionEn: '3 parts are shaded in a shape split into 5 equal parts. What fraction is shown?',
    optionsAr: ['٣⁄٥', '٥⁄٣', '٣⁄٨'], optionsEn: ['3/5', '5/3', '3/8'],
    visualStepsAr: ['عد الأجزاء المتساوية', 'عد الأجزاء المظللة', 'اكتب المظلل في البسط', 'اكتب الكل في المقام'],
    visualStepsEn: ['Count the equal parts', 'Count the shaded parts', 'Write shaded parts as the numerator', 'Write all parts as the denominator']
  },
  {
    unit: 4, page: 80, titleAr: 'الكسور كأجزاء من مجموعة', titleEn: 'Fractions as Parts of a Set',
    focusAr: 'يمثل جزءًا من مجموعة بكتابة عدد عناصر الجزء في البسط وعدد عناصر المجموعة كلها في المقام.',
    focusEn: 'Represent a part of a set by placing the number of items in that part over the total number of items.',
    questionAr: 'في مجموعة من ٨ أشياء، ٣ حمراء. ما الكسر الذي يمثل الأشياء الحمراء؟', questionEn: 'In a set of 8 items, 3 are red. What fraction represents the red items?',
    optionsAr: ['٣⁄٨', '٨⁄٣', '٣⁄٥'], optionsEn: ['3/8', '8/3', '3/5'],
    visualStepsAr: ['احصر عناصر المجموعة كلها', 'حدد عناصر الجزء', 'اكتب الجزء في البسط', 'اكتب الكل في المقام'],
    visualStepsEn: ['Count the whole set', 'Identify the items in the part', 'Write the part in the numerator', 'Write the whole in the denominator']
  },
  {
    unit: 4, page: 83, titleAr: 'الكسور المتكافئة', titleEn: 'Equivalent Fractions',
    focusAr: 'يتعرف كسورًا مختلفة ترمز إلى المقدار نفسه، ويستخدم الرسوم أو الضرب المتساوي للبسط والمقام للمقارنة بينها.',
    focusEn: 'Recognize different fractions that represent the same amount and use diagrams or equal scaling of numerator and denominator to compare them.',
    questionAr: 'أي كسر يكافئ ١⁄٢؟', questionEn: 'Which fraction is equivalent to 1/2?',
    optionsAr: ['٢⁄٤', '١⁄٤', '٣⁄٤'], optionsEn: ['2/4', '1/4', '3/4'],
    visualStepsAr: ['مثل الكل بأجزاء متساوية', 'ظلّل المقدار نفسه', 'غيّر عدد الأجزاء', 'قارن الكسرين'],
    visualStepsEn: ['Divide a whole into equal parts', 'Shade the same amount', 'Change the number of parts', 'Compare the fractions']
  },
  {
    unit: 4, page: 86, titleAr: 'اختصار الكسور', titleEn: 'Simplifying Fractions',
    focusAr: 'يبسط الكسر بقسمة البسط والمقام على العدد نفسه، مع المحافظة على قيمة الكسر.',
    focusEn: 'Simplify a fraction by dividing its numerator and denominator by the same number without changing its value.',
    questionAr: 'ما أبسط صورة للكسر ٢⁄٤؟', questionEn: 'What is the simplest form of 2/4?',
    optionsAr: ['١⁄٢', '٢⁄٢', '١⁄٤'], optionsEn: ['1/2', '2/2', '1/4'],
    visualStepsAr: ['ابحث عن عامل مشترك', 'اقسم البسط عليه', 'اقسم المقام عليه', 'اكتب الكسر المبسط'],
    visualStepsEn: ['Find a common factor', 'Divide the numerator by it', 'Divide the denominator by it', 'Write the simplified fraction']
  },
  {
    unit: 4, page: 88, titleAr: 'مقارنة الكسور', titleEn: 'Comparing Fractions',
    focusAr: 'يقارن كسور الوحدة ويلاحظ أن تقسيم الكل إلى أجزاء أكثر يجعل كل جزء أصغر، ثم يستعمل الرسوم لترتيب الكسور.',
    focusEn: 'Compare unit fractions and notice that dividing a whole into more parts makes each part smaller, then use diagrams to order fractions.',
    questionAr: 'أي كسر أكبر: ١⁄٢ أم ١⁄٤؟', questionEn: 'Which fraction is greater: 1/2 or 1/4?',
    optionsAr: ['١⁄٢', '١⁄٤', 'متساويان'], optionsEn: ['1/2', '1/4', 'They are equal'],
    visualStepsAr: ['مثل كلاً كاملًا', 'اقسمه إلى أنصاف', 'اقسمه إلى أرباع', 'قارن حجم الجزء الواحد'],
    visualStepsEn: ['Represent one whole', 'Divide it into halves', 'Divide it into fourths', 'Compare the size of one part']
  },
  {
    unit: 4, page: 93, titleAr: 'جمع الكسور متساوية المقامات', titleEn: 'Adding Fractions with Like Denominators',
    focusAr: 'يجمع كسرين لهما المقام نفسه بجمع البسطين والإبقاء على المقام، ويمثل الجمع بأجزاء متساوية.',
    focusEn: 'Add fractions with the same denominator by adding their numerators and keeping the denominator, using equal parts to model the sum.',
    questionAr: 'ما ناتج ٢⁄٨ + ٣⁄٨؟', questionEn: 'What is 2/8 + 3/8?',
    optionsAr: ['٥⁄٨', '٥⁄١٦', '١⁄٨'], optionsEn: ['5/8', '5/16', '1/8'],
    visualStepsAr: ['تحقق من تساوي المقامين', 'اجمع البسطين', 'أبقِ المقام كما هو', 'مثّل الناتج بالأجزاء'],
    visualStepsEn: ['Check that denominators match', 'Add the numerators', 'Keep the denominator', 'Model the sum with parts']
  },
  {
    unit: 4, page: 95, titleAr: 'طرح الكسور متساوية المقامات', titleEn: 'Subtracting Fractions with Like Denominators',
    focusAr: 'يطرح كسرين متساويي المقام بطرح البسطين والإبقاء على المقام، ويمكنه تمثيل ما بقي بعد إزالة جزء.',
    focusEn: 'Subtract fractions with the same denominator by subtracting the numerators and keeping the denominator; model what remains after taking away a part.',
    questionAr: 'ما ناتج ٥⁄٦ − ٢⁄٦؟', questionEn: 'What is 5/6 − 2/6?',
    optionsAr: ['٣⁄٦', '٣⁄٠', '٧⁄٦'], optionsEn: ['3/6', '3/0', '7/6'],
    visualStepsAr: ['تحقق من تساوي المقامين', 'اطرح البسطين', 'أبقِ المقام نفسه', 'مثل الأجزاء المتبقية'],
    visualStepsEn: ['Check that denominators match', 'Subtract the numerators', 'Keep the same denominator', 'Show the remaining parts']
  },

  {
    unit: 5, page: 97, titleAr: 'الطول', titleEn: 'Length',
    focusAr: 'يختار أداة ووحدة مناسبتين لقياس الطول، ويقارن الوحدات المعروفة ويقدر طول أشياء مألوفة.',
    focusEn: 'Choose a suitable tool and unit for measuring length, compare familiar units, and estimate the length of everyday objects.',
    questionAr: 'أي وحدة تناسب قياس طول قلم؟', questionEn: 'Which unit is suitable for measuring the length of a pencil?',
    optionsAr: ['السنتيمتر', 'الكيلومتر', 'اللتر'], optionsEn: ['Centimeter', 'Kilometer', 'Liter'],
    visualStepsAr: ['حدد الشيء المراد قياسه', 'اختر أداة مناسبة', 'اختر وحدة طول مناسبة', 'اقرأ القياس'],
    visualStepsEn: ['Identify what to measure', 'Choose a suitable tool', 'Choose an appropriate length unit', 'Read the measurement']
  },
  {
    unit: 5, page: 99, titleAr: 'الساعة — قياس الوقت', titleEn: 'The Clock — Measuring Time',
    focusAr: 'يقرأ الساعة الدائرية ويميز العقارب وتدرجات الساعات والدقائق، ويربط معرفة الوقت بمواعيد الأنشطة اليومية.',
    focusEn: 'Read an analog clock, distinguish its hands and hour and minute marks, and connect telling time with daily activities.',
    questionAr: 'كم دقيقة في الساعة؟', questionEn: 'How many minutes are in an hour?',
    optionsAr: ['٦٠', '٣٠', '١٠٠'], optionsEn: ['60', '30', '100'],
    visualStepsAr: ['حدد عقرب الساعات', 'حدد عقرب الدقائق', 'اقرأ موضع العقربين', 'اربط الوقت بالنشاط'],
    visualStepsEn: ['Identify the hour hand', 'Identify the minute hand', 'Read both hand positions', 'Connect the time to an activity']
  },
  {
    unit: 5, page: 104, titleAr: 'أجزاء الساعة', titleEn: 'Parts of an Hour',
    focusAr: 'يعبر عن أجزاء الساعة بالدقائق، ويتعرف أن نصف الساعة ثلاثون دقيقة والربع خمس عشرة دقيقة والثلث عشرون دقيقة.',
    focusEn: 'Express parts of an hour in minutes and learn that half an hour is 30 minutes, a quarter is 15, and a third is 20.',
    questionAr: 'كم دقيقة في ربع الساعة؟', questionEn: 'How many minutes are in a quarter of an hour?',
    optionsAr: ['١٥', '٢٠', '٣٠'], optionsEn: ['15', '20', '30'],
    visualStepsAr: ['الساعة ٦٠ دقيقة', 'اقسمها إلى أجزاء متساوية', 'حدد الجزء المطلوب', 'حوّل الجزء إلى دقائق'],
    visualStepsEn: ['An hour has 60 minutes', 'Divide it into equal parts', 'Identify the requested part', 'Convert that part to minutes']
  },

  {
    unit: 6, page: 107, titleAr: 'النقطة والقطعة المستقيمة', titleEn: 'Points and Line Segments',
    focusAr: 'يميز النقطة التي تحدد موضعًا من القطعة المستقيمة التي تصل بين نقطتين، ويرسمهما ويمثل نهايتي القطعة.',
    focusEn: 'Distinguish a point marking a position from a line segment joining two points, and draw and mark the segment’s endpoints.',
    questionAr: 'بماذا نحدد طرفي القطعة المستقيمة؟', questionEn: 'What identifies the ends of a line segment?',
    optionsAr: ['نقطتان', 'دائرة', 'منحنى مفتوح'], optionsEn: ['Two points', 'A circle', 'An open curve'],
    visualStepsAr: ['حدد النقطة الأولى', 'حدد النقطة الثانية', 'صل بين النقطتين بخط مستقيم', 'سمِّ القطعة ونهايتيها'],
    visualStepsEn: ['Mark the first point', 'Mark the second point', 'Join them with a straight line', 'Name the segment and its endpoints']
  },
  {
    unit: 6, page: 109, titleAr: 'قياس طول القطعة المستقيمة', titleEn: 'Measuring the Length of a Line Segment',
    focusAr: 'يقيس طول قطعة مستقيمة بوضع صفر المسطرة عند بدايتها، ويقرأ العلامة التي تصل إليها نهايتها.',
    focusEn: 'Measure a line segment by placing the ruler’s zero at its start and reading the mark reached by its endpoint.',
    questionAr: 'من أين نبدأ القياس بالمسطرة؟', questionEn: 'Where should measuring with a ruler begin?',
    optionsAr: ['من علامة الصفر', 'من منتصف المسطرة', 'من أي رقم'], optionsEn: ['At the zero mark', 'At the middle of the ruler', 'At any number'],
    visualStepsAr: ['ضع صفر المسطرة عند البداية', 'حاذِ حافة المسطرة مع القطعة', 'اقرأ رقم النهاية', 'اكتب القياس بوحدته'],
    visualStepsEn: ['Place zero at the start', 'Align the ruler edge with the segment', 'Read the endpoint mark', 'Write the measurement and unit']
  },
  {
    unit: 6, page: 111, titleAr: 'المثلث', titleEn: 'The Triangle',
    focusAr: 'يتعرف المثلث شكلًا مغلقًا له ثلاثة أضلاع وثلاثة رؤوس، ويميزه عن الأشكال ذات أعداد أضلاع أخرى.',
    focusEn: 'Recognize a triangle as a closed shape with three sides and three vertices, distinguishing it from shapes with other side counts.',
    questionAr: 'كم ضلعًا للمثلث؟', questionEn: 'How many sides does a triangle have?',
    optionsAr: ['٣', '٤', '٥'], optionsEn: ['3', '4', '5'],
    visualStepsAr: ['حدد الرأس الأول', 'صل إلى الرأس الثاني', 'أكمل الضلع الثالث', 'عد الأضلاع والرؤوس'],
    visualStepsEn: ['Mark the first vertex', 'Join to the second vertex', 'Complete the third side', 'Count the sides and vertices']
  },
  {
    unit: 6, page: 112, titleAr: 'المستطيل والمربع', titleEn: 'Rectangles and Squares',
    focusAr: 'يميز المستطيل ذا الأضلاع المتقابلة المتساوية والمربع ذا الأضلاع الأربعة المتساوية، ويتعرف زواياهما القائمة.',
    focusEn: 'Distinguish a rectangle with equal opposite sides from a square with four equal sides, and recognize their right angles.',
    questionAr: 'ما الشكل الذي أضلاعه الأربعة متساوية وزواياه قائمة؟', questionEn: 'Which shape has four equal sides and right angles?',
    optionsAr: ['المربع', 'المستطيل فقط', 'المثلث'], optionsEn: ['Square', 'Rectangle only', 'Triangle'],
    visualStepsAr: ['ارسم أربعة أضلاع', 'اجعل كل الزوايا قائمة', 'قارن أطوال الأضلاع', 'سمِّ الشكل'],
    visualStepsEn: ['Draw four sides', 'Make every angle a right angle', 'Compare side lengths', 'Name the shape']
  }
];

export const SUDAN_PRIMARY_MATH_G3_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_MATH_G3_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-math-g3-${order}`;
  const unit = SUDAN_PRIMARY_MATH_G3_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const visualSteps: LectureDiagramStep[] = lesson.visualStepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: lesson.visualStepsEn[stepIndex]
  }));

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `الرياضيات — الصف الثالث الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 3 Mathematics — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G3',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الثالث الابتدائي',
    gradeLevelNameEn: 'Grade 3 Primary',
    termAr: 'الرياضيات — الصف الثالث',
    termEn: 'Grade 3 Mathematics',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `فكر في مثال من حياتك يرتبط بموضوع «${lesson.titleAr}»، ثم توقع طريقة حله.`,
    warmupHookEn: `Think of an everyday example connected to “${lesson.titleEn},” then predict how you might solve it.`,
    learningOutcomesAr: [lesson.focusAr, 'يمثل الفكرة الرياضية بمثال أو رسم ويشرح خطوات الحل.'],
    learningOutcomesEn: [lesson.focusEn, 'Represent the mathematical idea with an example or drawing and explain the solution steps.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nتأمل الخطوات البصرية، ثم حل مثالًا مشابهًا وتحقق من إجابتك.`,
      contentEn: `${lesson.focusEn}\n\nStudy the visual steps, solve a similar example, and check your answer.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `تسلسل بصري: ${lesson.titleAr}`,
        titleEn: `Visual Sequence: ${lesson.titleEn}`,
        captionAr: `أربع خطوات توضح فكرة «${lesson.titleAr}».`,
        captionEn: `Four steps illustrating “${lesson.titleEn}.”`,
        diagramType: 'primary_lesson_sequence',
        visualSteps
      }
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
        explanationAr: `${lesson.focusAr} الإجابة الصحيحة: ${lesson.optionsAr[0]}.`,
        explanationEn: `${lesson.focusEn} The correct answer is ${lesson.optionsEn[0]}.`,
        difficulty: 'easy'
      }]
    }
  };
});
