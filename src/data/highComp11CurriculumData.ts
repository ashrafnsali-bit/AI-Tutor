import type { Lecture } from '../types';

// ============================================================================
// HIGH SCHOOL COMPUTER SCIENCE & ICT — GRADE 11 (كمبيوتر وتكنولوجيا المعلومات ثانية ثانوي - لغات وعربي)
// Official Grade 11 / Secondary 2 National Ministry & Language School Curriculum Alignment:
// Unit 1: Interactive Web Architecture (HTML5 Elements, CSS3 Page Layouts & Responsive Design)
// Unit 2: JavaScript Client-Side Scripting (Variables, Functions, Events & DOM Manipulation)
// Unit 3: Web Forms & Form Data Validation (Input constraints, regex checks, event handling)
// Unit 4: Relational Database Fundamentals & SQL (Tables, Primary/Foreign Keys, CRUD Queries in MySQL)
// Unit 5: Server-Side PHP & Database Connectivity (PHP scripting, MySQL integration, Sessions & Web Safety)
// ============================================================================

export const HIGH_COMP_G11_LECTURES: Lecture[] = [
  // ── LECTURE 1: WEB ARCHITECTURE, HTML5 & CSS3 ──
  {
    id: 'h11-cs-1',
    order: 1,
    titleAr: 'المحاضرة 1: هيكلة صفحات الويب وتصميم المواقع الحديثة بلغة HTML5 وتنسيقات CSS3',
    titleEn: 'Lecture 1: Web Architecture, HTML5 Semantic Elements & CSS3 Modern Web Layouts',
    subtitleAr: 'مفهوم مواقع الويب الثابتة والديناميكية، الوسوم الدلالية في HTML5 (header, nav, section, article, footer)، تنسيقات CSS3، والنموذج الصندوقي Box Model وتصميم موقع ويب متكامل',
    subtitleEn: 'Master static vs dynamic websites, HTML5 semantic structure tags, CSS3 selectors, box model geometry, and building professional responsive multi-page web layouts.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Computer & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: تصميم وتطوير صفحات الويب التفاعلية',
    unitTitleEn: 'Unit 1: Interactive Web Design & Development',
    lessonNumberAr: 'الدرس 1: أساسيات تصميم الويب بلغات HTML5 و CSS3',
    lessonNumberEn: 'Lesson 1: Web Design with HTML5 & CSS3',

    keyConceptsAr: [
      'الفرق بين مواقع الويب الثابتة (Static Websites) والمواقع الديناميكية التفاعلية (Dynamic Websites)',
      'الوسوم الدلالية الحديثة في HTML5: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`',
      'إدراج الوسائط المتعددة بالويب: وسوم الفيديو `<video>` والصوت `<audio>` والجداول والقوائم',
      'تنسيق صفحات الويب بواسطة CSS3: المحددات (Class, ID, Elements)، الألوان والخطوط، والنموذج الصندوقي (Margin, Border, Padding, Content)'
    ],
    keyConceptsEn: [
      'Differences between static web pages and dynamic database-driven web applications',
      'HTML5 semantic structure elements: <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>',
      'HTML5 native multimedia integration: <video>, <audio>, tables, and hyperlinks',
      'CSS3 styling essentials: selectors (.class, #id), font typography, and CSS Box Model geometry (content, padding, border, margin)'
    ],

    conceptMapAr: [
      'مواقع الويب ➔ ثابتة (HTML/CSS فقط) / ديناميكية (تتصل بقواعد بيانات وسيرفر)',
      'هيكل الصفحة ➔ وسوم دلالية `<header>` + `<nav>` + `<main>` + `<footer>`',
      'المظهر الجمالي ➔ ملف CSS خارجي ➔ Box Model (محتوى + حشو + حدود + هوامش)'
    ],
    conceptMapEn: [
      'Web Types ➔ Static (HTML/CSS only) / Dynamic (Server + Database)',
      'Page Structure ➔ Semantic Tags <header> + <nav> + <main> + <footer>',
      'Styling ➔ External CSS ➔ Box Model (Content + Padding + Border + Margin)'
    ],

    learningOutcomesAr: [
      'المقارنة بين صفحات الويب الساكنة والتفاعلية وتحديد متطلبات استضافة المواقع.',
      'بناء هيكل صفحة ويب كامل باستخدام وسوم HTML5 الدلالية وتضمين الصوت والفيديو والصور.',
      'تطبيق قواعد CSS3 والنموذج الصندوقي لتنسيق الصفحة وضبط الألوان والمسافات والحدود.'
    ],
    learningOutcomesEn: [
      'Differentiate static HTML pages from dynamic server-backed web applications.',
      'Construct well-structured web pages using HTML5 semantic elements and embedded media.',
      'Apply CSS3 properties and the Box Model to style responsive web interfaces.'
    ],

    vocabulary: [
      { termAr: 'الوسوم الدلالية', termEn: 'Semantic HTML Tags', definitionAr: 'وسوم برمجية تصف بوضوح نوع ومحتوى الجزء الموجود بداخلها للمتصفح ومحركات البحث وقارئات الشاشة كـ `<header>` و `<article>`.' },
      { termAr: 'النموذج الصندوقي', termEn: 'CSS Box Model', definitionAr: 'نموذج يحيط بكل عنصر في صفحة الويب ويتكون من أربع طبقات: المحتوى (Content)، الحشو الداخلي (Padding)، الحد (Border)، والهامش الخارجي (Margin).' }
    ],

    warmupHookAr: 'عندما تتصفح موقعاً إخبارياً أو منصة تعليمية، كيف يفهم متصفح الويب (مثل Chrome أو Safari) أين يضع شعار الموقع، وشريط القوائم، والمقال الرئيسي، وحقوق النشر في أسفل الصفحة؟ بفضل لغة HTML5 ووسومها الدلالية التي تقسم الصفحة معمارياً إلى أجزاء دقيقة ومنظمة!',
    warmupHookEn: 'When visiting modern news portals, how do browsers organize headers, navigation menus, article bodies, and footers seamlessly? Through HTML5 semantic structural tags establishing clean architectural hierarchy.',

    mainContentAr: `
### 1. أنواع مواقع الويب (Static vs Dynamic Web Pages)
* **صفحات الويب الساكنة (Static Web Pages):**
  * صفحات يُعرض محتواها لجميع الزوار بنفس الشكل دون أي تفاعل مع قواعد البيانات.
  * تُكتب بلغات التصميم والتنسيق: **HTML** و **CSS**.
* **صفحات الويب الديناميكية (Dynamic Web Pages):**
  * صفحات تفاعلية يتغير محتواها تلقائياً بناءً على مدخلات المستخدم واستعلامات قواعد البيانات (مثل منصات التواصل ومواقع التسوق).
  * تُبنى بلغات البرمجة من جانب العميل (**JavaScript**) ولغات الخادم (**PHP, Python, Node.js**) مع قواعد البيانات (**MySQL**).

---

### 2. الوسوم الدلالية في HTML5 (Semantic Elements)
بدلاً من استخدام الوسم العام \`<div>\` في كل مكان، وفرت HTML5 وسوماً معمارية واضحة:
* \`<header>\`: رأس الصفحة (الشعار والعنوان الترحيبي).
* \`<nav>\`: شريط روابط التنقل الرئيسية.
* \`<main>\`: المحتوى الفريد والأساسي للصفحة.
* \`<section>\`: قسم عام في الصفحة يجمع مواضيع متقاربة.
* \`<article>\`: محتوى مستقل بذاته (مثل مقال أو خبر أو تدوينة).
* \`<aside>\`: شريط جانبي (إعلانات أو روابط ذات صلة).
* \`<footer>\`: تذييل الصفحة (حقوق الملكية وبيانات الاتصال).

---

### 3. النموذج الصندوقي في CSS3 (The Box Model)
يتكون أي عنصر في صفحة الويب من 4 مناطق متداخلة من الداخل للخارج:
1. **المحتوى (Content):** النص أو الصورة المعروضة.
2. **الحشو الداخلي (Padding):** المساحة الشفافة بين المحتوى وحدود العنصر.
3. **الحد الخارجي (Border):** الإطار المحيط بالعنصر وحشوه الداخلي.
4. **الهامش الخارجي (Margin):** المساحة الفاصلة بين حدود العنصر والعناصر المجاورة له.
    `,
    mainContentEn: `
### 1. Static vs Dynamic Web Pages
* Static: Fixed presentation via HTML & CSS.
* Dynamic: Interactive data-driven interfaces powered by JavaScript, PHP, and SQL databases.

### 2. HTML5 Semantic Elements
* <header>, <nav>, <main>, <section>, <article>, <aside>, <footer>

### 3. CSS Box Model
* Content ➔ Padding ➔ Border ➔ Margin.
    `,

    diagramType: 'box_model_diagram',
    diagramData: {
      type: 'css_box_model',
      title: 'طبقات النموذج الصندوقي في CSS3 (Margin, Border, Padding, Content)',
      svgSnippet: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="20" width="360" height="180" fill="#fef3c7" stroke="#f59e0b" stroke-width="2" stroke-dasharray="4" />
        <text x="30" y="40" fill="#b45309" font-size="12" font-weight="bold">Margin (الهامش الخارجي)</text>
        <rect x="60" y="50" width="280" height="120" fill="#e0e7ff" stroke="#4f46e5" stroke-width="3" />
        <text x="70" y="70" fill="#3730a3" font-size="12" font-weight="bold">Border (الحد الخارجي)</text>
        <rect x="90" y="75" width="220" height="70" fill="#d1fae5" stroke="#10b981" stroke-width="2" stroke-dasharray="2" />
        <text x="100" y="95" fill="#047857" font-size="11" font-weight="bold">Padding (الحشو)</text>
        <rect x="130" y="100" width="140" height="30" fill="#38bdf8" />
        <text x="160" y="120" fill="#fff" font-size="12" font-weight="bold">Content (المحتوى)</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: حساب العرض الإجمالي لعنصر في صفحة الويب باستخدام Box Model',
        titleEn: 'Example: Total Element Width Calculation via Box Model',
        problemAr: 'إذا كان لديك عنصر في CSS محدد الخصائص الآتية: width: 300px; padding: 20px; border: 5px solid black; margin: 15px; احسب العرض الإجمالي الذي يشغله العنصر على الشاشة.',
        problemEn: 'An element has width: 300px, padding: 20px, border: 5px, margin: 15px. Calculate total occupied horizontal width.',
        stepsAr: [
          'العرض الإجمالي = عرض المحتوى + الحشو من الجهتين (يمين ويسار) + الحد من الجهتين + الهامش من الجهتين.',
          'العرض الداخلي مع الحشو والحد: $300 + (20 \\times 2) + (5 \\times 2) = 300 + 40 + 10 = 350\\text{ px}$.',
          'العرض الكلي مع الهامش الخارجي: $350 + (15 \\times 2) = 350 + 30 = 380\\text{ px}$.'
        ],
        stepsEn: [
          'Total Width = Content + (Padding * 2) + (Border * 2) + (Margin * 2).',
          'Inner element width = 300 + 40 + 10 = 350px.',
          'Total occupied space = 350 + 30 = 380px.'
        ],
        finalAnswerAr: 'العرض الكلي الذي يشغله العنصر على الشاشة هو 380 بكسل.',
        finalAnswerEn: 'Total occupied horizontal width is 380px.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11cs-1',
        problemAr: 'اكتب كود HTML5 كامل لإنشاء صفحة ويب تحتوي على ترويسة بها عنوان الموقع وشريط تنقل به رابطان (الرئيسية وتواصل معنا).',
        problemEn: 'Write complete HTML5 semantic markup for a web header containing site title and 2 navigation links.',
        solutionStepsAr: [
          'نستخدم الوسم المعماري `<header>` لوضع رأس الصفحة.',
          'نضع العنوان داخل وسم `<h1>`.',
          'نستخدم الوسم المعماري `<nav>` وبداخله قائمة غير مرتبة `<ul>` تحتوي على الروابط `<a>`.'
        ],
        finalAnswerAr: `<header>
  <h1>منصة مدرستي</h1>
  <nav>
    <ul>
      <li><a href="index.html">الرئيسية</a></li>
      <li><a href="contact.html">تواصل معنا</a></li>
    </ul>
  </nav>
</header>`
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11cs-1',
        questionAr: 'الوسم الدلالي المناسب في HTML5 لإنشاء شريط روابط التنقل في الموقع هو:',
        questionEn: 'The appropriate HTML5 semantic tag for site navigation links is:',
        optionsAr: ['`<nav>`', '`<header>`', '`<section>`', '`<aside>`'],
        optionsEn: ['<nav>', '<header>', '<section>', '<aside>'],
        correctIndex: 0,
        explanationAr: 'الوسم `<nav>` مخصص حصرياً لروابط التنقل الرئيسية وقوائم الموقع.',
        explanationEn: 'The <nav> element is dedicated specifically to navigation link bars.'
      }
    ],

    assessment: {
      id: 'quiz-h11-cs1',
      titleAr: 'اختبار إتقان تصميم الويب بـ HTML5 و CSS3',
      titleEn: 'Mastery Quiz: Web Architecture HTML5 & CSS3',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-cs1-1',
          textAr: 'صفحات الويب التي تتغير بياناتها ومحتوياتها وفقاً لمدخلات المستخدم وتتفاعل مع قواعد البيانات تُسمى:',
          textEn: 'Web pages whose content adapts to user input and interacts with backend databases are called:',
          optionsAr: ['صفحات ويب ديناميكية (Dynamic Web Pages)', 'صفحات ويب ساكنة (Static Web Pages)', 'صفحات نصية بسيطة', 'صفحات أرشيفية'],
          optionsEn: ['Dynamic Web Pages', 'Static Web Pages', 'Plain Text Pages', 'Archive Pages'],
          correctIndex: 0,
          conceptTestedAr: 'الفرق بين المواقع الساكنة والديناميكية',
          conceptTestedEn: 'Static vs Dynamic Web Pages',
          explanationAr: 'الصفحات الديناميكية تتصل بقواعد بيانات وسيرفر وتغير محتواها التفاعلي لكل مستخدم.',
          explanationEn: 'Dynamic pages generate tailored content by executing server logic and querying databases.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs1-2',
          textAr: 'في النموذج الصندوقي (CSS Box Model)، المساحة الشفافة الفاصلة بين محتوى العنصر وحدوده الداخلية تُسمى:',
          textEn: 'In the CSS Box Model, the transparent inner space between content and its border is called:',
          optionsAr: ['Padding (الحشو الداخلي)', 'Margin (الهامش الخارجي)', 'Border (الحد)', 'Outline'],
          optionsEn: ['Padding', 'Margin', 'Border', 'Outline'],
          correctIndex: 0,
          conceptTestedAr: 'عناصر النموذج الصندوقي في CSS',
          conceptTestedEn: 'CSS Box Model properties',
          explanationAr: 'الـ Padding هو الحشو الداخلي بين النص/المحتوى والإطار، بينما الـ Margin هو الهامش الخارجي بين العنصر وما حوله.',
          explanationEn: 'Padding provides inner spacing between content and the border.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs1-3',
          textAr: 'الوسم الدلالي المخصص في HTML5 لتذييل الصفحة ووضع حقوق الملكية الفكرية وبيانات التواصل هو:',
          textEn: 'The HTML5 semantic element designated for copyright info and page contact footers is:',
          optionsAr: ['`<footer>`', '`<header>`', '`<bottom>`', '`<aside>`'],
          optionsEn: ['<footer>', '<header>', '<bottom>', '<aside>'],
          correctIndex: 0,
          conceptTestedAr: 'الوسوم الدلالية في HTML5',
          conceptTestedEn: 'HTML5 footer semantic tag',
          explanationAr: 'الوسم `<footer>` يمثل تذييل الصفحة أو تذييل المقال ويحتوي على بيانات الكاتب وحقوق النشر.',
          explanationEn: 'The <footer> tag represents footer information, author details, and copyrights.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 2: JAVASCRIPT & DOM MANIPULATION ──
  {
    id: 'h11-cs-2',
    order: 2,
    titleAr: 'المحاضرة 2: البرمجة من جانب العميل بلغة JavaScript، الأحداث، والتحكم في عناصر DOM',
    titleEn: 'Lecture 2: Client-Side Scripting with JavaScript: Variables, Functions, Events & DOM Manipulation',
    subtitleAr: 'بنية لغة JavaScript، المتغيرات والدوال، التعامل مع الأحداث التفاعلية (onclick, onmouseover, onchange)، وتعديل محتوى وتنسيقات عناصر الصفحة عبر Document Object Model (DOM)',
    subtitleEn: 'Master JavaScript core syntax, variables, conditional statements, interactive browser events, and dynamic HTML/CSS DOM manipulation.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Computer & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: البرمجة التفاعلية بلغة JavaScript',
    unitTitleEn: 'Unit 1: Interactive Programming with JavaScript',
    lessonNumberAr: 'الدرس 2: لغة JavaScript ومعالجة الأحداث والـ DOM',
    lessonNumberEn: 'Lesson 2: JavaScript, Events & DOM',

    keyConceptsAr: [
      'مفهوم البرمجة من جانب العميل (Client-Side Scripting) وتضمين وسوم `<script>` في صفحة الويب',
      'المتغيرات (`let`, `const`, `var`)، أنواع البيانات (String, Number, Boolean)، والدوال (`function`)',
      'الأحداث التفاعلية (Events): النقر `onclick`، المرور بالفأرة `onmouseover`، التحميل `onload`، وتغيير القيمة `onchange`',
      'شجرة كائنات المستند (DOM - Document Object Model) والوصول للعناصر: `document.getElementById()`, `innerText`, `innerHTML`, `style`'
    ],
    keyConceptsEn: [
      'Client-side execution model and embedding <script> tags within HTML',
      'Variables (let, const), data types (string, number, boolean), and custom functions',
      'Interactive Browser Events: onclick, onmouseover, onmouseout, onload, and onchange',
      'DOM Tree traversal and modification: document.getElementById(), innerText, innerHTML, and style attributes'
    ],

    conceptMapAr: [
      'جافاسكريبت ➔ تعمل داخل متصفح المستخدم (Client-Side) بدون إعادة تحميل الصفحة',
      'الحدث (Event) ➔ نقر زر `onclick` ➔ استدعاء دالة `myFunction()`',
      'التحكم في الـ DOM ➔ `document.getElementById("demo").innerHTML = "مرحباً!"`'
    ],
    conceptMapEn: [
      'JavaScript ➔ Executes in user browser without full page reload',
      'Event ➔ User clicks button (onclick) ➔ Calls JavaScript function',
      'DOM Action ➔ document.getElementById("demo").innerHTML = "Hello!"'
    ],

    learningOutcomesAr: [
      'كتابة دوال جافاسكريبت مخصصة للتحكم في سلوك واستجابة صفحات الويب.',
      'ربط العناصر التفاعلية في HTML بأحداث جافاسكريبت مثل النقر وتغيير القيم.',
      'تعديل نصوص وتنسيقات عناصر صفحة الويب ديناميكياً باستخدام كائن `document`.'
    ],
    learningOutcomesEn: [
      'Write modular JavaScript functions to implement interactive client-side behaviors.',
      'Bind HTML UI elements to JavaScript events like onclick, onchange, and onsubmit.',
      'Dynamically alter HTML element content and CSS styles using the Document Object Model.'
    ],

    vocabulary: [
      { termAr: 'شجرة كائنات المستند (DOM)', termEn: 'Document Object Model (DOM)', definitionAr: 'بنية شجرية يمثل بها المتصفح عناصر صفحة الويب ككائنات برمجية يمكن لجافاسكريبت قراءتها وتعديلها وإضافتها ديناميكياً.' },
      { termAr: 'معالج الحدث', termEn: 'Event Handler', definitionAr: 'كود أو دالة برمجية يتم تنفيذها تلقائياً عند وقوع حدث معين من المستخدم كنقر الفأرة أو الضغط على زر في لوحة المفاتيح.' }
    ],

    warmupHookAr: 'عندما تضغط على زر "الوضع الليلي 🌙" في أي موقع ويب، كيف تتحول ألوان الصفحة بالكامل من الأبيض إلى الأسود فوراً في رمشة عين دون الحاجة لإعادة تحميل الصفحة؟ بفضل لغة JavaScript التي تقوم بالوصول لشجرة عناصر الصفحة (DOM) وتغيير خصائص التنسيق في أجزاء من الثانية!',
    warmupHookEn: 'When toggling dark mode on a website, how does the interface switch colors instantaneously without refreshing the page? JavaScript modifies CSS styles and HTML classes in real-time through the DOM.',

    mainContentAr: `
### 1. أساسيات لغة JavaScript (Variables & Functions)
* **تعريف المتغيرات:**
  * \`let x = 10;\` (متغير يمكن تغيير قيمته).
  * \`const pi = 3.14;\` (ثابت لا تتغير قيمته).
* **تعريف الدوال:**
  \`\`\`javascript
  function sayWelcome(name) {
    alert("أهلاً بك يا " + name + " في منصة التعلم الذكي!");
  }
  \`\`\`

---

### 2. معالجة الأحداث (Event Handling)
* **أهم الأحداث الشائعة:**
  * \`onclick\`: عند الضغط بالفأرة على العنصر.
  * \`onmouseover\` / \`onmouseout\`: عند تحريك مؤشر الفأرة فوق العنصر أو الابتعاد عنه.
  * \`onchange\`: عند تغيير قيمة حقل إدخال أو قائمة منسدلة.
  * \`onsubmit\`: عند إرسال النموذج.

---

### 3. التحكم في شجرة عناصر الصفحة (DOM Manipulation)
* **الوصول لعنصر بواسطة المعرف (ID):**
  \`let title = document.getElementById("main-heading");\`
* **تغيير محتوى النص الداخلي:**
  \`title.innerText = "تم تحديث البيانات بنجاح!";\`
* **تغيير كود HTML الداخلي:**
  \`title.innerHTML = "<span style='color:green;'>مكتمل ✓</span>";\`
* **تغيير التنسيقات (CSS):**
  \`title.style.color = "#38bdf8";\`
  \`title.style.fontSize = "24px";\`
    `,
    mainContentEn: `
### 1. Variables & Functions
* let, const, function declarations.

### 2. Interactive Events
* onclick, onmouseover, onchange, onsubmit.

### 3. DOM Manipulation
* document.getElementById("id")
* element.innerText, element.innerHTML, element.style.property
    `,

    diagramType: 'dom_tree_diagram',
    diagramData: {
      type: 'dom_hierarchy',
      title: 'شجرة كائنات المستند (DOM Tree Hierarchy)',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="150" y="10" width="100" height="30" rx="6" fill="#38bdf8" />
        <text x="175" y="30" fill="#fff" font-size="12" font-weight="bold">document</text>
        <line x1="200" y1="40" x2="200" y2="60" stroke="#64748b" stroke-width="2" />
        <rect x="150" y="60" width="100" height="30" rx="6" fill="#0284c7" />
        <text x="180" y="80" fill="#fff" font-size="12">&lt;html&gt;</text>
        <line x1="160" y1="90" x2="100" y2="120" stroke="#64748b" stroke-width="2" />
        <line x1="240" y1="90" x2="300" y2="120" stroke="#64748b" stroke-width="2" />
        <rect x="50" y="120" width="100" height="30" rx="6" fill="#0369a1" />
        <text x="80" y="140" fill="#fff" font-size="12">&lt;head&gt;</text>
        <rect x="250" y="120" width="100" height="30" rx="6" fill="#0369a1" />
        <text x="280" y="140" fill="#fff" font-size="12">&lt;body&gt;</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: تغيير لون وخلفية نص عند النقر على زر',
        titleEn: 'Example: Dynamic Text Color Change on Button Click',
        problemAr: 'اكتب كود HTML و JavaScript يغير لون فقرة نصية ذات المعرف id="text" إلى اللون الأخضر عند الضغط على زر.',
        problemEn: 'Write HTML and JavaScript to change the color of a paragraph with id="text" to green on button click.',
        stepsAr: [
          'ننشئ دالة جافاسكريبت تسمى `changeColor()`.',
          'داخل الدالة نصل للعنصر: `let elem = document.getElementById("text");`.',
          'نغير خاصية اللون: `elem.style.color = "green";`.',
          'نربط الزر بالحدث: `<button onclick="changeColor()">تغيير اللون</button>`.'
        ],
        stepsEn: [
          'Declare JavaScript function changeColor().',
          'Access element: let elem = document.getElementById("text");',
          'Set style: elem.style.color = "green";',
          'Attach to button: <button onclick="changeColor()">Change Color</button>'
        ],
        finalAnswerAr: `<p id="text">نص تجريبي</p>
<button onclick="changeColor()">تغيير اللون</button>
<script>
  function changeColor() {
    document.getElementById("text").style.color = "green";
  }
</script>`,
        finalAnswerEn: 'Code implemented with onclick handler modifying element.style.color.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11cs-2',
        problemAr: 'ما هي الطريقة الصحيحة لعرض رسالة تنبيهية للمستخدم في المتصفح باستخدام JavaScript؟',
        problemEn: 'What is the correct JavaScript method to display a popup alert message?',
        solutionStepsAr: [
          'نستخدم الدالة المدمجة `alert()` ونمرر لها النص المطلوب بين علامتي تنصيص.',
          'مثال: `alert("مرحباً بك في موقعنا!");`.'
        ],
        finalAnswerAr: 'alert("نص الرسالة");'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11cs-2',
        questionAr: 'الأمر المستخدم للوصول لعنصر في صفحة HTML باستخدام المعرف (ID) في لغة JavaScript هو:',
        questionEn: 'The JavaScript method used to access an HTML element by its ID is:',
        optionsAr: ['`document.getElementById("id")`', '`document.getElement("id")`', '`document.select("id")`', '`window.find("id")`'],
        optionsEn: ['document.getElementById("id")', 'document.getElement("id")', 'document.select("id")', 'window.find("id")'],
        correctIndex: 0,
        explanationAr: 'الدالة القياسية في الـ DOM للوصول لعنصر بالمعرف هي `document.getElementById()`.',
        explanationEn: 'document.getElementById() is the standard DOM method to select an element by unique ID.'
      }
    ],

    assessment: {
      id: 'quiz-h11-cs2',
      titleAr: 'اختبار إتقان لغة JavaScript والـ DOM',
      titleEn: 'Mastery Quiz: JavaScript & DOM',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-cs2-1',
          textAr: 'الحدث الذي يتم إطلاقه في JavaScript عند قيام المستخدم بالنقر على زر الفأرة فوق عنصر هو:',
          textEn: 'The JavaScript event triggered when a user clicks an element is:',
          optionsAr: ['`onclick`', '`onchange`', '`onload`', '`onhover`'],
          optionsEn: ['onclick', 'onchange', 'onload', 'onhover'],
          correctIndex: 0,
          conceptTestedAr: 'أحداث الفأرة في جافاسكريبت',
          conceptTestedEn: 'Mouse events in JavaScript',
          explanationAr: 'الحدث `onclick` يتم استدعاؤه فور نقر المستخدم على العنصر.',
          explanationEn: 'The onclick event handler fires when an element is clicked.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs2-2',
          textAr: 'لتغيير النص المكتوب داخل عنصر HTML باستخدام JavaScript، نستخدم الخاصية:',
          textEn: 'To modify the text content inside an HTML element using JavaScript, we use:',
          optionsAr: ['`innerText` أو `textContent`', '`textStyle`', '`value`', '`font`'],
          optionsEn: ['innerText or textContent', 'textStyle', 'value', 'font'],
          correctIndex: 0,
          conceptTestedAr: 'تعديل محتوى عناصر الـ DOM',
          conceptTestedEn: 'DOM text modification properties',
          explanationAr: 'الخاصية `innerText` تعدل النص المعروض داخل العنصر مباشرة.',
          explanationEn: 'innerText sets or returns the rendered text content of a node.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs2-3',
          textAr: 'تُنفذ أكواد لغة JavaScript بشكل أساسي على:',
          textEn: 'JavaScript scripts primarily execute on the:',
          optionsAr: ['جهاز العميل / متصفح المستخدم (Client-Side)', 'سيرفر الويب فقط', 'خادم قاعدة البيانات', 'القرص الصلب للشركة'],
          optionsEn: ['Client-Side (User\'s Browser)', 'Web Server only', 'Database Server', 'Storage Array'],
          correctIndex: 0,
          conceptTestedAr: 'بيئة تنفيذ جافاسكريبت الأساسية',
          conceptTestedEn: 'Client-side runtime environment',
          explanationAr: 'جافاسكريبت لغة من جانب العميل تُترجم وتُنفذ مباشرة داخل متصفح الإنترنت الخاص بالمستخدم.',
          explanationEn: 'JavaScript runs locally within the client browser engine.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 3: WEB FORMS & DATA VALIDATION ──
  {
    id: 'h11-cs-3',
    order: 3,
    titleAr: 'المحاضرة 3: نماذج إدخال البيانات (Forms) والتحقق من صحتها بلغة JavaScript (Data Validation)',
    titleEn: 'Lecture 3: HTML Forms, Input Types & Client-Side Data Validation with JavaScript',
    subtitleAr: 'عناصر النماذج `<form>` وحقول الإدخال، التحقق من الحقول الإجبارية (Required)، مطابقة كلمات المرور، والتحقق من صحة البريد الإلكتروني والأرقام قبل الإرسال للسيرفر',
    subtitleEn: 'Master HTML form inputs, client-side input validation, checking empty fields, verifying password confirmation, and regex email/phone validation before server submission.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Computer & ICT',
    termAr: 'الفصل الدراسي الأول',
    termEn: 'Term 1 Official Curriculum',
    unitTitleAr: 'الوحدة الأولى: نماذج الويب والتحقق من البيانات',
    unitTitleEn: 'Unit 1: Web Forms & Data Validation',
    lessonNumberAr: 'الدرس 3: تصميم النماذج والتحقق من صحة المدخلات',
    lessonNumberEn: 'Lesson 3: Form Design & Data Validation',

    keyConceptsAr: [
      'عناصر النموذج في HTML: وسم `<form>`, `action`, `method` (GET vs POST), وحقول الإدخال `<input>`',
      'أنواع حقول الإدخال: `text`, `password`, `email`, `number`, `radio`, `checkbox`, `submit`, `reset`',
      'أهمية التحقق من صحة البيانات (Data Validation) من جانب العميل لتقليل الحمل على الخادم وتحسين تجربة المستخدم',
      'دوال التحقق في JavaScript: التأكد من عدم ترك الحقل فارغاً، فحص طول النص (Length)، مطابقة كلمة المرور وتأكيدها، وفحص الأرقام باستخدام `isNaN()`'
    ],
    keyConceptsEn: [
      'HTML Form architecture: <form> tag, action, method (GET vs POST), and <input> elements',
      'Input types: text, password, email, number, radio, checkbox, submit, reset',
      'Significance of client-side validation for reducing server bandwidth load and preventing invalid submissions',
      'JavaScript Validation algorithms: empty field check, length constraint, password matching verification, and numeric check using isNaN()'
    ],

    conceptMapAr: [
      'النموذج `<form>` ➔ المستخدم يدخل البيانات ➔ يضغط زر الإرسال `Submit`',
      'قبل الإرسال `onsubmit` ➔ استدعاء دالة `validateForm()`',
      'إذا كانت البيانات صحيحة ➔ ترجع `true` ويتم الإرسال للسيرفر',
      'إذا وُجد خطأ ➔ ترجع `false` وتظهر رسالة تنبيهية وتمنع إرسال البيانات الخاطئة'
    ],
    conceptMapEn: [
      'User fills form ➔ Clicks Submit ➔ Triggers onsubmit event',
      'onsubmit handler calls validateForm()',
      'If Valid ➔ Returns true ➔ Form data posts to server',
      'If Invalid ➔ Returns false ➔ Alerts user & prevents submission'
    ],

    learningOutcomesAr: [
      'تصميم نماذج تسجيل مستخدمين متكاملة في HTML باستخدام حقول الإدخال المتنوعة.',
      'كتابة دوال جافاسكريبت للتحقق من عدم ترك الحقول فارغة ومطابقة كلمات المرور.',
      'استخدام خاصية `onsubmit="return validateForm()"` لمنع إرسال البيانات غير المطابقة للمعايير.'
    ],
    learningOutcomesEn: [
      'Design complete user registration forms utilizing diverse HTML input types.',
      'Write JavaScript validation routines ensuring non-empty inputs and password match.',
      'Attach onsubmit handlers to safely prevent submission of invalid data.'
    ],

    vocabulary: [
      { termAr: 'التحقق من صحة البيانات', termEn: 'Data Validation', definitionAr: 'عملية فحص واختبار البيانات التي يدخلها المستخدم للتأكد من مطابقتها للشروط والمعايير المطلوبة قبل إرسالها أو تخزينها.' },
      { termAr: 'طريقة الإرسال POST', termEn: 'HTTP POST Method', definitionAr: 'طريقة إرسال آمنة ترسل بيانات النموذج داخل جسم الطلب (Request Body) دون إظهارها في شريط العنوان (URL)، وتُستخدم لكلمات المرور والبيانات الحساسة.' }
    ],

    warmupHookAr: 'عند إنشاء حساب جديد على موقع ما، إذا نسيت كتابة البريد الإلكتروني أو كتبت كلمة مرور أقل من 8 أحرف، يظهر لك حقل أحمر على الفور يطلب منك تعديل الخطأ دون أن تغادر الصفحة. كيف يحدث هذا الفحص الفوري؟ بفضل تقنية التحقق من صحة البيانات (Client-Side Validation) عبر لغة JavaScript!',
    warmupHookEn: 'When signing up on modern apps, if you type mismatched passwords or miss required fields, instant warning alerts highlight errors in real-time. This is client-side data validation executing in the browser.',

    mainContentAr: `
### 1. عناصر ونماذج الويب (HTML Forms Architecture)
* **وسم النموذج:**
  \`\`\`html
  <form action="save.php" method="POST" onsubmit="return validateForm()">
    <label>اسم المستخدم:</label>
    <input type="text" id="username" name="username">
    
    <label>كلمة المرور:</label>
    <input type="password" id="password" name="password">
    
    <label>تأكيد كلمة المرور:</label>
    <input type="password" id="confirm_password" name="confirm_password">
    
    <input type="submit" value="تسجيل">
  </form>
  \`\`\`

---

### 2. دوال التحقق من البيانات بلغة JavaScript (Validation Rules)
1. **التحقق من عدم ترك الحقل فارغاً:**
   \`\`\`javascript
   let user = document.getElementById("username").value;
   if (user.trim() === "") {
     alert("خطأ: يرجى إدخال اسم المستخدم وعدم تركه فارغاً!");
     return false; // يمنع الإرسال
   }
   \`\`\`
2. **التحقق من طول كلمة المرور:**
   \`\`\`javascript
   let pass = document.getElementById("password").value;
   if (pass.length < 8) {
     alert("خطأ: كلمة المرور يجب ألا تقل عن 8 أحرف وأرقام!");
     return false;
   }
   \`\`\`
3. **التحقق من مطابقة كلمتي المرور:**
   \`\`\`javascript
   let confirm = document.getElementById("confirm_password").value;
   if (pass !== confirm) {
     alert("خطأ: كلمتا المرور غير متطابقتين!");
     return false;
   }
   \`\`\`
4. **التحقق من أن المدخل أرقام فقط:**
   \`\`\`javascript
   if (isNaN(document.getElementById("age").value)) {
     alert("يرجى إدخال أرقام فقط في حقل العمر!");
     return false;
   }
   \`\`\`
    `,
    mainContentEn: `
### 1. HTML Form Tags & Methods
* <form action="..." method="POST" onsubmit="return validateForm()">
* GET (visible in URL) vs POST (secure in request body).

### 2. Key Validation Rules
* Empty field check: value.trim() === ""
* Minimum length check: value.length < 8
* Password match verification: pass !== confirmPass
* Numeric validation: isNaN(value)
    `,

    diagramType: 'validation_flowchart',
    diagramData: {
      type: 'form_validation_flow',
      title: 'مخطط سير عمليات التحقق من صحة بيانات النموذج قبل الإرسال',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="80" width="80" height="40" rx="6" fill="#38bdf8" />
        <text x="30" y="105" fill="#fff" font-size="11">إدخال النموذج</text>
        <line x1="100" y1="100" x2="140" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arrow)" />
        <polygon points="190,70 240,100 190,130 140,100" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
        <text x="170" y="105" fill="#0f172a" font-size="11" font-weight="bold">فحص الشروط؟</text>
        <line x1="190" y1="70" x2="190" y2="30" stroke="#f43f5e" stroke-width="2" />
        <rect x="150" y="10" width="80" height="30" rx="4" fill="#f43f5e" />
        <text x="155" y="30" fill="#fff" font-size="11">خطأ: منع الإرسال</text>
        <line x1="240" y1="100" x2="300" y2="100" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" />
        <rect x="300" y="80" width="80" height="40" rx="6" fill="#10b981" />
        <text x="310" y="105" fill="#fff" font-size="11">إرسال للخادم ✓</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: كتابة كود كامل للتحقق من تطابق كلمتي المرور في استمارة تسجيل',
        titleEn: 'Example: Complete Password Confirmation Validation Function',
        problemAr: 'اكتب دالة JavaScript باسم `checkPassword()` تتحقق من أن حقل كلمة المرور وحقل تأكيد كلمة المرور متطابقان، وتعرض تنبيهاً وتمنع الإرسال إذا اختلفا.',
        problemEn: 'Write a JavaScript function checkPassword() validating password matching.',
        stepsAr: [
          'نستخرج قيمة الحقل الأول: `let p1 = document.getElementById("pass1").value;`.',
          'نستخرج قيمة الحقل الثاني: `let p2 = document.getElementById("pass2").value;`.',
          'نقارن بينهما بشرط `if (p1 !== p2)`؛ إذا اختلفا نظهر `alert("كلمتا المرور غير متطابقتين")` ونرجع `return false;`.',
          'إذا تطابقا نرجع `return true;` للسماح بإرسال النموذج.'
        ],
        stepsEn: [
          'Read pass1 and pass2 values.',
          'Compare using if (p1 !== p2).',
          'If mismatched, alert user and return false.',
          'If matched, return true.'
        ],
        finalAnswerAr: `function checkPassword() {
  let p1 = document.getElementById("pass1").value;
  let p2 = document.getElementById("pass2").value;
  if (p1 !== p2) {
    alert("تنبيه: كلمتا المرور غير متطابقتين!");
    return false;
  }
  return true;
}`,
        finalAnswerEn: 'Validation function returning false on mismatch to prevent form action.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11cs-3',
        problemAr: 'ما الفرق بين طريقة إرسال النموذج GET وطريقة POST من حيث الأمان وظهور البيانات في شريط العنوان؟',
        problemEn: 'Differentiate HTTP GET vs POST form methods regarding security and URL parameter visibility.',
        solutionStepsAr: [
          'GET: ترسل البيانات ملحقة بعنوان الصفحة في شريط المتصفح (URL Parameters) فتكون مرئية وغير آمنة للبيانات الحساسة ومحدودة الحجم.',
          'POST: ترسل البيانات مخفية ومغلفة داخل جسم الطلب (Request Body) دون ظهورها في العنوان، وهي الطريقة الآمنة لكلمات المرور وتتحمل أحجاماً كبيرة.'
        ],
        finalAnswerAr: 'GET تظهر البيانات في شريط العنوان وغير آمنة، بينما POST ترسل البيانات مخفية وآمنة لكلمات المرور.'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11cs-3',
        questionAr: 'لمنع إرسال النموذج عند وجود خطأ في البيانات المدخلة، يجب أن تُرجع دالة التحقق القيمة:',
        questionEn: 'To prevent form submission when errors exist, the validation function must return:',
        optionsAr: ['`false`', '`true`', '`null`', '`0`'],
        optionsEn: ['false', 'true', 'null', '0'],
        correctIndex: 0,
        explanationAr: 'إرجاع القيمة `false` في معالج الحدث `onsubmit="return validateForm()"` يوقف الإرسال فوراً.',
        explanationEn: 'Returning false from the onsubmit handler cancels form submission.'
      }
    ],

    assessment: {
      id: 'quiz-h11-cs3',
      titleAr: 'اختبار إتقان نماذج الويب والتحقق من البيانات',
      titleEn: 'Mastery Quiz: Forms & Data Validation',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-cs3-1',
          textAr: 'الخاصية المستخدمة لتحديد طريقة إرسال بيانات النموذج إلى الخادم (GET أو POST) هي:',
          textEn: 'The form attribute specifying how data is submitted to the server (GET or POST) is:',
          optionsAr: ['`method`', '`action`', '`target`', '`type`'],
          optionsEn: ['method', 'action', 'target', 'type'],
          correctIndex: 0,
          conceptTestedAr: 'خصائص وسم النموذج في HTML',
          conceptTestedEn: 'HTML Form attributes',
          explanationAr: 'الخاصية `method` تحدد بروتوكول الإرسال (GET أو POST)، بينما `action` تحدد الصفحة الهدف.',
          explanationEn: 'The method attribute specifies the HTTP submission method (GET or POST).',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs3-2',
          textAr: 'الدالة المستخدمة في JavaScript للتحقق مما إذا كانت القيمة المدخلة ليست رقماً هي:',
          textEn: 'The JavaScript built-in function to test whether an input is not a number is:',
          optionsAr: ['`isNaN()`', '`isNumber()`', '`validateNum()`', '`isDigit()`'],
          optionsEn: ['isNaN()', 'isNumber()', 'validateNum()', 'isDigit()'],
          correctIndex: 0,
          conceptTestedAr: 'التحقق من الأرقام في جافاسكريبت',
          conceptTestedEn: 'JavaScript isNaN numeric checking',
          explanationAr: 'الدالة `isNaN(val)` (اختصار لـ is Not a Number) ترجع `true` إذا كانت القيمة غير عددية.',
          explanationEn: 'isNaN() returns true if the argument is not a valid number.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs3-3',
          textAr: 'طريقة إرسال البيانات الموصى بها في نماذج تسجيل الدخول وكلمات المرور لحماية البيانات من الظهور في الرابط هي:',
          textEn: 'The recommended form submission method for passwords preventing credentials from appearing in URL is:',
          optionsAr: ['`POST`', '`GET`', '`READ`', '`PUT`'],
          optionsEn: ['POST', 'GET', 'READ', 'PUT'],
          correctIndex: 0,
          conceptTestedAr: 'أمان طرق إرسال النماذج',
          conceptTestedEn: 'Form security with POST method',
          explanationAr: 'طريقة POST ترسل البيانات في جسم الطلب HTTP بطريقة مشفرة ومحمية دون كشفها في شريط العنوان.',
          explanationEn: 'POST transmits sensitive credentials within the encrypted HTTP request body.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 4: RELATIONAL DATABASES & SQL ──
  {
    id: 'h11-cs-4',
    order: 4,
    titleAr: 'المحاضرة 4: قواعد البيانات العلائقية ولغة الاستعلامات البنيوية (SQL & MySQL Fundamentals)',
    titleEn: 'Lecture 4: Relational Database Fundamentals, Entity Relationships & SQL Operations in MySQL',
    subtitleAr: 'مفاهيم قواعد البيانات (الجداول، السجلات، الحقول)، المفتاح الأساسي والأجنبي، العلاقات (1:1, 1:M, M:M)، وأوامر لغة SQL الأساسية (SELECT, INSERT, UPDATE, DELETE)',
    subtitleEn: 'Master relational database architecture, tables, records, fields, primary/foreign keys, entity relationships (1:1, 1:N, M:N), and core SQL CRUD query commands.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Computer & ICT',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: قواعد البيانات وتطوير تطبيقات الويب الديناميكية',
    unitTitleEn: 'Unit 2: Databases & Dynamic Web Applications',
    lessonNumberAr: 'الدرس 4: مبادئ قواعد البيانات ولغة SQL',
    lessonNumberEn: 'Lesson 4: Database Concepts & SQL Queries',

    keyConceptsAr: [
      'مفهوم قاعدة البيانات (Database): الجداول (Tables)، السجلات/الصفوف (Records/Rows)، والحقول/الأعمدة (Fields/Columns)',
      'المفتاح الأساسي (Primary Key) لتمييز السجل بشكل فريد، والمفتاح الأجنبي (Foreign Key) لربط الجداول ببعضها',
      'أنواع العلاقات بين الجداول: رأس برأس (1:1)، رأس بأطراف (1:N)، وأطراف بأطراف (M:N)',
      'أوامر لغة SQL الأساسية (CRUD):',
      '1) الاسترجاع: `SELECT * FROM students WHERE grade = 11;`',
      '2) الإضافة: `INSERT INTO students (name, age) VALUES ("أحمد", 17);`',
      '3) التعديل: `UPDATE students SET score = 95 WHERE id = 1;`',
      '4) الحذف: `DELETE FROM students WHERE id = 5;`'
    ],
    keyConceptsEn: [
      'Relational database model: tables, records (rows), and fields/attributes (columns)',
      'Primary Key uniqueness constraint and Foreign Key relational integrity',
      'Entity relationship types: One-to-One (1:1), One-to-Many (1:N), Many-to-Many (M:N)',
      'Core SQL operations: SELECT query with WHERE filtering, INSERT record creation, UPDATE modification, and DELETE removal'
    ],

    conceptMapAr: [
      'قاعدة البيانات ➔ مجموعة جداول مترابطة بعلاقات منطقية',
      'الربط ➔ المفتاح الأساسي في جدول الآباء ➔ مفتاح أجنبي في جدول الأبناء',
      'الاستعلام SQL ➔ `SELECT` (قراءة) ➔ `INSERT` (إضافة) ➔ `UPDATE` (تعديل) ➔ `DELETE` (حذف)'
    ],
    conceptMapEn: [
      'Database ➔ Interconnected relational data tables',
      'Relationships ➔ Primary Key in parent table ➔ Foreign Key in child table',
      'SQL Queries ➔ SELECT (Read) ➔ INSERT (Create) ➔ UPDATE (Edit) ➔ DELETE (Remove)'
    ],

    learningOutcomesAr: [
      'تصميم هيكل قاعدة بيانات علائقية وتحديد المفاتيح الأساسية والأجنبية والعلاقات بين الجداول.',
      'كتابة أوامر واستعلامات SQL لاسترجاع وتصفية وإضافة وتعديل وحذف البيانات بدقة.',
      'استخدام واجهة phpMyAdmin في إدارة وإنشاء قواعد بيانات MySQL.'
    ],
    learningOutcomesEn: [
      'Design relational database schemas with primary/foreign keys and defined entity relationships.',
      'Construct standard SQL queries to filter, insert, update, and delete database records.',
      'Utilize phpMyAdmin web interface to manage and inspect MySQL databases.'
    ],

    vocabulary: [
      { termAr: 'المفتاح الأساسي (Primary Key)', termEn: 'Primary Key (PK)', definitionAr: 'حقل أو مجموعة حقول فريدة في الجدول لا تتكرر قيمتها أبداً ولا يمكن أن تترك فارغة (NOT NULL) لتمييز كل سجل بشكل قاطع مثل الرقم القومي أو كود الطالب.' },
      { termAr: 'لغة SQL', termEn: 'Structured Query Language (SQL)', definitionAr: 'لغة برمجية قياسية متخصصة في إدارة واسترجاع وتعديل قواعد البيانات العلائقية في خوادم MySQL و PostgreSQL.' }
    ],

    warmupHookAr: 'عندما تبحث عن اسمك في موقع نتائج الثانوية العامة أو نتائج الامتحانات من بين أكثر من 700 ألف طالب، وتظهر نتيجتك ودرجاتك في أقل من عُشر ثانية، كيف يتم هذا البحث الخارق بهذه السرعة الفائقة؟ بفضل قواعد البيانات العلائقية وخوادم SQL السريعة جداً في فهرسة واسترجاع السجلات عبر المفتاح الأساسي!',
    warmupHookEn: 'When searching national exam results among 700,000 students and finding your grades in 0.05 seconds, how is this instant retrieval possible? Through relational databases indexing primary keys via lightning-fast SQL queries.',

    mainContentAr: `
### 1. بنية قواعد البيانات العلائقية (Relational Database Architecture)
* **المكونات الأساسية:**
  * **الجدول (Table):** يحتوي على بيانات كيان محدد (مثل جدول الطلاب \`students\`).
  * **الحقل (Field):** عمود رأسي يمثل خاصية واحدة (مثل \`email\` أو \`score\`).
  * **السجل (Record):** صف أفقي يمثل عنصراً كاملاً بجميع بياناته.
* **أنواع المفاتيح:**
  * **المفتاح الأساسي (Primary Key):** فريد ولا يقبل الفراغ (مثل \`student_id\`).
  * **المفتاح الأجنبي (Foreign Key):** حقل في جدول يشير إلى المفتاح الأساسي في جدول آخر لربطهما.

---

### 2. أوامر لغة SQL الأساسية (Core SQL Operations)
1. **استرجاع البيانات (SELECT):**
   \`\`\`sql
   SELECT name, score FROM students WHERE score >= 85 ORDER BY score DESC;
   \`\`\`
2. **إضافة سجل جديد (INSERT):**
   \`\`\`sql
   INSERT INTO students (student_id, name, age, city) 
   VALUES (101, 'سارة خالد', 17, 'القاهرة');
   \`\`\`
3. **تعديل بيانات سجل موجود (UPDATE):**
   \`\`\`sql
   UPDATE students 
   SET score = 98 
   WHERE student_id = 101;
   \`\`\`
4. **حذف سجل محدد (DELETE):**
   \`\`\`sql
   DELETE FROM students 
   WHERE student_id = 101;
   \`\`\`
    `,
    mainContentEn: `
### 1. Relational Components
* Tables, Columns (Fields), Rows (Records).
* Primary Key (unique & non-null) & Foreign Key (relational link).

### 2. Core SQL CRUD Queries
* SELECT column FROM table WHERE condition;
* INSERT INTO table (cols) VALUES (vals);
* UPDATE table SET col = val WHERE condition;
* DELETE FROM table WHERE condition;
    `,

    diagramType: 'database_schema',
    diagramData: {
      type: 'relational_erd',
      title: 'علاقة جدول الطلاب بجدول الدرجات عبر المفتاح الأساسي',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="40" width="150" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <rect x="20" y="40" width="150" height="30" fill="#38bdf8" />
        <text x="50" y="60" fill="#fff" font-size="12" font-weight="bold">Students</text>
        <text x="30" y="95" fill="#fbbf24" font-size="11">🔑 student_id (PK)</text>
        <text x="30" y="120" fill="#f8fafc" font-size="11">name</text>
        <text x="30" y="145" fill="#f8fafc" font-size="11">grade</text>
        <line x1="170" y1="95" x2="230" y2="95" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)" />
        <rect x="230" y="40" width="150" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
        <rect x="230" y="40" width="150" height="30" fill="#10b981" />
        <text x="260" y="60" fill="#fff" font-size="12" font-weight="bold">Exam_Scores</text>
        <text x="240" y="95" fill="#fbbf24" font-size="11">🔑 score_id (PK)</text>
        <text x="240" y="120" fill="#38bdf8" font-size="11">🔗 student_id (FK)</text>
        <text x="240" y="145" fill="#f8fafc" font-size="11">mark</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: كتابة استعلام SQL لاسترجاع الطلاب المتفوقين',
        titleEn: 'Example: SQL Query to Select Top Scoring Students',
        problemAr: 'اكتب استعلام SQL يسترجع اسم الطالب (\`name\`) ومجموع درجاته (\`total_score\`) من جدول \`students\` لجميع الطلاب الحاصلين على 90 درجة فأكثر، ومرتبين تنازلياً من الأعلى للأقل.',
        problemEn: 'Write SQL query to select name and total_score from students where score >= 90 ordered descending.',
        stepsAr: [
          'نحدد الحقول المطلوبة بعد كلمة `SELECT`: `SELECT name, total_score`.',
          'نحدد اسم الجدول بعد كلمة `FROM`: `FROM students`.',
          'نحدد شرط التصفية بعد كلمة `WHERE`: `WHERE total_score >= 90`.',
          'نحدد ترتيب النتائج تنازلياً بعد كلمة `ORDER BY`: `ORDER BY total_score DESC;`.'
        ],
        stepsEn: [
          'Specify columns: SELECT name, total_score',
          'Specify table: FROM students',
          'Specify filter: WHERE total_score >= 90',
          'Specify sort order: ORDER BY total_score DESC;'
        ],
        finalAnswerAr: 'SELECT name, total_score FROM students WHERE total_score >= 90 ORDER BY total_score DESC;',
        finalAnswerEn: 'SELECT name, total_score FROM students WHERE total_score >= 90 ORDER BY total_score DESC;'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11cs-4',
        problemAr: 'ما هو الأمر المستخدم في SQL لتعديل عنوان البريد الإلكتروني للمستخدم صاحب الرقم التعريفي id = 12 في جدول users؟',
        problemEn: 'What SQL command updates the email address of user id = 12 in table users?',
        solutionStepsAr: [
          'نستخدم الأمر `UPDATE` يليه اسم الجدول `users`.',
          'نستخدم الكلمة `SET` لتحديد الحقل والقيمة الجديدة.',
          'نستخدم الكلمة `WHERE` لتحديد السجل المطلوب بدقة لتجنب تعديل كل الجدول.'
        ],
        finalAnswerAr: "UPDATE users SET email = 'student@moe.edu.eg' WHERE id = 12;"
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11cs-4',
        questionAr: 'أمر SQL المستخدم لإضافة سجل جديد داخل جدول قاعدة البيانات هو:',
        questionEn: 'The SQL command used to insert a new record into a table is:',
        optionsAr: ['`INSERT INTO`', '`SELECT`', '`UPDATE`', '`CREATE TABLE`'],
        optionsEn: ['INSERT INTO', 'SELECT', 'UPDATE', 'CREATE TABLE'],
        correctIndex: 0,
        explanationAr: 'الأمر `INSERT INTO` هو الأمر القياسي لإضافة صفوف وبيانات جديدة في الجداول.',
        explanationEn: 'INSERT INTO is the standard SQL statement to add new rows into a database table.'
      }
    ],

    assessment: {
      id: 'quiz-h11-cs4',
      titleAr: 'اختبار إتقان قواعد البيانات ولغة SQL',
      titleEn: 'Mastery Quiz: Relational Databases & SQL',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-cs4-1',
          textAr: 'الحقل الذي يُميز كل سجل في جدول قاعدة البيانات بشكل فريد ولا تتكرر قيمته ولا يقبل الفراغ يُسمى:',
          textEn: 'The unique, non-null field uniquely identifying each record in a database table is called:',
          optionsAr: ['المفتاح الأساسي (Primary Key)', 'المفتاح الأجنبي (Foreign Key)', 'الحقل النصي', 'المفتاح الثانوي'],
          optionsEn: ['Primary Key', 'Foreign Key', 'Text Field', 'Secondary Key'],
          correctIndex: 0,
          conceptTestedAr: 'تعريف المفتاح الأساسي في قواعد البيانات',
          conceptTestedEn: 'Definition of Primary Key',
          explanationAr: 'المفتاح الأساسي Primary Key فريد دائماً ومستحيل أن يتكرر في الجدول.',
          explanationEn: 'A primary key enforces unique entity identity and cannot contain null values.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs4-2',
          textAr: 'أمر SQL المستخدم لحذف سجلات محددة من الجدول بناءً على شرط معين هو:',
          textEn: 'The SQL statement used to remove specific records from a table based on a condition is:',
          optionsAr: ['`DELETE FROM`', '`DROP TABLE`', '`REMOVE`', '`CLEAR`'],
          optionsEn: ['DELETE FROM', 'DROP TABLE', 'REMOVE', 'CLEAR'],
          correctIndex: 0,
          conceptTestedAr: 'أمر الحذف في SQL',
          conceptTestedEn: 'SQL DELETE statement',
          explanationAr: 'الأمر `DELETE FROM table WHERE condition;` يحذف الصفوف المطابقة للشرط.',
          explanationEn: 'DELETE FROM removes specific rows meeting the WHERE clause.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs4-3',
          textAr: 'في لغة SQL، الكلمة المستخدمة لفرز وترتيب النتائج المسترجعة تصاعدياً أو تنازلياً هي:',
          textEn: 'In SQL, the clause used to sort retrieved query records ascending or descending is:',
          optionsAr: ['`ORDER BY`', '`GROUP BY`', '`SORT BY`', '`WHERE`'],
          optionsEn: ['ORDER BY', 'GROUP BY', 'SORT BY', 'WHERE'],
          correctIndex: 0,
          conceptTestedAr: 'ترتيب نتائج الاستعلام في SQL',
          conceptTestedEn: 'SQL ORDER BY clause',
          explanationAr: 'العبارة `ORDER BY column ASC/DESC` مخصصة لفرز السجلات تصاعدياً أو تنازلياً.',
          explanationEn: 'ORDER BY specifies the sorting order of the returned result set.',
          difficulty: 'easy'
        }
      ]
    }
  },

  // ── LECTURE 5: SERVER-SIDE PHP & WEB APPLICATION INTEGRATION ──
  {
    id: 'h11-cs-5',
    order: 5,
    titleAr: 'المحاضرة 5: البرمجة من جانب الخادم بلغة PHP وربط صفحات الويب بقواعد بيانات MySQL والأمن السيبراني',
    titleEn: 'Lecture 5: Server-Side Web Development with PHP, MySQL Connectivity & Web Cyber Security',
    subtitleAr: 'بنية لغة PHP، استلام بيانات النماذج عبر $_POST و $_GET، الاتصال بقواعد بيانات MySQL عبر mysqli، وإدارة جلسات المستخدمين (Sessions) ومبادئ أمن وحماية مواقع الويب',
    subtitleEn: 'Master server-side PHP scripting, handling form submissions via $_POST, connecting to MySQL via mysqli_connect, session management, and essential web application cyber safety.',
    durationMinutes: 35,
    isLocked: false,
    isCompleted: false,
    passingScoreRequired: 80,

    gradeLevelNameAr: 'الصف الثاني الثانوي (Grade 11) - المرحلة الثانوية',
    gradeLevelNameEn: 'Grade 11 / Secondary 2 - High School Computer & ICT',
    termAr: 'الفصل الدراسي الثاني',
    termEn: 'Term 2 Official Curriculum',
    unitTitleAr: 'الوحدة الثانية: تطوير المواقع الديناميكية والأمن السيبراني',
    unitTitleEn: 'Unit 2: Dynamic Web Apps & Cyber Security',
    lessonNumberAr: 'الدرس 5: لغة PHP والربط بقواعد البيانات والأمن السيبراني',
    lessonNumberEn: 'Lesson 5: PHP, Database Connectivity & Cyber Safety',

    keyConceptsAr: [
      'مفهوم البرمجة من جانب الخادم (Server-Side Scripting) ودورة حياة الطلب والاستجابة (Request / Response)',
      'وسوم لغة PHP: `<?php ... ?>`، المتغيرات التي تبدأ بعلامة `$`، وجمل الطباعة `echo`',
      'المصفوفات العامة الفائقة: `$_POST["field"]` و `$_GET["field"]` لاستقبال مدخلات المستخدم من النماذج',
      'دوال الربط بقاعدة بيانات MySQL في PHP: `mysqli_connect()`, `mysqli_query()`, `mysqli_fetch_assoc()`, `mysqli_close()`',
      'الجلسات وتتبع تسجيل الدخول: `session_start()` و `$_SESSION`',
      'الأمن السيبراني للويب: الحماية من حقن قواعد البيانات (SQL Injection) وسرقة الهوية وكلمات المرور المشفرة'
    ],
    keyConceptsEn: [
      'Server-side execution lifecycle and HTTP client-server request-response model',
      'PHP syntax: <?php ... ?> tags, $-prefixed variables, and echo output statement',
      'Superglobal arrays: $_POST and $_GET for receiving submitted form inputs',
      'PHP MySQL API functions: mysqli_connect(), mysqli_query(), mysqli_fetch_assoc(), and mysqli_close()',
      'Session management and login authentication using session_start() and $_SESSION',
      'Web application cyber security: preventing SQL Injection, XSS, and storing salted hashed passwords'
    ],

    conceptMapAr: [
      'المستخدم يرسل النموذج ➔ السيرفر يستقبل البيانات عبر `$_POST`',
      'كود PHP ➔ يفتح اتصال MySQL عبر `mysqli_connect` ➔ ينفذ استعلام `INSERT / SELECT`',
      'النتيجة ➔ توليد صفحة HTML ديناميكية وإرسالها للمتصفح ➔ إغلاق الاتصال'
    ],
    conceptMapEn: [
      'User posts form ➔ Server receives input via $_POST array',
      'PHP script ➔ Opens MySQL connection (mysqli_connect) ➔ Executes query',
      'Response ➔ Formats dynamic HTML output ➔ Closes connection'
    ],

    learningOutcomesAr: [
      'كتابة برامج نصية بلغة PHP لمعالجة مدخلات النماذج وتخزينها في قواعد بيانات MySQL.',
      'إنشاء اتصال آمن مع خادم قاعدة البيانات واسترجاع وعرض سجلات الطلاب ديناميكياً.',
      'تطبيق مبادئ الأمن السيبراني لحماية التطبيقات من الهجمات واختراق البيانات.'
    ],
    learningOutcomesEn: [
      'Write server-side PHP scripts to process form inputs and store data in MySQL.',
      'Establish database connections and dynamically display database records on web pages.',
      'Implement web application security best practices to protect user data from vulnerabilities.'
    ],

    vocabulary: [
      { termAr: 'البرمجة من جانب الخادم', termEn: 'Server-Side Scripting', definitionAr: 'تنفيذ الأكواد البرمجية ومعالجة البيانات على خادم الويب المركزي قبل إرسال النتيجة كصفحة HTML عادية للمتصفح، مثل لغة PHP.' },
      { termAr: 'الجلسة (Session)', termEn: 'Web Session', definitionAr: 'طريقة لحفظ وتتبع بيانات المستخدم وحالة تسجيل دخوله عبر صفحات الموقع المختلفة على السيرفر حتى يقوم بتسجيل الخروج.' }
    ],

    warmupHookAr: 'عندما تسجل دخولك إلى حسابك البنكي أو منصة مدرستي، كيف يتعرف الموقع عليك وينقلك إلى لوحة التحكم الخاصة بك أنت فقط دون غيرك من ملايين المستخدمين؟ عبر كود خادم مكتوب بلغة مثل PHP يتحقق من بياناتك في قاعدة بيانات MySQL، وينشئ لك جلسة آمنة (Session) تحميك من التلصص والاختراق!',
    warmupHookEn: 'When logging into your student portal, how does the system recognize you and serve your private records exclusively? A server-side PHP script authenticates credentials against MySQL and initializes a secure session token.',

    mainContentAr: `
### 1. أساسيات لغة PHP (PHP Fundamentals)
* تبدأ أكواد PHP دائماً بالوسم \`<?php\` وتنتهي بـ \`?>\`.
* تبدأ جميع أسماء المتغيرات بعلامة الدولار (\`$\`).
* **استقبال بيانات النماذج:**
  \`\`\`php
  <?php
  $student_name = $_POST['username'];
  $student_age = $_POST['age'];
  echo "مرحباً بك يا " . $student_name;
  ?>
  \`\`\`

---

### 2. الاتصال بقواعد بيانات MySQL في PHP (Database Integration)
\`\`\`php
<?php
// 1. إنشاء الاتصال بخادم MySQL
$conn = mysqli_connect("localhost", "root", "", "school_db");

// التحقق من نجاح الاتصال
if (!$conn) {
  die("فشل الاتصال بقاعدة البيانات: " . mysqli_connect_error());
}

// 2. كتابة وتنفيذ استعلام SQL
$sql = "SELECT id, name, score FROM students";
$result = mysqli_query($conn, $sql);

// 3. قراءة السجلات وعرضها
if (mysqli_num_rows($result) > 0) {
  while($row = mysqli_fetch_assoc($result)) {
    echo "الطالب: " . $row["name"] . " - الدرجة: " . $row["score"] . "<br>";
  }
}

// 4. إغلاق الاتصال
mysqli_close($conn);
?>
\`\`\`

---

### 3. مبادئ الأمن السيبراني للويب (Web Application Cyber Security)
* **حقن قواعد البيانات (SQL Injection):** محاولة إدخال أوامر SQL خبيثة عبر حقول الإدخال للوصول لقاعدة البيانات؛ وتتم الحماية منها بتنقية المدخلات واستخدام الاستعلامات المجهزة (Prepared Statements).
* **حفظ كلمات المرور:** لا تُحفظ كلمات المرور كنص صريح أبداً، بل يتم تشفيرها باستخدام دوال التجزئة الآمنة (مثل \`password_hash()\`).
    `,
    mainContentEn: `
### 1. PHP Syntax & Superglobals
* <?php ... ?> tags, $-prefixed variables.
* $_POST['field'] and $_GET['field'].

### 2. MySQL Connectivity
* mysqli_connect("host", "user", "pass", "db")
* mysqli_query($conn, $sql)
* mysqli_fetch_assoc($result)
* mysqli_close($conn)

### 3. Web Security
* Prevent SQL Injection using input sanitization & prepared statements.
* Store passwords using secure hashing algorithms (password_hash).
    `,

    diagramType: 'client_server_architecture',
    diagramData: {
      type: 'php_mysql_lifecycle',
      title: 'دورة معالجة الطلب بين العميل وسيرفر PHP وقاعدة بيانات MySQL',
      svgSnippet: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg">
        <rect x="20" y="70" width="80" height="60" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
        <text x="35" y="95" fill="#38bdf8" font-size="11">المتصفح</text>
        <text x="30" y="115" fill="#94a3b8" font-size="10">(Client)</text>
        <line x1="100" y1="85" x2="160" y2="85" stroke="#34d399" stroke-width="2" marker-end="url(#arrow)" />
        <text x="110" y="75" fill="#34d399" font-size="10">POST Form</text>
        <rect x="160" y="50" width="100" height="100" rx="8" fill="#4338ca" stroke="#818cf8" stroke-width="2" />
        <text x="180" y="85" fill="#fff" font-size="12" font-weight="bold">PHP Server</text>
        <line x1="260" y1="90" x2="310" y2="90" stroke="#fbbf24" stroke-width="2" marker-end="url(#arrow)" />
        <rect x="310" y="50" width="80" height="100" rx="8" fill="#065f46" stroke="#34d399" stroke-width="2" />
        <text x="325" y="95" fill="#34d399" font-size="11" font-weight="bold">MySQL</text>
        <line x1="160" y1="120" x2="100" y2="120" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
        <text x="110" y="135" fill="#38bdf8" font-size="10">HTML Response</text>
      </svg>`
    },

    workedExamples: [
      {
        titleAr: 'مثال: كتابة كود PHP لحفظ بيانات نموذج تسجيل طالب في قاعدة البيانات',
        titleEn: 'Example: PHP Script to Insert Form Data into MySQL',
        problemAr: 'اكتب كود PHP يستقبل اسم الطالب والبريد الإلكتروني من النموذج ويقوم بحفظهما داخل جدول `students` في قاعدة بيانات `school_db`.',
        problemEn: 'Write PHP script to receive name and email from POST and insert into MySQL table students.',
        stepsAr: [
          'نستقبل البيانات من مصفوفة `$_POST`.',
          'نفتح اتصالاً بقاعدة البيانات باستخدام `mysqli_connect()`.',
          'نصيغ استعلام الإضافة `INSERT INTO students (name, email) VALUES (...)`.',
          'ننفذ الاستعلام عبر `mysqli_query()` ونغلق الاتصال.'
        ],
        stepsEn: [
          'Read $_POST values.',
          'Connect via mysqli_connect().',
          'Format INSERT INTO SQL string.',
          'Execute with mysqli_query() and close connection.'
        ],
        finalAnswerAr: `<?php
$conn = mysqli_connect("localhost", "root", "", "school_db");
if ($conn) {
  $name = $_POST['student_name'];
  $email = $_POST['student_email'];
  $sql = "INSERT INTO students (name, email) VALUES ('$name', '$email')";
  if (mysqli_query($conn, $sql)) {
    echo "تم تسجيل الطالب بنجاح!";
  }
  mysqli_close($conn);
}
?>`,
        finalAnswerEn: 'Complete secure PHP MySQL insertion handler.'
      }
    ],

    textbookExercises: [
      {
        id: 'tb-h11cs-5',
        problemAr: 'ما هي الدالة المستخدمة في لغة PHP لبدء وتفعيل جلسة المستخدم (Session) في أول الصفحة؟',
        problemEn: 'What PHP function initializes and activates user sessions at the top of a page?',
        solutionStepsAr: [
          'يجب استدعاء الدالة `session_start();` في السطر الأول من كود PHP قبل إرسال أي مخرجات أو وسوم HTML للمتصفح.',
          'تتيح هذه الدالة تخزين واسترجاع المتغيرات عبر مصفوفة `$_SESSION`.'
        ],
        finalAnswerAr: 'session_start();'
      }
    ],

    formativeAssessment: [
      {
        id: 'f-h11cs-5',
        questionAr: 'المصفوفة العامة في PHP المستخدمة لاستقبال بيانات النموذج المرسلة بطريقة POST هي:',
        questionEn: 'The PHP superglobal array used to collect form data sent via POST method is:',
        optionsAr: ['`$_POST`', '`$_GET`', '`$_SERVER`', '`$_SESSION`'],
        optionsEn: ['$_POST', '$_GET', '$_SERVER', '$_SESSION'],
        correctIndex: 0,
        explanationAr: 'المصفوفة `$_POST` مخصصة لجمع وقراءة مدخلات النماذج المرسلة بطريقة POST.',
        explanationEn: '$_POST is the superglobal array containing parameters submitted via HTTP POST.',
        difficulty: 'easy'
      }
    ],

    assessment: {
      id: 'quiz-h11-cs5',
      titleAr: 'اختبار إتقان لغة PHP والربط بقواعد البيانات والأمن السيبراني',
      titleEn: 'Mastery Quiz: PHP, MySQL & Cyber Security',
      passingScore: 80,
      questions: [
        {
          id: 'qh11-cs5-1',
          textAr: 'الدالة المخصصة في PHP لإنشاء اتصال مع خادم قاعدة بيانات MySQL هي:',
          textEn: 'The PHP function used to establish a connection to a MySQL database server is:',
          optionsAr: ['`mysqli_connect()`', '`mysql_open()`', '`db_connect()`', '`sql_start()`'],
          optionsEn: ['mysqli_connect()', 'mysql_open()', 'db_connect()', 'sql_start()'],
          correctIndex: 0,
          conceptTestedAr: 'دوال الاتصال بقواعد البيانات في PHP',
          conceptTestedEn: 'PHP MySQL connection functions',
          explanationAr: 'الدالة `mysqli_connect(host, user, pass, db)` هي الدالة الرسمية لإنشاء اتصال مع MySQL.',
          explanationEn: 'mysqli_connect() opens a new connection to the MySQL database server.',
          difficulty: 'easy'
        },
        {
          id: 'qh11-cs5-2',
          textAr: 'الهجوم السيبراني الشائع الذي يحاول فيه المخترق إدخال تعليمات SQL خبيثة في حقول الإدخال لتجاوز المصادقة وسرقة البيانات يُسمى:',
          textEn: 'The web cyber attack where malicious SQL statements are injected into form fields to hijack databases is called:',
          optionsAr: ['حقن قواعد البيانات (SQL Injection)', 'هجوم الفيروسات', 'حجب الخدمة (DDoS)', 'البرمجيات الخبيثة'],
          optionsEn: ['SQL Injection', 'Virus Attack', 'DDoS', 'Malware'],
          correctIndex: 0,
          conceptTestedAr: 'الأمن السيبراني وثغرات حقن SQL',
          conceptTestedEn: 'SQL Injection web vulnerabilities',
          explanationAr: 'هجوم حقن SQL يستغل عدم تنقية مدخلات النماذج لتمرير أوامر ضارة مباشرة لقاعدة البيانات.',
          explanationEn: 'SQL Injection exploits unsanitized form inputs to manipulate backend database queries.',
          difficulty: 'medium'
        },
        {
          id: 'qh11-cs5-3',
          textAr: 'جميع أسماء المتغيرات في لغة البرمجة PHP يجب أن تبدأ إجبارياً برمز:',
          textEn: 'All variable identifiers in PHP must mandatory begin with the symbol:',
          optionsAr: ['علامة الدولار (`$`)', 'علامة النسبة (`%`)', 'علامة الآت (`@`)', 'علامة الهاش (`#`)'],
          optionsEn: ['Dollar sign ($)', 'Percent sign (%)', 'At symbol (@)', 'Hash symbol (#)'],
          correctIndex: 0,
          conceptTestedAr: 'قواعد بناء الجمل وتسمية المتغيرات في PHP',
          conceptTestedEn: 'PHP variable naming rules',
          explanationAr: 'في لغة PHP تبدأ جميع المتغيرات برمز `$` متبوعاً باسم المتغير (مثل `$name`).',
          explanationEn: 'In PHP, all variables must strictly begin with a $ prefix.',
          difficulty: 'easy'
        }
      ]
    }
  }
];
