import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course: SudanMiddleGrade7Course = {
  key: 'history',
  subject: 'HISTORY',
  titleAr: 'التاريخ',
  titleEn: 'History',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'من تاريخ السودان', titleEn: 'Sudanese History', firstPage: 7, lastPage: 40 },
    { titleAr: 'بناء الدولة الإسلامية', titleEn: 'The Formation of the Islamic State', firstPage: 42, lastPage: 76 },
    { titleAr: 'من تاريخ إفريقيا', titleEn: 'African History', firstPage: 78, lastPage: 93 },
    { titleAr: 'حضارات أوروبا القديمة', titleEn: 'Ancient European Civilizations', firstPage: 94, lastPage: 117 }
  ],
  lessons: [
    grade7Lesson(1, 9, 10, 'حضارة الإنسان في عصور ما قبل التاريخ', 'Human Civilization in Prehistory', 'يتعرف المتعلم شواهد حياة الإنسان القديم والتغيرات التي طرأت على أساليب معيشته.', 'Explore evidence of early human life and changes in ways of living.'),
    grade7Lesson(1, 11, 14, 'السودان في العصور الحجرية', 'Sudan in the Stone Ages', 'يستدل من الآثار على حياة الجماعات البشرية في السودان خلال العصور الحجرية.', 'Use archaeological evidence to learn about communities in Sudan during the Stone Ages.'),
    grade7Lesson(1, 15, 18, 'السودان في عصر المجموعات الحضارية', 'Sudan in the Age of Cultural Groups', 'يتتبع نشوء المجموعات الحضارية المبكرة في السودان وصلتها ببيئتها.', 'Trace the development of early cultural groups in Sudan and their relationship to the environment.'),
    grade7Lesson(1, 19, 21, 'حضارة كرمة', 'The Kerma Civilization', 'يصف ملامح حضارة كرمة ومكانتها في تاريخ السودان القديم.', 'Describe features of the Kerma civilization and its place in ancient Sudanese history.'),
    grade7Lesson(1, 22, 23, 'مملكتا كوش', 'The Kingdoms of Kush', 'يميز بين مملكتي كوش ويتعرف امتداد حضارتهما في السودان القديم.', 'Distinguish the Kushite kingdoms and explore their legacy in ancient Sudan.'),
    grade7Lesson(1, 24, 26, 'أهم ملوك نبتة (أ)', 'Important Kings of Napata (A)', 'يتعرف نماذج من ملوك نبتة وأدوارهم في تاريخ المملكة.', 'Explore selected Napatan kings and their roles in the kingdom’s history.'),
    grade7Lesson(1, 27, 30, 'أهم ملوك نبتة (ب)', 'Important Kings of Napata (B)', 'يستكمل دراسة ملوك نبتة ويربط أعمالهم بتطور الدولة.', 'Continue studying Napatan kings and relate their actions to the development of the state.'),
    grade7Lesson(1, 31, 32, 'مملكة مروي: حضارة مروي (أ)', 'The Kingdom of Meroe: Meroitic Civilization (A)', 'يتعرف ملامح حضارة مروي ونشأتها ومظاهر ازدهارها.', 'Explore the beginnings and features of Meroitic civilization.'),
    grade7Lesson(1, 33, 34, 'مملكة مروي: حضارة مروي (ب)', 'The Kingdom of Meroe: Meroitic Civilization (B)', 'يستكمل دراسة حضارة مروي وأثرها في تاريخ السودان.', 'Continue exploring Meroitic civilization and its significance in Sudanese history.'),
    grade7Lesson(1, 35, 38, 'دخول المسيحية إلى السودان', 'The Arrival of Christianity in Sudan', 'يتتبع انتشار المسيحية في السودان وآثارها التاريخية والثقافية.', 'Trace the spread of Christianity in Sudan and its historical and cultural effects.'),
    grade7Lesson(2, 44, 45, 'جغرافية شبه الجزيرة العربية', 'The Geography of the Arabian Peninsula', 'يحدد موقع شبه الجزيرة العربية وخصائصها الجغرافية المؤثرة في تاريخها.', 'Locate the Arabian Peninsula and describe geographical features that shaped its history.'),
    grade7Lesson(2, 46, 47, 'ممالك الجنوب', 'The Southern Kingdoms', 'يتعرف ممالك جنوب شبه الجزيرة العربية وأهم ملامحها.', 'Explore the southern kingdoms of the Arabian Peninsula and their main features.'),
    grade7Lesson(2, 48, 50, 'ممالك الشمال', 'The Northern Kingdoms', 'يقارن بين ممالك الشمال وممالك الجنوب في بيئتها ومظاهرها التاريخية.', 'Compare the northern kingdoms with those in the south in setting and historical features.'),
    grade7Lesson(2, 51, 53, 'حالة المجتمع العربي قبل الإسلام', 'Arab Society before Islam', 'يصف جوانب من الحياة الاجتماعية والاقتصادية في شبه الجزيرة قبل الإسلام.', 'Describe aspects of social and economic life in the Arabian Peninsula before Islam.'),
    grade7Lesson(2, 54, 62, 'الدولة الإسلامية في عهد النبي ﷺ', 'The Islamic State during the Prophet’s Life', 'يتتبع مراحل قيام الدولة في المدينة وتنظيم المجتمع والعلاقات.', 'Trace the formation of the state in Medina and the organization of its community and relationships.'),
    grade7Lesson(2, 63, 65, 'الدولة الإسلامية في عهد الخلفاء الراشدين', 'The Islamic State under the Rightly Guided Caliphs', 'يتعرف تطور الدولة الإسلامية في عهد الخلفاء الراشدين.', 'Explore the development of the Islamic state under the Rightly Guided Caliphs.'),
    grade7Lesson(2, 66, 67, 'المشكلات التي واجهت الدولة في عهد الخلفاء الراشدين', 'Challenges under the Rightly Guided Caliphs', 'يحدد تحديات واجهت الدولة ويشرح استجاباتها التاريخية.', 'Identify challenges faced by the state and explain historical responses.'),
    grade7Lesson(2, 68, 69, 'النمو الإداري للدولة في عهد الخلفاء الراشدين', 'Administrative Development under the Rightly Guided Caliphs', 'يتعرف تطور إدارة الدولة ومؤسساتها في هذه المرحلة.', 'Explore the development of state administration and institutions during this period.'),
    grade7Lesson(2, 70, 73, 'الفتوحات في عهد الخلفاء الراشدين', 'Conquests under the Rightly Guided Caliphs', 'يتتبع اتساع الدولة في تلك المرحلة ويضع الأحداث في تسلسلها التاريخي.', 'Trace the state’s expansion during this period and sequence key events historically.'),
    grade7Lesson(3, 80, 81, 'إفريقيا: البيئة الطبيعية', 'Africa: The Natural Environment', 'يصف الخصائص الطبيعية للقارة الإفريقية وعلاقتها باستقرار السكان.', 'Describe Africa’s natural environment and its relationship to human settlement.'),
    grade7Lesson(3, 82, 84, 'سكان القارة الإفريقية', 'The People of Africa', 'يتعرف تنوع السكان وتوزيعهم في القارة الإفريقية.', 'Explore the diversity and distribution of people across Africa.'),
    grade7Lesson(3, 85, 88, 'الحضارة المصرية القديمة', 'Ancient Egyptian Civilization', 'يستعرض جوانب من الحضارة المصرية القديمة ومصادر التعرف إليها.', 'Explore aspects of ancient Egyptian civilization and sources used to study it.'),
    grade7Lesson(3, 89, 90, 'حضارة أكسوم الحبشية', 'The Aksumite Civilization', 'يتعرف نشأة حضارة أكسوم وخصائصها وصلاتها الإقليمية.', 'Explore the origins, features, and regional connections of the Aksumite civilization.'),
    grade7Lesson(3, 91, 92, 'حضارات شمال إفريقيا القديمة', 'Ancient Civilizations of North Africa', 'يقارن بين نماذج من الحضارات القديمة في شمال إفريقيا.', 'Compare examples of ancient civilizations in North Africa.'),
    grade7Lesson(4, 96, 99, 'عوامل نشوء حضارتي اليونان والرومان', 'Factors behind Greek and Roman Civilizations', 'يشرح أثر البيئة والموقع والتنظيم في نشوء الحضارتين اليونانية والرومانية.', 'Explain how environment, location, and organization contributed to Greek and Roman civilizations.'),
    grade7Lesson(4, 100, 103, 'حضارة اليونان: الفنون والآداب والعلوم', 'Greek Civilization: Arts, Literature, and Science', 'يتعرف إسهامات اليونان القديمة في الفنون والآداب والعلوم.', 'Explore ancient Greek contributions to the arts, literature, and science.'),
    grade7Lesson(4, 104, 108, 'حضارة اليونان: النظم الاقتصادية والاجتماعية والسياسية', 'Greek Civilization: Economic, Social, and Political Systems', 'يصف جوانب من تنظيم المجتمع والاقتصاد والحكم في المدن اليونانية.', 'Describe aspects of society, economy, and government in Greek city-states.'),
    grade7Lesson(4, 109, 112, 'حضارة الرومان: الفنون والآداب والعلوم', 'Roman Civilization: Arts, Literature, and Science', 'يتعرف نماذج من إسهامات الرومان في الفنون والآداب والعلوم.', 'Explore examples of Roman contributions to the arts, literature, and science.'),
    grade7Lesson(4, 113, 115, 'حضارة الرومان: النظم الاقتصادية والاجتماعية والسياسية', 'Roman Civilization: Economic, Social, and Political Systems', 'يقارن بين جوانب التنظيم الاقتصادي والاجتماعي والسياسي في روما القديمة.', 'Compare economic, social, and political organization in ancient Rome.')
  ]
};

export const SUDAN_MIDDLE_HISTORY_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_HISTORY_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_HISTORY_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
