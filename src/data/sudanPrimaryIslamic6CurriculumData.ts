import type { SudanPrimaryGrade6Course } from './sudanPrimaryGrade6CourseBuilder';
import {
  createSudanPrimaryGrade6Book,
  createSudanPrimaryGrade6Lectures,
  createSudanPrimaryGrade6TableOfContents,
  grade6Lesson
} from './sudanPrimaryGrade6CourseBuilder';

const course: SudanPrimaryGrade6Course = {
  key: 'islamic',
  subject: 'ISLAMIC_STUDIES',
  titleAr: 'التربية الإسلامية',
  titleEn: 'Islamic Studies',
  edition: 'الصف السادس الابتدائي',
  units: [
    { titleAr: 'سور من القرآن الكريم', titleEn: 'Selected Quranic Surahs', firstPage: 5, lastPage: 37 },
    { titleAr: 'علوم القرآن الكريم', titleEn: 'Quranic Studies', firstPage: 38, lastPage: 49 },
    { titleAr: 'من الحديث النبوي الشريف', titleEn: 'Prophetic Hadith', firstPage: 50, lastPage: 67 },
    { titleAr: 'العقيدة', titleEn: 'Faith', firstPage: 68, lastPage: 76 },
    { titleAr: 'الفقه', titleEn: 'Jurisprudence', firstPage: 77, lastPage: 93 },
    { titleAr: 'من سيرة النبي والصحابة', titleEn: 'The Prophet’s Life and the Companions', firstPage: 94, lastPage: 113 }
  ],
  lessons: [
    grade6Lesson(1, 5, 12, 'سورة النجم: التلاوة والتدبر', 'Surat An-Najm: Recitation and Reflection', 'يتدرب المتعلم على تلاوة السورة وحفظ مقاطعها، ويتأمل معانيها العامة وآياتها الدالة على قدرة الله.', 'Practise reciting and memorizing passages, then reflect on the surah’s broad meanings and signs of God’s power.'),
    grade6Lesson(1, 13, 20, 'سورة الرحمن: التلاوة والتدبر', 'Surat Ar-Rahman: Recitation and Reflection', 'يقرأ المتعلم السورة قراءة سليمة، ويتأمل تكرار التذكير بالنعم وما يدعو إليه من شكر.', 'Recite the surah accurately and reflect on its repeated reminders of blessings and gratitude.'),
    grade6Lesson(1, 21, 29, 'سورة الواقعة: التلاوة والتدبر', 'Surat Al-Waqi’ah: Recitation and Reflection', 'يتدرب المتعلم على الحفظ والتلاوة، ويتعرف إلى المعاني العامة المتعلقة بالآخرة ومآل الناس.', 'Practise recitation and memorization, and explore the surah’s broad themes about the Hereafter and people’s outcomes.'),
    grade6Lesson(1, 30, 37, 'سورة القمر: التلاوة والتدبر', 'Surat Al-Qamar: Recitation and Reflection', 'يتلو المتعلم الآيات ويحفظها بإتقان، ويستخلص منها معنى الاتعاظ بأخبار الأمم.', 'Recite and memorize the passages carefully, drawing a lesson from the accounts of earlier peoples.'),
    grade6Lesson(2, 38, 40, 'فضل حفظ القرآن الكريم', 'The Value of Memorizing the Quran', 'يتعرف المتعلم إلى فضل حفظ القرآن والعناية بتلاوته ومراجعته، ويضع خطة مناسبة للمداومة.', 'Learn about memorizing and caring for Quranic recitation, and plan a suitable routine for regular review.'),
    grade6Lesson(2, 41, 43, 'معجزة انشقاق القمر', 'The Sign of the Moon’s Splitting', 'يتعرف المتعلم إلى القصة الواردة في الدرس، ويميز بين أحداثها والعبرة المستفادة منها.', 'Explore the account presented in the lesson, distinguish its events, and identify its lesson.'),
    grade6Lesson(2, 44, 46, 'الإعجاز في القرآن الكريم', 'The Quran’s Inimitability', 'يتأمل المتعلم وجوه الإعجاز التي يذكرها الدرس، ويشرح الفكرة بأسلوبه دون مبالغة أو تخمين.', 'Consider the aspects of inimitability discussed and explain the idea in your own words without unsupported claims.'),
    grade6Lesson(2, 47, 49, 'قصة قوم لوط', 'The Story of the People of Lot', 'يتابع المتعلم أحداث القصة ويتأمل ما تعرضه من عواقب الظلم ورفض النصح.', 'Follow the account and reflect on the consequences of wrongdoing and rejecting sincere counsel.'),
    grade6Lesson(3, 50, 53, 'فهم الحديث النبوي', 'Understanding Prophetic Hadith', 'يقرأ المتعلم الحديث ويفهم مفرداته، ثم يحدد معناه العام والسلوك الذي يرشد إليه.', 'Read and understand the hadith’s vocabulary, then identify its general meaning and the conduct it teaches.'),
    grade6Lesson(3, 54, 57, 'العمل بهدي الحديث', 'Applying the Hadith’s Guidance', 'يربط المتعلم بين التوجيه النبوي ومواقف الحياة اليومية، ويقترح سلوكاً مناسباً للموقف.', 'Connect the hadith’s guidance to everyday situations and choose suitable conduct.'),
    grade6Lesson(4, 58, 66, 'الإيمان وأركانه', 'Faith and Its Pillars', 'يتعرف المتعلم إلى أركان الإيمان، ويفهم أثرها في نظرة المسلم إلى نفسه والعالم من حوله.', 'Learn the pillars of faith and consider how they shape a Muslim’s view of self and the world.'),
    grade6Lesson(4, 67, 76, 'آثار الإيمان في السلوك', 'How Faith Shapes Conduct', 'يربط المتعلم بين الإيمان والعمل الصالح، ويذكر أمثلة على الصدق والأمانة ومراقبة الله.', 'Connect faith with good deeds and give examples of honesty, trustworthiness, and awareness of God.'),
    grade6Lesson(5, 77, 84, 'الطهارة وأحكامها', 'Purification and Its Rulings', 'يتعلم المتعلم أهمية الطهارة، ويميز بين ما يلزم للاستعداد للعبادة وما يحافظ على نظافة البدن.', 'Learn why purification matters and distinguish preparation for worship from everyday personal cleanliness.'),
    grade6Lesson(5, 85, 89, 'الوضوء والصلاة', 'Ablution and Prayer', 'يرتب المتعلم خطوات الوضوء، ويربط الطهارة بأداء الصلاة على الوجه الصحيح.', 'Sequence the steps of ablution and connect purification with performing prayer correctly.'),
    grade6Lesson(5, 90, 93, 'آداب العبادة والمعاملة', 'Manners in Worship and Daily Dealings', 'يطبق المتعلم آداب العبادة، ويستحضر قيم الرفق والنظافة واحترام حقوق الآخرين.', 'Practise good manners in worship and remember kindness, cleanliness, and respect for others’ rights.'),
    grade6Lesson(6, 94, 99, 'مواقف من السيرة النبوية', 'Events from the Prophet’s Life', 'يرتب المتعلم أحداثاً من السيرة، ويفهم ما تكشفه عن الصبر والرحمة وحسن التعامل.', 'Sequence events from the Prophet’s life and consider what they show about patience, mercy, and good conduct.'),
    grade6Lesson(6, 100, 106, 'مواقف من حياة الصحابة', 'Events from the Companions’ Lives', 'يتعرف المتعلم إلى مواقف من حياة الصحابة، ويستخرج منها قيمة أو سلوكاً نافعاً.', 'Explore accounts from the Companions’ lives and identify a useful value or action.'),
    grade6Lesson(6, 107, 113, 'الاقتداء بالقدوة الحسنة', 'Following a Good Example', 'يستخلص المتعلم دروساً من السيرة، ويحولها إلى اختيارات عملية في الدراسة والأسرة والمجتمع.', 'Draw lessons from these accounts and apply them to choices at school, home, and in the community.')
  ]
};

export const SUDAN_PRIMARY_ISLAMIC_G6_BOOK = createSudanPrimaryGrade6Book(course);
export const SUDAN_PRIMARY_ISLAMIC_G6_TABLE_OF_CONTENTS = createSudanPrimaryGrade6TableOfContents(course);
export const SUDAN_PRIMARY_ISLAMIC_G6_LECTURES = createSudanPrimaryGrade6Lectures(course);
