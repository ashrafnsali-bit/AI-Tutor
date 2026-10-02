import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL COMPUTER SCIENCE & ICT — GRADE 12 (كمبيوتر وتكنولوجيا المعلومات ثالثة ثانوي - لغات وعربي)
// Official Grade 12 / Secondary 3 National Ministry & Language School Curriculum Alignment:
// Unit 1: Full-Stack Web Architecture & Responsive Systems Design (Client-Server, HTML5/CSS3)
// Unit 2: Client-Side Interactive Logic & Asynchronous Web APIs (JavaScript, JSON & Event Engines)
// Unit 3: Relational Database Design & Advanced SQL Operations (ERD, Normalization, Multi-Table JOINs)
// Unit 4: Server-Side Web Backend with PHP & MySQL (CRUD Operations, Sessions & Authentication)
// Unit 5: Capstone Dynamic Web Application & Cyber Security Essentials (SQL Injection Defense, XSS, SSL & Ethics)
// ============================================================================

export const HIGH_COMP_G12_LECTURES: Lecture[] = [
  // ── LECTURE 1: FULL-STACK ARCHITECTURE & RESPONSIVE DESIGN ──
  {
    id: 'h12-cs-1',
    order: 1,
    titleAr: 'المحاضرة 1: معمارية الويب المتكاملة وتصميم وتطوير واجهات المواقع المتجاوبة (Full-Stack & Responsive Web)',
    titleEn: 'Lecture 1: Full-Stack Web Architecture, HTTP/HTTPS Protocol & Responsive Interface Design',
    subtitleAr: 'معمارية الويب (Front-End vs Back-End)، بروتوكولات العميل والخادم HTTP/HTTPS وعناوين DNS، تصميم واجهات الويب التفاعلية المتجاوبة (Responsive Design) وهيكلة المشاريع متعددة الصفحات',
    subtitleEn: 'Master full-stack web architecture, client-server HTTP/HTTPS request lifecycle, DNS domain resolution, and responsive CSS3 Grid/Flexbox multi-page project layouts.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Computer & ICT',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: معمارية الويب وتصميم الواجهات المتكاملة',
    unitTitleEn: 'Unit 1: Web Architecture & UI Design',
    lessonNumberAr: 'الدرس 1: معمارية الويب الشاملة والتصميم المتجاوب',
    lessonNumberEn: 'Lesson 1: Full-Stack Architecture & Responsive UI',

    keyConceptsAr: [
      'معمارية الويب الشاملة: واجهة المستخدم (Front-End) وخادم التطبيقات (Back-End) وقاعدة البيانات (Database)',
      'بروتوكول نقل النص التشعبي الآمن (HTTPS) ومنفذ الاتصال والتشفير عبر شهادات SSL/TLS',
      'دورة الطلب والاستجابة (Request / Response Lifecycle) ودور خوادم الويب مثل Apache و Nginx',
      'التصميم المتجاوب (Responsive Web Design) واستخدام استعلامات الوسائط (CSS Media Queries) لتوافق الشاشات المختلفة'
    ],
    keyConceptsEn: [
      'Full-stack 3-tier architecture: Presentation Tier (Front-End), Application Logic (Back-End), and Data Tier (Database)',
      'HTTP vs HTTPS secure transmission protocols and SSL/TLS asymmetric encryption',
      'Client-server request/response cycle, DNS domain resolution, and Apache/Nginx web server hosting',
      'Responsive Web Design principles utilizing CSS3 Flexbox, Grid systems, and Media Queries for multi-device compatibility'
    ],

    conceptMapAr: [
      'العميل ( المتصفح ) ➔ يرسل طلب HTTPS ➔ خادم الويب (Apache/PHP) ➔ يستعلم من قاعدة البيانات (MySQL)',
      'الخادم ➔ يعالج البيانات ويولد صفحة HTML ديناميكية ➔ يرسل الاستجابة للمتصفح',
      'واجهة المستخدم ➔ HTML5 للهيكل + CSS3 للمظهر المتجاوب + JavaScript للتفاعل'
    ],
    conceptMapEn: [
      'Client Browser ➔ HTTPS Request ➔ Web Server (Apache/PHP) ➔ Query MySQL DB',
      'Server ➔ Processes business logic & renders HTML ➔ Sends HTTP Response',
      'Front-End ➔ HTML5 Structure + Responsive CSS3 + JavaScript Interactive Engine'
    ],

    learningOutcomesAr: [
      'توضيح مراحل دورة حياة طلب الويب (Client-Server Cycle) من كتابة الرابط حتى عرض الصفحة.',
      'التمييز بين أدوار وتقنيات الواجهة الأمامية (Front-End) والواجهة الخلفية (Back-End).',
      'بناء مشروع موقع ويب متجاوب يتكيف تلقائياً مع شاشات الهواتف والأجهزة اللوحية والحواسيب.'
    ],
    learningOutcomesEn: [
      'Explain full HTTP request-response lifecycle and DNS resolution stages.',
      'Differentiate roles, technologies, and runtime environments of front-end vs back-end systems.',
      'Build responsive multi-page web layouts using CSS3 Media Queries and modern layout modules.'
    ],

    vocabulary: [
      { termAr: 'معمارية الويب الثلاثية (3-Tier)', termEn: '3-Tier Web Architecture', definitionAr: 'نموذج برمجي يقسم تطبيق الويب إلى 3 طبقات منفصلة: طبقة العرض (المتصفح)، طبقة المعالجة والتطبيق (السيرفر)، وطبقة البيانات (قاعدة البيانات).' },
      { termAr: 'استعلامات الوسائط (Media Queries)', termEn: 'CSS Media Queries', definitionAr: 'قواعد في لغة CSS تسمح بتطبيق تنسيقات مخصصة بناءً على خصائص جهاز العرض مثل عرض الشاشة ودقتها.' }
    ],

    warmupHookAr: 'عندما تفتح موقعاً عالمياً مثل YouTube أو منصة بنك المعرفة المصري من هاتفك الذكي، ثم تفتحه من شاشة حاسوبك المكتبي العريضة، كيف تتغير القوائم وتترتب الفيديوهات تلقائياً دون أن ينكسر التصميم؟ بفضل تقنية "التصميم المتجاوب" (Responsive Design) واستعلامات الوسائط في CSS3!',
    warmupHookEn: 'When accessing the Egyptian Knowledge Bank on mobile vs a 4K desktop monitor, how does the layout seamlessly adapt from single-column vertical stacks to multi-column grids? Responsive Web Design and CSS3 Media Queries dynamic adaptation.',

    mainContentAr: `
### 1. معمارية تطبيقات الويب الثلاثية (3-Tier Architecture)
تتكون تطبيقات الويب الحديثة من ثلاثة أركان مترابطة:
1. **طبقة العرض (Presentation Layer - Front-End):**
   * تعمل على متصفح العميل؛ وتتكون من **HTML5** (الهيكل)، **CSS3** (التنسيق والألوان والتجاوب)، و **JavaScript** (التفاعل وسلوك الصفحة).
2. **طبقة المعالجة والتطبيق (Application Logic Layer - Back-End):**
   * تعمل على خادم الويب المركزي (مثل خوادم Apache أو Nginx)؛ وتُكتب بلغات الخادم مثل **PHP** أو Python لمعالجة الحسابات والتحقق من الصلاحيات.
3. **طبقة البيانات (Data Layer - Database):**
   * خادم قواعد البيانات العلائقية (مثل **MySQL**) لتخزين السجلات واسترجاعها بأمان عبر استعلامات SQL.

---

### 2. بروتوكول HTTP الآمن (HTTPS & SSL/TLS)
* **بروتوكول HTTP العادي (Port 80):** ينقل البيانات كنص صريح (Plaintext) يمكن اعتراضه والتنصت عليه.
* **بروتوكول HTTPS الآمن (Port 443):** يشفر جميع البيانات المتبادلة بين المتصفح والخادم باستخدام شهادة **SSL/TLS**، مما يضمن سرية كلمات المرور وأرقام البطاقات وسلامة البيانات من التلاعب.

---

### 3. تقنية التصميم المتجاوب (Responsive Web Design)
تعتمد على استخدام استعلامات الوسائط في CSS:
\`\`\`css
/* التنسيق الافتراضي للحواسيب والشاشات الكبيرة */
.container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
}

/* التكيف مع شاشات الهواتف الذكية */
@media (max-width: 768px) {
  .container {
    grid-template-columns: 1fr; /* يتحول لعمود واحد عمودي */
  }
}
\`\`\`
    `,
    mainContentEn: `
### 1. 3-Tier Architecture
* Front-End: HTML5, CSS3, JavaScript.
* Back-End: Server logic (PHP, Python) on Apache/Nginx.
* Database: MySQL relational storage.

### 2. HTTPS & SSL Encryption
* Port 443 with TLS encryption prevents eavesdropping.

### 3. Responsive Layouts
* CSS3 Media Queries (@media (max-width: 768px)).
    `,

    diagramType: '3tier_architecture_diagram',
    diagramData: {
      type: 'web_architecture_flow',
      title: 'معمارية الويب الثلاثية (Front-End ➔ Back-End ➔ Database)',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="50" width="100" height="100" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="35" y="85" fill="#38bdf8" font-size="12" font-weight="bold">Front-End</text>
        <text x="30" y="110" fill="#94a3b8" font-size="10">HTML / CSS / JS</text>
        <line x1="120" y1="90" x2="150" y2="90" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)" />
        <text x="125" y="80" fill="#34d399" font-size="9">HTTPS</text>
        <rect x="150" y="50" width="100" height="100" rx="8" fill="#312e81" stroke="#818cf8" stroke-width="2" />
        <text x="165" y="85" fill="#818cf8" font-size="12" font-weight="bold">Back-End</text>
        <text x="165" y="110" fill="#c7d2fe" font-size="10">PHP / Apache</text>
        <line x1="250" y1="90" x2="280" y2="90" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)" />
        <text x="255" y="80" fill="#fbbf24" font-size="9">SQL</text>
        <rect x="280" y="50" width="100" height="100" rx="8" fill="#064e3b" stroke="#34d399" stroke-width="2" />
        <text x="300" y="85" fill="#34d399" font-size="12" font-weight="bold">Database</text>
        <text x="310" y="110" fill="#a7f3d0" font-size="10">MySQL Server</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: كتابة قاعدة CSS متجاوبة لتحويل القائمة الجانبية في الهواتف',
        titleEn: 'Example: CSS Media Query for Mobile Navigation Collapse',
        problemAr: 'اكتب كود CSS يستخدم `@media` لتحويل عرض القائمة من صف أفقي (Flex) إلى عمود رأسي كامل العرض عندما يكون عرض شاشة الجهاز أقل من 600 بكسل.',
        problemEn: 'Write CSS Media Query to transform horizontal menu to vertical stack on screens under 600px.',
        stepsAr: [
          'نعرف التنسيق الافتراضي للشاشات الكبيرة: `.nav-menu { display: flex; flex-direction: row; }`.',
          'ننشئ استعلام الوسائط بالشرط `@media (max-width: 600px)`.',
          'داخل الاستعلام، نغير اتجاه الترتيب ليصبح رأسياً: `flex-direction: column; width: 100%;`.'
        ],
        stepsEn: [
          'Default desktop rule: .nav-menu { display: flex; flex-direction: row; }',
          'Define media query constraint: @media (max-width: 600px)',
          'Change flex orientation: flex-direction: column; width: 100%;'
        ],
        finalAnswerAr: `.nav-menu {
  display: flex;
  flex-direction: row;
}

@media (max-width: 600px) {
  .nav-menu {
    flex-direction: column;
    width: 100%;
  }
}`,
        finalAnswerEn: 'Responsive CSS rules with mobile flex-direction breakpoint.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12cs-1',
        problemAr: 'قارن بين بروتوكول HTTP العادي وبروتوكول HTTPS الآمن موضحاً رقم المنفذ (Port) الافتراضي لكل منهما.',
        problemEn: 'Compare HTTP vs HTTPS protocols stating their default port numbers.',
        solutionStepsAr: [
          'HTTP: بروتوكول نقل البيانات غير المشفر، يعمل عبر المنفذ 80، والبيانات المنقولة عبره عرضة للتنصت وسرقة الهوية.',
          'HTTPS: بروتوكول آمن يعتمد على تشفير SSL/TLS، يعمل عبر المنفذ 443، ويحمي سرية بيانات المستخدمين وكلمات المرور.'
        ],
        finalAnswerAr: 'HTTP (منفذ 80 غير مشفر)، و HTTPS (منفذ 443 مشفر بـ SSL/TLS لحماية البيانات).'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12cs-1',
        questionAr: 'الطبقة المسؤولة عن معالجة منطق التطبيق والتحقق من العمليات الحسابية في معمارية الويب الثلاثية هي:',
        questionEn: 'The tier responsible for processing application business logic in 3-tier web architecture is:',
        optionsAr: ['طبقة الخادم والتطبيق (Back-End / Application Tier)', 'طبقة العرض (Front-End)', 'طبقة قاعدة البيانات', 'متصفح المستخدم'],
        optionsEn: ['Application Tier (Back-End)', 'Presentation Tier (Front-End)', 'Data Tier', 'Client Browser'],
        correctIndex: 0,
        explanationAr: 'طبقة الخادم (Back-End) تنفذ الأكواد البرمجية (مثل PHP) وتتولى منطق التطبيق والتحقق من صحة المعاملات.',
        explanationEn: 'The Application/Back-End tier executes server-side business logic and authentication.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-h12-cs1',
      titleAr: 'اختبار إتقان معمارية الويب والتصميم المتجاوب',
      titleEn: 'Mastery Quiz: Web Architecture & Responsive UI',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-cs1-1',
          textAr: 'المنفذ الافتراضي (Default Port) المستخدم لبروتوكول الويب الآمن HTTPS هو:',
          textEn: 'The default network port assigned for secure HTTPS web traffic is:',
          optionsAr: ['443', '80', '21', '3306'],
          optionsEn: ['443', '80', '21', '3306'],
          correctIndex: 0,
          conceptTestedAr: 'منافذ بروتوكولات الويب',
          conceptTestedEn: 'Web protocol port numbers',
          explanationAr: 'بروتوكول HTTPS المشفر يعمل عبر المنفذ 443، بينما HTTP غير المشفر يعمل عبر المنفذ 80.',
          explanationEn: 'HTTPS operates over TCP port 443, while unencrypted HTTP uses port 80.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs1-2',
          textAr: 'التقنية المستخدمة في CSS لجعل الصفحة تتكيف ديناميكياً مع أحجام ومقاسات الشاشات المختلفة تُعرف بـ:',
          textEn: 'The CSS technique enabling pages to dynamically adapt to varying screen viewports is:',
          optionsAr: ['استعلامات الوسائط (Media Queries)', 'قواعد التحقق (Validation)', 'جداول قواعد البيانات', 'أوامر SQL'],
          optionsEn: ['Media Queries', 'Validation Rules', 'Database Tables', 'SQL Statements'],
          correctIndex: 0,
          conceptTestedAr: 'التصميم المتجاوب واستعلامات الوسائط',
          conceptTestedEn: 'Responsive design via CSS Media Queries',
          explanationAr: 'استعلامات الوسائط `@media` تطبق تنسيقات مختلفة وفقاً لعرض الشاشة ونوع الجهاز.',
          explanationEn: 'CSS Media Queries dynamically adjust styles based on device viewport properties.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs1-3',
          textAr: 'في دورة طلب الويب، النظام المسؤول عن تحويل اسم النطاق (مثل www.moe.gov.eg) إلى عنوان IP الرقمي المقابل هو:',
          textEn: 'In web request routing, the system responsible for resolving domain names into numerical IP addresses is:',
          optionsAr: ['خادم أسماء النطاقات (DNS - Domain Name System)', 'بروتوكول FTP', 'خادم قواعد البيانات MySQL', 'محرك الجافاسكريبت'],
          optionsEn: ['DNS (Domain Name System)', 'FTP Protocol', 'MySQL Database Server', 'JavaScript Engine'],
          correctIndex: 0,
          conceptTestedAr: 'وظيفة خادم DNS في شبكة الإنترنت',
          conceptTestedEn: 'Function of DNS in web routing',
          explanationAr: 'نظام DNS يعمل كدليل هاتف للإنترنت يترجم أسماء النطاقات النصية إلى عناوين IP رقمية للخوادم.',
          explanationEn: 'DNS translates human-readable domain URLs into machine-routable IP addresses.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: JAVASCRIPT & ASYNCHRONOUS WEB (AJAX/JSON) ──
  {
    id: 'h12-cs-2',
    order: 2,
    titleAr: 'المحاضرة 2: البرمجة التفاعلية المتقدمة بلغة JavaScript وتبادل البيانات غير المتزامن (AJAX & JSON)',
    titleEn: 'Lecture 2: Advanced Client-Side JavaScript: Form Engines, JSON Data & Asynchronous AJAX Fetch',
    subtitleAr: 'المصفوفات والكائنات في JavaScript، مفهوم تبادل البيانات بصيغة JSON، إرسال واستقبال الطلبات في الخلفية دون إعادة تحميل الصفحة عبر AJAX و Fetch API، وتحديث واجهة المستخدم ديناميكياً',
    subtitleEn: 'Master JavaScript objects, arrays, JSON serialization, asynchronous backend data exchange using AJAX and modern Fetch API, and dynamic DOM updating without page reloads.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Computer & ICT',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: البرمجة المتقدمة وتبادل البيانات',
    unitTitleEn: 'Unit 1: Advanced Programming & Data Exchange',
    lessonNumberAr: 'الدرس 2: المعالجة غير المتزامنة و AJAX و JSON',
    lessonNumberEn: 'Lesson 2: Asynchronous JS, AJAX & JSON',

    keyConceptsAr: [
      'كائنات ومصفوفات JavaScript وصيغة تبادل البيانات الخفيفة (JSON - JavaScript Object Notation)',
      'التحويل بين النصوص والكائنات: `JSON.stringify()` و `JSON.parse()`',
      'مفهوم الاتصال غير المتزامن (Asynchronous Communication) وتحديث أجزاء من الصفحة دون إعادة تحميلها بالكامل',
      'استخدام واجهة `fetch()` الحديثة لإرسال واستقبال البيانات من خادم الويب (API) وعرض النتائج فوراً'
    ],
    keyConceptsEn: [
      'JavaScript objects and the lightweight JSON data interchange standard',
      'JSON parsing and serialization: JSON.parse() and JSON.stringify()',
      'Asynchronous web communication (AJAX) updating page fragments without full page reloads',
      'Consuming backend APIs using the native JavaScript fetch() API with async/await or Promises'
    ],

    conceptMapAr: [
      'العميل يحتاج بيانات جديدة ➔ استدعاء `fetch("api/grades.php")` في الخلفية',
      'الخادم ➔ يرسل البيانات بصيغة `JSON` خفيفة وسريعة',
      'المتصفح ➔ يحلل كائن الـ JSON ➔ يحدث محتوى الـ DOM فوراً دون انقطاع تجربة المستخدم'
    ],
    conceptMapEn: [
      'Client needs data ➔ Triggers background fetch("api/data.php")',
      'Server ➔ Responds with lightweight structured JSON payload',
      'Browser ➔ Parses JSON ➔ Dynamically injects into DOM in real-time'
    ],

    learningOutcomesAr: [
      'إنشاء وتنسيق ومعالجة كائنات ومصفوفات JSON لتبادل البيانات بين العميل والخادم.',
      'تطبيق تقنية AJAX باستخدام واجهة `fetch()` لجلب بيانات الطلاب وتحديث الجداول ديناميكياً.',
      'تفسير الفارق في سرعة وأداء تجربة المستخدم بين الطلبات المتزامنة وغير المتزامنة.'
    ],
    learningOutcomesEn: [
      'Structure, parse, and serialize JSON data for client-server communication.',
      'Execute asynchronous AJAX requests using fetch() to dynamically populate web views.',
      'Explain UX and performance advantages of asynchronous vs synchronous page loads.'
    ],

    vocabulary: [
      { termAr: 'صيغة JSON', termEn: 'JavaScript Object Notation (JSON)', definitionAr: 'صيغة نصية قياسية خفيفة وسهلة القراءة لتبادل البيانات بين لغات البرمجة المختلفة في تطبيقات الويب.' },
      { termAr: 'تقنية AJAX', termEn: 'Asynchronous JavaScript And XML (AJAX)', definitionAr: 'تقنية تتيح لصفحات الويب إرسال واستقبال البيانات من الخادم في الخلفية دون الحاجة لإعادة تحميل الصفحة بالكامل.' }
    ],

    warmupHookAr: 'عندما تكتب في شريط بحث Google أو موقع مدرستي وتبدأ الاقتراحات التلقائية بالظهور تحت خانة البحث فور كتابتك لكل حرف دون أن يعاد تحميل الصفحة، كيف يحدث هذا السحر البرمجي؟ بفضل تقنية AJAX واستخدام صيغة JSON لتبادل البيانات اللحظي مع السيرفر في الخلفية!',
    warmupHookEn: 'When typing in a search bar and receiving live autocomplete suggestions per keystroke without refreshing the browser, what technology powers this? Asynchronous AJAX Fetch requests communicating via JSON in the background.',

    mainContentAr: `
### 1. صيغة تبادل البيانات JSON (JavaScript Object Notation)
* صيغة شائعة جداً وخفيفة لتخزين ونقل البيانات المنظمة:
  \`\`\`json
  {
    "student_id": 101,
    "name": "محمود علي",
    "subjects": ["فيزياء", "كيمياء", "رياضيات"],
    "is_passed": true
  }
  \`\`\`
* **دوال التحويل في JavaScript:**
  * تحويل نص JSON إلى كائن برمجي: \`let obj = JSON.parse(jsonString);\`
  * تحويل كائن برمجي إلى نص JSON: \`let str = JSON.stringify(jsObject);\`

---

### 2. الاتصال غير المتزامن باستخدام Fetch API (AJAX)
بدلاً من إعادة تحميل الصفحة عند كل طلب، نستخدم دالة \`fetch()\` المدمجة:
\`\`\`javascript
// دالة لجلب بيانات نتيجة الطالب من السيرفر في الخلفية
function loadStudentResult(id) {
  fetch("get_result.php?id=" + id)
    .then(response => response.json()) // تحويل الاستجابة إلى JSON
    .then(data => {
      // تحديث واجهة المستخدم فوراً
      document.getElementById("student-name").innerText = data.name;
      document.getElementById("student-score").innerText = data.score + " %";
    })
    .catch(error => {
      console.error("حدث خطأ أثناء جلب البيانات:", error);
    });
}
\`\`\`
    `,
    mainContentEn: `
### 1. JSON Format & Methods
* Lightweight key-value data standard.
* JSON.parse(str) converts string to object; JSON.stringify(obj) serializes to string.

### 2. Asynchronous Fetch API
* fetch(url).then(res => res.json()).then(data => updateDOM(data));
* Updates DOM elements without refreshing browser window.
    `,

    diagramType: 'ajax_request_diagram',
    diagramData: {
      type: 'ajax_flow',
      title: 'مقارنة بين التحميل التقليدي المتزامن والتحميل غير المتزامن بـ AJAX',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="30" width="160" height="60" rx="6" fill="#1e293b" stroke="#f43f5e" />
        <text x="30" y="55" fill="#f43f5e" font-size="11" font-weight="bold">الطلب التقليدي (Sync)</text>
        <text x="30" y="75" fill="#94a3b8" font-size="10">إعادة تحميل الصفحة بالكامل ⟳</text>
        <rect x="20" y="110" width="160" height="60" rx="6" fill="#1e293b" stroke="#34d399" />
        <text x="30" y="135" fill="#34d399" font-size="11" font-weight="bold">طلب AJAX (Async)</text>
        <text x="30" y="155" fill="#94a3b8" font-size="10">تحديث الجزء المطلوب فقط ✓</text>
        <line x1="180" y1="140" x2="280" y2="140" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)" />
        <rect x="280" y="110" width="100" height="60" rx="6" fill="#064e3b" stroke="#34d399" />
        <text x="295" y="145" fill="#fff" font-size="11">JSON Server</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: جلب وعرض قائمة إشعارات من السيرفر باستخدام Fetch API',
        titleEn: 'Example: Fetching and Rendering Server Notifications',
        problemAr: 'اكتب كود جافاسكريبت يستخدم `fetch()` لجلب إشعار جديد من صفحة `notifications.php` ووضعه داخل عنصر `<div id="alert-box">`.',
        problemEn: 'Write JavaScript using fetch() to retrieve an alert from notifications.php and render into #alert-box.',
        stepsAr: [
          'نستدعي `fetch("notifications.php")`.',
          'نحول الاستجابة المستلمة إلى كائن JSON بواسطة `.then(res => res.json())`.',
          'نصل لعنصر التنبيه في الصفحة ونضع بداخله نص الإشعار المستلم: `document.getElementById("alert-box").innerText = data.message;`.'
        ],
        stepsEn: [
          'Call fetch("notifications.php").',
          'Convert response stream to JSON: res.json().',
          'Inject message into target element: document.getElementById("alert-box").innerText = data.message.'
        ],
        finalAnswerAr: `fetch("notifications.php")
  .then(res => res.json())
  .then(data => {
    document.getElementById("alert-box").innerText = data.message;
  });`,
        finalAnswerEn: 'Clean asynchronous fetch pipeline with DOM injection.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12cs-2',
        problemAr: 'ما وظيفة كل من الدالتين JSON.stringify() و JSON.parse() في لغة JavaScript؟',
        problemEn: 'State the function of JSON.stringify() and JSON.parse() in JavaScript.',
        solutionStepsAr: [
          'JSON.stringify(): تأخذ كائن جافاسكريبت وتحوله إلى نص بتنسيق JSON صالح للإرسال عبر الشبكة أو التخزين.',
          'JSON.parse(): تأخذ نصاً بتنسيق JSON وتحوله إلى كائن جافاسكريبت حقيقي يمكن قراءة وتعديل خصائصه برمجياً.'
        ],
        finalAnswerAr: 'stringify لتحويل الكائن إلى نص، و parse لتحويل النص إلى كائن برمجي.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12cs-2',
        questionAr: 'الميزة الأساسية لاستخدام تقنية AJAX في تطبيقات الويب الحديثة هي:',
        questionEn: 'The primary advantage of utilizing AJAX in modern web applications is:',
        optionsAr: ['تحديث أجزاء من الصفحة وتبادل البيانات في الخلفية دون إعادة تحميل الصفحة بالكامل', 'تسريع اتصال الإنترنت المنزلي', 'إلغاء الحاجة للغات البرمجة', 'تصغير حجم شاشات الحواسيب'],
        optionsEn: ['Updating page fragments in background without full refresh', 'Speeding up home ISP lines', 'Eliminating programming languages', 'Shrinking monitor hardware'],
        correctIndex: 0,
        explanationAr: 'تقنية AJAX تسمح بطلب واستقبال البيانات في الخلفية وتحديث أجزاء محددة من الـ DOM دون وميض أو إعادة تحميل النافذة.',
        explanationEn: 'AJAX enables asynchronous background data exchange and seamless partial page updates.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-h12-cs2',
      titleAr: 'اختبار إتقان البرمجة المتقدمة و AJAX و JSON',
      titleEn: 'Mastery Quiz: Advanced JS, AJAX & JSON',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-cs2-1',
          textAr: 'الدالة المستخدمة في JavaScript لتحويل نص بصيغة JSON إلى كائن برمجي يمكن التعامل معه هي:',
          textEn: 'The JavaScript method used to convert a JSON string into a usable object is:',
          optionsAr: ['`JSON.parse()`', '`JSON.stringify()`', '`JSON.toObject()`', '`JSON.convert()`'],
          optionsEn: ['JSON.parse()', 'JSON.stringify()', 'JSON.toObject()', 'JSON.convert()'],
          correctIndex: 0,
          conceptTestedAr: 'تحويل نصوص JSON في جافاسكريبت',
          conceptTestedEn: 'JSON parsing method',
          explanationAr: 'الدالة `JSON.parse(str)` تحلل النص وتعيد كائناً برمجياً.',
          explanationEn: 'JSON.parse() deserializes valid JSON text into JavaScript objects.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs2-2',
          textAr: 'الواجهة البرمجية الحديثة المدمجة في متصفحات الويب لإرسال طلبات الشبكة غير المتزامنة (AJAX) واستقبال البيانات هي:',
          textEn: 'The modern native browser API for dispatching asynchronous network requests and fetching data is:',
          optionsAr: ['`Fetch API`', '`Alert API`', '`Storage API`', '`Audio API`'],
          optionsEn: ['Fetch API', 'Alert API', 'Storage API', 'Audio API'],
          correctIndex: 0,
          conceptTestedAr: 'واجهة Fetch في جافاسكريبت',
          conceptTestedEn: 'JavaScript native Fetch API',
          explanationAr: 'واجهة `fetch()` هي الطريقة الحديثة والقياسية للتعامل مع طلبات الشبكة في JavaScript.',
          explanationEn: 'The Fetch API provides a modern Promise-based interface for making async HTTP requests.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs2-3',
          textAr: 'اختصار مصطلح JSON في علوم الحاسب يشير إلى:',
          textEn: 'The acronym JSON in computer science stands for:',
          optionsAr: ['JavaScript Object Notation', 'Java Standard Output Network', 'Joint Server Online Node', 'JavaScript Oriented Name'],
          optionsEn: ['JavaScript Object Notation', 'Java Standard Output Network', 'Joint Server Online Node', 'JavaScript Oriented Name'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف مصطلح JSON',
          conceptTestedEn: 'JSON standard definition',
          explanationAr: 'JSON تعني JavaScript Object Notation وهي الصيغة القياسية لنقل البيانات.',
          explanationEn: 'JSON stands for JavaScript Object Notation.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: RELATIONAL DATABASE ARCHITECTURE & ADVANCED SQL ──
  {
    id: 'h12-cs-3',
    order: 3,
    titleAr: 'المحاضرة 3: تصميم قواعد البيانات العلائقية (ERD)، المعيارية (Normalization)، واستعلامات الربط المتقدمة (SQL JOINs)',
    titleEn: 'Lecture 3: Relational Database Architecture (ERD), Normalization & Advanced Multi-Table SQL Queries',
    subtitleAr: 'مخططات الكيانات والعلاقات (ERD)، قواعد تسوية البيانات وتجنب التكرار (Normalization 1NF/2NF/3NF)، واستعلامات الربط بين الجداول (INNER JOIN, LEFT JOIN) والدوال التجميعية (COUNT, AVG, GROUP BY)',
    subtitleEn: 'Master Entity-Relationship Diagrams (ERD), database normalization rules (1NF, 2NF, 3NF), multi-table SQL INNER/LEFT JOINs, and aggregation grouping queries (COUNT, SUM, AVG, GROUP BY, HAVING).',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Computer & ICT',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: قواعد البيانات المتقدمة وإدارة النظم',
    unitTitleEn: 'Unit 2: Advanced Databases & Systems Management',
    lessonNumberAr: 'الدرس 3: تصميم قواعد البيانات واستعلامات الربط المتقدمة',
    lessonNumberEn: 'Lesson 3: Database Design & Advanced SQL',

    keyConceptsAr: [
      'مخطط الكيانات والعلاقات (ERD - Entity Relationship Diagram) والكيانات والصفات والروابط',
      'قواعد تسوية وتطبيع البيانات (Database Normalization) للحد من تكرار البيانات وضمان تكاملها (1NF, 2NF, 3NF)',
      'استعلامات الربط بين الجداول المتعددة: `INNER JOIN` (البيانات المشتركة فقط) و `LEFT JOIN` (جميع بيانات الجدول الأيسر)',
      'الدوال التجميعية والفرز المتقدم: `COUNT()`, `SUM()`, `AVG()`, `MAX()`, `MIN()`, والفرز المجموعي `GROUP BY` والشرطي `HAVING`'
    ],
    keyConceptsEn: [
      'Entity-Relationship Diagrams (ERD): entities, attributes, relationships, and cardinality',
      'Database Normalization principles (1NF, 2NF, 3NF) eliminating data redundancy and update anomalies',
      'Multi-table relational SQL JOINs: INNER JOIN matching sets vs LEFT OUTER JOIN full preservation',
      'Aggregate functions and statistical grouping: COUNT(), SUM(), AVG(), MAX(), MIN(), GROUP BY, and HAVING filters'
    ],

    conceptMapAr: [
      'تحليل النظام ➔ رسم مخطط ERD ➔ تحديد الكيانات والمفاتيح الأساسية والأجنبية',
      'تسوية الجداول ➔ تطبيق 1NF و 2NF و 3NF لمنع التكرار وتفكيك الجداول الضخمة',
      'استعلامات معقدة ➔ دمج جداول بـ `INNER JOIN` ➔ حساب المتوسطات بـ `GROUP BY`'
    ],
    conceptMapEn: [
      'System Analysis ➔ Draw ERD Diagram ➔ Define Primary & Foreign Keys',
      'Normalization ➔ Apply 1NF, 2NF, 3NF to eliminate redundancy and split bloated tables',
      'Complex Queries ➔ Merge tables with INNER JOIN ➔ Aggregate stats via GROUP BY'
    ],

    learningOutcomesAr: [
      'رسم وتصميم مخططات الكيانات والعلاقات (ERD) للأنظمة التعليمية والمدرسية.',
      'تطبيق قواعد المعيارية (Normalization) على الجداول للتخلص من تكرار البيانات غير الضروري.',
      'كتابة استعلامات SQL متقدمة لربط بيانات الجداول المتعددة واستخراج الإحصائيات والتقارير.'
    ],
    learningOutcomesEn: [
      'Design comprehensive Entity-Relationship Diagrams (ERD) for educational and business workflows.',
      'Normalize relational schemas up to 3NF to maintain data integrity and prevent update anomalies.',
      'Construct multi-table SQL queries joining tables and generating analytical summary reports.'
    ],

    vocabulary: [
      { termAr: 'مخطط الكيانات والعلاقات (ERD)', termEn: 'Entity-Relationship Diagram (ERD)', definitionAr: 'مخطط رسومي هندسي يوضح الكيانات المختلفة في النظام (مثل الطلاب، المدرسين، الفصول) وخصائصها والعلاقات المتبادلة بينها قبل إنشاء الجداول برمجياً.' },
      { termAr: 'استعلام الربط (INNER JOIN)', termEn: 'SQL INNER JOIN', definitionAr: 'استعلام يدمج السجلات من جدولين أو أكثر عندما يتطابق شرط الربط بين المفتاح الأساسي والمفتاح الأجنبي في كلا الجدولين.' }
    ],

    warmupHookAr: 'في قاعدة بيانات وزارة التربية والتعليم، إذا أردنا طباعة شهادة الثانوية العامة لطالب معين متضمنة: اسم الطالب من جدول الطلاب، واسم المدرسة من جدول المدارس، ودرجاته في كل مادة من جدول الامتحانات؛ كيف يتم دمج هذه الجداول الثلاثة معاً في جزء من الثانية؟ عبر كتابة استعلام ربط متعدد الجداول (SQL JOIN)!',
    warmupHookEn: 'When generating a national high school diploma combining student name from the Users table, school name from the Schools table, and individual course marks from the Exams table, how are all three merged simultaneously? Through multi-table relational SQL JOIN queries.',

    mainContentAr: `
### 1. مخططات العلاقات وتطبيع البيانات (ERD & Normalization)
* **قواعد التسوية (Normalization Levels):**
  1. **المعيار الأول (1NF):** ألا يحتوي أي حقل في الجدول على قيم متعددة (القيم ذرية مفردة Atomic Values)، ووجود مفتاح أساسي فريد.
  2. **المعيار الثاني (2NF):** أن يحقق 1NF، وألا تعتمد أي خاصية غير رئيسية على جزء من المفتاح الأساسي المركب (الاعتماد الوظيفي التام).
  3. **المعيار الثالث (3NF):** أن يحقق 2NF، وألا تعتمد أي خاصية غير رئيسية على خاصية أخرى غير رئيسية (إلغاء الاعتماد المتعدي Transitive Dependency).

---

### 2. استعلامات الربط المتقدمة (SQL JOINs)
* **الربط الداخلي (INNER JOIN):** يسترجع السجلات التي لها قيم متطابقة في كلا الجدولين:
  \`\`\`sql
  SELECT students.name, schools.school_name, exams.score
  FROM students
  INNER JOIN schools ON students.school_id = schools.id
  INNER JOIN exams ON students.id = exams.student_id
  WHERE exams.score >= 90;
  \`\`\`
* **الدوال التجميعية والفرز (Aggregation & Grouping):**
  \`\`\`sql
  -- حساب متوسط درجات الطلاب في كل مدرسة بشرط أن يكون المتوسط أعلى من 80
  SELECT school_id, AVG(score) AS average_score, COUNT(id) AS student_count
  FROM students
  GROUP BY school_id
  HAVING AVG(score) > 80;
  \`\`\`
    `,
    mainContentEn: `
### 1. Database Normalization
* 1NF: Atomic column values & unique primary key.
* 2NF: Full functional dependency on primary key.
* 3NF: Elimination of transitive dependencies.

### 2. SQL JOIN & Aggregation
* INNER JOIN merges rows matching on key conditions.
* GROUP BY with COUNT(), AVG(), SUM(), and HAVING filter.
    `,

    diagramType: 'sql_joins_diagram',
    diagramData: {
      type: 'venn_join_diagram',
      title: 'مخطط فن لأنواع استعلامات الربط في SQL (INNER JOIN vs LEFT JOIN)',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="150" cy="100" r="60" fill="rgba(56, 189, 248, 0.4)" stroke="#38bdf8" stroke-width="2" />
        <circle cx="230" cy="100" r="60" fill="rgba(52, 211, 153, 0.4)" stroke="#34d399" stroke-width="2" />
        <path d="M 190 55 A 60 60 0 0 1 190 145 A 60 60 0 0 1 190 55" fill="#fbbf24" opacity="0.8" />
        <text x="100" y="105" fill="#fff" font-size="11">جدول A</text>
        <text x="250" y="105" fill="#fff" font-size="11">جدول B</text>
        <text x="160" y="105" fill="#0f172a" font-size="11" font-weight="bold">INNER JOIN</text>
        <text x="140" y="180" fill="#fbbf24" font-size="12">البيانات المشتركة المتطابقة فقط</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: كتابة استعلام SQL لحساب عدد الطلاب المسجلين في كل صف دراسي',
        titleEn: 'Example: SQL Query for Student Enrollment per Grade Level',
        problemAr: 'اكتب استعلام SQL يسترجع اسم الصف الدراسي (\`grade_name\`) وعدد الطلاب المقيدين به (\`total_students\`) باستخدام دالة `COUNT()` والعبارة `GROUP BY`.',
        problemEn: 'Write SQL query using COUNT() and GROUP BY to get total enrolled students per grade_name.',
        stepsAr: [
          'نحدد اسم الصف الدراسي ودالة العد: `SELECT grade_name, COUNT(student_id) AS total_students`.',
          'نحدد اسم الجدول: `FROM students`.',
          'نجمع السجلات بحسب الصف الدراسي: `GROUP BY grade_name;`.'
        ],
        stepsEn: [
          'Specify column and count aggregate: SELECT grade_name, COUNT(student_id) AS total_students',
          'Specify table: FROM students',
          'Group records by grade_name: GROUP BY grade_name;'
        ],
        finalAnswerAr: 'SELECT grade_name, COUNT(student_id) AS total_students FROM students GROUP BY grade_name;',
        finalAnswerEn: 'SELECT grade_name, COUNT(student_id) AS total_students FROM students GROUP BY grade_name;'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12cs-3',
        problemAr: 'ما هو الفرق بين العبارة WHERE والعبارة HAVING في استعلامات لغة SQL؟',
        problemEn: 'Differentiate between WHERE and HAVING clauses in SQL.',
        solutionStepsAr: [
          'WHERE: تُستخدم لتصفية السجلات الفردية قبل إجراء عمليات التجميع والحسابات الإحصائية (لا تقبل الدوال التجميعية مثل AVG).',
          'HAVING: تُستخدم لتصفية نتائج الدوال التجميعية بعد استخدام العبارة GROUP BY (مثل HAVING AVG(score) > 75).'
        ],
        finalAnswerAr: 'WHERE تصفي السجلات الفردية قبل التجميع، و HAVING تصفي نتائج الدوال التجميعية بعد GROUP BY.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12cs-3',
        questionAr: 'نوع استعلام الربط في SQL الذي يرجع فقط السجلات التي تتطابق فيها المفاتيح بين الجدولين هو:',
        questionEn: 'The SQL join type that returns only rows where matching keys exist in both tables is:',
        optionsAr: ['`INNER JOIN`', '`FULL OUTER JOIN`', '`CROSS JOIN`', '`UNION`'],
        optionsEn: ['INNER JOIN', 'FULL OUTER JOIN', 'CROSS JOIN', 'UNION'],
        correctIndex: 0,
        explanationAr: 'الـ INNER JOIN يسترجع حصرياً السجلات التي يتطابق فيها شرط الربط بين الجدولين.',
        explanationEn: 'INNER JOIN returns records that have matching values in both joined tables.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-h12-cs3',
      titleAr: 'اختبار إتقان تصميم قواعد البيانات واستعلامات SQL المتقدمة',
      titleEn: 'Mastery Quiz: Relational Design & Advanced SQL',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-cs3-1',
          textAr: 'الهدف الأساسي من عملية تسوية وتطبيع قواعد البيانات (Database Normalization) هو:',
          textEn: 'The primary objective of database normalization is to:',
          optionsAr: ['منع تكرار البيانات وتجنب أخطاء التعديل والحذف وضمان تكامل العلاقات', 'زيادة مساحة الملفات على القرص', 'منع المستخدمين من قراءة الجداول', 'تسريع تشغيل الشاشة'],
          optionsEn: ['Eliminate data redundancy & maintain relational integrity', 'Increase disk file sizes', 'Block user read access', 'Speed up monitor refresh'],
          correctIndex: 0,
          conceptTestedAr: 'أهداف تسوية قواعد البيانات',
          conceptTestedEn: 'Database normalization objectives',
          explanationAr: 'التطبيع ينظم الحقول والجداول لحذف التكرار ومنع التعارض عند الإضافة والحذف والتعديل.',
          explanationEn: 'Normalization organizes data to reduce redundancy and eliminate anomalies.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs3-2',
          textAr: 'في لغة SQL، لتصفية نتائج الدوال التجميعية (مثل COUNT أو AVG) بعد استخدام العبارة GROUP BY نستخدم الكلمة:',
          textEn: 'In SQL, the keyword used to filter aggregated results after a GROUP BY clause is:',
          optionsAr: ['`HAVING`', '`WHERE`', '`FILTER`', '`LIMIT`'],
          optionsEn: ['HAVING', 'WHERE', 'FILTER', 'LIMIT'],
          correctIndex: 0,
          conceptTestedAr: 'الشرط التجميعي HAVING في SQL',
          conceptTestedEn: 'SQL HAVING clause',
          explanationAr: 'العبارة `HAVING` مخصصة حصرياً للشروط على المجموعات والدوال التجميعية.',
          explanationEn: 'HAVING applies conditional filters to aggregated grouped data.',
          difficulty: 'medium'
        },
        {
          id: 'qh12-cs3-3',
          textAr: 'في مخططات الكيانات والعلاقات (ERD)، يتم تمثيل "الكيان الأساسي" (Entity) برسم شكل هندسي عبارة عن:',
          textEn: 'In standard Entity-Relationship Diagrams (ERD), an Entity is geometrically represented by a:',
          optionsAr: ['مستطيل (Rectangle)', 'شكل بيضاوي (Oval)', 'معين (Diamond)', 'دائرة مزدوجة'],
          optionsEn: ['Rectangle', 'Oval', 'Diamond', 'Double Circle'],
          correctIndex: 0,
          conceptTestedAr: 'رموز مخططات ERD القياسية',
          conceptTestedEn: 'Standard ERD geometric notation',
          explanationAr: 'الكيان (Entity) يُمثل بمستطيل، والصفة (Attribute) بشكل بيضاوي، والعلاقة (Relationship) بمعين.',
          explanationEn: 'Entities are represented by rectangles, attributes by ovals, and relationships by diamonds.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: BACKEND DEVELOPMENT WITH PHP & MYSQL ──
  {
    id: 'h12-cs-4',
    order: 4,
    titleAr: 'المحاضرة 4: البرمجة المتكاملة من جانب الخادم بلغة PHP، إدارة الجلسات، وعمليات CRUD في MySQL',
    titleEn: 'Lecture 4: Server-Side Backend Architecture with PHP, Session Auth & Full MySQL CRUD Operations',
    subtitleAr: 'بناء الواجهات الخلفية (Backend APIs)، معالجة نماذج التسجيل وتسجيل الدخول، إدارة جلسات المستخدمين (Sessions & Cookies)، وتطبيق عمليات CRUD الكاملة (Create, Read, Update, Delete) على قواعد بيانات MySQL',
    subtitleEn: 'Master backend API architecture with PHP, user login authentication, session management, and implementing secure full CRUD database operations in MySQL.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Computer & ICT',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: تطوير الواجهات الخلفية وتطبيقات قواعد البيانات',
    unitTitleEn: 'Unit 2: Backend Development & Database Apps',
    lessonNumberAr: 'الدرس 4: برمجة السيرفر وإدارة الجلسات وعمليات CRUD',
    lessonNumberEn: 'Lesson 4: Backend PHP, Sessions & CRUD',

    keyConceptsAr: [
      'هيكلة الخادم الخلفي (Backend Architecture) ودوال الاتصال الآمن بقاعدة البيانات (`mysqli` و `PDO`)',
      'تطبيق عمليات الـ CRUD الأربعة كاملة: الإنشاء (Create)، القراءة (Read)، التعديل (Update)، والحذف (Delete)',
      'إدارة جلسات المستخدمين (Session Management) باستخدام `session_start()` و `$_SESSION` لتأمين لوحات التحكم',
      'التحقق من هوية المستخدم (User Authentication) ومقارنة كلمات المرور المشفرة عبر `password_verify()`'
    ],
    keyConceptsEn: [
      'Backend server architecture and secure MySQL database connections (mysqli / PDO)',
      'Complete implementation of the 4 CRUD operations (Create, Read, Update, Delete)',
      'Server-side state and session authentication management using session_start() and $_SESSION superglobals',
      'User login authentication pipelines comparing salted hashes via password_verify()'
    ],

    conceptMapAr: [
      'المستخدم يسجل الدخول ➔ كود PHP يستعلم عن الحساب ➔ يتحقق من كلمة المرور بـ `password_verify`',
      'إذا نجح الدخول ➔ يبدأ الجلسة `$_SESSION["user_id"] = $id` ➔ يوجهه للوحة التحكم',
      'لوحة التحكم ➔ تتيح عمليات الـ CRUD الكاملة مع فحص الجلسة عند كل طلب'
    ],
    conceptMapEn: [
      'User logs in ➔ PHP queries credentials ➔ Verifies hash via password_verify()',
      'If Successful ➔ Initializes $_SESSION["user_id"] ➔ Redirects to dashboard',
      'Protected Dashboard ➔ Executes full CRUD operations with active session guard'
    ],

    learningOutcomesAr: [
      'بناء نظام تسجيل دخول ومصادقة مستخدمين متكامل بلغة PHP وقواعد بيانات MySQL.',
      'تطبيق عمليات الإضافة والتعديل والحذف والاستعراض (CRUD) على سجلات الطلاب.',
      'حماية الصفحات الإدارية ولوحات التحكم من الدخول غير المصرح به باستخدام الجلسات (Sessions).'
    ],
    learningOutcomesEn: [
      'Build complete user authentication and login systems using PHP and MySQL.',
      'Implement secure full CRUD operations on database entities.',
      'Protect admin pages and sensitive endpoints against unauthorized access using session guards.'
    ],

    vocabulary: [
      { termAr: 'عمليات CRUD', termEn: 'CRUD Operations', definitionAr: 'العمليات الأربع الأساسية للتعامل مع أي قاعدة بيانات: الإنشاء (Create - INSERT)، القراءة (Read - SELECT)، التعديل (Update - UPDATE)، والحذف (Delete - DELETE).' },
      { termAr: 'تجزئة وتشفير كلمات المرور', termEn: 'Password Hashing', definitionAr: 'تحويل كلمة المرور إلى سلسلة نصية مشفرة أحادية الاتجاه (مثل دالة BCRYPT) يستحيل فكها حتى لو تم اختراق قاعدة البيانات.' }
    ],

    warmupHookAr: 'عندما تسجل خروجك من حسابك، ثم تحاول الضغط على زر "الرجوع للخلف" في المتصفح، تجد أن الموقع يمنعك ويعيدك فوراً لصفحة تسجيل الدخول. كيف عرف السيرفر أنك لم تعد مسجلاً؟ لأن كود PHP قام بتدمير جلستك (Session Destroy) على الخادم وحذف رمز التحقق الخاص بك!',
    warmupHookEn: 'When logging out of your portal and pressing the browser Back button, why are you instantly blocked and prompted to log in again? PHP destroys the server session token (session_destroy), invalidating credentials.',

    mainContentAr: `
### 1. نظام تسجيل الدخول والجلسات (PHP User Login & Sessions)
\`\`\`php
<?php
session_start(); // 1. بدء الجلسة
$conn = mysqli_connect("localhost", "root", "", "school_db");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    // استعلام عن المستخدم
    $sql = "SELECT id, name, password_hash FROM users WHERE email = '$email'";
    $result = mysqli_query($conn, $sql);

    if ($row = mysqli_fetch_assoc($result)) {
        // التحقق من صحة كلمة المرور المشفرة
        if (password_verify($password, $row['password_hash'])) {
            $_SESSION['user_id'] = $row['id'];
            $_SESSION['user_name'] = $row['name'];
            header("Location: dashboard.php"); // توجيه للوحة التحكم
            exit();
        } else {
            echo "كلمة المرور غير صحيحة!";
        }
    } else {
        echo "البريد الإلكتروني غير مسجل!";
    }
}
?>
\`\`\`

---

### 2. حماية الصفحات ولوحات التحكم (Session Guard)
\`\`\`php
<?php
session_start();
// التحقق من وجود جلسة نشطة
if (!isset($_SESSION['user_id'])) {
    header("Location: login.php"); // منع الدخول غير المصرح به
    exit();
}
echo "أهلاً بك يا " . $_SESSION['user_name'] . " في لوحة التحكم!";
?>
\`\`\`
    `,
    mainContentEn: `
### 1. Authentication & Session Flow
* session_start() initializes session state.
* password_verify(input, hash) verifies security hash.
* Set $_SESSION['user_id'] on successful login.

### 2. Route Protection (Session Guard)
* Check if (!isset($_SESSION['user_id'])) and redirect unauthenticated traffic to login.php.
    `,

    diagramType: 'session_auth_diagram',
    diagramData: {
      type: 'session_lifecycle',
      title: 'مخطط التحقق من جلسة المستخدم في الخادم (Session Authentication Guard)',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="80" width="100" height="40" rx="6" fill="#38bdf8" />
        <text x="30" y="105" fill="#fff" font-size="11">طلب لوحة التحكم</text>
        <line x1="120" y1="100" x2="160" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
        <polygon points="210,70 260,100 210,130 160,100" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
        <text x="185" y="105" fill="#0f172a" font-size="10" font-weight="bold">الجلسة نشطة؟</text>
        <line x1="210" y1="70" x2="210" y2="30" stroke="#f43f5e" stroke-width="2" />
        <rect x="170" y="10" width="80" height="30" rx="4" fill="#f43f5e" />
        <text x="180" y="30" fill="#fff" font-size="10">لا ➔ تحويل لـ Login</text>
        <line x1="260" y1="100" x2="300" y2="100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" />
        <rect x="300" y="80" width="90" height="40" rx="6" fill="#10b981" />
        <text x="310" y="105" fill="#fff" font-size="11">نعم ➔ عرض الصفحة ✓</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: كود تسجيل الخروج وتدمير الجلسة في PHP',
        titleEn: 'Example: PHP User Logout & Session Destruction Script',
        problemAr: 'اكتب كود صفحة `logout.php` الذي يقوم بإنهاء جلسة المستخدم الحالية تماماً وحذف جميع متغيرات الجلسة وتوجيهه لصفحة الدخول.',
        problemEn: 'Write complete logout.php script clearing session variables, destroying session, and redirecting.',
        stepsAr: [
          'نبدأ الجلسة للوصول إليها: `session_start();`.',
          'نفرغ جميع متغيرات الجلسة: `$_SESSION = array();`.',
          'ندمر الجلسة من الخادم: `session_destroy();`.',
          'نوجه المستخدم لصفحة تسجيل الدخول: `header("Location: login.php"); exit();`.'
        ],
        stepsEn: [
          'Access session: session_start();',
          'Clear session array: $_SESSION = array();',
          'Destroy session on server: session_destroy();',
          'Redirect: header("Location: login.php"); exit();'
        ],
        finalAnswerAr: `<?php
session_start();
$_SESSION = array();
session_destroy();
header("Location: login.php");
exit();
?>`,
        finalAnswerEn: 'Standard secure PHP session cleanup and redirection script.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12cs-4',
        problemAr: 'علل: لا يُنصح بتخزين كلمات مرور المستخدمين في قواعد البيانات كنص صريح (Plaintext) ويجب تشفيرها.',
        problemEn: 'Explain why user passwords must never be stored in databases as plaintext.',
        solutionStepsAr: [
          'لأنه في حال تعرضت قاعدة البيانات للاختراق أو التسريب، يستطيع المهاجمون قراءة كلمات المرور الصريحة وسرقة حسابات المستخدمين على الفور.',
          'استخدام التجزئة والتشفير (مثل `password_hash()`) يجعل البيانات المشفرة غير قابلة للقراءة أو العكس حتى لو تم الوصول للجدول.'
        ],
        finalAnswerAr: 'لحماية حسابات المستخدمين من السرقة والاطلاع المباشر في حال تعرضت قاعدة البيانات لأي تسريب أو اختراق.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12cs-4',
        questionAr: 'الدالة المستخدمة في لغة PHP للتحقق من تطابق كلمة المرور المدخلة مع الشفرة المخزنة في قاعدة البيانات هي:',
        questionEn: 'The PHP function used to verify a user-entered password against a stored secure hash is:',
        optionsAr: ['`password_verify()`', '`password_check()`', '`hash_match()`', '`verify_pass()`'],
        optionsEn: ['password_verify()', 'password_check()', 'hash_match()', 'verify_pass()'],
        correctIndex: 0,
        explanationAr: 'الدالة القياسية والآمنة في PHP هي `password_verify($password, $hash)` لمقارنة كلمة المرور بالتجزئة.',
        explanationEn: 'password_verify() securely checks if a plaintext password matches an encrypted hash.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-h12-cs4',
      titleAr: 'اختبار إتقان برمجة الخادم وإدارة الجلسات في PHP',
      titleEn: 'Mastery Quiz: PHP Backend, Sessions & CRUD',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-cs4-1',
          textAr: 'لبدء أو استئناف جلسة مستخدم في لغة PHP، يجب كتابة الأمر التالي في أول الصفحة:',
          textEn: 'To start or resume a user session in PHP, which function must be invoked at the top of the file:',
          optionsAr: ['`session_start();`', '`session_create();`', '`start_session();`', '`session_open();`'],
          optionsEn: ['session_start();', 'session_create();', 'start_session();', 'session_open();'],
          correctIndex: 0,
          conceptTestedAr: 'بدء الجلسات في PHP',
          conceptTestedEn: 'PHP session initialization',
          explanationAr: 'الأمر `session_start();` هو الدالة الرسمية لتفعيل الجلسات والوصول لمصفوفة `$_SESSION`.',
          explanationEn: 'session_start() initializes session data and enables access to $_SESSION.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs4-2',
          textAr: 'الحرف "U" في المصطلح البرمجي الشهير CRUD يشير إلى العملية:',
          textEn: 'In the database acronym CRUD, the letter "U" represents:',
          optionsAr: ['Update (تعديل السجلات)', 'Upload (رفع الملفات)', 'Union (دمج الجداول)', 'Unlock (إلغاء القفل)'],
          optionsEn: ['Update', 'Upload', 'Union', 'Unlock'],
          correctIndex: 0,
          conceptTestedAr: 'مفهوم عمليات CRUD في قواعد البيانات',
          conceptTestedEn: 'CRUD acronym components',
          explanationAr: 'المصطلح CRUD يمثل: Create (إنشاء)، Read (قراءة)، Update (تعديل)، Delete (حذف).',
          explanationEn: 'CRUD stands for Create, Read, Update, and Delete.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs4-3',
          textAr: 'لحماية الصفحات الإدارية من الدخول دون تسجيل دخول، نقوم بفحص المتغير التالي:',
          textEn: 'To guard admin pages against unauthenticated access, we check the existence of:',
          optionsAr: ['`$_SESSION["user_id"]`', '`$_GET["id"]`', '`$_POST["page"]`', '`$_SERVER["HOST"]`'],
          optionsEn: ['$_SESSION["user_id"]', '$_GET["id"]', '$_POST["page"]', '$_SERVER["HOST"]'],
          correctIndex: 0,
          conceptTestedAr: 'حماية الصفحات باستخدام متغيرات الجلسة',
          conceptTestedEn: 'Route authorization with session guards',
          explanationAr: 'إذا كان `!isset($_SESSION["user_id"])` فهذا يعني أن المستخدم لم يسجل دخوله ويتم تحويله فوراً لصفحة تسجيل الدخول.',
          explanationEn: 'Checking if $_SESSION["user_id"] is set prevents unauthorized direct URL access.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: CAPSTONE WEB PROJECT & CYBER SECURITY ESSENTIALS ──
  {
    id: 'h12-cs-5',
    order: 5,
    titleAr: 'المحاضرة 5: مشروع موقع الويب الديناميكي المتكامل، وأساسيات الأمن السيبراني والحماية الرقمية',
    titleEn: 'Lecture 5: Capstone Dynamic Web Application Project & Web Cyber Security Essentials',
    subtitleAr: 'تكامل مكونات المشروع العملي (HTML5 + CSS3 + JS + PHP + MySQL)، الحماية من الثغرات الأمنية الشائعة (SQL Injection, XSS, CSRF)، والاستخدام الأخلاقي للإنترنت والمواطنة الرقمية',
    subtitleEn: 'Master capstone dynamic web integration (HTML5/CSS3/JS/PHP/MySQL), securing web apps against top cyber vulnerabilities (SQL Injection, XSS, CSRF), SSL/TLS certificates, and digital citizenship ethics.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثالث الثانوي (Grade 12) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 12 / Secondary 3 - High School Computer & ICT',
    termAr: 'العام الدراسي الكامل',
    termEn: 'Full Academic Year Official Curriculum',
    unitTitleAr: 'الوحدة الثالثة: المشروع العملي الشامل والأمن السيبراني',
    unitTitleEn: 'Unit 3: Capstone Project & Cyber Security',
    lessonNumberAr: 'الدرس 5: مشروع الويب المتكامل والأمن السيبراني',
    lessonNumberEn: 'Lesson 5: Capstone Web Project & Security',

    keyConceptsAr: [
      'خطوات بناء مشروع الويب المتكامل: 1) التخطيط والتحليل، 2) تصميم قاعدة البيانات، 3) تصميم الواجهات، 4) برمجة الخادم، 5) الاختبار والنشر',
      'ثغرة حقن قواعد البيانات (SQL Injection) وكيفية الحماية منها عبر الاستعلامات المجهزة (Prepared Statements / Parameterized Queries)',
      'ثغرة البرمجة عبر المواقع (XSS - Cross-Site Scripting) وتطهير المدخلات بدالة `htmlspecialchars()`',
      'مبادئ التشفير المتماثل وغير المتماثل وشهادات الأمان الرقمية SSL/TLS',
      'المواطنة الرقمية والأخلاقيات وقوانين مكافحة جرائم تقنية المعلومات وحماية الخصوصية'
    ],
    keyConceptsEn: [
      'Full-stack project development phases: planning, database schema design, UI mockups, backend implementation, testing, and deployment',
      'SQL Injection prevention via Prepared Statements and parameterized queries',
      'Cross-Site Scripting (XSS) defense through strict input sanitization and htmlspecialchars() output encoding',
      'Symmetric vs asymmetric cryptography and SSL/TLS digital security certificates',
      'Digital citizenship, data privacy laws, and ethical technology usage guidelines'
    ],

    conceptMapAr: [
      'المشروع المتكامل ➔ واجهة تفاعلية (HTML/CSS/JS) + خادم (PHP) + قاعدة بيانات (MySQL)',
      'تأمين التطبيق ➔ تنقية المدخلات لمنع XSS + استعلامات مجهزة لمنع SQL Injection + تشفير كلمات المرور',
      'المواطنة الرقمية ➔ حماية البيانات الشخصية + احترام حقوق الملكية الفكرية'
    ],
    conceptMapEn: [
      'Integrated Project ➔ Front-End (HTML/CSS/JS) + Server (PHP) + Database (MySQL)',
      'Application Security ➔ htmlspecialchars (anti-XSS) + Prepared Statements (anti-SQLi) + Password Hashing',
      'Digital Citizenship ➔ Data privacy compliance + intellectual property protection'
    ],

    learningOutcomesAr: [
      'ربط جميع تقنيات الويب وقواعد البيانات في مشروع عملي تفاعلي متكامل (مثل بوابة نتائج الطلاب أو سجل الأنشطة).',
      'تحديد أخطر الثغرات الأمنية في تطبيقات الويب (SQLi و XSS) وتطبيق الحلول البرمجية لسدها.',
      'إدراك أهمية الأخلاقيات الرقمية وحماية البيانات الشخصية وقوانين الأمن السيبراني.'
    ],
    learningOutcomesEn: [
      'Synthesize all web technologies into a functional capstone dynamic portal (e.g. Student Portal / Feedback System).',
      'Identify and remediate critical web vulnerabilities including SQL Injection and Cross-Site Scripting (XSS).',
      'Apply cyber security principles and digital ethics in accordance with information technology standards.'
    ],

    vocabulary: [
      { termAr: 'الاستعلامات المجهزة (Prepared Statements)', termEn: 'Prepared Statements', definitionAr: 'تقنية برمجية في قواعد البيانات تفصل كود استعلام SQL عن البيانات المدخلة من المستخدم، مما يمنع نهائياً هجمات حقن قواعد البيانات (SQL Injection).' },
      { termAr: 'ثغرة XSS', termEn: 'Cross-Site Scripting (XSS)', definitionAr: 'ثغرة أمنية تحدث عند حقن أكواد JavaScript خبيثة في صفحة الويب تُنفذ في متصفحات الزوار الآخرين لسرقة بيانات الجلسات والملفات.' }
    ],

    warmupHookAr: 'عندما تقرأ في الأخبار عن تعرض موقع لسرقة بيانات مستخدميه بسبب ثغرة أمنية بسيطة، كيف يستطيع مبرمج الويب المحترف كتابة كود محصن بنسبة 100% ضد المخترقين؟ باستخدام سطر برمجي واحد يفصل بين كود الاستعلام والمدخلات يُدعى "الاستعلامات المجهزة" (Prepared Statements)!',
    warmupHookEn: 'When hearing about database leaks in the news, how do elite software engineers build bulletproof web applications? By enforcing Prepared Statements and parameter binding to immunize databases against SQL Injection.',

    mainContentAr: `
### 1. الحماية من ثغرة حقن قواعد البيانات (SQL Injection Defense)
* **المشكلة:** إذا تم دمج مدخلات المستخدم مباشرة في استعلام SQL:
  \`$sql = "SELECT * FROM users WHERE name = '" . $_POST['user'] . "'";\`
  * يمكن للمخترق كتابة: \`' OR '1'='1\` لتسجيل الدخول دون كلمة مرور!
* **الحل الآمن (Prepared Statements):**
  \`\`\`php
  $stmt = $conn->prepare("SELECT id, name FROM users WHERE email = ? AND password_hash = ?");
  $stmt->bind_param("ss", $email, $hash);
  $stmt->execute();
  $result = $stmt->get_result();
  \`\`\`

---

### 2. الحماية من ثغرة البرمجة عبر المواقع (XSS Defense)
* **المشكلة:** محاولة المخترق كتابة كود جافاسكريبت داخل حقل التعليقات:
  \`<script>stealCookies();</script>\`
* **الحل البرمجي في PHP:** تنقية وتحويل الرموز الخاصة باستخدام دالة \`htmlspecialchars()\`:
  \`\`\`php
  $clean_comment = htmlspecialchars($_POST['comment'], ENT_QUOTES, 'UTF-8');
  echo $clean_comment; // يُعرض كنص عادي غير قابل للتنفيذ
  \`\`\`

---

### 3. مراحل تسليم مشروع التخرج والويب المتكامل (Capstone Pipeline)
1. **التحليل وتصميم ERD:** تحديد الجداول والعلاقات.
2. **بناء واجهة المستخدم (UI/UX):** صفحات HTML5 و CSS3 متجاوبة.
3. **التفاعل (Front-End JS):** التحقق من صحة النماذج بالـ JavaScript.
4. **الخادم (Back-End PHP & MySQL):** تنفيذ عمليات CRUD وحماية الجلسات.
5. **الفحص والأمان:** تنقية المدخلات وتشفير كلمات المرور.
    `,
    mainContentEn: `
### 1. SQL Injection Prevention
* Always use Prepared Statements ($conn->prepare & bind_param).

### 2. Cross-Site Scripting (XSS) Prevention
* Sanitize user input using htmlspecialchars($input, ENT_QUOTES, 'UTF-8').

### 3. Capstone Project Lifecycle
* Analysis & ERD ➔ Responsive UI ➔ Client Validation ➔ PHP/MySQL CRUD ➔ Security Auditing.
    `,

    diagramType: 'security_pipeline_diagram',
    diagramData: {
      type: 'defense_layers',
      title: 'طبقات الحماية والأمن السيبراني في تطبيقات الويب المتكاملة',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="30" y="30" width="340" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="50" y="52" fill="#38bdf8" font-size="11" font-weight="bold">1. تشفير الاتصال: HTTPS & SSL/TLS (منفذ 443)</text>
        <rect x="30" y="75" width="340" height="35" rx="6" fill="#1e293b" stroke="#34d399" stroke-width="2" />
        <text x="50" y="97" fill="#34d399" font-size="11" font-weight="bold">2. حماية المدخلات: htmlspecialchars لمنع XSS</text>
        <rect x="30" y="120" width="340" height="35" rx="6" fill="#1e293b" stroke="#fbbf24" stroke-width="2" />
        <text x="50" y="142" fill="#fbbf24" font-size="11" font-weight="bold">3. حماية قاعدة البيانات: Prepared Statements لمنع SQLi</text>
        <rect x="30" y="165" width="340" height="30" rx="6" fill="#064e3b" />
        <text x="90" y="185" fill="#a7f3d0" font-size="11" font-weight="bold">بيانات آمنة ومحمية بالكامل 🔒</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: كتابة كود آمن لإضافة تعليق مستخدم دون التعرض لـ XSS',
        titleEn: 'Example: Secure Comment Posting Sanitization Script',
        problemAr: 'اكتب كود PHP يستقبل تعليق مستخدم من نموذج الويب ويقوم بتنقيته من أي وسوم HTML أو أكواد خبيثة قبل عرضه على الصفحة لمنع ثغرة XSS.',
        problemEn: 'Write PHP script utilizing htmlspecialchars() to sanitize comments against XSS.',
        stepsAr: [
          'نستقبل النص من مصفوفة `$_POST`.',
          'نمرر النص لدالة `htmlspecialchars($text, ENT_QUOTES, "UTF-8")`.',
          'نعرض النص المنقى بأمان داخل الصفحة.'
        ],
        stepsEn: [
          'Receive input from $_POST["comment"].',
          'Pass through htmlspecialchars($text, ENT_QUOTES, "UTF-8").',
          'Render safe escaped text to HTML output.'
        ],
        finalAnswerAr: `<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $raw_comment = $_POST['user_comment'];
    $safe_comment = htmlspecialchars($raw_comment, ENT_QUOTES, 'UTF-8');
    echo "<div class='comment-box'>" . $safe_comment . "</div>";
}
?>`,
        finalAnswerEn: 'Safe encoded HTML rendering preventing script execution.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h12cs-5',
        problemAr: 'وضح كيف تحمي "الاستعلامات المجهزة" (Prepared Statements) قواعد البيانات من هجمات حقن SQL.',
        problemEn: 'Explain how Prepared Statements protect databases from SQL Injection.',
        solutionStepsAr: [
          'تفصل الاستعلامات المجهزة هيكل كود SQL عن مدخلات المستخدم تماماً.',
          'يقوم محرك قاعدة البيانات بتحليل وترجمة كود SQL أولاً، ثم تُعامل مدخلات المستخدم كبيانات نصية بحتة (Literal Parameters) يستحيل أن يتم تنفيذها كأوامر برمجية حتى لو احتوت على رموز خبيثة.'
        ],
        finalAnswerAr: 'تفصل هيكل الاستعلام عن البيانات، فتعامل المدخلات كقيم نصية بحتة يستحيل تنفيذها كأوامر SQL.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h12cs-5',
        questionAr: 'الدالة البرمجية في لغة PHP المستخدمة لتحويل وسوم HTML الخاصة إلى نصوص غير قابلة للتنفيذ لمنع ثغرات XSS هي:',
        questionEn: 'The PHP function used to convert special HTML characters into safe text entities preventing XSS is:',
        optionsAr: ['`htmlspecialchars()`', '`strip_tags()`', '`md5()`', '`urlencode()`'],
        optionsEn: ['htmlspecialchars()', 'strip_tags()', 'md5()', 'urlencode()'],
        correctIndex: 0,
        explanationAr: 'الدالة `htmlspecialchars()` تحول الرموز الخاصة مثل `<` و `>` إلى كيانات HTML آمنة مثل `&lt;` و `&gt;`.',
        explanationEn: 'htmlspecialchars() converts special characters into safe HTML entities.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-h12-cs5',
      titleAr: 'اختبار إتقان مشروع الويب المتكامل والأمن السيبراني',
      titleEn: 'Mastery Quiz: Capstone Web & Cyber Security',
      passingScore: 80,
      questions: [
        {
          id: 'qh12-cs5-1',
          textAr: 'التقنية الأكثر فاعلية وأماناً في حماية قواعد البيانات من هجمات حقن SQL (SQL Injection) هي:',
          textEn: 'The most effective technique for securing databases against SQL Injection attacks is:',
          optionsAr: ['استخدام الاستعلامات المجهزة (Prepared Statements / Parameterized Queries)', 'إخفاء شاشة الحاسوب', 'استخدام خطوط CSS ملونة', 'إلغاء كلمات المرور'],
          optionsEn: ['Prepared Statements with parameter binding', 'Hiding physical monitor', 'Using colorful CSS fonts', 'Removing user passwords'],
          correctIndex: 0,
          conceptTestedAr: 'الحماية من حقن قواعد البيانات SQL Injection',
          conceptTestedEn: 'SQL Injection remediation standards',
          explanationAr: 'الاستعلامات المجهزة تفصل كود SQL عن البيانات وتمنع المهاجم من تغيير منطق الاستعلام.',
          explanationEn: 'Prepared statements treat user input strictly as parameters, preventing code injection.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs5-2',
          textAr: 'شهادة الأمان الرقمية SSL/TLS في مواقع الويب تضمن تحقيق:',
          textEn: 'An SSL/TLS digital security certificate on a website guarantees:',
          optionsAr: ['تشفير البيانات المنقولة بين متصفح العميل وخادم الويب عبر بروتوكول HTTPS', 'زيادة سرعة الإنترنت للضعف', 'حذف الفيروسات من هاتف المستخدم', 'تصميم واجهات بدون CSS'],
          optionsEn: ['End-to-end data encryption via HTTPS', 'Doubling internet ISP speed', 'Deleting phone viruses', 'Designing UI without CSS'],
          correctIndex: 0,
          conceptTestedAr: 'أهمية شهادات الأمان SSL/TLS وبروتوكول HTTPS',
          conceptTestedEn: 'Role of SSL/TLS in secure communications',
          explanationAr: 'شهادات SSL/TLS تشفر حركة المرور والبيانات المتبادلة بين المتصفح والخادم لمنع التنصت والتلاعب.',
          explanationEn: 'SSL/TLS certificates provide asymmetric encryption safeguarding data in transit.',
          difficulty: 'easy'
        },
        {
          id: 'qh12-cs5-3',
          textAr: 'المرحلة الأولى والأساسية في دورة حياة تطوير وبناء أي مشروع موقع ويب متكامل هي:',
          textEn: 'The initial foundational phase in any full-stack web application development lifecycle is:',
          optionsAr: ['التخطيط وتحليل متطلبات النظام وتصميم قاعدة البيانات (Planning & Design)', 'شراء أسرع جهاز حاسوب', 'طباعة كروت الدعاية', 'كتابة كود JavaScript مباشرة'],
          optionsEn: ['Requirements Planning & Database Schema Design', 'Buying fast hardware', 'Printing flyers', 'Coding JavaScript directly'],
          correctIndex: 0,
          conceptTestedAr: 'مراحل دورة حياة تطوير مشاريع الويب',
          conceptTestedEn: 'Software development lifecycle phases',
          explanationAr: 'التخطيط وتحديد متطلبات النظام ورسم مخططات ERD هو الأساس الذي تُبنى عليه كافة المراحل اللاحقة.',
          explanationEn: 'Planning, requirements analysis, and ERD data modeling form the essential foundation.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
