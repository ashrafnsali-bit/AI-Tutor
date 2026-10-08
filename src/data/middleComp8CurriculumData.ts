import type { Lecture } from '../types';

// ============================================================================
// MIDDLE SCHOOL ICT & WEB DEVELOPMENT (draft computer-science bank for Grade 8)
// This content has not been verified against the current Saudi Ministry of Education textbook.
// Unit 1: HTML Basics, Document Structure, Formatting, Tables, Images & Links
// Unit 2: CSS Styling, Colors, Box Model & External Stylesheets
// Unit 3: JavaScript Fundamentals (Variables, Conditionals, DOM & Events)
// Unit 4: Multimedia Embedding (Audio/Video) & Interactive Web Forms with Validation
// Unit 5: Cyber Safety, Digital Footprint, Privacy & Web Hosting / Deployment
// ============================================================================

export const MIDDLE_COMPUTER_SCIENCE_G8_LECTURES: Lecture[] = [
  // ── LECTURE 1: HTML BASICS & WEB PAGE STRUCTURE ──
  {
    id: 'm-comp8-1',
    order: 1,
    titleAr: 'المحاضرة 1: لغة HTML وبنية صفحات الويب والوسوم الأساسية',
    titleEn: 'Lecture 1: HTML5 Basics - Web Structure, Tags, Formatting, Tables & Hyperlinks',
    subtitleAr: 'بنية مستند HTML، الوسوم الزوجية والفردية، تنسيق النصوص، الروابط التشعبية، الجداول، والصور',
    subtitleEn: 'Master HTML5 document tree, paired vs void tags, typography, hyperlinks, tables, lists, and images.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - مدارس اللغات والرسمية',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School ICT & Web Development',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 - draft curriculum content',
    unitTitleAr: 'الوحدة الأولى: تصميم مواقع الويب بلغة HTML (Web Page Design with HTML)',
    unitTitleEn: 'Unit 1: HTML Web Page Construction & Layout',
    lessonNumberAr: 'الدرس 1: بنية مستند HTML والوسوم الأساسية للجداول والروابط',
    lessonNumberEn: 'Lesson 1: HTML Document Structure, Tags, Tables & Links',

    warmupHookAr: 'كل موقع تزوره يومياً على الإنترنت - من محركات البحث إلى منصات الألعاب - مبني في أصله بلغة HTML! هل تساءلت كيف يفهم المتصفح النصوص والصور والجداول؟ في هذه المحاضرة تبدأ رحلتك الحقيقية كمطور ويب وتكتب أول صفحة إنترنت متكاملة بيدك!',
    warmupHookEn: 'Every website on earth is structured with HTML. Learn how browsers interpret tags to display headings, images, links, and data tables!',

    learningOutcomesAr: [
      'أن يكتب الطالب بنية مستند HTML5 صحيحة تتضمن DOCTYPE وhtml وhead وbody',
      'أن يميز بين الوسوم الزوجية (Paired Tags) والوسوم الفردية (Void Tags) مثل br وimg وhr',
      'أن يطبق وسوم تنسيق النصوص: العناوين h1-h6، والفقرات p، والخط الغامق b، والمائل i',
      'أن ينشئ روابط تشعبية فعالة باستخدام الوسم a وخاصية href وخاصية target="_blank"',
      'أن يبني جداول بيانات منظمة باستخدام وسوم table وtr وth وtd'
    ],
    learningOutcomesEn: [
      'Write valid HTML5 document structure with DOCTYPE, html, head, and body',
      'Distinguish paired tags with closing tags from void tags (br, img, hr)',
      'Apply typography formatting: headings h1-h6, paragraph p, bold b, italic i',
      'Create hyperlinks using anchor tag with href and target attributes',
      'Construct structured data tables using table, tr, th, and td tags'
    ],

    vocabulary: [
      {
        termAr: 'HTML (HyperText Markup Language)',
        termEn: 'HTML',
        definitionAr: 'لغة ترميز النص التشعبي القياسية المستخدمة في بناء الهيكل والأساس لجميع صفحات الويب.',
        definitionEn: 'The standard markup language used to structure web pages and their content.'
      },
      {
        termAr: 'الوسم (HTML Tag)',
        termEn: 'HTML Tag',
        definitionAr: 'أمر برمجي محاط بقوسي زاوية < > يخبر المتصفح بكيفية عرض وتنسيق المحتوى.',
        definitionEn: 'A code instruction enclosed in angle brackets telling the browser how to render content.'
      },
      {
        termAr: 'الرابط التشعبي (Hyperlink)',
        termEn: 'Hyperlink',
        definitionAr: 'عنصر نصي أو صورة عند النقر عليه ينقل الزائر إلى صفحة ويب أخرى أو موقع خارجي.',
        definitionEn: 'A clickable link connecting the user to another page or external resource.'
      }
    ],

    keyConceptsAr: [
      'بنية مستند HTML: إعلان DOCTYPE ثم قسم head للبيانات الوصفية وقسم body للمحتوى المرئي',
      'أنواع الوسوم: وسوم زوجية لها فتح وإغلاق <p>...</p> مقابل وسوم فردية لا تغلق <br> و<img>',
      'تنسيق النصوص: تدرج العناوين من <h1> الأكبر إلى <h6> الأصغر، والوسوم <b> و<i> و<u>',
      'الروابط والصور: الرابط <a href="..."> والصورة <img src="..." alt="...">',
      'الجداول والقوائم: الجدول <table> والصفوف <tr> والخلايا <th> و<td>، والقوائم <ul> و<ol>'
    ],
    keyConceptsEn: [
      'HTML Document Tree: DOCTYPE declaration, head metadata, and visible body container',
      'Tag classification: Paired container tags vs void self-closing tags (br, img, hr)',
      'Typography hierarchy: Heading levels h1-h6, paragraphs, bold, italic, and underline',
      'Hyperlinks and Media: Anchor href links and img source attributes',
      'Tables and Lists: Table rows, headers, cells, ordered ol and unordered ul lists'
    ],
    summaryAr: 'تأسيس متكامل في لغة HTML5: بنية الصفحة الأساسية، وسوم التنسيق والعناوين، إضافة الصور والروابط، وإنشاء الجداول والقوائم المنظمة.',
    summaryEn: 'Complete foundation in HTML5: core page architecture, text styling tags, hyperlinking, images, lists, and structured data tables.',

    sections: [
      {
        titleAr: '1. بنية مستند HTML5 الأساسية',
        titleEn: '1. HTML5 Document Tree & Structure',
        contentAr: 'كل صفحة ويب تبدأ بإعلان <!DOCTYPE html> لإخبار المتصفح بإصدار HTML5. يلي ذلك الوسم الجذري <html> الذي يحتوي قسمين رئيسيين: 1) <head>: يحتوي بيانات وصفية وعنوان الصفحة <title> والروابط الخارجية. 2) <body>: يحتوي على كل النصوص والصور والأزرار المرئية للمستخدم.',
        contentEn: 'Every web document starts with <!DOCTYPE html>. The root <html> tag encapsulates two primary sections: <head> containing metadata and page title, and <body> containing all visible content.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: كتابة أول صفحة HTML5 مع العناوين والفقرات',
          titleEn: 'Worked Example 1: Creating a Valid Minimal HTML5 Web Page',
          equation: '<!DOCTYPE html>  -->  <html>  -->  <head> + <body>',
          steps: [
            {
              stepNumber: 1,
              textAr: 'ابدأ بكتابة <!DOCTYPE html> في السطر الأول لتعريف نوع المستند.',
              textEn: 'Start with <!DOCTYPE html> on line 1.',
              noteAr: 'إعلان المعيار القياسي'
            },
            {
              stepNumber: 2,
              textAr: 'افتح الوسم <html lang="ar"> واكتب بداخله قسم <head><title>مدرستي الذكية</title></head>.',
              textEn: 'Open <html lang="ar"> and define head with title.',
              noteAr: 'البيانات الوصفية والعنوان'
            },
            {
              stepNumber: 3,
              textAr: 'أضف قسم <body> واكتب داخله <h1>مرحباً بكم</h1> و <p>الصفحة الأولى في مسار البرمجة.</p>.',
              textEn: 'Add <body> containing h1 heading and p paragraph.',
              noteAr: 'المحتوى المرئي للمستخدم'
            }
          ],
          takeawayAr: 'المتصفح لا يعرض محتويات head مباشرة للمستخدم، بينما يعرض كل ما يوضع داخل body.',
          takeawayEn: 'Head holds document configuration and title, while body holds all rendered visual elements.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-1-1',
          questionAr: 'أين يُكتب عنوان الصفحة الذي يظهر في شريط التبويب بالمتصفح؟',
          questionEn: 'Where is the page title displayed in browser tab defined?',
          optionsAr: ['داخل الوسم <title> داخل قسم <head>', 'داخل الوسم <h1> داخل قسم <body>', 'داخل الوسم <footer>', 'داخل وسم <meta>'],
          optionsEn: ['Inside <title> inside <head>', 'Inside <h1> inside <body>', 'Inside <footer>', 'Inside <meta>'],
          correctIndex: 0,
          explanationAr: 'الوسم <title> يوضع حصراً داخل قسم <head> ويحدد اسم التبويب في المتصفح.',
          explanationEn: '<title> resides inside <head> and sets the browser tab label.',
          hintAr: 'ابحث عن الوسم الذي يوضع في رأس المستند.'
        },
        tipsAr: [
          'احرص دائماً على تحديد لغة الصفحة lang="ar" لدعم محاذاة النص العربي بشكل صحيح.',
          'الوسوم في HTML غير حساسة لحالة الأحرف ولكن كتابتها بحروف صغيرة (lowercase) هو المعيار القياسي.'
        ],
        tipsEn: [
          'Always specify the page language attribute (lang="ar" or lang="en").',
          'HTML tags are case-insensitive, but lowercase is standard best practice.'
        ]
      },
      {
        titleAr: '2. وسوم تنسيق النصوص والعناوين والوسوم الفردية',
        titleEn: '2. Text Formatting, Headings & Void Tags',
        contentAr: 'توفر HTML ستة مستويات للعناوين من <h1> (الأكبر والأهم) حتى <h6> (الأصغر). لتنسيق الفقرات نستخدم <p>، وللخط العريض <b> أو <strong>، وللخط المائل <i>، وللتسطير <u>. الوسوم الفردية مثل <br> لإضافة سطر جديد و<hr> لرسم خط فاصل أفقي لا تحتاج لوسم إغلاق.',
        contentEn: 'HTML features six heading levels (h1 largest to h6 smallest). Typography tags include p for paragraphs, b/strong for bold, i for italic, and u for underline. Void tags like br (line break) and hr (horizontal rule) require no closing tag.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: تنسيق مقال تعريفي بمستويات العناوين والخطوط',
          titleEn: 'Worked Example 2: Structuring Article with Headings and Formats',
          equation: 'h1 (رئيسي) > h2 (فرعي) | b (غامق) | i (مائل) | br (سطر جديد)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'العنوان الرئيسي: <h1>تاريخ شبكة الإنترنت</h1>.',
              textEn: 'Main Title: <h1>History of the Internet</h1>.',
              noteAr: 'أكبر حجم خط'
            },
            {
              stepNumber: 2,
              textAr: 'عنوان فرعي وفقرة: <h2>البدايات</h2> مع <p>بدأت الشبكة كمشروع <b>علمي عسكري</b>.</p>.',
              textEn: 'Subheading & paragraph: <h2>Origins</h2> with bold text.',
              noteAr: 'نص غامق للتأكيد'
            },
            {
              stepNumber: 3,
              textAr: 'إضافة فاصل: <hr> ثم سطر جديد <br> لبدء الفقرة التالية.',
              textEn: 'Add horizontal rule <hr> and line break <br>.',
              noteAr: 'وسوم فردية للتنسيق'
            }
          ],
          takeawayAr: 'استخدم h1 مرة واحدة لكل صفحة كعنوان رئيسي، ثم تدرج بـ h2 و h3 لتنظيم المحتوى لمحركات البحث.',
          takeawayEn: 'Use h1 once per page for the main topic, using h2 and h3 for structured hierarchy.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-1-2',
          questionAr: 'أي من الوسوم التالية يُعد وسماً فردياً (Void Tag) ولا يحتاج لوسم إغلاق؟',
          questionEn: 'Which of the following is a void tag that does not have a closing tag?',
          optionsAr: ['الوسم <br>', 'الوسم <p>', 'الوسم <h1>', 'الوسم <table>'],
          optionsEn: ['<br> tag', '<p> tag', '<h1> tag', '<table> tag'],
          correctIndex: 0,
          explanationAr: 'الوسم <br> وسم فردي يضيف سطراً جديداً دون الحاجة لوسم إغلاق، ومثله <img> و <hr>.',
          explanationEn: '<br> is a void element with no content or closing tag, like <img> and <hr>.',
          hintAr: 'ابحث عن وسم السطر الجديد.'
        },
        tipsAr: [
          'لا تستخدم وسوم العناوين h1-h6 لتكبير حجم النص فقط، بل استخدمها لتعريف الهيكل المنطقي.',
          'الوسم <strong> يماثل <b> لكنه يمنح النص أهمية دلالية لقارئات الشاشة.'
        ],
        tipsEn: [
          'Use headings for semantic page hierarchy, not merely for visual font sizing.',
          'The strong tag gives semantic emphasis beneficial for screen readers.'
        ]
      },
      {
        titleAr: '3. الروابط التشعبية وإدراج الصور',
        titleEn: '3. Hyperlinks & Image Integration',
        contentAr: 'الرابط التشعبي يُنشأ بالوسم <a> مع خاصية href التي تحدد الرابط المطلوب، وخاصية target="_blank" لفتح الرابط في تبويب جديد. إدراج الصور يتم بالوسم الفردي <img> مع خاصية src لمسار الصورة، وخاصية alt للنص البديل، وخاصيتي width و height للتحكم في الأبعاد.',
        contentEn: 'Hyperlinks are created with the <a> anchor tag using href for URL destination and target="_blank" for new tabs. Images use the void <img> tag with src path, alt alternative text, and width/height dimensions.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: إنشاء صورة قابلة للنقر كرابط تشعبي',
          titleEn: 'Worked Example 3: Clickable Image Navigating to External Portal',
          equation: '<a href="URL"><img src="image.jpg" alt="..."></a>',
          steps: [
            {
              stepNumber: 1,
              textAr: 'افتح وسم الرابط: <a href="https://moe.gov.eg" target="_blank">.',
              textEn: 'Open anchor tag: <a href="https://moe.gov.eg" target="_blank">.',
              noteAr: 'وجهة الرابط'
            },
            {
              stepNumber: 2,
              textAr: 'ضع وسم الصورة بالداخل: <img src="logo.png" alt="شعار الوزارة" width="200">.',
              textEn: 'Nest image tag: <img src="logo.png" alt="Logo" width="200">.',
              noteAr: 'الصورة ومسارها'
            },
            {
              stepNumber: 3,
              textAr: 'أغلق وسم الرابط: </a> ليصبح النقر على الصورة محولاً للموقع.',
              textEn: 'Close anchor tag: </a> making image fully clickable.',
              noteAr: 'إغلاق وسم الحاوية'
            }
          ],
          takeawayAr: 'خاصية alt في الصور ضرورية لتمكين محركات البحث وقارئات الشاشة للمكفوفين من فهم محتوى الصورة.',
          takeawayEn: 'The alt attribute is crucial for accessibility and search engine image indexing.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-1-3',
          questionAr: 'ما هي الخاصية المسؤولة عن فتح الرابط في نافذة أو تبويب جديد بالمتصفح؟',
          questionEn: 'Which attribute opens a link in a new browser tab or window?',
          optionsAr: ['target="_blank"', 'href="_new"', 'window="open"', 'tab="new"'],
          optionsEn: ['target="_blank"', 'href="_new"', 'window="open"', 'tab="new"'],
          correctIndex: 0,
          explanationAr: 'الخاصية target="_blank" تخبر المتصفح بفتح صفحة الرابط في تبويب مستقل جديد.',
          explanationEn: 'target="_blank" instructs the browser to load the link in a new browsing context.',
          hintAr: 'ابحث عن خاصية الهدف target.'
        },
        tipsAr: [
          'تأكد دائماً من وجود مسار الصورة الصحيح src لتجنب ظهور أيقونة الصورة المكسورة.',
          'الروابط النسبية (Relative) تُستخدم للصفحات الداخلية والروابط المطلقة (Absolute) للمواقع الخارجية.'
        ],
        tipsEn: [
          'Verify image file paths to avoid broken image icons.',
          'Use relative URLs for internal pages and absolute URLs for external domains.'
        ]
      },
      {
        titleAr: '4. جداول البيانات والقوائم المنظمة',
        titleEn: '4. Structured Data Tables & HTML Lists',
        contentAr: 'الجداول تُنشأ بالوسم <table>. كل صف يُعرّف بالوسم <tr> (Table Row)، وخلايا العناوين بالوسم <th> (تظهر بخط غامق ومتوسط تلقائياً)، وخلايا البيانات بالوسم <td>. القوائم نوعان: غير مرتبة <ul> بنقاط، ومرتبة <ol> بأرقام، وعناصر القائمة بالوسم <li>.',
        contentEn: 'Tables use <table>, with rows defined by <tr>, header cells by <th> (bold centered), and data cells by <td>. Lists include unordered bulleted lists <ul>, ordered numbered lists <ol>, and list items <li>.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: تصميم جدول جدول حصص دراسي متكامل',
          titleEn: 'Worked Example 4: Complete Weekly Class Timetable Table',
          equation: 'table > tr (صفوف) > th (رأس) أو td (بيانات)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'افتح الجدول: <table border="1">.',
              textEn: 'Open table: <table border="1">.',
              noteAr: 'حاوية الجدول'
            },
            {
              stepNumber: 2,
              textAr: 'أنشئ صف الرأس: <tr><th>اليوم</th><th>الحصة 1</th><th>الحصة 2</th></tr>.',
              textEn: 'Header row with th elements.',
              noteAr: 'عناوين الأعمدة'
            },
            {
              stepNumber: 3,
              textAr: 'أضف صف البيانات: <tr><td>الأحد</td><td>رياضيات</td><td>حاسب آلي</td></tr>.',
              textEn: 'Data row with td elements.',
              noteAr: 'خلايا البيانات'
            }
          ],
          takeawayAr: 'الفرق الأساسي بين th و td أن th مخصصة لعناوين الأعمدة وتنسق تلقائياً بخط غامق ومتوسط.',
          takeawayEn: 'Header th cells format text bold and centered by default compared to regular td cells.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-1-4',
          questionAr: 'ما الوسم المستخدم لإنشاء صف جديد داخل جدول HTML؟',
          questionEn: 'Which HTML tag creates a new row inside a table?',
          optionsAr: ['الوسم <tr>', 'الوسم <td>', 'الوسم <th>', 'الوسم <table-row>'],
          optionsEn: ['<tr> tag', '<td> tag', '<th> tag', '<table-row> tag'],
          correctIndex: 0,
          explanationAr: 'الوسم <tr> يعني Table Row ويستخدم لإنشاء صف في الجدول يحتوي بداخله خلايا th أو td.',
          explanationEn: '<tr> stands for Table Row and encapsulates th or td cell elements.',
          hintAr: 'اختصار Table Row.'
        },
        tipsAr: [
          'خاصية border="1" تظهر حدود الجدول، ولكن يفضل دائماً تنسيق الحدود المتقدمة عبر CSS.',
          'يمكن دمج الخلايا أفقياً بـ colspan وعمودياً بـ rowspan.'
        ],
        tipsEn: [
          'Use CSS for table borders and styling instead of deprecated HTML attributes.',
          'Merge cells horizontally with colspan and vertically with rowspan.'
        ]
      }
    ],

    conceptMapAr: [
      'هيكل HTML: DOCTYPE + html + head (بيانات) + body (محتوى مرئي)',
      'وسوم النصوص: h1-h6 (عناوين) + p (فقرة) + b/i/u (تنسيق خط)',
      'وسوم فردية: br (سطر جديد) + hr (خط فاصل) + img (صورة)',
      'الروابط: a href="URL" target="_blank"',
      'الجداول: table + tr (صفوف) + th (رأس) + td (بيانات)'
    ],
    conceptMapEn: [
      'HTML Architecture: DOCTYPE + html + head (metadata) + body (view)',
      'Text tags: h1-h6 headings, p paragraph, b/i/u inline formatting',
      'Void tags: br newline, hr divider, img graphic',
      'Links: a anchor with href and target',
      'Tables: table container with tr rows, th headers, td data cells'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp8-1-1',
        questionAr: 'اكتب كود HTML لصفحة ويب بسيطة تحتوي على عنوان رئيسي باسم "مدرستي" وفقرة ترحيبية ورابط لموقع وزارة التربية والتعليم.',
        questionEn: 'Write HTML code for a simple page with an h1 heading "My School", a welcome paragraph, and a Ministry of Education link.',
        solutionStepsAr: [
          '1) كتابة إعلان DOCTYPE وقسمي html و head و body.',
          '2) كتابة الوسم <h1>مدرستي</h1> داخل body.',
          '3) إضافة الوسم <p>مرحباً بكم في مدرستي الإلكترونية.</p>.',
          '4) إضافة الرابط <a href="https://moe.gov.eg" target="_blank">موقع وزارة التعليم</a>.'
        ],
        solutionStepsEn: [
          '1) Define DOCTYPE, html, head, and body.',
          '2) Add <h1>My School</h1> in body.',
          '3) Add <p>Welcome to our school website.</p>.',
          '4) Add <a href="https://moe.gov.eg" target="_blank">Ministry of Education</a>.'
        ],
        answerAr: '<!DOCTYPE html><html><head><title>مدرستي</title></head><body><h1>مدرستي</h1><p>أهلاً بكم</p><a href="https://moe.gov.eg">وزارة التعليم</a></body></html>',
        answerEn: '<!DOCTYPE html><html><head><title>My School</title></head><body><h1>My School</h1><p>Welcome</p><a href="https://moe.gov.eg">MOE Link</a></body></html>'
      },
      {
        id: 'ex-mcomp8-1-2',
        questionAr: 'صمم جدول HTML يتكون من 3 أعمدة (اسم الطالب، المادة، الدرجة) وصفين من البيانات.',
        questionEn: 'Design an HTML table with 3 columns (Student Name, Subject, Grade) and 2 data rows.',
        solutionStepsAr: [
          '1) فتح وسم <table> مع خاصية border="1".',
          '2) كتابة صف العناوين: <tr><th>اسم الطالب</th><th>المادة</th><th>الدرجة</th></tr>.',
          '3) كتابة الصف الأول: <tr><td>عمر أحمد</td><td>حاسب آلي</td><td>98</td></tr>.',
          '4) كتابة الصف الثاني: <tr><td>سارة علي</td><td>رياضيات</td><td>95</td></tr> ثم إغلاق </table>.'
        ],
        solutionStepsEn: [
          '1) Open <table border="1">.',
          '2) Add header row: <tr><th>Student</th><th>Subject</th><th>Score</th></tr>.',
          '3) Add data rows with td elements.',
          '4) Close </table>.'
        ],
        answerAr: 'جدول مكون من 3 صفوف (1 رأس + 2 بيانات) مقسم إلى 3 أعمدة.',
        answerEn: '3-row structured HTML table with th headers and td data cells.'
      }
    ],

    assessment: {
      id: 'quiz-m-comp8-1',
      lectureId: 'm-comp8-1',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 1: لغة HTML وبنية صفحات الويب',
      titleEn: 'Mastery Assessment 1: HTML5 Architecture, Typography, Tables & Hyperlinks',
      passingScore: 80,
      questions: [
        {
          id: 'q-html8-1',
          textAr: 'الوسم المسؤول عن احتواء كافة العناصر المرئية للمستخدم في صفحة HTML هو:',
          textEn: 'The HTML container tag holding all visible rendered elements for the user is:',
          optionsAr: ['الوسم <body>', 'الوسم <head>', 'الوسم <title>', 'الوسم <meta>'],
          optionsEn: ['<body> tag', '<head> tag', '<title> tag', '<meta> tag'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة الوسم body في هيكل HTML',
          conceptTestedEn: 'Role of body element in HTML',
          explanationAr: 'قسم <body> يحتوي على كل النصوص والصور والجداول المرئية التي يشاهدها الزائر في المتصفح.',
          explanationEn: 'The <body> tag encapsulates all visual content rendered in the viewport.',
          difficulty: 'easy'
        },
        {
          id: 'q-html8-2',
          textAr: 'أي من وسوم العناوين التالية يعطي أكبر حجم خط وأعلى أهمية دلالية في الصفحة؟',
          textEn: 'Which heading tag produces the largest font size and highest semantic importance?',
          optionsAr: ['الوسم <h1>', 'الوسم <h6>', 'الوسم <header>', 'الوسم <head>'],
          optionsEn: ['<h1> tag', '<h6> tag', '<header> tag', '<head> tag'],
          correctIndex: 0,
          conceptTestedAr: 'تدرج وسوم العناوين h1-h6',
          conceptTestedEn: 'Heading hierarchy levels',
          explanationAr: '<h1> هو العنوان الرئيسي الأكبر حجماً وأعلاها رتبة في محركات البحث.',
          explanationEn: '<h1> represents top-level heading with largest size and primary SEO weight.',
          difficulty: 'easy'
        },
        {
          id: 'q-html8-3',
          textAr: 'الخاصية المستخدمة لتحديد مسار ملف الصورة في الوسم <img> هي:',
          textEn: 'The attribute specifying the file path of an image in the <img> tag is:',
          optionsAr: ['خاصية src', 'خاصية href', 'خاصية link', 'خاصية path'],
          optionsEn: ['src attribute', 'href attribute', 'link attribute', 'path attribute'],
          correctIndex: 0,
          conceptTestedAr: 'خاصية src للصور',
          conceptTestedEn: 'Image src attribute',
          explanationAr: 'خاصية src (Source) تحدد مسار ملف الصورة لعرضه بالمتصفح.',
          explanationEn: 'The src (source) attribute provides the URL/path to the image file.',
          difficulty: 'easy'
        },
        {
          id: 'q-html8-4',
          textAr: 'ما الفرق الرئيسي بين خلايا <th> وخلايا <td> في جدول HTML؟',
          textEn: 'What is the key difference between <th> and <td> cells in an HTML table?',
          optionsAr: [
            'خلايا <th> مخصصة للعناوين وتظهر بخط عريض ومتوسط تلقائياً، بينما <td> خلايا بيانات عادية',
            'خلايا <th> للأرقام فقط و <td> للنصوص',
            'خلايا <th> تنشئ صفوفاً وخلايا <td> تنشئ أعمدة',
            'لا يوجد أي فرق بينهما'
          ],
          optionsEn: [
            '<th> is a bold centered header cell; <td> is a regular data cell',
            '<th> is for numbers and <td> is for text',
            '<th> creates rows and <td> creates columns',
            'No functional difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين خلايا الرأس والبيانات في الجدول',
          conceptTestedEn: 'Table th header vs td data distinction',
          explanationAr: '<th> خلية رأس تعرض النص بخط عريض وتوسيط تلقائي، بينما <td> خلية بيانات بتنسيق عادي.',
          explanationEn: '<th> header cells render bold centered text; <td> data cells render normal aligned text.',
          difficulty: 'medium'
        },
        {
          id: 'q-html8-5',
          textAr: 'أي من الأكواد التالية ينشئ رابطاً تشعبياً صحيحاً يفتح موقع Google في تبويب جديد؟',
          textEn: 'Which code snippet creates a valid hyperlink opening Google in a new tab?',
          optionsAr: [
            '<a href="https://www.google.com" target="_blank">جوجل</a>',
            '<link src="https://www.google.com" open="new">جوجل</link>',
            '<a url="https://www.google.com" tab="new">جوجل</a>',
            '<hyperlink to="google.com">جوجل</hyperlink>'
          ],
          optionsEn: [
            '<a href="https://www.google.com" target="_blank">Google</a>',
            '<link src="https://www.google.com" open="new">Google</link>',
            '<a url="https://www.google.com" tab="new">Google</a>',
            '<hyperlink to="google.com">Google</hyperlink>'
          ],
          correctIndex: 0,
          conceptTestedAr: 'صيغة وسم الرابط التشعبي وخاصية target',
          conceptTestedEn: 'Anchor tag syntax and target attribute',
          explanationAr: 'الصيغة القياسية هي <a href="الرابط" target="_blank">النص</a>.',
          explanationEn: '<a href="URL" target="_blank">Text</a> is the correct HTML hyperlink standard.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: CSS STYLING & BOX MODEL ──
  {
    id: 'm-comp8-2',
    order: 2,
    titleAr: 'المحاضرة 2: لغة CSS وتنسيق وتصميم صفحات الويب',
    titleEn: 'Lecture 2: CSS Styling - Selectors, Colors, Fonts, Box Model & External Files',
    subtitleAr: 'طرق تطبيق CSS (مضمن، داخلي، خارجي)، المحددات، الألوان، الخطوط، ونموذج الصندوق',
    subtitleEn: 'Master CSS syntax, element/class/id selectors, color models, typography, and the Box Model.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - مدارس اللغات والرسمية',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School ICT & Web Development',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 - draft curriculum content',
    unitTitleAr: 'الوحدة الثانية: تنسيق وتصميم صفحات الويب بـ CSS (CSS Styling & Layout)',
    unitTitleEn: 'Unit 2: CSS Styling & Web Presentation',
    lessonNumberAr: 'الدرس 2: محددات CSS ونموذج الصندوق وربط الملفات الخارجية',
    lessonNumberEn: 'Lesson 2: CSS Selectors, Box Model & External Style Sheets',

    warmupHookAr: 'إذا كانت لغة HTML هي الهيكل العظمي لصفحة الويب، فإن لغة CSS هي المظهر الجذاب والألوان والملابس الأنيقة! بدون CSS تبدو المواقع كصفحات مستندات بيضاء كئيبة. في هذا الدرس نتعلم كيف نحول صفحة عادية إلى تصميم عصري واحترافي!',
    warmupHookEn: 'If HTML provides the skeleton of a web page, CSS provides the colors, styling, and visual beauty. Master CSS selectors and the Box Model to style web pages like a pro!',

    learningOutcomesAr: [
      'أن يقارن بين طرق تطبيق CSS الثلاث: المضمن (Inline)، الداخلي (Internal)، والخارجي (External)',
      'أن يستخدم محددات CSS المختلفة: محدد الوسم (Element)، ومحدد الفئة (.class)، ومحدد المعرف (#id)',
      'أن يطبق خصائص الألوان والخلفيات color و background-color و opacity',
      'أن يشرح نموذج الصندوق (Box Model) ويميز بين Content و Padding و Border و Margin',
      'أن يربط ملف CSS خارجي بصفحة HTML باستخدام الوسم link'
    ],
    learningOutcomesEn: [
      'Compare 3 CSS application methods: Inline, Internal style tag, and External stylesheet',
      'Apply CSS selectors: element type, class (.class), and unique ID (#id)',
      'Configure visual styling: color, background-color, font-family, and font-size',
      'Analyze the CSS Box Model: Content, Padding, Border, and Margin layers',
      'Link external .css stylesheet files using the HTML link element'
    ],

    vocabulary: [
      {
        termAr: 'CSS (Cascading Style Sheets)',
        termEn: 'CSS',
        definitionAr: 'لغة أوراق الأنماط المتتالية المستخدمة في تنسيق وتصميم المظهر البصري لصفحات HTML.',
        definitionEn: 'Style sheet language used for describing the visual presentation of HTML elements.'
      },
      {
        termAr: 'المحدد (CSS Selector)',
        termEn: 'CSS Selector',
        definitionAr: 'جزء من قاعدة CSS يحدد عناصر HTML المستهدفة لتطبيق التنسيق عليها.',
        definitionEn: 'The part of a CSS rule specifying which HTML elements receive the styles.'
      },
      {
        termAr: 'نموذج الصندوق (Box Model)',
        termEn: 'Box Model',
        definitionAr: 'نموذج يصف المساحات المحيطة بكل عنصر HTML: المحتوى، الحشوة، الحدود، والهامش.',
        definitionEn: 'A container model wrapping elements with Content, Padding, Border, and Margin.'
      }
    ],

    keyConceptsAr: [
      'طرق تطبيق CSS: المضمن style="..."، الداخلي <style> في head، والخارجي link rel="stylesheet"',
      'المحددات: محدد العنصر p، ومحدد الفئة .highlight، ومحدد المعرف الفريد #main-header',
      'خصائص الخطوط والنصوص: font-size, font-family, text-align, color, font-weight',
      'نموذج الصندوق: Content (المحتوى) ← Padding (الحشوة) ← Border (الحدود) ← Margin (الهامش الخارجي)'
    ],
    keyConceptsEn: [
      'CSS Methods: Inline attribute, Internal style block, External .css file linking',
      'Selectors hierarchy: Element, Class (.name), and Unique ID (#id)',
      'Typography properties: font-size, font-family, text-align, color, line-height',
      'Box Model Architecture: Content -> Padding -> Border -> Margin'
    ],
    summaryAr: 'شرح كامل للغة CSS: طرق التطبيق الثلاث وأفضل الممارسات، محددات العناصر والفئات، خصائص الألوان والخطوط، والتحكم في أبعاد ومسافات نموذج الصندوق Box Model.',
    summaryEn: 'Complete CSS guide: integration methods, selector targeting, color and typography rules, and deep dive into the CSS Box Model layout.',

    sections: [
      {
        titleAr: '1. طرق تطبيق CSS الثلاث ومقارنتها',
        titleEn: '1. Three CSS Integration Methods',
        contentAr: '1) المضمن (Inline): يُكتب داخل وسم HTML مثل <p style="color:red;">. 2) الداخلي (Internal): يُكتب داخل وسم <style> في قسم <head>. 3) الخارجي (External): يُكتب في ملف مستقل ينتهي بـ .css ويُربط في head بالوسم <link rel="stylesheet" href="style.css">. الخارجي هو الأفضل لتطوير المواقع الاحترافية لأنه يسهل الصيانة ويفصل التصميم عن المحتوى.',
        contentEn: '1) Inline: inside tag style attribute. 2) Internal: in <style> block in head. 3) External: standalone .css file linked via <link rel="stylesheet">. External is the industry best practice.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: ربط ملف CSS خارجي وتنسيق صفحة ويب بالكامل',
          titleEn: 'Worked Example 1: External CSS Stylesheet Implementation',
          equation: '<link rel="stylesheet" href="style.css">  -->  قواعد CSS منفصلة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'في ملف index.html داخل <head> أضف: <link rel="stylesheet" href="styles.css">.',
              textEn: 'In index.html head add stylesheet link tag.',
              noteAr: 'ربط الملف'
            },
            {
              stepNumber: 2,
              textAr: 'في ملف styles.css اكتب: body { background-color: #f8fafc; font-family: Arial; }.',
              textEn: 'In styles.css set global body background and font.',
              noteAr: 'تنسيق عام للصفحة'
            },
            {
              stepNumber: 3,
              textAr: 'أضف قاعدة للعناوين: h1 { color: #1e3a8a; text-align: center; }.',
              textEn: 'Style headings with blue color and center alignment.',
              noteAr: 'تنسيق العناوين'
            }
          ],
          takeawayAr: 'تعديل ملف CSS الخارجي ينعكس فوراً على جميع صفحات الموقع المرتبطة به دون الحاجة لتعديل كل صفحة.',
          takeawayEn: 'Updating a single external CSS file instantly propagates styling across all linked pages.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-2-1',
          questionAr: 'ما هو أفضل أسلوب لتطبيق CSS على موقع يتكون من 10 صفحات مختلفة؟',
          questionEn: 'What is the recommended CSS method for a 10-page website?',
          optionsAr: ['CSS خارجي (External) في ملف .css مرتبط بكل الصفحات', 'CSS مضمن (Inline) داخل كل وسم', 'CSS داخلي (Internal) مكرر في كل صفحة', 'كتابة التنسيق باليد بدون ملفات'],
          optionsEn: ['External CSS in linked .css file', 'Inline CSS in each tag', 'Internal CSS repeated in each page', 'Manual styling'],
          correctIndex: 0,
          explanationAr: 'CSS الخارجي يسمح بتوحيد مظهر الموقع وتعديل جميع الصفحات بتعديل ملف واحد فقط.',
          explanationEn: 'External CSS provides unified site-wide styling and single-point maintenance.',
          hintAr: 'ابحث عن الطريقة التي تعتمد على ملف مستقل.'
        },
        tipsAr: [
          'تجنب استخدام CSS المضمن Inline قدر الإمكان لأنه يجعل الكود فوضوياً وصعب التعديل.',
          'الوسم link لا يحتاج لوسم إغلاق لأنه وسم فردي.'
        ],
        tipsEn: [
          'Minimize inline styles to maintain clean and maintainable codebase.',
          'The link element is a void tag requiring no closing tag.'
        ]
      },
      {
        titleAr: '2. محددات CSS: الوسم، الفئة، والمعرف',
        titleEn: '2. CSS Selectors: Element, Class & ID',
        contentAr: 'المحدد هو الأداة التي تحدد عناصر HTML المستهدفة: 1) محدد الوسم (Element): مثل p { } يؤثر على جميع الفقرات. 2) محدد الفئة (Class): يبدأ بنقطة مثل .card { } ويطبق على أي عنصر يحمل class="card" (يمكن تكراره). 3) محدد المعرف (ID): يبدأ بهاشتاج مثل #header { } ويطبق على عنصر وحيد فريد في الصفحة يحمل id="header".',
        contentEn: 'Selectors target elements: 1) Element selector p { } affects all paragraphs. 2) Class selector .card { } targets elements with class="card" (reusable). 3) ID selector #header { } targets a single unique element with id="header".',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: استخدام محددات Element و Class و ID معاً',
          titleEn: 'Worked Example 2: Combining Element, Class, and ID Selectors',
          equation: 'h1 { } (وسم) | .btn { } (فئة) | #hero { } (معرف فريد)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'محدد وسم: p { color: #334155; line-height: 1.6; } ينسق كل الفقرات.',
              textEn: 'Element selector applies base paragraph styles.',
              noteAr: 'تنسيق عام'
            },
            {
              stepNumber: 2,
              textAr: 'محدد فئة: .highlight { background-color: #fef08a; padding: 4px; } يطبق على أي عنصر مهم.',
              textEn: 'Class selector applies reusable highlight effect.',
              noteAr: 'تنسيق فئة قابلة للتكرار'
            },
            {
              stepNumber: 3,
              textAr: 'محدد معرف: #main-banner { background-color: #0f172a; color: white; } لعنصر البانر الرئيسي فقط.',
              textEn: 'ID selector styles the unique hero banner.',
              noteAr: 'تنسيق عنصر فريد'
            }
          ],
          takeawayAr: 'استخدم class عندما تريد تكرار نفس التنسيق على عدة عناصر، واستخدم id عندما يكون العنصر وحيداً في الصفحة.',
          takeawayEn: 'Use classes for reusable components and IDs for unique singleton layout landmarks.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-2-2',
          questionAr: 'كيف نكتب محدد CSS لاستهداف جميع العناصر التي تحمل الفئة class="news-item"؟',
          questionEn: 'How do you write a CSS selector targeting class="news-item"?',
          optionsAr: ['.news-item { }', '#news-item { }', 'news-item { }', '@news-item { }'],
          optionsEn: ['.news-item { }', '#news-item { }', 'news-item { }', '@news-item { }'],
          correctIndex: 0,
          explanationAr: 'محدد الفئة في CSS يبدأ دائماً بنقطة (.) مثل .news-item { }.',
          explanationEn: 'Class selectors in CSS always begin with a period prefix (.className).',
          hintAr: 'الفئة تبدأ بنقطة.'
        },
        tipsAr: [
          'يمكن لعنصر HTML واحد أن يحمل أكثر من فئة مفصولة بمسافة: class="btn btn-primary".',
          'لا تبدأ أسماء الفئات أو المعرفات بأرقام أو رموز خاصة.'
        ],
        tipsEn: [
          'An element can have multiple space-separated classes (e.g. class="btn active").',
          'Never start selector names with numbers or special characters.'
        ]
      },
      {
        titleAr: '3. نموذج الصندوق (CSS Box Model)',
        titleEn: '3. The CSS Box Model Architecture',
        contentAr: 'يعامل متصفح الويب كل عنصر HTML كصندوق مستطيل يتكون من 4 طبقات متتالية من الداخل إلى الخارج: 1) Content (المحتوى): النص أو الصورة الفعلية. 2) Padding (الحشوة): المسافة الداخلية الشفافة بين المحتوى والحدود. 3) Border (الحدود): الإطار المحيط بالعنصر. 4) Margin (الهامش الخارجي): المسافة الخارجية الشفافة التي تفصل العنصر عن العناصر المجاورة.',
        contentEn: 'Every HTML element is treated as a rectangular box with 4 concentric layers: Content (innermost text/image), Padding (space between content and border), Border (outer frame), and Margin (outer clearance space).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: حساب الحجم الكلي لعنصر في نموذج الصندوق',
          titleEn: 'Worked Example 3: Calculating Total Element Dimensions with Box Model',
          equation: 'العرض الكلي = Content + Left/Right Padding + Left/Right Border + Left/Right Margin',
          steps: [
            {
              stepNumber: 1,
              textAr: 'المحتوى: width: 300px; height: 150px;.',
              textEn: 'Content dimensions: 300px width.',
              noteAr: 'حجم المحتوى الأساسي'
            },
            {
              stepNumber: 2,
              textAr: 'الحشوة والحدود: padding: 20px; border: 2px solid black;.',
              textEn: 'Padding: 20px on each side. Border: 2px.',
              noteAr: 'المسافة الداخلية والحدود'
            },
            {
              stepNumber: 3,
              textAr: 'الهامش: margin: 15px;.',
              textEn: 'Margin: 15px outer spacing.',
              noteAr: 'المسافة الخارجية'
            }
          ],
          takeawayAr: 'الحشوة (Padding) تكون داخل حدود العنصر وتأخذ لون خلفيته، بينما الهامش (Margin) يكون خارج الحدود ويفصل العناصر عن بعضها.',
          takeawayEn: 'Padding expands inside the border taking background color; Margin creates outer spacing between elements.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-2-3',
          questionAr: 'ما هي خاصية CSS المسؤولة عن إضافة مسافة داخلية بين النص وحدود الإطار؟',
          questionEn: 'Which CSS property creates internal space between content and its border?',
          optionsAr: ['خاصية padding', 'خاصية margin', 'خاصية border-spacing', 'خاصية outline'],
          optionsEn: ['padding property', 'margin property', 'border-spacing property', 'outline property'],
          correctIndex: 0,
          explanationAr: 'خاصية padding تتحكم في الحشوة الداخلية بين المحتوى والحدود.',
          explanationEn: 'Padding defines internal clearance between content and border.',
          hintAr: 'المسافة الداخلية.'
        },
        tipsAr: [
          'يمكن تحديد الحشوة لجهات محددة: padding-top, padding-right, padding-bottom, padding-left.',
          'استخدام margin: 0 auto; مع عرض محدد يوسط العنصر أفقياً في الصفحة تلقائياً.'
        ],
        tipsEn: [
          'Specify directional spacing with padding-top, padding-bottom, etc.',
          'Use margin: 0 auto with a defined width to center elements horizontally.'
        ]
      },
      {
        titleAr: '4. تنسيق الخطوط والألوان والحدود',
        titleEn: '4. Typography, Colors & Border Properties',
        contentAr: 'تتيح CSS التحكم الكامل في الخطوط: font-family لتحديد نوع الخط (مثل Cairo أو Arial)، font-size لحجم الخط (بالبكسل px أو rem)، font-weight لسمك الخط (bold أو normal)، وtext-align لمحاذاة النص (center, right, left). الألوان تحدد بالاسم، أو كود Hex مثل #1e3a8a، أو RGB مثل rgb(30, 58, 138). والحدود تحدد بـ border: 2px solid #3b82f6;.',
        contentEn: 'CSS controls typography (font-family, font-size, font-weight, text-align), color formats (names, Hex #HEX, rgb()), and border shorthand syntax (border: 2px solid #color).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: تصميم بطاقة منتج أو بطاقة طالب أنيقة بالكامل بـ CSS',
          titleEn: 'Worked Example 4: Styling an Elegant Student ID Card Component',
          equation: '.card { background, border-radius, box-shadow, padding, font-family }',
          steps: [
            {
              stepNumber: 1,
              textAr: 'إنشاء الحاوية: .card { width: 320px; background: white; border-radius: 12px; padding: 20px; }.',
              textEn: 'Define card container with rounded corners and padding.',
              noteAr: 'صندوق البطاقة'
            },
            {
              stepNumber: 2,
              textAr: 'تنسيق الحدود والظل: border: 1px solid #e2e8f0; box-shadow: 0 4px 6px rgba(0,0,0,0.1);.',
              textEn: 'Add subtle border and drop shadow.',
              noteAr: 'تأثير العمق والظلال'
            },
            {
              stepNumber: 3,
              textAr: 'تنسيق النصوص: .card h2 { color: #1e293b; font-size: 20px; text-align: center; }.',
              textEn: 'Style inner heading with color, size, and alignment.',
              noteAr: 'تنسيق الخطوط'
            }
          ],
          takeawayAr: 'خاصية border-radius تحول الزوايا الحادة إلى زوايا دائرية عصرية وجذابة.',
          takeawayEn: 'border-radius softens sharp corners into modern rounded cards.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-2-4',
          questionAr: 'ما هو الكود الصحيح لإنشاء إطار أزرق متصل بسمك 2 بكسل؟',
          questionEn: 'What is the correct CSS shorthand for a 2px solid blue border?',
          optionsAr: ['border: 2px solid blue;', 'border: blue 2px line;', 'border-width: 2px blue solid;', 'frame: 2px solid blue;'],
          optionsEn: ['border: 2px solid blue;', 'border: blue 2px line;', 'border-width: 2px blue solid;', 'frame: 2px solid blue;'],
          correctIndex: 0,
          explanationAr: 'الصيغة المختصرة للحدود هي: border: السمك النمط اللون (2px solid blue).',
          explanationEn: 'The standard shorthand syntax is border: width style color.',
          hintAr: 'السمك ثم النمط ثم اللون.'
        },
        tipsAr: [
          'أنماط الحدود تشمل: solid (متصل)، dashed (متقطع)، dotted (منقط).',
          'استخدم الألوان المتناسقة المريحة للعين وتجنب التناقضات المزعجة.'
        ],
        tipsEn: [
          'Border styles include solid, dashed, and dotted.',
          'Choose harmonic color palettes for comfortable user experience.'
        ]
      }
    ],

    conceptMapAr: [
      'طرق CSS: مضمن (Inline) + داخلي (Internal) + خارجي (External في ملف .css)',
      'المحددات: عنصر (p) + فئة (.class) + معرف (#id)',
      'نموذج الصندوق: Content ← Padding ← Border ← Margin',
      'تنسيق النصوص: font-size + font-family + text-align + color'
    ],
    conceptMapEn: [
      'CSS Methods: Inline, Internal style, External .css linking',
      'Selectors: Element, Class (.class), Unique ID (#id)',
      'Box Model: Content -> Padding -> Border -> Margin',
      'Typography: font-size, font-family, text-align, color, weight'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp8-2-1',
        questionAr: 'اكتب كود CSS لجعل جميع عناوين h1 بلون أزرق داكن (#1E3A8A)، وحجم خط 28 بكسل، ومحاذاة في المنتصف.',
        questionEn: 'Write CSS rule to make all h1 headings dark blue (#1E3A8A), 28px font size, and centered.',
        solutionStepsAr: [
          '1) كتابة محدد الوسم h1.',
          '2) فتح قوسي المجموعة { }.',
          '3) إضافة خاصية اللون: color: #1E3A8A;.',
          '4) إضافة حجم الخط: font-size: 28px;.',
          '5) إضافة المحاذاة: text-align: center;.'
        ],
        solutionStepsEn: [
          '1) Write selector h1.',
          '2) Add color: #1E3A8A;.',
          '3) Add font-size: 28px;.',
          '4) Add text-align: center;.'
        ],
        answerAr: 'h1 { color: #1E3A8A; font-size: 28px; text-align: center; }',
        answerEn: 'h1 { color: #1E3A8A; font-size: 28px; text-align: center; }'
      }
    ],

    assessment: {
      id: 'quiz-m-comp8-2',
      lectureId: 'm-comp8-2',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 2: لغة CSS ونموذج الصندوق',
      titleEn: 'Mastery Assessment 2: CSS Selectors, Colors, Fonts & Box Model',
      passingScore: 80,
      questions: [
        {
          id: 'q-css8-1',
          textAr: 'أي من الطرق التالية لتطبيق CSS تُعد الأفضل في بناء مواقع الويب متعددة الصفحات؟',
          textEn: 'Which CSS application method is considered best practice for multi-page websites?',
          optionsAr: [
            'ملف CSS خارجي مستقل مرتبط بالوسم <link>',
            'CSS مضمن داخل كل وسم HTML بخاصية style',
            'CSS داخلي مكرر في وسم <style> بكل صفحة',
            'لا يوجد فرق في الأداء وسهولة الصيانة'
          ],
          optionsEn: [
            'External .css stylesheet linked via <link>',
            'Inline style attributes on each tag',
            'Internal style block repeated on each page',
            'No maintenance difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أفضلية CSS الخارجي للمواقع',
          conceptTestedEn: 'External CSS best practice',
          explanationAr: 'الملف الخارجي يفصل التصميم عن المحتوى تماماً ويسمح بتعديل مظهر الموقع بالكامل من ملف واحد.',
          explanationEn: 'External CSS separates structure from styling and simplifies site-wide maintenance.',
          difficulty: 'easy'
        },
        {
          id: 'q-css8-2',
          textAr: 'ما هو الرمز المستخدم في CSS لتعريف محدد الفئة (Class Selector)؟',
          textEn: 'What symbol denotes a Class Selector in CSS?',
          optionsAr: ['رمز النقطة (.)', 'رمز الهاشتاج (#)', 'رمز الدولار ($)', 'رمز النجمة (*)'],
          optionsEn: ['Dot (.)', 'Hash (#)', 'Dollar ($)', 'Asterisk (*)'],
          correctIndex: 0,
          conceptTestedAr: 'رمز محدد الفئة في CSS',
          conceptTestedEn: 'Class selector dot symbol',
          explanationAr: 'محدد الفئة Class يبدأ دائماً بنقطة (.) مثل .btn أو .container.',
          explanationEn: 'Class selectors are prefixed with a dot (.) symbol.',
          difficulty: 'easy'
        },
        {
          id: 'q-css8-3',
          textAr: 'في نموذج الصندوق (Box Model)، ما هي المساحة الشفافة بين المحتوى الداخلي وإطار الحدود؟',
          textEn: 'In the CSS Box Model, what is the space between content and element border called?',
          optionsAr: ['الحشوة (Padding)', 'الهامش الخارجي (Margin)', 'الإطار (Border)', 'المخطط الخارجي (Outline)'],
          optionsEn: ['Padding', 'Margin', 'Border', 'Outline'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم Padding في نموذج الصندوق',
          conceptTestedEn: 'Padding definition in Box Model',
          explanationAr: 'Padding هي الحشوة الداخلية بين المحتوى والحدود، بينما Margin هو الهامش الخارجي.',
          explanationEn: 'Padding is inner clearance between content and border; Margin is outer separation.',
          difficulty: 'medium'
        },
        {
          id: 'q-css8-4',
          textAr: 'المحدد الذي يستهدف عنصراً وحيداً في الصفحة يحمل id="navbar" هو:',
          textEn: 'The selector targeting the unique element with id="navbar" is:',
          optionsAr: ['#navbar { }', '.navbar { }', 'navbar { }', '@navbar { }'],
          optionsEn: ['#navbar { }', '.navbar { }', 'navbar { }', '@navbar { }'],
          correctIndex: 0,
          conceptTestedAr: 'محدد المعرف ID في CSS',
          conceptTestedEn: 'CSS ID selector syntax',
          explanationAr: 'محدد المعرف ID يبدأ برمز الهاشتاج (#) مثل #navbar.',
          explanationEn: 'ID selectors start with the hash symbol (#).',
          difficulty: 'easy'
        },
        {
          id: 'q-css8-5',
          textAr: 'ما هي الخاصية المسؤولة عن جعل زوايا المربع دائرية وناعمة في CSS؟',
          textEn: 'Which CSS property creates rounded smooth corners on elements?',
          optionsAr: ['border-radius', 'corner-round', 'box-curve', 'border-smooth'],
          optionsEn: ['border-radius', 'corner-round', 'box-curve', 'border-smooth'],
          correctIndex: 0,
          conceptTestedAr: 'خاصية border-radius',
          conceptTestedEn: 'border-radius property',
          explanationAr: 'خاصية border-radius تتحكم في انحناء زوايا العناصر بالبكسل أو النسبة المئوية.',
          explanationEn: 'border-radius controls the curvature radius of element corners.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: JAVASCRIPT FUNDAMENTALS & EVENTS ──
  {
    id: 'm-comp8-3',
    order: 3,
    titleAr: 'المحاضرة 3: لغة JavaScript والبرمجة التفاعلية للمواقع',
    titleEn: 'Lecture 3: JavaScript Fundamentals - Variables, Conditionals, DOM & Events',
    subtitleAr: 'المتغيرات (let, const)، أنواع البيانات، جمل الشرط if/else، التفاعل مع الـ DOM، وأحداث onclick وoninput',
    subtitleEn: 'Master variables, data types, conditional branching, document.getElementById, and user interaction events.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - مدارس اللغات والرسمية',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School ICT & Web Development',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 - draft curriculum content',
    unitTitleAr: 'الوحدة الثالثة: برمجة صفحات الويب التفاعلية بـ JavaScript',
    unitTitleEn: 'Unit 3: JavaScript Interactive Web Programming',
    lessonNumberAr: 'الدرس 3: المتغيرات وجمل الشرط والتفاعل مع شجرة الـ DOM',
    lessonNumberEn: 'Lesson 3: Variables, Logic, DOM Manipulation & Event Handling',

    warmupHookAr: 'إذا كانت HTML تبني الهيكل وCSS تلوّن التصميم، فإن JavaScript هي عقل الصفحة الذي يجعلها تفكر وتتفاعل! هل جربت الضغط على زر ليظهر لك إشعار أو يحسب لك درجاتك تلقائياً؟ هذا هو سحر لغة JavaScript التي تجعل الويب حياً وتفاعلياً!',
    warmupHookEn: 'JavaScript brings web pages to life! Discover how variables, conditional logic, and DOM events let you build calculators, quiz games, and responsive user interfaces.',

    learningOutcomesAr: [
      'أن يعلن الطالب عن المتغيرات باستخدام let و const ويميز أنواع البيانات (String, Number, Boolean)',
      'أن يستخدم العمليات الحسابية (+, -, *, /, %) وعمليات المقارنة (==, ===, >, <)',
      'أن يكتب جمل الشرط if و else if و else للتحكم في مسار تنفيذ البرنامج',
      'أن يستدعي عناصر HTML ويعدل محتواها باستخدام document.getElementById و .innerHTML',
      'أن يربط دوال JavaScript بأحداث المستخدم مثل onclick عند النقر و oninput عند الكتابة'
    ],
    learningOutcomesEn: [
      'Declare variables with let/const and handle String, Number, Boolean data types',
      'Execute arithmetic operations and boolean comparison operators',
      'Construct conditional decision branching with if, else if, and else blocks',
      'Query and manipulate HTML elements via document.getElementById and innerHTML',
      'Bind custom JavaScript functions to DOM events (onclick, oninput, onchange)'
    ],

    vocabulary: [
      {
        termAr: 'جافا سكريبت (JavaScript)',
        termEn: 'JavaScript',
        definitionAr: 'لغة برمجة نصية عالية المستوى تُنفذ داخل متصفح الويب لإضافة التفاعلية والديناميكية للصفحات.',
        definitionEn: 'A high-level scripting language enabling dynamic interactive behavior in web browsers.'
      },
      {
        termAr: 'المتغير (Variable)',
        termEn: 'Variable',
        definitionAr: 'مكان محجوز ومسمى في ذاكرة الحاسوب لتخزين قيمة قابلة للقراءة والتعديل أثناء تشغيل البرنامج.',
        definitionEn: 'A named storage location in memory holding data that can change during execution.'
      },
      {
        termAr: 'الحدث (Event)',
        termEn: 'Event',
        definitionAr: 'فعل أو تفاعل يقوم به المستخدم (مثل النقر أو تحريك الفأرة أو الضغط على زر) يستجيب له الكود.',
        definitionEn: 'An action or occurrence detected by the browser to which JavaScript functions can respond.'
      }
    ],

    keyConceptsAr: [
      'الإعلان عن المتغيرات: let للقيم المتغيرة و const للثوابت',
      'أنواع البيانات: String للنصوص، Number للأرقام، Boolean للقيم الثنائية (true/false)',
      'جمل الشرط: if (الشرط) { أوامر } else if { } else { }',
      'الـ DOM: الوصول للعناصر بـ document.getElementById("id") وتغيير النص بـ .innerHTML',
      'الأحداث: onclick عند الضغط على زر، و oninput عند الكتابة في حقل الإدخال'
    ],
    keyConceptsEn: [
      'Variable Declaration: let for reassignable variables, const for immutable constants',
      'Primitive Data Types: String (text), Number (numeric), Boolean (true/false)',
      'Conditional Logic: if, else if, and else decision trees',
      'DOM Manipulation: document.getElementById() and innerHTML property updates',
      'Event Handling: onclick for button clicks, oninput for realtime typing'
    ],
    summaryAr: 'مقدمة قوية في لغة JavaScript: المتغيرات وأنواع البيانات، العمليات الرياضية والمنطقية، جمل اتخاذ القرار الشرطية if/else، والتفاعل المباشر مع عناصر الصفحة والأحداث.',
    summaryEn: 'Comprehensive JavaScript foundation: variables, data types, arithmetic/logical operators, conditional branching, DOM manipulation, and interactive event handling.',

    sections: [
      {
        titleAr: '1. المتغيرات وأنواع البيانات الأساسية',
        titleEn: '1. Variables & Primitive Data Types',
        contentAr: 'نستخدم let للإعلان عن متغير قابل للتغيير لاحقاً (مثل: let score = 90;) ونستخدم const لتعريف ثابت لا تتغير قيمته (مثل: const PI = 3.14;). أنواع البيانات الأساسية: 1) String: النصوص وتوضع بين علامتي اقتباس مثل "أحمد". 2) Number: الأرقام الصحيحة والعشرية مثل 15 و 98.5. 3) Boolean: القيم المنطقية true (صواب) أو false (خطأ).',
        contentEn: 'Declare changeable variables with let (e.g. let score = 90) and constants with const. Primitive types include String ("text"), Number (integers/floats), and Boolean (true/false).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: تعريف متغيرات طالب وحساب مجموع درجاته',
          titleEn: 'Worked Example 1: Variable Declaration & Arithmetic Calculation',
          equation: 'let total = mathScore + scienceScore;',
          steps: [
            {
              stepNumber: 1,
              textAr: 'تعريف الاسم والدرجات: let studentName = "سارة"; let math = 48; let science = 47;.',
              textEn: 'Declare student name and subject scores.',
              noteAr: 'متغيرات نصية ورقمية'
            },
            {
              stepNumber: 2,
              textAr: 'حساب المجموع: let total = math + science; (الناتج = 95).',
              textEn: 'Calculate sum using addition operator.',
              noteAr: 'عملية حسابية'
            },
            {
              stepNumber: 3,
              textAr: 'فحص النجاح: let isPassed = total >= 50; (قيمة منطقية = true).',
              textEn: 'Determine pass state returning boolean true.',
              noteAr: 'قيمة منطقية Boolean'
            }
          ],
          takeawayAr: 'استخدم const دائماً إلا إذا كنت متأكداً أن قيمة المتغير سيعاد تعيينها لاحقاً، حينها استخدم let.',
          takeawayEn: 'Default to const for variables unless reassignment is explicitly required, then use let.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-3-1',
          questionAr: 'ما هي الكلمة المفتاحية الصحيحة في JavaScript لتعريف ثابت لا يمكن تغيير قيمته؟',
          questionEn: 'Which keyword declares an immutable constant variable in JavaScript?',
          optionsAr: ['الكلمة const', 'الكلمة let', 'الكلمة var', 'الكلمة static'],
          optionsEn: ['const keyword', 'let keyword', 'var keyword', 'static keyword'],
          correctIndex: 0,
          explanationAr: 'const تستخدم لتعريف الثوابت التي يمنع إعادة تعيين قيمتها بعد تعريفها.',
          explanationEn: 'const declares a block-scoped immutable constant.',
          hintAr: 'مشتقة من كلمة Constant.'
        },
        tipsAr: [
          'لا تستخدم الكلمة القديمة var لأن let و const أوضح وأكثر أماناً في نطاق المتغيرات.',
          'أسماء المتغيرات حساسة لحالة الأحرف (studentName تختلف تماماً عن studentname).'
        ],
        tipsEn: [
          'Use let and const over legacy var for modern block scoping.',
          'JavaScript variable identifiers are strictly case-sensitive.'
        ]
      },
      {
        titleAr: '2. جمل الشرط واتخاذ القرار if / else',
        titleEn: '2. Conditional Branching with if / else',
        contentAr: 'تسمح جمل الشرط للحاسوب باتخاذ قرارات مختلفة بناءً على تحقق شرط معين: if (الشرط) { كود إذا تحقق } else if (شرط آخر) { كود } else { كود إذا لم يتحقق أي شرط }. معاملات المقارنة تشمل: == (يساوي)، === (يساوي تماماً في القيمة والنوع)، > (أكبر من)، < (أصغر من)، و >= (أكبر من أو يساوي).',
        contentEn: 'Conditional statements branch program execution: if (condition) { ... } else if { ... } else { ... }. Comparison operators include ==, === (strict equality), >, <, and >=.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: تحديد التقدير الدراسي للطالب بناءً على النسبة المئوية',
          titleEn: 'Worked Example 2: Grade Classifier Logic Using if / else if Tree',
          equation: 'if (score >= 90) "ممتاز" else if (score >= 75) "جيد جداً" else ...',
          steps: [
            {
              stepNumber: 1,
              textAr: 'فحص الامتياز: if (score >= 90) { grade = "ممتاز (Excellent)"; }.',
              textEn: 'Check for top bracket (score >= 90).',
              noteAr: 'الشرط الأول'
            },
            {
              stepNumber: 2,
              textAr: 'فحص الجيد جداً: else if (score >= 75) { grade = "جيد جداً (Very Good)"; }.',
              textEn: 'Check secondary bracket (score >= 75).',
              noteAr: 'شرط بديل'
            },
            {
              stepNumber: 3,
              textAr: 'فحص الرسوب: else { grade = "يحتاج لإعادة الاختبار"; }.',
              textEn: 'Default fallback for failing grade.',
              noteAr: 'الحالة الافتراضية'
            }
          ],
          takeawayAr: 'الترتيب التنازلي للشروط (من الأكبر للأصغر) ضروري جداً لضمان عمل جمل if/else بشكل سليم.',
          takeawayEn: 'Evaluating threshold boundaries in descending order ensures correct logical execution.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-3-2',
          questionAr: 'ما هي نتيجة المقارنة: (15 > 10) && (8 < 5) في JavaScript؟',
          questionEn: 'What is the result of (15 > 10) && (8 < 5) in JavaScript?',
          optionsAr: ['القيمة false', 'القيمة true', 'القيمة undefined', 'القيمة null'],
          optionsEn: ['false', 'true', 'undefined', 'null'],
          correctIndex: 0,
          explanationAr: 'المعامل المنطقي && (و) يتطلب تحقق كلا الشرطين، وبما أن (8 < 5) خطأ فإن النتيجة النهائية false.',
          explanationEn: 'The logical AND (&&) requires both operands to be true. Since (8 < 5) is false, the result is false.',
          hintAr: 'المعامل && يعطي true فقط إذا كان كلا الطرفين صحيحاً.'
        },
        tipsAr: [
          'المعامل || يعني (أو OR) ويعود بـ true إذا تحقق أي شرط من الشروط.',
          'استخدم === دائماً لمقارنة القيمة والنوع معاً وتجنب أخطاء التحويل التلقائي.'
        ],
        tipsEn: [
          'The logical OR operator (||) returns true if at least one condition evaluates to true.',
          'Prefer strict equality (===) over loose equality (==).'
        ]
      },
      {
        titleAr: '3. الوصول لعناصر الصفحة وتعديلها عبر DOM',
        titleEn: '3. DOM Querying & Content Manipulation',
        contentAr: 'شجرة الـ DOM (Document Object Model) تمثل عناصر صفحة الويب ككائنات برمجية. للوصول لأي عنصر بمعرفه نستخدم: let elem = document.getElementById("result");. ولتغيير النص أو كود HTML بداخله نستخدم خاصية .innerHTML = "نص جديد";، ولتغيير قيم حقول الإدخال نستخدم .value.',
        contentEn: 'The DOM represents HTML elements as programmable objects. Retrieve elements with document.getElementById("id"), modify inner HTML with .innerHTML, and access input values with .value.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: إنشاء حاسبة جمع رقمين تفاعلية بالكامل في الصفحة',
          titleEn: 'Worked Example 3: Two-Number Dynamic Addition Calculator with DOM',
          equation: 'let sum = Number(n1.value) + Number(n2.value); result.innerHTML = sum;',
          steps: [
            {
              stepNumber: 1,
              textAr: 'قراءة الأرقام من حقول الإدخال: let num1 = parseFloat(document.getElementById("num1").value);.',
              textEn: 'Parse numeric values from input fields.',
              noteAr: 'جلب المدخلات'
            },
            {
              stepNumber: 2,
              textAr: 'حساب المجموع: let total = num1 + num2;.',
              textEn: 'Compute mathematical summation.',
              noteAr: 'المعالجة الحسابية'
            },
            {
              stepNumber: 3,
              textAr: 'عرض النتيجة في فقرة بالصفحة: document.getElementById("res").innerHTML = "المجموع = " + total;.',
              textEn: 'Update target paragraph content via innerHTML.',
              noteAr: 'تحديث الشاشة'
            }
          ],
          takeawayAr: 'القيم القادمة من حقول الإدخال input تكون نصوصاً String، لذا يجب تحويلها بـ parseFloat أو Number لإجراء العمليات الحسابية.',
          takeawayEn: 'Input field values are retrieved as Strings; convert them with Number() or parseFloat() before arithmetic.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-3-3',
          questionAr: 'ما هي الدالة الصحيحة في JavaScript للوصول إلى عنصر HTML بواسطة المعرف id الخاص به؟',
          questionEn: 'Which JavaScript method selects an HTML element by its ID attribute?',
          optionsAr: ['document.getElementById("id")', 'document.getElement("id")', 'document.selectId("id")', 'document.findElement("id")'],
          optionsEn: ['document.getElementById("id")', 'document.getElement("id")', 'document.selectId("id")', 'document.findElement("id")'],
          correctIndex: 0,
          explanationAr: 'الدالة القياسية في جافا سكريبت هي document.getElementById() مع كتابة حرف B و I و E بحجم كبير (camelCase).',
          explanationEn: 'The correct DOM API method is document.getElementById() following camelCase naming convention.',
          hintAr: 'تذكر طريقة التسمية camelCase.'
        },
        tipsAr: [
          'يمكنك تغيير تنسيق CSS لعنصر أيضاً عبر الـ DOM: elem.style.color = "blue";.',
          'تأكد من وجود المعرف في HTML بنفس الحروف بالضبط لتجنب خطأ null.'
        ],
        tipsEn: [
          'You can dynamically update CSS styles via DOM: elem.style.color = "blue".',
          'Ensure the target element ID exists in the HTML to prevent null reference errors.'
        ]
      },
      {
        titleAr: '4. الأحداث والاستجابة لتفاعل المستخدم Events',
        titleEn: '4. Event Handling (onclick, oninput & onchange)',
        contentAr: 'الأحداث هي الإشارات التي ترسلها الصفحة عند تفاعل المستخدم. أبرز الأحداث: 1) onclick: عند النقر على زر أو عنصر. 2) oninput: عند كتابة أي حرف جديد في حقل الإدخال فوراً. 3) onchange: عند تغيير القيمة ومغادرة الحقل. نربط الحدث بدالة مكتوبة في قسم <script>.',
        contentEn: 'Events are browser signals responding to user actions: onclick (clicking), oninput (live typing), and onchange (value change and blur). Bind events to custom JavaScript functions.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: زر تغيير الوضع الليلي التفاعلي (Dark Mode Toggle)',
          titleEn: 'Worked Example 4: Interactive Dark Mode Theme Switcher',
          equation: '<button onclick="toggleTheme()">  -->  function toggleTheme()',
          steps: [
            {
              stepNumber: 1,
              textAr: 'الزر في HTML: <button onclick="toggleTheme()">تغيير المظهر 🌙</button>.',
              textEn: 'Button element with onclick attribute.',
              noteAr: 'ربط الحدث بالزر'
            },
            {
              stepNumber: 2,
              textAr: 'الدالة في JS: function toggleTheme() { let b = document.body; b.style.backgroundColor = "#0f172a"; b.style.color = "white"; }.',
              textEn: 'Define theme switching function.',
              noteAr: 'تنفيذ الأوامر عند النقر'
            },
            {
              stepNumber: 3,
              textAr: 'عند نقر الزر ينفذ المتصفح كود الدالة فوراً ويتحول مظهر الصفحة للوضع الداكن.',
              textEn: 'Browser executes function transforming visual theme on click.',
              noteAr: 'استجابة فورية'
            }
          ],
          takeawayAr: 'ربط الأحداث بالدوال يمنحك القوة لبناء تطبيقات ويب كاملة كالألعاب والحاسبات والنماذج التفاعلية.',
          takeawayEn: 'Binding functions to events empowers developers to build rich interactive web apps and tools.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-3-4',
          questionAr: 'أي حدث في HTML يُفعّل فوراً مع كل حرف يكتبه المستخدم في مربع النص؟',
          questionEn: 'Which HTML event triggers in real-time as the user types each character into an input field?',
          optionsAr: ['الحدث oninput', 'الحدث onclick', 'الحدث onload', 'الحدث onhover'],
          optionsEn: ['oninput event', 'onclick event', 'onload event', 'onhover event'],
          correctIndex: 0,
          explanationAr: 'الحدث oninput يعمل بشكل فوري مع كل ضغطة زر لتحديث القيمة الحية.',
          explanationEn: 'The oninput event fires immediately with each keystroke in an input field.',
          hintAr: 'حدث الإدخال المباشر.'
        },
        tipsAr: [
          'يمكن كتابة كود JavaScript داخل وسم <script> في نفس الصفحة أو في ملف مستقل .js.',
          'استخدم console.log() لطباعة الرسائل وفحص قيم المتغيرات أثناء تجربة الكود.'
        ],
        tipsEn: [
          'JavaScript can be embedded inside <script> or linked from external .js files.',
          'Use console.log() for debugging and inspecting variable values in dev tools.'
        ]
      }
    ],

    conceptMapAr: [
      'المتغيرات: let (متغير) + const (ثابت) + أنواع البيانات (String, Number, Boolean)',
      'الشرط: if (شرط) { } else if { } else { }',
      'الـ DOM: document.getElementById("id") + .innerHTML + .value',
      'الأحداث: onclick (نقر) + oninput (كتابة) + onchange (تغيير)'
    ],
    conceptMapEn: [
      'Variables: let (mutable), const (constant), primitive types (String, Number, Boolean)',
      'Branching: if / else if / else conditional logic',
      'DOM: document.getElementById("id"), innerHTML, value',
      'Events: onclick (clicks), oninput (realtime typing), onchange (selection)'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp8-3-1',
        questionAr: 'اكتب دالة JavaScript تفحص درجة الطالب: إذا كانت الدرجة 50 أو أكثر تعرض رسالة "ناجح"، وإلا تعرض "راسب".',
        questionEn: 'Write a JavaScript function that checks student score: displays "Pass" if score >= 50, otherwise "Fail".',
        solutionStepsAr: [
          '1) تعريف الدالة: function checkScore(score) { }.',
          '2) كتابة جملة الشرط: if (score >= 50) { return "ناجح"; }.',
          '3) إضافة الحالة البديلة: else { return "راسب"; }.'
        ],
        solutionStepsEn: [
          '1) Define function checkScore(score).',
          '2) Add if statement: if (score >= 50) return "Pass".',
          '3) Add else statement: else return "Fail".'
        ],
        answerAr: 'function checkScore(score) { if (score >= 50) return "ناجح"; else return "راسب"; }',
        answerEn: 'function checkScore(score) { if (score >= 50) return "Pass"; else return "Fail"; }'
      }
    ],

    assessment: {
      id: 'quiz-m-comp8-3',
      lectureId: 'm-comp8-3',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 3: لغة JavaScript والبرمجة التفاعلية',
      titleEn: 'Mastery Assessment 3: JavaScript Variables, Logic, DOM & Events',
      passingScore: 80,
      questions: [
        {
          id: 'q-js8-1',
          textAr: 'ما نوع البيانات للقيمة true في لغة JavaScript؟',
          textEn: 'What data type does the value true represent in JavaScript?',
          optionsAr: ['نوع منطقي (Boolean)', 'نوع نصي (String)', 'نوع رقمي (Number)', 'نوع كائن (Object)'],
          optionsEn: ['Boolean', 'String', 'Number', 'Object'],
          correctIndex: 0,
          conceptTestedAr: 'أنواع البيانات في JavaScript',
          conceptTestedEn: 'JavaScript primitive data types',
          explanationAr: 'القيمتان true و false تنتميان لنوع البيانات المنطقي Boolean.',
          explanationEn: 'The values true and false represent the Boolean logical data type.',
          difficulty: 'easy'
        },
        {
          id: 'q-js8-2',
          textAr: 'ما هي الخاصية المستخدمة لتغيير المحتوى الداخلي لعنصر HTML في شجرة الـ DOM؟',
          textEn: 'Which DOM property modifies the internal content of an HTML element?',
          optionsAr: ['خاصية .innerHTML', 'خاصية .content', 'خاصية .textValue', 'خاصية .changeHTML'],
          optionsEn: ['.innerHTML', '.content', '.textValue', '.changeHTML'],
          correctIndex: 0,
          conceptTestedAr: 'خاصية innerHTML في DOM',
          conceptTestedEn: 'innerHTML DOM property',
          explanationAr: 'خاصية .innerHTML تستخدم لقراءة وتعديل المحتوى النصي وكود HTML داخل أي عنصر.',
          explanationEn: 'The .innerHTML property gets or sets the HTML markup contained within the element.',
          difficulty: 'easy'
        },
        {
          id: 'q-js8-3',
          textAr: 'أي حدث في HTML يُنفذ عند ضغط المستخدم بالفأرة على زر معين؟',
          textEn: 'Which HTML event triggers when a user clicks a button element?',
          optionsAr: ['الحدث onclick', 'الحدث onpress', 'الحدث onmouse', 'الحدث onselect'],
          optionsEn: ['onclick event', 'onpress event', 'onmouse event', 'onselect event'],
          correctIndex: 0,
          conceptTestedAr: 'حدث النقر onclick',
          conceptTestedEn: 'onclick event handler',
          explanationAr: 'الحدث onclick هو الحدث المخصص للنقر بالفأرة على العناصر والأزرار.',
          explanationEn: 'The onclick attribute handles mouse click events on interactive elements.',
          difficulty: 'easy'
        },
        {
          id: 'q-js8-4',
          textAr: 'ما ناتج العملية: 17 % 5 في JavaScript؟',
          textEn: 'What is the output of 17 % 5 in JavaScript?',
          optionsAr: ['2 (باقي القسمة)', '3', '3.4', '12'],
          optionsEn: ['2 (remainder)', '3', '3.4', '12'],
          correctIndex: 0,
          conceptTestedAr: 'معامل باقي القسمة Modulo %',
          conceptTestedEn: 'Modulo operator remainder',
          explanationAr: 'المعامل % يعيد باقي القسمة: 17 ÷ 5 = 3 والباقي 2.',
          explanationEn: 'The modulo operator % returns the division remainder: 17 / 5 = 3 remainder 2.',
          difficulty: 'medium'
        },
        {
          id: 'q-js8-5',
          textAr: 'ما هو الكود الصحيح لقراءة القيمة المكتوبة داخل حقل إدخال يحمل id="ageInput"؟',
          textEn: 'What is the correct code to read the value entered into an input field with id="ageInput"?',
          optionsAr: [
            'document.getElementById("ageInput").value',
            'document.getElementById("ageInput").innerHTML',
            'document.getValue("ageInput")',
            'document.ageInput.text'
          ],
          optionsEn: [
            'document.getElementById("ageInput").value',
            'document.getElementById("ageInput").innerHTML',
            'document.getValue("ageInput")',
            'document.ageInput.text'
          ],
          correctIndex: 0,
          conceptTestedAr: 'قراءة قيمة حقل الإدخال عبر خاصية value',
          conceptTestedEn: 'Accessing input value via .value property',
          explanationAr: 'حقول الإدخال <input> تستخدم خاصية .value للوصول إلى النص الذي كتبه المستخدم.',
          explanationEn: 'Input fields store user-entered values in the .value property, unlike innerHTML.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 4: MULTIMEDIA & WEB FORMS ──
  {
    id: 'm-comp8-4',
    order: 4,
    titleAr: 'المحاضرة 4: إدراج الوسائط المتعددة (الصوت والفيديو) وتصميم نماذج الويب Forms',
    titleEn: 'Lecture 4: Multimedia Embedding (Audio/Video) & Interactive Web Forms',
    subtitleAr: 'إدراج ملفات الصوت والفيديو بـ HTML5، وتصميم نماذج الإدخال، والأزرار، والتحقق من صحة البيانات بـ JavaScript',
    subtitleEn: 'HTML5 audio & video tags, form elements (input types, radio, checkbox, select, textarea), and JS form validation.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - مدارس اللغات والرسمية',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School ICT & Web Development',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 - draft curriculum content',
    unitTitleAr: 'الوحدة الرابعة: الوسائط المتعددة ونماذج الويب التفاعلية (Multimedia & Forms)',
    unitTitleEn: 'Unit 4: Multimedia & Interactive Web Forms',
    lessonNumberAr: 'الدرس 4: وسوم الصوت والفيديو ونماذج تسجيل البيانات والتحقق',
    lessonNumberEn: 'Lesson 4: Audio/Video Embedding, Form Controls & Validation',

    warmupHookAr: 'كيف تتيح منصات مثل YouTube وSpotify تشغيل الفيديوهات والموسيقى مباشرة في المتصفح دون برامج إضافية؟ وكيف تعمل صفحات تسجيل الدخول وإنشاء الحسابات؟ في هذا الدرس تتعلم دمج الصوت والفيديو وبناء استمارات تسجيل متكاملة مع فحص صحة البيانات!',
    warmupHookEn: 'Discover modern HTML5 multimedia streaming and build complete data collection forms with custom input validation.',

    learningOutcomesAr: [
      'أن يدرج ملفات صوتية وفيديو في صفحة HTML باستخدام الوسمين audio و video مع خاصية controls',
      'أن يستخدم الوسم source لتوفير صيغ ملفات متعددة لضمان التوافقية مع مختلف المتصفحات',
      'أن يصمم نموذج ويب متكامل بـ form يحتوي على أنواع input المختلفة (text, password, email, radio, checkbox)',
      'أن يضيف قوائم منسدلة بـ select ومربعات نصية متعددة الأسطر بـ textarea',
      'أن يكتب كود JavaScript للتحقق من صحة المدخلات ومطابقة كلمة المرور قبل إرسال النموذج'
    ],
    learningOutcomesEn: [
      'Embed audio and video playback using HTML5 audio/video elements with controls',
      'Use source elements with fallback formats ensuring broad browser compatibility',
      'Construct comprehensive web forms with diverse input types (text, password, radio, checkbox)',
      'Incorporate select dropdowns and multi-line textarea elements',
      'Implement client-side JavaScript validation logic preventing invalid form submission'
    ],

    vocabulary: [
      {
        termAr: 'الوسائط المتعددة (Multimedia)',
        termEn: 'Multimedia',
        definitionAr: 'دمج النصوص والصور والأصوات ومقاطع الفيديو والرسوم المتحركة في بيئة تفاعلية موحدة.',
        definitionEn: 'Integration of text, graphics, audio, video, and animation into an interactive medium.'
      },
      {
        termAr: 'نموذج الويب (Web Form)',
        termEn: 'Web Form',
        definitionAr: 'قسم تفاعلي في صفحة الويب يتيح للمستخدم إدخال بيانات وإرسالها إلى الخادم للمعالجة.',
        definitionEn: 'An HTML section containing input controls enabling users to submit data to a server.'
      },
      {
        termAr: 'التحقق من صحة البيانات (Form Validation)',
        termEn: 'Form Validation',
        definitionAr: 'عملية فحص المدخلات للتأكد من مطابقتها للشروط والقيود قبل إرسالها وحفظها.',
        definitionEn: 'Checking entered data to verify correctness and completeness before submission.'
      }
    ],

    keyConceptsAr: [
      'مشغلات HTML5: وسم audio و وسم video وخاصية controls وشريط التحكم',
      'عناصر النماذج: form وخاصية action وحقول input (text, password, email, number, date)',
      'أزرار الاختيار: radio لاختيار واحد من مجموعة، و checkbox لاختيار متعدد',
      'القوائم ومربعات النصوص: select مع option للقوائم المنسدلة، و textarea للفقرات الطويلة',
      'التحقق البرمجي: حدث onsubmit وفحص طول كلمة المرور ومنع الإرسال بـ return false'
    ],
    keyConceptsEn: [
      'HTML5 Media Players: audio, video, controls, loop, and poster attributes',
      'Form Controls: form tag, action, and input types (text, password, email, number)',
      'Choice Controls: radio for mutually exclusive choices, checkbox for multi-select',
      'Dropdowns & Textareas: select/option dropdowns and multi-line textarea boxes',
      'Form Validation: onsubmit interception, password length checks, and returning false'
    ],
    summaryAr: 'شرح شامل لإدراج ملفات الصوت والفيديو الحديثة في HTML5، وتصميم استمارات ونماذج تسجيل البيانات بكافة حقولها، وبرمجة دوال التحقق من صحة المدخلات بجافا سكريبت.',
    summaryEn: 'Complete guide to embedding HTML5 audio and video, constructing rich user input forms, and implementing client-side JavaScript form validation.',

    sections: [
      {
        titleAr: '1. وسوم الصوت والفيديو في HTML5',
        titleEn: '1. HTML5 Native Audio & Video Embedding',
        contentAr: 'أتاحت HTML5 تشغيل الوسائط مباشرة دون الحاجة لملحقات خارجية عبر وسمي <audio> و <video>. خاصية controls ضرورية لإظهار شريط التحكم (تشغيل، إيقاف، مستوى الصوت). نستخدم الوسم الفرعي <source> لتحديد مسار الملف وصيغته (مثل MP4 للفيديو و MP3 للصوت). كما توجد خصائص إضافية مثل autoplay للتشغيل التلقائي و loop للتكرار و poster لصورة الغلاف.',
        contentEn: 'HTML5 supports native media playback using <audio> and <video> tags. The controls attribute displays play/pause/volume controls. Nested <source> tags specify media URLs and MIME types (MP4, WebM, MP3). Attributes include autoplay, loop, and poster.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: إدراج مشغل فيديو مع صورة غلاف وصوت توضيحي',
          titleEn: 'Worked Example 1: Embedding Video with Poster and Fallback Audio',
          equation: '<video width="480" controls poster="cover.jpg"><source src="lesson.mp4"></video>',
          steps: [
            {
              stepNumber: 1,
              textAr: 'افتح وسم الفيديو: <video width="480" controls poster="thumb.jpg">.',
              textEn: 'Open video tag with width, controls, and poster.',
              noteAr: 'إعدادات المشغل'
            },
            {
              stepNumber: 2,
              textAr: 'أضف مصدر الفيديو: <source src="intro.mp4" type="video/mp4">.',
              textEn: 'Specify source URL and MP4 MIME type.',
              noteAr: 'ملف الفيديو'
            },
            {
              stepNumber: 3,
              textAr: 'أغلق الوسم: </video> مع نص بديل للمتصفحات القديمة.',
              textEn: 'Close </video> with fallback text.',
              noteAr: 'التوافقية'
            }
          ],
          takeawayAr: 'بدون خاصية controls لن تظهر أزرار التشغيل للمستخدم ولن يتمكن من بدء الفيديو أو التحكم بالصوت.',
          takeawayEn: 'Without the controls attribute, the media player interface remains hidden from the user.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-4-1',
          questionAr: 'ما هي الخاصية الضرورية في وسم video لإظهار أزرار التشغيل والإيقاف والصوت؟',
          questionEn: 'Which attribute must be added to the <video> tag to display player controls?',
          optionsAr: ['خاصية controls', 'خاصية showButtons', 'خاصية player="true"', 'خاصية playbar'],
          optionsEn: ['controls attribute', 'showButtons attribute', 'player="true" attribute', 'playbar attribute'],
          correctIndex: 0,
          explanationAr: 'خاصية controls هي الخاصية القياسية في HTML5 المسؤولة عن إظهار شريط التحكم للمستخدم.',
          explanationEn: 'The boolean controls attribute renders standard playback controls in the browser.',
          hintAr: 'كلمة التحكم Controls.'
        },
        tipsAr: [
          'استخدم دائماً صيغ الفيديو القياسية مثل MP4 وصيغ الصوت مثل MP3 لضمان التوافق مع جميع المتصفحات والهواتف.',
          'خاصية poster تتيح لك وضع صورة جذابة تظهر قبل أن يضغط المستخدم على زر التشغيل.'
        ],
        tipsEn: [
          'Use universal formats like MP4 and MP3 for cross-browser and mobile compatibility.',
          'The poster attribute displays a thumbnail image prior to video playback.'
        ]
      },
      {
        titleAr: '2. عناصر نماذج الويب وحقول الإدخال',
        titleEn: '2. Web Form Controls & Input Types',
        contentAr: 'يبدأ النموذج بالوسم <form action="save.php" method="POST">. حقول الإدخال تستخدم الوسم <input> مع تحديد النوع type: 1) type="text": للنصوص العادية. 2) type="password": لكلمات المرور (تظهر على شكل نقاط لحماية السرية). 3) type="email": للبريد الإلكتروني. 4) type="radio": لاختيار بديل واحد فقط من مجموعة (تشترك في نفس قيمة name). 5) type="checkbox": لاختيار عدة بدائل.',
        contentEn: 'Forms are structured with <form>. The <input> tag specifies types: text, password (masked input), email, radio (mutually exclusive options sharing the same name), and checkbox (multi-selection).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: تصميم نموذج تسجيل مستخدم جديد بالكامل',
          titleEn: 'Worked Example 2: Complete User Registration Form Design',
          equation: '<form>  -->  input (text, password, radio, checkbox, submit)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'حقل الاسم وكلمة المرور: <input type="text" placeholder="اسمك"> و <input type="password">.',
              textEn: 'Text and masked password input fields.',
              noteAr: 'بيانات الحساب'
            },
            {
              stepNumber: 2,
              textAr: 'أزرار النوع: <input type="radio" name="gender" value="m"> ذكر | <input type="radio" name="gender" value="f"> أنثى.',
              textEn: 'Radio buttons sharing the same name attribute.',
              noteAr: 'اختيار وحيد'
            },
            {
              stepNumber: 3,
              textAr: 'زر الإرسال: <input type="submit" value="إنشاء الحساب">.',
              textEn: 'Submit button sending data to server.',
              noteAr: 'زر الإرسال'
            }
          ],
          takeawayAr: 'إعطاء نفس خاصية name لأزرار radio يربطها معاً كمجموعة واحدة بحيث يؤدي اختيار أحدها لإلغاء تحديد الآخر تلقائياً.',
          takeawayEn: 'Assigning the exact same name attribute to radio buttons enforces mutually exclusive group selection.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-4-2',
          questionAr: 'لماذا نستخدم input type="password" بدلاً من type="text" عند إدخال كلمة المرور؟',
          questionEn: 'Why is input type="password" used instead of type="text" for passwords?',
          optionsAr: [
            'لإخفاء الأحرف المدخلة واستبدالها بنقاط لحماية الخصوصية من المحيطين',
            'لتسريع عملية الإدخال',
            'لتشفير البيانات في قاعدة البيانات تلقائياً',
            'لأن المتصفح يرفض كتابة الأرقام في حقل text'
          ],
          optionsEn: [
            'Masks characters with dots/asterisks protecting privacy from shoulder surfing',
            'Speeds up data entry',
            'Automatically encrypts database storage',
            'Text inputs reject numbers'
          ],
          correctIndex: 0,
          explanationAr: 'حقل password يخفي الرموز المدخلة لحماية خصوصية وسرية كلمة المرور.',
          explanationEn: 'Password fields mask entered text to prevent onlookers from viewing credentials.',
          hintAr: 'حماية السرية والخصوصية.'
        },
        tipsAr: [
          'خاصية placeholder تظهر نصاً إرشادياً رمادياً داخل الحقل يختفي بمجرد بدء الكتابة.',
          'خاصية required تجعل ملء الحقل إلزامياً قبل السماح بإرسال النموذج.'
        ],
        tipsEn: [
          'The placeholder attribute displays helpful hint text inside empty inputs.',
          'The required attribute enforces field entry before form submission.'
        ]
      },
      {
        titleAr: '3. القوائم المنسدلة ومربعات النصوص متعددة الأسطر',
        titleEn: '3. Dropdown Menus & Multi-line Textareas',
        contentAr: 'لإنشاء قائمة اختيار منسدلة نستخدم الوسم <select> وبداخله وسوم <option> لكل خيار (مثل اختيار المحافظة أو الدولة). لكتابة نصوص طويلة من عدة أسطر (مثل الملاحظات والرسائل) نستخدم الوسم <textarea rows="4" cols="50">. كما نستخدم <input type="reset"> لإضافة زر يمسح جميع الحقول ويعيد تعيينها.',
        contentEn: 'Dropdown menus use <select> containing <option> tags. Multi-line text input uses <textarea rows="4" cols="50">. The reset button (<input type="reset">) clears all form fields.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: نموذج استفسارات وتواصل مع قائمة منسدلة ومربع نصي',
          titleEn: 'Worked Example 3: Support Inquiry Form with Select and Textarea',
          equation: 'select (قائمة) + textarea (رسالة) + submit/reset (أزرار)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'القائمة المنسدلة: <select name="topic"><option>استفسار عام</option><option>مشكلة فنية</option></select>.',
              textEn: 'Define dropdown list with select and options.',
              noteAr: 'قائمة منسدلة'
            },
            {
              stepNumber: 2,
              textAr: 'مربع النص: <textarea name="msg" rows="4" placeholder="اكتب تفاصيل استفسارك هنا"></textarea>.',
              textEn: 'Multi-line textarea for extensive messages.',
              noteAr: 'مربع نصي طويل'
            },
            {
              stepNumber: 3,
              textAr: 'أزرار التحكم: <input type="submit" value="إرسال"> و <input type="reset" value="إعادة تعيين">.',
              textEn: 'Submit and reset action buttons.',
              noteAr: 'أزرار الإجراءات'
            }
          ],
          takeawayAr: 'الوسم textarea ليس له خاصية value بل يُكتب نصه الافتراضي بين وسم الفتح والإغلاق <textarea>النص</textarea>.',
          takeawayEn: 'Textarea initial content is placed between opening and closing tags, not in a value attribute.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-4-3',
          questionAr: 'أي عنصر HTML يُستخدم لإنشاء قائمة اختيار منسدلة تحتوي على خيارات متعددة؟',
          questionEn: 'Which HTML element is used to construct a dropdown selection list?',
          optionsAr: ['الوسم <select> وبداخله <option>', 'الوسم <dropdown>', 'الوسم <list-menu>', 'الوسم <input type="dropdown">'],
          optionsEn: ['<select> containing <option>', '<dropdown>', '<list-menu>', '<input type="dropdown">'],
          correctIndex: 0,
          explanationAr: 'القائمة المنسدلة تنشأ بالوسم <select> وتوضع الخيارات بداخلها بالوسم <option>.',
          explanationEn: 'Dropdown menus are created with <select> wrapping individual <option> items.',
          hintAr: 'الوسم select.'
        },
        tipsAr: [
          'يمكن تحديد خيار افتراضي في القائمة بإضافة خاصية selected للوسم option.',
          'خاصية rows و cols في textarea تحدد عدد الأسطر والأعمدة الظاهرة في المربع.'
        ],
        tipsEn: [
          'Mark a default option with the selected attribute.',
          'Configure textarea dimensions using rows and cols attributes.'
        ]
      },
      {
        titleAr: '4. التحقق من صحة المدخلات بـ JavaScript (Validation)',
        titleEn: '4. Client-side Form Validation with JavaScript',
        contentAr: 'التحقق من جانب العميل يفحص صحة البيانات قبل إرسالها لتوفير وقت الخادم وتحسين تجربة المستخدم. نربط حدث <form onsubmit="return validateForm()"> بدالة جافا سكريبت: تفحص أن الحقول ليست فارغة، وأن كلمة المرور لا تقل عن 6 أحرف وتتطابق مع حقل التأكيد. إذا وجد خطأ تعرض تنبيهاً وتعيد return false لإلغاء الإرسال.',
        contentEn: 'Client-side validation verifies form data before submission. Attaching onsubmit="return validateForm()" intercepts submission: checking for empty fields, password length, and confirmation matching, returning false to abort if invalid.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: برمجة دالة التحقق من مطابقة كلمتي المرور وطولها',
          titleEn: 'Worked Example 4: Implementing Password Confirmation Validation',
          equation: 'if (p1.length < 6 || p1 !== p2) { alert("خطأ"); return false; } return true;',
          steps: [
            {
              stepNumber: 1,
              textAr: 'النموذج: <form onsubmit="return checkPass()"> مع حقلي password id="p1" و id="p2".',
              textEn: 'Form with onsubmit handler and password inputs.',
              noteAr: 'ربط الحدث'
            },
            {
              stepNumber: 2,
              textAr: 'الدالة: قراءة القيم let pass1 = document.getElementById("p1").value; let pass2 = document.getElementById("p2").value;.',
              textEn: 'Extract password values in JS function.',
              noteAr: 'قراءة المدخلات'
            },
            {
              stepNumber: 3,
              textAr: 'الفحص: if (pass1.length < 6) { alert("كلمة المرور قصيرة!"); return false; } if (pass1 !== pass2) { alert("غير متطابقتين!"); return false; } return true;.',
              textEn: 'Validate length and match, returning false on error.',
              noteAr: 'شروط التحقق'
            }
          ],
          takeawayAr: 'إرجاع القيمة false من دالة onsubmit يمنع المتصفح من إرسال النموذج ويحافظ على البيانات المدخلة لتصحيحها.',
          takeawayEn: 'Returning false from onsubmit prevents form transmission, keeping page state for correction.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-4-4',
          questionAr: 'كيف نمنع إرسال النموذج عند وجود خطأ في البيانات داخل دالة onsubmit؟',
          questionEn: 'How do you cancel form submission upon error in an onsubmit handler?',
          optionsAr: ['إرجاع القيمة false (كتابة return false;)', 'إغلاق المتصفح', 'حذف زر الإرسال', 'إرجاع القيمة true'],
          optionsEn: ['Return false (return false;)', 'Close browser', 'Delete submit button', 'Return true'],
          correctIndex: 0,
          explanationAr: 'إرجاع false يلغي حدث الإرسال الافتراضي للمتصفح ويمنع إرسال البيانات الخاطئة.',
          explanationEn: 'Returning false cancels the default submission event, keeping the user on the form.',
          hintAr: 'إرجاع القيمة المنطقية المعاكسة للصواب.'
        },
        tipsAr: [
          'التحقق في المتصفح يحسن تجربة المستخدم لكنه لا يغني عن التحقق الأمني في الخادم.',
          'اعرض رسائل خطأ واضحة ومحددة بجانب الحقل الخاطئ لتسهيل التصحيح على المستخدم.'
        ],
        tipsEn: [
          'Client validation improves UX but server-side validation is required for security.',
          'Display descriptive inline error messages next to invalid fields.'
        ]
      }
    ],

    conceptMapAr: [
      'الوسائط: audio controls + video controls poster="..." + source',
      'النماذج: form action="..." + input types (text, password, radio, checkbox)',
      'عناصر إضافية: select / option (قوائم) + textarea (نص متعدد الأسطر)',
      'التحقق: onsubmit="return validate()" + فحص الشروط + return false عند الخطأ'
    ],
    conceptMapEn: [
      'Media: audio controls, video controls with poster, nested source tags',
      'Forms: form container, input types (text, password, radio, checkbox)',
      'Controls: select dropdown with option, multi-line textarea',
      'Validation: onsubmit event interception, input length checks, return false'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp8-4-1',
        questionAr: 'صمم نموذج تسجيل دخول يحتوي على حقل البريد الإلكتروني، وحقل كلمة المرور، وزر إرسال.',
        questionEn: 'Design an HTML login form with email input, password input, and submit button.',
        solutionStepsAr: [
          '1) فتح وسم <form>.',
          '2) إضافة حقل البريد: <input type="email" placeholder="البريد الإلكتروني" required>.',
          '3) إضافة حقل كلمة المرور: <input type="password" placeholder="كلمة المرور" required>.',
          '4) إضافة زر الإرسال: <input type="submit" value="دخول"> وإغلاق </form>.'
        ],
        solutionStepsEn: [
          '1) Open <form>.',
          '2) Add email field: <input type="email" required>.',
          '3) Add password field: <input type="password" required>.',
          '4) Add submit button: <input type="submit" value="Login"> and close </form>.'
        ],
        answerAr: '<form><input type="email" required><input type="password" required><input type="submit" value="دخول"></form>',
        answerEn: '<form><input type="email" required><input type="password" required><input type="submit" value="Login"></form>'
      }
    ],

    assessment: {
      id: 'quiz-m-comp8-4',
      lectureId: 'm-comp8-4',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 4: الوسائط المتعددة ونماذج الويب والتحقق',
      titleEn: 'Mastery Assessment 4: Audio/Video Embedding, Forms & JS Validation',
      passingScore: 80,
      questions: [
        {
          id: 'q-med8-1',
          textAr: 'الوسم القياسي المستخدم لإدراج مقطع صوتي في صفحة HTML5 هو:',
          textEn: 'The standard HTML5 tag used to embed audio files in a web page is:',
          optionsAr: ['الوسم <audio controls>', 'الوسم <sound>', 'الوسم <music>', 'الوسم <mp3>'],
          optionsEn: ['<audio controls>', '<sound>', '<music>', '<mp3>'],
          correctIndex: 0,
          conceptTestedAr: 'وسم الصوت في HTML5',
          conceptTestedEn: 'HTML5 audio element',
          explanationAr: 'الوسم القياسي في HTML5 هو <audio> مع خاصية controls لعرض شريط المشغل.',
          explanationEn: '<audio controls> is the standard HTML5 element for native audio playback.',
          difficulty: 'easy'
        },
        {
          id: 'q-med8-2',
          textAr: 'ما الفرق الرئيسي بين أزرار radio ومربعات checkbox في نماذج الويب؟',
          textEn: 'What is the primary difference between radio buttons and checkboxes?',
          optionsAr: [
            'أزرار radio لاختيار بديل واحد فقط من المجموعة، بينما checkbox تتيح اختيار أكثر من بديل',
            'أزرار radio للأرقام فقط و checkbox للنصوص',
            'أزرار radio تظهر بنص غامق و checkbox بنص عادي',
            'لا يوجد أي فرق بينهما'
          ],
          optionsEn: [
            'Radio allows single choice per group; Checkbox allows multiple selections',
            'Radio is for numbers and Checkbox for text',
            'Radio appears bold and Checkbox normal',
            'No functional difference'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين radio و checkbox',
          conceptTestedEn: 'Radio vs Checkbox comparison',
          explanationAr: 'radio مخصص للاختيار الحصري الفردي (مثل النوع)، بينما checkbox يتيح تحديد خيارات متعددة (مثل الهوايات).',
          explanationEn: 'Radio enforces single selection; Checkbox allows multiple independent selections.',
          difficulty: 'easy'
        },
        {
          id: 'q-med8-3',
          textAr: 'الوسم المستخدم لإدخال نصوص وملاحظات طويلة تتكون من عدة أسطر هو:',
          textEn: 'Which HTML element enables multi-line text and comment entry in forms?',
          optionsAr: ['الوسم <textarea>', 'الوسم <input type="paragraph">', 'الوسم <textbox>', 'الوسم <multiline>'],
          optionsEn: ['<textarea>', '<input type="paragraph">', '<textbox>', '<multiline>'],
          correctIndex: 0,
          conceptTestedAr: 'وسم textarea للفقرات الطويلة',
          conceptTestedEn: 'Multi-line textarea element',
          explanationAr: 'الوسم <textarea> مخصص لكتابة النصوص الطويلة متعددة الأسطر مع التحكم في الأبعاد.',
          explanationEn: '<textarea> provides a multi-line plain text editing control.',
          difficulty: 'easy'
        },
        {
          id: 'q-med8-4',
          textAr: 'ما فائدة استخدام الوسم <source> داخل وسمي video و audio؟',
          textEn: 'What is the purpose of nesting <source> tags inside video or audio elements?',
          optionsAr: [
            'توفير صيغ ملفات متعددة (مثل MP4 و WebM) ليختار المتصفح الصيغة المتوافقة معه',
            'زيادة سرعة تحميل الصفحة',
            'ترجمة الفيديو تلقائياً للغة العربية',
            'تغيير ألوان المشغل'
          ],
          optionsEn: [
            'Provide multiple media formats (MP4, WebM) for browser cross-compatibility',
            'Increase page download speed',
            'Translate media to Arabic automatically',
            'Change player themes'
          ],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة وسم source لتعدد الصيغ',
          conceptTestedEn: 'Source tag fallback formats',
          explanationAr: 'وسم source يسمح بوضع بدائل متعددة لصيغ الفيديو والصوت لضمان عمل المشغل على مختلف المتصفحات.',
          explanationEn: 'Multiple source elements allow browsers to choose the first media format they support.',
          difficulty: 'medium'
        },
        {
          id: 'q-med8-5',
          textAr: 'عند كتابة كود التحقق من صحة النموذج، ماذا يجب أن تعيد الدالة لإلغاء إرسال البيانات الخاطئة؟',
          textEn: 'In form validation, what must the onsubmit handler return to abort sending invalid data?',
          optionsAr: ['القيمة false (return false;)', 'القيمة true (return true;)', 'القيمة 0', 'القيمة null'],
          optionsEn: ['return false;', 'return true;', 'return 0;', 'return null;'],
          correctIndex: 0,
          conceptTestedAr: 'إلغاء إرسال النموذج بـ return false',
          conceptTestedEn: 'Aborting form submission via return false',
          explanationAr: 'إرجاع false يلغي إجراء الإرسال الافتراضي للمتصفح ويوقف إرسال النموذج.',
          explanationEn: 'Returning false cancels browser submission, preventing transmission of invalid data.',
          difficulty: 'medium'
        }
      ]
    }
  },

  // ── LECTURE 5: CYBER SAFETY, DIGITAL FOOTPRINT & PUBLISHING ──
  {
    id: 'm-comp8-5',
    order: 5,
    titleAr: 'المحاضرة 5: الأمان السيبراني، البصمة الرقمية، الملكية الفكرية ونشر مواقع الويب',
    titleEn: 'Lecture 5: Cyber Security, Digital Footprint, Intellectual Property & Web Hosting',
    subtitleAr: 'الحماية من التهديدات الرقمية، إدارة البصمة والخصوصية، رخص المشاع الإبداعي، ونشر المواقع على الإنترنت',
    subtitleEn: 'Cyber threats mitigation, digital footprint management, online safety, copyright/Creative Commons, and hosting/publishing web pages.',
    durationMinutes: 35,
    isLocked: true,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الإعدادي (Grade 8) - مدارس اللغات والرسمية',
    gradeLevelNameEn: 'Grade 8 / Prep 2 - Middle School ICT & Web Development',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 - draft curriculum content',
    unitTitleAr: 'الوحدة الخامسة: المواطنة الرقمية والأمان السيبراني ونشر المواقع',
    unitTitleEn: 'Unit 5: Digital Citizenship, Cyber Safety & Web Publishing',
    lessonNumberAr: 'الدرس 5: الأمان الرقمي واستضافة المواقع ونشرها',
    lessonNumberEn: 'Lesson 5: Cyber Security, Online Privacy & Web Publication Pipeline',

    warmupHookAr: 'هل فكرت يوماً في الأثر الذي تتركه كل نقرة وكل تعليق لك على الإنترنت؟ وما الفرق بين موقعك وهو محفوظ على جهازك وموقع منشور يراه العالم كله؟ في هذا الدرس نختم رحلتنا بتعلم كيف تحمي نفسك رقمياً وكيف تطلق موقعك للعالم!',
    warmupHookEn: 'Every click leaves a digital footprint. Learn how to protect your cybersecurity, respect intellectual property, and publish your live website to the world!',

    learningOutcomesAr: [
      'أن يحدد أبرز التهديدات السيبرانية (البرمجيات الخبيثة Malware، التصيد الاحتيالي Phishing، وسرقة الهوية)',
      'أن يطبق قواعد إنشاء كلمات مرور قوية وتفعيل المصادقة الثنائية (2FA)',
      'أن يفهم مفهوم البصمة الرقمية (Digital Footprint) بنوعيها النشطة وغير النشطة للحفاظ على الخصوصية',
      'أن يميز بين حقوق الملكية الفكرية، وحقوق النشر (Copyright)، ورخص المشاع الإبداعي (Creative Commons)',
      'أن يشرح خطوات نشر موقع ويب: النطاق (Domain)، الاستضافة (Hosting)، ورفع الملفات عبر FTP / GitHub Pages'
    ],
    learningOutcomesEn: [
      'Identify key cyber threats: Malware, Phishing spoofing, Identity Theft, and Social Engineering',
      'Enforce strong password generation standards and enable Two-Factor Authentication (2FA)',
      'Audit Active and Passive Digital Footprints and safeguard online privacy',
      'Differentiate Copyright, Plagiarism, and Creative Commons licensing models',
      'Understand web publishing lifecycle: Domain Registration, Web Hosting, and FTP/GitHub Pages deployment'
    ],

    vocabulary: [
      {
        termAr: 'الأمان السيبراني (Cyber Security)',
        termEn: 'Cyber Security',
        definitionAr: 'مجموعة الممارسات والتقنيات المصممة لحماية الأنظمة والشبكات والبيانات من الهجمات والاختراقات الرقمية.',
        definitionEn: 'The practice of protecting systems, networks, and programs from digital cyberattacks.'
      },
      {
        termAr: 'البصمة الرقمية (Digital Footprint)',
        termEn: 'Digital Footprint',
        definitionAr: 'الأثر والبيانات التي يتركها المستخدم خلفه نتيجة تصفحه ونشاطه على شبكة الإنترنت.',
        definitionEn: 'The trail of data left behind by users through their digital interactions and browsing.'
      },
      {
        termAr: 'التصيد الاحتيالي (Phishing)',
        termEn: 'Phishing',
        definitionAr: 'حيلة لخداع المستخدمين عبر رسائل أو مواقع مزيفة لسرقة بيانات سرية ككلمات المرور والبطاقات البنكية.',
        definitionEn: 'Fraudulent attempt to steal sensitive credentials by disguising as a trustworthy entity.'
      },
      {
        termAr: 'استضافة الويب (Web Hosting)',
        termEn: 'Web Hosting',
        definitionAr: 'خدمة توفر مساحة تخزين على خوادم متصلة بالإنترنت 24/7 لعرض ملفات الموقع للزوار حول العالم.',
        definitionEn: 'Online service providing server storage space to make website files accessible worldwide.'
      }
    ],

    keyConceptsAr: [
      'التهديدات السيبرانية: التصيد الاحتيالي Phishing، الفيروسات والبرمجيات الخبيثة Malware، وضعف كلمات المرور',
      'سبل الحماية: كلمات مرور معقدة (أحرف + أرقام + رموز) وتفعيل المصادقة الثنائية 2FA وبرامج الحماية',
      'البصمة الرقمية: بصمة نشطة (Active بما تنشره) وبصمة غير نشطة (Passive بما يجمع عنك تلقائياً)',
      'الملكية الفكرية: حقوق النشر Copyright ©، منع الانتحال Plagiarism، ورخص المشاع الإبداعي Creative Commons',
      'نشر الموقع: حجز اسم النطاق (Domain) + حجز الاستضافة (Hosting) + رفع ملفات HTML/CSS عبر FTP أو GitHub Pages'
    ],
    keyConceptsEn: [
      'Cyber Threats: Phishing scams, Malware/Ransomware, and weak password vulnerabilities',
      'Defense Mechanisms: Complex passwords, Two-Factor Authentication (2FA), and antivirus software',
      'Digital Footprint: Active footprints (intentional posts) vs Passive footprints (logged metadata)',
      'Intellectual Property: Copyright protection, anti-plagiarism ethics, and Creative Commons licensing',
      'Web Publishing: Domain Name registration + Web Hosting servers + FTP / GitHub Pages deployment'
    ],
    summaryAr: 'خاتمة منهج الحاسب الآلي: الحماية من الهجمات الإلكترونية، إدارة البصمة والسمعة الرقمية، احترام حقوق الملكية الفكرية، والخطوات العملية لنشر واستضافة مواقع الويب على الإنترنت.',
    summaryEn: 'Complete guide to cybersecurity defenses, digital footprint hygiene, intellectual property laws, and practical web publishing and hosting workflows.',

    sections: [
      {
        titleAr: '1. التهديدات السيبرانية وطرق الحماية الرقمية',
        titleEn: '1. Cyber Threats & Defense Strategies',
        contentAr: 'تشمل التهديدات: 1) البرمجيات الخبيثة (Malware): برامج ضارة مثل الفيروسات وبرامج الفدية تدمر الملفات. 2) التصيد الاحتيالي (Phishing): رسائل وروابط مزيفة تنتحل صفة بنوك أو شركات لسرقة كلمات المرور. سبل الحماية: استخدام كلمات مرور قوية لا تقل عن 10 خانات تجمع بين أحرف كبيرة وصغيرة وأرقام ورموز، تفعيل المصادقة الثنائية (2FA)، وتجنب تحميل الملفات من مصادر غير موثوقة.',
        contentEn: 'Threats include Malware (viruses, ransomware) and Phishing (deceptive spoof links stealing credentials). Protection requires 10+ character complex passwords, Two-Factor Authentication (2FA), and cautious link inspection.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 1: فحص الروابط المشبوهة وكشف محاولات التصيد الاحتيالي',
          titleEn: 'Worked Example 1: Identifying Phishing URLs and Security Red Flags',
          equation: 'HTTPS آمن vs HTTP غير مشفر | فحص اسم النطاق بدقة',
          steps: [
            {
              stepNumber: 1,
              textAr: 'فحص بروتوكول الأمان: التأكد من وجود https:// ورمز القفل الآمن بجانب العنوان.',
              textEn: 'Verify https:// protocol and lock icon.',
              noteAr: 'تشفير الاتصال'
            },
            {
              stepNumber: 2,
              textAr: 'فحص اسم النطاق: الحذر من النطاقات المزيفة مثل (faceb00k.com بدلاً من facebook.com).',
              textEn: 'Inspect domain spelling for spoofing attempts.',
              noteAr: 'كشف التزوير'
            },
            {
              stepNumber: 3,
              textAr: 'المصادقة الثنائية 2FA: طلب رمز على الهاتف يمنع المخترق من الدخول حتى لو عرف كلمة المرور.',
              textEn: '2FA stops unauthorized logins even if password leaks.',
              noteAr: 'طبقة حماية ثانية'
            }
          ],
          takeawayAr: 'المصادقة الثنائية 2FA هي أقوى وسيلة أمان لحساباتك لأنها تجمع بين شيء تعرفه (كلمة المرور) وشيء تمتلكه (هاتفك).',
          takeawayEn: 'Two-Factor Authentication (2FA) pairs knowledge (password) with possession (device) for robust defense.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-5-1',
          questionAr: 'ما هو التصيد الاحتيالي (Phishing)؟',
          questionEn: 'What is the definition of a Phishing attack?',
          optionsAr: [
            'خداع المستخدم عبر رسائل أو روابط وهمية لسرقة بياناته السرية ككلمات المرور',
            'برنامج لتسريع أداء كارت الشاشة',
            'انقطاع مفاجئ في كابلات الإنترنت',
            'طريقة لضغط ملفات الصور'
          ],
          optionsEn: [
            'Deceiving users via spoofed messages or links to steal private credentials',
            'GPU acceleration software',
            'Internet cable outage',
            'Image compression method'
          ],
          correctIndex: 0,
          explanationAr: 'التصيد الاحتيالي هو انتحال صفة جهة موثوقة لخداع الضحية وسرقة بيانات حساسة.',
          explanationEn: 'Phishing is a social engineering attack masquerading as a trustworthy source to steal credentials.',
          hintAr: 'حيلة لخداع المستخدمين.'
        },
        tipsAr: [
          'لا تستخدم نفس كلمة المرور لجميع حساباتك الشخصية، واستخدم برامج إدارة كلمات المرور (Password Managers).',
          'لا تشارك رموز التحقق المرسلة إلى هاتفك (OTP) مع أي شخص مهما ادعى أنه من الدعم الفني.'
        ],
        tipsEn: [
          'Never reuse the same password across multiple services; use a password manager.',
          'Never share One-Time Passcodes (OTP) with anyone claiming to be tech support.'
        ]
      },
      {
        titleAr: '2. البصمة الرقمية والمواطنة والخصوصية',
        titleEn: '2. Digital Footprint, Privacy & Citizenship',
        contentAr: 'البصمة الرقمية هي الأثر الذي تتركه خلفك على الإنترنت، وتنقسم إلى: 1) بصمة نشطة (Active): ما تنشره بإرادتك كالمقالات والصور والتعليقات. 2) بصمة غير نشطة (Passive): ما يُسجل عنك تلقائياً كعنوان الـ IP وسجل التصفح والموقع الجغرافي. المواطنة الرقمية الإيجابية تتطلب التفكير قبل النشر، وتجنب التنمر الإلكتروني، وحماية البيانات الشخصية.',
        contentEn: 'Digital footprint is your online trail: Active (intentional posts, comments, photos) vs Passive (browsing history, IP tracking). Digital citizenship involves responsible posting, anti-cyberbullying ethics, and privacy vigilance.',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 2: خطوات إدارة البصمة الرقمية وضبط إعدادات الخصوصية',
          titleEn: 'Worked Example 2: Managing Personal Digital Footprint & Privacy Audits',
          equation: 'فكر قبل النشر + اضبط الخصوصية + احم بياناتك الشخصية',
          steps: [
            {
              stepNumber: 1,
              textAr: 'التفكير النقدي: هل هذا المنشور أو الصورة سيفيدني أم يضر بسمعتي مستقبلاً؟',
              textEn: 'Evaluate whether a post protects future reputation.',
              noteAr: 'الوعي الرقمي'
            },
            {
              stepNumber: 2,
              textAr: 'ضبط الخصوصية: جعل الحسابات الشخصية خاصة (Private) ومقتصرة على الأصدقاء.',
              textEn: 'Configure account visibility to Private/Friends only.',
              noteAr: 'التحكم في الظهور'
            },
            {
              stepNumber: 3,
              textAr: 'عدم مشاركة المعلومات الحساسة: كالعناوين المنزلية، أرقام الهواتف، وتفاصيل البطاقات.',
              textEn: 'Refrain from sharing sensitive identifiable information.',
              noteAr: 'حماية البيانات'
            }
          ],
          takeawayAr: 'ما ينشر على الإنترنت قد يبقى للأبد حتى لو قمت بحذفه لاحقاً، لذا فكر جيداً قبل الضغط على زر النشر.',
          takeawayEn: 'Digital content can be permanently archived or screenshotted; think critically before publishing.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-5-2',
          questionAr: 'أي من العناصر التالية يُعد مثالاً على البصمة الرقمية غير النشطة (Passive Footprint)؟',
          questionEn: 'Which of the following is an example of a Passive Digital Footprint?',
          optionsAr: [
            'تسجيل عنوان IP وموقعك الجغرافي تلقائياً عند زيارة موقع ويب',
            'كتابة منشور على وسائل التواصل الاجتماعي',
            'إرسال رسالة بريد إلكتروني لصديق',
            'رفع مقطع فيديو على يوتيوب'
          ],
          optionsEn: [
            'Automatic logging of IP address and location upon visiting a website',
            'Posting on social media',
            'Sending an email to a friend',
            'Uploading a video to YouTube'
          ],
          correctIndex: 0,
          explanationAr: 'البصمة غير النشطة هي البيانات التي تُجمع وتسجل تلقائياً في الخلفية دون تدخل مباشر من المستخدم.',
          explanationEn: 'Passive footprints represent background data collected automatically without deliberate user submission.',
          hintAr: 'البيانات التي تُجمع تلقائياً في الخلفية.'
        },
        tipsAr: [
          'ابحث عن اسمك على محركات البحث دورياً للتحقق من المعلومات المنشورة عنك ومراجعة بصمتك الرقمية.',
          'استخدم محركات بحث تحترم الخصوصية ولا تحتفظ بسجلات التتبع.'
        ],
        tipsEn: [
          'Periodically search your own name online to audit your public digital footprint.',
          'Use privacy-focused search engines that do not log personal tracking data.'
        ]
      },
      {
        titleAr: '3. الملكية الفكرية ورخص المشاع الإبداعي',
        titleEn: '3. Intellectual Property, Copyright & Creative Commons',
        contentAr: 'حقوق النشر (Copyright ©) تحمي المصنفات المبتكرة (الصور، الأكواد، الكتب، الصوتيات) من النسخ والاستخدام دون إذن صاحبها. الانتحال (Plagiarism) هو نسخ عمل الآخرين ونسبه للنفس دون ذكر المصدر. رخص المشاع الإبداعي (Creative Commons - CC) تتيح للمؤلفين مشاركة أعمالهم مع العالم بشروط واضحة مثل ذكر اسم صاحب العمل (CC-BY).',
        contentEn: 'Copyright protects original creative works from unauthorized copying. Plagiarism is taking others’ work and claiming it as your own. Creative Commons (CC) licenses allow creators to grant standardized reuse permissions (e.g. CC-BY Attribution).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 3: استخدام صور مرخصة برخصة المشاع الإبداعي مع ذكر المصدر',
          titleEn: 'Worked Example 3: Ethical Media Attribution Under Creative Commons',
          equation: 'صورة مجانية مرخصة + وسم إسناد المصدر (Attribution)',
          steps: [
            {
              stepNumber: 1,
              textAr: 'البحث عن صور مجانية مرخصة برخص CC0 أو CC-BY من منصات موثوقة.',
              textEn: 'Source open licensed imagery (CC0 / CC-BY).',
              noteAr: 'البحث الأخلاقي'
            },
            {
              stepNumber: 2,
              textAr: 'إدراج الصورة في الصفحة: <img src="photo.jpg" alt="طبيعة">.',
              textEn: 'Embed image into HTML document.',
              noteAr: 'عرض الصورة'
            },
            {
              stepNumber: 3,
              textAr: 'إضافة الإسناد: <small>تصوير: أحمد محمد - مرخصة برخصة CC-BY 4.0</small>.',
              textEn: 'Add visible attribution credit to author.',
              noteAr: 'احترام الملكية الفكرية'
            }
          ],
          takeawayAr: 'احترام الملكية الفكرية وذكر المصادر يعكس الأمانة العلمية والأخلاقية للمبرمج والباحث.',
          takeawayEn: 'Proper attribution honors intellectual property and upholds academic and developer integrity.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-5-3',
          questionAr: 'ماذا تعني رخصة المشاع الإبداعي CC-BY عند استخدام صورة أو كود؟',
          questionEn: 'What does the Creative Commons CC-BY license require when using content?',
          optionsAr: [
            'يسمح باستخدام العمل ومشاركته بشرط ذكر اسم صاحب العمل الأصلي (الإسناد)',
            'يُمنع استخدام العمل نهائياً لأي غرض',
            'يجب دفع مبلغ مالي للمؤلف عند كل استخدام',
            'العمل متاح فقط للاستخدام الحكومي'
          ],
          optionsEn: [
            'Allows sharing and adaptation provided proper credit is given to the author (Attribution)',
            'Prohibits any use for any purpose',
            'Requires financial payment on each use',
            'Restricted exclusively to government use'
          ],
          correctIndex: 0,
          explanationAr: 'رخصة CC-BY تشترط فقط الإسناد بذكر اسم المؤلف الأصلي وتسمح بالاستخدام والتعديل بحرية.',
          explanationEn: 'CC-BY requires attribution to the creator while permitting free reuse and adaptation.',
          hintAr: 'رمز BY يعني الإسناد للمؤلف.'
        },
        tipsAr: [
          'استخدم منصات مثل Wikimedia Commons و Unsplash للحصول على صور ورسوم مرخصة قانونياً لمشاريعك.',
          'البرمجيات مفتوحة المصدر تستخدم أيضاً رخصاً مثل MIT و GPL لتحديد شروط إعادة الاستخدام.'
        ],
        tipsEn: [
          'Source legally compliant media from repositories like Wikimedia Commons and Unsplash.',
          'Open source software uses licenses like MIT and GPL to govern source code reuse.'
        ]
      },
      {
        titleAr: '4. خطوات نشر واستضافة موقع الويب',
        titleEn: '4. Web Hosting, Domains & Publishing Pipeline',
        contentAr: 'لنقل موقعك من جهازك المحلي ليصبح متاحاً للعالم كله تحتاج 3 مكونات أساسية: 1) اسم النطاق (Domain Name): العنوان الذي يكتبه الزوار (مثل www.myschool.com). 2) الاستضافة (Web Hosting): خادم سحابي متصل بالإنترنت 24/7 يحفظ ملفات HTML و CSS و JS. 3) وسيلة الرفع: بروتوكول نقل الملفات FTP أو منصات النشر السحابية المجانية مثل GitHub Pages.',
        contentEn: 'Publishing requires 3 core components: 1) Domain Name (human-readable address like myschool.com), 2) Web Hosting (cloud server storing website assets 24/7), and 3) Deployment tool (FTP client or automated hosting like GitHub Pages).',
        interactiveExample: {
          titleAr: 'مثال تطبيقي 4: نشر موقع ويب كامل مجاناً على منصة GitHub Pages',
          titleEn: 'Worked Example 4: Step-by-Step GitHub Pages Live Deployment',
          equation: 'ملفات الموقع محلياً  -->  مستودع GitHub  -->  Settings > Pages  -->  موقع حي منشور',
          steps: [
            {
              stepNumber: 1,
              textAr: 'تجهيز الملفات والتأكد أن الصفحة الرئيسية اسمها "index.html".',
              textEn: 'Ensure entry landing page is strictly named index.html.',
              noteAr: 'الملف الافتراضي'
            },
            {
              stepNumber: 2,
              textAr: 'إنشاء مستودع (Repository) جديد على GitHub ورفع ملفات المشروع بداخله.',
              textEn: 'Create repository on GitHub and commit files.',
              noteAr: 'حفظ الكود سحابياً'
            },
            {
              stepNumber: 3,
              textAr: 'الدخول إلى Settings ثم تبويب Pages واختيار الفرع main والضغط على Save ليصبح الموقع حياً.',
              textEn: 'Enable GitHub Pages from main branch in settings.',
              noteAr: 'إطلاق الموقع للعالم'
            }
          ],
          takeawayAr: 'خوادم الويب مبرمجة لفتح ملف index.html تلقائياً عند زيارة اسم النطاق، لذا يجب أن تسمى الصفحة الرئيسية دائماً index.html.',
          takeawayEn: 'Web servers default to serving index.html as the root entry point when visitors access a domain.'
        },
        formativeCheck: {
          id: 'fc-mcomp8-5-4',
          questionAr: 'لماذا يجب تسمية الصفحة الرئيسية في موقع الويب باسم "index.html"؟',
          questionEn: 'Why must the root homepage file of a website be named "index.html"?',
          optionsAr: [
            'لأن خوادم الويب مبرمجة لفتح هذا الملف تلقائياً عند كتابة عنوان الموقع',
            'لأن لغة HTML تمنع استخدام أي اسم آخر',
            'لتقليل حجم ملفات التنسيق CSS',
            'لإخفاء كود الصفحة عن الزوار'
          ],
          optionsEn: [
            'Web servers automatically serve index.html as the default landing document',
            'HTML forbids any other filename',
            'Reduces CSS file size',
            'Hides source code from visitors'
          ],
          correctIndex: 0,
          explanationAr: 'index.html هو الاسم القياسي العالمي الذي تبحث عنه خوادم الويب لفتحه تلقائياً عند زيارة النطاق.',
          explanationEn: 'index.html is the universal default filename served by web servers upon domain access.',
          hintAr: 'الملف الافتراضي القياسي للخوادم.'
        },
        tipsAr: [
          'احرص على ألا تحتوي أسماء الملفات والصور على مسافات أو حروف عربية لتجنب أخطاء الروابط على خوادم الويب.',
          'منصة GitHub Pages توفر شهادة تشفير HTTPS مجانية لموقعك تلقائياً.'
        ],
        tipsEn: [
          'Avoid spaces and special characters in asset filenames to prevent URL encoding errors on servers.',
          'GitHub Pages provisions free SSL/HTTPS certificates automatically.'
        ]
      }
    ],

    conceptMapAr: [
      'الأمان السيبراني: الحماية من Malware و Phishing + كلمات مرور قوية + 2FA',
      'البصمة الرقمية: نشطة (بما تنشره) + غير نشطة (IP وسجل التصفح) + حماية الخصوصية',
      'الملكية الفكرية: Copyright © + منع الانتحال + رخص المشاع الإبداعي CC-BY',
      'نشر الويب: اسم النطاق (Domain) + الاستضافة (Hosting) + index.html + GitHub Pages'
    ],
    conceptMapEn: [
      'Cybersecurity: Malware/Phishing mitigation, strong passwords, 2FA',
      'Digital Footprint: Active (posts) vs Passive (metadata), privacy controls',
      'Intellectual Property: Copyright, anti-plagiarism, Creative Commons CC-BY',
      'Web Publishing: Domain Name, Web Hosting, index.html entry, GitHub Pages'
    ],

    textbookExercises: [
      {
        id: 'ex-mcomp8-5-1',
        questionAr: 'قارن بين اسم النطاق (Domain Name) واستضافة الويب (Web Hosting) مع ذكر مثال لكل منهما.',
        questionEn: 'Compare Domain Name and Web Hosting with an example of each.',
        solutionStepsAr: [
          '1) اسم النطاق (Domain Name): هو العنوان النصي السهل الذي يكتبه الزائر في المتصفح للوصول للموقع. مثال: www.google.com.',
          '2) استضافة الويب (Web Hosting): هي جهاز الخادم السحابي المتصل بالإنترنت 24/7 الذي يخزن ملفات الموقع وصوره ليعرضها للزوار.'
        ],
        solutionStepsEn: [
          '1) Domain Name: The readable URL address typed by users (e.g. www.google.com).',
          '2) Web Hosting: The cloud server infrastructure storing site files 24/7 to serve visitors.'
        ],
        answerAr: 'النطاق هو العنوان (مثل google.com) • الاستضافة هي الخادم الذي يحفظ ملفات الموقع.',
        answerEn: 'Domain is the web address • Hosting is the server storing website files.'
      }
    ],

    assessment: {
      id: 'quiz-m-comp8-5',
      lectureId: 'm-comp8-5',
      titleAr: 'الاختبار الإتقاني الشامل للمحاضرة 5: الأمان السيبراني والملكية الفكرية ونشر المواقع',
      titleEn: 'Mastery Assessment 5: Cyber Safety, Privacy, Intellectual Property & Web Hosting',
      passingScore: 80,
      questions: [
        {
          id: 'q-sec8-1',
          textAr: 'ما هي الميزة الأساسية لتفعيل المصادقة الثنائية (Two-Factor Authentication - 2FA) في حساباتك؟',
          textEn: 'What is the primary security advantage of enabling Two-Factor Authentication (2FA)?',
          optionsAr: [
            'تضيف طبقة حماية ثانية تطلب رمزاً على هاتفك بجانب كلمة المرور لمنع الاختراق حتى لو سُرقت كلمة المرور',
            'تسرع عملية تسجيل الدخول',
            'تسمح بالدخول بدون كتابة كلمة مرور نهائياً',
            'تقوم بمسح الفيروسات من الجهاز تلقائياً'
          ],
          optionsEn: [
            'Adds a second verification layer requiring phone OTP, preventing unauthorized access even if password is compromised',
            'Speeds up login process',
            'Allows passwordless login',
            'Cleans computer viruses automatically'
          ],
          correctIndex: 0,
          conceptTestedAr: 'أهمية المصادقة الثنائية 2FA',
          conceptTestedEn: '2FA security benefits',
          explanationAr: 'المصادقة الثنائية تطلب إثباتين للهوية لحماية حسابك حتى لو تمكن أحد من تخمين أو سرقة كلمة المرور.',
          explanationEn: '2FA requires two distinct factors (password + device code), blocking unauthorized logins.',
          difficulty: 'easy'
        },
        {
          id: 'q-sec8-2',
          textAr: 'أي من كلمات المرور التالية تُعد الأكثر قوة وأماناً ومطابقة للمعايير؟',
          textEn: 'Which of the following passwords represents the strongest security standard?',
          optionsAr: ['Tr@9$mK#82vL!', '12345678', 'ahmed2026', 'password123'],
          optionsEn: ['Tr@9$mK#82vL!', '12345678', 'ahmed2026', 'password123'],
          correctIndex: 0,
          conceptTestedAr: 'معايير كلمة المرور القوية',
          conceptTestedEn: 'Strong password complexity',
          explanationAr: 'كلمة المرور القوية تجمع بين 10+ خانات وتحتوي على أحرف كبيرة وصغيرة وأرقام ورموز خاصة وغير قابلة للتخمين.',
          explanationEn: 'Complex passwords combine 10+ characters with uppercase, lowercase, numbers, and symbols.',
          difficulty: 'easy'
        },
        {
          id: 'q-sec8-3',
          textAr: 'ماذا يسمى نسخ مقال أو كود برمجي لشخص آخر ونسبه لنفسك دون ذكر صاحبه الأصلي؟',
          textEn: 'What is the term for copying another person’s writing or code without attribution?',
          optionsAr: ['الانتحال والسرقة الفكرية (Plagiarism)', 'المواطنة الرقمية (Digital Citizenship)', 'المشاع الإبداعي (Creative Commons)', 'التشفير (Encryption)'],
          optionsEn: ['Plagiarism', 'Digital Citizenship', 'Creative Commons', 'Encryption'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم الانتحال والسرقة الفكرية Plagiarism',
          conceptTestedEn: 'Plagiarism definition',
          explanationAr: 'الانتحال (Plagiarism) هو ادعاء ملكية عمل أو إبداع شخص آخر وهو انتهاك للأمانة العلمية والملكية الفكرية.',
          explanationEn: 'Plagiarism is presenting someone else’s intellectual work as your own without credit.',
          difficulty: 'easy'
        },
        {
          id: 'q-sec8-4',
          textAr: 'ما الفرق بين اسم النطاق (Domain Name) واستضافة الويب (Web Hosting)؟',
          textEn: 'What is the distinction between a Domain Name and Web Hosting?',
          optionsAr: [
            'اسم النطاق هو العنوان الذي يكتبه الزائر (مثل moe.gov.eg) والاستضافة هي الخادم الذي يحفظ ملفات الموقع',
            'اسم النطاق هو المتصفح والاستضافة هي لغة البرمجة',
            'كلاهما اسمان لنفس الخدمة بالضبط',
            'الاستضافة مجانية دائماً والنطاق مستحيل شراؤه'
          ],
          optionsEn: [
            'Domain is the address typed by visitors; Hosting is the cloud server storing files',
            'Domain is browser and Hosting is programming language',
            'Exact synonyms for identical service',
            'Hosting is always free and domains cannot be purchased'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين اسم النطاق واستضافة الويب',
          conceptTestedEn: 'Domain Name vs Web Hosting distinction',
          explanationAr: 'اسم النطاق هو العنوان الرقمي للموقع، بينما الاستضافة هي الخادم الذي يحفظ صفحات وصور الموقع على الإنترنت.',
          explanationEn: 'Domain is the human-readable web address; hosting is the server storage infrastructure.',
          difficulty: 'medium'
        },
        {
          id: 'q-sec8-5',
          textAr: 'ما هو السلوك السليم للحفاظ على بصمتك الرقمية وخصوصيتك على الإنترنت؟',
          textEn: 'What is the recommended practice for positive digital footprint and online privacy?',
          optionsAr: [
            'التفكير ملياً قبل نشر أي محتوى، وضبط خصوصية الحسابات، وتجنب مشاركة البيانات الحساسة',
            'مشاركة كلمات المرور مع الأصدقاء في المدرسة',
            'نشر صور البطاقات الشخصية وأرقام الهواتف علناً',
            'قبول طلبات الصداقة من أي شخص مجهول'
          ],
          optionsEn: [
            'Thinking critically before posting, configuring privacy controls, and withholding sensitive data',
            'Sharing passwords with classmates',
            'Publicly posting national IDs and phone numbers',
            'Accepting friend requests from unknown strangers'
          ],
          correctIndex: 0,
          conceptTestedAr: 'الممارسات السليمة لحماية البصمة الرقمية',
          conceptTestedEn: 'Digital footprint best practices',
          explanationAr: 'الوعي الرقمي يتطلب الحذر قبل النشر، وضبط إعدادات الخصوصية، وحماية المعلومات الشخصية الحساسة.',
          explanationEn: 'Responsible digital citizenship starts with thoughtful posting and strict privacy configurations.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
