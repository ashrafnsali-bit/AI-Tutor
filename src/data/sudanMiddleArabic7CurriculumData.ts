import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course: SudanMiddleGrade7Course = {
  key: 'arabic',
  subject: 'ARABIC_LANG',
  titleAr: 'اللغة العربية',
  titleEn: 'Arabic Language',
  edition: 'الصف الأول المتوسط',
  units: [
    { titleAr: 'الوحدة الأولى', titleEn: 'Unit 1', firstPage: 1, lastPage: 12 },
    { titleAr: 'الوحدة الثانية', titleEn: 'Unit 2', firstPage: 13, lastPage: 27 },
    { titleAr: 'الوحدة الثالثة', titleEn: 'Unit 3', firstPage: 28, lastPage: 39 },
    { titleAr: 'الوحدة الرابعة', titleEn: 'Unit 4', firstPage: 40, lastPage: 49 },
    { titleAr: 'الوحدة الخامسة', titleEn: 'Unit 5', firstPage: 50, lastPage: 58 },
    { titleAr: 'الوحدة السادسة', titleEn: 'Unit 6', firstPage: 59, lastPage: 73 },
    { titleAr: 'الوحدة السابعة', titleEn: 'Unit 7', firstPage: 74, lastPage: 86 },
    { titleAr: 'الوحدة الثامنة', titleEn: 'Unit 8', firstPage: 87, lastPage: 101 },
    { titleAr: 'الوحدة التاسعة', titleEn: 'Unit 9', firstPage: 102, lastPage: 118 },
    { titleAr: 'الوحدة العاشرة', titleEn: 'Unit 10', firstPage: 119, lastPage: 134 },
    { titleAr: 'الوحدة الحادية عشرة', titleEn: 'Unit 11', firstPage: 135, lastPage: 146 },
    { titleAr: 'الوحدة الثانية عشرة', titleEn: 'Unit 12', firstPage: 147, lastPage: 162 },
    { titleAr: 'الوحدة الثالثة عشرة', titleEn: 'Unit 13', firstPage: 163, lastPage: 177 },
    { titleAr: 'الوحدة الرابعة عشرة', titleEn: 'Unit 14', firstPage: 178, lastPage: 190 },
    { titleAr: 'الوحدة الخامسة عشرة', titleEn: 'Unit 15', firstPage: 191, lastPage: 204 }
  ],
  lessons: [
    grade7Lesson(1, 2, 12, 'الكتاب', 'The Book', 'يقرأ المتعلم نصًا عن قيمة الكتاب، ويستدل من أفكاره على دور القراءة في التعلم والمعرفة.', 'Read about the value of books and use the text’s ideas to explain how reading supports learning and knowledge.'),
    grade7Lesson(2, 14, 27, 'السيدة ملكة الدار', 'Malika al-Dar', 'يتتبع المتعلم سيرة رائدة سودانية في القصة، ويستخرج معلومات صريحة ودلالات من النص.', 'Explore the life of a Sudanese pioneer in fiction and identify explicit information and meaning in a reading.'),
    grade7Lesson(3, 29, 39, 'الإنسان الآلي', 'The Robot', 'يفهم المتعلم نصًا معلوماتيًا عن الإنسان الآلي، ويميز بين تطبيقاته وفوائده.', 'Read an informational text about robots and distinguish their applications and benefits.'),
    grade7Lesson(4, 41, 49, 'عائشة أم المؤمنين', 'Aisha, Mother of the Believers', 'يستخلص المتعلم صفات علمية وأخلاقية من سيرة أم المؤمنين عائشة رضي الله عنها.', 'Identify qualities of knowledge and character from the life of Aisha, Mother of the Believers.'),
    grade7Lesson(5, 51, 58, 'الفنان التشكيلي عثمان وقيع الله', 'The Visual Artist Osman Waqiullah', 'يتعرف المتعلم سيرة فنان سوداني وأثر الفن والخط في التعبير الثقافي.', 'Explore a Sudanese artist’s life and the role of art and calligraphy in cultural expression.'),
    grade7Lesson(6, 60, 73, 'التلوث الضوضائي', 'Noise Pollution', 'يفسر المتعلم مفهوم التلوث الضوضائي وآثاره، ويقترح سلوكًا يحد منه.', 'Explain noise pollution and its effects, then suggest ways to reduce it.'),
    grade7Lesson(7, 75, 86, 'مناظر من مسرحية تاجر البندقية', 'Scenes from The Merchant of Venice', 'يقرأ المتعلم مشاهد مسرحية ويميز الحوار والشخصيات وتسلسل الحدث.', 'Read dramatic scenes and identify dialogue, characters, and sequence of events.'),
    grade7Lesson(8, 88, 101, 'أثر الموسيقا الوطنية في حياة الشعوب', 'The Influence of National Music on People', 'يستكشف المتعلم أثر الموسيقا والأناشيد الوطنية في الذاكرة والوجدان الجماعي.', 'Explore how national music and songs influence shared memory and identity.'),
    grade7Lesson(9, 103, 118, 'آخر الدموع', 'The Last Tears', 'يتابع المتعلم أحداث قصة ويستنتج دوافع الشخصيات والعبرة من مسارها.', 'Follow a short story and infer characters’ motives and a lesson from its events.'),
    grade7Lesson(10, 120, 134, 'الثور في مستودع الخزف', 'The Bull in the Pottery Store', 'يفهم المتعلم أحداث حكاية ويستدل على نتائج التصرف غير المتبصر.', 'Understand a tale and infer the consequences of careless actions.'),
    grade7Lesson(11, 136, 146, 'من تاريخ الصحافة السودانية', 'From the History of the Sudanese Press', 'يتعرف المتعلم نشأة الصحافة السودانية وبعض أدوارها في المجتمع.', 'Explore the development of the Sudanese press and some of its roles in society.'),
    grade7Lesson(12, 148, 162, 'يومان من أيام الرسول ﷺ', 'Two Days from the Prophet’s Life', 'يقرأ المتعلم سردًا تاريخيًا ويحدد الأحداث والقيم التي يعرضها.', 'Read a historical narrative and identify its events and values.'),
    grade7Lesson(13, 164, 177, 'أهمية التدوين والتسجيل في حياتنا', 'The Importance of Writing and Recording', 'يشرح المتعلم أهمية التدوين والتسجيل في حفظ المعلومات وتنظيم الحياة.', 'Explain how writing and recording help preserve information and organize daily life.'),
    grade7Lesson(14, 179, 190, 'من أدب الرحلات', 'Travel Writing', 'يتعرف المتعلم خصائص أدب الرحلات ويستخرج أوصاف المكان وملاحظات الرحالة.', 'Explore travel writing and identify descriptions of places and a traveller’s observations.'),
    grade7Lesson(15, 192, 204, 'وفود الشعراء على عمر بن عبد العزيز', 'Poets Visiting Umar ibn Abd al-Aziz', 'يقرأ المتعلم نصًا أدبيًا عن الشعراء ويفهم سياقه وشخصياته ومفرداته.', 'Read a literary account about poets and understand its context, people, and vocabulary.')
  ]
};

export const SUDAN_MIDDLE_ARABIC_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_ARABIC_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_ARABIC_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
