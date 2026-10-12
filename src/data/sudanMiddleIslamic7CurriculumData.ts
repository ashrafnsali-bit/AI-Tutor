import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course: SudanMiddleGrade7Course = {
  key: 'islamic',
  subject: 'ISLAMIC_STUDIES',
  titleAr: 'التربية الإسلامية',
  titleEn: 'Islamic Studies',
  edition: 'الصف الأول المتوسط',
  units: [
    { titleAr: 'التجويد', titleEn: 'Tajweed', firstPage: 7, lastPage: 20 },
    { titleAr: 'سورة الحجرات', titleEn: 'Surat Al-Hujurat', firstPage: 22, lastPage: 38 },
    { titleAr: 'سورة الفتح', titleEn: 'Surat Al-Fath', firstPage: 39, lastPage: 48 },
    { titleAr: 'التلاوة: سورة ق', titleEn: 'Recitation: Surat Qaf', firstPage: 46, lastPage: 65 },
    { titleAr: 'الأحاديث النبوية ومكارم الأخلاق', titleEn: 'Prophetic Hadith and Noble Character', firstPage: 66, lastPage: 87 },
    { titleAr: 'العقيدة', titleEn: 'Faith and Belief', firstPage: 88, lastPage: 103 },
    { titleAr: 'الفقه', titleEn: 'Jurisprudence', firstPage: 104, lastPage: 128 },
    { titleAr: 'دروس السيرة النبوية', titleEn: 'Lessons from the Prophetic Biography', firstPage: 129, lastPage: 147 }
  ],
  lessons: [
    grade7Lesson(1, 7, 8, 'النون والميم الساكنتان', 'Sakin Nun and Mim', 'يميز المتعلم أحكام النون والميم الساكنتين عند التلاوة.', 'Recognize the recitation rules for sakin nun and mim.'),
    grade7Lesson(1, 9, 11, 'الإظهار', 'Izhar', 'يحدد مواضع الإظهار ويؤدي النون الساكنة أو التنوين بوضوح.', 'Identify izhar and pronounce sakin nun or tanween clearly.'),
    grade7Lesson(1, 12, 14, 'الإدغام', 'Idgham', 'يتعرف حروف الإدغام ويطبق حكمه في أمثلة التلاوة.', 'Recognize idgham letters and apply the rule in recitation examples.'),
    grade7Lesson(1, 15, 16, 'الإقلاب', 'Iqlab', 'يشرح متى يقلب صوت النون الساكنة أو التنوين إلى ميم مخفاة.', 'Explain when sakin nun or tanween changes to a concealed mim sound.'),
    grade7Lesson(1, 17, 18, 'الإخفاء', 'Ikhfa', 'يتدرب على الإخفاء مع الغنة عند تلاوة أمثلته.', 'Practise ikhfa with ghunnah when reciting its examples.'),
    grade7Lesson(1, 19, 20, 'خلاصة أحكام الميم الساكنة', 'Review of Sakin Mim Rules', 'يراجع أحكام الميم الساكنة ويميز الإظهار الشفوي والإدغام الشفوي والإخفاء الشفوي.', 'Review sakin mim rules and distinguish oral izhar, idgham, and ikhfa.'),
    grade7Lesson(2, 22, 25, 'الأدب مع الله ورسوله', 'Good Manners with God and the Messenger', 'يستخلص آداب تعظيم الله ورسوله من موضوع السورة ويطبقها في السلوك.', 'Draw lessons about reverence and respectful conduct from the surah’s theme.'),
    grade7Lesson(2, 26, 29, 'التثبت في الأخبار والإصلاح بين الطوائف المتقاتلة', 'Verify Reports and Reconcile Conflict', 'يتعلم التثبت من الأخبار ويدرك أهمية الإصلاح العادل بين المتنازعين.', 'Learn to verify reports and understand the importance of fair reconciliation.'),
    grade7Lesson(2, 30, 34, 'تحريم الإساءة واحتقار الآخر', 'Avoiding Insult and Contempt', 'يميز السلوك المؤذي من الاحترام المتبادل ويحفظ كرامة الآخرين.', 'Distinguish harmful conduct from mutual respect and protect others’ dignity.'),
    grade7Lesson(2, 35, 38, 'حقيقة الإيمان', 'The Meaning of Faith', 'يربط بين الإيمان والعمل الصالح ويشرح أثره في السلوك.', 'Relate faith to good deeds and explain its influence on conduct.'),
    grade7Lesson(3, 39, 43, 'صلح الحديبية وآثاره', 'The Treaty of Hudaybiyyah and Its Effects', 'يتتبع أحداث الصلح ويفسر أثره في مسار الدعوة والعلاقات.', 'Trace the treaty’s events and explain its effects on the community and its relationships.'),
    grade7Lesson(3, 44, 44, 'أحوال المتخلفين عن الحديبية', 'Those Who Stayed Behind at Hudaybiyyah', 'يتأمل مواقف المتخلفين ويتعرف ما تعلمه من نتائجها.', 'Explore the choices of those who stayed behind and lessons from their outcomes.'),
    grade7Lesson(3, 45, 47, 'تصديق رؤيا الرسول ﷺ عام الفتح', 'The Prophet’s Vision and the Year of the Conquest', 'يفهم سياق الرؤيا وصلتها بأحداث الحديبية والفتح.', 'Understand the context of the vision and its connection to Hudaybiyyah and the conquest.'),
    grade7Lesson(3, 48, 48, 'بيعة الرضوان وآثارها الخيرة', 'The Pledge of al-Ridwan and Its Outcomes', 'يتعرف بيعة الرضوان وما تدل عليه من وفاء وثبات وتعاون.', 'Explore the Pledge of al-Ridwan and its lessons about loyalty and steadfastness.'),
    grade7Lesson(4, 46, 65, 'تلاوة سورة ق', 'Reciting Surat Qaf', 'يتدرب المتعلم على تلاوة سورة ق وضبط القراءة ومراجعة أحكام التجويد.', 'Practise reciting Surat Qaf accurately while reviewing relevant tajweed rules.'),
    grade7Lesson(5, 66, 68, 'الإحسان إلى الخلق', 'Kindness to Creation', 'يستنتج صور الإحسان إلى الناس وسائر المخلوقات ويطبقها.', 'Identify ways to show kindness to people and other creatures.'),
    grade7Lesson(5, 69, 71, 'الحياء', 'Modesty', 'يفهم أثر الحياء في تهذيب السلوك وصيانة الحقوق.', 'Understand how modesty guides conduct and protects people’s rights.'),
    grade7Lesson(5, 72, 73, 'أنواع الصدقات', 'Forms of Charity', 'يميز صور الصدقة ويقدر أثر العطاء في الفرد والمجتمع.', 'Recognize forms of charity and appreciate the value of giving.'),
    grade7Lesson(5, 74, 76, 'فضل العمل', 'The Value of Work', 'يقدر العمل النافع ويتعرف أثره في بناء الفرد والمجتمع.', 'Value beneficial work and consider its contribution to individuals and society.'),
    grade7Lesson(5, 77, 79, 'شكر المعروف', 'Gratitude for Kindness', 'يطبق شكر من أحسن إليه ويرد المعروف بسلوك كريم.', 'Show gratitude to those who help and respond with good conduct.'),
    grade7Lesson(5, 80, 82, 'تنفيس الكرب', 'Relieving Distress', 'يتعرف فضل مساعدة المكروب ويقترح طرقًا مناسبة لمساندة الآخرين.', 'Understand the value of helping people in hardship and suggest appropriate support.'),
    grade7Lesson(5, 83, 87, 'الاعتزاز بالوطن', 'Pride in One’s Homeland', 'يربط حب الوطن بخدمته والمحافظة على مصالح المجتمع.', 'Connect love of homeland with service and care for the community.'),
    grade7Lesson(6, 88, 90, 'الإيمان بالقضاء والقدر', 'Belief in Divine Decree', 'يفهم معنى الإيمان بالقضاء والقدر وأثره في نظرة المسلم للأحداث.', 'Understand belief in divine decree and how it shapes perspective on events.'),
    grade7Lesson(6, 91, 94, 'الرضا بالقضاء والقدر', 'Acceptance of Divine Decree', 'يميز الرضا من التواكل ويستجيب للمواقف بالصبر والعمل.', 'Distinguish acceptance from passivity and respond with patience and effort.'),
    grade7Lesson(6, 95, 97, 'التوكل', 'Reliance on God', 'يفرق بين التوكل والتواكل ويجمع بين الأخذ بالأسباب والثقة بالله.', 'Distinguish reliance from idleness and combine effort with trust in God.'),
    grade7Lesson(6, 98, 100, 'حلاوة الإيمان', 'The Sweetness of Faith', 'يستكشف صفات تعين على استشعار الإيمان والالتزام بمقتضاه.', 'Explore qualities that deepen faith and encourage living by its principles.'),
    grade7Lesson(6, 101, 103, 'تأمل وتفكر', 'Reflection and Contemplation', 'يمارس التأمل في آيات الله ومخلوقاته ويعبر عن استنتاجاته.', 'Reflect on signs in creation and express thoughtful conclusions.'),
    grade7Lesson(7, 104, 106, 'الطهارة والنظافة', 'Purification and Cleanliness', 'يميز بين الطهارة والنظافة اليومية ويبين أهميتهما للعبادة والصحة.', 'Distinguish ritual purification from everyday cleanliness and explain their importance.'),
    grade7Lesson(7, 107, 109, 'النجاسة', 'Impurity', 'يتعرف أحكام النجاسة الأساسية وكيفية التعامل معها.', 'Learn basic rulings about impurity and appropriate ways to address it.'),
    grade7Lesson(7, 110, 114, 'الغسل وأحكامه', 'Ritual Bathing and Its Rulings', 'يتعرف الحالات التي يشرع فيها الغسل وخطواته العامة.', 'Explore when ritual bathing is required and its general steps.'),
    grade7Lesson(7, 115, 117, 'من أحكام الصيام', 'Rulings of Fasting', 'يتعرف أحكامًا أساسية للصيام ويصلها بمقاصده وآدابه.', 'Learn basic rulings of fasting and connect them to its purposes and manners.'),
    grade7Lesson(7, 118, 120, 'أركان الصوم وآدابه وحكمة مشروعيته', 'Pillars, Manners, and Wisdom of Fasting', 'يعدد أركان الصوم وآدابه ويشرح بعض حكم مشروعيته.', 'Identify the pillars and manners of fasting and explain some of its wisdom.'),
    grade7Lesson(7, 121, 124, 'أنواع الصيام', 'Types of Fasting', 'يقارن بين أنواع الصيام وفق أحكامها العامة.', 'Compare types of fasting by their general rulings.'),
    grade7Lesson(7, 125, 128, 'مبطلات الصيام والأعذار المبيحة للفطر', 'Things That Invalidate Fasting and Excuses for Breaking It', 'يميز مبطلات الصيام من الأعذار التي تبيح الفطر.', 'Distinguish actions that invalidate fasting from valid excuses for breaking it.'),
    grade7Lesson(8, 129, 134, 'هجرة النبي ﷺ إلى المدينة المنورة', 'The Prophet’s Migration to Medina', 'يرتب أحداث الهجرة ويستخلص ما فيها من تخطيط وصبر وتعاون.', 'Sequence the migration and identify lessons about planning, patience, and cooperation.'),
    grade7Lesson(8, 135, 137, 'تنظيم بناء دولة المدينة', 'Organizing the State in Medina', 'يتعرف أسس تنظيم المجتمع والدولة في المدينة.', 'Explore principles used to organize the community and state in Medina.'),
    grade7Lesson(8, 138, 139, 'بناء المسجد النبوي وأهمية المساجد', 'Building the Prophet’s Mosque and the Role of Mosques', 'يشرح أدوار المسجد في العبادة والتعلم وخدمة المجتمع.', 'Explain how mosques support worship, learning, and community life.'),
    grade7Lesson(8, 140, 143, 'الإخاء والإيثار بين أهل المدينة', 'Brotherhood and Selflessness in Medina', 'يستخلص صور الإخاء والإيثار ويقترح تطبيقها في حياته.', 'Identify examples of brotherhood and selflessness and apply them in daily life.'),
    grade7Lesson(8, 144, 146, 'دستور المدينة', 'The Constitution of Medina', 'يتعرف مبادئ تنظيم الحقوق والواجبات والتعايش في المدينة.', 'Explore principles for organizing rights, responsibilities, and coexistence in Medina.'),
    grade7Lesson(8, 147, 147, 'سيدنا علي بن أبي طالب رضي الله عنه', 'Ali ibn Abi Talib', 'يتعرف جوانب من سيرة علي بن أبي طالب ومواقفه في خدمة الإسلام.', 'Explore aspects of Ali ibn Abi Talib’s life and service to Islam.')
  ]
};

export const SUDAN_MIDDLE_ISLAMIC_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_ISLAMIC_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_ISLAMIC_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
