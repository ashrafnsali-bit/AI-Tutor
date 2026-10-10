import type { Assessment, Lecture, LectureDiagram, Question } from '../types';

const sourceUrl = 'https://iencontent.ien.edu.sa/books/1448-GE-PE-K05-SM1-BLNG.pdf';
const sourceNoteAr =
  'المصدر: كتاب لغتي الجميلة للصف الخامس الابتدائي، الجزء الأول، طبعة 1448هـ/2026م. عناوين المكونات وصفحاتها مطابقة للفهرس وخطة المحتويات ص 9–10. تمت مراجعة الغلاف والفهرس فقط؛ الشروح والأمثلة والرسوم والأنشطة والأسئلة من إعداد المنصة وليست منقولة من صفحات الكتاب.';
const sourceNoteEn =
  'Source: Grade 5 Lughati Al-Jameelah, Part One, 1448 AH/2026 edition. Component titles and page references follow the contents plan on pp. 9–10. Only the cover and contents were reviewed; platform explanations, examples, diagrams, activities, and questions are original and are not copied from textbook pages.';

type ArabicGrade5Lesson = {
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

const unitTitleAr = 'الوحدة الأولى: أخلاق وفضائل';
const unitTitleEn = 'Unit 1: Ethics and Virtues';

const lessons: ArabicGrade5Lesson[] = [
  {
    componentAr: 'التهيئة ومراجعة المكتسبات',
    componentEn: 'Preparation and prerequisite review',
    titleAr: 'تهيئة الوحدة ومراجعة المكتسبات السابقة',
    titleEn: 'Unit Preparation and Prerequisite Review',
    pages: '11، 16',
    focusAr: 'مراجعة المهارات السابقة والإجابة عن الاختبار التشخيصي لتحديد ما يحتاج إلى دعم.',
    focusEn: 'Review prerequisite skills and use the diagnostic check to identify areas needing support.',
    takeawayAr: 'يحدد الاختبار التشخيصي نقطة البداية، ولا يغني عن تعلم دروس الوحدة.',
    takeawayEn: 'A diagnostic check identifies a starting point; it does not replace learning the unit.',
    stepsAr: ['أتذكر', 'أجيب', 'أراجع', 'أحدد هدفًا'],
    stepsEn: ['Recall', 'Answer', 'Review', 'Set a goal'],
    exampleAr: 'بعد الإجابة عن سؤال مراجعة، أشرح كيف وصلت إلى إجابتي وأحدد مهارة أحتاج إلى مراجعتها.',
    exampleEn: 'After answering a review question, explain your reasoning and identify one skill to revisit.',
    questionAr: 'ما الغرض من الاختبار التشخيصي في بداية الوحدة؟',
    questionEn: 'What is the purpose of a diagnostic check at the beginning of a unit?',
    optionsAr: ['تحديد المهارات التي تحتاج إلى مراجعة', 'استبدال جميع دروس الوحدة', 'حفظ الإجابات دون فهم', 'تجاوز أنشطة الوحدة'],
    optionsEn: ['Identify skills that need review', 'Replace all unit lessons', 'Memorize answers without understanding', 'Skip unit activities'],
    correctIndex: 0,
    explanationAr: 'يكشف الاختبار التشخيصي المهارات التي يتقنها المتعلم وتلك التي تحتاج إلى مراجعة.',
    explanationEn: 'A diagnostic check reveals which skills are secure and which need review.'
  },
  {
    componentAr: 'المدخل',
    componentEn: 'Unit introduction',
    titleAr: 'أنشطة تمهيدية لوحدة أخلاق وفضائل',
    titleEn: 'Introductory Activities: Ethics and Virtues',
    pages: '27',
    focusAr: 'استحضار المعرفة السابقة حول الأخلاق والفضائل وربطها بمواقف الحياة اليومية.',
    focusEn: 'Recall prior knowledge about ethics and virtues and connect it to everyday situations.',
    takeawayAr: 'تساعد الأسئلة التمهيدية على بناء صلة بين خبرة المتعلم وموضوع الوحدة.',
    takeawayEn: 'Opening questions connect learners’ experiences to the unit topic.',
    stepsAr: ['ألاحظ الموقف', 'أصف السلوك', 'أذكر أثره', 'أشارك فكرة'],
    stepsEn: ['Observe a situation', 'Describe the behavior', 'Explain its effect', 'Share an idea'],
    exampleAr: 'أصف موقفًا يظهر فيه الصدق، ثم أوضح أثره في ثقة أفراد المجموعة بعضهم ببعض.',
    exampleEn: 'Describe an act of honesty and explain how it affects trust within a group.',
    questionAr: 'ما أفضل طريقة للمشاركة في نشاط تمهيدي؟',
    questionEn: 'What is a good way to take part in an introductory activity?',
    optionsAr: ['ربط الفكرة بموقف واقعي واحترام آراء الآخرين', 'مقاطعة المتحدثين', 'تكرار الإجابة دون تفسير', 'تغيير الموضوع'],
    optionsEn: ['Connect the idea to a real situation and respect others’ views', 'Interrupt speakers', 'Repeat an answer without explanation', 'Change the topic'],
    correctIndex: 0,
    explanationAr: 'الربط بالمواقف الواقعية والمشاركة باحترام يدعمان التعلم والحوار.',
    explanationEn: 'Real-life connections and respectful participation support learning and discussion.'
  },
  {
    componentAr: 'مشروع الوحدة',
    componentEn: 'Unit project',
    titleAr: 'التخطيط لمشروع الوحدة',
    titleEn: 'Planning the Unit Project',
    pages: '37',
    focusAr: 'تنظيم مشروع تعاوني عن قيمة أخلاقية بتحديد الهدف والخطوات والأدوار.',
    focusEn: 'Organize a collaborative project about an ethical value by setting a goal, steps, and roles.',
    takeawayAr: 'يبدأ المشروع بهدف واضح، ثم توزع المهام ويتابع الفريق التقدم.',
    takeawayEn: 'A project starts with a clear goal, followed by assigned tasks and progress checks.',
    stepsAr: ['أختار قيمة', 'أحدد الهدف', 'أوزع المهام', 'أعرض الناتج'],
    stepsEn: ['Choose a value', 'Set a goal', 'Assign tasks', 'Present the result'],
    exampleAr: 'يعد فريق لوحة عن التعاون؛ فيجمع أمثلة من الحياة اليومية ويقسم الكتابة والرسم والعرض.',
    exampleEn: 'A team prepares a poster about cooperation, sharing research, writing, illustration, and presentation.',
    questionAr: 'ما الخطوة التي تسبق توزيع مهام المشروع؟',
    questionEn: 'What should happen before project tasks are assigned?',
    optionsAr: ['تحديد هدف المشروع', 'عرض النتيجة النهائية', 'كتابة التقييم قبل البدء', 'اختيار الزينة فقط'],
    optionsEn: ['Define the project goal', 'Present the final result', 'Write the evaluation first', 'Choose decoration only'],
    correctIndex: 0,
    explanationAr: 'وضوح الهدف يساعد الفريق على اختيار المهام المناسبة وتوزيعها.',
    explanationEn: 'A clear goal helps the team choose and assign suitable tasks.'
  },
  {
    componentAr: 'نص الاستماع',
    componentEn: 'Listening text',
    titleAr: 'عدل الملك عبد العزيز: الاستماع واستخراج الفكرة',
    titleEn: 'King Abdulaziz’s Justice: Listening for the Main Idea',
    pages: '38',
    focusAr: 'الاستماع بتركيز إلى النص وتحديد فكرته وتسجيل التفاصيل التي تدعمها.',
    focusEn: 'Listen attentively, identify the main idea, and record supporting details.',
    takeawayAr: 'يربط المستمع التفاصيل بالفكرة الرئيسة بدل تدوين كل كلمة.',
    takeawayEn: 'A listener connects key details to the main idea instead of recording every word.',
    stepsAr: ['أستعد للموضوع', 'أصغي', 'أدون كلمات مفتاحية', 'أتحقق من الفكرة'],
    stepsEn: ['Preview the topic', 'Listen', 'Note key words', 'Check the main idea'],
    exampleAr: 'أدون كلمتي «عدل» و«إنصاف» عند سماعهما، ثم أستخدم التفاصيل لتحديد فكرة المقطع.',
    exampleEn: 'Note key words such as “justice” and “fairness,” then use details to identify the passage’s idea.',
    questionAr: 'ما الذي يساعد على تذكر تفاصيل النص المسموع؟',
    questionEn: 'What helps a listener remember details?',
    optionsAr: ['تدوين كلمات مفتاحية أثناء الاستماع', 'الانشغال بموضوع آخر', 'تخمين نهاية النص', 'كتابة كل كلمة دون متابعة المعنى'],
    optionsEn: ['Note key words while listening', 'Think about another topic', 'Guess the ending', 'Write every word without following meaning'],
    correctIndex: 0,
    explanationAr: 'تساعد الكلمات المفتاحية على تذكر التفاصيل وربطها بالفكرة الرئيسة.',
    explanationEn: 'Key words help recall details and connect them to the main idea.'
  },
  {
    componentAr: 'نص الفهم القرائي',
    componentEn: 'Reading comprehension',
    titleAr: 'أخلاق المؤمنين: الفهم القرائي',
    titleEn: 'The Ethics of Believers: Reading Comprehension',
    pages: '41',
    focusAr: 'استخراج الفكرة الرئيسة والتفاصيل والاستدلال على المعنى من النص.',
    focusEn: 'Identify the main idea and details, and use textual evidence to interpret meaning.',
    takeawayAr: 'يدعم القارئ إجابته بدليل مناسب من النص.',
    takeawayEn: 'A reader supports an answer with relevant evidence from the text.',
    stepsAr: ['أتصفح العنوان', 'أقرأ بتركيز', 'أحدد الفكرة', 'أستشهد بدليل'],
    stepsEn: ['Preview the title', 'Read carefully', 'Find the main idea', 'Support it with evidence'],
    exampleAr: 'عند السؤال عن صفة في النص، أحدد العبارة أو الموقف الذي يدل عليها قبل الإجابة.',
    exampleEn: 'When asked about a quality in a text, find the phrase or situation that demonstrates it before answering.',
    questionAr: 'كيف أتحقق من أن إجابتي عن سؤال الفهم دقيقة؟',
    questionEn: 'How can you check that a reading-comprehension answer is accurate?',
    optionsAr: ['أربطها بدليل من النص', 'أختار أطول إجابة', 'أعتمد على العنوان وحده', 'أتجاهل تفاصيل النص'],
    optionsEn: ['Connect it to evidence from the text', 'Choose the longest answer', 'Rely only on the title', 'Ignore details'],
    correctIndex: 0,
    explanationAr: 'الدليل النصي يبين كيف تدعم المعلومات الواردة الإجابة.',
    explanationEn: 'Textual evidence shows how information in the passage supports an answer.'
  },
  {
    componentAr: 'الإستراتيجية القرائية',
    componentEn: 'Reading strategy',
    titleAr: 'استراتيجيات القراءة: نصوص موضوعات الوحدة',
    titleEn: 'Reading Strategies: Unit Texts',
    pages: '53، 59، 61، 63',
    focusAr: 'تطبيق القراءة الهادفة على موضوعات «الخلق»، و«جسمك والآلة»، و«النوم صحة»، و«التحصينات».',
    focusEn: 'Apply purposeful reading to the unit topics on character, the body and machines, healthy sleep, and immunization.',
    takeawayAr: 'يختار القارئ غرضًا للقراءة، ويطرح أسئلة، ثم يلخص ما تعلمه.',
    takeawayEn: 'A reader sets a purpose, asks questions, and summarizes what was learned.',
    stepsAr: ['أحدد غرضي', 'أتوقع المحتوى', 'أقرأ وأسأل', 'ألخص الفكرة'],
    stepsEn: ['Set a purpose', 'Preview the topic', 'Read and question', 'Summarize the idea'],
    exampleAr: 'قبل قراءة موضوع عن النوم، أكتب سؤالًا أبحث عن إجابته، ثم ألخص المعلومة التي وجدتها.',
    exampleEn: 'Before reading about sleep, write a question to answer, then summarize the information found.',
    questionAr: 'ما الخطوة الأنسب قبل قراءة موضوع جديد؟',
    questionEn: 'What is a useful step before reading a new topic?',
    optionsAr: ['تحديد غرض القراءة', 'حفظ الفقرة قبل فهمها', 'تجاوز العنوان', 'قراءة الخاتمة فقط'],
    optionsEn: ['Set a reading purpose', 'Memorize the paragraph before understanding it', 'Skip the title', 'Read only the ending'],
    correctIndex: 0,
    explanationAr: 'يساعد تحديد الغرض على توجيه الانتباه إلى المعلومات المطلوبة.',
    explanationEn: 'A clear purpose directs attention to the information being sought.'
  },
  {
    componentAr: 'الصنف اللغوي',
    componentEn: 'Word classes',
    titleAr: 'الصنف اللغوي: جمع المذكر السالم والأفعال الخمسة وأنواع الجموع',
    titleEn: 'Word Classes: Sound Masculine Plurals, the Five Verbs, and Plural Types',
    pages: '65، 66، 68',
    focusAr: 'التعرف إلى صيغ جمع المذكر السالم والأفعال الخمسة والتمييز بين أنواع الجموع بأمثلة.',
    focusEn: 'Recognize sound masculine plural forms and the five verbs, and distinguish types of plurals.',
    takeawayAr: 'يساعد فحص بنية الكلمة ونهايتها على تصنيفها تصنيفًا صحيحًا.',
    takeawayEn: 'Examining a word’s structure and ending helps classify it accurately.',
    stepsAr: ['ألاحظ الصيغة', 'أفحص النهاية', 'أصنف النوع', 'أستخدم مثالًا'],
    stepsEn: ['Notice the form', 'Check the ending', 'Classify it', 'Use an example'],
    exampleAr: 'في «المعلمون يشرحون» أميز جمع المذكر السالم في «المعلمون» والفعل من الأفعال الخمسة في «يشرحون».',
    exampleEn: 'In “The teachers explain,” identify the sound masculine plural noun and the verb ending in ـون.',
    questionAr: 'أي كلمة تمثل جمع مذكر سالم؟',
    questionEn: 'Which word is a sound masculine plural?',
    optionsAr: ['مهندسون', 'مهندسة', 'مهندس', 'هندسة'],
    optionsEn: ['Engineers (masculine plural)', 'Female engineer', 'Engineer', 'Engineering'],
    correctIndex: 0,
    explanationAr: '«مهندسون» جمع مذكر سالم، وعلامته الواو والنون في حالة الرفع.',
    explanationEn: 'The word is a sound masculine plural; in the nominative its ending is waw plus noon.'
  },
  {
    componentAr: 'الظاهرة الإملائية',
    componentEn: 'Spelling',
    titleAr: 'الهمزة المتوسطة على الألف والواو',
    titleEn: 'The Medial Hamza on Alif and Waw',
    pages: '69، 76',
    focusAr: 'ملاحظة حركة الهمزة وحركة ما قبلها لتحديد كرسي الهمزة المتوسطة في الكلمات المستهدفة.',
    focusEn: 'Compare the medial hamza’s vowel with the preceding vowel to select its seat.',
    takeawayAr: 'تتحدد كتابة الهمزة المتوسطة بمقارنة الحركتين وفق قاعدة الهمزة.',
    takeawayEn: 'The medial hamza’s spelling depends on comparing the two vowels.',
    stepsAr: ['أحدد موضع الهمزة', 'أقرأ الحركتين', 'أوازن بينهما', 'أكتب الكرسي'],
    stepsEn: ['Locate the hamza', 'Check both vowels', 'Compare their strength', 'Choose the seat'],
    exampleAr: 'أقارن كتابة الهمزة في «سأل» و«مؤمن»، ثم أعلل اختلاف كرسيها.',
    exampleEn: 'Compare the hamza seats in “سأل” and “مؤمن,” then explain the difference.',
    questionAr: 'أي كلمة كتبت همزتها المتوسطة على الواو؟',
    questionEn: 'Which word has a medial hamza written on waw?',
    optionsAr: ['مؤمن', 'سأل', 'رأس', 'بئر'],
    optionsEn: ['مؤمن', 'سأل', 'رأس', 'بئر'],
    correctIndex: 0,
    explanationAr: 'كتبت الهمزة في «مؤمن» على الواو؛ أما بقية الأمثلة فكتبت على كرسي آخر.',
    explanationEn: 'In «مؤمن», the medial hamza is seated on waw; the other examples use a different seat.'
  },
  {
    componentAr: 'الوظيفة النحوية',
    componentEn: 'Grammar',
    titleAr: 'رفع المبتدأ والخبر والفاعل بالعلامات الفرعية',
    titleEn: 'Raising the Subject, Predicate, and Doer with Secondary Markers',
    pages: '83، 90',
    focusAr: 'تمييز المبتدأ والخبر والفاعل وتحديد علامة الرفع المناسبة في المثنى وجمع المذكر السالم.',
    focusEn: 'Identify subjects, predicates, and doers, then select the appropriate nominative marker for duals and sound masculine plurals.',
    takeawayAr: 'قد تكون علامة الرفع فرعية؛ فالألف للمثنى والواو لجمع المذكر السالم.',
    takeawayEn: 'Nominative marking may be secondary: alif for the dual and waw for sound masculine plurals.',
    stepsAr: ['أحدد الوظيفة', 'أحدد نوع الاسم', 'أختار العلامة', 'أراجع الجملة'],
    stepsEn: ['Identify the role', 'Identify the noun form', 'Choose the marker', 'Check the sentence'],
    exampleAr: 'في «المعلمان حاضران» يرفع المبتدأ والخبر بالألف لأن كليهما مثنى.',
    exampleEn: 'In “The two teachers are present,” both the subject and predicate are dual and take alif.',
    questionAr: 'ما علامة رفع المبتدأ المثنى في «الطالبان مجتهدان»؟',
    questionEn: 'What nominative marker is used for the dual subject in «الطالبان مجتهدان»?',
    optionsAr: ['الألف', 'الواو', 'الياء', 'الفتحة'],
    optionsEn: ['Alif', 'Waw', 'Ya', 'Fatha'],
    correctIndex: 0,
    explanationAr: 'يرفع المثنى بالألف، لذلك علامة رفع «الطالبان» هي الألف.',
    explanationEn: 'The dual is nominative with alif, so «الطالبان» takes alif.'
  },
  {
    componentAr: 'الرسم الكتابي',
    componentEn: 'Handwriting',
    titleAr: 'التدرب على خط النسخ',
    titleEn: 'Practicing Naskh Script',
    pages: '98',
    focusAr: 'تحسين وضوح الكتابة بخط النسخ مع مراعاة شكل الحروف واتصالها والمسافات.',
    focusEn: 'Improve Naskh handwriting by attending to letter shapes, connections, and spacing.',
    takeawayAr: 'تتحسن الكتابة بالتأني والمحافظة على تناسق الحروف والمسافات.',
    takeawayEn: 'Careful writing and consistent letter shapes and spacing improve legibility.',
    stepsAr: ['ألاحظ النموذج', 'أكتب ببطء', 'أوازن الحروف', 'أراجع الوضوح'],
    stepsEn: ['Observe a model', 'Write slowly', 'Balance letter forms', 'Check legibility'],
    exampleAr: 'أكتب جملة قصيرة بخط النسخ، ثم أراجع اتصال الحروف ووضوح الكلمات.',
    exampleEn: 'Write a short sentence in Naskh, then check letter connections and word legibility.',
    questionAr: 'ما الذي يساعد على وضوح خط النسخ؟',
    questionEn: 'What helps make Naskh handwriting legible?',
    optionsAr: ['مراعاة شكل الحروف والمسافات', 'تداخل الكلمات', 'الكتابة بسرعة دون مراجعة', 'إهمال اتصال الحروف'],
    optionsEn: ['Attend to letter shapes and spacing', 'Let words overlap', 'Write quickly without review', 'Ignore letter connections'],
    correctIndex: 0,
    explanationAr: 'تناسق الحروف والمسافات يجعل الكلمات أكثر وضوحًا.',
    explanationEn: 'Consistent letter shapes and spacing make words easier to read.'
  },
  {
    componentAr: 'النص الشعري',
    componentEn: 'Poetry',
    titleAr: 'من أصادق؟: قراءة النص الشعري',
    titleEn: 'Who Should I Befriend?: Reading Poetry',
    pages: '100',
    focusAr: 'قراءة النص الشعري قراءة معبرة، واستخراج فكرته ومفرداته وصوره دون الاكتفاء بالحفظ.',
    focusEn: 'Read a poem expressively and explore its idea, vocabulary, and imagery rather than relying only on memorization.',
    takeawayAr: 'يجمع فهم الشعر بين قراءة الأبيات والتأمل في معانيها وألفاظها.',
    takeawayEn: 'Understanding poetry combines reading the lines with reflecting on their meaning and words.',
    stepsAr: ['أقرأ بوضوح', 'أفسر المفردات', 'أحدد الفكرة', 'أعبر عن الأثر'],
    stepsEn: ['Read clearly', 'Explore vocabulary', 'Find the idea', 'Describe its effect'],
    exampleAr: 'أحدد الصفة التي أبحث عنها في الصديق، ثم أشرح كيف تخدم الأبيات هذه الفكرة.',
    exampleEn: 'Identify a quality to seek in a friend, then explain how the poem develops that idea.',
    questionAr: 'ما أفضل طريقة لفهم نص شعري جديد؟',
    questionEn: 'What is a good way to understand a new poem?',
    optionsAr: ['قراءة الأبيات وفهم مفرداتها وفكرتها', 'حفظ الكلمات دون قراءتها', 'تجاهل المفردات الجديدة', 'الاعتماد على القافية وحدها'],
    optionsEn: ['Read the lines and understand their vocabulary and idea', 'Memorize words without reading', 'Ignore unfamiliar words', 'Rely only on rhyme'],
    correctIndex: 0,
    explanationAr: 'يساعد فهم المفردات والفكرة على قراءة النص الشعري قراءة واعية.',
    explanationEn: 'Understanding vocabulary and the main idea supports thoughtful reading.'
  },
  {
    componentAr: 'بنية النص',
    componentEn: 'Text structure',
    titleAr: 'بنية النص: القصص والنص الإعلاني',
    titleEn: 'Text Structure: Stories and Advertisements',
    pages: '106، 108، 112، 115',
    focusAr: 'التعرف إلى عناصر القصة وتسلسل أحداثها، والتمييز بين غرض النص القصصي وغرض الإعلان.',
    focusEn: 'Recognize story elements and event sequence, and distinguish a story’s purpose from an advertisement’s.',
    takeawayAr: 'يساعد تحديد الغرض والعناصر على فهم طريقة تنظيم كل نص.',
    takeawayEn: 'Identifying purpose and elements helps explain how each text is organized.',
    stepsAr: ['أتعرف نوع النص', 'أحدد الغرض', 'أرتب الأحداث', 'أستدل من السمات'],
    stepsEn: ['Identify the text type', 'Find its purpose', 'Sequence events', 'Use text features'],
    exampleAr: 'أرتب أحداث قصة قصيرة، ثم أقارنها بإعلان يذكر منتجًا ومعلومة تدعو القارئ إلى الاهتمام به.',
    exampleEn: 'Sequence a short story, then compare it with an advertisement that names a product and attracts attention.',
    questionAr: 'ما السمة التي تساعد على تمييز النص الإعلاني؟',
    questionEn: 'Which feature helps identify an advertisement?',
    optionsAr: ['عرض معلومة أو رسالة لجذب الجمهور', 'تتابع أحداث قصة وشخصياتها فقط', 'شرح خطوات تجربة علمية فقط', 'سرد ذكريات بلا غرض'],
    optionsEn: ['A message designed to inform or attract an audience', 'Only a story’s characters and events', 'Only instructions for an experiment', 'A purposeless list of memories'],
    correctIndex: 0,
    explanationAr: 'يهدف الإعلان إلى تقديم رسالة أو معلومة لجمهور محدد.',
    explanationEn: 'An advertisement presents a message or information to a target audience.'
  },
  {
    componentAr: 'التواصل الكتابي',
    componentEn: 'Written communication',
    titleAr: 'كتابة قصة مكتملة العناصر وتصميم إعلان',
    titleEn: 'Writing a Complete Story and Designing an Advertisement',
    pages: '119، 121',
    focusAr: 'كتابة قصة مترابطة العناصر، ثم تصميم إعلان يراعي الرسالة والجمهور ووضوح المعلومات.',
    focusEn: 'Write a coherent story, then design an advertisement with a clear message, audience, and information.',
    takeawayAr: 'تخدم تفاصيل الكتابة غرض النص وتساعد القارئ على فهمه.',
    takeawayEn: 'Writing details should serve the text’s purpose and help the reader understand it.',
    stepsAr: ['أحدد الغرض', 'أخطط للعناصر', 'أكتب مسودة', 'أراجع وأحسن'],
    stepsEn: ['Set a purpose', 'Plan the elements', 'Draft', 'Review and improve'],
    exampleAr: 'أخطط لقصة بمكان وشخصيات وأحداث ونهاية، أو أكتب إعلانًا يوضح فكرته ومعلوماته الأساسية.',
    exampleEn: 'Plan a story with a setting, characters, events, and ending, or draft an ad with a clear idea and key information.',
    questionAr: 'ما الذي ينبغي مراجعته بعد كتابة المسودة؟',
    questionEn: 'What should be reviewed after writing a draft?',
    optionsAr: ['ترابط الأفكار ووضوح الغرض وسلامة الكتابة', 'عدد الألوان فقط', 'حذف الفكرة الرئيسة', 'إضافة معلومات غير مرتبطة'],
    optionsEn: ['Coherence, purpose, and writing accuracy', 'Only the number of colors', 'Remove the main idea', 'Add unrelated information'],
    correctIndex: 0,
    explanationAr: 'تساعد مراجعة الترابط والغرض واللغة على تحسين النص قبل عرضه.',
    explanationEn: 'Reviewing coherence, purpose, and language improves a text before sharing it.'
  },
  {
    componentAr: 'التواصل الشفهي',
    componentEn: 'Oral communication',
    titleAr: 'سرد قصة وعرض شفهي عن مشكلة بيئية',
    titleEn: 'Storytelling and an Oral Presentation about an Environmental Issue',
    pages: '127، 130',
    focusAr: 'سرد الأحداث بترتيب واضح، وإعداد عرض شفهي موجز عن مشكلة بيئية مع فكرة أو حل مناسب.',
    focusEn: 'Tell events in a clear sequence and prepare a brief oral presentation about an environmental issue and a suitable response.',
    takeawayAr: 'يقوى العرض الشفهي بالتنظيم والصوت الواضح واحترام المستمعين.',
    takeawayEn: 'An oral presentation is strengthened by organization, clear speech, and respect for listeners.',
    stepsAr: ['أحدد الفكرة', 'أرتب النقاط', 'أتدرب على العرض', 'أستمع للتغذية الراجعة'],
    stepsEn: ['Choose an idea', 'Organize points', 'Practice presenting', 'Listen to feedback'],
    exampleAr: 'أعرض مشكلة هدر الماء، وأذكر أثرًا واحدًا وخطوة عملية للحد منه.',
    exampleEn: 'Present water waste, explain one effect, and suggest a practical way to reduce it.',
    questionAr: 'ما الذي يجعل العرض الشفهي أسهل متابعة؟',
    questionEn: 'What makes an oral presentation easier to follow?',
    optionsAr: ['ترتيب الأفكار والتحدث بوضوح', 'قراءة الشرائح دون تواصل', 'الإطالة في تفاصيل غير مرتبطة', 'التحدث بصوت لا يسمعه الجمهور'],
    optionsEn: ['Organized ideas and clear speech', 'Read slides without engaging', 'Add lengthy unrelated details', 'Speak too quietly for listeners'],
    correctIndex: 0,
    explanationAr: 'يساعد ترتيب الأفكار ووضوح الصوت الجمهور على متابعة العرض.',
    explanationEn: 'Organized ideas and clear speech help listeners follow a presentation.'
  },
  {
    componentAr: 'اختبار الوحدة',
    componentEn: 'Unit assessment',
    titleAr: 'مراجعة واختبار الوحدة الأولى',
    titleEn: 'Unit 1 Review and Assessment',
    pages: '131',
    focusAr: 'مراجعة مهارات الوحدة ومفاهيمها قبل الإجابة عن أسئلة التقويم.',
    focusEn: 'Review the unit’s skills and concepts before answering assessment questions.',
    takeawayAr: 'توضح المراجعة ما تم إتقانه وما يحتاج إلى تدريب إضافي.',
    takeawayEn: 'Review shows what has been mastered and what needs more practice.',
    stepsAr: ['أراجع المفاهيم', 'أقرأ السؤال', 'أختار دليلًا', 'أتحقق من الإجابة'],
    stepsEn: ['Review concepts', 'Read the question', 'Use evidence', 'Check the answer'],
    exampleAr: 'أراجع علامة رفع المثنى، ثم أختارها في جملة جديدة وأتحقق من موقع الكلمة.',
    exampleEn: 'Review the nominative marker for a dual noun, apply it in a new sentence, and check the word’s role.',
    questionAr: 'ما أفضل طريقة للاستعداد لاختبار الوحدة؟',
    questionEn: 'What is a good way to prepare for the unit assessment?',
    optionsAr: ['مراجعة المهارات والتدرب على تطبيقها', 'حفظ ترتيب الصفحات فقط', 'تجاهل الأسئلة التي أخطأت فيها', 'قراءة العناوين دون فهم'],
    optionsEn: ['Review skills and practice applying them', 'Memorize page order only', 'Ignore questions answered incorrectly', 'Read headings without understanding'],
    correctIndex: 0,
    explanationAr: 'تساعد مراجعة المفاهيم والتدرب على تطبيقها على الاستعداد للتقويم.',
    explanationEn: 'Reviewing concepts and practicing their application supports assessment readiness.'
  }
];

const makeDiagram = (lesson: ArabicGrade5Lesson, id: string, order: number): LectureDiagram => ({
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

const makeQuestion = (lesson: ArabicGrade5Lesson, id: string): Question => ({
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

const makeAssessment = (lesson: ArabicGrade5Lesson, id: string, order: number): Assessment => ({
  id,
  titleAr: `تقويم ${lesson.componentAr}`,
  titleEn: `${lesson.componentEn} Check`,
  passingScore: 80,
  questions: [makeQuestion(lesson, `${id}-q${order}`)]
});

export const SAUDI_PRIMARY_ARABIC_G5_LECTURES: Lecture[] = lessons.map((lesson, index) => {
  const order = index + 1;
  const lectureId = `sa-primary-arabic-g5-1448-u1-${String(order).padStart(2, '0')}`;

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
    gradeLevel: 'G5',
    educationType: 'PUBLIC',
    educationTrack: 'GENERAL',
    gradeLevelNameAr: 'الصف الخامس الابتدائي — لغتي الجميلة، الجزء الأول، طبعة 1448هـ/2026م',
    gradeLevelNameEn: 'Grade 5 Primary — Lughati Al-Jameelah, Part One, 1448 AH/2026 edition',
    ministryAr: 'وزارة التعليم في المملكة العربية السعودية',
    ministryEn: 'Ministry of Education, Saudi Arabia',
    termAr: 'الجزء الأول من المقرر — طبعة 1448هـ/2026م',
    termEn: 'Part One of the curriculum — 1448 AH/2026 edition',
    unitTitleAr,
    unitTitleEn,
    lessonNumberAr: `المكوّن ${order}: ${lesson.componentAr}`,
    lessonNumberEn: `Component ${order}: ${lesson.componentEn}`,
    warmupHookAr: `كيف تطبق مهارة ${lesson.componentAr} عند دراسة وحدة «أخلاق وفضائل»؟`,
    warmupHookEn: `How can you apply ${lesson.componentEn.toLowerCase()} while studying “Ethics and Virtues”?`,
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
