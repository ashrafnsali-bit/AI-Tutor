import type { SudanPrimaryGrade6Course } from './sudanPrimaryGrade6CourseBuilder';
import {
  createSudanPrimaryGrade6Book,
  createSudanPrimaryGrade6Lectures,
  createSudanPrimaryGrade6TableOfContents,
  grade6Lesson
} from './sudanPrimaryGrade6CourseBuilder';

const course: SudanPrimaryGrade6Course = {
  key: 'history',
  subject: 'HISTORY',
  titleAr: 'التاريخ',
  titleEn: 'History',
  edition: 'الصف السادس الابتدائي',
  units: [
    { titleAr: 'من تاريخ السودان (1821–1885م)', titleEn: 'From the History of Sudan (1821–1885)', firstPage: 6, lastPage: 25 },
    { titleAr: 'من التاريخ الإسلامي: الدولة العباسية', titleEn: 'From Islamic History: The Abbasid State', firstPage: 26, lastPage: 39 },
    { titleAr: 'من تاريخ إفريقيا', titleEn: 'From the History of Africa', firstPage: 40, lastPage: 55 },
    { titleAr: 'النهضة الأوروبية', titleEn: 'The European Renaissance', firstPage: 56, lastPage: 68 },
    { titleAr: 'التربية الوطنية', titleEn: 'Civic Education', firstPage: 69, lastPage: 80 }
  ],
  lessons: [
    grade6Lesson(1, 8, 8, 'الغزو التركي المصري للسودان', 'The Turco-Egyptian Conquest of Sudan', 'يتعرف المتعلم إلى الغزو التركي المصري للسودان، ويضعه في سياقه الزمني.', 'Learn about the Turco-Egyptian conquest of Sudan and place it in its historical timeline.'),
    grade6Lesson(1, 11, 11, 'الحكم والإدارة في العهد التركي المصري', 'Government and Administration Under Turco-Egyptian Rule', 'يستكشف المتعلم جوانب الحكم والإدارة في السودان خلال العهد التركي المصري.', 'Explore aspects of government and administration in Sudan under Turco-Egyptian rule.'),
    grade6Lesson(1, 15, 15, 'السودان في عهد خديوي محمد علي (1848–1883م)', 'Sudan Under Khedive Muhammad Ali (1848–1883)', 'يتابع المتعلم فترة حكم محمد علي كما يعرضها الدرس، ويرتب أبرز معلوماتها زمنياً.', 'Study the period of Muhammad Ali’s rule as presented in the lesson and organize its information chronologically.'),
    grade6Lesson(1, 18, 18, 'عهد الخديوي إسماعيل في السودان (1863–1879م)', 'The Rule of Khedive Ismail in Sudan (1863–1879)', 'يتعرف المتعلم إلى عهد الخديوي إسماعيل في السودان ويحدد موقعه ضمن تسلسل الأحداث.', 'Learn about Khedive Ismail’s rule in Sudan and place it in the sequence of events.'),
    grade6Lesson(1, 21, 21, 'حكم غردون في السودان (1877–1879م)', 'Gordon’s Rule in Sudan (1877–1879)', 'يدرس المتعلم فترة حكم غردون والوقائع المرتبطة بها في تاريخ السودان.', 'Study Gordon’s period of rule and the events associated with it in Sudanese history.'),
    grade6Lesson(2, 28, 28, 'قيام الدولة العباسية (132–750هـ / 750–1258م)', 'The Rise of the Abbasid State (132–750 AH / 750–1258 CE)', 'يتعرف المتعلم إلى قيام الدولة العباسية ويرتب الحدث ضمن تاريخ الدولة الإسلامية.', 'Learn about the rise of the Abbasid state and place it within Islamic history.'),
    grade6Lesson(2, 30, 30, 'خلفاء الدولة العباسية', 'The Abbasid Caliphs', 'يتعرف المتعلم إلى خلفاء الدولة العباسية ويلاحظ تعاقبهم في الحكم.', 'Learn about Abbasid caliphs and observe the succession of rulers.'),
    grade6Lesson(2, 34, 34, 'فتوحات الدولة العباسية', 'The Abbasid Conquests', 'يدرس المتعلم الفتوحات المرتبطة بالدولة العباسية ومواقعها كما يوردها الدرس.', 'Study the conquests associated with the Abbasid state and the places described in the lesson.'),
    grade6Lesson(2, 36, 36, 'ضعف الدولة العباسية وسقوطها', 'The Decline and Fall of the Abbasid State', 'يتتبع المتعلم مظاهر الضعف والأحداث التي سبقت سقوط الدولة العباسية.', 'Trace signs of decline and the events that preceded the Abbasid state’s fall.'),
    grade6Lesson(3, 42, 42, 'ظهور الدول المستقلة في شمال إفريقيا', 'The Rise of Independent States in North Africa', 'يتعرف المتعلم إلى ظهور دول مستقلة في شمال إفريقيا ويحدد مواضعها على الخريطة.', 'Learn about independent states in North Africa and locate them on a map.'),
    grade6Lesson(3, 45, 45, 'الدولة الفاطمية', 'The Fatimid State', 'يدرس المتعلم نشأة الدولة الفاطمية ومكانها ضمن تاريخ إفريقيا.', 'Study the Fatimid state’s beginnings and its place in African history.'),
    grade6Lesson(3, 47, 47, 'نماذج للحضارات الإسلامية في شرق إفريقيا', 'Examples of Islamic Civilizations in East Africa', 'يتعرف المتعلم إلى نماذج من الحضارات الإسلامية في شرق إفريقيا وخصائصها.', 'Explore examples and features of Islamic civilizations in East Africa.'),
    grade6Lesson(3, 49, 49, 'نماذج للممالك الإسلامية في السودان الأوسط والغربي', 'Examples of Islamic Kingdoms in Central and Western Sudan', 'يستكشف المتعلم نماذج للممالك الإسلامية في السودان الأوسط والغربي ومواقعها.', 'Explore examples and locations of Islamic kingdoms in central and western Sudan.'),
    grade6Lesson(4, 58, 58, 'النهضة الأوروبية', 'The European Renaissance', 'يتعرف المتعلم إلى النهضة الأوروبية وما ارتبط بها من تغيرات ثقافية وفكرية.', 'Learn about the European Renaissance and the cultural and intellectual changes associated with it.'),
    grade6Lesson(4, 61, 61, 'حركة الكشوف الجغرافية الأوروبية', 'European Geographical Discoveries', 'يدرس المتعلم حركة الكشوف الجغرافية الأوروبية ودوافعها وآثارها كما يعرضها الدرس.', 'Study European geographical discoveries, their motives, and effects as presented in the lesson.'),
    grade6Lesson(4, 63, 63, 'الثورة الصناعية', 'The Industrial Revolution', 'يتعرف المتعلم إلى الثورة الصناعية والتغيرات التي أحدثتها في الإنتاج والحياة.', 'Learn about the Industrial Revolution and changes it brought to production and life.'),
    grade6Lesson(5, 71, 71, 'دولة السودان', 'The State of Sudan', 'يتعرف المتعلم إلى دولة السودان بوصفها وطناً ومجتمعاً ومؤسسات.', 'Learn about the State of Sudan as a homeland, society, and set of institutions.'),
    grade6Lesson(5, 73, 73, 'مقومات الدولة', 'Elements of a State', 'يحدد المتعلم المقومات التي تقوم عليها الدولة ويفهم دور كل منها.', 'Identify the elements that make up a state and understand their roles.'),
    grade6Lesson(5, 75, 75, 'ميزات ومهام الدولة', 'Characteristics and Responsibilities of the State', 'يتعرف المتعلم إلى خصائص الدولة ومهامها في تنظيم شؤون المجتمع.', 'Explore the characteristics and responsibilities of a state in organizing society.'),
    grade6Lesson(5, 77, 77, 'حقوق وواجبات المواطنة', 'Citizenship: Rights and Responsibilities', 'يميز المتعلم بين حقوق المواطنة وواجباتها، ويبين كيف يسهم الالتزام بها في المجتمع.', 'Distinguish citizenship rights from responsibilities and explain how fulfilling them supports society.')
  ]
};

export const SUDAN_PRIMARY_HISTORY_G6_BOOK = createSudanPrimaryGrade6Book(course);
export const SUDAN_PRIMARY_HISTORY_G6_TABLE_OF_CONTENTS = createSudanPrimaryGrade6TableOfContents(course);
export const SUDAN_PRIMARY_HISTORY_G6_LECTURES = createSudanPrimaryGrade6Lectures(course);
