import type { Lecture, LectureDiagramStep, Question } from '../types';

export const SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TEXTBOOK_URL =
  'https://iencontent.ien.edu.sa/books/1448-GE-CBM-BM-TRC2-SM1-mcomp.pdf';

const sourceNoteAr =
  `مواءمة عناوين الوحدات والدروس وترتيبها وصفحاتها مع غلاف وفهرس نسخة عين ذات الرمز BM من كتاب التقنية الرقمية 2، التعليم الثانوي، نظام المسارات، طبعة 1448هـ/2026م، الفصل الدراسي الأول (ص 5–9). لم تُراجع جميع صفحات الشرح؛ الشروح والأنشطة والرسوم والتقويمات في المنصة من إعدادها وليست منقولة من الكتاب. المصدر: ${SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TEXTBOOK_URL}`;
const sourceNoteEn =
  `Unit and lesson titles, order, and page references match the cover and contents (pp. 5–9) of the IEN BM-coded Digital Technology 2 textbook for secondary pathways, 1448 AH/2026 edition, Semester 1. The full lesson pages were not audited; platform explanations, activities, diagrams, and assessments are original and not reproduced from the textbook. Source: ${SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TEXTBOOK_URL}`;

type LessonSpec = {
  id: string;
  titleAr: string;
  titleEn: string;
  unitAr: string;
  unitEn: string;
  page: number;
  practicePage: number;
  conceptsAr: string[];
  conceptsEn: string[];
  visualSteps: [string, string][];
  questionAr: string;
  questionEn: string;
  correctAr: string;
  correctEn: string;
  distractorsAr: [string, string, string];
  distractorsEn: [string, string, string];
  explanationAr: string;
  explanationEn: string;
};

const lessons: LessonSpec[] = [
  {
    id: 'data-information-knowledge',
    titleAr: 'البيانات والمعلومات والمعرفة',
    titleEn: 'Data, Information, and Knowledge',
    unitAr: 'الوحدة الأولى: علم البيانات',
    unitEn: 'Unit 1: Data Science',
    page: 11,
    practicePage: 23,
    conceptsAr: ['التمييز بين البيانات والمعلومات والمعرفة', 'أنواع البيانات وطرق عرضها وترميزها', 'جودة المعلومات'],
    conceptsEn: ['Distinguish data, information, and knowledge', 'Data types, display, and encoding', 'Information quality'],
    visualSteps: [['بيانات خام', 'Raw data'], ['تنظيم وتمثيل', 'Organize and represent'], ['معلومات ذات معنى', 'Meaningful information'], ['معرفة تدعم القرار', 'Knowledge for decisions']],
    questionAr: 'ما الترتيب الذي يوضح انتقال البيانات إلى معرفة قابلة للاستخدام؟',
    questionEn: 'Which sequence shows how data becomes usable knowledge?',
    correctAr: 'بيانات، ثم معلومات منظّمة، ثم معرفة تُستخدم في الفهم والقرار',
    correctEn: 'Data, then organized information, then knowledge used for understanding and decisions',
    distractorsAr: ['معرفة، ثم بيانات، ثم معلومات', 'عرض البيانات دون تفسيرها', 'حذف البيانات قبل تنظيمها'],
    distractorsEn: ['Knowledge, then data, then information', 'Display data without interpreting it', 'Delete data before organizing it'],
    explanationAr: 'تكتسب البيانات معنى عند تنظيمها، ويساعد تفسير المعلومات على بناء المعرفة.',
    explanationEn: 'Organizing data gives it meaning, and interpreting information helps build knowledge.'
  },
  {
    id: 'collect-and-validate-data',
    titleAr: 'جمع البيانات والتحقق من صحتها',
    titleEn: 'Collecting and Validating Data',
    unitAr: 'الوحدة الأولى: علم البيانات',
    unitEn: 'Unit 1: Data Science',
    page: 25,
    practicePage: 42,
    conceptsAr: ['جمع البيانات ومصادرها الرئيسة والثانوية', 'التحقق من صحة الإدخال', 'قواعد التحقق في إكسل'],
    conceptsEn: ['Data collection and primary and secondary sources', 'Validate data entry', 'Validation rules in Excel'],
    visualSteps: [['حدد السؤال', 'Define the question'], ['اختر المصدر', 'Choose a source'], ['اجمع السجلات', 'Collect records'], ['تحقق من صحتها', 'Validate them']],
    questionAr: 'ما أفضل إجراء لمنع إدخال قيمة خارج النطاق المسموح في جدول بيانات؟',
    questionEn: 'What is the best way to prevent an out-of-range value in a spreadsheet?',
    correctAr: 'تطبيق قاعدة تحقق تحدد القيم المسموح بها',
    correctEn: 'Apply a validation rule that limits permitted values',
    distractorsAr: ['تغيير لون الخلية فقط', 'إخفاء العمود عن المستخدم', 'نسخ القيمة إلى خلية أخرى'],
    distractorsEn: ['Only change the cell color', 'Hide the column from the user', 'Copy the value to another cell'],
    explanationAr: 'تتحقق القاعدة من القيمة عند إدخالها وتمنع الأخطاء المحددة مسبقًا.',
    explanationEn: 'A validation rule checks a value as it is entered and blocks defined errors.'
  },
  {
    id: 'forecasting-with-excel',
    titleAr: 'التنبؤ باستخدام إكسل',
    titleEn: 'Forecasting with Excel',
    unitAr: 'الوحدة الأولى: علم البيانات',
    unitEn: 'Unit 1: Data Science',
    page: 45,
    practicePage: 59,
    conceptsAr: ['تحليل المبيعات للتنبؤ بالقيم المستقبلية', 'مخططات التنبؤ وفاصل الثقة', 'تطبيقات إكسل المرتبطة بالبيانات والتشفير'],
    conceptsEn: ['Analyze sales data to forecast future values', 'Forecast charts and confidence intervals', 'Excel tools for data and encryption'],
    visualSteps: [['اجمع القيم السابقة', 'Gather historical values'], ['اختر نموذج التنبؤ', 'Choose a forecast model'], ['راجع المخطط والفاصل', 'Review the chart and interval'], ['قيّم النتيجة', 'Evaluate the result']],
    questionAr: 'ماذا يعبّر عنه فاصل الثقة في نتيجة التنبؤ؟',
    questionEn: 'What does a confidence interval communicate in a forecast?',
    correctAr: 'نطاقًا تقديريًا يوضح عدم اليقين حول القيمة المتوقعة',
    correctEn: 'An estimated range that communicates uncertainty around the forecast',
    distractorsAr: ['قيمة مؤكدة لا يمكن أن تتغير', 'عدد السجلات التي حُذفت', 'كلمة مرور ملف إكسل'],
    distractorsEn: ['A guaranteed value that cannot change', 'The number of deleted records', 'An Excel file password'],
    explanationAr: 'يعرض فاصل الثقة مجالًا محتملًا للتنبؤ بدل الإيحاء بأن التقدير يقيني.',
    explanationEn: 'A confidence interval presents a plausible range rather than implying certainty.'
  },
  {
    id: 'ai-concepts',
    titleAr: 'مفاهيم الذكاء الاصطناعي',
    titleEn: 'Artificial Intelligence Concepts',
    unitAr: 'الوحدة الثانية: الذكاء الاصطناعي',
    unitEn: 'Unit 2: Artificial Intelligence',
    page: 65,
    practicePage: 72,
    conceptsAr: ['التحول الرقمي وأثره في الشركات والمجتمع', 'البيانات وتعلم الآلة', 'الأخلاقيات والتطبيقات والتطورات المستقبلية'],
    conceptsEn: ['Digital transformation and its effect on organizations and society', 'Data and machine learning', 'Ethics, applications, and future developments'],
    visualSteps: [['بيانات', 'Data'], ['تعلّم آلي', 'Machine learning'], ['نموذج ذكي', 'AI model'], ['تطبيق مسؤول', 'Responsible application']],
    questionAr: 'ما الاعتبار الأخلاقي المهم عند استخدام البيانات في تطبيق ذكاء اصطناعي؟',
    questionEn: 'What is an important ethical consideration when using data in an AI application?',
    correctAr: 'حماية الخصوصية وفحص احتمال التحيز',
    correctEn: 'Protect privacy and check for possible bias',
    distractorsAr: ['جمع كل البيانات دون إذن', 'إخفاء طريقة استخدام البيانات', 'افتراض أن النموذج لا يخطئ'],
    distractorsEn: ['Collect all data without permission', 'Hide how the data is used', 'Assume the model cannot make mistakes'],
    explanationAr: 'يتطلب الاستخدام المسؤول للذكاء الاصطناعي حماية البيانات ومراجعة أثر النموذج.',
    explanationEn: 'Responsible AI use includes protecting data and reviewing a model’s effects.'
  },
  {
    id: 'ai-applications',
    titleAr: 'تطبيقات الذكاء الاصطناعي',
    titleEn: 'Artificial Intelligence Applications',
    unitAr: 'الوحدة الثانية: الذكاء الاصطناعي',
    unitEn: 'Unit 2: Artificial Intelligence',
    page: 75,
    practicePage: 86,
    conceptsAr: ['كيفية عمل تعلم الآلة', 'تطبيقات تعلم الآلة', 'إنشاء نموذج واختباره'],
    conceptsEn: ['How machine learning works', 'Machine-learning applications', 'Build and test a model'],
    visualSteps: [['حدد المهمة', 'Define the task'], ['درّب النموذج', 'Train the model'], ['اختبر أمثلة جديدة', 'Test new examples'], ['راجع الدقة', 'Review accuracy']],
    questionAr: 'لماذا نختبر نموذج تعلم الآلة بأمثلة لم يستخدمها أثناء التدريب؟',
    questionEn: 'Why test a machine-learning model with examples not used in training?',
    correctAr: 'للتأكد من قدرته على التعامل مع بيانات جديدة',
    correctEn: 'To check whether it can handle new data',
    distractorsAr: ['لزيادة حجم بيانات التدريب فقط', 'لإخفاء أخطائه', 'لمنع مقارنة النتائج'],
    distractorsEn: ['Only to increase the training-data size', 'To hide its errors', 'To prevent comparing results'],
    explanationAr: 'تكشف الأمثلة الجديدة ما إذا كان النموذج يعمم ما تعلمه على حالات أخرى.',
    explanationEn: 'New examples reveal whether the model generalizes what it learned to other cases.'
  },
  {
    id: 'ai-programming-with-scratch',
    titleAr: 'الذكاء الاصطناعي باستخدام البرمجة',
    titleEn: 'AI Through Programming',
    unitAr: 'الوحدة الثانية: الذكاء الاصطناعي',
    unitEn: 'Unit 2: Artificial Intelligence',
    page: 87,
    practicePage: 92,
    conceptsAr: ['إنشاء مشروع سكراتش', 'استكشاف فئات اللبنات الجديدة', 'بناء مقطع برمجي واختباره'],
    conceptsEn: ['Create a Scratch project', 'Explore new block categories', 'Build and test a script'],
    visualSteps: [['حدد هدف المشروع', 'Set the project goal'], ['اختر اللبنات', 'Choose blocks'], ['رتب المقطع البرمجي', 'Assemble the script'], ['اختبر السلوك', 'Test the behavior']],
    questionAr: 'ما الخطوة المناسبة بعد تركيب لبنات مشروع سكراتش؟',
    questionEn: 'What is a suitable step after assembling a Scratch project’s blocks?',
    correctAr: 'تشغيل المشروع وتجربة سلوكه ثم تعديل الأخطاء',
    correctEn: 'Run the project, test its behavior, and correct errors',
    distractorsAr: ['حذف اللبنات دون تشغيلها', 'مشاركة كلمة المرور', 'تغيير اسم المشروع فقط'],
    distractorsEn: ['Delete the blocks without running them', 'Share a password', 'Only rename the project'],
    explanationAr: 'يُظهر الاختبار ما إذا كانت اللبنات تحقق الهدف كما خُطط له.',
    explanationEn: 'Testing shows whether the blocks achieve the intended goal.'
  },
  {
    id: 'graphic-design',
    titleAr: 'التصميم الرسومي',
    titleEn: 'Graphic Design',
    unitAr: 'الوحدة الثالثة: التصميم الرسومي',
    unitEn: 'Unit 3: Graphic Design',
    page: 97,
    practicePage: 115,
    conceptsAr: ['التسويق والإعلان', 'مبادئ التصميم وعناصره وأدواته', 'الرسومات المتجهة والنقطية والشعار'],
    conceptsEn: ['Marketing and advertising', 'Design principles, elements, and tools', 'Vector and raster graphics and logos'],
    visualSteps: [['حدد الجمهور والرسالة', 'Define audience and message'], ['اختر العناصر', 'Choose elements'], ['وازن التكوين', 'Balance the composition'], ['راجع وضوح التصميم', 'Review design clarity']],
    questionAr: 'ما الفرق الأساسي بين الرسم المتجهي والرسم النقطي؟',
    questionEn: 'What is a key difference between vector and raster graphics?',
    correctAr: 'يعتمد المتجهي على مسارات قابلة للتكبير، بينما يتكون النقطي من بكسلات',
    correctEn: 'Vector art uses scalable paths, while raster art is made of pixels',
    distractorsAr: ['لا يمكن حفظ المتجهي كملف', 'النقطي لا يحتوي ألوانًا', 'كلاهما نوع واحد بلا اختلاف'],
    distractorsEn: ['Vector art cannot be saved as a file', 'Raster art has no colors', 'They are identical formats'],
    explanationAr: 'يحافظ الرسم المتجهي على حوافه عند التكبير، أما النقطي فيعتمد على شبكة بكسلات.',
    explanationEn: 'Vector art preserves edges when scaled; raster art uses a pixel grid.'
  },
  {
    id: 'design-an-ad-poster',
    titleAr: 'تصميم ملصق إعلاني',
    titleEn: 'Designing an Advertising Poster',
    unitAr: 'الوحدة الثالثة: التصميم الرسومي',
    unitEn: 'Unit 3: Graphic Design',
    page: 118,
    practicePage: 132,
    conceptsAr: ['تنظيم الرسالة والعناصر البصرية', 'اختيار صورة وخط مقروء', 'تصدير الملصق بصيغة صورة'],
    conceptsEn: ['Organize the message and visual elements', 'Choose a suitable image and readable type', 'Export the poster as an image'],
    visualSteps: [['اكتب الرسالة الأساسية', 'Write the main message'], ['اختر صورة مناسبة', 'Choose a suitable image'], ['رتب النص والعناصر', 'Arrange text and elements'], ['صدّر وراجع الملصق', 'Export and review the poster']],
    questionAr: 'ما المبدأ الأفضل عند ترتيب عناصر الملصق الإعلاني؟',
    questionEn: 'What is a good principle when arranging an advertising poster?',
    correctAr: 'إبراز الرسالة الأساسية بتسلسل بصري واضح',
    correctEn: 'Give the main message a clear visual hierarchy',
    distractorsAr: ['جعل كل العناصر بالحجم نفسه', 'إضافة تفاصيل كثيرة بلا ترتيب', 'استخدام صورة لا ترتبط بالإعلان'],
    distractorsEn: ['Make every element the same size', 'Add many details without order', 'Use an image unrelated to the advertisement'],
    explanationAr: 'يساعد التسلسل البصري المشاهد على فهم الرسالة الأهم بسرعة.',
    explanationEn: 'Visual hierarchy helps viewers understand the key message quickly.'
  },
  {
    id: 'animated-advertisements',
    titleAr: 'الإعلانات المتحركة',
    titleEn: 'Animated Advertisements',
    unitAr: 'الوحدة الثالثة: التصميم الرسومي',
    unitEn: 'Unit 3: Graphic Design',
    page: 134,
    practicePage: 146,
    conceptsAr: ['إنشاء الطبقات في إنكسكيب', 'بناء رسم متحرك باستخدام جمب', 'تنظيم الحركة وتسلسل الإطارات'],
    conceptsEn: ['Create layers in Inkscape', 'Build an animation with GIMP', 'Organize motion and frame sequence'],
    visualSteps: [['قسم العناصر إلى طبقات', 'Separate elements into layers'], ['رتب الإطارات', 'Arrange frames'], ['عاين الحركة', 'Preview the motion'], ['صدّر الإعلان', 'Export the advertisement']],
    questionAr: 'ما فائدة فصل عناصر التصميم إلى طبقات قبل التحريك؟',
    questionEn: 'Why separate design elements into layers before animating?',
    correctAr: 'يسهل تعديل كل عنصر وتحريكه دون تغيير العناصر الأخرى',
    correctEn: 'It lets each element be edited and animated independently',
    distractorsAr: ['يمنع حفظ المشروع', 'يزيل الحاجة إلى معاينة الحركة', 'يجعل جميع العناصر صورة واحدة'],
    distractorsEn: ['It prevents saving the project', 'It removes the need to preview motion', 'It merges every element into one image'],
    explanationAr: 'تمنح الطبقات تحكمًا منفصلًا في العناصر أثناء إنشاء الحركة.',
    explanationEn: 'Layers provide independent control of elements while creating motion.'
  },
  {
    id: 'electronic-marketing',
    titleAr: 'مفهوم التسويق الإلكتروني',
    titleEn: 'The Concept of E-Marketing',
    unitAr: 'الوحدة الرابعة: التسويق الإلكتروني',
    unitEn: 'Unit 4: E-Marketing',
    page: 151,
    practicePage: 163,
    conceptsAr: ['طرق التسويق الإلكتروني', 'التواجد الفعال على الشبكة', 'التسويق واسع الانتشار وضوابطه'],
    conceptsEn: ['E-marketing methods', 'Effective online presence', 'Viral marketing and its guidelines'],
    visualSteps: [['حدد الجمهور', 'Define the audience'], ['اختر القناة', 'Choose a channel'], ['صمم رسالة مناسبة', 'Design a suitable message'], ['قِس التفاعل', 'Measure engagement']],
    questionAr: 'ما الخطوة التي تساعد على اختيار قناة تسويق إلكتروني مناسبة؟',
    questionEn: 'What helps select a suitable e-marketing channel?',
    correctAr: 'معرفة الجمهور والهدف والرسالة قبل اختيار القناة',
    correctEn: 'Understand the audience, goal, and message before choosing a channel',
    distractorsAr: ['اختيار القناة الأكثر ازدحامًا دائمًا', 'تجاهل ضوابط التسويق', 'نشر الرسالة نفسها دون مراعاة الجمهور'],
    distractorsEn: ['Always choose the busiest channel', 'Ignore marketing guidelines', 'Publish the same message without considering the audience'],
    explanationAr: 'يرتبط اختيار القناة بخصائص الجمهور وهدف الحملة.',
    explanationEn: 'Channel choice should reflect the audience and campaign goal.'
  },
  {
    id: 'email-marketing',
    titleAr: 'التسويق عبر البريد الإلكتروني',
    titleEn: 'Email Marketing',
    unitAr: 'الوحدة الرابعة: التسويق الإلكتروني',
    unitEn: 'Unit 4: E-Marketing',
    page: 165,
    practicePage: 179,
    conceptsAr: ['أهمية البريد الإلكتروني التسويقي', 'اختيار منصة مناسبة', 'تصميم رسالة وإنشاء منصة للحملة'],
    conceptsEn: ['The role of marketing email', 'Choose a suitable platform', 'Design a message and set up a campaign platform'],
    visualSteps: [['حدد هدف الرسالة', 'Define the message goal'], ['اختر المنصة', 'Choose a platform'], ['صمم المحتوى', 'Design the content'], ['اختبر العرض والإرسال', 'Test the rendering and delivery']],
    questionAr: 'ما الذي ينبغي التحقق منه قبل إرسال رسالة تسويقية؟',
    questionEn: 'What should be checked before sending a marketing email?',
    correctAr: 'وضوح المحتوى وصحة الروابط وملاءمة قائمة المستلمين',
    correctEn: 'Clear content, working links, and an appropriate recipient list',
    distractorsAr: ['إخفاء هوية المرسل', 'إرسالها إلى أي عنوان متاح', 'تضمين بيانات شخصية غير لازمة'],
    distractorsEn: ['Hide the sender’s identity', 'Send it to any available address', 'Include unnecessary personal data'],
    explanationAr: 'تساعد المراجعة على تحسين تجربة المستلم واحترام خصوصيته.',
    explanationEn: 'Review improves the recipient experience and respects privacy.'
  },
  {
    id: 'email-marketing-campaign',
    titleAr: 'حملة التسويق عبر البريد الإلكتروني',
    titleEn: 'An Email Marketing Campaign',
    unitAr: 'الوحدة الرابعة: التسويق الإلكتروني',
    unitEn: 'Unit 4: E-Marketing',
    page: 181,
    practicePage: 197,
    conceptsAr: ['إنشاء قالب للحملة', 'كتابة محتوى رسالة الدعوة', 'تنسيق القالب وإرساله وحفظه'],
    conceptsEn: ['Create a campaign template', 'Write an invitation message', 'Format, send, and save the template'],
    visualSteps: [['أنشئ القالب', 'Create the template'], ['اكتب الدعوة', 'Write the invitation'], ['نسق واختبر', 'Format and test'], ['أرسل واحفظ نسخة', 'Send and save a copy']],
    questionAr: 'لماذا يُختبر قالب البريد قبل إرساله إلى قائمة المستلمين؟',
    questionEn: 'Why test an email template before sending it to recipients?',
    correctAr: 'للتأكد من ظهور التنسيق والروابط والمحتوى بصورة سليمة',
    correctEn: 'To ensure formatting, links, and content display correctly',
    distractorsAr: ['لمنع المستلمين من قراءة الرسالة', 'لإلغاء الحاجة إلى عنوان واضح', 'لإضافة مستلمين دون موافقتهم'],
    distractorsEn: ['To prevent recipients from reading it', 'To remove the need for a clear subject', 'To add recipients without consent'],
    explanationAr: 'يكشف الاختبار المبكر مشكلات العرض أو الروابط قبل وصول الرسالة.',
    explanationEn: 'A test can reveal display or link problems before the email is delivered.'
  },
  {
    id: 'html-formatting',
    titleAr: 'التنسيق باستخدام وسوم HTML',
    titleEn: 'Formatting with HTML Tags',
    unitAr: 'الوحدة الخامسة: البرمجة المتقدمة باستخدام لغة ترميز النص التشعبي',
    unitEn: 'Unit 5: Advanced HTML Programming',
    page: 205,
    practicePage: 211,
    conceptsAr: ['تنسيق النص باستخدام الوسوم', 'تنسيق الصور', 'تهيئة عرض ملفات الفيديو'],
    conceptsEn: ['Format text with tags', 'Format images', 'Configure video display'],
    visualSteps: [['ابدأ ببنية HTML', 'Start with HTML structure'], ['أضف وسوم النص', 'Add text tags'], ['أدرج وسائط مناسبة', 'Insert suitable media'], ['عاين صفحة الويب', 'Preview the web page']],
    questionAr: 'ما وظيفة وسم HTML عند إنشاء صفحة ويب؟',
    questionEn: 'What is the role of an HTML tag when creating a web page?',
    correctAr: 'وصف بنية المحتوى أو نوع العنصر للمتصفح',
    correctEn: 'Describe content structure or an element to the browser',
    distractorsAr: ['تخزين كلمة مرور المستخدم', 'استبدال جميع ملفات الصور', 'تحديد سرعة اتصال الشبكة'],
    distractorsEn: ['Store the user’s password', 'Replace all image files', 'Set the network connection speed'],
    explanationAr: 'تساعد الوسوم على تحديد عناصر الصفحة وبنيتها.',
    explanationEn: 'Tags identify page elements and help define document structure.'
  },
  {
    id: 'css-stylesheets',
    titleAr: 'تصميم صفحات التنسيق النمطية',
    titleEn: 'Designing Cascading Style Sheets',
    unitAr: 'الوحدة الخامسة: البرمجة المتقدمة باستخدام لغة ترميز النص التشعبي',
    unitEn: 'Unit 5: Advanced HTML Programming',
    page: 213,
    practicePage: 228,
    conceptsAr: ['بنية ملف CSS وأنواعه', 'ربط CSS بصفحة HTML', 'المحددات وخصائص تنسيق النص'],
    conceptsEn: ['CSS structure and file types', 'Link CSS to an HTML page', 'Selectors and text-formatting properties'],
    visualSteps: [['حدد عنصر HTML', 'Identify an HTML element'], ['اكتب محدد CSS', 'Write a CSS selector'], ['أضف خصائص التنسيق', 'Add style properties'], ['تحقق من النتيجة', 'Check the result']],
    questionAr: 'ما دور محدد CSS في قاعدة التنسيق؟',
    questionEn: 'What does a CSS selector do in a style rule?',
    correctAr: 'يحدد عناصر HTML التي ستُطبّق عليها الخصائص',
    correctEn: 'It identifies the HTML elements that receive the properties',
    distractorsAr: ['ينشئ قاعدة بيانات للموقع', 'يرسل الصفحة إلى المستخدم', 'يحوّل الصورة إلى فيديو'],
    distractorsEn: ['Create a website database', 'Send the page to the user', 'Convert an image to video'],
    explanationAr: 'يربط المحدد قاعدة التنسيق بالعناصر المستهدفة في الصفحة.',
    explanationEn: 'The selector connects a style rule to its target page elements.'
  },
  {
    id: 'website-design',
    titleAr: 'تصميم الموقع الإلكتروني',
    titleEn: 'Website Design',
    unitAr: 'الوحدة الخامسة: البرمجة المتقدمة باستخدام لغة ترميز النص التشعبي',
    unitEn: 'Unit 5: Advanced HTML Programming',
    page: 232,
    practicePage: 250,
    conceptsAr: ['مراحل إنشاء الموقع وخصائصه', 'محددات CSS وتجاوز السعة', 'نموذج الصندوق والصور وشريط التصفح'],
    conceptsEn: ['Website creation stages and usability', 'CSS classes and overflow', 'The box model, images, and navigation'],
    visualSteps: [['خطط للصفحات', 'Plan the pages'], ['أنشئ هيكل المحتوى', 'Build the content structure'], ['نسق الصندوق والتنقل', 'Style layout and navigation'], ['اختبر الموقع', 'Test the website']],
    questionAr: 'ما الذي يمثله نموذج الصندوق في CSS؟',
    questionEn: 'What does the CSS box model represent?',
    correctAr: 'المحتوى والحشو والحدود والهوامش حول العنصر',
    correctEn: 'The content, padding, border, and margin around an element',
    distractorsAr: ['اسم النطاق وخادم الموقع', 'ترتيب ملفات الصور فقط', 'مراحل إرسال رسالة بريدية'],
    distractorsEn: ['The domain name and web server', 'Only the order of image files', 'The steps for sending an email'],
    explanationAr: 'يساعد نموذج الصندوق على فهم المساحة التي يشغلها العنصر وعلاقته بما حوله.',
    explanationEn: 'The box model explains an element’s size and spacing relative to nearby content.'
  },
  {
    id: 'responsive-web-design',
    titleAr: 'التصميم المستجيب للمواقع الإلكترونية',
    titleEn: 'Responsive Web Design',
    unitAr: 'الوحدة الخامسة: البرمجة المتقدمة باستخدام لغة ترميز النص التشعبي',
    unitEn: 'Unit 5: Advanced HTML Programming',
    page: 252,
    practicePage: 269,
    conceptsAr: ['مزايا التصميم المستجيب وإطار العرض', 'محاكاة الأجهزة واستعلامات الوسائط', 'تنسيق الصور والقوائم'],
    conceptsEn: ['Benefits of responsive design and the viewport', 'Device emulation and media queries', 'Style images and menus'],
    visualSteps: [['حدد أحجام الشاشات', 'Identify screen sizes'], ['أضف إطار العرض', 'Set the viewport'], ['اكتب استعلام الوسائط', 'Write a media query'], ['اختبر التخطيط', 'Test the layout']],
    questionAr: 'كيف يساعد استعلام الوسائط في تصميم موقع مستجيب؟',
    questionEn: 'How does a media query support responsive design?',
    correctAr: 'بتطبيق تنسيقات مختلفة وفق خصائص نافذة العرض',
    correctEn: 'By applying different styles based on viewport characteristics',
    distractorsAr: ['بإيقاف تحميل صفحة HTML', 'بحذف الصور من كل الأجهزة', 'بتغيير اسم ملف CSS فقط'],
    distractorsEn: ['By stopping the HTML page from loading', 'By deleting images on every device', 'By only renaming the CSS file'],
    explanationAr: 'تتيح استعلامات الوسائط تكييف التخطيط مع أحجام الشاشات وظروف العرض.',
    explanationEn: 'Media queries adapt a layout to screen sizes and display conditions.'
  },
  {
    id: 'interactive-website',
    titleAr: 'الموقع الإلكتروني التفاعلي',
    titleEn: 'The Interactive Website',
    unitAr: 'الوحدة الخامسة: البرمجة المتقدمة باستخدام لغة ترميز النص التشعبي',
    unitEn: 'Unit 5: Advanced HTML Programming',
    page: 275,
    practicePage: 293,
    conceptsAr: ['أساسيات جافا سكريبت والمقاطع البرمجية', 'الملف الخارجي وقائمة همبرغر', 'تحسين محركات البحث'],
    conceptsEn: ['JavaScript basics and scripts', 'External scripts and a hamburger menu', 'Search-engine optimization'],
    visualSteps: [['أضف ملف JavaScript', 'Add a JavaScript file'], ['استجب لتفاعل المستخدم', 'Respond to user interaction'], ['اختبر القائمة', 'Test the menu'], ['حسّن قابلية الاكتشاف', 'Improve discoverability']],
    questionAr: 'ما فائدة وضع شيفرة جافا سكريبت في ملف خارجي؟',
    questionEn: 'What is one benefit of placing JavaScript in an external file?',
    correctAr: 'فصل السلوك عن بنية الصفحة وإعادة استخدام الشيفرة',
    correctEn: 'Separate behavior from page structure and reuse the script',
    distractorsAr: ['إلغاء الحاجة إلى اختبار الصفحة', 'منع المتصفح من تحميل HTML', 'استبدال أنماط CSS تلقائيًا'],
    distractorsEn: ['Remove the need to test the page', 'Prevent the browser from loading HTML', 'Automatically replace CSS styles'],
    explanationAr: 'يسهل الملف الخارجي تنظيم الشيفرة وإدارتها وإعادة استخدامها.',
    explanationEn: 'External files make scripts easier to organize, maintain, and reuse.'
  },
  {
    id: 'digital-newsletters',
    titleAr: 'الرسائل الإخبارية الرقمية',
    titleEn: 'Digital Newsletters',
    unitAr: 'الوحدة الخامسة: البرمجة المتقدمة باستخدام لغة ترميز النص التشعبي',
    unitEn: 'Unit 5: Advanced HTML Programming',
    page: 301,
    practicePage: 311,
    conceptsAr: ['استخدام الجداول في HTML', 'تنظيم محتوى الرسالة الإخبارية', 'مراجعة التصميم قبل النشر'],
    conceptsEn: ['Use tables in HTML', 'Organize newsletter content', 'Review the design before publishing'],
    visualSteps: [['حدد أقسام الرسالة', 'Define newsletter sections'], ['نظمها في جدول HTML', 'Arrange them in an HTML table'], ['أضف المحتوى والروابط', 'Add content and links'], ['راجع العرض', 'Review the rendering']],
    questionAr: 'ما الاعتبار الأهم عند تنظيم رسالة إخبارية رقمية؟',
    questionEn: 'What is an important consideration when organizing a digital newsletter?',
    correctAr: 'ترتيب المعلومات بوضوح مع مراعاة سهولة القراءة',
    correctEn: 'Arrange information clearly and keep it readable',
    distractorsAr: ['إخفاء عناوين الأقسام', 'استخدام جداول متداخلة بلا حاجة', 'إضافة عناصر لا تخدم المحتوى'],
    distractorsEn: ['Hide section headings', 'Use unnecessary nested tables', 'Add elements unrelated to the content'],
    explanationAr: 'يساعد التنظيم الواضح على قراءة الرسالة والوصول إلى أقسامها.',
    explanationEn: 'Clear organization helps readers scan the message and find its sections.'
  }
];

export const SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LESSON_COUNT = lessons.length;
export const SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_TABLE_OF_CONTENTS = lessons.map(
  ({ titleAr, titleEn, unitAr, unitEn, page, practicePage }) => ({
    titleAr,
    titleEn,
    unitAr,
    unitEn,
    page,
    practicePage
  })
);

function createLecture(spec: LessonSpec, index: number): Lecture {
  const lectureId = `sa-business-dt11-${spec.id}`;
  const visualSteps: LectureDiagramStep[] = spec.visualSteps.map(([labelAr, labelEn]) => ({
    labelAr,
    labelEn
  }));
  const questionIndex = index % 4;
  const optionsAr = [...spec.distractorsAr];
  const optionsEn = [...spec.distractorsEn];
  optionsAr.splice(questionIndex, 0, spec.correctAr);
  optionsEn.splice(questionIndex, 0, spec.correctEn);
  const question: Question = {
    id: `${lectureId}-question`,
    textAr: spec.questionAr,
    textEn: spec.questionEn,
    optionsAr,
    optionsEn,
    correctIndex: questionIndex,
    conceptTestedAr: spec.unitAr,
    conceptTestedEn: spec.unitEn,
    explanationAr: spec.explanationAr,
    explanationEn: spec.explanationEn,
    difficulty: 'medium'
  };
  const sourceRange = `ص ${spec.page}؛ نشاط «لنطبق معًا» ص ${spec.practicePage}`;
  const sourceRangeEn = `p. ${spec.page}; practice activity p. ${spec.practicePage}`;

  return {
    id: `${lectureId}-lecture`,
    order: index + 1,
    titleAr: spec.titleAr,
    titleEn: spec.titleEn,
    subtitleAr: spec.unitAr,
    subtitleEn: spec.unitEn,
    durationMinutes: 40,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,
    gradeLevelNameAr: 'الصف الثاني الثانوي – مسار إدارة الأعمال – التقنية الرقمية 2',
    gradeLevelNameEn: 'Grade 11 – Business Management Track – Digital Technology 2',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Semester 1',
    unitTitleAr: spec.unitAr,
    unitTitleEn: spec.unitEn,
    lessonNumberAr: `الدرس ${index + 1}`,
    lessonNumberEn: `Lesson ${index + 1}`,
    keyConceptsAr: spec.conceptsAr,
    keyConceptsEn: spec.conceptsEn,
    summaryAr: `${spec.conceptsAr.join('؛ ')}.\n\nمواءمة الفهرس: ${sourceRange}. ${sourceNoteAr}`,
    summaryEn: `${spec.conceptsEn.join('; ')}.\n\nContents crosswalk: ${sourceRangeEn}. ${sourceNoteEn}`,
    sections: [{
      titleAr: spec.titleAr,
      titleEn: spec.titleEn,
      contentAr: `${spec.conceptsAr.join('\n')}\n\n${sourceNoteAr}`,
      contentEn: `${spec.conceptsEn.join('\n')}\n\n${sourceNoteEn}`,
      diagram: {
        id: `${lectureId}-diagram`,
        figureNumberAr: `شكل (${index + 1})`,
        figureNumberEn: `Figure (${index + 1})`,
        titleAr: `رسم تعليمي: ${spec.titleAr}`,
        titleEn: `Learning diagram: ${spec.titleEn}`,
        captionAr: 'مخطط تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
        captionEn: 'An original platform learning diagram, not an image from the textbook.',
        diagramType: 'digital_skills',
        visualSteps
      }
    }],
    assessment: {
      id: `${lectureId}-assessment`,
      lectureId,
      titleAr: `تقويم: ${spec.titleAr}`,
      titleEn: `Assessment: ${spec.titleEn}`,
      passingScore: 80,
      questions: [question]
    }
  };
}

export const SAUDI_BUSINESS_G11_DIGITAL_TECHNOLOGY_LECTURES: Lecture[] =
  lessons.map(createLecture);
