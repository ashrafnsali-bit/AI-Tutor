import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course: SudanMiddleGrade7Course = {
  key: 'science',
  subject: 'GENERAL_SCIENCE',
  titleAr: 'العلوم الطبيعية',
  titleEn: 'Natural Science',
  edition: 'الصف الأول المتوسط',
  units: [
    { titleAr: 'العلم والقياس', titleEn: 'Science and Measurement', firstPage: 1, lastPage: 24 },
    { titleAr: 'القوة والضغط', titleEn: 'Force and Pressure', firstPage: 25, lastPage: 55 },
    { titleAr: 'خواص المادة', titleEn: 'Properties of Matter', firstPage: 56, lastPage: 84 },
    { titleAr: 'تركيب الخلية', titleEn: 'Cell Structure', firstPage: 85, lastPage: 98 },
    { titleAr: 'الحيوانات غير الفقارية (اللافقاريات)', titleEn: 'Invertebrate Animals', firstPage: 99, lastPage: 120 },
    { titleAr: 'الكائنات الحية وبيئاتها', titleEn: 'Living Organisms and Their Environments', firstPage: 121, lastPage: 147 }
  ],
  lessons: [
    grade7Lesson(1, 1, 24, 'العلم والقياس', 'Science and Measurement', 'يستخدم المتعلم الملاحظة والقياس والوحدات المناسبة، وينظم خطوات الاستقصاء العلمي.', 'Use observation, measurement, and suitable units while organizing a scientific investigation.'),
    grade7Lesson(2, 25, 55, 'القوة والضغط', 'Force and Pressure', 'يفسر أثر القوة والضغط في الأجسام، ويستعمل أمثلة وتجارب بسيطة لوصف العلاقة بينهما.', 'Explain how force and pressure affect objects using simple examples and investigations.'),
    grade7Lesson(3, 56, 84, 'خواص المادة', 'Properties of Matter', 'يقارن خواص المواد ويصف التغيرات التي تطرأ عليها باستخدام الملاحظة والأدلة.', 'Compare material properties and describe changes using observations and evidence.'),
    grade7Lesson(4, 85, 98, 'تركيب الخلية', 'Cell Structure', 'يتعرف مكونات الخلية الأساسية ويربط تركيبها بوظائفها في الكائن الحي.', 'Identify basic cell structures and relate them to their functions in living organisms.'),
    grade7Lesson(5, 99, 120, 'الحيوانات غير الفقارية (اللافقاريات)', 'Invertebrate Animals', 'يصنف أمثلة من اللافقاريات وفق خصائصها العامة وتراكيب أجسامها.', 'Classify examples of invertebrates by their general characteristics and body structures.'),
    grade7Lesson(6, 121, 147, 'الكائنات الحية وبيئاتها', 'Living Organisms and Their Environments', 'يفسر علاقات الكائنات الحية ببيئاتها وكيف تؤثر العوامل البيئية في بقائها.', 'Explain relationships between living organisms and their environments and how environmental factors affect survival.')
  ]
};

export const SUDAN_MIDDLE_SCIENCE_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_SCIENCE_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_SCIENCE_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
