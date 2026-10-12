import type { SudanMiddleGrade7Course } from './sudanMiddleGrade7CourseBuilder';
import {
  createSudanMiddleGrade7Book,
  createSudanMiddleGrade7Lectures,
  createSudanMiddleGrade7TableOfContents,
  grade7Lesson
} from './sudanMiddleGrade7CourseBuilder';

const course: SudanMiddleGrade7Course = {
  key: 'ict',
  subject: 'COMPUTER_SCIENCE',
  titleAr: 'تكنولوجيا المعلومات والاتصالات',
  titleEn: 'Information and Communication Technology',
  edition: 'الطبعة الأولى 2021م',
  units: [
    { titleAr: 'مدخل إلى قواعد البيانات', titleEn: 'Introduction to Databases', firstPage: 5, lastPage: 17 },
    { titleAr: 'تطبيقات قواعد البيانات باستخدام مايكروسوفت أكسس', titleEn: 'Database Applications with Microsoft Access', firstPage: 18, lastPage: 52 },
    { titleAr: 'أساسيات الإنترنت', titleEn: 'Internet Fundamentals', firstPage: 53, lastPage: 69 },
    { titleAr: 'الإنترنت في حياتنا', titleEn: 'The Internet in Our Lives', firstPage: 70, lastPage: 81 }
  ],
  lessons: [
    grade7Lesson(1, 6, 11, 'جداول البيانات', 'Data Tables', 'ينظم البيانات في صفوف وأعمدة ويستكشف كيف تساعد الجداول على ترتيب المعلومات.', 'Organize data in rows and columns and explore how tables structure information.'),
    grade7Lesson(1, 12, 14, 'الجداول المرتبطة', 'Related Tables', 'يفهم أن ربط الجداول يقلل تكرار البيانات ويساعد على توصيل المعلومات ذات الصلة.', 'Understand how linking tables reduces repeated data and connects related information.'),
    grade7Lesson(1, 15, 17, 'قواعد البيانات', 'Databases', 'يشرح مفهوم قاعدة البيانات ومكوناتها واستخدامها في حفظ البيانات واسترجاعها.', 'Explain what a database is, its components, and how it stores and retrieves data.'),
    grade7Lesson(2, 19, 22, 'الواجهة الرئيسة للبرنامج', 'The Main Program Interface', 'يتعرف نوافذ وأدوات بيئة قاعدة البيانات ويحدد طريقة بدء العمل فيها.', 'Identify the windows and tools of a database application and how to begin using it.'),
    grade7Lesson(2, 23, 30, 'الجداول', 'Tables', 'ينشئ جدولًا من حقول وسجلات ويختار نوع البيانات الملائم لكل حقل.', 'Create a table with fields and records and choose suitable data types for fields.'),
    grade7Lesson(2, 31, 33, 'العلاقات بين الجداول', 'Relationships Between Tables', 'يربط الجداول بمفتاح مناسب لفهم الصلات بين السجلات.', 'Connect tables with an appropriate key to represent relationships between records.'),
    grade7Lesson(2, 34, 38, 'النماذج', 'Forms', 'يستخدم النماذج لعرض البيانات وإدخالها بطريقة منظمة.', 'Use forms to display and enter data in an organized way.'),
    grade7Lesson(2, 39, 44, 'الاستعلامات', 'Queries', 'يستخدم الاستعلام لتحديد سجلات تحقق شروطًا معينة واسترجاعها.', 'Use a query to select and retrieve records that meet specified criteria.'),
    grade7Lesson(2, 45, 52, 'التقارير', 'Reports', 'ينظم بيانات قاعدة البيانات في تقرير واضح مناسب للعرض أو الطباعة.', 'Arrange database information in a clear report suitable for viewing or printing.'),
    grade7Lesson(3, 54, 55, 'مفاهيم أساسية في الإنترنت', 'Basic Internet Concepts', 'يميز الإنترنت بوصفه شبكة تربط أجهزة وشبكات وتتيح تبادل المعلومات.', 'Describe the internet as a network connecting devices and networks for information exchange.'),
    grade7Lesson(3, 56, 58, 'مزايا وخدمات الإنترنت', 'Internet Benefits and Services', 'يستكشف خدمات الإنترنت وأمثلة على استخدامها للتواصل والتعلم والوصول إلى المعلومات.', 'Explore internet services and their uses in communication, learning, and information access.'),
    grade7Lesson(3, 59, 60, 'عناوين ونطاقات الإنترنت', 'Internet Addresses and Domains', 'يتعرف مكونات عنوان الإنترنت ودلالة اسم النطاق في الوصول إلى المواقع.', 'Identify parts of an internet address and how a domain name helps locate a site.'),
    grade7Lesson(3, 61, 62, 'متصفحات الإنترنت', 'Internet Browsers', 'يستخدم المتصفح لفتح صفحات الويب والتنقل بينها بأمان.', 'Use a browser to open and navigate web pages safely.'),
    grade7Lesson(3, 63, 64, 'محركات البحث', 'Search Engines', 'يصوغ كلمات بحث مناسبة ويفحص نتائج البحث لاختيار المعلومات الملائمة.', 'Choose useful search terms and evaluate results to find relevant information.'),
    grade7Lesson(3, 66, 69, 'الاستخدام الآمن للإنترنت', 'Safe Internet Use', 'يحمي بياناته ويتحقق من موثوقية المحتوى ويتبع سلوكًا مسؤولًا عند الاتصال.', 'Protect personal data, evaluate content, and behave responsibly online.'),
    grade7Lesson(4, 71, 73, 'التعليم الإلكتروني', 'E-learning', 'يستكشف كيف تدعم الأدوات الرقمية التعلم والوصول إلى الموارد التعليمية.', 'Explore how digital tools support learning and access to educational resources.'),
    grade7Lesson(4, 74, 75, 'الحكومة الإلكترونية', 'E-government', 'يتعرف أمثلة للخدمات الحكومية الإلكترونية وفوائد إنجاز المعاملات رقميًا.', 'Explore examples of online public services and the benefits of digital transactions.'),
    grade7Lesson(4, 76, 77, 'التجارة الإلكترونية', 'E-commerce', 'يشرح مفهوم التجارة الإلكترونية ويتبع احتياطات السلامة عند التعامل الرقمي.', 'Explain e-commerce and identify precautions for safe digital transactions.'),
    grade7Lesson(4, 78, 81, 'إنترنت الأشياء', 'The Internet of Things', 'يتعرف أجهزة متصلة تتبادل البيانات ويفكر في فوائدها ومتطلبات استخدامها الآمن.', 'Explore connected devices that exchange data and consider their benefits and safe use.')
  ]
};

export const SUDAN_MIDDLE_ICT_G7_BOOK = createSudanMiddleGrade7Book(course);
export const SUDAN_MIDDLE_ICT_G7_TABLE_OF_CONTENTS = createSudanMiddleGrade7TableOfContents(course);
export const SUDAN_MIDDLE_ICT_G7_LECTURES = createSudanMiddleGrade7Lectures(course);
