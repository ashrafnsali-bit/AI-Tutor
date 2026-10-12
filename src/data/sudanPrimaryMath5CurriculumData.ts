import type { Lecture, LectureDiagramStep } from '../types';

export const SUDAN_PRIMARY_MATH_G5_BOOK = {
  title: 'الرياضيات — الصف الخامس الأساسي',
  edition: 'كتاب المرحلة الابتدائية',
  units: [
    { titleAr: 'مجموعة الأعداد الطبيعية والعمليات عليها', titleEn: 'Natural Numbers and Operations', firstPage: 1, lastPage: 14 },
    { titleAr: 'الكسور والعمليات عليها', titleEn: 'Fractions and Operations', firstPage: 15, lastPage: 39 },
    { titleAr: 'الكسور العشرية والعمليات عليها', titleEn: 'Decimal Fractions and Operations', firstPage: 40, lastPage: 85 },
    { titleAr: 'النسبة والتناسب', titleEn: 'Ratio and Proportion', firstPage: 86, lastPage: 106 },
    { titleAr: 'حساب محيط الأشكال الهندسية المستوية', titleEn: 'Perimeters of Plane Figures', firstPage: 107, lastPage: 121 },
    { titleAr: 'الزوايا والمثلثات', titleEn: 'Angles and Triangles', firstPage: 122, lastPage: 151 }
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
}

const lessons: MathLesson[] = [
  {
    unit: 1, page: 2, titleAr: 'مجموعة الأعداد الطبيعية', titleEn: 'The Set of Natural Numbers',
    focusAr: 'تتكون الأعداد الطبيعية من الأعداد التي نستخدمها في العد. رتّبها على خط الأعداد؛ فالعدد الواقع إلى اليمين أكبر.',
    focusEn: 'Natural numbers are the numbers used for counting. Place them on a number line; the number farther right is greater.',
    exampleAr: 'على خط الأعداد يأتي ٢٦٥ بعد ٢٦٤، ولذلك ٢٦٥ أكبر من ٢٦٤ بواحد.',
    exampleEn: 'On a number line, 265 comes just after 264, so it is one greater than 264.',
    questionAr: 'ما العدد الذي يأتي مباشرة بعد ٤٩٩؟', questionEn: 'Which number comes immediately after 499?',
    optionsAr: ['٥٠٠', '٤٩٨', '٥٠٩'], optionsEn: ['500', '498', '509']
  },
  {
    unit: 1, page: 5, titleAr: 'قابلية القسمة على ٩', titleEn: 'Divisibility by 9',
    focusAr: 'يقبل العدد القسمة على ٩ إذا كان مجموع أرقامه يقبل القسمة على ٩.',
    focusEn: 'A number is divisible by 9 when the sum of its digits is divisible by 9.',
    exampleAr: 'في ٥١٣، مجموع الأرقام ٥ + ١ + ٣ = ٩؛ إذن ٥١٣ يقبل القسمة على ٩.',
    exampleEn: 'For 513, the digit sum is 5 + 1 + 3 = 9, so 513 is divisible by 9.',
    questionAr: 'أي عدد يقبل القسمة على ٩؟', questionEn: 'Which number is divisible by 9?',
    optionsAr: ['٥١٣', '٥١٤', '٥٢٣'], optionsEn: ['513', '514', '523']
  },
  {
    unit: 1, page: 7, titleAr: 'قابلية القسمة على ٤', titleEn: 'Divisibility by 4',
    focusAr: 'افحص آخر رقمين: يقبل العدد القسمة على ٤ إذا كان العدد المكوّن منهما من مضاعفات ٤.',
    focusEn: 'Check the last two digits: the number is divisible by 4 if those digits form a multiple of 4.',
    exampleAr: 'آخر رقمي ١٢٤ هما ٢٤، و٢٤ من مضاعفات ٤؛ لذلك ١٢٤ يقبل القسمة على ٤.',
    exampleEn: 'The last two digits of 124 are 24, a multiple of 4, so 124 is divisible by 4.',
    questionAr: 'أي عدد يقبل القسمة على ٤؟', questionEn: 'Which number is divisible by 4?',
    optionsAr: ['٣١٦', '٣١٨', '٣٢٢'], optionsEn: ['316', '318', '322']
  },
  {
    unit: 1, page: 8, titleAr: 'قابلية القسمة على ٨', titleEn: 'Divisibility by 8',
    focusAr: 'افحص آخر ثلاثة أرقام؛ إذا كان عددها يقبل القسمة على ٨ فالعدد كله يقبلها.',
    focusEn: 'Check the last three digits; if they form a number divisible by 8, the whole number is divisible by 8.',
    exampleAr: '١٠٢٤ يقبل القسمة على ٨ لأن ١٠٢٤ ÷ ٨ = ١٢٨ دون باقٍ.',
    exampleEn: '1,024 is divisible by 8 because 1,024 ÷ 8 = 128 with no remainder.',
    questionAr: 'أي عدد يقبل القسمة على ٨؟', questionEn: 'Which number is divisible by 8?',
    optionsAr: ['٣١٢', '٣١٤', '٣١٨'], optionsEn: ['312', '314', '318']
  },
  {
    unit: 1, page: 9, titleAr: 'قابلية القسمة على ٦', titleEn: 'Divisibility by 6',
    focusAr: 'يقبل العدد القسمة على ٦ إذا قبل القسمة على ٢ وعلى ٣ معاً.',
    focusEn: 'A number is divisible by 6 when it is divisible by both 2 and 3.',
    exampleAr: '٤٢ عدد زوجي ومجموع أرقامه ٦؛ لذا يقبل القسمة على ٢ و٣، ومن ثم على ٦.',
    exampleEn: '42 is even and its digit sum is 6; it is divisible by both 2 and 3, and therefore by 6.',
    questionAr: 'أي عدد يقبل القسمة على ٦؟', questionEn: 'Which number is divisible by 6?',
    optionsAr: ['٥٤', '٥٥', '٥٧'], optionsEn: ['54', '55', '57']
  },
  {
    unit: 1, page: 11, titleAr: 'مربع العدد والجذر التربيعي لمربع كامل', titleEn: 'Squares and Square Roots of Perfect Squares',
    focusAr: 'مربع العدد هو حاصل ضربه في نفسه. والجذر التربيعي للمربع الكامل هو العدد الذي ضُرب في نفسه.',
    focusEn: 'A number squared is the number multiplied by itself. The square root of a perfect square is the number that was multiplied by itself.',
    exampleAr: '٨ × ٨ = ٦٤، لذلك ٦٤ مربع كامل وجذره التربيعي ٨.',
    exampleEn: '8 × 8 = 64, so 64 is a perfect square and its square root is 8.',
    questionAr: 'ما الجذر التربيعي لـ ٨١؟', questionEn: 'What is the square root of 81?',
    optionsAr: ['٩', '٨', '٧'], optionsEn: ['9', '8', '7']
  },
  {
    unit: 2, page: 16, titleAr: 'الكسور المركبة', titleEn: 'Mixed Numbers',
    focusAr: 'يتكون العدد الكسري من عدد صحيح وكسر اعتيادي. مثّله بأجزاء كاملة ثم الجزء المتبقي.',
    focusEn: 'A mixed number contains a whole number and a common fraction. Represent its whole parts and the remaining fraction.',
    exampleAr: '٢ ١⁄٣ تعني وحدتين كاملتين وثلث وحدة.',
    exampleEn: '2 1/3 means two whole units and one third of another.',
    questionAr: 'ما الكسر غير العادي المكافئ لـ ٢ ١⁄٣؟', questionEn: 'Which improper fraction equals 2 1/3?',
    optionsAr: ['٧⁄٣', '٥⁄٣', '٦⁄٣'], optionsEn: ['7/3', '5/3', '6/3']
  },
  {
    unit: 2, page: 20, titleAr: 'تحويل الكسر غير العادي إلى كسر مركب', titleEn: 'Converting an Improper Fraction to a Mixed Number',
    focusAr: 'اقسم البسط على المقام؛ الناتج الصحيح هو الجزء الكلي والباقي يصبح بسط الكسر.',
    focusEn: 'Divide the numerator by the denominator: the quotient is the whole part and the remainder becomes the new numerator.',
    exampleAr: '١١⁄٤ = ٢ ٣⁄٤، لأن ١١ ÷ ٤ = ٢ والباقي ٣.',
    exampleEn: '11/4 = 2 3/4 because 11 ÷ 4 gives quotient 2 and remainder 3.',
    questionAr: 'حوّل ١٤⁄٥ إلى عدد كسري.', questionEn: 'Convert 14/5 to a mixed number.',
    optionsAr: ['٢ ٤⁄٥', '٢ ٣⁄٥', '٣ ٤⁄٥'], optionsEn: ['2 4/5', '2 3/5', '3 4/5']
  },
  {
    unit: 2, page: 23, titleAr: 'ضرب الكسور بعدد صحيح', titleEn: 'Multiplying Fractions by a Whole Number',
    focusAr: 'اضرب البسط في العدد الصحيح، وأبقِ المقام كما هو، ثم اختصر إن أمكن.',
    focusEn: 'Multiply the numerator by the whole number, keep the denominator, and simplify if possible.',
    exampleAr: '٤ × ٣⁄٥ = ١٢⁄٥ = ٢ ٢⁄٥.',
    exampleEn: '4 × 3/5 = 12/5 = 2 2/5.',
    questionAr: 'ما ناتج ٣ × ٢⁄٧؟', questionEn: 'What is 3 × 2/7?',
    optionsAr: ['٦⁄٧', '٥⁄٧', '٦⁄٢١'], optionsEn: ['6/7', '5/7', '6/21']
  },
  {
    unit: 2, page: 25, titleAr: 'ضرب كسر في كسر اعتيادي', titleEn: 'Multiplying One Common Fraction by Another',
    focusAr: 'اضرب البسطين معاً والمقامين معاً، ثم اختصر الناتج.',
    focusEn: 'Multiply the numerators together and the denominators together, then simplify the product.',
    exampleAr: '٢⁄٣ × ٣⁄٤ = ٦⁄١٢ = ١⁄٢.',
    exampleEn: '2/3 × 3/4 = 6/12 = 1/2.',
    questionAr: 'ما ناتج ٣⁄٥ × ١⁄٢؟', questionEn: 'What is 3/5 × 1/2?',
    optionsAr: ['٣⁄١٠', '٤⁄٧', '٣⁄٧'], optionsEn: ['3/10', '4/7', '3/7']
  },
  {
    unit: 2, page: 27, titleAr: 'ضرب أكثر من كسرين اعتياديين', titleEn: 'Multiplying More Than Two Common Fractions',
    focusAr: 'اضرب الكسور بالتتابع، واختصر العوامل المشتركة قبل الضرب لتبسيط الحساب.',
    focusEn: 'Multiply the fractions in sequence; cancel common factors before multiplying to keep the arithmetic simple.',
    exampleAr: '١⁄٢ × ٢⁄٣ × ٣⁄٤ = ١⁄٤ بعد اختصار العوامل المشتركة.',
    exampleEn: '1/2 × 2/3 × 3/4 = 1/4 after cancelling common factors.',
    questionAr: 'ما ناتج ١⁄٢ × ٢⁄٥ × ٥⁄٦؟', questionEn: 'What is 1/2 × 2/5 × 5/6?',
    optionsAr: ['١⁄٦', '١⁄٥', '٢⁄٦'], optionsEn: ['1/6', '1/5', '2/6']
  },
  {
    unit: 2, page: 28, titleAr: 'ضرب الكسور', titleEn: 'Multiplication of Fractions',
    focusAr: 'عند ضرب كسرين لا يلزم توحيد المقامين؛ اضرب البسطين والمقامين ثم اختصر.',
    focusEn: 'When multiplying fractions, do not find a common denominator; multiply numerators and denominators, then simplify.',
    exampleAr: '٣⁄٨ × ٤⁄٩ = ١٢⁄٧٢ = ١⁄٦.',
    exampleEn: '3/8 × 4/9 = 12/72 = 1/6.',
    questionAr: 'ما ناتج ٢⁄٣ × ٣⁄٥؟', questionEn: 'What is 2/3 × 3/5?',
    optionsAr: ['٢⁄٥', '٥⁄٨', '٦⁄٨'], optionsEn: ['2/5', '5/8', '6/8']
  },
  {
    unit: 2, page: 30, titleAr: 'مقلوب الكسر', titleEn: 'The Reciprocal of a Fraction',
    focusAr: 'كوّن مقلوب كسر غير صفري بتبديل البسط والمقام؛ حاصل ضرب الكسر ومقلوبه يساوي واحداً.',
    focusEn: 'Find the reciprocal of a nonzero fraction by switching numerator and denominator; their product is one.',
    exampleAr: 'مقلوب ٥⁄٧ هو ٧⁄٥، و٥⁄٧ × ٧⁄٥ = ١.',
    exampleEn: 'The reciprocal of 5/7 is 7/5, and 5/7 × 7/5 = 1.',
    questionAr: 'ما مقلوب ٣⁄٨؟', questionEn: 'What is the reciprocal of 3/8?',
    optionsAr: ['٨⁄٣', '٣⁄٨', '٥⁄٨'], optionsEn: ['8/3', '3/8', '5/8']
  },
  {
    unit: 2, page: 32, titleAr: 'قسمة عدد صحيح على كسر', titleEn: 'Dividing a Whole Number by a Fraction',
    focusAr: 'اقسم على كسر بضرب العدد في مقلوب ذلك الكسر.',
    focusEn: 'To divide by a fraction, multiply by that fraction’s reciprocal.',
    exampleAr: '٣ ÷ ٣⁄٤ = ٣ × ٤⁄٣ = ٤.',
    exampleEn: '3 ÷ 3/4 = 3 × 4/3 = 4.',
    questionAr: 'ما ناتج ٢ ÷ ١⁄٢؟', questionEn: 'What is 2 ÷ 1/2?',
    optionsAr: ['٤', '١', '٣'], optionsEn: ['4', '1', '3']
  },
  {
    unit: 2, page: 33, titleAr: 'قسمة كسر على عدد صحيح', titleEn: 'Dividing a Fraction by a Whole Number',
    focusAr: 'اكتب العدد الصحيح على صورة كسر مقامه ١، ثم اضرب في مقلوبه واختصر.',
    focusEn: 'Write the whole number as a fraction over 1, then multiply by its reciprocal and simplify.',
    exampleAr: '٣⁄٥ ÷ ٣ = ٣⁄٥ × ١⁄٣ = ١⁄٥.',
    exampleEn: '3/5 ÷ 3 = 3/5 × 1/3 = 1/5.',
    questionAr: 'ما ناتج ٤⁄٧ ÷ ٢؟', questionEn: 'What is 4/7 ÷ 2?',
    optionsAr: ['٢⁄٧', '٤⁄٩', '٦⁄٧'], optionsEn: ['2/7', '4/9', '6/7']
  },
  {
    unit: 2, page: 35, titleAr: 'قسمة كسر اعتيادي على كسر اعتيادي', titleEn: 'Dividing a Common Fraction by a Common Fraction',
    focusAr: 'حوّل القسمة إلى ضرب، واقلب الكسر الثاني فقط، ثم اختصر.',
    focusEn: 'Change division to multiplication, invert only the second fraction, then simplify.',
    exampleAr: '٢⁄٣ ÷ ٤⁄٥ = ٢⁄٣ × ٥⁄٤ = ٥⁄٦.',
    exampleEn: '2/3 ÷ 4/5 = 2/3 × 5/4 = 5/6.',
    questionAr: 'ما ناتج ٣⁄٤ ÷ ١⁄٢؟', questionEn: 'What is 3/4 ÷ 1/2?',
    optionsAr: ['٣⁄٢', '٣⁄٨', '٢⁄٣'], optionsEn: ['3/2', '3/8', '2/3']
  },
  {
    unit: 2, page: 37, titleAr: 'قسمة الكسور', titleEn: 'Division of Fractions',
    focusAr: 'للقسمة بين الكسور، احتفظ بالكسر الأول واضرب في مقلوب الكسر الثاني، ثم تحقق بالضرب.',
    focusEn: 'For division of fractions, keep the first fraction and multiply by the second fraction’s reciprocal; verify by multiplication.',
    exampleAr: '٥⁄٦ ÷ ٢⁄٣ = ٥⁄٦ × ٣⁄٢ = ٥⁄٤.',
    exampleEn: '5/6 ÷ 2/3 = 5/6 × 3/2 = 5/4.',
    questionAr: 'ما ناتج ٤⁄٥ ÷ ٢⁄٥؟', questionEn: 'What is 4/5 ÷ 2/5?',
    optionsAr: ['٢', '٢⁄٢٥', '٦⁄٥'], optionsEn: ['2', '2/25', '6/5']
  },
  {
    unit: 3, page: 41, titleAr: 'مفهوم الكسور العشرية', titleEn: 'The Concept of Decimal Fractions',
    focusAr: 'يمثل الكسر العشري أجزاء من عشرة أو مئة أو ألف، وتحدد المنازل بعد الفاصلة مقدار الجزء.',
    focusEn: 'A decimal fraction represents tenths, hundredths, or thousandths; places after the decimal point show each part’s value.',
    exampleAr: '٠٫٤ تعني أربعة أعشار، أي ٤⁄١٠.',
    exampleEn: '0.4 means four tenths, or 4/10.',
    questionAr: 'أي كسر اعتيادي يساوي ٠٫٧؟', questionEn: 'Which common fraction equals 0.7?',
    optionsAr: ['٧⁄١٠', '٧⁄١٠٠', '١⁄٧'], optionsEn: ['7/10', '7/100', '1/7']
  },
  {
    unit: 3, page: 45, titleAr: 'المنازل العشرية والقيمة المنزلية للأرقام', titleEn: 'Decimal Places and Digit Place Value',
    focusAr: 'تأتي الأعشار ثم الأجزاء من مئة ثم الأجزاء من ألف يمين الفاصلة؛ قيمة الرقم تتحدد بمنزلته.',
    focusEn: 'Tenths, hundredths, then thousandths lie to the right of the decimal point; each digit’s value depends on its place.',
    exampleAr: 'في ٢٫٣٥، الرقم ٣ في منزلة الأعشار وقيمته ٠٫٣.',
    exampleEn: 'In 2.35, the 3 is in the tenths place and has value 0.3.',
    questionAr: 'ما القيمة المنزلية للرقم ٦ في ٤٫٦٢؟', questionEn: 'What is the place value of 6 in 4.62?',
    optionsAr: ['٠٫٦', '٠٫٠٦', '٦'], optionsEn: ['0.6', '0.06', '6']
  },
  {
    unit: 3, page: 49, titleAr: 'مقارنة الكسور العشرية', titleEn: 'Comparing Decimal Fractions',
    focusAr: 'وازن المنازل بإضافة أصفار عند الحاجة، ثم قارن من اليسار إلى اليمين.',
    focusEn: 'Make place values line up by adding zeros when needed, then compare from left to right.',
    exampleAr: '٠٫٧٠ أكبر من ٠٫٦٥؛ لأن ٧ أعشار أكبر من ٦ أعشار.',
    exampleEn: '0.70 is greater than 0.65 because 7 tenths is greater than 6 tenths.',
    questionAr: 'أي العددين أكبر: ٠٫٨ أم ٠٫٧٩؟', questionEn: 'Which is greater: 0.8 or 0.79?',
    optionsAr: ['٠٫٨', '٠٫٧٩', 'متساويان'], optionsEn: ['0.8', '0.79', 'They are equal']
  },
  {
    unit: 3, page: 51, titleAr: 'جمع الكسور العشرية', titleEn: 'Adding Decimal Fractions',
    focusAr: 'رتّب الأعداد بحيث تصطف الفواصل، ثم اجمع المنازل المتناظرة وضع الفاصلة في الناتج.',
    focusEn: 'Align the decimal points, add matching place values, and keep the decimal point aligned in the sum.',
    exampleAr: '١٫٢ + ٠٫٣٥ = ١٫٢٠ + ٠٫٣٥ = ١٫٥٥.',
    exampleEn: '1.2 + 0.35 = 1.20 + 0.35 = 1.55.',
    questionAr: 'ما ناتج ٢٫٤ + ٠٫٣٥؟', questionEn: 'What is 2.4 + 0.35?',
    optionsAr: ['٢٫٧٥', '٢٫٣٥', '٥٫٩'], optionsEn: ['2.75', '2.35', '5.9']
  },
  {
    unit: 3, page: 54, titleAr: 'طرح الكسور العشرية', titleEn: 'Subtracting Decimal Fractions',
    focusAr: 'اصطف الفواصل، وأكمل المنازل بأصفار إذا لزم، ثم اطرح كما في الأعداد الكلية.',
    focusEn: 'Align decimal points, add placeholder zeros if needed, and subtract as with whole numbers.',
    exampleAr: '٢٫٤٠ − ٠٫٧٥ = ١٫٦٥.',
    exampleEn: '2.40 − 0.75 = 1.65.',
    questionAr: 'ما ناتج ٣٫٥ − ١٫٢٥؟', questionEn: 'What is 3.5 − 1.25?',
    optionsAr: ['٢٫٢٥', '٢٫٧٥', '١٫٢٥'], optionsEn: ['2.25', '2.75', '1.25']
  },
  {
    unit: 3, page: 56, titleAr: 'التقريب', titleEn: 'Rounding',
    focusAr: 'حدد المنزلة المطلوبة وانظر إلى الرقم الذي يليها: ٥ فأكثر ترفعها واحداً، وأقل من ٥ تبقيها.',
    focusEn: 'Choose the target place and inspect the next digit: 5 or more rounds up; less than 5 leaves it unchanged.',
    exampleAr: 'بتقريب ٣٫٧٦ إلى أقرب عُشر نحصل على ٣٫٨.',
    exampleEn: 'Rounding 3.76 to the nearest tenth gives 3.8.',
    questionAr: 'قرّب ٤٫٢٤ إلى أقرب عُشر.', questionEn: 'Round 4.24 to the nearest tenth.',
    optionsAr: ['٤٫٢', '٤٫٣', '٤'], optionsEn: ['4.2', '4.3', '4']
  },
  {
    unit: 3, page: 58, titleAr: 'تحويل الكسر العادي إلى كسر عشري', titleEn: 'Converting a Common Fraction to a Decimal',
    focusAr: 'اقسم البسط على المقام، أو اكتب كسراً مكافئاً مقامه ١٠ أو ١٠٠ أو ١٠٠٠.',
    focusEn: 'Divide the numerator by the denominator, or make an equivalent fraction with denominator 10, 100, or 1,000.',
    exampleAr: '١⁄٤ = ٢٥⁄١٠٠ = ٠٫٢٥.',
    exampleEn: '1/4 = 25/100 = 0.25.',
    questionAr: 'ما الصورة العشرية للكسر ٣⁄٥؟', questionEn: 'What is the decimal form of 3/5?',
    optionsAr: ['٠٫٦', '٠٫٣', '٠٫٥'], optionsEn: ['0.6', '0.3', '0.5']
  },
  {
    unit: 3, page: 61, titleAr: 'تحويل الكسر العشري إلى كسر عادي', titleEn: 'Converting a Decimal to a Common Fraction',
    focusAr: 'اكتب الأرقام بعد الفاصلة بسطاً، واجعل المقام ١٠ أو ١٠٠ أو ١٠٠٠ وفق عدد المنازل، ثم اختصر.',
    focusEn: 'Write the digits after the decimal as the numerator and use 10, 100, or 1,000 according to the number of places; then simplify.',
    exampleAr: '٠٫٦ = ٦⁄١٠ = ٣⁄٥.',
    exampleEn: '0.6 = 6/10 = 3/5.',
    questionAr: 'ما الكسر الاعتيادي المكافئ لـ ٠٫٢٥؟', questionEn: 'Which common fraction is equivalent to 0.25?',
    optionsAr: ['١⁄٤', '١⁄٢٥', '٢⁄٥'], optionsEn: ['1/4', '1/25', '2/5']
  },
  {
    unit: 3, page: 63, titleAr: 'ضرب الكسور العشرية في ١٠ و١٠٠ و١٠٠٠', titleEn: 'Multiplying Decimals by 10, 100, and 1,000',
    focusAr: 'عند الضرب في ١٠ أو ١٠٠ أو ١٠٠٠، حرّك الفاصلة يميناً بعدد الأصفار.',
    focusEn: 'When multiplying by 10, 100, or 1,000, move the decimal point right by the number of zeros.',
    exampleAr: '٣٫٤٧ × ١٠٠ = ٣٤٧.',
    exampleEn: '3.47 × 100 = 347.',
    questionAr: 'ما ناتج ٢٫٦ × ١٠؟', questionEn: 'What is 2.6 × 10?',
    optionsAr: ['٢٦', '٠٫٢٦', '٢٦٠'], optionsEn: ['26', '0.26', '260']
  },
  {
    unit: 3, page: 66, titleAr: 'ضرب الكسور العشرية في عدد صحيح', titleEn: 'Multiplying a Decimal by a Whole Number',
    focusAr: 'اضرب كما لو كانت الأعداد كلية، ثم ضع الفاصلة بحيث يبقى في الناتج عدد المنازل العشرية نفسه.',
    focusEn: 'Multiply as if the numbers were whole, then place the decimal point so the product has the same decimal places as the decimal factor.',
    exampleAr: '٢٫٤ × ٣ = ٧٫٢.',
    exampleEn: '2.4 × 3 = 7.2.',
    questionAr: 'ما ناتج ١٫٢٥ × ٤؟', questionEn: 'What is 1.25 × 4?',
    optionsAr: ['٥', '٠٫٥', '٥٠'], optionsEn: ['5', '0.5', '50']
  },
  {
    unit: 3, page: 68, titleAr: 'ضرب كسر عشري في كسر عشري', titleEn: 'Multiplying One Decimal by Another',
    focusAr: 'اضرب العددين دون الفواصل، ثم ضع في الناتج مجموع المنازل العشرية في العاملين.',
    focusEn: 'Multiply the digits without decimal points, then give the product the combined number of decimal places in both factors.',
    exampleAr: '٠٫٤ × ٠٫٣ = ٠٫١٢؛ فهناك منزلتان عشريتان في العاملين معاً.',
    exampleEn: '0.4 × 0.3 = 0.12; together the factors have two decimal places.',
    questionAr: 'ما ناتج ٠٫٢ × ٠٫٥؟', questionEn: 'What is 0.2 × 0.5?',
    optionsAr: ['٠٫١', '١', '٠٫٠١'], optionsEn: ['0.1', '1', '0.01']
  },
  {
    unit: 3, page: 71, titleAr: 'قسمة الكسور العشرية على ١٠ و١٠٠ و١٠٠٠', titleEn: 'Dividing Decimals by 10, 100, and 1,000',
    focusAr: 'عند القسمة على ١٠ أو ١٠٠ أو ١٠٠٠، حرّك الفاصلة يساراً بعدد الأصفار.',
    focusEn: 'When dividing by 10, 100, or 1,000, move the decimal point left by the number of zeros.',
    exampleAr: '٣٫٧٥ ÷ ١٠٠ = ٠٫٠٣٧٥.',
    exampleEn: '3.75 ÷ 100 = 0.0375.',
    questionAr: 'ما ناتج ٤٫٨ ÷ ١٠؟', questionEn: 'What is 4.8 ÷ 10?',
    optionsAr: ['٠٫٤٨', '٤٨', '٠٫٠٤٨'], optionsEn: ['0.48', '48', '0.048']
  },
  {
    unit: 3, page: 74, titleAr: 'قسمة كسر عشري على عدد صحيح', titleEn: 'Dividing a Decimal by a Whole Number',
    focusAr: 'اقسم كالأعداد المعتادة، وضع الفاصلة في الناتج فوق فاصلة المقسوم.',
    focusEn: 'Divide as usual and place the quotient’s decimal point directly above the dividend’s decimal point.',
    exampleAr: '٦٫٤ ÷ ٢ = ٣٫٢.',
    exampleEn: '6.4 ÷ 2 = 3.2.',
    questionAr: 'ما ناتج ٨٫٤ ÷ ٤؟', questionEn: 'What is 8.4 ÷ 4?',
    optionsAr: ['٢٫١', '٢٫٤', '٢١'], optionsEn: ['2.1', '2.4', '21']
  },
  {
    unit: 3, page: 77, titleAr: 'قسمة عدد صحيح على كسر عشري', titleEn: 'Dividing a Whole Number by a Decimal',
    focusAr: 'حوّل المقسوم عليه إلى عدد صحيح بتحريك فاصلته، وحرّك فاصلة المقسوم بالمقدار نفسه ثم اقسم.',
    focusEn: 'Make the divisor a whole number by shifting its decimal point, shift the dividend equally, then divide.',
    exampleAr: '١٢ ÷ ٠٫٤ = ١٢٠ ÷ ٤ = ٣٠.',
    exampleEn: '12 ÷ 0.4 = 120 ÷ 4 = 30.',
    questionAr: 'ما ناتج ٦ ÷ ٠٫٢؟', questionEn: 'What is 6 ÷ 0.2?',
    optionsAr: ['٣٠', '٣', '١٢'], optionsEn: ['30', '3', '12']
  },
  {
    unit: 3, page: 79, titleAr: 'قسمة كسر عشري على كسر عشري', titleEn: 'Dividing One Decimal by Another',
    focusAr: 'حرّك فاصلة المقسوم عليه حتى يصبح صحيحاً، وحرّك فاصلة المقسوم بالمقدار نفسه، ثم اقسم.',
    focusEn: 'Shift the divisor’s decimal point until it is a whole number; shift the dividend equally, then divide.',
    exampleAr: '٤٫٢ ÷ ٠٫٧ = ٤٢ ÷ ٧ = ٦.',
    exampleEn: '4.2 ÷ 0.7 = 42 ÷ 7 = 6.',
    questionAr: 'ما ناتج ٣٫٦ ÷ ٠٫٦؟', questionEn: 'What is 3.6 ÷ 0.6?',
    optionsAr: ['٦', '٠٫٦', '٦٠'], optionsEn: ['6', '0.6', '60']
  },
  {
    unit: 3, page: 81, titleAr: 'إيجاد العدد المفقود', titleEn: 'Finding the Missing Number',
    focusAr: 'اعزل العدد المجهول بالعملية العكسية، ثم عوّض بالناتج للتحقق من صحة المعادلة.',
    focusEn: 'Isolate the unknown with the inverse operation, then substitute the result to check the equation.',
    exampleAr: 'إذا كان ١٫٥ × س = ٦، فإن س = ٦ ÷ ١٫٥ = ٤.',
    exampleEn: 'If 1.5 × n = 6, then n = 6 ÷ 1.5 = 4.',
    questionAr: 'ما العدد المفقود: ٠٫٨ × □ = ٤؟', questionEn: 'What is the missing number: 0.8 × □ = 4?',
    optionsAr: ['٥', '٣٫٢', '٠٫٥'], optionsEn: ['5', '3.2', '0.5']
  },
  {
    unit: 4, page: 87, titleAr: 'النسبة', titleEn: 'Ratio',
    focusAr: 'تقارن النسبة بين كميتين بالترتيب نفسه. وحّد وحدتيهما قبل كتابة النسبة أو تبسيطها.',
    focusEn: 'A ratio compares two quantities in the stated order. Convert them to the same unit before writing or simplifying the ratio.',
    exampleAr: 'النسبة ٢ إلى ٣ تكتب ٢ : ٣، وتكافئ ٤ : ٦.',
    exampleEn: 'The ratio 2 to 3 is written 2:3 and is equivalent to 4:6.',
    questionAr: 'أي نسبة تكافئ ٢ : ٣؟', questionEn: 'Which ratio is equivalent to 2:3?',
    optionsAr: ['٤ : ٦', '٤ : ٥', '٣ : ٤'], optionsEn: ['4:6', '4:5', '3:4']
  },
  {
    unit: 4, page: 90, titleAr: 'خواص النسبة', titleEn: 'Properties of Ratios',
    focusAr: 'تبقى النسبة مكافئة إذا ضُرب حدّاها أو قُسما على العدد نفسه غير الصفري.',
    focusEn: 'A ratio stays equivalent when both terms are multiplied or divided by the same nonzero number.',
    exampleAr: 'بضرب حدّي ٣ : ٥ في ٢ نحصل على النسبة المكافئة ٦ : ١٠.',
    exampleEn: 'Multiplying both terms of 3:5 by 2 gives the equivalent ratio 6:10.',
    questionAr: 'ما النسبة المكافئة لـ ٤ : ٧ بعد ضرب الحدين في ٣؟', questionEn: 'What ratio is equivalent to 4:7 after multiplying both terms by 3?',
    optionsAr: ['١٢ : ٢١', '٧ : ١٢', '١٢ : ١٠'], optionsEn: ['12:21', '7:12', '12:10']
  },
  {
    unit: 4, page: 94, titleAr: 'التناسب', titleEn: 'Proportion',
    focusAr: 'التناسب مساواة بين نسبتين. استخدم الضرب التبادلي لإيجاد الحد المجهول، ثم تحقق من المساواة.',
    focusEn: 'A proportion is an equality of two ratios. Use cross multiplication to find an unknown term, then check the equality.',
    exampleAr: '٣⁄٤ = س⁄١٢؛ بالضرب التبادلي ٤س = ٣٦، إذن س = ٩.',
    exampleEn: '3/4 = n/12; cross multiplication gives 4n = 36, so n = 9.',
    questionAr: 'إذا كان ٢⁄٥ = س⁄٢٠، فما قيمة س؟', questionEn: 'If 2/5 = n/20, what is n?',
    optionsAr: ['٨', '١٠', '٤'], optionsEn: ['8', '10', '4']
  },
  {
    unit: 4, page: 98, titleAr: 'مسائل لفظية على التناسب', titleEn: 'Word Problems Involving Proportion',
    focusAr: 'حدد الكميتين المتناسبتين، واكتب النسب بترتيب ووحدات متماثلة، ثم أوجد المجهول.',
    focusEn: 'Identify the proportional quantities, write ratios in matching order and units, then solve for the unknown.',
    exampleAr: 'إذا كلفت ٥ كغم ٢٠ جنيهاً، فكلفة ٨ كغم هي ٢٠ × ٨ ÷ ٥ = ٣٢ جنيهاً.',
    exampleEn: 'If 5 kg costs 20 pounds, 8 kg costs 20 × 8 ÷ 5 = 32 pounds.',
    questionAr: 'إذا كان ثمن ٣ دفاتر ١٥ جنيهاً، فما ثمن ٦ دفاتر؟', questionEn: 'If 3 notebooks cost 15 pounds, how much do 6 cost?',
    optionsAr: ['٣٠ جنيهاً', '١٨ جنيهاً', '٤٥ جنيهاً'], optionsEn: ['30 pounds', '18 pounds', '45 pounds']
  },
  {
    unit: 4, page: 101, titleAr: 'مقياس الرسم', titleEn: 'Scale Drawing',
    focusAr: 'يمثل مقياس الرسم نسبة المسافة على الرسم إلى المسافة الحقيقية؛ وحّد الوحدات قبل التحويل.',
    focusEn: 'A scale compares drawing distance with real distance; convert to matching units before calculating.',
    exampleAr: 'إذا كان ١ سم يمثل ٥ كم، فإن ٣ سم على الرسم تمثل ١٥ كم.',
    exampleEn: 'If 1 cm represents 5 km, then 3 cm on the drawing represents 15 km.',
    questionAr: 'يمثل ١ سم مسافة ٤ كم؛ فكم تمثل ٥ سم؟', questionEn: 'If 1 cm represents 4 km, what distance does 5 cm represent?',
    optionsAr: ['٢٠ كم', '٩ كم', '١ كم'], optionsEn: ['20 km', '9 km', '1 km']
  },
  {
    unit: 4, page: 104, titleAr: 'التقسيم التناسبي', titleEn: 'Proportional Division',
    focusAr: 'اجمع أجزاء النسبة، واقسم الكمية الكلية على مجموعها، ثم اضرب قيمة الجزء في كل حد.',
    focusEn: 'Add the ratio parts, divide the total by their sum, then multiply the value of one part by each term.',
    exampleAr: 'تقسيم ٦٠ بنسبة ٢ : ٣ يعطي ٢٤ و٣٦؛ لأن قيمة الجزء ٦٠ ÷ ٥ = ١٢.',
    exampleEn: 'Dividing 60 in the ratio 2:3 gives 24 and 36; one part is 60 ÷ 5 = 12.',
    questionAr: 'قُسّمت ٤٠ بنسبة ١ : ٣؛ فما حصة الجزء الأكبر؟', questionEn: '40 is divided in the ratio 1:3; what is the larger share?',
    optionsAr: ['٣٠', '١٠', '٢٠'], optionsEn: ['30', '10', '20']
  },
  {
    unit: 5, page: 108, titleAr: 'مفهوم المحيط', titleEn: 'The Concept of Perimeter',
    focusAr: 'محيط الشكل هو طول حدوده كاملة؛ اجمع أطوال الأضلاع المحيطة به واكتب الوحدة.',
    focusEn: 'A figure’s perimeter is the full length around its boundary; add the side lengths and include the unit.',
    exampleAr: 'محيط شكل أضلاعه ٢ و٣ و٤ سم هو ٢ + ٣ + ٤ = ٩ سم.',
    exampleEn: 'A figure with sides 2, 3, and 4 cm has perimeter 2 + 3 + 4 = 9 cm.',
    questionAr: 'ما محيط شكل أضلاعه ٤ و٥ و٦ سم؟', questionEn: 'What is the perimeter of a figure with sides 4, 5, and 6 cm?',
    optionsAr: ['١٥ سم', '١١ سم', '١٢٠ سم'], optionsEn: ['15 cm', '11 cm', '120 cm']
  },
  {
    unit: 5, page: 110, titleAr: 'محيط المثلث', titleEn: 'Perimeter of a Triangle',
    focusAr: 'اجمع أطوال الأضلاع الثلاثة لإيجاد محيط المثلث.',
    focusEn: 'Add the three side lengths to find a triangle’s perimeter.',
    exampleAr: 'مثلث أضلاعه ٣ و٤ و٥ سم محيطه ٣ + ٤ + ٥ = ١٢ سم.',
    exampleEn: 'A triangle with sides 3, 4, and 5 cm has perimeter 3 + 4 + 5 = 12 cm.',
    questionAr: 'ما محيط مثلث أطوال أضلاعه ٦ و٧ و٨ سم؟', questionEn: 'What is the perimeter of a triangle with sides 6, 7, and 8 cm?',
    optionsAr: ['٢١ سم', '١٥ سم', '٣٣٦ سم'], optionsEn: ['21 cm', '15 cm', '336 cm']
  },
  {
    unit: 5, page: 112, titleAr: 'محيط المربع', titleEn: 'Perimeter of a Square',
    focusAr: 'لأن أضلاع المربع متساوية، اضرب طول الضلع في ٤ لإيجاد المحيط.',
    focusEn: 'A square has four equal sides, so multiply its side length by 4 to find the perimeter.',
    exampleAr: 'محيط مربع طول ضلعه ٦ سم هو ٤ × ٦ = ٢٤ سم.',
    exampleEn: 'A square with side 6 cm has perimeter 4 × 6 = 24 cm.',
    questionAr: 'ما محيط مربع طول ضلعه ٩ سم؟', questionEn: 'What is the perimeter of a square with side 9 cm?',
    optionsAr: ['٣٦ سم', '١٨ سم', '٨١ سم'], optionsEn: ['36 cm', '18 cm', '81 cm']
  },
  {
    unit: 5, page: 115, titleAr: 'محيط المستطيل', titleEn: 'Perimeter of a Rectangle',
    focusAr: 'للمستطيل ضلعان من كل طول؛ اجمع الطول والعرض ثم اضرب المجموع في ٢.',
    focusEn: 'A rectangle has two sides of each dimension; add its length and width, then multiply the sum by 2.',
    exampleAr: 'مستطيل طوله ٥ سم وعرضه ٣ سم محيطه ٢ × (٥ + ٣) = ١٦ سم.',
    exampleEn: 'A rectangle 5 cm long and 3 cm wide has perimeter 2 × (5 + 3) = 16 cm.',
    questionAr: 'ما محيط مستطيل طوله ٨ سم وعرضه ٤ سم؟', questionEn: 'What is the perimeter of a rectangle 8 cm long and 4 cm wide?',
    optionsAr: ['٢٤ سم', '١٢ سم', '٣٢ سم'], optionsEn: ['24 cm', '12 cm', '32 cm']
  },
  {
    unit: 5, page: 118, titleAr: 'الدائرة', titleEn: 'The Circle',
    focusAr: 'نصف القطر يصل مركز الدائرة بحدها، والقطر يمر بالمركز ويعادل ضعفي نصف القطر.',
    focusEn: 'A radius joins the centre of a circle to its boundary; a diameter passes through the centre and is twice the radius.',
    exampleAr: 'إذا كان نصف القطر ٤ سم، فالقطر ٢ × ٤ = ٨ سم.',
    exampleEn: 'If the radius is 4 cm, the diameter is 2 × 4 = 8 cm.',
    questionAr: 'ما قطر دائرة نصف قطرها ٧ سم؟', questionEn: 'What is the diameter of a circle with radius 7 cm?',
    optionsAr: ['١٤ سم', '٧ سم', '٢١ سم'], optionsEn: ['14 cm', '7 cm', '21 cm']
  },
  {
    unit: 5, page: 119, titleAr: 'محيط الدائرة', titleEn: 'Circumference of a Circle',
    focusAr: 'محيط الدائرة يساوي ط × القطر أو ٢ × ط × نصف القطر؛ استخدم قيمة ط المعطاة.',
    focusEn: 'A circle’s circumference is π times its diameter, or 2π times its radius; use the given value of π.',
    exampleAr: 'لدائرة قطرها ٧ سم، وباعتبار ط = ٢٢⁄٧، يكون المحيط ٢٢ سم.',
    exampleEn: 'For a circle with diameter 7 cm and π = 22/7, the circumference is 22 cm.',
    questionAr: 'ما محيط دائرة قطرها ١٤ سم إذا كان ط = ٢٢⁄٧؟', questionEn: 'What is the circumference of a 14 cm circle when π = 22/7?',
    optionsAr: ['٤٤ سم', '٢٢ سم', '٨٨ سم'], optionsEn: ['44 cm', '22 cm', '88 cm']
  },
  {
    unit: 6, page: 123, titleAr: 'الزاويتان المتتامتان', titleEn: 'Complementary Angles',
    focusAr: 'مجموع قياسي زاويتين متتامتين يساوي ٩٠°؛ اطرح قياس المعلومة من ٩٠° لإيجاد الأخرى.',
    focusEn: 'Complementary angles add to 90°; subtract the known angle from 90° to find the other.',
    exampleAr: 'إذا كانت إحدى زاويتين متتامتين ٣٥°، فالأخرى ٩٠° − ٣٥° = ٥٥°.',
    exampleEn: 'If one of two complementary angles is 35°, the other is 90° − 35° = 55°.',
    questionAr: 'ما متممة زاوية قياسها ٤٠°؟', questionEn: 'What is the complement of a 40° angle?',
    optionsAr: ['٥٠°', '١٤٠°', '٤٠°'], optionsEn: ['50°', '140°', '40°']
  },
  {
    unit: 6, page: 125, titleAr: 'الزاويتان المتكاملتان', titleEn: 'Supplementary Angles',
    focusAr: 'مجموع قياسي زاويتين متكاملتين يساوي ١٨٠°؛ اطرح الزاوية المعلومة من ١٨٠°.',
    focusEn: 'Supplementary angles add to 180°; subtract the known angle from 180°.',
    exampleAr: 'إذا كانت إحدى الزاويتين ١٢٠°، فالأخرى ١٨٠° − ١٢٠° = ٦٠°.',
    exampleEn: 'If one angle is 120°, the other is 180° − 120° = 60°.',
    questionAr: 'ما مكملة زاوية قياسها ٧٥°؟', questionEn: 'What is the supplement of a 75° angle?',
    optionsAr: ['١٠٥°', '١٥°', '٧٥°'], optionsEn: ['105°', '15°', '75°']
  },
  {
    unit: 6, page: 127, titleAr: 'الزوايا المتقابلة بالرأس', titleEn: 'Vertically Opposite Angles',
    focusAr: 'عند تقاطع مستقيمين تكون الزاويتان المتقابلتان بالرأس متساويتين.',
    focusEn: 'When two lines intersect, vertically opposite angles are equal.',
    exampleAr: 'إذا كانت إحدى الزاويتين المتقابلتين بالرأس ٧٥°، فالأخرى ٧٥°.',
    exampleEn: 'If one of a pair of vertically opposite angles is 75°, the other is 75°.',
    questionAr: 'زاويتان متقابلتان بالرأس؛ قياس إحداهما ١١٠°، فما قياس الأخرى؟', questionEn: 'Two angles are vertically opposite. One is 110°; what is the other?',
    optionsAr: ['١١٠°', '٧٠°', '١٨٠°'], optionsEn: ['110°', '70°', '180°']
  },
  {
    unit: 6, page: 129, titleAr: 'الزوايا الناشئة من تقاطع مستقيمين', titleEn: 'Angles Formed by Two Intersecting Lines',
    focusAr: 'الزوايا المتقابلة بالرأس متساوية، وكل زاويتين متجاورتين على خط مستقيم مجموعهما ١٨٠°.',
    focusEn: 'Vertically opposite angles are equal, and adjacent angles on a straight line sum to 180°.',
    exampleAr: 'إذا كانت زاوية ١١٥°، فالزاوية المجاورة لها على خط مستقيم ٦٥°.',
    exampleEn: 'If an angle is 115°, its adjacent angle on a straight line is 65°.',
    questionAr: 'زاوية على خط مستقيم قياسها ٧٠°؛ فما قياس الزاوية المجاورة؟', questionEn: 'An angle on a straight line is 70°; what is its adjacent angle?',
    optionsAr: ['١١٠°', '٧٠°', '٩٠°'], optionsEn: ['110°', '70°', '90°']
  },
  {
    unit: 6, page: 131, titleAr: 'الزوايا المتناظرة والمتبادلة والداخلية في حالة التوازي', titleEn: 'Corresponding, Alternate, and Interior Angles with Parallel Lines',
    focusAr: 'إذا قطع مستقيم خطين متوازيين، تساوت الزوايا المتناظرة والمتبادلة، وتكاملت الزاويتان الداخليتان على جهة واحدة.',
    focusEn: 'When a transversal crosses parallel lines, corresponding and alternate angles are equal; same-side interior angles are supplementary.',
    exampleAr: 'إذا كانت زاوية متناظرة ٦٨°، فقياس الزاوية الأخرى ٦٨°.',
    exampleEn: 'If a corresponding angle is 68°, the matching angle is also 68°.',
    questionAr: 'زاويتان متبادلتان داخلياً بين مستقيمين متوازيين؛ إحداهما ٥٥°، فما الأخرى؟', questionEn: 'Two alternate interior angles lie between parallel lines. One is 55°; what is the other?',
    optionsAr: ['٥٥°', '١٢٥°', '٣٥°'], optionsEn: ['55°', '125°', '35°']
  },
  {
    unit: 6, page: 134, titleAr: 'تصنيف المثلث حسب زواياه', titleEn: 'Classifying Triangles by Their Angles',
    focusAr: 'صنّف المثلث بحسب زواياه إلى حاد الزوايا أو قائم الزاوية أو منفرج الزاوية.',
    focusEn: 'Classify a triangle by its angles as acute, right, or obtuse.',
    exampleAr: 'المثلث الذي يحتوي زاوية قياسها ٩٠° مثلث قائم الزاوية.',
    exampleEn: 'A triangle containing a 90° angle is a right triangle.',
    questionAr: 'كيف يصنّف مثلث فيه زاوية ٩٠°؟', questionEn: 'How is a triangle with a 90° angle classified?',
    optionsAr: ['قائم الزاوية', 'حاد الزوايا', 'منفرج الزاوية'], optionsEn: ['Right', 'Acute', 'Obtuse']
  },
  {
    unit: 6, page: 136, titleAr: 'تصنيف المثلث حسب أضلاعه', titleEn: 'Classifying Triangles by Their Sides',
    focusAr: 'قارن أطوال الأضلاع: المتساوي الأضلاع له ثلاثة أضلاع متساوية، والمتساوي الساقين له ضلعان متساويان، والمختلف الأضلاع لا تتساوى أضلاعه.',
    focusEn: 'Compare side lengths: an equilateral triangle has three equal sides, an isosceles has two, and a scalene triangle has none equal.',
    exampleAr: 'أضلاع ٥ و٥ و٨ سم تجعل المثلث متساوي الساقين.',
    exampleEn: 'Side lengths 5, 5, and 8 cm make an isosceles triangle.',
    questionAr: 'ما تصنيف مثلث أطوال أضلاعه ٦ و٦ و٦ سم؟', questionEn: 'How is a triangle with sides 6, 6, and 6 cm classified?',
    optionsAr: ['متساوي الأضلاع', 'متساوي الساقين فقط', 'مختلف الأضلاع'], optionsEn: ['Equilateral', 'Isosceles only', 'Scalene']
  },
  {
    unit: 6, page: 138, titleAr: 'مجموع قياس زوايا المثلث', titleEn: 'The Sum of a Triangle’s Angles',
    focusAr: 'مجموع الزوايا الداخلية لأي مثلث ١٨٠°؛ اطرح الزاويتين المعلومتين لإيجاد الثالثة.',
    focusEn: 'The interior angles of every triangle sum to 180°; subtract the two known angles to find the third.',
    exampleAr: 'في مثلث زاويتاه ٥٠° و٦٠°، الثالثة ١٨٠° − ١١٠° = ٧٠°.',
    exampleEn: 'In a triangle with angles 50° and 60°, the third is 180° − 110° = 70°.',
    questionAr: 'في مثلث زاويتاه ٤٠° و٨٠°، فما قياس الثالثة؟', questionEn: 'A triangle has angles 40° and 80°. What is the third angle?',
    optionsAr: ['٦٠°', '١٠٠°', '٤٠°'], optionsEn: ['60°', '100°', '40°']
  },
  {
    unit: 6, page: 140, titleAr: 'الزاوية الخارجية للمثلث', titleEn: 'An Exterior Angle of a Triangle',
    focusAr: 'قياس الزاوية الخارجية يساوي مجموع قياسي الزاويتين الداخليتين البعيدتين عنها.',
    focusEn: 'An exterior angle equals the sum of the two non-adjacent interior angles.',
    exampleAr: 'إذا كانت الزاويتان الداخليتان البعيدتان ٤٠° و٦٥°، فالزاوية الخارجية ١٠٥°.',
    exampleEn: 'If the two remote interior angles are 40° and 65°, the exterior angle is 105°.',
    questionAr: 'زاويتا مثلث الداخليتان البعيدتان ٣٥° و٧٠°؛ فما الزاوية الخارجية؟', questionEn: 'The two remote interior angles are 35° and 70°; what is the exterior angle?',
    optionsAr: ['١٠٥°', '١٤٥°', '٣٥°'], optionsEn: ['105°', '145°', '35°']
  },
  {
    unit: 6, page: 142, titleAr: 'رسم مثلث إذا علمت أطوال أضلاعه الثلاثة', titleEn: 'Constructing a Triangle from Its Three Side Lengths',
    focusAr: 'ارسم ضلعاً أساسياً، ثم ارسم قوسين بنصفي قطري الضلعين الآخرين من طرفيه؛ نقطة التقاطع هي الرأس الثالث.',
    focusEn: 'Draw a base, then draw arcs from its endpoints with radii equal to the other two sides; their intersection is the third vertex.',
    exampleAr: 'لإنشاء مثلث أضلاعه ٤ و٥ و٦ سم، ارسم ٦ سم قاعدة ثم قوسي ٤ و٥ سم.',
    exampleEn: 'To construct sides 4, 5, and 6 cm, draw a 6 cm base and arcs of 4 cm and 5 cm.',
    questionAr: 'ما الأدوات الأنسب لإنشاء مثلث معلوم أطوال أضلاعه الثلاثة؟', questionEn: 'Which tools are best for constructing a triangle when all three side lengths are known?',
    optionsAr: ['مسطرة وفرجار', 'منقلة فقط', 'ساعة ومسطرة'], optionsEn: ['Ruler and compass', 'Protractor only', 'Clock and ruler']
  },
  {
    unit: 6, page: 143, titleAr: 'رسم مثلث إذا علمت قياس زاويتين وطول الضلع بينهما', titleEn: 'Constructing a Triangle from Two Angles and the Included Side',
    focusAr: 'ارسم الضلع المعلوم، وأنشئ عند طرفيه الزاويتين المعلومتين؛ تقاطع شعاعي الزاويتين يحدد الرأس الثالث.',
    focusEn: 'Draw the known side and construct the given angles at its endpoints; where the rays meet is the third vertex.',
    exampleAr: 'لإنشاء مثلث بضلع ٦ سم وزاويتين ٥٠° و٦٠°، ارسم الضلع ثم الزاويتين عند طرفيه.',
    exampleEn: 'For a triangle with a 6 cm side and angles 50° and 60°, draw the side and construct the angles at its ends.',
    questionAr: 'أي معلومة إضافية لازمة لهذه الطريقة بعد معرفة زاويتين؟', questionEn: 'What additional information is needed for this construction when two angles are known?',
    optionsAr: ['طول الضلع بينهما', 'طول ضلع مقابل فقط', 'محيط الدائرة'], optionsEn: ['The side between them', 'Only an opposite side length', 'The circle’s circumference']
  },
  {
    unit: 6, page: 145, titleAr: 'رسم مثلث إذا علمت طولي ضلعين وقياس الزاوية المحصورة بينهما', titleEn: 'Constructing a Triangle from Two Sides and the Included Angle',
    focusAr: 'ارسم أحد الضلعين، وأنشئ الزاوية المحصورة عند طرفه، وحدد الضلع الآخر على شعاع الزاوية ثم صل النهايتين.',
    focusEn: 'Draw one side, construct the included angle at its endpoint, mark the second side along the angle ray, then join the endpoints.',
    exampleAr: 'لضلعين ٥ و٧ سم والزاوية المحصورة ٦٠°، أنشئ الزاوية بين الضلعين قبل إغلاق المثلث.',
    exampleEn: 'For sides 5 and 7 cm with included angle 60°, construct the angle between the sides before closing the triangle.',
    questionAr: 'أين تُرسم الزاوية المعلومة في إنشاء ضلعين وزاوية محصورة؟', questionEn: 'Where is the known angle placed when constructing from two sides and the included angle?',
    optionsAr: ['بين الضلعين المعلومين', 'خارج المثلث', 'عند مركز دائرة'], optionsEn: ['Between the two known sides', 'Outside the triangle', 'At a circle’s centre']
  },
  {
    unit: 6, page: 147, titleAr: 'رسم مثلث إذا علم طول ضلع والوتر وزاوية قائمة', titleEn: 'Constructing a Right Triangle from a Leg and the Hypotenuse',
    focusAr: 'ارسم زاوية قائمة، وضع طول الضلع المعلوم على أحد شعاعيها؛ حدّد الرأس الثالث بتقاطع قوس الوتر مع الشعاع الآخر.',
    focusEn: 'Draw a right angle and mark the known leg on one ray; locate the third vertex where an arc with the hypotenuse radius meets the other ray.',
    exampleAr: 'ارسم زاوية قائمة، وحدد ضلعا قائماً طوله ٣ سم، ثم ارسم من نهايته قوساً بنصف قطر ٥ سم؛ تقاطعه مع الشعاع الآخر يحدد الرأس الثالث.',
    exampleEn: 'Draw a right angle and mark a 3 cm leg. From its endpoint, draw a 5 cm radius arc; where it meets the other ray is the third vertex.',
    questionAr: 'بعد رسم الزاوية القائمة وتحديد طول أحد ضلعيها، كيف تحدد الرأس الثالث إذا عُرف الوتر؟', questionEn: 'After drawing the right angle and marking one leg, how do you locate the third vertex when the hypotenuse is known?',
    optionsAr: ['ارسم قوساً بنصف قطر الوتر', 'قسّم الزاوية إلى نصفين', 'ارسم دائرة من رأس الزاوية'], optionsEn: ['Draw an arc with the hypotenuse as radius', 'Bisect the angle', 'Draw a circle centred at the angle vertex']
  }
];

const unitDiagramSteps: Record<number, [string[], string[]]> = {
  1: [
    ['حدّد العدد أو العلاقة المطلوبة', 'استدعِ قاعدة الأعداد المناسبة', 'طبّقها على القيم المعطاة', 'تحقق بالمقارنة أو العملية العكسية'],
    ['Identify the number or relation', 'Choose the relevant number rule', 'Apply it to the given values', 'Check by comparison or inverse operation']
  ],
  2: [
    ['حدّد البسط والمقام والعملية', 'اختر الضرب أو المقلوب المناسب', 'احسب واختصر الناتج', 'تحقق بتقدير أو بعملية عكسية'],
    ['Identify the numerator, denominator, and operation', 'Choose multiplication or the needed reciprocal', 'Calculate and simplify', 'Check by estimating or using the inverse operation']
  ],
  3: [
    ['حدّد المنازل العشرية في المسألة', 'رتّب الفواصل أو حرّكها وفق القاعدة', 'نفّذ العملية على الأرقام', 'قدّر الناتج ثم تحقق منه'],
    ['Identify the decimal places in the problem', 'Align or shift decimal points by the rule', 'Perform the operation on the digits', 'Estimate and check the result']
  ],
  4: [
    ['حدّد الكميتين ووحدتيهما', 'اكتب النسبة بالترتيب نفسه', 'بسّط أو كوّن تناسباً', 'تحقق من الوحدات والنتيجة'],
    ['Identify the quantities and their units', 'Write the ratio in matching order', 'Simplify it or form a proportion', 'Check the units and result']
  ],
  5: [
    ['حدّد حدود الشكل وأطوالها', 'اختر علاقة المحيط المناسبة', 'اجمع الأطوال أو عوّض في العلاقة', 'اكتب الناتج بوحدته وتحقق'],
    ['Identify the boundary and its lengths', 'Choose the appropriate perimeter relation', 'Add the lengths or substitute in the formula', 'Include the unit and check the result']
  ],
  6: [
    ['علّم الزوايا والأضلاع المعطاة', 'اختر قاعدة الزوايا أو الإنشاء', 'احسب القياس أو ارسم الخطوة التالية', 'تحقق من مجموع الزوايا والأطوال'],
    ['Mark the given angles and sides', 'Choose an angle rule or construction method', 'Calculate the measure or draw the next step', 'Check angle sums and side lengths']
  ]
};

export const SUDAN_PRIMARY_MATH_G5_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_MATH_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-math-g5-${order}`;
  const unit = SUDAN_PRIMARY_MATH_G5_BOOK.units[lesson.unit - 1];
  const lessonInUnit = lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1;
  const [stepsAr, stepsEn] = unitDiagramSteps[lesson.unit];
  const visualSteps: LectureDiagramStep[] = stepsAr.map((labelAr, stepIndex) => ({
    labelAr,
    labelEn: stepsEn[stepIndex]
  }));

  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessonInUnit}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessonInUnit}: ${lesson.titleEn}`,
    subtitleAr: `الرياضيات — الصف الخامس الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 5 Mathematics — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الخامس الابتدائي',
    gradeLevelNameEn: 'Grade 5 Primary',
    termAr: 'الرياضيات — الصف الخامس',
    termEn: 'Grade 5 Mathematics',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessonInUnit}`,
    lessonNumberEn: `Lesson ${lessonInUnit}`,
    warmupHookAr: `تأمل مثالاً من حياتك يرتبط بموضوع «${lesson.titleAr}»، وتوقع طريقة حله.`,
    warmupHookEn: `Think of an everyday example related to “${lesson.titleEn}” and predict how to solve it.`,
    learningOutcomesAr: [lesson.focusAr, 'يشرح الحل بمثال ويتحقق من معقولية الناتج.'],
    learningOutcomesEn: [lesson.focusEn, 'Explain a solution with an example and check whether the result is reasonable.'],
    keyConceptsAr: [lesson.titleAr],
    keyConceptsEn: [lesson.titleEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nمثال محلول: ${lesson.exampleAr}\n\nحل المسألة المشابهة بنفسك، ثم تحقق من إجابتك.`,
      contentEn: `${lesson.focusEn}\n\nWorked example: ${lesson.exampleEn}\n\nSolve a similar problem yourself, then check your answer.`,
      diagram: {
        id: `${id}-visual`,
        figureNumberAr: `شكل توضيحي (${order})`,
        figureNumberEn: `Illustration (${order})`,
        titleAr: `خطوات الحل: ${lesson.titleAr}`,
        titleEn: `Worked Steps: ${lesson.titleEn}`,
        captionAr: 'اتبع الخطوات الأربع بالترتيب للوصول إلى حل يمكن التحقق منه.',
        captionEn: 'Follow the four steps in order to reach a solution you can check.',
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
