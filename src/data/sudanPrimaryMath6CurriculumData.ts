import type { SudanPrimaryGrade6Course } from './sudanPrimaryGrade6CourseBuilder';
import {
  createSudanPrimaryGrade6Book,
  createSudanPrimaryGrade6Lectures,
  createSudanPrimaryGrade6TableOfContents,
  grade6Lesson
} from './sudanPrimaryGrade6CourseBuilder';

const course: SudanPrimaryGrade6Course = {
  key: 'math',
  subject: 'PRIMARY_MATH',
  titleAr: 'الرياضيات',
  titleEn: 'Mathematics',
  edition: 'الصف السادس الابتدائي — 2023م',
  units: [
    { titleAr: 'المجموعات', titleEn: 'Sets', firstPage: 5, lastPage: 38 },
    { titleAr: 'مجموعة الأعداد الصحيحة والعمليات عليها', titleEn: 'Integers and Operations', firstPage: 39, lastPage: 56 },
    { titleAr: 'النسبة المئوية والعمليات عليها', titleEn: 'Percentages and Operations', firstPage: 57, lastPage: 89 },
    { titleAr: 'التعابير الجبرية والعمليات عليها', titleEn: 'Algebraic Expressions and Operations', firstPage: 90, lastPage: 117 },
    { titleAr: 'العمليات على المجموعات', titleEn: 'Operations on Sets', firstPage: 118, lastPage: 139 },
    { titleAr: 'مساحة الأشكال الهندسية', titleEn: 'Areas of Geometric Shapes', firstPage: 140, lastPage: 153 },
    { titleAr: 'نظرية فيثاغورس والمثلثات وتطابقها', titleEn: 'Pythagorean Theorem, Triangles, and Congruence', firstPage: 154, lastPage: 217 }
  ],
  lessons: [
    grade6Lesson(1, 6, 13, 'مفهوم المجموعة والعنصر', 'Sets and Their Elements', 'المجموعة تجمع محدد من عناصر تشترك في وصف أو خاصية، والعنصر فرد ينتمي إلى هذه المجموعة.', 'A set is a clearly defined collection of elements sharing a description or property; an element belongs to that collection.'),
    grade6Lesson(1, 14, 23, 'تمثيل المجموعات ووصفها', 'Describing and Representing Sets', 'يمكن وصف المجموعة بالكلمات أو بذكر عناصرها أو باستخدام مخطط، وينبغي أن تكون قاعدة الانتماء واضحة.', 'A set can be described in words, by listing its elements, or with a diagram; its membership rule should be clear.'),
    grade6Lesson(1, 24, 38, 'المجموعات الجزئية والعلاقات بينها', 'Subsets and Relations Between Sets', 'تقارن العلاقات بين مجموعتين من خلال عناصرهما، وتوضح المجموعة الجزئية أن كل عنصر فيها ينتمي أيضاً إلى المجموعة الأكبر.', 'Compare sets by their elements; a subset contains only elements that also belong to a larger set.'),
    grade6Lesson(2, 39, 44, 'الأعداد الصحيحة وتمثيلها', 'Integers and Their Representation', 'تشمل الأعداد الصحيحة الأعداد الموجبة والسالبة والصفر، ويمكن تمثيلها وترتيبها على خط الأعداد.', 'Integers include positive and negative numbers and zero; represent and order them on a number line.'),
    grade6Lesson(2, 45, 50, 'جمع الأعداد الصحيحة وطرحها', 'Adding and Subtracting Integers', 'تعتمد عمليات الجمع والطرح على إشارات الأعداد وقيمها، ويساعد خط الأعداد على تفسير اتجاه الحركة.', 'Addition and subtraction depend on number signs and values; a number line helps explain the direction of movement.'),
    grade6Lesson(2, 51, 56, 'ضرب الأعداد الصحيحة وقسمتها', 'Multiplying and Dividing Integers', 'تحدد إشارات العوامل أو المقسوم والمقسوم عليه إشارة الناتج، ثم تحسب القيمة العددية للعملية.', 'Use the signs of the factors or dividend and divisor to determine the answer’s sign, then calculate its value.'),
    grade6Lesson(3, 57, 65, 'معنى النسبة المئوية', 'Understanding Percentages', 'تعبر النسبة المئوية عن عدد الأجزاء من كل مئة، ويمكن تمثيلها بكسر أو عدد عشري.', 'A percentage describes parts per hundred and can also be represented as a fraction or decimal.'),
    grade6Lesson(3, 66, 77, 'حساب النسبة المئوية من كمية', 'Finding a Percentage of a Quantity', 'لحساب نسبة من كمية، تحول النسبة إلى كسر أو عدد عشري ثم تضرب في الكمية الأصلية.', 'To find a percentage of a quantity, convert it to a fraction or decimal and multiply by the original quantity.'),
    grade6Lesson(3, 78, 89, 'تطبيقات النسبة المئوية', 'Applying Percentages', 'تستخدم النسبة المئوية في مواقف مثل المقارنة والزيادة والنقصان، مع التحقق من أن الناتج يناسب السياق.', 'Use percentages in comparisons, increases, and decreases, then check that the result fits the situation.'),
    grade6Lesson(4, 90, 98, 'بناء التعبير الجبري', 'Forming an Algebraic Expression', 'يجمع التعبير الجبري أعداداً ومتغيرات وعمليات، ويساعد المتغير على تمثيل قيمة مجهولة أو متغيرة.', 'An algebraic expression combines numbers, variables, and operations; a variable can represent an unknown or changing value.'),
    grade6Lesson(4, 99, 108, 'تبسيط التعابير الجبرية', 'Simplifying Algebraic Expressions', 'تجمع الحدود المتشابهة، مع المحافظة على معاملات المتغيرات وإشاراتها.', 'Combine like terms while keeping variable coefficients and signs correct.'),
    grade6Lesson(4, 109, 117, 'العمليات على التعابير الجبرية', 'Operations with Algebraic Expressions', 'ينفذ المتعلم العمليات على التعابير خطوة خطوة، ويراجع ترتيبها ومعنى كل حد.', 'Perform operations on expressions step by step, checking their order and the meaning of each term.'),
    grade6Lesson(5, 118, 126, 'اتحاد المجموعات وتقاطعها', 'Union and Intersection of Sets', 'يضم الاتحاد عناصر المجموعتين، بينما يضم التقاطع العناصر المشتركة بينهما.', 'The union contains elements from either set; the intersection contains only elements shared by both.'),
    grade6Lesson(5, 127, 133, 'الفرق بين مجموعتين', 'Difference Between Sets', 'تضم مجموعة الفرق العناصر الموجودة في المجموعة الأولى وغير الموجودة في الثانية.', 'The difference contains elements in the first set that are not in the second.'),
    grade6Lesson(5, 134, 139, 'تمثيل عمليات المجموعات', 'Representing Set Operations', 'تساعد المخططات على إظهار الاتحاد والتقاطع والفرق، ويُراجع الحل بمقارنة المناطق والعناصر.', 'Diagrams show unions, intersections, and differences; check a result by comparing regions and elements.'),
    grade6Lesson(6, 140, 146, 'مساحة المستطيل والمربع', 'Area of Rectangles and Squares', 'تحسب مساحة المستطيل بضرب الطول في العرض، ومساحة المربع بتربيع طول ضلعه.', 'Find a rectangle’s area by multiplying length by width and a square’s area by squaring its side.'),
    grade6Lesson(6, 147, 153, 'مساحة المثلث والأشكال المركبة', 'Area of Triangles and Composite Shapes', 'ترتبط مساحة المثلث بنصف حاصل ضرب القاعدة في الارتفاع، ويمكن تقسيم الشكل المركب إلى أشكال أبسط.', 'A triangle’s area is half the product of its base and height; split a composite shape into simpler parts.'),
    grade6Lesson(7, 154, 166, 'نظرية فيثاغورس', 'The Pythagorean Theorem', 'في المثلث القائم، يساوي مربع الوتر مجموع مربعي الضلعين القائمين، وتستخدم العلاقة لإيجاد طول مجهول.', 'In a right triangle, the square of the hypotenuse equals the sum of the squares of the other sides; use this to find an unknown length.'),
    grade6Lesson(7, 167, 184, 'أنواع المثلثات وخصائصها', 'Types and Properties of Triangles', 'تصنف المثلثات بحسب أطوال أضلاعها أو زواياها، وتساعد خصائصها على وصف الشكل والتحقق من العلاقات.', 'Classify triangles by side lengths or angles and use their properties to describe and check relationships.'),
    grade6Lesson(7, 185, 201, 'تطابق المثلثات', 'Congruent Triangles', 'يتطابق المثلثان إذا تساوت أضلاعهما وزواياهما المتناظرة، وتساعد المطابقة على استنتاج أطوال أو زوايا مجهولة.', 'Triangles are congruent when corresponding sides and angles match; congruence helps determine unknown lengths or angles.'),
    grade6Lesson(7, 202, 217, 'تطبيقات هندسية ومراجعة', 'Geometry Applications and Review', 'يوظف المتعلم خصائص المثلثات ونظرية فيثاغورس في مسائل، ويرسم شكلاً مساعداً قبل التحقق من الناتج.', 'Apply triangle properties and the Pythagorean theorem to problems; sketch a helpful figure before checking the result.')
  ]
};

export const SUDAN_PRIMARY_MATH_G6_BOOK = createSudanPrimaryGrade6Book(course);
export const SUDAN_PRIMARY_MATH_G6_TABLE_OF_CONTENTS = createSudanPrimaryGrade6TableOfContents(course);
export const SUDAN_PRIMARY_MATH_G6_LECTURES = createSudanPrimaryGrade6Lectures(course);
