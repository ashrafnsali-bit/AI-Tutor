import type { SudanPrimaryGrade6Course } from './sudanPrimaryGrade6CourseBuilder';
import {
  createSudanPrimaryGrade6Book,
  createSudanPrimaryGrade6Lectures,
  createSudanPrimaryGrade6TableOfContents,
  grade6Lesson
} from './sudanPrimaryGrade6CourseBuilder';

const course: SudanPrimaryGrade6Course = {
  key: 'ict',
  subject: 'COMPUTER_SCIENCE',
  titleAr: 'تكنولوجيا المعلومات والاتصالات',
  titleEn: 'Information and Communication Technology',
  edition: 'الصف السادس الابتدائي — 2020م',
  units: [
    { titleAr: 'الشبكات', titleEn: 'Networks', firstPage: 1, lastPage: 10 },
    { titleAr: 'الجرائم الإلكترونية وأمن المعلومات', titleEn: 'Cybercrime and Information Security', firstPage: 11, lastPage: 20 },
    { titleAr: 'العروض التقديمية', titleEn: 'Presentations', firstPage: 21, lastPage: 28 },
    { titleAr: 'البرمجيات وقواعد البيانات', titleEn: 'Software and Databases', firstPage: 29, lastPage: 41 },
    { titleAr: 'الحاسوب من حولنا', titleEn: 'Computers Around Us', firstPage: 42, lastPage: 44 }
  ],
  lessons: [
    grade6Lesson(1, 1, 1, 'ما هي الشبكة؟', 'What Is a Network?', 'الشبكة اتصال بين أجهزة يتيح تبادل البيانات والموارد، وتحدد الحاجة نوع الشبكة المناسب.', 'A network connects devices so they can share data and resources; the intended use helps determine its type.'),
    grade6Lesson(1, 3, 3, 'فوائد الشبكات', 'Benefits of Networks', 'تسهل الشبكات مشاركة الملفات والطابعات والاتصال، مع ضرورة احترام صلاحيات المستخدمين.', 'Networks make it easier to share files, printers, and communication while respecting user permissions.'),
    grade6Lesson(1, 5, 5, 'أنواع الشبكات', 'Types of Networks', 'تختلف الشبكات في نطاقها وطريقة اتصالها، ويختار المستخدم النوع الذي يلائم الأجهزة والمسافات.', 'Networks differ in their coverage and connections; choose a type suited to the devices and distances involved.'),
    grade6Lesson(1, 7, 7, 'خادم الشبكة', 'The Network Server', 'يوفر الخادم خدمات أو موارد للأجهزة المتصلة بالشبكة، وتدير صلاحياته وصول المستخدمين.', 'A server provides services or resources to connected devices and manages users’ access permissions.'),
    grade6Lesson(1, 9, 9, 'الحوسبة السحابية', 'Cloud Computing', 'تتيح الخدمات السحابية تخزين ملفات أو استخدام خدمات عبر الشبكة، وينبغي حماية الحساب والبيانات الشخصية.', 'Cloud services provide online storage and tools; protect accounts and personal information when using them.'),
    grade6Lesson(2, 12, 12, 'الجرائم الإلكترونية', 'Cybercrime', 'يتعرف المتعلم إلى صور من الجرائم الإلكترونية، ويتعلم كيف يتجنب السلوك الضار ويطلب المساعدة عند الحاجة.', 'Explore examples of cybercrime and learn to avoid harmful behavior and seek help when needed.'),
    grade6Lesson(2, 14, 14, 'أمن المعلومات', 'Information Security', 'تحمي الممارسات الآمنة المعلومات من الفقد أو الاطلاع غير المصرح به، وتشمل كلمات مرور قوية وحفظ النسخ.', 'Safe practices protect information from loss or unauthorized access and include strong passwords and backups.'),
    grade6Lesson(2, 15, 15, 'كيف نحمي المعلومات؟', 'How Do We Protect Information?', 'تساعد كلمات المرور والنسخ الاحتياطية وتحديث البرامج على حماية الملفات والحسابات.', 'Passwords, backups, and software updates help protect files and accounts.'),
    grade6Lesson(2, 17, 17, 'الاستخدام الآمن للإنترنت', 'Using the Internet Safely', 'يتجنب المتعلم مشاركة البيانات الخاصة أو فتح محتوى مجهول، ويطلب مساعدة شخص بالغ عند مواجهة خطر.', 'Avoid sharing private data or opening unknown content, and ask a trusted adult for help when something feels unsafe.'),
    grade6Lesson(3, 22, 22, 'ما هو برنامج PowerPoint؟', 'What Is PowerPoint?', 'تساعد برامج العروض على تنظيم الأفكار في شرائح، وتعرض كل شريحة فكرة أو دعماً بصرياً مناسباً.', 'Presentation software organizes ideas into slides, with each slide showing one idea and suitable visual support.'),
    grade6Lesson(3, 25, 25, 'طريقة تصميم عرض تقديمي', 'Designing a Presentation', 'ينظم المتعلم العرض بعنوان واضح وتسلسل منطقي ونص موجز وصور أو رسوم تخدم الفكرة.', 'Plan a presentation with a clear title, logical order, concise text, and visuals that support the message.'),
    grade6Lesson(3, 28, 28, 'إضافة الحركات والتأثيرات', 'Adding Animations and Effects', 'تستخدم الحركات والانتقالات باعتدال لتوضيح ترتيب المعلومات، لا لتشتيت الجمهور عن المحتوى.', 'Use animations and transitions sparingly to clarify order rather than distract from the content.'),
    grade6Lesson(4, 30, 30, 'أنواع البرمجيات', 'Types of Software', 'تؤدي برمجيات النظام والبرمجيات التطبيقية أدواراً مختلفة، وتعمل معاً لتمكين المستخدم من إنجاز المهام.', 'System and application software serve different roles and work together to help users complete tasks.'),
    grade6Lesson(4, 32, 32, 'برمجيات النظم', 'System Software', 'يدير نظام التشغيل موارد الحاسوب ويساعد على تشغيل البرامج وتنظيم الملفات والأجهزة.', 'System software manages computer resources and helps run programs and organize files and devices.'),
    grade6Lesson(4, 34, 34, 'لغات البرمجة', 'Programming Languages', 'تستخدم لغات البرمجة لكتابة تعليمات منظمة يستطيع الحاسوب تنفيذها.', 'Programming languages express organized instructions that a computer can execute.'),
    grade6Lesson(4, 35, 35, 'مفهوم قواعد البيانات', 'The Concept of Databases', 'تنظم قاعدة البيانات السجلات والحقول لتسهيل حفظ المعلومات والبحث عنها وتحديثها.', 'A database organizes records and fields so information can be stored, searched, and updated.'),
    grade6Lesson(4, 38, 38, 'نموذج لنظام شبكي', 'A Networked System Model', 'تتبادل أجهزة النظام الشبكي البيانات عبر اتصالات منظمة، وتؤدي كل وحدة دوراً ضمن النظام.', 'Devices in a networked system exchange data through organized connections, with each component serving a role.'),
    grade6Lesson(4, 40, 40, 'تطبيقات الأنظمة الذكية', 'Applications of Intelligent Systems', 'تساعد الأنظمة الذكية على إنجاز مهام محددة باستخدام البيانات والبرامج، وتتنوع تطبيقاتها في الحياة اليومية.', 'Intelligent systems use data and software to perform tasks and have varied everyday applications.'),
    grade6Lesson(4, 41, 41, 'تطبيقات IpSchools', 'IpSchools Applications', 'يتعرف المتعلم إلى استخدامات النظام المدرسي الإلكتروني في متابعة جوانب من التعلم والاتصال المدرسي.', 'Explore how the IpSchools platform supports aspects of learning and school communication.'),
    grade6Lesson(5, 43, 43, 'الحاسوب في البنوك', 'Computers in Banks', 'تساعد الحواسيب على تسجيل المعاملات وتنظيم الحسابات، وتحتاج البيانات المالية إلى حماية ودقة.', 'Computers help record transactions and organize accounts; financial data requires accuracy and protection.'),
    grade6Lesson(5, 44, 44, 'الحاسوب في المؤسسات الشرطية', 'Computers in Police Institutions', 'تستخدم المؤسسات الشرطية الحاسوب في تنظيم المعلومات والمهام، مع ضرورة المحافظة على دقة البيانات وسريتها.', 'Police institutions use computers to organize information and tasks while maintaining data accuracy and confidentiality.')
  ]
};

export const SUDAN_PRIMARY_ICT_G6_BOOK = createSudanPrimaryGrade6Book(course);
export const SUDAN_PRIMARY_ICT_G6_TABLE_OF_CONTENTS = createSudanPrimaryGrade6TableOfContents(course);
export const SUDAN_PRIMARY_ICT_G6_LECTURES = createSudanPrimaryGrade6Lectures(course);
