import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_MATH_G4_BOOK = {
  title: 'الرياضيات — الصف الرابع الأساسي',
  edition: 'كتاب المرحلة الابتدائية',
  units: [
    { titleAr: 'مجموعة الأعداد الكلية', titleEn: 'The Set of Whole Numbers', firstPage: 1, lastPage: 19 },
    { titleAr: 'العمليات على الأعداد الكلية', titleEn: 'Operations on Whole Numbers', firstPage: 20, lastPage: 47 },
    { titleAr: 'القياس', titleEn: 'Measurement', firstPage: 48, lastPage: 54 },
    { titleAr: 'الكسور العادية', titleEn: 'Common Fractions', firstPage: 55, lastPage: 65 },
    { titleAr: 'النسبة', titleEn: 'Ratio', firstPage: 66, lastPage: 80 },
    { titleAr: 'الهندسة', titleEn: 'Geometry', firstPage: 81, lastPage: 114 }
  ]
} as const;

interface MathLesson {
  unit: number;
  page: number;
  titleAr: string;
  titleEn: string;
  focusAr: string;
  focusEn: string;
  exampleAr: string;
  exampleEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: [string, string, string];
  optionsEn: [string, string, string];
  visualStepsAr: [string, string, string, string];
  visualStepsEn: [string, string, string, string];
}

const lessons: MathLesson[] = [
  {
    unit: 1, page: 3, titleAr: 'الأعداد ضمن عشرات الألوف', titleEn: 'Numbers in the Ten-Thousands',
    focusAr: 'تتسع لوحة المنازل إلى منزلة عشرات الألوف؛ فتساوي كل منزلة عشرة أمثال المنزلة التي على يمينها. وعند تجميع عشرة آلاف تظهر منزلة جديدة.',
    focusEn: 'Extend the place-value chart to the ten-thousands place: each place is ten times the place to its right, and ten thousands form a new place.',
    exampleAr: 'في العدد ٢٧٥٣٦، قيمة الرقم ٧ هي ٧٠٠٠؛ لأنه في منزلة الألوف.',
    exampleEn: 'In 27,536, the value of 7 is 7,000 because it is in the thousands place.',
    questionAr: 'ما قيمة الرقم ٣ في العدد ٣٤٢١٥؟', questionEn: 'What is the value of 3 in 34,215?',
    optionsAr: ['٣٠٠٠٠', '٣٠٠٠', '٣٠٠'], optionsEn: ['30,000', '3,000', '300'],
    visualStepsAr: ['اكتب أرقام العدد', 'حدد منزلة كل رقم', 'صل الرقم بمنزلته', 'اكتب قيمة الرقم المطلوبة'],
    visualStepsEn: ['Write the digits', 'Identify each place', 'Match each digit to its place', 'State the requested place value']
  },
  {
    unit: 1, page: 7, titleAr: 'الأعداد ضمن مئات الألوف', titleEn: 'Numbers in the Hundred-Thousands',
    focusAr: 'تُقرأ الأعداد ذات ست خانات بتقسيمها إلى مجموعات من ثلاث خانات، ثم قراءة مجموعة الألوف ومجموعة الوحدات مع مراعاة قيمة كل منزلة.',
    focusEn: 'Read six-digit numbers by grouping digits in threes, then read the thousands group and the units group using place value.',
    exampleAr: 'يُقرأ العدد ٢١٥٧٨٣: مئتان وخمسة عشر ألفاً وسبعمئة وثلاثة وثمانون.',
    exampleEn: 'Read 215,783 as two hundred fifteen thousand, seven hundred eighty-three.',
    questionAr: 'ما قيمة الرقم ٥ في العدد ٢١٥٧٨٣؟', questionEn: 'What is the value of 5 in 215,783?',
    optionsAr: ['٥٠٠٠٠', '٥٠٠٠', '٥٠٠'], optionsEn: ['50,000', '5,000', '500'],
    visualStepsAr: ['قسّم العدد إلى مجموعتين', 'اقرأ مجموعة الألوف', 'اقرأ مجموعة الوحدات', 'اجمع القراءة في عدد واحد'],
    visualStepsEn: ['Split the number into groups', 'Read the thousands group', 'Read the units group', 'Combine the reading']
  },
  {
    unit: 1, page: 9, titleAr: 'الأعداد ضمن الملايين', titleEn: 'Numbers in the Millions',
    focusAr: 'تُقرأ الأعداد الكبيرة بتجميع الأرقام ثلاثياً من اليمين؛ وتدل المجموعة اليسرى على الملايين، تليها الألوف ثم الوحدات.',
    focusEn: 'Read large numbers by grouping digits in threes from the right: millions on the left, then thousands, then units.',
    exampleAr: 'في العدد ٥٤٣٠٧١٨، تمثل المجموعة ٥ الملايين، وتمثل ٤٣٠ الألوف، وتمثل ٧١٨ الوحدات.',
    exampleEn: 'In 5,430,718, the groups represent 5 million, 430 thousand, and 718 units.',
    questionAr: 'كم مليوناً في العدد ١٥٣١٧٢٣٠؟', questionEn: 'How many millions are in 15,317,230?',
    optionsAr: ['١٥', '١', '١٥٣'], optionsEn: ['15', '1', '153'],
    visualStepsAr: ['ابدأ من يمين العدد', 'كوّن مجموعات من ثلاث خانات', 'سمِّ مجموعة الملايين', 'اقرأ المجموعات بالترتيب'],
    visualStepsEn: ['Start at the right', 'Make groups of three digits', 'Name the millions group', 'Read the groups in order']
  },
  {
    unit: 1, page: 11, titleAr: 'مقارنة الأعداد', titleEn: 'Comparing Numbers',
    focusAr: 'قارن عدد الخانات أولاً، ثم قارن الأرقام من أكبر منزلة إلى أصغرها حتى تجد أول منزلة مختلفة؛ رقمها الأكبر يدل على العدد الأكبر.',
    focusEn: 'Compare the number of digits first, then compare from the greatest place downward. The greater digit in the first differing place identifies the greater number.',
    exampleAr: 'في مقارنة ٢٥٤٣ و٢٥٣٨، تتساوى الآلاف والمئات، و٤ عشرات أكبر من ٣ عشرات؛ لذا ٢٥٤٣ أكبر.',
    exampleEn: 'When comparing 2,543 and 2,538, thousands and hundreds match, but 4 tens exceeds 3 tens, so 2,543 is greater.',
    questionAr: 'أي العددين أكبر: ٣٨٣ أم ٣٦٥؟', questionEn: 'Which number is greater: 383 or 365?',
    optionsAr: ['٣٨٣', '٣٦٥', 'متساويان'], optionsEn: ['383', '365', 'They are equal'],
    visualStepsAr: ['قارن عدد الخانات', 'ابدأ بأكبر منزلة', 'انتقل عند تساوي الرقمين', 'ضع علامة المقارنة المناسبة'],
    visualStepsEn: ['Compare digit counts', 'Start with the greatest place', 'Move right if digits match', 'Choose the correct comparison sign']
  },
  {
    unit: 1, page: 13, titleAr: 'الأعداد الأولية', titleEn: 'Prime Numbers',
    focusAr: 'العدد الأولي أكبر من واحد ولا يقبل القسمة دون باقٍ إلا على الواحد وعلى نفسه. أما العدد الذي له قواسم أخرى فهو غير أولي.',
    focusEn: 'A prime number is greater than one and is divisible without remainder only by one and itself. A number with other divisors is composite.',
    exampleAr: 'العدد ٧ أولي؛ فقواسِمه ١ و٧ فقط، أما ٩ فغير أولي لأن ٩ = ٣ × ٣.',
    exampleEn: '7 is prime because its only divisors are 1 and 7; 9 is composite because 9 = 3 × 3.',
    questionAr: 'أي الأعداد الآتية أولي؟', questionEn: 'Which of these numbers is prime?',
    optionsAr: ['١١', '١٥', '٢١'], optionsEn: ['11', '15', '21'],
    visualStepsAr: ['استبعد العدد ١', 'اختبر القسمة على أعداد أصغر', 'سجل القواسم دون باقٍ', 'قرر أولي أم غير أولي'],
    visualStepsEn: ['Exclude 1', 'Test division by smaller numbers', 'List exact divisors', 'Decide prime or composite']
  },
  {
    unit: 1, page: 16, titleAr: 'الأعداد الزوجية والفردية', titleEn: 'Even and Odd Numbers',
    focusAr: 'العدد الزوجي يقبل القسمة على ٢ دون باقٍ، وآحاده ٠ أو ٢ أو ٤ أو ٦ أو ٨. والعدد الفردي لا يقبل القسمة على ٢ دون باقٍ.',
    focusEn: 'An even number is divisible by 2 with no remainder and ends in 0, 2, 4, 6, or 8. An odd number is not divisible by 2 evenly.',
    exampleAr: 'العدد ٣٢ زوجي لأن آحاده ٢، والعدد ٣٧ فردي لأن آحاده ٧.',
    exampleEn: '32 is even because it ends in 2; 37 is odd because it ends in 7.',
    questionAr: 'أي الأعداد الآتية فردي؟', questionEn: 'Which of these numbers is odd?',
    optionsAr: ['٢٥', '٢٤', '٣٠'], optionsEn: ['25', '24', '30'],
    visualStepsAr: ['انظر إلى رقم الآحاد', 'تحقق من كونه زوجياً', 'صنف العدد', 'تحقق بالقسمة على ٢'],
    visualStepsEn: ['Look at the ones digit', 'Check whether it is even', 'Classify the number', 'Verify by dividing by 2']
  },

  {
    unit: 2, page: 23, titleAr: 'ضرب عدد مكون من ثلاثة أرقام في عدد مكون من ثلاثة أرقام', titleEn: 'Multiplying Three-Digit Numbers',
    focusAr: 'يُضرب العدد في كل منزلة من العدد الآخر بدءاً بالآحاد، مع إزاحة نواتج العشرات والمئات، ثم تجمع النواتج الجزئية.',
    focusEn: 'Multiply by each place of the other factor, starting with ones. Shift tens and hundreds partial products, then add them.',
    exampleAr: '٢٤٣ × ٤٢١ = ٢٤٣ × (٤٠٠ + ٢٠ + ١) = ١٠٢٠٠٠ + ٤٨٦٠ + ٢٤٣ = ١٠٧١٠٣.',
    exampleEn: '243 × 421 = 243 × (400 + 20 + 1) = 102,000 + 4,860 + 243 = 107,103.',
    questionAr: 'ما ناتج ١٢٣ × ٢٠٠؟', questionEn: 'What is 123 × 200?',
    optionsAr: ['٢٤٦٠٠', '٢٤٦٠', '٢٤٦'], optionsEn: ['24,600', '2,460', '246'],
    visualStepsAr: ['رتب العددين حسب المنازل', 'اضرب في الآحاد', 'اضرب في العشرات والمئات مع الإزاحة', 'اجمع النواتج الجزئية'],
    visualStepsEn: ['Align the factors by place', 'Multiply by the ones', 'Multiply by tens and hundreds with shifts', 'Add the partial products']
  },
  {
    unit: 2, page: 25, titleAr: 'قابلية القسمة', titleEn: 'Divisibility',
    focusAr: 'يقبل عدد القسمة على عدد آخر إذا كان خارج القسمة عدداً صحيحاً بلا باقٍ؛ أما ظهور باقٍ فيعني أن القسمة غير تامة.',
    focusEn: 'A number is divisible by another when the quotient is a whole number with no remainder; a remainder means the division is not exact.',
    exampleAr: '٢٤ ÷ ٦ = ٤، لذلك ٢٤ يقبل القسمة على ٦؛ أما ٢٥ ÷ ٦ فيبقى ١.',
    exampleEn: '24 ÷ 6 = 4, so 24 is divisible by 6; 25 ÷ 6 leaves a remainder of 1.',
    questionAr: 'هل يقبل ٣٥ القسمة على ٥؟', questionEn: 'Is 35 divisible by 5?',
    optionsAr: ['نعم، ناتجه ٧', 'لا، والباقي ٥', 'لا، والباقي ٢'], optionsEn: ['Yes, the quotient is 7', 'No, remainder 5', 'No, remainder 2'],
    visualStepsAr: ['حدد المقسوم والمقسوم عليه', 'أجر القسمة', 'افحص الباقي', 'اكتب حكم القابلية'],
    visualStepsEn: ['Identify dividend and divisor', 'Divide', 'Check the remainder', 'State whether it is divisible']
  },
  {
    unit: 2, page: 28, titleAr: 'قابلية القسمة على ٢', titleEn: 'Divisibility by 2',
    focusAr: 'يكفي فحص رقم الآحاد: إذا كان ٠ أو ٢ أو ٤ أو ٦ أو ٨ فالعدد يقبل القسمة على ٢ ويكون زوجياً.',
    focusEn: 'Check only the ones digit: 0, 2, 4, 6, or 8 means the number is divisible by 2 and is even.',
    exampleAr: 'العدد ٣٦ يقبل القسمة على ٢ لأن آحاده ٦، و٣٦ ÷ ٢ = ١٨.',
    exampleEn: '36 is divisible by 2 because its ones digit is 6; 36 ÷ 2 = 18.',
    questionAr: 'أي عدد يقبل القسمة على ٢؟', questionEn: 'Which number is divisible by 2?',
    optionsAr: ['٤٨', '٤٣', '٥٥'], optionsEn: ['48', '43', '55'],
    visualStepsAr: ['حدد رقم الآحاد', 'قارنه بالأرقام الزوجية', 'قرر قابلية القسمة', 'تحقق بالقسمة'],
    visualStepsEn: ['Find the ones digit', 'Compare it with even digits', 'Decide divisibility', 'Verify with division']
  },
  {
    unit: 2, page: 30, titleAr: 'قابلية القسمة على ٣', titleEn: 'Divisibility by 3',
    focusAr: 'يقبل العدد القسمة على ٣ إذا كان مجموع أرقامه يقبل القسمة على ٣؛ ويكفي اختبار هذا المجموع بدلاً من قسمة العدد كاملاً.',
    focusEn: 'A number is divisible by 3 if the sum of its digits is divisible by 3; test the digit sum instead of dividing the whole number.',
    exampleAr: 'مجموع أرقام ٦٢٧ هو ٦ + ٢ + ٧ = ١٥، و١٥ يقبل القسمة على ٣؛ إذن ٦٢٧ يقبلها.',
    exampleEn: 'The digits of 627 sum to 6 + 2 + 7 = 15, divisible by 3, so 627 is divisible by 3.',
    questionAr: 'أي عدد يقبل القسمة على ٣؟', questionEn: 'Which number is divisible by 3?',
    optionsAr: ['١٢٣', '١٢٤', '١٢٥'], optionsEn: ['123', '124', '125'],
    visualStepsAr: ['اجمع أرقام العدد', 'اقسم المجموع على ٣', 'افحص وجود باقٍ', 'انقل الحكم إلى العدد'],
    visualStepsEn: ['Add the digits', 'Divide the sum by 3', 'Check for a remainder', 'Apply the result to the number']
  },
  {
    unit: 2, page: 32, titleAr: 'قابلية القسمة على ٥', titleEn: 'Divisibility by 5',
    focusAr: 'يقبل العدد القسمة على ٥ عندما ينتهي رقم آحاده بـ٥ أو ٠؛ وهذه القاعدة تختصر فحص الأعداد الكبيرة.',
    focusEn: 'A number is divisible by 5 when its ones digit is 5 or 0; this rule simplifies checking large numbers.',
    exampleAr: '٤٥ و٧٠ يقبلان القسمة على ٥، بينما ٤٣ لا يقبل لأن آحاده ٣.',
    exampleEn: '45 and 70 are divisible by 5, while 43 is not because it ends in 3.',
    questionAr: 'أي عدد يقبل القسمة على ٥؟', questionEn: 'Which number is divisible by 5?',
    optionsAr: ['١٢٥', '١٢٤', '١٢٦'], optionsEn: ['125', '124', '126'],
    visualStepsAr: ['افحص رقم الآحاد', 'ابحث عن ٠ أو ٥', 'قرر قابلية القسمة', 'تحقق بالقسمة عند الحاجة'],
    visualStepsEn: ['Inspect the ones digit', 'Look for 0 or 5', 'Decide divisibility', 'Verify by division if needed']
  },
  {
    unit: 2, page: 33, titleAr: 'قابلية القسمة على ١٠', titleEn: 'Divisibility by 10',
    focusAr: 'يقبل العدد القسمة على ١٠ إذا كان رقم آحاده صفراً؛ لأن العدد عندئذٍ من مضاعفات العشرة.',
    focusEn: 'A number is divisible by 10 when its ones digit is zero, because it is then a multiple of ten.',
    exampleAr: '٣٥٠ ÷ ١٠ = ٣٥، أما ٣٥٥ فلا يقبل القسمة على ١٠.',
    exampleEn: '350 ÷ 10 = 35, while 355 is not divisible by 10.',
    questionAr: 'أي عدد يقبل القسمة على ١٠؟', questionEn: 'Which number is divisible by 10?',
    optionsAr: ['٧٠٠', '٧٠٥', '٧٥٠٣'], optionsEn: ['700', '705', '7,503'],
    visualStepsAr: ['انظر إلى رقم الآحاد', 'تحقق من الصفر', 'قرر قابلية القسمة', 'اكتب الناتج عند القسمة'],
    visualStepsEn: ['Look at the ones digit', 'Check whether it is zero', 'Decide divisibility', 'Write the quotient when divided']
  },
  {
    unit: 2, page: 35, titleAr: 'تحليل العدد إلى عوامله الأولية', titleEn: 'Prime Factorization',
    focusAr: 'حلّل العدد بقسمته المتتابعة على أعداد أولية، ثم اكتب حاصل ضرب القواسم الأولية ليعبّر عن العدد الأصلي.',
    focusEn: 'Factor a number by dividing successively by primes, then write the product of the prime divisors to represent the original number.',
    exampleAr: '٦٠ = ٢ × ٢ × ٣ × ٥؛ وكل عامل في هذا التحليل عدد أولي.',
    exampleEn: '60 = 2 × 2 × 3 × 5; every factor in this product is prime.',
    questionAr: 'أي تحليل أولي يساوي ٢٤؟', questionEn: 'Which prime factorization equals 24?',
    optionsAr: ['٢ × ٢ × ٢ × ٣', '٢ × ٣ × ٥', '٣ × ٣ × ٣'], optionsEn: ['2 × 2 × 2 × 3', '2 × 3 × 5', '3 × 3 × 3'],
    visualStepsAr: ['ابدأ بالعدد المراد تحليله', 'اقسم على أصغر عامل أولي', 'كرر حتى تصبح العوامل أولية', 'اكتب حاصل ضرب العوامل'],
    visualStepsEn: ['Start with the number', 'Divide by the smallest prime factor', 'Repeat until every factor is prime', 'Write the product of the factors']
  },
  {
    unit: 2, page: 37, titleAr: 'القاسم المشترك الأكبر', titleEn: 'Greatest Common Divisor',
    focusAr: 'اكتب قواسم كل عدد، ثم اختر أكبر قاسم مشترك بينها؛ ويمكن الاستعانة بالتحليل إلى العوامل الأولية.',
    focusEn: 'List the divisors of each number and choose the greatest one they share; prime factorization can also help.',
    exampleAr: 'قواسم ١٢ هي ١، ٢، ٣، ٤، ٦، ١٢، وقواسم ١٨ تشمل ١، ٢، ٣، ٦، ٩، ١٨؛ فأكبر قاسم مشترك هو ٦.',
    exampleEn: 'The greatest common divisor of 12 and 18 is 6, the greatest divisor they share.',
    questionAr: 'ما القاسم المشترك الأكبر للعددين ١٢ و١٨؟', questionEn: 'What is the greatest common divisor of 12 and 18?',
    optionsAr: ['٦', '٣', '٩'], optionsEn: ['6', '3', '9'],
    visualStepsAr: ['اكتب قواسم العدد الأول', 'اكتب قواسم العدد الثاني', 'حدد القواسم المشتركة', 'اختر أكبر قاسم مشترك'],
    visualStepsEn: ['List the first number’s divisors', 'List the second number’s divisors', 'Identify shared divisors', 'Choose the greatest shared divisor']
  },
  {
    unit: 2, page: 40, titleAr: 'المضاعف المشترك الأصغر', titleEn: 'Least Common Multiple',
    focusAr: 'اكتب مضاعفات العددين أو حللهما إلى عوامل أولية، ثم اختر أصغر عدد موجب يكون مضاعفاً مشتركاً لهما.',
    focusEn: 'List multiples of both numbers or use prime factors, then select the smallest positive common multiple.',
    exampleAr: 'مضاعفات ٤ هي ٤، ٨، ١٢، ... ومضاعفات ٦ هي ٦، ١٢، ...؛ فالمضاعف المشترك الأصغر هو ١٢.',
    exampleEn: 'The multiples of 4 and 6 first meet at 12, so their least common multiple is 12.',
    questionAr: 'ما المضاعف المشترك الأصغر للعددين ٣ و٤؟', questionEn: 'What is the least common multiple of 3 and 4?',
    optionsAr: ['١٢', '٧', '٢٤'], optionsEn: ['12', '7', '24'],
    visualStepsAr: ['اكتب مضاعفات العدد الأول', 'اكتب مضاعفات العدد الثاني', 'ابحث عن مضاعف مشترك', 'اختر أصغر مضاعف مشترك'],
    visualStepsEn: ['List multiples of the first number', 'List multiples of the second', 'Find a common multiple', 'Choose the least common multiple']
  },
  {
    unit: 2, page: 42, titleAr: 'قسمة عدد على عدد مكون من رقمين', titleEn: 'Dividing by a Two-Digit Number',
    focusAr: 'تُجرى القسمة المطولة بتقدير عدد المجموعات، وضرب المقسوم عليه، ثم الطرح وإنزال الرقم التالي حتى ينتهي العدد.',
    focusEn: 'Use long division by estimating groups, multiplying the divisor, subtracting, and bringing down the next digit until finished.',
    exampleAr: '٦٣٩ ÷ ٣ = ٢١٣؛ ويتحقق الناتج لأن ٢١٣ × ٣ = ٦٣٩.',
    exampleEn: '639 ÷ 3 = 213; check because 213 × 3 = 639.',
    questionAr: 'ما ناتج ٩٧٦ ÷ ١٢؟', questionEn: 'What is 976 ÷ 12?',
    optionsAr: ['٨١ والباقي ٤', '٨٢ والباقي ١', '٨٠ والباقي ١٦'], optionsEn: ['81 remainder 4', '82 remainder 1', '80 remainder 16'],
    visualStepsAr: ['قدّر أول رقم في الناتج', 'اضرب ثم اطرح', 'أنزل الرقم التالي', 'تحقق بالضرب والباقي'],
    visualStepsEn: ['Estimate the first quotient digit', 'Multiply and subtract', 'Bring down the next digit', 'Check using product and remainder']
  },
  {
    unit: 2, page: 45, titleAr: 'قسمة عدد على عدد مكون من ثلاثة أرقام', titleEn: 'Dividing by a Three-Digit Number',
    focusAr: 'تتبع القسمة المطولة نفسها عند القسمة على مقسوم عليه من ثلاث خانات؛ قدّر كل منزلة في الناتج وتحقق من الباقي.',
    focusEn: 'Use the same long-division process with a three-digit divisor: estimate each quotient place and check the remainder.',
    exampleAr: '١٢٤٨ ÷ ١٢ = ١٠٤؛ لأن ١٢ × ١٠٤ = ١٢٤٨.',
    exampleEn: '1,248 ÷ 12 = 104 because 12 × 104 = 1,248.',
    questionAr: 'ما ناتج ٢٤٦٠ ÷ ١٢٣؟', questionEn: 'What is 2,460 ÷ 123?',
    optionsAr: ['٢٠', '١٢', '٢٣'], optionsEn: ['20', '12', '23'],
    visualStepsAr: ['حدد الجزء الأول المناسب', 'قدّر رقم الناتج', 'اضرب واطرح ثم أنزل', 'تحقق بضرب الناتج في المقسوم عليه'],
    visualStepsEn: ['Choose the first dividend portion', 'Estimate a quotient digit', 'Multiply, subtract, and bring down', 'Check by multiplying quotient and divisor']
  },

  {
    unit: 3, page: 49, titleAr: 'السعة', titleEn: 'Capacity',
    focusAr: 'السعة مقدار ما يتسع له الوعاء. تربط وحدات اللتر والديسيلتر والسنتيلتر والمليلتر بالعلاقات العشرية بينها.',
    focusEn: 'Capacity is how much a container holds. Connect liters, deciliters, centiliters, and milliliters using their base-ten relationships.',
    exampleAr: '١ لتر = ١٠ ديسيلترات = ١٠٠ سنتيلتر = ١٠٠٠ مليلتر؛ لذا ٣ لترات = ٣٠ ديسيلتراً.',
    exampleEn: '1 liter = 10 deciliters = 100 centiliters = 1,000 milliliters, so 3 liters = 30 deciliters.',
    questionAr: 'كم مليلترًا في ٢ لتر؟', questionEn: 'How many milliliters are in 2 liters?',
    optionsAr: ['٢٠٠٠', '٢٠٠', '٢٠'], optionsEn: ['2,000', '200', '20'],
    visualStepsAr: ['حدد وحدة السعة المعطاة', 'اختر علاقة التحويل', 'اضرب أو اقسم', 'اكتب الكمية بالوحدة المطلوبة'],
    visualStepsEn: ['Identify the given capacity unit', 'Choose the conversion relationship', 'Multiply or divide', 'State the amount in the requested unit']
  },
  {
    unit: 3, page: 53, titleAr: 'المكاييل', titleEn: 'Traditional Measuring Units',
    focusAr: 'يربط الكيلة والربع والملوة: الكيلة تساوي أربعة أرباع، والربع يساوي ملوتين؛ وتُحوّل المقادير بالضرب أو القسمة.',
    focusEn: 'Relate the keila, rubu, and malwa: one keila equals four rubu, and one rubu equals two malwa. Convert by multiplying or dividing.',
    exampleAr: '٧ كيلات تساوي ٢٨ ملوة، لأن الكيلة الواحدة تساوي ٤ ملوات.',
    exampleEn: '7 keila equal 28 malwa because each keila equals 4 malwa.',
    questionAr: 'كم ربعاً في ٥ كيلات؟', questionEn: 'How many rubu are in 5 keila?',
    optionsAr: ['٢٠', '١٠', '٢٥'], optionsEn: ['20', '10', '25'],
    visualStepsAr: ['حدد وحدة البداية والنهاية', 'اختر العلاقة بين الوحدتين', 'اضرب أو اقسم الكمية', 'تحقق بالتحويل العكسي'],
    visualStepsEn: ['Identify starting and target units', 'Choose their conversion relationship', 'Multiply or divide the amount', 'Check with the reverse conversion']
  },

  {
    unit: 4, page: 56, titleAr: 'مراجعة', titleEn: 'Review',
    focusAr: 'يمثل الكسر جزءاً من وحدة أو مجموعة متساوية الأجزاء؛ البسط يعد الأجزاء المأخوذة والمقام يبين عدد الأجزاء المتساوية.',
    focusEn: 'A fraction represents part of a unit or equal-part group: the numerator counts selected parts and the denominator gives the total equal parts.',
    exampleAr: 'في الكسر ٣⁄٥، يدل ٣ على الأجزاء المأخوذة و٥ على أجزاء الوحدة كلها.',
    exampleEn: 'In 3/5, 3 counts the selected parts and 5 gives all equal parts in the whole.',
    questionAr: 'ما البسط في الكسر ٢⁄٧؟', questionEn: 'What is the numerator of 2/7?',
    optionsAr: ['٢', '٧', '٥'], optionsEn: ['2', '7', '5'],
    visualStepsAr: ['حدد الوحدة الكاملة', 'قسّمها إلى أجزاء متساوية', 'عد الأجزاء المأخوذة', 'اكتب البسط والمقام'],
    visualStepsEn: ['Identify the whole', 'Divide it into equal parts', 'Count the selected parts', 'Write numerator and denominator']
  },
  {
    unit: 4, page: 58, titleAr: 'تمثيل الكسور على الخط العددي', titleEn: 'Representing Fractions on a Number Line',
    focusAr: 'لتمثيل كسر بين عددين صحيحين، قسّم المسافة إلى عدد أجزاء يساوي المقام، ثم تحرك بعدد من الأجزاء يساوي البسط.',
    focusEn: 'To plot a fraction between whole numbers, divide the interval into as many parts as the denominator and move forward by the numerator’s parts.',
    exampleAr: 'لتمثيل ٣⁄٤ بين ٠ و١، قسّم المسافة إلى أربعة أجزاء متساوية وحدد العلامة الثالثة.',
    exampleEn: 'To plot 3/4 between 0 and 1, divide the interval into four equal parts and mark the third.',
    questionAr: 'إلى كم جزءاً متساوياً نقسم الفترة لتمثيل ٢⁄٥؟', questionEn: 'Into how many equal parts should the interval be divided to plot 2/5?',
    optionsAr: ['٥', '٢', '٧'], optionsEn: ['5', '2', '7'],
    visualStepsAr: ['حدد بداية الفترة ونهايتها', 'اقرأ مقام الكسر', 'قسّم الفترة بالتساوي', 'تحرك بعدد البسط من العلامات'],
    visualStepsEn: ['Mark the interval endpoints', 'Read the denominator', 'Divide the interval equally', 'Count numerator steps from zero']
  },
  {
    unit: 4, page: 60, titleAr: 'جمع الكسور', titleEn: 'Adding Fractions',
    focusAr: 'عند تساوي المقامين، اجمع البسطين واترك المقام كما هو. وعند اختلافهما، وحّد المقامين بكسور مكافئة قبل الجمع.',
    focusEn: 'With equal denominators, add the numerators and keep the denominator. With unlike denominators, make equivalent fractions first.',
    exampleAr: '٢⁄٨ + ٣⁄٨ = ٥⁄٨؛ فالمقام المشترك يبقى ٨.',
    exampleEn: '2/8 + 3/8 = 5/8; the common denominator remains 8.',
    questionAr: 'ما ناتج ١⁄٤ + ٢⁄٤؟', questionEn: 'What is 1/4 + 2/4?',
    optionsAr: ['٣⁄٤', '٣⁄٨', '٢⁄٤'], optionsEn: ['3/4', '3/8', '2/4'],
    visualStepsAr: ['افحص المقامين', 'وحّد المقامين إن اختلفا', 'اجمع البسطين', 'بسّط الناتج إن أمكن'],
    visualStepsEn: ['Check the denominators', 'Make them equal if needed', 'Add the numerators', 'Simplify the result if possible']
  },
  {
    unit: 4, page: 63, titleAr: 'طرح الكسور', titleEn: 'Subtracting Fractions',
    focusAr: 'في الطرح ذي المقامين المتساويين اطرح البسطين واحتفظ بالمقام؛ وإذا اختلف المقامان، وحّدهما أولاً بكسور مكافئة.',
    focusEn: 'For subtraction with equal denominators, subtract the numerators and keep the denominator. If denominators differ, make equivalent fractions first.',
    exampleAr: '٧⁄٨ − ٤⁄٨ = ٣⁄٨؛ ونطرح الأجزاء لا المقام.',
    exampleEn: '7/8 − 4/8 = 3/8; subtract the parts, not the denominator.',
    questionAr: 'ما ناتج ٥⁄٦ − ٢⁄٦؟', questionEn: 'What is 5/6 − 2/6?',
    optionsAr: ['٣⁄٦', '٣⁄٠', '٧⁄٦'], optionsEn: ['3/6', '3/0', '7/6'],
    visualStepsAr: ['افحص المقامين', 'وحّد المقامين إن اختلفا', 'اطرح البسطين', 'تحقق من معقولية الناتج'],
    visualStepsEn: ['Check the denominators', 'Make them equal if needed', 'Subtract the numerators', 'Check that the result is reasonable']
  },

  {
    unit: 5, page: 67, titleAr: 'مفهوم النسبة', titleEn: 'Understanding Ratio',
    focusAr: 'تقارن النسبة بين كميتين من النوع نفسه، وتكتب على صورة كسر أو بعبارة «إلى». ويعتمد ترتيب الحدين على ترتيب الكميتين في السؤال.',
    focusEn: 'A ratio compares two quantities of the same kind and can be written as a fraction or with “to.” Keep the quantities in the order asked.',
    exampleAr: 'إذا كان في مجموعة ٨ مثلثات و٤ دوائر، فنسبة المثلثات إلى الدوائر ٨⁄٤.',
    exampleEn: 'If a group has 8 triangles and 4 circles, the ratio of triangles to circles is 8/4.',
    questionAr: 'في مجموعة ٣ تفاحات و٥ برتقالات، ما نسبة التفاح إلى البرتقال؟', questionEn: 'With 3 apples and 5 oranges, what is the ratio of apples to oranges?',
    optionsAr: ['٣ إلى ٥', '٥ إلى ٣', '٣ إلى ٨'], optionsEn: ['3 to 5', '5 to 3', '3 to 8'],
    visualStepsAr: ['حدد الكميتين المقارنتين', 'تأكد من وحدة النوع', 'اكتب العدد الأول ثم الثاني', 'اقرأ النسبة بالترتيب'],
    visualStepsEn: ['Identify the two quantities', 'Check they are the same kind', 'Write the first then the second', 'Read the ratio in order']
  },
  {
    unit: 5, page: 72, titleAr: 'طريقة كتابة النسبة', titleEn: 'Writing a Ratio',
    focusAr: 'يمكن كتابة النسبة بصور متعددة متكافئة: ككسر، أو باستخدام النقطتين، أو بلفظ «إلى». ويساعد الاختصار إلى أبسط صورة على المقارنة.',
    focusEn: 'Write a ratio as a fraction, with a colon, or using “to.” Simplifying to lowest terms makes comparison easier.',
    exampleAr: 'النسبة ٦ إلى ٩ تكتب ٦⁄٩ أو ٦:٩، وتختصر بقسمة الحدين على ٣ إلى ٢:٣.',
    exampleEn: '6 to 9 is 6/9 or 6:9; divide both terms by 3 to simplify it to 2:3.',
    questionAr: 'كيف تكتب النسبة ٤ إلى ٧ باستخدام النقطتين؟', questionEn: 'How do you write 4 to 7 using a colon?',
    optionsAr: ['٤:٧', '٧:٤', '٤:١١'], optionsEn: ['4:7', '7:4', '4:11'],
    visualStepsAr: ['حدد الحد الأول', 'حدد الحد الثاني', 'ضع النقطتين بينهما', 'اختصر الحدين معاً إن أمكن'],
    visualStepsEn: ['Identify the first term', 'Identify the second term', 'Place a colon between them', 'Reduce both terms together if possible']
  },
  {
    unit: 5, page: 75, titleAr: 'مقدم النسبة وتالي النسبة', titleEn: 'Antecedent and Consequent',
    focusAr: 'في النسبة المكتوبة بالترتيب، يسمى العدد الأول مقدم النسبة أو حدها الأول، ويسمى العدد الثاني تالي النسبة أو حدها الثاني.',
    focusEn: 'In an ordered ratio, the first number is the antecedent (first term) and the second is the consequent (second term).',
    exampleAr: 'في النسبة ٣:٥، مقدم النسبة ٣ وتاليها ٥.',
    exampleEn: 'In the ratio 3:5, the antecedent is 3 and the consequent is 5.',
    questionAr: 'ما تالي النسبة ٧:٩؟', questionEn: 'What is the consequent of 7:9?',
    optionsAr: ['٩', '٧', '١٦'], optionsEn: ['9', '7', '16'],
    visualStepsAr: ['اقرأ النسبة من اليسار', 'حدد الحد الأول', 'حدد الحد الثاني', 'سمِّ المقدم والتالي'],
    visualStepsEn: ['Read the ratio from left to right', 'Identify the first term', 'Identify the second term', 'Name the antecedent and consequent']
  },
  {
    unit: 5, page: 77, titleAr: 'مسائل في النسبة', titleEn: 'Ratio Problems',
    focusAr: 'استخدم الكميات المعطاة بالترتيب المطلوب، ثم اكتب النسبة واختصرها. عند تغير كميتين في المسألة، احسب القيم الجديدة قبل تكوين النسبة.',
    focusEn: 'Use the quantities in the requested order, write and simplify the ratio. If amounts change, calculate the new values before comparing.',
    exampleAr: 'إذا كان مع سعاد ٨٠ جنيهاً ومع سلوى ٥٠ جنيهاً، فنسبة ما مع سعاد إلى ما مع سلوى ٨٠:٥٠ = ٨:٥.',
    exampleEn: 'If Souad has 80 pounds and Salwa has 50, the ratio 80:50 simplifies to 8:5.',
    questionAr: 'لدى علي ٢٠ جنيهاً ولدى محمد ٣٠ جنيهاً. ما نسبة ما لدى علي إلى ما لدى محمد؟', questionEn: 'Ali has 20 pounds and Mohamed has 30. What is Ali’s amount to Mohamed’s?',
    optionsAr: ['٢:٣', '٣:٢', '٢:٥'], optionsEn: ['2:3', '3:2', '2:5'],
    visualStepsAr: ['استخرج الكميتين من المسألة', 'رتبهما حسب المطلوب', 'اكتب النسبة واختصرها', 'فسر النتيجة في السياق'],
    visualStepsEn: ['Extract both quantities', 'Order them as requested', 'Write and simplify the ratio', 'Interpret it in context']
  },

  {
    unit: 6, page: 82, titleAr: 'مراجعة', titleEn: 'Review',
    focusAr: 'راجع خصائص المثلث والمربع والمستطيل، وميّز الأشكال بعدد أضلاعها وقِس أطوال الأضلاع بالمسطرة.',
    focusEn: 'Review triangles, squares, and rectangles; distinguish them by their sides and measure side lengths with a ruler.',
    exampleAr: 'للمثلث ثلاثة أضلاع، وللشكل الرباعي أربعة أضلاع.',
    exampleEn: 'A triangle has three sides; a quadrilateral has four.',
    questionAr: 'كم ضلعاً للمربع؟', questionEn: 'How many sides does a square have?',
    optionsAr: ['٤', '٣', '٥'], optionsEn: ['4', '3', '5'],
    visualStepsAr: ['حدد رؤوس الشكل', 'تتبع أضلاعه', 'عد الأضلاع والزوايا', 'سمِّ الشكل'],
    visualStepsEn: ['Mark the vertices', 'Trace the sides', 'Count sides and angles', 'Name the shape']
  },
  {
    unit: 6, page: 83, titleAr: 'الشعاع والمستقيم', titleEn: 'Rays and Lines',
    focusAr: 'القطعة المستقيمة محددة بنقطتي نهاية، والشعاع له نقطة بداية ويمتد في اتجاه واحد، أما المستقيم فيمتد في اتجاهين دون نهاية.',
    focusEn: 'A segment has two endpoints, a ray has one endpoint and extends in one direction, and a line extends endlessly in both directions.',
    exampleAr: 'الشعاع أ ب يبدأ من أ ويمر بالنقطة ب، ولا تكون له نقطة نهاية في جهة امتداده.',
    exampleEn: 'Ray AB starts at A, passes through B, and has no endpoint in the direction it extends.',
    questionAr: 'أي شكل له نقطة بداية واحدة ويمتد في اتجاه واحد؟', questionEn: 'Which figure has one endpoint and extends in one direction?',
    optionsAr: ['الشعاع', 'المستقيم', 'القطعة المستقيمة'], optionsEn: ['Ray', 'Line', 'Line segment'],
    visualStepsAr: ['حدد نقاط النهاية', 'ابحث عن نقطة البداية', 'تتبع اتجاه الامتداد', 'سمِّ الشعاع أو المستقيم'],
    visualStepsEn: ['Identify endpoints', 'Look for a starting point', 'Trace the direction of extension', 'Name the ray or line']
  },
  {
    unit: 6, page: 86, titleAr: 'الزاوية', titleEn: 'Angles',
    focusAr: 'تتكون الزاوية من شعاعين لهما نقطة بداية مشتركة؛ وتسمى هذه النقطة رأس الزاوية، والشعاعان ضلعيها.',
    focusEn: 'An angle is formed by two rays with a common endpoint; that point is the vertex and the rays are its sides.',
    exampleAr: 'في الزاوية أ ب ج، تكون ب هي الرأس ويكون الشعاعان ب أ وب ج ضلعيها.',
    exampleEn: 'In angle ABC, B is the vertex and rays BA and BC are its sides.',
    questionAr: 'ما اسم النقطة المشتركة بين ضلعي الزاوية؟', questionEn: 'What is the common point of an angle’s sides called?',
    optionsAr: ['الرأس', 'القطر', 'المحيط'], optionsEn: ['Vertex', 'Diameter', 'Circumference'],
    visualStepsAr: ['حدد الشعاع الأول', 'حدد الشعاع الثاني', 'عيّن نقطة البداية المشتركة', 'سمِّ الرأس والضلعين'],
    visualStepsEn: ['Identify the first ray', 'Identify the second ray', 'Mark their common endpoint', 'Name the vertex and sides']
  },
  {
    unit: 6, page: 88, titleAr: 'قياس الزاوية ورسمها', titleEn: 'Measuring and Drawing Angles',
    focusAr: 'تقاس الزاوية بالدرجات باستخدام المنقلة؛ يوضع مركزها عند الرأس وخط الصفر على أحد الضلعين، ثم تقرأ الدرجة عند الضلع الآخر.',
    focusEn: 'Measure an angle in degrees with a protractor: place its center at the vertex and zero line along one side, then read the other side.',
    exampleAr: 'إذا وقع الضلع الثاني على علامة ٥٥°، فقياس الزاوية ٥٥ درجة.',
    exampleEn: 'If the second side aligns with 55°, the angle measures 55 degrees.',
    questionAr: 'ما الأداة المناسبة لقياس زاوية؟', questionEn: 'Which tool is used to measure an angle?',
    optionsAr: ['المنقلة', 'المسطرة', 'الميزان'], optionsEn: ['Protractor', 'Ruler', 'Scale'],
    visualStepsAr: ['ضع مركز المنقلة عند الرأس', 'طابق خط الصفر مع ضلع', 'اقرأ التدريج عند الضلع الآخر', 'سجل القياس بالدرجات'],
    visualStepsEn: ['Place the protractor center at the vertex', 'Align zero with one side', 'Read the scale at the other side', 'Record the measure in degrees']
  },
  {
    unit: 6, page: 92, titleAr: 'أنواع الزوايا', titleEn: 'Types of Angles',
    focusAr: 'الزاوية القائمة قياسها ٩٠°، والحادة أقل من ٩٠°، والمنفرجة أكبر من ٩٠° وأقل من ١٨٠°، والمستقيمة ١٨٠°.',
    focusEn: 'A right angle measures 90°, an acute angle is less than 90°, an obtuse angle is between 90° and 180°, and a straight angle is 180°.',
    exampleAr: 'الزاوية التي قياسها ٧٠° حادة؛ لأنها أصغر من ٩٠°.',
    exampleEn: 'A 70° angle is acute because it is less than 90°.',
    questionAr: 'ما نوع الزاوية التي قياسها ١٢٠°؟', questionEn: 'What type of angle measures 120°?',
    optionsAr: ['منفرجة', 'حادة', 'قائمة'], optionsEn: ['Obtuse', 'Acute', 'Right'],
    visualStepsAr: ['قِس الزاوية أو قدّرها', 'قارنها بـ٩٠°', 'قارنها بـ١٨٠°', 'سمِّ نوع الزاوية'],
    visualStepsEn: ['Measure or estimate the angle', 'Compare it with 90°', 'Compare it with 180°', 'Name its type']
  },
  {
    unit: 6, page: 96, titleAr: 'المستقيمات المتعامدة', titleEn: 'Perpendicular Lines',
    focusAr: 'يتعامد مستقيمان إذا تقاطعا مكونين زوايا قائمة؛ أي إن قياس كل زاوية من الزوايا الأربع عند التقاطع ٩٠°.',
    focusEn: 'Two lines are perpendicular when they intersect to form right angles; each of the four angles measures 90°.',
    exampleAr: 'إذا شكل مستقيمان متقاطعان أربع زوايا قياس كل منها ٩٠° فهما متعامدان.',
    exampleEn: 'If intersecting lines form four 90° angles, they are perpendicular.',
    questionAr: 'ما قياس كل زاوية عند تقاطع مستقيمين متعامدين؟', questionEn: 'What is each angle at the intersection of perpendicular lines?',
    optionsAr: ['٩٠°', '١٨٠°', '٤٥°'], optionsEn: ['90°', '180°', '45°'],
    visualStepsAr: ['حدد نقطة التقاطع', 'افحص الزاوية بين الخطين', 'تحقق من كونها قائمة', 'قرر هل الخطان متعامدان'],
    visualStepsEn: ['Find the intersection', 'Inspect the angle between lines', 'Check for a right angle', 'Decide whether the lines are perpendicular']
  },
  {
    unit: 6, page: 98, titleAr: 'المستقيمات المتوازية', titleEn: 'Parallel Lines',
    focusAr: 'المستقيمان المتوازيان لا يتقاطعان مهما امتدا، وتبقى المسافة بينهما ثابتة. يرمز إلى توازي أ ب و ج د بالرمز أ ب // ج د.',
    focusEn: 'Parallel lines never intersect, however far extended, and remain the same distance apart. The symbol // denotes parallel lines.',
    exampleAr: 'ضلعان متقابلان في المستطيل متوازيان ولا يلتقيان.',
    exampleEn: 'Opposite sides of a rectangle are parallel and do not meet.',
    questionAr: 'أي وصف ينطبق على مستقيمين متوازيين؟', questionEn: 'Which description fits parallel lines?',
    optionsAr: ['لا يتقاطعان', 'يتقاطعان بزاوية قائمة', 'يلتقيان عند نقطة'], optionsEn: ['They do not intersect', 'They meet at a right angle', 'They meet at one point'],
    visualStepsAr: ['ارسم المستقيم الأول', 'حدد اتجاهاً ثابتاً له', 'ارسم الثاني بالاتجاه نفسه', 'تحقق من ثبات المسافة وعدم التقاطع'],
    visualStepsEn: ['Draw the first line', 'Note its direction', 'Draw the second in the same direction', 'Check equal spacing and no intersection']
  },
  {
    unit: 6, page: 100, titleAr: 'رسم المثلث', titleEn: 'Drawing a Triangle',
    focusAr: 'ارسم أحد أضلاع المثلث بطوله المحدد، وأنشئ الزاوية المطلوبة عند أحد طرفيه، ثم حدد الرأس الثالث ووصل الأضلاع.',
    focusEn: 'Draw one triangle side to the given length, construct the required angle at an endpoint, mark the third vertex, and join the sides.',
    exampleAr: 'مثلث قائم ضلعاه ٣ سم و٤ سم يكتمل بوصل نهايتي الضلعين بعد إنشاء الزاوية القائمة.',
    exampleEn: 'A right triangle with sides 3 cm and 4 cm is completed by joining the ends after constructing the right angle.',
    questionAr: 'كم ضلعاً يجب رسمه لإكمال المثلث؟', questionEn: 'How many sides are needed to complete a triangle?',
    optionsAr: ['٣', '٢', '٤'], optionsEn: ['3', '2', '4'],
    visualStepsAr: ['ارسم الضلع المعطى', 'أنشئ الزاوية المطلوبة', 'حدد الرأس الثالث', 'صل الرؤوس الثلاثة'],
    visualStepsEn: ['Draw the given side', 'Construct the required angle', 'Mark the third vertex', 'Join all three vertices']
  },
  {
    unit: 6, page: 102, titleAr: 'رسم متوازي الأضلاع', titleEn: 'Drawing a Parallelogram',
    focusAr: 'ارسم ضلعاً وحدد زاوية وضلعاً مجاوراً، ثم ارسم من النقطتين المقابلتين مستقيمين متوازيين لإكمال الشكل الرباعي.',
    focusEn: 'Draw one side and set an angle and adjacent side, then draw parallel lines through opposite points to complete the quadrilateral.',
    exampleAr: 'في متوازي الأضلاع كل ضلعين متقابلين متوازيان ومتساويان.',
    exampleEn: 'In a parallelogram, opposite sides are parallel and equal.',
    questionAr: 'كم زوجاً من الأضلاع المتوازية في متوازي الأضلاع؟', questionEn: 'How many pairs of parallel sides does a parallelogram have?',
    optionsAr: ['زوجان', 'زوج واحد', 'ثلاثة أزواج'], optionsEn: ['Two pairs', 'One pair', 'Three pairs'],
    visualStepsAr: ['ارسم ضلعاً بطوله المحدد', 'أنشئ الضلع المجاور والزاوية', 'ارسم خطاً موازياً للضلع الأول', 'أكمل الضلع الأخير وتحقق'],
    visualStepsEn: ['Draw the given side', 'Construct the adjacent side and angle', 'Draw a line parallel to the first side', 'Complete and check the final side']
  },
  {
    unit: 6, page: 105, titleAr: 'رسم المستطيل', titleEn: 'Drawing a Rectangle',
    focusAr: 'ارسم طول المستطيل وعرضه باستخدام المسطرة، وأنشئ أربع زوايا قائمة؛ ثم تحقق من تساوي كل ضلعين متقابلين.',
    focusEn: 'Draw the rectangle’s length and width with a ruler and construct four right angles; then check that opposite sides are equal.',
    exampleAr: 'مستطيل طوله ٥ سم وعرضه ٤ سم له ضلعان بطول ٥ سم وضلعان بطول ٤ سم.',
    exampleEn: 'A rectangle 5 cm by 4 cm has two 5 cm sides and two 4 cm sides.',
    questionAr: 'كم زاوية قائمة للمستطيل؟', questionEn: 'How many right angles does a rectangle have?',
    optionsAr: ['٤', '٢', '٣'], optionsEn: ['4', '2', '3'],
    visualStepsAr: ['ارسم الضلع الأول', 'أنشئ زاويتين قائمتين', 'حدد الطول والعرض', 'أغلق الشكل وتحقق من الأضلاع'],
    visualStepsEn: ['Draw the first side', 'Construct two right angles', 'Set the length and width', 'Close the shape and check the sides']
  },
  {
    unit: 6, page: 107, titleAr: 'رسم المربع', titleEn: 'Drawing a Square',
    focusAr: 'يرسم المربع بإنشاء أربع زوايا قائمة وأربعة أضلاع متساوية؛ ويمكن استخدام خطوات رسم المستطيل مع جعل الطول والعرض متساويين.',
    focusEn: 'Draw a square with four right angles and four equal sides; the rectangle construction works when length and width are equal.',
    exampleAr: 'إذا كان طول ضلع المربع ٥ سم، فكل واحد من أضلاعه الأربعة طوله ٥ سم.',
    exampleEn: 'If a square’s side is 5 cm, each of its four sides is 5 cm.',
    questionAr: 'كم سنتيمتراً طول محيط مربع طول ضلعه ٣ سم؟', questionEn: 'What is the perimeter of a square with 3 cm sides?',
    optionsAr: ['١٢ سم', '٩ سم', '٦ سم'], optionsEn: ['12 cm', '9 cm', '6 cm'],
    visualStepsAr: ['ارسم ضلعاً بطول معلوم', 'أنشئ زاوية قائمة عند طرفيه', 'حدد ضلعين مساويين له', 'أغلق المربع وتحقق من تساوي الأضلاع'],
    visualStepsEn: ['Draw a side of known length', 'Construct right angles at its ends', 'Set two more equal sides', 'Close the square and check all sides']
  },
  {
    unit: 6, page: 109, titleAr: 'الدائرة', titleEn: 'The Circle',
    focusAr: 'مركز الدائرة نقطة تبعد المسافة نفسها عن جميع نقاط المحيط، ونصف القطر يصل المركز بنقطة على الدائرة، والقطر وتر يمر بالمركز.',
    focusEn: 'The center is equidistant from all points on the circle. A radius joins the center to the circle; a diameter is a chord through the center.',
    exampleAr: 'إذا كان نصف قطر دائرة ٤ سم، فإن قطرها ٨ سم؛ فالقطر يساوي ضعفي نصف القطر.',
    exampleEn: 'If a circle’s radius is 4 cm, its diameter is 8 cm—twice the radius.',
    questionAr: 'ما طول القطر إذا كان نصف القطر ٥ سم؟', questionEn: 'What is the diameter when the radius is 5 cm?',
    optionsAr: ['١٠ سم', '٥ سم', '١٥ سم'], optionsEn: ['10 cm', '5 cm', '15 cm'],
    visualStepsAr: ['حدد مركز الدائرة', 'صل المركز بالمحيط لنصف القطر', 'مد الخط عبر المركز للقطر', 'قارن القطر بنصف القطر'],
    visualStepsEn: ['Mark the circle’s center', 'Join center to circumference for a radius', 'Extend through the center for a diameter', 'Compare diameter and radius']
  },
  {
    unit: 6, page: 111, titleAr: 'رسم الدائرة', titleEn: 'Drawing a Circle',
    focusAr: 'لرسم دائرة، ثبت سن الفرجار عند المركز وافتحه بمقدار نصف القطر، ثم أدره دورة كاملة مع ثبات الفتحة.',
    focusEn: 'To draw a circle, place the compass point at the center, open it to the radius, and rotate it fully without changing the opening.',
    exampleAr: 'لدائرة نصف قطرها ٣ سم، افتح الفرجار ٣ سم بالمسطرة قبل الدوران حول المركز.',
    exampleEn: 'For a circle with a 3 cm radius, set the compass opening to 3 cm before rotating around the center.',
    questionAr: 'ما الأداة التي ترسم دائرة منتظمة؟', questionEn: 'Which tool draws a regular circle?',
    optionsAr: ['الفرجار', 'المنقلة', 'المسطرة'], optionsEn: ['Compass', 'Protractor', 'Ruler'],
    visualStepsAr: ['حدد مركز الدائرة', 'اضبط فتحة الفرجار على نصف القطر', 'ثبت السن في المركز', 'أدر الفرجار دورة كاملة'],
    visualStepsEn: ['Mark the circle’s center', 'Set the compass to the radius', 'Place its point at the center', 'Rotate the compass once around']
  }
];

export const SUDAN_PRIMARY_MATH_G4_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_MATH_G4_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-math-g4-${order}`;
  const unit = SUDAN_PRIMARY_MATH_G4_BOOK.units[lesson.unit - 1];
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
    subtitleAr: `الرياضيات — الصف الرابع الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 4 Mathematics — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G4',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الرابع الابتدائي',
    gradeLevelNameEn: 'Grade 4 Primary',
    termAr: 'الرياضيات — الصف الرابع',
    termEn: 'Grade 4 Mathematics',
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
      contentAr: `${lesson.focusAr}\n\nمثال محلول: ${lesson.exampleAr}\n\nاستخدم الخطوات البصرية، ثم حل مسألة مشابهة وتحقق من إجابتك.`,
      contentEn: `${lesson.focusEn}\n\nWorked example: ${lesson.exampleEn}\n\nFollow the visual steps, solve a similar problem, and check your answer.`,
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
