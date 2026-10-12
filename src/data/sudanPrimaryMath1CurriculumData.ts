import type { Lecture } from '../types';

export const SUDAN_PRIMARY_MATH_G1_BOOK = {
  title: 'الرياضيات — الصف الأول الأساسي',
  edition: 'الطبعة الأولى 2020م',
  units: [
    { titleAr: 'الأعداد (٠–٩)', titleEn: 'Numbers (0–9)', firstPage: 5, lastPage: 27 },
    { titleAr: 'الجمع ضمن العدد ٩', titleEn: 'Addition within 9', firstPage: 28, lastPage: 37 },
    { titleAr: 'الطرح ضمن العدد ٩', titleEn: 'Subtraction within 9', firstPage: 38, lastPage: 43 },
    { titleAr: 'الأعداد (١٠–٩٩) وعمليات الجمع والطرح عليها', titleEn: 'Numbers (10–99) and Addition and Subtraction', firstPage: 44, lastPage: 74 },
    { titleAr: 'القياس', titleEn: 'Measurement', firstPage: 75, lastPage: 83 }
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
  correctIndex: number;
}

const lessons: MathLesson[] = [
  { unit: 1, page: 6, titleAr: 'العدد واحد', titleEn: 'The Number One', focusAr: 'يتعرف العدد ١ بمطابقته مع مجموعة فيها شيء واحد، ويقرأ رمزه ويكتبه.', focusEn: 'Recognize, read, and write 1; match the numeral with a set containing one object.', questionAr: 'كم شيئًا تمثل المجموعة التي فيها قلم واحد؟', questionEn: 'How many objects are in a set with one pencil?', optionsAr: ['١', '٢', '٣'], optionsEn: ['1', '2', '3'], correctIndex: 0 },
  { unit: 1, page: 8, titleAr: 'العدد اثنان', titleEn: 'The Number Two', focusAr: 'يعد شيئين، ويتعرف رمز العدد ٢ ويكتبه ويربطه بالمجموعة المناسبة.', focusEn: 'Count two objects, recognize and write 2, and match it to a set.', questionAr: 'أي عدد يمثل شيئين؟', questionEn: 'Which number represents two objects?', optionsAr: ['٢', '١', '٣'], optionsEn: ['2', '1', '3'], correctIndex: 0 },
  { unit: 1, page: 10, titleAr: 'العدد ثلاثة', titleEn: 'The Number Three', focusAr: 'يعد ثلاث أشياء، ويقرأ العدد ٣ ويكتبه ويميز المجموعة التي تضم ثلاثة أشياء.', focusEn: 'Count three objects, read and write 3, and identify a set of three.', questionAr: 'كم شيئًا في مجموعة تضم ثلاثة أشياء؟', questionEn: 'How many objects are in a set of three?', optionsAr: ['٣', '٢', '٤'], optionsEn: ['3', '2', '4'], correctIndex: 0 },
  { unit: 1, page: 12, titleAr: 'العدد أربعة', titleEn: 'The Number Four', focusAr: 'يتعرف العدد ٤، ويكتب رمزه، ويطابقه مع مجموعة من أربعة أشياء.', focusEn: 'Recognize and write 4 and match it to a set of four objects.', questionAr: 'أي عدد يأتي بعد ٣؟', questionEn: 'Which number comes after 3?', optionsAr: ['٤', '٢', '٥'], optionsEn: ['4', '2', '5'], correctIndex: 0 },
  { unit: 1, page: 13, titleAr: 'العدد خمسة', titleEn: 'The Number Five', focusAr: 'يعد الأشياء حتى خمسة، ويقرأ العدد ٥ ويكتبه ويربطه بالكمية.', focusEn: 'Count objects to five, read and write 5, and connect the numeral to quantity.', questionAr: 'كم عدد أصابع اليد الواحدة؟', questionEn: 'How many fingers are on one hand?', optionsAr: ['٥', '٤', '٦'], optionsEn: ['5', '4', '6'], correctIndex: 0 },
  { unit: 1, page: 14, titleAr: 'العدد ستة', titleEn: 'The Number Six', focusAr: 'يعد حتى ستة، ويكتب العدد ٦، ويختار العدد المناسب لمجموعة من الأشياء.', focusEn: 'Count to six, write 6, and choose the numeral for a group of objects.', questionAr: 'ما العدد الذي يأتي بعد ٥؟', questionEn: 'Which number comes after 5?', optionsAr: ['٦', '٤', '٧'], optionsEn: ['6', '4', '7'], correctIndex: 0 },
  { unit: 1, page: 16, titleAr: 'العدد سبعة', titleEn: 'The Number Seven', focusAr: 'يتعرف العدد ٧ ويكتبه، ويعد مجموعة أشياء ويطابقها مع العدد.', focusEn: 'Recognize and write 7, count a set, and match it to the numeral.', questionAr: 'أي عدد يأتي بعد ٦؟', questionEn: 'Which number comes after 6?', optionsAr: ['٧', '٥', '٨'], optionsEn: ['7', '5', '8'], correctIndex: 0 },
  { unit: 1, page: 18, titleAr: 'العدد ثمانية', titleEn: 'The Number Eight', focusAr: 'يعد الأشياء حتى ثمانية، ويقرأ العدد ٨ ويكتبه ويطابقه مع مجموعتين من الأشياء.', focusEn: 'Count objects to eight, read and write 8, and match it to a set.', questionAr: 'ما العدد الذي يأتي قبل ٩؟', questionEn: 'Which number comes before 9?', optionsAr: ['٨', '٧', '٦'], optionsEn: ['8', '7', '6'], correctIndex: 0 },
  { unit: 1, page: 19, titleAr: 'العدد تسعة', titleEn: 'The Number Nine', focusAr: 'يتعرف العدد ٩ ويكتبه، ويعد مجموعة من تسعة أشياء.', focusEn: 'Recognize and write 9 and count a set of nine objects.', questionAr: 'أي عدد يمثل تسعة أشياء؟', questionEn: 'Which number represents nine objects?', optionsAr: ['٩', '٨', '٧'], optionsEn: ['9', '8', '7'], correctIndex: 0 },
  { unit: 1, page: 20, titleAr: 'العدد صفر', titleEn: 'The Number Zero', focusAr: 'يفهم أن الصفر يمثل عدم وجود أشياء في المجموعة، ويقرأ رمزه ويكتبه.', focusEn: 'Understand that zero represents no objects in a set; read and write its numeral.', questionAr: 'ما العدد الذي يمثل عدم وجود أشياء؟', questionEn: 'Which number represents no objects?', optionsAr: ['٠', '١', '٢'], optionsEn: ['0', '1', '2'], correctIndex: 0 },
  { unit: 1, page: 22, titleAr: 'العدد الأكبر وعلامة أكبر من', titleEn: 'The Greater Number and Greater Than', focusAr: 'يقارن مجموعتين حتى ٩، ويحدد العدد الأكبر ويستخدم علامة > لتمثيل المقارنة.', focusEn: 'Compare sets up to 9, identify the greater number, and use the > sign.', questionAr: 'أكمل: ٥ ___ ٣', questionEn: 'Complete: 5 ___ 3', optionsAr: ['>', '<', '='], optionsEn: ['>', '<', '='], correctIndex: 0 },
  { unit: 1, page: 23, titleAr: 'العدد الأصغر وعلامة أصغر من', titleEn: 'The Smaller Number and Less Than', focusAr: 'يقارن عددين حتى ٩، ويحدد الأصغر ويستخدم علامة <.', focusEn: 'Compare two numbers up to 9, identify the smaller number, and use <.', questionAr: 'أكمل: ٢ ___ ٤', questionEn: 'Complete: 2 ___ 4', optionsAr: ['<', '>', '='], optionsEn: ['<', '>', '='], correctIndex: 0 },
  { unit: 1, page: 24, titleAr: 'المساواة بين عددين', titleEn: 'Equality Between Numbers', focusAr: 'يميز بين أكبر من وأصغر من ويساوي، ويختار علامة المقارنة المناسبة.', focusEn: 'Distinguish greater than, less than, and equal to; choose the appropriate comparison sign.', questionAr: 'أكمل: ٣ ___ ٣', questionEn: 'Complete: 3 ___ 3', optionsAr: ['=', '>', '<'], optionsEn: ['=', '>', '<'], correctIndex: 0 },
  { unit: 1, page: 25, titleAr: 'العدد السابق', titleEn: 'The Number Before', focusAr: 'يحدد العدد السابق مباشرةً لعدد معطى ضمن الأعداد من ٠ إلى ٩.', focusEn: 'Find the number immediately before a given number from 0 to 9.', questionAr: 'ما العدد السابق مباشرةً للعدد ٦؟', questionEn: 'What number comes immediately before 6?', optionsAr: ['٥', '٧', '٤'], optionsEn: ['5', '7', '4'], correctIndex: 0 },
  { unit: 1, page: 26, titleAr: 'العدد التالي', titleEn: 'The Number After', focusAr: 'يحدد العدد التالي مباشرةً لعدد معطى ضمن الأعداد من ٠ إلى ٩.', focusEn: 'Find the number immediately after a given number from 0 to 9.', questionAr: 'ما العدد التالي مباشرةً للعدد ٦؟', questionEn: 'What number comes immediately after 6?', optionsAr: ['٧', '٥', '٨'], optionsEn: ['7', '5', '8'], correctIndex: 0 },
  { unit: 1, page: 27, titleAr: 'الترتيب التصاعدي والتنازلي', titleEn: 'Ascending and Descending Order', focusAr: 'يرتب الأعداد تصاعديًا من الأصغر إلى الأكبر وتنازليًا من الأكبر إلى الأصغر.', focusEn: 'Order numbers in ascending order from least to greatest and descending order from greatest to least.', questionAr: 'أي ترتيب تصاعدي صحيح؟', questionEn: 'Which sequence is in ascending order?', optionsAr: ['٢، ٣، ٤', '٤، ٣، ٢', '٣، ٢، ٤'], optionsEn: ['2, 3, 4', '4, 3, 2', '3, 2, 4'], correctIndex: 0 },

  { unit: 2, page: 29, titleAr: 'الجمع ضمن ٥', titleEn: 'Addition Within 5', focusAr: 'يجمع مجموعتين ويكتب جملة جمع، مستخدمًا نماذج وأعدادًا مجموعها لا يتجاوز ٥.', focusEn: 'Combine two sets and write an addition sentence with sums up to 5.', questionAr: 'ما ناتج ٢ + ٣؟', questionEn: 'What is 2 + 3?', optionsAr: ['٥', '٤', '٦'], optionsEn: ['5', '4', '6'], correctIndex: 0 },
  { unit: 2, page: 30, titleAr: 'مكونات العددين ٢ و٣', titleEn: 'Number Pairs for 2 and 3', focusAr: 'يكون العددين ٢ و٣ من مجموعات أصغر ويكتب طرائق جمعهما المختلفة.', focusEn: 'Make 2 and 3 from smaller groups and write their different addition pairs.', questionAr: 'أي جملة جمع ناتجها ٣؟', questionEn: 'Which addition sentence makes 3?', optionsAr: ['١ + ٢', '١ + ١', '٢ + ٢'], optionsEn: ['1 + 2', '1 + 1', '2 + 2'], correctIndex: 0 },
  { unit: 2, page: 31, titleAr: 'مكونات الأعداد ٤ و٥', titleEn: 'Number Pairs for 4 and 5', focusAr: 'يستكشف أزواج الأعداد التي يكون مجموعها ٤ أو ٥، ومنها الجمع مع الصفر.', focusEn: 'Explore number pairs that make 4 or 5, including addition with zero.', questionAr: 'ما العدد الذي يكمل ٢ + ___ = ٥؟', questionEn: 'Which number completes 2 + ___ = 5?', optionsAr: ['٣', '٢', '٤'], optionsEn: ['3', '2', '4'], correctIndex: 0 },
  { unit: 2, page: 32, titleAr: 'الجمع الرأسي والأفقي', titleEn: 'Vertical and Horizontal Addition', focusAr: 'يحسب مجموع عددين بطرائق أفقية ورأسية ويكتب الناتج.', focusEn: 'Find the sum of two numbers using horizontal and vertical layouts.', questionAr: 'ما ناتج ١ + ٣؟', questionEn: 'What is 1 + 3?', optionsAr: ['٤', '٣', '٥'], optionsEn: ['4', '3', '5'], correctIndex: 0 },
  { unit: 2, page: 33, titleAr: 'خاصية الإبدال في الجمع', titleEn: 'Commutative Property of Addition', focusAr: 'يلاحظ أن تبديل ترتيب العددين في الجمع لا يغير الناتج، مثل ١ + ٢ و٢ + ١.', focusEn: 'Notice that changing the order of addends does not change the sum, such as 1 + 2 and 2 + 1.', questionAr: 'أكمل: ١ + ٢ = ٢ + ___', questionEn: 'Complete: 1 + 2 = 2 + ___', optionsAr: ['١', '٢', '٣'], optionsEn: ['1', '2', '3'], correctIndex: 0 },
  { unit: 2, page: 34, titleAr: 'الجمع ضمن العددين ٦ و٧', titleEn: 'Addition Within 6 and 7', focusAr: 'يجمع عددين ضمن ٦ و٧، ويستكمل مكونات العدد ويجد المجموع.', focusEn: 'Add numbers within 6 and 7, complete number pairs, and find sums.', questionAr: 'ما ناتج ٣ + ٤؟', questionEn: 'What is 3 + 4?', optionsAr: ['٧', '٦', '٨'], optionsEn: ['7', '6', '8'], correctIndex: 0 },
  { unit: 2, page: 35, titleAr: 'الجمع ضمن العددين ٨ و٩', titleEn: 'Addition Within 8 and 9', focusAr: 'يستخدم مكونات العدد وصورًا ونماذج لإيجاد نواتج الجمع حتى ٩.', focusEn: 'Use number pairs, pictures, and models to find sums up to 9.', questionAr: 'ما ناتج ٤ + ٥؟', questionEn: 'What is 4 + 5?', optionsAr: ['٩', '٨', '٧'], optionsEn: ['9', '8', '7'], correctIndex: 0 },
  { unit: 2, page: 36, titleAr: 'الجمع التصاعدي', titleEn: 'Counting On to Add', focusAr: 'يبدأ من العدد الأكبر ثم يعد تصاعديًا بمقدار العدد المضاف لإيجاد الناتج.', focusEn: 'Start at the greater addend and count on by the other addend to find the sum.', questionAr: 'ابدأ من ٦ وعد ثلاث خطوات: ما الناتج؟', questionEn: 'Start at 6 and count on three steps. What is the result?', optionsAr: ['٩', '٨', '٧'], optionsEn: ['9', '8', '7'], correctIndex: 0 },
  { unit: 2, page: 37, titleAr: 'جمع ثلاثة أعداد', titleEn: 'Adding Three Numbers', focusAr: 'يجمع ثلاثة أعداد صغيرة، ويختار ترتيبًا يساعده على إيجاد الناتج.', focusEn: 'Add three small numbers and choose an order that helps find the total.', questionAr: 'ما ناتج ١ + ٢ + ٣؟', questionEn: 'What is 1 + 2 + 3?', optionsAr: ['٦', '٥', '٧'], optionsEn: ['6', '5', '7'], correctIndex: 0 },

  { unit: 3, page: 38, titleAr: 'الطرح ضمن ٥', titleEn: 'Subtraction Within 5', focusAr: 'يمثل الطرح بالشطب وإزالة أشياء من مجموعة، ثم يكتب جملة الطرح.', focusEn: 'Model subtraction by crossing out or removing objects, then write a subtraction sentence.', questionAr: 'ما ناتج ٥ − ١؟', questionEn: 'What is 5 − 1?', optionsAr: ['٤', '٣', '٥'], optionsEn: ['4', '3', '5'], correctIndex: 0 },
  { unit: 3, page: 41, titleAr: 'الطرح ضمن العددين ٦ و٧', titleEn: 'Subtraction Within 6 and 7', focusAr: 'يجد باقي الطرح ضمن ٦ و٧، ويكمل جداول الطرح ويربط العملية بالمجموعة.', focusEn: 'Find differences within 6 and 7, complete subtraction tables, and connect the operation to sets.', questionAr: 'ما ناتج ٧ − ٣؟', questionEn: 'What is 7 − 3?', optionsAr: ['٤', '٣', '٥'], optionsEn: ['4', '3', '5'], correctIndex: 0 },
  { unit: 3, page: 42, titleAr: 'الطرح ضمن العددين ٨ و٩', titleEn: 'Subtraction Within 8 and 9', focusAr: 'يطرح ضمن ٨ و٩، ويستخدم النماذج والجداول لإيجاد الباقي.', focusEn: 'Subtract within 8 and 9, using models and tables to find the difference.', questionAr: 'ما ناتج ٩ − ٥؟', questionEn: 'What is 9 − 5?', optionsAr: ['٤', '٥', '٣'], optionsEn: ['4', '5', '3'], correctIndex: 0 },
  { unit: 3, page: 43, titleAr: 'مراجعة الجمع والطرح ضمن ٩', titleEn: 'Review: Addition and Subtraction Within 9', focusAr: 'يراجع الجمع والطرح ضمن ٩ ويختار العملية المناسبة للمسألة.', focusEn: 'Review addition and subtraction within 9 and choose the operation that fits a problem.', questionAr: 'ما ناتج ٦ − ٢؟', questionEn: 'What is 6 − 2?', optionsAr: ['٤', '٣', '٥'], optionsEn: ['4', '3', '5'], correctIndex: 0 },

  { unit: 4, page: 45, titleAr: 'العدد عشرة', titleEn: 'The Number Ten', focusAr: 'يعد الأشياء حتى ١٠، ويكتب العدد ١٠ ويراجع ترتيب الأعداد حتى ٩.', focusEn: 'Count objects to 10, write 10, and review the order of numbers to 9.', questionAr: 'ما العدد الذي يأتي بعد ٩؟', questionEn: 'Which number comes after 9?', optionsAr: ['١٠', '٨', '١١'], optionsEn: ['10', '8', '11'], correctIndex: 0 },
  { unit: 4, page: 46, titleAr: 'مكونات العدد ١٠', titleEn: 'Pairs That Make 10', focusAr: 'يستكشف أزواج الأعداد التي مجموعها ١٠ ويكمل العدد الناقص.', focusEn: 'Explore pairs of numbers that make 10 and find the missing addend.', questionAr: 'ما العدد الذي يكمل ٦ + ___ = ١٠؟', questionEn: 'Which number completes 6 + ___ = 10?', optionsAr: ['٤', '٣', '٥'], optionsEn: ['4', '3', '5'], correctIndex: 0 },
  { unit: 4, page: 48, titleAr: 'الأعداد من ١١ إلى ٢٠', titleEn: 'Numbers from 11 to 20', focusAr: 'يكون الأعداد من ١١ إلى ٢٠ بإضافة آحاد إلى عشرة، ويقرأها ويربطها بتمثيلها.', focusEn: 'Build numbers from 11 to 20 by adding ones to ten, then read and represent them.', questionAr: 'ما العدد الذي يساوي ١٠ + ٤؟', questionEn: 'Which number is 10 + 4?', optionsAr: ['١٤', '١٣', '١٥'], optionsEn: ['14', '13', '15'], correctIndex: 0 },
  { unit: 4, page: 49, titleAr: 'العشرات والآحاد', titleEn: 'Tens and Ones', focusAr: 'يميز منزلة العشرات والآحاد في الأعداد حتى ٢٠ ويمثل العدد على صورة عشرات وآحاد.', focusEn: 'Identify tens and ones in numbers to 20 and represent a number by place value.', questionAr: 'في العدد ١٦، كم عشرة وكم آحاد؟', questionEn: 'How many tens and ones are in 16?', optionsAr: ['عشرة واحدة و٦ آحاد', '١٦ عشرة', '٦ عشرات وآحاد واحد'], optionsEn: ['1 ten and 6 ones', '16 tens', '6 tens and 1 one'], correctIndex: 0 },
  { unit: 4, page: 50, titleAr: 'الأعداد الزوجية والفردية', titleEn: 'Even and Odd Numbers', focusAr: 'يصنف الأعداد إلى زوجية وفردية بتكوين أزواج متساوية وملاحظة الباقي.', focusEn: 'Classify numbers as even or odd by making equal pairs and checking for a leftover.', questionAr: 'أي عدد مما يأتي زوجي؟', questionEn: 'Which of these numbers is even?', optionsAr: ['٨', '٧', '٥'], optionsEn: ['8', '7', '5'], correctIndex: 0 },
  { unit: 4, page: 52, titleAr: 'الترتيب التصاعدي والتنازلي للأعداد', titleEn: 'Ascending and Descending Order', focusAr: 'يرتب الأعداد حتى ٢٠ تصاعديًا وتنازليًا، ويحدد العدد السابق والتالي في الترتيب.', focusEn: 'Order numbers to 20 in ascending and descending order and identify neighboring numbers.', questionAr: 'أي ترتيب تنازلي صحيح؟', questionEn: 'Which sequence is in descending order?', optionsAr: ['٢٠، ١٩، ١٨', '١٨، ١٩، ٢٠', '١٩، ٢٠، ١٨'], optionsEn: ['20, 19, 18', '18, 19, 20', '19, 20, 18'], correctIndex: 0 },
  { unit: 4, page: 54, titleAr: 'الأعداد من ٢١ إلى ٣٠', titleEn: 'Numbers from 21 to 30', focusAr: 'يكون ويقرأ الأعداد من ٢١ إلى ٣٠ ويمثلها بعشرات وآحاد.', focusEn: 'Build and read numbers from 21 to 30 and represent them with tens and ones.', questionAr: 'ما العدد الذي يساوي ٢٠ + ٧؟', questionEn: 'Which number is 20 + 7?', optionsAr: ['٢٧', '٢٦', '٢٨'], optionsEn: ['27', '26', '28'], correctIndex: 0 },
  { unit: 4, page: 56, titleAr: 'الأعداد من ٣١ إلى ٦٠', titleEn: 'Numbers from 31 to 60', focusAr: 'يقرأ ويمثل الأعداد من ٣١ إلى ٦٠ بالعشرات والآحاد، ويرتبها ويقارن بينها.', focusEn: 'Read and represent numbers from 31 to 60 with tens and ones, then compare and order them.', questionAr: 'ما العدد الذي يساوي ٤٠ + ٥؟', questionEn: 'Which number is 40 + 5?', optionsAr: ['٤٥', '٥٤', '٤٠'], optionsEn: ['45', '54', '40'], correctIndex: 0 },
  { unit: 4, page: 59, titleAr: 'الأعداد من ٦١ إلى ٨٠', titleEn: 'Numbers from 61 to 80', focusAr: 'يقرأ الأعداد من ٦١ إلى ٨٠ ويكونها بالعشرات والآحاد ويرتبها.', focusEn: 'Read numbers from 61 to 80, compose them from tens and ones, and order them.', questionAr: 'ما العدد الذي يساوي ٧٠ + ٥؟', questionEn: 'Which number is 70 + 5?', optionsAr: ['٧٥', '٧٠', '٦٥'], optionsEn: ['75', '70', '65'], correctIndex: 0 },
  { unit: 4, page: 61, titleAr: 'الأعداد من ٨١ إلى ١٠٠', titleEn: 'Numbers from 81 to 100', focusAr: 'يقرأ الأعداد حتى ١٠٠ ويمثل العشرات والآحاد، ويتعرف المئات في العدد ١٠٠.', focusEn: 'Read numbers to 100, represent tens and ones, and recognize the hundred in 100.', questionAr: 'ما العدد الذي يساوي ٩٠ + ٨؟', questionEn: 'Which number is 90 + 8?', optionsAr: ['٩٨', '٨٩', '٩٠'], optionsEn: ['98', '89', '90'], correctIndex: 0 },
  { unit: 4, page: 64, titleAr: 'العد بالعشرات', titleEn: 'Counting by Tens', focusAr: 'يعد بالعشرات من ١٠ إلى ١٠٠، ويكمل نمطًا عدديًا متزايدًا بالعشرة.', focusEn: 'Count by tens from 10 to 100 and complete a number pattern increasing by ten.', questionAr: 'ما العدد التالي: ٣٠، ٤٠، ___؟', questionEn: 'What comes next: 30, 40, ___?', optionsAr: ['٥٠', '٤٥', '٦٠'], optionsEn: ['50', '45', '60'], correctIndex: 0 },
  { unit: 4, page: 66, titleAr: 'جمع عددين من رقمين دون حمل', titleEn: 'Adding Two-Digit Numbers Without Carrying', focusAr: 'يجمع عددين من رقمين بجمع الآحاد والعشرات كلًّا على حدة عندما لا يتطلب الجمع حملًا.', focusEn: 'Add two two-digit numbers by combining ones and tens separately when no regrouping is needed.', questionAr: 'ما ناتج ٢٣ + ١٤؟', questionEn: 'What is 23 + 14?', optionsAr: ['٣٧', '٣٦', '٤٧'], optionsEn: ['37', '36', '47'], correctIndex: 0 },
  { unit: 4, page: 70, titleAr: 'طرح عددين من رقمين دون استلاف', titleEn: 'Subtracting Two-Digit Numbers Without Borrowing', focusAr: 'يطرح عددين من رقمين بطرح الآحاد والعشرات كلًّا على حدة عندما لا يتطلب الطرح استلافًا.', focusEn: 'Subtract two two-digit numbers by subtracting ones and tens separately when no regrouping is needed.', questionAr: 'ما ناتج ٥٢ − ٢٠؟', questionEn: 'What is 52 − 20?', optionsAr: ['٣٢', '٣٠', '٤٢'], optionsEn: ['32', '30', '42'], correctIndex: 0 },
  { unit: 4, page: 73, titleAr: 'مسائل لفظية على الجمع والطرح', titleEn: 'Word Problems: Addition and Subtraction', focusAr: 'يحل مسائل حياتية بالجمع والطرح ضمن الأعداد ذات الرقمين، ويختار العملية التي تناسب الموقف.', focusEn: 'Solve everyday addition and subtraction word problems with two-digit numbers and choose the operation that fits.', questionAr: 'مع علي ١٢ برتقالة ومع محمد ١٥؛ كم برتقالة معهما؟', questionEn: 'Ali has 12 oranges and Mohammed has 15. How many do they have altogether?', optionsAr: ['٢٧', '٢٦', '٢٥'], optionsEn: ['27', '26', '25'], correctIndex: 0 },

  { unit: 5, page: 76, titleAr: 'الطول: الأطول والأقصر', titleEn: 'Length: Longer and Shorter', focusAr: 'يقارن أطوال أشياء مصورة ويصفها باستخدام أطول وأقصر.', focusEn: 'Compare pictured objects and describe them using longer and shorter.', questionAr: 'أي وصف يناسب الشيء ذي الطول الأكبر؟', questionEn: 'Which word describes the object with greater length?', optionsAr: ['أطول', 'أقصر', 'أخف'], optionsEn: ['Longer', 'Shorter', 'Lighter'], correctIndex: 0 },
  { unit: 5, page: 78, titleAr: 'الوزن: الأثقل والأخف', titleEn: 'Weight: Heavier and Lighter', focusAr: 'يقارن أوزان أشياء مألوفة ويصنفها إلى أثقل وأخف ويرتبها.', focusEn: 'Compare familiar object weights, identify heavier and lighter objects, and order them.', questionAr: 'إذا كان الفيل أثقل من القطة، فأيهما أخف؟', questionEn: 'If an elephant is heavier than a cat, which is lighter?', optionsAr: ['القطة', 'الفيل', 'كلاهما متساويان'], optionsEn: ['The cat', 'The elephant', 'They are equal'], correctIndex: 0 },
  { unit: 5, page: 81, titleAr: 'الوقت: أنشطة الصباح والمساء', titleEn: 'Time: Morning and Evening Activities', focusAr: 'يميز أنشطة الصباح من أنشطة المساء، ويصف وقت القيام بأنشطة يومية مألوفة.', focusEn: 'Distinguish morning from evening activities and describe when familiar daily activities happen.', questionAr: 'متى يتناول الطفل وجبة الإفطار عادةً؟', questionEn: 'When does a child usually eat breakfast?', optionsAr: ['في الصباح', 'في منتصف الليل', 'وقت النوم فقط'], optionsEn: ['In the morning', 'At midnight', 'Only at bedtime'], correctIndex: 0 },
  { unit: 5, page: 83, titleAr: 'أيام الأسبوع', titleEn: 'Days of the Week', focusAr: 'يسمي أيام الأسبوع السبعة ويرتبها ويكمل أيامًا مفقودة في تسلسل الأسبوع.', focusEn: 'Name and order the seven days of the week and complete missing days in a sequence.', questionAr: 'أي يوم يأتي بعد الأحد؟', questionEn: 'Which day comes after Sunday?', optionsAr: ['الاثنين', 'الجمعة', 'السبت'], optionsEn: ['Monday', 'Friday', 'Saturday'], correctIndex: 0 }
];

export const SUDAN_PRIMARY_MATH_G1_TABLE_OF_CONTENTS = lessons.map((lesson, index) => ({
  lessonNumber: index + 1,
  unit: lesson.unit,
  page: lesson.page,
  titleAr: lesson.titleAr,
  titleEn: lesson.titleEn
}));

export const SUDAN_PRIMARY_MATH_G1_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const id = `sd-primary-math-g1-${order}`;
  const unit = SUDAN_PRIMARY_MATH_G1_BOOK.units[lesson.unit - 1];
  return {
    id,
    order,
    titleAr: `الوحدة ${lesson.unit}، الدرس ${lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1}: ${lesson.titleAr}`,
    titleEn: `Unit ${lesson.unit}, Lesson ${lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1}: ${lesson.titleEn}`,
    subtitleAr: `الرياضيات — الصف الأول الأساسي — ${unit.titleAr}`,
    subtitleEn: `Grade 1 Mathematics — ${unit.titleEn}`,
    descriptionAr: lesson.focusAr,
    descriptionEn: lesson.focusEn,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SD',
    subject: 'PRIMARY_MATH',
    gradeLevel: 'G1',
    educationType: 'PUBLIC',
    gradeLevelNameAr: 'الصف الأول الابتدائي — جمهورية السودان',
    gradeLevelNameEn: 'Grade 1 Primary — Republic of Sudan',
    termAr: 'كتاب الرياضيات للصف الأول',
    termEn: 'Grade 1 Mathematics textbook',
    unitTitleAr: unit.titleAr,
    unitTitleEn: unit.titleEn,
    lessonNumberAr: `الدرس ${lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1}`,
    lessonNumberEn: `Lesson ${lessons.slice(0, index).filter((item) => item.unit === lesson.unit).length + 1}`,
    warmupHookAr: `استعد لاستكشاف ${lesson.titleAr} باستخدام العد والأشياء من حولك.`,
    warmupHookEn: `Get ready to explore ${lesson.titleEn} using counting and familiar objects.`,
    learningOutcomesAr: [lesson.focusAr, 'يشرح طريقة الحل ويكتب العدد أو جملة العملية المناسبة.'],
    learningOutcomesEn: [lesson.focusEn, 'Explain a solution and write the appropriate number or operation sentence.'],
    keyConceptsAr: [lesson.titleAr, lesson.focusAr],
    keyConceptsEn: [lesson.titleEn, lesson.focusEn],
    summaryAr: lesson.focusAr,
    summaryEn: lesson.focusEn,
    sections: [{
      titleAr: lesson.titleAr,
      titleEn: lesson.titleEn,
      contentAr: `${lesson.focusAr}\n\nتدريب: مثل المسألة بأشياء معدودة، ثم اكتب الأعداد أو جملة العملية وتحقق من إجابتك.`,
      contentEn: `${lesson.focusEn}\n\nPractice: model the problem with countable objects, write the numbers or operation sentence, and check your answer.`
    }],
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
        correctIndex: lesson.correctIndex,
        conceptTestedAr: lesson.titleAr,
        conceptTestedEn: lesson.titleEn,
        explanationAr: `الإجابة الصحيحة: ${lesson.optionsAr[lesson.correctIndex]}.`,
        explanationEn: `Correct answer: ${lesson.optionsEn[lesson.correctIndex]}.`,
        difficulty: 'easy'
      }]
    },
    topicAr: `ص ${lesson.page}`,
    topicEn: `p. ${lesson.page}`
  };
});
