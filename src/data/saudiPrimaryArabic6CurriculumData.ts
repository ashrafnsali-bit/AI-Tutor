import type { Assessment, Lecture, LectureDiagram, Question } from '../types';

const sourceUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K06-SM1-BLNG.pdf';
const sourceNoteAr =
  'المصدر: كتاب لغتي الجميلة للصف السادس الابتدائي، الجزء الأول من المقرر، طبعة 1448هـ/2026م. عناوين المكونات وصفحاتها مطابقة لخطة المحتويات والفهرس ص 9–10. تمت مراجعة الغلاف والفهرس فقط؛ الشروح والأمثلة والرسوم والأنشطة والأسئلة من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const sourceNoteEn =
  'Source: Grade 6 Lughati Al-Jameelah, Part One of the curriculum, 1448 AH/2026 edition. Component titles and page references follow the contents plan on pp. 9–10. Only the cover and contents were reviewed; platform explanations, examples, diagrams, activities, and questions are original and are not copied from textbook pages.';

type ArabicGrade6Lesson = {
  componentAr: string;
  componentEn: string;
  titleAr: string;
  titleEn: string;
  pages: string;
  focusAr: string;
  focusEn: string;
  takeawayAr: string;
  takeawayEn: string;
  stepsAr: string[];
  stepsEn: string[];
  exampleAr: string;
  exampleEn: string;
  questionAr: string;
  questionEn: string;
  optionsAr: string[];
  optionsEn: string[];
  correctIndex: number;
  explanationAr: string;
  explanationEn: string;
};

const unitTitleAr = 'الوحدة الأولى: قدوات ومثل عليا';
const unitTitleEn = 'Unit 1: Role Models and Ideals';

const lessons: ArabicGrade6Lesson[] = [
  {
    componentAr: 'التهيئة ومراجعة المكتسبات',
    componentEn: 'Preparation and prerequisite review',
    titleAr: 'تهيئة الوحدة ومراجعة المكتسبات السابقة',
    titleEn: 'Unit Preparation and Prerequisite Review',
    pages: '11، 22، 28',
    focusAr: 'استرجاع المهارات السابقة والتعرف إلى نقطة البداية قبل قراءة الوحدة.',
    focusEn: 'Reviewing prerequisite skills and identifying a starting point before studying the unit.',
    takeawayAr: 'المراجعة تكشف ما أتقنه المتعلم وما يحتاج إلى تدريب إضافي.',
    takeawayEn: 'A review identifies what a learner knows and what needs more practice.',
    stepsAr: ['تذكّر', 'جرّب', 'تحقق', 'اختر هدفًا'],
    stepsEn: ['Recall', 'Try', 'Check', 'Set a goal'],
    exampleAr: 'قبل القراءة، اكتب معنى كلمة مألوفة من عنوان الدرس ثم تحقق من فهمك في جملة.',
    exampleEn: 'Before reading, predict the meaning of a familiar word in the lesson title, then check it in a sentence.',
    questionAr: 'ما أفضل فائدة من الاختبار التشخيصي قبل بدء الوحدة؟',
    questionEn: 'What is the main purpose of a diagnostic check before a unit?',
    optionsAr: ['تحديد المهارات التي تحتاج إلى مراجعة', 'استبدال قراءة الدرس', 'حفظ جميع الإجابات', 'تجاوز الأنشطة'],
    optionsEn: ['Identify skills that need review', 'Replace the lesson reading', 'Memorize every answer', 'Skip the activities'],
    correctIndex: 0,
    explanationAr: 'يساعد الاختبار التشخيصي على تحديد نقطة البداية والمهارات التي تحتاج إلى دعم.',
    explanationEn: 'A diagnostic check helps identify the starting point and skills that need support.'
  },
  {
    componentAr: 'المشروع',
    componentEn: 'Unit project',
    titleAr: 'التخطيط لمشروع الوحدة',
    titleEn: 'Planning the Unit Project',
    pages: '35',
    focusAr: 'التعرف إلى فكرة المشروع وتقسيم العمل إلى هدف وخطوات وأدوار قابلة للمتابعة.',
    focusEn: 'Introducing the project idea and organizing work into a goal, steps, and roles.',
    takeawayAr: 'يبدأ المشروع بهدف واضح، ثم توزع مهامه ويُراجع التقدم مع الفريق.',
    takeawayEn: 'A project begins with a clear goal, assigned tasks, and progress checks with the team.',
    stepsAr: ['حدد الهدف', 'خطط للخطوات', 'وزع الأدوار', 'اعرض النتيجة'],
    stepsEn: ['Set a goal', 'Plan steps', 'Assign roles', 'Present the result'],
    exampleAr: 'يتفق فريق على عرض قيمة إيجابية، فيحدد الرسالة ثم يقسم البحث والكتابة والتقديم.',
    exampleEn: 'A team plans a short presentation about a positive value, assigning research, writing, and speaking roles.',
    questionAr: 'ما الخطوة الأنسب قبل توزيع مهام المشروع؟',
    questionEn: 'What should a team do before assigning project tasks?',
    optionsAr: ['تحديد هدف المشروع', 'كتابة الخاتمة أولًا', 'اختيار ألوان العرض فقط', 'إنهاء العمل دون تخطيط'],
    optionsEn: ['Define the project goal', 'Write the conclusion first', 'Choose only the slide colors', 'Finish without a plan'],
    correctIndex: 0,
    explanationAr: 'يساعد وضوح الهدف الفريق على اختيار المهام المناسبة وتوزيعها.',
    explanationEn: 'A clear goal helps the team choose and assign suitable tasks.'
  },
  {
    componentAr: 'نص الاستماع',
    componentEn: 'Listening text',
    titleAr: 'الاستماع لاستخراج الفكرة والتفاصيل',
    titleEn: 'Listening for the Main Idea and Details',
    pages: '36',
    focusAr: 'الإصغاء إلى نص الوحدة، وتحديد فكرته وتسجيل التفاصيل المهمة بترتيبها.',
    focusEn: 'Listening to the unit text, finding its main idea, and sequencing important details.',
    takeawayAr: 'ينصت المستمع لهدف محدد، ثم يربط التفاصيل بالفكرة الرئيسة.',
    takeawayEn: 'An effective listener has a purpose and connects details to the main idea.',
    stepsAr: ['استعد للموضوع', 'أنصت', 'دوّن كلمات مفتاحية', 'رتب التفاصيل'],
    stepsEn: ['Preview the topic', 'Listen', 'Note key words', 'Sequence details'],
    exampleAr: 'استمع إلى وصف موقف مساعدة، ثم دوّن من شارك وما العمل الذي قام به.',
    exampleEn: 'Listen to a description of someone helping, then note who took part and what they did.',
    questionAr: 'ماذا تفعل لتتذكر ترتيب الأحداث في نص مسموع؟',
    questionEn: 'What can you do to remember the sequence of events in a listening text?',
    optionsAr: ['تدوين كلمات مفتاحية ثم ترتيبها', 'كتابة موضوع آخر', 'الاعتماد على التخمين', 'تجاهل أسماء الشخصيات'],
    optionsEn: ['Note key words and sequence them', 'Write about another topic', 'Rely on guessing', 'Ignore the people involved'],
    correctIndex: 0,
    explanationAr: 'تساعد الكلمات المفتاحية وترتيبها على تذكر تسلسل الأحداث.',
    explanationEn: 'Key words and sequencing help retain the order of events.'
  },
  {
    componentAr: 'نص الفهم القرائي',
    componentEn: 'Reading comprehension',
    titleAr: 'أبو بكر الصديق: الفهم القرائي والسيرة',
    titleEn: 'Abu Bakr Al-Siddiq: Reading and Biography',
    pages: '41',
    focusAr: 'قراءة نص السيرة لاستخراج الفكرة والتفاصيل والاستدلال على الصفات من المواقف.',
    focusEn: 'Reading a biographical text to find its main idea, details, and evidence of character traits.',
    takeawayAr: 'يُسند القارئ استنتاجه بدليل من المواقف الواردة في النص.',
    takeawayEn: 'A reader supports an inference with evidence from the described events.',
    stepsAr: ['اقرأ العنوان', 'حدد الفكرة', 'ابحث عن دليل', 'استنتج صفة'],
    stepsEn: ['Read the title', 'Find the idea', 'Locate evidence', 'Infer a trait'],
    exampleAr: 'قرأ سامر سيرة شخصية ثم استشهد بموقف منها ليوضح صفة الأمانة.',
    exampleEn: 'Samer read a biography and cited an event to support an inference about honesty.',
    questionAr: 'ما الذي يجعل استنتاج الصفة من السيرة مقنعًا؟',
    questionEn: 'What makes an inference about a person’s character convincing?',
    optionsAr: ['دليل من المواقف في النص', 'تكرار الصفة دون دليل', 'رأي لا يرتبط بالنص', 'عنوان مختلف'],
    optionsEn: ['Evidence from events in the text', 'Repeating a trait without evidence', 'An unrelated opinion', 'A different title'],
    correctIndex: 0,
    explanationAr: 'تدعم المواقف المذكورة في النص الصفة المستنتجة.',
    explanationEn: 'Events described in the text support an inferred character trait.'
  },
  {
    componentAr: 'الاستراتيجية القرائية',
    componentEn: 'Reading strategy',
    titleAr: 'التصفح والقراءة الاستطلاعية',
    titleEn: 'Previewing and Skimming a Source',
    pages: '54، 60',
    focusAr: 'تصفح كتاب أو مجلة أو مصدر رقمي قبل القراءة المتعمقة لاكتشاف موضوعه وتنظيمه.',
    focusEn: 'Previewing a book, magazine, or digital source before close reading to understand its topic and organization.',
    takeawayAr: 'تساعد العناوين والفهرس والصور على تكوين تصور أولي وتحديد ما ينبغي قراءته.',
    takeawayEn: 'Titles, contents, and visuals help form an initial idea and guide what to read.',
    stepsAr: ['تصفح العنوان', 'لاحظ الفهرس والعناوين', 'توقع المحتوى', 'اقرأ بتأن'],
    stepsEn: ['Preview the title', 'Notice contents and headings', 'Predict the topic', 'Read closely'],
    exampleAr: 'قبل قراءة مقال، يلاحظ القارئ العنوان والعناوين الفرعية ثم يتوقع فكرته.',
    exampleEn: 'Before reading an article, a reader previews its title and headings to predict its topic.',
    questionAr: 'أي عنصر يساعد على معرفة تنظيم موضوعات الكتاب قبل قراءته؟',
    questionEn: 'Which feature helps reveal how a book’s topics are organized?',
    optionsAr: ['الفهرس', 'رقم الصفحة وحده', 'لون الغلاف فقط', 'اسم الطابع'],
    optionsEn: ['The table of contents', 'A page number alone', 'Cover color only', 'The printer’s name'],
    correctIndex: 0,
    explanationAr: 'يعرض الفهرس الموضوعات وترتيبها في الكتاب.',
    explanationEn: 'The table of contents lists the topics and their order.'
  },
  {
    componentAr: 'الظاهرة الإملائية',
    componentEn: 'Spelling',
    titleAr: 'همزتا الوصل والقطع، وابن وابنة، والهمزة المتوسطة',
    titleEn: 'Hamzat al-Wasl and al-Qat, Ibn and Ibnah, and Medial Hamza',
    pages: '65، 73، 78',
    focusAr: 'التمييز بين همزتي الوصل والقطع، وكتابة ابن وابنة، ورسم الهمزة المتوسطة في كلمات مناسبة.',
    focusEn: 'Distinguishing the two initial hamzas, spelling ibn/ibnah, and writing medial hamza.',
    takeawayAr: 'يحدد نوع الهمزة من موضعها وقاعدتها، ويراجع حركة الحروف عند كتابة الهمزة المتوسطة.',
    takeawayEn: 'Identify the hamza by its position and rule, and check surrounding vowels when writing medial hamza.',
    stepsAr: ['حدد موضع الهمزة', 'ميز الوصل والقطع', 'راجع قاعدة ابن وابنة', 'اختر رسم المتوسطة'],
    stepsEn: ['Locate the hamza', 'Distinguish wasl and qat', 'Review ibn/ibnah', 'Write the medial hamza'],
    exampleAr: 'استمعَ تبدأ بهمزة وصل، وأحمد تبدأ بهمزة قطع، وتُكتب كلمة سُئِلَ بهمزة متوسطة على نبرة.',
    exampleEn: 'استمع begins with hamzat al-wasl, أحمد with hamzat al-qat, and سُئِلَ has a medial hamza on yaa.',
    questionAr: 'أي كلمة تبدأ بهمزة قطع؟',
    questionEn: 'Which word begins with hamzat al-qat?',
    optionsAr: ['استمع', 'أحمد', 'اكتب', 'ابن'],
    optionsEn: ['استمع', 'أحمد', 'اكتب', 'ابن'],
    correctIndex: 1,
    explanationAr: 'همزة أحمد همزة قطع تثبت في الابتداء والوصل.',
    explanationEn: 'The hamza in أحمد is hamzat al-qat and remains pronounced at the beginning and in connected speech.'
  },
  {
    componentAr: 'الوظيفة النحوية',
    componentEn: 'Grammar',
    titleAr: 'الأفعال الناسخة والحروف الناسخة',
    titleEn: 'Inna and Kana Particles and Verbs',
    pages: '85، 91',
    focusAr: 'التعرف إلى كان وأخواتها وإن وأخواتها وأثرهما في المبتدأ والخبر.',
    focusEn: 'Recognizing kana and inna forms and how they affect a nominal sentence.',
    takeawayAr: 'ترفع كان اسمها وتنصب خبرها، وتنصب إن اسمها وترفع خبرها.',
    takeawayEn: 'Kana raises its subject and makes its predicate accusative; inna makes its noun accusative and its predicate nominative.',
    stepsAr: ['حدد المبتدأ والخبر', 'أدخل كان أو إن', 'لاحظ حركة الاسم', 'اضبط الخبر'],
    stepsEn: ['Find subject and predicate', 'Add kana or inna', 'Check the noun ending', 'Mark the predicate'],
    exampleAr: 'كان الجوُّ معتدلًا. إنَّ التعاونَ مفيدٌ.',
    exampleEn: 'كان الجوُّ معتدلًا. إنَّ التعاونَ مفيدٌ.',
    questionAr: 'ما اسم إن في الجملة: «إنَّ التعاونَ مفيدٌ»؟',
    questionEn: 'What is the noun of إنَّ in «إنَّ التعاونَ مفيدٌ»?',
    optionsAr: ['إنَّ', 'التعاونَ', 'مفيدٌ', 'الجملة'],
    optionsEn: ['إنَّ', 'التعاونَ', 'مفيدٌ', 'The whole sentence'],
    correctIndex: 1,
    explanationAr: 'التعاونَ اسم إن منصوب، ومفيدٌ خبرها مرفوع.',
    explanationEn: 'التعاونَ is the accusative noun of إنَّ, and مفيدٌ is its nominative predicate.'
  },
  {
    componentAr: 'الصنف اللغوي',
    componentEn: 'Word forms',
    titleAr: 'المشتقات: اسم الفاعل واسم المفعول',
    titleEn: 'Derivatives: Active and Passive Participles',
    pages: '99، 105',
    focusAr: 'صياغة اسم الفاعل واسم المفعول من الفعل الثلاثي وغير الثلاثي.',
    focusEn: 'Forming active and passive participles from triliteral and derived verbs.',
    takeawayAr: 'يدل اسم الفاعل على من قام بالفعل، ويدل اسم المفعول على ما وقع عليه الفعل.',
    takeawayEn: 'An active participle names the doer; a passive participle names what receives the action.',
    stepsAr: ['حدد الفعل', 'صغ اسم الفاعل', 'صغ اسم المفعول', 'تحقق من المعنى'],
    stepsEn: ['Identify the verb', 'Form the active participle', 'Form the passive participle', 'Check the meaning'],
    exampleAr: 'من كتب: كاتب ومكتوب؛ ومن أكرم: مُكرِم ومُكرَم.',
    exampleEn: 'From كتب: كاتب and مكتوب; from أكرم: مُكرِم and مُكرَم.',
    questionAr: 'أي كلمة اسم مفعول من الفعل «كتب»؟',
    questionEn: 'Which word is the passive participle of كتب?',
    optionsAr: ['كاتب', 'مكتوب', 'كتابة', 'يكتب'],
    optionsEn: ['كاتب', 'مكتوب', 'كتابة', 'يكتب'],
    correctIndex: 1,
    explanationAr: 'مكتوب على وزن مفعول، ويدل على ما وقع عليه فعل الكتابة.',
    explanationEn: 'مكتوب follows the مفعول pattern and names what was written.'
  },
  {
    componentAr: 'الرسم الكتابي',
    componentEn: 'Handwriting',
    titleAr: 'كتابة عبارات بخط النسخ',
    titleEn: 'Writing Phrases in Naskh Script',
    pages: '109',
    focusAr: 'كتابة عبارة واضحة بخط النسخ مع مراعاة شكل الحروف واتصالها والمسافات.',
    focusEn: 'Writing a clear phrase in Naskh while attending to letter forms, connections, and spacing.',
    takeawayAr: 'تتحسن جودة الخط بملاحظة مواضع الحروف على السطر والتدرب على وصلها.',
    takeawayEn: 'Handwriting improves by observing letter placement on the line and practicing connections.',
    stepsAr: ['لاحظ نموذج الحرف', 'ثبت موضعه على السطر', 'صل الحروف', 'راجع التناسق'],
    stepsEn: ['Observe the letter form', 'Place it on the line', 'Connect letters', 'Check consistency'],
    exampleAr: 'تدرب على كتابة العبارة الأصلية: «العلم والعمل طريق النجاح».',
    exampleEn: 'Practice the original phrase: “Knowledge and effort are a path to success.”',
    questionAr: 'ما الذي يساعد على وضوح العبارة المكتوبة بخط النسخ؟',
    questionEn: 'What helps make a phrase written in Naskh clear?',
    optionsAr: ['مراعاة اتصال الحروف ومواضعها', 'تغيير شكل الحروف عشوائيًا', 'إهمال المسافات', 'الكتابة خارج السطر دائمًا'],
    optionsEn: ['Respecting letter connections and placement', 'Changing letter forms randomly', 'Ignoring spacing', 'Always writing outside the line'],
    correctIndex: 0,
    explanationAr: 'وضوح الحروف واتصالها وتناسقها على السطر من أسس الكتابة المقروءة.',
    explanationEn: 'Clear forms, proper connections, and consistent placement support legible writing.'
  },
  {
    componentAr: 'النص الشعري',
    componentEn: 'Poetry',
    titleAr: 'عمر بن الخطاب رضي الله عنه ورسول كسرى',
    titleEn: 'Umar ibn Al-Khattab and the Envoy of the Persian King',
    pages: '116',
    focusAr: 'قراءة النص الشعري وفهم مفرداته وصوره واستخلاص قيمة من معناه.',
    focusEn: 'Reading a poem, understanding its vocabulary and imagery, and drawing a value from its meaning.',
    takeawayAr: 'يربط القارئ بين دلالة المفردة والصورة الشعرية والفكرة العامة.',
    takeawayEn: 'A reader connects word meaning and poetic imagery to the overall idea.',
    stepsAr: ['اقرأ الأبيات', 'فسر المفردات', 'لاحظ الصورة', 'استخلص القيمة'],
    stepsEn: ['Read the lines', 'Explain vocabulary', 'Notice imagery', 'Infer a value'],
    exampleAr: 'قد يصف الشاعر العدل بأنه نور؛ فالصورة توحي بالهداية والوضوح.',
    exampleEn: 'A poet may describe justice as light, suggesting guidance and clarity.',
    questionAr: 'ما الخطوة التي تساعد على فهم صورة شعرية؟',
    questionEn: 'Which step helps explain a poetic image?',
    optionsAr: ['ربط الصورة بمعنى الأبيات', 'عد الحروف فقط', 'تجاهل المفردات', 'تغيير موضوع النص'],
    optionsEn: ['Connect the image to the lines’ meaning', 'Count letters only', 'Ignore vocabulary', 'Change the text topic'],
    correctIndex: 0,
    explanationAr: 'تتضح الصورة الشعرية بربط ألفاظها وسياقها بالفكرة التي يعرضها النص.',
    explanationEn: 'An image becomes clearer when its words and context are connected to the poem’s idea.'
  },
  {
    componentAr: 'بنية النص',
    componentEn: 'Text structure',
    titleAr: 'وصف شخصية والتلخيص',
    titleEn: 'Describing a Person and Summarizing',
    pages: '122، 129',
    focusAr: 'تنظيم وصف شخصية حول صفاتها ومواقفها، ثم تلخيص أبرز الأفكار بإيجاز.',
    focusEn: 'Organizing a character description around traits and actions, then briefly summarizing key ideas.',
    takeawayAr: 'يعتمد الوصف على صفات تدعمها مواقف، ويحافظ التلخيص على الفكرة والتفاصيل المهمة.',
    takeawayEn: 'A description uses traits supported by actions; a summary retains the main idea and key details.',
    stepsAr: ['اختر الصفات', 'اسندها بموقف', 'رتب الأفكار', 'لخص بإيجاز'],
    stepsEn: ['Choose traits', 'Support them with an event', 'Organize ideas', 'Summarize briefly'],
    exampleAr: 'سالم منظم ومتعاون؛ يرتب أدوات فريقه ويساعد زملاءه، لذلك يثقون به.',
    exampleEn: 'Salem is organized and helpful: he arranges his team’s materials and assists classmates, so they trust him.',
    questionAr: 'أي عبارة تقدم صفة مدعومة بموقف؟',
    questionEn: 'Which statement gives a trait supported by an action?',
    optionsAr: ['سالم متعاون لأنه يساعد زملاءه', 'سالم في الصف السادس', 'المدرسة واسعة', 'بدأ النشاط صباحًا'],
    optionsEn: ['Salem is helpful because he assists classmates', 'Salem is in Grade 6', 'The school is large', 'The activity began in the morning'],
    correctIndex: 0,
    explanationAr: 'تربط العبارة صفة التعاون بموقف واضح يدعمها.',
    explanationEn: 'The statement links the trait of helpfulness to a specific supporting action.'
  },
  {
    componentAr: 'التواصل الكتابي',
    componentEn: 'Written communication',
    titleAr: 'كتابة وصف شخصية وكتابة تلخيص',
    titleEn: 'Writing a Character Description and a Summary',
    pages: '137، 143',
    focusAr: 'كتابة وصف مترابط لشخصية ثم إعداد تلخيص يحافظ على الفكرة الرئيسة.',
    focusEn: 'Writing a coherent character description and a summary that preserves the main idea.',
    takeawayAr: 'تسبق الكتابة خطة قصيرة، وتتبعها مراجعة للترابط واللغة وعلامات الترقيم.',
    takeawayEn: 'A short plan precedes writing, followed by revision for coherence, language, and punctuation.',
    stepsAr: ['خطط للفكرة', 'اكتب مسودة', 'راجع الترابط', 'حرر النص'],
    stepsEn: ['Plan the idea', 'Draft', 'Check coherence', 'Edit'],
    exampleAr: 'اكتب جملة رئيسة عن شخصية، ثم أضف موقفين يدعمانها واحذف التكرار عند التلخيص.',
    exampleEn: 'Write a topic sentence about a person, add two supporting actions, and remove repetition when summarizing.',
    questionAr: 'ما أفضل خطوة بعد كتابة المسودة؟',
    questionEn: 'What is the best step after drafting?',
    optionsAr: ['مراجعة الأفكار واللغة', 'إضافة أفكار لا صلة لها', 'حذف الفكرة الرئيسة', 'تسليم النص دون قراءة'],
    optionsEn: ['Review the ideas and language', 'Add unrelated ideas', 'Remove the main idea', 'Submit without rereading'],
    correctIndex: 0,
    explanationAr: 'تساعد المراجعة على تحسين الترابط وتصحيح اللغة قبل تسليم النص.',
    explanationEn: 'Revision improves coherence and corrects language before the text is submitted.'
  },
  {
    componentAr: 'التواصل الشفهي',
    componentEn: 'Oral communication',
    titleAr: 'عرض سيرة وإجراء مقابلة شفهية',
    titleEn: 'Presenting a Biography and Conducting an Interview',
    pages: '150، 152، 154',
    focusAr: 'تقديم عرض شفهي منظم عن سيرة أو كتاب، وإجراء مقابلة بأسئلة واضحة وإنصات مناسب.',
    focusEn: 'Giving an organized oral presentation about a biography or book and conducting an interview with clear questions and active listening.',
    takeawayAr: 'ينظم المتحدث عرضه، ويحترم دور المستمع، ويصوغ أسئلة مرتبطة بالموضوع.',
    takeawayEn: 'A speaker organizes a presentation, respects listening turns, and asks relevant questions.',
    stepsAr: ['حدد الموضوع', 'رتب الأفكار', 'تحدث بوضوح', 'أنصت واسأل'],
    stepsEn: ['Choose a topic', 'Order ideas', 'Speak clearly', 'Listen and ask'],
    exampleAr: 'في مقابلة عن شخصية مؤثرة، يبدأ الطالب بسؤال تعريفي ثم يسأل عن موقف يوضح صفة فيها.',
    exampleEn: 'In an interview about an influential person, a student asks an introductory question and then asks for an event that shows a trait.',
    questionAr: 'أي سؤال أنسب لمقابلة عن شخصية؟',
    questionEn: 'Which is the most relevant interview question about a person?',
    optionsAr: ['ما الموقف الذي يوضح صفة تقدرها فيها؟', 'ما لون حقيبتك؟', 'كم نافذة في الصف؟', 'متى ينتهي الدرس؟'],
    optionsEn: ['Which event shows a trait you admire in this person?', 'What color is your bag?', 'How many windows are in the classroom?', 'When does the lesson end?'],
    correctIndex: 0,
    explanationAr: 'يرتبط السؤال مباشرة بالشخصية وصفاتها ومواقفها.',
    explanationEn: 'The question directly concerns the person, their traits, and their actions.'
  },
  {
    componentAr: 'اختبار الوحدة',
    componentEn: 'Unit assessment',
    titleAr: 'مراجعة واختبار الوحدة الأولى',
    titleEn: 'Unit 1 Review and Assessment',
    pages: '156',
    focusAr: 'مراجعة الفهم القرائي والإملاء والنحو والمشتقات ومهارات التواصل.',
    focusEn: 'Reviewing reading comprehension, spelling, grammar, derivatives, and communication skills.',
    takeawayAr: 'تتحسن الإجابة بملاحظة المطلوب والاستناد إلى قاعدة أو دليل مناسب.',
    takeawayEn: 'Answers improve when the task is identified and supported by an appropriate rule or evidence.',
    stepsAr: ['اقرأ السؤال', 'حدد المهارة', 'اختر القاعدة', 'راجع الإجابة'],
    stepsEn: ['Read the question', 'Identify the skill', 'Apply the rule', 'Check the answer'],
    exampleAr: 'راجع حركة الاسم والخبر عند دخول كان أو إن قبل اختيار الإجابة.',
    exampleEn: 'Check the noun and predicate endings after kana or inna before choosing an answer.',
    questionAr: 'أي جملة تضبط «إن» وأثرها ضبطًا صحيحًا؟',
    questionEn: 'Which sentence correctly shows the effect of إنَّ?',
    optionsAr: ['إنَّ التعاونُ مفيدًا', 'إنَّ التعاونَ مفيدٌ', 'إنَّ التعاونِ مفيدٌ', 'إنَّ التعاونَ مفيدًا'],
    optionsEn: ['إنَّ التعاونُ مفيدًا', 'إنَّ التعاونَ مفيدٌ', 'إنَّ التعاونِ مفيدٌ', 'إنَّ التعاونَ مفيدًا'],
    correctIndex: 1,
    explanationAr: 'تنصب إن اسمها التعاونَ وترفع خبرها مفيدٌ.',
    explanationEn: 'إنَّ makes its noun التعاونَ accusative and its predicate مفيدٌ nominative.'
  }
];

const makeDiagram = (lesson: ArabicGrade6Lesson, id: string, order: number): LectureDiagram => ({
  id,
  figureNumberAr: `شكل (${order}-1)`,
  figureNumberEn: `Figure (${order}-1)`,
  titleAr: `خريطة تعلم: ${lesson.componentAr}`,
  titleEn: `Learning Map: ${lesson.componentEn}`,
  captionAr: 'رسم تعليمي أصلي من إعداد المنصة، وليس صورة من الكتاب.',
  captionEn: 'An original platform learning diagram, not an image from the textbook.',
  diagramType: 'arabic_learning_map',
  visualSteps: lesson.stepsAr.map((labelAr, index) => ({
    labelAr,
    labelEn: lesson.stepsEn[index]
  }))
});

const makeQuestion = (lesson: ArabicGrade6Lesson, id: string): Question => ({
  id,
  textAr: lesson.questionAr,
  textEn: lesson.questionEn,
  optionsAr: lesson.optionsAr,
  optionsEn: lesson.optionsEn,
  correctIndex: lesson.correctIndex,
  conceptTestedAr: lesson.componentAr,
  conceptTestedEn: lesson.componentEn,
  explanationAr: lesson.explanationAr,
  explanationEn: lesson.explanationEn,
  difficulty: 'easy'
});

const makeAssessment = (lesson: ArabicGrade6Lesson, id: string, order: number): Assessment => ({
  id,
  titleAr: `تقويم ${lesson.componentAr}`,
  titleEn: `${lesson.componentEn} Check`,
  passingScore: 80,
  questions: [makeQuestion(lesson, `${id}-q${order}`)]
});

export const SAUDI_PRIMARY_ARABIC_G6_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const lectureId = `sa-primary-arabic-g6-1448-u1-${String(order).padStart(2, '0')}`;

  return {
    id: lectureId,
    order,
    titleAr: lesson.titleAr,
    titleEn: lesson.titleEn,
    subtitleAr: lesson.focusAr,
    subtitleEn: lesson.focusEn,
    descriptionAr: `${sourceNoteAr} موضع المكوّن في الكتاب: ص ${lesson.pages}. المصدر: ${sourceUrl}`,
    descriptionEn: `${sourceNoteEn} Component pages: ${lesson.pages}. Source: ${sourceUrl}`,
    topicAr: `${lesson.componentAr} (ص ${lesson.pages})`,
    topicEn: `${lesson.componentEn} (pp. ${lesson.pages})`,
    durationMinutes: 25,
    isLocked: order > 1,
    isCompleted: false,
    passingScoreRequired: 80,
    country: 'SA',
    subject: 'PRIMARY_ARABIC',
    gradeLevel: 'G6',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'الصف السادس الابتدائي — لغتي الجميلة، الجزء الأول، طبعة 1448هـ/2026م',
    gradeLevelNameEn: 'Grade 6 Primary — Lughati Al-Jameelah, Part One, 1448 AH/2026 edition',
    ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
    ministryEn: 'Ministry of Education, Saudi Arabia',
    termAr: 'الفصل الدراسي الأول — الجزء الأول من المقرر، طبعة 1448هـ/2026م',
    termEn: 'Semester 1 — Part One of the curriculum, 1448 AH/2026 edition',
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `المكوّن ${order}: ${lesson.componentAr}`,
    lessonNumberEn: `Component ${order}: ${lesson.componentEn}`,
    warmupHookAr: `كيف تطبق مهارة ${lesson.componentAr} عند دراسة وحدة «قدوات ومثل عليا»؟`,
    warmupHookEn: `How can you apply ${lesson.componentEn.toLowerCase()} while studying “Role Models and Ideals”?`,
    learningOutcomesAr: [lesson.focusAr, lesson.takeawayAr],
    learningOutcomesEn: [lesson.focusEn, lesson.takeawayEn],
    keyConceptsAr: [lesson.focusAr, lesson.takeawayAr],
    keyConceptsEn: [lesson.focusEn, lesson.takeawayEn],
    summaryAr: `${lesson.focusAr} ${lesson.takeawayAr}`,
    summaryEn: `${lesson.focusEn} ${lesson.takeawayEn}`,
    sections: [
      {
        titleAr: 'المهارة وخطواتها',
        titleEn: 'Skill and Steps',
        contentAr: `${lesson.focusAr} ${lesson.takeawayAr} ${sourceNoteAr}`,
        contentEn: `${lesson.focusEn} ${lesson.takeawayEn} ${sourceNoteEn}`,
        diagram: makeDiagram(lesson, `${lectureId}-map`, order)
      },
      {
        titleAr: 'مثال أصلي وتطبيق',
        titleEn: 'Original Example and Practice',
        contentAr: lesson.exampleAr,
        contentEn: lesson.exampleEn
      }
    ],
    assessment: makeAssessment(lesson, `${lectureId}-assessment`, order)
  };
});
