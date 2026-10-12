import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course: SudanMiddleGrade7Course = {
  key: 'math',
  subject: 'MATH',
  titleAr: 'الرياضيات',
  titleEn: 'Mathematics',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'مجموعة الأعداد النسبية', titleEn: 'The Set of Rational Numbers', firstPage: 2, lastPage: 32 },
    { titleAr: 'الجمل الرياضية والمعادلات', titleEn: 'Mathematical Sentences and Equations', firstPage: 33, lastPage: 48 },
    { titleAr: 'المضلعات', titleEn: 'Polygons', firstPage: 49, lastPage: 59 },
    { titleAr: 'الزوج المرتب والعلاقات', titleEn: 'Ordered Pairs and Relations', firstPage: 60, lastPage: 78 },
    { titleAr: 'التكافؤ', titleEn: 'Equivalence', firstPage: 79, lastPage: 91 },
    { titleAr: 'النظام الثنائي', titleEn: 'The Binary System', firstPage: 92, lastPage: 104 },
    { titleAr: 'التشابه', titleEn: 'Similarity', firstPage: 105, lastPage: 114 },
    { titleAr: 'الإحصاء', titleEn: 'Statistics', firstPage: 115, lastPage: 140 }
  ],
  lessons: [
    grade7Lesson(1, 2, 32, 'مجموعة الأعداد النسبية', 'The Set of Rational Numbers', 'يمثل الأعداد النسبية ويقارن بينها ويجري العمليات المناسبة عليها.', 'Represent and compare rational numbers and perform appropriate operations.'),
    grade7Lesson(2, 33, 48, 'الجمل الرياضية والمعادلات', 'Mathematical Sentences and Equations', 'يحول العبارات إلى جمل رياضية ويستخدم المعادلات لتمثيل المسائل وحلها.', 'Translate statements into mathematical sentences and use equations to represent and solve problems.'),
    grade7Lesson(3, 49, 59, 'المضلعات', 'Polygons', 'يصنف المضلعات ويصف خصائصها وعلاقات الأضلاع والزوايا فيها.', 'Classify polygons and describe their properties and relationships between sides and angles.'),
    grade7Lesson(4, 60, 78, 'الزوج المرتب والعلاقات', 'Ordered Pairs and Relations', 'يمثل الأزواج المرتبة والعلاقات على المستوى الإحداثي ويقرأها.', 'Represent and interpret ordered pairs and relations on the coordinate plane.'),
    grade7Lesson(5, 79, 91, 'التكافؤ', 'Equivalence', 'يستكشف التكافؤ بين العبارات أو المقادير ويبرر اختيار التمثيل المكافئ.', 'Explore equivalence between expressions or quantities and justify equivalent representations.'),
    grade7Lesson(6, 92, 104, 'النظام الثنائي', 'The Binary System', 'يمثل الأعداد بالنظام الثنائي ويتعرف علاقته بتمثيل المعلومات رقميًا.', 'Represent numbers in binary and explore its use in digital information.'),
    grade7Lesson(7, 105, 114, 'التشابه', 'Similarity', 'يتعرف الأشكال المتشابهة ويستخدم تناسب الأبعاد لوصفها وحل مسائل عليها.', 'Recognize similar shapes and use proportional dimensions to describe and solve problems.'),
    grade7Lesson(8, 115, 140, 'الإحصاء', 'Statistics', 'ينظم البيانات ويمثلها ويقرأ النتائج ليستخلص وصفًا مناسبًا لمجموعة البيانات.', 'Organize and represent data, then interpret results to describe a data set.')
  ]
};

export const SUDAN_MIDDLE_MATH_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_MATH_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_MATH_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
