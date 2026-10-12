import type { SudanPrimaryGrade6Course } from './sudanPrimaryGrade6CourseBuilder';
import {
  createSudanPrimaryGrade6Book,
  createSudanPrimaryGrade6Lectures,
  createSudanPrimaryGrade6TableOfContents,
  grade6Lesson
} from './sudanPrimaryGrade6CourseBuilder';

const course: SudanPrimaryGrade6Course = {
  key: 'english',
  subject: 'ENGLISH',
  titleAr: 'اللغة الإنجليزية',
  titleEn: 'English',
  edition: 'SMILE Book 6 — Grade 6 Basic Level, 2nd Edition',
  units: [
    { titleAr: 'العودة إلى المدرسة', titleEn: 'Back to School', firstPage: 1, lastPage: 8 },
    { titleAr: 'الرياضيات في حياتنا', titleEn: 'Maths in Our Life', firstPage: 9, lastPage: 16 },
    { titleAr: 'الاختراعات والأشياء الجديدة', titleEn: 'Inventions and New Things', firstPage: 17, lastPage: 24 },
    { titleAr: 'عجائب العالم', titleEn: 'Wonders of the World', firstPage: 25, lastPage: 32 },
    { titleAr: 'أيام مميزة', titleEn: 'Special Days', firstPage: 33, lastPage: 40 },
    { titleAr: 'الصحة', titleEn: 'Health', firstPage: 41, lastPage: 48 },
    { titleAr: 'مراجعة شاملة', titleEn: 'One More Time', firstPage: 49, lastPage: 56 }
  ],
  lessons: [
    grade6Lesson(1, 1, 4, 'مواد المدرسة والجدول الأسبوعي', 'School Subjects and the Weekly Timetable', 'يسأل المتعلم عن المواد وأوقات الحصص ويجيب عنها، ويستخرج معلومات من جدول أسبوعي.', 'Ask and answer about school subjects and lesson times, then find information in a weekly timetable.'),
    grade6Lesson(1, 5, 8, 'وصف العطلة والسودان', 'Describing Holidays and Sudan', 'يصف المتعلم مكاناً وتجربة في الماضي، ويستخدم جملاً بسيطة لذكر حقائق عن السودان.', 'Describe a place and a past holiday, then use simple sentences to share facts about Sudan.'),
    grade6Lesson(2, 9, 12, 'الأعداد والرياضيات حولنا', 'Numbers and Maths Around Us', 'يقرأ المتعلم الأعداد ويلاحظ استخدام الرياضيات في المال والوقت والحياة اليومية.', 'Read numbers and notice how maths is used with money, time, and everyday activities.'),
    grade6Lesson(2, 13, 16, 'استخدام الرياضيات في المواقف اليومية', 'Using Maths in Everyday Situations', 'يستمع المتعلم إلى معلومات كمية ويجيب عن أسئلة، ويصف مواقف تستخدم فيها الأعداد والقياس.', 'Listen for quantities and answer questions about everyday situations involving numbers and measurement.'),
    grade6Lesson(3, 17, 20, 'الاختراعات ووسائل التنقل', 'Inventions and Ways of Travelling', 'يقارن المتعلم بين وسائل قديمة وحديثة، ويستخدم صفات المقارنة للتعبير عن السرعة والسلامة.', 'Compare older and newer inventions and use comparative language to discuss speed and safety.'),
    grade6Lesson(3, 21, 24, 'الأفكار والاختراعات الجديدة', 'New Ideas and Inventions', 'يقرأ المتعلم عن فكرة أو اختراع، ويرتب أحداثاً ويطرح أسئلة عن فائدته واستخدامه.', 'Read about an idea or invention, sequence events, and ask about its purpose and use.'),
    grade6Lesson(4, 25, 28, 'وصف عجائب ومواقع مشهورة', 'Describing Wonders and Places', 'يستخرج المتعلم تفاصيل من وصف مكان، ويستخدم صفات مناسبة للتعبير عن خصائصه.', 'Find details in a description of a place and use suitable adjectives to describe its features.'),
    grade6Lesson(4, 29, 32, 'السؤال عن الأماكن ومعلوماتها', 'Asking About Places and Their Features', 'يصوغ المتعلم أسئلة وأجوبة قصيرة عن موقع أو معلم، ويميز المعلومة الأساسية في القراءة.', 'Form short questions and answers about a place or landmark and identify key information in a reading.'),
    grade6Lesson(5, 33, 36, 'التحدث عن يوم مميز', 'Talking About a Special Day', 'يصف المتعلم مناسبة ويذكر وقتها وأنشطتها، مستخدماً تعابير الزمن وتسلسل الأحداث.', 'Describe an occasion, when it happens, and what people do using time expressions and sequence.'),
    grade6Lesson(5, 37, 40, 'الأنشطة والتقاليد في المناسبات', 'Activities and Customs on Special Days', 'يتبادل المتعلم معلومات عن المناسبات، ويقرأ التفاصيل ويكتب جملًا مترابطة عنها.', 'Exchange information about special days, read for details, and write connected sentences about them.'),
    grade6Lesson(6, 41, 44, 'العادات الصحية', 'Healthy Habits', 'يميز المتعلم بين العادات المفيدة والضارة، ويستخدم must وmustn’t للتعبير عن النصيحة.', 'Distinguish helpful and harmful habits and use must and mustn’t to give advice.'),
    grade6Lesson(6, 45, 48, 'زيارة الطبيب ووصف الحالة', 'Visiting a Doctor and Describing Health', 'يتدرب المتعلم على حوار قصير عن الصحة، ويستمع إلى الإرشادات ويحدد ما ينبغي فعله.', 'Practise a short health conversation, listen for advice, and identify what should be done.'),
    grade6Lesson(7, 49, 52, 'مراجعة المفردات والتراكيب', 'Reviewing Vocabulary and Language Patterns', 'يراجع المتعلم مفردات الوحدات وتراكيبها من خلال القراءة والاستماع والأسئلة القصيرة.', 'Review unit vocabulary and language patterns through reading, listening, and short questions.'),
    grade6Lesson(7, 53, 56, 'التواصل والكتابة', 'Communication and Writing', 'يوظف المتعلم ما تعلمه في وصف تجربة وطرح سؤال وكتابة فقرة قصيرة مفهومة.', 'Use learned language to describe an experience, ask a question, and write a clear short paragraph.')
  ]
};

export const SUDAN_PRIMARY_ENGLISH_G6_BOOK = createSudanPrimaryGrade6Book(course);
export const SUDAN_PRIMARY_ENGLISH_G6_TABLE_OF_CONTENTS = createSudanPrimaryGrade6TableOfContents(course);
export const SUDAN_PRIMARY_ENGLISH_G6_LECTURES = createSudanPrimaryGrade6Lectures(course);
